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

import { AKK106_QUIZ } from './akk106';
import { AGX101_QUIZ } from './agx101';
import { NOP103_QUIZ } from './nop103';
import { BAI101_QUIZ } from './bai101';
import { NOP104_QUIZ } from './nop104';
import { SIP107_QUIZ } from './sip107';
import { PHP103_QUIZ } from './php103';
import { MNM107_QUIZ } from './mnm107';
import { MNM106_QUIZ } from './mnm106';

// Semester 3
import { MNM101_QUIZ, MNM101_QUIZ_UTS, MNM101_QUIZ_UAS } from './mnm101';
import { AKK202_QUIZ, AKK202_QUIZ_UTS, AKK202_QUIZ_UAS } from './akk202';
import { AKM202_QUIZ, AKM202_QUIZ_UTS, AKM202_QUIZ_UAS } from './akm202';
import { AKS201_QUIZ, AKS201_QUIZ_UTS, AKS201_QUIZ_UAS } from './aks201';
import { PJK202_QUIZ, PJK202_QUIZ_UTS, PJK202_QUIZ_UAS } from './pjk202';
import { MNK201_QUIZ, MNK201_QUIZ_UTS, MNK201_QUIZ_UAS } from './mnk201';
import { AKA201_QUIZ, AKA201_QUIZ_UTS, AKA201_QUIZ_UAS } from './aka201';
import { AKS301_QUIZ, AKS301_QUIZ_UTS, AKS301_QUIZ_UAS } from './aks301';

const REGISTRY: Record<string, QuizQuestion[]> = {
  AKK106: AKK106_QUIZ,
  AGX101: AGX101_QUIZ,
  NOP103: NOP103_QUIZ,
  BAI101: BAI101_QUIZ,
  NOP104: NOP104_QUIZ,
  SIP107: SIP107_QUIZ,
  PHP103: PHP103_QUIZ,
  MNM107: MNM107_QUIZ,
  MNM106: MNM106_QUIZ,
  AKK201: [...AKK201_QUIZ, ...AKK201_QUIZ_UTS_SIMULATOR, ...AKK201_QUIZ_UAS_SIMULATOR],
  AKM201: AKM201_QUIZ,
  EKT109: [...EKT109_QUIZ, ...EKT109_UAS_SIMULATOR],
  MNU101: [...MNU101_QUIZ, ...MNU101_UTS_SIMULATOR, ...MNU101_UAS_SIMULATOR],
  AKA103: [...AKA103_QUIZ_UTS_SIMULATOR, ...AKA103_QUIZ_UAS_SIMULATOR],
  MAS122: MAS122_QUIZ_ALL,
  PJK201: [...PJK201_QUIZ_UTS_SIMULATOR, ...PJK201_QUIZ_UAS_SIMULATOR],
  // Semester 3
  MNM101: MNM101_QUIZ,
  MNM201: MNM101_QUIZ,
  AKK202: AKK202_QUIZ,
  AKM202: AKM202_QUIZ,
  AKS201: AKS201_QUIZ,
  PJK202: PJK202_QUIZ,
  MNK201: MNK201_QUIZ,
  AKA201: AKA201_QUIZ,
  AKS301: AKS301_QUIZ,
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
  // Semester 3 Sets
  if (courseCode === 'MNM101' || courseCode === 'MNM201') {
    return [
      { id: 'uts', label: 'Kuis Praktik Pra-UTS Pengantar Manajemen (TM 1–7)', items: MNM101_QUIZ_UTS },
      { id: 'uas', label: 'Kuis Praktik Pra-UAS Pengantar Manajemen (TM 8–14)', items: MNM101_QUIZ_UAS },
      { id: 'all', label: 'Kompilasi Kuis Lengkap Pengantar Manajemen (14 TM)', items: MNM101_QUIZ },
    ];
  }
  if (courseCode === 'AKK202') {
    return [
      { id: 'uts', label: 'Kuis Praktik Pra-UTS AKM II (TM 1–7)', items: AKK202_QUIZ_UTS },
      { id: 'uas', label: 'Kuis Praktik Pra-UAS AKM II (TM 8–14)', items: AKK202_QUIZ_UAS },
      { id: 'all', label: 'Kompilasi Kuis Lengkap AKM II (14 TM)', items: AKK202_QUIZ },
    ];
  }
  if (courseCode === 'AKM202') {
    return [
      { id: 'uts', label: 'Kuis Praktik Pra-UTS Akuntansi Manajemen (TM 1–7)', items: AKM202_QUIZ_UTS },
      { id: 'uas', label: 'Kuis Praktik Pra-UAS Akuntansi Manajemen (TM 8–14)', items: AKM202_QUIZ_UAS },
      { id: 'all', label: 'Kompilasi Kuis Lengkap Akuntansi Manajemen (14 TM)', items: AKM202_QUIZ },
    ];
  }
  if (courseCode === 'AKS201') {
    return [
      { id: 'uts', label: 'Kuis Praktik Pra-UTS Akuntansi Sektor Publik (TM 1–7)', items: AKS201_QUIZ_UTS },
      { id: 'uas', label: 'Kuis Praktik Pra-UAS Akuntansi Sektor Publik (TM 8–14)', items: AKS201_QUIZ_UAS },
      { id: 'all', label: 'Kompilasi Kuis Lengkap Sektor Publik (14 TM)', items: AKS201_QUIZ },
    ];
  }
  if (courseCode === 'PJK202') {
    return [
      { id: 'uts', label: 'Kuis Praktik Pra-UTS Perpajakan II (TM 1–7)', items: PJK202_QUIZ_UTS },
      { id: 'uas', label: 'Kuis Praktik Pra-UAS Perpajakan II (TM 8–14)', items: PJK202_QUIZ_UAS },
      { id: 'all', label: 'Kompilasi Kuis Lengkap Perpajakan II (14 TM)', items: PJK202_QUIZ },
    ];
  }
  if (courseCode === 'MNK201') {
    return [
      { id: 'uts', label: 'Kuis Praktik Pra-UTS Manajemen Keuangan (TM 1–7)', items: MNK201_QUIZ_UTS },
      { id: 'uas', label: 'Kuis Praktik Pra-UAS Manajemen Keuangan (TM 8–14)', items: MNK201_QUIZ_UAS },
      { id: 'all', label: 'Kompilasi Kuis Lengkap Manajemen Keuangan (14 TM)', items: MNK201_QUIZ },
    ];
  }
  if (courseCode === 'AKA201') {
    return [
      { id: 'uts', label: 'Kuis Praktik Pra-UTS Pengauditan Berbasis Risiko I (TM 1–7)', items: AKA201_QUIZ_UTS },
      { id: 'uas', label: 'Kuis Praktik Pra-UAS Pengauditan Berbasis Risiko I (TM 8–14)', items: AKA201_QUIZ_UAS },
      { id: 'all', label: 'Kompilasi Kuis Lengkap Pengauditan I (14 TM)', items: AKA201_QUIZ },
    ];
  }
  if (courseCode === 'AKS301') {
    return [
      { id: 'uts', label: 'Kuis Praktik Pra-UTS Sistem Informasi Akuntansi (TM 1–7)', items: AKS301_QUIZ_UTS },
      { id: 'uas', label: 'Kuis Praktik Pra-UAS Sistem Informasi Akuntansi (TM 8–14)', items: AKS301_QUIZ_UAS },
      { id: 'all', label: 'Kompilasi Kuis Lengkap SIA (14 TM)', items: AKS301_QUIZ },
    ];
  }
  const items = getQuiz(courseCode);
  return items.length ? [{ id: 'all', label: 'Kuis Interaktif', items }] : [];
}
