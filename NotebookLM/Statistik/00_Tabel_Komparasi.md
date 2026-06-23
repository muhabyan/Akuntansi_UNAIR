# Tabel Komparasi MAS122 Statistik untuk Akuntan

*Kompilasi semua tabel komparasi dari TM 1–14. Sangat berguna untuk slide ringkasan.*


**Total tabel: 12**


## TM 1 — Pengenalan Statistik dalam Akuntansi & Bisnis


| Istilah | Makna |
|---|---|
| Populasi | Seluruh objek yang diteliti |
| Sampel | Sebagian populasi yang diamati |
| Parameter | Ukuran populasi (μ, σ, p) |
| Statistik | Ukuran sampel (x̄, s, p̂) |


## TM 2 — Statistik Deskriptif — Tendensi Sentral


| Situasi | Ukuran terbaik |
|---|---|
| Data simetris, tanpa outlier | Mean |
| Ada outlier / data miring (skewed) | Median |
| Data kategorik | Modus |


## TM 6 — Uji Hipotesis — Bagian 1 (Mean & Proporsi)


| Keputusan | H₀ benar | H₀ salah |
|---|---|---|
| Tolak H₀ | Error Tipe I (α) | Benar (power) |
| Gagal tolak H₀ | Benar | Error Tipe II (β) |


## TM 7 — Uji Hipotesis — Bagian 2 (Perbedaan Rata-rata)


| Jenis | Contoh | Uji |
|---|---|---|
| Paired (berpasangan) | Sebelum vs sesudah pelatihan pada orang sama | Paired t-test (uji selisih) |
| Independent | Gaji pria vs wanita (kelompok berbeda) | Independent t-test |


## TM 8 — Analisis Varians (ANOVA)


| Strategi | Data Penjualan | Rata-rata |
|---|---|---|
| Diskon | 72, 75, 70, 78, 74 | 73,80 |
| Bundling | 80, 83, 79, 85, 82 | 81,80 |
| Cashback | 68, 70, 65, 69, 66 | 67,60 |


## TM 9 — Regresi & Korelasi — Bagian 1


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


## TM 10 — Regresi & Korelasi — Bagian 2


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


## TM 11 — Analisis Seri Waktu (Time Series)


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


## TM 12 — Metode Non-parametrik


| Parametrik | Padanan Non-parametrik |
|---|---|
| Uji-t satu sampel | Uji tanda / Wilcoxon signed-rank |
| Uji-t independen | Mann-Whitney U |
| ANOVA satu arah | Kruskal-Wallis |
| Korelasi Pearson | Korelasi Spearman |


## TM 12 — Metode Non-parametrik


| Opini Audit | Tepat Waktu | Terlambat | Total |
|---|---|---|---|
| WTP | 42 | 8 | 50 |
| Non-WTP | 18 | 22 | 40 |
| Total | 60 | 30 | 90 |


## TM 13 — Perangkat Lunak Statistik & Persiapan Proyek Akhir


| Name | Label | Measure | Value Labels |
|---|---|---|---|
| company_id | Kode perusahaan | Nominal | - |
| sector | Sektor industri | Nominal | 1=Manufaktur; 2=Jasa; 3=Keuangan |
| sales_growth | Pertumbuhan penjualan | Scale | - |
| profit_margin | Margin laba | Scale | - |
| audit_opinion | Opini audit | Nominal | 1=WTP; 0=Non-WTP |
| timely_report | Ketepatan waktu pelaporan | Nominal | 1=Tepat waktu; 0=Terlambat |
| audit_delay | Audit delay dalam hari | Scale | - |


## TM 14 — Presentasi Proyek Akhir


| Elemen | Contoh |
|---|---|
| Judul | Pengaruh Pertumbuhan Penjualan terhadap Profit Margin Perusahaan Ritel |
| Y | Profit margin |
| X | Pertumbuhan penjualan |
| Data | Laporan keuangan perusahaan ritel periode tertentu |
| Metode | Regresi linier sederhana |
| Pertanyaan | Apakah pertumbuhan penjualan berhubungan dengan profit margin? |
