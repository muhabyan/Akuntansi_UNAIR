# Statistik untuk Akuntan (MAS122) — Modul Pra UAS TM8-14 (TM 8–14)

*Modul gabungan untuk Video Overview komprehensif. Berisi seluruh konten TM 8 sampai TM 14 dalam 1 file.*

**Cara pakai NotebookLM:** Upload **hanya file ini** sebagai satu source. Lalu Studio → Video Overview → Customize → paste prompt komprehensif dari `_PROMPT_VideoOverview_per_TM.md`.

---

## Daftar Isi
- [TM 8 — ANOVA](#tm-8)
- [TM 9 — Regresi & Korelasi (1)](#tm-9)
- [TM 10 — Regresi & Korelasi (2)](#tm-10)
- [TM 11 — Time Series (Analisis Seri Waktu)](#tm-11)
- [TM 12 — Metode Non-Parametrik](#tm-12)
- [TM 13 — Software Statistik & Persiapan Proyek](#tm-13)
- [TM 14 — Presentasi Proyek Akhir](#tm-14)

---

<a id="tm-8"></a>

# TM 8 — ANOVA


*Referensi: DA 12*

ANOVA membandingkan rata-rata **tiga kelompok atau lebih** sekaligus, tanpa menambah risiko error tipe I seperti uji-t berulang.

## 🎯 Tujuan Pembelajaran
- Menjelaskan logika ANOVA satu arah.
- Menafsirkan F-statistic & post hoc.
- Mengecek asumsi ANOVA.

---

## A. Konsep


ANOVA memecah total variasi menjadi variasi **antar kelompok (between)** dan variasi **dalam kelompok (within)**. Jika variasi antar kelompok jauh lebih besar, rata-rata kelompok berbeda nyata.


**📐 Rumus.** `F = Variansi antar kelompok ÷ Variansi dalam kelompok`  
*Catatan: F besar → tolak H₀ (minimal satu rata-rata berbeda).*


- **Factor** = variabel pengelompokan; **Level** = kategori dalam factor.
- **Post hoc** (mis. Tukey) = mengidentifikasi kelompok mana yang berbeda **setelah** F signifikan.
- **Eta squared** = ukuran besar efek (proporsi variasi yang dijelaskan).


## B. Asumsi


- Independensi antar pengamatan.
- Normalitas residual.
- Homogenitas varians (cek **Levene’s Test**); bila dilanggar → alternatif non-parametrik (Kruskal-Wallis).


> **⚠️ Kenapa bukan banyak uji-t?**
> Melakukan uji-t berkali-kali menaikkan peluang error tipe I secara akumulatif. ANOVA mengujinya sekaligus dengan α terkendali.


## Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan


> **🔑 Catatan kurator**
> Bagian di bawah ini menambah materi inti TM 8 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.


## Analisis Varians (ANOVA) Membandingkan rata-rata tiga kelompok atau lebih


Seorang manajer pemasaran ingin membandingkan rata-rata penjualan harian dari tiga strategi promosi: diskon, bundling, dan cashback. Jika hanya dua strategi, uji-t dapat digunakan. Karena kelompoknya tiga, ANOVA lebih tepat karena mampu menguji perbedaan rata-rata beberapa kelompok sekaligus tanpa memperbesar risiko kesalahan akibat uji-t berulang.


- Akuntan manajemen dapat memakai ANOVA untuk membandingkan kinerja beberapa cabang, metode produksi, strategi biaya, atau kategori pelanggan.
- Auditor dapat memakai logika ANOVA untuk melihat apakah waktu penyelesaian audit berbeda antarkelompok klien.
- Analis bisnis dapat membandingkan rata-rata penjualan, biaya, margin, atau produktivitas pada beberapa kelompok.


- Menjelaskan perbedaan variasi antar kelompok dan variasi dalam kelompok.
- Menulis hipotesis ANOVA dengan benar.
- Membaca tabel ANOVA, Levene, dan post hoc pada SPSS.
- Menulis interpretasi hasil ANOVA dalam konteks bisnis.


### Factor


Variabel kelompok yang dibandingkan, misalnya strategi promosi.


### Level


Kategori dalam factor, misalnya diskon, bundling, dan cashback.


### Between groups


Variasi yang muncul karena perbedaan rata-rata antar kelompok.


### Within groups


Variasi yang muncul di dalam kelompok yang sama.


### F-statistic


Rasio antara variasi antar kelompok dan variasi dalam kelompok.


### Post hoc


Uji lanjutan untuk mengetahui pasangan kelompok mana yang berbeda.


### Levene’s Test


Uji untuk melihat apakah varians antarkelompok relatif sama.


### Eta squared


Ukuran efek ANOVA yang menunjukkan seberapa besar variasi Y dijelaskan oleh factor.


### Pakai ANOVA


Y berbentuk angka/scale, X berbentuk kategori dengan tiga kelompok atau lebih, dan tujuan analisis adalah membandingkan rata-rata.


### Jangan pakai ANOVA


Y berbentuk kategori, data berasal dari pasangan yang sama tanpa desain repeated measures, atau tujuan analisis adalah memprediksi Y dari X.


### Alternatif


Jika asumsi normalitas/varians sulit dipenuhi dan datanya ordinal atau sangat tidak normal, gunakan Kruskal-Wallis.


Data contoh penjualan harian untuk tiga strategi promosi.


| Strategi | Data Penjualan | Rata-rata |
|---|---|---|
| Diskon | 72, 75, 70, 78, 74 | 73,80 |
| Bundling | 80, 83, 79, 85, 82 | 81,80 |
| Cashback | 68, 70, 65, 69, 66 | 67,60 |


Diskon = 73,80; bundling = 81,80; cashback = 67,60.


Grand mean adalah rata-rata seluruh observasi. Dalam contoh ini, grand mean = 74,40.


Jika rata-rata kelompok jauh dari grand mean, variasi antar kelompok besar.


Jika data di dalam setiap kelompok relatif rapat, variasi dalam kelompok kecil.


Jika variasi antar kelompok jauh lebih besar daripada variasi dalam kelompok, F menjadi besar dan H₀ cenderung ditolak.


H₀: μ₁ = μ₂ = μ₃ H₁: minimal ada satu rata-rata yang berbeda Rumus dasar F = MS_between / MS_within Ukuran efek η² = SS_between / SS_total Asumsi dan Catatan Metode Independensi Observasi tidak saling bergantung. Satu data penjualan tidak boleh berasal dari pengukuran yang sama secara berulang tanpa perlakuan khusus.


### Normalitas residual


Residual pada tiap kelompok kira-kira normal. Untuk latihan dasar, cek histogram/Q-Q plot atau Explore di SPSS.


### Homogenitas varians


Varians antar kelompok relatif sama. Cek melalui Levene’s Test.


- Menganggap ANOVA signifikan berarti semua kelompok pasti berbeda.
- Tidak membaca Levene’s Test sebelum memilih post hoc.
- Memakai banyak uji-t untuk tiga kelompok atau lebih tanpa koreksi.
- Hanya menulis p-value tanpa menjelaskan makna bisnis.


1. Buat variabel penjualan sebagai Scale dan strategi sebagai Nominal.
2. Masukkan kode strategi, misalnya 1 = Diskon, 2 = Bundling, 3 = Cashback.
3. Klik Analyze → Compare Means → One-Way ANOVA.
4. Pindahkan penjualan ke Dependent List dan strategi ke Factor.
5. Klik Options, centang Descriptive dan Homogeneity of variance test.
6. Klik Post Hoc. Pilih Tukey jika Levene Sig. ≥ 0,05; pilih Games-Howell jika Levene Sig. < 0,05.
7. Baca tabel Descriptives, Test of Homogeneity, ANOVA, dan Multiple Comparisons.


1. Aktifkan Analysis ToolPak melalui File → Options → Add-ins.
2. Susun data per kelompok dalam kolom berbeda.
3. Klik Data → Data Analysis → ANOVA: Single Factor.
4. Masukkan Input Range, pilih Grouped By: Columns, dan Alpha = 0,05.
5. Baca F, P-value, dan F crit pada output.


### Descriptives


Lihat mean tiap kelompok untuk mengetahui kelompok yang paling tinggi atau rendah.


### Levene


Jika Sig. ≥ 0,05, asumsi homogenitas varians tidak bermasalah secara praktis.


### ANOVA


Jika Sig. < 0,05, terdapat perbedaan rata-rata minimal pada satu kelompok.


### Post Hoc


Jika Sig. pasangan kelompok < 0,05, dua kelompok tersebut berbeda signifikan.


Pembahasan: ANOVA menguji beberapa rata-rata sekaligus sehingga risiko kesalahan Type I tidak membesar seperti ketika melakukan uji-t berulang.


Pembahasan: Rata-rata A = 13,50; B = 20,50; C = 16,50. Cabang B tertinggi. ANOVA relevan karena Y adalah laba numerik dan X adalah cabang dengan tiga kelompok.


Pembahasan: Y = skor kepuasan pelanggan; factor = kanal layanan. H₀: rata-rata kepuasan semua kanal sama. H₁: minimal ada satu rata-rata kanal yang berbeda.



---

<a id="tm-9"></a>

# TM 9 — Regresi & Korelasi (1)


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



---

<a id="tm-10"></a>

# TM 10 — Regresi & Korelasi (2)


*Referensi: DA 13 · AA 15*

Menilai seberapa baik model regresi dan memperkenalkan regresi berganda.

## 🎯 Tujuan Pembelajaran
- Menafsirkan koefisien determinasi R².
- Menguji signifikansi regresi.
- Mengenal regresi linear berganda.

---

## A. Kualitas Model


**📐 Rumus.** `R² = proporsi variasi Y yang dijelaskan oleh X`  
*Catatan: 0–1; makin dekat 1 makin baik. R² = 0,8 → 80% variasi Y dijelaskan model.*


- **Uji-t/uji-F** menilai apakah hubungan signifikan secara statistik (p-value < α).
- **Analisis residual** mengecek asumsi (linearitas, normalitas, homoskedastisitas).


## B. Regresi Linear Berganda


**📐 Rumus.** `Ŷ = a + b₁X₁ + b₂X₂ + … + bₖXₖ`  
*Catatan: Beberapa prediktor sekaligus; gunakan Adjusted R² untuk membandingkan model.*


> **⚠️ Multikolinearitas**
> Jika antar-prediktor sangat berkorelasi, koefisien menjadi tidak stabil. Periksa dengan VIF.


## Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan


> **🔑 Catatan kurator**
> Bagian di bawah ini menambah materi inti TM 10 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.


## Regresi dan Korelasi Bagian 2 Evaluasi model, residual, asumsi, dan prediksi


Setelah memperoleh persamaan regresi, analis tidak boleh berhenti pada p-value. Model perlu diperiksa dari sisi kelayakan, residual, asumsi, potensi outlier, dan batas penggunaan prediksi. Week 10 berfokus pada cara membaca model secara kritis.


- Dalam analisis keuangan, model prediksi yang tampak signifikan dapat menyesatkan jika residualnya bermasalah.
- Dalam audit, pola residual dapat menunjukkan bahwa hubungan variabel tidak linier atau ada observasi ekstrem.
- Dalam akuntansi manajemen, model biaya yang buruk dapat menghasilkan keputusan anggaran yang salah.


- Membaca Model Summary, ANOVA, Coefficients, dan residual plot.
- Menjelaskan asumsi regresi dalam bahasa sederhana.
- Membedakan signifikansi statistik dan kelayakan praktis model.
- Menjelaskan risiko extrapolation dan overinterpretation.


### Residual


Selisih antara nilai aktual dan nilai prediksi.


### Homoskedastisitas


Kondisi ketika sebaran residual relatif konstan.


### Heteroskedastisitas


Kondisi ketika sebaran residual makin melebar atau mengecil.


### P-P Plot


Grafik untuk melihat apakah residual mendekati normal.


### Durbin-Watson


Indikator autokorelasi residual, terutama untuk data runtut waktu.


### VIF


Indikator multikolinearitas dalam regresi berganda.


### Extrapolation


Prediksi di luar rentang data yang diamati.


### Adjusted R²


R² yang disesuaikan dengan jumlah prediktor.


### Lakukan evaluasi model


Setiap kali menggunakan regresi untuk interpretasi atau prediksi.


### Hati-hati


Jika data runtut waktu, outlier ekstrem, atau jumlah observasi kecil.


### Perlu model lain


Jika scatterplot melengkung, residual berpola, atau prediksi jauh meleset.


Data lanjutan dari Week 9 digunakan untuk menyimpan predicted value dan residual.


| Bulan | Y Aktual | Ŷ Prediksi | Residual |
|---|---|---|---|
| 1 | 110 | 110,77 | -0,77 |
| 2 | 125 | 122,31 | 2,69 |
| 3 | 130 | 133,85 | -3,85 |
| 4 | 145 | 145,39 | -0,39 |
| 5 | 160 | 156,93 | 3,07 |
| 6 | 168 | 168,47 | -0,47 |
| 7 | 181 | 180,01 | 0,99 |
| 8 | 190 | 191,55 | -1,55 |


Masukkan nilai X ke persamaan regresi.


Residual = Y aktual − Ŷ prediksi.


Residual seharusnya menyebar acak, bukan membentuk pola.


Gunakan histogram atau P-P Plot residual.


Model signifikan tetap harus masuk akal secara bisnis.


e = Y − Ŷ Regresi berganda Ŷ = a + b₁X₁ + b₂X₂ + ... + bkXk VIF VIF tinggi menunjukkan prediktor saling tumpang tindih kuat Asumsi dan Catatan Metode Linearitas Hubungan prediktor dan Y sebaiknya linier.


### Independensi residual


Residual antarobservasi tidak saling memengaruhi.


### Homoskedastisitas


Sebaran residual relatif stabil.


### Normalitas residual


Residual mendekati normal untuk inferensi koefisien.


### Tidak ada multikolinearitas berat


Khusus regresi berganda.


- Hanya melihat Sig. tanpa memeriksa residual.
- Menganggap R² tinggi selalu berarti model terbaik.
- Memakai model untuk prediksi jauh di luar rentang data.
- Mengabaikan multikolinearitas pada regresi berganda.


1. Analyze → Regression → Linear.
2. Klik Statistics: centang Estimates, Model fit, Confidence intervals, Collinearity diagnostics jika regresi berganda.
3. Klik Plots: masukkan ZPRED ke X dan ZRESID ke Y.
4. Klik Save: centang Unstandardized Predicted Values dan Unstandardized Residuals.
5. Gunakan Graphs atau Explore untuk melihat histogram/P-P Plot residual.
6. Baca apakah residual menyebar acak.


1. Gunakan Data Analysis → Regression.
2. Centang Residuals dan Residual Plots jika tersedia.
3. Buat kolom Ŷ secara manual menggunakan persamaan regresi.
4. Buat kolom residual = Y aktual − Ŷ.
5. Buat scatterplot residual terhadap predicted value.


### Model Summary


R² dan Adjusted R² menunjukkan daya jelas model.


### ANOVA


F dan Sig. menunjukkan kelayakan model secara keseluruhan.


### Coefficients


B menunjukkan arah dan besar hubungan tiap X.


### Residual plot


Pola acak lebih baik daripada pola kipas atau lengkung.


### Collinearity diagnostics


VIF dipakai jika terdapat lebih dari satu X.


Pembahasan: Residual menunjukkan pola kesalahan prediksi. Jika residual berpola, model mungkin tidak sesuai.


Pembahasan: Residual = 150 − 143 = 7.


Pembahasan: Itu extrapolation. Model dipaksa bekerja di luar wilayah data yang diamati sehingga prediksi dapat menyesatkan.



---

<a id="tm-11"></a>

# TM 11 — Time Series (Analisis Seri Waktu)


*Referensi: DA 18*

Data deret waktu (penjualan bulanan, harga saham) dianalisis untuk mengenali pola dan **meramalkan** masa depan.

## 🎯 Tujuan Pembelajaran
- Mengidentifikasi komponen deret waktu.
- Menerapkan rata-rata bergerak.
- Mengenal model ARIMA.

---

## A. Komponen Deret Waktu


- **Trend (T):** arah jangka panjang.
- **Seasonal (S):** pola berulang musiman.
- **Cyclical (C):** fluktuasi siklus bisnis.
- **Irregular (I):** acak/tak terduga.


## B. Metode Peramalan


- **Moving average (rata-rata bergerak):** menghaluskan fluktuasi.
- **Exponential smoothing:** memberi bobot lebih pada data terbaru.
- **ARIMA:** model gabungan AutoRegressive + Integrated + Moving Average untuk data yang sudah stasioner.


> **💡 Stasioneritas**
> Sebelum ARIMA, data sering perlu dibuat **stasioner** (rata-rata & varians stabil) lewat differencing.


## Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan


> **🔑 Catatan kurator**
> Bagian di bawah ini menambah materi inti TM 11 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.


## Analisis Seri Waktu dan ARIMA Membaca pola historis dan membuat peramalan


Perusahaan memiliki data penjualan bulanan. Manajemen membutuhkan proyeksi untuk menentukan pembelian persediaan, target kas, dan rencana promosi. Karena datanya berurutan menurut waktu, analisis seri waktu lebih tepat daripada analisis cross-section biasa.


- Akuntan manajemen menggunakan forecast untuk anggaran penjualan dan produksi.
- Manajer keuangan memakai forecast untuk proyeksi arus kas.
- Auditor dapat memakai pola historis untuk menilai kewajaran tren akun tertentu.


- Membedakan trend, seasonal, cyclical, dan irregular component.
- Menghitung moving average sederhana.
- Menjelaskan ARIMA(p,d,q) secara konseptual.
- Membaca hasil forecast dan keterbatasannya.


### Time series


Data yang dicatat berurutan menurut waktu.


### Trend


Arah jangka panjang data, misalnya naik atau turun.


### Seasonality


Pola berulang pada periode tetap, misalnya bulanan atau kuartalan.


### Cyclical


Pola naik-turun jangka panjang akibat siklus ekonomi.


### Irregular


Gangguan acak atau kejadian tidak biasa.


### Moving average


Rata-rata beberapa periode terakhir untuk menghaluskan fluktuasi.


### Forecast error


Selisih antara nilai aktual dan nilai ramalan.


### ARIMA


Model runtut waktu dengan komponen autoregressive, differencing, dan moving average.


### Pakai seri waktu


Data memiliki urutan waktu dan tujuan analisis adalah membaca pola atau meramalkan nilai mendatang.


### Jangan acak data


Urutan waktu tidak boleh diacak karena urutan adalah informasi.


### Hati-hati


Data yang terlalu pendek kurang stabil untuk ARIMA.


Data penjualan bulanan selama satu tahun.


| Bulan | Penjualan | MA 3 Bulan untuk Periode Berikutnya |
|---|---|---|
| Jan | 120 | - |
| Feb | 125 | - |
| Mar | 130 | - |
| Apr | 138 | 125,00 |
| Mei | 145 | 131,00 |
| Jun | 150 | 137,67 |
| Jul | 158 | 144,33 |
| Agu | 162 | 151,00 |
| Sep | 170 | 156,67 |
| Okt | 175 | 163,33 |
| Nov | 188 | 169,00 |
| Des | 200 | 177,67 |


Lihat apakah data naik, turun, atau berulang.


Dalam contoh, penjualan cenderung naik.


Rata-rata 3 bulan membantu menghaluskan fluktuasi.


Bandingkan nilai aktual dengan nilai ramalan.


Jika data panjang dan pola kompleks, model ARIMA dapat dipertimbangkan.


MA₃ = (Yt + Yt−1 + Yt−2) / 3 Trend linear Ŷt = a + bt Forecast error Error = Actual − Forecast ARIMA ARIMA(p,d,q) Asumsi dan Catatan Metode Urutan waktu benar Data harus disusun dari periode paling awal ke paling akhir.


### Pola historis relevan


Forecast mengasumsikan pola masa lalu masih berguna.


### Outlier diperiksa


Shock luar biasa dapat merusak pola forecast.


- Mengacak data waktu sebelum analisis.
- Memakai ARIMA pada data yang terlalu pendek.
- Mengabaikan pola musiman.
- Menganggap forecast sebagai kepastian, bukan estimasi dengan ketidakpastian.


1. Masukkan variabel waktu dan variabel nilai, misalnya penjualan.
2. Pastikan data diurutkan berdasarkan waktu.
3. Gunakan Data → Define Dates jika periode waktu perlu didefinisikan.
4. Analyze → Forecasting → Create Traditional Models.
5. Pilih target penjualan dan gunakan Expert Modeler untuk pemula.
6. Baca plot actual vs fitted, forecast, confidence interval, dan residual.


1. Gunakan =AVERAGE(B2:B4) untuk moving average 3 periode.
2. Gunakan =FORECAST.LINEAR(periode_target, known_y, known_x) untuk trend linear.
3. Gunakan Data → Forecast Sheet untuk membuat grafik forecast.
4. Hitung error = aktual − forecast.


### Time plot


Menunjukkan trend dan kemungkinan pola musiman.


### Forecast table


Menunjukkan nilai ramalan periode mendatang.


### Confidence interval


Rentang ketidakpastian prediksi.


### Residual/error


Mengukur selisih aktual dan ramalan.


### Model fit


Ukuran seperti RMSE/MAPE membantu membandingkan model.


Pembahasan: Karena urutan waktu adalah bagian dari informasi. Mengacak data akan merusak pola trend atau seasonal.


Pembahasan: MA₃ = (100 + 110 + 120)/3 = 110 sebagai forecast untuk periode berikutnya setelah tiga data pertama.


Pembahasan: Penjualan bulanan, arus kas, beban operasional, piutang, persediaan, atau rasio keuangan tahunan.



---

<a id="tm-12"></a>

# TM 12 — Metode Non-Parametrik


*Referensi: DA 16*

Saat asumsi normalitas tidak terpenuhi atau data berskala ordinal/nominal, uji non-parametrik menjadi alternatif yang valid.

## 🎯 Tujuan Pembelajaran
- Mengetahui kapan memakai uji non-parametrik.
- Mencocokkan uji non-parametrik dengan padanan parametriknya.
- Menerapkan uji chi-square.

---

## A. Kapan Dipakai?


Saat data tidak normal, sampel kecil, atau berskala **ordinal/nominal**. Uji ini berbasis peringkat/frekuensi, bukan nilai aktual.


| Parametrik | Padanan Non-parametrik |
|---|---|
| Uji-t satu sampel | Uji tanda / Wilcoxon signed-rank |
| Uji-t independen | Mann-Whitney U |
| ANOVA satu arah | Kruskal-Wallis |
| Korelasi Pearson | Korelasi Spearman |


## B. Uji Chi-Square


**📐 Rumus.** `χ² = Σ [(O − E)² ÷ E]`  
*Catatan: O = frekuensi observasi, E = frekuensi harapan. Untuk uji kebaikan-suai (goodness of fit) & independensi (tabel kontingensi).*


> **ℹ️ Trade-off**
> Uji non-parametrik lebih fleksibel tetapi umumnya **kurang kuat (lower power)** dibanding parametrik bila asumsi parametrik sebenarnya terpenuhi.


## Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan


> **🔑 Catatan kurator**
> Bagian di bawah ini menambah materi inti TM 12 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.


## Metode Non-parametrik Alternatif ketika data tidak cocok untuk uji parametrik


Tidak semua data bisnis berbentuk angka rasio yang normal. Opini audit, tingkat kepuasan, ranking risiko, atau data kecil yang sangat miring membutuhkan metode non-parametrik. Metode ini sering berbasis frekuensi atau ranking, bukan rata-rata dan varians.


- Survei akuntansi sering memakai skala Likert yang lebih aman dibaca sebagai ordinal.
- Audit dan tata kelola sering memakai kategori seperti WTP/non-WTP, tepat waktu/terlambat.
- Data kecil atau tidak normal dapat membuat uji parametrik kurang tepat.


- Memilih chi-square, Mann-Whitney, Wilcoxon, Kruskal-Wallis, atau Spearman.
- Membedakan data kategorik, ordinal, dan numerik tidak normal.
- Membaca output non-parametrik SPSS.
- Menulis interpretasi berbasis ranking atau frekuensi.


### Non-parametrik


Metode yang tidak terlalu bergantung pada asumsi distribusi normal.


### Rank


Urutan nilai setelah data diberi peringkat.


### Chi-square


Uji untuk hubungan atau kecocokan frekuensi data kategorik.


### Mann-Whitney U


Uji dua kelompok independen berbasis ranking.


### Wilcoxon Signed-Rank


Uji dua pengukuran berpasangan berbasis ranking.


### Kruskal-Wallis


Uji tiga kelompok atau lebih berbasis ranking.


### Spearman rho


Korelasi berbasis ranking.


### Expected count


Frekuensi yang diharapkan dalam chi-square jika H₀ benar.


### Pakai chi-square


Kedua variabel berbentuk kategori.


### Pakai Mann-Whitney


Dua kelompok independen dan Y ordinal/tidak normal.


### Pakai Wilcoxon


Dua pengukuran berpasangan dan data ordinal/tidak normal.


### Pakai Kruskal-Wallis


Tiga kelompok atau lebih dan Y ordinal/tidak normal.


### Pakai Spearman


Ingin mengukur hubungan dua variabel ordinal/ranking.


Contoh data kategorik: opini audit dan ketepatan waktu pelaporan.


| Opini Audit | Tepat Waktu | Terlambat | Total |
|---|---|---|---|
| WTP | 42 | 8 | 50 |
| Non-WTP | 18 | 22 | 40 |
| Total | 60 | 30 | 90 |


Baris = opini audit, kolom = ketepatan waktu.


Expected = total baris × total kolom / grand total.


Jika selisih besar, chi-square cenderung besar.


Jika p-value < 0,05, terdapat hubungan signifikan.


Persentase membantu menjelaskan arah pola kategori.


χ² = Σ((O − E)² / E) Expected count E = (total baris × total kolom) / grand total Spearman ρ mengukur hubungan berbasis ranking Asumsi dan Catatan Metode Data frekuensi Chi-square memakai hitungan kasus, bukan rata-rata.


### Independensi observasi


Satu observasi tidak boleh dihitung berulang dalam beberapa sel.


### Expected count memadai


Jika expected count terlalu kecil, Fisher Exact Test dapat dipertimbangkan.


- Memakai ANOVA untuk data Y yang sebenarnya ordinal/kategorik tanpa pertimbangan.
- Menafsirkan Mann-Whitney sebagai perbandingan mean murni.
- Tidak memakai Weight Cases pada SPSS ketika data berupa frekuensi rekap.
- Tidak memeriksa expected count pada chi-square.


1. Untuk chi-square: buat variabel kategori dan frekuensi jika data sudah berupa rekap.
2. Gunakan Data → Weight Cases jika memakai data frekuensi.
3. Analyze → Descriptive Statistics → Crosstabs.
4. Row = variabel pertama, Column = variabel kedua.
5. Statistics → centang Chi-square.
6. Cells → centang Observed, Expected, Row %, dan Column %.
7. Untuk Mann-Whitney/Wilcoxon/Kruskal-Wallis: Analyze → Nonparametric Tests → Legacy Dialogs.


1. Susun observed table.
2. Hitung expected count pada tabel baru.
3. Gunakan =CHISQ.TEST(observed_range, expected_range).
4. Untuk ranking, gunakan =RANK.AVG() sebagai latihan manual.


### Crosstab


Menunjukkan frekuensi dan persentase kategori.


### Pearson Chi-Square


Menunjukkan nilai χ² dan Sig.


### Expected count


Mengecek kelayakan chi-square.


### Ranks table


Pada Mann-Whitney/Kruskal-Wallis, menunjukkan mean rank tiap kelompok.


### Test Statistics


Menunjukkan p-value uji non-parametrik.


Pembahasan: Chi-square lebih tepat jika kedua variabel berbentuk kategorik.


Pembahasan: E = 50×60/90 = 33,33.


Pembahasan: Kruskal-Wallis, karena terdapat tiga kelompok independen dan Y berupa skor ordinal.



---

<a id="tm-13"></a>

# TM 13 — Software Statistik & Persiapan Proyek


*Referensi: AA 16*

Analisis modern memakai perangkat lunak. Bagian ini menyiapkan alur kerja analisis data untuk proyek akhir.

## 🎯 Tujuan Pembelajaran
- Mengenal perangkat lunak statistik umum.
- Memahami alur kerja analisis data.
- Menyiapkan proyek akhir.

---

## A. Perangkat Lunak


- **Excel:** analisis dasar, PivotTable, Data Analysis ToolPak.
- **SPSS:** populer untuk uji statistik bermenu (deskriptif, t-test, ANOVA, regresi).
- **R / Python:** fleksibel & gratis untuk analisis lanjutan & otomasi.


## B. Alur Kerja Analisis


1. Rumuskan pertanyaan & hipotesis penelitian.
2. Kumpulkan & bersihkan data (data cleaning).
3. Eksplorasi (statistik deskriptif & visualisasi).
4. Pilih & jalankan uji yang sesuai.
5. Tafsirkan hasil & tarik kesimpulan.
6. Sajikan temuan secara jujur & jelas.


> **💡 Peta memilih metode**
> Tentukan: (1) tujuan (deskripsi/hubungan/perbedaan/prediksi), (2) jumlah & skala variabel, (3) asumsi terpenuhi atau tidak → barulah pilih uji.


## Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan


> **🔑 Catatan kurator**
> Bagian di bawah ini menambah materi inti TM 13 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.


## Penggunaan Perangkat Lunak Statistik SPSS dan Excel dari data mentah sampai interpretasi


Mahasiswa sering langsung membuka menu analisis tanpa menyiapkan struktur data. Week 13 menekankan workflow: data dictionary, input data, screening, analisis deskriptif, uji utama, output, interpretasi, dan dokumentasi.


- Software mempercepat perhitungan, tetapi tidak menggantikan pemahaman metode.
- Kesalahan coding variabel dapat membuat output statistik salah.
- Laporan yang baik membutuhkan narasi, bukan screenshot mentah.


- Membedakan Data View, Variable View, dan Output Viewer.
- Menyusun data dictionary sederhana.
- Menjalankan menu SPSS untuk ANOVA, regresi, chi-square, dan non-parametrik.
- Menulis interpretasi berdasarkan output software.


### Data View


Tempat memasukkan data mentah di SPSS.


### Variable View


Tempat mendefinisikan nama, label, tipe, value label, missing, dan measure.


### Value Labels


Keterangan kode kategori, misalnya 1=WTP, 0=Non-WTP.


### Missing Values


Kode untuk data hilang agar tidak dihitung sebagai data valid.


### Measure


Skala pengukuran di SPSS: Nominal, Ordinal, atau Scale.


### Weight Cases


Fitur untuk data yang sudah berupa frekuensi rekap.


### Output Viewer


Jendela hasil analisis SPSS.


### Syntax


Perintah tertulis SPSS yang dapat mereplikasi analisis.


### Gunakan SPSS


Ketika analisis membutuhkan output statistik lengkap, asumsi, post hoc, atau non-parametrik.


### Gunakan Excel


Ketika latihan hitung, visualisasi sederhana, atau analisis dasar seperti korelasi/regresi sederhana.


### Gunakan syntax


Ketika analisis perlu direplikasi secara konsisten.


Contoh struktur data proyek akuntansi.


| Name | Label | Measure | Value Labels |
|---|---|---|---|
| company_id | Kode perusahaan | Nominal | - |
| sector | Sektor industri | Nominal | 1=Manufaktur; 2=Jasa; 3=Keuangan |
| sales_growth | Pertumbuhan penjualan | Scale | - |
| profit_margin | Margin laba | Scale | - |
| audit_opinion | Opini audit | Nominal | 1=WTP; 0=Non-WTP |
| timely_report | Ketepatan waktu pelaporan | Nominal | 1=Tepat waktu; 0=Terlambat |
| audit_delay | Audit delay dalam hari | Scale | - |


Jangan mulai dari menu SPSS; mulai dari masalah riset.


Tentukan nama, label, skala, dan kode kategori.


Pastikan satu baris adalah satu observasi.


Cek missing, outlier, dan salah kode.


Baca output sesuai metode dan tulis narasi hasil.


Masalah → Data → Metode → Output → Interpretasi → Keputusan Struktur data 1 baris = 1 observasi 1 kolom = 1 variabel Asumsi dan Catatan Metode Coding konsisten Kode kategori harus sama di seluruh data.


### Skala benar


Measure harus sesuai: nominal, ordinal, atau scale.


### Data bersih


Salah input dan missing harus diperiksa sebelum analisis.


- Mengisi kode kategori tetapi tidak membuat Value Labels.
- Menganggap semua variabel sebagai Scale.
- Tidak memeriksa missing value.
- Menempel output mentah tanpa interpretasi.
- Memilih metode dari menu tanpa memahami desain data.


1. Isi Variable View terlebih dahulu.
2. Masukkan data pada Data View.
3. Untuk deskriptif: Analyze → Descriptive Statistics → Frequencies/Descriptives/Explore.
4. Untuk ANOVA: Analyze → Compare Means → One-Way ANOVA.
5. Untuk korelasi: Analyze → Correlate → Bivariate.
6. Untuk regresi: Analyze → Regression → Linear.
7. Untuk chi-square: Analyze → Descriptive Statistics → Crosstabs.
8. Untuk non-parametrik: Analyze → Nonparametric Tests → Legacy Dialogs.


1. Gunakan tabel data rapi dengan header variabel di baris pertama.
2. Aktifkan Analysis ToolPak.
3. Gunakan PivotTable untuk crosstab dan deskriptif cepat.
4. Gunakan Data Analysis untuk Regression dan ANOVA.
5. Gunakan grafik untuk scatterplot dan time plot.


### Frequencies


Cocok untuk nominal/ordinal.


### Descriptives


Cocok untuk scale.


### Explore


Cocok untuk cek normalitas dan boxplot.


### Crosstabs


Cocok untuk hubungan kategori.


### Regression output


Cocok untuk model prediksi.


Pembahasan: Data View berisi data mentah, sedangkan Variable View mendefinisikan struktur variabel.


Pembahasan: audit_opinion = Nominal dengan label 1=WTP, 0=Non-WTP; audit_delay = Scale; firm_size = Scale.


Pembahasan: Gunakan Weight Cases agar SPSS membaca frekuensi rekap sebagai jumlah kasus.



---

<a id="tm-14"></a>

# TM 14 — Presentasi Proyek Akhir


*Referensi: —*

Analisis yang baik harus dikomunikasikan dengan baik. TM ini menutup mata kuliah dengan keterampilan menyajikan hasil statistik.

## 🎯 Tujuan Pembelajaran
- Menyusun laporan analisis yang runtut.
- Memvisualisasikan data secara efektif.
- Menyampaikan kesimpulan berbasis bukti.

---

## A. Struktur Laporan/Presentasi


1. Latar belakang & pertanyaan penelitian.
2. Data & metode (uji yang dipakai + alasannya).
3. Hasil (tabel/grafik yang relevan, nilai uji & p-value).
4. Interpretasi & keterbatasan.
5. Kesimpulan & rekomendasi.


## B. Prinsip Visualisasi


- Pilih grafik sesuai tujuan (bar untuk kategori, garis untuk tren, scatter untuk hubungan).
- Jangan menyesatkan (skala sumbu jujur, hindari grafik 3D yang membingungkan).
- Sorot temuan utama, bukan membanjiri angka.


> **🔑 Etika data**
> Sajikan hasil apa adanya — termasuk yang tidak signifikan. Memanipulasi atau "cherry-picking" data melanggar integritas (bersinggungan dengan mata kuliah Etika).


## Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan


> **🔑 Catatan kurator**
> Bagian di bawah ini menambah materi inti TM 14 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.


## Presentasi Proyek Akhir Mengubah analisis statistik menjadi argumen bisnis


Proyek akhir tidak hanya menilai kemampuan menghitung, tetapi kemampuan menyusun masalah, memilih data, menentukan metode, membaca hasil, dan menyajikan implikasi bisnis atau akuntansi secara jelas.


- Dalam dunia kerja, hasil statistik harus diterjemahkan menjadi keputusan.
- PPT dan laporan melatih kemampuan komunikasi analitis.
- Proyek akhir menguji integrasi seluruh materi: deskriptif, inferensial, software, dan interpretasi.


- Menyusun judul, rumusan masalah, hipotesis, dan metode yang konsisten.
- Menjelaskan data dan definisi operasional variabel.
- Menyajikan output statistik secara ringkas dan informatif.
- Menulis kesimpulan, keterbatasan, dan rekomendasi.


### Rumusan masalah


Pertanyaan utama yang ingin dijawab dengan data.


### Hipotesis


Dugaan statistik yang diuji.


### Definisi operasional


Penjelasan cara variabel diukur.


### Metode analisis


Teknik statistik yang dipakai.


### Temuan


Hasil utama dari analisis.


### Implikasi


Makna hasil bagi keputusan bisnis/akuntansi.


### Keterbatasan


Batas data, metode, atau interpretasi.


### Rekomendasi


Saran tindakan berdasarkan hasil.


### Pilih ANOVA


Jika proyek membandingkan rata-rata beberapa kelompok.


### Pilih regresi


Jika proyek menguji hubungan/pengaruh X terhadap Y numerik.


### Pilih chi-square


Jika proyek menguji hubungan dua variabel kategorik.


### Pilih time series


Jika proyek memprediksi nilai berdasarkan data historis.


Contoh rancangan proyek akhir.


| Elemen | Contoh |
|---|---|
| Judul | Pengaruh Pertumbuhan Penjualan terhadap Profit Margin Perusahaan Ritel |
| Y | Profit margin |
| X | Pertumbuhan penjualan |
| Data | Laporan keuangan perusahaan ritel periode tertentu |
| Metode | Regresi linier sederhana |
| Pertanyaan | Apakah pertumbuhan penjualan berhubungan dengan profit margin? |


Mulai dari fenomena bisnis atau akuntansi.


Pastikan variabel dapat diukur.


Metode harus sesuai dengan jenis data dan pertanyaan.


Gunakan SPSS/Excel dengan prosedur yang benar.


Jelaskan hasil, makna, keterbatasan, dan rekomendasi.


Fenomena → Data → Metode → Hasil → Makna → Rekomendasi Struktur kesimpulan Jawaban rumusan masalah + implikasi + keterbatasan Asumsi dan Catatan Metode Konsistensi Judul, variabel, hipotesis, metode, dan hasil harus selaras.


### Keterlacakan data


Sumber data harus jelas.


### Proporsionalitas


Kesimpulan tidak boleh lebih luas daripada data.


- Judul tidak sesuai dengan metode.
- Variabel tidak dijelaskan secara operasional.
- Hanya menampilkan screenshot SPSS tanpa interpretasi.
- Kesimpulan terlalu luas dibanding data.
- Tidak menyebut keterbatasan.


1. Simpan file data dan output SPSS dengan nama yang rapi.
2. Gunakan tabel output ringkas untuk presentasi.
3. Jangan menampilkan semua output mentah di slide.
4. Ambil angka kunci: mean, SD, F/t/χ², p-value, R², atau mean rank.
5. Gunakan grafik jika membantu pembaca memahami pola.
6. Sediakan lampiran output lengkap jika diminta.


1. Gunakan Excel untuk cleaning data awal, tabel ringkas, dan grafik.
2. Gunakan PivotTable untuk ringkasan kategori.
3. Gunakan chart yang sederhana dan tidak berlebihan.
4. Pastikan angka di Excel konsisten dengan output SPSS.


### Slide 1


Judul, anggota, kelas, dan objek.


### Slide 2


Latar belakang dan masalah bisnis.


### Slide 3


Rumusan masalah dan hipotesis.


### Slide 4


Data, variabel, dan definisi operasional.


### Slide 5


Metode dan alasan pemilihan metode.


### Slide 6


Statistik deskriptif.


### Slide 7


Hasil uji utama.


### Slide 8


Interpretasi bisnis/akuntansi.


### Slide 9


Keterbatasan.


### Slide 10


Kesimpulan dan rekomendasi.


Pembahasan: Karena metode statistik adalah alat untuk menjawab rumusan masalah. Jika tidak selaras, hasil analisis tidak menjawab pertanyaan.


Pembahasan: Contoh: Hubungan Opini Audit dan Ketepatan Waktu Pelaporan Keuangan.


Pembahasan: Tulis bahwa data tidak memberikan bukti statistik yang cukup untuk menyatakan adanya hubungan/pengaruh, lalu jelaskan keterbatasan dan kemungkinan faktor lain.



---
