import type { AdvancedStudyCard } from '../../types';
import { AKK201_FC } from './akk201';
import { AKM201_FC } from './akm201';
import { MNU101_FC } from './mnu101';
import { AKA103_FC } from './aka103';
import { MAS122_FC } from './mas122';
import { PJK201_FC } from './pjk201';
import { EKT109_FLASHCARDS } from './ekt109';

const FLASHCARD_REGISTRY: Record<string, AdvancedStudyCard[]> = {
  AKK201: AKK201_FC as AdvancedStudyCard[],
  AKM201: AKM201_FC as AdvancedStudyCard[],
  MNU101: MNU101_FC as AdvancedStudyCard[],
  AKA103: AKA103_FC as AdvancedStudyCard[],
  MAS122: MAS122_FC as AdvancedStudyCard[],
  PJK201: PJK201_FC as AdvancedStudyCard[],
  EKT109: EKT109_FLASHCARDS as unknown as AdvancedStudyCard[],
};

export function getFlashcards(code: string): AdvancedStudyCard[] {
  return FLASHCARD_REGISTRY[code] ?? [];
}
