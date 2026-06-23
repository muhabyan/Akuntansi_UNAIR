import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const failures = [];
const passes = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

const app = read('src/App.tsx');
const semesterView = read('src/components/SemesterView.tsx');
const catalog = read('src/components/Semester2CatalogView.tsx');
const main = read('src/main.tsx');
const css = read('src/styles/ux-v2-catalog.css');

check(app.includes("activeSemester?.id === 'sem2' && selectedCourse === null && !routeNotFound"), 'Semester 2 catalog gate remains exact');
check(app.includes("isSemester2CatalogPilot ? ' ux-v2-catalog' : ''"), 'Catalog class remains conditional');
check(semesterView.includes("if (semester.id === 'sem2')"), 'SemesterView isolates catalog to sem2');
check(semesterView.includes('<LegacySemesterView semester={semester}'), 'Legacy semester implementation remains preserved');
check(main.includes("import './styles/ux-v2-catalog.css';"), 'Catalog stylesheet remains imported');

const expectedCodes = ['AKK201', 'AKM201', 'PJK201', 'AKA103', 'MNU101', 'EKT109', 'MAS122'];
for (const code of expectedCodes) check(catalog.includes(code), `Catalog source includes ${code}`);
check(catalog.includes("courseCodes: ['AKK201', 'AKM201', 'PJK201', 'AKA103']"), 'Keahlian inventory is exact');
check(catalog.includes("courseCodes: ['MNU101', 'EKT109', 'MAS122']"), 'Pendukung inventory is exact');
check(catalog.includes('hasExactCodeSet(actualCodes, EXPECTED_COURSE_CODES)'), 'Actual course-code set is fail-closed');
check(catalog.includes('actualSks === EXPECTED_TOTAL_SKS'), 'Actual SKS sum is fail-closed');
check(catalog.includes('hasExactGroupMembership(semester.groups, SEMESTER_2_GROUPS)'), 'Group membership is fail-closed');
check(catalog.includes('if (!validateSemester2Inventory(semester)) return null;'), 'Catalog renders only after validation');
check(catalog.includes('href={`/course/${encodeURIComponent(course.code)}`}'), 'Course anchor href remains canonical');
check(catalog.includes('event.preventDefault();'), 'SPA navigation prevents native reload');
check(catalog.includes('role="progressbar"'), 'Progress semantics remain present');
check(!catalog.includes('MetricCard'), 'Metric boxes remain absent from catalog');
check(!/Interaktif lengkap|Flashcard \+ Bank Soal/i.test(catalog), 'Promotional feature badge copy remains absent');
check(!/backdrop-filter\s*:\s*blur/i.test(css), 'Catalog CSS avoids active backdrop blur');
check(!/gradient\s*\(/i.test(css), 'Catalog CSS avoids gradient functions');
check(css.includes('@media (prefers-reduced-motion: reduce)'), 'Reduced-motion contract remains present');
check(css.includes('min-height: 44px'), 'Touch target contract remains present');

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
process.exit(failures.length ? 1 : 0);
