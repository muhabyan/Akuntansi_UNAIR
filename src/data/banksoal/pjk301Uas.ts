import type { BankSoal } from '../../types';

export const PJK301_BANK_UAS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 9: Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 09A: Audit bruto TER dan fasilitas pegawai",
    "context": "Januari 2024 PT Latihan Mandiri memberi pegawai TK/0 gaji Rp10 juta, apartemen individual Rp4 juta, makan bersama semua pegawai Rp1 juta, dan laptop kerja Rp15 juta. Auditor menemukan potongan Rp1,2 juta dari mengalikan 4% atas seluruh Rp30 juta. Rujukan: PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23; PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen.",
    "data": [
      "TER A bruto Rp12 juta adalah 4%; apartemen individual dikecualikan sampai Rp2 juta/bulan.",
      "Laptop menunjang pekerjaan; makanan disediakan di tempat kerja bagi semua pegawai."
    ],
    "instructions": [
      "Klasifikasikan setiap imbalan dan hitung bruto objek serta PPh 21.",
      "Bandingkan dengan potongan auditor dan hitung koreksi.",
      "Sebutkan bukti yang diperlukan untuk tiap pengecualian."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Gaji objek Rp10 juta. Apartemen objek Rp4 juta - Rp2 juta = Rp2 juta. Makan bersama serta laptop kerja dikecualikan. Bruto objek Rp12 juta; PPh = 4% × Rp12 juta = Rp480.000. Potongan auditor Rp1.200.000 berlebih Rp720.000. Kekeliruan terjadi karena fasilitas dikecualikan ikut bruto. Simpan daftar penerima, dokumen fasilitas, nilai biaya apartemen, dan bukti penggunaan laptop untuk pekerjaan. Seluruh hasil rupiah bulat; batas bulanan diuji sebelum memilih TER. Rujukan: PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23; PMK 66/2023, halaman PDF 16-17, Pasal 22; halaman PDF 21-23, Lampiran A angka 1-10; halaman PDF 49, contoh fasilitas apartemen."
  },
  {
    "type": "calculation",
    "scope": "TM 9: Konsep PPh 21/26, TER, dan Natura",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 09B: Gross-up, SPLN, dan kalender pemotongan",
    "context": "Masa Mei 2025, perusahaan menjanjikan pegawai TK/0 gaji bersih Rp10 juta setelah PPh 21 saja. Tenaga ahli OP SPLN juga menerima honor bruto Rp250 juta tanpa P3B. Tidak ada insentif, relaksasi, atau hari libur pada tanggal tenggat dalam asumsi kalender soal. Rujukan: PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23; PMK 168/2023, halaman PDF 15, Pasal 14 ayat (1)-(3); PMK 81/2024, halaman PDF 78-79 dan 138-139, Pasal 94 ayat (2) dan Pasal 171.",
    "data": [
      "TER A 2% sampai bruto Rp10.050.000; 2,25% di atas itu sampai Rp10.350.000.",
      "Tunjangan pajak menjadi penghasilan; SPLN tetap SPLN."
    ],
    "instructions": [
      "Hitung bruto dan tunjangan pajak dengan pengujian ulang lapisan TER.",
      "Hitung potongan SPLN dan jumlah pajak kedua penerima.",
      "Tentukan tenggat setor dan lapor masa Mei serta bukti yang harus diberikan."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Gross-up berarti pemberi kerja memberi tunjangan pajak agar neto target tercapai. Uji 2% memberi Rp10.204.081,63 sehingga keluar lapisan. Bruto pada 2,25% = Rp10 juta/0,9775 = Rp10.230.179,03; dalam lapisan. Untuk simulasi, bulatkan bruto Rp10.230.179 dan potongan Rp230.179, sehingga neto Rp10 juta. PPh 26 = 20% × Rp250 juta = Rp50 juta final. Total Rp50.230.179. Setor paling lambat 15 Juni 2025, lapor 20 Juni 2025 menurut administrasi 2025. Terbitkan bukti potong dan simpan kertas kerja; syarat P3B perlu dokumen sebelum menurunkan tarif. Data TER bersumber tabel yang berlaku sejak 2024 dan tetap dipakai pada kasus 2025 tanpa fasilitas khusus. Rujukan: PP 58/2023, Lampiran A tabel TER kategori A; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9-10 dan 23; PMK 168/2023, halaman PDF 15, Pasal 14 ayat (1)-(3); PMK 81/2024, halaman PDF 78-79 dan 138-139, Pasal 94 ayat (2) dan Pasal 171."
  },
  {
    "type": "calculation",
    "scope": "TM 10: Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 10A: Pegawai masuk September dan pengembalian TER",
    "context": "Tuan B merupakan SPDN sejak awal 2024, baru bekerja September pada satu pemberi kerja, TK/0. Ia menerima Rp15,5 juta per bulan selama September-Desember dan membayar iuran pensiun sah Rp100.000 per bulan. TER A bruto ini 7%. Rujukan: PMK 168/2023, halaman PDF 15-16 dan 21, Pasal 15 ayat (1)-(3) dan Pasal 21 ayat (1)-(2); PMK 168/2023, halaman PDF 35-36, Lampiran Bagian Kedua I.2.1.1.",
    "data": [
      "Bruto empat bulan Rp62 juta; potongan September-November masing-masing Rp1.085.000.",
      "Batas biaya jabatan Rp500.000/bulan; PTKP Rp54 juta."
    ],
    "instructions": [
      "Hitung PKP, PPh empat bulan, serta selisih pada masa terakhir.",
      "Jelaskan apakah penghasilan perlu disetahunkan.",
      "Hitung pajak neto pada bukti potong dan tenggat pengembalian kelebihan."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Neto = Rp62 juta - min(5% × Rp62 juta, 4 × Rp500.000) - 4 × Rp100.000 = Rp59,6 juta. PKP = Rp59,6 juta - Rp54 juta = Rp5,6 juta, ribuan penuh. PPh = 5% × Rp5,6 juta = Rp280.000. Pajak terdahulu Rp3.255.000. Selisih Desember Rp280.000 - Rp3.255.000 = minus Rp2.975.000. Kelebihan dikembalikan beserta bukti potong paling lambat akhir Januari 2025. Penghasilan tidak disetahunkan karena kewajiban subjektif sudah ada sejak Januari. Bukti potong neto Rp280.000, bukan Rp3.255.000. Hasil rupiah bulat; contoh mengikuti Lampiran PMK 168/2023. Rujukan: PMK 168/2023, halaman PDF 15-16 dan 21, Pasal 15 ayat (1)-(3) dan Pasal 21 ayat (1)-(2); PMK 168/2023, halaman PDF 35-36, Lampiran Bagian Kedua I.2.1.1."
  },
  {
    "type": "calculation",
    "scope": "TM 10: Penghitungan PPh 21/26 Berbagai Penerima",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 10B: Empat penerima, empat dasar pemotongan",
    "context": "Pada 2024 perusahaan membayar tenaga ahli SPDN Rp200 juta, upah mingguan Rp3 juta untuk enam hari, hadiah peserta kegiatan Rp80 juta, dan pesangon sekaligus Rp600 juta kepada empat orang berbeda. Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16; PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18; PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga).",
    "data": [
      "Honor seluruhnya jasa tenaga ahli; upah tidak dibayar bulanan.",
      "Pesangon dibayar seluruhnya pada tahun kalender pertama; penerima SPDN."
    ],
    "instructions": [
      "Hitung pajak tiap penerima dan jumlah potongan.",
      "Pisahkan final dan nonfinal.",
      "Uji usulan staf memakai 5% atas seluruh pembayaran dan terangkan dua kesalahannya."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Tenaga ahli: dasar 50% × Rp200 juta = Rp100 juta, pajak 5% × Rp60 juta + 15% × Rp40 juta = Rp9 juta nonfinal. Upah: Rp3 juta/6 = Rp500.000/hari, 0,5% × Rp500.000 × 6 = Rp15.000 nonfinal. Kegiatan: 5% × Rp60 juta + 15% × Rp20 juta = Rp6 juta nonfinal. Pesangon: 0% × Rp50 juta + 5% × Rp50 juta + 15% × Rp400 juta + 25% × Rp100 juta = Rp87,5 juta final. Total Rp102.515.000; nonfinal Rp15.015.000 dan final Rp87.500.000. Staf salah menyamakan dasar dan mengabaikan lapisan serta sifat final. Tarif dikalikan rupiah, satuan harian dikalikan jumlah hari; seluruh nilai bulat. Rujukan: PMK 168/2023, halaman PDF 13-17, Pasal 12 ayat (2)-(9) dan Pasal 16; PP 58/2023, Pasal 2 dan Lampiran B; bahan sosialisasi DJP PMK 168/2023, halaman PDF 9 dan 18; PP 68/2009, Pasal 2, 4-6 (paragraf tarif pesangon, pensiun sekaligus, dan pembayaran tahun ketiga)."
  },
  {
    "type": "calculation",
    "scope": "TM 11: PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 11A: Rekonsiliasi badan, 31E, dan Pasal 29",
    "context": "Tahun Pajak 2024 PT Latihan Fiskal menggunakan rezim umum. Laba sebelum pajak Rp2,5 miliar sudah mencakup semua pos berikut. Peredaran bruto total untuk pengujian 31E ditetapkan Rp20 miliar, termasuk penghasilan yang dipisahkan. Rujukan: UU PPh Pasal 4, 6, 9 dan 31E; slide dosen PPh orang pribadi, halaman PDF 48 dan 51; UU HPP, halaman PDF 38-49; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar); UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar); UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh.",
    "data": [
      "Jamuan tanpa bukti sah Rp40 juta dan denda pajak Rp15 juta.",
      "Penyusutan komersial Rp300 juta, fiskal sah Rp360 juta.",
      "Bunga deposito final Rp50 juta, dividen badan DN nonobjek Rp80 juta.",
      "Kredit PPh 22 Rp25 juta, PPh 23 Rp35 juta, PPh 25 Rp180 juta; pajak final deposito Rp10 juta."
    ],
    "instructions": [
      "Susun kertas kerja koreksi positif dan negatif serta PKP.",
      "Hitung PPh dengan fasilitas 31E dan kurang/lebih bayar.",
      "Jelaskan mengapa dividen dan pajak final dipisahkan; usulkan dokumen audit."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Koreksi positif Rp40 juta + Rp15 juta = Rp55 juta. Negatif Rp60 juta selisih penyusutan + Rp50 juta bunga + Rp80 juta dividen = Rp190 juta. PKP Rp2,5 miliar + Rp55 juta - Rp190 juta = Rp2.365.000.000, ribuan penuh. PKP fasilitas = 4,8/20 × Rp2,365 miliar = Rp567,6 juta; pajak 11% Rp62,436 juta. Sisa Rp1.797,4 juta × 22% = Rp395,428 juta. Total Rp457.864.000. Kredit reguler Rp240 juta, PPh 29 Rp217.864.000. Pajak final Rp10 juta tidak menjadi kredit reguler. Dividen domestik badan DN tidak memerlukan syarat kepemilikan 25% lama untuk pengecualian ini. Periksa bukti beban, daftar aset fiskal, bukti dividen, dan bukti potong. Semua rupiah bulat. Rujukan: UU PPh Pasal 4, 6, 9 dan 31E; slide dosen PPh orang pribadi, halaman PDF 48 dan 51; UU HPP, halaman PDF 38-49; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar); UU PPh Pasal 31E ayat (1) (paragraf pengurangan tarif atas bagian peredaran bruto Rp4,8 miliar); UU HPP, halaman PDF 56-57, Pasal 17; UU PPh Pasal 28 ayat (1), 28A dan 29 (paragraf kredit reguler, lebih bayar, dan kurang bayar); UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh."
  },
  {
    "type": "calculation",
    "scope": "TM 11: PPh Orang Pribadi dan Rekonsiliasi Fiskal Badan",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 11B: NPPN, pembukuan, rugi, dan kesalahan PKP",
    "context": "Bandingkan dua OP pada Tahun Pajak 2024. OP A K/1 memakai NPPN secara sah: bruto Rp900 juta dan norma terverifikasi dalam kasus 40%. OP B K/0 dengan pembukuan: neto fiskal Rp500 juta dan rugi sah yang masih berlaku Rp100 juta. Rujukan: UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57; UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh.",
    "data": [
      "Kredit reguler A Rp30 juta; B Rp40 juta. Tidak ada penghasilan atau pengurang lain.",
      "Norma 40% merupakan data untuk jenis usaha dan wilayah kasus, tidak universal."
    ],
    "instructions": [
      "Hitung PKP, pajak per lapisan, dan kurang bayar tiap OP.",
      "Jelaskan pengurang yang membedakan NPPN dan pembukuan.",
      "Uji alternatif staf mengurangi rugi langsung dari pajak B."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "A: neto 40% × Rp900 juta = Rp360 juta; PTKP K/1 Rp63 juta; PKP Rp297 juta. Pajak Rp3 juta + Rp28,5 juta + 25% × Rp47 juta = Rp43.250.000. Kurang bayar Rp13.250.000. B: neto setelah rugi Rp400 juta; PTKP K/0 Rp58,5 juta; PKP Rp341,5 juta. Pajak Rp3 juta + Rp28,5 juta + 25% × Rp91,5 juta = Rp54.375.000. Kurang bayar Rp14.375.000. NPPN menghasilkan neto dari norma, sehingga beban usaha aktual tidak dikurangkan ulang; rugi pembukuan yang sah dikompensasikan sebelum PTKP. Usulan mengurangi pajak B Rp100 juta keliru karena rugi mengurangi penghasilan. PKP ribuan penuh dan hasil rupiah bulat. Rujukan: UU PPh Pasal 6, 7, 14 dan 17; slide dosen PPh orang pribadi, halaman PDF 21, 23, 48 dan 51; UU HPP, halaman PDF 56-57; UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh."
  },
  {
    "type": "calculation",
    "scope": "TM 12: Dasar PPN, PKP, Objek, dan Tarif",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 12A: Tarif lintas tahun dan harga termasuk pajak",
    "context": "PKP menyerahkan BKP nonmewah biasa dengan harga sebelum PPN Rp200 juta pada September 2024 dan Maret 2025. Faktur lain Maret 2025 senilai Rp222 juta sudah termasuk PPN. Semua transaksi tanpa fasilitas atau skema khusus. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN.",
    "data": [
      "Tarif 2024 11%; sejak 2025 tarif formal 12% dengan nilai lain 11/12 untuk transaksi kasus.",
      "Harga termasuk pajak tidak mencakup PPnBM."
    ],
    "instructions": [
      "Hitung DPP dan PPN kedua transaksi lintas tahun.",
      "Pisahkan harga jual dan DPP nilai lain pada faktur 2025.",
      "Uraikan harga sebelum pajak faktur Rp222 juta dan koreksi usulan membaginya dengan 1,12."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "2024: DPP harga jual Rp200 juta, PPN 11% = Rp22 juta. Maret 2025: harga Rp200 juta, DPP nilai lain 11/12 × Rp200 juta = Rp183.333.333,3333, PPN 12% = Rp22 juta. Total faktur masing-masing Rp222 juta. Faktur inklusif: harga = Rp222 juta/1,11 = Rp200 juta, DPP nilai lain Rp183.333.333,3333, PPN Rp22 juta. Pembagi 1,12 mengabaikan nilai lain. Jangan membulatkan pecahan antara sebelum mengalikan tarif; hasil akhir rupiah bulat. Persamaan efektif 11% tidak mengganti tarif formal. Untuk barang mewah atau DPP khusus, tentukan dasar berbeda dari sumbernya. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN."
  },
  {
    "type": "calculation",
    "scope": "TM 12: Dasar PPN, PKP, Objek, dan Tarif",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 12B: Impor, penjualan domestik, ekspor, dan kredit",
    "context": "April 2025 PKP mengimpor bahan nonmewah biasa dengan CIF Rp500 juta serta bea masuk Rp50 juta. Perusahaan menjual domestik Rp800 juta sebelum PPN dan mengekspor BKP berwujud Rp300 juta. Tidak ada fasilitas atau skema khusus. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN; UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
    "data": [
      "Pungutan kepabeanan lain nihil; PPN impor dibayar dengan dokumen sah dan terkait usaha.",
      "PM domestik tambahan Rp11 juta sah; tanpa kompensasi masa sebelumnya."
    ],
    "instructions": [
      "Hitung nilai impor dan PPN impor.",
      "Hitung PK domestik serta ekspor.",
      "Hitung saldo masa dan jelaskan status PM impor serta bukti pendukung."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Nilai impor Rp550 juta. PPN impor = 12% × 11/12 × Rp550 juta = Rp60.500.000. PK domestik = 12% × 11/12 × Rp800 juta = Rp88.000.000. Ekspor BKP berwujud tarif 0% memberi PK Rp0. Kredit PM = Rp60,5 juta + Rp11 juta = Rp71,5 juta. Setoran sendiri Rp88 juta - Rp71,5 juta = Rp16.500.000. Dokumen impor, bukti pembayaran PPN impor, faktur domestik dan bukti ekspor perlu cocok; PPh 22 tidak ditambahkan pada PM PPN. Pertahankan pecahan DPP hingga akhir, satuan rupiah, hasil bulat. Rujukan: UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; PMK 131/2024, Pasal 2-6 (paragraf BKP mewah, nilai lain 11/12, pengecualian skema khusus, dan mulai berlaku); UU PPN Pasal 1 angka 17-20 (paragraf DPP, harga jual, penggantian, dan nilai impor); UU HPP, halaman PDF 63-69, Pasal 7 UU PPN; UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
  },
  {
    "type": "calculation",
    "scope": "TM 13: PPnBM, Saat Terutang, Faktur, dan Retur",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 13A: Rantai barang mewah dan retur lintas masa",
    "context": "Pada Maret 2025 produsen menjual BKP mewah yang telah diklasifikasi dengan PPnBM 20% kepada distributor, harga sebelum pajak Rp500 juta. April distributor menjual kembali barang sejenis Rp700 juta sebelum pajak. Pada Mei distributor mengembalikan sebagian pembelian Maret senilai Rp50 juta DPP harga asal dengan nota retur sah. Rujukan: UU PPN Pasal 5, 8 dan 10 (paragraf satu kali pengenaan, tarif, serta larangan pengkreditan PPnBM); PMK 131/2024 Pasal 2 dan 5; UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP); UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material).",
    "data": [
      "PPN 12% atas harga penuh, tanpa transisi eceran Januari dan tanpa insentif.",
      "Retur Mei merujuk faktur produsen Maret; semua pihak PKP."
    ],
    "instructions": [
      "Hitung PPN, PPnBM, dan tagihan produsen.",
      "Hitung pajak keluaran penjualan distributor dan jelaskan PPnBM pembelian.",
      "Hitung pengurangan PPN serta PPnBM produsen pada masa Mei dan rekonsiliasi dokumen."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Produsen Maret: PPN 12% × Rp500 juta = Rp60 juta; PPnBM 20% × Rp500 juta = Rp100 juta; tagihan Rp660 juta. Distributor April: PPN 12% × Rp700 juta = Rp84 juta, PPnBM tahap jual kembali Rp0. PPnBM tidak dikreditkan sebagai PM PPN; biaya barang mengikuti pembukuan. Retur Mei: pengurangan PK produsen 12% × Rp50 juta = Rp6 juta; PPnBM 20% × Rp50 juta = Rp10 juta. Distributor menyesuaikan PM terkait retur Rp6 juta serta pembukuannya. Jangan memindahkan retur ke Maret hanya karena faktur asal Maret. Hasil rupiah bulat; tarif PPnBM 20% adalah asumsi klasifikasi kasus, perlu dokumen produk. Rujukan: UU PPN Pasal 5, 8 dan 10 (paragraf satu kali pengenaan, tarif, serta larangan pengkreditan PPnBM); PMK 131/2024 Pasal 2 dan 5; UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP); UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material)."
  },
  {
    "type": "calculation",
    "scope": "TM 13: PPnBM, Saat Terutang, Faktur, dan Retur",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 13B: Uang muka, kurs pajak, dan faktur bermasalah",
    "context": "Agustus 2024 PKP menerima uang muka Rp30 juta untuk BKP harga penuh Rp100 juta; penyerahan dan pembayaran sisa terjadi September. Terpisah, JKP September ditagih USD10.000, kurs KMK Rp15.000/USD dan kurs bank Rp16.000/USD. Faktur transaksi BKP DPP Rp100 juta dibuat terlambat sehingga dikenai STP Pasal 14 ayat (4). Rujukan: UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material); PP 44/2022, Pasal 21 (paragraf konversi valuta asing dengan kurs Menteri Keuangan); UU HPP, halaman PDF 14-16, perubahan Pasal 14 ayat (1) huruf d-e dan ayat (4) UU KUP; UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP).",
    "data": [
      "Tarif PPN 2024 11%; denda kasus faktur 1% dari DPP, tanpa sanksi lain.",
      "November ada pembatalan sah JKP lain Rp10 juta sebelum PPN yang telah difakturkan."
    ],
    "instructions": [
      "Susun masa dan PPN uang muka serta sisa.",
      "Hitung DPP rupiah dan PPN JKP valas.",
      "Hitung denda faktur serta pengurangan PK pembatalan; bedakan pemicunya."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Uang muka Agustus Rp30 juta × 11% = Rp3,3 juta. Sisa September Rp70 juta × 11% = Rp7,7 juta; total Rp11 juta tanpa pungutan ganda. JKP valas: USD10.000 × Rp15.000/USD = Rp150 juta, PPN Rp16,5 juta. Kurs bank tidak menggantikan kurs KMK saat faktur seharusnya dibuat. Denda faktur = 1% × Rp100 juta = Rp1 juta, di luar pokok PPN. Pembatalan JKP November mengurangi PK 11% × Rp10 juta = Rp1,1 juta dengan dokumen sah. Pemicu denda dan pembatalan berbeda; pembatalan transaksi lain tidak menghapus denda faktur. Satuan USD habis saat konversi, hasil rupiah bulat. Rujukan: UU PPN Pasal 11 dan 13 ayat (1a), (5), (9) (paragraf saat terutang, pembuatan faktur, syarat formal dan material); PP 44/2022, Pasal 21 (paragraf konversi valuta asing dengan kurs Menteri Keuangan); UU HPP, halaman PDF 14-16, perubahan Pasal 14 ayat (1) huruf d-e dan ayat (4) UU KUP; UU PPN Pasal 5A ayat (1)-(2) (paragraf retur BKP dan pembatalan JKP)."
  },
  {
    "type": "calculation",
    "scope": "TM 14: Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 14A: PM langsung, bersama, dan penghitungan kembali",
    "context": "Tahun 2024 PKP memiliki PM langsung Rp11 juta untuk penyerahan kena pajak dan PM langsung Rp5 juta untuk penyerahan dibebaskan. Mesin untuk kegiatan bersama diperoleh dengan PM Rp44 juta, tidak dapat dipisahkan dari pembukuan. Porsi perkiraan penyerahan yang mendukung kredit 80%, realisasi 2024 70%. Rujukan: PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian); UU PPN Pasal 16B ayat (2)-(3) (paragraf Pajak Masukan untuk PPN tidak dipungut dan PPN dibebaskan); UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
    "data": [
      "Masa manfaat mesin menurut pedoman empat tahun; semua faktur sah.",
      "PPN langsung dibebaskan tidak dapat dikreditkan; mesin dicatat terpisah dalam daftar PM bersama."
    ],
    "instructions": [
      "Hitung kredit PM awal 2024.",
      "Hitung penghitungan kembali dan penyesuaian yang paling lambat dilaporkan Maret 2025.",
      "Jelaskan dampak jika penyerahan berfasilitas memperoleh tidak dipungut, serta bukti yang harus dipisahkan."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Kredit langsung Rp11 juta; PM terkait dibebaskan Rp5 juta tidak dikreditkan. Kredit mesin awal P = 80% × Rp44 juta = Rp35,2 juta. Total kredit awal Rp46,2 juta. Alokasi P/T = Rp8,8 juta; P′ = Rp44 juta/4 × 70% = Rp7,7 juta. Penyesuaian = Rp7,7 juta - Rp8,8 juta = minus Rp1,1 juta, pengurang PM paling lambat masa Maret 2025. Kredit awal mesin tidak seluruhnya dibalik Rp4,4 juta sekaligus. Fasilitas tidak dipungut memungkinkan PM langsung Rp5 juta dikreditkan bila sah; perubahan proporsi bersama perlu dihitung ulang dari data penyerahan yang sesuai. Pisahkan bukti fasilitas, PM langsung, PM bersama, dan daftar penggunaan aset. Rupiah bulat. Rujukan: PMK 186/2022, halaman PDF 3-6, Pasal 3-8 dan Lampiran (paragraf identifikasi, perkiraan, realisasi, dan penyesuaian); UU PPN Pasal 16B ayat (2)-(3) (paragraf Pajak Masukan untuk PPN tidak dipungut dan PPN dibebaskan); UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
  },
  {
    "type": "calculation",
    "scope": "TM 14: Pengkreditan PM, Restitusi, Pemungut, dan Fasilitas",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 14B: Pemungut, saldo lebih bayar, dan permohonan",
    "context": "Masa Oktober 2024 PKP menjual kepada swasta dengan DPP Rp100 juta serta pemerintah pemungut dengan DPP Rp200 juta. PPN 11% pemerintah sudah dipungut dan disetor. PM sah Rp16,5 juta; tidak ada kompensasi. Terpisah, eksportir pada November mempunyai PK Rp0 dan PM sah Rp55 juta. Rujukan: UU PPN Pasal 16A ayat (1)-(2) (paragraf pemungutan dan penyetoran oleh pemungut PPN); UU HPP, halaman PDF 69-71, Pasal 9 ayat (4)-(4f) UU PPN; UU KUP Pasal 17B ayat (1), 17C dan 17D; UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c).",
    "data": [
      "Bukti pungut pemerintah lengkap; PM usaha dan seluruh syarat faktur sah.",
      "Eksportir ingin restitusi per masa, tetapi status untuk pengembalian pendahuluan belum diketahui."
    ],
    "instructions": [
      "Hitung PK total serta saldo yang diperhitungkan sendiri dan cegah setor ganda.",
      "Tentukan apakah eksportir boleh mengajukan per masa dan apakah pencairan otomatis.",
      "Bedakan jalur pemeriksaan dan pengembalian pendahuluan serta informasi yang masih perlu diperoleh."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "PK swasta Rp11 juta; pemerintah Rp22 juta; total Rp33 juta. Kurangi bagian dipungut pemerintah Rp22 juta dan PM Rp16,5 juta: minus Rp5,5 juta lebih bayar untuk posisi sendiri. Rekonsiliasi faktur dan bukti pungut; jangan menyetor kembali Rp22 juta. Eksportir lebih bayar Rp55 juta dan dapat mengajukan per masa menurut Pasal 9 ayat (4b). Jalur pemeriksaan Pasal 17B umumnya keputusan paling lama 12 bulan sejak permohonan lengkap; jalur pendahuluan 17C/17D mempunyai syarat tersendiri. Status risiko, kelengkapan permohonan, dan kriteria WP harus diperoleh sebelum menjanjikan jalur atau tanggal cair. Hak mengajukan tidak menjamin pencairan otomatis. Hasil rupiah bulat. Rujukan: UU PPN Pasal 16A ayat (1)-(2) (paragraf pemungutan dan penyetoran oleh pemungut PPN); UU HPP, halaman PDF 69-71, Pasal 9 ayat (4)-(4f) UU PPN; UU KUP Pasal 17B ayat (1), 17C dan 17D; UU HPP, halaman PDF 69-76, Pasal 9 UU PPN ayat (2)-(9c)."
  },
  {
    "type": "calculation",
    "scope": "TM 15: Pajak Karbon dan Analisis Perdagangan Karbon",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 15A: Simulasi cap, sertifikat, dan tarif per kilogram",
    "context": "Simulasi Tahun Pajak 2024 untuk pembelajaran: emisi terukur 90.000 ton CO2e, batas yang diasumsikan 80.000 ton, sertifikat valid 6.000 ton diakui penuh. Tarif simulasi Rp30/kg. Perusahaan mengusulkan membeli lagi sertifikat 2.000 ton seharga Rp70 juta; diasumsikan diakui penuh dan tidak dihitung ganda. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3).",
    "data": [
      "DPP simulasi = max(0, emisi - batas - unit diakui); 1 ton = 1.000 kg.",
      "Tidak ada biaya transaksi atau manfaat selain penurunan pajak simulasi."
    ],
    "instructions": [
      "Hitung pajak sebelum dan sesudah pembelian tambahan.",
      "Hitung penghematan pajak dan manfaat bersih pembelian sertifikat.",
      "Jelaskan batas antara asumsi pengakuan dalam soal dan kewajiban aktual."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Sisa awal 90.000 - 80.000 - 6.000 = 4.000 ton = 4.000.000 kg. Pajak Rp30/kg × 4.000.000 kg = Rp120 juta. Setelah tambahan sertifikat: sisa 2.000 ton = 2.000.000 kg, pajak Rp60 juta. Penghematan Rp60 juta; kurangi harga sertifikat Rp70 juta memberi manfaat bersih minus Rp10 juta. Dari manfaat pajak saja pembelian tidak ekonomis. Nilai sertifikat dalam rupiah tidak langsung dikreditkan ke pajak; satuan emisi yang diakui mengubah DPP simulasi. Pasal 13 ayat (10), (13)-(15) memerlukan penetapan dan pengakuan nyata. Jangan mengubah simulasi menjadi klaim tagihan operasional 2024. Satuan konsisten dan hasil rupiah bulat. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3)."
  },
  {
    "type": "calculation",
    "scope": "TM 15: Pajak Karbon dan Analisis Perdagangan Karbon",
    "difficulty": "Komprehensif",
    "estimatedTime": "30-40 menit",
    "question": "Kasus 15B: Analisis tarif, proyek pengurangan, dan perdagangan unit",
    "context": "Simulasi Tahun Pajak 2024: harga pasar karbon Rp50/kg CO2e. Untuk latihan diasumsikan tarif ditetapkan Rp50/kg dan emisi kena pajak awal 3.000 ton. Proyek menurunkan emisi yang diakui 2.000 ton per tahun dengan biaya tahunan Rp45 juta. Perusahaan juga menjual unit karbon senilai Rp2 miliar; biaya sah Rp1,5 miliar, rezim PPh badan umum, total peredaran bruto seluruh usaha Rp60 miliar sehingga tanpa 31E, serta tanpa fasilitas lain dalam asumsi analisis. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3); UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh.",
    "data": [
      "Pisahkan simulasi emisi dari transaksi penjualan unit; informasi klasifikasi unit dan fasilitas PPN belum diberikan.",
      "Laba penjualan unit diasumsikan seluruhnya penghasilan reguler; tarif badan kasus 22%."
    ],
    "instructions": [
      "Uji dasar batas minimum tarif dan hitung pajak emisi sebelum/sesudah proyek.",
      "Hitung manfaat bersih proyek dan PPh atas laba perdagangan sesuai asumsi.",
      "Sebutkan informasi yang masih diperlukan untuk menilai PPN perdagangan unit dan kewajiban karbon aktual."
    ],
    "outputFormat": [
      "Tabel dasar aturan, klasifikasi, dasar hitung, tarif, dan hasil per tahap.",
      "Penjelasan asumsi, tahun pajak, satuan, pembulatan, serta dokumen yang diperlukan."
    ],
    "rubric": [
      "Dasar aturan, tahun, dan klasifikasi tepat (25%).",
      "Langkah hitung, satuan, tarif, serta pembulatan tepat (45%).",
      "Analisis kesalahan, bukti pendukung, dan simpulan bernalar (30%)."
    ],
    "answerGuide": "Harga pasar Rp50/kg membuat batas minimum UU Rp50/kg; nilai tepat Rp50/kg pada kasus merupakan asumsi penetapan. Pajak emisi awal 3.000 × 1.000 × Rp50 = Rp150 juta; setelah proyek 1.000 × 1.000 × Rp50 = Rp50 juta. Penghematan Rp100 juta, manfaat bersih Rp100 juta - Rp45 juta = Rp55 juta/tahun. Laba perdagangan menurut asumsi = Rp2 miliar - Rp1,5 miliar = Rp500 juta; PPh reguler 22% = Rp110 juta tanpa kredit. Jangan menjumlah pajak emisi dan PPh sebagai satu dasar. PPN belum dapat dipastikan: perlu klasifikasi barang/jasa atau hak unit, identitas pihak/PKP, lokasi, tahun, fasilitas dan aturan pelaksanaan. Periksa bukti emisi, validitas unit serta pengakuan pengurangan sebelum penerapan aktual. PKP ribuan penuh, hasil rupiah bulat; tidak menetapkan tarif universal perdagangan karbon. Rujukan: UU HPP, halaman PDF 95-97, Pasal 13 ayat (5)-(15); halaman PDF 103, Pasal 17 ayat (3); UU PPN Pasal 4 ayat (1), 7 dan 8A; UU HPP, halaman PDF 63-69, perubahan Pasal 4A, 7 dan 9; UU HPP, halaman PDF 56-57, perubahan Pasal 17 ayat (1) dan (4) UU PPh."
  }
];
