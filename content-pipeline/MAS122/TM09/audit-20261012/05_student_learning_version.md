# Regresi & Korelasi : Bagian 1

Korelasi mengukur kekuatan hubungan dua variabel; regresi membangun model untuk **memprediksi** satu variabel dari variabel lain.

A. Korelasi (Pearson r)

r berkisar **−1 sampai +1**. Dekat +1 = hubungan positif kuat; dekat −1 = negatif kuat; 0 = tak ada hubungan linear.

**Scatterplot** membantu melihat pola sebelum menghitung r.

**Korelasi ≠ kausalitas** : hubungan kuat belum tentu sebab-akibat.

B. Regresi Linear Sederhana

Ŷ = a + bX

a = intercept (nilai Y saat X=0); b = slope (perubahan Y per unit X).

Garis terbaik dipilih dengan **metode kuadrat terkecil (least squares)**: meminimalkan jumlah kuadrat selisih nilai aktual dan prediksi (residual).

Contoh

Model biaya: Ŷ = 5.000.000 + 2.000·X (X = unit produksi). Artinya biaya tetap Rp5.000.000 dan biaya variabel **Rp2.000/unit** : persis konsep cost behavior pada Akuntansi Biaya.

Modul Terpadu Pra-UAS : Konsep, SPSS Output, dan Jebakan

Catatan kurator

Bagian di bawah ini menambah materi inti TM 9 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.

Regresi dan Korelasi Bagian 1 Hubungan dua variabel dan model prediksi sederhana

Manajer ingin mengetahui apakah kenaikan biaya iklan diikuti kenaikan penjualan. Korelasi menjawab kuat-lemahnya hubungan dua variabel, sedangkan regresi menghasilkan persamaan untuk memprediksi penjualan berdasarkan biaya iklan.

Contoh Penerapan Regresi & Korelasi

Akuntan manajemen dapat mengevaluasi hubungan biaya promosi dan pendapatan.

Analis keuangan dapat memeriksa hubungan leverage dan profitabilitas.

Auditor dapat mengevaluasi hubungan ukuran perusahaan dan audit delay.

Target Kompetensi

Membedakan korelasi dan regresi.

Menjelaskan makna Pearson r, slope, intercept, dan R².

Membuat persamaan regresi linier sederhana.

Menulis interpretasi hubungan tanpa menyimpulkan kausalitas secara berlebihan.

Korelasi

Ukuran arah dan kekuatan hubungan dua variabel numerik.

Pearson r

Koefisien korelasi untuk hubungan linier antara dua variabel scale.

Scatterplot

Grafik titik yang menunjukkan pola hubungan X dan Y.

Regresi

Model statistik untuk memprediksi Y berdasarkan X.

Intercept

Nilai prediksi Y ketika X = 0.

Slope

Perubahan rata-rata Y ketika X naik satu unit.

R²

Proporsi variasi Y yang dijelaskan oleh X dalam model.

Kausalitas

Hubungan sebab-akibat; tidak otomatis dibuktikan oleh korelasi/regresi sederhana.

Pakai korelasi

X dan Y numerik, tujuan hanya melihat hubungan.

Pakai regresi

Y numerik dan tujuan analisis adalah prediksi atau estimasi perubahan Y akibat perubahan X.

Jangan berlebihan

Jangan menyimpulkan X menyebabkan Y jika data hanya observasional dan tidak ada kontrol variabel lain.

Data biaya iklan dan penjualan bulanan dalam juta rupiah.

Bulan | Biaya Iklan (X) | Penjualan (Y)

1 | 8 | 110

2 | 10 | 125

3 | 12 | 130

4 | 14 | 145

5 | 16 | 160

6 | 18 | 168

7 | 20 | 181

8 | 22 | 190

Scatterplot: Biaya Iklan vs Penjualan

Ketika biaya iklan meningkat dari 8 menjadi 22, penjualan juga meningkat dari 110 menjadi 190.

Titik yang bergerak naik ke kanan menunjukkan hubungan positif.

Data contoh menghasilkan korelasi sangat kuat dan positif.

Slope (b) = Σ[(X - X̄)(Y - Ȳ)] / Σ[(X - X̄)²]

Mengukur seberapa besar rata-rata perubahan Y jika X naik 1 unit.

Intercept (a) = Ȳ - bX̄

Nilai prediksi Y jika X bernilai nol.

Garis regresi merangkum pola hubungan X dan Y dalam bentuk persamaan Ŷ = a + bX.

Jika biaya iklan (X) = 19 juta, penjualan (Y) diprediksi melalui persamaan regresi dengan memasukkan nilai 19 ke dalam variabel X.

Ringkasan Rumus Regresi Linier Sederhana

**Persamaan Regresi:** Ŷ = a + bX
• **Slope (b):** Σ[(Xi − X̄)(Yi − Ȳ)] / Σ[(Xi − X̄)²]
• **Intercept (a):** Ȳ − bX̄
• **Hasil Contoh:** Ŷ = 64,61 + 5,77X (R² ≈ 0,994)

**Asumsi Linearitas:** Hubungan antara variabel X dan Y harus membentuk pola garis lurus pada scatterplot.

Tidak ada outlier ekstrem

Satu titik ekstrem dapat menarik garis regresi terlalu kuat.

Independensi

Observasi sebaiknya tidak saling bergantung.

Jebakan Ujian & Kesalahan Umum

Menganggap korelasi tinggi pasti berarti sebab-akibat.

Tidak melihat scatterplot sebelum membaca angka korelasi.

Menafsirkan intercept secara mekanis meskipun X = 0 tidak masuk akal secara bisnis.

Melakukan prediksi jauh di luar rentang data.

Langkah Analisis di SPSS

Buat variabel iklan dan penjualan sebagai Scale.

Untuk korelasi: Analyze → Correlate → Bivariate, pilih Pearson.

Untuk regresi: Analyze → Regression → Linear.

Masukkan penjualan ke Dependent dan iklan ke Independent.

Klik Statistics, centang Estimates, Model fit, dan Confidence intervals.

Baca Model Summary, ANOVA, dan Coefficients.

Langkah Analisis di Excel

Gunakan Insert → Scatter untuk membuat scatterplot.

Klik titik grafik → Add Trendline → Display Equation dan R-squared.

Gunakan =CORREL(range_x, range_y) untuk korelasi.

Gunakan Data → Data Analysis → Regression untuk output regresi lengkap.

Correlation table

Nilai Pearson r menunjukkan arah dan kekuatan hubungan.

Model Summary

R² menunjukkan persentase variasi Y yang dijelaskan X.

ANOVA regression

Sig. menunjukkan apakah model regresi secara keseluruhan signifikan.

Coefficients

Kolom B berisi intercept dan slope.

Pembahasan: Korelasi mengukur arah dan kekuatan hubungan, sedangkan regresi membuat persamaan prediksi.

Pembahasan: Ŷ = 40 + 2,5(30) = 115.

Pembahasan: Contoh: X = total aset, Y = audit delay; atau X = pertumbuhan penjualan, Y = profit margin.

## Flashcard

Apa yang diukur korelasi r?

Arah dan kekuatan hubungan linear dua variabel; -1 sampai 1. Hubungan nonlinier dapat kuat meski r kecil. Rujukan: Lind 17e Ch.13, bagian Correlation Analysis dan Simple Linear Regression

Apakah korelasi membuktikan sebab?

Tidak. Confounding, arah sebab dan desain pengamatan perlu dianalisis. Rujukan: Lind 17e Ch.13, bagian Correlation Analysis dan Simple Linear Regression

Apa slope regresi sederhana?

Perubahan nilai rata-rata Y yang diprediksi per tambahan satu unit X pada model, bukan kepastian perubahan setiap individu. Rujukan: Lind 17e Ch.13, bagian Correlation Analysis dan Simple Linear Regression

Apa intercept?

Prediksi Y pada X=0; interpretasi substantif memerlukan X=0 berada dalam konteks/domain yang relevan. Rujukan: Lind 17e Ch.13, bagian Correlation Analysis dan Simple Linear Regression

Apa residual?

Nilai observasi Y dikurangi prediksi Y pada X yang sama. Unitnya sama dengan Y. Rujukan: Lind 17e Ch.13, bagian Correlation Analysis dan Simple Linear Regression

Apa tujuan OLS?

Meminimumkan jumlah kuadrat residual pada spesifikasi yang dipilih; hasil perlu pemeriksaan asumsi. Rujukan: Lind 17e Ch.13, bagian Correlation Analysis dan Simple Linear Regression

## Kuis TM terdaftar


