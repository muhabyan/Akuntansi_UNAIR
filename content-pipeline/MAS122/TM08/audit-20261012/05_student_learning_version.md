# Analisis Varians (ANOVA)

ANOVA membandingkan rata-rata **tiga kelompok atau lebih** sekaligus, tanpa menambah risiko error tipe I seperti uji-t berulang.

A. Konsep

ANOVA memecah total variasi menjadi variasi **antar kelompok (between)** dan variasi **dalam kelompok (within)**. Jika variasi antar kelompok jauh lebih besar, rata-rata kelompok berbeda nyata.

F = Variansi antar kelompok ÷ Variansi dalam kelompok

Tolak H0 jika F melampaui nilai kritis untuk alpha dan kedua derajat bebas, atau p-value < alpha. F yang terlihat besar belum cukup tanpa aturan keputusan. Rujukan: Lind, Statistical Techniques 17e, Ch. 12, hal. cetak 394-401 (PDF 421-428).

**Factor** = variabel pengelompokan; **Level** = kategori dalam factor.

**Post hoc** (mis. Tukey) = mengidentifikasi kelompok mana yang berbeda **setelah** F signifikan.

**Eta squared** = ukuran besar efek (proporsi variasi yang dijelaskan).

B. Asumsi

Independensi antar pengamatan.

Normalitas residual.

Homogenitas varians (cek **Levene’s Test**); bila dilanggar → alternatif non-parametrik (Kruskal-Wallis).

Kenapa bukan banyak uji-t?

Melakukan uji-t berkali-kali menaikkan peluang error tipe I secara akumulatif. ANOVA mengujinya sekaligus dengan α terkendali.

Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan

Catatan kurator

Bagian di bawah ini menambah materi inti TM 8 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.

Analisis Varians (ANOVA) Membandingkan rata-rata tiga kelompok atau lebih

Seorang manajer pemasaran ingin membandingkan rata-rata penjualan harian dari tiga strategi promosi: diskon, bundling, dan cashback. Jika hanya dua strategi, uji-t dapat digunakan. Karena kelompoknya tiga, ANOVA lebih tepat karena mampu menguji perbedaan rata-rata beberapa kelompok sekaligus tanpa memperbesar risiko kesalahan akibat uji-t berulang.

Contoh Penerapan ANOVA

Akuntan manajemen dapat memakai ANOVA untuk membandingkan kinerja beberapa cabang, metode produksi, strategi biaya, atau kategori pelanggan.

Auditor dapat memakai logika ANOVA untuk melihat apakah waktu penyelesaian audit berbeda antarkelompok klien.

Analis bisnis dapat membandingkan rata-rata penjualan, biaya, margin, atau produktivitas pada beberapa kelompok.

Target Kompetensi

Menjelaskan perbedaan variasi antar kelompok dan variasi dalam kelompok.

Menulis hipotesis ANOVA dengan benar.

Membaca tabel ANOVA, Levene, dan post hoc pada SPSS.

Menulis interpretasi hasil ANOVA dalam konteks bisnis.

Factor

Variabel kelompok yang dibandingkan, misalnya strategi promosi.

Level

Kategori dalam factor, misalnya diskon, bundling, dan cashback.

Between groups

Variasi yang muncul karena perbedaan rata-rata antar kelompok.

Within groups

Variasi yang muncul di dalam kelompok yang sama.

F-statistic

Rasio antara variasi antar kelompok dan variasi dalam kelompok.

Post hoc

Uji lanjutan untuk mengetahui pasangan kelompok mana yang berbeda.

Levene’s Test

Uji untuk melihat apakah varians antarkelompok relatif sama.

Eta squared

Ukuran efek ANOVA yang menunjukkan seberapa besar variasi Y dijelaskan oleh factor.

Pakai ANOVA

Y berbentuk angka/scale, X berbentuk kategori dengan tiga kelompok atau lebih, dan tujuan analisis adalah membandingkan rata-rata.

Jangan pakai ANOVA

Y berbentuk kategori, data berasal dari pasangan yang sama tanpa desain repeated measures, atau tujuan analisis adalah memprediksi Y dari X.

Alternatif

Jika asumsi normalitas/varians sulit dipenuhi dan datanya ordinal atau sangat tidak normal, gunakan Kruskal-Wallis.

Data contoh penjualan harian untuk tiga strategi promosi.

Strategi | Data Penjualan | Rata-rata

Diskon | 72, 75, 70, 78, 74 | 73,80

Bundling | 80, 83, 79, 85, 82 | 81,80

Cashback | 68, 70, 65, 69, 66 | 67,60

Diskon = 73,80; bundling = 81,80; cashback = 67,60.

Grand Mean (x̄_grand) = (Σx) / N

Total seluruh data dibagi total jumlah observasi.

Grand mean adalah rata-rata dari keseluruhan 15 observasi tanpa memandang kelompok. Dalam contoh ini, total penjualan = 1116, N = 15, sehingga grand mean = 1116 / 15 = 74,40.

SS_between = Σ [ n_i × (x̄_i - x̄_grand)² ]

n_i = sampel kelompok i, x̄_i = rata-rata kelompok i, x̄_grand = grand mean. Mengukur seberapa jauh rata-rata kelompok menyimpang dari grand mean.

Jika rata-rata kelompok (misal 81,80 atau 67,60) jaraknya sangat jauh dari grand mean (74,40), maka variasi antar kelompok menjadi besar.

SS_within = Σ (x - x̄_i)²

x = tiap observasi, x̄_i = rata-rata kelompoknya sendiri. Mengukur sebaran data di dalam masing-masing kelompok.

Jika data di dalam setiap kelompok nilainya berdekatan (relatif rapat) dengan rata-rata kelompoknya sendiri, maka variasi dalam kelompok menjadi kecil.

Kesimpulan logikanya: Jika variasi antar kelompok jauh lebih besar daripada variasi dalam kelompok (sinyal > noise), maka statistik F menjadi besar dan H₀ (semua rata-rata sama) cenderung ditolak.

Ringkasan Hipotesis & Rumus ANOVA

**Hipotesis:**
• H₀: μ₁ = μ₂ = μ₃ (Seluruh kelompok memiliki rata-rata yang sama)
• H₁: Minimal ada satu kelompok dengan rata-rata yang berbeda

**Rumus Dasar:**
• F-statistic = MS_between / MS_within
• Ukuran Efek (η²) = SS_between / SS_total

**Asumsi Independensi:** Observasi tidak boleh saling bergantung atau diukur berulang tanpa perlakuan khusus.

Normalitas residual

Residual pada tiap kelompok kira-kira normal. Untuk latihan dasar, cek histogram/Q-Q plot atau Explore di SPSS.

Homogenitas varians

Varians antar kelompok relatif sama. Cek melalui Levene’s Test.

Jebakan Ujian & Kesalahan Umum

Menganggap ANOVA signifikan berarti semua kelompok pasti berbeda.

Tidak membaca Levene’s Test sebelum memilih post hoc.

Memakai banyak uji-t untuk tiga kelompok atau lebih tanpa koreksi.

Hanya menulis p-value tanpa menjelaskan makna bisnis.

Langkah Analisis di SPSS

Buat variabel penjualan sebagai Scale dan strategi sebagai Nominal.

Masukkan kode strategi, misalnya 1 = Diskon, 2 = Bundling, 3 = Cashback.

Klik Analyze → Compare Means → One-Way ANOVA.

Pindahkan penjualan ke Dependent List dan strategi ke Factor.

Klik Options, centang Descriptive dan Homogeneity of variance test.

Klik Post Hoc. Pilih Tukey jika Levene Sig. ≥ 0,05; pilih Games-Howell jika Levene Sig. < 0,05.

Baca tabel Descriptives, Test of Homogeneity, ANOVA, dan Multiple Comparisons.

Langkah Analisis di Excel

Aktifkan Analysis ToolPak melalui File → Options → Add-ins.

Susun data per kelompok dalam kolom berbeda.

Klik Data → Data Analysis → ANOVA: Single Factor.

Masukkan Input Range, pilih Grouped By: Columns, dan Alpha = 0,05.

Baca F, P-value, dan F crit pada output.

Descriptives

Lihat mean tiap kelompok untuk mengetahui kelompok yang paling tinggi atau rendah.

Levene

Jika Sig. ≥ 0,05, asumsi homogenitas varians tidak bermasalah secara praktis.

ANOVA

Jika Sig. < 0,05, terdapat perbedaan rata-rata minimal pada satu kelompok.

Post Hoc

Jika Sig. pasangan kelompok < 0,05, dua kelompok tersebut berbeda signifikan.

Pembahasan: ANOVA menguji beberapa rata-rata sekaligus sehingga risiko kesalahan Type I tidak membesar seperti ketika melakukan uji-t berulang.

Pembahasan: Rata-rata A = 13,50; B = 20,50; C = 16,50. Cabang B tertinggi. ANOVA relevan karena Y adalah laba numerik dan X adalah cabang dengan tiga kelompok.

Pembahasan: Y = skor kepuasan pelanggan; factor = kanal layanan. H₀: rata-rata kepuasan semua kanal sama. H₁: minimal ada satu rata-rata kanal yang berbeda.

## Flashcard

Apa hipotesis ANOVA satu arah?

H0 menyatakan semua rata-rata populasi sama; H1 menyatakan setidaknya satu berbeda, dengan kelompok independen sesuai model. Rujukan: Lind, Statistical Techniques in Business and Economics 17e, Ch.12, hal.394-401 PDF 421-428

Apa statistik F ANOVA?

Mean square antar kelompok / mean square dalam kelompok; keduanya mengukur variabilitas pada basis yang sesuai. Rujukan: Lind, Statistical Techniques in Business and Economics 17e, Ch.12, hal.394-401 PDF 421-428

Kapan H0 ditolak?

Jika F melampaui nilai kritis pada alpha dan derajat bebas yang ditetapkan, atau p-value lebih kecil dari alpha. F besar saja belum cukup. Rujukan: Lind, Statistical Techniques in Business and Economics 17e, Ch.12, hal.394-401 PDF 421-428

Apa df ANOVA?

Antar kelompok k-1; dalam kelompok N-k, dengan k kelompok dan N total observasi. Rujukan: Lind, Statistical Techniques in Business and Economics 17e, Ch.12, hal.394-401 PDF 421-428

Apa asumsi ANOVA?

Independensi observasi, residual normal dalam kelompok dan varians kelompok homogen; periksa desain serta diagnostik. Rujukan: Lind, Statistical Techniques in Business and Economics 17e, Ch.12, hal.394-401 PDF 421-428

Apakah hasil signifikan menunjukkan kelompok mana berbeda?

Tidak langsung. Gunakan perbandingan lanjut yang sesuai dan kendalikan risiko pengujian berganda. Rujukan: Lind, Statistical Techniques in Business and Economics 17e, Ch.12, hal.394-401 PDF 421-428

## Kuis TM terdaftar


