# TM15: Corporate Failure dan Analisis Kesulitan Keuangan

Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7; Brigham & Houston, FFM 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304). Halaman cetak buku memiliki selisih 42 dari halaman PDF.

**Setelah TM ini kamu bisa:**
1. Memilih konsep dan asumsi yang sesuai kasus.
2. Menunjukkan langkah hitungan, satuan, pembulatan, dan keputusan.
3. Menjelaskan batas model serta rujukannya.

## Kilat


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
- Kesulitan kas perlu dibedakan dari kelayakan usaha dan keputusan hukum.
- Model original Altman memakai populasi manufaktur publik.
- X4 memakai nilai pasar seluruh ekuitas dan nilai buku seluruh kewajiban.
- Koefisien, variabel, dan batas harus mengikuti satu varian model.
- Z-score adalah skor tanpa satuan dan belum menjadi probabilitas gagal.
- Artikel dosen belum teridentifikasi; Altman dipakai sebagai pelengkap terbatas.

Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7; Brigham & Houston, FFM 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304)

> **Kalau cuma sempat ingat satu hal:** arus kas, tingkat, satuan, dan periode harus konsisten sebelum kamu mengambil keputusan.

> **Catatan sumber:** Artikel yang ditugaskan dosen tidak teridentifikasi. Altman (2002) adalah artikel primer pelengkap pilihan pengguna, bukan materi dosen terkonfirmasi. Core Failure diberi batas cakupan; prosedur Chapter 7/11 adalah Amerika Serikat. Tidak ada data perusahaan numerik pada artikel untuk contoh kanonik.

[Artikel primer Altman, Figure 2 halaman 10](https://w4.stern.nyu.edu/finance/docs/WP/2002/pdf/wpa02052.pdf#page=10). [Batas dan hasil uji halaman 14](https://w4.stern.nyu.edu/finance/docs/WP/2002/pdf/wpa02052.pdf#page=14).

## Inti

Baca konsep, kerjakan cek pemahaman, lalu periksa contoh sumber. Pendalaman menyimpan rincian tambahan.

## 1. Identifikasi jenis kesulitan sebelum memilih tindakan

Mengapa masalah kas berbeda dari status hukum pailit?

Corporate failure pada kontrak merujuk Artikel tanpa menyebut judul atau penulis. Artikel dosen tersebut belum tersedia dalam folder sumber. Paket ini memakai artikel primer Altman 2002 sebagai pelengkap yang dapat dibaca, serta bagian buku tentang reorganisasi dan likuidasi. [Kontrak MK2026 Sheet 1 B32:E32; Altman 2002 PDF2 dan 9-18]

Isi ini mendukung topik kontrak, tetapi tidak diklaim sebagai artikel yang pasti ditugaskan dosen. Tidak ada arsip UAS pada sumber yang diperiksa; prioritas latihan adalah perkiraan berdasarkan kontrak dan pola kasus. [Kontrak MK2026 Sheet 1 B32:E32; Altman 2002 PDF2 dan 9-18]

Likuiditas berkaitan kemampuan memenuhi kas pada tanggal jatuh tempo. Solvabilitas ekonomi mempertimbangkan nilai aset dan kemampuan menanggung kewajiban; ekuitas buku dapat positif ketika kas hari ini tidak cukup. Financial distress dapat dimulai dari penurunan margin, arus kas dan kemampuan memperoleh kredit. [FFM16e hal. cetak 261-262 dan 570-573, PDF303-304 dan 612-615]

Status hukum pailit memerlukan prosedur yurisdiksi dan tidak ditentukan oleh satu rasio. [FFM16e hal. cetak 261-262 dan 570-573, PDF303-304 dan 612-615]

<!-- self-check question="Mengapa masalah kas berbeda dari status hukum pailit?" -->
Kas dapat tidak cukup pada tanggal jatuh tempo walaupun nilai aset melebihi kewajiban. Status hukum pailit mengikuti prosedur yurisdiksi; satu kekurangan kas atau Z-score tidak menetapkannya. [FFM16e hal. 261-262; PDF 303-304]
<!-- self-check:end -->

## 2. Altman original: variabel, unit dan populasi

Apa pembilang dan penyebut X4 original?

Model original dikembangkan dari sampel manufaktur publik. Gunakan data yang sesuai populasi, termasuk nilai pasar seluruh ekuitas dan nilai buku seluruh kewajiban. Artikel menjelaskan penggunaan aset berwujud. [Altman 2002 PDF9-12, Figure 2]

Jika ada aset tak berwujud, variasi industri atau firma privat, periksa metode dan varian sebelum menerapkan koefisien. Skor adalah hasil diskriminan tanpa satuan; nilai Z tidak langsung menunjukkan probabilitas bangkrut. [Altman 2002 PDF9-12, Figure 2]


```formula
\displaystyle Z=1.2 X_1+1.4 X_2+3.3 X_3+0.6 X_4+1.0 X_5
[Altman 2002, PDF 10, Figure 2]
```


| Rasio | Pembilang | Penyebut | Pemeriksaan |
| --- | --- | --- | --- |
| X1 | Aset lancar - kewajiban lancar | Aset yang sesuai model | Modal kerja dapat negatif. |
| X2 | Laba ditahan kumulatif | Aset yang sesuai model | Berbeda dari laba satu tahun. |
| X3 | EBIT | Aset yang sesuai model | Bukan laba setelah bunga. |
| X4 | Nilai pasar seluruh ekuitas | Nilai buku total kewajiban | Bukan hanya utang berbunga. |
| X5 | Penjualan | Aset yang sesuai model | Interpretasi dapat berbeda antarindustri. |

[Altman 2002 halaman PDF10-12, Figure 2 dan definisi X1-X5.]

Untuk latihan original, skor di bawah 1,81 masuk distress, di atas 2,99 masuk zona relatif lebih aman, dan 1,81 sampai 2,99 masuk abu-abu. Tepat pada kedua batas diperlakukan abu-abu dalam paket. Batas tersebut merupakan klasifikasi model, bukan jaminan gagal atau keberlangsungan. [Altman 2002 PDF13-14]

Artikel juga membahas perubahan hasil pengujian dan false positive, perusahaan yang ditandai bermasalah tetapi tidak gagal. [Altman 2002 PDF13-14]

<!-- self-check question="Apa pembilang dan penyebut X4 original?" -->
Model original dikembangkan dari sampel manufaktur publik. Gunakan data yang sesuai populasi, termasuk nilai pasar seluruh ekuitas dan nilai buku seluruh kewajiban. [Altman 2002 PDF9-12, Figure 2]
<!-- self-check:end -->

## 3. Varian model tidak boleh ditukar sebagian

Mengapa varian model harus diganti bersama?

Model firma privat Z-prime mengganti variabel ekuitas dan mengubah koefisien. Varian nonmanufaktur Z-double-prime mengubah set rasio, koefisien dan batas. Versi emerging markets menambah konstanta untuk pemetaan tertentu. [Altman 2002 PDF15-18]

Memasukkan ekuitas buku ke rumus original sambil mempertahankan koefisien dan batasnya tidak menghasilkan varian yang valid. Untuk bank atau usaha sektor khusus, periksa model yang sesuai karakter neracanya. [Altman 2002 PDF15-18]

Evaluasi risiko perlu menggabungkan skor dengan kas, jatuh tempo, kualitas piutang, prospek permintaan, hubungan pemasok dan kreditor, serta kemampuan manajemen memulihkan operasi. Artikel menempatkan credit scoring sebagai bagian analisis yang dapat dilanjutkan dengan pemetaan risiko dan estimasi peluang default; skor saja tidak langsung menjadi peluang. [Altman 2002 PDF2 dan 5-6]

<!-- self-check question="Mengapa varian model harus diganti bersama?" -->
Model firma privat Z-prime mengganti variabel ekuitas dan mengubah koefisien. Varian nonmanufaktur Z-double-prime mengubah set rasio, koefisien dan batas. [Altman 2002 PDF15-18]
<!-- self-check:end -->

## 4. Reorganisasi dan likuidasi sebagai keputusan ekonomi

Apa beda keputusan ekonomi dan prosedur hukum?

Reorganization, reorganisasi, berusaha mempertahankan usaha yang masih layak sambil mengatur ulang kewajiban. Liquidation, likuidasi, merealisasikan aset sesuai proses yang berlaku. Buku membandingkan kelayakan reorganisasi dan penjualan aset pada konteks Amerika Serikat. [hal. 262; PDF 304]

Hasil analisis keuangan tidak menggantikan keputusan hukum. [hal. 262; PDF 304]

Pembahasan Chapter 11 dan Chapter 7 pada buku adalah konteks Amerika Serikat. Paket tidak menyamakan Chapter 11 dengan PKPU Indonesia dan tidak mengajarkan prioritas klaim sebagai ketentuan hukum Indonesia. Kasus menetapkan arus dan nilai yang diperlukan agar mahasiswa dapat membedakan analisis ekonomi dari keputusan hukum. [FFM16e hal. cetak 261-262; PDF303-304]

Selesaikan terlebih dahulu anggaran kas, kemampuan melanjutkan operasi dan nilai bersih, lalu sebutkan informasi tambahan yang diperlukan. [FFM16e hal. cetak 261-262; PDF303-304]

<!-- self-check question="Apa beda keputusan ekonomi dan prosedur hukum?" -->
Reorganization, reorganisasi, berusaha mempertahankan usaha yang masih layak sambil mengatur ulang kewajiban. Liquidation, likuidasi, merealisasikan aset sesuai proses yang berlaku. [hal. 262; PDF 304]
<!-- self-check:end -->


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

## 4a. Hubungkan sinyal skor dengan keputusan

Z-score menghasilkan klasifikasi berdasarkan gabungan rasio dan sampel model. Jangan mengubah skor menjadi persentase peluang bangkrut. Rasio yang buruk menunjukkan kebutuhan pemeriksaan kas, laba operasi, kewajiban dan aset; keputusan hukum maupun pendanaan memerlukan bukti tambahan. Kesalahan tipe I berarti perusahaan bermasalah diklasifikasi sehat; tipe II berarti perusahaan sehat diklasifikasi bermasalah pada pembahasan artikel. [Altman 2002, PDF 13-15, bagian 5-7]

Pilihan reorganisasi menilai kelangsungan usaha setelah utang dan operasi ditata ulang. Likuidasi menjual aset serta membagi hasil menurut hak pihak terkait. Buku membahas Chapter 11 dan Chapter 7 Amerika Serikat. Materi ini tidak menentukan prosedur kepailitan Indonesia. Artikel Corporate Failure yang ditugaskan dosen tetap belum teridentifikasi. [FFM16e hal. 261-262; PDF 303-304; Kontrak Sheet1 B32:E32]

<!-- self-check question="Apakah Z-score di zona distress otomatis berarti perusahaan pailit?" -->
Tidak. Zona skor adalah hasil model dalam populasi tertentu. Periksa arus kas, kelayakan usaha, data rasio dan prosedur hukum yang berlaku. Artikel dosen belum tersedia, sehingga prioritas ujian TM15 masih memiliki batas sumber. [Altman 2002, PDF 13-15; FFM16e hal. 261-262, PDF 303-304]
<!-- self-check:end -->

<!-- pendalaman:start judul="Pendalaman: model dan bukti sumber" -->
### Pendalaman: model dan bukti sumber

### Varian model dan konsekuensi reorganisasi


| Konsep | Cara membaca | Sumber |
| --- | --- | --- |
| Original Z | Manufaktur publik; X4 memakai nilai pasar seluruh ekuitas | [Altman 2002, PDF 10-14] |
| Z-prime | Firma privat; koefisien dan ekuitas buku diganti bersama | [Altman 2002, PDF 15] |
| Z-double-prime | Menghapus rasio penjualan dan memakai koefisien berbeda | [Altman 2002, PDF 17-18] |
| Emerging markets | Versi pemetaan menambah konstanta 3,25; jangan dicampur ke original | [Altman 2002, PDF 18] |
| Reorganisasi | Dapat mengubah bunga, tenor, atau menukar utang dengan saham | [hal. 262] |
| Likuidasi | Kelayakan dinilai dari nilai aset terpisah dibanding usaha berlanjut | [hal. 262] |
| Hak pemilik | Reorganisasi dapat mendilusi pemegang saham; hukum mengikuti yurisdiksi | [hal. 262] |

<!-- pendalaman:end -->

## Kasus latihan

Contoh berikut memakai angka atau bukti pada sumber. USD ditulis sebagai nama mata uang agar tidak tertukar dengan delimiter rumus.

**Kasus 1: Audit pilihan model** Artikel membahas original Z pada Figure 2 dan Z-prime untuk firma privat. Apakah cukup mengganti nilai pasar ekuitas dengan nilai buku? [Altman 2002, PDF 10-15]

*Pembahasan:*

Model original memakai nilai pasar seluruh saham dan nilai buku seluruh kewajiban. Z-prime memakai ekuitas buku, dengan koefisien 0,717; 0,847; 3,107; 0,420; 0,998. Seluruh model harus diganti bersama, termasuk kriteria klasifikasi yang sesuai varian. [Altman 2002, PDF 12, 14-15]

Sumber tidak menyediakan data perusahaan numerik untuk contoh ini. Pembahasan kanonik berhenti pada audit variabel dan model. Kasus angka buatan berada di bank latihan dengan label asumsi.

**Kasus 2: Membaca hasil uji sumber** Figure 3 melaporkan akurasi satu tahun sebelum kegagalan: original sample 94% dan sampel 1969-1975 sebesar 82%, pada cutoff sekitar 2,67. Apa batas simpulannya? [Altman 2002, PDF 13-14]

*Pembahasan:*

Angka tersebut adalah akurasi pada kelompok dan pengujian tertentu. Ukuran sampelnya berbeda: 33 dan 86 perusahaan gagal. Hasil 94% tidak membuat setiap perusahaan berskor rendah pasti gagal. [Altman 2002, PDF 13-14]

Artikel membahas kenaikan kesalahan klasifikasi pada sampel berikutnya. Skor perlu dibaca bersama populasi, tahun, cutoff, dan informasi kas perusahaan. Persentase akurasi tidak boleh dibaca sebagai probabilitas gagal suatu perusahaan. [Altman 2002, PDF 2, 14]

## Persiapan Ujian

Prioritas ini adalah perkiraan dari kontrak dan contoh sumber. Arsip ujian belum tersedia.


| Jebakan | Pemeriksaan jawaban |
| --- | --- |
| Mengapa masalah kas berbeda dari status hukum pailit? | Nyatakan asumsi, rujukan, dan alasan sesuai pembahasan Inti. |
| Apa pembilang dan penyebut X4 original? | Nyatakan asumsi, rujukan, dan alasan sesuai pembahasan Inti. |
| Mengapa varian model harus diganti bersama? | Nyatakan asumsi, rujukan, dan alasan sesuai pembahasan Inti. |
| Apa beda keputusan ekonomi dan prosedur hukum? | Nyatakan asumsi, rujukan, dan alasan sesuai pembahasan Inti. |

Altman (2002), Corporate Distress Prediction Models, halaman PDF 9-15, Figure 2 dan bagian 5-7; Brigham & Houston, FFM 16e (2022), Bab 7, hal. cetak 261-262 (PDF 303-304)

Latihan pra-UAS terpisah memuat 6 kuis, 6 flashcard, dan 2 kasus bank soal pada TM ini. Angka pengembangan latihan adalah asumsi buatan yang dinyatakan, bukan angka buku atau kondisi pasar sekarang.
