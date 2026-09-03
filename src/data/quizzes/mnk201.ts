// src/data/quizzes/mnk201.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Manajemen Keuangan (MNK201)
import type { QuizQuestion } from '../../types';

export const MNK201_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "Tinjauan Manajemen Keuangan & Agency",
    "difficulty": "medium",
    "q": "Tujuan normatif utama manajemen keuangan korporasi modern adalah...",
    "options": [
      "Memaksimalkan total aset neraca",
      "Memaksimalkan laba akuntansi tahun berjalan",
      "Memaksimalkan kekayaan pemegang saham melalui peningkatan nilai intrinsik perusahaan",
      "Meminimalkan risiko kebangkrutan tanpa berutang"
    ],
    "answer": 2,
    "explanation": "Tujuan fundamental manajemen keuangan adalah memaksimalkan nilai perusahaan dan kekayaan pemegang saham jangka panjang."
  },
  {
    "tm": 2,
    "topic": "Analisis Laporan Keuangan & DuPont",
    "difficulty": "medium",
    "q": "Perusahaan memiliki Profit Margin 8%, Total Asset Turnover 1,5 kali, dan Equity Multiplier 2,0 kali. Berapakah Return on Equity (ROE) perusahaan menurut sistem DuPont?",
    "options": [
      "12%",
      "16%",
      "24%",
      "30%"
    ],
    "answer": 2,
    "explanation": "ROE = Profit Margin × Total Asset Turnover × Equity Multiplier = 8% × 1,5 × 2,0 = 24%."
  },
  {
    "tm": 3,
    "topic": "Nilai Waktu Uang (TVM)",
    "difficulty": "medium",
    "q": "Berapakah nilai sekarang (Present Value) dari penerimaan kas sebesar Rp 133.100.000 yang akan diterima 3 tahun mendatang jika tingkat diskonto majemuk adalah 10% per tahun?",
    "options": [
      "Rp 100.000.000",
      "Rp 110.000.000",
      "Rp 90.000.000",
      "Rp 120.000.000"
    ],
    "answer": 0,
    "explanation": "PV = FV / (1 + r)^n = Rp 133.100.000 / (1,10)^3 = Rp 133.100.000 / 1,331 = Rp 100.000.000."
  },
  {
    "tm": 4,
    "topic": "Model CAPM & Risiko",
    "difficulty": "medium",
    "q": "Suku bunga bebas risiko (risk-free rate) adalah 6% dan return portofolio pasar yang diharapkan adalah 14%. Jika saham PT Maju memiliki koefisien Beta (β) = 1,5, berapakah return yang disyaratkan (r) saham tersebut menurut CAPM?",
    "options": [
      "15%",
      "18%",
      "21%",
      "27%"
    ],
    "answer": 1,
    "explanation": "r = r_RF + β × (r_M - r_RF) = 6% + 1,5 × (14% - 6%) = 6% + 1,5 × 8% = 18%."
  },
  {
    "tm": 5,
    "topic": "Biaya Modal & WACC",
    "difficulty": "medium",
    "q": "PT Andalas memiliki struktur modal target: 40% Utang dan 60% Ekuitas. Biaya utang sebelum pajak adalah 10% dengan tarif pajak badan 20%. Biaya ekuitas adalah 15%. Berapakah WACC perusahaan?",
    "options": [
      "12,2%",
      "13,0%",
      "14,2%",
      "11,5%"
    ],
    "answer": 0,
    "explanation": "Biaya utang setelah pajak = 10% × (1 - 0,20) = 8%. WACC = (0,40 × 8%) + (0,60 × 15%) = 3,2% + 9,0% = 12,2%."
  },
  {
    "tm": 6,
    "topic": "Penganggaran Modal (NPV vs IRR)",
    "difficulty": "medium",
    "q": "Jika dua proyek investasi bersifat mutually exclusive (saling meniadakan), dan terjadi konflik peringkat di mana Proyek A memiliki NPV lebih tinggi namun Proyek B memiliki IRR lebih tinggi, proyek manakah yang harus dipilih?",
    "options": [
      "Pilih Proyek B, karena persentase return IRR lebih tinggi",
      "Pilih Proyek A, karena metode NPV memaksimumkan tambahan kekayaan moneter riil pemegang saham",
      "Tolak kedua proyek karena terjadi inkonsistensi matematis",
      "Pilih proyek yang memiliki payback period paling singkat"
    ],
    "answer": 1,
    "explanation": "Dalam konflik mutually exclusive, kriteria NPV selalu menjadi pedoman utama karena asumsi tingkat reinvestasi NPV pada biaya modal jauh lebih realistis."
  },
  {
    "tm": 7,
    "topic": "Arus Kas Inkremental Proyek",
    "difficulty": "medium",
    "q": "Manakah dari pos berikut yang HARUS diperhitungkan dalam analisis arus kas penganggaran modal?",
    "options": [
      "Biaya riset konsultan masa lalu yang telah lunas (sunk cost)",
      "Biaya kanibalisasi penjualan produk lama akibat peluncuran produk baru",
      "Alokasi biaya overhead kantor pusat yang tidak berubah",
      "Beban bunga utang pendanaan proyek (sudah ada dalam diskonto WACC)"
    ],
    "answer": 1,
    "explanation": "Erosi atau kanibalisasi penjualan produk lama akibat produk baru merupakan arus kas keluar inkremental yang wajib diperhitungkan."
  }
];

export const MNK201_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Struktur Modal Modigliani-Miller",
    "difficulty": "medium",
    "q": "Menurut Teori Modigliani-Miller dengan Pajak Perusahaan (1963), nilai perusahaan yang memiliki utang (levered firm) lebih tinggi dibanding perusahaan tanpa utang sebesar...",
    "options": [
      "Total nilai nominal utang itu sendiri",
      "Nilai Sekarang dari Penghematan Pajak Bunga Utang (PV of Tax Shield = T_c × D)",
      "Selisih biaya modal ekuitas dengan biaya modal utang",
      "Biaya kebangkrutan yang dapat dihindari"
    ],
    "answer": 1,
    "explanation": "Manfaat perisai pajak bunga (interest tax shield) menaikkan nilai perusahaan berutang sebesar tarif pajak dikalikan jumlah utang (T_c × D)."
  },
  {
    "tm": 9,
    "topic": "Trade-off Theory Struktur Modal",
    "difficulty": "medium",
    "q": "Trade-off Theory menyatakan bahwa struktur modal optimal korporasi tercapai ketika...",
    "options": [
      "Perusahaan menggunakan 100% utang",
      "Manfaat marjinal dari tax shield bunga tepat seimbang dengan nilai sekarang biaya kesulitan keuangan (financial distress costs)",
      "Perusahaan mendanai seluruh investasinya dari laba ditahan",
      "Biaya ekuitas tepat sama dengan biaya utang"
    ],
    "answer": 1,
    "explanation": "Keseimbangan optimal antara penghematan pajak utang dengan risiko biaya kebangkrutan menghasilkan titik WACC terendah dan nilai perusahaan tertinggi."
  },
  {
    "tm": 10,
    "topic": "Kebijakan Dividen & Share Repurchase",
    "difficulty": "medium",
    "q": "Teori dividen yang menyatakan bahwa investor memandang dividen kas saat ini lebih pasti dan bernilai tinggi dibandingkan potensi capital gain masa depan yang berisiko adalah...",
    "options": [
      "Dividend Irrelevance Theory (MM)",
      "Bird-in-the-Hand Theory (Gordon & Lintner)",
      "Tax Preference Theory",
      "Pecking Order Theory"
    ],
    "answer": 1,
    "explanation": "Bird-in-the-hand theory berpendapat bahwa kepastian penerimaan dividen tunai saat ini lebih disukai investor daripada ketidakpastian apresiasi harga saham masa depan."
  },
  {
    "tm": 11,
    "topic": "Manajemen Kas Model BAT",
    "difficulty": "medium",
    "q": "Model Baumol-Allais-Tobin (BAT) digunakan dalam manajemen kas perusahaan untuk menentukan...",
    "options": [
      "Plafon batas atas saldo kredit perbankan",
      "Saldo kas optimal yang meminimalkan total biaya transaksi dan biaya peluang penyimpanan kas",
      "Tingkat dividen kas yang harus dibagikan setiap kuartal",
      "Jadwal penagihan piutang pelanggan"
    ],
    "answer": 1,
    "explanation": "Model BAT mengadopsi formula EOQ untuk menyeimbangkan biaya transfer sekuritas ke kas dengan biaya bunga yang hilang."
  },
  {
    "tm": 12,
    "topic": "Manajemen Persediaan & Model EOQ",
    "difficulty": "medium",
    "q": "Permintaan tahunan bahan baku adalah 10.000 unit, biaya pemesanan Rp 50.000 per pesanan, dan biaya penyimpanan Rp 400 per unit per tahun. Berapakah Economic Order Quantity (EOQ)?",
    "options": [
      "1.250 unit",
      "1.581 unit",
      "2.000 unit",
      "2.500 unit"
    ],
    "answer": 1,
    "explanation": "EOQ = √[(2 × D × S) / H] = √[(2 × 10.000 × 50.000) / 400] = √[2.500.000] = 1.581 unit (dibulatkan)."
  },
  {
    "tm": 13,
    "topic": "Keuangan Internasional & Risiko Valas",
    "difficulty": "medium",
    "q": "Eksposur yang timbul ketika laporan keuangan anak perusahaan di luar negeri dikonversi ke mata uang pelaporan induk perusahaan untuk kepentingan konsolidasi disebut...",
    "options": [
      "Transaction Exposure",
      "Translation (Accounting) Exposure",
      "Operating (Economic) Exposure",
      "Sovereign Political Exposure"
    ],
    "answer": 1,
    "explanation": "Translation exposure timbul dari fluktuasi kurs saat mengonsolidasikan akun aset dan liabilitas anak cabang luar negeri."
  },
  {
    "tm": 14,
    "topic": "Prediksi Kebangkrutan Altman Z-Score",
    "difficulty": "medium",
    "q": "Model prediksi kesulitan keuangan (financial distress) Altman Z-Score untuk perusahaan manufaktur mengombinasikan rasio-rasio berikut, KECUALI...",
    "options": [
      "Modal Kerja terhadap Total Aset",
      "Saldo Laba terhadap Total Aset",
      "Nilai Pasar Ekuitas terhadap Nilai Buku Total Utang",
      "Belanja Modal terhadap Nilai Buku Persediaan"
    ],
    "answer": 3,
    "explanation": "Altman Z-Score menggunakan Working Capital/TA, Retained Earnings/TA, EBIT/TA, Market Value Equity/Book Value Debt, dan Sales/TA."
  }
];

export const MNK201_QUIZ: QuizQuestion[] = [...MNK201_QUIZ_UTS, ...MNK201_QUIZ_UAS];
