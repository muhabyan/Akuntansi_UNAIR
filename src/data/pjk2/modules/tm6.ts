import type { Reading } from '../../../types';

const OVERVIEW_FINAL_TAX_4_2 = {
  "heading": "RAGAM OBJEK DAN TARIF PPH FINAL PASAL 4 AYAT (2) & PPH PASAL 15 (PP 9/2022 & PMK 81/2024)",
  "badge": "PPH FINAL 4(2)",
  "cards": [
    {
      "title": "SEWA TANAH / GEDUNG",
      "subtitle": "TARIF: 10% FINAL",
      "items": [
        "Objek: Sewa ruko, gedung kantor, gudang, lahan tanah, apartemen",
        "DPP: Total nilai sewa bruto + service charge",
        "Dipotong oleh penyewa berstatus badan",
        "Regulasi: PP No. 34 Tahun 2017"
      ],
      "takeaway": "Sewa Properti Tak Bergerak"
    },
    {
      "title": "JASA KONSTRUKSI",
      "subtitle": "TARIF: 1,75% s.d. 4%",
      "items": [
        "Pelaksana Kecil ber-SBU: 1,75%",
        "Pelaksana Menengah/Besar: 2,65%",
        "Pelaksana Tanpa SBU: 4%",
        "Konsultansi / Pengawasan: 3,5% - 6%",
        "Diatur dalam PP No. 9 Tahun 2022"
      ],
      "takeaway": "Berdasarkan Kualifikasi LPJK"
    },
    {
      "title": "PENGALIHAN HAK TANAH",
      "subtitle": "TARIF: 2,5% FINAL",
      "items": [
        "Objek: Penjualan properti real estate",
        "Rumah Sederhana/Rusunami: 1%",
        "DPP: Nilai bruto sesuai Pasal 192(2)",
        "Diatur PMK 81/2024 Pasal 191-203",
        "Validasi SSP sebelum akta PPAT"
      ],
      "takeaway": "PHTB Coretax System"
    },
    {
      "title": "DIVIDEN & BUNGA BANK",
      "subtitle": "TARIF: 10% / 20%",
      "items": [
        "Bunga Deposito & Tabungan: 20%",
        "Dividen Orang Pribadi DN: 10%",
        "Dividen OP BEBAS jika reinvestasi min 3 th",
        "Bunga Koperasi s.d. Rp240 rb/bln: 0%",
        "PPh 15 Penerbangan Carter: TIDAK FINAL"
      ],
      "takeaway": "Pajak Rampung Seketika"
    }
  ]
};

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Pemotongan Pajak Penghasilan Bersifat Final (PPh Pasal 4 ayat 2, PPh Pasal 15, Dividen Wajib Pajak Orang Pribadi)',
  ref: 'UU No. 7/2021 (UU HPP) · PMK No. 81/2024 (Pasal 191 s.d. 203) · PP No. 9/2022 · PP No. 34/2017 · PP No. 20/2026',
  intro: 'Membahas rezim pemajakan Pajak Penghasilan Bersifat Final: dasar filosofis pengenaan pajak rampung seketika, konsekuensi fiskal terhadap biaya non-deductible dan ketiadaan hak kredit pajak, matriks komprehensif 23 objek PPh Pasal 4 ayat (2), tata cara validasi SSP dan SPT Masa Unifikasi PHTB pada PMK 81/2024, serta Norma Penghitungan Khusus PPh Pasal 15 untuk sektor pelayaran dan penerbangan.',
  objectives: [
    'Mengidentifikasi karakteristik yuridis dan konsekuensi fiskal pemajakan PPh Bersifat Final (tidak dapat dikreditkan dan biaya non-deductible).',
    'Menentukan Dasar Pengenaan Pajak (DPP) dan tarif PPh Final Pasal 4 ayat (2) atas 23 ragam objek penghasilan (deposito, obligasi, simpanan koperasi, hadiah undian, saham bursa, PHTB, sewa tanah/bangunan, dan jasa konstruksi).',
    'Menganalisis tata cara penyetoran, validasi SSP Coretax, dan pelaporan SPT Masa Unifikasi PHTB berdasarkan PMK 81/2024.',
    'Menghitung PPh Pasal 15 menggunakan Norma Penghitungan Khusus untuk pelayaran dalam negeri (final), penerbangan dalam negeri carter (tidak final), dan pelayaran/penerbangan luar negeri.',
    'Menyelesaikan simulasi kasus perhitungan komprehensif PPh Final dengan rujukan regulasi yang presisi.',
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 6.1: Arsitektur Objek dan Tarif Pajak Penghasilan Bersifat Final.',
      overview: OVERVIEW_FINAL_TAX_4_2,
    },
    {
      kind: 'h2',
      text: '1. Arsitektur Pajak Penghasilan Bersifat Final & Konsekuensi Yuridis',
    },
    {
      kind: 'p',
      text: 'Pajak Penghasilan Bersifat Final merupakan rezim pemajakan di mana pengenaan pajak atas penghasilan tertentu dianggap rampung dan selesai seketika pada saat pemotongan oleh pihak ketiga atau penyetoran sendiri oleh Wajib Pajak. Tiga konsekuensi hukum dan akuntansi utama dari PPh Final adalah:',
    },
    {
      kind: 'ul',
      items: [
        '**Tidak Dapat Dikreditkan:** Bukti Pemotongan PPh Final tidak dapat diperhitungkan sebagai kredit pajak (tax credit) untuk mengurangi PPh Kurang Bayar (PPh Pasal 29) dalam SPT Tahunan.',
        '**Biaya Non-Deductible:** Biaya-biaya yang dikeluarkan untuk mendapatkan, menagih, dan memelihara (3M) penghasilan yang dikenai PPh Final tidak dapat dibebankan sebagai pengurang penghasilan bruto komersial (koreksi fiskal positif) sesuai Pasal 9 ayat (1) UU PPh.',
        '**Pelaporan Terpisah:** Penghasilan final tidak digabungkan dalam penghitungan Penghasilan Kena Pajak reguler, namun tetap wajib dilaporkan dalam Lampiran Penghasilan Bersifat Final pada SPT Tahunan.',
      ],
    },
    {
      kind: 'h2',
      text: '2. Matriks Komprehensif Objek, Tarif, dan Dasar Pengenaan PPh Pasal 4 ayat (2)',
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Catatan Rujukan Regulasi PPh Final',
      text: 'Ketentuan materiil PPh Final bersumber dari berbagai Peraturan Pemerintah dan Peraturan Menteri Keuangan. Untuk Pengalihan Hak atas Tanah dan/atau Bangunan (PHTB), payung hukum pelaksanaannya telah disatukan dalam PMK No. 81 Tahun 2024 (Pasal 191 s.d. 203) yang mencabut PMK No. 261/PMK.03/2016. Jasa konstruksi diatur dalam PP No. 9 Tahun 2022, persewaan tanah/bangunan dalam PP No. 34 Tahun 2017, dan dividen Orang Pribadi dalam UU HPP jo. PP No. 55 Tahun 2022.',
    },
    {
      kind: 'table',
      caption: 'Tabel 6.1: Matriks 23 Jenis Objek Transaksi PPh Pasal 4 ayat (2)',
      headers: ['No', 'Jenis Penghasilan & Transaksi', 'Regulasi Rujukan', 'Dasar Pengenaan Pajak (DPP)', 'Tarif Efektif', 'Pengecualian / Syarat Khusus'],
      rows: [
        ['1', 'Bunga Deposito & Tabungan WPDN/BUT', 'PP 131/2000 jo. PP 22/2024', 'Jumlah Bruto Bunga', '20%', 'Bebas jika saldo tabungan s.d. Rp7.500.000 (tidak dipecah), bunga diterima bank, atau dana pensiun resmi.'],
        ['2', 'Bunga Deposito WPLN', 'PP 131/2000', 'Jumlah Bruto Bunga', '20% / P3B', 'Mengikuti tarif Tax Treaty jika ada Form DGT sah.'],
        ['3', 'Bunga Deposito DHE SDA (Valas USD)', 'PP 22/2024', 'Jumlah Bruto Bunga', '0% - 10%', 'Tenor 1-3 bln (10%); 3-6 bln (7,5%); 6 bln (2,5%); >6 bln (0%).'],
        ['4', 'Bunga Deposito DHE SDA (Rupiah)', 'PP 22/2024', 'Jumlah Bruto Bunga', '0% - 5%', 'Tenor 1-3 bln (5%); 3-6 bln (2,5%); 6 bln/lebih (0%).'],
        ['5', 'Bunga Obligasi Bursa & Reksadana', 'PP 91/2021', 'Bunga / Kupon / Diskonto', '10%', 'Berlaku bagi WPDN, BUT, Reksadana, dan WPLN non-BUT (atau tarif P3B).'],
        ['6', 'Surat Utang Negara (SUN) > 12 Bulan', 'PP 91/2021', 'Bunga / Kupon / Diskonto', '10%', 'SUN obligasi negara tenor panjang.'],
        ['7', 'Surat Perbendaharaan Negara (SPN) s.d. 12 Bln', 'PP 27/2008; PMK 63/2008', 'Diskonto Bruto', '20%', 'SUN tenor pendek tidak lebih dari 12 bulan.'],
        ['8', 'Bunga Simpanan Koperasi bagi WP OP', 'PP 15/2009; PMK 112/2010', 'Jumlah Bruto Bunga', '0% / 10%', 'Bunga s.d. Rp240.000 per bulan = 0%; Bunga > Rp240.000 per bulan = 10% dari seluruh bunga bruto.'],
        ['9', 'Hadiah Undian', 'PP 132/2000', 'Nilai Bruto Hadiah', '25%', 'Dipotong penyelenggara undian (tanpa batasan nilai hadiah).'],
        ['10', 'Penjualan Saham di Bursa Efek', 'PP 41/1994 jo. PP 14/1997', 'Nilai Bruto Transaksi', '0,1%', 'Tambahan 0,5% untuk transaksi penjualan saham pendiri (founder shares).'],
        ['11', 'Saham Modal Ventura (Perusahaan Pasangan)', 'PMK 48/2018', 'Nilai Bruto Transaksi', '0,1%', 'Atas saham pasangan usaha yang memenuhi kualifikasi.'],
        ['12', 'Pengalihan Hak Tanah/Bangunan (PHTB Umum)', 'PMK 81/2024 Pasal 192', 'Nilai Bruto Pengalihan', '2,5%', 'Selain RS/RSS oleh pengembang dan selain pengalihan ke pemerintah.'],
        ['13', 'PHTB Rumah Sederhana/RSS oleh Pengembang', 'PMK 81/2024 Pasal 192', 'Nilai Bruto Pengalihan', '1,0%', 'Dilakukan oleh pengembang yang usaha pokoknya mengalihkan tanah/bangunan.'],
        ['14', 'PHTB untuk Kepentingan Umum', 'PMK 81/2024 Pasal 192', 'Nilai Ganti Rugi', '0%', 'Kepada instansi pemerintah / BUMN penugasan pengadaan tanah.'],
        ['15', 'Pengalihan Real Estat Skema DIRE', 'PMK 81/2024 Pasal 202', 'Nilai Bruto Real Estat', '0,5%', 'Dialihkan kepada Special Purpose Company (SPC) / KIK DIRE.'],
        ['16', 'Pekerjaan Konstruksi Kualifikasi Kecil / OP', 'PP 9/2022', 'Nilai Kontrak Bruto (non-PPN)', '1,75%', 'Memiliki sertifikat badan usaha kualifikasi kecil / kompetensi perseorangan.'],
        ['17', 'Pekerjaan Konstruksi Menengah / Besar', 'PP 9/2022', 'Nilai Kontrak Bruto (non-PPN)', '2,65%', 'Memiliki sertifikat badan usaha kualifikasi menengah atau besar.'],
        ['18', 'Pekerjaan Konstruksi Tanpa Kualifikasi', 'PP 9/2022', 'Nilai Kontrak Bruto (non-PPN)', '4,0%', 'Tidak memiliki sertifikat badan usaha / kompetensi kerja.'],
        ['19', 'Konstruksi Terintegrasi (Design & Build)', 'PP 9/2022', 'Nilai Kontrak Bruto (non-PPN)', '2,65% / 4%', 'Bersertifikat: 2,65%; Tanpa sertifikat kualifikasi: 4%.'],
        ['20', 'Jasa Konsultansi Konstruksi', 'PP 9/2022', 'Nilai Kontrak Bruto (non-PPN)', '3,5% / 6%', 'Bersertifikat badan usaha: 3,5%; Tanpa sertifikat: 6%.'],
        ['21', 'Persewaan Tanah dan/atau Bangunan', 'PP 34/2017', 'Nilai Sewa Bruto + Service Charge', '10%', 'Termasuk biaya perawatan gedung, fasilitas, dan keamanan.'],
        ['22', 'Dividen WP Orang Pribadi Dalam Negeri', 'UU HPP jo. PP 55/2022', 'Nilai Bruto Dividen', '10% / Bebas', 'Tarif 10% Final; Bebas jika diinvestasikan di NKRI minimal 3 tahun.'],
        ['23', 'Participating Interest Hulu Migas', 'PP 93/2021', 'Nilai Bruto Pengalihan', '5% / 7%', 'Masa Eksplorasi: 5%; Masa Eksploitasi: 7%.'],
      ],
    },
    {
      kind: 'h2',
      text: '3. Tata Cara Penyetoran, Pelaporan, & Pengecualian PHTB (PMK 81/2024 Coretax)',
    },
    {
      kind: 'p',
      text: 'Berdasarkan regulasi implementasi Core Tax System dalam PMK No. 81 Tahun 2024 (Pasal 191 s.d. 203):',
    },
    {
      kind: 'ul',
      items: [
        '**Pencabutan PMK 261/2016:** Pasal 483 angka 21 PMK 81/2024 resmi mencabut PMK No. 261/PMK.03/2016. Pengaturan administrasi PHTB disatukan dalam BAB VI Bagian Kedua PMK 81/2024.',
        '**Dasar pengenaan (Pasal 192 ayat 2):** Untuk jual beli tanpa hubungan istimewa, gunakan nilai yang sesungguhnya diterima atau diperoleh. Untuk jual beli dengan hubungan istimewa, gunakan nilai yang seharusnya diterima atau diperoleh. Lelang, pengalihan kepada pemerintah, dan bentuk pengalihan lain memiliki dasar nilai tersendiri; jangan otomatis memilih angka tertinggi antara akta dan NJOP.',
        '**Penyetoran Sebelum Akta (Pasal 193):** Orang pribadi atau badan wajib menyetor sendiri PPh terutang ke Kas Negara sebelum akta, keputusan, atau risalah lelang ditandatangani oleh PPAT atau pejabat lelang.',
        '**Bukti pemenuhan sebelum akta (Pasal 193 ayat 7-8):** Pejabat Pembuat Akta Tanah (PPAT) hanya boleh menandatangani akta setelah menerima salinan SSP atau bukti administrasi yang disamakan dengan SSP dan telah dilakukan penelitian oleh Kepala KPP.',
        '**Pelaporan Otomatis via SPT Masa PPh Unifikasi (Pasal 199):** Wajib Pajak yang menyetor sendiri dan divalidasi SSP-nya dianggap telah menyampaikan SPT Masa PPh Unifikasi sesuai tanggal pembayaran pada SSP.',
        '**Pengecualian Pembayaran PHTB (Pasal 200):** Diberikan bagi orang pribadi berpenghasilan di bawah PTKP dengan nilai pengalihan kurang dari Rp60.000.000, pengalihan hibah keluarga sedarah satu derajat / badan sosial keagamaan, serta pengalihan karena pewarisan.',
      ],
    },
    {
      kind: 'h2',
      text: '4. Norma Penghitungan Khusus PPh Pasal 15 (Pelayaran & Penerbangan)',
    },
    {
      kind: 'p',
      text: 'Pasal 15 UU PPh menetapkan norma penghitungan khusus bagi sektor usaha pelayaran dan penerbangan tertentu:',
    },
    {
      kind: 'table',
      caption: 'Tabel 6.2: Skema Tarif dan Sifat Pemajakan PPh Pasal 15',
      headers: ['Sektor Usaha', 'Dasar Regulasi', 'Norma Penghasilan Neto', 'Tarif Efektif PPh 15', 'Sifat Pemajakan'],
      rows: [
        ['Pelayaran Dalam Negeri', 'KMK No. 416/KMK.04/1996', '4% dari peredaran bruto', '1,2% (4% × 30%)', 'FINAL'],
        ['Penerbangan Dalam Negeri (Carter)', 'KMK No. 475/KMK.04/1996', '6% dari peredaran bruto', '1,8% (6% × 30%)', 'TIDAK FINAL; dapat dikreditkan pada SPT Tahunan'],
        ['Pelayaran & Penerbangan Luar Negeri', 'KMK No. 417/KMK.04/1996', '6% dari peredaran bruto', '2,64% dari peredaran bruto', 'FINAL'],
      ],
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Jebakan Ujian Utama PPh Pasal 15',
      text: 'Sering diuji dalam ujian: Pelayaran Dalam Negeri (tarif 1,2%) bersifat FINAL. Sebaliknya, Penerbangan Dalam Negeri Carter (tarif 1,8%) bersifat TIDAK FINAL dan dapat diperhitungkan sebagai kredit pajak pada SPT Tahunan PPh perusahaan maskapai penerbangan.',
    },
    {
      kind: 'h2',
      text: '5. Kumpulan Kasus Komprehensif (Worked Practice Cases)',
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 1: Bunga Deposito Bank Berjaya (Slide 8)',
      prompt: 'Pak Dito memiliki saldo deposito Rp10.000.000 di Bank Berjaya. Pada 31 Januari 2025 menerima bunga deposito Rp200.000. Hitung PPh Pasal 4 ayat (2) terutang!',
      blocks: [
        { kind: 'p', text: 'Analisis Saldo: Karena saldo deposito melampaui ambang batas bebas pajak Rp7.500.000, bunga deposito terutang PPh Final 20%.' },
        { kind: 'formula', text: '\\text{PPh Pasal 4 ayat (2)}=20\\% \\times \\text{Rp}200.000=\\text{Rp}40.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 2: Bunga Obligasi Bursa PT Rekso (Slide 13)',
      prompt: 'PT Berkah (Wajib Pajak Badan DN) memperoleh bunga obligasi PT Rekso yang tercatat di Bursa Efek Indonesia sebesar Rp10.000.000. Hitung PPh Final terutang sesuai PP 91/2021!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 4 ayat (2)}=10\\% \\times \\text{Rp}10.000.000=\\text{Rp}1.000.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 3: Bunga Simpanan Koperasi Anggota OP (Slide 15)',
      prompt: 'Pak Budi memperoleh bunga simpanan dari Koperasi Jaya sebesar Rp200.000 pada bulan Januari 2025. Hitung PPh Pasal 4 ayat (2) terutang!',
      blocks: [
        { kind: 'p', text: 'Analisis Ambang Batas: Sesuai PMK 112/2010, penghasilan bunga simpanan koperasi sampai dengan Rp240.000 per bulan dikenakan tarif 0% (dibebaskan dari pajak).' },
        { kind: 'formula', text: '\\text{PPh Pasal 4 ayat (2)}=0\\% \\times \\text{Rp}200.000=\\text{Rp}0' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 4: Hadiah Undian Mobil (Slide 17)',
      prompt: 'Pak Ruli memenangkan hadiah undian mobil Honda senilai Rp200.000.000 dari PT Super Jaya. Berapakah PPh Final yang wajib dipotong penyelenggara sesuai PP 132/2000?',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 4 ayat (2)}=25\\% \\times \\text{Rp}200.000.000=\\text{Rp}50.000.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 5: Penjualan Saham di Bursa Efek (Slide 20)',
      prompt: 'Pak Yahya menjual saham publik di Bursa Efek Indonesia dengan nilai transaksi Rp150.000.000 (bukan saham pendiri). Hitung PPh Final terutang!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 4 ayat (2)}=0{,}1\\% \\times \\text{Rp}150.000.000=\\text{Rp}150.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 6: Modal Ventura Penjualan Saham Pasangan Usaha (Slide 22)',
      prompt: 'Perusahaan Modal Ventura Java Venture menjual saham perusahaan pasangan usaha PT Dirga senilai Rp150.000.000. Hitung PPh Final sesuai PMK 48/2018!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 4 ayat (2)}=0{,}1\\% \\times \\text{Rp}150.000.000=\\text{Rp}150.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 7: Persewaan Ruko (Tuan Johan)',
      prompt: 'Tuan Johan menyewakan ruko kantor kepada PT Prima Logistik dengan nilai sewa Rp60.000.000 per tahun. Hitung PPh Final Pasal 4 ayat (2) sesuai PP 34/2017!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 4 ayat (2)}=10\\% \\times \\text{Rp}60.000.000=\\text{Rp}6.000.000' },
        { kind: 'p', text: 'Pihak penyewa (PT Prima Logistik) wajib memotong PPh Final 10% dan menerbitkan bukti potong unifikasi.' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 8: Konstruksi Kualifikasi Kecil (CV Pratama)',
      prompt: 'CV Pratama (kontraktor pelaksana kualifikasi kecil ber-SBU LPJK) menyelesaikan renovasi gudang dengan nilai kontrak Rp100.000.000 (non-PPN). Hitung PPh Final PP 9/2022!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Final Jasa Konstruksi}=1{,}75\\% \\times \\text{Rp}100.000.000=\\text{Rp}1.750.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 9: Konstruksi Kualifikasi Besar (PT Bangun Mandiri)',
      prompt: 'PT Bangun Mandiri (pelaksana konstruksi kualifikasi besar ber-SBU) mengerjakan proyek jembatan senilai Rp500.000.000 (non-PPN). Hitung PPh Final PP 9/2022!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Final Jasa Konstruksi}=2{,}65\\% \\times \\text{Rp}500.000.000=\\text{Rp}13.250.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 10: Konstruksi Tanpa Kualifikasi (Tuan Danang)',
      prompt: 'Tuan Danang mengerjakan pekerjaan konstruksi fisik senilai Rp200.000.000 tanpa memiliki sertifikat badan usaha / kualifikasi kerja. Hitung PPh Final terutang!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Final Tanpa Kualifikasi}=4\\% \\times \\text{Rp}200.000.000=\\text{Rp}8.000.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 11: Konsultansi Konstruksi Bersertifikat (PT Desain Cipta)',
      prompt: 'PT Desain Cipta (memiliki sertifikat kualifikasi konsultansi konstruksi) menyelesaikan perencanaan struktur senilai Rp50.000.000 (non-PPN). Hitung PPh Final PP 9/2022!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Final Konsultansi Konstruksi}=3{,}5\\% \\times \\text{Rp}50.000.000=\\text{Rp}1.750.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 12: Pengalihan Hak Tanah dan Bangunan Ruko (Tuan Anton)',
      prompt: 'Tuan Anton menjual bangunan ruko kepada PT Sinar Terang seharga Rp800.000.000 (nilai transaksi sama dengan NJOP). Hitung PPh PHTB sesuai PMK 81/2024 Pasal 192!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh PHTB}=2{,}5\\% \\times \\text{Rp}800.000.000=\\text{Rp}20.000.000' },
        { kind: 'p', text: 'Tuan Anton wajib menyetor sendiri PPh PHTB sebelum penandatanganan akta jual beli oleh PPAT.' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 13: PHTB Rumah Sederhana oleh Pengembang (PT Griya Indah)',
      prompt: 'PT Griya Indah (pengembang perumahan) menjual unit Rumah Sederhana sehat seharga Rp150.000.000. Hitung PPh PHTB sesuai PMK 81/2024 Pasal 192!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh PHTB Rumah Sederhana}=1\\% \\times \\text{Rp}150.000.000=\\text{Rp}1.500.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 14: Pelayaran Dalam Negeri (PT Samudera Lines)',
      prompt: 'PT Samudera Lines (perusahaan pelayaran nasional) menerima pendapatan carter kapal angkutan kargo dalam negeri sebesar Rp50.000.000. Hitung PPh Pasal 15 terutang!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 15 Pelayaran DN}=1{,}2\\% \\times \\text{Rp}50.000.000=\\text{Rp}600.000' },
        { kind: 'p', text: 'Sifat Pemajakan: **FINAL** (KMK No. 416/KMK.04/1996).' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 15: Penerbangan Dalam Negeri Carter (PT Nusantara Air)',
      prompt: 'PT Nusantara Air melayani carter penerbangan wisata dalam negeri kepada rombongan perusahaan dengan nilai kontrak Rp100.000.000. Hitung PPh Pasal 15 dan jelaskan perlakuan akhir tahunnya!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 15 Penerbangan DN}=1{,}8\\% \\times \\text{Rp}100.000.000=\\text{Rp}1.800.000' },
        { kind: 'p', text: 'Sifat Pemajakan: **TIDAK FINAL** (KMK No. 475/KMK.04/1996). Pajak Rp1.800.000 dapat diperhitungkan sebagai **kredit pajak** pada SPT Tahunan PPh Badan PT Nusantara Air.' },
      ],
    },
    {
      kind: 'h2',
      text: '6. Exam Toolkit: Jebakan & Strategi Menjawab Ujian',
    },
    {
      kind: 'ul',
      items: [
        '**Jebakan Sifat PPh 15 Penerbangan:** Pelayaran Dalam Negeri (1,2%) bersifat FINAL, sedangkan Penerbangan Dalam Negeri Carter (1,8%) bersifat TIDAK FINAL dan dapat dikreditkan pada SPT Tahunan Badan.',
        '**Jebakan Dividen Orang Pribadi:** Dividen yang diterima Wajib Pajak Orang Pribadi Dalam Negeri dikenai PPh Final 10%, TETAPI dibebaskan dari pajak jika diinvestasikan kembali di wilayah NKRI paling singkat 3 Tahun Pajak.',
        '**Jebakan Persewaan Tanah vs Sewa Harta Lain:** Sewa tanah dan/atau bangunan dikenai PPh Final Pasal 4 ayat (2) tarif 10% (termasuk service charge). Sewa mobil, peralatan, atau mesin dikenai PPh Pasal 23 tarif 2%.',
        '**Jebakan Ambang Batas Bunga Deposito & Koperasi:** Bunga deposito dikenakan PPh Final 20% jika saldo deposito melebihi Rp7.500.000. Bunga simpanan koperasi dinikmati anggota Orang Pribadi bebas PPh jika bunga tidak melebihi Rp240.000 per bulan (jika lebih, tarif 10%).',
        '**Jebakan Tarif Jasa Konstruksi PP 9/2022:** Bedakan pelaksana kecil (1,75%), pelaksana menengah/besar (2,65%), pelaksana tanpa kualifikasi (4%), dan konsultansi bersertifikat (3,5%) atau tanpa sertifikat (6%).',
      ],
    },
  ],
};
