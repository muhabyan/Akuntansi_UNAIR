// Registry flashcard per mata kuliah.
import type { StudyCard } from '../../types';
import { EKT109_FC } from './ekt109';
import { getNonPteFlashcards } from './nonPte';

export function getFlashcards(code: string): StudyCard[] {
  return code === 'EKT109' ? EKT109_FC : getNonPteFlashcards(code);
}

export function hasFlashcards(code: string): boolean {
  return getFlashcards(code).length > 0;
}
