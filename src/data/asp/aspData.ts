// =============================================================
// src/data/asp/aspData.ts
// Rangkuman KOMPREHENSIF Akuntansi Sektor Publik (AKS201)
// Sumber: PP 71/2010 (SAP Berbasis Akrual), Permendagri 77/2020,
//         UU Keuangan Negara (UU 17/2003, UU 1/2004, UU 15/2004),
//         UU 1/2022 HKPD, PP 23/2005 BLU, ISAK 35, SPKN BPK.
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
  uts: {
    tm: 8,
    title: 'Ringkasan Eksekutif Persiapan UTS Akuntansi Sektor Publik',
    ref: 'Kompilasi TM 1 s.d TM 7 | PP 71/2010 | UU Keuangan Negara',
    intro: 'Cheat sheet dan intisari kritis untuk menghadapi Ujian Tengah Semester Akuntansi Sektor Publik.',
    objectives: [
      'Menguasai karakteristik OSP vs Swasta.',
      'Menguasai klasifikasi Aset Neto ISAK 35.',
      'Menguasai Trilogi UU Keuangan Negara.',
      'Menguasai 6 Fungsi Anggaran & Sistem Penganggaran (PB, PPBS, ZBB).',
      'Menguasai 7 Laporan Keuangan SAP Akrual (PP 71/2010).'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UTS ASP' },
      {
        kind: 'ul',
        items: [
          '**Karakteristik OSP**: Non-profit, kepemilikan kolektif warga, pertanggungjawaban vertikal (hierarki) & horisontal (publik/DPRD).',
          '**ISAK 35**: Aset Neto Terikat (With Donor Restrictions) vs Tidak Terikat (Without Donor Restrictions).',
          '**UU 17/2003**: Mandat SAP Berbasis Akrual; 6 fungsi anggaran (Otorisasi, Perencanaan, Pengawasan, Alokasi, Distribusi, Stabilisasi).',
          '**Pendekatan Anggaran**: Performance Budgeting mengaitkan input ke output/outcome; ZBB mengevaluasi dari basis $0; PPBS berbasis program lintas sektoral.',
          '**Teknik Akuntansi**: Fund Accounting (unit dana terpisah); Budgetary Accounting (mencatat pagu anggaran); Commitment Accounting (mencatat encumbrance sejak PO).',
          '**7 Laporan PP 71/2010**: LRA & LP-SAL (Kas); LO, Neraca, LPE (Akrual); LAK (Kasda) & CaLK. Belanja Modal masuk LRA dan Neraca (bukan LO); LO mencatat Beban Depresiasi.'
        ]
      }
    ]
  },
  uas: {
    tm: 16,
    title: 'Ringkasan Eksekutif Persiapan UAS Akuntansi Sektor Publik',
    ref: 'Kompilasi TM 9 s.d TM 14 | Permendagri 77/2020 | SPKN BPK | PSAP 13',
    intro: 'Cheat sheet dan intisari kritis untuk menghadapi Ujian Akhir Semester Akuntansi Sektor Publik.',
    objectives: [
      'Menguasai Sistem Akuntansi SKPD vs PPKD & Akun Resiprokal.',
      'Menguasai Pengukuran Kinerja Value for Money (3E: Ekonomi, Efisiensi, Efektivitas).',
      'Menguasai Audit BPK (Keuangan, Kinerja, PDTT) & 4 Kriteria Opini.',
      'Memahami Akuntansi Partai Politik (UU 2/2011) & Dana Kampanye.',
      'Menguasai Fleksibilitas Pengelolaan Keuangan BLU/BLUD (PSAP 13).'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UAS ASP' },
      {
        kind: 'ul',
        items: [
          '**SAPD (Permendagri 77/2020)**: SKPD = Entitas Akuntansi (4 Laporan); PPKD = Entitas Pelaporan & Kasda (7 Laporan LKPD). Akun resiprokal: RK PPKD (di SKPD) dan RK SKPD (di PPKD) dieliminasi saat konsolidasi.',
          '**Value for Money (3E)**: Ekonomi = Input/Anggaran; Efisiensi = Input/Output; Efektivitas = Outcome/Target Outcome.',
          '**Audit BPK (UU 15/2004)**: 3 Jenis Pemeriksaan (Keuangan, Kinerja, DTT). 4 Kriteria Opini: Kesesuaian SAP, Kecukupan Pengungkapan, Kepatuhan Hukum, Efektivitas SPI. Tindak lanjut rekomendasi wajib 60 hari.',
          '**Partai Politik**: Minimal 60% bantuan keuangan negara untuk pendidikan politik; wajib diaudit tahunan oleh BPK.',
          '**BLU / BLUD (PSAP 13)**: Pendapatan operasional dapat langsung digunakan tanpa setor Kasda; fleksibilitas RBA; pembukuan SAK dikonsolidasi ke SAP.'
        ]
      }
    ]
  }
};