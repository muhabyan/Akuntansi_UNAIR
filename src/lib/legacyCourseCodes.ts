// Renamed courses keep working: an old URL still opens the course (and is replaced by the current one), and data this
// browser saved under the old code is moved to the new one. This map is the only place in src that names an old course code.
//
// TEMPORARY: the alias, the URL replacement and the storage shim exist only to carry old links and saved data across the
// renames in LEGACY_COURSE_CODES. Remove them once no browser is likely to hold data under an old code: this file, the
// call in main.tsx, replaceLegacyCourseUrl in App.tsx, and the alias/URL/shim sections of the rename tests
// (scripts/test-pjk301-rename.mjs, scripts/test-sii306-rename.mjs, scripts/test-mnu108-rename.mjs).

/** Old course code -> current course code.
 * - Perpajakan II: the faculty handbook code is PJK301 (FEB25603015).
 * - AKS301 is reserved for Accounting Data Analytics. Its former SIA storage is migrated once, separately below.
 * - Akuntansi Manajemen: AKM301 (FEB25603020), previously catalogued as AKM202.
 * - Accounting Data Analytics: AKS301, previously catalogued temporarily as ADA301.
 * - Pengantar Manajemen: the faculty handbook code is MNU108 (FEB25603011). It was catalogued as MNM101 with MNM201 as
 *   its alternative code, so both open the course and both carry their saved data over.
 * - Akuntansi Sektor Publik: AKK203 (FEB25603014), previously catalogued as AKS201.
 * - Manajemen Keuangan: MNK102 (FEB25603012), previously catalogued as MNK201.
 */
export const LEGACY_COURSE_CODES: Readonly<Record<string, string>> = {
  PJK202: 'PJK301',
  MNM101: 'MNU108',
  MNM201: 'MNU108',
  AKS201: 'AKK203',
  MNK201: 'MNK102',
  AKM202: 'AKM301',
  ADA301: 'AKS301',
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
function migrateCourseStorageMap(storage: StorageLike, codes: Readonly<Record<string, string>>, failed: () => void): number {
  let moved = 0;
  for (const [legacy, current] of Object.entries(codes)) {
    // Study progress: one record with one entry per material.
    try {
      const raw = storage.getItem(STUDY_PROGRESS_KEY);
      const progress = asRecord(raw);
      if (raw !== null && !progress) failed();
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
      failed();
      /* storage blocked or full: leave it as it is */
    }

    // Flashcard review state and stars: one record per course, keyed by card id. Existing entries under the new code win.
    for (const prefix of FLASHCARD_KEY_PREFIXES) {
      try {
        const raw = storage.getItem(prefix + legacy);
        const old = asRecord(raw);
        if (raw !== null && !old) failed();
        if (!old) continue;
        const targetRaw = storage.getItem(prefix + current);
        const targetRecord = asRecord(targetRaw);
        if (targetRaw !== null && !targetRecord) { failed(); continue; }
        const existing = targetRecord ?? {};
        storage.setItem(prefix + current, JSON.stringify({ ...old, ...existing }));
        storage.removeItem(prefix + legacy);
        moved += 1;
      } catch {
        failed();
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
      failed();
      /* storage blocked or full: the old entries stay and are retried on the next start */
    }
  }
  return moved;
}

// AKS301 used to identify SIA; it now belongs to Accounting Data Analytics.
// Run this before ADA301 -> AKS301, and mark it once so future Analytics state stays under AKS301.
const SIA_COLLISION_MIGRATION = 'akuntansi-feb-unair:migration:aks301-sia:v1';
export function migrateLegacyCourseStorage(storage: StorageLike): number {
  let moved = 0;
  try {
    if (storage.getItem(SIA_COLLISION_MIGRATION) !== 'done') {
      let failed = false;
      moved += migrateCourseStorageMap(storage, { AKS301: 'SII306' }, () => { failed = true; });
      if (failed) return moved; // Retry before moving Analytics state into the reserved code.
      storage.setItem(SIA_COLLISION_MIGRATION, 'done');
    }
  } catch {
    return moved;
  }
  return moved + migrateCourseStorageMap(storage, LEGACY_COURSE_CODES, () => {});
}
