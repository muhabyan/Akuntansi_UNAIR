// Guard against S1 render defects (meaning changes) in course readings, reviews, and references:
// - currency "$" pairs that remark-math turns into accidental inline math;
// - control characters left behind when a LaTeX backslash was not escaped in TS ("\times" -> tab);
// - formulas that KaTeX fails to render.
// Strings are collected the way CourseBlockCard/CourseHeader pass them to renderText and are run
// through the same markdown pipeline as src/components/course/MarkdownContent.tsx.
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

const appSource = readFileSync('src/App.tsx', 'utf8');
const courseList = appSource.match(/const UNIVERSAL_COURSES = \[([\s\S]*?)\];/);
if (!courseList) throw new Error('UNIVERSAL_COURSES not found in src/App.tsx');
const courseCodes = [...courseList[1].replace(/\/\/.*$/gm, '').matchAll(/'([A-Z0-9]+)'/g)].map((match) => match[1]);

const bundle = await build({
  stdin: { contents: "export { loadCourseContent } from './src/data/courses/courseRegistry.ts';", resolveDir: process.cwd(), loader: 'ts' },
  bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent',
  plugins: [{
    // Vite "?raw" imports resolve to the file contents as a string.
    name: 'vite-raw',
    setup(builder) {
      builder.onResolve({ filter: /\?raw$/ }, (args) => ({
        path: path.resolve(args.resolveDir, args.path.slice(0, -'?raw'.length)), namespace: 'raw',
      }));
      builder.onLoad({ filter: /.*/, namespace: 'raw' }, (args) => ({ contents: readFileSync(args.path, 'utf8'), loader: 'text' }));
    },
  }],
});
const { loadCourseContent } = await import(
  `data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`
);

const isMatrixContent = (text) => {
  const lines = text.split('\n');
  return lines.length >= 3 && lines.filter((line) => /\s{3,}/.test(line)).length > lines.length * 0.3;
};
const splitEconomicFormula = (text) => {
  const [first, ...rest] = text.split('\n');
  return rest[0]?.trim() === '' && first.trim().length <= 96 ? rest.slice(1).join('\n').trim() : text;
};
const formulaMathText = (body) => {
  if (body.includes('$')) return body;
  const rawLines = body.trim().split(/\r?\n+/).map((line) => line.trim()).filter(Boolean);
  if (rawLines.length > 1 && !body.includes('\\begin{')) {
    return `$$\n\\begin{aligned}\n${rawLines.map((line) => (line.startsWith('&') ? line : `& ${line}`)).join(' \\\\\n')}\n\\end{aligned}\n$$`;
  }
  return `$$\n${body}\n$$`;
};

function collectBlock(block, path, flags, out) {
  const push = (field, text) => { if (typeof text === 'string') out.push({ path: `${path}.${field}`, text }); };
  const nested = (blocks) => (blocks ?? []).forEach((child, i) => collectBlock(child, `${path}.blocks[${i}]`, flags, out));
  switch (block.kind) {
    case 'h2': case 'h3': case 'p': case 'callout':
      push('text', block.text); break;
    case 'ul': case 'ol':
      block.items.forEach((item, i) => push(`items[${i}]`, item)); break;
    case 'table':
      block.rows.forEach((row, r) => row.forEach((cell, c) => push(`rows[${r}][${c}]`, cell)));
      push('caption', block.caption); break;
    case 'journal': case 'code': case 'figure': case 'illustration':
      push('caption', block.caption); break;
    case 'formula': {
      if (!isMatrixContent(block.text)) {
        const body = flags.economic ? splitEconomicFormula(block.text) : block.text;
        if (body.includes('\\') || body.includes('$')) push('text', formulaMathText(body));
      }
      push('note', block.note); break;
    }
    case 'solution-reveal':
      push('prompt', block.prompt); nested(block.blocks); break;
    case 'practice-box':
      push('answerKey', block.answerKey); nested(block.blocks); break;
    case 'example': case 'math-example':
      nested(block.blocks); break;
    case 'chart-guide':
      block.points.forEach((point, i) => push(`points[${i}]`, point)); break;
    default:
  }
}

const pipeline = unified().use(remarkParse).use(remarkGfm).use(remarkMath)
  .use(remarkRehype, { allowDangerousHtml: true }).use(rehypeKatex).use(rehypeRaw);

function findAll(node, predicate, found = []) {
  if (predicate(node)) found.push(node);
  for (const child of node.children ?? []) findAll(child, predicate, found);
  return found;
}

// eslint-disable-next-line no-control-regex
const controlChars = /[\u0000-\u0009\u000B-\u001F\u007F]/g;
const describeChar = (char) => ({ '\t': '\\t', '\r': '\\r', '\b': '\\b', '\f': '\\f', '\v': '\\v' }[char] ?? `U+${char.charCodeAt(0).toString(16).padStart(4, '0')}`);
const snippet = (text, index) => JSON.stringify(text.slice(Math.max(0, index - 40), index + 40));

function checkText(text) {
  const problems = [];
  for (const match of text.matchAll(controlChars)) {
    problems.push({ kind: 'control', message: `control character ${describeChar(match[0])} (unescaped LaTeX backslash?) near ${snippet(text, match.index)}` });
  }
  if (!text.includes('$')) return problems;
  // Same preprocessing as renderText.
  const processed = text.replace(/==([^=\n]+)==/g, '<mark>$1</mark>');
  const mdast = pipeline.parse(processed);
  for (const node of findAll(mdast, (n) => n.type === 'inlineMath')) {
    const end = node.position.end.offset;
    // A closing "$" directly followed by a digit is a currency amount, never a LaTeX delimiter.
    if (/\d/.test(processed[end] ?? '')) {
      problems.push({ kind: 'currency', message: `accidental math from currency "$": $${node.value}$ near ${snippet(processed, node.position.start.offset)}` });
    }
  }
  const hast = pipeline.runSync(mdast);
  for (const node of findAll(hast, (n) => n.type === 'element' && [].concat(n.properties?.className ?? []).includes('katex-error'))) {
    problems.push({ kind: 'katex', message: `KaTeX error: ${node.properties?.title ?? 'render failed'} in ${JSON.stringify(text.slice(0, 120))}` });
  }
  return problems;
}

// All previous known defects have been fully resolved across all 28 universal courses.
const knownIssues = new Set();
const seenKnownIssues = new Set();

const failures = [];
let stringCount = 0;
// KaTeX strict-mode warnings do not change the rendered output; keep the report readable.
console.warn = () => {};
for (const code of courseCodes) {
  const content = await loadCourseContent(code);
  const flags = { legal: code === 'PJK201', economic: code === 'EKT109' };
  const units = [
    ...Object.entries(content.readings ?? {}).map(([key, reading]) => [`TM${key}`, reading]),
    ...Object.entries(content.reviews ?? {}).map(([key, reading]) => [key.toUpperCase(), reading]),
  ];
  const strings = [];
  for (const [label, reading] of units) {
    if (!reading) continue;
    if (typeof reading.intro === 'string') strings.push({ path: `${label}.intro`, text: reading.intro });
    reading.blocks.forEach((block, i) => collectBlock(block, `${label}.blocks[${i}]`, flags, strings));
  }
  (content.customReferensi ?? []).forEach((block, i) => collectBlock(block, `REF.blocks[${i}]`, flags, strings));
  stringCount += strings.length;
  for (const { path: where, text } of strings) {
    for (const { kind, message } of checkText(text)) {
      const key = `${code} ${where} ${kind}`;
      if (knownIssues.has(key)) seenKnownIssues.add(key);
      else failures.push(`${code} ${where}: ${message}`);
    }
  }
}
for (const key of knownIssues) {
  if (!seenKnownIssues.has(key)) failures.push(`${key}: known issue no longer occurs; remove it from knownIssues`);
}

if (failures.length) {
  console.error(`test-render-s1: ${failures.length} problem(s)`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`test-render-s1: OK (${courseCodes.length} courses, ${stringCount} strings)`);
