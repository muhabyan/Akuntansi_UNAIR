// Check the active ASP route, historical pre-UTS preservation, and corrected teaching regressions.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';

const result = await build({
  stdin: { contents: "export {loadCourseContent} from './src/data/courses/courseRegistry'; export {AKS201_READINGS,AKS201_REVIEW_READINGS} from './src/data/asp/aspData'; export * from './src/data/quizzes/aks201'; export * from './src/data/flashcards/aks201'; export * from './src/data/banksoal/aks201';", resolveDir: process.cwd(), loader: 'ts' },
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
assert.equal(course.readings, alias.readings, 'Alias must retain the same cached reading collection');
for (let tm = 1; tm <= 7; tm++) assert.deepEqual(course.readings[tm], m.AKS201_READINGS[tm]);
assert.deepEqual(course.reviews.uts, { ...m.AKS201_REVIEW_READINGS.uts, tm: 0 }, 'Existing registry normalizes the UTS review number to zero');
assert.ok(course.readings[12], 'The reviewed canonical TM12 must be reachable through the active route');
const flat = bs => bs.flatMap(b => [b, ...flat(b.blocks ?? []), ...flat(b.answer ?? [])]);
for (const tm of [8, 9, 10, 11, 12, 13, 14]) {
  const r = course.readings[tm];
  assert.equal(r.tm, tm); assert.equal(r.layout, 'layered');
  assert.deepEqual(r.blocks.slice(0, m.AKS201_READINGS[tm].blocks.length), m.AKS201_READINGS[tm].blocks, 'Canonical source-audited blocks lead without replacement or reordering');
  const blocks = flat(r.blocks);
  assert.ok(blocks.some(b => b.kind === 'self-check') && blocks.some(b => b.kind === 'pendalaman'));
  if (tm !== 12) assert.ok(blocks.some(b => b.kind === 'example' && b.title.startsWith('Contoh terbimbing:') && b.blocks.some(c => c.kind === 'p' && /Ilustrasi penulis/.test(c.text))), 'Earlier worked teaching cases remain available as optional practice');
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
assert.match(text(12), /60% adalah asumsi soal/);
assert.doesNotMatch(text(12), /minimal 60% dana bantuan wajib|TM12 belum tersedia/);
assert.match(text(13), /PTN-BH mempunyai status hukum dan tata kelola berbeda/);
assert.match(text(14), /belum membuktikan penurunan emisi/);
const baseline = JSON.parse(fs.readFileSync('content-pipeline/AKK203/elaboration-20261014/pre-uts-baseline.json', 'utf8'));
const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
assert.equal(hash(m.AKS201_QUIZ_UTS), baseline.quiz);
assert.equal(hash(m.AKS201_FC.filter(c => c.phase !== 'pra-uas')), baseline.cards);
assert.equal(hash(m.AKS201_BANK_UTS), baseline.bank);
assert.equal(m.AKS201_QUIZ_UAS.length, 60);
assert.equal(m.AKS201_FC.filter(c => c.phase === 'pra-uas').length, 42);
assert.equal(m.AKS201_BANK_UAS.length, 14);
for (const q of m.AKS201_QUIZ_UAS) {
  assert.equal(new Set(q.options).size, 4);
  assert.ok(q.answer >= 0 && q.answer < 4);
  assert.doesNotMatch(q.q, /paling sedikit 60%/);
  assert.ok(q.topic && q.explanation);
}
assert.ok(m.AKS201_QUIZ_UAS.filter(q => q.q.includes('SAPP')).every(q => q.tm === 8));
assert.equal(new Set(m.AKS201_FC.map(c => c.id)).size, m.AKS201_FC.length);
const partyCases = m.AKS201_BANK_UAS.filter(b => b.scope.startsWith('TM 12:'));
assert.equal(partyCases.length, 2);
for (const partyCase of partyCases) assert.doesNotMatch(partyCase.instructions.join(' '), /minimal 60%/);
console.log('ASP active pra-UAS PASS: seven canonical readings, optional prior examples, alias routing, pre-UTS preservation, net-asset rollforward and corrected source regressions.');
