// =============================================================
// src/data/quizzes/akk202.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Akuntansi Keuangan Menengah II (AKK202)
// Berdasarkan Kieso Intermediate Accounting IFRS 5e & PSAK/ISAK IAI
// 70 Soal Lengkap: 35 Soal Pra-UTS (TM 1-7) & 35 Soal Pra-UAS (TM 8-14)
// =============================================================
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
    "explanation": "Biaya pembukaan fasilitas baru, biaya pengenalan produk baru (iklan), dan biaya pelatihan staf BUKAN komponen harga perolehan aset tetap melainkan beban operasional berjalan."
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
    "tm": 1,
    "topic": "Kapitalisasi Bunga Pinjaman (PSAK 26)",
    "difficulty": "advanced",
    "q": "Selama masa konstruksi gedung baru yang memenuhi syarat kualifikasi aset, pengeluaran akumulasian rata-rata tertimbang (WAAE) adalah Rp 500.000.000. Pinjaman khusus konstruksi 10% adalah Rp 400.000.000, dan pinjaman umum berbobot bunga 12% adalah Rp 300.000.000. Berapakah Bunga yang Dapat Dihindari (Avoidable Interest)?",
    "options": [
      "Rp 40.000.000",
      "Rp 50.000.000",
      "Rp 52.000.000",
      "Rp 60.000.000"
    ],
    "answer": 2,
    "explanation": "Porsi pinjaman khusus = Rp 400 jt × 10% = Rp 40.000.000. Sisa WAAE (Rp 500 jt - Rp 400 jt = Rp 100 jt) ditutup pinjaman umum = Rp 100 jt × 12% = Rp 12.000.000. Total Avoidable Interest = Rp 40 jt + Rp 12 jt = Rp 52.000.000."
  },
  {
    "tm": 1,
    "topic": "Properti Investasi (PSAK 13)",
    "difficulty": "medium",
    "q": "PT Graha memiliki gedung perkantoran yang disewakan kepada pihak ketiga (operating lease). Jika perusahaan memilih Model Nilai Wajar (Fair Value Model) sesuai PSAK 13, perlakuan yang tepat atas perubahan nilai wajar akhir tahun adalah...",
    "options": [
      "Diakui pada Penghasilan Komprehensif Lain (OCI)",
      "Diakui pada Laporan Laba Rugi periode berjalan dan bangunan tidak disusutkan",
      "Diakui sebagai penambah modal saham disetor",
      "Bangunan tetap disusutkan dan selisih nilai wajar masuk ke Surplus Revaluasi"
    ],
    "answer": 1,
    "explanation": "Pada Fair Value Model PSAK 13, properti investasi TIDAK DISUSUTKAN dan setiap fluktuasi nilai wajar diakui langsung di Laporan Laba Rugi periode berjalan."
  },
  {
    "tm": 1,
    "topic": "Kewajiban Pembongkaran & Restorasi (ISAK 9 / PSAK 57)",
    "difficulty": "advanced",
    "q": "PT Energi Tambang membangun anjungan minyak lepas pantai seharga Rp 200.000.000.000. Entitas memiliki kewajiban hukum untuk membongkar anjungan 10 tahun lagi dengan estimasi biaya Rp 50.000.000.000 (Nilai Tunai PV pada diskonto 8% = Rp 23.160.000.000). Berapakah harga perolehan awal anjungan minyak?",
    "options": [
      "Rp 200.000.000.000",
      "Rp 223.160.000.000",
      "Rp 250.000.000.000",
      "Rp 230.000.000.000"
    ],
    "answer": 1,
    "explanation": "Sesuai PSAK 16 dan ISAK 9, nilai tunai (PV) provisi pembongkaran dan restorasi lokasi sebesar Rp 23.160.000.000 wajib dikapitalisasi ke nilai perolehan awal aset: Rp 200 M + Rp 23,16 M = Rp 223.160.000.000."
  },
  {
    "tm": 2,
    "topic": "Pertukaran Aset Non-Moneter (PSAK 16)",
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
    "tm": 2,
    "topic": "Pertukaran Aset Non-Moneter (PSAK 16)",
    "difficulty": "advanced",
    "q": "PT Bromo menukar truk lama (Kos Rp 100 jt, Akum Depresiasi Rp 60 jt, Nilai Wajar Rp 55 jt) dengan mesin baru dan membayar kas Rp 15 jt. Transaksi MEMILIKI substansi komersial. Berapakah nilai perolehan mesin baru dan laba/rugi pertukaran yang diakui?",
    "options": [
      "Mesin Baru Rp 70 jt; Laba Rp 15 jt",
      "Mesin Baru Rp 55 jt; Laba Rp 15 jt",
      "Mesin Baru Rp 55 jt; Tidak ada laba yang diakui",
      "Mesin Baru Rp 70 jt; Tidak ada laba yang diakui"
    ],
    "answer": 0,
    "explanation": "Nilai buku truk lama = 100 jt - 60 jt = 40 jt. Nilai wajar = 55 jt. Keuntungan pertukaran = 55 jt - 40 jt = Rp 15.000.000 (diakui penuh). Nilai mesin baru = Nilai wajar aset lama (55 jt) + Kas dibayar (15 jt) = Rp 70.000.000."
  },
  {
    "tm": 2,
    "topic": "Pertukaran Aset Tanpa Substansi Komersial",
    "difficulty": "advanced",
    "q": "Jika suatu pertukaran aset non-moneter TIDAK MEMILIKI substansi komersial (lacks commercial substance) dan entitas berada pada posisi UNTUNG (Gain), maka perlakuan standar PSAK 16 adalah...",
    "options": [
      "Mengakui seluruh keuntungan di Laba Rugi",
      "Menangguhkan seluruh keuntungan dengan mengurangi harga perolehan aset baru",
      "Mengakui keuntungan di Penghasilan Komprehensif Lain (OCI)",
      "Membatalkan transaksi pertukaran"
    ],
    "answer": 1,
    "explanation": "Jika pertukaran tidak memiliki substansi komersial, keuntungan ditangguhkan (tidak diakui di laba rugi) dan digunakan untuk mengurangi nilai tercatat awal aset baru."
  },
  {
    "tm": 2,
    "topic": "Hibah Pemerintah (PSAK 61)",
    "difficulty": "medium",
    "q": "Entitas menerima hibah pemerintah berupa mesin senilai Rp 500.000.000 tanpa biaya. Jika menggunakan Pendekatan Pengurangan Biaya Aset (Net Method) sesuai PSAK 61, bagaimana penyajian awal aset tersebut?",
    "options": [
      "Mesin dicatat Rp 500.000.000 dan Pendapatan Hibah Rp 500.000.000",
      "Mesin dicatat dengan nilai nominal Rp 0 (atau nilai nominal simbolis Rp 1) dan tanpa beban penyusutan",
      "Mesin dicatat Rp 500.000.000 dan Ekuitas Donasi Rp 500.000.000",
      "Mesin tidak boleh diakui di neraca sama sekali"
    ],
    "answer": 1,
    "explanation": "Pada Net Method, hibah dikurangkan langsung dari biaya perolehan aset sehingga nilai tercatat awal menjadi Rp 0 (atau nilai nominal simbolis), sehingga entitas tidak mencatat penyusutan di masa depan."
  },
  {
    "tm": 2,
    "topic": "Pelepasan Terpaksa (Involuntary Conversion)",
    "difficulty": "medium",
    "q": "Gedung pabrik terbakar habis (Nilai buku Rp 300.000.000). Perusahaan asuransi membayar klaim ganti rugi tunai sebesar Rp 450.000.000. Manajemen segera membeli gedung baru seharga Rp 500.000.000. Berapakah laba pelepasan terpaksa yang diakui di Laba Rugi?",
    "options": [
      "Rp 0 (karena dana langsung dibelikan gedung baru)",
      "Rp 50.000.000",
      "Rp 150.000.000",
      "Rp 200.000.000"
    ],
    "answer": 2,
    "explanation": "Sesuai PSAK 16, konversi terpaksa (involuntary conversion) diakui penuh untung/ruginya di Laba Rugi periode berjalan: Kas asuransi Rp 450 jt - Nilai buku Rp 300 jt = Keuntungan Rp 150.000.000."
  },
  {
    "tm": 3,
    "topic": "Metode Saldo Menurun Ganda (DDB)",
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
    "tm": 3,
    "topic": "Metode Jumlah Angka Tahun (SYD)",
    "difficulty": "medium",
    "q": "Kendaraan operasional diperoleh seharga Rp 150.000.000 dengan nilai sisa Rp 30.000.000 dan masa manfaat 4 tahun. Berapakah beban penyusutan tahun ke-2 menggunakan metode Sum-of-the-Years'-Digits (SYD)?",
    "options": [
      "Rp 48.000.000",
      "Rp 36.000.000",
      "Rp 30.000.000",
      "Rp 24.000.000"
    ],
    "answer": 1,
    "explanation": "Jumlah angka tahun = 1 + 2 + 3 + 4 = 10. Dasar penyusutan = 150 jt - 30 jt = Rp 120 jt. Beban tahun ke-2 = (3/10) × Rp 120 jt = Rp 36.000.000."
  },
  {
    "tm": 3,
    "topic": "Perubahan Estimasi Akuntansi (PSAK 25)",
    "difficulty": "advanced",
    "q": "Mesin dibeli 1 Jan 2024 seharga Rp 100 jt, disusutkan garis lurus 10 tahun tanpa nilai sisa (penyusutan Rp 10 jt/thn). Pada 1 Jan 2026 (setelah 2 tahun), umur sisa direvisi menjadi 4 tahun lagi dengan nilai sisa Rp 8 jt. Berapakah penyusutan tahun 2026?",
    "options": [
      "Rp 10.000.000",
      "Rp 18.000.000",
      "Rp 20.000.000",
      "Rp 22.500.000"
    ],
    "answer": 1,
    "explanation": "Nilai buku 1 Jan 2026 = 100 jt - (2 × 10 jt) = Rp 80 jt. Dasar penyusutan baru = 80 jt - 8 jt = Rp 72 jt. Sisa umur baru = 4 tahun. Beban penyusutan 2026 = 72 jt / 4 = Rp 18.000.000 (diperlakukan secara prospektif!)."
  },
  {
    "tm": 3,
    "topic": "Deplesi Sumber Daya Alam (PSAK 64)",
    "difficulty": "medium",
    "q": "Manakah dari pos berikut yang TIDAK termasuk dalam dasar penentuan beban deplesi tambang?",
    "options": [
      "Biaya akuisisi hak eksplorasi dan penambangan",
      "Biaya restorasi dan penutupan tambang di masa depan",
      "Nilai sisa residu tanah setelah penambangan selesai",
      "Biaya bunga pinjaman modal kerja operasional harian"
    ],
    "answer": 3,
    "explanation": "Biaya bunga operasional modal kerja harian dibebankan langsung ke periode berjalan, bukan komponen dasar deplesi aset sumber daya alam."
  },
  {
    "tm": 3,
    "topic": "Penyusutan Komponen Aset (Component Depreciation)",
    "difficulty": "medium",
    "q": "Sesuai PSAK 16, jika suatu aset memiliki bagian-bagian yang signifikan dengan umur manfaat yang berbeda-beda (misalnya turbin vs gedung pembangkit listrik), maka perlakuan yang wajib diterapkan adalah...",
    "options": [
      "Menyusutkan seluruh aset menggunakan umur manfaat bagian yang paling panjang",
      "Menyusutkan setiap bagian yang signifikan secara terpisah (Component Depreciation)",
      "Menyusutkan aset menggunakan rata-rata sederhana umur seluruh komponen",
      "Membebankan komponen yang lebih pendek sebagai biaya pemeliharaan"
    ],
    "answer": 1,
    "explanation": "PSAK 16 mewajibkan Component Depreciation: setiap bagian aset tetap dengan biaya perolehan signifikan terhadap total aset dan umur manfaat berbeda harus disusutkan secara terpisah."
  },
  {
    "tm": 4,
    "topic": "Uji Penurunan Nilai (Impairment - PSAK 48)",
    "difficulty": "advanced",
    "q": "PT Semen Gresik menguji penurunan nilai satu unit pabrik. Nilai tercatat adalah Rp 1.500.000.000. Nilai wajar dikurangi biaya pelepasan (FVLCD) adalah Rp 1.300.000.000, sedangkan Nilai Pakai (Value in Use) adalah Rp 1.380.000.000. Berapakah rugi penurunan nilai yang diakui?",
    "options": [
      "Rp 0",
      "Rp 120.000.000",
      "Rp 200.000.000",
      "Rp 80.000.000"
    ],
    "answer": 1,
    "explanation": "Jumlah Terpulihkan (Recoverable Amount) adalah nilai TERTINGGI antara FVLCD (Rp 1.300 jt) dan Nilai Pakai (Rp 1.380 jt), yaitu Rp 1.380.000.000. Rugi penurunan nilai = Nilai Tercatat (Rp 1.500 jt) - Rp 1.380 jt = Rp 120.000.000."
  },
  {
    "tm": 4,
    "topic": "Alokasi Impairment Unit Penghasil Kas (CGU)",
    "difficulty": "advanced",
    "q": "Ketika terjadi kerugian penurunan nilai pada suatu Unit Penghasil Kas (CGU) yang memiliki Goodwill dan aset-aset tetap lainnya, alokasi kerugian pertama kali WAJIB ditujukan kepada pos...",
    "options": [
      "Aset tetap berwujud dengan nilai tercatat paling besar",
      "Goodwill yang dialokasikan ke CGU tersebut sampai habis",
      "Seluruh aset CGU secara proporsional nilai buku",
      "Piutang usaha dan persediaan lancar"
    ],
    "answer": 1,
    "explanation": "PSAK 48 Paragraf 104 menyatakan kerugian penurunan nilai CGU dialokasikan pertama kali untuk mengurangi nilai tercatat Goodwill hingga nol, baru sisanya dialokasikan prorata ke aset lain."
  },
  {
    "tm": 4,
    "topic": "Pembalikan Rugi Penurunan Nilai (Reversal)",
    "difficulty": "medium",
    "q": "Pernyataan manakah yang BENAR mengenai pembalikan kerugian penurunan nilai (reversal of impairment loss)?",
    "options": [
      "Pembalikan kerugian penurunan nilai Goodwill diizinkan jika perekonomian pulih",
      "Pembalikan kerugian penurunan nilai Goodwill dilarang keras oleh PSAK 48",
      "Aset tetap tidak berwujud dilarang dibalik kerugian penurunannya",
      "Nilai tercatat aset setelah pembalikan boleh melebihi harga perolehan awalnya"
    ],
    "answer": 1,
    "explanation": "PSAK 48 secara eksplisit melarang pembalikan rugi penurunan nilai atas Goodwill karena setiap peningkatan nilai setelah impairment dianggap sebagai goodwill internal."
  },
  {
    "tm": 4,
    "topic": "Aset Dimiliki untuk Dijual (PSAK 58)",
    "difficulty": "medium",
    "q": "Suatu aset tidak lancar direklasifikasi menjadi 'Dimiliki untuk Dijual' (Held for Sale) sesuai PSAK 58. Perlakuan yang tepat adalah...",
    "options": [
      "Aset tetap disusutkan seperti biasa hingga tanggal penjualan aktual",
      "Penyusutan aset dihentikan dan aset diukur pada nilai yang lebih rendah antara Nilai Tercatat vs Nilai Wajar Neto (FVLCD)",
      "Aset langsung dihapusbukukan ke laba rugi",
      "Aset dipindahkan ke kelompok investasi saham"
    ],
    "answer": 1,
    "explanation": "Sejak tanggal klasifikasi sebagai Dimiliki untuk Dijual, aset TIDAK BOLEH DISUSUTKAN LAGI dan diukur pada lower of carrying amount vs fair value less costs to sell."
  },
  {
    "tm": 4,
    "topic": "Akuntansi Hak Atas Tanah (ISAK 25)",
    "difficulty": "medium",
    "q": "Berdasarkan ISAK 25 di Indonesia, bagaimana perlakuan akuntansi atas Hak Guna Bangunan (HGB) dan Hak Guna Usaha (HGU)?",
    "options": [
      "Tanah HGB tidak pernah diamortisasi karena tanah selalu mengalami kenaikan nilai",
      "Biaya perolehan hak tanah diamortisasi sepanjang umur hak jika tidak ada kepastian perpanjangan hak",
      "Tanah HGB wajib diklasifikasikan sebagai persediaan perusahaan",
      "Biaya perpanjangan izin HGB dibebankan langsung ke laba rugi saat dibayarkan"
    ],
    "answer": 1,
    "explanation": "Berdasarkan ISAK 25, hak atas tanah dengan umur terbatas (HGB/HGU) diamortisasi sepanjang masa manfaat haknya kecuali entitas memiliki kepastian tinggi untuk memperpanjang hak tersebut."
  },
  {
    "tm": 5,
    "topic": "Aset Takberwujud & Riset Pengembangan (PSAK 19)",
    "difficulty": "medium",
    "q": "Manakah dari pengeluaran berikut yang WAJIB dibebankan langsung pada saat terjadinya (expense as incurred) menurut PSAK 19?",
    "options": [
      "Biaya pendaftaran hukum hak paten ke kementerian hukum",
      "Biaya perolehan lisensi perangkat lunak dari vendor eksternal",
      "Biaya riset laboratorium untuk menemukan formula obat baru",
      "Biaya pengembangan setelah memenuhi 6 kriteria kelayakan teknis"
    ],
    "answer": 2,
    "explanation": "PSAK 19 melarang kapitalisasi biaya riset (research phase) karena belum ada kepastian manfaat ekonomi masa depan; seluruhnya harus diakui sebagai beban."
  },
  {
    "tm": 5,
    "topic": "Kriteria Kapitalisasi R&D (PIRATE Criteria)",
    "difficulty": "advanced",
    "q": "Fase pengembangan (development phase) boleh dikapitalisasi sebagai aset takberwujud jika memenuhi kriteria berikut, KECUALI...",
    "options": [
      "Kelayakan teknis penyelesaian aset takberwujud dapat dibuktikan",
      "Niat entitas untuk menyelesaikan dan menjual atau menggunakannya",
      "Telah memperoleh izin komersial dari otoritas pajak",
      "Adanya pasar bagi output aset takberwujud atau kegunaan internalnya"
    ],
    "answer": 2,
    "explanation": "6 Kriteria PIRATE mencakup: Probable future economic benefit, Intention to complete, Resources availability, Ability to use/sell, Technical feasibility, dan Expendable cost measurability. Izin otoritas pajak bukan kriteria PSAK 19."
  },
  {
    "tm": 5,
    "topic": "Goodwill Kombinasi Bisnis (PSAK 22 / IFRS 3)",
    "difficulty": "medium",
    "q": "Goodwill yang timbul dari kombinasi bisnis dihitung sebagai...",
    "options": [
      "Selisih lebih harga perolehan akuisisi di atas nilai buku ekuitas entitas anak",
      "Selisih lebih imbalan yang dialihkan di atas nilai wajar aset neto teridentifikasi yang diakuisisi",
      "Akumulasi laba bersih historis entitas anak selama 5 tahun terakhir",
      "Nilai kapitalisasi reputasi manajemen entitas pembeli"
    ],
    "answer": 1,
    "explanation": "Goodwill = Imbalan yang dialihkan (Purchase Consideration) dikurangi Nilai Wajar Aset Neto Teridentifikasi yang Diakuisisi (Fair Value of Identifiable Net Assets)."
  },
  {
    "tm": 5,
    "topic": "Amortisasi Aset Takberwujud",
    "difficulty": "medium",
    "q": "Aset takberwujud yang memiliki masa manfaat tidak terbatas (indefinite useful life) diperlakukan dengan cara...",
    "options": [
      "Diamortisasi menggunakan metode garis lurus selama 20 tahun",
      "Tidak diamortisasi, tetapi wajib diuji penurunan nilai (impairment) minimal setahun sekali",
      "Diamortisasi hanya jika menghasilkan rugi operasional",
      "Dihapusbukukan langsung dari laporan keuangan"
    ],
    "answer": 1,
    "explanation": "Aset takberwujud dengan indefinite life (seperti merek dagang tertentu atau goodwill) TIDAK DIAMORTISASI, tetapi wajib diuji penurunan nilai setiap tahun."
  },
  {
    "tm": 5,
    "topic": "Biaya Pembelaan Hukum Paten",
    "difficulty": "medium",
    "q": "PT Indofarma mengeluarkan kas Rp 80 jt untuk berhasil mempertahankan hak patennya dari gugatan kompetitor di pengadilan. Pengeluaran ini harus diperlakukan sebagai...",
    "options": [
      "Beban operasional umum pada periode berjalan",
      "Kapitalisasi penambah nilai tercatat hak paten",
      "Pengurang nilai akumulasi amortisasi",
      "Kerugian luar biasa di laporan laba rugi"
    ],
    "answer": 1,
    "explanation": "Biaya pembelaan hukum paten yang BERHASIL dikapitalisasi ke akun Paten karena membuktikan keabsahan hak eksklusif aset tersebut."
  },
  {
    "tm": 6,
    "topic": "Klasifikasi Liabilitas Jangka Pendek (PSAK 1)",
    "difficulty": "medium",
    "q": "Kriteria manakah yang TIDAK menyebabkan suatu liabilitas diklasifikasikan sebagai Liabilitas Jangka Pendek menurut PSAK 1?",
    "options": [
      "Liabilitas diperkirakan akan diselesaikan dalam siklus operasi normal entitas",
      "Liabilitas jatuh tempo dalam jangka waktu 12 bulan setelah periode pelaporan",
      "Entitas memiliki hak tanpa syarat untuk menunda pelunasan liabilitas selama minimal 12 bulan setelah periode pelaporan",
      "Liabilitas dimiliki terutama untuk tujuan diperdagangkan (trading)"
    ],
    "answer": 2,
    "explanation": "Jika entitas memiliki hak tanpa syarat untuk menunda pelunasan minimal 12 bulan, maka liabilitas tersebut diklasifikasikan sebagai Liabilitas Jangka Panjang."
  },
  {
    "tm": 6,
    "topic": "Wesel Bayar Diskonto",
    "difficulty": "medium",
    "q": "PT Surya menerbitkan wesel bayar tanpa bunga (zero-interest-bearing note) 6 bulan senilai Rp 100.000.000 pada 1 Oktober 2024. Tingkat bunga pasar adalah 12%. Berapakah kas tunai yang diterima PT Surya pada 1 Oktober 2024?",
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
    "tm": 6,
    "topic": "Diskonto Wesel Bayar di Neraca",
    "difficulty": "medium",
    "q": "Akun 'Diskonto Wesel Bayar' (Discount on Notes Payable) disajikan di Laporan Posisi Keuangan sebagai...",
    "options": [
      "Aset Lancar",
      "Kontra-Liabilitas yang mengurangi Nilai Nominal Wesel Bayar",
      "Beban Bunga Ditangguhkan di Aset Tidak Lancar",
      "Pengurang Ekuitas Modal Saham"
    ],
    "answer": 1,
    "explanation": "Diskonto Wesel Bayar adalah akun kontra-liabilitas yang disajikan sebagai pengurang nilai nominal wesel untuk menghasilkan nilai tercatat bersih (carrying amount)."
  },
  {
    "tm": 6,
    "topic": "Pembiayaan Kembali (Refinancing Agreement)",
    "difficulty": "advanced",
    "q": "Utang jangka pendek jatuh tempo 15 Maret 2027. Pada 10 Januari 2027 (sebelum laporan keuangan 2026 diterbitkan), entitas menandatangani kontrak refinancing jangka panjang. Menurut PSAK 1 (revisi), per 31 Desember 2026 utang tersebut disajikan sebagai...",
    "options": [
      "Liabilitas Jangka Panjang karena refinancing sudah disepakati sebelum terbit laporan",
      "Liabilitas Jangka Pendek karena hak penundaan belum ada per tanggal akhir pelaporan (31 Des 2026)",
      "Pos Ekuitas Kuasi",
      "Tidak dicatat di neraca melainkan hanya di CALK"
    ],
    "answer": 1,
    "explanation": "Berdasarkan PSAK 1 / IAS 1 amandemen, hak untuk menunda pelunasan minimal 12 bulan HARUS SUDAH EKSIS PADA AKHIR PERIODE PELAPORAN (31 Des 2026). Perjanjian yang diteken setelah tanggal neraca tidak mengubah klasifikasi jangka pendek."
  },
  {
    "tm": 6,
    "topic": "Skema Bonus Eksekutif",
    "difficulty": "advanced",
    "q": "Bonus manajer adalah 10% dari laba setelah bonus. Jika laba sebelum bonus adalah Rp 110.000.000 (tanpa pajak), berapakah nilai bonus manajer tersebut?",
    "options": [
      "Rp 11.000.000",
      "Rp 10.000.000",
      "Rp 9.090.909",
      "Rp 12.100.000"
    ],
    "answer": 1,
    "explanation": "B = 0,10 × (110 jt - B) -> B = 11 jt - 0,10B -> 1,10B = 11 jt -> B = Rp 10.000.000."
  },
  {
    "tm": 7,
    "topic": "Kriteria Pengakuan Provisi (PSAK 57)",
    "difficulty": "medium",
    "q": "Menurut PSAK 57, suatu provisi WAJIB diakui di neraca jika memenuhi 3 syarat kumulatif berikut, KECUALI...",
    "options": [
      "Entitas memiliki kewajiban kini (legal atau konstruktif) akibat peristiwa masa lalu",
      "Kemungkinan besar (probable > 50%) terjadi arus keluar sumber daya yang mengandung manfaat ekonomi",
      "Estimasi yang andal dapat dibuat mengenai jumlah kewajiban tersebut",
      "Telah disetujui secara tertulis oleh pengadilan negeri setempat"
    ],
    "answer": 3,
    "explanation": "3 Syarat kumulatif pengakuan provisi: (1) Kewajiban kini masa lalu; (2) Probable arus keluar kas (>50%); (3) Estimasi andal. Persetujuan tertulis pengadilan bukan syarat pengakuan provisi."
  },
  {
    "tm": 7,
    "topic": "Provisi Garansi Produk (PSAK 57)",
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
  },
  {
    "tm": 7,
    "topic": "Spektrum Kontinjensi",
    "difficulty": "medium",
    "q": "Jika kemungkinan terjadinya kewajiban di masa depan berada pada rentang 'Possible' (mungkin terjadi tetapi kemungkinan < 50%), perlakuan akuntansi yang tepat adalah...",
    "options": [
      "Diakui sebagai liabilitas provisi di neraca",
      "Hanya diungkapkan dalam Catatan atas Laporan Keuangan (CALK)",
      "Diabaikan sepenuhnya tanpa pengungkapan apa pun",
      "Diakui sebagai pengurang ekuitas pemegang saham"
    ],
    "answer": 1,
    "explanation": "Kewajiban kontinjensi yang berstatus 'Possible' tidak diakui di neraca, melainkan cukup diungkapkan secara memadai di Catatan atas Laporan Keuangan (CALK)."
  },
  {
    "tm": 7,
    "topic": "Aset Kontinjensi",
    "difficulty": "medium",
    "q": "PT Perkasa menggugat kompetitor atas pencemaran nama baik. Pengacara menyatakan 90% kemungkinan besar perusahaan akan memenangkan ganti rugi Rp 500.000.000. Perlakuan akuntansi yang tepat adalah...",
    "options": [
      "Mencatat Piutang Klaim Rp 500 jt dan Pendapatan Luar Biasa Rp 500 jt di neraca",
      "Hanya mengungkapkan keberadaan aset kontinjensi dalam CALK jika arus masuk manfaat ekonomi bersifat probable",
      "Mencatat Pendapatan Ditangguhkan di liabilitas",
      "Mengakui aset di laporan posisi keuangan jika dijamin notaris"
    ],
    "answer": 1,
    "explanation": "Prinsip kehati-hatian (prudence) melarang pengakuan aset kontinjensi di neraca karena dapat menghasilkan pengakuan pendapatan yang tidak pernah terealisasi. Aset kontinjensi hanya diungkapkan di CALK jika probable."
  },
  {
    "tm": 7,
    "topic": "Kontrak Memberatkan (Onerous Contract)",
    "difficulty": "advanced",
    "q": "Dalam kontrak memberatkan (onerous contract) menurut PSAK 57, kewajiban kini diukur pada nilai yang mencerminkan...",
    "options": [
      "Biaya tertinggi untuk menyelesaikan kontrak",
      "Biaya terendah yang tidak dapat dihindari untuk keluar dari kontrak (least net cost of exiting)",
      "Nilai nominal total kontrak masa depan",
      "Estimasi kerugian laba bruto"
    ],
    "answer": 1,
    "explanation": "Biaya yang tidak dapat dihindari mencerminkan nilai terendah antara biaya memenuhi kontrak dan setiap kompensasi atau penalti yang timbul dari kegagalan memenuhinya."
  }
];

export const AKK202_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Review Terpadu Silabus Pra-UTS",
    "difficulty": "advanced",
    "q": "Manakah pernyataan yang BENAR mengenai perlakuan biaya perolehan aset tetap dan liabilitas kontinjensi?",
    "options": [
      "Biaya pembongkaran gedung lama saat membeli tanah untuk membangun pabrik baru dibebankan ke Gedung Baru",
      "Biaya pembongkaran gedung lama saat membeli tanah untuk proyek baru dikapitalisasi ke akun Tanah",
      "Aset kontinjensi yang berstatus probable wajib dijurnal di neraca",
      "Diskonto wesel bayar disajikan di kelompok aset lancar"
    ],
    "answer": 1,
    "explanation": "Biaya pembongkaran gedung lama untuk mempersiapkan tanah bagi pembangunan fasilitas baru dikapitalisasi ke akun Tanah karena merupakan pengorbanan untuk menyiapkan lahan."
  },
  {
    "tm": 8,
    "topic": "Kapitalisasi Bunga & Impairment",
    "difficulty": "advanced",
    "q": "Jika Bunga Aktual entitas selama tahun konstruksi adalah Rp 80.000.000 dan Bunga yang Dapat Dihindari (Avoidable Interest) adalah Rp 95.000.000, berapakah bunga yang boleh dikapitalisasi ke aset tetap?",
    "options": [
      "Rp 95.000.000",
      "Rp 80.000.000",
      "Rp 175.000.000",
      "Rp 15.000.000"
    ],
    "answer": 1,
    "explanation": "Berdasarkan PSAK 26, jumlah bunga yang dikapitalisasi dibatasi paling tinggi sebesar BUNGA AKTUAL yang benar-benar terjadi selama periode tersebut (yaitu Rp 80.000.000)."
  },
  {
    "tm": 8,
    "topic": "Depresiasi & Nilai Sisa DDB",
    "difficulty": "medium",
    "q": "Pada metode Saldo Menurun Ganda (DDB), nilai sisa (residual value) aset...",
    "options": [
      "Dikurangkan dari harga perolehan sebelum mengalikan dengan tarif depresiasi",
      "Diabaikan pada tahun pertama, tetapi menjadi batas bawah (plafon) penghentian penyusutan pada akhir masa manfaat",
      "Tidak pernah diperhatikan sama sekali hingga aset dijual",
      "Ditambahkan ke harga perolehan setiap awal tahun"
    ],
    "answer": 1,
    "explanation": "Pada DDB, nilai sisa diabaikan saat menghitung beban depresiasi tahunan, namun nilai buku aset tidak boleh disusutkan di bawah estimasi nilai sisanya."
  },
  {
    "tm": 8,
    "topic": "Kriteria PIRATE R&D",
    "difficulty": "medium",
    "q": "Huruf 'T' dalam akronim PIRATE kriteria kapitalisasi aset takberwujud fase pengembangan merujuk pada...",
    "options": [
      "Tax deduction eligibility",
      "Technical feasibility to complete the intangible asset",
      "Time-bound project management",
      "Total expenditure reliability"
    ],
    "answer": 1,
    "explanation": "'T' adalah Technical Feasibility (kelayakan teknis penyelesaian aset takberwujud sehingga siap digunakan atau dijual)."
  },
  {
    "tm": 8,
    "topic": "Provisi Garansi Jasa",
    "difficulty": "medium",
    "q": "Pendapatan dari penjualan kontrak garansi servis tambahan (Service-type warranty) yang dibayar di muka oleh pelanggan diakui sebagai...",
    "options": [
      "Pendapatan penjualan tunai langsung pada tanggal transaksi",
      "Pendapatan ditangguhkan (unearned revenue) dan diakui bertahap selama masa kontrak servis berjalan",
      "Provisi garansi di liabilitas lancar",
      "Pengurang harga pokok penjualan"
    ],
    "answer": 1,
    "explanation": "Sesuai IFRS 15 / PSAK 72, garansi tipe jasa merupakan kewajiban pelaksanaan terpisah, sehingga uang yang diterima dicatat sebagai pendapatan ditangguhkan dan diakui secara proporsional selama masa perlindungan."
  },
  {
    "tm": 9,
    "topic": "Penentuan Harga Obligasi",
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
      "Rp 76.000.000"
    ],
    "answer": 1,
    "explanation": "Beban bunga efektif = Nilai tercatat awal obligasi × Suku bunga efektif pasar = Rp 950.000.000 × 9% = Rp 85.500.000."
  },
  {
    "tm": 9,
    "topic": "Obligasi Diterbitkan Antara Tanggal Bunga",
    "difficulty": "advanced",
    "q": "Obligasi kupon 12% nominal Rp 500 jt bertanggal 1 Januari diterbitkan pada 1 April pada kurs 100 ditambah bunga berjalan. Berapakah kas bunga berjalan yang dibayar pembeli kepada penerbit saat transaksi?",
    "options": [
      "Rp 0",
      "Rp 15.000.000",
      "Rp 30.000.000",
      "Rp 60.000.000"
    ],
    "answer": 1,
    "explanation": "Bunga berjalan 3 bulan (Jan - Mar) = Rp 500.000.000 × 12% × (3/12) = Rp 15.000.000."
  },
  {
    "tm": 9,
    "topic": "Biaya Penerbitan Obligasi (PSAK 71)",
    "difficulty": "medium",
    "q": "Berdasarkan PSAK 71, biaya penerbitan obligasi (seperti biaya jasa legal, akuntan, penjamin emisi) diperlakukan dengan cara...",
    "options": [
      "Dibebankan langsung ke laba rugi saat penerbitan",
      "Mengurangi nilai tercatat awal liabilitas obligasi dan diamortisasi menggunakan suku bunga efektif",
      "Dicatat sebagai aset tidak berwujud",
      "Ditambahkan ke agio saham"
    ],
    "answer": 1,
    "explanation": "PSAK 71 mensyaratkan biaya transaksi mengurangi nilai tercatat awal liabilitas keuangan, yang secara otomatis meningkatkan tingkat suku bunga efektif (effective interest rate) sepanjang masa utang."
  },
  {
    "tm": 9,
    "topic": "Amortisasi Premi Obligasi",
    "difficulty": "medium",
    "q": "Sepanjang masa berlakunya obligasi yang diterbitkan pada nilai premi, bagaimanakah tren nilai tercatat (carrying amount) dan beban bunga periodik obligasi tersebut?",
    "options": [
      "Nilai tercatat naik, beban bunga naik",
      "Nilai tercatat turun mendekati nilai nominal, beban bunga turun",
      "Nilai tercatat konstan, beban bunga naik",
      "Nilai tercatat turun, beban bunga konstan"
    ],
    "answer": 1,
    "explanation": "Pada obligasi premi, amortisasi mengurangi nilai tercatat obligasi menuju nilai nominal saat jatuh tempo. Karena nilai tercatat turun, beban bunga efektif (Carrying Amount × Market Rate) juga terus menurun."
  },
  {
    "tm": 10,
    "topic": "Pelunasan Dini Obligasi (Extinguishment)",
    "difficulty": "medium",
    "q": "Obligasi bernilai nominal Rp 500.000.000 dengan premi belum diamortisasi Rp 20.000.000 dilunasi sebelum jatuh tempo pada kurs 102. Berapakah laba atau rugi pelunasan dini obligasi?",
    "options": [
      "Rugi Rp 10.000.000",
      "Laba Rp 10.000.000",
      "Rugi Rp 20.000.000",
      "Laba Rp 20.000.000"
    ],
    "answer": 1,
    "explanation": "Nilai tercatat = Rp 500 jt + Rp 20 jt = Rp 520.000.000. Harga beli kembali = 102% × Rp 500 jt = Rp 510.000.000. Karena nilai tercatat > harga beli kembali, diakui Keuntungan (Laba) Pelunasan Dini = Rp 10.000.000."
  },
  {
    "tm": 10,
    "topic": "Restrukturisasi Utang Bermasalah (IFRIC 19)",
    "difficulty": "advanced",
    "q": "Berdasarkan IFRIC 19 / ISAK 28, jika debitur menyelesaikan kewajiban utang dengan menerbitkan saham sendiri kepada kreditur (Debt-for-Equity Swap), saham tersebut diukur pada...",
    "options": [
      "Nilai nominal saham yang diterbitkan",
      "Nilai tercatat utang yang dilunasi",
      "Nilai wajar instrumen ekuitas yang diterbitkan",
      "Nilai buku ekuitas historis"
    ],
    "answer": 2,
    "explanation": "IFRIC 19 menetapkan instrumen ekuitas yang diterbitkan untuk menyelesaikan liabilitas keuangan diukur pada NILAI WAJARNYA pada tanggal penyelesaian. Selisihnya diakui sebagai keuntungan pelunasan utang di Laba Rugi."
  },
  {
    "tm": 10,
    "topic": "Uji Modifikasi 10% (PSAK 71)",
    "difficulty": "advanced",
    "q": "Dalam restrukturisasi utang melalui modifikasi persyaratan (modification of terms), restrukturisasi dianggap substansial (extinguishment) jika nilai tunai arus kas berdasarkan persyaratan baru berbeda minimal...",
    "options": [
      "5% dari nilai tunai sisa arus kas utang awal",
      "10% dari nilai tunai sisa arus kas utang awal",
      "20% dari nilai tercatat utang",
      "50% dari nilai nominal utang"
    ],
    "answer": 1,
    "explanation": "Uji 10% (10% test) PSAK 71: Jika nilai sekarang arus kas persyaratan baru berbeda minimal 10% dari nilai sekarang sisa arus kas liabilitas keuangan semula, maka modifikasi dianggap substansial dan dicatat sebagai penghentian utang lama."
  },
  {
    "tm": 10,
    "topic": "Penyelesaian Utang dengan Aset Non-Kas",
    "difficulty": "medium",
    "q": "Debitur melunasi utang Rp 1.000 jt dengan menyerahkan tanah (Nilai buku Rp 600 jt, Nilai wajar Rp 850 jt). Berapakah keuntungan pelepasan tanah dan keuntungan restrukturisasi utang?",
    "options": [
      "Laba tanah Rp 250 jt; Laba restrukturisasi utang Rp 150 jt",
      "Laba tanah Rp 400 jt; Laba restrukturisasi utang Rp 0",
      "Laba tanah Rp 0; Laba restrukturisasi utang Rp 400 jt",
      "Laba tanah Rp 150 jt; Laba restrukturisasi utang Rp 250 jt"
    ],
    "answer": 0,
    "explanation": "Tahap 1: Laba pelepasan aset = Nilai wajar (850 jt) - Nilai buku (600 jt) = Rp 250.000.000. Tahap 2: Laba pelunasan utang = Nilai tercatat utang (1.000 jt) - Nilai wajar aset (850 jt) = Rp 150.000.000."
  },
  {
    "tm": 10,
    "topic": "Wesel Bayar dengan Hak Istimewa",
    "difficulty": "medium",
    "q": "Ketika perusahaan menerbitkan wesel bayar tanpa bunga dan memberikan hak istimewa kepada penerima wesel untuk membeli barang dengan harga diskon, nilai nominal wesel harus dialokasikan antara...",
    "options": [
      "Utang wesel dan beban operasional",
      "Nilai sekarang liabilitas wesel bayar dan pendapatan diterima di muka (unearned revenue)",
      "Modal saham dan agio obligasi",
      "Seluruhnya ke utang bunga berjalan"
    ],
    "answer": 1,
    "explanation": "Nilai nominal wesel dialokasikan antara nilai wajar liabilitas wesel (diukur dari PV arus kas) dan sisa diskonto yang mencerminkan pendapatan diterima di muka atas hak istimewa pembelian barang."
  },
  {
    "tm": 11,
    "topic": "Metode Biaya Saham Treasuri (Cost Method)",
    "difficulty": "medium",
    "q": "PT Berlian membeli kembali 1.000 lembar sahamnya (nilai nominal Rp 1.000) seharga Rp 5.000 per lembar menggunakan metode biaya. Jurnal yang benar adalah...",
    "options": [
      "Debit Saham Biasa Rp 1.000.000, Debit Agio Saham Rp 4.000.000, Kredit Kas Rp 5.000.000",
      "Debit Saham Treasuri Rp 5.000.000, Kredit Kas Rp 5.000.000",
      "Debit Investasi Saham Rp 5.000.000, Kredit Kas Rp 5.000.000",
      "Debit Laba Ditahan Rp 5.000.000, Kredit Kas Rp 5.000.000"
    ],
    "answer": 1,
    "explanation": "Pada Cost Method, akun Saham Treasuri didebit sebesar harga perolehan pembelian kembali (1.000 × Rp 5.000 = Rp 5.000.000) tanpa memperhatikan nilai nominal."
  },
  {
    "tm": 11,
    "topic": "Penjualan Saham Treasuri di Bawah Kos",
    "difficulty": "advanced",
    "q": "Saham treasuri dibeli pada harga Rp 5.000/lembar, lalu dijual kembali seharga Rp 3.500/lembar. Defisit sebesar Rp 1.500/lembar pertama kali didebit ke pos...",
    "options": [
      "Rugi Penjualan Saham Treasuri di Laporan Laba Rugi",
      "Agio Saham - Saham Treasuri (sampai saldonya habis), lalu sisanya ke Laba Ditahan",
      "Modal Saham Biasa",
      "Akumulasi Penghasilan Komprehensif Lain (OCI)"
    ],
    "answer": 1,
    "explanation": "Transaksi saham treasuri tidak pernah menghasilkan laba atau rugi di Laporan Laba Rugi. Defisit penjualan didebit ke Agio Saham Treasuri hingga nol, dan setiap sisa defisit didebit ke Laba Ditahan."
  },
  {
    "tm": 11,
    "topic": "Dividen Properti",
    "difficulty": "medium",
    "q": "Sebelum membagikan dividen properti (non-kas) kepada pemegang saham, entitas WAJIB...",
    "options": [
      "Menilai kembali aset properti tersebut ke nilai wajarnya dan mengakui laba/rugi revaluasi di Laba Rugi",
      "Membebankan seluruh nilai aset ke akun modal saham",
      "Menjual aset properti tersebut ke pihak berelasi",
      "Mengabaikan perubahan nilai pasar aset"
    ],
    "answer": 0,
    "explanation": "Berdasarkan IFRIC 17 / PSAK 55, pada tanggal pengumuman dividen properti, aset yang akan dibagikan harus disesuaikan ke nilai wajarnya dengan mengakui keuntungan/kerugian di Laba Rugi periode berjalan."
  },
  {
    "tm": 11,
    "topic": "Dividen Saham vs Pemecahan Saham (Stock Split)",
    "difficulty": "medium",
    "q": "Pernyataan manakah yang BENAR membedakan Dividen Saham dan Pemecahan Saham (Stock Split)?",
    "options": [
      "Stock split memerlukan ayat jurnal formal yang memindahkan saldo laba ditahan ke modal saham",
      "Dividen saham tidak mengubah total ekuitas tetapi mereklasifikasi laba ditahan ke modal saham, sedangkan stock split tidak memerlukan ayat jurnal dan tidak mengubah saldo laba ditahan",
      "Dividen saham menurunkan nilai nominal per lembar saham",
      "Stock split meningkatkan total saldo ekuitas pemegang saham"
    ],
    "answer": 1,
    "explanation": "Dividen saham memindahkan sebagian saldo Laba Ditahan ke Modal Saham (kapitalisasi laba ditahan). Sebaliknya, stock split hanya menambah jumlah lembar dan menurunkan nilai nominal per lembar tanpa ada ayat jurnal formal dan tanpa mengubah saldo akun apa pun."
  },
  {
    "tm": 11,
    "topic": "Saham Preferen Kumulatif (Dividends in Arrears)",
    "difficulty": "medium",
    "q": "Dividen saham preferen kumulatif yang belum diumumkan pada tahun-tahun sebelumnya (dividends in arrears) harus...",
    "options": [
      "Dicatat sebagai Utang Dividen di neraca",
      "Diungkapkan dalam Catatan atas Laporan Keuangan (CALK) dan bukan merupakan liabilitas sampai diumumkan",
      "Dihapusbukukan dari ekuitas",
      "Dibebankan sebagai kerugian penurunan modal"
    ],
    "answer": 1,
    "explanation": "Dividen menunggak (in arrears) BUKAN liabilitas karena belum ada kewajiban hukum pembayaran sebelum dewan direksi mendeklarasikannya. Namun, pos ini wajib diungkapkan di CALK."
  },
  {
    "tm": 12,
    "topic": "Obligasi Konversi (With-and-Without Method)",
    "difficulty": "advanced",
    "q": "Ketika entitas menerbitkan obligasi konversi, PSAK 50 mensyaratkan pemisahan komponen liabilitas dan ekuitas menggunakan metode...",
    "options": [
      "Metode Nilai Nominal Proporsional",
      "Metode Residual (With-and-Without Method): Nilai liabilitas diukur lebih dulu sebesar PV arus kas pasar, sisanya dialokasikan ke Ekuitas",
      "Metode Nilai Wajar Ekuitas Murni",
      "Seluruh nilai terbit diakui sebagai Liabilitas penuh hingga konversi terjadi"
    ],
    "answer": 1,
    "explanation": "Berdasarkan PSAK 50, instrumen majemuk dipisahkan dengan mengukur komponen liabilitas terlebih dahulu (nilai tunai kupon dan pokok menggunakan diskonto obligasi serupa tanpa hak konversi), dan nilai residualnya dialokasikan ke komponen ekuitas."
  },
  {
    "tm": 12,
    "topic": "Konversi Obligasi (Book Value Method)",
    "difficulty": "medium",
    "q": "Ketika pemegang obligasi konversi mengeksekusi hak konversinya menjadi saham biasa menggunakan Metode Nilai Buku (Book Value Method), jurnal pencatatan konversi tersebut...",
    "options": [
      "Mengakui laba atau rugi konversi di Laporan Laba Rugi",
      "Tidak mengakui laba atau rugi, melainkan mengalokasikan nilai tercatat bersih obligasi dan opsi konversi ke Modal Saham dan Agio Saham Biasa",
      "Menghapus seluruh nilai ekuitas pemegang saham",
      "Mencatat selisihnya ke laba komprehensif lain (OCI)"
    ],
    "answer": 1,
    "explanation": "Pada Book Value Method, tidak ada laba atau rugi yang diakui. Seluruh nilai buku liabilitas obligasi beserta komponen ekuitas opsi konversi ditransfer menjadi Modal Saham Biasa dan Agio Saham Biasa."
  },
  {
    "tm": 12,
    "topic": "Waran Saham Terpisah (Detachable Warrants)",
    "difficulty": "advanced",
    "q": "Obligasi diterbitkan bersama waran saham yang dapat dipisahkan (detachable). Jika nilai wajar obligasi tanpa waran dan nilai wajar waran di pasar sekunder keduanya diketahui andal, alokasi hasil emisi menggunakan metode...",
    "options": [
      "Metode Inkremental",
      "Metode Proporsional berdasarkan Nilai Wajar Relatif",
      "Metode Nilai Nominal Bersih",
      "Metode Residual 100% ke Waran"
    ],
    "answer": 1,
    "explanation": "Jika nilai wajar kedua instrumen dapat ditentukan secara andal, PSAK mensyaratkan alokasi hasil penerbitan berbasis Metode Proporsional (relatif fair value method)."
  },
  {
    "tm": 12,
    "topic": "Kompensasi Opsi Saham (PSAK 53 / IFRS 2)",
    "difficulty": "medium",
    "q": "Berdasarkan PSAK 53, total beban kompensasi atas program opsi saham karyawan (employee share options) diukur berdasarkan...",
    "options": [
      "Nilai wajar opsi pada tanggal hibah (Grant Date) menggunakan model penetapan harga opsi",
      "Nilai intrinsik opsi pada tanggal eksekusi (Exercise Date)",
      "Nilai nominal saham pada saat jatuh tempo vesting",
      "Harga pasar saham pada setiap tanggal akhir tahun pelaporan"
    ],
    "answer": 0,
    "explanation": "PSAK 53 mewajibkan transaksi pembayaran berbasis saham yang diselesaikan dengan instrumen ekuitas diukur pada NILAI WAJAR PADA TANGGAL HIBAH (Grant Date Fair Value) dan tidak disesuaikan kembali akibat fluktuasi harga pasar saham."
  },
  {
    "tm": 12,
    "topic": "Alokasi Beban Kompensasi Selama Vesting Period",
    "difficulty": "medium",
    "q": "Total nilai wajar opsi saham pada tanggal hibah adalah Rp 90.000.000 dengan periode masa bakti kerja (vesting period) 3 tahun. Berapakah beban kompensasi yang diakui pada akhir tahun pertama jika tidak ada karyawan yang keluar?",
    "options": [
      "Rp 90.000.000",
      "Rp 45.000.000",
      "Rp 30.000.000",
      "Rp 0 (diakui sekaligus di akhir tahun ke-3)"
    ],
    "answer": 2,
    "explanation": "Beban kompensasi diakui secara proporsional sepanjang periode vesting: Rp 90.000.000 / 3 tahun = Rp 30.000.000 per tahun."
  },
  {
    "tm": 13,
    "topic": "Laba Per Saham Dasar (Basic EPS)",
    "difficulty": "medium",
    "q": "PT Makmur melaporkan Laba Bersih Rp 500.000.000. Entitas memiliki 10.000 lembar saham preferen kumulatif 10% bernilai nominal Rp 50.000 yang beredar sepanjang tahun (belum diumumkan dividennya). Rata-rata tertimbang saham biasa beredar adalah 100.000 lembar. Berapakah Basic EPS?",
    "options": [
      "Rp 5.000 per lembar",
      "Rp 4.500 per lembar",
      "Rp 4.800 per lembar",
      "Rp 4.000 per lembar"
    ],
    "answer": 1,
    "explanation": "Dividen saham preferen kumulatif = 10.000 × Rp 50.000 × 10% = Rp 50.000.000 (harus tetap dikurangkan meskipun belum diumumkan!). Laba untuk saham biasa = Rp 500 jt - Rp 50 jt = Rp 450 jt. Basic EPS = Rp 450 jt / 100.000 lembar = Rp 4.500 per lembar."
  },
  {
    "tm": 13,
    "topic": "Weighted Average Shares (WASO) & Dividen Saham",
    "difficulty": "advanced",
    "q": "Saldo awal saham biasa 100.000 lembar. Pada 1 Mei diterbitkan 30.000 lembar. Pada 1 Juli dibagikan Dividen Saham 20%. Berapakah Weighted Average Shares Outstanding (WASO) untuk tahun tersebut?",
    "options": [
      "120.000 lembar",
      "144.000 lembar",
      "136.000 lembar",
      "156.000 lembar"
    ],
    "answer": 1,
    "explanation": "Dividen saham diperlakukan retrospektif seolah-olah terjadi sejak awal tahun: (1 Jan s.d. 1 Mei = 100.000 × 1,20 × 4/12 = 40.000) + (1 Mei s.d. 31 Des = 130.000 × 1,20 × 8/12 = 104.000). Total WASO = 40.000 + 104.000 = 144.000 lembar."
  },
  {
    "tm": 13,
    "topic": "If-Converted Method (Obligasi Konversi)",
    "difficulty": "advanced",
    "q": "Dalam menghitung Diluted EPS dengan metode If-Converted untuk obligasi konversi, penyesuaian yang dilakukan pada bagian PEMBILANG (Numerator) adalah...",
    "options": [
      "Mengurangkan seluruh nilai nominal obligasi",
      "Menambahkan kembali beban bunga obligasi dikurangi dampak pajak [Bunga × (1 - Tarif Pajak)]",
      "Menambahkan dividen saham preferen",
      "Mengurangkan beban bunga kotor tanpa memperhatikan pajak"
    ],
    "answer": 1,
    "explanation": "Karena diasumsikan obligasi telah dikonversi sejak awal tahun, perusahaan tidak perlu membayar bunga obligasi. Maka laba bersih disesuaikan ke atas sebesar beban bunga yang dihemat dikurangi penghematan pajaknya: Bunga × (1 - Tarif Pajak)."
  },
  {
    "tm": 13,
    "topic": "Treasury Stock Method (Opsi Saham)",
    "difficulty": "advanced",
    "q": "Entitas memiliki 10.000 opsi saham dengan harga eksekusi Rp 20.000. Rata-rata harga pasar saham biasa sepanjang tahun adalah Rp 25.000. Menggunakan Treasury Stock Method, berapakah tambahan lembar saham inkremental untuk penyebut Diluted EPS?",
    "options": [
      "10.000 lembar",
      "8.000 lembar",
      "2.000 lembar",
      "0 lembar"
    ],
    "answer": 2,
    "explanation": "Kas dari eksekusi = 10.000 × Rp 20.000 = Rp 200.000.000. Saham yang dibeli kembali di pasar = Rp 200.000.000 / Rp 25.000 = 8.000 lembar. Tambahan lembar inkremental = 10.000 - 8.000 = 2.000 lembar."
  },
  {
    "tm": 13,
    "topic": "Uji Anti-Dilutif (Anti-dilution Test)",
    "difficulty": "medium",
    "q": "Suatu sekuritas berpotensi saham biasa dikategorikan sebagai ANTI-DILUTIF jika efek konversinya...",
    "options": [
      "Menurunkan Laba Per Saham atau meningkatkan Rugi Per Saham",
      "Meningkatkan Laba Per Saham atau menurunkan Rugi Per Saham dari operasi berlanjut",
      "Menyebabkan ekuitas negatif",
      "Memiliki harga pasar di atas nilai nominal"
    ],
    "answer": 1,
    "explanation": "Sesuai PSAK 56, sekuritas anti-dilutif adalah sekuritas yang konversinya akan meningkatkan EPS atau menurunkan Rugi Per Saham. Sekuritas anti-dilutif DILARANG dimasukkan dalam perhitungan Diluted EPS."
  },
  {
    "tm": 14,
    "topic": "Klasifikasi Instrumen Keuangan (PSAK 71 / IFRS 9)",
    "difficulty": "medium",
    "q": "Investasi pada obligasi yang dimiliki dalam model bisnis yang bertujuan HANYA untuk mengoleksi arus kas kontraktual (pokok dan bunga) diklasifikasikan sebagai...",
    "options": [
      "Biaya Perolehan Diamortisasi (Amortised Cost)",
      "Nilai Wajar melalui Penghasilan Komprehensif Lain (FVOCI)",
      "Nilai Wajar melalui Laba Rugi (FVTPL)",
      "Aset Keuangan Derivatif"
    ],
    "answer": 0,
    "explanation": "Jika lolos SPPI test dan model bisnisnya murni 'hold to collect contractual cash flows', efek utang diklasifikasikan pada Amortised Cost."
  },
  {
    "tm": 14,
    "topic": "Metode Ekuitas (PSAK 15)",
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
  },
  {
    "tm": 14,
    "topic": "Penerimaan Dividen pada Metode Ekuitas",
    "difficulty": "medium",
    "q": "Ketika investor yang menerapkan Metode Ekuitas menerima dividen tunai dari entitas asosiasi, jurnal yang dicatat oleh investor adalah...",
    "options": [
      "Debit Kas, Kredit Pendapatan Dividen di Laba Rugi",
      "Debit Kas, Kredit Investasi pada Entitas Asosiasi (mengurangi saldo investasi)",
      "Debit Kas, Kredit Ekuitas Modal Saham",
      "Debit Kas, Kredit Keuntungan Belum Direalisasi OCI"
    ],
    "answer": 1,
    "explanation": "Pada Metode Ekuitas, dividen dipandang sebagai penarikan kembali modal investasi, sehingga mendebit Kas dan MENGKREDIT (MENGURANGI) akun Investasi pada Entitas Asosiasi."
  },
  {
    "tm": 14,
    "topic": "Daur Ulang (Recycling) OCI Efek Utang vs Efek Ekuitas",
    "difficulty": "advanced",
    "q": "Bagaimanakah perbedaan perlakuan daur ulang (recycling) keuntungan belum terealisasi di OCI saat instrumen dijual antara Efek Utang FVOCI dan Efek Ekuitas FVOCI?",
    "options": [
      "Keduanya wajib direklasifikasi (recycled) ke Laba Rugi",
      "Efek Utang FVOCI direklasifikasi ke Laba Rugi, sedangkan Efek Ekuitas FVOCI dilarang direklasifikasi ke Laba Rugi (hanya boleh ditransfer ke Laba Ditahan)",
      "Efek Utang dilarang direklasifikasi, sedangkan Efek Ekuitas wajib direklasifikasi",
      "Keduanya dilarang direklasifikasi dan harus tetap berada di OCI selamanya"
    ],
    "answer": 1,
    "explanation": "Aturan emas PSAK 71: Akumulasi OCI Efek Utang FVOCI wajib di-recycle ke Laba Rugi saat dijual. Sebaliknya, akumulasi OCI Efek Ekuitas FVOCI (pilihan irrevocable) DILARANG KERAS di-recycle ke Laba Rugi."
  },
  {
    "tm": 14,
    "topic": "Model Kerugian Kredit Ekspektasian (ECL Model)",
    "difficulty": "advanced",
    "q": "Menurut PSAK 71, model penurunan nilai aset keuangan berbasis kerugian kredit ekspektasian (Expected Credit Loss - ECL) mengharuskan pengakuan penyisihan kerugian pada Tahap 1 (Stage 1 - risiko kredit belum meningkat signifikan) sebesar...",
    "options": [
      "100% kerugian kredit sepanjang umur aset (lifetime ECL)",
      "ECL 12 bulan (12-month expected credit losses)",
      "Nol penyisihan hingga terjadi gagal bayar aktual",
      "Rata-rata suku bunga pasar historis"
    ],
    "answer": 1,
    "explanation": "Pada Tahap 1 (Stage 1), entitas mengukur penyisihan kerugian sebesar 12-month ECL (bagian dari lifetime ECL yang timbul dari peristiwa gagal bayar yang mungkin terjadi dalam 12 bulan setelah tanggal pelaporan)."
  }
];

export const AKK202_QUIZ: QuizQuestion[] = [...AKK202_QUIZ_UTS, ...AKK202_QUIZ_UAS];
