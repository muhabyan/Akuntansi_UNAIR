import { ArrowRight, BookOpen, Lock } from 'lucide-react';
import { SEMESTERS } from '../data/courseData';
import { useEffect, useMemo } from 'react';
import type { Course } from '../types';
import { CourseIcon } from '../lib/icons';
import { materialKey, useStudyProgress } from '../hooks/useStudyProgress';
import MotionBackground from './MotionBackground';
import Typewriter from './Typewriter';
import Aks1Logo3D from './Aks1Logo3D';

import StudyScheduleWidget from './StudyScheduleWidget';

interface HomeViewProps {
  onSelectSemester: (semesterId: string) => void;
  onOpenCourseDirectly?: (courseCode: string, activityId: string) => void;
  onOpenGuide?: () => void;
}

const ACTIVE_SEMESTERS = SEMESTERS.filter((semester) => !semester.locked);

export default function HomeView({ onSelectSemester, onOpenCourseDirectly, onOpenGuide }: HomeViewProps) {
  const { countDone, isDone } = useStudyProgress();

  const { continueItems, hasRecordedProgress } = useMemo(() => {
    const items: Array<{
      course: Course;
      semesterNumber: number;
      completed: number;
      total: number;
      nextTm: number;
      nextTitle: string;
    }> = [];
    let hasProgress = false;

    for (const semester of ACTIVE_SEMESTERS) {
      for (const course of semester.groups.flatMap((group) => group.courses)) {
        const materials = [...(course.materiTM1_7 ?? []), ...(course.materiTM8_14 ?? [])];
        if (materials.length === 0) continue;

        const completed = countDone(materials.map((material) => materialKey(course.code, material.tm)));
        if (completed > 0) hasProgress = true;
        const nextMaterial = materials.find((material) => !isDone(materialKey(course.code, material.tm)));

        if (completed > 0 && nextMaterial) {
          items.push({
            course,
            semesterNumber: semester.number,
            completed,
            total: materials.length,
            nextTm: nextMaterial.tm,
            nextTitle: nextMaterial.title,
          });
        }
      }
    }

    items.sort((a, b) => b.completed - a.completed || a.semesterNumber - b.semesterNumber);
    return { continueItems: items.slice(0, 2), hasRecordedProgress: hasProgress };
  }, [countDone, isDone]);

  const scrollToStudyStart = () => {
    document.getElementById(continueItems.length > 0 ? 'continue-learning' : 'course-catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', '-translate-x-10', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
          } else {
            entry.target.classList.add('opacity-0', '-translate-x-10');
            entry.target.classList.remove('opacity-100', 'translate-x-0', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.semester-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <MotionBackground />
      {/* Hero Section */}
      <section className="relative z-10 flex min-h-[82svh] flex-col justify-center overflow-hidden bg-transparent pb-[calc(4rem+env(safe-area-inset-bottom))] pt-[calc(4.25rem+env(safe-area-inset-top))] md:pb-0 md:pt-0">
        {/* Logo watermark - positioned right, only in hero */}
        <Aks1Logo3D />
        <div className="mobile-home-hero-content mx-auto w-full max-w-7xl px-5 py-14 sm:py-16 md:px-10 md:py-20 lg:px-14">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-[2rem] font-bold leading-[1.12] text-gray-900 dark:text-white sm:text-4xl md:mb-6 md:text-5xl md:leading-tight lg:text-6xl">
              <span className="block mb-2 md:mb-4">Tingkatkan Pemahaman</span>
              <span className="block min-h-[1.2em] text-blue-600 dark:text-blue-400 sm:inline sm:min-h-0">
                <Typewriter words={['Akuntansi', 'Bisnis', 'Keuangan', 'Perpajakan']} />
              </span>
              <span className="block sm:inline"> Anda.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium">
              Pelajari fondasi akuntansi, bisnis, analisis kuantitatif, hingga praktik audit profesional secara terstruktur. Akses materi, laporan keuangan, dan latihan secara interaktif.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4">
              <button
                onClick={scrollToStudyStart}
                className="btn-primary w-full gap-1.5 whitespace-nowrap px-2 text-[13px] sm:w-auto sm:gap-2 sm:px-5 sm:text-base"
              >
                Mulai Belajar <ArrowRight size={18} />
              </button>
              {onOpenGuide && (
                <button 
                  onClick={onOpenGuide}
                  className="flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-gray-200 bg-white/50 px-2 py-3 text-[13px] font-bold text-gray-700 backdrop-blur-sm transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-200 dark:hover:bg-gray-700 sm:w-auto sm:gap-2 sm:px-6 sm:text-base"
                >
                  Lihat Panduan <BookOpen size={18} />
                </button>
              )}
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2"><BookOpen size={16} className="text-blue-500"/> {ACTIVE_SEMESTERS.length} Semester Terbuka</span>
            </div>
          </div>
        </div>
      </section>

      {/* Returning-student study continuation, powered only by existing progress keys. */}
      <section id="continue-learning" className="relative z-10 border-y border-blue-100/80 bg-gradient-to-r from-blue-50/75 via-white/80 to-indigo-50/70 dark:border-blue-900/40 dark:from-blue-950/30 dark:via-gray-900/75 dark:to-indigo-950/30">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:py-8 md:px-10 md:py-10 lg:px-14">
          <div className="mb-4 flex flex-col gap-2 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-1.5">Langkah berikutnya</p>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">Lanjutkan belajar</h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Materi berikut diambil dari progres tatap muka yang sudah Anda tandai selesai.
            </p>
          </div>

          {continueItems.length > 0 ? (
            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white/85 shadow-sm shadow-blue-950/5 dark:border-blue-900/50 dark:bg-gray-900/80">
              {continueItems.map((item) => {
                const percent = Math.round((item.completed / item.total) * 100);
                return (
                  <article key={item.course.code} className="grid gap-4 border-b border-gray-100 p-4 last:border-b-0 dark:border-gray-800 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center md:p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/20">
                      <CourseIcon iconKey={item.course.iconKey} size={19} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="truncate font-bold text-gray-900 dark:text-white">{item.course.name}</h3>
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{item.completed}/{item.total} TM selesai</span>
                      </div>
                      <p className="mt-1 line-clamp-1 text-sm font-semibold text-blue-700 dark:text-blue-300">
                        TM {item.nextTm} · {item.nextTitle}
                      </p>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-blue-100 dark:bg-gray-700" role="progressbar" aria-label={`Progress ${item.course.name}`} aria-valuemin={0} aria-valuemax={item.total} aria-valuenow={item.completed}>
                        <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-[width] duration-500" style={{ width: `${percent}%` }} />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenCourseDirectly?.(item.course.code, `tm-${item.nextTm}`)}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 sm:justify-self-end"
                    >
                      Lanjut TM {item.nextTm} <ArrowRight size={16} />
                    </button>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-3 border-l-4 border-blue-500 bg-white/55 px-4 py-3 dark:bg-gray-900/45 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-4">
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  {hasRecordedProgress ? 'Materi yang ditandai sudah selesai.' : 'Belum ada progres materi.'}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Pilih semester dan buka materi untuk menentukan titik belajar berikutnya.
                </p>
              </div>
              <button type="button" onClick={() => document.getElementById('course-catalog')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex min-h-11 items-center gap-2 self-start font-bold text-blue-700 transition hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200 sm:self-auto">
                Jelajahi mata kuliah <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {onOpenCourseDirectly && (
        <section className="relative z-10 mx-auto max-w-7xl px-5 md:px-10 lg:px-14">
          <StudyScheduleWidget onOpenCourseDirectly={onOpenCourseDirectly} />
        </section>
      )}

      {/* Course Catalog */}
      <section id="course-catalog" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 pb-16 pt-10 md:px-10 md:pt-12 lg:px-14 lg:pb-20">
        <div className="mb-6 md:mb-8">
          <p className="eyebrow mb-1.5">Kurikulum</p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">Pilih semester</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">Temukan mata kuliah berdasarkan tahap studi dan lanjutkan ke ruang belajar semester.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white/75 shadow-sm dark:border-gray-700 dark:bg-gray-800/65">
          {SEMESTERS.map((semester, index) => {
            const isLocked = semester.locked;
            const courseCount = semester.groups.reduce((total, group) => total + group.courses.length, 0);
            return (
              <button
                key={semester.id} 
                type="button"
                disabled={isLocked}
                className={`semester-card group relative grid w-full -translate-x-10 grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-gray-200 px-4 py-4 text-left opacity-0 transition-all duration-700 ease-out last:border-b-0 dark:border-gray-700 md:grid-cols-[3.5rem_minmax(0,1fr)_auto] md:gap-5 md:px-6 ${
                  isLocked
                    ? 'cursor-not-allowed bg-gray-50/70 opacity-60 dark:bg-gray-900/30'
                    : 'cursor-pointer hover:bg-blue-50/70 focus-visible:bg-blue-50/70 dark:hover:bg-blue-950/25 dark:focus-visible:bg-blue-950/25'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => !isLocked && onSelectSemester(semester.id)}
                aria-label={isLocked ? `${semester.title}, belum tersedia` : `Buka ${semester.title}`}
              >
                <span className={`font-display text-xl font-black tabular-nums md:text-2xl ${isLocked ? 'text-gray-400 dark:text-gray-600' : 'text-blue-600 dark:text-blue-400'}`}>
                  {String(semester.number).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className={`font-bold ${isLocked ? 'text-gray-500 dark:text-gray-500' : 'text-gray-900 dark:text-white'}`}>{semester.title}</span>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {isLocked ? 'Belum tersedia' : `${courseCount} mata kuliah · ${semester.totalSks} SKS`}
                    </span>
                  </span>
                  <span className={`mt-1 block truncate text-sm ${isLocked ? 'text-gray-400 dark:text-gray-600' : 'text-gray-600 dark:text-gray-300'}`}>{semester.desc}</span>
                </span>
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${isLocked ? 'text-gray-400 dark:text-gray-600' : 'text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400'}`}>
                  {isLocked ? <Lock size={17} /> : <ArrowRight size={18} />}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
