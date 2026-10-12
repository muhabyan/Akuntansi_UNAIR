# Audit katalog S1 Akuntansi semester 2 sampai 5

Acuan: Buku Panduan Pendidikan Program Sarjana FEB Universitas Airlangga 2025/2026, bagian C Program Studi S1 Akuntansi. Tabel dibaca dari PDF dan dibandingkan dengan render halaman: semester II pada halaman PDF 102 (cetak 87), semester III dan IV pada PDF 103 (cetak 88), semester V pada PDF 104 (cetak 89). Kode dalam bagian Program Studi Manajemen tidak digunakan. SHA-256 PDF dan transkripsi 28 baris tersimpan di `scripts/fixtures/accounting-handbook-2025.json`.

Main acuan: `ee5841537e3f438d951a20ac784a7a309e9bf51b`, setelah PR #56 dan #57. Kode MNU307 dan semua materi Manajemen Stratejik hasil merge tersebut dipertahankan. PR #55 diperluas dengan hasil pemeriksaan handbook.

## Semester 2: 20 SKS

| Mata kuliah | Kode | Kode FEB | SKS | Prasyarat |
|---|---|---|---:|---|
| Pengantar Bisnis | MNU101 | FEB25603004 | 3 | Tidak tercantum |
| Pengantar Teori Ekonomi | EKT109 | FEB25603005 | 3 | Tidak tercantum |
| Perpajakan I | PJK201 | FEB25603006 | 3 | Tidak tercantum |
| Akuntansi Biaya | AKM201 | FEB25603007 | 3 | AKK106 (L) |
| Statistik untuk Akuntan | MAS122 | FEB25603008 | 3 | AKK106 (L) |
| Etika & Keterampilan Profesional untuk Akuntan | AKA103 | FEB25603009 | 2 | Tidak tercantum |
| Akuntansi Keuangan Menengah I | AKK201 | FEB25603010 | 3 | AKK106 (L) |

## Semester 3: 21 SKS

| Mata kuliah | Kode | Kode FEB | SKS | Prasyarat |
|---|---|---|---:|---|
| Pengantar Manajemen | MNU108 | FEB25603011 | 3 | MNU101 (L) |
| Manajemen Keuangan | MNK102 | FEB25603012 | 3 | MNU101 (L) |
| Akuntansi Keuangan Menengah II | AKK202 | FEB25603013 | 3 | AKK106 (L) |
| Akuntansi Sektor Publik | AKK203 | FEB25603014 | 3 | AKK106 (L) |
| Perpajakan II | PJK301 | FEB25603015 | 3 | PJK201 (L) |
| Sistem Informasi Akuntansi | SII306 | FEB25603016 | 3 | AKK106 (L) |
| Pengauditan Berbasis Risiko I | AKA201 | FEB25603017 | 3 | AKK201 (T) |

## Semester 4: 20 SKS

| Mata kuliah | Kode | Kode FEB | SKS | Prasyarat |
|---|---|---|---:|---|
| Pengantar Pasar Modal | MNK314 | FEB25603018 | 3 | MNK102 (T) |
| Akuntansi Keuangan Menengah III | AKK207 | FEB25603019 | 2 | AKK106 (L) |
| Akuntansi Manajemen | AKM301 | FEB25603020 | 3 | AKM201 (T) |
| Sistem Informasi Manajemen | SII203 | FEB25603021 | 3 | SII306 (T) |
| Internal Audit | AKA304 | FEB25603022 | 3 | SII306 (T) |
| Pengauditan Berbasis Risiko II | AKA202 | FEB25603023 | 3 | AKA201 (T) |
| Akuntansi Keuangan Lanjutan I: Konsep dan Penerapan | AKK304 | FEB25603024 | 3 | AKK201 (T) |

## Semester 5: 21 SKS

| Mata kuliah | Kode | Kode FEB | SKS | Prasyarat |
|---|---|---|---:|---|
| Praktik Perpajakan | PJK302 | FEB25603025 | 3 | PJK301 (T) |
| Akuntansi Keuangan Lanjutan II: Konsep dan Penerapan | AKK305 | FEB25603026 | 3 | AKK202 (T) |
| Teori Akuntansi | AKK401 | Tidak tercantum | 3 | AKK201 (T) |
| Manajemen Strategik | MNU307 | Tidak tercantum | 3 | MNU101 (L) |
| Pengantar Praktik Pengauditan | AKA306 | Tidak tercantum | 3 | AKA202 (T) |
| Accounting Data Analytics | AKS301 | Tidak tercantum | 3 | SII203 (T) |
| Metode Penelitian Akuntansi | PNE402 | Tidak tercantum | 3 | MAS122 (T) |

## Koreksi dan perbedaan sumber

- Semester 2 sudah sesuai untuk kode, kode FEB, SKS, dan prasyarat; tidak ada perubahan materi.
- Semester 3: Manajemen Keuangan MNK102/FEB25603012, AKM II AKK202/FEB25603013, ASP AKK203/FEB25603014. Tujuh prasyarat mengikuti tabel.
- Semester 4: Akuntansi Manajemen AKM301/FEB25603020, dengan AKM201 (T). AKK207 menjadi 2 SKS. Jumlah rincian adalah 20 SKS; total tercetak 21 dalam PDF bertentangan dengan rincian. Pengguna memilih mengikuti rincian 2 SKS dan total 20.
- Semester 5: Accounting Data Analytics menggunakan AKS301. MNU307 memang Manajemen Stratejik semester 5. Lima baris semester 5 tidak mencantumkan kode FEB, sehingga kode tambahan tidak dibuat.
- Dua prasyarat dinormalisasi: S11306 pada Internal Audit menjadi SII306 sesuai baris SIA semester 3; MASS122 pada Metode Penelitian menjadi MAS122 sesuai Statistik semester 2. Spasi dalam FEB256030 23 juga dinormalisasi.
- Ejaan katalog yang sudah ada, seperti Manajemen Strategik dan Etika & Keterampilan Profesional, dipertahankan. Identitas mata kuliahnya cocok dengan tabel.

## Tautan dan penyimpanan lama

AKS201 menuju AKK203, MNK201 menuju MNK102, AKM202 menuju AKM301, dan ADA301 menuju AKS301. URL diganti tanpa menambah riwayat; kueri dan fragmen dipertahankan. Nama berkas, ekspor internal, serta ID seluruh latihan dipertahankan. Kode FEB yang sebelumnya salah terpasang mengikuti pemilik resmi; maksud tautan lama berkode FEB tidak dapat ditebak dari URL saja.

AKS301 adalah kode resmi Analytics, sehingga tidak lagi menjadi alias URL atau registri SIA. Browser menjalankan satu migrasi SIA lama AKS301 ke SII306 sebelum memindahkan ADA301 ke AKS301, lalu menyimpan penanda selesai. Progres, pengulangan/bintang flashcard, dan sesi kuis dipertahankan. Data Analytics berikutnya tetap di AKS301 pada pembukaan ulang. Jika penyimpanan diblokir atau JSON rusak, migrasi dapat dicoba kembali; data asli tidak dihapus tanpa penyimpanan pengganti yang berhasil.

Progres akun dan jadwal dengan alias yang tidak berbenturan dinormalisasi ketika dibaca. Pembatalan progres memakai pengguna, bab, dan semua alias terkait; data akun pengguna lain tidak ikut dihapus. Jadwal baru memakai kode saat ini. Tidak ada migrasi massal basis data.

Batas verifikasi akun: baris cloud historis AKS301 tidak membawa penanda yang dapat membedakan SIA lama dari Analytics resmi. Baris tersebut dipertahankan dengan kode tersimpan dan tidak otomatis dialihkan ke SII306. Sebelum menerbitkan materi Analytics, identitas baris historis ini perlu diaudit atau dimigrasikan di basis data. Migrasi browser tidak menjanjikan pemindahan baris cloud yang ambigu. Pengujian akun menggunakan tiruan basis data, tanpa akses data akun nyata.

## Pemeriksaan

- Tes pemetaan handbook memeriksa seluruh 28 baris, total 20/21/20/21 SKS, prasyarat, rute pendek/FEB, benturan kode, dan materi AKM serta SIA yang tetap tersedia.
- Guard SIA memeriksa pemisahan Analytics, migrasi satu kali, pengulangan setelah migrasi, kegagalan penyimpanan, JSON rusak, dan pemindahan ADA301 setelah SIA.
- Browser memeriksa 28 rute pendek dan 23 rute FEB. Tautan lama ASP, Keuangan, dan Akuntansi Manajemen diuji di ponsel, termasuk progres, kuis, flashcard, serta membuka panduan bank soal. ADA301 membuka Analytics dengan keadaan kosong yang jujur, tanpa materi SIA.
- Baseline main: 64 dari 65 tugas standar lulus; `mnu307_render_rules` gagal pada hash checkout Windows untuk registri bank soal. Rerun awal PR juga menunjukkan hash CRLF 14 berkas Manstrat yang belum tercatat; seluruh hash isi LF cocok dengan repository main. Fixture ditambah varian CRLF tanpa mengubah hash isi repository atau sumber materi. Dua ekspektasi tes yang masih memakai kode SIA lama dan jumlah tulis sebelum penanda migrasi juga diperbarui.
- Hasil akhir: lint, TypeScript/build, runtime, browser standar, dan 67 dari 67 tugas tes standar lulus. Peringatan ukuran chunk build dan DOM bersarang pada runtime dicatat terpisah dari kegagalan tes.
- Perbandingan terhadap main memastikan seluruh `src/data/manstrat`, latihan MNU307, `src/components/UpdateNotifier.tsx`, dan `src/index.css` tetap identik. PR45 dan worktree perapian-pr45 tidak disentuh. Materi pra-UTS dipertahankan; satu penyebutan kode pada pengantar Manajemen Keuangan disesuaikan.
