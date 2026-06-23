import { useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  ArrowLeft, ChevronLeft, ChevronRight, Check, Target,
  Info, Lightbulb, AlertTriangle, KeyRound, BookOpen, ListChecks, PenTool, ClipboardCheck, Sigma, Table2, ScrollText,
  Maximize, Minimize
} from 'lucide-react';
import { loadCourseContent, type LoadedCourseContent } from '../data/courses/courseRegistry';
import { useStudyProgress, materialKey } from '../hooks/useStudyProgress';
import { StatementFull, StatementBuilder } from './StatementBuilder';
import { InteractiveMatchBuilder, JournalBuilder as InteractiveJournalBuilder, TableFillBuilder, TAccountBuilder } from './InteractivePracticeBuilders';
import type { Course, ContentBlock, CalloutVariant } from '../types';
import TTSPlayer from './TTSPlayer';

interface ReadingViewProps {
  course: Course;
  tm: number;
  onBack: () => void;
  onSelectTm: (tm: number) => void;
}

function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <strong key={i} className="font-semibold text-gray-900 dark:text-gray-100">{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

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

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 72) || 'bagian-materi';
}

function makeHeadingId(text: string, blockIndex: number) {
  return `${slugify(text)}-${blockIndex + 1}`;
}

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
        {block.prompt && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{renderText(block.prompt)}</p>}
        <button type="button" onClick={() => setIsOpen((open) => !open)} className="mt-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
          {isOpen ? 'Sembunyikan pembahasan' : 'Tampilkan pembahasan'}
        </button>
      </div>
      {isOpen && <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/50">{block.blocks.map((nested, index) => <Block key={index} block={nested} blockIndex={index} />)}</div>}
    </div>
  );
}

function Block({ block, blockIndex }: { block: ContentBlock; blockIndex?: number }) {
  switch (block.kind) {
    case 'h2': {
      const tone = inferTone(block.text);
      return (
        <section id={blockIndex === undefined ? slugify(block.text) : makeHeadingId(block.text, blockIndex)} className="mt-12 mb-6 scroll-mt-24">
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
      return <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-[15px]">{renderText(block.text)}</p>;
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
          <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">{renderText(block.text)}</p>
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
          {block.caption && <p className="mt-2 text-xs text-gray-500 italic">{renderText(block.caption)}</p>}
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
          {block.caption && <p className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 italic">{renderText(block.caption)}</p>}
        </div>
      );
    case 'formula':
      return (
        <div className="my-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border-l-4 border-indigo-500">
          <p className="font-mono text-base text-gray-900 dark:text-gray-100">{block.text}</p>
          {block.note && <p className="text-sm text-gray-500 mt-2">{renderText(block.note)}</p>}
        </div>
      );
    case 'figure':
      return (
        <figure className="my-8">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex justify-center">
            <div dangerouslySetInnerHTML={{ __html: block.svg }} />
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
          <div>{block.blocks.map((b, i) => <Block key={i} block={b} blockIndex={i} />)}</div>
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
  const [zenMode, setZenMode] = useState(false);

  useEffect(() => {
    if (zenMode) {
      document.body.classList.add('zen-mode-active');
    } else {
      document.body.classList.remove('zen-mode-active');
    }
    return () => document.body.classList.remove('zen-mode-active');
  }, [zenMode]);

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
  const tms = useMemo(() => Object.keys(courseContent?.readings ?? {}).map(Number).sort((a, b) => a - b), [courseContent]);
  const idx = tms.indexOf(tm);
  const prevTm = idx > 0 ? tms[idx - 1] : null;
  const nextTm = idx >= 0 && idx < tms.length - 1 ? tms[idx + 1] : null;

  const { isDone, toggle } = useStudyProgress();
  const key = materialKey(course.code, tm);
  const done = isDone(key);

  useEffect(() => { window.scrollTo(0, 0); }, [tm]);

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
    <>
      <article className="max-w-3xl mx-auto px-4 md:px-8 pb-20 relative">
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
            <ArrowLeft size={16} /> Kembali ke {course.name}
          </button>
          <button 
            onClick={() => setZenMode(!zenMode)} 
            className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-bold transition-colors bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full"
            title={zenMode ? "Keluar dari Zen Mode" : "Masuk ke Zen Mode (Fokus Membaca)"}
          >
            {zenMode ? <Minimize size={14} /> : <Maximize size={14} />}
            <span className="hidden sm:inline">Zen Mode</span>
          </button>
        </div>

      <header className="mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold mb-3">
          <span className="px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 uppercase tracking-wider">TM {reading.tm}</span>
          {reading.ref && <span className="px-2 py-1 rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">{reading.ref}</span>}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">{reading.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{renderText(reading.intro)}</p>
        <TTSPlayer title={reading.title} intro={reading.intro} blocks={reading.blocks} />
      </header>

      {reading.objectives.length > 0 && (
        <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            <Target size={18} className="text-blue-500" /> Tujuan Pembelajaran
          </h2>
          <ul className="space-y-3">
            {reading.objectives.map((o: string, i: number) => (
              <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" /> <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none">
        {reading.blocks.map((b: ContentBlock, i: number) => <Block key={i} block={b} blockIndex={i} />)}
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={() => toggle(key)}
          className={`w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-medium transition-all border ${
            done
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700'
          }`}
        >
          <Check size={20} strokeWidth={done ? 3 : 2} className={done ? 'text-emerald-600 dark:text-emerald-400' : ''} /> 
          {done ? 'Tandai Belum Selesai' : 'Tandai Sudah Dipelajari'}
        </button>

        <nav className="mt-6 flex items-center justify-between gap-4">
          <button
            onClick={() => prevTm && onSelectTm(prevTm)}
            disabled={!prevTm}
            className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft size={16} /> <span className="hidden sm:inline">{prevTm ? `TM ${prevTm} sebelumnya` : 'Awal materi'}</span><span className="sm:hidden">Sebelumnnya</span>
          </button>
          <button
            onClick={() => nextTm && onSelectTm(nextTm)}
            disabled={!nextTm}
            className="flex-1 flex items-center justify-end gap-2 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="hidden sm:inline">{nextTm ? `TM ${nextTm} berikutnya` : 'Akhir materi'}</span><span className="sm:hidden">Berikutnya</span> <ChevronRight size={16} />
          </button>
        </nav>
      </div>
    </article>
      
      {zenMode && (
        <button
          onClick={() => setZenMode(false)}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full shadow-2xl font-bold transition-transform hover:-translate-y-1 active:translate-y-0"
        >
          <Minimize size={18} /> Keluar Zen Mode
        </button>
      )}
    </>
  );
}
