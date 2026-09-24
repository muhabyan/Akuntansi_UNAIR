// PJK301 Pra-UTS practice must follow canonical TM01–TM07 and each UI render path.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { build } from 'esbuild';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

const bundle = await build({
  stdin: {
    contents: [
      "export { PJK301_READINGS } from './src/data/pjk2/pjk2Data.ts';",
      "export { PJK301_QUIZ, PJK301_QUIZ_UTS, PJK301_QUIZ_UAS } from './src/data/quizzes/pjk301.ts';",
      "export { PJK301_FC } from './src/data/flashcards/pjk301.ts';",
      "export { PJK301_BANK, PJK301_BANK_UTS, PJK301_BANK_UAS } from './src/data/banksoal/pjk301.ts';",
    ].join('\n'),
    resolveDir: process.cwd(), loader: 'ts',
  },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
});
const mod = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const tms = [1, 2, 3, 4, 5, 6, 7];
const readings = mod.PJK301_READINGS;
const quiz = mod.PJK301_QUIZ_UTS;
const cards = mod.PJK301_FC;
const bank = mod.PJK301_BANK_UTS;
const countByTm = (items) => items.reduce((map, item) => map.set(item.tm, (map.get(item.tm) ?? 0) + 1), new Map());
const numberTokens = (value) => value.replace(/\bTM0?[1-7]\b/g, '').match(/\d+(?:[.,]\d+)*/g) ?? [];
const readingNumbers = new Map(tms.map((tm) => [tm,
  new Set(numberTokens(JSON.stringify(readings[tm], (key, value) => key === 'svg' ? undefined : value)))]));
// TM05 bank total is 3,000,000 + 15,000,000 from its two canonical worked transactions.
const derivedNumbers = new Map([[5, new Set(['18.000.000'])]]);
const assertNumbersTraced = (label, tm, values) => {
  for (const token of values.flatMap(numberTokens)) {
    assert.ok(readingNumbers.get(tm).has(token) || derivedNumbers.get(tm)?.has(token),
      label + ': number ' + token + ' not in TM' + tm + ' reading or documented derivation');
  }
};
const stalePatterns = [
  /KEP-220\/PJ\.?\/2002.{0,90}(?:hanya|wajib).{0,35}50%/i,
  /(?:ponsel|sedan).{0,90}(?:hanya|wajib).{0,35}50%/i,
  /(?:UMKM|orang pribadi|WP OP).{0,80}(?:maksimal|dibatasi|berlaku).{0,20}7 tahun/i,
  /PPh 25 WP OPPT.{0,70}bersifat final/i,
  /(?:LIFO (?:diizinkan|diperbolehkan)|bangunan.{0,35}saldo menurun (?:diizinkan|diperbolehkan))/i,
];
const assertNoStale = (label, value) => {
  for (const pattern of stalePatterns) assert.ok(!pattern.test(JSON.stringify(value)), label + ': stale rule ' + pattern);
};

// Hash normalized source text, so any edit to protected TM08–TM14 entries fails independently of git state.
const source = (file) => readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const quizSource = source('src/data/quizzes/pjk301.ts');
const cardSource = source('src/data/flashcards/pjk301.ts');
const bankSource = source('src/data/banksoal/pjk301.ts');
const protectedSections = {
  quiz: quizSource.slice(quizSource.indexOf('export const PJK301_QUIZ_UAS:'), quizSource.indexOf('export const PJK301_QUIZ:')),
  cards: cardSource.slice(cardSource.indexOf('    "id": "pjk202-tm08-01"') - 6, cardSource.lastIndexOf('\n];')),
  bank: bankSource.slice(bankSource.indexOf('export const PJK301_BANK_UAS:'), bankSource.indexOf('export const PJK301_BANK:')),
};
for (const [name, value] of Object.entries(protectedSections)) assert.ok(value.length > 100, name + ' protected source found');
const protectedHashes = Object.fromEntries(Object.entries(protectedSections).map(([name, value]) => [name, sha256(value)]));
if (process.argv.includes('--print-protected-hashes')) {
  console.log(protectedHashes);
  process.exit(0);
}
assert.deepEqual(protectedHashes, {
  quiz: '4006f2d6e88f10f3e55382dc14ca1d65253ae54ca4ab03bf626455f5d5fef7b2',
  cards: '1aff7fef89ce79164ffba4086a3b37efbeb8b8d1735b1673183a8aec7abc5859',
  bank: '18acd887ae7ec56714416d93e39005ff976593009f3204466afff55232799dd3',
}, 'TM08–TM14 practice source unchanged');

assert.equal(mod.PJK301_QUIZ.length, quiz.length + mod.PJK301_QUIZ_UAS.length);
assert.equal(mod.PJK301_BANK.length, bank.length + mod.PJK301_BANK_UAS.length);
assert.deepEqual(mod.PJK301_QUIZ_UAS.map((item) => item.tm), [8, 9, 10, 11, 12, 13, 14]);
assert.equal(mod.PJK301_BANK_UAS.length, 1);
assert.equal(cards.filter((card) => card.tm >= 8).length, 42);

const markdown = unified().use(remarkParse).use(remarkGfm).use(remarkMath);
const badMarkdownNodes = new Set(['inlineMath', 'math', 'emphasis', 'delete', 'list', 'html', 'heading', 'blockquote']);
const findBadNodes = (node, result = []) => {
  if (badMarkdownNodes.has(node.type)) result.push(node.type);
  for (const child of node.children ?? []) findBadNodes(child, result);
  return result;
};
const assertQuizText = (label, value) => {
  assert.ok(typeof value === 'string' && value.trim(), label + ': empty text');
  assert.deepEqual(findBadNodes(markdown.parse(value)), [], label + ': accidental markdown/math rendering');
  assert.ok(!/==[^=]+==|<\w/.test(value), label + ': accidental highlight or HTML');
};
const assertPlain = (label, value) => {
  assert.ok(typeof value === 'string' && value.trim(), label + ': empty text');
  assert.ok(!/\\[$*.]|\*\*|\x60|\r|\n|<\w/.test(value), label + ': plain-text UI would show markup or collapse lines');
};

assert.equal(quiz.length, 35, 'exactly 35 Pra-UTS quiz items');
assert.deepEqual([...countByTm(quiz)], tms.map((tm) => [tm, 5]));
assertNoStale('quiz UTS', quiz);
const quizStems = new Set();
for (const [index, item] of quiz.entries()) {
  const label = 'quiz ' + (index + 1) + ' TM' + item.tm;
  assert.equal(item.topic, readings[item.tm].title, label + ': canonical topic');
  assert.ok(['basic', 'medium', 'advanced'].includes(item.difficulty), label + ': difficulty');
  assert.ok(!quizStems.has(item.q), label + ': duplicate stem');
  quizStems.add(item.q);
  assert.equal(item.options.length, 4, label + ': four options');
  assert.equal(new Set(item.options).size, 4, label + ': distinct options');
  assert.ok(Number.isInteger(item.answer) && item.answer >= 0 && item.answer < 4, label + ': key');
  assert.ok(item.explanation.length >= 60, label + ': explanatory answer');
  for (const value of [item.q, ...item.options, item.explanation]) assertQuizText(label, value);
  // Distractors intentionally contain wrong numbers; trace the stem, key, and explanation.
  assertNumbersTraced(label, item.tm, [item.q, item.options[item.answer], item.explanation]);
}
for (const tm of tms) assert.ok(new Set(quiz.filter((item) => item.tm === tm).map((item) => item.answer)).size > 1, 'TM' + tm + ': varied key positions');
for (const [tm, patterns] of [
  [4, [/Kelompok 2/, /gedung permanen/i, /saldo menurun/i, /Juli/i, /komersial/i]],
  [7, [/PPh 24/, /PPh 25/, /OPPT/, /31A/, /31E/]],
]) {
  const text = quiz.filter((item) => item.tm === tm).map((item) => item.q + ' ' + item.explanation).join(' ');
  for (const pattern of patterns) assert.match(text, pattern, 'quiz TM' + tm + ': competency ' + pattern);
}

const utsCards = cards.filter((card) => card.tm <= 7);
assert.equal(utsCards.length, 42, 'exactly 42 Pra-UTS cards');
assert.deepEqual([...countByTm(utsCards)], tms.map((tm) => [tm, 6]));
assert.equal(new Set(cards.map((card) => card.id)).size, cards.length, 'card ids unique');
assert.equal(new Set(utsCards.map((card) => card.front)).size, utsCards.length, 'card fronts unique');
assertNoStale('flashcards UTS', utsCards);
for (const card of cards) {
  const pattern = card.tm <= 7 ? /^pjk202-v2-tm(\d{2})-(\d{2})$/ : /^pjk202-tm(\d{2})-(\d{2})$/;
  const match = pattern.exec(card.id);
  assert.ok(match, card.id + ': id namespace for SRS migration');
  assert.equal(Number(match[1]), card.tm, card.id + ': id and tm agree');
  assert.equal(card.phase, card.tm <= 7 ? 'pra-uts' : 'pra-uas');
}
for (const card of utsCards) {
  assert.equal(card.topic, readings[card.tm].title, card.id + ': canonical topic');
  assertPlain(card.id + ' front', card.front);
  assertPlain(card.id + ' back', card.back);
  // The card has a fixed-height face. This cap is below the 281-character verified AKK202 precedent.
  assert.ok(card.back.length <= 240, card.id + ': card back too long (' + card.back.length + ')');
  assertNumbersTraced(card.id, card.tm, [card.front, card.back]);
}
const tm4Card = utsCards.find((card) => card.id === 'pjk202-v2-tm04-06');
assert.match(tm4Card.back, /tidak berlaku/i, 'KEP-220 explicitly obsolete');
assert.match(tm4Card.back, /dibebankan penuh/i, 'current 3M treatment taught');

assert.equal(bank.length, 7, 'one UTS case per TM');
assert.deepEqual(bank.map((item) => Number(/^TM (\d+):/.exec(item.scope)?.[1])), tms);
assertNoStale('bank UTS', bank);
for (const [index, item] of bank.entries()) {
  const tm = tms[index], label = 'bank TM' + tm;
  assert.ok(item.question.startsWith('Studi Kasus ' + tm + ': '), label + ': numbered case');
  assert.ok(item.scope.startsWith('TM ' + tm + ': '), label + ': TM scope');
  assert.ok(['calculation', 'case'].includes(item.type), label + ': case type');
  for (const field of ['data', 'instructions', 'outputFormat', 'rubric'])
    assert.ok(Array.isArray(item[field]) && item[field].length >= 2, label + ': ' + field + ' complete');
  for (const [field, value] of Object.entries(item)) {
    if (field === 'estimatedTime') continue;
    for (const entry of Array.isArray(value) ? value : [value]) assertPlain(label + ' ' + field, entry);
  }
  assert.ok(item.answerGuide.length > 300, label + ': complete guide');
  assertNumbersTraced(label, tm, [item.context, item.answerGuide, ...item.data, ...item.instructions]);
}
for (const [tm, pattern] of [
  [1, /PTKP|zakat/i], [2, /FIFO|Average/i], [3, /CUP|dividen terselubung/i],
  [4, /saldo menurun|rekonsiliasi/i], [5, /PPh 22|PPh 23/i],
  [6, /PHTB|PPh final/i], [7, /31E|PPh 24|PPh 25|PPh Pasal 29/i],
]) assert.match(JSON.stringify(bank[tm - 1]), pattern, 'bank TM' + tm + ': canonical theme');

console.log('PASS: PJK301 Pra-UTS alignment — 35 quiz, 42 flashcards, 7 cases; numeric, rendering, SRS, and protected UAS checks.');
