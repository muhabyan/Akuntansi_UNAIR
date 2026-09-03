// src/data/quizzes/akm202.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Akuntansi Manajemen (AKM202)
import type { QuizQuestion } from '../../types';

export const AKM202_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "Konsep Dasar Akuntansi Manajemen",
    "difficulty": "medium",
    "q": "Manakah karakteristik yang membedakan Akuntansi Manajemen dari Akuntansi Keuangan?",
    "options": [
      "Akuntansi manajemen berorientasi pada masa lalu untuk kepatuhan SAK",
      "Akuntansi manajemen fokus pada kebutuhan internal manajemen dan tidak terikat standar baku akuntansi eksternal",
      "Akuntansi manajemen wajib diaudit oleh Kantor Akuntan Publik independen",
      "Akuntansi manajemen menyajikan informasi ringkas untuk seluruh entitas tanpa pelaporan segmen"
    ],
    "answer": 1,
    "explanation": "Akuntansi manajemen dirancang untuk pengambilan keputusan internal, berorientasi masa depan, dan sangat fleksibel tanpa kewajiban tunduk pada SAK/PABU."
  },
  {
    "tm": 2,
    "topic": "Perilaku Biaya & CVP",
    "difficulty": "medium",
    "q": "PT Surya menjual produk seharga Rp 50.000 per unit dengan biaya variabel Rp 30.000 per unit. Biaya tetap tahunan adalah Rp 400.000.000. Berapakah volume penjualan (dalam unit) untuk mencapai titik impas (BEP)?",
    "options": [
      "8.000 unit",
      "13.333 unit",
      "20.000 unit",
      "25.000 unit"
    ],
    "answer": 2,
    "explanation": "CM per unit = Rp 50.000 - Rp 30.000 = Rp 20.000. BEP Unit = Biaya Tetap / CM per unit = Rp 400.000.000 / Rp 20.000 = 20.000 unit."
  },
  {
    "tm": 2,
    "topic": "Perilaku Biaya & CVP",
    "difficulty": "medium",
    "q": "Jika perusahaan memiliki Degree of Operating Leverage (DOL) sebesar 4 pada tingkat penjualan saat ini, maka kenaikan penjualan sebesar 10% akan mengakibatkan kenaikan laba bersih operasi sebesar...",
    "options": [
      "4%",
      "14%",
      "25%",
      "40%"
    ],
    "answer": 3,
    "explanation": "% Kenaikan Laba Bersih = DOL × % Kenaikan Penjualan = 4 × 10% = 40%."
  },
  {
    "tm": 3,
    "topic": "Variable Costing vs Absorption Costing",
    "difficulty": "medium",
    "q": "Pada tahun di mana jumlah unit yang diproduksi LEBIH BESAR daripada jumlah unit yang terjual, maka...",
    "options": [
      "Laba bersih Absorption Costing lebih tinggi daripada Variable Costing",
      "Laba bersih Variable Costing lebih tinggi daripada Absorption Costing",
      "Laba bersih kedua metode akan tepat sama",
      "Terjadi selisih varians volume yang tidak dapat direkonsiliasi"
    ],
    "answer": 0,
    "explanation": "Ketika produksi > penjualan, sebagian BOP tetap tertunda di dalam persediaan akhir pada metode absorption costing, sehingga HPP lebih rendah dan laba bersih lebih tinggi."
  },
  {
    "tm": 4,
    "topic": "Activity-Based Management",
    "difficulty": "medium",
    "q": "Dalam hierarki biaya ABC, aktivitas perancangan ulang cetakan produk (product redesign) dan perolehan sertifikasi produk termasuk dalam kelompok...",
    "options": [
      "Unit-level activities",
      "Batch-level activities",
      "Product-level activities",
      "Facility-sustaining activities"
    ],
    "answer": 2,
    "explanation": "Aktivitas yang mendukung lini produk tertentu tanpa tergantung pada volume unit atau batch diklasifikasikan sebagai product-level activities."
  },
  {
    "tm": 5,
    "topic": "Master Budgeting",
    "difficulty": "medium",
    "q": "PT Sentosa memproyeksikan penjualan kuartal I sebanyak 10.000 unit. Kebijakan persediaan akhir barang jadi ditetapkan sebesar 20% dari penjualan kuartal berikutnya (kuartal II: 15.000 unit). Persediaan awal adalah 2.000 unit. Berapakah unit yang harus diproduksi?",
    "options": [
      "9.000 unit",
      "11.000 unit",
      "13.000 unit",
      "15.000 unit"
    ],
    "answer": 1,
    "explanation": "Unit Diproduksi = Target Penjualan (10.000) + Persediaan Akhir (20% × 15.000 = 3.000) - Persediaan Awal (2.000) = 11.000 unit."
  },
  {
    "tm": 6,
    "topic": "Biaya Standar & Analisis Varians",
    "difficulty": "medium",
    "q": "Untuk memproduksi 1 unit produk dibutuhkan standar bahan 2 kg @ Rp 10.000. Selama periode berjalan, dibeli dan digunakan 2.200 kg bahan seharga Rp 20.900.000 untuk menghasilkan 1.000 unit produk. Materials Price Variance (MPV) adalah...",
    "options": [
      "Rp 1.100.000 Favorable",
      "Rp 1.100.000 Unfavorable",
      "Rp 2.000.000 Favorable",
      "Rp 900.000 Unfavorable"
    ],
    "answer": 0,
    "explanation": "Harga aktual per kg = Rp 20.900.000 / 2.200 = Rp 9.500. MPV = AQ × (AP - SP) = 2.200 × (Rp 9.500 - Rp 10.000) = Rp 1.100.000 Favorable (karena harga beli aktual lebih murah)."
  },
  {
    "tm": 7,
    "topic": "Review Pra-UTS Akmen",
    "difficulty": "medium",
    "q": "Sebuah perusahaan memiliki beberapa segmen bisnis. Manakah biaya yang TIDAK boleh dialokasikan ke segmen individual saat menghitung Segment Margin?",
    "options": [
      "Biaya iklan khusus divisi yang dapat ditelusuri",
      "Gaji manajer operasional cabang",
      "Gaji Direktur Utama korporat dan biaya pemeliharaan kantor pusat",
      "Penyusutan peralatan khusus lini produk"
    ],
    "answer": 2,
    "explanation": "Common fixed costs (seperti beban kantor pusat korporat) tidak boleh dialokasikan ke segmen individu karena tidak hilang jika segmen ditutup."
  }
];

export const AKM202_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Desentralisasi & Kinerja Manajerial",
    "difficulty": "medium",
    "q": "Divisi Timur memiliki laba operasi Rp 120.000.000 dan rata-rata aset operasi Rp 600.000.000. Jika tingkat pengembalian minimum yang disyaratkan perusahaan adalah 15%, berapakah Residual Income (RI) divisi tersebut?",
    "options": [
      "Rp 12.000.000",
      "Rp 30.000.000",
      "Rp 90.000.000",
      "Rp 20.000.000"
    ],
    "answer": 1,
    "explanation": "Return minimum = 15% × Rp 600.000.000 = Rp 90.000.000. RI = Laba Operasi (Rp 120 jt) - Return Minimum (Rp 90 jt) = Rp 30.000.000."
  },
  {
    "tm": 9,
    "topic": "Transfer Pricing Antar Divisi",
    "difficulty": "medium",
    "q": "Divisi A memproduksi suku cadang dengan biaya variabel Rp 18.000 dan biaya tetap Rp 7.000. Harga pasar luar Rp 30.000. Jika Divisi A memiliki KAPASITAS MENGANGGUR, berapakah batas bawah harga transfer yang dapat diterima Divisi A?",
    "options": [
      "Rp 18.000",
      "Rp 25.000",
      "Rp 30.000",
      "Rp 12.000"
    ],
    "answer": 0,
    "explanation": "Saat ada kapasitas menganggur, Opportunity Cost = 0. Batas bawah harga transfer = Biaya Variabel per unit = Rp 18.000."
  },
  {
    "tm": 10,
    "topic": "Analisis Biaya Relevan & Keputusan Taktis",
    "difficulty": "medium",
    "q": "PT Logam menerima tawaran pesanan khusus 2.000 unit @ Rp 45.000. Harga jual normal Rp 70.000 dengan biaya variabel Rp 35.000 dan alokasi biaya tetap Rp 20.000. Perusahaan memiliki kapasitas menganggur. Apakah pesanan harus diterima?",
    "options": [
      "Ditolak, karena harga tawaran Rp 45.000 lebih rendah dari total biaya Rp 55.000",
      "Diterima, karena memberikan tambahan laba kontribusi sebesar Rp 20.000.000",
      "Ditolak, karena merusak reputasi harga normal perusahaan",
      "Diterima, karena seluruh biaya tetap akan terserap habis"
    ],
    "answer": 1,
    "explanation": "Tambahan pendapatan = Rp 45.000; Tambahan biaya variabel = Rp 35.000. Tambahan margin kontribusi = Rp 10.000 per unit × 2.000 unit = Rp 20.000.000 (biaya tetap tidak berubah)."
  },
  {
    "tm": 11,
    "topic": "Penetapan Harga & Target Costing",
    "difficulty": "medium",
    "q": "Manakah urutan proses yang benar dalam pendekatan Target Costing?",
    "options": [
      "Desain produk → Hitung biaya manufaktur → Tambahkan markup laba → Tentukan harga jual",
      "Riset pasar tentukan harga jual kompetitif → Tentukan target laba → Tetapkan target cost → Desain produk memenuhi target cost",
      "Tentukan target laba → Desain produk → Hitung alokasi biaya bersama → Rilis produk",
      "Analisis biaya historis → Tambahkan inflasi → Tetapkan harga penawaran"
    ],
    "answer": 1,
    "explanation": "Target Costing berorientasi pasar: Target Cost = Antisipasi Harga Pasar - Target Laba yang Diinginkan."
  },
  {
    "tm": 12,
    "topic": "Investasi Modal (Capital Budgeting)",
    "difficulty": "medium",
    "q": "Sebuah proyek memerlukan investasi awal Rp 200.000.000 dan menghasilkan arus kas masuk tahunan Rp 60.000.000 selama 5 tahun. Jika biaya modal 10% (Faktor Anuitas PV 5 tahun, 10% = 3,791), berapakah Net Present Value (NPV)?",
    "options": [
      "Rp 27.460.000",
      "Rp 30.000.000",
      "Rp (15.000.000)",
      "Rp 100.000.000"
    ],
    "answer": 0,
    "explanation": "PV Arus Kas = Rp 60.000.000 × 3,791 = Rp 227.460.000. NPV = Rp 227.460.000 - Rp 200.000.000 = Rp 27.460.000 (NPV positif, proyek layak diterima)."
  },
  {
    "tm": 13,
    "topic": "Lean Operations & Biaya Kualitas",
    "difficulty": "medium",
    "q": "Biaya penarikan produk cacat dari pasar (product recall) dan biaya penyelesaian tuntutan hukum pelanggan termasuk dalam kategori biaya kualitas...",
    "options": [
      "Prevention costs (biaya pencegahan)",
      "Appraisal costs (biaya penilaian)",
      "Internal failure costs (kegagalan internal)",
      "External failure costs (kegagalan eksternal)"
    ],
    "answer": 3,
    "explanation": "External failure costs adalah biaya kualitas yang timbul setelah produk cacat sampai ke tangan pelanggan (klaim garansi, recall, penanganan komplain)."
  },
  {
    "tm": 14,
    "topic": "Environmental Management Accounting",
    "difficulty": "medium",
    "q": "Manakah dari pos berikut yang merupakan fokus utama dari Physical Environmental Management Accounting (P-EMA)?",
    "options": [
      "Denda moneter akibat pelanggaran baku mutu limbah cair",
      "Aliran fisik material: konsumsi kilowatt jam listrik, volume kubik air, dan metrik ton limbah padat",
      "Pendapatan penjualan atas produk daur ulang",
      "Penyusutan instalasi pengolahan air limbah (IPAL)"
    ],
    "answer": 1,
    "explanation": "P-EMA melacak aliran fisik energi, air, bahan baku, emisi, dan limbah dalam unit non-moneter."
  }
];

export const AKM202_QUIZ: QuizQuestion[] = [...AKM202_QUIZ_UTS, ...AKM202_QUIZ_UAS];
