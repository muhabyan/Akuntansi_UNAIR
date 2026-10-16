# ASP pra-UAS AKK203 / FEB25603014

Paket ini mengikuti tujuh pertemuan setelah UTS dalam kontrak kuliah gasal2026/2027. Implementasi dan latihan siap ditinjau sebagai PR draft. Status akademik setiap TM adalah **NEEDS_HUMAN_REVIEW** karena buku RPP dan beberapa sumber final belum tersedia. Jumlah latihan serta kelulusan tes tidak berarti semua bab sudah diaudit lengkap.

| TM | Topik | Penugasan RPP |
|---|---|---|
|8|SAPP/SAPD|DN Bab10; IBS Bab2; peraturan terkait|
|9|Kinerja pemerintah|MD Bab8; DN Bab8; JP Bab2; peraturan terkait|
|10|Audit pemerintah|SAP,SPKN; JP Bab2 dan9|
|11|Laporan LSM|SAK terkait; DN Bab3; peraturan terkait|
|12|Laporan partai politik|SAK terkait; DN Bab3; peraturan terkait|
|13|BLU/BLUD rumah sakit|DN Bab3; PSAP13; aturan BLU/BLUD|
|14|Penelitian ASP|Artikel terkait; judul tidak ditentukan|

RPP PDF5 memuat TM8-12 dan PDF6 memuat TM13-14. Daftar buku pada PDF3 menyebut Mardiasmo2009, Nordiawan2010 edisi2, Bastian2011 edisi2 dan Jones/Pendlebury2000 edisi6. Pada audit awal, buku belum ditemukan secara lokal. Pencarian lanjutan memperoleh JP edisi6 tahun2010, pratinjau IBS, serta buku tambahan Mahsun dari repositori penulis. Teks bab MD/DN dan IBS2 penuh belum terbuka; detail akses dan konflik tahun dicatat dalam book-search-register.json. Bahan RMK dan mini project diperlakukan sebagai tugas mahasiswa. Artikel Olken2007 merupakan pilihan tambahan primer, bukan penugasan dosen yang sudah terkonfirmasi.

Setiap folder TM berisi inventaris01,matriks02,audit03,spesifikasi04 JSON/Markdown,bacaan05,brief06 dengan Lampiran A,manifest/laporan QA07 dan laporan per TM. `source-register.json` memuat URL,hash PDF asli,halaman gambar yang diperiksa dan batas audit. Rujukan buku yang hilang tidak diberi nomor halaman buatan.

Bangun ulang dari akar repo:

```text
node scripts/build-akk203-pra-uas.mjs
node scripts/test-akk203-pra-uas.mjs
node scripts/test-akk203-pra-uas-render.mjs
npm run build
node scripts/test-akk203-pra-uas-browser.mjs
```

Sunting04 JSON untuk mengubah materi. Builder menghasilkan bacaan TM8-14,ulasan UAS terpisah,kuis UAS,kartu UAS,bank UAS dan dokumen pendukung. Kuis/bank/kartu pra-UTS serta ulasan UTS dipertahankan. `card-identity-map.json` menjelaskan15 identitas stabil,27 identitas baru dan kartu lama yang dipensiunkan tanpa meminjam riwayat SRS.

Penjagaan bersama mempertahankan hash historis serta menambahkan hash revisi ASP yang spesifik. Tes ASP juga menjaga380 sumber di luar perubahan yang diizinkan dan setiap byte katalog di luar literal AKK203 TM8-14. Materi MNU108,MNU307,mata kuliah lain,UpdateNotifier dan index.css tetap sama. Generator semester3 tidak lagi menulis kartu ASP; perubahan generator untuk AKM202 tidak dilakukan.

Bukti teknik terakhir ada pada `qa-evidence.json` dan `_report_pra_uas_final_20261014.md`. Tangkapan layar lokal dapat dibangun ulang oleh skrip browser. Dokumen PDF sumber berlisensi tidak disalin ke Git; tautan primer serta batas akses tetap dicatat.

Pembaruan sesudah tinjauan awal PR61: [_report_revisi_buku_20261014.md](_report_revisi_buku_20261014.md). Versi terkini mempunyai41 visual, termasuk grafik hitungan ulang ilustrasi Eutopia. Laporan pertama mencatat keadaan40 visual sebelum revisi ini.
