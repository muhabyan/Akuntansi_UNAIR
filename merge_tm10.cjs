const fs = require('fs');

// 1. Read original ptePraUAS.ts
let content = fs.readFileSync('c:/cek/src/data/pte/ptePraUAS.ts', 'utf-8');

// 2. We will just use string manipulation to inject the massive blocks into the middle of the existing tm10 in ptePraUAS.ts, 
// so we don't lose the Keynesian cross and Output Gap graphs.

// We will find the "Multiplier" h2 in the existing tm10, and replace everything from "Multiplier" up to (but not including) "Kebijakan Fiskal" h2 or "Output Gap" h2...
// Actually, let's just generate a full text for the combined TM10.

const combinedTm10 = `const tm10: Reading = {
  "tm": 10,
  "title": "Perekonomian Tertutup (Bagian 2): Keseimbangan, Multiplier & Kebijakan Fiskal",
  "ref": "Kontrak: 1(20), 2(23,24) · Substansi: Samuelson Ch.21-22; Mankiw Ch.26, Ch.33-34",
  "intro": "Menentukan output ekuilibrium melalui Keynesian Cross, menghitung multiplier, menilai dampak kebijakan fiskal, output gap, dan membedah peran investasi serta tabungan nasional secara ekstensif.",
  "objectives": [
    "Menentukan keseimbangan Y = AE dan membaca Keynesian Cross.",
    "Memahami anatomi Investasi (Capital, Suku Bunga, Present Value, dan Kurva Permintaannya).",
    "Membuktikan secara aljabar rumus sakti Multiplier Investasi, Belanja (G), dan Pajak (T).",
    "Mengekstrak fungsi dan keseimbangan 3-Sektor dalam skenario pajak absolut (T0) dan pajak proporsional (tY).",
    "Membedah Identitas Tabungan Nasional (Private + Public Saving = Investment)."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Aggregate Expenditure & Keynesian Cross"
    },
    {
      "kind": "p",
      "text": "Dalam model Keynesian sederhana, output ekuilibrium tercapai ketika produksi aktual sama dengan pengeluaran agregat yang direncanakan. Jika perusahaan memproduksi lebih banyak daripada permintaan, persediaan naik dan produksi akan dikurangi. Jika permintaan lebih tinggi daripada output, persediaan turun dan produksi akan dinaikkan."
    },
    {
      "kind": "formula",
      "text": "Pengeluaran Agregat Terencana\\n\\nAE = C + I + G\\n\\nAE = a + b(Y−T) + I + G\\n\\nEkuilibrium barang: Y = AE"
    },
    {
      "kind": "figure",
      "title": "Keynesian Cross: penentuan output ekuilibrium",
      "svg": "<svg data-graph-id=\\"PTE-GRAPH-01\\" font-family=\\"DM Sans, sans-serif\\" style=\\"max-width:560px;margin:0 auto;display:block\\" viewBox=\\"0 0 380 270\\" width=\\"100%\\" xmlns=\\"http://www.w3.org/2000/svg\\"><title>Keynesian Cross: penentuan output ekuilibrium</title><desc>Grafik Keynesian Cross dengan output Y pada sumbu horizontal dan pengeluaran agregat AE pada sumbu vertikal. Garis 45 derajat berpotongan dengan garis AE sama dengan C tambah I tambah G pada output keseimbangan Y bintang.</desc><line stroke=\\"#657084\\" stroke-width=\\"1.2\\" x1=\\"55\\" x2=\\"355\\" y1=\\"235\\" y2=\\"235\\"></line><line stroke=\\"#657084\\" stroke-width=\\"1.2\\" x1=\\"55\\" x2=\\"55\\" y1=\\"235\\" y2=\\"20\\"></line><text fill=\\"#9aa4b7\\" font-size=\\"11\\" x=\\"18\\" y=\\"26\\">AE</text><text fill=\\"#9aa4b7\\" font-size=\\"11\\" x=\\"340\\" y=\\"251\\">Y</text><line stroke=\\"#9aa4b7\\" stroke-width=\\"1.5\\" x1=\\"55\\" x2=\\"270\\" y1=\\"235\\" y2=\\"20\\"></line><text fill=\\"#9aa4b7\\" font-size=\\"10\\" x=\\"226\\" y=\\"32\\">Y = AE (45°)</text><line stroke=\\"#4f9cf9\\" stroke-width=\\"2.3\\" x1=\\"55\\" x2=\\"270\\" y1=\\"170\\" y2=\\"60\\"></line><text fill=\\"#4f9cf9\\" font-size=\\"10\\" x=\\"272\\" y=\\"62\\">AE = C+I+G</text><circle cx=\\"55\\" cy=\\"170\\" fill=\\"#4f9cf9\\" r=\\"3\\"></circle><text fill=\\"#4f9cf9\\" font-size=\\"10\\" x=\\"34\\" y=\\"166\\">A</text><line stroke=\\"#f9a825\\" stroke-dasharray=\\"3,3\\" stroke-width=\\"1\\" x1=\\"188\\" x2=\\"188\\" y1=\\"102\\" y2=\\"235\\"></line><line stroke=\\"#f9a825\\" stroke-dasharray=\\"3,3\\" stroke-width=\\"1\\" x1=\\"55\\" x2=\\"188\\" y1=\\"102\\" y2=\\"102\\"></line><circle cx=\\"188\\" cy=\\"102\\" fill=\\"#f9a825\\" r=\\"3.6\\"></circle><text fill=\\"#f9a825\\" font-size=\\"11\\" x=\\"181\\" y=\\"250\\">Y*</text></svg>",
      "caption": "Titik Y* adalah perpotongan garis pengeluaran agregat dengan garis 45°. Di titik ini, output sama dengan pengeluaran agregat yang direncanakan.",
      "altText": "Grafik Keynesian Cross dengan output Y pada sumbu horizontal dan pengeluaran agregat AE pada sumbu vertikal. Garis 45 derajat berpotongan dengan garis AE sama dengan C tambah I tambah G pada output keseimbangan Y bintang."
    },
    {
      "kind": "h2",
      "text": "Investasi, Capital, dan Suku Bunga"
    },
    {
      "kind": "p",
      "text": "Makroekonomi membedakan investasi riil (pembelian mesin, pabrik, rumah baru) dengan investasi finansial (membeli saham, tanah, menabung). Hanya investasi riil (pembentukan modal tetap bruto) yang dihitung masuk ke dalam PDB."
    },
    {
      "kind": "ul",
      "items": [
        "**Tangible Capital:** Struktur (pabrik, rumah), Peralatan (mobil, mesin), Inventori (barang belum terjual).",
        "**Intangible Capital:** E-capital (software, paten, merek dagang)."
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Rate of Return vs Interest Rate",
      "text": "Rate of Return (RoR) adalah imbal hasil bersih tahunan dari aset modal. Contoh (Perusahaan KARTIKA): Beli mobil rental $20.000, laba bersih setahun $2.400. RoR = 2.400 / 20.000 = **12%**.\\nSedangkan **Suku Bunga (Interest Rate)** adalah tingkat imbal hasil atas aset finansial."
    },
    {
      "kind": "formula",
      "text": "Present Value (Nilai Sekarang)\\n\\nPV = N / (1 + i)^t\\n\\nN = Net receipts, i = Interest rate, t = Tahun",
      "note": "Hubungan Terbalik: Harga aset akan **turun** ketika suku bunga **naik** (karena PV dari arus kas masa depan mengecil saat pembaginya, yaitu (1+i), membesar)."
    },
    {
      "kind": "h2",
      "text": "Determinan Investasi & Kurva Permintaan"
    },
    {
      "kind": "ul",
      "items": [
        "**Revenue (Pendapatan):** Tingkat output keseluruhan atau GDP.",
        "**Cost (Biaya):** Harga barang modal, suku bunga, dan pajak.",
        "**Expectation (Ekspektasi):** Kepercayaan bisnis dan ekspektasi laba masa depan."
      ]
    },
    {
      "kind": "p",
      "text": "Kurva Permintaan Investasi (Investment Demand Curve) memiliki lereng negatif. Semakin **tinggi** suku bunga, semakin **mahal** biaya meminjam, sehingga jumlah investasi yang diminta akan **turun**."
    },
    {
      "kind": "h2",
      "text": "Keseimbangan Ekonomi 2 Sektor"
    },
    {
      "kind": "p",
      "text": "Dua pendekatan untuk mencari Keseimbangan (Equilibrium Output):"
    },
    {
      "kind": "ul",
      "items": [
        "**Pendekatan Pengeluaran (Y = C + I):** Output Y = 1/(1-b) × (C0 + I)",
        "**Pendekatan Suntikan-Bocoran (S = I):** Tabungan (S) adalah bocoran, Investasi (I) adalah suntikan. Jika S = -C0 + (1-b)Y disamakan dengan I, hasilnya sama persis: Y = 1/(1-b) × (C0 + I)."
      ]
    },
    {
      "kind": "h2",
      "text": "Multiplier Model"
    },
    {
      "kind": "p",
      "text": "Model Multiplier menjelaskan bahwa setiap perubahan '1 Dolar' pada pengeluaran eksogen (seperti Investasi) akan menghasilkan efek lipat ganda pada GDP. Hal ini disebabkan karena pengeluaran satu pihak menjadi pendapatan pihak lain, yang membelanjakannya lagi (efek domino)."
    },
    {
      "kind": "formula",
      "text": "Multiplier Coefficient (k)\\n\\nk = 1 / (1 - MPC)   atau   k = 1 / MPS",
      "note": "Contoh: Misal MPC = 2/3 (maka MPS = 1/3). Nilai k = 1 / (1/3) = 3.\\nJika investasi naik sebesar **1.000**, maka GDP (Y) akan melonjak sebesar 3 × 1.000 = **3.000**!"
    },
    {
      "kind": "h2",
      "text": "Kebijakan Fiskal dalam Model Multiplier"
    },
    {
      "kind": "p",
      "text": "Peran fiskal: Alokatif, Distributif, dan Stabilisator. Instrumen utamanya: Belanja Pemerintah (G) dan Pajak (T)."
    },
    {
      "kind": "ul",
      "items": [
        "**Benefit Principle:** Pajak ditarik proporsional dengan manfaat layanan pemerintah yang diterima masyarakat.",
        "**Ability-to-pay Principle:** Pajak ditarik berdasarkan kemampuan bayar seseorang (yang kaya bayar lebih).",
        "**Horizontal Equity:** Individu dengan kondisi setara diperlakukan sama.",
        "**Vertical Equity:** Orang yang lebih mampu harus membayar pajak lebih tinggi."
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Pragmatic Compromise (Jenis Pajak)",
      "text": "**Progresif:** Persentase pajak naik jika pendapatan naik. **Regresif:** Persentase pajak turun jika pendapatan naik. **Proporsional:** Persentase pajak tetap (misal PPN 11%). Pajak juga dibagi menjadi Pajak Langsung (PPh) dan Tidak Langsung (Cukai)."
    },
    {
      "kind": "h2",
      "text": "Keseimbangan Ekonomi 3 Sektor"
    },
    {
      "kind": "p",
      "text": "Ketika Pemerintah (G dan T) masuk, rumusnya menjadi Y = C + I + G. Keseimbangan Suntikan-Bocoran menjadi I + G = S + T."
    },
    {
      "kind": "formula",
      "text": "Skenario 1: Pajak Konstan (Absolut) / T = T0\\n\\nY = 1/(1-b) × [C0 - bT0 + I + G]\\nMultiplier Belanja (G) = 1/(1-b)\\nMultiplier Pajak (T) = -b/(1-b)"
    },
    {
      "kind": "example",
      "title": "Kasus Pajak Konstan",
      "blocks": [
        {
          "kind": "p",
          "text": "C = 300 + 0,75Yd ; I = 400 ; G = T = 200.\\nMPC (b) = 0,75.\\nY = [1 / (1 - 0,75)] × (300 - (0,75×200) + 400 + 200)\\nY = 4 × (300 - 150 + 400 + 200) = 4 × 750 = **3.000**.\\nMultiplier G = 4. Jika G naik 50, Y naik 200.\\nMultiplier T = -3. Jika T naik 50, Y turun 150."
        }
      ]
    },
    {
      "kind": "formula",
      "text": "Skenario 2: Pajak Proporsional / T = T0 + tY\\n\\nY = 1/(1-b+bt) × [C0 - bT0 + I + G]\\nMultiplier Belanja = 1/(1-b+bt)\\nMultiplier Pajak (absolut) = -b/(1-b+bt)\\nMultiplier Tarif Pajak = -b / (1-b+bt) × Y"
    },
    {
      "kind": "example",
      "title": "Kasus Pajak Proporsional (Automatic Stabilizer)",
      "blocks": [
        {
          "kind": "p",
          "text": "C = 300 + 0,75Yd ; I = 400 ; G = 200 ; T = 200 + 0,15Y.\\nDi sini b = 0,75 dan t = 0,15.\\nPenyebut = (1 - 0,75 + 0,75×0,15) = 0,25 + 0,1125 = 0,3625.\\nMultiplier Belanja = 1 / 0,3625 = **2,758**.\\nY = 2,758 × (300 - 150 + 400 + 200) = 2,758 × 750 = **2.068,96**.\\nPerhatikan: Dengan adanya tarif pajak (t=15%), angka multiplier HANCUR drastis dari 4 menjadi 2,758! Pajak meredam ledakan ekonomi."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Identitas Makroekonomi & Tabungan Nasional"
    },
    {
      "kind": "formula",
      "text": "Y = C + I + G   =>   Y - C - G = I\\nManipulasi aljabar (tambah kurangi T):\\n(Y - T - C) + (T - G) = I\\n\\nPrivate Saving + Public Saving = National Saving = Investment"
    },
    {
      "kind": "ul",
      "items": [
        "Semakin besar Konsumsi (C), semakin kecil Tabungan Swasta (Private Saving), sehingga Tabungan Nasional turun.",
        "Ketika pemerintah mengalami **Defisit Anggaran** (belanja G lebih besar dari pajak T), Public Saving menjadi negatif. Hal ini menyedot Tabungan Nasional (National Saving turun)."
      ]
    },
    {
      "kind": "example",
      "title": "Menghitung Tabungan dan Investasi",
      "blocks": [
        {
          "kind": "p",
          "text": "Diketahui: GDP (Y) = 8 Triliun, T = 1,5 Triliun, Private Saving = 0,5 Triliun, Public Saving = 0,2 Triliun."
        },
        {
          "kind": "ul",
          "items": [
            "**Konsumsi (C):** Private Saving = Y - T - C  =>  0,5 = 8 - 1,5 - C  =>  C = 8 - 1,5 - 0,5 = **6 Triliun**.",
            "**Belanja (G):** Public Saving = T - G  =>  0,2 = 1,5 - G  =>  G = 1,5 - 0,2 = **1,3 Triliun**.",
            "**Tabungan Nasional (National Saving):** 0,5 + 0,2 = **0,7 Triliun**.",
            "**Investasi (I):** Karena National Saving = Investment, maka I = **0,7 Triliun**."
          ]
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Output Gap & Paradox of Thrift"
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Output gap",
      "text": "adalah selisih antara output aktual dan output potensial. Recessionary gap terjadi ketika Y aktual lebih rendah dari Y potensial; inflationary gap terjadi ketika Y aktual melebihi kapasitas berkelanjutan."
    },
    {
      "kind": "figure",
      "title": "Recessionary Gap vs Inflationary Gap",
      "svg": "<svg data-graph-id=\\"PTE-GRAPH-08\\" viewBox=\\"0 0 920 330\\" width=\\"100%\\" xmlns=\\"http://www.w3.org/2000/svg\\" role=\\"img\\">\\n<title>Recessionary gap dan inflationary gap</title><desc>Dua panel menunjukkan output keseimbangan dibandingkan output potensial. Recessionary gap terjadi saat output aktual di kiri output potensial. Inflationary gap terjadi saat output aktual di kanan output potensial.</desc>\\n<text x=\\"230\\" y=\\"25\\" text-anchor=\\"middle\\" fill=\\"#e2e8f0\\" font-size=\\"16\\" font-weight=\\"700\\">Recessionary gap</text><text x=\\"690\\" y=\\"25\\" text-anchor=\\"middle\\" fill=\\"#e2e8f0\\" font-size=\\"16\\" font-weight=\\"700\\">Inflationary gap</text>\\n<g transform=\\"translate(25,35)\\"><line x1=\\"45\\" y1=\\"240\\" x2=\\"405\\" y2=\\"240\\" stroke=\\"#64748b\\"/><line x1=\\"45\\" y1=\\"240\\" x2=\\"45\\" y2=\\"20\\" stroke=\\"#64748b\\"/><text x=\\"392\\" y=\\"263\\" fill=\\"#94a3b8\\">Y</text><text x=\\"18\\" y=\\"25\\" fill=\\"#94a3b8\\">P</text><line x1=\\"85\\" y1=\\"65\\" x2=\\"350\\" y2=\\"215\\" stroke=\\"#4f9cf9\\" stroke-width=\\"2.5\\"/><line x1=\\"90\\" y1=\\"210\\" x2=\\"345\\" y2=\\"55\\" stroke=\\"#22d3a0\\" stroke-width=\\"2.5\\"/><line x1=\\"305\\" y1=\\"35\\" x2=\\"305\\" y2=\\"240\\" stroke=\\"#f4516c\\" stroke-width=\\"2.3\\" stroke-dasharray=\\"7 4\\"/><text x=\\"292\\" y=\\"31\\" fill=\\"#f4516c\\">LRAS / Yp</text><circle cx=\\"220\\" cy=\\"142\\" r=\\"4\\" fill=\\"#f9a825\\"/><line x1=\\"220\\" y1=\\"142\\" x2=\\"220\\" y2=\\"240\\" stroke=\\"#f9a825\\" stroke-dasharray=\\"4 3\\"/><text x=\\"208\\" y=\\"258\\" fill=\\"#f9a825\\">Y*</text><path d=\\"M220 278 H305\\" stroke=\\"#f9a825\\" stroke-width=\\"3\\"/><text x=\\"262\\" y=\\"300\\" text-anchor=\\"middle\\" fill=\\"#cbd5e1\\">Y* &lt; Yp</text></g>\\n<g transform=\\"translate(485,35)\\"><line x1=\\"45\\" y1=\\"240\\" x2=\\"405\\" y2=\\"240\\" stroke=\\"#64748b\\"/><line x1=\\"45\\" y1=\\"240\\" x2=\\"45\\" y2=\\"20\\" stroke=\\"#64748b\\"/><text x=\\"392\\" y=\\"263\\" fill=\\"#94a3b8\\">Y</text><text x=\\"18\\" y=\\"25\\" fill=\\"#94a3b8\\">P</text><line x1=\\"110\\" y1=\\"55\\" x2=\\"375\\" y2=\\"205\\" stroke=\\"#4f9cf9\\" stroke-width=\\"2.5\\"/><line x1=\\"90\\" y1=\\"210\\" x2=\\"345\\" y2=\\"55\\" stroke=\\"#22d3a0\\" stroke-width=\\"2.5\\"/><line x1=\\"220\\" y1=\\"35\\" x2=\\"220\\" y2=\\"240\\" stroke=\\"#f4516c\\" stroke-width=\\"2.3\\" stroke-dasharray=\\"7 4\\"/><text x=\\"207\\" y=\\"31\\" fill=\\"#f4516c\\">LRAS / Yp</text><circle cx=\\"278\\" cy=\\"150\\" r=\\"4\\" fill=\\"#f9a825\\"/><line x1=\\"278\\" y1=\\"150\\" x2=\\"278\\" y2=\\"240\\" stroke=\\"#f9a825\\" stroke-dasharray=\\"4 3\\"/><text x=\\"268\\" y=\\"258\\" fill=\\"#f9a825\\">Y*</text><path d=\\"M220 278 H278\\" stroke=\\"#f9a825\\" stroke-width=\\"3\\"/><text x=\\"249\\" y=\\"300\\" text-anchor=\\"middle\\" fill=\\"#cbd5e1\\">Y* &gt; Yp</text></g></svg>",
      "caption": "Recessionary gap berarti output aktual di bawah output potensial. Inflationary gap berarti permintaan mendorong output melewati kapasitas berkelanjutan dan meningkatkan tekanan harga.",
      "altText": "Dua grafik AS-AD. Grafik kiri menunjukkan output keseimbangan lebih rendah dari output potensial. Grafik kanan menunjukkan output keseimbangan lebih tinggi dari output potensial."
    },
    {
      "kind": "ul",
      "items": [
        "**Recessionary Gap:** Permintaan agregat kurang. Kebijakan ekspansif dapat menaikkan output dan menurunkan pengangguran siklis.",
        "**Inflationary Gap:** Permintaan terlalu kuat. Kebijakan kontraktif dapat menekan inflasi tetapi berisiko menurunkan output."
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Paradox of thrift",
      "text": "jika semua orang serentak menaikkan tabungan dengan mengurangi konsumsi, pengeluaran agregat turun, output turun, dan tabungan aktual secara agregat belum tentu meningkat."
    }
  ]
};`;

const startIndex = content.indexOf('const tm10: Reading = {');
const endIndex = content.indexOf('const tm11: Reading = {');

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = content.substring(0, startIndex) + combinedTm10 + '\\n\\n' + content.substring(endIndex);
  fs.writeFileSync('c:/cek/src/data/pte/ptePraUAS.ts', newContent, 'utf-8');
  console.log('Successfully injected massive TM10');
} else {
  console.error('Could not find bounds');
}
