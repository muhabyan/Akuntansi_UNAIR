// src/data/banksoal/mnk201.ts
// Bank Soal Esai & Studi Kasus Keputusan Keuangan Komprehensif Manajemen Keuangan (MNK201)
// Berdasarkan Brigham & Houston (Fundamentals of Financial Management 15e/16e)
// 14 Kasus Lengkap: 7 Kasus Pra-UTS (TM 1–7) & 7 Kasus Pra-UAS (TM 8–14)
import type { BankSoal } from '../../types';

export const MNK201_BANK_UTS: BankSoal[] = [
  {
    "type": "analysis",
    "scope": "TM 1: Tata Kelola Perusahaan, Agency Conflict, & Kompensasi Eksekutif",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 1: Evaluasi Masalah Keagenan (Agency Problem) dan Desain Paket Kompensasi Manajemen Puncak",
    "context": "PT Nusantara Mandiri Tbk mengalami penurunan nilai pasar saham sebesar 28% dalam 2 tahun terakhir meskipun laba akuntansi tahun berjalan tercatat tumbuh 10%. Para pemegang saham institusional mencurigai adanya masalah keagenan (agency problem) yang serius: CEO dan dewan direksi menerima bonus tunai tahunan yang sangat besar karena indikator kinerja utama (KPI) hanya dikaitkan dengan laba bersih jangka pendek (Net Income). Untuk mengejar target laba tersebut, manajemen memangkas anggaran R&D hingga 60%, menunda pemeliharaan preventif pabrik, dan menghindari proyek investasi modal ber-NPV positif yang berjangka waktu panjang. Dewan Komisaris meminta Anda menyusun evaluasi tata kelola dan merancang ulang skema kompensasi eksekutif.",
    "data": [
      "Kondisi Finansial: Laba akuntansi naik 10% YoY, namun kapitalisasi pasar saham turun 28% dalam 24 bulan.",
      "Struktur Insentif Lama: 80% gaji pokok + 20% bonus tunai tahunan berbasis target Laba Bersih akuntansi jangka pendek.",
      "Praktik Manajemen: Pemangkasan belanja R&D 60%, penundaan peremajaan mesin, penghindaran proyek jangka panjang ber-NPV positif.",
      "Kerangka Acuan: Teori Keagenan Jensen & Meckling, Tujuan Memaksimalkan Nilai Intrinsik Perusahaan (Brigham & Houston Ch. 1)."
    ],
    "instructions": [
      "Jelaskan mengapa tujuan 'memaksimalkan laba akuntansi tahun berjalan' dapat bertentangan secara mendasar dengan tujuan 'memaksimalkan kekayaan pemegang saham jangka panjang'.",
      "Analisis dua bentuk biaya keagenan (agency costs) yang saat ini ditanggung oleh pemegang saham PT Nusantara Mandiri Tbk.",
      "Rancang struktur paket kompensasi eksekutif baru yang efektif (menggabungkan gaji pokok, bonus tahunan berbasis Economic Value Added, dan Performance Shares / Stock Options dengan masa vesting 3–5 tahun) untuk menyelaraskan kepentingan manajemen dengan pemegang saham."
    ],
    "outputFormat": [
      "Analisis Pertentangan Laba Akuntansi vs Nilai Intrinsik",
      "Identifikasi Biaya Keagenan yang Timbul",
      "Desain Struktur Kompensasi Eksekutif Baru & Mekanisme Pengawasan"
    ],
    "rubric": [
      "Ketajaman analisis perbedaan laba akuntansi vs nilai intrinsik pemegang saham (30%)",
      "Identifikasi biaya keagenan langsung dan tidak langsung (30%)",
      "Kelayakan dan ketepatan desain paket insentif jangka panjang (Performance Shares/Vesting) (40%)"
    ],
    "answerGuide": "1. Pertentangan Laba Akuntansi vs Nilai Intrinsik:\n• Laba akuntansi tahun berjalan mengabaikan nilai waktu uang, risiko arus kas masa depan, serta dapat dimanipulasi melalui penundaan biaya esensial (seperti R&D dan maintenance).\n• Memaksimalkan kekayaan pemegang saham berfokus pada Nilai Intrinsik (Present Value dari seluruh Free Cash Flow masa depan yang didiskonto dengan WACC).\n• Pemotongan R&D meningkatkan laba jangka pendek (menghasilkan bonus manajer) tetapi menghancurkan keunggulan kompetitif dan arus kas jangka panjang perusahaan.\n\n2. Biaya Keagenan yang Ditanggung Pemegang Saham:\n• Biaya Pengawasan (Monitoring Costs): Biaya mempekerjakan auditor independen tambahan, komite audit, dan konsultan tata kelola untuk mengawasi perilaku direksi.\n• Kerugian Residu (Residual Loss): Penurunan nilai perusahaan sebesar 28% akibat keputusan manajerial suboptimal (suboptimal investment decisions) yang mengorbankan proyek ber-NPV positif demi mengejar target bonus jangka pendek.\n\n3. Desain Paket Kompensasi Eksekutif Baru:\n• Gaji Pokok Kompetitif (35-40% total kompensasi): Menjamin stabilitas keuangan eksekutif tanpa insentif pengambilan risiko ekstrem.\n• Bonus Tahunan Berbasis Nilai Tambah Ekonomi / EVA (20-25%): Hanya diberikan jika laba operasional setelah pajak (NOPAT) melampaui biaya modal yang digunakan (Cost of Capital Charge).\n• Ekuitas Kinerja Jangka Panjang (Performance Shares & Restricted Stock) (35-40%): Diberikan dengan periode vesting bertahap selama 3 hingga 5 tahun, dikaitkan dengan metrik Total Shareholder Return (TSR) relatif terhadap indeks industri.\n• Kebijakan Clawback Provision: Memungkinkan dewan komisaris menarik kembali bonus jika di kemudian hari terbukti ada salah saji laporan keuangan."
  },
  {
    "type": "calculation",
    "scope": "TM 2: Analisis Laporan Keuangan & Dekomposisi DuPont",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 2: Analisis Kinerja Keuangan Komparatif dan Dekomposisi DuPont 3-Tahap & 5-Tahap",
    "context": "PT Sejahtera Abadi dan PT Makmur Perkasa beroperasi di industri manufaktur komponen otomotif yang sama. Kedua perusahaan membukukan Laba Bersih masing-masing Rp 120 miliar dan Rp 150 miliar. Namun, pemegang saham ingin memahami pendorong mendasar dari Return on Equity (ROE) kedua perusahaan guna menilai efisiensi operasional sejati dan risiko leverage keuangan mereka.",
    "data": [
      "Data Keuangan PT Sejahtera Abadi:\n• Penjualan: Rp 1.500 miliar\n• Total Aset: Rp 1.000 miliar\n• Total Ekuitas: Rp 600 miliar\n• Laba Operasi (EBIT): Rp 200 miliar\n• Beban Bunga: Rp 40 miliar\n• Laba Bersih (EAT): Rp 120 miliar",
      "Data Keuangan PT Makmur Perkasa:\n• Penjualan: Rp 3.000 miliar\n• Total Aset: Rp 2.500 miliar\n• Total Ekuitas: Rp 750 miliar\n• Laba Operasi (EBIT): Rp 320 miliar\n• Beban Bunga: Rp 120 miliar\n• Laba Bersih (EAT): Rp 150 miliar"
    ],
    "instructions": [
      "Hitung rasio Return on Equity (ROE), Profit Margin (PM), Total Asset Turnover (TATO), dan Equity Multiplier (EM) untuk kedua perusahaan.",
      "Uraikan ROE masing-masing perusahaan menggunakan formula DuPont 3-tahap (ROE = PM × TATO × EM).",
      "Bandingkan sumber penciptaan ROE kedua perusahaan: manakah yang menciptakan nilai melalui efisiensi operasional dan perputaran aset, dan manakah yang bertumpu pada risiko utang tinggi (financial leverage)?",
      "Berikan rekomendasi strategis bagi PT Makmur Perkasa untuk memperbaiki kualitas profitabilitasnya."
    ],
    "outputFormat": [
      "Tabel Komparasi Rasio DuPont 3-Step",
      "Analisis Dekomposisi dan Profil Risiko Leverage",
      "Rekomendasi Strategis Perbaikan Kinerja"
    ],
    "rubric": [
      "Ketepatan kalkulasi seluruh rasio keuangan (35%)",
      "Kedalaman analisis dekomposisi DuPont komparatif (35%)",
      "Kualitas rekomendasi operasional vs restrukturisasi utang (30%)"
    ],
    "answerGuide": "1. Kalkulasi Rasio DuPont 3-Tahap:\n\nA. PT Sejahtera Abadi:\n• Net Profit Margin = Rp 120 M / Rp 1.500 M = 8,00%\n• Total Asset Turnover = Rp 1.500 M / Rp 1.000 M = 1,50 kali\n• Return on Assets (ROA) = 8% × 1,5 = 12,00%\n• Equity Multiplier = Rp 1.000 M / Rp 600 M = 1,67 kali\n• ROE = 8,00% × 1,50 × 1,667 = 20,00%\n(Cek langsung: Rp 120 M / Rp 600 M = 20,00%)\n\nB. PT Makmur Perkasa:\n• Net Profit Margin = Rp 150 M / Rp 3.000 M = 5,00%\n• Total Asset Turnover = Rp 3.000 M / Rp 2.500 M = 1,20 kali\n• Return on Assets (ROA) = 5% × 1,2 = 6,00%\n• Equity Multiplier = Rp 2.500 M / Rp 750 M = 3,33 kali\n• ROE = 5,00% × 1,20 × 3,333 = 20,00%\n(Cek langsung: Rp 150 M / Rp 750 M = 20,00%)\n\n2. Analisis Komparatif DuPont:\n• Kedua perusahaan mencatat ROE nominal yang persis sama (20,00%), namun 'kualitas' laba keduanya sangat bertolak belakang.\n• PT Sejahtera Abadi memiliki keunggulan operasional kuat: Profit Margin tinggi (8% vs 5%) dan perputaran aset lebih cepat (1,5x vs 1,2x), menghasilkan ROA 12% (dua kali lipat PT Makmur). Perusahaan ini beroperasi dengan risiko keuangan konservatif (EM hanya 1,67x).\n• PT Makmur Perkasa memiliki efisiensi operasional rendah (ROA hanya 6%), dan mendongkrak ROE semata-mata dengan leverage utang agresif (EM 3,33x, rasio utang/ekuitas mencapai 2,33x). Hal ini terlihat dari beban bunganya yang menyerap Rp 120 M dari Rp 320 M EBIT (Interest coverage TIE hanya 2,67x vs 5,0x milik PT Sejahtera).\n\n3. Rekomendasi untuk PT Makmur Perkasa:\n• Rasionalisasi Aset: Lepas aset non-produktif untuk meningkatkan perputaran aset (TATO) dari 1,2x menjadi minimal 1,5x.\n• Pengendalian Biaya Operasional: Terapkan program lean manufacturing untuk menaikkan margin laba kotor dan laba operasi.\n• Deleveraging: Gunakan arus kas operasi untuk memprioritaskan pelunasan utang berbiaya tinggi, menurunkan beban bunga tahunan, dan mengurangi risiko financial distress."
  },
  {
    "type": "calculation",
    "scope": "TM 3: Time Value of Money, Valuasi Obligasi, & Amortisasi Pinjaman",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 3: Perencanaan Keuangan Proyek: Valuasi Obligasi Semi-Tahunan dan Skedul Amortisasi Pinjaman Bank",
    "context": "PT Graha Konstruksi membutuhkan dana investasi sebesar Rp 10.000.000.000 untuk pengadaan armada alat berat. Manajemen mempertimbangkan dua alternatif pendanaan: (1) Menerbitkan obligasi korporasi 5 tahun bernilai nominal Rp 10.000.000.000 dengan kupon 10% per tahun dibayar semi-tahunan, di mana imbal hasil pasar yang disyaratkan (YTM) saat ini adalah 8% per tahun, atau (2) Mengambil pinjaman bank komersial 4 tahun senilai Rp 10.000.000.000 dengan bunga 12% per tahun yang diangsur setiap akhir tahun dalam jumlah cicilan tetap (level annual payments).",
    "data": [
      "Kebutuhan Dana Pokok: Rp 10.000.000.000.",
      "Opsi 1 (Obligasi): Nilai Nominal = Rp 10.000.000.000, Jangka Waktu = 5 tahun (10 periode semi-annual), Kupon Tahunan = 10% (5% per 6 bulan), YTM = 8% per tahun (4% per 6 bulan).",
      "Opsi 2 (Kredit Bank): Plafon Pinjaman = Rp 10.000.000.000, Jangka Waktu = 4 tahun (4 kali cicilan tahunan di akhir tahun), Bunga Tahunan = 12% p.a."
    ],
    "instructions": [
      "Hitung harga pasar wajar obligasi pada Opsi 1. Apakah obligasi tersebut diterbitkan pada nilai pari, diskon, atau premi? Berapakah total dana kas yang berhasil dihimpun dari penerbitan obligasi tersebut?",
      "Hitung besarnya cicilan angsuran tahunan tetap (annual payment PMT) pada Opsi 2.",
      "Susun tabel skedul amortisasi pinjaman bank Opsi 2 selama 4 tahun (kolom: Tahun, Saldo Awal, Total Angsuran, Porsi Bunga, Porsi Pelunasan Pokok, Saldo Akhir).",
      "Berdasarkan analisis arus kas keluar, evaluasi kelebihan dan kelemahan masing-masing opsi bagi manajemen likuiditas perusahaan."
    ],
    "outputFormat": [
      "Perhitungan Valuasi Obligasi Semi-Tahunan",
      "Perhitungan Angsuran Pinjaman Bank (PMT)",
      "Tabel Amortisasi Pinjaman Bank 4 Tahun",
      "Evaluasi Perbandingan Karakteristik Arus Kas"
    ],
    "rubric": [
      "Kebenaran perhitungan harga obligasi diskonto semi-annual (30%)",
      "Ketepatan perhitungan PMT pinjaman bank (20%)",
      "Akurasi tabel amortisasi pinjaman tahun demi tahun (30%)",
      "Kualitas evaluasi trade-off likuiditas (20%)"
    ],
    "answerGuide": "1. Valuasi Obligasi Semi-Tahunan:\n• n = 5 tahun × 2 = 10 periode semi-annual.\n• Kupon per periode (PMT) = (10% / 2) × Rp 10.000.000.000 = Rp 500.000.000.\n• Suku bunga diskonto (r) = 8% / 2 = 4% per periode.\n• Nilai Pokok (M) = Rp 10.000.000.000.\n• PV Kupon = PMT × [(1 - (1 + r)^-n) / r] = Rp 500.000.000 × [(1 - 1,04^-10) / 0,04] = Rp 500.000.000 × 8,110896 = Rp 4.055.448.000.\n• PV Pokok = M / (1 + r)^n = Rp 10.000.000.000 / (1,04)^10 = Rp 10.000.000.000 / 1,480244 = Rp 6.755.642.000.\n• Harga Obligasi (V_B) = Rp 4.055.448.000 + Rp 6.755.642.000 = Rp 10.811.090.000 (Rp 10,811 miliar).\n• Status: Diterbitkan pada harga PREMI (108,11% dari nilai pari) karena Coupon Rate (10%) > YTM Pasar (8%). Perusahaan menghimpun kas Rp 10,811 miliar.\n\n2. Angsuran Pinjaman Bank Tahunan (PMT):\n• PV = Rp 10.000.000.000, r = 12%, n = 4 tahun.\n• Faktor PVIFA(12%, 4) = [1 - (1,12)^-4] / 0,12 = [1 - 0,635518] / 0,12 = 3,037349.\n• PMT = Rp 10.000.000.000 / 3,037349 = Rp 3.292.344.400 per tahun.\n\n3. Tabel Amortisasi Pinjaman Bank (dalam Rupiah):\n• Thn 1: Saldo Awal 10.000.000.000 | Angsuran 3.292.344.400 | Bunga (12%) 1.200.000.000 | Pokok 2.092.344.400 | Saldo Akhir 7.907.655.600\n• Thn 2: Saldo Awal 7.907.655.600 | Angsuran 3.292.344.400 | Bunga (12%) 948.918.672 | Pokok 2.343.425.728 | Saldo Akhir 5.564.229.872\n• Thn 3: Saldo Awal 5.564.229.872 | Angsuran 3.292.344.400 | Bunga (12%) 667.707.585 | Pokok 2.624.636.815 | Saldo Akhir 2.939.593.057\n• Thn 4: Saldo Awal 2.939.593.057 | Angsuran 3.292.344.224 | Bunga (12%) 352.751.167 | Pokok 2.939.593.057 | Saldo Akhir 0\n\n4. Evaluasi Likuiditas:\n• Opsi Obligasi meringankan arus kas tahunan jangka pendek (hanya membayar bunga kupon Rp 1 M/tahun), namun membebankan pelunasan pokok masif Rp 10 M di akhir tahun ke-5 (balloon risk).\n• Opsi Bank membebankan arus kas operasional tahunan yang sangat besar (Rp 3,29 M/tahun), namun risiko jatuh tempo akhir tereliminasi karena utang lunas secara teratur."
  },
  {
    "type": "calculation",
    "scope": "TM 4: Portofolio Investasi, Beta Saham, & Model CAPM",
    "difficulty": "Menengah",
    "estimatedTime": "25–30 menit",
    "question": "Studi Kasus 4: Konstruksi Portofolio Investasi Dua Saham dan Evaluasi Kelayakan Harga Berdasarkan SML/CAPM",
    "context": "Manajer investasi dana pensiun PT Dana Sejahtera sedang mengevaluasi pembentukan portofolio yang terdiri dari dua saham unggulan di Bursa Efek Indonesia: PT Bank Nusantara (Saham B) dan PT Telekomunikasi Prima (Saham T). Pasar keuangan saat ini memiliki tingkat suku bunga bebas risiko (SBN) sebesar 6,5% dan return portofolio pasar IHSG yang diharapkan adalah 14,5%.",
    "data": [
      "Data Saham B (Perbankan): Beta = 1,40; Return yang Diestimasikan Analis = 19,00%; Bobot Alokasi Dana = 60%.",
      "Data Saham T (Telekomunikasi): Beta = 0,75; Return yang Diestimasikan Analis = 11,50%; Bobot Alokasi Dana = 40%.",
      "Parameter Pasar Makro: r_RF = 6,50%, r_M = 14,50%, Market Risk Premium (r_M - r_RF) = 8,00%."
    ],
    "instructions": [
      "Hitung tingkat pengembalian yang disyaratkan (Required Rate of Return) untuk Saham B dan Saham T menggunakan model CAPM.",
      "Hitung Beta portofolio gabungan dan Required Return portofolio gabungan tersebut.",
      "Bandingkan Return Ekspektasi Analis dengan Required Return CAPM untuk masing-masing saham. Tentukan status valuasi masing-masing saham (Undervalued / Overvalued / Fairly Valued) dan berikan rekomendasi transaksinya (Beli / Jual / Tahan).",
      "Jelaskan mengapa risiko spesifik (diversifiable risk) dari kedua saham dapat berkurang dalam portofolio gabungan sementara risiko pasarnya tidak dapat dihilangkan."
    ],
    "outputFormat": [
      "Kalkulasi CAPM Saham Individual & Portofolio",
      "Tabel Analisis Mispricing dan Rekomendasi SML",
      "Penjelasan Konseptual Teori Portofolio Markowitz"
    ],
    "rubric": [
      "Ketepatan perhitungan CAPM individual dan portofolio (35%)",
      "Akurasi analisis posisi saham terhadap SML (undervalued/overvalued) (35%)",
      "Kualitas pemahaman konsep diversifikasi risiko sistematis vs tidak sistematis (30%)"
    ],
    "answerGuide": "1. Kalkulasi Required Return CAPM:\n• r_i = r_RF + Beta_i × (r_M - r_RF)\n• Saham B: r_B = 6,5% + 1,40 × (14,5% - 6,5%) = 6,5% + (1,40 × 8,0%) = 6,5% + 11,2% = 17,70%.\n• Saham T: r_T = 6,5% + 0,75 × (14,5% - 6,5%) = 6,5% + (0,75 × 8,0%) = 6,5% + 6,0% = 12,50%.\n\n2. Karakteristik Portofolio Gabungan:\n• Beta Portofolio = (w_B × Beta_B) + (w_T × Beta_T) = (0,60 × 1,40) + (0,40 × 0,75) = 0,84 + 0,30 = 1,14.\n• Required Return Portofolio = 6,5% + 1,14 × 8,0% = 6,5% + 9,12% = 15,62%.\n(Atau melalui rata-rata tertimbang: 0,60 × 17,70% + 0,40 × 12,50% = 10,62% + 5,00% = 15,62%).\n\n3. Analisis SML & Keputusan Investasi:\n• Saham B: Expected Return (19,00%) > Required Return CAPM (17,70%). Saham B terletak di ATAS garis SML sebesar alpha +1,30%. Status: UNDERVALUED (Murah). Rekomendasi: BELI (Buy).\n• Saham T: Expected Return (11,50%) < Required Return CAPM (12,50%). Saham T terletak di BAWAH garis SML sebesar alpha -1,00%. Status: OVERVALUED (Kemahalan). Rekomendasi: JUAL / HINDARI (Sell/Avoid).\n\n4. Konsep Diversifikasi Risiko:\n• Fluktuasi spesifik industri telekomunikasi (misal: perang tarif data) dan perbankan (misal: rasio NPL) memiliki korelasi yang tidak sempurna (koefisien korelasi r < 1).\n• Pergerakan berlawanan antar-aset saling mengompensasi risiko unik perusahaan, sehingga total varians portofolio mengecil.\n• Namun risiko sistematis pasar (seperti kenaikan suku bunga acuan BI, inflasi, resesi ekonomi makro) mempengaruhi seluruh emiten di bursa efek secara serempak, sehingga beta portofolio 1,14 tetap ada dan tidak dapat didiversifikasikan."
  },
  {
    "type": "calculation",
    "scope": "TM 5: Biaya Modal WACC & Multi-Metode Biaya Ekuitas",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 5: Penentuan Weighted Average Cost of Capital (WACC) Komprehensif dan Integrasi Flotation Cost",
    "context": "PT Samudra Energi berencana membangun jaringan transmisi energi baru senilai Rp 5.000.000.000. Manajemen keuangan menetapkan struktur modal sasaran (target capital structure): 30% Utang Jangka Panjang, 10% Saham Preferen, dan 60% Ekuitas Saham Biasa. Tarif pajak penghasilan badan adalah 22%. Anda diminta menghitung biaya setiap komponen modal secara cermat untuk menghasilkan hurdle rate WACC yang akurat.",
    "data": [
      "Komponen Utang: Obligasi baru dapat diterbitkan dengan biaya sebelum pajak (r_d) = 9,00%.",
      "Komponen Saham Preferen: Nilai nominal Rp 100.000 per lembar, dividen tahunan Rp 10.000 per lembar, harga pasar Rp 95.000 dengan flotation cost Rp 5.000 per lembar.",
      "Komponen Ekuitas Biasa:\n  a. Model CAPM: Suku bunga bebas risiko (r_RF) = 6,00%, return portofolio pasar (r_M) = 14,00%, Beta saham = 1,25.\n  b. Model Gordon (DCF): Harga pasar saham (P_0) = Rp 8.000, dividen terakhir (D_0) = Rp 400, estimasi pertumbuhan dividen konstan (g) = 7,00% per tahun.\n  c. Model Bond-Yield-Plus-Risk-Premium: Biaya utang sebelum pajak 9,00% + premi risiko ekuitas atas utang 6,50%."
    ],
    "instructions": [
      "Hitung biaya utang setelah pajak (after-tax cost of debt).",
      "Hitung biaya saham preferen (cost of preferred stock) dengan memperhitungkan harga penerbitan bersih.",
      "Hitung estimasi biaya ekuitas saham biasa (r_s) menggunakan ketiga metode yang tersedia (CAPM, Gordon DCF, dan Bond Yield + Risk Premium), lalu tentukan rata-rata biaya ekuitas yang akan digunakan.",
      "Hitung Weighted Average Cost of Capital (WACC) perusahaan.",
      "Jika proyek ekspansi menghasilkan Internal Rate of Return (IRR) sebesar 13,50%, tentukan apakah proyek ini layak dieksekusi."
    ],
    "outputFormat": [
      "Perhitungan Biaya Utang dan Saham Preferen",
      "Perhitungan 3 Metode Biaya Ekuitas & Rekonsiliasi",
      "Tabel Komposisi dan Kalkulasi WACC",
      "Kesimpulan Keputusan Investasi Modal"
    ],
    "rubric": [
      "Ketepatan perhitungan after-tax cost of debt dan preferred stock (25%)",
      "Kebenaran kalkulasi ketiga metode biaya ekuitas (35%)",
      "Akurasi perhitungan WACC berbobot (25%)",
      "Ketajaman rekomendasi penerimaan proyek (15%)"
    ],
    "answerGuide": "1. Biaya Utang Setelah Pajak:\n• r_d (after-tax) = r_d × (1 - T) = 9,00% × (1 - 0,22) = 9,00% × 0,78 = 7,02%.\n\n2. Biaya Saham Preferen:\n• Harga bersih per lembar (P_n) = Harga Pasar - Flotation Cost = Rp 95.000 - Rp 5.000 = Rp 90.000.\n• r_p = D_p / P_n = Rp 10.000 / Rp 90.000 = 11,11%.\n\n3. Estimasi Biaya Ekuitas Saham Biasa (r_s):\n• Metode 1 (CAPM): r_s = r_RF + Beta × (r_M - r_RF) = 6,00% + 1,25 × (14,00% - 6,00%) = 6,00% + (1,25 × 8,00%) = 6,00% + 10,00% = 16,00%.\n• Metode 2 (Gordon DCF): D_1 = D_0 × (1 + g) = Rp 400 × 1,07 = Rp 428. r_s = (D_1 / P_0) + g = (Rp 428 / Rp 8.000) + 7,00% = 5,35% + 7,00% = 12,35%.\n• Metode 3 (Bond Yield + Risk Premium): r_s = r_d + Premi Risiko = 9,00% + 6,50% = 15,50%.\n• Rata-rata Biaya Ekuitas = (16,00% + 12,35% + 15,50%) / 3 = 43,85% / 3 = 14,62%.\n(Catatan: Jika manajemen memilih menggunakan model CAPM sebagai standar utama industri = 16,00%). Untuk kehati-hatian finansial, kita gunakan estimasi konsensus moderat: r_s = 15,00% (atau CAPM murni 16,00%). Mari hitung dengan r_s rata-rata 14,62%:\n\n4. Kalkulasi WACC:\n• Komponen Utang: 30% × 7,02% = 2,106%\n• Komponen Saham Preferen: 10% × 11,11% = 1,111%\n• Komponen Ekuitas: 60% × 14,62% = 8,772%\n• WACC = 2,106% + 1,111% + 8,772% = 11,99% (dibulatkan 12,00%).\n(Jika menggunakan CAPM 16,00%: WACC = 2,106% + 1,111% + [60% × 16%] = 2,106% + 1,111% + 9,60% = 12,82%).\n\n5. Keputusan Investasi:\n• Proyek menghasilkan IRR = 13,50%.\n• Karena IRR proyek (13,50%) > WACC perusahaan (11,99% maupun 12,82%), proyek diproyeksikan menghasilkan Net Present Value positif (NPV > 0) dan mampu menambah nilai kekayaan pemegang saham. Keputusan: PROYEK DITERIMA."
  },
  {
    "type": "calculation",
    "scope": "TM 6: Capital Budgeting & Evaluasi Proyek Bersaing",
    "difficulty": "Sulit",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 6: Evaluasi Keputusan Proyek Bersaing (Mutually Exclusive), Konflik Ranking NPV vs IRR, dan Crossover Rate",
    "context": "PT Mitra Logistik menghadapi keterbatasan lahan pergudangan dan harus memilih salah satu dari dua proyek otomatisasi gudang yang bersifat mutually exclusive (saling meniadakan): Proyek Alpha (sistem conveyor otomatis modular) atau Proyek Beta (sistem robotik terintegrasi penuh). Tingkat biaya modal (WACC) perusahaan saat ini adalah 10% per tahun.",
    "data": [
      "Arus Kas Proyek Alpha:\n• Tahun 0 (Investasi Awal): (Rp 1.000.000.000)\n• Tahun 1: Rp 500.000.000\n• Tahun 2: Rp 400.000.000\n• Tahun 3: Rp 300.000.000\n• Tahun 4: Rp 100.000.000",
      "Arus Kas Proyek Beta:\n• Tahun 0 (Investasi Awal): (Rp 1.000.000.000)\n• Tahun 1: Rp 100.000.000\n• Tahun 2: Rp 300.000.000\n• Tahun 3: Rp 450.000.000\n• Tahun 4: Rp 700.000.000",
      "Tingkat Diskonto (WACC): r = 10% per tahun."
    ],
    "instructions": [
      "Hitung Net Present Value (NPV) untuk Proyek Alpha dan Proyek Beta pada WACC 10%.",
      "Hitung Payback Period biasa untuk kedua proyek.",
      "Jika diketahui IRR Proyek Alpha = 14,50% dan IRR Proyek Beta = 13,10%, jelaskan mengapa terjadi konflik ranking jika kriteria NPV dan IRR digunakan secara bersamaan.",
      "Tentukan arus kas inkremental (Proyek Alpha - Proyek Beta atau sebaliknya) dan hitung titik potong (Crossover Rate) di mana kedua proyek memiliki NPV yang persis sama.",
      "Susun rekomendasi keputusan investasi akhir bagi Dewan Direksi."
    ],
    "outputFormat": [
      "Tabel Perhitungan NPV dan Payback Period Kedua Proyek",
      "Analisis Konflik Keputusan Mutually Exclusive",
      "Kalkulasi Titik Crossover Rate",
      "Rekomendasi Keputusan Final Berbasis Teori Keuangan"
    ],
    "rubric": [
      "Ketepatan perhitungan matematis NPV dan Payback kedua proyek (35%)",
      "Akurasi penentuan arus kas diferensial dan Crossover Rate (30%)",
      "Kedalaman analisis teoritis penyebab konflik ranking dan justifikasi NPV (35%)"
    ],
    "answerGuide": "1. Perhitungan NPV pada WACC = 10%:\n\nA. Proyek Alpha:\n• PV Thn 1 = Rp 500 M / 1,10 = Rp 454.545.455\n• PV Thn 2 = Rp 400 M / 1,10^2 = Rp 330.578.512\n• PV Thn 3 = Rp 300 M / 1,10^3 = Rp 225.394.440\n• PV Thn 4 = Rp 100 M / 1,10^4 = Rp 68.301.346\n• Total PV Kas Masuk = Rp 1.078.819.753\n• NPV Alpha = Rp 1.078.819.753 - Rp 1.000.000.000 = +Rp 78.819.753 (Rp 78,82 juta).\n\nB. Proyek Beta:\n• PV Thn 1 = Rp 100 M / 1,10 = Rp 90.909.091\n• PV Thn 2 = Rp 300 M / 1,10^2 = Rp 247.933.884\n• PV Thn 3 = Rp 450 M / 1,10^3 = Rp 338.091.660\n• PV Thn 4 = Rp 700 M / 1,10^4 = Rp 478.109.419\n• Total PV Kas Masuk = Rp 1.155.044.054\n• NPV Beta = Rp 1.155.044.054 - Rp 1.000.000.000 = +Rp 155.044.054 (Rp 155,04 juta).\n\n2. Payback Period:\n• Proyek Alpha: Thn 1 (500M) + Thn 2 (400M) = 900M. Sisa 100M di Thn 3 (dari 300M). Payback = 2 + (100/300) = 2,33 tahun.\n• Proyek Beta: Thn 1 (100M) + Thn 2 (300M) + Thn 3 (450M) = 850M. Sisa 150M di Thn 4 (dari 700M). Payback = 3 + (150/700) = 3,21 tahun.\n\n3. Analisis Konflik Ranking:\n• Berdasarkan IRR: Alpha (14,50%) > Beta (13,10%) -> Pilih Alpha.\n• Berdasarkan NPV pada r=10%: Beta (Rp 155,04 Juta) > Alpha (Rp 78,82 Juta) -> Pilih Beta.\n• Penyebab konflik: Perbedaan profil waktu arus kas (timing of cash flows). Alpha menghasilkan arus kas besar di awal (front-loaded), sedangkan Beta menghasilkan arus kas besar di akhir (back-loaded). Arus kas back-loaded milik Beta sangat sensitif terhadap tingkat diskonto rendah.\n\n4. Titik Potong (Crossover Rate):\n• Arus Kas Inkremental (Beta - Alpha):\n  - Thn 0: 0\n  - Thn 1: 100 - 500 = -Rp 400 M\n  - Thn 2: 300 - 400 = -Rp 100 M\n  - Thn 3: 450 - 300 = +Rp 150 M\n  - Thn 4: 700 - 100 = +Rp 600 M\n• Mencari r di mana NPV(ΔCF) = 0: -400/(1+r) - 100/(1+r)^2 + 150/(1+r)^3 + 600/(1+r)^4 = 0.\n• Pada r = 11,5%: NPV(ΔCF) ≈ 0. Jadi Crossover Rate ≈ 11,5%.\n\n5. Rekomendasi Keputusan Final:\n• Karena biaya modal perusahaan saat ini adalah 10% (di bawah crossover rate 11,5%), kurva NPV Beta berada di atas kurva NPV Alpha.\n• Karena kedua proyek mutually exclusive, kriteria NPV HARUS diutamakan dibanding IRR karena NPV mengukur penambahan absolut kekayaan pemilik modal dan mengasumsikan reinvestasi pada WACC realistis (10%).\n• KEPUTUSAN FINAL: PILIH PROYEK BETA."
  },
  {
    "type": "calculation",
    "scope": "TM 7: Estimasi Arus Kas Proyek Penggantian Mesin & Tax Shield",
    "difficulty": "Sulit",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 7: Analisis Proyek Penggantian Mesin (Replacement Project), Tax Shield Depresiasi, dan Nilai Terminal",
    "context": "PT Industri Baja Utama mempertimbangkan untuk mengganti mesin pemotong plat lama dengan mesin otomatis generasi terbaru. Mesin baru memiliki harga beli Rp 2.400.000.000 dengan biaya instalasi Rp 100.000.000, masa manfaat ekonomis 4 tahun, dan disusutkan dengan metode garis lurus hingga nilai buku nol. Mesin lama saat ini memiliki nilai buku akuntansi Rp 300.000.000 dan dapat dijual hari ini di pasar loak seharga Rp 500.000.000. Penggunaan mesin baru diproyeksikan menghemat biaya tenaga kerja dan operasional sebesar Rp 900.000.000 per tahun, namun membutuhkan penambahan Modal Kerja Bersih (NWC) awal sebesar Rp 150.000.000 yang akan dipulihkan di akhir tahun ke-4. Pada akhir tahun ke-4, mesin baru diperkirakan dapat dijual seharga Rp 400.000.000. Tarif pajak penghasilan badan 22% dan biaya modal (WACC) 12%.",
    "data": [
      "Mesin Baru: Harga Beli = Rp 2.400.000.000, Instalasi = Rp 100.000.000 (Total Basis Penyusutan = Rp 2.500.000.000), Masa Pakai = 4 tahun.",
      "Depresiasi Garis Lurus: Rp 2.500.000.000 / 4 tahun = Rp 625.000.000 per tahun.",
      "Mesin Lama: Nilai Buku = Rp 300.000.000, Nilai Jual Sekarang = Rp 500.000.000, Sisa Umur = 0 tahun jika diganti sekarang.",
      "Penghematan Biaya Operasional: Rp 900.000.000 per tahun.",
      "Modal Kerja Bersih (NWC): Investasi awal Rp 150.000.000, pemulihan 100% pada akhir tahun ke-4.",
      "Nilai Sisa Akhir Mesin Baru: Rp 400.000.000 pada tahun ke-4 (Nilai Buku = 0).",
      "Parameter Finansial: Tarif Pajak (T) = 22%, WACC = 12%."
    ],
    "instructions": [
      "Hitung pengeluaran kas awal bersih (Initial Outlay / CF_0) pada tahun ke-0, termasuk penjualan mesin lama setelah pajak dan komitmen NWC.",
      "Hitung Operating Cash Flow (OCF) inkremental tahunan selama tahun ke-1 hingga tahun ke-4 menggunakan metode Tax Shield.",
      "Hitung arus kas terminal non-operasional pada akhir tahun ke-4 (pemulihan NWC dan nilai sisa mesin baru setelah pajak).",
      "Susun skedul total arus kas bersih proyek (Tahun 0 s.d. 4) dan hitung Net Present Value (NPV) proyek penggantian mesin.",
      "Apakah perusahaan sebaiknya mengganti mesin lama sekarang?"
    ],
    "outputFormat": [
      "Kalkulasi Pengeluaran Kas Awal (CF_0)",
      "Kalkulasi OCF Tahunan Metode Tax Shield",
      "Kalkulasi Arus Kas Terminal Tahun ke-4",
      "Tabel Total Arus Kas dan Kalkulasi NPV",
      "Kesimpulan Kelayakan Investasi Penggantian"
    ],
    "rubric": [
      "Akurasi perhitungan pengeluaran investasi awal dan pajak penjualan mesin lama (30%)",
      "Ketepatan perhitungan OCF tahunan dengan depresiasi tax shield (30%)",
      "Kebenaran arus kas terminal setelah pajak dan pemulihan NWC (20%)",
      "Akurasi NPV dan penarikan kesimpulan penggantian mesin (20%)"
    ],
    "answerGuide": "1. Pengeluaran Kas Awal Bersih (CF_0):\n• Harga Pembelian Mesin Baru + Instalasi = Rp 2.500.000.000 (Kas Keluar)\n• Penjualan Mesin Lama:\n  - Nilai Jual = Rp 500.000.000\n  - Nilai Buku = Rp 300.000.000\n  - Laba Penjualan = Rp 200.000.000\n  - Pajak atas Laba = 22% × Rp 200.000.000 = Rp 44.000.000\n  - Kas Masuk Bersih Mesin Lama = Rp 500.000.000 - Rp 44.000.000 = Rp 456.000.000\n• Penambahan Modal Kerja Bersih (NWC) = Rp 150.000.000 (Kas Keluar)\n• Total CF_0 = -2.500.000.000 + 456.000.000 - 150.000.000 = -Rp 2.194.000.000.\n\n2. Operating Cash Flow (OCF) Tahunan (Tahun 1 s.d. 4):\n• Penghematan Biaya Tunai = +Rp 900.000.000 per tahun.\n• Beban Depresiasi Inkremental = Rp 2.500.000.000 / 4 = Rp 625.000.000 per tahun.\n• OCF = (Penghematan Kas) × (1 - T) + (Depresiasi × T)\n• OCF = (Rp 900.000.000 × 0,78) + (Rp 625.000.000 × 0,22)\n• OCF = Rp 702.000.000 + Rp 137.500.000 = Rp 839.500.000 per tahun.\n\n3. Arus Kas Terminal (Akhir Tahun ke-4):\n• Pemulihan Modal Kerja Bersih (NWC Recovery) = +Rp 150.000.000\n• Nilai Jual Mesin Baru = Rp 400.000.000\n• Nilai Buku Mesin Baru Akhir Thn 4 = Rp 0\n• Pajak atas Nilai Sisa = 22% × Rp 400.000.000 = Rp 88.000.000\n• Kas Bersih Nilai Sisa = Rp 400.000.000 - Rp 88.000.000 = Rp 312.000.000\n• Total Arus Kas Terminal Non-Operasional = Rp 150.000.000 + Rp 312.000.000 = Rp 462.000.000.\n\n4. Skedul Arus Kas dan Kalkulasi NPV pada WACC 12%:\n• Thn 0: -Rp 2.194.000.000\n• Thn 1: Rp 839.500.000 | PV = 839,5 / 1,12 = Rp 749.553.571\n• Thn 2: Rp 839.500.000 | PV = 839,5 / 1,12^2 = Rp 669.244.260\n• Thn 3: Rp 839.500.000 | PV = 839,5 / 1,12^3 = Rp 597.539.518\n• Thn 4: Rp 839.500.000 (OCF) + Rp 462.000.000 (Terminal) = Rp 1.301.500.000 | PV = 1.301,5 / 1,12^4 = Rp 827.127.354\n• Total PV Kas Masuk = Rp 749.553.571 + Rp 669.244.260 + Rp 597.539.518 + Rp 827.127.354 = Rp 2.843.464.703\n• NPV = Rp 2.843.464.703 - Rp 2.194.000.000 = +Rp 649.464.703 (Rp 649,46 juta).\n\n5. Keputusan Final:\n• Karena NPV proyek bernilai positif signifikan (+Rp 649,46 juta > 0), penggantian mesin terbukti sangat menguntungkan secara finansial.\n• KEPUTUSAN: SETUJUI PENGGANTIAN MESIN LAMA DENGAN MESIN BARU SEKARANG."
  }
];

export const MNK201_BANK_UAS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 8: Pemantapan Pra-UTS, Valuasi Terpadu, & Peramalan AFN",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 8: Simulasi Terpadu Pra-UTS: Peramalan Kebutuhan Dana Eksternal (AFN) dan Analisis Valuasi Saham Korporasi",
    "context": "PT Dinamika Niaga membukukan penjualan tahun 2025 sebesar Rp 20.000.000.000 dengan total aset Rp 12.000.000.000. Saat ini perusahaan beroperasi pada kapasitas penuh (100% full capacity). Untuk tahun 2026, manajemen memproyeksikan pertumbuhan penjualan sebesar 25% (menjadi Rp 25.000.000.000). Aset perusahaan dan utang spontan (utang usaha dan akrual) diproyeksikan bertumbuh proporsional terhadap kenaikan penjualan. Margin laba bersih (Profit Margin) diproyeksikan bertahan di level 8% dan rasio pembayaran dividen (Dividend Payout Ratio) ditetapkan sebesar 40%.",
    "data": [
      "Penjualan Tahun 2025 (S_0): Rp 20.000.000.000.",
      "Proyeksi Penjualan Tahun 2026 (S_1): Rp 25.000.000.000 (Kenaikan ΔS = Rp 5.000.000.000 atau g = 25%).",
      "Total Aset Spontan (A*_0): Rp 12.000.000.000 (Rasio A*_0 / S_0 = 60%).",
      "Liabilitas Spontan (L*_0): Utang Usaha Rp 2.000.000.000 + Beban Akrual Rp 1.000.000.000 = Rp 3.000.000.000 (Rasio L*_0 / S_0 = 15%).",
      "Profit Margin (M): 8,00% dari total penjualan baru.",
      "Rasio Pembayaran Dividen (POR): 40,00% (Retention Ratio / b = 60,00%)."
    ],
    "instructions": [
      "Hitung Kebutuhan Dana Eksternal (Additional Funds Needed / AFN) perusahaan untuk mendukung ekspansi penjualan tahun 2026 menggunakan persamaan AFN.",
      "Jika perusahaan memutuskan untuk memenuhi 50% dari kebutuhan AFN tersebut dengan menerbitkan utang obligasi baru berkupon 10% dan sisanya dari emisi saham biasa baru, hitung tambahan beban bunga tahunan yang akan dihadapi perusahaan.",
      "Jelaskan bagaimana perubahan rasio retensi laba (Retention Ratio) dan pemanfaatan kapasitas berlebih (excess capacity) dapat mengurangi kebutuhan dana eksternal AFN.",
      "Jika dividen per lembar saham yang baru dibayarkan adalah Rp 300, tingkat pertumbuhan dividen konstan 6% per tahun, dan WACC perusahaan 12%, hitung nilai wajar intrinsik saham PT Dinamika Niaga menggunakan Dividend Discount Model (DDM)."
    ],
    "outputFormat": [
      "Kalkulasi Persamaan AFN Komprehensif",
      "Analisis Struktur Pemenuhan Modal Eksternal",
      "Evaluasi Pengaruh Kapasitas dan Kebijakan Retensi",
      "Kalkulasi Valuasi Saham Konstan Model Gordon"
    ],
    "rubric": [
      "Ketepatan perhitungan rumus AFN dan komponen spontan (35%)",
      "Akurasi perhitungan dampak pembiayaan eksternal dan beban bunga (20%)",
      "Kedalaman analisis kapasitas dan rasio retensi (20%)",
      "Ketepatan valuasi saham Gordon Growth Model (25%)"
    ],
    "answerGuide": "1. Kalkulasi Additional Funds Needed (AFN):\n• Formula AFN = (A*_0 / S_0) × ΔS - (L*_0 / S_0) × ΔS - [M × S_1 × (1 - POR)]\n• Kebutuhan Aset Baru = 60% × Rp 5.000.000.000 = Rp 3.000.000.000\n• Dana Spontan Terhimpun = 15% × Rp 5.000.000.000 = Rp 750.000.000\n• Tambahan Laba Ditahan Internal = 8% × Rp 25.000.000.000 × (1 - 0,40) = Rp 2.000.000.000 × 0,60 = Rp 1.200.000.000\n• AFN = Rp 3.000.000.000 - Rp 750.000.000 - Rp 1.200.000.000 = Rp 1.050.000.000 (Rp 1,05 miliar).\n\n2. Struktur Pemenuhan AFN:\n• Utang Obligasi Baru (50%) = 50% × Rp 1.050.000.000 = Rp 525.000.000.\n• Emisi Saham Baru (50%) = Rp 525.000.000.\n• Tambahan Beban Bunga Tahunan = 10% × Rp 525.000.000 = Rp 52.500.000 per tahun.\n\n3. Pengaruh Kapasitas dan Rasio Retensi:\n• Jika perusahaan memiliki kapasitas berlebih (misal hanya beroperasi pada kapasitas 80%), maka aset tetap tidak perlu bertambah secepat penjualan, sehingga komponen (A*_0 / S_0) × ΔS mengecil secara drastis.\n• Jika rasio pembayaran dividen diturunkan (misal dari 40% menjadi 10%, retention ratio naik ke 90%), maka laba ditahan internal naik dari Rp 1,2 M menjadi Rp 1,8 M, yang memangkas kebutuhan AFN menjadi hanya Rp 450 juta.\n\n4. Valuasi Saham Model Gordon (DDM):\n• D_0 = Rp 300, g = 6%, r_s = 12%.\n• D_1 = D_0 × (1 + g) = Rp 300 × 1,06 = Rp 318 per lembar.\n• P_0 = D_1 / (r_s - g) = Rp 318 / (0,12 - 0,06) = Rp 318 / 0,06 = Rp 5.300 per lembar saham."
  },
  {
    "type": "calculation",
    "scope": "TM 9: Struktur Modal Modigliani-Miller & Persamaan Hamada",
    "difficulty": "Sulit",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 9: Optimasi Struktur Modal: Teori Modigliani-Miller dengan Pajak, Persamaan Hamada, dan Analisis EBIT-EPS",
    "context": "PT Bintang Abadi saat ini merupakan perusahaan tanpa utang (all-equity firm) dengan total nilai pasar ekuitas Rp 10.000.000.000 yang terdiri dari 1.000.000 lembar saham biasa (harga Rp 10.000 per lembar). Manajemen mempertimbangkan program restrukturisasi modal dengan menerbitkan obligasi senilai Rp 4.000.000.000 berkupon bunga 10% per tahun, dan menggunakan seluruh dana kas hasil emisi obligasi tersebut untuk melakukan pembelian kembali saham (share repurchase) di pasar sekunder pada harga wajar. Tarif pajak badan adalah 20%, suku bunga bebas risiko 6%, premi risiko pasar 8%, dan beta unlevered (b_U) perusahaan saat ini adalah 1,00.",
    "data": [
      "Kondisi Awal (Unlevered):\n• Nilai Perusahaan (V_U) = Rp 10.000.000.000\n• Total Utang (D) = Rp 0\n• Jumlah Saham Beredar = 1.000.000 lembar @ Rp 10.000\n• Beta Tanpa Utang (b_U) = 1,00\n• Proyeksi EBIT Stabil = Rp 1.800.000.000 per tahun.",
      "Rencana Rekapitalisasi Utang:\n• Penerbitan Obligasi Baru (D) = Rp 4.000.000.000 pada kupon r_d = 10% (Beban Bunga = Rp 400.000.000/tahun).\n• Dana digunakan untuk buyback saham pada harga pasar baru setelah pengumuman restrukturisasi.",
      "Parameter Finansial: Tarif Pajak (T) = 20%, r_RF = 6%, (r_M - r_RF) = 8%."
    ],
    "instructions": [
      "Berdasarkan Teori Modigliani-Miller dengan Pajak Korporasi (1963), hitung nilai pasar baru perusahaan yang berutang (V_L) dan hitung harga pasar per lembar saham yang baru setelah pengumuman restrukturisasi modal.",
      "Hitung berapa lembar saham yang berhasil dibeli kembali oleh perusahaan dan berapa sisa lembar saham beredar pasca-repurchase.",
      "Gunakan Persamaan Hamada untuk menghitung Beta berutang (Levered Beta / b_L) perusahaan dan hitung biaya ekuitas baru (r_s) menggunakan model CAPM.",
      "Hitung Laba per Lembar Saham (EPS) sebelum dan sesudah restrukturisasi pada level EBIT Rp 1.800.000.000. Tentukan apakah EPS mengalami peningkatan.",
      "Hitung titik impas finansial (EBIT-EPS Indifference Point) antara struktur modal tanpa utang dan berutang."
    ],
    "outputFormat": [
      "Kalkulasi Nilai V_L MM dan Harga Saham Baru",
      "Kalkulasi Transaksi Share Repurchase",
      "Kalkulasi Persamaan Hamada dan CAPM",
      "Perbandingan EPS dan Titik Indiferen EBIT"
    ],
    "rubric": [
      "Ketepatan aplikasi rumus MM dengan pajak (30%)",
      "Kebenaran mekanisme buyback saham dan sisa saham beredar (25%)",
      "Akurasi perhitungan formula Hamada dan CAPM (25%)",
      "Akurasi perhitungan EPS komparatif dan titik impas EBIT (20%)"
    ],
    "answerGuide": "1. Nilai Perusahaan MM dengan Pajak & Harga Saham Baru:\n• V_L = V_U + (T_c × D) = Rp 10.000.000.000 + (0,20 × Rp 4.000.000.000) = Rp 10.000.000.000 + Rp 800.000.000 = Rp 10.800.000.000.\n• Tambahan nilai perusahaan akibat tax shield utang adalah Rp 800.000.000, yang seluruhnya menjadi hak pemegang saham eksisting.\n• Harga saham baru per lembar = V_L / Saham Awal = Rp 10.800.000.000 / 1.000.000 lembar = Rp 10.800 per lembar.\n\n2. Transaksi Share Repurchase:\n• Dana Kas dari Utang untuk Buyback = Rp 4.000.000.000.\n• Saham yang dibeli kembali = Rp 4.000.000.000 / Rp 10.800 = 370.370 lembar saham.\n• Sisa Saham Beredar = 1.000.000 - 370.370 = 629.630 lembar saham.\n• Nilai Ekuitas Pasar Pasca-Buyback (S) = V_L - D = Rp 10.800.000.000 - Rp 4.000.000.000 = Rp 6.800.000.000 (Cek: 629.630 lembar × Rp 10.800 = Rp 6.800.000.000).\n\n3. Persamaan Hamada & Biaya Ekuitas CAPM:\n• Rasio Utang terhadap Ekuitas Pasar (D/S) = Rp 4.000.000.000 / Rp 6.800.000.000 = 0,5882.\n• b_L = b_U × [1 + (1 - T) × (D/S)] = 1,00 × [1 + (1 - 0,20) × 0,5882] = 1,00 × [1 + 0,4706] = 1,47.\n• Biaya Ekuitas Baru (CAPM): r_s = r_RF + b_L × (r_M - r_RF) = 6,00% + 1,47 × 8,00% = 6,00% + 11,76% = 17,76% (sebelumnya: 6% + 1,0 × 8% = 14,00%).\n\n4. Komparasi EPS pada EBIT = Rp 1.800.000.000:\n• Struktur Awal (Tanpa Utang):\n  - Laba Bersih = (EBIT - 0) × (1 - 0,20) = Rp 1.800.000.000 × 0,80 = Rp 1.440.000.000.\n  - EPS Awal = Rp 1.440.000.000 / 1.000.000 lembar = Rp 1.440 per lembar.\n• Struktur Berutang (Levered):\n  - Beban Bunga = 10% × Rp 4.000.000.000 = Rp 400.000.000.\n  - Laba Bersih = (Rp 1.800.000.000 - Rp 400.000.000) × 0,80 = Rp 1.400.000.000 × 0,80 = Rp 1.120.000.000.\n  - EPS Baru = Rp 1.120.000.000 / 629.630 lembar = Rp 1.778,82 per lembar.\n• Kenaikan EPS: EPS melonjak dari Rp 1.440 menjadi Rp 1.778,82 (naik 23,5%).\n\n5. Titik Impas Finansial (EBIT Indifference Point):\n• [(EBIT* - 0) × (1 - T)] / N_U = [(EBIT* - I) × (1 - T)] / N_L\n• EBIT* / 1.000.000 = (EBIT* - 400.000.000) / 629.630\n• 629.630 × EBIT* = 1.000.000 × EBIT* - 400.000.000.000.000\n• 370.370 × EBIT* = 400.000.000.000.000 -> EBIT* = Rp 1.080.000.000.\n• Kesimpulan: Jika EBIT perusahaan di atas Rp 1,08 miliar, struktur modal berutang memberikan EPS yang lebih tinggi."
  },
  {
    "type": "calculation",
    "scope": "TM 10: Kebijakan Dividen, Residual Dividend Model, & Share Repurchase",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 10: Analisis Kebijakan Distribusi Laba: Residual Dividend Model versus Share Repurchase",
    "context": "PT Mega Pratama membukukan Laba Bersih tahun berjalan sebesar Rp 800.000.000.000. Perusahaan memiliki 100.000.000 lembar saham biasa beredar yang saat ini diperdagangkan pada harga pasar wajar Rp 16.000 per lembar. Dewan Direksi mengidentifikasi peluang investasi modal yang menguntungkan untuk tahun depan dengan total anggaran belanja modal (Capital Budget) sebesar Rp 1.000.000.000.000. Struktur modal sasaran yang optimal dipertahankan pada 60% Ekuitas dan 40% Utang.",
    "data": [
      "Laba Bersih Tahun Berjalan (Net Income): Rp 800.000.000.000.",
      "Jumlah Saham Beredar Awal: 100.000.000 lembar.",
      "Harga Saham Pasar: Rp 16.000 per lembar (Kapitalisasi Pasar = Rp 1,6 triliun).",
      "Anggaran Belanja Modal Baru: Rp 1.000.000.000.000.",
      "Target Struktur Modal: 60% Ekuitas Saham Biasa dan 40% Utang Jangka Panjang."
    ],
    "instructions": [
      "Berdasarkan Residual Dividend Model, hitung berapa porsi laba bersih yang harus ditahan untuk mendanai anggaran belanja modal dan hitung total dividen tunai yang dapat dibagikan kepada pemegang saham.",
      "Hitung Dividen per Lembar Saham (DPS) dan Dividend Payout Ratio (DPR) yang dihasilkan dari model dividen residual tersebut.",
      "Jika manajemen memutuskan untuk tidak membagikan dividen tunai melainkan menggunakan seluruh dana kas distribusi tersebut untuk melakukan Pembelian Kembali Saham (Share Repurchase) di pasar terbuka pada harga Rp 16.000 per lembar, hitung berapa lembar saham yang berhasil dibeli kembali dan berapa lembar sisa saham yang beredar.",
      "Hitung Laba per Lembar Saham (EPS) pasca-share repurchase (asumsikan laba bersih tetap Rp 800 miliar) dan bandingkan dengan EPS sebelum share repurchase.",
      "Analisis mengapa pemegang saham di negara dengan tarif pajak dividen lebih tinggi dari pajak capital gains lebih memilih share repurchase daripada dividen kas."
    ],
    "outputFormat": [
      "Kalkulasi Residual Dividend Model & DPR",
      "Kalkulasi Mekanisme Share Repurchase",
      "Analisis Dampak terhadap EPS dan Nilai Pemegang Saham",
      "Evaluasi Teori Preferensi Pajak (Tax Preference Theory)"
    ],
    "rubric": [
      "Ketepatan perhitungan model dividen residual (35%)",
      "Kebenaran kalkulasi share repurchase dan sisa saham (25%)",
      "Akurasi analisis dampak EPS (20%)",
      "Ketajaman analisis pajak dan efek sinyal pasar (20%)"
    ],
    "answerGuide": "1. Residual Dividend Model:\n• Anggaran Belanja Modal = Rp 1.000.000.000.000.\n• Kebutuhan Ekuitas (60%) = 60% × Rp 1.000.000.000.000 = Rp 600.000.000.000.\n• Laba Bersih Tersedia = Rp 800.000.000.000.\n• Total Dividen Kas Residu = Laba Bersih - Kebutuhan Ekuitas = Rp 800.000.000.000 - Rp 600.000.000.000 = Rp 200.000.000.000 (Rp 200 miliar).\n\n2. DPS dan Dividend Payout Ratio:\n• DPS = Rp 200.000.000.000 / 100.000.000 lembar = Rp 2.000 per lembar saham.\n• Dividend Payout Ratio (DPR) = Rp 200 M / Rp 800 M = 25,00%.\n\n3. Mekanisme Share Repurchase:\n• Dana Distribusi = Rp 200.000.000.000.\n• Harga Pembelian Saham = Rp 16.000 per lembar.\n• Jumlah Saham Dibeli Kembali = Rp 200.000.000.000 / Rp 16.000 = 12.500.000 lembar saham.\n• Sisa Saham Beredar = 100.000.000 - 12.500.000 = 87.500.000 lembar saham.\n\n4. Dampak terhadap EPS:\n• EPS Sebelum Repurchase = Rp 800.000.000.000 / 100.000.000 lembar = Rp 8.000 per lembar.\n• EPS Sesudah Repurchase = Rp 800.000.000.000 / 87.500.000 lembar = Rp 9.142,86 per lembar.\n• EPS meningkat sebesar Rp 1.142,86 (+14,29%) karena basis penyebut saham mengecil.\n\n5. Evaluasi Teori Preferensi Pajak:\n• Dividen tunai langsung dikenakan pemotongan pajak penghasilan final pada tahun diterimanya dividen.\n• Share repurchase menghasilkan capital gains yang pajaknya dapat ditangguhkan (tax-deferred) sampai investor secara sukarela menjual sahamnya di masa depan.\n• Selain itu, share repurchase memberikan fleksibilitas bagi pemegang saham: investor yang membutuhkan likuiditas dapat menjual sahamnya, sementara yang ingin berinvestasi kembali dapat mempertahankan kepemilikannya dengan persentase proporsi yang justru meningkat."
  },
  {
    "type": "calculation",
    "scope": "TM 11: Manajemen Kas, Model Baumol, Miller-Orr, & Lockbox",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 11: Penentuan Saldo Kas Optimal Model Baumol dan Miller-Orr serta Evaluasi Kelayakan Sistem Lockbox",
    "context": "PT Logistik Sentosa memerlukan kas sebesar Rp 36.000.000.000 sepanjang tahun depan yang dikeluarkan secara konstan dan merata. Biaya tetap setiap kali menjual surat berharga menjadi kas adalah Rp 200.000 per transaksi, dan tingkat bunga tahunan atas surat berharga pasar uang adalah 10% per tahun. Di sisi lain, pada salah satu anak perusahaannya yang menghadapi arus kas harian acak berfluktuasi dengan varians Rp 25.000.000.000.000, manajemen mempertimbangkan model Miller-Orr.",
    "data": [
      "Bagian A (Model Baumol):\n• Total Kebutuhan Kas Tahunan (T) = Rp 36.000.000.000\n• Biaya Tetap Transaksi (F) = Rp 200.000 per transaksi\n• Suku Bunga Bebas Risiko (r) = 10% p.a. (0,10)",
      "Bagian B (Model Miller-Orr):\n• Varians Arus Kas Bersih Harian (σ²) = Rp 25.000.000.000.000\n• Biaya Transaksi Pengalihan (F) = Rp 150.000\n• Suku Bunga Harian (r_harian) = 10% / 365 = 0,000274 per hari\n• Batas Bawah Kas Minimum (L) = Rp 100.000.000",
      "Bagian C (Evaluasi Lockbox):\n• Penagihan Harian = 500 cek @ rata-rata Rp 4.000.000 (Total Rp 2.000.000.000/hari).\n• Sistem Lockbox mempercepat pencairan kas 3 hari kerja.\n• Biaya Lockbox Bank = Rp 2.500 per cek yang diproses. Suku bunga = 10% per tahun."
    ],
    "instructions": [
      "Gunakan Model Baumol (BAT) untuk menghitung besarnya transfer kas optimal (C*), saldo kas rata-rata, frekuensi transfer kas per tahun, dan total biaya pengelolaan kas tahunan minimum.",
      "Gunakan Model Miller-Orr untuk menghitung Titik Kembalian Kas (Return Point Z) dan Batas Atas Kas (Upper Limit H). Jelaskan tindakan manajer keuangan jika saldo kas menyentuh batas atas H.",
      "Lakukan analisis kelayakan finansial implementasi sistem Lockbox: hitung tambahan pendapatan bunga tahunan dari percepatan kas dan bandingkan dengan total biaya administrasi bank tahunan. Apakah sistem Lockbox layak diterapkan?"
    ],
    "outputFormat": [
      "Perhitungan Model Baumol Lengkap",
      "Perhitungan Batas Pengendalian Kas Miller-Orr",
      "Analisis Cost-Benefit Sistem Lockbox Bank",
      "Kesimpulan Manajerial Pengelolaan Kas"
    ],
    "rubric": [
      "Ketepatan perhitungan rumus model Baumol C* dan total biaya (35%)",
      "Akurasi perhitungan Miller-Orr Z dan H (30%)",
      "Akurasi analisis cost-benefit lockbox (25%)",
      "Ketajaman rekomendasi manajerial (10%)"
    ],
    "answerGuide": "1. Model Baumol (BAT):\n• C* = √[(2 × T × F) / r] = √[(2 × Rp 36.000.000.000 × Rp 200.000) / 0,10] = √[(14.400.000.000.000.000) / 0,10] = √[144.000.000.000.000.000] = Rp 379.473.319 (dibulatkan Rp 380.000.000).\n• Saldo Kas Rata-rata = C* / 2 = Rp 379.473.319 / 2 = Rp 189.736.660.\n• Frekuensi Transfer Kas = T / C* = Rp 36.000.000.000 / Rp 379.473.319 = 94,87 kali per tahun (sekitar setiap 3,8 hari).\n• Total Biaya Kas Tahunan = Biaya Transaksi + Biaya Peluang = (T / C* × F) + (C* / 2 × r) = (94,87 × Rp 200.000) + (Rp 189.736.660 × 0,10) = Rp 18.974.000 + Rp 18.973.666 = Rp 37.947.666 per tahun.\n\n2. Model Miller-Orr:\n• Z = L + ³√[(3 × F × σ²) / (4 × r_harian)]\n• Komponen pembilang = 3 × Rp 150.000 × 25.000.000.000.000 = Rp 1,125 × 10^19.\n• Komponen penyebut = 4 × 0,000274 = 0,001096.\n• Rasio = 1,125 × 10^19 / 0,001096 = 1,02646 × 10^22.\n• Akar pangkat tiga ³√(1,02646 × 10^22) = Rp 217.324.000.\n• Return Point Z = Rp 100.000.000 + Rp 217.324.000 = Rp 317.324.000.\n• Batas Atas H = 3Z - 2L = 3(Rp 317.324.000) - 2(Rp 100.000.000) = Rp 951.972.000 - Rp 200.000.000 = Rp 751.972.000.\n• Tindakan: Jika saldo kas naik menyentuh H (Rp 751,97 juta), manajer membeli surat berharga sebesar H - Z = Rp 434.648.000 agar saldo kas kembali ke posisi Z.\n\n3. Analisis Kelayakan Sistem Lockbox:\n• Penagihan Harian = Rp 2.000.000.000 per hari.\n• Dana yang Dikeluarkan dari Float (3 hari) = 3 hari × Rp 2.000.000.000 = Rp 6.000.000.000 (tambahan saldo kas tersedia).\n• Manfaat Tahunan (Bunga 10%) = 10% × Rp 6.000.000.000 = Rp 600.000.000 per tahun.\n• Biaya Tahunan Lockbox = 500 cek/hari × 365 hari × Rp 2.500/cek = 182.500 cek × Rp 2.500 = Rp 456.250.000 per tahun.\n• Penghematan Bersih Tahunan = Manfaat - Biaya = Rp 600.000.000 - Rp 456.250.000 = +Rp 143.750.000 per tahun.\n• KEPUTUSAN: SISTEM LOCKBOX SANGAT LAYAK DIIMPLEMENTASIKAN."
  },
  {
    "type": "calculation",
    "scope": "TM 12: Manajemen Persediaan EOQ & Biaya Kredit Dagang",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 12: Optimasi Economic Order Quantity (EOQ), Safety Stock, dan Biaya Pendanaan Kredit Dagang",
    "context": "PT Surya Kencana adalah distributor suku cadang mesin. Permintaan tahunan untuk salah satu komponen utama adalah 36.000 unit yang terdistribusi merata sepanjang 360 hari kerja setahun (100 unit/hari). Biaya pemesanan adalah Rp 250.000 per pesanan, dan biaya penyimpanan persediaan adalah Rp 2.000 per unit per tahun. Pemasok membutuhkan waktu tunggu (lead time) 4 hari kerja. Manajemen juga menghadapi penawaran syarat pembayaran kredit dagang dari pemasok lain.",
    "data": [
      "Data Persediaan Komponen:\n• Permintaan Tahunan (S) = 36.000 unit\n• Biaya Pemesanan (O) = Rp 250.000 per pesanan\n• Biaya Penyimpanan Tahunan (C) = Rp 2.000 per unit per tahun\n• Hari Kerja Setahun = 360 hari (Penggunaan Harian d = 100 unit/hari)\n• Waktu Tunggu (Lead Time) = 4 hari kerja\n• Safety Stock yang Ditetapkan = 200 unit",
      "Syarat Kredit Pemasok: Syarat '3/15, net 45' (diskon 3% jika dibayar dalam 15 hari, jatuh tempo penuh 45 hari)."
    ],
    "instructions": [
      "Hitung Economic Order Quantity (EOQ) dan hitung total biaya persediaan tahunan (Total Carrying Cost + Total Ordering Cost) pada titik EOQ.",
      "Hitung Reorder Point (ROP) titik pemesanan kembali dalam unit.",
      "Hitung biaya nominal tahunan (Nominal Annual Cost) dan biaya efektif tahunan (Effective Annual Rate / EAR) jika perusahaan memilih untuk TIDAK mengambil diskon dan membayar pada hari ke-45.",
      "Jika perusahaan dapat meminjam dari bank dengan bunga kredit modal kerja 14% per tahun, manakah keputusan finansial yang paling rasional: mengambil diskon dengan meminjam bank atau mengabaikan diskon kredit dagang?"
    ],
    "outputFormat": [
      "Kalkulasi EOQ dan Total Biaya Persediaan",
      "Kalkulasi Reorder Point (ROP) dengan Safety Stock",
      "Kalkulasi Biaya Kredit Dagang (Nominal dan EAR)",
      "Rekomendasi Keputusan Pendanaan Modal Kerja"
    ],
    "rubric": [
      "Ketepatan perhitungan rumus EOQ dan verifikasi TIC (30%)",
      "Akurasi perhitungan Reorder Point ROP (20%)",
      "Akurasi perhitungan biaya kredit dagang nominal dan EAR (30%)",
      "Kualitas rekomendasi komparasi kredit bank vs kredit dagang (20%)"
    ],
    "answerGuide": "1. Economic Order Quantity (EOQ) & Total Biaya:\n• EOQ = √[(2 × S × O) / C] = √[(2 × 36.000 × Rp 250.000) / Rp 2.000] = √[18.000.000.000 / 2.000] = √9.000.000 = 3.000 unit.\n• Frekuensi Pemesanan = 36.000 / 3.000 = 12 kali per tahun (setiap bulan).\n• Total Ordering Cost = 12 × Rp 250.000 = Rp 3.000.000 per tahun.\n• Total Carrying Cost (tanpa safety stock) = (EOQ / 2) × C = (3.000 / 2) × Rp 2.000 = Rp 3.000.000 per tahun.\n• Total Biaya Persediaan = Rp 3.000.000 + Rp 3.000.000 = Rp 6.000.000 per tahun.\n(Catatan: Pada titik EOQ, Total Carrying Cost persis sama dengan Total Ordering Cost).\n\n2. Reorder Point (ROP):\n• ROP = (Lead Time × Penggunaan Harian) + Safety Stock\n• ROP = (4 hari × 100 unit/hari) + 200 unit = 400 unit + 200 unit = 600 unit.\n• Pemesanan baru sebesar 3.000 unit harus segera diterbitkan saat sisa fisik persediaan di gudang menyentuh 600 unit.\n\n3. Biaya Kredit Dagang '3/15, net 45':\n• Periode Kredit = 45 hari - 15 hari = 30 hari.\n• Biaya Nominal Tahunan = [Diskon% / (100 - Diskon%)] × [365 / (Hari Net - Hari Diskon)] = (3 / 97) × (365 / 30) = 0,030928 × 12,1667 = 37,63% per tahun.\n• Biaya Efektif Tahunan (EAR) = [1 + (3 / 97)]^(365 / 30) - 1 = (1,030928)^12,1667 - 1 = 1,4486 - 1 = 44,86% per tahun.\n\n4. Rekomendasi Pendanaan:\n• Biaya mengabaikan diskon kredit dagang sangat mahal (EAR = 44,86% p.a.), jauh melampaui biaya pinjaman bank komersial (14% p.a.).\n• REKOMENDASI: AMBIL DISKON KREDIT DAGANG. Perusahaan harus meminjam dana dari bank pada hari ke-15 untuk membayar faktur dengan diskon 3%, dan melunasi pinjaman bank tersebut pada hari ke-45. Strategi ini menghemat biaya bunga lebih dari 30% per tahun."
  },
  {
    "type": "calculation",
    "scope": "TM 13: Keuangan Multinasional & Hedging Valuta Asing",
    "difficulty": "Sulit",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 13: Manajemen Risiko Valas Multinasional: Forward Market Hedge versus Money Market Hedge atas Piutang Ekspor",
    "context": "PT Garment Nusantara adalah eksportir tekstil Indonesia yang baru saja menandatangani kontrak penjualan dengan mitra ritel di New York sebesar USD 1.000.000 dengan syarat pembayaran 90 hari kalender mendatang. Direktur Keuangan khawatir akan depresiasi Dolar AS terhadap Rupiah selama 90 hari tersebut dan ingin mengunci nilai penerimaan kas secara pasti.",
    "data": [
      "Nilai Piutang Valas: USD 1.000.000 jatuh tempo dalam 90 hari (0,25 tahun).",
      "Kurs Pasar Valas Saat Ini:\n• Kurs Spot: Rp 15.500 / USD\n• Kurs Forward 90-Hari: Rp 15.650 / USD",
      "Struktur Suku Bunga Pasar Uang 90-Hari (Tahunan):\n• Suku Bunga Pinjaman USD = 5,00% per tahun (1,25% per 90 hari)\n• Suku Bunga Deposito USD = 3,00% per tahun (0,75% per 90 hari)\n• Suku Bunga Pinjaman IDR = 10,00% per tahun (2,50% per 90 hari)\n• Suku Bunga Deposito IDR = 8,00% per tahun (2,00% per 90 hari)"
    ],
    "instructions": [
      "Hitung total penerimaan kas dalam Rupiah pada hari ke-90 jika perusahaan menggunakan Forward Market Hedge.",
      "Susun langkah-langkah Money Market Hedge (Pinjaman USD, konversi spot ke IDR, dan investasi deposito IDR) dan hitung total penerimaan kas dalam Rupiah pada hari ke-90.",
      "Bandingkan hasil kas akhir antara Forward Hedge dan Money Market Hedge. Manakah strategi lindung nilai yang menghasilkan penerimaan kas Rupiah paling optimal?",
      "Jika perusahaan memilih untuk tidak melakukan lindung nilai sama sekali (unhedged), hitung kurs spot break-even pada hari ke-90 di mana hasil tanpa lindung nilai persis menyamai hasil strategi hedging terbaik."
    ],
    "outputFormat": [
      "Kalkulasi Forward Market Hedge",
      "Kalkulasi Money Market Hedge Langkah demi Langkah",
      "Komparasi Kedua Strategi Hedging",
      "Analisis Break-Even Kurs Spot Unhedged"
    ],
    "rubric": [
      "Ketepatan kalkulasi Forward Hedge (25%)",
      "Akurasi langkah dan perhitungan matematis Money Market Hedge (40%)",
      "Analisis perbandingan dan pemilihan strategi optimal (20%)",
      "Perhitungan kurs break-even unhedged (15%)"
    ],
    "answerGuide": "1. Forward Market Hedge:\n• Eksportir menjual forward USD 1.000.000 dengan kurs forward 90-hari Rp 15.650 / USD.\n• Penerimaan Kas Rupiah pada hari ke-90 = USD 1.000.000 × Rp 15.650 = Rp 15.650.000.000 (Rp 15,650 miliar pasti).\n\n2. Money Market Hedge (Langkah demi Langkah):\n• Langkah 1 (Pinjam USD hari ini): Pinjam sejumlah USD sehingga jumlah pinjaman pokok + bunga pada hari ke-90 persis sama dengan USD 1.000.000.\n  - Suku bunga pinjaman USD 90-hari = 5% × (90/360) = 1,25%.\n  - Nilai Pinjaman USD (PV) = USD 1.000.000 / (1 + 0,0125) = USD 1.000.000 / 1,0125 = USD 987.654,32.\n• Langkah 2 (Konversi ke IDR di Pasar Spot):\n  - Konversi USD 987.654,32 ke IDR pada kurs spot Rp 15.500.\n  - Penerimaan Kas IDR hari ini = USD 987.654,32 × Rp 15.500 = Rp 15.308.641.975.\n• Langkah 3 (Investasikan ke Deposito IDR 90-Hari):\n  - Suku bunga deposito IDR 90-hari = 8% × (90/360) = 2,00%.\n  - Nilai Masa Depan IDR hari ke-90 = Rp 15.308.641.975 × (1 + 0,02) = Rp 15.614.814.815 (Rp 15,615 miliar).\n• Langkah 4 (Pelunasan): Pada hari ke-90, piutang ekspor USD 1.000.000 yang diterima langsung digunakan untuk melunasi pokok + bunga pinjaman USD pada Langkah 1.\n\n3. Komparasi Strategi:\n• Hasil Forward Market Hedge = Rp 15.650.000.000\n• Hasil Money Market Hedge = Rp 15.614.814.815\n• Selisih = Forward Hedge menghasilkan kas lebih banyak sebesar Rp 35.185.185.\n• KEPUTUSAN: PILIH FORWARD MARKET HEDGE karena memberikan imbalan kas Rupiah tertinggi dan proses administrasi yang lebih sederhana dibanding pinjaman bank valas ganda.\n\n4. Break-Even Kurs Spot Unhedged:\n• Agar unhedged menghasilkan kas Rp 15.650.000.000:\n• Kurs Spot Break-Even = Rp 15.650.000.000 / USD 1.000.000 = Rp 15.650 / USD.\n• Jika kurs spot 90 hari mendatang turun di bawah Rp 15.650, perusahaan yang tidak hedging akan menderita kerugian kurs."
  },
  {
    "type": "calculation",
    "scope": "TM 14: Valuasi Sinergi M&A & Prediksi Kebangkrutan Altman Z-Score",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–40 menit",
    "question": "Studi Kasus 14: Valuasi Sinergi Akuisisi Korporasi dan Diagnosis Kesehatan Keuangan Menggunakan Altman Z-Score",
    "context": "PT Mega Holding sedang mempertimbangkan penawaran akuisisi terhadap PT Target Manufaktur. Sebelum mengajukan harga penawaran resmi, tim merger & akuisisi (M&A) harus mengevaluasi nilai sinergi operasional yang dapat diciptakan serta mendiagnosis risiko kebangkrutan PT Target menggunakan model Altman Z-Score.",
    "data": [
      "Bagian A (Valuasi Sinergi M&A):\n• Nilai mandiri (stand-alone) PT Mega Holding (V_A) = Rp 20.000.000.000.000.\n• Nilai mandiri PT Target Manufaktur (V_B) = Rp 4.000.000.000.000 (800.000.000 lembar saham @ Rp 5.000).\n• Integrasi rantai pasok diproyeksikan menghemat biaya operasional kas sebesar Rp 300.000.000.000 per tahun selamanya (perpetuitas) setelah pajak.\n• Biaya modal WACC entitas gabungan adalah 12% per tahun.",
      "Bagian B (Data Keuangan PT Target untuk Altman Z-Score):\n• Total Aset = Rp 5.000.000.000.000\n• Aset Lancar = Rp 1.500.000.000.000\n• Liabilitas Lancar = Rp 1.000.000.000.000\n• Laba Ditahan Kumulatif = Rp 800.000.000.000\n• Laba Sebelum Bunga & Pajak (EBIT) = Rp 600.000.000.000\n• Nilai Pasar Ekuitas = Rp 4.000.000.000.000\n• Total Liabilitas (Utang Lancar + Jangka Panjang) = Rp 2.500.000.000.000\n• Penjualan = Rp 6.000.000.000.000"
    ],
    "instructions": [
      "Hitung nilai sekarang dari sinergi operasional yang tercipta dari merger (PV of Synergy).",
      "Hitung nilai total maksimum entitas gabungan (V_AB) dan tentukan batas harga penawaran tunai tertinggi (Maximum Cash Offer Price) per lembar saham yang boleh dibayarkan PT Mega Holding kepada pemegang saham PT Target.",
      "Jika PT Mega Holding menawarkan harga Rp 6.500 per lembar saham PT Target, hitung Net Present Value (NPV) akuisisi bagi pemegang saham PT Mega Holding.",
      "Hitung skor kesehatan finansial PT Target Manufaktur menggunakan formula asli Altman Z-Score Manufaktur (Z = 1,2 X_1 + 1,4 X_2 + 3,3 X_3 + 0,6 X_4 + 0,999 X_5) dan simpulkan apakah perusahaan berada di Zona Aman, Zona Abu-Abu, atau Zona Bahaya Kebangkrutan."
    ],
    "outputFormat": [
      "Kalkulasi Sinergi M&A dan Harga Penawaran Maksimum",
      "Kalkulasi NPV Akuisisi bagi Pihak Pengakuisisi",
      "Tabel Rincian Variabel dan Skor Altman Z-Score",
      "Diagnosis Kesehatan Finansial dan Rekomendasi Akhir"
    ],
    "rubric": [
      "Ketepatan perhitungan sinergi perpetuitas dan harga maksimum per lembar (35%)",
      "Akurasi perhitungan NPV akuisisi (20%)",
      "Ketepatan perhitungan kelima variabel rasio Altman Z-Score (35%)",
      "Ketajaman diagnosis zona kebangkrutan dan risiko transaksi (10%)"
    ],
    "answerGuide": "1. Valuasi Sinergi & Harga Penawaran Maksimum:\n• Penghematan Tahunan Abadi = Rp 300.000.000.000 per tahun, WACC = 12%.\n• Nilai Sekarang Sinergi (ΔV) = Penghematan / WACC = Rp 300.000.000.000 / 0,12 = Rp 2.500.000.000.000 (Rp 2,5 triliun).\n• Nilai Total Entitas Gabungan (V_AB) = V_A + V_B + ΔV = Rp 20 T + Rp 4 T + Rp 2,5 T = Rp 26.500.000.000.000 (Rp 26,5 triliun).\n• Nilai Maksimum Pembelian PT Target = Nilai Mandiri (V_B) + Sinergi (ΔV) = Rp 4,0 T + Rp 2,5 T = Rp 6.500.000.000.000.\n• Harga Maksimum per Lembar = Rp 6.500.000.000.000 / 800.000.000 lembar = Rp 8.125 per lembar saham.\n\n2. NPV Akuisisi pada Harga Penawaran Rp 6.500:\n• Total Kas yang Dibayarkan = 800.000.000 lembar × Rp 6.500 = Rp 5.200.000.000.000 (Rp 5,2 triliun).\n• Premi Akuisisi yang Diberikan ke Target = Rp 5,2 T - Rp 4,0 T = Rp 1,2 triliun (Rp 1.500/lembar atau premi 30%).\n• NPV bagi PT Mega Holding = Nilai Sinergi - Premi Akuisisi = Rp 2,5 triliun - Rp 1,2 triliun = +Rp 1.300.000.000.000 (Rp 1,3 triliun).\n• Karena NPV bernilai positif besar (+Rp 1,3 T), penawaran pada harga Rp 6.500 sangat menguntungkan bagi pemegang saham pengakuisisi.\n\n3. Kalkulasi Altman Z-Score PT Target Manufaktur:\n• X_1 (Modal Kerja Bersih / Total Aset) = (1.500 M - 1.000 M) / 5.000 M = 500 / 5.000 = 0,10\n• X_2 (Laba Ditahan / Total Aset) = 800 M / 5.000 M = 0,16\n• X_3 (EBIT / Total Aset) = 600 M / 5.000 M = 0,12\n• X_4 (Nilai Pasar Ekuitas / Total Liabilitas) = 4.000 M / 2.500 M = 1,60\n• X_5 (Penjualan / Total Aset) = 6.000 M / 5.000 M = 1,20\n• Perhitungan Skor Z:\n  - 1,2 × X_1 = 1,2 × 0,10 = 0,120\n  - 1,4 × X_2 = 1,4 × 0,16 = 0,224\n  - 3,3 × X_3 = 3,3 × 0,12 = 0,396\n  - 0,6 × X_4 = 0,6 × 1,60 = 0,960\n  - 0,999 × X_5 = 0,999 × 1,20 = 1,199\n• Total Altman Z-Score = 0,120 + 0,224 + 0,396 + 0,960 + 1,199 = 2,899 (dibulatkan 2,90).\n\n4. Diagnosis Kesehatan Finansial:\n• Kriteria Altman (Perusahaan Manufaktur Publik):\n  - Z < 1,81 : Distress Zone (Zona Bahaya Kebangkrutan Tinggi)\n  - 1,81 ≤ Z ≤ 2,99 : Grey Zone (Zona Abu-Abu / Rawan)\n  - Z > 2,99 : Safe Zone (Zona Sehat dan Aman)\n• Kesimpulan: Dengan skor Z = 2,90, PT Target berada di Grey Zone bagian atas (sangat mendekati Safe Zone 2,99). Perusahaan tidak berada dalam ancaman kebangkrutan jangka pendek, namun memerlukan restrukturisasi modal kerja dan peningkatan utilisasi aset yang justru dapat diselesaikan melalui integrasi sinergi operasional dengan PT Mega Holding."
  }
];

export const MNK201_BANK: BankSoal[] = [...MNK201_BANK_UTS, ...MNK201_BANK_UAS];
