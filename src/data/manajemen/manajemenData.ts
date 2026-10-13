// src/data/manajemen/manajemenData.ts
// Rangkuman KOMPREHENSIF Pengantar Manajemen (MNU108; dulu dikatalogkan sebagai MNM101/MNM201)
// Sumber TM01-TM07: Daft & Marcic, Understanding Management 12e (2023), Ch. 1-7 — buku teks resmi RPP MNU108.
//         TM01-TM07 dibangun dari paket konten MNU108/TM01-TM07 dan hanya memuat fakta dari buku itu.
//         TM08 (review UTS) merangkum bacaan TM01-TM07 (Quick Reference dan Exam Traps disalin dari bacaan itu).
// Sumber TM09-TM15: Daft & Marcic, Understanding Management 12e (2023), Ch. 8-15,
//         sesuai RPP 2026; dibangun dari paket kanonik content-pipeline/MNU108.
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
import { TM15_READING } from './modules/tm15';
import { MNU108_UAS_REVIEW } from './modules/reviewUas';

export const MANAJEMEN_READINGS: Record<number, Reading> = {
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
  15: TM15_READING,
};

export const MANAJEMEN_REVIEW_READINGS: Record<string, Reading> = {
  uts: TM8_READING,
  uas: MNU108_UAS_REVIEW,
};
