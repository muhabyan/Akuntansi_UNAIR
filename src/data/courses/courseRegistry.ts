// =============================================================
// src/data/courses/courseRegistry.ts
// Registri data mata kuliah dengan lazy-loading per mata kuliah.
// Batch 8: hanya data course yang sedang dibuka yang diunduh/diparse.
// =============================================================
import type { Reading, ContentBlock, CalloutVariant } from '../../types';

export type ReviewReadingKey = 'uts' | 'uas';

export interface LoadedCourseContent {
  readings: Record<number, Reading>;
  reviews: Partial<Record<ReviewReadingKey, Reading>>;
  customReferensi?: ContentBlock[];
}

interface AkdasSource {
  meetings: Array<{
    meeting: number;
    title: string;
    topicGroup: string;
    learningObjectives: string[];
    references?: string[];
    prerequisite?: string[];
    conceptMap?: string[];
    sections: Array<{
      heading?: string;
      paragraphs?: string[];
      bullets?: string[];
      formulas?: string[];
    }>;
    workedExamples: Array<{
      title: string;
      case: string;
      solutionSteps?: string[];
      conclusion?: string;
    }>;
    practiceReports: Array<{
      title: string;
      caseDescription: string;
      rawData?: string[];
      requiredOutputs?: string[];
      stepByStepSolution?: string[];
      finalReport?: { title?: string; columns: string[]; rows: string[][] };
    }>;
    templates: Array<{
      title: string;
      purpose: string;
      columns: string[];
      notes: string[];
    }>;
    commonMistakes?: string[];
    quickSummary?: string[];
  }>;
}

interface PerpajakanUtsSource {
  blocks: Array<{
    category: string;
    order: number;
    title: string;
    source_file?: string;
    topics?: string[];
    body_markdown: string;
  }>;
}

interface PerpajakanUasSource {
  sourceFile?: string;
  dateBasis?: string;
  scope?: string;
  modules: Array<{
    tm: number;
    title: string;
    sourcePdf?: string;
    sourceFile?: string;
    lawBasis?: string;
    body_markdown?: string;
    pages?: Array<{
      blocks: Array<{ k: string; text?: string; items?: string[] }>;
    }>;
  }>;
}

function buildAkk106Readings(akdasPraUTS: AkdasSource): Record<number, Reading> {
  const readings: Record<number, Reading> = {};
  akdasPraUTS.meetings.forEach((meeting) => {
    const blocks: ContentBlock[] = [];

    if (meeting.prerequisite && meeting.prerequisite.length > 0) {
      blocks.push({
        kind: 'callout',
        variant: 'info',
        title: 'Prasyarat Sebelum Belajar',
        text: meeting.prerequisite.join('\n')
      });
    }

    if (meeting.conceptMap && meeting.conceptMap.length > 0) {
      blocks.push({
        kind: 'callout',
        variant: 'key',
        title: 'Peta Alur Konsep',
        text: meeting.conceptMap.join('\n')
      });
    }

    meeting.sections.forEach((section) => {
      if (section.heading) blocks.push({ kind: 'h2', text: section.heading });
      section.paragraphs?.forEach((text) => blocks.push({ kind: 'p', text }));
      if (section.bullets && section.bullets.length > 0) {
        blocks.push({ kind: 'ul', items: section.bullets });
      }
      section.formulas?.forEach((text) => blocks.push({ kind: 'formula', text }));
    });

    meeting.workedExamples.forEach((workedExample) => {
      const exampleBlocks: ContentBlock[] = [{ kind: 'p', text: `**Kasus:** ${workedExample.case}` }];
      if (workedExample.solutionSteps && workedExample.solutionSteps.length > 0) {
        exampleBlocks.push({ kind: 'ol', items: workedExample.solutionSteps });
      }
      if (workedExample.conclusion) {
        exampleBlocks.push({ kind: 'callout', variant: 'tip', title: 'Kesimpulan', text: workedExample.conclusion });
      }
      blocks.push({ kind: 'example', title: workedExample.title, blocks: exampleBlocks });
    });

    meeting.practiceReports.forEach((practiceReport) => {
      const reportBlocks: ContentBlock[] = [
        { kind: 'p', text: `**Deskripsi Kasus:** ${practiceReport.caseDescription}` }
      ];
      if (practiceReport.rawData && practiceReport.rawData.length > 0) {
        reportBlocks.push({ kind: 'ul', items: practiceReport.rawData });
      }
      if (practiceReport.requiredOutputs && practiceReport.requiredOutputs.length > 0) {
        reportBlocks.push({ kind: 'ol', items: practiceReport.requiredOutputs });
      }
      if (practiceReport.stepByStepSolution && practiceReport.stepByStepSolution.length > 0) {
        reportBlocks.push({ kind: 'ol', items: practiceReport.stepByStepSolution });
      }
      if (practiceReport.finalReport) {
        reportBlocks.push({
          kind: 'table',
          headers: practiceReport.finalReport.columns,
          rows: practiceReport.finalReport.rows,
          caption: practiceReport.finalReport.title
        });
      }
      blocks.push({ kind: 'example', title: practiceReport.title, blocks: reportBlocks });
    });

    meeting.templates.forEach((template) => {
      blocks.push({
        kind: 'callout',
        variant: 'info',
        title: `Template Laporan: ${template.title}`,
        text: `**Tujuan Laporan:** ${template.purpose}\n\n**Kolom Laporan:** ${template.columns.join(' | ')}\n\n**Panduan Catatan:**\n${template.notes.join('\n')}`
      });
    });

    if (meeting.commonMistakes && meeting.commonMistakes.length > 0) {
      blocks.push({
        kind: 'callout',
        variant: 'warning',
        title: 'Kesalahan Umum Ujian (Wajib Dihindari)',
        text: meeting.commonMistakes.join('\n')
      });
    }

    if (meeting.quickSummary && meeting.quickSummary.length > 0) {
      blocks.push({ kind: 'callout', variant: 'key', title: 'Rangkuman Cepat', text: meeting.quickSummary.join('\n') });
    }

    readings[meeting.meeting] = {
      tm: meeting.meeting,
      title: meeting.title,
      ref: meeting.references?.join(', '),
      intro: meeting.topicGroup,
      objectives: meeting.learningObjectives,
      blocks
    };
  });
  return readings;
}

// =============================================================
// UNIVERSAL MARKDOWN-TO-BLOCKS RUNTIME PARSER
// Batch 3: parser dipertegas untuk materi hukum Perpajakan.
// - Horizontal rule dan anchor HTML diabaikan.
// - Blockquote menjadi callout.
// - Fenced code block menjadi formula/teks terstruktur.
// - Tabel markdown dirender sebagai table block.
// - Heading level ####/##### dibaca sebagai subbagian, bukan teks mentah.
// =============================================================
function normalizeMarkdownLine(line: string): string {
  return line.replace(/\s+$/g, '');
}

function stripBlockquoteMarker(line: string): string {
  return line.replace(/^>\s?/, '').trim();
}

function isHorizontalRule(section: string): boolean {
  return /^(?:-{3,}|_{3,}|\*{3,})$/.test(section.trim());
}

function isHtmlAnchor(section: string): boolean {
  return /^<a\s+id=["'][^"']+["']><\/a>$/i.test(section.trim());
}

function hasLegalSignal(text: string): boolean {
  return /\b(Pasal|UU|PMK|PP\s+No\.|Peraturan|KUP|HPP|HKPD|PPSP|Bea Meterai|Putusan MK|Undang-Undang|Coretax|DJP|WP|SPT|SKP|STP|SP2DK|SPHP|LHP|Sanksi|pidana|restitusi|keberatan|banding|gugatan)\b/i.test(text);
}

function parseBoldTitle(section: string): { title?: string; body: string } {
  const match = section.match(/^\*\*([^*:\n]+):?\*\*\s*(.*)$/s);
  if (!match) return { body: section };
  return {
    title: match[1].trim(),
    body: match[2].trim(),
  };
}

function blockquoteToCallout(section: string, enableLegal = false): ContentBlock {
  const cleaned = section
    .split('\n')
    .map(stripBlockquoteMarker)
    .join('\n')
    .trim();
  const parsed = parseBoldTitle(cleaned);
  const body = parsed.body || cleaned;
  const titleSource = parsed.title ?? 'Catatan Penting';
  const warning = /⚠|PENTING|jangan keliru|tidak berlaku|koreksi|usang|wajib/i.test(cleaned);
  const variant: CalloutVariant = warning ? 'warning' : (enableLegal && hasLegalSignal(cleaned)) ? 'key' : 'info';

  return {
    kind: 'callout',
    variant,
    title: titleSource,
    text: body,
  };
}

function parseMarkdownTable(section: string): ContentBlock | null {
  const lines = section.split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length < 2 || !lines[0].includes('|') || !/^\|?\s*:?-{3,}:?/.test(lines[1])) return null;

  const toCells = (line: string) => {
    const cells = line.split('|').map((cell) => cell.trim());
    if (cells[0] === '') cells.shift();
    if (cells[cells.length - 1] === '') cells.pop();
    return cells;
  };

  const headers = toCells(lines[0]);
  const rows = lines.slice(2).map(toCells).filter((row) => row.length > 0);
  if (headers.length === 0 || rows.length === 0) return null;
  return { kind: 'table', headers, rows };
}

function parseMarkdownList(section: string): ContentBlock | null {
  const lines = section.split('\n').map((line) => line.trimEnd()).filter(Boolean);
  if (lines.length === 0) return null;

  const allUnordered = lines.every((line) => /^[-*]\s+/.test(line.trim()));
  if (allUnordered) {
    return {
      kind: 'ul',
      items: lines.map((line) => line.trim().replace(/^[-*]\s+/, '')),
    };
  }

  const startsOrdered = /^\d+\.\s+/.test(lines[0].trim());
  const hasOrdered = lines.some((line) => /^\d+\.\s+/.test(line.trim()));
  const hasNestedBullets = lines.some((line) => /^\s{2,}[-*]\s+/.test(line));
  if (startsOrdered && hasOrdered) {
    const items: string[] = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (/^\d+\.\s+/.test(trimmed)) {
        items.push(trimmed.replace(/^\d+\.\s+/, ''));
      } else if (hasNestedBullets && items.length > 0 && /^[-*]\s+/.test(trimmed)) {
        items[items.length - 1] += `\n• ${trimmed.replace(/^[-*]\s+/, '')}`;
      }
    }
    return { kind: 'ol', items };
  }

  return null;
}

function metadataToCallout(section: string, enableLegal = false): ContentBlock | null {
  const lines = section.split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length < 2) return null;
  const metadataLines = lines.filter((line) => /^\*\*[^*]+:\*\*/.test(line));
  if (metadataLines.length < 2 || metadataLines.length !== lines.length) return null;

  const titleLine = metadataLines.find((line) => /Dasar Hukum|Dasar aturan|Diperbarui|Program|Mata Kuliah/i.test(line)) ?? metadataLines[0];
  const variant: CalloutVariant = (enableLegal && hasLegalSignal(section)) ? 'key' : 'info';
  return {
    kind: 'callout',
    variant,
    title: (enableLegal && /Dasar Hukum|Dasar aturan/i.test(titleLine)) ? 'Metadata & Dasar Hukum Modul' : 'Metadata Modul',
    text: metadataLines.join('\n'),
  };
}

function fencedCodeToBlock(section: string): ContentBlock | null {
  const match = section.match(/^```[a-zA-Z0-9_-]*\n([\s\S]*?)\n```$/);
  if (!match) return null;
  const code = match[1].trim();
  return { kind: 'formula', text: code };
}

export function parseMarkdownToBlocks(md: string, options: { enableLegal?: boolean } = {}): ContentBlock[] {
  const { enableLegal = false } = options;
  const blocks: ContentBlock[] = [];
  const normalized = md.split('\n').map(normalizeMarkdownLine).join('\n');
  const rawSections = normalized.split(/\n\s*\n/);
  let pendingCalloutEmoji: string | null = null;

  for (let i = 0; i < rawSections.length; i += 1) {
    const section = rawSections[i].trim();
    if (!section || isHorizontalRule(section) || isHtmlAnchor(section) || /^\[↑\s*Kembali/i.test(section)) {
      pendingCalloutEmoji = null;
      continue;
    }

    const fenced = fencedCodeToBlock(section);
    if (fenced) {
      blocks.push(fenced);
      pendingCalloutEmoji = null;
      continue;
    }

    if (section.split('\n').every((line) => line.trim().startsWith('>'))) {
      blocks.push(blockquoteToCallout(section, enableLegal));
      pendingCalloutEmoji = null;
      continue;
    }

    const isSingleEmoji = /^[\p{Emoji_Presentation}\p{Extended_Pictographic}]{1,3}$/u.test(section) && !section.startsWith('#');
    if (isSingleEmoji) {
      pendingCalloutEmoji = section;
      continue;
    }

    if (pendingCalloutEmoji) {
      let variant: CalloutVariant = 'info';
      if (['⚠️', '⚠'].includes(pendingCalloutEmoji)) variant = 'warning';
      else if (['💡', '⭐', '🔑', '📌', '🔍', '🎯'].includes(pendingCalloutEmoji)) variant = 'tip';
      else if (enableLegal && hasLegalSignal(section)) variant = 'key';

      const parsed = parseBoldTitle(section);
      blocks.push({
        kind: 'callout',
        variant,
        title: parsed.title ? `${pendingCalloutEmoji} ${parsed.title}` : `${pendingCalloutEmoji} Catatan`,
        text: parsed.body || section,
      });
      pendingCalloutEmoji = null;
      continue;
    }

    const metadata = metadataToCallout(section, enableLegal);
    if (metadata) {
      blocks.push(metadata);
      continue;
    }

    const table = parseMarkdownTable(section);
    if (table) {
      blocks.push(table);
      continue;
    }

    const list = parseMarkdownList(section);
    if (list) {
      blocks.push(list);
      continue;
    }

    const headingMatch = section.match(/^(#{1,6})\s+([^\n]+)(?:\n([\s\S]+))?$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      blocks.push({ kind: level <= 3 ? 'h2' : 'h3', text });

      const trailingBody = headingMatch[3]?.trim();
      if (trailingBody) {
        blocks.push(...parseMarkdownToBlocks(trailingBody, options));
      }
      continue;
    }

    const boldHeading = section.match(/^\*\*([^*]+)\*\*$/);
    if (boldHeading && boldHeading[1].length <= 96) {
      blocks.push({ kind: 'h3', text: boldHeading[1].trim() });
      continue;
    }

    const isHeadingHeuristic = section.length <= 60
      && !section.includes('\n')
      && !/[.!?:]$/.test(section)
      && !section.includes('*')
      && !section.includes('`')
      && !section.includes('|')
      && !section.includes('[')
      && !section.includes(']');
    if (isHeadingHeuristic) {
      blocks.push({ kind: 'h3', text: section });
      continue;
    }

    blocks.push({ kind: 'p', text: section });
  }
  return blocks;
}


function collectFormulaRows(blocks: ContentBlock[], sourceLabel: string, rows: string[][]): void {
  blocks.forEach((block) => {
    if (block.kind === 'formula') {
      rows.push([sourceLabel, block.text, block.note ?? '']);
    }
    if (block.kind === 'example' || block.kind === 'solution-reveal') {
      collectFormulaRows(block.blocks, sourceLabel, rows);
    }
  });
}

function buildAkbiFormulaBank(readings: Record<number, Reading>, reviews: Partial<Record<ReviewReadingKey, Reading>>): ContentBlock[] {
  const rows: string[][] = [];
  Object.values(readings)
    .sort((a, b) => a.tm - b.tm)
    .forEach((reading) => collectFormulaRows(reading.blocks, `TM ${reading.tm} - ${reading.title}`, rows));

  if (reviews.uts) collectFormulaRows(reviews.uts.blocks, 'Simulasi UTS', rows);
  if (reviews.uas) collectFormulaRows(reviews.uas.blocks, 'Simulasi UAS', rows);

  const uniqueRows = rows.filter((row, index, array) => array.findIndex((candidate) => candidate[0] === row[0] && candidate[1] === row[1] && candidate[2] === row[2]) === index);

  return [
    {
      kind: 'callout',
      variant: 'key',
      title: 'Bank Rumus AKBI',
      text: 'Bank rumus ini dikompilasi otomatis dari blok formula yang sudah ada pada materi AKBI, Simulasi UTS, dan Simulasi UAS. Daftar ini tidak menambah angka atau rumus baru; fungsi utamanya adalah mempercepat navigasi dan pemeriksaan ulang.',
    },
    {
      kind: 'table',
      headers: ['Sumber', 'Rumus', 'Catatan'],
      rows: uniqueRows,
      caption: `Bank rumus AKBI terdeteksi: ${uniqueRows.length} formula unik`,
    },
  ];
}

function buildPjkContent(perpajakanPraUTS: PerpajakanUtsSource, perpajakanPraUAS: PerpajakanUasSource): LoadedCourseContent {
  const readings: Record<number, Reading> = {};

  perpajakanPraUTS.blocks.filter((block) => block.category === 'pra_uts').forEach((block) => {
    const parsedBlocks = parseMarkdownToBlocks(block.body_markdown, { enableLegal: true });
    if (parsedBlocks[0]?.kind === 'h3' && parsedBlocks[0].text.trim() === block.title.trim()) {
      parsedBlocks.shift();
    }
    const topicSummary = block.topics?.join('\n').trim();
    if (topicSummary && parsedBlocks[0]?.kind === 'p' && parsedBlocks[0].text.trim() === topicSummary) {
      parsedBlocks.shift();
    }

    readings[block.order] = {
      tm: block.order,
      title: block.title,
      ref: block.source_file || 'perpajakanPraUTS.ts',
      intro: `Modul Perpajakan I Tatap Muka ${block.order}: ${block.topics?.join(', ') || block.title}.`,
      objectives: block.topics || [],
      blocks: parsedBlocks
    };
  });

  perpajakanPraUAS.modules.forEach((module) => {
    let blocks: ContentBlock[] = [];

    if (module.body_markdown) {
      blocks = parseMarkdownToBlocks(module.body_markdown, { enableLegal: true });
    } else if (module.pages) {
      module.pages.forEach((page) => {
          page.blocks.forEach((pageBlock: any) => {
            if (pageBlock.k === 'h') blocks.push({ kind: 'h2', text: pageBlock.text || '' });
            else if (pageBlock.k === 'p') blocks.push({ kind: 'p', text: pageBlock.text || '' });
            else if (pageBlock.k === 'list') blocks.push({ kind: 'ul', items: pageBlock.items || [] });
            else if (pageBlock.k === 'pre') blocks.push({ kind: 'formula', text: pageBlock.text || '' });
            else if (pageBlock.k === 'callout') blocks.push({ kind: 'callout', variant: pageBlock.variant || 'info', title: pageBlock.title || '', text: pageBlock.text || '' });
            else if (pageBlock.k === 'figure') blocks.push({ kind: 'figure', svg: pageBlock.svg, caption: pageBlock.caption || '', title: pageBlock.title });
            else if (pageBlock.k === 'table') blocks.push({ kind: 'table', headers: pageBlock.headers || [], rows: pageBlock.rows || [], caption: pageBlock.caption });
          });
      });
    }

    if (blocks[0]?.kind === 'h2' && /^TM\s+\d+/i.test(blocks[0].text)) {
      blocks.shift();
    }

    const hasLawBasisBlock = blocks.some((block) =>
      block.kind === 'callout' && /Dasar Hukum/i.test(`${block.title ?? ''} ${block.text}`)
    );
    if (module.lawBasis && !hasLawBasisBlock) {
      blocks.unshift({
        kind: 'callout',
        variant: 'key',
        title: 'Dasar Hukum Utama',
        text: module.lawBasis
      });
    }

    readings[module.tm] = {
      tm: module.tm,
      title: module.title,
      ref: `Regulasi s.d. ${perpajakanPraUAS.dateBasis || 'Juni 2026'}`,
      intro: `Modul Perpajakan I Tatap Muka ${module.tm} — sinkron dari materi kompilasi TM8-14 berbasis regulasi s.d. ${perpajakanPraUAS.dateBasis || 'Juni 2026'}.`,
      objectives: [],
      blocks
    };
  });

  const reference = perpajakanPraUTS.blocks.find((block) => block.category === 'referensi');
  return {
    readings,
    reviews: {},
    customReferensi: reference ? parseMarkdownToBlocks(reference.body_markdown, { enableLegal: true }) : undefined
  };
}

async function resolveCourseContent(courseCode: string): Promise<LoadedCourseContent> {
  switch (courseCode) {
    case 'AKK201': {
      const module = await import('../akm1/akm1Data');
      return { readings: module.AKK201_READINGS, reviews: module.AKM1_REVIEW_READINGS };
    }
    case 'AKM201': {
      const module = await import('../akbi/akbiData');
      return {
        readings: module.AKM201_READINGS,
        reviews: module.AKBI_REVIEW_READINGS,
        customReferensi: buildAkbiFormulaBank(module.AKM201_READINGS, module.AKBI_REVIEW_READINGS),
      };
    }
    case 'EKT109': {
      const module = await import('../pte/pteData');
      return {
        readings: module.EKT109_READINGS,
        reviews: {},
        customReferensi: module.EKT109_PRA_UAS_TOOLKIT,
      };
    }
    case 'MNU101': {
      const module = await import('../pengbis/pengbisData');
      // @ts-expect-error Vite menangani query string ?raw untuk markdown saat build.
      const mdModule = await import('../pengbis/Pengantar_Bisnis_Pra_UAS.md?raw');

      // Mulai dari registry TM1-7 lama sebagai fallback (kalau MD tidak meng-cover satu TM).
      const readings: Record<number, Reading> = { ...module.MNU101_TM1_7_READINGS };
      const rawText = mdModule.default;

      const chunks = rawText.split(/(?=### TM\d{1,2}\b)/i);
      chunks.forEach((chunk: string) => {
        const match = chunk.match(/^### TM(\d{1,2})\s*(?:—|-)\s*([^\n]+)/i);
        if (!match) return;
        const tm = parseInt(match[1], 10);

        // Markdown sekarang dipakai untuk SELURUH TM1-14 (sumber lebih kaya dari registry lama TM1-7).
        if (tm < 1 || tm > 14) return;

        const title = match[2].trim();
        let ref = '';
        const refMatch = chunk.match(/\n_([^\n]+)_\n/);
        if (refMatch) ref = refMatch[1].trim();

        const blocks = parseMarkdownToBlocks(chunk);

        // Buang heading pertama (karena sudah jadi title) dan teks referensi miring.
        if (blocks[0]?.kind === 'h3' && blocks[0].text.includes(`TM${tm}`)) blocks.shift();
        if (blocks[0]?.kind === 'p' && blocks[0].text.startsWith('_') && blocks[0].text.endsWith('_')) blocks.shift();

        // Preserve intro & objectives dari MNU101_TM1_7_READINGS bila tersedia.
        const existing = module.MNU101_TM1_7_READINGS[tm];
        let intro = existing?.intro ?? `Modul Komprehensif Pengantar Bisnis Tatap Muka ${tm}`;
        const objectives = existing?.objectives ?? [];

        // Kalau MD punya blockquote pembuka, pakai sebagai intro override.
        if (blocks[0]?.kind === 'callout' && blocks[0].text.includes('Materi ini')) {
          intro = blocks[0].text;
          blocks.shift();
        }

        readings[tm] = {
          tm,
          title: title || existing?.title || `Pengantar Bisnis TM ${tm}`,
          ref: ref || existing?.ref || 'Materi Pengantar Bisnis (RPS, Pride, Nickels)',
          intro,
          objectives,
          blocks,
        };
      });

      return { readings, reviews: {} };
    }
    case 'AKA103': {
      const module = await import('../ekpa/ekpaReadings');
      return { readings: module.AKA103_READINGS, reviews: module.AKA103_REVIEW_READINGS };
    }
    case 'MAS122': {
      const module = await import('../statistik/statistikData');
      return { readings: module.MAS122_READINGS, reviews: {} };
    }
    case 'AKK106': {
      const module = await import('../akdas/akdasPraUTS');
      return { readings: buildAkk106Readings(module.akdasPraUTS as AkdasSource), reviews: {} };
    }
    case 'PJK201': {
      const [praUts, praUas, pjkReview] = await Promise.all([
        import('../perpajakan/perpajakanPraUTS'),
        import('../perpajakan/perpajakanPraUAS'),
        import('../perpajakan/pjkReviewReadings')
      ]);
      const content = buildPjkContent(praUts.perpajakanPraUTS as PerpajakanUtsSource, perpajakanPraUASCheck(praUas.perpajakanPraUAS));
      content.reviews = pjkReview.PJK201_REVIEW_READINGS;
      return content;
    }
    default:
      return { readings: {}, reviews: {} };
  }
}

function perpajakanPraUASCheck(source: PerpajakanUasSource): PerpajakanUasSource {
  return source;
}

const contentCache = new Map<string, Promise<LoadedCourseContent>>();

/** Muat konten hanya untuk mata kuliah yang sedang diakses. */
export function loadCourseContent(courseCode: string): Promise<LoadedCourseContent> {
  const cached = contentCache.get(courseCode);
  if (cached) return cached;
  const promise = resolveCourseContent(courseCode).catch((error: unknown) => {
    contentCache.delete(courseCode);
    throw error;
  });
  contentCache.set(courseCode, promise);
  return promise;
}
