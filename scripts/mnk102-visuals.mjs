// Figures are derived from the visual specifications in each canonical 05 file.
// Numeric series are source data, never interpolated estimates of missing book data.
const xml = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const palette = ['var(--svg-accent, #2563eb)', 'var(--svg-success, #16a34a)', 'var(--svg-warning, #d97706)'];
const text = (x, y, label, size = 14, anchor = 'start') => `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" class="svg-text">${xml(label)}</text>`;
const line = (x1, y1, x2, y2, color = 'var(--svg-muted, #64748b)', extra = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" ${extra}/>`;
const wrap = (value, length = 44) => {
  const rows = [''];
  for (const word of value.split(/\s+/)) {
    if (rows.at(-1).length + word.length > length) rows.push(word);
    else rows[rows.length - 1] += (rows.at(-1) ? ' ' : '') + word;
  }
  return rows;
};
function chart(panel, top) {
  if (panel.schematicDistribution) {
    return text(45, top + 25, panel.title, 17) + text(80, top + 60, 'Probabilitas (skema)', 13)
      + line(80, top + 210, 580, top + 210)
      + `<path d="M90 ${top + 200} C170 ${top + 190} 235 ${top + 70} 335 ${top + 70} S490 ${top + 190} 570 ${top + 200}" fill="none" stroke="${palette[0]}" stroke-width="3"/>`
      + [205, 335, 465].map((x, i) => line(x, top + 95 + (i === 1 ? -25 : 15), x, top + 210, palette[2], 'stroke-dasharray="4 4"') + text(x, top + 235, ['−3,9%', '9,0%', '22%'][i], 13, 'middle')).join('')
      + text(335, top + 265, 'ROIC: rata-rata dan rata-rata ± 1 simpangan baku', 13, 'middle');
  }
  const xmin = panel.xmin ?? 0, xmax = panel.xmax, ymin = panel.ymin ?? 0, ymax = panel.ymax;
  if (!(xmax > xmin && ymax > ymin)) throw new Error('Invalid chart range');
  const X = x => 90 + (x - xmin) / (xmax - xmin) * 490;
  const Y = y => top + 205 - (y - ymin) / (ymax - ymin) * 140;
  let svg = text(45, top + 24, panel.title, 17) + text(45, top + 48, panel.ylabel, 13);
  svg += line(90, top + 65, 90, top + 205) + line(90, Y(Math.max(0, ymin)), 580, Y(Math.max(0, ymin)));
  const ticks = panel.xticks ?? [xmin, xmax];
  for (const x of ticks) svg += text(X(x), top + 227, String(x), 12, 'middle');
  for (const y of panel.yticks ?? [ymin, ymax]) svg += text(82, Y(y) + 4, String(y), 12, 'end');
  svg += text(340, top + 250, panel.xlabel, 13, 'middle');
  panel.series.forEach((series, index) => {
    if (!series.points.length || series.points.some(p => p.some(n => !Number.isFinite(n)))) throw new Error('Invalid source series');
    svg += `<polyline points="${series.points.map(([x, y]) => `${X(x)},${Y(y)}`).join(' ')}" fill="none" stroke="${palette[index % 3]}" stroke-width="3"/>`;
    for (const [x, y] of series.points) svg += `<circle cx="${X(x)}" cy="${Y(y)}" r="3" fill="${palette[index % 3]}"/>`;
    svg += text(90, top + 275 + index * 21, series.label, 13);
  });
  return svg;
}
function schematic(kind, labels) {
  let svg = '';
  if (kind === 'investment') {
    svg = text(80, 30, 'Aset lancar (tingkat relatif pada grafik)', 15)
      + line(80, 300, 80, 55) + line(80, 300, 570, 300) + text(330, 330, 'Penjualan', 15, 'middle');
    [75, 145, 215].forEach((y, i) => {
      svg += line(80, 280, 530, y, palette[i], 'stroke-width="3"') + text(350, y + 25, ['Relaxed: longgar', 'Moderate: sedang', 'Restricted: ketat'][i], 14);
    });
    svg += text(80, 380, 'Penataan ulang Figure 16.1; hubungan ilustratif, tanpa estimasi saldo.', 13);
    return { svg, height: 410 };
  }
  if (kind === 'maturity') {
    ['Moderate: maturity matching', 'Aggressive: relatif agresif', 'Conservative: konservatif'].forEach((title, i) => {
      const y = i * 360;
      svg += text(60, y + 25, title, 18) + line(75, y + 275, 75, y + 60) + line(75, y + 275, 540, y + 275);
      svg += `<path d="M80 ${y + 230} L535 ${y + 200} L535 ${y + 275} L80 ${y + 275}Z" fill="${palette[0]}" fill-opacity="0.16"/>`;
      svg += `<path d="M80 ${y + 185} L535 ${y + 130} L535 ${y + 200} L80 ${y + 230}Z" fill="${palette[1]}" fill-opacity="0.16"/>`;
      svg += `<path d="M80 ${y + 185} C110 ${y + 110} 140 ${y + 180} 175 ${y + 160} S205 ${y + 70} 250 ${y + 125} S300 ${y + 90} 345 ${y + 105} S410 ${y + 30} 460 ${y + 85} S490 ${y + 90} 535 ${y + 60} L535 ${y + 130} L80 ${y + 185}Z" fill="${palette[2]}" fill-opacity="0.20" stroke="${palette[2]}"/>`;
      svg += line(80, y + 230, 535, y + 200, palette[0]) + line(80, y + 185, 535, y + 130, palette[1]);
      svg += line(80, y + [185, 225, 160][i], 535, y + [130, 175, 105][i], 'var(--svg-text,#0f172a)', 'stroke-width="2" stroke-dasharray="6 5"');
      svg += text(100, y + 255, 'Aset tetap', 13) + text(100, y + 218, 'Aset lancar permanen', 13) + text(100, y + 75, 'Aset lancar sementara', 13);
      svg += text(75, y + 300, 'Waktu; garis putus-putus = dana panjang + kewajiban spontan', 13);
      svg += text(75, y + 325, i === 2 ? 'Surplus dana saat aset berada di bawah garis ditempatkan di sekuritas.' : 'Dana pendek membiayai kebutuhan di atas garis putus-putus.', 13);
    });
    return { svg, height: 1080 };
  }
  if (kind === 'tradeoff') {
    svg += line(80, 300, 580, 300) + line(80, 300, 80, 45);
    svg += text(85, 32, 'Nilai saham') + text(580, 330, 'Debt/Capital: utang/modal', 14, 'end');
    svg += line(80, 210, 580, 210, palette[2], 'stroke-dasharray="5 4"');
    svg += line(80, 210, 580, 70, palette[0]);
    svg += `<path d="M80 210 Q240 167 350 143 Q420 130 580 260" fill="none" stroke="${palette[1]}" stroke-width="3"/>`;
    svg += line(240, 100, 240, 300, palette[2], 'stroke-dasharray="5 4"') + line(365, 135, 365, 300, palette[1], 'stroke-dasharray="5 4"');
    svg += text(240, 320, 'D1', 13, 'middle') + text(365, 320, 'D2', 13, 'middle');
    ['Tanpa utang: nilai dasar', 'MM + pajak: manfaat perisai bunga', 'Aktual: manfaat dikurangi biaya distress', 'D1: biaya distress mulai berarti; D2: struktur optimal'].forEach((s, i) => svg += text(80, 368 + 25 * i, s, 14));
    return { svg, height: 475 };
  }
  labels.forEach((label, i) => {
    const y = 25 + i * 100;
    svg += `<rect x="60" y="${y}" width="550" height="75" rx="10" class="svg-card" stroke="var(--svg-muted, #64748b)"/>`;
    wrap(label).forEach((row, j) => svg += text(83, y + 27 + j * 20, row, 15));
    if (i < labels.length - 1 && kind === 'flow') svg += line(335, y + 76, 335, y + 97, palette[0], 'marker-end="url(#arrow)"');
  });
  if (kind === 'map') {
    svg += line(35, 55, 35, 55 + (labels.length - 1) * 100, palette[0]);
    labels.forEach((_, i) => svg += line(35, 55 + i * 100, 60, 55 + i * 100, palette[0]));
  }
  return { svg, height: Math.max(150, labels.length * 100 + 30) };
}
export function buildFinanceFigure(spec) {
  for (const key of ['id', 'jenis', 'judul', 'sumber', 'isi', 'hubungan', 'pesan utama', 'versi HP', 'alt text']) {
    if (!spec[key]) throw new Error(`Visual ${spec.id ?? '?'} missing ${key}`);
  }
  // A structured list preserves semicolons within a node, such as one financing policy.
  const labels = spec.isi.startsWith('[') ? JSON.parse(spec.isi) : spec.isi.split(';').map(s => s.trim()).filter(Boolean);
  if (!Array.isArray(labels) || !labels.every(s => typeof s === 'string' && s.trim())) throw new Error('Invalid visual nodes');
  const data = spec.data ? JSON.parse(spec.data) : null;
  const panels = data?.panels;
  let body, height;
  if (panels) {
    height = panels.length * 350 + 20;
    body = panels.map((p, i) => chart(p, i * 350)).join('');
  } else ({ svg: body, height } = schematic(spec.jenis, labels));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 ${height}" role="img" aria-label="${xml(spec['alt text'])}"><style>.svg-bg{fill:var(--svg-bg,#f8fafc)}.svg-card{fill:var(--svg-card,#fff)}.svg-text{fill:var(--svg-text,#0f172a);font-family:system-ui,sans-serif}</style><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="var(--svg-accent,#2563eb)"/></marker></defs><rect width="670" height="${height}" class="svg-bg"/>${body}</svg>`;
  return {
    kind: 'figure', title: spec.judul, svg, caption: spec.sumber,
    altText: spec['alt text'],
    overview: {
      heading: spec.judul,
      cards: labels.map(label => ({ title: label, subtitle: '', items: [], takeaway: '' })),
      footer: `${spec.hubungan}. ${spec['pesan utama']}`,
    },
    ...(spec.jenis === 'flow' ? { mobileFlow: { mode: 'cards', title: spec.judul, stages: labels.map(label => ({ actor: label, actions: [] })) } } : {}),
  };
}
