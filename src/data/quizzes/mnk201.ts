// MNK102; keep original pre-UTS items and UTS review.
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
export const MNK201_REVIEW_UTS_QUIZ: QuizQuestion[] = [
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
  }
];
export const MNK201_QUIZ_UAS: QuizQuestion[] = [
  {
    "id": "mnk102-uas-v2-tm09-01",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "DOL dan risiko bisnis",
    "difficulty": "medium",
    "q": "Adaptasi Campus Deli: penjualan USD1.100.000, biaya variabel 60%, biaya tetap USD40.000. Berapa degree of operating leverage (kepekaan EBIT terhadap penjualan)? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 484-487 (PDF 526-529). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 7-9.",
    "options": [
      "1,10 kali",
      "1,00 kali",
      "1,65 kali",
      "2,75 kali"
    ],
    "answer": 0,
    "explanation": "Biaya variabel = 0,60 × 1.100.000 = USD660.000. Margin kontribusi = 440.000; EBIT = 440.000 - 40.000 = USD400.000. DOL = margin kontribusi/EBIT = 440.000/400.000 = 1,10 kali. Perubahan penjualan 1% mengubah EBIT sekitar 1,10% pada struktur biaya tersebut. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 484-487 (PDF 526-529). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 7-9.",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 484-487 (PDF 526-529). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 7-9.",
    "sourceAnchors": [
      "DOL dan risiko bisnis"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-02",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "ROIC operasi",
    "difficulty": "medium",
    "q": "Kasus Campus Deli memakai EBIT USD400.000, modal operasi USD2.000.000, dan pajak model 25%. Berapa return on invested capital (imbal hasil modal operasi)? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 484-492 (PDF 526-534). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 10 dan 15.",
    "options": [
      "20,00%",
      "15,00%",
      "18,75%",
      "11,25%"
    ],
    "answer": 1,
    "explanation": "NOPAT, laba operasi setelah pajak, = 400.000 × (1 - 0,25) = USD300.000. ROIC = 300.000/2.000.000 = 0,15 atau 15,00% per tahun. Bunga tidak dikurangkan karena ROIC mengukur operasi sebelum pengaruh cara pendanaan. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 484-492 (PDF 526-534). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 10 dan 15.",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 484-492 (PDF 526-534). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 10 dan 15.",
    "sourceAnchors": [
      "ROIC operasi"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-03",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "ROE dengan utang",
    "difficulty": "advanced",
    "q": "EBIT USD3.000 per tahun, utang USD10.000 berbunga 12%, ekuitas USD10.000, pajak 25%. Berapa ROE, imbal hasil ekuitas? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 488-493 (PDF 530-535). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 13-15.",
    "options": [
      "11,25%",
      "18,00%",
      "13,50%",
      "22,50%"
    ],
    "answer": 2,
    "explanation": "Bunga = 10.000 × 12% = USD1.200. Laba sebelum pajak = 3.000 - 1.200 = USD1.800; laba bersih = 1.800 × 75% = USD1.350. ROE = 1.350/10.000 = 13,50%. Menggunakan total modal USD20.000 akan mencampur ROE dengan ukuran operasi. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 488-493 (PDF 530-535). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 13-15.",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 488-493 (PDF 530-535). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 13-15.",
    "sourceAnchors": [
      "ROE dengan utang"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-04",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "Hamada",
    "difficulty": "medium",
    "q": "Beta tanpa utang 1,00; rasio utang/ekuitas 0,60; pajak model 25%. Dengan Hamada, berapa beta ekuitas setelah berutang? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 495-497 (PDF 537-539).",
    "options": [
      "1,600",
      "1,150",
      "1,250",
      "1,450"
    ],
    "answer": 3,
    "explanation": "Hamada memakai D/E, bukan D/(D+E). Beta L = beta U × [1 + (1 - T)D/E] = 1,00 × [1 + 0,75 × 0,60] = 1,450. Beta tidak bersatuan. Kenaikan dari 1,00 mencerminkan tambahan risiko ekuitas. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 495-497 (PDF 537-539).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 495-497 (PDF 537-539).",
    "sourceAnchors": [
      "Hamada"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-05",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "CAPM setelah rekapitalisasi",
    "difficulty": "medium",
    "q": "Beta L = 1,45, bunga bebas risiko 5% per tahun, premi risiko pasar 6% per tahun. Berapa biaya ekuitas menurut CAPM? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 495-497 (PDF 537-539).",
    "options": [
      "13,70%",
      "11,00%",
      "14,70%",
      "20,95%"
    ],
    "answer": 0,
    "explanation": "CAPM: rs = rRF + beta L × premi risiko pasar = 5% + 1,45 × 6% = 5% + 8,70% = 13,70% per tahun. Premi risiko pasar sudah berupa selisih return pasar dan bunga bebas risiko; jangan menguranginya dengan 5% sekali lagi. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 495-497 (PDF 537-539).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 495-497 (PDF 537-539).",
    "sourceAnchors": [
      "CAPM setelah rekapitalisasi"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-06",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "WACC berbobot pasar",
    "difficulty": "advanced",
    "q": "Bobot utang 40%, ekuitas 60%, bunga utang 9%, biaya ekuitas 14%, pajak 25%. Berapa WACC tahunan? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 494-498 (PDF 536-540).",
    "options": [
      "12,00%",
      "11,10%",
      "10,20%",
      "12,90%"
    ],
    "answer": 1,
    "explanation": "Biaya utang setelah pajak = 9% × 75% = 6,75%. Kontribusi utang = 0,40 × 6,75% = 2,70%; ekuitas = 0,60 × 14% = 8,40%. WACC = 11,10% per tahun. Bobot berjumlah 100%; pajak model hanya diterapkan pada biaya utang. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 494-498 (PDF 536-540).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 494-498 (PDF 536-540).",
    "sourceAnchors": [
      "WACC berbobot pasar"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-07",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "Konversi rasio pendanaan",
    "difficulty": "medium",
    "q": "Utang 40% dari total modal pasar. Berapa D/E yang masuk ke Hamada? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 480-482 (PDF 522-524). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 495-497 (PDF 537-539).",
    "options": [
      "0,4000 kali",
      "0,6000 kali",
      "0,6667 kali",
      "1,5000 kali"
    ],
    "answer": 2,
    "explanation": "Ekuitas merupakan 60% total modal. D/E = 40%/60% = 0,6666667, dibulatkan empat desimal menjadi 0,6667 kali. D/total modal dan D/E memakai penyebut berbeda, sehingga angka 0,40 tidak boleh langsung masuk ke Hamada. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 480-482 (PDF 522-524). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 495-497 (PDF 537-539).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 480-482 (PDF 522-524). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 495-497 (PDF 537-539).",
    "sourceAnchors": [
      "Konversi rasio pendanaan"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-08",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "EPS dan pembelian kembali",
    "difficulty": "medium",
    "q": "EBIT USD400.000, saham awal 80.000 lembar. Utang USD400.000 berbunga 10% dipakai membeli saham pada USD25/lembar. Pajak 25%; tidak ada biaya transaksi. Berapa EPS baru? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 489-498 (PDF 531-540).",
    "options": [
      "USD3,3750/lembar",
      "USD3,7500/lembar",
      "USD4,6875/lembar",
      "USD4,2188/lembar"
    ],
    "answer": 3,
    "explanation": "Saham dibeli = 400.000/25 = 16.000 lembar; tersisa 64.000. Bunga = USD40.000; laba bersih = (400.000 - 40.000) × 75% = USD270.000. EPS = 270.000/64.000 = USD4,21875, dibulatkan empat desimal. EPS naik tidak langsung membuktikan kenaikan nilai karena risiko juga berubah. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 489-498 (PDF 531-540).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 489-498 (PDF 531-540).",
    "sourceAnchors": [
      "EPS dan pembelian kembali"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-09",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "MM dengan pajak",
    "difficulty": "advanced",
    "q": "Dalam model MM dengan utang permanen, nilai tanpa utang Rp 10 miliar, utang Rp 4 miliar, pajak model 25%. Berapa nilai perusahaan berutang jika biaya distress diabaikan? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 500-503 (PDF 542-545).",
    "options": [
      "Rp 11,00 miliar",
      "Rp 10,00 miliar",
      "Rp 14,00 miliar",
      "Rp 10,25 miliar"
    ],
    "answer": 0,
    "explanation": "PV perisai pajak bunga dalam model sederhana = T × D = 25% × Rp 4 miliar = Rp 1 miliar. VL = VU + TD = Rp 11 miliar. Hasil memerlukan asumsi utang permanen dan manfaat pajak dapat dipakai; ini bukan anjuran berutang tanpa batas pada perusahaan nyata. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 500-503 (PDF 542-545).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 500-503 (PDF 542-545).",
    "sourceAnchors": [
      "MM dengan pajak"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-10",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "Perisai pajak tahunan",
    "difficulty": "medium",
    "q": "Utang Rp 4 miliar berbunga 10% setahun. Pajak model 25% dan pengurangan bunga penuh dapat dipakai. Berapa penghematan pajak tahun ini? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 500-503 (PDF 542-545).",
    "options": [
      "Rp 400 juta",
      "Rp 100 juta",
      "Rp 1.000 juta",
      "Rp 300 juta"
    ],
    "answer": 1,
    "explanation": "Bunga tahunan = Rp 4 miliar × 10% = Rp 400 juta. Penghematan pajak bunga = bunga × pajak = Rp 400 juta × 25% = Rp 100 juta per tahun. TD = Rp 1 miliar adalah nilai sekarang dalam model utang permanen, sehingga berbeda dari penghematan satu tahun. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 500-503 (PDF 542-545).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 500-503 (PDF 542-545).",
    "sourceAnchors": [
      "Perisai pajak tahunan"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-11",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "WACC dan EPS",
    "difficulty": "medium",
    "q": "Alternatif A: WACC 12%, EPS Rp 4; B: WACC 10%, EPS Rp 4,50; C: WACC 11%, EPS Rp 5. Arus kas operasi dan pertumbuhan sama. Pilihan yang paling mendukung nilai perusahaan adalah? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 494-498 (PDF 536-540).",
    "options": [
      "A: WACC 12%, karena utangnya lebih kecil",
      "C: WACC 11%, karena EPS paling tinggi",
      "B: WACC 10%, meski EPS bukan maksimum",
      "C: WACC 11%, karena selisih EPS pasti aman"
    ],
    "answer": 2,
    "explanation": "Dengan arus kas dan pertumbuhan tetap, tingkat diskonto lebih rendah menghasilkan nilai sekarang lebih tinggi. WACC minimum ada pada B, bukan C. Peningkatan EPS akibat utang dapat disertai kenaikan risiko dan biaya ekuitas; keputusan memerlukan nilai, risiko, dan kapasitas bayar, bukan EPS saja. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 494-498 (PDF 536-540).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 494-498 (PDF 536-540).",
    "sourceAnchors": [
      "WACC dan EPS"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm09-12",
    "tm": 9,
    "topic": "Capital Structure and Leverage: Struktur Modal dan Pengungkit",
    "skill": "Standar deviasi ROE",
    "difficulty": "advanced",
    "q": "Tiga kondisi ROE: 6%, 13,5%, 21%, berprobabilitas 0,25; 0,50; 0,25. Berapa standar deviasi ROE? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 488-493 (PDF 530-535). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 14-18.",
    "options": [
      "2,6517 poin persentase",
      "7,5000 poin persentase",
      "3,7500 poin persentase",
      "5,3033 poin persentase"
    ],
    "answer": 3,
    "explanation": "Rata-rata = 0,25(6) + 0,50(13,5) + 0,25(21) = 13,5%. Varians dalam satuan poin persentase kuadrat = 0,25(6 - 13,5)^2 + 0,50(0)^2 + 0,25(21 - 13,5)^2 = 28,125. Akar = 5,3033009 poin persentase. Ini penyebaran return, bukan probabilitas gagal bayar. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 488-493 (PDF 530-535). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 14-18.",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 14, hal. cetak 488-493 (PDF 530-535). Rujukan lokal: W9_Case_Study_Kelompok_7.pdf, halaman PDF 14-18.",
    "sourceAnchors": [
      "Standar deviasi ROE"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm10-01",
    "tm": 10,
    "topic": "Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "skill": "Dividen residual",
    "difficulty": "medium",
    "q": "Laba bersih Rp 150 juta, investasi layak Rp 200 juta, target pendanaan ekuitas 60%. Berapa dividen residual tanpa emisi saham? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-532 (PDF 569-574).",
    "options": [
      "Rp 30 juta",
      "Rp 150 juta",
      "Rp 80 juta",
      "Rp 50 juta"
    ],
    "answer": 0,
    "explanation": "Kebutuhan ekuitas = 60% × Rp 200 juta = Rp 120 juta. Laba dipakai memenuhi kebutuhan itu terlebih dahulu. Dividen residual = max(0, 150 - 120) = Rp 30 juta. Sisa 40% investasi didanai utang Rp 80 juta sesuai target; dividen bukan laba dikurangi seluruh investasi. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-532 (PDF 569-574).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-532 (PDF 569-574).",
    "sourceAnchors": [
      "Dividen residual"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm10-02",
    "tm": 10,
    "topic": "Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "skill": "Payout ratio",
    "difficulty": "medium",
    "q": "Dividen Rp 30 juta dari laba Rp 150 juta. Berapa dividend payout ratio, proporsi laba yang dibagikan? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-533 (PDF 569-575).",
    "options": [
      "80,00%",
      "20,00%",
      "25,00%",
      "15,00%"
    ],
    "answer": 1,
    "explanation": "Payout = dividen/laba bersih = 30/150 = 0,20 atau 20%. Retention ratio, proporsi laba ditahan, = 1 - 20% = 80%. Kedua rasio menggunakan laba bersih periode yang sama sebagai penyebut. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-533 (PDF 569-575).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-533 (PDF 569-575).",
    "sourceAnchors": [
      "Payout ratio"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm10-03",
    "tm": 10,
    "topic": "Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "skill": "DPS",
    "difficulty": "advanced",
    "q": "Dividen Rp 30 juta dibagikan kepada 10 juta lembar saham biasa. Berapa dividend per share, dividen per lembar? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-533 (PDF 569-575).",
    "options": [
      "Rp 0,30/lembar",
      "Rp 30,00/lembar",
      "Rp 3,00/lembar",
      "Rp 10,00/lembar"
    ],
    "answer": 2,
    "explanation": "DPS = Rp 30.000.000/10.000.000 lembar = Rp 3,00/lembar. Faktor juta pada pembilang dan penyebut saling menghilangkan. DPS adalah jumlah uang per lembar, berbeda dari payout yang berupa persentase laba. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-533 (PDF 569-575).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-533 (PDF 569-575).",
    "sourceAnchors": [
      "DPS"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm10-04",
    "tm": 10,
    "topic": "Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "skill": "Kekurangan ekuitas",
    "difficulty": "medium",
    "q": "Investasi Rp 200 juta membutuhkan ekuitas 70%; laba tersedia Rp 100 juta. Target pendanaan dipertahankan. Berapa dana ekuitas tambahan, dengan dividen residual nol? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-532 (PDF 569-574).",
    "options": [
      "Rp 100 juta",
      "Rp 60 juta",
      "Rp 140 juta",
      "Rp 40 juta"
    ],
    "answer": 3,
    "explanation": "Ekuitas target = 70% × Rp 200 juta = Rp 140 juta. Laba ditahan hanya Rp 100 juta, sehingga kekurangan = Rp 40 juta. Dividen residual = max(0,100 - 140) = nol. Kekurangan harus didanai atau rencana investasi/target pendanaan dievaluasi. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-532 (PDF 569-574).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 527-532 (PDF 569-574).",
    "sourceAnchors": [
      "Kekurangan ekuitas"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm10-05",
    "tm": 10,
    "topic": "Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "skill": "Saham setelah buyback",
    "difficulty": "medium",
    "q": "Saham awal 100 juta lembar. Kas Rp 300 juta dipakai membeli kembali saham seharga Rp 30/lembar. Berapa saham yang tersisa? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 543-548 (PDF 585-590).",
    "options": [
      "90 juta lembar",
      "100 juta lembar",
      "70 juta lembar",
      "10 juta lembar"
    ],
    "answer": 0,
    "explanation": "Saham yang dibeli kembali = Rp 300 juta/(Rp 30/lembar) = 10 juta lembar. Saham tersisa = 100 - 10 = 90 juta lembar. Kas yang dibayar mengurangi aset dan nilai ekuitas; pengurangan jumlah saham sendiri tidak menciptakan nilai. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 543-548 (PDF 585-590).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 543-548 (PDF 585-590).",
    "sourceAnchors": [
      "Saham setelah buyback"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm10-06",
    "tm": 10,
    "topic": "Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "skill": "EPS setelah buyback",
    "difficulty": "advanced",
    "q": "Laba bersih tetap Rp 2 miliar; saham turun dari 100 juta menjadi 90 juta lembar. Abaikan perubahan bunga dan biaya peluang kas. Berapa EPS sesudahnya? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 544-546 (PDF 586-588).",
    "options": [
      "Rp 20,00/lembar",
      "Rp 22,22/lembar",
      "Rp 18,00/lembar",
      "Rp 25,00/lembar"
    ],
    "answer": 1,
    "explanation": "EPS baru = Rp 2.000.000.000/90.000.000 = Rp 22,222222/lembar, dibulatkan dua desimal. EPS lama = Rp 20/lembar. Perhitungan sengaja menahan laba tetap; pada kasus nyata laba dapat berubah karena hilangnya bunga kas atau tambahan biaya utang. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 544-546 (PDF 586-588).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 544-546 (PDF 586-588).",
    "sourceAnchors": [
      "EPS setelah buyback"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm10-07",
    "tm": 10,
    "topic": "Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "skill": "Nilai per lembar dan distribusi",
    "difficulty": "medium",
    "q": "Nilai ekuitas Rp 1 miliar, saham 20 juta, harga wajar Rp 50. Buyback Rp 200 juta pada harga wajar, tanpa pajak/biaya dan perubahan operasi. Berapa harga teoritis saham tersisa? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 544-548 (PDF 586-590).",
    "options": [
      "Rp 62,50/lembar",
      "Rp 40,00/lembar",
      "Rp 50,00/lembar",
      "Rp 55,00/lembar"
    ],
    "answer": 2,
    "explanation": "Saham dibeli = Rp 200 juta/Rp 50 = 4 juta; tersisa 16 juta. Ekuitas setelah kas keluar = Rp 800 juta. Harga = Rp 800 juta/16 juta = Rp 50. Pemegang saham menerima kas atau memiliki bagian lebih besar dari perusahaan yang kasnya berkurang; total kekayaan tidak bertambah secara mekanis. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 544-548 (PDF 586-590).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 544-548 (PDF 586-590).",
    "sourceAnchors": [
      "Nilai per lembar dan distribusi"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm10-08",
    "tm": 10,
    "topic": "Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "skill": "Stock split",
    "difficulty": "medium",
    "q": "Harga Rp 80 per lembar, saham 5 juta. Perusahaan melakukan split 2-untuk-1 tanpa perubahan nilai ekuitas. Berapa pasangan harga dan jumlah saham teoritis? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 541-543 (PDF 583-585).",
    "options": [
      "Rp 80/lembar dan 10 juta lembar",
      "Rp 40/lembar dan 2,5 juta lembar",
      "Rp 160/lembar dan 2,5 juta lembar",
      "Rp 40/lembar dan 10 juta lembar"
    ],
    "answer": 3,
    "explanation": "Split menggandakan jumlah saham menjadi 10 juta dan membagi harga teoritis menjadi Rp 40. Nilai ekuitas sebelum = 5 juta × Rp 80 = Rp 400 juta; sesudah = 10 juta × Rp 40 = Rp 400 juta. Tidak ada pembayaran kas atau kenaikan nilai hanya karena split. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 541-543 (PDF 583-585).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 541-543 (PDF 583-585).",
    "sourceAnchors": [
      "Stock split"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm10-09",
    "tm": 10,
    "topic": "Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "skill": "Dividen saham",
    "difficulty": "advanced",
    "q": "Harga sebelum pembagian Rp 60; stock dividend 20% menambah saham menjadi 1,20 kali. Nilai ekuitas tetap. Berapa harga teoritis sesudahnya? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 541-543 (PDF 583-585).",
    "options": [
      "Rp 50,00/lembar",
      "Rp 48,00/lembar",
      "Rp 72,00/lembar",
      "Rp 60,00/lembar"
    ],
    "answer": 0,
    "explanation": "Jumlah saham baru = 1,20N. Dengan ekuitas tetap, harga baru = 60/1,20 = Rp 50. Pemegang saham memiliki 20% lebih banyak lembar dengan nilai per lembar lebih kecil; nilai kepemilikan keseluruhan tetap pada asumsi soal. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 541-543 (PDF 583-585).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 541-543 (PDF 583-585).",
    "sourceAnchors": [
      "Dividen saham"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm10-10",
    "tm": 10,
    "topic": "Distributions to Shareholders: Dividen dan Pembelian Kembali Saham",
    "skill": "Sinyal dividen",
    "difficulty": "medium",
    "q": "Dividen naik di atas ekspektasi ketika rencana investasi belum diumumkan. Kesimpulan analitis paling tepat adalah? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 525-527 (PDF 567-569).",
    "options": [
      "Kenaikan dividen memastikan seluruh proyek memiliki NPV positif",
      "Pasar dapat membaca sinyal laba; arus kas tetap perlu diuji",
      "Kenaikan dividen memastikan WACC turun pada semua kondisi",
      "Pasar pasti menaikkan harga sesuai persentase kenaikan dividen"
    ],
    "answer": 1,
    "explanation": "Dividend signaling adalah dugaan pasar tentang informasi yang dimiliki manajemen. Harga juga dipengaruhi ekspektasi sebelumnya, keberlanjutan arus kas, dan peluang investasi. Kenaikan dividen tidak menjamin peningkatan laba atau nilai dalam persentase tertentu. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 525-527 (PDF 567-569).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 15, hal. cetak 525-527 (PDF 567-569).",
    "sourceAnchors": [
      "Sinyal dividen"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm11-01",
    "tm": 11,
    "topic": "Working Capital I: Siklus Kas, Anggaran Kas, dan Piutang",
    "skill": "Cash conversion cycle",
    "difficulty": "medium",
    "q": "DIO, umur persediaan, 60 hari; DSO, waktu penagihan, 45 hari; DPO, waktu pembayaran pemasok, 30 hari. Berapa cash conversion cycle? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 565-569 (PDF 607-611).",
    "options": [
      "135 hari",
      "45 hari",
      "75 hari",
      "105 hari"
    ],
    "answer": 2,
    "explanation": "CCC = DIO + DSO - DPO = 60 + 45 - 30 = 75 hari. Kredit pemasok menyediakan pendanaan selama DPO, sehingga dikurangkan. Siklus ini mengukur jeda kas operasi; hari kas diperlukan tidak sama dengan laba akuntansi. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 565-569 (PDF 607-611).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 565-569 (PDF 607-611).",
    "sourceAnchors": [
      "Cash conversion cycle"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm11-02",
    "tm": 11,
    "topic": "Working Capital I: Siklus Kas, Anggaran Kas, dan Piutang",
    "skill": "Umur persediaan",
    "difficulty": "medium",
    "q": "Persediaan rata-rata Rp 6 miliar, COGS atau harga pokok penjualan Rp 36,5 miliar setahun. Gunakan 365 hari. Berapa DIO? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 566-569 (PDF 608-611).",
    "options": [
      "36 hari",
      "45 hari",
      "90 hari",
      "60 hari"
    ],
    "answer": 3,
    "explanation": "COGS harian = Rp 36,5 miliar/365 = Rp 0,1 miliar per hari. DIO = persediaan rata-rata/COGS harian = 6/0,1 = 60 hari. Penjualan tidak menggantikan COGS sebagai penyebut umur persediaan dalam konvensi ini. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 566-569 (PDF 608-611).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 566-569 (PDF 608-611).",
    "sourceAnchors": [
      "Umur persediaan"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm11-03",
    "tm": 11,
    "topic": "Working Capital I: Siklus Kas, Anggaran Kas, dan Piutang",
    "skill": "Umur piutang",
    "difficulty": "advanced",
    "q": "Piutang rata-rata Rp 4,5 miliar, seluruh penjualan kredit Rp 36,5 miliar setahun. Gunakan 365 hari. Berapa DSO? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 566-569 (PDF 608-611). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 580-581 (PDF 622-623).",
    "options": [
      "45 hari",
      "60 hari",
      "30 hari",
      "73 hari"
    ],
    "answer": 0,
    "explanation": "Penjualan kredit harian = 36,5/365 = Rp 0,1 miliar. DSO = piutang rata-rata/penjualan kredit harian = 4,5/0,1 = 45 hari. Rasio memakai piutang dan penjualan kredit yang sebanding, serta periode tahunan yang konsisten. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 566-569 (PDF 608-611). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 580-581 (PDF 622-623).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 566-569 (PDF 608-611). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 580-581 (PDF 622-623).",
    "sourceAnchors": [
      "Umur piutang"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm11-04",
    "tm": 11,
    "topic": "Working Capital I: Siklus Kas, Anggaran Kas, dan Piutang",
    "skill": "Umur utang pemasok",
    "difficulty": "medium",
    "q": "Utang pemasok rata-rata Rp 3 miliar; pembelian kredit yang diberikan dalam soal Rp 36,5 miliar setahun. Gunakan 365 hari. Berapa DPO? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 566-569 (PDF 608-611).",
    "options": [
      "45 hari",
      "30 hari",
      "60 hari",
      "90 hari"
    ],
    "answer": 1,
    "explanation": "Pembelian kredit harian = 36,5/365 = Rp 0,1 miliar. DPO = utang pemasok rata-rata/pembelian kredit harian = 3/0,1 = 30 hari. Soal menyediakan pembelian; jika laporan hanya menyediakan COGS, penggunaan COGS perlu dinyatakan sebagai pendekatan. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 566-569 (PDF 608-611).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 566-569 (PDF 608-611).",
    "sourceAnchors": [
      "Umur utang pemasok"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm11-05",
    "tm": 11,
    "topic": "Working Capital I: Siklus Kas, Anggaran Kas, dan Piutang",
    "skill": "Anggaran kas dan pinjaman",
    "difficulty": "medium",
    "q": "Semua angka Rp juta: kas awal 20, penerimaan 80, pembayaran 105, saldo minimum 10. Berapa pinjaman baru untuk memenuhi minimum? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615).",
    "options": [
      "Rp 5 juta",
      "Rp 10 juta",
      "Rp 15 juta",
      "Rp 25 juta"
    ],
    "answer": 2,
    "explanation": "Kas sebelum pendanaan = 20 + 80 - 105 = minus Rp 5 juta. Agar saldo akhir Rp 10 juta, pinjaman = 10 - (-5) = Rp 15 juta. Saldo minimum adalah batas setelah pendanaan, sehingga kebutuhan bukan hanya defisit kas Rp 5 juta. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615).",
    "sourceAnchors": [
      "Anggaran kas dan pinjaman"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm11-06",
    "tm": 11,
    "topic": "Working Capital I: Siklus Kas, Anggaran Kas, dan Piutang",
    "skill": "Pelunasan surplus kas",
    "difficulty": "advanced",
    "q": "Semua angka Rp juta: kas awal 10, penerimaan 100, pembayaran operasi 80. Pinjaman lama 15 dilunasi penuh; tanpa bunga pada bulan ini. Berapa kas akhir? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615).",
    "options": [
      "Rp 30 juta",
      "Rp 10 juta",
      "Rp 25 juta",
      "Rp 15 juta"
    ],
    "answer": 3,
    "explanation": "Kas tersedia sebelum pelunasan = 10 + 100 - 80 = Rp 30 juta. Pelunasan utang Rp 15 juta merupakan arus kas pembiayaan; kas akhir = Rp 15 juta. Dengan saldo minimum Rp 10 juta, pelunasan penuh masih menyisakan kelebihan Rp 5 juta. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615).",
    "sourceAnchors": [
      "Pelunasan surplus kas"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm11-07",
    "tm": 11,
    "topic": "Working Capital I: Siklus Kas, Anggaran Kas, dan Piutang",
    "skill": "Kebijakan kredit inkremental",
    "difficulty": "medium",
    "q": "Tambahan penjualan Rp 3 miliar/tahun, margin kontribusi 30%, bad debt 2% dari tambahan penjualan, biaya penagihan Rp 50 juta/tahun. Tambahan investasi piutang yang sudah dihitung Rp 300 juta, biaya modal 10%. Berapa manfaat sebelum pajak setahun? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 578-581 (PDF 620-623).",
    "options": [
      "Rp 760 juta",
      "Rp 790 juta",
      "Rp 850 juta",
      "Rp 660 juta"
    ],
    "answer": 0,
    "explanation": "Tambahan kontribusi = 3 miliar × 30% = Rp 900 juta. Kerugian piutang = 3 miliar × 2% = Rp 60 juta. Biaya dana = investasi tambahan Rp 300 juta × 10% = Rp 30 juta. Manfaat bersih sebelum pajak = 900 - 60 - 50 - 30 = Rp 760 juta/tahun. Jangan mengurangkan seluruh piutang sebagai biaya satu tahun. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 578-581 (PDF 620-623).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 578-581 (PDF 620-623).",
    "sourceAnchors": [
      "Kebijakan kredit inkremental"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm11-08",
    "tm": 11,
    "topic": "Working Capital I: Siklus Kas, Anggaran Kas, dan Piutang",
    "skill": "Modal kerja bersih",
    "difficulty": "medium",
    "q": "Aset lancar Rp 2 miliar dan kewajiban lancar Rp 3 miliar. Berapa net working capital, modal kerja bersih, dan implikasi awalnya? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 559-565 (PDF 601-607).",
    "options": [
      "Plus Rp 1 miliar; seluruh kewajiban dapat dibayar tepat waktu",
      "Minus Rp 1 miliar; jadwal kas dan jatuh tempo perlu diperiksa",
      "Minus Rp 1 miliar; perusahaan pasti telah dinyatakan pailit",
      "Plus Rp 5 miliar; dana operasi tersedia tanpa batas tambahan"
    ],
    "answer": 1,
    "explanation": "NWC = aset lancar - kewajiban lancar = 2 - 3 = minus Rp 1 miliar. Angka negatif dapat menunjukkan ketergantungan pada pendanaan jangka pendek; sifat usaha, umur persediaan/piutang, arus kas, dan jatuh tempo tetap perlu dievaluasi. NWC bukan keputusan hukum pailit. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 559-565 (PDF 601-607).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 559-565 (PDF 601-607).",
    "sourceAnchors": [
      "Modal kerja bersih"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm12-01",
    "tm": 12,
    "topic": "Working Capital II: Persediaan dan Pendanaan Jangka Pendek",
    "skill": "Kredit dagang nominal",
    "difficulty": "medium",
    "q": "Syarat 2/10, net 30 berarti diskon 2% jika membayar hari 10 atau penuh hari 30. Berapa biaya nominal tahunan mengabaikan diskon, memakai 365 hari? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 581-584 (PDF 623-626).",
    "options": [
      "36,50% per tahun",
      "18,62% per tahun",
      "37,24% per tahun",
      "24,83% per tahun"
    ],
    "answer": 2,
    "explanation": "Dana yang dipinjam secara implisit Rp 98 untuk setiap tagihan Rp 100; biaya tambahan Rp 2 selama 20 hari. Biaya periodik = 2/98 = 2,040816%. Nominal tahunan = (2/98) × (365/20) = 37,244898%, dibulatkan 37,24%. Nominal belum memasukkan penggandaan bunga. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 581-584 (PDF 623-626).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 581-584 (PDF 623-626).",
    "sourceAnchors": [
      "Kredit dagang nominal"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm12-02",
    "tm": 12,
    "topic": "Working Capital II: Persediaan dan Pendanaan Jangka Pendek",
    "skill": "Kredit dagang efektif",
    "difficulty": "medium",
    "q": "Gunakan syarat 2/10, net 30 dan tahun 365 hari. Berapa effective annual rate, biaya efektif tahunan, jika periode diskon berulang? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 582-584 (PDF 624-626).",
    "options": [
      "37,24% per tahun",
      "36,50% per tahun",
      "20,41% per tahun",
      "44,59% per tahun"
    ],
    "answer": 3,
    "explanation": "Satu periode 20 hari berbiaya 2/98. EAR = (1 + 2/98)^(365/20) - 1 = sekitar 44,585%. Pembulatan dua desimal menghasilkan 44,59%. Efektif memasukkan penggandaan; nominal (2/98)(365/20) sebesar 37,24% memakai konvensi berbeda. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 582-584 (PDF 624-626).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 582-584 (PDF 624-626).",
    "sourceAnchors": [
      "Kredit dagang efektif"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm12-03",
    "tm": 12,
    "topic": "Working Capital II: Persediaan dan Pendanaan Jangka Pendek",
    "skill": "Pilih sumber pendanaan",
    "difficulty": "advanced",
    "q": "Syarat kredit dagang 2/10, net 30 memiliki EAR 44,59%. Pinjaman bank EAR 12%, cukup tersedia tanpa biaya lain. Pilihan termurah adalah? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 581-587 (PDF 623-629).",
    "options": [
      "Meminjam dari bank untuk mengambil diskon pemasok",
      "Menolak diskon karena bunga bank selalu menambah biaya",
      "Memilih kredit dagang karena jatuh temponya lebih panjang",
      "Kedua sumber memiliki biaya sama karena tenornya berbeda"
    ],
    "answer": 0,
    "explanation": "Bandingkan pada ukuran biaya efektif tahunan yang sama: bank 12% lebih rendah daripada kehilangan diskon 44,59%. Dana bank dipakai membayar hari 10 sehingga diskon diperoleh. Kesimpulan memerlukan dana benar-benar tersedia dan tidak ada biaya tambahan atau batas kredit yang diabaikan. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 581-587 (PDF 623-629).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 581-587 (PDF 623-629).",
    "sourceAnchors": [
      "Pilih sumber pendanaan"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm12-04",
    "tm": 12,
    "topic": "Working Capital II: Persediaan dan Pendanaan Jangka Pendek",
    "skill": "Bunga sederhana",
    "difficulty": "medium",
    "q": "Pinjaman Rp 100 juta untuk satu tahun, bunga 12%, bunga dibayar bersama pokok pada akhir tahun, tanpa biaya. Berapa biaya efektif tahun itu? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629).",
    "options": [
      "13,64%",
      "12,00%",
      "15,00%",
      "10,71%"
    ],
    "answer": 1,
    "explanation": "Kas diterima saat awal Rp 100 juta; bunga setahun Rp 12 juta. Biaya = 12/100 = 12%. Karena hanya ada satu pembayaran bunga di akhir satu tahun dan tidak ada potongan awal, biaya efektif sama dengan tarif tahunan. Jadwal bunga bulanan akan menghasilkan EAR berbeda. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629).",
    "sourceAnchors": [
      "Bunga sederhana"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm12-05",
    "tm": 12,
    "topic": "Working Capital II: Persediaan dan Pendanaan Jangka Pendek",
    "skill": "Saldo kompensasi",
    "difficulty": "medium",
    "q": "Pinjaman satu tahun Rp 100 juta berbunga 12% dibayar akhir tahun. Bank menahan saldo kompensasi tambahan 20% tanpa bunga yang dikembalikan saat pelunasan. Berapa biaya atas kas yang dapat dipakai? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629). Latihan pengembangan arus kas berdasarkan syarat buatan pada soal; discount interest dan saldo kompensasi tidak diklaim sebagai contoh Bab 16. Web Appendix 16B belum tersedia.",
    "options": [
      "12,00%",
      "13,64%",
      "15,00%",
      "9,60%"
    ],
    "answer": 2,
    "explanation": "Kas bebas dipakai = 100 - 20 = Rp 80 juta; bunga = Rp 12 juta. Pada akhir tahun saldo Rp 20 juta dilepas dan pokok/bunga dibayar, sehingga pengeluaran bersih = Rp 92 juta. Biaya tahunan = 12/80 = 15%. Ini pengembangan arus kas biaya pinjaman berdasarkan syarat yang diberikan. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629). Latihan pengembangan arus kas berdasarkan syarat buatan pada soal; discount interest dan saldo kompensasi tidak diklaim sebagai contoh Bab 16. Web Appendix 16B belum tersedia.",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629).",
    "sourceAnchors": [
      "Saldo kompensasi"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm12-06",
    "tm": 12,
    "topic": "Working Capital II: Persediaan dan Pendanaan Jangka Pendek",
    "skill": "Bunga dipotong awal",
    "difficulty": "advanced",
    "q": "Pinjaman satu tahun Rp 100 juta, bunga 12% dari nominal dipotong langsung saat pencairan; pokok dibayar akhir tahun. Berapa biaya efektif? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629). Latihan pengembangan arus kas berdasarkan syarat buatan pada soal; discount interest dan saldo kompensasi tidak diklaim sebagai contoh Bab 16. Web Appendix 16B belum tersedia.",
    "options": [
      "12,00%",
      "15,00%",
      "10,71%",
      "13,64%"
    ],
    "answer": 3,
    "explanation": "Bunga awal = Rp 12 juta; kas diterima = 100 - 12 = Rp 88 juta. Akhir tahun membayar Rp 100 juta. Biaya efektif satu tahun = (100/88) - 1 = 13,636364%, dibulatkan 13,64%. Penyebut memakai kas diterima, bukan nominal kontrak. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629). Latihan pengembangan arus kas berdasarkan syarat buatan pada soal; discount interest dan saldo kompensasi tidak diklaim sebagai contoh Bab 16. Web Appendix 16B belum tersedia.",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629).",
    "sourceAnchors": [
      "Bunga dipotong awal"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm12-07",
    "tm": 12,
    "topic": "Working Capital II: Persediaan dan Pendanaan Jangka Pendek",
    "skill": "Potongan dan saldo tertahan",
    "difficulty": "medium",
    "q": "Nominal pinjaman Rp 100 juta satu tahun. Bunga 12% dipotong awal dan saldo kompensasi tambahan 10% ditahan tanpa bunga sampai pelunasan. Berapa biaya efektif? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629). Latihan pengembangan arus kas berdasarkan syarat buatan pada soal; discount interest dan saldo kompensasi tidak diklaim sebagai contoh Bab 16. Web Appendix 16B belum tersedia.",
    "options": [
      "15,38%",
      "12,00%",
      "13,64%",
      "13,33%"
    ],
    "answer": 0,
    "explanation": "Kas awal tersedia = 100 - 12 - 10 = Rp 78 juta. Akhir tahun pokok 100 dibayar dan saldo tertahan 10 kembali, pengeluaran bersih = Rp 90 juta. Biaya = 90/78 - 1 = 12/78 = 15,384615%, dibulatkan 15,38%. Syarat saldo tambahan dinyatakan eksplisit agar tidak dihitung ganda. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629). Latihan pengembangan arus kas berdasarkan syarat buatan pada soal; discount interest dan saldo kompensasi tidak diklaim sebagai contoh Bab 16. Web Appendix 16B belum tersedia.",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 586-587 (PDF 628-629).",
    "sourceAnchors": [
      "Potongan dan saldo tertahan"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm12-08",
    "tm": 12,
    "topic": "Working Capital II: Persediaan dan Pendanaan Jangka Pendek",
    "skill": "Biaya persediaan",
    "difficulty": "medium",
    "q": "Rata-rata persediaan turun dari Rp 800 juta menjadi Rp 600 juta. Tarif biaya penyimpanan dan dana yang diberikan 20% per tahun, tanpa kehilangan penjualan. Berapa penghematan setahun? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-578 (PDF 619-620).",
    "options": [
      "Rp 160 juta",
      "Rp 40 juta",
      "Rp 120 juta",
      "Rp 200 juta"
    ],
    "answer": 1,
    "explanation": "Penurunan rata-rata persediaan = Rp 200 juta. Penghematan biaya = Rp 200 juta × 20% = Rp 40 juta/tahun. Penurunan persediaan Rp 200 juta adalah pelepasan investasi, berbeda dari penghematan biaya tahunan. Jika persediaan terlalu rendah, biaya kekurangan stok dan hilangnya penjualan harus ditambahkan. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-578 (PDF 619-620).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 577-578 (PDF 619-620).",
    "sourceAnchors": [
      "Biaya persediaan"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm13-01",
    "tm": 13,
    "topic": "Multinational Financial Management: Kurs dan Keuangan Multinasional",
    "skill": "Kuotasi IDR per USD",
    "difficulty": "medium",
    "q": "Utang dagang USD100.000; kurs IDR16.000 per USD. Berapa nilai rupiah untuk melunasi pada kurs itu? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-639 (PDF 678-681).",
    "options": [
      "Rp 1.000 juta",
      "Rp 625 juta",
      "Rp 1.600 juta",
      "Rp 16 juta"
    ],
    "answer": 2,
    "explanation": "Kuotasi IDR/USD adalah rupiah untuk satu dolar. Nilai rupiah = USD100.000 × Rp 16.000/USD = Rp 1.600.000.000 atau Rp 1.600 juta. Mengalikan menghapus satuan USD; membagi dolar dengan kurs ini memakai arah yang salah. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-639 (PDF 678-681).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-639 (PDF 678-681).",
    "sourceAnchors": [
      "Kuotasi IDR per USD"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm13-02",
    "tm": 13,
    "topic": "Multinational Financial Management: Kurs dan Keuangan Multinasional",
    "skill": "Cross rate",
    "difficulty": "medium",
    "q": "Kurs IDR16.000 per USD dan JPY160 per USD. Berapa IDR per JPY? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-638 (PDF 678-680).",
    "options": [
      "Rp 10/JPY",
      "Rp 160/JPY",
      "Rp 1.000/JPY",
      "Rp 100/JPY"
    ],
    "answer": 3,
    "explanation": "Kurs silang = (IDR/USD)/(JPY/USD) = 16.000/160 = IDR100/JPY. USD saling menghilangkan. Satu yen berharga Rp 100; JPY100 setara Rp 10.000 pada kuotasi tersebut, tanpa spread atau biaya. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-638 (PDF 678-680).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 636-638 (PDF 678-680).",
    "sourceAnchors": [
      "Cross rate"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm13-03",
    "tm": 13,
    "topic": "Multinational Financial Management: Kurs dan Keuangan Multinasional",
    "skill": "IRP tahunan",
    "difficulty": "advanced",
    "q": "Spot IDR16.000/USD; bunga IDR 6% dan USD 4% untuk satu tahun. Berdasarkan covered interest parity, berapa kurs forward IDR/USD? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 640-642 (PDF 682-684).",
    "options": [
      "Rp 16.307,69/USD",
      "Rp 15.698,11/USD",
      "Rp 16.320,00/USD",
      "Rp 16.000,00/USD"
    ],
    "answer": 0,
    "explanation": "Forward = spot × (1 + bunga domestik)/(1 + bunga asing) = 16.000 × 1,06/1,04 = 16.307,692307 IDR/USD. Dibulatkan dua desimal menjadi Rp 16.307,69/USD. Arah kuotasi wajib disebut; bunga domestik lebih tinggi membuat satu USD lebih mahal pada forward paritas. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 640-642 (PDF 682-684).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 640-642 (PDF 682-684).",
    "sourceAnchors": [
      "IRP tahunan"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm13-04",
    "tm": 13,
    "topic": "Multinational Financial Management: Kurs dan Keuangan Multinasional",
    "skill": "IRP enam bulan",
    "difficulty": "medium",
    "q": "Spot IDR16.000/USD. Bunga tahunan sederhana IDR 6%, USD 4%. Untuk enam bulan gunakan 0,5 tahun tanpa biaya. Berapa forward paritas? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 640-642 (PDF 682-684).",
    "options": [
      "Rp 16.307,69/USD",
      "Rp 16.156,86/USD",
      "Rp 15.844,66/USD",
      "Rp 16.160,00/USD"
    ],
    "answer": 1,
    "explanation": "Konversi tenor: bunga IDR enam bulan = 6% × 0,5 = 3%; USD = 4% × 0,5 = 2%. F = 16.000 × 1,03/1,02 = 16.156,862745 IDR/USD. Bunga yang dipakai harus sesuai tenor kontrak; bunga setahun akan menghasilkan angka terlalu jauh dari spot. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 640-642 (PDF 682-684).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 640-642 (PDF 682-684).",
    "sourceAnchors": [
      "IRP enam bulan"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm13-05",
    "tm": 13,
    "topic": "Multinational Financial Management: Kurs dan Keuangan Multinasional",
    "skill": "PPP relatif",
    "difficulty": "medium",
    "q": "Spot IDR16.000/USD; inflasi IDR 8% dan USD 3% untuk satu tahun. Dengan model purchasing power parity relatif, berapa kurs proyeksi? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 642-646 (PDF 684-688).",
    "options": [
      "Rp 15.259,26/USD",
      "Rp 16.800,00/USD",
      "Rp 16.776,70/USD",
      "Rp 16.307,69/USD"
    ],
    "answer": 2,
    "explanation": "PPP relatif = 16.000 × (1 + 8%)/(1 + 3%) = 16.776,699029 IDR/USD. Pembulatan dua desimal: Rp 16.776,70/USD. Selisih inflasi 5% memberi pendekatan Rp 16.800, tetapi soal meminta rasio tepat. PPP adalah model proyeksi yang dapat menyimpang dari kurs aktual. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 642-646 (PDF 684-688). Persamaan proyeksi PPP relatif di sini adalah turunan model dengan asumsi harga sebanding dan inflasi yang dinyatakan, bukan ramalan kurs pasti.",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 642-646 (PDF 684-688).",
    "sourceAnchors": [
      "PPP relatif"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm13-06",
    "tm": 13,
    "topic": "Multinational Financial Management: Kurs dan Keuangan Multinasional",
    "skill": "Forward utang valas",
    "difficulty": "advanced",
    "q": "Utang USD100.000 dikunci pada forward IDR16.300/USD. Saat jatuh tempo spot IDR17.000/USD. Tanpa biaya, berapa penghematan rupiah relatif terhadap tanpa hedge? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 638-642 (PDF 680-684).",
    "options": [
      "Rp 700 juta",
      "Rp 30 juta",
      "Rp 100 juta",
      "Rp 70 juta"
    ],
    "answer": 3,
    "explanation": "Dengan forward membayar 100.000 × 16.300 = Rp 1.630 juta; tanpa hedge pada spot membayar Rp 1.700 juta. Selisih = Rp 70 juta. Hedge, lindung nilai, mengunci biaya: jika spot justru lebih rendah, kontrak dapat menghasilkan biaya peluang, sehingga hasil positif ini bukan jaminan keuntungan hedge. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 638-642 (PDF 680-684).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 638-642 (PDF 680-684).",
    "sourceAnchors": [
      "Forward utang valas"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm13-07",
    "tm": 13,
    "topic": "Multinational Financial Management: Kurs dan Keuangan Multinasional",
    "skill": "Forward piutang valas",
    "difficulty": "medium",
    "q": "Piutang EUR50.000 dijual forward IDR18.000/EUR. Spot saat penerimaan IDR17.000/EUR. Berapa tambahan penerimaan dibanding tanpa hedge, tanpa biaya? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 638-642 (PDF 680-684).",
    "options": [
      "Rp 50 juta",
      "Rp 900 juta",
      "Rp 850 juta",
      "Rp 100 juta"
    ],
    "answer": 0,
    "explanation": "Penerimaan terkunci = 50.000 × 18.000 = Rp 900 juta; penerimaan spot = Rp 850 juta. Selisih = Rp 50 juta. Eksportir menjual valas forward, sedangkan importir dengan utang valas membeli valas forward; arah transaksi mengikuti apakah ada piutang atau kewajiban. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 638-642 (PDF 680-684).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 638-642 (PDF 680-684).",
    "sourceAnchors": [
      "Forward piutang valas"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm13-08",
    "tm": 13,
    "topic": "Multinational Financial Management: Kurs dan Keuangan Multinasional",
    "skill": "NPV multinasional",
    "difficulty": "medium",
    "q": "Investasi awal Rp 150 juta. Arus kas satu tahun USD10.000; proyeksi kurs akhir IDR17.000/USD dan tingkat diskonto IDR 10% yang sesuai risiko. Tidak ada arus kas lain. Berapa NPV rupiah? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 652-655 (PDF 694-697).",
    "options": [
      "Rp 20,00 juta",
      "Rp 4,55 juta",
      "Rp 145,45 juta",
      "Minus Rp 4,55 juta"
    ],
    "answer": 1,
    "explanation": "Kas tahun pertama dalam rupiah = 10.000 × 17.000 = Rp 170 juta. PV = 170/1,10 = Rp 154,545455 juta. NPV = 154,545455 - 150 = Rp 4,545455 juta, dibulatkan Rp 4,55 juta. Konversikan arus kas ke IDR sebelum menggunakan tingkat diskonto IDR; jangan mencampur suku bunga USD dan kas rupiah. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 652-655 (PDF 694-697).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 18, hal. cetak 652-655 (PDF 694-697).",
    "sourceAnchors": [
      "NPV multinasional"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm14-01",
    "tm": 14,
    "topic": "Mergers and Acquisitions: Valuasi dan Keputusan Akuisisi",
    "skill": "Sinergi dan nilai gabungan",
    "difficulty": "medium",
    "q": "Nilai standalone A Rp 500 miliar, B Rp 300 miliar; PV sinergi operasi Rp 80 miliar, biaya integrasi nol. Berapa nilai gabungan? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 742-744 (PDF 784-786).",
    "options": [
      "Rp 800 miliar",
      "Rp 580 miliar",
      "Rp 880 miliar",
      "Rp 920 miliar"
    ],
    "answer": 2,
    "explanation": "Nilai gabungan = nilai A + nilai B + PV sinergi = 500 + 300 + 80 = Rp 880 miliar. Sinergi adalah tambahan nilai dari penggabungan relatif terhadap operasi terpisah. Nilai ini belum membagi manfaat antara pemegang saham target dan pengakuisisi. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 742-744 (PDF 784-786).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 742-744 (PDF 784-786).",
    "sourceAnchors": [
      "Sinergi dan nilai gabungan"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm14-02",
    "tm": 14,
    "topic": "Mergers and Acquisitions: Valuasi dan Keputusan Akuisisi",
    "skill": "NPV pengakuisisi",
    "difficulty": "medium",
    "q": "PV sinergi Rp 80 miliar, premium di atas nilai standalone target Rp 40 miliar, biaya integrasi saat ini Rp 10 miliar. Berapa NPV bagi pengakuisisi? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795).",
    "options": [
      "Rp 80 miliar",
      "Rp 40 miliar",
      "Rp 50 miliar",
      "Rp 30 miliar"
    ],
    "answer": 3,
    "explanation": "NPV pengakuisisi = PV sinergi - premium - biaya integrasi = 80 - 40 - 10 = Rp 30 miliar. Premium mengalihkan sebagian manfaat ke penjual target. Biaya integrasi merupakan penggunaan kas dan harus masuk evaluasi walaupun harga pembelian terlihat wajar. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795).",
    "sourceAnchors": [
      "NPV pengakuisisi"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm14-03",
    "tm": 14,
    "topic": "Mergers and Acquisitions: Valuasi dan Keputusan Akuisisi",
    "skill": "Harga penawaran maksimum",
    "difficulty": "advanced",
    "q": "Target bernilai standalone Rp 300 miliar. PV sinergi Rp 80 miliar dan biaya integrasi Rp 10 miliar. Berapa maksimum harga tunai agar NPV pengakuisisi tidak negatif? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795).",
    "options": [
      "Rp 370 miliar",
      "Rp 380 miliar",
      "Rp 300 miliar",
      "Rp 390 miliar"
    ],
    "answer": 0,
    "explanation": "Nilai target bagi pengakuisisi setelah biaya = 300 + 80 - 10 = Rp 370 miliar. Pada harga itu NPV nol; harga lebih rendah memberi NPV positif dan lebih tinggi menghancurkan nilai menurut asumsi. Jangan menambahkan sinergi lagi jika sudah tertanam dalam proyeksi kas target. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795).",
    "sourceAnchors": [
      "Harga penawaran maksimum"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm14-04",
    "tm": 14,
    "topic": "Mergers and Acquisitions: Valuasi dan Keputusan Akuisisi",
    "skill": "Nilai operasi ke ekuitas",
    "difficulty": "medium",
    "q": "FCF operasi Rp 20 miliar pada akhir masing-masing tahun 1-3; terminal value tahun 3 Rp 200 miliar di luar FCF tahun 3. WACC 10%, utang Rp 60 miliar dan kas nonoperasi Rp 10 miliar. Berapa nilai ekuitas target? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-752 (PDF 790-794).",
    "options": [
      "Rp 200 miliar",
      "Rp 150 miliar",
      "Rp 140 miliar",
      "Rp 260 miliar"
    ],
    "answer": 1,
    "explanation": "PV FCF = 20/1,1 + 20/1,1^2 + 20/1,1^3 = Rp 49,73704 miliar. PV terminal = 200/1,1^3 = Rp 150,26296 miliar. Nilai operasi Rp 200 miliar; ekuitas = operasi - utang + kas nonoperasi = 200 - 60 + 10 = Rp 150 miliar. FCF operasi didiskonto WACC; arus kas ekuitas memakai biaya ekuitas. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-752 (PDF 790-794).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-752 (PDF 790-794).",
    "sourceAnchors": [
      "Nilai operasi ke ekuitas"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm14-05",
    "tm": 14,
    "topic": "Mergers and Acquisitions: Valuasi dan Keputusan Akuisisi",
    "skill": "Terminal value",
    "difficulty": "medium",
    "q": "FCF operasi tahun 3 Rp 30 miliar; tumbuh tetap 2% sesudahnya. WACC 12%, pertumbuhan lebih kecil dari diskonto. Berapa terminal value pada akhir tahun 3? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 750-752 (PDF 792-794).",
    "options": [
      "Rp 300 miliar",
      "Rp 250 miliar",
      "Rp 306 miliar",
      "Rp 255 miliar"
    ],
    "answer": 2,
    "explanation": "FCF tahun 4 = 30 × 1,02 = Rp 30,6 miliar. TV pada akhir tahun 3 = FCF4/(WACC - g) = 30,6/(0,12 - 0,02) = Rp 306 miliar. Untuk nilai hari ini, TV masih harus didiskonto tiga tahun. Memakai FCF3 langsung mengabaikan satu tahun pertumbuhan. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 750-752 (PDF 792-794).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 750-752 (PDF 792-794).",
    "sourceAnchors": [
      "Terminal value"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm14-06",
    "tm": 14,
    "topic": "Mergers and Acquisitions: Valuasi dan Keputusan Akuisisi",
    "skill": "Pembayaran dengan saham",
    "difficulty": "advanced",
    "q": "Target memiliki 5 juta saham dengan harga standalone Rp 18/lembar. Pengakuisisi menawarkan 2 juta sahamnya yang bernilai Rp 50/lembar. Berapa premium total berdasarkan harga yang diberikan? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 751-757 (PDF 793-799).",
    "options": [
      "Rp 100 juta",
      "Rp 90 juta",
      "Rp 20 juta",
      "Rp 10 juta"
    ],
    "answer": 3,
    "explanation": "Nilai penawaran = 2 juta × Rp 50 = Rp 100 juta. Nilai standalone target = 5 juta × Rp 18 = Rp 90 juta. Premium = Rp 10 juta, setara Rp 2 per saham target. Nilai penawaran saham bisa berubah jika harga pengakuisisi berubah; angka soal adalah asumsi tanggal penawaran. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 751-757 (PDF 793-799).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 751-757 (PDF 793-799).",
    "sourceAnchors": [
      "Pembayaran dengan saham"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm14-07",
    "tm": 14,
    "topic": "Mergers and Acquisitions: Valuasi dan Keputusan Akuisisi",
    "skill": "EPS gabungan",
    "difficulty": "medium",
    "q": "Laba bersih gabungan sesudah penyesuaian Rp 30 juta; saham pengakuisisi awal 10 juta dan 2 juta saham baru untuk pembayaran akuisisi. Berapa EPS gabungan? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 751-757 (PDF 793-799).",
    "options": [
      "Rp 2,50/lembar",
      "Rp 3,00/lembar",
      "Rp 2,00/lembar",
      "Rp 2,25/lembar"
    ],
    "answer": 0,
    "explanation": "Saham gabungan = 10 + 2 = 12 juta lembar. EPS = Rp 30 juta/12 juta = Rp 2,50/lembar. EPS adalah indikator akuntansi; akuisisi dengan EPS naik tetap dapat memiliki NPV negatif jika premium dan risiko terlalu besar. Nilai kas dan biaya modal perlu diperiksa secara terpisah. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 751-757 (PDF 793-799).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 751-757 (PDF 793-799).",
    "sourceAnchors": [
      "EPS gabungan"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm14-08",
    "tm": 14,
    "topic": "Mergers and Acquisitions: Valuasi dan Keputusan Akuisisi",
    "skill": "Akuisisi bernilai negatif",
    "difficulty": "medium",
    "q": "Nilai standalone target Rp 100 juta, harga beli Rp 110 juta, PV sinergi Rp 8 juta, biaya integrasi Rp 3 juta. Berapa NPV pengakuisisi? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795).",
    "options": [
      "Plus Rp 5 juta",
      "Minus Rp 5 juta",
      "Plus Rp 8 juta",
      "Minus Rp 2 juta"
    ],
    "answer": 1,
    "explanation": "NPV = nilai target + sinergi - biaya integrasi - harga = 100 + 8 - 3 - 110 = minus Rp 5 juta. Secara finansial tawaran ini ditolak atau harga diturunkan. Kenaikan pendapatan konsolidasi tidak mengimbangi otomatis pembayaran di atas tambahan nilai yang diterima. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 21, hal. cetak 748-753 (PDF 790-795).",
    "sourceAnchors": [
      "Akuisisi bernilai negatif"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm15-01",
    "tm": 15,
    "topic": "Corporate Failure: Kesulitan Keuangan dan Pemulihan",
    "skill": "Altman original dan klasifikasi",
    "difficulty": "medium",
    "q": "Manufaktur publik tanpa aset takberwujud: X1=0,10; X2=0,20; X3=0,08; X4=0,50; X5=1,20. Gunakan model original Z dan zona 1,81-2,99. Berapa hasil dan klasifikasinya? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7.",
    "options": [
      "Z=1,864; zona distress",
      "Z=2,164; zona aman",
      "Z=2,164; zona abu-abu",
      "Z=3,164; zona aman"
    ],
    "answer": 2,
    "explanation": "Z = 1,2(0,10) + 1,4(0,20) + 3,3(0,08) + 0,6(0,50) + 1,0(1,20) = 0,12 + 0,28 + 0,264 + 0,30 + 1,20 = 2,164. Skor tidak bersatuan dan berada di zona abu-abu. Z merupakan indikator model, tidak langsung menjadi persentase peluang bangkrut atau keputusan hukum. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7.",
    "sourceRef": "Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7.",
    "sourceAnchors": [
      "Altman original dan klasifikasi"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm15-02",
    "tm": 15,
    "topic": "Corporate Failure: Kesulitan Keuangan dan Pemulihan",
    "skill": "Penyebut X4",
    "difficulty": "medium",
    "q": "Dalam model original Z, nilai pasar seluruh ekuitas Rp 150 miliar, total kewajiban buku Rp 300 miliar, utang berbunga Rp 100 miliar. Berapa X4? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7.",
    "options": [
      "1,50 kali",
      "2,00 kali",
      "0,3333 kali",
      "0,50 kali"
    ],
    "answer": 3,
    "explanation": "X4 original = nilai pasar ekuitas/nilai buku total kewajiban = 150/300 = 0,50 kali. Kewajiban lancar dan jangka panjang masuk penyebut; utang berbunga saja Rp 100 miliar terlalu sempit. Ekuitas buku tidak menggantikan nilai pasar dalam model original. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7.",
    "sourceRef": "Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7.",
    "sourceAnchors": [
      "Penyebut X4"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm15-03",
    "tm": 15,
    "topic": "Corporate Failure: Kesulitan Keuangan dan Pemulihan",
    "skill": "Sensitivitas skor distress",
    "difficulty": "advanced",
    "q": "Aset berwujud Rp 100 miliar; EBIT turun dari Rp 8 menjadi Rp 2 miliar. Semua rasio lain pada model original Z tetap. Berapa perubahan skor Z? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7.",
    "options": [
      "Turun 0,198 poin",
      "Turun 0,060 poin",
      "Naik 0,198 poin",
      "Turun 1,980 poin"
    ],
    "answer": 0,
    "explanation": "X3 awal = 8/100 = 0,08; akhir = 2/100 = 0,02. Perubahan kontribusi EBIT = 3,3 × (0,02 - 0,08) = -0,198. Skor turun 0,198 poin. Skor awal dan faktor lain tetap diperlukan untuk menentukan apakah zona klasifikasi berubah. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7.",
    "sourceRef": "Rujukan: Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7.",
    "sourceAnchors": [
      "Sensitivitas skor distress"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm15-04",
    "tm": 15,
    "topic": "Corporate Failure: Kesulitan Keuangan dan Pemulihan",
    "skill": "Pilihan pemulihan ekonomi",
    "difficulty": "medium",
    "q": "PV usaha setelah reorganisasi Rp 120 miliar, biaya proses Rp 15 miliar. Nilai jual aset Rp 95 miliar, biaya likuidasi Rp 8 miliar. Dengan asumsi nilai dan risiko sudah sebanding, selisih nilai bersihnya? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
    "options": [
      "Likuidasi lebih tinggi Rp 18 miliar",
      "Reorganisasi lebih tinggi Rp 18 miliar",
      "Reorganisasi lebih tinggi Rp 25 miliar",
      "Kedua pilihan bernilai Rp 105 miliar"
    ],
    "answer": 1,
    "explanation": "Nilai bersih reorganisasi = 120 - 15 = Rp 105 miliar; likuidasi = 95 - 8 = Rp 87 miliar. Selisih = Rp 18 miliar mendukung keberlanjutan secara ekonomi pada asumsi soal. Kelangsungan kas, kesepakatan kreditur, dan prosedur yurisdiksi perlu dinilai; angka ini tidak menentukan putusan pengadilan. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
    "sourceAnchors": [
      "Pilihan pemulihan ekonomi"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm15-05",
    "tm": 15,
    "topic": "Corporate Failure: Kesulitan Keuangan dan Pemulihan",
    "skill": "Pemilihan model risiko",
    "difficulty": "medium",
    "q": "Analis menghitung bank privat memakai Z manufaktur publik dengan nilai pasar ekuitas yang tidak tersedia. Tindakan yang paling tepat? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Altman (2002), halaman PDF 9, 12, 15-18, bagian 5, 7 dan 9.",
    "options": [
      "Isi ekuitas buku dan pertahankan koefisien original tanpa evaluasi",
      "Isi harga saham nol agar model selalu menghasilkan skor konservatif",
      "Periksa populasi dan varian model; cari indikator sektor yang sesuai",
      "Pakai skor sebagai probabilitas default tanpa pemetaan tambahan"
    ],
    "answer": 2,
    "explanation": "Model original dikembangkan dari manufaktur publik. Varian Z-prime mengubah variabel ekuitas sekaligus koefisien; varian lain mengubah rasio, koefisien, serta batas klasifikasi. Perubahan satu input tanpa validasi model menghasilkan klasifikasi tidak sebanding. Untuk lembaga keuangan, struktur neraca dan risiko sektornya harus diperhatikan. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Altman (2002), halaman PDF 9, 12, 15-18, bagian 5, 7 dan 9.",
    "sourceRef": "Rujukan: Altman (2002), halaman PDF 9, 12, 15-18, bagian 5, 7 dan 9.",
    "sourceAnchors": [
      "Pemilihan model risiko"
    ]
  },
  {
    "id": "mnk102-uas-v2-tm15-06",
    "tm": 15,
    "topic": "Corporate Failure: Kesulitan Keuangan dan Pemulihan",
    "skill": "Likuiditas dan solvabilitas",
    "difficulty": "advanced",
    "q": "Kas awal Rp 10 juta, penerimaan bulan ini Rp 40 juta, pembayaran wajib Rp 65 juta. Aset Rp 200 juta dan kewajiban Rp 175 juta. Berapa defisit kas sebelum pendanaan dan kesimpulan awal? Skenario latihan: semua angka, tarif pajak, bunga, dan kurs adalah asumsi soal, bukan data pasar atau tarif hukum terkini. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
    "options": [
      "Defisit Rp 25 juta; ekuitas buku sudah negatif Rp 15 juta",
      "Surplus Rp 15 juta; seluruh kewajiban otomatis dapat dibayar",
      "Defisit Rp 15 juta; putusan pailit otomatis sudah terjadi",
      "Defisit Rp 15 juta; ekuitas buku masih Rp 25 juta"
    ],
    "answer": 3,
    "explanation": "Kas akhir sebelum pendanaan = 10 + 40 - 65 = minus Rp 15 juta. Ekuitas buku = 200 - 175 = Rp 25 juta. Kekurangan kas jangka pendek dapat terjadi saat ekuitas buku positif; periksa jatuh tempo, piutang tertagih, dan akses dana. Distress kas, insolvensi ekonomi, dan status hukum pailit mempunyai ukuran berbeda. Gunakan satuan dan periode yang tertulis; simpan presisi selama perhitungan, lalu bulatkan hasil akhir sesuai pilihan. Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
    "sourceRef": "Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 16, hal. cetak 570-573 (PDF 612-615). Rujukan: Brigham & Houston, Fundamentals of Financial Management 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304).",
    "sourceAnchors": [
      "Likuiditas dan solvabilitas"
    ]
  }
];
export const MNK201_QUIZ: QuizQuestion[] = [...MNK201_QUIZ_UTS, ...MNK201_REVIEW_UTS_QUIZ, ...MNK201_QUIZ_UAS];
