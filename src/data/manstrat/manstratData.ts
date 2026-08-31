// =============================================================
// src/data/manstrat/manstratData.ts
// Rangkuman KOMPREHENSIF Manajemen Strategik (MNS301 / MNU307)
// Sumber: Dess et al., Strategic Management 11e (2024),
//         Kim & Mauborgne, Blue Ocean Strategy,
//         Kaplan & Norton, Strategy Maps,
//         Silabus Resmi RPP FEB Universitas Airlangga
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

export const MANSTRAT_READINGS: Record<number, Reading> = {
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

export const MANSTRAT_REVIEW_READINGS: Record<string, Reading> = {
  uts: {
    tm: 8,
    title: 'Ringkasan Eksekutif Persiapan UTS Manajemen Strategik',
    ref: 'Kompilasi TM 1 s.d TM 7 | Dess, McNamara, Eisner, & Lee 11e',
    intro: 'Cheat sheet dan intisari kerangka kerja strategis esensial untuk menghadapi Ujian Tengah Semester Manajemen Strategik.',
    objectives: [
      'Menguasai Proses Strategik Tiga Tahap dan Simbiosis Stakeholder.',
      'Menguasai PESTEL dan Lima Kekuatan Bersaing Porter.',
      'Menguasai Analisis Rantai Nilai dan Kerangka Kerja VRIO.',
      'Menguasai Strategi Bersaing Generik Porter dan Tahapan Siklus Hidup Industri.',
      'Menguasai Diversifikasi Terkait/Tidak Terkait, Matriks BCG, dan 4 Strategi Global.',
      'Menguasai Sistem Kontrol Perilaku dan Tata Kelola Perusahaan (Governance).',
      'Menguasai Organisasi Tanpa Batas dan Kepemimpinan Strategis.'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UTS Manajemen Strategik' },
      {
        kind: 'ul',
        items: [
          '**Analisis, Formulasi, Implementasi (TM 1)**: Ambidexterity menyeimbangkan efisiensi jangka pendek vs inovasi masa depan. Simbiosis Stakeholder (Win-Win).',
          '**Lingkungan Eksternal (TM 2)**: PESTEL 6 segmen makro; Porter\'s 5 Forces (Rivalitas dipicu fixed cost tinggi & pertumbuhan lambat); Strategic Groups.',
          '**Lingkungan Internal (TM 3)**: Value Chain (5 Aktivitas Utama + 4 Pendukung); VRIO (Valuable, Rare, Inimitable, Organized) $\\rightarrow$ Keunggulan Bersaing Berkelanjutan; Inimitability (Path Dependency, Causal Ambiguity, Social Complexity).',
          '**Strategi Bisnis (TM 4)**: Cost Leadership (Walmart), Diferensiasi (Apple), Fokus (Ferrari). Bahaya Stuck in the Middle. 4 Siklus Hidup Industri (Intro, Growth, Maturity, Decline).',
          '**Strategi Korporat (TM 5)**: Diversifikasi Terkait (Core Competencies & Economies of Scope); Matriks BCG (Stars, Cash Cows, Question Marks, Dogs); 4 Strategi Internasional (Global, Transnational, International, Multidomestic).',
          '**Kontrol & Governance (TM 6)**: Kontrol Tradisional (Sekuensial) vs Kontemporer (Double-Loop); 3 Pilar Kontrol (Culture, Rewards, Boundaries); Agency Problem & Pengawasan Dewan Direksi.',
          '**Desain & Kepemimpinan (TM 7)**: Boundaryless (Barrier-Free, Modular, Virtual); 3 Tugas Pemimpin Strategis; Corporate Entrepreneurship (Autonomous vs Induced).'
        ]
      }
    ]
  },
  uas: {
    tm: 16,
    title: 'Ringkasan Eksekutif Persiapan UAS Manajemen Strategik',
    ref: 'Kompilasi TM 9 s.d TM 14 | Blue Ocean | Strategy Maps | 7 Studi Kasus',
    intro: 'Cheat sheet dan intisari integrasi teori strategik dengan pemecahan 7 studi kasus perusahaan global untuk Ujian Akhir Semester.',
    objectives: [
      'Menguasai Inovasi Nilai, Strategy Canvas, dan Matriks ERRC Grid Blue Ocean Strategy.',
      'Menguasai Kausalitas Empat Perspektif Strategy Maps dan Balanced Scorecard.',
      'Menganalisis Model Bisnis Platform dan Efek Jaringan (TheoryBridge & Alibaba Group).',
      'Menganalisis Rantai Pasok Cepat vs Strategi Kemewahan (H&M vs Zara & Louis Vuitton LVMH).',
      'Menganalisis Model Hub-and-Spoke dan Diferensiasi Layanan (Emirates Airline).',
      'Menganalisis Integrasi Vertikal dan Manajemen Portofolio Multimerek (Samsung & P&G).'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UAS Manajemen Strategik' },
      {
        kind: 'ul',
        items: [
          '**Blue Ocean Strategy (TM 9)**: Value Innovation mendobrak trade-off biaya vs nilai. ERRC Grid: Eliminate & Reduce (turunkan biaya), Raise & Create (tingkatkan nilai). Six Paths Framework & 3 Tiers Noncustomers.',
          '**Strategy Maps (TM 10)**: Rantai sebab-akibat (Financial $\\leftarrow$ Customer $\\leftarrow$ Internal Processes $\\leftarrow$ Learning & Growth). 3 Nilai Pelanggan: Operational Excellence, Product Leadership, Customer Intimacy.',
          '**Platform Ecosystems (TM 11 - Alibaba)**: Two-Sided Platform dengan Direct & Indirect Network Effects. Mengatasi Chicken-and-Egg problem dengan subsidi satu sisi. Ekosistem E-Commerce + Fintech + Logistik + Cloud.',
          '**Fast Fashion vs Luxury (TM 12 - H&M vs LV)**: H&M terjebak lead time outsourcing Asia 6 bulan vs Zara 15 hari. Louis Vuitton: No discounts, 100% company-owned stores, artisan craftsmanship, planned scarcity.',
          '**Global Aviation (TM 13 - Emirates)**: Dubai mega-hub (8-hour flight hub to 2/3 world). Wide-body fleet (A380 & B777) skala ekonomis + diferensiasi layanan mewah (Shower Spa, Onboard Lounge). Hub-and-Spoke vs Point-to-Point.',
          '**Technology & FMCG (TM 14 - Samsung & P&G)**: Samsung integrasi vertikal chip semikonduktor + OLED + smartphone Galaxy; investasi R&D kontra-siklikal. P&G: Fokus Billion-Dollar Brands + Open Innovation (Connect + Develop).'
        ]
      }
    ]
  }
};