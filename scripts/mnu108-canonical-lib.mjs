// Shared helpers for the MNU108 (Pengantar Manajemen) canonical reading guards, TM01..TM07.
// Each TM has its own test-mnu108-tmNN-canonical.mjs (the numbers and sentences from the content package's 06/07);
// the render rules every reading must follow live here and run for every TM listed in CANONICAL_TMS.
import assert from 'node:assert/strict';
import { build } from 'esbuild';

/** TMs whose reading was rewritten from a content package (12e). Add a TM here in the commit that brings its reading. */
export const CANONICAL_TMS = [1];
/** TMs whose headings and concept map carry no backslash escapes (a heading is inline markdown, "1. Title" stays a heading). */
export const CLEAN_HEADING_TMS = [];
/** Tables allowed to stay plain although they have >=4 columns or a long cell: header rows of grids read in their own scroll wrapper. */
export const PLAIN_GRID_HEADERS = [];

const importBundle = async (options) => {
  const bundle = await build({ bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent', ...options });
  return import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
};

/** MANAJEMEN_READINGS from the real data module. */
export async function loadReadings() {
  const { MANAJEMEN_READINGS } = await importBundle({ entryPoints: ['src/data/manajemen/manajemenData.ts'] });
  return MANAJEMEN_READINGS;
}

/** The reading-outline (Daftar Isi) helpers used by the page. */
export async function loadOutline() {
  return importBundle({
    stdin: {
      contents: "export { buildReadingOutline, readingOutlineLabel } from './src/components/course/ReadingOutline';",
      resolveDir: process.cwd(), loader: 'tsx',
    },
    jsx: 'automatic', loader: { '.css': 'text' },
  });
}

const WRAPPERS = ['example', 'practice-box', 'solution-reveal', 'section', 'pendalaman', 'self-check', 'math-example'];

/** Every block, nested ones included, plus every string on the page. */
export function analyse(reading) {
  const flatten = (blocks) => blocks.flatMap((block) => [block, ...('blocks' in block ? flatten(block.blocks) : [])]);
  const blocks = flatten(reading.blocks);
  const byKind = (kind) => blocks.filter((block) => block.kind === kind);
  const strings = [reading.title, reading.ref, reading.intro, ...reading.objectives];
  for (const block of blocks) {
    if (typeof block.text === 'string') strings.push(block.text);
    if (typeof block.title === 'string') strings.push(block.title);
    if (typeof block.caption === 'string') strings.push(block.caption);
    if (block.kind === 'ul' || block.kind === 'ol') strings.push(...block.items);
    if (block.kind === 'table') strings.push(...block.headers, ...block.rows.flat());
  }
  const page = strings.join('\n');
  const countOf = (needle) => page.split(needle).length - 1;
  return { blocks, byKind, strings, page, countOf };
}

/** A table is stacked on phones (one card per row) when it has four columns or more, or a cell longer than 80 characters. */
export const needsStacking = (table) =>
  table.headers.length >= 4 || Math.max(0, ...[...table.rows.flat(), ...table.headers].map((cell) => cell.length)) > 80;

/**
 * The render rules of TM01 (PR #33) and the heading rules of PR #34, applied to one reading.
 * `tm` selects the strictness: CLEAN_HEADING_TMS must not use backslash escapes at all.
 */
export function checkRenderRules(reading, tm, sectionCount) {
  const label = `TM0${tm}`;
  const { blocks, byKind, strings, page } = analyse(reading);
  assert.equal(reading.tm, tm, `${label}: reading.tm`);
  assert.equal(reading.layout, undefined, `${label}: flat layout, not the layered one`);
  assert.ok(reading.objectives.length >= 2, `${label}: objectives`);

  // One level of boxing: no wrapper block anywhere.
  for (const kind of WRAPPERS) assert.equal(byKind(kind).length, 0, `${label}: no "${kind}" wrapper (one level of boxing only)`);
  for (const kind of ['code', 'formula', 'figure', 'illustration']) assert.equal(byKind(kind).length, 0, `${label}: no "${kind}" block (diagrams are tables or lists)`);

  // Sections: numbered from 0, in order, as h2.
  const h2 = byKind('h2').map((block) => block.text);
  assert.equal(h2.length, sectionCount, `${label}: expected ${sectionCount} h2 sections, got ${h2.length}`);
  h2.forEach((text, index) => assert.ok(text.startsWith(`${index}. `) || text.startsWith(`${index}\\. `), `${label}: h2 #${index} must start with its number, got "${text}"`));
  if (CLEAN_HEADING_TMS.includes(tm)) {
    for (const heading of [...h2, ...byKind('h3').map((block) => block.text)]) {
      assert.ok(!heading.includes('\\'), `${label}: heading carries a backslash escape: ${heading}`);
    }
    for (const text of strings) assert.ok(!/\\\./.test(text), `${label}: a backslash-dot escape is left in "${text.slice(0, 60)}"`);
  }
  for (const heading of [...h2, ...byKind('h3').map((block) => block.text)]) {
    assert.ok(!heading.includes('*'), `${label}: heading text keeps its markdown emphasis: ${heading}`);
    assert.equal(heading, heading.trim(), `${label}: heading has stray spaces: "${heading}"`);
  }

  // Callouts: one of the four tones, always titled; "Contoh di luar buku" boxes are numbered n/3.
  for (const callout of byKind('callout')) {
    assert.ok(['info', 'tip', 'warning', 'key'].includes(callout.variant), `${label}: callout variant ${callout.variant}`);
    assert.ok(callout.title && callout.title.trim().length > 0, `${label}: every callout has a title`);
  }
  for (const callout of byKind('callout').filter((c) => /^Contoh di luar buku/.test(c.title))) {
    assert.match(callout.title, /^Contoh di luar buku \([1-3]\/3\)$/, `${label}: box title "${callout.title}"`);
    assert.equal(callout.variant, 'info', `${label}: an outside-the-book example is an info box`);
  }

  // Tables: rectangular, no markdown emphasis in a header, stacked on phones exactly when they must be.
  for (const table of byKind('table')) {
    const name = `table "${table.headers.join(' | ')}"`;
    assert.ok(table.headers.length >= 2, `${label}: ${name} has at least two columns`);
    for (const row of table.rows) assert.equal(row.length, table.headers.length, `${label}: ${name} row width`);
    for (const header of table.headers) assert.ok(!/[*_`]/.test(header), `${label}: ${name} header keeps markdown: ${header}`);
    const plainGrid = PLAIN_GRID_HEADERS.some((headers) => headers.join('|') === table.headers.join('|'));
    if (plainGrid) assert.equal(table.stackOnMobile, undefined, `${label}: ${name} is a grid read in its own scroll wrapper, so it must not stack`);
    else if (needsStacking(table)) assert.equal(table.stackOnMobile, true, `${label}: ${name} is wide or long, so it must set stackOnMobile`);
    else assert.equal(table.stackOnMobile, undefined, `${label}: ${name} fits a phone, so it must stay a table`);
  }
  // The examples table has no index column (TM01 dropped it too).
  const examples = byKind('h2').findIndex((block) => /Contoh Penerapan/.test(block.text));
  if (examples >= 0) {
    const start = blocks.indexOf(byKind('h2')[examples]);
    const table = blocks.slice(start + 1).find((block) => block.kind === 'table' || block.kind === 'h2');
    if (table?.kind === 'table') assert.notEqual(table.headers[0], '#', `${label}: the examples table has no "#" column`);
  }

  // Text hygiene: currency dollars are escaped (remark-math), no ASCII drawing, no raw hex colours, the course code is MNU108.
  for (const text of strings) {
    assert.ok(!/(^|[^\\])\$/.test(text), `${label}: unescaped "$" in "${text.slice(0, 70)}"`);
    assert.ok(!/[│┌┐└┘├┤┬┴┼╲╱▲▼]|─{3,}/.test(text), `${label}: ASCII drawing left in "${text.slice(0, 70)}"`);
    assert.ok(!/#[0-9a-fA-F]{6}\b/.test(text), `${label}: raw hex colour in "${text.slice(0, 70)}"`);
  }
  assert.ok(!/MNK ?401/.test(page), `${label}: use the course code MNU108`);
}

/** Daftar Isi: the badge of a section is its own number, the label drops that number and carries no markup. */
export function checkOutline(reading, tm, outline) {
  const label = `TM0${tm}`;
  const { buildReadingOutline, readingOutlineLabel } = outline;
  const items = buildReadingOutline(reading.blocks);
  const sections = items.filter((item) => item.level === 2);
  const h2 = reading.blocks.filter((block) => block.kind === 'h2');
  assert.equal(sections.length, h2.length, `${label}: one Daftar Isi entry per section`);
  sections.forEach((item, index) => {
    assert.equal(item.badge, String(index), `${label}: badge of section ${index}`);
    const expected = h2[index].text.replace(/^\d+\\?\.\s+/, '').replace(/\\([\\`*_{}[\]()#+\-.!])/g, '$1');
    assert.equal(item.label, expected, `${label}: label of section ${index}`);
    assert.ok(!/[\\*]/.test(item.label), `${label}: label carries markup: ${item.label}`);
    assert.match(readingOutlineLabel(item), new RegExp(`^${String(index).padStart(2, '0')} · `), `${label}: pill text of section ${index}`);
  });
  const h3 = reading.blocks.filter((block) => block.kind === 'h3');
  assert.equal(items.filter((item) => item.level === 3).length, h3.length, `${label}: one Daftar Isi entry per subsection`);
}
