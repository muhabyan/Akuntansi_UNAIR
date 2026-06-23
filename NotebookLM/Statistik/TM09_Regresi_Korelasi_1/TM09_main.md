# TM 9 — Regresi & Korelasi — Bagian 1

*Referensi: DA 13 · AA 15*

Korelasi mengukur kekuatan hubungan dua variabel; regresi membangun model untuk **memprediksi** satu variabel dari variabel lain.

## 🎯 Tujuan Pembelajaran
- Menafsirkan koefisien korelasi Pearson.
- Menyusun persamaan regresi linear sederhana.
- Memahami metode kuadrat terkecil.

---

## A. Korelasi (Pearson r)


- r berkisar **−1 sampai +1**. Dekat +1 = hubungan positif kuat; dekat −1 = negatif kuat; 0 = tak ada hubungan linear.
- **Scatterplot** membantu melihat pola sebelum menghitung r.
- **Korelasi ≠ kausalitas** — hubungan kuat belum tentu sebab-akibat.


## B. Regresi Linear Sederhana


**📐 Rumus.** `Ŷ = a + bX`  
*Catatan: a = intercept (nilai Y saat X=0); b = slope (perubahan Y per unit X).*


Garis terbaik dipilih dengan **metode kuadrat terkecil (least squares)**: meminimalkan jumlah kuadrat selisih nilai aktual dan prediksi (residual).


#### 💡 Contoh: Contoh

Model biaya: Ŷ = 5.000.000 + 2.000·X (X = unit produksi). Artinya biaya tetap Rp5.000.000 dan biaya variabel **Rp2.000/unit** — persis konsep cost behavior pada Akuntansi Biaya.


## Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan


> **🔑 Catatan kurator**
> Bagian di bawah ini menambah materi inti TM 9 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.


## Regresi dan Korelasi Bagian 1 Hubungan dua variabel dan model prediksi sederhana


Manajer ingin mengetahui apakah kenaikan biaya iklan diikuti kenaikan penjualan. Korelasi menjawab kuat-lemahnya hubungan dua variabel, sedangkan regresi menghasilkan persamaan untuk memprediksi penjualan berdasarkan biaya iklan.


- Akuntan manajemen dapat mengevaluasi hubungan biaya promosi dan pendapatan.
- Analis keuangan dapat memeriksa hubungan leverage dan profitabilitas.
- Auditor dapat mengevaluasi hubungan ukuran perusahaan dan audit delay.


- Membedakan korelasi dan regresi.
- Menjelaskan makna Pearson r, slope, intercept, dan R².
- Membuat persamaan regresi linier sederhana.
- Menulis interpretasi hubungan tanpa menyimpulkan kausalitas secara berlebihan.


### Korelasi


Ukuran arah dan kekuatan hubungan dua variabel numerik.


### Pearson r


Koefisien korelasi untuk hubungan linier antara dua variabel scale.


### Scatterplot


Grafik titik yang menunjukkan pola hubungan X dan Y.


### Regresi


Model statistik untuk memprediksi Y berdasarkan X.


### Intercept


Nilai prediksi Y ketika X = 0.


### Slope


Perubahan rata-rata Y ketika X naik satu unit.


### R²


Proporsi variasi Y yang dijelaskan oleh X dalam model.


### Kausalitas


Hubungan sebab-akibat; tidak otomatis dibuktikan oleh korelasi/regresi sederhana.


### Pakai korelasi


X dan Y numerik, tujuan hanya melihat hubungan.


### Pakai regresi


Y numerik dan tujuan analisis adalah prediksi atau estimasi perubahan Y akibat perubahan X.


### Jangan berlebihan


Jangan menyimpulkan X menyebabkan Y jika data hanya observasional dan tidak ada kontrol variabel lain.


Data biaya iklan dan penjualan bulanan dalam juta rupiah.


| Bulan | Biaya Iklan (X) | Penjualan (Y) |
|---|---|---|
| 1 | 8 | 110 |
| 2 | 10 | 125 |
| 3 | 12 | 130 |
| 4 | 14 | 145 |
| 5 | 16 | 160 |
| 6 | 18 | 168 |
| 7 | 20 | 181 |
| 8 | 22 | 190 |


Ketika biaya iklan meningkat dari 8 menjadi 22, penjualan juga meningkat dari 110 menjadi 190.


Titik yang bergerak naik ke kanan menunjukkan hubungan positif.


Data contoh menghasilkan korelasi sangat kuat dan positif.


Garis regresi merangkum pola hubungan X dan Y.


Jika biaya iklan 19 juta, penjualan diprediksi melalui persamaan regresi.


Ŷ = a + bX Slope b = Σ[(Xi − X̄)(Yi − Ȳ)] / Σ[(Xi − X̄)²] Intercept a = Ȳ − bX̄ Hasil contoh Ŷ = 64,61 + 5,77X R² ≈ 0,994 Asumsi dan Catatan Metode Linearitas Hubungan X dan Y kira-kira membentuk garis lurus.


### Tidak ada outlier ekstrem


Satu titik ekstrem dapat menarik garis regresi terlalu kuat.


### Independensi


Observasi sebaiknya tidak saling bergantung.


- Menganggap korelasi tinggi pasti berarti sebab-akibat.
- Tidak melihat scatterplot sebelum membaca angka korelasi.
- Menafsirkan intercept secara mekanis meskipun X = 0 tidak masuk akal secara bisnis.
- Melakukan prediksi jauh di luar rentang data.


1. Buat variabel iklan dan penjualan sebagai Scale.
2. Untuk korelasi: Analyze → Correlate → Bivariate, pilih Pearson.
3. Untuk regresi: Analyze → Regression → Linear.
4. Masukkan penjualan ke Dependent dan iklan ke Independent.
5. Klik Statistics, centang Estimates, Model fit, dan Confidence intervals.
6. Baca Model Summary, ANOVA, dan Coefficients.


1. Gunakan Insert → Scatter untuk membuat scatterplot.
2. Klik titik grafik → Add Trendline → Display Equation dan R-squared.
3. Gunakan =CORREL(range_x, range_y) untuk korelasi.
4. Gunakan Data → Data Analysis → Regression untuk output regresi lengkap.


### Correlation table


Nilai Pearson r menunjukkan arah dan kekuatan hubungan.


### Model Summary


R² menunjukkan persentase variasi Y yang dijelaskan X.


### ANOVA regression


Sig. menunjukkan apakah model regresi secara keseluruhan signifikan.


### Coefficients


Kolom B berisi intercept dan slope.


Pembahasan: Korelasi mengukur arah dan kekuatan hubungan, sedangkan regresi membuat persamaan prediksi.


Pembahasan: Ŷ = 40 + 2,5(30) = 115.


Pembahasan: Contoh: X = total aset, Y = audit delay; atau X = pertumbuhan penjualan, Y = profit margin.
