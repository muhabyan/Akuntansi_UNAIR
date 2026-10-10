# Perapian delapan matkul — paket bukti parsial

**Belum selesai / belum siap push atau merge.** Paket ini tidak memuat screenshot website. Audit semantik dan sumber asli seluruh 56 TM belum selesai; pemeriksaan UI 0/56. Inventaris berhasil dibuat untuk 56/56 TM.

Main: `639be11424eb9d6ba4621a3104d0c26f768f63c4` (remote tidak maju).
PR45 remote: `20557e0463779f3d730929822dd0a41a158850a8`, OPEN/CONFLICTING.
Merge main lokal: `54b92d57e61e660b758f32556a69c4c1a32272cd`.
Revisi WIP lokal: `307157ec5ff1194833520a8dc0f0b84931e80e8f`, branch `audit/pr45-perapian-20261006`.
Tidak ada push/merge remote. Code diff akhir 14 file terhadap main; tidak ada file data akademik yang berubah.

- [Laporan audit parsial](./_report_audit_stage1_partial.md)
- [Laporan revisi PR45, QA tertahan](./_report_PR45_revision_pending_UI.md)
- [Matriks 56 TM](./coverage-matrix.md), dengan record per TM di coverage/
- [Hasil preservasi main](./academic-preservation.json)
- [Verifikasi dan batas bukti](./verification-status.json)
- [Manifest asal/hash bukti](./evidence-manifest.json)
- [Penolakan akses browser](./browser-access-denials.md)
- [Diff terhadap main](./logs/diff-vs-main.patch)

929 tabel = TM01–TM07. 1.173 tabel = seluruh bacaan/review delapan matkul pada tes. 212 figure = blok runtime pra-UTS, bukan jumlah diagram asli. 133 override ditelaah terhadap tabel runtime; 144 nama pra-UTS berubah dibanding inferensi PR45 lama. Tidak menganggap nama nonkosong atau count sebagai bukti kualitas visual/semantik.

40 tugas Node/JSDOM lulus pada keadaan akhir. Log kegagalan awal reading-frame tetap disimpan dan log retest terpisah. Lint, TypeScript/build dan runtime smoke lulus pada sesi ini; build/runtime raw log tidak tersimpan. `npm run check` penuh belum dijalankan/lulus; E2E dan browser R1/R2 masih tertahan. Tidak menggunakan skip.

Sumber/paket final tetap berada pada lokasi asli. File packages/AKA201 merupakan ekstraksi kandidat arsip lokal, belum dipastikan canonical; source-file-manifest.json berisi provenance 902 file, bukan bukti halaman sudah diaudit. Semua 56 dossier diberi status indikator kode dan mencantumkan pekerjaan semantik/sumber/UI yang tersisa.

Paket tidak menguji login/preview Vercel atau overflow website. Browser masih menolak localhost setelah pengguna mengizinkan dan menyatakan setting berubah. Tidak mencoba bypass melalui CDP atau cara lain. Sesudah akses pulih, lanjutkan QA website, audit 56 TM, check penuh, lalu push normal ke PR45 yang sama jika lulus; jangan merge.

D1: pilih pilot setelah bukti audit lengkap, usulan bersyarat MNU108 TM01.
D2: rekonsiliasi sumber/edisi MNK201, paket AKA201, dan AKK202 TM01 sebelum rewrite terkait.
