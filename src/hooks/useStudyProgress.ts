import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

const STORAGE_KEY = 'akuntansi-feb-unair:study-progress';

type ProgressMap = Record<string, boolean>;

function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

export function useStudyProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressMap>(loadProgress);
  const [isSyncing, setIsSyncing] = useState(false);

  // Sync from Supabase on login
  useEffect(() => {
    if (!user) return;
    
    let isMounted = true;
    
    const fetchProgress = async () => {
      setIsSyncing(true);
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('course_code, chapter_id');
          
        if (!error && data && isMounted) {
          const dbProgress: ProgressMap = {};
          data.forEach((row) => {
            const key = `${row.course_code}:tm${row.chapter_id}`;
            dbProgress[key] = true;
          });
          
          setProgress((prev) => {
            const merged = { ...prev, ...dbProgress };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            return merged;
          });
        }
      } catch (err) {
        console.error('Failed to sync progress from DB', err);
      } finally {
        if (isMounted) setIsSyncing(false);
      }
    };
    
    fetchProgress();
    
    return () => { isMounted = false; };
  }, [user]);

  // Simpan setiap kali berubah.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // localStorage penuh / dimatikan — abaikan dengan aman.
    }
  }, [progress]);

  const isDone = useCallback((key: string) => Boolean(progress[key]), [progress]);

  const toggle = useCallback(async (key: string) => {
    // 1. Optimistic local update
    setProgress((prev) => {
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = true;
      return next;
    });

    // 2. Sync to Supabase if logged in
    if (user) {
      const [course_code, tmPart] = key.split(':tm');
      const chapter_id = tmPart;
      
      // If it was already done before toggle, it means we are un-toggling (deleting)
      const isCurrentlyDone = progress[key];
      
      try {
        if (isCurrentlyDone) {
          await supabase
            .from('user_progress')
            .delete()
            .match({ user_id: user.id, course_code, chapter_id });
        } else {
          await supabase
            .from('user_progress')
            .insert({ user_id: user.id, course_code, chapter_id });
        }
      } catch (err) {
        console.error('Failed to sync to DB', err);
      }
    }
  }, [progress, user]);

  /** Hitung berapa key (dari daftar) yang sudah ditandai selesai. */
  const countDone = useCallback(
    (keys: string[]) => keys.reduce((n, k) => (progress[k] ? n + 1 : n), 0),
    [progress]
  );

  return { isDone, toggle, countDone, isSyncing };
}

/** Kunci unik per materi: konsisten dipakai di seluruh app. */
export function materialKey(courseCode: string, tm: number | string): string {
  return `${courseCode}:tm${tm}`;
}

