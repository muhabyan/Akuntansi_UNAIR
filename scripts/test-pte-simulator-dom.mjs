import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/course/EKT109' });
const { window } = dom;
const doc = window.document;
const storage = window.localStorage;
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
  assert(element, 'Elemen klik tidak ditemukan');
  if (!element) return;
  await act(async () => {
    element.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  });
};
const change = async (element, value) => {
  assert(element, `Elemen change tidak ditemukan untuk nilai ${value}`);
  if (!element) return;
  await act(async () => {
    const setter = Object.getOwnPropertyDescriptor(element.constructor.prototype, 'value')?.set;
    setter?.call(element, value);
    element.dispatchEvent(new window.Event('change', { bubbles: true }));
  });
};
const settle = async (milliseconds = 0) => {
  await act(async () => { await new Promise((resolve) => setTimeout(resolve, milliseconds)); });
};

const vite = await createServer({ appType: 'custom', logLevel: 'error', server: { middlewareMode: true, hmr: { port: 24779 } }, optimizeDeps: { noDiscovery: true } });
let root;
try {
  const componentModulePath = process.env.PTE_SIMULATOR_COMPONENT_MODULE ?? '/src/components/PteSimulatorTab.tsx';
  const quizModule = await vite.ssrLoadModule(componentModulePath);
  const courseModule = await vite.ssrLoadModule('/src/data/courseData.ts');
  const quizViewModule = await vite.ssrLoadModule('/src/components/QuizView.tsx');
  const simulatorModule = await vite.ssrLoadModule('/src/data/quizzes/ekt109Simulator.ts');
  const integrityModule = await vite.ssrLoadModule('/src/lib/quizExamIntegrity.ts');
  const PteSimulatorTab = quizModule.default;
  const QuizView = quizViewModule.default;
  const course = courseModule.ALL_COURSES.find((entry) => entry.course.code === 'EKT109')?.course;
  const utsQuestions = simulatorModule.EKT109_QUIZ_UTS_SIMULATOR;
  const courseRoot = doc.getElementById('root');
  const utsKey = 'exam-session:EKT109:uts:5400:v2';
  const uasKey = 'exam-session:EKT109:uas:5400:v2';
  assert(course, 'Course EKT109 tidak ditemukan');

  storage.setItem(utsKey, JSON.stringify({
    picks: { 0: 1 }, fillAnswers: {}, matchAnswers: {}, multiAnswers: {}, orderingAnswers: {}, markedForReview: { 0: true },
    submitted: false, autoSubmitted: false, examStarted: true, examDeadlineMs: Date.now() + 500000,
    datasetFingerprint: 'fnv1a-deadbeef', savedAt: Date.now(),
  }));

  root = createRoot(courseRoot);
  await act(async () => { root.render(React.createElement(PteSimulatorTab, { course })); });
  await settle();

  assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === 0, 'PRESTART_CONCEALMENT: UTS tidak boleh merender kartu soal sebelum mulai');
  assert(doc.querySelectorAll('[data-testid^="quiz-graph-"]').length === 0, 'PRESTART_CONCEALMENT: grafik tidak boleh dirender sebelum mulai');
  assert(!doc.querySelector('[data-testid="quiz-navigation"]'), 'PRESTART_CONCEALMENT: navigasi soal tidak boleh tampil sebelum mulai');
  assert(doc.querySelector('[data-testid="quiz-start-exam"]'), 'Session fingerprint salah harus kembali ke state belum mulai');
  assert(!doc.querySelector('[data-testid="quiz-submit-exam"]'), 'PRESTART_CONCEALMENT: submit tidak perlu tampil sebelum mulai');

  await click(doc.querySelector('[data-testid="quiz-start-exam"]'));
  await settle();
  assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === 70, 'UTS harus merender 70 kartu setelah mulai');
  assert(doc.querySelectorAll('[data-testid^="quiz-graph-"]').length === 8, 'UTS harus merender 8 grafik setelah mulai');
  assert(doc.querySelector('[data-testid="quiz-navigation"]'), 'Navigasi ujian UTS tidak tersedia setelah mulai');
  assert(doc.querySelectorAll('[data-testid^="quiz-mark-"]').length === 70, 'Setelah mulai, seluruh 70 soal harus dapat ditandai');
  await click(doc.querySelector('[data-testid="quiz-mark-1"]'));
  await settle();

  const utsSession = JSON.parse(storage.getItem(utsKey) ?? 'null');
  assert(utsSession?.examStarted === true, 'Session UTS harus menyimpan examStarted');
  assert(utsSession?.markedForReview?.['0'] === true, 'Tanda tinjau UTS harus tersimpan');
  assert(/^fnv1a-[0-9a-f]{8}$/.test(utsSession?.datasetFingerprint ?? ''), 'Fingerprint UTS tidak valid');

  const orderingQuestion = utsQuestions.find((question) => question.id === 'PTE-BANK-UTS-007');
  const orderingCard = doc.querySelector('[data-question-id="PTE-BANK-UTS-007"]');
  const orderingSelects = orderingCard?.querySelectorAll('select') ?? [];
  assert(orderingQuestion?.kind === 'ordering', 'Fixture ordering UTS tidak ditemukan');
  assert(orderingSelects.length === orderingQuestion?.correctOrder.length, `Soal ordering UTS harus memiliki ${orderingQuestion?.correctOrder.length} posisi, aktual ${orderingSelects.length}`);
  for (let index = 0; index < (orderingQuestion?.correctOrder.length ?? 0); index += 1) {
    await change(orderingSelects[index], orderingQuestion.correctOrder[index]);
  }
  await settle();
  const updatedUtsSession = JSON.parse(storage.getItem(utsKey) ?? 'null');
  assert(Object.keys(updatedUtsSession?.orderingAnswers ?? {}).length === orderingQuestion?.correctOrder.length, 'Jawaban ordering lengkap harus tersimpan');

  await act(async () => { root.unmount(); });
  root = createRoot(courseRoot);
  await act(async () => { root.render(React.createElement(PteSimulatorTab, { course })); });
  await settle();
  const restoredMark = doc.querySelector('[data-testid="quiz-mark-1"]');
  assert(restoredMark?.getAttribute('aria-pressed') === 'true', 'Tanda tinjau UTS tidak pulih setelah remount');
  assert(doc.body.textContent.includes('Sisa waktu'), 'Timer UTS tidak pulih setelah remount');

  await click(doc.querySelector('[data-testid="quiz-submit-exam"]'));
  await settle();
  assert(doc.querySelector('[data-testid="quiz-review-filter"]'), 'Filter review hasil harus tersedia setelah submit');
  assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === 70, 'Filter default Semua harus menampilkan 70 soal');
  await click(doc.querySelector('[data-testid="quiz-filter-correct"]'));
  await settle();
  assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === 1, 'Filter Benar harus menampilkan satu soal ordering yang dijawab benar');
  await click(doc.querySelector('[data-testid="quiz-filter-wrong"]'));
  await settle();
  assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === 69, 'Filter Salah harus menampilkan 69 soal salah/kosong');
  await click(doc.querySelector('[data-testid="quiz-filter-all"]'));
  await settle();
  assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === 70, 'Filter Semua harus memulihkan seluruh soal');

  await click(doc.querySelector('[data-testid="quiz-reset-exam"]'));
  await settle();
  assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === 0, 'Reset PTE harus kembali ke pre-start concealment');
  await click(doc.querySelector('[data-testid="quiz-set-uas"]'));
  await settle();
  assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === 0, 'UAS juga harus tersembunyi sebelum mulai');
  assert(storage.getItem(utsKey) === null, 'Reset harus membersihkan session UTS');
  await click(doc.querySelector('[data-testid="quiz-start-exam"]'));
  await settle();
  assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === 80, 'UAS harus merender 80 kartu setelah mulai');
  assert(doc.querySelectorAll('[data-testid^="quiz-graph-"]').length === 17, 'UAS harus merender 17 grafik setelah mulai');
  const uasSession = JSON.parse(storage.getItem(uasKey) ?? 'null');
  assert(uasSession?.examStarted === true, 'Session UAS harus menyimpan examStarted');
  assert(/^fnv1a-[0-9a-f]{8}$/.test(uasSession?.datasetFingerprint ?? ''), 'Fingerprint UAS tidak valid');

  // Live timer expiry: restore a session that still has time, then let the running effect cross the deadline.
  await act(async () => { root.unmount(); });
  storage.clear();
  const fingerprint = integrityModule.getQuizDatasetFingerprint(utsQuestions);
  storage.setItem(utsKey, JSON.stringify({
    picks: {}, fillAnswers: {}, matchAnswers: {}, multiAnswers: {}, orderingAnswers: {}, markedForReview: {},
    submitted: false, autoSubmitted: false, examStarted: true, examDeadlineMs: Date.now() + 80,
    datasetFingerprint: fingerprint, savedAt: Date.now(),
  }));
  root = createRoot(courseRoot);
  await act(async () => { root.render(React.createElement(PteSimulatorTab, { course })); });
  await settle(1150);
  assert(doc.body.textContent.includes('Waktu ujian habis.'), 'LIVE_AUTO_SUBMIT: timer yang melewati deadline harus menampilkan status auto-submit');
  assert(doc.querySelector('[data-testid="quiz-submit-exam"]')?.disabled === true, 'LIVE_AUTO_SUBMIT: hasil harus terkunci setelah deadline');
  const expiredSession = JSON.parse(storage.getItem(utsKey) ?? 'null');
  assert(expiredSession?.submitted === true && expiredSession?.autoSubmitted === true, 'LIVE_AUTO_SUBMIT: state terminal harus tersimpan');

  // Corrupt JSON must fail closed to a fresh pre-start state.
  await act(async () => { root.unmount(); });
  storage.setItem(utsKey, '{corrupt-json');
  root = createRoot(courseRoot);
  await act(async () => { root.render(React.createElement(PteSimulatorTab, { course })); });
  await settle();
  assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === 0, 'CORRUPT_SESSION: session rusak harus ditolak dan kembali ke pre-start');
  assert(doc.querySelector('[data-testid="quiz-start-exam"]'), 'CORRUPT_SESSION: tombol mulai harus tersedia setelah session rusak ditolak');

  // Shared-component isolation: legacy courses retain their original pre-start cards and never receive PTE review controls.
  await act(async () => { root.unmount(); });
  root = undefined;
  const legacyExpected = { AKK201: 20, AKM201: 70, PJK201: 70 };
  for (const code of ['AKK201', 'AKM201', 'PJK201']) {
    storage.clear();
    const legacyCourse = courseModule.ALL_COURSES.find((entry) => entry.course.code === code)?.course;
    root = createRoot(courseRoot);
    await act(async () => { root.render(React.createElement(QuizView, { course: legacyCourse, mode: 'exam' })); });
    await settle();
    assert(doc.querySelectorAll('[data-testid="quiz-question-card"]').length === legacyExpected[code], `ISOLATION_${code}: pre-start cards berubah`);
    assert(doc.querySelectorAll('[data-testid^="quiz-mark-"]').length === 0, `ISOLATION_${code}: tanda tinjau bocor sebelum mulai`);
    await click(doc.querySelector('[data-testid="quiz-start-exam"]'));
    await settle();
    assert(doc.querySelectorAll('[data-testid^="quiz-mark-"]').length === 0, `ISOLATION_${code}: tanda tinjau bocor setelah mulai`);
    assert(!doc.querySelector('[data-testid="quiz-review-filter"]'), `ISOLATION_${code}: filter PTE bocor`);
    await act(async () => { root.unmount(); });
    root = undefined;
  }
} finally {
  if (root) await act(async () => { root.unmount(); });
  await vite.close();
  dom.window.close();
}

if (failures.length) {
  console.error(`PTE simulator DOM test failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('PTE simulator DOM test passed: pre-start concealment, 70/80 rendering, graphs, review marking, v2 persistence, restore, wrong/correct filters, session rejection, legacy-course isolation, set isolation, and live deadline auto-submit verified.');
