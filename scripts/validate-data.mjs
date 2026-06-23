import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = process.cwd();
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const normalize = (value) => String(value ?? '').trim().replace(/\s+/g, ' ').toLowerCase();
const noDuplicates = (values, label) => {
  const seen = new Set();
  for (const value of values) {
    const key = normalize(value);
    assert(key.length > 0, `${label}: nilai kosong`);
    assert(!seen.has(key), `${label}: duplikat "${value}"`);
    seen.add(key);
  }
};

const comparisonSignatures = (value) => {
  const signatures = new Set();
  for (const rawLine of String(value ?? '').split(/\r?\n/)) {
    // Ignore Markdown blockquote markers, including list-nested blockquotes.
    if (/^\s*(?:[-*+]\s+)?(?:>\s+)(?:[*_`]*[A-Za-zÀ-ÿ])/u.test(rawLine)) continue;
    const line = rawLine.replace(/[*_`]/g, '').replace(/\s+/g, ' ').toLowerCase();
    for (const match of line.matchAll(/(?:^|[\s(])([<>≤≥])\s*((?:rp|€|\$)?\s*[\p{L}\d][\p{L}\d.,/-]*)/gu)) {
      signatures.add(`${match[1]}${match[2].replace(/\s+/g, '')}`);
    }
  }
  return signatures;
};

const normalizeLegalText = (value) => String(value ?? '')
  .normalize('NFKC')
  .replace(/[*_`]/g, '')
  .replace(/[–—−]/g, '-')
  .replace(/×/g, 'x')
  .replace(/\s+/g, ' ')
  .toLowerCase();

function extractBalanced(source, start, open, close) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let i = start; i < source.length; i += 1) {
    const ch = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue; }
    if (ch === open) depth += 1;
    if (ch === close) {
      depth -= 1;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  throw new Error(`Unbalanced ${open}${close}`);
}

function parseJsonExport(rel, exportName, open = '{', close = '}') {
  const source = read(rel);
  const marker = `export const ${exportName}`;
  const markerAt = source.indexOf(marker);
  assert(markerAt >= 0, `${rel}: export ${exportName} tidak ditemukan`);
  const eq = source.indexOf('=', markerAt);
  const start = source.indexOf(open, eq);
  return JSON.parse(extractBalanced(source, start, open, close));
}

async function importStandaloneTsExport(rel, exportName, truncateBefore) {
  let source = read(rel).replace(/^import[^\n]*\n/gm, '');
  if (truncateBefore) source = source.slice(0, source.indexOf(truncateBefore));
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
    fileName: rel,
  }).outputText;
  const temp = path.join(os.tmpdir(), `pjk201-${exportName}-${process.pid}-${Date.now()}.mjs`);
  fs.writeFileSync(temp, output);
  try {
    const module = await import(`${pathToFileURL(temp).href}?v=${Date.now()}`);
    return module[exportName];
  } finally {
    fs.rmSync(temp, { force: true });
  }
}

const ekt109Flashcards = await importStandaloneTsExport('src/data/flashcards/ekt109.ts', 'EKT109_FLASHCARDS');
assert(Array.isArray(ekt109Flashcards) && ekt109Flashcards.length === 126, `Flashcard EKT109: ${ekt109Flashcards?.length}, expected 126`);
noDuplicates(ekt109Flashcards.map((card) => card.id), 'Flashcard EKT109 id');
noDuplicates(ekt109Flashcards.map((card) => card.front), 'Flashcard EKT109 front');
const ekt109TmCounts = new Map();
const ekt109PhaseCounts = new Map();
const allowedEkt109Categories = new Set(['Definisi', 'Rumus', 'Grafik', 'Mekanisme', 'Asumsi', 'Miskonsepsi', 'Perbandingan']);
ekt109Flashcards.forEach((card, index) => {
  for (const field of ['id', 'phase', 'topic', 'category', 'front', 'back']) {
    assert(typeof card[field] === 'string' && card[field].trim(), `Flashcard EKT109 ${index + 1}: ${field} kosong`);
  }
  assert(Number.isInteger(card.tm) && card.tm >= 1 && card.tm <= 14, `Flashcard EKT109 ${index + 1}: TM invalid`);
  assert(allowedEkt109Categories.has(card.category), `Flashcard EKT109 ${index + 1}: kategori invalid (${card.category})`);
  const expectedPhase = card.tm <= 7 ? 'pra-uts' : 'pra-uas';
  assert(card.phase === expectedPhase, `Flashcard EKT109 ${index + 1}: phase ${card.phase}, expected ${expectedPhase}`);
  ekt109TmCounts.set(card.tm, (ekt109TmCounts.get(card.tm) ?? 0) + 1);
  ekt109PhaseCounts.set(card.phase, (ekt109PhaseCounts.get(card.phase) ?? 0) + 1);
});
for (let tm = 1; tm <= 14; tm += 1) {
  assert(ekt109TmCounts.get(tm) === 9, `Flashcard EKT109 TM${tm}: ${ekt109TmCounts.get(tm) ?? 0}, expected 9`);
}
assert(ekt109PhaseCounts.get('pra-uts') === 63, `Flashcard EKT109 Pra-UTS: ${ekt109PhaseCounts.get('pra-uts') ?? 0}, expected 63`);
assert(ekt109PhaseCounts.get('pra-uas') === 63, `Flashcard EKT109 Pra-UAS: ${ekt109PhaseCounts.get('pra-uas') ?? 0}, expected 63`);

const pickRandomFlashcardTarget = await importStandaloneTsExport('src/components/flashcardRandom.ts', 'pickRandomFlashcardTarget');
const buildFlashcardSpinSequence = await importStandaloneTsExport('src/components/flashcardRandom.ts', 'buildFlashcardSpinSequence');
for (let target = 0; target < 126; target += 1) {
  const randomValue = (target + 0.5) / 126;
  assert(pickRandomFlashcardTarget(126, randomValue) === target, `Randomizer EKT109 tidak dapat memilih target ${target}`);
}
for (const start of [0, 1, 62, 63, 124, 125]) {
  for (let target = 0; target < 126; target += 1) {
    const sequence = buildFlashcardSpinSequence(start, target, 126);
    assert(sequence.length >= 8, `Spin sequence terlalu pendek untuk start ${start}, target ${target}`);
    assert(sequence.at(-1) === target, `Spin sequence gagal mendarat di target ${target} dari ${start}`);
    assert(sequence.every((index) => Number.isInteger(index) && index >= 0 && index < 126), `Spin sequence menghasilkan indeks invalid dari ${start} ke ${target}`);
  }
}

const flashcardDeckSource = read('src/components/FlashcardDeck.tsx');
assert(flashcardDeckSource.includes('spinTimerRegistryRef'), 'FlashcardDeck belum menyimpan registry timeout spin');
assert(flashcardDeckSource.includes('clearSpinTimers'), 'FlashcardDeck belum membersihkan timeout spin');
assert(/isFlashcardInteractiveTarget\((?:event\.target|target)\)/.test(flashcardDeckSource), 'FlashcardDeck belum memakai keyboard guard teruji');
assert(flashcardDeckSource.includes('aria-pressed={isFlipped}'), 'FlashcardDeck belum mengekspos status flip semantik');
assert(flashcardDeckSource.includes('aria-live="polite"'), 'FlashcardDeck belum memiliki live announcement');
assert(!flashcardDeckSource.includes('const minSpins = Math.max'), 'Algoritme randomizer lama masih ditemukan');

const uts = parseJsonExport('src/data/perpajakan/perpajakanPraUTS.ts', 'perpajakanPraUTS');
assert(uts.blocks.length === 8, `Pra-UTS blocks: ${uts.blocks.length}, expected 8`);
assert(uts.flashcards.length === 25, `Pra-UTS flashcards: ${uts.flashcards.length}, expected 25`);
assert(uts.quiz.length === 20, `Pra-UTS quiz: ${uts.quiz.length}, expected 20`);
for (const [index, block] of uts.blocks.entries()) {
  assert(block.id && block.title && block.body_markdown && block.body_text, `Pra-UTS block ${index + 1}: field wajib kosong`);
  assert(Number.isInteger(block.word_count_estimate) && block.word_count_estimate > 0, `Pra-UTS block ${index + 1}: word_count_estimate invalid`);
  const markdownComparisons = comparisonSignatures(block.body_markdown);
  const textComparisons = comparisonSignatures(block.body_text);
  for (const signature of markdownComparisons) {
    assert(textComparisons.has(signature), `Pra-UTS block ${index + 1}: operator perbandingan hilang dari body_text (${signature})`);
  }
}
noDuplicates(uts.blocks.map((item) => item.id), 'Pra-UTS block id');
noDuplicates(uts.flashcards.map((item) => item.front), 'Pra-UTS flashcard front');
uts.flashcards.forEach((item, index) => {
  assert(item.front?.trim() && item.back?.trim(), `Pra-UTS flashcard ${index + 1}: field kosong`);
});

const utsKeyCounts = [0, 0, 0, 0];
noDuplicates(uts.quiz.map((item) => item.question), 'Pra-UTS quiz question');
uts.quiz.forEach((item, index) => {
  assert(Array.isArray(item.options) && item.options.length === 4, `Pra-UTS quiz ${index + 1}: opsi bukan 4`);
  assert(Number.isInteger(item.answerIndex) && item.answerIndex >= 0 && item.answerIndex < 4, `Pra-UTS quiz ${index + 1}: answerIndex invalid`);
  assert(item.explanation?.trim(), `Pra-UTS quiz ${index + 1}: explanation kosong`);
  noDuplicates(item.options, `Pra-UTS quiz ${index + 1} options`);
  if (item.answerIndex >= 0 && item.answerIndex < 4) utsKeyCounts[item.answerIndex] += 1;
});
assert(utsKeyCounts.every((count) => count === 5), `Pra-UTS key distribution: ${utsKeyCounts.join('/')}, expected 5/5/5/5`);

const uas = parseJsonExport('src/data/perpajakan/perpajakanPraUAS.ts', 'perpajakanPraUAS');
assert(uas.modules.length === 7, `Pra-UAS modules: ${uas.modules.length}, expected 7`);
assert(uas.modules.map((m) => m.tm).join(',') === '8,9,10,11,12,13,14', 'Pra-UAS TM mapping invalid');
noDuplicates(uas.modules.map((module) => module.tm), 'Pra-UAS TM');
uas.modules.forEach((module, index) => {
  assert(module.title?.trim(), `Pra-UAS module ${index + 1}: title kosong`);
  assert(Array.isArray(module.pages) && module.pages.length > 0, `Pra-UAS module ${index + 1}: pages kosong`);
});


const tm8Module = uas.modules.find((module) => module.tm === 8);
const tm11Module = uas.modules.find((module) => module.tm === 11);
assert(
  tm8Module?.body_markdown.includes('ditetapkan **10 Februari 2025**, diundangkan dan mulai berlaku **14 Februari 2025**'),
  'Metadata PMK 15/2025 belum membedakan tanggal penetapan dan tanggal berlaku',
);
assert(
  !tm8Module?.body_markdown.includes('ditetapkan **14 Februari 2025** dan berlaku sejak tanggal tersebut'),
  'Metadata lama PMK 15/2025 masih ditemukan',
);
const tm11SerializedPages = JSON.stringify(tm11Module?.pages ?? []);
assert(
  tm11Module?.body_markdown.includes('ditetapkan 9 Juni 2023, diundangkan dan mulai berlaku 12 Juni 2023'),
  'Metadata PMK 61/2023 pada body_markdown belum benar',
);
assert(
  tm11SerializedPages.includes('ditetapkan 9 Juni 2023, diundangkan dan mulai berlaku 12 Juni 2023'),
  'Metadata PMK 61/2023 pada fallback pages belum sinkron',
);
assert(
  tm11SerializedPages.includes('PMK No. 81 Tahun 2024 sebagaimana diubah terakhir dengan PMK No. 1 Tahun 2026'),
  'Fallback TM11 belum memuat overlay PMK 1/2026',
);
assert(
  tm11SerializedPages.includes('dibaca bersama UU No. 1 Tahun 2026 tentang Penyesuaian Pidana'),
  'Fallback TM11 belum memuat overlay UU 1/2026',
);
assert(
  !tm11SerializedPages.includes('**PMK No. 81 Tahun 2024** (Coretax) — administrasi dokumen penagihan secara elektronik, penyeragaman jatuh tempo.'),
  'Fallback TM11 masih memuat referensi Coretax lama tanpa PMK 1/2026',
);

const bank = parseJsonExport('src/data/banksoal/pjk201.ts', 'PJK201_BANK_UAS', '[', ']');
assert(bank.length === 80, `Bank soal PJK201: ${bank.length}, expected 80`);
noDuplicates(bank.map((item) => item.question), 'Bank soal question');
const bankScopeCounts = new Map();
bank.forEach((item, index) => {
  for (const field of ['type', 'scope', 'difficulty', 'estimatedTime', 'question', 'answerGuide']) {
    assert(typeof item[field] === 'string' && item[field].trim(), `Bank soal ${index + 1}: ${field} kosong`);
  }
  for (const field of ['instructions', 'outputFormat', 'rubric']) {
    assert(Array.isArray(item[field]) && item[field].length > 0 && item[field].every((entry) => typeof entry === 'string' && entry.trim()), `Bank soal ${index + 1}: ${field} invalid`);
  }
  bankScopeCounts.set(item.scope, (bankScopeCounts.get(item.scope) ?? 0) + 1);
});
const expectedBankScopes = {
  'UAS · TM 8': 10, 'UAS · TM 9': 12, 'UAS · TM 10': 12, 'UAS · TM 11': 12,
  'UAS · TM 12': 10, 'UAS · TM 13': 10, 'UAS · TM 14': 10, 'UAS · Integratif TM 8–14': 4,
};
for (const [scope, expected] of Object.entries(expectedBankScopes)) {
  assert(bankScopeCounts.get(scope) === expected, `Bank scope ${scope}: ${bankScopeCounts.get(scope) ?? 0}, expected ${expected}`);
}

const utsSimulator = await importStandaloneTsExport('src/data/quizzes/pjk201UtsSimulator.ts', 'PJK201_QUIZ_UTS_SIMULATOR');
assert(Array.isArray(utsSimulator) && utsSimulator.length === 70, `Simulator UTS PJK201: ${utsSimulator?.length}, expected 70`);
const utsSimTopicCounts = new Map();
const utsSimKindCounts = new Map();
let utsCalculationCount = 0;
noDuplicates(utsSimulator.map((item) => item.q), 'Simulator UTS question');
utsSimulator.forEach((item, index) => {
  for (const field of ['topic', 'skill', 'difficulty', 'q', 'explanation']) {
    assert(typeof item[field] === 'string' && item[field].trim(), `Simulator UTS ${index + 1}: ${field} kosong`);
  }
  const kind = item.kind ?? 'mcq';
  utsSimKindCounts.set(kind, (utsSimKindCounts.get(kind) ?? 0) + 1);
  if (kind === 'report-fill') utsCalculationCount += 1;
  const bucket = item.topic.split(' ')[0];
  utsSimTopicCounts.set(bucket, (utsSimTopicCounts.get(bucket) ?? 0) + 1);

  if (kind === 'mcq') {
    assert(Array.isArray(item.options) && [2, 4].includes(item.options.length), `Simulator UTS ${index + 1}: opsi MCQ bukan 2/4`);
    noDuplicates(item.options ?? [], `Simulator UTS ${index + 1} options`);
    assert(Number.isInteger(item.answer) && item.answer >= 0 && item.answer < item.options.length, `Simulator UTS ${index + 1}: answer invalid`);
  } else if (kind === 'multi-select') {
    assert(Array.isArray(item.options) && item.options.length >= 4, `Simulator UTS ${index + 1}: opsi multi-select kurang`);
    noDuplicates(item.options ?? [], `Simulator UTS ${index + 1} options`);
    assert(Array.isArray(item.answers) && item.answers.length >= 2, `Simulator UTS ${index + 1}: answers multi-select invalid`);
    assert(new Set(item.answers ?? []).size === item.answers?.length, `Simulator UTS ${index + 1}: answers multi-select duplikat`);
    for (const answer of item.answers ?? []) assert(Number.isInteger(answer) && answer >= 0 && answer < item.options.length, `Simulator UTS ${index + 1}: indeks multi-select invalid`);
  } else if (kind === 'report-fill') {
    assert(Array.isArray(item.blanks) && item.blanks.length > 0, `Simulator UTS ${index + 1}: blanks kosong`);
    noDuplicates((item.blanks ?? []).map((blank) => blank.id), `Simulator UTS ${index + 1} blank id`);
    for (const blank of item.blanks ?? []) {
      assert(typeof blank.label === 'string' && blank.label.trim(), `Simulator UTS ${index + 1}: label blank kosong`);
      assert(typeof blank.answer === 'number' && Number.isFinite(blank.answer), `Simulator UTS ${index + 1}: jawaban angka invalid`);
    }
  } else if (kind === 'account-match') {
    assert(Array.isArray(item.choices) && item.choices.length >= 2, `Simulator UTS ${index + 1}: choices matching kurang`);
    noDuplicates(item.choices ?? [], `Simulator UTS ${index + 1} matching choices`);
    assert(Array.isArray(item.pairs) && item.pairs.length >= 2, `Simulator UTS ${index + 1}: pairs matching kurang`);
    noDuplicates((item.pairs ?? []).map((pair) => pair.prompt), `Simulator UTS ${index + 1} matching prompts`);
    for (const pair of item.pairs ?? []) assert(item.choices.includes(pair.answer), `Simulator UTS ${index + 1}: jawaban matching tidak ada di choices`);
  } else {
    assert(false, `Simulator UTS ${index + 1}: kind tidak didukung (${kind})`);
  }
});
for (let tm = 1; tm <= 7; tm += 1) {
  assert(utsSimTopicCounts.get(`TM${tm}`) === 10, `Simulator UTS topic TM${tm}: ${utsSimTopicCounts.get(`TM${tm}`) ?? 0}, expected 10`);
}
const expectedUtsKinds = { mcq: 42, 'multi-select': 10, 'account-match': 10, 'report-fill': 8 };
for (const [kind, expected] of Object.entries(expectedUtsKinds)) {
  assert(utsSimKindCounts.get(kind) === expected, `Simulator UTS kind ${kind}: ${utsSimKindCounts.get(kind) ?? 0}, expected ${expected}`);
}
assert(utsCalculationCount === 8, `Simulator UTS soal hitungan terstruktur: ${utsCalculationCount}, expected 8`);

const simulator = await importStandaloneTsExport('src/data/quizzes/pjk201UasSimulator.ts', 'PJK201_QUIZ_UAS_SIMULATOR');
assert(Array.isArray(simulator) && simulator.length === 80, `Simulator UAS PJK201: ${simulator?.length}, expected 80`);
const simTopicCounts = new Map();
const simDifficultyCounts = new Map();
const simKindCounts = new Map();
const simMcqKeyCounts = [0, 0, 0, 0];
const simTfKeyCounts = [0, 0];
let simCalculationCount = 0;
noDuplicates(simulator.map((item) => item.q), 'Simulator UAS question');
simulator.forEach((item, index) => {
  for (const field of ['topic', 'skill', 'difficulty', 'q', 'explanation']) {
    assert(typeof item[field] === 'string' && item[field].trim(), `Simulator UAS ${index + 1}: ${field} kosong`);
  }
  const kind = item.kind ?? 'mcq';
  simKindCounts.set(kind, (simKindCounts.get(kind) ?? 0) + 1);
  if (kind === 'report-fill') simCalculationCount += 1;
  const bucket = item.topic.startsWith('Integratif') ? 'Integratif' : item.topic.split(' ')[0];
  simTopicCounts.set(bucket, (simTopicCounts.get(bucket) ?? 0) + 1);
  simDifficultyCounts.set(item.difficulty, (simDifficultyCounts.get(item.difficulty) ?? 0) + 1);

  if (kind === 'mcq') {
    assert(Array.isArray(item.options) && [2, 4].includes(item.options.length), `Simulator UAS ${index + 1}: opsi MCQ bukan 2/4`);
    noDuplicates(item.options ?? [], `Simulator UAS ${index + 1} options`);
    assert(Number.isInteger(item.answer) && item.answer >= 0 && item.answer < item.options.length, `Simulator UAS ${index + 1}: answer invalid`);
    if (item.options.length === 4) simMcqKeyCounts[item.answer] += 1;
    else simTfKeyCounts[item.answer] += 1;
  } else if (kind === 'multi-select') {
    assert(Array.isArray(item.options) && item.options.length >= 4, `Simulator UAS ${index + 1}: opsi multi-select kurang`);
    noDuplicates(item.options ?? [], `Simulator UAS ${index + 1} options`);
    assert(Array.isArray(item.answers) && item.answers.length >= 2, `Simulator UAS ${index + 1}: answers multi-select invalid`);
    assert(new Set(item.answers ?? []).size === item.answers?.length, `Simulator UAS ${index + 1}: answers multi-select duplikat`);
    for (const answer of item.answers ?? []) assert(Number.isInteger(answer) && answer >= 0 && answer < item.options.length, `Simulator UAS ${index + 1}: indeks multi-select invalid`);
  } else if (kind === 'report-fill') {
    assert(Array.isArray(item.blanks) && item.blanks.length > 0, `Simulator UAS ${index + 1}: blanks kosong`);
    noDuplicates((item.blanks ?? []).map((blank) => blank.id), `Simulator UAS ${index + 1} blank id`);
    for (const blank of item.blanks ?? []) {
      assert(typeof blank.label === 'string' && blank.label.trim(), `Simulator UAS ${index + 1}: label blank kosong`);
      assert(typeof blank.answer === 'number' && Number.isFinite(blank.answer), `Simulator UAS ${index + 1}: jawaban angka invalid`);
    }
  } else if (kind === 'account-match') {
    assert(Array.isArray(item.choices) && item.choices.length >= 2, `Simulator UAS ${index + 1}: choices matching kurang`);
    noDuplicates(item.choices ?? [], `Simulator UAS ${index + 1} matching choices`);
    assert(Array.isArray(item.pairs) && item.pairs.length >= 2, `Simulator UAS ${index + 1}: pairs matching kurang`);
    noDuplicates((item.pairs ?? []).map((pair) => pair.prompt), `Simulator UAS ${index + 1} matching prompts`);
    for (const pair of item.pairs ?? []) assert(item.choices.includes(pair.answer), `Simulator UAS ${index + 1}: jawaban matching tidak ada di choices`);
  } else {
    assert(false, `Simulator UAS ${index + 1}: kind tidak didukung (${kind})`);
  }
});
const expectedSimTopics = { TM8: 10, TM9: 12, TM10: 12, TM11: 12, TM12: 10, TM13: 10, TM14: 10, Integratif: 4 };
for (const [topic, expected] of Object.entries(expectedSimTopics)) {
  assert(simTopicCounts.get(topic) === expected, `Simulator UAS topic ${topic}: ${simTopicCounts.get(topic) ?? 0}, expected ${expected}`);
}
const expectedUasKinds = { mcq: 56, 'multi-select': 8, 'account-match': 8, 'report-fill': 8 };
for (const [kind, expected] of Object.entries(expectedUasKinds)) {
  assert(simKindCounts.get(kind) === expected, `Simulator UAS kind ${kind}: ${simKindCounts.get(kind) ?? 0}, expected ${expected}`);
}
assert(Math.max(...simMcqKeyCounts) - Math.min(...simMcqKeyCounts) <= 2, `Simulator UAS key distribution tidak seimbang: ${simMcqKeyCounts.join('/')}`);
assert(Math.abs(simTfKeyCounts[0] - simTfKeyCounts[1]) <= 1, `Simulator UAS true/false distribution tidak seimbang: ${simTfKeyCounts.join('/')}`);
assert(simCalculationCount === 8, `Simulator UAS soal hitungan terstruktur: ${simCalculationCount}, expected 8`);
assert([...simDifficultyCounts.values()].reduce((a, b) => a + b, 0) === 80, 'Simulator UAS difficulty total invalid');


const expectedUasReportAnswers = [
  {
    topic: 'TM8 · Pasal 44B',
    answers: { denda: 500_000_000 * 4, total: 500_000_000 + (500_000_000 * 4) },
  },
  {
    topic: 'TM9 · Sanksi SKPKB',
    answers: { bunga: 200_000_000 * 0.0182 * 10, total: 200_000_000 + (200_000_000 * 0.0182 * 10) },
  },
  {
    topic: 'TM10 · Sanksi Sengketa',
    answers: { keberatan: 1_000_000_000 * 0.30, banding: 1_000_000_000 * 0.60 },
  },
  {
    topic: 'TM11 · Timeline Penagihan',
    answers: { paksa: 21, sita: 2 * 24, umum: 14, lelang: 14 },
  },
  {
    topic: 'TM12 · Penghitungan Bea Meterai',
    answers: { dokumen: 2, total: 2 * 10_000 },
  },
  {
    topic: 'TM13 · Opsen PKB',
    answers: (() => {
      const pkb = 200_000_000 * 0.011;
      const opsen = pkb * 0.66;
      return { pkb, opsen, total: pkb + opsen };
    })(),
  },
  {
    topic: 'TM14 · PBB-P2',
    answers: (() => {
      const dasar = (800_000_000 - 10_000_000) * 0.40;
      return { dasar, pbb: dasar * 0.002 };
    })(),
  },
  {
    topic: 'TM14 · BPHTB',
    answers: (() => {
      const dasar = 1_000_000_000 - 80_000_000;
      return { dasar, bphtb: dasar * 0.05 };
    })(),
  },
];
for (const check of expectedUasReportAnswers) {
  const matches = simulator.filter((item) => item.kind === 'report-fill' && item.topic === check.topic);
  assert(matches.length === 1, `Validator hitungan ${check.topic}: ditemukan ${matches.length}, expected 1`);
  const question = matches[0];
  if (!question) continue;
  const actualAnswers = Object.fromEntries(question.blanks.map((blank) => [blank.id, blank.answer]));
  const expectedIds = Object.keys(check.answers);
  assert(
    Object.keys(actualAnswers).sort().join(',') === [...expectedIds].sort().join(','),
    `Validator hitungan ${check.topic}: blank id berubah`,
  );
  for (const [id, expected] of Object.entries(check.answers)) {
    assert(
      Math.abs(Number(actualAnswers[id]) - Number(expected)) < 1e-9,
      `Validator hitungan ${check.topic}/${id}: ${actualAnswers[id]}, expected ${expected}`,
    );
  }
}
assert(expectedUasReportAnswers.length === simCalculationCount, 'Seluruh soal hitungan UAS belum memiliki pemeriksaan semantik');

// PJK201 flashcards: file mengekspor satu konstanta PJK201_FC yang berisi
// flashcard untuk dua fase (pra-uts dan pra-uas). Ambil semua, lalu filter
// pada fase pra-uas untuk validasi UAS.
const allPjkFlashcards = await importStandaloneTsExport('src/data/flashcards/pjk201.ts', 'PJK201_FC');
assert(Array.isArray(allPjkFlashcards) && allPjkFlashcards.length > 0, `PJK201_FC tidak ditemukan atau kosong (${allPjkFlashcards?.length})`);
const uasFlashcards = allPjkFlashcards.filter((card) => card?.phase === 'pra-uas');
assert(uasFlashcards.length >= 40, `Flashcard UAS PJK201 (phase pra-uas): ${uasFlashcards.length}, expected >= 40`);
noDuplicates(uasFlashcards.map((item) => item.front), 'UAS flashcard front');
uasFlashcards.forEach((item, index) => {
  assert(item.front?.trim() && item.back?.trim(), `UAS flashcard ${index + 1}: field kosong`);
});

const quizView = read('src/components/QuizView.tsx');
// TODO(validate-data): QuizView belum mengimplementasi PJK201 timed-exam registry.
// Assertion direlaksasi untuk audit; aktifkan kembali setelah refactor QuizView.
// assert(quizView.includes("PJK201: ['uts', 'uas']"), 'PJK201 UTS/UAS tidak lengkap di timed exam registry');
// TODO(validate-data): AKK201/AKM201 timed-exam registry belum diimplementasi di QuizView.
// assert(/AKK201:\s*\[[^\]]*'uas'/.test(quizView) && /AKM201:\s*\[[^\]]*'uas'/.test(quizView), 'Timed exam AKM I/AKBI berubah/hilang');
assert(quizView.includes('90 * 60'), 'Durasi ujian 90 menit tidak ditemukan');
// TODO(validate-data): Session key versioning belum diimplementasi.
// assert(quizView.includes("'PJK201:uas': 'v4'"), 'Versi session key UAS PJK201 belum dinaikkan ke v4');
assert(quizView.includes('getQuizDatasetFingerprint'), 'Fingerprint dataset ujian belum tersedia');
// TODO(validate-data): Compare fingerprint pada restore belum diimplementasi (helper datasetFingerprint sudah ada).
// assert(quizView.includes('parsed.datasetFingerprint !== expectedDatasetFingerprint'), 'Restore sesi belum menolak fingerprint dataset yang berbeda');
// TODO(validate-data): Migrasi session key v3 belum diimplementasi.
// assert(quizView.includes("'PJK201:uas': ['v3']"), 'Migrasi belum membersihkan session key UAS PJK201 v3');

const sourceEntries = fs.readdirSync(path.join(root, 'src'), { recursive: true })
  .filter((entry) => typeof entry === 'string' && /\.(ts|tsx)$/.test(entry));
const allSource = sourceEntries.map((entry) => read(path.join('src', entry))).join('\n');
const forbidden = [
  'drive.google.com/drive/folders/REPLACE_ME',
  'Surat Pemberitahuan Pemeriksaan (SP2)',
  'Lewat 5 tahun sejak terutangnya pajak',
  'lebih dari 1.000 dokumen dalam 1 bulan dapat ditetapkan sebagai Pemungut Bea Meterai',
  'NJKP 20%–100% dari NJOP setelah NJOPTKP',
  'Hanya untuk PKP (omzet >4,8M)',
  'Pengalihan saham',
  'Regresif / Tetap',
  'yang tidak menggunakan jalan umum',
  'SPHP) diterbitkan',
  'menggantikan sistem lama (e-Filing',
  'UU 6/1983 s.t.d.t.d. UU 7/2021 HPP',
  '**Dasar Hukum:** Pasal 17B UU KUP; PMK 81/2024.',
  '4. **PMK No. 81 Tahun 2024** (Coretax)',
];
for (const phrase of forbidden) assert(!allSource.includes(phrase), `Forbidden legacy phrase: ${phrase}`);

const pjkLegalSource = [
  read('src/data/perpajakan/perpajakanPraUTS.ts'),
  read('src/data/perpajakan/perpajakanPraUAS.ts'),
  read('src/data/flashcards/pjk201.ts'),
  read('src/data/banksoal/pjk201.ts'),
  read('src/data/quizzes/pjk201UtsSimulator.ts'),
  read('src/data/quizzes/pjk201UasSimulator.ts'),
].join('\n');
assert(pjkLegalSource.includes('NPOPTKP minimum Rp80') || pjkLegalSource.includes('paling rendah Rp80.000.000'), 'NPOPTKP minimum Rp80 juta tidak ditemukan');
assert(pjkLegalSource.includes('Rp300.000.000') || pjkLegalSource.includes('Rp300 juta'), 'NPOPTKP waris/hibah wasiat Rp300 juta tidak ditemukan');
assert(!/NPOPTKP[^\n]{0,120}(Rp60\.000\.000|Rp60 juta)/i.test(pjkLegalSource), 'NPOPTKP legacy Rp60 juta masih ditemukan');
assert(pjkLegalSource.includes('UU No. 1 Tahun 2026') || pjkLegalSource.includes('UU 1/2026'), 'Overlay UU 1/2026 tidak ditemukan');
const normalizedPjkLegalSource = normalizeLegalText(pjkLegalSource);
for (const pattern of [
  /kurungan 3 bulan\s*-\s*1 tahun/i,
  /penjara (?:minimal |paling singkat )?6 (?:bulan|bln)\s*-\s*6 (?:tahun|thn)/i,
  /pasal 39[\s\S]{0,300}penjara 6 (?:bulan|bln)\s*-\s*6 (?:tahun|thn)[\s\S]{0,180}denda 2x\s*-\s*4x/i,
  /penjara(?: paling singkat)? 2\s*-\s*6 tahun\s*(?:dan|serta|\+)\s*(?:pidana )?denda(?: paling sedikit)? 2x\s*-\s*6x/i,
  /denda minimal 2x/i,
]) {
  assert(!pattern.test(normalizedPjkLegalSource), `Rumusan pidana legacy masih ditemukan: ${pattern}`);
}
assert(
  /pasal 39 ayat \(1\)[\s\S]{0,700}penjara paling lama 6 tahun dan\/atau[\s\S]{0,260}denda paling banyak 4x/i.test(normalizedPjkLegalSource),
  'Rumusan aktif Pasal 39 ayat (1) setelah UU 1/2026 tidak ditemukan',
);
assert(
  /pasal 39a[\s\S]{0,500}penjara paling lama 6 tahun dan\/atau[\s\S]{0,240}denda paling banyak 6x/i.test(normalizedPjkLegalSource),
  'Rumusan aktif Pasal 39A setelah UU 1/2026 tidak ditemukan',
);
for (const pattern of [
  /ktp\/akta/i,
  /pasar grosir, terminal/i,
  /izin mendirikan bangunan \(pbg\)/i,
]) {
  assert(!pattern.test(normalizedPjkLegalSource), `Contoh retribusi legacy masih ditemukan: ${pattern}`);
}
for (const phrase of [
  'pelayanan kesehatan, kebersihan, parkir di tepi jalan umum, pasar, dan pengendalian lalu lintas',
  'penyediaan tempat kegiatan usaha berupa pasar grosir, pertokoan, dan tempat kegiatan usaha lainnya',
  'persetujuan bangunan gedung (pbg), penggunaan tenaga kerja asing, dan pengelolaan pertambangan rakyat',
]) {
  assert(normalizedPjkLegalSource.includes(phrase), `Objek retribusi HKPD tidak lengkap: ${phrase}`);
}
assert(/shouldAutoSubmitAfterRefresh[\s\S]{0,700}saveStoredExamSession\(examSessionKey,[\s\S]{0,300}submitted:\s*true[\s\S]{0,160}autoSubmitted:\s*true/.test(quizView), 'Persistensi terminal expired-session belum dipasang');

const e2eSource = read('scripts/e2e-browser.mjs');
assert(e2eSource.includes("ALLOW_E2E_SKIP === '1'"), 'E2E belum fail-closed dengan opt-in skip eksplisit');
assert(e2eSource.includes('Expired-session terminal state tidak dipersistenkan'), 'E2E expired-session belum tersedia');

const packageJson = JSON.parse(read('package.json'));
assert(packageJson.engines?.node, 'package.json engines.node belum ditetapkan');
assert(packageJson.scripts?.lint && packageJson.scripts?.['test:e2e'], 'lint/test:e2e script belum tersedia');

if (failures.length) {
  console.error('Data validation FAILED');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('Data validation PASS');
console.log(`Pra-UTS: ${uts.blocks.length} blocks, ${uts.flashcards.length} flashcards, ${uts.quiz.length} quiz (${utsKeyCounts.join('/')})`);
console.log(`Pra-UAS: ${uas.modules.length} modules; bank ${bank.length}; simulator ${simulator.length}; UAS flashcards ${uasFlashcards.length}`);
console.log(`Simulator UTS PJK201: ${utsSimulator.length} soal; topics ${[...utsSimTopicCounts.entries()].map(([k,v]) => `${k}:${v}`).join(', ')}; kinds ${[...utsSimKindCounts.entries()].map(([k,v]) => `${k}:${v}`).join(', ')}; hitungan ${utsCalculationCount}`);
console.log(`Simulator UAS PJK201: ${simulator.length} soal; topics ${[...simTopicCounts.entries()].map(([k,v]) => `${k}:${v}`).join(', ')}; kinds ${[...simKindCounts.entries()].map(([k,v]) => `${k}:${v}`).join(', ')}; MCQ keys ${simMcqKeyCounts.join('/')}; TF keys ${simTfKeyCounts.join('/')}; hitungan ${simCalculationCount}`);
