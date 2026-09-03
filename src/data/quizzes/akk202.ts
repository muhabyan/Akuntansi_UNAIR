// src/data/quizzes/akk202.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Akuntansi Keuangan Menengah II (AKK202)
import type { QuizQuestion } from '../../types';

export const AKK202_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "Aset Tetap & Properti Investasi",
    "difficulty": "medium",
    "q": "Menurut PSAK 16, manakah dari pos berikut yang TIDAK boleh dimasukkan sebagai komponen biaya perolehan mesin pabrik?",
    "options": [
      "Biaya pengiriman dan penanganan awal mesin",
      "Biaya instalasi pondasi dan perakitan teknis mesin",
      "Biaya pelatihan operator mesin dan pemotongan pita peresmian",
      "Estimasi biaya pembongkaran mesin pada akhir masa manfaat"
    ],
    "answer": 2,
    "explanation": "Biaya pembukaan fasilitas baru, biaya pengenalan produk baru (iklan), dan biaya pelatihan staf BUKAN komponen harga perolehan aset tetap."
  },
  {
    "tm": 1,
    "topic": "Aset Tetap & Properti Investasi",
    "difficulty": "medium",
    "q": "PT Sejahtera membeli tanah dan bangunan tua seharga Rp 1.000.000.000 dengan niat langsung merobohkan gedung lama dan membangun gedung kantor baru. Biaya perobohan gedung lama sebesar Rp 80.000.000 dan hasil penjualan sisa material Rp 15.000.000. Berapakah jumlah yang dikapitalisasi ke akun Tanah?",
    "options": [
      "Rp 1.000.000.000",
      "Rp 1.065.000.000",
      "Rp 1.080.000.000",
      "Rp 1.095.000.000"
    ],
    "answer": 1,
    "explanation": "Biaya bersih pembongkaran gedung lama (Rp 80 jt - Rp 15 jt = Rp 65 jt) dikapitalisasi ke akun Tanah: Rp 1.000 jt + Rp 65 jt = Rp 1.065.000.000."
  },
  {
    "tm": 2,
    "topic": "Kos Setelah Akuisisi & Pelepasan Aset",
    "difficulty": "medium",
    "q": "Pengeluaran sebesar Rp 150.000.000 untuk merombak total mesin produksi yang berhasil memperpanjang masa manfaat mesin dari 3 tahun menjadi 7 tahun harus diperlakukan sebagai...",
    "options": [
      "Beban pemeliharaan rutin pada Laporan Laba Rugi",
      "Capital expenditure yang menambah nilai tercatat mesin",
      "Pengurang saldo akumulasi penyusutan secara proporsional",
      "Beban tangguhan yang diamortisasi selama 4 tahun"
    ],
    "answer": 1,
    "explanation": "Pengeluaran yang memperpanjang masa manfaat atau meningkatkan kapasitas/efisiensi aset dikapitalisasi sebagai pengeluaran modal (capital expenditure)."
  },
  {
    "tm": 3,
    "topic": "Penyusutan & Deplesi Sumber Daya Alam",
    "difficulty": "medium",
    "q": "Peralatan dibeli 1 Januari 2024 seharga Rp 120.000.000 dengan estimasi umur 5 tahun dan nilai sisa Rp 20.000.000. Menggunakan metode saldo menurun ganda (double declining balance), berapakah beban penyusutan tahun 2024?",
    "options": [
      "Rp 20.000.000",
      "Rp 24.000.000",
      "Rp 40.000.000",
      "Rp 48.000.000"
    ],
    "answer": 3,
    "explanation": "Tarif DDB = (100% / 5) × 2 = 40%. Beban penyusutan tahun pertama = 40% × Rp 120.000.000 = Rp 48.000.000 (nilai sisa tidak dikurangkan pada awal kalkulasi DDB)."
  },
  {
    "tm": 4,
    "topic": "Penurunan Nilai Aset (PSAK 48)",
    "difficulty": "medium",
    "q": "Sebuah unit mesin memiliki nilai tercatat Rp 500.000.000. Nilai wajar dikurangi biaya pelepasan adalah Rp 420.000.000 dan nilai pakainya (value in use) adalah Rp 450.000.000. Berapakah rugi penurunan nilai yang wajib diakui?",
    "options": [
      "Rp 0 (tidak ada penurunan nilai)",
      "Rp 50.000.000",
      "Rp 80.000.000",
      "Rp 30.000.000"
    ],
    "answer": 1,
    "explanation": "Recoverable amount adalah yang lebih tinggi antara FVLCOD (420 jt) dan Value in Use (450 jt) = Rp 450 jt. Rugi penurunan nilai = Nilai tercatat (500 jt) - Recoverable amount (450 jt) = Rp 50.000.000."
  },
  {
    "tm": 5,
    "topic": "Aset Tidak Berwujud (PSAK 19)",
    "difficulty": "medium",
    "q": "Manakah pernyataan yang paling tepat mengenai perlakuan akuntansi biaya riset dan pengembangan (R&D)?",
    "options": [
      "Biaya riset dan pengembangan seluruhnya dikapitalisasi sebagai aset tidak berwujud",
      "Biaya riset seluruhnya dibebankan seketika; biaya pengembangan dikapitalisasi jika memenuhi kriteria kelayakan teknis dan komersial",
      "Biaya riset dan pengembangan seluruhnya dibebankan langsung pada saat terjadinya",
      "Biaya riset dikapitalisasi; biaya pengembangan dibebankan langsung"
    ],
    "answer": 1,
    "explanation": "Sesuai PSAK 19, biaya riset selalu diakui sebagai beban pada periode terjadinya. Biaya pengembangan dikapitalisasi HANYA jika memenuhi 6 kriteria kelayakan (PIRATE)."
  },
  {
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek",
    "difficulty": "medium",
    "q": "Pada tanggal 1 November 2024, PT Prima menerbitkan wesel bayar tanpa bunga 6 bulan bernilai nominal Rp 100.000.000 kepada bank dengan tingkat diskonto pasar 12%. Kas bersih yang diterima PT Prima pada 1 November adalah...",
    "options": [
      "Rp 100.000.000",
      "Rp 94.000.000",
      "Rp 88.000.000",
      "Rp 96.000.000"
    ],
    "answer": 1,
    "explanation": "Diskonto wesel = Rp 100.000.000 × 12% × (6/12) = Rp 6.000.000. Kas yang diterima = Rp 100 jt - Rp 6 jt = Rp 94.000.000."
  },
  {
    "tm": 7,
    "topic": "Provisi & Kontinjensi (PSAK 57)",
    "difficulty": "medium",
    "q": "PT Garansi menjual produk elektronik dengan estimasi klaim garansi sebesar 3% dari penjualan. Pada tahun 2024, penjualan tercatat Rp 2.000.000.000 dan klaim perbaikan riil yang telah dibayarkan Rp 40.000.000. Berapakah saldo akhir liabilitas garansi jika saldo awal nol?",
    "options": [
      "Rp 0",
      "Rp 20.000.000",
      "Rp 40.000.000",
      "Rp 60.000.000"
    ],
    "answer": 1,
    "explanation": "Beban garansi diakui = 3% × Rp 2.000.000.000 = Rp 60.000.000. Saldo liabilitas garansi = Rp 60 jt - pembayaran riil Rp 40 jt = Rp 20.000.000."
  }
];

export const AKK202_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Liabilitas Jangka Panjang & Obligasi",
    "difficulty": "medium",
    "q": "Jika tingkat suku bunga kupon obligasi (stated rate) adalah 8% per tahun, sedangkan suku bunga efektif pasar adalah 10% per tahun, maka obligasi tersebut akan diterbitkan pada...",
    "options": [
      "Nilai nominal (par value)",
      "Nilai diskonto (discount)",
      "Nilai premium",
      "Nilai jatuh tempo tanpa amortisasi"
    ],
    "answer": 1,
    "explanation": "Jika stated rate (8%) < market rate (10%), investor menuntut imbal hasil lebih tinggi sehingga obligasi dijual di bawah nilai nominal (diskonto)."
  },
  {
    "tm": 9,
    "topic": "Amortisasi Bunga Efektif Obligasi",
    "difficulty": "medium",
    "q": "Obligasi bernilai nominal Rp 1.000.000.000 diterbitkan pada harga Rp 950.000.000. Kupon kontraktual 8% dibayar tahunan. Tingkat bunga efektif pasar 9%. Berapakah beban bunga pada tahun pertama?",
    "options": [
      "Rp 80.000.000",
      "Rp 85.500.000",
      "Rp 90.000.000",
      "Rp 95.000.000"
    ],
    "answer": 1,
    "explanation": "Beban bunga = Nilai tercatat awal (Rp 950.000.000) × suku bunga efektif (9%) = Rp 85.500.000. Amortisasi diskonto = Rp 85.5 jt - Rp 80 jt = Rp 5.500.000."
  },
  {
    "tm": 10,
    "topic": "Ekuitas & Saham Treasuri",
    "difficulty": "medium",
    "q": "PT Mandiri membeli kembali 10.000 lembar saham biasanya sendiri (nominal Rp 1.000) di pasar reguler seharga Rp 2.500 per lembar menggunakan metode biaya (cost method). Jurnal yang benar adalah...",
    "options": [
      "Debit: Modal Saham Biasa Rp 10 jt, Agio Saham Rp 15 jt; Kredit: Kas Rp 25 jt",
      "Debit: Saham Treasuri Rp 25.000.000; Kredit: Kas Rp 25.000.000",
      "Debit: Investasi Saham Rp 25.000.000; Kredit: Kas Rp 25.000.000",
      "Debit: Saldo Laba Rp 25.000.000; Kredit: Kas Rp 25.000.000"
    ],
    "answer": 1,
    "explanation": "Dalam cost method, pembelian saham treasuri dicatat sebesar kas yang dibayarkan ke akun Saham Treasuri (kontra ekuitas): Debit Saham Treasuri Rp 25 jt; Kredit Kas Rp 25 jt."
  },
  {
    "tm": 11,
    "topic": "Kebijakan Dividen & Pemecahan Saham",
    "difficulty": "medium",
    "q": "Pada tanggal pengumuman dividen kas (declaration date), dampak transaksi terhadap posisi keuangan perusahaan adalah...",
    "options": [
      "Total aset berkurang dan total ekuitas berkurang",
      "Total liabilitas bertambah dan total ekuitas berkurang",
      "Total aset berkurang dan total liabilitas berkurang",
      "Tidak ada perubahan pada aset, liabilitas, maupun ekuitas"
    ],
    "answer": 1,
    "explanation": "Tanggal pengumuman mendebit Saldo Laba (menurunkan ekuitas) dan mengkredit Utang Dividen (menambah liabilitas). Kas baru berkurang pada tanggal pembayaran."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif & Opsi Saham",
    "difficulty": "medium",
    "q": "Sesuai PSAK 71 dan PSAK 56, instrumen obligasi konversi yang diterbitkan oleh perusahaan harus dicatat menggunakan metode akuntansi...",
    "options": [
      "Seluruhnya diakui sebagai Liabilitas Jangka Panjang",
      "Seluruhnya diakui sebagai Ekuitas Saham Biasa",
      "Pemisahan komponen liabilitas dan ekuitas (split accounting)",
      "Dicatat sebagai derivatif pada nilai wajar melalui laba rugi"
    ],
    "answer": 2,
    "explanation": "Penerbit obligasi konversi wajib memisahkan nilai komponen liabilitas (PV arus kas kontraktual) dari komponen ekuitas (opsi konversi residual)."
  },
  {
    "tm": 13,
    "topic": "Laba Per Saham (EPS - PSAK 56)",
    "difficulty": "medium",
    "q": "PT Berlian memiliki laba bersih Rp 500.000.000. Dividen saham preferen kumulatif yang menjadi hak tahun berjalan adalah Rp 50.000.000. Rata-rata tertimbang saham biasa beredar adalah 100.000 lembar. Basic EPS adalah...",
    "options": [
      "Rp 5.000 per lembar",
      "Rp 4.500 per lembar",
      "Rp 5.500 per lembar",
      "Rp 4.000 per lembar"
    ],
    "answer": 1,
    "explanation": "Basic EPS = (Laba Bersih - Dividen Saham Preferen) / WANOS = (Rp 500 jt - Rp 50 jt) / 100.000 lembar = Rp 4.500 per lembar."
  },
  {
    "tm": 14,
    "topic": "Investasi Efek Utang & Ekuitas (PSAK 71)",
    "difficulty": "medium",
    "q": "Investasi pada saham entitas lain sebesar 30% hak suara yang memberikan pengaruh signifikan harus dicatat menggunakan...",
    "options": [
      "Metode Nilai Wajar melalui Laba Rugi (FVTPL)",
      "Metode Biaya Perolehan Diamortisasi (Amortised Cost)",
      "Metode Ekuitas (Equity Method - PSAK 15)",
      "Konsolidasi penuh sebagai entitas anak"
    ],
    "answer": 2,
    "explanation": "Kepemilikan saham antara 20% hingga 50% menimbulkan pengaruh signifikan (significant influence) dan wajib menggunakan Metode Ekuitas (PSAK 15)."
  }
];

export const AKK202_QUIZ: QuizQuestion[] = [...AKK202_QUIZ_UTS, ...AKK202_QUIZ_UAS];
