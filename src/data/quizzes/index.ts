// =============================================================
// src/data/quizzes/index.ts — registry bank soal / kuis per MK
// =============================================================
import type { QuizQuestion } from '../../types';
import { AKK201_QUIZ, AKK201_QUIZ_UTS, AKK201_QUIZ_UAS, AKK201_QUIZ_UAS_DIAGNOSTIC } from './akk201';
import { AKK201_QUIZ_UAS_SIMULATOR } from './akk201UasSimulator';
import { AKK201_QUIZ_UTS_SIMULATOR } from './akk201UtsSimulator';
import { AKM201_QUIZ, AKM201_QUIZ_UTS, AKM201_QUIZ_UAS } from './akm201';
import { EKT109_QUIZ } from './ekt109';
import { EKT109_UAS_SIMULATOR } from './ekt109UasSimulator';
import { MNU101_QUIZ } from './mnu101';
import { MNU101_UTS_SIMULATOR } from './mnu101UtsSimulator';
import { MNU101_UAS_SIMULATOR } from './mnu101UasSimulator';
import { AKA103_QUIZ_UTS_SIMULATOR } from './aka103UtsSimulator';
import { AKA103_QUIZ_UAS_SIMULATOR } from './aka103UasSimulator';
import { MAS122_QUIZ, MAS122_UAS_2024, MAS122_QUIZ_ALL } from './mas122';
import { PJK201_QUIZ_UAS_SIMULATOR } from './pjk201UasSimulator';
import { PJK201_QUIZ_UTS_SIMULATOR } from './pjk201UtsSimulator';

const REGISTRY: Record<string, QuizQuestion[]> = {
  AKK201: [...AKK201_QUIZ, ...AKK201_QUIZ_UTS_SIMULATOR, ...AKK201_QUIZ_UAS_SIMULATOR],
  AKM201: AKM201_QUIZ,
  EKT109: [...EKT109_QUIZ, ...EKT109_UAS_SIMULATOR],
  MNU101: [...MNU101_QUIZ, ...MNU101_UTS_SIMULATOR, ...MNU101_UAS_SIMULATOR],
  AKA103: [...AKA103_QUIZ_UTS_SIMULATOR, ...AKA103_QUIZ_UAS_SIMULATOR],
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
  if (courseCode === 'MNU101') {
    return [
      { id: 'quiz', label: 'Kuis Interaktif Dasar (15 Soal)', items: MNU101_QUIZ },
      { id: 'uts-simulator', label: 'Simulasi UTS Pengantar Bisnis — Website Mode 90 Menit (40 Soal Pilihan Ganda)', items: MNU101_UTS_SIMULATOR },
      { id: 'uas-simulator', label: 'Simulasi UAS Pengantar Bisnis — Website Mode 90 Menit (50 Soal Pilihan Ganda · Bocoran & Prioritas)', items: MNU101_UAS_SIMULATOR },
    ];
  }
  if (courseCode === 'PJK201') {
    return [
      { id: 'uts', label: 'Simulasi UTS Perpajakan I (TM 1-7 · 70 Soal · 90 Menit)', items: PJK201_QUIZ_UTS_SIMULATOR },
      { id: 'uas', label: 'Simulasi UAS Perpajakan I (TM 8-14 · 80 Soal · 90 Menit)', items: PJK201_QUIZ_UAS_SIMULATOR },
    ];
  }
  if (courseCode === 'AKA103') {
    return [
      { id: 'uts', label: `Simulasi UTS Etika Profesi (TM 1-7 · ${AKA103_QUIZ_UTS_SIMULATOR.length} Soal)`, items: AKA103_QUIZ_UTS_SIMULATOR },
      { id: 'uas', label: `Simulasi UAS Etika Profesi (TM 8-14 · ${AKA103_QUIZ_UAS_SIMULATOR.length} Soal)`, items: AKA103_QUIZ_UAS_SIMULATOR },
    ];
  }
  if (courseCode === 'EKT109') {
    return [
      { id: 'quiz', label: `Kuis Interaktif Lengkap PTE`, items: EKT109_QUIZ },
      { id: 'uas', label: `Simulasi UAS Pengantar Teori Ekonomi (TM 8-14 · ${EKT109_UAS_SIMULATOR.length} Soal)`, items: EKT109_UAS_SIMULATOR },
    ];
  }
  if (courseCode === 'MAS122') {
    return [
      { id: 'uas', label: `Simulasi UAS Statistik — Website Mode 90 Menit (40 Soal Sesuai Bocoran UAS 2024)`, items: MAS122_UAS_2024 },
      { id: 'uts', label: `Simulasi UTS Statistik — Website Mode 90 Menit (30 Soal Distribusi & Hipotesis)`, items: MAS122_QUIZ },
      { id: 'all', label: `Kompilasi Seluruh Soal Statistik (${MAS122_QUIZ_ALL.length} Soal Komprehensif)`, items: MAS122_QUIZ_ALL },
    ];
  }
  const items = getQuiz(courseCode);
  return items.length ? [{ id: 'all', label: 'Kuis Interaktif', items }] : [];
}
