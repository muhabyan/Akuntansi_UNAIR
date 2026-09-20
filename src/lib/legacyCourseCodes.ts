// Renamed courses keep working: an old URL still opens the course (and is replaced by the current one), and data this
// browser saved under the old code is moved to the new one. This map is the only place in src that names an old course code.
//
// TEMPORARY: the alias, the URL replacement and the storage shim exist only to carry old links and saved data across the
// PJK202 -> PJK301 rename. Remove them after this semester: this file, the call in main.tsx, replaceLegacyCourseUrl in
// App.tsx, and the alias/URL/shim sections of scripts/test-pjk301-rename.mjs.

/** Old course code -> current course code.
 * - Perpajakan II: the faculty handbook code is PJK301 (FEB25603015).
 * - Sistem Informasi Akuntansi: the faculty handbook code is SII306 (FEB25603016).
 */
export const LEGACY_COURSE_CODES: Readonly<Record<string, string>> = {
  PJK202: 'PJK301',
  AKS301: 'SII306',
};

/** The current code for a possibly renamed course code (any letter case). Any other code is returned unchanged. */
export function canonicalCourseCode(code: string): string {
  return LEGACY_COURSE_CODES[code.toUpperCase()] ?? code;
}

/**
 * For a course URL that uses a legacy code (/course/PJK202), the same path with the current code (/course/PJK301),
 * keeping a trailing slash. Null for any other path, including the alternative code FEB25603015: that is not a legacy code.
 */
export function canonicalCoursePath(pathname: string): string | null {
  const match = pathname.match(/^\/course\/([^/]+)(\/?)$/i);
  if (!match) return null;
  let code: string;
  try {
    code = decodeURIComponent(match[1]);
  } catch {
    return null;
  }
  const current = canonicalCourseCode(code);
  return current.toUpperCase() === code.toUpperCase() ? null : `/course/${encodeURIComponent(current)}${match[2]}`;
}

// Storage formats owned by other modules. scripts/test-pjk301-rename.mjs checks these strings still appear there.
const STUDY_PROGRESS_KEY = 'akuntansi-feb-unair:study-progress'; // hooks/useStudyProgress.ts: { "<code>:tm<n>": true }
const FLASHCARD_KEY_PREFIXES = ['flashcard-srs-', 'flashcard-stars-']; // components/FlashcardDeck.tsx: { "<card id>": ... }
const EXAM_SESSION_PREFIX = 'exam_session_'; // data/quizSession.ts: exam_session_<code>_<set id>_<seconds>

type StorageLike = Pick<Storage, 'getItem' | 'setItem' | 'removeItem' | 'key' | 'length'>;

function asRecord(raw: string | null): Record<string, unknown> | null {
  if (raw === null) return null;
  try {
    const value: unknown = JSON.parse(raw);
    return value !== null && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

/**
 * Moves data saved under a legacy course code to the current code. Safe to run on every start: once it has moved
 * something, a second run finds nothing. Data already saved under the current code is never overwritten, and a
 * storage that is blocked, full or holds corrupt JSON never makes it throw. Returns how many entries it moved.
 */
export function migrateLegacyCourseStorage(storage: StorageLike): number {
  let moved = 0;
  for (const [legacy, current] of Object.entries(LEGACY_COURSE_CODES)) {
    // Study progress: one record with one entry per material.
    try {
      const progress = asRecord(storage.getItem(STUDY_PROGRESS_KEY));
      if (progress) {
        const next = { ...progress };
        let count = 0;
        for (const key of Object.keys(progress)) {
          if (!key.startsWith(`${legacy}:tm`)) continue;
          const target = `${current}${key.slice(legacy.length)}`;
          next[target] = Boolean(next[target]) || Boolean(progress[key]);
          delete next[key];
          count += 1;
        }
        if (count > 0) {
          storage.setItem(STUDY_PROGRESS_KEY, JSON.stringify(next));
          moved += count;
        }
      }
    } catch {
      /* storage blocked or full: leave it as it is */
    }

    // Flashcard review state and stars: one record per course, keyed by card id. Existing entries under the new code win.
    for (const prefix of FLASHCARD_KEY_PREFIXES) {
      try {
        const old = asRecord(storage.getItem(prefix + legacy));
        if (!old) continue;
        const existing = asRecord(storage.getItem(prefix + current)) ?? {};
        storage.setItem(prefix + current, JSON.stringify({ ...old, ...existing }));
        storage.removeItem(prefix + legacy);
        moved += 1;
      } catch {
        /* storage blocked or full: the old entry stays and is retried on the next start */
      }
    }

    // Exam sessions: one key per quiz set. An entry that already exists under the new code is kept and the old one stays.
    try {
      const oldPrefix = `${EXAM_SESSION_PREFIX}${legacy}_`;
      const oldKeys: string[] = [];
      for (let i = 0; i < storage.length; i += 1) {
        const key = storage.key(i);
        if (key?.startsWith(oldPrefix)) oldKeys.push(key);
      }
      for (const key of oldKeys) {
        const target = `${EXAM_SESSION_PREFIX}${current}_${key.slice(oldPrefix.length)}`;
        const value = storage.getItem(key);
        if (value === null || storage.getItem(target) !== null) continue;
        storage.setItem(target, value);
        storage.removeItem(key);
        moved += 1;
      }
    } catch {
      /* storage blocked or full: the old entries stay and are retried on the next start */
    }
  }
  return moved;
}
