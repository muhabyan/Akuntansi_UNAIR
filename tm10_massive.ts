import { ContentBlock, Reading } from "./types"; // Adjust import if needed

export const tm10: Reading = {
  "tm": 10,
  "title": "Perekonomian Tertutup (Bagian 2): Investasi, Keseimbangan & Kebijakan Fiskal (200 Hal)",
  "ref": "Salinan 9-10. Closed Economy.pdf (Hal 23-52)",
  "intro": "Membedah peran investasi, mencetak rumus sakti Multiplier, dan membongkar cara kerja Kebijakan Fiskal (Pajak & Belanja Negara) secara matematis absolut.",
  "objectives": [
    "Memahami anatomi Investasi (Capital, Suku Bunga, Present Value, dan Kurva Permintaannya).",
    "Menentukan titik keseimbangan Y = C + I dan S = I secara grafis dan matematis (Model 2 Sektor).",
    "Membuktikan secara aljabar rumus sakti Multiplier Investasi, Belanja (G), dan Pajak (T).",
    "Mengekstrak fungsi dan keseimbangan 3-Sektor dalam skenario pajak absolut (T0) dan pajak proporsional (tY).",
    "Membedah Identitas Tabungan Nasional (Private + Public Saving = Investment)."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Investasi, Capital, dan Suku Bunga (Hal 23-26)"
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
      "text": "Rate of Return (RoR) adalah imbal hasil bersih tahunan dari aset modal. Contoh (Perusahaan KARTIKA): Beli mobil rental $20.000, laba bersih setahun $2.400. RoR = 2.400 / 20.000 = **12%**.\nSedangkan **Suku Bunga (Interest Rate)** adalah tingkat imbal hasil atas aset finansial."
    },
    {
      "kind": "formula",
      "text": "Present Value (Nilai Sekarang)\n\nPV = N / (1 + i)^t\n\nN = Net receipts, i = Interest rate, t = Tahun",
      "note": "Hubungan Terbalik: Harga aset akan **turun** ketika suku bunga **naik** (karena PV dari arus kas masa depan mengecil saat pembaginya, yaitu (1+i), membesar)."
    },
    {
      "kind": "h2",
      "text": "Determinan Investasi & Kurva Permintaan (Hal 27-30)"
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
      "text": "Keseimbangan Ekonomi 2 Sektor (Hal 31-33)"
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
      "text": "Multiplier Model (Hal 34-38)"
    },
    {
      "kind": "p",
      "text": "Model Multiplier menjelaskan bahwa setiap perubahan '1 Dolar' pada pengeluaran eksogen (seperti Investasi) akan menghasilkan efek lipat ganda pada GDP. Hal ini disebabkan karena pengeluaran satu pihak menjadi pendapatan pihak lain, yang membelanjakannya lagi (efek domino)."
    },
    {
      "kind": "formula",
      "text": "Multiplier Coefficient (k)\n\nk = 1 / (1 - MPC)   atau   k = 1 / MPS",
      "note": "Contoh: Misal MPC = 2/3 (maka MPS = 1/3). Nilai k = 1 / (1/3) = 3.\nJika investasi naik sebesar **1.000**, maka GDP (Y) akan melonjak sebesar 3 × 1.000 = **3.000**!"
    },
    {
      "kind": "h2",
      "text": "Kebijakan Fiskal dalam Model Multiplier (Hal 39-41)"
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
      "text": "Keseimbangan Ekonomi 3 Sektor (Hal 42-50)"
    },
    {
      "kind": "p",
      "text": "Ketika Pemerintah (G dan T) masuk, rumusnya menjadi Y = C + I + G. Keseimbangan Suntikan-Bocoran menjadi I + G = S + T."
    },
    {
      "kind": "formula",
      "text": "Skenario 1: Pajak Konstan (Absolut) / T = T0\n\nY = 1/(1-b) × [C0 - bT0 + I + G]\nMultiplier Belanja (G) = 1/(1-b)\nMultiplier Pajak (T) = -b/(1-b)"
    },
    {
      "kind": "example",
      "title": "Kasus Pajak Konstan",
      "blocks": [
        {
          "kind": "p",
          "text": "C = 300 + 0,75Yd ; I = 400 ; G = T = 200.\nMPC (b) = 0,75.\nY = [1 / (1 - 0,75)] × (300 - (0,75×200) + 400 + 200)\nY = 4 × (300 - 150 + 400 + 200) = 4 × 750 = **3.000**.\nMultiplier G = 4. Jika G naik 50, Y naik 200.\nMultiplier T = -3. Jika T naik 50, Y turun 150."
        }
      ]
    },
    {
      "kind": "formula",
      "text": "Skenario 2: Pajak Proporsional / T = T0 + tY\n\nY = 1/(1-b+bt) × [C0 - bT0 + I + G]\nMultiplier Belanja = 1/(1-b+bt)\nMultiplier Pajak (absolut) = -b/(1-b+bt)\nMultiplier Tarif Pajak = -b / (1-b+bt) × Y"
    },
    {
      "kind": "example",
      "title": "Kasus Pajak Proporsional (Automatic Stabilizer)",
      "blocks": [
        {
          "kind": "p",
          "text": "C = 300 + 0,75Yd ; I = 400 ; G = 200 ; T = 200 + 0,15Y.\nDi sini b = 0,75 dan t = 0,15.\nPenyebut = (1 - 0,75 + 0,75×0,15) = 0,25 + 0,1125 = 0,3625.\nMultiplier Belanja = 1 / 0,3625 = **2,758**.\nY = 2,758 × (300 - 150 + 400 + 200) = 2,758 × 750 = **2.068,96**.\nPerhatikan: Dengan adanya tarif pajak (t=15%), angka multiplier HANCUR drastis dari 4 menjadi 2,758! Pajak meredam ledakan ekonomi."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Identitas Makroekonomi & Tabungan Nasional (Hal 51-54)"
    },
    {
      "kind": "formula",
      "text": "Y = C + I + G   =>   Y - C - G = I\nManipulasi aljabar (tambah kurangi T):\n(Y - T - C) + (T - G) = I\n\nPrivate Saving + Public Saving = National Saving = Investment"
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
    }
  ]
};
