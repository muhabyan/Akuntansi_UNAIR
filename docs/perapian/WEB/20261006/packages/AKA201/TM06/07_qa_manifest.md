# AKA201 TM06: QA Manifest

## 1. Verifikasi sumber

| Canonical | Sumber | Yang dicek | Status |
|---|---|---|---|
| C-001–C-003 | ARENS pp.620–621 | Revisi 2015; KAM; tunda sampai 15 Des 2020; ACCA 560 laporan, 11 negara; Figure 18-1 | Terverifikasi |
| C-010–C-016 | ARENS pp.621–628 | Definisi; lima syarat; Figure 18-3; "in our opinion"; corresponding vs comparative; tanggal; dual dating | Terverifikasi |
| C-020–C-023 | ARENS pp.628, 634–635, 640; Table 18-2 | Pelaporan kelangsungan usaha empat situasi | Terverifikasi |
| C-030–C-037 | ISA701 paras. 4, 8–10, 13–14; ARENS pp.625–630 | Definisi; tiga tahap; isi deskripsi; bukan pengganti; pengecualian; contoh ASMI | Terverifikasi |
| C-040–C-043 | ISA706 para. 7, 8; ARENS pp.630–633 | Definisi; contoh; hal lain dan ISA 710; KAM vs EOM/OM | Terverifikasi |
| C-050–C-055 | ISA705 paras. 5(a), 6–10; ARENS pp.633–636 | Dua kondisi; pervasif; matriks; disclaimer multi-ketidakpastian; Figure 18-8; komunikasi TCWG | Terverifikasi |
| C-052 (istilah) | IAPI, halaman Standar Audit | Tiga tipe opini modifikasian dalam bahasa Indonesia; SA 705 (Revisi 2021) efektif 1 Jan 2022 | Terverifikasi |
| C-060–C-066 | ARENS pp.636–639; ISA705 paras. 11–13 | Except for; tiga penyebab; Figure 18-9 (2.000.000; 500.000; 100.000; 400.000); ruang lingkup; pembatasan manajemen; Figure 18-10; auditor lain | Terverifikasi |
| C-070–C-073 | ARENS pp.640–642 | Tidak wajar; Saskatchewan; disclaimer; Figure 18-11, 18-12 (1.000.000; >90 persen) | Terverifikasi |

Aritmetika Figure 18-9: penurunan 500.000 dikurangi efek pajak 100.000 = penurunan laba bersih 400.000 (konsisten dengan buku).

## 2. Pengecekan konten

- [ ] Matriks 2×2 memakai istilah Indonesia yang terverifikasi.
- [ ] Callout jebakan tidak wajar vs tidak menyatakan pendapat dan callout kelangsungan usaha tampil.
- [ ] Tabel "ringkasan cepat" di section 6 tampil.
- [ ] Alur percakapan role play dan Kasus 3 berlabel Interpretasi.
- [ ] Kunci kuis: A = q03, q08; B = q02, q05; C = q01, q07; D = q04, q06.

## 3. Pengecekan teknis

- [ ] Tanpa `$`, tanpa LaTeX; tabel tampil sebagai kartu di 390 px; test render lulus; mode terang/gelap.

## 4. Inkonsistensi dan catatan

| # | Temuan | Penanganan |
|---|---|---|
| 1 | Buku menyebut empat "tipe laporan modifikasian" (qualified-GAAP departure, qualified-scope, adverse, disclaimer); SA 705 menyebut tiga tipe opini modifikasian. | Bacaan memakai tiga tipe; dua bentuk wajar dengan pengecualian dijelaskan sebagai dua penyebab. |
| 2 | Buku merujuk "Figure 17-2" untuk contoh hal lain (p.632), padahal contohnya ada di Figure 18-7. | Bacaan merujuk contoh di Figure 18-7. |
| 3 | Figure 18-10 buku tidak konsisten menyebut nama entitas ("Great Cause Charity Foundation" vs "Great Cause Foundation") dan kalimat terakhir basis opini menyebut tahun 2019. | Hanya substansinya yang dipakai (kelengkapan pendapatan penggalangan dana tidak dapat diverifikasi). |
| 4 | Kewajiban KAM menurut buku adalah ketentuan Kanada; ketentuan Indonesia untuk emiten tidak diteliti. | Bacaan menyebut "menurut buku". |
| 5 | Judul bagian laporan versi SA IAPI tidak tersedia. | Judul bahasa Inggris dipertahankan. |

## 5. Revisi fondasi (v2)

- [ ] Section 0 "Fondasi" tampil paling awal, termasuk tabel "Kesalahpahaman umum" dengan sumber per baris.
- [ ] Section "Uji pemahaman" tampil sebelum Exam toolkit; contoh jawaban tersembunyi sampai diklik.
- [ ] Empat flashcard v2 (pertanyaan "kenapa" dan "contoh") menggantikan kartu lama dengan ID yang sama.
- [ ] Setiap contoh jawaban dan baris kesalahpahaman merujuk sumber; bagian susunan penulis berlabel Interpretasi.
