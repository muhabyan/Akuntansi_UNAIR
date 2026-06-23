import type { StudyCard } from '../../types';
import { AKK201_FC } from './akk201';
import { AKM201_FC } from './akm201';
import { MNU101_FC } from './mnu101';
import { AKA103_FC } from './aka103';
import { MAS122_FC } from './mas122';
import { PJK201_FC } from './pjk201';

const NON_PTE_REGISTRY: Record<string, StudyCard[]> = {
  AKK201: AKK201_FC,
  AKM201: AKM201_FC,
  MNU101: MNU101_FC,
  AKA103: AKA103_FC,
  MAS122: MAS122_FC,
  PJK201: PJK201_FC,
};

export function getNonPteFlashcards(code: string): StudyCard[] {
  return NON_PTE_REGISTRY[code] ?? [];
}
