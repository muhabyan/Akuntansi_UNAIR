# TM 8 — Analisis Varians (ANOVA)

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
