// =============================================================
// src/data/quizzes/index.ts — registry bank soal / kuis per MK
// =============================================================
import type { QuizQuestion } from '../../types';
import { AKK201_QUIZ, AKK201_QUIZ_UTS, AKK201_QUIZ_UAS, AKK201_QUIZ_UAS_DIAGNOSTIC } from './akk201';
import { AKK201_QUIZ_UAS_SIMULATOR } from './akk201UasSimulator';
import { AKK201_QUIZ_UTS_SIMULATOR } from './akk201UtsSimulator';
import { AKM201_QUIZ, AKM201_QUIZ_UTS, AKM201_QUIZ_UAS } from './akm201';
import { EKT109_QUIZ } from './ekt109';
import { MNU101_QUIZ } from './mnu101';
import { AKA103_QUIZ } from './aka103';
import { MAS122_QUIZ_ALL } from './mas122';
import { PJK201_QUIZ_UAS_SIMULATOR } from './pjk201UasSimulator';
import { PJK201_QUIZ_UTS_SIMULATOR } from './pjk201UtsSimulator';

const REGISTRY: Record<string, QuizQuestion[]> = {
  AKK201: [...AKK201_QUIZ, ...AKK201_QUIZ_UTS_SIMULATOR, ...AKK201_QUIZ_UAS_SIMULATOR],
  AKM201: AKM201_QUIZ,
  EKT109: EKT109_QUIZ,
  MNU101: MNU101_QUIZ,
  AKA103: AKA103_QUIZ,
  MAS122: MAS122_QUIZ_ALL,
  PJK201: [...PJK201_QUIZ_UTS_SIMULATOR, ...PJK201_QUIZ_UAS_SIMULATOR],
};

export function getQuiz(courseCode: string): QuizQuestion[] {
  return REGISTRY[courseCode] ?? [];
}
export function hasQuiz(courseCode: string): boolean {
  return (REGISTRY[courseCode]?.length ?? 0) > 0;
}


export function getQuizSets(courseCode: string): { id: string; label: string; items: QuizQuestion[] }[] {
  if (courseCode === 'AKK201') {
    return [
      { id: 'uts', label: 'Kuis UTS: Praktik Interaktif TM 1-7', items: AKK201_QUIZ_UTS },
      { id: 'uts-simulator', label: 'Simulasi UTS AKM I — Website Mode 90 Menit (70 Soal)', items: AKK201_QUIZ_UTS_SIMULATOR },
      { id: 'uas', label: 'Kuis UAS: Praktik Interaktif TM 8-14', items: AKK201_QUIZ_UAS },
      { id: 'uas-diagnostic', label: 'Diagnostic UAS Final: Scored TM 8-14', items: AKK201_QUIZ_UAS_DIAGNOSTIC },
      { id: 'uas-simulator', label: 'Simulasi UAS AKM I — Website Mode 90 Menit (80 Soal)', items: AKK201_QUIZ_UAS_SIMULATOR },
    ];
  }
  if (courseCode === 'AKM201') {
    return [
      { id: 'uts', label: 'Simulasi UTS AKBI — Website Mode 90 Menit (70 Soal)', items: AKM201_QUIZ_UTS },
      { id: 'uas', label: 'Simulasi UAS AKBI — Website Mode 90 Menit (80 Soal)', items: AKM201_QUIZ_UAS },
    ];
  }
  if (courseCode === 'PJK201') {
    return [
      { id: 'uts', label: 'Simulasi UTS Perpajakan I (TM 1-7 · 70 Soal · 90 Menit)', items: PJK201_QUIZ_UTS_SIMULATOR },
      { id: 'uas', label: 'Simulasi UAS Perpajakan I (TM 8-14 · 80 Soal · 90 Menit)', items: PJK201_QUIZ_UAS_SIMULATOR },
    ];
  }
  const items = getQuiz(courseCode);
  return items.length ? [{ id: 'all', label: 'Kuis Interaktif', items }] : [];
}
