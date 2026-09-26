// AKA201 Pra-UTS practice guard. TM01–TM07 quiz items, flashcards and bank soal essays are converted verbatim from each
// TM's 06_implementation_brief.md (converter and package live outside the repo), so this checks what the package fixes:
// counts per TM, the 06 IDs, the answer-key spread from 06/07, the TM titles, and that the old TM08–TM14 items are
// unchanged. It also checks that the registries and the catalog serve exactly these items.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';

const bundle = await build({
  stdin: {
    contents: [
      "export { AKA201_QUIZ, AKA201_QUIZ_UTS, AKA201_QUIZ_UAS } from './src/data/quizzes/aka201.ts';",
      "export { AKA201_FC } from './src/data/flashcards/aka201.ts';",
      "export { AKA201_BANK, AKA201_BANK_UTS, AKA201_BANK_UAS } from './src/data/banksoal/aka201.ts';",
      "export { getQuizSets } from './src/data/quizzes/index.ts';",
      "export { getFlashcards } from './src/data/flashcards/registry.ts';",
      "export { getBankSoalSets } from './src/data/banksoal/nonPte.ts';",
      "export { SEMESTERS } from './src/data/courseData.ts';",
    ].join('\n'),
    resolveDir: process.cwd(), loader: 'ts',
  },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);

const TMS = [1, 2, 3, 4, 5, 6, 7];
const pad = (n) => String(n).padStart(2, '0');
const sha = (value) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const course = mod.SEMESTERS.flatMap((s) => s.groups ?? []).flatMap((g) => g.courses ?? []).find((c) => c.code === 'AKA201');
assert.ok(course, 'AKA201 is in the catalog');
const titles = new Map(course.materiTM1_7.map((m) => [m.tm, m.title]));

// Answer keys per TM, q01…q08, from the key spread in 06 and 07 ("Sebaran kunci" / "Kunci kuis").
const KEYS = { 1: 'CABCDABD', 2: 'BDACDBAC', 3: 'CADBDABC', 4: 'ACBDACDB', 5: 'BCDADBAC', 6: 'CBADBDCA', 7: 'CADBBDAC' };
// Essays whose discussion 06 labels Interpretasi, and the role-play essays (RPS weeks 3, 4 and 6).
const INTERPRETASI = ['tm01-bs03', 'tm02-bs03', 'tm03-bs02', 'tm04-bs01', 'tm05-bs03', 'tm06-bs03'];
const ROLE_PLAY = { 'tm03-bs01': 3, 'tm04-bs01': 4, 'tm06-bs03': 6 };
const CATEGORIES = new Set(['Definisi', 'Konsep', 'Klasifikasi', 'Perbandingan', 'Contoh', 'Standar', 'Hukum']);
// The old TM08–TM14 items stay exactly as they were on main before this rebuild.
const OLD_TM8_14 = {
  quiz: 'b114a3ba00d9ed3c572564cc2c72875b560a3a8c4bf9fe876cb0f42844ea6154',
  cards: '97aef4c849e6ce1ab6542aae1a28fa478e3ef6b77a5096c264328028793189ee',
  bank: 'd2f53f64fe2111a6d4aef6c82fb67ae1b1484eab29b7d18999d6cbe3a43dca87',
};

const plainText = (label, text) => {
  assert.equal(typeof text, 'string', `${label}: text`);
  assert.ok(text.trim().length > 0, `${label}: not empty`);
  assert.doesNotMatch(text, /\*\*|`|\$|\\/, `${label}: no markdown, math or escapes (rendered as plain text)`);
};

// Quiz
const quiz = mod.AKA201_QUIZ_UTS;
assert.equal(quiz.length, 56, 'UTS quiz: 8 items per TM');
for (const tm of TMS) {
  const items = quiz.filter((q) => q.tm === tm);
  assert.deepEqual(items.map((q) => q.id), Array.from({ length: 8 }, (_, i) => `aka201-tm${pad(tm)}-q${pad(i + 1)}`), `TM${pad(tm)} quiz IDs from 06, in order`);
  assert.equal(items.map((q) => 'ABCD'[q.answer]).join(''), KEYS[tm], `TM${pad(tm)} answer keys follow the 06/07 spread`);
  for (const q of items) {
    assert.equal(q.topic, titles.get(tm), `${q.id}: topic is the TM title`);
    assert.equal(q.options.length, 4, `${q.id}: four options`);
    assert.equal(new Set(q.options).size, 4, `${q.id}: distinct options`);
    assert.ok(Array.isArray(q.sourceAnchors) && q.sourceAnchors.every((a) => /^C-\d{3}/.test(a)), `${q.id}: canonical anchors`);
    for (const [i, text] of [q.q, ...q.options, q.explanation].entries()) plainText(`${q.id} text ${i}`, text);
  }
}
assert.equal(sha(mod.AKA201_QUIZ_UAS), OLD_TM8_14.quiz, 'UAS quiz (old TM08–TM14) unchanged');
assert.ok(mod.AKA201_QUIZ_UAS.every((q) => q.tm >= 8), 'UAS quiz holds only TM08–TM14');

// Flashcards
const cards = mod.AKA201_FC;
const newCards = cards.filter((c) => c.tm <= 7);
assert.equal(newCards.length, 84, 'TM01–TM07: 12 flashcards per TM');
assert.equal(new Set(cards.map((c) => c.id)).size, cards.length, 'flashcard IDs unique');
for (const tm of TMS) {
  const items = newCards.filter((c) => c.tm === tm);
  assert.deepEqual(items.map((c) => c.id), Array.from({ length: 12 }, (_, i) => `aka201-tm${pad(tm)}-fc${pad(i + 1)}`), `TM${pad(tm)} flashcard IDs from 06, in order`);
  for (const c of items) {
    assert.equal(c.phase, 'pra-uts', `${c.id}: phase`);
    assert.equal(c.topic, titles.get(tm), `${c.id}: topic is the TM title`);
    assert.ok(CATEGORIES.has(c.category), `${c.id}: category ${c.category}`);
    plainText(`${c.id} front`, c.front);
    plainText(`${c.id} back`, c.back);
  }
}
assert.equal(sha(cards.filter((c) => c.tm >= 8)), OLD_TM8_14.cards, 'old TM08–TM14 flashcards unchanged');
assert.ok(!cards.some((c) => /^aka201-tm0[1-7]-\d\d$/.test(c.id)), 'no old TM01–TM07 flashcard IDs left');

// Bank soal
const bank = mod.AKA201_BANK_UTS;
assert.equal(bank.length, 21, 'UTS bank: 3 essays per TM');
for (const tm of TMS) {
  const items = bank.slice((tm - 1) * 3, tm * 3);
  items.forEach((b, i) => {
    const key = `tm${pad(tm)}-bs${pad(i + 1)}`;
    assert.equal(b.scope, `TM ${tm}: ${titles.get(tm)}`, `${key}: scope`);
    assert.equal(b.type, key === 'tm07-bs01' ? 'calculation' : 'essay', `${key}: type (06 marks only TM07 bs01 as soal hitung)`);
    assert.equal(b.answerGuide.startsWith('(Interpretasi) '), INTERPRETASI.includes(key), `${key}: Interpretasi label on the discussion`);
    assert.doesNotMatch(b.answerGuide, /Poin jawaban:/, `${key}: the card already says "Panduan jawaban:"`);
    assert.equal(b.context, ROLE_PLAY[key] ? `Untuk role play Week ${ROLE_PLAY[key]}.` : undefined, `${key}: role-play note`);
    plainText(`${key} question`, b.question);
    plainText(`${key} answer guide`, b.answerGuide);
  });
}
assert.equal(sha(mod.AKA201_BANK_UAS), OLD_TM8_14.bank, 'UAS bank (old TM08–TM14) unchanged');

// Registries and catalog serve these items
const quizSets = Object.fromEntries(mod.getQuizSets('AKA201').map((s) => [s.id, s.items]));
assert.equal(quizSets.uts, mod.AKA201_QUIZ_UTS, 'Kuis tab: UTS set is the new TM01–TM07 quiz');
assert.equal(quizSets.all.length, quiz.length + mod.AKA201_QUIZ_UAS.length, 'Kuis tab: compilation has every item');
assert.equal(mod.getFlashcards('AKA201').length, cards.length, 'Flashcard tab: whole deck');
const bankSets = Object.fromEntries(mod.getBankSoalSets('AKA201').map((s) => [s.id, s.items]));
assert.equal(bankSets.uts, mod.AKA201_BANK_UTS, 'Bank Soal tab: UTS set is the new essays');
assert.equal(course.flashcardCount, cards.length, 'catalog flashcardCount matches the deck');

console.log(`aka201 practice: quiz ${quiz.length}, flashcards ${newCards.length}, essays ${bank.length} for TM01–TM07; TM08–TM14 unchanged`);
