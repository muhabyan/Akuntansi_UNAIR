// =============================================================
// src/data/quizzes/akk202.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Akuntansi Keuangan Menengah II (AKK202)
// Berdasarkan Kieso Intermediate Accounting IFRS 5e & PSAK/ISAK IAI
// 70 Soal Lengkap: 35 Soal Pra-UTS (TM 1-7) & 35 Soal Pra-UAS (TM 8-14)
// Pra-UTS (TM 1-7) hanya memakai bacaan kanonik src/data/akm2/modules/tm1.ts-tm7.ts.
// =============================================================
import type { QuizQuestion } from '../../types';

export const AKK202_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "difficulty": "medium",
    "q": "PT Semen Gresik membeli mesin dengan harga faktur Rp800.000.000 dan memanfaatkan diskon tunai 2%. Biaya lain: bea masuk Rp45.000.000, angkut Rp25.000.000, pondasi khusus Rp35.000.000, pengujian Rp15.000.000, pelatihan operator Rp12.000.000, dan peresmian Rp8.000.000. Berapa biaya perolehan mesin?",
    "options": [
      "Rp904.000.000",
      "Rp924.000.000",
      "Rp784.000.000",
      "Rp920.000.000"
    ],
    "answer": 0,
    "explanation": "Harga beli bersih = Rp800.000.000 − Rp16.000.000 = Rp784.000.000. Biaya atribusi langsung = Rp45.000.000 + Rp25.000.000 + Rp35.000.000 + Rp15.000.000 = Rp120.000.000, sehingga biaya perolehan Rp904.000.000. Pelatihan Rp12.000.000 dan peresmian Rp8.000.000 tidak membawa mesin ke kondisi siap digunakan, jadi dibebankan."
  },
  {
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "difficulty": "advanced",
    "q": "PT Surya Prima membeli tanah beserta gedung tua secara lump-sum Rp2.400.000.000 dan membayar biaya notaris serta legal Rp60.000.000. Nilai wajar: tanah Rp2.100.000.000 dan gedung Rp900.000.000. Tanah dibeli semata-mata untuk membangun pabrik baru; gedung tua diratakan dengan biaya Rp120.000.000 dan puingnya terjual Rp25.000.000. Berapa nilai tercatat Tanah?",
    "options": [
      "Rp1.722.000.000",
      "Rp2.555.000.000",
      "Rp2.460.000.000",
      "Rp2.580.000.000"
    ],
    "answer": 1,
    "explanation": "Karena gedung langsung dibongkar untuk proyek baru, seluruh harga beli dan biaya legal Rp2.460.000.000 masuk Tanah (tanpa alokasi 70%/30%). Biaya bersih pembongkaran Rp120.000.000 − Rp25.000.000 = Rp95.000.000 juga masuk Tanah, sehingga nilai tercatat Tanah Rp2.555.000.000."
  },
  {
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "difficulty": "advanced",
    "q": "Shalla Company membangun gedung dengan utang konstruksi spesifik USD 750,000 bunga 15%. General WAAE USD 200,000 dengan capitalization rate umum 11.5%, dan dana spesifik yang menganggur menghasilkan pendapatan investasi USD 40,000. Berapa biaya pinjaman neto yang dikapitalisasi (PSAK 223)?",
    "options": [
      "USD 135,500",
      "USD 112,500",
      "USD 95,500",
      "USD 342,500"
    ],
    "answer": 2,
    "explanation": "Bunga spesifik USD 750,000 × 15% = USD 112,500 dikurangi pendapatan investasi USD 40,000, ditambah porsi umum USD 200,000 × 11.5% = USD 23,000. Biaya pinjaman neto yang dikapitalisasi = USD 95,500; sisa bunga aktual dari total USD 342,500 dibebankan."
  },
  {
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "difficulty": "advanced",
    "q": "Peralatan (model revaluasi) dibeli €1.000.000, umur lima tahun, garis lurus. Setelah depresiasi tahun pertama €200.000, nilai buku €800.000 direvaluasi ke nilai wajar €850.000. Berapa transfer tahunan dari AOCI ke saldo laba pada tahun berikutnya, dan lewat mana transfer itu dicatat?",
    "options": [
      "€50.000, melalui laba rugi",
      "€12.500, melalui laba rugi sebagai pembalik beban depresiasi",
      "€212.500, langsung dalam ekuitas",
      "€12.500, langsung dalam ekuitas tanpa melalui laba rugi"
    ],
    "answer": 3,
    "explanation": "Depresiasi tahun berikutnya = €850.000/4 = €212.500, sedangkan depresiasi berbasis cost €200.000. Selisih €12.500 ditransfer dari Accumulated OCI — Revaluation Surplus ke Retained Earnings langsung dalam ekuitas; transfer ini tidak membalik beban depresiasi dan tidak masuk laba rugi."
  },
  {
    "tm": 1,
    "topic": "Akuntansi Aset Tetap, Properti Investasi, dan Tanah",
    "difficulty": "medium",
    "q": "Entitas Full SAK memiliki gedung yang disewakan kepada pihak ketiga untuk memperoleh rental income dan memilih fair value model. Bagaimana perlakuan kenaikan nilai wajar gedung pada akhir tahun?",
    "options": [
      "Langsung ke laba rugi, dan gedung tidak disusutkan (PSAK 240)",
      "Ke OCI sebagai revaluation surplus, dan gedung tetap disusutkan (PSAK 216)",
      "Tidak diakui karena gedung diklasifikasikan sebagai persediaan",
      "Ke OCI, lalu didaur ulang ke laba rugi saat gedung dijual"
    ],
    "answer": 0,
    "explanation": "Gedung untuk sewa atau kenaikan nilai adalah properti investasi (PSAK 240), bukan PPE atau persediaan. Dalam fair value model, perubahan nilai wajar masuk langsung ke Profit or Loss, bukan OCI, dan properti investasi tidak disusutkan."
  },
  {
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "difficulty": "medium",
    "q": "Instinct Enterprises mengganti sistem pipa lama (cost £150.000, akumulasi depresiasi £135.000) dengan pipa plastik seharga £125.000. Pipa lama laku dijual sebagai scrap £1.000. Dengan substitution approach, berapa rugi pelepasan pipa lama?",
    "options": [
      "£15.000",
      "£1.000",
      "£14.000",
      "£124.000"
    ],
    "answer": 2,
    "explanation": "Nilai buku pipa lama = £150.000 − £135.000 = £15.000. Rugi pelepasan = £15.000 − £1.000 = £14.000. Pipa baru dikapitalisasi £125.000 dan kas neto yang dibayar £124.000."
  },
  {
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "difficulty": "medium",
    "q": "Barret Group menjual mesin (cost €18.000, depresiasi garis lurus €1.200 per tahun, akumulasi depresiasi akhir tahun ke-9 €10.800) secara tunai €7.000 pada 1 Juli tahun ke-10. Berapa gain atau loss pelepasannya?",
    "options": [
      "Rugi €200",
      "Gain €400",
      "Gain €7.000",
      "Rugi €600"
    ],
    "answer": 1,
    "explanation": "Depresiasi diperbarui dulu sampai 1 Juli: €1.200 × 6/12 = €600, sehingga akumulasi depresiasi €11.400 dan nilai buku €18.000 − €11.400 = €6.600. Gain on disposal = €7.000 − €6.600 = €400. Lupa memperbarui depresiasi menghasilkan rugi yang salah."
  },
  {
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "difficulty": "advanced",
    "q": "Interstate Transportation menukar truk bekas (cost USD 64.000, akumulasi depresiasi USD 22.000, nilai wajar USD 49.000) dan membayar kas USD 11.000 untuk truk semi baru. Pertukaran TIDAK memiliki substansi komersial. Bagaimana pencatatannya?",
    "options": [
      "Truk baru USD 60.000; gain USD 7.000 diakui",
      "Truk baru USD 53.000; tidak ada gain yang diakui",
      "Truk baru USD 53.000; gain USD 7.000 diakui",
      "Truk baru USD 42.000; tidak ada gain yang diakui"
    ],
    "answer": 1,
    "explanation": "Tanpa substansi komersial, tidak ada gain maupun loss yang diakui. Basis truk baru = nilai buku USD 42.000 + kas dibayar USD 11.000 = USD 53.000, sama dengan nilai wajar USD 60.000 dikurangi gain yang ditangguhkan USD 7.000."
  },
  {
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "difficulty": "medium",
    "q": "Fasilitas Camel Transport (cost USD 6.000.000, akumulasi depresiasi USD 2.500.000) hancur akibat tornado pada 16 Mei 2025. Klaim asuransi baru disepakati 18 Maret 2026 sebesar USD 5.000.000. Apa yang diakui pada 16 Mei 2025?",
    "options": [
      "Casualty loss USD 3.500.000; klaim asuransi belum diakui",
      "Gain USD 5.000.000 dari klaim asuransi",
      "Tidak ada jurnal sampai klaim asuransi disepakati",
      "Loss USD 6.000.000 sebesar cost fasilitas"
    ],
    "answer": 0,
    "explanation": "Konversi terpaksa dicatat dua tahap. Pada 16 Mei 2025 nilai buku USD 3.500.000 dihapus sebagai casualty loss. Klaim yang belum disepakati adalah aset kontinjensi (IAS 37), sehingga gain USD 5.000.000 baru diakui pada 18 Maret 2026."
  },
  {
    "tm": 2,
    "topic": "Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter",
    "difficulty": "advanced",
    "q": "Troopers Medical Labs membangun sendiri mesin medis khusus. Mesin pertama menelan biaya €714.000, sedangkan tiga mesin identik berikutnya masing-masing €441.000. Bagaimana perlakuan mesin pertama (CA9.2)?",
    "options": [
      "Kapitalisasi penuh €714.000 karena seluruh biaya terjadi untuk membangun mesin",
      "Mesin €441.000; selisih €273.000 dicatat sebagai aset tangguhan",
      "Mesin €441.000; selisih €273.000 diakui sebagai rugi periode berjalan",
      "Kapitalisasi €714.000 lalu disusutkan dengan metode dipercepat"
    ],
    "answer": 2,
    "explanation": "Selisih €714.000 − €441.000 = €273.000 mencerminkan pemborosan tidak normal dan inefisiensi kurva pembelajaran. Kieso p. 768 (IAS 16 paragraf 22) melarang mengkapitalisasi jumlah abnormal, sehingga mesin dicatat €441.000 dan €273.000 menjadi period loss."
  },
  {
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "difficulty": "medium",
    "q": "Lockard SE membeli mesin pada 1 Januari 2025 seharga €80.000, nilai residu €8.000, umur manfaat 8 tahun. Berapa beban depresiasi 2025 dengan metode saldo menurun ganda (DDB)?",
    "options": [
      "€18.000",
      "€9.000",
      "€16.000",
      "€20.000"
    ],
    "answer": 3,
    "explanation": "Tarif DDB = 2/8 = 25% dikalikan langsung dengan nilai buku awal €80.000, sehingga beban 2025 = €20.000. Residu €8.000 tidak dikurangkan di awal; residu hanya menjadi batas bawah nilai buku pada tahun akhir."
  },
  {
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "difficulty": "advanced",
    "q": "Charleston, SA membeli peralatan pada 1 Juni 2025 seharga €89.000, residu €5.000, umur 7 tahun. Berapa beban depresiasi 2026 dengan metode jumlah angka tahun (SYD)?",
    "options": [
      "€18.000",
      "€19.250",
      "€21.000",
      "€12.250"
    ],
    "answer": 1,
    "explanation": "S = 28; service year 1 = €84.000 × 7/28 = €21.000 dan service year 2 = €84.000 × 6/28 = €18.000. Tahun 2026 menggabungkan sisa service year 1 dan awal service year 2: (€21.000 × 5/12) + (€18.000 × 7/12) = €8.750 + €10.500 = €19.250."
  },
  {
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "difficulty": "medium",
    "q": "Everly Corporation membeli tambang batubara USD 400.000, biaya pengembangan tidak berwujud USD 100.000, estimasi kewajiban restorasi USD 80.000, dan tanah bekas tambang dapat dijual USD 160.000. Cadangan 4.000 ton; tahun pertama diekstraksi 700 ton. Berapa deplesi tahun pertama dan akun debitnya?",
    "options": [
      "USD 73.500 ke Cost of Goods Sold saat ekstraksi",
      "USD 101.500 ke Inventory (Coal)",
      "USD 73.500 ke Inventory (Coal)",
      "USD 420.000 ke Depletion Expense"
    ],
    "answer": 2,
    "explanation": "Dasar deplesi = USD 400.000 + USD 100.000 + USD 80.000 − USD 160.000 = USD 420.000; tarif = USD 420.000 / 4.000 ton = USD 105 per ton; deplesi = 700 × USD 105 = USD 73.500. Deplesi dikapitalisasi ke Inventory (Coal) saat ekstraksi dan baru menjadi beban pokok penjualan saat batubara terjual."
  },
  {
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "difficulty": "advanced",
    "q": "Pujols SpA mencatat rugi impairment €1.000.000 pada 2025 sehingga nilai tercatat peralatan menjadi €7.000.000 (sisa umur 4 tahun, residu €0). Setelah depresiasi 2026, recoverable amount 31 Desember 2026 naik menjadi €6.000.000. Tanpa impairment, nilai tercatat saat itu adalah €6.000.000. Berapa pemulihan yang diakui?",
    "options": [
      "€750.000",
      "€1.000.000",
      "€0, karena pemulihan impairment dilarang",
      "€1.750.000"
    ],
    "answer": 0,
    "explanation": "Depresiasi 2026 = €7.000.000/4 = €1.750.000, sehingga nilai tercatat sebelum pemulihan €5.250.000. Ceiling tanpa impairment = €8.000.000 − €2.000.000 = €6.000.000. Pemulihan = €6.000.000 − €5.250.000 = €750.000, dicatat ke Recovery of Impairment Loss."
  },
  {
    "tm": 3,
    "topic": "Depresiasi, Deplesi, Penurunan Nilai Aset, dan Akuntansi Revaluasi",
    "difficulty": "medium",
    "q": "Falcetto Company (model revaluasi) memiliki peralatan dengan nilai tercatat €8.000 per 31 Desember 2025, sedangkan nilai wajarnya €7.000. Belum pernah ada surplus revaluasi. Bagaimana penurunan €1.000 dicatat?",
    "options": [
      "Debit OCI €1.000 sehingga AOCI menjadi negatif",
      "Debit Loss on Revaluation €1.000 di laba rugi",
      "Tidak dicatat; penurunan menunggu pemulihan tahun berikutnya",
      "Debit Retained Earnings €1.000 langsung dalam ekuitas"
    ],
    "answer": 1,
    "explanation": "Penurunan revaluasi pertama kali (tanpa surplus sebelumnya) didebit ke laba rugi sebagai Loss on Revaluation. Dengan metode eliminasi, akumulasi depresiasi €4.000 didebit ke nol dan Equipment dikredit €5.000 sehingga menjadi €7.000; depresiasi 2026 = €7.000/4 = €1.750."
  },
  {
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "difficulty": "medium",
    "q": "Rugi penurunan nilai suatu cash-generating unit (CGU) yang memiliki goodwill harus dialokasikan dengan urutan apa?",
    "options": [
      "Pro-rata ke seluruh aset termasuk goodwill berdasarkan nilai tercatat relatif",
      "Ke aset tetap dengan nilai tercatat terbesar lebih dulu, lalu goodwill",
      "Goodwill sampai nol, lalu pro-rata ke aset lain dengan batas bawah nilai tertinggi FVLCD, VIU, dan nol",
      "Hanya ke goodwill; sisa rugi yang tidak terserap diabaikan"
    ],
    "answer": 2,
    "explanation": "Tingkat 1: kurangi goodwill yang dialokasikan ke CGU sampai nol. Tingkat 2: alokasikan sisa rugi pro-rata ke aset lain berdasarkan nilai tercatat relatif, tetapi nilai tercatat aset tidak boleh turun di bawah max(FVLCD, VIU, 0); sisa yang tidak terserap dialokasikan ulang ke aset lain (Kieso p. 853)."
  },
  {
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "difficulty": "advanced",
    "q": "Roland SE menurunkan nilai peralatan ke €5.600.000 pada 31 Desember 2025 dan mengklasifikasikannya sebagai dimiliki untuk dilepas (held for disposal). Nilai realisasi neto 31 Desember 2026 menjadi €4.900.000. Apa yang dicatat pada 2026?",
    "options": [
      "Depresiasi €1.400.000 lalu pemulihan €700.000",
      "Rugi tambahan €700.000 tanpa depresiasi",
      "Depresiasi €1.400.000 tanpa penyesuaian nilai",
      "Pemulihan €700.000 tanpa depresiasi"
    ],
    "answer": 1,
    "explanation": "Aset held for disposal tidak didepresiasi (Kieso p. 854), sehingga nilai tercatat tetap €5.600.000. Penurunan ke €4.900.000 adalah rugi tambahan €700.000. Jika aset tetap digunakan, depresiasi €1.400.000 membuat nilai tercatat €4.200.000 dan penyesuaiannya justru pemulihan €700.000."
  },
  {
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "difficulty": "advanced",
    "q": "Tanah PT Sugehdewe (cost Rp1.000.000, dalam ribuan) direvaluasi ke Rp1.125.000 pada 2017 dan turun ke Rp900.000 pada 2018 (AOCI Rp125.000 habis, rugi Rp100.000 ke laba rugi). Pada 31 Desember 2019 nilai wajarnya Rp962.500. Bagaimana dampak 2019?",
    "options": [
      "OCI +Rp62.500; laba rugi Rp0",
      "Laba rugi +Rp37.500; OCI +Rp25.000",
      "Laba rugi +Rp62.500 (Recovery of Prior Revaluation Loss); OCI Rp0",
      "Tidak ada jurnal karena nilai wajar masih di bawah cost"
    ],
    "answer": 2,
    "explanation": "Kenaikan yang membalik rugi laba rugi sebelumnya dicatat dulu ke laba rugi sampai rugi Rp100.000 pulih. Kenaikan Rp62.500 seluruhnya menjadi Recovery of Prior Revaluation Loss, sehingga sisa rugi belum pulih Rp37.500 dan OCI 2019 Rp0."
  },
  {
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "difficulty": "medium",
    "q": "Peralatan PT Friedrich dibeli 1 Januari 2018 seharga Rp3.060.000.000, umur 12 tahun, residu Rp0, garis lurus. Pada 31 Desember 2018: FVLCD Rp2.600.000.000 dan VIU Rp2.365.000.000. Berapa rugi penurunan nilai?",
    "options": [
      "Rp440.000.000",
      "Rp460.000.000",
      "Rp255.000.000",
      "Rp205.000.000"
    ],
    "answer": 3,
    "explanation": "Depresiasi 2018 = Rp3.060.000.000/12 = Rp255.000.000, sehingga nilai tercatat Rp2.805.000.000. Recoverable amount adalah nilai tertinggi: FVLCD Rp2.600.000.000 (bukan VIU Rp2.365.000.000). Rugi = Rp2.805.000.000 − Rp2.600.000.000 = Rp205.000.000."
  },
  {
    "tm": 4,
    "topic": "Impairment CGU, Aset Dilepas, Revaluasi Multi-Periode, dan Latihan UTS",
    "difficulty": "advanced",
    "q": "Su Ltd. mentransfer surplus tahunan ¥100 dari AOCI ke saldo laba (Interpretasi A), sehingga per 31 Desember 2026 sisa AOCI ekskavator ¥600 dan nilai buku sebelum revaluasi ¥6.600. Nilai wajar turun menjadi ¥5.000. Bagaimana penurunan ¥1.600 dialokasikan?",
    "options": [
      "OCI ¥600; Loss on Revaluation ¥1.000",
      "OCI ¥1.600 seluruhnya",
      "Loss on Revaluation ¥1.600 seluruhnya",
      "OCI ¥800; Loss on Revaluation ¥800"
    ],
    "answer": 0,
    "explanation": "Penurunan didebit ke OCI hanya sebesar sisa AOCI aset (¥600), karena AOCI tidak boleh negatif; kelebihannya ¥1.600 − ¥600 = ¥1.000 menjadi Loss on Revaluation. Alokasi ¥800/¥800 hanya berlaku pada Interpretasi B yang tidak mentransfer surplus tahunan."
  },
  {
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "difficulty": "advanced",
    "q": "Fred Graf membeli Terrell Galleries seharga USD 380.000. Nilai buku Terrell: Buildings USD 200.000; Equipment USD 175.000; Copyrights USD 30.000; Land USD 70.000; Cash USD 100.000; Accounts payable USD 50.000; Long-term notes payable USD 300.000. Tanah undervalued USD 50.000 dan peralatan overvalued USD 5.000. Berapa goodwill?",
    "options": [
      "USD 155.000",
      "USD 110.000",
      "USD 105.000",
      "USD 160.000"
    ],
    "answer": 1,
    "explanation": "Aset teridentifikasi pada nilai wajar = USD 200.000 + USD 170.000 + USD 30.000 + USD 120.000 + USD 100.000 = USD 620.000. Aset neto = USD 620.000 − (USD 50.000 + USD 300.000) = USD 270.000. Goodwill = USD 380.000 − USD 270.000 = USD 110.000."
  },
  {
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "difficulty": "advanced",
    "q": "Hak cipta Botticelli Company (tanpa akun akumulasi amortisasi) diturunkan nilainya dari USD 4.300.000 ke recoverable amount USD 3.400.000 pada 2025, sisa umur 10 tahun. Setelah amortisasi 2026, nilai wajarnya USD 3.500.000 (ceiling tanpa impairment USD 3.870.000). Berapa pemulihan yang dicatat?",
    "options": [
      "USD 900.000",
      "USD 810.000",
      "USD 0, karena pemulihan aset tidak berwujud dilarang",
      "USD 440.000"
    ],
    "answer": 3,
    "explanation": "Amortisasi 2026 = USD 3.400.000/10 = USD 340.000, sehingga nilai tercatat USD 3.060.000. Nilai USD 3.500.000 di bawah ceiling USD 3.870.000, jadi pemulihan = USD 3.500.000 − USD 3.060.000 = USD 440.000 (didebit ke Copyright)."
  },
  {
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "difficulty": "medium",
    "q": "Dogwood Electronics: 1 Maret biaya legal paten €10.000; 5 April biaya laboratorium €23.000; 15 Mei prototipe €34.000; 1 Juni viabilitas ekonomi tercapai; 30 Juni pengembangan akhir €45.000. Berapa yang dibebankan dan yang dikapitalisasi?",
    "options": [
      "Dibebankan €57.000; dikapitalisasi €55.000",
      "Dibebankan €67.000; dikapitalisasi €45.000",
      "Dibebankan €23.000; dikapitalisasi €89.000",
      "Dibebankan €112.000; dikapitalisasi €0"
    ],
    "answer": 0,
    "explanation": "Laboratorium €23.000 (riset) dan prototipe €34.000 (sebelum viabilitas) dibebankan: €57.000. Biaya legal paten €10.000 dikapitalisasi ke Patents dan pengembangan setelah viabilitas €45.000 ke Development Costs: €55.000."
  },
  {
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "difficulty": "medium",
    "q": "Pada P11.1, Reichenbach Co. membayar €12.650 untuk berhasil membela paten yang dibelinya. Menurut Kieso Illustration 11.13 item 13, bagaimana perlakuan biaya tersebut?",
    "options": [
      "Dikapitalisasi ke Patents karena membuktikan keabsahan hak",
      "Dikapitalisasi ke Goodwill",
      "Dibebankan sebagai Legal Expense",
      "Dikurangkan dari Accumulated Amortization—Patents"
    ],
    "answer": 2,
    "explanation": "Kieso Illustration 11.13 item 13: biaya berhasil membela paten dibebankan sebagai legal fees karena pengeluaran itu hanya mempertahankan manfaat yang diharapkan. Karena itu €12.650 pada P11.1 menjadi Legal Expense, bukan tambahan Patents."
  },
  {
    "tm": 5,
    "topic": "Aset Tidak Berwujud, Goodwill, dan Riset & Pengembangan",
    "difficulty": "medium",
    "q": "Palmiero Company membeli waralaba dari Dougherty Co. pada 1 Januari 2024 seharga USD 350.000 (nilai tercatat di Dougherty USD 500.000). Umur perjanjian 30 tahun, tetapi Palmiero harus ikut lelang kompetitif pada akhir 2033. Berapa amortisasi 2025?",
    "options": [
      "USD 11.667",
      "USD 50.000",
      "USD 35.000",
      "USD 16.667"
    ],
    "answer": 2,
    "explanation": "Cost pembeli USD 350.000 menjadi dasar; nilai tercatat penjual tidak relevan. Periode manfaat dibatasi lelang akhir 2033, yaitu 10 tahun (2024–2033), sehingga amortisasi 2025 = USD 350.000/10 = USD 35.000."
  },
  {
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "difficulty": "medium",
    "q": "Pada 1 Oktober 2025 Darby Corporation meminjam kas USD 75.000 dari Shore Bank dengan wesel tanpa bunga 12 bulan bernilai nominal USD 81.000. Berapa liabilitas neto wesel ini per 31 Desember 2025?",
    "options": [
      "USD 81.000",
      "USD 76.500",
      "USD 75.000",
      "USD 79.500"
    ],
    "answer": 1,
    "explanation": "Discount on Notes Payable awal = USD 81.000 − USD 75.000 = USD 6.000; amortisasi 3 bulan = USD 6.000 × 3/12 = USD 1.500. Liabilitas neto = USD 81.000 − (USD 6.000 − USD 1.500) = USD 76.500, sama dengan kas USD 75.000 + bunga diakui USD 1.500."
  },
  {
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "difficulty": "medium",
    "q": "Edwardson AG mencatat pembelian secara neto. Barang €70.000 dengan syarat 2/10, n/30 dibeli 2 Februari dan baru dilunasi 26 Februari. Bagaimana jurnal pelunasannya?",
    "options": [
      "Debit Accounts Payable €68.600 dan Purchase Discounts Lost €1.400; kredit Cash €70.000",
      "Debit Accounts Payable €70.000; kredit Purchase Discounts €1.400 dan Cash €68.600",
      "Debit Accounts Payable €68.600 dan Purchases €1.400; kredit Cash €70.000",
      "Debit Accounts Payable €70.000; kredit Cash €70.000"
    ],
    "answer": 0,
    "explanation": "Metode neto mencatat pembelian €70.000 × (1 − 0,02) = €68.600. Karena dibayar setelah periode diskon, selisih €1.400 didebit ke Purchase Discounts Lost, yang menonjolkan biaya pembiayaan akibat gagal memanfaatkan diskon."
  },
  {
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "difficulty": "medium",
    "q": "Penjualan tunai Schultz Department Store selama Desember €798.000 sudah termasuk PPN 5%. Berapa Sales Revenue dan VAT Taxes Payable yang dicatat?",
    "options": [
      "Sales Revenue €798.000; VAT Taxes Payable €39.900",
      "Sales Revenue €758.100; VAT Taxes Payable €39.900",
      "Sales Revenue €798.000; VAT Taxes Payable €38.000",
      "Sales Revenue €760.000; VAT Taxes Payable €38.000"
    ],
    "answer": 3,
    "explanation": "Kas €798.000 sudah termasuk pajak, sehingga Sales Revenue = €798.000 / 1,05 = €760.000 dan VAT Taxes Payable = €798.000 − €760.000 = €38.000. Mengalikan €798.000 × 5% = €39.900 adalah jebakan PPN inklusif."
  },
  {
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "difficulty": "advanced",
    "q": "Utang bank jatuh tempo dalam 12 bulan setelah 31 Desember. Perjanjian pembiayaan kembali jangka panjang baru ditandatangani pada bulan Januari, sebelum laporan keuangan diterbitkan. Bagaimana penyajiannya per 31 Desember menurut IFRS?",
    "options": [
      "Liabilitas jangka panjang, karena perjanjian selesai sebelum laporan diterbitkan",
      "Liabilitas jangka pendek; perjanjian diungkapkan dalam catatan sebagai peristiwa setelah periode pelaporan",
      "Dipisah pro-rata antara jangka pendek dan jangka panjang",
      "Direklasifikasi ke ekuitas sampai pembiayaan kembali terlaksana"
    ],
    "answer": 1,
    "explanation": "Hak menunda pelunasan sekurang-kurangnya 12 bulan harus sudah ada pada atau sebelum tanggal pelaporan (Kieso p. 1021). Perjanjian bulan Januari adalah peristiwa setelah periode pelaporan yang tidak memerlukan penyesuaian, sehingga utang tetap jangka pendek. US GAAP-lah yang mengizinkan klasifikasi jangka panjang."
  },
  {
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "difficulty": "medium",
    "q": "Entitas menggugat pihak lain dan penasihat hukum menilai arus masuk ganti rugi probable (lebih mungkin terjadi daripada tidak), tetapi belum virtually certain. Bagaimana perlakuannya?",
    "options": [
      "Diakui sebagai piutang dan pendapatan karena probable",
      "Diakui sebagai provisi di sisi aset",
      "Aset kontinjensi yang hanya diungkapkan dalam catatan",
      "Tidak diakui dan tidak diungkapkan"
    ],
    "answer": 2,
    "explanation": "Pada sisi aset, kemungkinan probable menghasilkan aset kontinjensi yang diungkapkan dalam catatan tetapi tidak diakui. Aset baru diakui di neraca bila arus masuknya virtually certain; possible dan remote tidak diakui maupun diungkapkan."
  },
  {
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "difficulty": "advanced",
    "q": "Foreman Cleaners menerbitkan obligasi €800.000, kupon 10% per tahun dibayar setiap 1 Juli dan 1 Januari, pada harga 84,95 untuk menghasilkan yield 12% (tanggal 1 Januari 2025). Berapa beban bunga pada 1 Juli 2025 dengan metode bunga efektif?",
    "options": [
      "€40.000",
      "€40.776",
      "€48.000",
      "€81.552"
    ],
    "answer": 1,
    "explanation": "Harga = 0,8495 × €800.000 = €679.600. Tarif efektif semesteran 12% ÷ 2 = 6%, sehingga beban bunga = €679.600 × 6% = €40.776. Kas kupon = €800.000 × 10% ÷ 2 = €40.000, dan selisih €776 menambah Bonds Payable."
  },
  {
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "difficulty": "advanced",
    "q": "Spencer plc menjual obligasi 10% bernilai jatuh tempo £3.000.000 seharga £2.783.724 pada 1 Januari 2025 (jatuh tempo 1 Januari 2030, bunga tahunan). Tarif efektifnya 12%. Berapa beban bunga tahun pertama?",
    "options": [
      "£300.000",
      "£360.000",
      "£334.047",
      "£278.372"
    ],
    "answer": 2,
    "explanation": "Beban bunga = nilai tercatat awal × tarif efektif = £2.783.724 × 12% = £334.046,88 ≈ £334.047. Kas kupon = £3.000.000 × 10% = £300.000, sehingga amortisasi diskonto £34.047 menaikkan nilai tercatat menjadi £2.817.771."
  },
  {
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "difficulty": "medium",
    "q": "Jika tarif kupon obligasi lebih rendah dari tarif efektif (pasar), bagaimana harga penerbitan dan arah amortisasinya?",
    "options": [
      "Premi; amortisasi mengurangi nilai tercatat sampai nominal",
      "Pari; tidak ada amortisasi",
      "Diskonto; amortisasi mengurangi nilai tercatat",
      "Diskonto; amortisasi menambah nilai tercatat sampai nominal"
    ],
    "answer": 3,
    "explanation": "Kupon di bawah tarif efektif membuat obligasi dijual di bawah nominal (diskonto). Setiap periode beban bunga lebih besar dari kas kupon, dan selisihnya menambah nilai tercatat sampai sama dengan nominal saat jatuh tempo."
  },
  {
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "difficulty": "medium",
    "q": "Bagaimana perlakuan biaya penerbitan obligasi menurut IFRS?",
    "options": [
      "Dicatat sebagai aset Deferred Bond Issue Costs lalu diamortisasi",
      "Mengurangi kas bersih dan nilai tercatat awal Bonds Payable, sehingga tarif efektif naik",
      "Dibebankan seluruhnya pada tanggal penerbitan",
      "Dikreditkan ke Interest Expense sepanjang umur obligasi"
    ],
    "answer": 1,
    "explanation": "Biaya penerbitan mengurangi kas bersih dan nilai tercatat awal liabilitas; biaya itu tidak dicatat sebagai aset tangguhan (Kieso p. 1118). Karena nilai tercatat awal lebih kecil, tarif efektif yang dipakai untuk amortisasi menjadi lebih tinggi."
  },
  {
    "tm": 7,
    "topic": "Liabilitas Jangka Panjang: Obligasi dan Wesel Bayar",
    "difficulty": "advanced",
    "q": "Persyaratan utang dimodifikasi. Nilai kini arus kas baru, didiskontokan dengan tarif efektif awal, berbeda 10% atau lebih dari nilai tercatat utang lama. Bagaimana perlakuannya?",
    "options": [
      "Modifikasi substansial: utang lama dihentikan, utang baru dicatat pada nilai wajar, dan gain atau loss ke laba rugi",
      "Utang lama tetap; hanya tarif bunga yang diubah secara prospektif",
      "Selisih langsung dicatat ke OCI",
      "Tidak ada jurnal sampai utang baru jatuh tempo"
    ],
    "answer": 0,
    "explanation": "Selisih 10% atau lebih berarti modifikasi substansial: utang lama dihentikan dan utang baru dicatat pada nilai wajar, dengan gain atau loss di laba rugi. Bila selisihnya di bawah 10%, utang tetap dan nilai tercatatnya disesuaikan (Kieso p. 1133)."
  }
];

export const AKK202_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Review Terpadu Silabus Pra-UTS",
    "difficulty": "advanced",
    "q": "Manakah pernyataan yang BENAR mengenai perlakuan biaya perolehan aset tetap dan liabilitas kontinjensi?",
    "options": [
      "Biaya pembongkaran gedung lama saat membeli tanah untuk membangun pabrik baru dibebankan ke Gedung Baru",
      "Biaya pembongkaran gedung lama saat membeli tanah untuk proyek baru dikapitalisasi ke akun Tanah",
      "Aset kontinjensi yang berstatus probable wajib dijurnal di neraca",
      "Diskonto wesel bayar disajikan di kelompok aset lancar"
    ],
    "answer": 1,
    "explanation": "Biaya pembongkaran gedung lama untuk mempersiapkan tanah bagi pembangunan fasilitas baru dikapitalisasi ke akun Tanah karena merupakan pengorbanan untuk menyiapkan lahan."
  },
  {
    "tm": 8,
    "topic": "Kapitalisasi Bunga & Impairment",
    "difficulty": "advanced",
    "q": "Jika Bunga Aktual entitas selama tahun konstruksi adalah Rp 80.000.000 dan Bunga yang Dapat Dihindari (Avoidable Interest) adalah Rp 95.000.000, berapakah bunga yang boleh dikapitalisasi ke aset tetap?",
    "options": [
      "Rp 95.000.000",
      "Rp 80.000.000",
      "Rp 175.000.000",
      "Rp 15.000.000"
    ],
    "answer": 1,
    "explanation": "Berdasarkan PSAK 26, jumlah bunga yang dikapitalisasi dibatasi paling tinggi sebesar BUNGA AKTUAL yang benar-benar terjadi selama periode tersebut (yaitu Rp 80.000.000)."
  },
  {
    "tm": 8,
    "topic": "Depresiasi & Nilai Sisa DDB",
    "difficulty": "medium",
    "q": "Pada metode Saldo Menurun Ganda (DDB), nilai sisa (residual value) aset...",
    "options": [
      "Dikurangkan dari harga perolehan sebelum mengalikan dengan tarif depresiasi",
      "Diabaikan pada tahun pertama, tetapi menjadi batas bawah (plafon) penghentian penyusutan pada akhir masa manfaat",
      "Tidak pernah diperhatikan sama sekali hingga aset dijual",
      "Ditambahkan ke harga perolehan setiap awal tahun"
    ],
    "answer": 1,
    "explanation": "Pada DDB, nilai sisa diabaikan saat menghitung beban depresiasi tahunan, namun nilai buku aset tidak boleh disusutkan di bawah estimasi nilai sisanya."
  },
  {
    "tm": 8,
    "topic": "Kriteria PIRATE R&D",
    "difficulty": "medium",
    "q": "Huruf 'T' dalam akronim PIRATE kriteria kapitalisasi aset takberwujud fase pengembangan merujuk pada...",
    "options": [
      "Tax deduction eligibility",
      "Technical feasibility to complete the intangible asset",
      "Time-bound project management",
      "Total expenditure reliability"
    ],
    "answer": 1,
    "explanation": "'T' adalah Technical Feasibility (kelayakan teknis penyelesaian aset takberwujud sehingga siap digunakan atau dijual)."
  },
  {
    "tm": 8,
    "topic": "Provisi Garansi Jasa",
    "difficulty": "medium",
    "q": "Pendapatan dari penjualan kontrak garansi servis tambahan (Service-type warranty) yang dibayar di muka oleh pelanggan diakui sebagai...",
    "options": [
      "Pendapatan penjualan tunai langsung pada tanggal transaksi",
      "Pendapatan ditangguhkan (unearned revenue) dan diakui bertahap selama masa kontrak servis berjalan",
      "Provisi garansi di liabilitas lancar",
      "Pengurang harga pokok penjualan"
    ],
    "answer": 1,
    "explanation": "Sesuai IFRS 15 / PSAK 72, garansi tipe jasa merupakan kewajiban pelaksanaan terpisah, sehingga uang yang diterima dicatat sebagai pendapatan ditangguhkan dan diakui secara proporsional selama masa perlindungan."
  },
  {
    "tm": 9,
    "topic": "Penentuan Harga Obligasi",
    "difficulty": "medium",
    "q": "Jika tingkat suku bunga kupon obligasi (stated rate) adalah 8% per tahun, sedangkan suku bunga efektif pasar adalah 10% per tahun, maka obligasi tersebut akan diterbitkan pada...",
    "options": [
      "Nilai nominal (par value)",
      "Nilai diskonto (discount)",
      "Nilai premium",
      "Nilai jatuh tempo tanpa amortisasi"
    ],
    "answer": 1,
    "explanation": "Jika stated rate (8%) < market rate (10%), investor menuntut imbal hasil lebih tinggi sehingga obligasi dijual di bawah nilai nominal (diskonto)."
  },
  {
    "tm": 9,
    "topic": "Amortisasi Bunga Efektif Obligasi",
    "difficulty": "medium",
    "q": "Obligasi bernilai nominal Rp 1.000.000.000 diterbitkan pada harga Rp 950.000.000. Kupon kontraktual 8% dibayar tahunan. Tingkat bunga efektif pasar 9%. Berapakah beban bunga pada tahun pertama?",
    "options": [
      "Rp 80.000.000",
      "Rp 85.500.000",
      "Rp 90.000.000",
      "Rp 76.000.000"
    ],
    "answer": 1,
    "explanation": "Beban bunga efektif = Nilai tercatat awal obligasi × Suku bunga efektif pasar = Rp 950.000.000 × 9% = Rp 85.500.000."
  },
  {
    "tm": 9,
    "topic": "Obligasi Diterbitkan Antara Tanggal Bunga",
    "difficulty": "advanced",
    "q": "Obligasi kupon 12% nominal Rp 500 jt bertanggal 1 Januari diterbitkan pada 1 April pada kurs 100 ditambah bunga berjalan. Berapakah kas bunga berjalan yang dibayar pembeli kepada penerbit saat transaksi?",
    "options": [
      "Rp 0",
      "Rp 15.000.000",
      "Rp 30.000.000",
      "Rp 60.000.000"
    ],
    "answer": 1,
    "explanation": "Bunga berjalan 3 bulan (Jan - Mar) = Rp 500.000.000 × 12% × (3/12) = Rp 15.000.000."
  },
  {
    "tm": 9,
    "topic": "Biaya Penerbitan Obligasi (PSAK 71)",
    "difficulty": "medium",
    "q": "Berdasarkan PSAK 71, biaya penerbitan obligasi (seperti biaya jasa legal, akuntan, penjamin emisi) diperlakukan dengan cara...",
    "options": [
      "Dibebankan langsung ke laba rugi saat penerbitan",
      "Mengurangi nilai tercatat awal liabilitas obligasi dan diamortisasi menggunakan suku bunga efektif",
      "Dicatat sebagai aset tidak berwujud",
      "Ditambahkan ke agio saham"
    ],
    "answer": 1,
    "explanation": "PSAK 71 mensyaratkan biaya transaksi mengurangi nilai tercatat awal liabilitas keuangan, yang secara otomatis meningkatkan tingkat suku bunga efektif (effective interest rate) sepanjang masa utang."
  },
  {
    "tm": 9,
    "topic": "Amortisasi Premi Obligasi",
    "difficulty": "medium",
    "q": "Sepanjang masa berlakunya obligasi yang diterbitkan pada nilai premi, bagaimanakah tren nilai tercatat (carrying amount) dan beban bunga periodik obligasi tersebut?",
    "options": [
      "Nilai tercatat naik, beban bunga naik",
      "Nilai tercatat turun mendekati nilai nominal, beban bunga turun",
      "Nilai tercatat konstan, beban bunga naik",
      "Nilai tercatat turun, beban bunga konstan"
    ],
    "answer": 1,
    "explanation": "Pada obligasi premi, amortisasi mengurangi nilai tercatat obligasi menuju nilai nominal saat jatuh tempo. Karena nilai tercatat turun, beban bunga efektif (Carrying Amount × Market Rate) juga terus menurun."
  },
  {
    "tm": 10,
    "topic": "Pelunasan Dini Obligasi (Extinguishment)",
    "difficulty": "medium",
    "q": "Obligasi bernilai nominal Rp 500.000.000 dengan premi belum diamortisasi Rp 20.000.000 dilunasi sebelum jatuh tempo pada kurs 102. Berapakah laba atau rugi pelunasan dini obligasi?",
    "options": [
      "Rugi Rp 10.000.000",
      "Laba Rp 10.000.000",
      "Rugi Rp 20.000.000",
      "Laba Rp 20.000.000"
    ],
    "answer": 1,
    "explanation": "Nilai tercatat = Rp 500 jt + Rp 20 jt = Rp 520.000.000. Harga beli kembali = 102% × Rp 500 jt = Rp 510.000.000. Karena nilai tercatat > harga beli kembali, diakui Keuntungan (Laba) Pelunasan Dini = Rp 10.000.000."
  },
  {
    "tm": 10,
    "topic": "Restrukturisasi Utang Bermasalah (IFRIC 19)",
    "difficulty": "advanced",
    "q": "Berdasarkan IFRIC 19 / ISAK 28, jika debitur menyelesaikan kewajiban utang dengan menerbitkan saham sendiri kepada kreditur (Debt-for-Equity Swap), saham tersebut diukur pada...",
    "options": [
      "Nilai nominal saham yang diterbitkan",
      "Nilai tercatat utang yang dilunasi",
      "Nilai wajar instrumen ekuitas yang diterbitkan",
      "Nilai buku ekuitas historis"
    ],
    "answer": 2,
    "explanation": "IFRIC 19 menetapkan instrumen ekuitas yang diterbitkan untuk menyelesaikan liabilitas keuangan diukur pada NILAI WAJARNYA pada tanggal penyelesaian. Selisihnya diakui sebagai keuntungan pelunasan utang di Laba Rugi."
  },
  {
    "tm": 10,
    "topic": "Uji Modifikasi 10% (PSAK 71)",
    "difficulty": "advanced",
    "q": "Dalam restrukturisasi utang melalui modifikasi persyaratan (modification of terms), restrukturisasi dianggap substansial (extinguishment) jika nilai tunai arus kas berdasarkan persyaratan baru berbeda minimal...",
    "options": [
      "5% dari nilai tunai sisa arus kas utang awal",
      "10% dari nilai tunai sisa arus kas utang awal",
      "20% dari nilai tercatat utang",
      "50% dari nilai nominal utang"
    ],
    "answer": 1,
    "explanation": "Uji 10% (10% test) PSAK 71: Jika nilai sekarang arus kas persyaratan baru berbeda minimal 10% dari nilai sekarang sisa arus kas liabilitas keuangan semula, maka modifikasi dianggap substansial dan dicatat sebagai penghentian utang lama."
  },
  {
    "tm": 10,
    "topic": "Penyelesaian Utang dengan Aset Non-Kas",
    "difficulty": "medium",
    "q": "Debitur melunasi utang Rp 1.000 jt dengan menyerahkan tanah (Nilai buku Rp 600 jt, Nilai wajar Rp 850 jt). Berapakah keuntungan pelepasan tanah dan keuntungan restrukturisasi utang?",
    "options": [
      "Laba tanah Rp 250 jt; Laba restrukturisasi utang Rp 150 jt",
      "Laba tanah Rp 400 jt; Laba restrukturisasi utang Rp 0",
      "Laba tanah Rp 0; Laba restrukturisasi utang Rp 400 jt",
      "Laba tanah Rp 150 jt; Laba restrukturisasi utang Rp 250 jt"
    ],
    "answer": 0,
    "explanation": "Tahap 1: Laba pelepasan aset = Nilai wajar (850 jt) - Nilai buku (600 jt) = Rp 250.000.000. Tahap 2: Laba pelunasan utang = Nilai tercatat utang (1.000 jt) - Nilai wajar aset (850 jt) = Rp 150.000.000."
  },
  {
    "tm": 10,
    "topic": "Wesel Bayar dengan Hak Istimewa",
    "difficulty": "medium",
    "q": "Ketika perusahaan menerbitkan wesel bayar tanpa bunga dan memberikan hak istimewa kepada penerima wesel untuk membeli barang dengan harga diskon, nilai nominal wesel harus dialokasikan antara...",
    "options": [
      "Utang wesel dan beban operasional",
      "Nilai sekarang liabilitas wesel bayar dan pendapatan diterima di muka (unearned revenue)",
      "Modal saham dan agio obligasi",
      "Seluruhnya ke utang bunga berjalan"
    ],
    "answer": 1,
    "explanation": "Nilai nominal wesel dialokasikan antara nilai wajar liabilitas wesel (diukur dari PV arus kas) dan sisa diskonto yang mencerminkan pendapatan diterima di muka atas hak istimewa pembelian barang."
  },
  {
    "tm": 11,
    "topic": "Metode Biaya Saham Treasuri (Cost Method)",
    "difficulty": "medium",
    "q": "PT Berlian membeli kembali 1.000 lembar sahamnya (nilai nominal Rp 1.000) seharga Rp 5.000 per lembar menggunakan metode biaya. Jurnal yang benar adalah...",
    "options": [
      "Debit Saham Biasa Rp 1.000.000, Debit Agio Saham Rp 4.000.000, Kredit Kas Rp 5.000.000",
      "Debit Saham Treasuri Rp 5.000.000, Kredit Kas Rp 5.000.000",
      "Debit Investasi Saham Rp 5.000.000, Kredit Kas Rp 5.000.000",
      "Debit Laba Ditahan Rp 5.000.000, Kredit Kas Rp 5.000.000"
    ],
    "answer": 1,
    "explanation": "Pada Cost Method, akun Saham Treasuri didebit sebesar harga perolehan pembelian kembali (1.000 × Rp 5.000 = Rp 5.000.000) tanpa memperhatikan nilai nominal."
  },
  {
    "tm": 11,
    "topic": "Penjualan Saham Treasuri di Bawah Kos",
    "difficulty": "advanced",
    "q": "Saham treasuri dibeli pada harga Rp 5.000/lembar, lalu dijual kembali seharga Rp 3.500/lembar. Defisit sebesar Rp 1.500/lembar pertama kali didebit ke pos...",
    "options": [
      "Rugi Penjualan Saham Treasuri di Laporan Laba Rugi",
      "Agio Saham - Saham Treasuri (sampai saldonya habis), lalu sisanya ke Laba Ditahan",
      "Modal Saham Biasa",
      "Akumulasi Penghasilan Komprehensif Lain (OCI)"
    ],
    "answer": 1,
    "explanation": "Transaksi saham treasuri tidak pernah menghasilkan laba atau rugi di Laporan Laba Rugi. Defisit penjualan didebit ke Agio Saham Treasuri hingga nol, dan setiap sisa defisit didebit ke Laba Ditahan."
  },
  {
    "tm": 11,
    "topic": "Dividen Properti",
    "difficulty": "medium",
    "q": "Sebelum membagikan dividen properti (non-kas) kepada pemegang saham, entitas WAJIB...",
    "options": [
      "Menilai kembali aset properti tersebut ke nilai wajarnya dan mengakui laba/rugi revaluasi di Laba Rugi",
      "Membebankan seluruh nilai aset ke akun modal saham",
      "Menjual aset properti tersebut ke pihak berelasi",
      "Mengabaikan perubahan nilai pasar aset"
    ],
    "answer": 0,
    "explanation": "Berdasarkan IFRIC 17 / PSAK 55, pada tanggal pengumuman dividen properti, aset yang akan dibagikan harus disesuaikan ke nilai wajarnya dengan mengakui keuntungan/kerugian di Laba Rugi periode berjalan."
  },
  {
    "tm": 11,
    "topic": "Dividen Saham vs Pemecahan Saham (Stock Split)",
    "difficulty": "medium",
    "q": "Pernyataan manakah yang BENAR membedakan Dividen Saham dan Pemecahan Saham (Stock Split)?",
    "options": [
      "Stock split memerlukan ayat jurnal formal yang memindahkan saldo laba ditahan ke modal saham",
      "Dividen saham tidak mengubah total ekuitas tetapi mereklasifikasi laba ditahan ke modal saham, sedangkan stock split tidak memerlukan ayat jurnal dan tidak mengubah saldo laba ditahan",
      "Dividen saham menurunkan nilai nominal per lembar saham",
      "Stock split meningkatkan total saldo ekuitas pemegang saham"
    ],
    "answer": 1,
    "explanation": "Dividen saham memindahkan sebagian saldo Laba Ditahan ke Modal Saham (kapitalisasi laba ditahan). Sebaliknya, stock split hanya menambah jumlah lembar dan menurunkan nilai nominal per lembar tanpa ada ayat jurnal formal dan tanpa mengubah saldo akun apa pun."
  },
  {
    "tm": 11,
    "topic": "Saham Preferen Kumulatif (Dividends in Arrears)",
    "difficulty": "medium",
    "q": "Dividen saham preferen kumulatif yang belum diumumkan pada tahun-tahun sebelumnya (dividends in arrears) harus...",
    "options": [
      "Dicatat sebagai Utang Dividen di neraca",
      "Diungkapkan dalam Catatan atas Laporan Keuangan (CALK) dan bukan merupakan liabilitas sampai diumumkan",
      "Dihapusbukukan dari ekuitas",
      "Dibebankan sebagai kerugian penurunan modal"
    ],
    "answer": 1,
    "explanation": "Dividen menunggak (in arrears) BUKAN liabilitas karena belum ada kewajiban hukum pembayaran sebelum dewan direksi mendeklarasikannya. Namun, pos ini wajib diungkapkan di CALK."
  },
  {
    "tm": 12,
    "topic": "Obligasi Konversi (With-and-Without Method)",
    "difficulty": "advanced",
    "q": "Ketika entitas menerbitkan obligasi konversi, PSAK 50 mensyaratkan pemisahan komponen liabilitas dan ekuitas menggunakan metode...",
    "options": [
      "Metode Nilai Nominal Proporsional",
      "Metode Residual (With-and-Without Method): Nilai liabilitas diukur lebih dulu sebesar PV arus kas pasar, sisanya dialokasikan ke Ekuitas",
      "Metode Nilai Wajar Ekuitas Murni",
      "Seluruh nilai terbit diakui sebagai Liabilitas penuh hingga konversi terjadi"
    ],
    "answer": 1,
    "explanation": "Berdasarkan PSAK 50, instrumen majemuk dipisahkan dengan mengukur komponen liabilitas terlebih dahulu (nilai tunai kupon dan pokok menggunakan diskonto obligasi serupa tanpa hak konversi), dan nilai residualnya dialokasikan ke komponen ekuitas."
  },
  {
    "tm": 12,
    "topic": "Konversi Obligasi (Book Value Method)",
    "difficulty": "medium",
    "q": "Ketika pemegang obligasi konversi mengeksekusi hak konversinya menjadi saham biasa menggunakan Metode Nilai Buku (Book Value Method), jurnal pencatatan konversi tersebut...",
    "options": [
      "Mengakui laba atau rugi konversi di Laporan Laba Rugi",
      "Tidak mengakui laba atau rugi, melainkan mengalokasikan nilai tercatat bersih obligasi dan opsi konversi ke Modal Saham dan Agio Saham Biasa",
      "Menghapus seluruh nilai ekuitas pemegang saham",
      "Mencatat selisihnya ke laba komprehensif lain (OCI)"
    ],
    "answer": 1,
    "explanation": "Pada Book Value Method, tidak ada laba atau rugi yang diakui. Seluruh nilai buku liabilitas obligasi beserta komponen ekuitas opsi konversi ditransfer menjadi Modal Saham Biasa dan Agio Saham Biasa."
  },
  {
    "tm": 12,
    "topic": "Waran Saham Terpisah (Detachable Warrants)",
    "difficulty": "advanced",
    "q": "Obligasi diterbitkan bersama waran saham yang dapat dipisahkan (detachable). Jika nilai wajar obligasi tanpa waran dan nilai wajar waran di pasar sekunder keduanya diketahui andal, alokasi hasil emisi menggunakan metode...",
    "options": [
      "Metode Inkremental",
      "Metode Proporsional berdasarkan Nilai Wajar Relatif",
      "Metode Nilai Nominal Bersih",
      "Metode Residual 100% ke Waran"
    ],
    "answer": 1,
    "explanation": "Jika nilai wajar kedua instrumen dapat ditentukan secara andal, PSAK mensyaratkan alokasi hasil penerbitan berbasis Metode Proporsional (relatif fair value method)."
  },
  {
    "tm": 12,
    "topic": "Kompensasi Opsi Saham (PSAK 53 / IFRS 2)",
    "difficulty": "medium",
    "q": "Berdasarkan PSAK 53, total beban kompensasi atas program opsi saham karyawan (employee share options) diukur berdasarkan...",
    "options": [
      "Nilai wajar opsi pada tanggal hibah (Grant Date) menggunakan model penetapan harga opsi",
      "Nilai intrinsik opsi pada tanggal eksekusi (Exercise Date)",
      "Nilai nominal saham pada saat jatuh tempo vesting",
      "Harga pasar saham pada setiap tanggal akhir tahun pelaporan"
    ],
    "answer": 0,
    "explanation": "PSAK 53 mewajibkan transaksi pembayaran berbasis saham yang diselesaikan dengan instrumen ekuitas diukur pada NILAI WAJAR PADA TANGGAL HIBAH (Grant Date Fair Value) dan tidak disesuaikan kembali akibat fluktuasi harga pasar saham."
  },
  {
    "tm": 12,
    "topic": "Alokasi Beban Kompensasi Selama Vesting Period",
    "difficulty": "medium",
    "q": "Total nilai wajar opsi saham pada tanggal hibah adalah Rp 90.000.000 dengan periode masa bakti kerja (vesting period) 3 tahun. Berapakah beban kompensasi yang diakui pada akhir tahun pertama jika tidak ada karyawan yang keluar?",
    "options": [
      "Rp 90.000.000",
      "Rp 45.000.000",
      "Rp 30.000.000",
      "Rp 0 (diakui sekaligus di akhir tahun ke-3)"
    ],
    "answer": 2,
    "explanation": "Beban kompensasi diakui secara proporsional sepanjang periode vesting: Rp 90.000.000 / 3 tahun = Rp 30.000.000 per tahun."
  },
  {
    "tm": 13,
    "topic": "Laba Per Saham Dasar (Basic EPS)",
    "difficulty": "medium",
    "q": "PT Makmur melaporkan Laba Bersih Rp 500.000.000. Entitas memiliki 10.000 lembar saham preferen kumulatif 10% bernilai nominal Rp 50.000 yang beredar sepanjang tahun (belum diumumkan dividennya). Rata-rata tertimbang saham biasa beredar adalah 100.000 lembar. Berapakah Basic EPS?",
    "options": [
      "Rp 5.000 per lembar",
      "Rp 4.500 per lembar",
      "Rp 4.800 per lembar",
      "Rp 4.000 per lembar"
    ],
    "answer": 1,
    "explanation": "Dividen saham preferen kumulatif = 10.000 × Rp 50.000 × 10% = Rp 50.000.000 (harus tetap dikurangkan meskipun belum diumumkan!). Laba untuk saham biasa = Rp 500 jt - Rp 50 jt = Rp 450 jt. Basic EPS = Rp 450 jt / 100.000 lembar = Rp 4.500 per lembar."
  },
  {
    "tm": 13,
    "topic": "Weighted Average Shares (WASO) & Dividen Saham",
    "difficulty": "advanced",
    "q": "Saldo awal saham biasa 100.000 lembar. Pada 1 Mei diterbitkan 30.000 lembar. Pada 1 Juli dibagikan Dividen Saham 20%. Berapakah Weighted Average Shares Outstanding (WASO) untuk tahun tersebut?",
    "options": [
      "120.000 lembar",
      "144.000 lembar",
      "136.000 lembar",
      "156.000 lembar"
    ],
    "answer": 1,
    "explanation": "Dividen saham diperlakukan retrospektif seolah-olah terjadi sejak awal tahun: (1 Jan s.d. 1 Mei = 100.000 × 1,20 × 4/12 = 40.000) + (1 Mei s.d. 31 Des = 130.000 × 1,20 × 8/12 = 104.000). Total WASO = 40.000 + 104.000 = 144.000 lembar."
  },
  {
    "tm": 13,
    "topic": "If-Converted Method (Obligasi Konversi)",
    "difficulty": "advanced",
    "q": "Dalam menghitung Diluted EPS dengan metode If-Converted untuk obligasi konversi, penyesuaian yang dilakukan pada bagian PEMBILANG (Numerator) adalah...",
    "options": [
      "Mengurangkan seluruh nilai nominal obligasi",
      "Menambahkan kembali beban bunga obligasi dikurangi dampak pajak [Bunga × (1 - Tarif Pajak)]",
      "Menambahkan dividen saham preferen",
      "Mengurangkan beban bunga kotor tanpa memperhatikan pajak"
    ],
    "answer": 1,
    "explanation": "Karena diasumsikan obligasi telah dikonversi sejak awal tahun, perusahaan tidak perlu membayar bunga obligasi. Maka laba bersih disesuaikan ke atas sebesar beban bunga yang dihemat dikurangi penghematan pajaknya: Bunga × (1 - Tarif Pajak)."
  },
  {
    "tm": 13,
    "topic": "Treasury Stock Method (Opsi Saham)",
    "difficulty": "advanced",
    "q": "Entitas memiliki 10.000 opsi saham dengan harga eksekusi Rp 20.000. Rata-rata harga pasar saham biasa sepanjang tahun adalah Rp 25.000. Menggunakan Treasury Stock Method, berapakah tambahan lembar saham inkremental untuk penyebut Diluted EPS?",
    "options": [
      "10.000 lembar",
      "8.000 lembar",
      "2.000 lembar",
      "0 lembar"
    ],
    "answer": 2,
    "explanation": "Kas dari eksekusi = 10.000 × Rp 20.000 = Rp 200.000.000. Saham yang dibeli kembali di pasar = Rp 200.000.000 / Rp 25.000 = 8.000 lembar. Tambahan lembar inkremental = 10.000 - 8.000 = 2.000 lembar."
  },
  {
    "tm": 13,
    "topic": "Uji Anti-Dilutif (Anti-dilution Test)",
    "difficulty": "medium",
    "q": "Suatu sekuritas berpotensi saham biasa dikategorikan sebagai ANTI-DILUTIF jika efek konversinya...",
    "options": [
      "Menurunkan Laba Per Saham atau meningkatkan Rugi Per Saham",
      "Meningkatkan Laba Per Saham atau menurunkan Rugi Per Saham dari operasi berlanjut",
      "Menyebabkan ekuitas negatif",
      "Memiliki harga pasar di atas nilai nominal"
    ],
    "answer": 1,
    "explanation": "Sesuai PSAK 56, sekuritas anti-dilutif adalah sekuritas yang konversinya akan meningkatkan EPS atau menurunkan Rugi Per Saham. Sekuritas anti-dilutif DILARANG dimasukkan dalam perhitungan Diluted EPS."
  },
  {
    "tm": 14,
    "topic": "Klasifikasi Instrumen Keuangan (PSAK 71 / IFRS 9)",
    "difficulty": "medium",
    "q": "Investasi pada obligasi yang dimiliki dalam model bisnis yang bertujuan HANYA untuk mengoleksi arus kas kontraktual (pokok dan bunga) diklasifikasikan sebagai...",
    "options": [
      "Biaya Perolehan Diamortisasi (Amortised Cost)",
      "Nilai Wajar melalui Penghasilan Komprehensif Lain (FVOCI)",
      "Nilai Wajar melalui Laba Rugi (FVTPL)",
      "Aset Keuangan Derivatif"
    ],
    "answer": 0,
    "explanation": "Jika lolos SPPI test dan model bisnisnya murni 'hold to collect contractual cash flows', efek utang diklasifikasikan pada Amortised Cost."
  },
  {
    "tm": 14,
    "topic": "Metode Ekuitas (PSAK 15)",
    "difficulty": "medium",
    "q": "Investasi pada saham entitas lain sebesar 30% hak suara yang memberikan pengaruh signifikan harus dicatat menggunakan...",
    "options": [
      "Metode Nilai Wajar melalui Laba Rugi (FVTPL)",
      "Metode Biaya Perolehan Diamortisasi (Amortised Cost)",
      "Metode Ekuitas (Equity Method - PSAK 15)",
      "Konsolidasi penuh sebagai entitas anak"
    ],
    "answer": 2,
    "explanation": "Kepemilikan saham antara 20% hingga 50% menimbulkan pengaruh signifikan (significant influence) dan wajib menggunakan Metode Ekuitas (PSAK 15)."
  },
  {
    "tm": 14,
    "topic": "Penerimaan Dividen pada Metode Ekuitas",
    "difficulty": "medium",
    "q": "Ketika investor yang menerapkan Metode Ekuitas menerima dividen tunai dari entitas asosiasi, jurnal yang dicatat oleh investor adalah...",
    "options": [
      "Debit Kas, Kredit Pendapatan Dividen di Laba Rugi",
      "Debit Kas, Kredit Investasi pada Entitas Asosiasi (mengurangi saldo investasi)",
      "Debit Kas, Kredit Ekuitas Modal Saham",
      "Debit Kas, Kredit Keuntungan Belum Direalisasi OCI"
    ],
    "answer": 1,
    "explanation": "Pada Metode Ekuitas, dividen dipandang sebagai penarikan kembali modal investasi, sehingga mendebit Kas dan MENGKREDIT (MENGURANGI) akun Investasi pada Entitas Asosiasi."
  },
  {
    "tm": 14,
    "topic": "Daur Ulang (Recycling) OCI Efek Utang vs Efek Ekuitas",
    "difficulty": "advanced",
    "q": "Bagaimanakah perbedaan perlakuan daur ulang (recycling) keuntungan belum terealisasi di OCI saat instrumen dijual antara Efek Utang FVOCI dan Efek Ekuitas FVOCI?",
    "options": [
      "Keduanya wajib direklasifikasi (recycled) ke Laba Rugi",
      "Efek Utang FVOCI direklasifikasi ke Laba Rugi, sedangkan Efek Ekuitas FVOCI dilarang direklasifikasi ke Laba Rugi (hanya boleh ditransfer ke Laba Ditahan)",
      "Efek Utang dilarang direklasifikasi, sedangkan Efek Ekuitas wajib direklasifikasi",
      "Keduanya dilarang direklasifikasi dan harus tetap berada di OCI selamanya"
    ],
    "answer": 1,
    "explanation": "Aturan emas PSAK 71: Akumulasi OCI Efek Utang FVOCI wajib di-recycle ke Laba Rugi saat dijual. Sebaliknya, akumulasi OCI Efek Ekuitas FVOCI (pilihan irrevocable) DILARANG KERAS di-recycle ke Laba Rugi."
  },
  {
    "tm": 14,
    "topic": "Model Kerugian Kredit Ekspektasian (ECL Model)",
    "difficulty": "advanced",
    "q": "Menurut PSAK 71, model penurunan nilai aset keuangan berbasis kerugian kredit ekspektasian (Expected Credit Loss - ECL) mengharuskan pengakuan penyisihan kerugian pada Tahap 1 (Stage 1 - risiko kredit belum meningkat signifikan) sebesar...",
    "options": [
      "100% kerugian kredit sepanjang umur aset (lifetime ECL)",
      "ECL 12 bulan (12-month expected credit losses)",
      "Nol penyisihan hingga terjadi gagal bayar aktual",
      "Rata-rata suku bunga pasar historis"
    ],
    "answer": 1,
    "explanation": "Pada Tahap 1 (Stage 1), entitas mengukur penyisihan kerugian sebesar 12-month ECL (bagian dari lifetime ECL yang timbul dari peristiwa gagal bayar yang mungkin terjadi dalam 12 bulan setelah tanggal pelaporan)."
  }
];

export const AKK202_QUIZ: QuizQuestion[] = [...AKK202_QUIZ_UTS, ...AKK202_QUIZ_UAS];
