// src/data/manajemen/manajemenData.ts
// Rangkuman KOMPREHENSIF Pengantar Manajemen (MNU108; dulu dikatalogkan sebagai MNM101/MNM201)
// Sumber TM01: Daft & Marcic, Understanding Management 12e (2023), Ch. 1 — buku teks resmi RPP MNU108.
//         TM01 dibangun dari paket konten MNU108/TM01 dan hanya memuat fakta dari buku itu.
// Sumber TM02-TM14 (belum disinkronkan ke 12e): Richard L. Daft (Management 13e/14e),
//         Stephen P. Robbins (Management 15e/16e), Henry Mintzberg, Peter Drucker, Michael Porter,
//         Geert Hofstede, Herbert Simon, Kurt Lewin, Bruce Tuckman, Hackman & Oldham.
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
};

export const MANAJEMEN_REVIEW_READINGS: Record<string, Reading> = {
  uts: TM8_READING,
  uas: TM14_READING,
};
