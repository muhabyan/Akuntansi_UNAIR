// Exercise the actual Markdown, quiz grading, and essay components with AKK202 UAS data.
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { createRequire } from 'node:module';
import { build } from 'esbuild';

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/' });
for (const key of ['window', 'document', 'HTMLElement', 'SVGElement', 'Node', 'Event', 'MouseEvent']) globalThis[key] = dom.window[key];
Object.defineProperty(globalThis, 'navigator', { configurable: true, value: dom.window.navigator });
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window);
globalThis.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
dom.window.ResizeObserver = globalThis.ResizeObserver;
dom.window.scrollTo = () => {};
dom.window.HTMLElement.prototype.scrollIntoView = () => {};
const require = createRequire(import.meta.url);
const cache = new Map();
const server = {
  async ssrLoadModule(file) {
    if (cache.has(file)) return cache.get(file);
    const compiled = await build({ entryPoints: ['.' + file], bundle: true, write: false, platform: 'node', format: 'cjs', external: ['react', 'react/*', 'react-dom', 'react-dom/*'], jsx: 'automatic', loader: { '.css': 'empty' }, logLevel: 'silent' });
    const module = { exports: {} };
    Function('require', 'module', 'exports', compiled.outputFiles[0].text)(require, module, module.exports);
    cache.set(file, module.exports);
    return module.exports;
  },
  async close() {},
};
let mounted;
try {
  const [{ renderText }, { AKK202_QUIZ_UAS: quizzes }, { AKK202_BANK_UAS: banks }, { default: QuizView }, { default: EssayBank }, { ALL_COURSES }] = await Promise.all([
    server.ssrLoadModule('/src/components/course/MarkdownContent.tsx'),
    server.ssrLoadModule('/src/data/quizzes/akk202.ts'),
    server.ssrLoadModule('/src/data/banksoal/akk202.ts'),
    server.ssrLoadModule('/src/components/QuizView.tsx'),
    server.ssrLoadModule('/src/components/EssayBank.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
  ]);
  const checkRenderedText = text => {
    const wrapper = dom.window.document.createElement('div');
    wrapper.innerHTML = renderToStaticMarkup(renderText(text));
    assert.equal(wrapper.textContent, text, 'Renderer preserves all prose and currency exactly');
    assert.equal(wrapper.querySelector('.katex, .katex-error'), null, 'Plain quiz prose never becomes math');
  };
  for (const q of quizzes) [q.q, ...q.options, q.explanation].forEach(checkRenderedText);
  // The old dollar notation demonstrably fails this test, rather than merely matching a data regex.
  assert.throws(() => checkRenderedText('Pay $8 when carrying amount is $11.'));
  const course = ALL_COURSES.find(row => row.course.code === 'AKK202').course;
  const sets = [{ id: 'uas', label: 'AKK202 UAS', items: quizzes }];
  const container = dom.window.document.getElementById('root');
  const mount = async element => {
    if (mounted) await React.act(async () => mounted.unmount());
    mounted = createRoot(container);
    await React.act(async () => mounted.render(element));
  };
  const quizElement = () => React.createElement(QuizView, { course, mode: 'practice', quizSetsOverride: sets, selectedSetId: 'uas' });
  const questionCards = () => [...container.querySelectorAll('[data-testid="quiz-question-card"]')];
  const choice = (card, option) => [...card.querySelectorAll('button')].find(button => button.querySelector('span.flex-1')?.textContent === option);
  const click = element => { assert.ok(element, 'Button exists'); element.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true })); };
  await mount(quizElement());
  assert.equal(questionCards().length, 60);
  await React.act(async () => {
    questionCards().forEach((card, i) => click(choice(card, quizzes[i].options[quizzes[i].answer])));
  });
  questionCards().forEach((card, i) => {
    assert.ok(card.textContent.includes(quizzes[i].q));
    assert.ok(card.textContent.includes(quizzes[i].explanation), 'Correct explanation is shown after selecting an option');
    assert.ok(choice(card, quizzes[i].options[quizzes[i].answer]).textContent.endsWith('Benar'), 'Correct key survives display-option shuffling');
    assert.equal(card.querySelector('.katex, .katex-error'), null);
  });
  await mount(quizElement());
  const wrong = quizzes[0].options[(quizzes[0].answer + 1) % 4];
  await React.act(async () => click(choice(questionCards()[0], wrong)));
  assert.ok(choice(questionCards()[0], wrong).textContent.endsWith('Jawaban kamu'));
  assert.ok(choice(questionCards()[0], quizzes[0].options[quizzes[0].answer]).textContent.endsWith('Jawaban benar'));
  assert.ok(questionCards()[0].textContent.includes(quizzes[0].explanation));
  await mount(React.createElement(EssayBank, { items: banks }));
  assert.equal(container.querySelectorAll('.essay-question-card').length, 14);
  await React.act(async () => {
    [...container.querySelectorAll('.essay-question-card > button')].forEach(click);
  });
  [...container.querySelectorAll('.essay-question-card')].forEach((card, i) => {
    const item = banks[i];
    for (const text of [item.question, item.context, ...item.data, ...item.instructions, ...item.outputFormat, ...item.rubric, item.answerGuide]) {
      assert.ok(card.textContent.includes(text), 'All case fields remain visible and unchanged');
    }
  });
  console.log('AKK202 practice render PASS: 360 text fields; 60 correct shuffled choices; wrong-answer feedback; 14 opened cases; currency regression rejected.');
} finally {
  if (mounted) await React.act(async () => mounted.unmount());
  await server.close(); dom.window.close();
}
