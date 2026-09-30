// Render rules shared by every MNU108 reading rewritten from a content package (TM01, then TM02..TM07):
// flat blocks with one level of boxing, numbered h2 sections, plain-text headings, tables stacked on phones exactly when
// they must be, escaped currency dollars, no ASCII drawings, and a Daftar Isi whose badge is the section's own number.
// The rules live in mnu108-canonical-lib.mjs; a TM joins by being listed in CANONICAL_TMS there.
// A mutation check at the end proves each rule can fail.
import assert from 'node:assert/strict';
import { CANONICAL_TMS, checkOutline, checkRenderRules, checkRenderedText, loadOutline, loadReadings, loadRenderer } from './mnu108-canonical-lib.mjs';

const SECTION_COUNTS = { 1: 17, 2: 18, 3: 16, 4: 17, 5: 18, 6: 18, 7: 18, 8: 15 };
const readings = await loadReadings();
const outline = await loadOutline();
const renderer = await loadRenderer();

const passes = [];
for (const tm of CANONICAL_TMS) {
  const reading = readings[tm];
  assert.ok(reading, `TM0${tm} reading exists`);
  checkRenderRules(reading, tm, SECTION_COUNTS[tm]);
  checkOutline(reading, tm, outline);
  checkRenderedText(reading, tm, renderer);
  passes.push(`TM0${tm}: render rules, Daftar Isi and the visible text of every block`);
}

// ---- Mutation check: a copy of TM01 with one rule broken at a time must be rejected.
const base = readings[1];
const clone = () => structuredClone(base);
const firstTable = (r, predicate) => r.blocks.find((block) => block.kind === 'table' && predicate(block));
const mutations = {
  'a wide table that does not stack': [(r) => { delete firstTable(r, (t) => t.stackOnMobile).stackOnMobile; }, /must set stackOnMobile/],
  'a narrow table that stacks': [(r) => { firstTable(r, (t) => !t.stackOnMobile).stackOnMobile = true; }, /must stay a table/],
  'markdown in a table header': [(r) => { firstTable(r, () => true).headers[0] = '**Istilah**'; }, /header keeps markdown/],
  'an unescaped currency dollar': [(r) => { r.blocks.find((b) => b.kind === 'p').text += ' Harga $5 dan $6.'; }, /unescaped/],
  'an ASCII drawing': [(r) => { r.blocks.push({ kind: 'p', text: '├── cabang' }); }, /ASCII drawing/],
  'a code block': [(r) => { r.blocks.push({ kind: 'code', text: 'x' }); }, /no "code" block/],
  'a wrapper box': [(r) => { r.blocks.push({ kind: 'example', title: 'x', blocks: [] }); }, /wrapper/],
  'an untitled callout': [(r) => { delete r.blocks.find((b) => b.kind === 'callout').title; }, /has a title/],
  'a missing section': [(r) => { r.blocks.splice(r.blocks.findIndex((b) => b.kind === 'h2'), 1); }, /expected 17 h2/],
  'emphasis in a heading': [(r) => { r.blocks.find((b) => b.kind === 'h2').text = '0. *Orientasi*'; }, /markdown emphasis/],
};
for (const [name, [mutate, reason]] of Object.entries(mutations)) {
  const mutant = clone();
  mutate(mutant);
  assert.throws(() => checkRenderRules(mutant, 1, SECTION_COUNTS[1]), reason, `rule check must reject ${name} for the right reason`);
}
passes.push(`mutation check: ${Object.keys(mutations).length} broken copies of TM01 are rejected`);

// ---- Mutation check for the visible-text rule: what the reader would see if a table or an escape did not parse.
const textMutations = {
  'a table that stayed paragraphs of raw rows': [(r) => { r.blocks.push({ kind: 'p', text: '| | Kiri | Kanan |' }); }, /raw text/],
  'a table separator shown as text': [(r) => { r.blocks.push({ kind: 'p', text: 'Judul\n|--|------|-----|' }); }, /separator/],
  'literal bold markers in a table header': [(r) => { r.blocks.push({ kind: 'table', headers: ['', '**Kiri**'], rows: [['a', 'b']] }); }, /literal "\*\*"/],
  'a literal escape in a table header': [(r) => { r.blocks.push({ kind: 'table', headers: ['', '1\\. Kiri'], rows: [['a', 'b']] }); }, /backslash-dot/],
};
for (const [name, [mutate, reason]] of Object.entries(textMutations)) {
  const mutant = clone();
  mutate(mutant);
  assert.throws(() => checkRenderedText(mutant, 1, renderer), reason, `visible-text rule must reject ${name} for the right reason`);
}
passes.push(`mutation check: ${Object.keys(textMutations).length} broken copies of TM01 are rejected by the visible-text rule`);
await renderer.close();

console.log(JSON.stringify({ pass: true, checks: passes.length, passes }, null, 2));
