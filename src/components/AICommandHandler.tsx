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
        if (detail.action === 'schedule_add') {
          await addSchedules([
            {
              course_code: detail.courseCode,
              activity_id: detail.activityId,
              date: detail.date,
              time: detail.time
            }
          ]);
        } else if (detail.action === 'schedule_delete') {
          // Find the schedule by courseCode and activityId
          const toDelete = schedules.find(s => 
            s.course_code.toLowerCase() === detail.courseCode.toLowerCase() && 
            s.activity_id === detail.activityId
          );
          if (toDelete) {
            await deleteSchedule(toDelete.id);
          }
        } else if (detail.action === 'schedule_finish') {
          // Find the schedule by courseCode and activityId
          const toFinish = schedules.find(s => 
            s.course_code.toLowerCase() === detail.courseCode.toLowerCase() && 
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
