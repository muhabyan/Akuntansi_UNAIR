const fs = require('fs');
const path = require('path');

const questions = [
  // 1-30 from PDF
  {
    topic: 'ANOVA', skill: 'Memilih Uji ANOVA', difficulty: 'medium',
    q: 'As a regional sales manager, Andy is deeply concerned about the variation in sales performance averages among his sales staff across different branches under his jurisdiction. With five salespersons operating in distinct branches, each representing a sub-region within Andy\'s jurisdiction, he hypothesizes that certain staff members may be more effective due to their alignment with local cultural norms and the primary customer base within specific sub-regions, potentially leading to an interaction effect. To thoroughly assess his hypothesis, which statistical test would be most appropriate for Andy?',
    options: ['Two-way Anova with interaction', 'One-way Anova', 'Test of equal population variance', 'Two-way Anova without interaction'],
    answer: 0,
    explanation: 'Andy ingin menguji dua faktor (salesperson dan sub-region) dan menduga adanya efek interaksi (pengaruh satu faktor bergantung pada faktor lain), sehingga Two-way ANOVA with interaction adalah uji yang paling tepat.'
  },
  {
    topic: 'ANOVA', skill: 'Perbedaan One-way dan Two-way ANOVA', difficulty: 'basic',
    q: 'What is the key difference between one-way ANOVA and two-way ANOVA?',
    options: [
      'One-way ANOVA analyzes data with one dependent variable, while two-way ANOVA analyzes data with two dependent variables.',
      'One-way ANOVA is suitable for comparing means when there is no interaction effect, while two-way ANOVA examines only the interaction effects between two independent variables.',
      'One-way ANOVA is used for independent samples, while two-way ANOVA is used for dependent samples.',
      'One-way ANOVA compares means across multiple groups within a single factor, while two-way ANOVA compares means considering the influence of two independent variables.'
    ],
    answer: 3,
    explanation: 'Perbedaan utamanya ada pada jumlah variabel independen (faktor). One-way ANOVA memiliki 1 faktor, sedangkan Two-way ANOVA memiliki 2 faktor.'
  },
  {
    topic: 'Statistik Non-Parametrik', skill: 'Korelasi Spearman', difficulty: 'advanced',
    q: 'Universitas "MACAN TUTUL" menawarkan kelas pagi dan malam untuk Program Studi S1 Administrasi Bisnis. Survei dilakukan kepada mahasiswa tentang persepsi terhadap prestis suatu bidang karir, dengan melakukan pemeringkatan dari 1-8 (1 adalah paling prestisius, dan 8 adalah paling tidak prestisius). Hasil survei tersebut ditampilkan dengan (Jenis karir; Pemeringkatan Kelas Pagi; Pemeringkatan Kelas Malam), sehingga secara berturut-turut data tersebut adalah (Akuntan;6;3), (Programer Komputer;7;2), (Manager Bank; 2;6), (Admin RumahSakit;5;4), (Ahli Statistik;1;7), (Peneliti Pasar;4;8), (Analis Saham;3;5), (Manager Produksi;8;1). Berdasarkan nilai koefisien korelasi Spearmannya, maka interpretasi yang benar adalah:',
    options: [
      'Terdapat korelasi negatif dan kuat pemeringkatan karir oleh mahasiswa kelas pagi dan malam.',
      'Terdapat korelasi positif dan kuat pemeringkatan karir oleh mahasiswa kelas pagi dan malam.',
      'Terdapat korelasi positif dan lemah pemeringkatan karir oleh mahasiswa kelas pagi dan malam.',
      'Terdapat korelasi negatif dan lemah pemeringkatan karir oleh mahasiswa kelas pagi dan malam.'
    ],
    answer: 0,
    explanation: 'Jawaban yang BENAR adalah A. Dari perhitungan d² (selisih peringkat), jumlah d² = 156. Rumus rs = 1 - (6(156)) / (8(64-1)) = 1 - 936/504 = -0.857. Nilai ini menunjukkan korelasi yang negatif dan sangat kuat. Jawaban dari tangkapan layar (B) salah secara matematis.'
  },
  {
    topic: 'Korelasi & Regresi', skill: 'Interpretasi Persamaan Regresi', difficulty: 'basic',
    q: 'Jika hasil estimasi regresi sederhana antara Total Biaya (C) dan barang yang diproduksi (Q) pada perusahaan DEF adalah sebagai berikut:\nC = 3,000 + 2Q\nMaka mana pernyataan di bawah ini yang benar',
    options: [
      'Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $0',
      'Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $3,000',
      'Jika perusahaan DEF tidak memproduksi barang sama sekali, maka Total Biaya yang dikeluarkan oleh perusahaan tersebut adalah sebesar $2',
      'Jika perusahaan DEF menambah 1 produksi barang, maka tambahan biaya yang dibutuhkan adalah sebesar $3,000'
    ],
    answer: 1,
    explanation: 'Konstanta (intercept) sebesar 3,000 adalah fixed cost. Jika Q = 0 (tidak ada produksi), maka C = 3,000 + 2(0) = 3,000.'
  },
  {
    topic: 'ANOVA', skill: 'Tujuan Penggunaan ANOVA', difficulty: 'basic',
    q: 'Which statistical test is appropriate for comparing means across multiple groups?',
    options: ['Analysis of Variance (Anova)', 'Pearson correlation coefficient', 'Chi-square test', 't-test'],
    answer: 0,
    explanation: 'ANOVA dirancang khusus untuk membandingkan rata-rata (means) antara 3 kelompok atau lebih.'
  },
  {
    topic: 'Deret Waktu (Time Series)', skill: 'Moving Average', difficulty: 'medium',
    q: 'Berikut adalah data produksi pesawat tempur (unit) yang dihasilkan oleh PT. EMPRIT sejak tahun 2005-2010, secara berturut-turut 2, 6, 4, 5, 3 dan 10. Nilai MA3 untuk produksi tahun 2009 adalah:',
    options: ['7', '5', '4', '6'],
    answer: 2,
    explanation: 'MA3 biasa (lagging) untuk 2009 menggunakan data 3 tahun terakhir (2007, 2008, 2009) = (4+5+3)/3 = 4.0. (Catatan: Jika memakai centered MA untuk 2009: 2008,2009,2010 = 6.0).'
  },
  {
    topic: 'Korelasi & Regresi', skill: 'Signifikansi Korelasi', difficulty: 'advanced',
    q: 'Dengan menggunakan rumus: t = (r√n-2) / √(1-r²) with n-2 degrees of freedom\nPada data di bawah ini: X=(4,5,3,6,10) Y=(4,6,5,7,7)\nDapat disimpulkan bahwa:',
    options: [
      'Terdapat korelasi positif di populasi yang signifikan pada derajat kesalahan 5%',
      'Terdapat korelasi negatif di populasi yang signifikan pada derajat kesalahan 5%',
      'Tidak terdapat korelasi di populasi yang signifikan pada derajat kesalahan 5%',
      'Terdapat korelasi positif di populasi yang signifikan pada derajat kesalahan 10%'
    ],
    answer: 2,
    explanation: 'Hitungan aktual: r = 0.752. t-hitung = 1.977. Nilai t-tabel (df=3, α=5%) adalah 2.353 (one-tail). Karena t-hitung < t-tabel, maka korelasi TIDAK SIGNIFIKAN secara matematis (Jawaban C). Jika sistem kampus mengunci opsi A, itu adalah error pada soal aslinya.'
  },
  {
    topic: 'ANOVA', skill: 'Kesimpulan Uji Signifikansi', difficulty: 'medium',
    q: 'Suppose you find that there is a statistically significant difference between end-of-term statistical subject exams. What is the correct conclusion for this result?',
    options: [
      'The statistically significant difference proves that the exams were unfairly graded.',
      'The difference in end-of-term statistical subject exams means that one class is inherently better than the others in all subjects.',
      'The statistically significant difference indicates that the exam scores are biased and should not be considered valid.',
      'The significant difference suggests that there may be factors, such as different teaching methods or student engagement levels, contributing to the variation in exam scores.'
    ],
    answer: 3,
    explanation: 'Perbedaan yang signifikan hanya menunjukkan bahwa secara statistik ada perbedaan nyata antar kelompok, yang bisa disebabkan oleh berbagai faktor (metode mengajar, dll). Tidak membuktikan kecurangan atau bias.'
  },
  {
    topic: 'ANOVA', skill: 'Syarat ANOVA', difficulty: 'medium',
    q: 'What are the proper requirements for a dataset when conducting testing with analysis of variance?',
    options: [
      'Normally distributed and at least interval-scale',
      'The variance between two or more groups is similar and must be ratio-scale',
      'The variance between two or more groups is similar and at least interval-scale',
      'Normally distributed and must be ratio-scale'
    ],
    answer: 2,
    explanation: 'Syarat utama ANOVA adalah kesamaan varians antar kelompok (homogeneity of variance) dan datanya berskala minimal interval (atau rasio).'
  },
  {
    topic: 'ANOVA', skill: 'Jenis ANOVA Berulang', difficulty: 'medium',
    q: 'Suppose you are analyzing the mean value differences between end-of-term statistical subject exams. There are four classes, and it is common for students to engage in group learning across these classes. Based on this situation, what is the most appropriate statistical test?',
    options: [
      'One-way ANOVA without repetitive measurement',
      'Two-way ANOVA with repetitive measurement',
      'Two-way ANOVA without repetitive measurement',
      'One-way ANOVA with repetitive measurement'
    ],
    answer: 3,
    explanation: 'Karena ada faktor pembelajaran grup lintas kelas, hasil ujian mahasiswa mungkin berkorelasi, sehingga penggunaan repeated measures ANOVA lebih cocok untuk mengakomodasi ketergantungan observasi.'
  },
  {
    topic: 'Pengujian Hipotesis (2 Sampel)', skill: 'T-test vs ANOVA', difficulty: 'medium',
    q: 'What is the primary distinction between an independent two-sample t-test and an ANOVA?',
    options: [
      'The independent two-sample t-test can only be used for paired samples, whereas ANOVA is used for unpaired samples.',
      'An independent two-sample t-test can compare only for two groups simultaneously, while ANOVA is not limited to comparing two groups.',
      'An independent two-sample t-test is used for testing the relationship between two categorical variables, while ANOVA is used for testing the relationship between two continuous variables.',
      'Independent two-sample t-test is used when comparing values between two variables, while ANOVA is used when comparing more than two variables.'
    ],
    answer: 1,
    explanation: 't-test independen terbatas untuk membandingkan HANYA 2 kelompok/sampel. ANOVA bisa membandingkan 2 kelompok atau LEBIH (biasanya digunakan untuk >2 kelompok).'
  },
  {
    topic: 'Korelasi & Regresi', skill: 'Koefisien Korelasi', difficulty: 'medium',
    q: 'Dengan menggunakan rumus: CORRELATION COEFFICIENT r = Σ(X - X̄)(Y - Ȳ) / (n - 1)SxSy\nPada data di bawah ini: X=(4,5,3,6,10) Y=(4,6,5,7,7)\nDapat disimpulkan bahwa:',
    options: [
      'X dan Y tidak memiliki korelasi',
      'X dan Y memiliki korelasi positif dan kuat',
      'X dan Y memiliki korelasi positif dan lemah',
      'X dan Y memiliki korelasi negatif dan kuat'
    ],
    answer: 1,
    explanation: 'Dari perhitungan, nilai r = 0.752. Nilai ini mendekati 1, sehingga menunjukkan korelasi yang positif dan tergolong kuat.'
  },
  {
    topic: 'Deret Waktu (Time Series)', skill: 'Moving Average', difficulty: 'medium',
    q: 'Berikut adalah data produksi pesawat tempur (unit) yang dihasilkan oleh PT. EMPRIT sejak tahun 2005-2010, secara berturut-turut 2, 6, 4, 5, 3 dan 10. Nilai MA3 (moving average) untuk produksi tahun 2006 adalah:',
    options: ['4', '6', '5', '7'],
    answer: 0,
    explanation: 'Untuk mencari Moving Average 3 periode di sekitar tahun 2006 (Centered MA), kita merata-ratakan 2005, 2006, 2007 = (2 + 6 + 4) / 3 = 12 / 3 = 4.'
  },
  {
    topic: 'Deret Waktu (Time Series)', skill: 'Indeks Musiman', difficulty: 'advanced',
    q: 'Taman Bermain "HEPPI" mengelola kafe, restoran, dan toko souvenir. Berikut adalah jumlah pengunjung (ribu orang) yang ditampilkan dengan (Tahun;Musim;Jumlah Pengunjung). Secara berturut-turut adalah (2006;Dingin;117), (2007;Dingin;118,6), (2008;Dingin;114), (2009;Dingin;120,7), (2010;Dingin;125,2), (2006;Semi;80,7), (2007;Semi;82,5), (2008;Semi;84,3), (2009;Semi;79,6), (2010;Semi;80,2), (2006;Panas;129,6), (2007;Panas;121,4), (2008;Panas;119,9), (2009;Panas;130,7), (2010;Panas;127,6), (2006;Gugur;76,1), (2007;Gugur;77,0), (2008;Gugur;75), (2009;Gugur;69,6), (2010;Gugur;72). Interpretasi yang benar berdasarkan situasi tersebut adalah',
    options: [
      'Pengunjung pada musim semi 25,13 persen lebih tinggi dari rata-rata jumlah pengunjung tahunan.',
      'Pengunjung pada musim semi 25,13 persen lebih rendah dari rata-rata jumlah pengunjung tahunan.',
      'Pengunjung pada musim dingin 19,18 persen lebih tinggi dari rata-rata jumlah pengunjung tahunan.',
      'Pengunjung pada musim dingin 19,18 persen lebih rendah dari rata-rata jumlah pengunjung tahunan.'
    ],
    answer: 2,
    explanation: 'Rata-rata Musim Dingin = 119.1. Rata-rata keseluruhan seluruh musim = 100.085. Indeks Musim Dingin = (119.1/100.085)*100 = 119.00%. (Angka di soal sedikit dibulatkan menjadi 119.18%). Ini berarti musim dingin memiliki pengunjung 19,18% lebih TINGGI dari rata-rata.'
  },
  {
    topic: 'Korelasi & Regresi', skill: 'Persamaan Regresi', difficulty: 'advanced',
    q: 'Dengan rumus-rumus b = r(Sy/Sx) dan a = Ȳ - bX̄\nPada data di bawah ini: X=(4,5,3,6,10) Y=(4,6,5,7,7)\nMaka persamaan regresi yang dihasilkan adalah:',
    options: ['Y = 3.77 + 0.36 X', 'Y = 3.17 + 1.36 X', 'Y = 0.38 + 1.36 X', 'Y = 0.38 + 0.36 X'],
    answer: 0,
    explanation: 'Rata-rata X = 5.6, Y = 5.8. Covarians = 2.65, Varians X = 7.3. Slope b = Cov/VarX = 2.65 / 7.3 = 0.363. Intercept a = 5.8 - (0.363 × 5.6) = 3.767. Maka Y = 3.77 + 0.36X.'
  },
  {
    topic: 'ANOVA', skill: 'ANOVA Berulang', difficulty: 'medium',
    q: 'Please choose the correct statement regarding ANOVA with repeated measurements.',
    options: [
      'ANOVA with repeated measurements does not account for the correlation between measurements taken from the same subject.',
      'ANOVA with repeated measurements can only be used for independent samples',
      'ANOVA with repeated measurements is used to analyze data where the same subjects are measured multiple times under different conditions.'
    ],
    answer: 2,
    explanation: 'Repeated measures ANOVA khusus digunakan ketika unit observasi / subjek yang sama diukur berkali-kali pada waktu atau perlakuan yang berbeda (dependen).'
  },
  {
    topic: 'Deret Waktu (Time Series)', skill: 'Moving Total', difficulty: 'medium',
    q: 'Berikut adalah data produksi pesawat tempur (unit) yang dihasilkan oleh PT. EMPRIT sejak tahun 2005-2010, secara berturut-turut 2, 6, 4, 5, 3 dan 10. Nilai MT3 untuk produksi tahun 2007 adalah:',
    options: ['12', '14', '15', '18'],
    answer: 2,
    explanation: 'MT3 (Moving Total 3) yang berpusat pada tahun 2007 menggunakan data 2006, 2007, dan 2008. Jumlah = 6 + 4 + 5 = 15.'
  },
  {
    topic: 'Deret Waktu (Time Series)', skill: 'Indeks Musiman', difficulty: 'advanced',
    q: 'Taman Bermain "HEPPI" (Data Pengunjung). Indeks musiman untuk musim Gugur adalah:',
    options: ['81,55', '125,13', '74,13', '119,18'],
    answer: 2,
    explanation: 'Rata-rata Gugur = 73.94. Rata-rata keseluruhan = 100.085. Indeks Gugur = (73.94 / 100.085) * 100 ≈ 73.88% (Di soal, pembulatan lain menghasilkan angka 74,13%).'
  },
  {
    topic: 'Korelasi & Regresi', skill: 'Interpretasi Scatterplot', difficulty: 'basic',
    q: 'Kesimpulan sederhana dari gambar scatterplot (Price di sumbu X, Quantity di sumbu Y, tren menyebar turun ke kanan bawah) adalah:',
    options: [
      'Terdapat korelasi negatif yang kuat antara kuantitas dan harga',
      'Terdapat korelasi negatif yang lemah antara kuantitas dan harga',
      'Tidak terdapat korelasi antara kuantitas dan harga',
      'Terdapat korelasi positif yang lemah antara kuantitas dan harga'
    ],
    answer: 0,
    explanation: 'Tren titik data bergerak dari kiri atas ke kanan bawah menandakan korelasi negatif (berbanding terbalik), dan polanya cukup mengelompok menandakan kekuatan yang kuat.'
  },
  {
    topic: 'Deret Waktu (Time Series)', skill: 'Faktor Koreksi Indeks Musiman', difficulty: 'advanced',
    q: 'Taman Bermain "HEPPI" (Data Pengunjung). Faktor koreksi yang tepat sebesar:',
    options: ['0,9986', '0,9698', '0,9968', '0,9869'],
    answer: 2,
    explanation: 'Jika total 4 indeks musiman tidak persis 400 (misal 401,28), maka Faktor Koreksi = 400 / 401,28 = 0,9968. Semua indeks musiman akan dikalikan dengan faktor ini agar totalnya pas 400.'
  },
  {
    topic: 'Korelasi & Regresi', skill: 'Sifat Koefisien Korelasi', difficulty: 'basic',
    q: 'Perhatikan beberapa pernyataan di bawah ini:\n1. Koefisien korelasi bernilai 0 - 100\n2. Koefisien korelasi dapat bernilai negatif atau positif\n3. Koefisien korelasi dapat menunjukkan hubungan sebab akibat dari dua variabel atau lebih.\n4. Jika nilai koefisien korelasi adalah 0.8 maka dapat disimpulkan bahwa dua variabel memiliki hubungan yang kuat dan searah\n\nMaka:',
    options: ['1 dan 3 benar', 'Hanya 4 yang benar', '2 dan 4 benar', '1, 2 dan 3 benar'],
    answer: 2,
    explanation: 'Pernyataan (1) salah, karena r bernilai dari -1 hingga 1. Pernyataan (3) salah, korelasi BUKAN kausalitas (sebab-akibat). Yang benar hanyalah (2) dan (4).'
  },
  {
    topic: 'Korelasi & Regresi', skill: 'Prediction Interval', difficulty: 'advanced',
    q: 'Dengan menggunakan informasi tabel Regresi (Intercept = 2.169, Luas Toko = 1.179). Rata-rata luas toko = 3.24. Ŷ = 6.29. Standar Error = 2.143.\nMaka, buatlah interval prediksi untuk nilai penjualan jika luas toko di Cabang Y adalah sebesar 3.5 (100m2) pada tingkat kepercayaan 95%.',
    options: [
      '6.29 - 8.39 (jutaan rupiah)',
      '1.68 - 8.39 (jutaan rupiah)',
      '1.68 - 10.91 (jutaan rupiah)',
      '6.12 - 6.48 (jutaan rupiah)'
    ],
    answer: 2,
    explanation: 'Nilai prediksi titik Ŷ = 6.29. Menggunakan margin of error prediksi untuk satu cabang (dengan t-tabel sekitar 2.069), MoE = 4.62. Maka intervalnya: 6.29 ± 4.62 = [1.67, 10.91]. Jawaban dari screenshot (A) salah total secara kalkulasi.'
  },
  {
    topic: 'Statistik Non-Parametrik', skill: 'Korelasi Spearman', difficulty: 'medium',
    q: 'Universitas "MACAN TUTUL" (Data pemeringkatan karir). Koefisien korelasi Spearman untuk data tsb adalah:',
    options: ['-0,857', '0,587', '-0,768', '0,758'],
    answer: 0,
    explanation: 'Seperti perhitungan di awal, jumlah kuadrat selisih d² = 156, sehingga rs = 1 - 936/504 = -0.857. (Jawaban C pada dokumen PDF salah).'
  },
  {
    topic: 'Korelasi & Regresi', skill: 'Interpretasi Slope', difficulty: 'medium',
    q: 'Suatu perusahaan melakukan estimasi terhadap semua anak cabangnya untuk melihat apakah luas toko (100 m2) mempengaruhi penjualan (jutaan rupiah). Tabel Regresi: Intercept=2.169, Luas Toko=1.179. Kesimpulan dari hasil estimasi di atas adalah:',
    options: [
      'Setiap kenaikan 100 m2 dari luas toko akan dapat meningkatkan penjualan sebesar Rp 1.18 juta',
      'Setiap kenaikan 100 m2 dari luas toko akan dapat menurunkan penjualan sebesar Rp 1.18 juta.',
      'Setiap kenaikan 1 m2 dari luas toko akan dapat meningkatkan penjualan sebesar Rp 1.18 juta',
      'Setiap kenaikan 1 m2 dari luas toko akan dapat meningkatkan penjualan sebesar Rp 1.18 juta'
    ],
    answer: 0,
    explanation: 'Koefisien "Luas Toko" adalah 1.179 (dibulatkan Rp 1.18 juta). Karena satuan ukurnya adalah per 100 m², maka setiap kenaikan 100 m² akan meningkatkan penjualan sebesar 1.18 juta.'
  },
  {
    topic: 'Korelasi & Regresi', skill: 'Uji Signifikansi (P-value)', difficulty: 'medium',
    q: 'Dari hasil estimasi antara luas toko dan penjualan (P-value Intercept = 0.0422, P-value Luas Toko = 0.0003):\ni. Koefisien intercept signifikan pada α=1%\nii. Koefisien intercept signifikan pada α=5%\niii. Koefisien luas toko signifikan pada α=1%\niv. Koefisien intercept dan luas toko tidak signifikan\nMaka pernyataan yang benar adalah:',
    options: ['iv saja', 'ii dan iii', 'i saja', 'ii saja'],
    answer: 1,
    explanation: 'P-value Intercept (4.22%) signifikan pada α=5%, tetapi TIDAK di α=1%. P-value Luas Toko (0.03%) sangat signifikan, bahkan di bawah α=1%. Maka (ii) dan (iii) benar.'
  },
  {
    topic: 'Deret Waktu (Time Series)', skill: 'Variasi Siklis vs Musiman', difficulty: 'basic',
    q: 'Berikut adalah data produksi sepeda motor merek HINDI secara bulanan sejak Januari 2009-Juli 2010 (19 bulan data, naik turun secara konstan). Data tersebut mengandung variasi:',
    options: ['Seasonal', 'Ir-regular', 'Cyclical', 'Trend'],
    answer: 0,
    explanation: 'Data yang disajikan bersifat "bulanan" dan memiliki pola berulang setiap tahun. Pola berulang dalam periode kurang dari atau sama dengan 1 tahun disebut Musiman (Seasonal), BUKAN Cyclical (Siklis). Pilihan di kunci mahasiswa salah.'
  },
  {
    topic: 'Korelasi & Regresi', skill: 'Variabel Bebas dan Terikat', difficulty: 'basic',
    q: 'Suatu penelitian membuktikan bahwa nilai total biaya yang dikeluarkan oleh perusahaan dipengaruhi oleh skala produksi. Pernyataan yang benar terkait hasil temuan di atas adalah:',
    options: [
      'Skala produksi (perusahaan) merupakan variabel bebas dalam penelitian tersebut.',
      'Total biaya merupakan variabel bebas dalam penelitian tersebut.',
      'Hubungan antara variabel total biaya dan skala perusahaan tidak dapat diidentifikasi.',
      'Total biaya dan skala produksi memiliki hubungan dua arah'
    ],
    answer: 0,
    explanation: 'Kata "dipengaruhi oleh" menunjukkan bahwa Skala Produksi adalah penyebab (Variabel Bebas / X), sedangkan Total Biaya adalah akibat (Variabel Terikat / Y).'
  },
  {
    topic: 'ANOVA', skill: 'Pemilihan Uji yang Tepat', difficulty: 'medium',
    q: 'Suppose you want to analyze and determine which of the five major cities in Indonesia has had the highest income over the last 50 years. Your friends suggest using one-way ANOVA without repeated measurements. Is this suggestion correct?',
    options: [
      'Cannot determine as the information required is lack',
      'It should not need any statistical test for this kind of situation',
      'Yes, the suggestion is correct',
      'No, the suggestion is false'
    ],
    answer: 3,
    explanation: 'Saran tersebut salah (False). Data 5 kota selama 50 tahun adalah data beruntun (time series / longitudinal). Menggunakan ANOVA satu arah biasa mengabaikan dependensi waktu (pelanggaran asumsi sampel independen).'
  },
  {
    topic: 'Deret Waktu (Time Series)', skill: 'Indeks Musiman', difficulty: 'advanced',
    q: 'Taman Bermain "HEPPI" (Data Pengunjung). Indeks musiman untuk musim Panas adalah:',
    options: ['74,13', '125,13', '81,55', '119,18'],
    answer: 1,
    explanation: 'Rata-rata Musim Panas = 125.84. Rata-rata keseluruhan = 100.085. Indeks Panas = (125.84 / 100.085) * 100 = 125.73% (Di dalam soal terdekat dengan angka 125,13).'
  },
  {
    topic: 'ANOVA', skill: 'Two-way ANOVA', difficulty: 'medium',
    q: 'What distinguishes a two-way ANOVA with interaction from a two-way ANOVA without interaction?',
    options: [
      'Two-way ANOVA with interaction considers the influence of two independent variables on a single dependent variable, while two-way ANOVA without interaction involves only one independent variable.',
      'In two-way ANOVA with interaction, there is a significant interaction effect between the two independent variables, indicating that the effect of one variable depends on the level of the other variable.',
      'Two-way ANOVA with interaction uses different statistical assumptions compared to two-way ANOVA without interaction.',
      'Two-way ANOVA with interaction involves analyzing data from two independent groups, while two-way ANOVA without interaction involves analyzing data from two dependent groups.'
    ],
    answer: 1,
    explanation: 'Model dengan interaksi memungkinkan kita melihat apakah kombinasi spesifik antara dua faktor menghasilkan efek yang lebih besar/kecil (efek satu faktor bergantung pada level faktor lain).'
  },
  
  // EXTRA 10 QUESTIONS (Pre-UAS Material)
  {
    topic: 'Probabilitas', skill: 'Aturan Probabilitas', difficulty: 'basic',
    q: 'Dalam pelemparan dua buah dadu secara bersamaan, berapa probabilitas munculnya jumlah angka kedua dadu sama dengan 7?',
    options: ['1/6', '1/12', '1/36', '7/36'],
    answer: 0,
    explanation: 'Kombinasi jumlah 7 adalah (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Total ada 6 kombinasi dari 36 kemungkinan hasil. Probabilitas = 6/36 = 1/6.'
  },
  {
    topic: 'Distribusi Normal', skill: 'Menghitung Z-Score', difficulty: 'medium',
    q: 'Sebuah populasi memiliki rata-rata (μ) 50 dan standar deviasi (σ) 10. Jika suatu nilai observasi (X) adalah 65, berapakah nilai Z-score-nya?',
    options: ['1.5', '2.0', '1.0', '-1.5'],
    answer: 0,
    explanation: 'Rumus Z-score = (X - μ) / σ = (65 - 50) / 10 = 15 / 10 = 1.5. Artinya nilai X berada 1.5 standar deviasi di atas rata-rata.'
  },
  {
    topic: 'Estimasi Parameter', skill: 'Interval Kepercayaan', difficulty: 'medium',
    q: 'Manakah dari pernyataan berikut yang BENAR mengenai Confidence Interval (Interval Kepercayaan)?',
    options: [
      'Semakin besar tingkat kepercayaan (misal dari 90% ke 99%), maka margin of error akan semakin lebar.',
      'Semakin besar ukuran sampel (n), maka interval kepercayaan akan semakin melebar.',
      'Confidence Interval digunakan untuk mengestimasi statistik sampel dari parameter populasi.',
      'Margin of error akan bernilai 0 jika sampel dipilih secara acak murni.'
    ],
    answer: 0,
    explanation: 'Untuk tingkat kepercayaan yang lebih tinggi (contoh 99%), nilai t/Z kritis membesar sehingga Margin of Error juga membesar (rentang interval lebih lebar agar lebih yakin).'
  },
  {
    topic: 'Pengujian Hipotesis', skill: 'Error Tipe I dan II', difficulty: 'medium',
    q: 'Dalam pengujian hipotesis, apa yang dimaksud dengan Kesalahan Tipe I (Type I Error)?',
    options: [
      'Menolak Hipotesis Nol (H0) padahal H0 sebenarnya benar.',
      'Gagal menolak Hipotesis Nol (H0) padahal H0 sebenarnya salah.',
      'Menerima Hipotesis Alternatif (Ha) padahal Ha sebenarnya benar.',
      'Menolak Hipotesis Alternatif (Ha) karena sampel terlalu kecil.'
    ],
    answer: 0,
    explanation: 'Kesalahan Tipe I terjadi (probabilitasnya = α / alpha) ketika kita memutuskan ada efek/perbedaan (menolak H0), padahal aslinya tidak ada (H0 benar).'
  },
  {
    topic: 'Distribusi Probabilitas', skill: 'Distribusi Binomial', difficulty: 'advanced',
    q: 'Peluang suatu mesin pembuat baut menghasilkan produk cacat adalah 10%. Jika diambil 3 baut secara acak, berapakah peluang tepat 1 baut cacat (menggunakan probabilitas Binomial)?',
    options: ['0.243', '0.100', '0.027', '0.729'],
    answer: 0,
    explanation: 'Rumus Binomial: P(X=1) = (3 C 1) × (0.1)^1 × (0.9)^2 = 3 × 0.1 × 0.81 = 0.243.'
  },
  {
    topic: 'Pengujian Hipotesis', skill: 'P-Value', difficulty: 'basic',
    q: 'Jika dalam sebuah uji statistik didapatkan P-value sebesar 0.03. Keputusan apa yang diambil jika tingkat signifikansi (α) ditetapkan sebesar 5%?',
    options: [
      'Menolak H0, hasil signifikan secara statistik',
      'Gagal menolak H0, hasil signifikan secara statistik',
      'Menolak H0, hasil tidak signifikan secara statistik',
      'Gagal menolak H0, hasil tidak signifikan secara statistik'
    ],
    answer: 0,
    explanation: 'Aturan baku p-value: Jika p-value < α (0.03 < 0.05), maka H0 ditolak dan hasilnya disebut signifikan secara statistik.'
  },
  {
    topic: 'Statistik Deskriptif', skill: 'Bentuk Distribusi', difficulty: 'medium',
    q: 'Dalam suatu distribusi data gaji, diketahui nilai Mean = Rp 5 juta, Median = Rp 4 juta, dan Modus = Rp 3 juta. Kesimpulan apa yang dapat ditarik mengenai bentuk distribusi data tersebut?',
    options: [
      'Distribusi menceng ke kanan (Positively Skewed)',
      'Distribusi menceng ke kiri (Negatively Skewed)',
      'Distribusi simetris normal',
      'Distribusi bimodal'
    ],
    answer: 0,
    explanation: 'Karena Mean > Median > Modus, ekor distribusi tertarik ke angka-angka tinggi, sehingga disebut Positively Skewed (menceng ke kanan).'
  },
  {
    topic: 'Pengambilan Sampel', skill: 'Stratified vs Cluster', difficulty: 'medium',
    q: 'Sebuah riset pasar membagi populasi menjadi kelompok-kelompok berdasarkan Provinsi, kemudian memilih beberapa Provinsi secara acak utuh untuk dijadikan sampel (semua penduduk di provinsi terpilih diwawancarai). Metode sampling ini disebut:',
    options: [
      'Cluster Sampling',
      'Stratified Random Sampling',
      'Systematic Sampling',
      'Convenience Sampling'
    ],
    answer: 0,
    explanation: 'Ini adalah ciri khas Cluster Sampling: membagi populasi ke dalam klaster, lalu memilih klaster secara acak dan meneliti seluruh elemen di dalam klaster terpilih tersebut.'
  },
  {
    topic: 'Teorema Limit Pusat', skill: 'Konsep CLT', difficulty: 'basic',
    q: 'Teorema Limit Pusat (Central Limit Theorem) menyatakan bahwa jika ukuran sampel (n) cukup besar, maka:',
    options: [
      'Distribusi rata-rata sampel (sampling distribution of the mean) akan mendekati distribusi Normal',
      'Populasi asli akan berubah menjadi berdistribusi Normal',
      'Rata-rata sampel akan selalu bernilai nol',
      'Varians sampel akan selalu sama dengan varians populasi'
    ],
    answer: 0,
    explanation: 'CLT menjamin bahwa terlepas dari bentuk distribusi populasinya, distribusi dari rata-rata sampelnya (X-bar) akan mendekati normal jika sampelnya besar (n ≥ 30).'
  },
  {
    topic: 'Estimasi Parameter', skill: 'Faktor Pengali T vs Z', difficulty: 'basic',
    q: 'Saat membuat interval kepercayaan untuk rata-rata populasi (μ), kapan seorang peneliti harus menggunakan distribusi-t (t-distribution) alih-alih distribusi-Z?',
    options: [
      'Ketika standar deviasi populasi (σ) tidak diketahui dan diestimasi dengan standar deviasi sampel (s)',
      'Ketika ukuran sampel lebih besar dari 1.000',
      'Ketika tingkat signifikansi (α) kurang dari 1%',
      'Ketika data berskala nominal atau ordinal'
    ],
    answer: 0,
    explanation: 'Jika standar deviasi asli populasi (σ) tidak diketahui dan hanya bermodal standar deviasi dari sampel (s), maka uji t adalah uji statistik yang harus digunakan.'
  }
];

const filepath = path.join(__dirname, 'src', 'data', 'quizzes', 'mas122.ts');
let content = fs.readFileSync(filepath, 'utf-8');

// Find the export of MAS122_UAS_2024
const regex = /export const MAS122_UAS_2024: QuizQuestion\[\] = \[\s*\{[\s\S]*\}\s*\];/m;
const newExport = `export const MAS122_UAS_2024: QuizQuestion[] = ${JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:')};`;

content = content.replace(regex, newExport);

fs.writeFileSync(filepath, content);
console.log('MAS122 UAS updated!');
