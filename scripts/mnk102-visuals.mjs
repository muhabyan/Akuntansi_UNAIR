// Figures are derived from the visual specifications in each canonical 05 file.
// Numeric series are source data, never interpolated estimates of missing book data.
const xml = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const themeStyle = `<style>.finance-svg{--svg-bg:#f8fafc;--svg-card:#fff;--svg-text:#0f172a;--svg-muted:#64748b;--svg-accent:#2563eb;--svg-success:#15803d;--svg-warning:#b45309}.dark .finance-svg{--svg-bg:#17212b;--svg-card:#1e293b;--svg-text:#e5e7eb;--svg-muted:#94a3b8;--svg-accent:#60a5fa;--svg-success:#34d399;--svg-warning:#fbbf24}.finance-svg .svg-bg{fill:var(--svg-bg)}.finance-svg .svg-card{fill:var(--svg-card)}.finance-svg .svg-text{fill:var(--svg-text);font-family:system-ui,sans-serif}</style>`;
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
function chart(panel, top, mobile = false) {
  if (panel.schematicDistribution) {
    return text(45, top + 25, panel.title, 17) + text(80, top + 60, 'Probabilitas (skema)', 13)
      + line(80, top + 210, 580, top + 210)
      + `<path d="M90 ${top + 200} C170 ${top + 190} 235 ${top + 70} 335 ${top + 70} S490 ${top + 190} 570 ${top + 200}" fill="none" stroke="${palette[0]}" stroke-width="3"/>`
      + [205, 335, 465].map((x, i) => line(x, top + 95 + (i === 1 ? -25 : 15), x, top + 210, palette[2], 'stroke-dasharray="4 4"') + text(x, top + 235, ['−3,9%', '9,0%', '22%'][i], 13, 'middle')).join('')
      + text(335, top + 265, 'ROIC: rata-rata dan rata-rata ± 1 simpangan baku', 13, 'middle');
  }
  const xmin = panel.xmin ?? 0, xmax = panel.xmax, ymin = panel.ymin ?? 0, ymax = panel.ymax;
  if (!(xmax > xmin && ymax > ymin)) throw new Error('Invalid chart range');
  const yTicks = panel.yticks ?? [...new Set([ymin, Math.max(0,ymin), (ymin+ymax)/2, ymax])];
  const yLabelChars = Math.max(...yTicks.map(y=>String(Number(y.toFixed(3))).length));
  const left = mobile ? Math.max(58,Math.ceil(yLabelChars*16*.7+16)) : 90, right = mobile ? 335 : 580;
  const base = top + (mobile ? 290 : 245), plotTop = top + (mobile ? 110 : 90);
  const size = mobile ? 16 : 15;
  const X = x => left + (x - xmin) / (xmax - xmin) * (right - left);
  const Y = y => base - (y - ymin) / (ymax - ymin) * (base - plotTop);
  let svg = wrap(panel.title, mobile ? 32 : 65).map((s,i)=>text(mobile ? 16 : 45, top + 25 + i*23,s, mobile ? 18 : 19)).join('');
  svg += text(mobile ? 16 : 45, plotTop - 16, panel.ylabel, size);
  svg += line(left, plotTop, left, base) + line(left, base, right, base);
  const zero = Math.max(0, ymin);
  if (zero !== ymin) svg += line(left,Y(zero),right,Y(zero),'var(--svg-muted,#64748b)','stroke-dasharray="4 4"');
  let ticks = panel.xticks ?? [xmin, (xmin+xmax)/2, xmax];
  if (mobile && ticks.length>5) ticks = ticks.filter((_,i)=>i%2===0 || i===ticks.length-1);
  for (const x of ticks) svg += line(X(x),base,X(x),base+5) + text(X(x),base+23,String(x),size,'middle');
  for (const y of yTicks) svg += text(left-8,Y(y)+5,String(Number(y.toFixed(3))),size,'end');
  svg += wrap(panel.xlabel,mobile?32:62).map((s,i)=>text((left+right)/2,base+48+i*21,s,size,'middle')).join('');
  let legendY = base + 80;
  panel.series.forEach((series, index) => {
    if (!series.points.length || series.points.some(p => p.some(n => !Number.isFinite(n)))) throw new Error('Invalid source series');
    const dash = ['','stroke-dasharray="8 5"','stroke-dasharray="2 5"'][index%3];
    if (panel.discrete) {
      series.points.forEach(([x,y])=>{ svg += line(X(x),Y(zero),X(x),Y(y),palette[index%3],`stroke-width="2" ${dash}`); });
    } else svg += `<polyline points="${series.points.map(([x, y]) => `${X(x)},${Y(y)}`).join(' ')}" fill="none" stroke="${palette[index % 3]}" stroke-width="3" ${dash}/>`;
    for (const [x, y] of series.points) svg += `<circle cx="${X(x)}" cy="${Y(y)}" r="3" fill="${palette[index % 3]}"/>`;
    svg += line(mobile?18:65,legendY-5,mobile?44:95,legendY-5,palette[index%3],`stroke-width="3" ${dash}`);
    const rows=wrap(series.label,mobile?30:58);
    rows.forEach((s,i)=>{ svg += text(mobile?52:105,legendY+i*21,s,size); });
    legendY += rows.length*21+9;
  });
  for (const [index, a] of (panel.markers ?? []).entries()) {
    if(a.x<xmin || a.x>xmax || a.y<ymin || a.y>ymax) throw new Error('Marker outside axes');
    svg += line(X(a.x),base,X(a.x),Y(a.y),palette[2],'stroke-dasharray="5 4"');
    svg += `<circle cx="${X(a.x)}" cy="${Y(a.y)}" r="5" fill="var(--svg-bg,#f8fafc)" stroke="${palette[2]}" stroke-width="3"/>`;
    wrap(a.label,mobile?38:68).forEach((s,i)=>{ svg+=text(mobile?16:65,legendY+index*48+i*21,s,size); });
  }
  return svg;
}
const panelHeight = (p,mobile) => (mobile?400:355) + p.series.length*40 + (p.markers?.length??0)*48;
function mobileSchematic(kind) {
  const T=(x,y,s,anchor='start')=>text(x,y,s,16,anchor);
  let body='',height=530;
  if(kind==='tradeoff') {
    body=T(16,25,'Nilai saham (tingkat skematis)')+line(45,270,335,270)+line(45,270,45,55)
      +line(45,205,335,205,palette[2],'stroke-dasharray="5 4"')
      +line(45,205,335,75,palette[0],'stroke-width="3"')
      +`<path d="M45 205 L135 164.66 Q173 147.63 211 147.63 C247 147.63 293 182 335 235" fill="none" stroke="${palette[1]}" stroke-width="3" stroke-dasharray="8 4"/>`
      +line(135,164.66,135,270,palette[2],'stroke-dasharray="5 4"')+line(211,147.63,211,270,palette[1],'stroke-dasharray="5 4"')
      +T(135,293,'D1','middle')+T(211,293,'D2','middle')+T(180,323,'Utang/modal (tanpa skala angka)','middle');
    ['Nilai dasar tanpa utang','MM + pajak: tanpa biaya distress','Trade-off: manfaat dikurangi distress'].forEach((s,i)=>{
      body+=line(16,353+i*34,40,353+i*34,palette[[2,0,1][i]],`stroke-width="3" ${i===2?'stroke-dasharray="8 4"':''}`);
      wrap(s,29).forEach((row,j)=>{body+=T(48,358+i*34+j*20,row);});
    });
    body+=T(16,477,'D1: biaya mulai material')+T(16,505,'D2: puncak, manfaat marginal = biaya');
  } else if(kind==='investment') {
    body=T(16,25,'Aset lancar (tingkat skematis)')+line(45,290,335,290)+line(45,290,45,65)+T(185,323,'Penjualan (tingkat relatif)','middle');
    [90,155,220].forEach((y,i)=>{body+=line(45,270,335,y,palette[i],'stroke-width="3"');});
    ['Relaxed: saldo lebih besar','Moderate: saldo tengah','Restricted: saldo lebih kecil'].forEach((s,i)=>{body+=line(16,355+i*35,40,355+i*35,palette[i],'stroke-width="3"')+T(48,360+i*35,s);});
    body+=T(16,480,'Bandingkan pada penjualan sama.');height=510;
  } else if(kind==='maturity') {
    const titles=['Moderate: tenor sepadan','Aggressive: dana pendek bertambah','Conservative: dana panjang bertambah'];
    height=3*450;
    titles.forEach((title,i)=>{
      const y=i*450;
      wrap(title,32).forEach((s,j)=>{body+=T(16,y+28+j*22,s);});
      body+=T(16,y+83,'Kebutuhan aset (tingkat skematis)')+line(45,y+295,45,y+105)+line(45,y+295,335,y+295);
      body+=`<path d="M45 ${y+235} L335 ${y+215} L335 ${y+295} L45 ${y+295}Z" fill="${palette[0]}" fill-opacity=".18"/>`;
      body+=`<path d="M45 ${y+195} L335 ${y+140} L335 ${y+215} L45 ${y+235}Z" fill="${palette[1]}" fill-opacity=".2"/>`;
      body+=`<path d="M45 ${y+195} Q80 ${y+120} 105 ${y+183} T175 ${y+146} T245 ${y+112} T335 ${y+115}" fill="none" stroke="${palette[2]}" stroke-width="3"/>`;
      const start=[195,228,170][i],end=[140,190,115][i];
      body+=line(45,y+start,335,y+end,'var(--svg-text,#0f172a)','stroke-width="3" stroke-dasharray="7 5"')+T(190,y+320,'Waktu (tanpa skala angka)','middle');
      ['Biru: aset tetap','Hijau: aset lancar permanen','Oranye: aset sementara','Putus-putus: dana panjang + spontan'].forEach((s,j)=>{body+=T(16,y+350+j*23,s);});
    });
  } else return undefined;
  return `<svg class="finance-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 ${height}" role="img" aria-label="Grafik skematis ${xml(kind)}">${themeStyle}<rect width="360" height="${height}" fill="var(--svg-bg,#f8fafc)"/>${body}</svg>`;
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
    // Coincides with the tax-only line through D1. Horizontal tangent at D2.
    svg += `<path d="M80 210 L240 165.2 Q302.5 147.7 365 147.7 C435 147.7 505 190 580 260" fill="none" stroke="${palette[1]}" stroke-width="3" stroke-dasharray="8 4"/>`;
    svg += line(240, 165.2, 240, 300, palette[2], 'stroke-dasharray="5 4"') + line(365, 147.7, 365, 300, palette[1], 'stroke-dasharray="5 4"');
    svg += text(240, 320, 'D1', 15, 'middle') + text(365, 320, 'D2', 15, 'middle');
    ['Tanpa utang: nilai dasar', 'MM + pajak: manfaat perisai bunga', 'Trade-off: manfaat dikurangi biaya distress'].forEach((s, i) => {
      svg += line(70,360+i*28,100,360+i*28,palette[[2,0,1][i]],`stroke-width="3" ${i===2?'stroke-dasharray="8 4"':''}`)+text(110,365+i*28,s,15);
    });
    svg += text(70,460,'Skematis: D1 dan D2 tidak memiliki angka rasio tertentu.',15);
    svg += text(70,487,'D2: manfaat pajak marginal = biaya distress marginal.',15);
    return { svg, height: 515 };
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
    height = 20;
    body = panels.map(p => { const result=chart(p,height); height+=p.schematicDistribution?350:panelHeight(p,false); return result; }).join('');
  } else ({ svg: body, height } = schematic(spec.jenis, labels));
  const svg = `<svg class="finance-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 ${height}" role="img" aria-label="${xml(spec['alt text'])}">${themeStyle}<defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="var(--svg-accent,#2563eb)"/></marker></defs><rect width="670" height="${height}" class="svg-bg"/>${body}</svg>`;
  let mobileSvg;
  if(panels?.some(p=>!p.schematicDistribution)) {
    let mobileHeight=10;
    const mobileBody=panels.filter(p=>!p.schematicDistribution).map(p=>{const result=chart(p,mobileHeight,true);mobileHeight+=panelHeight(p,true);return result;}).join('');
    mobileSvg=`<svg class="finance-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 ${mobileHeight}" role="img" aria-label="${xml(spec['alt text'])}">${themeStyle}<rect width="360" height="${mobileHeight}" fill="var(--svg-bg,#f8fafc)"/>${mobileBody}</svg>`;
  } else mobileSvg=mobileSchematic(spec.jenis);
  return {
    kind: 'figure', title: spec.judul, svg, caption: spec.sumber,
    ...(mobileSvg ? { mobileSvg } : {}),
    altText: spec['alt text'],
    overview: {
      heading: spec.judul,
      cards: labels.map(label => ({ title: label, subtitle: '', items: [], takeaway: '' })),
      footer: `${spec.hubungan}. ${spec['pesan utama']}`,
    },
    ...(spec.jenis === 'flow' ? { mobileFlow: { mode: 'cards', title: spec.judul, stages: labels.map(label => ({ actor: label, actions: [] })) } } : {}),
  };
}
