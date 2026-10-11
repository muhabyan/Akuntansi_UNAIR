// =============================================================
// src/data/quizzes/akk202.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Akuntansi Keuangan Menengah II (AKK202)
// Berdasarkan Kieso Intermediate Accounting IFRS 5e & PSAK/ISAK IAI
// 75 soal: 40 Pra-UTS dan 35 Pra-UAS TM09-TM15; sumber pasca-UTS Kieso IFRS 5e dan RPP lokal.
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
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "difficulty": "medium",
    "q": "Entitas menjual garansi jasa (service-type warranty) secara terpisah dari produknya. Bagaimana perlakuan kas yang diterima atas garansi tersebut?",
    "options": [
      "Diakui seluruhnya sebagai pendapatan pada tanggal penjualan",
      "Dicatat sebagai Unearned Warranty Revenue dan diakui sebagai pendapatan selama masa layanan",
      "Diakui sebagai beban dan provisi garansi pada periode penjualan",
      "Hanya diungkapkan dalam catatan sebagai liabilitas kontinjensi"
    ],
    "answer": 1,
    "explanation": "Garansi jasa (service-type) dijual terpisah, sehingga kas yang diterima dicatat sebagai Unearned Warranty Revenue dan diakui sebagai pendapatan selama masa layanan. Pengakuan beban dan provisi garansi pada periode penjualan adalah perlakuan garansi jaminan (assurance-type), bukan garansi jasa."
  },
  {
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "difficulty": "medium",
    "q": "Kieso Illustration 12.2 (PPN 10%): Hill Farms Wheat menjual gandum kepada Sunshine Baking €1.000, Sunshine Baking menjual roti kepada Halo Supermarket €2.000, dan Halo Supermarket menjual roti kepada konsumen €2.400. Berapa PPN yang disetor Halo Supermarket ke kantor pajak, dan berapa total PPN yang disetor seluruh rantai?",
    "options": [
      "Halo €240; total disetor €540",
      "Halo €240; total disetor €240",
      "Halo €40; total disetor €240",
      "Halo €40; total disetor €540"
    ],
    "answer": 2,
    "explanation": "PPN disetor = PPN keluaran − PPN masukan. Halo memungut €240 tetapi sudah membayar PPN €200 kepada Sunshine Baking, sehingga menyetor €240 − €200 = €40. Hill Farms Wheat menyetor €100 dan Sunshine Baking €200 − €100 = €100, sehingga total disetor €100 + €100 + €40 = €240, yaitu PPN yang ditanggung konsumen akhir (Kieso p. 1029). €540 adalah total PPN yang dipungut, bukan yang disetor."
  },
  {
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "difficulty": "advanced",
    "q": "Denson Machinery menjual 100 mesin seharga USD 5.000 per unit pada 2025, masing-masing dengan garansi jaminan 1 tahun. Estimasi biaya garansi USD 200 per unit dan biaya garansi aktual 2025 USD 4.000. Mengikuti pola jurnal Kieso Example 12.6, bagaimana biaya aktual 2025 dan penyesuaian 31 Desember 2025 dicatat?",
    "options": [
      "Biaya aktual: debit Warranty Expense USD 4.000; penyesuaian: debit Warranty Expense dan kredit Warranty Liability USD 16.000",
      "Biaya aktual: debit Warranty Liability USD 4.000; penyesuaian: debit Warranty Expense dan kredit Warranty Liability USD 16.000",
      "Biaya aktual: debit Warranty Expense USD 4.000; penyesuaian: debit Warranty Expense dan kredit Warranty Liability USD 20.000",
      "Biaya aktual: debit Warranty Expense USD 4.000; tanpa penyesuaian sampai klaim 2026 terjadi"
    ],
    "answer": 0,
    "explanation": "Biaya garansi aktual tahun penjualan didebit ke Warranty Expense, bukan Warranty Liability (Kieso p. 1042). Estimasi total = 100 × USD 200 = USD 20.000, sehingga penyesuaian 31 Desember = USD 20.000 − USD 4.000 = USD 16.000; beban 2025 USD 20.000 dan Warranty Liability USD 16.000. Bila biaya USD 4.000 didebit ke Warranty Liability sementara penyesuaian tetap USD 16.000, beban hanya USD 16.000 dan liabilitas hanya USD 12.000."
  },
  {
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "difficulty": "medium",
    "q": "Pada 2 Januari 2025 Hamlin Auto menjual mobil €30.000 dan garansi jasa terpisah €900 untuk tambahan 3 tahun (2028–2030), yang pendapatannya diakui secara garis lurus. Bagaimana €900 dicatat pada tanggal penjualan, dan berapa Warranty Revenue yang diakui pada 2028?",
    "options": [
      "Kredit Sales Revenue €900; Warranty Revenue 2028 nihil",
      "Kredit Warranty Liability €900; Warranty Revenue 2028 €300",
      "Kredit Unearned Warranty Revenue €900; Warranty Revenue 2028 €900",
      "Kredit Unearned Warranty Revenue €900; Warranty Revenue 2028 €300"
    ],
    "answer": 3,
    "explanation": "Kieso memisahkan kas €30.900 berdasarkan harga yang dinyatakan terpisah: Sales Revenue €30.000 dan Unearned Warranty Revenue €900. Garansi jasa adalah kewajiban pelaksanaan terpisah yang diakui garis lurus selama 2028–2030, sehingga 31 Desember 2028 dicatat Unearned Warranty Revenue €300 dan Warranty Revenue €300 (€900 ÷ 3) (Kieso p. 1044)."
  },
  {
    "tm": 6,
    "topic": "Liabilitas Jangka Pendek, Provisi, dan Kontinjensi",
    "difficulty": "advanced",
    "q": "Fluffy Cake Mix menjual 300.000 kotak adonan kue pada 2025. Pelanggan menukarkan £1 dan 10 tutup kotak untuk satu mangkuk yang berharga perolehan £2, dan perusahaan mengestimasi 60% tutup kotak akan ditukarkan. Selama 2025 ditukarkan 60.000 tutup kotak. Berapa Premium Liability per 31 Desember 2025?",
    "options": [
      "£18.000",
      "£12.000",
      "£24.000",
      "£30.000"
    ],
    "answer": 1,
    "explanation": "Estimasi tutup ditukar = 300.000 × 60% = 180.000; biaya estimasi penukaran = 180.000 ÷ 10 × (£2 − £1) = £18.000, karena pelanggan membayar £1 per mangkuk. Biaya penukaran yang sudah terjadi = 6.000 mangkuk × £1 = £6.000, sehingga Premium Liability = £18.000 − £6.000 = £12.000 dan Premium Expense 2025 = £18.000 (Kieso p. 1047)."
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
    "explanation": "Biaya penerbitan mengurangi kas bersih dan nilai tercatat awal liabilitas; biaya itu tidak dicatat sebagai aset tangguhan (Kieso p. 1171, catatan kaki 3). Karena nilai tercatat awal lebih kecil, tarif efektif yang dipakai untuk amortisasi menjadi lebih tinggi."
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
    "explanation": "Selisih 10% atau lebih (atau perubahan fundamental syarat dan ketentuan) berarti modifikasi substansial: utang lama dihentikan dan utang baru dicatat pada nilai wajar, dengan gain atau loss di laba rugi. Bila selisihnya di bawah 10% dan syarat serta ketentuannya tidak berubah secara fundamental, utang lama tetap: selisihnya ditangguhkan lalu diamortisasi selama sisa umur utang pada tarif efektif historis (Kieso pp. 1129–1131 dan catatan kaki 14 di p. 1173)."
  }
];

export const AKK202_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "medium",
    "q": "Evermaster menerbitkan nominal €100.000, kupon tahunan 8%, yield 10%, bunga semesteran, dengan harga €92.278. Berapa interest expense (beban bunga efektif) semester pertama setelah pembulatan buku? Rujukan: Kieso IFRS 5e, halaman PDF 1110-1112.",
    "options": [
      "€4.000",
      "€5.000",
      "€4.614",
      "€9.228"
    ],
    "answer": 2,
    "explanation": "Beban bunga adalah €92.278 × 10% × 6/12 = €4.613,90, dibulatkan €4.614. Cash coupon (kas kupon) €4.000 berbeda dari beban efektif. Rujukan: Kieso IFRS 5e, halaman PDF 1110-1112."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "medium",
    "q": "Yield tahunan 10% dan umur lima tahun dengan pembayaran semesteran memakai kombinasi periode yang mana dalam present value (nilai kini)? Rujukan: Kieso IFRS 5e, halaman PDF 1111, 1172.",
    "options": [
      "Sepuluh periode; bunga 5%",
      "Lima periode; bunga 10%",
      "Sepuluh periode; bunga 10%",
      "Lima periode; bunga 5%"
    ],
    "answer": 0,
    "explanation": "Semesteran berarti dua periode setiap tahun. Lima tahun menjadi sepuluh periode dan bunga efektif tiap semester 5%. Rujukan: Kieso IFRS 5e, halaman PDF 1111, 1172."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "medium",
    "q": "Kupon Evermaster 8% dan yield 6% menghasilkan harga €108.530. Carrying amount (nilai tercatat) setelah bunga semester pertama menurut tabel buku adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1112-1113.",
    "options": [
      "€108.530",
      "€109.274",
      "€104.530",
      "€107.786"
    ],
    "answer": 3,
    "explanation": "Beban bunga €3.256, kas €4.000, dan amortisasi premium (premi) €744. Nilai tercatat berkurang €108.530 - €744 = €107.786. Rujukan: Kieso IFRS 5e, halaman PDF 1112-1113."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "medium",
    "q": "Evermaster menerbitkan obligasi at par pada 1 Mei. Accrued interest (bunga berjalan) diterima €2.667 dan kupon 1 Juli €4.000. Beban bunga dua bulan setelah penerbitan menurut buku adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1114-1115.",
    "options": [
      "€2.667",
      "€1.333",
      "€4.000",
      "€6.667"
    ],
    "answer": 1,
    "explanation": "Kas kupon mencakup enam bulan, sedangkan penerbitan berlangsung setelah empat bulan berlalu. Beban dua bulan = €4.000 - €2.667 = €1.333. Rujukan: Kieso IFRS 5e, halaman PDF 1114-1115."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "medium",
    "q": "Untuk bond issue costs (biaya emisi obligasi) pada liabilitas amortized cost, bagaimana pengaruhnya menurut buku? Rujukan: Kieso IFRS 5e, halaman PDF 1171-1172.",
    "options": [
      "Mengurangi nilai awal; yield meningkat",
      "Menambah nilai awal; yield menurun",
      "Mengurangi nilai awal; yield menurun",
      "Menambah nilai awal; yield meningkat"
    ],
    "answer": 0,
    "explanation": "Biaya emisi mengurangi carrying amount awal, sehingga bunga efektif yang menghubungkan hasil neto dengan pembayaran kontraktual meningkat. Rujukan: Kieso IFRS 5e, halaman PDF 1171-1172."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "Turtle Cove menerima USD7.721,80 untuk zero-interest-bearing note (wesel tanpa kupon), nominal USD10.000, tiga tahun, bunga implisit 9%. Beban bunga tahun pertama menurut buku adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1118-1119.",
    "options": [
      "USD900,00",
      "USD757,51",
      "USD694,96",
      "USD2.278,20"
    ],
    "answer": 2,
    "explanation": "Interest expense (beban bunga) = USD7.721,80 × 9% = USD694,96. Tanpa kas kupon, beban ini menambah Notes Payable. Rujukan: Kieso IFRS 5e, halaman PDF 1118-1119."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "Carrying amount (nilai tercatat) Evermaster €94.925 dan reacquisition price (harga tebus) €101.000. Berapa loss on extinguishment (rugi penghentian utang)? Rujukan: Kieso IFRS 5e, halaman PDF 1127-1128.",
    "options": [
      "€6.075",
      "€1.000",
      "€5.075",
      "€7.722"
    ],
    "answer": 0,
    "explanation": "Rugi = €101.000 - €94.925 = €6.075. Jurnal menghapus nilai tercatat, mengakui rugi, dan membayar kas. Rujukan: Kieso IFRS 5e, halaman PDF 1127-1128."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "Bonn menyerahkan aset bernilai buku €21.000.000, nilai wajar €16.000.000, untuk melunasi utang €20.000.000. Kombinasi hasilnya adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1128-1129.",
    "options": [
      "Laba aset €5.000.000; rugi utang €4.000.000",
      "Rugi aset €4.000.000; laba utang €5.000.000",
      "Laba aset €4.000.000; rugi utang €5.000.000",
      "Rugi aset €5.000.000; laba utang €4.000.000"
    ],
    "answer": 3,
    "explanation": "Loss on disposal (rugi pelepasan) membandingkan nilai buku aset dengan nilai wajarnya. Gain on extinguishment (laba penghentian) membandingkan utang dengan nilai wajar imbalan. Rujukan: Kieso IFRS 5e, halaman PDF 1128-1129."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "Edmonds memakai fair value option (opsi nilai wajar). Utang turun dari €500.000 ke €480.000 khusus karena risiko kredit sendiri. Jalur perubahan pada contoh sumber adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1131-1132.",
    "options": [
      "Laba nilai wajar melalui pendapatan",
      "Laba nilai wajar melalui OCI",
      "Rugi nilai wajar melalui OCI",
      "Rugi nilai wajar melalui pendapatan"
    ],
    "answer": 1,
    "explanation": "Utang berkurang €20.000. Dalam contoh risiko kredit sendiri, perubahan masuk OCI, yaitu penghasilan komprehensif lain. Rujukan: Kieso IFRS 5e, halaman PDF 1131-1132."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "Catatan 14 Kieso menilai substantial modification (modifikasi substansial) melalui uji kuantitatif atau perubahan fundamental. Bunga untuk uji selisih arus kas yang disebut sumber adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1173.",
    "options": [
      "Suku bunga efektif historis",
      "Suku bunga kupon baru",
      "Suku bunga pasar baru",
      "Suku bunga bebas risiko"
    ],
    "answer": 0,
    "explanation": "Uji selisih sekurangnya 10% memakai historical effective-interest rate (bunga efektif historis). Perubahan fundamental persyaratan juga dapat relevan. Ini berbeda dari pengukuran nilai wajar utang baru setelah penghentian. Rujukan: Kieso IFRS 5e, halaman PDF 1173."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "Vine memiliki 100.000 saham nominal £1 dan menyatakan share dividend (dividen saham) 10%; nilai pasar £8. Transfer saldo laba menurut buku IFRS adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1202-1204.",
    "options": [
      "£80.000",
      "£100.000",
      "£10.000",
      "£8.000"
    ],
    "answer": 2,
    "explanation": "Dividen saham 10.000 lembar × par value (nominal) £1 = £10.000. Buku memakai nilai nominal dan mereklasifikasi komponen ekuitas. Rujukan: Kieso IFRS 5e, halaman PDF 1202-1204."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "Pacific menjual kembali 1.000 saham treasuri pada USD8, biaya USD11 per saham, ketika Share Premium - Treasury tersisa USD1.000. Debit Retained Earnings (saldo laba) adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1193.",
    "options": [
      "USD2.000",
      "USD1.000",
      "USD3.000",
      "USD8.000"
    ],
    "answer": 0,
    "explanation": "Selisih biaya dan kas USD3.000 memakai saldo agio treasuri USD1.000 dahulu, lalu retained earnings USD2.000. Transaksi tidak menghasilkan rugi laba rugi. Rujukan: Kieso IFRS 5e, halaman PDF 1193."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "Dividends in arrears (dividen preferen kumulatif tertunggak) sebelum deklarasi diperlakukan sebagai? Rujukan: Kieso IFRS 5e, halaman PDF 1187.",
    "options": [
      "Diakui sebagai liabilitas lancar",
      "Diakui sebagai aset lancar",
      "Dicatat sebagai beban bunga",
      "Diungkapkan tanpa pengakuan liabilitas"
    ],
    "answer": 3,
    "explanation": "Kewajiban dividen baru dicatat ketika direksi mendeklarasikannya. Sebelum itu, dividen tertunggak diungkapkan dalam catatan. Rujukan: Kieso IFRS 5e, halaman PDF 1187."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "Tsen mendeklarasikan property dividend (dividen properti) berupa investasi bernilai buku HKD1.250.000 dan nilai wajar HKD2.000.000. Penyesuaian aset sebelum deklarasi adalah laba sebesar? Rujukan: Kieso IFRS 5e, halaman PDF 1201.",
    "options": [
      "HKD1.250.000",
      "HKD750.000",
      "HKD2.000.000",
      "HKD3.250.000"
    ],
    "answer": 1,
    "explanation": "Nilai wajar lebih tinggi HKD750.000. Liabilitas dividen berikutnya dicatat sebesar nilai wajar HKD2.000.000. Rujukan: Kieso IFRS 5e, halaman PDF 1201."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "Government grant (hibah pemerintah) untuk aset menurut pembahasan Kieso memakai pendekatan yang mana? Rujukan: Kieso IFRS 5e, halaman PDF 774-775.",
    "options": [
      "Pendapatan sistematis sepanjang biaya terkait",
      "Modal disetor sepanjang biaya terkait",
      "Pendapatan sekaligus sebelum biaya terkait",
      "Liabilitas permanen sepanjang biaya terkait"
    ],
    "answer": 0,
    "explanation": "Income approach mengakui hibah bersama biaya terkait. Untuk aset, buku menjelaskan deferred grant revenue atau pengurang nilai tercatat aset. Rujukan: Kieso IFRS 5e, halaman PDF 774-775."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Roche menerima €2.000.000 atas convertible bonds (obligasi konversi) dan mengukur komponen utang €1.805.626. Komponen conversion equity (ekuitas konversi) adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1258.",
    "options": [
      "€1.805.626",
      "€2.000.000",
      "€194.374",
      "€388.766"
    ],
    "answer": 2,
    "explanation": "With-and-without method mengukur liabilitas dahulu. Ekuitas residual = €2.000.000 - €1.805.626 = €194.374. Rujukan: Kieso IFRS 5e, halaman PDF 1258."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Siemens menerima €10.200.000 untuk obligasi dengan waran. Nilai kini utang tanpa waran €9.707.852. Alokasi ekuitas menurut with-and-without method adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1268-1269.",
    "options": [
      "€492.148",
      "€9.707.852",
      "€10.200.000",
      "€292.148"
    ],
    "answer": 0,
    "explanation": "Komponen waran residual = €10.200.000 - €9.707.852 = €492.148. Share warrants (waran saham) diukur sebagai sisa setelah liabilitas. Rujukan: Kieso IFRS 5e, halaman PDF 1268-1269."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Roche melakukan conversion (konversi) normal sebelum jatuh tempo memakai book value method. Perlakuan laba rugi konversinya adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1260-1261.",
    "options": [
      "Selalu mengakui laba pasar konversi",
      "Selalu mengakui rugi pasar konversi",
      "Mengakui seluruh ekuitas sebagai pendapatan",
      "Tidak mengakui laba rugi konversi"
    ],
    "answer": 3,
    "explanation": "Nilai tercatat liabilitas dan conversion equity dipindahkan ke share capital serta share premium. Repurchase (pembelian kembali) memiliki pengukuran terpisah. Rujukan: Kieso IFRS 5e, halaman PDF 1260-1261."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Chen mempunyai grant-date compensation (nilai kompensasi tanggal hibah) ¥22.000.000 dan masa jasa dua tahun. Beban kompensasi tahunan pada contoh buku adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1275.",
    "options": [
      "¥22.000.000",
      "¥11.000.000",
      "¥4.400.000",
      "¥17.600.000"
    ],
    "answer": 1,
    "explanation": "Service period (masa jasa) dua tahun membagi beban ¥22.000.000 menjadi ¥11.000.000 per tahun. Rujukan: Kieso IFRS 5e, halaman PDF 1275."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Opsi Chen yang sudah vested kedaluwarsa tanpa pelaksanaan. Bagaimana kompensasi atas jasa yang sudah diterima diperlakukan? Rujukan: Kieso IFRS 5e, halaman PDF 1276.",
    "options": [
      "Beban tetap; agio dipindahkan",
      "Beban dibalik; agio dipindahkan",
      "Beban tetap; liabilitas ditambahkan",
      "Beban dibalik; pendapatan ditambahkan"
    ],
    "answer": 0,
    "explanation": "Kedaluwarsa opsi tidak membatalkan jasa yang telah diberikan. Share premium (agio opsi) dipindahkan ke akun agio opsi kedaluwarsa. Rujukan: Kieso IFRS 5e, halaman PDF 1276."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "Franks memiliki saham 90.000 selama tiga bulan, 120.000 selama tiga bulan, 81.000 selama empat bulan, dan 141.000 selama dua bulan. Weighted-average shares (saham tertimbang) adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1286.",
    "options": [
      "141.000 saham",
      "108.000 saham",
      "103.000 saham",
      "90.000 saham"
    ],
    "answer": 2,
    "explanation": "Bobotnya menghasilkan 22.500 + 30.000 + 27.000 + 23.500 = 103.000 saham. Saldo akhir berbeda dari weighted average. Rujukan: Kieso IFRS 5e, halaman PDF 1286."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "Mayfield mempunyai laba disesuaikan £283.200 dan saham potensial tertimbang 144.000. Diluted EPS (EPS dilusian) dibulatkan menjadi? Rujukan: Kieso IFRS 5e, halaman PDF 1294-1295.",
    "options": [
      "£1,97",
      "£2,10",
      "£1,46",
      "£2,83"
    ],
    "answer": 0,
    "explanation": "If-converted method menghasilkan £283.200 / 144.000 = £1,9667, dibulatkan £1,97 per saham. Rujukan: Kieso IFRS 5e, halaman PDF 1294-1295."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "Ada 1.500 opsi dengan exercise price €30 dan average market price €50. Incremental shares (tambahan saham neto) melalui treasury-share method adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1297.",
    "options": [
      "900 saham",
      "1.500 saham",
      "2.400 saham",
      "600 saham"
    ],
    "answer": 3,
    "explanation": "Kas asumsi €45.000 membeli kembali 900 saham. Tambahan neto = 1.500 - 900 = 600 saham. Rujukan: Kieso IFRS 5e, halaman PDF 1297."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "Martin memiliki basic EPS USD2,10. Asumsi konversi obligasi menghasilkan EPS USD2,24. Perlakuan obligasi dalam diluted EPS adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1299-1300.",
    "options": [
      "Dimasukkan karena efeknya dilutif",
      "Dikeluarkan karena efeknya antidilutif",
      "Dimasukkan karena jumlahnya material",
      "Dikeluarkan karena kuponnya kumulatif"
    ],
    "answer": 1,
    "explanation": "Antidilutive berarti asumsi konversi menaikkan EPS atau mengurangi rugi per saham. Instrumen tersebut dikeluarkan dari diluted EPS. Rujukan: Kieso IFRS 5e, halaman PDF 1299-1300."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "Pada basic EPS, cumulative preference dividends (dividen preferen kumulatif) yang belum dideklarasikan memengaruhi pembilang sebesar? Rujukan: Kieso IFRS 5e, halaman PDF 1285.",
    "options": [
      "Dividen preferen tahun berjalan",
      "Seluruh tunggakan tahun sebelumnya",
      "Seluruh nilai nominal saham",
      "Seluruh nilai pasar saham"
    ],
    "answer": 0,
    "explanation": "Dividen kumulatif tahun berjalan dikurangkan walaupun belum dideklarasikan. Tunggakan tahun sebelumnya telah diperhitungkan dalam EPS periode sebelumnya. Rujukan: Kieso IFRS 5e, halaman PDF 1285."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "Graff mempunyai amortized cost £106.732 dan fair value £105.000 untuk efek utang HFCS. Rugi perubahan nilai wajar dalam OCI adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1377-1378.",
    "options": [
      "£8.621",
      "£10.000",
      "£1.732",
      "£3.111"
    ],
    "answer": 2,
    "explanation": "Nilai wajar berada £1.732 di bawah amortized cost. Penurunan pada contoh ini masuk OCI, terpisah dari interest revenue. Rujukan: Kieso IFRS 5e, halaman PDF 1377-1378."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "Pada Stage 2 expected credit loss (kerugian kredit ekspektasian), pasangan cadangan dan dasar pendapatan bunga adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1396-1397.",
    "options": [
      "Lifetime ECL; nilai tercatat bruto",
      "12-month ECL; nilai tercatat bruto",
      "Lifetime ECL; nilai tercatat neto",
      "12-month ECL; nilai tercatat neto"
    ],
    "answer": 0,
    "explanation": "Risiko kredit meningkat signifikan memakai lifetime ECL (kerugian sepanjang umur), tetapi bunga dihitung pada gross carrying amount (nilai tercatat bruto). Rujukan: Kieso IFRS 5e, halaman PDF 1396-1397."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "Robinson membeli obligasi €92.278 dengan yield tahunan 10% dan kupon semesteran €4.000. Interest revenue (pendapatan bunga efektif) semester pertama menurut buku adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1372-1374.",
    "options": [
      "€4.000",
      "€614",
      "€9.228",
      "€4.614"
    ],
    "answer": 3,
    "explanation": "Pendapatan bunga €92.278 × 10% × 6/12, dibulatkan €4.614. Diskonto €614 menambah Debt Investments. Rujukan: Kieso IFRS 5e, halaman PDF 1372-1374."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "Untuk menentukan amortized cost (biaya perolehan diamortisasi) pada efek utang, analisis awal menggabungkan apa? Rujukan: Kieso IFRS 5e, halaman PDF 1370-1372.",
    "options": [
      "Harga pasar dan harga nominal",
      "Model bisnis dan arus kas",
      "Jumlah saham dan jumlah pemegang",
      "Harga beli dan kebijakan dividen"
    ],
    "answer": 1,
    "explanation": "Business model (tujuan pengelolaan) dan contractual cash flows (arus kas kontraktual pokok dan bunga) menentukan kelayakan kategori. Rujukan: Kieso IFRS 5e, halaman PDF 1370-1372."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "Dalam contoh Mayhew, seluruh jumlah dinyatakan dalam ribuan yen. Investasi tercatat ¥200.000 dan PV kas yang diharapkan ¥187.320. Expected credit loss adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1399.",
    "options": [
      "¥12.680",
      "¥16.000",
      "¥20.000",
      "¥187.320"
    ],
    "answer": 0,
    "explanation": "ECL = ¥200.000 - ¥187.320 = ¥12.680 dalam ribuan yen. Kerugian diukur dengan nilai kini, sehingga berbeda dari cash shortfalls tanpa diskonto. Rujukan: Kieso IFRS 5e, halaman PDF 1399."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "Meredith membeli 25% saham Pirates seharga £200.000. Laba Pirates £80.000 dan dividen £20.000. Ending investment (saldo investasi akhir) menurut equity method adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1391-1392, 1452.",
    "options": [
      "£220.000",
      "£205.000",
      "£215.000",
      "£200.000"
    ],
    "answer": 2,
    "explanation": "Interpretasi E16.20: bagian laba £20.000 menambah investasi; dividen £5.000 mengurangi investasi. Saldo £215.000. Rujukan: Kieso IFRS 5e, halaman PDF 1391-1392, 1452."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "Pada equity method (metode ekuitas), dividen yang diterima investor dari investee dicatat bagaimana? Rujukan: Kieso IFRS 5e, halaman PDF 1391-1392.",
    "options": [
      "Kas bertambah; investasi berkurang",
      "Kas bertambah; pendapatan bertambah",
      "Kas berkurang; investasi bertambah",
      "Kas berkurang; pendapatan berkurang"
    ],
    "answer": 0,
    "explanation": "Bagian laba sudah diakui sebagai Investment Revenue. Dividen mendistribusikan aset neto investee sehingga mengurangi carrying amount investasi. Rujukan: Kieso IFRS 5e, halaman PDF 1391-1392."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "Republic menjual investasi ekuitas Hawthorne yang menggunakan pilihan non-trading OCI. Perlakuan kumulatif perubahan nilai wajarnya adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1389, 1396.",
    "options": [
      "Dipindahkan ke pendapatan melalui recycling",
      "Dihapus melalui beban bunga langsung",
      "Dipindahkan ke utang melalui recycling",
      "Tetap dalam ekuitas tanpa recycling"
    ],
    "answer": 3,
    "explanation": "Pilihan OCI efek ekuitas tidak melakukan recycling (reklasifikasi ke laba rugi). Efek utang FVOCI memakai aturan pelepasan yang berbeda. Rujukan: Kieso IFRS 5e, halaman PDF 1389, 1396."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "Kepemilikan 20% atau lebih menjadi praduga significant influence (pengaruh signifikan). Cara memperlakukan praduga tersebut adalah? Rujukan: Kieso IFRS 5e, halaman PDF 1390-1391.",
    "options": [
      "Anggap selalu sebagai pengendalian penuh",
      "Uji dengan bukti hubungan aktual",
      "Anggap selalu sebagai investasi pasif",
      "Uji berdasarkan dividen kas saja"
    ],
    "answer": 1,
    "explanation": "Buku memberi contoh representasi direksi, partisipasi kebijakan, dan transaksi material. Bukti yang bertentangan dapat mengubah kesimpulan pengaruh. Rujukan: Kieso IFRS 5e, halaman PDF 1390-1391."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "Pengantar consolidation (konsolidasi) pada buku dan catatan pengendalian menilai apa? Rujukan: Kieso IFRS 5e, halaman PDF 1173, 1393-1394.",
    "options": [
      "Kekuasaan dan pengaruh atas imbalan",
      "Nominal saham dan harga penerbitan",
      "Dividen tunai dan harga nominal",
      "Kupon obligasi dan bunga implisit"
    ],
    "answer": 0,
    "explanation": "Control (pengendalian) melibatkan power, eksposur atas variable returns, dan kemampuan menggunakan power untuk memengaruhi imbal hasil. Mayoritas saham menjadi indikator awal, bukan satu-satunya bukti. Rujukan: Kieso IFRS 5e, halaman PDF 1173, 1393-1394."
  }
];

export const AKK202_QUIZ: QuizQuestion[] = [...AKK202_QUIZ_UTS, ...AKK202_QUIZ_UAS];
