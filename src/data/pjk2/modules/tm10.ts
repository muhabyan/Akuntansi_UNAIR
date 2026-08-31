import type { Reading } from '../../../types';
import { CASE_PPH21_TER } from '../pjk2PracticeCases';

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Kalkulasi Komprehensif PPh Pasal 21: Pegawai Tetap, Tidak Tetap, Bukan Pegawai, & Pesangon',
  ref: 'PMK No. 168/2023 | PP 58/2023 | PP 68/2009 Pesangon',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 10: Menguasai kalkulasi praktis pemotongan PPh Pasal 21 untuk seluruh kategori penerima penghasilan menurut PMK No. 168/2023: Pegawai Tetap (Gaji bulanan, Tunjangan PPh Metode Gross-up vs Gross vs Netto, Bonus/THR), Pegawai Tidak Tetap / Tenaga Kerja Lepas (Skema Harian & Bulanan), Tenaga Ahli / Bukan Pegawai (50% × Bruto × Tarif Pasal 17), Penerima Uang Pensiun Berkala, Peserta Kegiatan, serta Uang Pesangon yang Dibayarkan Sekaligus (PPh Final PP 68/2009).',
  objectives: [
    'Menghitung PPh 21 Pegawai Tetap dengan Metode Netto, Gross, dan Gross-Up (Tunjangan Pajak).',
    'Menghitung PPh 21 atas penghasilan tidak teratur (Bonus, Tantiem, Jasa Produksi, THR).',
    'Menghitung PPh 21 Pegawai Tidak Tetap menggunakan skema TER Harian (Upah $\\le$ Rp 450rb/hari bebas PPh 21; Rp 450rb s.d Rp 2,5jt dikenai TER Harian 0,5%).',
    'Menghitung PPh 21 Bukan Pegawai / Tenaga Ahli (DPP = 50% dari Penghasilan Bruto tanpa pengurang PTKP bulanan).',
    'Menghitung PPh Final Uang Pesangon Dibayarkan Sekaligus (s.d Rp 50jt = 0%, Rp 50jt-100jt = 5%, Rp 100jt-500jt = 15%, > Rp 500jt = 25%).'
  ],
  blocks: [
    { kind: 'h2', text: '1. Matriks Penghitungan PPh 21 Antar Kategori Penerima (PMK 168/2023)' },
    {
      kind: 'table',
      headers: ['Kategori Penerima Penghasilan', 'Dasar Pengenaan Pajak (DPP)', 'Tarif Pajak yang Dikenakan'],
      rows: [
        ['**1. Pegawai Tetap** (Masa Jan-Nov)', 'Penghasilan Bruto Sebulan', '**TER Bulanan (Kategori A, B, atau C)**'],
        ['**1. Pegawai Tetap** (Masa Desember)', 'Penghasilan Kena Pajak (PKP) Setahun', '**Tarif Progresif Pasal 17 ayat (1) huruf a**'],
        ['**2. Pegawai Tidak Tetap** (Upah Harian $\\le$ Rp 450.000)', 'Upah Harian', '**0% (Bebas PPh 21)**'],
        ['**2. Pegawai Tidak Tetap** (Upah Harian Rp 450rb - Rp 2,5jt)', 'Upah Harian', '**TER Harian (0,5%)**'],
        ['**2. Pegawai Tidak Tetap** (Upah Bulanan > Rp 2,5jt)', 'Penghasilan Bruto Sebulan', '**TER Bulanan (Kategori A, B, atau C)**'],
        ['**3. Bukan Pegawai / Tenaga Ahli** (Dokter, Notaris, Akuntan, Pengacara)', '**50% × Penghasilan Bruto** (Setiap Pembayaran)', '**Tarif Progresif Pasal 17 ayat (1) huruf a** (Dihitung kumulatif jika berkesinambungan)'],
        ['**4. Dewan Komisaris Non-Pegawai Tetap**', 'Penghasilan Bruto', '**TER Bulanan**'],
        ['**5. Peserta Kegiatan** (Narasumber, Atlet, Peserta Lomba)', 'Penghasilan Bruto per Kegiatan', '**Tarif Progresif Pasal 17 ayat (1) huruf a**'],
        ['**6. Penerima Uang Pesangon Sekaligus**', 'Penghasilan Bruto Kumulatif (s.d 2 tahun)', '**Tarif PPh Final PP 68/2009** (0%, 5%, 15%, 25%)']
      ],
      caption: 'Tabel 10.1: Panduan komprehensif penghitungan PPh 21 seluruh jenis subjek.'
    },

    CASE_PPH21_TER,

    { kind: 'h2', text: '2. Tiga Metode Kebijakan Pemotongan Pajak Perusahaan' },
    {
      kind: 'table',
      headers: ['Metode Gaji', 'Mekanisme Pemotongan Pajak', 'Dampak Finansial bagi Karyawan & Perusahaan'],
      rows: [
        ['1. Metode Netto (Net Method)', 'Perusahaan menanggung PPh 21 karyawan (PPh 21 Ditanggung Perusahaan).', 'Karyawan menerima gaji utuh, namun bagi perusahaan PPh 21 yang ditanggung **TIDAK BOLEH DIBIAYAKAN (Non-Deductible)** di SPT Badan.'],
        ['2. Metode Gross (Gross Method)', 'Karyawan menanggung sendiri PPh 21 yang dipotong dari gaji kotornya.', 'Gaji bersih *take-home pay* karyawan berkurang sebesar potongan pajak; seluruh gaji bruto deductible bagi perusahaan.'],
        ['3. Metode Gross-Up (Tunjangan Pajak)', 'Perusahaan memberikan **Tunjangan Pajak** yang nilainya dihitung dengan formula matematika persis sama dengan PPh 21 terutang.', 'Karyawan menerima gaji utuh dan **Tunjangan Pajak BOLEH DIBIAYAKAN 100% (Deductible)** di SPT Badan (Paling Efisien Pajak!).']
      ],
      caption: 'Tabel 10.2: Komparasi strategis metode pemotongan gaji dan efisiensi pajak.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 10' },
    {
      kind: 'ul',
      items: [
        '**Bukan Pegawai**: DPP adalah **50% × Penghasilan Bruto** tanpa dikurangi PTKP bulanan lagi (mulai berlaku efektif PMK 168/2023).',
        '**Pesangon Sekaligus**: Lapisan 1 s.d Rp 50 juta tarifnya adalah **0% (Bebas Pajak)**.',
        '**Metode Gross-Up**: Tunjangan Pajak diperhitungkan sebagai penambah penghasilan bruto karyawan.'
      ]
    }
  ]
};