// Canonical content guard for PJK301 (Perpajakan II) TM05–TM07.
// Verifies structure, KaTeX math validity, render safety, regulatory citations, and numerical accuracy.
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import katex from 'katex';

const bundle = await build({
  entryPoints: ['src/data/pjk2/pjk2Data.ts'],
  bundle: true,
  write: false,
  format: 'esm',
  platform: 'node',
  logLevel: 'silent',
});

const { PJK301_READINGS: readings } = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
);

const flatten = (blocks) => blocks.flatMap((block) => [block, ...('blocks' in block ? flatten(block.blocks) : [])]);

const markdownStrings = (reading) => {
  const values = [reading.intro];
  for (const block of flatten(reading.blocks)) {
    switch (block.kind) {
      case 'p':
      case 'callout':
        values.push(block.text);
        break;
      case 'ul':
      case 'ol':
        values.push(...block.items);
        break;
      case 'table':
        values.push(...block.rows.flat(), block.caption);
        break;
      case 'formula':
        values.push(block.note);
        break;
      case 'solution-reveal':
        values.push(block.prompt);
        break;
      default:
    }
  }
  return values.filter((value) => typeof value === 'string');
};

const plainStrings = (reading) => {
  const values = [reading.title, reading.ref, ...reading.objectives];
  for (const block of flatten(reading.blocks)) {
    if (['example', 'solution-reveal', 'callout'].includes(block.kind) && block.title) values.push(block.title);
    if (block.kind === 'h2' || block.kind === 'h3') values.push(block.text);
    if (block.kind === 'table') values.push(...block.headers);
  }
  return values.filter((value) => typeof value === 'string');
};

const stripCode = (text) => text.replace(/`[^`]*`/g, '');
// Checks unescaped $ signs that are not LaTeX delimiters or escaped \$
const unescapedDollars = (text) => {
  const withoutMath = stripCode(text).replace(/\$\$[\s\S]*?\$\$/g, '').replace(/\$[^$\n]+\$/g, '');
  return (withoutMath.match(/(?<!\\)\$/g) ?? []).length;
};

// Two or more unescaped single "*" in one string can pair into <em>; write "\\*" instead.
const loneStars = (text) => [...stripCode(text).matchAll(/(?<![\\*])\*(?!\*)/g)];
const hasNotationStarPair = (text) => loneStars(text).length >= 2;

// Ignore KaTeX font warnings
console.warn = () => {};

let formulas = 0;
let solutionReveals = 0;

const checkReading = (tm, requiredPatterns, forbiddenPatterns = []) => {
  const reading = readings[tm];
  assert.ok(reading, `TM${tm} reading must exist`);
  assert.equal(reading.tm, tm);
  assert.ok(reading.title && reading.title.length > 10, `TM${tm}: title must be descriptive`);
  assert.ok(reading.ref && reading.ref.length > 10, `TM${tm}: ref must cite primary laws`);
  assert.ok(reading.intro && reading.intro.length > 50, `TM${tm}: intro must be substantial`);
  assert.ok(reading.objectives && reading.objectives.length >= 4, `TM${tm}: at least 4 learning objectives`);

  const fullText = JSON.stringify(reading);

  for (const pattern of requiredPatterns) {
    if (typeof pattern === 'string') {
      assert.ok(fullText.includes(pattern), `TM${tm} missing required text: "${pattern}"`);
    } else {
      assert.ok(pattern.test(fullText), `TM${tm} missing required regex pattern: ${pattern}`);
    }
  }

  for (const pattern of forbiddenPatterns) {
    if (typeof pattern === 'string') {
      assert.ok(!fullText.includes(pattern), `TM${tm} contains forbidden text: "${pattern}"`);
    } else {
      assert.ok(!pattern.test(fullText), `TM${tm} contains forbidden regex pattern: ${pattern}`);
    }
  }

  for (const value of markdownStrings(reading)) {
    assert.equal(unescapedDollars(value), 0, `TM${tm}: unescaped "$" found in text: ${value.slice(0, 80)}`);
    assert.ok(!hasNotationStarPair(value), `TM${tm}: accidental double star found in text: ${value.slice(0, 80)}`);
  }

  for (const value of plainStrings(reading)) {
    assert.ok(!value.includes('\\'), `TM${tm}: unexpected backslash in plain-text field: ${value.slice(0, 80)}`);
  }

  for (const block of flatten(reading.blocks)) {
    if (block.kind === 'table') {
      block.rows.forEach((row) => {
        assert.equal(row.length, block.headers.length, `TM${tm}: table row length mismatch (${row.length} vs ${block.headers.length})`);
      });
    }
    if (block.kind === 'formula') {
      assert.ok(block.text.includes('\\'), `TM${tm}: formula must use LaTeX math formatting`);
      assert.ok(!block.text.startsWith('$'), `TM${tm}: formula text must not start with "$"`);
      katex.renderToString(block.text, {
        throwOnError: true,
        displayMode: true,
        strict: 'ignore',
      });
      formulas++;
    }
    if (block.kind === 'solution-reveal') {
      solutionReveals++;
    }
  }

  return reading;
};

// ---------------------------------------------------------------- TM05
const tm5 = checkReading(
  5,
  [
    'PMK 51/2025',
    'PMK No. 51 Tahun 2025',
    'PMK 37/2025',
    'PP 20/2026',
    'Dua Posisi',
    // 11 Worked cases key figures
    'PT Dynaplast',
    '478.500',      // Kasus 1: PT Dynaplast PPh 22 Impor
    '3.000.000',    // Kasus 2: PT Kaltim Prima Coal Ekspor Batubara
    '750.000',      // Kasus 3: Belanja Komputer Dinas Kominfo
    '1.200.000',    // Kasus 4: Pertamina Solar Industri (tidak final)
    '1.250.000',    // Kasus 4: Pertamina Bensin SPBU (final)
    '360.000',      // Kasus 5: PT Krakatau Steel Penjualan Baja
    '200.000',      // Kasus 6: PT Mina Bahari Hasil Laut
    '350.000.000',  // Kasus 7: Supercar Ferrari 5%
    '350.000',      // Kasus 8: Bitcoin Kripto 0.1%
    '25.000',       // Kasus 9: Belanja SIPLah SMPN 1
    '48.000.000',   // Kasus 10: PT Dynaplast PPh 23 Total
    '250.000',      // Kasus 11: Tuan Bambang UMKM Juni
  ],
  [
    /PP 9\/2021/,
    /PMK 81\/2024.*Pasal 217 s\.d\. 227/,
    /batas waktu 7 tahun bagi orang pribadi/i,
  ]
);

// ---------------------------------------------------------------- TM06
const tm6 = checkReading(
  6,
  [
    'PP 9/2022',
    'PMK 81/2024',
    'Pasal 191',
    '1,2%',
    '1,8%',
    // 15 Worked cases key figures
    '40.000',       // Kasus 1: Deposito Bank Berjaya
    '1.000.000',    // Kasus 2: Bunga Obligasi Bursa
    '50.000.000',   // Kasus 4: Hadiah Undian Mobil
    '150.000',      // Kasus 5: Penjualan Saham Bursa
    '6.000.000',    // Kasus 7: Persewaan Ruko
    '1.750.000',    // Kasus 8: Konstruksi Kecil CV Pratama
    '13.250.000',   // Kasus 9: Konstruksi Besar PT Bangun Mandiri
    '8.000.000',    // Kasus 10: Konstruksi Tanpa Kualifikasi
    '20.000.000',   // Kasus 12: PHTB Ruko Tuan Anton
    '1.500.000',    // Kasus 13: PHTB Rumah Sederhana
    '600.000',      // Kasus 14: Pelayaran DN Carter Kapal
    '1.800.000',    // Kasus 15: Penerbangan DN Carter (tidak final)
  ],
  [
    /PP 9\/2021/, // typo guard
    /(?<!mencabut\s+(?:PMK\s+No\.\s+)?)PMK\s+261\/2016(?!.*mencabut)/i,
  ]
);

// ---------------------------------------------------------------- TM07
const tm7 = checkReading(
  7,
  [
    'Pasal 226',
    'Pasal 407',
    'PP 78/2019',
    'Transparansi Asal Rujukan',
    'Per-Country Limitation',
    'BKMKPLN',
    '0,75%',
    'TIDAK FINAL',
    'Pasal 31E',
    // 8 Worked cases key figures
    'Rp220.000.000', // Kasus 1: PT Global Nusantara Negara A BKMKPLN
    'Rp150.000.000', // Kasus 1: Negara B
    'Rp370.000.000', // Kasus 1: Total PPh 24
    'Rp437.000.000', // Kasus 2: Tuan Sanjaya PKP
    'Rp78.250.000',  // Kasus 2: PPh Terutang
    'Rp17.906.178',  // Kasus 2: BKMKPLN Negara Z
    'Rp360.000.000', // Kasus 3: PT Sumber Rezeki Dasar Angsuran
    'Rp30.000.000',  // Kasus 3: Angsuran Bulanan PPh 25
    'Rp25.000.000',  // Kasus 4: Masa Transisi Jan-Mar
    'Rp750.000',     // Kasus 5: Tuan Heru Toko Pusat
    'Rp450.000',     // Kasus 5: Cabang 1
    'Rp300.000',     // Kasus 5: Cabang 2
    'Rp1.500.000',   // Kasus 5: Total OPPT
    'Rp500.000.000', // Kasus 6: PT Industri Maju Tax Allowance / th
    'Rp33.000.000',  // Kasus 7: PT Anugerah Gemilang 31E Penuh
    'Rp480.000.000', // Kasus 8: PT Cemerlang Abadi PKP Fasilitas
    'Rp607.200.000', // Kasus 8: PPh Terutang
    'Rp307.200.000', // Kasus 8: Dasar Angsuran
    'Rp67.200.000',  // Kasus 8: PPh 29 Kurang Bayar
    'Rp25.600.000',  // Kasus 8: Angsuran PPh 25 2026
  ],
  [
    /BAB XI Bagian Kedua/, // Should be BAB VII Bagian Kedua
    /PP 9\/2021/,
  ]
);

assert.ok(formulas >= 30, `Total KaTeX formulas tested: ${formulas}`);
assert.ok(solutionReveals >= 30, `Total worked solution cases tested: ${solutionReveals}`);

console.log(`PASS: PJK301 canonical readings guard (TM05, TM06, TM07).`);
console.log(`- Validated KaTeX formulas: ${formulas}`);
console.log(`- Validated worked solution cases: ${solutionReveals}`);
