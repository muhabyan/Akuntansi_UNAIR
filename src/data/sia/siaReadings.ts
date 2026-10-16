import type { Reading } from '../../types';
import { SIA_TM1 } from './modules/tm1';
import { SIA_TM2 } from './modules/tm2';
import { SIA_TM3 } from './modules/tm3';
import { SIA_TM4 } from './modules/tm4';
import { SIA_TM5 } from './modules/tm5';
import { SIA_TM6 } from './modules/tm6';
import { SIA_TM7 } from './modules/tm7';
import { SIA_TM8 } from './modules/tm8Uas';
import { SIA_TM9 } from './modules/tm9Uas';
import { SIA_TM10 } from './modules/tm10Uas';
import { SIA_TM11 } from './modules/tm11Uas';
import { SIA_TM12 } from './modules/tm12Uas';
import { SIA_TM13 } from './modules/tm13Uas';
import { SIA_TM14 } from './modules/tm14Uas';
import { SII306_REVIEW_UTS_READING } from './siaReviewReadings';

export const SII306_READINGS: Record<number, Reading> = {
  1: SIA_TM1,
  2: SIA_TM2,
  3: SIA_TM3,
  4: SIA_TM4,
  5: SIA_TM5,
  6: SIA_TM6,
  7: SIA_TM7,
  8: SIA_TM8,
  9: SIA_TM9,
  10: SIA_TM10,
  11: SIA_TM11,
  12: SIA_TM12,
  13: SIA_TM13,
  14: SIA_TM14,
};

// Review UTS uses an independent object and progress key. TM14 remains the UAS module pointer.
export const SII306_REVIEW_READINGS: Partial<Record<'uts' | 'uas', Reading>> = {
  uts: SII306_REVIEW_UTS_READING,
  uas: SII306_READINGS[14],
};

export const AKS301_READINGS = SII306_READINGS;
export const AKS301_REVIEW_READINGS = SII306_REVIEW_READINGS;
