const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'pte', 'ptePraUAS.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add The Degree of Openness
const konsepText = `    {
      "kind": "p",
      "text": "Perekonomian terbuka memasukkan perdagangan internasional dan arus modal internasional ke dalam analisis makro. Dalam ekonomi terbuka, output domestik tidak hanya dipengaruhi konsumsi, investasi, dan belanja pemerintah, tetapi juga ekspor neto serta pergerakan nilai tukar dan modal lintas negara."
    },`;

const opennessBlock = `    {
      "kind": "formula",
      "text": "The Degree of Openness (Indikator Keterbukaan)\\n\\nTrade Dependence Index (TDI) = (Ekspor + Impor) / GDP\\n\\nSemakin tinggi rasio ini, semakin terbuka dan bergantung suatu negara pada perdagangan internasional."
    },`;

content = content.replace(konsepText, konsepText + '\n' + opennessBlock);

// 2. Add Market for Loanable Funds and Market for Foreign-Currency Exchange
const pppSection = `    {
      "kind": "h2",
      "text": "Kebijakan dan Shock dalam Ekonomi Terbuka"
    },`;

const dualMarketsBlock = `    {
      "kind": "h2",
      "text": "Keseimbangan Dua Pasar: Loanable Funds & Valuta Asing"
    },
    {
      "kind": "p",
      "text": "Dalam ekonomi terbuka versi Mankiw, terdapat dua pasar utama yang saling terhubung erat oleh Net Capital Outflow (NCO):"
    },
    {
      "kind": "ul",
      "items": [
        "**1. Pasar Dana Pinjaman (Market for Loanable Funds):** Mengoordinasikan Tabungan Nasional ($S$) sebagai *Supply*, dan Investasi Domestik ($I$) + NCO sebagai *Demand*. Penyeimbangnya adalah **Suku Bunga Riil ($r$)**.",
        "**2. Pasar Valuta Asing (Market for Foreign-Currency Exchange):** Mengoordinasikan NCO sebagai *Supply* mata uang domestik, dan Ekspor Neto (NX) sebagai *Demand*. Penyeimbangnya adalah **Nilai Tukar Riil ($E$)**."
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "NCO sebagai Jembatan",
      "text": "NCO menghubungkan kedua pasar ini. Ingat, NCO berbanding terbalik dengan Suku Bunga Riil ($r$). Jika $r$ domestik naik, aset domestik jadi lebih menarik sehingga orang enggan memarkir modal di luar negeri $\\\\rightarrow$ NCO turun."
    },
`;

content = content.replace(pppSection, dualMarketsBlock + '\n' + pppSection);

// 3. Update Policies and Shocks Table to detailed explanations
const shockTable = `    {
      "kind": "table",
      "headers": [
        "Kebijakan/Shock",
        "Efek utama",
        "Catatan analitis"
      ],
      "rows": [
        [
          "Defisit fiskal naik",
          "Tabungan nasional turun; S−I turun; NX cenderung turun.",
          "Bisa menimbulkan twin deficits jika defisit anggaran beriringan dengan defisit transaksi berjalan."
        ],
        [
          "Tarif/impor dibatasi",
          "Impor turun langsung, tetapi nilai tukar riil dapat menyesuaikan.",
          "Proteksi tidak otomatis memperbaiki neraca dagang jangka panjang."
        ],
        [
          "Capital inflow besar",
          "Mata uang menguat, pembiayaan investasi meningkat.",
          "Risiko sudden stop jika arus modal berbalik."
        ],
        [
          "Depresiasi kurs",
          "Ekspor lebih murah, impor lebih mahal.",
          "Dapat memperbaiki NX jika elastisitas ekspor-impor cukup tinggi, tetapi menaikkan inflasi impor."
        ],
        [
          "Resesi global",
          "Permintaan ekspor turun.",
          "Negara terbuka lebih rentan terhadap shock eksternal."
        ]
      ]
    },`;

const detailedShocks = `    {
      "kind": "p",
      "text": "Mari kita lihat bagaimana berbagai shock memengaruhi keseimbangan tersebut:"
    },
    {
      "kind": "ul",
      "items": [
        "**1. Defisit Anggaran Pemerintah (Budget Deficit)**\\\\nDefisit menyebabkan Tabungan Nasional ($S$) turun $\\\\rightarrow$ Supply dana pinjaman turun $\\\\rightarrow$ **Suku bunga riil naik**. Karena bunga naik, investor asing masuk dan NCO turun. Akibatnya, Supply mata uang domestik di pasar valas turun $\\\\rightarrow$ **Nilai tukar riil apresiasi** $\\\\rightarrow$ Ekspor Neto (NX) turun. Fenomena ini memicu *Twin Deficits* (Defisit Anggaran & Defisit Perdagangan).",
        "**2. Kebijakan Perdagangan (Kuota Impor / Tarif)**\\\\nSangat penting dicatat: **Kebijakan ini TIDAK mengubah Trade Balance ($NX$)!** Mengapa? Kuota impor menurunkan impor, sehingga Demand untuk mata uang domestik (untuk beli ekspor neto kita) seolah naik $\\\\rightarrow$ **Nilai tukar riil apresiasi**. Karena apresiasi, barang ekspor kita jadi mahal, sehingga Ekspor turun. Penurunan ekspor ini membatalkan efek penurunan impor awal. $NX$ tetap sama selama $S$ dan $I$ tidak berubah.",
        "**3. Ketidakstabilan Politik & Capital Flight (Pelarian Modal)**\\\\nMisal krisis Meksiko 1994. Investor panik dan memindahkan dananya ke luar $\\\\rightarrow$ **NCO melonjak tajam**. Demand di pasar dana pinjaman naik $\\\\rightarrow$ **Suku bunga naik**. Sekaligus, Supply mata uang domestik (pesos) di pasar valas membanjir $\\\\rightarrow$ **Mata uang terdepresiasi parah** $\\\\rightarrow$ NX meningkat tajam (tapi karena krisis, bukan karena kuatnya fundamental)."
      ]
    },`;

content = content.replace(shockTable, detailedShocks);

fs.writeFileSync(filePath, content);
console.log("TM 12 upgraded successfully.");
