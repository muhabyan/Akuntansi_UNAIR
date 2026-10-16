import type { ContentBlock } from '../types';
export type LearningRating = 'unreviewed' | 'review' | 'understood';
export interface LearningAttempt { courseCode: string; tm: number; question: string; draft: string; rating: LearningRating; sectionId: string; updatedAt: number }
export interface LearningVisit { courseCode: string; tm: number; updatedAt: number }
export interface LearningJournal { attempts: Record<string, LearningAttempt>; visits: LearningVisit[] }
export const LEARNING_KEY = 'akuntansihub:learning-journal:v1';
export const LEARNING_EVENT = 'akuntansihub:learning-journal-updated';
export function learningHash(text: string): string {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index++) hash = Math.imul(hash ^ text.charCodeAt(index), 16777619);
  return (hash >>> 0).toString(36);
}
export function collectSelfChecks(blocks: ContentBlock[]): Array<{ block: Extract<ContentBlock, { kind: 'self-check' }>; anchorIndex: number }> {
  const result: ReturnType<typeof collectSelfChecks> = [];
  let sectionIndex = 0;
  const walk = (block: ContentBlock, anchorIndex: number) => {
    if (block.kind === 'self-check' && block.question.trim()) result.push({ block, anchorIndex });
    if ('blocks' in block && Array.isArray(block.blocks)) block.blocks.forEach(child => walk(child, anchorIndex));
    // Answer blocks are deliberately excluded: do not turn an answer into a fresh task.
  };
  blocks.forEach((block, index) => { if (block.kind === 'h2' || block.kind === 'section') sectionIndex = index; walk(block, sectionIndex); });
  return result.filter((item, index) => result.findIndex(other => other.block.question === item.block.question) === index);
}
export function attemptKey(courseCode: string, tm: number, version: string, question: string): string {
  return `${courseCode}:${tm}:${version}:${learningHash(question)}`;
}
export function readLearningJournal(storage?: Pick<Storage, 'getItem'>): LearningJournal {
  const empty: LearningJournal = { attempts: {}, visits: [] };
  try {
    const raw = (storage ?? (typeof localStorage === 'undefined' ? undefined : localStorage))?.getItem(LEARNING_KEY);
    if (!raw || raw.length > 2_000_000) return empty;
    const value = JSON.parse(raw);
    for (const [key, item] of Object.entries(value.attempts ?? {}).slice(-200)) {
      if (!item || typeof item !== 'object') continue;
      const entry = item as LearningAttempt;
      if (key.length < 120 && /^[A-Z0-9]+$/.test(entry.courseCode) && Number.isInteger(entry.tm) && entry.tm > 0 && entry.tm <= 40 && typeof entry.question === 'string' && typeof entry.draft === 'string' && ['unreviewed', 'review', 'understood'].includes(entry.rating) && Number.isFinite(entry.updatedAt) && typeof entry.sectionId === 'string') empty.attempts[key] = { ...entry, question: entry.question.slice(0, 2000), draft: entry.draft.slice(0, 4000) };
    }
    empty.visits = (Array.isArray(value.visits) ? value.visits : []).filter((entry: LearningVisit) => entry && /^[A-Z0-9]+$/.test(entry.courseCode) && Number.isInteger(entry.tm) && entry.tm > 0 && entry.tm <= 40 && Number.isFinite(entry.updatedAt)).slice(0, 40);
  } catch { /* Corrupt or unavailable storage never blocks studying. */ }
  return empty;
}
export function writeLearningJournal(journal: LearningJournal, storage?: Pick<Storage, 'setItem'>): boolean {
  try {
    const target = storage ?? (typeof localStorage === 'undefined' ? undefined : localStorage);
    if (!target) return false;
    const attempts = Object.fromEntries(Object.entries(journal.attempts).sort((a, b) => b[1].updatedAt - a[1].updatedAt).slice(0, 200));
    target.setItem(LEARNING_KEY, JSON.stringify({ attempts, visits: journal.visits.slice(0, 40) }));
    if (typeof window !== 'undefined') window.dispatchEvent(new Event(LEARNING_EVENT));
    return true;
  } catch { return false; }
}
