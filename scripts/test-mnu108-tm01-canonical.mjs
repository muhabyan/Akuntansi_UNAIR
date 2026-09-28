// Canonical content guard for MNU108 (Pengantar Manajemen) TM01 — Leading Edge Management.
// Encodes the acceptance tests AT-001..AT-013 and the verified values EX-001..EX-007 from the content package
// (C:\cek\.content-inbox\MNU108\TM01\06_implementation_brief.md), plus the forbidden statements FS-001..FS-009.
// The content itself lives in src/data/manajemen/modules/tm1.ts; change the package and the page together.
import assert from 'node:assert/strict';
import { build } from 'esbuild';

const bundle = await build({
  entryPoints: ['src/data/manajemen/manajemenData.ts'],
  bundle: true,
  write: false,
  format: 'esm',
  platform: 'node',
  logLevel: 'silent',
});
const { MANAJEMEN_READINGS } = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
);

const reading = MANAJEMEN_READINGS[1];
assert.ok(reading, 'TM01 reading exists');

const flatten = (blocks) => blocks.flatMap((block) => [block, ...('blocks' in block ? flatten(block.blocks) : [])]);
const blocks = flatten(reading.blocks);
const byKind = (kind) => blocks.filter((block) => block.kind === kind);

/** Every piece of prose on the page, so a "must appear" / "must not appear" check cannot miss a block kind. */
const allText = () => {
  const values = [reading.title, reading.ref, reading.intro, ...reading.objectives];
  for (const block of blocks) {
    if ('text' in block && typeof block.text === 'string') values.push(block.text);
    if ('title' in block && typeof block.title === 'string') values.push(block.title);
    if ('caption' in block && typeof block.caption === 'string') values.push(block.caption);
    if (block.kind === 'ul' || block.kind === 'ol') values.push(...block.items);
    if (block.kind === 'table') values.push(...block.headers, ...block.rows.flat());
  }
  return values.join('\n');
};
const page = allText();
const countOf = (needle) => page.split(needle).length - 1;
const stripMarkdown = (text) => text.replace(/[*_`]/g, '');

const passes = [];
const ok = (label) => passes.push(label);

// ---------------------------------------------------------------- header
assert.equal(reading.tm, 1);
assert.equal(reading.title, 'Leading Edge Management');
assert.match(reading.ref ?? '', /Daft & Marcic/);
assert.match(reading.ref ?? '', /Ch\. 1 \(hal\. 2–51\)/);
assert.ok(reading.objectives.length >= 6, 'objectives cover the six RPP points and the case');
assert.equal(reading.layout, undefined, 'TM01 uses the flat PJK301 layout, not the layered one');
ok('header: title, ref, objectives, flat layout');

// ---------------------------------------------------------------- AT-001
// 17 sections §0..§16 as h2, in order, and nothing else at h2 level (no CORE LEARNING / WORKED PRACTICE banners).
const h2 = byKind('h2').map((block) => block.text);
assert.equal(h2.length, 17, `expected 17 h2 sections, got ${h2.length}: ${h2.join(' | ')}`);
// The numbering dot is backslash-escaped so markdown renders a heading instead of a one-item ordered list.
h2.forEach((text, index) => {
  assert.ok(text.startsWith(`${index}\\. `), `AT-001: h2 #${index} must start with "${index}\\. ", got "${text}"`);
});
// Nothing else on the page may start with "1. ": markdown would turn that string into a one-item ordered list.
const orderedListStart = /^\s{0,3}\d{1,9}[.)]\s/;
for (const text of [...h2, ...byKind('h3').map((block) => block.text), ...byKind('p').map((block) => block.text),
  ...byKind('ul').flatMap((block) => block.items), ...byKind('table').flatMap((block) => block.rows.flat())]) {
  assert.ok(!orderedListStart.test(text), `AT-001: "${text.slice(0, 50)}" would render as an ordered list, not as itself`);
}
ok('AT-001: 17 sections §0–§16 in order');

// ---------------------------------------------------------------- AT-002
// "di luar RPP" marks exactly one section title; the other two occurrences are references
// (the mind map node in §12 and the closing footnote).
const sectionsWithLabel = h2.filter((text) => text.includes('di luar RPP'));
assert.deepEqual(sectionsWithLabel, ['8\\. Managing in Nonprofit Organizations (di luar RPP: pengayaan singkat)']);
assert.equal(countOf('di luar RPP'), 3, 'AT-002: exactly 3 occurrences (title §8, mind map node, footnote)');
assert.ok(byKind('code').some((block) => block.text.includes('[di luar RPP] Nonprofit')), 'AT-002: mind map keeps the node');
ok('AT-002: "di luar RPP" on §8 only, 3 occurrences in all');

// ---------------------------------------------------------------- AT-003
// Exactly two "Contoh di luar buku" boxes, numbered (1/3) and (2/3), and the third slot stays unused.
const exampleBoxes = byKind('callout').filter((block) => (block.title ?? '').startsWith('Contoh di luar buku'));
assert.deepEqual(exampleBoxes.map((block) => block.title), ['Contoh di luar buku (1/3)', 'Contoh di luar buku (2/3)']);
assert.equal(countOf('(1/3)'), 1, 'AT-003: slot 1 appears once');
assert.equal(countOf('(2/3)'), 1, 'AT-003: slot 2 appears once');
assert.equal(countOf('(3/3)'), 0, 'AT-003: the third slot is unused');
for (const box of exampleBoxes) {
  assert.ok(!/\d{4}|%|Rp|\$/.test(box.text), `FS-006: "${box.title}" must carry no figures or dates`);
}
ok('AT-003: exactly 2 "Contoh di luar buku" boxes, (1/3) and (2/3), without figures');

// ---------------------------------------------------------------- AT-004
// No "Ilustrasi" block and no film synopsis: TM01 has no bedah film.
assert.equal(byKind('illustration').length, 0, 'AT-004: no illustration block');
assert.ok(!blocks.some((block) => (block.title ?? '') === 'Ilustrasi'), 'AT-004: no block titled Ilustrasi');
assert.equal(countOf('Ilustrasi'), 1, 'AT-004: "Ilustrasi" appears once, in the footnote that says it is unused');
assert.match(page, /"Ilustrasi" \(0×, karena TM01 tanpa bedah film\)/, 'AT-004: footnote states the label is unused');
// §0 lists the presenter duties (a list, not a table: its first column grouped the rows, and that grouping is lost
// once a phone scrolls the table sideways). The bedah film duty is the one marked as absent.
const bedahFilmItem = [...byKind('ul'), ...byKind('ol')].flatMap((block) => block.items).find((item) => /Bedah film/i.test(item));
assert.ok(bedahFilmItem, 'AT-004: the presenter duty list mentions bedah film');
assert.ok(bedahFilmItem.includes('Tidak ada di TM01'), 'AT-004: bedah film is marked "Tidak ada di TM01"');
assert.ok(!byKind('table').some((block) => block.headers.includes('Yang wajib ada')), '§0: the duty table is now a list');
for (const duty of ['**Presenter Materi**', '**Presenter Kasus**', '**Non-presenter: Mind Map**', '**Non-presenter: pertanyaan kritis**']) {
  assert.ok(byKind('p').some((block) => block.text === duty), `§0: missing duty heading ${duty}`);
}
ok('AT-004 / §0: duties as a list, no Ilustrasi block, bedah film only as "Tidak ada di TM01"');

// ---------------------------------------------------------------- AT-005
// §14 keeps the five lecturer-format subheadings and answers all three case questions.
const h3 = byKind('h3').map((block) => block.text);
for (const sub of ['14.1 Case Summary', '14.2 Problem Identification', '14.3 Analisis Kasus (dengan teori Chapter 1)', '14.4 Jawaban Pertanyaan Kasus', '14.5 Rekomendasi Manajerial']) {
  assert.ok(h3.includes(sub), `AT-005: missing §14 subheading "${sub}"`);
}
for (const question of ['**Q1.', '**Q2.', '**Q3.']) {
  assert.ok(page.includes(question), `AT-005: missing case question ${question}`);
}
assert.match(page, /Rekomendasi berikut adalah hasil analisis berdasarkan teori Chapter 1, bukan fakta dari buku/, 'NM-002: §14.5 keeps the analysis disclaimer');
ok('AT-005: §14 has the 5 subheadings, Q1–Q3, and the analysis disclaimer');

// ---------------------------------------------------------------- AT-006 / FS-002
// §3 points to TM15 for the measurement tools, and the page carries no performance metric of its own.
assert.match(page, /Alat ukur kinerja organisasi dibahas di TM15 \(Chapter 15, Managing Quality and Performance\)/, 'AT-006: TM15 pointer');
for (const forbidden of ['KPI', 'Key Performance Indicator', 'balanced scorecard', 'Balanced Scorecard']) {
  assert.ok(!page.includes(forbidden), `FS-002: "${forbidden}" is out of Chapter 1 scope`);
}
ok('AT-006 / FS-002: TM15 pointer present, no performance metric');

// ---------------------------------------------------------------- AT-007
// Management science is the fourth subfield of the classical perspective, stated in both §9d and §16.
const comparisonTable = byKind('table').find((block) => block.headers.includes('Management Science'));
assert.ok(comparisonTable, 'AT-007: §9d comparison table exists');
assert.ok(
  comparisonTable.rows.some((row) => row.some((cell) => /Subbidang ke-4 classical perspective/.test(cell) && cell.includes('[hal. 27, 31]'))),
  'AT-007: §9d states management science is the fourth classical subfield, with its anchor',
);
const trapTable = byKind('table').find((block) => block.headers.includes('Jebakan'));
assert.ok(trapTable, 'AT-007: §16 exam trap table exists');
assert.ok(
  trapTable.rows.some((row) => row.some((cell) => /subbidang ke-4 classical perspective/i.test(cell))),
  'AT-007: §16 repeats the classification',
);
ok('AT-007: management science = fourth classical subfield in §9d and §16');

// ---------------------------------------------------------------- AT-008 / FS-008
// Both Hawthorne readings are shown, side by side.
const hawthorne = byKind('table').find((block) => block.headers.includes('Tafsiran awal') && block.headers.includes('Reanalisis kemudian'));
assert.ok(hawthorne, 'AT-008: the two-reading Hawthorne table exists');
assert.match(hawthorne.rows[0][0], /human relations/i, 'AT-008: first reading is human relations');
assert.match(hawthorne.rows[0][1], /[Uu]ang mungkin faktor terpenting/, 'AT-008: the reanalysis puts money first');
// The misleading single reading may appear only as a quoted wrong answer in the exam-trap table.
const hawthorneClaims = [
  ...blocks.filter((block) => 'text' in block && typeof block.text === 'string').map((block) => block.text),
  ...byKind('ul').flatMap((block) => block.items),
  ...byKind('ol').flatMap((block) => block.items),
  ...byKind('table').flatMap((block) => block.rows.flatMap((row) => row.filter((_, column) => block.headers[column] !== 'Jawaban salah'))),
].filter((text) => /uang tidak berpengaruh/i.test(text));
assert.deepEqual(hawthorneClaims, [], 'FS-008: the single misleading reading may only appear as a quoted wrong answer');
ok('AT-008 / FS-008: both Hawthorne readings, the misleading claim only as a labelled wrong answer');

// ---------------------------------------------------------------- AT-009
// §13 lists 10–12 book examples; the package settled on 12.
const applicationTable = byKind('table').find((block) => block.headers.join('|') === '#|Konsep|Contoh dari buku|Hal.');
assert.ok(applicationTable, 'AT-009: §13 application table exists');
assert.equal(applicationTable.rows.length, 12, 'AT-009: §13 has 12 rows');
assert.deepEqual(applicationTable.rows.map((row) => row[0]), Array.from({ length: 12 }, (_, i) => String(i + 1)));
ok('AT-009: §13 has 12 numbered examples');

// ---------------------------------------------------------------- AT-010 / other exclusions
assert.ok(!page.includes('The New Test'), 'AT-010: the Ethical Dilemma stays out of the page');
assert.ok(!/Manager Frame|structural, human resource, political, symbolic/i.test(page), 'SE-005: manager frames stay out');
// FS-005: the page may say Fayol has 14 principles, but must not enumerate them. Only four are named.
const fayolTable = byKind('table').find((block) => block.headers.includes('Prinsip Fayol'));
assert.ok(fayolTable, 'FS-005: the Fayol table exists');
assert.equal(fayolTable.rows.length, 4, 'FS-005: exactly the four principles the book explains');
assert.match(page, /merumuskan \*\*14 prinsip\*\*\. Buku hanya menguraikan empat/, 'FS-005: the 4-of-14 limit is stated');
assert.match(page, /menulis 8 "fundamental necessities"\. Buku menguraikan empat/, 'SL-004: the 4-of-8 Spaulding limit is stated');
ok('AT-010 / FS-005 / SE-005: no Ethical Dilemma, no full Fayol or Spaulding list, no manager frames');

// ---------------------------------------------------------------- FS-004
// Systems Thinking, Contingency View and TQM are labels only: no definition and no year.
const exhibit19 = byKind('ol').find((block) => block.items[0] === 'Classical Perspective (Things of Production)');
assert.ok(exhibit19, 'Exhibit 1.9 is rendered as an ordered list');
assert.equal(exhibit19.items.length, 8, 'Exhibit 1.9 keeps all eight labels');
assert.equal(exhibit19.items[2], 'Systems Thinking');
assert.equal(exhibit19.items[3], 'Contingency View');
assert.equal(exhibit19.items[4], 'Total Quality Management');
for (const label of ['Systems Thinking', 'Contingency View', 'Total Quality Management']) {
  assert.ok(!new RegExp(`${label}[^\\n]{0,40}(adalah|= |\\(19\\d{2}|\\(20\\d{2})`).test(page), `FS-004: "${label}" must stay a bare label`);
}
ok('FS-004: Exhibit 1.9 keeps 8 labels, none of them defined or dated');

// ---------------------------------------------------------------- AT-011
// Every callout stays within roughly four sentences. "hal." is an abbreviation, not a sentence end.
const callouts = byKind('callout');
assert.ok(callouts.length >= 10, `expected the package's callouts to survive, got ${callouts.length}`);
for (const callout of callouts) {
  const sentences = callout.text
    .replace(/hal\./g, 'hal')
    .split(/[.!?](?=\s|$)/)
    .map((part) => part.trim())
    .filter(Boolean);
  assert.ok(sentences.length <= 4, `AT-011: callout "${callout.title}" has ${sentences.length} sentences`);
}
ok(`AT-011: all ${callouts.length} callouts are at most 4 sentences`);

// ---------------------------------------------------------------- AT-012
// The [hal. X] anchors survive in tables and in callouts, not just in prose.
assert.ok(
  byKind('table').filter((block) => [...block.rows.flat(), block.caption ?? ''].some((cell) => cell.includes('[hal.'))).length >= 8,
  'AT-012: anchors kept in tables',
);
assert.ok(callouts.filter((block) => block.text.includes('[hal.')).length >= 6, 'AT-012: anchors kept in callouts');
ok('AT-012: [hal. X] anchors kept in tables and callouts');

// ---------------------------------------------------------------- AT-013
// Exhibit 1.3 stays a two-row table: Chapter 1 has no top/middle/first-line skill pyramid (SL-002).
const exhibit13 = byKind('table').find((block) => block.headers.join('|') === 'Kelompok|Technical|Human|Conceptual');
assert.ok(exhibit13, 'AT-013: the Exhibit 1.3 table exists');
assert.deepEqual(exhibit13.rows.map((row) => row[0]), ['Nonmanagers (individual contributors)', 'Middle managers']);
assert.equal(byKind('figure').length, 0, 'AT-013: TM01 draws no figure, so no pyramid can be drawn');
assert.ok(!/piramida|pyramid/i.test(page), 'AT-013 / FS-003: no pyramid wording');
ok('AT-013 / FS-003: Exhibit 1.3 is a two-row table, no figure, no pyramid');

// ---------------------------------------------------------------- render rules from 06
// One level of boxing only: no nesting box inside box, and no reused figure/overview dashboard.
for (const kind of ['example', 'practice-box', 'solution-reveal', 'section', 'pendalaman', 'self-check', 'math-example']) {
  assert.equal(byKind(kind).length, 0, `render rule: TM01 uses no "${kind}" wrapper (one level of boxing only)`);
}
assert.ok(!/#[0-9a-fA-F]{6}\b/.test(page), 'render rule: no raw hex colour in the content');
// The concept map tree is the only monospace block; it keeps the six branches.
const codeBlocks = byKind('code');
assert.equal(codeBlocks.length, 1, 'render rule: the concept map is the only code block');
assert.equal(codeBlocks[0].language, 'Peta Konsep');
for (const branch of ['1. DASAR', '2. FUNGSI & HASIL', '3. MANAJER', '4. EVOLUSI', '5. MASA DEPAN', '6. AI']) {
  assert.ok(codeBlocks[0].text.includes(branch), `§12: concept map keeps branch "${branch}"`);
}
const crossLinks = byKind('table').find((block) => block.headers.join('|') === 'Dari|Ke|Hubungannya|Sumber');
assert.ok(crossLinks, '§12: the cross-link table exists');
assert.equal(crossLinks.rows.length, 11, '§12: 11 cross links');
assert.ok(crossLinks.rows.every((row) => row[3].includes('[hal.')), 'SA-004: every cross link is anchored');
// Exhibit 1.2 is a three-column table, resources -> functions -> performance, with the cycle noted.
const exhibit12 = byKind('table').find((block) => block.headers.join('|') === 'Resources (input)|Management functions (siklus)|Performance (hasil)');
assert.ok(exhibit12, '§2: Exhibit 1.2 renders as a three-column table');
assert.deepEqual(exhibit12.rows.map((row) => row[0]), ['Human', 'Financial', 'Raw materials', 'Technological', 'Information']);
assert.deepEqual(exhibit12.rows.slice(0, 4).map((row) => row[1]), ['Planning', 'Organizing', 'Leading', 'Controlling']);
assert.deepEqual(exhibit12.rows.map((row) => row[2]), ['Attain goals', 'Products', 'Services', 'Efficiency', 'Effectiveness']);
assert.match(exhibit12.caption ?? '', /siklus/, 'NM-004: the caption says the four functions form a cycle');
ok('render rules: one level of boxing, no hex, Exhibit 1.2 table, concept map code block');

// ---------------------------------------------------------------- phone layout
// A table that cannot be read on a 390px phone renders stacked below 640px instead (one block per row, each cell
// labelled by its header). The rule: four columns or more, or a cell longer than 80 characters. Everything narrower
// stays a table, so the reader still sees the comparison side by side.
//
// Two tables are exempt by an explicit decision: they trip the four-column half of the rule, but stacking them was
// judged to cost more than it buys. The price, measured at 390px, is that they are the only two tables on the page
// the reader has to swipe sideways: Exhibit 1.3 by 51px and the §13 table by 76px. Both fit from 640px up.
// Every other table follows the rule in both directions.
const STAY_A_TABLE = new Map([
  ['Kelompok | Technical | Human | Conceptual',
    'Exhibit 1.3: the last three columns hold only Besar/Sedang/Kecil, and the side-by-side comparison is the point'],
  ['# | Konsep | Contoh dari buku | Hal.',
    '§13: short cells, and stacked each card would be titled with nothing but its row number'],
]);
const needsStacking = (table) =>
  table.headers.length >= 4 || Math.max(...[...table.rows.flat(), ...table.headers].map((cell) => cell.length)) > 80;
const seenExemptions = new Set();
for (const table of byKind('table')) {
  const key = table.headers.join(' | ');
  const label = `table "${key}"`;
  const exemption = STAY_A_TABLE.get(key);
  if (exemption) {
    seenExemptions.add(key);
    assert.equal(table.stackOnMobile, undefined, `phone layout: ${label} is exempt (${exemption}), so it must not set stackOnMobile`);
    assert.ok(
      Math.max(...[...table.rows.flat(), ...table.headers].map((cell) => cell.length)) <= 80,
      `phone layout: ${label} is exempt from the column half of the rule only; its cells must stay short`,
    );
  } else if (needsStacking(table)) {
    assert.equal(table.stackOnMobile, true, `phone layout: ${label} is wide or long, so it must set stackOnMobile`);
  } else {
    assert.equal(table.stackOnMobile, undefined, `phone layout: ${label} fits a phone, so it must stay a table`);
  }
}
assert.deepEqual([...seenExemptions].sort(), [...STAY_A_TABLE.keys()].sort(), 'phone layout: every exemption still matches a table on the page');
const stacked = byKind('table').filter((table) => table.stackOnMobile).length;
ok(`phone layout: ${stacked} of ${byKind('table').length} tables stack below 640px, ${STAY_A_TABLE.size} exempt, the rest fit as tables`);

// ---------------------------------------------------------------- required exceptions (RE-001..RE-005)
for (const [id, pattern] of [
  ['RE-001', /tanggung jawab akhir atas controlling \*\*tetap ada pada manajer\*\*/i],
  ['RE-002', /Sebagian ahli meragukan tren ini akan bertahan lama/],
  ['RE-003', /\*\*Uang mungkin faktor terpenting\*\*/],
  ['RE-004', /Serikat pekerja UFCW mengajukan keluhan/],
  ['RE-005', /krisis mortgage 2007–2008/],
]) {
  assert.match(page, pattern, `${id}: required nuance missing`);
}
ok('RE-001..RE-005: every required exception is present');

// ---------------------------------------------------------------- EX-001..EX-007
const verifiedValues = [
  ['EX-001', ['12,5 ton', '47,5 ton', '$1,15', '$1,85']],
  ['EX-002', ['81%', '78%', '69%', '64%', '57%', '56%', '52%', '50%', '47%', '45%']],
  ['EX-003', ['< 9 menit', '48 detik']],
  ['EX-004', ['161.000 (1880)', 'lebih dari 1 juta (1920)']],
  ['EX-005', ['14.000 organisasi', 'lebih dari 30 negara']],
  ['EX-006', ['9.000 perawat', '10–12 orang', 'kurang dari 50 staf administrasi']],
  ['EX-007', ['30 orang', 'enam salon lokal']],
];
const plain = stripMarkdown(page);
for (const [id, needles] of verifiedValues) {
  for (const needle of needles) {
    assert.ok(plain.includes(needle), `${id}: verified value "${needle}" is missing from the page`);
  }
}
ok('EX-001..EX-007: all verified values present');

// ---------------------------------------------------------------- FS-009
// The book only says Keisha looked for "the best possible spin"; it never says she changed a figure.
// The only place "mengubah angka/data" may appear is the sentence that denies the book says it.
const changedFigureClaims = page
  .split(/\r?\n/)
  .filter((line) => /mengubah (angka|data)/i.test(line))
  .filter((line) => !line.includes('buku tidak menyebut Keisha mengubah data'));
assert.deepEqual(changedFigureClaims, [], 'FS-009: the page must not claim Keisha changed figures');
assert.match(page, /buku tidak menyebut Keisha mengubah data/, 'FS-009: the integrity link is labelled as analysis');
ok('FS-009: the integrity risk stays labelled as analysis');

// ---------------------------------------------------------------- OV-001
assert.ok(!/MNK\s?401/.test(page), 'OV-001: the obsolete code MNK 401 must not appear');
ok('OV-001: no obsolete course code');

console.log(`MNU108 TM01 canonical guard passed (${passes.length} groups):`);
for (const label of passes) console.log(`  - ${label}`);
