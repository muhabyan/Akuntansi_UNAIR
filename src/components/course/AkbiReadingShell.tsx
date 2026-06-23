import { useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type MutableRefObject, type ReactNode, type RefObject } from 'react';
import {
  ArrowLeft, BookOpen, Check, ChevronLeft, ChevronRight, List, PanelRight, Table2, Sigma, X,
} from 'lucide-react';
import type { ContentBlock, Course, Reading } from '../../types';
import CourseBlockCard from './CourseBlockCard';

interface AkbiReadingShellProps {
  course: Course;
  reading: Reading;
  done: boolean;
  isFirst: boolean;
  isLast: boolean;
  onBack: () => void;
  onPrev: () => void;
  onNext: () => void;
  onToggleDone: () => void;
}

type DrawerKind = 'toc' | 'utility' | null;
interface HeadingEntry { id: string; label: string; blockIndex: number; }

function slugifyHeading(text: string) {
  return text.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 72) || 'bagian-materi';
}

function headingId(text: string, blockIndex: number) {
  return `${slugifyHeading(text)}-${blockIndex + 1}`;
}

function countBlocks(blocks: ContentBlock[], kinds: ContentBlock['kind'][]): number {
  return blocks.reduce((total, block) => {
    const own = kinds.includes(block.kind) ? 1 : 0;
    if (block.kind === 'example' || block.kind === 'solution-reveal') return total + own + countBlocks(block.blocks, kinds);
    return total + own;
  }, 0);
}

function getDrawerFocusable(panel: HTMLDivElement) {
  return [...panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((element) => !element.hasAttribute('hidden'));
}

function useDrawerFocus(open: boolean, panelRef: RefObject<HTMLDivElement>, triggerRef: RefObject<HTMLButtonElement>, onClose: () => void, restoreFocusRef: MutableRefObject<boolean>) {
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);
  useEffect(() => {
    if (!open) return;
    const bodyOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    const panel = panelRef.current;
    document.body.style.overflow = 'hidden';
    panel?.focus();

    const focusBoundary = (edge: 'first' | 'last') => {
      const currentPanel = panelRef.current;
      if (!currentPanel) return;
      const focusable = getDrawerFocusable(currentPanel);
      const target = edge === 'first' ? focusable[0] : focusable[focusable.length - 1];
      (target ?? currentPanel).focus();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); restoreFocusRef.current = true; onCloseRef.current(); return; }
      const currentPanel = panelRef.current;
      if (event.key !== 'Tab' || !currentPanel) return;
      const focusable = getDrawerFocusable(currentPanel);
      if (focusable.length === 0) { event.preventDefault(); currentPanel.focus(); return; }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;
      const focusIsInside = activeElement === currentPanel || (activeElement instanceof Node && currentPanel.contains(activeElement));
      if (event.shiftKey && (!focusIsInside || activeElement === currentPanel || activeElement === first)) {
        event.preventDefault(); focusBoundary('last');
      } else if (!event.shiftKey && (!focusIsInside || activeElement === currentPanel || activeElement === last)) {
        event.preventDefault(); focusBoundary('first');
      }
    };

    const onFocusIn = (event: FocusEvent) => {
      const currentPanel = panelRef.current;
      const target = event.target;
      if (!restoreFocusRef.current) return;
      if (!currentPanel || !(target instanceof Node) || target === currentPanel || currentPanel.contains(target)) return;
      focusBoundary('first');
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('focusin', onFocusIn);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('focusin', onFocusIn);
      document.body.style.overflow = bodyOverflow;
      if (restoreFocusRef.current) trigger?.focus();
      restoreFocusRef.current = true;
    };
  }, [open, panelRef, restoreFocusRef, triggerRef]);
}

function Drawer({ open, title, id, panelRef, triggerRef, restoreFocusRef, onClose, children }: { open: boolean; title: string; id: string; panelRef: RefObject<HTMLDivElement>; triggerRef: RefObject<HTMLButtonElement>; restoreFocusRef: MutableRefObject<boolean>; onClose: () => void; children: ReactNode; }) {
  useDrawerFocus(open, panelRef, triggerRef, onClose, restoreFocusRef);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" onClick={() => { restoreFocusRef.current = true; onClose(); }} />
      <div id={id} ref={panelRef} className="relative w-full max-w-sm h-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col overflow-hidden outline-none animate-in slide-in-from-right" role="dialog" aria-modal="true" aria-labelledby={`${id}-title`} tabIndex={-1}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-800">
          <h2 id={`${id}-title`} className="font-bold text-gray-900 dark:text-white">{title}</h2>
          <button type="button" className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" aria-label={`Tutup ${title}`} onClick={() => { restoreFocusRef.current = true; onClose(); }}>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
}

function EditorialBlock({ block, blockIndex }: { block: ContentBlock; blockIndex: number }) {
  if (block.kind === 'h2') {
    return (
      <section id={headingId(block.text, blockIndex)} className="mt-12 mb-6 scroll-mt-24 outline-none" data-reading-anchor="true" tabIndex={-1}>
        <CourseBlockCard block={block} enableEditorialReading />
      </section>
    );
  }
  return <div className="my-6"><CourseBlockCard block={block} enableEditorialReading /></div>;
}

export default function AkbiReadingShell({ course, reading, done, isFirst, isLast, onBack, onPrev, onNext, onToggleDone }: AkbiReadingShellProps) {
  const headings = useMemo<HeadingEntry[]>(() => reading.blocks
    .map((block, blockIndex) => ({ block, blockIndex }))
    .filter((entry): entry is { block: Extract<ContentBlock, { kind: 'h2' }>; blockIndex: number } => entry.block.kind === 'h2')
    .map(({ block, blockIndex }) => ({ id: headingId(block.text, blockIndex), label: block.text.replace(/^A\d+\.\s*/i, ''), blockIndex })), [reading.blocks]);

  const [activeHeadingId, setActiveHeadingId] = useState(headings[0]?.id ?? '');
  const [drawer, setDrawer] = useState<DrawerKind>(null);
  const tocTriggerRef = useRef<HTMLButtonElement>(null);
  const utilityTriggerRef = useRef<HTMLButtonElement>(null);
  const tocPanelRef = useRef<HTMLDivElement>(null);
  const utilityPanelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef(true);

  const formulaCount = useMemo(() => countBlocks(reading.blocks, ['formula']), [reading.blocks]);
  const tableCount = useMemo(() => countBlocks(reading.blocks, ['table', 'journal']), [reading.blocks]);
  const practiceCount = useMemo(() => countBlocks(reading.blocks, ['builder', 'interactive-match', 'journal-builder', 'solution-reveal', 'statement', 't-account-builder', 'table-fill']), [reading.blocks]);

  useEffect(() => { setActiveHeadingId(headings[0]?.id ?? ''); setDrawer(null); }, [headings, reading.tm]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || headings.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible?.target.id) setActiveHeadingId(visible.target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 1] });
    headings.forEach(({ id }) => { const target = document.getElementById(id); if (target) observer.observe(target); });
    return () => observer.disconnect();
  }, [headings]);

  const phaseLabel = reading.tm <= 7 ? 'Pra-UTS' : 'Pra-UAS';

  const selectHeading = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    restoreFocusRef.current = false; setDrawer(null); setActiveHeadingId(id);
    target.scrollIntoView({ block: 'start', behavior: 'smooth' });
    target.focus({ preventScroll: true });
    window.history.replaceState(null, '', `#${id}`);
  };

  const handleStickyKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Home') return;
    event.preventDefault();
    document.querySelector<HTMLElement>('.reading-article h1')?.focus();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-20">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800" onKeyDown={handleStickyKeyDown}>
        <div className="mx-auto max-w-4xl px-4 h-16 flex items-center justify-between gap-4">
          <button type="button" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 shrink-0" onClick={onBack}>
            <ArrowLeft size={16} aria-hidden="true" /> <span className="hidden sm:inline">Kembali</span>
          </button>
          
          <p className="text-sm font-bold text-gray-900 dark:text-white truncate flex-1 text-center" title={reading.title}>
            TM {reading.tm} <span className="hidden sm:inline">· {reading.title}</span>
          </p>

          <div className="flex items-center gap-2 shrink-0">
            <button ref={tocTriggerRef} type="button" aria-expanded={drawer === 'toc'} aria-controls="akbi-reading-toc-drawer" onClick={() => setDrawer('toc')} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Daftar isi">
              <List size={18} aria-hidden="true" />
            </button>
            <button ref={utilityTriggerRef} type="button" aria-expanded={drawer === 'utility'} aria-controls="akbi-reading-utility-drawer" onClick={() => setDrawer('utility')} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Alat belajar">
              <PanelRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area - Full width focus */}
      <main className="mx-auto max-w-3xl px-4 md:px-8 mt-10">
        <article className="reading-article bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700" aria-labelledby="reading-title">
          <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
            <button type="button" onClick={onBack} className="hover:text-blue-600 dark:hover:text-blue-400">{course.name}</button>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-gray-900 dark:text-white">TM {reading.tm}</span>
          </nav>

          <header className="mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">{`TM ${reading.tm} · ${phaseLabel}${reading.ref ? ` · ${reading.ref}` : ''}`}</p>
            <h1 id="reading-title" className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6" tabIndex={-1}>{reading.title}</h1>
            <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-4">{reading.intro}</div>
          </header>

          <div className="prose prose-blue dark:prose-invert max-w-none">
            {reading.blocks.map((block, blockIndex) => <EditorialBlock key={`${block.kind}-${blockIndex}`} block={block} blockIndex={blockIndex} />)}
          </div>

          <section className="mt-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6" aria-label="Status penyelesaian materi">
            <div>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Status belajar</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{done ? 'Materi ini sudah diselesaikan' : 'Tandai setelah selesai membaca'}</h2>
            </div>
            <button type="button" className={`shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${done ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`} onClick={onToggleDone}>
              <Check size={20} aria-hidden="true" />
              {done ? 'Selesai dipelajari' : 'Tandai selesai'}
            </button>
          </section>

          <nav className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-8" aria-label="Navigasi antar materi">
            <button type="button" onClick={onPrev} disabled={isFirst} className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors">
              <ChevronLeft size={18} aria-hidden="true" /> Materi Sebelumnya
            </button>
            <button type="button" onClick={onNext} disabled={isLast} className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors">
              Materi Berikutnya <ChevronRight size={18} aria-hidden="true" />
            </button>
          </nav>
        </article>
      </main>

      <Drawer open={drawer === 'toc'} title="Daftar isi materi" id="akbi-reading-toc-drawer" panelRef={tocPanelRef} triggerRef={tocTriggerRef} restoreFocusRef={restoreFocusRef} onClose={() => setDrawer(null)}>
        <nav aria-label="Daftar isi materi">
          <ol className="space-y-1">
            {headings.map((heading, index) => (
              <li key={heading.id}>
                <a href={`#${heading.id}`} className={`flex items-start gap-3 p-3 rounded-lg text-sm transition-colors ${activeHeadingId === heading.id ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`} onClick={(event) => { event.preventDefault(); selectHeading(heading.id); }}>
                  <span className="font-mono text-xs opacity-50 pt-0.5" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span>{heading.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Drawer>

      <Drawer open={drawer === 'utility'} title="Alat bantu materi" id="akbi-reading-utility-drawer" panelRef={utilityPanelRef} triggerRef={utilityTriggerRef} restoreFocusRef={restoreFocusRef} onClose={() => setDrawer(null)}>
        <div className="space-y-8">
          <section>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Tujuan belajar</h3>
            {reading.objectives.length > 0 ? (
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {reading.objectives.map((objective) => <li key={objective} className="flex gap-2"><Check size={16} className="shrink-0 text-emerald-500" /> <span>{objective}</span></li>)}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 italic">Ikuti alur materi dan contoh pada halaman ini.</p>
            )}
          </section>
          <section>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Peta konten</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                <Sigma size={20} className="text-indigo-500 mb-1" />
                <span className="text-2xl font-black text-gray-900 dark:text-white">{formulaCount}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Formula</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                <Table2 size={20} className="text-cyan-500 mb-1" />
                <span className="text-2xl font-black text-gray-900 dark:text-white">{tableCount}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Tabel</span>
              </div>
              <div className="col-span-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                <BookOpen size={20} className="text-violet-500 mb-1" />
                <span className="text-2xl font-black text-gray-900 dark:text-white">{practiceCount}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Latihan & Praktik</span>
              </div>
            </div>
          </section>
        </div>
      </Drawer>
    </div>
  );
}
