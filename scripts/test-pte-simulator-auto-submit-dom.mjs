import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/course/EKT109' });
const { window } = dom;
const doc = window.document;
Object.assign(globalThis, {
  window,
  document: doc,
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

const vite = await createServer({ appType: 'custom', logLevel: 'silent', server: { middlewareMode: true, hmr: { port: 24779 } }, optimizeDeps: { noDiscovery: true } });
let root;
try {
  const componentPath = process.env.PTE_SIMULATOR_COMPONENT_MODULE ?? '/src/components/PteSimulatorTab.tsx';
  const componentModule = await vite.ssrLoadModule(componentPath);
  const courseModule = await vite.ssrLoadModule('/src/data/courseData.ts');
  const simulatorModule = await vite.ssrLoadModule('/src/data/quizzes/ekt109Simulator.ts');
  const integrityModule = await vite.ssrLoadModule('/src/lib/quizExamIntegrity.ts');
  const course = courseModule.ALL_COURSES.find((entry) => entry.course.code === 'EKT109')?.course;
  const questions = simulatorModule.EKT109_QUIZ_UTS_SIMULATOR;
  const key = 'exam-session:EKT109:uts:5400:v2';
  window.localStorage.setItem(key, JSON.stringify({
    picks: {}, fillAnswers: {}, matchAnswers: {}, multiAnswers: {}, orderingAnswers: {}, markedForReview: {},
    submitted: false, autoSubmitted: false, examStarted: true, examDeadlineMs: Date.now() + 80,
    datasetFingerprint: integrityModule.getQuizDatasetFingerprint(questions), savedAt: Date.now(),
  }));
  root = createRoot(doc.getElementById('root'));
  await act(async () => { root.render(React.createElement(componentModule.default, { course })); });
  await act(async () => { await new Promise((resolve) => setTimeout(resolve, 1150)); });
  assert(doc.body.textContent.includes('Waktu ujian habis.'), 'LIVE_AUTO_SUBMIT: deadline aktif tidak mengunci ujian');
  const session = JSON.parse(window.localStorage.getItem(key) ?? 'null');
  assert(session?.submitted === true && session?.autoSubmitted === true, 'LIVE_AUTO_SUBMIT: state terminal tidak tersimpan');
} finally {
  if (root) await act(async () => { root.unmount(); });
  await vite.close();
  dom.window.close();
}

if (failures.length) {
  console.error(`PTE simulator auto-submit DOM test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('PTE simulator auto-submit DOM test passed: live deadline transition locks and persists the attempt.');
