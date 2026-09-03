import type { AdvancedStudyCard } from '../../types';
import { AKK201_FC } from './akk201';
import { AKM201_FC } from './akm201';
import { MNU101_FC } from './mnu101';
import { AKA103_FC } from './aka103';
import { MAS122_FC } from './mas122';
import { PJK201_FC } from './pjk201';
import { AKS301_FC } from './aks301';
import { EKT109_FLASHCARDS } from './ekt109';

// Semester 3
import { AKK202_FC } from './akk202';
import { AKM202_FC } from './akm202';
import { AKS201_FC } from './aks201';
import { PJK202_FC } from './pjk202';
import { MNK201_FC } from './mnk201';
import { AKA201_FC } from './aka201';

import { AGX101_FC } from './agx101';
import { NOP103_FC } from './nop103';
import { BAI101_FC } from './bai101';
import { NOP104_FC } from './nop104';
import { SIP107_FC } from './sip107';
import { PHP103_FC } from './php103';
import { MNM107_FC } from './mnm107';
import { MNM106_FC } from './mnm106';

const FLASHCARD_REGISTRY: Record<string, AdvancedStudyCard[]> = {
  AGX101: AGX101_FC as AdvancedStudyCard[],
  NOP103: NOP103_FC as AdvancedStudyCard[],
  BAI101: BAI101_FC as AdvancedStudyCard[],
  NOP104: NOP104_FC as AdvancedStudyCard[],
  SIP107: SIP107_FC as AdvancedStudyCard[],
  PHP103: PHP103_FC as AdvancedStudyCard[],
  MNM107: MNM107_FC as AdvancedStudyCard[],
  MNM106: MNM106_FC as AdvancedStudyCard[],
  AKK201: AKK201_FC as AdvancedStudyCard[],
  AKM201: AKM201_FC as AdvancedStudyCard[],
  MNU101: MNU101_FC as AdvancedStudyCard[],
  AKA103: AKA103_FC as AdvancedStudyCard[],
  MAS122: MAS122_FC as AdvancedStudyCard[],
  PJK201: PJK201_FC as AdvancedStudyCard[],
  AKS301: AKS301_FC as AdvancedStudyCard[],
  EKT109: EKT109_FLASHCARDS as unknown as AdvancedStudyCard[],
  // Semester 3
  AKK202: AKK202_FC as AdvancedStudyCard[],
  AKM202: AKM202_FC as AdvancedStudyCard[],
  AKS201: AKS201_FC as AdvancedStudyCard[],
  PJK202: PJK202_FC as AdvancedStudyCard[],
  MNK201: MNK201_FC as AdvancedStudyCard[],
  AKA201: AKA201_FC as AdvancedStudyCard[],
};

export function getFlashcards(code: string): AdvancedStudyCard[] {
  return FLASHCARD_REGISTRY[code] ?? [];
}
