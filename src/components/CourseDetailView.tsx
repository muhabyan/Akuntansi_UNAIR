import { lazy, Suspense, useEffect, useState } from 'react';
import {
  ArrowLeft, BookMarked, ExternalLink, FileQuestion,
  Layers, Lightbulb, LayoutDashboard, Target,
} from 'lucide-react';
import { SEMESTERS } from '../data/courseData';
import { getArsipFiles } from '../data/arsipRegistry';
import { materialKey, useStudyProgress } from '../hooks/useStudyProgress';
import { CourseIcon } from '../lib/icons';
import type { Course, CourseTabId } from '../types';
import MateriList from './MateriList';

const QuizView = lazy(() => import('./QuizView'));
const FlashcardTab = lazy(() => import('./FlashcardTab'));
const BankSoalTab = lazy(() => import('./BankSoalTab'));
const ArsipViewerTab = lazy(() => import('./ArsipViewerTab'));

function TabLoader() {
  return (
    <div className="flex items-center justify-center py-20 text-gray-400">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500 dark:border-gray-600" />
    </div>
  );
}

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
  activeTab: CourseTabId;
  setActiveTab: (tab: CourseTabId) => void;
  onOpenReading: (tm: number) => void;
  activeQuizSetId?: string | null;
}

const TABS: { id: CourseTabId; label: string; icon: React.ReactNode }[] = [
  { id: 'tm1-7', label: 'TM 1–7', icon: <Layers size={16} /> },
  { id: 'tm8-14', label: 'TM 8–14', icon: <Layers size={16} /> },
  { id: 'flashcard', label: 'Flashcard', icon: <Lightbulb size={16} /> },
  { id: 'bank-soal', label: 'Bank Soal', icon: <FileQuestion size={16} /> },
  { id: 'quiz', label: 'Kuis / Ujian', icon: <Target size={16} /> },
  { id: 'referensi', label: 'Referensi', icon: <BookMarked size={16} /> },
];

export default function CourseDetailView({ course, onBack, activeTab, setActiveTab, onOpenReading, activeQuizSetId }: CourseDetailViewProps) {
  const [showInfo, setShowInfo] = useState(true);
  const [localQuizSetId, setLocalQuizSetId] = useState<string | undefined>(activeQuizSetId || undefined);
  const { countDone } = useStudyProgress();

  useEffect(() => {
    if (activeQuizSetId) setLocalQuizSetId(activeQuizSetId);
  }, [activeQuizSetId]);

  const arsipFiles = getArsipFiles(course.code);
  const visibleTabs = [...TABS];
  if (arsipFiles.length > 0) visibleTabs.push({ id: 'arsip', label: 'Arsip UAS', icon: <ExternalLink size={16} /> });

  const semester = SEMESTERS.find((item) =>
    item.groups.some((group) => group.courses.some((candidate) => candidate.code === course.code)),
  );
  const allMaterials = [...(course.materiTM1_7 ?? []), ...(course.materiTM8_14 ?? [])];
  const completedCount = countDone(allMaterials.map((material) => materialKey(course.code, material.tm)));
  const progressPercent = allMaterials.length > 0 ? Math.round((completedCount / allMaterials.length) * 100) : 0;
  const learningTabs = visibleTabs.filter((tab) => tab.id === 'tm1-7' || tab.id === 'tm8-14');
  const supportingTabs = visibleTabs.filter((tab) => tab.id !== 'tm1-7' && tab.id !== 'tm8-14');

  return (
    <div className="-mt-12 mx-auto max-w-5xl px-4 md:mt-0 md:px-8">
      <button type="button" onClick={onBack} className="mb-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
        <ArrowLeft size={16} /> Kembali
      </button>

      <header className="relative mb-4 overflow-hidden rounded-2xl border border-blue-100 bg-white/90 shadow-sm shadow-blue-950/5 dark:border-blue-900/45 dark:bg-gray-900/90">
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600" />
        {showInfo ? (
          <div className="grid gap-5 px-5 py-5 md:grid-cols-[minmax(0,1fr)_18rem] md:items-center md:px-6">
            <div className="flex min-w-0 gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/20">
                <CourseIcon iconKey={course.iconKey} size={21} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                  {semester ? `Semester ${semester.number} · ` : ''}{course.code} · {course.sks} SKS
                </p>
                <h1 className="mt-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">{course.name}</h1>
                {(course.prasyarat || course.driveFolderUrl) && (
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
                    {course.prasyarat && <span>Prasyarat: {course.prasyarat}</span>}
                    {course.driveFolderUrl && (
                      <a href={course.driveFolderUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
                        <ExternalLink size={13} /> Folder sumber
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4 dark:border-gray-800 md:border-l md:border-t-0 md:py-1 md:pl-6">
              <div className="mb-2 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">Progress materi</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{completedCount} dari {allMaterials.length} TM selesai</p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <span className="text-xl font-bold tabular-nums text-gray-900 dark:text-white">{progressPercent}%</span>
                  <button type="button" onClick={() => setShowInfo(false)} className="min-h-11 rounded-lg px-2 text-xs font-semibold text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    Ringkas
                  </button>
                </div>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700" role="progressbar" aria-label={`Progress ${course.name}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPercent}>
                <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-[width] duration-500" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex min-h-14 items-center gap-3 px-5 py-2.5 md:px-6">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white"><CourseIcon iconKey={course.iconKey} size={17} /></div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-gray-900 dark:text-white">{course.name}</p>
              <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">{course.code} · {completedCount}/{allMaterials.length} TM · {progressPercent}%</p>
            </div>
            <button type="button" onClick={() => setShowInfo(true)} className="min-h-11 rounded-lg px-3 text-xs font-semibold text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/35">Detail</button>
          </div>
        )}
      </header>

      <nav className="course-workspace-nav mb-6" aria-label="Navigasi ruang belajar">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white/80 dark:border-gray-700 dark:bg-gray-800/70">
          <div className="border-b border-gray-200 px-4 py-2.5 dark:border-gray-700"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Jalur materi</p></div>
          <div className="grid grid-cols-2">
            {learningTabs.map((tab, index) => {
              const active = activeTab === tab.id;
              return (
                <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} aria-current={active ? 'page' : undefined} className={`relative flex min-h-14 items-center gap-3 px-4 py-3 text-left transition-colors md:px-5 ${index === 0 ? 'border-r border-gray-200 dark:border-gray-700' : ''} ${active ? 'bg-gradient-to-r from-blue-50 to-indigo-50/60 text-blue-700 dark:from-blue-950/45 dark:to-indigo-950/25 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/55'}`}>
                  <span className={active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}>{tab.icon}</span>
                  <span className="text-sm font-bold">{tab.label}</span>
                  {active && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-3">
          <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Alat belajar</p>
          <div className="grid grid-cols-2 gap-1.5 min-[360px]:grid-cols-3 sm:flex sm:flex-wrap sm:gap-2">
            {supportingTabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} aria-current={active ? 'page' : undefined} className={`inline-flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-semibold transition-colors sm:px-3 ${active ? 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300' : 'border-transparent text-gray-500 hover:border-gray-200 hover:bg-white dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-800'}`}>
                  <span className="shrink-0">{tab.icon}</span><span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <section className="pb-10">
        {activeTab === 'flashcard' ? (
          <Suspense fallback={<TabLoader />}><FlashcardTab course={course} /></Suspense>
        ) : activeTab === 'tm1-7' || activeTab === 'tm8-14' ? (
          <MateriList course={course} range={activeTab} onOpenReading={onOpenReading} />
        ) : activeTab === 'quiz' ? (
          <Suspense fallback={<TabLoader />}><QuizView course={course} mode="exam" selectedSetId={localQuizSetId} onSelectedSetIdChange={setLocalQuizSetId} /></Suspense>
        ) : activeTab === 'bank-soal' ? (
          <Suspense fallback={<TabLoader />}><BankSoalTab course={course} /></Suspense>
        ) : activeTab === 'arsip' && arsipFiles.length > 0 ? (
          <Suspense fallback={<TabLoader />}><ArsipViewerTab files={arsipFiles} /></Suspense>
        ) : activeTab === 'referensi' && course.references && course.references.length > 0 ? (
          <div>
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white"><BookMarked className="text-blue-500" size={20} /> Sumber & Referensi</h2>
            <p className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400">Buku teks dan rujukan resmi sesuai RPS/silabus mata kuliah ini.</p>
            <ol className="overflow-hidden rounded-xl border border-gray-200 bg-white/75 dark:border-gray-700 dark:bg-gray-800/60">
              {course.references.map((ref, index) => (
                <li key={index} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-b border-gray-200 px-4 py-3.5 last:border-b-0 dark:border-gray-700">
                  <span className="font-bold tabular-nums text-blue-600 dark:text-blue-400">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{ref}</p>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-gray-800"><LayoutDashboard size={28} /></div>
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">Segera Hadir</h3>
            <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">Konten untuk bagian <span className="font-semibold text-blue-600 dark:text-blue-400">{visibleTabs.find((tab) => tab.id === activeTab)?.label}</span> sedang dalam tahap penyusunan.</p>
          </div>
        )}
      </section>
    </div>
  );
}
