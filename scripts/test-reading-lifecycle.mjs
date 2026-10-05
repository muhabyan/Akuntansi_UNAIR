import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { Simulate } from 'react-dom/test-utils';
import { createServer } from 'vite';

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/course/MNS301' });
const { window } = dom;
const { document, localStorage } = window;
for (const key of ['window', 'document', 'HTMLElement', 'SVGElement', 'Node', 'Event', 'CustomEvent', 'MouseEvent', 'PopStateEvent', 'localStorage', 'sessionStorage', 'MutationObserver', 'Element']) globalThis[key] = window[key];
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
globalThis.getComputedStyle = window.getComputedStyle.bind(window);
globalThis.requestAnimationFrame = callback => setTimeout(callback, 0);
globalThis.cancelAnimationFrame = id => clearTimeout(id);
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
window.scrollTo = () => {};
window.HTMLElement.prototype.scrollIntoView = () => {};
window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
globalThis.IntersectionObserver = window.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
globalThis.ResizeObserver = window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
const pause = () => new Promise(resolve => setTimeout(resolve, 30));
const button = (text, within = document) => [...within.querySelectorAll('button')].find(b => b.textContent.trim() === text);
const click = async element => {
  assert.ok(element, 'click target exists');
  await act(async () => { element.click(); await pause(); });
};
const waitFor = async predicate => {
  for (let i = 0; i < 100; i++) {
    if (predicate()) return;
    await act(pause);
  }
  throw Error('Reading failed to load');
};
let server, root;
const checks = [];
function closed(label, count = 17) {
  const answers = [...document.querySelectorAll('.course-solution-surface button[aria-expanded]')];
  assert.equal(answers.length, count, label);
  assert.equal(answers.filter(b => b.getAttribute('aria-expanded') === 'true').length, 0, `${label}: solutions closed`);
  assert.ok([...document.querySelectorAll('.layered-self-check textarea')].every(t => t.value === ''), `${label}: drafts empty`);
  assert.equal(document.querySelectorAll('.layered-self-check > .border-t').length, 0, `${label}: self-check answers closed`);
  assert.ok([...document.querySelectorAll('.layered-self-check button')].filter(b => b.textContent.includes('Lihat contoh jawaban')).every(b => b.disabled), `${label}: tried flags reset`);
  checks.push(label);
}
async function attempt(label) {
  const solution = [...document.querySelectorAll('.course-solution-surface')].find(s => s.querySelector('h3')?.textContent.includes(label));
  assert.ok(solution, `case ${label} exists`);
  await click(solution.querySelector('button[aria-expanded]'));
  const self = document.querySelector('.layered-self-check');
  const draft = `Draft ${label} hanya untuk materi ini`;
  await act(async () => { Simulate.change(self.querySelector('textarea'), { target: { value: draft } }); await pause(); });
  assert.equal(self.querySelector('textarea').value, draft, 'real controlled draft changed');
  await click(button('Lihat contoh jawaban', self));
  // Exercise the separate tried state even without typing into another self-check.
  const second = document.querySelectorAll('.layered-self-check')[1];
  await click(button('Saya sudah mencoba', second));
  assert.equal(button('Lihat contoh jawaban', second).disabled, false);
  assert.equal(solution.querySelector('button').getAttribute('aria-expanded'), 'true');
  assert.ok(self.querySelector('.border-t'), 'self-check answer visible');
}
async function historyTo(state) {
  await act(async () => {
    window.history.pushState(state, '', window.location.pathname);
    window.dispatchEvent(new window.PopStateEvent('popstate', { state }));
    await pause();
  });
}
try {
  server = await createServer({ root: process.cwd(), cacheDir: path.join(os.tmpdir(), `reading-lifecycle-${process.pid}`), appType: 'custom', server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true }, logLevel: 'silent' });
  const [{ default: CourseLayout }, { SEMESTERS }, { MANSTRAT_READINGS, MANSTRAT_REVIEW_READINGS }, { DESKTOP_OUTLINE_STORAGE_KEY }] = await Promise.all([
    server.ssrLoadModule('/src/components/course/CourseLayout.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
    server.ssrLoadModule('/src/data/manstrat/manstratData.ts'),
    server.ssrLoadModule('/src/components/course/ReadingOutline.tsx'),
  ]);
  const courses = SEMESTERS.flatMap(s => s.groups.flatMap(g => g.courses));
  const course = courses.find(c => c.code === 'MNS301');
  root = createRoot(document.getElementById('root'));
  const render = async (target, initialTm = null) => {
    await act(async () => { root.render(React.createElement(CourseLayout, { course: target, initialTm, onBack() {} })); await pause(); });
    await waitFor(() => initialTm === null ? document.querySelector('button[aria-label^="Buka TM 3:"]') : document.querySelector('.reading-document'));
  };
  localStorage.setItem('theme', 'dark');
  await render(course); // New course visit, not one reload per TM.
  await click(document.querySelector('button[aria-label^="Buka TM 3:"]'));
  closed('new visit TM03');
  await attempt('Atlas');
  await click(button('Tandai sudah dipelajari'));
  await click(document.querySelector('button[aria-controls="reading-outline-desktop-panel"]'));
  assert.equal(localStorage.getItem(DESKTOP_OUTLINE_STORAGE_KEY), 'true');
  await click(button('Berikutnya'));
  closed('TM03 → TM04 via Berikutnya', 18);
  assert.equal(localStorage.getItem(DESKTOP_OUTLINE_STORAGE_KEY), 'true', 'outline preference survives remount');
  await attempt('Panasonic');
  await click(button('Sebelumnya'));
  closed('TM04 → TM03 via Sebelumnya');
  assert.ok(button('Sudah dipelajari'), 'TM03 progress survives navigation');
  assert.equal(JSON.parse(localStorage.getItem('akuntansi-feb-unair:study-progress'))['MNS301:tm3'], true);
  assert.equal(localStorage.getItem('theme'), 'dark', 'theme survives navigation');
  await attempt('Atlas');
  await historyTo({ akuntansihub_tm: 4 });
  closed('TM03 → TM04 via history', 18);

  await attempt('Panasonic');
  await click(button('Berikutnya')); closed('TM04 → TM05 via Berikutnya',21);
  await attempt('McDonald');
  await click(button('Berikutnya')); closed('TM05 → TM06 via Berikutnya',20);
  await attempt('Nissan');
  await click(button('Sebelumnya')); closed('TM06 → TM05 via Sebelumnya',21);
  await attempt('McDonald');
  await click(button('Sebelumnya')); closed('TM05 → TM04 via Sebelumnya',18);

  // In-memory test fixtures only: review/simulation with the SAME TM and block
  // indices as a normal reading, plus two distinct review keys with that TM.
  // This isolates the identity boundary; no course source is written or changed.
  MANSTRAT_REVIEW_READINGS.uts = { ...MANSTRAT_READINGS[3], title: 'Simulasi UTS' };
  MANSTRAT_REVIEW_READINGS.uas = { ...MANSTRAT_READINGS[3], title: 'Simulasi UAS' };
  await historyTo({ akuntansihub_tm: 3 });
  await attempt('Atlas');
  await historyTo({ akuntansihub_review: 'uts' });
  closed('normal TM03 → review uts with tm=3');
  await attempt('Atlas');
  await historyTo({ akuntansihub_review: 'uas' });
  closed('review uts → review uas with tm=3');
  await attempt('Atlas');
  await historyTo({ akuntansihub_tm: 3 });
  closed('review uas → normal TM03');
  await attempt('Atlas');
  await render(courses.find(c => c.code === 'MNU108'), 3);
  assert.ok([...document.querySelectorAll('.layered-self-check textarea')].every(t => t.value === ''), 'another course receives no draft');
  assert.equal(document.querySelectorAll('.course-solution-surface button[aria-expanded="true"]').length, 0, 'another course receives no open solution');
  await render(course, 3);
  closed('course switch back to MNS301 TM03');
  assert.ok(button('Sudah dipelajari'), 'progress survives course switch');
  await act(async () => { root.unmount(); await pause(); });
  root = createRoot(document.getElementById('root'));
  await render(course);
  await click(document.querySelector('button[aria-label^="Buka TM 4:"]'));
  closed('new visit TM04', 18);
  await attempt('Panasonic');
  await click(button('Sebelumnya'));
  closed('new visit TM04 → TM03 via Sebelumnya');
  console.log(JSON.stringify({ pass: true, checks, persistence: ['study progress', 'outline preference', 'theme'] }, null, 2));
} finally {
  if (root) await act(async () => root.unmount());
  await server?.close();
  dom.window.close();
}
// Supabase's client starts background timers even without a configured account.
process.exit(0);
