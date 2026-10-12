# Manajemen Keuangan MNK102: audit pra-UAS

Paket mengikuti tujuh pertemuan TM09-TM15, berdasarkan `Kontrak MK 2026.xlsx`, Sheet1 A26:E32. TM08 adalah UTS dan TM16 UAS. Sheet2 merupakan daftar topik tanpa pemisahan minggu ujian; penomoran paket memakai kalender Sheet1. Kode MNK102/FEB25603012 mengikuti koreksi katalog pada PR #55.

| TM | Cakupan | Buku lokal 16e | Kuis | Flashcard | Kasus |
|---:|---|---|---:|---:|---:|
| 9 | Struktur modal, risiko, leverage, Hamada, WACC | Bab14, cetak478-517 / PDF520-559 | 12 | 6 | 2 |
| 10 | Dividen residual, distribusi, buyback, split | Bab15, cetak519-555 / PDF561-597 | 10 | 6 | 2 |
| 11 | Kebijakan modal kerja, CCC, anggaran kas, piutang | Bab16, cetak559-581 / PDF601-623 | 8 | 6 | 2 |
| 12 | Persediaan, diskon pemasok dan pendanaan pendek | Bab16, cetak577-589 / PDF619-631 | 8 | 6 | 2 |
| 13 | Kurs, tenor, IRP/PPP, hedge dan proyek lintas negara | Bab18, cetak625-661 / PDF667-703 | 8 | 6 | 2 |
| 14 | Sinergi, valuasi, penawaran dan pembayaran saham | Bab21, cetak741-767 / PDF783-809 | 8 | 6 | 2 |
| 15 | Corporate failure, indikator distress dan pemulihan | Altman2002 PDF9-18; Bab7 cetak261-262 / PDF303-304 | 6 | 6 | 2 |
| **Total** | **Tujuh TM** | | **60** | **42** | **14** |

## Sumber dan prioritas

Kontrak menyebut Brigham & Houston, *Fundamentals of Financial Management*, edisi15 (2019). Buku lokal adalah edisi16, copyright2022, sebanyak866 halaman PDF. Selisih halaman PDF terhadap cetak adalah42 dan diperiksa pada beberapa bab. Buku tersedia di folder `Manajemen Keuangan/Materi`; tidak ada paket kanonis04/05 yang ditemukan untuk mata kuliah ini. Nomor bab dipetakan menurut topik, terutama multinasional: kontrak Bab19, buku16e Bab18. Bab19 buku lokal membahas derivatif. Perubahan susunan ini dikonfirmasi pada [penerbit Cengage](https://www.cengage.ca/c/fundamentals-of-financial-management-16e-brigham-houston/9780357517574/).

Tugas lokal `W9_Case_Study_Kelompok_7.pdf` memperlihatkan pola kasus Campus Deli, DOL, ROIC, ROE, risiko dan struktur modal. Data serta rumus diperiksa terhadap buku dan halaman PDF7-18 tugas. Karena tidak ada arsip UAS yang teridentifikasi, porsi struktur modal lebih besar merupakan perkiraan prioritas berdasarkan contoh tersebut serta kontrak, tanpa menjanjikan soal ujian.

Artikel corporate failure yang dimaksud dosen belum mempunyai judul atau berkas yang dapat diidentifikasi. [Artikel primer Edward Altman2002 dari NYU Stern](https://w4.stern.nyu.edu/finance/docs/WP/2002/pdf/wpa02052.pdf) menjadi pelengkap yang disebut jelas pada TM15. Artikel membedakan model original, privat, nonmanufaktur, dan pemetaan peluang default. Skor bukan probabilitas langsung, dan hasil model tidak menetapkan status hukum pailit. Keterbatasan ini muncul dalam bacaan serta latihan.

Setiap latihan baru mencantumkan halaman cetak/PDF atau halaman artikel yang dapat ditelusuri. Kuis memiliki ID, kompetensi, sourceRef dan sourceAnchors. Konteks dan pembahasan bank memuat rujukan; bagian belakang flashcard juga memuat rujukan. Manifest `scripts/fixtures/mnk102-uas-sources.json` mencatat hash sumber, edisi, rentang yang diperiksa, serta fingerprint pra-UTS.

## Hasil audit isi

- Rujukan Brigham & Ehrhardt pada bacaan lama diganti dengan Brigham & Houston yang tersedia dan sesuai kontrak. Bab keuangan multinasional dijelaskan menurut edisinya.
- TM15 berdiri sendiri. Merger tetap TM14; corporate failure tidak digabung menjadi salinan ulasan UAS.
- Struktur optimal tidak ditentukan dari EPS tertinggi. WACC menggunakan bobot dan biaya utang setelah pajak; Hamada memakai D/E, bukan D/total modal.
- Dividen residual tidak negatif; kebutuhan ekuitas, utang, payout dan DPS dibedakan. Split/buyback tidak dianggap menciptakan nilai secara mekanis.
- CCC, saldo minimum dan pembelian/COGS diberi asumsi eksplisit. Investasi yang dilepas sekali dibedakan dari penghematan biaya tahunan.
- Bunga nominal/efektif, tenor dan basis hari dipisahkan. Contoh potongan awal/saldo kompensasi merupakan pengembangan arus kas sesuai syarat kasus. Pendalaman persediaan/pendanaan pada Web Appendix16A/16B belum tersedia sebagai sumber lokal lengkap; klaim prioritas EOQ, Baumol atau Miller-Orr dari versi lama tidak dianggap pasti diuji tanpa sumber dosen tambahan.
- Kurs menuliskan arah IDR/USD atau IDR/JPY. IRP memakai bunga setenor; PPP merupakan model proyeksi. Hedge memberi kepastian kas dengan kemungkinan biaya peluang.
- Valuasi operasi/WACC dipisahkan dari ekuitas/biaya ekuitas. Terminal didiskonto pada tanggal yang benar, dan sinergi tidak dihitung dua kali. EPS accretion tidak membuktikan NPV positif.
- Z original menggunakan nilai pasar seluruh ekuitas dan nilai buku total kewajiban, dengan konteks manufaktur publik dan aset yang sesuai. Koefisien serta batas tidak ditukar sebagian antarvarian.

Angka, bunga, kurs dan pajak latihan merupakan asumsi. Kasus hipotetis tidak memakai nama perusahaan riil sebagai klaim data terbaru. Tarif pajak25% pada contoh Campus Deli adalah parameter sumber kasus, bukan tarif Indonesia yang berlaku kini. Chapter7/11 buku dijelaskan sebagai konteks Amerika; tidak disamakan dengan prosedur Indonesia.

## Pra-UTS dan kompatibilitas

TM01-TM08 tidak diedit. Sebanyak35 kuis pra-UTS,42 flashcard TM01-TM07, dan7 kasus pra-UTS tetap identik. Ulasan TM08 yang dulu masuk kelompok pra-UAS tetap tersedia:5 kuis,6 kartu,1 bank. Kartu ulasan direklasifikasi ke pra-UTS, sementara isi dan ID dipertahankan. Jumlah seluruh deck menjadi90 kartu, termasuk42 kartu pra-UAS baru. Paket UTS aplikasi kini mengikutsertakan ulasan lama tersebut.

Ekspor dan berkas internal MNK201 dipertahankan; MNK102 serta alias lama membuka data sama. Latihan pra-UAS baru memakai ID berversi agar status soal/kartu lama tidak salah diterapkan ke isi baru. Perubahan dataset membatalkan pemulihan sesi ujian lama melalui pemeriksaan fingerprint aplikasi yang sudah ada. Berkas flashcard dikeluarkan dari generator lama agar materi baru tidak tertimpa saat generator dijalankan.

Filter fase flashcard memakai rentang data sebenarnya dan memeriksa pertemuan yang tersedia pada fase pilihan, termasuk ulasan TM08. Materi Pengantar Manajemen, Manajemen Stratejik, PR45/worktree perapian-pr45, UpdateNotifier dan index.css tidak diubah.

## Validasi

Baseline pada commit41d7456 telah lulus67/67 tugas standar. Paket ini lulus69/69, termasuk dua guard baru. Lint, TypeScript/build, runtime smoke dan browser E2E standar lulus. Pemeriksaan mandiri menghitung kembali kunci numerik, pembulatan, arus kas, kuotasi kurs dan skor Z; distribusi indeks jawaban15/15/15/15 serta panjang opsi diperiksa.

Komponen aplikasi diuji untuk teks dan rumus, pengacakan opsi, pilihan benar/salah, seluruh pembahasan, nilai ujian60/60 dan100%, membuka14 bank, dua pembahasan perTM, filter serta pembalikan kartuTM15. Browser nyata pada1440px dan390px menguji rute MNK102/MNK201/FEB25603012, tujuh TM, sumber Altman, formula dan pembahasan TM15, kuis, bank, serta42 kartu.

Kesalahan baru yang ditemukan selama pengerjaan berupa decoding UTF-8 pada sumber pra-UTS, rumus Z yang belum memicu mode matematika renderer, dan pemilih/waktu tunggu skrip browser. Semuanya diperbaiki; fingerprint pra-UTS serta pemeriksaan renderer kini lulus. Peringatan chunk besar dan DOM paragraf bersarang pada runtime tetap ada pada baseline, tanpa kegagalan tes.

Entri v1.3.6 ditambahkan di atas riwayat yang tetap utuh. Cabang materi berasal dari hasil koreksi PR #55; selama #55 belum merge, PR materi menggunakan cabang koreksi sebagai dasar agar diff hanya memuat pekerjaan MNK102. Setelah koreksi masuk main, dasar PR materi dapat dialihkan ke main. Tidak ada merge otomatis.
