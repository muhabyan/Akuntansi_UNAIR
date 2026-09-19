// =============================================================
// src/data/banksoal/akk202.ts
// Bank Soal Esai & Kasus Komprehensif Akuntansi Keuangan Menengah II (AKK202)
// Berdasarkan Kieso Intermediate Accounting IFRS 5e & PSAK/ISAK IAI.
// 14 Kasus (8 Kasus Pra-UTS, TM 6 memuat Studi Kasus 6 dan 6B, & 6 Kasus Pra-UAS TM 9-14); kasus TM 8 (review UTS lama) dihapus.
// Pra-UTS (TM 1-7) hanya memakai bacaan kanonik src/data/akm2/modules/tm1.ts-tm7.ts.
// =============================================================
import type { BankSoal } from '../../types';

export const AKK202_BANK_UTS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 1: Biaya Perolehan, Pembelian Lump-Sum & Provisi Restorasi",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 1: Lump-Sum PT Surya Prima, Mesin PT Semen Gresik, dan Fasilitas Tambang PT Borneo Mineral",
    "context": "Tiga transaksi perolehan aset tetap dari materi TM1 menguji dasar pengukuran awal: alokasi harga gabungan menurut niat manajemen, pemilahan biaya yang dikapitalisasi dari beban, dan kapitalisasi nilai kini kewajiban restorasi. Gunakan hanya data yang diberikan.",
    "data": [
      "PT Surya Prima membeli tanah dan gedung tua secara lump-sum Rp2.400.000.000 ditambah biaya notaris dan legal Rp60.000.000. Nilai wajar penilai: tanah Rp2.100.000.000 (70%) dan gedung Rp900.000.000 (30%).",
      "Skenario A: gedung direnovasi ringan dan langsung dipakai sebagai kantor. Skenario B: tanah dibeli untuk membangun pabrik baru; gedung diratakan dengan biaya Rp120.000.000 dan puingnya terjual Rp25.000.000.",
      "PT Semen Gresik: harga faktur mesin Rp800.000.000 dengan diskon tunai 2% dimanfaatkan; bea masuk Rp45.000.000; angkut Rp25.000.000; pondasi khusus Rp35.000.000; pengujian Rp15.000.000; pelatihan operator Rp12.000.000; peresmian Rp8.000.000.",
      "PT Borneo Mineral, 2 Januari 2026: biaya konstruksi tunai instalasi tambang Rp8.000.000.000, umur 5 tahun. Estimasi biaya pembongkaran dan restorasi di akhir tahun ke-5 Rp1.500.000.000; tingkat diskonto 10% (faktor PV n=5, i=10% = 0,62092)."
    ],
    "instructions": [
      "Hitung alokasi biaya perolehan PT Surya Prima pada Skenario A dan Skenario B, lalu susun jurnalnya. Jelaskan mengapa niat manajemen mengubah hasilnya.",
      "Tentukan biaya perolehan mesin PT Semen Gresik dan pisahkan biaya yang dibebankan. Susun jurnal pencatatannya.",
      "Hitung nilai kini provisi restorasi dan biaya perolehan awal fasilitas PT Borneo Mineral, lalu jurnal 2 Januari 2026.",
      "Hitung beban depresiasi dan beban bunga unwinding of discount tahun 2026 serta jurnal penyesuaian 31 Desember 2026."
    ],
    "outputFormat": [
      "Tabel alokasi lump-sum Skenario A dan perhitungan Tanah Skenario B",
      "Perhitungan biaya perolehan mesin dan daftar biaya periode",
      "Perhitungan PV provisi restorasi dan biaya perolehan fasilitas",
      "Jurnal perolehan dan jurnal penyesuaian 31 Desember 2026"
    ],
    "rubric": [
      "Ketepatan alokasi nilai wajar relatif vs kapitalisasi penuh ke Tanah",
      "Pemisahan biaya atribusi langsung dari biaya pelatihan dan peresmian",
      "Kapitalisasi PV provisi dan perhitungan unwinding of discount",
      "Keseimbangan seluruh jurnal"
    ],
    "answerGuide": "1. Skenario A: total biaya Rp2.400.000.000 + Rp60.000.000 = Rp2.460.000.000 dialokasikan dengan nilai wajar relatif: Tanah 70% × Rp2.460.000.000 = Rp1.722.000.000; Bangunan 30% × Rp2.460.000.000 = Rp738.000.000. Jurnal: Dr Tanah Rp1.722.000.000, Dr Bangunan Rp738.000.000, Cr Kas Rp2.460.000.000. Skenario B: karena gedung dibeli untuk dibongkar, seluruh Rp2.460.000.000 masuk Tanah, ditambah biaya bersih pembongkaran Rp120.000.000 − Rp25.000.000 = Rp95.000.000, sehingga Tanah Rp2.555.000.000. Jurnal: Dr Tanah Rp2.460.000.000, Cr Kas Rp2.460.000.000; Dr Tanah Rp95.000.000 dan Dr Kas (hasil puing) Rp25.000.000, Cr Kas (kontraktor) Rp120.000.000. Niat membangun fasilitas baru menjadikan pembongkaran sebagai biaya persiapan lahan. 2. Harga beli bersih = Rp800.000.000 − Rp16.000.000 = Rp784.000.000; biaya atribusi langsung = Rp45.000.000 + Rp25.000.000 + Rp35.000.000 + Rp15.000.000 = Rp120.000.000; biaya perolehan mesin Rp904.000.000. Pelatihan Rp12.000.000 dan peresmian Rp8.000.000 dibebankan karena tidak membawa mesin ke kondisi siap digunakan. Jurnal: Dr Mesin Rp904.000.000, Dr Beban Pelatihan Rp12.000.000, Dr Beban Peresmian Rp8.000.000, Cr Kas/Utang Usaha Rp924.000.000. 3. PV provisi = Rp1.500.000.000 × 0,62092 = Rp931.380.000; biaya perolehan fasilitas = Rp8.000.000.000 + Rp931.380.000 = Rp8.931.380.000. Jurnal 2 Januari 2026: Dr Instalasi Fasilitas Tambang Rp8.931.380.000, Cr Kas Rp8.000.000.000, Cr Provisi Pembongkaran dan Restorasi Rp931.380.000. 4. Depresiasi 2026 = Rp8.931.380.000 / 5 = Rp1.786.276.000; unwinding of discount = 10% × Rp931.380.000 = Rp93.138.000. Jurnal 31 Desember 2026: Dr Beban Depresiasi Rp1.786.276.000, Cr Akumulasi Depresiasi Rp1.786.276.000; Dr Beban Bunga Rp93.138.000, Cr Provisi Pembongkaran dan Restorasi Rp93.138.000. Saldo provisi terus naik sampai Rp1.500.000.000 pada akhir tahun ke-5."
  },
  {
    "type": "case",
    "scope": "TM 2: Disposisi, Penggantian Komponen & Pertukaran Aset Nonmoneter",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 2: Penjualan Mesin Barret Group dan Pertukaran Peralatan Santana SA–Delaware Co. (E9.19)",
    "context": "Barret Group menjual mesin di tengah tahun, sedangkan Santana SA dan Delaware Co. saling menukar peralatan (Kieso E9.19). Kasus ini menguji pembaruan depresiasi sebelum pelepasan dan pengaruh substansi komersial terhadap basis aset baru serta gain atau loss.",
    "data": [
      "Barret Group: mesin cost €18.000, depresiasi garis lurus €1.200 per tahun, akumulasi depresiasi akhir tahun ke-9 €10.800. Dijual tunai €7.000 pada 1 Juli tahun ke-10.",
      "Santana SA: peralatan cost R$28.000, akumulasi depresiasi R$19.000, nilai wajar R$13.500; Santana membayar kas R$2.000.",
      "Delaware Co.: peralatan cost R$28.000, akumulasi depresiasi R$10.000, nilai wajar R$15.500; Delaware menerima kas R$2.000.",
      "Skenario A: pertukaran tidak memiliki substansi komersial. Skenario B: pertukaran memiliki substansi komersial."
    ],
    "instructions": [
      "Catat pembaruan depresiasi Barret Group sampai 1 Juli tahun ke-10, hitung nilai buku dan gain atau loss, lalu jurnal penjualannya.",
      "Hitung nilai buku, selisih nilai wajar dengan nilai buku, basis aset baru, serta gain atau loss Santana dan Delaware pada Skenario A dan B.",
      "Susun jurnal pertukaran kedua entitas untuk kedua skenario.",
      "Jelaskan bagaimana potensi loss Delaware pada Skenario A dievaluasi."
    ],
    "outputFormat": [
      "Perhitungan depresiasi parsial, nilai buku, dan gain Barret",
      "Tabel perbandingan Santana vs Delaware untuk Skenario A dan B",
      "Jurnal pertukaran empat kombinasi entitas dan skenario",
      "Penjelasan singkat perlakuan potensi penurunan nilai"
    ],
    "rubric": [
      "Depresiasi diperbarui sebelum gain atau loss dihitung",
      "Tidak ada gain maupun loss pada pertukaran tanpa substansi komersial",
      "Basis aset baru memperhitungkan kas dibayar atau diterima",
      "Keseimbangan setiap jurnal"
    ],
    "answerGuide": "1. Barret: depresiasi 6 bulan = €1.200 × 6/12 = €600 (Dr Depreciation Expense €600, Cr Accumulated Depreciation—Machinery €600). Akumulasi depresiasi €10.800 + €600 = €11.400; nilai buku €18.000 − €11.400 = €6.600; gain = €7.000 − €6.600 = €400. Jurnal: Dr Cash €7.000, Dr Accumulated Depreciation—Machinery €11.400, Cr Machinery €18.000, Cr Gain on Disposal of Machinery €400. 2. Santana: nilai buku R$28.000 − R$19.000 = R$9.000; potensi gain R$13.500 − R$9.000 = R$4.500. Delaware: nilai buku R$28.000 − R$10.000 = R$18.000; potensi loss R$18.000 − R$15.500 = R$2.500. Skenario A: basis Santana R$9.000 + R$2.000 = R$11.000 dan basis Delaware R$18.000 − R$2.000 = R$16.000, tanpa gain maupun loss. Skenario B: cost Santana R$13.500 + R$2.000 = R$15.500 dengan gain R$4.500; cost Delaware R$15.500 − R$2.000 = R$13.500 dengan loss R$2.500. 3. Skenario A Santana: Dr Equipment (New) R$11.000, Dr Accumulated Depreciation R$19.000, Cr Equipment (Old) R$28.000, Cr Cash R$2.000. Skenario A Delaware: Dr Cash R$2.000, Dr Equipment (New) R$16.000, Dr Accumulated Depreciation R$10.000, Cr Equipment (Old) R$28.000. Skenario B Santana: Dr Equipment (New) R$15.500, Dr Accumulated Depreciation R$19.000, Cr Equipment (Old) R$28.000, Cr Cash R$2.000, Cr Gain on Disposal of Equipment R$4.500. Skenario B Delaware: Dr Cash R$2.000, Dr Equipment (New) R$13.500, Dr Accumulated Depreciation R$10.000, Dr Loss on Disposal of Equipment R$2.500, Cr Equipment (Old) R$28.000. 4. Bila nilai wajar R$15.500 mengindikasikan penurunan nilai sebelum pertukaran, hal itu dievaluasi terpisah berdasarkan IAS 36 di TM impairment, bukan sebagai rugi pertukaran."
  },
  {
    "type": "case",
    "scope": "TM 3: Depresiasi Sebagian Periode & Impairment Aset Individual",
    "difficulty": "Komprehensif",
    "estimatedTime": "40–50 menit",
    "question": "Studi Kasus 3: Depresiasi Charleston, SA (P10.2) dan Impairment Pujols SpA (E10.18)",
    "context": "Charleston, SA membeli peralatan di tengah tahun dan membandingkan tiga metode depresiasi. Pujols SpA menguji penurunan nilai peralatannya lalu memulihkannya setahun kemudian. Kasus ini menguji perhitungan sebagian periode, straddling SYD, kaidah residu pada DDB, dan ceiling pemulihan.",
    "data": [
      "Charleston, SA: peralatan dibeli 1 Juni 2025 seharga €89.000; nilai residu €5.000; umur manfaat 7 tahun.",
      "Pujols SpA, 31 Desember 2025: cost peralatan €9.000.000; akumulasi depresiasi €1.000.000; value-in-use €7.000.000; fair value less costs of disposal €4.400.000; sisa umur 4 tahun; residu €0.",
      "Pujols SpA, 31 Desember 2026: recoverable amount €6.000.000."
    ],
    "instructions": [
      "Hitung beban depresiasi Charleston 2025 dan 2026 dengan metode garis lurus, SYD, dan DDB, lalu jurnal 31 Desember 2025 untuk ketiganya.",
      "Hitung carrying amount, recoverable amount, dan rugi penurunan nilai Pujols per 31 Desember 2025 serta jurnalnya.",
      "Hitung depresiasi Pujols 2026 atas dasar baru dan nilai tercatat sebelum pemulihan.",
      "Hitung ceiling pemulihan, jumlah pemulihan, dan jurnal 31 Desember 2026."
    ],
    "outputFormat": [
      "Tabel depresiasi tiga metode untuk 2025 dan 2026",
      "Jurnal 31 Desember 2025 Charleston",
      "Perhitungan impairment, depresiasi baru, dan ceiling Pujols",
      "Jurnal impairment, depresiasi, dan pemulihan Pujols"
    ],
    "rubric": [
      "Jumlah bulan pemakaian dan straddling service year SYD",
      "Residu diabaikan pada tarif DDB",
      "Recoverable amount sebagai nilai tertinggi FVLCD dan VIU",
      "Pemulihan dibatasi ceiling tanpa impairment"
    ],
    "answerGuide": "1. Dasar depresiasi Charleston = €89.000 − €5.000 = €84.000; periode 2025 = 7 bulan. Garis lurus: €84.000 ÷ 7 = €12.000 per tahun; 2025 = €12.000 × 7/12 = €7.000; 2026 = €12.000. SYD: S = 28; service year 1 = €84.000 × 7/28 = €21.000; service year 2 = €84.000 × 6/28 = €18.000; 2025 = €21.000 × 7/12 = €12.250; 2026 = (€21.000 × 5/12) + (€18.000 × 7/12) = €8.750 + €10.500 = €19.250. DDB: tarif 2/7, residu diabaikan; 2025 = €89.000 × 2/7 × 7/12 = €14.833,33 ≈ €14.833; nilai buku awal 2026 €74.166,67 × 2/7 = €21.190,48 ≈ €21.190. Jurnal 31 Desember 2025: Dr Depreciation Expense, Cr Accumulated Depreciation—Equipment sebesar €7.000 (garis lurus), €12.250 (SYD), atau €14.833 (DDB). 2. Pujols: carrying amount = €9.000.000 − €1.000.000 = €8.000.000; recoverable amount = max(€7.000.000, €4.400.000) = €7.000.000; rugi = €1.000.000. Jurnal: Dr Loss on Impairment €1.000.000, Cr Accumulated Depreciation—Equipment €1.000.000. 3. Depresiasi 2026 = €7.000.000 ÷ 4 = €1.750.000 (Dr Depreciation Expense, Cr Accumulated Depreciation—Equipment); nilai tercatat sebelum pemulihan €7.000.000 − €1.750.000 = €5.250.000. 4. Tanpa impairment, depresiasi = €8.000.000 ÷ 4 = €2.000.000 sehingga ceiling = €8.000.000 − €2.000.000 = €6.000.000. Recoverable amount €6.000.000 sama dengan ceiling, maka pemulihan = €6.000.000 − €5.250.000 = €750.000. Jurnal: Dr Accumulated Depreciation—Equipment €750.000, Cr Recovery of Impairment Loss €750.000; nilai tercatat akhir €6.000.000."
  },
  {
    "type": "case",
    "scope": "TM 4: Held for Use vs Held for Disposal & Revaluasi Tanah Multi-Periode",
    "difficulty": "Komprehensif",
    "estimatedTime": "40–50 menit",
    "question": "Studi Kasus 4: Peralatan Roland SE (P10.9) dan Tanah PT Mentari Jaya (Latsol UTS)",
    "context": "Roland SE menghadapi keusangan peralatan pengemasan dan harus membandingkan akuntansi aset yang tetap digunakan dengan aset yang dimiliki untuk dilepas. PT Mentari Jaya mengukur tanahnya dengan model revaluasi selama enam tahun. Nilai tanah dalam ribuan rupiah.",
    "data": [
      "Roland SE: peralatan dibeli Januari 2024 seharga €10.000.000, umur 8 tahun, residu €0, garis lurus €1.250.000 per tahun; nilai tercatat 31 Desember 2025 €7.500.000.",
      "Roland SE, 31 Desember 2025: VIU €5.300.000; FVLCD €5.600.000; sisa umur 4 tahun. Recoverable amount atau nilai realisasi neto 31 Desember 2026: €4.900.000.",
      "PT Mentari Jaya: tanah dibeli 2016 seharga Rp800.000. Nilai wajar 31 Desember: 2016 Rp800.000; 2017 Rp950.000; 2018 Rp700.000; 2019 Rp650.000; 2020 Rp780.000; 2021 Rp900.000."
    ],
    "instructions": [
      "Hitung rugi penurunan nilai Roland per 31 Desember 2025 dan jurnalnya.",
      "Susun jurnal 2026 bila (A) peralatan tetap digunakan dan (B) peralatan dimiliki untuk dilepas; untuk (A) periksa ceiling pemulihan.",
      "Susun skedul OCI, AOCI, dan laba rugi PT Mentari Jaya 2016–2021.",
      "Susun jurnal revaluasi tanah PT Mentari Jaya setiap tahun yang memerlukan jurnal."
    ],
    "outputFormat": [
      "Perhitungan recoverable amount dan rugi 2025",
      "Tabel kontras Kasus A vs Kasus B untuk 2026 beserta jurnal",
      "Skedul OCI, AOCI, dan laba rugi tanah",
      "Jurnal revaluasi tanah 2017–2021"
    ],
    "rubric": [
      "Depresiasi dihentikan untuk aset held for disposal",
      "Pemeriksaan ceiling pada aset held for use",
      "Penurunan tanah memakai AOCI dulu dan AOCI tidak negatif",
      "Pemulihan tanah memulihkan rugi laba rugi dulu sebelum OCI"
    ],
    "answerGuide": "1. Recoverable amount = max(€5.300.000, €5.600.000) = €5.600.000; rugi = €7.500.000 − €5.600.000 = €1.900.000. Jurnal (sama untuk A dan B): Dr Loss on Impairment €1.900.000, Cr Accumulated Depreciation—Equipment €1.900.000. 2. Kasus A (held for use): depresiasi 2026 = €5.600.000 ÷ 4 = €1.400.000 (Dr Depreciation Expense, Cr Accumulated Depreciation—Equipment), nilai tercatat €4.200.000. Ceiling = €10.000.000 − (3 × €1.250.000) = €6.250.000 tidak terlampaui, sehingga pemulihan = €4.900.000 − €4.200.000 = €700.000: Dr Accumulated Depreciation—Equipment €700.000, Cr Recovery of Impairment Loss €700.000. Kasus B (held for disposal): tidak ada depresiasi, nilai tercatat tetap €5.600.000; penurunan ke €4.900.000 adalah rugi tambahan €700.000: Dr Loss on Impairment €700.000, Cr Accumulated Depreciation—Equipment €700.000. Nilai tercatat akhir kedua kasus €4.900.000. 3. Skedul Mentari Jaya: 2016 tanpa perubahan; 2017 OCI +Rp150.000, AOCI Rp150.000; 2018 OCI −Rp150.000, AOCI Rp0, laba rugi −Rp100.000; 2019 laba rugi −Rp50.000; 2020 laba rugi +Rp130.000; 2021 laba rugi +Rp20.000, OCI +Rp100.000, AOCI Rp100.000. 4. Jurnal: 2017 Dr Land Rp150.000, Cr Unrealized Gain on Revaluation—Land (OCI) Rp150.000. 2018 Dr Unrealized Gain on Revaluation—Land (OCI) Rp150.000, Dr Loss on Revaluation Rp100.000, Cr Land Rp250.000. 2019 Dr Loss on Revaluation Rp50.000, Cr Land Rp50.000. 2020 Dr Land Rp130.000, Cr Recovery of Prior Revaluation Loss Rp130.000. 2021 Dr Land Rp120.000, Cr Recovery of Prior Revaluation Loss Rp20.000, Cr Unrealized Gain on Revaluation—Land (OCI) Rp100.000."
  },
  {
    "type": "case",
    "scope": "TM 5: Goodwill, Impairment Hak Cipta & Biaya Pengembangan",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Studi Kasus 5: Goodwill Terrell Galleries (E11.12), Hak Cipta Botticelli (E11.14), dan R&D Dogwood Electronics (CA11.1)",
    "context": "Tiga soal dosen Kieso Bab 11 menguji pengukuran goodwill dari nilai wajar aset neto, impairment dan pemulihan aset tidak berwujud berumur terbatas, serta batas antara biaya riset, pengembangan, dan paten.",
    "data": [
      "Fred Graf membeli Terrell Galleries seharga $380.000. Nilai buku Terrell: Buildings (net) $200.000; Equipment (net) $175.000; Copyrights (net) $30.000; Land $70.000; Cash $100.000; Accounts payable $50.000; Long-term notes payable $300.000. Tanah undervalued $50.000; peralatan overvalued $5.000.",
      "Botticelli Company, 31 Desember 2025: hak cipta cost $8.600.000, nilai tercatat $4.300.000, recoverable amount $3.400.000, sisa umur 10 tahun; tidak memakai akun akumulasi amortisasi. Nilai wajar 31 Desember 2026: $3.500.000.",
      "Dogwood Electronics: 1 Maret biaya legal dan pemrosesan paten €10.000; 5 April laboratorium dan bahan €23.000; 15 Mei prototipe dan pengujian €34.000; 1 Juni viabilitas ekonomi tercapai (kontrak pasti); 30 Juni pengembangan akhir €45.000."
    ],
    "instructions": [
      "Hitung aset neto teridentifikasi pada nilai wajar dan goodwill Terrell, lalu jurnal pembelian di buku Graf.",
      "Catat impairment hak cipta Botticelli 2025, amortisasi 2026, dan pemulihan 2026 dengan memeriksa ceiling.",
      "Klasifikasikan setiap biaya Dogwood sebagai beban atau kapitalisasi dan jurnalnya.",
      "Jelaskan dampak perlakuan Dogwood terhadap laporan keuangan kini dan mendatang."
    ],
    "outputFormat": [
      "Perhitungan goodwill dan jurnal pembelian",
      "Tabel impairment, amortisasi, ceiling, dan pemulihan Botticelli",
      "Jadwal biaya Dogwood dibebankan vs dikapitalisasi",
      "Analisis dampak laporan keuangan"
    ],
    "rubric": [
      "Aset dan liabilitas diukur pada nilai wajar sebelum goodwill dihitung",
      "Ceiling pemulihan hak cipta diperiksa",
      "Batas viabilitas ekonomi diterapkan tepat",
      "Keseimbangan setiap jurnal"
    ],
    "answerGuide": "1. Aset teridentifikasi pada nilai wajar = $200.000 + $170.000 + $30.000 + $120.000 + $100.000 = $620.000; aset neto = $620.000 − ($50.000 + $300.000) = $270.000; goodwill = $380.000 − $270.000 = $110.000. Jurnal: Dr Buildings $200.000, Dr Equipment $170.000, Dr Copyrights $30.000, Dr Land $120.000, Dr Cash $100.000, Dr Goodwill $110.000, Cr Accounts Payable $50.000, Cr Long-Term Notes Payable $300.000, Cr Cash $380.000. Goodwill tidak diamortisasi dan hanya diuji penurunan nilai setiap tahun. 2. Rugi impairment 2025 = $4.300.000 − $3.400.000 = $900.000: Dr Loss on Impairment $900.000, Cr Copyright $900.000. Amortisasi 2026 = $3.400.000 ÷ 10 = $340.000: Dr Amortization Expense $340.000, Cr Copyright $340.000; nilai tercatat $3.060.000. Ceiling tanpa impairment = $4.300.000 − ($4.300.000 ÷ 10) = $3.870.000; nilai $3.500.000 di bawah ceiling, sehingga pemulihan = $3.500.000 − $3.060.000 = $440.000: Dr Copyright $440.000, Cr Recovery of Impairment Loss $440.000, dilaporkan di Other income and expense. 3. Dogwood: biaya legal paten €10.000 dikapitalisasi (Dr Patents €10.000, Cr Cash €10.000); laboratorium €23.000 (riset) dan prototipe €34.000 (sebelum viabilitas) dibebankan (Dr Research and Development Expense €57.000, Cr Cash €57.000); pengembangan akhir €45.000 setelah viabilitas dikapitalisasi (Dr Development Costs €45.000, Cr Cash €45.000). Total dibebankan €57.000 dan dikapitalisasi €55.000. 4. Laba periode berjalan turun €57.000 dan laporan posisi keuangan menyajikan aset tidak berwujud €55.000, yang diamortisasi selama umur manfaat sejak produk mulai dijual sehingga beban dicocokkan dengan pendapatan produk."
  },
  {
    "type": "case",
    "scope": "TM 6: Wesel Bayar, PPN Inklusif & Provisi Restorasi",
    "difficulty": "Menengah",
    "estimatedTime": "30–40 menit",
    "question": "Studi Kasus 6: Utang Usaha dan Wesel Darby Corporation (E12.2) serta Transaksi Schultz Department Store (P12.2)",
    "context": "Darby Corporation (metode bruto, sistem periodik) mengganti utang usaha dengan wesel berbunga dan meminjam dengan wesel tanpa bunga. Schultz Department Store mencatat deposit, penjualan dengan PPN inklusif, pembelian truk, dan kewajiban restorasi area parkir.",
    "data": [
      "Darby, 1 September 2025: membeli persediaan kredit dari Orion Company $50.000. 1 Oktober 2025: menerbitkan wesel 12 bulan bunga 8% $50.000 kepada Orion untuk melunasi utang usaha.",
      "Darby, 1 Oktober 2025: meminjam kas $75.000 dari Shore Bank dengan wesel tanpa bunga 12 bulan bernilai nominal $81.000.",
      "Schultz, 5 Desember: menerima deposit kas €500 dari Jackson Players yang akan dikembalikan 15 Januari. Selama Desember: penjualan tunai €798.000 sudah termasuk PPN 5%.",
      "Schultz, 10 Desember: membeli tunai 3 truk pengiriman €120.000 di yurisdiksi dengan PPN 5%. 31 Desember: biaya pemulihan area parkir saat toko ditutup 2 tahun lagi diperkirakan €100.000; nilai wajar liabilitas pemulihan €84.000."
    ],
    "instructions": [
      "Susun jurnal transaksi Darby dan jurnal penyesuaian 31 Desember 2025.",
      "Hitung liabilitas neto setiap wesel Darby per 31 Desember 2025.",
      "Susun jurnal Schultz untuk deposit, penjualan dengan PPN, pembelian truk (kedua alternatif perlakuan PPN), dan kewajiban restorasi.",
      "Tentukan klasifikasi provisi restorasi Schultz pada laporan posisi keuangan."
    ],
    "outputFormat": [
      "Jurnal transaksi dan penyesuaian Darby",
      "Tabel liabilitas neto wesel berbunga vs tanpa bunga",
      "Jurnal Schultz termasuk perhitungan PPN inklusif",
      "Klasifikasi provisi dan alasannya"
    ],
    "rubric": [
      "Diskonto wesel tanpa bunga dicatat sebagai kontra-liabilitas dan diamortisasi",
      "PPN dihitung dari harga termasuk pajak, bukan dikalikan langsung",
      "Kewajiban restorasi dikapitalisasi ke aset terkait",
      "Keseimbangan setiap jurnal"
    ],
    "answerGuide": "1. Darby: 1 September Dr Purchases $50.000, Cr Accounts Payable $50.000. 1 Oktober Dr Accounts Payable $50.000, Cr Notes Payable $50.000. 1 Oktober Dr Cash $75.000, Dr Discount on Notes Payable $6.000, Cr Notes Payable $81.000. Penyesuaian 31 Desember 2025: bunga Orion = $50.000 × 8% × 3/12 = $1.000 (Dr Interest Expense $1.000, Cr Interest Payable $1.000); amortisasi diskonto Shore Bank = $6.000 × 3/12 = $1.500 (Dr Interest Expense $1.500, Cr Discount on Notes Payable $1.500). 2. Wesel berbunga: Notes Payable $50.000 + Interest Payable $1.000 = $51.000. Wesel tanpa bunga: $81.000 − ($6.000 − $1.500) = $76.500, sama dengan kas $75.000 + bunga diakui $1.500; suku bunga implisit $6.000 ÷ $75.000 = 8%. 3. Schultz: (1) Dr Cash €500, Cr Refundable Deposits €500. (2) Sales Revenue = €798.000 ÷ 1,05 = €760.000; VAT Taxes Payable = €798.000 − €760.000 = €38.000: Dr Cash €798.000, Cr Sales Revenue €760.000, Cr VAT Taxes Payable €38.000. (3) Alternatif A (PPN dikapitalisasi): Dr Equipment (Delivery Trucks) €126.000, Cr Cash €126.000. Alternatif B (PPN masukan dapat dikreditkan): Dr Equipment (Delivery Trucks) €120.000, Dr VAT Taxes Recoverable €6.000, Cr Cash €126.000. (4) Dr Land Improvements (Parking Lot) €84.000, Cr Environmental Restoration Provision €84.000; biayanya dialokasikan melalui depresiasi. 4. Provisi €84.000 disajikan sebagai liabilitas jangka panjang karena penyelesaiannya baru terjadi 2 tahun lagi."
  },
  {
    "type": "case",
    "scope": "TM 6: Rantai PPN, Garansi Jaminan dan Jasa & Premi",
    "difficulty": "Komprehensif",
    "estimatedTime": "40–50 menit",
    "question": "Studi Kasus 6B: Rantai PPN (Illustration 12.2), Garansi Denson dan Hamlin (Example 12.6–12.7), serta Premi Fluffy Cake Mix (Example 12.8)",
    "context": "Empat contoh Kieso Bab 12 yang dibahas di TM6: PPN yang dipungut di setiap mata rantai dari produsen sampai pengecer, garansi jaminan dengan penyesuaian akhir tahun, garansi jasa yang dijual terpisah dari produknya, dan penawaran premi dengan estimasi tingkat penukaran.",
    "data": [
      "Rantai PPN, tarif 10%: Hill Farms Wheat menanam gandum dan menjualnya kepada Sunshine Baking seharga €1.000; Sunshine Baking membuat roti dan menjualnya kepada Halo Supermarket seharga €2.000; Halo Supermarket menjual roti kepada konsumen seharga €2.400. Semua penjualan diterima tunai.",
      "Denson Machinery Company: mulai Juli 2025 sampai akhir tahun menjual 100 mesin tunai seharga $5.000 per unit, masing-masing bergaransi jaminan 1 tahun. Estimasi biaya garansi $200 per unit. Biaya garansi aktual $4.000 pada 2025 dan $16.000 pada 2026.",
      "Hamlin Auto, 2 Januari 2025: menjual mobil seharga €30.000; biaya garansi jaminannya diestimasi €700 (36.000 km pertama atau 3 tahun). Pembeli juga membeli garansi jasa seharga €900 untuk tambahan 3 tahun atau 36.000 km (2028–2030); pendapatannya diakui secara garis lurus. Biaya garansi jaminan aktual €500 pada 2025 dan €100 pada 2026 dan 2027.",
      "Fluffy Cake Mix Ltd.: menjual adonan kue £3 per kotak; pelanggan dapat menukarkan £1 dan 10 tutup kotak dengan mangkuk pengaduk berharga perolehan £2; estimasi penukaran 60%. Program dimulai Juni 2025. Selama 2025 dibeli 20.000 mangkuk seharga £2, terjual 300.000 kotak, dan ditukarkan 60.000 tutup kotak."
    ],
    "instructions": [
      "Catat jurnal penjualan setiap entitas dalam rantai PPN, hitung PPN yang disetor masing-masing ke kantor pajak dan totalnya, lalu susun jurnal pembelian dan penyetoran PPN dengan label Interpretasi.",
      "Catat jurnal garansi Denson untuk 2025 dan 2026, lalu tentukan Warranty Expense 2025 dan saldo Warranty Liability per 31 Desember 2025 dan 2026.",
      "Catat jurnal Hamlin untuk penjualan 2 Januari 2025, biaya garansi jaminan 2025, penyesuaian 31 Desember 2025, dan pendapatan garansi jasa 2028; lalu susun skedul saldo Warranty Liability dan Unearned Warranty Revenue 2025–2030 dengan label Interpretasi.",
      "Catat seluruh jurnal premi Fluffy 2025, hitung Premium Liability per 31 Desember 2025, dan tentukan penyajian persediaan premi, Premium Liability, dan Premium Expense."
    ],
    "outputFormat": [
      "Jurnal penjualan tiga entitas dan tabel PPN dipungut, dikreditkan, dan disetor",
      "Jurnal pembelian dan penyetoran PPN berlabel Interpretasi",
      "Jurnal dan saldo garansi Denson serta Hamlin, termasuk skedul Interpretasi 2025–2030",
      "Perhitungan Premium Liability dan penyajian pos premi"
    ],
    "rubric": [
      "PPN disetor = PPN keluaran − PPN masukan; total disetor dibedakan dari total dipungut",
      "Biaya garansi aktual tahun penjualan didebit ke Warranty Expense, bukan Warranty Liability",
      "Garansi jasa dicatat di Unearned Warranty Revenue dan diakui garis lurus",
      "Biaya premi dihitung neto setelah kas yang dibayar pelanggan",
      "Jurnal yang tidak ditampilkan Kieso diberi label Interpretasi",
      "Keseimbangan setiap jurnal"
    ],
    "answerGuide": "1. Rantai PPN (Kieso p. 1028): Hill Farms Wheat Dr Cash €1.100, Cr Sales Revenue €1.000, Cr VAT Taxes Payable €100. Sunshine Baking Dr Cash €2.200, Cr Sales Revenue €2.000, Cr VAT Taxes Payable €200. Halo Supermarket Dr Cash €2.640, Cr Sales Revenue €2.400, Cr VAT Taxes Payable €240. Kieso menamai akun ini Value-Added Taxes Payable. PPN disetor = PPN keluaran − PPN masukan: Hill Farms €100 − €0 = €100; Sunshine €200 − €100 = €100; Halo €240 − €200 = €40. Total dipungut €540, dikreditkan €300, disetor €240, yang ditanggung konsumen akhir (Kieso Illustration 12.2, p. 1029). Interpretasi (Kieso pp. 1028–1029): Sunshine membeli gandum Dr Inventory €1.000, Dr VAT Taxes Recoverable €100, Cr Cash €1.100; Halo membeli roti Dr Inventory €2.000, Dr VAT Taxes Recoverable €200, Cr Cash €2.200. Penyetoran: Hill Farms Dr VAT Taxes Payable €100, Cr Cash €100; Sunshine Dr VAT Taxes Payable €200, Cr VAT Taxes Recoverable €100, Cr Cash €100; Halo Dr VAT Taxes Payable €240, Cr VAT Taxes Recoverable €200, Cr Cash €40. Hill Farms tidak memiliki PPN masukan karena menanam sendiri gandumnya. Kieso p. 1029 hanya menyebut bahwa entitas melacak kredit PPN dan menyesuaikan Inventory (atau Cost of Goods Sold) saat menyetor PPN, tanpa menampilkan jurnalnya; berapa pun akun yang dipakai, kas yang disetor tetap sama. 2. Denson (Kieso pp. 1041–1042): estimasi total = 100 × $200 = $20.000. Juli–Desember 2025: Dr Cash $500.000, Cr Sales Revenue $500.000; biaya aktual Dr Warranty Expense $4.000, Cr Cash, Inventory, Accrued Payroll $4.000, bukan ke Warranty Liability. 31 Desember 2025: Dr Warranty Expense $16.000, Cr Warranty Liability $16.000 ($20.000 − $4.000). Warranty Expense 2025 $20.000; Warranty Liability 31 Desember 2025 $16.000 (lancar). 2026: Dr Warranty Liability $16.000, Cr Cash, Inventory, Accrued Payroll $16.000; saldo 31 Desember 2026 $0. 3. Hamlin (Kieso p. 1044): 2 Januari 2025 Dr Cash €30.900, Cr Unearned Warranty Revenue €900, Cr Sales Revenue €30.000; kas dipisah berdasarkan harga yang dinyatakan terpisah, sedangkan alokasi berdasarkan harga jual berdiri sendiri relatif adalah materi pengakuan pendapatan dari bab lain. 2025: Dr Warranty Expense €500, Cr Cash, Inventory, Accrued Payroll €500. 31 Desember 2025: Dr Warranty Expense €200, Cr Warranty Liability €200; Warranty Expense 2025 €700 dan Warranty Liability €200. 31 Desember 2028: Dr Unearned Warranty Revenue €300, Cr Warranty Revenue €300 (€900 ÷ 3); biaya garansi jasa dibebankan saat terjadi selama 2028–2030. Interpretasi (Kieso p. 1044), dengan membaca biaya €100 sebagai €100 untuk masing-masing tahun 2026 dan 2027: 2026 dan 2027 masing-masing Dr Warranty Liability €100, Cr Cash, Inventory, Accrued Payroll €100; 31 Desember 2029 dan 31 Desember 2030 masing-masing Dr Unearned Warranty Revenue €300, Cr Warranty Revenue €300. Skedul 31 Desember: Warranty Liability €200 (2025), €100 (2026), €0 (2027–2030); Unearned Warranty Revenue €900 (2025–2027), €600 (2028), €300 (2029), €0 (2030). 4. Fluffy (Kieso pp. 1046–1047): Dr Inventory of Premiums £40.000, Cr Cash £40.000; Dr Cash £900.000, Cr Sales Revenue £900.000; penukaran 60.000 tutup kotak (6.000 mangkuk): Dr Cash £6.000, Dr Premium Expense £6.000, Cr Inventory of Premiums £12.000. Estimasi tutup ditukar = 300.000 × 60% = 180.000; biaya estimasi = 180.000 ÷ 10 × (£2 − £1) = £18.000; Premium Liability = £18.000 − £6.000 = £12.000: Dr Premium Expense £12.000, Cr Premium Liability £12.000. Penyajian 31 Desember 2025: Inventory of Premiums £28.000 (£40.000 − £12.000) sebagai aset lancar, Premium Liability £12.000 sebagai liabilitas jangka pendek, Premium Expense £18.000 sebagai beban penjualan. Mangkuk diasumsikan tidak material sehingga tidak dicatat sebagai kewajiban pelaksanaan terpisah."
  },
  {
    "type": "case",
    "scope": "TM 7: Penilaian Obligasi & Metode Bunga Efektif",
    "difficulty": "Komprehensif",
    "estimatedTime": "40–50 menit",
    "question": "Studi Kasus 7: Obligasi Semesteran Foreman Cleaners (E13.5) dan Skedul Amortisasi Spencer plc (E13.6)",
    "context": "Foreman Cleaners menerbitkan obligasi diskonto dengan bunga semesteran, sedangkan Spencer plc menjual obligasi di bawah nominal tanpa menyebut tarif efektifnya. Di bawah IFRS, diskonto dicatat neto langsung di Bonds Payable dan diamortisasi dengan metode bunga efektif.",
    "data": [
      "Foreman Cleaners: obligasi €800.000, kupon 10% per tahun dibayar setiap 1 Juli dan 1 Januari, jangka waktu 20 tahun, tertanggal 1 Januari 2025, dijual pada harga 84,95 untuk menghasilkan yield 12%.",
      "Spencer plc: obligasi 10% bernilai jatuh tempo £3.000.000 dijual seharga £2.783.724; tertanggal 1 Januari 2025, jatuh tempo 1 Januari 2030; bunga dibayar tahunan setiap 1 Januari.",
      "Faktor nilai kini 5 periode pada 12%: pokok 0,56743; anuitas 3,60478."
    ],
    "instructions": [
      "Catat penerbitan obligasi Foreman 1 Januari 2025, pembayaran bunga dan amortisasi 1 Juli 2025, serta akrual bunga dan amortisasi 31 Desember 2025.",
      "Buktikan tarif efektif obligasi Spencer dari harga jualnya.",
      "Susun skedul beban bunga dan amortisasi diskonto Spencer 2025–2030.",
      "Catat jurnal Spencer untuk penerbitan, akrual bunga 31 Desember 2025, pembayaran 1 Januari 2026, dan pelunasan saat jatuh tempo."
    ],
    "outputFormat": [
      "Skedul dan jurnal Foreman untuk 2025",
      "Pembuktian tarif efektif Spencer",
      "Skedul amortisasi Spencer lima periode",
      "Jurnal Spencer"
    ],
    "rubric": [
      "Tarif kupon dan tarif efektif dibagi dua untuk bunga semesteran",
      "Beban bunga dihitung dari nilai tercatat awal periode",
      "Amortisasi diskonto menambah Bonds Payable sampai nominal",
      "Pembulatan tahun terakhir diserap sehingga nilai tercatat tepat sama dengan nominal"
    ],
    "answerGuide": "1. Foreman: harga = 0,8495 × €800.000 = €679.600 (diskonto awal €120.400). Kupon semesteran = €800.000 × 10% ÷ 2 = €40.000; tarif efektif semesteran 6%. (a) 1 Januari 2025: Dr Cash €679.600, Cr Bonds Payable €679.600. (b) 1 Juli 2025: beban bunga €679.600 × 6% = €40.776; Dr Interest Expense €40.776, Cr Bonds Payable €776, Cr Cash €40.000; nilai tercatat €680.376. (c) 31 Desember 2025: beban bunga €680.376 × 6% = €40.822,56 ≈ €40.823; Dr Interest Expense €40.823, Cr Interest Payable €40.000, Cr Bonds Payable €823; nilai tercatat €681.199. 2. Pada 12%: £3.000.000 × 0,56743 + £300.000 × 3,60478 = £1.702.290 + £1.081.434 = £2.783.724, sama dengan harga jual; harga di bawah nominal konsisten dengan tarif efektif di atas kupon 10%. 3. Skedul (kas £300.000 per tahun; beban = nilai tercatat awal × 12%): 1/1/2026 beban £334.047, amortisasi £34.047, nilai tercatat £2.817.771; 1/1/2027 £338.133, £38.133, £2.855.904; 1/1/2028 £342.708, £42.708, £2.898.612; 1/1/2029 £347.833, £47.833, £2.946.445; 1/1/2030 £353.555, £53.555, £3.000.000. Total kas £1.500.000, beban bunga £1.716.276, amortisasi £216.276; amortisasi terakhir menyerap pembulatan. 4. Jurnal: 1 Januari 2025 Dr Cash £2.783.724, Cr Bonds Payable £2.783.724. 31 Desember 2025 Dr Interest Expense £334.047, Cr Interest Payable £300.000, Cr Bonds Payable £34.047. 1 Januari 2026 Dr Interest Payable £300.000, Cr Cash £300.000. 1 Januari 2030 Dr Bonds Payable £3.000.000, Cr Cash £3.000.000."
  }
];

export const AKK202_BANK_UAS: BankSoal[] = [
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
