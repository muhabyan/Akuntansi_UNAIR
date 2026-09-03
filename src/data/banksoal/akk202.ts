// src/data/banksoal/akk202.ts
// Bank Soal Esai & Studi Kasus Akuntansi Keuangan Menengah II (AKK202)
import type { BankSoal } from '../../types';

export const AKK202_BANK_UTS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 1–3: Aset Tetap & Depresiasi",
    "difficulty": "Menengah",
    "estimatedTime": "25–35 menit",
    "question": "Studi Kasus Perolehan Aset Tetap Lump-Sum, Pengeluaran Modal & Depresiasi",
    "context": "PT Airlangga Makmur membeli tanah, bangunan pabrik, dan mesin secara gabungan (lump-sum) pada 2 Januari 2024 dengan total pembayaran kas Rp 2.400.000.000. Penilai independen menetapkan nilai wajar masing-masing: Tanah Rp 1.000.000.000, Bangunan Rp 1.500.000.000, dan Mesin Rp 500.000.000. Pada 1 Juli 2024, perusahaan mengeluarkan kas Rp 120.000.000 untuk merombak mesin yang berhasil memperpanjang umur ekonomisnya dari 4 tahun menjadi 6 tahun. Bangunan disusutkan metode garis lurus selama 20 tahun (nilai sisa Rp 100 jt). Mesin disusutkan metode saldo menurun ganda.",
    "data": [
      "Harga Beli Lump-Sum: Rp 2.400.000.000 tunai.",
      "Nilai Wajar: Tanah Rp 1.000.000.000 (33,33%), Bangunan Rp 1.500.000.000 (50,00%), Mesin Rp 500.000.000 (16,67%). Total Nilai Wajar = Rp 3.000.000.000.",
      "Pengeluaran 1 Juli 2024: Rp 120.000.000 untuk peningkatan kapasitas mesin."
    ],
    "instructions": [
      "Hitung alokasi biaya perolehan lump-sum untuk masing-masing aset.",
      "Buat ayat jurnal perolehan aset pada 2 Januari 2024.",
      "Buat jurnal pengeluaran modal pada 1 Juli 2024.",
      "Hitung dan buat jurnal penyesuaian beban penyusutan untuk Bangunan dan Mesin per 31 Desember 2024."
    ],
    "outputFormat": [
      "Tabel alokasi biaya lump-sum",
      "Ayat jurnal berurutan",
      "Kalkulasi penyusutan per 31 Des 2024"
    ],
    "rubric": [
      "Ketepatan alokasi proporsional nilai wajar (25%)",
      "Kebenaran jurnal perolehan & pengeluaran modal (25%)",
      "Ketepatan kalkulasi penyusutan garis lurus & DDB revisi (50%)"
    ],
    "answerGuide": "1. Alokasi Harga Perolehan Lump-Sum:\n- Total Nilai Wajar = Rp 1.000 jt + Rp 1.500 jt + Rp 500 jt = Rp 3.000.000.000.\n- Tanah: (1.000 / 3.000) × Rp 2.400.000.000 = Rp 800.000.000.\n- Bangunan: (1.500 / 3.000) × Rp 2.400.000.000 = Rp 1.200.000.000.\n- Mesin: (500 / 3.000) × Rp 2.400.000.000 = Rp 400.000.000.\n\n2. Jurnal 2 Januari 2024:\n(D) Tanah ................................. Rp 800.000.000\n(D) Bangunan .............................. Rp 1.200.000.000\n(D) Mesin ................................. Rp 400.000.000\n    (K) Kas .............................................. Rp 2.400.000.000\n\n3. Jurnal 1 Juli 2024 (Capital Expenditure Mesin):\n(D) Mesin ................................. Rp 120.000.000\n    (K) Kas .............................................. Rp 120.000.000\n\n4. Beban Penyusutan 31 Desember 2024:\na. Bangunan (Garis Lurus 20 tahun, Nilai Sisa Rp 100 jt):\n   Beban = (Rp 1.200.000.000 - Rp 100.000.000) / 20 = Rp 55.000.000.\nb. Mesin:\n   - Jan - Jun (6 bulan sebelum renovasi, tarif DDB 4 tahun = 50% per tahun):\n     Penyusutan = Rp 400.000.000 × 50% × (6/12) = Rp 100.000.000.\n   - Nilai buku per 1 Juli = Rp 400 jt - Rp 100 jt + renovasi Rp 120 jt = Rp 420.000.000.\n   - Sisa umur baru = 6 tahun. Tarif DDB baru = (100% / 6) × 2 = 33,33% per tahun.\n   - Jul - Des (6 bulan): Rp 420.000.000 × 33,33% × (6/12) = Rp 70.000.000.\n   - Total Penyusutan Mesin 2024 = Rp 100 jt + Rp 70 jt = Rp 170.000.000.\n\nJurnal Penyesuaian 31 Des 2024:\n(D) Beban Penyusutan Bangunan .............. Rp 55.000.000\n    (K) Akumulasi Penyusutan Bangunan .................... Rp 55.000.000\n(D) Beban Penyusutan Mesin ................ Rp 170.000.000\n    (K) Akumulasi Penyusutan Mesin ....................... Rp 170.000.000"
  }
];

export const AKK202_BANK_UAS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 8–9: Penerbitan & Amortisasi Obligasi Efektif",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Kalkulasi Amortisasi Bunga Efektif & Pelunasan Dini Obligasi",
    "context": "Pada 1 Januari 2024, PT Nusantara menerbitkan obligasi 5 tahun bernilai nominal Rp 1.000.000.000 dengan bunga kupon 8% yang dibayarkan setiap tanggal 31 Desember. Tingkat bunga pasar efektif saat penerbitan adalah 10%. Harga penerbitan obligasi adalah Rp 924.184.000. Pada 31 Desember 2025 (setelah pembayaran bunga tahun kedua), perusahaan melunasi seluruh obligasi di pasar reguler pada kurs 102.",
    "data": [
      "Nilai Nominal: Rp 1.000.000.000.",
      "Bunga Kupon Kontraktual: 8% per tahun (Rp 80.000.000 per tahun).",
      "Suku Bunga Efektif Pasar: 10% per tahun.",
      "Nilai Kas Diterima saat Penerbitan: Rp 924.184.000 (Diskonto awal: Rp 75.816.000).",
      "Kurs Pelunasan Dini 31 Des 2025: 102% (Rp 1.020.000.000)."
    ],
    "instructions": [
      "Susun tabel amortisasi diskonto obligasi menggunakan metode bunga efektif untuk tahun 2024 dan 2025.",
      "Buat ayat jurnal penerbitan obligasi pada 1 Januari 2024.",
      "Buat ayat jurnal pembayaran bunga dan amortisasi pada 31 Desember 2024 dan 31 Desember 2025.",
      "Hitung laba atau rugi pelunasan dini obligasi per 31 Desember 2025 beserta jurnalnya."
    ],
    "outputFormat": [
      "Tabel amortisasi bunga efektif 2 tahun",
      "Ayat jurnal operasional dan pelunasan dini"
    ],
    "rubric": [
      "Ketepatan tabel amortisasi bunga efektif (30%)",
      "Kebenaran jurnal penerbitan dan pembayaran bunga (30%)",
      "Kalkulasi carrying value dan laba/rugi pelunasan dini (40%)"
    ],
    "answerGuide": "1. Tabel Amortisasi Bunga Efektif:\nTahun 2024:\n- Nilai Tercatat Awal: Rp 924.184.000\n- Kas Bunga Kupon (8% × 1 M): Rp 80.000.000\n- Beban Bunga Efektif (10% × 924.184.000): Rp 92.418.400\n- Amortisasi Diskonto: Rp 12.418.400\n- Nilai Tercatat Akhir (31 Des 2024): Rp 936.602.400\n\nTahun 2025:\n- Nilai Tercatat Awal: Rp 936.602.400\n- Kas Bunga Kupon: Rp 80.000.000\n- Beban Bunga Efektif (10% × 936.602.400): Rp 93.660.240\n- Amortisasi Diskonto: Rp 13.660.240\n- Nilai Tercatat Akhir (31 Des 2025): Rp 950.262.640\n\n2. Jurnal 1 Januari 2024:\n(D) Kas ................................... Rp 924.184.000\n(D) Diskonto Utang Obligasi ............... Rp 75.816.000\n    (K) Utang Obligasi ................................... Rp 1.000.000.000\n\n3. Jurnal Bunga:\n31 Des 2024:\n(D) Beban Bunga Obligasi .................. Rp 92.418.400\n    (K) Diskonto Utang Obligasi .......................... Rp 12.418.400\n    (K) Kas .............................................. Rp 80.000.000\n\n31 Des 2025:\n(D) Beban Bunga Obligasi .................. Rp 93.660.240\n    (K) Diskonto Utang Obligasi .......................... Rp 13.660.240\n    (K) Kas .............................................. Rp 80.000.000\n\n4. Pelunasan Dini 31 Desember 2025:\n- Nilai Tercatat Obligasi = Rp 950.262.640 (Sisa Diskonto = Rp 1.000.000.000 - Rp 950.262.640 = Rp 49.737.360).\n- Kas yang Dibayarkan (Kurs 102) = 102% × Rp 1.000.000.000 = Rp 1.020.000.000.\n- Rugi Pelunasan Dini Obligasi = Rp 1.020.000.000 - Rp 950.262.640 = Rp 69.737.360.\n\nJurnal Pelunasan Dini:\n(D) Utang Obligasi ........................ Rp 1.000.000.000\n(D) Rugi Pelunasan Dini Obligasi .......... Rp 69.737.360\n    (K) Diskonto Utang Obligasi .......................... Rp 49.737.360\n    (K) Kas .............................................. Rp 1.020.000.000"
  }
];

export const AKK202_BANK: BankSoal[] = [...AKK202_BANK_UTS, ...AKK202_BANK_UAS];
