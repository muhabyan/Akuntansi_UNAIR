# AKA201 TM05: Implementation Brief

Urutan otoritas: 04_canonical_spec > 05_student_learning_version > 06_implementation_brief > 07_qa_manifest.

## 1. Judul

- Judul katalog: **Siklus, Asersi Manajemen, dan Gambaran Proses Audit**
- Subjudul: Ch.4 Arens (pp.99–117) · ISA/SA 315 (Revised 2019)

## 2. Pemetaan blok

| # | Section (05) | Jenis blok | Canonical |
|---|---|---|---|
| 0 | Callout "Kabar baik" | callout info | aturan konten 04 |
| 1 | Pendekatan siklus; roll-forward piutang | tabel ×2 + list | C-001–C-010 |
| 2 | Definisi asersi | paragraf | C-020–C-022 |
| 3 | Dua belas asersi; contoh penjualan; contoh persediaan | tabel ×3 | C-023, C-030–C-046 |
| 4 | Cara cepat menentukan asersi | tabel + callout jebakan | C-050–C-052, C-033 |
| 5 | Asersi relevan | tabel | C-024–C-026 |
| 6 | Proses audit | tabel ×2 + list | C-060–C-067 |
| 7 | Kasus latihan (Kasus 3 berlabel Interpretasi) | worked case | lihat 05 |
| 8 | Exam toolkit | list + tabel | seluruh TM |

## 2b. Tambahan revisi fondasi (v2)

| Section baru (05) | Posisi | Jenis blok |
|---|---|---|
| 0. Fondasi (termasuk tabel "Kesalahpahaman umum") | Paling awal, sebelum section 1 | paragraf + tabel; blok Interpretasi bila ada |
| Uji pemahaman | Sebelum Exam toolkit | soal terbuka dengan jawaban tersembunyi |

## 3. Konvensi render

- Tabel roll-forward: kolom angka rata kanan; angka dalam kurung untuk pengurang; baris saldo akhir tebal. Tanpa simbol mata uang.
- Dua belas asersi disajikan sebagai dua tabel (transaksi dan saldo), masing-masing dua kolom, dan dirender sebagai kartu di ponsel (lihat spec §2).
- Tabel roll-forward: kolom angka rata kanan di desktop (dari penanda ---: di markdown); di ponsel menjadi kartu.
- Simbol "≠" dan "→" boleh dipakai sebagai teks biasa.

- **Uji pemahaman** dirender sebagai soal terbuka: pertanyaan tampil, sedangkan "Contoh jawaban" dan "Tanda belum paham" disembunyikan di balik tombol "Lihat contoh jawaban". Tujuannya memaksa mahasiswa menjawab sendiri dulu. Jangan dijadikan pilihan ganda.
- Tabel "Kesalahpahaman umum" memakai gaya callout peringatan atau tabel biasa dengan kolom "Anggapan yang keliru" diberi penanda visual.

- **Tampilan dan bahasa (v3):** ikuti `shared/panduan_tampilan_dan_bahasa.md`. File 05 kini memuat blok `> **Intinya:**` di awal setiap section bernomor dan penanda `<!-- pendalaman:start/end -->` untuk blok yang tertutup secara default. Kutipan sumber yang sebelumnya ada di judul section dipindah ke baris `*Sumber: ...*` di bawah judul.

## 4. Item latihan

### 4.1 Kuis (8 item)

Sebaran kunci: A = q04, q07; B = q01, q06; C = q02, q08; D = q03, q05.

**aka201-tm05-q01** (C-042, C-051)
Barang konsinyasi milik pemasok ikut dihitung sebagai persediaan klien. Asersi yang dilanggar:
- A. Existence
- B. Rights and obligations ✅
- C. Completeness
- D. Cutoff
Penjelasan: barangnya ada tetapi bukan milik entitas.

**aka201-tm05-q02** (C-033)
Penjualan dicatat pada 31 Desember padahal barang dikirim 4 Januari. Asersi transaksi yang dilanggar:
- A. Occurrence
- B. Classification
- C. Cutoff ✅
- D. Presentation
Penjelasan: ARENS p.107.

**aka201-tm05-q03** (C-023)
Asersi yang hanya berlaku untuk saldo akun (tidak ada padanannya di asersi transaksi) adalah:
- A. Completeness
- B. Classification
- C. Presentation
- D. Rights and obligations ✅
Penjelasan: Table 4-4 / ISA 315 A190.

**aka201-tm05-q04** (C-041)
Prosedur yang paling tepat untuk memperoleh bukti atas asersi existence persediaan adalah:
- A. Mengamati perhitungan fisik persediaan ✅
- B. Mencocokkan total daftar persediaan dengan neraca saldo
- C. Menelaah pengungkapan kebijakan akuntansi persediaan
- D. Menghitung ulang penyusutan
Penjelasan: ARENS p.108.

**aka201-tm05-q05** (C-024)
Menurut ISA 315, penentuan apakah suatu asersi relevan dilakukan:
- A. Setelah menguji efektivitas pengendalian
- B. Setelah laporan auditor terbit
- C. Berdasarkan besarnya fee audit
- D. Sebelum mempertimbangkan pengendalian terkait (berdasarkan risiko inheren) ✅
Penjelasan: ISA315 para. 12(h).

**aka201-tm05-q06** (C-006)
Alasan siklus perolehan dan pelunasan modal dipisahkan dari siklus pembelian dan pembayaran adalah:
- A. Memakai jurnal yang berbeda
- B. Transaksinya terkait pendanaan, sedikit jumlahnya, tetapi masing-masing sering sangat material ✅
- C. Tidak melibatkan kas
- D. Diatur oleh standar audit yang berbeda
Penjelasan: ARENS pp.101–102.

**aka201-tm05-q07** (C-065)
Auditor memutuskan tidak mengandalkan pengendalian klien dan hanya melakukan uji substantif. Pendekatan ini disebut:
- A. Substantive approach ✅
- B. Combined approach
- C. Entity-level approach
- D. Cycle approach
Penjelasan: ARENS p.115.

**aka201-tm05-q08** (C-026)
Menurut buku, asersi yang biasanya relevan untuk kas adalah:
- A. Valuation dan presentation
- B. Classification dan accuracy
- C. Existence dan cutoff ✅
- D. Rights dan valuation
Penjelasan: ARENS pp.105–106.

### 4.2 Flashcard (12 kartu; v2: kartu definisi hafalan diganti kartu "kenapa" dan "contoh")

| ID | Depan | Belakang | Canonical |
|---|---|---|---|
| aka201-tm05-fc01 | Kenapa kas disebut penghubung siklus? | Hampir semua siklus melibatkan penerimaan atau pengeluaran kas | C-005 |
| aka201-tm05-fc02 | Lima siklus | Pendapatan dan penagihan; pembelian dan pembayaran; SDM dan penggajian; persediaan dan distribusi; perolehan dan pelunasan modal | C-004 |
| aka201-tm05-fc03 | Akun yang menghubungkan hampir semua siklus | Kas | C-005 |
| aka201-tm05-fc04 | Entity-level controls | Pengendalian untuk banyak siklus atau seluruh organisasi; menangani risiko pervasif | C-009 |
| aka201-tm05-fc05 | Kenapa auditor memecah laporan keuangan menjadi asersi? | Asersi dipakai untuk mempertimbangkan jenis salah saji yang mungkin terjadi, sehingga tiap klaim bisa diuji dengan bukti yang sesuai (ISA 315 para. 12(a)) | C-021, C-022 |
| aka201-tm05-fc06 | Barang konsinyasi milik pemasok ikut dihitung. Asersi apa, dan kenapa bukan existence? | Rights and obligations: barangnya ada, tetapi bukan milik entitas | C-042, C-051 |
| aka201-tm05-fc07 | Enam asersi saldo | Existence, rights and obligations, completeness, accuracy valuation and allocation, classification, presentation | C-023 |
| aka201-tm05-fc08 | Occurrence vs existence | Keduanya lebih saji; occurrence untuk transaksi selama periode, existence untuk saldo pada satu titik waktu | C-050 |
| aka201-tm05-fc09 | Asersi yang dilanggar oleh kurang saji | Completeness | C-050 |
| aka201-tm05-fc10 | Tiga faktor penentu asersi relevan | Bias/insentif/tekanan manajemen; kompleksitas atau subjektivitas; risiko fraud dan error | C-025 |
| aka201-tm05-fc11 | Tiga kategori uji substantif | Uji rinci; prosedur analitis substantif; uji atas pos kunci | C-067 |
| aka201-tm05-fc12 | Mencocokkan total daftar persediaan dengan buku besar. Apakah itu membuktikan existence? | Tidak. Keberadaan dibuktikan antara lain dengan mengamati perhitungan fisik | C-041 |

### 4.3 Bank soal esai (3 soal)

**aka201-tm05-bs01** (C-030–C-052)
Untuk setiap salah saji berikut, tentukan asersi yang dilanggar dan jelaskan alasannya: (a) penjualan fiktif; (b) persediaan barang titipan dicatat sebagai milik; (c) beban bunga Desember belum dicatat; (d) persediaan usang tidak diturunkan nilainya; (e) pinjaman jangka panjang yang jatuh tempo tahun depan disajikan seluruhnya sebagai liabilitas jangka panjang.
Poin jawaban: (a) occurrence; (b) rights and obligations; (c) completeness (bisa juga dibahas sebagai cutoff); (d) valuation; (e) classification (atau presentation). Penjelasan arah lebih saji/kurang saji.

**aka201-tm05-bs02** (C-001–C-010)
Jelaskan pendekatan siklus dan manfaatnya bagi auditor. Gunakan contoh piutang usaha untuk menunjukkan hubungan antara golongan transaksi dan saldo akhir.
Poin jawaban: definisi; lima siklus; kas sebagai penghubung; roll-forward piutang; gabungan keyakinan dari transaksi dan saldo; entity-level controls.

**aka201-tm05-bs03** (C-024–C-026), pembahasan berlabel Interpretasi
Jelaskan pengertian asersi yang relevan. Untuk perusahaan yang memberi bonus berbasis laba dan menjual produk yang cepat usang, tentukan asersi relevan untuk persediaan dan penjualan beserta alasannya.
Poin jawaban: definisi buku dan ISA 315 (sebelum pengendalian); tiga faktor; persediaan: valuation; penjualan: occurrence dan cutoff; respons berupa bukti yang lebih meyakinkan.

## 5. Yang tidak boleh dilakukan

- Menambah asersi atau daftar "audit objectives" versi AS yang tidak ada di buku ini.
- Menyajikan tabel asersi seolah versi buku berbeda dengan ISA 315.
