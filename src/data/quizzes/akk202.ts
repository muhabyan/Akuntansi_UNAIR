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
    "q": "Evermaster issues five-year €100,000 bonds with an 8% annual coupon, semiannual payments, a 10% annual yield, and proceeds of €92,278. What is first-period interest expense, rounded to whole euros? Source: Kieso IFRS 5e, PDF pages 1110-1112.",
    "options": [
      "€4,000",
      "€4,614",
      "€5,000",
      "€9,228"
    ],
    "answer": 1,
    "explanation": "Beban bunga adalah €92.278 × 10% × 6/12 = €4.613,90, dibulatkan €4.614. Cash coupon (kas kupon) €4.000 berbeda dari beban efektif. Rujukan: Kieso IFRS 5e, halaman PDF 1110-1112."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "medium",
    "q": "An analyst values Evermaster's five-year bonds using a 10% annual market yield and semiannual coupons. Which discounting inputs correctly match the cash-flow frequency? Source: Kieso IFRS 5e, PDF pages 1111, 1172.",
    "options": [
      "Five periods at 10%",
      "Ten periods at 10%",
      "Ten periods at 5%",
      "Five periods at 5%"
    ],
    "answer": 2,
    "explanation": "Semesteran berarti dua periode setiap tahun. Lima tahun menjadi sepuluh periode dan bunga efektif tiap semester 5%. Rujukan: Kieso IFRS 5e, halaman PDF 1111, 1172."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "medium",
    "q": "Evermaster issues €100,000 bonds with an 8% annual coupon, a 6% annual yield, and a €108,530 issue price. Interest expense for the first half-year is €3,256. What carrying amount follows the €4,000 coupon payment? Source: Kieso IFRS 5e, PDF pages 1112-1113.",
    "options": [
      "€107,786",
      "€108,530",
      "€109,274",
      "€104,530"
    ],
    "answer": 0,
    "explanation": "Beban bunga €3.256, kas €4.000, dan amortisasi premium (premi) €744. Nilai tercatat berkurang €108.530 - €744 = €107.786. Rujukan: Kieso IFRS 5e, halaman PDF 1112-1113."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "medium",
    "q": "Evermaster issues bonds at par on May 1 and collects €2,667 accrued interest. The July 1 cash coupon is €4,000. What interest expense belongs to the issuer's two-month borrowing period, using source rounding? Source: Kieso IFRS 5e, PDF pages 1114-1115.",
    "options": [
      "€1,333",
      "€2,667",
      "€4,000",
      "€6,667"
    ],
    "answer": 0,
    "explanation": "Kas kupon mencakup enam bulan, sedangkan penerbitan berlangsung setelah empat bulan berlalu. Beban dua bulan = €4.000 - €2.667 = €1.333. Rujukan: Kieso IFRS 5e, halaman PDF 1114-1115."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "medium",
    "q": "An issuer incurs directly attributable bond issue costs on a liability measured at amortized cost. Compared with an otherwise identical issue without these costs, which effect follows? Source: Kieso IFRS 5e, PDF pages 1171-1172.",
    "options": [
      "Increase carrying amount; reduce yield",
      "Reduce carrying amount; reduce yield",
      "Increase carrying amount; increase yield",
      "Reduce carrying amount; increase yield"
    ],
    "answer": 3,
    "explanation": "Biaya emisi mengurangi carrying amount awal, sehingga bunga efektif yang menghubungkan hasil neto dengan pembayaran kontraktual meningkat. Rujukan: Kieso IFRS 5e, halaman PDF 1171-1172."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "advanced",
    "q": "Evermaster's first semiannual coupon is €4,000, interest expense is €4,614, and the bond is carried at amortized cost. Which adjustment completes the coupon entry? Source: Kieso IFRS 5e, PDF pages 1111-1112.",
    "options": [
      "Debit Bonds Payable €614",
      "Credit Bonds Payable €614",
      "Credit Interest Payable €614",
      "Debit Interest Expense €614"
    ],
    "answer": 1,
    "explanation": "Discount amortization (amortisasi diskonto) €4.614 - €4.000 = €614 dikreditkan ke Bonds Payable untuk menaikkan nilai tercatat. Debit Interest Expense €4.614; kredit Cash €4.000 dan Bonds Payable €614. Rujukan: Kieso IFRS 5e, halaman PDF 1111-1112."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "advanced",
    "q": "Evermaster's discount bonds have a €92,892 carrying amount after the first payment. The next half-year yield is 5% and the next coupon is €4,000. What carrying amount follows the second period, using whole-euro interest rounding? Source: Kieso IFRS 5e, PDF pages 1111-1112.",
    "options": [
      "€92,247",
      "€97,537",
      "€92,892",
      "€93,537"
    ],
    "answer": 3,
    "explanation": "Bunga efektif kedua dibulatkan dari €92.892 × 5% menjadi €4.645. Amortisasi €645 menambah carrying amount (nilai tercatat), sehingga saldo €93.537. Rujukan: Kieso IFRS 5e, halaman PDF 1111-1112."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "advanced",
    "q": "Evermaster owes the next €4,000 coupon on January 1. At December 31, the completed half-year has €4,645 interest expense. Which credit combination correctly records the year-end accrual? Source: Kieso IFRS 5e, PDF pages 1112.",
    "options": [
      "Cash account €4,000; Bonds Payable €645",
      "Interest Payable €4,645; Bonds Payable €0",
      "Interest Payable €4,000; Bonds Payable €645",
      "Bonds Payable €4,000; Interest Payable €645"
    ],
    "answer": 2,
    "explanation": "Accrued interest (bunga akrual) dikreditkan €4.000 ke Interest Payable karena kas belum dibayar. Amortisasi diskonto €645 dikreditkan ke Bonds Payable; debit Interest Expense €4.645. Rujukan: Kieso IFRS 5e, halaman PDF 1112."
  },
  {
    "tm": 9,
    "topic": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
    "difficulty": "advanced",
    "q": "Evermaster's premium-bond valuation uses a €100,000 principal, a €4,000 semiannual coupon, a principal PV factor of 0.74409, and an annuity PV factor of 8.53020. What issue price results, rounded to whole euros? Source: Kieso IFRS 5e, PDF pages 1112-1113.",
    "options": [
      "€108,530",
      "€74,409",
      "€34,121",
      "€100,000"
    ],
    "answer": 0,
    "explanation": "Present value (nilai kini) pokok €74.409 ditambah kupon €34.120,80 menghasilkan €108.529,80, dibulatkan €108.530. Faktor tersebut sesuai 10 semester pada 3%. Rujukan: Kieso IFRS 5e, halaman PDF 1112-1113."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "Turtle Cove receives $7,721.80 for a three-year, $10,000 zero-interest-bearing note with a 9% implicit annual rate. What first-year interest expense should be recognized? Source: Kieso IFRS 5e, PDF pages 1118-1119.",
    "options": [
      "$694.96",
      "$900.00",
      "$757.51",
      "$2,278.20"
    ],
    "answer": 0,
    "explanation": "Interest expense (beban bunga) = USD7.721,80 × 9% = USD694,96. Tanpa kas kupon, beban ini menambah Notes Payable. Rujukan: Kieso IFRS 5e, halaman PDF 1118-1119."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "Evermaster repurchases bonds for €101,000 after updating their carrying amount to €94,925. Excluding accrued interest, what loss on extinguishment should be recognized? Source: Kieso IFRS 5e, PDF pages 1127-1128.",
    "options": [
      "€1,000",
      "€5,075",
      "€7,722",
      "€6,075"
    ],
    "answer": 3,
    "explanation": "Rugi = €101.000 - €94.925 = €6.075. Jurnal menghapus nilai tercatat, mengakui rugi, dan membayar kas. Rujukan: Kieso IFRS 5e, halaman PDF 1127-1128."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "Bonn transfers real estate with a €21,000,000 carrying amount and a €16,000,000 fair value to settle €20,000,000 debt. Which pair separates disposal from debt extinguishment correctly? Source: Kieso IFRS 5e, PDF pages 1128-1129.",
    "options": [
      "Asset gain €5,000,000; debt loss €4,000,000",
      "Asset loss €4,000,000; debt gain €5,000,000",
      "Asset loss €5,000,000; debt gain €4,000,000",
      "Asset gain €4,000,000; debt loss €5,000,000"
    ],
    "answer": 2,
    "explanation": "Loss on disposal (rugi pelepasan) membandingkan nilai buku aset dengan nilai wajarnya. Gain on extinguishment (laba penghentian) membandingkan utang dengan nilai wajar imbalan. Rujukan: Kieso IFRS 5e, halaman PDF 1128-1129."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "Edmonds' liability measured using the fair value option falls from €500,000 to €480,000 solely because of its own credit risk. Under the source example, how is the change reported? Source: Kieso IFRS 5e, PDF pages 1131-1132.",
    "options": [
      "Recognize €20,000 gain in profit",
      "Recognize €20,000 gain in OCI",
      "Recognize €20,000 loss in OCI",
      "Recognize €20,000 loss in profit"
    ],
    "answer": 1,
    "explanation": "Utang berkurang €20.000. Dalam contoh risiko kredit sendiri, perubahan masuk OCI, yaitu penghasilan komprehensif lain. Rujukan: Kieso IFRS 5e, halaman PDF 1131-1132."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "An analyst applies Kieso's quantitative test for substantially different debt terms by comparing the present value of revised cash flows with the original liability. Which rate is used for that test? Source: Kieso IFRS 5e, PDF pages 1173.",
    "options": [
      "The original effective interest rate",
      "The newly negotiated coupon rate",
      "The prevailing market interest rate",
      "The current risk-free interest rate"
    ],
    "answer": 0,
    "explanation": "Uji selisih sekurangnya 10% memakai historical effective-interest rate (bunga efektif historis). Perubahan fundamental persyaratan juga dapat relevan. Ini berbeda dari pengukuran nilai wajar utang baru setelah penghentian. Rujukan: Kieso IFRS 5e, halaman PDF 1173."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "advanced",
    "q": "Turtle Cove's zero-interest-bearing note starts at $7,721.80. First-year interest is $694.96, no coupon is paid, and the effective annual rate remains 9%. What is second-year interest expense, rounded to cents? Source: Kieso IFRS 5e, PDF pages 1118-1119.",
    "options": [
      "$694.96",
      "$900.00",
      "$757.51",
      "$1,452.47"
    ],
    "answer": 2,
    "explanation": "Saldo awal tahun kedua $8.416,76. Effective interest (bunga efektif) = $8.416,76 × 9% = $757,5084, dibulatkan $757,51; nominal $10.000 bukan dasar bunga periode tersebut. Rujukan: Kieso IFRS 5e, halaman PDF 1118-1119."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "medium",
    "q": "Bonn settles €20,000,000 debt by issuing 320,000 ordinary shares with €10 par value and €16,000,000 total fair value. What amount is credited to Share Premium? Source: Kieso IFRS 5e, PDF pages 1128-1129.",
    "options": [
      "€16,800,000",
      "€12,800,000",
      "€3,200,000",
      "€4,000,000"
    ],
    "answer": 1,
    "explanation": "Share capital (modal saham) = 320.000 × €10 = €3.200.000. Share premium (agio saham) = €16.000.000 - €3.200.000 = €12.800.000; gain penghentian utang terpisah €4.000.000. Rujukan: Kieso IFRS 5e, halaman PDF 1128-1129."
  },
  {
    "tm": 10,
    "topic": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
    "difficulty": "advanced",
    "q": "Evermaster repurchases bonds carried at €94,925 for €101,000, with interest already updated and settled separately. Which debit pair belongs in the extinguishment entry? Source: Kieso IFRS 5e, PDF pages 1127-1128.",
    "options": [
      "Bonds Payable €101,000; Loss €6,075",
      "Bonds Payable €94,925; Gain €6,075",
      "Bonds Payable €101,000; Gain €6,075",
      "Bonds Payable €94,925; Loss €6,075"
    ],
    "answer": 3,
    "explanation": "Debit Bonds Payable €94.925 menghapus carrying amount. Debit Loss on Extinguishment (rugi penghentian) €6.075 dan kredit Cash €101.000 menyeimbangkan jurnal. Rujukan: Kieso IFRS 5e, halaman PDF 1127-1128."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "Vine has 100,000 ordinary shares with £1 par value and declares a 10% share dividend when market price is £8. Following the source's IFRS treatment, how much is transferred from retained earnings? Source: Kieso IFRS 5e, PDF pages 1202-1204.",
    "options": [
      "£10,000",
      "£80,000",
      "£100,000",
      "£8,000"
    ],
    "answer": 0,
    "explanation": "Dividen saham 10.000 lembar × par value (nominal) £1 = £10.000. Buku memakai nilai nominal dan mereklasifikasi komponen ekuitas. Rujukan: Kieso IFRS 5e, halaman PDF 1202-1204."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "Pacific resells 1,000 treasury shares for $8 each; their cost is $11 each. Share Premium - Treasury has a $1,000 credit balance before the resale. What debit to Retained Earnings is required? Source: Kieso IFRS 5e, PDF pages 1193.",
    "options": [
      "$1,000",
      "$2,000",
      "$3,000",
      "$8,000"
    ],
    "answer": 1,
    "explanation": "Selisih biaya dan kas USD3.000 memakai saldo agio treasuri USD1.000 dahulu, lalu retained earnings USD2.000. Transaksi tidak menghasilkan rugi laba rugi. Rujukan: Kieso IFRS 5e, halaman PDF 1193."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "A company has cumulative preference dividends in arrears that its board has not declared at year-end. Which year-end treatment is appropriate for these arrears? Source: Kieso IFRS 5e, PDF pages 1187.",
    "options": [
      "Disclose arrears; recognize no liability",
      "Recognize liability; omit arrears disclosure",
      "Recognize asset; recognize dividend revenue",
      "Recognize expense; recognize interest payable"
    ],
    "answer": 0,
    "explanation": "Kewajiban dividen baru dicatat ketika direksi mendeklarasikannya. Sebelum itu, dividen tertunggak diungkapkan dalam catatan. Rujukan: Kieso IFRS 5e, halaman PDF 1187."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "Tsen declares a property dividend using an investment carried at HK$1,250,000 with a HK$2,000,000 fair value. What gain must be recognized before declaring the dividend liability? Source: Kieso IFRS 5e, PDF pages 1201.",
    "options": [
      "HK$1,250,000",
      "HK$2,000,000",
      "HK$750,000",
      "HK$3,250,000"
    ],
    "answer": 2,
    "explanation": "Nilai wajar lebih tinggi HKD750.000. Liabilitas dividen berikutnya dicatat sebesar nilai wajar HKD2.000.000. Rujukan: Kieso IFRS 5e, halaman PDF 1201."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "A company receives a government grant related to a depreciable asset. Which recognition pattern follows the income approach described in the source? Source: Kieso IFRS 5e, PDF pages 774-775.",
    "options": [
      "Recognize capital over related costs",
      "Recognize income before related costs",
      "Recognize liability without subsequent recognition",
      "Recognize income over related costs"
    ],
    "answer": 3,
    "explanation": "Income approach mengakui hibah bersama biaya terkait. Untuk aset, buku menjelaskan deferred grant revenue atau pengurang nilai tercatat aset. Rujukan: Kieso IFRS 5e, halaman PDF 774-775."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "medium",
    "q": "Vine has £50,000 retained earnings and 100,000 £1-par shares before declaring a 10% share dividend. Under the source treatment, what retained earnings balance remains after the transfer? Source: Kieso IFRS 5e, PDF pages 1202-1204.",
    "options": [
      "£50,000",
      "£30,000",
      "£0",
      "£40,000"
    ],
    "answer": 3,
    "explanation": "Share dividend (dividen saham) mereklasifikasi £10.000 berdasarkan nominal. Retained earnings (saldo laba) = £50.000 - £10.000 = £40.000; total ekuitas tidak berubah. Rujukan: Kieso IFRS 5e, halaman PDF 1202-1204."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "advanced",
    "q": "Pacific resells treasury shares below their cost after exhausting the available Share Premium - Treasury balance. Which account absorbs the remaining shortfall under the cost method? Source: Kieso IFRS 5e, PDF pages 1192-1193.",
    "options": [
      "Debit Share Capital account",
      "Debit Disposal Loss account",
      "Debit Retained Earnings account",
      "Credit Dividend Revenue account"
    ],
    "answer": 2,
    "explanation": "Kekurangan setelah agio treasuri habis dibebankan ke Retained Earnings (saldo laba), bukan loss pada laba rugi. Treasury shares (saham treasuri) merupakan transaksi ekuitas perusahaan sendiri. Rujukan: Kieso IFRS 5e, halaman PDF 1192-1193."
  },
  {
    "tm": 11,
    "topic": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
    "difficulty": "advanced",
    "q": "Tsen has remeasured the investment distributed as a property dividend to HK$2,000,000. Which entry records the declaration before any asset is distributed? Source: Kieso IFRS 5e, PDF pages 1201.",
    "options": [
      "Debit Dividends Payable; credit Equity Investments",
      "Debit Retained Earnings; credit Dividends Payable",
      "Debit Retained Earnings; credit Equity Investments",
      "Debit Equity Investments; credit Dividend Revenue"
    ],
    "answer": 1,
    "explanation": "Declaration (deklarasi) menciptakan liabilitas: debit Retained Earnings dan kredit Property Dividends Payable HKD2.000.000. Distribusi kemudian mendebit liabilitas dan mengkredit aset. Rujukan: Kieso IFRS 5e, halaman PDF 1201."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Roche receives €2,000,000 from convertible bonds and measures the liability component at €1,805,626. What amount is initially recognized as conversion equity? Source: Kieso IFRS 5e, PDF pages 1258.",
    "options": [
      "€1,805,626",
      "€194,374",
      "€2,000,000",
      "€388,766"
    ],
    "answer": 1,
    "explanation": "With-and-without method mengukur liabilitas dahulu. Ekuitas residual = €2.000.000 - €1.805.626 = €194.374. Rujukan: Kieso IFRS 5e, halaman PDF 1258."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Siemens receives €10,200,000 from bonds issued with detachable equity warrants. The debt component without warrants is valued at €9,707,852. What residual amount is allocated to warrant equity? Source: Kieso IFRS 5e, PDF pages 1268-1269.",
    "options": [
      "€9,707,852",
      "€10,200,000",
      "€292,148",
      "€492,148"
    ],
    "answer": 3,
    "explanation": "Komponen waran residual = €10.200.000 - €9.707.852 = €492.148. Share warrants (waran saham) diukur sebagai sisa setelah liabilitas. Rujukan: Kieso IFRS 5e, halaman PDF 1268-1269."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Roche's convertible bonds are converted normally before maturity using the book value method. Which treatment of conversion gains and losses is appropriate? Source: Kieso IFRS 5e, PDF pages 1260-1261.",
    "options": [
      "Recognize all conversion equity as income",
      "Recognize market conversion gain in income",
      "Recognize no conversion gain or loss",
      "Recognize market conversion loss in income"
    ],
    "answer": 2,
    "explanation": "Nilai tercatat liabilitas dan conversion equity dipindahkan ke share capital serta share premium. Repurchase (pembelian kembali) memiliki pengukuran terpisah. Rujukan: Kieso IFRS 5e, halaman PDF 1260-1261."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Chen's equity-settled options have ¥22,000,000 total grant-date compensation cost and a two-year service period. Assuming services are provided as expected, what annual compensation expense is recognized? Source: Kieso IFRS 5e, PDF pages 1275.",
    "options": [
      "¥22,000,000",
      "¥4,400,000",
      "¥11,000,000",
      "¥17,600,000"
    ],
    "answer": 2,
    "explanation": "Service period (masa jasa) dua tahun membagi beban ¥22.000.000 menjadi ¥11.000.000 per tahun. Rujukan: Kieso IFRS 5e, halaman PDF 1275."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Chen's remaining vested options expire unexercised after the employees have completed their services. Which treatment follows for the previously recognized expense and option equity? Source: Kieso IFRS 5e, PDF pages 1276.",
    "options": [
      "Reverse expense; transfer option equity",
      "Keep expense; establish option liability",
      "Keep expense; transfer option equity",
      "Reverse expense; recognize option income"
    ],
    "answer": 2,
    "explanation": "Kedaluwarsa opsi tidak membatalkan jasa yang telah diberikan. Share premium (agio opsi) dipindahkan ke akun agio opsi kedaluwarsa. Rujukan: Kieso IFRS 5e, halaman PDF 1276."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "advanced",
    "q": "On Roche's normal conversion, debt has a €1,894,464 carrying amount, conversion equity is €194,374, and the ordinary shares issued have €500,000 total par value. What Share Premium is recognized? Source: Kieso IFRS 5e, PDF pages 1260-1261.",
    "options": [
      "€1,394,464",
      "€1,500,000",
      "€1,894,464",
      "€1,588,838"
    ],
    "answer": 3,
    "explanation": "Book value method (metode nilai buku) memindahkan liabilitas dan ekuitas konversi ke modal saham dan agio. €1.894.464 + €194.374 - €500.000 = €1.588.838. Rujukan: Kieso IFRS 5e, halaman PDF 1260-1261."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "medium",
    "q": "Chen's executives exercise 2,000 of 10,000 vested options. Total option equity is ¥22,000,000. What amount is debited to Share Premium - Share Options on exercise? Source: Kieso IFRS 5e, PDF pages 1275-1276.",
    "options": [
      "¥4,400,000",
      "¥22,000,000",
      "¥17,600,000",
      "¥12,000,000"
    ],
    "answer": 0,
    "explanation": "Exercise (pelaksanaan) 20% memindahkan 20% × ¥22.000.000 = ¥4.400.000 dari agio opsi. Nilai itu ditambahkan ke kas untuk membentuk modal saham dan agio biasa. Rujukan: Kieso IFRS 5e, halaman PDF 1275-1276."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "advanced",
    "q": "Chen's executives exercise 2,000 options at ¥6,000 each on ¥100-par shares. The related option equity is ¥4,400,000. What credit to Share Premium - Ordinary results? Source: Kieso IFRS 5e, PDF pages 1276.",
    "options": [
      "¥11,800,000",
      "¥16,200,000",
      "¥4,400,000",
      "¥12,200,000"
    ],
    "answer": 1,
    "explanation": "Kas ¥12.000.000 ditambah agio opsi ¥4.400.000, dikurangi share capital (modal saham) ¥200.000, menghasilkan agio biasa ¥16.200.000. Rujukan: Kieso IFRS 5e, halaman PDF 1276."
  },
  {
    "tm": 12,
    "topic": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
    "difficulty": "advanced",
    "q": "A preparer allocates Siemens' bond-and-warrant proceeds in proportion to separate debt and warrant fair values. Which correction matches the with-and-without method in the assigned IFRS example? Source: Kieso IFRS 5e, PDF pages 1268-1269.",
    "options": [
      "Measure debt first; allocate residual equity",
      "Measure equity first; allocate residual debt",
      "Measure both proportionally; allocate equal premium",
      "Measure cash only; defer warrant equity"
    ],
    "answer": 0,
    "explanation": "With-and-without method (alokasi dengan dan tanpa komponen ekuitas) mengukur nilai kini liabilitas terlebih dahulu. Selisih hasil emisi dan liabilitas menjadi ekuitas; alokasi proporsional tidak digunakan dalam contoh tersebut. Rujukan: Kieso IFRS 5e, halaman PDF 1268-1269."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "Franks has 90,000 shares outstanding for three months, 120,000 for three months, 81,000 for four months, and 141,000 for two months. With no share split, what weighted-average share count is used? Source: Kieso IFRS 5e, PDF pages 1286.",
    "options": [
      "141,000 shares",
      "108,000 shares",
      "103,000 shares",
      "90,000 shares"
    ],
    "answer": 2,
    "explanation": "Bobotnya menghasilkan 22.500 + 30.000 + 27.000 + 23.500 = 103.000 saham. Saldo akhir berbeda dari weighted average. Rujukan: Kieso IFRS 5e, halaman PDF 1286."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "After applying the if-converted method, Mayfield has £283,200 adjusted earnings and 144,000 adjusted weighted-average shares. What diluted EPS is reported to two decimals? Source: Kieso IFRS 5e, PDF pages 1294-1295.",
    "options": [
      "£1.97",
      "£2.10",
      "£1.46",
      "£2.83"
    ],
    "answer": 0,
    "explanation": "If-converted method menghasilkan £283.200 / 144.000 = £1,9667, dibulatkan £1,97 per saham. Rujukan: Kieso IFRS 5e, halaman PDF 1294-1295."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "A company has 1,500 options with a €30 exercise price and a €50 average market price. Assuming the options are outstanding all year, what incremental shares enter diluted EPS under the treasury-share method? Source: Kieso IFRS 5e, PDF pages 1297.",
    "options": [
      "900 shares",
      "600 shares",
      "1,500 shares",
      "2,400 shares"
    ],
    "answer": 1,
    "explanation": "Kas asumsi €45.000 membeli kembali 900 saham. Tambahan neto = 1.500 - 900 = 600 saham. Rujukan: Kieso IFRS 5e, halaman PDF 1297."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "Martin's basic EPS is $2.10. Assuming conversion of its bonds would produce $2.24 EPS. What treatment of these bonds is appropriate in diluted EPS? Source: Kieso IFRS 5e, PDF pages 1299-1300.",
    "options": [
      "Include bonds because they are dilutive",
      "Include bonds because they are material",
      "Exclude bonds because coupons are cumulative",
      "Exclude bonds because they are antidilutive"
    ],
    "answer": 3,
    "explanation": "Antidilutive berarti asumsi konversi menaikkan EPS atau mengurangi rugi per saham. Instrumen tersebut dikeluarkan dari diluted EPS. Rujukan: Kieso IFRS 5e, halaman PDF 1299-1300."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "A company has cumulative preference shares and has not declared the current-year preference dividend. Which amount is deducted from earnings in computing current-year basic EPS? Source: Kieso IFRS 5e, PDF pages 1285.",
    "options": [
      "The current-year cumulative preference dividend",
      "All previous-year unpaid preference dividends",
      "The preference shares' nominal capital",
      "The preference shares' market valuation"
    ],
    "answer": 0,
    "explanation": "Dividen kumulatif tahun berjalan dikurangkan walaupun belum dideklarasikan. Tunggakan tahun sebelumnya telah diperhitungkan dalam EPS periode sebelumnya. Rujukan: Kieso IFRS 5e, halaman PDF 1285."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "Mayfield has £210,000 net income, no preference dividends, and 100,000 weighted-average ordinary shares before considering its convertible debt. What basic EPS is reported? Source: Kieso IFRS 5e, PDF pages 1293-1295.",
    "options": [
      "£1.97",
      "£2.10",
      "£2.83",
      "£1.46"
    ],
    "answer": 1,
    "explanation": "Basic EPS (EPS dasar) = laba untuk pemegang saham biasa £210.000 / 100.000 = £2,10. Penyesuaian bunga konversi digunakan dalam EPS dilusian. Rujukan: Kieso IFRS 5e, halaman PDF 1293-1295."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "advanced",
    "q": "Mayfield's second convertible bond series is issued on April 1. Full-year effective interest expense would be £80,000 and the tax rate is 40%. What after-tax earnings adjustment is used for the issue year? Source: Kieso IFRS 5e, PDF pages 1293-1295.",
    "options": [
      "£48,000",
      "£60,000",
      "£36,000",
      "£32,000"
    ],
    "answer": 2,
    "explanation": "If-converted adjustment (penyesuaian asumsi konversi) = £80.000 × 9/12 × (1 - 40%) = £36.000. Pajak dan tanggal penerbitan memengaruhi pembilang. Rujukan: Kieso IFRS 5e, halaman PDF 1293-1295."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "Mayfield's second convertible series is issued on April 1 and would convert into 32,000 ordinary shares. How many weighted incremental shares are added under the if-converted method for that year? Source: Kieso IFRS 5e, PDF pages 1293-1295.",
    "options": [
      "32,000 shares",
      "8,000 shares",
      "20,000 shares",
      "24,000 shares"
    ],
    "answer": 3,
    "explanation": "Saham konversi dibobot dari penerbitan pada 1 April: 32.000 × 9/12 = 24.000. Menggunakan satu tahun penuh akan membesarkan denominator (penyebut). Rujukan: Kieso IFRS 5e, halaman PDF 1293-1295."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "medium",
    "q": "Under the treasury-share method, 1,500 options have a €30 exercise price and a €50 average market price. How many shares could the assumed exercise proceeds repurchase? Source: Kieso IFRS 5e, PDF pages 1297.",
    "options": [
      "600 shares",
      "1,500 shares",
      "2,500 shares",
      "900 shares"
    ],
    "answer": 3,
    "explanation": "Assumed proceeds (hasil pelaksanaan asumsi) = 1.500 × €30 = €45.000. Pada harga rata-rata €50, kas itu membeli 900 saham; tambahan neto menjadi 600 saham. Rujukan: Kieso IFRS 5e, halaman PDF 1297."
  },
  {
    "tm": 13,
    "topic": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
    "difficulty": "advanced",
    "q": "A company reports a loss from continuing operations and income from a discontinued operation. Which earnings measure controls whether potential ordinary shares are dilutive? Source: Kieso IFRS 5e, PDF pages 1317-1318, 1367.",
    "options": [
      "Total income including discontinuance",
      "Income from continuing operations",
      "Income from discontinued operations",
      "Operating cash before taxation"
    ],
    "answer": 1,
    "explanation": "Control number (angka pengendali) memakai income from continuing operations (laba dari operasi berkelanjutan). Instrumen antidilutif terhadap angka tersebut dikeluarkan meskipun total laba mempunyai arah berbeda. Rujukan: Kieso IFRS 5e, halaman PDF 1317-1318, 1367."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "Graff's held-for-collection-and-selling debt investment has £106,732 amortized cost and £105,000 fair value at year-end. With no impairment adjustment in this example, what unrealized holding loss is recognized in OCI? Source: Kieso IFRS 5e, PDF pages 1377-1378.",
    "options": [
      "£8,621",
      "£10,000",
      "£1,732",
      "£3,111"
    ],
    "answer": 2,
    "explanation": "Nilai wajar berada £1.732 di bawah amortized cost. Penurunan pada contoh ini masuk OCI, terpisah dari interest revenue. Rujukan: Kieso IFRS 5e, halaman PDF 1377-1378."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "A debt investment has a significant increase in credit risk but is not credit-impaired. Which ECL allowance and interest-revenue basis match Stage 2? Source: Kieso IFRS 5e, PDF pages 1396-1397.",
    "options": [
      "12-month ECL; gross carrying amount",
      "Lifetime ECL; net carrying amount",
      "Lifetime ECL; gross carrying amount",
      "12-month ECL; net carrying amount"
    ],
    "answer": 2,
    "explanation": "Risiko kredit meningkat signifikan memakai lifetime ECL (kerugian sepanjang umur), tetapi bunga dihitung pada gross carrying amount (nilai tercatat bruto). Rujukan: Kieso IFRS 5e, halaman PDF 1396-1397."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "Robinson purchases a bond for €92,278 with a 10% annual effective yield and a €4,000 semiannual coupon. What first-period interest revenue is recognized, rounded to whole euros? Source: Kieso IFRS 5e, PDF pages 1372-1374.",
    "options": [
      "€4,000",
      "€4,614",
      "€614",
      "€9,228"
    ],
    "answer": 1,
    "explanation": "Pendapatan bunga €92.278 × 10% × 6/12, dibulatkan €4.614. Diskonto €614 menambah Debt Investments. Rujukan: Kieso IFRS 5e, halaman PDF 1372-1374."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "A preparer classifies a debt investment as amortized cost solely because the bond has a stated maturity. Which additional combination must be evaluated to justify that classification? Source: Kieso IFRS 5e, PDF pages 1370-1372.",
    "options": [
      "Trading business model; principal-and-interest cash flows",
      "Collection business model; equity-price-linked cash flows",
      "Dividend business model; equity-price-linked cash flows",
      "Collection business model; principal-and-interest cash flows"
    ],
    "answer": 3,
    "explanation": "Business model (tujuan pengelolaan) dan contractual cash flows (arus kas kontraktual pokok dan bunga) menentukan kelayakan kategori. Rujukan: Kieso IFRS 5e, halaman PDF 1370-1372."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "In Mayhew's example, all amounts are in thousands of yen. The debt investment has a ¥200,000 carrying amount and expected cash flows with a ¥187,320 present value. What ECL allowance results? Source: Kieso IFRS 5e, PDF pages 1399.",
    "options": [
      "¥12,680",
      "¥16,000",
      "¥20,000",
      "¥187,320"
    ],
    "answer": 0,
    "explanation": "ECL = ¥200.000 - ¥187.320 = ¥12.680 dalam ribuan yen. Kerugian diukur dengan nilai kini, sehingga berbeda dari cash shortfalls tanpa diskonto. Rujukan: Kieso IFRS 5e, halaman PDF 1399."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "advanced",
    "q": "Robinson receives a €4,000 coupon when effective interest revenue is €4,614. Which entry for the investment account completes the receipt entry at amortized cost? Source: Kieso IFRS 5e, PDF pages 1372-1374.",
    "options": [
      "Debit Debt Investments €614",
      "Credit Debt Investments €614",
      "Debit Interest Receivable €614",
      "Credit Fair-Value Adjustment €614"
    ],
    "answer": 0,
    "explanation": "Discount amortization (amortisasi diskonto) menambah Debt Investments €614. Jurnal lengkap: debit Cash €4.000 dan Debt Investments €614; kredit Interest Revenue €4.614. Rujukan: Kieso IFRS 5e, halaman PDF 1372-1374."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "medium",
    "q": "Graff's debt investment produces first- and second-half-year effective interest revenue of £4,324 and £4,297. Its year-end fair-value decrease is £1,732. What interest revenue belongs in annual profit before any impairment? Source: Kieso IFRS 5e, PDF pages 1376-1378.",
    "options": [
      "£10,000",
      "£6,889",
      "£1,732",
      "£8,621"
    ],
    "answer": 3,
    "explanation": "Interest revenue (pendapatan bunga) menjumlahkan £4.324 + £4.297 = £8.621. OCI loss £1.732 disajikan terpisah dan tidak dikurangkan dari pendapatan bunga. Rujukan: Kieso IFRS 5e, halaman PDF 1376-1378."
  },
  {
    "tm": 14,
    "topic": "Investasi I: Efek Utang, Nilai Wajar, dan Kerugian Kredit",
    "difficulty": "advanced",
    "q": "A debt investment has become credit-impaired and is classified in Stage 3. Which combination of loss allowance and interest calculation follows the source's ECL model? Source: Kieso IFRS 5e, PDF pages 1396-1398.",
    "options": [
      "12-month ECL; gross carrying amount",
      "Lifetime ECL; net carrying amount",
      "Lifetime ECL; gross carrying amount",
      "12-month ECL; net carrying amount"
    ],
    "answer": 1,
    "explanation": "Stage 3 memakai lifetime ECL (kerugian kredit sepanjang umur) dan menghitung bunga atas net carrying amount (nilai tercatat neto), setelah allowance (cadangan). Rujukan: Kieso IFRS 5e, halaman PDF 1396-1398."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "Meredith buys 25% of Pirates for £200,000 and has significant influence. Pirates earns £80,000 and declares £20,000 dividends. With no other adjustments in the source exercise, what ending investment balance follows the equity method? Source: Kieso IFRS 5e, PDF pages 1391-1392, 1452.",
    "options": [
      "£220,000",
      "£205,000",
      "£200,000",
      "£215,000"
    ],
    "answer": 3,
    "explanation": "Interpretasi E16.20: bagian laba £20.000 menambah investasi; dividen £5.000 mengurangi investasi. Saldo £215.000. Rujukan: Kieso IFRS 5e, halaman PDF 1391-1392, 1452."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "An investor has already recognized its share of an associate's earnings under the equity method. What entry records its subsequent receipt of the associate's dividend? Source: Kieso IFRS 5e, PDF pages 1391-1392.",
    "options": [
      "Debit Cash; credit Dividend Revenue",
      "Debit Cash; credit Equity Investments",
      "Debit Equity Investments; credit Cash",
      "Debit Dividend Revenue; credit Cash"
    ],
    "answer": 1,
    "explanation": "Bagian laba sudah diakui sebagai Investment Revenue. Dividen mendistribusikan aset neto investee sehingga mengurangi carrying amount investasi. Rujukan: Kieso IFRS 5e, halaman PDF 1391-1392."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "Republic disposes of Hawthorne shares for which it elected non-trading OCI presentation. What happens to the cumulative fair-value changes on disposal? Source: Kieso IFRS 5e, PDF pages 1389, 1396.",
    "options": [
      "Retain within equity without profit recycling",
      "Transfer into profit using disposal recycling",
      "Transfer into liability using disposal recycling",
      "Recognize interest expense through disposal recycling"
    ],
    "answer": 0,
    "explanation": "Pilihan OCI efek ekuitas tidak melakukan recycling (reklasifikasi ke laba rugi). Efek utang FVOCI memakai aturan pelepasan yang berbeda. Rujukan: Kieso IFRS 5e, halaman PDF 1389, 1396."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "An investor owns 20% of voting shares. Its analyst automatically applies the equity method without reviewing governance or business relationships. What assessment should replace that automatic conclusion? Source: Kieso IFRS 5e, PDF pages 1390-1391.",
    "options": [
      "Assume automatic existence of full control",
      "Assume automatic existence of passive investment",
      "Assess actual evidence of significant influence",
      "Assess only receipts of cash dividends"
    ],
    "answer": 2,
    "explanation": "Buku memberi contoh representasi direksi, partisipasi kebijakan, dan transaksi material. Bukti yang bertentangan dapat mengubah kesimpulan pengaruh. Rujukan: Kieso IFRS 5e, halaman PDF 1390-1391."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "An investor assesses whether an investee should be consolidated. Which combination captures the source's control analysis? Source: Kieso IFRS 5e, PDF pages 1173, 1393-1394.",
    "options": [
      "Power, fixed returns, linkage between both",
      "Power, variable returns, linkage between both",
      "Power, variable returns, no causal linkage",
      "Voting majority, fixed returns, mandatory dividends"
    ],
    "answer": 1,
    "explanation": "Control (pengendalian) melibatkan power, eksposur atas variable returns, dan kemampuan menggunakan power untuk memengaruhi imbal hasil. Mayoritas saham menjadi indikator awal, bukan satu-satunya bukti. Rujukan: Kieso IFRS 5e, halaman PDF 1173, 1393-1394."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "medium",
    "q": "Republic buys Hawthorne shares for €20,750, receives €450 dividends, and elects non-trading OCI presentation. Their year-end fair value is €24,000. What fair-value gain is recognized in OCI? Source: Kieso IFRS 5e, PDF pages 1387-1389.",
    "options": [
      "€3,250",
      "€3,700",
      "€2,800",
      "€450"
    ],
    "answer": 0,
    "explanation": "Fair-value gain (laba nilai wajar) = €24.000 - €20.750 = €3.250. Dividen biasa €450 masuk Dividend Revenue dalam contoh sumber dan tidak menambah OCI gain. Rujukan: Kieso IFRS 5e, halaman PDF 1387-1389."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "advanced",
    "q": "Republic's Hawthorne shares are carried at €24,000 under non-trading OCI presentation. Before selling them for €22,500, which remeasurement is required? Source: Kieso IFRS 5e, PDF pages 1388-1389.",
    "options": [
      "Debit Disposal loss €1,500",
      "Credit OCI gain €1,500",
      "Credit Dividend revenue €1,500",
      "Debit OCI loss €1,500"
    ],
    "answer": 3,
    "explanation": "Pre-sale remeasurement (pengukuran sebelum penjualan) menurunkan nilai investasi €1.500 melalui OCI. Setelah saldo menjadi €22.500, debit Cash dan kredit investasi €22.500 tanpa recycling ke laba rugi. Rujukan: Kieso IFRS 5e, halaman PDF 1388-1389."
  },
  {
    "tm": 15,
    "topic": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
    "difficulty": "advanced",
    "q": "Meredith's assistant credits Dividend Revenue for its 25% share of Pirates' £20,000 dividend, after recording its share of Pirates' profit. How should the dividend entry be corrected under the equity method? Source: Kieso IFRS 5e, PDF pages 1391-1392, 1452.",
    "options": [
      "Credit Dividend Revenue for £5,000",
      "Credit Equity Investments for £20,000",
      "Credit Equity Investments for £5,000",
      "Debit Investment Expense for £5,000"
    ],
    "answer": 2,
    "explanation": "Cash dividend (dividen kas) investor = 25% × £20.000 = £5.000. Kredit Equity Investments mengurangi investasi karena bagian laba telah diakui; mengkredit pendapatan dividen akan menghitung laba dua kali. Rujukan: Kieso IFRS 5e, halaman PDF 1391-1392, 1452."
  }
];

export const AKK202_QUIZ: QuizQuestion[] = [...AKK202_QUIZ_UTS, ...AKK202_QUIZ_UAS];
