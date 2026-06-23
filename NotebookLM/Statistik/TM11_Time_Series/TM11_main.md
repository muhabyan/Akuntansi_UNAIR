# TM 11 — Analisis Seri Waktu (Time Series)

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
