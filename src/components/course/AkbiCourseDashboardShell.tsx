import { useMemo, useState } from 'react';
import {
  ArrowLeft, ArrowRight, BookMarked, Check, FileQuestion, Layers, Search, Target
} from 'lucide-react';
import type { ContentBlock, Course, Reading } from '../../types';
import type { ReviewReadingKey } from '../../data/courses/courseRegistry';
import { hasBankSoal } from '../../data/banksoal';
import type { TabType } from './CourseTabs';
import CourseBlockCard from './CourseBlockCard';
import QuizCard from './QuizCard';
import FlashcardGrid from './FlashcardGrid';
import BankQuestionList from './BankQuestionList';
import { getArsipFiles } from '../../data/arsipRegistry';
import { lazy, Suspense } from 'react';

const ArsipViewerTab = lazy(() => import('../ArsipViewerTab'));

export type AkbiMaterialPhase = 'pra_uts' | 'pra_uas';
export type AkbiPrimaryTab = 'materi' | 'flashcards' | 'bank_soal' | 'quiz' | 'referensi' | 'arsip';

interface AkbiCourseDashboardShellProps {
  course: Course;
  readings: Record<number, Reading>;
  reviews: Partial<Record<ReviewReadingKey, Reading>>;
  customReferensi?: ContentBlock[];
  activeTab: TabType;
  materialPhase: AkbiMaterialPhase;
  simulationSetId: string;
  completedCount: number;
  totalCount: number;
  isDone: (key: string) => boolean;
  materialKeyFor: (tm: number) => string;
  onToggleDone: (tm: number) => void;
  onBack: () => void;
  onPrimaryTabChange: (tab: AkbiPrimaryTab) => void;
  onMaterialPhaseChange: (phase: AkbiMaterialPhase) => void;
  onSimulationSetIdChange: (setId: string) => void;
  onOpenMeeting: (tm: number) => void;
  onOpenReview: (key: ReviewReadingKey) => void;
}

export function getAkbiPrimaryTab(activeTab: TabType): AkbiPrimaryTab {
  if (activeTab === 'pra_uts' || activeTab === 'pra_uas') return 'materi';
  return activeTab;
}

export default function AkbiCourseDashboardShell({
  course,
  readings,
  reviews,
  customReferensi,
  activeTab,
  materialPhase,
  simulationSetId,
  completedCount,
  totalCount,
  isDone,
  materialKeyFor,
  onToggleDone,
  onBack,
  onPrimaryTabChange,
  onMaterialPhaseChange,
  onSimulationSetIdChange,
  onOpenMeeting,
  onOpenReview,
}: AkbiCourseDashboardShellProps) {
  const [materialQuery, setMaterialQuery] = useState('');
  const activePrimaryTab = getAkbiPrimaryTab(activeTab);
  const availableTms = useMemo(
    () => Object.keys(readings).map(Number).filter(Number.isFinite).sort((a, b) => a - b),
    [readings],
  );
  const firstIncomplete = availableTms.find((tm) => !isDone(materialKeyFor(tm))) ?? null;
  const actionTm = firstIncomplete ?? availableTms[0] ?? null;
  const actionReading = actionTm === null ? null : readings[actionTm];
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const arsipFiles = getArsipFiles(course.code);

  const primaryItems = [
    { id: 'materi' as const, label: 'Materi', visible: availableTms.length > 0 },
    { id: 'flashcards' as const, label: 'Flashcard', visible: (course.flashcardCount ?? course.flashcards?.length ?? 0) > 0 },
    { id: 'bank_soal' as const, label: 'Bank Soal', visible: hasBankSoal(course.code) },
    { id: 'quiz' as const, label: 'Simulasi', visible: Boolean(reviews.uts && reviews.uas) },
    { id: 'referensi' as const, label: 'Referensi', visible: Boolean(customReferensi?.length || course.references?.length) },
    { id: 'arsip' as const, label: 'Bocoran UAS', visible: arsipFiles.length > 0 },
  ].filter((item) => item.visible);

  const phaseTms = availableTms.filter((tm) => materialPhase === 'pra_uts' ? tm <= 7 : tm >= 8);
  const normalizedQuery = materialQuery.trim().toLowerCase();
  const visibleTms = phaseTms.filter((tm) => {
    if (!normalizedQuery) return true;
    const reading = readings[tm];
    return `tm ${tm} ${reading?.title ?? ''} ${reading?.intro ?? ''}`.toLowerCase().includes(normalizedQuery);
  });
  const reviewKey: ReviewReadingKey = materialPhase === 'pra_uts' ? 'uts' : 'uas';
  const reviewReading = reviews[reviewKey];

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-8 pb-10">
      {/* Header Mirip dengan CourseDetailView */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={16} /> Kembali
        </button>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mb-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">Mata kuliah</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{course.name}</h2>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 font-semibold text-gray-600 dark:text-gray-300">{course.code}</span>
                <span className="px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 font-semibold text-blue-700 dark:text-blue-300">{course.sks} SKS</span>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end w-full md:w-64 shrink-0">
              <div className="w-full">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-gray-500 dark:text-gray-400">Progress</span>
                  <span className="font-bold text-gray-900 dark:text-white">{progressPercent}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-right">{completedCount} dari {totalCount} pertemuan selesai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lanjutkan Action Box */}
        {actionTm !== null && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-5 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wider">Materi Berikutnya</p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">TM {actionReading?.tm} · {actionReading?.title}</h3>
            </div>
            <button
              onClick={() => onOpenMeeting(actionTm)}
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Lanjutkan <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <nav className="mb-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-1 overflow-x-auto hide-scrollbar -mb-px">
          {primaryItems.map((item) => {
            const active = activePrimaryTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onPrimaryTabChange(item.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  active
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Content */}
      <main>
        {activePrimaryTab === 'materi' && (
          <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tatap Muka {materialPhase === 'pra_uts' ? '1–7' : '8–14'}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{visibleTms.length} materi tersedia</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
                  {([
                    ['pra_uts', 'Pra-UTS'],
                    ['pra_uas', 'Pra-UAS'],
                  ] as const).map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() => onMaterialPhaseChange(value)}
                      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        materialPhase === value
                          ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    value={materialQuery}
                    onChange={(e) => setMaterialQuery(e.target.value)}
                    placeholder="Cari materi..."
                    className="w-full sm:w-48 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-2 pl-9 pr-3 text-sm text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {visibleTms.map((tm) => {
                const reading = readings[tm];
                const done = isDone(materialKeyFor(tm));
                return (
                  <div key={tm} className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${done ? 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50' : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 shadow-sm'}`}>
                    <button
                      onClick={() => onToggleDone(tm)}
                      className={`shrink-0 flex items-center justify-center h-6 w-6 rounded-md border ${done ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 dark:border-gray-500 text-transparent hover:border-blue-500'}`}
                    >
                      <Check size={14} strokeWidth={3} />
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">TM {tm}</p>
                      <h3 className={`text-base font-bold truncate ${done ? 'text-gray-600 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>{reading.title}</h3>
                    </div>
                    <button
                      onClick={() => onOpenMeeting(tm)}
                      className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
                      Buka <ArrowRight size={16} />
                    </button>
                  </div>
                );
              })}
              {visibleTms.length === 0 && (
                <div className="py-12 text-center text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  Tidak ada materi yang cocok.
                </div>
              )}
            </div>

            {reviewReading && (
              <div className="mt-8 p-5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wider">{materialPhase === 'pra_uts' ? 'Latihan fase Pra-UTS' : 'Latihan fase Pra-UAS'}</p>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{reviewReading.title}</h3>
                </div>
                <button
                  onClick={() => onOpenReview(reviewKey)}
                  className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
                >
                  Buka latihan <ArrowRight size={16} />
                </button>
              </div>
            )}
          </section>
        )}

        {activePrimaryTab === 'flashcards' && (
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"><Layers className="text-blue-500" size={20} /> Flashcard</h2>
            </div>
            <FlashcardGrid course={course} />
          </section>
        )}

        {activePrimaryTab === 'bank_soal' && (
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"><FileQuestion className="text-blue-500" size={20} /> Bank Soal</h2>
            </div>
            <BankQuestionList course={course} />
          </section>
        )}

        {activePrimaryTab === 'quiz' && (
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"><Target className="text-blue-500" size={20} /> Simulasi UTS & UAS</h2>
            </div>
            <QuizCard
              course={course}
              selectedSetId={simulationSetId}
              onSelectedSetIdChange={onSimulationSetIdChange}
            />
          </section>
        )}

        {activePrimaryTab === 'referensi' && (
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"><BookMarked className="text-blue-500" size={20} /> Referensi & Bank Rumus</h2>
            </div>
            {customReferensi && customReferensi.length > 0 && (
              <div className="mb-8 space-y-4">
                {customReferensi.map((block, index) => <CourseBlockCard key={index} block={block} />)}
              </div>
            )}
            <ul className="space-y-3">
              {(course.references ?? []).map((ref, idx) => (
                <li key={idx} className="flex gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 dark:bg-blue-900/30 text-sm font-bold text-blue-600 dark:text-blue-400">
                    {idx + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{ref}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {activePrimaryTab === 'arsip' && (
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">Arsip & Bocoran UAS</h2>
            </div>
            <Suspense fallback={<div>Memuat arsip...</div>}>
              <ArsipViewerTab files={arsipFiles} />
            </Suspense>
          </section>
        )}
      </main>
    </div>
  );
}
