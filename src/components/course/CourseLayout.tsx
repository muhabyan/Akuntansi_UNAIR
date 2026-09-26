import { useState, useMemo, useEffect, useRef } from 'react';
import {
  Award,
  ArrowUpDown,
  BookMarked,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Layers,
  ListTree,
  Maximize,
  MessageSquarePlus,
  PlayCircle,
  Sparkles,
  Target,
} from 'lucide-react';
import { useStudyProgress, materialKey } from '../../hooks/useStudyProgress';
import { loadCourseContent, type LoadedCourseContent, type ReviewReadingKey } from '../../data/courses/courseRegistry';
import type { ContentBlock, Course, CourseTabId, Reading } from '../../types';
import { getArsipFiles } from '../../data/arsipRegistry';
import ArsipViewerTab from '../ArsipViewerTab';

import CourseSidebar from './CourseSidebar';
import CourseHeader from './CourseHeader';
import CourseBlockCard from './CourseBlockCard';
import { renderText } from './MarkdownContent';
import ProgressCheckbox from './ProgressCheckbox';
import QuizCard from './QuizCard';
import PteQuizCard from './PteQuizCard';
import FlashcardGrid from './FlashcardGrid';
import BankQuestionList from './BankQuestionList';
import PrepReadingList from './PrepReadingList';
import { useEscapeToBack } from './escapeToBack';
import { SHARED_FRAME_CLASS, SharedFrameContext, usesSharedFrame } from './readingFrame';
import ReadingOutline, { buildReadingOutline, DESKTOP_OUTLINE_STORAGE_KEY, getReadingBlockId, useReadingOutlineActive } from './ReadingOutline';
import { type TabType } from './CourseTabs';

interface CourseLayoutProps {
  course: Course;
  initialTab?: CourseTabId;
  initialTm?: number | null;
  onBack: () => void;
}

function mapInitialTab(tab?: CourseTabId): TabType {
  switch (tab) {
    case 'quiz':
      return 'quiz';
    case 'flashcard':
      return 'flashcards';
    case 'bank-soal':
      return 'bank_soal';
    case 'tm8-14':
    case 'uas':
      return 'pra_uas';
    default:
      return 'pra_uts';
  }
}


function blockContainsQuery(block: ContentBlock, query: string): boolean {
  switch (block.kind) {
    case 'h2':
    case 'h3':
    case 'p':
    case 'formula':
    case 'code':
      return block.text.toLowerCase().includes(query);
    case 'ul':
    case 'ol':
      return block.items.some((item) => item.toLowerCase().includes(query));
    case 'callout':
      return [block.title, block.text].filter(Boolean).some((text) => text!.toLowerCase().includes(query));
    case 'table':
      return [
        ...(block.caption ? [block.caption] : []),
        ...block.headers,
        ...block.rows.flat(),
      ].some((text) => text.toLowerCase().includes(query));
    case 'journal':
      return [
        ...(block.caption ? [block.caption] : []),
        ...block.lines.flatMap((line) => [line.account, line.debit, line.credit].filter(Boolean) as string[]),
      ].some((text) => text.toLowerCase().includes(query));
    case 'figure':
      return [block.title, block.caption].filter(Boolean).some((text) => text!.toLowerCase().includes(query));
    case 'example':
      return block.title.toLowerCase().includes(query) || block.blocks.some((nested) => blockContainsQuery(nested, query));
    case 'solution-reveal':
      return [block.title, block.prompt].filter(Boolean).some((text) => text!.toLowerCase().includes(query)) || block.blocks.some((nested) => blockContainsQuery(nested, query));
    case 'section':
    case 'pendalaman':
      return Boolean(block.title?.toLowerCase().includes(query)) || block.blocks.some((nested) => blockContainsQuery(nested, query));
    case 'self-check':
      return [block.question, block.signal].filter(Boolean).some((text) => text!.toLowerCase().includes(query)) || block.answer.some((nested) => blockContainsQuery(nested, query));
    case 'statement':
      return [block.spec.entity, block.spec.title, block.spec.period, ...block.spec.lines.map((line) => line.label)]
        .some((text) => text.toLowerCase().includes(query));
    case 'builder':
      return [block.spec.entity, block.spec.title, block.spec.period, block.instructions, ...block.spec.lines.map((line) => line.label)]
        .filter(Boolean)
        .some((text) => text!.toLowerCase().includes(query));
    case 'interactive-match':
      return [block.spec.title, block.spec.instruction, block.spec.feedback, ...block.spec.choices, ...block.spec.pairs.flatMap((pair) => [pair.prompt, pair.answer, pair.feedback])]
        .filter(Boolean)
        .some((text) => text!.toLowerCase().includes(query));
    case 'table-fill':
      return [block.spec.title, block.spec.instruction, block.spec.feedback, ...block.spec.headers, ...block.spec.rows.flatMap((row) => [row.label, ...row.cells.flatMap((cell) => [cell.display, String(cell.answer ?? ''), cell.placeholder, cell.feedback])])]
        .filter(Boolean)
        .some((text) => text!.toLowerCase().includes(query));
    case 'journal-builder':
      return [block.spec.title, block.spec.instruction, block.spec.feedback, ...(block.spec.accountChoices ?? []), ...block.spec.lines.flatMap((line) => [line.account, String(line.debit ?? ''), String(line.credit ?? ''), line.feedback])]
        .filter(Boolean)
        .some((text) => text!.toLowerCase().includes(query));
    case 't-account-builder':
      return [
        block.spec.title,
        block.spec.instruction,
        block.spec.currency,
        ...block.spec.accounts.flatMap((account) => [
          account.name,
          account.endingBalance?.side,
          String(account.endingBalance?.amount ?? ''),
          ...account.rows.flatMap((row) => [row.debitLabel, String(row.debitAmount ?? ''), row.creditLabel, String(row.creditAmount ?? '')]),
        ]),
      ]
        .filter(Boolean)
        .some((text) => text!.toLowerCase().includes(query));
    default:
      return false;
  }
}

function formulaNeedsFullWidth(block: Extract<ContentBlock, { kind: 'formula' }>) {
  const readableLength = block.text
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/[{}\s]/g, '')
    .length;
  return readableLength > 55 || block.text.includes('\\\\');
}

function isWideLearningBlock(block: ContentBlock) {
  return [
    'table',
    'journal',
    'formula',
    'figure',
    'example',
    'solution-reveal',
    'statement',
    'builder',
    'interactive-match',
    'table-fill',
    'journal-builder',
    't-account-builder',
    'illustration',
    'math-example',
    'chart-guide',
    'practice-box',
  ].includes(block.kind);
}

// ----------------- DETAIL BACAAN TATAP MUKA -----------------
function ReadingPanel({
  reading,
  onBack,
  onPrev,
  onNext,
  courseCode,
  courseName,
  isFirst,
  isLast,
  isDone,
  toggle,
}: {
  reading: Reading;
  onBack: () => void;
  onPrev: () => void;
  onNext: () => void;
  courseCode: string;
  courseName: string;
  isFirst: boolean;
  isLast: boolean;
  isDone: (key: string) => boolean;
  toggle: (key: string) => void;
}) {
  const key = materialKey(courseCode, reading.tm);
  useEscapeToBack(reading.layout === 'layered', onBack);
  const sharedFrame = usesSharedFrame(reading, courseCode);
  const done = isDone(key);
  const isSimulation = reading.title === 'Simulasi UTS' || reading.title === 'Simulasi UAS' || reading.tm === 0 || reading.tm === 15;
  const outlineItems = useMemo(() => buildReadingOutline(reading.blocks), [reading.blocks]);
  const activeOutlineId = useReadingOutlineActive(outlineItems);
  const activeOutlineIndex = Math.max(0, outlineItems.findIndex((item) => item.id === activeOutlineId));
  const activeOutlineItem = outlineItems[activeOutlineIndex];
  const [desktopOutlineOpen, setDesktopOutlineOpen] = useState(() => {
    try {
      return window.localStorage.getItem(DESKTOP_OUTLINE_STORAGE_KEY) !== 'true';
    } catch {
      return true;
    }
  });
  const [mobileOutlineOpen, setMobileOutlineOpen] = useState(false);
  const mobileOutlineTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileOutlineWasOpen = useRef(false);

  const touchInfoRef = useRef<{
    startX: number;
    startY: number;
    startTime: number;
    ignored: boolean;
  } | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(DESKTOP_OUTLINE_STORAGE_KEY, String(!desktopOutlineOpen));
    } catch {
      // The outline remains usable when browser storage is unavailable.
    }
  }, [desktopOutlineOpen]);

  useEffect(() => {
    document.body.classList.toggle('reading-outline-menu-open', mobileOutlineOpen);
    if (mobileOutlineWasOpen.current && !mobileOutlineOpen) mobileOutlineTriggerRef.current?.focus();
    mobileOutlineWasOpen.current = mobileOutlineOpen;
    return () => document.body.classList.remove('reading-outline-menu-open');
  }, [mobileOutlineOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;

    const target = e.target instanceof Element ? e.target : null;
    const isScrollableOrInteractive = Boolean(
      target?.closest(
        'table, .akbi-table-scroll, .course-table-card, .course-table-head, ' +
        '.course-formula-surface, .course-journal-card, .katex, .katex-display, ' +
        'pre, code, svg, button, a, input, textarea, select, details, summary, ' +
        '[role="region"], [role="button"], [contenteditable="true"], ' +
        '.reading-outline-sheet, .mobile-utility-panel, .mobile-utility-launcher'
      )
    );

    touchInfoRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      startTime: performance.now(),
      ignored: isScrollableOrInteractive,
    };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchInfoRef.current || touchInfoRef.current.ignored) return;
    const touch = e.touches[0];
    if (!touch) return;

    const deltaX = Math.abs(touch.clientX - touchInfoRef.current.startX);
    const deltaY = Math.abs(touch.clientY - touchInfoRef.current.startY);

    // If movement is predominantly vertical (page scrolling), cancel swipe navigation
    if (deltaY > 12 && deltaY > deltaX) {
      touchInfoRef.current.ignored = true;
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const touchInfo = touchInfoRef.current;
    touchInfoRef.current = null;
    if (!touchInfo || touchInfo.ignored) return;

    const touch = e.changedTouches[0];
    if (!touch) return;

    const deltaX = touchInfo.startX - touch.clientX;
    const deltaY = touchInfo.startY - touch.clientY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    const duration = performance.now() - touchInfo.startTime;

    const minSwipeDistance = 90;
    const isQuickSwipe = duration <= 450;
    const isPredominantlyHorizontal = absX >= absY * 2.5;

    if (absX >= minSwipeDistance && isPredominantlyHorizontal && isQuickSwipe) {
      if (deltaX > 0 && !isLast) {
        onNext();
      } else if (deltaX < 0 && !isFirst) {
        onPrev();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft' && !isFirst) {
        onPrev();
      } else if (e.key === 'ArrowRight' && !isLast) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFirst, isLast, onPrev, onNext, onBack]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [reading.tm]);

  useEffect(() => {
    document.body.classList.add('reading-mode-active');
    return () => document.body.classList.remove('reading-mode-active');
  }, []);

  return (
    <div
      className={`reading-layout grid min-w-0 gap-6 lg:grid-cols-[minmax(0,64rem)_12.5rem] lg:justify-center${sharedFrame ? ` ${SHARED_FRAME_CLASS}` : ''}`}
      data-outline-expanded={desktopOutlineOpen}
    >
      <article
        className="min-w-0 animate-fade-in-up"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="reading-toolbar sticky top-[calc(4rem+env(safe-area-inset-top))] z-30 mb-5 flex min-h-12 items-center gap-2 rounded-xl border border-gray-300 bg-white p-1.5 shadow-md shadow-slate-900/10 transition-[opacity,transform] duration-200 dark:border-gray-600 dark:bg-gray-900 dark:shadow-black/30 md:top-[4.75rem]">
          <button
            ref={mobileOutlineTriggerRef}
            type="button"
            aria-label="Buka daftar isi"
            aria-expanded={mobileOutlineOpen}
            aria-controls="reading-outline-mobile-dialog"
            onClick={() => setMobileOutlineOpen((open) => !open)}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-bold text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-gray-300 dark:hover:bg-blue-950/35 dark:hover:text-blue-300 lg:hidden"
          >
            <ListTree size={17} /> <span className="hidden min-[360px]:inline">Daftar Isi</span>
          </button>
          <button
            type="button"
            aria-label={desktopOutlineOpen ? 'Tutup daftar isi' : 'Buka daftar isi'}
            aria-expanded={desktopOutlineOpen}
            aria-controls="reading-outline-desktop-panel"
            onClick={() => setDesktopOutlineOpen((open) => !open)}
            className="hidden min-h-11 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-bold text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-gray-300 dark:hover:bg-blue-950/35 dark:hover:text-blue-300 lg:inline-flex"
          >
            <ListTree size={17} /> Daftar Isi
          </button>
          <div className="min-w-0 flex-1 px-1 text-center">
            <p className="truncate text-[11px] font-semibold text-gray-500 dark:text-gray-400" aria-live="polite">
              {activeOutlineItem ? `${String(activeOutlineIndex + 1).padStart(2, '0')} · ${activeOutlineItem.label.replace(/^\d+\.\s*/, '')}` : `TM ${reading.tm}`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-material-request', { detail: { courseCode, tm: reading.tm } }))}
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-lg px-2.5 sm:px-3 text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 transition-colors dark:text-amber-300 dark:bg-amber-950/40 dark:hover:bg-amber-900/50 dark:border-amber-800/60"
            title="Minta materi tambahan atau laporkan kesalahan materi"
          >
            <MessageSquarePlus size={15} className="text-amber-600 dark:text-amber-400" />
            <span className="hidden sm:inline">Request Materi</span>
          </button>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('akuntansihub:toggle-zen'))}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-bold text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-gray-300 dark:hover:bg-blue-950/35 dark:hover:text-blue-300"
            title="Masuk ke Zen Mode"
          >
            <Maximize size={16} /> <span className="hidden sm:inline">Zen Mode</span>
          </button>
        </div>

        <CourseHeader courseName={courseName} reading={reading} onBack={onBack} showZenControl={false} />

        <SharedFrameContext.Provider value={sharedFrame}>
          <div className="reading-document akbi-reading-flow min-w-0">
            <div className="space-y-6 md:space-y-8">
              {reading.blocks.map((block, index) => {
                const previousBlock = reading.blocks[index - 1];
                const nextBlock = reading.blocks[index + 1];

                if (block.kind === 'formula' && previousBlock?.kind === 'formula') return null;

                if (block.kind === 'formula' && nextBlock?.kind === 'formula') {
                  const formulaRun: Array<{ block: Extract<ContentBlock, { kind: 'formula' }>; index: number }> = [];
                  let formulaIndex = index;
                  while (reading.blocks[formulaIndex]?.kind === 'formula') {
                    formulaRun.push({
                      block: reading.blocks[formulaIndex] as Extract<ContentBlock, { kind: 'formula' }>,
                      index: formulaIndex,
                    });
                    formulaIndex += 1;
                  }

                  return (
                    <div key={`formula-run-${index}`} className="reading-exam-formula-grid reading-wide-block min-w-0">
                      {formulaRun.map(({ block: formulaBlock, index: originalIndex }) => (
                        <div
                          key={originalIndex}
                          className={`reading-block-anchor min-w-0 scroll-mt-40 ${formulaNeedsFullWidth(formulaBlock) ? 'reading-exam-formula--wide' : ''}`}
                        >
                          <CourseBlockCard block={formulaBlock} isSimulation={isSimulation} enableLegalStyling={courseCode === 'PJK201' || courseCode === 'PJK301'} enableEconomicStyling={courseCode === 'EKT109'} enableEditorialReading />
                        </div>
                      ))}
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    id={getReadingBlockId(block, index)}
                    className={`reading-block-anchor min-w-0 scroll-mt-40 ${isWideLearningBlock(block) ? 'reading-wide-block' : 'reading-prose-block'}`}
                  >
                    <CourseBlockCard block={block} isSimulation={isSimulation} enableLegalStyling={courseCode === 'PJK201' || courseCode === 'PJK301'} enableEconomicStyling={courseCode === 'EKT109'} enableEditorialReading />
                  </div>
                );
              })}
            </div>
          </div>
        </SharedFrameContext.Provider>

        <footer className="reading-completion reading-prose-block mt-14 border-t border-gray-200 pt-7 dark:border-gray-800 md:mt-16 md:pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Selesai membaca?</p>
          <h2 className="mt-1.5 text-lg font-bold text-gray-900 dark:text-white">Catat progres, lalu lanjutkan saat siap.</h2>
          <button
            type="button"
            onClick={() => toggle(key)}
            className={`mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border px-4 font-bold transition-colors ${
              done
                ? 'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/35 dark:text-emerald-300'
                : 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500'
            }`}
          >
            <CheckCircle2 size={18} /> {done ? 'Sudah dipelajari' : 'Tandai sudah dipelajari'}
          </button>

          <nav className="reading-essential-nav mt-5 grid grid-cols-2 gap-3" aria-label="Navigasi materi">
            <button type="button" onClick={onPrev} disabled={isFirst} className="flex min-h-12 min-w-0 items-center gap-2 rounded-xl border border-gray-200 px-3 text-left text-sm font-semibold text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/30">
              <ChevronLeft size={17} className="shrink-0" /> <span className="truncate">Sebelumnya</span>
            </button>
            <button type="button" onClick={onNext} disabled={isLast} className="flex min-h-12 min-w-0 items-center justify-end gap-2 rounded-xl border border-gray-200 px-3 text-right text-sm font-semibold text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/30">
              <span className="truncate">Berikutnya</span> <ChevronRight size={17} className="shrink-0" />
            </button>
          </nav>
        </footer>
      </article>

      <ReadingOutline items={outlineItems} variant="desktop" activeId={activeOutlineId} isOpen={desktopOutlineOpen} onOpenChange={setDesktopOutlineOpen} />
      <ReadingOutline items={outlineItems} variant="mobile" activeId={activeOutlineId} isOpen={mobileOutlineOpen} onOpenChange={setMobileOutlineOpen} />
    </div>
  );
}

// ----------------- DASHBOARD UNIVERSAL (PTE-STYLE) -----------------
function UniversalCourseDashboard({
  nextTm,
  nextTitle,
  isComplete,
  completedCount,
  totalCount,
  onStart,
}: {
  nextTm: number | null;
  nextTitle?: string;
  isComplete: boolean;
  completedCount: number;
  totalCount: number;
  onStart: () => void;
}) {
  if (nextTm === null) return null;

  return (
    <section className="relative mb-6 overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/90 via-white to-indigo-50/70 px-5 py-5 dark:border-blue-900/45 dark:from-blue-950/35 dark:via-gray-900 dark:to-indigo-950/25 md:flex md:items-center md:justify-between md:gap-6 md:px-6" aria-labelledby="course-next-step-title">
      <div className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full bg-blue-400/10 blur-2xl" />
      <div className="relative min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
          {isComplete ? 'Tinjau kembali' : 'Titik belajar berikutnya'}
        </p>
        <h2 id="course-next-step-title" className="mt-1.5 text-lg font-bold leading-snug text-gray-900 dark:text-white md:text-xl">
          TM {nextTm} · {nextTitle}
        </h2>
        <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
          {isComplete
            ? `Semua ${totalCount} materi sudah ditandai selesai. Mulai ulang dari awal bila ingin meninjau.`
            : `${completedCount} dari ${totalCount} materi sudah selesai.`}
        </p>
      </div>
      <button type="button" onClick={onStart} className="relative mt-4 inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 md:mt-0 md:w-auto">
        <PlayCircle size={18} /> {isComplete ? `Tinjau TM ${nextTm}` : `Lanjut TM ${nextTm}`}
      </button>
    </section>
  );
}
// ----------------- KARTU SIMULASI UJIAN -----------------
function ReviewReadingCard({
  reading,
  label,
  onOpen,
}: {
  reading: Reading;
  label: string;
  onOpen: () => void;
}) {
  return (
    <div className="mt-6 border-t border-gray-200 dark:border-gray-800 pt-5">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
        <Sparkles size={14} /> Simulasi Ujian
      </div>
      <div className="group flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm transition-all hover:border-blue-500 hover:shadow-md md:gap-4 md:p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-xs font-bold text-blue-600 dark:text-blue-400">
          S
        </div>
        <div onClick={onOpen} className="min-w-0 flex-1 cursor-pointer text-left">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {label}
            </span>
            <span className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
              Simulasi
            </span>
          </div>
          <h3 className="text-base font-bold leading-snug text-gray-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 md:text-lg">
            {reading.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {reading.intro}
          </p>
        </div>
        <button
          onClick={onOpen}
          className="flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 px-3 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white md:px-4"
        >
          <BookOpen size={14} /> <span className="hidden sm:inline">Buka</span>
        </button>
      </div>
    </div>
  );
}

function PtePraUasToolkit({
  formulaCount,
  checklistCount,
  onOpen,
}: {
  formulaCount: number;
  checklistCount: number;
  onOpen: () => void;
}) {
  return (
    <section className="mb-6 overflow-hidden rounded-xl border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/10 p-4 md:p-5" aria-labelledby="pte-toolkit-title">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">Toolkit Pra-UAS PTE</span>
          <h2 id="pte-toolkit-title" className="mt-1 text-lg font-bold text-gray-900 dark:text-white md:text-xl">Formula, peta materi, dan checklist review</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Gunakan toolkit setelah membaca TM 8–14 untuk memeriksa rumus, hubungan sebab-akibat, asumsi model, dan jebakan grafik.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-cyan-700"
        >
          <BookMarked size={16} /> Buka toolkit
        </button>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-white dark:bg-gray-800 p-3.5 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{formulaCount}</div>
          <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">formula ringkas Pra-UAS</div>
        </div>
        <div className="rounded-xl bg-white dark:bg-gray-800 p-3.5 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{checklistCount}</div>
          <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">butir checklist kompetensi</div>
        </div>
        <div className="rounded-xl bg-white dark:bg-gray-800 p-3.5 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">TM 8–14</div>
          <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">makroekonomi terintegrasi</div>
        </div>
      </div>
    </section>
  );
}

function MaterialCard({
  tmNum,
  reading,
  checked,
  current,
  onToggle,
  onOpen,
}: {
  tmNum: number;
  reading: Reading;
  checked: boolean;
  current: boolean;
  onToggle: () => void;
  onOpen: () => void;
}) {
  return (
    <article className={`group grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-start gap-3 border-b border-gray-200 px-3 py-3.5 last:border-b-0 dark:border-gray-700 md:grid-cols-[2.75rem_minmax(0,1fr)_auto] md:items-center md:px-4 ${
      current
        ? 'bg-blue-50/75 dark:bg-blue-950/25'
        : checked
          ? 'bg-gray-50/80 dark:bg-gray-900/25'
          : 'bg-white/80 hover:bg-gray-50/80 dark:bg-gray-800/65 dark:hover:bg-gray-800'
    }`} aria-current={current ? 'step' : undefined}>
      <ProgressCheckbox checked={checked} onToggle={onToggle} />

      <button type="button" onClick={onOpen} className="min-w-0 text-left">
        <div className="mb-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-bold uppercase tracking-[0.14em]">
          <span className={current ? 'text-blue-700 dark:text-blue-300' : 'text-gray-500 dark:text-gray-400'}>TM {tmNum}</span>
          {current && <span className="text-blue-600 dark:text-blue-400">Berikutnya</span>}
          {checked && <span className="text-emerald-600 dark:text-emerald-400">Selesai</span>}
          {reading.ref && <span className="truncate normal-case tracking-normal text-gray-400 dark:text-gray-500">{reading.ref}</span>}
        </div>
        <h3 className={`text-sm font-bold leading-snug transition-colors md:text-base ${checked ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300'}`}>
          {reading.title}
        </h3>
        <div className="mt-1 line-clamp-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400 md:text-sm">
          {renderText(reading.intro)}
        </div>
      </button>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`Buka TM ${tmNum}: ${reading.title}`}
        className="flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-lg text-xs font-bold text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-300 md:px-3"
      >
        <BookOpen size={14} /> <span className="hidden sm:inline">Buka</span>
      </button>
    </article>
  );
}

// ----------------- CONTAINER SHELL UTAMA -----------------
export default function CourseLayout({ course, initialTab = 'tm1-7', initialTm = null, onBack }: CourseLayoutProps) {
  const { isDone, toggle } = useStudyProgress();
  const [activeTab, setActiveTab] = useState<TabType>(() => mapInitialTab(initialTab));
  const [searchQuery, setSearchQuery] = useState('');
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const [selectedMeetingTm, setSelectedMeetingTm] = useState<number | null>(initialTm);
  const [selectedReviewKey, setSelectedReviewKey] = useState<ReviewReadingKey | null>(null);
  const [courseContent, setCourseContent] = useState<LoadedCourseContent | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [contentError, setContentError] = useState<string | null>(null);

  useEffect(() => {
    setActiveTab(mapInitialTab(initialTab));
    setSearchQuery('');
    setSelectedMeetingTm(initialTm);
    setSelectedReviewKey(null);
    // A TM opened from outside the course page (e.g. the home page's schedule) gets its own history entry like one
    // opened from the list, so Back returns to the course page instead of leaving it.
    if (initialTm !== null && window.history.state?.akuntansihub_tm !== initialTm) {
      try {
        window.history.pushState({ akuntansihub_tm: initialTm, courseCode: course.code, fromSemester: window.history.state?.fromSemester }, '', window.location.pathname);
      } catch {
        // ignore
      }
    }
  }, [course.code, initialTab, initialTm]);

  useEffect(() => {
    let isActive = true;
    setIsLoadingContent(true);
    setContentError(null);
    setCourseContent(null);
    setSelectedReviewKey(null);

    loadCourseContent(course.code)
      .then((loaded) => {
        if (!isActive) return;
        setCourseContent(loaded);
        setIsLoadingContent(false);
      })
      .catch(() => {
        if (!isActive) return;
        setContentError('Konten mata kuliah gagal dimuat. Silakan muat ulang halaman.');
        setIsLoadingContent(false);
      });

    return () => { isActive = false; };
  }, [course.code]);

  const isPteCourse = course.code === 'EKT109';

  const availableTms = useMemo(() => Object.keys(courseContent?.readings ?? {}).map(Number).sort((a, b) => a - b), [courseContent]);
  const utsTms = useMemo(() => availableTms.filter((t) => t >= 1 && t <= 7), [availableTms]);
  const uasTms = useMemo(() => availableTms.filter((t) => t >= 8 && t <= 14), [availableTms]);

  const reviewUtsReading = courseContent?.reviews.uts;
  const reviewUasReading = courseContent?.reviews.uas;

  const allReadings = useMemo(() => {
    return [
      ...availableTms.map((t) => courseContent?.readings[t]).filter(Boolean),
      reviewUtsReading,
      reviewUasReading,
    ].filter(Boolean) as Reading[];
  }, [availableTms, courseContent, reviewUtsReading, reviewUasReading]);

  const filteredTms = useMemo(() => {
    let list = activeTab === 'pra_uts' ? utsTms : uasTms;
    const q = searchQuery.trim().toLowerCase();

    if (q) {
      const matchingTms = allReadings
        .filter(
          (r) =>
            r.title.toLowerCase().includes(q) ||
            r.intro.toLowerCase().includes(q) ||
            r.blocks.some((b) => blockContainsQuery(b, q))
        )
        .map((r) => r.tm);

      list = availableTms.filter((t) => matchingTms.includes(t));
    }

    return [...list].sort((a, b) => (isSortedAsc ? a - b : b - a));
  }, [activeTab, utsTms, uasTms, searchQuery, allReadings, availableTms, isSortedAsc]);

  const stats = useMemo(() => {
    const total = availableTms.length;
    const completed = availableTms.filter((t) => isDone(materialKey(course.code, t))).length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, percent };
  }, [availableTms, course.code, isDone]);

  const nextTm = useMemo(() => {
    return availableTms.find((t) => !isDone(materialKey(course.code, t))) ?? availableTms[0] ?? null;
  }, [availableTms, course.code, isDone]);
  const isCourseComplete = stats.total > 0 && stats.completed === stats.total;



  const tabs = useMemo(() => {
    const isPjk = course.code === 'PJK201';
    const list: { id: TabType; label: string; icon: React.ReactNode; count?: number }[] = [
      {
        id: 'pra_uts',
        label: 'TM 1–7',
        icon: <Layers size={16} />,
        count: utsTms.length,
      },
      {
        id: 'pra_uas',
        label: 'TM 8–14',
        icon: <Award size={16} />,
        count: uasTms.length,
      },
    ];
    if ((course.flashcardCount ?? course.flashcards?.length ?? 0) > 0) {
      list.push({ id: 'flashcards', label: 'Flashcard', icon: <Layers size={16} /> });
    }
    list.push({ id: 'quiz', label: isPjk || course.code === 'EKT109' ? 'UTS & UAS' : 'Kuis', icon: <Target size={16} /> });
    list.push({ id: 'bank_soal', label: 'Bank Soal', icon: <ClipboardList size={16} /> });
    list.push({ id: 'referensi', label: 'Referensi', icon: <BookMarked size={16} /> });
    
    if (getArsipFiles(course.code).length > 0) {
      list.push({ id: 'arsip', label: 'Arsip UAS', icon: <BookMarked size={16} /> });
    }
    
    return list;
  }, [course, utsTms.length, uasTms.length]);

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const pteToolkitMetrics = useMemo(() => {
    if (!isPteCourse) return { formulaCount: 0, checklistCount: 0 };
    const blocks = courseContent?.customReferensi ?? [];
    return {
      formulaCount: blocks.filter((block) => block.kind === 'formula').length,
      checklistCount: blocks
        .filter((block): block is Extract<ContentBlock, { kind: 'ul' }> => block.kind === 'ul')
        .flatMap((block) => block.items)
        .filter((item) => /^\[[ xX]\]\s*/.test(item)).length,
    };
  }, [courseContent, isPteCourse]);

  const pteToolkitMatchesSearch = Boolean(
    isPteCourse &&
      normalizedSearchQuery &&
      (courseContent?.customReferensi ?? []).some((block) => blockContainsQuery(block, normalizedSearchQuery))
  );


  const reviewUtsMatchesSearch = Boolean(
    normalizedSearchQuery &&
      reviewUtsReading &&
      (reviewUtsReading.title.toLowerCase().includes(normalizedSearchQuery) ||
        reviewUtsReading.intro.toLowerCase().includes(normalizedSearchQuery) ||
        reviewUtsReading.blocks.some((b) => blockContainsQuery(b, normalizedSearchQuery)))
  );

  const reviewUasMatchesSearch = Boolean(
    normalizedSearchQuery &&
      reviewUasReading &&
      (reviewUasReading.title.toLowerCase().includes(normalizedSearchQuery) ||
        reviewUasReading.intro.toLowerCase().includes(normalizedSearchQuery) ||
        reviewUasReading.blocks.some((b) => blockContainsQuery(b, normalizedSearchQuery)))
  );

  const filteredSpecialReviewCount = Number(reviewUtsMatchesSearch) + Number(reviewUasMatchesSearch);
  const filteredToolkitCount = Number(pteToolkitMatchesSearch);

  const currentReading = selectedReviewKey !== null
    ? courseContent?.reviews[selectedReviewKey]
    : selectedMeetingTm !== null ? courseContent?.readings[selectedMeetingTm] : null;

  const navigateToMeeting = (tm: number) => {
    setSelectedMeetingTm(tm);
    setSelectedReviewKey(null);
    try {
      window.history.pushState({ akuntansihub_tm: tm, courseCode: course.code, fromSemester: window.history.state?.fromSemester }, '', window.location.pathname);
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToReview = (key: ReviewReadingKey) => {
    setSelectedMeetingTm(null);
    setSelectedReviewKey(key);
    try {
      window.history.pushState({ akuntansihub_review: key, courseCode: course.code, fromSemester: window.history.state?.fromSemester }, '', window.location.pathname);
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromReading = () => {
    if (window.history.state?.akuntansihub_tm || window.history.state?.akuntansihub_review) {
      window.history.back();
    } else {
      setSelectedMeetingTm(null);
      setSelectedReviewKey(null);
    }
  };

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (e.state?.akuntansihub_tm) {
        setSelectedMeetingTm(e.state.akuntansihub_tm);
        setSelectedReviewKey(null);
      } else if (e.state?.akuntansihub_review) {
        setSelectedMeetingTm(null);
        setSelectedReviewKey(e.state.akuntansihub_review);
      } else {
        setSelectedMeetingTm(null);
        setSelectedReviewKey(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const switchTab = (id: TabType) => {
    setActiveTab(id);
    setSearchQuery('');
    setSelectedMeetingTm(null);
    setSelectedReviewKey(null);
  };

  const currentIdx = selectedMeetingTm !== null ? availableTms.indexOf(selectedMeetingTm) : -1;

  if (isLoadingContent) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-slate-500 animate-fade-in-up">
        <div className="mb-4 h-9 w-9 animate-spin rounded-full border-2 border-navy-500 border-t-gold" />
        <p className="text-sm font-semibold">Memuat materi {course.name}…</p>
      </div>
    );
  }

  if (contentError || !courseContent) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="text-sm font-semibold text-slate-400">{contentError ?? 'Konten belum tersedia.'}</p>
        <button onClick={onBack} className="mt-5 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-3 text-sm font-black text-gold">Kembali</button>
      </div>
    );
  }



  return (
    <div className={`mx-auto ${currentReading ? '-mt-16 max-w-[80rem] px-4' : '-mt-12 max-w-5xl px-4 md:mt-0 md:px-8'}`}>
      <div className="flex flex-col">
        {!currentReading && (
          <CourseSidebar
            course={course}
            onBack={onBack}
            searchQuery={searchQuery}
            onSearchChange={(q) => {
              setSearchQuery(q);
              setSelectedMeetingTm(null);
              setSelectedReviewKey(null);
            }}
            percent={stats.percent}
            completedCount={stats.completed}
            totalCount={stats.total}
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={switchTab}
          />
        )}

        <main className="relative min-w-0 flex-1 pb-10">
          {currentReading ? (
            <ReadingPanel
              reading={currentReading}
              courseCode={course.code}
              courseName={course.name}
              onBack={handleBackFromReading}
              isFirst={selectedReviewKey !== null || currentIdx === 0}
              isLast={selectedReviewKey !== null || currentIdx === availableTms.length - 1}
              isDone={isDone}
              toggle={toggle}
              onPrev={() => {
                if (currentIdx > 0) navigateToMeeting(availableTms[currentIdx - 1]);
              }}
              onNext={() => {
                if (currentIdx >= 0 && currentIdx < availableTms.length - 1) {
                  navigateToMeeting(availableTms[currentIdx + 1]);
                }
              }}
            />
          ) : (
            <>
              {!searchQuery && (
                <UniversalCourseDashboard
                  nextTm={nextTm}
                  nextTitle={nextTm === null ? undefined : courseContent.readings[nextTm]?.title}
                  isComplete={isCourseComplete}
                  completedCount={stats.completed}
                  totalCount={stats.total}
                  onStart={() => {
                    if (nextTm !== null) navigateToMeeting(nextTm);
                  }}
                />
              )}

              <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-5">
                {searchQuery ? (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Hasil Pencarian Global</span>
                    <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                      Mencari: &quot;{searchQuery}&quot;
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Menemukan {filteredTms.length + filteredSpecialReviewCount + filteredToolkitCount} materi yang cocok.
                    </p>
                  </div>
                ) : (
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Materi utama</span>
                      <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                        {tabs.find((t) => t.id === activeTab)?.label}
                      </h1>
                    </div>
                    {(activeTab === 'pra_uts' || activeTab === 'pra_uas') && (
                      <div className="flex items-center gap-2">
                        <span className="hidden text-xs font-semibold text-gray-500 dark:text-gray-400 sm:inline">{filteredTms.length} materi</span>
                        <button type="button" onClick={() => setIsSortedAsc(!isSortedAsc)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:border-blue-800 dark:hover:bg-blue-950/35 dark:hover:text-blue-300" aria-label={`Urutkan materi ${isSortedAsc ? 'menurun' : 'menaik'}`} title={`Urutan ${isSortedAsc ? 'TM awal ke akhir' : 'TM akhir ke awal'}`}>
                          <ArrowUpDown size={17} />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {isPteCourse && activeTab === 'pra_uas' && !searchQuery && (
                <PtePraUasToolkit
                  formulaCount={pteToolkitMetrics.formulaCount}
                  checklistCount={pteToolkitMetrics.checklistCount}
                  onOpen={() => switchTab('referensi')}
                />
              )}

              {pteToolkitMatchesSearch && (
                <PtePraUasToolkit
                  formulaCount={pteToolkitMetrics.formulaCount}
                  checklistCount={pteToolkitMetrics.checklistCount}
                  onOpen={() => switchTab('referensi')}
                />
              )}

              {(activeTab === 'pra_uts' || activeTab === 'pra_uas' || searchQuery) && (
                <div>
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white/70 dark:border-gray-700 dark:bg-gray-800/55">
                    {filteredTms.length === 0 && filteredSpecialReviewCount === 0 && filteredToolkitCount === 0 ? (
                      <div className="bg-gray-50 py-12 text-center text-sm text-gray-500 dark:bg-gray-800/50 dark:text-gray-400">Tidak ada materi yang cocok.</div>
                    ) : (
                      filteredTms.map((tmNum) => {
                        const reading = courseContent.readings[tmNum];
                        const key = materialKey(course.code, tmNum);
                        const checked = isDone(key);

                        if (!reading) return null;

                        return (
                          <MaterialCard
                            key={tmNum}
                            tmNum={tmNum}
                            reading={reading}
                            checked={checked}
                            current={tmNum === nextTm && !checked}
                            onToggle={() => toggle(key)}
                            onOpen={() => navigateToMeeting(tmNum)}
                          />
                        );
                      })
                    )}
                  </div>

                  {((!searchQuery && activeTab === 'pra_uts') || reviewUtsMatchesSearch) && reviewUtsReading && (
                    <ReviewReadingCard
                      reading={reviewUtsReading}
                      label="Simulasi UTS"
                      onOpen={() => navigateToReview('uts')}
                    />
                  )}

                  {!searchQuery && activeTab === 'pra_uts' && courseContent.prep && (
                    <PrepReadingList items={courseContent.prep} reviews={courseContent.reviews} onOpen={navigateToReview} />
                  )}

                  {((!searchQuery && activeTab === 'pra_uas') || reviewUasMatchesSearch) && reviewUasReading && (
                    <ReviewReadingCard
                      reading={reviewUasReading}
                      label="Simulasi UAS"
                      onOpen={() => navigateToReview('uas')}
                    />
                  )}
                </div>
              )}

              {activeTab === 'quiz' && !searchQuery && (isPteCourse ? <PteQuizCard course={course} /> : <QuizCard course={course} />)}
              {activeTab === 'flashcards' && !searchQuery && <FlashcardGrid course={course} />}
              {activeTab === 'bank_soal' && !searchQuery && <BankQuestionList course={course} />}

              {activeTab === 'referensi' && !searchQuery && (
                <div className="space-y-6">
                  {(() => {
                    const customRef = courseContent.customReferensi;
                    if (customRef && customRef.length > 0) {
                      return (
                        <div className="mb-8 border-b border-navy-700/60 pb-6">
                          <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-slate-200">
                            <Layers className="text-gold" size={18} /> {course.code === 'AKM201' ? 'Bank Rumus & Format Praktik' : course.code === 'PJK201' ? 'Dasar Hukum & Regulasi Penting' : course.code === 'EKT109' ? 'Formula Sheet, Peta UAS & Checklist' : 'Materi Referensi Tambahan'}
                          </h3>
                          <div className="space-y-1">
                            {customRef.map((b, i) => (
                              <CourseBlockCard key={i} block={b} enableLegalStyling={course.code === 'PJK201'} enableEconomicStyling={course.code === 'EKT109'} />
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()}

                  <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 md:p-6">
                    <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                      <BookMarked className="text-blue-500" size={18} /> {course.code === 'PJK201' ? 'Rujukan Regulasi & Sumber Resmi' : course.code === 'EKT109' ? 'Buku & Acuan Akademik PTE' : 'Rujukan & Buku Rujukan Resmi'}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {course.code === 'PJK201'
                        ? 'Daftar regulasi dan sumber resmi yang menjadi dasar materi Perpajakan I.'
                        : course.code === 'EKT109'
                          ? 'Daftar buku, kontrak perkuliahan, dan acuan akademik yang digunakan untuk menyusun materi Pengantar Teori Ekonomi.'
                          : 'Daftar literatur resmi yang digunakan sebagai standar kurikulum mata kuliah ini.'}
                    </p>

                    <ul className="space-y-3">
                      {course.references &&
                        course.references.map((ref, idx) => (
                          <li key={idx} className="flex gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 dark:bg-blue-900/30 text-sm font-bold text-blue-600 dark:text-blue-400">
                              {idx + 1}
                            </span>
                            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{ref}</p>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'arsip' && !searchQuery && <ArsipViewerTab files={getArsipFiles(course.code)} />}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
