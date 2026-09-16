import { useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  ArrowLeft, ChevronLeft, ChevronRight, Check,
  Info, Lightbulb, AlertTriangle, KeyRound, BookOpen, ListChecks, PenTool, ClipboardCheck, Sigma, Table2, ScrollText,
} from 'lucide-react';
import { loadCourseContent, type LoadedCourseContent } from '../data/courses/courseRegistry';
import { useStudyProgress, materialKey } from '../hooks/useStudyProgress';
import { StatementFull, StatementBuilder } from './StatementBuilder';
import { InteractiveMatchBuilder, JournalBuilder as InteractiveJournalBuilder, TableFillBuilder, TAccountBuilder } from './InteractivePracticeBuilders';
import type { Course, ContentBlock, CalloutVariant } from '../types';
import TTSPlayer from './TTSPlayer';
import CourseHeader from './course/CourseHeader';
import ReadingOutline, { buildReadingOutline, getReadingBlockId } from './course/ReadingOutline';

interface ReadingViewProps {
  course: Course;
  tm: number;
  onBack: () => void;
  onSelectTm: (tm: number) => void;
}

import { renderText } from './course/MarkdownContent';

const CALLOUT_STYLE: Record<CalloutVariant, { icon: ReactNode; cls: string; label: string }> = {
  info: { icon: <Info size={18} className="text-blue-600 dark:text-blue-400" />, cls: 'border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20', label: 'Info' },
  tip: { icon: <Lightbulb size={18} className="text-emerald-600 dark:text-emerald-400" />, cls: 'border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20', label: 'Tips' },
  warning: { icon: <AlertTriangle size={18} className="text-amber-600 dark:text-amber-400" />, cls: 'border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20', label: 'Perhatian' },
  key: { icon: <KeyRound size={18} className="text-indigo-600 dark:text-indigo-400" />, cls: 'border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20', label: 'Konsep Kunci' },
};

type BlockTone = 'theory' | 'example' | 'practice' | 'trap' | 'formula' | 'table' | 'journal' | 'section';

const TONE_STYLE: Record<BlockTone, { label: string; icon: ReactNode; cls: string; accent: string }> = {
  theory: { label: 'Teori', icon: <BookOpen size={16} />, cls: 'text-blue-700 dark:text-blue-400', accent: 'border-blue-500' },
  example: { label: 'Contoh', icon: <PenTool size={16} />, cls: 'text-emerald-700 dark:text-emerald-400', accent: 'border-emerald-500' },
  practice: { label: 'Latihan', icon: <ClipboardCheck size={16} />, cls: 'text-violet-700 dark:text-violet-400', accent: 'border-violet-500' },
  trap: { label: 'Trap', icon: <AlertTriangle size={16} />, cls: 'text-amber-700 dark:text-amber-400', accent: 'border-amber-500' },
  formula: { label: 'Formula', icon: <Sigma size={16} />, cls: 'text-indigo-700 dark:text-indigo-400', accent: 'border-indigo-500' },
  table: { label: 'Tabel', icon: <Table2 size={16} />, cls: 'text-cyan-700 dark:text-cyan-400', accent: 'border-cyan-500' },
  journal: { label: 'Jurnal', icon: <ScrollText size={16} />, cls: 'text-rose-700 dark:text-rose-400', accent: 'border-rose-500' },
  section: { label: 'Bagian', icon: <ListChecks size={16} />, cls: 'text-gray-700 dark:text-gray-400', accent: 'border-gray-500' },
};

function inferTone(text: string): BlockTone {
  const t = text.toLowerCase();
  if (/(jebakan|trap|warning|hati-hati|sering salah|waspada)/i.test(t)) return 'trap';
  if (/(latihan|praktik|drill|cek cepat|uji diri|mandiri|kerjakan)/i.test(t)) return 'practice';
  if (/(contoh|ilustrasi|mini case|case singkat)/i.test(t)) return 'example';
  if (/(formula|rumus|perhitungan|quick audit|cheat sheet)/i.test(t)) return 'formula';
  if (/(teori|konsep|inti|pengantar|peta belajar|tujuan|kerangka)/i.test(t)) return 'theory';
  return 'section';
}

function SectionBadge({ tone }: { tone: BlockTone }) {
  const style = TONE_STYLE[tone];
  return (
    <span className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs ${style.cls}`}>
      {style.icon} {style.label}
    </span>
  );
}

function SolutionRevealBlock({ block }: { block: Extract<ContentBlock, { kind: 'solution-reveal' }> }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-gray-800">
      <div className="p-4 flex flex-col items-start">
        <h3 className="font-semibold text-gray-900 dark:text-white">{block.title}</h3>
        {block.prompt && <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{renderText(block.prompt)}</div>}
        <button type="button" onClick={() => setIsOpen((open) => !open)} className="mt-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
          {isOpen ? 'Sembunyikan pembahasan' : 'Tampilkan pembahasan'}
        </button>
      </div>
      {isOpen && <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/50">{block.blocks.map((nested, index) => <Block key={index} block={nested} />)}</div>}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case 'h2': {
      const tone = inferTone(block.text);
      return (
        <section className="mt-12 mb-6 scroll-mt-24">
          <div className="mb-2"><SectionBadge tone={tone} /></div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-2 border-b border-gray-200 dark:border-gray-800">{block.text}</h2>
        </section>
      );
    }
    case 'h3': {
      const tone = inferTone(block.text);
      return (
        <div className="mt-8 mb-4">
          <h3 className={`text-xl font-semibold text-gray-900 dark:text-white pl-3 border-l-4 ${TONE_STYLE[tone].accent}`}>{block.text}</h3>
        </div>
      );
    }
    case 'p':
      return <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-[15px]">{renderText(block.text)}</div>;
    case 'ul':
      return (
        <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {block.items.map((it, i) => <li key={i}>{renderText(it)}</li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol className="list-decimal pl-6 space-y-2 mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {block.items.map((it, i) => <li key={i}>{renderText(it)}</li>)}
        </ol>
      );
    case 'callout': {
      const s = CALLOUT_STYLE[block.variant];
      return (
        <div className={`p-4 my-6 rounded-r-lg ${s.cls}`}>
          <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100 mb-2">{s.icon} {block.title ?? s.label}</div>
          <div className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">{renderText(block.text)}</div>
        </div>
      );
    }
    case 'table':
      return (
        <div className="my-8 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              <tr>
                {block.headers.map((h, i) => <th key={i} className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  {row.map((cell, c) => <td key={c} className="px-4 py-3 align-top">{renderText(cell)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && <div className="mt-2 text-xs text-gray-500 italic">{renderText(block.caption)}</div>}
        </div>
      );
    case 'journal':
      return (
        <div className="my-8 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                <th className="px-4 py-3 text-left">Akun</th>
                <th className="px-4 py-3 text-right w-32">Debit</th>
                <th className="px-4 py-3 text-right w-32">Kredit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-800 dark:text-gray-200">
              {block.lines.map((l, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className={`px-4 py-2 ${l.isCredit ? 'pl-10' : ''}`}>{l.account}</td>
                  <td className="px-4 py-2 text-right font-mono text-gray-600 dark:text-gray-400">{l.debit ?? ''}</td>
                  <td className="px-4 py-2 text-right font-mono text-gray-600 dark:text-gray-400">{l.credit ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 italic">{renderText(block.caption)}</div>}
        </div>
      );
    case 'formula': {
      const isLatex = block.text.includes('\\') || block.text.includes('$');
      let mathContent = block.text;
      if (isLatex && !block.text.includes('$')) {
        const rawLines = block.text.trim().split(/\r?\n+/).map(l => l.trim()).filter(Boolean);
        if (rawLines.length > 1 && !block.text.includes('\\begin{')) {
          mathContent = `$$\n\\begin{aligned}\n${rawLines.map(l => l.startsWith('&') ? l : `& ${l}`).join(' \\\\\n')}\n\\end{aligned}\n$$`;
        } else {
          mathContent = `$$\n${block.text}\n$$`;
        }
      }
      return (
        <div className="my-6 p-4 rounded-xl bg-amber-50/70 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-800 border-l-4 border-l-amber-500 dark:border-l-amber-400 shadow-sm transition-colors">
          <div className="text-xs uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-1.5">
            <span>∑</span> RUMUS / FORMULA
          </div>
          <div className="text-base text-slate-900 dark:text-slate-100 overflow-x-auto py-1 font-medium">
            {renderText(mathContent)}
          </div>
          {block.note && <div className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 pt-2 border-t border-amber-200/60 dark:border-slate-800/80">{renderText(block.note)}</div>}
        </div>
      );
    }
    case 'code':
      return (
        <figure className="my-6 max-w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          {block.language && <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{block.language}</div>}
          <div className="overflow-x-auto">
            <pre className="m-0 w-max min-w-full whitespace-pre px-4 py-3 font-mono text-sm text-gray-800 dark:text-gray-200"><code>{block.text}</code></pre>
          </div>
          {block.caption && <figcaption className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 italic">{renderText(block.caption)}</figcaption>}
        </figure>
      );
    case 'figure':
      return (
        <figure className="my-8">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex justify-center">
            {block.svg ? (
              <div dangerouslySetInnerHTML={{ __html: block.svg }} />
            ) : block.url ? (
              <img src={block.url} alt={block.altText ?? block.title ?? 'Visual materi'} className="w-full h-auto rounded-xl object-contain bg-white dark:bg-navy-800/40" />
            ) : null}
          </div>
          {(block.title || block.caption) && (
            <figcaption className="mt-3 text-center">
              {block.title && <span className="block text-sm font-semibold text-gray-700 dark:text-gray-300">{block.title}</span>}
              {block.caption && <span className="block text-sm text-gray-500 italic mt-1">{renderText(block.caption)}</span>}
            </figcaption>
          )}
        </figure>
      );
    case 'example':
      return (
        <div className="my-8 pl-4 border-l-4 border-emerald-500">
          <div className="font-semibold text-emerald-700 dark:text-emerald-400 mb-3">{block.title}</div>
          <div>{block.blocks.map((b, i) => <Block key={i} block={b} />)}</div>
        </div>
      );
    case 'solution-reveal':
      return <div className="my-8"><SolutionRevealBlock block={block} /></div>;
    case 'statement':
      return <div className="my-8"><StatementFull spec={block.spec} /></div>;
    case 'builder':
      return <div className="my-8"><StatementBuilder spec={block.spec} instructions={block.instructions} /></div>;
    case 'interactive-match':
      return <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800"><InteractiveMatchBuilder spec={block.spec} /></div>;
    case 'table-fill':
      return <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800"><TableFillBuilder spec={block.spec} /></div>;
    case 'journal-builder':
      return <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800"><InteractiveJournalBuilder spec={block.spec} /></div>;
    case 't-account-builder':
      return <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800"><TAccountBuilder spec={block.spec} /></div>;
    default:
      return null;
  }
}

export default function ReadingView({ course, tm, onBack, onSelectTm }: ReadingViewProps) {
  const [courseContent, setCourseContent] = useState<LoadedCourseContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;
    setIsLoading(true);
    loadCourseContent(course.code).then((loaded) => {
      if (!isActive) return;
      setCourseContent(loaded);
      setIsLoading(false);
    }).catch(() => {
      if (isActive) setIsLoading(false);
    });
    return () => { isActive = false; };
  }, [course.code]);

  const reading = courseContent?.readings[tm];
  const outlineItems = useMemo(() => reading ? buildReadingOutline(reading.blocks) : [], [reading]);
  const tms = useMemo(() => Object.keys(courseContent?.readings ?? {}).map(Number).sort((a, b) => a - b), [courseContent]);
  const idx = tms.indexOf(tm);
  const prevTm = idx > 0 ? tms[idx - 1] : null;
  const nextTm = idx >= 0 && idx < tms.length - 1 ? tms[idx + 1] : null;

  const { isDone, toggle } = useStudyProgress();
  const key = materialKey(course.code, tm);
  const done = isDone(key);

  useEffect(() => {
    document.body.classList.add('reading-mode-active');
    return () => document.body.classList.remove('reading-mode-active');
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [tm]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable) {
        return;
      }
      
      if (e.key === 'ArrowLeft' && prevTm) {
        e.preventDefault();
        onSelectTm(prevTm);
      } else if (e.key === 'ArrowRight' && nextTm) {
        e.preventDefault();
        onSelectTm(nextTm);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevTm, nextTm, onSelectTm]);

  if (isLoading) {
    return <div className="py-28 text-center text-sm font-semibold text-gray-500">Memuat materi…</div>;
  }

  if (!reading) {
    return (
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <button onClick={onBack} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-6 text-sm font-medium">
          <ArrowLeft size={16} /> Kembali
        </button>
        <p className="text-gray-500">Rangkuman untuk TM {tm} belum tersedia.</p>
      </div>
    );
  }

  return (
    <div className="-mt-16 mx-auto max-w-6xl px-4 md:px-8">
      <div className="reading-layout grid min-w-0 gap-8 lg:grid-cols-[minmax(0,46rem)_14rem] lg:justify-center xl:gap-10">
        <article className="min-w-0 pb-6">
          <CourseHeader courseName={course.name} reading={reading} onBack={onBack} />

          <div className="mb-6"><TTSPlayer title={reading.title} intro={reading.intro} blocks={reading.blocks} /></div>
          <ReadingOutline items={outlineItems} variant="mobile" />

          <div className="reading-document min-w-0">
            {reading.blocks.map((block: ContentBlock, index: number) => (
              <div key={index} id={getReadingBlockId(block, index)} className="reading-block-anchor min-w-0 scroll-mt-24">
                <Block block={block} />
              </div>
            ))}
          </div>

          <footer className="reading-completion mt-14 border-t border-gray-200 pt-7 dark:border-gray-800 md:mt-16 md:pt-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Selesai membaca?</p>
            <h2 className="mt-1.5 text-lg font-bold text-gray-900 dark:text-white">Catat progres, lalu lanjutkan saat siap.</h2>
            <button type="button" onClick={() => toggle(key)} className={`mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border px-4 font-bold transition-colors ${done ? 'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/35 dark:text-emerald-300' : 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500'}`}>
              <Check size={20} strokeWidth={done ? 3 : 2} /> {done ? 'Tandai belum selesai' : 'Tandai sudah dipelajari'}
            </button>

            <nav className="reading-essential-nav mt-5 grid grid-cols-2 gap-3" aria-label="Navigasi materi">
              <button type="button" onClick={() => prevTm && onSelectTm(prevTm)} disabled={!prevTm} className="flex min-h-12 min-w-0 items-center gap-2 rounded-xl border border-gray-200 px-3 text-left text-sm font-semibold text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/30">
                <ChevronLeft size={17} className="shrink-0" /> <span className="truncate">{prevTm ? `TM ${prevTm} sebelumnya` : 'Awal materi'}</span>
              </button>
              <button type="button" onClick={() => nextTm && onSelectTm(nextTm)} disabled={!nextTm} className="flex min-h-12 min-w-0 items-center justify-end gap-2 rounded-xl border border-gray-200 px-3 text-right text-sm font-semibold text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/30">
                <span className="truncate">{nextTm ? `TM ${nextTm} berikutnya` : 'Akhir materi'}</span> <ChevronRight size={17} className="shrink-0" />
              </button>
            </nav>
          </footer>
        </article>

        <ReadingOutline items={outlineItems} variant="desktop" />
      </div>
    </div>
  );
}
