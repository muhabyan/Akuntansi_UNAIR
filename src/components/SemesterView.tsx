import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { materialKey, useStudyProgress } from '../hooks/useStudyProgress';
import type { Course, Semester } from '../types';
import MotionBackground from './MotionBackground';

interface SemesterViewProps {
  semester: Semester;
  onBack: () => void;
  onCourseClick: (course: Course) => void;
}

export default function SemesterView({ semester, onBack, onCourseClick }: SemesterViewProps) {
  const { countDone } = useStudyProgress();
  const courses = semester.groups.flatMap(g => g.courses);
  const totalTm = courses.reduce((sum, c) => sum + (c.materiTM1_7?.length ?? 0) + (c.materiTM8_14?.length ?? 0), 0);
  const totalDone = courses.reduce((sum, c) => {
    const allTms = [...(c.materiTM1_7 ?? []), ...(c.materiTM8_14 ?? [])];
    return sum + countDone(allTms.map(m => materialKey(c.code, m.tm)));
  }, 0);
  const overallPct = totalTm > 0 ? Math.round((totalDone / totalTm) * 100) : 0;

  return (
    <>
      <MotionBackground />
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 pt-8">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={18} /> Kembali ke Beranda
        </button>

        {/* Header */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Semester {semester.number} · {courses.length} mata kuliah · {semester.totalSks} SKS
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {semester.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">{semester.desc}</p>
          
          {/* Progress bar */}
          <div className="mt-6 max-w-md">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-medium text-gray-500 dark:text-gray-400">Progress keseluruhan</span>
              <span className="font-bold text-gray-900 dark:text-white">{overallPct}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${overallPct}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{totalDone} dari {totalTm} tatap muka selesai</p>
          </div>
        </header>

        {/* Course groups */}
        <div className="space-y-12 pb-12">
          {semester.groups.map(group => {
            const groupSks = group.courses.reduce((sum, c) => sum + c.sks, 0);
            return (
              <section key={group.title} className="relative z-10">
                <div className="mb-6 flex items-end justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{group.title}</h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {group.courses.length} mata kuliah · {groupSks} SKS
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.courses.map(course => {
                    const allTms = [...(course.materiTM1_7 ?? []), ...(course.materiTM8_14 ?? [])];
                    const keys = allTms.map(m => materialKey(course.code, m.tm));
                    const done = countDone(keys);
                    const total = allTms.length;
                    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
                    const flashcardCount = course.flashcardCount ?? course.flashcards?.length ?? 0;

                    return (
                      <button
                        key={course.code}
                        onClick={() => onCourseClick(course)}
                        className="flex flex-col rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 text-left shadow-sm hover:shadow-md hover:border-blue-300 transition-all dark:border-gray-700/50 dark:bg-gray-800/80 dark:hover:border-blue-500"
                      >
                        {/* Top: Code + SKS */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            {course.code} · {course.sks} SKS
                          </span>
                          <span className="text-xs font-medium text-gray-400">{done} dari {total} selesai</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                          {course.name}
                        </h3>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1"><BookOpen size={12} /> {total} TM</span>
                          {flashcardCount > 0 && <span>{flashcardCount} flashcard</span>}
                          {course.featureBadge && <span className="text-blue-600 dark:text-blue-400 font-semibold">{course.featureBadge}</span>}
                        </div>

                        {/* Progress */}
                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50 w-full flex items-center justify-between">
                          <div className="flex-1 mr-4">
                            <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${pct === 100 ? 'bg-emerald-500' : pct > 0 ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'}`}
                                style={{ width: `${Math.max(pct, done > 0 ? 5 : 0)}%` }}
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between flex-1 pl-2">
                            <span className="text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {pct === 100 ? <CheckCircle2 size={14} className="text-green-500" /> : null}
                              {pct === 100 ? 'Selesai' : pct > 0 ? 'Lanjut' : 'Buka'} <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
