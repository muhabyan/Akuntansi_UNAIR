// src/data/quizzes/pjk202.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Perpajakan II (PJK202)
import type { QuizQuestion } from '../../types';

export const PJK202_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "Konsep PPh & Biaya 3M",
    "difficulty": "medium",
    "q": "Manakah dari biaya berikut ini yang TIDAK BOLEH dikurangkan dari penghasilan bruto (non-deductible expense) berdasarkan Pasal 9 UU PPh?",
    "options": [
      "Biaya pembelian bahan baku produksi",
      "Gaji dan tunjangan operasional pegawai",
      "Sanksi administrasi berupa bunga dan denda Surat Tagihan Pajak (STP)",
      "Biaya perjalanan dinas luar kota pegawai"
    ],
    "answer": 2,
    "explanation": "Sanksi administrasi perpajakan (bunga, denda, kenaikan) secara tegas dilarang dibiayakan secara fiskal (Pasal 9 ayat 1 huruf k UU PPh)."
  },
  {
    "tm": 2,
    "topic": "Penilaian Fiskal & Tarif PPh Badan",
    "difficulty": "medium",
    "q": "Berdasarkan UU Harmonisasi Peraturan Perpajakan (UU HPP), tarif umum Pajak Penghasilan (PPh) Badan yang berlaku di Indonesia adalah...",
    "options": [
      "25%",
      "22%",
      "20%",
      "19%"
    ],
    "answer": 1,
    "explanation": "Tarif PPh Badan umum di Indonesia adalah sebesar 22% (Pasal 17 ayat 1b UU PPh jo. UU HPP)."
  },
  {
    "tm": 3,
    "topic": "Transfer Pricing & Hubungan Istimewa",
    "difficulty": "medium",
    "q": "Sesuai PMK 172/2023, metode penentuan harga transfer yang membandingkan laba bersih operasi transaksi afiliasi dengan laba bersih transaksi independen adalah...",
    "options": [
      "CUP (Comparable Uncontrolled Price)",
      "Resale Price Method (RPM)",
      "Cost Plus Method (CPM)",
      "TNMM (Transactional Net Margin Method)"
    ],
    "answer": 3,
    "explanation": "TNMM menguji rasio margin laba operasi bersih (seperti net cost plus atau operating margin) terhadap basis yang tepat dibandingkan transaksi independen."
  },
  {
    "tm": 4,
    "topic": "Penyusutan Fiskal (PMK 72/2023)",
    "difficulty": "medium",
    "q": "Sebuah truk angkutan operasional pabrik dibeli pada 1 Maret 2024 seharga Rp 400.000.000 (Kelompok 2, masa manfaat 8 tahun). Jika perusahaan menggunakan metode garis lurus fiskal, berapakah penyusutan tahun 2024?",
    "options": [
      "Rp 50.000.000",
      "Rp 41.666.667",
      "Rp 37.500.000",
      "Rp 25.000.000"
    ],
    "answer": 1,
    "explanation": "Tarif Kelompok 2 = 12.5%. Bulan penyusutan (Maret-Desember = 10 bulan). Penyusutan = (10/12) × 12.5% × Rp 400.000.000 = Rp 41.666.667."
  },
  {
    "tm": 5,
    "topic": "Pemungutan PPh 22 & 23",
    "difficulty": "medium",
    "q": "PT Cendana menyewa mesin fotokopi dari CV Mitra (memiliki NPWP) dengan biaya sewa Rp 10.000.000 (tidak termasuk PPN). Berapakah PPh Pasal 23 yang wajib dipotong oleh PT Cendana?",
    "options": [
      "Rp 200.000 (tarif 2%)",
      "Rp 1.500.000 (tarif 15%)",
      "Rp 100.000 (tarif 1%)",
      "Rp 400.000 (tarif 4%)"
    ],
    "answer": 0,
    "explanation": "Sewa harta selain tanah dan/atau bangunan dikenakan pemotongan PPh Pasal 23 sebesar 2% dari jumlah bruto tidak termasuk PPN."
  },
  {
    "tm": 6,
    "topic": "PPh Final Pasal 4(2)",
    "difficulty": "medium",
    "q": "Penghasilan sewa tanah dan/atau bangunan dikenakan pemotongan PPh Final Pasal 4 ayat 2 dengan tarif sebesar...",
    "options": [
      "2,5% dari jumlah bruto",
      "5% dari jumlah bruto",
      "10% dari jumlah bruto",
      "11% dari jumlah bruto"
    ],
    "answer": 2,
    "explanation": "Sesuai PP 34/2017, persewaan tanah dan/atau bangunan dikenakan PPh Final sebesar 10% dari jumlah bruto persewaan."
  },
  {
    "tm": 7,
    "topic": "Kredit PPh 24 Luar Negeri",
    "difficulty": "medium",
    "q": "PT Global memperoleh penghasilan dari cabang di Singapura Rp 500.000.000 (telah dipotong pajak di Singapura 25% = Rp 125 jt). Total PKP seluruh dunia Rp 2.000.000.000 dengan total PPh terutang di Indonesia Rp 440.000.000. Berapakah kredit pajak PPh 24 maksimum yang dapat dikreditkan?",
    "options": [
      "Rp 125.000.000",
      "Rp 110.000.000",
      "Rp 440.000.000",
      "Rp 88.000.000"
    ],
    "answer": 1,
    "explanation": "Batas proporsional = (Rp 500 jt / Rp 2.000 jt) × Rp 440 jt = Rp 110.000.000. Kredit yang dapat dikreditkan adalah nilai terendah antara pajak riil (125 jt) dan batas proporsional (110 jt) = Rp 110.000.000."
  }
];

export const PJK202_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Fasilitas PPh Badan Pasal 31E",
    "difficulty": "medium",
    "q": "PT Makmur memiliki peredaran bruto setahun Rp 4.000.000.000 dengan Penghasilan Kena Pajak Rp 300.000.000. Berapakah PPh Badan terutang PT Makmur?",
    "options": [
      "Rp 66.000.000",
      "Rp 33.000.000",
      "Rp 20.000.000",
      "Rp 15.000.000"
    ],
    "answer": 1,
    "explanation": "Karena omzet < Rp 4,8 Miliar, seluruh PKP mendapat fasilitas pengurangan tarif 50%: Tarif efektif = 50% × 22% = 11%. PPh terutang = 11% × Rp 300.000.000 = Rp 33.000.000."
  },
  {
    "tm": 9,
    "topic": "PPh 21 Skema TER (PP 58/2023)",
    "difficulty": "medium",
    "q": "Berdasarkan PP No. 58/2023 dan PMK 168/2023, pemotongan PPh 21 untuk pegawai tetap pada masa pajak Januari hingga November dihitung dengan cara...",
    "options": [
      "Mengalikan penghasilan neto disetahunkan dengan tarif progresif Pasal 17",
      "Mengalikan penghasilan bruto bulanan secara langsung dengan Tarif Efektif Rata-Rata (TER)",
      "Memotong tarif flat 5% dari seluruh penghasilan kotor pegawai",
      "Mengurangi PTKP bulanan lalu dikalikan tarif 15%"
    ],
    "answer": 1,
    "explanation": "Skema TER mempermudah administrasi masa pajak bulanan Jan-Nov: PPh 21 = Penghasilan Bruto Bulanan × Tarif TER yang sesuai status PTKP."
  },
  {
    "tm": 10,
    "topic": "Natura & Kenikmatan (PMK 66/2023)",
    "difficulty": "medium",
    "q": "Manakah fasilitas natura yang DIKECUALIKAN dari objek PPh Pasal 21 bagi karyawan berdasarkan PMK 66/2023?",
    "options": [
      "Mobil dinas mewah yang dibawa pulang untuk keperluan pribadi",
      "Penyediaan makanan dan minuman bagi seluruh pegawai di tempat kerja secara cuma-cuma",
      "Keanggotaan klub golf eksekutif",
      "Tiket liburan keluarga pegawai ke luar negeri"
    ],
    "answer": 1,
    "explanation": "Makanan/minuman bagi seluruh pegawai di tempat kerja, fasilitas kerja di daerah tertentu, dan peralatan keselamatan kerja dikecualikan dari objek PPh 21."
  },
  {
    "tm": 11,
    "topic": "Rekonsiliasi Fiskal SPT 1771",
    "difficulty": "medium",
    "q": "Dalam laporan laba rugi komersial terdapat Beban Sumbangan HUT RI sebesar Rp 15.000.000 dan Pendapatan Bunga Deposito sebesar Rp 20.000.000. Penyesuaian fiskal yang tepat adalah...",
    "options": [
      "Koreksi Positif Rp 15 jt dan Koreksi Negatif Rp 20 jt",
      "Koreksi Negatif Rp 15 jt dan Koreksi Positif Rp 20 jt",
      "Koreksi Positif Rp 35 jt",
      "Koreksi Negatif Rp 35 jt"
    ],
    "answer": 0,
    "explanation": "Sumbangan non-bencana dikoreksi POSITIF (menambah laba fiskal karena non-deductible). Bunga deposito dikoreksi NEGATIF (mengurangi laba fiskal karena sudah dikenakan PPh Final)."
  },
  {
    "tm": 12,
    "topic": "Konsep PPN & Tarif UU HPP",
    "difficulty": "medium",
    "q": "Berdasarkan UU Harmonisasi Peraturan Perpajakan, tarif umum Pajak Pertambahan Nilai (PPN) yang berlaku saat ini adalah...",
    "options": [
      "10%",
      "11%",
      "12%",
      "15%"
    ],
    "answer": 1,
    "explanation": "Tarif PPN adalah 11% (berlaku sejak 1 April 2022) sesuai ketentuan UU HPP."
  },
  {
    "tm": 13,
    "topic": "Mekanisme Pengkreditan Pajak Masukan PPN",
    "difficulty": "medium",
    "q": "Pengusaha Kena Pajak (PKP) pada masa pajak Mei memiliki Pajak Keluaran Rp 85.000.000 dan Pajak Masukan yang dapat dikreditkan Rp 95.000.000. Posisi PPN pada SPT Masa Mei adalah...",
    "options": [
      "PPN Kurang Bayar Rp 10.000.000",
      "PPN Lebih Bayar Rp 10.000.000 (dapat dikompensasikan atau direstitusi)",
      "PPN Nihil",
      "Dikenakan sanksi denda administrasi keterlambatan"
    ],
    "answer": 1,
    "explanation": "Pajak Masukan (95 jt) > Pajak Keluaran (85 jt) = Lebih Bayar Rp 10.000.000 yang dapat dikompensasi ke masa pajak berikutnya atau direstitusi."
  },
  {
    "tm": 14,
    "topic": "Pemungut PPN (WAPU)",
    "difficulty": "medium",
    "q": "Ketika PKP rekanan menjual alat kantor senilai Rp 50.000.000 (belum PPN) kepada Dinas Pendidikan (Instansi Pemerintah WAPU), maka kas riil yang diterima rekanan dari dinas adalah...",
    "options": [
      "Rp 55.500.000 (termasuk PPN 11%)",
      "Rp 50.000.000 (karena PPN 11% dipungut dan disetor langsung oleh bendahara instansi)",
      "Rp 44.500.000",
      "Rp 49.000.000"
    ],
    "answer": 1,
    "explanation": "Bendahara Instansi Pemerintah selaku WAPU memungut langsung PPN Rp 5,5 juta dan menyetorkannya ke kas negara, sehingga rekanan menerima pembayaran neto DPP Rp 50.000.000."
  }
];

export const PJK202_QUIZ: QuizQuestion[] = [...PJK202_QUIZ_UTS, ...PJK202_QUIZ_UAS];
