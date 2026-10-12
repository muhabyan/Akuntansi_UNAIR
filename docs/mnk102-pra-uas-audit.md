# Audit Manajemen Keuangan pra-UAS

MNK102/FEB25603012 mengikuti tujuh pertemuan TM09-TM15, berdasarkan kalender Sheet1 kontrak. UTS berada pada minggu 8 dan UAS pada minggu 16. Kunci review aplikasi adalah 0 dan 16; isi pra-UTS tetap dipertahankan. Ekspor MNK201 menjaga kompatibilitas data dan tautan lama.

| TM | Materi | Kuis | Flashcard | Bank soal | Diagram |
| --- | --- | ---: | ---: | ---: | ---: |
| 09 | Struktur modal dan leverage | 12 | 6 | 2 | 10 |
| 10 | Distribusi kepada pemegang saham | 10 | 6 | 2 | 3 |
| 11 | Modal kerja I: kebijakan aset, siklus dan kas | 8 | 6 | 2 | 4 |
| 12 | Modal kerja II: persediaan dan pendanaan | 8 | 6 | 2 | 2 |
| 13 | Keuangan multinasional | 8 | 6 | 2 | 2 |
| 14 | Merger dan akuisisi | 8 | 6 | 2 | 3 |
| 15 | Corporate Failure dan analisis distress | 6 | 6 | 2 | 2 |
| Total tujuh TM | | 60 | 42 | 14 | 26 |

Review UAS 16 menambahkan satu diagram dan tujuh contoh yang dipilih kembali dari sumber tiap TM. Diagram keseluruhan berjumlah 27. Contoh dalam bacaan memakai input buku atau bukti artikel. TM15 berisi dua kasus analisis sumber, karena artikel tidak memberikan data perusahaan untuk contoh hitungan lengkap. Kasus bank dan kuis memakai asumsi buatan yang dinyatakan, disertai rujukan konsep/formula; jumlahnya tidak mencakup contoh bacaan yang diulang pada review.

## Pipeline dan implementasi

Sumber dimasukkan melalui system/ingestion, dengan shared library dan cache hash. XLSX dikonversi ke CSV yang mempertahankan nama sheet dan alamat sel, karena ingestion tidak mendukung XLSX langsung. Berkas XLSX asli tetap disimpan beserta SHA256. Materi tidak disimpulkan dari nama file.

Paket lokal dan paket di Git memuat inventaris, matriks unit, audit keputusan, 00/04/05/06/07, serta laporan fase 1 dan 2. Pengguna mendelegasikan pengerjaan mandiri setelah membaca handoff. Batas sumber yang belum dapat dipastikan tetap dinyatakan; persetujuan dosen tidak diklaim.

Modul TM09-TM15 dan review UAS dihasilkan dari 05 melalui scripts/convert-mnk102.mjs, diadaptasi dari konverter AKA201 v2. Hasil CRLF dijaga melalui atribut Git. Setiap bacaan memiliki Kilat, Inti dengan self-check, Pendalaman tertutup, contoh dengan pembahasan tertutup, dan Persiapan Ujian. SVG menggunakan kelas tema dan overview HP. Daftar simpul terstruktur menjaga satu kebijakan atau skenario tetap satu kelompok walaupun kalimatnya memiliki titik koma.

Lima file final per TM09-TM16, total 40 file, memiliki SHA256 sama pada work copy Git, C:/AkuntansiHub-Content-Agent/content-pipeline/MNK102, dan C:/cek/.content-inbox/MNK102. Salinan berbeda yang sudah ada tidak ditimpa; revisi file milik tugas ini memeriksa hash lama dan menyimpan backup. Sumber utuh hanya disimpan lokal di course-sources/MNK102, bukan di GitHub.

Legacy tm14 sebelum pembaruan disimpan sebagai LEGACY_UAS di modules/legacy/tm14.ts untuk audit. Pernyataan lama tentang kepastian kebangkrutan tidak dimount sebagai bacaan atau review aktif. Review 16 merupakan rangkuman bersumber dari tujuh TM.

## Sumber dan batas cakupan

Sumber utama: Kontrak MK 2026.xlsx (Sheet1 A26:E33), Brigham dan Houston, Fundamentals of Financial Management 16e (2022), serta artikel primer [Altman (2002)](https://w4.stern.nyu.edu/finance/docs/WP/2002/pdf/wpa02052.pdf). Identitas buku dicocokkan dengan [penerbit Cengage](https://www.cengage.ca/c/fundamentals-of-financial-management-16e-brigham-houston/9780357517574/). Buku pada kontrak adalah edisi 15 (2019); edisi lokal 16 dipetakan berdasarkan topik dan halaman. Bahan W9 adalah tugas mahasiswa, sehingga tidak diklaim sebagai slide dosen atau otoritas angka.

Halaman cetak buku = halaman PDF - 42. Rentang utama: Bab 14 hal. 478-520, Bab 15 hal. 521-556, Bab 16 hal. 559-596, Bab 18 hal. 625-661, Bab 21 hal. 740-767, serta reorganisasi/likuidasi hal. 262. Rujukan spesifik berada pada paragraf, tabel, diagram, rumus, dan setiap latihan.

- Kontrak menulis Bab 19 untuk topik multinasional pada edisi 15. Buku lokal edisi 16 menempatkannya pada Bab 18. Nama topik menjadi dasar pemetaan.
- Pembagian Bab 16 menjadi bagian I/II tidak merinci batas subbab. TM11 memusatkan kebijakan aset, CCC, anggaran kas dan piutang; TM12 persediaan dan sumber pendanaan.
- Web Appendix 16A/16B belum tersedia. EOQ, discount interest dan compensating balance tidak diangkat menjadi teori kanonik. Latihan arus kas terkait tetap memakai syarat buatan yang jelas; contoh kanonik bunga bank memakai hal. 587.
- Artikel Corporate Failure yang ditugaskan dosen belum teridentifikasi. Altman adalah artikel primer pelengkap, dengan batas populasi dan varian model. Status konten READY_WITH_SCOPE_LIMITATION.
- Tarif pajak, bunga dan kurs dalam soal adalah parameter kasus, bukan ketentuan hukum atau harga pasar kini. Contoh buku berlabel tahun/konteks sumber, termasuk pajak dan hukum Amerika. Chapter 7/11 tidak disamakan dengan prosedur Indonesia.
- Prioritas UAS merupakan perkiraan dari RPP dan contoh buku/tugas. Arsip ujian tidak ditemukan dalam sumber yang diperiksa.
- Pembulatan kas Allied dijelaskan: tabel memakai juta USD tanpa desimal; hasil presisi menghasilkan kebutuhan 21,2, sedangkan tabel 21. Forward Swiss dihitung ulang 219.591.033,6589 USD dan dibulatkan 219.591.034 USD, sesuai kunci buku.

## Verifikasi

| Pemeriksaan | Hasil |
| --- | --- |
| Lint | Lulus |
| TypeScript | Lulus |
| Build produksi | Lulus; peringatan chunk besar sudah ada pada baseline |
| Seluruh tes standar | 70/70 lulus, tidak ada skip |
| Kanonik per TM | 8 hasil konverter byte identik, CRLF, SHA sumber, 27 diagram, larangan frasa, rumus KaTeX strict |
| Hitungan | Kunci 60 kuis dihitung ulang independen, beserta contoh Barnes, Bigbee, residual, GFI, Allied, trade credit, bunga bank, kurs dan Apex |
| Komponen aplikasi | Opsi benar/salah setelah pengacakan, penilaian 60/60 = 100%, 14 bank terbuka, rumus/pembahasan, self-check, filter dan flip flashcard TM15 |
| Runtime smoke | Lulus: aset, route, timer, fingerprint dan penyimpanan sesi |
| E2E standar | Lulus dengan port Chrome terisolasi 9366 dan preview 4287 |
| Browser MNK102 | Semua tujuh bacaan dan review16 pada desktop 1440px serta 375px terang/gelap; overflow halaman 0, label SVG di dalam canvas, sumber dan rumus tampil |
| Pra-UTS | Hash isi TM1-TM8 dan latihan asli tetap cocok |
| Perlindungan | 121 file dan katalog ManStrat lolos guard; area terlarang tidak diubah |

Percobaan awal di sandbox gagal 12 dari 70 tugas; baseline yang dijalankan dalam lingkungan sama gagal 13 dari 69. Penyebabnya pemuatan CJS React oleh Vite, penolakan rename cache sementara, dan proses Chrome yang tidak dapat berjalan. Tidak ada kegagalan baru pada perbandingan itu. Menjalankan tes di Windows tanpa pembatasan sandbox menghasilkan 70/70 lulus. Tes keuangan memakai bundler komponen dengan satu instance React agar interaksi tidak bergantung pada pemuat CJS SSR.

E2E pertama bertemu endpoint Lenovo pada port debugging default 9222. Pengujian ulang memakai port terpisah dan lulus, tanpa mengubah aplikasi atau melonggarkan pemeriksaan. Peringatan DOM <p> bersarang pada runtime adalah baseline dan tetap dicatat. Tidak ada kegagalan akhir yang belum diselesaikan.

## Git dan langkah berikutnya

PR draft: https://github.com/muhabyan/Akuntansi_UNAIR/pull/58. PR ini tetap bergantung pada PR #55 untuk kode katalog, sehingga perubahan materi dan kode mata kuliah tetap pada PR terpisah. Cabang aktif belum merged; tidak memakai ulang cabang PR yang telah merged. Setelah #55 digabung, base #58 perlu diarahkan ke main untuk pemeriksaan akhir dan merge oleh pengguna.

PR45, perapian-pr45, perapian-lanjutan, src/data/manstrat, UpdateNotifier.tsx dan src/index.css tidak disentuh. Hanya satu entri release notes v1.3.6 yang ditambahkan oleh PR ini, dengan entri lama tetap utuh. Pekerjaan berhenti pada Manajemen Keuangan.
