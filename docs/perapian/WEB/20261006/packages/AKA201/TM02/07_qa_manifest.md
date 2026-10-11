# AKA201 TM02: QA Manifest

## 1. Verifikasi sumber

| Canonical | Sumber | Yang dicek | Status |
|---|---|---|---|
| C-001 | ARENS p.25 | Faktor kualitas; uji AQI CPAB di 24 perusahaan (2016–17); komposisi tim | Terverifikasi |
| C-002–C-005 | ARENS pp.26–28 | Empat kategori KAP; >5.000 KAP; bentuk organisasi; Table 2-2; reviu berjenjang | Terverifikasi |
| C-010–C-017 | ARENS pp.29–32 | CPA Canada; provinsi; AASB; IAASB (113 yurisdiksi, ketua + 17 anggota); CPAB; PCAOB (>100 emiten tahunan, lainnya 3 tahun); CSA/SEC; Sino-Forest 117 juta | Terverifikasi |
| C-020–C-028 | ARENS pp.32–38 | Table 2-3, 2-4; empat prinsip; Figure 2-1; kompetensi; risk-based; laporan; Figure 2-2 | Terverifikasi |
| C-030–C-032 | ARENS pp.39–40 | Budaya KAP; empat pendorong; contoh AQI; pihak lain | Terverifikasi |
| C-040–C-044 | ARENS pp.40–42 | Definisi QC; CSQC 1 vs CAS 220; Table 2-5; inspeksi; KPMG 50 juta | Terverifikasi |
| C-050–C-057 | ISQM1 paras. 1–16; SMM1 paras. 6–16 dan hlm. pengesahan | Ruang lingkup; 8 komponen (kedua bahasa); risk-based; evaluasi tahunan; skalabilitas; tujuan; definisi; efektif 15 Des 2022 / 31 Des 2025 | Terverifikasi |
| C-058, C-059 | ISA220 paras. 9–15 | Tujuan; efektif 15 Des 2022; tanggung jawab partner | Terverifikasi |
| C-060, C-061 | ARENS p.41; ISQM1 paras. 6–9 | Tabel perbandingan (susunan penulis) | Perbandingan, nama elemen terverifikasi |
| C-070–C-079 | UUAP Pasal 1, 3, 5, 6, 12, 13, 18, 25, 27, 28, 43–46, 49–51, 53; PPAP Pasal 8, 16 | Teks JDIH Kemenkeu | Terverifikasi |
| C-080 | PPAP Pasal 11, 18 ayat (3), Penjelasan Pasal 11 | 5 tahun buku; lima entitas; Pihak Terasosiasi; jeda 2 tahun buku; sanksi | Terverifikasi |
| C-081 | ARENS pp.29–32, 40–41; UUAP; SMM1 | Tabel padanan (susunan penulis) | Perbandingan |

Status regulasi: UU 5/2011 dan PP 20/2015 berstatus "Berlaku" di JDIH BPK (dicek 25 Sep 2026).

## 2. Pengecekan konten oleh implementer

- [ ] Callout singkat "Perhatikan" tentang standar lama vs berlaku tampil di dalam Fondasi, setelah tabel tiga lapis dan paragraf sesudahnya (sebelum "Kesalahpahaman umum").
- [ ] Tabel perbandingan Kanada–Indonesia (C-081) sengaja tidak ditampilkan di bacaan; peran lembaga Indonesia sudah ada di section 3.
- [ ] Tabel enam elemen buku tidak diberi kesan sebagai standar berlaku.
- [ ] Delapan komponen tampil lengkap dengan istilah ISQM 1 dan SMM 1.
- [ ] Angka di bacaan: 5 tahun (izin), 5 tahun buku, 2 tahun buku, 2/3, 13 anggota, 8, 6, 31 Des 2025, 113, 24, 50 juta. (Angka lain di 04 seperti 15 Des 2022, 17 anggota IAASB, 117 juta, dan >5.000 KAP tidak ditampilkan di bacaan.)
- [ ] Kasus 1 menyebut bahwa pembatasan berlaku untuk AP (termasuk sebagai Pihak Terasosiasi), bukan KAP.
- [ ] Label Perbandingan dan Interpretasi tampil di tempatnya.
- [ ] Kunci kuis: A = q03, q07; B = q01, q06; C = q04, q08; D = q02, q05.
- [ ] Tidak ada nomor keputusan Menteri tentang penetapan IAPI; tidak ada aturan rotasi sektoral.

## 3. Pengecekan teknis

- [ ] Tanpa `$`, tanpa LaTeX.
- [ ] Tabel tampil sebagai kartu di 390 px.
- [ ] Test render tetap lulus tanpa known issue baru.
- [ ] Mode terang dan gelap.

## 4. Inkonsistensi dan catatan

| # | Temuan | Penanganan |
|---|---|---|
| 1 | Buku memakai CSQC 1 (enam elemen, quality control). RPS menyebut "SPM 1 (ISQM 1), Quality Management". Standar berlaku di Indonesia: SMM 1 (efektif 31 Des 2025). | Keduanya ditampilkan; yang berlaku ditandai. Istilah "SPM 1" dari RPS tidak dipakai di bacaan. |
| 2 | RPS menyebut SA 220 (Revisi terbaru). Teks final SA 220 (Revisi) IAPI tidak tersedia; draf eksposurnya menyebut efektif untuk periode mulai 31 Des 2025. | Isi tingkat perikatan diambil dari ISA 220 (Revised). Tanggal SA 220 tidak dijadikan fakta di bacaan. |
| 3 | Buku menyebut IAASB "International Audit Assurance Standards Board" di satu tempat (p.25) dan "International Auditing and Assurance Standards Board" di tempat lain. | Dipakai nama resmi: International Auditing and Assurance Standards Board. |
| 4 | UU 5/2011 Pasal 4 menyebut pembatasan untuk AP dan/atau KAP; PP 20/2015 Pasal 11 hanya membatasi AP. | Bacaan mengikuti PP (aturan pelaksana yang berlaku). |
| 5 | Angka-angka Kanada (jumlah KAP, jumlah firma terdaftar CPAB) adalah data pada saat buku ditulis. | Ditampilkan sebagai data buku, tidak sebagai kondisi terkini. |

## 5. Revisi fondasi (v2)

- [ ] Section 0 "Fondasi" tampil paling awal, termasuk tabel "Kesalahpahaman umum" dengan sumber per baris.
- [ ] Section "Uji pemahaman" tampil sebelum Exam toolkit; contoh jawaban tersembunyi sampai diklik.
- [ ] Empat flashcard v2 (pertanyaan "kenapa" dan "contoh") menggantikan kartu lama dengan ID yang sama.
- [ ] Setiap contoh jawaban dan baris kesalahpahaman merujuk sumber; bagian susunan penulis berlabel Interpretasi.
