// scripts/build-sem3-quiz-data.mjs
import fs from 'node:fs';
import path from 'node:path';

function q(tm, topic, question, options, answer, explanation, difficulty = 'medium') {
  return {
    tm,
    topic,
    difficulty,
    q: question,
    options,
    answer,
    explanation
  };
}

const QUIZ_SPEC = {
  AKK202: {
    courseName: 'Akuntansi Keuangan Menengah II',
    uts: [
      q(1, 'Aset Tetap & Properti Investasi', 'Menurut PSAK 16, manakah dari pos berikut yang TIDAK boleh dimasukkan sebagai komponen biaya perolehan mesin pabrik?', [
        'Biaya pengiriman dan penanganan awal mesin',
        'Biaya instalasi pondasi dan perakitan teknis mesin',
        'Biaya pelatihan operator mesin dan pemotongan pita peresmian',
        'Estimasi biaya pembongkaran mesin pada akhir masa manfaat'
      ], 2, 'Biaya pembukaan fasilitas baru, biaya pengenalan produk baru (iklan), dan biaya pelatihan staf BUKAN komponen harga perolehan aset tetap.'),
      q(1, 'Aset Tetap & Properti Investasi', 'PT Sejahtera membeli tanah dan bangunan tua seharga Rp 1.000.000.000 dengan niat langsung merobohkan gedung lama dan membangun gedung kantor baru. Biaya perobohan gedung lama sebesar Rp 80.000.000 dan hasil penjualan sisa material Rp 15.000.000. Berapakah jumlah yang dikapitalisasi ke akun Tanah?', [
        'Rp 1.000.000.000',
        'Rp 1.065.000.000',
        'Rp 1.080.000.000',
        'Rp 1.095.000.000'
      ], 1, 'Biaya bersih pembongkaran gedung lama (Rp 80 jt - Rp 15 jt = Rp 65 jt) dikapitalisasi ke akun Tanah: Rp 1.000 jt + Rp 65 jt = Rp 1.065.000.000.'),
      q(2, 'Kos Setelah Akuisisi & Pelepasan Aset', 'Pengeluaran sebesar Rp 150.000.000 untuk merombak total mesin produksi yang berhasil memperpanjang masa manfaat mesin dari 3 tahun menjadi 7 tahun harus diperlakukan sebagai...', [
        'Beban pemeliharaan rutin pada Laporan Laba Rugi',
        'Capital expenditure yang menambah nilai tercatat mesin',
        'Pengurang saldo akumulasi penyusutan secara proporsional',
        'Beban tangguhan yang diamortisasi selama 4 tahun'
      ], 1, 'Pengeluaran yang memperpanjang masa manfaat atau meningkatkan kapasitas/efisiensi aset dikapitalisasi sebagai pengeluaran modal (capital expenditure).'),
      q(3, 'Penyusutan & Deplesi Sumber Daya Alam', 'Peralatan dibeli 1 Januari 2024 seharga Rp 120.000.000 dengan estimasi umur 5 tahun dan nilai sisa Rp 20.000.000. Menggunakan metode saldo menurun ganda (double declining balance), berapakah beban penyusutan tahun 2024?', [
        'Rp 20.000.000',
        'Rp 24.000.000',
        'Rp 40.000.000',
        'Rp 48.000.000'
      ], 3, 'Tarif DDB = (100% / 5) × 2 = 40%. Beban penyusutan tahun pertama = 40% × Rp 120.000.000 = Rp 48.000.000 (nilai sisa tidak dikurangkan pada awal kalkulasi DDB).'),
      q(4, 'Penurunan Nilai Aset (PSAK 48)', 'Sebuah unit mesin memiliki nilai tercatat Rp 500.000.000. Nilai wajar dikurangi biaya pelepasan adalah Rp 420.000.000 dan nilai pakainya (value in use) adalah Rp 450.000.000. Berapakah rugi penurunan nilai yang wajib diakui?', [
        'Rp 0 (tidak ada penurunan nilai)',
        'Rp 50.000.000',
        'Rp 80.000.000',
        'Rp 30.000.000'
      ], 1, 'Recoverable amount adalah yang lebih tinggi antara FVLCOD (420 jt) dan Value in Use (450 jt) = Rp 450 jt. Rugi penurunan nilai = Nilai tercatat (500 jt) - Recoverable amount (450 jt) = Rp 50.000.000.'),
      q(5, 'Aset Tidak Berwujud (PSAK 19)', 'Manakah pernyataan yang paling tepat mengenai perlakuan akuntansi biaya riset dan pengembangan (R&D)?', [
        'Biaya riset dan pengembangan seluruhnya dikapitalisasi sebagai aset tidak berwujud',
        'Biaya riset seluruhnya dibebankan seketika; biaya pengembangan dikapitalisasi jika memenuhi kriteria kelayakan teknis dan komersial',
        'Biaya riset dan pengembangan seluruhnya dibebankan langsung pada saat terjadinya',
        'Biaya riset dikapitalisasi; biaya pengembangan dibebankan langsung'
      ], 1, 'Sesuai PSAK 19, biaya riset selalu diakui sebagai beban pada periode terjadinya. Biaya pengembangan dikapitalisasi HANYA jika memenuhi 6 kriteria kelayakan (PIRATE).'),
      q(6, 'Liabilitas Jangka Pendek', 'Pada tanggal 1 November 2024, PT Prima menerbitkan wesel bayar tanpa bunga 6 bulan bernilai nominal Rp 100.000.000 kepada bank dengan tingkat diskonto pasar 12%. Kas bersih yang diterima PT Prima pada 1 November adalah...', [
        'Rp 100.000.000',
        'Rp 94.000.000',
        'Rp 88.000.000',
        'Rp 96.000.000'
      ], 1, 'Diskonto wesel = Rp 100.000.000 × 12% × (6/12) = Rp 6.000.000. Kas yang diterima = Rp 100 jt - Rp 6 jt = Rp 94.000.000.'),
      q(7, 'Provisi & Kontinjensi (PSAK 57)', 'PT Garansi menjual produk elektronik dengan estimasi klaim garansi sebesar 3% dari penjualan. Pada tahun 2024, penjualan tercatat Rp 2.000.000.000 dan klaim perbaikan riil yang telah dibayarkan Rp 40.000.000. Berapakah saldo akhir liabilitas garansi jika saldo awal nol?', [
        'Rp 0',
        'Rp 20.000.000',
        'Rp 40.000.000',
        'Rp 60.000.000'
      ], 1, 'Beban garansi diakui = 3% × Rp 2.000.000.000 = Rp 60.000.000. Saldo liabilitas garansi = Rp 60 jt - pembayaran riil Rp 40 jt = Rp 20.000.000.')
    ],
    uas: [
      q(8, 'Liabilitas Jangka Panjang & Obligasi', 'Jika tingkat suku bunga kupon obligasi (stated rate) adalah 8% per tahun, sedangkan suku bunga efektif pasar adalah 10% per tahun, maka obligasi tersebut akan diterbitkan pada...', [
        'Nilai nominal (par value)',
        'Nilai diskonto (discount)',
        'Nilai premium',
        'Nilai jatuh tempo tanpa amortisasi'
      ], 1, 'Jika stated rate (8%) < market rate (10%), investor menuntut imbal hasil lebih tinggi sehingga obligasi dijual di bawah nilai nominal (diskonto).'),
      q(9, 'Amortisasi Bunga Efektif Obligasi', 'Obligasi bernilai nominal Rp 1.000.000.000 diterbitkan pada harga Rp 950.000.000. Kupon kontraktual 8% dibayar tahunan. Tingkat bunga efektif pasar 9%. Berapakah beban bunga pada tahun pertama?', [
        'Rp 80.000.000',
        'Rp 85.500.000',
        'Rp 90.000.000',
        'Rp 95.000.000'
      ], 1, 'Beban bunga = Nilai tercatat awal (Rp 950.000.000) × suku bunga efektif (9%) = Rp 85.500.000. Amortisasi diskonto = Rp 85.5 jt - Rp 80 jt = Rp 5.500.000.'),
      q(10, 'Ekuitas & Saham Treasuri', 'PT Mandiri membeli kembali 10.000 lembar saham biasanya sendiri (nominal Rp 1.000) di pasar reguler seharga Rp 2.500 per lembar menggunakan metode biaya (cost method). Jurnal yang benar adalah...', [
        'Debit: Modal Saham Biasa Rp 10 jt, Agio Saham Rp 15 jt; Kredit: Kas Rp 25 jt',
        'Debit: Saham Treasuri Rp 25.000.000; Kredit: Kas Rp 25.000.000',
        'Debit: Investasi Saham Rp 25.000.000; Kredit: Kas Rp 25.000.000',
        'Debit: Saldo Laba Rp 25.000.000; Kredit: Kas Rp 25.000.000'
      ], 1, 'Dalam cost method, pembelian saham treasuri dicatat sebesar kas yang dibayarkan ke akun Saham Treasuri (kontra ekuitas): Debit Saham Treasuri Rp 25 jt; Kredit Kas Rp 25 jt.'),
      q(11, 'Kebijakan Dividen & Pemecahan Saham', 'Pada tanggal pengumuman dividen kas (declaration date), dampak transaksi terhadap posisi keuangan perusahaan adalah...', [
        'Total aset berkurang dan total ekuitas berkurang',
        'Total liabilitas bertambah dan total ekuitas berkurang',
        'Total aset berkurang dan total liabilitas berkurang',
        'Tidak ada perubahan pada aset, liabilitas, maupun ekuitas'
      ], 1, 'Tanggal pengumuman mendebit Saldo Laba (menurunkan ekuitas) dan mengkredit Utang Dividen (menambah liabilitas). Kas baru berkurang pada tanggal pembayaran.'),
      q(12, 'Sekuritas Dilutif & Opsi Saham', 'Sesuai PSAK 71 dan PSAK 56, instrumen obligasi konversi yang diterbitkan oleh perusahaan harus dicatat menggunakan metode akuntansi...', [
        'Seluruhnya diakui sebagai Liabilitas Jangka Panjang',
        'Seluruhnya diakui sebagai Ekuitas Saham Biasa',
        'Pemisahan komponen liabilitas dan ekuitas (split accounting)',
        'Dicatat sebagai derivatif pada nilai wajar melalui laba rugi'
      ], 2, 'Penerbit obligasi konversi wajib memisahkan nilai komponen liabilitas (PV arus kas kontraktual) dari komponen ekuitas (opsi konversi residual).'),
      q(13, 'Laba Per Saham (EPS - PSAK 56)', 'PT Berlian memiliki laba bersih Rp 500.000.000. Dividen saham preferen kumulatif yang menjadi hak tahun berjalan adalah Rp 50.000.000. Rata-rata tertimbang saham biasa beredar adalah 100.000 lembar. Basic EPS adalah...', [
        'Rp 5.000 per lembar',
        'Rp 4.500 per lembar',
        'Rp 5.500 per lembar',
        'Rp 4.000 per lembar'
      ], 1, 'Basic EPS = (Laba Bersih - Dividen Saham Preferen) / WANOS = (Rp 500 jt - Rp 50 jt) / 100.000 lembar = Rp 4.500 per lembar.'),
      q(14, 'Investasi Efek Utang & Ekuitas (PSAK 71)', 'Investasi pada saham entitas lain sebesar 30% hak suara yang memberikan pengaruh signifikan harus dicatat menggunakan...', [
        'Metode Nilai Wajar melalui Laba Rugi (FVTPL)',
        'Metode Biaya Perolehan Diamortisasi (Amortised Cost)',
        'Metode Ekuitas (Equity Method - PSAK 15)',
        'Konsolidasi penuh sebagai entitas anak'
      ], 2, 'Kepemilikan saham antara 20% hingga 50% menimbulkan pengaruh signifikan (significant influence) dan wajib menggunakan Metode Ekuitas (PSAK 15).')
    ]
  },
  AKM202: {
    courseName: 'Akuntansi Manajemen',
    uts: [
      q(1, 'Konsep Dasar Akuntansi Manajemen', 'Manakah karakteristik yang membedakan Akuntansi Manajemen dari Akuntansi Keuangan?', [
        'Akuntansi manajemen berorientasi pada masa lalu untuk kepatuhan SAK',
        'Akuntansi manajemen fokus pada kebutuhan internal manajemen dan tidak terikat standar baku akuntansi eksternal',
        'Akuntansi manajemen wajib diaudit oleh Kantor Akuntan Publik independen',
        'Akuntansi manajemen menyajikan informasi ringkas untuk seluruh entitas tanpa pelaporan segmen'
      ], 1, 'Akuntansi manajemen dirancang untuk pengambilan keputusan internal, berorientasi masa depan, dan sangat fleksibel tanpa kewajiban tunduk pada SAK/PABU.'),
      q(2, 'Perilaku Biaya & CVP', 'PT Surya menjual produk seharga Rp 50.000 per unit dengan biaya variabel Rp 30.000 per unit. Biaya tetap tahunan adalah Rp 400.000.000. Berapakah volume penjualan (dalam unit) untuk mencapai titik impas (BEP)?', [
        '8.000 unit',
        '13.333 unit',
        '20.000 unit',
        '25.000 unit'
      ], 2, 'CM per unit = Rp 50.000 - Rp 30.000 = Rp 20.000. BEP Unit = Biaya Tetap / CM per unit = Rp 400.000.000 / Rp 20.000 = 20.000 unit.'),
      q(2, 'Perilaku Biaya & CVP', 'Jika perusahaan memiliki Degree of Operating Leverage (DOL) sebesar 4 pada tingkat penjualan saat ini, maka kenaikan penjualan sebesar 10% akan mengakibatkan kenaikan laba bersih operasi sebesar...', [
        '4%',
        '14%',
        '25%',
        '40%'
      ], 3, '% Kenaikan Laba Bersih = DOL × % Kenaikan Penjualan = 4 × 10% = 40%.'),
      q(3, 'Variable Costing vs Absorption Costing', 'Pada tahun di mana jumlah unit yang diproduksi LEBIH BESAR daripada jumlah unit yang terjual, maka...', [
        'Laba bersih Absorption Costing lebih tinggi daripada Variable Costing',
        'Laba bersih Variable Costing lebih tinggi daripada Absorption Costing',
        'Laba bersih kedua metode akan tepat sama',
        'Terjadi selisih varians volume yang tidak dapat direkonsiliasi'
      ], 0, 'Ketika produksi > penjualan, sebagian BOP tetap tertunda di dalam persediaan akhir pada metode absorption costing, sehingga HPP lebih rendah dan laba bersih lebih tinggi.'),
      q(4, 'Activity-Based Management', 'Dalam hierarki biaya ABC, aktivitas perancangan ulang cetakan produk (product redesign) dan perolehan sertifikasi produk termasuk dalam kelompok...', [
        'Unit-level activities',
        'Batch-level activities',
        'Product-level activities',
        'Facility-sustaining activities'
      ], 2, 'Aktivitas yang mendukung lini produk tertentu tanpa tergantung pada volume unit atau batch diklasifikasikan sebagai product-level activities.'),
      q(5, 'Master Budgeting', 'PT Sentosa memproyeksikan penjualan kuartal I sebanyak 10.000 unit. Kebijakan persediaan akhir barang jadi ditetapkan sebesar 20% dari penjualan kuartal berikutnya (kuartal II: 15.000 unit). Persediaan awal adalah 2.000 unit. Berapakah unit yang harus diproduksi?', [
        '9.000 unit',
        '11.000 unit',
        '13.000 unit',
        '15.000 unit'
      ], 1, 'Unit Diproduksi = Target Penjualan (10.000) + Persediaan Akhir (20% × 15.000 = 3.000) - Persediaan Awal (2.000) = 11.000 unit.'),
      q(6, 'Biaya Standar & Analisis Varians', 'Untuk memproduksi 1 unit produk dibutuhkan standar bahan 2 kg @ Rp 10.000. Selama periode berjalan, dibeli dan digunakan 2.200 kg bahan seharga Rp 20.900.000 untuk menghasilkan 1.000 unit produk. Materials Price Variance (MPV) adalah...', [
        'Rp 1.100.000 Favorable',
        'Rp 1.100.000 Unfavorable',
        'Rp 2.000.000 Favorable',
        'Rp 900.000 Unfavorable'
      ], 0, 'Harga aktual per kg = Rp 20.900.000 / 2.200 = Rp 9.500. MPV = AQ × (AP - SP) = 2.200 × (Rp 9.500 - Rp 10.000) = Rp 1.100.000 Favorable (karena harga beli aktual lebih murah).'),
      q(7, 'Review Pra-UTS Akmen', 'Sebuah perusahaan memiliki beberapa segmen bisnis. Manakah biaya yang TIDAK boleh dialokasikan ke segmen individual saat menghitung Segment Margin?', [
        'Biaya iklan khusus divisi yang dapat ditelusuri',
        'Gaji manajer operasional cabang',
        'Gaji Direktur Utama korporat dan biaya pemeliharaan kantor pusat',
        'Penyusutan peralatan khusus lini produk'
      ], 2, 'Common fixed costs (seperti beban kantor pusat korporat) tidak boleh dialokasikan ke segmen individu karena tidak hilang jika segmen ditutup.')
    ],
    uas: [
      q(8, 'Desentralisasi & Kinerja Manajerial', 'Divisi Timur memiliki laba operasi Rp 120.000.000 dan rata-rata aset operasi Rp 600.000.000. Jika tingkat pengembalian minimum yang disyaratkan perusahaan adalah 15%, berapakah Residual Income (RI) divisi tersebut?', [
        'Rp 12.000.000',
        'Rp 30.000.000',
        'Rp 90.000.000',
        'Rp 20.000.000'
      ], 1, 'Return minimum = 15% × Rp 600.000.000 = Rp 90.000.000. RI = Laba Operasi (Rp 120 jt) - Return Minimum (Rp 90 jt) = Rp 30.000.000.'),
      q(9, 'Transfer Pricing Antar Divisi', 'Divisi A memproduksi suku cadang dengan biaya variabel Rp 18.000 dan biaya tetap Rp 7.000. Harga pasar luar Rp 30.000. Jika Divisi A memiliki KAPASITAS MENGANGGUR, berapakah batas bawah harga transfer yang dapat diterima Divisi A?', [
        'Rp 18.000',
        'Rp 25.000',
        'Rp 30.000',
        'Rp 12.000'
      ], 0, 'Saat ada kapasitas menganggur, Opportunity Cost = 0. Batas bawah harga transfer = Biaya Variabel per unit = Rp 18.000.'),
      q(10, 'Analisis Biaya Relevan & Keputusan Taktis', 'PT Logam menerima tawaran pesanan khusus 2.000 unit @ Rp 45.000. Harga jual normal Rp 70.000 dengan biaya variabel Rp 35.000 dan alokasi biaya tetap Rp 20.000. Perusahaan memiliki kapasitas menganggur. Apakah pesanan harus diterima?', [
        'Ditolak, karena harga tawaran Rp 45.000 lebih rendah dari total biaya Rp 55.000',
        'Diterima, karena memberikan tambahan laba kontribusi sebesar Rp 20.000.000',
        'Ditolak, karena merusak reputasi harga normal perusahaan',
        'Diterima, karena seluruh biaya tetap akan terserap habis'
      ], 1, 'Tambahan pendapatan = Rp 45.000; Tambahan biaya variabel = Rp 35.000. Tambahan margin kontribusi = Rp 10.000 per unit × 2.000 unit = Rp 20.000.000 (biaya tetap tidak berubah).'),
      q(11, 'Penetapan Harga & Target Costing', 'Manakah urutan proses yang benar dalam pendekatan Target Costing?', [
        'Desain produk → Hitung biaya manufaktur → Tambahkan markup laba → Tentukan harga jual',
        'Riset pasar tentukan harga jual kompetitif → Tentukan target laba → Tetapkan target cost → Desain produk memenuhi target cost',
        'Tentukan target laba → Desain produk → Hitung alokasi biaya bersama → Rilis produk',
        'Analisis biaya historis → Tambahkan inflasi → Tetapkan harga penawaran'
      ], 1, 'Target Costing berorientasi pasar: Target Cost = Antisipasi Harga Pasar - Target Laba yang Diinginkan.'),
      q(12, 'Investasi Modal (Capital Budgeting)', 'Sebuah proyek memerlukan investasi awal Rp 200.000.000 dan menghasilkan arus kas masuk tahunan Rp 60.000.000 selama 5 tahun. Jika biaya modal 10% (Faktor Anuitas PV 5 tahun, 10% = 3,791), berapakah Net Present Value (NPV)?', [
        'Rp 27.460.000',
        'Rp 30.000.000',
        'Rp (15.000.000)',
        'Rp 100.000.000'
      ], 0, 'PV Arus Kas = Rp 60.000.000 × 3,791 = Rp 227.460.000. NPV = Rp 227.460.000 - Rp 200.000.000 = Rp 27.460.000 (NPV positif, proyek layak diterima).'),
      q(13, 'Lean Operations & Biaya Kualitas', 'Biaya penarikan produk cacat dari pasar (product recall) dan biaya penyelesaian tuntutan hukum pelanggan termasuk dalam kategori biaya kualitas...', [
        'Prevention costs (biaya pencegahan)',
        'Appraisal costs (biaya penilaian)',
        'Internal failure costs (kegagalan internal)',
        'External failure costs (kegagalan eksternal)'
      ], 3, 'External failure costs adalah biaya kualitas yang timbul setelah produk cacat sampai ke tangan pelanggan (klaim garansi, recall, penanganan komplain).'),
      q(14, 'Environmental Management Accounting', 'Manakah dari pos berikut yang merupakan fokus utama dari Physical Environmental Management Accounting (P-EMA)?', [
        'Denda moneter akibat pelanggaran baku mutu limbah cair',
        'Aliran fisik material: konsumsi kilowatt jam listrik, volume kubik air, dan metrik ton limbah padat',
        'Pendapatan penjualan atas produk daur ulang',
        'Penyusutan instalasi pengolahan air limbah (IPAL)'
      ], 1, 'P-EMA melacak aliran fisik energi, air, bahan baku, emisi, dan limbah dalam unit non-moneter.')
    ]
  },
  AKS201: {
    courseName: 'Akuntansi Sektor Publik',
    uts: [
      q(1, 'Karakteristik Sektor Publik', 'Ciri utama yang membedakan organisasi sektor publik dari sektor privat adalah...', [
        'Sektor publik bertujuan memaksimumkan laba bagi pemangku kepentingan',
        'Sektor publik didanai dari pajak/retribusi dan berorientasi pada pelayanan masyarakat',
        'Sektor publik memiliki kepemilikan modal saham yang diperjualbelikan di bursa',
        'Sektor publik tidak diwajibkan menyusun laporan keuangan tahunan'
      ], 1, 'Sektor publik berorientasi pada pelayanan publik (public service) dan didanai melalui otoritas perpajakan serta penerimaan negara.'),
      q(2, 'Regulasi Sektor Publik & ISAK 35', 'Berdasarkan ISAK 35, aset neto entitas nirlaba diklasifikasikan ke dalam...', [
        'Aset Neto Terikat Permanen dan Terikat Temporer',
        'Modal Disetor dan Saldo Laba',
        'Aset Neto Tanpa Pembatasan dan Aset Neto Dengan Pembatasan',
        'Ekuitas Dana Lancar dan Ekuitas Dana Investasi'
      ], 2, 'ISAK 35 menyederhanakan klasifikasi aset neto menjadi dua: (1) Tanpa Pembatasan dari pemberi sumber daya, dan (2) Dengan Pembatasan.'),
      q(3, 'Standar Akuntansi Pemerintahan (PP 71/2010)', 'PP No. 71 Tahun 2010 menetapkan penerapan Standar Akuntansi Pemerintahan berbasis...', [
        'Kas Murni (Cash Basis)',
        'Kas Menuju Akrual (Cash toward Accrual)',
        'Akrual Penuh (Full Accrual Basis)',
        'Modifikasi Nilai Pasar Wajar'
      ], 2, 'PP 71/2010 secara resmi mewajibkan SAP Berbasis Akrual penuh bagi seluruh instansi pemerintah di Indonesia.'),
      q(4, 'Sistem Penganggaran Sektor Publik', 'Kelemahan utama dari sistem penganggaran tradisional berbasis mata anggaran (line-item budgeting) adalah...', [
        'Sangat rumit dalam perhitungan matematis',
        'Bersifat inkremental dan tidak mengaitkan alokasi dana dengan kinerja nyata output',
        'Memerlukan evaluasi program dari titik nol setiap tahun anggaran',
        'Tidak memiliki kontrol hukum atas pengeluaran belanja'
      ], 1, 'Line-item budgeting cenderung inkremental (menaikkan persentase pagu tahun lalu) tanpa mengevaluasi efektivitas dan efisiensi capaian kinerja riil.'),
      q(5, 'Teknik Akuntansi Dana & Komitmen', 'Pemerintah membukukan komitmen belanja pada saat pesanan resmi diterbitkan dengan tujuan...', [
        'Memastikan kas langsung berkurang di rekening bank penerima',
        'Mengendalikan anggaran agar realisasi belanja tidak melebihi sisa pagu anggaran DIPA/DPA',
        'Menghitung beban penyusutan aset pemerintah',
        'Membatalkan hak tagih vendor rekanan proyek'
      ], 1, 'Akuntansi komitmen (encumbrance/commitment accounting) memantau sisa pagu anggaran yang telah terikat kontrak agar tidak terjadi overspending.'),
      q(6, 'Laporan Keuangan SAP Akrual', 'Laporan yang menyajikan ikhtisar sumber, alokasi, dan pemakaian sumber daya keuangan kas yang dikelola oleh pemerintah selama satu periode pelaporan adalah...', [
        'Laporan Operasional (LO)',
        'Laporan Realisasi Anggaran (LRA)',
        'Laporan Perubahan Ekuitas (LPE)',
        'Neraca Keuangan Pemerintah'
      ], 1, 'LRA menyajikan perbandingan anggaran dengan realisasi pendapatan-LRA, belanja, dan pembiayaan berbasis kas.'),
      q(7, 'Perbedaan Belanja vs Beban', 'Pengeluaran kas daerah untuk membayar tagihan listrik kantor dinas bulan berjalan dicatat dalam laporan keuangan pemerintah sebagai...', [
        'Belanja Barang pada LRA dan Beban Barang dan Jasa pada Laporan Operasional (LO)',
        'Belanja Modal pada LRA dan Penambahan Aset Tetap pada Neraca',
        'Beban Lain-Lain pada LO tanpa pencatatan pada LRA',
        'Pengeluaran Pembiayaan pada LRA'
      ], 0, 'Pembayaran operasional rutin dicatat ganda: Belanja Barang pada LRA (basis kas) dan Beban Barang dan Jasa pada LO (basis akrual).')
    ],
    uas: [
      q(8, 'SAPP & SAPD (Permendagri 77/2020)', 'Dalam struktur akuntansi keuangan daerah, hubungan antara PPKD (selaku BUD) dan SKPD dicatat menggunakan akun timbal balik (reciprocal accounts) yaitu...', [
        'Utang Usaha dan Piutang Usaha',
        'Rekening Koran (RK) PPKD dan Rekening Koran (RK) SKPD',
        'Kas di Kasda dan Modal Kerja SKPD',
        'Pendapatan Transfer dan Beban Transfer'
      ], 1, 'Akun RK PPKD (di buku SKPD) dan RK SKPD (di buku PPKD) mencerminkan hubungan kantor pusat dan kantor cabang dalam konsolidasi LKPD.'),
      q(9, 'Pengukuran Kinerja & Value for Money', 'Jika sebuah dinas berhasil membangun puskesmas dengan biaya 10% lebih rendah dari pagu anggaran namun spesifikasi bangunan tetap sesuai standar, maka dinas tersebut dinilai memenuhi prinsip...', [
        'Efektivitas (Effectiveness)',
        'Ekonomis (Economy)',
        'Akuntabilitas Hukum',
        'Universalitas Fiskal'
      ], 1, 'Prinsip Ekonomis (Economy) mengukur kehematan perolehan input sumber daya pada harga terbaik tanpa mengorbankan kualitas standar.'),
      q(10, 'Audit Sektor Publik & BPK RI', 'Laporan keuangan pemerintah daerah yang disajikan wajar dalam semua hal yang material sesuai Standar Akuntansi Pemerintahan akan memperoleh opini BPK...', [
        'Wajar Dengan Pengecualian (WDP)',
        'Wajar Tanpa Pengecualian (WTP)',
        'Tidak Wajar (Adverse)',
        'Tidak Menyatakan Pendapat (Disclaimer)'
      ], 1, 'Opini Wajar Tanpa Pengecualian (WTP) diberikan jika LK menyajikan secara wajar seluruh hal material sesuai SAP, SPI andal, dan patuh regulasi.'),
      q(11, 'Akuntansi Keuangan Desa (UU 6/2014)', 'Aplikasi resmi yang dikembangkan BPKP dan Kemendagri untuk pengelolaan keuangan dan akuntansi desa di Indonesia adalah...', [
        'SAKTI',
        'SPAN',
        'SISKEUDES',
        'SIMDA BPKAD'
      ], 2, 'SISKEUDES (Sistem Informasi Keuangan Desa) digunakan oleh puluhan ribu desa di Indonesia untuk menyusun APBDesa dan laporan pertanggungjawaban.'),
      q(12, 'Badan Layanan Umum (BLU/BLUD)', 'Fleksibilitas utama pengelolaan keuangan yang dimiliki oleh PTN-BLU dan RSUD-BLUD berdasarkan PP 23/2005 adalah...', [
        'Bebas dari kewajiban pemeriksaan oleh BPK RI',
        'Pendapatan fungsional non-pajak dari jasa layanan dapat langsung digunakan untuk belanja operasional tanpa disetor terlebih dahulu ke kas negara/daerah',
        'Dapat menerbitkan obligasi daerah tanpa persetujuan DPR/DPRD',
        'Tidak wajib menyusun laporan keuangan berbasis akrual'
      ], 1, 'BLU/BLUD memiliki fleksibilitas menggunakan langsung pendapatan tarif layanannya untuk mendanai operasional pelayanan publik secara mandiri.'),
      q(13, 'Isu Kontemporer Pengadaan Publik', 'Digitalisasi pengadaan barang dan jasa pemerintah yang dilakukan melalui sistem e-Purchasing pada portal resmi LKPP disebut...', [
        'e-Faktur Pajak',
        'e-Katalog LKPP',
        'Aplikasi SPAN',
        'Aplikasi SAKIP'
      ], 1, 'e-Katalog LKPP memuat daftar barang/jasa terstandardisasi beserta harganya untuk mempermudah belanja pemerintah secara transparan dan akuntabel.'),
      q(14, 'Review UAS Sektor Publik', 'Apabila BPK menemukan kelemahan material pada sistem pengendalian internal dan pembatasan lingkup pemeriksaan yang sangat pervasif pada kementerian, maka opini yang diterbitkan adalah...', [
        'Wajar Tanpa Pengecualian dengan Paragraf Penjelas',
        'Wajar Dengan Pengecualian',
        'Tidak Menyatakan Pendapat (Disclaimer)',
        'Opini Terbatas'
      ], 2, 'Jika pembatasan bukti bersifat material dan pervasif, BPK akan menyatakan Menolak Memberikan Opini (Disclaimer).')
    ]
  },
  PJK202: {
    courseName: 'Perpajakan II',
    uts: [
      q(1, 'Konsep PPh & Biaya 3M', 'Manakah dari biaya berikut ini yang TIDAK BOLEH dikurangkan dari penghasilan bruto (non-deductible expense) berdasarkan Pasal 9 UU PPh?', [
        'Biaya pembelian bahan baku produksi',
        'Gaji dan tunjangan operasional pegawai',
        'Sanksi administrasi berupa bunga dan denda Surat Tagihan Pajak (STP)',
        'Biaya perjalanan dinas luar kota pegawai'
      ], 2, 'Sanksi administrasi perpajakan (bunga, denda, kenaikan) secara tegas dilarang dibiayakan secara fiskal (Pasal 9 ayat 1 huruf k UU PPh).'),
      q(2, 'Penilaian Fiskal & Tarif PPh Badan', 'Berdasarkan UU Harmonisasi Peraturan Perpajakan (UU HPP), tarif umum Pajak Penghasilan (PPh) Badan yang berlaku di Indonesia adalah...', [
        '25%',
        '22%',
        '20%',
        '19%'
      ], 1, 'Tarif PPh Badan umum di Indonesia adalah sebesar 22% (Pasal 17 ayat 1b UU PPh jo. UU HPP).'),
      q(3, 'Transfer Pricing & Hubungan Istimewa', 'Sesuai PMK 172/2023, metode penentuan harga transfer yang membandingkan laba bersih operasi transaksi afiliasi dengan laba bersih transaksi independen adalah...', [
        'CUP (Comparable Uncontrolled Price)',
        'Resale Price Method (RPM)',
        'Cost Plus Method (CPM)',
        'TNMM (Transactional Net Margin Method)'
      ], 3, 'TNMM menguji rasio margin laba operasi bersih (seperti net cost plus atau operating margin) terhadap basis yang tepat dibandingkan transaksi independen.'),
      q(4, 'Penyusutan Fiskal (PMK 72/2023)', 'Sebuah truk angkutan operasional pabrik dibeli pada 1 Maret 2024 seharga Rp 400.000.000 (Kelompok 2, masa manfaat 8 tahun). Jika perusahaan menggunakan metode garis lurus fiskal, berapakah penyusutan tahun 2024?', [
        'Rp 50.000.000',
        'Rp 41.666.667',
        'Rp 37.500.000',
        'Rp 25.000.000'
      ], 1, 'Tarif Kelompok 2 = 12.5%. Bulan penyusutan (Maret-Desember = 10 bulan). Penyusutan = (10/12) × 12.5% × Rp 400.000.000 = Rp 41.666.667.'),
      q(5, 'Pemungutan PPh 22 & 23', 'PT Cendana menyewa mesin fotokopi dari CV Mitra (memiliki NPWP) dengan biaya sewa Rp 10.000.000 (tidak termasuk PPN). Berapakah PPh Pasal 23 yang wajib dipotong oleh PT Cendana?', [
        'Rp 200.000 (tarif 2%)',
        'Rp 1.500.000 (tarif 15%)',
        'Rp 100.000 (tarif 1%)',
        'Rp 400.000 (tarif 4%)'
      ], 0, 'Sewa harta selain tanah dan/atau bangunan dikenakan pemotongan PPh Pasal 23 sebesar 2% dari jumlah bruto tidak termasuk PPN.'),
      q(6, 'PPh Final Pasal 4(2)', 'Penghasilan sewa tanah dan/atau bangunan dikenakan pemotongan PPh Final Pasal 4 ayat 2 dengan tarif sebesar...', [
        '2,5% dari jumlah bruto',
        '5% dari jumlah bruto',
        '10% dari jumlah bruto',
        '11% dari jumlah bruto'
      ], 2, 'Sesuai PP 34/2017, persewaan tanah dan/atau bangunan dikenakan PPh Final sebesar 10% dari jumlah bruto persewaan.'),
      q(7, 'Kredit PPh 24 Luar Negeri', 'PT Global memperoleh penghasilan dari cabang di Singapura Rp 500.000.000 (telah dipotong pajak di Singapura 25% = Rp 125 jt). Total PKP seluruh dunia Rp 2.000.000.000 dengan total PPh terutang di Indonesia Rp 440.000.000. Berapakah kredit pajak PPh 24 maksimum yang dapat dikreditkan?', [
        'Rp 125.000.000',
        'Rp 110.000.000',
        'Rp 440.000.000',
        'Rp 88.000.000'
      ], 1, 'Batas proporsional = (Rp 500 jt / Rp 2.000 jt) × Rp 440 jt = Rp 110.000.000. Kredit yang dapat dikreditkan adalah nilai terendah antara pajak riil (125 jt) dan batas proporsional (110 jt) = Rp 110.000.000.')
    ],
    uas: [
      q(8, 'Fasilitas PPh Badan Pasal 31E', 'PT Makmur memiliki peredaran bruto setahun Rp 4.000.000.000 dengan Penghasilan Kena Pajak Rp 300.000.000. Berapakah PPh Badan terutang PT Makmur?', [
        'Rp 66.000.000',
        'Rp 33.000.000',
        'Rp 20.000.000',
        'Rp 15.000.000'
      ], 1, 'Karena omzet < Rp 4,8 Miliar, seluruh PKP mendapat fasilitas pengurangan tarif 50%: Tarif efektif = 50% × 22% = 11%. PPh terutang = 11% × Rp 300.000.000 = Rp 33.000.000.'),
      q(9, 'PPh 21 Skema TER (PP 58/2023)', 'Berdasarkan PP No. 58/2023 dan PMK 168/2023, pemotongan PPh 21 untuk pegawai tetap pada masa pajak Januari hingga November dihitung dengan cara...', [
        'Mengalikan penghasilan neto disetahunkan dengan tarif progresif Pasal 17',
        'Mengalikan penghasilan bruto bulanan secara langsung dengan Tarif Efektif Rata-Rata (TER)',
        'Memotong tarif flat 5% dari seluruh penghasilan kotor pegawai',
        'Mengurangi PTKP bulanan lalu dikalikan tarif 15%'
      ], 1, 'Skema TER mempermudah administrasi masa pajak bulanan Jan-Nov: PPh 21 = Penghasilan Bruto Bulanan × Tarif TER yang sesuai status PTKP.'),
      q(10, 'Natura & Kenikmatan (PMK 66/2023)', 'Manakah fasilitas natura yang DIKECUALIKAN dari objek PPh Pasal 21 bagi karyawan berdasarkan PMK 66/2023?', [
        'Mobil dinas mewah yang dibawa pulang untuk keperluan pribadi',
        'Penyediaan makanan dan minuman bagi seluruh pegawai di tempat kerja secara cuma-cuma',
        'Keanggotaan klub golf eksekutif',
        'Tiket liburan keluarga pegawai ke luar negeri'
      ], 1, 'Makanan/minuman bagi seluruh pegawai di tempat kerja, fasilitas kerja di daerah tertentu, dan peralatan keselamatan kerja dikecualikan dari objek PPh 21.'),
      q(11, 'Rekonsiliasi Fiskal SPT 1771', 'Dalam laporan laba rugi komersial terdapat Beban Sumbangan HUT RI sebesar Rp 15.000.000 dan Pendapatan Bunga Deposito sebesar Rp 20.000.000. Penyesuaian fiskal yang tepat adalah...', [
        'Koreksi Positif Rp 15 jt dan Koreksi Negatif Rp 20 jt',
        'Koreksi Negatif Rp 15 jt dan Koreksi Positif Rp 20 jt',
        'Koreksi Positif Rp 35 jt',
        'Koreksi Negatif Rp 35 jt'
      ], 0, 'Sumbangan non-bencana dikoreksi POSITIF (menambah laba fiskal karena non-deductible). Bunga deposito dikoreksi NEGATIF (mengurangi laba fiskal karena sudah dikenakan PPh Final).'),
      q(12, 'Konsep PPN & Tarif UU HPP', 'Berdasarkan UU Harmonisasi Peraturan Perpajakan, tarif umum Pajak Pertambahan Nilai (PPN) yang berlaku saat ini adalah...', [
        '10%',
        '11%',
        '12%',
        '15%'
      ], 1, 'Tarif PPN adalah 11% (berlaku sejak 1 April 2022) sesuai ketentuan UU HPP.'),
      q(13, 'Mekanisme Pengkreditan Pajak Masukan PPN', 'Pengusaha Kena Pajak (PKP) pada masa pajak Mei memiliki Pajak Keluaran Rp 85.000.000 dan Pajak Masukan yang dapat dikreditkan Rp 95.000.000. Posisi PPN pada SPT Masa Mei adalah...', [
        'PPN Kurang Bayar Rp 10.000.000',
        'PPN Lebih Bayar Rp 10.000.000 (dapat dikompensasikan atau direstitusi)',
        'PPN Nihil',
        'Dikenakan sanksi denda administrasi keterlambatan'
      ], 1, 'Pajak Masukan (95 jt) > Pajak Keluaran (85 jt) = Lebih Bayar Rp 10.000.000 yang dapat dikompensasi ke masa pajak berikutnya atau direstitusi.'),
      q(14, 'Pemungut PPN (WAPU)', 'Ketika PKP rekanan menjual alat kantor senilai Rp 50.000.000 (belum PPN) kepada Dinas Pendidikan (Instansi Pemerintah WAPU), maka kas riil yang diterima rekanan dari dinas adalah...', [
        'Rp 55.500.000 (termasuk PPN 11%)',
        'Rp 50.000.000 (karena PPN 11% dipungut dan disetor langsung oleh bendahara instansi)',
        'Rp 44.500.000',
        'Rp 49.000.000'
      ], 1, 'Bendahara Instansi Pemerintah selaku WAPU memungut langsung PPN Rp 5,5 juta dan menyetorkannya ke kas negara, sehingga rekanan menerima pembayaran neto DPP Rp 50.000.000.')
    ]
  },
  MNK201: {
    courseName: 'Manajemen Keuangan',
    uts: [
      q(1, 'Tinjauan Manajemen Keuangan & Agency', 'Tujuan normatif utama manajemen keuangan korporasi modern adalah...', [
        'Memaksimalkan total aset neraca',
        'Memaksimalkan laba akuntansi tahun berjalan',
        'Memaksimalkan kekayaan pemegang saham melalui peningkatan nilai intrinsik perusahaan',
        'Meminimalkan risiko kebangkrutan tanpa berutang'
      ], 2, 'Tujuan fundamental manajemen keuangan adalah memaksimalkan nilai perusahaan dan kekayaan pemegang saham jangka panjang.'),
      q(2, 'Analisis Laporan Keuangan & DuPont', 'Perusahaan memiliki Profit Margin 8%, Total Asset Turnover 1,5 kali, dan Equity Multiplier 2,0 kali. Berapakah Return on Equity (ROE) perusahaan menurut sistem DuPont?', [
        '12%',
        '16%',
        '24%',
        '30%'
      ], 2, 'ROE = Profit Margin × Total Asset Turnover × Equity Multiplier = 8% × 1,5 × 2,0 = 24%.'),
      q(3, 'Nilai Waktu Uang (TVM)', 'Berapakah nilai sekarang (Present Value) dari penerimaan kas sebesar Rp 133.100.000 yang akan diterima 3 tahun mendatang jika tingkat diskonto majemuk adalah 10% per tahun?', [
        'Rp 100.000.000',
        'Rp 110.000.000',
        'Rp 90.000.000',
        'Rp 120.000.000'
      ], 0, 'PV = FV / (1 + r)^n = Rp 133.100.000 / (1,10)^3 = Rp 133.100.000 / 1,331 = Rp 100.000.000.'),
      q(4, 'Model CAPM & Risiko', 'Suku bunga bebas risiko (risk-free rate) adalah 6% dan return portofolio pasar yang diharapkan adalah 14%. Jika saham PT Maju memiliki koefisien Beta (β) = 1,5, berapakah return yang disyaratkan (r) saham tersebut menurut CAPM?', [
        '15%',
        '18%',
        '21%',
        '27%'
      ], 1, 'r = r_RF + β × (r_M - r_RF) = 6% + 1,5 × (14% - 6%) = 6% + 1,5 × 8% = 18%.'),
      q(5, 'Biaya Modal & WACC', 'PT Andalas memiliki struktur modal target: 40% Utang dan 60% Ekuitas. Biaya utang sebelum pajak adalah 10% dengan tarif pajak badan 20%. Biaya ekuitas adalah 15%. Berapakah WACC perusahaan?', [
        '12,2%',
        '13,0%',
        '14,2%',
        '11,5%'
      ], 0, 'Biaya utang setelah pajak = 10% × (1 - 0,20) = 8%. WACC = (0,40 × 8%) + (0,60 × 15%) = 3,2% + 9,0% = 12,2%.'),
      q(6, 'Penganggaran Modal (NPV vs IRR)', 'Jika dua proyek investasi bersifat mutually exclusive (saling meniadakan), dan terjadi konflik peringkat di mana Proyek A memiliki NPV lebih tinggi namun Proyek B memiliki IRR lebih tinggi, proyek manakah yang harus dipilih?', [
        'Pilih Proyek B, karena persentase return IRR lebih tinggi',
        'Pilih Proyek A, karena metode NPV memaksimumkan tambahan kekayaan moneter riil pemegang saham',
        'Tolak kedua proyek karena terjadi inkonsistensi matematis',
        'Pilih proyek yang memiliki payback period paling singkat'
      ], 1, 'Dalam konflik mutually exclusive, kriteria NPV selalu menjadi pedoman utama karena asumsi tingkat reinvestasi NPV pada biaya modal jauh lebih realistis.'),
      q(7, 'Arus Kas Inkremental Proyek', 'Manakah dari pos berikut yang HARUS diperhitungkan dalam analisis arus kas penganggaran modal?', [
        'Biaya riset konsultan masa lalu yang telah lunas (sunk cost)',
        'Biaya kanibalisasi penjualan produk lama akibat peluncuran produk baru',
        'Alokasi biaya overhead kantor pusat yang tidak berubah',
        'Beban bunga utang pendanaan proyek (sudah ada dalam diskonto WACC)'
      ], 1, 'Erosi atau kanibalisasi penjualan produk lama akibat produk baru merupakan arus kas keluar inkremental yang wajib diperhitungkan.')
    ],
    uas: [
      q(8, 'Struktur Modal Modigliani-Miller', 'Menurut Teori Modigliani-Miller dengan Pajak Perusahaan (1963), nilai perusahaan yang memiliki utang (levered firm) lebih tinggi dibanding perusahaan tanpa utang sebesar...', [
        'Total nilai nominal utang itu sendiri',
        'Nilai Sekarang dari Penghematan Pajak Bunga Utang (PV of Tax Shield = T_c × D)',
        'Selisih biaya modal ekuitas dengan biaya modal utang',
        'Biaya kebangkrutan yang dapat dihindari'
      ], 1, 'Manfaat perisai pajak bunga (interest tax shield) menaikkan nilai perusahaan berutang sebesar tarif pajak dikalikan jumlah utang (T_c × D).'),
      q(9, 'Trade-off Theory Struktur Modal', 'Trade-off Theory menyatakan bahwa struktur modal optimal korporasi tercapai ketika...', [
        'Perusahaan menggunakan 100% utang',
        'Manfaat marjinal dari tax shield bunga tepat seimbang dengan nilai sekarang biaya kesulitan keuangan (financial distress costs)',
        'Perusahaan mendanai seluruh investasinya dari laba ditahan',
        'Biaya ekuitas tepat sama dengan biaya utang'
      ], 1, 'Keseimbangan optimal antara penghematan pajak utang dengan risiko biaya kebangkrutan menghasilkan titik WACC terendah dan nilai perusahaan tertinggi.'),
      q(10, 'Kebijakan Dividen & Share Repurchase', 'Teori dividen yang menyatakan bahwa investor memandang dividen kas saat ini lebih pasti dan bernilai tinggi dibandingkan potensi capital gain masa depan yang berisiko adalah...', [
        'Dividend Irrelevance Theory (MM)',
        'Bird-in-the-Hand Theory (Gordon & Lintner)',
        'Tax Preference Theory',
        'Pecking Order Theory'
      ], 1, 'Bird-in-the-hand theory berpendapat bahwa kepastian penerimaan dividen tunai saat ini lebih disukai investor daripada ketidakpastian apresiasi harga saham masa depan.'),
      q(11, 'Manajemen Kas Model BAT', 'Model Baumol-Allais-Tobin (BAT) digunakan dalam manajemen kas perusahaan untuk menentukan...', [
        'Plafon batas atas saldo kredit perbankan',
        'Saldo kas optimal yang meminimalkan total biaya transaksi dan biaya peluang penyimpanan kas',
        'Tingkat dividen kas yang harus dibagikan setiap kuartal',
        'Jadwal penagihan piutang pelanggan'
      ], 1, 'Model BAT mengadopsi formula EOQ untuk menyeimbangkan biaya transfer sekuritas ke kas dengan biaya bunga yang hilang.'),
      q(12, 'Manajemen Persediaan & Model EOQ', 'Permintaan tahunan bahan baku adalah 10.000 unit, biaya pemesanan Rp 50.000 per pesanan, dan biaya penyimpanan Rp 400 per unit per tahun. Berapakah Economic Order Quantity (EOQ)?', [
        '1.250 unit',
        '1.581 unit',
        '2.000 unit',
        '2.500 unit'
      ], 1, 'EOQ = √[(2 × D × S) / H] = √[(2 × 10.000 × 50.000) / 400] = √[2.500.000] = 1.581 unit (dibulatkan).'),
      q(13, 'Keuangan Internasional & Risiko Valas', 'Eksposur yang timbul ketika laporan keuangan anak perusahaan di luar negeri dikonversi ke mata uang pelaporan induk perusahaan untuk kepentingan konsolidasi disebut...', [
        'Transaction Exposure',
        'Translation (Accounting) Exposure',
        'Operating (Economic) Exposure',
        'Sovereign Political Exposure'
      ], 1, 'Translation exposure timbul dari fluktuasi kurs saat mengonsolidasikan akun aset dan liabilitas anak cabang luar negeri.'),
      q(14, 'Prediksi Kebangkrutan Altman Z-Score', 'Model prediksi kesulitan keuangan (financial distress) Altman Z-Score untuk perusahaan manufaktur mengombinasikan rasio-rasio berikut, KECUALI...', [
        'Modal Kerja terhadap Total Aset',
        'Saldo Laba terhadap Total Aset',
        'Nilai Pasar Ekuitas terhadap Nilai Buku Total Utang',
        'Belanja Modal terhadap Nilai Buku Persediaan'
      ], 3, 'Altman Z-Score menggunakan Working Capital/TA, Retained Earnings/TA, EBIT/TA, Market Value Equity/Book Value Debt, dan Sales/TA.')
    ]
  },
  AKA201: {
    courseName: 'Pengauditan Berbasis Risiko I',
    uts: [
      q(1, 'Konsep Dasar Audit & Jasa Asurans', 'Penyebab utama timbulnya permintaan akan jasa audit laporan keuangan independen oleh para pengguna laporan adalah...', [
        'Persyaratan mutlak perbankan untuk membuka rekening koran',
        'Risiko informasi yang diakibatkan oleh benturan kepentingan antara manajemen dan pengguna, kompleksitas transaksi, serta jarak informasi',
        'Jaminan bahwa perusahaan tidak akan pernah mengalami kebangkrutan',
        'Pencegahan 100% atas terjadinya kesalahan pembukuan karyawan'
      ], 1, 'Auditor independen mengurangi information risk akibat adanya keterpisahan prinsipal dan agen serta potensi bias dalam pelaporan keuangan.'),
      q(2, 'Etika Profesi & Independensi', 'Seorang auditor ditawari posisi sebagai Direktur Keuangan di perusahaan klien audit yang saat ini sedang diperiksanya. Situasi ini menimbulkan ancaman independensi berupa...', [
        'Self-interest threat dan familiarity threat',
        'Advocacy threat saja',
        'Intimidation threat saja',
        'Self-review threat saja'
      ], 0, 'Peluang pekerjaan di klien memicu kepentingan pribadi finansial (self-interest) dan kedekatan hubungan masa depan (familiarity).'),
      q(3, 'Asersi Manajemen', 'Ketika auditor memeriksa bukti fisik keberadaan mesin pabrik di bengkel kerja untuk memastikan mesin yang tercatat di neraca benar-benar ada, auditor sedang menguji asersi...', [
        'Kelengkapan (Completeness)',
        'Keberadaan (Existence)',
        'Hak dan Kewajiban (Rights and Obligations)',
        'Pisah Batas (Cutoff)'
      ], 1, 'Mencocokkan catatan buku ke fisik nyata menguji apakah aset yang dicatat benar-benar ada (keberadaan/existence).'),
      q(4, 'Laporan Audit & Opini Auditor (SA 700)', 'Apabila laporan keuangan klien mengandung salah saji yang bersifat MATERIAL tetapi TIDAK PERVASIF, maka opini yang tepat diberikan auditor adalah...', [
        'Opini Wajar Tanpa Pengecualian (Unmodified)',
        'Opini Wajar Dengan Pengecualian (Qualified Opinion)',
        'Opini Tidak Wajar (Adverse Opinion)',
        'Opini Tidak Menyatakan Pendapat (Disclaimer)'
      ], 1, 'Salah saji material namun tidak pervasif menghasilkan Opini Wajar Dengan Pengecualian ("kecuali untuk dampak hal yang dijelaskan...").'),
      q(5, 'Materialitas Audit (SA 320)', 'Mengapa auditor menetapkan Materialitas Pelaksanaan (Performance Materiality) pada tingkat yang LEBIH RENDAH daripada Materialitas Laporan Keuangan secara Keseluruhan?', [
        'Untuk mempercepat waktu penyelesaian audit di lapangan',
        'Untuk mengurangi ke tingkat rendah yang tepat probabilitas bahwa akumulasi salah saji yang tidak terdeteksi melebihi materialitas keseluruhan',
        'Untuk mematuhi instruksi manajemen klien dalam menekan biaya audit',
        'Untuk membatasi jumlah sampel dokumen yang diperiksa'
      ], 1, 'Performance materiality memberikan bantalan pengaman agar total salah saji kecil yang terakumulasi tidak melampaui batas materialitas keseluruhan.'),
      q(6, 'Bukti Audit & Prosedur Vouching (SA 500)', 'Prosedur audit yang menelusuri dari buku jurnal penjualan mundur ke faktur penjualan dan dokumen pengiriman barang (vouching) bertujuan utama menguji asersi...', [
        'Kelengkapan (Completeness / Understatement)',
        'Keterjadian (Occurrence / Overstatement)',
        'Hak dan Kewajiban',
        'Klasifikasi Akun'
      ], 1, 'Vouching (dari jurnal ke dokumen sumber) mendeteksi transaksi fiktif atau pencatatan berlebih (menguji Keterjadian). Tracing menguji Kelengkapan.'),
      q(7, 'Prosedur Analitis (SA 520)', 'Dalam standar audit ISA, prosedur analitis DIWAJIBKAN untuk dilaksanakan pada dua tahapan audit berikut, yaitu...', [
        'Tahap Perencanaan (Penilaian Risiko) dan Tahap Reviu Akhir (Penyelesaian Audit)',
        'Tahap Pengujian Pengendalian dan Tahap Pengujian Substantif Saldo',
        'Tahap Konfirmasi Eksternal dan Tahap Stock Opname',
        'Tahap Penerbitan Surat Manajemen dan Tahap Penagihan Invoice'
      ], 0, 'SA 520 mewajibkan prosedur analitis pada tahap penilaian risiko awal (perencanaan) dan tahap evaluasi menyeluruh sebelum opini final ditandatangani.')
    ],
    uas: [
      q(8, 'Perencanaan Audit & Pemahaman Klien', 'Surat tertulis resmi antara Kantor Akuntan Publik dan klien yang mendokumentasikan tujuan perikatan, ruang lingkup tanggung jawab, dan dasar penetapan honorarium disebut...', [
        'Management Representation Letter',
        'Audit Engagement Letter (Surat Perikatan Audit)',
        'Management Letter',
        'Comfort Letter'
      ], 1, 'Engagement letter mengonfirmasi penerimaan penugasan dan mencegah kesalahpahaman antara auditor dan manajemen klien.'),
      q(9, 'Model Risiko Audit (SA 200)', 'Jika auditor menilai Inherent Risk (IR) dan Control Risk (CR) klien sangat TINGGI, maka untuk mempertahankan Acceptable Audit Risk (AAR) pada tingkat yang rendah, Planned Detection Risk (PDR) harus ditetapkan...', [
        'Sangat Tinggi, sehingga pengujian substantif dikurangi',
        'Rendah, sehingga bukti audit substantif yang dikumpulkan harus LEBIH BANYAK dan meyakinkan',
        'Tidak berubah, karena risiko pengendalian tidak memengaruhi risiko deteksi',
        'Nol mutlak tanpa pengujian sampel'
      ], 1, 'PDR = AAR / (IR × CR). Jika IR dan CR tinggi, PDR harus rendah, yang mewajibkan auditor memperluas pengujian substantif.'),
      q(10, 'Pertimbangan Fraud (SA 240)', 'Tiga kondisi yang membentuk Segitiga Kecurangan (Fraud Triangle) menurut Donald Cressey adalah...', [
        'Peluang, Keserakahan, dan Kebodohan',
        'Tekanan/Insentif, Peluang (Opportunity), dan Rasionalisasi/Sikap',
        'Kolusi, Kurangnya Pengawasan, dan Kompensasi Rendah',
        'Pemberontakan, Ketiadaan Dokumen, dan Otorisasi Ganda'
      ], 1, 'Fraud triangle terdiri dari Pressure/Incentive, Opportunity (kelemahan kontrol), dan Rationalization (pembenaran diri).'),
      q(11, 'Pengendalian Internal COSO & Pemisahan Tugas', 'Untuk mencegah terjadinya kecurangan dan kesalahan, fungsi-fungsi berikut HARUS dipisahkan satu sama lain, KECUALI...', [
        'Fungsi Otorisasi Transaksi',
        'Fungsi Pencatatan Akuntansi',
        'Fungsi Penyimpanan Fisik Aset (Custody)',
        'Fungsi Penyusunan Anggaran Operasional dan Perencanaan Strategis Pemasaran'
      ], 3, 'Pemisahan tugas kunci (Segregation of Duties) mewajibkan pemisahan antara: Otorisasi, Pencatatan, Kustodi aset, dan Rekonsiliasi independen.'),
      q(12, 'Pengujian Pengendalian (TOC) vs Substantif', 'Jika hasil pengujian pengendalian (Tests of Controls) membuktikan bahwa sistem pengendalian internal klien beroperasi sangat efektif sepanjang tahun, maka auditor dapat...', [
        'Menaikkan penilaian risiko pengendalian (Control Risk) ke tingkat maksimum',
        'Mengurangi luas pengujian rincian saldo substantif (Tests of Details of Balances)',
        'Menerbitkan laporan opini wajar dengan pengecualian',
        'Menghilangkan seluruh prosedur audit kelangsungan usaha'
      ], 1, 'TOC yang memuaskan menurunkan Control Risk, menaikkan batas PDR, sehingga auditor dapat membatasi ukuran sampel pengujian substantif.'),
      q(13, 'Teknik Audit Berbantuan Komputer (CAATs)', 'Teknik audit sistem informasi di mana auditor memproses data transaksi uji buatan (mengandung kesalahan terencana) ke dalam program komputer klien untuk menguji kontrol aplikasi disebut...', [
        'Parallel Simulation',
        'Test Data Approach',
        'Integrated Test Facility (ITF)',
        'Embedded Audit Module'
      ], 1, 'Test data approach menguji apakah kontrol validasi aplikasi klien mampu mendeteksi dan menolak data uji yang tidak valid.'),
      q(14, 'Review UAS Pengauditan I', 'Konfirmasi positif saldo piutang usaha yang dikirimkan auditor kepada debitur klien meminta responden untuk membalas...', [
        'Hanya jika debitur tidak setuju dengan saldo piutang yang tercantum',
        'Baik jika setuju maupun jika tidak setuju dengan informasi saldo yang tercantum',
        'Hanya jika debitur telah melunasi seluruh kewajibannya',
        'Kepada manajemen klien secara langsung bukan ke auditor'
      ], 1, 'Konfirmasi Positif mensyaratkan balasan dalam kondisi apapun (setuju atau tidak setuju). Konfirmasi Negatif hanya dibalas jika ada selisih.')
    ]
  },
  AKS301: {
    courseName: 'Sistem Informasi Akuntansi',
    uts: [
      q(1, 'SIA & Nilai Perusahaan', 'Karakteristik kualitatif fundamental informasi akuntansi yang berguna menurut konseptual framework adalah...', [
        'Dapat dipahami dan tepat waktu',
        'Relevansi (Relevance) dan Penyajian Jujur (Faithful Representation)',
        'Keterbandingan dan dapat diverifikasi',
        'Ringkas dan bernilai moneter tinggi'
      ], 1, 'Dua kualitas fundamental informasi akuntansi adalah Relevansi (memiliki nilai prediktif/konfirmasi) dan Faithful Representation (lengkap, netral, bebas kesalahan).'),
      q(2, 'Pemodelan Proses Bisnis (BPMN 2.0)', 'Dalam diagram BPMN, simbol belah ketupat dengan tanda silang di tengahnya merepresentasikan...', [
        'Start Event',
        'Exclusive Gateway (XOR) di mana hanya satu jalur percabangan yang dipilih',
        'Parallel Gateway (AND) di mana seluruh jalur dikerjakan serentak',
        'Intermediate Timer Event'
      ], 1, 'Exclusive Gateway (XOR) membagi alur proses menjadi jalur alternatif yang saling meniadakan berdasarkan kondisi evaluasi.'),
      q(3, 'Pemodelan Data REA', 'Dalam kerangka kerja REA (Resources, Events, Agents), manakah yang dikelompokkan sebagai entitas "Events"?', [
        'Kas dan Persediaan Barang Dagang',
        'Pesanan Penjualan dan Penerimaan Kas',
        'Pelanggan dan Kasir Toko',
        'Gudang dan Pabrik Produksi'
      ], 1, 'Events adalah transaksi atau aktivitas bisnis yang terjadi pada waktu tertentu, seperti Sales Order, Shipping, Cash Receipt.'),
      q(4, 'Basis Data Relasional & Normalisasi', 'Tabel relasional yang sudah memenuhi 1NF tetapi masih memiliki atribut non-kunci yang bergantung hanya pada sebagian kunci utama gabungan (partial dependency) belum memenuhi...', [
        'Bentuk Normal Kedua (2NF)',
        'Bentuk Normal Ketiga (3NF)',
        'Integritas Referensial',
        'Bentuk Normal Boyce-Codd'
      ], 0, '2NF mensyaratkan tidak ada partial functional dependency; seluruh atribut non-kunci harus bergantung penuh pada keseluruhan primary key.'),
      q(5, 'Siklus Pendapatan (Order-to-Cash)', 'Pengendalian preventif yang paling penting untuk mencegah pengiriman barang kepada pelanggan yang berisiko gagal bayar adalah...', [
        'Mewajibkan staf gudang menandatangani picking slip',
        'Pemeriksaan dan otorisasi batas kredit secara independen oleh Departemen Kredit sebelum pesanan penjualan diproses',
        'Mengirimkan faktur penjualan sesegera mungkin',
        'Mengasuransikan seluruh pengiriman kargo'
      ], 1, 'Otorisasi kredit independen sebelum persetujuan pesanan mencegah timbulnya piutang tak tertagih akibat penjualan tanpa verifikasi kapasitas bayar.'),
      q(6, 'Siklus Pengeluaran (Procure-to-Pay)', 'Tiga dokumen yang wajib diverifikasi kecocokannya (Three-Way Matching) oleh staf Utang Usaha sebelum menyetujui pembayaran kas kepada pemasok adalah...', [
        'Purchase Requisition, Sales Order, dan Cek Bank',
        'Purchase Order, Receiving Report (Laporan Penerimaan), dan Vendor Invoice (Faktur Pemasok)',
        'Packing Slip, Bill of Lading, dan Bukti Kas Masuk',
        'Daftar Pemasok, Voucher Pengeluaran Kas, dan Rekening Koran'
      ], 1, 'Three-way match membandingkan PO (otorisasi pesanan), Receiving Report (verifikasi fisik barang diterima), dan Vendor Invoice (tagihan harga).'),
      q(7, 'Siklus Konversi & Review UTS SIA', 'Dokumen yang merinci jenis bahan baku, spesifikasi bagian, dan kuantitas eksak yang dibutuhkan untuk merakit satu unit produk jadi disebut...', [
        'Route Sheet (Lembar Rute)',
        'Bill of Materials (BOM)',
        'Work Order (Perintah Kerja)',
        'Materials Requisition Form'
      ], 1, 'Bill of Materials (BOM) adalah daftar resep komponen teknis lengkap yang menyusun satu unit produk manufaktur.')
    ],
    uas: [
      q(8, 'Pengendalian Internal COSO', 'Komponen fondasi paling mendasar dalam kerangka kerja Pengendalian Internal COSO yang menetapkan suasana organisasi (tone at the top) dan nilai etika adalah...', [
        'Risk Assessment (Penilaian Risiko)',
        'Control Environment (Lingkungan Pengendalian)',
        'Control Activities (Aktivitas Pengendalian)',
        'Monitoring Activities (Pemantauan)'
      ], 1, 'Control Environment adalah fondasi dari seluruh komponen COSO, mencakup integritas, nilai etika, filosofi manajemen, dan struktur organisasi.'),
      q(9, 'Keamanan Informasi & Kriptografi', 'Tanda Tangan Digital (Digital Signature) memberikan jaminan hukum bahwa pengirim tidak dapat menyangkal telah mengirimkan dokumen transaksi tersebut. Prinsip keamanan ini disebut...', [
        'Confidentiality (Kerahasiaan)',
        'Non-repudiation (Anti-penyangkalan)',
        'Availability (Ketersediaan)',
        'Authorization (Otorisasi)'
      ], 1, 'Non-repudiation menjamin pembuktian kriptografis bahwa pengirim memegang kunci privat yang menandatangani hash dokumen secara sah.'),
      q(10, 'Audit SI & Tata Kelola IT (COBIT)', 'Metode audit sistem informasi di mana auditor membuat entitas atau rekening tiruan di dalam basis data live klien untuk menguji pemrosesan transaksi berdampingan dengan transaksi riil disebut...', [
        'Test Data Approach',
        'Parallel Simulation',
        'Integrated Test Facility (ITF)',
        'Embedded Audit Module'
      ], 2, 'ITF mengintegrasikan dummy entity ke dalam sistem live perusahaan untuk menguji sistem secara berkelanjutan.'),
      q(11, 'Analitika Data Akuntansi & Big Data', 'Dalam model siklus analitika data akuntansi IMPACT, huruf "P" merepresentasikan tahapan...', [
        'Publish the findings',
        'Perform test plan (melaksanakan pengujian analitis data)',
        'Prepare the financial statements',
        'Protect client data'
      ], 1, 'IMPACT: Identify questions, Master the data, Perform test plan, Address results, Communicate insights, Track outcomes.'),
      q(12, 'Robotic Process Automation (RPA)', 'Karakteristik proses bisnis akuntansi yang PALING COCOK untuk diotomatisasi menggunakan perangkat lunak bot RPA adalah...', [
        'Proses negosiasi kontrak kredit dengan debitur bermasalah',
        'Proses rekonsiliasi mutasi rekening koran bank dengan buku besar yang terstruktur dan berbasis aturan baku',
        'Proses wawancara calon auditor internal baru',
        'Proses penentuan estimasi penurunan nilai aset yang memerlukan pertimbangan subjektif'
      ], 1, 'RPA ideal untuk tugas-tugas administratif bervolume tinggi yang berbasis aturan baku (rule-based), terstruktur, dan minim pengecualian.'),
      q(13, 'Blockchain & Triple-Entry Accounting', 'Bagaimana teknologi Blockchain mewujudkan konsep Triple-Entry Accounting dalam dunia akuntansi?', [
        'Mewajibkan pencatatan debit, kredit, dan ekuitas di buku kas',
        'Setiap transaksi ekonomi diverifikasi kriptografis dan dicatat serentak pada distributed ledger publik bersama yang tidak dapat dimanipulasi (immutable)',
        'Mengharuskan tiga akuntan independen menandatangani setiap jurnal voucher',
        'Membuat tiga salinan cadangan basis data di lokasi berbeda'
      ], 1, 'Triple-entry accounting mencatat transaksi pada distributed ledger bersama secara kriptografis sehingga memvalidasi pencatatan kedua pihak secara otomatis.'),
      q(14, 'Review UAS Sistem Informasi Akuntansi', 'Kelemahan desain sistem di mana seluruh operasional perusahaan bergantung pada satu server tunggal atau satu staf tanpa adanya cadangan atau pengganti disebut...', [
        'Single Point of Failure (SPOF)',
        'Separation of Duties (SoD)',
        'Distributed Denial of Service',
        'Man-in-the-Middle Attack'
      ], 0, 'SPOF (Single Point of Failure) adalah kerentanan arsitektur di mana kegagalan satu komponen kontrol/sumber daya dapat melumpuhkan seluruh sistem.')
    ]
  }
};

const outputCode = `// scripts/sem3-quiz-data.mjs
export const SEM3_QUIZ_DATA = ${JSON.stringify(QUIZ_SPEC, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'scripts/sem3-quiz-data.mjs'), outputCode, 'utf8');
console.log('Successfully wrote sem3-quiz-data.mjs');
