import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export interface StudySchedule {
  id: string;
  user_id: string;
  course_code: string;
  activity_id: string; // e.g., 'tm-8', 'quiz', 'bank-soal'
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  is_done: boolean;
  created_at: string;
}

export function useStudySchedule() {
  const { user } = useAuth();
  const [schedules, setSchedules] = useState<StudySchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setSchedules([]);
      setLoading(false);
      return;
    }

    const fetchSchedules = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('study_schedules')
          .select('*')
          .eq('user_id', user.id)
          .order('date', { ascending: true })
          .order('time', { ascending: true });

        if (error) throw error;
        setSchedules(data || []);
      } catch (err: any) {
        console.error('Error fetching schedules:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();

    window.addEventListener('schedule-updated', fetchSchedules);
    return () => window.removeEventListener('schedule-updated', fetchSchedules);
  }, [user]);

  const addSchedules = async (newSchedules: Omit<StudySchedule, 'id' | 'user_id' | 'created_at' | 'is_done'>[]) => {
    if (!user) return false;
    
    try {
      const { data, error } = await supabase
        .from('study_schedules')
        .insert(
          newSchedules.map(s => ({
            ...s,
            user_id: user.id,
            is_done: false
          }))
        )
        .select();

      if (error) throw error;
      if (data) {
        setSchedules(prev => {
          const updated = [...prev, ...data];
          return updated.sort((a, b) => {
            const dateA = new Date(`${a.date}T${a.time}`);
            const dateB = new Date(`${b.date}T${b.time}`);
            return dateA.getTime() - dateB.getTime();
          });
        });
      }
      window.dispatchEvent(new Event('schedule-updated'));
      return true;
    } catch (err: any) {
      console.error('Error adding schedule:', err);
      return false;
    }
  };

  const markDone = async (id: string) => {
    if (!user) return;
    
    try {
      // Optimistic update
      setSchedules(prev => prev.map(s => s.id === id ? { ...s, is_done: true } : s));
      
      const { error } = await supabase
        .from('study_schedules')
        .update({ is_done: true })
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;
      window.dispatchEvent(new Event('schedule-updated'));
    } catch (err: any) {
      console.error('Error marking schedule done:', err);
      // Revert if failed
      setSchedules(prev => prev.map(s => s.id === id ? { ...s, is_done: false } : s));
    }
  };

  const deleteSchedule = async (id: string) => {
    if (!user) return;

    try {
      // Optimistic update
      setSchedules(prev => prev.filter(s => s.id !== id));

      const { error } = await supabase
        .from('study_schedules')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;
      window.dispatchEvent(new Event('schedule-updated'));
    } catch (err: any) {
      console.error('Error deleting schedule:', err);
      // We'd ideally revert here by re-fetching or keeping a backup
    }
  };

  return {
    schedules,
    loading,
    error,
    addSchedules,
    markDone,
    deleteSchedule
  };
}
