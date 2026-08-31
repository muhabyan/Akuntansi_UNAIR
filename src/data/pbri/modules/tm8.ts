import type { Reading } from '../../../types';

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan & Review Ujian Tengah Semester (UTS) PBR I',
  ref: 'Kompilasi TM 1 s.d TM 7 | Arens Ch. 1-9 | Standar Audit ISA/IAPI',
  intro: 'Rangkuman terpadu dan intisari kritis Pra-UTS Pengauditan Berbasis Risiko I: Konsep Dasar Audit, Etika & Independensi, Tanggung Jawab & Asersi Manajemen, Laporan & Opini Audit, Materialitas, Bukti Audit, dan Prosedur Analitis.',
  objectives: [
    'Mengintegrasikan seluruh konsep audit fundamental dari TM 1 s.d TM 7.',
    'Menguasai analisis studi kasus etika, asersi, opini modifikasian, dan materialitas untuk ujian UTS.'
  ],
  blocks: [
    { kind: 'h2', text: 'Peta Konsep Kritis Pra-UTS PBR I' },
    {
      kind: 'ul',
      items: [
        '**TM 1 (Dasar Audit & Asurans)**: Reasonable vs Limited Assurance; Agency Theory; ISQM 1 & 2.',
        '**TM 2 (Etika & Independensi)**: 5 Prinsip Etika; 5 Ancaman (Self-Interest, Self-Review, Advocacy, Familiarity, Intimidation); Larangan Contingent Fee; Batas rotasi AP 5 tahun.',
        '**TM 3 (Asersi Manajemen)**: Transaksi (Occurrence, Completeness, Accuracy, Cutoff, Classification) vs Saldo Akun (Existence, Rights & Obligations, Completeness, Valuation & Allocation); Skeptisisme Profesional.',
        '**TM 4 (Opini Audit & Laporan)**: Format SA 700 (Opini di awal); Matriks SA 705 (WTP, WDP, Adverse, Disclaimer); KAM (SA 701) untuk emiten publik; Emphasis of Matter (SA 706).',
        '**TM 5 (Materialitas SA 320)**: Overall Materiality (Benchmark 5% PBT); Performance Materiality (50-75% OM); Clearly Trivial (3-5% OM); Evaluasi salah saji SA 450.',
        '**TM 6 (Bukti Audit & Kertas Kerja)**: 8 Jenis Bukti Audit; Vouching (Keterjadian) vs Tracing (Kelengkapan); Berkas Permanen vs Tahun Berjalan (SA 230).',
        '**TM 7 (Prosedur Analitis SA 520)**: Wajib pada Perencanaan dan Reviu Akhir; Analisis Rasio dan Tren.'
      ]
    }
  ]
};