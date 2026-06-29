const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'pte', 'ptePraUAS.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const moneyMultiplierFormula = `    {
      "kind": "formula",
      "text": "Money Multiplier (M) = 1 / R\\n\\nJika Reserve Ratio (R) = 10% (0.1), M = 1 / 0.1 = 10\\n\\nTotal Penciptaan Uang = Deposit Awal × Multiplier\\nTotal Penciptaan Uang = $1.000 × 10 = $10.000."
    },`;
const moneyMultiplierExplanation = `    {
      "kind": "ul",
      "items": [
        "**M (Money Multiplier):** Angka pengganda uang. Menunjukkan seberapa besar uang baru yang tercipta dari setiap unit uang yang disimpan di bank.",
        "**R (Reserve Ratio / Cadangan Wajib):** Persentase simpanan (deposit) yang wajib ditahan oleh bank komersial dan tidak boleh dipinjamkan."
      ]
    },`;
content = content.replace(moneyMultiplierFormula, moneyMultiplierFormula + '\n' + moneyMultiplierExplanation);


const quantityEquationFormula = `    {
      "kind": "formula",
      "text": "Quantity Equation\\n\\nM × V = P × Y\\n\\nDalam laju pertumbuhan: g_M + g_V = π + g_Y\\n\\nJika V stabil: π ≈ g_M − g_Y"
    },`;
const quantityEquationExplanation = `    {
      "kind": "ul",
      "items": [
        "**M (Money Supply):** Jumlah uang yang beredar dalam perekonomian.",
        "**V (Velocity of Money):** Kecepatan perputaran uang (rata-rata berapa kali 1 unit uang berpindah tangan untuk transaksi).",
        "**P (Price Level):** Tingkat harga umum (biasanya direpresentasikan oleh indeks harga).",
        "**Y (Real GDP / Output):** Jumlah barang dan jasa riil yang diproduksi dalam perekonomian.",
        "**g_M, g_V, g_Y:** Tingkat pertumbuhan (growth rate) masing-masing dari M, V, dan Y.",
        "**π (Inflasi):** Laju pertumbuhan tingkat harga umum."
      ]
    },`;
content = content.replace(quantityEquationFormula, quantityEquationFormula + '\n' + quantityEquationExplanation);


const fisherFormula = `    {
      "kind": "formula",
      "text": "Persamaan Fisher (Mankiw Ch. 30)\\n\\nSuku bunga riil = suku bunga nominal − inflasi\\n\\nr ≈ i − π\\n\\ni ≈ r + π^e\\n\\nFisher effect: dalam jangka panjang, kenaikan 1% pertumbuhan uang menaikkan inflasi 1% dan suku bunga nominal 1%"
    },`;
const fisherExplanation = `    {
      "kind": "ul",
      "items": [
        "**r (Real Interest Rate):** Suku bunga riil, mencerminkan imbal hasil sebenarnya dari sisi daya beli.",
        "**i (Nominal Interest Rate):** Suku bunga nominal, yaitu angka suku bunga yang tertera di bank atau kontrak.",
        "**π (Inflation Rate):** Laju inflasi aktual yang terjadi.",
        "**π^e (Expected Inflation):** Ekspektasi inflasi di masa mendatang."
      ]
    },`;
content = content.replace(fisherFormula, fisherFormula + '\n' + fisherExplanation);

const exchangeRateFormula = `    {
      "kind": "callout",
      "variant": "info",
      "title": "Konvensi nilai tukar",
      "text": "dalam catatan ini, nilai tukar riil = e × P/P*, dengan e = jumlah mata uang asing per 1 unit mata uang domestik. Dengan konvensi ini, nilai tukar riil naik berarti barang domestik relatif lebih mahal. Hati-hati: kuotasi sehari-hari di Indonesia justru memakai rupiah per dolar (Rp/USD), sehingga angka yang naik berarti rupiah melemah (depresiasi). Saat menjawab soal, sebut dulu konvensi yang dipakai agar arah apresiasi/depresiasi tidak terbalik."
    },`;
const exchangeRateExplanation = `    {
      "kind": "ul",
      "items": [
        "**e (Nominal Exchange Rate):** Nilai tukar nominal (misal: jumlah USD yang didapat dari 1 Rupiah).",
        "**P (Harga Domestik):** Indeks harga barang di dalam negeri (misal: di Indonesia).",
        "**P* (Harga Luar Negeri):** Indeks harga barang di luar negeri (misal: di AS)."
      ]
    },`;
content = content.replace(exchangeRateFormula, exchangeRateFormula + '\n' + exchangeRateExplanation);

fs.writeFileSync(filePath, content);
console.log('Added explanations for mathematical formulas.');
