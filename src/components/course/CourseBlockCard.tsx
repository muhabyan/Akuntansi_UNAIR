import { useId, useState } from 'react';
import { AlertTriangle, BookOpen, ChevronDown, ChevronUp, Eye, FileText, GitBranch, Gavel, Lightbulb, Scale, Sigma, Sparkles, Square, Table2, Calculator, PencilLine, LineChart } from 'lucide-react';
import type { ContentBlock } from '../../types';
import { renderText } from './MarkdownContent';
import PracticeReportCard from './PracticeReportCard';
import { InteractiveMatchBuilder, JournalBuilder, TAccountBuilder, TableFillBuilder } from '../InteractivePracticeBuilders';
import EconDiagram from './EconDiagrams';
import { AgencyMobileOverview, MobileParticipantFlow, SmlMobileOverview } from './MobileDiagramOverviews';
import { InsideBoxContext, LayeredContext, useInsideBox, useLayered } from './layeredContext';
import { useSharedFrame } from './readingFrame';
import { LayeredCallout, LayeredSection, PendalamanBlock, SelfCheckCard, SourceLine, StackedTable, InlineMarkdown, isSourceOnly, literalLeadingMarker } from './LayeredBlocks';

interface CourseBlockCardProps {
  block: ContentBlock;
  isSimulation?: boolean;
  /**
   * Aktifkan deteksi & styling "Dasar Hukum / Tabel Hukum Pajak".
   * Default false: hanya mata kuliah hukum/pajak (PJK201) yang mengaktifkannya,
   * supaya istilah akuntansi seperti HPP (Harga Pokok Penjualan) tidak salah
   * dikira referensi hukum (UU HPP) di mata kuliah lain seperti AKBI.
   */
  enableLegalStyling?: boolean;
  /** Aktifkan pola baca ekonomi khusus PTE tanpa mengubah renderer course lain. */
  enableEconomicStyling?: boolean;
  /** Aktifkan affordance tabel/formula dan propagasi surface untuk reading shell editorial AKBI. */
  enableEditorialReading?: boolean;
}

/**
 * Heuristic: detect if formula text contains legal references.
 * Legal content should use sans-serif for readability, not monospace.
 */
function isLegalContent(text: string): boolean {
  const legalKeywords = /\b(Pasal|UU|PMK|PER|PP|Peraturan|KUP|HPP|Dasar Hukum|ayat|huruf|Undang-Undang|Perda|SE-|KEP-|S-)\b/i;
  return legalKeywords.test(text);
}

/**
 * Heuristic: detect if formula text is actually tabular/matrix data.
 * These should be rendered with pre-wrap but sans-serif.
 */
function isMatrixContent(text: string): boolean {
  const lines = text.split('\n');
  if (lines.length < 3) return false;
  const linesWithMultipleSpaces = lines.filter(l => /\s{3,}/.test(l)).length;
  return linesWithMultipleSpaces > lines.length * 0.3;
}

function hasManualWarning(text?: string): boolean {
  return Boolean(text && text.includes('[Perlu pemeriksaan manual]'));
}

function isRegulationComparison(text: string): boolean {
  return /aturan lama|aturan baru|sebelum|sesudah|berubah|koreksi|PMK 15\/2025|UU HPP/i.test(text);
}


function isEconomicMechanism(text: string): boolean {
  return /mekanisme|transmisi|alur|shock|rantai dampak|hubungan materi|output gap|multiplier/i.test(text);
}

function isEconomicAssumption(text: string): boolean {
  return /asumsi|ceteris paribus|dengan syarat|selama kapasitas|jika v stabil|jangka pendek|jangka panjang/i.test(text);
}

function isEconomicComparison(text: string): boolean {
  return /perbandingan|dibanding|versus|\bvs\b|nominal.*riil|tertutup.*terbuka|demand-pull.*cost-push/i.test(text);
}

function splitEconomicFormula(text: string): { title?: string; body: string } {
  const [first, ...rest] = text.split('\n');
  const secondIsBlank = rest[0]?.trim() === '';
  const looksLikeTitle = first.trim().length <= 96;
  if (secondIsBlank && looksLikeTitle) {
    return { title: first.trim(), body: rest.slice(1).join('\n').trim() };
  }
  return { body: text };
}

function isChecklist(items: string[]): boolean {
  return items.length > 0 && items.every((item) => /^\[[ xX]\]\s*/.test(item));
}

function stripChecklistMarker(item: string): string {
  return item.replace(/^\[[ xX]\]\s*/, '');
}

function RenderMultilineText({ text }: { text: string }) {
  return <div className="whitespace-pre-line">{renderText(text)}</div>;
}



function ReadableParagraph({ text }: { text: string }) {
  const layered = useLayered();
  return (
    <div className={`mb-4 text-base text-slate-800 dark:text-slate-200 md:text-[16.5px] ${layered ? 'max-w-[70ch] leading-[1.7]' : 'max-w-[88ch] leading-[1.8]'}`}>
      {renderText(text)}
    </div>
  );
}

function blockContainsManualWarning(block: ContentBlock): boolean {
  if ('text' in block && hasManualWarning(block.text)) return true;
  if ('caption' in block && hasManualWarning(block.caption)) return true;
  if (block.kind === 'table') return block.rows.some((row) => row.some((cell) => hasManualWarning(cell)));
  if (block.kind === 'example') return block.blocks.some(blockContainsManualWarning);
  return false;
}

function SolutionRevealCard({
  block,
  isSimulation,
  enableLegalStyling = false,
  enableEconomicStyling = false,
  enableEditorialReading = false,
}: {
  block: Extract<ContentBlock, { kind: 'solution-reveal' }>;
  isSimulation: boolean;
  enableLegalStyling?: boolean;
  /** Aktifkan pola baca ekonomi khusus PTE tanpa mengubah renderer course lain. */
  enableEconomicStyling?: boolean;
  /** Aktifkan affordance tabel/formula dan propagasi surface untuk reading shell editorial AKBI. */
  enableEditorialReading?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="course-solution-surface mb-8 overflow-hidden rounded-[1.7rem] border border-emerald-500/30 dark:border-emerald-500/25 bg-emerald-500/10 dark:bg-emerald-500/5">
      <div className="border-b border-emerald-500/20 dark:border-emerald-500/15 px-5 py-4 md:px-6 bg-slate-50/50 dark:bg-transparent">
        <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
          <Eye size={14} /> Pembahasan Setelah Mengerjakan
        </div>
        <h3 className="font-display text-base font-black leading-snug text-slate-900 dark:text-slate-100 md:text-lg">{block.title}</h3>
        {block.prompt && <div className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-400">{renderText(block.prompt)}</div>}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 dark:border-emerald-500/30 bg-emerald-500/15 dark:bg-emerald-500/10 px-4 py-2.5 text-xs font-black text-emerald-800 dark:text-emerald-300 transition hover:bg-emerald-500/20"
        >
          {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          {isOpen ? 'Sembunyikan pembahasan' : block.revealLabel ?? 'Tampilkan pembahasan langkah demi langkah'}
        </button>
      </div>
      {isOpen && (
        <div className="p-4 md:p-6">
          {/* Only read by layered readings: a table or callout in here renders flat. */}
          <InsideBoxContext.Provider value>
            {block.blocks.map((nestedBlock, index) => (
              <CourseBlockCard key={index} block={nestedBlock} isSimulation={isSimulation} enableLegalStyling={enableLegalStyling} enableEconomicStyling={enableEconomicStyling} enableEditorialReading={enableEditorialReading} />
            ))}
          </InsideBoxContext.Provider>
        </div>
      )}
    </section>
  );
}

function PracticeBox({ block, isSimulation, enableLegalStyling, enableEconomicStyling, enableEditorialReading }: any) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="mb-8 overflow-hidden rounded-[1.2rem] border border-orange-500/30 bg-orange-50/50 dark:border-orange-500/20 dark:bg-orange-950/10">
      <div className="flex items-center gap-2 border-b border-orange-500/20 bg-orange-500/10 px-5 py-3 text-sm font-black text-orange-800 dark:text-orange-400">
        <PencilLine size={18} /> {block.title || "Latihan Soal"}
      </div>
      <div className="p-5">
        <div className="space-y-4">
          {block.blocks.map((b: any, i: number) => (
            <CourseBlockCard key={i} block={b} isSimulation={isSimulation} enableLegalStyling={enableLegalStyling} enableEconomicStyling={enableEconomicStyling} enableEditorialReading={enableEditorialReading} />
          ))}
        </div>
        <div className="mt-5 border-t border-orange-500/20 pt-5">
          {!revealed ? (
            <button onClick={() => setRevealed(true)} className="flex items-center gap-2 rounded-xl bg-orange-200/50 px-5 py-2.5 text-sm font-bold text-orange-800 transition-colors hover:bg-orange-200 dark:bg-orange-900/40 dark:text-orange-300 dark:hover:bg-orange-900/60 border border-orange-500/20">
              <Eye size={16} /> Tampilkan Kunci Jawaban
            </button>
          ) : (
            <div className="animate-in fade-in slide-in-from-top-2 rounded-xl bg-orange-200/40 p-5 text-sm text-orange-900 dark:bg-orange-900/20 dark:text-orange-100 border border-orange-500/20">
              <div className="mb-2 font-black text-orange-800 dark:text-orange-400">Kunci Jawaban Singkat:</div>
              <div className="leading-relaxed">{renderText(block.answerKey)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MathExampleBox({ block, isSimulation, enableLegalStyling, enableEconomicStyling, enableEditorialReading }: any) {
  return (
    <div className="mb-8 overflow-hidden rounded-[1.2rem] border border-blue-500/30 bg-blue-50/40 dark:border-blue-500/20 dark:bg-blue-950/10 shadow-sm">
      <div className="flex items-center gap-2 border-b border-blue-500/20 bg-blue-500/10 px-5 py-3 text-sm font-black text-blue-800 dark:text-blue-400">
        <Calculator size={18} /> {block.title}
      </div>
      <div className="p-5 space-y-4">
        {block.blocks.map((b: any, i: number) => (
          <CourseBlockCard key={i} block={b} isSimulation={isSimulation} enableLegalStyling={enableLegalStyling} enableEconomicStyling={enableEconomicStyling} enableEditorialReading={enableEditorialReading} />
        ))}
      </div>
    </div>
  );
}

function ChartGuideBox({ block }: any) {
  return (
    <div className="mb-8 overflow-hidden rounded-[1.2rem] border border-emerald-500/30 bg-emerald-50/50 dark:border-emerald-500/20 dark:bg-emerald-950/10 shadow-sm">
      <div className="flex items-center gap-2 border-b border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-sm font-black text-emerald-800 dark:text-emerald-400">
        <LineChart size={18} /> {block.title || "Cara Membaca Grafik Ini"}
      </div>
      <div className="p-5">
        <ul className="space-y-4">
          {block.points.map((pt: string, i: number) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-200/70 text-[10px] font-black text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200">{i+1}</span>
              <span>{renderText(pt)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CourseBlockCard({ block, isSimulation = false, enableLegalStyling = false, enableEconomicStyling = false, enableEditorialReading = false }: CourseBlockCardProps) {
  const blockId = useId();
  const layered = useLayered();
  const insideBox = useInsideBox();
  const sharedFrame = useSharedFrame();
  const nestedBlocks = (blocks: ContentBlock[]) =>
    blocks.map((nested, index) => (
      <CourseBlockCard key={index} block={nested} isSimulation={isSimulation} enableLegalStyling={enableLegalStyling} enableEconomicStyling={enableEconomicStyling} enableEditorialReading={enableEditorialReading} />
    ));
  switch (block.kind) {
    case 'section':
      return (
        <LayeredContext.Provider value>
          <LayeredSection title={block.title} layer={block.layer} source={block.source}>{nestedBlocks(block.blocks)}</LayeredSection>
        </LayeredContext.Provider>
      );
    case 'pendalaman':
      return <PendalamanBlock title={block.title}>{nestedBlocks(block.blocks)}</PendalamanBlock>;
    case 'self-check':
      return <SelfCheckCard question={block.question} signal={block.signal}>{nestedBlocks(block.answer)}</SelfCheckCard>;
    case 'h2':
      return (
        <div className="group mt-8 mb-3 scroll-mt-28">
          {!isSimulation && (
            <div className="mb-1 text-[10.5px] font-black uppercase tracking-[0.24em] text-gold-600 dark:text-gold/80">Bagian Materi</div>
          )}
          <h2 className="font-display text-xl font-black leading-tight text-slate-900 dark:text-slate-100 md:text-2xl">
            {renderText(block.text)}
          </h2>
        </div>
      );
    case 'h3':
      return (
        <h3 className="mt-6 mb-2 border-l-4 border-gold-500 dark:border-gold/70 pl-4 font-display text-lg font-bold leading-snug text-gold-700 dark:text-gold">
          {renderText(block.text)}
        </h3>
      );
    case 'p': {
      return layered && isSourceOnly(block.text) ? <SourceLine text={block.text} /> : <ReadableParagraph text={block.text} />;
    }
    case 'ul': {
      const checklist = (enableEconomicStyling || layered) && isChecklist(block.items);
      return (
        <ul
          className={layered ? 'mb-6 max-w-[70ch] space-y-2 pl-1' : 'mb-6 max-w-[88ch] space-y-3 pl-1 md:pl-2'}
          aria-label={checklist ? (layered ? 'Daftar periksa' : 'Checklist review UAS') : undefined}
        >
          {block.items.map((it, i) => (
            <li key={i} className={`flex gap-3 text-base text-slate-800 dark:text-slate-200 ${layered ? 'leading-[1.7] md:text-[16.5px]' : 'leading-[1.8] md:text-[16px]'}`}>
              {checklist ? (
                <Square aria-hidden="true" className="mt-1 shrink-0 text-emerald-600 dark:text-emerald-300" size={18} />
              ) : (
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-blue-400 shadow-sm shadow-blue-500/40" />
              )}
              {/* Layered items are plain markdown: pre-line would turn the newlines between nested blocks into gaps. */}
              <span className={layered ? 'min-w-0' : 'whitespace-pre-line'}>{renderText(checklist ? stripChecklistMarker(it) : it)}</span>
            </li>
          ))}
        </ul>
      );
    }
    case 'ol':
      return (
        <ol className={`mb-6 list-decimal pl-6 text-base text-slate-800 dark:text-slate-200 marker:font-black marker:text-blue-600 dark:marker:text-blue-400 ${layered ? 'max-w-[70ch] space-y-2 leading-[1.7] md:text-[16.5px]' : 'max-w-[88ch] space-y-3 md:pl-8 leading-[1.8] md:text-[16px]'}`}>
          {block.items.map((it, i) => (
            <li key={i} className={layered ? 'pl-1' : 'whitespace-pre-line pl-1'}>{renderText(it)}</li>
          ))}
        </ol>
      );
    case 'callout': {
      if (layered) return <LayeredCallout variant={block.variant} title={block.title} text={block.text} />;
      let borderCls = 'border-sky-500/35';
      let bgCls = 'bg-sky-500/10 dark:bg-sky-500/5';
      let titleCls = 'text-sky-800 dark:text-sky-300';
      let textCls = 'text-slate-800 dark:text-slate-300';
      let IconComponent = Lightbulb;

      if (block.variant === 'tip') {
        borderCls = 'border-emerald-500/35';
        bgCls = 'bg-emerald-500/10 dark:bg-emerald-500/5';
        titleCls = 'text-emerald-800 dark:text-emerald-300';
      } else if (block.variant === 'warning') {
        borderCls = 'border-amber-500/45';
        bgCls = 'bg-amber-500/15 dark:bg-amber-500/10';
        titleCls = 'text-amber-800 dark:text-amber-300';
        IconComponent = AlertTriangle;
      } else if (block.variant === 'key') {
        borderCls = 'border-gold/40';
        bgCls = 'bg-gold/15 dark:bg-gold/10';
        titleCls = 'text-amber-900 dark:text-gold';
      }

      const titleText = block.title ?? 'Konsep Kunci';
      const isLegal = enableLegalStyling && (isLegalContent(titleText) || isLegalContent(block.text));
      const isManual = hasManualWarning(titleText) || hasManualWarning(block.text);

      if (isLegal) {
        borderCls = 'border-indigo-500/35';
        bgCls = 'bg-indigo-500/10 dark:bg-indigo-500/5';
        titleCls = 'text-indigo-800 dark:text-indigo-300';
        IconComponent = isRegulationComparison(`${titleText} ${block.text}`) ? Gavel : Scale;
      }
      if (enableEconomicStyling && !isLegal) {
        const economicText = `${titleText} ${block.text}`;
        if (isEconomicMechanism(economicText)) {
          borderCls = 'border-cyan-400/35';
          bgCls = 'bg-cyan-400/10 dark:bg-cyan-400/5';
          titleCls = 'text-cyan-800 dark:text-cyan-200';
          IconComponent = GitBranch;
        } else if (isEconomicAssumption(economicText)) {
          borderCls = 'border-violet-400/35';
          bgCls = 'bg-violet-400/10 dark:bg-violet-400/5';
          titleCls = 'text-violet-800 dark:text-violet-200';
          IconComponent = Lightbulb;
        }
      }
      if (isManual) {
        borderCls = 'border-amber-400/60';
        bgCls = 'bg-amber-400/15 dark:bg-amber-400/10';
        titleCls = 'text-amber-700 dark:text-amber-200';
        textCls = 'text-slate-700 dark:text-slate-300';
        IconComponent = AlertTriangle;
      }

      return (
        <div className={`course-callout-surface mb-6 max-w-[92ch] overflow-hidden rounded-2xl border ${block.compact ? 'course-callout-compact' : ''} ${borderCls} ${bgCls}`}>
          <div className={`flex items-center gap-2 border-b border-navy-500/10 dark:border-white/5 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] ${titleCls}`}>
            <IconComponent size={16} /> {titleText}
          </div>
          <div className={`px-5 ${block.compact ? 'py-3 leading-relaxed' : 'py-4 leading-[1.85]'} text-base text-slate-800 dark:text-slate-200 md:text-[16px] ${textCls}`}>
            {block.compact ? renderText(block.text) : <RenderMultilineText text={block.text} />}
          </div>
        </div>
      );
    }
    case 'table': {
      const warning = blockContainsManualWarning(block);
      const tableText = `${block.headers.join(' ')} ${block.rows.flat().join(' ')}`;
      const isLegalTable = enableLegalStyling && isLegalContent(tableText);
      const isComparisonTable = enableLegalStyling && isRegulationComparison(tableText);

      if (!enableEconomicStyling) {
        const tableLabel = isComparisonTable ? 'Tabel Perbandingan Regulasi' : isLegalTable ? 'Tabel Hukum Pajak' : 'Tabel Materi';
        const isFinancialGlossary = block.headers.length === 4 && block.headers.includes('Nama Finansial');
        // In a layered reading a "Sumber" column is a source reference: small and muted.
        const mutedColumns = block.headers.map((header) => layered && /^sumber$/i.test(header.trim()));
        // Column alignment from the source table (e.g. right-aligned amounts); desktop table only, phone cards ignore it.
        const alignCls = (c: number) => (block.align?.[c] === 'right' ? ' text-right tabular-nums' : block.align?.[c] === 'center' ? ' text-center' : '');
        // Layered pages box a table once: inside a pendalaman or self-check it is a plain table between two rules.
        const flatTable = layered && insideBox;
        const tableCard = (
          <div className={flatTable ? 'course-table-flat overflow-hidden border-y border-gray-200 dark:border-gray-700/70' : 'course-table-card mb-7 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-white dark:bg-gray-900/90 shadow-sm'}>
            <div className={`${flatTable ? 'hidden' : 'flex'} items-center justify-between border-b border-gray-200/80 dark:border-gray-700/60 px-5 py-3.5 bg-gray-50/70 dark:bg-gray-800/50`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-400">
                <Table2 size={15} /> {tableLabel}
              </div>
              <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 md:hidden">{isFinancialGlossary ? 'Kartu istilah' : 'Geser tabel bila perlu →'}</span>
            </div>
            {isFinancialGlossary && (
              <div className="grid gap-3 p-3 md:hidden" aria-label="Kamus istilah keuangan dalam kartu">
                {block.rows.map((row, index) => (
                  <article key={index} className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/60">
                    <div className="min-w-0 text-base font-bold leading-relaxed text-slate-900 dark:text-slate-100">{renderText(row[0])}</div>
                    <div className="mt-1 min-w-0 break-words text-sm font-semibold leading-relaxed text-blue-800 dark:text-blue-200">{renderText(row[1])}</div>
                    <dl className="mt-3 space-y-3 border-t border-slate-200 pt-3 dark:border-slate-700">
                      {row.slice(2).map((cell, cellIndex) => (
                        <div key={cellIndex} className="min-w-0">
                          <dt className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">{block.headers[cellIndex + 2]}</dt>
                          <dd className="mt-1 min-w-0 break-words text-sm leading-relaxed text-slate-800 dark:text-slate-200"><RenderMultilineText text={cell} /></dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>
            )}
            <div 
              className={`akbi-table-scroll w-full overflow-x-auto ${isFinancialGlossary ? 'hidden md:block' : ''}`}
              role={enableEditorialReading ? 'region' : undefined} 
              aria-label={enableEditorialReading ? `${tableLabel}. Geser horizontal untuk membaca seluruh kolom.` : undefined} 
              tabIndex={enableEditorialReading ? 0 : undefined}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              <table className={`w-full border-collapse text-left ${isFinancialGlossary ? 'min-w-[840px]' : ''}`}>
                <thead>
                  <tr className="course-table-head">
                    {block.headers.map((h, i) => (
                      <th
                        key={i}
                        className={`sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700 bg-gray-50/95 dark:bg-gray-900/95 px-4 py-3.5 text-xs md:text-[13px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300${alignCls(i)}`}
                      >
                        {layered ? <InlineMarkdown text={h} /> : h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60">
                  {block.rows.map((row, r) => (
                    <tr key={r} className={r % 2 ? 'bg-gray-50/70 dark:bg-gray-800/40 transition-colors' : 'bg-white dark:bg-gray-900/70 transition-colors'}>
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className={(mutedColumns[c]
                            ? 'px-4 py-3.5 align-top text-xs leading-relaxed text-gray-500 dark:text-gray-400'
                            : 'px-4 py-3.5 align-top text-sm md:text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 first:font-semibold first:text-slate-900 dark:first:text-white') + alignCls(c)}
                        >
                          <RenderMultilineText text={layered ? literalLeadingMarker(cell) : cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {(block.caption || warning) && (
              <div className={`border-t border-navy-500/20 dark:border-navy-500/60 px-4 py-3 text-xs leading-relaxed ${warning ? 'bg-amber-50 dark:bg-amber-400/10 text-amber-900 dark:text-amber-200 font-medium' : 'text-slate-600 dark:text-slate-500'}`}>
                {warning && <span className="mr-1 font-black">⚠</span>}
                {block.caption ? renderText(block.caption) : '[Perlu pemeriksaan manual]'}
              </div>
            )}
          </div>
        );
        // The shared reading frame (layered readings, PJK301) stacks every table below 1024px.
        if (!sharedFrame && !(layered && block.stackOnMobile)) return tableCard;
        return (
          <>
            <div className="hidden lg:block">{tableCard}</div>
            <StackedTable headers={block.headers} rows={block.rows} label={tableLabel} caption={block.caption} warning={warning} />
          </>
        );
      }

      const economicComparison = isEconomicComparison(`${block.caption ?? ''} ${tableText}`);
      const tableLabel = economicComparison ? 'Tabel Perbandingan Ekonomi' : 'Tabel Data & Konsep Ekonomi';
      if (warning) {
        return (
          <div className="course-manual-warning mb-7 rounded-2xl border border-amber-500/40 bg-amber-50 dark:bg-amber-500/10 p-5 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-amber-600 dark:text-amber-400">
              <AlertTriangle size={15} /> [Perlu Pemeriksaan Manual]
            </div>
            <div className="text-amber-950 dark:text-amber-100 font-medium">{renderText(block.caption ?? '[Perlu pemeriksaan manual]')}</div>
          </div>
        );
      }
      return (
        <div className="course-table-card course-economic-table mb-7 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700/70 bg-white dark:bg-gray-900/90 shadow-sm">
          <div className="course-solid-head flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/80 dark:border-gray-700/60 px-5 py-3.5 bg-gray-50/70 dark:bg-gray-800/50">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-400">
              <Table2 size={15} /> {tableLabel}
            </div>
            <div className="text-right text-xs font-medium text-slate-600 dark:text-slate-400">
              {block.rows.length} baris · {block.headers.length} kolom
              <span className="block text-[11px] md:hidden">geser untuk kolom lain →</span>
            </div>
          </div>
          <div 
            className="akbi-table-scroll w-full overflow-x-auto" 
            role="region" 
            aria-label={`${tableLabel}. Geser horizontal untuk membaca seluruh kolom.`} 
            tabIndex={0}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">{block.caption ?? tableLabel}</caption>
              <thead>
                <tr className="course-table-head">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700 bg-gray-50/95 dark:bg-gray-900/95 px-4 py-3.5 text-xs md:text-[13px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60">
                {block.rows.map((row, r) => (
                  <tr key={r} className={r % 2 ? 'bg-gray-50/70 dark:bg-gray-800/40 transition-colors' : 'bg-white dark:bg-gray-900/70 transition-colors'}>
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className="px-4 py-3.5 align-top text-sm md:text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 first:font-semibold first:text-slate-900 dark:first:text-white"
                      >
                        <RenderMultilineText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {(block.caption || warning) && (
            <div className={`border-t border-navy-500/20 dark:border-navy-500/60 px-4 py-3 text-xs leading-relaxed ${warning ? 'bg-amber-50 dark:bg-amber-400/10 text-amber-900 dark:text-amber-200 font-medium' : 'text-slate-600 dark:text-slate-500'}`}>
              {warning && <span className="mr-1 font-black">⚠</span>}
              {block.caption ? renderText(block.caption) : '[Perlu pemeriksaan manual]'}
            </div>
          )}
        </div>
      );
    }
    case 'journal':
      return (
        <div className="course-journal-card mb-7 overflow-hidden rounded-2xl border border-emerald-500/30 dark:border-emerald-500/25">
          <div className="flex items-center justify-between gap-3 border-b border-emerald-500/20 dark:border-emerald-500/15 bg-emerald-500/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-800 dark:text-emerald-300">
            <span className="flex items-center gap-2"><FileText size={15} /> Jurnal Akuntansi</span>
            {enableEditorialReading && <span className="reading-scroll-cue md:hidden">Geser bila perlu</span>}
          </div>
          <div 
            className="akbi-table-scroll w-full overflow-x-auto" 
            role={enableEditorialReading ? 'region' : undefined} 
            aria-label={enableEditorialReading ? 'Jurnal akuntansi. Geser horizontal untuk membaca seluruh kolom.' : undefined} 
            tabIndex={enableEditorialReading ? 0 : undefined}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-navy-800/70 text-[11px] uppercase tracking-wider text-slate-700 dark:text-slate-400">
                  <th className="px-4 py-3 text-left">Akun</th>
                  <th className="w-36 px-4 py-3 text-right">Debit</th>
                  <th className="w-36 px-4 py-3 text-right">Kredit</th>
                </tr>
              </thead>
              <tbody>
                {block.lines.map((l, i) => (
                  <tr key={i} className="border-t border-navy-500/15 dark:border-navy-500/35">
                    <td className={`px-4 py-2.5 text-slate-800 dark:text-slate-300 ${l.isCredit ? 'pl-10 font-medium text-slate-600 dark:text-slate-400' : 'font-semibold text-slate-900 dark:text-slate-100'}`}>
                      {l.account}
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono font-semibold text-emerald-700 dark:text-emerald-300">{l.debit ?? ''}</td>
                    <td className="px-4 py-2.5 text-right font-mono font-semibold text-gold-700 dark:text-gold">{l.credit ?? ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <div className="border-t border-emerald-500/10 dark:border-emerald-500/15 px-4 py-3 text-xs italic leading-relaxed text-slate-600 dark:text-slate-500">{renderText(block.caption)}</div>
          )}
        </div>
      );
    case 'formula': {
      const matrix = isMatrixContent(block.text);
      const warning = hasManualWarning(block.text) || hasManualWarning(block.note);
      const economicFormula = enableEconomicStyling ? splitEconomicFormula(block.text) : { body: block.text };

      if (matrix) {
        return (
          <div className="course-matrix-card mb-6 overflow-hidden rounded-2xl border border-navy-500/15 dark:border-transparent">
            <div className="flex items-center justify-between gap-3 border-b border-navy-500/20 dark:border-navy-500/60 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2"><Table2 size={15} /> Format Teks Terstruktur</span>
              {enableEditorialReading && <span className="reading-scroll-cue md:hidden">Geser bila perlu</span>}
            </div>
            <div 
              className="akbi-table-scroll w-full overflow-x-auto px-5 py-4" 
              role={enableEditorialReading ? 'region' : undefined} 
              aria-label={enableEditorialReading ? 'Format teks terstruktur. Geser horizontal bila diperlukan.' : undefined} 
              tabIndex={enableEditorialReading ? 0 : undefined}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              <pre className="w-full whitespace-pre-wrap font-sans text-xs leading-[1.75] tracking-wide text-slate-800 dark:text-slate-300 md:text-sm">{block.text}</pre>
            </div>
            {block.note && <div className="border-t border-navy-500/20 dark:border-navy-500/60 px-5 py-3 text-xs text-slate-600 dark:text-slate-400">{renderText(block.note)}</div>}
          </div>
        );
      }

      const surfaceBorderCls = enableLegalStyling
        ? 'border-indigo-500/40 dark:border-indigo-500/35 bg-indigo-500/10 dark:bg-indigo-500/5'
        : warning
        ? 'border-amber-400/50 bg-amber-400/10'
        : 'border-gold-500/40 dark:border-gold/35 bg-gold-500/10 dark:bg-gold/10';

      const headerBorderCls = enableLegalStyling
        ? 'border-indigo-500/20 dark:border-indigo-500/15 text-indigo-800 dark:text-indigo-300'
        : warning
        ? 'border-amber-400/20 text-amber-800 dark:text-amber-200'
        : 'border-gold-500/20 dark:border-gold/15 text-gold-700 dark:text-gold';

      const formulaTitle = economicFormula.title
        ? `Formula Ekonomi · ${economicFormula.title}`
        : enableLegalStyling
        ? 'Rumus Perpajakan'
        : 'Rumus / Formula';

      const noteBorderCls = enableLegalStyling
        ? 'border-indigo-500/20 dark:border-indigo-500/15 text-slate-700 dark:text-slate-300'
        : warning
        ? 'border-amber-400/20 text-amber-800 dark:text-amber-200'
        : 'border-gold-500/20 dark:border-gold/15 text-slate-700 dark:text-slate-400';

      return (
        <div className={`course-formula-surface mb-6 max-w-[92ch] overflow-hidden rounded-2xl border ${surfaceBorderCls}`}>
          <div className={`flex items-center justify-between gap-3 border-b px-5 py-3 text-xs font-black uppercase tracking-[0.18em] ${headerBorderCls}`}>
            <span className="flex items-center gap-2">
              {warning ? <AlertTriangle size={15} /> : <Sigma size={15} />} {formulaTitle}
            </span>
            {enableEditorialReading && <span className="reading-scroll-cue md:hidden">Geser bila perlu</span>}
          </div>
          <div 
            className="akbi-table-scroll overflow-x-auto px-5 py-4" 
            role={enableEditorialReading ? 'region' : undefined} 
            aria-label={enableEditorialReading ? 'Rumus atau formula. Geser horizontal bila diperlukan.' : undefined} 
            tabIndex={enableEditorialReading ? 0 : undefined}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            {(() => {
              const body = economicFormula.body;
              const isLatex = body.includes('\\') || body.includes('$');
              if (isLatex) {
                let mathText = body;
                if (!body.includes('$')) {
                  const rawLines = body.trim().split(/\r?\n+/).map(l => l.trim()).filter(Boolean);
                  if (rawLines.length > 1 && !body.includes('\\begin{')) {
                    mathText = `$$\n\\begin{aligned}\n${rawLines.map(l => l.startsWith('&') ? l : `& ${l}`).join(' \\\\\n')}\n\\end{aligned}\n$$`;
                  } else {
                    mathText = `$$\n${body}\n$$`;
                  }
                }
                return (
                  <div className="text-base md:text-lg text-slate-900 dark:text-slate-100 overflow-x-auto py-3 px-1.5">
                    {renderText(mathText)}
                  </div>
                );
              }
              return (
                <pre className="whitespace-pre-wrap font-mono text-sm leading-[1.75] tracking-wide text-slate-900 dark:text-slate-200" aria-label={economicFormula.title ? `Rumus ${economicFormula.title}` : undefined}>{body}</pre>
              );
            })()}
          </div>
          {block.note && <div className={`border-t px-5 py-3 text-xs leading-relaxed ${noteBorderCls}`}>{renderText(block.note)}</div>}
        </div>
      );
    }
    case 'code':
      return (
        <figure className="course-code-card mb-6 max-w-full overflow-hidden rounded-2xl border border-slate-300 dark:border-navy-500/60 bg-slate-50 dark:bg-navy-950">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-navy-500/60 px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">
            <span>{block.language ?? 'Kode'}</span>
            {enableEditorialReading && <span className="reading-scroll-cue md:hidden">Geser bila perlu</span>}
          </div>
          <div
            className="akbi-table-scroll w-full overflow-x-auto"
            role="region"
            aria-label={`${block.language ?? 'Kode'}. Geser horizontal bila diperlukan.`}
            tabIndex={0}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <pre className="m-0 w-max min-w-full whitespace-pre px-4 py-3 font-mono text-[13px] leading-[1.7] text-slate-900 dark:text-slate-200"><code>{block.text}</code></pre>
          </div>
          {block.caption && <figcaption className="border-t border-slate-200 dark:border-navy-500/60 px-4 py-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{renderText(block.caption)}</figcaption>}
        </figure>
      );
    case 'figure':
      if (block.overview) {
        const overview = block.overview;
        const accents = [
          'border-sky-300 dark:border-sky-700 bg-sky-50/70 dark:bg-sky-950/20',
          'border-emerald-300 dark:border-emerald-700 bg-emerald-50/70 dark:bg-emerald-950/20',
          'border-amber-300 dark:border-amber-700 bg-amber-50/70 dark:bg-amber-950/20',
          'border-violet-300 dark:border-violet-700 bg-violet-50/70 dark:bg-violet-950/20',
        ];
        return (
          <figure className="course-figure-surface mb-7 overflow-hidden rounded-2xl border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 px-5 py-4 dark:border-slate-700">
              <h3 className="max-w-[65ch] text-lg font-bold leading-snug text-slate-900 dark:text-slate-100">{overview.heading}</h3>
              {overview.badge && <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-200">{overview.badge}</span>}
            </div>
            <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 lg:p-5">
              {overview.cards.map((card, index) => (
                <section key={index} className={`min-w-0 rounded-xl border p-4 ${accents[index % accents.length]}`}>
                  <h4 className="text-base font-bold leading-snug text-slate-900 dark:text-slate-100">{card.title}</h4>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">{card.subtitle}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-800 marker:text-slate-600 dark:text-slate-200 dark:marker:text-slate-400 sm:text-base">
                    {card.items.map((item, itemIndex) => <li key={itemIndex} className="break-words">{item}</li>)}
                  </ul>
                  <p className="mt-4 border-t border-slate-300/70 pt-3 text-sm font-semibold leading-relaxed text-slate-700 dark:border-slate-600 dark:text-slate-300">{card.takeaway}</p>
                </section>
              ))}
            </div>
            {overview.footer && <p className="border-t border-slate-200 px-5 py-3 text-sm leading-relaxed text-slate-700 dark:border-slate-700 dark:text-slate-300">{overview.footer}</p>}
            {block.caption && <figcaption className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-sm leading-relaxed text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">{renderText(block.caption)}</figcaption>}
          </figure>
        );
      }
      if (!enableEconomicStyling) {
        return (
          <figure className="course-figure-surface mb-7 overflow-hidden rounded-2xl border border-navy-500/10 dark:border-navy-500/20">
            {block.title && (
              <figcaption className="flex items-center gap-2 border-b border-navy-500/20 dark:border-navy-500/60 bg-slate-50 dark:bg-navy-900/40 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-gold-700 dark:text-gold">
                <Sparkles size={14} /> {block.title}
              </figcaption>
            )}
            <div className="p-4 md:p-5">
              {block.svg ? (() => {
                const hasDiagramClass = block.svg.includes('course-diagram-svg');
                const isDetailedDiagram = /course-diagram-(sml|bpmn|agency)/.test(block.svg);
                const isSmlDiagram = block.svg.includes('course-diagram-sml');
                const isAgencyDiagram = block.svg.includes('course-diagram-agency');
                const hasMobileOverview = isSmlDiagram || isAgencyDiagram || Boolean(block.mobileFlow);
                const processedSvg = hasDiagramClass
                  ? block.svg
                  : block.svg.replace('<svg', '<svg class="course-diagram-svg"');
                const diagramWidth = block.svg.includes('course-diagram-bpmn') ? 'min-w-[1200px] xl:min-w-0' : isDetailedDiagram ? 'min-w-[900px] xl:min-w-0' : 'min-w-[620px] sm:min-w-0';
                return (
                  <>
                    {isSmlDiagram && <SmlMobileOverview />}
                    {isAgencyDiagram && <AgencyMobileOverview />}
                    {block.mobileFlow && <MobileParticipantFlow flow={block.mobileFlow} />}
                    <div
                      className={`course-solid-surface akbi-table-scroll overflow-x-auto rounded-xl border border-gray-200/80 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900/80 md:p-4 ${hasMobileOverview ? 'hidden md:block' : ''}`}
                      role="img"
                      aria-label={block.altText ?? block.title ?? 'Visual materi'}
                      tabIndex={isDetailedDiagram ? 0 : undefined}
                    >
                      <div className={diagramWidth} dangerouslySetInnerHTML={{ __html: processedSvg }} />
                    </div>
                    {hasMobileOverview && (
                      <details className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 md:hidden">
                        <summary className="cursor-pointer text-sm font-bold text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 dark:text-blue-200">Perbesar diagram rinci</summary>
                        <p className="my-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">Geser ke samping untuk memeriksa bagian diagram. Ringkasan utuh tersedia di atas.</p>
                        <div className="akbi-table-scroll overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700" role="img" aria-label={block.altText ?? block.title ?? 'Diagram rinci'} tabIndex={0}>
                          <div className={diagramWidth} dangerouslySetInnerHTML={{ __html: processedSvg }} />
                        </div>
                      </details>
                    )}
                  </>
                );
              })() : block.url ? (
                <img src={block.url} alt={block.altText ?? block.title ?? 'Visual materi'} className="w-full h-auto rounded-xl object-contain bg-white dark:bg-navy-800/40" />
              ) : null}
            </div>
            {block.svg && /course-diagram-(sml|bpmn|agency)/.test(block.svg) && <p className="hidden px-5 pb-2 text-xs text-slate-600 dark:text-slate-300 md:block xl:hidden">Geser diagram ke samping untuk melihat seluruh alur. Versi teks tersedia di bawah.</p>}
            {(block.transcript || block.transcriptSections) && (
              <section aria-label="Isi diagram dalam teks" className="border-t border-slate-200 bg-slate-50/70 px-5 py-4 dark:border-slate-700 dark:bg-slate-800/40">
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">Isi diagram dalam teks</h4>
                {block.transcriptSections ? (
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    {block.transcriptSections.map((section, index) => (
                      <div key={index} className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                        <h5 className="font-bold text-slate-900 dark:text-slate-100">{section.title}</h5>
                        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 sm:text-base">
                          {section.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-800 marker:text-slate-600 dark:text-slate-200 dark:marker:text-slate-400 sm:text-base">
                    {block.transcript?.map((line, index) => <li key={index} className="break-words">{line}</li>)}
                  </ul>
                )}
              </section>
            )}
            {block.caption && <div className={`border-t border-navy-500/20 dark:border-navy-500/60 bg-slate-50 dark:bg-navy-900/20 px-5 py-3 text-center italic text-slate-700 dark:text-slate-300 ${block.transcript || block.transcriptSections ? 'text-sm leading-relaxed' : 'text-xs'}`}>{renderText(block.caption)}</div>}
          </figure>
        );
      }

      return (
        <figure className="course-figure-surface course-economic-figure mb-7 overflow-hidden rounded-2xl border border-navy-500/10 dark:border-navy-500/20" aria-labelledby={block.title ? `${blockId}-title` : undefined} aria-describedby={block.caption ? `${blockId}-caption` : undefined}>
          {block.title && (
            <figcaption id={`${blockId}-title`} className="flex flex-wrap items-center justify-between gap-2 border-b border-navy-500/20 dark:border-navy-500/60 bg-slate-50 dark:bg-navy-900/40 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-gold-700 dark:text-gold">
              <span className="flex items-center gap-2"><Sparkles size={14} /> {block.title}</span>
              <span className="text-[10px] font-semibold normal-case tracking-normal text-slate-500 md:hidden">geser grafik bila label terlalu kecil</span>
            </figcaption>
          )}
          <div className="p-3 md:p-5">
            {block.svg ? (
              <div
                className="course-solid-surface rounded-xl p-2 md:p-3 bg-white dark:bg-navy-800/40"
                role="img"
                aria-label={block.altText ?? block.title ?? 'Visual materi'}
                tabIndex={0}
                dangerouslySetInnerHTML={{ __html: block.svg }}
              />
            ) : block.url ? (
              <img src={block.url} alt={block.altText ?? block.title ?? 'Visual materi'} className="w-full h-auto rounded-xl object-contain bg-white dark:bg-navy-800/40" />
            ) : null}
          </div>
          {block.caption && <div id={`${blockId}-caption`} className="border-t border-navy-500/20 dark:border-navy-500/60 bg-slate-50 dark:bg-navy-900/20 px-5 py-3 text-center text-xs italic leading-relaxed text-slate-600 dark:text-slate-500">{renderText(block.caption)}</div>}
        </figure>
      );
    case 'solution-reveal':
      return <SolutionRevealCard block={block} isSimulation={isSimulation} enableLegalStyling={enableLegalStyling} enableEconomicStyling={enableEconomicStyling} enableEditorialReading={enableEditorialReading} />;
    case 'example':
      return (
        <div className="course-example-surface mb-8 overflow-hidden rounded-[1.7rem] border border-gold-500/30 dark:border-gold/25">
          <div className="flex items-center gap-2 border-b border-gold-500/20 dark:border-gold/15 bg-gold-500/10 dark:bg-gold/10 px-5 py-3 text-sm font-black text-gold-800 dark:text-gold">
            <BookOpen size={17} /> Contoh Kasus — {block.title}
          </div>
          <div className="p-4 md:p-6 bg-slate-50/50 dark:bg-transparent">
            {block.blocks.map((b, i) => (
              <CourseBlockCard key={i} block={b} isSimulation={isSimulation} enableLegalStyling={enableLegalStyling} enableEconomicStyling={enableEconomicStyling} enableEditorialReading={enableEditorialReading} />
            ))}
          </div>
        </div>
      );
    case 'statement':
      return <PracticeReportCard kind="statement" spec={block.spec} />;
    case 'builder':
      return <PracticeReportCard kind="builder" spec={block.spec} instructions={block.instructions} />;
    case 'interactive-match':
      return <InteractiveMatchBuilder spec={block.spec} />;
    case 'table-fill':
      return <TableFillBuilder spec={block.spec} />;
    case 'journal-builder':
      return <JournalBuilder spec={block.spec} />;
    case 't-account-builder':
      return <TAccountBuilder spec={block.spec} />;
    case 'illustration':
      return (
        <figure className="course-figure-surface mb-7 overflow-hidden rounded-2xl border border-navy-500/10 dark:border-navy-500/20">
          <div className="p-3 md:p-5">
            <EconDiagram type={block.type} />
          </div>
          {block.caption && <div className="border-t border-navy-500/20 dark:border-navy-500/60 bg-slate-50 dark:bg-navy-900/20 px-5 py-3 text-center text-xs italic leading-relaxed text-slate-600 dark:text-slate-500">{renderText(block.caption)}</div>}
        </figure>
      );
    case 'math-example':
      return <MathExampleBox block={block} isSimulation={isSimulation} enableLegalStyling={enableLegalStyling} enableEconomicStyling={enableEconomicStyling} enableEditorialReading={enableEditorialReading} />;
    case 'chart-guide':
      return <ChartGuideBox block={block} />;
    case 'practice-box':
      return <PracticeBox block={block} isSimulation={isSimulation} enableLegalStyling={enableLegalStyling} enableEconomicStyling={enableEconomicStyling} enableEditorialReading={enableEditorialReading} />;
    default:
      return null;
  }
}
