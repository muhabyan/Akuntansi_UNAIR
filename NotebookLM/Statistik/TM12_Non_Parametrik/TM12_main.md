# TM 12 — Metode Non-parametrik

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
