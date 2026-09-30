// Guard for the MNU108 (Pengantar Manajemen) practice data written from Daft & Marcic 12e Ch. 1-7:
// the Pra-UTS quiz, the flashcards (TM01-TM07 and the TM08 review cards), the Pra-UTS bank soal, and the TM08 review page.
// Every item cites its pages as [hal. X]; the TM label of an item is checked against the page range of that TM's reading (its own `ref`).
// The data files keep the old MNM101 names; the Pra-UAS half (TM8-14 / TM9-14) is out of scope and is not checked here.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';

const importBundle = async (entry) => {
  const bundle = await build({ bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent', entryPoints: [entry] });
  return import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
};

const { MNM101_QUIZ_UTS } = await importBundle('src/data/quizzes/mnm101.ts');
const { MNM101_FC } = await importBundle('src/data/flashcards/mnm101.ts');
const { MNM101_BANK_UTS } = await importBundle('src/data/banksoal/mnm101.ts');
const { SEMESTERS } = await importBundle('src/data/courseData.ts');
const { MANAJEMEN_READINGS: readings, MANAJEMEN_REVIEW_READINGS: review } = await importBundle('src/data/manajemen/manajemenData.ts');
const mnu108 = SEMESTERS.flatMap((s) => s.groups.flatMap((g) => g.courses)).find((c) => c.code === 'MNU108');
assert.ok(mnu108, 'MNU108 is in the catalogue');

// ---- The agreed size of the set (D2) and the flashcard identities that must survive (SRS state is keyed by card id).
const MIN_QUIZ = { 1: 6, 2: 7, 3: 7, 4: 8, 5: 9, 6: 10, 7: 9 };
const MIN_FC = { 1: 8, 2: 8, 3: 8, 4: 8, 5: 10, 6: 10, 7: 9, 8: 8 };
const KEPT_FC = [
  ...['01', '02', '03', '04', '06'].map((n) => `tm01-${n}`), ...['01', '02', '03', '04', '05', '06'].map((n) => `tm02-${n}`),
  ...['01', '03', '04', '05', '06'].map((n) => `tm03-${n}`), ...['01', '03', '04', '05', '06'].map((n) => `tm04-${n}`),
  ...['01', '02', '03', '04', '05'].map((n) => `tm05-${n}`), ...['01', '02', '03', '04', '05'].map((n) => `tm06-${n}`),
  ...['01', '02', '03', '04', '05', '06'].map((n) => `tm07-${n}`), ...['01', '04', '05'].map((n) => `tm08-${n}`),
].map((id) => `mnm101-${id}`);
/** Cards whose concept is not in the 12e reading: their ids are retired and must not come back with a different meaning. */
const RETIRED_FC = ['tm01-05', 'tm03-02', 'tm04-02', 'tm05-06', 'tm06-06', 'tm08-02', 'tm08-03', 'tm08-06'].map((id) => `mnm101-${id}`);

// ---- Terms the 12e readings do not use (the old-edition generator wrote them).
const FORBIDDEN = [
  [/PESTEL/i, 'PESTEL'], [/Carroll/i, 'Carroll'], [/\bSMART\b/, 'SMART'], [/greenfield/i, 'greenfield'], [/Question Marks?/i, 'Question Marks'],
  [/VRIO/i, 'VRIO'], [/Duncan/i, 'Duncan'], [/Schein/i, 'Schein'], [/Katz/i, 'Katz'], [/sunk cost/i, 'sunk cost'],
  [/backward (vertical )?integration|integrasi vertikal ke belakang/i, 'backward integration'], [/nominal group|\bNGT\b/i, 'Nominal Group Technique'],
  [/Espoused/i, 'Espoused Values'], [/Robbins/i, 'Robbins'], [/\b13e\b/, '13e'], [/PT Ritel Megah/i, 'PT Ritel Megah'], [/Kurt Lewin/i, 'Lewin'],
];

const ANCHOR = /\[hal\. ([^\]]+)\]/g;
/** Pages cited by the [hal. X] anchors of a text: how many anchors and every page they name (ranges by both ends). */
function cited(text) {
  const pages = [];
  let anchors = 0;
  for (const match of text.matchAll(ANCHOR)) {
    anchors += 1;
    for (const part of match[1].split(/,\s*/)) {
      const m = part.match(/^(\d+)(?:–(\d+))?$/);
      assert.ok(m, `malformed anchor [hal. ${match[1]}]`);
      const from = Number(m[1]);
      const to = m[2] ? Number(m[2]) : from;
      assert.ok(to >= from, `anchor range runs backwards: [hal. ${match[1]}]`);
      pages.push(from, to);
    }
  }
  return { anchors, pages };
}
/** The printed page range of the reading of TM n, read from its own `ref` ("... (hal. 116–147) ..."). */
function chapterRange(data, tm) {
  const m = data.readings[tm].ref.match(/\(hal\. (\d+)–(\d+)\)/);
  assert.ok(m, `TM0${tm}: the reading ref names a page range`);
  return [Number(m[1]), Number(m[2])];
}
const anyChapter = (data) => [chapterRange(data, 1)[0], chapterRange(data, 7)[1]];

function checkPages(data, at, tm, text, { strict }) {
  const { anchors, pages } = cited(text);
  assert.ok(anchors >= 1, `${at}: no [hal. X] anchor`);
  const [lo, hi] = strict ? chapterRange(data, tm) : anyChapter(data);
  for (const page of pages) {
    assert.ok(page >= lo && page <= hi, `${at}: page ${page} lies outside the page range ${lo}–${hi} of TM0${strict ? tm : '1-7'} (wrong TM label or wrong page)`);
  }
}
function noForbidden(at, text) {
  for (const [pattern, name] of FORBIDDEN) assert.ok(!pattern.test(text), `${at}: uses "${name}", which the 12e readings do not use`);
}

const strings = (value) => (typeof value === 'string' ? [value] : Array.isArray(value) ? value.flatMap(strings) : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : []);

// =============================================================== quiz
function checkQuiz(data) {
  const quiz = data.quiz;
  const perTm = {};
  const stems = new Set();
  quiz.forEach((item, index) => {
    const at = `quiz #${index + 1} (TM${item.tm})`;
    assert.ok(Number.isInteger(item.tm) && item.tm >= 1 && item.tm <= 7, `${at}: tm must be 1..7`);
    perTm[item.tm] = (perTm[item.tm] ?? 0) + 1;
    assert.equal(item.options.length, 4, `${at}: four options`);
    assert.ok(Number.isInteger(item.answer) && item.answer >= 0 && item.answer <= 3, `${at}: answer index`);
    assert.equal(new Set(item.options.map((o) => o.trim())).size, 4, `${at}: options must be distinct`);
    for (const option of item.options) {
      assert.ok(option.trim().length > 0, `${at}: empty option`);
      assert.ok(!/semua (jawaban )?(di atas )?benar|none of the above/i.test(option), `${at}: "all of the above" option`);
    }
    assert.ok(!stems.has(item.q), `${at}: duplicate stem`);
    stems.add(item.q);
    checkPages(data, at, item.tm, item.explanation, { strict: true });
    for (const text of [item.q, item.topic, item.explanation, ...item.options]) {
      noForbidden(at, text);
      assert.ok(!text.includes('**'), `${at}: markdown bold in plain text`);
    }
  });
  for (const [tm, min] of Object.entries(MIN_QUIZ)) assert.ok((perTm[tm] ?? 0) >= min, `quiz: TM0${tm} has ${perTm[tm] ?? 0} questions, expected at least ${min}`);
  // Answer positions: each of A-D between 20% and 30%; a position above 40% is a pattern a student can exploit.
  const counts = [0, 0, 0, 0];
  quiz.forEach((item) => { counts[item.answer] += 1; });
  counts.forEach((count, position) => {
    const share = count / quiz.length;
    assert.ok(share <= 0.4, `quiz: option ${'ABCD'[position]} is the key of ${(share * 100).toFixed(0)}% of the questions (limit 40%)`);
    assert.ok(share >= 0.2 && share <= 0.3, `quiz: option ${'ABCD'[position]} is the key of ${(share * 100).toFixed(0)}% of the questions (expected 20-30%)`);
  });
}

// =============================================================== flashcards
function checkFlashcards(data) {
  const deck = data.fc;
  const ids = new Set();
  const utsCards = deck.filter((card) => card.tm <= 8);
  deck.forEach((card, index) => {
    const at = `flashcard #${index + 1} (${card.id})`;
    assert.match(card.id, /^mnm101-tm\d{2}-\d{2}$/, `${at}: id format`);
    assert.ok(!ids.has(card.id), `${at}: duplicate id`);
    ids.add(card.id);
    assert.ok(card.front.trim() && card.back.trim(), `${at}: front and back`);
  });
  const perTm = {};
  utsCards.forEach((card) => {
    const at = `flashcard ${card.id} (TM${card.tm})`;
    assert.equal(card.phase, 'pra-uts', `${at}: the UTS cards are phase pra-uts`);
    assert.ok(card.tm >= 1 && card.tm <= 8, `${at}: tm must be 1..8`);
    perTm[card.tm] = (perTm[card.tm] ?? 0) + 1;
    checkPages(data, at, card.tm, card.back, { strict: card.tm <= 7 });
    for (const text of [card.front, card.back, card.topic]) {
      noForbidden(at, text);
      assert.ok(!text.includes('**'), `${at}: markdown bold in plain text`);
    }
  });
  for (const [tm, min] of Object.entries(MIN_FC)) assert.ok((perTm[tm] ?? 0) >= min, `flashcards: TM0${tm} has ${perTm[tm] ?? 0} cards, expected at least ${min}`);
  for (const id of KEPT_FC) assert.ok(ids.has(id), `flashcards: ${id} kept its id so students' review state survives, but it is missing`);
  for (const id of RETIRED_FC) assert.ok(!ids.has(id), `flashcards: ${id} is retired (its concept is not in the 12e reading); do not reuse the id`);
  assert.equal(data.flashcardCount, deck.length, `catalogue flashcardCount (${data.flashcardCount}) must equal the deck size (${deck.length})`);
}

// =============================================================== bank soal
const STEPS = ['1. Case Summary:', '2. Problem Identification:', '3. Analisis Kasus:', '4. Jawaban Pertanyaan:', '5. Rekomendasi:'];
function checkBank(data) {
  const bank = data.bank;
  assert.equal(bank.length, 7, 'bank: one case per TM (7)');
  bank.forEach((item, index) => {
    const tm = index + 1;
    const at = `bank case ${tm}`;
    assert.equal(item.type, 'case', `${at}: type`);
    assert.match(item.scope, new RegExp(`^TM ${tm}: `), `${at}: scope names TM ${tm}`);
    const head = item.question.match(/Ch\. (\d) hal\. (\d+)(?:–(\d+))?/);
    assert.ok(head, `${at}: the question names its chapter and pages ("Ch. n hal. a" or "a–b")`);
    assert.equal(Number(head[1]), tm, `${at}: the dilemma comes from Ch. ${tm}`);
    const [lo, hi] = chapterRange(data, tm);
    const last = Number(head[3] ?? head[2]);
    assert.ok(Number(head[2]) >= lo && last <= hi, `${at}: dilemma pages ${head[2]}–${last} lie outside TM0${tm} (${lo}–${hi})`);
    checkPages(data, `${at} answerGuide`, tm, item.answerGuide, { strict: false });
    const own = cited(item.answerGuide).pages.filter((p) => p >= lo && p <= hi);
    assert.ok(own.length > 0, `${at}: the answer guide cites no page of its own chapter`);
    let at2 = -1;
    for (const step of STEPS) {
      const found = item.answerGuide.indexOf(step);
      assert.ok(found > at2, `${at}: the answer guide must contain "${step}" in order`);
      at2 = found;
    }
    assert.match(item.answerGuide, /^Hasil analisis/, `${at}: the answer guide opens by saying it is analysis, not the book's key`);
    assert.match(item.answerGuide.split('5. Rekomendasi:')[1], /Pilih opsi \d/, `${at}: the recommendation names one option`);
    const options = item.data.filter((line) => /^Opsi \(\d\)/.test(line));
    assert.equal(options.length, 3, `${at}: the three options of the book's dilemma`);
    assert.ok(item.outputFormat.length === 5, `${at}: output format lists the five steps`);
    for (const text of strings([item.question, item.context, item.data, item.instructions, item.outputFormat, item.rubric, item.answerGuide])) {
      noForbidden(at, text);
      assert.ok(!text.includes('**'), `${at}: markdown bold in plain text`);
    }
  });
}

// =============================================================== TM08 review page
const TM08_H2 = [
  '0. Orientasi TM08', '1. Peta TM01–TM07', '2. Ringkasan TM01: Leading Edge Management (Ch. 1, hal. 2–51)',
  '3. Ringkasan TM02: The Environment and Corporate Culture (Ch. 2, hal. 52–83)', '4. Ringkasan TM03: Managing in a Global Environment (Ch. 3, hal. 84–115)',
  '5. Ringkasan TM04: Managing Ethics and Social Responsibility (Ch. 4, hal. 116–147)', '6. Ringkasan TM05: Planning and Goal Setting (Ch. 5, hal. 148–190)',
  '7. Ringkasan TM06: Managerial Decision Making (Ch. 6, hal. 192–225)', '8. Ringkasan TM07: Designing Organization Structure (Ch. 7, hal. 226–265)',
  '9. Kaitan Antar-TM', '10. Exam Traps Lintas Bab', '11. Latihan Terpadu: SWOT, MBO, dan Struktur', '12. Kasus Lintas Bab: Boeing 737 MAX',
  '13. Lima Langkah Menjawab Kasus', '14. Alat Bantu Latihan',
];
function checkTm08(data) {
  const tm8 = data.readings[8];
  assert.equal(tm8.tm, 8, 'TM08: reading.tm');
  assert.equal(data.review.uts, tm8, 'TM08: it is also the Review UTS reading');
  const h2 = tm8.blocks.filter((b) => b.kind === 'h2').map((b) => b.text);
  assert.deepEqual(h2, TM08_H2, 'TM08: section list (snapshot of the reviewed page)');
  const all = strings(tm8.blocks).join('\n') + '\n' + [tm8.title, tm8.ref, tm8.intro, ...tm8.objectives].join('\n');
  noForbidden('TM08', all);
  assert.match(tm8.ref, /Ch\. 1–7 \(hal\. 2–265\)/, 'TM08: ref names Ch. 1–7');
  // Every table row of §1..§12 carries a page: a "Hal." column that starts with a number, or a [hal. X] anchor in the row.
  let section = -1;
  for (const block of tm8.blocks) {
    if (block.kind === 'h2') section = Number(block.text.match(/^(\d+)\./)[1]);
    if (block.kind !== 'table' || section < 1 || section > 12) continue;
    const halColumn = block.headers.findIndex((h) => h === 'Hal.');
    block.rows.forEach((row, index) => {
      const at = `TM08 §${section} table "${block.headers[0]}" row ${index + 1}`;
      if (halColumn >= 0) assert.match(row[halColumn], /^\d+/, `${at}: the Hal. cell is a page`);
      else assert.ok(/\[hal\. \d+/.test(row.join(' ')), `${at}: no page reference`);
      if (halColumn >= 0) cited(`[hal. ${row[halColumn]}]`); // the pages parse
    });
  }
  // Every anchor on the page lies inside Ch. 1–7.
  const [lo, hi] = anyChapter(data);
  for (const page of cited(all.replaceAll('[hal. X]', '')).pages) assert.ok(page >= lo && page <= hi, `TM08: page ${page} lies outside Ch. 1–7 (${lo}–${hi})`);
  // The five steps come from the class mechanism, not from the book, and the page says so.
  const steps = tm8.blocks.find((b) => b.kind === 'table' && b.headers.join('|') === 'Langkah|Isi');
  assert.deepEqual(steps.rows.map((r) => r[0]), ['1. Case Summary', '2. Problem Identification', '3. Analisis Kasus', '4. Jawaban Pertanyaan', '5. Rekomendasi'], 'TM08: five steps');
  assert.ok(/mekanisme perkuliahan, bukan dari buku/.test(all), 'TM08: names the source of the five steps');
  // Ideas from the old page that are not in the book must not come back.
  assert.ok(!/Formula Sheet|10 Jebakan|Format 4 Tahap|Problem-Theory-Alternative/i.test(all), 'TM08: old-edition sections are gone');
}

// =============================================================== run
const data = { quiz: MNM101_QUIZ_UTS, fc: MNM101_FC, bank: MNM101_BANK_UTS, readings, review, flashcardCount: mnu108.flashcardCount };
const checkAll = (d) => { checkQuiz(d); checkFlashcards(d); checkBank(d); checkTm08(d); };
checkAll(data);

// The generators that wrote the old data are gone: running one would overwrite this data with the old edition.
for (const script of ['build-super-mnm101-quizzes-data', 'build-super-mnm101-flashcards-data', 'build-super-mnm101-bank-data', 'build-super-mnm101-files', 'fix-fc-categories']) {
  assert.ok(!fs.existsSync(`scripts/${script}.mjs`), `scripts/${script}.mjs is deleted; the TS data files are the source of truth`);
}

const passes = [
  `quiz: ${data.quiz.length} questions, every explanation cites pages inside its TM's page range, keys spread ${[0, 1, 2, 3].map((p) => data.quiz.filter((q) => q.answer === p).length).join('/')}`,
  `flashcards: ${data.fc.filter((c) => c.tm <= 8).length} UTS cards (TM01-TM07 and TM08), kept ids survive, retired ids stay retired, flashcardCount = ${data.flashcardCount}`,
  `bank soal: ${data.bank.length} cases, five-step answer guides, one option chosen`,
  'TM08 review page: sections, pages on every row, five steps sourced to the class mechanism',
];

// ---- Mutation check: a copy of the data with one rule broken at a time must be rejected for the right reason.
const fresh = () => ({ quiz: structuredClone(data.quiz), fc: structuredClone(data.fc), bank: structuredClone(data.bank), readings: data.readings, review: data.review, flashcardCount: data.flashcardCount });
const mutations = {
  'a quiz explanation without a page': [(d) => { d.quiz[0].explanation = d.quiz[0].explanation.replace(/\s*\[hal\.[^\]]+\]/g, ''); }, /no \[hal\. X\] anchor/],
  'a quiz question labelled with the wrong TM': [(d) => { d.quiz.find((q) => q.tm === 5).tm = 3; }, /outside the page range/],
  'a quiz question citing a page of another chapter': [(d) => { d.quiz[0].explanation += ' [hal. 200]'; }, /outside the page range/],
  'a forbidden term in a quiz option': [(d) => { d.quiz[1].options[0] = 'Analisis PESTEL'; }, /PESTEL/],
  'a key that dominates option B': [(d) => { d.quiz.forEach((q, i) => { if (i % 2 === 0) { const t = q.options[q.answer]; q.options[q.answer] = q.options[1]; q.options[1] = t; q.answer = 1; } }); }, /(limit 40%|expected 20-30%)/],
  'a quiz TM with too few questions': [(d) => { d.quiz = d.quiz.filter((q) => q.tm !== 4); }, /TM04 has 0 questions/],
  'a duplicate flashcard id': [(d) => { d.fc[1].id = d.fc[0].id; }, /duplicate id/],
  'a kept flashcard id that disappeared': [(d) => { d.fc.find((c) => c.id === 'mnm101-tm02-03').id = 'mnm101-tm02-99'; }, /mnm101-tm02-03 kept its id/],
  'a retired flashcard id that came back': [(d) => { d.fc.push({ ...d.fc.find((c) => c.tm === 5), id: 'mnm101-tm05-06' }); }, /is retired/],
  'a flashcard without a page': [(d) => { const c = d.fc.find((x) => x.tm === 2); c.back = c.back.replace(/\[hal\.[^\]]+\]/g, ''); }, /no \[hal\. X\] anchor/],
  'a flashcardCount that does not match the deck': [(d) => { d.flashcardCount = 84; }, /flashcardCount \(84\)/],
  'a bank case that recommends nothing': [(d) => { d.bank[2].answerGuide = d.bank[2].answerGuide.replace('Pilih opsi', 'Sebaiknya'); }, /names one option/],
  'a bank case that skips a step': [(d) => { d.bank[0].answerGuide = d.bank[0].answerGuide.replace('2. Problem Identification:', 'Masalah:'); }, /2\. Problem Identification/],
  'a bank case with the wrong scope': [(d) => { d.bank[3].scope = 'TM 5: Goal'; }, /scope names TM 4/],
  'the old TM08 case coming back': [(d) => { d.readings = { ...d.readings, 8: { ...d.readings[8], intro: d.readings[8].intro + ' PT Ritel Megah.' } }; d.review = { uts: d.readings[8] }; }, /PT Ritel Megah/],
  'a TM08 table row without a page': [(d) => { const r = { ...d.readings[8] }; r.blocks = structuredClone(r.blocks); r.blocks.find((b) => b.kind === 'table' && b.headers[0] === 'Butir pada Exhibit 5.9').rows[0][2] = 'tanpa halaman'; d.readings = { ...d.readings, 8: r }; d.review = { uts: r }; }, /no page reference/],
};
for (const [name, [mutate, reason]] of Object.entries(mutations)) {
  const mutant = fresh();
  mutate(mutant);
  assert.throws(() => checkAll(mutant), reason, `the guard must reject ${name} for the right reason`);
}
passes.push(`mutation check: ${Object.keys(mutations).length} broken copies of the data are rejected`);

console.log(JSON.stringify({ pass: true, checks: passes.length, passes }, null, 2));
