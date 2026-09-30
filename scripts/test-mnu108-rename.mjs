// MNM101/MNM201 -> MNU108 rename guard. Pengantar Manajemen is catalogued as MNU108 (FEB25603011);
// the old codes MNM101 and MNM201 keep working for old URLs and for data this browser saved before the rename.
// Checks the renamed wiring, the /course/MNM101 and /course/MNM201 aliases, the localStorage shim
// (src/lib/legacyCourseCodes.ts), and that FEB25603011 now belongs to one course only.
//
// Scope: this PR renames the wiring, not the data files. src/data/manajemen/, src/data/{banksoal,quizzes,flashcards}/mnm101.ts
// and their MNM101_* exports keep their names, the same way PJK301 still lives in src/data/pjk2/.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

const bundle = await build({
  stdin: {
    contents: [
      "export { LEGACY_COURSE_CODES, canonicalCourseCode, canonicalCoursePath, migrateLegacyCourseStorage } from './src/lib/legacyCourseCodes.ts';",
      "export { ALL_COURSES } from './src/data/courseData.ts';",
      "export { loadCourseContent } from './src/data/courses/courseRegistry.ts';",
      "export { getFlashcards } from './src/data/flashcards/registry.ts';",
      "export { getQuiz, getQuizSets } from './src/data/quizzes/index.ts';",
      "export { getBankSoal, getBankSoalSets } from './src/data/banksoal/nonPte.ts';",
    ].join('\n'),
    resolveDir: process.cwd(), loader: 'ts',
  },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
  plugins: [{
    name: 'vite-raw',
    setup(builder) {
      builder.onResolve({ filter: /\?raw$/ }, (args) => ({
        path: path.resolve(args.resolveDir, args.path.slice(0, -'?raw'.length)), namespace: 'raw',
      }));
      builder.onLoad({ filter: /.*/, namespace: 'raw' }, (args) => ({ contents: readFileSync(args.path, 'utf8'), loader: 'text' }));
    },
  }],
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const { LEGACY_COURSE_CODES, canonicalCourseCode, canonicalCoursePath, migrateLegacyCourseStorage, ALL_COURSES, loadCourseContent } = mod;
const { getFlashcards, getQuiz, getQuizSets, getBankSoal, getBankSoalSets } = mod;
const read = (file) => readFileSync(file, 'utf8');

// ---- The alias: /course/MNM101 and /course/MNM201 open the same course as /course/MNU108 and /course/FEB25603011.
assert.equal(LEGACY_COURSE_CODES.MNM101, 'MNU108');
assert.equal(LEGACY_COURSE_CODES.MNM201, 'MNU108');
assert.equal(canonicalCourseCode('MNM101'), 'MNU108');
assert.equal(canonicalCourseCode('mnm201'), 'MNU108');
for (const code of ['MNU108', 'FEB25603011', 'MNM106', 'MNM107', 'AKK202']) {
  assert.equal(canonicalCourseCode(code), code, `${code} must not be remapped`);
}

const appSource = read('src/App.tsx');
const universal = [...appSource.match(/const UNIVERSAL_COURSES = \[([\s\S]*?)\];/)[1].replace(/\/\/.*$/gm, '').matchAll(/'([A-Z0-9]+)'/g)].map((m) => m[1]);
assert.ok(universal.includes('MNU108'), 'UNIVERSAL_COURSES lists MNU108');
assert.ok(!universal.includes('MNM101') && !universal.includes('MNM201'), 'UNIVERSAL_COURSES no longer lists MNM101 or MNM201');

const courses = ALL_COURSES.map(({ course }) => course);
const pengantarManajemen = courses.filter((course) => course.name === 'Pengantar Manajemen');
assert.equal(pengantarManajemen.length, 1, 'exactly one Pengantar Manajemen course in the catalog');
assert.equal(pengantarManajemen[0].code, 'MNU108');
assert.equal(pengantarManajemen[0].newCode, 'FEB25603011');
assert.ok(!courses.some((course) => course.code === 'MNM101' || course.code === 'MNM201'), 'no catalog entry keeps MNM101/MNM201 for Pengantar Manajemen');

// FEB25603011 belonged to AKK202 before this rename; the handbook gives it to Pengantar Manajemen. No number is free
// for AKK202, so it keeps its own code only, and no two courses may answer to the same route code.
const akk202 = courses.find((course) => course.code === 'AKK202');
assert.ok(akk202, 'AKK202 stays in the catalog');
assert.equal(akk202.newCode, undefined, 'AKK202 released FEB25603011 and has no alternative code');
const routeCodes = courses.flatMap((course) => [course.code, course.newCode].filter(Boolean).map((code) => String(code).toUpperCase()));
assert.equal(new Set(routeCodes).size, routeCodes.length, `duplicate route code in the catalog: ${routeCodes.join(', ')}`);

const resolve = (route) => {
  const wanted = canonicalCourseCode(route).toUpperCase();
  return courses.find((course) => course.code.toUpperCase() === wanted || course.newCode?.toUpperCase() === wanted);
};
for (const route of ['MNU108', 'MNM101', 'MNM201', 'mnm201', 'FEB25603011']) {
  assert.equal(resolve(route)?.code, 'MNU108', `/course/${route}`);
}

// ---- The URL rewrite: /course/MNM101 and /course/MNM201 rewrite to /course/MNU108
assert.equal(canonicalCoursePath('/course/MNM101'), '/course/MNU108');
assert.equal(canonicalCoursePath('/course/mnm201/'), '/course/MNU108/');
for (const pathname of ['/course/MNU108', '/course/FEB25603011', '/course/MNM1010', '/course/MNM106', '/', '/guide']) {
  assert.equal(canonicalCoursePath(pathname), null, `${pathname} must not be rewritten`);
}

// ---- The renamed data: content is served under MNU108 and the legacy codes
const content = await loadCourseContent('MNU108');
assert.deepEqual(Object.keys(content.readings).map(Number).sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
assert.deepEqual(Object.keys(content.reviews).sort(), ['uas', 'uts']);
const cards = getFlashcards('MNU108');
assert.ok(cards.length > 0, 'the deck is served under MNU108');
assert.equal(pengantarManajemen[0].flashcardCount, cards.length, 'catalog flashcardCount matches the deck');
for (const card of cards) assert.match(card.id, /^mnm101-tm\d{2}-\d{2}$/, 'flashcard ids keep the legacy prefix');
assert.deepEqual(getQuizSets('MNU108').map((set) => set.id), ['uts', 'uas', 'all']);
assert.ok(getQuizSets('MNU108').every((set) => set.items.length > 0) && getQuiz('MNU108').length > 0);
assert.deepEqual(getBankSoalSets('MNU108').map((set) => set.id), ['uts', 'uas', 'all']);
assert.ok(getBankSoalSets('MNU108').every((set) => set.items.length > 0) && getBankSoal('MNU108').length > 0);

// Legacy access also works via the compatibility layer
for (const legacy of ['MNM101', 'MNM201']) {
  const legacyContent = await loadCourseContent(legacy);
  assert.equal(Object.keys(legacyContent.readings).length, 14, `${legacy} readings`);
  assert.equal(getFlashcards(legacy).length, cards.length, `${legacy} flashcards`);
  assert.equal(getQuiz(legacy).length, getQuiz('MNU108').length, `${legacy} quiz`);
  assert.deepEqual(getQuizSets(legacy).map((set) => set.id), ['uts', 'uas', 'all'], `${legacy} quiz sets`);
  assert.equal(getBankSoal(legacy).length, getBankSoal('MNU108').length, `${legacy} bank soal`);
  assert.deepEqual(getBankSoalSets(legacy).map((set) => set.id), ['uts', 'uas', 'all'], `${legacy} bank soal sets`);
}

// ---- The storage shim against an in-memory storage for MNM101/MNM201 -> MNU108
const PROGRESS = 'akuntansi-feb-unair:study-progress';
const memory = (entries = {}, failOn = null) => {
  const map = new Map(Object.entries(entries).map(([key, value]) => [key, typeof value === 'string' ? value : JSON.stringify(value)]));
  return {
    map, writes: 0,
    get length() { return map.size; },
    key: (index) => [...map.keys()][index] ?? null,
    getItem(key) { if (failOn === 'get') throw new Error('storage blocked'); return map.has(key) ? map.get(key) : null; },
    setItem(key, value) { if (failOn === 'set') throw new Error('quota exceeded'); this.writes += 1; map.set(key, String(value)); },
    removeItem(key) { map.delete(key); },
  };
};
const at = (storage, key) => JSON.parse(storage.map.get(key));

// 1. Study progress moves from both old codes, and a TM already done under MNU108 stays done
let storage = memory({ [PROGRESS]: { 'MNM101:tm1': true, 'MNM201:tm7': true, 'MNU108:tm14': true, 'AKK202:tm2': true } });
assert.equal(migrateLegacyCourseStorage(storage), 2);
assert.deepEqual(at(storage, PROGRESS), { 'AKK202:tm2': true, 'MNU108:tm1': true, 'MNU108:tm7': true, 'MNU108:tm14': true });

// 2. Flashcard review state and stars move; an entry already under the new code wins
storage = memory({
  'flashcard-srs-MNM101': { 'mnm101-tm01-01': { n: 1 }, 'mnm101-tm01-02': { n: 2 } },
  'flashcard-srs-MNU108': { 'mnm101-tm01-02': { n: 99 } },
  'flashcard-stars-MNM201': { 'mnm101-tm02-03': true },
});
assert.equal(migrateLegacyCourseStorage(storage), 2);
assert.deepEqual(at(storage, 'flashcard-srs-MNU108'), { 'mnm101-tm01-01': { n: 1 }, 'mnm101-tm01-02': { n: 99 } });
assert.deepEqual(at(storage, 'flashcard-stars-MNU108'), { 'mnm101-tm02-03': true });
assert.ok(!storage.map.has('flashcard-srs-MNM101') && !storage.map.has('flashcard-stars-MNM201'));

// 3. Exam sessions move, and one that already exists under the new code is kept
storage = memory({
  exam_session_MNM101_uts_5400: { saved: 'old-uts' },
  exam_session_MNU108_uts_5400: { saved: 'new-uts' },
  exam_session_MNM201_uas_5400: { saved: 'old-uas' },
});
assert.equal(migrateLegacyCourseStorage(storage), 1);
assert.deepEqual(at(storage, 'exam_session_MNU108_uts_5400'), { saved: 'new-uts' });
assert.deepEqual(at(storage, 'exam_session_MNM101_uts_5400'), { saved: 'old-uts' });
assert.deepEqual(at(storage, 'exam_session_MNU108_uas_5400'), { saved: 'old-uas' });
assert.ok(!storage.map.has('exam_session_MNM201_uas_5400'));

// 4. A blocked storage never throws and never loses the old entries
storage = memory({ [PROGRESS]: { 'MNM101:tm1': true } }, 'set');
assert.equal(migrateLegacyCourseStorage(storage), 0);
assert.deepEqual(at(storage, PROGRESS), { 'MNM101:tm1': true });

// 5. Running it twice moves nothing the second time
storage = memory({ [PROGRESS]: { 'MNM201:tm3': true } });
assert.equal(migrateLegacyCourseStorage(storage), 1);
assert.equal(migrateLegacyCourseStorage(storage), 0);
assert.deepEqual(at(storage, PROGRESS), { 'MNU108:tm3': true });

console.log('MNU108 rename guard passed: alias, legacy URL replacement, unique route codes, data wiring, storage migration, and backwards compatibility.');
