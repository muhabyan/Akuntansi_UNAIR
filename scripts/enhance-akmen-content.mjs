// scripts/enhance-akmen-content.mjs
// Menambahkan worked examples numerik komprehensif ke seluruh TM 1-14 Akuntansi Manajemen (AKM202)
import fs from 'node:fs';
import path from 'node:path';

const akmenModulesDir = path.join(process.cwd(), 'src/data/akmen/modules');

const AKMEN_WORKED_EXAMPLES = {
  1: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Rekonsiliasi Biaya PT Indotama Prima",
    p1: "PT Indotama Prima memproduksi meja kerja ergonomis. Pada bulan Januari 2026, perusahaan mencatat data pengeluaran operasional sebagai berikut: Bahan Baku Kayu & Baja Rp 180.000.000; Upah Perakit Meja Rp 120.000.000; Upah Satpam Pabrik Rp 15.000.000; Minyak Pelumas Mesin Rp 5.000.000; Depresiasi Mesin Pabrik Rp 25.000.000; Komisi Staf Penjualan Rp 30.000.000; Iklan Digital Rp 20.000.000; Gaji Direktur Keuangan Rp 45.000.000.",
    p2: "Kalkulasi Matematis & Rekonsiliasi:",
    calculations: [
      "1. Bahan Baku Langsung (Direct Materials) = Rp 180.000.000",
      "2. Tenaga Kerja Langsung (Direct Labor) = Rp 120.000.000",
      "3. Biaya Overhead Pabrik (BOP) = Upah Satpam (Rp 15 jt) + Pelumas (Rp 5 jt) + Depresiasi Mesin (Rp 25 jt) = Rp 45.000.000",
      "4. Total Biaya Produk (Manufaktur) = Rp 180 jt + Rp 120 jt + Rp 45 jt = Rp 345.000.000",
      "5. Biaya Utama (Prime Cost) = DM + DL = Rp 180 jt + Rp 120 jt = Rp 300.000.000",
      "6. Biaya Konversi (Conversion Cost) = DL + BOP = Rp 120 jt + Rp 45 jt = Rp 165.000.000",
      "7. Total Biaya Periode (Komersial) = Komisi (Rp 30 jt) + Iklan (Rp 20 jt) + Gaji Direktur (Rp 45 jt) = Rp 95.000.000"
    ],
    takeaway: "Perhatikan bahwa Upah Satpam Pabrik dan Depresiasi Mesin Pabrik adalah bagian dari BIAYA PRODUK (BOP), BUKAN biaya administrasi, karena terjadi di dalam fasilitas produksi."
  },
  2: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: CVP Multi-Produk & Margin of Safety PT Surya Mandiri",
    p1: "PT Surya Mandiri menjual dua jenis produk: Model Standar dan Model Premium dengan rasio bauran penjualan (sales mix) 3 : 1. Data per unit: Standar (Harga Rp 100.000, Biaya Variabel Rp 60.000, CM Rp 40.000); Premium (Harga Rp 200.000, Biaya Variabel Rp 100.000, CM Rp 100.000). Total Biaya Tetap per tahun adalah Rp 440.000.000.",
    p2: "Langkah Kalkulasi Titik Impas (BEP) Paket Penjualan:",
    calculations: [
      "1. Hitung CM per Paket = (3 unit × Rp 40.000) + (1 unit × Rp 100.000) = Rp 120.000 + Rp 100.000 = Rp 220.000 per paket.",
      "2. BEP dalam Paket = Total Biaya Tetap / CM per Paket = Rp 440.000.000 / Rp 220.000 = 2.000 paket.",
      "3. BEP Fisik Masing-masing Produk: Standar = 2.000 paket × 3 = 6.000 unit; Premium = 2.000 paket × 1 = 2.000 unit.",
      "4. Pembuktian Laba: Pendapatan (6.000×100rb + 2.000×200rb) = Rp 1.000.000.000. Total VC = (6.000×60rb + 2.000×100rb) = Rp 560.000.000. CM Total = Rp 440.000.000. Dikurangi Biaya Tetap Rp 440.000.000 = Laba Bersih Rp 0 (TERBUKTI IMPAS).",
      "5. Jika target penjualan aktual 10.000 unit total (7.500 Standar & 2.500 Premium), Margin of Safety (MoS) = 2.500 paket aktual - 2.000 paket BEP = 500 paket (20% MoS Ratio)."
    ],
    takeaway: "Pergeseran bauran penjualan ke arah produk dengan persentase CM lebih tinggi akan menurunkan titik impas secara keseluruhan dan memperbesar margin of safety."
  },
  3: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Rekonsiliasi Laba Bersih Absorption vs Variable Costing",
    p1: "PT Dinamika Jaya memproduksi 10.000 unit pada tahun pertama, namun hanya berhasil menjual 8.000 unit dengan harga Rp 50.000/unit. Biaya per unit: Bahan Baku Rp 12.000, TKL Rp 8.000, BOP Variabel Rp 5.000. Total BOP Tetap pabrik adalah Rp 100.000.000/tahun (tarif standar = Rp 10.000/unit). Beban penjualan & adm tetap Rp 40.000.000.",
    p2: "Analisis Laba Rugi Komparatif:",
    calculations: [
      "1. Harga Pokok per Unit: Variable Costing = Rp 12rb + 8rb + 5rb = Rp 25.000; Absorption Costing = Rp 25.000 + Rp 10.000 (BOP Tetap) = Rp 35.000.",
      "2. Laba Bersih Variable Costing: Pendapatan (8.000 × Rp 50rb) = Rp 400 jt. Dikurangi VC HPP (8.000 × Rp 25rb) = Rp 200 jt -> Margin Kontribusi = Rp 200 jt. Dikurangi Biaya Tetap Total: BOP Tetap (Rp 100 jt) + Beban Adm (Rp 40 jt) = Laba Bersih Rp 60.000.000.",
      "3. Laba Bersih Absorption Costing: Pendapatan = Rp 400 jt. Dikurangi HPP (8.000 × Rp 35rb) = Rp 280 jt -> Laba Kotor = Rp 120 jt. Dikurangi Beban Adm Tetap Rp 40 jt = Laba Bersih Rp 80.000.000.",
      "4. Rekonsiliasi Selisih Laba: Selisih Laba = Rp 80 jt - Rp 60 jt = Rp 20.000.000.",
      "5. Rumus Cek: Selisih Laba = (Unit Diproduksi 10.000 - Unit Dijual 8.000) × Tarif BOP Tetap Rp 10.000 = 2.000 unit persediaan akhir × Rp 10.000 = Rp 20.000.000 (SAMA PERSIS!)."
    ],
    takeaway: "Ketika Produksi > Penjualan, Laba Absorption SELALU LEBIH BESAR daripada Variable Costing karena sebagian BOP tetap 'diparkir' di aset persediaan neraca."
  },
  4: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Distorsi Biaya Tradisional vs Activity-Based Costing (ABC)",
    p1: "PT Presisi Engineering memproduksi Produk Reguler (volume tinggi, 8.000 unit) dan Produk Khusus (volume rendah namun rumit, 2.000 unit). Total BOP adalah Rp 600.000.000. Pada sistem tradisional berbasis jam mesin (total 10.000 jam: Reguler 8.000 jam, Khusus 2.000 jam), tarif tunggal = Rp 60.000/jam mesin.",
    p2: "Analisis Alokasi ABC dengan Dua Cost Pool:",
    calculations: [
      "A. Sistem Tradisional: Beban BOP Reguler = 8.000 jam × Rp 60rb = Rp 480 jt (Rp 60.000/unit); Beban BOP Khusus = 2.000 jam × Rp 60rb = Rp 120 jt (Rp 60.000/unit).",
      "B. Sistem ABC: Pool 1 (Setup Mesin, Rp 200 jt, dipicu jumlah setup: Reguler 10 kali, Khusus 40 kali -> Tarif = Rp 4 jt/setup). Pool 2 (Operasi Mesin, Rp 400 jt, dipicu jam mesin -> Tarif = Rp 40.000/jam).",
      "C. Alokasi ABC ke Produk Khusus: Setup (40 × Rp 4 jt = Rp 160 jt) + Jam Mesin (2.000 × Rp 40rb = Rp 80 jt) = Total BOP Rp 240.000.000. Beban per unit = Rp 240 jt / 2.000 = Rp 120.000/unit.",
      "D. Kesimpulan Distorsi: Produk Khusus mengalami UNDERCOSTING parah pada sistem tradisional (dihargai Rp 60.000 padahal biaya riilnya Rp 120.000). Akibatnya, perusahaan menetapkan harga terlalu murah dan menanggung kerugian tersembunyi."
    ],
    takeaway: "Sistem biaya tradisional cenderung memberi subsidi silang (cross-subsidization): produk bervolume tinggi mensubsidi produk bervolume rendah yang sarat rekayasa kustom."
  },
  5: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Master Budget Siklus Penjualan, Produksi & Bahan Baku",
    p1: "PT Berkah Manufaktur memproyeksikan penjualan kuartal I 2026: Januari 5.000 unit, Februari 6.000 unit, Maret 7.000 unit. Kebijakan persediaan akhir barang jadi adalah 20% dari kebutuhan penjualan bulan berikutnya. Persediaan awal Januari adalah 1.000 unit. Setiap unit produk membutuhkan 3 kg bahan baku seharga Rp 10.000/kg.",
    p2: "Penyusunan Anggaran Produksi Januari:",
    calculations: [
      "1. Penjualan yang Dianggarkan Januari = 5.000 unit.",
      "2. Ditambah: Persediaan Akhir yang Diinginkan = 20% × 6.000 unit (Februari) = 1.200 unit.",
      "3. Total Kebutuhan Unit = 5.000 + 1.200 = 6.200 unit.",
      "4. Dikurangi: Persediaan Awal Barang Jadi = 1.000 unit.",
      "5. Jumlah Unit yang WAJIB Diproduksi Januari = 5.200 unit.",
      "6. Kebutuhan Pembelian Bahan Baku: 5.200 unit × 3 kg = 15.600 kg bahan baku.",
      "7. Total Anggaran Pembelian Bahan Baku = 15.600 kg × Rp 10.000 = Rp 156.000.000."
    ],
    takeaway: "Jangan pernah menghitung kebutuhan bahan baku langsung dari angka penjualan! Selalu hitung dari Anggaran Produksi (Unit Produksi = Penjualan + Persediaan Akhir - Persediaan Awal)."
  },
  6: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Analisis Varians Bahan Baku & Tenaga Kerja (4-Way Analysis)",
    p1: "PT Sentosa Jaya menetapkan standar per unit produk: 2 kg bahan baku @ Rp 20.000/kg dan 1,5 jam kerja langsung @ Rp 40.000/jam. Selama bulan Maret, diproduksi 1.000 unit produk aktual. Pembelian & penggunaan bahan baku aktual: 2.100 kg dengan total biaya Rp 39.900.000 (Rp 19.000/kg). Penggunaan tenaga kerja langsung: 1.600 jam dengan total upah Rp 67.200.000 (Rp 42.000/jam).",
    p2: "Perhitungan Varians Sistem Biaya Standar:",
    calculations: [
      "1. Materials Price Variance (MPV) = AQ × (AP - SP) = 2.100 kg × (Rp 19.000 - Rp 20.000) = Rp 2.100.000 Favorable (Menguntungkan karena beli lebih murah).",
      "2. Materials Quantity Variance (MQV) = SP × (AQ - SQ) = Rp 20.000 × (2.100 kg - [1.000 × 2 kg]) = Rp 20.000 × 100 kg = Rp 2.000.000 Unfavorable (Boros bahan 100 kg).",
      "3. Labor Rate Variance (LRV) = AH × (AR - SR) = 1.600 jam × (Rp 42.000 - Rp 40.000) = Rp 3.200.000 Unfavorable (Tarif upah lebih mahal).",
      "4. Labor Efficiency Variance (LEV) = SR × (AH - SH) = Rp 40.000 × (1.600 jam - [1.000 × 1,5 jam]) = Rp 40.000 × 100 jam = Rp 4.000.000 Unfavorable (Pekerja bekerja 100 jam lebih lama dari standar).",
      "5. Sintesis Hubungan: Manajer pembelian menghemat Rp 2.1 juta dengan membeli bahan lebih murah, namun kualitasnya jelek sehingga pabrik boros bahan Rp 2 juta dan memicu inefisiensi jam kerja Rp 4 juta. Secara total keputusan ini MERUGIKAN perusahaan!"
    ],
    takeaway: "Varians yang 'Favorable' di satu departemen (misal harga bahan murah) sering kali menjadi akar penyebab varians 'Unfavorable' di departemen lain."
  },
  7: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Evaluasi Laporan Segmen Lini Produk (Segment Margin)",
    p1: "PT Multiprima memiliki dua divisi: Divisi Elektronik dan Divisi Mebel. Data operasional: Divisi Elektronik menghasilkan penjualan Rp 800 jt, biaya variabel Rp 450 jt, biaya tetap terelusur (traceable fixed costs) Rp 150 jt. Divisi Mebel menghasilkan penjualan Rp 500 jt, biaya variabel Rp 300 jt, biaya tetap terelusur Rp 120 jt. Selain itu, ada biaya tetap bersama kantor pusat (common fixed costs) sebesar Rp 180 jt yang dialokasikan 50:50.",
    p2: "Penyusunan Format Laporan Laba Rugi Segmen:",
    calculations: [
      "1. Margin Kontribusi: Elektronik = Rp 800 jt - Rp 450 jt = Rp 350.000.000; Mebel = Rp 500 jt - Rp 300 jt = Rp 200.000.000.",
      "2. Margin Segmen (Segment Margin): Elektronik = Rp 350 jt - Rp 150 jt = Rp 200.000.000; Mebel = Rp 200 jt - Rp 120 jt = Rp 80.000.000.",
      "3. Laba Operasi Bersih Perusahaan = Total Margin Segmen (Rp 200 jt + Rp 80 jt = Rp 280 jt) - Biaya Tetap Bersama (Rp 180 jt) = Rp 100.000.000.",
      "4. Evaluasi Keputusan Menutup Divisi: Jika direksi mengalokasikan biaya bersama ke Divisi Mebel (Rp 90 jt), Mebel tampak rugi Rp 10 jt (Rp 80 jt - Rp 90 jt). NAMUN jika Divisi Mebel ditutup, biaya tetap bersama Rp 90 jt TIDAK AKAN HILANG, melainkan dibebankan sepenuhnya ke Elektronik, dan perusahaan justru kehilangan kontribusi kas Rp 80.000.000!"
    ],
    takeaway: "Jangan pernah mengalokasikan Common Fixed Costs ke segmen untuk keputusan eliminasi produk. Segment Margin adalah satu-satunya ukuran terbaik atas kelayakan jangka panjang suatu divisi."
  },
  8: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Evaluasi Investasi Divisi ROI vs Residual Income (RI)",
    p1: "Divisi Otomotif memiliki aset operasi rata-rata Rp 2.000.000.000 dan laba operasi tahunan Rp 400.000.000 (ROI saat ini = 20%). Manajer divisi dihadapkan pada peluang proyek baru senilai Rp 500.000.000 yang menghasilkan laba operasi Rp 80.000.000 (pengembalian 16%). Biaya modal minimum perusahaan (hurdle rate) adalah 12%.",
    p2: "Perbandingan Keputusan Berdasarkan Metrik Evaluasi:",
    calculations: [
      "1. Evaluasi Berdasarkan ROI Divisi: ROI proyek baru = Rp 80 jt / Rp 500 jt = 16%. Jika proyek diambil, ROI gabungan divisi = (Rp 400 jt + Rp 80 jt) / (Rp 2 M + Rp 500 jt) = Rp 480 jt / Rp 2,5 M = 19,2%. Manajer divisi CENDERUNG MENOLAK proyek karena menurunkan ROI divisi dari 20% menjadi 19,2% (Sub-optimasi perilaku manajer!).",
      "2. Evaluasi Berdasarkan Residual Income (RI): RI Sebelum Proyek = Rp 400 jt - (12% × Rp 2 M) = Rp 400 jt - Rp 240 jt = Rp 160.000.000.",
      "3. RI dari Proyek Baru = Rp 80 jt - (12% × Rp 500 jt) = Rp 80 jt - Rp 60 jt = +Rp 20.000.000.",
      "4. Total RI Gabungan Baru = Rp 160 jt + Rp 20 jt = Rp 180.000.000 (MENINGKAT!).",
      "5. Kesimpulan Strategis: Proyek menghasilkan 16% (di atas biaya modal 12%), sehingga MENGUNTUNGKAN pemegang saham. Residual Income menyelaraskan tujuan divisi dengan tujuan perusahaan secara utuh (Goal Congruence)."
    ],
    takeaway: "Kelemahan fatal ROI adalah mendorong manajer divisi berkinerja tinggi menolak proyek-proyek menguntungkan hanya karena return proyek sedikit di bawah rata-rata divisi saat ini."
  },
  9: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Rumus Harga Transfer Minimum & Rentang Negosiasi",
    p1: "Divisi Komponen memproduksi chip sensor dengan biaya variabel Rp 35.000/unit dan total biaya tetap Rp 10.000/unit. Harga pasar eksternal chip adalah Rp 60.000/unit. Divisi Perakitan membutuhkan 10.000 unit chip dan saat ini membeli dari luar seharga Rp 58.000/unit.",
    p2: "Analisis Dua Skenario Kapasitas Pabrik:",
    calculations: [
      "Skenario A: Divisi Komponen Memiliki Kapasitas Menganggur (Idle Capacity) cukup:",
      "- Harga Transfer Minimum Penjual = Biaya Variabel + Opportunity Cost = Rp 35.000 + Rp 0 = Rp 35.000/unit.",
      "- Harga Transfer Maksimum Pembeli = Harga Pasar Luar = Rp 58.000/unit.",
      "- Rentang Negosiasi = Rp 35.000 s.d. Rp 58.000. Jika disepakati Rp 45.000, kedua divisi untung dan laba korporat naik Rp 230 juta (10.000 × [Rp 58rb - Rp 35rb]).",
      "Skenario B: Divisi Komponen Beroperasi pada Kapasitas Penuh (Full Capacity):",
      "- Harga Transfer Minimum Penjual = Biaya Variabel + Opportunity Cost (Marjin Luar yang hilang) = Rp 35.000 + (Rp 60.000 - Rp 35.000) = Rp 60.000/unit.",
      "- Karena pembeli hanya bersedia membayar Rp 58.000, transfer internal TIDAK BOLEH TERJADI. Lebih menguntungkan bagi korporat jika Divisi Perakitan membeli dari luar dan Divisi Komponen menjual ke pasar luar seharga Rp 60.000!"
    ],
    takeaway: "Rumus Harga Transfer Minimum: Biaya Variabel per unit + Biaya Peluang (Lost Contribution Margin per unit akibat mengorbankan penjualan luar)."
  },
  10: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Keputusan Taktis Make or Buy (Membuat vs Membeli)",
    p1: "PT Aneka Logam memproduksi 10.000 unit komponen mesin per tahun. Biaya internal: Bahan Baku Langsung Rp 40.000, TKL Rp 30.000, BOP Variabel Rp 15.000, BOP Tetap Terelusur yang dapat dihindari (avoidable) Rp 20.000, BOP Tetap Alokasi Umum (unavoidable) Rp 25.000. Total biaya = Rp 130.000/unit. Pemasok luar menawarkan harga pasokan Rp 110.000/unit.",
    p2: "Analisis Biaya Relevan Diferensial:",
    calculations: [
      "1. Identifikasi Biaya Relevan Membuat Sendiri (Avoidable Costs):",
      "- Bahan Baku: Rp 40.000",
      "- TKL: Rp 30.000",
      "- BOP Variabel: Rp 15.000",
      "- BOP Tetap Terelusur yang bisa dihapus: Rp 20.000",
      "- Total Biaya Relevan Membuat Sendiri = Rp 105.000/unit (Rp 1.050.000.000 untuk 10.000 unit).",
      "2. Biaya Relevan Membeli dari Luar = 10.000 unit × Rp 110.000 = Rp 1.100.000.000.",
      "3. Catatan: BOP Tetap Alokasi Umum Rp 25.000 adalah SUNK COST / UNAVOIDABLE karena akan tetap terjadi bagaimanapun keputusannya.",
      "4. Keputusan Manajerial: TETAP MEMBUAT SENDIRI. Menghemat Rp 50.000.000 per tahun (Rp 1.100.000.000 - Rp 1.050.000.000)."
    ],
    takeaway: "Jangan tertipu oleh angka Total Biaya Penuh (Rp 130.000). Hanya bandingkan biaya yang benar-benar hilang (avoidable cost Rp 105.000) dengan biaya pembelian luar (Rp 110.000)."
  },
  11: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Target Costing & Rekayasa Nilai (Value Engineering)",
    p1: "Riset pasar menunjukkan bahwa pelanggan bersedia membeli smartwatch baru seharga Rp 2.500.000. Perusahaan menargetkan Return on Sales (ROS) sebesar 20%. Estimasi biaya produksi awal saat ini adalah Rp 2.200.000 per unit.",
    p2: "Kalkulasi Target Costing & Cost Reduction Gap:",
    calculations: [
      "1. Target Laba per Unit = 20% × Rp 2.500.000 = Rp 500.000.",
      "2. Biaya Sasaran (Target Cost) = Harga Pasar Kompetitif - Target Laba = Rp 2.500.000 - Rp 500.000 = Rp 2.000.000/unit.",
      "3. Kesenjangan Pengurangan Biaya (Cost Reduction Gap) = Estimasi Biaya Awal (Rp 2.200.000) - Target Cost (Rp 2.000.000) = Rp 200.000/unit.",
      "4. Rekayasa Nilai (Value Engineering): Tim lintas fungsi (R&D, Pengadaan, Manufaktur) mendesain ulang casing baterai (menghemat Rp 80.000), menyederhanakan jumlah baut pengikat (menghemat perakitan Rp 70.000), dan menegosiasikan diskon chip volume besar (menghemat Rp 50.000).",
      "5. Hasil: Target cost Rp 2.000.000 tercapai SEBELUM lini produksi massal resmi diluncurkan."
    ],
    takeaway: "Target costing bekerja terbalik: Harga ditentukan pasar, laba ditentukan manajemen, dan biaya dipaksa menyesuaikan melalui desain ulang produk di fase perencanaan."
  },
  12: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Analisis Penganggaran Modal NPV & Tax Shield Depresiasi",
    p1: "PT Energi Nusantara mempertimbangkan pembelian mesin otomatis senilai Rp 800.000.000 dengan umur ekonomis 4 tahun tanpa nilai sisa (metode garis lurus = depresiasi Rp 200 jt/tahun). Mesin menghasilkan penghematan biaya tunai sebelum pajak Rp 350.000.000 per tahun. Tarif pajak penghasilan badan 22%, dan tingkat diskonto (WACC) 10%. Factor PV Annuity (n=4, i=10%) = 3,1699.",
    p2: "Kalkulasi Arus Kas Bersih Operasi Tahunan Setelah Pajak (CFAT):",
    calculations: [
      "1. Penghematan Tunai Setelah Pajak = Rp 350.000.000 × (1 - 0,22) = Rp 273.000.000.",
      "2. Manfaat Pajak Depresiasi (Depreciation Tax Shield) = Beban Depresiasi × Tarif Pajak = Rp 200.000.000 × 0,22 = Rp 44.000.000.",
      "3. Total Arus Kas Masuk Bersih Tahunan (CFAT) = Rp 273.000.000 + Rp 44.000.000 = Rp 317.000.000/tahun.",
      "4. Nilai Sekarang Arus Kas (PV of Inflows) = Rp 317.000.000 × 3,1699 = Rp 1.004.858.300.",
      "5. Net Present Value (NPV) = PV Inflows (Rp 1.004.858.300) - Investasi Awal (Rp 800.000.000) = +Rp 204.858.300.",
      "6. Kesimpulan: Karena NPV bernilai POSITIF (> 0), usulan investasi mesin WAJIB DITERIMA."
    ],
    takeaway: "Depresiasi bukan arus kas keluar, namun menghasilkan arus kas masuk riil berupa penghematan pembayaran pajak (Tax Shield = Depresiasi × Tarif Pajak)."
  },
  13: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Klasifikasi Biaya Kualitas PAF Model",
    p1: "PT Elektronika Mutu mencatat pengeluaran kualitas kuartal berjalan: Pelatihan Kualitas Karyawan Rp 25 jt; Audit Kualitas Pemasok Rp 15 jt; Inspeksi Bahan Masuk Rp 30 jt; Pengujian Produk Akhir di Lab Rp 40 jt; Pengerjaan Ulang Barang Cacat Pabrik (Rework) Rp 80 jt; Biaya Bahan Sisa Cacat (Scrap) Rp 60 jt; Garansi Reparasi Pelanggan Rp 110 jt; Kerugian Penjualan akibat Reputasi Buruk Rp 90 jt.",
    p2: "Pengelompokan Biaya Kualitas PAF Model:",
    calculations: [
      "1. Biaya Pencegahan (Prevention Costs): Pelatihan Kualitas (Rp 25 jt) + Audit Pemasok (Rp 15 jt) = Rp 40.000.000.",
      "2. Biaya Penilaian (Appraisal Costs): Inspeksi Bahan (Rp 30 jt) + Uji Lab (Rp 40 jt) = Rp 70.000.000.",
      "3. Biaya Kegagalan Internal (Internal Failure): Rework (Rp 80 jt) + Scrap (Rp 60 jt) = Rp 140.000.000.",
      "4. Biaya Kegagalan Eksternal (External Failure): Garansi (Rp 110 jt) + Reputasi Buruk (Rp 90 jt) = Rp 200.000.000.",
      "5. Total Biaya Kualitas = Rp 450.000.000. Rasio: Biaya Pengendalian (P+A) = Rp 110 jt (24,4%); Biaya Kegagalan (Internal + External) = Rp 340 jt (75,6%)."
    ],
    takeaway: "Prinsip 1-10-100: Investasi Rp 1 pada Pencegahan menghemat Rp 10 biaya Penilaian dan mencegah Rp 100 biaya bencana Kegagalan Eksternal."
  },
  14: {
    sectionTitle: "Ilustrasi Kasus Komprehensif: Balanced Scorecard & Analisis Sebab-Akibat Lintas Perspektif",
    p1: "PT Sukses Bahari merancang Balanced Scorecard dengan target meningkatkan Return on Equity (ROE) dari 14% menjadi 20%. Manajemen merumuskan peta strategi (Strategy Map) yang menghubungkan 4 perspektif BSC secara kausalitas sebab-akibat.",
    p2: "Analisis Jalur Sebab-Akibat (Cause-and-Effect Chain):",
    calculations: [
      "1. Pembelajaran & Pertumbuhan (Fondasi): Melatih staf teknisi dalam sertifikasi Six Sigma dan menyediakan sistem basis data pelanggan terpadu.",
      "2. Proses Bisnis Internal (Dampak Langsung dari Pelatihan): Waktu siklus pembuatan pesanan berkurang dari 12 hari menjadi 5 hari, dan tingkat cacat produk turun dari 4% menjadi 0,5%.",
      "3. Pelanggan (Dampak Langsung dari Kualitas & Kecepatan): Indeks kepuasan pelanggan naik menjadi 92%, dan persentase retensi pelanggan loyal meningkat 15%.",
      "4. Keuangan (Hasil Akhir): Pertumbuhan pendapatan penjualan sebesar 25% dan efisiensi biaya garansi menghasilkan pencapaian target ROE sebesar 20,4%!",
      "5. Metrik Kunci: Menggabungkan Indikator Pendorong (Leading Indicators: jam pelatihan) dan Indikator Hasil (Lagging Indicators: laba bersih/ROE)."
    ],
    takeaway: "Balanced Scorecard yang valid bukan sekadar daftar ukuran kinerja, melainkan narasi hipotesis tentang bagaimana kompetensi karyawan menggerakkan proses internal yang memuaskan pelanggan demi menghasilkan kinerja finansial unggul."
  }
};

for (let tm = 1; tm <= 14; tm++) {
  const filePath = path.join(akmenModulesDir, `tm${tm}.ts`);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');

  const ex = AKMEN_WORKED_EXAMPLES[tm];
  if (!ex) continue;

  // Cek apakah sudah ada section ini
  if (content.includes(ex.sectionTitle)) continue;

  const newBlocks = [
    `    {\n      "kind": "h2",\n      "text": ${JSON.stringify(ex.sectionTitle)}\n    }`,
    `    {\n      "kind": "p",\n      "text": ${JSON.stringify(ex.p1)}\n    }`,
    `    {\n      "kind": "p",\n      "text": ${JSON.stringify(ex.p2)}\n    }`,
    `    {\n      "kind": "ul",\n      "items": ${JSON.stringify(ex.calculations, null, 8).trim()}\n    }`,
    `    {\n      "kind": "callout",\n      "variant": "key",\n      "title": "Kesimpulan Analisis Manajerial",\n      "text": ${JSON.stringify(ex.takeaway)}\n    }`
  ].join(',\n');

  // Sisipkan sebelum blok terakhir (callout Kunci Penguasaan Materi)
  content = content.replace(
    /(\n\s*\{\s*"kind":\s*"h3",\s*"text":\s*"Rumus & Formula Kunci"[\s\S]*?\];\s*)/,
    `,\n${newBlocks}$1`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Enhanced TM ${tm} with rich worked examples!`);
}
