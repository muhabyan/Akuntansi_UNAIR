import { useEffect, useRef } from 'react';
import { useStudySchedule } from '../hooks/useStudySchedule';
import { useNotification } from '../contexts/NotificationContext';
import { ALL_COURSES } from '../data/courseData';

export default function ScheduleNotifier() {
  const { schedules } = useStudySchedule();
  const { addNotification } = useNotification();
  const notifiedSet = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Load previously notified schedules from localStorage to avoid spamming on refresh
    try {
      const stored = localStorage.getItem('notified_schedules');
      if (stored) {
        notifiedSet.current = new Set(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (!schedules || schedules.length === 0) return;

    const checkSchedules = () => {
      const now = new Date();
      schedules.forEach(schedule => {
        if (schedule.is_done) return;

        const scheduleDate = new Date(`${schedule.date}T${schedule.time}`);
        const diffMs = scheduleDate.getTime() - now.getTime();
        const diffHours = diffMs / (1000 * 60 * 60);

        // Notify if schedule is exactly within the next 2 hours, and hasn't been notified yet
        if (diffHours > 0 && diffHours <= 2.05 && !notifiedSet.current.has(schedule.id)) {
          const courseObj = ALL_COURSES.find(c => c.course.code === schedule.course_code)?.course;
          const courseName = courseObj?.name || schedule.course_code;

          // Determine relative time text
          const today = new Date();
          const isToday = scheduleDate.getDate() === today.getDate() && scheduleDate.getMonth() === today.getMonth() && scheduleDate.getFullYear() === today.getFullYear();
          const timeText = isToday ? 'Hari ini' : 'Besok';

          addNotification({
            type: 'schedule',
            title: `Pengingat Jadwal: ${courseName}`,
            message: `${timeText} kamu ada jadwal belajar ${schedule.activity_id} jam ${schedule.time}. Jangan lupa ya!`,
            link: `/course/${schedule.course_code}`,
          });

          notifiedSet.current.add(schedule.id);
          localStorage.setItem('notified_schedules', JSON.stringify(Array.from(notifiedSet.current)));
        }
      });
    };

    // Check immediately and then every minute
    checkSchedules();
    const interval = setInterval(checkSchedules, 60000);

    return () => clearInterval(interval);
  }, [schedules, addNotification]);

  return null; // This component does not render anything
}
