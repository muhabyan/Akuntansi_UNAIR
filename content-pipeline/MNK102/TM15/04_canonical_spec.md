# Spesifikasi kanonik MNK102 TM15

Status: READY_WITH_SCOPE_LIMITATION

SHA256 05 (CRLF): c08a525c791bb31555b63c45dfdec826ef7162113fbf08054e215b5781f1f920

Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7; Brigham & Houston, FFM 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304)

## Batas sumber

Artikel yang ditugaskan dosen tidak teridentifikasi. Altman (2002) adalah artikel primer pelengkap pilihan pengguna, bukan materi dosen terkonfirmasi. Core Failure diberi batas cakupan; prosedur Chapter 7/11 adalah Amerika Serikat. Tidak ada data perusahaan numerik pada artikel untuk contoh kanonik.

## Unit dan cakupan


| Unit | Bagian 05 | Rujukan | Isi terverifikasi |
| --- | --- | --- | --- |
| U15-01 | 1. Identifikasi jenis kesulitan sebelum memilih tindakan | [Kontrak MK2026 Sheet 1 B32:E32; Altman 2002 PDF2 dan 9-18] [Kontrak MK2026 Sheet 1 B32:E32; Altman 2002 PDF2 dan 9-18] | Corporate failure pada kontrak merujuk Artikel tanpa menyebut judul atau penulis. Artikel dosen tersebut belum tersedia  |
| U15-02 | 1. Identifikasi jenis kesulitan sebelum memilih tindakan | [FFM16e hal. cetak 261-262 dan 570-573, PDF303-304 dan 612-615] [FFM16e hal. cetak 261-262 dan 570-573, PDF303-304 dan 612-615] | Likuiditas berkaitan kemampuan memenuhi kas pada tanggal jatuh tempo. Solvabilitas ekonomi mempertimbangkan nilai aset d |
| U15-03 | 2. Altman original: variabel, unit dan populasi | [Altman 2002 PDF9-12, Figure 2] [Altman 2002 PDF9-12, Figure 2] | Model original dikembangkan dari sampel manufaktur publik. Gunakan data yang sesuai populasi, termasuk nilai pasar selur |
| U15-04 | 2. Altman original: variabel, unit dan populasi | [Altman 2002 PDF13-14] [Altman 2002 PDF13-14] | Untuk latihan original, skor di bawah 1,81 masuk distress, di atas 2,99 masuk zona relatif lebih aman, dan 1,81 sampai 2 |
| U15-05 | 3. Varian model tidak boleh ditukar sebagian | [Altman 2002 PDF15-18] [Altman 2002 PDF15-18] | Model firma privat Z-prime mengganti variabel ekuitas dan mengubah koefisien. Varian nonmanufaktur Z-double-prime mengub |
| U15-06 | 3. Varian model tidak boleh ditukar sebagian | [Altman 2002 PDF2 dan 5-6] | Evaluasi risiko perlu menggabungkan skor dengan kas, jatuh tempo, kualitas piutang, prospek permintaan, hubungan pemasok |
| U15-07 | 4. Reorganisasi dan likuidasi sebagai keputusan ekonomi | [hal. 262; PDF 304] [hal. 262; PDF 304] | Reorganization, reorganisasi, berusaha mempertahankan usaha yang masih layak sambil mengatur ulang kewajiban. Liquidatio |
| U15-08 | 4. Reorganisasi dan likuidasi sebagai keputusan ekonomi | [FFM16e hal. cetak 261-262; PDF303-304] [FFM16e hal. cetak 261-262; PDF303-304] | Pembahasan Chapter 11 dan Chapter 7 pada buku adalah konteks Amerika Serikat. Paket tidak menyamakan Chapter 11 dengan P |


## Rumus dan contoh


```formula
\displaystyle Z=1.2 X_1+1.4 X_2+3.3 X_3+0.6 X_4+1.0 X_5
[Altman 2002, PDF 10, Figure 2]
```

**Kasus 1: Audit pilihan model** Artikel membahas original Z pada Figure 2 dan Z-prime untuk firma privat. Apakah cukup mengganti nilai pasar ekuitas dengan nilai buku? [Altman 2002, PDF 10-15]

*Pembahasan:*

Model original memakai nilai pasar seluruh saham dan nilai buku seluruh kewajiban. Z-prime memakai ekuitas buku, dengan koefisien 0,717; 0,847; 3,107; 0,420; 0,998. Seluruh model harus diganti bersama, termasuk kriteria klasifikasi yang sesuai varian. [Altman 2002, PDF 12, 14-15]

Sumber tidak menyediakan data perusahaan numerik untuk contoh ini. Pembahasan kanonik berhenti pada audit variabel dan model. Kasus angka buatan berada di bank latihan dengan label asumsi.


**Kasus 2: Membaca hasil uji sumber** Figure 3 melaporkan akurasi satu tahun sebelum kegagalan: original sample 94% dan sampel 1969-1975 sebesar 82%, pada cutoff sekitar 2,67. Apa batas simpulannya? [Altman 2002, PDF 13-14]

*Pembahasan:*

Angka tersebut adalah akurasi pada kelompok dan pengujian tertentu. Ukuran sampelnya berbeda: 33 dan 86 perusahaan gagal. Hasil 94% tidak membuat setiap perusahaan berskor rendah pasti gagal. [Altman 2002, PDF 13-14]

Artikel membahas kenaikan kesalahan klasifikasi pada sampel berikutnya. Skor perlu dibaca bersama populasi, tahun, cutoff, dan informasi kas perusahaan. Persentase akurasi tidak boleh dibaca sebagai probabilitas gagal suatu perusahaan. [Altman 2002, PDF 2, 14]

## Spesifikasi diagram

```visual
id: V-TM15-01
jenis: map
judul: Corporate Failure dan Analisis Kesulitan Keuangan: peta keputusan
sumber: Disusun dari Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7; Brigham & Houston, FFM 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304)
isi: ["Kas dan nilai usaha", "Populasi model", "Rasio X1-X5", "Varian Z", "Reorganisasi dan likuidasi"]
hubungan: Cabang sejajar; label tidak menyatakan urutan sebab-akibat
pesan utama: Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Corporate Failure dan Analisis Kesulitan Keuangan: peta keputusan. Mulai dari jenis keputusan, pilih model yang sepadan, lalu periksa risiko dan batas sumber.
```

```visual
id: V-TM15-02
jenis: map
judul: Original Z-Score: komponen rasio
sumber: Altman 2002, Figure 2 [PDF 10-12]
isi: ["1,2 × X1: modal kerja/aset", "1,4 × X2: laba ditahan/aset", "3,3 × X3: EBIT/aset", "0,6 × X4: nilai pasar ekuitas/total kewajiban", "1,0 × X5: penjualan/aset"]
hubungan: Lima kontribusi dijumlahkan; semua definisi dan koefisien harus mengikuti varian yang sama
pesan utama: Jumlah kontribusi menghasilkan skor tanpa satuan; skor belum menjadi probabilitas gagal.
versi HP: overview dengan kartu teks; grafik desktop tetap dapat dibuka
alt text: Original Z-Score: komponen rasio. Jumlah kontribusi menghasilkan skor tanpa satuan; skor belum menjadi probabilitas gagal.
```
