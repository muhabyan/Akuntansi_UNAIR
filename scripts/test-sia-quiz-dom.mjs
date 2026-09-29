import assert from 'node:assert/strict';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/course/AKS301' });
const { window } = dom;
Object.assign(globalThis, {
  window, document: window.document, localStorage: window.localStorage,
  HTMLElement: window.HTMLElement, SVGElement: window.SVGElement, Node: window.Node,
  Event: window.Event, MouseEvent: window.MouseEvent,
  getComputedStyle: window.getComputedStyle.bind(window), IS_REACT_ACT_ENVIRONMENT: true,
});
Object.defineProperty(globalThis, 'navigator', { configurable: true, value: window.navigator });
window.scrollTo = () => {};
window.HTMLElement.prototype.scrollIntoView = () => {};

const vite = await createServer({ appType: 'custom', logLevel: 'error', server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true } });
let root;
try {
  const { default: QuizView } = await vite.ssrLoadModule('/src/components/QuizView.tsx');
  const { SIA_UTS_SUPPLEMENT } = await vite.ssrLoadModule('/src/data/quizzes/siaUtsSupplement.ts');
  const questions = [SIA_UTS_SUPPLEMENT.find((item) => item.id === 'sia-uts-tm1-08'), SIA_UTS_SUPPLEMENT.find((item) => item.id === 'sia-uts-tm1-10')];
  const sets = [{ id: 'uts', label: 'SIA UI test', items: questions }];
  root = createRoot(window.document.getElementById('root'));
  await act(async () => { root.render(React.createElement(QuizView, { course: { code: 'AKS301', name: 'Sistem Informasi Akuntansi' }, mode: 'practice', quizSetsOverride: sets })); });
  const cards = window.document.querySelectorAll('[data-testid="quiz-question-card"]');
  assert.equal(cards.length, 2);
  const multi = cards[0];
  const multiOptions = [...multi.querySelectorAll('button')].filter((button) => /Sinkronkan|Petakan|Tunjukkan tanggal/.test(button.textContent));
  assert.equal(multiOptions.length, 3);
  await act(async () => { multiOptions[0].click(); });
  assert.ok(!multi.textContent.includes('Pembahasan:'), 'multi-select stays editable after first choice');
  await act(async () => { multiOptions[1].click(); multiOptions[2].click(); });
  const multiCheck = [...multi.querySelectorAll('button')].find((button) => button.textContent.trim() === 'Periksa jawaban');
  assert.ok(multiCheck && !multiCheck.disabled);
  await act(async () => { multiCheck.click(); });
  assert.ok(multi.textContent.includes('Pembahasan:'));
  assert.ok(multi.textContent.includes('Benar'));

  const short = cards[1];
  assert.ok(short.querySelector('input[data-testid="quiz-short-2"]'), 'short-answer input rendered');
  assert.ok([...short.querySelectorAll('button')].some((button) => button.textContent.trim() === 'Periksa jawaban'), 'short-answer has an explicit check action');
  console.log('SIA quiz DOM PASS: multi-select stays editable until checked; short-answer input renders.');
} finally {
  if (root) await act(async () => { root.unmount(); });
  await vite.close();
  dom.window.close();
}
