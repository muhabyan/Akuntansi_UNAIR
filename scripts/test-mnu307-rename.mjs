// MNS301 -> MNU307 rename guard (hard removal, no alias). Manajemen Strategik is catalogued only as MNU307
// (the faculty handbook has no FEB code and gives it no alternative code). Unlike PJK202->PJK301, AKS301->SII306,
// and MNM101/MNM201->MNU108, this rename keeps no legacy alias: /course/MNS301 and /course/MNM301 no longer
// resolve to anything, and study progress or SRS state saved under MNS301 in a browser is not migrated.
//
// Scope: card/question/case ids inside the data files keep their old "mns301-" prefix (not rendered to students;
// changing them would reset every saved flashcard SRS state for no visible benefit), the same way AKS301 kept its
// id prefix after the SII306 rename. Everything a student can see or type (the catalog code, the URL, the file
// names, the exported identifiers, the quiz sourceRef citations) uses MNU307 only.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

const bundle = await build({
  stdin: {
    contents: [
      "export { LEGACY_COURSE_CODES, canonicalCourseCode, canonicalCoursePath } from './src/lib/legacyCourseCodes.ts';",
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
const { LEGACY_COURSE_CODES, canonicalCourseCode, canonicalCoursePath, ALL_COURSES, loadCourseContent } = mod;
const { getFlashcards, getQuiz, getQuizSets, getBankSoal, getBankSoalSets } = mod;
const read = (file) => readFileSync(file, 'utf8');

// ---- No alias: MNS301 and MNM301 are not in the legacy map and are not remapped.
assert.equal(LEGACY_COURSE_CODES.MNS301, undefined, 'MNS301 must not be aliased');
assert.equal(LEGACY_COURSE_CODES.MNM301, undefined, 'MNM301 must not be aliased');
assert.equal(canonicalCourseCode('MNS301'), 'MNS301', 'MNS301 must not be remapped');
assert.equal(canonicalCourseCode('MNM301'), 'MNM301', 'MNM301 must not be remapped');
assert.equal(canonicalCourseCode('MNU307'), 'MNU307');
assert.equal(canonicalCoursePath('/course/MNS301'), null, '/course/MNS301 must not be rewritten');
assert.equal(canonicalCoursePath('/course/MNM301'), null, '/course/MNM301 must not be rewritten');

// ---- UNIVERSAL_COURSES lists MNU307 only.
const appSource = read('src/App.tsx');
const universal = [...appSource.match(/const UNIVERSAL_COURSES = \[([\s\S]*?)\];/)[1].replace(/\/\/.*$/gm, '').matchAll(/'([A-Z0-9]+)'/g)].map((m) => m[1]);
assert.ok(universal.includes('MNU307'), 'UNIVERSAL_COURSES lists MNU307');
assert.ok(!universal.includes('MNS301') && !universal.includes('MNM301'), 'UNIVERSAL_COURSES no longer lists MNS301 or MNM301');

// ---- Exactly one Manajemen Strategik course, catalogued as MNU307 with no alternative code.
const courses = ALL_COURSES.map(({ course }) => course);
const manstrat = courses.filter((course) => course.name === 'Manajemen Strategik');
assert.equal(manstrat.length, 1, 'exactly one Manajemen Strategik course in the catalog');
assert.equal(manstrat[0].code, 'MNU307');
assert.equal(manstrat[0].newCode, undefined, 'MNU307 has no alternative code (the handbook gives it none)');
assert.ok(!courses.some((course) => course.code === 'MNS301' || course.code === 'MNM301'), 'no catalog entry keeps MNS301/MNM301 for Manajemen Strategik');

const routeCodes = courses.flatMap((course) => [course.code, course.newCode].filter(Boolean).map((code) => String(code).toUpperCase()));
assert.equal(new Set(routeCodes).size, routeCodes.length, `duplicate route code in the catalog: ${routeCodes.join(', ')}`);

// ---- The renamed data: content is served only under MNU307; the old code resolves to nothing.
const content = await loadCourseContent('MNU307');
const readingKeys = Object.keys(content.readings).map(Number);
for (const tm of [1, 2, 3, 4, 5, 6, 7]) assert.ok(readingKeys.includes(tm), `MNU307 serves reading TM${tm}`);
assert.ok(Object.keys(content.reviews).includes('uts'), 'MNU307 serves the UTS review');
const emptyContent = await loadCourseContent('MNS301');
assert.deepEqual(emptyContent.readings, {}, 'MNS301 no longer resolves to any readings');
assert.deepEqual(emptyContent.reviews, {}, 'MNS301 no longer resolves to any reviews');

const cards = getFlashcards('MNU307');
assert.equal(cards.length, 176);
assert.equal(manstrat[0].flashcardCount, cards.length, 'catalog flashcardCount matches the deck');
for (const card of cards) assert.match(card.id, /^mns301-tm\d{2}-\d{2}$/, 'flashcard ids keep their old prefix (SRS state continuity, not shown to students)');
assert.deepEqual(getFlashcards('MNS301'), [], 'no flashcards are served under MNS301 any more');

assert.equal(getQuiz('MNU307').length, 132);
assert.deepEqual(getQuiz('MNS301'), [], 'no quiz is served under MNS301 any more');
assert.deepEqual(getQuizSets('MNU307').map((set) => set.id), ['tm1-3', 'tm4-5', 'tm6-7', 'uts']);
assert.deepEqual(getQuizSets('MNS301'), [], 'no quiz sets are served under MNS301 any more');

assert.ok(getBankSoal('MNU307').length > 0);
assert.deepEqual(getBankSoal('MNS301'), [], 'no bank soal is served under MNS301 any more');
assert.deepEqual(getBankSoalSets('MNU307').map((set) => set.id), ['uts']);
assert.deepEqual(getBankSoalSets('MNS301'), [], 'no bank soal sets are served under MNS301 any more');

// ---- The quiz sourceRef citations (shown nowhere today, but read as plain text) cite MNU307, not MNS301.
const quizSource = read('src/data/quizzes/mnu307.ts');
assert.ok(!/MNS301/.test(quizSource), 'quiz sourceRef citations no longer mention MNS301');
assert.ok(/Reading MNU307/.test(quizSource), 'quiz sourceRef citations cite MNU307');

// ---- No file in src keeps mns301 in its filename.
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => (entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]));
const files = walk('src').map((file) => file.split(path.sep).join('/'));
assert.deepEqual(files.filter((file) => /mns301\.ts$/i.test(path.basename(file))), [], 'no .ts file in src keeps mns301.ts in its name');

console.log('MNU307 rename guard passed: no alias, no legacy URL rewrite, renamed data wiring, catalog consistency.');
