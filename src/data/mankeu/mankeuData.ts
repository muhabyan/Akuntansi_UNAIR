// =============================================================
// src/data/mankeu/mankeuData.ts
// Rangkuman KOMPREHENSIF Manajemen Keuangan (MNK201)
// Sumber: Brigham, Eugene F. and Houston, Joel F. (2019/2022).
//         Fundamentals of Financial Management (15th/16th Ed.).
//         Cengage Learning.
// =============================================================
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

export const MNK201_READINGS: Record<number, Reading> = {
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

export const MNK201_REVIEW_READINGS: Record<string, Reading> = {
  uts: {
    tm: 8,
    title: 'Ringkasan Eksekutif Persiapan UTS Manajemen Keuangan',
    ref: 'Kompilasi TM 1 s.d TM 7 | Brigham & Houston Ch. 1-12',
    intro: 'Cheat sheet dan peta rumus esensial untuk menghadapi Ujian Tengah Semester Manajemen Keuangan.',
    objectives: [
      'Menguasai formula DuPont 3-Step.',
      'Menguasai TVM & Amortisasi Pinjaman.',
      'Menguasai CAPM & Beta Portofolio.',
      'Menguasai perhitungan WACC dan Hurdle Rate.',
      'Memahami evaluasi proyek NPV vs IRR.'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UTS Manajemen Keuangan' },
      {
        kind: 'ul',
        items: [
          '**Tujuan Finansial**: Memaksimalkan nilai intrinsik saham jangka panjang.',
          '**DuPont 3-Step**: ROE = Profit Margin × Asset Turnover × Equity Multiplier.',
          '**TVM**: Annuity Due selalu bernilai lebih tinggi dari Ordinary Annuity dengan pengali `(1 + I)`.',
          '**CAPM**: $r_i = r_{RF} + b_i(r_M - r_{RF})$; Pasar hanya memberi kompensasi atas risiko sistematis (Beta).',
          '**WACC**: $WACC = w_d r_d(1-T) + w_p r_p + w_c r_s$; Hanya bunga utang yang disesuaikan pajak.',
          '**Capital Budgeting**: Jika proyek mutually exclusive bentrok $\\rightarrow$ **Selalu pilih NPV tertinggi**.'
        ]
      }
    ]
  },
  uas: {
    tm: 16,
    title: 'Ringkasan Eksekutif Persiapan UAS Manajemen Keuangan',
    ref: 'Kompilasi TM 9 s.d TM 14 | Brigham & Houston Ch. 14-21',
    intro: 'Cheat sheet dan peta rumus esensial untuk menghadapi Ujian Akhir Semester Manajemen Keuangan.',
    objectives: [
      'Menguasai kalkulasi DOL, DFL, dan DTL.',
      'Memahami Residual Dividend Policy & Stock Repurchase.',
      'Menghitung Siklus Konversi Kas (CCC) & Cost of Trade Credit.',
      'Menghitung EOQ dan ROP persediaan.',
      'Menguasai Teori Paritas Valas (IRP & PPP) dan Model Altman Z-Score.'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UAS Manajemen Keuangan' },
      {
        kind: 'ul',
        items: [
          '**Leverage**: DOL = Gross Margin / EBIT; DFL = EBIT / (EBIT - I); DTL = DOL × DFL.',
          '**Struktur Modal**: Trade-Off Theory menyatakan struktur modal optimal tercapai saat manfaat tax shield seimbang dengan biaya kebangkrutan.',
          '**Cash Conversion Cycle**: $CCC = DII + DSO - DPO$; Biaya menolak diskon kredit dagang = $[\\%/(100-\\%)] \\times [365/(\\text{Jatuh Tempo}-\\text{Hari Diskon})]$.',
          '**Model EOQ**: $EOQ = \\sqrt{(2SO)/C}$; Titik pesan ulang $ROP = (\\text{Pemakaian Harian} \\times \\text{Lead Time}) + \\text{Safety Stock}$.',
          '**Valas**: IRP menghubungkan kurs forward dengan selisih suku bunga nominal; PPP menghubungkan kurs spot dengan selisih inflasi.',
          '**Altman Z-Score**: $Z > 2,99$ (Zona Aman); $Z < 1,81$ (Zona Bahaya Kebangkrutan).'
        ]
      }
    ]
  }
};