# Analitika Data Akuntansi (Accounting Data Analytics) & Visualisasi Bisnis

Mempelajari integrasi Big Data dalam akuntansi melalui IMPACT Model. Membedakan empat tingkat analitika data (Deskriptif, Diagnostik, Prediktif, Preskriptif) dan teknik Audit Data Analytics (ADA) untuk pengujian 100% populasi buku besar.

Gambar 11.1: Siklus Analitika Data Akuntansi Model IMPACT dari Identifikasi Masalah hingga Tracking.

Model Analitika Data: Kerangka Kerja IMPACT

IMPACT Model adalah metodologi standar industri untuk menjalankan proyek analitika data akuntansi dan audit:

I - Identify the questions: Rumuskan pertanyaan bisnis yang jelas (misal: 'Faktur vendor mana yang dibayar dua kali dalam setahun terakhir?').

M - Master the data: Ekstrak, bersihkan, dan validasi data (ETL - Extract, Transform, Load) dari berbagai database.

P - Perform the test plan: Terapkan model analisis yang sesuai (clustering, regresi, deteksi anomali).

A - Address and refine results: Evaluasi hasil temuan, singkirkan false positive, dan pertajam analisis.

C - Communicate insights: Sajikan temuan dalam bentuk visualisasi interaktif (dashboard) yang mudah dipahami direksi.

T - Track outcomes: Pantau efektivitas rekomendasi dan otomatisasi pemantauan transaksi berkelanjutan (Continuous Monitoring).

Empat Tingkatan Analitika Data Akuntansi

Tabel 11.1: Taksonomi Analitika Data Akuntansi

Tingkatan Analitika | Pertanyaan Inti | Contoh Kasus Akuntansi Manajemen | Contoh Kasus Audit

Descriptive Analytics | Apa yang telah terjadi? (What happened?) | Laporan ringkasan penjualan per wilayah, analisis rasio likuiditas historis. | Tabel profil umur piutang (Aging Schedule), total pengeluaran kas tahun berjalan.

Diagnostic Analytics | Mengapa hal itu terjadi? (Why did it happen?) | Analisis varians biaya bahan baku aktual vs standar, drill-down penyebab lonjakan retur. | Deteksi transaksi akhir pekan/hari libur, pemindaian nomor cek yang melompat (gap detection).

Predictive Analytics | Apa yang kemungkinan akan terjadi? (What is likely to happen?) | Peramalan arus kas 6 bulan ke depan menggunakan time-series, estimasi probabilitas kebangkrutan (Altman Z-Score). | Model klasifikasi machine learning untuk memprediksi risiko kegagalan bayar debitur.

Prescriptive Analytics | Tindakan apa yang sebaiknya diambil? (What should we do?) | Optimasi rute distribusi logistik untuk meminimalkan biaya bahan bakar, penetapan harga dinamis (dynamic pricing). | Sistem rekomendasi otomatis untuk membekukan akun vendor yang memiliki anomali skor risiko tinggi.

Teknik Audit Data Analytics (ADA): Hukum Benford & Deteksi Anomali

Dalam audit tradisional, auditor hanya memeriksa sampel 25-50 transaksi. Dengan ADA, auditor menguji 100% populasi transaksi buku besar (General Ledger) menggunakan query otomatis:

Hukum Benford (Benford's Law): Teori probabilitas yang menyatakan bahwa dalam data angka alami, digit pertama angka 1 muncul sebesar 30.1%, angka 2 sebesar 17.6%, hingga angka 9 hanya 4.6%. Jika distribusi digit pertama pada faktur klaim pengeluaran staf menyimpang drastis dari kurva Benford, ini indikator kuat manipulasi angka atau pemalsuan kuitansi.

Pencarian Angka Bulat (Round Number Bias): Menemukan konsentrasi transaksi pengeluaran kas dengan angka bulat mencurigakan (misal: Rp 49.999.000) tepat di bawah batas plafon otorisasi Rp 50.000.000 (threshold-skimming).

Pencocokan Duplikasi Fuzzy (Fuzzy Matching): Mendeteksi pembayaran ganda ke vendor yang sama di mana nama vendor diketik sedikit berbeda (misal: 'PT Sumber Makmur' vs 'PT. Sumber Makmur TBK').

Prinsip Visualisasi Data

Hindari penggunaan 3D Pie Chart yang mendistorsi persepsi proporsi pembaca. Gunakan Bar Chart horizontal untuk membandingkan kategori, Line Chart untuk tren waktu, dan Scatter Plot untuk melihat korelasi dan outlier.

## Flashcard

Karakteristik Big Data (5V)

Volume (besaran ukuran data), Velocity (kecepatan data tercipta), Variety (ragam format), Veracity (keandalan data), dan Value (nilai bisnis). Rujukan: Richardson et al. AIS 4e · Ch. 2 dan 3, hal. 49-60 dan 110-126 (PDF 74-85 dan 135-151).

Model Siklus Analitika IMPACT

Identify questions, Master the data, Perform test plan, Address and refine results, Communicate insights, Track outcomes. Rujukan: Richardson et al. AIS 4e · Ch. 2 dan 3, hal. 49-60 dan 110-126 (PDF 74-85 dan 135-151).

Analisis Deskriptif vs Diagnostik

Deskriptif menjawab: "Apa yang telah terjadi?" (summary rasio). Diagnostik menjawab: "Mengapa hal itu bisa terjadi?" (analisis varians mendalam). Rujukan: Richardson et al. AIS 4e · Ch. 2 dan 3, hal. 49-60 dan 110-126 (PDF 74-85 dan 135-151).

Analisis Prediktif vs Preskriptif

Prediktif menjawab: "Apa yang mungkin terjadi di masa depan?" (regresi, tren). Preskriptif menjawab: "Tindakan optimal apa yang harus diambil?" (optimasi). Rujukan: Richardson et al. AIS 4e · Ch. 2 dan 3, hal. 49-60 dan 110-126 (PDF 74-85 dan 135-151).

Audit Data Analytics (ADA) pada Buku Besar

Menguji seluruh populasi jurnal umum untuk menemukan anomali: jurnal manual di akhir pekan, user ID mencurigakan, atau pembulatan angka janggal. Rujukan: Richardson et al. AIS 4e · Ch. 2 dan 3, hal. 49-60 dan 110-126 (PDF 74-85 dan 135-151).

Visualisasi Data Akuntansi

Penyajian pola data interaktif melalui grafik, dashboard PowerBI/Tableau yang memudahkan identifikasi outlier bagi pengambil keputusan. Rujukan: Richardson et al. AIS 4e · Ch. 2 dan 3, hal. 49-60 dan 110-126 (PDF 74-85 dan 135-151).

## Kuis TM terdaftar

Urutan enam langkah metodologis dalam siklus analitika data akuntansi model IMPACT adalah...

Model IMPACT (Richardson, Teeter, Terrell): (1) Identify questions, (2) Master the data, (3) Perform the test plan, (4) Address and refine results, (5) Communicate insights, dan (6) Track outcomes.

Tingkatan analitika data yang bertujuan menjawab pertanyaan: 'Apa tindakan terbaik yang harus diambil oleh perusahaan berdasarkan skenario masa depan?' diklasifikasikan sebagai...

Hierarki Analitika: (1) Deskriptif = Apa yang terjadi?; (2) Diagnostik = Mengapa terjadi?; (3) Prediktif = Apa yang mungkin terjadi?; (4) Preskriptif = Apa rekomendasi tindakan terbaik yang harus diambil (optimalisasi)?.

Dalam pengujian audit analitika forensik, Hukum Benford (Benford's Law) digunakan oleh akuntan untuk...

Hukum Benford memprediksi bahwa dalam kumpulan data transaksi akuntansi alami, angka '1' muncul sebagai digit pertama sekitar 30.1% dari waktu, sedangkan angka '9' kurang dari 5%. Deviasi drastis mengindikasikan fabrikasi angka atau manipulasi transaksi buatan manusia.

Aktivitas 'Master the Data' dalam model IMPACT mencakup proses ETL. Kepanjangan dari ETL adalah...

ETL (Extract, Transform, Load) adalah proses mengekstrak data dari berbagai sumber ERP/database, mentransformasi data menjadi format yang bersih dan konsisten, lalu memuatnya (load) ke dalam Data Warehouse untuk dianalisis.

Teknik Audit Data Analytics (ADA) manakah yang paling efektif untuk mengidentifikasi adanya pembayaran ganda (duplicate payments) kepada vendor dalam satu tahun buku?

Pencocokan tepat dan fuzzy dapat menemukan kandidat ganda. Kandidat tetap diperiksa terhadap transaksi asli; kemiripan field tidak otomatis membuktikan pembayaran ganda. Rujukan: Richardson AIS 4e, Ch.3, Exploratory Data Analysis, PDF 135-151.
