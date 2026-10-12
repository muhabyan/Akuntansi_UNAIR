// SIA remains SII306. Official AKS301 belongs to Analytics; old browser SIA state migrates once.
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

// ---- Separate official routes for SIA and Analytics.
assert.equal(LEGACY_COURSE_CODES.AKS301, undefined);
assert.equal(canonicalCourseCode('AKS301'), 'AKS301');
assert.equal(canonicalCourseCode('aks301'), 'aks301');
for (const code of ['SII306', 'PJK301', 'FEB25603016', 'AKK202']) assert.equal(canonicalCourseCode(code), code, `${code} must not be remapped`);

const appSource = read('src/App.tsx');
const universal = [...appSource.match(/const UNIVERSAL_COURSES = \[([\s\S]*?)\];/)[1].replace(/\/\/.*$/gm, '').matchAll(/'([A-Z0-9]+)'/g)].map((m) => m[1]);
assert.ok(universal.includes('SII306') && !universal.includes('AKS301'), 'UNIVERSAL_COURSES lists SII306 and no longer AKS301');

const courses = ALL_COURSES.map(({ course }) => course);
const sia = courses.filter((course) => course.name === 'Sistem Informasi Akuntansi');
assert.equal(sia.length, 1, 'exactly one Sistem Informasi Akuntansi course in the catalog');
assert.equal(sia[0].code, 'SII306');
assert.equal(sia[0].newCode, 'FEB25603016');
assert.equal(courses.find(course => course.code === 'AKS301')?.name, 'Accounting Data Analytics');

const resolve = (route) => {
  const wanted = canonicalCourseCode(route).toUpperCase();
  return courses.find((course) => course.code.toUpperCase() === wanted || course.newCode?.toUpperCase() === wanted);
};
for (const route of ['SII306', 'FEB25603016']) assert.equal(resolve(route)?.code, 'SII306', `/course/${route}`);

// ---- AKS301 routes must retain the official Analytics identity.
assert.equal(canonicalCoursePath('/course/AKS301'), null);
assert.equal(canonicalCoursePath('/course/aks301/'), null);
for (const pathname of ['/course/SII306', '/course/FEB25603016', '/course/AKS3010', '/course/AKK203', '/', '/guide']) {
  assert.equal(canonicalCoursePath(pathname), null, `${pathname} must not be rewritten`);
}

// ---- SIA material and legacy card IDs stay unchanged under SII306.
const content = await loadCourseContent('SII306');
assert.deepEqual(Object.keys(content.readings).map(Number).sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
assert.deepEqual(Object.keys(content.reviews).sort(), ['uts']); // TM14 sudah TM biasa, tidak lagi ditiru sebagai kartu Review UAS
const cards = getFlashcards('SII306');
assert.equal(cards.length, 105);
assert.equal(sia[0].flashcardCount, cards.length, 'catalog flashcardCount matches the deck');
for (const card of cards) assert.match(card.id, /^aks301-(?:v\d+-)?tm\d{2}-\d{2}$/, 'flashcard ids keep the legacy prefix across deck versions');
assert.deepEqual(getQuizSets('SII306').map((set) => set.id), ['uts', 'uas', 'all']);
assert.ok(getQuizSets('SII306').every((set) => set.items.length > 0) && getQuiz('SII306').length > 0);
assert.deepEqual(getBankSoalSets('SII306').map((set) => set.id), ['uts', 'uas', 'all']);
assert.ok(getBankSoalSets('SII306').every((set) => set.items.length > 0) && getBankSoal('SII306').length > 0);

// Official Analytics never opens SIA exercises or readings.
assert.equal(resolve('AKS301')?.code, 'AKS301');
assert.equal(resolve('ADA301')?.code, 'AKS301');
assert.deepEqual((await loadCourseContent('AKS301')).readings, {});
for (const fn of [getFlashcards, getQuiz, getQuizSets, getBankSoal, getBankSoalSets]) assert.deepEqual(fn('AKS301'), []);

// ---- No file in src retains aks301 in its filename
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => (entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]));
const files = walk('src').map((file) => file.split(path.sep).join('/'));
assert.deepEqual(files.filter((file) => /aks301\.ts$/i.test(path.basename(file))), [], 'no .ts file in src keeps aks301.ts in its name');

// ---- The storage shim against an in-memory storage for AKS301 -> SII306
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

// 1. Study progress moves from AKS301 to SII306
let storage = memory({ [PROGRESS]: { 'AKS301:tm1': true, 'AKS301:tm14': true, 'AKK202:tm2': true } });
assert.equal(migrateLegacyCourseStorage(storage), 2);
assert.deepEqual(at(storage, PROGRESS), { 'AKK202:tm2': true, 'SII306:tm1': true, 'SII306:tm14': true });

// 2. Flashcard review state and stars move
storage = memory({
  'flashcard-srs-AKS301': { 'aks301-tm01-01': { n: 1 }, 'aks301-tm01-02': { n: 2 } },
  'flashcard-srs-SII306': { 'aks301-tm01-02': { n: 99 } },
  'flashcard-stars-AKS301': { 'aks301-tm02-03': true },
});
assert.equal(migrateLegacyCourseStorage(storage), 2);
assert.deepEqual(at(storage, 'flashcard-srs-SII306'), { 'aks301-tm01-01': { n: 1 }, 'aks301-tm01-02': { n: 99 } });
assert.deepEqual(at(storage, 'flashcard-stars-SII306'), { 'aks301-tm02-03': true });
assert.ok(!storage.map.has('flashcard-srs-AKS301') && !storage.map.has('flashcard-stars-AKS301'));

// 3. Exam sessions move
storage = memory({
  exam_session_AKS301_uts_5400: { saved: 'old-uts' },
  exam_session_SII306_uts_5400: { saved: 'new-uts' },
});
assert.equal(migrateLegacyCourseStorage(storage), 0);
assert.deepEqual(at(storage, 'exam_session_SII306_uts_5400'), { saved: 'new-uts' });
assert.deepEqual(at(storage, 'exam_session_AKS301_uts_5400'), { saved: 'old-uts' });

// Future Analytics state must survive repeated starts after the one-time SIA migration.
storage = memory({ [PROGRESS]: { 'AKS301:tm1': true, 'ADA301:tm2': true } });
assert.equal(migrateLegacyCourseStorage(storage), 2);
assert.deepEqual(at(storage, PROGRESS), { 'SII306:tm1': true, 'AKS301:tm2': true });
storage.setItem('flashcard-stars-AKS301', JSON.stringify({ 'analytics-1': true }));
assert.equal(migrateLegacyCourseStorage(storage), 0);
assert.deepEqual(at(storage, 'flashcard-stars-AKS301'), { 'analytics-1': true });
assert.deepEqual(at(storage, PROGRESS), { 'SII306:tm1': true, 'AKS301:tm2': true });

// Failure must not mark the reserved-code migration complete or move ADA301 into it prematurely.
storage = memory({ [PROGRESS]: { 'AKS301:tm1': true, 'ADA301:tm2': true } }, 'set');
assert.equal(migrateLegacyCourseStorage(storage), 0);
assert.equal(storage.map.has('akuntansi-feb-unair:migration:aks301-sia:v1'), false);
assert.deepEqual(at(storage, PROGRESS), { 'AKS301:tm1': true, 'ADA301:tm2': true });
const retry = memory(Object.fromEntries(storage.map));
assert.equal(migrateLegacyCourseStorage(retry), 2);
storage = memory({ 'flashcard-srs-AKS301': '{corrupt', [PROGRESS]: { 'ADA301:tm2': true } });
assert.equal(migrateLegacyCourseStorage(storage), 0);
assert.equal(storage.map.has('akuntansi-feb-unair:migration:aks301-sia:v1'), false);
assert.equal(storage.getItem('flashcard-srs-AKS301'), '{corrupt');
assert.deepEqual(at(storage, PROGRESS), { 'ADA301:tm2': true });

console.log('SII306 identity PASS: independent Analytics routes, unchanged SIA content, one-time storage migration, retry and future Analytics preservation.');
