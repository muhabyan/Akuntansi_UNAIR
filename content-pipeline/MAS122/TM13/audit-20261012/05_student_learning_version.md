# Perangkat Lunak Statistik & Persiapan Proyek Akhir

Analisis modern memakai perangkat lunak. Bagian ini menyiapkan alur kerja analisis data untuk proyek akhir.

A. Perangkat Lunak

**Excel:** analisis dasar, PivotTable, Data Analysis ToolPak.

**SPSS:** populer untuk uji statistik bermenu (deskriptif, t-test, ANOVA, regresi).

**R / Python:** fleksibel & gratis untuk analisis lanjutan & otomasi.

B. Alur Kerja Analisis

Rumuskan pertanyaan & hipotesis penelitian.

Kumpulkan & bersihkan data (data cleaning).

Eksplorasi (statistik deskriptif & visualisasi).

Pilih & jalankan uji yang sesuai.

Tafsirkan hasil & tarik kesimpulan.

Sajikan temuan secara jujur & jelas.

Peta memilih metode

Tentukan: (1) tujuan (deskripsi/hubungan/perbedaan/prediksi), (2) jumlah & skala variabel, (3) asumsi terpenuhi atau tidak → barulah pilih uji.

Modul Terpadu Pra-UAS : Konsep, SPSS Output, dan Jebakan

Catatan kurator

Bagian di bawah ini menambah materi inti TM 13 dengan glossary istilah, contoh SPSS output, asumsi, dan jebakan ujian. Diadaptasi dari modul terpadu Pra-UAS.

Penggunaan Perangkat Lunak Statistik SPSS dan Excel dari data mentah sampai interpretasi

Mahasiswa sering langsung membuka menu analisis tanpa menyiapkan struktur data. Week 13 menekankan workflow: data dictionary, input data, screening, analisis deskriptif, uji utama, output, interpretasi, dan dokumentasi.

Pentingnya Workflow Data

Software mempercepat perhitungan, tetapi tidak menggantikan pemahaman metode.

Kesalahan coding variabel dapat membuat output statistik salah.

Laporan yang baik membutuhkan narasi, bukan screenshot mentah.

Target Kompetensi

Membedakan Data View, Variable View, dan Output Viewer.

Menyusun data dictionary sederhana.

Menjalankan menu SPSS untuk ANOVA, regresi, chi-square, dan non-parametrik.

Menulis interpretasi berdasarkan output software.

Data View

Tempat memasukkan data mentah di SPSS.

Variable View

Tempat mendefinisikan nama, label, tipe, value label, missing, dan measure.

Value Labels

Keterangan kode kategori, misalnya 1=WTP, 0=Non-WTP.

Missing Values

Kode untuk data hilang agar tidak dihitung sebagai data valid.

Measure

Skala pengukuran di SPSS: Nominal, Ordinal, atau Scale.

Weight Cases

Fitur untuk data yang sudah berupa frekuensi rekap.

Output Viewer

Jendela hasil analisis SPSS.

Syntax

Perintah tertulis SPSS yang dapat mereplikasi analisis.

Gunakan SPSS

Ketika analisis membutuhkan output statistik lengkap, asumsi, post hoc, atau non-parametrik.

Gunakan Excel

Ketika latihan hitung, visualisasi sederhana, atau analisis dasar seperti korelasi/regresi sederhana.

Gunakan syntax

Ketika analisis perlu direplikasi secara konsisten.

Contoh struktur data proyek akuntansi.

Name | Label | Measure | Value Labels

company_id | Kode perusahaan | Nominal | -

sector | Sektor industri | Nominal | 1=Manufaktur; 2=Jasa; 3=Keuangan

sales_growth | Pertumbuhan penjualan | Scale | -

profit_margin | Margin laba | Scale | -

audit_opinion | Opini audit | Nominal | 1=WTP; 0=Non-WTP

timely_report | Ketepatan waktu pelaporan | Nominal | 1=Tepat waktu; 0=Terlambat

audit_delay | Audit delay dalam hari | Scale | -

Jangan mulai dari menu SPSS; mulai dari masalah riset.

Tentukan nama, label, skala, dan kode kategori.

Pastikan satu baris adalah satu observasi.

Cek missing, outlier, dan salah kode.

Baca output sesuai metode dan tulis narasi hasil.

Alur Kerja Analisis & Struktur Data SPSS

**Alur Analisis:** Masalah → Data → Metode → Output → Interpretasi → Keputusan

**Struktur Data SPSS yang Benar:**
• 1 Baris = 1 Observasi / Responden
• 1 Kolom = 1 Variabel

**Konsistensi Coding:** Pengkodean angka kategori (misal 1=Pria, 2=Wanita) harus konsisten di seluruh dataset.

Skala benar

Measure harus sesuai: nominal, ordinal, atau scale.

Data bersih

Salah input dan missing harus diperiksa sebelum analisis.

Jebakan Ujian & Kesalahan Umum

Mengisi kode kategori tetapi tidak membuat Value Labels.

Menganggap semua variabel sebagai Scale.

Tidak memeriksa missing value.

Menempel output mentah tanpa interpretasi.

Memilih metode dari menu tanpa memahami desain data.

Langkah Analisis di SPSS

Isi Variable View terlebih dahulu.

Masukkan data pada Data View.

Untuk deskriptif: Analyze → Descriptive Statistics → Frequencies/Descriptives/Explore.

Untuk ANOVA: Analyze → Compare Means → One-Way ANOVA.

Untuk korelasi: Analyze → Correlate → Bivariate.

Untuk regresi: Analyze → Regression → Linear.

Untuk chi-square: Analyze → Descriptive Statistics → Crosstabs.

Untuk non-parametrik: Analyze → Nonparametric Tests → Legacy Dialogs.

Langkah Analisis di Excel

Gunakan tabel data rapi dengan header variabel di baris pertama.

Aktifkan Analysis ToolPak.

Gunakan PivotTable untuk crosstab dan deskriptif cepat.

Gunakan Data Analysis untuk Regression dan ANOVA.

Gunakan grafik untuk scatterplot dan time plot.

Frequencies

Cocok untuk nominal/ordinal.

Descriptives

Cocok untuk scale.

Explore

Cocok untuk cek normalitas dan boxplot.

Crosstabs

Cocok untuk hubungan kategori.

Regression output

Cocok untuk model prediksi.

Pembahasan: Data View berisi data mentah, sedangkan Variable View mendefinisikan struktur variabel.

Pembahasan: audit_opinion = Nominal dengan label 1=WTP, 0=Non-WTP; audit_delay = Scale; firm_size = Scale.

Pembahasan: Gunakan Weight Cases agar SPSS membaca frekuensi rekap sebagai jumlah kasus.

## Flashcard

Apa langkah pertama analisis perangkat lunak?

Tentukan pertanyaan, populasi, variabel, satuan dan desain sebelum memilih menu analisis. Rujukan: RPP Statistik PDF 4-5, perangkat lunak dan proyek akhir; metode inferensi Lind Ch.12-16

Apa kontrol data sebelum analisis?

Periksa data hilang, duplikat, tipe variabel, kode kategori dan nilai ekstrem dengan jejak keputusan. Rujukan: RPP Statistik PDF 4-5, perangkat lunak dan proyek akhir; metode inferensi Lind Ch.12-16

Mengapa output software perlu diperiksa?

Pilihan model, kelompok, alpha dan metode dapat mengubah hasil; program tidak membuktikan desain sudah benar. Rujukan: RPP Statistik PDF 4-5, perangkat lunak dan proyek akhir; metode inferensi Lind Ch.12-16

Apa yang membuat analisis dapat direproduksi?

Simpan versi data, langkah transformasi, pengaturan/model dan output sehingga orang lain dapat mengulang. Rujukan: RPP Statistik PDF 4-5, perangkat lunak dan proyek akhir; metode inferensi Lind Ch.12-16

Bagaimana membaca p-value?

Nilai berkaitan dengan data setidaknya seekstrem observasi di bawah model H0; bukan probabilitas H0 benar. Rujukan: RPP Statistik PDF 4-5, perangkat lunak dan proyek akhir; metode inferensi Lind Ch.12-16

Apa yang dilaporkan selain signifikansi?

Besar efek, unit, ketidakpastian, asumsi, diagnostik dan relevansi keputusan. Rujukan: RPP Statistik PDF 4-5, perangkat lunak dan proyek akhir; metode inferensi Lind Ch.12-16

## Kuis TM terdaftar


