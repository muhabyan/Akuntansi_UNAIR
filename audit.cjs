const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'src', 'data', 'quizzes', 'mas122.ts');
let content = fs.readFileSync(filepath, 'utf-8');

const replacements = [
  {
    find: 'Universitas "MACAN TUTUL" menawarkan kelas pagi dan malam untuk Program Studi S1 Administrasi Bisnis. Survei dilakukan kepada mahasiswa tentang persepsi terhadap prestis suatu bidang karir, dengan melakukan pemeringkatan dari 1-8 (1 adalah paling prestisius, dan 8 adalah paling tidak prestisius). Hasil survei tersebut ditampilkan dengan (Jenis karir; Pemeringkatan Kelas Pagi; Pemeringkatan Kelas Malam), sehingga secara berturut-turut data tersebut adalah (Akuntan;6;3), (Programer Komputer;7;2), (Manager Bank; 2;6), (Admin RumahSakit;5;4), (Ahli Statistik;1;7), (Peneliti Pasar;4;8), (Analis Saham;3;5), (Manager Produksi;8;1).',
    replace: 'Universitas "MACAN TUTUL" menawarkan kelas pagi dan malam untuk Program Studi S1 Administrasi Bisnis. Survei dilakukan kepada mahasiswa tentang persepsi terhadap prestis suatu bidang karir, dengan melakukan pemeringkatan dari 1-8 (1 adalah paling prestisius, dan 8 adalah paling tidak prestisius).\\n\\nHasil survei tersebut ditampilkan pada tabel berikut:\\n\\n| Jenis Karir | Kelas Pagi | Kelas Malam |\\n|---|:---:|:---:|\\n| Akuntan | 6 | 3 |\\n| Programer Komputer | 7 | 2 |\\n| Manager Bank | 2 | 6 |\\n| Admin RumahSakit | 5 | 4 |\\n| Ahli Statistik | 1 | 7 |\\n| Peneliti Pasar | 4 | 8 |\\n| Analis Saham | 3 | 5 |\\n| Manager Produksi | 8 | 1 |'
  },
  {
    find: 'Jika hasil estimasi regresi sederhana antara Total Biaya (C) dan barang yang diproduksi (Q) pada perusahaan DEF adalah sebagai berikut:\\nC = 3,000 + 2Q\\nMaka mana pernyataan di bawah ini yang benar',
    replace: 'Jika hasil estimasi regresi sederhana antara Total Biaya ($C$) dan barang yang diproduksi ($Q$) pada perusahaan DEF adalah sebagai berikut:\\n\\n$$C = 3,000 + 2Q$$\\n\\nMaka mana pernyataan di bawah ini yang benar?'
  },
  {
    find: 'Dengan menggunakan rumus: t = (r√n-2) / √(1-r²) with n-2 degrees of freedom\\nPada data di bawah ini: X=(4,5,3,6,10) Y=(4,6,5,7,7)',
    replace: 'Dengan menggunakan rumus uji t korelasi dengan $n-2$ *degrees of freedom*:\\n\\n$$t = \\\\frac{r\\\\sqrt{n-2}}{\\\\sqrt{1-r^2}}$$\\n\\nPada data di bawah ini:\\n\\n| X | Y |\\n|:---:|:---:|\\n| 4 | 4 |\\n| 5 | 6 |\\n| 3 | 5 |\\n| 6 | 7 |\\n| 10 | 7 |'
  },
  {
    find: 'Dengan menggunakan rumus: CORRELATION COEFFICIENT r = Σ(X - X̄)(Y - Ȳ) / (n - 1)SxSy\\nPada data di bawah ini: X=(4,5,3,6,10) Y=(4,6,5,7,7)',
    replace: 'Dengan menggunakan rumus koefisien korelasi:\\n\\n$$r = \\\\frac{\\\\sum (X - \\\\bar{X})(Y - \\\\bar{Y})}{(n - 1)S_x S_y}$$\\n\\nPada data di bawah ini:\\n\\n| X | Y |\\n|:---:|:---:|\\n| 4 | 4 |\\n| 5 | 6 |\\n| 3 | 5 |\\n| 6 | 7 |\\n| 10 | 7 |'
  },
  {
    find: 'Taman Bermain "HEPPI" mengelola kafe, restoran, dan toko souvenir. Berikut adalah jumlah pengunjung (ribu orang) yang ditampilkan dengan (Tahun;Musim;Jumlah Pengunjung). Secara berturut-turut adalah (2006;Dingin;117), (2007;Dingin;118,6), (2008;Dingin;114), (2009;Dingin;120,7), (2010;Dingin;125,2), (2006;Semi;80,7), (2007;Semi;82,5), (2008;Semi;84,3), (2009;Semi;79,6), (2010;Semi;80,2), (2006;Panas;129,6), (2007;Panas;121,4), (2008;Panas;119,9), (2009;Panas;130,7), (2010;Panas;127,6), (2006;Gugur;76,1), (2007;Gugur;77,0), (2008;Gugur;75), (2009;Gugur;69,6), (2010;Gugur;72).',
    replace: 'Taman Bermain "HEPPI" mengelola kafe, restoran, dan toko souvenir. Berikut adalah jumlah pengunjung (ribu orang) yang ditampilkan dalam tabel berikut:\\n\\n| Musim | 2006 | 2007 | 2008 | 2009 | 2010 |\\n|---|:---:|:---:|:---:|:---:|:---:|\\n| **Dingin** | 117 | 118.6 | 114 | 120.7 | 125.2 |\\n| **Semi** | 80.7 | 82.5 | 84.3 | 79.6 | 80.2 |\\n| **Panas** | 129.6 | 121.4 | 119.9 | 130.7 | 127.6 |\\n| **Gugur** | 76.1 | 77.0 | 75.0 | 69.6 | 72.0 |'
  },
  {
    find: 'Dengan rumus-rumus b = r(Sy/Sx) dan a = Ȳ - bX̄\\nPada data di bawah ini: X=(4,5,3,6,10) Y=(4,6,5,7,7)',
    replace: 'Dengan menggunakan rumus-rumus regresi:\\n\\n$$b = r\\\\left(\\\\frac{S_y}{S_x}\\\\right) \\\\quad \\\\text{dan} \\\\quad a = \\\\bar{Y} - b\\\\bar{X}$$\\n\\nPada data di bawah ini:\\n\\n| X | Y |\\n|:---:|:---:|\\n| 4 | 4 |\\n| 5 | 6 |\\n| 3 | 5 |\\n| 6 | 7 |\\n| 10 | 7 |'
  },
  {
    find: 'Taman Bermain "HEPPI" (Data Pengunjung). Indeks musiman',
    replace: 'Taman Bermain "HEPPI" mengelola kafe, restoran, dan toko souvenir. Berikut adalah jumlah pengunjung (ribu orang) yang ditampilkan dalam tabel berikut:\\n\\n| Musim | 2006 | 2007 | 2008 | 2009 | 2010 |\\n|---|:---:|:---:|:---:|:---:|:---:|\\n| **Dingin** | 117 | 118.6 | 114 | 120.7 | 125.2 |\\n| **Semi** | 80.7 | 82.5 | 84.3 | 79.6 | 80.2 |\\n| **Panas** | 129.6 | 121.4 | 119.9 | 130.7 | 127.6 |\\n| **Gugur** | 76.1 | 77.0 | 75.0 | 69.6 | 72.0 |\\n\\nIndeks musiman'
  },
  {
    find: 'Taman Bermain "HEPPI" (Data Pengunjung). Faktor koreksi',
    replace: 'Taman Bermain "HEPPI" mengelola kafe, restoran, dan toko souvenir. Berikut adalah jumlah pengunjung (ribu orang) yang ditampilkan dalam tabel berikut:\\n\\n| Musim | 2006 | 2007 | 2008 | 2009 | 2010 |\\n|---|:---:|:---:|:---:|:---:|:---:|\\n| **Dingin** | 117 | 118.6 | 114 | 120.7 | 125.2 |\\n| **Semi** | 80.7 | 82.5 | 84.3 | 79.6 | 80.2 |\\n| **Panas** | 129.6 | 121.4 | 119.9 | 130.7 | 127.6 |\\n| **Gugur** | 76.1 | 77.0 | 75.0 | 69.6 | 72.0 |\\n\\nFaktor koreksi'
  },
  {
    find: 'Perhatikan beberapa pernyataan di bawah ini:\\n1. Koefisien korelasi bernilai 0 - 100\\n2. Koefisien korelasi dapat bernilai negatif atau positif\\n3. Koefisien korelasi dapat menunjukkan hubungan sebab akibat dari dua variabel atau lebih.\\n4. Jika nilai koefisien korelasi adalah 0.8 maka dapat disimpulkan bahwa dua variabel memiliki hubungan yang kuat dan searah\\n\\nMaka:',
    replace: 'Perhatikan beberapa pernyataan di bawah ini:\\n1. Koefisien korelasi bernilai 0 - 100\\n2. Koefisien korelasi dapat bernilai negatif atau positif\\n3. Koefisien korelasi dapat menunjukkan hubungan sebab akibat dari dua variabel atau lebih.\\n4. Jika nilai koefisien korelasi adalah 0.8 maka dapat disimpulkan bahwa dua variabel memiliki hubungan yang kuat dan searah\\n\\nMaka pernyataan yang benar adalah:'
  },
  {
    find: 'Dengan menggunakan informasi tabel Regresi (Intercept = 2.169, Luas Toko = 1.179). Rata-rata luas toko = 3.24. Ŷ = 6.29. Standar Error = 2.143.\\nMaka, buatlah interval prediksi untuk nilai penjualan jika luas toko di Cabang Y adalah sebesar 3.5 (100m2) pada tingkat kepercayaan 95%.',
    replace: 'Dengan menggunakan informasi di bawah ini:\\n\\n**Regression Statistics**\\n| Metric | Value |\\n|---|---|\\n| Multiple R | 0.658 |\\n| R Square | 0.433 |\\n| Standard Error | 2.143 |\\n| Observations | 25 |\\n\\n**Coefficients**\\n| Variabel | Coefficients | Standard Error | t Stat | P-value |\\n|---|:---:|:---:|:---:|:---:|\\n| Intercept | 2.169 | 1.008 | 2.151 | 0.0422 |\\n| Luas Toko | 1.179 | 0.281 | 4.191 | 0.0003 |\\n\\n**Informasi tambahan:**\\n1. Nilai rata-rata luas toko seluruh cabang adalah 3.24 (100 m²)\\n2. $\\\\frac{(X - \\\\bar{X})^2}{\\\\sum (X - \\\\bar{X})^2} = \\\\frac{(3.5 - 3.24)^2}{58.02}$\\n3. $\\\\hat{Y} = 6.29$\\n\\nMaka, buatlah interval **prediksi** (Prediction Interval) untuk nilai penjualan jika luas toko di Cabang Y adalah sebesar 3.5 (100m²) pada tingkat kepercayaan 95%.'
  },
  {
    find: 'Universitas "MACAN TUTUL" (Data pemeringkatan karir). Koefisien korelasi Spearman untuk data tsb adalah:',
    replace: 'Universitas "MACAN TUTUL" menawarkan kelas pagi dan malam untuk Program Studi S1 Administrasi Bisnis. Survei dilakukan kepada mahasiswa tentang persepsi terhadap prestis suatu bidang karir, dengan melakukan pemeringkatan dari 1-8 (1 adalah paling prestisius, dan 8 adalah paling tidak prestisius).\\n\\nHasil survei tersebut ditampilkan pada tabel berikut:\\n\\n| Jenis Karir | Kelas Pagi | Kelas Malam |\\n|---|:---:|:---:|\\n| Akuntan | 6 | 3 |\\n| Programer Komputer | 7 | 2 |\\n| Manager Bank | 2 | 6 |\\n| Admin RumahSakit | 5 | 4 |\\n| Ahli Statistik | 1 | 7 |\\n| Peneliti Pasar | 4 | 8 |\\n| Analis Saham | 3 | 5 |\\n| Manager Produksi | 8 | 1 |\\n\\nKoefisien korelasi Spearman untuk data tsb adalah:'
  },
  {
    find: 'Suatu perusahaan melakukan estimasi terhadap semua anak cabangnya untuk melihat apakah luas toko (100 m2) mempengaruhi penjualan (jutaan rupiah). Tabel Regresi: Intercept=2.169, Luas Toko=1.179. Kesimpulan dari hasil estimasi di atas adalah:',
    replace: 'Suatu perusahaan melakukan estimasi terhadap semua anak cabangnya untuk melihat apakah luas toko (100 m²) mempengaruhi penjualan (jutaan rupiah). Hasil dari estimasi yang dilakukan adalah sebagai berikut:\\n\\n| Variabel | Coefficients | Standard Error | t Stat | P-value |\\n|---|:---:|:---:|:---:|:---:|\\n| Intercept | 2.169 | 1.008 | 2.151 | 0.0422 |\\n| Luas Toko (100 m²) | 1.179 | 0.281 | 4.191 | 0.0003 |\\n\\nKesimpulan dari hasil estimasi di atas adalah:'
  },
  {
    find: 'Dari hasil estimasi antara luas toko dan penjualan (P-value Intercept = 0.0422, P-value Luas Toko = 0.0003):\\ni. Koefisien intercept signifikan pada α=1%\\nii. Koefisien intercept signifikan pada α=5%\\niii. Koefisien luas toko signifikan pada α=1%\\niv. Koefisien intercept dan luas toko tidak signifikan\\nMaka pernyataan yang benar adalah:',
    replace: 'Dari hasil estimasi antara luas toko (100 m²) dan penjualan (jutaan rupiah) di bawah ini:\\n\\n| Variabel | Coefficients | Standard Error | t Stat | P-value |\\n|---|:---:|:---:|:---:|:---:|\\n| Intercept | 2.169 | 1.008 | 2.151 | 0.0422 |\\n| Luas Toko | 1.179 | 0.281 | 4.191 | 0.0003 |\\n\\n**Pernyataan:**\\ni. Koefisien intercept signifikan pada derajat kesalahan 1%\\nii. Koefisien intercept signifikan pada derajat kesalahan 5%\\niii. Koefisien luas toko signifikan pada derajat kesalahan 1%\\niv. Koefisien intercept dan luas toko tidak signifikan pada derajat kesalahan 1%, 5%, dan 10%\\n\\nMaka pernyataan yang benar adalah:'
  },
  {
    find: 'Berikut adalah data produksi sepeda motor merek HINDI secara bulanan sejak Januari 2009-Juli 2010 (19 bulan data, naik turun secara konstan). Data tersebut mengandung variasi:',
    replace: 'Berikut adalah data produksi sepeda motor merek HINDI secara bulanan (ribu unit) sejak Januari 2009-Juli 2010. Secara berturut-turut adalah:\\n`6, 7, 12, 8, 4, 3, 3, 5, 14, 6, 7, 6, 7, 9, 14, 9, 5, 4, 4`\\n\\nData tersebut mengandung variasi:'
  }
];

let replaced = content;
replacements.forEach(r => {
  replaced = replaced.split(r.find).join(r.replace);
});

fs.writeFileSync(filepath, replaced);
console.log('Markdown tables injected correctly!');
