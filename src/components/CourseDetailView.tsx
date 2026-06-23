import { lazy, Suspense, useState } from 'react';
import {
  ArrowLeft, Layers, Target, FileQuestion,
  BookMarked, Lightbulb, LayoutDashboard, ExternalLink,
} from 'lucide-react';
import MateriList from './MateriList';
import type { Course, CourseTabId } from '../types';

const QuizView = lazy(() => import('./QuizView'));
const FlashcardTab = lazy(() => import('./FlashcardTab'));
const PteFlashcardTab = lazy(() => import('./PteFlashcardTab'));
const BankSoalTab = lazy(() => import('./BankSoalTab'));
const ArsipViewerTab = lazy(() => import('./ArsipViewerTab'));
import { getArsipFiles } from '../data/arsipRegistry';

function TabLoader() {
  return (
    <div className="flex items-center justify-center py-20 text-gray-400">
      <div className="h-7 w-7 rounded-full border-2 border-gray-300 dark:border-gray-600 border-t-blue-500 animate-spin" />
    </div>
  );
}

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
  activeTab: CourseTabId;
  setActiveTab: (tab: CourseTabId) => void;
  onOpenReading: (tm: number) => void;
}

const TABS: { id: CourseTabId; label: string; icon: React.ReactNode }[] = [
  { id: 'tm1-7', label: 'Pra-UTS', icon: <Layers size={16} /> },
  { id: 'tm8-14', label: 'Pra-UAS', icon: <Layers size={16} /> },
  { id: 'flashcard', label: 'Flashcard', icon: <Lightbulb size={16} /> },
  { id: 'bank-soal', label: 'Bank Soal', icon: <FileQuestion size={16} /> },
  { id: 'quiz', label: 'Kuis', icon: <Target size={16} /> },
  { id: 'referensi', label: 'Referensi', icon: <BookMarked size={16} /> },
];

export default function CourseDetailView({ course, onBack, activeTab, setActiveTab, onOpenReading }: CourseDetailViewProps) {
  const [showInfo, setShowInfo] = useState(true);
  const arsipFiles = getArsipFiles(course.code);

  const visibleTabs = [...TABS];
  if (arsipFiles.length > 0) {
    visibleTabs.push({ id: 'arsip', label: 'Bocoran UAS', icon: <ExternalLink size={16} /> });
  }

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-8">
      {/* Back button + Course Info Header (collapsible) */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={16} /> Kembali
        </button>

        {showInfo && (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">Mata kuliah</p>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{course.name}</h2>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 font-semibold text-gray-600 dark:text-gray-300">{course.code}</span>
                  <span className="px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 font-semibold text-blue-700 dark:text-blue-300">{course.sks} SKS</span>
                  {course.prasyarat && <span className="text-gray-500">Prasyarat: {course.prasyarat}</span>}
                </div>
                {course.driveFolderUrl && (
                  <a
                    href={course.driveFolderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    <ExternalLink size={14} /> Folder Drive
                  </a>
                )}
              </div>
              <button
                onClick={() => setShowInfo(false)}
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 shrink-0"
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        {!showInfo && (
          <button
            onClick={() => setShowInfo(true)}
            className="text-xs text-gray-400 hover:text-blue-500 mb-2"
          >
            Tampilkan info mata kuliah
          </button>
        )}
      </div>

      {/* Horizontal Tab Bar */}
      <nav className="mb-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-1 overflow-x-auto hide-scrollbar -mb-px">
          {visibleTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area — Full Width */}
      <section className="pb-10">
        {activeTab === 'flashcard' ? (
          <Suspense fallback={<TabLoader />}>
            {course.code === 'EKT109' ? <PteFlashcardTab /> : <FlashcardTab course={course} />}
          </Suspense>
        ) : activeTab === 'tm1-7' || activeTab === 'tm8-14' ? (
          <MateriList course={course} range={activeTab} onOpenReading={onOpenReading} />
        ) : activeTab === 'quiz' ? (
          <Suspense fallback={<TabLoader />}><QuizView course={course} mode="exam" /></Suspense>
        ) : activeTab === 'bank-soal' ? (
          <Suspense fallback={<TabLoader />}><BankSoalTab course={course} /></Suspense>
        ) : activeTab === 'arsip' && arsipFiles.length > 0 ? (
          <Suspense fallback={<TabLoader />}><ArsipViewerTab files={arsipFiles} /></Suspense>
        ) : activeTab === 'referensi' && course.references && course.references.length > 0 ? (
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
              <BookMarked className="text-blue-500" size={20} /> Sumber & Referensi
            </h3>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">Buku teks dan rujukan resmi sesuai RPS/silabus mata kuliah ini.</p>
            <ul className="space-y-3">
              {course.references.map((ref, i) => (
                <li key={i} className="flex gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 dark:bg-blue-900/30 text-sm font-bold text-blue-600 dark:text-blue-400">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ref}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-400">
              <LayoutDashboard size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">Segera Hadir</h3>
            <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
              Konten untuk bagian{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">{visibleTabs.find(m => m.id === activeTab)?.label}</span>{' '}
              sedang dalam tahap penyusunan.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
