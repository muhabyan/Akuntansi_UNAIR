const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'pte', 'ptePraUAS.ts');
let text = fs.readFileSync(filePath, 'utf-8');

const startIdx = text.indexOf('const tm12: Reading = {');
if (startIdx === -1) throw new Error("tm12 not found");

const objStart = text.indexOf('{', startIdx);
let open = 0, objEnd = -1, inString = false, escape = false;

for (let i = objStart; i < text.length; i++) {
  const char = text[i];
  if (inString) {
    if (escape) escape = false;
    else if (char === '\\') escape = true;
    else if (char === '"') inString = false;
  } else {
    if (char === '"') inString = true;
    else if (char === '{') open++;
    else if (char === '}') {
      open--;
      if (open === 0) { objEnd = i + 1; break; }
    }
  }
}

let tm12String = text.substring(objStart, objEnd);
let tm12 = eval('(' + tm12String + ')');

const oldCapitalFlightText = "**3. Ketidakstabilan Politik & Capital Flight (Pelarian Modal)**\\nMisal krisis Meksiko 1994. Investor panik dan memindahkan dananya ke luar $\\rightarrow$ **NCO melonjak tajam**. Demand di pasar dana pinjaman naik $\\rightarrow$ **Suku bunga naik**. Sekaligus, Supply mata uang domestik (pesos) di pasar valas membanjir $\\rightarrow$ **Mata uang terdepresiasi parah** $\\rightarrow$ NX meningkat tajam (tapi karena krisis, bukan karena kuatnya fundamental).";

const newCapitalFlightText = `**3. Ketidakstabilan Politik & Capital Flight (Pelarian Modal)**
*Capital flight* adalah penurunan besar dan tiba-tiba dalam permintaan aset yang berlokasi di suatu negara. Hal ini memiliki dampak terbesar pada negara yang ditinggalkan oleh modal tersebut, namun juga memengaruhi negara lain.
*   Jika investor mulai khawatir tentang keamanan investasi mereka (misal karena instabilitas politik), modal dapat dengan cepat keluar dari suatu perekonomian.
*   Hal ini memicu suku bunga naik dan mata uang domestik mengalami depresiasi tajam.

**Studi Kasus: Krisis Meksiko 1994**
Ketika investor di seluruh dunia mengamati masalah politik di Meksiko tahun 1994, mereka menjual sebagian aset Meksiko yang mereka miliki dan menggunakan hasilnya untuk membeli aset di negara lain.
*   Hal ini meningkatkan *Net Capital Outflow* (NCO) Meksiko secara drastis.
*   Meningkatnya NCO berarti **permintaan (*demand*) di pasar dana pinjaman (*loanable funds*) ikut meningkat**, yang pada akhirnya **meningkatkan suku bunga** di Meksiko.
*   Secara bersamaan, tingginya NCO berarti investor menukarkan peso mereka ke mata uang asing. Hal ini **meningkatkan penawaran (*supply*) peso di pasar valuta asing**, sehingga nilai peso jatuh (depresiasi).`;

tm12.blocks.forEach(block => {
  if (block.kind === 'ul') {
    block.items = block.items.map(item => {
      if (item.includes('Ketidakstabilan Politik & Capital Flight')) {
        return newCapitalFlightText;
      }
      return item;
    });
  }
});

const finalTm12String = JSON.stringify(tm12, null, 2);
const finalContent = text.substring(0, objStart) + finalTm12String + text.substring(objEnd);
fs.writeFileSync(filePath, finalContent);
console.log("Capital flight text expanded successfully.");
