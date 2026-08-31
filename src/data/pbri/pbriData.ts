// =============================================================
// src/data/pbri/pbriData.ts
// Rangkuman KOMPREHENSIF Pengauditan Berbasis Risiko I (AKA201)
// Sumber: Arens et al. (16th ed 2024), IAASB ISA Handbook,
//         Standar Audit IAPI (SA 200, 210, 220, 230, 240, 265,
//         300, 315, 320, 330, 450, 500, 520, 700, 701, 705, 706),
//         Kode Etik IESBA/IAPI, COSO Internal Control (2013).
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

export const AKA201_READINGS: Record<number, Reading> = {
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

export const AKA201_REVIEW_READINGS: Record<string, Reading> = {
  uts: {
    tm: 8,
    title: 'Ringkasan Eksekutif Persiapan UTS Pengauditan Berbasis Risiko I',
    ref: 'Kompilasi TM 1 s.d TM 7 | Arens Ch. 1-9 | Standar Audit IAPI',
    intro: 'Cheat sheet dan intisari kritis untuk menghadapi Ujian Tengah Semester PBR I.',
    objectives: [
      'Menguasai konsep asurans dan pembedaan pengauditan vs akuntansi.',
      'Menganalisis ancaman independensi dan safeguards etika.',
      'Memetakan asersi manajemen ke tujuan audit spesifik.',
      'Merumuskan jenis opini audit (WTP, WDP, Tidak Wajar, Disclaimer).',
      'Menghitung Overall Materiality dan Performance Materiality.'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UTS PBR I' },
      {
        kind: 'ul',
        items: [
          '**Reasonable Assurance**: Auditor memberikan keyakinan memadai (bukan mutlak) atas kewajaran laporan keuangan secara keseluruhan.',
          '**Contingent Fee**: Dilarang keras dalam perikatan audit laporan keuangan karena merusak independensi.',
          '**Asersi Occurrence vs Existence**: Occurrence untuk transaksi laba rugi; Existence untuk saldo aset neraca.',
          '**Tracing vs Vouching**: Tracing (Dokumen ke Jurnal = Kelengkapan); Vouching (Jurnal ke Dokumen = Keterjadian).',
          '**Opini Modifikasian**: WDP (Material tp tdk pervasif); Tidak Wajar (Salah saji material & pervasif); Disclaimer (Pembatasan lingkup material & pervasif).',
          '**Materialitas SA 320**: Benchmark umum 5% Laba Sebelum Pajak; Performance Materiality 50-75% OM.',
          '**Prosedur Analitis**: Wajib pada tahap Perencanaan dan Reviu Akhir.'
        ]
      }
    ]
  },
  uas: {
    tm: 16,
    title: 'Ringkasan Eksekutif Persiapan UAS Pengauditan Berbasis Risiko I',
    ref: 'Kompilasi TM 9 s.d TM 14 | Arens Ch. 8-13 | Standar Audit ISA/IAPI',
    intro: 'Cheat sheet dan intisari kritis untuk menghadapi Ujian Akhir Semester PBR I.',
    objectives: [
      'Menguasai Audit Risk Model dan Planned Detection Risk.',
      'Memahami Segitiga Kecurangan (Fraud Triangle) dan Journal Entry Testing.',
      'Menguasai 5 komponen COSO dan Segregasi Tugas.',
      'Membedakan 5 jenis pengujian audit (TOC, STOT, SAP, TOD).',
      'Memahami teknik CAATs (Test Data, Parallel Simulation, EAM).'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UAS PBR I' },
      {
        kind: 'ul',
        items: [
          '**Audit Risk Model**: PDR = AAR / (IR × CR). Jika IR/CR naik, PDR turun, bukti substantif harus diperbanyak.',
          '**Fraud SA 240**: Wajib berasumsi ada risiko kecurangan pengakuan pendapatan; wajib uji jurnal penyesuaian (Management Override).',
          '**COSO 2013**: 5 Komponen (Lingkungan Pengendalian, Penilaian Risiko, Aktivitas Pengendalian, Info & Komunikasi, Pemantauan).',
          '**Segregasi Tugas**: Pisahkan Custody, Authorization, Recording, dan Reconciliation.',
          '**Test of Controls (TOC)**: Menguji efektivitas operasi kontrol; jika efektif, auditor dapat menekan sampel Test of Details (TOD).',
          '**CAATs / TABK**: Test Data (menguji logic program); Parallel Simulation (memproses ulang data riil dengan program auditor); Embedded Audit Module (monitoring real-time).'
        ]
      }
    ]
  }
};