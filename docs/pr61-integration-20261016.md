# Integrasi PR61, PR64, dan PR65 — 16 Oktober 2026

PR61 disinkronkan dengan main `fea47c7`, PR64 `3d89f4c`, dan PR65 `b4b6327` pada cabang ASP. Belum ada penggabungan PR ke main oleh pekerjaan ini. Urutan yang disarankan untuk peninjauan dan merge tetap **65 → 64 → 61**. Cabang PR61 sudah memuat kedua cabang tersebut untuk menguji hasil gabungan; jika PR61 digabungkan lebih dahulu, perubahan SIA dan beranda juga ikut masuk.

## Keputusan penyelesaian

- Daftar hash revisi ASP, elaborasi pra-UAS, Tutor dan SIA digabungkan, mempertahankan hash historis dan pemeriksaan mata kuliah lain. Hash gabungan katalog dicatat secara eksplisit untuk ASP/SIA, dengan pemeriksaan mandiri terhadap seluruh katalog di luar masing-masing kursus.
- Latihan ASP memakai spesifikasi kanonik yang sudah diaudit pada PR61: 60 kuis, 42 kartu pra-UAS, 14 kasus. Objek pra-UTS tetap mengikuti baseline asli. Generator umum semester 3 tidak boleh menimpa paket ASP.
- Jalur aplikasi sebelumnya masih menimpa bacaan kanonik dengan elaborasi lama. Adapter `src/data/asp/activeReadings.ts` kini mendahulukan seluruh blok kanonik TM8–14, termasuk TM12. Penjelasan/contoh elaborasi sebelumnya tetap tersedia sebagai latihan tambahan opsional. Catatan parpol yang sebelumnya ditempatkan sebagai jembatan TM11 dipindahkan ke TM12; kalimat bahwa TM12 belum tersedia diperbarui.
- Baseline lama tidak diambil ulang. `scripts/fixtures/akk203-merge-approved-20261016.json` mencatat 41 varian berkas tepat dari commit yang ditinjau, serta satu penyesuaian jalur ASP di antara varian tersebut. Perubahan di luar hash yang tercatat tetap ditolak. Materi pra-UTS tetap wajib sama dengan baseline asli.

## Validasi

- **84/84 tes standar PASS**, termasuk penjagaan sumber/katalog, materi dan latihan ASP/SIA, renderer, jalur aktif, beranda dan Tutor. Tidak ada tes yang dihapus dari daftar.
- Lint **408 TypeScript/TSX PASS**; TypeScript dan build produksi PASS. Peringatan ukuran chunk yang sudah ada tetap muncul.
- Di browser, TM12 dibuka melalui daftar materi pra-UAS. Bacaan kanonik, latihan singkat dan kedua tingkat pendalaman tambahan dapat dibuka; penjelasan tambahan yang relevan tetap terlihat. Tampilan diperiksa pada 1440×1000 dan 390×844 tanpa luapan horizontal halaman.
- Bukti lokal: `../tmp/pr61-integration-{tests,lint,build}.log` dan `../tmp/tutor-learning-proof/pr61-tm12-{desktop,mobile}.png`.

## Status sumber

Status audit sumber ASP tetap **NEEDS_HUMAN_REVIEW**, `sourceComplete=false`. Celah buku/bahan dosen dan batas pemeriksaan pada laporan revisi buku sebelumnya tetap berlaku. Kelulusan integrasi teknis tidak mengubah catatan kelengkapan sumber atau menjadi validasi independen oleh dosen.
