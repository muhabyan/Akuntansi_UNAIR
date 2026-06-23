// =============================================================
// src/hooks/useStudyProgress.ts
// Checklist "sudah dipelajari" yang tersimpan di localStorage.
// Tanpa backend — data bertahan di browser pengguna.
// =============================================================
import { useState, useEffect, useCallback } from 'react';

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
  const [progress, setProgress] = useState<ProgressMap>(loadProgress);

  // Simpan setiap kali berubah.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // localStorage penuh / dimatikan — abaikan dengan aman.
    }
  }, [progress]);

  const isDone = useCallback((key: string) => Boolean(progress[key]), [progress]);

  const toggle = useCallback((key: string) => {
    setProgress((prev) => {
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = true;
      return next;
    });
  }, []);

  /** Hitung berapa key (dari daftar) yang sudah ditandai selesai. */
  const countDone = useCallback(
    (keys: string[]) => keys.reduce((n, k) => (progress[k] ? n + 1 : n), 0),
    [progress]
  );

  return { isDone, toggle, countDone };
}

/** Kunci unik per materi: konsisten dipakai di seluruh app. */
export function materialKey(courseCode: string, tm: number): string {
  return `${courseCode}:tm${tm}`;
}
