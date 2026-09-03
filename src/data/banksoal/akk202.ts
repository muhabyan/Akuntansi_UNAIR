// =============================================================
// src/data/banksoal/akk202.ts
// Bank Soal Esai & Kasus Komprehensif Akuntansi Keuangan Menengah II (AKK202)
// Berdasarkan Kieso Intermediate Accounting IFRS 5e & PSAK/ISAK IAI.
// 14 Kasus Lengkap (7 Kasus Pra-UTS & 7 Kasus Pra-UAS)
// =============================================================
import type { BankSoal } from '../../types';

export const AKK202_BANK_UTS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 1: Aset Tetap, Lump-Sum & Kapitalisasi Bunga PSAK 26",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 1: Alokasi Pembelian Lump-Sum & Perhitungan 3 Tahap Bunga Konstruksi",
    "context": "Pada 2 Januari 2026, PT Wijaya Karya membeli sebidang tanah beserta bangunan tua seharga Rp 3.600.000.000 secara lump-sum. Nilai wajar penilai: Tanah Rp 3.000.000.000 dan Bangunan Rp 1.000.000.000. Gedung tua langsung dibongkar dengan biaya bersih Rp 150.000.000 untuk membangun kantor pusat baru. Konstruksi mandiri dimulai 1 Maret 2026 dan selesai 31 Desember 2026. Pengeluaran: 1 Maret Rp 800 jt, 1 Juli Rp 1.200 jt, 1 November Rp 600 jt. Pinjaman konstruksi: Wesel Khusus Konstruksi 12% Rp 1.000.000.000; Utang Obligasi Umum 10% Rp 2.000.000.000.",
    "data": [
      "Harga Beli Lump-Sum: Rp 3.600.000.000.",
      "Biaya Bersih Pembongkaran Gedung Lama: Rp 150.000.000 (diperuntukkan persiapan lahan baru).",
      "Pengeluaran Konstruksi: 1 Maret (10 bln) Rp 800 jt; 1 Juli (6 bln) Rp 1.200 jt; 1 Nov (2 bln) Rp 600 jt.",
      "Pinjaman Khusus Konstruksi: Rp 1.000.000.000 @ 12% per tahun.",
      "Pinjaman Umum: Rp 2.000.000.000 @ 10% per tahun."
    ],
    "instructions": [
      "Hitung alokasi biaya perolehan lump-sum dan tentukan nilai tercatat awal akun Tanah.",
      "Hitung Weighted Average Accumulated Expenditures (WAAE) selama masa konstruksi tahun 2026.",
      "Hitung Bunga yang Dapat Dihindari (Avoidable Interest) dan bandingkan dengan Bunga Aktual.",
      "Buat seluruh ayat jurnal kapitalisasi bunga dan biaya perolehan gedung baru per 31 Desember 2026."
    ],
    "outputFormat": [
      "Tabel Alokasi Lump-Sum",
      "Tabel Perhitungan WAAE",
      "Kalkulasi Bunga Konstruksi PSAK 26",
      "Ayat Jurnal Lengkap"
    ],
    "rubric": [
      "Alokasi 100% harga lump-sum + bongkar ke Tanah karena niat membangun baru (25%)",
      "Akurasi perhitungan bobot bulan WAAE (25%)",
      "Kalkulasi Avoidable Interest vs Actual Interest (25%)",
      "Jurnal kapitalisasi ke Bangunan dan pengakuan sisa beban bunga (25%)"
    ],
    "answerGuide": "1. Nilai Tercatat Awal Tanah:\nKarena bangunan lama langsung dibongkar untuk proyek baru, seluruh harga lump-sum dialokasikan ke Tanah:\nHarga Beli = Rp 3.600.000.000\nBiaya Bersih Pembongkaran = Rp 150.000.000\nTotal Nilai Tercatat Tanah = Rp 3.750.000.000.\n\n2. Perhitungan WAAE (1 Maret - 31 Des 2026):\n• 1 Maret: Rp 800.000.000 × 10/12 = Rp 666.666.667\n• 1 Juli: Rp 1.200.000.000 × 6/12 = Rp 600.000.000\n• 1 Nov: Rp 600.000.000 × 2/12 = Rp 100.000.000\nTotal WAAE = Rp 1.366.666.667.\n\n3. Kalkulasi Bunga Dihindari (Avoidable Interest):\n• Porsi ditutup Pinjaman Khusus (Rp 1.000.000.000 @ 12%) = Rp 120.000.000\n• Porsi sisa ditutup Pinjaman Umum (Rp 366.666.667 @ 10%) = Rp 36.666.667\nTotal Avoidable Interest = Rp 156.666.667.\nTotal Bunga Aktual = (Rp 1 M × 12%) + (Rp 2 M × 10%) = Rp 120 jt + Rp 200 jt = Rp 320.000.000.\nKarena Avoidable Interest (Rp 156.666.667) < Bunga Aktual (Rp 320.000.000), maka JUMLAH YANG DIKAPITALISASI = Rp 156.666.667. Sisa bunga Rp 163.333.333 diakui sebagai Beban Bunga operasional.\n\n4. Jurnal Kapitalisasi Bunga 31 Des 2026:\n(D) Bangunan Dalam Konstruksi ........... Rp 156.666.667\n(D) Beban Bunga (Laba Rugi) ............. Rp 163.333.333\n    (K) Kas / Utang Bunga ............................. Rp 320.000.000"
  },
  {
    "type": "journal",
    "scope": "TM 2: Pertukaran Aset Non-Moneter & Hibah Pemerintah PSAK 61",
    "difficulty": "Menengah",
    "estimatedTime": "25–35 menit",
    "question": "Studi Kasus 2: Pertukaran Mesin (Commercial vs Lacks Substance) & Hibah Pemerintah",
    "context": "PT Astra memproses dua transaksi: (1) Pertukaran mesin pabrik lama (Kos Rp 500 jt, Akum Depresiasi Rp 320 jt, Nilai Wajar Rp 210 jt) dengan mesin baru sejenis dan membayar kas tambahan Rp 40 jt. Uji menunjukkan transaksi MEMILIKI SUBSTANSI KOMERSIAL. (2) Menerima hibah pemerintah berupa tanah senilai Rp 800 jt dengan syarat membangun pusat pelatihan vokasi.",
    "data": [
      "Mesin Lama: Kos Rp 500 jt, Akum Depresiasi Rp 320 jt (Nilai Buku = Rp 180 jt).",
      "Nilai Wajar Mesin Lama: Rp 210 jt. Kas Dibayar: Rp 40 jt. Nilai Wajar Mesin Baru: Rp 250 jt.",
      "Hibah Tanah: Nilai Wajar Rp 800 jt dengan kewajiban fasilitas pelatihan."
    ],
    "instructions": [
      "Hitung laba/rugi pertukaran mesin dan tentukan harga perolehan mesin baru.",
      "Buat ayat jurnal pertukaran mesin non-moneter.",
      "Jelaskan perlakuan hibah tanah dan buat ayat jurnal pengakuan hibah pemerintah (Deferred Income Method)."
    ],
    "outputFormat": [
      "Perhitungan Gain on Exchange",
      "Jurnal Pertukaran Mesin",
      "Jurnal Hibah Pemerintah"
    ],
    "rubric": [
      "Perhitungan keuntungan pertukaran (210 jt - 180 jt = 30 jt) (30%)",
      "Jurnal pertukaran dengan pengakuan penuh keuntungan (40%)",
      "Jurnal pengakuan hibah sebagai Pendapatan Ditangguhkan (30%)"
    ],
    "answerGuide": "1. Kalkulasi Pertukaran Mesin:\nNilai Buku Mesin Lama = Rp 500 jt - Rp 320 jt = Rp 180.000.000.\nNilai Wajar Mesin Lama = Rp 210.000.000.\nKeuntungan Pertukaran (Gain on Exchange) = Rp 210 jt - Rp 180 jt = Rp 30.000.000.\nHarga Perolehan Mesin Baru = Nilai Wajar Mesin Lama (Rp 210 jt) + Kas Dibayar (Rp 40 jt) = Rp 250.000.000.\n\n2. Jurnal Pertukaran Mesin (Substansi Komersial):\n(D) Mesin Baru ........................... Rp 250.000.000\n(D) Akumulasi Penyusutan Mesin Lama ..... Rp 320.000.000\n    (K) Mesin Lama .................................... Rp 500.000.000\n    (K) Kas ........................................... Rp 40.000.000\n    (K) Keuntungan Pertukaran Aset (Laba Rugi) ....... Rp 30.000.000\n\n3. Jurnal Hibah Pemerintah (PSAK 61 - Deferred Income):\n(D) Tanah ................................ Rp 800.000.000\n    (K) Pendapatan Hibah Pemerintah Ditangguhkan ...... Rp 800.000.000"
  },
  {
    "type": "calculation",
    "scope": "TM 3: Depresiasi Komponen & Deplesi Sumber Daya Alam PSAK 64",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 3: Penyusutan Komponen Pesawat Terbang & Deplesi Tambang Batubara",
    "context": "PT Merpati Airways membeli pesawat jet seharga Rp 600.000.000.000. Komponen: Rangka Pesawat Rp 360 M (umur 20 tahun), Mesin Jet Rp 180 M (umur 10 tahun atau 15.000 jam terbang), Interior Kabin Rp 60 M (umur 5 tahun). Selama tahun pertama, pesawat terbang selama 1.800 jam. Selain itu, anak usaha pertambangan membeli hak tambang batubara Rp 400.000.000.000 dengan estimasi deposit 10.000.000 ton dan kewajiban restorasi lingkungan Rp 50.000.000.000 (PV Rp 30 M). Produksi tahun pertama 1.200.000 ton.",
    "data": [
      "Pesawat Jet: Rangka Rp 360 M (Garis Lurus 20 thn); Mesin Rp 180 M (Unit of Activity 15.000 jam); Kabin Rp 60 M (Garis Lurus 5 thn).",
      "Jam Terbang Mesin Tahun 1: 1.800 jam.",
      "Tambang Batubara: Biaya Akuisisi Rp 400 M + Provisi Restorasi PV Rp 30 M = Dasar Deplesi Rp 430 M.",
      "Deposit: 10.000.000 ton. Penambangan Tahun 1: 1.200.000 ton (1.000.000 ton terjual, 200.000 ton persediaan)."
    ],
    "instructions": [
      "Hitung beban penyusutan tahun 1 untuk masing-masing komponen pesawat terbang (Component Depreciation).",
      "Hitung tarif deplesi tambang batubara per ton dan alokasi deplesi tahun 1.",
      "Tentukan berapa porsi deplesi yang masuk Beban Pokok Penjualan vs Aset Persediaan."
    ],
    "outputFormat": [
      "Tabel Penyusutan Komponen Pesawat",
      "Kalkulasi Tarif & Alokasi Deplesi Batubara",
      "Ayat Jurnal Deplesi"
    ],
    "rubric": [
      "Penerapan Component Depreciation sesuai PSAK 16 (35%)",
      "Kalkulasi tarif deplesi termasuk provisi restorasi lingkungan (35%)",
      "Pemisahan deplesi barang terjual (HPP) vs persediaan akhir (30%)"
    ],
    "answerGuide": "1. Penyusutan Komponen Pesawat Terbang:\n• Rangka Pesawat (Garis Lurus): Rp 360 M / 20 tahun = Rp 18.000.000.000\n• Mesin Jet (Jam Aktivitas): (1.800 jam / 15.000 jam) × Rp 180 M = Rp 21.600.000.000\n• Interior Kabin (Garis Lurus): Rp 60 M / 5 tahun = Rp 12.000.000.000\nTotal Beban Penyusutan Pesawat Tahun 1 = Rp 51.600.000.000.\n\n2. Perhitungan Deplesi Tambang Batubara:\nDasar Deplesi = Kos Akuisisi (Rp 400 M) + PV Restorasi (Rp 30 M) = Rp 430.000.000.000.\nTarif Deplesi per Ton = Rp 430.000.000.000 / 10.000.000 ton = Rp 43.000 per ton.\nTotal Deplesi Tahun 1 (1.200.000 ton) = 1.200.000 × Rp 43.000 = Rp 51.600.000.000.\n\n3. Alokasi Deplesi:\n• Persediaan Batubara Terjual (1.000.000 ton × 43rb) = Rp 43.000.000.000 (Beban Pokok Penjualan)\n• Persediaan Batubara Akhir (200.000 ton × 43rb) = Rp 8.600.000.000 (Aset Lancar di Neraca)\n\nJurnal Deplesi:\n(D) Persediaan Batubara ................... Rp 51.600.000.000\n    (K) Akumulasi Deplesi Sumber Daya Alam ............ Rp 51.600.000.000"
  },
  {
    "type": "analysis",
    "scope": "TM 4: Uji Penurunan Nilai (Impairment PSAK 48) & CGU",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 4: Uji Penurunan Nilai Unit Penghasil Kas (CGU) & Pembalikan Impairment",
    "context": "Divisi Manufaktur Keramik PT Arwana dipandang sebagai satu Unit Penghasil Kas (CGU). Per 31 Desember 2026, nilai tercatat aset CGU adalah: Goodwill Rp 100 jt, Bangunan Pabrik Rp 600 jt, Mesin Khusus Rp 300 jt (Total Nilai Buku CGU = Rp 1.000.000.000). Karena krisis konstruksi, diuji impairment. Data penilai: Nilai Wajar Dikurangi Biaya Pelepasan (FVLCD) = Rp 750.000.000; Nilai Pakai (Value in Use) = Rp 780.000.000.",
    "data": [
      "Nilai Buku Aset CGU: Goodwill Rp 100 jt; Bangunan Rp 600 jt (66,67% dari porsi aset tetap); Mesin Rp 300 jt (33,33% dari porsi aset tetap).",
      "Jumlah Terpulihkan (Recoverable Amount) = Nilai Tertinggi antara FVLCD (Rp 750 jt) vs Nilai Pakai (Rp 780 jt) = Rp 780.000.000.",
      "Total Kerugian Penurunan Nilai = Rp 1.000.000.000 - Rp 780.000.000 = Rp 220.000.000."
    ],
    "instructions": [
      "Tentukan Jumlah Terpulihkan (Recoverable Amount) CGU dan hitung total kerugian penurunan nilai.",
      "Jelaskan urutan alokasi kerugian penurunan nilai ke aset-aset dalam CGU sesuai PSAK 48.",
      "Susun tabel alokasi kerugian dan buat ayat jurnal impairment per 31 Desember 2026.",
      "Jelaskan apakah kerugian penurunan nilai atas Goodwill boleh dibalik (reversed) di masa depan jika kondisi ekonomi membaik."
    ],
    "outputFormat": [
      "Analisis Recoverable Amount",
      "Tabel Alokasi Impairment CGU",
      "Ayat Jurnal Impairment",
      "Evaluasi Reversal Goodwill"
    ],
    "rubric": [
      "Penentuan recoverable amount berbasis nilai tertinggi (25%)",
      "Alokasi pertama menghabiskan Goodwill 100% (25%)",
      "Alokasi sisa rugi secara proporsional ke Bangunan dan Mesin (25%)",
      "Penjelasan larangan mutlak pembalikan impairment Goodwill (25%)"
    ],
    "answerGuide": "1. Penentuan Recoverable Amount & Total Impairment:\nRecoverable Amount = MAX(FVLCD Rp 750 jt, Value in Use Rp 780 jt) = Rp 780.000.000.\nRugi Penurunan Nilai (Impairment Loss) = Rp 1.000.000.000 - Rp 780.000.000 = Rp 220.000.000.\n\n2. Urutan Alokasi Berdasarkan PSAK 48:\n• Tahap 1: Alokasikan kerugian terlebih dahulu untuk MENGHAPUS GOODWILL HINGGA NOL = Rp 100.000.000.\n• Tahap 2: Sisa kerugian sebesar Rp 120.000.000 (Rp 220 jt - Rp 100 jt) dialokasikan secara proporsional ke aset tetap lain berdasarkan nilai buku relatif:\n  - Bangunan (600 / 900) × Rp 120 jt = Rp 80.000.000.\n  - Mesin (300 / 900) × Rp 120 jt = Rp 40.000.000.\n\n3. Nilai Buku Baru Setelah Impairment:\n• Goodwill: Rp 100 jt - Rp 100 jt = Rp 0.\n• Bangunan: Rp 600 jt - Rp 80 jt = Rp 520.000.000.\n• Mesin: Rp 300 jt - Rp 40 jt = Rp 260.000.000.\nTotal Nilai Tercatat CGU = Rp 780.000.000 (Tepat sama dengan Recoverable Amount!).\n\nJurnal Impairment 31 Des 2026:\n(D) Rugi Penurunan Nilai - CGU ............ Rp 220.000.000\n    (K) Goodwill ...................................... Rp 100.000.000\n    (K) Akumulasi Penurunan Nilai Bangunan ........... Rp 80.000.000\n    (K) Akumulasi Penurunan Nilai Mesin .............. Rp 40.000.000\n\n4. Aturan Pembalikan (Reversal) Goodwill:\nBerdasarkan PSAK 48 Paragraf 124, **KERUGIAN PENURUNAN NILAI ATAS GOODWILL DILARANG KERAS DIBALIK PADA PERIODE BERIKUTNYA DENGAN ALASAN APA PUN**! Kenaikan nilai di masa depan dianggap sebagai goodwill yang dihasilkan secara internal (internal goodwill) yang dilarang diakui oleh standar akuntansi."
  },
  {
    "type": "calculation",
    "scope": "TM 5: Aset Takberwujud & Goodwill Akuisisi Kombinasi Bisnis PSAK 22",
    "difficulty": "Menengah",
    "estimatedTime": "25–35 menit",
    "question": "Studi Kasus 5: Penentuan Nilai Goodwill Akuisisi & Amortisasi Hak Paten",
    "context": "PT Indofood mengakuisisi 100% kepemilikan PT Sari Roti seharga Rp 5.000.000.000 tunai. Neraca PT Sari Roti sebelum akuisisi menunjukkan Total Aset Rp 3.800.000.000 dan Total Liabilitas Rp 1.200.000.000 (Nilai Buku Ekuitas = Rp 2.600.000.000). Hasil audit penilai independen menemukan: Nilai wajar Persediaan lebih tinggi Rp 150 jt dari nilai buku, Gedung lebih tinggi Rp 450 jt, serta terdapat Hak Paten formula roti yang belum tercatat di neraca dengan nilai wajar Rp 600 jt. Liabilitas dinilai wajar.",
    "data": [
      "Harga Beli Akuisisi: Rp 5.000.000.000 tunai.",
      "Nilai Buku Aset Neto: Rp 3.800 jt - Rp 1.200 jt = Rp 2.600.000.000.",
      "Selisih Nilai Wajar: Persediaan (+150 jt), Gedung (+450 jt), Paten Rahasia (+600 jt)."
    ],
    "instructions": [
      "Hitung Nilai Wajar Aset Neto Teridentifikasi (Fair Value of Identifiable Net Assets) PT Sari Roti.",
      "Hitung jumlah Goodwill yang timbul dari kombinasi bisnis ini.",
      "Buat ayat jurnal pencatatan akuisisi pada pembukuan PT Indofood.",
      "Jelaskan apakah Goodwill diamortisasi tiap tahun atau diuji impairment."
    ],
    "outputFormat": [
      "Tabel Penyesuaian Nilai Wajar Aset Neto",
      "Kalkulasi Goodwill",
      "Ayat Jurnal Akuisisi"
    ],
    "rubric": [
      "Perhitungan nilai wajar aset neto teridentifikasi (30%)",
      "Perhitungan goodwill = Purchase Price - Fair Value Net Assets (30%)",
      "Kebenaran ayat jurnal akuisisi (25%)",
      "Penjelasan standar perlakuan goodwill (15%)"
    ],
    "answerGuide": "1. Nilai Wajar Aset Neto Teridentifikasi:\nNilai Buku Aset Neto Awal = Rp 2.600.000.000\nKenaikan Nilai Wajar Persediaan = +Rp 150.000.000\nKenaikan Nilai Wajar Gedung = +Rp 450.000.000\nPengakuan Nilai Wajar Paten Formula = +Rp 600.000.000\nTotal Nilai Wajar Aset Neto Teridentifikasi = Rp 3.800.000.000.\n\n2. Perhitungan Goodwill:\nHarga Pembelian (Purchase Price) = Rp 5.000.000.000\nDikurangi Nilai Wajar Aset Neto = (Rp 3.800.000.000)\nGoodwill yang Diakui = Rp 1.200.000.000.\n\n3. Jurnal Akuisisi PT Indofood:\n(D) Aset Teridentifikasi (pada Nilai Wajar) ... Rp 5.000.000.000\n(D) Goodwill .................................. Rp 1.200.000.000\n    (K) Liabilitas Diambil Alih ....................... Rp 1.200.000.000\n    (K) Kas ........................................... Rp 5.000.000.000\n\n4. Perlakuan Akuntansi Goodwill:\nGoodwill memiliki masa manfaat tidak terbatas (indefinite life), sehingga **TIDAK DIAMORTISASI**. Berdasarkan PSAK 22 dan PSAK 48, Goodwill wajib diuji penurunan nilai (impairment test) minimal setahun sekali pada level CGU."
  },
  {
    "type": "calculation",
    "scope": "TM 6: Liabilitas Jangka Pendek, Wesel Bayar Diskonto & Bonus Eksekutif",
    "difficulty": "Menengah",
    "estimatedTime": "25–35 menit",
    "question": "Studi Kasus 6: Amortisasi Diskonto Wesel Bayar & Perhitungan Bonus Setelah Pajak",
    "context": "Pada 1 September 2026, PT Kalbe menerbitkan wesel bayar tanpa bunga senilai Rp 600.000.000 dengan jangka waktu 6 bulan (jatuh tempo 1 Maret 2027) kepada bank dengan suku bunga diskonto 10%. Selain itu, pada akhir 2026 perusahaan menghitung bonus eksekutif sebesar 8% dari laba setelah dikurangi bonus dan pajak (laba sebelum bonus & pajak = Rp 800.000.000, tarif pajak 22%).",
    "data": [
      "Wesel Bayar: Nominal Rp 600 jt, 6 bulan, diskonto 10% per tahun.",
      "Kas Diterima Wesel: Rp 600 jt - (Rp 600 jt × 10% × 6/12) = Rp 570.000.000.",
      "Bonus: 8% dari Laba Bersih setelah bonus dan setelah pajak 22%."
    ],
    "instructions": [
      "Buat jurnal penerbitan wesel bayar pada 1 September 2026.",
      "Buat jurnal penyesuaian amortisasi diskonto bunga wesel per 31 Desember 2026.",
      "Hitung nilai bonus eksekutif dan buat jurnal akrual per 31 Desember 2026."
    ],
    "outputFormat": [
      "Jurnal Penerbitan & Penyesuaian Wesel",
      "Persamaan Aljabar Bonus",
      "Jurnal Akrual Bonus"
    ],
    "rubric": [
      "Kalkulasi diskonto wesel bayar dan amortisasi 4 bulan (35%)",
      "Penyelesaian persamaan aljabar bonus dan pajak (40%)",
      "Kebenaran seluruh ayat jurnal debit/kredit (25%)"
    ],
    "answerGuide": "1. Jurnal Penerbitan Wesel (1 Sept 2026):\n(D) Kas ................................... Rp 570.000.000\n(D) Diskonto Wesel Bayar .................. Rp 30.000.000\n    (K) Wesel Bayar ................................... Rp 600.000.000\n\n2. Jurnal Penyesuaian 31 Des 2026 (4 bulan: Sept - Des):\nAmortisasi Diskonto = Rp 30.000.000 × (4 / 6) = Rp 20.000.000.\n(D) Beban Bunga ........................... Rp 20.000.000\n    (K) Diskonto Wesel Bayar .......................... Rp 20.000.000\n\n3. Perhitungan Bonus Eksekutif:\n• B = 0,08 × (800 jt - B - P)\n• P = 0,22 × (800 jt - B)\nSubstitusi P:\nB = 0,08 × [800 jt - B - 0,22(800 jt - B)]\nB = 0,08 × [800 jt - B - 176 jt + 0,22B]\nB = 0,08 × [624 jt - 0,78B] = 49.920.000 - 0,0624B\n1,0624B = 49.920.000 -> Bonus (B) = Rp 46.987.952.\n\nJurnal Akrual Bonus 31 Des 2026:\n(D) Beban Bonus Karyawan .................. Rp 46.987.952\n    (K) Utang Bonus Karyawan .......................... Rp 46.987.952"
  },
  {
    "type": "calculation",
    "scope": "TM 7: Provisi Garansi Produk (Assurance vs Service) PSAK 57 & IFRS 15",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 7: Garansi Jaminan (Assurance) vs Garansi Jasa Tambahan (Service-Type Warranty)",
    "context": "PT Samsung Elektronik menjual 5.000 unit smartphone seharga Rp 6.000.000 per unit secara tunai. Penjualan mencakup garansi cacat pabrik 1 tahun (Assurance-type warranty) dengan estimasi biaya klaim 3% dari penjualan. Selain itu, 1.000 pelanggan membeli garansi perpanjangan servis 2 tahun tambahan (Service-type warranty) seharga Rp 500.000 per unit secara tunai. Klaim aktual garansi assurance sepanjang tahun pertama adalah Rp 75.000.000 tunai.",
    "data": [
      "Penjualan Handphone: 5.000 unit × Rp 6.000.000 = Rp 30.000.000.000.",
      "Estimasi Biaya Garansi Assurance: 3% × Rp 30.000.000.000 = Rp 900.000.000.",
      "Klaim Garansi Assurance Aktual: Rp 75.000.000.",
      "Penjualan Garansi Servis Tambahan: 1.000 unit × Rp 500.000 = Rp 500.000.000 (Masa lindung tahun ke-2 dan ke-3)."
    ],
    "instructions": [
      "Buat ayat jurnal pencatatan penjualan handphone dan pengakuan garansi assurance.",
      "Buat ayat jurnal pembayaran klaim garansi aktual sepanjang tahun pertama.",
      "Buat ayat jurnal penerimaan kas dari penjualan garansi service-type tambahan.",
      "Tentukan penyajian saldo provisi garansi dan pendapatan garansi tangguhan di neraca akhir tahun pertama."
    ],
    "outputFormat": [
      "Ayat Jurnal Penjualan & Garansi Assurance",
      "Ayat Jurnal Pembayaran Klaim",
      "Ayat Jurnal Garansi Servis IFRS 15",
      "Penyajian Laporan Posisi Keuangan"
    ],
    "rubric": [
      "Pembedaan tegas akuntansi assurance vs service warranty (35%)",
      "Kebenaran jurnal estimasi vs klaim aktual (35%)",
      "Penyajian neraca liabilitas lancar vs tidak lancar (30%)"
    ],
    "answerGuide": "1. Jurnal Penjualan & Pengakuan Provisi Garansi Assurance:\n(D) Kas .................................. Rp 30.000.000.000\n    (K) Pendapatan Penjualan .......................... Rp 30.000.000.000\n\n(D) Beban Garansi (Laba Rugi) ............. Rp 900.000.000\n    (K) Provisi Garansi Produk (Liabilitas Lancar) .... Rp 900.000.000\n\n2. Jurnal Pembayaran Klaim Garansi Aktual:\n(D) Provisi Garansi Produk ................ Rp 75.000.000\n    (K) Kas / Suku Cadang ............................. Rp 75.000.000\n(Saldo akhir Provisi Garansi di Neraca = 900 jt - 75 jt = Rp 825.000.000).\n\n3. Jurnal Penjualan Garansi Servis Tambahan (Service-Type - IFRS 15):\n(D) Kas .................................. Rp 500.000.000\n    (K) Pendapatan Garansi Ditangguhkan (Unearned) .... Rp 500.000.000\n(Pendapatan garansi ini baru diakui secara proporsional pada tahun ke-2 dan ke-3 saat periode layanan servis berjalan)."
  }
];

export const AKK202_BANK_UAS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 8: Evaluasi Komprehensif Terpadu Silabus Pra-UTS",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 8: Simulasi Ujian Master Komprehensif Pra-UTS PT Petrokimia Nusantara",
    "context": "PT Petrokimia Nusantara menyajikan 3 transaksi strategis tahun 2026: (1) 1 Jan: Pembelian tanah & gedung lump-sum Rp 4 M (Tanah Rp 3,2 M, Gedung Rp 800 jt); (2) 1 April s.d. 31 Des: Konstruksi mandiri dermaga pabrik dengan pengeluaran Rp 1,5 M (WAAE Rp 900 jt, Pinjaman khusus 11% Rp 1 M); (3) 31 Des: Uji penurunan nilai atas lini produk amonia (Nilai buku Rp 800 jt, Nilai wajar dikurangi biaya jual Rp 650 jt, Nilai pakai Rp 700 jt).",
    "data": [
      "Lump-Sum: Kas Rp 4.000.000.000, Gedung lama langsung dihancurkan dengan biaya bersih Rp 100 jt.",
      "Konstruksi: WAAE Rp 900.000.000, Pinjaman khusus Rp 1 M @ 11%.",
      "Impairment: Nilai Buku Rp 800 jt, Recoverable Amount = MAX(650 jt, 700 jt) = Rp 700 jt."
    ],
    "instructions": [
      "Tentukan nilai perolehan akun Tanah dari transaksi lump-sum dan pembongkaran.",
      "Hitung bunga yang wajib dikapitalisasi ke dermaga pabrik tahun 2026.",
      "Hitung rugi penurunan nilai aset amonia dan buat ayat jurnal penyesuaiannya."
    ],
    "outputFormat": [
      "Kalkulasi Aset Tanah",
      "Kalkulasi Bunga Konstruksi",
      "Jurnal Impairment Aset"
    ],
    "rubric": [
      "Kapitalisasi 100% biaya lump-sum + bongkar ke Tanah (30%)",
      "Kalkulasi WAAE dan Avoidable Interest (900 jt × 11% = 99 jt) (35%)",
      "Penentuan recoverable amount dan jurnal impairment 100 jt (35%)"
    ],
    "answerGuide": "1. Nilai Perolehan Tanah:\nKarena gedung lama langsung dibongkar untuk proyek dermaga, seluruh harga beli awal dan biaya bersih pembongkaran masuk ke Tanah:\nNilai Tanah = Rp 4.000.000.000 + Rp 100.000.000 = Rp 4.100.000.000.\n\n2. Bunga Konstruksi PSAK 26:\nWAAE = Rp 900.000.000.\nSeluruh WAAE ditutup oleh Pinjaman Khusus Konstruksi 11%.\nBunga yang Dikapitalisasi = Rp 900.000.000 × 11% = Rp 99.000.000.\n(D) Dermaga Dalam Konstruksi ............ Rp 99.000.000\n    (K) Kas / Utang Bunga ............................. Rp 99.000.000\n\n3. Uji Impairment Lini Amonia:\nRecoverable Amount = MAX(FVLCD Rp 650 jt, Value in Use Rp 700 jt) = Rp 700.000.000.\nRugi Penurunan Nilai = Nilai Buku (Rp 800 jt) - Recoverable Amount (Rp 700 jt) = Rp 100.000.000.\n(D) Rugi Penurunan Nilai (Laba Rugi) .... Rp 100.000.000\n    (K) Akumulasi Penurunan Nilai Aset Pabrik ......... Rp 100.000.000"
  },
  {
    "type": "calculation",
    "scope": "TM 9: Amortisasi Suku Bunga Efektif & Bunga Berjalan PSAK 71",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 9: Amortisasi Obligasi Diskonto & Penjualan di Antara Tanggal Bunga",
    "context": "Pada 1 Maret 2026, PT Telkom menerbitkan obligasi 9% senilai nominal Rp 2.000.000.000 yang bertanggal 1 Januari 2026 dan jatuh tempo 5 tahun. Bunga kupon dibayarkan semesteran setiap 1 Juli dan 1 Januari. Obligasi diterbitkan pada harga 98 ditambah bunga berjalan (accrued interest) 2 bulan. Suku bunga pasar efektif adalah 10%. Biaya penerbitan obligasi dibayar tunai Rp 20.000.000.",
    "data": [
      "Nominal: Rp 2.000.000.000. Kupon 9% per tahun (Rp 90 jt per semester).",
      "Harga Kurs Pokok: 98% × Rp 2 M = Rp 1.960.000.000.",
      "Bunga Berjalan 2 bulan (Jan-Feb): Rp 2 M × 9% × (2/12) = Rp 30.000.000.",
      "Biaya Penerbitan: Rp 20.000.000 (mengurangi carrying amount awal sesuai PSAK 71)."
    ],
    "instructions": [
      "Hitung total kas yang diterima dari investor pada 1 Maret 2026.",
      "Buat ayat jurnal penerbitan obligasi pada 1 Maret 2026.",
      "Buat ayat jurnal pembayaran kupon bunga pertama pada 1 Juli 2026."
    ],
    "outputFormat": [
      "Kalkulasi Kas Diterima & Bunga Berjalan",
      "Jurnal Penerbitan 1 Maret 2026",
      "Jurnal Pembayaran Bunga 1 Juli 2026"
    ],
    "rubric": [
      "Kalkulasi bunga berjalan 2 bulan (30%)",
      "Pencatatan biaya emisi yang menambah diskonto/mengurangi nilai tercatat (35%)",
      "Jurnal pembayaran bunga kupon semester 1 Juli (35%)"
    ],
    "answerGuide": "1. Kalkulasi Kas Diterima (1 Maret 2026):\nHarga Jual Pokok Obligasi (98%) = Rp 1.960.000.000\nBunga Berjalan (2 bulan) = Rp 2.000.000.000 × 9% × (2/12) = Rp 30.000.000\nTotal Kas Diterima dari Pembeli = Rp 1.990.000.000\nDikurangi Biaya Penerbitan Obligasi = (Rp 20.000.000)\nKas Bersih yang Diterima Perusahaan = Rp 1.970.000.000.\n\n2. Jurnal Penerbitan Obligasi (1 Maret 2026):\nDiskonto Awal = Nominal (Rp 2 M) - Harga Jual (Rp 1.960 jt) = Rp 40.000.000.\nDitambah Biaya Penerbitan = Rp 20.000.000 -> Total Diskonto Bersih = Rp 60.000.000.\n(D) Kas .................................. Rp 1.970.000.000\n(D) Diskonto Utang Obligasi .............. Rp 60.000.000\n    (K) Utang Obligasi (Face Value) ................... Rp 2.000.000.000\n    (K) Beban Bunga Obligasi (Bunga Berjalan) ......... Rp 30.000.000\n\n3. Jurnal Pembayaran Kupon Bunga Pertama (1 Juli 2026):\nKupon Bunga 6 Bulan Penuh = Rp 2.000.000.000 × 9% × (6/12) = Rp 90.000.000.\n(D) Beban Bunga Obligasi .................. Rp 90.000.000\n    (K) Kas ........................................... Rp 90.000.000\n(Beban bunga bersih riil perusahaan untuk 4 bulan pemakaian dana = Rp 90 jt - Rp 30 jt = Rp 60 jt!)."
  },
  {
    "type": "calculation",
    "scope": "TM 10: Pelunasan Dini Obligasi & Restrukturisasi Utang Swap IFRIC 19",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–35 menit",
    "question": "Studi Kasus 10: Pelunasan Dini Obligasi Kurs 103 & Debt-for-Equity Swap",
    "context": "PT Adhi Karya memiliki obligasi beredar nominal Rp 1.000.000.000 dengan saldo diskonto yang belum diamortisasi sebesar Rp 45.000.000 (Carrying value = Rp 955.000.000). Pada 1 Juli 2026, perusahaan melunasi seluruh obligasi pada kurs 103 tunai. Di samping itu, PT Adhi Karya menyelesaikan utang wesel bank macet Rp 1.500.000.000 dengan menerbitkan 100.000 lembar saham biasa (par Rp 5.000, nilai wajar pasar Rp 11.000/lembar).",
    "data": [
      "Obligasi: Nominal Rp 1.000.000.000, Diskonto Belum Diamortisasi Rp 45.000.000, Kurs Beli Kembali 103 (Rp 1.030.000.000).",
      "Debt-for-Equity Swap: Utang Bank Rp 1.500.000.000, Saham Diterbitkan 100.000 lembar @ Nilai Wajar Rp 11.000 (Rp 1.100.000.000)."
    ],
    "instructions": [
      "Hitung keuntungan/kerugian pelunasan dini obligasi dan buat ayat jurnalnya.",
      "Hitung keuntungan restrukturisasi utang saham dan buat ayat jurnal swap sesuai IFRIC 19."
    ],
    "outputFormat": [
      "Kalkulasi Gain/Loss Pelunasan Obligasi & Jurnal",
      "Kalkulasi Gain on Debt Restructuring & Jurnal"
    ],
    "rubric": [
      "Perhitungan rugi pelunasan dini obligasi (1.030 jt - 955 jt = 75 jt) (50%)",
      "Perhitungan laba swap utang saham (1.500 jt - 1.100 jt = 400 jt) (50%)"
    ],
    "answerGuide": "1. Pelunasan Dini Obligasi:\nHarga Beli Kembali (Reacquisition Price: 103% × Rp 1 M) = Rp 1.030.000.000\nNilai Tercatat Bersih (Carrying Value: Rp 1 M - Rp 45 jt) = Rp 955.000.000\nKerugian Pelunasan Dini Obligasi (Loss on Extinguishment) = Rp 75.000.000.\n\nJurnal Pelunasan Obligasi:\n(D) Utang Obligasi (Nominal) .............. Rp 1.000.000.000\n(D) Rugi Pelunasan Dini Obligasi .......... Rp 75.000.000\n    (K) Diskonto Utang Obligasi ....................... Rp 45.000.000\n    (K) Kas ........................................... Rp 1.030.000.000\n\n2. Penyelesaian Utang dengan Saham (Debt-for-Equity Swap - IFRIC 19):\nNilai Wajar Saham Diterbitkan (100.000 × Rp 11.000) = Rp 1.100.000.000\nModal Saham Biasa (100.000 × Rp 5.000 par) = Rp 500.000.000\nAgio Saham Biasa = Rp 1.100 jt - Rp 500 jt = Rp 600.000.000\nKeuntungan Restrukturisasi Utang = Rp 1.500 jt - Rp 1.100 jt = Rp 400.000.000.\n\nJurnal Swap Utang ke Saham:\n(D) Utang Wesel Bank ...................... Rp 1.500.000.000\n    (K) Modal Saham Biasa ............................. Rp 500.000.000\n    (K) Agio Saham Biasa .............................. Rp 600.000.000\n    (K) Keuntungan Pelunasan Utang (Laba Rugi) ........ Rp 400.000.000"
  },
  {
    "type": "calculation",
    "scope": "TM 11: Saham Treasuri (Cost Method) & Dividen Properti PSAK 50",
    "difficulty": "Menengah",
    "estimatedTime": "25–35 menit",
    "question": "Studi Kasus 11: Siklus Transaksi Saham Treasuri & Penyesuaian Nilai Wajar Dividen Properti",
    "context": "PT Indah Kiat membeli kembali 20.000 lembar saham biasa (par Rp 1.000) seharga Rp 4.000/lembar (Cost Method). Selanjutnya: (1) Menjual 8.000 lembar seharga Rp 4.800/lembar tunai; (2) Menjual 10.000 lembar seharga Rp 3.200/lembar tunai; (3) Mengumumkan dividen properti berupa surat berharga saham PT ABC (nilai buku Rp 80 jt, nilai wajar pada tanggal pengumuman Rp 110 jt).",
    "data": [
      "Beli Treasuri: 20.000 lembar × Rp 4.000 = Rp 80.000.000.",
      "Jual 1 (Untung): 8.000 lembar × Rp 4.800 (Kos = Rp 4.000/lembar).",
      "Jual 2 (Defisit): 10.000 lembar × Rp 3.200 (Kos = Rp 4.000/lembar).",
      "Dividen Properti: Nilai buku Rp 80 jt, Nilai wajar Rp 110 jt."
    ],
    "instructions": [
      "Buat ayat jurnal pembelian saham treasuri.",
      "Buat ayat jurnal penjualan pertama dan penjualan kedua saham treasuri.",
      "Buat ayat jurnal pengumuman dan pembagian dividen properti."
    ],
    "outputFormat": [
      "Jurnal Pembelian & Penjualan Treasuri",
      "Jurnal Dividen Properti 2 Tahap"
    ],
    "rubric": [
      "Pencatatan Agio Saham Treasuri pada penjualan untung (30%)",
      "Pengurangan Agio Treasuri dan sisa ke Laba Ditahan saat defisit (35%)",
      "Revaluasi nilai wajar sebelum dividen properti diakui (35%)"
    ],
    "answerGuide": "1. Jurnal Pembelian Saham Treasuri:\n(D) Saham Treasuri ........................ Rp 80.000.000\n    (K) Kas ........................................... Rp 80.000.000\n\n2. Jurnal Penjualan 1 (8.000 lembar @ Rp 4.800, Kos Rp 4.000):\nKas = Rp 38.400.000; Kos Treasuri = Rp 32.000.000; Agio Treasuri = Rp 6.400.000.\n(D) Kas .................................. Rp 38.400.000\n    (K) Saham Treasuri ................................ Rp 32.000.000\n    (K) Agio Saham Treasuri ........................... Rp 6.400.000\n\n3. Jurnal Penjualan 2 (10.000 lembar @ Rp 3.200, Kos Rp 4.000):\nKas = Rp 32.000.000; Kos Treasuri = Rp 40.000.000; Defisit = Rp 8.000.000.\nTutup saldo Agio Treasuri yang ada (Rp 6.400.000), sisa defisit Rp 1.600.000 didebit ke Laba Ditahan!\n(D) Kas .................................. Rp 32.000.000\n(D) Agio Saham Treasuri .................. Rp 6.400.000\n(D) Laba Ditahan .......................... Rp 1.600.000\n    (K) Saham Treasuri ................................ Rp 40.000.000\n\n4. Jurnal Dividen Properti:\n• Tahap A (Penyesuaian Nilai Wajar Tanggal Pengumuman):\n(D) Investasi Saham PT ABC ................ Rp 30.000.000\n    (K) Keuntungan Kenaikan Nilai Wajar (Laba Rugi) ... Rp 30.000.000\n• Tahap B (Pencatatan Utang Dividen Properti):\n(D) Laba Ditahan .......................... Rp 110.000.000\n    (K) Utang Dividen Properti ........................ Rp 110.000.000\n• Tahap C (Pembagian):\n(D) Utang Dividen Properti ................ Rp 110.000.000\n    (K) Investasi Saham PT ABC ........................ Rp 110.000.000"
  },
  {
    "type": "calculation",
    "scope": "TM 12: Obligasi Konversi (Compound Instrument) & Waran Saham PSAK 50",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 12: Pemisahan Komponen Obligasi Konversi & Metode Buku Konversi",
    "context": "Pada 1 Januari 2026, PT Elang Mahkota menerbitkan 2.000 lembar obligasi konversi 5 tahun bernilai nominal Rp 1.000.000 per lembar (Total nominal Rp 2.000.000.000) dengan bunga kupon 7% dibayar tahunan tiap 31 Desember. Setiap lembar obligasi dapat dikonversi menjadi 200 lembar saham biasa (par Rp 1.000). Tingkat bunga pasar untuk obligasi non-konversi serupa adalah 9%. PV Single Sum (5 thn, 9%) = 0,64993; PV Annuity (5 thn, 9%) = 3,88965. Pada 31 Desember 2027 (setelah bunga tahun ke-2 dibayar), seluruh obligasi dikonversi menjadi saham biasa saat carrying value obligasi adalah Rp 1.897.400.000.",
    "data": [
      "Nominal: Rp 2.000.000.000. Kupon: 7% per tahun (Rp 140 jt/tahun). Suku Bunga Pasar: 9%.",
      "PV Komponen Liabilitas = (Rp 2 M × 0,64993) + (Rp 140 jt × 3,88965) = Rp 1.299.860.000 + Rp 544.551.000 = Rp 1.844.411.000.",
      "Komponen Ekuitas (Opsi Konversi) = Nilai Terbit (Rp 2 M) - PV Liabilitas (Rp 1.844.411.000) = Rp 155.589.000.",
      "Konversi 31 Des 2027: Carrying Value Obligasi = Rp 1.897.400.000. Saham diterbitkan = 2.000 × 200 = 400.000 lembar."
    ],
    "instructions": [
      "Hitung pemisahan nilai komponen liabilitas dan komponen ekuitas pada tanggal penerbitan 1 Januari 2026.",
      "Buat ayat jurnal penerbitan obligasi konversi 1 Januari 2026.",
      "Buat ayat jurnal konversi obligasi menjadi saham biasa per 31 Desember 2027 menggunakan Metode Nilai Buku (Book Value Method)."
    ],
    "outputFormat": [
      "Kalkulasi Pemisahan Residual Method",
      "Jurnal Penerbitan 1 Jan 2026",
      "Jurnal Konversi 31 Des 2027"
    ],
    "rubric": [
      "Penentuan PV liabilitas pada suku bunga pasar non-konversi 9% (35%)",
      "Pengalokasian nilai residual ke Agio Saham - Opsi Konversi (35%)",
      "Jurnal konversi metode nilai buku tanpa pengakuan laba/rugi (30%)"
    ],
    "answerGuide": "1. Pemisahan Komponen Instrumen Majemuk (Residual Method):\nPV Pokok Obligasi (Rp 2.000.000.000 × 0,64993) = Rp 1.299.860.000\nPV Kupon Bunga (Rp 140.000.000 × 3,88965) = Rp 544.551.000\nNilai Wajar Komponen Liabilitas (PV Utang Obligasi) = Rp 1.844.411.000.\nDiskonto Obligasi = Rp 2.000.000.000 - Rp 1.844.411.000 = Rp 155.589.000.\nKomponen Ekuitas (Agio Saham - Opsi Konversi) = Rp 155.589.000.\n\n2. Jurnal Penerbitan Obligasi Konversi (1 Jan 2026):\n(D) Kas .................................. Rp 2.000.000.000\n(D) Diskonto Utang Obligasi .............. Rp 155.589.000\n    (K) Utang Obligasi (Nominal) ...................... Rp 2.000.000.000\n    (K) Agio Saham - Opsi Konversi (Ekuitas) .......... Rp 155.589.000\n\n3. Jurnal Konversi Saham (Book Value Method - 31 Des 2027):\nNilai Tercatat Bersih Obligasi = Rp 1.897.400.000 (Diskonto tersisa = 2 M - 1.897.400.000 = Rp 102.600.000).\nAgio Saham Opsi Konversi ditransfer = Rp 155.589.000.\nModal Saham Biasa Baru (400.000 lembar × Rp 1.000 par) = Rp 400.000.000.\nAgio Saham Biasa = Rp 1.897.400.000 + Rp 155.589.000 - Rp 400.000.000 = Rp 1.652.989.000.\n\n(D) Utang Obligasi ....................... Rp 2.000.000.000\n(D) Agio Saham - Opsi Konversi ........... Rp 155.589.000\n    (K) Diskonto Utang Obligasi ....................... Rp 102.600.000\n    (K) Modal Saham Biasa ............................. Rp 400.000.000\n    (K) Agio Saham Biasa .............................. Rp 1.652.989.000"
  },
  {
    "type": "calculation",
    "scope": "TM 13: Laba Per Saham (Basic & Diluted EPS) PSAK 56 / IAS 33",
    "difficulty": "Komprehensif",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 13: Perhitungan WASO Retrospektif, Basic EPS, dan Diluted EPS",
    "context": "PT Mayora Indah mencatat Laba Bersih tahun 2026 sebesar Rp 1.800.000.000. Saham preferen kumulatif 10% non-konversi nominal Rp 500.000.000 (dividen Rp 50 jt). Mutasi saham biasa: 1 Jan 400.000 lembar; 1 Mei terbit 120.000 lembar; 1 Juli stock split 2-for-1; 1 Nov beli treasuri 40.000 lembar. Sekuritas dilutif: Opsi saham 60.000 lembar @ eksekusi Rp 4.000 (harga pasar rata-rata Rp 5.000).",
    "data": [
      "Laba Bersih: Rp 1.800.000.000. Dividen Saham Preferen: Rp 50.000.000.",
      "Laba Bersih untuk Pemegang Saham Biasa = Rp 1.750.000.000.",
      "Opsi Saham: 60.000 lembar @ Rp 4.000. Harga Pasar Rata-rata: Rp 5.000."
    ],
    "instructions": [
      "Hitung Weighted Average Shares Outstanding (WASO) tahun 2026 dengan penyesuaian retrospektif stock split.",
      "Hitung Laba Per Saham Dasar (Basic EPS).",
      "Hitung efek tambahan saham dari opsi menggunakan Treasury Stock Method.",
      "Hitung Laba Per Saham Dilusian (Diluted EPS)."
    ],
    "outputFormat": [
      "Tabel Kalkulasi WASO",
      "Kalkulasi Basic EPS",
      "Kalkulasi Treasury Stock Method Opsi",
      "Kalkulasi Diluted EPS"
    ],
    "rubric": [
      "Penerapan faktor retrospektif stock split 2-for-1 ke seluruh transaksi sebelumnya (35%)",
      "Kalkulasi Basic EPS yang tepat (25%)",
      "Penerapan Treasury Stock Method pada opsi saham (25%)",
      "Kalkulasi Diluted EPS (15%)"
    ],
    "answerGuide": "1. Perhitungan WASO 2026:\n• 1 Jan s.d. 1 Mei (4 bln): 400.000 × 2 (split) × 4/12 = 266.667 lembar\n• 1 Mei s.d. 1 Nov (6 bln): (400.000 + 120.000 = 520.000) × 2 (split) × 6/12 = 520.000 lembar\n• 1 Nov s.d. 31 Des (2 bln): (1.040.000 - 40.000 = 1.000.000) × 2/12 = 166.667 lembar\nTotal WASO = 266.667 + 520.000 + 166.667 = 953.334 lembar.\n\n2. Basic EPS:\nBasic EPS = (Laba Bersih Rp 1.800 jt - Dividen Preferen Rp 50 jt) / 953.334 lembar\nBasic EPS = Rp 1.750.000.000 / 953.334 = Rp 1.835,66 per lembar.\n\n3. Tambahan Saham Opsi (Treasury Stock Method):\nKas Diterima dari Eksekusi = 60.000 × Rp 4.000 = Rp 240.000.000\nSaham Dibeli Kembali di Pasar = Rp 240.000.000 / Rp 5.000 = 48.000 lembar\nTambahan Lembar Saham Inkremental = 60.000 - 48.000 = 12.000 lembar.\n\n4. Diluted EPS:\nPenyebut Baru = 953.334 + 12.000 = 965.334 lembar.\nDiluted EPS = Rp 1.750.000.000 / 965.334 lembar = Rp 1.812,84 per lembar."
  },
  {
    "type": "calculation",
    "scope": "TM 14: Investasi Efek Utang FVOCI (Recycling) & Metode Ekuitas PSAK 71 & 15",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 14: Efek Utang FVOCI Amortisasi & Penjualan dengan Daur Ulang (Recycling)",
    "context": "Pada 1 Januari 2026, PT Saratoga membeli obligasi 7% PT Indika nominal Rp 1.000.000.000 seharga Rp 922.780.000 (yield 9%). Bunga dibayar tahunan tiap 31 Desember. Klasifikasi: FVOCI Efek Utang. Pada 31 Des 2026, kupon diterima Rp 70 jt, beban bunga efektif Rp 83.050.000 (amortisasi diskonto Rp 13.050.000). Nilai wajar pasar per 31 Des 2026 adalah Rp 945.000.000. Pada 1 April 2027, seluruh obligasi dijual seharga Rp 960.000.000.",
    "data": [
      "Harga Beli Awal 1 Jan 2026: Rp 922.780.000.",
      "Kupon Bunga 31 Des 2026: Rp 70.000.000. Pendapatan Bunga Efektif: Rp 83.050.000.",
      "Nilai Buku sebelum Penyesuaian Nilai Wajar: Rp 935.830.000.",
      "Nilai Wajar Pasar 31 Des 2026: Rp 945.000.000 (Gain OCI = Rp 9.170.000).",
      "Harga Jual 1 April 2027: Rp 960.000.000."
    ],
    "instructions": [
      "Buat jurnal penerimaan bunga dan amortisasi suku bunga efektif per 31 Desember 2026.",
      "Buat jurnal penyesuaian nilai wajar obligasi ke OCI per 31 Desember 2026.",
      "Buat ayat jurnal penjualan obligasi pada 1 April 2027 dan RECYCLING saldo OCI ke Laba Rugi."
    ],
    "outputFormat": [
      "Jurnal Bunga & Amortisasi 2026",
      "Jurnal Penyesuaian Nilai Wajar OCI",
      "Jurnal Penjualan & Daur Ulang OCI"
    ],
    "rubric": [
      "Kalkulasi pendapatan bunga efektif di laba rugi (30%)",
      "Pencatatan keuntungan belum terealisasi di pos OCI (35%)",
      "Pencatatan daur ulang (recycling) akumulasi OCI saat pelepasan (35%)"
    ],
    "answerGuide": "1. Jurnal Bunga & Amortisasi Efektif (31 Des 2026):\n(D) Kas .................................. Rp 70.000.000\n(D) Investasi Efek Utang - FVOCI .......... Rp 13.050.000\n    (K) Pendapatan Bunga (Laba Rugi) .................. Rp 83.050.000\n\n2. Jurnal Penyesuaian Nilai Wajar FVOCI (31 Des 2026):\nNilai Tercatat Baru = Rp 922.780.000 + Rp 13.050.000 = Rp 935.830.000.\nNilai Wajar Pasar = Rp 945.000.000.\nKeuntungan Belum Terealisasi (OCI) = Rp 945 jt - Rp 935.830.000 = Rp 9.170.000.\n(D) Penyesuaian Nilai Wajar - FVOCI ........ Rp 9.170.000\n    (K) Keuntungan Belum Terealisasi - OCI ............ Rp 9.170.000\n\n3. Jurnal Penjualan & Daur Ulang (Recycling - 1 April 2027):\nKas Diterima = Rp 960.000.000.\nNilai Buku Terakhir = Rp 945.000.000.\nKeuntungan Penjualan yang Diakui di Laba Rugi = (960 jt - 945 jt) + Tutup OCI (9.170.000) = Rp 24.170.000!\n\n(D) Kas .................................. Rp 960.000.000\n(D) Keuntungan Belum Terealisasi - OCI ... Rp 9.170.000\n    (K) Investasi Efek Utang - FVOCI .................. Rp 945.000.000\n    (K) Keuntungan Penjualan Investasi (Laba Rugi) .... Rp 24.170.000"
  }
];

export const AKK202_BANK: BankSoal[] = [...AKK202_BANK_UTS, ...AKK202_BANK_UAS];
