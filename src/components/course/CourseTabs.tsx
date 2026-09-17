import React from 'react';

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
  searchQuery: string;
}

export default function CourseTabs({ tabs, activeTab, onTabChange, searchQuery }: CourseTabsProps) {
  const learningTabs = tabs.filter((tab) => tab.id === 'pra_uts' || tab.id === 'pra_uas');
  const supportingTabs = tabs.filter((tab) => tab.id !== 'pra_uts' && tab.id !== 'pra_uas');

  return (
    <nav className="course-workspace-nav mb-6" aria-label="Navigasi ruang belajar">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white/80 dark:border-gray-700 dark:bg-gray-800/70">
        <div className="border-b border-gray-200 px-4 py-2.5 dark:border-gray-700">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Jalur materi</p>
        </div>
        <div className="grid grid-cols-2">
          {learningTabs.map((tab, index) => {
            const active = activeTab === tab.id && !searchQuery;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                aria-current={active ? 'page' : undefined}
                className={`relative flex min-h-14 items-center gap-3 px-4 py-3 text-left transition-colors md:px-5 ${
                  index === 0 ? 'border-r border-gray-200 dark:border-gray-700' : ''
                } ${
                  active
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50/60 text-blue-700 dark:from-blue-950/45 dark:to-indigo-950/25 dark:text-blue-300'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700/55 dark:hover:text-white'
                }`}
              >
                <span className={active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}>{tab.icon}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold leading-tight">{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className="mt-0.5 block text-[11px] font-medium text-gray-500 dark:text-gray-400">{tab.count} materi</span>
                  )}
                </span>
                {active && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {supportingTabs.length > 0 && (
        <div className="mt-3">
          <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Alat belajar</p>
        <div className="grid grid-cols-2 gap-1.5 min-[360px]:grid-cols-3 sm:flex sm:flex-wrap sm:gap-2">
            {supportingTabs.map((tab) => {
              const active = activeTab === tab.id && !searchQuery;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onTabChange(tab.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-semibold transition-colors sm:px-3 ${
                    active
                      ? 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300'
                      : 'border-transparent text-gray-500 hover:border-gray-200 hover:bg-white hover:text-gray-800 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                  }`}
                >
                  <span className="shrink-0">{tab.icon}</span>
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
