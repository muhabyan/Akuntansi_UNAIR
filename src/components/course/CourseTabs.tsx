import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export type TabType = 'pra_uts' | 'pra_uas' | 'quiz' | 'flashcards' | 'bank_soal' | 'referensi' | 'arsip';

interface TabItem {
  id: TabType;
  label: string;
  icon: React.ReactNode;
  count?: number;
}

interface CourseTabsProps {
  tabs: TabItem[];
  activeTab: TabType;
  onTabChange: (id: TabType) => void;
  onToggleSort: () => void;
  searchQuery: string;
}

export default function CourseTabs({
  tabs,
  activeTab,
  onTabChange,
  onToggleSort,
  searchQuery,
}: CourseTabsProps) {
  const canSort = activeTab !== 'referensi' && activeTab !== 'quiz' && activeTab !== 'flashcards' && activeTab !== 'bank_soal';

  return (
    <nav className="mb-8 flex items-center justify-between gap-4">
      <div className="flex-1 overflow-x-auto hide-scrollbar rounded-2xl bg-gray-100/80 p-1.5 dark:bg-gray-800/80 backdrop-blur-sm shadow-inner ring-1 ring-black/5 dark:ring-white/5">
        <div className="flex w-max min-w-full gap-1">
          {tabs.map((tab) => {
            const active = activeTab === tab.id && !searchQuery;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
                  active
                    ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5 dark:bg-gray-700 dark:text-blue-400 dark:ring-white/10'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700/50'
                }`}
              >
                {tab.icon} <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`ml-1 flex h-5 min-w-[20px] items-center justify-center rounded-md px-1.5 text-[10px] font-black ${
                      active
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                        : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {canSort && (
        <button
          onClick={onToggleSort}
          title="Ubah Urutan"
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl bg-gray-100/80 text-gray-500 shadow-sm ring-1 ring-black/5 transition-colors hover:bg-white hover:text-blue-600 dark:bg-gray-800/80 dark:text-gray-400 dark:ring-white/5 dark:hover:bg-gray-700 dark:hover:text-blue-400"
        >
          <ArrowUpDown size={18} />
        </button>
      )}
    </nav>
  );
}
