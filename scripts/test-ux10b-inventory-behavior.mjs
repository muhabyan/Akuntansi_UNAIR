import path from 'node:path';
import process from 'node:process';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const root = process.env.UX10B_ROOT ? path.resolve(process.env.UX10B_ROOT) : process.cwd();
const failures = [];
const passes = [];

function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

globalThis.localStorage = {
  getItem() { return null; },
  setItem() {},
  removeItem() {},
  clear() {},
  key() { return null; },
  length: 0,
};

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

  const renderCatalog = (candidate) => {
    const markup = renderToStaticMarkup(
      React.createElement(Semester2CatalogView, {
        semester: candidate,
        onBack() {},
        onCourseClick() {},
      }),
    );
    return new JSDOM(markup).window.document;
  };

  check(Boolean(semester), 'Fixture Semester 2 exists');
  check(validateSemester2Inventory(semester) === true, 'Valid inventory passes validator');
  const validDocument = renderCatalog(semester);
  check(validDocument.querySelector('[role="alert"]') === null, 'Valid inventory does not render an alert');
  check(validDocument.querySelectorAll('a.semester2-course__link').length === 7, 'Valid inventory renders exactly seven routes');

  const cloneSemester = () => structuredClone(semester);
  const assertRejected = (label, mutate) => {
    const candidate = cloneSemester();
    mutate(candidate);
    check(validateSemester2Inventory(candidate) === false, `${label}: validator rejects`);
    const document = renderCatalog(candidate);
    check(Boolean(document.querySelector('[role="alert"]')), `${label}: alert renders`);
    check(document.querySelectorAll('article.semester2-course').length === 0, `${label}: no partial course articles`);
    check(document.querySelectorAll('a.semester2-course__link').length === 0, `${label}: no partial course routes`);
  };

  assertRejected('wrong-semester-id', (candidate) => { candidate.id = 'sem1'; });
  assertRejected('declared-total-drift', (candidate) => { candidate.totalSks = 21; });
  assertRejected('missing-required-course', (candidate) => {
    candidate.groups[1].courses = candidate.groups[1].courses.filter((course) => course.code !== 'MAS122');
  });
  assertRejected('extra-zero-sks-course', (candidate) => {
    candidate.groups[1].courses.push({ ...candidate.groups[1].courses[2], code: 'ZZZ000', name: 'Unexpected Course', sks: 0 });
  });
  assertRejected('duplicate-course-code', (candidate) => {
    candidate.groups[0].courses.push({ ...candidate.groups[0].courses[0], sks: 0 });
  });
  assertRejected('unknown-code-replacement', (candidate) => {
    candidate.groups[1].courses[2] = { ...candidate.groups[1].courses[2], code: 'ZZZ000' };
  });
  assertRejected('actual-sks-drift', (candidate) => { candidate.groups[0].courses[0].sks += 1; });
  assertRejected('wrong-group-membership', (candidate) => {
    const keahlianCourse = candidate.groups[0].courses[0];
    const pendukungCourse = candidate.groups[1].courses[0];
    candidate.groups[0].courses[0] = pendukungCourse;
    candidate.groups[1].courses[0] = keahlianCourse;
  });
  assertRejected('duplicate-source-group-title', (candidate) => { candidate.groups[1].title = candidate.groups[0].title; });
  assertRejected('source-group-title-drift', (candidate) => { candidate.groups[0].title = 'Keahlian'; });
  assertRejected('extra-empty-source-group', (candidate) => {
    candidate.groups.push({ title: 'Unexpected Empty Group', courses: [] });
  });
} catch (error) {
  failures.push(error instanceof Error ? error.stack ?? error.message : String(error));
} finally {
  if (server) await server.close();
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
process.exit(0);
