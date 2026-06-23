import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';
import { PTE_BANK_COMPETENCY_COUNTS } from './pte-bank-competency-contract.mjs';

const root = process.cwd();
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const normalize = (value) => String(value ?? '').trim().replace(/\s+/g, ' ').toLowerCase();

async function importStandaloneTsExport(rel, exportName) {
  const source = read(rel).replace(/^import[^\n]*\n/gm, '');
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
    fileName: rel,
  }).outputText;
  const temp = path.join(os.tmpdir(), `pte-bank-${process.pid}-${Date.now()}.mjs`);
  fs.writeFileSync(temp, output);
  try {
    const module = await import(`${pathToFileURL(temp).href}?v=${Date.now()}`);
    return module[exportName];
  } finally {
    fs.rmSync(temp, { force: true });
  }
}

function extractSourceQuestions() {
  const source = read('src/data/pte/ptePraUASQuestionSource.ts');
  const match = source.match(/PTE_PRA_UAS_SOURCE_QUESTIONS[^=]*=\s*(\[[\s\S]*\]);\s*$/);
  if (!match) throw new Error('Array source questions tidak ditemukan');
  return JSON.parse(match[1]);
}

function assertUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    const key = normalize(value);
    assert(key.length > 0, `${label}: nilai kosong`);
    assert(!seen.has(key), `${label}: duplikat ${value}`);
    seen.add(key);
  }
}

const questions = await importStandaloneTsExport('src/data/banksoal/ekt109Bank.ts', 'EKT109_BANK_QUESTIONS');
const sourceQuestions = extractSourceQuestions();

assert(Array.isArray(questions) && questions.length === 100, `Bank EKT109: ${questions?.length}, expected 100`);
assert(sourceQuestions.length === 64, `Source companion: ${sourceQuestions.length}, expected 64`);
const openEconomyIds = ['PTE-BANK-SRC-013', 'PTE-BANK-SRC-014'];
for (const id of openEconomyIds) {
  const question = questions.find((item) => item.id === id);
  assert(question?.tm === 12, `${id}: harus diklasifikasikan sebagai TM12`);
  assert(question?.topic?.startsWith('Perekonomian Terbuka'), `${id}: topic harus Perekonomian Terbuka`);
}
assertUnique(questions.map((question) => question.id), 'Bank EKT109 id');
assertUnique(questions.map((question) => question.prompt), 'Bank EKT109 prompt');

const phaseCounts = new Map();
const statusCounts = new Map();
const tmCounts = new Map();
const competencyCounts = new Map();
const kindCounts = new Map();
const fourKeyCounts = [0, 0, 0, 0];
const tfKeyCounts = [0, 0];
const graphIds = [];
const sourceRefs = new Set();

for (const [index, question] of questions.entries()) {
  for (const field of ['id', 'phase', 'topic', 'difficulty', 'competency', 'kind', 'sourceRef', 'sourceStatus', 'prompt', 'explanation']) {
    assert(typeof question[field] === 'string' && question[field].trim(), `Bank EKT109 ${index + 1}: ${field} kosong`);
  }
  assert(Number.isInteger(question.tm) && question.tm >= 1 && question.tm <= 14, `Bank EKT109 ${index + 1}: TM invalid`);
  const expectedPhase = question.tm <= 7 ? 'pra-uts' : 'pra-uas';
  assert(question.phase === expectedPhase, `Bank EKT109 ${question.id}: phase ${question.phase}, expected ${expectedPhase}`);
  phaseCounts.set(question.phase, (phaseCounts.get(question.phase) ?? 0) + 1);
  statusCounts.set(question.sourceStatus, (statusCounts.get(question.sourceStatus) ?? 0) + 1);
  tmCounts.set(question.tm, (tmCounts.get(question.tm) ?? 0) + 1);
  competencyCounts.set(question.competency, (competencyCounts.get(question.competency) ?? 0) + 1);
  kindCounts.set(question.kind, (kindCounts.get(question.kind) ?? 0) + 1);

  if (question.sourceStatus === 'adapted-source') {
    const match = question.sourceRef.match(/PTE-SRC-Q\d{3}/);
    assert(Boolean(match), `Bank EKT109 ${question.id}: sourceRef companion invalid`);
    if (match) sourceRefs.add(match[0]);
  }

  if (['single-choice', 'true-false', 'graph'].includes(question.kind)) {
    assert(Array.isArray(question.options) && [2, 4].includes(question.options.length), `Bank EKT109 ${question.id}: opsi choice invalid`);
    assertUnique(question.options ?? [], `Bank EKT109 ${question.id} options`);
    assert(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < question.options.length, `Bank EKT109 ${question.id}: answerIndex invalid`);
    if (question.options.length === 4) fourKeyCounts[question.answerIndex] += 1;
    if (question.kind === 'true-false') tfKeyCounts[question.answerIndex] += 1;
  } else if (question.kind === 'multi-select') {
    assert(Array.isArray(question.options) && question.options.length >= 4, `Bank EKT109 ${question.id}: opsi multi-select kurang`);
    assertUnique(question.options ?? [], `Bank EKT109 ${question.id} options`);
    assert(Array.isArray(question.answerIndexes) && question.answerIndexes.length >= 2, `Bank EKT109 ${question.id}: answerIndexes invalid`);
    assert(new Set(question.answerIndexes ?? []).size === question.answerIndexes?.length, `Bank EKT109 ${question.id}: answerIndexes duplikat`);
    for (const answer of question.answerIndexes ?? []) assert(Number.isInteger(answer) && answer >= 0 && answer < question.options.length, `Bank EKT109 ${question.id}: indeks multi invalid`);
  } else if (question.kind === 'matching') {
    assert(Array.isArray(question.pairs) && question.pairs.length >= 3, `Bank EKT109 ${question.id}: pairs kurang`);
    assert(Array.isArray(question.choices) && question.choices.length >= question.pairs.length, `Bank EKT109 ${question.id}: choices kurang`);
    assertUnique((question.pairs ?? []).map((pair) => pair.prompt), `Bank EKT109 ${question.id} matching prompt`);
    assertUnique(question.choices ?? [], `Bank EKT109 ${question.id} matching choices`);
    for (const pair of question.pairs ?? []) assert(question.choices.includes(pair.answer), `Bank EKT109 ${question.id}: jawaban matching hilang`);
    const matchingAnswerOrder = (question.pairs ?? []).map((pair) => pair.answer);
    assert(question.choices.join('||') !== matchingAnswerOrder.join('||'), `Bank EKT109 ${question.id}: choices matching masih sama persis dengan urutan jawaban`);
  } else if (question.kind === 'ordering') {
    assert(Array.isArray(question.items) && question.items.length >= 4, `Bank EKT109 ${question.id}: items urutan kurang`);
    assert(Array.isArray(question.correctOrder) && question.correctOrder.length === question.items.length, `Bank EKT109 ${question.id}: correctOrder invalid`);
    assertUnique(question.items ?? [], `Bank EKT109 ${question.id} ordering items`);
    assert([...question.items].sort().join('|') === [...question.correctOrder].sort().join('|'), `Bank EKT109 ${question.id}: set urutan berbeda`);
  } else if (question.kind === 'numeric') {
    assert(typeof question.answer === 'number' && Number.isFinite(question.answer), `Bank EKT109 ${question.id}: jawaban angka invalid`);
    assert(question.tolerance === undefined || (typeof question.tolerance === 'number' && question.tolerance >= 0), `Bank EKT109 ${question.id}: tolerance invalid`);
  } else if (question.kind === 'short-answer') {
    assert(question.assessmentMode === 'guided-review', `Bank EKT109 ${question.id}: assessmentMode harus guided-review`);
    assert(question.simulatorEligible === false, `Bank EKT109 ${question.id}: review terpandu tidak boleh masuk simulator`);
    assert(typeof question.answerGuide === 'string' && question.answerGuide.trim(), `Bank EKT109 ${question.id}: answerGuide kosong`);
  } else {
    assert(false, `Bank EKT109 ${question.id}: kind tidak didukung (${question.kind})`);
  }

  if (question.kind === 'graph') {
    for (const field of ['svg', 'altText']) assert(typeof question[field] === 'string' && question[field].trim(), `Bank EKT109 ${question.id}: ${field} grafik kosong`);
    const idMatch = question.svg.match(/data-graph-id="([^"]+)"/);
    assert(Boolean(idMatch), `Bank EKT109 ${question.id}: data-graph-id hilang`);
    if (idMatch) graphIds.push(idMatch[1]);
    assert(question.svg.includes('<title'), `Bank EKT109 ${question.id}: SVG title hilang`);
    assert(question.svg.includes('<desc'), `Bank EKT109 ${question.id}: SVG desc hilang`);
    assert(question.svg.includes('role="img"'), `Bank EKT109 ${question.id}: SVG role img hilang`);
    assert(!/<script|on\w+=|javascript:|foreignObject|<image/i.test(question.svg), `Bank EKT109 ${question.id}: SVG mengandung elemen tidak aman`);
  }
}

assert(phaseCounts.get('pra-uts') === 36, `Pra-UTS: ${phaseCounts.get('pra-uts') ?? 0}, expected 36`);
assert(phaseCounts.get('pra-uas') === 64, `Pra-UAS: ${phaseCounts.get('pra-uas') ?? 0}, expected 64`);
assert(statusCounts.get('adapted-source') === 64, `adapted-source: ${statusCounts.get('adapted-source') ?? 0}, expected 64`);
assert(statusCounts.get('generated-from-reading') === 36, `generated-from-reading: ${statusCounts.get('generated-from-reading') ?? 0}, expected 36`);
for (let tm = 1; tm <= 14; tm += 1) assert((tmCounts.get(tm) ?? 0) > 0, `TM ${tm}: tidak memiliki soal`);

for (const [competency, expected] of Object.entries(PTE_BANK_COMPETENCY_COUNTS)) {
  assert(competencyCounts.get(competency) === expected, `${competency}: ${competencyCounts.get(competency) ?? 0}, expected ${expected}`);
}

const expectedKinds = {
  'single-choice': 27,
  'true-false': 11,
  'multi-select': 4,
  matching: 4,
  ordering: 4,
  numeric: 15,
  graph: 25,
  'short-answer': 10,
};
for (const [kind, expected] of Object.entries(expectedKinds)) assert(kindCounts.get(kind) === expected, `Kind ${kind}: ${kindCounts.get(kind) ?? 0}, expected ${expected}`);
assert(fourKeyCounts.every((count) => count === 12), `Distribusi kunci 4 opsi: ${fourKeyCounts.join('/')}, expected 12/12/12/12`);
assert(Math.abs(tfKeyCounts[0] - tfKeyCounts[1]) <= 1, `Distribusi benar/salah: ${tfKeyCounts.join('/')}`);
assert(graphIds.length === 25, `Grafik: ${graphIds.length}, expected 25`);
assertUnique(graphIds, 'Bank EKT109 graph id');

const expectedSourceRefs = new Set(sourceQuestions.map((question) => question.id));
assert(sourceRefs.size === 64, `Source refs aktif: ${sourceRefs.size}, expected 64`);
for (const id of expectedSourceRefs) assert(sourceRefs.has(id), `Source question belum terwakili: ${id}`);

const numericSourceAnswers = new Map([
  ['PTE-SRC-Q003', 125], ['PTE-SRC-Q005', 4], ['PTE-SRC-Q009', 5],
  ['PTE-SRC-Q043', 5], ['PTE-SRC-Q044', 1600], ['PTE-SRC-Q045', 10],
  ['PTE-SRC-Q046', 3], ['PTE-SRC-Q047', -3], ['PTE-SRC-Q048', 5],
  ['PTE-SRC-Q049', 1850], ['PTE-SRC-Q050', 10],
]);
for (const sourceQuestion of sourceQuestions) {
  const active = questions.find((question) => question.sourceRef.includes(sourceQuestion.id));
  assert(Boolean(active), `Source question aktif tidak ditemukan: ${sourceQuestion.id}`);
  if (!active) continue;
  assert(active.prompt === sourceQuestion.prompt, `${sourceQuestion.id}: prompt berubah`);
  assert(active.explanation === sourceQuestion.explanation, `${sourceQuestion.id}: explanation berubah`);
  if (active.kind === 'numeric') {
    assert(active.answer === numericSourceAnswers.get(sourceQuestion.id), `${sourceQuestion.id}: jawaban numerik tidak sesuai audit`);
  } else if (active.kind === 'short-answer') {
    assert(active.assessmentMode === 'guided-review' && active.simulatorEligible === false, `${sourceQuestion.id}: kontrak review terpandu invalid`);
    assert(active.answerGuide === sourceQuestion.explanation, `${sourceQuestion.id}: panduan jawaban tidak sesuai source`);
  } else if (Array.isArray(sourceQuestion.options)) {
    const originalCorrect = sourceQuestion.options[sourceQuestion.answerIndex];
    const activeCorrect = active.options[active.answerIndex];
    assert(activeCorrect === originalCorrect, `${sourceQuestion.id}: opsi benar berubah setelah redistribusi`);
  }
}

const quizRegistry = read('src/data/quizzes/index.ts');
assert(!quizRegistry.includes('ekt109Bank'), 'Bank EKT109 tidak boleh masuk quiz/simulator registry pada Batch 5');
const bankList = read('src/components/course/BankQuestionList.tsx');
assert(bankList.includes("course.code === 'EKT109' ? <PteBankSoalTab />"), 'Lazy branch EKT109 bank belum aktif');
const nonPteRegistry = read('src/data/banksoal/nonPte.ts');
assert(!nonPteRegistry.includes('ekt109'), 'Registry bank non-PTE masih mengimpor data EKT109');
assert(!fs.existsSync(path.join(root, 'src/data/banksoal/ekt109.ts')), 'File bank EKT109 lama masih ada dan berpotensi menjadi source of truth kedua');

if (failures.length) {
  console.error(`PTE bank validation failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('PTE bank validation passed.');
console.log(`Questions: ${questions.length} | Pra-UTS: ${phaseCounts.get('pra-uts')} | Pra-UAS: ${phaseCounts.get('pra-uas')} | Graphs: ${graphIds.length}`);
console.log(`4-option key distribution: ${fourKeyCounts.join('/')} | T/F: ${tfKeyCounts.join('/')}`);
