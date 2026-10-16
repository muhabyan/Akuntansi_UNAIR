import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';
import type { Reading } from '../../types';
import { collectSelfChecks, learningHash, readLearningJournal, writeLearningJournal } from '../../lib/learningJournal';
import { getReadingBlockId } from './ReadingOutline';
interface Scope { courseCode: string; tm: number; version: string; anchors: Record<string, string> }
const LearningContext = createContext<Scope | null>(null);
export const useLearningScope = () => useContext(LearningContext);
export default function LearningScope({ courseCode, tm, reading, children }: { courseCode: string; tm: number; reading: Reading; children: ReactNode }) {
  const scope = useMemo(() => ({ courseCode, tm, version: learningHash(JSON.stringify(reading.blocks)), anchors: Object.fromEntries(collectSelfChecks(reading.blocks).map(({ block, anchorIndex }) => [block.question, getReadingBlockId(reading.blocks[anchorIndex], anchorIndex) ?? ''])) }), [courseCode, tm, reading]);
  useEffect(() => {
    if (tm <= 0 || tm > 40) return;
    const journal = readLearningJournal();
    writeLearningJournal({ ...journal, visits: [{ courseCode, tm, updatedAt: Date.now() }, ...journal.visits.filter(visit => visit.courseCode !== courseCode)].slice(0, 40) });
  }, [courseCode, tm]);
  return <LearningContext.Provider value={scope}>{children}</LearningContext.Provider>;
}
