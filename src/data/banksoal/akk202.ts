// =============================================================
// src/data/banksoal/akk202.ts
// Bank Soal Esai & Kasus Komprehensif Akuntansi Keuangan Menengah II (AKK202)
// Berdasarkan Kieso Intermediate Accounting IFRS 5e & PSAK/ISAK IAI.
// 15 kasus: 8 Pra-UTS dan 7 Pra-UAS TM09-TM15; sumber pasca-UTS Kieso IFRS 5e dan RPP lokal.
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
    "answerGuide": "1. Foreman: harga = 0,8495 × €800.000 = €679.600 (diskonto awal €120.400). Kupon semesteran = €800.000 × 10% ÷ 2 = €40.000; tarif efektif semesteran 6%. (a) 1 Januari 2025: Dr Cash €679.600, Cr Bonds Payable €679.600. (b) 1 Juli 2025: beban bunga €679.600 × 6% = €40.776; Dr Interest Expense €40.776, Cr Bonds Payable €776, Cr Cash €40.000; nilai tercatat €680.376. (c) 31 Desember 2025: beban bunga €680.376 × 6% = €40.822,56 ≈ €40.823; Dr Interest Expense €40.823, Cr Interest Payable €40.000, Cr Bonds Payable €823; nilai tercatat €681.199. 2. Pada 12%: £3.000.000 × 0,56743 + £300.000 × 3,60478 = £1.702.290 + £1.081.434 = £2.783.724 (faktor tabel 5 desimal), sama dengan harga jual; harga di bawah nominal konsisten dengan tarif efektif di atas kupon 10%. 3. Skedul (kas £300.000 per tahun; beban = nilai tercatat awal × 12%): 1/1/2026 beban £334.047, amortisasi £34.047, nilai tercatat £2.817.771; 1/1/2027 £338.133, £38.133, £2.855.904; 1/1/2028 £342.708, £42.708, £2.898.612; 1/1/2029 £347.833, £47.833, £2.946.445; 1/1/2030 £353.555, £53.555, £3.000.000. Total kas £1.500.000, beban bunga £1.716.276, amortisasi £216.276; amortisasi terakhir menyerap pembulatan. 4. Jurnal: 1 Januari 2025 Dr Cash £2.783.724, Cr Bonds Payable £2.783.724. 31 Desember 2025 Dr Interest Expense £334.047, Cr Interest Payable £300.000, Cr Bonds Payable £34.047. 1 Januari 2026 Dr Interest Payable £300.000, Cr Cash £300.000. 1 Januari 2030 (jatuh tempo): Dr Bonds Payable £3.000.000, Dr Interest Payable £300.000 (kupon terakhir dari akrual 31 Desember 2029), Cr Cash £3.300.000."
  }
];

export const AKK202_BANK_UAS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 9: Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "Menengah",
    "estimatedTime": "20-30 menit",
    "question": "Evermaster: diskonto, premi, dan bunga akrual (Rujukan: Kieso IFRS 5e, halaman PDF 1110-1113.)",
    "context": "Gunakan satu kontrak untuk membandingkan kas kupon dengan beban efektif. Angka dibulatkan seperti tabel buku. Rujukan: Kieso IFRS 5e, halaman PDF 1110-1113.",
    "data": [
      "Nominal €100.000; kupon 8% setahun; bunga dibayar setiap 1 Juli dan 1 Januari; umur lima tahun.",
      "Kasus diskonto: yield 10% dan harga €92.278 pada 1 Januari 2025.",
      "Kasus premi: yield 6% dan harga €108.530 pada 1 Januari 2025."
    ],
    "instructions": [
      "Hitung kas kupon serta bunga efektif semester pertama untuk kedua yield.",
      "Hitung amortisasi dan nilai tercatat akhir semester pertama.",
      "Susun jurnal bunga pertama untuk kedua kasus.",
      "Jelaskan mengapa bunga periode kedua yang jatuh pada 1 Januari dapat diakru pada 31 Desember."
    ],
    "outputFormat": [
      "Perhitungan yang menunjukkan dasar dan satuan.",
      "Jurnal debit dan kredit atau tabel rekonsiliasi sesuai instruksi.",
      "Penjelasan alasan perlakuan akuntansi."
    ],
    "rubric": [
      "Ketepatan dasar pengukuran dan penggunaan data.",
      "Ketepatan hasil serta keseimbangan jurnal jika diperlukan.",
      "Kejelasan alasan dengan istilah Inggris dan penjelasan Indonesia."
    ],
    "answerGuide": "Diskonto: kupon €4.000, beban €4.614, amortisasi €614, saldo €92.892; debit Interest Expense €4.614, kredit Bonds Payable €614 dan Cash €4.000. Premi: kupon €4.000, beban €3.256, amortisasi €744, saldo €107.786; debit Interest Expense €3.256 dan Bonds Payable €744, kredit Cash €4.000. Pada akrual akhir tahun, bunga kontraktual yang belum dibayar masuk Interest Payable; amortisasi tetap menyesuaikan Bonds Payable. Rujukan: Kieso IFRS 5e, halaman PDF 1110-1113."
  },
  {
    "type": "case",
    "scope": "TM 10: Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "Menengah",
    "estimatedTime": "20-30 menit",
    "question": "Bonn Mortgage: dua alternatif penyelesaian utang (Rujukan: Kieso IFRS 5e, halaman PDF 1128-1129.)",
    "context": "Bonn melunasi kewajiban dengan aset atau dengan saham. Kedua alternatif berdiri sendiri. Rujukan: Kieso IFRS 5e, halaman PDF 1128-1129.",
    "data": [
      "Utang Bonn kepada Hamburg Bank €20.000.000.",
      "Alternatif aset: real estate bernilai buku €21.000.000 dan nilai wajar €16.000.000.",
      "Alternatif saham: 320.000 ordinary shares, par €10, dan nilai wajar total €16.000.000."
    ],
    "instructions": [
      "Hitung laba rugi pelepasan aset dan penghentian utang untuk alternatif aset.",
      "Susun jurnal alternatif aset dengan dua hasil yang dipisahkan.",
      "Hitung share capital dan share premium pada alternatif saham, lalu susun jurnalnya.",
      "Jelaskan alasan memakai nilai wajar imbalan untuk menghitung laba penghentian."
    ],
    "outputFormat": [
      "Perhitungan yang menunjukkan dasar dan satuan.",
      "Jurnal debit dan kredit atau tabel rekonsiliasi sesuai instruksi.",
      "Penjelasan alasan perlakuan akuntansi."
    ],
    "rubric": [
      "Ketepatan dasar pengukuran dan penggunaan data.",
      "Ketepatan hasil serta keseimbangan jurnal jika diperlukan.",
      "Kejelasan alasan dengan istilah Inggris dan penjelasan Indonesia."
    ],
    "answerGuide": "Aset: debit Notes Payable €20.000.000 dan Loss on Disposal €5.000.000; kredit Real Estate €21.000.000 dan Gain on Extinguishment €4.000.000. Saham: debit Notes Payable €20.000.000; kredit Share Capital €3.200.000, Share Premium €12.800.000, dan Gain on Extinguishment €4.000.000. Fair value (nilai wajar) imbalan €16.000.000 menjadi pembanding utang dalam kedua alternatif. Rujukan: Kieso IFRS 5e, halaman PDF 1128-1129."
  },
  {
    "type": "case",
    "scope": "TM 11: Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "Menengah",
    "estimatedTime": "20-30 menit",
    "question": "Vine dan Tsen: dua jenis dividen (Rujukan: Kieso IFRS 5e, halaman PDF 1201-1204.)",
    "context": "Kedua perusahaan dan jenis dividen berasal dari contoh buku. Bedakan ekuitas modal dan distribusi aset. Rujukan: Kieso IFRS 5e, halaman PDF 1201-1204.",
    "data": [
      "Vine: 100.000 saham nominal £1, saldo laba £50.000, share dividend 10%, dan harga pasar £8.",
      "Tsen: investasi yang didistribusikan bernilai buku HKD1.250.000 dan nilai wajar HKD2.000.000 pada deklarasi."
    ],
    "instructions": [
      "Hitung jumlah saham tambahan serta transfer ekuitas Vine.",
      "Susun jurnal deklarasi dan distribusi dividen saham Vine.",
      "Hitung laba penyesuaian aset Tsen, lalu susun jurnal penyesuaian dan deklarasi.",
      "Jelaskan mengapa total ekuitas Vine tidak berubah akibat dividen saham, sedangkan dividen properti mendistribusikan aset."
    ],
    "outputFormat": [
      "Perhitungan yang menunjukkan dasar dan satuan.",
      "Jurnal debit dan kredit atau tabel rekonsiliasi sesuai instruksi.",
      "Penjelasan alasan perlakuan akuntansi."
    ],
    "rubric": [
      "Ketepatan dasar pengukuran dan penggunaan data.",
      "Ketepatan hasil serta keseimbangan jurnal jika diperlukan.",
      "Kejelasan alasan dengan istilah Inggris dan penjelasan Indonesia."
    ],
    "answerGuide": "Vine: 10.000 saham baru dan transfer £10.000; debit Retained Earnings, kredit Ordinary Share Dividend Distributable. Pada distribusi, debit akun distributable dan kredit Share Capital. Tsen: debit Equity Investments HKD750.000, kredit Unrealized Holding Gain - Income HKD750.000; lalu debit Retained Earnings HKD2.000.000 dan kredit Property Dividends Payable HKD2.000.000. Share dividend (dividen saham) adalah reklasifikasi ekuitas; property dividend (dividen properti) menimbulkan liabilitas untuk distribusi aset. Rujukan: Kieso IFRS 5e, halaman PDF 1201-1204."
  },
  {
    "type": "case",
    "scope": "TM 12: Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "Menengah",
    "estimatedTime": "20-30 menit",
    "question": "Roche dan Siemens: pemisahan instrumen majemuk (Rujukan: Kieso IFRS 5e, halaman PDF 1258-1261, 1268-1269.)",
    "context": "Bandingkan convertible debt (utang konversi) dengan debt issued with warrants (utang dengan waran). Rujukan: Kieso IFRS 5e, halaman PDF 1258-1261, 1268-1269.",
    "data": [
      "Roche: hasil emisi €2.000.000, komponen liabilitas €1.805.626; pada konversi akhir 2026, utang tercatat €1.894.464 dan saham biasa nominal total €500.000.",
      "Siemens: hasil emisi €10.200.000 dan komponen utang €9.707.852."
    ],
    "instructions": [
      "Hitung ekuitas konversi Roche pada penerbitan dan susun jurnalnya.",
      "Susun jurnal konversi Roche pada akhir 2026.",
      "Hitung ekuitas waran Siemens dan susun jurnal gabungan penerbitan.",
      "Jelaskan mengapa alokasi obligasi dengan waran menggunakan metode residual dalam buku IFRS."
    ],
    "outputFormat": [
      "Perhitungan yang menunjukkan dasar dan satuan.",
      "Jurnal debit dan kredit atau tabel rekonsiliasi sesuai instruksi.",
      "Penjelasan alasan perlakuan akuntansi."
    ],
    "rubric": [
      "Ketepatan dasar pengukuran dan penggunaan data.",
      "Ketepatan hasil serta keseimbangan jurnal jika diperlukan.",
      "Kejelasan alasan dengan istilah Inggris dan penjelasan Indonesia."
    ],
    "answerGuide": "Roche: ekuitas €194.374. Penerbitan mendebit Cash €2.000.000 dan mengkredit Bonds Payable €1.805.626 serta Conversion Equity €194.374. Konversi mendebit utang €1.894.464 dan ekuitas konversi €194.374; kredit Share Capital €500.000 dan Share Premium €1.588.838, tanpa laba rugi. Siemens: ekuitas €492.148; debit Cash €10.200.000, kredit Bonds Payable €9.707.852 dan Share Premium - Share Warrants €492.148. With-and-without method mengukur liabilitas dahulu dan mengalokasikan sisanya ke ekuitas. Rujukan: Kieso IFRS 5e, halaman PDF 1258-1261, 1268-1269."
  },
  {
    "type": "case",
    "scope": "TM 13: Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "Menengah",
    "estimatedTime": "20-30 menit",
    "question": "Mayfield: EPS dengan dua seri obligasi konversi (Rujukan: Kieso IFRS 5e, halaman PDF 1293-1295.)",
    "context": "Gunakan interest expense (beban bunga komponen utang) dan waktu penerbitan untuk penghitungan if-converted. Rujukan: Kieso IFRS 5e, halaman PDF 1293-1295.",
    "data": [
      "Laba £210.000; ordinary shares rata-rata tertimbang 100.000.",
      "Seri pertama: beredar setahun penuh, beban bunga £62.000, dan 20.000 saham konversi.",
      "Seri kedua: terbit 1 April, beban bunga setahun penuh £80.000, dan 32.000 saham konversi.",
      "Tax rate (tarif pajak) 40%."
    ],
    "instructions": [
      "Hitung basic EPS.",
      "Hitung penambahan pembilang setelah pajak untuk setiap seri.",
      "Hitung saham konversi tertimbang dan diluted EPS.",
      "Jelaskan mengapa seri kedua dibobot sembilan bulan dan mengapa kas kupon saja tidak cukup."
    ],
    "outputFormat": [
      "Perhitungan yang menunjukkan dasar dan satuan.",
      "Jurnal debit dan kredit atau tabel rekonsiliasi sesuai instruksi.",
      "Penjelasan alasan perlakuan akuntansi."
    ],
    "rubric": [
      "Ketepatan dasar pengukuran dan penggunaan data.",
      "Ketepatan hasil serta keseimbangan jurnal jika diperlukan.",
      "Kejelasan alasan dengan istilah Inggris dan penjelasan Indonesia."
    ],
    "answerGuide": "Basic EPS £2,10. Seri pertama menambah laba £37.200; seri kedua £36.000 setelah bobot 9/12 dan pajak. Pembilang £283.200; saham 100.000 + 20.000 + 24.000 = 144.000; diluted EPS £1,97. Beban bunga efektif pada liability component (komponen utang) menjadi dasar penyesuaian setelah pajak. Periode kedua dimulai 1 April. Rujukan: Kieso IFRS 5e, halaman PDF 1293-1295."
  },
  {
    "type": "case",
    "scope": "TM 14: Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "Menengah",
    "estimatedTime": "20-30 menit",
    "question": "Graff dan Mayhew: nilai wajar dibandingkan risiko kredit (Rujukan: Kieso IFRS 5e, halaman PDF 1376-1378, 1399-1400.)",
    "context": "Kasus berdiri sendiri. Graff membahas HFCS, sedangkan Mayhew membahas kerugian kredit investasi amortized cost. Rujukan: Kieso IFRS 5e, halaman PDF 1376-1378, 1399-1400.",
    "data": [
      "Graff: nominal £100.000, kupon tahunan 10%, yield 8%, harga awal £108.111; bunga semester pertama £4.324 dan semester kedua £4.297; amortized cost akhir £106.732; nilai wajar £105.000.",
      "Mayhew, semua jumlah dalam ribuan yen: nilai awal ¥200.000, empat tahun tersisa, bunga efektif 10%, ekspektasi kas bunga ¥16.000 tiap tahun, dan pokok akhir ¥200.000.",
      "Faktor PV empat tahun 10% = 0,68301; faktor anuitas = 3,16986."
    ],
    "instructions": [
      "Hitung pendapatan bunga Graff tahun pertama dan penyesuaian OCI, lalu susun jurnal penyesuaian.",
      "Hitung PV ekspektasian dan ECL Mayhew dengan pembulatan sumber.",
      "Susun jurnal kerugian kredit Mayhew dan sebutkan satuannya.",
      "Jelaskan perbedaan perubahan bunga pasar dan peningkatan risiko kredit."
    ],
    "outputFormat": [
      "Perhitungan yang menunjukkan dasar dan satuan.",
      "Jurnal debit dan kredit atau tabel rekonsiliasi sesuai instruksi.",
      "Penjelasan alasan perlakuan akuntansi."
    ],
    "rubric": [
      "Ketepatan dasar pengukuran dan penggunaan data.",
      "Ketepatan hasil serta keseimbangan jurnal jika diperlukan.",
      "Kejelasan alasan dengan istilah Inggris dan penjelasan Indonesia."
    ],
    "answerGuide": "Graff: bunga £8.621 dan OCI loss £1.732; debit Unrealized Holding Loss - OCI, kredit Fair Value Adjustment £1.732. Mayhew: PV ¥187.320 dan ECL ¥12.680 dalam ribuan yen; debit Loss on Impairment dan kredit Allowance for Impaired Debt Investments. Hasil mengikuti pembulatan buku. Expected credit loss (kerugian kredit ekspektasian) mengukur kekurangan arus kas kini, terpisah dari perubahan harga pasar. Rujukan: Kieso IFRS 5e, halaman PDF 1376-1378, 1399-1400."
  },
  {
    "type": "case",
    "scope": "TM 15: Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "Menengah",
    "estimatedTime": "20-30 menit",
    "question": "Meredith dan Republic: metode ekuitas dan pilihan OCI (Rujukan: Kieso IFRS 5e, halaman PDF 1387-1389, 1391-1392, 1396, 1452.)",
    "context": "Bandingkan investasi dengan pengaruh signifikan dan investasi ekuitas non-trading. Kedua contoh berdiri sendiri. Rujukan: Kieso IFRS 5e, halaman PDF 1387-1389, 1391-1392, 1396, 1452.",
    "data": [
      "Meredith membeli 25% saham Pirates seharga £200.000. Laba Pirates £80.000 dan dividen £20.000.",
      "Republic membeli Hawthorne €20.750, menerima dividen €450, dan nilai wajar akhir 2025 €24.000.",
      "Republic menjual Hawthorne pada 2026 seharga €22.500 dengan pilihan non-trading OCI."
    ],
    "instructions": [
      "Hitung bagian laba, kas dividen, dan saldo investasi Meredith; susun jurnalnya.",
      "Hitung perubahan nilai wajar Republic pada 2025 dan sebelum penjualan 2026.",
      "Susun jurnal penyesuaian sebelum penjualan serta pelepasan Hawthorne.",
      "Jelaskan perbedaan pengakuan dividen dan mengapa OCI Hawthorne tidak di-recycle ke laba rugi."
    ],
    "outputFormat": [
      "Perhitungan yang menunjukkan dasar dan satuan.",
      "Jurnal debit dan kredit atau tabel rekonsiliasi sesuai instruksi.",
      "Penjelasan alasan perlakuan akuntansi."
    ],
    "rubric": [
      "Ketepatan dasar pengukuran dan penggunaan data.",
      "Ketepatan hasil serta keseimbangan jurnal jika diperlukan.",
      "Kejelasan alasan dengan istilah Inggris dan penjelasan Indonesia."
    ],
    "answerGuide": "Interpretasi Meredith: debit investasi dan kredit Investment Revenue £20.000; debit Cash dan kredit investasi £5.000; saldo £215.000. Republic: dividen €450 menjadi Dividend Revenue; OCI gain 2025 €3.250. Sebelum penjualan, debit OCI loss dan kredit investasi €1.500 agar saldo €22.500. Pelepasan mendebit Cash dan mengkredit investasi €22.500. Pilihan OCI untuk equity investments (efek ekuitas) mempertahankan perubahan kumulatif dalam ekuitas tanpa recycling. Rujukan: Kieso IFRS 5e, halaman PDF 1387-1389, 1391-1392, 1396, 1452."
  }
];

export const AKK202_BANK: BankSoal[] = [...AKK202_BANK_UTS, ...AKK202_BANK_UAS];
