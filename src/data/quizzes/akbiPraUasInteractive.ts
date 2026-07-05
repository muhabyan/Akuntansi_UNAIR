import type { ReportFillQuizQuestion, MultipleChoiceQuizQuestion } from '../../types';

export const AKM201_KUIS_PRA_UAS_INTERACTIVE: (ReportFillQuizQuestion | MultipleChoiceQuizQuestion)[] = [
  {
    kind: 'report-fill',
    topic: 'Produk Sampingan (By-Product)',
    skill: 'Laporan Laba Rugi: By-Product sbg Pendapatan Penjualan',
    difficulty: 'advanced',
    q: 'PT Naranuansa memproduksi produk utama dan sampingan. Data bulan Mei 2025:\n- Persediaan awal: 4.950 unit @Rp4.500\n- Produksi: 10.750 unit @Rp4.500\n- Penjualan produk utama: 13.350 unit\n- Pendapatan produk sampingan: Rp25.000.000\n- Beban pemasaran & adm: Rp4.900.000\n- Persediaan akhir: 2.350 unit @Rp4.500\n\nSusunlah Laporan Laba Rugi dengan asumsi harga jual per unit adalah Rp4.500 dan by-product diperlakukan sebagai **Pendapatan Penjualan**.',
    blanks: [
      { id: 'penjualan_utama', label: 'Penjualan Produk Utama', answer: 60075000, prefix: 'Rp' },
      { id: 'penjualan_samping', label: 'Pendapatan Penjualan Produk Sampingan', answer: 25000000, prefix: 'Rp' },
      { id: 'penjualan_bersih', label: 'Penjualan Bersih', answer: 85075000, prefix: 'Rp' },
      { id: 'hpp_awal', label: 'Persediaan Awal', answer: 22275000, prefix: 'Rp' },
      { id: 'hpp_produksi', label: 'Total Biaya Pokok Produksi', answer: 48375000, prefix: 'Rp' },
      { id: 'hpp_tersedia', label: 'Persediaan Tersedia Untuk Dijual', answer: 70650000, prefix: 'Rp' },
      { id: 'hpp_akhir', label: 'Persediaan Akhir (Minus)', answer: 10575000, prefix: 'Rp' },
      { id: 'hpp_total', label: 'Harga Pokok Penjualan', answer: 60075000, prefix: 'Rp' },
      { id: 'laba_kotor', label: 'Laba Kotor', answer: 25000000, prefix: 'Rp' },
      { id: 'beban_ops', label: 'Beban Pemasaran & Adm (Minus)', answer: 4900000, prefix: 'Rp' },
      { id: 'laba_ops', label: 'Laba Operasi', answer: 20100000, prefix: 'Rp' }
    ],
    explanation: 'Penjualan utama: 13.350 * 4.500 = 60.075.000. Pendapatan sampingan ditambah ke atas menjadi Penjualan Bersih. Persediaan Akhir: 2.350 * 4.500 = 10.575.000. HPP = 60.075.000. Laba kotor = 85.075.000 - 60.075.000 = 25.000.000.'
  },
  {
    kind: 'report-fill',
    topic: 'Produk Sampingan (By-Product)',
    skill: 'Laporan Laba Rugi: By-Product sbg Pengurang HPP',
    difficulty: 'advanced',
    q: 'Dengan data PT Naranuansa yang sama, susunlah Laporan Laba Rugi jika pendapatan by-product diperlakukan sebagai **Pengurang Harga Pokok Penjualan (HPP)**.',
    blanks: [
      { id: 'penjualan_utama', label: 'Penjualan Produk Utama', answer: 60075000, prefix: 'Rp' },
      { id: 'hpp_awal', label: 'Persediaan Awal', answer: 22275000, prefix: 'Rp' },
      { id: 'hpp_produksi', label: 'Total Biaya Pokok Produksi', answer: 48375000, prefix: 'Rp' },
      { id: 'hpp_tersedia', label: 'Persediaan Tersedia Untuk Dijual', answer: 70650000, prefix: 'Rp' },
      { id: 'hpp_akhir', label: 'Persediaan Akhir (Minus)', answer: 10575000, prefix: 'Rp' },
      { id: 'hpp_kotor', label: 'HPP Sebelum Pengurang', answer: 60075000, prefix: 'Rp' },
      { id: 'hpp_pengurang', label: 'Pendapatan Produk Sampingan (Minus)', answer: 25000000, prefix: 'Rp' },
      { id: 'hpp_bersih', label: 'HPP Bersih', answer: 35075000, prefix: 'Rp' },
      { id: 'laba_kotor', label: 'Laba Kotor', answer: 25000000, prefix: 'Rp' },
      { id: 'beban_ops', label: 'Beban Pemasaran & Adm (Minus)', answer: 4900000, prefix: 'Rp' },
      { id: 'laba_ops', label: 'Laba Operasi', answer: 20100000, prefix: 'Rp' }
    ],
    explanation: 'Dalam metode ini, by-product tidak diakui sebagai penjualan, melainkan mengurangkan HPP. HPP kotor (Rp 60.075.000) dikurangi pendapatan sampingan (Rp 25.000.000) = HPP bersih Rp 35.075.000. Laba Kotor = 60.075.000 - 35.075.000 = Rp 25.000.000.'
  },
  {
    kind: 'report-fill',
    topic: 'Backflush Accounting / JIT',
    skill: 'Jurnal Backflush',
    difficulty: 'advanced',
    q: 'MAMAMIA Manufacturing memproduksi dengan sistem JIT. Transaksi bulan ini:\n1. Pembelian bahan baku secara kredit Rp400.000\n2. Pembebanan Conversion Cost (Tenaga Kerja Rp40.000 & FOH Applied Rp180.000)\n3. Penyelesaian Barang Jadi dari bahan Rp390.000 & Conversion Rp210.000\n4. Penjualan barang jadi secara kredit Rp600.000\n\nLengkapi nominal untuk jurnal-jurnal backflush berikut ini:',
    blanks: [
      { id: 'j1_dr', label: 'J1 Dr. Raw and In Process (RIP)', answer: 400000, prefix: 'Rp' },
      { id: 'j1_cr', label: 'J1 Cr. Account Payable', answer: 400000, prefix: 'Rp' },
      { id: 'j2_dr', label: 'J2 Dr. Conversion Cost (CC)', answer: 220000, prefix: 'Rp' },
      { id: 'j2_cr_1', label: 'J2 Cr. Payroll (DL)', answer: 40000, prefix: 'Rp' },
      { id: 'j2_cr_2', label: 'J2 Cr. FOH Applied', answer: 180000, prefix: 'Rp' },
      { id: 'j3_dr', label: 'J3 Dr. Finished Goods', answer: 600000, prefix: 'Rp' },
      { id: 'j3_cr_1', label: 'J3 Cr. Raw and In Process (RIP)', answer: 390000, prefix: 'Rp' },
      { id: 'j3_cr_2', label: 'J3 Cr. Conversion Cost Applied', answer: 210000, prefix: 'Rp' },
      { id: 'j4_dr_1', label: 'J4 Dr. Accounts Receivable', answer: 600000, prefix: 'Rp' },
      { id: 'j4_cr_1', label: 'J4 Cr. Sales Revenue', answer: 600000, prefix: 'Rp' },
      { id: 'j4_dr_2', label: 'J4 Dr. COGS', answer: 600000, prefix: 'Rp' },
      { id: 'j4_cr_2', label: 'J4 Cr. Finished Goods', answer: 600000, prefix: 'Rp' }
    ],
    explanation: 'Dalam Backflush, bahan masuk ke RIP. J3 mencatat penyelesaian barang dengan mem-backflush RIP (bahan yang dipakai Rp390.000) dan mencatat CC Applied (Rp210.000). Penjualan mencatat AR/Sales dan COGS/FG masing-masing sebesar HPP (asumsi Rp 600.000).'
  },
  {
    kind: 'report-fill',
    topic: 'Alokasi Joint Cost',
    skill: 'Metode Harga Pasar Relatif',
    difficulty: 'advanced',
    q: 'Berdasarkan bocoran UAS 2022: PT Naranuansa memproduksi 4 produk (J, K, L, M) dengan Total Joint Cost (Kos Bersama) sebesar Rp160.000.000. Data Produksi dan Harga Pasar per unit saat titik pisah:\n- J: 6.000 unit @ Rp80.000\n- K: 5.000 unit @ Rp60.000\n- L: 4.000 unit @ Rp40.000\n- M: 3.000 unit @ Rp20.000\n\nLengkapi tabel alokasi joint cost berikut menggunakan **Metode Harga Pasar Relatif**:',
    blanks: [
      { id: 'np_j', label: 'Nilai Pasar J', answer: 480000000, prefix: 'Rp' },
      { id: 'alokasi_j', label: 'Alokasi Kos J', answer: 76800000, prefix: 'Rp' },
      { id: 'np_k', label: 'Nilai Pasar K', answer: 300000000, prefix: 'Rp' },
      { id: 'alokasi_k', label: 'Alokasi Kos K', answer: 48000000, prefix: 'Rp' },
      { id: 'np_l', label: 'Nilai Pasar L', answer: 160000000, prefix: 'Rp' },
      { id: 'alokasi_l', label: 'Alokasi Kos L', answer: 25600000, prefix: 'Rp' },
      { id: 'np_m', label: 'Nilai Pasar M', answer: 60000000, prefix: 'Rp' },
      { id: 'alokasi_m', label: 'Alokasi Kos M', answer: 9600000, prefix: 'Rp' },
      { id: 'np_total', label: 'Total Nilai Pasar', answer: 1000000000, prefix: 'Rp' },
      { id: 'alokasi_total', label: 'Total Alokasi Kos', answer: 160000000, prefix: 'Rp' }
    ],
    explanation: 'Nilai Pasar = Kuantitas × Harga Pasar. Total Nilai Pasar = 1.000.000.000. Alokasi per produk = (Nilai Pasar Produk / Total Nilai Pasar) × Total Joint Cost (160.000.000).'
  }
];
