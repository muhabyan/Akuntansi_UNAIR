// AKK202 post-UTS audit: source provenance, teaching safety, arithmetic, and unchanged UTS data.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { build } from 'esbuild';
import katex from 'katex';

const fixture = JSON.parse(readFileSync('scripts/fixtures/akk202-post-uts-sources.json', 'utf8'));
const bundle = await build({
  stdin: {
    contents: [
      "export { AKK202_READINGS } from './src/data/akm2/akm2Data.ts';",
      "export { AKK202_QUIZ_UTS, AKK202_QUIZ_UAS } from './src/data/quizzes/akk202.ts';",
      "export { AKK202_FC } from './src/data/flashcards/akk202.ts';",
      "export { AKK202_BANK_UTS, AKK202_BANK_UAS } from './src/data/banksoal/akk202.ts';",
      "export { SEMESTERS } from './src/data/courseData.ts';",
      "export { RELEASES } from './src/data/releaseNotes.ts';",
    ].join('\n'), resolveDir: process.cwd(), loader: 'ts',
  }, bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const sha = value => createHash('sha256').update(value).digest('hex');
const readings = mod.AKK202_READINGS;
const cards = mod.AKK202_FC.filter(c => c.tm >= 9);
const quizzes = mod.AKK202_QUIZ_UAS;
const banks = mod.AKK202_BANK_UAS;
const tms = [9, 10, 11, 12, 13, 14, 15];
const flat = blocks => blocks.flatMap(block => [block, ...(block.blocks ? flat(block.blocks) : [])]);
const strings = value => typeof value === 'string' ? [value] : Array.isArray(value) ? value.flatMap(strings) : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : [];
const money = text => text ? Number(text.replace(/[^\d.,-]/g, '').replace(/\./g, '').replace(',', '.')) : 0;
const pages = /(?:halaman PDF|PDF pages|PDF) (\d+)(?:-(\d+))?/g;
const checkText = value => {
  for (const text of strings(value)) {
    assert.ok(!text.includes('\u2014'), `Em dash in ${text.slice(0, 70)}`);
    assert.ok(!/bukan[\s\S]*melainkan|tidak hanya[\s\S]*tetapi juga/i.test(text), 'Forbidden contrasting phrase');
    assert.ok(!/PSAK|ISAK/.test(text), 'Post-UTS facts use the assigned Kieso source, not unverified local-standard mappings');
    for (const match of text.matchAll(pages)) {
      assert.ok(+match[1] > 0 && +(match[2] || match[1]) <= 2484, `Invalid PDF page: ${match[0]}`);
      assert.ok(!match[2] || +match[2] >= +match[1], 'Reversed page range');
    }
  }
};
const hasSource = text => /Kieso IFRS 5e, (?:halaman PDF|PDF pages) \d+/.test(text);
const validateQuiz = item => {
  checkText(item);
  assert.ok(hasSource(item.q) && hasSource(item.explanation), 'Quiz source must be visible in prompt and explanation');
  assert.match(item.q, /\b(?:What|Which|How)\b/i, 'English question asks for a definite accounting decision');
  assert.ok(!/\b(?:Hitung|Berapa|Bagaimana|Jelaskan|menghasilkan|dicatat)\b/i.test(item.q), 'Quiz stem is English');
  assert.equal(item.options.length, 4);
  assert.equal(new Set(item.options).size, 4);
  assert.ok(Number.isInteger(item.answer) && item.answer >= 0 && item.answer < 4);
  assert.equal(new Set(item.options.map(s => s.trim().split(/\s+/).length)).size, 1, 'Distractors must have equal word counts');
  assert.equal(item.topic, readings[item.tm].title, 'Quiz topic follows the reading');
};
const validateJournal = block => {
  const debit = block.lines.reduce((n, line) => n + money(line.debit), 0);
  const credit = block.lines.reduce((n, line) => n + money(line.credit), 0);
  assert.ok(debit > 0 && Math.abs(debit - credit) < 0.001, `Unbalanced journal: ${block.title}`);
  for (const line of block.lines) {
    assert.equal(Boolean(line.isCredit), Boolean(line.credit));
    assert.ok(Boolean(line.debit) !== Boolean(line.credit), 'One side per journal line');
  }
};

// Preserve TM1-7 readings, existing UTS review dependencies, and all UTS practice objects.
assert.equal(sha(JSON.stringify(Object.fromEntries(Object.entries(readings).filter(([tm]) => +tm <= 7)))), fixture.baselineUts.readings);
assert.equal(sha(JSON.stringify(mod.AKK202_QUIZ_UTS)), fixture.baselineUts.quiz);
assert.equal(sha(JSON.stringify(mod.AKK202_FC.filter(c => c.tm <= 7))), fixture.baselineUts.cards);
assert.equal(sha(JSON.stringify(mod.AKK202_BANK_UTS)), fixture.baselineUts.bank);
assert.equal(readings[8], undefined);
assert.deepEqual(Object.keys(readings).map(Number), [1, 2, 3, 4, 5, 6, 7, ...tms]);
assert.equal(quizzes.length, 60); assert.equal(cards.length, 42); assert.equal(banks.length, 14);
let journalCount = 0, formulaCount = 0;
for (const source of fixture.modules) {
  const { tm, chapter, title } = source;
  const reading = readings[tm];
  assert.equal(reading.tm, tm); assert.equal(reading.title, title);
  assert.ok(reading.ref.includes(`Ch. ${chapter}`), `TM${tm}: chapter number`);
  checkText(reading);
  const headings = reading.blocks.filter(b => b.kind === 'h2');
  assert.equal(headings.length, 8);
  headings.forEach((h, i) => assert.ok(h.text.startsWith(`${i + 1}. `)));
  assert.equal(headings.at(-1).text, '8. Exam Toolkit');
  for (const block of flat(reading.blocks)) {
    if (block.kind === 'table') {
      assert.ok(block.title?.trim()); assert.ok(hasSource(block.caption));
      block.rows.forEach(row => assert.equal(row.length, block.headers.length));
    }
    if (block.kind === 'figure') {
      assert.ok(block.svg?.includes('<svg') && block.svg.includes('<text'), 'Figure has content on the existing SVG renderer');
      assert.ok(block.overview?.cards.length >= 3 && block.transcript?.length >= 3, 'Readable figure on mobile and desktop');
    }
    if (block.kind === 'journal') { validateJournal(block); journalCount++; }
    if (block.kind === 'formula') {
      assert.ok(block.text.includes('\\') && !block.text.includes('$'), 'Formula uses math renderer');
      katex.renderToString(block.text, { throwOnError: true, strict: 'error' }); formulaCount++;
      assert.ok(hasSource(block.note));
    }
    if (block.kind === 'solution-reveal') assert.ok(hasSource(block.prompt), 'Practice source visible before opening solution');
  }
  const qs = quizzes.filter(q => q.tm === tm); assert.equal(qs.length, fixture.practiceBlueprint.countsByTm[tm]);
  qs.forEach(validateQuiz);
  assert.equal(new Set(qs.map(q => q.answer)).size, 4, 'Keys cover all four options');
  const cs = cards.filter(c => c.tm === tm); assert.equal(cs.length, 6);
  for (const card of cs) {
    checkText(card); assert.ok(hasSource(card.front) && hasSource(card.back));
    assert.ok(card.back.length <= 281, 'Card answer and reference must fit the verified face length');
    assert.match(card.id, new RegExp(`^akk202-v3-tm${String(tm).padStart(2, '0')}-0[1-6]$`));
    assert.equal(card.phase, 'pra-uas'); assert.equal(card.topic, title);
  }
  const bs = banks.filter(b => b.scope.startsWith(`TM ${tm}:`)); assert.equal(bs.length, 2);
  checkText(bs);
  for (const item of bs) {
    assert.ok(hasSource(item.question) && hasSource(item.answerGuide));
    assert.equal(item.instructions.length, 5);
    assert.match(item.question, /^Case \d+[AB]:/);
    assert.ok(item.instructions.every(s => /^(Calculate|Prepare|Explain|Correct|Quantify|Replace|State|Allocate|Reconcile)/.test(s)), 'Case instructions are English and require application');
    assert.equal(item.rubric.length, 4);
    assert.equal(item.rubric.reduce((n, s) => n + Number(s.match(/^\d+/)[0]), 0), 100, 'Case rubric totals 100');
    assert.ok(item.context.includes('perkiraan') && item.context.includes('RPP'), 'Priorities are an inference from the assigned syllabus');
    assert.ok(strings(item).every(s => !/\n|\*\*|\\[$*.]|`/.test(s)), 'EssayBank fields render as plain text');
  }
}
assert.equal(new Set(cards.map(c => c.id)).size, cards.length);
assert.equal(new Set(quizzes.map(q => q.q)).size, quizzes.length);
const checkKeys = data => tms.forEach(tm => {
  const actual = data.filter(q => q.tm === tm).map(q => q.options[q.answer]);
  const expected = fixture.practiceBlueprint.quizAudit.filter(q => q.tm === tm).map(q => q.correct);
  assert.deepEqual(actual, expected, `TM${tm}: reviewed source-based keys`);
});
assert.equal(fixture.practiceBlueprint.quizAudit.length, 60);
assert.equal(fixture.practiceBlueprint.quizAudit.filter(q => q.skill === 'calculation').length, 33);
assert.equal(fixture.practiceBlueprint.quizAudit.filter(q => q.skill === 'journal').length, 8);
assert.equal(quizzes.filter(q => q.difficulty === 'advanced').length, 17);
for (const position of [0, 1, 2, 3]) assert.equal(quizzes.filter(q => q.answer === position).length, 15, 'Answer positions balanced');
checkKeys(quizzes);

// Independent recalculation of the errors this change addresses and the worked examples.
const rounded = (n, digits = 0) => Math.round(n * 10 ** digits) / 10 ** digits;
assert.equal(rounded(92278 * .10 / 2), 4614);
assert.equal(108530 - (4000 - rounded(108530 * .06 / 2)), 107786);
assert.equal(rounded(7721.8 * .09, 2), 694.96);
assert.equal(101000 - 94925, 6075);
assert.equal(100000 * .10 * 1, 10000, 'Vine uses par, not fair value');
assert.equal(2000000 - 1805626, 194374);
assert.equal(10200000 - 9707852, 492148);
assert.equal(1894464 + 194374 - 500000, 1588838);
assert.equal(90000 * 3 / 12 + 120000 * 3 / 12 + 81000 * 4 / 12 + 141000 * 2 / 12, 103000);
assert.equal(rounded((210000 + 62000 * .6 + 80000 * 9 / 12 * .6) / (100000 + 20000 + 32000 * 9 / 12), 2), 1.97);
assert.equal(1500 - 1500 * 30 / 50, 600);
assert.ok((210000 + 60000 * .6) / 110000 > 210000 / 100000, 'Martin is antidilutive');
assert.equal(106732 - 105000, 1732);
assert.equal(200000 - rounded(200000 * .68301 + 16000 * 3.16986), 12680);
assert.equal(200000 + .25 * 80000 - .25 * 20000, 215000);
for (const [tm, needles] of [[11, ['par value', 'nilai nominal']], [12, ['with-and-without', '€492.148']], [14, ['ribuan yen', '12-month ECL', 'Net carrying amount']], [15, ['tidak direklasifikasi ke laba rugi', 'variable returns']]]) {
  for (const needle of needles) assert.ok(JSON.stringify(readings[tm]).includes(needle), `TM${tm}: ${needle}`);
}
const course = mod.SEMESTERS.flatMap(s => s.groups.flatMap(g => g.courses)).find(c => c.code === 'AKK202');
assert.equal(course.flashcardCount, mod.AKK202_FC.length);
assert.deepEqual(course.materiTM8_14.map(m => m.tm), tms);
course.materiTM8_14.forEach(m => assert.equal(m.title, readings[m.tm].title));
assert.equal(mod.RELEASES[0].version, 'v1.3.3');
assert.equal(mod.RELEASES[1].version, 'v1.3.2');
assert.equal(mod.RELEASES[2].version, 'v1.3.1');

// Optional local provenance check: portable CI needs no access to the private source folder.
if (process.env.AKK202_VERIFY_LOCAL_SOURCES === '1') {
  for (const source of fixture.sources) assert.equal(sha(readFileSync(source.path)), source.sha256, `${source.name}: source fingerprint`);
}

// Recalculate new numerical keys from source facts; compare with the selected answer.
const euro = n => '€' + rounded(n).toLocaleString('en-US');
const gbp = n => '£' + rounded(n).toLocaleString('en-US');
const yen = n => '¥' + rounded(n).toLocaleString('en-US');
const usd = n => '$' + rounded(n, 2).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const key = (tm, ordinal) => { const q = quizzes.filter(q => q.tm === tm)[ordinal - 1]; return q.options[q.answer]; };
assert.equal(key(9, 7), euro(92892 + rounded(92892 * .05) - 4000));
assert.equal(key(9, 9), euro(100000 * .74409 + 4000 * 8.53020));
assert.equal(key(10, 6), usd((7721.8 + 694.96) * .09));
assert.equal(key(10, 7), euro(16000000 - 320000 * 10));
assert.equal(key(11, 6), gbp(50000 - 100000 * .10));
assert.equal(key(12, 6), euro(1894464 + 194374 - 500000));
assert.equal(key(12, 7), yen(22000000 * 2000 / 10000));
assert.equal(key(12, 8), yen(2000 * 6000 + 4400000 - 2000 * 100));
assert.equal(key(13, 6), '£' + (210000 / 100000).toFixed(2));
assert.equal(key(13, 7), gbp(80000 * 9 / 12 * (1 - .4)));
assert.equal(key(13, 8), (32000 * 9 / 12).toLocaleString('en-US') + ' shares');
assert.equal(key(13, 9), (1500 * 30 / 50).toLocaleString('en-US') + ' shares');
assert.equal(key(14, 7), gbp(4324 + 4297));
assert.equal(key(15, 6), euro(24000 - 20750));
assert.equal(1190000, 100000 + 900000 + 300000 - 10000 * 11);
assert.equal(284000, 103600 + 180400);
assert.equal(4537, (200000 - 180400 - (103600 - 93537)) - (200000 - 195000));
assert.equal(16200000, 2000 * 6000 + .2 * 22000000 - 2000 * 100);
assert.equal(17600000, .8 * 22000000);
assert.ok(36000 / 24000 < 37200 / 20000, 'Second Mayfield series has lower incremental EPS');
assert.ok(37200 / 20000 < 246000 / 124000, 'First Mayfield series remains dilutive after including the second');
assert.equal(1750, (24000 - 20750) - (24000 - 22500));
for (const [tm, terms] of [[9, ['93.537', '1.333']], [10, ['9.174,27', 'Bonds Payable']], [11, ['1.190.000', 'Share Premium - Treasury']], [12, ['16.200.000', '17.600.000']], [13, ['1,86', '1,50', '3,60']], [14, ['9.537', '4.537']], [15, ['1.750', 'terlalu tinggi £5.000']]]) {
  const guides = banks.filter(b => b.scope.startsWith('TM ' + tm + ':')).map(b => b.answerGuide).join(' ');
  terms.forEach(term => assert.ok(guides.includes(term), 'Bank worked answer includes independently recalculated result: ' + term));
}

let mutationCount = 0;
const reject = fn => { assert.throws(fn); mutationCount++; };
const q1 = structuredClone(quizzes[0]); q1.options[0] += ' tambahan'; reject(() => validateQuiz(q1));
const q2 = structuredClone(quizzes[0]); q2.explanation = 'Tanpa rujukan'; reject(() => validateQuiz(q2));
const q3 = structuredClone(quizzes[0]); q3.q += '\u2014'; reject(() => validateQuiz(q3));
const q4 = structuredClone(quizzes[0]); q4.explanation += ' bukan salah melainkan benar'; reject(() => validateQuiz(q4));
const q5 = structuredClone(quizzes); q5[0].answer = (q5[0].answer + 1) % 4; reject(() => checkKeys(q5));
const q6 = structuredClone(quizzes[0]); q6.q = 'Hitung bunga? Source: Kieso IFRS 5e, PDF pages 1112.'; reject(() => validateQuiz(q6));
const j = structuredClone(flat(readings[9].blocks).find(b => b.kind === 'journal')); j.lines[0].debit = '€1'; reject(() => validateJournal(j));
console.log(`AKK202 post-UTS PASS: seven readings; ${journalCount} balanced journals; ${formulaCount} KaTeX formulas; 60 English quizzes, 42 cards, 14 English cases; unchanged UTS; ${mutationCount} rejected mutations.`);
