// Heading guard: an h2/h3 is a title, so its text is rendered as inline markdown only.
// A heading written "1. Pendahuluan" used to be read as an ordered list (an <ol> inside the <h2>), which dropped
// the heading's own colour, size and leading. CourseBlockCard now renders h2/h3 through InlineMarkdown.
// 1. Every h2/h3 of every course (readings, reviews, references), rendered by the real CourseBlockCard, is one
//    heading element holding inline content only: no paragraph, list, quote, nested heading or code block.
// 2. The numbered headings are really there (a floor per course), and keep their number in the rendered text.
// 3. Mutation check: the old path (renderText) is caught by the same detector, so this guard cannot pass empty.
// 4. Real CourseLayout in jsdom (PJK301 numbered, MNU108 escaped): headings stay headings, numbers stay visible.
// 5. The Daftar Isi (reading outline) labels did not change: the first labels of the first TM of each affected
//    course match a snapshot taken before this change, and no label carries a markdown escape.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';

const passes = [];
const failures = [];
function check(condition, label, detail = '') {
  if (condition) passes.push(label);
  else failures.push(detail ? `${label}: ${detail}` : label);
}

const appSource = fs.readFileSync('src/App.tsx', 'utf8');
const courseList = appSource.match(/const UNIVERSAL_COURSES = \[([\s\S]*?)\];/);
if (!courseList) throw new Error('UNIVERSAL_COURSES not found in src/App.tsx');
const courseCodes = [...courseList[1].replace(/\/\/.*$/gm, '').matchAll(/'([A-Z0-9]+)'/g)].map((match) => match[1]);

// Numbered h2/h3 found by the audit that led to this change (565 of the 576 broken headings; the other 11 are HTML
// comments, a separate bug). A floor, not an exact count: content may grow, but never drop these courses to zero.
const NUMBERED_FLOOR = { MNU101: 183, AKK202: 121, SII306: 58, PJK201: 54, PJK301: 51, AKM201: 39, AKK106: 34, MNK201: 23, EKT109: 2 };
const NUMBERED = /^\s*\d{1,9}\\?[.)]\s/;

// Daftar Isi labels taken from main before this change (buildReadingOutline + readingOutlineLabel).
const OUTLINE_SNAPSHOT = {
  PJK301: {
    tm: 1,
    count: 13,
    first: [
      "01 · Subjek Pajak, Objek PPh, dan Negative List Bukan Objek",
      "02 · Prinsip Biaya 3M (Deductible vs Non-Deductible) & Larangan Biaya Suap",
      "03 · Rezim Pemajakan Natura dan Kenikmatan (PP 55/2022 jo. PMK 66/2023)"
    ]
  },
  MNU101: {
    tm: 1,
    count: 6,
    first: [
      "01 · TM1 — Business, Economic Environment, Business Cycle & Competition",
      "_RPS Week 1 · Pride Ch.1 · Nickels Ch.2_",
      "01 · Definisi bisnis dan logika dasarnya"
    ]
  },
  AKK202: {
    tm: 1,
    count: 20,
    first: [
      "01 · Orientation / Quick Map",
      "02 · Classification: PPE, Investment Property, Land, Inventory",
      "03 · Recognition & Initial Measurement"
    ]
  },
  SII306: {
    tm: 1,
    count: 17,
    first: [
      "01 · System & Information Foundations",
      "Data perusahaan dan kesenjangan informasi",
      "Simple Information System: Input → Processing → Output, didukung Storage"
    ]
  },
  PJK201: {
    tm: 1,
    count: 36,
    first: [
      "💰 Kebijakan Fiskal (Fiscal Policy)",
      "Kebijakan Fiskal",
      "01 · Instrumen Kebijakan Fiskal"
    ]
  },
  AKM201: {
    tm: 1,
    count: 25,
    first: [
      "01 · Peta Navigasi Baca",
      "02 · Orientasi TM 1",
      "03 · Alur Belajar Cepat TM 1"
    ]
  },
  AKK106: {
    tm: 1,
    count: 5,
    first: [
      "01 · Pengertian dan Peran Akuntansi",
      "02 · Pengguna Informasi Akuntansi",
      "03 · Building Blocks of Accounting"
    ]
  },
  MNK201: {
    tm: 1,
    count: 18,
    first: [
      "01 · Ruang Lingkup Keuangan & Posisi CFO dalam Korporasi",
      "Hierarki Struktur Finansial: Peran CFO, Treasurer, dan Controller",
      "02 · Bentuk-Bentuk Badan Usaha (Forms of Business Organization)"
    ]
  },
  EKT109: {
    tm: 1,
    count: 6,
    first: [
      "01 · A. Kelangkaan & Efisiensi",
      "02 · B. 10 Prinsip Ekonomi (Mankiw)",
      "Bagaimana individu mengambil keputusan"
    ]
  },
  MNU108: {
    tm: 1,
    count: 33,
    first: [
      "00 · Orientasi TM01",
      "01 · Apa itu Management dan Organization",
      "02 · Empat Fungsi Manajemen"
    ]
  }
};

let server;
let cacheDir;
let root;
const act = (callback) => globalThis.__act(callback);
try {
  cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'heading-inline-vite-cache-'));
  const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/course/PJK301' });
  const { window } = dom;
  for (const key of [
    'window', 'document', 'HTMLElement', 'SVGElement', 'Node', 'Event', 'FocusEvent', 'KeyboardEvent', 'MouseEvent', 'PopStateEvent',
    'localStorage', 'sessionStorage', 'MutationObserver', 'Element', 'HTMLButtonElement', 'HTMLAnchorElement', 'CustomEvent',
  ]) globalThis[key] = window[key];
  Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
  globalThis.getComputedStyle = window.getComputedStyle.bind(window);
  globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0);
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  class NoopObserver { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
  window.IntersectionObserver = globalThis.IntersectionObserver = NoopObserver;
  window.ResizeObserver = globalThis.ResizeObserver = NoopObserver;
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
  console.warn = () => {}; // KaTeX strict-mode notices do not change the output

  const { default: React, act: reactAct } = await import('react');
  const { createRoot } = await import('react-dom/client');
  const { renderToStaticMarkup } = await import('react-dom/server');
  globalThis.__act = reactAct;
  server = await createServer({ root: process.cwd(), cacheDir, appType: 'custom', server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true }, logLevel: 'silent' });
  const [{ default: CourseLayout }, { default: CourseBlockCard }, { renderText }, { InlineMarkdown }, { SEMESTERS }, { loadCourseContent }, outline] = await Promise.all([
    server.ssrLoadModule('/src/components/course/CourseLayout.tsx'),
    server.ssrLoadModule('/src/components/course/CourseBlockCard.tsx'),
    server.ssrLoadModule('/src/components/course/MarkdownContent.tsx'),
    server.ssrLoadModule('/src/components/course/LayeredBlocks.tsx'),
    server.ssrLoadModule('/src/data/courseData.ts'),
    server.ssrLoadModule('/src/data/courses/courseRegistry.ts'),
    server.ssrLoadModule('/src/components/course/ReadingOutline.tsx'),
  ]);
  const { document } = window;
  const parse = (html) => { const host = document.createElement('div'); host.innerHTML = html; return host; };
  const settle = (ms = 40) => act(async () => { await new Promise((resolve) => setTimeout(resolve, ms)); });
  const waitFor = async (predicate, label, timeout = 10000) => {
    const start = Date.now();
    while (Date.now() - start < timeout) { if (predicate()) return true; await settle(); }
    failures.push(`timed out waiting for ${label}`);
    return false;
  };

  // What a heading must not contain: any block-level markdown structure.
  const BLOCK_INSIDE_HEADING = 'p, ol, ul, li, blockquote, pre, table, h1, h2, h3, h4, h5, h6, hr';
  /** The problems in one rendered heading (a host element from `parse`); an empty list means it is a plain heading. */
  const headingProblems = (host, kind) => {
    const headings = host.querySelectorAll(kind);
    if (headings.length !== 1) return [`${headings.length} <${kind}> elements`];
    const heading = headings[0];
    const problems = [];
    const block = heading.querySelector(BLOCK_INSIDE_HEADING);
    if (block) problems.push(`<${block.tagName.toLowerCase()}> inside the heading`);
    return problems;
  };
  const INLINE_MARKUP = /[*_`$[<=~]|&\w+;/;
  const plain = (text) => text.replace(/\\([\\`*_{}[\]()#+\-.!])/g, '$1').trim();

  // --- 1 + 2: every heading of every course, rendered by the real card ---
  const cardMarkup = (block) => renderToStaticMarkup(React.createElement(CourseBlockCard, { block }));
  const numberedByCourse = {};
  const problemsByCourse = {};
  let headingTotal = 0;
  const headingsOf = (blocks, out = []) => {
    for (const block of blocks ?? []) {
      if (block.kind === 'h2' || block.kind === 'h3') out.push(block);
      for (const nested of [block.blocks, block.answer]) if (Array.isArray(nested)) headingsOf(nested, out);
    }
    return out;
  };
  for (const code of courseCodes) {
    const content = await loadCourseContent(code);
    const blocks = [
      ...Object.values(content.readings ?? {}).flatMap((reading) => headingsOf(reading.blocks)),
      ...Object.values(content.reviews ?? {}).flatMap((reading) => headingsOf(reading?.blocks)),
      ...headingsOf(content.customReferensi),
    ];
    headingTotal += blocks.length;
    for (const block of blocks) {
      const text = block.text ?? '';
      const host = parse(cardMarkup(block));
      const problems = headingProblems(host, block.kind);
      if (problems.length) (problemsByCourse[code] ??= []).push(`${block.kind} ${JSON.stringify(text.slice(0, 60))}: ${problems.join(', ')}`);
      if (NUMBERED.test(text)) {
        numberedByCourse[code] = (numberedByCourse[code] ?? 0) + 1;
        const rendered = host.querySelector(block.kind)?.textContent?.trim() ?? '';
        // Text with inline markup ("**bold**", code, links, math) legitimately renders shorter than its source.
        if (!INLINE_MARKUP.test(text) && rendered !== plain(text)) (problemsByCourse[code] ??= []).push(`${block.kind} ${JSON.stringify(text.slice(0, 60))}: renders as ${JSON.stringify(rendered.slice(0, 60))}`);
      }
    }
  }
  check(headingTotal > 2000, 'headings were collected from every course', String(headingTotal));
  for (const code of courseCodes) {
    const bad = problemsByCourse[code] ?? [];
    check(bad.length === 0, `${code}: every h2/h3 renders as one plain heading with its number intact`, `${bad.length} broken, e.g. ${JSON.stringify(bad.slice(0, 3))}`);
  }
  for (const [code, floor] of Object.entries(NUMBERED_FLOOR)) {
    check((numberedByCourse[code] ?? 0) >= floor, `${code}: numbered headings are present to be checked (at least ${floor})`, String(numberedByCourse[code] ?? 0));
  }

  // --- 3: mutation check — the old renderer is caught by the same detector ---
  const oldHeading = (kind, text) => renderToStaticMarkup(React.createElement(kind, null, renderText(text)));
  for (const kind of ['h2', 'h3']) {
    const broken = headingProblems(parse(oldHeading(kind, '1. Pendahuluan')), kind);
    check(broken.length > 0 && broken[0].includes('<ol>'), `mutation: renderText inside <${kind}> turns "1. Pendahuluan" into a list and the detector sees it`, JSON.stringify(broken));
    const fixed = headingProblems(parse(cardMarkup({ kind, text: '1. Pendahuluan' })), kind);
    check(fixed.length === 0, `mutation: the card renders the same <${kind}> text as a plain heading`, JSON.stringify(fixed));
  }
  // The paragraph is unwrapped: without it InlineMarkdown leaves a <p> inside the heading, and the detector sees that too.
  for (const kind of ['h2', 'h3']) {
    const wrapped = renderToStaticMarkup(React.createElement(kind, null, React.createElement(InlineMarkdown, { text: '1. Pendahuluan' })));
    const withParagraph = headingProblems(parse(wrapped), kind);
    check(withParagraph.length > 0 && withParagraph[0].includes('<p>'), `mutation: InlineMarkdown without unwrapParagraph leaves a <p> inside <${kind}> and the detector sees it`, JSON.stringify(withParagraph));
    const unwrapped = renderToStaticMarkup(React.createElement(kind, null, React.createElement(InlineMarkdown, { text: '1. Pendahuluan', unwrapParagraph: true })));
    check(headingProblems(parse(unwrapped), kind).length === 0 && parse(unwrapped).querySelector(kind).textContent === '1. Pendahuluan', `InlineMarkdown with unwrapParagraph puts the text straight in <${kind}>`);
  }
  check(renderToStaticMarkup(React.createElement(InlineMarkdown, { text: 'Tanpa nomor' })).includes('<p'), 'InlineMarkdown keeps its paragraph by default (other users are unchanged)');
  // Inline markdown still works inside a heading, and a heading keeps its own type styles instead of the body's.
  const bold = parse(cardMarkup({ kind: 'h2', text: '2. Pendahuluan **tebal** dan `kode`' }));
  check(bold.querySelector('h2 strong')?.textContent === 'tebal' && bold.querySelector('h2 code')?.textContent === 'kode', 'inline markdown (bold, code) still renders inside a heading');
  const wrapper = bold.querySelector('h2 > span');
  check(Boolean(wrapper) && /\[&_p\]:text-inherit/.test(wrapper.className) && /\[&_p\]:leading-\[inherit\]/.test(wrapper.className) && /\[&_p\]:m-0/.test(wrapper.className),
    'heading text inherits the heading colour and leading and has no paragraph margin', wrapper?.className);
  check(/text-slate-900/.test(bold.querySelector('h2').className) && /font-display/.test(bold.querySelector('h2').className), 'h2 keeps its own colour token and display font');
  check(/text-gold-700/.test(parse(cardMarkup({ kind: 'h3', text: '2. Sub' })).querySelector('h3').className), 'h3 keeps its own colour token');

  // --- 4: the real page (CourseLayout) in jsdom ---
  const courses = SEMESTERS.flatMap((semester) => semester.groups.flatMap((group) => group.courses));
  const course = (code) => courses.find((candidate) => candidate.code === code);
  const openReading = async (code, tm) => {
    if (root) await act(async () => root.unmount());
    root = createRoot(document.getElementById('root'));
    await act(async () => { root.render(React.createElement(CourseLayout, { course: course(code), initialTab: 'tm1-7', initialTm: tm, onBack() {} })); });
    return waitFor(() => Boolean(document.querySelector('.reading-document h2')), `${code} TM${tm} to open`);
  };
  for (const [code, tm, first] of [['PJK301', 1, '1. Subjek Pajak'], ['AKK202', 1, '1. Orientation'], ['MNU108', 1, '0. Orientasi TM01'], ['AKM201', 1, '']]) {
    if (!(await openReading(code, tm))) continue;
    await settle(80);
    const at = `${code} TM${tm}`;
    const doc = document.querySelector('.reading-document');
    const headings = [...doc.querySelectorAll('h2, h3')];
    check(headings.length > 3, `${at}: page has headings`, String(headings.length));
    check(doc.querySelectorAll('h2 p, h3 p, h2 ol, h3 ol, h2 ul, h3 ul, h2 li, h3 li').length === 0, `${at}: no paragraph or list inside any heading`);
    check(headings.every((heading) => heading.textContent.trim().length > 0), `${at}: no empty heading`);
    if (first) check(headings.some((heading) => heading.textContent.trim().startsWith(first)), `${at}: a heading reads "${first}…"`);
    check(!headings.some((heading) => heading.textContent.includes('\\')), `${at}: no backslash escape is shown in a heading`);
    // No ordered list at all may come from a heading's text: the only <ol> in the document belong to real 'ol' blocks.
    check(![...doc.querySelectorAll('ol')].some((list) => list.closest('h2, h3')), `${at}: no ordered list comes from a heading`);
  }

  // --- 5: the Daftar Isi did not change ---
  for (const [code, expected] of Object.entries(OUTLINE_SNAPSHOT)) {
    const content = await loadCourseContent(code);
    const tm = Math.min(...Object.keys(content.readings).map(Number));
    check(tm === expected.tm, `${code}: Daftar Isi snapshot is for TM${expected.tm}`, `first TM is ${tm}`);
    const items = outline.buildReadingOutline(content.readings[tm].blocks);
    check(items.length === expected.count, `${code}: Daftar Isi has ${expected.count} entries`, String(items.length));
    check(JSON.stringify(items.slice(0, 3).map(outline.readingOutlineLabel)) === JSON.stringify(expected.first), `${code}: first Daftar Isi labels are unchanged`, JSON.stringify(items.slice(0, 3).map(outline.readingOutlineLabel)));
    check(items.every((item) => !item.label.includes('\\.')),`${code}: no Daftar Isi label carries a markdown escape`);
  }
} catch (error) {
  failures.push(`crashed: ${error?.stack ?? error}`);
} finally {
  try { if (root) await act(async () => root.unmount()); } catch { /* ignore */ }
  if (server) await server.close();
  if (cacheDir) fs.rmSync(cacheDir, { recursive: true, force: true });
}

const result = { pass: failures.length === 0, checks: passes.length + failures.length, passed: passes.length, failed: failures.length, failures };
console.log(JSON.stringify(result, null, 2));
process.exit(result.pass ? 0 : 1);
