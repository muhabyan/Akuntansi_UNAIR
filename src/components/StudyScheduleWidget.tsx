import { useState } from 'react';
import { Calendar, Plus, Clock, BookOpen, CheckCircle2, ChevronRight, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useStudySchedule } from '../hooks/useStudySchedule';
import { ALL_COURSES } from '../data/courseData';
import { CourseIcon } from '../lib/icons';
import ScheduleAddModal from './ScheduleAddModal';

interface StudyScheduleWidgetProps {
  onOpenCourseDirectly: (courseCode: string, activityId: string) => void;
}

function normalizeCourseCode(code: string) {
  const normalized = code.toLowerCase();
  if (normalized === 'akm1' || normalized === 'akm 1') return 'AKK201';
  if (normalized === 'akbi' || normalized === 'biaya') return 'AKM201';
  if (normalized === 'pajak' || normalized === 'pjk') return 'PJK201';
  if (normalized === 'pengbis' || normalized === 'bisnis') return 'MNU101';
  if (normalized === 'pte' || normalized === 'ekonomi') return 'EKT109';
  if (normalized === 'stat' || normalized === 'statistik') return 'MAS122';
  if (normalized === 'etika') return 'AKA103';
  if (normalized === 'akd' || normalized === 'dasar') return 'AKK106';
  return code.toUpperCase();
}

function getActivityLabel(activityId: string) {
  if (activityId.startsWith('tm-')) return `Tatap Muka ${activityId.split('-')[1]}`;
  if (activityId === 'quiz-uts') return 'Kuis Pra-UTS';
  if (activityId === 'quiz-uas') return 'Kuis Pra-UAS';
  if (activityId === 'quiz') return 'Kuis Interaktif';
  if (activityId === 'bank-soal') return 'Bank Soal';
  if (activityId === 'flashcard') return 'Flashcard';
  return activityId;
}

export default function StudyScheduleWidget({ onOpenCourseDirectly }: StudyScheduleWidgetProps) {
  const { user } = useAuth();
  const { schedules, loading, addSchedules, markDone, deleteSchedule } = useStudySchedule();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!user) return null;

  const handleSaveSchedule = async (date: string, time: string, courseCode: string, activities: string[]) => {
    const newItems = activities.map((activityId) => ({
      course_code: courseCode,
      activity_id: activityId,
      date,
      time,
    }));
    await addSchedules(newItems);
    setIsModalOpen(false);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const validSchedules = schedules
    .filter((schedule) => {
      if (schedule.is_done) return false;
      const scheduleDate = new Date(`${schedule.date}T00:00:00`);
      const daysOverdue = (today.getTime() - scheduleDate.getTime()) / (1000 * 60 * 60 * 24);
      return daysOverdue <= 3;
    })
    .sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime());

  const getStatus = (date: string, time: string) => {
    const scheduledAt = new Date(`${date}T${time}`);
    if (scheduledAt < new Date()) {
      return { label: 'Terlambat', className: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' };
    }

    const scheduleDay = new Date(`${date}T00:00:00`);
    if (scheduleDay.getTime() === today.getTime()) {
      return { label: 'Hari ini', className: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300' };
    }

    return { label: 'Akan datang', className: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' };
  };

  const displaySchedules = validSchedules.slice(0, 5);

  return (
    <div className="w-full pt-10 md:pt-12">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-1.5">Rencana belajar</p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">Target belajar terdekat</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Jadwal aktif diurutkan berdasarkan waktu terdekat.</p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 sm:px-4"
        >
          <Plus className="h-4 w-4" /> <span className="hidden sm:inline">Tambah jadwal</span><span className="sm:hidden">Tambah</span>
        </button>
      </div>

      {loading ? (
        <div className="flex min-h-24 items-center justify-center rounded-2xl border border-gray-200 bg-white/60 dark:border-gray-700 dark:bg-gray-800/50" aria-label="Memuat jadwal belajar">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
        </div>
      ) : displaySchedules.length === 0 ? (
        <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50/60 px-5 py-5 dark:border-gray-700 dark:bg-gray-800/30 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
              <Calendar className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Belum ada target belajar aktif</p>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">Tambahkan materi atau latihan yang memang ingin Anda selesaikan. Tanggal berasal dari jadwal yang Anda buat sendiri.</p>
            </div>
          </div>
          <button type="button" onClick={() => setIsModalOpen(true)} className="min-h-11 self-start font-bold text-blue-700 transition hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200 sm:self-auto">
            Buat jadwal
          </button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm dark:border-gray-700 dark:bg-gray-800/70">
          {displaySchedules.map((schedule) => {
            const normalizedCode = normalizeCourseCode(schedule.course_code);
            const course = ALL_COURSES.find((entry) => entry.course.code === normalizedCode)?.course;
            const courseName = course?.name ?? normalizedCode;
            const status = getStatus(schedule.date, schedule.time);
            const scheduledAt = new Date(`${schedule.date}T${schedule.time}`);

            return (
              <div key={schedule.id} className="group flex flex-col border-b border-gray-100 last:border-b-0 dark:border-gray-700/70 sm:flex-row sm:items-stretch">
                <button
                  type="button"
                  onClick={() => onOpenCourseDirectly(normalizedCode, schedule.activity_id)}
                  className="grid min-h-[5.75rem] min-w-0 flex-1 grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 text-left transition hover:bg-blue-50/65 dark:hover:bg-blue-950/20 md:grid-cols-[3rem_minmax(0,1fr)_auto] md:gap-4 md:px-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-900/35 dark:text-blue-300">
                    {course ? <CourseIcon iconKey={course.iconKey} size={18} /> : <BookOpen className="h-[18px] w-[18px]" />}
                  </span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="truncate font-bold text-gray-900 dark:text-white">{courseName}</span>
                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${status.className}`}>{status.label}</span>
                    </span>
                    <span className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-blue-700 dark:text-blue-300">
                      <BookOpen className="h-4 w-4 shrink-0" /> {getActivityLabel(schedule.activity_id)}
                    </span>
                    <span className="mt-1 flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                      <Clock className="h-3.5 w-3.5" />
                      {scheduledAt.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' })} · {schedule.time}
                    </span>
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-500 dark:text-gray-600" />
                </button>

                <div className="flex items-center justify-end gap-1 border-t border-gray-100 px-3 py-2 dark:border-gray-700/70 sm:border-l sm:border-t-0">
                  <button
                    type="button"
                    onClick={() => markDone(schedule.id)}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-bold text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-300"
                    title="Tandai selesai"
                  >
                    <CheckCircle2 className="h-5 w-5" /> <span>Selesai</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteSchedule(schedule.id)}
                    className="flex h-11 w-11 items-center justify-center rounded-lg text-gray-400 transition hover:bg-rose-50 hover:text-rose-600 dark:text-gray-500 dark:hover:bg-rose-950/30 dark:hover:text-rose-300"
                    title="Hapus jadwal"
                    aria-label={`Hapus jadwal ${courseName}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
          {validSchedules.length > displaySchedules.length && (
            <p className="border-t border-gray-100 px-5 py-3 text-xs font-semibold text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Menampilkan 5 target terdekat dari {validSchedules.length} jadwal aktif.
            </p>
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
