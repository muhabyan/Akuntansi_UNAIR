// AKK202 Pra-UTS alignment guard: the TM1–TM7 quiz, flashcard, and bank soal items must follow the
// canonical readings (Kieso IFRS 5e Ch. 9–13, src/data/akm2/modules/tm1.ts–tm7.ts) and the render
// path of each file.
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

const bundle = await build({
  stdin: {
    contents: [
      "export { AKK202_READINGS } from './src/data/akm2/akm2Data.ts';",
      "export { AKK202_QUIZ, AKK202_QUIZ_UTS, AKK202_QUIZ_UAS } from './src/data/quizzes/akk202.ts';",
      "export { AKK202_FC } from './src/data/flashcards/akk202.ts';",
      "export { AKK202_BANK, AKK202_BANK_UTS, AKK202_BANK_UAS } from './src/data/banksoal/akk202.ts';",
    ].join('\n'),
    resolveDir: process.cwd(), loader: 'ts',
  },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const readings = mod.AKK202_READINGS;
const PRA_UTS_TMS = [1, 2, 3, 4, 5, 6, 7];

// Markers of the pre-canonical TM1–TM7 items: old PSAK numbering, the "PIRATE" mnemonic, and "jt" shorthand
// that belonged to invented Rupiah figures.
const oldTopicMarkers = [
  /\bPSAK (?:1|16|19|22|25|48|57|58|61|64)\b/, /\bISAK (?:9|25)\b/, /PIRATE/, /\bRp ?\d+(?:,\d+)? ?jt\b/,
  /Hibah Pemerintah \(PSAK 61\)/, /Bonus Eksekutif/i,
];
const assertNoOldTopics = (label, value) => {
  const text = JSON.stringify(value);
  for (const marker of oldTopicMarkers) assert.ok(!marker.test(text), `${label}: old-topic marker ${marker}`);
};

// Markdown render-path checks (same heuristics as test-aks301-alignment.mjs).
const withoutCode = (text) => text.replace(/`[^`]*`/g, '');
const unescapedDollars = (text) => (withoutCode(text).match(/(?<!\\)\$/g) ?? []).length;
const loneStars = (text) => [...withoutCode(text).matchAll(/(?<![\\*])\*(?!\*)/g)];
const hasNotationStarPair = (text) => {
  const stars = loneStars(text);
  const source = withoutCode(text);
  return stars.length >= 2 && stars.some((m) => /[.\d"]/.test(source[m.index - 1] ?? '') || /[)"]/.test(source[m.index + 1] ?? ''));
};
const markdown = unified().use(remarkParse).use(remarkGfm).use(remarkMath);
const unexpectedNodes = new Set(['inlineMath', 'math', 'emphasis', 'delete', 'list', 'html', 'heading', 'blockquote']);
const findNodes = (node, found = []) => {
  if (unexpectedNodes.has(node.type)) found.push(node.type);
  for (const child of node.children ?? []) findNodes(child, found);
  return found;
};
const assertMarkdownSafe = (label, text) => {
  const nodes = findNodes(markdown.parse(text));
  assert.equal(nodes.length, 0, `${label}: markdown turns text into ${nodes.join(', ')}: ${text.slice(0, 80)}`);
  assert.ok(unescapedDollars(text) < 2, `${label}: escape "$" as "\\$" (markdown math): ${text.slice(0, 80)}`);
  assert.ok(!hasNotationStarPair(text), `${label}: escape "*" in notation (markdown emphasis): ${text.slice(0, 80)}`);
  assert.ok(!/^\s*(>|#|\d+\.\s|[-*+]\s)/.test(text), `${label}: text renders as a markdown block or list: ${text.slice(0, 80)}`);
  assert.ok(!/<[A-Za-z]/.test(withoutCode(text)), `${label}: "<" followed by a letter may parse as raw HTML`);
  assert.ok(!/==[^=\n]+==/.test(text), `${label}: "==text==" becomes a highlight`);
};

// Numeric traceability: every number in an item must also occur in that TM's canonical reading.
// id-ID amounts ("€14.833,33") and US amounts ("$95,500") are compared as written.
const numberTokens = (text) => text.match(/\d+(?:[.,]\d+)*/g) ?? [];
const readingText = (reading) => JSON.stringify(reading, (key, value) => (key === 'svg' ? undefined : value)).replace(/\{,\}/g, ',');
const readingNumbers = new Map(PRA_UTS_TMS.map((tm) => [tm, new Set(numberTokens(readingText(readings[tm])))]));
const assertNumbersFromReading = (label, tm, texts) => {
  for (const token of texts.flatMap(numberTokens)) {
    assert.ok(readingNumbers.get(tm).has(token), `${label}: number ${token} does not occur in the TM${tm} reading`);
  }
};
const countByTm = (items) => items.reduce((map, item) => map.set(item.tm, (map.get(item.tm) ?? 0) + 1), new Map());

// ---------------------------------------------------------------- Quiz TM1–TM7 (markdown via renderText)
const quiz = mod.AKK202_QUIZ_UTS;
assert.equal(mod.AKK202_QUIZ.length, quiz.length + mod.AKK202_QUIZ_UAS.length);
assert.equal(mod.AKK202_QUIZ_UAS.length, 35, 'TM8–TM14 quiz unchanged in count');
assert.ok(mod.AKK202_QUIZ_UAS.every((item) => item.tm >= 8 && item.tm <= 14), 'UAS quiz keeps TM8–TM14');
const quizCounts = countByTm(quiz);
assert.deepEqual([...quizCounts.keys()].sort((a, b) => a - b), PRA_UTS_TMS, 'quiz UTS covers exactly TM1–TM7');
for (const tm of PRA_UTS_TMS) assert.equal(quizCounts.get(tm), 5, `quiz TM${tm}: 5 items`);
assertNoOldTopics('quiz UTS', quiz);
const questionTexts = new Set();
quiz.forEach((item, index) => {
  const label = `quiz UTS #${index + 1} (TM${item.tm})`;
  assert.equal(item.topic, readings[item.tm].title, `${label}: topic follows the canonical reading title`);
  assert.ok(['basic', 'medium', 'advanced'].includes(item.difficulty), `${label}: difficulty`);
  assert.ok(!questionTexts.has(item.q), `${label}: duplicate question`);
  questionTexts.add(item.q);
  assert.equal(item.options.length, 4, `${label}: 4 options`);
  assert.equal(new Set(item.options).size, 4, `${label}: options unique`);
  assert.ok(Number.isInteger(item.answer) && item.answer >= 0 && item.answer < 4, `${label}: answer index`);
  assert.ok(item.explanation.trim().length > 40, `${label}: explanation`);
  for (const text of [item.q, ...item.options, item.explanation]) assertMarkdownSafe(label, text);
  // Distractors are wrong on purpose (e.g. using VIU instead of the higher FVLCD), so only the stem,
  // the keyed answer, and the explanation must trace to the reading.
  assertNumbersFromReading(label, item.tm, [item.q, item.options[item.answer], item.explanation]);
});
for (const tm of PRA_UTS_TMS) {
  const answers = new Set(quiz.filter((item) => item.tm === tm).map((item) => item.answer));
  assert.ok(answers.size > 1, `quiz TM${tm}: correct answers are not all the same letter`);
}

// ---------------------------------------------------------------- Flashcards (plain text in FlashcardDeck)
const flashcards = mod.AKK202_FC;
const ids = flashcards.map((card) => card.id);
assert.equal(new Set(ids).size, ids.length, 'flashcard ids are unique');
for (const card of flashcards) {
  const match = /^akk202-(?:v2-)?tm(\d{2})-(\d{2})$/.exec(card.id);
  assert.ok(match, `flashcard id pattern: ${card.id}`);
  assert.equal(Number(match[1]), card.tm, `flashcard id matches its tm: ${card.id} (tm ${card.tm})`);
  assert.equal(card.phase, card.tm <= 7 ? 'pra-uts' : 'pra-uas', `flashcard phase: ${card.id}`);
}
const praUtsCards = flashcards.filter((card) => card.tm <= 7);
const fcCounts = countByTm(praUtsCards);
for (const tm of PRA_UTS_TMS) assert.equal(fcCounts.get(tm), 6, `flashcards TM${tm}: 6 cards`);
assert.equal(flashcards.length - praUtsCards.length, 42, 'TM8–TM14 flashcards unchanged in count');
// Only the four cards whose content did not change keep their original ids; every other TM1–TM7 card is v2,
// so old SRS/star entries never attach to different content.
const keptIds = ['akk202-tm01-04', 'akk202-tm02-05', 'akk202-tm04-05', 'akk202-tm05-01'];
assert.deepEqual(praUtsCards.filter((card) => !card.id.startsWith('akk202-v2-')).map((card) => card.id), keptIds);
assertNoOldTopics('flashcards TM1–TM7', praUtsCards);
assert.equal(new Set(praUtsCards.map((card) => card.front)).size, praUtsCards.length, 'flashcard fronts are unique');
const categories = new Set(['Definisi', 'Konsep', 'Mekanisme', 'Hukum', 'Klasifikasi', 'Prosedur', 'Contoh', 'Standar',
  'Perbandingan', 'Rumus', 'Jurnal', 'Prinsip', 'Miskonsepsi']);
for (const card of praUtsCards) {
  assert.equal(card.topic, readings[card.tm].title, `${card.id}: topic follows the canonical reading title`);
  assert.ok(categories.has(card.category), `${card.id}: category ${card.category}`);
  for (const text of [card.front, card.back]) {
    assert.ok(text.trim().length > 0, `${card.id}: empty text`);
    // Plain-text render path: markdown escapes and markup would show up literally.
    assert.ok(!/\\[$*.]|\*\*|`|\n/.test(text), `${card.id}: plain-text field contains markdown escapes, markup, or line breaks: ${text.slice(0, 60)}`);
  }
  assertNumbersFromReading(card.id, card.tm, [card.front, card.back]);
}

// ---------------------------------------------------------------- Bank soal (plain text in EssayBank)
const bank = mod.AKK202_BANK_UTS;
assert.equal(bank.length, 7, 'bank soal UTS: one case per TM');
assert.equal(mod.AKK202_BANK.length, bank.length + mod.AKK202_BANK_UAS.length);
assert.equal(mod.AKK202_BANK_UAS.length, 7, 'TM8–TM14 bank soal unchanged in count');
assertNoOldTopics('bank soal UTS', bank);
const plainTextFields = ['question', 'scope', 'difficulty', 'context', 'answerGuide'];
const listFields = ['data', 'instructions', 'outputFormat', 'rubric'];
bank.forEach((item, index) => {
  const tm = index + 1;
  const label = `bank soal TM${tm}`;
  assert.equal(item.type, 'case', `${label}: type`);
  assert.ok(item.scope.startsWith(`TM ${tm}: `), `${label}: scope starts with "TM ${tm}: "`);
  assert.ok(item.question.startsWith(`Studi Kasus ${tm}: `), `${label}: question numbering`);
  for (const field of listFields) assert.ok(Array.isArray(item[field]) && item[field].length > 0, `${label}: ${field} list`);
  const texts = [...plainTextFields.map((field) => item[field]), ...listFields.flatMap((field) => item[field])];
  for (const text of texts) {
    assert.ok(typeof text === 'string' && text.trim().length > 0, `${label}: empty text`);
    // EssayBank renders plain text: escapes and markup would show literally, and line breaks collapse.
    assert.ok(!/\\[$*.]|\*\*|`|\n/.test(text), `${label}: plain-text field contains markdown escapes, markup, or line breaks: ${text.slice(0, 60)}`);
  }
  assert.ok(!item.rubric.some((entry) => /\d\s*%/.test(entry)), `${label}: rubric weights are not reading facts`);
  assertNumbersFromReading(label, tm, [...['question', 'context', 'answerGuide'].map((field) => item[field]),
    ...listFields.flatMap((field) => item[field])]);
});

console.log(`AKK202 alignment PASS: quiz UTS ${quiz.length} items; flashcards ${praUtsCards.length} TM1–TM7 cards (${keptIds.length} kept ids); bank soal ${bank.length} TM1–TM7 cases; numbers traced to readings.`);
