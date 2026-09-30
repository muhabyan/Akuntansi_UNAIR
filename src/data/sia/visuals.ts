/** Small, original teaching diagrams. Labels are authored here rather than copied from the textbook. */
const xml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function processDiagram(title: string, steps: { name: string; detail: string }[], note: string): string {
  const width = 920;
  const boxWidth = (width - 80 - (steps.length - 1) * 32) / steps.length;
  const boxes = steps.map((step, index) => {
    const x = 40 + index * (boxWidth + 32);
    const tone = index % 2 ? '#ecfdf5' : '#eff6ff';
    return `<rect x="${x}" y="72" width="${boxWidth}" height="103" rx="14" fill="${tone}" stroke="#94a3b8"/>
      <text x="${x + 13}" y="102" fill="#0f172a" font-size="16" font-weight="700">${xml(step.name)}</text>
      <text x="${x + 13}" y="130" fill="#334155" font-size="13">${xml(step.detail)}</text>
      ${index < steps.length - 1 ? `<path d="M${x + boxWidth + 4} 123 h24" stroke="#0369a1" stroke-width="2.5" marker-end="url(#arrow)"/>` : ''}`;
  }).join('');
  return `<svg class="course-diagram-svg" viewBox="0 0 920 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,Arial,sans-serif">
    <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="none" stroke="#0369a1" stroke-width="1.5"/></marker></defs>
    <rect x="1" y="1" width="918" height="228" rx="18" fill="#fff" stroke="#cbd5e1"/>
    <text x="40" y="43" fill="#0f172a" font-size="20" font-weight="700">${xml(title)}</text>
    ${boxes}
    <text x="40" y="205" fill="#475569" font-size="13">${xml(note)}</text>
  </svg>`;
}

export const INFORMATION_SYSTEM = `<svg class="course-diagram-svg" viewBox="0 0 820 285" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,Arial,sans-serif">
  <defs><marker id="is-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="none" stroke="#0369a1" stroke-width="1.5"/></marker></defs>
  <rect x="1" y="1" width="818" height="283" rx="18" fill="#fff" stroke="#cbd5e1"/>
  <text x="30" y="40" fill="#0f172a" font-size="20" font-weight="700">SIA: peristiwa menjadi keputusan</text>
  <g stroke="#0369a1" stroke-width="2"><rect x="30" y="75" width="205" height="75" rx="12" fill="#eff6ff"/><rect x="305" y="75" width="205" height="75" rx="12" fill="#ecfdf5"/><rect x="580" y="75" width="205" height="75" rx="12" fill="#eff6ff"/></g>
  <g fill="#0f172a" font-size="17" font-weight="700"><text x="47" y="105">Input</text><text x="322" y="105">Processing</text><text x="597" y="105">Output</text></g>
  <g fill="#334155" font-size="13"><text x="47" y="129">Item, jumlah, harga</text><text x="322" y="129">Hitung dan validasi</text><text x="597" y="129">Laporan untuk manajer</text></g>
  <g stroke="#0369a1" stroke-width="2" marker-end="url(#is-arrow)"><path d="M239 112 H299"/><path d="M514 112 H574"/></g>
  <rect x="305" y="197" width="205" height="55" rx="12" fill="#fff7ed" stroke="#b45309" stroke-width="2"/>
  <text x="322" y="221" fill="#7c2d12" font-size="16" font-weight="700">Storage</text>
  <text x="322" y="239" fill="#7c2d12" font-size="13">Catatan POS dan stok</text>
  <path d="M389 153 V190 M426 193 V156" stroke="#0369a1" stroke-width="2" marker-end="url(#is-arrow)"/>
  <text x="30" y="273" fill="#475569" font-size="12">Storage menyimpan hasil dan menyediakan data untuk pemrosesan berikutnya.</text>
</svg>`;

export function reaDiagram(title: string, resourceIn: string, eventIn: string, eventOut: string, resourceOut: string, agent: string): string {
  return `<svg class="course-diagram-svg" viewBox="0 0 850 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,Arial,sans-serif">
    <rect x="1" y="1" width="848" height="288" rx="18" fill="#fff" stroke="#cbd5e1"/>
    <text x="28" y="40" fill="#0f172a" font-size="20" font-weight="700">${xml(title)}</text>
    <g stroke-width="2"><rect x="30" y="83" width="180" height="70" rx="12" fill="#eff6ff" stroke="#0369a1"/><rect x="240" y="83" width="180" height="70" rx="12" fill="#ecfdf5" stroke="#047857"/><rect x="450" y="83" width="180" height="70" rx="12" fill="#ecfdf5" stroke="#047857"/><rect x="660" y="83" width="160" height="70" rx="12" fill="#eff6ff" stroke="#0369a1"/></g>
    <g fill="#0f172a" font-size="15" font-weight="700"><text x="45" y="112">${xml(resourceIn)}</text><text x="255" y="112">${xml(eventIn)}</text><text x="465" y="112">${xml(eventOut)}</text><text x="675" y="112">${xml(resourceOut)}</text></g>
    <g fill="#475569" font-size="12"><text x="45" y="136">Resource</text><text x="255" y="136">Event</text><text x="465" y="136">Event</text><text x="675" y="136">Resource</text></g>
    <g fill="none" stroke="#64748b" stroke-width="2"><path d="M210 118 H240"/><path d="M420 118 H450"/><path d="M630 118 H660"/><path d="M330 153 V205 H540 V153"/></g>
    <text x="435" y="191" text-anchor="middle" fill="#475569" font-size="13">duality: dua sisi pertukaran ekonomi</text>
    <rect x="287" y="224" width="276" height="42" rx="12" fill="#fff7ed" stroke="#b45309"/>
    <path d="M287 245 H224 V132 H240 M563 245 H646 V132 H630" fill="none" stroke="#b45309" stroke-width="1.5"/>
    <text x="425" y="251" text-anchor="middle" fill="#7c2d12" font-size="14" font-weight="700">Agent eksternal: ${xml(agent)}</text>
    <text x="28" y="283" fill="#475569" font-size="12">Skema konsep REA; asosiasi dan multiplicity lengkap dijelaskan pada tabel materi.</text>
  </svg>`;
}

export const SALES_DFD = `<svg class="course-diagram-svg" viewBox="0 0 920 555" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,Arial,sans-serif">
  <defs><marker id="dfd-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="none" stroke="#0369a1" stroke-width="1.5"/></marker></defs>
  <rect x="1" y="1" width="918" height="553" rx="18" fill="#fff" stroke="#cbd5e1"/>
  <text x="30" y="38" fill="#0f172a" font-size="20" font-weight="700">DFD pesanan: context dan level 0</text>
  <text x="30" y="68" fill="#475569" font-size="14">CONTEXT DIAGRAM · satu proses mewakili seluruh sistem</text>
  <rect x="45" y="110" width="165" height="64" rx="4" fill="#fff7ed" stroke="#b45309" stroke-width="2"/>
  <text x="127" y="148" text-anchor="middle" fill="#7c2d12" font-size="17" font-weight="700">Customer</text>
  <circle cx="465" cy="142" r="74" fill="#eff6ff" stroke="#0369a1" stroke-width="2"/>
  <text x="465" y="135" text-anchor="middle" fill="#0f172a" font-size="16" font-weight="700">0</text>
  <text x="465" y="157" text-anchor="middle" fill="#0f172a" font-size="15">Process Order</text>
  <path d="M210 124 H385" fill="none" stroke="#0369a1" stroke-width="2" marker-end="url(#dfd-arrow)"/>
  <text x="295" y="112" text-anchor="middle" fill="#334155" font-size="13">Order Details</text>
  <path d="M390 167 H220" fill="none" stroke="#0369a1" stroke-width="2" marker-end="url(#dfd-arrow)"/>
  <text x="305" y="192" text-anchor="middle" fill="#334155" font-size="13">Order Confirmation</text>
  <path d="M465 216 v30" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5"/>
  <text x="485" y="235" fill="#475569" font-size="13">dekomposisi, aliran eksternal tetap sama</text>
  <text x="30" y="283" fill="#475569" font-size="14">LEVEL-0 DFD · proses dipecah, data store menjadi terlihat</text>
  <rect x="45" y="352" width="150" height="62" rx="4" fill="#fff7ed" stroke="#b45309" stroke-width="2"/>
  <text x="120" y="389" text-anchor="middle" fill="#7c2d12" font-size="16" font-weight="700">Customer</text>
  <circle cx="382" cy="383" r="65" fill="#eff6ff" stroke="#0369a1" stroke-width="2"/>
  <text x="382" y="378" text-anchor="middle" fill="#0f172a" font-size="16" font-weight="700">1.0</text>
  <text x="382" y="399" text-anchor="middle" fill="#0f172a" font-size="14">Validate Order</text>
  <circle cx="696" cy="383" r="65" fill="#ecfdf5" stroke="#047857" stroke-width="2"/>
  <text x="696" y="378" text-anchor="middle" fill="#0f172a" font-size="16" font-weight="700">2.0</text>
  <text x="696" y="399" text-anchor="middle" fill="#0f172a" font-size="14">Confirm Order</text>
  <path d="M195 361 H310" fill="none" stroke="#0369a1" stroke-width="2" marker-end="url(#dfd-arrow)"/>
  <text x="255" y="345" text-anchor="middle" fill="#334155" font-size="13">Order Details</text>
  <path d="M447 383 H625" fill="none" stroke="#0369a1" stroke-width="2" marker-end="url(#dfd-arrow)"/>
  <text x="535" y="369" text-anchor="middle" fill="#334155" font-size="13">Validated Order</text>
  <path d="M696 318 V307 H120 V345" fill="none" stroke="#0369a1" stroke-width="2" marker-end="url(#dfd-arrow)"/>
  <text x="505" y="302" text-anchor="middle" fill="#334155" font-size="13">Order Confirmation</text>
  <path d="M320 503 h175 M320 542 h175" fill="none" stroke="#64748b" stroke-width="2"/>
  <text x="407" y="529" text-anchor="middle" fill="#334155" font-size="13">D1 · Customer Master</text>
  <path d="M345 445 v52" fill="none" stroke="#0369a1" stroke-width="2" marker-end="url(#dfd-arrow)"/>
  <text x="220" y="480" fill="#334155" font-size="12">Customer Query</text>
  <path d="M465 498 V458 H419" fill="none" stroke="#0369a1" stroke-width="2" marker-end="url(#dfd-arrow)"/>
  <text x="500" y="477" fill="#334155" font-size="12">Customer Record</text>
</svg>`;

export const RELATION_DIAGRAM = `<svg class="course-diagram-svg" viewBox="0 0 800 255" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,Arial,sans-serif">
  <rect x="1" y="1" width="798" height="253" rx="18" fill="#fff" stroke="#cbd5e1"/>
  <text x="28" y="38" fill="#0f172a" font-size="20" font-weight="700">M:N menjadi dua hubungan 1:N</text>
  <g fill="#eff6ff" stroke="#0369a1" stroke-width="2"><rect x="28" y="82" width="215" height="110" rx="12"/><rect x="556" y="82" width="215" height="110" rx="12"/></g>
  <rect x="288" y="82" width="225" height="110" rx="12" fill="#ecfdf5" stroke="#047857" stroke-width="2"/>
  <g fill="#0f172a" font-size="16" font-weight="700"><text x="47" y="112">Sales_Order</text><text x="307" y="112">Order_Lines</text><text x="575" y="112">Inventory</text></g>
  <g fill="#334155" font-size="13"><text x="47" y="142">PK Order_ID</text><text x="307" y="142">PK/FK Order_ID</text><text x="307" y="163">PK/FK Product_ID</text><text x="575" y="142">PK Product_ID</text></g>
  <path d="M243 135 H288 M513 135 H556" stroke="#0369a1" stroke-width="2"/>
  <text x="255" y="78" fill="#334155" font-size="13">1:N</text><text x="525" y="78" fill="#334155" font-size="13">N:1</text>
  <text x="28" y="225" fill="#475569" font-size="14">Quantity dan Unit_Price milik baris pesanan, disimpan di Order_Lines.</text>
</svg>`;

export const THREE_WAY_DIAGRAM = `<svg class="course-diagram-svg" viewBox="0 0 850 350" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,Arial,sans-serif">
  <defs><marker id="match-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="none" stroke="#0369a1" stroke-width="1.5"/></marker></defs>
  <rect x="1" y="1" width="848" height="348" rx="18" fill="#fff" stroke="#cbd5e1"/>
  <text x="28" y="39" fill="#0f172a" font-size="20" font-weight="700">Three-Way Match sebelum pembayaran</text>
  <g fill="#eff6ff" stroke="#0369a1" stroke-width="2"><rect x="30" y="80" width="215" height="65" rx="12"/><rect x="30" y="166" width="215" height="65" rx="12"/><rect x="30" y="252" width="215" height="65" rx="12"/></g>
  <g fill="#0f172a" font-size="16" font-weight="700"><text x="48" y="108">Purchase Order</text><text x="48" y="194">Receiving Report</text><text x="48" y="280">Vendor Invoice</text></g>
  <g fill="#475569" font-size="13"><text x="48" y="128">Izin beli, jumlah, harga</text><text x="48" y="214">Jumlah fisik diterima</text><text x="48" y="300">Jumlah dan harga ditagih</text></g>
  <g fill="none" stroke="#0369a1" stroke-width="2" marker-end="url(#match-arrow)"><path d="M245 112 H352 V192 H392"/><path d="M245 199 H392"/><path d="M245 285 H352 V207 H392"/></g>
  <rect x="395" y="156" width="200" height="88" rx="16" fill="#ecfdf5" stroke="#047857" stroke-width="2"/>
  <text x="495" y="189" text-anchor="middle" fill="#064e3b" font-size="17" font-weight="700">Accounts Payable</text>
  <text x="495" y="216" text-anchor="middle" fill="#064e3b" font-size="14">cocokkan 3 dokumen</text>
  <path d="M595 199 H635" stroke="#0369a1" stroke-width="2" marker-end="url(#match-arrow)"/>
  <rect x="640" y="153" width="178" height="94" rx="14" fill="#fff7ed" stroke="#b45309" stroke-width="2"/>
  <text x="659" y="184" fill="#7c2d12" font-size="15" font-weight="700">Cocok: setujui</text>
  <text x="659" y="209" fill="#7c2d12" font-size="15" font-weight="700">Selisih: tahan</text>
  <text x="30" y="337" fill="#475569" font-size="12">Kasus latihan TM7: PO 100 unit @ $25, diterima 80 unit, ditagih 100 unit @ $27 → tahan invoice.</text>
</svg>`;
