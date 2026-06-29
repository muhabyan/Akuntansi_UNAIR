const tm10: Reading = {
  "tm": 10,
  "title": "Perekonomian Tertutup (Bagian 2): Keseimbangan, Multiplier & Kebijakan Fiskal",
  "ref": "Substansi: Samuelson Ch.21-22; Mankiw Ch.26, Ch.33-34",
  "intro": "Melanjutkan model ekonomi tertutup dengan memasukkan investasi (I) dan pengeluaran pemerintah (G), serta menganalisis efek pengganda (multiplier) dan prinsip perpajakan.",
  "objectives": [
    "Menjelaskan faktor-faktor yang menentukan tingkat investasi.",
    "Menentukan output keseimbangan dalam ekonomi dua sektor (Y = C + I).",
    "Menganalisis mekanisme model multiplier.",
    "Mengevaluasi dampak kebijakan fiskal dan perpajakan terhadap output keseimbangan.",
    "Membedakan jenis dan prinsip-prinsip perpajakan."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Peran dan Penentu Investasi (Investment)"
    },
    {
      "kind": "p",
      "text": "Investasi memainkan dua peran penting dalam makroekonomi: (1) Investasi adalah komponen pengeluaran yang besar dan tidak stabil sehingga perubahannya sangat memengaruhi Aggregate Demand (AD), dan (2) Investasi mendorong akumulasi modal, yang meningkatkan Aggregate Supply (AS) jangka panjang."
    },
    {
      "kind": "p",
      "text": "Tiga elemen utama yang menentukan apakah suatu investasi akan dilakukan:"
    },
    {
      "kind": "ul",
      "items": [
        "**Revenues (Pendapatan):** Investasi akan dilakukan jika hal itu mampu meningkatkan pendapatan melebihi biaya peminjamannya.",
        "**Costs (Biaya):** Sangat bergantung pada suku bunga (interest rate) dan beban pajak.",
        "**Expectations (Ekspektasi):** Kepercayaan diri para pebisnis tentang kondisi perekonomian di masa depan."
      ]
    },
    {
      "kind": "h2",
      "text": "Keseimbangan Output di Ekonomi Dua Sektor"
    },
    {
      "kind": "p",
      "text": "Dalam ekonomi dua sektor (tanpa pemerintah dan tanpa luar negeri), keseimbangan tercapai ketika tingkat output yang direncanakan sama dengan pengeluaran yang direncanakan. Ada dua pendekatan untuk menemukan keseimbangan ini:"
    },
    {
      "kind": "ul",
      "items": [
        "**Pendekatan Pengeluaran Agregat (Y = C + I):** Keseimbangan terjadi ketika total PDB sama persis dengan total konsumsi rumah tangga ditambah investasi bisnis. Pada titik potong dengan garis 45 derajat (Keynesian Cross), pengeluaran aktual sesuai dengan output aktual.",
        "**Pendekatan Kebocoran dan Injeksi (S = I):** Dalam sirkulasi makroekonomi, tabungan (S) adalah uang yang 'bocor' atau keluar dari putaran konsumsi, sedangkan investasi (I) adalah uang yang 'disuntikkan' kembali. Keseimbangan absolut terjadi saat Tabungan = Investasi."
      ]
    },
    {
      "kind": "figure",
      "title": "Kurva Keseimbangan Output (Y = C + I)",
      "svg": "<svg viewBox=\"0 0 450 350\" xmlns=\"http://www.w3.org/2000/svg\"><line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"400\" y1=\"300\" y2=\"300\"></line><line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"50\" y1=\"300\" y2=\"30\"></line><text fill=\"#9aa4b7\" font-size=\"11\" x=\"20\" y=\"20\">AE</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"410\" y=\"305\">Y</text><line stroke=\"#9aa4b7\" stroke-width=\"1.5\" x1=\"50\" x2=\"320\" y1=\"300\" y2=\"30\"></line><text fill=\"#9aa4b7\" font-size=\"11\" transform=\"rotate(-45 280 60)\" x=\"280\" y=\"60\">Y = AE (45°)</text><line stroke=\"#d81b60\" stroke-width=\"2\" x1=\"50\" x2=\"350\" y1=\"200\" y2=\"100\"></line><text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"360\" y=\"105\">C</text><line stroke=\"#4f9cf9\" stroke-width=\"2.5\" x1=\"50\" x2=\"350\" y1=\"150\" y2=\"50\"></line><text fill=\"#4f9cf9\" font-size=\"11\" font-weight=\"bold\" x=\"360\" y=\"55\">AE = C + I</text><line stroke=\"#f9a825\" stroke-dasharray=\"4,4\" stroke-width=\"1.5\" x1=\"200\" x2=\"200\" y1=\"300\" y2=\"150\"></line><circle cx=\"200\" cy=\"150\" fill=\"#f9a825\" r=\"5\"></circle><text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"190\" y=\"320\">Y*</text><text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"210\" y=\"145\">E</text></svg>",
      "caption": "Kurva Aggregate Expenditure memotong garis 45 derajat di titik E, yang merupakan titik output keseimbangan (Y*)."
    },
    {
      "kind": "h2",
      "text": "Model Multiplier"
    },
    {
      "kind": "p",
      "text": "Model multiplier (efek pengganda) menjelaskan bagaimana kenaikan awal pada komponen pengeluaran otonom (seperti Investasi atau Pengeluaran Pemerintah) dapat menyebabkan kenaikan berlipat ganda pada total PDB."
    },
    {
      "kind": "formula",
      "text": "Rumus Dasar Multiplier\n\nMultiplier = 1 / (1 - MPC) = 1 / MPS\n\nΔY = Multiplier × ΔI",
      "note": "Perubahan output (Y) bergantung penuh pada kecondongan konsumsi marjinal (MPC). Semakin tinggi MPC, semakin besar uang yang berputar kembali ke ekonomi, dan semakin besar nilai multipliernya."
    },
    {
      "kind": "example",
      "title": "Perhitungan Multiplier Sederhana",
      "blocks": [
        {
          "kind": "p",
          "text": "Jika masyarakat mengonsumsi 2/3 dari tambahan pendapatan (MPC = 2/3), maka MPS = 1/3.\nMultiplier = 1 / (1/3) = 3.\nJika investasi meningkat $100 miliar, maka PDB total akan bertambah sebesar 3 × $100 miliar = $300 miliar."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Kebijakan Fiskal dalam Model Multiplier"
    },
    {
      "kind": "p",
      "text": "Pemerintah dapat memengaruhi output (Y) melalui instrumen Kebijakan Fiskal: Pengeluaran Pemerintah (G) dan Pajak (T). Pengeluaran pemerintah bekerja persis seperti investasi, di mana 100% dari G menjadi suntikan (injeksi) langsung ke dalam sirkulasi pendapatan."
    },
    {
      "kind": "p",
      "text": "Pajak, sebaliknya, menyedot pendapatan rumah tangga (Disposable Income menurun). Dampak penurunan pajak tidak sekuat pengeluaran pemerintah, karena sebagian dari pemotongan pajak tersebut ditabung oleh masyarakat, bukan dikonsumsi."
    },
    {
      "kind": "formula",
      "text": "Multiplier Kebijakan Fiskal\n\nGovernment Expenditure Multiplier: k_G = 1 / (1 - MPC)\n\nTax Multiplier: k_T = -MPC / (1 - MPC)",
      "note": "Perhatikan bahwa Tax Multiplier bernilai negatif dan secara mutlak selalu lebih kecil dibandingkan Government Expenditure Multiplier."
    },
    {
      "kind": "h2",
      "text": "Prinsip-Prinsip Perpajakan"
    },
    {
      "kind": "p",
      "text": "Ketika pemerintah memungut pajak, ia merujuk pada dua prinsip utama yang memandu keadilan dan efisiensi sistem perpajakan:"
    },
    {
      "kind": "ul",
      "items": [
        "**Benefit Principle (Prinsip Manfaat):** Mereka yang menerima layanan pemerintah harus membayar pajaknya. (Contoh: Pengguna jalan tol membayar biaya tol untuk perawatan jalan).",
        "**Ability-to-Pay Principle (Prinsip Kemampuan Membayar):** Beban pajak harus dibagikan berdasarkan kapasitas masing-masing orang. Ini memunculkan dua konsep ekuitas: *Horizontal equity* (orang dengan pendapatan sama bayar pajak yang sama) dan *Vertical equity* (orang berpendapatan lebih tinggi bayar pajak lebih banyak)."
      ]
    },
    {
      "kind": "table",
      "headers": [
        "Tipe Pajak",
        "Definisi",
        "Dampak Terhadap si Miskin vs Kaya"
      ],
      "rows": [
        [
          "Progressive Tax (Pajak Progresif)",
          "Pembayar pajak berpendapatan tinggi membayar persentase (tarif) yang lebih besar dari pendapatannya.",
          "Lebih membebani orang kaya. Berfungsi efektif sebagai *Automatic Stabilizer*."
        ],
        [
          "Proportional Tax (Pajak Proporsional)",
          "Semua pembayar pajak, baik kaya maupun miskin, membayar tarif/persentase yang sama.",
          "Beban pajaknya sama rata secara proporsi (Flat Tax)."
        ],
        [
          "Regressive Tax (Pajak Regresif)",
          "Pembayar pajak berpendapatan tinggi membayar persentase yang lebih kecil dari pendapatannya dibandingkan orang miskin.",
          "Lebih membebani si miskin. (Contoh: Pajak Pertambahan Nilai atau PPN bahan pokok)."
        ]
      ]
    }
  ]
};
