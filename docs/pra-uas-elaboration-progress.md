# Perbaikan kedalaman materi pra-UAS — checkpoint

Arahan pengguna 14 Oktober 2026: lanjutkan standar TM09 PBR I ke TM lainnya dan tujuh mata kuliah yang sudah mempunyai materi pra-UAS. Pertahankan butir sumber, jelaskan langkah penalaran yang hilang, dan gunakan pendalaman untuk detail pendukung. Hemat limit: baca sumber sekali, kerjakan berurutan, jalankan pemeriksaan sesuai perubahan, simpan checkpoint per bagian. Pengguna akan melakukan free reset sendiri bila limit habis; lanjutkan dari checkpoint ini ketika diminta.

## Lingkup aktif

Semester 3 selain SIA, ditambah Manajemen Stratejik: AKA201 PBR I, AKK202 AKM II, AKK203 ASP, PJK301 Perpajakan II, MNK102 Manajemen Keuangan, MNU108 Pengantar Manajemen, MNU307 Manajemen Stratejik. SII306 SIA belum masuk pembaruan ini. Arahan baru mencakup materi yang sebelumnya dikerjakan agen lain; jangan menganggap seluruhnya bermasalah atau mengganti yang sudah memadai.

## Titik lanjut

- Cabang: `improve/pbri-tm09-elaboration`; draf PR #62: https://github.com/muhabyan/Akuntansi_UNAIR/pull/62.
- TM09 PBR I selesai: sumber, narasi bertahap, pendalaman, preservasi dan pemeriksaan. Commit awal `bb2381c`; 78/78 tes standar, lint, build, serta 25/25 pemeriksaan navigasi lulus. Visual desktop diperiksa; capture layar sempit bermasalah dan belum dinyatakan lulus visual.
- TM10 dan TM11: revisi isi selesai. TM10 menguraikan keandalan bukti, pemilihan item, konfirmasi dan empat langkah analitis; TM11 menguraikan hubungan dokumentasi dengan kesimpulan, permanent/current file, lima ciri kertas kerja, perakitan dan kerahasiaan. Sumber authoring dan peta perubahan berada pada content-pipeline/AKA201/TM10 dan TM11.
- Aktif berikutnya: PBR I TM12–TM15. Sesudahnya periksa satu TM pra-UAS pada enam mata kuliah lain, tentukan kekurangan berdasarkan sumber, lalu lanjut per mata kuliah.
- TM10–TM11: guard layered, latihan, TypeScript dan lint terarah lulus; angka, diagram, tabel sumber dan kasus lama diperiksa melalui preservasi. Visual dan pemeriksaan seluruh batch berikutnya masih pending. Belum menyatakan TM12–TM15 atau mata kuliah lain selesai direvisi.

## Sumber dan lingkungan

- Checkout kerja: direktori `audit-akuntansihub` di workspace chat; jangan mengedit `sources/` atau checkout asli `C:/cek`.
- Buku/standar referensi tersedia di `C:/cek/<mata kuliah>/Materi`; sumber tugas mahasiswa tidak otomatis otoritas teori.
- Arens 743 halaman: cetak n berada pada halaman PDF n+13 (indeks n+12). Ekstraksi TM10–TM15 tersimpan di `../tmp/pra-uas-elaboration/arens-tm*.txt`. Rentang perlu diperluas bila intro modul mengacu halaman lain; TM13 mulai cetak255, TM14 mulai294 dan337–340, TM15 juga150–153,316,395–397.
- `../tmp/pra-uas-elaboration/pbri-inventory.json` merangkum judul bagian dan tabel per TM. Ringkasan ini membantu navigasi, bukan bukti verifikasi isi.
- Modul PBR I lama dihasilkan converter di luar repo. Untuk revisi, gunakan sumber authoring dan pembangun di dalam repo; jangan mengedit sumber pribadi di luar workspace.
- Jalankan tes terarah PBR I, lint dan build pada perubahan substansial. Jalankan seluruh tes pada akhir batch; hasil tes teknis bukan bukti kelengkapan atau kebenaran sumber.
- Pratinjau terdahulu menggunakan port5197; proses sudah dihentikan. Port5186 menampilkan versi lain dan jangan dianggap checkout ini. Browser Chrome dapat mengakses server dengan akses lokal normal; sandbox menyebabkan masalah socket/cache. Jangan melewati penolakan izin browser.

## Cara melanjutkan

Baca checkpoint dan status Git, lanjutkan TM yang belum selesai, catat bagian yang benar-benar diubah beserta dasar sumber dan validasinya. Simpan commit/push per bagian yang selesai ke draf PR yang sama. Jangan merge atau menyatakan tayang sebelum langkah publikasi disepakati. Jangan mengganti baseline/guard hanya untuk membuat tes lulus; jelaskan bila preservasi lama perlu diperbarui sesuai lingkup yang diizinkan pengguna.
