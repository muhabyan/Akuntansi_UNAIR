# Laporan akhir ASP pra-UAS, 14 Oktober 2026

[PR draft #61](https://github.com/muhabyan/Akuntansi_UNAIR/pull/61), cabang audit/akk203-pra-uas. Commit implementasi: fe36cfa974199f4dfea5df9761eb2eaec5256fa1. PR terverifikasi OPEN, isDraft=true, auto-merge tidak aktif; tidak dilakukan merge.

Implementasi khusus AKK203 / FEB25603014 semester 3 tersedia untuk tinjauan draft. Status teknis PASS; status akademik NEEDS_HUMAN_REVIEW pada seluruh TM. Buku RPP belum tersedia sehingga penyelesaian implementasi tidak berarti semua bab sumber selesai diaudit.

## Cakupan dan hasil

RPP dosen menentukan tujuh pertemuan TM8-14. PDF 3 berisi bibliografi, PDF 5 memuat TM8-12, PDF 6 memuat TM13-14. Singkatan: MD=Mardiasmo 2009; DN=Nordiawan 2010 edisi 2; IBS=Bastian 2011 edisi 2; JP=Jones/Pendlebury 2000 edisi 6.

|TM|Topik|Bab/penugasan RPP|Visual|Kuis/kartu/kasus|
|---|---|---|---|---|
|8|Sistem Akuntansi Pemerintah Pusat dan Daerah|DN Bab 10; IBS Bab 2; peraturan terkait, RPP PDF 5|5|9/6/2|
|9|Pengukuran Kinerja Organisasi Pemerintah|MD Bab 8; DN Bab 8; JP Bab 2; peraturan terkait, RPP PDF 5|6|9/6/2|
|10|Audit Organisasi Pemerintah: APIP dan BPK|SAP, SPKN; JP Bab 2 dan 9 sesuai RPP PDF 5|6|9/6/2|
|11|Laporan Keuangan Organisasi Nonlaba: LSM|PSAK terkait; DN Bab 3; peraturan terkait, RPP PDF 5|5|9/6/2|
|12|Laporan Keuangan Nonlaba: Partai Politik|PSAK terkait; DN Bab 3; peraturan terkait, RPP PDF 5|4|8/6/2|
|13|Badan Layanan Umum dan BLUD Rumah Sakit|DN Bab 3; PSAP 13; PP 23/2005 jo. PP 74/2012, PP 12/2019; pembaruan atas Permendagri 61/2007 dan PMK 220/2016, RPP PDF 6|7|8/6/2|
|14|Penelitian Akuntansi Sektor Publik: Membaca Bukti|Artikel terkait, judul tidak ditentukan; RPP PDF 6|7|8/6/2|

Total: 40 visual (38 diagram skematis dan 2 grafik kuantitatif), 60 kuis, 42 flashcard, 14 kasus, 14 contoh dan 42 cek pemahaman. Semua butir mempunyai rujukan; sumber kartu/kasus yang ditampilkan sebagai teks polos tetap mempunyai URL per item dalam audit.practiceSources. Pendalaman, contoh dan jawaban cek pemahaman awalnya tertutup. Visual proses mempunyai panah; perbandingan paralel tidak diberi panah alur yang menyesatkan. Diagram konseptual diberi label skematis. Grafik kuantitatif mempunyai satuan, sumbu, label seri dan transkrip teks.

## Perubahan substantif dan verifikasi isi

TM8: memisahkan SAPP, SABUN, Si AP dan SAI, rekonsiliasi dengan bukti, SAPD SKPD/PPKD serta eliminasi yang bergantung jenis laporan. Jurnal timbal balik Rp100 juta seimbang; selisih Rp100 juta terhadap Rp98 juta adalah Rp2 juta, tidak langsung dijurnal tanpa bukti. Format xxx pada sumber daerah diganti angka asumsi berlabel, tanpa mempertahankan kode BAS historis.

TM9: membedakan ekonomi, efisiensi, efektivitas, output dan outcome; mekanisme SAKIP, indikator, perjanjian kinerja dan evaluasi AKIP. Rp480 juta/800 layanan dan Rp600 juta/1.000 layanan sama-sama Rp600.000 per layanan; capaian 120/180=66,67%. Bobot evaluasi 30/30/15/25 berjumlah 100, dipertahankan dalam grafik. Angka latihan tidak dianggap tolok ukur universal.

TM10: peran BPK/APIP, ruang lingkup pemeriksaan, opini dan rekomendasi dipisahkan. Temuan aset Rp8 miliar tidak otomatis menentukan opini. Jawaban atau penjelasan tindak lanjut 60 hari sejak LHP diterima tidak disamakan dengan seluruh perbaikan wajib selesai dalam 60 hari. SPKN 2017 operasional pada audit ini; Peraturan BPK 1/2026 mulai berlaku 10 April 2028 menurut ketentuan transisinya.

TM11: laporan LSM/yayasan memakai ilustrasi historis DE ISAK 35 dengan penjelasan status sumber. Contoh sintetis juta rupiah: penerimaan 300, beban 180, pembelian aset 50, kas akhir 70, aset tetap 50, aset neto 120; tanpa pembatasan 80 dan dengan pembatasan 40. Pelepasan pembatasan 60 tidak menambah total aset neto. Aset belum siap digunakan, depresiasi nol, saldo awal nol, tanpa OCI/liabilitas/transaksi nonkas, kebijakan pengakuan diasumsikan secara eksplisit. Lima bagian laporan dan CaLK dihubungkan. Ambang audit/publikasi yayasan memenuhi salah satu bantuan >=Rp500 juta atau kekayaan di luar wakaf >=Rp20 miliar.

TM12: memisahkan laporan entitas partai, LPJ bantuan pemerintah dan dana kampanye. Penerimaan bantuan 75, iuran 25, donasi 50 =150 juta; beban 100, kas/aset neto akhir 50; LPJ bantuan terpisah 75 diterima dan digunakan 75. Ilustrasi 50.000 suara x Rp1.500 = Rp75 juta memakai asumsi kursi, satu tahun penuh dan tarif dasar tanpa kenaikan. Dua donasi nonanggota masing-masing Rp600 juta = Rp1,2 miliar melewati batas Rp1 miliar. Formulir LPJ mengikuti lampiran perubahan 78/2020; persentase 60% historis tidak disisipkan sebagai syarat baru; klausul darurat COVID-19 tidak diasumsikan berjalan pada 2026.

TM13: membedakan BLU pusat/BLUD daerah/rumah sakit swasta, pengakuan LO dan LRA, tujuh laporan PSAP 13, sistem PMK 128/2024 dan eliminasi per jenis laporan. Contoh sintetis juta rupiah: hak pendapatan 120, kas diterima 100, beban 70, aset dibeli 20; surplus LO 50, piutang 20, kas 10, aset 50 dan ekuitas 50; SiLPA/SAL 10 hanya dalam asumsi yang disebutkan. Arus operasi 30 dan investasi -20 menghasilkan kenaikan kas 10. Aset belum siap digunakan dan depresiasi nol. Jurnal eliminasi 40 seimbang. Ambang 10% dibanding realisasi 12% adalah asumsi kasus yang memerlukan otorisasi, tidak dianggap batas nasional.

TM14: pertanyaan, desain, pengukuran, randomisasi, inferensi dan validitas dibaca melalui artikel tambahan Olken 2007. Desain 608 desa tidak sama dengan N regresi: jalan N477, jalan+tambahan N538. Tabel 4: kontrol .277, perlakuan .192, koefisien -.085, SE .044, p .058. Perbedaan 8,5 poin persentase dibedakan dari perhitungan relatif 30,69% pada proksi. Spesifikasi fixed effects insinyur p .039 dan strata p .123 menunjukkan sensitivitas; tidak mengklaim semua p <5%. Jalan+tambahan memakai kontrol .291, perlakuan .199, koefisien -.091, p .034; mean yang dibulatkan tidak mengganti koefisien. Proksi adalah selisih log, tidak diubah menjadi rasio kas atau bukti pidana. Grafik CDF/densitas asli dilihat, tidak digambar ulang tanpa data mentah. Generalisasi ke rumah sakit tahun 2026 dibahas sebagai batas.

Kebenaran angka dan aturan diperiksa terpisah dari kesamaan JSON: 19 kunci kuis kritis menggunakan ekspektasi dari halaman primer, seluruh jurnal diperiksa debit=kredit, perhitungan neraca/kas/LO/LRA dan p-value diperiksa independen. Kesamaan kanonik hanya menjaga implementasi terhadap spesifikasi, tidak dijadikan bukti akademik tunggal.

## Sumber dan audit gambar

Register 23 PDF mencatat klasifikasi, versi/status per 14 Oktober 2026, URL, SHA-256, lokasi lokal, halaman PDF yang ditinjau sebagai gambar serta peta halaman cetak. Sumber utama KSAP (SAP 2026/PSAP 13), JDIH Kemenkeu (PMK 217/2022,100/2025,128/2024), peraturan pemerintah/BPK/Kemendagri/PAN-RB, IAI (DE historis dan berita pengesahan), INTOSAI dan PDF penulis Olken. Sumber yang dapat dibaca diperiksa langsung pada halaman gambar yang terdaftar; tidak ada klaim semua halaman buku/peraturan ditinjau. Rincian sumber dan batas ada pada source-register.md/json serta matriks 02 per TM.

PMK 100/2025 diterapkan mulai LKTA 2025. PMK 128/2024 menggantikan 220/2016 dan 42/2017 untuk LK 2024 dan seterusnya. Permendagri 79/2018 menggantikan 61/2007. Perubahan penomoran ISAK 35 ke 335 sejak 2024 dan berita amendemen 3 Juni 2026 dipisahkan dari DE historis; tanggal penerapan amendemen tidak ditebak dari berita. Pembaruan aturan dibedakan dari bacaan buku/kuliah yang ditugaskan.

D1: buku bab RPP belum ditemukan, termasuk seluruh latihan/gambar yang mungkin ditugaskan. D2: teks final SAK/ISAK 335 dan amendemen belum diperoleh. D3: judul artikel penugasan TM14 tidak ada pada RPP. Tugas RMK/mini project mahasiswa tidak dijadikan sumber otoritatif. Artikel Olken merupakan tambahan primer. Oleh sebab itu semua TM tetap NEEDS_HUMAN_REVIEW, sourceComplete=false, dan PR dipertahankan draft. Lampiran A menyimpan aktivitas tambahan yang tidak menjadi inti.

## Pemeriksaan aplikasi dan visual

Baseline sebelum perubahan 78/78 tes standar lulus. Pemeriksaan akhir 80/80 lulus, 0 gagal, durasi 192647 ms. Lint lulus 384 berkas TS/TSX tanpa peringatan ESLint; TypeScript lulus; build lulus. Runtime smoke lulus 7 aset, route SPA/404, perilaku ujian dan penyimpanan sesi. E2E tersedia lulus interaksi bank/simulator EKT109 dan pemulihan timer/route/tema PJK201.

Tes ASP menggunakan komponen aplikasi sebenarnya: bacaan dan rumus/jurnal, tautan sumber, seluruh contoh dan jawaban dibuka, opsi kuis diacak dan jawaban dinilai 60/60, umpan balik salah diuji, semua 14 kasus dibuka, 42 kartu difilter/dibalik. Browser ASP lulus 28 keadaan (7 TM x 375/1440 px x terang/gelap), seluruh Pendalaman/contoh/jawaban dibuka, 40 visual per kombinasi tema/ukuran. Tidak ada overflow halaman, teks SVG terpotong, error KaTeX atau garis penghubung terisi. Tabel lebar memiliki gulir lokal yang mencapai akhir. Ukuran SVG minimum pada ponsel 13,18 px; kontras minimum terang 9,90 dan gelap 12,02. Nilai ini berlaku untuk teks SVG, bukan klaim audit aksesibilitas seluruh aplikasi.

160 PNG individual diperiksa melalui 56 lembar kontak, dengan contoh akhir serta bukti ukuran/kontras dalam evidence. Grafik TM9 dan TM14 pada kedua tema/ukuran disertakan di Git sebagai sampel; semua PNG lokal dapat dibangun ulang. Perbaikan awal meliputi ukuran huruf, pengukuran latar kontras, pemisahan label, rujukan polos pada komponen bank dan tipe jumlah jurnal. Tes geometri tidak menggantikan peninjauan tangkapan layar.

Kegagalan sementara: tes navigasi AKA201 sempat timeout, retry tersendiri lulus 25/25 dan rangkaian standar berikutnya lulus 80/80, tanpa mengubah AKA201. Snapshot bersama awalnya menolak perubahan ASP; penjagaan diperbarui hanya untuk hash revisi ASP yang disetujui, termasuk bentuk akhir baris Windows. Kesalahan tipe/lint/format rujukan sudah diperbaiki. Tidak ada kegagalan akhir aktif.

Peringatan tersisa: instalasi baseline melaporkan 18 kerentanan dependensi (4 low,2 moderate,12 high), dependensi tidak diubah; build mengingatkan chunk >700 kB dan waktu plugin; runtime mengeluarkan peringatan nested p pada komponen bersama yang tetap utuh; tes navigasi mencatat konfigurasi Supabase tidak tersedia, pemeriksaan lokal tetap lulus. Bukti keluaran akhir dan hash log ada pada qa-evidence.json/evidence/logs.

## Perlindungan, reproduksi dan sinkronisasi

Checkout terisolasi audit/akk203-pra-uas berasal dari origin/main 90e04678034324dac88102ba737dde756cb762af. PR60 diperiksa sudah MERGED pada 13 Oktober 2026, commit 7a03d16. Release tertinggi main adalah v1.3.8; tidak ada PR terbuka saat versi diperiksa. Release v1.3.9 ditambahkan paling atas tanpa mengubah histori. Tidak ada merge dilakukan dalam pekerjaan ini.

Hash menjaga 380 berkas sumber di luar ASP yang diizinkan, bacaan/review/kuis/kartu/bank pra-UTS, literal katalog selain AKK203 TM8-14 dan histori release. 42 kartu pra-UTS tetap utuh. Dari kartu UAS baru, 15 identitas konsep yang sama dipertahankan, 27 identitas baru digunakan; kartu lama yang berubah konsep tidak meminjam identitas/SRS. Perubahan tes bersama hanya menerima hash ASP tertentu; materi MNU108, MNU307, manstrat, UpdateNotifier.tsx, index.css, semester 2 dan mata kuliah lain tetap sama. PR45, worktree yang dilarang, perubahan lokal C:/cek dan sources mirror tidak diubah.

Cara membangun ulang dari akar repo:

```text
node scripts/build-akk203-pra-uas.mjs
node scripts/test-akk203-pra-uas.mjs
node scripts/test-akk203-pra-uas-render.mjs
npm run lint
npx tsc -b --pretty false
npm run test
npm run build
npm run test:runtime
npm run test:e2e
node scripts/test-akk203-pra-uas-browser.mjs
```

04_canonical_spec.json adalah sumber sunting. Builder menghasilkan 04 Markdown,05,06,07,matriks02 serta modul bacaan/review/latihan; laporan akhir dan register adalah hasil audit terpisah. Bukti teknis merujuk versi kanonik dan artefak hasil tes. Paket TM08-TM14 dan root dokumen baru disinkronkan ke C:/AkuntansiHub-Content-Agent/content-pipeline/AKK203. Progress pra-UTS lama dipertahankan; progress baru diberi nama _progress_pra_uas_20261014.md. PDF tambahan disimpan pada course-sources/AKK203/shared/pra-uas-20261014, tidak dikomit ke Git. sync-manifest.json mencatat target dan hash berkas yang diverifikasi setelah penyalinan.
