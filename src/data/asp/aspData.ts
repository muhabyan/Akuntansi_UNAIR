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

export const AKS201_READINGS: Record<number, Reading> = {
  1: TM1_READING,
  2: TM2_READING,
  3: TM3_READING,
  4: TM4_READING,
  5: TM5_READING,
  6: TM6_READING,
  7: TM7_READING,
  8: TM8_READING,
  9: TM9_READING,
  10: TM10_READING,
  11: TM11_READING,
  12: TM12_READING,
  13: TM13_READING,
  14: TM14_READING,
};

export const AKS201_REVIEW_READINGS: Record<string, Reading> = {
  uts: TM8_READING,
  uas: TM14_READING,
};
