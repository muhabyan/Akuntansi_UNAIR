// src/data/banksoal/akm202.ts
// Bank Soal Esai & Studi Kasus Akuntansi Manajemen (AKM202)
import type { BankSoal } from '../../types';

export const AKM202_BANK_UTS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 2–3: Analisis CVP & Variable Costing",
    "difficulty": "Menengah",
    "estimatedTime": "30–40 menit",
    "question": "Rekonsiliasi Laba Bersih Variable vs Absorption Costing & Analisis Titik Impas Multi-Produk",
    "context": "PT Prima Manufaktur memproduksi dan menjual barang konsumen. Kapasitas normal adalah 50.000 unit per tahun. Harga jual per unit Rp 100.000. Biaya manufaktur: Bahan Langsung Rp 30.000/unit, Tenaga Kerja Langsung Rp 15.000/unit, BOP Variabel Rp 5.000/unit. Total BOP Tetap tahunan Rp 1.000.000.000 (tarif Rp 20.000/unit). Beban penjualan variabel Rp 10.000/unit dan beban administrasi tetap Rp 400.000.000 per tahun. Pada tahun 2024, perusahaan memproduksi 50.000 unit dan berhasil menjual 40.000 unit (persediaan awal nol).",
    "data": [
      "Unit Diproduksi: 50.000 unit; Unit Terjual: 40.000 unit; Persediaan Akhir: 10.000 unit.",
      "Harga Jual: Rp 100.000/unit.",
      "Biaya Manufaktur Variabel: Rp 50.000/unit (DM 30rb + DL 15rb + VMOH 5rb).",
      "Biaya Manufaktur Tetap (FMOH): Rp 1.000.000.000 (Rp 20.000/unit).",
      "Beban Operasional: Variabel Rp 10.000/unit terjual; Tetap Rp 400.000.000."
    ],
    "instructions": [
      "Susun Laporan Laba Rugi menggunakan Metode Absorption Costing.",
      "Susun Laporan Laba Rugi menggunakan Metode Variable Costing.",
      "Buat rekonsiliasi perbedaan laba bersih di antara kedua metode.",
      "Hitung Titik Impas (Break-Even Point) dalam unit dan rupiah menggunakan data Variable Costing."
    ],
    "outputFormat": [
      "Format Laba Rugi Absorption & Variable",
      "Tabel rekonsiliasi laba",
      "Kalkulasi BEP"
    ],
    "rubric": [
      "Ketepatan format dan perhitungan Absorption Costing (30%)",
      "Ketepatan format dan perhitungan Variable Costing (30%)",
      "Penjelasan rekonsiliasi selisih BOP tetap tertahan (20%)",
      "Kalkulasi BEP unit & rupiah (20%)"
    ],
    "answerGuide": "1. Laporan Laba Rugi Absorption Costing:\n- Penjualan (40.000 × Rp 100.000) .................... Rp 4.000.000.000\n- HPP (40.000 × Rp 70.000*) ........................... (Rp 2.800.000.000)\n  (*HPP/unit = Var 50.000 + Tetap 20.000 = Rp 70.000)\n- Laba Kotor (Gross Margin) ............................ Rp 1.200.000.000\n- Beban Operasional:\n  * Penjualan Variabel (40.000 × Rp 10.000) = Rp 400.000.000\n  * Administrasi Tetap = Rp 400.000.000\n  * Total Beban Operasional ........................... (Rp 800.000.000)\n- Laba Bersih Operasi (Absorption) .................... Rp 400.000.000\n\n2. Laporan Laba Rugi Variable Costing:\n- Penjualan (40.000 × Rp 100.000) .................... Rp 4.000.000.000\n- Biaya Variabel:\n  * Manufaktur Variabel (40.000 × Rp 50.000) = Rp 2.000.000.000\n  * Penjualan Variabel (40.000 × Rp 10.000) = Rp 400.000.000\n  * Total Biaya Variabel .............................. (Rp 2.400.000.000)\n- Contribution Margin (40.000 × Rp 40.000) ............. Rp 1.600.000.000\n- Biaya Tetap:\n  * BOP Tetap Pabrik = Rp 1.000.000.000\n  * Administrasi Tetap = Rp 400.000.000\n  * Total Biaya Tetap ................................. (Rp 1.400.000.000)\n- Laba Bersih Operasi (Variable) ...................... Rp 200.000.000\n\n3. Rekonsiliasi Laba Bersih:\n- Laba Bersih Absorption Costing ....................... Rp 400.000.000\n- Laba Bersih Variable Costing ......................... Rp 200.000.000\n- Selisih Laba ......................................... Rp 200.000.000\nPenjelasan: Produksi (50.000) > Penjualan (40.000) = 10.000 unit tertahan di persediaan akhir.\nBOP Tetap yang tertahan di persediaan = 10.000 unit × Rp 20.000/unit = Rp 200.000.000.\n\n4. Perhitungan BEP:\n- CM per unit = Rp 100.000 - Rp 60.000 (total variabel) = Rp 40.000/unit.\n- CM Ratio = Rp 40.000 / Rp 100.000 = 40%.\n- Total Biaya Tetap = Rp 1.000 jt + Rp 400 jt = Rp 1.400.000.000.\n- BEP Unit = Rp 1.400.000.000 / Rp 40.000 = 35.000 unit.\n- BEP Rupiah = Rp 1.400.000.000 / 40% = Rp 3.500.000.000."
  }
];

export const AKM202_BANK_UAS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 10: Pengambilan Keputusan Taktis & Biaya Relevan",
    "difficulty": "Tinggi",
    "estimatedTime": "30–35 menit",
    "question": "Keputusan Make-or-Buy dan Alokasi Sumber Daya Terbatas",
    "context": "PT Delta Elektronik membutuhkan 10.000 unit komponen X-1 setiap tahun. Biaya produksi internal per unit: Bahan Langsung Rp 12.000, Tenaga Kerja Langsung Rp 8.000, BOP Variabel Rp 4.000, dan BOP Tetap Terhindarkan (sewa mesin khusus) Rp 3.000, serta Alokasi Biaya Bersama Pabrik Rp 5.000. Pemasok eksternal menawarkan untuk memasok komponen tersebut seharga Rp 25.000 per unit. Jika perusahaan membeli dari luar, fasilitas pabrik dapat disewakan kepada pihak ketiga sebesar Rp 20.000.000 per tahun.",
    "data": [
      "Kebutuhan: 10.000 unit komponen X-1.",
      "Biaya Internal/unit: DM 12rb, DL 8rb, VMOH 4rb, Avoidable Fixed Overhead 3rb, Unavoidable Common Overhead 5rb.",
      "Harga Tawaran Pemasok Eksternal: Rp 25.000/unit.",
      "Peluang Sewa Fasilitas: Pendapatan sewa Rp 20.000.000/tahun."
    ],
    "instructions": [
      "Identifikasi biaya relevan per unit untuk keputusan membuat sendiri (Make).",
      "Susun tabel analisis komparatif total biaya relevan antara Membuat vs Membeli.",
      "Berikan rekomendasi kuantitatif dan kualitatif kepada manajemen PT Delta Elektronik."
    ],
    "outputFormat": [
      "Daftar biaya relevan",
      "Tabel perbandingan biaya",
      "Rekomendasi keputusan manajerial"
    ],
    "rubric": [
      "Identifikasi biaya terhindarkan vs tidak terhindarkan (30%)",
      "Ketepatan perhitungan opportunity cost sewa (30%)",
      "Kelayakan analisis strategis dan rekomendasi (40%)"
    ],
    "answerGuide": "1. Analisis Biaya Relevan:\nBiaya bersama pabrik (Unavoidable Common Overhead Rp 5.000) adalah BIAYA TIDAK RELEVAN karena tetap terjadi apapun alternatif yang dipilih.\nBiaya Relevan Membuat Sendiri (Make) per unit:\n- Bahan Langsung: Rp 12.000\n- Tenaga Kerja Langsung: Rp 8.000\n- BOP Variabel: Rp 4.000\n- BOP Tetap Terhindarkan: Rp 3.000\nTotal Biaya Relevan per unit = Rp 27.000.\n\n2. Tabel Komparasi Total (10.000 unit):\nAlternatif MEMBUAT (Make):\n- Biaya Produksi Relevan (10.000 × Rp 27.000) = Rp 270.000.000\n- Opportunity Cost (Pendapatan Sewa yang Hilang) = Rp 20.000.000\nTotal Biaya Relevan Membuat = Rp 290.000.000.\n\nAlternatif MEMBELI (Buy):\n- Harga Pembelian dari Pemasok (10.000 × Rp 25.000) = Rp 250.000.000.\nTotal Biaya Relevan Membeli = Rp 250.000.000.\n\nPenghematan Bersih jika Membeli dari Luar = Rp 290.000.000 - Rp 250.000.000 = Rp 40.000.000 per tahun.\n\n3. Rekomendasi Manajerial:\n- Kuantitatif: PT Delta Elektronik direkomendasikan untuk MEMBELI komponen X-1 dari pemasok eksternal karena menghemat biaya sebesar Rp 40.000.000 per tahun.\n- Kualitatif: Manajemen harus memverifikasi rekam jejak ketepatan waktu pengiriman pemasok, jaminan kualitas mutu komponen, dan klausul kenaikan harga di masa depan."
  }
];

export const AKM202_BANK: BankSoal[] = [...AKM202_BANK_UTS, ...AKM202_BANK_UAS];
