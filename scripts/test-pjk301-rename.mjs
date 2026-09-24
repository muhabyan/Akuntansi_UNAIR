// PJK202 -> PJK301 rename guard. Perpajakan II is catalogued as PJK301 (FEB25603015); the old code keeps working for old
// URLs and for data this browser saved before the rename. Checks the renamed wiring, the /course/PJK202 alias, the
// localStorage shim (src/lib/legacyCourseCodes.ts) and that no stale old code is left in src.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
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
    // Vite "?raw" imports resolve to the file contents as a string.
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

// ---- The alias: /course/PJK202 opens the same course as /course/PJK301 and /course/FEB25603015.
assert.equal(LEGACY_COURSE_CODES.PJK202, 'PJK301');
assert.equal(canonicalCourseCode('PJK202'), 'PJK301');
assert.equal(canonicalCourseCode('pjk202'), 'PJK301');
for (const code of ['PJK301', 'PJK201', 'FEB25603015', 'AKK202', 'SII306']) assert.equal(canonicalCourseCode(code), code, `${code} must not be remapped`);

const appSource = read('src/App.tsx');
assert.ok(/canonicalCourseCode\(decodeURIComponent\(match\[1\]\)\)/.test(appSource), 'resolveCourseFromPath must map the route code through canonicalCourseCode');
const universal = [...appSource.match(/const UNIVERSAL_COURSES = \[([\s\S]*?)\];/)[1].replace(/\/\/.*$/gm, '').matchAll(/'([A-Z0-9]+)'/g)].map((m) => m[1]);
assert.ok(universal.includes('PJK301') && !universal.includes('PJK202'), 'UNIVERSAL_COURSES lists PJK301 and no longer PJK202');

const courses = ALL_COURSES.map(({ course }) => course);
const perpajakan = courses.filter((course) => course.name === 'Perpajakan II');
assert.equal(perpajakan.length, 1, 'exactly one Perpajakan II course in the catalog');
assert.equal(perpajakan[0].code, 'PJK301');
assert.equal(perpajakan[0].newCode, 'FEB25603015');
assert.ok(!courses.some((course) => course.code === 'PJK202'), 'no catalog entry keeps the old code');
const resolve = (route) => {
  const wanted = canonicalCourseCode(route).toUpperCase(); // the same matching resolveCourseFromPath does
  return courses.find((course) => course.code.toUpperCase() === wanted || course.newCode?.toUpperCase() === wanted);
};
for (const route of ['PJK301', 'PJK202', 'pjk202', 'FEB25603015']) assert.equal(resolve(route)?.code, 'PJK301', `/course/${route}`);

// ---- The URL: a legacy course URL is replaced by the current one, so old links stop spreading. It is a replace, not a
// push, so Back still leaves the page. The alternative code FEB25603015 is not a legacy code and is left alone.
assert.equal(canonicalCoursePath('/course/PJK202'), '/course/PJK301');
assert.equal(canonicalCoursePath('/course/pjk202/'), '/course/PJK301/');
for (const pathname of ['/course/PJK301', '/course/FEB25603015', '/course/PJK2020', '/course/PJK201', '/', '/guide', '/semester/sem3', '/course/PJK202/extra', '/course/%E0%A4%A']) {
  assert.equal(canonicalCoursePath(pathname), null, `${pathname} must not be rewritten`);
}
const replaceFn = appSource.match(/function replaceLegacyCourseUrl\(\) \{[\s\S]*?\n\}/);
assert.ok(replaceFn, 'App.tsx defines replaceLegacyCourseUrl');
assert.ok(replaceFn[0].includes('window.history.replaceState(') && !replaceFn[0].includes('pushState('), 'replace, never push: Back must still work');
assert.ok(replaceFn[0].includes('${search}${hash}'), 'the query string and the hash survive the rewrite');
assert.equal(appSource.match(/(?<!function )replaceLegacyCourseUrl\(\);/g)?.length, 2, 'called on load and on Back/Forward');

// ---- The renamed data: everything is served under PJK301 and nothing under the old code.
const content = await loadCourseContent('PJK301');
assert.deepEqual(Object.keys(content.readings).map(Number).sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
assert.deepEqual(Object.keys(content.reviews).sort(), ['uas', 'uts']);
const cards = getFlashcards('PJK301');
assert.equal(cards.length, 84);
assert.equal(perpajakan[0].flashcardCount, cards.length, 'catalog flashcardCount matches the deck');
// TM01–TM07 changed meaning, so v2 ids prevent old SRS/star state from following new cards.
// TM08–TM14 retain their existing legacy ids and stored state.
for (const card of cards) {
  assert.match(card.id, card.tm <= 7 ? /^pjk202-v2-tm\d{2}-\d{2}$/ : /^pjk202-tm\d{2}-\d{2}$/,
    'flashcard ids isolate rebuilt Pra-UTS cards and preserve Pra-UAS ids');
}
assert.deepEqual(getQuizSets('PJK301').map((set) => set.id), ['uts', 'uas', 'all']);
assert.ok(getQuizSets('PJK301').every((set) => set.items.length > 0) && getQuiz('PJK301').length > 0);
assert.deepEqual(getBankSoalSets('PJK301').map((set) => set.id), ['uts', 'uas', 'all']);
assert.ok(getBankSoalSets('PJK301').every((set) => set.items.length > 0) && getBankSoal('PJK301').length > 0);
const oldCode = await loadCourseContent('PJK202');
assert.deepEqual([Object.keys(oldCode.readings).length, getFlashcards('PJK202').length, getQuiz('PJK202').length, getBankSoal('PJK202').length], [0, 0, 0, 0], 'the old code serves nothing');

// ---- No stale old code in src: uppercase only in the alias map and two comments, lowercase only as the flashcard id prefix.
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => (entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]));
const files = walk('src').map((file) => file.split(path.sep).join('/'));
assert.deepEqual(files.filter((file) => /pjk202/i.test(path.basename(file))), [], 'no file in src keeps the old code in its name');
const allowedUpper = new Set(['src/lib/legacyCourseCodes.ts', 'src/data/courseData.ts', 'src/data/flashcards/pjk301.ts']);
const allowedLower = new Set(['src/data/flashcards/pjk301.ts']);
for (const file of files.filter((name) => /\.(ts|tsx|css|json|md)$/.test(name))) {
  const text = read(file);
  assert.ok(!text.includes('PJK202') || allowedUpper.has(file), `${file}: mentions PJK202`);
  assert.ok(!text.includes('pjk202') || allowedLower.has(file), `${file}: mentions pjk202`);
}

// ---- The storage formats the shim rewrites, as their owners write them.
assert.ok(read('src/hooks/useStudyProgress.ts').includes("'akuntansi-feb-unair:study-progress'"), 'study-progress key moved');
assert.ok(read('src/hooks/useStudyProgress.ts').includes('`${courseCode}:tm${tm}`'), 'material key format moved');
const deck = read('src/components/FlashcardDeck.tsx');
assert.ok(deck.includes('`flashcard-srs-${courseCode}`') && deck.includes('`flashcard-stars-${courseCode}`'), 'flashcard key format moved');
assert.ok(read('src/data/quizSession.ts').includes('`exam_session_${courseCode}_${setId}_${durationSeconds}`'), 'exam session key format moved');
const shim = read('src/lib/legacyCourseCodes.ts');
for (const fragment of ["'akuntansi-feb-unair:study-progress'", "'flashcard-srs-'", "'flashcard-stars-'", "'exam_session_'", '`${legacy}:tm`']) {
  assert.ok(shim.includes(fragment), `the shim no longer mentions ${fragment}`);
}
const main = read('src/main.tsx');
const migrateAt = main.indexOf('migrateLegacyCourseStorage(window.localStorage)');
assert.ok(migrateAt > 0 && migrateAt < main.indexOf('createRoot('), 'the shim runs before the app renders');

// ---- The shim, against an in-memory storage.
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

// 1. Study progress moves; other courses and lookalike codes stay; a second run does nothing.
let storage = memory({ [PROGRESS]: { 'PJK202:tm1': true, 'PJK202:tm14': true, 'AKK202:tm2': true, 'PJK201:tm1': true, 'PJK2021:tm1': true }, theme: 'dark' });
assert.equal(migrateLegacyCourseStorage(storage), 2);
assert.deepEqual(at(storage, PROGRESS), { 'AKK202:tm2': true, 'PJK201:tm1': true, 'PJK2021:tm1': true, 'PJK301:tm1': true, 'PJK301:tm14': true });
assert.equal(storage.map.get('theme'), 'dark');
const writesAfterFirstRun = storage.writes;
assert.equal(migrateLegacyCourseStorage(storage), 0);
assert.equal(storage.writes, writesAfterFirstRun, 'a second run writes nothing');

// 2. Progress already saved under the new code is kept: a material done under either code stays done.
storage = memory({ [PROGRESS]: { 'PJK202:tm1': true, 'PJK301:tm1': false, 'PJK301:tm2': true } });
migrateLegacyCourseStorage(storage);
assert.deepEqual(at(storage, PROGRESS), { 'PJK301:tm1': true, 'PJK301:tm2': true });

// 3. Flashcard review state and stars move; entries already under the new code win; other courses stay.
storage = memory({
  'flashcard-srs-PJK202': { 'pjk202-tm01-01': { n: 1 }, 'pjk202-tm01-02': { n: 2 } },
  'flashcard-srs-PJK301': { 'pjk202-tm01-02': { n: 99 } },
  'flashcard-stars-PJK202': { 'pjk202-tm02-03': true },
  'flashcard-srs-AKK202': { 'akk202-tm01-01': { n: 7 } },
});
assert.equal(migrateLegacyCourseStorage(storage), 2);
assert.deepEqual(at(storage, 'flashcard-srs-PJK301'), { 'pjk202-tm01-01': { n: 1 }, 'pjk202-tm01-02': { n: 99 } });
assert.deepEqual(at(storage, 'flashcard-stars-PJK301'), { 'pjk202-tm02-03': true });
assert.ok(!storage.map.has('flashcard-srs-PJK202') && !storage.map.has('flashcard-stars-PJK202'), 'the old keys are gone');
assert.deepEqual(at(storage, 'flashcard-srs-AKK202'), { 'akk202-tm01-01': { n: 7 } });

// 4. Exam sessions move key by key; one that already exists under the new code is never overwritten (the old one stays).
storage = memory({
  exam_session_PJK202_uts_5400: { saved: 'old-uts' }, exam_session_PJK202_all_5400: { saved: 'old-all' },
  exam_session_PJK301_all_5400: { saved: 'new-all' }, exam_session_AKK202_uts_5400: { saved: 'other' },
});
assert.equal(migrateLegacyCourseStorage(storage), 1);
assert.deepEqual(at(storage, 'exam_session_PJK301_uts_5400'), { saved: 'old-uts' });
assert.ok(!storage.map.has('exam_session_PJK202_uts_5400'));
assert.deepEqual(at(storage, 'exam_session_PJK301_all_5400'), { saved: 'new-all' });
assert.deepEqual(at(storage, 'exam_session_PJK202_all_5400'), { saved: 'old-all' });
assert.deepEqual(at(storage, 'exam_session_AKK202_uts_5400'), { saved: 'other' });

// 5. Corrupt or unexpected JSON is left alone and never throws.
storage = memory({ [PROGRESS]: '{not json', 'flashcard-srs-PJK202': '[1,2]', 'flashcard-stars-PJK202': 'null' });
assert.equal(migrateLegacyCourseStorage(storage), 0);
assert.equal(storage.map.get(PROGRESS), '{not json');
assert.equal(storage.map.get('flashcard-srs-PJK202'), '[1,2]');
assert.equal(storage.map.get('flashcard-stars-PJK202'), 'null');

// 6. A blocked or full storage never throws, and nothing is lost: the old data is still there for the next start.
for (const failOn of ['get', 'set']) {
  storage = memory({ [PROGRESS]: { 'PJK202:tm1': true }, 'flashcard-srs-PJK202': { a: 1 }, exam_session_PJK202_uts_5400: { a: 1 } }, failOn);
  assert.equal(migrateLegacyCourseStorage(storage), 0, `storage failing on ${failOn}`);
  assert.deepEqual(at(storage, PROGRESS), { 'PJK202:tm1': true });
  assert.ok(storage.map.has('flashcard-srs-PJK202') && storage.map.has('exam_session_PJK202_uts_5400'));
}

// 7. Nothing to migrate: no writes at all.
storage = memory({ [PROGRESS]: { 'PJK301:tm1': true } });
assert.equal(migrateLegacyCourseStorage(storage), 0);
assert.equal(storage.writes, 0);
assert.equal(migrateLegacyCourseStorage(memory()), 0);

console.log('PJK301 rename guard passed: alias, legacy URL replacement, renamed data wiring, no stale old code in src, and 7 localStorage shim scenarios.');
