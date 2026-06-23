export type StoredExamSession = {
  picks: Record<number, number>;
  fillAnswers: Record<string, string>;
  matchAnswers: Record<string, string>;
  multiAnswers: Record<string, number[]>;
  orderingAnswers: Record<string, string>;
  markedForReview: Record<number, boolean>;
  submitted: boolean;
  autoSubmitted: boolean;
  examStarted: boolean;
  examDeadlineMs: number | null;
  datasetFingerprint: string;
  savedAt: number;
};

export function getExamSessionKey(courseCode: string, setId: string, durationSeconds: number): string {
  return `exam_session_${courseCode}_${setId}_${durationSeconds}`;
}

export function readStoredExamSession(key: string, datasetFingerprint: string): StoredExamSession | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const session = JSON.parse(raw) as StoredExamSession;
    if (session.datasetFingerprint !== datasetFingerprint) return null;
    return session;
  } catch (e) {
    return null;
  }
}

export function saveStoredExamSession(key: string, session: StoredExamSession): void {
  try {
    localStorage.setItem(key, JSON.stringify(session));
  } catch (e) {}
}

export function clearLegacyExamSessions(_courseCode: string, _currentSetId: string, _durationSeconds: number): void {
  // Helper function stub
}
