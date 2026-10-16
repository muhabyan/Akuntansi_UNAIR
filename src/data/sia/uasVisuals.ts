import type { ContentBlock } from '../../types';

const xml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
type Card = { title: string; lines: string[] };
const wrap = (text: string, limit: number): string[] => {
  const lines: string[] = [];
  for (const word of text.split(' ')) {
    if (!lines.length || lines[lines.length - 1].length + word.length + 1 > limit) lines.push(word);
    else lines[lines.length - 1] += ` ${word}`;
  }
  return lines;
};

/** Authored concept maps; fixed line lengths and a separate vertical version keep labels legible. */
export function conceptMap(id: string, title: string, cards: Card[], caption: string, flow = true): ContentBlock {
  const render = (mobile: boolean) => {
    const width = mobile ? 360 : 800;
    const cols = mobile ? 1 : 2;
    const gap = mobile ? 34 : 30;
    const boxWidth = mobile ? 328 : 365;
    const labels = cards.map(c => ({ title: wrap(c.title, mobile ? 29 : 33), lines: c.lines.flatMap(line => wrap(line, mobile ? 38 : 43)) }));
    const rows = Array.from({ length: Math.ceil(cards.length / cols) }, (_, row) =>
      Math.max(...labels.slice(row * cols, (row + 1) * cols).map(c => 29 + c.title.length * 21 + c.lines.length * 22 + 14)));
    const height = 32 + rows.reduce((sum, value) => sum + value, 0) + (rows.length - 1) * gap;
    const body = cards.map((_, i) => {
      const row = Math.floor(i / cols), boxHeight = rows[row];
      const x = 16 + (i % cols) * (boxWidth + gap), y = 16 + rows.slice(0, row).reduce((sum, value) => sum + value + gap, 0);
      const arrow = flow && i < cards.length - 1
        ? mobile ? `<path d="M180 ${y + boxHeight + 4} v22" marker-end="url(#${id}-a-${mobile})" stroke="#64748b" stroke-width="2"/>`
          : i % cols === 0 ? `<path d="M${x + boxWidth + 3} ${y + boxHeight / 2} h23" marker-end="url(#${id}-a-${mobile})" stroke="#64748b" stroke-width="2"/>`
            : `<path d="M${x + boxWidth / 2} ${y + boxHeight + 2} v12 H${16 + boxWidth / 2} v10" fill="none" marker-end="url(#${id}-a-${mobile})" stroke="#64748b" stroke-width="2"/>` : '';
      return `<g><rect x="${x}" y="${y}" width="${boxWidth}" height="${boxHeight}" rx="12" fill="${i % 2 ? '#ecfdf5' : '#eff6ff'}" stroke="#94a3b8"/>
      ${labels[i].title.map((line, n) => `<text x="${x + 16}" y="${y + 29 + n * 21}" fill="#0f172a" font-size="17" font-weight="700">${n === 0 ? `${i + 1}. ` : ''}${xml(line)}</text>`).join('')}
      ${labels[i].lines.map((line, n) => `<text x="${x + 16}" y="${y + 35 + labels[i].title.length * 21 + n * 22}" fill="#334155" font-size="14">${xml(line)}</text>`).join('')}</g>${arrow}`;
    }).join('');
    return `<svg class="course-diagram-svg" role="img" aria-label="${xml(title)}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,Arial,sans-serif;width:100%;height:auto"><title>${xml(title)}</title><defs><marker id="${id}-a-${mobile}" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="#64748b" stroke-width="1.5"/></marker></defs>${body}</svg>`;
  };
  return { kind: 'figure', title, svg: render(false), mobileSvg: render(true), caption,
    altText: cards.map((c, i) => `${i + 1}. ${c.title}: ${c.lines.join(' ')}`).join('; '),
    transcript: cards.map((c, i) => `${i + 1}. ${c.title}: ${c.lines.join(' ')}`) };
}

export const recoveryTimeline: ContentBlock = {
  kind: 'figure', title: 'Dua arah waktu: kehilangan data dan pemulihan layanan',
  svg: `<svg class="course-diagram-svg" viewBox="0 0 800 230" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,Arial,sans-serif;width:100%;height:auto"><title>Backup 10.00, insiden 10.40, pulih 13.10</title><rect width="800" height="230" rx="14" fill="#f8fafc"/><path d="M60 120 H740" stroke="#64748b" stroke-width="3"/><path d="M80 120 H340" stroke="#d97706" stroke-width="9"/><path d="M340 120 H710" stroke="#0369a1" stroke-width="9"/><g fill="#0f172a" text-anchor="middle" font-size="17" font-weight="700"><text x="80" y="85">10.00</text><text x="340" y="85">10.40</text><text x="710" y="85">13.10</text></g><g fill="#475569" text-anchor="middle" font-size="14"><text x="80" y="59">Backup valid</text><text x="340" y="59">Insiden</text><text x="710" y="59">Layanan pulih</text><text x="210" y="162">Data berisiko: 40 menit</text><text x="525" y="162">Waktu pulih: 2 jam 30 menit</text><text x="400" y="205">Bandingkan hasil aktual dengan target RPO dan RTO.</text></g></svg>`,
  mobileSvg: `<svg class="course-diagram-svg" viewBox="0 0 360 380" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,Arial,sans-serif;width:100%;height:auto"><title>Timeline pemulihan vertikal</title><rect width="360" height="380" rx="14" fill="#f8fafc"/><path d="M32 55 V310" stroke="#64748b" stroke-width="3"/><path d="M32 55 V155" stroke="#d97706" stroke-width="8"/><path d="M32 155 V310" stroke="#0369a1" stroke-width="8"/><g fill="#0f172a" font-size="17" font-weight="700"><text x="57" y="57">10.00 · Backup valid</text><text x="57" y="157">10.40 · Insiden</text><text x="57" y="312">13.10 · Layanan pulih</text></g><g fill="#475569" font-size="14"><text x="57" y="104">40 menit data berisiko hilang</text><text x="57" y="222">2 jam 30 menit pemulihan</text><text x="18" y="357">RPO dan RTO adalah target bisnis.</text></g></svg>`,
  altText: 'Backup valid pukul 10.00; insiden 10.40; layanan pulih 13.10. Potensi kehilangan data 40 menit dan durasi pemulihan 2 jam 30 menit.',
  transcript: ['10.00: backup terakhir yang berhasil diverifikasi.', '10.40: insiden terjadi; ada potensi kehilangan 40 menit data.', '13.10: layanan pulih; durasi pemulihan 2 jam 30 menit.', 'Garis waktu bersifat skematis; panjang ruas tidak mewakili skala menit.'],
  caption: 'Ilustrasi buatan, waktu setempat pada hari yang sama. Ruas waktu skematis. Target kasus: RPO 15 menit dan RTO 2 jam; kedua target tidak terpenuhi.',
};

export const agingChart: ContentBlock = {
  kind: 'figure', title: 'Aging piutang: Rp100 juta, Rp60 juta sudah lewat jatuh tempo',
  svg: `<svg class="course-diagram-svg" viewBox="0 0 650 330" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,Arial,sans-serif;width:100%;height:auto"><title>Saldo piutang per kelompok umur</title><rect width="650" height="330" rx="14" fill="#f8fafc"/><g stroke="#cbd5e1"><path d="M155 45 V270 H565"/><path d="M255 45 V270 M355 45 V270 M455 45 V270 M555 45 V270"/></g><g fill="#475569" font-size="15" text-anchor="end"><text x="140" y="83">Belum jatuh tempo</text><text x="140" y="139">1–30 hari</text><text x="140" y="195">31–60 hari</text><text x="140" y="251">&gt;60 hari</text></g><rect x="155" y="58" width="400" height="36" rx="4" fill="#0369a1"/><rect x="155" y="114" width="300" height="36" rx="4" fill="#b45309"/><rect x="155" y="170" width="200" height="36" rx="4" fill="#b45309"/><rect x="155" y="226" width="100" height="36" rx="4" fill="#b45309"/><g fill="#fff" font-size="16" font-weight="700"><text x="170" y="82">40</text><text x="170" y="138">30</text><text x="170" y="194">20</text><text x="170" y="250">10</text></g><g fill="#475569" font-size="13" text-anchor="middle"><text x="155" y="292">0</text><text x="255" y="292">10</text><text x="355" y="292">20</text><text x="455" y="292">30</text><text x="555" y="292">40</text><text x="355" y="317">Saldo piutang (Rp juta) · tanggal analisis sama</text></g></svg>`,
  mobileSvg: `<svg class="course-diagram-svg" viewBox="0 0 360 430" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,Arial,sans-serif;width:100%;height:auto"><title>Aging dalam Rp juta</title><rect width="360" height="430" rx="14" fill="#f8fafc"/><g fill="#0f172a" font-size="15"><text x="18" y="35">Belum jatuh tempo · 40</text><text x="18" y="125">1–30 hari · 30</text><text x="18" y="215">31–60 hari · 20</text><text x="18" y="305">Lebih dari 60 hari · 10</text></g><rect x="18" y="49" width="300" height="28" rx="4" fill="#0369a1"/><rect x="18" y="139" width="225" height="28" rx="4" fill="#b45309"/><rect x="18" y="229" width="150" height="28" rx="4" fill="#b45309"/><rect x="18" y="319" width="75" height="28" rx="4" fill="#b45309"/><path d="M18 370 H318" stroke="#64748b"/><g fill="#475569" font-size="13" text-anchor="middle"><text x="18" y="391">0</text><text x="93" y="391">10</text><text x="168" y="391">20</text><text x="243" y="391">30</text><text x="318" y="391">40</text><text x="168" y="417">Saldo piutang (Rp juta)</text></g></svg>`,
  altText: 'Belum jatuh tempo 40 juta; 1 sampai 30 hari lewat jatuh tempo 30 juta; 31 sampai 60 hari 20 juta; lebih dari 60 hari 10 juta. Total 100 juta.',
  transcript: ['Belum jatuh tempo: Rp40 juta.', 'Lewat jatuh tempo 1–30 hari: Rp30 juta.', 'Lewat jatuh tempo 31–60 hari: Rp20 juta.', 'Lewat jatuh tempo >60 hari: Rp10 juta.', 'Total Rp100 juta; jumlah lewat jatuh tempo Rp60 juta atau 60%. Grafik memakai skala nol dan satu tanggal analisis.'],
  caption: 'Data latihan buatan. Umur dihitung dari due date, saldo setelah alokasi penerimaan kas. Nilai penuh tersedia pada tabel kasus.',
};
