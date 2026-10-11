# Perapian delapan matkul — laporan tahap pertama parsial, 6 Oktober 2026

**Audit lengkap belum selesai.** 56/56 bacaan TM01–TM07 berhasil diinventarisasi; 0/56 telah diinspeksi langsung pada website dalam sesi ini. Bukti semantik/source-page menyeluruh belum tersedia. Semua angka di sini merupakan indikator struktur atau hasil tes data, bukan bukti diagram/tulisan sudah mudah dibaca.

## Baseline dan checkout

Main dibekukan pada 639be11424eb9d6ba4621a3104d0c26f768f63c4. Remote dibaca sebelum bekerja dan dikonfirmasi lagi pada akhir sesi; main tidak maju. PR45 OPEN, branch fix/semester3-reading-clarity, head remote 20557e0463779f3d730929822dd0a41a158850a8; belum ada push.

Checkout kerja C:/cek/.worktrees/perapian-pr45 memakai git store independen C:/cek/.worktrees/perapian-store dan branch audit/pr45-perapian-20261006. Baseline C:/cek/.worktrees/perapian-baseline detached pada main. Tidak menjalankan Git di checkout asli C:/cek. Commit merge main lokal 54b92d57e61e660b758f32556a69c4c1a32272cd menjaga PR45 lama dan perubahan #46–#49; ini bukan merge PR ke main. Tidak memakai reset/delete/force-push.

AGENTS.md/aturan worktree dicari pada lokasi yang berlaku dan file repo, tidak ditemukan. CONTENT_RULES_FINAL, STUDENT_STYLE_AND_VISUALS, REPORTING, SOURCE_GOVERNANCE, PIPELINE_RULES dibaca dari C:/AkuntansiHub-Content-Agent/system. Tiga dokumen rencana/inventaris/review terdahulu juga dibaca; audit sampel lama dan screenshotnya tidak dihitung sebagai audit langsung baru.

## Cakupan dan bukti

- [Matriks 56 TM](coverage-matrix.md) dan coverage-matrix.json menyediakan record tiap TM, intro/tujuan, judul bagian, paragraf panjang, tabel dan metadata figure, rujukan runtime, paket yang ditemukan, dan hal yang belum diperiksa.
- Bacaan utuh runtime tersedia di readings/*.json dan *.md; ini ekstraksi struktur, bukan assessment otomatis.
- 929 tabel pra-UTS dan 212 figure runtime. MNU108 tanpa blok figure masih perlu pemeriksaan gambar/Markdown/source asli.
- 902 file sumber/paket di-hash dalam source-file-manifest.json; hash tidak berarti halaman sudah dibaca atau dibandingkan visual.
- Paket MNU108, AKK202 TM02–TM07, PJK301, AKS301, AKK203, MNU307 ditemukan. SIA runtime SII306 memakai AKS301; ASP AKS201 memakai AKK203; Manjik MNS301 memakai MNU307 dan tetap semester 5. AKM202 di luar scope.
- PBR AKA201: inbox dan converter ditemukan; arsip AKA201 (7).zip diekstrak sebagai kandidat paket, bukan otomatis sumber final. Materi Arens/ISA/SA perlu dipastikan lewat matriks edisi/halaman.
- MNK201: paket final pada content-pipeline belum ditemukan; runtime dan materi buku/PPTX/RMK lokal ditemukan. Campuran rujukan Houston/Ehrhardt harus direkonsiliasi sebelum perubahan bahasa sumber-spesifik. AKK202 TM01 belum punya paket yang ditemukan.

## Kandidat yang belum menjadi vonis

Pembuka MNU108 TM01 memuat 103 kata dengan banyak istilah; itu mendukung kandidat pemeriksaan pembuka, bukan izin menghilangkan konsep. Prioritas sampel sebelumnya (pembuka Pengantar Manajemen/Pajak/Mankeu, repetisi tujuan–Kilat ASP/Manjik, overview/transkrip SIA, garis waktu TVM, label Manjik) tetap hipotesis per TM. Pola fondasi/contoh PBR yang membantu perlu dipertahankan setelah bacaan utuh diperiksa. Tidak ada klaim R1/R2/label-edge lulus secara browser pada revisi ini.

## Rencana batch dan keputusan

| Batch | Scope | Syarat sebelum mulai | Estimasi awal |
| --- | --- | --- | --- |
| B0 | PR45 judul/tampilan tabel | Selesaikan UI/E2E dan check penuh; tidak mengubah isi akademik | Satu PR yang sudah ada |
| B1 / D1 | Pilot MNU108 TM01 | Audit lengkap TM01 + source/exhibit map + pilihan Byan/reviewer | Satu TM, satu PR; 1–2 putaran review |
| B2 | Satu TM kandidat berikutnya dari hasil audit | Pilih masalah terverifikasi; gunakan hasil pilot dan matriks sumber | Satu TM per PR pada awalnya |
| B3 | Perluasan per matkul | Setelah pola pilot terbukti; maksimal 1–2 TM berdekatan per PR | Estimasi final setelah membaca sumber/UI |

Pilot **MNU108 TM01 diusulkan secara bersyarat**, belum dipilih. Alur target situasi konkret → arti istilah → contoh sumber dan alasan → visual/tabel → cek pemahaman. Kilat 5–7 poin dan satu pesan; Inti utuh tanpa Pendalaman. Tidak ada rewrite 56 TM atau perubahan semester/kode. Fakta, rumus, tarif/tanggal, jurnal, sumber, dan hubungan diagram menjadi batas revisi.

D2: pastikan sumber/edisi MNK201, kecocokan arsip AKA201 dengan runtime, serta sumber AKK202 TM01 saat audit berikutnya. D1/D2 belum diperlukan untuk perubahan judul yang hanya menjelaskan tabel runtime yang ada.

## Blocker dan langkah tersisa

Browser menolak localhost dengan pesan “A saved user permission setting blocks this action” setelah pengguna memberi izin dan menyatakan pengaturan diubah. Workflow product-design:audit membutuhkan screenshot website sebelum kesimpulan UI. Tidak memakai CDP/host alternatif/SVG standalone untuk melewati penolakan. Semua QA 375px terang/gelap, desktop, overflow, diagram, login, lifecycle nyata dan E2E tertahan. npm run check penuh belum dijalankan; tidak ada ALLOW_E2E_SKIP atau tes yang dimatikan.

Sesudah browser dapat diakses: audit semua 56 TM utuh dengan sumber asli; capture UI secukupnya per temuan dengan code/TM/theme/viewport/path manifest; selesaikan rencana Inti/Pendalaman/prioritas per bagian; lakukan QA PR45 dan check penuh tanpa skip; baru push normal ke branch PR45 yang sama. Berhenti sebelum merge.
