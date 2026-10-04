import type { ContentBlock, Reading } from '../../types';

/** Remove source anchors and heading numbers, keeping the actual subject intact. */
function subject(text: string): string {
  return text
    .replace(/\[hal\.[^\]]*\]/gi, '')
    .replace(/\\([.*_()])/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/^\d+[a-z]?(?:\.\d+)*[.)]?\s+/i, '')
    .replace(/\s*\(\d+\s*menit\)/gi, '')
    .replace(/\s*·\s*Konsep buku ASP/gi, '')
    .replace(/\s+/g, ' ')
    .replace(/[:.]$/, '')
    .trim();
}

/** Numbered captions in finance/tax data already contain a descriptive table name. */
function captionTitle(caption?: string): string | undefined {
  const match = caption?.match(/^Tabel\s+(?:Solusi\s+Kasus\s+)?[\d.]+[a-z]?:\s*([^\n]+)/i);
  return match ? subject(match[1].split(/;|\.\s/)[0]) : undefined;
}

function isGeneric(text: string): boolean {
  return /^(?:exam toolkit|alat bantu ujian|quick reference.*|daftar komponen lengkap|kesalahpahaman umum|jangan tertukar|jawaban pertanyaan kasus|ringkasan kasus|ringkasan konsep|kekeliruan umum saat ujian|pertanyaan untuk diskusi|orientasi.*|orientation.*|pembahasan|jawaban|analisis|ringkasan|exam traps)$/i.test(text);
}

function columnSubject(headers: string[]): string {
  return headers.map(subject).filter((header) => header && !/^(?:sumber|hal\.?|rujukan|no\.?|#)$/i.test(header)).slice(0, 3).join(' · ');
}

/** Also gives an independently rendered table a useful name. */
export function getTableTitle(block: Extract<ContentBlock, { kind: 'table' }>): string {
  return block.title || block.reportHeader?.title || captionTitle(block.caption) || columnSubject(block.headers) || 'Rincian data';
}

/**
 * Resolve missing names from the section/lead-in that authors already supplied.
 * Works on nested cases, disclosures, answers and review pages without changing source data.
 * Source captions stay in the footer; they are never substituted for the subject.
 */
export function withTableTitles(reading: Reading): Reading {
  function nameBlocks(blocks: ContentBlock[], parent: string): ContentBlock[] {
    let section = parent;
    let mainSection = parent;
    let lead: string | undefined;
    let exhibit: string | undefined;
    const named = blocks.map((block): ContentBlock => {
      if (block.kind === 'h2' || block.kind === 'h3') {
        const heading = subject(block.text);
        const context = block.kind === 'h2' ? parent : mainSection;
        section = isGeneric(heading) ? `${context} — ${heading}` : heading;
        if (block.kind === 'h2') mainSection = section;
        lead = undefined;
        exhibit = undefined;
      } else if (block.kind === 'p') {
        // Only standalone labels, not the bold first word of a definition paragraph.
        const label = block.text.match(/^\*\*([^*\n]+)\*\*(?:\s*\[hal\.[^\]]*\])?[.:]?$/)?.[1]
          // A short colon-ended introduction is often more precise than the full case question.
          ?? block.text.match(/^([^*\n]{8,160}):\s*$/)?.[1];
        if (label) {
          lead = subject(label);
          exhibit = lead.match(/^(Exhibit\s+[\d.]+)\s*:/i)?.[1];
        }
        const part = block.text.match(/^\(([a-z])\)\s+([^.!?\n]+)[.!?](?:\s|$)/i)?.[2];
        if (part) lead = `${exhibit ? `${exhibit} — ` : ''}${subject(part)}`;
      }
      if (block.kind === 'table') {
        const title = block.title || block.reportHeader?.title || captionTitle(block.caption) || lead || section;
        lead = undefined;
        return { ...block, title };
      }
      if ('blocks' in block) {
        const context = block.title ? subject(block.title) : section;
        const nested = { ...block, blocks: nameBlocks(block.blocks, context) };
        if (nested.kind === 'solution-reveal' && nested.promptBlocks) {
          return { ...nested, promptBlocks: nameBlocks(nested.promptBlocks, context) };
        }
        return nested;
      }
      if (block.kind === 'self-check') return { ...block, answer: nameBlocks(block.answer, section) };
      return block;
    });
    // When several tables share a topic, their columns explain which part each shows.
    const counts = new Map<string, number>();
    named.forEach((block) => {
      if (block.kind === 'table' && block.title) counts.set(block.title, (counts.get(block.title) ?? 0) + 1);
    });
    return named.map((block, index) => block.kind === 'table' && !block.reportHeader && blocks[index].kind === 'table' && !(blocks[index] as Extract<ContentBlock, { kind: 'table' }>).title && (counts.get(block.title ?? '') ?? 0) > 1
      ? { ...block, title: `${block.title} — ${columnSubject(block.headers)}` }
      : block);
  }
  return { ...reading, blocks: nameBlocks(reading.blocks, subject(reading.title)) };
}
