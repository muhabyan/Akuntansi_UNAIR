import type { QuizQuestion } from '../../types';

export const EKT109_UAS_SIMULATOR: QuizQuestion[] = [
  {
    "id": "uas_pte_1",
    "tm": 8,
    "topic": "Pendapatan Nasional",
    "skill": "analytical",
    "difficulty": "medium",
    "q": "Pemerintah Indonesia membangun jembatan baru senilai Rp1 Triliun. Secara bersamaan, seorang warga membeli mobil bekas dari tetangganya seharga Rp100 Juta dan membayar komisi Rp2 Juta kepada makelar. Berapa tambahan terhadap GDP Indonesia tahun tersebut?",
    "options": [
      "Rp1 Triliun",
      "Rp1 Triliun + Rp2 Juta",
      "Rp1 Triliun + Rp100 Juta",
      "Rp1 Triliun + Rp102 Juta"
    ],
    "answer": 1,
    "explanation": "Pembangunan jembatan masuk komponen G (Pemerintah). Pembelian mobil bekas tidak dihitung karena bukan produksi baru. Namun, komisi makelar Rp2 Juta adalah jasa baru tahun ini, sehingga dihitung ke GDP. Total = Rp1 Triliun + Rp2 Juta."
  },
  {
    "id": "uas_pte_2",
    "tm": 8,
    "topic": "Value Added",
    "skill": "application",
    "difficulty": "medium",
    "q": "Pabrik ban menjual ban ke pabrik mobil seharga Rp20 Juta. Pabrik mobil memasang ban tersebut dan merakit mobil, lalu menjual mobilnya ke konsumen seharga Rp200 Juta. Berapa kontribusi total kedua transaksi ini terhadap GDP?",
    "options": [
      "Rp20 Juta",
      "Rp200 Juta",
      "Rp220 Juta",
      "Rp180 Juta"
    ],
    "answer": 1,
    "explanation": "GDP hanya menghitung nilai barang akhir untuk menghindari penghitungan ganda (double counting). Ban adalah barang antara. Harga akhir mobil (Rp200 Juta) sudah mencakup nilai ban."
  },
  {
    "id": "uas_pte_3",
    "tm": 8,
    "topic": "Disposable Income",
    "skill": "conceptual",
    "difficulty": "basic",
    "q": "Manakah komponen pengurang yang membedakan antara Personal Income (PI) dan Disposable Income (DI)?",
    "options": [
      "Depresiasi",
      "Pajak Tidak Langsung",
      "Pajak Langsung Perusahaan",
      "Pajak Penghasilan Personal"
    ],
    "answer": 3,
    "explanation": "DI = PI - Pajak Penghasilan Personal (Personal Taxes). Depresiasi membedakan GNP dan NNP."
  },
  {
    "id": "uas_pte_4",
    "tm": 9,
    "topic": "Fungsi Konsumsi",
    "skill": "analytical",
    "difficulty": "medium",
    "q": "Diketahui fungsi konsumsi C = 200 + 0.8Y. Jika pendapatan (Y) sebesar 2000, berapakah besar tabungan (S)?",
    "options": [
      "1800",
      "200",
      "400",
      "1600"
    ],
    "answer": 1,
    "explanation": "Jika Y = 2000, maka C = 200 + 0.8(2000) = 200 + 1600 = 1800. Karena Y = C + S, maka S = Y - C = 2000 - 1800 = 200."
  },
  {
    "id": "uas_pte_5",
    "tm": 9,
    "topic": "Present Value",
    "skill": "application",
    "difficulty": "advanced",
    "q": "Jika suku bunga (interest rate) pasar naik secara signifikan, apa yang akan terjadi pada harga (present value) dari aset-aset finansial dan properti yang ada di pasar?",
    "options": [
      "Harga aset cenderung naik karena return masa depan menjadi lebih berharga.",
      "Harga aset tidak terpengaruh, hanya instrumen baru yang berubah nilainya.",
      "Harga aset cenderung turun karena suku bunga menjadi pembagi (denominator) yang lebih besar dalam perhitungan present value.",
      "Aset akan segera dilikuidasi oleh bank sentral."
    ],
    "answer": 2,
    "explanation": "Rumus Present Value: PV = N / (1+i)^t. Jika i (suku bunga) naik, nilai penyebut membesar, sehingga PV (harga aset) turun."
  },
  {
    "id": "uas_pte_6",
    "tm": 10,
    "topic": "Multiplier Effect",
    "skill": "analytical",
    "difficulty": "medium",
    "q": "Dalam ekonomi tertutup tanpa pajak, jika kecenderungan menabung marjinal (MPS) adalah 0.25, berapakah angka multiplier investasinya?",
    "options": [
      "0.75",
      "2.5",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "Multiplier = 1 / MPS. Jika MPS = 0.25, maka Multiplier = 1 / 0.25 = 4."
  },
  {
    "id": "uas_pte_7",
    "tm": 10,
    "topic": "Proportional Tax Multiplier",
    "skill": "advanced",
    "difficulty": "advanced",
    "q": "Manakah yang benar tentang dampak pajak proporsional (T = tY) terhadap multiplier belanja pemerintah dibandingkan dengan lump-sum tax (T = T0)?",
    "options": [
      "Pajak proporsional membuat multiplier lebih besar karena pemerintah mendapat tambahan dana saat ekonomi berekspansi.",
      "Pajak proporsional membuat multiplier lebih kecil karena pendapatan bocor menjadi pajak pada setiap siklus konsumsi.",
      "Tidak ada perbedaan nilai multiplier antara pajak proporsional dan lump-sum.",
      "Pajak proporsional hanya memengaruhi investasi, bukan konsumsi rumah tangga."
    ],
    "answer": 1,
    "explanation": "Pajak proporsional (tY) berfungsi sebagai 'kebocoran' tambahan. Multipliernya 1/(1-b+bt), yang nilainya selalu lebih kecil dari 1/(1-b)."
  },
  {
    "id": "uas_pte_8",
    "tm": 10,
    "topic": "Paradox of Thrift",
    "skill": "conceptual",
    "difficulty": "medium",
    "q": "Konsep Paradox of Thrift menyatakan bahwa...",
    "options": [
      "Masyarakat yang boros akan menyebabkan perekonomian kolaps dalam jangka pendek.",
      "Jika seluruh masyarakat berusaha menambah tabungannya, output agregat justru akan turun sehingga total tabungan aktual belum tentu naik.",
      "Tabungan swasta selalu dikalahkan oleh tabungan publik dalam ekonomi campuran.",
      "Suku bunga selalu bertentangan dengan preferensi likuiditas Keynesian."
    ],
    "answer": 1,
    "explanation": "Paradox of thrift terjadi ketika seruan untuk menabung secara massal menyebabkan konsumsi turun tajam, permintaan agregat anjlok, pendapatan nasional merosot, dan ujung-ujungnya tabungan secara total tidak membesar."
  },
  {
    "id": "uas_pte_9",
    "tm": 11,
    "topic": "Fungsi Uang",
    "skill": "conceptual",
    "difficulty": "basic",
    "q": "Ketika Anda membandingkan harga sebuah laptop Rp10 Juta dengan motor bekas Rp10 Juta, fungsi uang manakah yang sedang bekerja?",
    "options": [
      "Medium of exchange",
      "Store of value",
      "Standard of deferred payment",
      "Unit of account"
    ],
    "answer": 3,
    "explanation": "Unit of account (satuan hitung) berarti uang digunakan sebagai tolak ukur/yardstick untuk membandingkan nilai relatif antar barang."
  },
  {
    "id": "uas_pte_10",
    "tm": 11,
    "topic": "Money Multiplier",
    "skill": "analytical",
    "difficulty": "medium",
    "q": "Berdasarkan simple money multiplier, jika bank sentral mewajibkan reserve ratio sebesar 12.5%, berapa potensi deposit maksimum dari cadangan baru sebesar Rp 20 Miliar?",
    "options": [
      "Rp 100 Miliar",
      "Rp 125 Miliar",
      "Rp 160 Miliar",
      "Rp 200 Miliar"
    ],
    "answer": 2,
    "explanation": "Multiplier = 1 / rr = 1 / 0.125 = 8. Maksimum deposit = Reserve awal \u00d7 Multiplier = 20 Miliar \u00d7 8 = Rp 160 Miliar."
  },
  {
    "id": "uas_pte_11",
    "tm": 11,
    "topic": "Money Leakage",
    "skill": "conceptual",
    "difficulty": "medium",
    "q": "Proses money multiplier sering kali tidak mencapai batas teoretis maksimumnya (1/rr). Faktor utama apa yang menyebabkan hal ini?",
    "options": [
      "Masyarakat menahan sebagian uang tunai dan bank sering menahan cadangan berlebih (excess reserves).",
      "Pajak penghasilan memotong laba bank.",
      "Inflasi menggerus nilai riil cadangan bank sentral.",
      "Sistem kliring antarbank tidak berfungsi."
    ],
    "answer": 0,
    "explanation": "Batas 1/rr mengasumsikan semua pinjaman kembali menjadi deposit 100% dan bank tak memegang cadangan berlebih. Kenyataannya ada 'currency drain' (uang tunai dipegang publik) dan 'excess reserves' oleh bank."
  },
  {
    "id": "uas_pte_12",
    "tm": 11,
    "topic": "Pasar Uang vs Dana Pinjaman",
    "skill": "analytical",
    "difficulty": "advanced",
    "q": "Menurut teori Liquidity Preference, apa yang terjadi pada ekuilibrium pasar uang ketika pendapatan nasional (Y) meningkat secara signifikan?",
    "options": [
      "Kurva penawaran uang (MS) bergeser ke kanan, menurunkan suku bunga.",
      "Kurva permintaan uang (MD) bergeser ke kanan, sehingga suku bunga naik.",
      "Kurva permintaan uang bergeser ke kiri, menurunkan suku bunga.",
      "Tidak ada pergeseran pada kurva permintaan maupun penawaran."
    ],
    "answer": 1,
    "explanation": "Kenaikan pendapatan (Y) membuat kebutuhan transaksi meningkat, sehingga kurva permintaan uang (MD) bergeser ke kanan. Jika penawaran uang (MS) tetap, suku bunga keseimbangan akan naik."
  },
  {
    "id": "uas_pte_13",
    "tm": 12,
    "topic": "Nilai Tukar Riil",
    "skill": "analytical",
    "difficulty": "advanced",
    "q": "Nilai tukar nominal adalah Rp15.000 per USD. Harga sekotak pizza di Jakarta Rp150.000 dan di New York $10. Berapakah nilai tukar riil (dengan konvensi harga domestik di pembilang)?",
    "options": [
      "0.5",
      "1.0",
      "1.5",
      "15.0"
    ],
    "answer": 1,
    "explanation": "Harga pizza NY dalam rupiah = 10 \u00d7 15.000 = Rp150.000. Real exchange rate = Harga JKT / Harga NY dalam Rupiah = 150.000 / 150.000 = 1.0. Artinya daya saing kedua negara seimbang untuk pizza tersebut."
  },
  {
    "id": "uas_pte_14",
    "tm": 12,
    "topic": "Big Mac Index",
    "skill": "conceptual",
    "difficulty": "medium",
    "q": "Menurut The Economist's Big Mac Index, jika sebuah Big Mac di Indonesia seharga Rp40.000, sedangkan di AS $5, dan kurs aktual saat ini Rp15.000/USD, kesimpulan apa yang ditarik dari teori Purchasing Power Parity (PPP)?",
    "options": [
      "Rupiah dinilai overvalued terhadap Dolar AS.",
      "Rupiah dinilai undervalued terhadap Dolar AS karena kurs implisit PPP adalah Rp8.000/USD.",
      "Dolar AS dinilai undervalued terhadap Rupiah.",
      "PPP berlaku sempurna antara Indonesia dan AS."
    ],
    "answer": 1,
    "explanation": "Kurs PPP = Harga Lokal / Harga AS = 40.000 / 5 = Rp8.000/USD. Karena kurs aktual adalah Rp15.000/USD, Rupiah lebih lemah dari seharusnya (undervalued) berdasarkan Big Mac Index."
  },
  {
    "id": "uas_pte_15",
    "tm": 12,
    "topic": "Open Economy Multiplier",
    "skill": "analytical",
    "difficulty": "medium",
    "q": "Dibandingkan dengan ekonomi tertutup, efek multiplier belanja pemerintah pada perekonomian terbuka akan cenderung...",
    "options": [
      "Lebih besar, karena ekspor memperkuat efek penggandaan.",
      "Sama saja, asalkan neraca perdagangan seimbang.",
      "Lebih kecil, karena sebagian tambahan pendapatan bocor keluar negeri melalui impor (MPM).",
      "Tidak dapat diprediksi tanpa data inflasi."
    ],
    "answer": 2,
    "explanation": "Multiplier ekonomi terbuka: 1/(1-MPC+MPM). Tambahan Marginal Propensity to Import (MPM) di penyebut membuat nilai pecahan menjadi lebih kecil dibanding 1/(1-MPC)."
  },
  {
    "id": "uas_pte_16",
    "tm": 13,
    "topic": "Okun's Law",
    "skill": "analytical",
    "difficulty": "medium",
    "q": "Menurut Hukum Okun sederhana, jika tingkat pengangguran natural (NAIRU) adalah 5% dan pengangguran aktual adalah 8%, berapa perkiraan output gap (kehilangan PDB)?",
    "options": [
      "3% di bawah potensial",
      "6% di bawah potensial",
      "10% di bawah potensial",
      "1.5% di bawah potensial"
    ],
    "answer": 1,
    "explanation": "Hukum Okun sederhana: Tiap kenaikan 1% pengangguran di atas natural rate, output turun sekitar 2%. Jarak pengangguran: 8% - 5% = 3%. Output gap = 3% \u00d7 2 = 6% di bawah PDB potensial."
  },
  {
    "id": "uas_pte_17",
    "tm": 13,
    "topic": "Phillips Curve",
    "skill": "conceptual",
    "difficulty": "advanced",
    "q": "Apa yang terjadi pada Kurva Phillips Jangka Pendek (SRPC) jika bank sentral kredibel menurunkan ekspektasi inflasi masyarakat?",
    "options": [
      "Pergerakan sepanjang SRPC ke kanan bawah.",
      "SRPC bergeser ke atas.",
      "SRPC bergeser ke bawah (kiri bawah).",
      "Kurva Phillips Jangka Panjang (LRPC) berubah menjadi horizontal."
    ],
    "answer": 2,
    "explanation": "Jika ekspektasi inflasi turun, pada setiap tingkat pengangguran yang sama, inflasi yang terjadi akan lebih rendah. Ini direpresentasikan dengan bergesernya kurva SRPC ke bawah."
  },
  {
    "id": "uas_pte_18",
    "tm": 13,
    "topic": "Biaya Inflasi",
    "skill": "application",
    "difficulty": "medium",
    "q": "Fenomena di mana perusahaan seperti restoran harus terus-menerus mencetak daftar harga baru akibat inflasi tinggi disebut sebagai:",
    "options": [
      "Shoeleather costs",
      "Menu costs",
      "Hysteresis",
      "Sacrifice ratio"
    ],
    "answer": 1,
    "explanation": "Menu costs secara literal bermakna biaya mencetak menu baru, yang digunakan sebagai kiasan untuk semua biaya yang ditanggung perusahaan saat harus sering mengubah daftar harganya."
  },
  {
    "id": "uas_pte_19",
    "tm": 13,
    "topic": "Hysteresis",
    "skill": "conceptual",
    "difficulty": "advanced",
    "q": "Hysteresis dalam pasar tenaga kerja merujuk pada kondisi di mana...",
    "options": [
      "Inflasi berakselerasi tak terkendali akibat intervensi pemerintah.",
      "Pengangguran jangka pendek yang dibiarkan dapat mengubah tingkat pengangguran struktural jangka panjang karena pekerja kehilangan keterampilan.",
      "Serikat pekerja menuntut upah yang selalu berada di bawah inflasi ekspektasian.",
      "Hanya terjadi di sektor manufaktur akibat guncangan energi."
    ],
    "answer": 1,
    "explanation": "Hysteresis menggambarkan bagaimana riwayat (history) memengaruhi kondisi jangka panjang. Pekerja yang terlalu lama menganggur saat resesi (siklis) akhirnya kehilangan 'employability'-nya dan menjadi pengangguran struktural."
  },
  {
    "id": "uas_pte_20",
    "tm": 14,
    "topic": "Teori Malthus",
    "skill": "conceptual",
    "difficulty": "medium",
    "q": "Berdasarkan teori pertumbuhan Klasik (Smith-Malthus), mengapa pertumbuhan output per kapita pada akhirnya akan berhenti?",
    "options": [
      "Karena kelangkaan teknologi inovatif.",
      "Karena pertumbuhan populasi akan selalu menekan hasil marjinal dari tanah yang terbatas, menurunkan upah ke tingkat subsisten.",
      "Karena pemerintah memberlakukan terlalu banyak pajak.",
      "Karena modal terdepresiasi terlalu cepat."
    ],
    "answer": 1,
    "explanation": "Teori Smith-Malthus sangat bertumpu pada 'Tanah' sebagai batas absolut. Pertumbuhan populasi yang eksponensial di atas lahan yang terbatas membuat tenaga kerja menghadapi diminishing returns sampai upah menyentuh garis kemiskinan."
  },
  {
    "id": "uas_pte_21",
    "tm": 14,
    "topic": "Model Neoklasik",
    "skill": "conceptual",
    "difficulty": "advanced",
    "q": "Dalam model Pertumbuhan Neoklasik, apa kunci utama untuk mencapai pertumbuhan produktivitas pekerja (output per capita) yang berkelanjutan di luar kondisi 'steady state'?",
    "options": [
      "Hanya dengan menabung 100% dari PDB.",
      "Melalui peningkatan populasi secara drastis.",
      "Penambahan modal (capital deepening) secara tak terbatas.",
      "Kemajuan teknologi (technological progress) yang menggeser fungsi produksi."
    ],
    "answer": 3,
    "explanation": "Penambahan modal saja (capital deepening) akan terbentur diminishing returns. Hanya kemajuan teknologi yang dapat menggeser fungsi produksi agregat (APF) ke atas dan memberikan pertumbuhan permanen."
  },
  {
    "id": "uas_pte_22",
    "tm": 14,
    "topic": "Modal Sosial",
    "skill": "conceptual",
    "difficulty": "basic",
    "q": "Kepercayaan yang tinggi antar pelaku ekonomi, norma kerja sama, dan jaringan sipil yang kuat merupakan elemen utama dari salah satu 'roda pertumbuhan' modern, yaitu:",
    "options": [
      "Capital deepening",
      "Social capital",
      "Endogenous technology",
      "Foreign Direct Investment"
    ],
    "answer": 1,
    "explanation": "Modal Sosial (Social Capital) mencakup aspek sosiologis (norma, kepercayaan, jejaring) yang memfasilitasi bisnis dan mengurangi biaya transaksi dalam perekonomian."
  },
  {
    "id": "uas_pte_23",
    "tm": 14,
    "topic": "Catch-Up Effect",
    "skill": "application",
    "difficulty": "medium",
    "q": "Prinsip dasar 'catch-up effect' pada analisis ekonomi pembangunan adalah:",
    "options": [
      "Negara kaya akan terus memimpin dan tidak akan terkejar.",
      "Dengan investasi modal awal yang sama besar, negara miskin cenderung tumbuh lebih pesat karena posisi awalnya rendah (marginal product modal yang masih tinggi).",
      "Negara tertinggal harus meniru kebijakan moneter negara maju tanpa mempedulikan institusi domestik.",
      "Hukum ekonomi tak berlaku bagi negara berpendapatan rendah."
    ],
    "answer": 1,
    "explanation": "Berdasarkan efek diminishing returns, satu unit traktor di negara miskin (yang sebelumnya membajak pakai sapi) akan menaikkan output drastis dibanding negara maju yang sudah punya puluhan traktor."
  },
  {
    "id": "uas_pte_24",
    "tm": 14,
    "topic": "Vicious Cycle of Poverty",
    "skill": "conceptual",
    "difficulty": "medium",
    "q": "Mengapa negara sangat miskin sulit keluar dari Vicious Cycle of Poverty hanya dengan mengandalkan tabungan internal?",
    "options": [
      "Karena mata uang mereka tidak diterima di pasar global.",
      "Pendapatan yang pas-pasan (subsisten) membuat sebagian besar uang habis untuk konsumsi primer, menyisakan tabungan domestik yang amat kecil untuk investasi.",
      "Karena hukum internasional melarang investasi di negara berkembang.",
      "Karena mereka sudah berada di atas kurva NAIRU jangka panjang."
    ],
    "answer": 1,
    "explanation": "Lingkaran setan kemiskinan: Pendapatan rendah -> Tabungan rendah -> Investasi Rendah -> Modal pekerja rendah -> Produktivitas rendah -> Pendapatan kembali rendah. Butuh bantuan eksternal (FDI, utang produktif) atau perombakan sistem struktural."
  }
];
