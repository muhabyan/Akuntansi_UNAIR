import { buildSync } from 'esbuild';
import { mkdtempSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const tmp = mkdtempSync(path.join(tmpdir(), 'uiux-course-consistency-'));
const bundledCourseData = path.join(tmp, 'courseData.mjs');
const failures = [];

function fail(id, message) {
  failures.push({ id, message });
}

try {
  buildSync({
    entryPoints: [path.join(root, 'src/data/courseData.ts')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node20',
    outfile: bundledCourseData,
    logLevel: 'silent',
  });

  const { ALL_COURSES, SEMESTERS } = await import(pathToFileURL(bundledCourseData));
  const app = readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
  const registry = readFileSync(path.join(root, 'src/data/courses/courseRegistry.ts'), 'utf8');
  const layout = readFileSync(path.join(root, 'src/components/course/CourseLayout.tsx'), 'utf8');
  const navbar = readFileSync(path.join(root, 'src/components/Navbar.tsx'), 'utf8');
  const main = readFileSync(path.join(root, 'src/main.tsx'), 'utf8');
  const css = readFileSync(path.join(root, 'src/styles/uiux-final-completion.css'), 'utf8');

  const match = app.match(/const UNIVERSAL_COURSES = \[([^\]]+)\]/);
  if (!match) fail('APP-UNIVERSAL-MISSING', 'UNIVERSAL_COURSES tidak ditemukan di App.tsx.');
  const universalCodes = match
    ? [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1])
    : [];
  const uniqueUniversalCodes = new Set(universalCodes);

  if (uniqueUniversalCodes.size !== universalCodes.length) {
    fail('APP-UNIVERSAL-DUPLICATE', `Kode duplikat di UNIVERSAL_COURSES: ${universalCodes.join(', ')}`);
  }

  const allCourses = ALL_COURSES.map(({ course }) => course);
  const byCode = new Map(allCourses.map((course) => [course.code, course]));
  const byRoute = new Map();

  allCourses.forEach((course) => {
    [course.code, course.newCode].filter(Boolean).forEach((routeCode) => {
      const key = String(routeCode).toUpperCase();
      const existing = byRoute.get(key);
      if (existing && existing !== course.code) {
        fail('ROUTE-COLLISION', `Route code ${key} dipakai oleh ${existing} dan ${course.code}.`);
      }
      byRoute.set(key, course.code);
    });
  });

  universalCodes.forEach((code) => {
    const course = byCode.get(code);
    if (!course) fail('UNIVERSAL-NOT-IN-COURSE-DATA', `${code} ada di UNIVERSAL_COURSES tetapi tidak ada di ALL_COURSES.`);
    if (!new RegExp(`case ['"]${code}['"]`).test(registry)) {
      fail('UNIVERSAL-NO-REGISTRY-CASE', `${code} diarahkan ke CourseLayout tetapi tidak punya case di courseRegistry.`);
    }
    if (course) {
      if (!course.name || course.name.trim().length < 3) fail('COURSE-NAME-MISSING', `${code} tidak punya nama mata kuliah valid.`);
      if (!Array.isArray(course.materiTM1_7) || course.materiTM1_7.length !== 7) fail('COURSE-TM1-7-COUNT', `${code} tidak punya 7 materi TM1-7.`);
      if (!Array.isArray(course.materiTM8_14) || course.materiTM8_14.length !== 7) fail('COURSE-TM8-14-COUNT', `${code} tidak punya 7 materi TM8-14.`);
    }
  });

  const expectedUniversal = ['AKK201', 'AKK106', 'PJK201', 'MNU101', 'AKA103', 'EKT109', 'MAS122', 'AKM201'];
  expectedUniversal.forEach((code) => {
    if (!uniqueUniversalCodes.has(code)) fail('UNIVERSAL-COVERAGE-MISSING', `${code} belum masuk CourseLayout universal.`);
  });

  const stalePilotProp = /isUxV2Pilot=\{true\}/.test(app + navbar);
  if (stalePilotProp) fail('STALE-PILOT-PROP', 'Masih ada prop isUxV2Pilot={true} setelah rollout global.');
  if (!/data-ux-release="UIUX_FINAL_COMPLETE"/.test(app)) fail('GLOBAL-RELEASE-MARKER-MISSING', 'Root shell tidak punya data-ux-release final.');
  if (!/data-ux-pilot=\{isUxV2Pilot \? 'AKM201' : undefined\}/.test(app)) fail('PILOT-MARKER-DRIFT', 'Marker pilot AKM201 berubah dari kontrak isolasi historis.');

  const requiredLayoutSignals = [
    'const isFeaturedAccountingCourse = course.code === \'AKM201\' || course.code === \'AKK201\';',
    "const isPjkCourse = course.code === 'PJK201';",
    "const isPteCourse = course.code === 'EKT109';",
    "isPjk ? 'Referensi & Regulasi'",
    "course.code === 'EKT109' ? 'Formula, Checklist & Referensi'",
    "course.code === 'AKM201' ? 'Referensi & Bank Rumus'",
  ];
  requiredLayoutSignals.forEach((signal) => {
    if (!layout.includes(signal)) fail('COURSE-SPECIFIC-COPY-MISSING', `Sinyal layout spesifik hilang: ${signal}`);
  });

  const requiredCssSelectors = [
    '.uiux-final-shell',
    '.uiux-final-shell[data-theme="light"]',
    '.uiux-final-shell[data-theme="dark"]',
    '.uiux-final-shell .glass-panel',
    '.uiux-final-shell .course-main-panel',
    '.uiux-final-shell .course-dashboard-panel',
    '.uiux-final-shell .course-sidebar-panel',
    '.uiux-final-shell .course-reading-panel',
    '.uiux-final-shell .course-reference-panel',
    '.uiux-final-shell .quiz-question-card',
    '.uiux-final-shell .flashcard-study-card',
    '@media (prefers-reduced-motion: reduce)',
  ];
  requiredCssSelectors.forEach((selector) => {
    if (!css.includes(selector)) fail('CSS-GLOBAL-COVERAGE-MISSING', `Selector final hilang: ${selector}`);
  });

  if (css.includes('.uiux-final-shell[data-theme="dark"] .uiux-final-shell')) {
    fail('CSS-DEAD-NESTED-SHELL-SELECTOR', 'Selector dark shell nested yang mati muncul lagi.');
  }
  if (!main.includes("./styles/uiux-final-completion.css")) {
    fail('FINAL-CSS-NOT-IMPORTED', 'Stylesheet final tidak diimpor dari main.tsx.');
  }

  const semesterCourseCodes = SEMESTERS.flatMap((semester) => semester.groups.flatMap((group) => group.courses.map((course) => course.code)));
  const missingFromAllCourses = semesterCourseCodes.filter((code) => !byCode.has(code));
  if (missingFromAllCourses.length) {
    fail('SEMESTER-COURSE-REGISTRY-MISMATCH', `Course ada di SEMESTERS tetapi hilang dari ALL_COURSES: ${missingFromAllCourses.join(', ')}`);
  }

  const summary = {
    pass: failures.length === 0,
    checks: 13 + universalCodes.length * 4 + requiredCssSelectors.length + requiredLayoutSignals.length,
    universalCourses: universalCodes,
    totalCourses: allCourses.length,
    totalSemesters: SEMESTERS.length,
    failures,
  };

  console.log(JSON.stringify(summary, null, 2));
  if (failures.length) process.exit(1);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
