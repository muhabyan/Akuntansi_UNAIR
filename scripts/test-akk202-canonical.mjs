// Canonical content guard for AKK202 (AKM II) TM02–TM07, implemented from the verified content handoffs.
// Checks structure, render safety, balanced journals, and the key numbers of every worked case.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { build } from 'esbuild';
import katex from 'katex';

// TM01 is canonical and frozen: its source must stay byte-identical (line endings normalized).
const TM1_SHA256 = 'cf859a9796fb84377e1f0188164a783cfc5f5a2b812dafd965bc4a336853ed35';
const tm1Source = readFileSync('src/data/akm2/modules/tm1.ts', 'utf8').replace(/\r\n/g, '\n');
assert.equal(createHash('sha256').update(tm1Source).digest('hex'), TM1_SHA256, 'AKK202 TM1 is frozen and must not change');

const bundle = await build({
  entryPoints: ['src/data/akm2/akm2Data.ts'], bundle: true, write: false,
  format: 'esm', platform: 'node', logLevel: 'silent',
});
const { AKK202_READINGS: readings } = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
);

const flatten = (blocks) => blocks.flatMap((block) => [block, ...('blocks' in block ? flatten(block.blocks) : [])]);
// id-ID amounts with a currency prefix: "€14.833", "R$11.000", "Rp464.285.714", "¥1.100".
const money = (value) => {
  if (!value) return 0;
  const digits = value.replace(/[^\d.,]/g, '').replace(/\./g, '').replace(',', '.');
  assert.ok(digits.length > 0, `unparseable amount ${value}`);
  return Number(digits);
};

// Strings passed through renderText (markdown + math).
const markdownStrings = (reading) => {
  const values = [reading.intro];
  for (const block of flatten(reading.blocks)) {
    switch (block.kind) {
      case 'p': case 'callout': values.push(block.text); break;
      case 'ul': case 'ol': values.push(...block.items); break;
      case 'table': values.push(...block.rows.flat(), block.caption); break;
      case 'journal': values.push(block.caption); break;
      case 'formula': values.push(block.note); break;
      case 'solution-reveal': values.push(block.prompt); break;
      default:
    }
  }
  return values.filter((value) => typeof value === 'string');
};
// Strings rendered as plain text: an escape backslash would show up literally.
const plainStrings = (reading) => {
  const values = [reading.title, reading.ref, ...reading.objectives];
  for (const block of flatten(reading.blocks)) {
    if (['example', 'solution-reveal', 'callout'].includes(block.kind) && block.title) values.push(block.title);
    if (block.kind === 'h2' || block.kind === 'h3') values.push(block.text);
    if (block.kind === 'table') values.push(...block.headers);
    if (block.kind === 'journal') block.lines.forEach((line) => values.push(line.account, line.debit ?? '', line.credit ?? ''));
  }
  return values;
};
const stripCode = (text) => text.replace(/`[^`]*`/g, '');
const unescapedDollars = (text) => (stripCode(text).match(/(?<!\\)\$/g) ?? []).length;
// Two or more unescaped single "*" in one string can pair into <em>; write "\\*" instead.
const loneStars = (text) => [...stripCode(text).matchAll(/(?<![\\*])\*(?!\*)/g)];
const hasNotationStarPair = (text) => loneStars(text).length >= 2;

const forbidden = [
  /\.content-inbox|canonical_spec|qa_manifest|implementation_brief/,
  /\bPSAK\b/, // SAK columns dropped by decision; TM1 keeps its own references.
  /\b(IAS|IFRS) \d+\.\d/, // standard paragraph numbers are replaced by Kieso pages
  /Amortization Expense—Land Rights|Accumulated Amortization—Land Rights|Rp20\.000\.000/, // no land-rights journal
  /Ilustrasi Nokia|Nokia AOCI Transfer/, // the TM3 Nokia journal is left out
  /TANGGUHKAN Keuntungan|Akui SEMUA Kerugian/, // superseded exchange rule
];

const journalsOf = (reading) => flatten(reading.blocks).filter((block) => block.kind === 'journal');
const findJournal = (reading, predicate, label) => {
  const journal = journalsOf(reading).find(predicate);
  assert.ok(journal, `${label}: journal not found`);
  return journal;
};
const lineAmount = (journal, account, side) => {
  const line = journal.lines.find((item) => item.account === account && item[side]);
  assert.ok(line, `${journal.caption}: missing ${side} line ${account}`);
  return money(line[side]);
};

// KaTeX font-metric warnings for currency glyphs do not change the rendered output.
console.warn = () => {};

let journals = 0;
let formulas = 0;
const checkReading = (tm, required) => {
  const reading = readings[tm];
  assert.equal(reading.tm, tm);
  const text = JSON.stringify(reading);
  for (const term of required) assert.ok(text.includes(term), `TM${tm} missing ${term}`);
  for (const pattern of forbidden) assert.ok(!pattern.test(text), `TM${tm} contains forbidden ${pattern}`);

  const headings = reading.blocks.filter((block) => block.kind === 'h2');
  assert.ok(headings.length >= 8, `TM${tm}: numbered sections`);
  headings.forEach((heading, index) => assert.ok(heading.text.startsWith(`${index + 1}. `), `TM${tm}: h2 "${heading.text}"`));
  assert.equal(headings.at(-1).text, `${headings.length}. Exam Toolkit`);
  assert.equal(headings[0].text, '1. Orientation / Quick Map');

  for (const value of markdownStrings(reading)) {
    assert.ok(unescapedDollars(value) === 0, `TM${tm}: escape "$" in markdown text: ${value.slice(0, 80)}`);
    assert.ok(!hasNotationStarPair(value), `TM${tm}: escape "*" notation: ${value.slice(0, 80)}`);
    assert.ok(!/^\s*(>|#|\d+\.\s|[-+]\s)/.test(value), `TM${tm}: leading markdown block/list marker: ${value.slice(0, 80)}`);
  }
  for (const value of plainStrings(reading)) {
    assert.ok(!value.includes('\\'), `TM${tm}: backslash in plain-text field: ${value.slice(0, 80)}`);
  }

  for (const block of flatten(reading.blocks)) {
    if (block.kind === 'table') {
      block.rows.forEach((row) => assert.equal(row.length, block.headers.length, `TM${tm}: table shape ${block.headers.join('|')}`));
    }
    if (block.kind === 'journal') {
      const debit = block.lines.reduce((sum, line) => sum + money(line.debit), 0);
      const credit = block.lines.reduce((sum, line) => sum + money(line.credit), 0);
      assert.ok(debit > 0, `TM${tm}: empty journal ${block.caption}`);
      assert.ok(Math.abs(debit - credit) < 1e-6, `TM${tm}: unbalanced journal ${block.caption} (${debit} vs ${credit})`);
      block.lines.forEach((line) => assert.equal(Boolean(line.isCredit), Boolean(line.credit), `TM${tm}: isCredit flag ${line.account}`));
      journals++;
    }
    if (block.kind === 'formula') {
      assert.ok(block.text.includes('\\'), `TM${tm}: formula must use the math path`);
      assert.ok(!block.text.includes('$'), `TM${tm}: formula text must not contain "$"`);
      // Currency glyphs (€, £, ¥) inside \text{} only raise KaTeX's unknownSymbol warning, as in TM1; anything else fails.
      katex.renderToString(block.text, {
        throwOnError: true, displayMode: true, strict: (code) => (code === 'unknownSymbol' ? 'ignore' : 'error'),
      });
      formulas++;
    }
  }
  return reading;
};

// ---------------------------------------------------------------- TM02
const tm2 = checkReading(2, [
  'Illustration 9.14', 'no gain or loss is recognized', 'substansi komersial', 'IAS 36', 'IAS 37',
  'substitution approach', 'Interpretasi', 'sisa umur gedung induk', 'Tonkawa Group', 'Troopers Medical Labs',
  '[IAS 16 paragraph 22]', 'period loss', 'WorldCom', 'Other income and expense', 'E9.19', 'CA9.1', 'CA9.2',
]);
{
  const instinct = findJournal(tm2, (j) => j.lines.some((l) => l.account === 'Equipment (Plumbing System — New)'), 'Instinct');
  assert.equal(lineAmount(instinct, 'Loss on Disposal of Equipment', 'debit'), 14000);
  assert.equal(lineAmount(instinct, 'Cash', 'credit'), 124000);

  const hanoi = findJournal(tm2, (j) => j.lines.some((l) => l.account === 'Accumulated Depreciation—Tractor'), 'Hanoi');
  assert.equal(lineAmount(hanoi, 'Depreciation Expense', 'debit'), 6000 / 2 + 10000 / 5 + 34000 / 10);

  const barret = findJournal(tm2, (j) => j.lines.some((l) => l.account === 'Gain on Disposal of Machinery'), 'Barret');
  assert.equal(1200 * 9 + 1200 * 6 / 12, 11400);
  assert.equal(lineAmount(barret, 'Accumulated Depreciation—Machinery', 'debit'), 11400);
  assert.equal(lineAmount(barret, 'Gain on Disposal of Machinery', 'credit'), 7000 - (18000 - 11400));

  const camelLoss = findJournal(tm2, (j) => j.lines.some((l) => l.account === 'Loss from Tornado (Casualty Loss)'), 'Camel stage 1');
  assert.equal(lineAmount(camelLoss, 'Loss from Tornado (Casualty Loss)', 'debit'), 6000000 - 2500000);
  const camelGain = findJournal(tm2, (j) => j.lines.some((l) => l.account === 'Gain from Insurance Settlement'), 'Camel stage 2');
  assert.equal(camelGain.lines.length, 2, 'Camel stage 2 is separate from stage 1');

  const infoProcessing = findJournal(tm2, (j) => j.lines.some((l) => l.account === 'Equipment (Machine — New)'), 'Information Processing');
  assert.equal(lineAmount(infoProcessing, 'Equipment (Machine — New)', 'debit'), 6000 + 7000);
  assert.equal(lineAmount(infoProcessing, 'Loss on Disposal of Equipment', 'debit'), 2000);

  const interstate = journalsOf(tm2).filter((j) => j.lines.some((l) => l.account === 'Trucks (Semi-Truck — New)'));
  assert.equal(interstate.length, 2);
  const [withSubstance, lacksSubstance] = interstate;
  assert.equal(lineAmount(withSubstance, 'Trucks (Semi-Truck — New)', 'debit'), 60000);
  assert.equal(lineAmount(withSubstance, 'Gain on Disposal of Trucks', 'credit'), 49000 - 42000);
  assert.equal(lineAmount(lacksSubstance, 'Trucks (Semi-Truck — New)', 'debit'), 42000 + 11000);
  assert.ok(lacksSubstance.lines.every((l) => !/Gain|Loss/.test(l.account)), 'Interstate lacking substance: no gain/loss line');

  const exchange = (entity) => journalsOf(tm2).filter((j) => j.caption?.startsWith(entity));
  const [santanaA, santanaB] = exchange('Santana SA');
  const [delawareA, delawareB] = exchange('Delaware Co.');
  assert.equal(lineAmount(santanaA, 'Equipment (New)', 'debit'), 9000 + 2000);
  assert.equal(lineAmount(delawareA, 'Equipment (New)', 'debit'), 18000 - 2000);
  for (const journal of [santanaA, delawareA]) {
    assert.ok(journal.lines.every((l) => !/Gain|Loss/.test(l.account)), `${journal.caption}: no gain/loss without commercial substance`);
  }
  assert.equal(lineAmount(santanaB, 'Gain on Disposal of Equipment', 'credit'), 13500 - 9000);
  assert.equal(lineAmount(delawareB, 'Equipment (New)', 'debit'), 15500 - 2000);
  assert.equal(lineAmount(delawareB, 'Loss on Disposal of Equipment', 'debit'), 18000 - 15500);
  assert.ok(!/28\.000.{0,40}19\.000.{0,40}7\.000.{0,40}7\.000/.test(JSON.stringify(tm2)), 'TM2 must not use the invented Test 4 exchange numbers');

  assert.equal(714000 - 441000, 273000);
  assert.ok(JSON.stringify(tm2).includes('€273.000') && JSON.stringify(tm2).includes('€441.000'));
}

// ---------------------------------------------------------------- TM03
const tm3 = checkReading(3, [
  'Cost allocation, not valuation', 'Accumulated Depletion', 'Interpretasi — akun kredit deplesi',
  'Interpretasi — metode eliminasi', 'Land is not depreciated because its utility usually does not diminish over time.',
  'TM1, bagian 11', 'ceiling', 'US GAAP', 'straddling', 'P10.2', 'BE10.10', 'E10.18', 'E10.27', 'E10.22', 'E10.28',
  'IAS 37', 'IFRS 6', 'prospektif', 'BE10.2–BE10.4',
]);
{
  const text = JSON.stringify(tm3);
  assert.ok(!/SL-AKK-06|tidak tersedia dalam source library/.test(text), 'TM3 refers to TM1 for land rights instead of the scope-limitation callout');
  // Charleston P10.2: cost 89.000, residual 5.000, 7 years, 7 months in 2025.
  const base = 89000 - 5000;
  const syd1 = base * 7 / 28;
  const syd2 = base * 6 / 28;
  const ddb2025 = 89000 * 2 / 7 * 7 / 12;
  assert.equal(base / 7 * 7 / 12, 7000);
  assert.equal(syd1 * 7 / 12, 12250);
  assert.equal(syd1 * 5 / 12 + syd2 * 7 / 12, 19250);
  assert.equal(Math.round(ddb2025), 14833);
  assert.equal(Math.round((89000 - ddb2025) * 2 / 7), 21190);
  const depreciation = (amount) => journalsOf(tm3).find((j) => j.lines.some((l) => l.account === 'Depreciation Expense' && money(l.debit) === amount));
  for (const amount of [7000, 12250, 14833]) assert.ok(depreciation(amount), `Charleston journal ${amount}`);
  for (const phrase of ['€19.250', '€21.190', '€14.833,33', '€74.166,67']) assert.ok(text.includes(phrase), `Charleston ${phrase}`);

  // Lockard BE10.2–BE10.4 is the class quiz; Charleston P10.2 is practice.
  const titles = flatten(tm3.blocks).filter((b) => b.kind === 'solution-reveal').map((b) => b.title);
  assert.ok(titles.some((t) => t.startsWith('Kuis Kelas — Lockard SE') && t.includes('BE10.2–BE10.4')), 'Lockard labeled as class quiz');
  assert.ok(titles.some((t) => t.startsWith('Latihan — Charleston, SA')) && !titles.some((t) => /Kuis Kelas — Charleston/.test(t)), 'Charleston not labeled as class quiz');
  const lockard = flatten(tm3.blocks).find((b) => b.kind === 'solution-reveal' && b.title.includes('Lockard SE'));
  const lockardBase = 80000 - 8000;
  const lockardExpected = [
    lockardBase / 8, lockardBase / 8 * 4 / 12,
    lockardBase * 8 / 36, lockardBase * 8 / 36 * 9 / 12,
    80000 * 2 / 8, 80000 * 2 / 8 * 3 / 12,
  ];
  assert.deepEqual(lockardExpected, [9000, 3000, 16000, 12000, 20000, 5000]);
  const lockardJournals = journalsOf(lockard);
  assert.deepEqual(lockardJournals.map((j) => lineAmount(j, 'Depreciation Expense', 'debit')), lockardExpected, 'Lockard journals in order');
  lockardJournals.forEach((j) => assert.ok(j.lines.some((l) => l.account === 'Accumulated Depreciation—Machinery' && l.credit), `Lockard credit account ${j.caption}`));

  // Everly BE10.10 and Henrik E10.22.
  assert.equal(400000 + 100000 + 80000 - 160000, 420000);
  assert.equal(420000 / 4000, 105);
  const everly = findJournal(tm3, (j) => j.lines.some((l) => l.account === 'Inventory (Coal)'), 'Everly');
  assert.equal(lineAmount(everly, 'Accumulated Depletion—Coal Mine', 'credit'), 700 * 105);
  const henrikRate = (1250000 + 200000 + 90000 - 100000) / 60000;
  assert.equal(henrikRate, 24);
  const henrik = findJournal(tm3, (j) => j.lines.some((l) => l.account === 'Cost of Goods Sold'), 'Henrik');
  assert.equal(lineAmount(henrik, 'Cost of Goods Sold', 'debit'), 24000 * henrikRate);
  assert.ok(text.includes('€144.000') && text.includes('€720.000'));

  // Pujols E10.18: impairment, new depreciation, ceiling-limited recovery.
  const recoverable2025 = Math.max(7000000, 4400000);
  const loss = 9000000 - 1000000 - recoverable2025;
  const dep2026 = recoverable2025 / 4;
  const ceiling = 8000000 - 8000000 / 4;
  const recovery = Math.min(6000000, ceiling) - (recoverable2025 - dep2026);
  assert.equal(recovery, 750000);
  assert.equal(lineAmount(findJournal(tm3, (j) => j.lines.some((l) => l.account === 'Loss on Impairment'), 'Pujols loss'), 'Loss on Impairment', 'debit'), loss);
  assert.ok(depreciation(dep2026), 'Pujols 2026 depreciation');
  assert.equal(lineAmount(findJournal(tm3, (j) => j.lines.some((l) => l.account === 'Recovery of Impairment Loss'), 'Pujols recovery'), 'Recovery of Impairment Loss', 'credit'), 750000);

  // Falcetto E10.27: elimination entry with Loss on Revaluation, then depreciation on fair value.
  const falcetto = findJournal(tm3, (j) => j.lines.some((l) => l.account === 'Loss on Revaluation'), 'Falcetto');
  assert.equal(lineAmount(falcetto, 'Accumulated Depreciation—Equipment', 'debit'), 4000);
  assert.equal(lineAmount(falcetto, 'Loss on Revaluation', 'debit'), 12000 - 4000 - 7000);
  assert.equal(lineAmount(falcetto, 'Equipment', 'credit'), 12000 - 7000);
  assert.ok(depreciation(7000 / 4), 'Falcetto 2026 depreciation');

  // Eastman E10.28 ratios.
  const averageAssets = (13659 + 14320) / 2;
  assert.equal(averageAssets, 13989.5);
  assert.equal((10301 / averageAssets).toFixed(3), '0.736');
  assert.equal((676 / 10301 * 100).toFixed(3), '6.562');
  assert.equal((676 / averageAssets * 100).toFixed(3), '4.832');
  for (const phrase of ['£13.989,50', '0{,}736', '6{,}562', '4{,}832']) assert.ok(text.includes(phrase), `Eastman ${phrase}`);
}

// ---------------------------------------------------------------- TM04
const tm4 = checkReading(4, [
  'Santos SpA', 'Kroger', 'FVLCD, VIU, dan nol', 'Interpretasi A', 'Interpretasi B', 'pp. 881–882',
  'held for disposal', 'tidak mencatat depresiasi', 'Other income and expense', 'TM1, bagian 11',
  'Land is not depreciated because its utility usually does not diminish over time.', 'dalam ribuan rupiah',
  'E10.20', 'E10.29', 'P10.9', 'Latsol UTS p. 3', 'Latsol UTS p. 4', 'Latsol UTS p. 8', 'Latsol UTS p. 9', 'Level 3',
]);
{
  const text = JSON.stringify(tm4);
  assert.ok(!/SL-AKK-06|tidak memiliki dokumen standar/.test(text), 'TM4 refers to TM1 for land rights instead of the scope-limitation callout');
  assert.ok(!/\d+k\b/.test(text), 'TM4 amounts in thousands carry no "k" suffix');
  assert.ok(!/Opsi [AB]\b/.test(text), 'TM4 labels the E10.29 alternatives "Interpretasi A/B"');
  const signed = (cell) => (/^[−-]/.test(cell) ? -1 : 1) * money(cell);
  const solution = (title) => {
    const block = flatten(tm4.blocks).find((b) => b.kind === 'solution-reveal' && b.title.includes(title));
    assert.ok(block, `${title}: solution not found`);
    return { blocks: block.blocks };
  };

  // Land revaluation schedules (brief 06 algorithm) must match the rendered tables and journals row by row.
  const schedule = (cost, fairValues) => {
    let carrying = cost;
    let aoci = 0;
    let pnlLoss = 0;
    return fairValues.map(([year, fv]) => {
      const diff = fv - carrying;
      let oci = 0;
      let pnl = 0;
      if (diff > 0) {
        pnl = Math.min(diff, pnlLoss);
        oci = diff - pnl;
        pnlLoss -= pnl;
        aoci += oci;
      } else if (diff < 0) {
        const absorbed = Math.min(-diff, aoci);
        oci = 0 - absorbed;
        pnl = diff + absorbed;
        aoci -= absorbed;
        pnlLoss -= pnl;
      }
      const row = [year, fv, carrying, oci, aoci, pnl];
      carrying = fv;
      return row;
    });
  };
  const sugehdewe = schedule(1000000, [[2017, 1125000], [2018, 900000], [2019, 962500], [2020, 1025000], [2021, 1150000]]);
  assert.equal(sugehdewe[2][5], 62500, 'Sugehdewe 2019 P&L +62.500');
  assert.equal(sugehdewe[3][3], 25000, 'Sugehdewe 2020 OCI +25.000');
  const mentari = schedule(800000, [[2016, 800000], [2017, 950000], [2018, 700000], [2019, 650000], [2020, 780000], [2021, 900000]]);
  const ociOf = (j) => j.lines.reduce((sum, l) => sum + (l.account === 'Unrealized Gain on Revaluation—Land (OCI)' ? money(l.credit) - money(l.debit) : 0), 0);
  const pnlOf = (j) => j.lines.reduce((sum, l) => sum + (l.account === 'Recovery of Prior Revaluation Loss' ? money(l.credit) : 0)
    - (l.account === 'Loss on Revaluation' ? money(l.debit) : 0), 0);
  for (const [label, expected] of [['PT Sugehdewe', sugehdewe], ['PT Mentari Jaya', mentari]]) {
    const { blocks } = solution(label);
    const table = blocks.find((b) => b.kind === 'table');
    assert.equal(table.rows.length, expected.length, `${label} rows`);
    table.rows.forEach((row, i) => {
      assert.equal(Number(row[0]), expected[i][0]);
      row.slice(1).forEach((cell, c) => assert.equal(signed(cell), expected[i][c + 1], `${label} ${row[0]} ${table.headers[c + 1]}`));
    });
    const landJournals = journalsOf({ blocks });
    const revaluedYears = expected.filter((row) => row[1] !== row[2]);
    assert.equal(landJournals.length, revaluedYears.length, `${label}: one journal per revaluation year`);
    landJournals.forEach((j, i) => {
      assert.ok(j.caption.startsWith(`31 Desember ${revaluedYears[i][0]}`), `${label}: journal order ${j.caption}`);
      assert.equal(ociOf(j), revaluedYears[i][3], `${label} ${j.caption} OCI`);
      assert.equal(pnlOf(j), revaluedYears[i][5], `${label} ${j.caption} P&L`);
    });
  }

  // Sprague E10.20.
  assert.equal(900000 - 400000 - Math.max(300000, 280000), 200000);
  assert.equal(Math.min(270000, 900000 - (400000 + 500000 / 4)) - (300000 - 300000 / 4), 45000);
  const sprague = solution('Sprague Inc.');
  assert.ok(journalsOf(sprague).some((j) => j.lines.some((l) => l.account === 'Loss on Impairment' && l.debit === '$200.000')));
  assert.ok(journalsOf(sprague).some((j) => j.lines.some((l) => l.account === 'Recovery of Impairment Loss' && l.credit === '$45.000')));

  // Roland P10.9: held for use recovers 700.000, held for disposal loses 700.000 without depreciation.
  const rolandRecoverable = Math.max(5300000, 5600000);
  assert.equal(7500000 - rolandRecoverable, 1900000);
  assert.equal(Math.min(4900000, 10000000 - 3 * 1250000) - (rolandRecoverable - rolandRecoverable / 4), 700000);
  assert.equal(rolandRecoverable - 4900000, 700000);
  const roland = solution('Roland SE');
  const disposalStart = roland.blocks.findIndex((b) => b.kind === 'h3' && b.text.startsWith('Kasus B'));
  const useJournals = journalsOf({ blocks: roland.blocks.slice(0, disposalStart) });
  const disposalJournals = journalsOf({ blocks: roland.blocks.slice(disposalStart) });
  assert.equal(lineAmount(useJournals.find((j) => j.lines.some((l) => l.account === 'Recovery of Impairment Loss')), 'Recovery of Impairment Loss', 'credit'), 700000);
  assert.ok(useJournals.some((j) => j.lines.some((l) => l.account === 'Depreciation Expense' && l.debit === '€1.400.000')));
  assert.ok(disposalJournals.every((j) => j.lines.every((l) => l.account !== 'Depreciation Expense')), 'held for disposal: no depreciation');
  assert.deepEqual(disposalJournals.map((j) => lineAmount(j, 'Loss on Impairment', 'debit')), [1900000, 700000]);

  // Su Ltd. E10.29: both interpretations, amounts in thousands as stated.
  const su = solution('Su Ltd.');
  const suJournals = journalsOf(su);
  const surplus = suJournals.find((j) => j.lines.some((l) => l.account === 'Unrealized Gain on Revaluation—Equipment (OCI)' && l.credit));
  assert.equal(lineAmount(surplus, 'Unrealized Gain on Revaluation—Equipment (OCI)', 'credit'), 8800 - (10000 - 2000));
  const decrease = 8800 - 2 * (8800 / 8) - 5000;
  assert.equal(decrease, 1600);
  for (const [label, aoci] of [['A', 800 - 100 - 100], ['B', 800]]) {
    const journal = suJournals.find((j) => j.caption.startsWith(`Interpretasi ${label}, 31 Desember 2026 — eliminasi`));
    assert.ok(journal, `Su Ltd. Interpretasi ${label} deficit journal`);
    assert.equal(lineAmount(journal, 'Unrealized Gain on Revaluation—Equipment (OCI)', 'debit'), aoci);
    assert.equal(lineAmount(journal, 'Loss on Revaluation', 'debit'), decrease - aoci);
    assert.equal(lineAmount(journal, 'Equipment', 'credit'), 8800 - 5000);
  }
  const transfers = suJournals.filter((j) => j.lines.some((l) => l.account === 'Retained Earnings'));
  assert.ok(transfers.length === 2 && transfers.every((j) => j.caption.startsWith('Interpretasi A')), 'AOCI transfers only under Interpretasi A');

  // Tutor impairment cases.
  assert.equal(3060000000 - 3060000000 / 12 - Math.max(2600000000, 2365000000), 205000000);
  assert.equal(4800000000 - 4800000000 / 10 * 3 - Math.max(3100000000, 3250000000), 110000000);
  assert.equal(Math.round(3250000000 / 7), 464285714);
  for (const amount of ['Rp205.000.000', 'Rp110.000.000', 'Rp464.285.714']) {
    assert.ok(journalsOf(tm4).some((j) => j.lines.some((l) => l.debit === amount)), `tutor journal ${amount}`);
  }
}

// ---------------------------------------------------------------- TM05
const tm5 = checkReading(5, [
  'P11.1', 'CA11.1', 'E11.4', 'E11.9', 'E11.12', 'E11.14', 'Illustration 11.13', 'Next Century Incorporated',
  'Costs of successfully defending patent on laser scanner. Expense as legal fees. Such expenditures only maintain expected benefits.',
  'Interpretasi — kapitalisasi dan amortisasi €45.000', 'catatan 17', 'Standards Comparison',
]);
{
  const text = JSON.stringify(tm5);
  assert.ok(!/defending patent\.\.\./.test(text), 'TM5 cites Illustration 11.13 item 13, not the spliced quote');
  const solution = (title) => {
    const block = flatten(tm5.blocks).find((b) => b.kind === 'solution-reveal' && b.title.includes(title));
    assert.ok(block, `${title}: solution not found`);
    return block;
  };

  // Reichenbach P11.1: the problem's debit list is reproduced and every figure traces to it.
  const reichenbach = solution('Reichenbach Co.');
  const debitList = reichenbach.blocks.find((b) => b.kind === 'table');
  const debits = [48000, 24000, 16000, 84000, 75000, 278400, 12650, 160000];
  assert.deepEqual(debitList.rows.slice(0, -1).map((row) => row[0]), ['7/1/24', '10/1/24', '12/31/24', '1/2/25', '3/1/25', '4/1/25', '6/1/25', '9/1/25']);
  assert.deepEqual(debitList.rows.slice(0, -1).map((row) => money(row[2])), debits);
  assert.ok(debitList.rows[7][1].includes('development costs of €45.000 incurred related to 1/2/25 patent, which has achieved economic viability'));
  const balance = debits.reduce((sum, value) => sum + value, 0);
  assert.equal(balance, 698050);
  const interpretation = flatten(reichenbach.blocks).find((b) => b.kind === 'callout' && b.title.startsWith('Interpretasi'));
  assert.ok(interpretation && interpretation.text.includes('€1.607'), 'P11.1 €45.000 treatment is a visible interpretation');
  const correction = journalsOf(reichenbach)[0];
  const franchise = 48000 / 96;
  const rent = 24000 / 24;
  const developmentAmortization = Math.round(45000 / (120 - 8) * 4);
  assert.equal(developmentAmortization, 1607);
  const expected = {
    Franchise: 48000, 'Prepaid Rent': rent * 9, Patents: 84000 + 45000, Goodwill: 278400,
    'Retained Earnings': franchise * 6 + rent * 3 + 16000, 'Rent Expense': rent * 12, 'Franchise Amortization Expense': franchise * 12,
    'Patent Amortization Expense': 84000 / 10 + developmentAmortization, 'Legal Expense': 12650,
    'Research and Development Expense': 75000 + (160000 - 45000),
  };
  for (const [account, amount] of Object.entries(expected)) assert.equal(lineAmount(correction, account, 'debit'), amount, `P11.1 ${account}`);
  assert.equal(expected['Research and Development Expense'], 190000);
  assert.equal(lineAmount(correction, 'Intangible Assets', 'credit'), balance);
  assert.equal(lineAmount(correction, 'Accumulated Amortization—Patents', 'credit'), 10007);
  assert.equal(correction.lines.reduce((sum, l) => sum + money(l.debit), 0), 717057);

  // Terrell E11.12.
  const goodwill = 380000 - (200000 + (175000 - 5000) + 30000 + (70000 + 50000) + 100000 - (50000 + 300000));
  assert.equal(goodwill, 110000);
  assert.equal(lineAmount(journalsOf(solution('Terrell Galleries'))[0], 'Goodwill', 'debit'), goodwill);

  // Botticelli E11.14.
  const loss = 4300000 - 3400000;
  const amortization2026 = 3400000 / 10;
  const ceiling = 4300000 - 4300000 / 10;
  const recovery = Math.min(3500000, ceiling) - (3400000 - amortization2026);
  assert.deepEqual([loss, amortization2026, recovery], [900000, 340000, 440000]);
  const botticelli = journalsOf(solution('Botticelli Company'));
  assert.equal(lineAmount(botticelli[0], 'Loss on Impairment', 'debit'), loss);
  assert.equal(lineAmount(botticelli[1], 'Amortization Expense', 'debit'), amortization2026);
  assert.equal(lineAmount(botticelli[2], 'Recovery of Impairment Loss', 'credit'), recovery);
  assert.ok(botticelli.every((j) => j.lines.every((l) => !l.account.startsWith('Accumulated'))), 'Botticelli credits the copyright directly');

  // Devon Harris E11.9.
  const patent = 2500000 - 2500000 / 10 - (2500000 - 2500000 / 10) / 5;
  const franchiseNet = 580000 - 580000 / 10;
  assert.equal(patent + franchiseNet, 2322000);
  const intangibles = solution('Devon Harris').blocks.find((b) => b.kind === 'table');
  assert.deepEqual(intangibles.rows.map((row) => money(row[2])), [patent, franchiseNet, 2322000]);

  // Palmiero E11.4 and Dogwood CA11.1.
  assert.equal(1500000 - 1500000 / 10 * 2 - (1500000 - 1500000 / 10 * 2) / 4, 900000);
  assert.ok(text.includes('\\$900.000') && text.includes('\\$35.000'));
  const dogwood = journalsOf(solution('Dogwood Electronics'));
  assert.deepEqual(dogwood.map((j) => money(j.lines[0].debit)), [10000, 23000 + 34000, 45000]);
}

// ---------------------------------------------------------------- TM06
const tm6 = checkReading(6, [
  'E12.1', 'E12.2', 'P12.1', 'P12.2', 'Purchase Discounts Lost', 'Discount on Notes Payable', 'Refundable Deposits',
  'Interpretasi — PPN pembelian truk', 'Alternatif A', 'Alternatif B', 'Kieso p. 1066', 'pp. 1027–1028',
  'more likely than not', 'tidak pernah diakui', 'Environmental Restoration Provision', 'Standards Comparison',
]);
{
  const text = JSON.stringify(tm6);
  const solution = (title) => {
    const block = flatten(tm6.blocks).find((b) => b.kind === 'solution-reveal' && b.title.includes(title));
    assert.ok(block, `${title}: solution not found`);
    return block;
  };
  assert.ok(!/\d\s?%\s?[-–]\s?50|≥\s?90|90\s?%|75\s?%|80\s?%|<\s?5\s?%/.test(text), 'TM6 contingency matrix keeps only the >50% threshold');
  const contingency = flatten(tm6.blocks).find((b) => b.kind === 'table' && b.headers.join('|') === 'Kemungkinan|Sisi kewajiban|Sisi aset');
  assert.ok(contingency, 'TM6 contingency matrix');
  assert.deepEqual(contingency.rows.map((row) => row[0].split(' (')[0]), ['Virtually certain', 'Probable', 'Possible', 'Remote']);
  // A contingent liability is never recognized; only a provision is. "Virtually certain" governs contingent assets.
  const [certain, probable, possible] = contingency.rows;
  assert.ok(/Liabilitas kontinjensi/.test(possible[1]) && /tidak diakui/.test(possible[1]), 'possible: contingent liability disclosed, not recognized');
  for (const row of [certain, probable]) assert.ok(/provisi/.test(row[1]) && !/kontinjensi/i.test(row[1]), `${row[0]}: liability side is a provision`);
  assert.ok(/\*\*diakui\*\*/.test(certain[2]) && /tidak diakui/.test(probable[2]), 'contingent asset recognized only when virtually certain');

  // Darby E12.2.
  const darby = journalsOf(solution('Darby Corporation'));
  const discount = 81000 - 75000;
  assert.equal(lineAmount(darby.find((j) => j.lines.some((l) => l.account === 'Discount on Notes Payable' && l.debit)), 'Discount on Notes Payable', 'debit'), discount);
  const amortization = discount * 3 / 12;
  assert.equal(lineAmount(darby.find((j) => j.lines.some((l) => l.account === 'Discount on Notes Payable' && l.credit)), 'Interest Expense', 'debit'), amortization);
  assert.equal(lineAmount(darby.find((j) => j.lines.some((l) => l.account === 'Interest Payable')), 'Interest Payable', 'credit'), 50000 * 0.08 * 3 / 12);
  assert.equal(81000 - (discount - amortization), 76500);
  assert.ok(text.includes('\\$76.500'), 'Darby carrying amount 76.500');

  // Edwardson P12.1.
  const edwardson = journalsOf(solution('Edwardson AG'));
  assert.equal(lineAmount(edwardson.find((j) => j.lines.some((l) => l.account === 'Purchases')), 'Purchases', 'debit'), 70000 * 0.98);
  assert.equal(lineAmount(edwardson.find((j) => j.lines.some((l) => l.account === 'Purchase Discounts Lost')), 'Purchase Discounts Lost', 'debit'), 1400);
  assert.equal(lineAmount(edwardson.find((j) => j.lines.some((l) => l.account === 'Notes Payable')), 'Notes Payable', 'credit'), 50000 - 4000);
  assert.equal(Math.round((50000 - 4000) * 0.12 * 9 / 12), 4140);
  assert.equal(lineAmount(edwardson.find((j) => j.lines.some((l) => l.account === 'Interest Payable')), 'Interest Expense', 'debit'), 4140);

  // Schultz P12.2.
  const schultz = journalsOf(solution('Schultz Department Store'));
  const sales = schultz.find((j) => j.lines.some((l) => l.account === 'Sales Revenue'));
  assert.equal(Math.round(798000 / 1.05), 760000);
  assert.equal(lineAmount(sales, 'Sales Revenue', 'credit'), 760000);
  assert.equal(lineAmount(sales, 'VAT Taxes Payable', 'credit'), 798000 - 760000);
  const trucks = schultz.filter((j) => j.lines.some((l) => l.account === 'Equipment (Delivery Trucks)'));
  assert.equal(trucks.length, 2, 'both truck alternatives');
  const [truckA, truckB] = trucks;
  assert.ok(truckA.caption.startsWith('(3) Alternatif A') && truckB.caption.startsWith('(3) Alternatif B'));
  assert.equal(lineAmount(truckA, 'Equipment (Delivery Trucks)', 'debit'), Math.round(120000 * 1.05));
  assert.equal(truckA.lines.length, 2, 'Alternatif A capitalizes VAT');
  assert.equal(lineAmount(truckB, 'Equipment (Delivery Trucks)', 'debit'), 120000);
  assert.equal(lineAmount(truckB, 'VAT Taxes Recoverable', 'debit'), 120000 * 0.05);
  assert.equal(lineAmount(truckB, 'Cash', 'credit'), 126000);
  const restoration = schultz.find((j) => j.lines.some((l) => l.account === 'Environmental Restoration Provision'));
  assert.equal(lineAmount(restoration, 'Land Improvements (Parking Lot)', 'debit'), 84000);
  assert.equal(lineAmount(restoration, 'Environmental Restoration Provision', 'credit'), 84000);

  // E12.1 classifies all sixteen items.
  const classification = solution('E12.1').blocks.find((b) => b.kind === 'table');
  assert.deepEqual(classification.rows.map((row) => row[0]), 'abcdefghijklmnop'.split(''));
}

// ---------------------------------------------------------------- TM07
const tm7 = checkReading(7, [
  'E13.4', 'E13.5', 'E13.6', 'Foreman Cleaners', 'Spencer plc', 'RPP AKM II', 'pertemuan 9–10', 'pertemuan 7',
  'Kieso p. 1171', 'faktor tabel nilai kini 5 desimal', 'menyerap selisih pembulatan', 'IFRIC 19', 'Standards Comparison',
]);
{
  const solution = (title) => {
    const block = flatten(tm7.blocks).find((b) => b.kind === 'solution-reveal' && b.title.includes(title));
    assert.ok(block, `${title}: solution not found`);
    return block;
  };
  const round = (value) => Math.round(value);

  // Foreman Cleaners E13.5 (E13.4 data): IFRS net entries only in the worked practice.
  const cash = round(800000 * 0.8495);
  const july = round(cash * 0.06);
  const december = round((cash + july - 40000) * 0.06);
  assert.deepEqual([cash, july, december], [679600, 40776, 40823]);
  const foreman = journalsOf(solution('Foreman Cleaners'));
  assert.equal(foreman.length, 3);
  assert.ok(foreman.every((j) => j.lines.every((l) => l.account !== 'Discount on Bonds Payable')), 'worked practice uses IFRS net entries');
  assert.equal(lineAmount(foreman[0], 'Cash', 'debit'), cash);
  assert.equal(lineAmount(foreman[0], 'Bonds Payable', 'credit'), cash);
  assert.equal(lineAmount(foreman[1], 'Interest Expense', 'debit'), july);
  assert.equal(lineAmount(foreman[1], 'Bonds Payable', 'credit'), july - 40000);
  assert.equal(lineAmount(foreman[2], 'Interest Expense', 'debit'), december);
  assert.equal(lineAmount(foreman[2], 'Interest Payable', 'credit'), 40000);
  assert.equal(lineAmount(foreman[2], 'Bonds Payable', 'credit'), december - 40000);
  const comparison = flatten(tm7.blocks).find((b) => b.kind === 'table' && b.headers[2] === 'US GAAP: akun diskonto terpisah');
  assert.ok(comparison && comparison.caption.includes('Kieso p. 1171'), 'US GAAP comparison note');
  assert.ok(comparison.rows[0][2].includes('€120.400') && comparison.rows[0][2].includes('€800.000'));

  // Spencer plc E13.6: 5-decimal table factors, schedule rows, final-year plug.
  assert.equal(round(3000000 * 0.56743 + 300000 * 3.60478), 2783724);
  const expected = [['1/1/2025', null, null, null, 2783724]];
  let carrying = 2783724;
  for (let year = 2026; year <= 2030; year++) {
    const amortization = year === 2030 ? 3000000 - carrying : round(carrying * 0.12) - 300000;
    carrying += amortization;
    expected.push([`1/1/${year}`, 300000, 300000 + amortization, amortization, carrying]);
  }
  assert.equal(carrying, 3000000);
  const schedule = solution('Spencer plc').blocks.find((b) => b.kind === 'table');
  const cells = (row) => row.map((cell, i) => (i === 0 ? cell : cell === '—' ? null : money(cell)));
  assert.deepEqual(schedule.rows.slice(0, -1).map(cells), expected, 'Spencer schedule rows');
  const totalInterest = expected.slice(1).reduce((sum, row) => sum + row[2], 0);
  assert.equal(totalInterest, 1716276);
  assert.deepEqual(cells(schedule.rows.at(-1)), ['Total', 1500000, totalInterest, 216276, null]);
  const spencer = journalsOf(solution('Spencer plc'));
  const accrual = spencer.find((j) => j.lines.some((l) => l.account === 'Interest Expense'));
  assert.equal(lineAmount(accrual, 'Interest Expense', 'debit'), expected[1][2]);
  assert.equal(lineAmount(accrual, 'Bonds Payable', 'credit'), expected[1][3]);
  assert.ok(spencer.some((j) => j.lines.some((l) => l.account === 'Bonds Payable' && l.debit === '£3.000.000')), 'principal repaid at maturity');
}

console.log(`AKK202 canonical PASS: TM1 frozen, TM2–TM7 coverage, ${journals} balanced journals, ${formulas} valid formulas, key numbers.`);
