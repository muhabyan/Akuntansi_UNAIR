const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'pte', 'ptePraUAS.ts');
let text = fs.readFileSync(filePath, 'utf-8');

const startIdx = text.indexOf('const tm12: Reading = {');
if (startIdx === -1) throw new Error("tm12 not found");

// Find the object bounds by counting braces
const objStart = text.indexOf('{', startIdx);
let open = 0;
let objEnd = -1;
let inString = false;
let escape = false;

for (let i = objStart; i < text.length; i++) {
  const char = text[i];
  if (inString) {
    if (escape) { escape = false; }
    else if (char === '\\') { escape = true; }
    else if (char === '"') { inString = false; }
  } else {
    if (char === '"') { inString = true; }
    else if (char === '{') { open++; }
    else if (char === '}') {
      open--;
      if (open === 0) {
        objEnd = i + 1;
        break;
      }
    }
  }
}

if (objEnd === -1) throw new Error("Could not parse object");

let tm12String = text.substring(objStart, objEnd);
let tm12;
try {
  tm12 = eval('(' + tm12String + ')');
} catch(e) {
  console.error("Eval failed", e);
  process.exit(1);
}

// Helper to make SVGs responsive
const applyResponsiveColors = (svg) => {
  return svg
    .replace(/fill="#e2e8f0"/g, 'fill="currentColor"')
    .replace(/fill="#94a3b8"/g, 'fill="currentColor"')
    .replace(/stroke="#64748b"/g, 'stroke="currentColor"')
    .replace(/stroke="#94a3b8"/g, 'stroke="currentColor"')
    // Adjust rects
    .replace(/width="160" height="60"/g, 'width="210" height="70"')
    .replace(/width="140" height="60"/g, 'width="200" height="70"');
};

// 1. Fix existing SVGs
tm12.blocks.forEach(block => {
  if (block.kind === 'figure' && block.svg) {
    block.svg = applyResponsiveColors(block.svg);
  }
});

// 2. Add Quota & Capital Flight Figures
// Find the index of "Efek Defisit Anggaran"
const deficitIdx = tm12.blocks.findIndex(b => b.title === 'Efek Defisit Anggaran terhadap Ekonomi Terbuka (Twin Deficits)');

if (deficitIdx !== -1) {
  // Construct Import Quota SVG
  const svgQuota = `<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" role="img">
<title>The Effects of an Import Quota</title>
<desc>Kuota impor mengurangi impor, sehingga demand valas naik. E naik, NX tetap.</desc>
<defs><marker id="arrowQ" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="currentColor"/></marker></defs>
<!-- Panel A -->
<text x="250" y="30" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">(a) The Market for Loanable Funds</text>
<line x1="80" y1="280" x2="420" y2="280" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowQ)"/>
<line x1="80" y1="280" x2="80" y2="60" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowQ)"/>
<line x1="130" y1="260" x2="350" y2="90" stroke="#3b82f6" stroke-width="2.5"/>
<line x1="130" y1="90" x2="350" y2="260" stroke="#3b82f6" stroke-width="2.5"/>
<text x="355" y="85" fill="#3b82f6" font-size="12">Supply</text>
<text x="355" y="265" fill="#3b82f6" font-size="12">Demand</text>
<circle cx="240" cy="175" r="4" fill="currentColor"/>
<line x1="80" y1="175" x2="480" y2="175" stroke="currentColor" stroke-width="1" stroke-dasharray="4"/>
<text x="65" y="180" fill="currentColor" font-size="12">r₁</text>
<!-- Panel B -->
<text x="700" y="30" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">(b) Net Capital Outflow</text>
<line x1="530" y1="280" x2="870" y2="280" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowQ)"/>
<line x1="530" y1="280" x2="530" y2="60" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowQ)"/>
<line x1="600" y1="90" x2="780" y2="260" stroke="#3b82f6" stroke-width="2.5"/>
<circle cx="690" cy="175" r="4" fill="currentColor"/>
<line x1="690" y1="175" x2="690" y2="520" stroke="currentColor" stroke-width="1" stroke-dasharray="4"/>
<text x="790" y="265" fill="#3b82f6" font-size="12">NCO</text>
<!-- Panel C -->
<text x="700" y="580" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">(c) The Market for Foreign-Currency Exchange</text>
<line x1="530" y1="520" x2="870" y2="520" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowQ)"/>
<line x1="530" y1="520" x2="530" y2="350" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowQ)"/>
<line x1="690" y1="360" x2="690" y2="520" stroke="#3b82f6" stroke-width="2.5"/>
<line x1="580" y1="380" x2="800" y2="490" stroke="#3b82f6" stroke-width="2.5"/>
<line x1="580" y1="350" x2="800" y2="460" stroke="#f43f5e" stroke-width="2.5"/>
<text x="700" y="370" fill="#3b82f6" font-size="12">Supply</text>
<text x="810" y="495" fill="#3b82f6" font-size="12">D₁</text>
<text x="810" y="465" fill="#f43f5e" font-size="12">D₂</text>
<path d="M 750 465 L 750 435" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrowQ)"/>
<circle cx="690" cy="435" r="4" fill="currentColor"/>
<circle cx="690" cy="405" r="4" fill="currentColor"/>
<line x1="530" y1="435" x2="690" y2="435" stroke="currentColor" stroke-width="1" stroke-dasharray="4"/>
<line x1="530" y1="405" x2="690" y2="405" stroke="currentColor" stroke-width="1" stroke-dasharray="4"/>
<text x="510" y="440" fill="currentColor" font-size="12">E₁</text>
<text x="510" y="410" fill="currentColor" font-size="12">E₂</text>

<rect x="540" y="200" width="160" height="40" fill="#1e293b" rx="4"/>
<text x="550" y="215" fill="#f8fafc" font-size="11">3. Net exports,</text>
<text x="550" y="230" fill="#f8fafc" font-size="11">however, remain the same.</text>

<rect x="730" y="360" width="160" height="40" fill="#1e293b" rx="4"/>
<text x="740" y="375" fill="#f8fafc" font-size="11">1. An import quota</text>
<text x="740" y="390" fill="#f8fafc" font-size="11">increases demand for dollars</text>

<rect x="420" y="450" width="150" height="40" fill="#1e293b" rx="4"/>
<text x="430" y="465" fill="#f8fafc" font-size="11">2. ... and causes real</text>
<text x="430" y="480" fill="#f8fafc" font-size="11">exchange rate to appreciate.</text>
</svg>`;

  const figQuota = {
    kind: "figure",
    title: "Efek Kebijakan Perdagangan (Import Quota)",
    caption: "Kuota impor menggeser kurva Demand valas ke kanan, menaikkan nilai tukar riil. Karena NCO (S dan I) tidak berubah, ekspor neto secara total tetap sama.",
    svg: svgQuota
  };

  const svgFlight = `<svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" role="img">
<title>The Effects of Capital Flight</title>
<desc>Capital flight meningkatkan NCO dan Demand for Loanable Funds. Suku bunga naik, E turun.</desc>
<defs><marker id="arrowF" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="currentColor"/></marker></defs>
<!-- Panel A -->
<text x="250" y="30" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">(a) The Market for Loanable Funds</text>
<line x1="80" y1="280" x2="420" y2="280" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowF)"/>
<line x1="80" y1="280" x2="80" y2="60" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowF)"/>
<line x1="130" y1="260" x2="350" y2="90" stroke="#3b82f6" stroke-width="2.5"/>
<line x1="130" y1="90" x2="350" y2="260" stroke="#3b82f6" stroke-width="2.5"/>
<line x1="170" y1="90" x2="390" y2="260" stroke="#f43f5e" stroke-width="2.5"/>
<text x="355" y="85" fill="#3b82f6" font-size="12">Supply</text>
<text x="355" y="265" fill="#3b82f6" font-size="12">D₁</text>
<text x="395" y="265" fill="#f43f5e" font-size="12">D₂</text>
<path d="M 280 205 L 320 205" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrowF)"/>
<circle cx="240" cy="175" r="4" fill="currentColor"/>
<circle cx="260" cy="160" r="4" fill="currentColor"/>
<line x1="80" y1="175" x2="690" y2="175" stroke="currentColor" stroke-width="1" stroke-dasharray="4"/>
<line x1="80" y1="160" x2="730" y2="160" stroke="currentColor" stroke-width="1" stroke-dasharray="4"/>
<text x="65" y="180" fill="currentColor" font-size="12">r₁</text>
<text x="65" y="165" fill="currentColor" font-size="12">r₂</text>

<!-- Panel B -->
<text x="700" y="30" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">(b) Net Capital Outflow</text>
<line x1="530" y1="280" x2="870" y2="280" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowF)"/>
<line x1="530" y1="280" x2="530" y2="60" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowF)"/>
<line x1="600" y1="90" x2="780" y2="260" stroke="#3b82f6" stroke-width="2.5"/>
<line x1="650" y1="90" x2="830" y2="260" stroke="#f43f5e" stroke-width="2.5"/>
<text x="790" y="265" fill="#3b82f6" font-size="12">NCO₁</text>
<text x="840" y="265" fill="#f43f5e" font-size="12">NCO₂</text>
<path d="M 660 130 L 700 130" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrowF)"/>
<circle cx="690" cy="175" r="4" fill="currentColor"/>
<circle cx="730" cy="160" r="4" fill="currentColor"/>
<line x1="690" y1="175" x2="690" y2="520" stroke="currentColor" stroke-width="1" stroke-dasharray="4"/>
<line x1="730" y1="160" x2="730" y2="520" stroke="currentColor" stroke-width="1" stroke-dasharray="4"/>

<!-- Panel C -->
<text x="700" y="580" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">(c) The Market for Foreign-Currency Exchange</text>
<line x1="530" y1="520" x2="870" y2="520" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowF)"/>
<line x1="530" y1="520" x2="530" y2="350" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowF)"/>
<line x1="690" y1="360" x2="690" y2="520" stroke="#3b82f6" stroke-width="2.5"/>
<line x1="730" y1="360" x2="730" y2="520" stroke="#f43f5e" stroke-width="2.5"/>
<text x="700" y="370" fill="#3b82f6" font-size="12">S₁</text>
<text x="740" y="370" fill="#f43f5e" font-size="12">S₂</text>
<path d="M 690 390 L 730 390" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrowF)"/>
<line x1="580" y1="380" x2="800" y2="490" stroke="#3b82f6" stroke-width="2.5"/>
<text x="810" y="495" fill="#3b82f6" font-size="12">Demand</text>
<circle cx="690" cy="435" r="4" fill="currentColor"/>
<circle cx="730" cy="455" r="4" fill="currentColor"/>
<line x1="530" y1="435" x2="690" y2="435" stroke="currentColor" stroke-width="1" stroke-dasharray="4"/>
<line x1="530" y1="455" x2="730" y2="455" stroke="currentColor" stroke-width="1" stroke-dasharray="4"/>
<text x="510" y="440" fill="currentColor" font-size="12">E₁</text>
<text x="510" y="460" fill="currentColor" font-size="12">E₂</text>

<rect x="740" y="90" width="150" height="40" fill="#1e293b" rx="4"/>
<text x="750" y="105" fill="#f8fafc" font-size="11">1. Increase in NCO...</text>

<rect x="80" y="400" width="130" height="40" fill="#1e293b" rx="4"/>
<text x="90" y="415" fill="#f8fafc" font-size="11">2. ...increases demand</text>
<text x="90" y="430" fill="#f8fafc" font-size="11">for loanable funds...</text>

<rect x="30" y="190" width="100" height="40" fill="#1e293b" rx="4"/>
<text x="40" y="205" fill="#f8fafc" font-size="11">3. ...which</text>
<text x="40" y="220" fill="#f8fafc" font-size="11">increases r.</text>

<rect x="740" y="380" width="150" height="40" fill="#1e293b" rx="4"/>
<text x="750" y="395" fill="#f8fafc" font-size="11">4. Increase in NCO</text>
<text x="750" y="410" fill="#f8fafc" font-size="11">increases supply of pesos</text>

<rect x="420" y="470" width="100" height="40" fill="#1e293b" rx="4"/>
<text x="430" y="485" fill="#f8fafc" font-size="11">5. ...which causes</text>
<text x="430" y="500" fill="#f8fafc" font-size="11">peso to depreciate.</text>
</svg>`;

  const figFlight = {
    kind: "figure",
    title: "Efek Ketidakstabilan Ekonomi (Capital Flight)",
    caption: "Capital flight membuat arus modal keluar (NCO) melonjak. Permintaan dana pinjaman naik, memicu suku bunga naik. Lonjakan NCO membanjiri pasar dengan mata uang domestik, sehingga nilai tukarnya terdepresiasi parah.",
    svg: svgFlight
  };

  tm12.blocks.splice(deficitIdx + 1, 0, figQuota, figFlight);
}

// 3. Update the rect text in existing deficit figure (make text break properly, or increase rect)
// We already replaced width="160" height="60" with width="210" height="70" inside applyResponsiveColors.
// We also need to fix text positions in deficit graph if necessary.
// Let's just fix the SVGs text nodes for the first graph manually
const fixRectTexts = (svg) => {
  return svg
    .replace('<text x="40" y="340" fill="currentColor" font-size="11">1. Defisit menggeser kurva S ke kiri, r naik.</text>',
             '<text x="40" y="340" fill="#f8fafc" font-size="11">1. Defisit menggeser S ke kiri,</text><text x="40" y="355" fill="#f8fafc" font-size="11">sehingga r naik.</text>')
    .replace('<text x="40" y="355" fill="currentColor" font-size="11">2. NCO merespons r naik (NCO turun).</text>',
             '<text x="40" y="375" fill="#f8fafc" font-size="11">2. NCO merespons r naik (turun).</text>')
    .replace('<text x="750" y="350" fill="currentColor" font-size="11">3. NCO turun = Supply valas turun.</text>',
             '<text x="750" y="350" fill="#f8fafc" font-size="11">3. NCO turun = Supply valas turun.</text>')
    .replace('<text x="750" y="365" fill="currentColor" font-size="11">4. E naik (Apresiasi).</text>',
             '<text x="750" y="365" fill="#f8fafc" font-size="11">4. E naik (Apresiasi).</text>');
};
tm12.blocks.forEach(block => {
  if (block.kind === 'figure' && block.title === 'Efek Defisit Anggaran terhadap Ekonomi Terbuka (Twin Deficits)' && block.svg) {
    block.svg = fixRectTexts(block.svg);
  }
});


const finalTm12String = JSON.stringify(tm12, null, 2);
const finalContent = text.substring(0, objStart) + finalTm12String + text.substring(objEnd);
fs.writeFileSync(filePath, finalContent);
console.log("SVGs updated successfully");
