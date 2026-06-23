import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = process.cwd();
const integritySourcePath = path.join(root, 'src/lib/quizExamIntegrity.ts');
const integritySource = fs.readFileSync(integritySourcePath, 'utf8');
const domTest = fileURLToPath(new URL('./test-pte-simulator-auto-submit-dom.mjs', import.meta.url));
const failures = [];
const temporaryFiles = [];
let mutantCounter = 0;

for (const [directory, prefix] of [
  [path.join(root, 'src/lib'), '.quizExamIntegrity.mutant-'],
  [path.join(root, 'src/components'), '.QuizView.auto-submit-mutant-'],
  [path.join(root, 'src/components'), '.PteSimulatorTab.auto-submit-mutant-'],
]) {
  for (const filename of fs.readdirSync(directory)) {
    if (filename.startsWith(prefix)) fs.rmSync(path.join(directory, filename), { force: true });
  }
}

const scoringFixtures = {
  mcq: [{ id: 'M-MCQ', q: 'MCQ?', options: ['A', 'B'], answer: 1 }, { pick: 1 }],
  'multi-select': [{ id: 'M-MULTI', kind: 'multi-select', q: 'Multi?', options: ['A', 'B', 'C'], answers: [0, 2] }, { multi: [2, 0] }],
  'report-fill': [{ id: 'M-NUM', kind: 'report-fill', q: 'Numeric?', blanks: [{ id: 'x', label: 'X', answer: 100, tolerance: 0.5 }] }, { fills: { x: '100,4' } }],
  'account-match': [{ id: 'M-MATCH', kind: 'account-match', q: 'Match?', choices: ['X', 'Y'], pairs: [{ prompt: 'A', answer: 'X' }, { prompt: 'B', answer: 'Y' }] }, { matches: { A: 'X', B: 'Y' } }],
  ordering: [{ id: 'M-ORDER', kind: 'ordering', q: 'Order?', items: ['A', 'B', 'C'], correctOrder: ['B', 'A', 'C'] }, { ordering: ['B', 'A', 'C'] }],
};

const fingerprintBase = [
  { id: 'FP-MCQ', tm: 1, q: 'Fingerprint pilihan?', svg: '<svg role="img"><text>A</text></svg>', altText: 'Grafik fingerprint', sourceRef: 'Reading EKT109 TM 1', sourceAnchors: ['A'], options: ['A', 'B'], answer: 1 },
  { id: 'FP-MULTI', kind: 'multi-select', tm: 2, q: 'Fingerprint multi?', sourceRef: 'Reading EKT109 TM 2', sourceAnchors: ['B'], options: ['A', 'B', 'C'], answers: [0, 2] },
  { id: 'FP-NUM', kind: 'report-fill', tm: 3, q: 'Fingerprint angka?', sourceRef: 'Reading EKT109 TM 3', sourceAnchors: ['C'], blanks: [{ id: 'x', label: 'X', answer: 10, tolerance: 1 }] },
  { id: 'FP-MATCH', kind: 'account-match', tm: 4, q: 'Fingerprint matching?', sourceRef: 'Reading EKT109 TM 4', sourceAnchors: ['D'], choices: ['X', 'Y'], pairs: [{ prompt: 'A', answer: 'X' }, { prompt: 'B', answer: 'Y' }] },
  { id: 'FP-ORDER', kind: 'ordering', tm: 5, q: 'Fingerprint ordering?', sourceRef: 'Reading EKT109 TM 5', sourceAnchors: ['E'], items: ['A', 'B', 'C'], correctOrder: ['B', 'A', 'C'] },
  { id: 'FP-KIND', kind: 'kind-alpha', tm: 6, q: 'Fingerprint kind?', sourceRef: 'Reading EKT109 TM 6', sourceAnchors: ['F'] },
];
const fingerprintChanges = {
  id: (items) => { items[0].id = 'FP-MCQ-X'; },
  tm: (items) => { items[0].tm = 7; },
  kind: (items) => { items[5].kind = 'kind-beta'; },
  q: (items) => { items[0].q += ' berubah'; },
  svg: (items) => { items[0].svg = '<svg role="img"><text>B</text></svg>'; },
  altText: (items) => { items[0].altText += ' berubah'; },
  sourceRef: (items) => { items[0].sourceRef = 'Reading EKT109 TM 9'; },
  sourceAnchors: (items) => { items[0].sourceAnchors = ['Z']; },
  options: (items) => { items[0].options[0] = 'C'; },
  answer: (items) => { items[0].answer = 0; },
  answers: (items) => { items[1].answers = [1, 2]; },
  blanks: (items) => { items[2].blanks[0].answer = 11; },
  pairs: (items) => { items[3].pairs[0].answer = 'Y'; },
  'ordering.items': (items) => { items[4].items[0] = 'Z'; },
  'ordering.correctOrder': (items) => { items[4].correctOrder = ['A', 'B', 'C']; },
};

function makeMutant(source, from, to, name) {
  const count = source.split(from).length - 1;
  if (count !== 1) {
    failures.push(`${name}: setup expected one marker, found ${count}`);
    return null;
  }
  mutantCounter += 1;
  const filename = `.quizExamIntegrity.mutant-${process.pid}-${mutantCounter}.ts`;
  const filepath = path.join(root, 'src/lib', filename);
  fs.writeFileSync(filepath, source.replace(from, to));
  temporaryFiles.push(filepath);
  return `/src/lib/${filename}`;
}

const scoringMutations = [
  ['mcq', 'return response.pick === question.answer;', 'return false;'],
  ['multi-select', "return [...selected].sort((a, b) => a - b).join(',') === [...question.answers].sort((a, b) => a - b).join(',');", 'return false;'],
  ['report-fill', 'return question.blanks.every((blank) => {', 'return false && question.blanks.every((blank) => {'],
  ['account-match', 'return question.pairs.every((pair) => matches[pair.prompt] === pair.answer);', 'return false;'],
  ['ordering', 'return question.correctOrder.every((item, index) => ordering[index] === item);', 'return false;'],
];
const fingerprintMutations = [
  ['id', 'id: question.id,', 'id: undefined,'],
  ['tm', 'tm: question.tm,', 'tm: undefined,'],
  ['kind', "kind: question.kind ?? 'mcq',", 'kind: undefined,'],
  ['q', 'q: question.q,', 'q: undefined,'],
  ['svg', 'svg: question.svg,', 'svg: undefined,'],
  ['altText', 'altText: question.altText,', 'altText: undefined,'],
  ['sourceRef', 'sourceRef: question.sourceRef,', 'sourceRef: undefined,'],
  ['sourceAnchors', 'sourceAnchors: question.sourceAnchors,', 'sourceAnchors: undefined,'],
  ['options', "options: 'options' in question ? question.options : undefined,", 'options: undefined,'],
  ['answer', "answer: !question.kind || question.kind === 'mcq' ? question.answer : undefined,", 'answer: undefined,'],
  ['answers', "answers: question.kind === 'multi-select' ? question.answers : undefined,", 'answers: undefined,'],
  ['blanks', `blanks: question.kind === 'report-fill'
      ? question.blanks.map((blank) => ({ id: blank.id, answer: blank.answer, tolerance: blank.tolerance ?? 0 }))
      : undefined,`, 'blanks: undefined,'],
  ['pairs', `pairs: question.kind === 'account-match'
      ? question.pairs.map((pair) => ({ prompt: pair.prompt, answer: pair.answer }))
      : undefined,`, 'pairs: undefined,'],
  ['ordering.items', `ordering: question.kind === 'ordering'
      ? { items: question.items, correctOrder: question.correctOrder }
      : undefined,`, "ordering: question.kind === 'ordering' ? { items: undefined, correctOrder: question.correctOrder } : undefined,"],
  ['ordering.correctOrder', `ordering: question.kind === 'ordering'
      ? { items: question.items, correctOrder: question.correctOrder }
      : undefined,`, "ordering: question.kind === 'ordering' ? { items: question.items, correctOrder: undefined } : undefined,"],
];

const vite = await createServer({ appType: 'custom', logLevel: 'silent', server: { middlewareMode: true, hmr: { port: 24779 } }, optimizeDeps: { noDiscovery: true } });
try {
  for (const [kind, from, to] of scoringMutations) {
    const modulePath = makeMutant(integritySource, from, to, `scoring-${kind}`);
    if (!modulePath) continue;
    const mutant = await vite.ssrLoadModule(modulePath);
    const [question, response] = scoringFixtures[kind];
    if (mutant.isQuizResponseCorrect(question, response) === true) failures.push(`scoring-${kind}: mutant survived`);
  }

  for (const [field, from, to] of fingerprintMutations) {
    const modulePath = makeMutant(integritySource, from, to, `fingerprint-${field}`);
    if (!modulePath) continue;
    const mutant = await vite.ssrLoadModule(modulePath);
    const baseline = mutant.getQuizDatasetFingerprint(fingerprintBase);
    const changed = structuredClone(fingerprintBase);
    fingerprintChanges[field](changed);
    if (mutant.getQuizDatasetFingerprint(changed) !== baseline) failures.push(`fingerprint-${field}: mutant survived`);
  }
} finally {
  await vite.close();
  temporaryFiles.forEach((filepath) => fs.rmSync(filepath, { force: true }));
}

// Live auto-submit mutation is exercised through the real React timer effect.
const quizViewPath = path.join(root, 'src/components/QuizView.tsx');
const pteTabPath = path.join(root, 'src/components/PteSimulatorTab.tsx');
const quizViewSource = fs.readFileSync(quizViewPath, 'utf8');
const pteTabSource = fs.readFileSync(pteTabPath, 'utf8');
const autoMarker = `    setAutoSubmitted(true);
    setSubmitted(true);
    setReviewFilter('all');`;
const autoMutant = `    setAutoSubmitted(true);
    void setSubmitted;
    setReviewFilter('all');`;
const markerCount = quizViewSource.split(autoMarker).length - 1;
if (markerCount !== 1) {
  failures.push(`live-auto-submit: setup expected one marker, found ${markerCount}`);
} else {
  const suffix = `${process.pid}-${Date.now()}`;
  const mutantQuizName = `.QuizView.auto-submit-mutant-${suffix}.tsx`;
  const mutantTabName = `.PteSimulatorTab.auto-submit-mutant-${suffix}.tsx`;
  const mutantQuizPath = path.join(root, 'src/components', mutantQuizName);
  const mutantTabPath = path.join(root, 'src/components', mutantTabName);
  try {
    fs.writeFileSync(mutantQuizPath, quizViewSource.replace(autoMarker, autoMutant));
    const importMarker = "import QuizView, { type QuizSet } from './QuizView';";
    const importReplacement = `import QuizView, { type QuizSet } from './${mutantQuizName.replace(/\.tsx$/, '')}';`;
    fs.writeFileSync(mutantTabPath, pteTabSource.replace(importMarker, importReplacement));
    const result = spawnSync(process.execPath, [domTest], {
      cwd: root,
      env: { ...process.env, PTE_SIMULATOR_COMPONENT_MODULE: `/src/components/${mutantTabName}` },
      encoding: 'utf8',
      timeout: 180000,
    });
    const output = `${result.stdout ?? ''}\n${result.stderr ?? ''}`;
    if (result.error) failures.push(`live-auto-submit: runner error ${result.error.message}`);
    else if (result.status === 0) failures.push('live-auto-submit: mutant survived');
    else if (!output.includes('LIVE_AUTO_SUBMIT')) failures.push(`live-auto-submit: failed for unexpected reason: ${output.trim().slice(0, 700)}`);
  } finally {
    fs.rmSync(mutantQuizPath, { force: true });
    fs.rmSync(mutantTabPath, { force: true });
  }
}

if (failures.length) {
  console.error(`PTE simulator mutation test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`PTE simulator mutation test passed: ${scoringMutations.length} scoring, ${fingerprintMutations.length} fingerprint-field, and 1 live auto-submit mutant were killed.`);
