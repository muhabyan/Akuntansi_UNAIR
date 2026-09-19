// scripts/sem3-bank-data.mjs
export const SEM3_BANK_DATA = {
  "AKM202": {
    "courseName": "Akuntansi Manajemen",
    "uts": [
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
    ],
    "uas": [
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
    ]
  },
  "AKA201": {
    "courseName": "Pengauditan Berbasis Risiko I",
    "uts": [
      {
        "type": "case",
        "scope": "TM 2–5: Kode Etik, Asersi & Penentuan Materialitas Audit",
        "difficulty": "Menengah",
        "estimatedTime": "30–40 menit",
        "question": "Penyusunan Ambang Batas Materialitas (Planning & Performance Materiality) dan Evaluasi Independensi",
        "context": "KAP Rama & Rekan ditunjuk mengaudit laporan keuangan PT Bintang Niaga Tbk untuk tahun buku yang berakhir 31 Desember 2024. Data keuangan pendahuluan klien: Total Aset Rp 200.000.000.000, Pendapatan Penjualan Rp 250.000.000.000, dan Laba Sebelum Pajak Rp 15.000.000.000. Partner audit menetapkan tolok ukur (benchmark) materialitas perencanaan sebesar 5% dari Laba Sebelum Pajak. Selain itu, diketahui bahwa salah satu anggota tim audit senior adalah menantu dari Direktur Utama klien.",
        "data": [
          "Tolok Ukur: 5% dari Laba Sebelum Pajak (Laba Sebelum Pajak: Rp 15 Miliar).",
          "Aturan KAP: Performance materiality ditetapkan 60% dari Planning Materiality; Ambang Trivial ditetapkan 4% dari Planning Materiality.",
          "Isu Independensi: Senior auditor memiliki hubungan kekerabatan dengan Direktur Utama klien."
        ],
        "instructions": [
          "Hitung Materialitas Laporan Keuangan secara Keseluruhan (Planning Materiality).",
          "Hitung Materialitas Pelaksanaan (Performance Materiality) dan Ambang Batas Sepele (Clearly Trivial).",
          "Evaluasi ancaman terhadap independensi auditor berdasarkan Kode Etik Akuntan Publik dan tentukan tindakan pencegahan (safeguard) yang wajib diambil KAP."
        ],
        "outputFormat": [
          "Perhitungan ambang batas materialitas bertingkat",
          "Analisis etika independensi dan mitigasi"
        ],
        "rubric": [
          "Ketepatan perhitungan ketiga level materialitas (40%)",
          "Identifikasi jenis ancaman independensi (30%)",
          "Kesesuaian safeguard pencegahan etika (30%)"
        ],
        "answerGuide": "1. Kalkulasi Ambang Batas Materialitas:\na. Materialitas Keseluruhan (Planning Materiality / PM):\n   PM = 5% × Laba Sebelum Pajak = 5% × Rp 15.000.000.000 = Rp 750.000.000.\nb. Materialitas Pelaksanaan (Performance Materiality):\n   Performance Materiality = 60% × Rp 750.000.000 = Rp 450.000.000.\n   (Fungsi: Membatasi akumulasi risiko salah saji yang tidak terdeteksi pada tingkat akun individual).\nc. Ambang Batas Sepele (Clearly Trivial Threshold):\n   Trivial = 4% × Rp 750.000.000 = Rp 30.000.000.\n   (Salah saji di bawah Rp 30 juta dianggap sepele dan tidak perlu diakumulasikan ke ringkasan salah saji yang belum dikoreksi).\n\n2. Evaluasi Ancaman Etika & Safeguards:\n- Identifikasi Ancaman: Hubungan kekerabatan senior auditor sebagai menantu Direktur Utama memicu Familiarity Threat (ancaman kedekatan) dan Self-Interest Threat yang sangat serius.\n- Tindakan Pencegahan (Safeguard) Wajib:\n  1. Senior auditor tersebut WAJIB SEGERA DIKELUARKAN dari tim penugasan audit PT Bintang Niaga Tbk.\n  2. Kertas kerja yang mungkin telah disusun oleh yang bersangkutan harus direviu ulang oleh staf independen lain.\n  3. Menugaskan Quality Review Partner (EQCR) yang independen untuk mengawasi area-area berisiko tinggi."
      }
    ],
    "uas": [
      {
        "type": "case",
        "scope": "TM 9–11: Model Risiko Audit & Evaluasi Segitiga Fraud SA 240",
        "difficulty": "Tinggi",
        "estimatedTime": "30–35 menit",
        "question": "Penerapan Audit Risk Model & Prosedur Respon Kecurangan Manajemen",
        "context": "Dalam perencanaan audit PT Cahaya Semesta, auditor menetapkan Acceptable Audit Risk (AAR) pada tingkat 5%. Berdasarkan pemahaman industri dan pengendalian internal klien, auditor menilai Inherent Risk (IR) akun Pendapatan sebesar 80% dan Control Risk (CR) sebesar 50% karena ketiadaan verifikasi independen atas surat jalan pengiriman. Selain itu, ditemukan indikasi bahwa kompensasi bonus manajemen sangat bergantung pada pencapaian target laba yang agresif.",
        "data": [
          "AAR = 5% (0,05).",
          "IR = 80% (0,80); CR = 50% (0,50).",
          "Fraud Risk Factor: Bonus manajer dikaitkan ketat dengan target laba akhir tahun."
        ],
        "instructions": [
          "Hitung Planned Detection Risk (PDR) menggunakan formula Audit Risk Model.",
          "Jelaskan dampak nilai PDR tersebut terhadap jumlah bukti audit substantif yang harus dihimpun.",
          "Analisis faktor risiko fraud berdasarkan Segitiga Kecurangan (Fraud Triangle).",
          "Rancang 3 prosedur audit spesifik untuk mendeteksi potensi kecurangan pengakuan pendapatan dini (cutoff fraud)."
        ],
        "outputFormat": [
          "Kalkulasi matematis PDR",
          "Analisis fraud triangle",
          "Program prosedur audit deteksi cutoff"
        ],
        "rubric": [
          "Ketepatan perhitungan PDR (25%)",
          "Analisis logika risiko dan bukti audit (25%)",
          "Evaluasi fraud triangle (25%)",
          "Perancangan prosedur audit spesifik (25%)"
        ],
        "answerGuide": "1. Perhitungan Planned Detection Risk (PDR):\nFormula: AAR = IR × CR × PDR\nPDR = AAR / (IR × CR)\nPDR = 0,05 / (0,80 × 0,50) = 0,05 / 0,40 = 0,125 (12,5%).\n\n2. Dampak terhadap Bukti Audit:\nNilai PDR sebesar 12,5% tergolong RENDAH. Risiko deteksi yang rendah mengharuskan auditor untuk TIDAK DAPAT mengandalkan pengendalian internal semata, melainkan WAJIB mengumpulkan bukti audit substantif dalam kuantitas yang LEBIH BESAR, lebih kompeten, dan memperluas sampel pengujian transaksi pendapatan mendekati akhir tahun.\n\n3. Analisis Segitiga Fraud (Fraud Triangle):\n- Tekanan (Pressure): Target laba yang agresif dan keterkaitan bonus direksi memicu tekanan berat untuk melakukan pelaporan keuangan curang.\n- Peluang (Opportunity): Kontrol verifikasi surat jalan pengiriman yang lemah (CR 50%) memberi celah mencatat faktur penjualan fiktif tanpa pengiriman fisik.\n- Rasionalisasi (Rationalization): Manajemen membenarkan tindakan memajukan pencatatan pendapatan bulan Januari ke Desember sebagai \"hanya penyesuaian waktu sementara\".\n\n4. Tiga Prosedur Audit Spesifik:\n1. Uji Pisah Batas Penjualan (Sales Cutoff Test): Memeriksa dokumen pengiriman (Bill of Lading) dan faktur penjualan 15 hari sebelum dan 15 hari sesudah tanggal neraca untuk memastikan transaksi dicatat pada periode yang benar.\n2. Konfirmasi Piutang Usaha Positif: Mengirimkan surat konfirmasi langsung kepada pelanggan utama terkait saldo piutang dan syarat penjualan konsinyasi/retur.\n3. Review Jurnal Penyesuaian Akhir Tahun: Menggunakan software audit (CAATs) untuk memfilter seluruh jurnal penyesuaian pendapatan manual yang dibuat pada tanggal 31 Desember atau mendekati penutupan buku."
      }
    ]
  }
};
