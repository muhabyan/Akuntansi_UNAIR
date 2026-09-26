// AKA201 layered readings guard. The TM readings and "Persiapan UTS" pages are converted verbatim from the content
// package (outside the repo), so this checks the structure the layered view relies on, not the wording:
// Fondasi first, every numbered section opening with Intinya, closed pendalaman blocks, write-first self checks,
// hidden case discussions, the four callout tiers, and no markdown markers leaking into the text.
import assert from 'node:assert/strict';
import { build } from 'esbuild';

const bundle = await build({ entryPoints: ['src/data/pbri/pbriData.ts'], bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent' });
const { AKA201_READINGS, AKA201_REVIEW_READINGS, AKA201_PREP } = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
);

const LAYERED_TMS = [1, 2, 3, 4, 5, 6, 7];
const CALLOUT_VARIANTS = new Set(['gist', 'warning', 'info', 'note', 'quote']);
// Figures and infographics: at least 12 px text at 390 px, where a section card leaves about 320 px of width.
// (The browser check in the converter harness also verifies that nothing overflows sideways.)
const PHONE_CONTENT_WIDTH = 320;
const MIN_FIGURE_TEXT_PX = 12;
function smallestFigureTextPx(svg) {
  const viewBoxWidth = Number(svg.match(/viewBox="[\d.\s-]+?\s([\d.]+)\s[\d.]+"/)?.[1]);
  const sizes = [...svg.matchAll(/font-size(?:="|:\s*)([\d.]+)/g)].map((m) => Number(m[1]));
  if (!viewBoxWidth || sizes.length === 0) return null;
  return (Math.min(...sizes) * Math.min(1, PHONE_CONTENT_WIDTH / viewBoxWidth));
}

const walk = (blocks, visit, trail = []) => blocks.forEach((block, i) => {
  const where = [...trail, `${block.kind}[${i}]`];
  visit(block, where.join(' > '));
  for (const nested of [block.blocks, block.answer]) if (nested) walk(nested, visit, where);
});
const strings = (block) => [block.text, block.title, block.prompt, block.question, block.signal, ...(block.items ?? []), ...(block.headers ?? []), ...(block.rows ?? []).flat()]
  .filter((value) => typeof value === 'string');

function checkLayered(label, reading) {
  assert.equal(reading.layout, 'layered', `${label}: layout 'layered'`);
  assert.ok(reading.objectives.length <= 5, `${label}: at most 5 objectives (has ${reading.objectives.length})`);
  for (const [i, block] of reading.blocks.entries()) assert.equal(block.kind, 'section', `${label}: top-level block ${i} is a section card`);
  walk(reading.blocks, (block, where) => {
    const at = `${label} ${where}`;
    for (const text of strings(block)) {
      assert.doesNotMatch(text, /^>|<!--|^---+$|^\|/m, `${at}: markdown structure leaked into the text: ${JSON.stringify(text.slice(0, 60))}`);
      assert.ok(!text.includes('$'), `${at}: "$" would start math; write amounts in words`);
    }
    if (block.kind === 'callout') assert.ok(CALLOUT_VARIANTS.has(block.variant), `${at}: callout variant ${block.variant} is not a layered tier`);
    if (block.kind === 'pendalaman') {
      assert.ok(block.title && block.blocks.length > 0, `${at}: pendalaman needs a title and content`);
      assert.ok(!(block.blocks[0]?.kind === 'h3' && block.blocks[0].text === block.title), `${at}: heading repeats the pendalaman title`);
    }
    if (block.kind === 'figure' && block.svg) {
      const px = smallestFigureTextPx(block.svg);
      assert.ok(px === null || px >= MIN_FIGURE_TEXT_PX, `${at}: figure text renders at ${px?.toFixed(1)} px on a 390 px phone; needs at least ${MIN_FIGURE_TEXT_PX} px`);
    }
    if (block.kind === 'table' && block.align) assert.equal(block.align.length, block.headers.length, `${at}: one alignment per column`);
    if (block.kind === 'table') assert.equal(block.stackOnMobile, true, `${at}: tables stack on phones (reading tables are at least 42rem wide)`);
    if (block.kind === 'self-check') assert.ok(block.answer.length > 0, `${at}: self check without a sample answer`);
    if (block.kind === 'solution-reveal') assert.ok(block.blocks.length > 0 && block.revealLabel, `${at}: case needs a hidden discussion and a reveal label`);
  });
}

for (const tm of LAYERED_TMS) {
  const reading = AKA201_READINGS[tm];
  const label = `TM${tm}`;
  checkLayered(label, reading);
  assert.equal(reading.tm, tm);
  // Only callouts from before Fondasi (e.g. "Perhatikan sebelum membaca") may sit above it, in an untitled block.
  const firstTitled = reading.blocks.findIndex((s) => s.title);
  for (const pre of reading.blocks.slice(0, firstTitled)) assert.ok(pre.blocks.every((b) => b.kind === 'callout'), `${label}: only callouts above Fondasi`);
  const sections = reading.blocks.slice(firstTitled);
  assert.equal(sections[0].layer, 'fondasi', `${label}: the first section is Fondasi`);
  assert.equal(sections[0].blocks[0]?.variant, 'gist', `${label}: Fondasi opens with Intinya`);
  for (const section of sections.filter((s) => /^\d+\. /.test(s.title ?? '') && s.layer === 'main')) {
    assert.equal(section.blocks[0]?.kind === 'callout' && section.blocks[0].variant, 'gist', `${label} "${section.title}": opens with Intinya`);
  }
  const byTitle = (title) => sections.find((s) => s.title === title);
  for (const title of ['Kasus latihan', 'Uji pemahaman', 'Exam toolkit']) assert.equal(byTitle(title)?.layer, 'latihan', `${label}: "${title}" is a latihan section`);
  const uji = byTitle('Uji pemahaman').blocks.filter((b) => b.kind === 'self-check');
  assert.ok(uji.length > 0 && uji.every((b) => b.signal), `${label}: every Uji pemahaman item has a "Tanda belum paham"`);
  assert.ok(byTitle('Kasus latihan').blocks.some((b) => b.kind === 'solution-reveal'), `${label}: cases are hidden discussions`);
}

assert.ok(Array.isArray(AKA201_PREP) && AKA201_PREP.length > 0, 'AKA201 lists its Persiapan UTS pages');
for (const { key, label } of AKA201_PREP) {
  assert.match(key, /^prep:[a-z0-9-]+$/, `${key}: prep key format`);
  assert.ok(label, `${key}: card label`);
  const reading = AKA201_REVIEW_READINGS[key];
  assert.ok(reading, `${key}: page exists in AKA201_REVIEW_READINGS`);
  checkLayered(key, reading);
  assert.equal(reading.badge, 'Persiapan UTS', `${key}: header badge`);
  assert.ok(reading.tm >= 91 && reading.tm <= 94, `${key}: tm 91-94 keeps its progress key apart from the TMs`);
}
assert.deepEqual(AKA201_PREP.map((item) => item.label), ['Benang Merah', 'Panduan Menjawab Kasus', 'Latihan Skenario UTS', 'Latihan Penyelesaian Masalah'], 'Persiapan UTS order (spec §3)');
assert.equal(AKA201_REVIEW_READINGS.uts, undefined, 'the old TM8 Simulasi UTS card is hidden');
assert.equal(new Set(AKA201_PREP.map((item) => AKA201_REVIEW_READINGS[item.key].tm)).size, AKA201_PREP.length, 'each prep page has its own tm');

// Old practice items tagged for the pre-rebuild TM01–TM07 are hidden at the registry level (pbri/practiceVisibility.ts);
// only the old TM1 quiz item and cards aka201-tm01-01…04 still match the new TM01.
const practiceBundle = await build({
  stdin: {
    contents: `export { getQuizSets } from './src/data/quizzes/index.ts';
      export { getBankSoalSets } from './src/data/banksoal/nonPte.ts';
      export { getFlashcards } from './src/data/flashcards/registry.ts';
      export { SEMESTERS } from './src/data/courseData.ts';`,
    resolveDir: process.cwd(), loader: 'ts',
  },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
});
const practice = await import(`data:text/javascript;base64,${Buffer.from(practiceBundle.outputFiles[0].text).toString('base64')}`);
const quizSets = Object.fromEntries(practice.getQuizSets('AKA201').map((set) => [set.id, set.items]));
assert.deepEqual(quizSets.uts.map((q) => q.tm), [1], 'AKA201 UTS quiz keeps only the old TM1 item');
assert.ok(quizSets.all.every((q) => q.tm === 1 || q.tm >= 8), 'AKA201 quiz compilation has no old TM2–TM7 items');
const cards = practice.getFlashcards('AKA201');
assert.deepEqual(cards.filter((c) => c.tm <= 7).map((c) => c.id), ['aka201-tm01-01', 'aka201-tm01-02', 'aka201-tm01-03', 'aka201-tm01-04'], 'AKA201 flashcards: old TM01–TM07 cards hidden except the four that match the new TM01');
const bankSets = practice.getBankSoalSets('AKA201').map((set) => set.id);
assert.ok(!bankSets.includes('uts'), 'AKA201 old pre-UTS bank set hidden');
const catalogCourse = practice.SEMESTERS.flatMap((s) => s.groups ?? []).flatMap((g) => g.courses ?? []).find((c) => c.code === 'AKA201');
assert.equal(catalogCourse?.flashcardCount, cards.length, 'AKA201 catalog flashcardCount matches the visible deck');

// Self-test of the figure rule. The first sample has the proportions of the old TM 2 infographic (900-wide viewBox,
// 7-unit text: about 2.5 px on a phone); the second fits.
assert.ok(smallestFigureTextPx('<svg viewBox="0 0 900 360"><text font-size="7">x</text></svg>') < MIN_FIGURE_TEXT_PX, 'figure rule flags tiny text');
assert.ok(smallestFigureTextPx('<svg viewBox="0 0 320 200"><text font-size="13">x</text></svg>') >= MIN_FIGURE_TEXT_PX, 'figure rule accepts readable text');

console.log(`aka201 layered: TM ${LAYERED_TMS.join(', ')} and ${AKA201_PREP.length} Persiapan UTS page(s) ok`);
