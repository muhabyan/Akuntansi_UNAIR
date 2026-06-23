// =============================================================
// src/components/MegaMenu.tsx
// Batch 13E UX polish:
// - modal dan menu memakai glass overlay statis;
// - tidak memakai efek cahaya cepat atau sweep;
// - navigasi tetap contained dengan scroll internal konsisten.
// =============================================================
import { useEffect, useMemo, useState } from 'react';
import { Lock, ChevronRight, Layers, Target, Award, FileQuestion, PlayCircle } from 'lucide-react';
import { SEMESTERS, LAPORAN_DATA } from '../data/courseData';
import { AKBI_MANAGEMENT_REPORT_MENU } from '../data/akbi/akbiManagementReports';
import { AKM1_FINANCIAL_REPORT_MENU } from '../data/akm1/akm1FinancialReports';
import { CourseIcon } from '../lib/icons';
import type { Course, CourseTabId } from '../types';

interface CourseMenuProps {
  onSelect: (course: Course, tab: CourseTabId) => void;
}

const LEARNING_MODULES: { id: CourseTabId; label: string; icon: React.ReactNode }[] = [
  { id: 'tm1-7', label: 'Tatap Muka 1–7', icon: <Layers size={14} /> },
  { id: 'uts', label: 'Ujian Tengah Semester', icon: <Target size={14} /> },
  { id: 'tm8-14', label: 'Tatap Muka 8–14', icon: <Layers size={14} /> },
  { id: 'uas', label: 'Ujian Akhir Semester', icon: <Award size={14} /> },
  { id: 'bank-soal', label: 'Bank Soal', icon: <FileQuestion size={14} /> },
];

const firstOpenSemester = SEMESTERS.find((semester) => !semester.locked) ?? SEMESTERS[0];

const PANEL_BASE =
  'fixed inset-x-4 top-[5.8rem] z-[60] mx-auto overflow-hidden rounded-[2rem] p-3 border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl md:top-[9.75rem] md:max-h-[calc(100dvh-10.75rem)] md:overflow-hidden lg:top-[6.25rem] lg:max-h-[calc(100dvh-7.25rem)]';

const THREE_COLUMN_GRID =
  'grid max-h-[min(72vh,calc(100dvh-7.25rem))] min-h-0 gap-3 overflow-y-auto akbi-table-scroll md:max-h-[min(72vh,calc(100dvh-12.75rem))] md:grid-cols-[12rem_minmax(0,1fr)] lg:h-[min(36rem,calc(100dvh-10.25rem))] lg:max-h-none lg:grid-cols-[13rem_minmax(18rem,1fr)_18rem] lg:overflow-hidden';

const TWO_COLUMN_GRID =
  'grid max-h-[min(72vh,calc(100dvh-7.25rem))] min-h-0 gap-3 overflow-y-auto akbi-table-scroll md:max-h-[min(72vh,calc(100dvh-12.75rem))] md:grid-cols-[15rem_minmax(0,1fr)] lg:h-[min(36rem,calc(100dvh-10.25rem))] lg:max-h-none lg:overflow-hidden';

function coursesForSemester(semesterId: string): Course[] {
  const semester = SEMESTERS.find((item) => item.id === semesterId);
  return semester?.groups.flatMap((group) => group.courses) ?? [];
}

function useCourseMenuSelection() {
  const [semesterId, setSemesterId] = useState(firstOpenSemester.id);
  const courses = useMemo(() => coursesForSemester(semesterId), [semesterId]);
  const [courseCode, setCourseCode] = useState(courses[0]?.code ?? '');

  useEffect(() => {
    if (!courses.some((course) => course.code === courseCode)) {
      setCourseCode(courses[0]?.code ?? '');
    }
  }, [courses, courseCode]);

  const selectedCourse = courses.find((course) => course.code === courseCode) ?? courses[0];
  return { semesterId, setSemesterId, courses, courseCode, setCourseCode, selectedCourse };
}

function SemesterColumn({
  semesterId,
  setSemesterId,
  compactCopy = false,
}: {
  semesterId: string;
  setSemesterId: (value: string) => void;
  compactCopy?: boolean;
}) {
  return (
    <section className="flex min-h-0 flex-col rounded-3xl glass-menu-section p-2">
      <header className="px-3 pb-2 pt-2">
        <p className="eyebrow">Navigasi</p>
        <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-500">
          {compactCopy ? 'Pilih semester untuk mengakses kuis.' : 'Pilih semester, mata kuliah, lalu modul.'}
        </p>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto py-1 akbi-table-scroll">
        {SEMESTERS.map((semester) => {
          const isActive = semester.id === semesterId;
          return (
            <button
              key={semester.id}
              type="button"
              disabled={semester.locked}
              onMouseEnter={() => !semester.locked && setSemesterId(semester.id)}
              onFocus={() => !semester.locked && setSemesterId(semester.id)}
              onClick={() => !semester.locked && setSemesterId(semester.id)}
              className={`glass-menu-item flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left ${
                semester.locked
                  ? 'cursor-not-allowed text-slate-400 dark:text-slate-600 opacity-60'
                  : isActive
                    ? 'is-active bg-gold-50 dark:bg-gold/10 text-gold-700 dark:text-gold ring-1 ring-gold-500/20 dark:ring-gold/20'
                    : 'text-slate-700 dark:text-slate-300 hover:text-gold-700 dark:hover:text-gold'
              }`}
            >
              <span className="text-sm font-bold">{semester.title}</span>
              {semester.locked ? <Lock size={14} /> : <ChevronRight size={14} className="opacity-60" />}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function MegaMenu({ onSelect }: CourseMenuProps) {
  const { semesterId, setSemesterId, courses, setCourseCode, selectedCourse } = useCourseMenuSelection();

  return (
    <div className={`${PANEL_BASE} max-w-5xl`}>
      <div className={THREE_COLUMN_GRID}>
        <SemesterColumn semesterId={semesterId} setSemesterId={setSemesterId} />

        <section className="flex min-h-0 flex-col rounded-3xl glass-menu-section p-2">
          <header className="glass-menu-divider px-3 pb-3 pt-2">
            <p className="eyebrow">Daftar Mata Kuliah</p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-500">{SEMESTERS.find((semester) => semester.id === semesterId)?.title}</p>
          </header>
          <div className="min-h-0 flex-1 overflow-y-auto py-2 akbi-table-scroll">
            {courses.map((course) => {
              const isActive = course.code === selectedCourse?.code;
              return (
                <button
                  key={course.code}
                  type="button"
                  onMouseEnter={() => setCourseCode(course.code)}
                  onFocus={() => setCourseCode(course.code)}
                  onClick={() => setCourseCode(course.code)}
                  className={`glass-menu-item flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left ${
                    isActive
                      ? 'is-active bg-gold-50 dark:bg-gold/10 text-gold-700 dark:text-gold ring-1 ring-gold-500/20 dark:ring-gold/20'
                      : 'text-slate-700 dark:text-slate-300 hover:text-gold-700 dark:hover:text-gold'
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-50 dark:bg-gold/10 text-gold-700 dark:text-gold">
                    <CourseIcon iconKey={course.iconKey} size={16} />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-bold text-slate-900 dark:text-white">{course.name}</span>
                  <span className="rounded-lg bg-navy-500/10 dark:bg-white/[0.05] px-2 py-0.5 text-[10px] font-black text-slate-600 dark:text-slate-500">{course.code}</span>
                  <ChevronRight size={14} className="shrink-0 opacity-60 text-slate-500 dark:text-slate-400" />
                </button>
              );
            })}
          </div>
        </section>

        <section className="flex min-h-0 flex-col rounded-3xl glass-menu-section p-2 md:col-span-2 lg:col-span-1">
          <header className="glass-menu-divider px-3 pb-3 pt-2">
            <p className="eyebrow">Modul Pembelajaran</p>
            <p className="mt-1 truncate text-xs font-semibold text-slate-500 dark:text-slate-400">{selectedCourse?.name ?? 'Pilih mata kuliah'}</p>
          </header>
          <div className="min-h-0 flex-1 space-y-1 overflow-y-auto py-2 akbi-table-scroll">
            {selectedCourse && LEARNING_MODULES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onSelect(selectedCourse, item.id);
                }}
                className="glass-menu-item glass-menu-action group/btn flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-gold-700 dark:hover:text-gold"
              >
                <span className="text-slate-500 group-hover/btn:text-gold-600 dark:group-hover/btn:text-gold">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function quizDescription(courseCode: string) {
  if (courseCode === 'AKK201') return 'Kuis UTS TM 1–7 dan Kuis UAS TM 8–14 berbasis praktik.';
  if (courseCode === 'AKM201') return 'Kuis interaktif latihan Akuntansi Biaya.';
  return 'Buka paket kuis interaktif mata kuliah ini.';
}

export function QuizMegaMenu({ onSelect }: CourseMenuProps) {
  const [semesterId, setSemesterId] = useState(firstOpenSemester.id);
  const courses = useMemo(() => coursesForSemester(semesterId), [semesterId]);

  return (
    <div className={`${PANEL_BASE} max-w-4xl`}>
      <div className={TWO_COLUMN_GRID}>
        <SemesterColumn semesterId={semesterId} setSemesterId={setSemesterId} compactCopy />

        <section className="flex min-h-0 flex-col rounded-3xl glass-menu-section p-2">
          <header className="glass-menu-divider px-3 pb-3 pt-2">
            <p className="eyebrow">Kuis Interaktif</p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-500">Pilih mata kuliah. Menu ini langsung menuju ruang kuis.</p>
          </header>
          <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-2 akbi-table-scroll">
            {courses.map((course) => (
              <button
                key={course.code}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onSelect(course, 'quiz');
                }}
                className="glass-menu-item glass-menu-action group flex w-full items-center gap-3 rounded-2xl border border-transparent bg-slate-50 dark:bg-white/[0.025] p-3 text-left text-slate-700 dark:text-slate-300 hover:border-gold-500/30 dark:hover:border-gold/30 hover:text-gold-700 dark:hover:text-gold shadow-sm dark:shadow-none"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-50 dark:bg-gold/10 text-gold-700 dark:text-gold">
                  <CourseIcon iconKey={course.iconKey} size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    {course.name}
                    <span className="rounded-lg bg-navy-500/10 dark:bg-white/[0.05] px-2 py-0.5 text-[10px] font-black text-slate-600 dark:text-slate-500">{course.code}</span>
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-600 dark:text-slate-500">{quizDescription(course.code)}</span>
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-gold-500/20 dark:border-gold/20 bg-gold-50 dark:bg-gold/10 text-gold-700 dark:text-gold transition-transform group-hover:translate-x-0.5">
                  {course.code === 'AKK201' ? <Target size={16} /> : <PlayCircle size={16} />}
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function reportMenuForSection(sectionTitle: string) {
  if (sectionTitle === 'Akuntansi Manajemen') return AKBI_MANAGEMENT_REPORT_MENU;
  if (sectionTitle === 'Akuntansi Keuangan') return AKM1_FINANCIAL_REPORT_MENU;
  return LAPORAN_DATA.find((section) => section.title === sectionTitle)?.items.map((label) => ({ id: '', label })) ?? [];
}

export function LaporanMegaMenu({ onSelectReport }: { onSelectReport: (reportId: string) => void }) {
  const [activeSection, setActiveSection] = useState(LAPORAN_DATA[0]?.title ?? '');
  const activeItems = reportMenuForSection(activeSection);

  return (
    <div className={`${PANEL_BASE} akbi-report-menu-panel max-w-4xl`}>
      <div className={TWO_COLUMN_GRID}>
        <section className="flex min-h-0 flex-col rounded-3xl glass-menu-section p-2">
          <header className="px-3 pb-2 pt-2">
            <p className="eyebrow">Siklus</p>
            <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-500">Pilih bidang laporan.</p>
          </header>
          <div className="min-h-0 flex-1 overflow-y-auto py-1 akbi-table-scroll">
            {LAPORAN_DATA.map((section) => {
              const isActive = activeSection === section.title;
              return (
                <button
                  key={section.title}
                  type="button"
                  onMouseEnter={() => setActiveSection(section.title)}
                  onFocus={() => setActiveSection(section.title)}
                  onClick={() => setActiveSection(section.title)}
                  className={`glass-menu-item flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left ${
                    isActive ? 'is-active bg-gold-50 dark:bg-gold/10 text-gold-700 dark:text-gold ring-1 ring-gold-500/20 dark:ring-gold/20' : 'text-slate-700 dark:text-slate-300 hover:text-gold-700 dark:hover:text-gold'
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <CourseIcon iconKey={section.iconKey} size={16} />
                    {section.title}
                  </span>
                  <ChevronRight size={14} className="opacity-60 text-slate-500 dark:text-slate-400" />
                </button>
              );
            })}
          </div>
        </section>

        <section className="flex min-h-0 flex-col rounded-3xl glass-menu-section p-2">
          <header className="glass-menu-divider px-3 pb-3 pt-2">
            <p className="eyebrow">Format Laporan</p>
            <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{activeSection}</p>
          </header>
          <div className="min-h-0 flex-1 overflow-y-auto py-2 akbi-table-scroll">
            {activeItems.map((item) => {
              const active = Boolean(item.id);
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    if (active) onSelectReport(item.id);
                  }}
                  className={`glass-menu-item group/item flex w-full items-center gap-2 rounded-2xl px-3 py-2.5 text-left text-sm font-semibold ${
                    active
                      ? 'glass-menu-action text-slate-700 dark:text-slate-300 hover:text-gold-700 dark:hover:text-gold'
                      : 'cursor-default text-slate-400 dark:text-slate-500 opacity-80'
                  }`}
                  title={active ? `Buka format laporan ${activeSection}` : 'Referensi ringkas, belum dibuat sebagai halaman detail'}
                >
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${active ? 'bg-gold-500 dark:bg-gold group-hover/item:bg-gold-600 dark:group-hover/item:bg-gold' : 'bg-slate-300 dark:bg-slate-700'}`} />
                  <span className="leading-snug">{item.label}</span>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
