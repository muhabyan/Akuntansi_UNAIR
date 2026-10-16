# SIA pra-UAS: revisi materi TM8–14, 16 Oktober 2026

Materi inti, katalog, kuis, flashcard, dan bank soal kini mengikuti urutan RPS-SIA. Versi sebelumnya memasangkan COSO dengan TM8, keamanan dengan TM9, analitika dengan TM11, dan integrasi dengan TM14; urutan tersebut tidak sesuai RPS. Revisi ini juga mengisi tiga pokok yang sebelumnya belum terwakili dengan benar: conversion, reporting/XBRL, dan justifikasi/manajemen proyek TI.

## Cakupan dan peta sumber

RPS yang diperiksa: **Pembagian Mengajar Sistem Informasi Akuntansi Gasal 2025/2026**, satu halaman, baris minggu 8–14. Buku utama: **Richardson, Chang & Smith, Accounting Information Systems, 4e ISE**. Kolom PDF menggunakan nomor halaman pembaca mulai dari 1; untuk halaman yang dipakai, halaman PDF = halaman cetak + 25.

| TM | Materi inti menurut RPS | Bab | Halaman cetak / PDF | Hasil belajar dan latihan utama |
| --- | --- | --- | --- | --- |
| 8 | Conversion Business Process | 9 | 350–365 / 375–390 | Aliran biaya RM–WIP–FG–COGS, dokumen, BPMN dengan loop produk cacat, kontrol produksi, REA/UML dan tabel Sunset |
| 9 | Integrated Project | 10 | 376–385 / 401–410 | Integrasi proses, grain/PK/FK, alokasi, enam jurnal, rekonsiliasi saldo dan risiko akses |
| 10 | Accounting Information Systems and Internal Controls | 11 | 386–408 / 411–433 | Tujuan COSO, lima komponen dan 17 prinsip, respons risiko, desain dan bukti pelaksanaan kontrol |
| 11 | Cybersecurity and Computer Fraud | 12 | 420–439 / 445–464 | CIA, akses, kriptografi, fraud triangle, BCP/DRP dan perbedaan target/hasil RPO–RTO |
| 12 | Reporting Processes and XBRL | 14 | 470–483 / 495–508 | ETL/warehouse/BI, KPI, taxonomy–instance–context–unit, instant/duration dan rekonsiliasi pelaporan |
| 13 | Emerging Technologies: Blockchain and AI Automation | 15 | 494–516 / 519–541 | Konsensus, signature, oracle, shared receipt, AI/ML, RPA, exception, kontrol bot dan manfaat otomasi |
| 14 | Justifying and Planning IT Initiatives Using Project Management Techniques | 17 | 550–571 / 575–596 | Business case, biaya/manfaat, NPV/payback/sensitivitas, SDLC, WBS, CPM dan Gantt |

Pelengkap analitika/AMPS dan kualitas data ditempatkan dalam pendalaman TM9 (Ch.2–3). Pelengkap audit SI/COBIT/CAATs ditempatkan dalam pendalaman TM10 (Ch.13). Cloud pada TM13 mengacu pada Ch.6 p.270/PDF295. Pelengkap ini diberi label dan tidak menggantikan bab inti RPS. Tidak ada klaim bahwa IMPACT adalah kerangka Richardson; buku menggunakan AMPS.

## Materi dan visual

| TM | Visual responsif | Uji pemahaman dengan contoh jawaban | Jurnal seimbang |
| --- | ---: | ---: | ---: |
| 8 | 3 | 2 | 5 |
| 9 | 6 | 4 | 6 |
| 10 | 6 | 4 | 0 |
| 11 | 3 | 2 | 0 |
| 12 | 3 | 2 | 0 |
| 13 | 6 | 4 | 0 |
| 14 | 4 | 2 | 0 |
| **Total, termasuk pendalaman** | **31** | **20** | **11** |

Setiap visual memiliki judul, keterangan, teks alternatif, transkrip, dan representasi ponsel berupa SVG tersusun vertikal atau alur kartu. BPMN produksi dan jaringan CPM merupakan diagram buatan untuk menjelaskan contoh; CPM menggunakan aktivitas pada node, dibedakan secara eksplisit dari contoh aktivitas pada panah di buku. Contoh XBRL merupakan ilustrasi unsur fact, bukan XML filing yang siap dikirim.

Latihan pra-UAS mencakup **35 soal kuis** (lima per TM), **42 flashcard** (enam per TM), dan **tujuh kasus** dengan pembahasan/rubrik. Semua mengikuti pemetaan bab yang sama. Perusahaan, data angka, jurnal, dan ilustrasi latihan ditandai sebagai buatan. Tidak ada janji bahwa contoh adalah bocoran atau prediksi soal UAS.

Perhitungan contoh yang diperiksa: COGM 56 dan COGS 52; neraca kasus integrasi 180 = 15 + 165; RPO aktual 40 menit dan RTO aktual 2 jam 30 menit; aging total 100; NPV 4,34 pada arus kas 50 dan −8,09 pada arus kas 45; jalur kritis A–C–D delapan hari serta sensitivitas menjadi sembilan hari ketika B menjadi lima hari. Payback 2,4 tahun dibatasi pada asumsi penerimaan merata; bila arus kas diterima pada akhir tahun, pemulihan kas terjadi akhir tahun ketiga.

## Provenans dan batas sumber

Sumber lokal dibaca tanpa diubah atau diunggah ke repositori. Identifikasi berkas untuk pemeriksaan ulang:

| Berkas | SHA256 |
| --- | --- |
| RPS-SIA.pdf | `317b24c667115b78e0a35f54e352dfd703e4854b5dd1ab775eaaf130030353d5` |
| Accounting Information Systems, 4e ISE (PDF lokal) | `6d10db38a567fc50ba0743ea008706932eb8498b2e009177d10efc624b6bf621` |

Rujukan primer pelengkap yang diperiksa dan ditautkan dalam materi:

- [COSO ERM](https://www.coso.org/guidance-erm) untuk membedakan kerangka ERM dari Internal Control 2013.
- [ISACA tentang COBIT 2019](https://www.isaca.org/resources/news-and-trends/industry-news/2018/a-new-cobit-is-in-town-and-i-really-like-how-it-looks) untuk governance dan management.
- NIST glossary: [RPO](https://csrc.nist.gov/glossary/term/recovery_point_objective), [RTO](https://csrc.nist.gov/glossary/term/recovery_time_objective), dan [digital signature](https://csrc.nist.gov/glossary/term/digital_signature).
- [PCAOB AS 2201](https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201) untuk konteks klasifikasi defisiensi dalam lingkup standar tersebut; bukan penyamaan otomatis dengan ketentuan Indonesia.
- [XBRL essentials](https://specifications.xbrl.org/xbrl-essentials.html) dan [SEC glossary](https://www.sec.gov/data-research/structured-data/inline-xbrl/xbrl-glossary-terms) untuk istilah teknis pelaporan.
- [NISTIR 8202](https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf) untuk batas blockchain, konsensus dan input eksternal.
- [Grigg: Triple Entry Accounting](https://iang.org/papers/triple_entry.html) untuk gagasan shared receipt, bukan pengganti kewajiban double-entry.
- [IFRIC: Holdings of Cryptocurrencies, Juni 2019](https://www.ifrs.org/content/dam/ifrs/supporting-implementation/agenda-decisions/2019/holdings-of-cryptocurrencies-june-2019.pdf) untuk catatan terbatas tentang IAS 2/IAS 38. Ini bukan telaah menyeluruh seluruh PSAK atau aset digital.

## Verifikasi

- `npm run lint`: PASS, 397 berkas TypeScript/TSX.
- `npm test`: **80/80 PASS**, mode standard. Termasuk pemeriksaan baru tujuh bab RPS, representasi visual ponsel, XML SVG, formula, jurnal, jumlah latihan, dan kecocokan snapshot.
- `npm run build`: PASS. Peringatan ukuran chunk bawaan masih muncul.
- `npm run test:runtime`: PASS untuk aset, rute, fingerprint data, sesi ujian dan persistensi. Peringatan struktur `<p>` bersarang pada komponen kuis generik masih muncul dan tidak diubah dalam revisi konten ini.
- `npm run test:e2e`: PASS untuk alur aplikasi yang dicakup rangkaian bawaan (termasuk bank/simulator EKT109, pemulihan timer PJK201, rute dan tema). Ini bukan bukti pengujian interaksi setiap soal SIA.
- Pemeriksaan preservasi pra-UTS: PASS untuk 17 mata kuliah. Materi/kuis/kasus dan 63 flashcard SIA TM1–7 tetap sama secara data. Katalog di luar SIA pasca-UTS dijaga oleh hash independen.
- ID 42 flashcard pasca-UTS diganti dengan versi baru, agar penguasaan topik lama tidak diwariskan ke kartu dengan topik RPS berbeda. Riwayat kartu pra-UTS tetap memakai ID sebelumnya.
- Guard MNU108/MNU307 menerima hanya hash baru yang disebutkan secara eksplisit untuk revisi SIA; pemeriksaan terhadap perubahan lain tetap aktif.
- Pemeriksaan DOM pada tujuh bacaan desktop (lebar efektif 1600 CSS px) dan ponsel (487 CSS px akibat skala browser lokal): tidak ada overflow halaman atau teks SVG terlihat yang keluar dari batas horizontal. Pemeriksaan ini dilakukan pada bacaan inti; bukan audit aksesibilitas menyeluruh atau setiap kemungkinan perangkat.
- Bukti tangkapan layar: [alur konversi pada desktop](sia-pra-uas-20261016/tm8-desktop-dark.png), [alur konversi pada ponsel](sia-pra-uas-20261016/tm8-mobile-dark.png), dan [CPM pada desktop](sia-pra-uas-20261016/tm14-critical-path-light.png). Hasil ukuran DOM disimpan sebagai JSON di folder yang sama.

Paket aktif pada `content-pipeline/SII306/TM08..TM14/audit-20261012` telah disinkronkan dengan implementasi 16 Oktober. Nama direktori dipertahankan untuk kompatibilitas pemeriksaan lama; status di dalamnya menyatakan revisi baru. Dokumen audit 12 Oktober diberi pemberitahuan bahwa pemetaan lamanya sudah digantikan. Berkas historis selain paket aktif tidak diklaim sebagai spesifikasi terbaru.

Materi ini telah diperiksa terhadap sumber dan pengujian di atas, tetapi belum merupakan validasi independen oleh dosen. Revisi disiapkan sebagai draf perubahan untuk ditinjau sebelum penggabungan ke situs utama.
