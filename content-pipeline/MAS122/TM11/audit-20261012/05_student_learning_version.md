# Analisis Seri Waktu (Time Series)

Data deret waktu (penjualan bulanan, harga saham) dianalisis untuk mengenali pola dan **meramalkan** masa depan.

A. Komponen Deret Waktu

**Trend (T):** arah jangka panjang.

**Seasonal (S):** pola berulang musiman.

**Cyclical (C):** fluktuasi siklus bisnis.

**Irregular (I):** acak/tak terduga.

B. Metode Peramalan

**Moving average (rata-rata bergerak):** menghaluskan fluktuasi.

**Exponential smoothing:** memberi bobot lebih pada data terbaru.

**ARIMA:** model gabungan AutoRegressive + Integrated + Moving Average untuk data yang sudah stasioner.

Stasioneritas

Sebelum ARIMA, data sering perlu dibuat **stasioner** (rata-rata & varians stabil) lewat differencing.

ARIMA: urutan model dan batas penggunaannya

Sumber pelengkap

RPP Statistik PDF 4 meminta ARIMA. Penjelasan ini memakai Hyndman dan Athanasopoulos, Forecasting: Principles and Practice 3e, bagian 9.1 dan 9.5-9.8 sebagai pelengkap terbuka. [Baca bab ARIMA](https://otexts.com/fpp3/arima.html).

ARIMA(p,d,q) memodelkan hubungan antarnilai dalam waktu. p adalah jumlah lag autoregresif, d jumlah pembedaan, dan q jumlah lag galat moving average. Komponen MA pada ARIMA berbeda dari rata-rata beberapa observasi untuk pemulusan.

y_t^{\prime}=y_t-y_{t-1}

Pembedaan pertama mengurangi perubahan tingkat. Data hasil beda perlu diperiksa kestasionerannya; pembedaan tidak otomatis menjamin model sesuai. Rujukan: FPP3 bagian 9.1.

Plot seri menurut waktu dan periksa pola musiman.

Tentukan pembedaan, lalu periksa ACF/PACF.

Estimasi dan bandingkan model dengan kriteria informasi.

Periksa residual dan akurasi pada periode uji.

Sajikan forecast beserta interval prediksi.

Ilustrasi pembedaan buatan

Seri 100, 110, 120, 130 unit menjadi 10, 10, 10 unit setelah pembedaan pertama. Empat observasi ini hanya menjelaskan mekanisme; jumlahnya tidak memadai untuk menyimpulkan model ARIMA yang sesuai. Rujukan konsep: FPP3 bagian 9.1.

Modul Terpadu Pra-UAS — Konsep, SPSS Output, dan Jebakan

Catatan kurator

Bagian di bawah ini menambah materi inti TM 11 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.

Analisis Seri Waktu dan ARIMA Membaca pola historis dan membuat peramalan

Perusahaan memiliki data penjualan bulanan. Manajemen membutuhkan proyeksi untuk menentukan pembelian persediaan, target kas, dan rencana promosi. Karena datanya berurutan menurut waktu, analisis seri waktu lebih tepat daripada analisis cross-section biasa.

Contoh Penerapan Analisis Seri Waktu

Akuntan manajemen menggunakan forecast untuk anggaran penjualan dan produksi.

Manajer keuangan memakai forecast untuk proyeksi arus kas.

Auditor dapat memakai pola historis untuk menilai kewajaran tren akun tertentu.

Target Kompetensi

Membedakan trend, seasonal, cyclical, dan irregular component.

Menghitung moving average sederhana.

Menjelaskan ARIMA(p,d,q) secara konseptual.

Membaca hasil forecast dan keterbatasannya.

Time series

Data yang dicatat berurutan menurut waktu.

Trend

Arah jangka panjang data, misalnya naik atau turun.

Seasonality

Pola berulang pada periode tetap, misalnya bulanan atau kuartalan.

Cyclical

Pola naik-turun jangka panjang akibat siklus ekonomi.

Irregular

Gangguan acak atau kejadian tidak biasa.

Moving average

Rata-rata beberapa periode terakhir untuk menghaluskan fluktuasi.

Forecast error

Selisih antara nilai aktual dan nilai ramalan.

ARIMA

Model runtut waktu dengan komponen autoregressive, differencing, dan moving average.

Pakai seri waktu

Data memiliki urutan waktu dan tujuan analisis adalah membaca pola atau meramalkan nilai mendatang.

Jangan acak data

Urutan waktu tidak boleh diacak karena urutan adalah informasi.

Hati-hati

Data yang terlalu pendek kurang stabil untuk ARIMA.

Data penjualan bulanan selama satu tahun.

Bulan | Penjualan | MA 3 Bulan untuk Periode Berikutnya

Jan | 120 | -

Feb | 125 | -

Mar | 130 | -

Apr | 138 | 125,00

Mei | 145 | 131,00

Jun | 150 | 137,67

Jul | 158 | 144,33

Agu | 162 | 151,00

Sep | 170 | 156,67

Okt | 175 | 163,33

Nov | 188 | 169,00

Des | 200 | 177,67

Time Series Plot: Penjualan Aktual vs Moving Average

Lihat apakah data naik, turun, atau berulang.

Dalam contoh, penjualan cenderung naik (menunjukkan adanya pola trend positif).

Moving Average (MA_n) = (Y_t + Y_{t-1} + ... + Y_{t-n+1}) / n

Rumus ini rata-rata bergerak berakhir pada t, menggunakan observasi aktual Yt. Forecast periode t+1 memakai rata-rata tersebut sebagai model sederhana. Forecast April dengan n=3 memakai Januari-Maret; moving average aktual berakhir April memakai Februari-April. Jangan mencampurnya dengan centered moving average pada pembahasan pemulusan tren. Rujukan: Lind, Statistical Techniques 17e, Ch. 18, hal. 657-660 (PDF 684-687); pergeseran indeks untuk forecast adalah penjelasan rumus.

Perhitungan rata-rata 3 bulan ini membantu menghaluskan fluktuasi data sehingga tren utamanya lebih mudah terlihat.

Bandingkan nilai aktual dengan nilai ramalan.

Jika data panjang dan pola kompleks, model ARIMA dapat dipertimbangkan.

Ringkasan Rumus Time Series & Peramalan

**Moving Average 3 Periode:** MA₃ = (Yt + Yt−1 + Yt−2) / 3
**Tren Linier:** Ŷt = a + bt
**Forecast Error:** Error = Actual − Forecast
**Model Lanjutan:** ARIMA(p, d, q)

**Asumsi Urutan Waktu:** Data harus disusun secara berurutan kronologis dari periode paling awal hingga paling akhir.

Pola historis relevan

Forecast mengasumsikan pola masa lalu masih berguna.

Outlier diperiksa

Shock luar biasa dapat merusak pola forecast.

Jebakan Ujian & Kesalahan Umum

Mengacak data waktu sebelum analisis.

Memakai ARIMA pada data yang terlalu pendek.

Mengabaikan pola musiman.

Menganggap forecast sebagai kepastian, bukan estimasi dengan ketidakpastian.

Langkah Analisis di SPSS

Masukkan variabel waktu dan variabel nilai, misalnya penjualan.

Pastikan data diurutkan berdasarkan waktu.

Gunakan Data → Define Dates jika periode waktu perlu didefinisikan.

Analyze → Forecasting → Create Traditional Models.

Pilih target penjualan dan gunakan Expert Modeler untuk pemula.

Baca plot actual vs fitted, forecast, confidence interval, dan residual.

Langkah Analisis di Excel

Gunakan =AVERAGE(B2:B4) untuk moving average 3 periode.

Gunakan =FORECAST.LINEAR(periode_target, known_y, known_x) untuk trend linear.

Gunakan Data → Forecast Sheet untuk membuat grafik forecast.

Hitung error = aktual − forecast.

Time plot

Menunjukkan trend dan kemungkinan pola musiman.

Forecast table

Menunjukkan nilai ramalan periode mendatang.

Confidence interval

Rentang ketidakpastian prediksi.

Residual/error

Mengukur selisih aktual dan ramalan.

Model fit

Ukuran seperti RMSE/MAPE membantu membandingkan model.

Pembahasan: Karena urutan waktu adalah bagian dari informasi. Mengacak data akan merusak pola trend atau seasonal.

Pembahasan: MA₃ = (100 + 110 + 120)/3 = 110 sebagai forecast untuk periode berikutnya setelah tiga data pertama.

Pembahasan: Penjualan bulanan, arus kas, beban operasional, piutang, persediaan, atau rasio keuangan tahunan.

## Flashcard

Apa komponen seri waktu?

Trend, pola musiman, siklus dan komponen tak beraturan membantu deskripsi; pemisahan mengikuti model yang dipilih. Rujukan: Lind 17e Ch.18 hal.657-660 PDF 684-687; FPP3 bagian 9.1,9.5-9.8 https://otexts.com/fpp3/arima.html

Apa moving average untuk forecast berikutnya?

Gunakan observasi sebelum periode ramalan. Rata-rata yang memasukkan nilai periode t adalah pemulusan pada t, bukan forecast t sebelum nilainya diketahui. Rujukan: Lind 17e Ch.18 hal.657-660 PDF 684-687; FPP3 bagian 9.1,9.5-9.8 https://otexts.com/fpp3/arima.html

Apa dampak ukuran jendela?

Jendela panjang lebih halus tetapi lambat merespons perubahan; bandingkan akurasi pada periode uji. Rujukan: Lind 17e Ch.18 hal.657-660 PDF 684-687; FPP3 bagian 9.1,9.5-9.8 https://otexts.com/fpp3/arima.html

Apa p,d,q pada ARIMA?

p lag autoregresif, d jumlah pembedaan, q lag galat moving average. MA galat berbeda dari rata-rata observasi untuk pemulusan. Rujukan: Lind 17e Ch.18 hal.657-660 PDF 684-687; FPP3 bagian 9.1,9.5-9.8 https://otexts.com/fpp3/arima.html

Apa pembedaan pertama?

y_t - y_(t-1). Ilustrasi 100,110,120,130 menjadi 10,10,10; seri sangat pendek ini tidak cukup untuk memilih model. Rujukan: Lind 17e Ch.18 hal.657-660 PDF 684-687; FPP3 bagian 9.1,9.5-9.8 https://otexts.com/fpp3/arima.html

Apa yang diperiksa sebelum menerima model?

Pola data, kestasioneran/pembedaan, residual, akurasi periode uji dan interval prediksi; fitting yang baik saja belum cukup. Rujukan: Lind 17e Ch.18 hal.657-660 PDF 684-687; FPP3 bagian 9.1,9.5-9.8 https://otexts.com/fpp3/arima.html

## Kuis TM terdaftar


