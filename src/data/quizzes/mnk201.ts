// src/data/quizzes/mnk201.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Manajemen Keuangan (MNK201)
// Berdasarkan Brigham & Houston (Fundamentals of Financial Management 15e/16e)
// 70 Soal Lengkap: 35 Soal Pra-UTS (TM 1–7) & 35 Soal Pra-UAS (TM 8–14)
import type { QuizQuestion } from '../../types';

export const MNK201_QUIZ_UTS: QuizQuestion[] = [
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
    "tm": 1,
    "topic": "Agency Problem & Corporate Governance",
    "difficulty": "medium",
    "q": "Manakah mekanisme tata kelola internal berikut yang paling efektif untuk menyelaraskan kepentingan manajer (agent) dengan pemegang saham (principal)?",
    "options": [
      "Pemberian gaji pokok tetap yang sangat besar tanpa bonus",
      "Pemberian opsi saham (stock options) jangka panjang dan kompensasi berbasis kinerja nilai saham",
      "Larangan bagi komisaris independen untuk mengawasi direksi",
      "Meniadakan rapat umum pemegang saham tahunan"
    ],
    "answer": 1,
    "explanation": "Kompensasi berbasis opsi saham (stock options) dan saham kinerja (performance shares) menyelaraskan insentif finansial eksekutif dengan peningkatan nilai pasar saham perusahaan jangka panjang."
  },
  {
    "tm": 1,
    "topic": "Agency Conflict: Pemegang Saham vs Kreditur",
    "difficulty": "advanced",
    "q": "Konflik kepentingan antara pemegang saham dan pemegang obligasi (debtholders) paling sering terjadi ketika...",
    "options": [
      "Manajemen memutuskan untuk membagikan seluruh laba sebagai dividen dan berinvestasi pada proyek berisiko tinggi di luar rencana awal (asset substitution)",
      "Manajemen melunasi seluruh utang obligasi tepat waktu sebelum jatuh tempo",
      "Perusahaan menerbitkan saham biasa baru untuk membayar utang",
      "Perusahaan memperoleh peringkat kredit (rating) yang lebih tinggi dari AAA ke A"
    ],
    "answer": 0,
    "explanation": "Pemegang obligasi menanggung risiko kerugian jika proyek berisiko tinggi gagal, tetapi tidak mendapatkan bagian tambahan jika proyek sangat sukses. Praktik asset substitution merugikan kreditur dan memicu penetapan restrictive covenants."
  },
  {
    "tm": 1,
    "topic": "Nilai Intrinsik vs Nilai Pasar",
    "difficulty": "basic",
    "q": "Nilai intrinsik suatu saham didefinisikan sebagai...",
    "options": [
      "Harga penutupan saham di bursa efek pada hari perdagangan terakhir",
      "Nilai buku ekuitas dibagi dengan total saham yang beredar di neraca",
      "Estimasi nilai wajar saham berdasarkan analisis fundamental atas arus kas masa depan yang diharapkan dan tingkat risiko",
      "Nilai nominal yang tercantum pada piagam pendirian perseroan"
    ],
    "answer": 2,
    "explanation": "Nilai intrinsik adalah estimasi nilai sebenarnya dari saham berdasarkan data fundamental arus kas dan risiko. Jika pasar efisien, harga pasar saham akan berfluktuasi di sekitar nilai intrinsiknya."
  },
  {
    "tm": 1,
    "topic": "Bentuk Badan Usaha & Kewajiban Terbatas",
    "difficulty": "basic",
    "q": "Keunggulan utama bentuk Perseroan Terbatas (PT / Corporation) dibandingkan Perusahaan Perseorangan (Sole Proprietorship) dalam penggalangan modal adalah...",
    "options": [
      "Bebas dari kewajiban perpajakan ganda atas dividen",
      "Tanggung jawab pemilik tidak terbatas hingga ke harta pribadi",
      "Tanggung jawab terbatas pemilik (limited liability), kemudahan transfer kepemilikan saham, dan kelangsungan hidup badan usaha yang abadi",
      "Ketiadaan regulasi pelaporan keuangan dari otoritas pasar modal"
    ],
    "answer": 2,
    "explanation": "Bentuk perseroan terbatas memberikan proteksi kewajiban terbatas pada modal yang disetor, likuiditas saham tinggi, dan keberlanjutan usaha tak terbatas, memudahkannya menghimpun modal raksasa dari publik."
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
    "tm": 2,
    "topic": "Rasio Likuiditas & Kualitas Modal Kerja",
    "difficulty": "medium",
    "q": "PT Bintang memiliki Aset Lancar Rp 600 juta, Persediaan Rp 250 juta, Biaya Dibayar di Muka Rp 50 juta, dan Liabilitas Lancar Rp 200 juta. Berapakah Quick Ratio (Rasio Cepat) perusahaan?",
    "options": [
      "3,00 kali",
      "1,50 kali",
      "1,75 kali",
      "1,25 kali"
    ],
    "answer": 1,
    "explanation": "Quick Ratio = (Aset Lancar - Persediaan - Beban Dibayar di Muka) / Liabilitas Lancar = (600 - 250 - 50) / 200 = 300 / 200 = 1,50 kali."
  },
  {
    "tm": 2,
    "topic": "Solvabilitas & Times Interest Earned",
    "difficulty": "medium",
    "q": "Jika Laba Operasi (EBIT) perusahaan sebesar Rp 500 juta, Beban Bunga tahunan Rp 100 juta, dan Tarif Pajak Badan 20%, berapakah rasio Times Interest Earned (TIE)?",
    "options": [
      "3,20 kali",
      "4,00 kali",
      "5,00 kali",
      "6,25 kali"
    ],
    "answer": 2,
    "explanation": "Times Interest Earned (TIE) = EBIT / Beban Bunga = Rp 500 juta / Rp 100 juta = 5,00 kali. Pajak tidak mempengaruhi TIE karena bunga dibayar sebelum pajak dihitung."
  },
  {
    "tm": 2,
    "topic": "Dekomposisi DuPont 5-Step",
    "difficulty": "advanced",
    "q": "Dalam dekomposisi DuPont 5-tahap, rasio Laba Bersih terhadap Laba Sebelum Pajak (EAT / EBT) mengukur...",
    "options": [
      "Beban bunga relatif terhadap laba operasi (Interest Burden)",
      "Efisiensi beban pajak perusahaan (Tax Burden)",
      "Efisiensi biaya operasional (Operating Profit Margin)",
      "Perputaran aset total (Asset Turnover)"
    ],
    "answer": 1,
    "explanation": "Rasio EAT / EBT adalah Tax Burden ratio. Nilai yang semakin mendekati 1 menunjukkan beban pajak yang lebih ringan atau pemanfaatan insentif pajak yang lebih baik."
  },
  {
    "tm": 2,
    "topic": "Keterbatasan Analisis Rasio Keuangan",
    "difficulty": "basic",
    "q": "Tindakan mempercepat penagihan piutang dan menunda pembayaran utang sesaat sebelum tanggal tutup buku neraca agar rasio likuiditas terlihat lebih prima disebut...",
    "options": [
      "Benchmarking",
      "Window dressing",
      "Off-balance-sheet financing",
      "Financial distress"
    ],
    "answer": 1,
    "explanation": "Window dressing adalah praktik manipulasi waktu transaksi sesaat sebelum penutupan laporan keuangan untuk memperindah tampilan rasio keuangan di mata analis dan perbankan."
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
    "tm": 3,
    "topic": "Anuitas Biasa vs Anuitas Jatuh Tempo",
    "difficulty": "medium",
    "q": "Perbedaan mendasar antara Ordinary Annuity (Anuitas Biasa) dan Annuity Due (Anuitas Jatuh Tempo) adalah...",
    "options": [
      "Annuity Due membayar arus kas di akhir periode, sedangkan Ordinary Annuity di awal periode",
      "Arus kas Annuity Due terjadi di awal periode pembayaran, sehingga nilai sekarangnya lebih besar sebesar faktor (1 + r) dibandingkan Ordinary Annuity",
      "Ordinary Annuity memiliki jumlah pembayaran kas yang berubah-ubah tiap periode",
      "Annuity Due tidak memperhitungkan konsep pemajemukan bunga"
    ],
    "answer": 1,
    "explanation": "Pada Annuity Due, tiap pembayaran kas dilakukan di awal periode (t = 0, 1, ..., n-1), sehingga tiap arus kas terdiskonto atau termajemukkan 1 periode lebih sedikit/banyak: PV(Annuity Due) = PV(Ordinary Annuity) × (1 + r)."
  },
  {
    "tm": 3,
    "topic": "Perpetuitas & Model Gordon",
    "difficulty": "medium",
    "q": "Sebuah saham preferen membayarkan dividen tetap sebesar Rp 12.000 per lembar setiap tahun selamanya. Jika tingkat pengembalian yang disyaratkan investor adalah 8% per tahun, berapakah nilai wajar saham preferen tersebut?",
    "options": [
      "Rp 96.000",
      "Rp 120.000",
      "Rp 150.000",
      "Rp 160.000"
    ],
    "answer": 2,
    "explanation": "Nilai sekarang perpetuitas: PV = PMT / r = Rp 12.000 / 0,08 = Rp 150.000 per lembar."
  },
  {
    "tm": 3,
    "topic": "Effective Annual Rate (EAR) & Pemajemukan",
    "difficulty": "advanced",
    "q": "Bank menawarkan pinjaman dengan suku bunga nominal 12% per tahun dengan pemajemukan bulanan (compounded monthly). Berapakah Suku Bunga Efektif Tahunan (Effective Annual Rate / EAR)?",
    "options": [
      "12,00%",
      "12,36%",
      "12,68%",
      "13,10%"
    ],
    "answer": 2,
    "explanation": "EAR = (1 + r_nom / m)^m - 1 = (1 + 0,12 / 12)^12 - 1 = (1,01)^12 - 1 = 1,126825 - 1 = 12,68%."
  },
  {
    "tm": 3,
    "topic": "Amortisasi Pinjaman (Loan Amortization)",
    "difficulty": "medium",
    "q": "Pada skema cicilan pinjaman dengan anuitas tetap (level payments), seiring berjalannya waktu komposisi pembayaran cicilan akan mengalami...",
    "options": [
      "Porsi bunga tetap dan porsi pokok pinjaman menurun",
      "Porsi bunga meningkat dan porsi pokok pinjaman meningkat",
      "Porsi bunga menurun dan porsi pelunasan pokok pinjaman meningkat",
      "Porsi pelunasan pokok pinjaman tetap konstan dari periode pertama hingga akhir"
    ],
    "answer": 2,
    "explanation": "Karena saldo pokok pinjaman terus berkurang setiap kali angsuran dibayar, beban bunga pada periode berikutnya makin kecil, sehingga porsi cicilan yang dialokasikan untuk melunasi pokok utang makin membesar."
  },
  {
    "tm": 4,
    "topic": "Model CAPM & Risiko",
    "difficulty": "medium",
    "q": "Suku bunga bebas risiko (risk-free rate) adalah 6% dan return portofolio pasar yang diharapkan adalah 14%. Saham PT Cakra memiliki koefisien Beta 1,5. Berapakah return yang disyaratkan atas saham PT Cakra menurut model CAPM?",
    "options": [
      "15%",
      "18%",
      "21%",
      "27%"
    ],
    "answer": 1,
    "explanation": "r_i = r_RF + Beta × (r_M - r_RF) = 6% + 1,5 × (14% - 6%) = 6% + 1,5 × 8% = 6% + 12% = 18%."
  },
  {
    "tm": 4,
    "topic": "Risiko Sistematis vs Spesifik",
    "difficulty": "basic",
    "q": "Risiko yang dapat dihilangkan melalui diversifikasi dengan membentuk portofolio aset yang luas disebut...",
    "options": [
      "Risiko sistematis (pasar)",
      "Risiko tidak sistematis (spesifik / diversifiable risk)",
      "Risiko nilai tukar mata uang",
      "Risiko inflasi"
    ],
    "answer": 1,
    "explanation": "Risiko tidak sistematis (idiosyncratic / company-specific risk) seperti mogok kerja atau kegagalan produk baru dapat didiversifikasi hingga mendekati nol dalam portofolio yang memuat 30-40 saham terdiversifikasi."
  },
  {
    "tm": 4,
    "topic": "Beta Portofolio Investasi",
    "difficulty": "medium",
    "q": "Investor menginvestasikan 40% dananya pada Saham A (Beta = 0,8) dan 60% dananya pada Saham B (Beta = 1,4). Berapakah koefisien Beta dari portofolio gabungan tersebut?",
    "options": [
      "1,00",
      "1,16",
      "1,20",
      "1,28"
    ],
    "answer": 1,
    "explanation": "Beta Portofolio = (w_A × Beta_A) + (w_B × Beta_B) = (0,40 × 0,8) + (0,60 × 1,4) = 0,32 + 0,84 = 1,16."
  },
  {
    "tm": 4,
    "topic": "Security Market Line (SML) & Mispricing",
    "difficulty": "advanced",
    "q": "Jika sebuah saham memiliki expected return 16%, sedangkan return yang disyaratkan menurut formula CAPM (SML) adalah 13%, maka saham tersebut berada di...",
    "options": [
      "Di bawah garis SML dan tergolong Overvalued (layak dijual)",
      "Di atas garis SML dan tergolong Undervalued (layak dibeli)",
      "Tepat pada garis SML dan berada dalam ekuilibrium pasar",
      "Di bawah garis SML dan tergolong Undervalued"
    ],
    "answer": 1,
    "explanation": "Saham dengan expected return > required return CAPM terletak di ATAS garis SML. Saham ini menawarkan imbal hasil lebih tinggi dari kompensasi risikonya, sehingga berstatus Undervalued (murah) dan direkomendasikan beli."
  },
  {
    "tm": 4,
    "topic": "Koefisien Variasi (CV)",
    "difficulty": "medium",
    "q": "Koefisien Variasi (Coefficient of Variation / CV) digunakan untuk membandingkan risiko investasi apabila...",
    "options": [
      "Dua alternatif investasi memiliki tingkat expected return yang berbeda jauh",
      "Semua investasi tidak memiliki risiko pasar sama sekali",
      "Investor hanya ingin mengukur beta saham portofolio",
      "Tingkat suku bunga bebas risiko mengalami penurunan drastis"
    ],
    "answer": 0,
    "explanation": "Koefisien Variasi (CV = Standar Deviasi / Expected Return) mengukur risiko relatif per unit imbal hasil. Rasio ini sangat berguna ketika membandingkan dua proyek dengan skala expected return yang berbeda."
  },
  {
    "tm": 5,
    "topic": "Biaya Modal & WACC",
    "difficulty": "medium",
    "q": "PT Andalas memiliki struktur modal target: 40% Utang dan 60% Ekuitas. Biaya utang sebelum pajak adalah 10%, tarif pajak 25%, dan biaya ekuitas saham biasa adalah 16%. Berapakah Weighted Average Cost of Capital (WACC) perusahaan?",
    "options": [
      "12,6%",
      "13,6%",
      "11,8%",
      "14,0%"
    ],
    "answer": 0,
    "explanation": "Biaya utang setelah pajak = 10% × (1 - 0,25) = 7,5%. WACC = (0,40 × 7,5%) + (0,60 × 16%) = 3,0% + 9,6% = 12,6%."
  },
  {
    "tm": 5,
    "topic": "Biaya Ekuitas: Model Gordon Growth",
    "difficulty": "medium",
    "q": "Saham PT Surya diperdagangkan pada harga Rp 5.000. Dividen yang baru saja dibayarkan (D_0) adalah Rp 200 per lembar dan diproyeksikan bertumbuh konstan 6% per tahun. Berapakah biaya ekuitas internal (r_s) menggunakan model Gordon?",
    "options": [
      "10,00%",
      "10,24%",
      "9,60%",
      "10,80%"
    ],
    "answer": 1,
    "explanation": "D_1 = D_0 × (1 + g) = Rp 200 × 1,06 = Rp 212. Biaya ekuitas r_s = (D_1 / P_0) + g = (Rp 212 / Rp 5.000) + 6% = 4,24% + 6,00% = 10,24%."
  },
  {
    "tm": 5,
    "topic": "Biaya Saham Preferen & Pajak",
    "difficulty": "basic",
    "q": "Mengapa dalam perhitungan komponen biaya modal, biaya saham preferen (r_p = D_p / P_p) TIDAK dikalikan dengan faktor pengurang pajak (1 - T)?",
    "options": [
      "Karena dividen saham preferen diperhitungkan sebagai beban operasi di laporan laba rugi",
      "Karena dividen saham preferen dibayarkan dari laba setelah pajak (after-tax income), sehingga tidak menghasilkan tax shield",
      "Karena pemegang saham preferen tidak memiliki hak suara",
      "Karena saham preferen selalu memiliki tanggal jatuh tempo tetap"
    ],
    "answer": 1,
    "explanation": "Beban bunga utang dapat mengurangi penghasilan kena pajak (tax-deductible), sedangkan pembayaran dividen (baik preferen maupun biasa) dibayarkan dari laba bersih setelah pajak sehingga tidak menimbulkan penghematan pajak."
  },
  {
    "tm": 5,
    "topic": "Flotation Cost Penerbitan Saham Baru",
    "difficulty": "advanced",
    "q": "Harga pasar saham PT Prima Rp 4.000 dengan dividen tahun depan (D_1) Rp 240 dan pertumbuhan 5%. Jika perusahaan menerbitkan saham baru dengan biaya emisi (flotation cost) 8%, berapakah biaya ekuitas eksternal (r_e)?",
    "options": [
      "11,00%",
      "11,52%",
      "12,00%",
      "10,80%"
    ],
    "answer": 1,
    "explanation": "Harga bersih yang diterima = P_0 × (1 - F) = Rp 4.000 × (1 - 0,08) = Rp 3.680. r_e = (D_1 / [P_0 × (1 - F)]) + g = (Rp 240 / Rp 3.680) + 5% = 6,52% + 5% = 11,52%."
  },
  {
    "tm": 5,
    "topic": "Penyesuaian WACC Berdasarkan Risiko Divisi",
    "difficulty": "medium",
    "q": "Jika sebuah perusahaan menggunakan satu tingkat WACC komposit (composite WACC) untuk mengevaluasi seluruh proyek tanpa memperhatikan perbedaan risiko divisi, apa konsekuensi finansial jangka panjangnya?",
    "options": [
      "Perusahaan akan menolak terlalu banyak proyek berisiko tinggi dan menerima proyek aman",
      "Perusahaan cenderung menerima proyek berisiko tinggi yang sebenarnya merugikan dan menolak proyek aman yang menguntungkan (adverse selection)",
      "Tingkat beta perusahaan akan menurun drastis mendekati nol",
      "Biaya utang perusahaan akan otomatis turun"
    ],
    "answer": 1,
    "explanation": "Menggunakan WACC rata-rata korporat untuk semua proyek menyebabkan proyek berisiko tinggi (yang seharusnya didiskon dengan hurdle rate tinggi) tampak terlalu menarik, sehingga profil risiko perusahaan secara bertahap memburuk."
  },
  {
    "tm": 6,
    "topic": "Dasar-Dasar Capital Budgeting",
    "difficulty": "advanced",
    "q": "Jika dua proyek investasi bersifat mutually exclusive (saling meniadakan) dan terjadi konflik ranking di mana Proyek A memiliki NPV lebih tinggi tetapi Proyek B memiliki IRR lebih tinggi, kriteria mana yang harus dijadikan dasar keputusan final?",
    "options": [
      "Memilih Proyek B karena IRR mencerminkan persentase pengembalian modal yang lebih efisien",
      "Memilih Proyek A karena NPV secara langsung mengukur penambahan absolut kekayaan pemegang saham",
      "Menolak kedua proyek karena terjadi inkonsistensi keputusan",
      "Memilih proyek yang memiliki Payback Period lebih cepat"
    ],
    "answer": 1,
    "explanation": "Tujuan utama keuangan adalah memaksimumkan nilai total kekayaan (rupiah absolut), bukan persentase return. Selain itu, NPV mengasumsikan reinvestasi pada WACC yang lebih realistis daripada IRR."
  },
  {
    "tm": 6,
    "topic": "Kelemahan IRR & Multiple IRRs",
    "difficulty": "medium",
    "q": "Kelemahan matematis utama dari metode Internal Rate of Return (IRR) saat mengevaluasi proyek dengan arus kas non-konvensional (tanda arus kas berubah lebih dari satu kali) adalah...",
    "options": [
      "IRR tidak dapat dihitung sama sekali oleh kalkulator finansial",
      "Dapat menghasilkan lebih dari satu nilai IRR (multiple IRRs) yang membingungkan pengambilan keputusan",
      "Nilai IRR selalu menghasilkan keputusan yang identik dengan Payback Period",
      "IRR selalu bernilai negatif"
    ],
    "answer": 1,
    "explanation": "Sesuai Kaidah Tanda Descartes, polinomial perhitungan IRR akan memiliki akar penyelesaian sebanyak perubahan tanda arus kas masuk/keluar, sehingga memunculkan multiple IRRs yang tidak rasional."
  },
  {
    "tm": 6,
    "topic": "Modified IRR (MIRR)",
    "difficulty": "medium",
    "q": "Keunggulan utama Modified Internal Rate of Return (MIRR) dibandingkan IRR konvensional adalah...",
    "options": [
      "MIRR mengasumsikan seluruh arus kas masuk diinvestasikan kembali pada tingkat biaya modal (WACC), bukan pada tingkat IRR proyek itu sendiri",
      "MIRR mengabaikan seluruh nilai waktu uang",
      "MIRR tidak memerlukan data pengeluaran kas awal investasi",
      "MIRR selalu menghasilkan nilai persentase yang lebih tinggi dari IRR"
    ],
    "answer": 0,
    "explanation": "Asumsi bahwa arus kas masuk dapat diinvestasikan kembali pada tingkat IRR yang sangat tinggi sering kali tidak realistis. MIRR memajemukkan arus kas masuk ke nilai masa depan (terminal value) menggunakan WACC perusahaan."
  },
  {
    "tm": 6,
    "topic": "Profitability Index (PI)",
    "difficulty": "medium",
    "q": "Proyek X membutuhkan investasi awal Rp 800 juta dan menghasilkan Present Value arus kas masuk sebesar Rp 1.040 juta. Berapakah Profitability Index (PI) proyek tersebut dan apakah layak diterima?",
    "options": [
      "PI = 0,77; Proyek ditolak",
      "PI = 1,30; Proyek diterima karena PI > 1,0",
      "PI = 1,24; Proyek ditolak",
      "PI = 0,24; Proyek diterima"
    ],
    "answer": 1,
    "explanation": "PI = PV Kas Masuk / Investasi Awal = Rp 1.040 juta / Rp 800 juta = 1,30. Karena PI > 1,0 (artinya NPV > 0), proyek layak diterima."
  },
  {
    "tm": 6,
    "topic": "Titik Crossover & Sensitivitas WACC",
    "difficulty": "advanced",
    "q": "Titik potong (crossover rate) pada profil kurva NPV dua proyek investasi bersaing menunjukkan tingkat diskonto di mana...",
    "options": [
      "Kedua proyek sama-sama menghasilkan IRR sebesar 0%",
      "NPV Proyek A persis sama dengan NPV Proyek B",
      "Payback period kedua proyek sama-sama terlampaui",
      "Kedua proyek mengalami kebangkrutan finansial"
    ],
    "answer": 1,
    "explanation": "Crossover rate adalah tingkat diskonto di mana kurva NPV kedua proyek berpotongan (NPV_A = NPV_B). Crossover rate dapat dihitung dengan mencari IRR dari selisih arus kas inkremental (ΔCF)."
  },
  {
    "tm": 7,
    "topic": "Estimasi Arus Kas Proyek & Sunk Cost",
    "difficulty": "medium",
    "q": "Manakah dari pos berikut yang HARUS diperhitungkan dalam analisis arus kas inkremental penganggaran modal?",
    "options": [
      "Biaya riset dan studi kelayakan pasar yang telah dibayarkan tahun lalu (Sunk Cost)",
      "Kebutuhan tambahan Modal Kerja Bersih (Net Working Capital) dan Biaya Peluang (Opportunity Cost)",
      "Beban alokasi overhead korporat kantor pusat yang tidak berubah",
      "Beban bunga pinjaman proyek yang sudah tercermin dalam WACC"
    ],
    "answer": 1,
    "explanation": "Kebutuhan tambahan Net Working Capital (NWC) dan Opportunity Cost adalah arus kas relevan inkremental. Sunk cost diabaikan, sedangkan beban bunga dikeluarkan dari arus kas operasional karena telah tercermin pada tingkat diskonto WACC."
  },
  {
    "tm": 7,
    "topic": "Operating Cash Flow (OCF) & Tax Shield",
    "difficulty": "medium",
    "q": "PT Mahakam memproyeksikan Pendapatan Kas Rp 900 juta, Beban Operasional Tunai Rp 400 juta, Beban Depresiasi Rp 200 juta, dan Tarif Pajak 20%. Berapakah Operating Cash Flow (OCF) menggunakan pendekatan tax shield?",
    "options": [
      "Rp 340 juta",
      "Rp 400 juta",
      "Rp 440 juta",
      "Rp 500 juta"
    ],
    "answer": 2,
    "explanation": "OCF = (Pendapatan - Biaya Kas) × (1 - T) + (Depresiasi × T) = (900 - 400) × (1 - 0,20) + (200 × 0,20) = (500 × 0,80) + 40 = 400 + 40 = Rp 440 juta."
  },
  {
    "tm": 7,
    "topic": "Nilai Sisa Setelah Pajak (After-Tax Salvage Value)",
    "difficulty": "advanced",
    "q": "Mesin pabrik dijual pada akhir tahun ke-5 seharga Rp 150 juta. Nilai buku akuntansi mesin saat itu adalah Rp 100 juta. Jika tarif pajak perusahaan 22%, berapakah arus kas masuk bersih dari penjualan mesin tersebut?",
    "options": [
      "Rp 150 juta",
      "Rp 139 juta",
      "Rp 111 juta",
      "Rp 128 juta"
    ],
    "answer": 1,
    "explanation": "Keuntungan penjualan = Nilai Jual - Nilai Buku = Rp 150 - Rp 100 = Rp 50 juta. Pajak atas keuntungan = 22% × Rp 50 = Rp 11 juta. Arus kas bersih = Nilai Jual - Pajak = Rp 150 - Rp 11 = Rp 139 juta."
  },
  {
    "tm": 7,
    "topic": "Pemulihan Modal Kerja Bersih (NWC Recovery)",
    "difficulty": "medium",
    "q": "Pada akhir masa ekonomis suatu proyek investasi, penambahan Modal Kerja Bersih (NWC) yang diinvestasikan pada awal proyek umumnya akan...",
    "options": [
      "Dihapusbuku sebagai kerugian operasional tanpa arus kas masuk",
      "Dipulihkan kembali secara penuh sebagai arus kas masuk (cash inflow) terminal",
      "Dikenakan pajak keuntungan modal sebesar 50%",
      "Disusutkan menggunakan metode garis lurus"
    ],
    "answer": 1,
    "explanation": "Modal kerja bersih (seperti persediaan dan piutang) pada akhir proyek akan dilikuidasi kembali menjadi kas kas lancar sehingga diperlakukan sebagai cash inflow penuh pada arus kas terminal."
  },
  {
    "tm": 7,
    "topic": "Teknik Analisis Risiko Proyek",
    "difficulty": "basic",
    "q": "Metode analisis risiko di mana analis hanya mengubah SATU variabel input (misalnya volume penjualan saja) untuk melihat dampaknya terhadap NPV sementara variabel lain diasumsikan konstan disebut...",
    "options": [
      "Analisis Skenario (Scenario Analysis)",
      "Analisis Sensitivitas (Sensitivity Analysis)",
      "Simulasi Monte Carlo",
      "Analisis Keputusan Pohon (Decision Tree)"
    ],
    "answer": 1,
    "explanation": "Analisis Sensitivitas menguji elastisitas NPV terhadap perubahan satu variabel kunci secara individual untuk mengidentifikasi variabel yang paling krusial terhadap keberhasilan proyek."
  }
];

export const MNK201_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Teori Struktur Modal Modigliani-Miller",
    "difficulty": "medium",
    "q": "Menurut Teori Modigliani-Miller dengan Pajak Perusahaan (1963), nilai perusahaan yang menggunakan utang (levered firm) sama dengan...",
    "options": [
      "Nilai perusahaan tanpa utang dikurangi nilai sekarang biaya kebangkrutan",
      "Nilai perusahaan tanpa utang ditambah nilai sekarang penghematan pajak bunga (Tax Shield)",
      "Nilai perusahaan tanpa utang dibagi dengan rasio utang terhadap modal",
      "Nilai buku ekuitas ditambah total liabilitas lancar"
    ],
    "answer": 1,
    "explanation": "V_L = V_U + (T_c × D). Adanya pengurangan beban bunga atas pajak menciptakan penghematan kas yang meningkatkan nilai perusahaan."
  },
  {
    "tm": 8,
    "topic": "Sintesis TVM & Valuasi Obligasi",
    "difficulty": "medium",
    "q": "Jika sebuah obligasi korporasi berkupon 10% per tahun diperdagangkan pada saat suku bunga pasar (Yield to Maturity / YTM) adalah 12%, maka obligasi tersebut diperdagangkan pada kondisi...",
    "options": [
      "Pada nilai pari (At Par)",
      "Dengan diskon (Discount / di bawah nilai nominal)",
      "Dengan premi (Premium / di atas nilai nominal)",
      "Bebas risiko gagal bayar"
    ],
    "answer": 1,
    "explanation": "Ketika YTM > Coupon Rate, investor menuntut imbal hasil lebih tinggi dari yang dibayar kupon, sehingga harga pasar obligasi turun di bawah nilai nominalnya (Discount Bond)."
  },
  {
    "tm": 8,
    "topic": "Additional Funds Needed (AFN)",
    "difficulty": "advanced",
    "q": "Dalam peramalan keuangan menggunakan model Additional Funds Needed (AFN), pos liabilitas lancar manakah yang bertambah secara otomatis (spontaneous liabilities) seiring kenaikan penjualan?",
    "options": [
      "Utang wesel bayar jangka pendek (Notes Payable)",
      "Utang usaha (Accounts Payable) dan beban akrual (Accruals)",
      "Obligasi jangka panjang korporasi",
      "Utang bank jangka panjang"
    ],
    "answer": 1,
    "explanation": "Utang usaha dan beban akrual (seperti utang gaji dan pajak) bertambah secara spontan seiring meningkatnya volume operasi dan penjualan tanpa perlu negosiasi perbankan formal."
  },
  {
    "tm": 8,
    "topic": "Trade-off Biaya Modal & Rasio Utang",
    "difficulty": "medium",
    "q": "Meskipun utang memiliki biaya modal yang lebih murah daripada ekuitas karena efek tax shield, mengapa perusahaan tidak mendanai 100% operasinya dengan utang?",
    "options": [
      "Karena pemerintah melarang perusahaan memiliki utang lebih dari 50%",
      "Karena peningkatan leverage keuangan meningkatkan risiko kebangkrutan dan biaya keagenan, yang menaikkan biaya utang dan biaya ekuitas secara tajam",
      "Karena pemegang obligasi akan mengambil alih kepemilikan saham secara otomatis",
      "Karena biaya emisi utang selalu lebih mahal daripada saham biasa"
    ],
    "answer": 1,
    "explanation": "Sesuai Trade-off Theory, penambahan utang berlebihan meningkatkan kemungkinan financial distress dan biaya kebangkrutan, yang pada titik tertentu melampaui manfaat tax shield."
  },
  {
    "tm": 8,
    "topic": "Integrasi SML & Hurdle Rate Proyek",
    "difficulty": "medium",
    "q": "Divisi A dari suatu konglomerasi memiliki beta 0,7 sedangkan Divisi B memiliki beta 1,6. Jika manajemen menggunakan satu hurdle rate WACC gabungan untuk kedua divisi, maka distorsi yang terjadi adalah...",
    "options": [
      "Divisi A akan menerima terlalu banyak proyek berisiko tinggi",
      "Divisi B akan dirugikan karena proyeknya yang layak didiskon terlalu tinggi",
      "Divisi B yang berisiko tinggi akan mendapatkan alokasi modal berlebih, sedangkan Divisi A yang aman akan kekurangan alokasi modal",
      "Kedua divisi akan menghentikan seluruh investasinya"
    ],
    "answer": 2,
    "explanation": "Divisi B yang berisiko tinggi memiliki return ekspektasi tinggi yang mudah melampaui WACC gabungan yang rendah, sedangkan Divisi A yang aman memiliki return moderat yang keliru dianggap di bawah WACC gabungan."
  },
  {
    "tm": 9,
    "topic": "Teori Struktur Modal Trade-off",
    "difficulty": "medium",
    "q": "Trade-off Theory menyatakan bahwa struktur modal optimal korporasi tercapai pada saat...",
    "options": [
      "Perusahaan tidak memiliki utang sama sekali (zero-debt policy)",
      "Manfaat marjinal penghematan pajak bunga (tax shield) sama persis dengan marjinal kenaikan biaya kesulitan keuangan (financial distress costs)",
      "Rasio utang terhadap ekuitas tepat bernilai 1,0 kali",
      "Tingkat suku bunga perbankan mencapai titik terendah dalam siklus ekonomi"
    ],
    "answer": 1,
    "explanation": "Titik optimal tercapai ketika tambahan penghematan pajak utang berikutnya diimbangi oleh peningkatan nilai harapan biaya kesulitan keuangan dan kebangkrutan."
  },
  {
    "tm": 9,
    "topic": "Teori Pecking Order",
    "difficulty": "medium",
    "q": "Menurut Pecking Order Theory yang dikemukakan oleh Myers dan Majluf, sumber pendanaan yang PALING TERAKHIR dipilih oleh manajemen adalah...",
    "options": [
      "Laba ditahan internal (Internal Retained Earnings)",
      "Utang bank jangka pendek",
      "Penerbitan saham biasa baru ke publik (External Equity)",
      "Utang obligasi konversi"
    ],
    "answer": 2,
    "explanation": "Penerbitan saham baru berada di urutan paling buncit karena adanya asimetri informasi; pasar menafsirkan penerbitan ekuitas baru sebagai sinyal bahwa harga saham perusahaan saat ini overvalued."
  },
  {
    "tm": 9,
    "topic": "Persamaan Hamada (Levered vs Unlevered Beta)",
    "difficulty": "advanced",
    "q": "Perusahaan tanpa utang (unlevered) memiliki beta operasional (b_U) sebesar 0,90. Jika perusahaan mengubah struktur modalnya menjadi D/E = 0,50 dengan tarif pajak 20%, berapakah levered beta (b_L) perusahaan berdasarkan Persamaan Hamada?",
    "options": [
      "1,15",
      "1,26",
      "1,35",
      "0,98"
    ],
    "answer": 1,
    "explanation": "b_L = b_U × [1 + (1 - T) × (D/E)] = 0,90 × [1 + (1 - 0,20) × 0,50] = 0,90 × [1 + 0,40] = 0,90 × 1,40 = 1,26."
  },
  {
    "tm": 9,
    "topic": "Titik Impas Finansial (EBIT-EPS Indifference Point)",
    "difficulty": "advanced",
    "q": "Titik Indiferen EBIT-EPS antara rencana pendanaan utang versus pendanaan saham biasa menunjukkan...",
    "options": [
      "Tingkat penjualan di mana laba operasi (EBIT) persis bernilai nol",
      "Tingkat EBIT di mana kedua alternatif struktur modal menghasilkan Laba per Lembar Saham (EPS) yang persis sama",
      "Tingkat utang di mana risiko kebangkrutan mencapai 100%",
      "Kondisi di mana dividen kas per lembar saham sama dengan beban bunga per lembar obligasi"
    ],
    "answer": 1,
    "explanation": "EBIT-EPS Indifference Point adalah titik impas finansial di mana manajemen bersikap indiferen antara mendanai ekspansi dengan utang atau ekuitas karena keduanya memberikan EPS yang identik."
  },
  {
    "tm": 9,
    "topic": "Tingkat Leverage Operasi & Keuangan",
    "difficulty": "medium",
    "q": "Tingkat Leverage Keuangan (Degree of Financial Leverage / DFL) pada level laba operasi EBIT dihitung dengan rumus...",
    "options": [
      "DFL = EBIT / (EBIT - Beban Bunga)",
      "DFL = Penjualan / (Penjualan - Biaya Variabel)",
      "DFL = Laba Bersih / Total Aset",
      "DFL = Total Utang / Total Ekuitas"
    ],
    "answer": 0,
    "explanation": "DFL = EBIT / (EBIT - I). DFL mengukur sensitivitas persentase perubahan EPS terhadap persentase perubahan laba operasional (EBIT)."
  },
  {
    "tm": 10,
    "topic": "Teori Kebijakan Dividen",
    "difficulty": "medium",
    "q": "Teori dividen yang menyatakan bahwa investor memandang dividen kas saat ini memiliki kepastian lebih tinggi dan risiko lebih rendah dibandingkan potensi keuntungan modal (capital gains) di masa depan adalah...",
    "options": [
      "Dividend Irrelevance Theory (Modigliani-Miller)",
      "Bird-in-the-Hand Theory (Myron Gordon & John Lintner)",
      "Tax Preference Theory",
      "Residual Dividend Policy"
    ],
    "answer": 1,
    "explanation": "Bird-in-the-Hand theory berpendapat bahwa pemegang saham lebih menghargai satu burung di tangan (dividen tunai pasti) daripada dua burung di semak-semak (capital gain masa depan yang berisiko)."
  },
  {
    "tm": 10,
    "topic": "Residual Dividend Model",
    "difficulty": "advanced",
    "q": "PT Mahkota memiliki laba bersih Rp 500 miliar dan anggaran belanja modal tahun depan Rp 600 miliar dengan target rasio struktur modal 60% ekuitas dan 40% utang. Berapakah dividen tunai yang dibagikan menurut Residual Dividend Model?",
    "options": [
      "Rp 0 miliar",
      "Rp 140 miliar",
      "Rp 200 miliar",
      "Rp 260 miliar"
    ],
    "answer": 1,
    "explanation": "Kebutuhan ekuitas untuk modal = 60% × Rp 600 miliar = Rp 360 miliar. Dividen residu = Laba Bersih - Kebutuhan Ekuitas = Rp 500 miliar - Rp 360 miliar = Rp 140 miliar."
  },
  {
    "tm": 10,
    "topic": "Pembelian Kembali Saham (Share Repurchase)",
    "difficulty": "medium",
    "q": "Jika perusahaan menggunakan kelebihan kasnya untuk melakukan pembelian kembali saham (share repurchase) di pasar sekunder pada harga wajar, apa dampaknya terhadap jumlah saham beredar dan EPS?",
    "options": [
      "Jumlah saham beredar bertambah dan EPS menurun",
      "Jumlah saham beredar berkurang dan EPS meningkat",
      "Jumlah saham beredar dan EPS tetap tidak berubah",
      "Jumlah saham beredar berkurang tetapi EPS menurun"
    ],
    "answer": 1,
    "explanation": "Share repurchase menyerap saham dari pasar sehingga jumlah lembar saham beredar berkurang. Jika laba bersih tetap, laba per lembar saham (EPS = Net Income / Shares) otomatis meningkat."
  },
  {
    "tm": 10,
    "topic": "Efek Sinyal Dividen (Signaling Hypothesis)",
    "difficulty": "medium",
    "q": "Mengapa pengumuman kenaikan pembayaran dividen kas yang tidak terduga oleh dewan direksi biasanya direspons positif oleh harga saham di bursa efek?",
    "options": [
      "Karena investor tahu perusahaan tidak memiliki utang sama sekali",
      "Karena pengumuman tersebut bertindak sebagai sinyal kredibel dari orang dalam (insiders) bahwa arus kas masa depan perusahaan diperkirakan kuat dan berkelanjutan",
      "Karena dividen saham tidak dikenai pajak penghasilan",
      "Karena perusahaan dipaksa melikuidasi seluruh aset fisiknya"
    ],
    "answer": 1,
    "explanation": "Karena manajemen memiliki asimetri informasi lebih banyak dibanding publik, komitmen menaikkan dividen kas secara permanen dipandang pasar sebagai sinyal optimisme manajemen atas laba masa depan."
  },
  {
    "tm": 10,
    "topic": "Stock Split vs Stock Dividend",
    "difficulty": "basic",
    "q": "Tujuan utama emiten melakukan pemecahan saham (Stock Split 2-for-1) adalah...",
    "options": [
      "Meningkatkan total nilai ekuitas di neraca perusahaan",
      "Menurunkan harga pasar per lembar saham ke kisaran perdagangan yang lebih optimal agar lebih terjangkau bagi investor ritel dan likuid",
      "Membayar utang jatuh tempo kepada kreditur",
      "Mengurangi jumlah saham yang beredar di pasar modal"
    ],
    "answer": 1,
    "explanation": "Stock split memecah 1 lembar saham menjadi 2 lembar tanpa mengubah proporsi kepemilikan maupun nilai buku total ekuitas, bertujuan meningkatkan likuiditas perdagangan saham di bursa."
  },
  {
    "tm": 11,
    "topic": "Manajemen Kas & Model Baumol (BAT)",
    "difficulty": "medium",
    "q": "Model Baumol-Allais-Tobin (BAT) digunakan dalam manajemen kas perusahaan untuk...",
    "options": [
      "Memprediksi fluktuasi kurs mata uang asing harian",
      "Menyeimbangkan biaya transaksi pengalihan surat berharga menjadi kas dengan biaya peluang (opportunity cost) memegang uang tunai",
      "Menetapkan batas waktu jatuh tempo piutang dagang",
      "Menentukan tingkat diskon pelunasan faktur penjualan"
    ],
    "answer": 1,
    "explanation": "Model BAT meminimumkan total biaya kas dengan mencari saldo transfer optimal C* yang menyeimbangkan biaya tetap transaksi (F) dengan biaya bunga yang hilang (r)."
  },
  {
    "tm": 11,
    "topic": "Model Saldo Kas Miller-Orr",
    "difficulty": "advanced",
    "q": "Perusahaan menghadapi arus kas harian yang berfluktuasi secara acak. Manajer menetapkan batas bawah kas Rp 50 juta dan menghitung target saldo kas (Return Point Z) sebesar Rp 80 juta. Berapakah batas atas kas (Upper Limit H) menurut model Miller-Orr?",
    "options": [
      "Rp 110 juta",
      "Rp 130 juta",
      "Rp 140 juta",
      "Rp 160 juta"
    ],
    "answer": 2,
    "explanation": "Menurut formula Miller-Orr: H = 3Z - 2L = 3(80) - 2(50) = 240 - 100 = Rp 140 juta. Ketika saldo kas mencapai Rp 140 juta, manajer menginvestasikan Rp 60 juta ke surat berharga agar kembali ke Z (Rp 80 juta)."
  },
  {
    "tm": 11,
    "topic": "Siklus Konversi Kas (Cash Conversion Cycle / CCC)",
    "difficulty": "medium",
    "q": "Jika Periode Konversi Persediaan (ICP) 60 hari, Periode Penagihan Piutang (DSO) 45 hari, dan Periode Penundaan Utang Usaha (DPO) 35 hari, berapakah Siklus Konversi Kas (CCC) perusahaan?",
    "options": [
      "140 hari",
      "70 hari",
      "80 hari",
      "50 hari"
    ],
    "answer": 1,
    "explanation": "CCC = ICP + DSO - DPO = 60 + 45 - 35 = 70 hari. Perusahaan harus mendanai modal kerjanya selama 70 hari di antara pengeluaran kas pembelian dan penerimaan kas penagihan."
  },
  {
    "tm": 11,
    "topic": "Evaluasi Perubahan Kebijakan Kredit",
    "difficulty": "advanced",
    "q": "Perusahaan berencana melonggarkan syarat kredit dari net 30 menjadi net 60. Kebijakan ini dinilai menguntungkan secara finansial HANYA JIKA...",
    "options": [
      "Total volume penjualan meningkat dua kali lipat tanpa memperhatikan beban piutang",
      "Tambahan laba kotor dari peningkatan volume penjualan melebihi tambahan biaya investasi piutang, biaya penagihan, dan potensi kerugian piutang tak tertagih",
      "Perusahaan dapat menghapuskan seluruh diskon kas yang ada",
      "Seluruh pelanggan beralih melakukan pembayaran tunai seketika"
    ],
    "answer": 1,
    "explanation": "Keputusan pelonggaran kredit harus didasarkan pada analisis inkremental: ΔLaba Kotor > ΔBiaya Modal Piutang + ΔBeban Kerugian Piutang (Bad Debt) + ΔBiaya Administrasi Penagihan."
  },
  {
    "tm": 11,
    "topic": "Manajemen Float & Sistem Lockbox",
    "difficulty": "basic",
    "q": "Tujuan pemasangan sistem kotak pos khusus (Lockbox System) di berbagai kota strategis bagi perusahaan nasional adalah...",
    "options": [
      "Memperpanjang disbursement float pembayaran kepada pemasok",
      "Mempercepat penagihan piutang dan memperpendek collection float kas masuk dari pelanggan",
      "Meniadakan seluruh saldo kas di rekening bank",
      "Menghindari kewajiban audit laporan arus kas"
    ],
    "answer": 1,
    "explanation": "Lockbox system memungkinkan bank lokal memproses langsung cek/pembayaran pelanggan di wilayah tersebut, memangkas waktu kirim pos dan waktu kliring cek (mempercepat availability float)."
  },
  {
    "tm": 12,
    "topic": "Model Persediaan EOQ",
    "difficulty": "medium",
    "q": "Permintaan tahunan bahan baku adalah 10.000 unit, biaya pemesanan Rp 50.000 per pesanan, dan biaya penyimpanan Rp 4.000 per unit per tahun. Berapakah kuantitas pemesanan ekonomis (Economic Order Quantity / EOQ)?",
    "options": [
      "354 unit",
      "500 unit",
      "707 unit",
      "1.000 unit"
    ],
    "answer": 1,
    "explanation": "EOQ = √[(2 × S × O) / C] = √[(2 × 10.000 × 50.000) / 4.000] = √[1.000.000.000 / 4.000] = √250.000 = 500 unit."
  },
  {
    "tm": 12,
    "topic": "Biaya Kredit Dagang (Cost of Trade Credit)",
    "difficulty": "medium",
    "q": "Pemasok menawarkan syarat pembayaran kredit dagang '2/10, net 30'. Berapakah perkiraan biaya tahunan nominal (Nominal Annual Cost) jika perusahaan menolak mengambil diskon dan membayar pada hari ke-30?",
    "options": [
      "24,00%",
      "37,24%",
      "36,73%",
      "18,37%"
    ],
    "answer": 1,
    "explanation": "Biaya Nominal = [Diskon% / (100 - Diskon%)] × [365 / (Hari Net - Hari Diskon)] = (2 / 98) × (365 / 20) = 0,020408 × 18,25 = 37,24%."
  },
  {
    "tm": 12,
    "topic": "Titik Pemesanan Kembali (Reorder Point)",
    "difficulty": "medium",
    "q": "Rata-rata pemakaian bahan baku adalah 40 unit per hari, waktu tunggu (lead time) pengiriman dari pemasok adalah 5 hari kerja, dan safety stock ditetapkan 60 unit. Berapakah Reorder Point (ROP)?",
    "options": [
      "200 unit",
      "260 unit",
      "300 unit",
      "140 unit"
    ],
    "answer": 1,
    "explanation": "Reorder Point (ROP) = (Lead Time × Penggunaan Harian) + Safety Stock = (5 × 40) + 60 = 200 + 60 = 260 unit."
  },
  {
    "tm": 12,
    "topic": "Strategi Pendanaan Modal Kerja",
    "difficulty": "medium",
    "q": "Perusahaan yang mendanai aset lancar permanen dan sebagian aset tetapnya dengan utang jangka pendek (short-term debt) sedang menerapkan strategi pendanaan modal kerja...",
    "options": [
      "Konservatif (Conservative Approach)",
      "Penyelarasan Maturitas (Maturity Matching / Hedging Approach)",
      "Agresif (Aggressive Approach)",
      "Zero Working Capital Policy"
    ],
    "answer": 2,
    "explanation": "Pendekatan Agresif memanfaatkan utang jangka pendek berbunga rendah untuk aset jangka panjang. Strategi ini meningkatkan profitabilitas tetapi memperbesar risiko refinancing dan risiko fluktuasi suku bunga."
  },
  {
    "tm": 12,
    "topic": "Factoring Piutang Dagang",
    "difficulty": "basic",
    "q": "Dalam transaksi anjak piutang (factoring) dengan skema 'without recourse', risiko kerugian akibat pelanggan tidak melunasi piutangnya ditanggung oleh...",
    "options": [
      "Perusahaan penjual piutang (klien)",
      "Perusahaan anjak piutang (factor)",
      "Asuransi simpanan perbankan",
      "Bank Indonesia"
    ],
    "answer": 1,
    "explanation": "Pada factoring without recourse (tanpa hak regres), perusahaan factor membeli piutang dan menanggung sepenuhnya risiko kredit macet (bad debt loss) jika debitur gagal bayar."
  },
  {
    "tm": 13,
    "topic": "Manajemen Keuangan Multinasional",
    "difficulty": "medium",
    "q": "Eksposur yang timbul ketika laporan keuangan anak perusahaan di luar negeri dikonversi ke mata uang pelaporan induk perusahaan untuk tujuan konsolidasi disebut...",
    "options": [
      "Transaction Exposure",
      "Translation Exposure (Accounting Exposure)",
      "Operating Exposure (Economic Exposure)",
      "Sovereign Risk Exposure"
    ],
    "answer": 1,
    "explanation": "Translation exposure berkaitan dengan perubahan nilai ekuitas dan laba pada laporan keuangan konsolidasi akibat fluktuasi nilai tukar saat translasi mata uang asing."
  },
  {
    "tm": 13,
    "topic": "Interest Rate Parity (IRP)",
    "difficulty": "advanced",
    "q": "Berdasarkan Teori Paritas Suku Bunga (Interest Rate Parity / IRP), jika suku bunga nominal di Amerika Serikat lebih rendah daripada suku bunga di Indonesia, maka kurs forward Dolar AS (USD) terhadap Rupiah (IDR) seharusnya...",
    "options": [
      "Diperdagangkan pada diskon forward (Forward Discount)",
      "Diperdagangkan pada premi forward (Forward Premium)",
      "Persis sama dengan kurs spot tanpa selisih",
      "Tidak dapat diprediksi"
    ],
    "answer": 1,
    "explanation": "Mata uang negara dengan suku bunga lebih rendah (USD) akan diperdagangkan pada Forward Premium relatif terhadap mata uang bersuku bunga tinggi (IDR) untuk mencegah arbitrase tertutup (covered interest arbitrage)."
  },
  {
    "tm": 13,
    "topic": "Hedging Valas: Forward vs Money Market",
    "difficulty": "advanced",
    "q": "Eksportir Indonesia memiliki piutang sebesar USD 100.000 yang jatuh tempo 90 hari lagi. Untuk mengeliminasi risiko depresiasi USD menggunakan Money Market Hedge, langkah yang tepat adalah...",
    "options": [
      "Meminjam Rupiah hari ini dan menginvestasikannya dalam deposito Dolar AS",
      "Meminjam USD hari ini sebesar PV dari piutang, mengonversinya ke IDR di pasar spot, dan menggunakan piutang 90 hari lagi untuk melunasi pinjaman USD",
      "Membeli kontrak opsi Call atas USD di bursa valas",
      "Menunda pengiriman barang hingga kurs spot USD menguat"
    ],
    "answer": 1,
    "explanation": "Money Market Hedge untuk piutang valas dilakukan dengan meminjam valas sejumlah nilai tunainya saat ini, langsung mengonversi ke mata uang lokal di pasar spot, dan melunasi pinjaman menggunakan piutang saat cair."
  },
  {
    "tm": 13,
    "topic": "Purchasing Power Parity (PPP)",
    "difficulty": "medium",
    "q": "Teori Purchasing Power Parity (PPP) menyatakan bahwa pergerakan kurs valuta asing dalam jangka panjang dipicu oleh perbedaan...",
    "options": [
      "Tingkat suku bunga perbankan antar bank sentral",
      "Tingkat inflasi relatif antar dua negara",
      "Defisit neraca perdagangan migas",
      "Tingkat cadangan devisa emas negara"
    ],
    "answer": 1,
    "explanation": "Menurut Hukum Satu Harga dan PPP relatif, mata uang negara dengan inflasi lebih tinggi akan terdepresiasi terhadap mata uang negara yang inflasinya lebih rendah sebesar selisih inflasi kedua negara."
  },
  {
    "tm": 13,
    "topic": "Risiko Politik & Expropriation",
    "difficulty": "basic",
    "q": "Tindakan pemerintah negara tuan rumah mengambil alih kepemilikan aset anak perusahaan multinasional secara paksa tanpa kompensasi wajar disebut...",
    "options": [
      "Transfer Pricing",
      "Expropriation (Nasionalisasi)",
      "Currency Devaluation",
      "Default Risk"
    ],
    "answer": 1,
    "explanation": "Expropriation adalah salah satu bentuk risiko politik paling ekstrem di mana aset investor asing disita atau dinasionalisasi oleh pemerintah negara tuan rumah."
  },
  {
    "tm": 14,
    "topic": "Prediksi Kebangkrutan & Altman Z-Score",
    "difficulty": "advanced",
    "q": "Model prediksi kesulitan keuangan (financial distress) Altman Z-Score mengintegrasikan lima rasio keuangan. Rasio manakah yang memiliki bobot koefisien paling tinggi (3,3) dalam formula asli manufaktur?",
    "options": [
      "Modal Kerja Bersih / Total Aset",
      "Laba Ditahan / Total Aset",
      "Laba Sebelum Bunga dan Pajak (EBIT) / Total Aset",
      "Nilai Pasar Ekuitas / Nilai Buku Total Liabilitas"
    ],
    "answer": 2,
    "explanation": "Dalam formula Altman (1968), Z = 1,2 X_1 + 1,4 X_2 + 3,3 X_3 + 0,6 X_4 + 0,999 X_5, variabel X_3 (EBIT / Total Aset) memiliki bobot tertinggi yaitu 3,3 karena mengukur produktivitas aset inti."
  },
  {
    "tm": 14,
    "topic": "Sinergi Merger & Valuasi",
    "difficulty": "medium",
    "q": "Perusahaan A berencana mengakuisisi Perusahaan B. Nilai mandiri (stand-alone) A adalah Rp 10 triliun dan B adalah Rp 2 triliun. Jika nilai gabungan kedua perusahaan diproyeksikan menjadi Rp 13 triliun, berapakah nilai maksimum sinergi yang tercipta dari merger tersebut?",
    "options": [
      "Rp 3 triliun",
      "Rp 1 triliun",
      "Rp 2 triliun",
      "Rp 500 miliar"
    ],
    "answer": 1,
    "explanation": "Nilai Sinergi = Nilai Gabungan (A+B) - (Nilai Mandiri A + Nilai Mandiri B) = Rp 13 triliun - (Rp 10 triliun + Rp 2 triliun) = Rp 13 - Rp 12 = Rp 1 triliun."
  },
  {
    "tm": 14,
    "topic": "Taktik Pertahanan Hostile Takeover",
    "difficulty": "medium",
    "q": "Taktik pertahanan di mana perusahaan target menerbitkan hak kepada pemegang saham eksisting untuk membeli saham tambahan dengan diskon besar jika pihak penawar (raider) mengakumulasi persentase kepemilikan tertentu disebut...",
    "options": [
      "White Knight",
      "Poison Pill (Shareholder Rights Plan)",
      "Golden Parachute",
      "Greenmail"
    ],
    "answer": 1,
    "explanation": "Poison Pill dirancang untuk mendilusi secara masif kepemilikan penawar yang tidak bersahabat (hostile bidder) dan membuat biaya pengambilalihan melonjak drastis sehingga batal dieksekusi."
  },
  {
    "tm": 14,
    "topic": "Restrukturisasi Korporasi (Spin-off)",
    "difficulty": "medium",
    "q": "Pemisahan divisi usaha menjadi entitas perusahaan publik baru yang terpisah, di mana saham perusahaan baru dibagikan secara proporsional kepada seluruh pemegang saham induk perusahaan, disebut...",
    "options": [
      "Carve-out ekuitas",
      "Spin-off",
      "Leveraged Buyout (LBO)",
      "Likuidasi sukarela"
    ],
    "answer": 1,
    "explanation": "Dalam spin-off, unit usaha dipisahkan menjadi badan hukum independen dan sahamnya dibagikan kepada pemegang saham eksisting tanpa adanya kas baru yang dihimpun."
  },
  {
    "tm": 14,
    "topic": "Kebangkrutan: Likuidasi vs Reorganisasi",
    "difficulty": "basic",
    "q": "Perbedaan mendasar antara proses Reorganisasi (Chapter 11) dan Likuidasi (Chapter 7) dalam hukum kepailitan modern adalah...",
    "options": [
      "Pada Chapter 11 seluruh aset fisik perusahaan dilelang seketika untuk membayar kreditur",
      "Pada Chapter 11 operasi perusahaan tetap berjalan di bawah rencana restrukturisasi utang yang disetujui pengadilan dan kreditur, sedangkan Chapter 7 membubarkan dan melelang aset perusahaan",
      "Chapter 7 hanya berlaku bagi lembaga perbankan milik negara",
      "Chapter 11 menghapus 100% hak klaim pemegang obligasi"
    ],
    "answer": 1,
    "explanation": "Reorganisasi bertujuan menjaga kelangsungan usaha (going concern) korporasi dengan merestrukturisasi jadwal utang dan operasi, sedangkan likuidasi bertujuan menghentikan operasi dan membagi hasil penjualan aset kepada kreditur sesuai urutan prioritas."
  }
];

export const MNK201_QUIZ: QuizQuestion[] = [...MNK201_QUIZ_UTS, ...MNK201_QUIZ_UAS];
