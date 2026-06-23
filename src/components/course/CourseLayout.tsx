import { useState, useMemo, useEffect } from 'react';
import {
  Award,
  BookMarked,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  Layers,
  PlayCircle,
  Sparkles,
  Target,
  X,
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
import { type TabType } from './CourseTabs';

interface CourseLayoutProps {
  course: Course;
  initialTab?: CourseTabId;
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

// ----------------- DETAIL BACAAN TATAP MUKA -----------------
function ReadingPanel({
  reading,
  onBack,
  onPrev,
  onNext,
  courseCode,
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
  isFirst: boolean;
  isLast: boolean;
  isDone: (key: string) => boolean;
  toggle: (key: string) => void;
}) {
  const key = materialKey(courseCode, reading.tm);
  const done = isDone(key);
  const isSimulation = reading.title === 'Simulasi UTS' || reading.title === 'Simulasi UAS' || reading.tm === 0 || reading.tm === 15;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [reading.tm]);

  return (
    <>
      <article className="animate-fade-in-up">
      <CourseHeader reading={reading} onBack={onBack} />

      <div className="akbi-reading-flow course-reading-panel mb-8 overflow-hidden rounded-[1.85rem] p-4 md:p-6 xl:p-7">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-navy-500/45 pb-3">
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-gold">
            <FileText size={15} /> {isSimulation ? 'Mode Simulasi Ujian' : 'Mode Baca Materi'}
          </div>
        </div>
        <div className="space-y-6 md:space-y-8">
          {reading.blocks.map((b, i) => (
            <CourseBlockCard key={i} block={b} isSimulation={isSimulation} enableLegalStyling={courseCode === 'PJK201'} enableEconomicStyling={courseCode === 'EKT109'} />
          ))}
        </div>
        {/* <TTSPlayer title={reading.title} intro={''} blocks={reading.blocks} /> */}
      </div>

      <button
        onClick={() => toggle(key)}
        className={`course-toggle-btn w-full flex items-center justify-center gap-2 rounded-2xl border px-4 py-3.5 font-bold ${
          done
            ? 'border-gold bg-gold text-navy-950 shadow-lg shadow-gold/20'
            : 'border-gold/30 bg-gold/10 text-gold hover:bg-gold hover:text-navy-950'
        }`}
      >
        <CheckCircle2 size={18} /> {done ? 'Sudah dipelajari' : 'Tandai sudah dipelajari'}
      </button>

      <nav className="mt-8 flex items-center justify-between gap-3 border-t border-navy-700/60 pt-6">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="course-nav-btn flex flex-1 items-center gap-2 rounded-xl border border-navy-500/70 bg-navy-850/60 px-4 py-3 text-sm text-slate-300 hover:border-gold/50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={16} /> Sebelumnya
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          className="course-nav-btn flex flex-1 items-center justify-end gap-2 rounded-xl border border-navy-500/70 bg-navy-850/60 px-4 py-3 text-sm text-slate-300 hover:border-gold/50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Berikutnya <ChevronRight size={16} />
        </button>
      </nav>

      </article>

      {/* Floating Quick Navigation */}
      <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 drop-shadow-2xl md:bottom-8 md:right-8">
        <button
          onClick={onBack}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white transition-all hover:scale-105 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          title="Tutup & Kembali ke Daftar Materi"
        >
          <X size={20} />
        </button>
        <div className="flex h-11 items-center rounded-full bg-slate-900 px-1 text-white dark:bg-white dark:text-slate-900">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className="flex h-9 w-10 items-center justify-center rounded-full transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30 dark:hover:bg-slate-300"
            title="Materi Sebelumnya"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="h-4 w-[1px] bg-slate-700 dark:bg-slate-400"></div>
          <button
            onClick={onNext}
            disabled={isLast}
            className="flex h-9 w-10 items-center justify-center rounded-full transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30 dark:hover:bg-slate-300"
            title="Materi Berikutnya"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

// ----------------- DASHBOARD UNIVERSAL (PTE-STYLE) -----------------
function UniversalCourseDashboard({
  course,
  percent,
  completedCount,
  totalCount,
  utsCount,
  uasCount,
  onStart,
  onPraUts,
  onPraUas,
  onQuiz,
  onBank,
  onFlashcard,
  onSimUts,
  onSimUas,
}: {
  course: Course;
  percent: number;
  completedCount: number;
  totalCount: number;
  utsCount: number;
  uasCount: number;
  onStart: () => void;
  onPraUts: () => void;
  onPraUas: () => void;
  onQuiz: () => void;
  onBank: () => void;
  onFlashcard: () => void;
  onSimUts?: () => void;
  onSimUas?: () => void;
}) {
  const ringStyle = {
    background: `conic-gradient(#3b82f6 ${percent * 3.6}deg, transparent 0deg)`,
  };

  const isAkm1 = course.code === 'AKK201';
  const isPjk = course.code === 'PJK201';
  
  const introText = isAkm1
    ? 'Dashboard AKM I untuk membaca Pra-UTS dan Pra-UAS, mengerjakan kuis, bank soal, flashcard, lalu masuk ke simulasi UTS/UAS 2 jam.'
    : isPjk
      ? 'Materi Perpajakan I dibagi jelas menjadi Pra-UTS TM 1-7 dan Pra-UAS TM 8-14. Gunakan jalur materi untuk membaca konsep, lalu lanjutkan latihan.'
      : 'Dashboard belajar untuk membaca materi, mengerjakan latihan interaktif, dan simulasi ujian. Disusun agar pengalaman belajar terasa premium, ringan, dan fokus.';

  return (
    <section className="mb-8 overflow-hidden rounded-[2.5rem] border border-gray-200/60 dark:border-navy-600/50 bg-white dark:bg-navy-900/40 p-5 shadow-lg shadow-gray-200/50 dark:shadow-none md:p-7 xl:p-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" />
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr] relative z-10">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-100 dark:bg-blue-900/40 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-blue-700 dark:text-blue-300 ring-1 ring-blue-500/20">
              Course Utama
            </span>
            <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/20">
              Terstruktur
            </span>
          </div>

          <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-slate-100 md:text-4xl xl:text-[2.75rem]">
            {course.name}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-slate-300 md:text-[15px] md:leading-8">
            {introText}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onStart} className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5">
              <PlayCircle size={18} /> Lanjutkan Belajar
            </button>
            <button onClick={onPraUts} className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 px-6 py-3.5 text-sm font-bold text-gray-700 dark:text-slate-200 shadow-sm transition-all hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-navy-700/50 hover:text-blue-600 dark:hover:text-blue-300">
              <Layers size={18} /> Pra-UTS
            </button>
            <button onClick={onPraUas} className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-800 px-6 py-3.5 text-sm font-bold text-gray-700 dark:text-slate-200 shadow-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-navy-700/50 hover:text-emerald-600 dark:hover:text-emerald-300">
              <Award size={18} /> Pra-UAS
            </button>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-gray-200/80 dark:border-navy-600/60 bg-gray-50/80 dark:bg-navy-950/40 p-6 backdrop-blur-sm shadow-inner">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 dark:text-slate-400">Progress Belajar</p>
              <div className="mt-2 flex items-baseline gap-1">
                <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-slate-100">{percent}</h2>
                <span className="text-lg font-bold text-gray-500 dark:text-slate-400">%</span>
              </div>
              <p className="mt-1 text-xs font-semibold text-gray-500 dark:text-slate-400">{completedCount} dari {totalCount} TM selesai</p>
            </div>
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 dark:bg-navy-800">
              <div className="absolute inset-0 rounded-full" style={ringStyle} />
              <div className="absolute inset-1.5 flex items-center justify-center rounded-full bg-white dark:bg-navy-900 shadow-sm">
                <span className="text-sm font-black text-blue-600 dark:text-blue-400">
                  {completedCount}/{totalCount}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white dark:bg-navy-800 p-4 border border-gray-100 dark:border-navy-700 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">Pra-UTS</p>
              <p className="mt-1.5 text-xl font-black text-gray-900 dark:text-slate-100">{utsCount} TM</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">Dasar Konsep</p>
            </div>
            <div className="rounded-2xl bg-white dark:bg-navy-800 p-4 border border-gray-100 dark:border-navy-700 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Pra-UAS</p>
              <p className="mt-1.5 text-xl font-black text-gray-900 dark:text-slate-100">{uasCount} TM</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">Materi Lanjut</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3 relative z-10">
        <button onClick={onFlashcard} className="group flex items-start gap-4 rounded-[1.5rem] border border-gray-200/80 dark:border-navy-600/60 bg-gray-50/50 dark:bg-navy-900/30 p-5 text-left transition-all hover:bg-white dark:hover:bg-navy-800 hover:shadow-md hover:border-gold/40">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 dark:bg-gold/10 text-amber-600 dark:text-gold transition-transform group-hover:scale-110">
            <Layers size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-wider text-gray-500 dark:text-slate-400">Flashcard</p>
            <h3 className="mt-1 text-base font-bold text-gray-900 dark:text-slate-100">Review Cepat</h3>
            <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-slate-400">Hafalan konsep & rumus</p>
          </div>
        </button>
        <button onClick={onBank} className="group flex items-start gap-4 rounded-[1.5rem] border border-gray-200/80 dark:border-navy-600/60 bg-gray-50/50 dark:bg-navy-900/30 p-5 text-left transition-all hover:bg-white dark:hover:bg-navy-800 hover:shadow-md hover:border-emerald-400/40">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-110">
            <ClipboardList size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-wider text-gray-500 dark:text-slate-400">Bank Soal</p>
            <h3 className="mt-1 text-base font-bold text-gray-900 dark:text-slate-100">Latihan Mandiri</h3>
            <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-slate-400">Latihan terpandu per topik</p>
          </div>
        </button>
        <button onClick={onQuiz} className="group flex items-start gap-4 rounded-[1.5rem] border border-gray-200/80 dark:border-navy-600/60 bg-gray-50/50 dark:bg-navy-900/30 p-5 text-left transition-all hover:bg-white dark:hover:bg-navy-800 hover:shadow-md hover:border-blue-400/40">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110">
            <Target size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-wider text-gray-500 dark:text-slate-400">Ujian</p>
            <h3 className="mt-1 text-base font-bold text-gray-900 dark:text-slate-100">Simulasi Waktu</h3>
            <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-slate-400">Latihan dengan timer</p>
          </div>
        </button>
      </div>

      {(onSimUts || onSimUas) && (
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-gray-200/60 dark:border-navy-700/50">
          {onSimUts && (
            <button onClick={onSimUts} className="rounded-full bg-gray-100 dark:bg-navy-800 px-4 py-2 text-xs font-bold text-gray-600 dark:text-slate-300 transition-colors hover:bg-gray-200 dark:hover:bg-navy-700">
              Akses Simulasi UTS
            </button>
          )}
          {onSimUas && (
            <button onClick={onSimUas} className="rounded-full bg-gray-100 dark:bg-navy-800 px-4 py-2 text-xs font-bold text-gray-600 dark:text-slate-300 transition-colors hover:bg-gray-200 dark:hover:bg-navy-700">
              Akses Simulasi UAS
            </button>
          )}
        </div>
      )}
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
  onToggle,
  onOpen,
}: {
  tmNum: number;
  reading: Reading;
  checked: boolean;
  onToggle: () => void;
  onOpen: () => void;
}) {
  return (
    <div className={`group flex items-start gap-3 rounded-xl border p-4 shadow-sm transition-all hover:shadow-md md:gap-4 md:p-5 ${checked ? 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50' : 'border-gray-200 bg-white hover:border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500'}`}>
      <div className="pt-1">
        <ProgressCheckbox checked={checked} onToggle={onToggle} />
      </div>

      <div onClick={onOpen} className="min-w-0 flex-1 cursor-pointer text-left">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            TM {tmNum}
          </span>
          {reading.ref && (
            <span className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
              {reading.ref}
            </span>
          )}
          {checked && (
            <span className="rounded-md bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Selesai
            </span>
          )}
        </div>
        <h3 className={`text-base font-bold leading-snug md:text-lg transition-colors ${checked ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'}`}>
          {reading.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {renderText(reading.intro)}
        </p>
      </div>

      <button
        onClick={onOpen}
        className="flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 px-3 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white md:px-4"
      >
        <BookOpen size={14} /> <span className="hidden sm:inline">Buka</span>
      </button>
    </div>
  );
}

// ----------------- CONTAINER SHELL UTAMA -----------------
export default function CourseLayout({ course, initialTab = 'tm1-7', onBack }: CourseLayoutProps) {
  const { isDone, toggle } = useStudyProgress();
  const [activeTab, setActiveTab] = useState<TabType>(() => mapInitialTab(initialTab));
  const [searchQuery, setSearchQuery] = useState('');
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const [selectedMeetingTm, setSelectedMeetingTm] = useState<number | null>(null);
  const [selectedReviewKey, setSelectedReviewKey] = useState<ReviewReadingKey | null>(null);
  const [courseContent, setCourseContent] = useState<LoadedCourseContent | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [contentError, setContentError] = useState<string | null>(null);

  useEffect(() => {
    setActiveTab(mapInitialTab(initialTab));
    setSearchQuery('');
    setSelectedMeetingTm(null);
    setSelectedReviewKey(null);
  }, [course.code, initialTab]);

  useEffect(() => {
    let isActive = true;
    setIsLoadingContent(true);
    setContentError(null);
    setCourseContent(null);
    setSelectedMeetingTm(null);
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



  const tabs = useMemo(() => {
    const isPjk = course.code === 'PJK201';
    const list: { id: TabType; label: string; icon: React.ReactNode; count?: number }[] = [
      {
        id: 'pra_uts',
        label: isPjk ? 'Materi Pra-UTS (TM 1-7)' : reviewUtsReading ? 'Pra-UTS + Simulasi UTS' : 'Pra-UTS',
        icon: <Layers size={16} />,
        count: utsTms.length + (reviewUtsReading ? 1 : 0),
      },
      {
        id: 'pra_uas',
        label: isPjk ? 'Materi Pra-UAS (TM 8-14)' : reviewUasReading ? 'Pra-UAS + Simulasi UAS' : 'Pra-UAS',
        icon: <Award size={16} />,
        count: uasTms.length + (reviewUasReading ? 1 : 0),
      },
    ];
    if ((course.flashcardCount ?? course.flashcards?.length ?? 0) > 0) {
      list.push({ id: 'flashcards', label: 'Flashcard & Rangkuman', icon: <Layers size={16} /> });
    }
    list.push({ id: 'quiz', label: isPjk || course.code === 'EKT109' ? 'Simulasi UTS & UAS' : 'Kuis Interaktif', icon: <Target size={16} /> });
    list.push({ id: 'bank_soal', label: isPjk ? 'Bank Soal' : 'Bank Soal Praktik', icon: <ClipboardList size={16} /> });
    list.push({ id: 'referensi', label: course.code === 'AKM201' ? 'Referensi & Bank Rumus' : isPjk ? 'Referensi & Regulasi' : course.code === 'EKT109' ? 'Formula, Checklist & Referensi' : 'Referensi & Buku', icon: <BookMarked size={16} /> });
    
    if (getArsipFiles(course.code).length > 0) {
      list.push({ id: 'arsip', label: 'Bocoran UAS', icon: <BookMarked size={16} /> });
    }
    
    return list;
  }, [course, utsTms.length, uasTms.length, reviewUtsReading, reviewUasReading]);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToReview = (key: ReviewReadingKey) => {
    setSelectedMeetingTm(null);
    setSelectedReviewKey(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="mx-auto max-w-5xl px-4 md:px-8">
      <div className="flex flex-col">
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
          onToggleSort={() => setIsSortedAsc(!isSortedAsc)}
        />

        <main className="relative min-w-0 flex-1 pb-10">
          {currentReading ? (
            <ReadingPanel
              reading={currentReading}
              courseCode={course.code}
              onBack={() => {
                setSelectedMeetingTm(null);
                setSelectedReviewKey(null);
              }}
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
                  course={course}
                  percent={stats.percent}
                  completedCount={stats.completed}
                  totalCount={stats.total}
                  utsCount={utsTms.length}
                  uasCount={uasTms.length}
                  onStart={() => {
                    if (nextTm !== null) navigateToMeeting(nextTm);
                  }}
                  onPraUts={() => switchTab('pra_uts')}
                  onPraUas={() => switchTab('pra_uas')}
                  onQuiz={() => switchTab('quiz')}
                  onBank={() => switchTab('bank_soal')}
                  onFlashcard={() => switchTab('flashcards')}
                  onSimUts={() => navigateToReview('uts')}
                  onSimUas={() => navigateToReview('uas')}
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
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">{course.name}</span>
                      <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                        {tabs.find((t) => t.id === activeTab)?.label}
                      </h1>
                    </div>
                    {(activeTab === 'pra_uts' || activeTab === 'pra_uas') && (
                      <div className="rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                        {filteredTms.length} TM · urutan {isSortedAsc ? 'naik' : 'turun'}
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
                <div className="space-y-3">
                  {filteredTms.length === 0 && filteredSpecialReviewCount === 0 && filteredToolkitCount === 0 ? (
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 py-12 text-center text-sm text-gray-500 dark:text-gray-400">Tidak ada materi yang cocok.</div>
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
                          onToggle={() => toggle(key)}
                          onOpen={() => navigateToMeeting(tmNum)}
                        />
                      );
                    })
                  )}

                  {((!searchQuery && activeTab === 'pra_uts') || reviewUtsMatchesSearch) && reviewUtsReading && (
                    <ReviewReadingCard
                      reading={reviewUtsReading}
                      label="Simulasi UTS"
                      onOpen={() => navigateToReview('uts')}
                    />
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
