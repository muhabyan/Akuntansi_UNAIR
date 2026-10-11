# Audit Perpajakan II pra-UAS

PJK301 (FEB25603015), tujuh pertemuan TM09-TM15. Dasar cabang: `main` pada `f15d1be`, sesudah merge PR #52. Materi dan latihan pra-UTS dipertahankan, termasuk isi review TM08. Snapshot objek sebelum perubahan disimpan pada `scripts/fixtures/pjk301-uts-baseline.json` dan diperiksa oleh tes baru.

## Penetapan cakupan dan jumlah

RPP lokal `C:\cek\Perpajakan II\lecturer-material\RPS Perpajakan II.pdf`, halaman PDF 1, memuat kode PJK301. Halaman 3 menetapkan TM08 UTS dan TM09-TM11; halaman 4 memuat TM12-TM15; halaman 5 menetapkan TM16 UAS dan studi kasus komprehensif. Rentang TM08-TM14 pada latihan lama tidak sesuai urutan ini. Review UAS sekarang mengintegrasikan tujuh TM dan memakai slot ujian yang dinormalisasi menjadi TM16 oleh aplikasi.

| TM | Cakupan | Kuis | Flashcard | Kasus |
|---|---|---:|---:|---:|
| 09 | Konsep PPh 21/26, TER, natura, administrasi | 10 | 6 | 2 |
| 10 | Pegawai tetap/tidak tetap, pensiun, jasa, kegiatan, pesangon | 10 | 6 | 2 |
| 11 | OP dengan pembukuan/NPPN, rekonsiliasi badan, 31E, kredit | 10 | 6 | 2 |
| 12 | PPN, PKP, objek, DPP, tarif lintas tahun, impor/ekspor | 8 | 6 | 2 |
| 13 | PPnBM, saat/tempat terutang, faktur, kurs, retur, sanksi | 8 | 6 | 2 |
| 14 | PM, perhitungan kembali, restitusi, pemungut, fasilitas | 8 | 6 | 2 |
| 15 | Dasar karbon, simulasi emisi, keputusan proyek, perdagangan | 6 | 6 | 2 |
| Total | Tujuh TM | 60 | 42 | 14 |

Seluruh butir baru mempunyai rujukan halaman PDF atau pasal/ayat dan paragraf yang dijelaskan. Kuis menyimpan rujukan pada soal, pembahasan, dan metadata. Flashcard menyimpan rujukan pada jawaban. Kasus menyimpan rujukan pada konteks serta panduan jawaban. Setiap bacaan memiliki dua contoh yang dapat dibuka, memakai kasus bank yang sama. Contoh bacaan dan review merupakan penyajian ulang latihan, sehingga tidak dihitung sebagai kasus bank tambahan.

Kuis menghitung nominal serta menguji pilihan dasar, periode, klasifikasi, dokumentasi, dan kesalahan. Posisi kunci berjumlah 15 untuk setiap posisi opsi. Distraktor angka mewakili kesalahan lapisan, tahun tarif, DPP, arah koreksi, atau satuan; opsi analisis dibuat sebanding panjangnya. Opsi tetap diacak oleh komponen aplikasi. ID flashcard pra-UAS memakai namespace baru `pjk301-uas-v3`, agar makna baru tidak menerima status SRS atau bintang dari kartu lama. ID pra-UTS tetap.

## Sumber dan tahun yang dipakai

Paket kanonis 04/05 lokal di `.content-inbox/PJK301` dan `C:\AkuntansiHub-Content-Agent\content-pipeline\PJK301` hanya ditemukan untuk TM01-TM07. Tidak ditemukan paket 04/05 TM09-TM15. Buku Waluyo dan Resmi disebut RPP, tetapi berkas buku lokalnya tidak ditemukan. Tidak ada kutipan halaman buku yang direka. Materi dosen yang dipakai adalah `slide-dosen-PPh-orang-pribadi.pdf` halaman PDF 21, 23, 48, 51 dan `slide-dosen-natura-PMK-66-2023.pdf`, diperiksa terhadap teks PMK 66. Berkas regulasi lokal tersedia di `C:\cek\Perpajakan II\regulation`.

Nomor halaman selalu dihitung dari awal berkas PDF. Pasal/ayat dan nama paragraf dipakai untuk dokumen resmi HTML. Hash berkas lokal yang dipakai serta daftar jangkar rujukan tersedia pada `scripts/fixtures/pjk301-uas-sources.json`. Sumber primer berikut memberi akses untuk menelusuri aturan, dengan aturan lama dibaca bersama perubahan HPP pada bagian yang berubah:

| Sumber resmi | Bagian yang diperiksa | Pemakaian |
|---|---|---|
| [PMK 168/2023](https://www.pajak.go.id/id/peraturan/petunjuk-pelaksanaan-pemotongan-pajak-atas-penghasilan-sehubungan-dengan-pekerjaan-jasa-1) dan PDF lokal 69 halaman | PDF 10-17 Pasal 8-16; 21 Pasal 21; 35-36 Lampiran I.2.1.1 | PPh 21/26 tahun 2024, masa terakhir, pengembalian lebih potong |
| [Bahan sosialisasi DJP TER](https://pajak.go.id/sites/default/files/2024-02/PMK%20168%20Tahun%202023%20Tentang%20PPh%20Pasal%2021%20TER.pdf), PP 58/2023 | PDF 9-10 tabel kategori/TER, 18 harian, 23 contoh pegawai | Tarif bulanan/harian, uji lapisan gross-up |
| [PMK 66/2023](https://jdih.kemenkeu.go.id/dok/pmk-66-tahun-2023/overview) dan PDF lokal 52 halaman | PDF 16-17 Pasal 22; 21-23 Lampiran A; 48-49 contoh kendaraan/apartemen | Penilaian dan pengecualian natura tahun 2024 |
| [PP 68/2009](https://jdih.kemenkeu.go.id/api/download/fulltext/2009/68TAHUN2009PP.htm) | Pasal 2, 4-6 | Pesangon dan pensiun sekaligus; dua tahun kalender dan tahun ketiga |
| [UU HPP](https://www.pajak.go.id/index.php/id/peraturan/harmonisasi-peraturan-perpajakan), PDF lokal 224 halaman | PDF 14-16 KUP; 38-49 PPh; 56-57 tarif/PKP; 63-76 PPN; 95-97 karbon; 103 pemberlakuan | Tarif OP/badan, sanksi faktur, kredit PM, kerangka karbon |
| [UU PPh 36/2008 pada JDIH Kemenkeu](https://jdih.kemenkeu.go.id/api/download/fulltext/2008/36TAHUN2008UU.htm) | Pasal 6, 7, 14, 28/28A/29, 31E; ketentuan yang berubah menggunakan HPP | Pembukuan/norma, rugi, kredit, fasilitas 31E |
| [UU PPN 42/2009](https://www.pajak.go.id/undang-undang-nomor-42-tahun-2009), dibaca bersama HPP | Pasal 1 angka 17-20; 5/5A/8/10/11/12/13/16A/16B | DPP, PPnBM, saat/tempat, faktur, retur, pemungut, fasilitas |
| [PMK 131/2024](https://www.pajak.go.id/id/peraturan/perlakuan-pajak-pertambahan-nilai-atas-impor-barang-kena-pajak-penyerahan-barang-kena) | Pasal 2-6 | Transaksi biasa Maret/April 2025: nonmewah 12% × 11/12; mewah dasar penuh |
| [PMK 164/2023](https://jdih.kemenkeu.go.id/api/download/a99b8e80-9694-46ab-8de1-63c2484aa636/2023pmkeuangan164.pdf) | PDF 16-18 Pasal 17-20 | Pengukuhan PKP pada skenario tahun buku kalender 2024; pisahkan jalur tepat waktu, lebih awal, terlambat |
| [PP 44/2022](https://pajak.go.id/id/peraturan/penerapan-terhadap-pajak-pertambahan-nilai-barang-dan-jasa-dan-pajak-penjualan-atas) | Pasal 21 dan ketentuan saat terutang | Kurs KMK, saat faktur seharusnya dibuat |
| [PMK 186/2022](https://jdih.kemenkeu.go.id/api/download/2fbbf7e4-26e6-4a89-bb99-0ba876196196/186~PMK.03~2022.pdf) | PDF 3-6 Pasal 3-8 dan lampiran | Perkiraan/realisasi PM bersama, mesin 4 tahun, penyesuaian masa ketiga |
| [PMK 81/2024](https://www.pajak.go.id/en/node/113110) dan PDF lokal 642 halaman | PDF 78-79 Pasal 94; 138-139 Pasal 171 | Setor/lapor PPh masa biasa Mei 2025, tanpa relaksasi dan mengabaikan hari libur dalam soal |

Kasus PPh dan sebagian besar PPN memakai 2024. Kasus 2025 menyebut bulan secara eksplisit dan menjelaskan perbedaan tarif formal serta hasil efektif. PPnBM 20%, norma NPPN 40%, dan kurs KMK Rp15.000/USD adalah input kasus; tidak dinyatakan sebagai tarif atau kurs universal. Pecahan DPP dipertahankan sampai hasil akhir. PKP PPh dibulatkan ke bawah ribuan penuh. Gross-up menggunakan pembulatan rupiah terdekat sebagai konvensi simulasi yang dinyatakan.

## Temuan dan perbaikan

1. Cakupan latihan lama memasukkan review UTS TM08 sebagai pra-UAS dan berhenti TM14. Kini TM09-TM15 dengan karbon pada TM15; label kuis, bank, katalog, dan filter flashcard sesuai cakupan.
2. TER tidak selalu Januari-November: masa terakhir dapat terjadi saat berhenti. Pengembalian lebih potong tidak dinolkan. Contoh resmi masuk September menghasilkan PPh Rp280.000 dan pengembalian Rp2.975.000.
3. Fasilitas kendaraan memakai syarat tanpa saham dan rata-rata bruto sampai Rp100 juta/bulan. Angka Rp30 juta pada contoh repo lama dikoreksi. Apartemen individual diuji terhadap batas Rp2 juta/bulan; bingkisan di luar hari raya memakai batas tahunan Rp3 juta.
4. Pegawai harian, jasa bukan pegawai, peserta kegiatan, pensiunan, SPLN, serta pesangon tidak diperlakukan dengan satu dasar tarif. Pesangon Rp600 juta menghasilkan Rp87,5 juta dengan lapisan PP 68/2009.
5. TM11 mencakup OP dan badan sesuai RPP. Rekonsiliasi Rp2,365 miliar pada bank lama dipertahankan sebagai contoh yang telah diperiksa, lalu diperluas dengan 31E Rp457.864.000 dan Pasal 29 Rp217.864.000. PPh final tidak dijadikan kredit reguler.
6. PPN 2024 11% dipisahkan dari tarif formal 2025 12% serta DPP nonmewah biasa 11/12. Kasus mewah memakai bulan Maret sesudah transisi eceran Januari. Jangan memindahkan rumus ini ke skema sektoral tanpa aturan khusus.
7. Sanksi faktur sesudah HPP menggunakan 1% DPP untuk pemicu Pasal 14 KUP yang disebut, terpisah dari pokok. Retur barang dan pembatalan jasa memiliki dokumen serta masa masing-masing.
8. PM langsung dan PM bersama dibedakan. PM mesin Rp44 juta dengan perkiraan 80%, realisasi 70%, masa manfaat 4 tahun menghasilkan pengurang PM Rp1,1 juta. Hak mengajukan restitusi tidak menjamin pencairan otomatis.
9. Contoh lama dengan escape rumus rusak dan uraian yang telah digantikan dihapus dari dependensi pasca-UTS. Dua contoh per TM memakai rujukan dan langkah yang konsisten dengan bank. Kasus review UTS pada file yang sama tetap utuh.
10. Release notes hanya memperoleh satu entri baru v1.3.4 di atas v1.3.3. Tes release AKM II sekarang memeriksa sejarah rilisnya tetap berurutan ketika rilis baru ditambahkan.

## Perkiraan prioritas dan butir yang belum pasti

Prioritas merupakan perkiraan dari RPP serta contoh resmi, karena arsip UAS PJK301 belum ditemukan. Folder `public/arsip-uas/PAJAK` berisi Perpajakan I, sehingga tidak dipakai untuk menyatakan pola ujian Perpajakan II. Fokus hitungan: masa terakhir TER/natura, rekonsiliasi dan 31E, PPN lintas tahun, kredit/perhitungan kembali PM, retur, serta analisis karbon.

- Buku Waluyo/Resmi dan paket kanonis 04/05 pasca-UTS belum tersedia. Bobot ujian dan preferensi aturan dosen belum terkonfirmasi. Catatan lokal `CATATAN-STATUS-PERATURAN.md` menyebut RPP tidak memuat PMK 81; catatan itu diperlakukan sebagai petunjuk audit, bukan sumber primer. Kasus 2025 menamai aturan baru; ketentuan bahan kuliah lama tidak disamakan dengan aturan tahun berikutnya.
- PMK 81 sudah mengalami perubahan 2025/2026; latihan administrasi dibatasi pada masa Mei 2025 dengan asumsi eksplisit. Pembaruan 2026 tidak diterapkan diam-diam pada kasus historis. PMK 164 dirujuk untuk kondisi tahun buku 2024; administrasi tahun berikutnya harus memakai ketentuan tahun tersebut.
- Kuis TM15 nomor 6 dan kasus 15A memerlukan bukti pengakuan sertifikat agar pajak neto aktual dapat ditetapkan. Harga sertifikat tidak otomatis menjadi kredit rupiah.
- Semua hitungan karbon adalah simulasi pendidikan. UU HPP memuat norma tarif dan tanggal pemberlakuan, tetapi itu belum cukup untuk menyimpulkan DPP, tarif operasional, pengakuan pengurangan, dan kewajiban nyata seluruh sektor pada 2026. Tidak diklaim bahwa pajak sudah dipungut atau bahwa seluruh pelaksanaan belum berlaku.
- Kasus 15B menghitung PPh perdagangan berdasarkan asumsi penghasilan reguler dan total omzet Rp60 miliar. PPN unit karbon, insentif kendaraan/energi, dan pajak daerah membutuhkan klasifikasi, lokasi, tahun, peraturan pelaksana serta Perda. Belum diberikan tarif universal atau keputusan PPN tanpa bukti.
- Norma 40% serta PPnBM 20% diasumsikan telah diklasifikasi sah dalam soal. Penggunaan aktual memerlukan jenis usaha/wilayah atau klasifikasi barang yang lengkap.

## Pemeriksaan

### Audit isi kedua setelah pertanyaan kejelasan dan kelengkapan

Pemeriksaan kedua mencocokkan semua subtopik RPP PDF 3-4 dengan bacaan. Ditemukan uraian yang terlalu ringkas pada pemilihan TER, alur faktur, pedoman PM historis, serta kebijakan penurunan emisi. Bacaan diperluas tanpa mengubah jumlah latihan atau materi pra-UTS.

| TM | Subtopik RPP yang diperiksa | Penguatan kejelasan |
| --- | --- | --- |
| 09 | Dasar, penerima/objek/pemotong, hak/kewajiban, administrasi, natura, TER | Arti singkatan, pengecualian pemotong/penerima, tabel kategori A/B/C dan langkah memilih TER |
| 10 | Pegawai tetap/tidak tetap, bukan pegawai, pensiun, kegiatan, pesangon, SPLN, pelaporan, TER | Enam langkah kertas kerja masa terakhir, pemisahan potongan sebelumnya dari pajak tahunan |
| 11 | OP pembukuan/NPPN; badan rekonsiliasi dan PPh | Contoh PTKP dan batas tambahan penghasilan istri; norma PPh dipisahkan dari kredit PM |
| 12 | Latar belakang, dasar, karakter/mekanisme, subjek/objek/pengecualian/tarif, kewajiban PKP | Arti PM/PK/DPP/PKP dan rujukan definisi nilai impor |
| 13 | Pembukuan, PPnBM, saat/tempat, jenis/kewajiban/penggantian faktur, valas, retur, sanksi | Prosedur faktur gabungan/pengganti/batal dan pembetulan SPT dalam skenario 2024; rujukan retur ditambahkan |
| 14 | Kredit/penghitungan kembali/pedoman PM, restitusi, pemungut, fasilitas, pelaporan | Pedoman historis 60%/70% dibandingkan Pasal 9A dan contoh kendaraan bekas 2024; rujukan pemungut diperjelas |
| 15 | Dasar, subjek/objek/pengecualian, DPP/tarif/hitung/saat, PPN/PPnBM/daerah, perdagangan | Contoh PPN DTP kendaraan listrik 2024, PPnBM DTP bersyarat, kerangka HKPD dan transisi tahun |

Sumber tambahan primer: [PER-03/PJ/2022](https://pajak.go.id/index.php/id/peraturan/faktur-pajak) Pasal 4/22-24 dan Lampiran J-K; [PMK 74/2010](https://pajak.go.id/en/node/62013) Pasal 2-7 untuk pembanding historis; [PMK 65/2022](https://jdih.kemenkeu.go.id/api/download/77a0009c-d125-41c4-b020-635d14500c0b/65~PMK.03~2022Per.pdf) PDF 4-7; [PMK 8/2024](https://fiskal.kemenkeu.go.id/files/peraturan/file/1710981062_pmk_8.pdf) PDF 4-6; [PMK 9/2024](https://pajak.go.id/en/node/105003) Pasal 2-5; [UU HKPD](https://jdih.kemenkeu.go.id/api/download/770ecf1d-664b-48a1-88f4-8849b8ca7258/1TAHUN2022UU.pdf) PDF 12-17/99.

Konflik yang harus dibaca hati-hati: halaman edukasi DJP tentang *Deemed Tax* masih menampilkan pedoman lama, sedangkan HPP lokal PDF 73 menghapus Pasal 9 ayat (7)-(7b) dan PDF 76 menambahkan Pasal 9A. Pedoman lama disajikan sebagai pembanding historis, tanpa klaim otomatis berlaku untuk kasus 2024/2025. Frasa metadata JDIH "s.d. Dicabut" sendiri tidak membuktikan pencabutan suatu aturan. Catatan pemeriksaan ini menggunakan isi pasal dan aturan pengganti, bukan frasa metadata tersebut.

Seluruh subtopik utama RPP sekarang memiliki uraian atau contoh yang ditandai tahunnya. Kedalaman setara seluruh bab Waluyo/Resmi dan kesesuaian dengan soal UAS dosen belum dapat dijamin. Pengecualian operasional karbon, pengakuan unit, PPN perdagangan unit, serta tarif/fasilitas daerah tertentu tetap memerlukan sumber pelaksana yang sesuai kasus; batas ini dipertahankan dalam bacaan dan latihan.

Sesudah penguatan ini, lint, TypeScript, build, tes komponen PJK301, dan 88 pemeriksaan reading frame kembali lulus. Seluruh 62 tugas standar kembali dieksekusi: 61 lulus dan satu kegagalan baseline Manajemen Strategik yang sama. Tes komponen kini memeriksa pelestarian seluruh paragraf tanpa tautan Markdown dan semua sel tabel bacaan, selain alur latihan sebelumnya.

Lint, TypeScript, build, runtime, tes PJK301, dan browser standar lulus. Seluruh 62 tugas standar dieksekusi satu per satu agar tes setelah kegagalan tetap berjalan: 61 lulus; satu kegagalan sama dengan baseline, `mnu307_render_rules`, pada hash berkas Manajemen Strategik/varian akhir baris checkout Windows. Baseline sebelum perubahan mempunyai 60 tugas: 59 lulus dan kegagalan yang sama. Area Manajemen Strategik tidak diubah. Perintah `npm test` tetap gagal pada guard baseline tersebut karena runner standar berhenti ketika ada kegagalan; tidak disembunyikan atau dikecualikan.

Tes komponen memakai komponen aplikasi nyata: pelestarian 360 bidang teks kuis, KaTeX, pengacakan opsi, jawaban benar/salah, skor ujian 60/60, pembukaan 14 bank soal dan 14 contoh, filter serta flip flashcard TM15. JSDOM memeriksa DOM dan event; tidak menghasilkan pengukuran CSS atau tangkapan layar. Tes shared reading frame memeriksa penyajian tabel ponsel serta pelestarian seluruh sel dan rujukan.

Browser baseline pada port bawaan gagal karena target CDP mengarah ke halaman Lenovo Vantage. Tes browser standar lulus dengan `E2E_CDP_PORT=9345` dan `E2E_PREVIEW_PORT=4275`. Tes itu meliputi alur EKT109/PJK201 umum; perilaku baru PJK301 diperiksa melalui tes komponen khusus. Build tetap menampilkan peringatan ukuran chunk dan runtime menampilkan peringatan React yang juga muncul pada baseline. Tidak ada kegagalan baru yang tersisa pada hasil final.

Snapshot guard lintas mata kuliah diperbarui untuk lima berkas PJK301/registri bersama yang berubah secara sah, serta katalog yang hanya berubah pada blok PJK301 pasca-UTS. Pemeriksaan terpisah memastikan katalog selain blok itu identik dengan `f15d1be`. Hash berkas Manajemen Strategik tetap. Hash TM01 setelah normalisasi LF cocok dengan snapshot; hash byte CRLF checkout Windows memicu kegagalan baseline yang masih tersisa.

Area yang dilarang tidak diubah: PR45/worktree `perapian-pr45`, `src/data/manstrat`, `src/components/UpdateNotifier.tsx`, `src/index.css`. Checkout `C:\cek` yang berisi perubahan agen lain tidak dipakai untuk menulis materi.
