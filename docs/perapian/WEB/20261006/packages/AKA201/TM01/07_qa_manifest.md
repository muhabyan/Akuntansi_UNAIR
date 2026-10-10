# AKA201 TM01: QA Manifest

## 1. Verifikasi sumber

Semua baris di bawah sudah dicek langsung terhadap teks PDF pada halaman yang disebut (ARENS 15th Canadian ed., halaman buku; ISA 200 dari IAASB 2025 Handbook Vol. 1, nomor paragraf).

| Canonical | Sumber | Yang dicek | Status |
|---|---|---|---|
| C-001–C-005 | ARENS p.2 | Definisi assurance engagement, hubungan akuntabilitas, Figure 1-1, subject matter dan kriteria | Terverifikasi |
| C-010–C-013 | ARENS p.3 | Dua tingkat assurance; definisi assurance, limited, reasonable; contoh UPS | Terverifikasi |
| C-014 | ISA200 para. 5, 13(m) | Persuasive vs conclusive; high but not absolute | Terverifikasi |
| C-015 | ARENS p.3 | Definisi materialitas buku; rumusan "pengguna akan berpendapat lain" | Terverifikasi |
| C-016 | ISA200 para. 6 | Ukuran/sifat; tidak bertanggung jawab atas salah saji tidak material | Terverifikasi |
| C-020, C-021 | ARENS p.3 | Definisi auditing; art and science | Terverifikasi |
| C-022 | ARENS p.4 | Kriteria IFRS/ASPE/ASNPO; kriteria disepakati untuk informasi subjektif | Terverifikasi |
| C-023 | ARENS p.4; ISA200 para. 13(b) | Empat bentuk bukti; sufficiency vs appropriateness | Terverifikasi |
| C-024, C-025, C-027, C-028 | ARENS pp.4–5 | Unsur kompeten dan independen; definisi sidebar; laporan | Terverifikasi |
| C-026 | ISA200 para. 13(k), 13(l) | Definisi professional judgment dan skepticism | Terverifikasi |
| C-029 | ARENS pp.5–6 | Figure 1-2 dan faktor penilaian risiko CRA | Terverifikasi |
| C-030 | ARENS pp.6–7 | Dialog Hillsburg: auditing = pekerjaan, assurance = hasil | Terverifikasi |
| C-031–C-035 | ISA200 paras. 3, 4, 11, 12, 13(j), 14–17 | Tujuan, tujuan keseluruhan, disclaim/withdraw, premis, kewajiban umum | Terverifikasi |
| C-040–C-043 | ARENS pp.7–8 | Kewajiban hukum; tiga komponen bunga; angka 1 miliar / 1% / 10 juta | Terverifikasi |
| C-044, C-045 | ARENS p.8 | Empat penyebab; contoh 2.000 dolar; pilihan menanggung risiko | Terverifikasi |
| C-046–C-048 | ARENS p.9 | Tiga cara mengurangi; Theranos (700 juta, 9 miliar, 2018, ambang accredited investor); alasan pengguna | Terverifikasi |
| C-050–C-052 | ARENS pp.10–11 | Table 1-1; contoh compliance; operational/performance audit | Terverifikasi |
| C-060–C-066 | ARENS pp.11–14 | Lima jenis auditor; definisi IIA; audit committee; tiga audit Auditor General of Canada; CRA; forensic; public accountants dan statutory audit | Terverifikasi |
| C-070–C-072 | ARENS pp.14–15 | Definisi akuntansi; sumber kebingungan; perbedaan | Terverifikasi |
| C-080–C-084 | ARENS pp.15–19 | Audit, review, audit informasi lain; analogi mobil; asurans nonkeuangan; jasa nonasurans | Terverifikasi |
| C-090 | Bukan dari ARENS | Padanan Indonesia; hanya pernyataan umum tanpa nomor regulasi | **Interpretasi, ditampilkan (default disetujui)** |

## 2. Pengecekan konten oleh implementer

- [ ] Setiap angka di bacaan dan item latihan cocok dengan 04 (1 miliar, 1%, 10 juta, 2.000, 700 juta, 9 miliar, 2018, 1 juta, 200.000, 5 juta, 15 juta paket, 220 negara, 1935, lima tahun).
- [ ] Definisi auditing muncul utuh, keempat unsurnya lengkap.
- [ ] Tabel buku vs ISA untuk skepticism dan judgment tampil dengan kedua kolom.
- [ ] Kalimat "audit tidak mengubah business risk" ada dan tidak terbalik.
- [ ] Blok Interpretasi (padanan Indonesia dan Kasus 3) berlabel Interpretasi.
- [ ] Section 7 menampilkan agency theory (definisi, monitoring, bonding); biaya keagenan dan asimetri informasi di blok pendalaman.
- [ ] Tidak ada nomor undang-undang, pasal, atau angka Indonesia di bacaan.
- [ ] Kunci kuis tersebar: A = q02, q06; B = q03, q07; C = q01, q04; D = q05, q08.
- [ ] Setiap item latihan menyebut canonical yang benar.

## 3. Pengecekan teknis

- [ ] Tidak ada simbol `$` di teks (angka ditulis sebagai kata).
- [ ] Tidak ada LaTeX.
- [ ] Tabel tampil sebagai kartu di lebar 390 px.
- [ ] Test render yang sudah ada tetap lulus tanpa known issue baru.
- [ ] Mode terang dan gelap.

## 4. Inkonsistensi dan catatan

| # | Temuan | Penanganan |
|---|---|---|
| 1 | RPS menyebut Arens 16th Canadian ed. (2024); file sumber adalah 15th Canadian ed. | Semua halaman yang dirujuk RPS untuk Week 1–7 cocok dengan file 15th. Dipakai apa adanya; dicatat di 00_status. |
| 2 | RPS Week 1 menyebut agency theory dan information asymmetry; ARENS Ch.1 tidak membahasnya. | **Selesai (v2):** agency theory ditambahkan dari Jensen & Meckling (1976); asimetri informasi sebagai istilah penghubung berlabel Interpretasi. |
| 3 | Definisi skepticism dan judgment di ARENS berbeda redaksi dengan ISA 200. | Keduanya ditampilkan berdampingan; ISA 200 disebut sebagai rumusan standar. |
| 4 | Definisi materialitas ARENS memakai "would likely influence", ISA 200 memakai "could reasonably be expected to influence". | Keduanya diparafrasekan; tidak dipertentangkan. Pendalaman di TM07. |
| 5 | Referensi RPS menyebut SA 200 (Revisi 2021) dari IAPI, tetapi teks SA tidak tersedia. | Isi diambil dari ISA 200. SA mengadopsi ISA, tetapi redaksi Indonesia resminya belum dicek. |
| 6 | ARENS p.3 menulis limited assurance sebagai "negative assurance". | Dipertahankan sebagai rumusan buku. |

## 5. Revisi fondasi (v2)

- [ ] Section 0 "Fondasi" tampil paling awal, termasuk tabel "Kesalahpahaman umum" dengan sumber per baris.
- [ ] Section "Uji pemahaman" tampil sebelum Exam toolkit; contoh jawaban tersembunyi sampai diklik.
- [ ] Empat flashcard v2 (pertanyaan "kenapa" dan "contoh") menggantikan kartu lama dengan ID yang sama.
- [ ] Setiap contoh jawaban dan baris kesalahpahaman merujuk sumber; bagian susunan penulis berlabel Interpretasi.
- [ ] Sub-bagian agency theory di section 7 merujuk Jensen & Meckling (1976) dengan nomor halaman; blok asimetri informasi berlabel Interpretasi.

| Canonical | Sumber | Yang dicek | Status |
|---|---|---|---|
| C-095–C-098 | JM1976 pp.305–309, 323, 325, 338–339 | Definisi hubungan keagenan; tiga komponen biaya; pemegang saham–manajer; auditing sebagai monitoring dan bonding; tujuan teori (item 6, p.306) | Terverifikasi dari teks artikel |
