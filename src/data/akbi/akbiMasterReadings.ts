// =============================================================
// src/data/akbi/akbiMasterReadings.ts
// Master final data AKBI setelah konversi bertahap.
//
// File ini hanya menggabungkan data batch AKBI.
// Tidak mengubah UI, CourseLayout, styling, registry, atau course lain.
// =============================================================
import type { Reading } from '../../types';

import { AKBI_TM1_TM3_READINGS } from './akbiMasterReadingsTm1Tm3';
import {
  AKBI_TM4_TM7_READINGS,
  AKBI_REVIEW_UTS_READING,
} from './akbiMasterReadingsTm4Tm7ReviewUts';
import { AKBI_TM8_TM11_READINGS } from './akbiMasterReadingsTm8Tm11';
import {
  AKBI_TM12_TM14_READINGS,
  AKBI_REVIEW_UAS_READING,
} from './akbiMasterReadingsTm12Uas';

export type AkbiMasterItemKind = 'tm' | 'review_uts' | 'review_uas';

export type AkbiMasterOrderedItem = {
  kind: AkbiMasterItemKind;
  key: string;
  reading: Reading;
};

/**
 * Record utama yang kompatibel dengan CourseLayout lama dan courseRegistry.
 *
 * CourseLayout saat ini membaca data melalui Record<number, Reading>,
 * sehingga record ini hanya memakai key numerik TM 1 sampai TM 14.
 * Simulasi UTS dan Simulasi UAS tetap diekspor terpisah dan juga tersedia
 * dalam AKBI_MASTER_ORDERED_ITEMS untuk integrasi tab review tahap berikutnya.
 */
export const AKBI_MASTER_READINGS: Record<number, Reading> = {
  1: AKBI_TM1_TM3_READINGS[1],
  2: AKBI_TM1_TM3_READINGS[2],
  3: AKBI_TM1_TM3_READINGS[3],

  4: AKBI_TM4_TM7_READINGS[4],
  5: AKBI_TM4_TM7_READINGS[5],
  6: AKBI_TM4_TM7_READINGS[6],
  7: AKBI_TM4_TM7_READINGS[7],

  8: AKBI_TM8_TM11_READINGS[8],
  9: AKBI_TM8_TM11_READINGS[9],
  10: AKBI_TM8_TM11_READINGS[10],
  11: AKBI_TM8_TM11_READINGS[11],

  12: AKBI_TM12_TM14_READINGS[12],
  13: AKBI_TM12_TM14_READINGS[13],
  14: AKBI_TM12_TM14_READINGS[14],
};

/**
 * Urutan konten akademik lengkap sesuai spesifikasi AKBI.
 *
 * Export ini menjaga posisi Simulasi UTS setelah TM 7 dan Simulasi UAS
 * setelah TM 14 tanpa memaksa CourseLayout lama membaca review sebagai TM.
 */
export const AKBI_MASTER_ORDERED_ITEMS: AkbiMasterOrderedItem[] = [
  { kind: 'tm', key: 'tm-1', reading: AKBI_MASTER_READINGS[1] },
  { kind: 'tm', key: 'tm-2', reading: AKBI_MASTER_READINGS[2] },
  { kind: 'tm', key: 'tm-3', reading: AKBI_MASTER_READINGS[3] },
  { kind: 'tm', key: 'tm-4', reading: AKBI_MASTER_READINGS[4] },
  { kind: 'tm', key: 'tm-5', reading: AKBI_MASTER_READINGS[5] },
  { kind: 'tm', key: 'tm-6', reading: AKBI_MASTER_READINGS[6] },
  { kind: 'tm', key: 'tm-7', reading: AKBI_MASTER_READINGS[7] },
  { kind: 'review_uts', key: 'review-uts', reading: AKBI_REVIEW_UTS_READING },
  { kind: 'tm', key: 'tm-8', reading: AKBI_MASTER_READINGS[8] },
  { kind: 'tm', key: 'tm-9', reading: AKBI_MASTER_READINGS[9] },
  { kind: 'tm', key: 'tm-10', reading: AKBI_MASTER_READINGS[10] },
  { kind: 'tm', key: 'tm-11', reading: AKBI_MASTER_READINGS[11] },
  { kind: 'tm', key: 'tm-12', reading: AKBI_MASTER_READINGS[12] },
  { kind: 'tm', key: 'tm-13', reading: AKBI_MASTER_READINGS[13] },
  { kind: 'tm', key: 'tm-14', reading: AKBI_MASTER_READINGS[14] },
  { kind: 'review_uas', key: 'review-uas', reading: AKBI_REVIEW_UAS_READING },
];

/** Simulasi khusus, dipakai nanti saat tab Simulasi UTS dan Simulasi UAS dibuat. */
export const AKBI_REVIEW_READINGS = {
  uts: AKBI_REVIEW_UTS_READING,
  uas: AKBI_REVIEW_UAS_READING,
};

/** Alias untuk kompatibilitas dengan courseRegistry lama. */
export const AKM201_READINGS: Record<number, Reading> = AKBI_MASTER_READINGS;

export default AKBI_MASTER_READINGS;
