const fs = require('fs');

const raw = [
  // TM 1: Pengantar Statistika & Data
  [1, 'Definisi', 'Statistika vs Statistik', 'Statistika adalah ilmu pengumpulan dan analisis data. Statistik adalah nilai (angka) yang dihitung dari sebuah sampel.'],
  [1, 'Perbandingan', 'Populasi vs Sampel', 'Populasi: keseluruhan objek pengamatan. Sampel: sebagian dari populasi yang diambil untuk dianalisis.'],
  [1, 'Perbandingan', 'Parameter vs Statistik', 'Parameter adalah ukuran numerik dari populasi (misal rata-rata populasi μ). Statistik adalah ukuran numerik dari sampel (misal rata-rata sampel x̄).'],
  [1, 'Perbandingan', 'Data Kualitatif vs Kuantitatif', 'Kualitatif: data kategori (non-numerik). Kuantitatif: data numerik (diskrit atau kontinu).'],
  [1, 'Konsep', 'Level Pengukuran Data', 'Nominal (kategori tanpa urutan), Ordinal (kategori berurutan), Interval (jarak sama tanpa nol mutlak), Rasio (memiliki nol mutlak).'],
  [1, 'Perbandingan', 'Statistika Deskriptif vs Inferensial', 'Deskriptif: meringkas dan menyajikan data. Inferensial: menarik kesimpulan tentang populasi berdasarkan sampel.'],
  // TM 2: Penyajian Data
  [2, 'Definisi', 'Distribusi Frekuensi', 'Tabel pengelompokan data ke dalam kelas-kelas interval beserta jumlah amatan (frekuensi) pada setiap kelas.'],
  [2, 'Rumus', 'Aturan Sturges', 'K = 1 + 3.322 log(n). Rumus untuk menentukan jumlah kelas yang ideal dalam membuat tabel distribusi frekuensi.'],
  [2, 'Definisi', 'Histogram', 'Grafik batang dari distribusi frekuensi numerik, di mana batang saling menempel, menunjukkan kontinuitas data.'],
  [2, 'Definisi', 'Ogive', 'Grafik garis yang menggambarkan frekuensi kumulatif (kurang dari atau lebih dari) suatu distribusi data.'],
  [2, 'Konsep', 'Diagram Pareto', 'Diagram batang untuk data kategorik yang disusun dari frekuensi tertinggi ke terendah, sering digunakan dalam kontrol kualitas.'],
  [2, 'Definisi', 'Scatter Plot', 'Diagram pencar yang digunakan untuk melihat pola hubungan antara dua variabel kuantitatif.'],
  // TM 3: Ukuran Pemusatan & Penyebaran
  [3, 'Definisi', 'Mean (Rata-rata)', 'Jumlah seluruh nilai data dibagi dengan banyaknya data. Sangat peka terhadap nilai ekstrem (outlier).'],
  [3, 'Definisi', 'Median', 'Nilai tengah dari sekumpulan data yang telah diurutkan. Lebih tahan terhadap outlier dibandingkan mean.'],
  [3, 'Definisi', 'Modus', 'Nilai yang paling sering muncul dalam sekumpulan data. Suatu data bisa memiliki lebih dari satu modus (bimodal/multimodal).'],
  [3, 'Rumus', 'Varians (Sampel)', 's² = Σ(x - x̄)² / (n - 1). Mengukur rata-rata kuadrat jarak setiap nilai terhadap rata-rata.'],
  [3, 'Rumus', 'Standar Deviasi', 'Akar kuadrat dari varians. Merupakan ukuran penyebaran data dalam satuan yang sama dengan data aslinya.'],
  [3, 'Konsep', 'Koefisien Variasi (CV)', 'CV = (Standar Deviasi / Mean) x 100%. Digunakan untuk membandingkan tingkat variasi dari dua kumpulan data yang memiliki satuan berbeda.'],
  // TM 4: Probabilitas Dasar
  [4, 'Definisi', 'Ruang Sampel', 'Himpunan semua hasil (outcome) yang mungkin terjadi dari suatu eksperimen atau percobaan statistik.'],
  [4, 'Konsep', 'Mutually Exclusive', 'Dua kejadian yang tidak dapat terjadi secara bersamaan. Jika A terjadi, B tidak mungkin terjadi (A ∩ B = 0).'],
  [4, 'Konsep', 'Kejadian Independen', 'Kejadian di mana probabilitas terjadinya tidak dipengaruhi oleh terjadi atau tidaknya kejadian lain.'],
  [4, 'Rumus', 'Aturan Penjumlahan (Atau)', 'P(A U B) = P(A) + P(B) - P(A ∩ B). Jika mutually exclusive, kuranginya adalah 0.'],
  [4, 'Rumus', 'Aturan Perkalian (Dan)', 'P(A ∩ B) = P(A) x P(B|A). Jika independen, P(B|A) sama dengan P(B).'],
  [4, 'Rumus', 'Teorema Bayes', 'Rumus untuk memperbarui probabilitas suatu kejadian (posterior probability) berdasarkan informasi baru.'],
  // TM 5: Distribusi Diskrit
  [5, 'Definisi', 'Variabel Acak Diskrit', 'Variabel acak yang nilai-nilainya dapat dihitung (berupa bilangan bulat), misal jumlah produk cacat.'],
  [5, 'Konsep', 'Distribusi Binomial', 'Distribusi probabilitas dari jumlah keberhasilan dalam n percobaan Bernoulli yang saling independen, dengan probabilitas sukses (p) konstan.'],
  [5, 'Rumus', 'Mean & Varians Binomial', 'Mean = n*p. Varians = n*p*q (dimana q = 1 - p).'],
  [5, 'Konsep', 'Distribusi Poisson', 'Distribusi probabilitas peristiwa yang terjadi dalam interval waktu atau ruang tertentu. Digunakan untuk peristiwa jarang.'],
  [5, 'Rumus', 'Mean & Varians Poisson', 'Mean (λ) dan Varians bernilai sama. Semakin besar λ, bentuk distribusi semakin mendekati normal.'],
  [5, 'Definisi', 'Distribusi Hipergeometrik', 'Digunakan untuk pengambilan sampel tanpa pengembalian dari populasi kecil, sehingga probabilitas sukses berubah setiap pengambilan.'],
  // TM 6: Distribusi Kontinu (Normal)
  [6, 'Definisi', 'Variabel Acak Kontinu', 'Variabel acak yang nilainya berupa rentang tak terbatas (mengandung desimal/pecahan), misal tinggi badan atau suhu.'],
  [6, 'Konsep', 'Sifat Distribusi Normal', 'Berbentuk lonceng, simetris, mean = median = modus, dan asimtotik terhadap sumbu horizontal.'],
  [6, 'Konsep', 'Aturan Empiris Normal', 'Sekitar 68% data berada dalam ±1 stdev, 95% dalam ±2 stdev, dan 99.7% dalam ±3 stdev dari rata-rata.'],
  [6, 'Rumus', 'Z-Score', 'z = (X - μ) / σ. Digunakan untuk menstandarisasi distribusi normal ke Normal Standar (mean 0, stdev 1).'],
  [6, 'Mekanisme', 'Membaca Tabel Z', 'Luas di bawah kurva normal merepresentasikan probabilitas. Total luas di bawah kurva adalah 1.'],
  [6, 'Konsep', 'Koreksi Kontinuitas', 'Faktor koreksi ±0.5 yang digunakan saat melakukan pendekatan distribusi kontinu (Normal) terhadap distribusi diskrit (Binomial/Poisson).'],
  // TM 7: Teknik Sampling & Distribusi Sampling
  [7, 'Definisi', 'Probability Sampling', 'Teknik pengambilan sampel di mana setiap elemen populasi memiliki peluang yang sama (diketahui) untuk terpilih.'],
  [7, 'Konsep', 'Simple Random Sampling vs Stratified', 'Simple: acak murni. Stratified: populasi dibagi ke strata, lalu diambil sampel acak dari tiap strata (cocok untuk populasi heterogen).'],
  [7, 'Definisi', 'Distribusi Sampling', 'Distribusi probabilitas dari suatu statistik (misal rata-rata x̄) dari semua kemungkinan sampel berukuran n yang diambil dari populasi.'],
  [7, 'Konsep', 'Central Limit Theorem (CLT)', 'Teorema yang menyatakan bahwa distribusi rata-rata sampel (x̄) akan mendekati distribusi normal seiring bertambahnya ukuran sampel (n ≥ 30), terlepas dari bentuk distribusi populasi awal.'],
  [7, 'Rumus', 'Standard Error', 'σ_x̄ = σ / √n. Adalah standar deviasi dari distribusi sampling rata-rata.'],
  [7, 'Konsep', 'Faktor Koreksi Populasi Terbatas', 'Digunakan saat menghitung standard error jika sampel diambil tanpa pengembalian dan n/N > 5%.'],
  // TM 8: Estimasi Parameter
  [8, 'Definisi', 'Point Estimate vs Interval Estimate', 'Point (Titik): satu nilai tunggal (x̄ untuk μ). Interval: rentang nilai yang diharapkan memuat parameter dengan tingkat keyakinan tertentu.'],
  [8, 'Konsep', 'Confidence Level (1 - α)', 'Tingkat keyakinan (misal 95%), yaitu probabilitas bahwa interval estimasi yang dibentuk benar-benar mengandung parameter populasi yang diukur.'],
  [8, 'Mekanisme', 'Margin of Error (E)', 'Setengah dari lebar confidence interval. Dipengaruhi oleh level of confidence, variabilitas populasi, dan ukuran sampel.'],
  [8, 'Konsep', 'Penggunaan Distribusi-t', 'Distribusi-t (Student\'s t) digunakan saat varians populasi (σ) tidak diketahui dan diestimasi dengan varians sampel (s), terutama jika sampel kecil.'],
  [8, 'Konsep', 'Degrees of Freedom (df)', 'Jumlah nilai independen yang dapat bervariasi dalam perhitungan statistik. Untuk 1 sampel, df = n - 1.'],
  [8, 'Rumus', 'Menentukan Ukuran Sampel', 'n = (Z * σ / E)². Digunakan untuk mencari sampel minimum jika kita menginginkan margin of error maksimal E.'],
  // TM 9: Pengujian Hipotesis Satu Sampel
  [9, 'Definisi', 'Hipotesis Nol (H0) vs Alternatif (H1)', 'H0: hipotesis tentang status quo (ada tanda =). H1: klaim yang ingin dibuktikan oleh peneliti (tidak mengandung tanda =).'],
  [9, 'Perbandingan', 'Type I Error (α) vs Type II Error (β)', 'Type I: Menolak H0 padahal H0 benar (false positive). Type II: Gagal menolak H0 padahal H0 salah (false negative).'],
  [9, 'Konsep', 'Level of Significance (α)', 'Peluang maksimal yang bisa ditoleransi untuk melakukan Type I error, biasanya 0.05 atau 5%.'],
  [9, 'Definisi', 'P-value', 'Peluang mendapatkan nilai statistik uji (atau yang lebih ekstrem) jika H0 benar. Aturan: Jika P-value < α, maka Tolak H0.'],
  [9, 'Perbandingan', 'One-Tailed vs Two-Tailed Test', 'One-tailed: H1 memiliki arah (> atau <). Two-tailed: H1 tidak memiliki arah (≠), daerah penolakan dibagi dua sisi.'],
  [9, 'Mekanisme', 'Langkah Uji Hipotesis', '1. Tentukan H0/H1, 2. Pilih α, 3. Tentukan statistik uji (Z/t), 4. Hitung nilai uji/p-value, 5. Buat keputusan tolak/gagal tolak H0.'],
  // TM 10: Pengujian Hipotesis Dua Sampel
  [10, 'Konsep', 'Independent vs Dependent (Paired) Samples', 'Independent: dua kelompok tak terkait (misal kelas A vs B). Paired: objek yang sama diukur dua kali (misal sebelum dan sesudah treatment).'],
  [10, 'Mekanisme', 'Uji Beda Rata-rata 2 Sampel Independen', 'H0: μ1 - μ2 = 0. Jika varians populasi diketahui gunakan Z, jika tidak diketahui gunakan t.'],
  [10, 'Konsep', 'Pooled Variance (Varians Gabungan)', 'Digunakan dalam uji-t dua sampel independen dengan asumsi varians kedua populasi sama (homoskedastisitas).'],
  [10, 'Mekanisme', 'Uji t Sampel Berpasangan (Paired T-Test)', 'Fokus diubah menjadi analisis selisih (d = x1 - x2). H0: μ_d = 0. Diuji seperti 1 sampel terhadap d rata-rata.'],
  [10, 'Konsep', 'Uji Beda Proporsi 2 Sampel', 'Menggunakan uji-Z. Menguji apakah persentase sukses dari populasi 1 berbeda signifikan dari populasi 2 (misal persentase nasabah gagal bayar bank A vs bank B).'],
  [10, 'Miskonsepsi', 'Gagal Menolak H0 Bukan Berarti H0 Benar', 'Kita hanya tidak memiliki cukup bukti statistik dari sampel untuk menolaknya.'],
  // TM 11: Analisis Varians (ANOVA)
  [11, 'Definisi', 'ANOVA (Analysis of Variance)', 'Teknik uji hipotesis untuk membandingkan rata-rata dari TIGA populasi (kelompok) atau lebih.'],
  [11, 'Konsep', 'Hipotesis ANOVA', 'H0: μ1 = μ2 = μ3 = ... = μk (Semua rata-rata sama). H1: Setidaknya ada satu rata-rata yang berbeda.'],
  [11, 'Rumus', 'Statistik Uji F', 'F = MSTR / MSE. Rasio antara varians antar kelompok (Between-treatment) terhadap varians dalam kelompok (Within-treatment/Error).'],
  [11, 'Konsep', 'Distribusi F', 'Distribusi yang tidak pernah negatif (skewed right) dan memiliki dua degrees of freedom (numerator dan denominator).'],
  [11, 'Asumsi', 'Asumsi ANOVA', '1. Populasi berdistribusi normal, 2. Varians populasi sama (homogen), 3. Sampel saling independen.'],
  [11, 'Mekanisme', 'Post-Hoc Test (Tukey)', 'Jika ANOVA menolak H0, post-hoc dilakukan untuk mencari tahu spesifik pasangan kelompok mana yang berbeda rata-ratanya.'],
  // TM 12: Regresi Linear Sederhana
  [12, 'Definisi', 'Analisis Korelasi', 'Mengukur kekuatan dan arah hubungan linear antara dua variabel kuantitatif (koefisien korelasi Pearson, r).'],
  [12, 'Konsep', 'Koefisien Korelasi (r)', 'Nilai berkisar dari -1 (korelasi negatif sempurna) hingga +1 (korelasi positif sempurna). r = 0 berarti tak ada hubungan linear.'],
  [12, 'Definisi', 'Analisis Regresi', 'Teknik untuk membuat persamaan prediksi variabel dependen (Y) berdasarkan satu variabel independen (X).'],
  [12, 'Rumus', 'Persamaan Regresi Sederhana', 'Ŷ = b0 + b1X. b0 adalah intercept (perpotongan y), b1 adalah slope (kemiringan garis).'],
  [12, 'Mekanisme', 'Metode Ordinary Least Squares (OLS)', 'Metode menemukan garis regresi terbaik yang meminimalkan total kuadrat error (jarak vertikal dari titik data aktual ke garis prediksi).'],
  [12, 'Konsep', 'Koefisien Determinasi (R²)', 'Persentase variasi dari variabel dependen (Y) yang dapat dijelaskan oleh variabel independen (X). r kuadrat.'],
  // TM 13: Regresi Linear Berganda
  [13, 'Definisi', 'Regresi Linear Berganda', 'Persamaan regresi yang memprediksi variabel dependen (Y) dengan MENGGUNAKAN DUA atau lebih variabel independen (X1, X2, dst).'],
  [13, 'Konsep', 'Adjusted R-Squared', 'Versi modifikasi dari R² yang diberi penalti jika kita menambahkan variabel independen baru yang tidak berkontribusi signifikan.'],
  [13, 'Mekanisme', 'Uji F (Simultan)', 'Menguji signifikansi model regresi secara keseluruhan. H0: b1 = b2 = ... = bk = 0.'],
  [13, 'Mekanisme', 'Uji t (Parsial)', 'Menguji signifikansi masing-masing variabel independen (X) secara individual dalam memprediksi Y.'],
  [13, 'Definisi', 'Multikolinearitas', 'Masalah dalam regresi berganda ketika dua atau lebih variabel independen (X) sangat berkorelasi satu sama lain, mengacaukan estimasi slope.'],
  [13, 'Definisi', 'Variabel Dummy', 'Variabel buatan (0 dan 1) yang dimasukkan ke model regresi untuk mewakili data kualitatif/kategorik (misal gender: Pria=1, Wanita=0).'],
  // TM 14: Uji Nonparametrik (Chi-Square)
  [14, 'Perbandingan', 'Parametrik vs Nonparametrik', 'Parametrik membutuhkan asumsi distribusi normal dan data rasio/interval. Nonparametrik bebas distribusi dan cocok untuk data nominal/ordinal.'],
  [14, 'Definisi', 'Chi-Square (χ²) Goodness-of-Fit Test', 'Uji untuk menentukan apakah frekuensi hasil observasi sampel sesuai dengan frekuensi yang diharapkan secara teoretis.'],
  [14, 'Mekanisme', 'Chi-Square Test of Independence', 'Uji untuk menguji apakah ada hubungan (ketergantungan) antara dua variabel kategorik (nominal) yang disusun dalam tabel kontingensi (crosstab).'],
  [14, 'Rumus', 'Expected Frequency (Chi-Square)', 'Fe = (Total Baris x Total Kolom) / Total Keseluruhan. Digunakan dalam Test of Independence.'],
  [14, 'Konsep', 'Karakteristik Kurva Chi-Square', 'Tidak pernah negatif (kuadrat dari skor Z), condong ke kanan (skewed right), bentuknya ditentukan oleh degrees of freedom.'],
  [14, 'Mekanisme', 'Kaidah Penolakan Chi-Square', 'Semakin besar perbedaan antara Observed (fo) dan Expected (fe), nilai χ² semakin besar. Jika χ² > χ² kritis, tolak H0 (berarti ada hubungan/perbedaan).']
];

const cards = [];
raw.forEach((r, i) => {
  const tm = r[0];
  const phase = tm <= 7 ? 'pra-uts' : 'pra-uas';
  cards.push(`  {
    id: "mas122-tm${tm < 10 ? '0'+tm : tm}-${i < 10 ? '0'+i : i}",
    phase: "${phase}",
    tm: ${tm},
    topic: "${r[2].replace(/"/g, '\\"')}",
    category: "${r[1]}",
    front: "${r[2].replace(/"/g, '\\"')}",
    back: "${r[3].replace(/"/g, '\\"')}"
  }`);
});

const content = `import type { AdvancedStudyCard } from '../../types';

export const MAS122_FC: AdvancedStudyCard[] = [
${cards.join(',\n')}
];
`;

fs.writeFileSync('c:/cek/src/data/flashcards/mas122.ts', content);
console.log('Generated MAS122 cards: ' + cards.length);
