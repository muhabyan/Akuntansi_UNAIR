import re

new_tm10 = """const tm10: Reading = {
  "tm": 10,
  "title": "Perekonomian Tertutup (Bagian 2): Keseimbangan, Multiplier & Kebijakan Fiskal",
  "ref": "Kontrak: 1(20), 2(23,24) · Substansi: Samuelson Ch.21-22; Mankiw Ch.26, Ch.33-34",
  "intro": "Membedah peran investasi, mencetak rumus sakti Multiplier, dan membongkar cara kerja Kebijakan Fiskal (Pajak & Belanja Negara) secara matematis absolut.",
  "objectives": [
    "Memahami anatomi Investasi (determinan dan kurva permintaannya).",
    "Menentukan titik keseimbangan Y = C + I dan S = I secara grafis dan matematis.",
    "Membuktikan secara aljabar rumus sakti Multiplier Investasi, Belanja (G), dan Pajak (T).",
    "Mengekstrak fungsi dan keseimbangan 3-Sektor dalam skenario pajak absolut (T0) dan pajak proporsional (tY)."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Peran dan Determinan Investasi"
    },
    {
      "kind": "p",
      "text": "Investasi memiliki peran ganda yang sangat mematikan dalam makroekonomi: secara jangka pendek ia mendongkrak **Aggregate Demand (Permintaan Agregat)**, dan secara jangka panjang ia merangsang **akumulasi modal** yang memperbesar kapasitas produksi negara. Apa yang menentukan orang mau berinvestasi?"
    },
    {
      "kind": "ul",
      "items": [
        "**Revenue (Pendapatan):** Apakah investasi ini akan meningkatkan output / PDB yang menghasilkan uang?",
        "**Cost (Biaya):** Sangat dipengaruhi oleh **Suku Bunga (Interest Rate)** dan Pajak.",
        "**Expectation (Ekspektasi):** Kepercayaan diri pebisnis terhadap masa depan ekonomi negara."
      ]
    },
    {
      "kind": "figure",
      "title": "Investment Demand Curve (Kurva Permintaan Investasi)",
      "svg": "<svg viewBox=\\"0 0 450 300\\" xmlns=\\"http://www.w3.org/2000/svg\\"><line stroke=\\"#657084\\" stroke-width=\\"1.5\\" x1=\\"50\\" x2=\\"400\\" y1=\\"250\\" y2=\\"250\\"></line><line stroke=\\"#657084\\" stroke-width=\\"1.5\\" x1=\\"50\\" x2=\\"50\\" y1=\\"250\\" y2=\\"30\\"></line><text fill=\\"#9aa4b7\\" font-size=\\"11\\" x=\\"10\\" y=\\"20\\">r (%)</text><text fill=\\"#9aa4b7\\" font-size=\\"11\\" x=\\"410\\" y=\\"255\\">I</text><text fill=\\"#9aa4b7\\" font-size=\\"11\\" transform=\\"rotate(-90 20 150)\\" x=\\"20\\" y=\\"150\\">Interest Rate / Suku Bunga</text><text fill=\\"#9aa4b7\\" font-size=\\"11\\" x=\\"180\\" y=\\"280\\">Investment (Triliun Rp)</text><line stroke=\\"#4f9cf9\\" stroke-width=\\"2.5\\" x1=\\"80\\" x2=\\"350\\" y1=\\"50\\" y2=\\"220\\"></line><text fill=\\"#4f9cf9\\" font-size=\\"12\\" font-weight=\\"bold\\" x=\\"360\\" y=\\"225\\">ID (Investment Demand)</text></svg>",
      "caption": "Kurva miring ke bawah secara mutlak: Semakin tinggi suku bunga (biaya meminjam), semakin merosot jumlah investasi yang dilakukan pengusaha."
    },
    {
      "kind": "h2",
      "text": "Keseimbangan 2-Sektor: Keynesian Cross & Titik Impas"
    },
    {
      "kind": "p",
      "text": "Jika di TM 9 kita membahas ekuilibrium saat C = Y (Break-Even keluarga), kini kita memasukkan Perusahaan (I). Perekonomian mencapai **Keseimbangan (Ekuilibrium)** saat total produksi persis sama dengan total permintaan."
    },
    {
      "kind": "figure",
      "title": "Pendekatan 1: Pengeluaran Agregat (Y = C + I)",
      "svg": "<svg viewBox=\\"0 0 450 350\\" xmlns=\\"http://www.w3.org/2000/svg\\"><line stroke=\\"#657084\\" stroke-width=\\"1.5\\" x1=\\"50\\" x2=\\"400\\" y1=\\"300\\" y2=\\"300\\"></line><line stroke=\\"#657084\\" stroke-width=\\"1.5\\" x1=\\"50\\" x2=\\"50\\" y1=\\"300\\" y2=\\"30\\"></line><text fill=\\"#9aa4b7\\" font-size=\\"11\\" x=\\"20\\" y=\\"20\\">AE</text><text fill=\\"#9aa4b7\\" font-size=\\"11\\" x=\\"410\\" y=\\"305\\">Y</text><line stroke=\\"#9aa4b7\\" stroke-width=\\"1.5\\" x1=\\"50\\" x2=\\"320\\" y1=\\"300\\" y2=\\"30\\"></line><text fill=\\"#9aa4b7\\" font-size=\\"11\\" transform=\\"rotate(-45 280 60)\\" x=\\"280\\" y=\\"60\\">Y = AE (45°)</text><line stroke=\\"#d81b60\\" stroke-width=\\"2\\" x1=\\"50\\" x2=\\"350\\" y1=\\"200\\" y2=\\"100\\"></line><text fill=\\"#d81b60\\" font-size=\\"11\\" font-weight=\\"bold\\" x=\\"360\\" y=\\"105\\">C</text><line stroke=\\"#4f9cf9\\" stroke-width=\\"2.5\\" x1=\\"50\\" x2=\\"350\\" y1=\\"150\\" y2=\\"50\\"></line><text fill=\\"#4f9cf9\\" font-size=\\"11\\" font-weight=\\"bold\\" x=\\"360\\" y=\\"55\\">AE = C + I</text><line stroke=\\"#f9a825\\" stroke-dasharray=\\"4,4\\" stroke-width=\\"1.5\\" x1=\\"200\\" x2=\\"200\\" y1=\\"300\\" y2=\\"150\\"></line><circle cx=\\"200\\" cy=\\"150\\" fill=\\"#f9a825\\" r=\\"5\\"></circle><text fill=\\"#9aa4b7\\" font-size=\\"12\\" font-weight=\\"bold\\" x=\\"190\\" y=\\"320\\">Y*</text><text fill=\\"#9aa4b7\\" font-size=\\"12\\" font-weight=\\"bold\\" x=\\"210\\" y=\\"145\\">E</text></svg>",
      "caption": "Kurva Konsumsi (C) didorong ke atas sebesar I (Investasi). Titik potong E adalah Y Ekuilibrium (Y*)."
    },
    {
      "kind": "figure",
      "title": "Pendekatan 2: Injeksi vs Kebocoran (S = I)",
      "svg": "<svg viewBox=\\"0 0 450 250\\" xmlns=\\"http://www.w3.org/2000/svg\\"><line stroke=\\"#657084\\" stroke-width=\\"1.5\\" x1=\\"50\\" x2=\\"400\\" y1=\\"150\\" y2=\\"150\\"></line><line stroke=\\"#657084\\" stroke-width=\\"1.5\\" x1=\\"50\\" x2=\\"50\\" y1=\\"220\\" y2=\\"30\\"></line><text fill=\\"#9aa4b7\\" font-size=\\"11\\" x=\\"20\\" y=\\"20\\">S, I</text><text fill=\\"#9aa4b7\\" font-size=\\"11\\" x=\\"410\\" y=\\"155\\">Y</text><line stroke=\\"#4f9cf9\\" stroke-width=\\"2.5\\" x1=\\"50\\" x2=\\"380\\" y1=\\"80\\" y2=\\"80\\"></line><text fill=\\"#4f9cf9\\" font-size=\\"11\\" font-weight=\\"bold\\" x=\\"390\\" y=\\"85\\">I (Investasi)</text><line stroke=\\"#d81b60\\" stroke-width=\\"2\\" x1=\\"100\\" x2=\\"350\\" y1=\\"200\\" y2=\\"50\\"></line><text fill=\\"#d81b60\\" font-size=\\"11\\" font-weight=\\"bold\\" x=\\"360\\" y=\\"55\\">S (Tabungan)</text><line stroke=\\"#f9a825\\" stroke-dasharray=\\"4,4\\" stroke-width=\\"1.5\\" x1=\\"300\\" x2=\\"300\\" y1=\\"150\\" y2=\\"80\\"></line><circle cx=\\"300\\" cy=\\"80\\" fill=\\"#f9a825\\" r=\\"5\\"></circle><text fill=\\"#9aa4b7\\" font-size=\\"12\\" font-weight=\\"bold\\" x=\\"290\\" y=\\"170\\">Y*</text><text fill=\\"#9aa4b7\\" font-size=\\"12\\" font-weight=\\"bold\\" x=\\"280\\" y=\\"70\\">E (S=I)</text></svg>",
      "caption": "Ekuilibrium absolut juga tercapai saat Kebocoran (Tabungan / S) persis sama besarnya dengan Injeksi (Investasi / I)."
    },
    {
      "kind": "h2",
      "text": "Model Multiplier (Efek Pengganda)"
    },
    {
      "kind": "p",
      "text": "Konsep radikal Keynes: Setiap 1 Rupiah injeksi dari luar (Investasi/Belanja) tidak hanya menaikkan PDB sebesar 1 Rupiah, melainkan berlipat ganda! Mengapa? Karena pengeluaran perusahaan akan menjadi gaji pekerja, lalu pekerja membelanjakan gajinya (sesuai MPC), yang menjadi gaji orang lain lagi, dan seterusnya."
    },
    {
      "kind": "formula",
      "text": "Rumus Sakti Multiplier\\n\\nK_I = 1 / (1 - MPC) = 1 / MPS\\n\\nPerubahan PDB = K_I × Perubahan Investasi",
      "note": "K_I adalah Koefisien Multiplier Investasi."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Pembuktian Deret Matematika Absolut",
      "text": "Misalkan Pabrik Z berinvestasi 1.000 Miliar dan MPC masyarakat adalah 2/3 (0.67).\\n1. Putaran pertama: Pekerja pabrik dapat 1.000 Miliar.\\n2. Putaran kedua: Pekerja belanja 2/3 dari gajinya = 667 Miliar.\\n3. Putaran ketiga: Uang 667 Miliar jadi gaji orang lain, dibelanjakan lagi 2/3-nya = 444 Miliar.\\n\\nSecara aljabar tak terhingga: 1000 × (1 + 2/3 + (2/3)² + (2/3)³ + ...)\\nDeret geometri ini disederhanakan menjadi: **1 / (1 - 2/3) × 1000 = 3 × 1000 = 3.000 Miliar.** PDB meledak 3x lipat!"
    },
    {
      "kind": "h2",
      "text": "Keseimbangan 3-Sektor: Kebijakan Fiskal (Pajak Independen)"
    },
    {
      "kind": "p",
      "text": "Pemerintah masuk membawa instrumen **Kebijakan Fiskal**: Belanja Negara (G) dan Pajak (T). Jika diasumsikan Pajak adalah beban tetap (Lump-sum) terlepas dari seberapa besar gaji rakyat, maka rumusnya adalah T = T0."
    },
    {
      "kind": "ul",
      "items": [
        "**Belanja Negara (G):** Berfungsi sebagai INJEKSI langsung ke nadi ekonomi (Sama dengan Investasi).",
        "**Pajak (T):** Berfungsi sebagai KEBOCORAN karena menghisap daya beli masyarakat dari fungsi Konsumsi."
      ]
    },
    {
      "kind": "formula",
      "text": "Penyelesaian Aljabar Keseimbangan (Y = C + I + G)\\n\\nY = C₀ + b(Y - T₀) + I + G\\nY = C₀ + bY - bT₀ + I + G\\nY - bY = C₀ - bT₀ + I + G\\nY(1 - b) = C₀ - bT₀ + I + G\\n\\nY = (1 / (1 - b)) × (C₀ - bT₀ + I + G)",
      "note": "Perhatikan bahwa Pajak (T0) berdampak negatif terhadap GDP, namun dikalikan dengan (b) karena uang pajak yang hilang seharusnya sebagian ditabung, sebagian dikonsumsi."
    },
    {
      "kind": "example",
      "title": "Studi Kasus 1: Perhitungan Pajak Konstan (Lump-sum)",
      "blocks": [
        {
          "kind": "p",
          "text": "Diketahui: C = 300 + 0.75Yd, I = 400, G = 200, T = 200.\\nTentukan Y Keseimbangan, Multiplier G, dan Multiplier T!"
        },
        {
          "kind": "ul",
          "items": [
            "**Y Keseimbangan:** Masukkan ke rumus jadi Y = [1 / (1 - 0.75)] × (300 - (0.75×200) + 400 + 200) ➔ Y = 4 × (300 - 150 + 400 + 200) ➔ Y = 4 × 750 = **3.000**.",
            "**Multiplier Belanja Negara (K_G):** Rumusnya 1 / (1 - b) ➔ 1 / 0.25 = **4**. Artinya, setiap pemerintah menambah belanja G sebesar 50, PDB (Y) akan meledak naik sebesar 4 × 50 = 200.",
            "**Multiplier Pajak (K_T):** Rumusnya -b / (1 - b) ➔ -0.75 / 0.25 = **-3**. Artinya, setiap pemerintah menaikkan pajak T sebesar 50, PDB (Y) akan merosot sebesar -3 × 50 = -150."
          ]
        }
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Jebakan Kritis UAS",
      "text": "Kenapa Multiplier Pajak lebih kecil secara absolut (3) dibandingkan Multiplier Belanja Negara (4)? Karena saat pemerintah membelanjakan uang (G), 100% uang itu langsung berputar di pasar. Tapi saat rakyat dipajaki (T), uang yang hilang itu sebenarnya terdiri dari jatah konsumsi DAN jatah menabung. Jadi daya pukul pajak ke roda ekonomi sedikit lebih lemah daripada daya dorong belanja negara!"
    },
    {
      "kind": "h2",
      "text": "Keseimbangan dengan Pajak Proporsional (T = T0 + tY)"
    },
    {
      "kind": "p",
      "text": "Dunia nyata tidak menggunakan pajak lump-sum. Semakin kaya kamu, pajaknya makin besar. Ini disebut Pajak Proporsional (dengan tarif t). Fungsi pajaknya menjadi: **T = T₀ + tY**."
    },
    {
      "kind": "example",
      "title": "Studi Kasus 2: Pajak Proporsional",
      "blocks": [
        {
          "kind": "p",
          "text": "Diketahui: C = 300 + 0.75Yd, I = 400, G = 200, **T = 200 + 0.15Y**.\\nTentukan Y Keseimbangan baru!"
        },
        {
          "kind": "ul",
          "items": [
            "**Perombakan Multiplier:** Karena ada t, pembagi multiplier berubah jadi 1 / (1 - b + bt).",
            "**Penyebut Baru:** 1 - 0.75 + (0.75 × 0.15) = 0.25 + 0.1125 = **0.3625**.",
            "**Y Keseimbangan:** Y = [1 / 0.3625] × (300 - (0.75×200) + 400 + 200) ➔ Y = 2.7586 × 750 = **2.068,96**."
          ]
        }
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Automatic Stabilizer",
      "text": "Adanya (t) membuat nilai penyebut multiplier semakin besar (dari 0.25 jadi 0.3625). Hasilnya, rasio multiplier hancur mengecil dari 4 menjadi 2.75! Inilah kekuatan rahasia dari **Pajak Proporsional (Automatic Stabilizer)**. Pajak ini otomatis meredam siklus bom-dan-kehancuran ekonomi agar negara tidak terlalu overheating saat *boom* dan tidak terlalu hancur saat resesi."
    },
    {
      "kind": "h2",
      "text": "Identitas Makroekonomi & Tabungan Nasional"
    },
    {
      "kind": "p",
      "text": "Mari kita mainkan trik aljabar dari persamaan absolut keseimbangan untuk membongkar misteri tabungan."
    },
    {
      "kind": "formula",
      "text": "Y = C + I + G\\nY - C - G = I\\n\\nModifikasi (Tambah dan kurangi dengan T):\\n(Y - T - C) + (T - G) = I\\n\\nPrivate Saving + Public Saving = National Saving = Investment",
      "note": "(Y-T-C) adalah sisa gaji rakyat. (T-G) adalah sisa anggaran APBN (Defisit/Surplus)."
    },
    {
      "kind": "example",
      "title": "Studi Kasus 3: Membedah Urat Nadi Tabungan",
      "blocks": [
        {
          "kind": "p",
          "text": "Diketahui GDP (Y) = 8 Triliun, Pajak (T) = 1.5 Triliun, Tabungan Swasta (Private Saving) = 0.5 Triliun, dan Tabungan Publik (Public Saving) = 0.2 Triliun."
        },
        {
          "kind": "ul",
          "items": [
            "**Berapa Konsumsi Rakyat (C)?** Private = Y - T - C ➔ 0.5 = 8 - 1.5 - C ➔ C = 8 - 1.5 - 0.5 = **6 Triliun**.",
            "**Berapa Belanja Pemerintah (G)?** Public = T - G ➔ 0.2 = 1.5 - G ➔ G = 1.5 - 0.2 = **1.3 Triliun**.",
            "**Berapa Total Investasi Negara (I)?** Investment = Private + Public ➔ I = 0.5 + 0.2 = **0.7 Triliun**. (Terbukti juga dari 8 - 6 - 1.3 = 0.7)."
          ]
        }
      ]
    }
  ]
};
"""

with open(r'c:\cek\src\data\pte\ptePraUAS.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find const tm10 and replace it. 
# We use regex to match from "const tm10: Reading = {" until "};" followed by "const tm11"
pattern = re.compile(r'const tm10: Reading = \{.*?\n\};\n\nconst tm11', re.DOTALL)
new_content = pattern.sub(new_tm10 + '\n\nconst tm11', content)

with open(r'c:\cek\src\data\pte\ptePraUAS.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("TM10 successfully injected.")
