// Public codes follow the Semester III table supplied by the user. Legacy file names and item IDs stay stable.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { build } from 'esbuild';
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

const expected = [
  ['MNU108', 'FEB25603011', 'Pengantar Manajemen', 'MNU101 (L)'],
  ['MNK102', 'FEB25603012', 'Manajemen Keuangan', 'MNU101 (L)'],
  ['AKK202', 'FEB25603013', 'Akuntansi Keuangan Menengah II', 'AKK106 (L)'],
  ['AKK203', 'FEB25603014', 'Akuntansi Sektor Publik', 'AKK106 (L)'],
  ['PJK301', 'FEB25603015', 'Perpajakan II', 'PJK201 (L)'],
  ['SII306', 'FEB25603016', 'Sistem Informasi Akuntansi', 'AKK106 (L)'],
  ['AKA201', 'FEB25603017', 'Pengauditan Berbasis Risiko I', 'AKK201 (T)'],
];
const aliases = [['AKS201', 'AKK203'], ['MNK201', 'MNK102']];
const memory = (entries = {}) => {
  const map = new Map(Object.entries(entries).map(([k, v]) => [k, typeof v === 'string' ? v : JSON.stringify(v)]));
  return {
    map, get length() { return map.size; }, key: i => [...map.keys()][i] ?? null,
    getItem: key => map.get(key) ?? null,
    setItem: (key, value) => map.set(key, String(value)), removeItem: key => map.delete(key),
  };
};
globalThis.localStorage = memory();
globalThis.__semester3Mock = { user: null, rows: [], deletes: [], inserts: [], schedules: [] };
const mock = globalThis.__semester3Mock;
const query = (table) => {
  const q = {
    select: () => q, eq: () => q, order: () => q,
    then: (resolve, reject) => Promise.resolve({ data: table === 'study_schedules' ? mock.schedules : mock.rows, error: null }).then(resolve, reject),
  };
  return q;
};
mock.supabase = { from: table => ({
  select: () => query(table),
  delete: () => ({ match: match => ({ in: async (field, values) => { mock.deletes.push({ match, field, values }); } }) }),
  insert: row => {
    mock.inserts.push(row);
    if (table === 'study_schedules') {
      mock.schedules.push(...row.map((s, i) => ({ ...s, id: `new-${i}` })));
      return { select: () => query(table) };
    }
    return Promise.resolve({ error: null });
  },
}) };

const bundle = await build({
  stdin: { contents: [
    "export { ALL_COURSES, SEMESTERS } from './src/data/courseData.ts';",
    "export { loadCourseContent } from './src/data/courses/courseRegistry.ts';",
    "export { getFlashcards } from './src/data/flashcards/registry.ts';",
    "export { getQuiz, getQuizSets } from './src/data/quizzes/index.ts';",
    "export { getBankSoal, getBankSoalSets } from './src/data/banksoal/nonPte.ts';",
    "export { canonicalCourseCode, canonicalCoursePath, migrateLegacyCourseStorage } from './src/lib/legacyCourseCodes.ts';",
    "export { useStudyProgress, materialKey } from './src/hooks/useStudyProgress.ts';",
    "export { useStudySchedule } from './src/hooks/useStudySchedule.ts';",
    "export { RELEASES } from './src/data/releaseNotes.ts';",
  ].join('\n'), resolveDir: process.cwd(), loader: 'ts' },
  bundle: true, write: false, format: 'cjs', platform: 'node', packages: 'external', logLevel: 'silent',
  plugins: [{ name: 'source-and-mocks', setup(builder) {
    builder.onResolve({ filter: /\?raw$/ }, a => ({ path: path.resolve(a.resolveDir, a.path.slice(0, -4)), namespace: 'raw' }));
    builder.onLoad({ filter: /.*/, namespace: 'raw' }, a => ({ contents: readFileSync(a.path, 'utf8'), loader: 'text' }));
    builder.onResolve({ filter: /contexts\/AuthContext$/ }, () => ({ path: 'auth', namespace: 'mock' }));
    builder.onResolve({ filter: /lib\/supabase$/ }, () => ({ path: 'supabase', namespace: 'mock' }));
    builder.onLoad({ filter: /.*/, namespace: 'mock' }, a => ({ contents: a.path === 'auth'
      ? 'export const useAuth = () => ({user: globalThis.__semester3Mock.user});'
      : 'export const supabase = globalThis.__semester3Mock.supabase;', loader: 'js' }));
  } }],
});
const holder = { exports: {} };
new Function('require', 'module', 'exports', bundle.outputFiles[0].text)(createRequire(import.meta.url), holder, holder.exports);
const mod = holder.exports;
const courses = mod.ALL_COURSES.map(x => x.course);
const sem3 = mod.SEMESTERS.find(x => x.id === 'sem3').groups.flatMap(x => x.courses);
assert.equal(sem3.length, 7);
const resolve = code => {
  const wanted = mod.canonicalCourseCode(code).toUpperCase();
  return courses.find(c => c.code.toUpperCase() === wanted || c.newCode?.toUpperCase() === wanted);
};
const allRouteCodes = courses.flatMap(c => [c.code, c.newCode].filter(Boolean));
assert.equal(new Set(allRouteCodes).size, allRouteCodes.length, 'public course codes are unique across semesters');
for (const [code, newCode, name, prerequisite] of expected) {
  const course = sem3.find(c => c.code === code);
  assert.ok(course, code);
  assert.equal(course.newCode, newCode);
  assert.equal(course.name, name);
  assert.equal(course.prasyarat, prerequisite);
  assert.equal(course.sks, 3);
  for (const route of [code, newCode, code.toLowerCase(), newCode.toLowerCase()]) assert.equal(resolve(route)?.code, code);
  assert.ok((await mod.loadCourseContent(code)).readings[1], `${code} reading loaded`);
  for (const fn of ['getQuiz', 'getFlashcards', 'getBankSoal']) assert.ok(mod[fn](code).length > 0, `${code} ${fn}`);
  for (const fn of ['getQuizSets', 'getBankSoalSets']) assert.ok(mod[fn](code).every(s => s.items.length > 0), `${code} nonempty sets`);
}
assert.equal(sem3.reduce((n, c) => n + c.sks, 0), 21);
assert.equal(courses.find(c => c.code === 'AKM301').newCode, 'FEB25603020', 'handbook Semester IV confirms the replacement');
const releaseIndex = mod.RELEASES.findIndex(release => release.version === 'v1.3.5');
assert.ok(releaseIndex >= 0, 'course-code release is retained');
assert.equal(mod.RELEASES[releaseIndex + 1].version, 'v1.3.4', 'earlier release order is retained');
for (const [old, current] of aliases) {
  assert.equal(resolve(old)?.code, current);
  assert.equal(mod.canonicalCoursePath(`/course/${old.toLowerCase()}/`), `/course/${current}/`);
  assert.equal(mod.canonicalCoursePath(`/course/${old}0`), null);
  assert.equal(mod.canonicalCoursePath(`/course/${current}`), null);
  assert.equal(await mod.loadCourseContent(old), await mod.loadCourseContent(current), 'identical cached material object');
  for (const fn of ['getQuiz', 'getFlashcards', 'getBankSoal', 'getQuizSets', 'getBankSoalSets']) {
    assert.deepEqual(mod[fn](old), mod[fn](current), `${old} keeps every item, ID and set`);
  }
  const progressKey = 'akuntansi-feb-unair:study-progress';
  const store = memory({
    [progressKey]: { [`${old}:tm1`]: true, [`${current}:tm2`]: true, 'AKK202:tm1': true },
    [`flashcard-srs-${old}`]: { retained: { n: 1 }, conflict: { n: 2 } },
    [`flashcard-srs-${current}`]: { conflict: { n: 99 } },
    [`flashcard-stars-${old}`]: { retained: true },
    [`exam_session_${old}_uas_5400`]: { picks: { 0: 1 }, examDeadlineMs: 12345, datasetFingerprint: 'unchanged' },
  });
  assert.equal(mod.migrateLegacyCourseStorage(store), 4);
  assert.equal(mod.migrateLegacyCourseStorage(store), 0, 'migration is idempotent');
  assert.deepEqual(JSON.parse(store.getItem(progressKey)), { [`${current}:tm1`]: true, [`${current}:tm2`]: true, 'AKK202:tm1': true });
  assert.deepEqual(JSON.parse(store.getItem(`flashcard-srs-${current}`)), { retained: { n: 1 }, conflict: { n: 99 } });
  assert.deepEqual(JSON.parse(store.getItem(`flashcard-stars-${current}`)), { retained: true });
  assert.equal(JSON.parse(store.getItem(`exam_session_${current}_uas_5400`)).examDeadlineMs, 12345, 'deadline retained');
}

// Exercise the authenticated progress hook with old and current database rows. No live database is contacted.
mock.user = { id: 'test-user' };
mock.rows = [{ course_code: 'AKS201', chapter_id: '2' }, { course_code: 'MNK201', chapter_id: '3' }];
let hook;
const Harness = () => { hook = mod.useStudyProgress(); return null; };
let root;
await act(async () => { root = TestRenderer.create(React.createElement(Harness)); });
assert.equal(hook.isDone(mod.materialKey('AKK203', 2)), true);
assert.equal(hook.isDone(mod.materialKey('MNK102', 3)), true);
await act(async () => { await hook.toggle(mod.materialKey('AKK203', 2)); });
assert.equal(hook.isDone('AKK203:tm2'), false);
assert.deepEqual(mock.deletes[0], { match: { user_id: 'test-user', chapter_id: '2' }, field: 'course_code', values: ['AKK203', 'AKS201'] });
await act(async () => { await hook.toggle(mod.materialKey('MNK201', 4)); });
assert.deepEqual(mock.inserts[0], { user_id: 'test-user', course_code: 'MNK102', chapter_id: '4' });
await act(async () => { root.unmount(); });
globalThis.window = new EventTarget();
mock.schedules = [{ id: 'existing', course_code: 'MNK201', activity_id: 'tm-1', date: '2026-10-12', time: '09:00' }];
const ScheduleHarness = () => { hook = mod.useStudySchedule(); return null; };
await act(async () => { root = TestRenderer.create(React.createElement(ScheduleHarness)); });
assert.equal(hook.schedules[0].course_code, 'MNK102', 'existing account schedule uses current course');
assert.equal(mock.schedules[0].course_code, 'MNK201', 'reading does not rewrite database records');
await act(async () => { await hook.addSchedules([{ course_code: 'AKS201', activity_id: 'tm-2', date: '2026-10-12', time: '10:00' }]); });
assert.equal(mock.inserts[1][0].course_code, 'AKK203', 'new schedules store current code');
assert.ok(hook.schedules.some(s => s.course_code === 'AKK203'));
await act(async () => { root.unmount(); });
delete globalThis.__semester3Mock;
console.log('Semester III codes PASS: seven mappings and prerequisites, unique routes, unchanged practice IDs, aliases, local storage, authenticated progress and schedules.');
