# AKA201 TM07: Implementation Brief

Urutan otoritas: 04_canonical_spec > 05_student_learning_version > 06_implementation_brief > 07_qa_manifest.

## 1. Judul

- Judul katalog: **Materialitas Perencanaan dan Pelaksanaan**
- Subjudul: Ch.6 Arens (pp.199–211) · SA/ISA 320

## 2. Pemetaan blok

| # | Section (05) | Jenis blok | Canonical |
|---|---|---|---|
| 0 | Callout "Perhatikan" di dalam Fondasi (rules of thumb bukan standar) | callout catatan | aturan konten 04 |
| 1 | Apa itu materialitas; analogi nilai | list + paragraf | C-001–C-003 |
| 2 | Materialitas sepanjang audit | tabel | C-004 |
| 3 | Tiga langkah materialitas keseluruhan | tabel ×2 + list | C-010–C-021 |
| 4 | Materialitas pelaksanaan | tabel + list + callout praktik | C-050–C-057 |
| 5 | Materialitas spesifik | paragraf | C-060 |
| 6 | Ambang trivial | paragraf + callout jebakan | C-040–C-041 |
| 7 | Contoh Hillsburg | tabel perhitungan | C-030–C-034 |
| 8 | Evaluasi salah saji | tabel + list | C-070–C-072 |
| 9 | Kasus latihan (Kasus 4 berlabel Interpretasi) | worked case dengan perhitungan | lihat 05 |
| 10 | Exam toolkit | list bernomor + tabel | seluruh TM |

## 2b. Tambahan revisi fondasi (v2)

| Section baru (05) | Posisi | Jenis blok |
|---|---|---|
| 0. Fondasi (termasuk tabel "Kesalahpahaman umum") | Paling awal, sebelum section 1 | paragraf + tabel; blok Interpretasi bila ada |
| Uji pemahaman | Sebelum Exam toolkit | soal terbuka dengan jawaban tersembunyi |

## 3. Konvensi render

- Angka rupiah ditulis "Rp120.000.000" (titik ribuan, tanpa spasi). Angka dolar Hillsburg ditulis tanpa simbol.
- Tabel perhitungan Hillsburg: kolom hasil rata kanan di desktop (penanda ---: sudah ada di 05); baris materialitas keseluruhan, pelaksanaan, dan trivial ditebalkan.
- Rules of thumb (Table 6-7) disajikan sebagai dua tabel terpisah (berorientasi laba dan nirlaba), supaya setiap kartu di ponsel berisi satu tolok ukur.
- Tidak ada LaTeX; operasi ditulis dengan "×".

- **Uji pemahaman** dirender sebagai soal terbuka: pertanyaan tampil, sedangkan "Contoh jawaban" dan "Tanda belum paham" disembunyikan di balik tombol "Lihat contoh jawaban". Tujuannya memaksa mahasiswa menjawab sendiri dulu. Jangan dijadikan pilihan ganda.
- Tabel "Kesalahpahaman umum" memakai gaya callout peringatan atau tabel biasa dengan kolom "Anggapan yang keliru" diberi penanda visual.

- **Tampilan dan bahasa (v3):** ikuti `shared/panduan_tampilan_dan_bahasa.md`. File 05 kini memuat blok `> **Intinya:**` di awal setiap section bernomor dan penanda `<!-- pendalaman:start/end -->` untuk blok yang tertutup secara default. Kutipan sumber yang sebelumnya ada di judul section dipindah ke baris `*Sumber: ...*` di bawah judul.

## 4. Item latihan

### 4.1 Kuis (8 item)

Sebaran kunci: A = q02, q07; B = q04, q05; C = q01, q08; D = q03, q06.

**aka201-tm07-q01** (C-050, C-051)
Fungsi utama materialitas pelaksanaan adalah:
- A. Menentukan jenis opini auditor
- B. Menggantikan materialitas keseluruhan saat evaluasi akhir
- C. Menurunkan aggregation risk dan memberi penyangga atas salah saji yang tidak terdeteksi ✅
- D. Menentukan fee audit
Penjelasan: ISA320 para. 9(a); ARENS p.204.

**aka201-tm07-q02** (C-014)
Tolok ukur materialitas yang paling umum untuk entitas yang terutama dibiayai utang menurut buku adalah:
- A. Total aset ✅
- B. Laba sebelum pajak
- C. Total beban
- D. Ekuitas pemegang saham
Penjelasan: ARENS Table 6-6.

**aka201-tm07-q03** (C-016, C-031)
EBITA sebuah perusahaan 8.822 ribu dan auditor memilih 5 persen. Materialitas keseluruhan kira-kira:
- A. 265.000
- B. 331.000
- C. 618.000
- D. 441.000 ✅
Penjelasan: 5% × 8.822 ribu = 441.100, dibulatkan 441.000 (contoh Hillsburg).

**aka201-tm07-q04** (C-054, C-056)
Perikatan tahun pertama dengan lingkungan pengendalian yang lemah paling tepat menggunakan materialitas pelaksanaan sekitar:
- A. 90 persen dari materialitas keseluruhan
- B. 50 persen dari materialitas keseluruhan ✅
- C. 100 persen dari materialitas keseluruhan
- D. 150 persen dari materialitas keseluruhan
Penjelasan: risiko tinggi mengarah ke ujung bawah rentang 50–75 persen (ARENS p.207).

**aka201-tm07-q05** (C-071)
Salah saji di bawah materialitas keseluruhan tetap dapat dianggap material jika:
- A. Ditemukan pada akhir fieldwork
- B. Mengubah laba menjadi rugi ✅
- C. Dicatat di jurnal umum
- D. Ditemukan oleh staff accountant
Penjelasan: ARENS Table 6-8.

**aka201-tm07-q06** (C-041)
Pernyataan yang BENAR tentang salah saji yang jelas trivial:
- A. Sama artinya dengan salah saji yang tidak material
- B. Harus selalu dikoreksi oleh manajemen
- C. Ditetapkan oleh regulator untuk semua KAP
- D. Salah saji di bawah ambang ini tidak perlu diakumulasi, tetapi "trivial" tidak sama dengan "tidak material" ✅
Penjelasan: ARENS pp.208–209.

**aka201-tm07-q07** (C-060)
Auditor menetapkan tingkat materialitas lebih rendah khusus untuk kompensasi eksekutif karena pemegang saham sangat sensitif. Ini disebut:
- A. Materialitas spesifik ✅
- B. Materialitas pelaksanaan
- C. Ambang trivial
- D. Materialitas keseluruhan
Penjelasan: ARENS p.208; ISA320 para. 10.

**aka201-tm07-q08** (C-070)
Salah saji yang merupakan estimasi auditor untuk seluruh populasi berdasarkan hasil sampel disebut:
- A. Factual misstatement
- B. Judgmental misstatement
- C. Projected misstatement ✅
- D. Trivial misstatement
Penjelasan: ARENS p.209.

### 4.2 Flashcard (12 kartu; v2: kartu definisi hafalan diganti kartu "kenapa" dan "contoh")

| ID | Depan | Belakang | Canonical |
|---|---|---|---|
| aka201-tm07-fc01 | Kenapa salah saji 1 juta dolar bisa material bagi satu perusahaan tetapi tidak bagi yang lain? | Materialitas relatif terhadap pengguna dan ukuran entitas (Hillsburg vs perusahaan dengan laba miliaran) | C-003 |
| aka201-tm07-fc02 | Tiga langkah materialitas keseluruhan | Pilih tolok ukur; tentukan persentase; justifikasi | C-012 |
| aka201-tm07-fc03 | Bolehkah menulis di UTS "5% karena diwajibkan standar"? | Tidak. 5% adalah rule of thumb; ISA 320 menyebut persentase sebagai pertimbangan profesional (A8) | C-016, C-017 |
| aka201-tm07-fc04 | Rule of thumb nirlaba | 1–3% pendapatan, beban, atau total aset | C-016 |
| aka201-tm07-fc05 | Kenapa auditor tidak cukup mencari salah saji yang masing-masing material? | Salah saji kecil bisa menumpuk melebihi materialitas (aggregation risk); karena itu ada materialitas pelaksanaan | C-051, C-052 |
| aka201-tm07-fc06 | Rentang materialitas pelaksanaan dalam praktik | 50% (risiko tinggi) sampai 75% (risiko rendah) dari materialitas keseluruhan | C-054 |
| aka201-tm07-fc07 | Materialitas spesifik | Tingkat lebih rendah untuk pos yang sensitif bagi pengguna tertentu, misalnya kompensasi eksekutif dan pihak berelasi | C-060 |
| aka201-tm07-fc08 | Ambang trivial Hillsburg | 1% dari materialitas keseluruhan (4.400) | C-034 |
| aka201-tm07-fc09 | Tiga kategori salah saji | Factual, judgmental, projected | C-070 |
| aka201-tm07-fc10 | Tiga contoh faktor kualitatif | Mengubah rugi jadi laba; covenant; menaikkan kompensasi manajemen | C-071 |
| aka201-tm07-fc11 | Kapan materialitas direvisi | Jika ada informasi yang seandainya diketahui sejak awal akan menghasilkan jumlah berbeda | C-021 |
| aka201-tm07-fc12 | Materialitas keseluruhan didasarkan pada kebutuhan siapa? | Pengguna laporan keuangan sebagai kelompok, bukan manajemen dan bukan tiap pengguna secara individual | C-002, C-011 |

### 4.3 Bank soal esai (3 soal)

**aka201-tm07-bs01** (C-010–C-034), soal hitung
Perusahaan manufaktur terbuka dengan laba stabil memproyeksikan laba sebelum pajak Rp4.000.000.000. Tahun ini adalah perikatan tahun pertama. Tentukan dan justifikasi materialitas keseluruhan, materialitas pelaksanaan, dan ambang trivial.
Poin jawaban: tolok ukur laba sebelum pajak; persentase dengan alasan (misalnya 5% = Rp200.000.000); materialitas pelaksanaan di ujung bawah karena tahun pertama (misalnya 50–60% = Rp100.000.000–Rp120.000.000); ambang trivial (misalnya 1% = Rp2.000.000); dokumentasi. Angka persentase boleh berbeda asalkan dijustifikasi dan dihitung benar.

**aka201-tm07-bs02** (C-050–C-057)
Jelaskan perbedaan materialitas keseluruhan dan materialitas pelaksanaan, termasuk alasan materialitas pelaksanaan diperlukan dan faktor yang membuatnya diturunkan.
Poin jawaban: definisi; berbasis pengguna vs risiko; aggregation risk dan penyangga; rentang 50–75%; minimal tiga faktor; penggunaan dalam perencanaan dan evaluasi.

**aka201-tm07-bs03** (C-070–C-072)
Manajemen menolak mengoreksi salah saji Rp40.000.000 dengan alasan jumlahnya di bawah materialitas Rp120.000.000. Padahal koreksi itu akan mengubah laba Rp30.000.000 menjadi rugi. Evaluasi argumen manajemen dan jelaskan dampaknya terhadap opini.
Poin jawaban: faktor kualitatif (Table 6-8); revisi materialitas bila hasil aktual jauh dari proyeksi; material walau di bawah angka; komunikasi dengan TCWG; opini modifikasian bila tidak dikoreksi (pervasif atau tidak, TM06).

## 5. Yang tidak boleh dilakukan

- Menyajikan persentase Table 6-7 sebagai ketentuan standar.
- Memakai ambang trivial 1 persen sebagai aturan umum; itu contoh buku (Hillsburg dan City of Toronto).
