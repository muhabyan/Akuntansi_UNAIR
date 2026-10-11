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
const pages = /(?:halaman PDF|PDF) (\d+)(?:-(\d+))?/g;
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
const hasSource = text => /Kieso IFRS 5e, halaman PDF \d+/.test(text);
const validateQuiz = item => {
  checkText(item);
  assert.ok(hasSource(item.q) && hasSource(item.explanation), 'Quiz source must be visible in prompt and explanation');
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
assert.equal(quizzes.length, 35); assert.equal(cards.length, 42); assert.equal(banks.length, 7);
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
  const qs = quizzes.filter(q => q.tm === tm); assert.equal(qs.length, 5);
  qs.forEach(validateQuiz);
  assert.equal(new Set(qs.map(q => q.answer)).size, 4, 'Keys cover all four options');
  const cs = cards.filter(c => c.tm === tm); assert.equal(cs.length, 6);
  for (const card of cs) {
    checkText(card); assert.ok(hasSource(card.front) && hasSource(card.back));
    assert.ok(card.back.length <= 281, 'Card answer and reference must fit the verified face length');
    assert.match(card.id, new RegExp(`^akk202-v3-tm${String(tm).padStart(2, '0')}-0[1-6]$`));
    assert.equal(card.phase, 'pra-uas'); assert.equal(card.topic, title);
  }
  const bs = banks.filter(b => b.scope.startsWith(`TM ${tm}:`)); assert.equal(bs.length, 1);
  checkText(bs);
  for (const item of bs) {
    assert.ok(hasSource(item.question) && hasSource(item.answerGuide));
    assert.ok(item.instructions.length >= 4);
    assert.ok(strings(item).every(s => !/\n|\*\*|\\[$*.]|`/.test(s)), 'EssayBank fields render as plain text');
  }
}
assert.equal(new Set(cards.map(c => c.id)).size, cards.length);
assert.equal(new Set(quizzes.map(q => q.q)).size, quizzes.length);
const expectedKeys = {
  9: ['€4.614', 'Sepuluh periode; bunga 5%', '€107.786', '€1.333', 'Mengurangi nilai awal; yield meningkat'],
  10: ['USD694,96', '€6.075', 'Rugi aset €5.000.000; laba utang €4.000.000', 'Laba nilai wajar melalui OCI', 'Suku bunga efektif historis'],
  11: ['£10.000', 'USD2.000', 'Diungkapkan tanpa pengakuan liabilitas', 'HKD750.000', 'Pendapatan sistematis sepanjang biaya terkait'],
  12: ['€194.374', '€492.148', 'Tidak mengakui laba rugi konversi', '¥11.000.000', 'Beban tetap; agio dipindahkan'],
  13: ['103.000 saham', '£1,97', '600 saham', 'Dikeluarkan karena efeknya antidilutif', 'Dividen preferen tahun berjalan'],
  14: ['£1.732', 'Lifetime ECL; nilai tercatat bruto', '€4.614', 'Model bisnis dan arus kas', '¥12.680'],
  15: ['£215.000', 'Kas bertambah; investasi berkurang', 'Tetap dalam ekuitas tanpa recycling', 'Uji dengan bukti hubungan aktual', 'Kekuasaan dan pengaruh atas imbalan'],
};
const checkKeys = data => tms.forEach(tm => assert.deepEqual(data.filter(q => q.tm === tm).map(q => q.options[q.answer]), expectedKeys[tm], `TM${tm}: audited keys`));
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
assert.equal(mod.RELEASES[0].version, 'v1.3.2');
assert.equal(mod.RELEASES[1].version, 'v1.3.1');

// Optional local provenance check: portable CI needs no access to the private source folder.
if (process.env.AKK202_VERIFY_LOCAL_SOURCES === '1') {
  for (const source of fixture.sources) assert.equal(sha(readFileSync(source.path)), source.sha256, `${source.name}: source fingerprint`);
}
let mutationCount = 0;
const reject = fn => { assert.throws(fn); mutationCount++; };
const q1 = structuredClone(quizzes[0]); q1.options[0] += ' tambahan'; reject(() => validateQuiz(q1));
const q2 = structuredClone(quizzes[0]); q2.explanation = 'Tanpa rujukan'; reject(() => validateQuiz(q2));
const q3 = structuredClone(quizzes[0]); q3.q += '\u2014'; reject(() => validateQuiz(q3));
const q4 = structuredClone(quizzes[0]); q4.explanation += ' bukan salah melainkan benar'; reject(() => validateQuiz(q4));
const q5 = structuredClone(quizzes); q5[0].answer = (q5[0].answer + 1) % 4; reject(() => checkKeys(q5));
const j = structuredClone(flat(readings[9].blocks).find(b => b.kind === 'journal')); j.lines[0].debit = '€1'; reject(() => validateJournal(j));
console.log(`AKK202 post-UTS PASS: seven readings; ${journalCount} balanced journals; ${formulaCount} KaTeX formulas; 35 quizzes, 42 cards, 7 cases; unchanged UTS; ${mutationCount} rejected mutations.`);
