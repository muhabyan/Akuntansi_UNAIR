import React, { useState } from 'react';
import { ArrowLeft, Search, ExternalLink } from 'lucide-react';
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
  onToggleSort: () => void;
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
  onToggleSort,
}: CourseSidebarProps) {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="w-full">
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
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
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
              
              <div className="flex flex-col md:items-end w-full md:w-64 shrink-0">
                <div className="w-full">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-medium text-gray-500 dark:text-gray-400">Progress</span>
                    <span className="font-bold text-gray-900 dark:text-white">{percent}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-right">{completedCount} dari {totalCount} tatap muka selesai</p>
                </div>
              </div>
              
              <button
                onClick={() => setShowInfo(false)}
                className="absolute top-4 right-4 md:static text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 shrink-0"
              >
                Tutup
              </button>
            </div>
            
            <div className="relative mt-5">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cari materi, rumus, jurnal..."
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 py-2.5 pl-10 pr-3 text-sm font-medium text-gray-900 dark:text-white outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>
        )}

        {!showInfo && (
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowInfo(true)}
              className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-2"
            >
              Tampilkan info mata kuliah
            </button>
            <div className="relative w-64 mb-2">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cari materi..."
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-1.5 pl-8 pr-3 text-xs font-medium text-gray-900 dark:text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>
        )}
      </div>

      <CourseTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
        onToggleSort={onToggleSort}
        searchQuery={searchQuery}
      />
    </div>
  );
}
