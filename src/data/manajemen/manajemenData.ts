// =============================================================
// src/data/manajemen/manajemenData.ts
// Rangkuman KOMPREHENSIF Pengantar Manajemen (MNM101)
// Sumber: Richard L. Daft & Dorothy Marcic, Understanding Management 12e (2023)
//         RPP Resmi Pengantar Manajemen, FEB Universitas Airlangga
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
  uts: {
    tm: 8,
    title: 'Ringkasan Eksekutif Persiapan UTS Pengantar Manajemen',
    ref: 'Kompilasi TM 1 s.d TM 7 | Richard L. Daft & Dorothy Marcic Ch. 1-7',
    intro: 'Cheat sheet dan intisari kerangka kerja manajerial esensial untuk menghadapi Ujian Tengah Semester Pengantar Manajemen.',
    objectives: [
      'Menguasai 4 Fungsi POAC dan 3 Keterampilan Katz.',
      'Menguasai 4 Budaya Organisasi Daft Matrix.',
      'Menguasai Strategi Masuk Global MNC dan Dimensi Budaya Hofstede.',
      'Menguasai 5 Pendekatan Etika Bisnis dan Piramida CSR Carroll.',
      'Menguasai Sasaran SMART, MBO, dan 3 Strategi Bersaing Porter.',
      'Menguasai 3 Model Pengambilan Keputusan Manajerial.',
      'Menguasai 5 Pendekatan Departementalisasi Struktur Organisasi.'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UTS Pengantar Manajemen' },
      {
        kind: 'ul',
        items: [
          '**POAC & Keterampilan**: Planning, Organizing, Leading, Controlling. Top (Conceptual), Middle (Human), First-line (Technical).',
          '**Budaya Organisasi**: Adaptability (Eksternal-Fleksibel), Achievement (Eksternal-Stabil), Involvement (Internal-Fleksibel), Consistency (Internal-Stabil).',
          '**Pasar Global**: Ekspor $\\rightarrow$ Outsourcing $\\rightarrow$ Lisensi $\\rightarrow$ Joint Venture $\\rightarrow$ Greenfield. Hofstede: Power Distance, Uncertainty Avoidance, Individualism, Masculinity.',
          '**Etika & CSR**: 5 Pendekatan: Utilitarian (manfaat terbanyak), Individualisme, Hak Asasi, Keadilan, Praktikal. Piramida CSR Carroll: Ekonomi, Hukum, Etika, Filantropi.',
          '**Perencanaan**: Sasaran SMART; Siklus MBO; 3 Strategi Porter: Cost Leadership, Diferensiasi, Fokus.',
          '**Model Keputusan**: Klasik (Rasional murni), Administratif (Simon: Bounded Rationality & Satisficing), Politik (Koalisi).',
          '**Struktur Organisasi**: Tall (Sempit) vs Flat (Luas); Fungsional, Divisional, Matriks (Dual Authority), Berbasis Tim, Jaringan Virtual.'
        ]
      }
    ]
  },
  uas: {
    tm: 16,
    title: 'Ringkasan Eksekutif Persiapan UAS Pengantar Manajemen',
    ref: 'Kompilasi TM 9 s.d TM 14 | Richard L. Daft & Dorothy Marcic Ch. 8-15',
    intro: 'Cheat sheet dan intisari kerangka kerja manajerial esensial untuk menghadapi Ujian Akhir Semester Pengantar Manajemen.',
    objectives: [
      'Menguasai Model Ambidextrous dan 3 Tahap Perubahan Kurt Lewin.',
      'Menguasai 3 Tahap Pengelolaan Talenta SDM dan Manajemen Keberagaman (DEI).',
      'Menguasai Sikap Kerja, Teori Atribusi, Dimensi Big Five, dan 4 Pilar EQ.',
      'Menguasai Leadership Grid, Situasional Hersey-Blanchard, dan Servant Leadership.',
      'Menguasai Teori Kebutuhan Herzberg, Keadilan Adams, dan Ekspektansi Vroom.',
      'Menguasai 5 Tahap Tim Tuckman, Resolusi Konflik Thomas-Kilmann, Feedback Control, dan TQM.'
    ],
    blocks: [
      { kind: 'h2', text: 'Poin-Poin Kritis Ujian UAS Pengantar Manajemen' },
      {
        kind: 'ul',
        items: [
          '**Inovasi & Perubahan**: Ambidextrous (Eksplorasi R&D + Eksploitasi Produksi). Lewin: Unfreezing $\\rightarrow$ Changing $\\rightarrow$ Refreezing. Force-Field Analysis: Driving vs Restraining Forces.',
          '**MSDM & Keberagaman**: Finding $\\rightarrow$ Developing $\\rightarrow$ Maintaining. Job Description (tugas) vs Specification (kualifikasi). Penilaian BARS & 360-Degree. Glass Ceiling & Unconscious Bias.',
          '**Perilaku Individu**: Fundamental Attribution Error (meremehkan faktor luar saat orang lain gagal), Self-Serving Bias. Big Five: Extroversion, Agreeableness, Conscientiousness, Emotional Stability, Openness. EQ: Self-Awareness, Self-Management, Social Awareness, Relationship Management.',
          '**Kepemimpinan**: Leadership Grid (Team Management 9,9). Hersey-Blanchard: R1 (Telling), R2 (Selling), R3 (Participating), R4 (Delegating). Transformasional vs Transaksional; Servant Leadership.',
          '**Motivasi**: Herzberg (Hygiene cegah tidak puas vs Motivator pacu kepuasan). Ekspektansi Vroom: Motivasi = Expectancy (E-P) $\\times$ Instrumentality (P-O) $\\times$ Valence. Job Characteristics Model (5 Dimensi Inti).',
          '**Komunikasi, Tim & Kontrol**: Tuckman: Forming $\\rightarrow$ Storming $\\rightarrow$ Norming $\\rightarrow$ Performing $\\rightarrow$ Adjourning. Thomas-Kilmann: Collaborating (Win-Win), Compromising, Competing, Accommodating, Avoiding. Feedback Control: Standar $\\rightarrow$ Ukur $\\rightarrow$ Bandingkan $\\rightarrow$ Koreksi. TQM: Six Sigma (3,4 cacat/juta) & Kaizen.'
        ]
      }
    ]
  }
};