# AKA201 TM05: QA Manifest

## 1. Verifikasi sumber

| Canonical | Sumber | Yang dicek | Status |
|---|---|---|---|
| C-001–C-009 | ARENS pp.99–103 | Segmentasi; definisi cycle approach; Figure 4-2; lima siklus; Table 4-3; alasan pemisahan siklus modal; siklus persediaan; Figure 4-3; entity-level controls | Terverifikasi |
| C-010 | ARENS p.103, Figure 4-4 | 17.521 + 144.328 − 137.087 − 1.242 − 3.323 = 20.197 (dihitung ulang, cocok) | Terverifikasi |
| C-020–C-022 | ARENS p.104; ISA315 para. 12(a) | Definisi; contoh kas 827.568 | Terverifikasi |
| C-023 | ARENS p.105 Table 4-4; ISA315 paras. A189–A191 | Dua belas asersi; isi identik dengan A190 | Terverifikasi |
| C-024–C-026 | ARENS pp.105–106; ISA315 para. 12(h), 12(k) | Asersi relevan; tiga faktor; kas vs persediaan | Terverifikasi |
| C-030–C-035 | ARENS pp.106–108, Figure 4-5 | Asersi transaksi dengan contoh penjualan | Terverifikasi |
| C-040–C-046 | ARENS pp.108–111, Figure 4-6 | Asersi saldo dengan contoh persediaan | Terverifikasi |
| C-050–C-052 | ARENS pp.111–112 | Dialog Hillsburg | Terverifikasi |
| C-060–C-067 | ARENS pp.112–117, Figure 4-7 | Faktor sepanjang audit; tujuh tahap; respons menyeluruh; pendekatan; uji pengendalian; uji substantif | Terverifikasi |

Kasus latihan 2 (62.000) dihitung ulang: 50.000 + 400.000 − 380.000 − 5.000 − 3.000 = 62.000.

## 2. Pengecekan konten

- [ ] Dua belas asersi lengkap dalam dua tabel: enam asersi transaksi dan enam asersi saldo.
- [ ] Tabel roll-forward menghasilkan 20.197.
- [ ] Callout jebakan tentang satu salah saji yang melanggar lebih dari satu asersi tampil.
- [ ] Kasus 3 dan soal esai bs03 berlabel Interpretasi.
- [ ] Kunci kuis: A = q04, q07; B = q01, q06; C = q02, q08; D = q03, q05.

## 3. Pengecekan teknis

- [ ] Tanpa `$`, tanpa LaTeX; tabel tampil sebagai kartu di 390 px; test render lulus; mode terang/gelap.

## 4. Inkonsistensi dan catatan

| # | Temuan | Penanganan |
|---|---|---|
| 1 | Buku merujuk "CAS 315.A129"; ISA 315 (Revised 2019) menempatkan daftar asersi di A190. | Isi identik; rujukan ISA memakai A190. |
| 2 | Buku menyebut "Table 4-1" saat merujuk kategori asersi (p.106), padahal yang dimaksud Table 4-4. | Salah rujuk di buku; bacaan memakai Table 4-4. |
| 3 | Definisi relevant assertion buku ("reasonable possibility") berbeda redaksi dengan ISA 315 ("identified risk of material misstatement", sebelum pengendalian). | Keduanya ditampilkan; ISA sebagai rumusan standar. |
| 4 | RPS Week 5 menyebut "audit objectives for transactions/balances". Edisi Kanada ini tidak memakai daftar audit objectives terpisah. | Contoh per asersi di Figure 4-5 dan 4-6 disajikan sebagai "tujuan audit per asersi". |
| 5 | Dalam dialog Hillsburg, buku menulis "LB" untuk beberapa ucapan Leslie (typo; seharusnya "LN"). | Tidak berdampak pada isi. |

## 5. Revisi fondasi (v2)

- [ ] Section 0 "Fondasi" tampil paling awal, termasuk tabel "Kesalahpahaman umum" dengan sumber per baris.
- [ ] Section "Uji pemahaman" tampil sebelum Exam toolkit; contoh jawaban tersembunyi sampai diklik.
- [ ] Empat flashcard v2 (pertanyaan "kenapa" dan "contoh") menggantikan kartu lama dengan ID yang sama.
- [ ] Setiap contoh jawaban dan baris kesalahpahaman merujuk sumber; bagian susunan penulis berlabel Interpretasi.

## 6. Revisi v2.1: versi lama asersi

| Temuan | Penanganan |
|---|---|
| Banyak sumber Indonesia masih memakai model asersi tiga kategori (SPAP 2013). Halaman resmi IAPI menyatakan SA 315 (Revisi) mengadopsi ISA 315 (Revised 2019). | Ditambahkan callout "Versi lama vs versi berlaku" di section 3 bacaan dan C-027 di canonical. Deskripsi model lama hanya dari sumber sekunder, jadi tidak dirinci. |
