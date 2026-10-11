# Kode Semester III

Acuan: tabel Semester III yang diberikan pengguna pada 11 Oktober 2026. Tabel ini diutamakan untuk identitas mata kuliah saat kode pada RPP atau katalog lama berbeda.

| Mata kuliah | Kode | Kode baru | Prasyarat |
|---|---|---|---|
| Pengantar Manajemen | MNU108 | FEB25603011 | MNU101 (L) |
| Manajemen Keuangan | MNK102 | FEB25603012 | MNU101 (L) |
| Akuntansi Keuangan Menengah II | AKK202 | FEB25603013 | AKK106 (L) |
| Akuntansi Sektor Publik | AKK203 | FEB25603014 | AKK106 (L) |
| Perpajakan II | PJK301 | FEB25603015 | PJK201 (L) |
| Sistem Informasi Akuntansi | SII306 | FEB25603016 | AKK106 (L) |
| Pengauditan Berbasis Risiko I | AKA201 | FEB25603017 | AKK201 (T) |

Setiap mata kuliah memiliki 3 SKS, jumlah Semester III 21 SKS.

## Kompatibilitas

- AKS201 membuka ASP dengan kode AKK203. MNK201 membuka Manajemen Keuangan dengan kode MNK102. URL lama diganti tanpa menambah riwayat navigasi; parameter kueri dan fragmen URL tetap dipertahankan oleh aplikasi.
- Progres bacaan lokal, status pengulangan dan bintang flashcard, serta sesi kuis berpindah menggunakan migrasi yang sudah ada. Entri yang sudah tersimpan dengan kode baru tetap diutamakan. ID latihan tetap sama.
- Progres dari akun yang masih menggunakan kode lama dinormalisasi ketika dibaca. Pembatalan tanda selesai menghapus baris berkode lama dan baru untuk pengguna dan bab yang sama agar tidak muncul lagi setelah masuk ulang.
- Jadwal lama dinormalisasi dalam memori saat dibaca. Jadwal baru menyimpan kode saat ini. Perubahan ini tidak menjalankan migrasi massal pada basis data.
- Nama berkas dan ekspor lama seperti `aks201.ts`, `mnk201.ts`, `AKS201_READINGS`, dan `MNK201_READINGS` dipertahankan sebagai detail internal. Registri menyediakan kode baru dan alias lama ke materi yang sama.

## Benturan kode

FEB25603012 sebelumnya terpasang pada Akuntansi Manajemen (AKM202). Tabel pengguna menetapkan kode tersebut untuk Manajemen Keuangan (MNK102), sehingga kode alternatif yang salah dilepas dari AKM202. AKM202 tetap dapat dibuka menggunakan kode AKM202; pengganti kode FEB untuk mata kuliah tersebut memerlukan acuan Semester IV.

Kode FEB25603013 dan FEB25603014 sekarang membuka AKM II dan ASP sesuai tabel. Tautan dengan kode FEB yang sebelumnya salah terpasang mengikuti pemilik yang benar dalam tabel; pemilik sebelumnya tidak dapat ditebak dari URL saja.

Manajemen Stratejik, materi kuliah selain satu penyebutan kode pada pengantar ulasan Manajemen Keuangan, serta isi dan ID latihan dipertahankan.

## Validasi

- Lint, TypeScript, build, pemeriksaan runtime, dan browser standar lulus. Build masih memberi peringatan ukuran chunk yang sudah ada.
- Semua 63 tugas standar dijalankan satu per satu: 62 lulus, satu kegagalan `mnu307_render_rules` pada hash `src/data/manstrat/modules/tm1.ts`. Baseline main 9427e3e memiliki kegagalan yang sama, dengan 61 dari 62 tugas lulus. `npm test` berhenti pada kegagalan baseline tersebut karena runner memakai pola berhenti saat gagal.
- Guard baru memeriksa tujuh pemetaan, keunikan kode di seluruh katalog, prasyarat, alias URL, kesamaan seluruh data latihan dan ID, migrasi penyimpanan lokal, progres akun, serta jadwal akun menggunakan tiruan basis data.
- Browser aplikasi memeriksa tujuh kode pendek dan tujuh kode FEB. Pada ponsel, AKS201 dan MNK201 membuka kode baru sambil mempertahankan kueri dan fragmen URL serta progres bacaan. Kuis, flashcard, dan panduan bank soal kedua mata kuliah dapat dibuka.
- Snapshot proteksi diperbarui hanya untuk tiga registri latihan bersama dan katalog yang memang berubah. Proteksi materi Manajemen Stratejik dipertahankan.
