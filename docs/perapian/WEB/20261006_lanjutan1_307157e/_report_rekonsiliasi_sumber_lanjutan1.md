# Rekonsiliasi sumber lanjutan 1 — 6 Oktober 2026

Pemeriksaan ini menyelesaikan identifikasi dan beberapa pencocokan sumber lokal. **Bukan audit lengkap 56 TM, bukan QA website, dan tidak mengubah isi akademik PR45.** Semua bukti baru dipisahkan dari laporan parsial 20261006.

## AKA201: paket yang benar-benar menghasilkan runtime

42/42 Markdown pada `C:/cek/.content-inbox/AKA201` sama byte dengan ekstraksi `Downloads/AKA201 (7).zip` yang tersimpan pada laporan parsial. Hasil ini mengatasi keraguan kecocokan arsip dan inbox; bukan menyimpulkan arsip berlaku hanya karena nama paling baru.

Ketujuh `05_student_learning_version.md` inbox dikonversi dengan converter yang sudah dipakai proyek, ke file bukti baru, lalu objeknya dibandingkan dengan registry runtime. **TM01–TM07 semuanya deepEqual**, tanpa melepas field akademik atau menulis ulang file production. Lihat `aka201-runtime-reconciliation.json`, `logs/aka201-converter-tm*.log`, dan `source-inspection/AKA201-generated/`.

PDF Arens lokal berjumlah 743 halaman; front matter PDF p.10 menyebut Fifteenth Canadian Edition. Paket inbox memang menetapkan 15th Canadian untuk fakta/halaman, sambil mengungkap RPS menulis 16th. Mismatch edisi ini tetap harus dijelaskan pada matriks sumber, tetapi tidak ada ketidakpastian paket mana yang menghasilkan runtime. Status isi/halaman setiap fakta dan standar ISA/SA masih membutuhkan audit lengkap. Front matter bukan bukti seluruh isi sumber sudah diperiksa.

## MNK201: sumber kontrak, materi, dan runtime berhasil dibedakan

Kontrak lokal `C:/cek/Manajemen Keuangan/Materi/Kontrak MK 2026.xlsx`, sheet1 C14, menetapkan **Brigham & Houston, Fundamentals of Financial Management 15th ed., 2019**. XML sel kontrak diekstrak tanpa evaluasi formula atau klaim visual workbook. Buku PDF yang tersedia adalah **16th edition** (PDF p.4), 866 halaman, copyright 2022; PPTX CH4/5/8/10 juga secara eksplisit menyebut Sixteenth Edition 2022. Identitas ini dikonfirmasi dari isi file, bukan filename FMM/FFM.

Kontrak dan daftar isi buku lokal sama-sama menempatkan TM05 cost of capital di Ch.10, TM06 capital budgeting di Ch.11, dan TM07 cash-flow estimation di Ch.12. Berikut rekonsiliasi yang harus dipakai saat audit bahasa sumber-spesifik:

| TM | Kontrak 2026 dan materi lokal | Rujukan runtime yang perlu ditelaah |
| --- | --- | --- |
| 01 | Overview, Ch.1; PDF p.19 TOC menunjuk cetak p.2; FFM_CH1 tersedia | Menyebut Houston 16e/2022 Ch.1; edisi kontrak berbeda |
| 02 | Analysis of statements, Ch.4; buku juga Ch.3 untuk statements/cash flow/taxes | Houston 16e Ch.3/4; cocok secara topik, perlu batas cakupan |
| 03 | TVM, Ch.5; FMM_CH5 sebenarnya Houston 16e | Runtime menambahkan Ehrhardt Ch.5 tanpa paket/edisi yang dibekukan |
| 04 | Risk, Ch.8; FMM_CH8 sebenarnya Houston 16e | Houston Ch.8 dan Ehrhardt Ch.6; sumber kedua belum dipastikan |
| 05 | Cost of capital, Ch.10; FMM_CH10 sebenarnya Houston 16e | Runtime menyebut Houston/Ehrhardt Ch.9; berbeda dari kontrak dan buku lokal |
| 06 | Capital budgeting, Ch.11; TOC buku cetak p.389 | Runtime menyebut Houston/Ehrhardt Ch.10; berbeda dari kontrak dan buku lokal |
| 07 | Cash-flow estimation/risk, Ch.12; TOC buku cetak p.421 | Runtime menyebut Houston/Ehrhardt Ch.11; berbeda dari kontrak dan buku lokal |

**Temuan sumber S-MNK-01, prioritas sebelum rewrite terkait:** penomoran bab TM05–TM07 pada runtime berbeda dari dua sumber lokal yang teridentifikasi; kontrak 15e dan materi 16e juga harus dicatat. Ini temuan rujukan, bukan kesimpulan perhitungan/isi salah. Jangan otomatis mengganti ref atau isi dalam PR45. Keputusan sumber: kontrak mengontrol scope; buku/PPTX 16e adalah file tersedia untuk verifikasi fakta dengan crosswalk bab/halaman. Bila Ehrhardt tetap dipakai, identifikasi edisi/file dan halaman konkretnya dahulu. Buku 15e sesuai kontrak belum ditemukan pada lokasi materi yang diperiksa.

Bukti: `source-reconciliation.json` (hash PDF), `source-details.json` (identitas PPTX), `source-assets-and-contract.json` (sel kontrak), `source-inspection/MNK201-book-PDF019.txt` (TOC). HANDOFF_MNK201 adalah riwayat implementasi, bukan pengganti sumber akademik atau bukti check baru.

## AKK202 TM01: paket tidak ada, tetapi sumber primer lokal ditemukan

Tidak ada paket TM01 pada content-pipeline/inbox yang ditemukan. Sumber yang berlaku dapat ditelusuri dari **RPP AKM II**, **IA_IFRS_Ch9.pptx** (99 slide, Kieso IFRS Fifth Edition), serta buku IFRS 5e pada shared assigned-textbook (2.484 PDF pages). RPP PDF p.2 mendefinisikan TM01 acquisition/valuation/cost-revaluation model dan menggunakan penomoran KW Ch.10; materi IFRS lokal menggunakan Ch.9. Ini crosswalk sumber yang harus ditulis, bukan alasan mengganti semester/kode atau seluruh konten frozen.

Contoh Shalla dalam runtime sudah dicocokkan secara terarah:

- Slide34: debt spesifik 750.000 pada 15%, investment income 40.000; debt umum 500.000 pada 10% dan 1.500.000 pada 12%.
- Gambar sumber asli slide35/Illustration9.4: alokasi 210.000, 300.000, 540.000, 450.000; general WAAE 200.000. Gambar diekstrak dari deck dan dibuka langsung, bukan hanya text count.
- Slide36: capitalization rate umum 11,5% dan general borrowing capitalization 23.000.
- Gambar sumber asli slide37/Illustration9.5: 112.500 − 40.000 + 23.000 = **95.500**, cocok dengan hasil runtime. Slide33 adalah akhir contoh pendanaan lain; jangan mengambil 91.840 dari slide33 sebagai hasil contoh campuran slide34–37.

Satu typo pada kalimat slide36 menuliskan faktor 1.500.000 di dalam perkalian yang menghasilkan 112.500; pokok utang spesifik pada slide34 adalah 750.000. Runtime memakai 750.000, dan hasil 95.500 sesuai tabel sumber slide37. Jangan mereplikasi typo sumber saat rewrite.

Gambar di `source-inspection/AKK202-slide35-image17.jpeg` dan `AKK202-slide37-image18.png` berjenis **original embedded source images**, bukan screenshot website atau QA diagram. Pencocokan satu contoh tidak menyelesaikan seluruh audit TM01; acquisition, exchanges, revaluation, journal metadata dan sumber lainnya masih perlu ditelusuri satu per satu.

## Batas pekerjaan yang tersisa

Identitas paket AKA201 terkonfirmasi; sumber MNK201 dan AKK202 TM01 dapat ditelusuri dengan gap spesifik di atas. Belum ada penilaian semantik lengkap 56 TM atau inspeksi website baru. Pilot MNU108 TM01 tetap bersyarat. Lanjutkan menggunakan matriks per-TM lama sebagai daftar pekerjaan, lalu tambah bukti dan penilaian utuh pada versi berikutnya; jangan mengubah status “indikator kode” menjadi “audit selesai” hanya karena sumber ditemukan.
