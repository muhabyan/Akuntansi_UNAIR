// scripts/sem3-quiz-data.mjs
export const SEM3_QUIZ_DATA = {
  "AKK202": {
    "courseName": "Akuntansi Keuangan Menengah II",
    "uts": [
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
    ],
    "uas": [
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
    ]
  },
  "AKM202": {
    "courseName": "Akuntansi Manajemen",
    "uts": [
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
    ],
    "uas": [
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
    ]
  },
  "AKS201": {
    "courseName": "Akuntansi Sektor Publik",
    "uts": [
      {
        "tm": 1,
        "topic": "Karakteristik Sektor Publik",
        "difficulty": "medium",
        "q": "Ciri utama yang membedakan organisasi sektor publik dari sektor privat adalah...",
        "options": [
          "Sektor publik bertujuan memaksimumkan laba bagi pemangku kepentingan",
          "Sektor publik didanai dari pajak/retribusi dan berorientasi pada pelayanan masyarakat",
          "Sektor publik memiliki kepemilikan modal saham yang diperjualbelikan di bursa",
          "Sektor publik tidak diwajibkan menyusun laporan keuangan tahunan"
        ],
        "answer": 1,
        "explanation": "Sektor publik berorientasi pada pelayanan publik (public service) dan didanai melalui otoritas perpajakan serta penerimaan negara."
      },
      {
        "tm": 2,
        "topic": "Regulasi Sektor Publik & ISAK 35",
        "difficulty": "medium",
        "q": "Berdasarkan ISAK 35, aset neto entitas nirlaba diklasifikasikan ke dalam...",
        "options": [
          "Aset Neto Terikat Permanen dan Terikat Temporer",
          "Modal Disetor dan Saldo Laba",
          "Aset Neto Tanpa Pembatasan dan Aset Neto Dengan Pembatasan",
          "Ekuitas Dana Lancar dan Ekuitas Dana Investasi"
        ],
        "answer": 2,
        "explanation": "ISAK 35 menyederhanakan klasifikasi aset neto menjadi dua: (1) Tanpa Pembatasan dari pemberi sumber daya, dan (2) Dengan Pembatasan."
      },
      {
        "tm": 3,
        "topic": "Standar Akuntansi Pemerintahan (PP 71/2010)",
        "difficulty": "medium",
        "q": "PP No. 71 Tahun 2010 menetapkan penerapan Standar Akuntansi Pemerintahan berbasis...",
        "options": [
          "Kas Murni (Cash Basis)",
          "Kas Menuju Akrual (Cash toward Accrual)",
          "Akrual Penuh (Full Accrual Basis)",
          "Modifikasi Nilai Pasar Wajar"
        ],
        "answer": 2,
        "explanation": "PP 71/2010 secara resmi mewajibkan SAP Berbasis Akrual penuh bagi seluruh instansi pemerintah di Indonesia."
      },
      {
        "tm": 4,
        "topic": "Sistem Penganggaran Sektor Publik",
        "difficulty": "medium",
        "q": "Kelemahan utama dari sistem penganggaran tradisional berbasis mata anggaran (line-item budgeting) adalah...",
        "options": [
          "Sangat rumit dalam perhitungan matematis",
          "Bersifat inkremental dan tidak mengaitkan alokasi dana dengan kinerja nyata output",
          "Memerlukan evaluasi program dari titik nol setiap tahun anggaran",
          "Tidak memiliki kontrol hukum atas pengeluaran belanja"
        ],
        "answer": 1,
        "explanation": "Line-item budgeting cenderung inkremental (menaikkan persentase pagu tahun lalu) tanpa mengevaluasi efektivitas dan efisiensi capaian kinerja riil."
      },
      {
        "tm": 5,
        "topic": "Teknik Akuntansi Dana & Komitmen",
        "difficulty": "medium",
        "q": "Pemerintah membukukan komitmen belanja pada saat pesanan resmi diterbitkan dengan tujuan...",
        "options": [
          "Memastikan kas langsung berkurang di rekening bank penerima",
          "Mengendalikan anggaran agar realisasi belanja tidak melebihi sisa pagu anggaran DIPA/DPA",
          "Menghitung beban penyusutan aset pemerintah",
          "Membatalkan hak tagih vendor rekanan proyek"
        ],
        "answer": 1,
        "explanation": "Akuntansi komitmen (encumbrance/commitment accounting) memantau sisa pagu anggaran yang telah terikat kontrak agar tidak terjadi overspending."
      },
      {
        "tm": 6,
        "topic": "Laporan Keuangan SAP Akrual",
        "difficulty": "medium",
        "q": "Laporan yang menyajikan ikhtisar sumber, alokasi, dan pemakaian sumber daya keuangan kas yang dikelola oleh pemerintah selama satu periode pelaporan adalah...",
        "options": [
          "Laporan Operasional (LO)",
          "Laporan Realisasi Anggaran (LRA)",
          "Laporan Perubahan Ekuitas (LPE)",
          "Neraca Keuangan Pemerintah"
        ],
        "answer": 1,
        "explanation": "LRA menyajikan perbandingan anggaran dengan realisasi pendapatan-LRA, belanja, dan pembiayaan berbasis kas."
      },
      {
        "tm": 7,
        "topic": "Perbedaan Belanja vs Beban",
        "difficulty": "medium",
        "q": "Pengeluaran kas daerah untuk membayar tagihan listrik kantor dinas bulan berjalan dicatat dalam laporan keuangan pemerintah sebagai...",
        "options": [
          "Belanja Barang pada LRA dan Beban Barang dan Jasa pada Laporan Operasional (LO)",
          "Belanja Modal pada LRA dan Penambahan Aset Tetap pada Neraca",
          "Beban Lain-Lain pada LO tanpa pencatatan pada LRA",
          "Pengeluaran Pembiayaan pada LRA"
        ],
        "answer": 0,
        "explanation": "Pembayaran operasional rutin dicatat ganda: Belanja Barang pada LRA (basis kas) dan Beban Barang dan Jasa pada LO (basis akrual)."
      }
    ],
    "uas": [
      {
        "tm": 8,
        "topic": "SAPP & SAPD (Permendagri 77/2020)",
        "difficulty": "medium",
        "q": "Dalam struktur akuntansi keuangan daerah, hubungan antara PPKD (selaku BUD) dan SKPD dicatat menggunakan akun timbal balik (reciprocal accounts) yaitu...",
        "options": [
          "Utang Usaha dan Piutang Usaha",
          "Rekening Koran (RK) PPKD dan Rekening Koran (RK) SKPD",
          "Kas di Kasda dan Modal Kerja SKPD",
          "Pendapatan Transfer dan Beban Transfer"
        ],
        "answer": 1,
        "explanation": "Akun RK PPKD (di buku SKPD) dan RK SKPD (di buku PPKD) mencerminkan hubungan kantor pusat dan kantor cabang dalam konsolidasi LKPD."
      },
      {
        "tm": 9,
        "topic": "Pengukuran Kinerja & Value for Money",
        "difficulty": "medium",
        "q": "Jika sebuah dinas berhasil membangun puskesmas dengan biaya 10% lebih rendah dari pagu anggaran namun spesifikasi bangunan tetap sesuai standar, maka dinas tersebut dinilai memenuhi prinsip...",
        "options": [
          "Efektivitas (Effectiveness)",
          "Ekonomis (Economy)",
          "Akuntabilitas Hukum",
          "Universalitas Fiskal"
        ],
        "answer": 1,
        "explanation": "Prinsip Ekonomis (Economy) mengukur kehematan perolehan input sumber daya pada harga terbaik tanpa mengorbankan kualitas standar."
      },
      {
        "tm": 10,
        "topic": "Audit Sektor Publik & BPK RI",
        "difficulty": "medium",
        "q": "Laporan keuangan pemerintah daerah yang disajikan wajar dalam semua hal yang material sesuai Standar Akuntansi Pemerintahan akan memperoleh opini BPK...",
        "options": [
          "Wajar Dengan Pengecualian (WDP)",
          "Wajar Tanpa Pengecualian (WTP)",
          "Tidak Wajar (Adverse)",
          "Tidak Menyatakan Pendapat (Disclaimer)"
        ],
        "answer": 1,
        "explanation": "Opini Wajar Tanpa Pengecualian (WTP) diberikan jika LK menyajikan secara wajar seluruh hal material sesuai SAP, SPI andal, dan patuh regulasi."
      },
      {
        "tm": 11,
        "topic": "Akuntansi Keuangan Desa (UU 6/2014)",
        "difficulty": "medium",
        "q": "Aplikasi resmi yang dikembangkan BPKP dan Kemendagri untuk pengelolaan keuangan dan akuntansi desa di Indonesia adalah...",
        "options": [
          "SAKTI",
          "SPAN",
          "SISKEUDES",
          "SIMDA BPKAD"
        ],
        "answer": 2,
        "explanation": "SISKEUDES (Sistem Informasi Keuangan Desa) digunakan oleh puluhan ribu desa di Indonesia untuk menyusun APBDesa dan laporan pertanggungjawaban."
      },
      {
        "tm": 12,
        "topic": "Badan Layanan Umum (BLU/BLUD)",
        "difficulty": "medium",
        "q": "Fleksibilitas utama pengelolaan keuangan yang dimiliki oleh PTN-BLU dan RSUD-BLUD berdasarkan PP 23/2005 adalah...",
        "options": [
          "Bebas dari kewajiban pemeriksaan oleh BPK RI",
          "Pendapatan fungsional non-pajak dari jasa layanan dapat langsung digunakan untuk belanja operasional tanpa disetor terlebih dahulu ke kas negara/daerah",
          "Dapat menerbitkan obligasi daerah tanpa persetujuan DPR/DPRD",
          "Tidak wajib menyusun laporan keuangan berbasis akrual"
        ],
        "answer": 1,
        "explanation": "BLU/BLUD memiliki fleksibilitas menggunakan langsung pendapatan tarif layanannya untuk mendanai operasional pelayanan publik secara mandiri."
      },
      {
        "tm": 13,
        "topic": "Isu Kontemporer Pengadaan Publik",
        "difficulty": "medium",
        "q": "Digitalisasi pengadaan barang dan jasa pemerintah yang dilakukan melalui sistem e-Purchasing pada portal resmi LKPP disebut...",
        "options": [
          "e-Faktur Pajak",
          "e-Katalog LKPP",
          "Aplikasi SPAN",
          "Aplikasi SAKIP"
        ],
        "answer": 1,
        "explanation": "e-Katalog LKPP memuat daftar barang/jasa terstandardisasi beserta harganya untuk mempermudah belanja pemerintah secara transparan dan akuntabel."
      },
      {
        "tm": 14,
        "topic": "Review UAS Sektor Publik",
        "difficulty": "medium",
        "q": "Apabila BPK menemukan kelemahan material pada sistem pengendalian internal dan pembatasan lingkup pemeriksaan yang sangat pervasif pada kementerian, maka opini yang diterbitkan adalah...",
        "options": [
          "Wajar Tanpa Pengecualian dengan Paragraf Penjelas",
          "Wajar Dengan Pengecualian",
          "Tidak Menyatakan Pendapat (Disclaimer)",
          "Opini Terbatas"
        ],
        "answer": 2,
        "explanation": "Jika pembatasan bukti bersifat material dan pervasif, BPK akan menyatakan Menolak Memberikan Opini (Disclaimer)."
      }
    ]
  },
  "PJK202": {
    "courseName": "Perpajakan II",
    "uts": [
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
    ],
    "uas": [
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
    ]
  },
  "MNK201": {
    "courseName": "Manajemen Keuangan",
    "uts": [
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
    ],
    "uas": [
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
    ]
  },
  "AKA201": {
    "courseName": "Pengauditan Berbasis Risiko I",
    "uts": [
      {
        "tm": 1,
        "topic": "Konsep Dasar Audit & Jasa Asurans",
        "difficulty": "medium",
        "q": "Penyebab utama timbulnya permintaan akan jasa audit laporan keuangan independen oleh para pengguna laporan adalah...",
        "options": [
          "Persyaratan mutlak perbankan untuk membuka rekening koran",
          "Risiko informasi yang diakibatkan oleh benturan kepentingan antara manajemen dan pengguna, kompleksitas transaksi, serta jarak informasi",
          "Jaminan bahwa perusahaan tidak akan pernah mengalami kebangkrutan",
          "Pencegahan 100% atas terjadinya kesalahan pembukuan karyawan"
        ],
        "answer": 1,
        "explanation": "Auditor independen mengurangi information risk akibat adanya keterpisahan prinsipal dan agen serta potensi bias dalam pelaporan keuangan."
      },
      {
        "tm": 2,
        "topic": "Etika Profesi & Independensi",
        "difficulty": "medium",
        "q": "Seorang auditor ditawari posisi sebagai Direktur Keuangan di perusahaan klien audit yang saat ini sedang diperiksanya. Situasi ini menimbulkan ancaman independensi berupa...",
        "options": [
          "Self-interest threat dan familiarity threat",
          "Advocacy threat saja",
          "Intimidation threat saja",
          "Self-review threat saja"
        ],
        "answer": 0,
        "explanation": "Peluang pekerjaan di klien memicu kepentingan pribadi finansial (self-interest) dan kedekatan hubungan masa depan (familiarity)."
      },
      {
        "tm": 3,
        "topic": "Asersi Manajemen",
        "difficulty": "medium",
        "q": "Ketika auditor memeriksa bukti fisik keberadaan mesin pabrik di bengkel kerja untuk memastikan mesin yang tercatat di neraca benar-benar ada, auditor sedang menguji asersi...",
        "options": [
          "Kelengkapan (Completeness)",
          "Keberadaan (Existence)",
          "Hak dan Kewajiban (Rights and Obligations)",
          "Pisah Batas (Cutoff)"
        ],
        "answer": 1,
        "explanation": "Mencocokkan catatan buku ke fisik nyata menguji apakah aset yang dicatat benar-benar ada (keberadaan/existence)."
      },
      {
        "tm": 4,
        "topic": "Laporan Audit & Opini Auditor (SA 700)",
        "difficulty": "medium",
        "q": "Apabila laporan keuangan klien mengandung salah saji yang bersifat MATERIAL tetapi TIDAK PERVASIF, maka opini yang tepat diberikan auditor adalah...",
        "options": [
          "Opini Wajar Tanpa Pengecualian (Unmodified)",
          "Opini Wajar Dengan Pengecualian (Qualified Opinion)",
          "Opini Tidak Wajar (Adverse Opinion)",
          "Opini Tidak Menyatakan Pendapat (Disclaimer)"
        ],
        "answer": 1,
        "explanation": "Salah saji material namun tidak pervasif menghasilkan Opini Wajar Dengan Pengecualian (\"kecuali untuk dampak hal yang dijelaskan...\")."
      },
      {
        "tm": 5,
        "topic": "Materialitas Audit (SA 320)",
        "difficulty": "medium",
        "q": "Mengapa auditor menetapkan Materialitas Pelaksanaan (Performance Materiality) pada tingkat yang LEBIH RENDAH daripada Materialitas Laporan Keuangan secara Keseluruhan?",
        "options": [
          "Untuk mempercepat waktu penyelesaian audit di lapangan",
          "Untuk mengurangi ke tingkat rendah yang tepat probabilitas bahwa akumulasi salah saji yang tidak terdeteksi melebihi materialitas keseluruhan",
          "Untuk mematuhi instruksi manajemen klien dalam menekan biaya audit",
          "Untuk membatasi jumlah sampel dokumen yang diperiksa"
        ],
        "answer": 1,
        "explanation": "Performance materiality memberikan bantalan pengaman agar total salah saji kecil yang terakumulasi tidak melampaui batas materialitas keseluruhan."
      },
      {
        "tm": 6,
        "topic": "Bukti Audit & Prosedur Vouching (SA 500)",
        "difficulty": "medium",
        "q": "Prosedur audit yang menelusuri dari buku jurnal penjualan mundur ke faktur penjualan dan dokumen pengiriman barang (vouching) bertujuan utama menguji asersi...",
        "options": [
          "Kelengkapan (Completeness / Understatement)",
          "Keterjadian (Occurrence / Overstatement)",
          "Hak dan Kewajiban",
          "Klasifikasi Akun"
        ],
        "answer": 1,
        "explanation": "Vouching (dari jurnal ke dokumen sumber) mendeteksi transaksi fiktif atau pencatatan berlebih (menguji Keterjadian). Tracing menguji Kelengkapan."
      },
      {
        "tm": 7,
        "topic": "Prosedur Analitis (SA 520)",
        "difficulty": "medium",
        "q": "Dalam standar audit ISA, prosedur analitis DIWAJIBKAN untuk dilaksanakan pada dua tahapan audit berikut, yaitu...",
        "options": [
          "Tahap Perencanaan (Penilaian Risiko) dan Tahap Reviu Akhir (Penyelesaian Audit)",
          "Tahap Pengujian Pengendalian dan Tahap Pengujian Substantif Saldo",
          "Tahap Konfirmasi Eksternal dan Tahap Stock Opname",
          "Tahap Penerbitan Surat Manajemen dan Tahap Penagihan Invoice"
        ],
        "answer": 0,
        "explanation": "SA 520 mewajibkan prosedur analitis pada tahap penilaian risiko awal (perencanaan) dan tahap evaluasi menyeluruh sebelum opini final ditandatangani."
      }
    ],
    "uas": [
      {
        "tm": 8,
        "topic": "Perencanaan Audit & Pemahaman Klien",
        "difficulty": "medium",
        "q": "Surat tertulis resmi antara Kantor Akuntan Publik dan klien yang mendokumentasikan tujuan perikatan, ruang lingkup tanggung jawab, dan dasar penetapan honorarium disebut...",
        "options": [
          "Management Representation Letter",
          "Audit Engagement Letter (Surat Perikatan Audit)",
          "Management Letter",
          "Comfort Letter"
        ],
        "answer": 1,
        "explanation": "Engagement letter mengonfirmasi penerimaan penugasan dan mencegah kesalahpahaman antara auditor dan manajemen klien."
      },
      {
        "tm": 9,
        "topic": "Model Risiko Audit (SA 200)",
        "difficulty": "medium",
        "q": "Jika auditor menilai Inherent Risk (IR) dan Control Risk (CR) klien sangat TINGGI, maka untuk mempertahankan Acceptable Audit Risk (AAR) pada tingkat yang rendah, Planned Detection Risk (PDR) harus ditetapkan...",
        "options": [
          "Sangat Tinggi, sehingga pengujian substantif dikurangi",
          "Rendah, sehingga bukti audit substantif yang dikumpulkan harus LEBIH BANYAK dan meyakinkan",
          "Tidak berubah, karena risiko pengendalian tidak memengaruhi risiko deteksi",
          "Nol mutlak tanpa pengujian sampel"
        ],
        "answer": 1,
        "explanation": "PDR = AAR / (IR × CR). Jika IR dan CR tinggi, PDR harus rendah, yang mewajibkan auditor memperluas pengujian substantif."
      },
      {
        "tm": 10,
        "topic": "Pertimbangan Fraud (SA 240)",
        "difficulty": "medium",
        "q": "Tiga kondisi yang membentuk Segitiga Kecurangan (Fraud Triangle) menurut Donald Cressey adalah...",
        "options": [
          "Peluang, Keserakahan, dan Kebodohan",
          "Tekanan/Insentif, Peluang (Opportunity), dan Rasionalisasi/Sikap",
          "Kolusi, Kurangnya Pengawasan, dan Kompensasi Rendah",
          "Pemberontakan, Ketiadaan Dokumen, dan Otorisasi Ganda"
        ],
        "answer": 1,
        "explanation": "Fraud triangle terdiri dari Pressure/Incentive, Opportunity (kelemahan kontrol), dan Rationalization (pembenaran diri)."
      },
      {
        "tm": 11,
        "topic": "Pengendalian Internal COSO & Pemisahan Tugas",
        "difficulty": "medium",
        "q": "Untuk mencegah terjadinya kecurangan dan kesalahan, fungsi-fungsi berikut HARUS dipisahkan satu sama lain, KECUALI...",
        "options": [
          "Fungsi Otorisasi Transaksi",
          "Fungsi Pencatatan Akuntansi",
          "Fungsi Penyimpanan Fisik Aset (Custody)",
          "Fungsi Penyusunan Anggaran Operasional dan Perencanaan Strategis Pemasaran"
        ],
        "answer": 3,
        "explanation": "Pemisahan tugas kunci (Segregation of Duties) mewajibkan pemisahan antara: Otorisasi, Pencatatan, Kustodi aset, dan Rekonsiliasi independen."
      },
      {
        "tm": 12,
        "topic": "Pengujian Pengendalian (TOC) vs Substantif",
        "difficulty": "medium",
        "q": "Jika hasil pengujian pengendalian (Tests of Controls) membuktikan bahwa sistem pengendalian internal klien beroperasi sangat efektif sepanjang tahun, maka auditor dapat...",
        "options": [
          "Menaikkan penilaian risiko pengendalian (Control Risk) ke tingkat maksimum",
          "Mengurangi luas pengujian rincian saldo substantif (Tests of Details of Balances)",
          "Menerbitkan laporan opini wajar dengan pengecualian",
          "Menghilangkan seluruh prosedur audit kelangsungan usaha"
        ],
        "answer": 1,
        "explanation": "TOC yang memuaskan menurunkan Control Risk, menaikkan batas PDR, sehingga auditor dapat membatasi ukuran sampel pengujian substantif."
      },
      {
        "tm": 13,
        "topic": "Teknik Audit Berbantuan Komputer (CAATs)",
        "difficulty": "medium",
        "q": "Teknik audit sistem informasi di mana auditor memproses data transaksi uji buatan (mengandung kesalahan terencana) ke dalam program komputer klien untuk menguji kontrol aplikasi disebut...",
        "options": [
          "Parallel Simulation",
          "Test Data Approach",
          "Integrated Test Facility (ITF)",
          "Embedded Audit Module"
        ],
        "answer": 1,
        "explanation": "Test data approach menguji apakah kontrol validasi aplikasi klien mampu mendeteksi dan menolak data uji yang tidak valid."
      },
      {
        "tm": 14,
        "topic": "Review UAS Pengauditan I",
        "difficulty": "medium",
        "q": "Konfirmasi positif saldo piutang usaha yang dikirimkan auditor kepada debitur klien meminta responden untuk membalas...",
        "options": [
          "Hanya jika debitur tidak setuju dengan saldo piutang yang tercantum",
          "Baik jika setuju maupun jika tidak setuju dengan informasi saldo yang tercantum",
          "Hanya jika debitur telah melunasi seluruh kewajibannya",
          "Kepada manajemen klien secara langsung bukan ke auditor"
        ],
        "answer": 1,
        "explanation": "Konfirmasi Positif mensyaratkan balasan dalam kondisi apapun (setuju atau tidak setuju). Konfirmasi Negatif hanya dibalas jika ada selisih."
      }
    ]
  },
  "AKS301": {
    "courseName": "Sistem Informasi Akuntansi",
    "uts": [
      {
        "tm": 1,
        "topic": "SIA & Nilai Perusahaan",
        "difficulty": "medium",
        "q": "Karakteristik kualitatif fundamental informasi akuntansi yang berguna menurut konseptual framework adalah...",
        "options": [
          "Dapat dipahami dan tepat waktu",
          "Relevansi (Relevance) dan Penyajian Jujur (Faithful Representation)",
          "Keterbandingan dan dapat diverifikasi",
          "Ringkas dan bernilai moneter tinggi"
        ],
        "answer": 1,
        "explanation": "Dua kualitas fundamental informasi akuntansi adalah Relevansi (memiliki nilai prediktif/konfirmasi) dan Faithful Representation (lengkap, netral, bebas kesalahan)."
      },
      {
        "tm": 2,
        "topic": "Pemodelan Proses Bisnis (BPMN 2.0)",
        "difficulty": "medium",
        "q": "Dalam diagram BPMN, simbol belah ketupat dengan tanda silang di tengahnya merepresentasikan...",
        "options": [
          "Start Event",
          "Exclusive Gateway (XOR) di mana hanya satu jalur percabangan yang dipilih",
          "Parallel Gateway (AND) di mana seluruh jalur dikerjakan serentak",
          "Intermediate Timer Event"
        ],
        "answer": 1,
        "explanation": "Exclusive Gateway (XOR) membagi alur proses menjadi jalur alternatif yang saling meniadakan berdasarkan kondisi evaluasi."
      },
      {
        "tm": 3,
        "topic": "Pemodelan Data REA",
        "difficulty": "medium",
        "q": "Dalam kerangka kerja REA (Resources, Events, Agents), manakah yang dikelompokkan sebagai entitas \"Events\"?",
        "options": [
          "Kas dan Persediaan Barang Dagang",
          "Pesanan Penjualan dan Penerimaan Kas",
          "Pelanggan dan Kasir Toko",
          "Gudang dan Pabrik Produksi"
        ],
        "answer": 1,
        "explanation": "Events adalah transaksi atau aktivitas bisnis yang terjadi pada waktu tertentu, seperti Sales Order, Shipping, Cash Receipt."
      },
      {
        "tm": 4,
        "topic": "Basis Data Relasional & Normalisasi",
        "difficulty": "medium",
        "q": "Tabel relasional yang sudah memenuhi 1NF tetapi masih memiliki atribut non-kunci yang bergantung hanya pada sebagian kunci utama gabungan (partial dependency) belum memenuhi...",
        "options": [
          "Bentuk Normal Kedua (2NF)",
          "Bentuk Normal Ketiga (3NF)",
          "Integritas Referensial",
          "Bentuk Normal Boyce-Codd"
        ],
        "answer": 0,
        "explanation": "2NF mensyaratkan tidak ada partial functional dependency; seluruh atribut non-kunci harus bergantung penuh pada keseluruhan primary key."
      },
      {
        "tm": 5,
        "topic": "Siklus Pendapatan (Order-to-Cash)",
        "difficulty": "medium",
        "q": "Pengendalian preventif yang paling penting untuk mencegah pengiriman barang kepada pelanggan yang berisiko gagal bayar adalah...",
        "options": [
          "Mewajibkan staf gudang menandatangani picking slip",
          "Pemeriksaan dan otorisasi batas kredit secara independen oleh Departemen Kredit sebelum pesanan penjualan diproses",
          "Mengirimkan faktur penjualan sesegera mungkin",
          "Mengasuransikan seluruh pengiriman kargo"
        ],
        "answer": 1,
        "explanation": "Otorisasi kredit independen sebelum persetujuan pesanan mencegah timbulnya piutang tak tertagih akibat penjualan tanpa verifikasi kapasitas bayar."
      },
      {
        "tm": 6,
        "topic": "Siklus Pengeluaran (Procure-to-Pay)",
        "difficulty": "medium",
        "q": "Tiga dokumen yang wajib diverifikasi kecocokannya (Three-Way Matching) oleh staf Utang Usaha sebelum menyetujui pembayaran kas kepada pemasok adalah...",
        "options": [
          "Purchase Requisition, Sales Order, dan Cek Bank",
          "Purchase Order, Receiving Report (Laporan Penerimaan), dan Vendor Invoice (Faktur Pemasok)",
          "Packing Slip, Bill of Lading, dan Bukti Kas Masuk",
          "Daftar Pemasok, Voucher Pengeluaran Kas, dan Rekening Koran"
        ],
        "answer": 1,
        "explanation": "Three-way match membandingkan PO (otorisasi pesanan), Receiving Report (verifikasi fisik barang diterima), dan Vendor Invoice (tagihan harga)."
      },
      {
        "tm": 7,
        "topic": "Siklus Konversi & Review UTS SIA",
        "difficulty": "medium",
        "q": "Dokumen yang merinci jenis bahan baku, spesifikasi bagian, dan kuantitas eksak yang dibutuhkan untuk merakit satu unit produk jadi disebut...",
        "options": [
          "Route Sheet (Lembar Rute)",
          "Bill of Materials (BOM)",
          "Work Order (Perintah Kerja)",
          "Materials Requisition Form"
        ],
        "answer": 1,
        "explanation": "Bill of Materials (BOM) adalah daftar resep komponen teknis lengkap yang menyusun satu unit produk manufaktur."
      }
    ],
    "uas": [
      {
        "tm": 8,
        "topic": "Pengendalian Internal COSO",
        "difficulty": "medium",
        "q": "Komponen fondasi paling mendasar dalam kerangka kerja Pengendalian Internal COSO yang menetapkan suasana organisasi (tone at the top) dan nilai etika adalah...",
        "options": [
          "Risk Assessment (Penilaian Risiko)",
          "Control Environment (Lingkungan Pengendalian)",
          "Control Activities (Aktivitas Pengendalian)",
          "Monitoring Activities (Pemantauan)"
        ],
        "answer": 1,
        "explanation": "Control Environment adalah fondasi dari seluruh komponen COSO, mencakup integritas, nilai etika, filosofi manajemen, dan struktur organisasi."
      },
      {
        "tm": 9,
        "topic": "Keamanan Informasi & Kriptografi",
        "difficulty": "medium",
        "q": "Tanda Tangan Digital (Digital Signature) memberikan jaminan hukum bahwa pengirim tidak dapat menyangkal telah mengirimkan dokumen transaksi tersebut. Prinsip keamanan ini disebut...",
        "options": [
          "Confidentiality (Kerahasiaan)",
          "Non-repudiation (Anti-penyangkalan)",
          "Availability (Ketersediaan)",
          "Authorization (Otorisasi)"
        ],
        "answer": 1,
        "explanation": "Non-repudiation menjamin pembuktian kriptografis bahwa pengirim memegang kunci privat yang menandatangani hash dokumen secara sah."
      },
      {
        "tm": 10,
        "topic": "Audit SI & Tata Kelola IT (COBIT)",
        "difficulty": "medium",
        "q": "Metode audit sistem informasi di mana auditor membuat entitas atau rekening tiruan di dalam basis data live klien untuk menguji pemrosesan transaksi berdampingan dengan transaksi riil disebut...",
        "options": [
          "Test Data Approach",
          "Parallel Simulation",
          "Integrated Test Facility (ITF)",
          "Embedded Audit Module"
        ],
        "answer": 2,
        "explanation": "ITF mengintegrasikan dummy entity ke dalam sistem live perusahaan untuk menguji sistem secara berkelanjutan."
      },
      {
        "tm": 11,
        "topic": "Analitika Data Akuntansi & Big Data",
        "difficulty": "medium",
        "q": "Dalam model siklus analitika data akuntansi IMPACT, huruf \"P\" merepresentasikan tahapan...",
        "options": [
          "Publish the findings",
          "Perform test plan (melaksanakan pengujian analitis data)",
          "Prepare the financial statements",
          "Protect client data"
        ],
        "answer": 1,
        "explanation": "IMPACT: Identify questions, Master the data, Perform test plan, Address results, Communicate insights, Track outcomes."
      },
      {
        "tm": 12,
        "topic": "Robotic Process Automation (RPA)",
        "difficulty": "medium",
        "q": "Karakteristik proses bisnis akuntansi yang PALING COCOK untuk diotomatisasi menggunakan perangkat lunak bot RPA adalah...",
        "options": [
          "Proses negosiasi kontrak kredit dengan debitur bermasalah",
          "Proses rekonsiliasi mutasi rekening koran bank dengan buku besar yang terstruktur dan berbasis aturan baku",
          "Proses wawancara calon auditor internal baru",
          "Proses penentuan estimasi penurunan nilai aset yang memerlukan pertimbangan subjektif"
        ],
        "answer": 1,
        "explanation": "RPA ideal untuk tugas-tugas administratif bervolume tinggi yang berbasis aturan baku (rule-based), terstruktur, dan minim pengecualian."
      },
      {
        "tm": 13,
        "topic": "Blockchain & Triple-Entry Accounting",
        "difficulty": "medium",
        "q": "Bagaimana teknologi Blockchain mewujudkan konsep Triple-Entry Accounting dalam dunia akuntansi?",
        "options": [
          "Mewajibkan pencatatan debit, kredit, dan ekuitas di buku kas",
          "Setiap transaksi ekonomi diverifikasi kriptografis dan dicatat serentak pada distributed ledger publik bersama yang tidak dapat dimanipulasi (immutable)",
          "Mengharuskan tiga akuntan independen menandatangani setiap jurnal voucher",
          "Membuat tiga salinan cadangan basis data di lokasi berbeda"
        ],
        "answer": 1,
        "explanation": "Triple-entry accounting mencatat transaksi pada distributed ledger bersama secara kriptografis sehingga memvalidasi pencatatan kedua pihak secara otomatis."
      },
      {
        "tm": 14,
        "topic": "Review UAS Sistem Informasi Akuntansi",
        "difficulty": "medium",
        "q": "Kelemahan desain sistem di mana seluruh operasional perusahaan bergantung pada satu server tunggal atau satu staf tanpa adanya cadangan atau pengganti disebut...",
        "options": [
          "Single Point of Failure (SPOF)",
          "Separation of Duties (SoD)",
          "Distributed Denial of Service",
          "Man-in-the-Middle Attack"
        ],
        "answer": 0,
        "explanation": "SPOF (Single Point of Failure) adalah kerentanan arsitektur di mana kegagalan satu komponen kontrol/sumber daya dapat melumpuhkan seluruh sistem."
      }
    ]
  }
};
