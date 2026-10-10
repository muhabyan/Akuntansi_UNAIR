# AKA201 TM03: QA Manifest

## 1. Verifikasi sumber

| Canonical | Sumber | Yang dicek | Status |
|---|---|---|---|
| C-001–C-003 | ARENS pp.50–52 | Kasus London (1 juta, 70.000, 14 bulan, 100.000 denda); definisi etika; konflik kepentingan bawaan | Terverifikasi |
| C-010, C-011 | KEPAP 110.1-A1, P110.2, 110.2-A2, A3; IESBA 110.1 A1 | Lima prinsip (isi sama di kedua dokumen); konsultasi; dokumentasi | Terverifikasi |
| C-012 | ARENS p.52, Table 3-1 | Pengelompokan prinsip versi Kanada | Terverifikasi |
| C-020–C-025 | ARENS pp.53–57 | Dilema; Figure 3-1; kasus Bryan; rasionalisasi; uji tindakan; blind spots | Terverifikasi |
| C-026 | KEPAP 120.12-A1 s.d. A3 | Daftar bias dan mitigasi | Terverifikasi |
| C-030–C-036 | KEPAP 120.1–120.15; IESBA 120.6 A3 | Tiga langkah; lima ancaman (isi sama); level dapat diterima; pihak ketiga rasional; tiga cara; pengamanan; independensi dua sisi | Terverifikasi |
| C-037 | ARENS pp.58–59 | Independence in fact/appearance; reasonable observer | Terverifikasi |
| C-040–C-047 | ARENS pp.62–67 | Figure 3-2; larangan umum dan listed entity; Table 3-2, 3-3; EY 109.000 dan 9,3 juta; komite audit; dokumentasi | Terverifikasi |
| C-050 | KEPAP 420.2, P420.3, 420.3-A2; IESBA 420.2, R420.3, 420.3 A2 | Aturan hadiah (isi sama) | Terverifikasi |
| C-051 | ARENS p.63 | Larangan hadiah selain yang tidak signifikan | Terverifikasi |
| C-060 | ARENS pp.58–61 | Rule 201–218, 302 | Terverifikasi |
| C-070–C-073 | UUAP Pasal 28, 29, 30, 55, 57 | Teks JDIH Kemenkeu | Terverifikasi |
| C-080–C-085 | ARENS pp.68–72 | Table 3-5; Porter; tiga konsep; due care; Table 3-6; Sino-Forest (9,18 miliar, 117 juta, 8 juta) | Terverifikasi |

## 2. Pengecekan konten

- [ ] Callout "Catatan sumber" tampil di dalam Fondasi, tepat setelah Intinya.
- [ ] Istilah ancaman tampil dalam dua bahasa (KEPAP dan IESBA).
- [ ] Aturan P420.3 tampil lengkap, termasuk pengecualian "trivial dan tidak memiliki konsekuensi" dan batasan maksud memengaruhi.
- [ ] Section 8 berlabel aturan Kanada; tidak ada aturan Kanada di tabel UU 5/2011.
- [ ] Contoh kalimat penolakan dan Kasus 2 serta Kasus 3 berlabel Interpretasi.
- [ ] Angka: 1 juta, 70.000, 14 bulan, 109.000, 9,3 juta, 117 juta, Rp300 juta, Rp500 juta, 5 dan 6 tahun (pidana).
- [ ] Kunci kuis: A = q02, q06; B = q04, q07; C = q01, q08; D = q03, q05.

## 3. Pengecekan teknis

- [ ] Tanpa `$`, tanpa LaTeX.
- [ ] Tabel tampil sebagai kartu di 390 px.
- [ ] Test render lulus tanpa known issue baru.
- [ ] Mode terang dan gelap.

## 4. Inkonsistensi dan catatan

| # | Temuan | Penanganan |
|---|---|---|
| 1 | Pengelompokan lima prinsip di buku (Kanada) berbeda dengan KEPAP/IESBA. | Keduanya disebut; KEPAP dipakai untuk Indonesia. |
| 2 | Buku memakai "reasonable observer"; KEPAP memakai "pihak ketiga yang rasional dan memiliki informasi yang memadai". | Disebut sebagai tolok ukur serupa; istilah KEPAP diutamakan. |
| 3 | Buku menyebut tiga langkah standar independensi Kanada (identifikasi, evaluasi dan pengamanan, dokumentasi); KEPAP menyebut identifikasi, evaluasi, atasi. | Bacaan memakai tiga langkah KEPAP; dokumentasi dari buku ditambahkan sebagai praktik. |
| 4 | KEPAP 2025 mengacu IESBA 2024; Handbook yang dipakai sebagai pembanding adalah 2025. | Untuk 110.1-A1, 120.6-A3, dan 420.3, isinya dicek sama. |
| 5 | RPS menyebut "Kode Etik Akuntan Publik Indonesia (IAPI)" tanpa edisi. | Dipakai KEPAP 2025, edisi terbaru dari IAPI. |
| 6 | Fraud dan NOCLAR tidak dibahas di TM03. | Fraud dibahas di TM12–TM13 sesuai RPS. |

## 5. Revisi fondasi (v2)

- [ ] Section 0 "Fondasi" tampil paling awal, termasuk tabel "Kesalahpahaman umum" dengan sumber per baris.
- [ ] Section "Uji pemahaman" tampil sebelum Exam toolkit; contoh jawaban tersembunyi sampai diklik.
- [ ] Empat flashcard v2 (pertanyaan "kenapa" dan "contoh") menggantikan kartu lama dengan ID yang sama.
- [ ] Setiap contoh jawaban dan baris kesalahpahaman merujuk sumber; bagian susunan penulis berlabel Interpretasi.
