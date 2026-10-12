import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

// Transcribed from S1 Akuntansi tables, PDF pp. 102–104 (printed pp. 87–89), then checked visually.
const fixture = JSON.parse(readFileSync('scripts/fixtures/accounting-handbook-2025.json', 'utf8'));
const bundle = await build({
  stdin: { contents: [
    "export { SEMESTERS, ALL_COURSES } from './src/data/courseData.ts';",
    "export { canonicalCourseCode, canonicalCoursePath } from './src/lib/legacyCourseCodes.ts';",
    "export { loadCourseContent } from './src/data/courses/courseRegistry.ts';",
    "export { getQuiz, getQuizSets } from './src/data/quizzes/index.ts';",
    "export { getFlashcards } from './src/data/flashcards/registry.ts';",
    "export { getBankSoal, getBankSoalSets } from './src/data/banksoal/nonPte.ts';",
  ].join('\n'), resolveDir: process.cwd(), loader: 'ts' },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
  plugins: [{ name: 'raw', setup(builder) {
    builder.onResolve({ filter: /\?raw$/ }, a => ({ path: path.resolve(a.resolveDir, a.path.slice(0, -4)), namespace: 'raw' }));
    builder.onLoad({ filter: /.*/, namespace: 'raw' }, a => ({ contents: readFileSync(a.path, 'utf8'), loader: 'text' }));
  } }],
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const courses = mod.ALL_COURSES.map(x => x.course);
const resolve = code => {
  const wanted = mod.canonicalCourseCode(code).toUpperCase();
  return courses.find(c => c.code.toUpperCase() === wanted || c.newCode?.toUpperCase() === wanted);
};
for (const expected of fixture.semesters) {
  const semester = mod.SEMESTERS.find(s => s.number === expected.number);
  const rows = semester.groups.flatMap(g => g.courses);
  assert.equal(rows.length, 7, `semester ${expected.number}: all handbook rows`);
  assert.equal(semester.totalSks, expected.totalSks);
  assert.equal(rows.reduce((n, c) => n + c.sks, 0), semester.totalSks, 'total must equal its rows');
  for (const row of expected.courses) {
    const actual = rows.find(c => c.code === row.code);
    assert.ok(actual, `semester ${expected.number}: ${row.code}`);
    for (const field of ['newCode', 'name', 'sks', 'prasyarat']) assert.equal(actual[field] ?? null, row[field], `${row.code}.${field}`);
    for (const code of [row.code, row.newCode].filter(Boolean)) {
      assert.equal(resolve(code)?.code, row.code, `route ${code}`);
      assert.equal(resolve(code.toLowerCase())?.code, row.code, `lowercase route ${code}`);
    }
    if (actual.prasyarat) assert.ok(resolve(actual.prasyarat.split(' ')[0]), `${row.code} prerequisite resolves`);
  }
}
const codes = courses.flatMap(c => [c.code, c.newCode].filter(Boolean));
assert.equal(new Set(codes).size, codes.length, 'short/FEB routes are unique across the whole catalog');
assert.ok(!courses.some(c => ['AKM202', 'ADA301', 'MNS301', 'MNM301'].includes(c.code)), 'no superseded public catalog entries');
assert.equal(resolve('AKM202')?.code, 'AKM301');
assert.equal(resolve('ADA301')?.code, 'AKS301');
assert.equal(mod.canonicalCoursePath('/course/AKM202/'), '/course/AKM301/');
assert.equal(mod.canonicalCoursePath('/course/ADA301'), '/course/AKS301');
assert.equal(mod.canonicalCoursePath('/course/AKS301'), null, 'official Analytics route is independent of SIA');
assert.equal(await mod.loadCourseContent('AKM202'), await mod.loadCourseContent('AKM301'), 'management readings and stable IDs survive rename');
for (const fn of ['getQuiz', 'getQuizSets', 'getFlashcards', 'getBankSoal', 'getBankSoalSets']) {
  assert.ok(mod[fn]('AKM301').length > 0, `${fn}: management practice is accessible`);
  assert.deepEqual(mod[fn]('AKM301'), mod[fn]('AKM202'), `${fn}: every legacy item/set is preserved`);
  assert.deepEqual(mod[fn]('AKS301'), [], `${fn}: Analytics must not inherit SIA practice`);
}
assert.deepEqual((await mod.loadCourseContent('AKS301')).readings, {});
assert.ok((await mod.loadCourseContent('SII306')).readings[1], 'SIA remains accessible');
assert.ok((await mod.loadCourseContent('MNU307')).readings[15], 'merged Claude TM15 remains accessible');
console.log('Accounting handbook PASS: 28 courses, semester totals 20/21/20/21, prerequisites, unique short/FEB routes, independent Analytics and intact management material.');
