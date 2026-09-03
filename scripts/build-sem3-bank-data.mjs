// scripts/build-sem3-bank-data.mjs
import fs from 'node:fs';
import path from 'node:path';

function bankItem(type, scope, difficulty, estimatedTime, question, context, data, instructions, outputFormat, rubric, answerGuide) {
  return {
    type,
    scope,
    difficulty,
    estimatedTime,
    question,
    context,
    data,
    instructions,
    outputFormat,
    rubric,
    answerGuide
  };
}

const BANK_SPEC = {
  AKK202: {
    courseName: 'Akuntansi Keuangan Menengah II',
    uts: [
      bankItem(
        'calculation',
        'TM 1–3: Aset Tetap & Depresiasi',
        'Menengah',
        '25–35 menit',
        'Studi Kasus Perolehan Aset Tetap Lump-Sum, Pengeluaran Modal & Depresiasi',
        'PT Airlangga Makmur membeli tanah, bangunan pabrik, dan mesin secara gabungan (lump-sum) pada 2 Januari 2024 dengan total pembayaran kas Rp 2.400.000.000. Penilai independen menetapkan nilai wajar masing-masing: Tanah Rp 1.000.000.000, Bangunan Rp 1.500.000.000, dan Mesin Rp 500.000.000. Pada 1 Juli 2024, perusahaan mengeluarkan kas Rp 120.000.000 untuk merombak mesin yang berhasil memperpanjang umur ekonomisnya dari 4 tahun menjadi 6 tahun. Bangunan disusutkan metode garis lurus selama 20 tahun (nilai sisa Rp 100 jt). Mesin disusutkan metode saldo menurun ganda.',
        [
          'Harga Beli Lump-Sum: Rp 2.400.000.000 tunai.',
          'Nilai Wajar: Tanah Rp 1.000.000.000 (33,33%), Bangunan Rp 1.500.000.000 (50,00%), Mesin Rp 500.000.000 (16,67%). Total Nilai Wajar = Rp 3.000.000.000.',
          'Pengeluaran 1 Juli 2024: Rp 120.000.000 untuk peningkatan kapasitas mesin.'
        ],
        [
          'Hitung alokasi biaya perolehan lump-sum untuk masing-masing aset.',
          'Buat ayat jurnal perolehan aset pada 2 Januari 2024.',
          'Buat jurnal pengeluaran modal pada 1 Juli 2024.',
          'Hitung dan buat jurnal penyesuaian beban penyusutan untuk Bangunan dan Mesin per 31 Desember 2024.'
        ],
        ['Tabel alokasi biaya lump-sum', 'Ayat jurnal berurutan', 'Kalkulasi penyusutan per 31 Des 2024'],
        [
          'Ketepatan alokasi proporsional nilai wajar (25%)',
          'Kebenaran jurnal perolehan & pengeluaran modal (25%)',
          'Ketepatan kalkulasi penyusutan garis lurus & DDB revisi (50%)'
        ],
        `1. Alokasi Harga Perolehan Lump-Sum:
- Total Nilai Wajar = Rp 1.000 jt + Rp 1.500 jt + Rp 500 jt = Rp 3.000.000.000.
- Tanah: (1.000 / 3.000) × Rp 2.400.000.000 = Rp 800.000.000.
- Bangunan: (1.500 / 3.000) × Rp 2.400.000.000 = Rp 1.200.000.000.
- Mesin: (500 / 3.000) × Rp 2.400.000.000 = Rp 400.000.000.

2. Jurnal 2 Januari 2024:
(D) Tanah ................................. Rp 800.000.000
(D) Bangunan .............................. Rp 1.200.000.000
(D) Mesin ................................. Rp 400.000.000
    (K) Kas .............................................. Rp 2.400.000.000

3. Jurnal 1 Juli 2024 (Capital Expenditure Mesin):
(D) Mesin ................................. Rp 120.000.000
    (K) Kas .............................................. Rp 120.000.000

4. Beban Penyusutan 31 Desember 2024:
a. Bangunan (Garis Lurus 20 tahun, Nilai Sisa Rp 100 jt):
   Beban = (Rp 1.200.000.000 - Rp 100.000.000) / 20 = Rp 55.000.000.
b. Mesin:
   - Jan - Jun (6 bulan sebelum renovasi, tarif DDB 4 tahun = 50% per tahun):
     Penyusutan = Rp 400.000.000 × 50% × (6/12) = Rp 100.000.000.
   - Nilai buku per 1 Juli = Rp 400 jt - Rp 100 jt + renovasi Rp 120 jt = Rp 420.000.000.
   - Sisa umur baru = 6 tahun. Tarif DDB baru = (100% / 6) × 2 = 33,33% per tahun.
   - Jul - Des (6 bulan): Rp 420.000.000 × 33,33% × (6/12) = Rp 70.000.000.
   - Total Penyusutan Mesin 2024 = Rp 100 jt + Rp 70 jt = Rp 170.000.000.

Jurnal Penyesuaian 31 Des 2024:
(D) Beban Penyusutan Bangunan .............. Rp 55.000.000
    (K) Akumulasi Penyusutan Bangunan .................... Rp 55.000.000
(D) Beban Penyusutan Mesin ................ Rp 170.000.000
    (K) Akumulasi Penyusutan Mesin ....................... Rp 170.000.000`
      )
    ],
    uas: [
      bankItem(
        'calculation',
        'TM 8–9: Penerbitan & Amortisasi Obligasi Efektif',
        'Komprehensif',
        '30–40 menit',
        'Kalkulasi Amortisasi Bunga Efektif & Pelunasan Dini Obligasi',
        'Pada 1 Januari 2024, PT Nusantara menerbitkan obligasi 5 tahun bernilai nominal Rp 1.000.000.000 dengan bunga kupon 8% yang dibayarkan setiap tanggal 31 Desember. Tingkat bunga pasar efektif saat penerbitan adalah 10%. Harga penerbitan obligasi adalah Rp 924.184.000. Pada 31 Desember 2025 (setelah pembayaran bunga tahun kedua), perusahaan melunasi seluruh obligasi di pasar reguler pada kurs 102.',
        [
          'Nilai Nominal: Rp 1.000.000.000.',
          'Bunga Kupon Kontraktual: 8% per tahun (Rp 80.000.000 per tahun).',
          'Suku Bunga Efektif Pasar: 10% per tahun.',
          'Nilai Kas Diterima saat Penerbitan: Rp 924.184.000 (Diskonto awal: Rp 75.816.000).',
          'Kurs Pelunasan Dini 31 Des 2025: 102% (Rp 1.020.000.000).'
        ],
        [
          'Susun tabel amortisasi diskonto obligasi menggunakan metode bunga efektif untuk tahun 2024 dan 2025.',
          'Buat ayat jurnal penerbitan obligasi pada 1 Januari 2024.',
          'Buat ayat jurnal pembayaran bunga dan amortisasi pada 31 Desember 2024 dan 31 Desember 2025.',
          'Hitung laba atau rugi pelunasan dini obligasi per 31 Desember 2025 beserta jurnalnya.'
        ],
        ['Tabel amortisasi bunga efektif 2 tahun', 'Ayat jurnal operasional dan pelunasan dini'],
        [
          'Ketepatan tabel amortisasi bunga efektif (30%)',
          'Kebenaran jurnal penerbitan dan pembayaran bunga (30%)',
          'Kalkulasi carrying value dan laba/rugi pelunasan dini (40%)'
        ],
        `1. Tabel Amortisasi Bunga Efektif:
Tahun 2024:
- Nilai Tercatat Awal: Rp 924.184.000
- Kas Bunga Kupon (8% × 1 M): Rp 80.000.000
- Beban Bunga Efektif (10% × 924.184.000): Rp 92.418.400
- Amortisasi Diskonto: Rp 12.418.400
- Nilai Tercatat Akhir (31 Des 2024): Rp 936.602.400

Tahun 2025:
- Nilai Tercatat Awal: Rp 936.602.400
- Kas Bunga Kupon: Rp 80.000.000
- Beban Bunga Efektif (10% × 936.602.400): Rp 93.660.240
- Amortisasi Diskonto: Rp 13.660.240
- Nilai Tercatat Akhir (31 Des 2025): Rp 950.262.640

2. Jurnal 1 Januari 2024:
(D) Kas ................................... Rp 924.184.000
(D) Diskonto Utang Obligasi ............... Rp 75.816.000
    (K) Utang Obligasi ................................... Rp 1.000.000.000

3. Jurnal Bunga:
31 Des 2024:
(D) Beban Bunga Obligasi .................. Rp 92.418.400
    (K) Diskonto Utang Obligasi .......................... Rp 12.418.400
    (K) Kas .............................................. Rp 80.000.000

31 Des 2025:
(D) Beban Bunga Obligasi .................. Rp 93.660.240
    (K) Diskonto Utang Obligasi .......................... Rp 13.660.240
    (K) Kas .............................................. Rp 80.000.000

4. Pelunasan Dini 31 Desember 2025:
- Nilai Tercatat Obligasi = Rp 950.262.640 (Sisa Diskonto = Rp 1.000.000.000 - Rp 950.262.640 = Rp 49.737.360).
- Kas yang Dibayarkan (Kurs 102) = 102% × Rp 1.000.000.000 = Rp 1.020.000.000.
- Rugi Pelunasan Dini Obligasi = Rp 1.020.000.000 - Rp 950.262.640 = Rp 69.737.360.

Jurnal Pelunasan Dini:
(D) Utang Obligasi ........................ Rp 1.000.000.000
(D) Rugi Pelunasan Dini Obligasi .......... Rp 69.737.360
    (K) Diskonto Utang Obligasi .......................... Rp 49.737.360
    (K) Kas .............................................. Rp 1.020.000.000`
      )
    ]
  },
  AKM202: {
    courseName: 'Akuntansi Manajemen',
    uts: [
      bankItem(
        'case',
        'TM 2–3: Analisis CVP & Variable Costing',
        'Menengah',
        '30–40 menit',
        'Rekonsiliasi Laba Bersih Variable vs Absorption Costing & Analisis Titik Impas Multi-Produk',
        'PT Prima Manufaktur memproduksi dan menjual barang konsumen. Kapasitas normal adalah 50.000 unit per tahun. Harga jual per unit Rp 100.000. Biaya manufaktur: Bahan Langsung Rp 30.000/unit, Tenaga Kerja Langsung Rp 15.000/unit, BOP Variabel Rp 5.000/unit. Total BOP Tetap tahunan Rp 1.000.000.000 (tarif Rp 20.000/unit). Beban penjualan variabel Rp 10.000/unit dan beban administrasi tetap Rp 400.000.000 per tahun. Pada tahun 2024, perusahaan memproduksi 50.000 unit dan berhasil menjual 40.000 unit (persediaan awal nol).',
        [
          'Unit Diproduksi: 50.000 unit; Unit Terjual: 40.000 unit; Persediaan Akhir: 10.000 unit.',
          'Harga Jual: Rp 100.000/unit.',
          'Biaya Manufaktur Variabel: Rp 50.000/unit (DM 30rb + DL 15rb + VMOH 5rb).',
          'Biaya Manufaktur Tetap (FMOH): Rp 1.000.000.000 (Rp 20.000/unit).',
          'Beban Operasional: Variabel Rp 10.000/unit terjual; Tetap Rp 400.000.000.'
        ],
        [
          'Susun Laporan Laba Rugi menggunakan Metode Absorption Costing.',
          'Susun Laporan Laba Rugi menggunakan Metode Variable Costing.',
          'Buat rekonsiliasi perbedaan laba bersih di antara kedua metode.',
          'Hitung Titik Impas (Break-Even Point) dalam unit dan rupiah menggunakan data Variable Costing.'
        ],
        ['Format Laba Rugi Absorption & Variable', 'Tabel rekonsiliasi laba', 'Kalkulasi BEP'],
        [
          'Ketepatan format dan perhitungan Absorption Costing (30%)',
          'Ketepatan format dan perhitungan Variable Costing (30%)',
          'Penjelasan rekonsiliasi selisih BOP tetap tertahan (20%)',
          'Kalkulasi BEP unit & rupiah (20%)'
        ],
        `1. Laporan Laba Rugi Absorption Costing:
- Penjualan (40.000 × Rp 100.000) .................... Rp 4.000.000.000
- HPP (40.000 × Rp 70.000*) ........................... (Rp 2.800.000.000)
  (*HPP/unit = Var 50.000 + Tetap 20.000 = Rp 70.000)
- Laba Kotor (Gross Margin) ............................ Rp 1.200.000.000
- Beban Operasional:
  * Penjualan Variabel (40.000 × Rp 10.000) = Rp 400.000.000
  * Administrasi Tetap = Rp 400.000.000
  * Total Beban Operasional ........................... (Rp 800.000.000)
- Laba Bersih Operasi (Absorption) .................... Rp 400.000.000

2. Laporan Laba Rugi Variable Costing:
- Penjualan (40.000 × Rp 100.000) .................... Rp 4.000.000.000
- Biaya Variabel:
  * Manufaktur Variabel (40.000 × Rp 50.000) = Rp 2.000.000.000
  * Penjualan Variabel (40.000 × Rp 10.000) = Rp 400.000.000
  * Total Biaya Variabel .............................. (Rp 2.400.000.000)
- Contribution Margin (40.000 × Rp 40.000) ............. Rp 1.600.000.000
- Biaya Tetap:
  * BOP Tetap Pabrik = Rp 1.000.000.000
  * Administrasi Tetap = Rp 400.000.000
  * Total Biaya Tetap ................................. (Rp 1.400.000.000)
- Laba Bersih Operasi (Variable) ...................... Rp 200.000.000

3. Rekonsiliasi Laba Bersih:
- Laba Bersih Absorption Costing ....................... Rp 400.000.000
- Laba Bersih Variable Costing ......................... Rp 200.000.000
- Selisih Laba ......................................... Rp 200.000.000
Penjelasan: Produksi (50.000) > Penjualan (40.000) = 10.000 unit tertahan di persediaan akhir.
BOP Tetap yang tertahan di persediaan = 10.000 unit × Rp 20.000/unit = Rp 200.000.000.

4. Perhitungan BEP:
- CM per unit = Rp 100.000 - Rp 60.000 (total variabel) = Rp 40.000/unit.
- CM Ratio = Rp 40.000 / Rp 100.000 = 40%.
- Total Biaya Tetap = Rp 1.000 jt + Rp 400 jt = Rp 1.400.000.000.
- BEP Unit = Rp 1.400.000.000 / Rp 40.000 = 35.000 unit.
- BEP Rupiah = Rp 1.400.000.000 / 40% = Rp 3.500.000.000.`
      )
    ],
    uas: [
      bankItem(
        'case',
        'TM 10: Pengambilan Keputusan Taktis & Biaya Relevan',
        'Tinggi',
        '30–35 menit',
        'Keputusan Make-or-Buy dan Alokasi Sumber Daya Terbatas',
        'PT Delta Elektronik membutuhkan 10.000 unit komponen X-1 setiap tahun. Biaya produksi internal per unit: Bahan Langsung Rp 12.000, Tenaga Kerja Langsung Rp 8.000, BOP Variabel Rp 4.000, dan BOP Tetap Terhindarkan (sewa mesin khusus) Rp 3.000, serta Alokasi Biaya Bersama Pabrik Rp 5.000. Pemasok eksternal menawarkan untuk memasok komponen tersebut seharga Rp 25.000 per unit. Jika perusahaan membeli dari luar, fasilitas pabrik dapat disewakan kepada pihak ketiga sebesar Rp 20.000.000 per tahun.',
        [
          'Kebutuhan: 10.000 unit komponen X-1.',
          'Biaya Internal/unit: DM 12rb, DL 8rb, VMOH 4rb, Avoidable Fixed Overhead 3rb, Unavoidable Common Overhead 5rb.',
          'Harga Tawaran Pemasok Eksternal: Rp 25.000/unit.',
          'Peluang Sewa Fasilitas: Pendapatan sewa Rp 20.000.000/tahun.'
        ],
        [
          'Identifikasi biaya relevan per unit untuk keputusan membuat sendiri (Make).',
          'Susun tabel analisis komparatif total biaya relevan antara Membuat vs Membeli.',
          'Berikan rekomendasi kuantitatif dan kualitatif kepada manajemen PT Delta Elektronik.'
        ],
        ['Daftar biaya relevan', 'Tabel perbandingan biaya', 'Rekomendasi keputusan manajerial'],
        [
          'Identifikasi biaya terhindarkan vs tidak terhindarkan (30%)',
          'Ketepatan perhitungan opportunity cost sewa (30%)',
          'Kelayakan analisis strategis dan rekomendasi (40%)'
        ],
        `1. Analisis Biaya Relevan:
Biaya bersama pabrik (Unavoidable Common Overhead Rp 5.000) adalah BIAYA TIDAK RELEVAN karena tetap terjadi apapun alternatif yang dipilih.
Biaya Relevan Membuat Sendiri (Make) per unit:
- Bahan Langsung: Rp 12.000
- Tenaga Kerja Langsung: Rp 8.000
- BOP Variabel: Rp 4.000
- BOP Tetap Terhindarkan: Rp 3.000
Total Biaya Relevan per unit = Rp 27.000.

2. Tabel Komparasi Total (10.000 unit):
Alternatif MEMBUAT (Make):
- Biaya Produksi Relevan (10.000 × Rp 27.000) = Rp 270.000.000
- Opportunity Cost (Pendapatan Sewa yang Hilang) = Rp 20.000.000
Total Biaya Relevan Membuat = Rp 290.000.000.

Alternatif MEMBELI (Buy):
- Harga Pembelian dari Pemasok (10.000 × Rp 25.000) = Rp 250.000.000.
Total Biaya Relevan Membeli = Rp 250.000.000.

Penghematan Bersih jika Membeli dari Luar = Rp 290.000.000 - Rp 250.000.000 = Rp 40.000.000 per tahun.

3. Rekomendasi Manajerial:
- Kuantitatif: PT Delta Elektronik direkomendasikan untuk MEMBELI komponen X-1 dari pemasok eksternal karena menghemat biaya sebesar Rp 40.000.000 per tahun.
- Kualitatif: Manajemen harus memverifikasi rekam jejak ketepatan waktu pengiriman pemasok, jaminan kualitas mutu komponen, dan klausul kenaikan harga di masa depan.`
      )
    ]
  },
  AKS201: {
    courseName: 'Akuntansi Sektor Publik',
    uts: [
      bankItem(
        'journal',
        'TM 5–6: Jurnal Akuntansi Keuangan Daerah SAP Akrual',
        'Menengah',
        '30–35 menit',
        'Pencatatan Transaksi Dualistis (Jurnal Finansial & Jurnal Anggaran) SKPD',
        'Dinas Kesehatan Kabupaten Sejahtera (SKPD) pada tahun anggaran 2024 melaksanakan transaksi berikut:\n1. Tanggal 5 Maret 2024: Menerbitkan Surat Ketetapan Retribusi Daerah (SKRD) atas pelayanan kesehatan Puskesmas sebesar Rp 60.000.000.\n2. Tanggal 10 Maret 2024: Menerima kas pelunasan retribusi sebesar Rp 50.000.000 ke Bendahara Penerimaan.\n3. Tanggal 12 Maret 2024: Bendahara Penerimaan menyetor kas retribusi Rp 50.000.000 ke Kas Daerah (Kasda).\n4. Tanggal 20 April 2024: Membeli obat-obatan medis senilai Rp 150.000.000 secara kredit (SP2D-LS diterbitkan oleh BUD kepada rekanan).',
        [
          'SKPD: Dinas Kesehatan; PPKD: Bendahara Umum Daerah.',
          'Transaksi 1: SKRD Terbit Rp 60.000.000.',
          'Transaksi 2: Kas Retribusi Masuk Rp 50.000.000.',
          'Transaksi 3: Setor ke Kasda Rp 50.000.000.',
          'Transaksi 4: Pengadaan Obat SP2D-LS Rp 150.000.000.'
        ],
        [
          'Buat Jurnal Finansial (Laporan Operasional & Neraca) untuk masing-masing transaksi.',
          'Buat Jurnal Anggaran (Laporan Realisasi Anggaran) untuk transaksi yang melibatkan arus kas.',
          'Jelaskan alasan mengapa transaksi tanggal 5 Maret tidak dicatat dalam Jurnal Anggaran.'
        ],
        ['Tabel Jurnal Finansial dan Jurnal Anggaran', 'Penjelasan basis kas vs akrual'],
        [
          'Ketepatan akun jurnal finansial (40%)',
          'Ketepatan akun jurnal anggaran (30%)',
          'Pemahaman konsep pengakuan kas vs akrual (30%)'
        ],
        `1. Transaksi 5 Maret 2024 (Penerbitan SKRD Rp 60 jt):
- Jurnal Finansial:
  (D) Piutang Retribusi Daerah ............. Rp 60.000.000
      (K) Pendapatan Retribusi Daerah - LO ................. Rp 60.000.000
- Jurnal Anggaran:
  TIDAK ADA JURNAL (karena belum ada penerimaan kas riil).

2. Transaksi 10 Maret 2024 (Kas diterima Bendahara Penerimaan Rp 50 jt):
- Jurnal Finansial:
  (D) Kas di Bendahara Penerimaan .......... Rp 50.000.000
      (K) Piutang Retribusi Daerah ......................... Rp 50.000.000
- Jurnal Anggaran:
  (D) Perubahan SAL ........................ Rp 50.000.000
      (K) Pendapatan Retribusi Daerah - LRA ................ Rp 50.000.000

3. Transaksi 12 Maret 2024 (Penyetoran Kas ke Kasda Rp 50 jt):
- Jurnal Finansial:
  (D) RK PPKD .............................. Rp 50.000.000
      (K) Kas di Bendahara Penerimaan ...................... Rp 50.000.000
- Jurnal Anggaran:
  TIDAK ADA JURNAL (karena pemindahan kas internal SKPD ke Kasda bukan transaksi pendapatan/belanja LRA).

4. Transaksi 20 April 2024 (Pengadaan Obat SP2D-LS Rp 150 jt):
- Jurnal Finansial:
  (D) Beban Persediaan Obat-Obatan - LO ... Rp 150.000.000
      (K) RK PPKD .......................................... Rp 150.000.000
- Jurnal Anggaran:
  (D) Belanja Barang dan Jasa - LRA ........ Rp 150.000.000
      (K) Perubahan SAL .................................... Rp 150.000.000`
      )
    ],
    uas: [
      bankItem(
        'case',
        'TM 8–10: Hubungan PPKD-SKPD & Evaluasi Value for Money',
        'Tinggi',
        '25–35 menit',
        'Analisis Kinerja Keuangan Daerah 3E (Value for Money)',
        'Dinas Kebersihan Kota Madani menganggarkan program pengolahan sampah tahun 2024 dengan rincian: Pagu Anggaran Belanja Rp 1.000.000.000 untuk memproses 20.000 ton sampah. Pada akhir tahun, realisasi belanja operasional adalah Rp 850.000.000 dan volume sampah yang berhasil diproses secara tuntas mencapai 19.000 ton.',
        [
          'Anggaran Belanja: Rp 1.000.000.000; Target Output: 20.000 ton sampah (Standar Biaya: Rp 50.000/ton).',
          'Realisasi Belanja: Rp 850.000.000; Realisasi Output: 19.000 ton sampah (Biaya Aktual: Rp 44.737/ton).'
        ],
        [
          'Hitung rasio ekonomis / efisiensi anggaran belanja.',
          'Hitung rasio efektivitas pencapaian target output.',
          'Evaluasi kinerja menyeluruh Dinas Kebersihan berdasarkan konsep Value for Money (Ekonomis, Efisien, Efektif).'
        ],
        ['Kalkulasi rasio matematis 3E', 'Interpretasi kualitatif kinerja pelayanan publik'],
        [
          'Kebenaran perhitungan rasio matematis (40%)',
          'Kedalaman evaluasi 3E Value for Money (60%)'
        ],
        `1. Kalkulasi Rasio:
- Rasio Efisiensi / Ekonomis Belanja:
  Rasio = (Realisasi Belanja / Anggaran Belanja) × 100%
  Rasio = (Rp 850.000.000 / Rp 1.000.000.000) × 100% = 85,00% (Hemat 15%).
- Biaya per Satuan Output:
  * Standar Biaya = Rp 1.000.000.000 / 20.000 ton = Rp 50.000 per ton.
  * Realisasi Biaya = Rp 850.000.000 / 19.000 ton = Rp 44.737 per ton (Lebih efisien Rp 5.263/ton).
- Rasio Efektivitas Output:
  Rasio = (Realisasi Output / Target Output) × 100%
  Rasio = (19.000 ton / 20.000 ton) × 100% = 95,00%.

2. Evaluasi Menyeluruh Value for Money (3E):
- Ekonomis: Tercapai dengan sangat baik. Program mampu menghemat pengeluaran anggaran sebesar Rp 150.000.000 (15%).
- Efisien: Tercapai sangat baik. Biaya aktual per ton sampah (Rp 44.737) lebih rendah daripada standar pagu anggaran (Rp 50.000).
- Efektif: Cukup Efektif (95%). Meskipun target 20.000 ton belum tercapai 100%, tingkat pencapaian 95% menunjukkan kinerja operasional yang solid.
Rekomendasi: Sisa anggaran efisiensi dapat dialokasikan untuk pemeliharaan armada truk pengangkut agar tahun depan target volume tercapai 100%.`
      )
    ]
  },
  PJK202: {
    courseName: 'Perpajakan II',
    uts: [
      bankItem(
        'calculation',
        'TM 4–6: Penyusutan Fiskal & Pemotongan PPh 22/23/Final',
        'Menengah',
        '30–35 menit',
        'Kalkulasi Penyusutan Fiskal Harta Berwujud & Pemotongan Pajak Transaksi',
        'PT Indo Mega pada tahun 2024 memiliki transaksi berikut:\n1. Membeli server komputer kantor pada 1 April 2024 seharga Rp 80.000.000 (Kelompok 1, masa manfaat 4 tahun). Perusahaan menggunakan metode saldo menurun (declining balance) untuk fiskal.\n2. Membayar jasa konsultan manajemen kepada PT Solusi Prima (memiliki NPWP) sebesar Rp 50.000.000 (belum PPN).\n3. Membayar sewa gudang penyimpanan barang kepada Tuan Hendra sebesar Rp 60.000.000.',
        [
          'Server Komputer: Rp 80.000.000 (Kelompok 1, tarif DDB fiskal 50%, beli 1 April 2024).',
          'Jasa Konsultan PT Solusi Prima: Rp 50.000.000.',
          'Sewa Gudang Tuan Hendra: Rp 60.000.000.'
        ],
        [
          'Hitung beban penyusutan fiskal server komputer untuk Tahun Pajak 2024.',
          'Hitung PPh Pasal 23 yang wajib dipotong atas jasa konsultan manajemen beserta kewajiban setor dan lapornya.',
          'Hitung PPh Final Pasal 4 ayat 2 yang wajib dipotong atas persewaan gudang.'
        ],
        ['Kalkulasi penyusutan fiskal proporsional', 'Perhitungan PPh 23 dan PPh 4(2)'],
        [
          'Ketepatan perhitungan bulan penyusutan saldo menurun (40%)',
          'Kebenaran tarif dan objek PPh 23 & 4(2) (60%)'
        ],
        `1. Penyusutan Fiskal Server Komputer (Kelompok 1, 4 tahun):
- Tarif Saldo Menurun Kelompok 1 = 50% per tahun.
- Pembelian 1 April 2024 (April - Desember = 9 bulan masa penggunaan).
- Penyusutan Fiskal 2024 = (9/12) × 50% × Rp 80.000.000 = Rp 30.000.000.
(Nilai Sisa Buku Fiskal per 31 Des 2024 = Rp 80 jt - Rp 30 jt = Rp 50.000.000).

2. Pemotongan PPh Pasal 23 atas Jasa Konsultan Manajemen:
- Dasar Pengenaan Pajak (DPP) = Rp 50.000.000.
- Tarif PPh Pasal 23 Jasa Manajemen = 2%.
- PPh 23 Dipotong = 2% × Rp 50.000.000 = Rp 1.000.000.
- Kas dibayarkan ke PT Solusi Prima = Rp 49.000.000.
- Batas setor: paling lambat tanggal 10 bulan berikutnya; lapor SPT Masa unifikasi paling lambat tanggal 20.

3. Pemotongan PPh Final Pasal 4(2) atas Sewa Gudang:
- Objek: Sewa tanah dan/atau bangunan.
- Tarif PPh Final = 10%.
- PPh Final Dipotong = 10% × Rp 60.000.000 = Rp 6.000.000.
- Kas dibayarkan ke Tuan Hendra = Rp 54.000.000.`
      )
    ],
    uas: [
      bankItem(
        'calculation',
        'TM 11: Rekonsiliasi Fiskal & SPT 1771',
        'Komprehensif',
        '35–45 menit',
        'Penyusunan Kertas Kerja Rekonsiliasi Fiskal & Perhitungan PPh Badan Terutang',
        'PT Sejahtera Abadi (peredaran bruto tahun 2024 sebesar Rp 20.000.000.000) membukukan laba bersih komersial sebelum pajak sebesar Rp 2.500.000.000. Dalam laporan keuangan komersial terdapat pos-pos berikut:\n1. Beban jamuan makan relasi tanpa daftar nominatif: Rp 40.000.000.\n2. Beban sanksi denda administrasi pajak: Rp 15.000.000.\n3. Beban penyusutan aset tetap komersial Rp 300.000.000 (sedangkan penyusutan menurut aturan fiskal adalah Rp 360.000.000).\n4. Pendapatan bunga deposito (telah dipotong PPh Final 20%): Rp 50.000.000.\n5. Pembagian dividen dari PT Anak (kepemilikan saham 30%): Rp 80.000.000.\n6. Kredit pajak yang telah dipotong pihak lain: PPh 22 Rp 25 jt, PPh 23 Rp 35 jt, angsuran PPh 25 Rp 180 jt.',
        [
          'Peredaran Bruto: Rp 20.000.000.000 (Memperoleh fasilitas Pasal 31E proporsional).',
          'Laba Bersih Komersial Sebelum Pajak: Rp 2.500.000.000.',
          'Kredit Pajak: PPh 22 (25 jt) + PPh 23 (35 jt) + PPh 25 (180 jt) = Rp 240.000.000.'
        ],
        [
          'Susun kertas kerja rekonsiliasi fiskal untuk menentukan Penghasilan Kena Pajak (PKP).',
          'Hitung PPh Badan terutang dengan fasilitas Pasal 31E UU PPh.',
          'Hitung PPh Kurang/Lebih Bayar (Pasal 29/28A) pada SPT Tahunan 1771.'
        ],
        ['Tabel koreksi fiskal positif dan negatif', 'Kalkulasi fasilitas 31E dan PPh Pasal 29'],
        [
          'Ketepatan identifikasi koreksi positif & negatif (40%)',
          'Kalkulasi proporsi fasilitas Pasal 31E (35%)',
          'Ketepatan perhitungan PPh Pasal 29 (25%)'
        ],
        `1. Kertas Kerja Rekonsiliasi Fiskal 2024:
Laba Bersih Komersial Sebelum Pajak .................. Rp 2.500.000.000

Koreksi Fiskal Positif:
- Jamuan tanpa daftar nominatif (non-deductible) ...... Rp 40.000.000
- Sanksi denda pajak (Pasal 9 ayat 1k) ................ Rp 15.000.000
Total Koreksi Positif ................................. Rp 55.000.000

Koreksi Fiskal Negatif:
- Selisih penyusutan fiskal (Fiskal 360 jt - Kom 300 jt) (Rp 60.000.000)
- Pendapatan bunga deposito (PPh Final) ............... (Rp 50.000.000)
- Dividen dari anak usaha (Non-Objek UU HPP) .......... (Rp 80.000.000)
Total Koreksi Negatif ................................. (Rp 190.000.000)

Penghasilan Kena Pajak (PKP) .......................... Rp 2.365.000.000

2. Perhitungan PPh Badan Terutang (Fasilitas Pasal 31E):
Omzet = Rp 20.000.000.000 (antara Rp 4,8 M s.d Rp 50 M).
- Bagian PKP yang mendapat fasilitas tarif 11% (diskon 50% dari 22%):
  PKP Fasilitas = (Rp 4.800.000.000 / Rp 20.000.000.000) × Rp 2.365.000.000
  PKP Fasilitas = 24% × Rp 2.365.000.000 = Rp 567.600.000.
  PPh Fasilitas = 11% × Rp 567.600.000 = Rp 62.436.000.

- Bagian PKP yang TIDAK mendapat fasilitas (tarif normal 22%):
  PKP Non-Fasilitas = Rp 2.365.000.000 - Rp 567.600.000 = Rp 1.797.400.000.
  PPh Non-Fasilitas = 22% × Rp 1.797.400.000 = Rp 395.428.000.

- Total PPh Badan Terutang = Rp 62.436.000 + Rp 395.428.000 = Rp 457.864.000.

3. PPh Kurang Bayar (PPh Pasal 29):
Total PPh Terutang .................................... Rp 457.864.000
Kredit Pajak:
- PPh Pasal 22 .......................... Rp 25.000.000
- PPh Pasal 23 .......................... Rp 35.000.000
- Angsuran PPh Pasal 25 ................. Rp 180.000.000
Total Kredit Pajak .................................... (Rp 240.000.000)
PPh Kurang Bayar (PPh Pasal 29) ....................... Rp 217.864.000`
      )
    ]
  },
  MNK201: {
    courseName: 'Manajemen Keuangan',
    uts: [
      bankItem(
        'calculation',
        'TM 4–6: Biaya Modal WACC & Kelayakan Investasi NPV',
        'Menengah',
        '30–35 menit',
        'Penentuan Biaya Modal Tertimbang (WACC) dan Penganggaran Modal Proyek',
        'PT Samudra Energi berencana membangun stasiun pengisian energi baru senilai Rp 5.000.000.000. Struktur modal optimal perusahaan: 30% Utang dan 70% Ekuitas. Data pasar keuangan: Suku bunga bebas risiko 6%, return pasar 14%, dan Beta saham 1,25. Biaya utang sebelum pajak 9% dengan tarif pajak badan 22%. Proyek ini diproyeksikan menghasilkan arus kas masuk bersih Rp 1.500.000.000 per tahun selama 5 tahun.',
        [
          'Investasi Awal: Rp 5.000.000.000.',
          'Struktur Modal: w_d = 30%, w_e = 70%.',
          'Kredit Pajak Utang: r_d = 9%, Tax = 22%.',
          'Parameter CAPM: r_RF = 6%, r_M = 14%, Beta = 1,25.',
          'Arus Kas Masuk: Rp 1.500.000.000/tahun (5 tahun).'
        ],
        [
          'Hitung biaya ekuitas (r_s) menggunakan model CAPM.',
          'Hitung biaya utang setelah pajak (after-tax cost of debt).',
          'Hitung Weighted Average Cost of Capital (WACC) perusahaan.',
          'Hitung Net Present Value (NPV) proyek dan tentukan apakah proyek layak diterima.'
        ],
        ['Kalkulasi r_s dan WACC', 'Tabel PV arus kas dan keputusan investasi'],
        [
          'Ketepatan perhitungan CAPM (25%)',
          'Kebenaran formula WACC (25%)',
          'Kalkulasi NPV dan penarikan kesimpulan (50%)'
        ],
        `1. Biaya Ekuitas (CAPM):
r_s = r_RF + β × (r_M - r_RF)
r_s = 6% + 1,25 × (14% - 6%) = 6% + (1,25 × 8%) = 6% + 10% = 16,00%.

2. Biaya Utang Setelah Pajak:
r_d (after-tax) = r_d × (1 - T)
r_d (after-tax) = 9% × (1 - 0,22) = 9% × 0,78 = 7,02%.

3. WACC Perusahaan:
WACC = (w_d × r_d_after_tax) + (w_e × r_s)
WACC = (0,30 × 7,02%) + (0,70 × 16,00%)
WACC = 2,106% + 11,20% = 13,306% (dibulatkan 13,31%).

4. Kelayakan Investasi Proyek (NPV):
- Tingkat diskonto = 13,31%.
- Faktor Anuitas PV (PVIFA 13,31%, 5 tahun):
  PVIFA = [1 - (1 + 0,1331)^(-5)] / 0,1331 = [1 - 0,5353] / 0,1331 = 3,4913.
- Nilai Sekarang Arus Kas (PV of Inflows) = Rp 1.500.000.000 × 3,4913 = Rp 5.236.950.000.
- NPV = PV Arus Kas Masuk - Investasi Awal
  NPV = Rp 5.236.950.000 - Rp 5.000.000.000 = Rp 236.950.000.

Keputusan:
NPV bernilai POSITIF (+ Rp 236.950.000). Proyek pembangunan stasiun energi LAYAK DITERIMA karena menghasilkan tingkat pengembalian melebihi biaya modal (WACC) dan menambah nilai kekayaan pemegang saham.`
      )
    ],
    uas: [
      bankItem(
        'calculation',
        'TM 9–11: Teori Modigliani-Miller & Model Kas BAT',
        'Tinggi',
        '25–35 menit',
        'Analisis Struktur Modal MM dengan Pajak & Saldo Kas Optimal Baumol',
        'PT Graha Finansial saat ini adalah perusahaan tanpa utang (all-equity) dengan laba operasi (EBIT) stabil Rp 1.200.000.000 per tahun. Biaya ekuitas perusahaan saat ini adalah 15% dan tarif pajak perseroan adalah 22%. Perusahaan berencana menerbitkan obligasi sebesar Rp 2.000.000.000 dengan kupon 8% untuk membeli kembali sebagian sahamnya.',
        [
          'EBIT = Rp 1.200.000.000; Biaya modal tanpa utang (r_0) = 15%; Pajak T_c = 22%.',
          'Rencana Utang (D) = Rp 2.000.000.000 @ 8%.'
        ],
        [
          'Hitung nilai perusahaan tanpa utang (V_U) menurut teori Modigliani-Miller.',
          'Hitung nilai perusahaan setelah berutang (V_L) dengan adanya perisai pajak bunga.',
          'Hitung biaya modal ekuitas baru (r_sL) setelah perusahaan memiliki utang.'
        ],
        ['Kalkulasi nilai perusahaan V_U, V_L, dan r_sL'],
        [
          'Ketepatan perhitungan V_U (30%)',
          'Kebenaran PV of tax shield dan V_L (35%)',
          'Kalkulasi r_sL proposisi II MM (35%)'
        ],
        `1. Nilai Perusahaan Tanpa Utang (V_U):
Laba Bersih setelah Pajak = EBIT × (1 - T_c) = Rp 1.200.000.000 × (1 - 0,22) = Rp 936.000.000.
V_U = [EBIT × (1 - T_c)] / r_0
V_U = Rp 936.000.000 / 0,15 = Rp 6.240.000.000.

2. Nilai Perusahaan Berutang (V_L):
Sesuai Teori MM dengan Pajak:
V_L = V_U + (T_c × D)
V_L = Rp 6.240.000.000 + (22% × Rp 2.000.000.000)
V_L = Rp 6.240.000.000 + Rp 440.000.000 = Rp 6.680.000.000.
(Nilai perusahaan meningkat sebesar Rp 440 juta akibat nilai sekarang perisai pajak bunga utang).

3. Biaya Ekuitas Baru (r_sL):
Nilai Pasar Ekuitas setelah utang (S) = V_L - D = Rp 6.680.000.000 - Rp 2.000.000.000 = Rp 4.680.000.000.
Rasio Utang terhadap Ekuitas (D / S) = Rp 2.000.000.000 / Rp 4.680.000.000 = 0,4274.
Menurut MM Proposisi II dengan Pajak:
r_sL = r_0 + (r_0 - r_d) × (1 - T_c) × (D / S)
r_sL = 15% + (15% - 8%) × (1 - 0,22) × 0,4274
r_sL = 15% + (7% × 0,78 × 0,4274) = 15% + 2,33% = 17,33%.`
      )
    ]
  },
  AKA201: {
    courseName: 'Pengauditan Berbasis Risiko I',
    uts: [
      bankItem(
        'case',
        'TM 2–5: Kode Etik, Asersi & Penentuan Materialitas Audit',
        'Menengah',
        '30–40 menit',
        'Penyusunan Ambang Batas Materialitas (Planning & Performance Materiality) dan Evaluasi Independensi',
        'KAP Rama & Rekan ditunjuk mengaudit laporan keuangan PT Bintang Niaga Tbk untuk tahun buku yang berakhir 31 Desember 2024. Data keuangan pendahuluan klien: Total Aset Rp 200.000.000.000, Pendapatan Penjualan Rp 250.000.000.000, dan Laba Sebelum Pajak Rp 15.000.000.000. Partner audit menetapkan tolok ukur (benchmark) materialitas perencanaan sebesar 5% dari Laba Sebelum Pajak. Selain itu, diketahui bahwa salah satu anggota tim audit senior adalah menantu dari Direktur Utama klien.',
        [
          'Tolok Ukur: 5% dari Laba Sebelum Pajak (Laba Sebelum Pajak: Rp 15 Miliar).',
          'Aturan KAP: Performance materiality ditetapkan 60% dari Planning Materiality; Ambang Trivial ditetapkan 4% dari Planning Materiality.',
          'Isu Independensi: Senior auditor memiliki hubungan kekerabatan dengan Direktur Utama klien.'
        ],
        [
          'Hitung Materialitas Laporan Keuangan secara Keseluruhan (Planning Materiality).',
          'Hitung Materialitas Pelaksanaan (Performance Materiality) dan Ambang Batas Sepele (Clearly Trivial).',
          'Evaluasi ancaman terhadap independensi auditor berdasarkan Kode Etik Akuntan Publik dan tentukan tindakan pencegahan (safeguard) yang wajib diambil KAP.'
        ],
        ['Perhitungan ambang batas materialitas bertingkat', 'Analisis etika independensi dan mitigasi'],
        [
          'Ketepatan perhitungan ketiga level materialitas (40%)',
          'Identifikasi jenis ancaman independensi (30%)',
          'Kesesuaian safeguard pencegahan etika (30%)'
        ],
        `1. Kalkulasi Ambang Batas Materialitas:
a. Materialitas Keseluruhan (Planning Materiality / PM):
   PM = 5% × Laba Sebelum Pajak = 5% × Rp 15.000.000.000 = Rp 750.000.000.
b. Materialitas Pelaksanaan (Performance Materiality):
   Performance Materiality = 60% × Rp 750.000.000 = Rp 450.000.000.
   (Fungsi: Membatasi akumulasi risiko salah saji yang tidak terdeteksi pada tingkat akun individual).
c. Ambang Batas Sepele (Clearly Trivial Threshold):
   Trivial = 4% × Rp 750.000.000 = Rp 30.000.000.
   (Salah saji di bawah Rp 30 juta dianggap sepele dan tidak perlu diakumulasikan ke ringkasan salah saji yang belum dikoreksi).

2. Evaluasi Ancaman Etika & Safeguards:
- Identifikasi Ancaman: Hubungan kekerabatan senior auditor sebagai menantu Direktur Utama memicu Familiarity Threat (ancaman kedekatan) dan Self-Interest Threat yang sangat serius.
- Tindakan Pencegahan (Safeguard) Wajib:
  1. Senior auditor tersebut WAJIB SEGERA DIKELUARKAN dari tim penugasan audit PT Bintang Niaga Tbk.
  2. Kertas kerja yang mungkin telah disusun oleh yang bersangkutan harus direviu ulang oleh staf independen lain.
  3. Menugaskan Quality Review Partner (EQCR) yang independen untuk mengawasi area-area berisiko tinggi.`
      )
    ],
    uas: [
      bankItem(
        'case',
        'TM 9–11: Model Risiko Audit & Evaluasi Segitiga Fraud SA 240',
        'Tinggi',
        '30–35 menit',
        'Penerapan Audit Risk Model & Prosedur Respon Kecurangan Manajemen',
        'Dalam perencanaan audit PT Cahaya Semesta, auditor menetapkan Acceptable Audit Risk (AAR) pada tingkat 5%. Berdasarkan pemahaman industri dan pengendalian internal klien, auditor menilai Inherent Risk (IR) akun Pendapatan sebesar 80% dan Control Risk (CR) sebesar 50% karena ketiadaan verifikasi independen atas surat jalan pengiriman. Selain itu, ditemukan indikasi bahwa kompensasi bonus manajemen sangat bergantung pada pencapaian target laba yang agresif.',
        [
          'AAR = 5% (0,05).',
          'IR = 80% (0,80); CR = 50% (0,50).',
          'Fraud Risk Factor: Bonus manajer dikaitkan ketat dengan target laba akhir tahun.'
        ],
        [
          'Hitung Planned Detection Risk (PDR) menggunakan formula Audit Risk Model.',
          'Jelaskan dampak nilai PDR tersebut terhadap jumlah bukti audit substantif yang harus dihimpun.',
          'Analisis faktor risiko fraud berdasarkan Segitiga Kecurangan (Fraud Triangle).',
          'Rancang 3 prosedur audit spesifik untuk mendeteksi potensi kecurangan pengakuan pendapatan dini (cutoff fraud).'
        ],
        ['Kalkulasi matematis PDR', 'Analisis fraud triangle', 'Program prosedur audit deteksi cutoff'],
        [
          'Ketepatan perhitungan PDR (25%)',
          'Analisis logika risiko dan bukti audit (25%)',
          'Evaluasi fraud triangle (25%)',
          'Perancangan prosedur audit spesifik (25%)'
        ],
        `1. Perhitungan Planned Detection Risk (PDR):
Formula: AAR = IR × CR × PDR
PDR = AAR / (IR × CR)
PDR = 0,05 / (0,80 × 0,50) = 0,05 / 0,40 = 0,125 (12,5%).

2. Dampak terhadap Bukti Audit:
Nilai PDR sebesar 12,5% tergolong RENDAH. Risiko deteksi yang rendah mengharuskan auditor untuk TIDAK DAPAT mengandalkan pengendalian internal semata, melainkan WAJIB mengumpulkan bukti audit substantif dalam kuantitas yang LEBIH BESAR, lebih kompeten, dan memperluas sampel pengujian transaksi pendapatan mendekati akhir tahun.

3. Analisis Segitiga Fraud (Fraud Triangle):
- Tekanan (Pressure): Target laba yang agresif dan keterkaitan bonus direksi memicu tekanan berat untuk melakukan pelaporan keuangan curang.
- Peluang (Opportunity): Kontrol verifikasi surat jalan pengiriman yang lemah (CR 50%) memberi celah mencatat faktur penjualan fiktif tanpa pengiriman fisik.
- Rasionalisasi (Rationalization): Manajemen membenarkan tindakan memajukan pencatatan pendapatan bulan Januari ke Desember sebagai "hanya penyesuaian waktu sementara".

4. Tiga Prosedur Audit Spesifik:
1. Uji Pisah Batas Penjualan (Sales Cutoff Test): Memeriksa dokumen pengiriman (Bill of Lading) dan faktur penjualan 15 hari sebelum dan 15 hari sesudah tanggal neraca untuk memastikan transaksi dicatat pada periode yang benar.
2. Konfirmasi Piutang Usaha Positif: Mengirimkan surat konfirmasi langsung kepada pelanggan utama terkait saldo piutang dan syarat penjualan konsinyasi/retur.
3. Review Jurnal Penyesuaian Akhir Tahun: Menggunakan software audit (CAATs) untuk memfilter seluruh jurnal penyesuaian pendapatan manual yang dibuat pada tanggal 31 Desember atau mendekati penutupan buku.`
      )
    ]
  },
  AKS301: {
    courseName: 'Sistem Informasi Akuntansi',
    uts: [
      bankItem(
        'case',
        'TM 2–5: Pemodelan BPMN & Analisis Pengendalian Siklus O2C',
        'Menengah',
        '30–40 menit',
        'Dokumentasi Proses Bisnis BPMN & Evaluasi Pemisahan Tugas (SoD) Siklus Penjualan',
        'PT Distribusi Lancar menghadapi keluhan pelanggan terkait faktur tagihan yang tidak sesuai dengan barang yang diterima, serta keterlambatan rekonsiliasi kas. Alur saat ini: Tenaga penjual menerima pesanan pelanggan, memeriksa sendiri persetujuan kredit pelanggan, mengambil barang di gudang, menerbitkan faktur tagihan, dan menerima setoran tunai dari pelanggan untuk kemudian disetorkan ke bank seminggu sekali.',
        [
          'Entitas yang Terlibat: Pelanggan, Tenaga Penjualan, Bagian Gudang, Bagian Akuntansi/Kasir.',
          'Kelemahan Kritis: Seluruh fungsi otorisasi kredit, kustodi fisik barang, penagihan, dan kustodi kas dilakukan oleh tenaga penjual tunggal.'
        ],
        [
          'Identifikasi 3 kelemahan pengendalian internal serius pada alur proses penjualan tersebut.',
          'Rancang struktur pemisahan tugas (Segregation of Duties) yang ideal dengan membagi fungsi ke dalam 4 departemen terpisah.',
          'Jelaskan pengendalian aplikasi (Application Controls) yang dapat diterapkan pada software ERP untuk mencegah kesalahan pencatatan harga dan limit kredit.'
        ],
        ['Daftar kelemahan kontrol', 'Matriks pemisahan tugas ideal', 'Rekomendasi application controls'],
        [
          'Identifikasi risiko dan celah fraud (35%)',
          'Rancangan SoD yang tepat (35%)',
          'Pemahaman application controls TI (30%)'
        ],
        `1. Tiga Kelemahan Pengendalian Internal:
a. Tidak Ada Pemisahan Tugas (No Segregation of Duties): Tenaga penjual merangkap otorisasi kredit, penanganan fisik barang gudang, dan penerimaan uang kas. Ini memicu risiko pencurian kas, lapping piutang, dan penggelapan barang dagang.
b. Ketiadaan Kontrol Kredit Independen: Tenaga penjual yang berorientasi komisi cenderung menyetujui kredit pelanggan tanpa mengevaluasi riwayat kredit dan batas plafon utang.
c. Keterlambatan Penyetoran Kas (Seminggu Sekali): Uang kas yang dipegang staf terlalu lama meningkatkan risiko kehilangan fisik atau penggunaan uang perusahaan untuk keperluan pribadi.

2. Struktur Pemisahan Tugas Ideal (BPMN Lanes):
- Departemen Penjualan: Menerima pesanan pelanggan dan menginput Sales Order ke sistem.
- Departemen Kredit (Independen): Meninjau kelayakan kredit dan menyetujui Sales Order secara digital di sistem.
- Departemen Gudang: Mencetak Picking List terotorisasi, menyiapkan barang fisik, dan menyerahkan barang ke Bagian Pengiriman (yang menerbitkan Bill of Lading).
- Departemen Akuntansi (Penagihan & Kas):
  * Staf Penagihan: Menerbitkan Faktur Penjualan berdasarkan konfirmasi pengiriman barang.
  * Kasir / Bank: Menerima setoran langsung pelanggan dan mencatat penerimaan kas harian (wajib disetor ke bank setiap hari kerja).

3. Pengendalian Aplikasi TI (Application Controls):
- Credit Limit Check (Pemeriksaan Batas Kredit Otomatis): Sistem otomatis mengunci transaksi jika pesanan baru menyebabkan total piutang melampaui plafon kredit.
- Validity Check (Pemeriksaan Validitas): Memastikan kode pelanggan dan kode barang terdaftar dalam master data yang sah.
- Sign Check / Field Check: Memastikan kuantitas dan harga satuan bernilai numerik positif dan mengambil harga resmi dari master price list tanpa edit manual staf.`
      )
    ],
    uas: [
      bankItem(
        'case',
        'TM 8–10: Analisis Kasus Pengendalian Internal COSO & Keamanan Sistem',
        'Tinggi',
        '30–35 menit',
        'Evaluasi Defisiensi Pengendalian Internal COSO & Strategi Mitigasi Ransomware',
        'Sebuah perusahaan ritel e-commerce mengalami serangan siber ransomware yang mengenkripsi seluruh server basis data transaksi pelanggan dan jurnal keuangan. Penyelidikan forensik TI mengungkap bahwa: (1) Semua staf IT menggunakan satu akun administrator bersama dengan kata sandi "Admin123!", (2) Cadangan data (backup) dilakukan secara otomatis setiap malam tetapi disimpan di server yang berada di jaringan lokal yang sama dan ikut terenkripsi, (3) Dewan direksi tidak pernah mengalokasikan anggaran untuk pelatihan kesadaran keamanan siber bagi karyawan.',
        [
          'Insiden: Ransomware mengunci basis data transaksi.',
          'Temuan Forensik: Akun admin bersama (shared credentials), backup lokal tanpa air-gap/off-site, nihil program training siber.'
        ],
        [
          'Petakan ketiga temuan forensik tersebut ke dalam komponen Kerangka Kerja Pengendalian Internal COSO.',
          'Jelaskan dampak pelanggaran pilar CIA Triad pada insiden tersebut.',
          'Rancang rencana pemulihan bencana (Disaster Recovery Plan) dan pengendalian preventif komprehensif untuk mencegah insiden berulang.'
        ],
        ['Pemetaan komponen COSO', 'Analisis CIA Triad', 'Rancangan solusi Disaster Recovery & GITC'],
        [
          'Ketepatan pemetaan komponen COSO (35%)',
          'Analisis pilar CIA Triad (30%)',
          'Kelayakan rencana DR & General IT Controls (35%)'
        ],
        `1. Pemetaan ke Komponen COSO:
- Temuan 1 (Akun admin bersama & password lemah): Defisiensi pada Aktivitas Pengendalian (Control Activities) — ketiadaan kontrol akses logis individual dan pelanggaran prinsip akuntabilitas non-repudiation.
- Temuan 2 (Backup lokal tanpa air-gap terenkripsi): Defisiensi pada Penilaian Risiko (Risk Assessment) dan Aktivitas Pengendalian — gagal mengantisipasi risiko kegagalan sistem terpusat dan tidak mematuhi aturan cadangan 3-2-1.
- Temuan 3 (Nihil anggaran pelatihan keamanan oleh direksi): Defisiensi pada Lingkungan Pengendalian (Control Environment) dan Informasi & Komunikasi — tone at the top manajemen yang meremehkan tata kelola risiko TI.

2. Dampak pada CIA Triad:
- Availability (Ketersediaan): Rusak total (Dampak Paling Fatal). Sistem lumpuh, transaksi e-commerce berhenti, dan laporan keuangan tidak dapat diakses.
- Integrity (Keutuhan): Rusak berat. Data terenkripsi berpotensi korup atau dimodifikasi oleh peretas.
- Confidentiality (Kerahasiaan): Terancam terekspos jika peretas menerapkan taktik double extortion (mengancam membocorkan data kartu kredit dan data pribadi pelanggan jika tebusan tidak dibayar).

3. Rencana Mitigasi Komprehensif (GITC & Disaster Recovery):
a. Pengendalian Preventif GITC:
   - Terapkan Multi-Factor Authentication (MFA) wajib untuk seluruh akses sistem dan VPN.
   - Hapus akun bersama; terapkan akun berbasis peran individu (Role-Based Access Control) dengan kebijakan kata sandi kuat (minimal 12 karakter, rotasi berkala).
   - Terapkan program pelatihan kesadaran keamanan siber rutin (Simulasi Phishing berkala).
b. Strategi Pencadangan & Disaster Recovery (3-2-1 Backup Rule):
   - Simpan 3 salinan data, pada 2 media penyimpanan berbeda, dengan 1 salinan disimpan secara Off-site / Cloud yang terisolasi (Immutable Air-Gapped Backup).
   - Tetapkan RPO (Recovery Point Objective) maksimal 1 jam dan RTO (Recovery Time Objective) pemulihan sistem maksimal 4 jam.`
      )
    ]
  }
};

const outputCode = `// scripts/sem3-bank-data.mjs
export const SEM3_BANK_DATA = ${JSON.stringify(BANK_SPEC, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'scripts/sem3-bank-data.mjs'), outputCode, 'utf8');
console.log('Successfully wrote sem3-bank-data.mjs');
