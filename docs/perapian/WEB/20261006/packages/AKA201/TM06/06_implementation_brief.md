# AKA201 TM06: Implementation Brief

Urutan otoritas: 04_canonical_spec > 05_student_learning_version > 06_implementation_brief > 07_qa_manifest.

## 1. Judul

- Judul katalog: **Laporan Auditor dan Jenis Opini**
- Subjudul: Ch.18 Arens (pp.619–642) · SA/ISA 700, 701, 705, 706

## 2. Pemetaan blok

| # | Section (05) | Jenis blok | Canonical |
|---|---|---|---|
| 1 | Kasus pembuka KAM | paragraf | C-001 |
| 2 | Opini tanpa modifikasian: syarat, unsur, tanggal | list + tabel + list | C-010–C-016 |
| 3 | Menentukan jenis opini: matriks, pervasif, alur, tiga opini modifikasian | tabel matriks + callout jebakan + list + contoh | C-050–C-073 |
| 4 | Kelangsungan usaha | tabel + callout jebakan | C-020–C-023 |
| 5 | KAM | list + paragraf | C-030–C-037 |
| 6 | Penekanan dan hal lain; ringkasan cepat | tabel ×2 | C-040–C-043 |
| 7 | Panduan role play Week 6 | tabel + list bernomor berlabel Interpretasi | C-052, C-055, C-061 |
| 8 | Kasus latihan (Kasus 3 berlabel Interpretasi) | worked case | lihat 05 |
| 9 | Exam toolkit | list + tabel | seluruh TM |

## 2b. Tambahan revisi fondasi (v2)

| Section baru (05) | Posisi | Jenis blok |
|---|---|---|
| 0. Fondasi (termasuk tabel "Kesalahpahaman umum") | Paling awal, sebelum section 1 | paragraf + tabel; blok Interpretasi bila ada |
| Uji pemahaman | Sebelum Exam toolkit | soal terbuka dengan jawaban tersembunyi |

## 3. Konvensi render

- Matriks jenis opini (section 3) ditampilkan sebagai tabel 2×2 dengan penekanan visual pada keempat sel opini.
- Judul bagian laporan dalam bahasa Inggris (misalnya "Material Uncertainty Related to Going Concern") ditampilkan dalam tanda kutip atau format kode, dengan penjelasan Indonesia di sampingnya.
- Angka contoh Figure 18-9 ditulis tanpa simbol mata uang.
- Alur percakapan role play wajib berlabel Interpretasi.

- **Uji pemahaman** dirender sebagai soal terbuka: pertanyaan tampil, sedangkan "Contoh jawaban" dan "Tanda belum paham" disembunyikan di balik tombol "Lihat contoh jawaban". Tujuannya memaksa mahasiswa menjawab sendiri dulu. Jangan dijadikan pilihan ganda.
- Tabel "Kesalahpahaman umum" memakai gaya callout peringatan atau tabel biasa dengan kolom "Anggapan yang keliru" diberi penanda visual.

- **Tampilan dan bahasa (v3):** ikuti `shared/panduan_tampilan_dan_bahasa.md`. File 05 kini memuat blok `> **Intinya:**` di awal setiap section bernomor dan penanda `<!-- pendalaman:start/end -->` untuk blok yang tertutup secara default. Kutipan sumber yang sebelumnya ada di judul section dipindah ke baris `*Sumber: ...*` di bawah judul.

## 4. Item latihan

### 4.1 Kuis (8 item)

Sebaran kunci: A = q03, q08; B = q02, q05; C = q01, q07; D = q04, q06.

**aka201-tm06-q01** (C-052)
Auditor menyimpulkan laporan keuangan mengandung salah saji yang material dan pervasif. Opini yang tepat:
- A. Wajar dengan pengecualian
- B. Tidak menyatakan pendapat
- C. Tidak wajar ✅
- D. Tanpa modifikasian dengan paragraf penekanan suatu hal
Penjelasan: ISA705 para. 8.

**aka201-tm06-q02** (C-020)
Terdapat ketidakpastian material terkait kelangsungan usaha dan manajemen mengungkapkannya secara memadai. Pelaporan yang tepat:
- A. Opini tidak wajar
- B. Opini tanpa modifikasian dengan bagian Material Uncertainty Related to Going Concern ✅
- C. Opini wajar dengan pengecualian
- D. Opini tidak menyatakan pendapat
Penjelasan: ARENS p.628.

**aka201-tm06-q03** (C-040)
Paragraf yang merujuk hal yang sudah diungkapkan dengan tepat dalam laporan keuangan tetapi fundamental bagi pemahaman pengguna adalah:
- A. Paragraf Penekanan Suatu Hal ✅
- B. Paragraf Hal Lain
- C. Key Audit Matters
- D. Basis for Qualified Opinion
Penjelasan: ISA706 para. 7(a).

**aka201-tm06-q04** (C-034)
Pernyataan yang BENAR tentang Key Audit Matters:
- A. KAM dapat menggantikan opini wajar dengan pengecualian bila salah sajinya dijelaskan
- B. KAM merupakan opini terpisah atas setiap hal
- C. KAM dipilih dari seluruh transaksi klien secara acak
- D. KAM bukan pengganti pengungkapan manajemen maupun opini modifikasian ✅
Penjelasan: ISA701 para. 4.

**aka201-tm06-q05** (C-064)
Setelah perikatan diterima, manajemen melarang auditor mengirim konfirmasi piutang. Langkah pertama yang diwajibkan ISA 705 adalah:
- A. Langsung menerbitkan opini tidak menyatakan pendapat
- B. Meminta manajemen mencabut pembatasan tersebut ✅
- C. Mengundurkan diri tanpa pemberitahuan
- D. Mengabaikan piutang dalam audit
Penjelasan: ISA705 para. 11.

**aka201-tm06-q06** (C-072)
Perbedaan utama opini tidak wajar dan opini tidak menyatakan pendapat adalah:
- A. Opini tidak wajar hanya untuk entitas nirlaba
- B. Opini tidak menyatakan pendapat tidak memerlukan komunikasi dengan TCWG
- C. Opini tidak wajar diberikan bila dampaknya tidak material
- D. Opini tidak wajar berarti auditor tahu laporan salah saji pervasif; tidak menyatakan pendapat berarti auditor tidak memiliki cukup bukti ✅
Penjelasan: ARENS p.641.

**aka201-tm06-q07** (C-015)
Tanggal laporan auditor ditetapkan:
- A. Pada tanggal neraca
- B. Pada tanggal auditor mulai fieldwork
- C. Setelah dewan menyetujui laporan keuangan, dan menjadi batas tanggung jawab auditor menelaah peristiwa kemudian ✅
- D. Pada tanggal laporan diterbitkan ke bursa
Penjelasan: ARENS p.628.

**aka201-tm06-q08** (C-051)
Menurut ISA 705, dampak salah saji disebut pervasif antara lain jika:
- A. Tidak terbatas pada unsur, akun, atau pos tertentu laporan keuangan ✅
- B. Jumlahnya di atas materialitas pelaksanaan
- C. Salah sajinya disebabkan fraud
- D. Klien adalah entitas tercatat
Penjelasan: ISA705 para. 5(a).

### 4.2 Flashcard (12 kartu; v2: kartu definisi hafalan diganti kartu "kenapa" dan "contoh")

| ID | Depan | Belakang | Canonical |
|---|---|---|---|
| aka201-tm06-fc01 | Ada ketidakpastian kelangsungan usaha yang diungkapkan memadai. Kenapa opininya tetap tanpa modifikasian? | Laporan keuangan tidak salah saji; auditor menarik perhatian pengguna lewat paragraf Material Uncertainty Related to Going Concern | C-020 |
| aka201-tm06-fc02 | Dua kondisi yang menyebabkan modifikasi opini | Salah saji material; tidak dapat memperoleh bukti yang cukup dan tepat | C-050 |
| aka201-tm06-fc03 | Salah saji hanya di satu akun tetapi nilainya separuh total aset. Pervasif? | Bisa pervasif: walau terbatas pada satu pos, pos itu mewakili bagian substansial laporan keuangan (ISA 705 para. 5(a)(ii)) | C-051 |
| aka201-tm06-fc04 | Salah saji material, tidak pervasif | Opini wajar dengan pengecualian | C-052 |
| aka201-tm06-fc05 | Salah saji material dan pervasif | Opini tidak wajar | C-052 |
| aka201-tm06-fc06 | Bukti tidak cukup, material dan pervasif | Opini tidak menyatakan pendapat (atau mundur bila memungkinkan) | C-052, C-064 |
| aka201-tm06-fc07 | Basis kelangsungan usaha tidak tepat | Opini tidak wajar | C-022 |
| aka201-tm06-fc08 | Kenapa KAM tidak bisa menggantikan opini wajar dengan pengecualian? | ISA 701 para. 4: KAM bukan pengganti opini modifikasian, bukan pengganti pengungkapan, dan bukan opini terpisah | C-034 |
| aka201-tm06-fc09 | Isi deskripsi KAM | Mengapa paling signifikan; bagaimana ditangani; rujukan ke pengungkapan | C-032 |
| aka201-tm06-fc10 | Penekanan Suatu Hal vs Hal Lain | Hal di dalam laporan keuangan vs hal di luar laporan keuangan; keduanya tidak mengubah opini | C-040 |
| aka201-tm06-fc11 | Kenapa auditor menulis "menurut opini kami", bukan "kami menjamin"? | Opini adalah pendapat profesional dengan keyakinan memadai; risiko informasi tetap ada | C-013 |
| aka201-tm06-fc12 | Tiga tipe opini modifikasian (SA 705) | Wajar dengan pengecualian; tidak wajar; tidak menyatakan pendapat | C-052 |

### 4.3 Bank soal esai (3 soal)

**aka201-tm06-bs01** (C-050–C-072)
Jelaskan bagaimana auditor menentukan jenis opini modifikasian. Terapkan pada: (a) persediaan tidak diturunkan ke nilai realisasi neto; (b) manajemen melarang konfirmasi piutang yang material tetapi tidak pervasif; (c) anak perusahaan besar tidak dikonsolidasi.
Poin jawaban: dua kondisi; definisi pervasif; matriks; (a) wajar dengan pengecualian (dampak disebut); (b) urutan ISA 705 paras. 11–13, lalu wajar dengan pengecualian; (c) tidak wajar.

**aka201-tm06-bs02** (C-020–C-043)
Bedakan bagian Material Uncertainty Related to Going Concern, Key Audit Matters, Paragraf Penekanan Suatu Hal, dan Paragraf Hal Lain dalam laporan auditor. Berikan satu contoh untuk masing-masing.
Poin jawaban: definisi dan tujuan masing-masing; apakah mengubah opini; contoh dari buku; KAM bukan pengganti.

**aka201-tm06-bs03** (C-052, C-055, C-061), untuk role play Week 6, pembahasan berlabel Interpretasi
CFO klien menolak mengoreksi salah saji material dan mengancam mengganti KAP jika opini tidak bersih. Jelaskan bagaimana auditor harus bersikap, apa opini yang tepat, dan kepada siapa hal ini dikomunikasikan.
Poin jawaban: opini ditentukan bukti dan standar; koreksi sebagai jalan keluar yang sah; ancaman intimidasi (TM03); opini wajar dengan pengecualian atau tidak wajar tergantung pervasif; komunikasi dengan TCWG sesegera mungkin; dokumentasi dan konsultasi dengan engagement partner.

## 5. Yang tidak boleh dilakukan

- Menyatakan bahwa KAM wajib untuk emiten di Indonesia (tidak diteliti).
- Menerjemahkan judul resmi bagian laporan auditor ke bahasa Indonesia tanpa sumber IAPI.
