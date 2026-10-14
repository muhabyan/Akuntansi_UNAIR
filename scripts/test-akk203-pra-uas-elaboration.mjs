// Check the active ASP route, historical pre-UTS preservation, and corrected teaching regressions.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

const result = await build({
  stdin: { contents: "export {loadCourseContent} from './src/data/courses/courseRegistry'; export {AKS201_READINGS,AKS201_REVIEW_READINGS} from './src/data/asp/aspData';", resolveDir: process.cwd(), loader: 'ts' },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent', plugins: [{
    name: 'raw-reading', setup(b) {
      b.onResolve({ filter: /\?raw$/ }, a => ({ path: path.resolve(a.resolveDir, a.path.slice(0, -4)), namespace: 'raw' }));
      b.onLoad({ filter: /.*/, namespace: 'raw' }, a => ({ contents: fs.readFileSync(a.path, 'utf8'), loader: 'text' }));
    },
  }],
});
const m = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
const course = await m.loadCourseContent('AKK203');
const alias = await m.loadCourseContent('AKS201');
assert.deepEqual(course, alias, 'Retired and current course codes serve the same revised material');
for (let tm = 1; tm <= 7; tm++) assert.deepEqual(course.readings[tm], m.AKS201_READINGS[tm]);
assert.deepEqual(course.reviews.uts, { ...m.AKS201_REVIEW_READINGS.uts, tm: 0 }, 'Existing registry normalizes the UTS review number to zero');
assert.equal(course.readings[12], undefined, 'Do not invent a completed standalone TM12');
const flat = bs => bs.flatMap(b => [b, ...flat(b.blocks ?? []), ...flat(b.answer ?? [])]);
for (const tm of [8, 9, 10, 11, 13, 14]) {
  const r = course.readings[tm];
  assert.equal(r.tm, tm); assert.equal(r.layout, 'layered');
  assert.notDeepEqual(r, m.AKS201_READINGS[tm], 'Active route must supersede the old abbreviated reading');
  const blocks = flat(r.blocks);
  assert.ok(blocks.some(b => b.kind === 'self-check') && blocks.some(b => b.kind === 'pendalaman'));
  assert.ok(blocks.some(b => b.kind === 'solution-reveal' && /Ilustrasi penulis/.test(b.prompt)));
  for (const b of blocks.filter(b => b.kind === 'table')) {
    assert.ok(b.title && b.caption);
    b.rows.forEach(row => assert.equal(row.length, b.headers.length));
  }
}
// A release of donor restrictions moves columns, never creates new total net assets.
const netAssets = flat(course.readings[11].blocks).find(b => b.kind === 'table' && b.title === 'Rekonsiliasi aset neto ilustratif');
const amount = s => s.startsWith('(') ? -Number(s.slice(1, -1)) : Number(s);
const rows = netAssets.rows.map(row => row.slice(1).map(amount));
rows.forEach(([free, restricted, total]) => assert.equal(free + restricted, total));
for (let c = 0; c < 3; c++) assert.equal(rows.slice(0, -1).reduce((n, row) => n + row[c], 0), rows.at(-1)[c]);
assert.deepEqual(rows[2], [25, -25, 0]);
assert.deepEqual(rows.at(-1), [30, 35, 65]);
const text = tm => JSON.stringify(course.readings[tm]);
assert.match(text(9), /target outcome tidak tersedia/, 'Missing outcome target must not become a fabricated effectiveness ratio');
assert.match(text(10), /10 April 2028/, 'SPKN adoption and effective dates stay distinct');
assert.match(text(11), /60% adalah asumsi soal/);
assert.doesNotMatch(text(11), /minimal 60% dana bantuan wajib/);
assert.match(text(13), /PTN-BH mempunyai status hukum dan tata kelola berbeda/);
assert.match(text(14), /belum membuktikan penurunan emisi/);
console.log('ASP active pra-UAS PASS: six revised readings, alias routing, pre-UTS preservation, net-asset rollforward and corrected source regressions.');
