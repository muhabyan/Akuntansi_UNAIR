import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import postcss from 'postcss';
import { createServer } from 'vite';

const root = process.env.UX10B_ROOT ? path.resolve(process.env.UX10B_ROOT) : process.cwd();
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
const cssPath = 'src/styles/ux-v2-catalog.css';
const css = read(cssPath);

check(app.includes("selectedCourse?.code === 'AKM201' && !routeNotFound"), 'Frozen AKBI gate remains exact');
check(app.includes("activeSemester?.id === 'sem2' && selectedCourse === null && !routeNotFound"), 'Semester 2 catalog gate is exact');
check(app.includes("isSemester2CatalogPilot ? ' ux-v2-catalog' : ''"), 'Catalog class is conditional');
check(app.includes('isQuietThemeControl={true}'), 'Catalog inherits global quiet theme control from final App shell');
check(semesterView.includes("if (semester.id === 'sem2')"), 'SemesterView isolates the pilot to sem2');
check(semesterView.includes('<LegacySemesterView semester={semester}'), 'Nonpilot semester implementation is preserved');
check(main.includes("import './index.css';\nimport './styles/ux-v2.css';\nimport './styles/ux-v2-catalog.css';"), 'Catalog stylesheet loads after frozen pilot stylesheet');

const expectedCodes = ['AKK201', 'AKM201', 'PJK201', 'AKA103', 'MNU101', 'EKT109', 'MAS122'];
for (const code of expectedCodes) check(catalog.includes(code), `Catalog contract includes ${code}`);
check(catalog.includes("title: 'Keahlian'"), 'Keahlian group heading is canonical');
check(catalog.includes("title: 'Pendukung'"), 'Pendukung group heading is canonical');
check(catalog.includes("sourceTitle: 'Mata Kuliah Keahlian (Akuntansi & Pajak)'"), 'Keahlian source group is explicit');
check(catalog.includes("sourceTitle: 'Mata Kuliah Pendukung (Bisnis & Ekonomi)'"), 'Pendukung source group is explicit');
check(catalog.includes("courseCodes: ['AKK201', 'AKM201', 'PJK201', 'AKA103']"), 'Keahlian inventory is exact');
check(catalog.includes("courseCodes: ['MNU101', 'EKT109', 'MAS122']"), 'Pendukung inventory is exact');
check(catalog.includes('actualCourses.length === EXPECTED_COURSE_COUNT'), 'Actual inventory count is fail-closed');
check(catalog.includes('new Set(actualCodes).size === actualCodes.length'), 'Duplicate course codes are rejected');
check(catalog.includes('hasExactCodeSet(actualCodes, EXPECTED_COURSE_CODES)'), 'Actual course-code set must be exact');
check(catalog.includes('actualSks === EXPECTED_TOTAL_SKS'), 'Actual SKS sum must equal 20');
check(catalog.includes('actualSks === semester.totalSks'), 'Actual SKS sum must match declared metadata');
check(catalog.includes('hasExactGroupMembership(semester.groups, SEMESTER_2_GROUPS)'), 'Canonical group membership is fail-closed');
check(catalog.includes('actualGroups.length !== expectedGroups.length'), 'Extra or missing groups are rejected');
check(catalog.includes('new Set(actualTitles).size !== actualTitles.length'), 'Duplicate group titles are rejected');
check(catalog.includes('if (!validateSemester2Inventory(semester)) return null;'), 'Catalog resolution runs only after exact validation');
check(catalog.includes('const firstIncomplete = materials.find('), 'Continue-learning uses firstIncomplete');
check(catalog.includes("'Tinjau kembali →'"), 'Completed-state CTA is present');
check(/\n\s+href=\{`\/course\/\$\{encodeURIComponent\(course\.code\)\}`\}/.test(catalog), 'Semantic course anchor declares canonical href');
check(catalog.includes('event.preventDefault();'), 'Semantic anchors preserve SPA route behavior');
check(/\n\s+role="progressbar"/.test(catalog), 'Progressbar role remains in source contract');
check(!catalog.includes('featureBadge'), 'Feature badge metadata is absent from pilot component');
check(!catalog.includes('MetricCard'), 'Metric boxes are absent from pilot component');
check(!/Interaktif lengkap|Flashcard \+ Bank Soal/i.test(catalog), 'Promotional feature badges are absent');

const ast = postcss.parse(css, { from: cssPath });
let activeBackdrop = false;
let gradientFound = false;
ast.walkDecls((decl) => {
  if ((decl.prop === 'backdrop-filter' || decl.prop === '-webkit-backdrop-filter') && decl.value.trim() !== 'none') activeBackdrop = true;
  if (/gradient\s*\(/i.test(decl.value)) gradientFound = true;
});
check(!activeBackdrop, 'Catalog CSS contains no active backdrop blur');
check(!gradientFound, 'Catalog CSS contains no gradient function');
check(css.includes('@media (min-width: 768px)') && css.includes('grid-template-columns: repeat(2, minmax(0, 1fr))'), 'Tablet catalog uses two columns');
check(css.includes('@media (min-width: 1180px)') && css.includes('grid-template-columns: repeat(3, minmax(0, 1fr))'), 'Wide catalog uses three columns maximum');
check(css.includes('@media (max-width: 767px)') && css.includes('grid-template-columns: 1fr'), 'Mobile catalog remains one column');
check(css.includes('min-height: 44px'), 'Back control meets minimum touch target');
check(css.includes('@media (prefers-reduced-motion: reduce)'), 'Reduced-motion contract is present');

for (const rule of ast.nodes.filter((node) => node.type === 'rule')) {
  for (const selector of rule.selectors ?? []) {
    const normalized = selector.trim();
    check(
      normalized.startsWith('.ux-v2-catalog') ||
        normalized.startsWith('html.dark .ux-v2-catalog') ||
        normalized.startsWith('.semester2-'),
      `Catalog selector remains scoped: ${normalized}`,
    );
  }
}

function tokenMap(selector) {
  const values = new Map();
  ast.walkRules((rule) => {
    if ((rule.selectors ?? []).includes(selector)) {
      rule.walkDecls((decl) => {
        if (decl.prop.startsWith('--catalog-')) values.set(decl.prop, decl.value.trim().toLowerCase());
      });
    }
  });
  return values;
}

function rgb(hex) {
  const raw = hex.replace('#', '');
  return [0, 2, 4].map((index) => Number.parseInt(raw.slice(index, index + 2), 16) / 255);
}
function luminance(hex) {
  return rgb(hex)
    .map((channel) => channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
    .reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
}
function contrast(foreground, background) {
  const [high, low] = [luminance(foreground), luminance(background)].sort((left, right) => right - left);
  return (high + 0.05) / (low + 0.05);
}
const light = tokenMap('.ux-v2-catalog');
const dark = tokenMap('html.dark .ux-v2-catalog');
for (const [theme, tokens] of [['light', light], ['dark', dark]]) {
  const primaryRatio = contrast(tokens.get('--catalog-text-primary'), tokens.get('--catalog-canvas'));
  const secondaryRatio = contrast(tokens.get('--catalog-text-secondary'), tokens.get('--catalog-canvas'));
  const mutedRatio = contrast(tokens.get('--catalog-text-muted'), tokens.get('--catalog-canvas'));
  const accentRatio = contrast(tokens.get('--catalog-accent-strong'), tokens.get('--catalog-canvas'));
  check(primaryRatio >= 4.5, `${theme} primary contrast ${primaryRatio.toFixed(2)}:1`);
  check(secondaryRatio >= 4.5, `${theme} secondary contrast ${secondaryRatio.toFixed(2)}:1`);
  check(mutedRatio >= 4.5, `${theme} muted contrast ${mutedRatio.toFixed(2)}:1`);
  check(accentRatio >= 4.5, `${theme} accent contrast ${accentRatio.toFixed(2)}:1`);
}

const progressState = {};
for (const tm of [1, 2, 7]) progressState[`AKK201:tm${tm}`] = true;
for (let tm = 1; tm <= 14; tm += 1) progressState[`AKM201:tm${tm}`] = true;

globalThis.localStorage = {
  getItem(key) {
    return key === 'akuntansi-feb-unair:study-progress' ? JSON.stringify(progressState) : null;
  },
  setItem() {},
  removeItem() {},
  clear() {},
  key() { return null; },
  length: 1,
};

if (process.env.UX10B_STATIC_ONLY !== '1') {
  let server;
  try {
    server = await createServer({
      root,
      appType: 'custom',
      server: { middlewareMode: true },
      logLevel: 'silent',
    });
    const [catalogModule, { SEMESTERS }] = await Promise.all([
      server.ssrLoadModule('/src/components/Semester2CatalogView.tsx'),
      server.ssrLoadModule('/src/data/courseData.ts'),
    ]);
    const Semester2CatalogView = catalogModule.default;
    const { validateSemester2Inventory } = catalogModule;
    const semester = SEMESTERS.find((candidate) => candidate.id === 'sem2');
    check(Boolean(semester), 'Semester 2 exists in real course registry');
    check(validateSemester2Inventory(semester) === true, 'Real Semester 2 inventory passes exact validator');

    const renderCatalog = (candidate) => {
      const markup = renderToStaticMarkup(
        React.createElement(Semester2CatalogView, {
          semester: candidate,
          onBack() {},
          onCourseClick() {},
        }),
      );
      return { markup, document: new JSDOM(markup).window.document };
    };

    const { markup, document } = renderCatalog(semester);
    const articles = [...document.querySelectorAll('article.semester2-course')];
    const anchors = [...document.querySelectorAll('article.semester2-course > a.semester2-course__link')];
    const renderedCodes = anchors.map((anchor) => anchor.getAttribute('data-course-code'));

    check(articles.length === 7, 'Rendered catalog has seven course articles', `found ${articles.length}`);
    check(anchors.length === 7, 'Every course article has one semantic anchor root', `found ${anchors.length}`);
    check(JSON.stringify(renderedCodes) === JSON.stringify(expectedCodes), 'Rendered inventory and order match frozen contract', renderedCodes.join(', '));
    check(document.querySelectorAll('article.semester2-course button').length === 0, 'Course anchors contain no nested interactive button');
    check(document.querySelectorAll('[role="progressbar"]').length === 7, 'Every course exposes progress semantics');
    check(document.querySelectorAll('[data-course-group="Keahlian"]').length === 5, 'Keahlian group contains heading plus four course records');
    check(document.querySelectorAll('[data-course-group="Pendukung"]').length === 4, 'Pendukung group contains heading plus three course records');
    check(anchors.every((anchor) => anchor.getAttribute('href') === `/course/${anchor.getAttribute('data-course-code')}`), 'All semantic anchors preserve canonical course routes');

    const byCode = (code) => document.querySelector(`[data-course-code="${code}"]`);
    check(byCode('AKK201')?.textContent.includes('3 dari 14 selesai'), 'Noncontiguous progress counts real completed TM');
    check(byCode('AKK201')?.textContent.includes('Lanjutkan ke TM 3 →'), 'firstIncomplete selects TM 3, not highest completed TM');
    check(byCode('AKM201')?.textContent.includes('Tinjau kembali →'), 'All-complete course uses review CTA');
    check(byCode('PJK201')?.textContent.includes('Mulai TM 1 →'), 'Untouched course uses start CTA');
    check(byCode('AKK201')?.querySelector('[role="progressbar"]')?.getAttribute('aria-valuenow') === '3', 'Progressbar value matches completed count');
    check(byCode('AKM201')?.querySelector('[role="progressbar"]')?.getAttribute('aria-valuenow') === '14', 'Completed progressbar exposes full value');
    check(!markup.includes('Interaktif lengkap'), 'Rendered catalog has no feature badge copy');
    check(!markup.includes('rounded-full'), 'Rendered pilot has no inherited pill badge utility');

    const cloneSemester = () => structuredClone(semester);
    const assertRejected = (label, mutate) => {
      const candidate = cloneSemester();
      mutate(candidate);
      check(validateSemester2Inventory(candidate) === false, `${label}: pure validator rejects mutation`);
      const rejected = renderCatalog(candidate);
      check(Boolean(rejected.document.querySelector('[role="alert"]')), `${label}: integrity alert is rendered`);
      check(rejected.document.querySelectorAll('article.semester2-course').length === 0, `${label}: partial catalog is not rendered`);
      check(rejected.document.querySelectorAll('a.semester2-course__link').length === 0, `${label}: no course route remains reachable`);
    };

    assertRejected('Wrong semester id', (candidate) => { candidate.id = 'sem1'; });
    assertRejected('Declared total SKS drift', (candidate) => { candidate.totalSks = 21; });
    assertRejected('Missing required course', (candidate) => {
      candidate.groups[1].courses = candidate.groups[1].courses.filter((course) => course.code !== 'MAS122');
    });
    assertRejected('Extra zero-SKS course', (candidate) => {
      candidate.groups[1].courses.push({ ...candidate.groups[1].courses[2], code: 'ZZZ000', name: 'Unexpected Course', sks: 0 });
    });
    assertRejected('Duplicate course code', (candidate) => {
      candidate.groups[0].courses.push({ ...candidate.groups[0].courses[0], sks: 0 });
    });
    assertRejected('Unknown code replaces required course', (candidate) => {
      candidate.groups[1].courses[2] = { ...candidate.groups[1].courses[2], code: 'ZZZ000' };
    });
    assertRejected('Actual SKS sum drift', (candidate) => { candidate.groups[0].courses[0].sks += 1; });
    assertRejected('Wrong canonical group membership', (candidate) => {
      const keahlianCourse = candidate.groups[0].courses[0];
      const pendukungCourse = candidate.groups[1].courses[0];
      candidate.groups[0].courses[0] = pendukungCourse;
      candidate.groups[1].courses[0] = keahlianCourse;
    });
    assertRejected('Duplicate source group title', (candidate) => { candidate.groups[1].title = candidate.groups[0].title; });
    assertRejected('Source group title drift', (candidate) => { candidate.groups[0].title = 'Keahlian'; });
    assertRejected('Extra empty source group', (candidate) => {
      candidate.groups.push({ title: 'Unexpected Empty Group', courses: [] });
    });
  } catch (error) {
    failures.push(`SSR catalog verification failed: ${error instanceof Error ? error.stack ?? error.message : String(error)}`);
  } finally {
    if (server) await server.close();
  }
}

const result = {
  pass: failures.length === 0,
  checks: passes.length + failures.length,
  passed: passes.length,
  failed: failures.length,
  failures,
};
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exit(1);
