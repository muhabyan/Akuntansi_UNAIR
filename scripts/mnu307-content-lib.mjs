import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { figure } from './mnu307-visuals.mjs';

export const TMS = [1, 2, 3, 4, 5, 6];
export const minutes = { 1: 14, 2: 23, 3: 18, 4: 20, 5: 19, 6: 20 };
export const sourcePath = tm => `scripts/fixtures/mnu307/tm${String(tm).padStart(2, '0')}.md`;
export const sourceHash = tm => createHash('sha256').update(fs.readFileSync(sourcePath(tm))).digest('hex');
export function visualSpecs(source) {
  return [...source.matchAll(/```visual\r?\n([\s\S]*?)```/g)].map(match => {
    const spec = {}; let key;
    for (const line of match[1].trim().split(/\r?\n/)) {
      if (/^\s/.test(line)) spec[key] += '\n' + line.trim();
      else { const colon = line.indexOf(':'); key = line.slice(0, colon); spec[key] = line.slice(colon + 1).trim(); }
    }
    return spec;
  });
}

// Uses the existing ASP ContentBlock contracts; no runtime renderer is added.
export function parseBlocks(lines) {
  const blocks = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i].trim();
    if (!line || line === '---') { i++; continue; }
    if (line.startsWith('```')) {
      const type = line.slice(3).trim(), body = []; i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) body.push(lines[i++]);
      i++;
      if (type === 'visual') blocks.push(figure(visualSpecs('```visual\n' + body.join('\n') + '\n```')[0]));
      else if (type === 'self-check') {
        const values = Object.fromEntries(body.map(s => { const colon = s.indexOf(':'); return [s.slice(0, colon).trim(), s.slice(colon + 1).trim()]; }));
        blocks.push({ kind: 'self-check', question: values.question, answer: [{ kind: 'p', text: values.answer }], signal: values.signal });
      } else throw Error(`Unsupported source fence: ${type}`);
      continue;
    }
    if (/^:::\s*pendalaman/.test(line)) {
      const title = line.replace(/^:::\s*pendalaman\s*/, ''), start = ++i;
      while (i < lines.length && lines[i].trim() !== ':::') i++;
      if (i === lines.length) throw Error('Unclosed depth panel');
      blocks.push({ kind: 'pendalaman', title, blocks: parseBlocks(lines.slice(start, i)) }); i++; continue;
    }
    if (line.startsWith('|') && /^\s*\|[- :|]+\|?\s*$/.test(lines[i + 1] ?? '')) {
      const cells = s => s.trim().replace(/^\||\|$/g, '').split('|').map(s => s.trim());
      const headers = cells(lines[i++]);
      const align = cells(lines[i++]).map(s => s.endsWith(':') ? s.startsWith(':') ? 'center' : 'right' : 'left');
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(cells(lines[i++]));
      blocks.push({ kind: 'table', headers, rows, align, ...(headers.length >= 4 ? { stackOnMobile: true } : {}) }); continue;
    }
    if (line.startsWith('>')) {
      const quote = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) quote.push(lines[i++].trim().replace(/^>\s?/, ''));
      const memory = quote[0].match(/^\*\*Kalau cuma sempat ingat satu hal:\*\*\s*(.*)$/);
      const exam = quote[0].match(/^\*\*(Kalau ditanya di ujian[^*]*)\*\*\s*(.*)$/i);
      const named = quote[0].match(/^\*\*([^*]+)\*\*\s*(.*)$/);
      blocks.push({ kind: 'callout', variant: memory ? 'gist' : exam ? 'tip' : 'note', title: memory ? 'Kalau cuma sempat ingat satu hal:' : named ? named[1] : quote[0].replace(/\*\*/g, ''), text: memory ? memory[1] : named ? [named[2], ...quote.slice(1)].filter(Boolean).join('\n') : quote.slice(1).join('\n'), ...(memory ? { compact: true } : {}) }); continue;
    }
    if (/^[-*] /.test(line) || /^\d+\. /.test(line)) {
      const ordered = /^\d+\. /.test(line), items = [];
      while (i < lines.length && (ordered ? /^\d+\. / : /^[-*] /).test(lines[i].trim())) items.push(lines[i++].trim().replace(ordered ? /^\d+\. / : /^[-*] /, ''));
      blocks.push({ kind: ordered ? 'ol' : 'ul', items }); continue;
    }
    if (/^#{2,4} /.test(line)) { blocks.push({ kind: line.startsWith('## ') ? 'h2' : 'h3', text: line.replace(/^#+ /, '') }); i++; continue; }
    const paragraph = [line]; i++;
    while (i < lines.length && lines[i].trim() && !/^(?:\||>|#|:::|```|---$|[-*] |\d+\. )/.test(lines[i].trim())) paragraph.push(lines[i++].trim());
    blocks.push({ kind: 'p', text: paragraph.join('\n') });
  }
  return blocks;
}

function examBlocks(lines, tm) {
  const result = [];
  const parsed = parseBlocks(lines);
  for (let i = 0; i < parsed.length; i++) {
    const block = parsed[i];
    if (tm >= 3 && block.kind === 'h3' && /^SRQ-TM/.test(block.text)) {
      const question = parsed[++i], answer = parsed[++i];
      if (question?.kind !== 'p' || answer?.kind !== 'p' || !answer.text.startsWith('**Pokok jawaban:**')) throw Error('Incomplete SRQ');
      result.push({ kind: 'solution-reveal', title: block.text, promptBlocks: [question], blocks: [answer], revealLabel: 'Tampilkan penyelesaian dan jawaban akhir' });
      continue;
    }
    if (tm >= 3 && block.kind === 'p' && /^\*\*(?:Kasus\b|Exhibit \d+)/.test(block.text)) {
      const split = block.text.indexOf('**Pokok jawaban:**');
      const question = split < 0 ? block : { ...block, text: block.text.slice(0, split).trim() };
      const answer = split < 0 ? parsed[++i] : { kind: 'p', text: block.text.slice(split).trim() };
      if (answer?.kind !== 'p' || !answer.text.startsWith('**Pokok jawaban:**')) throw Error('Incomplete case');
      result.push({ kind: 'solution-reveal', title: question.text.match(/^\*\*([^*]+)\*\*/)[1], promptBlocks: [question], blocks: [answer], revealLabel: 'Tampilkan penyelesaian dan jawaban akhir' });
      continue;
    }
    if (block.kind === 'self-check') {
      result.push({ kind: 'solution-reveal', title: /^\d+\./.test(block.question) ? `Summary Review Question ${block.question.match(/^\d+/)[0]}` : block.question.split('. ')[0], promptBlocks: [{ kind: 'p', text: block.question }], blocks: [...block.answer, { kind: 'p', text: block.signal }], revealLabel: 'Tampilkan penyelesaian dan jawaban akhir' });
    } else if (tm === 2 && block.kind === 'table' && block.headers[0] === 'ID') {
      for (const [id, question, answer] of block.rows) result.push({ kind: 'solution-reveal', title: id, promptBlocks: [{ kind: 'p', text: `**${block.headers[1]}:** ${question}` }], blocks: [{ kind: 'p', text: `**${block.headers[2]}:** ${answer}` }], revealLabel: 'Tampilkan penyelesaian dan jawaban akhir' });
    } else if (tm === 2 && block.kind === 'p' && /^\*\*K-\d+/.test(block.text)) {
      const split = block.text.indexOf('**Hasil analisis:**');
      if (split < 0) throw Error('Missing case solution');
      result.push({ kind: 'solution-reveal', title: block.text.match(/^\*\*([^*]+)\*\*/)[1], promptBlocks: [{ kind: 'p', text: block.text.slice(0, split).trim() }], blocks: [{ kind: 'p', text: block.text.slice(split).trim() }], revealLabel: 'Tampilkan penyelesaian dan jawaban akhir' });
    } else result.push(block);
  }
  return result;
}

export function buildReading(tm) {
  const lines = fs.readFileSync(sourcePath(tm), 'utf8').split(/\r?\n/);
  const kilat = lines.findIndex(s => s === '## Kilat'), inti = lines.findIndex(s => s === '## Inti');
  const exam = lines.findIndex(s => /^## Persiapan [Uu]jian/.test(s));
  const starts = lines.flatMap((s, i) => i > inti && i < exam && /^## \d+\./.test(s) ? [i] : []);
  const foundation = { kind: 'section', layer: 'fondasi', title: 'Kilat', blocks: parseBlocks(lines.slice(kilat + 1, inti)) };
  const blocks = [...parseBlocks(lines.slice(1, kilat)), foundation, { kind: 'h2', text: 'Inti' }, ...parseBlocks(lines.slice(inti + 1, starts[0])), ...starts.map((start, i) => ({ kind: 'section', layer: 'main', title: lines[start].slice(3), blocks: parseBlocks(lines.slice(start + 1, starts[i + 1] ?? exam)) }))];
  const practice = examBlocks(lines.slice(exam + 1), tm);
  const firstExercise = practice.findIndex(b => b.kind === 'solution-reveal');
  blocks.push({ kind: 'section', layer: 'latihan', title: lines[exam].slice(3), blocks: practice.slice(0, firstExercise) }, ...practice.slice(firstExercise));
  // Escape literal currency for the existing Markdown/math renderer, preserving visible source text.
  if(tm>=5)for(const block of flatten(blocks))if(block.kind==='p')block.text=block.text.replace(/US\$(?=\d)/g,()=> 'US\\$');
  const memory = foundation.blocks.find(b => b.kind === 'callout' && b.variant === 'gist');
  return { tm, title: lines[0].replace(/^# MNU307 TM\d+:\s*/, '').replace(/^\p{L}/u, s => s.toLocaleUpperCase('id-ID')), ref: 'Dess dkk., Strategic Management: Text and Cases, 11th ed.' + ({1:' · Chapter 1 [hal. 2–33]',2:' · Chapters 2–4 [hal. 36–134]',3:' · Chapters 5–6 [hal. 142–202]',4:' · Chapters 7–8 [hal. 207–267]',5:' · Chapters 9–10 [hal. 271–330]',6:' · Chapters 11–12 [hal. 337–390]'}[tm]), intro: memory.text.replace(/^\p{L}/u, s => s.toLocaleUpperCase('id-ID')), objectives: foundation.blocks.find(b => ['ul', 'ol'].includes(b.kind)).items, layout: 'layered', coreReadingMinutes: minutes[tm], blocks };
}
export const flatten = blocks => blocks.flatMap(b => [b, ...flatten(b.blocks ?? []), ...flatten(b.promptBlocks ?? []), ...flatten(b.answer ?? [])]);
