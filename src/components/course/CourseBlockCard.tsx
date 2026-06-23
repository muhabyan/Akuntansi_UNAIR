import { useId, useState } from 'react';
import { AlertTriangle, BookOpen, ChevronDown, ChevronUp, Eye, FileText, GitBranch, Gavel, Lightbulb, Scale, Sigma, Sparkles, Square, Table2 } from 'lucide-react';
import type { ContentBlock } from '../../types';
import { renderText } from './MarkdownContent';
import PracticeReportCard from './PracticeReportCard';
import { InteractiveMatchBuilder, JournalBuilder, TAccountBuilder, TableFillBuilder } from '../InteractivePracticeBuilders';

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
  return <span className="whitespace-pre-line">{renderText(text)}</span>;
}



function ReadableParagraph({ text }: { text: string }) {
  return (
    <p className="mb-4 max-w-[88ch] text-[15px] leading-[1.8] text-slate-800 dark:text-slate-300 md:text-base">
      {renderText(text)}
    </p>
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
        {block.prompt && <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-400">{renderText(block.prompt)}</p>}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 dark:border-emerald-500/30 bg-emerald-500/15 dark:bg-emerald-500/10 px-4 py-2.5 text-xs font-black text-emerald-800 dark:text-emerald-300 transition hover:bg-emerald-500/20"
        >
          {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          {isOpen ? 'Sembunyikan pembahasan' : 'Tampilkan pembahasan langkah demi langkah'}
        </button>
      </div>
      {isOpen && (
        <div className="p-4 md:p-6">
          {block.blocks.map((nestedBlock, index) => (
            <CourseBlockCard key={index} block={nestedBlock} isSimulation={isSimulation} enableLegalStyling={enableLegalStyling} enableEconomicStyling={enableEconomicStyling} enableEditorialReading={enableEditorialReading} />
          ))}
        </div>
      )}
    </section>
  );
}

export default function CourseBlockCard({ block, isSimulation = false, enableLegalStyling = false, enableEconomicStyling = false, enableEditorialReading = false }: CourseBlockCardProps) {
  const blockId = useId();
  switch (block.kind) {
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
        <h3 className="mt-6 mb-2 flex items-center gap-3 border-l-4 border-gold-500 dark:border-gold/70 pl-4 font-display text-lg font-bold leading-snug text-gold-700 dark:text-gold">
          {renderText(block.text)}
        </h3>
      );
    case 'p':
      return <ReadableParagraph text={block.text} />;
    case 'ul': {
      const checklist = enableEconomicStyling && isChecklist(block.items);
      return (
        <ul
          className={checklist
            ? 'mb-6 max-w-[88ch] space-y-2.5 pl-1 md:pl-2'
            : 'mb-6 max-w-[88ch] space-y-2.5 pl-1 md:pl-2'}
          aria-label={checklist ? 'Checklist review UAS' : undefined}
        >
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-[1.8] text-slate-800 dark:text-slate-300">
              {checklist ? (
                <Square aria-hidden="true" className="mt-1 shrink-0 text-emerald-600 dark:text-emerald-300" size={18} />
              ) : (
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500 dark:bg-gold shadow-sm shadow-gold/40" />
              )}
              <span className="whitespace-pre-line">{renderText(checklist ? stripChecklistMarker(it) : it)}</span>
            </li>
          ))}
        </ul>
      );
    }
    case 'ol':
      return (
        <ol className="mb-6 max-w-[88ch] list-decimal space-y-2.5 pl-6 md:pl-8 text-[15px] leading-[1.8] text-slate-800 dark:text-slate-300 marker:font-black marker:text-gold-600 dark:marker:text-gold">
          {block.items.map((it, i) => (
            <li key={i} className="whitespace-pre-line pl-1">{renderText(it)}</li>
          ))}
        </ol>
      );
    case 'callout': {
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
        <div className={`course-callout-surface mb-6 max-w-[92ch] overflow-hidden rounded-2xl border ${borderCls} ${bgCls}`}>
          <div className={`flex items-center gap-2 border-b border-navy-500/10 dark:border-white/5 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] ${titleCls}`}>
            <IconComponent size={16} /> {titleText}
          </div>
          <div className={`px-5 py-4 text-[15px] leading-[1.85] ${textCls}`}>
            <RenderMultilineText text={block.text} />
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
        return (
          <div className="course-table-card mb-7 overflow-hidden rounded-2xl">
            <div className="mb-4 flex items-center justify-between border-b border-navy-500/40 pb-3 px-4 pt-4">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-gold/90">
                <Table2 size={14} /> Tabel Data Khusus
              </div>
            </div>
            <div className="akbi-table-scroll w-full overflow-x-auto" role={enableEditorialReading ? 'region' : undefined} aria-label={enableEditorialReading ? `${tableLabel}. Geser horizontal untuk membaca seluruh kolom.` : undefined} tabIndex={enableEditorialReading ? 0 : undefined}>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="course-table-head">
                    {block.headers.map((h, i) => (
                      <th
                        key={i}
                        className="sticky top-0 z-10 border-b border-navy-500/20 dark:border-navy-500/70 bg-slate-50 dark:bg-navy-950 px-4 py-3 text-left text-[11px] font-black uppercase tracking-wider text-gold-700 dark:text-gold"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, r) => (
                    <tr key={r} className={r % 2 ? 'bg-slate-50 dark:bg-navy-800/25' : 'bg-transparent'}>
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className="border-t border-navy-500/10 dark:border-navy-500/35 px-4 py-3 align-top text-[13.5px] leading-[1.75] text-slate-800 dark:text-slate-300 first:sticky first:left-0 first:z-[1] first:bg-slate-50 dark:first:bg-navy-900 first:font-semibold first:text-slate-900 dark:first:text-slate-200"
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

      const economicComparison = isEconomicComparison(`${block.caption ?? ''} ${tableText}`);
      const tableLabel = economicComparison ? 'Tabel Perbandingan Ekonomi' : 'Tabel Data & Konsep Ekonomi';
      if (warning) {
        return (
          <div className="course-manual-warning mb-7 rounded-2xl border border-amber-500/40 bg-amber-50 dark:bg-amber-500/10 p-5 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-amber-600 dark:text-amber-400">
              <AlertTriangle size={15} /> [Perlu Pemeriksaan Manual]
            </div>
            <p className="text-amber-950 dark:text-amber-100 font-medium">{renderText(block.caption ?? '[Perlu pemeriksaan manual]')}</p>
          </div>
        );
      }
      return (
        <div className="course-table-card course-economic-table mb-7 overflow-hidden rounded-2xl">
          <div className="course-solid-head flex flex-wrap items-center justify-between gap-2 border-b border-navy-500/20 dark:border-navy-500/55 px-4 py-3">
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-gold-700 dark:text-gold">
              <Table2 size={15} /> {tableLabel}
            </div>
            <div className="text-right text-[11px] font-semibold text-slate-600 dark:text-slate-500">
              {block.rows.length} baris · {block.headers.length} kolom
              <span className="block md:hidden">geser untuk kolom lain</span>
            </div>
          </div>
          <div className="akbi-table-scroll w-full overflow-x-auto" role="region" aria-label={`${tableLabel}. Geser horizontal untuk membaca seluruh kolom.`} tabIndex={0}>
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">{block.caption ?? tableLabel}</caption>
              <thead>
                <tr className="course-table-head">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className="sticky top-0 z-10 border-b border-navy-500/20 dark:border-navy-500/70 bg-slate-50 dark:bg-navy-950 px-4 py-3 text-left text-[11px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {block.rows.map((row, r) => (
                  <tr key={r} className="bg-white dark:bg-transparent transition hover:bg-slate-50 dark:hover:bg-navy-800/25">
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className="border-t border-slate-100 dark:border-navy-500/35 px-4 py-4 align-top text-[13.5px] leading-[1.85] text-slate-800 dark:text-slate-300 first:bg-slate-50 dark:first:bg-navy-900 first:text-[13px] first:font-medium first:text-slate-700 dark:first:text-slate-400"
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
          <div className="flex items-center gap-2 border-b border-emerald-500/20 dark:border-emerald-500/15 bg-emerald-500/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-800 dark:text-emerald-300">
            <FileText size={15} /> Jurnal Akuntansi
          </div>
          <div className="akbi-table-scroll w-full overflow-x-auto" role={enableEditorialReading ? 'region' : undefined} aria-label={enableEditorialReading ? 'Jurnal akuntansi. Geser horizontal untuk membaca seluruh kolom.' : undefined} tabIndex={enableEditorialReading ? 0 : undefined}>
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
            <p className="border-t border-emerald-500/10 dark:border-emerald-500/15 px-4 py-3 text-xs italic leading-relaxed text-slate-600 dark:text-slate-500">{renderText(block.caption)}</p>
          )}
        </div>
      );
    case 'formula': {
      const legal = enableLegalStyling && isLegalContent(block.text);
      const matrix = isMatrixContent(block.text);
      const warning = hasManualWarning(block.text) || hasManualWarning(block.note);
      const economicFormula = enableEconomicStyling ? splitEconomicFormula(block.text) : { body: block.text };

      if (legal) {
        return (
          <div className="course-callout-surface mb-6 max-w-[92ch] overflow-hidden rounded-2xl border border-indigo-500/35 bg-indigo-500/10 dark:bg-indigo-500/5">
            <div className="flex items-center gap-2 border-b border-indigo-500/10 dark:border-indigo-500/15 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-indigo-800 dark:text-indigo-300">
              <Scale size={15} /> Dasar Hukum
            </div>
            <div className="whitespace-pre-wrap px-5 py-4 font-sans text-sm leading-[1.85] text-slate-800 dark:text-slate-300">
              {renderText(block.text)}
            </div>
            {block.note && <p className="border-t border-indigo-500/10 dark:border-indigo-500/15 px-5 py-3 text-xs text-slate-600 dark:text-slate-400">{renderText(block.note)}</p>}
          </div>
        );
      }

      if (matrix) {
        return (
          <div className="course-matrix-card mb-6 overflow-hidden rounded-2xl border border-navy-500/15 dark:border-transparent">
            <div className="flex items-center gap-2 border-b border-navy-500/20 dark:border-navy-500/60 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              <Table2 size={15} /> Format Teks Terstruktur
            </div>
            <div className="akbi-table-scroll w-full overflow-x-auto px-5 py-4" role={enableEditorialReading ? 'region' : undefined} aria-label={enableEditorialReading ? 'Format teks terstruktur. Geser horizontal bila diperlukan.' : undefined} tabIndex={enableEditorialReading ? 0 : undefined}>
              <pre className="w-full whitespace-pre-wrap font-sans text-xs leading-[1.75] tracking-wide text-slate-800 dark:text-slate-300 md:text-sm">{block.text}</pre>
            </div>
            {block.note && <p className="border-t border-navy-500/20 dark:border-navy-500/60 px-5 py-3 text-xs text-slate-600 dark:text-slate-400">{renderText(block.note)}</p>}
          </div>
        );
      }

      return (
        <div className={`course-formula-surface mb-6 max-w-[92ch] overflow-hidden rounded-2xl border ${warning ? 'border-amber-400/50 bg-amber-400/10' : 'border-gold-500/40 dark:border-gold/35 bg-gold-500/10 dark:bg-gold/10'}`}>
          <div className={`flex items-center gap-2 border-b px-5 py-3 text-xs font-black uppercase tracking-[0.18em] ${warning ? 'border-amber-400/20 text-amber-800 dark:text-amber-200' : 'border-gold-500/20 dark:border-gold/15 text-gold-700 dark:text-gold'}`}>
            {warning ? <AlertTriangle size={15} /> : <Sigma size={15} />} {economicFormula.title ? `Formula Ekonomi · ${economicFormula.title}` : 'Rumus / Formula'}
          </div>
          <div className="akbi-table-scroll overflow-x-auto px-5 py-4" role={enableEditorialReading ? 'region' : undefined} aria-label={enableEditorialReading ? 'Rumus atau formula. Geser horizontal bila diperlukan.' : undefined} tabIndex={enableEditorialReading ? 0 : undefined}>
            <pre className="whitespace-pre-wrap font-mono text-sm leading-[1.75] tracking-wide text-slate-900 dark:text-slate-200" aria-label={economicFormula.title ? `Rumus ${economicFormula.title}` : undefined}>{economicFormula.body}</pre>
          </div>
          {block.note && <p className={`border-t px-5 py-3 text-xs leading-relaxed ${warning ? 'border-amber-400/20 text-amber-800 dark:text-amber-200' : 'border-gold-500/20 dark:border-gold/15 text-slate-700 dark:text-slate-400'}`}>{renderText(block.note)}</p>}
        </div>
      );
    }
    case 'figure':
      if (!enableEconomicStyling) {
        return (
          <figure className="course-figure-surface mb-7 overflow-hidden rounded-2xl border border-navy-500/10 dark:border-navy-500/20">
            {block.title && (
              <figcaption className="flex items-center gap-2 border-b border-navy-500/20 dark:border-navy-500/60 bg-slate-50 dark:bg-navy-900/40 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-gold-700 dark:text-gold">
                <Sparkles size={14} /> {block.title}
              </figcaption>
            )}
            <div className="p-4 md:p-5">
              <div
                className="course-solid-surface rounded-xl p-3 bg-white dark:bg-navy-800/40"
                role="img"
                aria-label={block.altText ?? block.title ?? 'Visual materi'}
                dangerouslySetInnerHTML={{ __html: block.svg }}
              />
            </div>
            {block.caption && <p className="border-t border-navy-500/20 dark:border-navy-500/60 bg-slate-50 dark:bg-navy-900/20 px-5 py-3 text-center text-xs italic text-slate-600 dark:text-slate-500">{renderText(block.caption)}</p>}
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
            <div
              className="course-solid-surface rounded-xl p-2 md:p-3 bg-white dark:bg-navy-800/40"
              role="img"
              aria-label={block.altText ?? block.title ?? 'Visual materi'}
              tabIndex={0}
              dangerouslySetInnerHTML={{ __html: block.svg }}
            />
          </div>
          {block.caption && <p id={`${blockId}-caption`} className="border-t border-navy-500/20 dark:border-navy-500/60 bg-slate-50 dark:bg-navy-900/20 px-5 py-3 text-center text-xs italic leading-relaxed text-slate-600 dark:text-slate-500">{renderText(block.caption)}</p>}
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
    default:
      return null;
  }
}
