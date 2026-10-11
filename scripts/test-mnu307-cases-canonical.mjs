import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
import { testCanonical, loadReading } from './mnu307-canonical-lib.mjs';
import { auditDiagram } from './mnu307-diagram-geometry.mjs';
import { flatten } from './mnu307-content-lib.mjs';
import { LAYOUTS } from './mnu307-case-layouts.mjs';

// Post-UTS cases TM10 to TM15: canonical source, geometry of every figure, numbering guard and key source figures.
const bundle = async file => {
  const result = await build({ entryPoints: [file], bundle: true, write: false, platform: 'node', format: 'esm' });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
};
const { MANSTRAT_READINGS, MANSTRAT_REVIEW_READINGS } = await bundle('src/data/manstrat/manstratData.ts');
assert.deepEqual(Object.keys(MANSTRAT_READINGS).map(Number), Array.from({ length: 15 }, (_, i) => i + 1), 'reading keys run 1 to 15');
assert.equal(MANSTRAT_READINGS[8], MANSTRAT_REVIEW_READINGS.uts, 'week 8 stays the UTS review');
assert.equal(MANSTRAT_REVIEW_READINGS.uas.tm, 16, 'UAS review key moved to 16');
assert.ok(!Object.values(MANSTRAT_READINGS).includes(MANSTRAT_REVIEW_READINGS.uas), 'UAS review is not one of the seven cases');
const postUts = Object.values(MANSTRAT_READINGS).filter(r => r.tm >= 9);
assert.equal(postUts.length, 7, 'seven post-UTS readings');

const titles = { 9: /^THEORYBRIDGE/, 10: /^H&M/, 11: /^Louis Vuitton/, 12: /^Emirates/, 13: /^Samsung/, 14: /^Alibaba/, 15: /^Procter & Gamble/ };
const needles = {
  10: ['SEK 60.018 juta'], 11: ['41,6%'], 12: ['AED 15.021'], 13: ['KRW 279.604'],
  14: ['RMB 717.289 juta', '81,2%', '40,7%', '51,9%'],
  15: ['USD 76.118', 'USD 17.986', '51,2%', '23,6%', '14,5%', '220.882'],
};
const expectedEdges = layout => layout.kind === 'flow' ? layout.labels.length - 1 + (layout.back?.length ?? 0) : layout.kids.length;
for (let tm = 10; tm <= 15; tm++) {
  await testCanonical(tm);
  const reading = await loadReading(tm);
  assert.equal(MANSTRAT_READINGS[tm].tm, tm);
  assert.match(MANSTRAT_READINGS[tm].title, titles[tm], `TM${tm} title`);
  const figs = flatten(reading.blocks).filter(b => b.kind === 'figure');
  const ids = Object.keys(LAYOUTS).filter(k => k.startsWith(`V-TM${tm}-`)).sort();
  assert.equal(figs.length, ids.length, `TM${tm} figures match layouts`);
  assert.ok(figs.length >= 8, `TM${tm} figure count`);
  figs.forEach((figure, i) => {
    const id = ids[i];
    const layout = LAYOUTS[id];
    assert.ok(layout, 'layout for ' + id);
    const svg = new JSDOM(figure.svg).window.document.querySelector('svg');
    const audit = auditDiagram(svg);
    assert.deepEqual(audit.issues, [], `${id}: routing`);
    if (layout.kind === 'split') return; // plain side-by-side comparison: no edges to count
    assert.equal((figure.svg.match(/data-edge=/g) ?? []).length, expectedEdges(layout), `${id}: edge count`);
    assert.equal((figure.svg.match(/stroke-dasharray=/g) ?? []).length, layout.back?.length ?? 0, `${id}: dashed edges`);
  });
  if (tm >= 11) assert.equal(LAYOUTS[`V-TM${tm}-09`].back.length, 1, `TM${tm} last figure keeps one feedback edge`);
  const text = JSON.stringify(reading);
  for (const needle of needles[tm]) assert.ok(text.includes(needle), `TM${tm} missing ${needle}`);
  assert.doesNotMatch(text, /\$|—/, `TM${tm}: no literal dollar sign or em dash`);
}

// TM15 arithmetic printed in the text (percentages are hasil hitungan from Exhibit 2).
const pct = (a, b) => (a / b * 100).toFixed(1);
assert.equal(pct(76118 - 37108, 76118), '51.2'); assert.equal(pct(17986, 76118), '23.6'); assert.equal(pct(14352, 76118), '18.9');
assert.equal(pct(76118 - 70950, 70950), '7.3'); assert.equal(pct(17986 - 15706, 15706), '14.5');
assert.equal(pct(14352, 46654), '30.8'); assert.equal(pct(119307 - 46654, 119307), '60.9');
// TM14 arithmetic: interest and investment income share of operating income.
assert.equal(pct(72794, 89678), '81.2');
console.log('MNU307 TM10 to TM15 PASS: canonical source, audited diagrams, numbering guard, source figures');
