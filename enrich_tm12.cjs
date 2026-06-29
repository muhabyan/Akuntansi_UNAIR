const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'pte', 'ptePraUAS.ts');
let text = fs.readFileSync(filePath, 'utf-8');

// 1. Enrich Output Determination
const target1Str = `"Garis pengeluaran total dengan perdagangan (C+I+G+NX) lebih landai karena sebagian kenaikan pendapatan bocor menjadi impor. Keseimbangan bergeser dari F ke E."`;
const enrichedCaption1 = `"Keseimbangan Output (Equilibrium GDP) tercapai ketika kurva pengeluaran agregat (C+I+G+NX) memotong garis 45 derajat (titik E). Penambahan Ekspor Neto (NX) mengubah kemiringan kurva. Karena ada kecenderungan mengimpor (MPM), kurva C+I+G+NX lebih landai dari C+I+G. Jarak vertikal antara C+I+G dan C+I+G+NX pada keseimbangan menunjukkan defisit atau surplus ekspor neto."`;
text = text.replace(target1Str, enrichedCaption1);

// 2. Enrich Loanable Funds & Foreign Exchange
const target2Str = `"**1. Pasar Dana Pinjaman (Market for Loanable Funds):** Mengoordinasikan Tabungan Nasional ($S$) sebagai *Supply*, dan Investasi Domestik ($I$) + NCO sebagai *Demand*. Penyeimbangnya adalah **Suku Bunga Riil ($r$)**.",\n        "**2. Pasar Valuta Asing (Market for Foreign-Currency Exchange):** Mengoordinasikan NCO sebagai *Supply* mata uang domestik, dan Ekspor Neto (NX) sebagai *Demand*. Penyeimbangnya adalah **Nilai Tukar Riil ($E$)**."`;
const enrichedList2 = `"**1. Pasar Dana Pinjaman (Market for Loanable Funds):** Di sini, penawaran dana berasal dari Tabungan Nasional ($S$). Permintaan dana berasal dari Investasi Domestik ($I$) dan Net Capital Outflow ($NCO$). Pada tingkat suku bunga riil keseimbangan, jumlah uang yang ingin ditabung masyarakat akan sama persis dengan jumlah investasi domestik dan investasi asing bersih (NCO).",
        "**2. Pasar Valuta Asing (Market for Foreign-Currency Exchange):** Di pasar ini, penawaran mata uang domestik berasal dari $NCO$ (orang yang menjual mata uang domestik untuk membeli aset luar negeri). Permintaannya berasal dari Ekspor Neto / $NX$ (orang asing yang butuh mata uang kita untuk membeli ekspor kita). Keseimbangan Nilai Tukar Riil ($\\\\epsilon$) memastikan demand untuk $NX$ persis sama dengan supply dari $NCO$."`;
text = text.replace(target2Str, enrichedList2);

// 3. Enrich NCO Relationship
const target3Str = `"NCO menghubungkan kedua pasar ini. Ingat, NCO berbanding terbalik dengan Suku Bunga Riil ($r$). Jika $r$ domestik naik, aset domestik jadi lebih menarik sehingga orang enggan memarkir modal di luar negeri $\\rightarrow$ NCO turun."`;
const enrichedCallout3 = `"NCO menghubungkan kedua pasar ini secara mekanis. Kurva NCO memiliki kemiringan negatif terhadap Suku Bunga Riil ($r$). Mengapa? Karena suku bunga domestik yang lebih tinggi membuat aset domestik (seperti obligasi) lebih menarik bagi investor. Hal ini mengurangi arus modal keluar (NCO turun). Catatan penting: NCO bisa bernilai negatif; nilai NCO negatif berarti perekonomian sedang mengalami aliran masuk modal bersih (Net Capital Inflow)."`;
text = text.replace(target3Str, enrichedCallout3);

// 4. Enrich Budget Deficit Steps
const target4Str = `"**1. Defisit Anggaran Pemerintah (Budget Deficit)**\\nDefisit menyebabkan Tabungan Nasional ($S$) turun $\\rightarrow$ Supply dana pinjaman turun $\\rightarrow$ **Suku bunga riil naik**. Karena bunga naik, investor asing masuk dan NCO turun. Akibatnya, Supply mata uang domestik di pasar valas turun $\\rightarrow$ **Nilai tukar riil apresiasi** $\\rightarrow$ Ekspor Neto (NX) turun. Fenomena ini memicu *Twin Deficits* (Defisit Anggaran & Defisit Perdagangan)."`;
const enrichedItem4 = `"**1. Efek Defisit Anggaran Pemerintah (Budget Deficit)**\\nDalam ekonomi terbuka, defisit anggaran memicu reaksi berantai yang logis:\\n\\n*   **Langkah 1:** Defisit mengurangi *supply* dana pinjaman (karena Tabungan Nasional $S$ turun).\\n*   **Langkah 2:** Penurunan supply ini mendorong **Suku Bunga Riil naik** (dari $r_1$ ke $r_2$), yang juga *crowd out* investasi domestik.\\n*   **Langkah 3:** Suku bunga yang tinggi menarik modal masuk, sehingga **NCO turun**.\\n*   **Langkah 4:** Penurunan NCO berarti *supply* mata uang domestik di pasar valas ikut turun.\\n*   **Langkah 5:** Akibatnya, **Nilai Tukar Riil terapresiasi** (menguat dari $E_1$ ke $E_2$).\\n*   **Kesimpulan:** Apresiasi membuat barang domestik lebih mahal bagi pihak asing, sehingga Ekspor Neto jatuh. Inilah asal mula *Twin Deficits*."`;
text = text.replace(target4Str, enrichedItem4);

fs.writeFileSync(filePath, text);
console.log("Explanations enriched.");
