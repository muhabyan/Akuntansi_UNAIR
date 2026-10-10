# AKA201 TM07: QA Manifest

## 1. Verifikasi sumber

| Canonical | Sumber | Yang dicek | Status |
|---|---|---|---|
| C-001–C-004 | ARENS pp.199–200 | Definisi; rule of thumb; relatif (1 juta vs 5,7 juta); Figure 6-6 | Terverifikasi |
| C-010–C-021 | ARENS pp.200–204; ISA320 paras. 10, 12–14, A8–A9, A14 | Kewajiban; Figure 6-7; tiga langkah; faktor; Table 6-6, 6-7; sensitivitas; Auditing in Action 6-5; dokumentasi; revisi | Terverifikasi |
| C-030–C-034 | ARENS pp.199, 205–206 (Figure 6-5, 6-8) | Pengguna; EBITA 7.370 + 1.452 = 8.822; rentang; 441.000; 331.000; 265.000; trivial 4.400 | Terverifikasi dan dihitung ulang |
| C-040, C-041 | ARENS pp.204, 208–209 | Definisi trivial; City of Toronto; trivial ≠ tidak material | Terverifikasi |
| C-050–C-057 | ISA320 paras. 9, 11, A13; ARENS pp.204, 207–208 | Definisi; aggregation risk; fungsi; 50–75%; FRC; faktor; penggunaan | Terverifikasi |
| C-060 | ARENS p.208; ISA320 para. 10 | Materialitas spesifik | Terverifikasi |
| C-070–C-072 | ARENS pp.208–210 | Tiga kategori; Table 6-8; opini dan komunikasi | Terverifikasi |

## 2. Perhitungan yang dicek ulang

| Perhitungan | Hasil hitung ulang | Di buku/bacaan |
|---|---|---|
| 3% × 8.822 ribu | 264.660 | 265.000 |
| 7% × 8.822 ribu | 617.540 | 618.000 |
| 5% × 8.822 ribu | 441.100 | 441.000 |
| 5% × 8.137 ribu | 406.850 | 407.000 |
| 75% × 441.000 | 330.750 | 331.000 |
| 75% × 407.000 | 305.250 | 305.000 |
| 1% × 441.000 | 4.410 | 4.400 |
| 60% × 441.000 | 264.600 | 265.000 (pendapatan dan persediaan) |
| Kasus 1: 5% × 2.400.000.000 | 120.000.000 | Rp120.000.000 |
| Kasus 1: 60% / 75% / 1% × 120.000.000 | 72.000.000 / 90.000.000 / 1.200.000 | sesuai |
| Kasus 2: 3 × 45.000.000 | 135.000.000 | sesuai |
| Kasus 3: 30.000.000 − 40.000.000 | −10.000.000 | rugi Rp10.000.000 |

## 3. Pengecekan konten dan teknis

- [ ] Callout "rules of thumb bukan standar" tampil di dalam Fondasi, tepat setelah Intinya.
- [ ] Callout jebakan trivial ≠ tidak material tampil.
- [ ] Kasus 4 berlabel Interpretasi.
- [ ] Kunci kuis: A = q02, q07; B = q04, q05; C = q01, q08; D = q03, q06.
- [ ] Tanpa `$`, tanpa LaTeX; tabel tampil sebagai kartu di 390 px; test render lulus; mode terang/gelap.

## 4. Inkonsistensi dan catatan

| # | Temuan | Penanganan |
|---|---|---|
| 1 | Figure 6-8 bagian adjusted performance materiality mencantumkan "Previous period 24 000" untuk pendapatan, jauh berbeda dari persediaan (244.000) dan dari pola 60–75 persen materialitas; kemungkinan salah cetak untuk 244.000. | Angka periode lalu untuk pendapatan tidak dipakai di bacaan; hanya angka periode berjalan (265.000). |
| 2 | Figure 6-8 memberi label tolok ukur "operating income (adjusted for depreciation)" dan teks menyebutnya EBITA. | Ditulis EBITA = laba operasi + amortisasi, sesuai perhitungan buku. |
| 3 | Buku menyebut Figure 6-6 saat menjelaskan konsep materialitas keseluruhan (p.200), padahal gambar yang relevan adalah Figure 6-7. | Bacaan merujuk Figure 6-7 untuk pengguna dan keputusannya. |
| 4 | ISA 450 tidak dibaca langsung; fakta ISA 450 (trivial, tiga kategori, faktor kualitatif) diambil dari buku yang merujuk CAS 450. | Dirujuk sebagai ARENS. |
| 5 | Ambang trivial 1 persen adalah contoh buku, bukan ketentuan. | Kasus 1 menyebut "mengikuti contoh Hillsburg". |

## 5. Revisi fondasi (v2)

- [ ] Section 0 "Fondasi" tampil paling awal, termasuk tabel "Kesalahpahaman umum" dengan sumber per baris.
- [ ] Section "Uji pemahaman" tampil sebelum Exam toolkit; contoh jawaban tersembunyi sampai diklik.
- [ ] Empat flashcard v2 (pertanyaan "kenapa" dan "contoh") menggantikan kartu lama dengan ID yang sama.
- [ ] Setiap contoh jawaban dan baris kesalahpahaman merujuk sumber; bagian susunan penulis berlabel Interpretasi.
