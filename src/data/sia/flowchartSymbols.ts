/** Introductory system/document flowchart symbols used in this lesson. */
const symbols = [
  { name: 'Document', description: 'Bukti dengan dasar bergelombang', path: '<path d="M38 25 H94 V73 Q80 66 66 73 Q52 80 38 73 Z" fill="#eff6ff" stroke="#0369a1" stroke-width="2"/>' },
  { name: 'Manual Operation', description: 'Pekerjaan yang dilakukan manual', path: '<path d="M34 27 H98 L88 75 H44 Z" fill="#ecfdf5" stroke="#047857" stroke-width="2"/>' },
  { name: 'Computer Processing', description: 'Pengolahan oleh sistem', path: '<rect x="36" y="27" width="60" height="48" fill="#eff6ff" stroke="#0369a1" stroke-width="2"/>' },
  { name: 'Off-Page Connector', description: 'Lanjut ke halaman lain', path: '<path d="M39 25 H93 V59 L66 78 L39 59 Z" fill="#fff7ed" stroke="#b45309" stroke-width="2"/>' },
  { name: 'On-Page Connector', description: 'Sambung alur di halaman sama', path: '<circle cx="66" cy="51" r="26" fill="#fff7ed" stroke="#b45309" stroke-width="2"/><text x="66" y="57" text-anchor="middle" font-size="17" font-weight="700" fill="#7c2d12">A</text>' },
  { name: 'File / Storage', description: 'Arsip menurut kode N, A, atau C', path: '<path d="M35 27 H97 L66 79 Z" fill="#eff6ff" stroke="#0369a1" stroke-width="2"/><text x="66" y="55" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">N</text>' },
];

function renderSymbols(mobile: boolean): string {
  const width = mobile ? 360 : 960;
  const height = mobile ? 687 : 440;
  const tileWidth = mobile ? 336 : 446;
  const tileHeight = mobile ? 96 : 108;
  const tiles = symbols.map((symbol, index) => {
    const x = mobile ? 12 : 24 + index % 2 * 466;
    const y = mobile ? 49 + index * 103 : 65 + Math.floor(index / 2) * 120;
    const iconY = mobile ? -1 : 4;
    const fontSize = symbol.name === 'Computer Processing' && mobile ? 14 : mobile ? 15 : 16;
    return `<g transform="translate(${x} ${y})">
      <rect x="0" y="0" width="${tileWidth}" height="${tileHeight}" rx="13" fill="#f8fafc" stroke="#cbd5e1"/>
      <g transform="translate(0 ${iconY})">${symbol.path}</g>
      <text x="119" y="${mobile ? 39 : 48}" fill="#0f172a" font-size="${fontSize}" font-weight="700">${symbol.name}</text>
      <text x="119" y="${mobile ? 64 : 74}" fill="#475569" font-size="12">${symbol.description}</text>
    </g>`;
  }).join('');
  return `<svg class="course-diagram-svg" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,Arial,sans-serif">
    <rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="16" fill="#fff" stroke="#cbd5e1"/>
    <text x="${mobile ? 16 : 28}" y="${mobile ? 31 : 39}" fill="#0f172a" font-size="${mobile ? 18 : 20}" font-weight="700">${mobile ? 'Simbol flowchart' : 'Simbol flowchart punya fungsi berbeda'}</text>
    ${tiles}
    <text x="${mobile ? 16 : 28}" y="${height - 13}" fill="#475569" font-size="${mobile ? 10 : 12}">Baca bentuk lalu ikuti arah aliran dokumen dan proses.</text>
  </svg>`;
}

export const FLOWCHART_SYMBOLS = renderSymbols(false);
export const FLOWCHART_SYMBOLS_MOBILE = renderSymbols(true);
