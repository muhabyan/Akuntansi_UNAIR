const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'pte', 'ptePraUAS.ts');
let text = fs.readFileSync(filePath, 'utf-8');

// SVG 1: Keynesian Cross
const svg1 = `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" role="img">
<title>Output Determination with Foreign Trade</title>
<desc>Grafik Keynesian Cross. Garis C+I+G lebih curam, sedangkan C+I+G+NX lebih landai karena ada kecenderungan mengimpor (marginal propensity to import). Jarak antara keduanya mencerminkan defisit/surplus ekspor neto.</desc>
<defs><marker id="arrow1" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#94a3b8"/></marker></defs>
<line x1="60" y1="340" x2="550" y2="340" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow1)"/>
<line x1="60" y1="340" x2="60" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow1)"/>
<text x="540" y="360" fill="#94a3b8" font-size="12">GDP (Y)</text>
<text x="20" y="45" fill="#94a3b8" font-size="12" transform="rotate(-90, 20, 45)">Total Spending</text>
<line x1="60" y1="340" x2="350" y2="50" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4"/>
<text x="80" y="325" fill="#94a3b8" font-size="12">45°</text>
<line x1="100" y1="230" x2="480" y2="60" stroke="#64748b" stroke-width="2.5"/>
<text x="490" y="65" fill="#64748b" font-size="13" font-weight="bold">C + I + G</text>
<line x1="100" y1="230" x2="480" y2="100" stroke="#f43f5e" stroke-width="2.5"/>
<text x="490" y="105" fill="#f43f5e" font-size="13" font-weight="bold">C + I + G + NX</text>
<circle cx="212" cy="188" r="4" fill="#64748b"/>
<circle cx="340" cy="148" r="4" fill="#f43f5e"/>
<text x="195" y="180" fill="#64748b" font-size="12">F (Closed)</text>
<text x="345" y="165" fill="#f43f5e" font-size="12">E (Open)</text>
<line x1="340" y1="122" x2="340" y2="148" stroke="#f43f5e" stroke-width="1.5"/>
<polygon points="337,126 343,126 340,122" fill="#f43f5e"/>
<polygon points="337,144 343,144 340,148" fill="#f43f5e"/>
<text x="330" y="115" fill="#f43f5e" font-size="11" text-anchor="end">Net-export deficit</text>
<line x1="212" y1="188" x2="212" y2="340" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
<line x1="340" y1="148" x2="340" y2="340" stroke="#f43f5e" stroke-width="1" stroke-dasharray="3"/>
</svg>`;

const figure1 = `      ]
    },
    {
      "kind": "formula",
      "text": "The Degree of Openness (Indikator Keterbukaan)\\n\\nTrade Dependence Index (TDI) = (Ekspor + Impor) / GDP\\n\\nSemakin tinggi rasio ini, semakin terbuka dan bergantung suatu negara pada perdagangan internasional."
    },
    {
      "kind": "figure",
      "title": "Output Determination with Foreign Trade",
      "caption": "Garis pengeluaran total dengan perdagangan (C+I+G+NX) lebih landai karena sebagian kenaikan pendapatan bocor menjadi impor. Keseimbangan bergeser dari F ke E.",
      "svg": "${svg1.replace(/"/g, '\\"').replace(/\n/g, '')}"
    },
    {
      "kind": "ul",
      "items": [`;

const target1 = /]\s*},\s*{\s*"kind":\s*"ul",\s*"items":\s*\[\s*"(\*\*Ekspor:\*\*[^\"]+)",\s*"(\*\*Impor:\*\*[^\"]+)",\s*"(\*\*Trade balance:\*\*[^\"]+)"\s*\]\s*},/g;
// Instead of complex regex, let's just find the string literal:
const target1Str = `"**Trade balance:** NX positif = surplus dagang; NX negatif = defisit dagang."`;
if (!text.includes(target1Str)) throw new Error("Target 1 not found");
text = text.replace(target1Str, target1Str + `\n` + figure1);


// SVG 2: Mankiw 3-Panel
const svg2 = `<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" role="img">
<title>The Real Equilibrium in an Open Economy</title>
<desc>Tiga panel pasar terbuka Mankiw. Panel A: Pasar Loanable Funds. Panel B: NCO. Panel C: Pasar Valas.</desc>
<defs><marker id="arrow2" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#94a3b8"/></marker></defs>
<!-- Panel A -->
<text x="250" y="30" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">(a) The Market for Loanable Funds</text>
<line x1="80" y1="280" x2="420" y2="280" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow2)"/>
<line x1="80" y1="280" x2="80" y2="60" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow2)"/>
<text x="250" y="310" fill="#94a3b8" font-size="12" text-anchor="middle">Quantity of Loanable Funds</text>
<text x="70" y="100" fill="#94a3b8" font-size="12" text-anchor="end">Real Interest Rate</text>
<line x1="130" y1="260" x2="350" y2="90" stroke="#3b82f6" stroke-width="2.5"/>
<text x="355" y="85" fill="#3b82f6" font-size="12">Supply (S)</text>
<line x1="130" y1="90" x2="350" y2="260" stroke="#3b82f6" stroke-width="2.5"/>
<text x="355" y="265" fill="#3b82f6" font-size="12">Demand (I+NCO)</text>
<circle cx="240" cy="175" r="4" fill="#e2e8f0"/>
<line x1="80" y1="175" x2="480" y2="175" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
<text x="65" y="180" fill="#e2e8f0" font-size="12">r₁</text>
<!-- Panel B -->
<text x="700" y="30" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">(b) Net Capital Outflow</text>
<line x1="530" y1="280" x2="870" y2="280" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow2)"/>
<line x1="530" y1="280" x2="530" y2="60" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow2)"/>
<line x1="680" y1="280" x2="680" y2="60" stroke="#64748b" stroke-width="1" stroke-dasharray="3"/>
<text x="850" y="300" fill="#94a3b8" font-size="12" text-anchor="middle">Net Capital Outflow (NCO)</text>
<line x1="600" y1="90" x2="780" y2="260" stroke="#3b82f6" stroke-width="2.5"/>
<circle cx="690" cy="175" r="4" fill="#e2e8f0"/>
<line x1="690" y1="175" x2="690" y2="520" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
<text x="680" y="295" fill="#94a3b8" font-size="12">0</text>
<!-- Panel C -->
<text x="700" y="580" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">(c) The Market for Foreign-Currency Exchange</text>
<line x1="530" y1="520" x2="870" y2="520" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow2)"/>
<line x1="530" y1="520" x2="530" y2="350" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow2)"/>
<text x="850" y="540" fill="#94a3b8" font-size="12" text-anchor="middle">Quantity of Dollars</text>
<text x="520" y="390" fill="#94a3b8" font-size="12" text-anchor="end">Real Exchange Rate</text>
<line x1="690" y1="360" x2="690" y2="520" stroke="#3b82f6" stroke-width="2.5"/>
<text x="700" y="370" fill="#3b82f6" font-size="12">Supply (NCO)</text>
<line x1="580" y1="380" x2="800" y2="490" stroke="#3b82f6" stroke-width="2.5"/>
<text x="810" y="495" fill="#3b82f6" font-size="12">Demand (NX)</text>
<circle cx="690" cy="435" r="4" fill="#e2e8f0"/>
<line x1="530" y1="435" x2="690" y2="435" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
<text x="510" y="440" fill="#e2e8f0" font-size="12">E₁</text>
</svg>`;

const figure2 = `{
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
      "text": "NCO menghubungkan kedua pasar ini. Ingat, NCO berbanding terbalik dengan Suku Bunga Riil ($r$). Jika $r$ domestik naik, aset domestik jadi lebih menarik sehingga orang enggan memarkir modal di luar negeri $\\rightarrow$ NCO turun."
    },
    {
      "kind": "figure",
      "title": "Keseimbangan Dua Pasar Ekonomi Terbuka Mankiw",
      "caption": "Model Mankiw: Suku bunga riil ditentukan di pasar dana pinjaman. Suku bunga tersebut menentukan tingkat NCO. Kemudian, NCO menentukan penawaran mata uang domestik di pasar valas, yang bersilangan dengan permintaan ekspor neto (NX) untuk menentukan nilai tukar riil.",
      "svg": "${svg2.replace(/"/g, '\\"').replace(/\n/g, '')}"
    },
    `;

// Match precisely before Kebijakan dan Shock
const target2Regex = /{\s*"kind":\s*"h2",\s*"text":\s*"Kebijakan dan Shock dalam Ekonomi Terbuka"\s*},/g;
if (!text.match(target2Regex)) throw new Error("Target 2 not found");
text = text.replace(target2Regex, figure2 + `{\n      "kind": "h2",\n      "text": "Kebijakan dan Shock dalam Ekonomi Terbuka"\n    },`);


// SVG 3: Shock Budget Deficit
const svg3 = `<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" role="img">
<title>The Effects of Government Budget Deficit</title>
<desc>Defisit fiskal menggeser kurva supply dana pinjaman ke kiri, menaikkan suku bunga. Akibatnya NCO turun. Penurunan NCO menggeser kurva supply valas ke kiri, sehingga nilai tukar terapresiasi.</desc>
<defs><marker id="arrow3" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#94a3b8"/></marker></defs>
<!-- Panel A -->
<text x="250" y="30" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">(a) The Market for Loanable Funds</text>
<line x1="80" y1="280" x2="420" y2="280" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow3)"/>
<line x1="80" y1="280" x2="80" y2="60" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow3)"/>
<line x1="150" y1="260" x2="350" y2="90" stroke="#3b82f6" stroke-width="2.5"/>
<line x1="100" y1="260" x2="300" y2="90" stroke="#f43f5e" stroke-width="2.5"/>
<text x="355" y="85" fill="#3b82f6" font-size="12">S₁</text>
<text x="305" y="85" fill="#f43f5e" font-size="12">S₂</text>
<path d="M 280 120 L 230 120" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrow3)"/>
<line x1="110" y1="90" x2="350" y2="260" stroke="#3b82f6" stroke-width="2.5"/>
<circle cx="250" cy="175" r="4" fill="#e2e8f0"/>
<circle cx="205" cy="138" r="4" fill="#f43f5e"/>
<line x1="80" y1="175" x2="550" y2="175" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
<line x1="80" y1="138" x2="450" y2="138" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4"/>
<text x="65" y="180" fill="#e2e8f0" font-size="12">r₁</text>
<text x="65" y="143" fill="#f43f5e" font-size="12">r₂</text>
<!-- Panel B -->
<text x="700" y="30" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">(b) Net Capital Outflow</text>
<line x1="530" y1="280" x2="870" y2="280" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow3)"/>
<line x1="530" y1="280" x2="530" y2="60" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow3)"/>
<line x1="600" y1="90" x2="780" y2="260" stroke="#3b82f6" stroke-width="2.5"/>
<circle cx="690" cy="175" r="4" fill="#e2e8f0"/>
<circle cx="650" cy="138" r="4" fill="#f43f5e"/>
<line x1="690" y1="175" x2="690" y2="520" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
<line x1="650" y1="138" x2="650" y2="520" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4"/>
<path d="M 690 220 L 665 220" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrow3)"/>
<!-- Panel C -->
<text x="700" y="580" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">(c) The Market for Foreign-Currency Exchange</text>
<line x1="530" y1="520" x2="870" y2="520" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow3)"/>
<line x1="530" y1="520" x2="530" y2="350" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow3)"/>
<line x1="690" y1="360" x2="690" y2="520" stroke="#3b82f6" stroke-width="2.5"/>
<line x1="650" y1="360" x2="650" y2="520" stroke="#f43f5e" stroke-width="2.5"/>
<text x="700" y="370" fill="#3b82f6" font-size="12">S₁</text>
<text x="625" y="370" fill="#f43f5e" font-size="12">S₂</text>
<path d="M 690 400 L 665 400" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrow3)"/>
<line x1="580" y1="380" x2="800" y2="490" stroke="#3b82f6" stroke-width="2.5"/>
<circle cx="690" cy="435" r="4" fill="#e2e8f0"/>
<circle cx="650" cy="415" r="4" fill="#f43f5e"/>
<line x1="530" y1="435" x2="690" y2="435" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
<line x1="530" y1="415" x2="650" y2="415" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4"/>
<text x="510" y="440" fill="#e2e8f0" font-size="12">E₁</text>
<text x="510" y="420" fill="#f43f5e" font-size="12">E₂</text>
<rect x="30" y="320" width="160" height="60" fill="#1e293b" rx="4"/>
<text x="40" y="340" fill="#e2e8f0" font-size="11">1. Defisit menggeser kurva S ke kiri, r naik.</text>
<text x="40" y="355" fill="#e2e8f0" font-size="11">2. NCO merespons r naik (NCO turun).</text>
<rect x="740" y="330" width="140" height="60" fill="#1e293b" rx="4"/>
<text x="750" y="350" fill="#e2e8f0" font-size="11">3. NCO turun = Supply valas turun.</text>
<text x="750" y="365" fill="#e2e8f0" font-size="11">4. E naik (Apresiasi).</text>
</svg>`;

const figure3 = `{
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
    },
    {
      "kind": "figure",
      "title": "Efek Defisit Anggaran terhadap Ekonomi Terbuka (Twin Deficits)",
      "caption": "Garis merah menunjukkan kondisi setelah shock defisit anggaran. Penurunan S memicu kenaikan bunga, jatuhnya NCO, dan apresiasi nilai tukar yang merugikan ekspor neto.",
      "svg": "${svg3.replace(/"/g, '\\"').replace(/\n/g, '')}"
    }`;

// Replace the table with the detailed shocks
const target3Regex = /{\s*"kind":\s*"table",\s*"headers":\s*\[\s*"Kebijakan\/Shock",\s*"Efek utama",\s*"Catatan analitis"\s*\],\s*"rows":\s*\[[\s\S]*?\]\s*}/g;
if (!text.match(target3Regex)) throw new Error("Target 3 not found");
text = text.replace(target3Regex, figure3);

fs.writeFileSync(filePath, text);
console.log("Injected safely.");
