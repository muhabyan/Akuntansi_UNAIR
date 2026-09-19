// scripts/sem3-quiz-data.mjs
export const SEM3_QUIZ_DATA = {
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
  }
};
