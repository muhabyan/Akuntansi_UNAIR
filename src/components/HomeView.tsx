import { ArrowRight, BookOpen, Lock } from 'lucide-react';
import { SEMESTERS } from '../data/courseData';
import { useEffect } from 'react';
import MotionBackground from './MotionBackground';
import Typewriter from './Typewriter';

import StudyScheduleWidget from './StudyScheduleWidget';

interface HomeViewProps {
  onSelectSemester: (semesterId: string) => void;
  onOpenCourseDirectly?: (courseCode: string, activityId: string) => void;
}

export default function HomeView({ onSelectSemester, onOpenCourseDirectly }: HomeViewProps) {
  const activeSemesters = SEMESTERS.filter(s => !s.locked);

  const scrollToCatalog = () => {
    document.getElementById('course-catalog')?.scrollIntoView({ behavior: 'smooth' });
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
      <section className="relative z-10 min-h-[100svh] flex flex-col justify-center bg-transparent">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10 lg:px-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              <span className="block mb-2 md:mb-4">Tingkatkan Pemahaman</span>
              <span className="text-blue-600 dark:text-blue-400">
                <Typewriter words={['Akuntansi', 'Bisnis', 'Keuangan', 'Perpajakan']} />
              </span>
              {' '}Anda.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium">
              Pelajari fondasi akuntansi, bisnis, analisis kuantitatif, hingga praktik audit profesional secara terstruktur. Akses materi, laporan keuangan, dan latihan secara interaktif.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToCatalog}
                className="btn-primary"
              >
                Mulai Belajar <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2"><BookOpen size={16} className="text-blue-500"/> {activeSemesters.length} Semester Terbuka</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section id="course-catalog" className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-10 lg:px-14 lg:py-20">
        {onOpenCourseDirectly && <StudyScheduleWidget onOpenCourseDirectly={onOpenCourseDirectly} />}

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">Katalog Program</h2>
          <p className="text-gray-600 dark:text-gray-400">Pilih semester untuk memulai atau melanjutkan pembelajaran Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SEMESTERS.map((semester, index) => {
            const isLocked = semester.locked;
            return (
              <div 
                key={semester.id} 
                className={`semester-card opacity-0 -translate-x-10 transition-all duration-700 ease-out relative flex flex-col rounded-xl border backdrop-blur-sm ${
                  isLocked 
                    ? 'border-gray-200 bg-gray-50/80 dark:border-gray-800 dark:bg-gray-800/40' 
                    : 'border-gray-200 bg-white/80 shadow-sm hover:shadow-md hover:border-blue-300 dark:border-gray-700 dark:bg-gray-800/80 dark:hover:border-blue-500 cursor-pointer'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => !isLocked && onSelectSemester(semester.id)}
              >
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                      isLocked ? 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                    }`}>
                      Semester {semester.id.replace('sem', '')}
                    </span>
                    {isLocked && <Lock size={16} className="text-gray-400" />}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isLocked ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                    {semester.title}
                  </h3>
                  <p className={`text-sm line-clamp-3 ${isLocked ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-300'}`}>
                    Modul komprehensif untuk {semester.title.toLowerCase()} mencakup materi teori, laporan, dan latihan intensif.
                  </p>
                </div>
                
                <div className={`px-6 py-4 border-t ${isLocked ? 'border-gray-200/50 dark:border-gray-800/50' : 'border-gray-100/50 dark:border-gray-700/50'}`}>
                  {isLocked ? (
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500">Terkunci / Segera Hadir</span>
                  ) : (
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lihat Modul <ArrowRight size={16} />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
