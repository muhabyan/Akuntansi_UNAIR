// src/data/banksoal/pjk301.ts
// Bank Soal Esai & Studi Kasus Perpajakan II (PJK301)
import type { BankSoal } from '../../types';

export const PJK301_BANK_UTS: BankSoal[] = [
  {
    type: 'calculation',
    scope: 'TM 1: PPh Orang Pribadi, biaya 3M, dan pengurang sah',
    difficulty: 'Menengah',
    estimatedTime: '25 menit',
    question: 'Studi Kasus 1: PPh tahunan Tuan F',
    context: 'Tuan F berstatus K/2 dan menjalankan kantor konsultan hukum dengan pembukuan pada Tahun Pajak 2025. Ia memiliki peredaran bruto Rp1.200.000.000, biaya operasional 3M sah Rp700.000.000, zakat profesi Rp15.000.000 melalui LAZ resmi dengan bukti setor, dan kompensasi rugi fiskal 2024 Rp20.000.000.',
    data: ['Peredaran bruto Rp1.200.000.000; biaya 3M Rp700.000.000.', 'Zakat sah Rp15.000.000; kompensasi rugi Rp20.000.000.', 'Status K/2; gunakan PTKP dan lapisan tarif OP UU HPP pada TM01.'],
    instructions: ['Hitung penghasilan neto sebelum dan sesudah zakat serta kompensasi rugi.', 'Tentukan PTKP dan PKP Tuan F.', 'Hitung PPh terutang tiap lapisan dan totalnya; jelaskan dasar pengurangan biaya serta zakat.'],
    outputFormat: ['Urutan penghitungan neto, PKP, dan PPh terutang.', 'Penjelasan singkat Pasal 6, PMK 114/2025, PTKP, dan Pasal 17.'],
    rubric: ['Biaya 3M, zakat sah, dan rugi fiskal ditempatkan pada urutan yang tepat.', 'PTKP K/2 dan tarif progresif diterapkan pada lapisan yang benar.', 'Jawaban akhir disertai alasan fiskal.'],
    answerGuide: 'Penghasilan neto = Rp1.200.000.000 − Rp700.000.000 = Rp500.000.000. Biaya operasional 3M dapat dikurangkan menurut Pasal 6. Zakat melalui LAZ resmi dengan bukti setor dapat dikurangkan penuh karena tidak menimbulkan rugi: Rp500.000.000 − Rp15.000.000 = Rp485.000.000. Setelah kompensasi rugi Rp20.000.000, neto menjadi Rp465.000.000. PTKP K/2 = Rp54.000.000 + Rp4.500.000 + Rp9.000.000 = Rp67.500.000. PKP = Rp397.500.000. PPh lapis pertama 5% × Rp60.000.000 = Rp3.000.000; lapis kedua 15% × Rp190.000.000 = Rp28.500.000; lapis ketiga 25% × Rp147.500.000 = Rp36.875.000. Total PPh orang pribadi terutang = Rp68.375.000.',
  },
  {
    type: 'calculation',
    scope: 'TM 2: Penilaian persediaan fiskal',
    difficulty: 'Menengah',
    estimatedTime: '30 menit',
    question: 'Studi Kasus 2: FIFO dan rata-rata tertimbang',
    context: 'Perusahaan dagang pada studi kasus TM02 memiliki barang tersedia untuk dijual sebanyak 4.800 unit dengan biaya Rp22.850.000. Mutasi terdiri atas saldo awal 1.000 unit @ Rp4.000, pembelian 1.500 unit @ Rp5.000, pembelian 1.000 unit @ Rp5.500, dan pembelian 1.300 unit @ Rp4.500. Sepanjang Januari 2026 terjual 2.950 unit, sehingga persediaan akhir 1.850 unit.',
    data: ['Barang tersedia 4.800 unit, biaya Rp22.850.000; terjual 2.950 unit.', 'Lapisan harga pokok: 1.000 unit @ Rp4.000; 1.500 unit @ Rp5.000; 1.000 unit @ Rp5.500; 1.300 unit @ Rp4.500.', 'Sisa persediaan 1.850 unit.'],
    instructions: ['Hitung HPP dan persediaan akhir dengan FIFO.', 'Hitung biaya rata-rata tertimbang, HPP, dan persediaan akhir dengan Average.', 'Terangkan metode yang diizinkan Pasal 10 ayat (6) dan perlakuan jika pembukuan komersial memakai LIFO.'],
    outputFormat: ['Skedul alokasi unit dan biaya untuk kedua metode.', 'Rekonsiliasi jumlah HPP dan persediaan akhir terhadap biaya barang tersedia.'],
    rubric: ['Lapisan FIFO dan unit sisa benar.', 'Rata-rata tertimbang diterapkan pada seluruh barang tersedia.', 'Status LIFO dan konsekuensi rekonsiliasi jelas.'],
    answerGuide: 'FIFO: HPP = 1.000 × Rp4.000 + 1.500 × Rp5.000 + 450 × Rp5.500 = Rp13.975.000. Persediaan akhir = 550 × Rp5.500 + 1.300 × Rp4.500 = Rp8.875.000. Average: biaya rata-rata = Rp22.850.000 / 4.800 = Rp4.760,4167 per unit; HPP 2.950 unit = Rp14.043.229,17 dan persediaan akhir 1.850 unit = Rp8.806.770,83. Pada masing-masing metode, HPP ditambah persediaan akhir = Rp22.850.000. Pasal 10 ayat (6) mengizinkan FIFO dan Average secara taat asas. LIFO tidak diizinkan fiskal; jika digunakan komersial, HPP dan persediaan akhir harus direkonsiliasi ke metode fiskal yang sah.',
  },
  {
    type: 'calculation',
    scope: 'TM 3: Hubungan istimewa dan koreksi transfer pricing',
    difficulty: 'Komprehensif',
    estimatedTime: '30 menit',
    question: 'Studi Kasus 3: CUP dan dividen terselubung',
    context: 'PT Manufaktur Jaya di Indonesia menjual 10.000 unit produk identik kepada induk di Singapura seharga Rp500.000 per unit. Penjualan ke pihak independen yang sebanding menunjukkan harga Rp800.000 per unit. HPP Rp4.000.000.000 dan beban operasional Rp500.000.000. Selisih harga tidak dikembalikan ke kas perseroan; tarif PPh Badan 22% dan tarif P3B untuk dividen terselubung dalam kasus ini 10%.',
    data: ['Unit terjual 10.000; harga afiliasi Rp500.000; harga CUP Rp800.000.', 'HPP Rp4.000.000.000; beban operasional Rp500.000.000.', 'Tarif badan 22%; tarif P3B kasus 10%; selisih tidak dikembalikan.'],
    instructions: ['Hitung penjualan tercatat, penjualan wajar, dan koreksi primer.', 'Hitung laba sebelum koreksi, PKP setelah koreksi, PPh Badan, serta tambahan PPh Badan akibat koreksi.', 'Jelaskan koreksi sekunder dan hitung PPh Pasal 26 sesuai tarif kasus.'],
    outputFormat: ['Perhitungan koreksi primer dan beban PPh Badan.', 'Penjelasan status dividen terselubung serta PPh 26.'],
    rubric: ['CUP dipakai untuk barang identik dengan pembanding independen.', 'Koreksi primer mengubah PKP dan PPh Badan secara tepat.', 'Koreksi sekunder dan pemotongan lintas negara dijelaskan.'],
    answerGuide: 'Penjualan tercatat = 10.000 × Rp500.000 = Rp5.000.000.000; penjualan wajar CUP = 10.000 × Rp800.000 = Rp8.000.000.000. Koreksi primer positif = Rp3.000.000.000. Laba semula = Rp5.000.000.000 − Rp4.000.000.000 − Rp500.000.000 = Rp500.000.000; PKP setelah koreksi = Rp3.500.000.000. PPh Badan setelah koreksi = 22% × Rp3.500.000.000 = Rp770.000.000; tambahan akibat koreksi = 22% × Rp3.000.000.000 = Rp660.000.000. Karena selisih Rp3.000.000.000 tidak disetor kembali, ia menjadi dividen terselubung sebagai koreksi sekunder. PPh 26 pada tarif P3B kasus = 10% × Rp3.000.000.000 = Rp300.000.000.',
  },
  {
    type: 'calculation',
    scope: 'TM 4: Penyusutan fiskal dan rekonsiliasi komersial',
    difficulty: 'Komprehensif',
    estimatedTime: '30 menit',
    question: 'Studi Kasus 4: Awal bulan dan saldo menurun mesin',
    context: 'Perusahaan memperoleh mesin operasional Kelompok 1 pada 25 Juli 2022 seharga Rp100.000.000 dan memilih metode saldo menurun fiskal 50%. Daftar aset menunjukkan nilai buku fiskal akhir 2022 Rp75.000.000. Akuntansi komersial perusahaan memakai estimasi nilai residu dan masa manfaat menurut kebijakan manajemen.',
    data: ['Kelompok 1: masa manfaat 4 tahun, tarif saldo menurun 50%.', 'Tanggal perolehan 25 Juli 2022; harga perolehan Rp100.000.000.', 'Nilai buku fiskal akhir 2022 Rp75.000.000.'],
    instructions: ['Hitung beban fiskal 2022, 2023, 2024, 2025, dan sisa yang disusutkan pada tahun terakhir 2026.', 'Jelaskan mengapa bulan Juli dihitung dan mengapa nilai buku terakhir dihabiskan.', 'Jelaskan arah koreksi fiskal jika beban penyusutan komersial pada suatu tahun lebih besar daripada beban fiskal, serta status nilai residu komersial.'],
    outputFormat: ['Skedul tahun, dasar nilai buku, beban, dan nilai buku akhir.', 'Paragraf rekonsiliasi fiskal komersial.'],
    rubric: ['Prorata bulan pertama dan tarif atas nilai buku awal benar.', 'Sisa buku disusutkan seluruhnya pada akhir masa manfaat.', 'Arah koreksi dan nilai residu fiskal jelas.'],
    answerGuide: 'Juli dihitung satu bulan penuh walaupun diperoleh tanggal 25; Juli–Desember = 6 bulan. Beban 2022 = 6/12 × 50% × Rp100.000.000 = Rp25.000.000; buku akhir Rp75.000.000. Beban 2023 = 50% × Rp75.000.000 = Rp37.500.000; buku akhir Rp37.500.000. Beban 2024 = Rp18.750.000; buku akhir Rp18.750.000. Beban 2025 = Rp9.375.000; buku akhir Rp9.375.000. Pada tahun terakhir 2026, seluruh Rp9.375.000 disusutkan sekaligus hingga buku fiskal Rp0, sesuai Pasal 11 ayat (2). Fiskal tidak mengakui nilai residu komersial. Bila beban komersial suatu tahun lebih besar dari beban yang diizinkan fiskal, selisihnya menjadi koreksi fiskal positif; sebaliknya bila beban fiskal lebih besar, selisihnya menjadi koreksi negatif.',
  },
  {
    type: 'calculation',
    scope: 'TM 5: PPh 22 impor dan PPh 23 atas penghasilan modal',
    difficulty: 'Menengah',
    estimatedTime: '25 menit',
    question: 'Studi Kasus 5: Dua mekanisme pemungutan PT Dynaplast',
    context: 'PT Dynaplast ber-API mengimpor biji plastik dengan CIF US$ 1.200, bea masuk 10%, dan kurs KMK Rp14.500 per US$ 1. Dalam tahun yang sama PT Dynaplast membayar bunga pinjaman Rp20.000.000 kepada PT Mitra Finansial non-bank dan royalti paten Rp100.000.000 kepada PT Polimer Inovasi. Para penerima dalam negeri ber-NPWP.',
    data: ['CIF US$ 1.200; bea masuk 10%; kurs Rp14.500 per US$ 1; API ada.', 'Bunga non-bank Rp20.000.000; royalti Rp100.000.000; penerima ber-NPWP.'],
    instructions: ['Tentukan nilai impor dan PPh 22 impor ber-API serta sifatnya.', 'Hitung PPh 23 atas bunga dan royalti, lalu jumlahkan pemotongannya.', 'Jelaskan siapa memungut PPh 22 dan siapa memotong PPh 23 dalam rangkaian kasus.'],
    outputFormat: ['Perhitungan nilai impor, PPh 22, dan PPh 23.', 'Klasifikasi singkat pemungutan versus pemotongan.'],
    rubric: ['Nilai impor meliputi CIF dan bea masuk.', 'Tarif dan dasar PPh 22/23 diterapkan pada objek yang tepat.', 'Peran pemungut dan pemotong dijelaskan.'],
    answerGuide: 'Bea masuk = 10% × US$ 1.200 = US$ 120; nilai impor = US$ 1.320 × Rp14.500 = Rp19.140.000. PPh 22 impor umum ber-API = 2,5% × Rp19.140.000 = Rp478.500, tidak final, dipungut Bank Devisa/DJBC saat impor. PPh 23 bunga non-bank = 15% × Rp20.000.000 = Rp3.000.000; royalti = 15% × Rp100.000.000 = Rp15.000.000; total potongan Rp18.000.000. PT Dynaplast sebagai pembayar penghasilan memotong PPh 23 dari pembayaran kepada kedua rekanan. Pemungutan PPh 22 impor dan pemotongan PPh 23 merupakan mekanisme yang berbeda.',
  },
  {
    type: 'calculation',
    scope: 'TM 6: PPh final pengalihan hak tanah dan bangunan',
    difficulty: 'Menengah',
    estimatedTime: '25 menit',
    question: 'Studi Kasus 6: Penjualan ruko Tuan Anton',
    context: 'Tuan Anton menjual ruko kepada PT Sinar Terang seharga Rp800.000.000; nilai transaksi sama dengan NJOP. Ruko ini bukan Rumah Sederhana/RSS oleh pengembang. Akta jual beli akan ditandatangani PPAT setelah kewajiban pajak dipenuhi.',
    data: ['Nilai bruto pengalihan Rp800.000.000 dan sama dengan NJOP.', 'Objek adalah pengalihan ruko umum.'],
    instructions: ['Tentukan objek, dasar pengenaan, tarif, dan PPh final terutang.', 'Jelaskan kapan PPh disetor dan syarat bagi PPAT sebelum menandatangani akta.', 'Jelaskan apakah bukti pembayaran PPh final ini dapat menjadi kredit PPh reguler tahunan.'],
    outputFormat: ['Perhitungan PHTB dan uraian alur SSP sampai akta.', 'Kesimpulan sifat finalnya.'],
    rubric: ['Objek dan tarif PHTB umum tepat.', 'Penyetoran serta validasi SSP dijelaskan.', 'Konsekuensi final pada kredit pajak benar.'],
    answerGuide: 'Penjualan ruko adalah PHTB umum, objek PPh final Pasal 4 ayat (2). Dasarnya nilai bruto Rp800.000.000; tarif 2,5% menurut PMK 81/2024 Pasal 192; pajak = Rp20.000.000. Tuan Anton menyetor sendiri sebelum akta ditandatangani. PPAT boleh menandatangani setelah bukti SSP divalidasi keabsahannya oleh sistem DJP; SSP yang divalidasi dianggap sebagai pelaporan SPT Masa PPh Unifikasi. Karena bersifat final, bukti PPh ini tidak dapat dikreditkan terhadap PPh reguler dalam SPT Tahunan.',
  },
  {
    type: 'calculation',
    scope: 'TM 7: Integrasi Pasal 31E, kredit pajak, dan PPh 25',
    difficulty: 'Komprehensif',
    estimatedTime: '35 menit',
    question: 'Studi Kasus 7: Rekonsiliasi pajak PT Cemerlang Abadi',
    context: 'PT Cemerlang Abadi adalah WP badan dalam negeri. Tahun Pajak 2025 omzetnya Rp30.000.000.000 dan PKP Rp3.000.000.000. Kredit yang tersedia: PPh 22 Rp100.000.000, PPh 23 Rp80.000.000, dan PPh 24 cabang luar negeri yang telah dihitung sah Rp120.000.000. Angsuran PPh 25 yang telah dibayar sepanjang 2025 Rp240.000.000.',
    data: ['Omzet Rp30.000.000.000; PKP Rp3.000.000.000.', 'Kredit PPh 22 Rp100.000.000; PPh 23 Rp80.000.000; PPh 24 sah Rp120.000.000.', 'PPh 25 tahun 2025 yang telah dibayar Rp240.000.000.'],
    instructions: ['Tentukan bagian PKP dengan fasilitas Pasal 31E dan bagian tanpa fasilitas; hitung PPh Badan terutang.', 'Kurangi kredit PPh 22, 23, dan 24; hitung PPh Pasal 29 setelah angsuran 2025.', 'Hitung dasar dan angsuran bulanan PPh 25 berikutnya; jelaskan mengapa PPh 25 tahun lalu tidak dikurangkan lagi dalam dasar angsuran.'],
    outputFormat: ['Skedul PKP fasilitas, PKP non-fasilitas, dan PPh terutang.', 'Rekonsiliasi kredit, PPh 29, dan angsuran tahun berikutnya.'],
    rubric: ['Pasal 31E proporsional diterapkan pada omzet dan PKP yang tepat.', 'PPh 24 yang diberikan diperlakukan sebagai kredit sah.', 'PPh 29 dan dasar PPh 25 dibedakan.'],
    answerGuide: 'Karena omzet Rp30.000.000.000 berada di atas Rp4.800.000.000 dan tidak melebihi Rp50 Miliar, fasilitas Pasal 31E bersifat proporsional. PKP fasilitas = Rp4.800.000.000/Rp30.000.000.000 × Rp3.000.000.000 = Rp480.000.000; sisa PKP Rp2.520.000.000. PPh = 11% × Rp480.000.000 + 22% × Rp2.520.000.000 = Rp52.800.000 + Rp554.400.000 = Rp607.200.000. Kredit PPh 22 + 23 + 24 = Rp100.000.000 + Rp80.000.000 + Rp120.000.000 = Rp300.000.000. Dasar angsuran berikutnya = Rp607.200.000 − Rp300.000.000 = Rp307.200.000; angsuran bulanan = Rp307.200.000/12 = Rp25.600.000. PPh Pasal 29 tahun 2025 = Rp307.200.000 − Rp240.000.000 = Rp67.200.000. Setoran PPh 25 tahun lalu adalah kredit pelunasan akhir tahun, sedangkan rumus dasar angsuran berikutnya menurut Pasal 25 mengurangkan kredit PPh 21–24, bukan setoran PPh 25 tahun lalu.',
  },
];

export const PJK301_BANK_UAS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 11: Rekonsiliasi Fiskal & SPT 1771",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Penyusunan Kertas Kerja Rekonsiliasi Fiskal & Perhitungan PPh Badan Terutang",
    "context": "PT Sejahtera Abadi (peredaran bruto tahun 2024 sebesar Rp 20.000.000.000) membukukan laba bersih komersial sebelum pajak sebesar Rp 2.500.000.000. Dalam laporan keuangan komersial terdapat pos-pos berikut:\n1. Beban jamuan makan relasi tanpa daftar nominatif: Rp 40.000.000.\n2. Beban sanksi denda administrasi pajak: Rp 15.000.000.\n3. Beban penyusutan aset tetap komersial Rp 300.000.000 (sedangkan penyusutan menurut aturan fiskal adalah Rp 360.000.000).\n4. Pendapatan bunga deposito (telah dipotong PPh Final 20%): Rp 50.000.000.\n5. Pembagian dividen dari PT Anak (kepemilikan saham 30%): Rp 80.000.000.\n6. Kredit pajak yang telah dipotong pihak lain: PPh 22 Rp 25 jt, PPh 23 Rp 35 jt, angsuran PPh 25 Rp 180 jt.",
    "data": [
      "Peredaran Bruto: Rp 20.000.000.000 (Memperoleh fasilitas Pasal 31E proporsional).",
      "Laba Bersih Komersial Sebelum Pajak: Rp 2.500.000.000.",
      "Kredit Pajak: PPh 22 (25 jt) + PPh 23 (35 jt) + PPh 25 (180 jt) = Rp 240.000.000."
    ],
    "instructions": [
      "Susun kertas kerja rekonsiliasi fiskal untuk menentukan Penghasilan Kena Pajak (PKP).",
      "Hitung PPh Badan terutang dengan fasilitas Pasal 31E UU PPh.",
      "Hitung PPh Kurang/Lebih Bayar (Pasal 29/28A) pada SPT Tahunan 1771."
    ],
    "outputFormat": [
      "Tabel koreksi fiskal positif dan negatif",
      "Kalkulasi fasilitas 31E dan PPh Pasal 29"
    ],
    "rubric": [
      "Ketepatan identifikasi koreksi positif & negatif (40%)",
      "Kalkulasi proporsi fasilitas Pasal 31E (35%)",
      "Ketepatan perhitungan PPh Pasal 29 (25%)"
    ],
    "answerGuide": "1. Kertas Kerja Rekonsiliasi Fiskal 2024:\nLaba Bersih Komersial Sebelum Pajak .................. Rp 2.500.000.000\n\nKoreksi Fiskal Positif:\n- Jamuan tanpa daftar nominatif (non-deductible) ...... Rp 40.000.000\n- Sanksi denda pajak (Pasal 9 ayat 1k) ................ Rp 15.000.000\nTotal Koreksi Positif ................................. Rp 55.000.000\n\nKoreksi Fiskal Negatif:\n- Selisih penyusutan fiskal (Fiskal 360 jt - Kom 300 jt) (Rp 60.000.000)\n- Pendapatan bunga deposito (PPh Final) ............... (Rp 50.000.000)\n- Dividen dari anak usaha (Non-Objek UU HPP) .......... (Rp 80.000.000)\nTotal Koreksi Negatif ................................. (Rp 190.000.000)\n\nPenghasilan Kena Pajak (PKP) .......................... Rp 2.365.000.000\n\n2. Perhitungan PPh Badan Terutang (Fasilitas Pasal 31E):\nOmzet = Rp 20.000.000.000 (antara Rp 4,8 M s.d Rp 50 M).\n- Bagian PKP yang mendapat fasilitas tarif 11% (diskon 50% dari 22%):\n  PKP Fasilitas = (Rp 4.800.000.000 / Rp 20.000.000.000) × Rp 2.365.000.000\n  PKP Fasilitas = 24% × Rp 2.365.000.000 = Rp 567.600.000.\n  PPh Fasilitas = 11% × Rp 567.600.000 = Rp 62.436.000.\n\n- Bagian PKP yang TIDAK mendapat fasilitas (tarif normal 22%):\n  PKP Non-Fasilitas = Rp 2.365.000.000 - Rp 567.600.000 = Rp 1.797.400.000.\n  PPh Non-Fasilitas = 22% × Rp 1.797.400.000 = Rp 395.428.000.\n\n- Total PPh Badan Terutang = Rp 62.436.000 + Rp 395.428.000 = Rp 457.864.000.\n\n3. PPh Kurang Bayar (PPh Pasal 29):\nTotal PPh Terutang .................................... Rp 457.864.000\nKredit Pajak:\n- PPh Pasal 22 .......................... Rp 25.000.000\n- PPh Pasal 23 .......................... Rp 35.000.000\n- Angsuran PPh Pasal 25 ................. Rp 180.000.000\nTotal Kredit Pajak .................................... (Rp 240.000.000)\nPPh Kurang Bayar (PPh Pasal 29) ....................... Rp 217.864.000"
  }
];

export const PJK301_BANK: BankSoal[] = [...PJK301_BANK_UTS, ...PJK301_BANK_UAS];
