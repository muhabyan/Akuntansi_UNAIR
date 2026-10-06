import fs from 'node:fs';
import { createHash } from 'node:crypto';
export const partPath = part => 'scripts/fixtures/mnu307/tm07' + part.toLowerCase() + '.md';
export const hashTM7 = () => createHash('sha256').update(fs.readFileSync(partPath('A'))).update(fs.readFileSync(partPath('B'))).digest('hex');
const reveal = (title, promptBlocks, blocks) => ({ kind: 'solution-reveal', title, promptBlocks, blocks, revealLabel: 'Tampilkan penyelesaian dan jawaban akhir' });
function partBlocks(part, parse) {
  const lines = fs.readFileSync(partPath(part), 'utf8').split(/\r?\n/);
  const kilat = lines.indexOf('## Kilat'), inti = lines.indexOf('## Inti');
  const exam = lines.findIndex(s => /^## Persiapan [Uu]jian/.test(s));
  const starts = lines.flatMap((s, i) => i > inti && i < exam && /^#{2,3} \d+\./.test(s) ? [i] : []);
  const blocks = [{ kind: 'h2', text: 'Bagian ' + part + ' · ' + (part === 'A' ? 'Blue Ocean Strategy' : 'Strategy Maps') }, ...parse(lines.slice(1, kilat)), { kind: 'section', layer: 'fondasi', title: part + ' · Kilat', blocks: parse(lines.slice(kilat + 1, inti)) }, { kind: 'h2', text: part + ' · Inti' }, ...parse(lines.slice(inti + 1, starts[0]))];
  for (const [i, start] of starts.entries()) blocks.push({ kind: 'section', layer: 'main', title: part + ' · ' + lines[start].replace(/^#+ /, ''), blocks: parse(lines.slice(start + 1, starts[i + 1] ?? exam)) });
  // A's depth title is on the opening directive; B's is the first heading.
  for (const section of blocks) for (const block of section.blocks ?? []) if (block.kind === 'pendalaman') {
    if (!block.title && block.blocks[0]?.kind === 'h3') block.title = block.blocks.shift().text;
    block.title = part + ' · ' + block.title;
  }
  const practice = parse(lines.slice(exam + 1));
  if (part === 'A') {
    const first = practice.findIndex(b => b.kind === 'h3' && /^L-01/.test(b.text));
    blocks.push({ kind: 'section', layer: 'latihan', title: 'A · Persiapan Ujian', blocks: practice.slice(0, first) });
    for (let i = first; i < practice.length; i++) {
      const block = practice[i];
      if (block.kind === 'h3' && /^L-\d+/.test(block.text)) {
        const question = practice[++i], answer = practice[++i];
        if (question?.kind !== 'p' || answer?.kind !== 'p' || !answer.text.startsWith('**Pokok jawaban:**')) throw Error('Incomplete A exercise');
        blocks.push(reveal('A · ' + block.text, [question], [answer]));
      } else blocks.push(block.kind === 'h3' ? { ...block, text: 'A · ' + block.text } : block);
    }
  } else {
    const exercises = practice.findIndex(b => b.kind === 'h3' && b.text === 'Latihan');
    const keys = practice.findIndex(b => b.kind === 'h3' && b.text === 'Kunci dan arah jawaban');
    const questions = practice[exercises + 1], answers = practice[keys + 1];
    if (questions?.kind !== 'ol' || answers?.kind !== 'ol' || questions.items.length !== 7 || answers.items.length !== 7) throw Error('Incomplete B exercises');
    blocks.push({ kind: 'section', layer: 'latihan', title: 'B · Persiapan ujian', blocks: practice.slice(0, exercises) }, { kind: 'h3', text: 'B · Latihan' });
    questions.items.forEach((text, i) => blocks.push(reveal('B · Latihan ' + (i + 1), [{ kind: 'p', text }], [{ kind: 'p', text: answers.items[i] }])));
    blocks.push(...practice.slice(keys + 2));
  }
  return blocks;
}
export function buildTM7(parse) {
  const blocks = [...partBlocks('A', parse), ...partBlocks('B', parse)];
  return { tm: 7, title: 'Blue Ocean Strategy dan Strategy Maps', ref: 'Bagian A: Kim & Mauborgne, Blue Ocean Strategy (2005) · Bagian B: Kaplan & Norton, Strategy Maps (2004)', intro: 'Menciptakan ruang pasar baru dan menghubungkan kemampuan, proses, nilai pelanggan, serta hasil strategi.', objectives: blocks.filter(b => b.kind === 'section' && b.layer === 'fondasi').flatMap(b => b.blocks.find(c => c.kind === 'ol').items), layout: 'layered', coreReadingMinutes: 37, blocks };
}
