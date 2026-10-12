// MNK102 canonical converter, adapted from the AKA201 v2 Markdown parser.
// Input: content-pipeline/MNK102/TMxx/05_student_learning_version.md.
// Supports layered sections, source-defined SVG/overview, native finance formulas,
// write-first self-checks, closed depth and worked examples. Output keeps CRLF bytes.
// Regenerate readings from the canonical package rather than editing generated TypeScript.
import { readFileSync, writeFileSync } from 'node:fs';
import { buildFinanceFigure } from './mnk102-visuals.mjs';
const FIGURES = {};

const [input, output, ...rest] = process.argv.slice(2);
const opt = (name) => { const i = rest.indexOf(`--${name}`); return i >= 0 ? rest[i + 1] : undefined; };
if (!input || !output || !opt('export') || !opt('tm')) {
  console.error('usage: convert-mnk102.mjs <input.md> <output.ts> --export NAME --tm N [--badge TEXT]');
  process.exit(2);
}

const lines = readFileSync(input, 'utf8').replace(/\r\n/g, '\n').split('\n').map((l) => l.replace(/[ \t]+$/, ''));
const report = [];
const typesImport = opt('types-import') ?? '../../../types';
const usedFigures = [];
const figureMark = (l) => l.match(/^<!-- figure id="([a-z0-9-]+)" -->$/);
const tableMark = (l) => l.match(/^<!-- tabel judul="([^"]+)" -->$/);
let pendingTableTitle;

// ---------- callout labels (spec §2) ----------
const TIER = [
  [/^(Intinya|Kalau cuma sempat ingat satu hal)$/, { variant: 'gist' }],
  [/^Jebakan ujian$/, { variant: 'warning' }],
  [/^Interpretasi\b/, { variant: 'info' }],
  [/^(Label Perbandingan|Perbandingan)\b/, { variant: 'info' }],
  [/^Beda pengelompokan$/, { variant: 'info', title: 'Perbandingan' }],
  [/^(Catatan sumber|Catatan cakupan|Catatan urutan|Perhatikan sebelum membaca|Perhatikan|Kabar baik|Versi lama vs versi berlaku|Praktik yang dikritik)$/, { variant: 'note' }],
  [/^(Definisi|Aturannya)$/, { variant: 'quote' }],
];
function calloutFor(text, ctx = {}) {
  if (ctx.sampleAnswer) return { variant: 'quote' }; // quoted sample answers are quotes, whatever their bold lead
  const lead = text.match(/^\*\*([^*]+?)\*\*/);
  if (!lead) return { variant: 'quote' }; // an unlabelled quote, e.g. a sample answer
  const label = lead[1].replace(/[.:]\s*$/, '').trim();
  for (const [re, spec] of TIER) if (re.test(label)) return spec;
  throw new Error(`unmapped callout label "${label}" in: ${text.slice(0, 80)}`);
}

// ---------- generic block parser ----------
const isTableRow = (l) => /^\|.*\|$/.test(l);
const isDelimiter = (l) => /^\|(\s*:?-{3,}:?\s*\|)+$/.test(l);
const isUl = (l) => /^- /.test(l);
const isOl = (l) => /^\d+\. /.test(l);
const isQuote = (l) => /^>/.test(l);
const isHeading = (l) => /^#{2,3} /.test(l);
const isRule = (l) => /^---+$/.test(l);
const pendStart = (l) => l.match(/^<!-- pendalaman:start judul="([^"]+)" -->$/);
const isPendEnd = (l) => /^<!-- pendalaman:end -->$/.test(l);
const startsBlock = (l) => /^```/.test(l) || isTableRow(l) || isUl(l) || isOl(l) || isQuote(l) || isHeading(l) || isRule(l) || /^<!--/.test(l);
const splitRow = (l) => l.slice(1, -1).split('|').map((c) => c.trim());

function parseBlocks(src, ctx = {}) {
  const blocks = [];
  let i = 0;
  while (i < src.length) {
    const line = src[i];
    if (line.trim() === '' || isRule(line)) { i++; continue; }
    const pend = pendStart(line);
    if (pend) {
      let j = i + 1;
      while (j < src.length && !isPendEnd(src[j])) j++;
      if (j >= src.length) throw new Error(`pendalaman "${pend[1]}" has no end`);
      let body = src.slice(i + 1, j);
      const firstIdx = body.findIndex((l) => l.trim() !== '');
      if (firstIdx >= 0 && body[firstIdx] === `### ${pend[1]}`) body = body.slice(firstIdx + 1);
      else report.push(`pendalaman "${pend[1]}": first line is not "### ${pend[1]}", kept as is`);
      blocks.push({ kind: 'pendalaman', title: pend[1], blocks: parseBlocks(body, ctx) });
      i = j + 1;
      continue;
    }
    const fig = figureMark(line);
    if (fig) {
      const f = FIGURES[fig[1]];
      if (!f) throw new Error(`unknown figure id: ${fig[1]}`);
      usedFigures.push(fig[1]);
      // FigureOverview (src/types.ts) requires subtitle and takeaway on every card; the renderer skips empty strings.
      const overview = f.overview && { ...f.overview, cards: f.overview.cards.map((c) => ({ title: c.title, subtitle: c.subtitle ?? '', items: c.items ?? [], takeaway: c.takeaway ?? '' })) };
      blocks.push({ kind: 'figure', title: f.title, svg: f.svg, overview, caption: f.caption, altText: f.altText });
      i++;
      continue;
    }
    const tm = tableMark(line);
    if (tm) { pendingTableTitle = tm[1]; i++; continue; }
    if (line === '```visual') {
      let end = i + 1;
      while (end < src.length && src[end] !== '```') end++;
      if (end === src.length) throw new Error('Unclosed visual');
      const spec = Object.fromEntries(src.slice(i + 1, end).map(l => {
        const colon = l.indexOf(':');
        if (colon < 0) throw new Error('Visual property requires a colon');
        return [l.slice(0, colon).trim(), l.slice(colon + 1).trim()];
      }));
      blocks.push(buildFinanceFigure(spec)); usedFigures.push(spec.id);
      i = end + 1; continue;
    }
    if (line === '```formula') {
      let end = i + 1;
      while (end < src.length && src[end] !== '```') end++;
      if (end === src.length || end === i + 1) throw new Error('Missing formula');
      blocks.push({ kind: 'formula', text: src[i + 1], ...(end > i + 2 ? { note: src.slice(i + 2, end).join(' ') } : {}) });
      i = end + 1; continue;
    }
    const check = line.match(/^<!-- self-check question="([^"]+)" -->$/);
    if (check) {
      let end = i + 1;
      while (end < src.length && src[end] !== '<!-- self-check:end -->') end++;
      if (end === src.length) throw new Error('Unclosed self-check');
      blocks.push({ kind: 'self-check', question: check[1], answer: parseBlocks(src.slice(i + 1,end)) });
      i = end + 1; continue;
    }
    if (/^<!--/.test(line)) throw new Error(`unknown comment: ${line}`);
    if (/^### /.test(line)) { blocks.push({ kind: 'h3', text: line.slice(4) }); i++; continue; }
    if (/^## /.test(line)) throw new Error(`unexpected ## inside a section: ${line}`);
    if (isQuote(line)) {
      const body = [];
      while (i < src.length && isQuote(src[i])) { body.push(src[i].replace(/^> ?/, '')); i++; }
      const text = body.join('\n');
      const spec = calloutFor(text, ctx);
      blocks.push({ kind: 'callout', variant: spec.variant, ...(spec.title ? { title: spec.title } : {}), text });
      continue;
    }
    if (isTableRow(line) && isDelimiter(src[i + 1] ?? '')) {
      const headers = splitRow(line);
      // Column alignment from the delimiter row (":---:" center, "---:" right); emitted only when not all default.
      const align = splitRow(src[i + 1]).map((d) => (/^:-+:$/.test(d) ? 'center' : /^-+:$/.test(d) ? 'right' : /^:-+$/.test(d) ? 'left' : null));
      const rows = [];
      i += 2;
      while (i < src.length && isTableRow(src[i])) { rows.push(splitRow(src[i])); i++; }
      for (const row of rows) if (row.length !== headers.length) throw new Error(`table row has ${row.length} cells, header ${headers.length}: ${row[0]}`);
      // Every table stacks on phones: the site's reading tables are at least 42rem wide, so even two columns
      // would scroll sideways at 390 px. The spec's mapping tables (Kesalahpahaman umum, Cara cepat menentukan asersi) are covered by this too.
      blocks.push({ kind: 'table', ...(pendingTableTitle ? { title: pendingTableTitle } : {}), headers, rows, stackOnMobile: true, ...(align.some((a) => a === 'right' || a === 'center') ? { align } : {}) });
      pendingTableTitle = undefined;
      continue;
    }
    if (isUl(line) || isOl(line)) {
      const ordered = isOl(line);
      const items = [];
      while (i < src.length && (ordered ? isOl(src[i]) : isUl(src[i]))) {
        let item = src[i].replace(ordered ? /^\d+\. / : /^- /, '');
        i++;
        while (i < src.length && /^ {2,}\S/.test(src[i])) { item += `\n${src[i].trim()}`; i++; }
        items.push(item);
      }
      blocks.push({ kind: ordered ? 'ol' : 'ul', items });
      continue;
    }
    // paragraph: until blank line or the start of another block. A line starting with ONE space right after a
    // list is a new paragraph (markdown would make it a lazy continuation of the last item).
    const para = [line.replace(/^ (?=\S)/, '')];
    if (/^ \S/.test(line)) report.push(`leading-space line rendered as its own paragraph: ${line.trim().slice(0, 60)}`);
    i++;
    while (i < src.length && src[i].trim() !== '' && !startsBlock(src[i])) { para.push(src[i]); i++; }
    const text = para.join('\n');
    // An italic "*Label Perbandingan: ...*" (or Interpretasi) line is a tier-3 label (spec §2), not a plain paragraph.
    if (/^\*Label (Perbandingan|Interpretasi)\b[^*]*\*$/.test(text)) {
      report.push(`tier-3 label line rendered as an info callout: ${text.slice(0, 60)}`);
      blocks.push({ kind: 'callout', variant: 'info', text });
    } else blocks.push({ kind: 'p', text });
  }
  return blocks;
}

// ---------- special sections ----------
function parseCases(src) {
  const blocks = [];
  let i = 0;
  const intro = [];
  while (i < src.length && !/^\*\*Kasus \d+/.test(src[i])) intro.push(src[i++]);
  blocks.push(...parseBlocks(intro));
  while (i < src.length) {
    const start = i;
    i++;
    while (i < src.length && !/^\*\*Kasus \d+/.test(src[i])) i++;
    const chunk = src.slice(start, i);
    const lead = chunk[0].match(/^\*\*(Kasus \d+[^*]*)\*\*\s*(.*)$/);
    if (!lead) throw new Error(`bad case lead: ${chunk[0]}`);
    const pIdx = chunk.findIndex((l) => /^\*Pembahasan/.test(l));
    if (pIdx < 0) throw new Error(`case without pembahasan: ${lead[1]}`);
    const promptLines = [lead[2], ...chunk.slice(1, pIdx)];
    while (promptLines.length && promptLines[promptLines.length - 1].trim() === '') promptLines.pop();
    blocks.push({ kind: 'solution-reveal', title: lead[1], prompt: promptLines.join('\n'), revealLabel: 'Lihat pembahasan', blocks: parseBlocks(chunk.slice(pIdx)) });
  }
  return blocks;
}

function parseSelfChecks(src) {
  const blocks = [];
  let i = 0;
  const intro = [];
  while (i < src.length && !/^\*\*\d+\. /.test(src[i])) intro.push(src[i++]);
  blocks.push(...parseBlocks(intro));
  while (i < src.length) {
    const start = i;
    i++;
    while (i < src.length && !/^\*\*\d+\. /.test(src[i])) i++;
    const chunk = src.slice(start, i);
    const sIdx = chunk.findIndex((l) => /^\*Tanda belum paham:\*/.test(l));
    const answerLines = chunk.slice(1, sIdx < 0 ? chunk.length : sIdx);
    // "*Contoh jawaban:*" or a labelled variant such as "*Contoh jawaban (Interpretasi):*" (TM04 Q1)
    if (!/^\*Contoh jawaban\b[^*]*:\*/.test(answerLines[0] ?? '')) throw new Error(`question without "Contoh jawaban": ${chunk[0]}`);
    let signal;
    if (sIdx >= 0) {
      const sig = [];
      for (let k = sIdx; k < chunk.length && chunk[k].trim() !== ''; k++) sig.push(chunk[k]);
      signal = sig.join('\n');
      if (chunk.slice(sIdx + sig.length).some((l) => l.trim() !== '')) throw new Error(`text after "Tanda belum paham": ${chunk[0]}`);
    }
    blocks.push({ kind: 'self-check', question: chunk[0], answer: parseBlocks(answerLines), ...(signal ? { signal } : {}) });
  }
  return blocks;
}

// A paragraph starting with **Soal opens a write-first question; the rest of the section is its sample answer.
// Shared practice pages: "**Batas Developing:** … **Tambahan Proficient:** …" is one paragraph in the package; spec §4
// wants two separate blocks, so it is split at the whitespace before "**Tambahan Proficient:**" (text unchanged).
function splitRubric(blocks) {
  return blocks.flatMap((b) => {
    const m = b.kind === 'p' && b.text.match(/^(\*\*Batas Developing:\*\*[\s\S]*?)\s+(\*\*Tambahan Proficient:\*\*[\s\S]*)$/);
    if (!m) return [b];
    report.push('Batas Developing / Tambahan Proficient split into two note blocks');
    return [{ kind: 'callout', variant: 'note', text: m[1] }, { kind: 'callout', variant: 'note', text: m[2] }];
  });
}

// Write-first practice on shared pages:
//  - "**Pertanyaan**" … "**Pembahasan**" …: the questions (with the write box) stay visible, the discussion is hidden;
//  - "**Tugas:** …": the task stays visible; everything up to the next "### " (the answer frame) is hidden.
function parsePractice(src) {
  const out = [];
  let buf = [];
  const flush = () => { if (buf.length) out.push(...parseBlocks(buf)); buf = []; };
  for (let k = 0; k < src.length; ) {
    const line = src[k];
    const pemb = /^\*\*Pertanyaan\*\*$/.test(line) ? src.findIndex((l, j) => j > k && /^\*\*Pembahasan\*\*$/.test(l)) : -1;
    if (pemb > 0) {
      flush();
      const q = src.slice(k, pemb);
      while (q.length && q[q.length - 1].trim() === '') q.pop();
      out.push({ kind: 'self-check', question: q.join('\n'), answer: splitRubric(parseBlocks(src.slice(pemb), { sampleAnswer: true })) });
      report.push(`write-first scenario: ${q[1] ?? ''}`.slice(0, 80));
      return out;
    }
    if (/^\*\*Pembahasan\*\*$/.test(line)) {
      // A discussion without a "**Pertanyaan**" block (the task was stated above it, e.g. scenario 6): keep everything
      // before it in order, then a write box with no question text of its own, then the hidden discussion.
      flush();
      out.push({ kind: 'self-check', question: '', answer: splitRubric(parseBlocks(src.slice(k), { sampleAnswer: true })) });
      report.push('write-first discussion without a Pertanyaan block (question shown above the box)');
      return out;
    }
    if (/^\*\*Tugas:\*\*/.test(line)) {
      flush();
      let end = k + 1;
      while (end < src.length && src[end].trim() !== '' && !startsBlock(src[end])) end++;
      let stop = end;
      while (stop < src.length && !/^### /.test(src[stop])) stop++;
      out.push({ kind: 'self-check', question: src.slice(k, end).join('\n'), answer: parseBlocks(src.slice(end, stop), { sampleAnswer: true }) });
      report.push(`write-first task: ${line.slice(0, 60)}`);
      k = stop;
      continue;
    }
    buf.push(line);
    k++;
  }
  flush();
  return out;
}

function parseWithSoal(src) {
  const idx = src.findIndex((l) => /^\*\*Soal\b/.test(l));
  if (idx < 0) return parsePractice(src);
  let end = idx + 1;
  while (end < src.length && src[end].trim() !== '' && !startsBlock(src[end])) end++;
  return [
    ...parseBlocks(src.slice(0, idx)),
    { kind: 'self-check', question: src.slice(idx, end).join('\n'), answer: parseBlocks(src.slice(end), { sampleAnswer: true }) },
  ];
}

// ---------- document ----------
let i = 0;
while (lines[i].trim() === '') i++;
const h1 = lines[i].match(/^# (.+)$/);
if (!h1) throw new Error('first line must be the H1');
const tmPrefix = h1[1].match(/^TM\d+: /);
const title = tmPrefix ? h1[1].slice(tmPrefix[0].length) : h1[1];
i++;

// preamble: up to the first "## "
const pre = [];
while (i < lines.length && !/^## /.test(lines[i])) pre.push(lines[i++]);
const objectives = [];
const introParas = [];
const preCallouts = []; // a callout before Fondasi (e.g. "Perhatikan sebelum membaca") opens the page, above Fondasi
{
  const preBlocks = parseBlocks(pre);
  for (let k = 0; k < preBlocks.length; k++) {
    const b = preBlocks[k];
    if (b.kind === 'p' && /^\*\*Setelah TM ini kamu bisa:\*\*$/.test(b.text)) {
      const list = preBlocks[k + 1];
      if (list?.kind !== 'ol') throw new Error('objectives label without a numbered list');
      objectives.push(...list.items);
      k++;
    } else if (b.kind === 'p' && preCallouts.length === 0) introParas.push(b.text);
    else if (b.kind === 'callout') preCallouts.push(b);
    else throw new Error(`unexpected ${b.kind} in the preamble`);
  }
}

// sections; a "---" ends a section, and loose text after it becomes an untitled section
const sections = [];
let current = null;
const flush = () => { if (current && current.body.some((l) => l.trim() !== '')) sections.push(current); current = null; };
for (; i < lines.length; i++) {
  const line = lines[i];
  // A pendalaman wrapped around a whole "## " section (its judul = the heading) becomes one closed pendalaman
  // block in place of a section card (approved for TM03 §8).
  const wrap = pendStart(line);
  if (wrap) {
    let j = i + 1;
    while (j < lines.length && lines[j].trim() === '') j++;
    if (lines[j] === `## ${wrap[1]}`) {
      flush();
      let k = j + 1;
      while (k < lines.length && !isPendEnd(lines[k])) k++;
      if (k >= lines.length) throw new Error(`section pendalaman "${wrap[1]}" has no end`);
      sections.push({ title: undefined, wrapped: { title: wrap[1], body: lines.slice(j + 1, k) } });
      report.push(`section "${wrap[1]}" wrapped in pendalaman: rendered as one closed pendalaman block, heading kept as its title`);
      i = k;
      continue;
    }
  }
  const h2 = line.match(/^## (.+)$/);
  if (h2) { flush(); current = { title: h2[1], body: [] }; continue; }
  if (isRule(line)) { flush(); continue; }
  if (!current) current = { title: undefined, body: [] };
  current.body.push(line);
}
flush();

const blocks = sections.map(({ title: secTitle, body, wrapped }) => {
  if (wrapped) return { kind: 'section', layer: 'main', blocks: [{ kind: 'pendalaman', title: wrapped.title, blocks: parseBlocks(wrapped.body) }] };
  const layer = !secTitle ? 'main'
    : /^(Kilat|0\. )/.test(secTitle) ? 'fondasi'
    : /^(Kasus latihan|Uji pemahaman|Exam toolkit|Persiapan Ujian)$/.test(secTitle) ? 'latihan'
    : 'main';
  let inner = secTitle === 'Kasus latihan' ? parseCases(body)
    : secTitle === 'Uji pemahaman' ? parseSelfChecks(body)
    : parseWithSoal(body);
  let source;
  if (inner[0]?.kind === 'p' && /^\*Sumber: [^*]+\*$/.test(inner[0].text)) { source = inner[0].text; inner = inner.slice(1); }
  if (inner[0]?.kind === 'p' && /^\*\*Intinya:\*\*/.test(inner[0].text)) inner[0] = { kind: 'callout', variant: 'gist', text: inner[0].text };
  if (tmPrefix && secTitle && /^\d+\. /.test(secTitle) && !(inner[0]?.kind === 'callout' && inner[0].variant === 'gist')) report.push(`section "${secTitle}" does not open with Intinya`);
  return { kind: 'section', ...(secTitle ? { title: secTitle } : {}), layer, ...(source ? { source } : {}), blocks: inner };
});

if (preCallouts.length) {
  blocks.unshift({ kind: 'section', layer: 'main', blocks: preCallouts });
  report.push(`${preCallouts.length} callout(s) before Fondasi placed in an untitled block at the top of the page`);
}

const reading = {
  tm: Number(opt('tm')),
  title,
  intro: introParas.join('\n\n'),
  objectives,
  layout: 'layered',
  ref: opt('ref'),
  coreReadingMinutes: Number(opt('minutes') ?? 15),
  ...(opt('badge') ? { badge: opt('badge') } : {}),
  blocks,
};

const rel = input.replace(/\\/g, '/').split('/').slice(-2).join('/');
const ts = `// MNK102 ${rel}, generated by scripts/convert-mnk102.mjs (adapted from AKA201 converter v2).
// Edit the canonical 05 Markdown, then regenerate. Text and visual specifications come from that package.
import type { Reading } from '${typesImport}';

export const ${opt('export')}: Reading = ${JSON.stringify(reading, null, 2)};
`;
writeFileSync(output, ts.replace(/\r?\n/g, '\r\n'));
const count = (kind, list = blocks) => list.reduce((n, b) => n + (b.kind === kind ? 1 : 0) + count(kind, b.blocks ?? []) + count(kind, b.answer ?? []), 0);
console.log(`${rel} -> ${output}`);
console.log(`  title: ${title}${tmPrefix ? ` (removed "${tmPrefix[0]}")` : ''}; objectives ${objectives.length}; sections ${sections.length}`);
console.log(`  pendalaman ${count('pendalaman')}, self-check ${count('self-check')}, cases ${count('solution-reveal')}, tables ${count('table')}, callouts ${count('callout')}`);
console.log(`  figures ${usedFigures.length}: ${usedFigures.join(', ')}`);
for (const r of report) console.log(`  note: ${r}`);
