// MNK102; keep original pre-UTS items and UTS review.
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
export const MNK201_REVIEW_UTS_BANK: BankSoal[] = [
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
  }
];
export const MNK201_BANK_UAS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 9: Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Rekapitalisasi dan risiko: evaluasi angka serta keputusan",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 484-498 (PDF 526-540). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 7-18.",
    "data": [
      "Penjualan USD1.100.000; biaya variabel 60%; biaya tetap USD40.000.",
      "Saham 80.000; harga buyback tetap USD25; utang baru USD400.000 berbunga 10%; pajak model 25%.",
      "Beta U=1,25; rRF=7,5%; premi pasar=6%; nilai pasar ekuitas sebelum pendanaan USD2.000.000. Setelah buyback diasumsikan USD1.600.000 untuk perhitungan bobot."
    ],
    "instructions": [
      "Hitung EBIT, DOL, ROIC, laba bersih dan EPS sebelum/sesudah utang.",
      "Hitung D/E, beta L, biaya ekuitas dan WACC menggunakan bobot yang diberikan.",
      "Jelaskan mengapa kenaikan EPS tidak cukup membuktikan struktur optimal; uji EBIT turun 20%.",
      "Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "1. EBIT = 1.100.000 - 660.000 - 40.000 = USD400.000; DOL=440.000/400.000=1,10. NOPAT=300.000; ROIC=300.000/2.000.000=15%.\n2. Tanpa utang NI=300.000; EPS=300.000/80.000=USD3,75. Saham dibeli=400.000/25=16.000; tersisa 64.000. Bunga=40.000; NI=(400.000-40.000)×75%=270.000; EPS=USD4,21875 atau 4,22.\n3. D/E=400.000/1.600.000=0,25; beta L=1,25[1+0,75×0,25]=1,484375. rs=7,5%+1,484375×6%=16,40625%. WACC=0,20×10%×75%+0,80×16,40625%=14,625%. Bobot model menahan ekuitas pada angka asumsi, sehingga belum menyelesaikan harga pasar endogen.\n4. EBIT turun 20% menjadi 320.000. NI tanpa utang 240.000; EPS3,00. NI berutang 210.000; EPS3,28125. EPS berutang turun 22,2222% dari 4,21875, lebih peka daripada EPS tanpa utang yang turun 20%. Manfaat pajak disertai sensitivitas laba, risiko pembiayaan ulang, serta biaya ekuitas. Penilaian alternatif perlu kas operasi dan biaya modal yang konsisten, bukan sekadar EPS tertinggi.\nPembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 484-498 (PDF 526-540). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 7-18."
  },
  {
    "type": "calculation",
    "scope": "TM 9: Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Memilih bauran pendanaan ketika risiko dan biaya utang berubah",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 494-503 (PDF 536-545).",
    "data": [
      "Model A: bobot utang 0%; rd 0%; rs 12%; EPS Rp 4.",
      "B: utang 40%; rd 9%; rs 14%; EPS Rp 4,50. C: utang 60%; rd 13%; rs 18%; EPS Rp 5.",
      "Pajak model 25%; FCF operasi tetap Rp 12 miliar/tahun tanpa pertumbuhan; nilai=FCF/WACC."
    ],
    "instructions": [
      "Hitung WACC ketiga alternatif memakai biaya utang setelah pajak.",
      "Hitung nilai operasi dan pilih bauran berdasarkan nilai.",
      "Bandingkan dengan pilihan berdasarkan EPS; jelaskan sensitivitas jika FCF C turun menjadi Rp 10 miliar.",
      "Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "A: WACC=12%; nilai 12/0,12=Rp 100 miliar. B:0,40×9%×75%+0,60×14%=11,10%; nilai 12/0,111=Rp 108,108108 miliar. C:0,60×13%×75%+0,40×18%=13,05%; nilai 12/0,1305=Rp 91,954023 miliar. B memaksimalkan nilai meski EPS C tertinggi. Asumsi kas tetap membuat perbandingan diskonto jelas; biaya ekuitas dan utang sudah mencerminkan peningkatan risiko. Jika FCF C menjadi 10, nilainya 10/0,1305=Rp 76,628352 miliar. Model perpetuitas tidak mempunyai pertumbuhan dan memerlukan WACC positif. Bobot adalah nilai pasar target dan biaya modal harus cocok dengan risiko masing-masing. Perisai pajak hanya dikenakan pada biaya utang; mengalikan seluruh WACC dengan 75% akan menurunkan nilai biaya modal secara keliru.\nPembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 494-503 (PDF 536-545)."
  },
  {
    "type": "calculation",
    "scope": "TM 10: Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Dividen residual, kekurangan dana, dan payout",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 525-533 (PDF 567-575).",
    "data": [
      "Laba bersih Rp 150 juta; kas tersedia untuk keputusan ini cukup.",
      "Proyek dasar Rp 200 juta; target ekuitas 60%, utang 40%; saham 10 juta lembar.",
      "Alternatif perluasan proyek Rp 300 juta dengan target sama."
    ],
    "instructions": [
      "Hitung kebutuhan ekuitas dan utang, dividen, payout dan DPS rencana dasar.",
      "Hitung dana ekuitas tambahan serta dividen rencana perluasan.",
      "Jelaskan pengaruh kebijakan residual pada kestabilan dividen dan sinyal pasar.",
      "Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "Dasar: ekuitas 0,60×200=Rp 120 juta; utang 0,40×200=Rp 80 juta. Residual 150-120=Rp 30 juta; payout 30/150=20%; retention 80%; DPS30 juta/10 juta=Rp 3/lembar. Perluasan: ekuitas 180, utang 120 juta; laba 150 menyisakan kekurangan 30 juta, sehingga dividen residual nol. Kekurangan memerlukan emisi ekuitas, pengurangan proyek, atau penyesuaian target yang dinilai terpisah. Laba akuntansi tidak identik dengan kas: kasus sengaja menyatakan kas mencukupi. Dividen residual dapat berfluktuasi bersama peluang investasi; manajemen perlu mengomunikasikan alasan perubahan. Payout bukan persentase investasi; kebutuhan dana ekuitas dihitung lebih dahulu. Keputusan proyek mengasumsikan semua proyek sudah layak berdasarkan NPV, sehingga laba ditahan diarahkan ke investasi yang menciptakan nilai. Sinyal kenaikan/penurunan dividen tetap harus diuji terhadap kemampuan menghasilkan kas.\nPembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 525-533 (PDF 567-575)."
  },
  {
    "type": "calculation",
    "scope": "TM 10: Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Distribusi kas: membandingkan dividen, buyback, dan split",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 541-548 (PDF 583-590).",
    "data": [
      "Ekuitas pasar Rp 1 miliar; saham 20 juta; harga Rp 50/lembar.",
      "Kas surplus untuk distribusi Rp 200 juta; tanpa pajak, biaya transaksi, atau sinyal baru.",
      "Untuk perhitungan EPS terpisah, laba tetap Rp 40 juta setahun; tidak ada pengaruh biaya peluang kas dalam model."
    ],
    "instructions": [
      "Bandingkan dividen tunai Rp 200 juta dengan buyback Rp 200 juta pada harga wajar.",
      "Hitung saham dan harga teoritis sesudah distribusi serta kekayaan pemilik 1.000 saham yang tidak menjual pada buyback.",
      "Hitung EPS buyback dan akibat split 2-untuk-1; jelaskan batas kesimpulan nilai.",
      "Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "Dividen: DPS=200 juta/20 juta=Rp 10. Ekuitas ex-distribusi 800 juta; harga=800 juta/20 juta=Rp 40. Pemilik 1.000 saham memegang saham Rp 40.000 dan dividen Rp 10.000, total Rp 50.000. Buyback: jumlah dibeli 200 juta/50=4 juta; tersisa 16 juta; nilai 800 juta; harga Rp 50. Pemilik 1.000 saham yang tetap memegang memiliki Rp 50.000. Total kekayaan sama menurut asumsi harga wajar dan pasar tanpa friksi. EPS lama 40 juta/20 juta=Rp 2; EPS setelah buyback 40 juta/16 juta=Rp 2,50, dengan laba sengaja tetap. Split 2-untuk-1 sesudah buyback menghasilkan 32 juta saham dan harga Rp 25; EPSRp 1,25. Jumlah lembar meningkat dan EPS berubah secara mekanis, tanpa penciptaan kas. Jika pajak, informasi baru atau bunga kas berubah, kesetaraan ini perlu dihitung ulang; jangan menerapkan angka teori sebagai prediksi harga sesungguhnya.\nPembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 541-548 (PDF 583-590)."
  },
  {
    "type": "calculation",
    "scope": "TM 11: Working Capital I: Siklus Kas, Anggaran Kas, dan Piutang",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Mengurai siklus konversi kas dan perbaikan penagihan",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 565-569 (PDF 607-611). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 578-581 (PDF 620-623).",
    "data": [
      "Setahun 365 hari; seluruh penjualan kredit Rp 36,5 miliar; COGS dan pembelian kredit masing-masing Rp 36,5 miliar.",
      "Persediaan rata-rata Rp 6 miliar, piutang Rp 4,5 miliar, utang pemasok Rp 3 miliar.",
      "DSO dapat turun menjadi 30 hari tanpa biaya/penjualan hilang; DIO dan DPO tetap. Biaya dana 10% setahun."
    ],
    "instructions": [
      "Hitung DIO, DSO, DPO dan CCC awal.",
      "Hitung CCC baru, dana piutang yang dilepas, dan penghematan biaya dana setahun.",
      "Jelaskan risiko jika pengurangan CCC berasal dari menunda pemasok melewati syarat pembayaran.",
      "Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "Arus harian penjualan, COGS, dan pembelian masing-masing 36,5/365=Rp 0,1 miliar. DIO=6/0,1=60 hari; DSO=4,5/0,1=45; DPO=3/0,1=30. CCC=60+45-30=75 hari. DSO baru 30 memberi piutang 3 miliar; CCC baru 60 hari. Dana dilepas 4,5-3=Rp 1,5 miliar, penghematan biaya 1,5×10%=Rp 0,15 miliar/tahun atau Rp 150 juta. Pelepasan investasi 1,5 miliar sekali terjadi berbeda dari penghematan tahunan 150 juta. Soal menyederhanakan pembelian sama dengan COGS; jika pembelian berbeda, gunakan pembelian kredit yang relevan untuk DPO. Pengurangan DSO dapat memakai standar kredit, penagihan, atau diskon, dengan biaya dan dampak penjualan yang perlu dihitung. Menunda pemasok berisiko kehilangan diskon, pasokan, dan reputasi sehingga CCC pendek sendiri belum menjamin keputusan terbaik.\nPembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 565-569 (PDF 607-611). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 578-581 (PDF 620-623)."
  },
  {
    "type": "calculation",
    "scope": "TM 11: Working Capital I: Siklus Kas, Anggaran Kas, dan Piutang",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Anggaran kas dan pilihan membayar utang",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615).",
    "data": [
      "Semua angka Rp juta: Januari kas awal 20, penerimaan 80, pembayaran 105. Februari penerimaan 100, pembayaran 80.",
      "Minimum kas 10; fasilitas pinjaman dapat dipakai pada akhir Januari. Bunga Januari/Februari diabaikan khusus pada kasus ini.",
      "Aturan model: saat surplus, lunasi pinjaman sepanjang minimum kas tetap terpenuhi."
    ],
    "instructions": [
      "Susun anggaran kas Januari dan Februari dengan penerimaan, pembayaran, pinjaman dan pelunasan.",
      "Hitung saldo pinjaman serta kas akhir masing-masing bulan.",
      "Uji jika penerimaan Februari hanya 70; jelaskan mengapa laba penjualan tidak mengganti anggaran kas.",
      "Nyatakan asumsi, konsistensi satuan/tenor, dan keterbatasan keputusan yang diambil."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "Januari sebelum pendanaan 20+80-105=-5. Tambahan pinjaman 10-(-5)=15; kas akhir 10 dan saldo pinjaman 15. Februari dimulai dengan kas 10, sehingga kas sebelum pendanaan 10+100-80=30. Surplus di atas minimum 20 cukup melunasi 15; kas akhir 15, utang nol. Skenario penerimaan Februari 70: kas sebelum pendanaan 10+70-80=0; perlu pinjaman tambahan 10 untuk minimum 10. Utang akhir menjadi 25, kas 10. Bunga diabaikan sesuai syarat; jika dimasukkan, bunga harus menjadi pembayaran dan kebutuhan dana meningkat. Penjualan kredit masuk penerimaan hanya saat tertagih, sehingga laba dapat positif saat kas defisit. Jadwal pembayaran utang, keterlambatan piutang, kapasitas kredit bank, dan saldo minimum perlu dicek setiap bulan. Perbedaan akhir bulan dan transaksi intrabulan dapat membuat defisit sementara lebih tinggi daripada yang terlihat pada ringkasan.\nPembulatan: pertahankan presisi pada langkah antara; persentase dan uang per lembar dibulatkan dua desimal, beta/skor empat atau tiga desimal sesuai kebutuhan. Unit uang mengikuti data; tidak ada konversi tersembunyi. Keputusan berlaku pada asumsi kasus, dengan risiko kas dan biaya yang masih perlu diuji.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615)."
  },
  {
    "type": "calculation",
    "scope": "TM 12: Working Capital II: Persediaan dan Pendanaan Jangka Pendek",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Diskon pemasok versus pinjaman bank",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 581-587 (PDF 623-629).",
    "data": [
      "Faktur Rp 100 juta; syarat 2/10, net 30; tahun 365 hari.",
      "Bank menyediakan Rp 98 juta dengan bunga efektif tahunan 12%; tenor 20 hari, tanpa biaya tambahan."
    ],
    "instructions": [
      "Hitung biaya nominal dan efektif kehilangan diskon.",
      "Hitung bunga bank 20 hari dan selisih biaya dengan pembayaran penuh hari 30.",
      "Jelaskan syarat dan risiko keputusan mengambil diskon.",
      "Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "1. Pembayaran dengan diskon Rp 98 juta pada hari 10, atau Rp 100 juta pada hari 30. Biaya periodik kehilangan diskon = 2/98 = 2,040816% selama 20 hari. Nominal tahunan = (2/98)(365/20) = 37,244898%; EAR = (100/98)^(365/20)-1 = 44,585293%.\n2. Bunga bank 20 hari memakai tingkat efektif: (1,12)^(20/365)-1 = 0,0062291117. Bunga = Rp 98 juta × faktor = Rp 0,61045295 juta. Pelunasan Rp 98,61045295 juta, sehingga penghematan dibanding Rp 100 juta = Rp 1,38954705 juta.\n3. Gunakan bank untuk mengambil diskon pada asumsi ini. Dana harus tersedia pada hari 10, diskon harus benar-benar diperoleh, dan tidak ada biaya tambahan. Menggunakan 12% × 20/365 akan mencampur tingkat efektif dengan bunga sederhana. Penundaan di luar hari 30 mempunyai konsekuensi kontrak dan pemasok yang belum dimasukkan.\nPembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 581-587 (PDF 623-629)."
  },
  {
    "type": "calculation",
    "scope": "TM 12: Working Capital II: Persediaan dan Pendanaan Jangka Pendek",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Membaca biaya pinjaman dan investasi persediaan",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-578 (PDF 619-620). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629). Metode saldo wajib dan bunga dipotong awal merupakan latihan pengembangan arus kas dengan syarat buatan. Lampiran 16B belum tersedia; contoh kanonik TM12 memakai bunga sederhana pada hal. 587.",
    "data": [
      "A, B, C: nominal pinjaman Rp 100 juta, satu tahun, bunga 12%.",
      "A: bunga akhir tahun; B: bunga Rp 12 juta dipotong awal; C: bunga awal dan saldo tambahan Rp 10 juta tanpa bunga yang kembali akhir tahun.",
      "Persediaan rata-rata Rp 800 menjadi Rp 600 juta; biaya 20% setahun; tambahan biaya kekurangan stok Rp 50 juta setahun."
    ],
    "instructions": [
      "Hitung kas bebas awal, pembayaran bersih akhir, dan biaya efektif A, B, C.",
      "Hitung penghematan dan manfaat bersih kebijakan persediaan.",
      "Pisahkan pilihan pendanaan dari keputusan persediaan dan jelaskan risikonya.",
      "Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "1. A menerima Rp 100 juta dan membayar Rp 112 juta: 112/100-1 = 12%. B menerima Rp 88 juta dan membayar Rp 100 juta: 100/88-1 = 13,636364%. C menerima Rp 78 juta; pokok Rp 100 juta dikurangi saldo yang kembali Rp 10 juta membuat pembayaran bersih Rp 90 juta: 90/78-1 = 15,384615%. A termurah jika fasilitas serta risiko setara.\n2. Pengurangan investasi persediaan = Rp 200 juta. Penghematan biaya tahunan = 200 × 20% = Rp 40 juta. Setelah biaya kekurangan stok Rp 50 juta, manfaat bersih = minus Rp 10 juta per tahun; kebijakan ini tidak layak pada asumsi.\n3. Pelepasan investasi Rp 200 juta sekali terjadi berbeda dari penghematan Rp 40 juta per tahun. Evaluasi permintaan, lead time atau waktu pasokan, layanan pelanggan, risiko rollover kredit, dan potongan kontrak sebelum memilih.\nPembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-578 (PDF 619-620). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629). Metode saldo wajib dan bunga dipotong awal merupakan latihan pengembangan arus kas dengan syarat buatan. Lampiran 16B belum tersedia; contoh kanonik TM12 memakai bunga sederhana pada hal. 587."
  },
  {
    "type": "calculation",
    "scope": "TM 13: Multinational Financial Management: Kurs dan Keuangan Multinasional",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Mata uang, tenor, dan biaya lindung nilai",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-646 (PDF 678-688).",
    "data": [
      "Utang importir USD100.000, jatuh tempo enam bulan. Spot IDR16.000/USD.",
      "Bunga tahunan sederhana IDR6% dan USD4%; penawaran forward enam bulan IDR16.300/USD.",
      "Skenario spot jatuh tempo IDR17.000 atau IDR15.500 per USD; tanpa biaya dan risiko gagal bayar kontrak."
    ],
    "instructions": [
      "Hitung forward paritas enam bulan dan selisih terhadap penawaran.",
      "Hitung pembayaran dengan forward dan tanpa hedge pada dua skenario.",
      "Jelaskan arah hedge serta perbedaan paritas, kurs kontrak, dan proyeksi spot.",
      "Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "1. Bunga enam bulan domestik 3%, asing 2%. F paritas = 16.000 × 1,03/1,02 = 16.156,862745 IDR/USD. Penawaran bank lebih tinggi 143,137255 IDR/USD; friksi dan akses bunga perlu diperiksa sebelum menyebut peluang arbitrase.\n2. Kontrak mengunci pembayaran Rp 1.630 juta. Spot 17.000 membuat pembayaran tanpa hedge Rp 1.700 juta, sehingga forward menghemat Rp 70 juta. Spot 15.500 membuat pembayaran tanpa hedge Rp 1.550 juta; forward menimbulkan biaya peluang Rp 80 juta.\n3. Importir membeli USD forward karena mempunyai kewajiban USD. Hedge mengurangi ketidakpastian kas, tanpa menjamin selalu lebih murah. Bunga wajib setenor; forward paritas adalah hubungan model tanpa friksi dan berbeda dari ramalan kurs spot yang pasti terjadi.\nPembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-646 (PDF 678-688)."
  },
  {
    "type": "calculation",
    "scope": "TM 13: Multinational Financial Management: Kurs dan Keuangan Multinasional",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Kurs silang dan penilaian proyek luar negeri",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-638 (PDF 678-680). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 649-655 (PDF 691-697).",
    "data": [
      "Spot IDR16.000/USD dan JPY160/USD; tanpa spread.",
      "Investasi sekarang Rp 150 juta; arus kas akhir tahun pertama USD10.000, kemudian proyek berakhir.",
      "Proyeksi kurs IDR17.000/USD atau skenario IDR15.000/USD; diskonto IDR10% sesuai risiko."
    ],
    "instructions": [
      "Hitung kurs silang IDR/JPY dan nilai JPY100.000 dalam rupiah.",
      "Hitung NPV IDR dalam kedua skenario kurs.",
      "Jelaskan konsistensi mata uang, diskonto, dan risiko kas lintas negara.",
      "Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "1. Kurs silang = 16.000/160 = IDR100/JPY. JPY100.000 setara Rp 10 juta; satuan USD saling menghilangkan.\n2. Kurs 17.000: kas akhir Rp 170 juta; PV = 170/1,10 = Rp 154,545455 juta; NPV = Rp 4,545455 juta. Kurs 15.000: kas Rp 150 juta; PV = Rp 136,363636 juta; NPV = minus Rp 13,636364 juta. Kelayakan berubah karena kurs yang diasumsikan.\n3. Kas sudah dikonversi ke rupiah sebelum memakai diskonto rupiah. Alternatif valuasi USD memerlukan tingkat USD yang sepadan dengan risiko. Periksa pembatasan pemulangan laba, pajak sesuai yurisdiksi, risiko negara, dan sensitivitas kurs. Kasus ini sengaja tidak menetapkan aturan pajak atau repatriasi tertentu; angka bukan kurs pasar tahun berjalan.\nPembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-638 (PDF 678-680). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 649-655 (PDF 691-697)."
  },
  {
    "type": "calculation",
    "scope": "TM 14: Mergers and Acquisitions: Valuasi dan Keputusan Akuisisi",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "DCF target, premium dan pembagian sinergi",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795).",
    "data": [
      "Semua angka Rp miliar: FCF operasi 20 pada akhir tahun 1, 2, 3; terminal value akhir tahun 3 sebesar 200, di luar FCF3.",
      "WACC10%; utang 60; kas nonoperasi 10; PV sinergi tambahan 40 belum masuk proyeksi; biaya integrasi saat ini 5.",
      "Harga pembelian ekuitas 170."
    ],
    "instructions": [
      "Hitung nilai operasi dan ekuitas standalone.",
      "Hitung premium, NPV pengakuisisi, dan harga maksimum.",
      "Jelaskan perlakuan terminal, kas nonoperasi, utang, dan sinergi.",
      "Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "1. PV FCF = 20/1,1 + 20/1,1^2 + 20/1,1^3 = Rp 49,737040 miliar. PV terminal = 200/1,1^3 = Rp 150,262960 miliar. Nilai operasi Rp 200 miliar; ekuitas = 200-60+10 = Rp 150 miliar.\n2. Premium = 170-150 = Rp 20 miliar. NPV pengakuisisi = sinergi 40-premium 20-biaya 5 = Rp 15 miliar. Harga maksimum = 150+40-5 = Rp 185 miliar, pada NPV nol.\n3. Sinergi dinyatakan belum masuk kas, sehingga boleh ditambahkan sekali. Jika sudah masuk proyeksi, penambahan lagi menghitung ganda. Terminal berada pada akhir tahun 3 dan harus didiskonto; FCF3 tetap terpisah. FCF operasi memakai WACC; FCFE memakai biaya ekuitas. Kas nonoperasi ditambahkan hanya jika belum termasuk operasi; utang harus dinilai pada tanggal dan basis yang konsisten.\nPembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795)."
  },
  {
    "type": "calculation",
    "scope": "TM 14: Mergers and Acquisitions: Valuasi dan Keputusan Akuisisi",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Pembayaran saham, kenaikan EPS dan NPV yang bertentangan",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-757 (PDF 790-799).",
    "data": [
      "Target: nilai standalone Rp 90 juta, saham 5 juta.",
      "Tawaran 2 juta saham pengakuisisi pada Rp 50/lembar; sinergiPV8 juta; biaya integrasi 3 juta.",
      "Pengakuisisi: saham 10 juta, laba 20 juta. Target laba 10 juta. Untuk contoh EPS, laba gabungan tetap 30 juta setelah semua penyesuaian berulang."
    ],
    "instructions": [
      "Hitung nilai tawaran, premium, dan NPV.",
      "Hitung rasio pertukaran, EPS sebelum/sesudah, dan pertumbuhan EPS.",
      "Jelaskan konflik hasil EPS dengan nilai serta batas harga yang layak.",
      "Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "1. Nilai tawaran = 2 juta × Rp 50 = Rp 100 juta. Premium = 100-90 = Rp 10 juta. NPV = 8-10-3 = minus Rp 5 juta.\n2. Rasio pertukaran = 2/5 = 0,40 saham pengakuisisi per saham target. Harga ekuivalen target Rp 20, dibanding nilai standalone Rp 18. EPS awal pengakuisisi = 20/10 = Rp 2; EPS gabungan = 30/(10+2) = Rp 2,50, naik 25%.\n3. EPS accretion terjadi secara akuntansi tetapi NPV negatif; tawaran ditolak atau dinegosiasi. Harga maksimum yang setara kas = 90+8-3 = Rp 95 juta. Tawaran harus turun minimal Rp 5 juta agar NPV tidak negatif menurut asumsi. Saham pembayaran mempunyai biaya ekonomis karena pemilik lama berbagi nilai dengan pemilik baru; harganya dapat berubah akibat informasi akuisisi.\nPembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-757 (PDF 790-799)."
  },
  {
    "type": "calculation",
    "scope": "TM 15: Corporate Failure: Kesulitan Keuangan dan Pemulihan",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Audit model Altman dan perubahan kinerja",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7.",
    "data": [
      "Manufaktur publik tanpa aset takberwujud; semua angka Rp miliar. Aset 100; modal kerja 10; laba ditahan 20; EBIT8.",
      "Nilai pasar seluruh ekuitas 150; total kewajiban buku 300; penjualan 120.",
      "Gunakan model original dan batas 1,81/2,99. Skenario EBIT turun ke 2; faktor lain tetap."
    ],
    "instructions": [
      "Hitung lima rasio dan Z awal.",
      "Hitung Z setelah EBIT turun serta perubahan kontribusinya.",
      "Jelaskan batas model, populasi, probabilitas, dan informasi kredit tambahan.",
      "Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "1. X1=10/100=0,10; X2=20/100=0,20; X3=8/100=0,08; X4=150/300=0,50; X5=120/100=1,20. Z=0,12+0,28+0,264+0,30+1,20=2,164: zona abu-abu.\n2. EBIT2 memberi X3=0,02, kontribusi 3,3×0,02=0,066. Z baru 1,966; turun 0,198 dan tetap abu-abu. X4 memakai seluruh kewajiban buku dan ekuitas pasar, bukan hanya utang berbunga atau ekuitas buku.\n3. Skor tidak bersatuan dan bukan probabilitas langsung. Model original memakai manufaktur publik; varian privat dan nonmanufaktur mengubah input, koefisien serta batas. Periksa aset berwujud, kualitas data, kas, jatuh tempo, risiko industri, serta kemungkinan false positive. Skor memberi indikasi untuk pemeriksaan lanjutan dan tidak menetapkan status hukum pailit.\nPembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal.\nRujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7."
  },
  {
    "type": "calculation",
    "scope": "TM 15: Corporate Failure: Kesulitan Keuangan dan Pemulihan",
    "difficulty": "Komprehensif",
    "estimatedTime": "35-45 menit",
    "question": "Pemulihan usaha: membedakan kas, nilai ekonomi dan keputusan hukum",
    "context": "Kasus latihan hipotetis 2026. Seluruh suku bunga, pajak, kurs dan nilai perusahaan diberikan sebagai asumsi perhitungan; tidak menunjukkan tarif hukum atau harga pasar saat ini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615). Rujukan: Altman (2002), halaman PDF 2 dan 9-15.",
    "data": [
      "Semua angka Rp juta: kas awal 10, penerimaan 40, pembayaran wajib 65. Aset 200, kewajiban 175.",
      "PV usaha berlanjut 120, biaya proses 15; nilai jual aset 95, biaya likuidasi 8.",
      "Nilai kedua alternatif sudah dinilai pada tanggal dan risiko sebanding; belum ada persetujuan kreditur."
    ],
    "instructions": [
      "Hitung defisit kas dan ekuitas buku.",
      "Hitung nilai bersih serta selisih reorganisasi dan likuidasi.",
      "Susun prioritas tindakan dan bedakan analisis ekonomi dari proses hukum.",
      "Nyatakan asumsi, satuan, tenor, pembulatan dan keterbatasan model."
    ],
    "outputFormat": [
      "Tabel input dan langkah hitungan dengan satuan",
      "Hasil akhir dan analisis keputusan",
      "Asumsi, sensitivitas, dan batas model"
    ],
    "rubric": [
      "Pemilihan model dan dasar asumsi (20%)",
      "Langkah hitungan, satuan, dan hasil (40%)",
      "Analisis keputusan serta sensitivitas (30%)",
      "Kejelasan rujukan dan pembulatan (10%)"
    ],
    "answerGuide": "1. Kas sebelum pendanaan=10+40-65=minus Rp 15 juta. Dibutuhkan Rp 15 juta agar tidak negatif, atau Rp 25 juta jika saldo minimum tambahan Rp 10 juta diterapkan. Ekuitas buku=200-175=Rp 25 juta, tetap positif; kas dapat defisit walaupun ekuitas positif.\n2. Usaha berlanjut bersih=120-15=Rp 105 juta; likuidasi bersih=95-8=Rp 87 juta. Keunggulan reorganisasi Rp 18 juta mendukung kelanjutan secara ekonomi jika proyeksi serta pendanaan layak.\n3. Periksa kalender kas, piutang tertagih, kemampuan operasi, jatuh tempo, dan negosiasi kreditur. Persetujuan serta proses hukum tetap memerlukan dasar yurisdiksi; nilai ini tidak menyamakan PKPU Indonesia dengan Chapter 11 Amerika. Skor Altman dapat melengkapi pemeriksaan tetapi tidak menggantikan anggaran kas, valuasi aset, atau keputusan hukum.\nPembulatan: simpan presisi langkah antara, kemudian bulatkan uang dan persentase dua desimal; beta empat desimal dan skor tiga desimal. Semua nilai mengikuti unit serta tenor data soal.\nRujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615). Rujukan: Altman (2002), halaman PDF 2 dan 9-15."
  }
];
export const MNK201_BANK: BankSoal[] = [...MNK201_BANK_UTS, ...MNK201_REVIEW_UTS_BANK, ...MNK201_BANK_UAS];
