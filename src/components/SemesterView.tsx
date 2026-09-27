import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { materialKey, useStudyProgress } from '../hooks/useStudyProgress';
import type { Course, Semester } from '../types';

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
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 pt-8 md:pt-0">
        <button
          onClick={onBack}
          className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft size={18} /> Kembali ke Beranda
        </button>

        {/* Header */}
        <header className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
            Semester {semester.number} · {courses.length} mata kuliah · {semester.totalSks} SKS
          </p>
          <h1 className="mb-3 text-3xl font-bold text-ink md:text-4xl">
            {semester.title}
          </h1>
          <p className="max-w-2xl text-secondary">{semester.desc}</p>
          
          {/* Progress bar */}
          <div className="mt-6 max-w-md">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-medium text-secondary">Progress keseluruhan</span>
              <span className="font-bold text-ink">{overallPct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-200"
                style={{ width: `${overallPct}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-muted">{totalDone} dari {totalTm} tatap muka selesai</p>
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
                    <h2 className="text-xl font-bold text-ink">{group.title}</h2>
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
                        className="flex flex-col rounded-xl border border-line bg-surface p-5 text-left shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-accent hover:shadow-md"
                      >
                        {/* Top: Code + SKS */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-accent">
                            {course.code} · {course.sks} SKS
                          </span>
                          <span className="text-xs font-medium text-muted">{done} dari {total} selesai</span>
                        </div>

                        {/* Title */}
                        <h3 className="mb-2 text-lg font-bold leading-snug text-ink">
                          {course.name}
                        </h3>

                        {/* Features */}
                        <div className="mb-4 flex flex-wrap gap-2 text-xs text-muted">
                          <span className="flex items-center gap-1"><BookOpen size={12} /> {total} TM</span>
                          {flashcardCount > 0 && <span>{flashcardCount} flashcard</span>}
                          {course.featureBadge && <span className="font-semibold text-accent">{course.featureBadge}</span>}
                        </div>

                        {/* Progress */}
                        <div className="mt-auto flex w-full items-center justify-between border-t border-line pt-4">
                          <div className="flex-1 mr-4">
                            <div className="h-1.5 overflow-hidden rounded-full bg-line">
                              <div
                                className={`h-full rounded-full transition-[width] duration-200 ${pct === 100 ? 'bg-success' : pct > 0 ? 'bg-accent' : 'bg-line'}`}
                                style={{ width: `${Math.max(pct, done > 0 ? 5 : 0)}%` }}
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between flex-1 pl-2">
                            <span className="flex items-center gap-1 text-xs font-semibold text-accent">
                              {pct === 100 ? <CheckCircle2 size={14} className="text-success" /> : null}
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
