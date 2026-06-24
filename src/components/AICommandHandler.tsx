import { useEffect } from 'react';
import { useStudySchedule } from '../hooks/useStudySchedule';
import { useAuth } from '../contexts/AuthContext';

export default function AICommandHandler() {
  const { addSchedules, deleteSchedule, markDone, schedules } = useStudySchedule();
  const { user } = useAuth();

  useEffect(() => {
    const handleAiAction = async (e: Event) => {
      if (!user) {
        console.warn('AI tried to modify schedule but user is not logged in.');
        return;
      }

      const event = e as CustomEvent;
      const detail = event.detail;

      try {
        const normalizeCourseCode = (code: string) => {
          const c = code.toLowerCase();
          if (c === 'akm1' || c === 'akm 1') return 'AKK201';
          if (c === 'akbi' || c === 'biaya') return 'AKM201';
          if (c === 'pajak' || c === 'pjk') return 'PJK201';
          if (c === 'pengbis' || c === 'bisnis') return 'MNU101';
          if (c === 'pte' || c === 'ekonomi') return 'EKT109';
          if (c === 'stat' || c === 'statistik') return 'MAS122';
          if (c === 'etika') return 'AKA103';
          if (c === 'akd' || c === 'dasar') return 'AKK106';
          return code.toUpperCase();
        };

        const normalizedCode = normalizeCourseCode(detail.courseCode);

        if (detail.action === 'schedule_add') {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          
          const validSchedules = schedules.filter(s => {
            if (s.is_done) return false; 
            const sDate = new Date(s.date);
            sDate.setHours(0, 0, 0, 0);
            const diffTime = today.getTime() - sDate.getTime();
            const diffDays = diffTime / (1000 * 3600 * 24);
            return diffDays <= 3;
          });

          if (validSchedules.length >= 8) {
            alert('AI Tutor mencoba menambahkan jadwal baru, tetapi kamu sudah mencapai batas maksimal 8 jadwal aktif! Tuntaskan atau hapus jadwal yang ada terlebih dahulu.');
            return;
          }

          const [nh, nm] = detail.time.split(':').map(Number);
          const nTime = nh * 60 + nm;
          const isCollision = validSchedules.some(s => {
            if (s.date !== detail.date) return false;
            const [eh, em] = s.time.split(':').map(Number);
            const eTime = eh * 60 + em;
            return Math.abs(nTime - eTime) < 5;
          });

          if (isCollision) {
            alert('AI Tutor mencoba menambahkan jadwal yang bentrok (waktunya sama atau berdekatan < 5 menit dengan jadwal lain di hari yang sama). Silakan tentukan jam lain.');
            return;
          }

          await addSchedules([
            {
              course_code: normalizedCode,
              activity_id: detail.activityId,
              date: detail.date,
              time: detail.time
            }
          ]);
        } else if (detail.action === 'schedule_delete') {
          const toDelete = schedules.find(s => 
            normalizeCourseCode(s.course_code) === normalizedCode && 
            s.activity_id === detail.activityId
          );
          if (toDelete) {
            await deleteSchedule(toDelete.id);
          }
        } else if (detail.action === 'schedule_finish') {
          const toFinish = schedules.find(s => 
            normalizeCourseCode(s.course_code) === normalizedCode && 
            s.activity_id === detail.activityId &&
            !s.is_done
          );
          if (toFinish) {
            await markDone(toFinish.id);
          }
        }
      } catch (error) {
        console.error('Failed to process AI command:', error);
      }
    };

    window.addEventListener('ai-schedule', handleAiAction);
    return () => window.removeEventListener('ai-schedule', handleAiAction);
  }, [user, addSchedules, deleteSchedule, markDone, schedules]);

  return null; // Headless component
}
