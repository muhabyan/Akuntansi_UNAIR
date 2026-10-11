# PR45 — revisi lokal, belum siap disetujui/merge

PR: https://github.com/muhabyan/Akuntansi_UNAIR/pull/45

Remote OPEN/CONFLICTING, head 20557e0463779f3d730929822dd0a41a158850a8; base metadata PR lama 529e5d4e4f2cab3c351ba30701e24c09f2e34c3b. Main remote dan base implementasi lokal 639be11424eb9d6ba4621a3104d0c26f768f63c4. Commit merge lokal 54b92d57e61e660b758f32556a69c4c1a32272cd menyelesaikan satu konflik scripts/test-ci-bounded.mjs dengan mempertahankan tes tabel dan tes Manjik/lifecycle main. Remote belum diubah.

## Implementasi

- Prioritas nama: judul penulis → reportHeader → override konteks yang ditelaah → caption deskriptif → lead singkat → heading konteks. Override tidak menggantikan judul penulis/laporan.
- 133 override spesifik dicocokkan dengan judul bacaan, TM, path blok, header, first cell, dan jumlah baris. Evidence header/first cell ada di reviewed-override-evidence.json. Target berubah memakai fallback, bukan nama lama otomatis. Ini telaah tabel runtime, belum konfirmasi sumber asli lengkap.
- Caption tidak dipotong pada singkatan s.d. atau titik/semicolon yang membawa makna. Lead menolak sumber, petunjuk teknis, QN/pertanyaan kasus; heading generik nested mempertahankan konteks induk. Tabel berdekatan dengan topik sama dibedakan menggunakan kolom, atau override terarah.
- TVM: “Arti simbol pada rumus TVM”; hasil Project X/Y menyebut kelima metode dan WACC 12%; struktur lama/baru dibedakan. Manjik: peran governance, agency/risk sharing, dua jenis conflict, enam basis power mencakup information power. Tes mengikat nama ke isi konkret.
- Judul muncul pada renderer biasa/desktop/kartu HP/nested/jawaban/self-check/review secara DOM. reportHeader tetap satu hierarki entitas/nama/periode/satuan/note. ReadingView menempatkan judul di luar scroller tabel.
- Tabel angka/laporan/perbandingan mempertahankan kolom dan scroll lokal; tabel prosa dapat memakai kartu. Ini masih hipotesis tampilan sampai QA website 375px/desktop lulus.

## Preservasi dan guard

Seluruh raw content delapan matkul deepEqual ke frozen main (academic-preservation.json), termasuk TM lanjut dan review. 1.173 tabel pada tes mencakup seluruh delapan matkul/review; setelah hanya title presentasi yang dihasilkan dilepas, seluruh objek reading kembali deepEqual. Teks, angka, header/baris, caption, align, reportHeader, rowRules, statement, jurnal, sourceImages, soal/jawaban dan figure tidak diubah. git diff terhadap origin/main tidak memuat perubahan data akademik.

Key ReadingPanel course + reading/review tetap seperti #47. Blok renderer figure identik dengan main setelah normalisasi EOL; canonical Manjik dan render-rules lulus. Guard hanya memperbarui lima entry: CourseBlockCard, CourseLayout, LayeredBlocks, ReportTable, types; guard-before-after.json memuat SHA sebelum/sesudah dan alasan. Enam file Manjik dinormalisasi LF ke byte hash yang sudah disetujui, tanpa mengganti entry hash akademik. Guard tidak dilepas atau dilonggarkan.

## Pengujian

40 tugas Node/JSDOM non-browser lulus pada keadaan akhir: canonical ASP/MNU108/Manjik TM01–TM07, protectedguard, render-rules/alignment, practice/outline/frame, dan judul tabel. Logs/non-browser-checks.json mempertahankan satu kegagalan awal reading-frame yang mengasumsikan semua tabel kartu; reading-frame-final.log membuktikan 91/91 setelah kontrak tabel prosa vs angka/pembanding diperbaiki, dengan verifikasi header/cell/caption tetap ada. test-reading-lifecycle.log memuat 16 skenario DOM dan persistensi progress/theme/outline; **bukan QA browser**.

Lint, TypeScript/build, runtime smoke lulus pada sesi ini. Build/runtime raw log tidak disimpan; verification-status.json menyatakan batas ini. npm run check penuh belum dijalankan; E2E dan browser R1/R2 text-path belum lulus revisi ini. Tidak mengaktifkan skip atau mengurangi canonical.

QA website: 0 capture. Belum dibuktikan judul wrap, overflow halaman 0, tabel/angka tidak terpotong, marker mentah 0, diagram HP, atau lifecycle nyata TM06↔TM07/review↔bacaan. Ini blocker penyelesaian PR.

## Preview dan login

Preview lama dari bot Vercel (Ready pada head remote lama): https://akuntansi-unair-git-fix-semester3-rea-fb9ba1-muhabyans-projects.vercel.app

Tidak diverifikasi UI/login pada sesi ini dan tidak mengandung revisi lokal baru. Build baseline lokal sempat dilayani di http://127.0.0.1:5186; akses browser ditolak. Belum ada preview untuk head lokal, tidak ada deploy/push. Supabase env tidak tersedia pada test session; autentikasi/protected-preview belum diinspeksi.

## Langkah tersisa

1. Pulihkan akses browser lewat pengaturan platform, lalu QA baseline dan hasil lokal di port terpisah: desktop + 375px light/dark, nested/review/report/self-check.
2. Uji nyata lifecycle Manjik TM06↔TM07 dan review↔bacaan tanpa reload, setelah membuka jawaban/mengisi draft; cek tujuan tertutup, draft tidak terbawa dan persistensi tersimpan.
3. Jalankan npm run check tanpa skip dengan Chrome Windows/CDP yang benar, termasuk R1/R2 dan E2E. Executable C:/Program Files/Google/Chrome/Application/chrome.exe ditemukan; masalah saat ini izin browser, bukan ENOENT.
4. Review final nama tabel, diff/guard, lalu push normal ke fix/semester3-reading-clarity. Usulan judul PR: “Perjelas judul dan tampilan tabel delapan mata kuliah, termasuk Manjik”. Deskripsi harus menyebut scope final dan QA nyata; belum diubah pada remote. Tidak merge.
