// AKS301 Pra-UTS alignment guard: the dedicated UTS review and the TM1–TM7 quiz, flashcard,
// and bank soal items must follow the canonical readings (Richardson 4e Ch. 1, 2, 4–8) and the
// render path of each file.
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
      "export { loadCourseContent } from './src/data/courses/courseRegistry.ts';",
      "export { AKS301_READINGS, AKS301_REVIEW_READINGS } from './src/data/sia/siaReadings.ts';",
      "export { AKS301_QUIZ, AKS301_QUIZ_UTS, AKS301_QUIZ_UAS } from './src/data/quizzes/aks301.ts';",
      "export { AKS301_FC } from './src/data/flashcards/aks301.ts';",
      "export { AKS301_BANK, AKS301_BANK_UTS, AKS301_BANK_UAS } from './src/data/banksoal/aks301.ts';",
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
const { loadCourseContent, AKS301_READINGS: readings } = mod;

// Topics that are not part of the TM1–TM7 readings (old Conversion-cycle and non-canonical items).
const oldTopicMarkers = [
  /Conversion/i, /Konversi/i, /Bill of Materials/i, /\bBOM\b/, /Move Ticket/i, /Work Order/i, /Work-in-Process/i,
  /\bWIP\b/, /Route Sheet/i, /Evaluated Receipt Settlement/i, /\bERS\b/, /Lockbox/i, /Kotak Kunci/i,
  /\b[23]NF\b/, /Transitive/i, /Transitif/i, /Partial Dependency/i, /Ketergantungan Parsial/i,
  /\bPAID\b/, /\bLUNAS\b/, /Kiting/i,
];
const assertNoOldTopics = (label, value) => {
  const text = JSON.stringify(value);
  for (const marker of oldTopicMarkers) assert.ok(!marker.test(text), `${label}: old-topic marker ${marker}`);
};

// Markdown render-path checks (same heuristics as test-sia-canonical.mjs).
const withoutCode = (text) => text.replace(/`[^`]*`/g, '');
const unescapedDollars = (text) => (withoutCode(text).match(/(?<!\\)\$/g) ?? []).length;
const loneStars = (text) => [...withoutCode(text).matchAll(/(?<![\\*])\*(?!\*)/g)];
const hasNotationStarPair = (text) => {
  const stars = loneStars(text);
  const source = withoutCode(text);
  return stars.length >= 2 && stars.some((m) => /[.\d"]/.test(source[m.index - 1] ?? '') || /[)"]/.test(source[m.index + 1] ?? ''));
};
// Parse with the renderText plugins (remark-gfm + remark-math) and reject nodes that change meaning.
const markdown = unified().use(remarkParse).use(remarkGfm).use(remarkMath);
const unexpectedNodes = new Set(['inlineMath', 'math', 'emphasis', 'list', 'html', 'heading', 'blockquote']);
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
  assert.ok(!/^\s*(>|#)/.test(text), `${label}: leading ">" or "#" renders as a markdown block: ${text.slice(0, 80)}`);
};

const flatten = (blocks) => blocks.flatMap((block) => [block, ...('blocks' in block ? flatten(block.blocks) : [])]);
const money = (value = '') => Number(value.replace(/[$,]/g, ''));
const renderedStrings = (block) => {
  const values = [];
  for (const [key, value] of Object.entries(block)) {
    // Block titles (solution-reveal, callout) are rendered as plain text, not through renderText.
    if (['kind', 'blocks', 'lines', 'variant', 'title'].includes(key)) continue;
    if ((block.kind === 'formula' || block.kind === 'code') && key === 'text') continue;
    if (typeof value === 'string') values.push(value);
    if (Array.isArray(value)) values.push(...value.flat().filter((item) => typeof item === 'string'));
  }
  return values;
};

// ---------------------------------------------------------------- UTS review
const content = await loadCourseContent('AKS301');
const review = content.reviews.uts;
assert.ok(review, 'AKS301 has a UTS review');
assert.notEqual(review, readings[7], 'reviews.uts must not be the TM07 reading object');
assert.ok(Object.values(readings).every((reading) => reading !== review), 'reviews.uts is not any TM reading');
assert.equal(review, mod.AKS301_REVIEW_READINGS.uts);
assert.equal(review.tm, 0, 'review uses tm 0 so its progress key does not collide with TM07');
assert.equal(content.reviews.uas, readings[14], 'UAS review is unchanged');
assert.equal(content.readings, readings);
assertNoOldTopics('review', review);
const reviewBlocks = flatten(review.blocks);
const reviewHeadings = review.blocks.filter((block) => block.kind === 'h2');
reviewHeadings.forEach((heading, index) => assert.ok(heading.text.startsWith(`${index + 1}. `), `review heading order: ${heading.text}`));
// Numbered h2 headings follow the canonical reading convention and are not checked here.
const reviewBodyBlocks = reviewBlocks.filter((block) => block.kind !== 'h2' && block.kind !== 'h3');
for (const value of [review.title, review.intro, ...review.objectives, ...reviewBodyBlocks.flatMap(renderedStrings)]) {
  assertMarkdownSafe('review', value);
}
let reviewJournals = 0;
for (const block of reviewBlocks) {
  if (block.kind === 'table') {
    block.rows.forEach((row) => assert.equal(row.length, block.headers.length, `review table shape: ${block.headers.join('|')}`));
    for (const cell of block.rows.flat()) assert.ok(!/^\s*(\d+\.|[-*+])\s/.test(cell), `review table cell renders as a list: ${cell}`);
  }
  if (block.kind === 'journal') {
    const debit = block.lines.reduce((sum, line) => sum + money(line.debit), 0);
    const credit = block.lines.reduce((sum, line) => sum + money(line.credit), 0);
    assert.ok(debit > 0 && Math.abs(debit - credit) < 1e-9, `review journal balances: ${block.caption}`);
    reviewJournals++;
  }
  if (block.kind === 'formula') {
    assert.ok(block.text.includes('\\') && !block.text.includes('$'), 'review formula uses native TeX without "$"');
    const lines = block.text.split('\n');
    const tex = lines.length > 1 ? `\\begin{aligned}${lines.map((line) => `& ${line}`).join(' \\\\ ')}\\end{aligned}` : block.text;
    katex.renderToString(tex, { throwOnError: true, displayMode: true, strict: 'error' });
  }
}
assert.ok(reviewJournals >= 5, 'review keeps the O2C and P2P journals');
for (const tm of [1, 2, 3, 4, 5, 6, 7]) {
  assert.ok(JSON.stringify(review).includes(`TM${tm}`), `review covers TM${tm}`);
}

// ---------------------------------------------------------------- Quiz TM1–TM7 (markdown via renderText)
const PRA_UTS_TMS = [1, 2, 3, 4, 5, 6, 7];
const countByTm = (items) => items.reduce((map, item) => map.set(item.tm, (map.get(item.tm) ?? 0) + 1), new Map());
const quiz = mod.AKS301_QUIZ_UTS;
assert.equal(mod.AKS301_QUIZ.length, quiz.length + mod.AKS301_QUIZ_UAS.length);
assert.ok(mod.AKS301_QUIZ_UAS.every((item) => item.tm >= 8 && item.tm <= 14), 'UAS quiz keeps TM8–TM14');
const quizCounts = countByTm(quiz);
assert.deepEqual([...quizCounts.keys()].sort((a, b) => a - b), PRA_UTS_TMS, 'quiz UTS covers exactly TM1–TM7');
for (const tm of PRA_UTS_TMS) assert.equal(quizCounts.get(tm), 5, `quiz TM${tm}: 5 items`);
assertNoOldTopics('quiz UTS', quiz);
const questionTexts = new Set();
quiz.forEach((item, index) => {
  const label = `quiz UTS #${index + 1} (TM${item.tm})`;
  assert.equal(item.topic, readings[item.tm].title, `${label}: topic follows the canonical reading title`);
  assert.ok(!questionTexts.has(item.q), `${label}: duplicate question`);
  questionTexts.add(item.q);
  assert.equal(item.options.length, 4, `${label}: 4 options`);
  assert.equal(new Set(item.options).size, 4, `${label}: options unique`);
  assert.ok(Number.isInteger(item.answer) && item.answer >= 0 && item.answer < 4, `${label}: answer index`);
  assert.ok(item.explanation.trim().length > 40, `${label}: explanation`);
  for (const text of [item.q, ...item.options, item.explanation]) {
    assertMarkdownSafe(label, text);
    assert.ok(!/^\s*(\d+\.|[-*+])\s/.test(text), `${label}: text renders as a markdown list: ${text.slice(0, 60)}`);
    assert.ok(!/<[A-Za-z]/.test(withoutCode(text)), `${label}: "<" followed by a letter may parse as raw HTML`);
    assert.ok(!/==[^=\n]+==/.test(text), `${label}: "==text==" becomes a highlight`);
  }
});
for (const tm of PRA_UTS_TMS) {
  const answers = new Set(quiz.filter((item) => item.tm === tm).map((item) => item.answer));
  assert.ok(answers.size > 1, `quiz TM${tm}: correct answers are not all the same letter`);
}

// ---------------------------------------------------------------- Flashcards (plain text in FlashcardDeck)
const flashcards = mod.AKS301_FC;
const ids = flashcards.map((card) => card.id);
assert.equal(new Set(ids).size, ids.length, 'flashcard ids are unique');
for (const card of flashcards) {
  const match = /^aks301-(?:v2-)?tm(\d{2})-(\d{2})$/.exec(card.id);
  assert.ok(match, `flashcard id pattern: ${card.id}`);
  assert.equal(Number(match[1]), card.tm, `flashcard id matches its tm: ${card.id} (tm ${card.tm})`);
  assert.equal(card.phase, card.tm <= 7 ? 'pra-uts' : 'pra-uas', `flashcard phase: ${card.id}`);
}
const praUtsCards = flashcards.filter((card) => card.tm <= 7);
const fcCounts = countByTm(praUtsCards);
for (const tm of PRA_UTS_TMS) assert.equal(fcCounts.get(tm), 6, `flashcards TM${tm}: 6 cards`);
assert.equal(flashcards.length - praUtsCards.length, 42, 'TM8–TM14 flashcards unchanged in count');
// Only the three cards whose content did not change keep their original ids; every other TM1–TM7 card is v2.
const keptIds = ['aks301-tm01-01', 'aks301-tm01-02', 'aks301-tm04-02'];
assert.deepEqual(praUtsCards.filter((card) => !card.id.startsWith('aks301-v2-')).map((card) => card.id), keptIds);
assertNoOldTopics('flashcards TM1–TM7', praUtsCards);
assert.equal(new Set(praUtsCards.map((card) => card.front)).size, praUtsCards.length, 'flashcard fronts are unique');
const categories = new Set(['Definisi', 'Konsep', 'Mekanisme', 'Hukum', 'Klasifikasi', 'Prosedur', 'Dokumen', 'Pengendalian', 'Contoh', 'Standar', 'Perbandingan']);
for (const card of praUtsCards) {
  assert.equal(card.topic, readings[card.tm].title, `${card.id}: topic follows the canonical reading title`);
  assert.ok(categories.has(card.category), `${card.id}: category ${card.category}`);
  for (const text of [card.front, card.back]) {
    assert.ok(text.trim().length > 0, `${card.id}: empty text`);
    // Plain-text render path: markdown escapes and markup would show up literally.
    assert.ok(!/\\[$*.]|\*\*|`/.test(text), `${card.id}: plain-text field contains markdown escapes or markup: ${text.slice(0, 60)}`);
  }
}

// ---------------------------------------------------------------- Bank soal (plain text in EssayBank)
const bank = mod.AKS301_BANK_UTS;
assert.equal(bank.length, 7, 'bank soal UTS: one case per TM');
assert.equal(mod.AKS301_BANK.length, bank.length + mod.AKS301_BANK_UAS.length);
assert.equal(mod.AKS301_BANK_UAS.length, 7, 'TM8–TM14 bank soal unchanged in count');
assertNoOldTopics('bank soal UTS', bank);
const plainTextFields = ['question', 'scope', 'difficulty', 'context', 'answerGuide'];
const listFields = ['data', 'instructions', 'outputFormat', 'rubric'];
bank.forEach((item, index) => {
  const tm = index + 1;
  const label = `bank soal TM${tm}`;
  assert.equal(item.type, 'case', `${label}: type`);
  assert.ok(item.scope.startsWith(`TM ${tm}: `), `${label}: scope starts with "TM ${tm}: "`);
  assert.ok(item.question.startsWith(`Studi Kasus ${tm}: `), `${label}: question numbering`);
  const texts = [...plainTextFields.map((field) => item[field]), ...listFields.flatMap((field) => item[field])];
  for (const field of listFields) assert.ok(Array.isArray(item[field]) && item[field].length > 0, `${label}: ${field} list`);
  for (const text of texts) {
    assert.ok(typeof text === 'string' && text.trim().length > 0, `${label}: empty text`);
    // EssayBank renders plain text: escapes and markup would show literally, and line breaks collapse.
    assert.ok(!/\\[$*.]|\*\*|`|\n/.test(text), `${label}: plain-text field contains markdown escapes, markup, or line breaks: ${text.slice(0, 60)}`);
  }
  assert.ok(!item.rubric.some((entry) => /\d\s*%/.test(entry)), `${label}: rubric weights are not reading facts`);
});

// ---------------------------------------------------------------- Numeric traceability
// Every number in a TM1–TM7 quiz item or bank case must also occur in that TM's canonical reading.
const numberTokens = (text) => text.match(/\d+(?:,\d{3})*(?:\.\d+)?/g) ?? [];
const readingNumbers = new Map(PRA_UTS_TMS.map((tm) => [tm, new Set(numberTokens(JSON.stringify(readings[tm]).replace(/\{,\}/g, ',')))]));
const assertNumbersFromReading = (label, tm, texts) => {
  for (const token of texts.flatMap(numberTokens)) {
    assert.ok(readingNumbers.get(tm).has(token), `${label}: number ${token} does not occur in the TM${tm} reading`);
  }
};
quiz.forEach((item, index) => assertNumbersFromReading(`quiz UTS #${index + 1}`, item.tm, [item.q, ...item.options, item.explanation]));
const allReadingNumbers = new Set(PRA_UTS_TMS.flatMap((tm) => [...readingNumbers.get(tm)]));
for (const token of numberTokens(JSON.stringify(review).replace(/\{,\}/g, ','))) {
  assert.ok(allReadingNumbers.has(token), `review: number ${token} does not occur in the TM1–TM7 readings`);
}
bank.forEach((item, index) => assertNumbersFromReading(`bank soal TM${index + 1}`, index + 1,
  [...['question', 'context', 'answerGuide'].map((field) => item[field]), ...listFields.flatMap((field) => item[field])]));

console.log(`AKS301 alignment PASS: bank soal ${bank.length} TM1–TM7 cases; numbers traced to readings; flashcards ${praUtsCards.length} TM1–TM7 cards; quiz UTS ${quiz.length} items; review (${reviewHeadings.length} sections, ${reviewJournals} balanced journals).`);
