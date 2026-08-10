import type { StudyCard } from '../../types';
import { AKK201_FC } from './akk201';
import { AKM201_FC } from './akm201';
import { MNU101_FC } from './mnu101';
import { AKA103_FC } from './aka103';
import { MAS122_FC } from './mas122';
import { PJK201_FC } from './pjk201';

import { AGX101_FC } from './agx101';
import { NOP103_FC } from './nop103';
import { BAI101_FC } from './bai101';
import { NOP104_FC } from './nop104';
import { SIP107_FC } from './sip107';
import { PHP103_FC } from './php103';
import { MNM107_FC } from './mnm107';
import { MNM106_FC } from './mnm106';
const NON_PTE_REGISTRY: Record<string, StudyCard[]> = {
  AGX101: AGX101_FC,
  NOP103: NOP103_FC,
  BAI101: BAI101_FC,
  NOP104: NOP104_FC,
  SIP107: SIP107_FC,
  PHP103: PHP103_FC,
  MNM107: MNM107_FC,
  MNM106: MNM106_FC,
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
