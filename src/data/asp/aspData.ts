// src/data/asp/aspData.ts
// Rangkuman KOMPREHENSIF Akuntansi Sektor Publik (AKS201)
// Sumber: PP 71/2010 (SAP Berbasis Akrual), Permendagri 77/2020 (Pedoman Teknis Pengelolaan Keuangan Daerah),
//         ISAK 35 (Penyajian Laporan Keuangan Entitas Berorientasi Nonlaba),
//         Paket UU Keuangan Negara (UU 17/2003, UU 1/2004, UU 15/2004, UU 15/2006),
//         Buku Teks: Mardiasmo (2018), Deddi Nordiawan (2019), Indra Bastian (2015).
import type { Reading } from '../../types';
import { TM1_READING } from './modules/tm1';
import { TM2_READING } from './modules/tm2';
import { TM3_READING } from './modules/tm3';
import { TM4_READING } from './modules/tm4';
import { TM5_READING } from './modules/tm5';
import { TM6_READING } from './modules/tm6';
import { TM7_READING } from './modules/tm7';
import { TM8_READING } from './modules/tm8';
import { TM9_READING } from './modules/tm9';
import { TM10_READING } from './modules/tm10';
import { TM11_READING } from './modules/tm11';
import { TM12_READING } from './modules/tm12';
import { TM13_READING } from './modules/tm13';
import { TM14_READING } from './modules/tm14';

/**
 * Kontrak ASP menomori pertemuan 1 sampai 14 berurutan (UTS dan UAS tidak diberi nomor).
 * Materi setelah UTS karena itu dimulai di TM 8: SAPP/SAPD (TM 8), kinerja (TM 9), audit (TM 10), nirlaba (TM 11),
 * BLU/BLUD (TM 13), dan topik riset (TM 14). TM 12 (laporan keuangan partai politik) masih disiapkan sebagai bacaan tersendiri;
 * ringkasannya sementara ada di TM 11.
 */
const withTm = (reading: Reading, tm: number): Reading => ({ ...reading, tm });

export const AKS201_READINGS: Record<number, Reading> = {
  1: TM1_READING,
  2: TM2_READING,
  3: TM3_READING,
  4: TM4_READING,
  5: TM5_READING,
  6: TM6_READING,
  7: TM7_READING,
  8: withTm(TM9_READING, 8),
  9: withTm(TM10_READING, 9),
  10: withTm(TM11_READING, 10),
  11: withTm(TM12_READING, 11),
  13: withTm(TM13_READING, 13),
  14: TM14_READING,
};

export const AKS201_REVIEW_READINGS: Record<string, Reading> = {
  uts: TM8_READING,
};
