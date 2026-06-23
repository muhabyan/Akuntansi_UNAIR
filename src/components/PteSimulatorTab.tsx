import type { Course } from '../types';
import QuizView, { type QuizSet } from './QuizView';
import { EKT109_QUIZ_UTS_SIMULATOR, EKT109_QUIZ_UAS_SIMULATOR } from '../data/quizzes/ekt109Simulator';

export const PTE_SIMULATOR_SETS: QuizSet[] = [
  { id: 'uts', label: 'Simulasi UTS PTE (TM 1-7 · 70 Soal · 90 Menit)', items: EKT109_QUIZ_UTS_SIMULATOR },
  { id: 'uas', label: 'Simulasi UAS PTE (TM 8-14 · 80 Soal · 90 Menit)', items: EKT109_QUIZ_UAS_SIMULATOR },
];

export default function PteSimulatorTab({ course }: { course: Course }) {
  return <QuizView course={course} mode="exam" quizSetsOverride={PTE_SIMULATOR_SETS} />;
}
