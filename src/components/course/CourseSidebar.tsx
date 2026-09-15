import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Search } from 'lucide-react';
import { SEMESTERS } from '../../data/courseData';
import { CourseIcon } from '../../lib/icons';
import type { Course } from '../../types';
import CourseTabs, { type TabType } from './CourseTabs';

interface TabItem {
  id: TabType;
  label: string;
  icon: React.ReactNode;
  count?: number;
}

interface CourseSidebarProps {
  course: Course;
  onBack: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  percent: number;
  completedCount: number;
  totalCount: number;
  tabs: TabItem[];
  activeTab: TabType;
  onTabChange: (id: TabType) => void;
}

export default function CourseSidebar({
  course,
  onBack,
  searchQuery,
  onSearchChange,
  percent,
  completedCount,
  totalCount,
  tabs,
  activeTab,
  onTabChange,
}: CourseSidebarProps) {
  const [showInfo, setShowInfo] = useState(true);
  const semester = SEMESTERS.find((item) =>
    item.groups.some((group) => group.courses.some((candidate) => candidate.code === course.code)),
  );

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
      >
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
                      <a href={course.driveFolderUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
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
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{completedCount} dari {totalCount} TM selesai</p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <span className="text-xl font-bold tabular-nums text-gray-900 dark:text-white">{percent}%</span>
                  <button type="button" onClick={() => setShowInfo(false)} className="min-h-11 rounded-lg px-2 text-xs font-semibold text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    Ringkas
                  </button>
                </div>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700" role="progressbar" aria-label={`Progress ${course.name}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
                <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-[width] duration-500" style={{ width: `${percent}%` }} />
              </div>
            </div>

          </div>
        ) : (
          <div className="flex min-h-14 items-center gap-3 px-5 py-2.5 md:px-6">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <CourseIcon iconKey={course.iconKey} size={17} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-gray-900 dark:text-white">{course.name}</p>
              <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">{course.code} · {completedCount}/{totalCount} TM · {percent}%</p>
            </div>
            <button type="button" onClick={() => setShowInfo(true)} className="min-h-11 rounded-lg px-3 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/35">
              Detail
            </button>
          </div>
        )}

        <div className="border-t border-gray-100 px-4 py-3 dark:border-gray-800 md:px-5">
          <label className="relative block">
            <span className="sr-only">Cari materi dalam mata kuliah</span>
            <Search size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Cari materi, rumus, atau jurnal…"
              className="min-h-11 w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 text-sm font-medium text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </label>
        </div>
      </header>

      <CourseTabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} searchQuery={searchQuery} />
    </div>
  );
}
