import type { Reading } from '../../../types';

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan & Review Ujian Tengah Semester (UTS) Akuntansi Sektor Publik',
  ref: 'Kompilasi TM 1 s.d TM 7 | PP 71/2010 | UU Keuangan Negara',
  intro: 'Rangkuman terpadu dan intisari teori kritis Pra-UTS Akuntansi Sektor Publik: Karakteristik OSP vs Swasta, ISAK 35 Entitas Nonlaba, Trilogi Paket UU Keuangan Negara, 6 Fungsi Anggaran, Sistem Penganggaran (PB, PPBS, ZBB), Teknik Akuntansi (Dana, Anggaran, Komitmen), serta 7 Komponen Laporan Keuangan SAP Akrual (PP 71/2010).',
  objectives: [
    'Mengintegrasikan seluruh materi pembelajaran Akuntansi Sektor Publik dari TM 1 s.d TM 7.',
    'Menguasai analisis komparatif dan jurnal akuntansi pemerintah untuk persiapan UTS.'
  ],
  blocks: [
    { kind: 'h2', text: 'Poin-Poin Kritis Ujian UTS Akuntansi Sektor Publik' },
    {
      kind: 'ul',
      items: [
        '**Karakteristik OSP (TM 1)**: Non-profit, kepemilikan kolektif, anggaran publik terbuka, akuntabilitas vertikal dan horisontal.',
        '**ISAK 35 (TM 2)**: Dua kategori Aset Neto (Dengan Pembatasan Donor vs Tanpa Pembatasan Donor); Laporan Aktivitas mencatat surplus/defisit.',
        '**Regulasi (TM 3)**: UU 17/2003 (Keuangan Negara), UU 1/2004 (Perbendaharaan/BUN/BLU), UU 15/2004 (Audit BPK), PP 71/2010 (SAP Akrual).',
        '**Fungsi Anggaran (TM 4)**: Otorisasi, Perencanaan, Pengawasan, Alokasi, Distribusi, dan Stabilisasi (Pasal 3 UU 17/2003).',
        '**Sistem Anggaran (TM 5)**: Penganggaran Berbasis Kinerja (PB) mengaitkan input dengan output/outcome; ZBB mengevaluasi dari basis $0; PPBS fokus jangka panjang.',
        '**Teknik Akuntansi (TM 6)**: Fund Accounting (unit dana mandiri); Budgetary Accounting (mencatat estimasi/apropriasi); Commitment Accounting / Encumbrance (mengunci anggaran sejak PO).',
        '**7 Lapkeu PP 71/2010 (TM 7)**: LRA & LP-SAL (Kas); LO, Neraca, LPE (Akrual); LAK & CaLK. Belanja Modal masuk LRA dan Neraca (bukan LO); LO mencatat Beban Penyusutan.'
      ]
    }
  ]
};