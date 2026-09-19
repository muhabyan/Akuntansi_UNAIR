// AKK202 Pra-UTS alignment guard: the dedicated UTS review and the TM1–TM7 quiz, flashcard, and bank soal
// items must follow the canonical readings (Kieso IFRS 5e Ch. 9–13, src/data/akm2/modules/tm1.ts–tm7.ts)
// and the render path of each file.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';
import katex from 'katex';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

const bundle = await build({
  stdin: {
    contents: [
      "export { AKK202_READINGS, AKM2_REVIEW_READINGS } from './src/data/akm2/akm2Data.ts';",
      "export { loadCourseContent } from './src/data/courses/courseRegistry.ts';",
      "export { TM9_READING } from './src/data/akm2/modules/tm9.ts';",
      "export { TM10_READING } from './src/data/akm2/modules/tm10.ts';",
      "export { TM11_READING } from './src/data/akm2/modules/tm11.ts';",
      "export { TM12_READING } from './src/data/akm2/modules/tm12.ts';",
      "export { TM13_READING } from './src/data/akm2/modules/tm13.ts';",
      "export { TM14_READING } from './src/data/akm2/modules/tm14.ts';",
      "export { AKK202_QUIZ, AKK202_QUIZ_UTS, AKK202_QUIZ_UAS } from './src/data/quizzes/akk202.ts';",
      "export { AKK202_FC } from './src/data/flashcards/akk202.ts';",
      "export { AKK202_BANK, AKK202_BANK_UTS, AKK202_BANK_UAS } from './src/data/banksoal/akk202.ts';",
    ].join('\n'),
    resolveDir: process.cwd(), loader: 'ts',
  },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
  plugins: [{
    // Vite "?raw" imports resolve to the file contents as a string.
    name: 'vite-raw',
    setup(builder) {
      builder.onResolve({ filter: /\?raw$/ }, (args) => ({
        path: path.resolve(args.resolveDir, args.path.slice(0, -'?raw'.length)), namespace: 'raw',
      }));
      builder.onLoad({ filter: /.*/, namespace: 'raw' }, (args) => ({ contents: readFileSync(args.path, 'utf8'), loader: 'text' }));
    },
  }],
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
// The five stale TM8 items (old UTS review) were removed; TM9–TM14 items are unchanged.
assert.equal(mod.AKK202_QUIZ_UAS.length, 30, 'TM9–TM14 quiz unchanged in count');
assert.ok(mod.AKK202_QUIZ_UAS.every((item) => item.tm >= 9 && item.tm <= 14), 'UAS quiz keeps TM9–TM14 only');
const quizCounts = countByTm(quiz);
assert.deepEqual([...quizCounts.keys()].sort((a, b) => a - b), PRA_UTS_TMS, 'quiz UTS covers exactly TM1–TM7');
// TM6 carries a sixth item (the service-type warranty question that replaced the removed TM8 item) and four items
// for the Ch. 12 worked cases: VAT chain (Illustration 12.2), Denson, Hamlin and Fluffy (Examples 12.6–12.8).
for (const tm of PRA_UTS_TMS) assert.equal(quizCounts.get(tm), tm === 6 ? 10 : 5, `quiz TM${tm}: item count`);
assert.ok(quiz.some((item) => item.tm === 6 && item.options[item.answer].includes('Unearned Warranty Revenue')), 'quiz TM6 covers service-type warranty');
{
  const tm6Quiz = quiz.filter((item) => item.tm === 6);
  const keyed = (needle) => tm6Quiz.find((item) => item.q.includes(needle));
  assert.equal(keyed('Illustration 12.2').options[keyed('Illustration 12.2').answer], 'Halo €40; total disetor €240', 'quiz TM6 VAT chain');
  const denson = keyed('Denson Machinery');
  assert.ok(/^Biaya aktual: debit Warranty Expense USD 4\.000; .*USD 16\.000$/.test(denson.options[denson.answer]), 'quiz TM6 Denson: actual costs to Warranty Expense');
  assert.ok(denson.options.some((option) => option.startsWith('Biaya aktual: debit Warranty Liability')), 'quiz TM6 Denson keeps the Warranty Liability trap');
  const hamlin = keyed('Hamlin Auto');
  assert.equal(hamlin.options[hamlin.answer], 'Kredit Unearned Warranty Revenue €900; Warranty Revenue 2028 €300', 'quiz TM6 Hamlin');
  const fluffy = keyed('Fluffy Cake Mix');
  assert.equal(fluffy.options[fluffy.answer], '£12.000', 'quiz TM6 Fluffy premium liability');
}
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
// TM6 adds four cards (tm06-07 to tm06-10) for the Ch. 12 worked cases; every other TM keeps six.
for (const tm of PRA_UTS_TMS) assert.equal(fcCounts.get(tm), tm === 6 ? 10 : 6, `flashcards TM${tm}: card count`);
assert.deepEqual(praUtsCards.filter((card) => card.tm === 6).map((card) => card.id.slice(-2)), ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'], 'TM6 card ids are sequential');
for (const [id, needle] of [['07', 'Illustration 12.2'], ['08', 'Example 12.6'], ['09', 'Example 12.7'], ['10', 'Example 12.8']]) {
  assert.ok(praUtsCards.find((card) => card.id === `akk202-v2-tm06-${id}`).front.includes(needle), `flashcard tm06-${id} covers ${needle}`);
}
assert.ok(/bukan Warranty Liability/.test(praUtsCards.find((card) => card.id === 'akk202-v2-tm06-08').back), 'Denson card states the Warranty Expense rule');
// FlashcardDeck shows the answer on a fixed-height face that clips overflow; 281 characters (akk202-v2-tm06-05) is the
// longest back verified in the browser to fit, so a longer back would hide its last sentence.
for (const card of praUtsCards) assert.ok(card.back.length <= 281, `${card.id}: back has ${card.back.length} characters, over the 281 that fit the card face`);
// The six stale TM8 cards were removed; TM9–TM14 cards are unchanged.
assert.ok(flashcards.every((card) => card.tm !== 8), 'no TM8 flashcards');
assert.equal(flashcards.length - praUtsCards.length, 36, 'TM9–TM14 flashcards unchanged in count');
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
// One case per TM, plus Studi Kasus 6B for the TM6 Ch. 12 worked cases (VAT chain, warranties, premiums).
const BANK_UTS_CASES = [[1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5'], [6, '6'], [6, '6B'], [7, '7']];
assert.equal(bank.length, BANK_UTS_CASES.length, 'bank soal UTS: one case per TM plus Studi Kasus 6B');
assert.equal(mod.AKK202_BANK.length, bank.length + mod.AKK202_BANK_UAS.length);
// The stale TM8 case was removed; the TM9–TM14 cases are unchanged.
assert.equal(mod.AKK202_BANK_UAS.length, 6, 'TM9–TM14 bank soal unchanged in count');
assert.deepEqual(mod.AKK202_BANK_UAS.map((item) => Number(/^TM (\d+):/.exec(item.scope)?.[1])), [9, 10, 11, 12, 13, 14], 'UAS bank soal covers TM9–TM14 only');
assertNoOldTopics('bank soal UTS', bank);
const plainTextFields = ['question', 'scope', 'difficulty', 'context', 'answerGuide'];
const listFields = ['data', 'instructions', 'outputFormat', 'rubric'];
bank.forEach((item, index) => {
  const [tm, caseNumber] = BANK_UTS_CASES[index];
  const label = `bank soal ${caseNumber} (TM${tm})`;
  assert.equal(item.type, 'case', `${label}: type`);
  assert.ok(item.scope.startsWith(`TM ${tm}: `), `${label}: scope starts with "TM ${tm}: "`);
  assert.ok(item.question.startsWith(`Studi Kasus ${caseNumber}: `), `${label}: question numbering`);
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
{
  // Studi Kasus 6B: entries Kieso does not show stay labelled Interpretasi, both VAT recording routes stay visible,
  // and the data never hands over a figure the instructions ask for.
  const case6b = bank[BANK_UTS_CASES.findIndex(([, caseNumber]) => caseNumber === '6B')];
  const guide = case6b.answerGuide;
  assert.ok(guide.includes('Interpretasi (Kieso pp. 1028–1029)') && guide.includes('Interpretasi (Kieso p. 1044)'), 'case 6B labels Interpretasi entries');
  assert.ok(guide.includes('VAT Taxes Recoverable') && guide.includes('menyesuaikan Inventory (atau Cost of Goods Sold)'), 'case 6B keeps both VAT recording routes');
  assert.ok(guide.includes('bukan ke Warranty Liability'), 'case 6B states the Warranty Expense rule');
  assert.ok(guide.includes('harga jual berdiri sendiri relatif'), 'case 6B notes the allocation boundary');
  const data = case6b.data.join(' ');
  for (const derived of ['€240', '€540', '€40', '$20.000', '€200', '€300', '£18.000', '£12.000', '£28.000']) {
    assert.ok(!data.includes(derived), `case 6B data must not give the derived figure ${derived}`);
  }
}

// ---------------------------------------------------------------- TM8 reading withheld
// The stale TM8 reading is not loaded until it is rebuilt after UTS; the catalog lists TM1–TM7 and TM9–TM14.
assert.deepEqual(Object.keys(readings).map(Number), [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14], 'AKK202 readings skip TM8');
assert.equal(readings[8], undefined, 'TM8 reading is not reachable');
for (const tm of [9, 10, 11, 12, 13, 14]) assert.equal(readings[tm], mod[`TM${tm}_READING`], `TM${tm} reading object unchanged`);

// ---------------------------------------------------------------- UTS review
const content = await mod.loadCourseContent('AKK202');
const review = content.reviews.uts;
assert.ok(review, 'AKK202 has a UTS review');
assert.equal(review, mod.AKM2_REVIEW_READINGS.uts);
assert.ok(Object.values(readings).every((reading) => reading !== review), 'reviews.uts is not any TM reading (TM08 included)');
assert.equal(review.tm, 0, 'review uses tm 0 so its progress key does not collide with any TM');
assert.deepEqual(Object.keys(content.reviews), ['uts'], 'AKK202 exposes only the UTS review');
assert.equal(content.readings, readings);
assertNoOldTopics('review', review);
// Markers of the retired TM08 review content: old PSAK numbering, the wrong exchange-loss rule, invented cases, highlights.
const reviewText = JSON.stringify(review);
for (const marker of [/\bPSAK\b/, /selalu diakui penuh/i, /Maju Bersama/, /==/]) {
  assert.ok(!marker.test(reviewText), `review contains retired TM08 marker ${marker}`);
}

const flatten = (blocks) => blocks.flatMap((block) => [block, ...('blocks' in block ? flatten(block.blocks) : [])]);
// "€14.833", "R$11.000", "¥1.100" use id-ID grouping; TM1 Shalla keeps US grouping ("$135,500").
const money = (value) => {
  if (!value) return 0;
  const text = value.replace(/[^\d.,]/g, '');
  assert.ok(text.length > 0, `unparseable amount ${value}`);
  return /^\d{1,3}(,\d{3})+$/.test(text) ? Number(text.replace(/,/g, '')) : Number(text.replace(/\./g, '').replace(',', '.'));
};
const reviewBlocks = flatten(review.blocks);
const markdownValues = [review.intro];
const plainValues = [review.title, review.ref, ...review.objectives];
for (const block of reviewBlocks) {
  switch (block.kind) {
    case 'p': case 'callout': markdownValues.push(block.text); break;
    case 'ul': case 'ol': markdownValues.push(...block.items); break;
    case 'table': markdownValues.push(...block.rows.flat(), block.caption); plainValues.push(...block.headers); break;
    case 'journal': markdownValues.push(block.caption); block.lines.forEach((line) => plainValues.push(line.account, line.debit ?? '', line.credit ?? '')); break;
    case 'formula': markdownValues.push(block.note); break;
    case 'solution-reveal': markdownValues.push(block.prompt); break;
    case 'h2': case 'h3': plainValues.push(block.text); break;
    default:
  }
  if (['solution-reveal', 'callout'].includes(block.kind) && block.title) plainValues.push(block.title);
}
for (const value of markdownValues.filter((item) => typeof item === 'string')) {
  assertMarkdownSafe('review', value);
  assert.equal(unescapedDollars(value), 0, `review: escape "$" in markdown text: ${value.slice(0, 80)}`);
}
for (const value of plainValues) assert.ok(!value.includes('\\'), `review: backslash in plain-text field: ${value.slice(0, 80)}`);

const reviewHeadings = review.blocks.filter((block) => block.kind === 'h2');
reviewHeadings.forEach((heading, index) => assert.ok(heading.text.startsWith(`${index + 1}. `), `review heading order: ${heading.text}`));
assert.equal(reviewHeadings.length, 12, 'review keeps the 12 approved sections');
console.warn = () => {}; // KaTeX unknownSymbol warnings for €, £, ¥ inside \text{} do not change the output.
let reviewJournals = 0;
for (const block of reviewBlocks) {
  if (block.kind === 'table') {
    block.rows.forEach((row) => assert.equal(row.length, block.headers.length, `review table shape: ${block.headers.join('|')}`));
  }
  if (block.kind === 'journal') {
    const debit = block.lines.reduce((sum, line) => sum + money(line.debit), 0);
    const credit = block.lines.reduce((sum, line) => sum + money(line.credit), 0);
    assert.ok(debit > 0 && Math.abs(debit - credit) < 1e-6, `review journal balances: ${block.caption} (${debit} vs ${credit})`);
    block.lines.forEach((line) => assert.equal(Boolean(line.isCredit), Boolean(line.credit), `review isCredit flag: ${line.account}`));
    reviewJournals++;
  }
  if (block.kind === 'formula') {
    assert.ok(block.text.includes('\\') && !block.text.includes('$'), 'review formula uses native TeX without "$"');
    katex.renderToString(block.text, {
      throwOnError: true, displayMode: true, strict: (code) => (code === 'unknownSymbol' ? 'ignore' : 'error'),
    });
  }
}
for (const tm of PRA_UTS_TMS) assert.ok(reviewText.includes(`TM${tm}`), `review covers TM${tm}`);
// Both branches stay visible where the readings give alternatives.
for (const term of ['Interpretasi A', 'Interpretasi B', 'Alternatif A', 'Alternatif B', 'Interpretasi — akun kredit deplesi',
  'Interpretasi — kapitalisasi dan amortisasi €45.000', 'Interpretasi — metode eliminasi pada E10.27', 'Illustration 9.14']) {
  assert.ok(reviewText.includes(term), `review keeps "${term}"`);
}
const practices = review.blocks.filter((block) => block.kind === 'solution-reveal');
assert.equal(practices.length, 8, 'review has eight integrated practices (seven plus Latihan 6B)');
assert.ok(review.intro.includes('delapan latihan terpadu'), 'review intro counts eight practices');
{
  // TM6 Ch. 12 worked cases: §8 rules, §10 key figures, §11 traps and Latihan 6B, with Interpretasi kept labelled.
  for (const term of ['Illustration 12.2', 'Example 12.6', 'Example 12.7', 'Example 12.8', 'bukan Warranty Liability',
    'Interpretasi — jurnal pembelian dan penyetoran PPN (Kieso pp. 1028–1029)', 'Interpretasi — 2026–2027 dan 2029–2030 (Kieso p. 1044)',
    'menyesuaikan Inventory (atau Cost of Goods Sold)', 'relative stand-alone selling price', 'Program loyalitas']) {
    assert.ok(reviewText.includes(term), `review keeps "${term}"`);
  }
  const practice6b = practices.find((block) => block.title.startsWith('6B. '));
  assert.ok(practice6b && practices.indexOf(practice6b) === practices.findIndex((block) => block.title.startsWith('6. ')) + 1, 'Latihan 6B follows Latihan 6');
  for (const derived of ['€240', '€540', '€40', '\\$20.000', '€200', '€300', '£18.000', '£12.000']) {
    assert.ok(!practice6b.prompt.includes(derived), `Latihan 6B prompt must not give the derived figure ${derived}`);
  }
  const journals6b = flatten(practice6b.blocks).filter((block) => block.kind === 'journal');
  const densonActual = journals6b.find((j) => j.lines.some((l) => l.account === 'Warranty Expense' && l.debit === '$4.000'));
  assert.ok(densonActual && !densonActual.lines.some((l) => l.account === 'Warranty Liability'), 'Latihan 6B: Denson year-of-sale costs go to Warranty Expense');
  assert.ok(journals6b.filter((j) => !j.caption.startsWith('(')).every((j) => j.caption.startsWith('Interpretasi (Kieso pp. 1028–1029)')), 'Latihan 6B: the only uncaptioned-part journal is the labelled VAT Interpretasi');
  const keyFigures = review.blocks.find((block) => block.kind === 'table' && block.headers.join('|') === 'TM|Kasus|Hasil');
  assert.deepEqual(keyFigures.rows.filter((row) => /Illustration 12\.2|Example 12\.[678]/.test(row[1])).map((row) => row[1].split(' (')[0]),
    ['Rantai PPN', 'Denson Machinery', 'Hamlin Auto', 'Fluffy Cake Mix'], 'Angka Kunci lists the four TM6 cases');
}
// Every number in the review occurs in at least one TM1–TM7 reading.
const allReadingNumbers = new Set([...readingNumbers.values()].flatMap((set) => [...set]));
for (const token of numberTokens(readingText(review))) {
  assert.ok(allReadingNumbers.has(token), `review: number ${token} does not occur in the TM1–TM7 readings`);
}

console.log(`AKK202 alignment PASS: UTS review (${reviewHeadings.length} sections, ${practices.length} practices, ${reviewJournals} balanced journals).`);
console.log(`AKK202 alignment PASS: quiz UTS ${quiz.length} items; flashcards ${praUtsCards.length} TM1–TM7 cards (${keptIds.length} kept ids); bank soal ${bank.length} TM1–TM7 cases; numbers traced to readings.`);
