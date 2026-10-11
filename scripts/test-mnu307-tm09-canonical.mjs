import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
import { testCanonical, loadReading } from './mnu307-canonical-lib.mjs';
import { auditDiagram } from './mnu307-diagram-geometry.mjs';
import { flatten } from './mnu307-content-lib.mjs';
await testCanonical(9);

// Numbering guard: week 8 is the UTS review, so the first post-UTS case sits in slot 9 and the seven cases run 9..15.
const bundle = async file => {
  const result = await build({ entryPoints: [file], bundle: true, write: false, platform: 'node', format: 'esm' });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
};
const { MANSTRAT_READINGS, MANSTRAT_REVIEW_READINGS } = await bundle('src/data/manstrat/manstratData.ts');
assert.deepEqual(Object.keys(MANSTRAT_READINGS).map(Number), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 'reading keys run 1 to 15');
assert.equal(MANSTRAT_READINGS[9].tm, 9);
assert.match(MANSTRAT_READINGS[9].title, /^THEORYBRIDGE\.COM/);
assert.equal(MANSTRAT_READINGS[8], MANSTRAT_REVIEW_READINGS.uts, 'week 8 stays the UTS review');
assert.equal(MANSTRAT_REVIEW_READINGS.uas.tm, 16, 'UAS review key is 16, after the seven cases');
assert.equal(MANSTRAT_READINGS[15].tm, 15);
assert.notEqual(MANSTRAT_READINGS[9], MANSTRAT_READINGS[8]);
const catalog = fs.readFileSync('src/data/courseData.ts', 'utf8').replace(/\r\n/g, '\n');
const cards = catalog.match(/const MNU307_TM8_14 = materi\(\[\n((?: {2}\[[^\n]*\],\n){7})\], 9\);/);
assert.ok(cards, 'MNU307 TM9–TM15 catalog block starts at 9 with seven cases');
const titles = cards[1].trim().split('\n').map(s => s.match(/'Studi Kasus: ([^']+|H&M\\'s Dilemma)'/)?.[1]);
assert.equal(titles[0], 'THEORYBRIDGE.COM');
assert.equal(titles.length, 7);

const reading = await loadReading(9);
assert.equal(reading.tm, 9);
const figs = flatten(reading.blocks).filter(b => b.kind === 'figure');
assert.equal(figs.length, 9);
const svgOf = i => new JSDOM(figs[i].svg).window.document.querySelector('svg');
for (const [i, figure] of figs.entries()) {
  const result = auditDiagram(svgOf(i));
  assert.deepEqual(result.issues, [], `${figure.title}: routing`);
}
const node = (svg, label) => {
  const tag = svg.match(new RegExp('<rect[^>]*data-node="' + label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"[^>]*>'))?.[0];
  assert.ok(tag, 'missing node ' + label);
  return { x: Number(tag.match(/ x="([\d.]+)"/)[1]), y: Number(tag.match(/ y="([\d.]+)"/)[1]) };
};
const edge = (svg, from, to) => svg.match(new RegExp('<path data-edge="' + (from + ' → ' + to).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"[^>]*>'))?.[0];
const edgeCount = svg => (svg.match(/data-edge=/g) ?? []).length;
const dashedCount = svg => (svg.match(/stroke-dasharray=/g) ?? []).length;

// Five steps run in the book's order; only the analysis → problem feedback is dashed.
const steps = ['Become Familiar with the Material', 'Identify Problems', 'Conduct Strategic Analyses', 'Propose Alternative Solutions', 'Make Recommendations'];
steps.slice(1).forEach((s, i) => assert.ok(node(figs[2].svg, steps[i]).y < node(figs[2].svg, s).y && edge(figs[2].svg, steps[i], s)));
assert.match(edge(figs[2].svg, 'Conduct Strategic Analyses', 'Identify Problems'), /stroke-dasharray/);
assert.equal(edgeCount(figs[2].svg), 5); assert.equal(dashedCount(figs[2].svg), 1);
// Differentiate, Speculate, Integrate and the four factors hang off one Case Analysis node with no ordering between siblings.
for (const [i, labels] of [[1, ['Differentiate', 'Speculate', 'Integrate']], [3, ['People', 'Opportunity', 'Context', 'Risk and Reward']]]) {
  assert.equal(edgeCount(figs[i].svg), labels.length); assert.equal(dashedCount(figs[i].svg), 0);
  labels.forEach(label => assert.ok(edge(figs[i].svg, 'Case Analysis', label)));
  assert.equal(new Set(labels.map(label => node(figs[i].svg, label).y)).size, 1, 'siblings share one row');
}
// Research-practice gap: two separate challenge paths from research to practitioners.
for (const challenge of ['Knowledge Translation Problem', 'Lost Before Translation Problem']) {
  assert.ok(edge(figs[4].svg, 'Management Research', challenge)); assert.ok(edge(figs[4].svg, challenge, 'Practitioners'));
}
assert.equal(edgeCount(figs[4].svg), 4);
// Freemium: Dropbox carries source numbers, TheoryBridge.com carries none for paid conversion.
assert.ok(edge(figs[5].svg, 'Free Users: lebih dari 600 juta', 'Paid Subscribers: sekitar 14 juta (2,2%)'));
assert.ok(edge(figs[5].svg, 'Free Trial Sign-ups: sekitar 2.000 (10 sample briefs)', 'Paid Subscribers: tidak dinyatakan'));
assert.doesNotMatch(figs[5].svg, /Paid Subscribers: tidak dinyatakan[^<]*2,2%/);
// Team process: failed first attempt leads to the second, then to the briefs.
assert.equal(edgeCount(figs[6].svg), 4);
assert.ok(edge(figs[6].svg, 'Senior Professor as Editor and Five MBAs as Writers', 'Work Never Used'));
assert.ok(edge(figs[6].svg, 'Work Never Used', 'Seasoned Editor and Ph.D. Faculty Writers'));
// Dual strategy: both branches end at Bill's two questions.
assert.equal(edgeCount(figs[7].svg), 9); assert.equal(dashedCount(figs[7].svg), 0);
assert.ok(edge(figs[7].svg, 'Dual Strategy', 'Individuals')); assert.ok(edge(figs[7].svg, 'Dual Strategy', 'Corporations'));
assert.equal((figs[7].svg.match(/data-edge="[^"]* → Questions from Bill[^"]*"/g) ?? []).length, 2);
// Symptom to recommendation: data feeds back to the problem statement.
assert.match(edge(figs[8].svg, 'Conversion and Usage Data', 'Problem Statement'), /stroke-dasharray/);
assert.equal(dashedCount(figs[8].svg), 1);

// Source figures and the illustrative arithmetic printed in the text.
const text = JSON.stringify(reading);
for (const needle of ['USD 359,40', '55,6', '111,3', '56 pelanggan', '112 pelanggan', 'USD 15.814', 'USD 50.000', '636 juta', '2,33%']) assert.ok(text.includes(needle), 'missing ' + needle);
assert.equal(+(29.95 * 12).toFixed(2), 359.4);
assert.equal(Math.ceil(20000 / 359.4), 56); assert.equal(Math.ceil(40000 / 359.4), 112);
assert.equal(Math.round(0.022 * 2000 * 359.4), 15814); assert.equal(200 * 250, 50000);
assert.equal(Math.round(14 / 0.022), 636); assert.equal((14 / 600 * 100).toFixed(2), '2.33');
for (const fact of ['USD 625.000', 'USD 29,95', 'USD 250', 'USD 10.000', 'USD 20.000', '500 sampai 750', 'sekitar 2.000', 'sekitar 700', '[hal. C12]']) assert.ok(text.includes(fact), 'missing source fact ' + fact);
assert.doesNotMatch(text, /\$|—/, 'no literal dollar sign or em dash');
console.log('MNU307 TM09 PASS: numbering guard, 9 audited diagrams, source figures and illustrative arithmetic');
