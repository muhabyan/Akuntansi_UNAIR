# Metode Non-parametrik

Saat asumsi normalitas tidak terpenuhi atau data berskala ordinal/nominal, uji non-parametrik menjadi alternatif yang valid.

A. Kapan Dipakai?

Saat data tidak normal, sampel kecil, atau berskala **ordinal/nominal**. Uji ini berbasis peringkat/frekuensi, bukan nilai aktual.

Parametrik | Padanan Non-parametrik

Uji-t satu sampel | Uji tanda / Wilcoxon signed-rank

Uji-t independen | Mann-Whitney U

ANOVA satu arah | Kruskal-Wallis

Korelasi Pearson | Korelasi Spearman

B. Uji Chi-Square

χ² = Σ [(O − E)² ÷ E]

O = frekuensi observasi, E = frekuensi harapan. Untuk uji kebaikan-suai (goodness of fit) & independensi (tabel kontingensi).

Trade-off

Uji non-parametrik lebih fleksibel tetapi umumnya **kurang kuat (lower power)** dibanding parametrik bila asumsi parametrik sebenarnya terpenuhi.

Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan

Catatan kurator

Bagian di bawah ini menambah materi inti TM 12 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.

Metode Non-parametrik Alternatif ketika data tidak cocok untuk uji parametrik

Tidak semua data bisnis berbentuk angka rasio yang normal. Opini audit, tingkat kepuasan, ranking risiko, atau data kecil yang sangat miring membutuhkan metode non-parametrik. Metode ini sering berbasis frekuensi atau ranking, bukan rata-rata dan varians.

Kapan Memakai Metode Non-parametrik?

Survei akuntansi sering memakai skala Likert yang lebih aman dibaca sebagai ordinal.

Audit dan tata kelola sering memakai kategori seperti WTP/non-WTP, tepat waktu/terlambat.

Data kecil atau tidak normal dapat membuat uji parametrik kurang tepat.

Target Kompetensi

Memilih chi-square, Mann-Whitney, Wilcoxon, Kruskal-Wallis, atau Spearman.

Membedakan data kategorik, ordinal, dan numerik tidak normal.

Membaca output non-parametrik SPSS.

Menulis interpretasi berbasis ranking atau frekuensi.

Non-parametrik

Metode yang tidak terlalu bergantung pada asumsi distribusi normal.

Rank

Urutan nilai setelah data diberi peringkat.

Chi-square

Uji untuk hubungan atau kecocokan frekuensi data kategorik.

Mann-Whitney U

Uji dua kelompok independen berbasis ranking.

Wilcoxon Signed-Rank

Uji dua pengukuran berpasangan berbasis ranking.

Kruskal-Wallis

Uji tiga kelompok atau lebih berbasis ranking.

Spearman rho

Korelasi berbasis ranking.

Expected count

Frekuensi yang diharapkan dalam chi-square jika H₀ benar.

Pakai chi-square

Kedua variabel berbentuk kategori.

Pakai Mann-Whitney

Dua kelompok independen dan Y ordinal/tidak normal.

Pakai Wilcoxon

Dua pengukuran berpasangan dan data ordinal/tidak normal.

Pakai Kruskal-Wallis

Tiga kelompok atau lebih dan Y ordinal/tidak normal.

Pakai Spearman

Ingin mengukur hubungan dua variabel ordinal/ranking.

Contoh data kategorik: opini audit dan ketepatan waktu pelaporan.

Opini Audit | Tepat Waktu | Terlambat | Total

WTP | 42 | 8 | 50

Non-WTP | 18 | 22 | 40

Total | 60 | 30 | 90

Baris = opini audit, kolom = ketepatan waktu.

Expected Count (E) = (Total Baris × Total Kolom) / Grand Total

Frekuensi yang diharapkan jika kedua variabel sama sekali tidak berhubungan. Contoh untuk WTP & Tepat Waktu: (50 × 60) / 90 = 33,33.

χ² = Σ [ (O - E)² / E ]

O = frekuensi observasi aktual, E = expected count. Menjumlahkan proporsi kuadrat selisih O dan E untuk seluruh sel.

Semakin besar selisih aktual vs harapan, nilai chi-square (χ²) cenderung membesar sehingga H₀ (tidak ada hubungan) akan ditolak.

Jika p-value < 0,05, terdapat hubungan signifikan.

Persentase membantu menjelaskan arah pola kategori.

Ringkasan Rumus Chi-Square & Spearman

**Chi-Square (χ²):** Σ((O − E)² / E)
• **Expected Count (E):** (Total Baris × Total Kolom) / Grand Total
• **Spearman Rank (ρ):** Mengukur korelasi untuk data ordinal berbasis peringkat (ranking).

**Asumsi Data Frekuensi:** Uji Chi-Square menggunakan hitungan frekuensi (jumlah kasus), bukan nilai rata-rata (mean).

Independensi observasi

Satu observasi tidak boleh dihitung berulang dalam beberapa sel.

Expected count memadai

Jika expected count terlalu kecil, Fisher Exact Test dapat dipertimbangkan.

Jebakan Ujian & Kesalahan Umum

Memakai ANOVA untuk data Y yang sebenarnya ordinal/kategorik tanpa pertimbangan.

Menafsirkan Mann-Whitney sebagai perbandingan mean murni.

Tidak memakai Weight Cases pada SPSS ketika data berupa frekuensi rekap.

Tidak memeriksa expected count pada chi-square.

Langkah Analisis di SPSS

Untuk chi-square: buat variabel kategori dan frekuensi jika data sudah berupa rekap.

Gunakan Data → Weight Cases jika memakai data frekuensi.

Analyze → Descriptive Statistics → Crosstabs.

Row = variabel pertama, Column = variabel kedua.

Statistics → centang Chi-square.

Cells → centang Observed, Expected, Row %, dan Column %.

Untuk Mann-Whitney/Wilcoxon/Kruskal-Wallis: Analyze → Nonparametric Tests → Legacy Dialogs.

Langkah Analisis di Excel

Susun observed table.

Hitung expected count pada tabel baru.

Gunakan =CHISQ.TEST(observed_range, expected_range).

Untuk ranking, gunakan =RANK.AVG() sebagai latihan manual.

Crosstab

Menunjukkan frekuensi dan persentase kategori.

Pearson Chi-Square

Menunjukkan nilai χ² dan Sig.

Expected count

Mengecek kelayakan chi-square.

Ranks table

Pada Mann-Whitney/Kruskal-Wallis, menunjukkan mean rank tiap kelompok.

Test Statistics

Menunjukkan p-value uji non-parametrik.

Pembahasan: Chi-square lebih tepat jika kedua variabel berbentuk kategorik.

Pembahasan: E = 50×60/90 = 33,33.

Pembahasan: Kruskal-Wallis, karena terdapat tiga kelompok independen dan Y berupa skor ordinal.

## Flashcard

Apa metode nonparametrik?

Metode dengan asumsi distribusi yang berbeda/lebih terbatas dari model parametrik tertentu; tetap mempunyai syarat desain dan data. Rujukan: Lind 17e Ch.15-16, Nonparametric Methods; RPP Statistik PDF 4

Apa goodness-of-fit chi-square?

Membandingkan frekuensi observasi dengan frekuensi ekspektasi model kategori yang ditetapkan. Rujukan: Lind 17e Ch.15-16, Nonparametric Methods; RPP Statistik PDF 4

Apa uji independence chi-square?

Menguji hubungan dua variabel kategori dalam tabel kontingensi, dengan observasi independen. Rujukan: Lind 17e Ch.15-16, Nonparametric Methods; RPP Statistik PDF 4

Apa expected frequency pada tabel kontingensi?

Total baris × total kolom / total sampel, pada hipotesis independensi. Rujukan: Lind 17e Ch.15-16, Nonparametric Methods; RPP Statistik PDF 4

Apa statistik chi-square?

Jumlah (observasi-ekspektasi)^2/ekspektasi pada sel; jangan memakai proporsi tanpa mengubahnya ke frekuensi sesuai model. Rujukan: Lind 17e Ch.15-16, Nonparametric Methods; RPP Statistik PDF 4

Apa yang diuji jika sel ekspektasi kecil?

Periksa kecukupan pendekatan chi-square; pertimbangkan penggabungan bermakna atau uji lain yang sesuai desain. Rujukan: Lind 17e Ch.15-16, Nonparametric Methods; RPP Statistik PDF 4

## Kuis TM terdaftar


