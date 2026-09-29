import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/' });
const { window } = dom;
Object.assign(globalThis, {
  window,
  document: window.document,
  localStorage: window.localStorage,
  HTMLElement: window.HTMLElement,
  SVGElement: window.SVGElement,
  Node: window.Node,
  Event: window.Event,
  MouseEvent: window.MouseEvent,
  getComputedStyle: window.getComputedStyle.bind(window),
  IS_REACT_ACT_ENVIRONMENT: true,
});
Object.defineProperty(globalThis, 'navigator', { configurable: true, value: window.navigator });
window.scrollTo = () => {};
window.confirm = () => true;
window.alert = () => {};
window.HTMLElement.prototype.scrollIntoView = () => {};

const click = async (element) => {
  if (!element) return;
  await act(async () => { element.dispatchEvent(new window.MouseEvent('click', { bubbles: true })); });
};
const settle = async () => { await act(async () => { await new Promise((resolve) => setTimeout(resolve, 0)); }); };
const expectedInitialCounts = { AKK201: 20, AKM201: 70, PJK201: 70 };
const vite = await createServer({ appType: 'custom', logLevel: 'error', server: { middlewareMode: true, hmr: { port: 24779 } }, optimizeDeps: { noDiscovery: true } });
let root;
try {
  const quizViewModule = await vite.ssrLoadModule('/src/components/QuizView.tsx');
  const courseModule = await vite.ssrLoadModule('/src/data/courseData.ts');
  const QuizView = quizViewModule.default;
  const doc = window.document;
  const container = doc.getElementById('root');

  for (const code of ['AKK201', 'AKM201', 'PJK201']) {
    window.localStorage.clear();
    const course = courseModule.ALL_COURSES.find((entry) => entry.course.code === code)?.course;
    assert(course, `${code}: course tidak ditemukan`);
    root = createRoot(container);
    await act(async () => { root.render(React.createElement(QuizView, { course, mode: 'exam' })); });
    await settle();

    // Every timed exam hides its questions until "Mulai Ujian" and offers review marking once started (unchanged
    // since 43828f5). The baseline per course: none before start, N questions and N review marks after.
    const initialCount = doc.querySelectorAll('[data-testid="quiz-question-card"]').length;
    assert(initialCount === 0, `${code}: soal harus tersembunyi sebelum mulai, ditemukan ${initialCount}`);
    assert(doc.querySelectorAll('[data-testid^="quiz-mark-"]').length === 0, `${code}: tombol tanda tinjau tidak boleh ada sebelum mulai`);
    await click(doc.querySelector('[data-testid="quiz-start-exam"]'));
    await settle();
    const startedCount = doc.querySelectorAll('[data-testid="quiz-question-card"]').length;
    assert(startedCount === expectedInitialCounts[code], `${code}: jumlah kartu setelah mulai berubah, kartu ${startedCount}, expected ${expectedInitialCounts[code]}`);
    assert(doc.querySelectorAll('[data-testid^="quiz-mark-"]').length === expectedInitialCounts[code], `${code}: setiap kartu harus punya tanda tinjau setelah mulai`);
    assert(!doc.querySelector('[data-testid="quiz-review-filter"]'), `${code}: filter hasil PTE bocor sebelum submit`);

    await act(async () => { root.unmount(); });
    root = undefined;
  }
} finally {
  if (root) await act(async () => { root.unmount(); });
  await vite.close();
  dom.window.close();
}

if (failures.length) {
  console.error(`PTE simulator isolation test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('PTE simulator isolation test passed: AKK201, AKM201, and PJK201 hide their questions before start and show N questions with N review marks after it.');
