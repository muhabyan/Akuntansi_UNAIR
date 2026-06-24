import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useStudySchedule } from '../hooks/useStudySchedule';
import ScheduleAddModal from './ScheduleAddModal';
import { Calendar, Plus, Clock, BookOpen, CheckCircle2, ChevronRight, Trash2, ChevronLeft } from 'lucide-react';
import { ALL_COURSES } from '../data/courseData';

interface StudyScheduleWidgetProps {
  onOpenCourseDirectly: (courseCode: string, activityId: string) => void;
}

export default function StudyScheduleWidget({ onOpenCourseDirectly }: StudyScheduleWidgetProps) {
  const { user } = useAuth();
  const { schedules, loading, addSchedules, markDone, deleteSchedule } = useStudySchedule();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollLeft, setShowScrollLeft] = useState(false);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    setShowScrollLeft(scrollContainerRef.current.scrollLeft > 20);
  };

  const scrollToStart = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-x-10', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
          } else {
            entry.target.classList.add('opacity-0', 'translate-x-10');
            entry.target.classList.remove('opacity-100', 'translate-x-0', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.schedule-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [schedules]);

  if (!user) return null;

  const handleSaveSchedule = async (date: string, time: string, courseCode: string, activities: string[]) => {
    const newItems = activities.map(act => ({
      course_code: courseCode,
      activity_id: act,
      date,
      time
    }));
    await addSchedules(newItems);
    setIsModalOpen(false);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const validSchedules = schedules.filter(s => {
    if (s.is_done) return false; 
    
    const sDate = new Date(s.date);
    sDate.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - sDate.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    
    if (diffDays > 3) return false; 
    return true;
  });

  const getStatus = (dateStr: string, timeStr: string) => {
    const sDate = new Date(`${dateStr}T${timeStr}`);
    const now = new Date();
    
    if (sDate < now) {
      return { isOverdue: true, label: 'Overdue', color: 'text-rose-500 bg-rose-50 dark:bg-rose-500/10' };
    }
    
    const sDay = new Date(dateStr);
    sDay.setHours(0,0,0,0);
    if (sDay.getTime() === today.getTime()) {
      return { isOverdue: false, label: 'Hari Ini', color: 'text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400' };
    }
    
    return { isOverdue: false, label: 'Akan Datang', color: 'text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400' };
  };

  const displaySchedules = validSchedules.slice(0, 8);

  const getActivityLabel = (act: string) => {
    if (act.startsWith('tm-')) return `Tatap Muka ${act.split('-')[1]}`;
    if (act === 'quiz-uts') return 'Kuis Pra-UTS';
    if (act === 'quiz-uas') return 'Kuis Pra-UAS';
    if (act === 'quiz') return 'Kuis Interaktif';
    if (act === 'bank-soal') return 'Bank Soal';
    if (act === 'flashcard') return 'Flashcard';
    return act;
  };

  return (
    <div className="w-full mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-500" />
            Jadwal Belajarmu
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Targetkan waktu fokusmu agar tidak tertinggal materi.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary py-2 px-4 text-sm whitespace-nowrap"
        >
          <Plus className="w-4 h-4" /> Tambah Jadwal
        </button>
      </div>

      {loading ? (
        <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl flex justify-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : validSchedules.length === 0 ? (
        <div className="p-8 border border-gray-200 dark:border-gray-800 border-dashed rounded-2xl flex flex-col items-center justify-center bg-gray-50/50 dark:bg-gray-800/20 backdrop-blur-sm text-center">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
            <Calendar className="w-6 h-6 text-blue-400 dark:text-blue-500" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">Belum ada jadwal belajar</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 max-w-sm">Buat jadwal rutin untuk membangun kebiasaan belajar yang baik. Kami akan mengingatkanmu di sini.</p>
          <button onClick={() => setIsModalOpen(true)} className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
            Buat jadwal pertamamu
          </button>
        </div>
      ) : (
        <div className="relative group/carousel">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto hide-scrollbar gap-4 pt-4 pb-6 -mx-4 px-4"
          >
            {displaySchedules.map((schedule, index) => {
              const courseName = ALL_COURSES.find(c => c.course.code === schedule.course_code)?.course.name || schedule.course_code;
              const status = getStatus(schedule.date, schedule.time);

              return (
                <div 
                  key={schedule.id}
                  className={`schedule-card opacity-0 translate-x-10 transition-all duration-700 ease-out group relative flex flex-col p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md cursor-pointer min-w-[280px] md:min-w-[320px] max-w-[320px] flex-shrink-0 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-500`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => onOpenCourseDirectly(schedule.course_code, schedule.activity_id)}
                >
                  {/* Header Card */}
                  <div className="flex items-start justify-between mb-3">
                    <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${status.color}`}>
                      {status.label}
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); markDone(schedule.id); }}
                        className="p-1 text-gray-300 hover:text-emerald-500 dark:text-gray-600 dark:hover:text-emerald-400 transition-colors"
                        title="Tandai Selesai"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); deleteSchedule(schedule.id); }}
                        className="p-1 text-gray-300 hover:text-rose-500 dark:text-gray-600 dark:hover:text-rose-400 transition-colors opacity-0 group-hover:opacity-100"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white line-clamp-1 mb-1">{courseName}</h3>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
                      <BookOpen className="w-4 h-4" />
                      {getActivityLabel(schedule.activity_id)}
                    </div>
                  </div>

                  {/* Footer Card */}
                  <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(schedule.date).toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' })} • {schedule.time}
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Back Button */}
          {showScrollLeft && (
            <button
              onClick={scrollToStart}
              className="absolute -left-3 top-1/2 -translate-y-[calc(50%+8px)] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500 transition-all focus:outline-none hover:scale-105 animate-in fade-in zoom-in-50 duration-300"
              title="Kembali ke awal"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
        </div>
      )}

      {isModalOpen && (
        <ScheduleAddModal 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSaveSchedule} 
          currentActiveCount={validSchedules.length}
        />
      )}
    </div>
  );
}
