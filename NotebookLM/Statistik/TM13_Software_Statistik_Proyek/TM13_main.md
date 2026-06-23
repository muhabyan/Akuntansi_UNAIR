# TM 13 — Perangkat Lunak Statistik & Persiapan Proyek Akhir

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
