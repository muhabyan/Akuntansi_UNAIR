import fs from 'node:fs';
import { createHash } from 'node:crypto';

export const TMS = [1, 2, 3];
export const sourcePath = (tm) => `scripts/fixtures/akk203/tm${String(tm).padStart(2, '0')}.md`;
export const sourceHash = (tm) => createHash('sha256').update(fs.readFileSync(sourcePath(tm))).digest('hex');
const clean = (s) => s.replace(/\[TOTAL-AKHIR\]/g, '').trim();
const plain = (s) => clean(s).replace(/\*\*/g, '');
const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// Explicit row/edge topology: rows are parallel choices, edges carry direction.
// A backward edge is feedback, while an undirected edge is a concept relationship.
const models = {
  'V-TM01-01': { rows: [['Organisasi sektor publik'], ['Pemerintahan', 'Nonpemerintahan nonlaba'], ['Sumber daya'], ['Layanan'], ['Informasi akuntansi'], ['Pengguna laporan'], ['Keputusan']], edges: [[0,1],[0,2],[1,3],[2,3],[3,4],[4,5],[5,6],[6,7],[7,3,'Umpan balik']] },
  'V-TM01-03': { rows: ['Identifikasi','Pencatatan','Pengukuran','Pengklasifikasian','Pengikhtisaran','Penyajian laporan','Penginterpretasian','Pengguna','Keputusan'].map((s)=>[s]), edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0,'Umpan balik ke pengelolaan']] },
  'V-TM01-04': { rows: [['Informasi untuk keputusan'], ['Relevan: umpan balik, prediktif, tepat waktu, lengkap','Andal: jujur, dapat diverifikasi, netral'], ['Dapat dibandingkan: periode/entitas dan kebijakan','Dapat dipahami: bentuk/istilah/pengguna']], edges: [[0,1,'',false],[0,2,'',false],[0,3,'',false],[0,4,'',false]] },
  'V-TM02-01': { rows: [['Bentuk hukum dan kegiatan'], ['Regulasi badan/kegiatan','Kerangka SAK dan standar transaksi','Kewajiban atau kebutuhan jasa'], ['Kewajiban laporan dan kebutuhan audit','Penyajian laporan','SPAP: audit/reviu/asurans lain']], edges: [[0,1],[0,2],[0,3],[1,4],[2,5],[3,6]] },
  'V-TM02-02': { rows: [['Bantuan Negara/luar negeri/pihak lain dalam satu tahun buku ≥Rp500 juta?','Kekayaan di luar harta wakaf ≥Rp20 miliar?'], ['Salah satu ya (ATAU)','Keduanya tidak'], ['Audit AP dan publikasi ikhtisar keuangan di koran','Periksa kewajiban lain'], ['Hasil audit kepada Pembina; tembusan Menteri dan instansi terkait']], edges: [[0,2],[1,2],[0,3],[1,3],[2,4],[3,5],[4,6]] },
  'V-TM02-03': { rows: [['Penghasilan komprehensif','Arus kas'], ['Perubahan aset neto','Posisi keuangan'], ['Aset neto tanpa pembatasan','Aset neto dengan pembatasan'], ['CaLK: menjelaskan keempat laporan']], edges: [[0,2,'Perubahan'],[2,3,'Saldo akhir'],[1,3,'Kas akhir'],[2,4,'Kelas',false],[2,5,'Kelas',false],[3,4,'Kelas',false],[3,5,'Kelas',false],[6,0,'Menjelaskan',false],[6,1,'Menjelaskan',false],[6,2,'Menjelaskan',false],[6,3,'Menjelaskan',false]] },
  'V-TM02-05': { rows: [['Jasa akuntan publik'], ['Asurans','Jasa lainnya sesuai aturan (SJT)'], ['Audit informasi keuangan historis — SA','Reviu informasi keuangan historis — SPR','Asurans lain — SPA relevan']], edges: [[0,1],[0,2],[1,3],[1,4],[1,5]] },
  'V-TM02-04': { rows: [['2019: pengesahan'],['2020: efektif ISAK35 dan pencabutan45'],['2024: nomor335'],['2025: EP menggantikan ETAP dan amendemen konsekuensial335 efektif'],['2026: pengesahan amendemen ISAK 335; tanggal penerapan amendemen perlu teks']], edges: [[0,1],[1,2],[2,3],[3,4]] },
  'V-TM03-01': { rows: [['Pusat: RPJP/RPJM/RKP','Daerah: RPJPD/RPJMD/RKPD'],['RAPBN','RAPBD'],['Persetujuan DPR','Persetujuan DPRD'],['Pelaksanaan (pusat)','Pelaksanaan (daerah)'],['LK','LKPD'],['BPK (pusat)','BPK (daerah)'],['Tindak lanjut (pusat)','Tindak lanjut (daerah)']], edges: [[0,2],[2,4],[4,6],[6,8],[8,10],[10,12],[12,0,'Evaluasi'],[1,3],[3,5],[5,7],[7,9],[9,11],[11,13],[13,1,'Evaluasi']] },
  'V-TM03-02': { rows: [['Aturan, kewenangan, dan standar'],['Pengelolaan: UU 17 dan UU 1','Perencanaan: UU 25','Daerah: PP 12/Permen 77'],['HKPD: UU 1/2022/PP 35','Laporan: SAP/PSAP/kebijakan/SAPD','Pemeriksaan: UU 15/SPKN'],['Pembanding: IPSAS (tidak otomatis berlaku)','Entitas pemerintah: SAP; perusahaan: SAK sesuai jenis entitas']], edges: [[0,1,'',false],[0,2,'',false],[0,3,'',false],[0,4,'',false],[0,5,'',false],[0,6,'',false],[0,7,'Pembanding',false],[5,8,'Lingkup',false]] },
  'V-TM03-04': { rows: [['Pengguna'],['Peranan dan tujuan laporan'],['Entitas: batas laporan'],['Tiga asumsi','Empat karakteristik','Delapan prinsip']], edges: [[0,1],[2,1,'Batas',false],[3,1,'Menopang',false],[4,1,'Menopang',false],[5,1,'Menopang',false]] },
  'V-TM03-05': { rows: [['Transaksi jasa Ilustrasi A'],['Finansial: hak 2025','Anggaran: penerimaan kas 2026'],['LO dan piutang Neraca 2025','Pendapatan-LRA 2026; piutang terselesaikan'],['Tujuh komponen: LRA; LPSAL; Neraca; LO; LAK; LPE; CaLK'],['Pengecualian LAK/LPSAL menurut fungsi entitas']], edges: [[0,1],[0,2],[1,3],[2,4],[3,4,'Pelunasan'],[3,5,'Laporan',false],[4,5,'Laporan',false]] },
  'V-TM03-06': { rows: [['Identifikasi tahun dan klasifikasi'],['Pegawai: (belanja pegawai − tunjangan guru TKD) ÷ total belanja','Infrastruktur: belanja infrastruktur ÷ (total belanja − bagi hasil/transfer)'],['Bandingkan maksimum 30%','Bandingkan minimum 40%'],['Periksa masa penyesuaian dan keputusan Menteri'],['Kesimpulan terbatas']], edges: [[0,1],[0,2],[1,3],[2,4],[3,5],[4,5],[5,6]] },
  'V-TM03-07': { rows: [['Pilih jenis pemeriksaan'],['Keuangan: opini','Kinerja: temuan, kesimpulan, rekomendasi','Tujuan tertentu: kesimpulan'],['Rekomendasi yang relevan → pejabat menindaklanjuti'],['Jawaban/penjelasan kepada BPK maksimal 60 hari setelah menerima LHP'],['BPK memantau']], edges: [[0,1],[0,2],[0,3],[1,4],[2,4],[3,4],[4,5],[5,6]] },
  'V-TM03-03': { rows: [['2010: SAP'],['2015: batas penerapan akrual pemda'],['2024: penetapan PSAP 18/19'],['2026: penerapan PSAP 18/19; pengundangan SPKN baru 10 April'],['2027: penerapan PSAP 20'],['2028: SPKN baru berlaku 10 April']], edges: [[0,1],[1,2],[2,3,'Penerapan 18/19'],[3,4],[4,5],[3,5,'SPKN berlaku']] },
  'V-TM03-08': { rows: [['SAP/PSAP'],['Kebijakan akuntansi daerah'],['SAPD SKPD/SKPKD'],['Dokumen dan pencatatan'],['Laporan'],['BAS: klasifikasi lintas proses']], edges: [[0,1],[1,2],[2,3],[3,4],[5,3,'Klasifikasi',false],[5,4,'Klasifikasi',false]] },
};

function wrap(s, width) {
  const lines = [''];
  for (const word of s.split(/\s+/)) {
    if ((lines.at(-1) + ' ' + word).trim().length > width && lines.at(-1)) lines.push(word);
    else lines[lines.length - 1] = (lines.at(-1) + ' ' + word).trim();
  }
  return lines;
}

function diagram(spec) {
  const model = models[spec.id];
  if (!model) return undefined; // D3: TM01-02 is a comparison already present as a full table.
  const nodes = [];
  let y = 70;
  for (const row of model.rows) {
    const w = (780 - (row.length - 1) * 35) / row.length;
    const lines = row.map((s) => wrap(s, Math.floor((w - 30) / 8.5)));
    const h = Math.max(...lines.map((s) => s.length)) * 23 + 34;
    row.forEach((text, i) => nodes.push({ text, x: 90 + i * (w + 35), y, w, h, lines: lines[i] }));
    y += h + 65;
  }
  const arrow = `${spec.id}-arrow`;
  const edges = model.edges.map(([a,b,label='',directed=true], i) => {
    const n = nodes[a], m = nodes[b];
    let d;
    if (n.y === m.y) d = `M${n.x+n.w} ${n.y+n.h/2} H${m.x}`;
    else if (m.y > n.y && m.y - n.y < n.h + 90) d = `M${n.x+n.w/2} ${n.y+n.h} L${m.x+m.w/2} ${m.y}`;
    else {
      const lane = 20 + (i % 5) * 12;
      d = `M${n.x} ${n.y+n.h/2} H${lane} V${m.y+m.h/2} H${m.x}`;
    }
    return `<path d="${d}" fill="none" stroke="currentColor" stroke-width="2" ${directed ? `marker-end="url(#${arrow})"` : ''}/>${label ? `<text class="svg-muted" x="${n.x+n.w/2}" y="${n.y+n.h+23}" text-anchor="middle" font-size="12">${escape(label)}</text>` : ''}`;
  }).join('');
  return `<svg class="course-diagram-svg akk203-diagram" viewBox="0 0 960 ${y+20}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif"><title>${escape(spec.judul)}</title><desc>${escape(spec['alt text'])}</desc><defs><marker id="${arrow}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"/></marker></defs><rect class="svg-bg" width="960" height="${y+20}" rx="16"/><text class="svg-title" x="480" y="35" text-anchor="middle" font-size="21" font-weight="700">${escape(spec.judul)}</text>${edges}${nodes.map((n) => `<rect class="svg-card" x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="10"/><text class="svg-text" x="${n.x+n.w/2}" y="${n.y+29}" text-anchor="middle" font-size="17">${n.lines.map((l,i)=>`<tspan x="${n.x+n.w/2}" dy="${i?23:0}">${escape(l)}</tspan>`).join('')}</text>`).join('')}</svg>`;
}

function figure(spec, adjacentTable) {
  let cards;
  if (spec.id === 'V-TM01-02') {
    cards = adjacentTable.rows.map((r) => ({ title: plain(r[0]), subtitle: '', items: r.slice(1).map((v,i)=>`${plain(adjacentTable.headers[i+1])}: ${plain(v)}`), takeaway: '' }));
  } else {
    cards = models[spec.id].rows.flat().map((s)=>({ title: s, subtitle: '', items: [], takeaway: '' }));
  }
  return { kind: 'figure', title: spec.judul, svg: diagram(spec), overview: { heading: spec.judul, cards, footer: spec.hubungan }, caption: `${spec['pesan utama']} [${spec.sumber}]`, altText: spec['alt text'] };
}

function table(lines, header) {
  const cells = (s) => s.trim().replace(/^\||\|$/g, '').split('|').map((v)=>v.trim());
  const rawHeaders = cells(lines[0]);
  const align = cells(lines[1]).map((s)=>s.endsWith(':') ? s.startsWith(':') ? 'center' : 'right' : 'left');
  const rows = lines.slice(2).map(cells);
  const finalColumn=rawHeaders.findIndex((s)=>s.includes('[TOTAL-AKHIR]'));
  const amountColumns=rawHeaders.map((_,c)=>c).filter((c)=>c>0 && align[c]==='right');
  const rowRules = rows.flatMap((row,i)=>row.some((s)=>s.includes('[TOTAL-AKHIR]')) ? [{ row: i, columns: finalColumn>=0 ? [finalColumn] : amountColumns.length?amountColumns:[rawHeaders.length-1], bottom: 'double' }] : []);
  const block = { kind: 'table', headers: rawHeaders.map(clean), rows: rows.map((r)=>r.map(clean)), align };
  if (rowRules.length) block.rowRules = rowRules;
  if (header) block.reportHeader = header;
  if (rawHeaders.length >= 4 && !header && !rowRules.length) block.stackOnMobile = true;
  return block;
}

export function parseBlocks(lines) {
  const blocks=[];
  for (let i=0;i<lines.length;) {
    const line=lines[i].trim();
    if (!line) { i++; continue; }
    if (line.startsWith('```')) {
      const type=line.slice(3).trim(), values={}; i++;
      while (i<lines.length && !lines[i].trim().startsWith('```')) { const m=lines[i++].match(/^([^:]+):\s*(.*)$/); if(m) values[m[1].trim()]=m[2]; }
      i++;
      if(type==='self-check') blocks.push({kind:'self-check',question:values.question,answer:[{kind:'p',text:values.answer}],signal:values.signal});
      else if(type==='visual') blocks.push({kind:'visual-spec',spec:values});
      else throw Error(`Unsupported fence ${type}`);
      continue;
    }
    if (/^:::\s*pendalaman/.test(line)) {
      const title=line.replace(/^:::\s*pendalaman\s*/,'') || 'Pendalaman';
      const start=++i; while(i<lines.length && lines[i].trim()!==':::') i++;
      blocks.push({kind:'pendalaman',title,blocks:parseBlocks(lines.slice(start,i))}); i++; continue;
    }
    if (line.startsWith('|') && /^\s*\|[- :|]+\|?\s*$/.test(lines[i+1]??'')) {
      const start=i++; while(i<lines.length && lines[i].trim().startsWith('|')) i++;
      // Report headers consist of three consecutive bold lines directly before the grid.
      let header;
      const previous=blocks.at(-1);
      if(previous?.kind==='p') {
        const h=previous.text.split('\n');
        if(h.length===3 && h.every((s)=>/^\*\*/.test(s))) {
          header={entity:plain(h[0]),title:plain(h[1]),unit:plain(h[2])}; blocks.pop();
        }
      }
      const grid=table(lines.slice(start,i),header);
      if(header?.title.startsWith('Cuplikan Laporan Posisi Keuangan') && grid.headers.length===2) {
        blocks.push({kind:'statement',spec:{entity:header.entity,title:header.title,period:'',unit:header.unit,lines:grid.rows.map((row,index)=>({label:plain(row[0]),amount:Number(row[1].replaceAll('.','')), ...(grid.rowRules?.some((rule)=>rule.row===index)?{bottomRule:'double'}:{})}))}});
      } else blocks.push(grid);
      continue;
    }
    if(line.startsWith('>')) {
      const quote=[]; while(i<lines.length && lines[i].trim().startsWith('>')) quote.push(lines[i++].trim().replace(/^>\s?/,''));
      const memory=quote[0].match(/^\*\*Kalau cuma sempat ingat satu hal:\*\*\s*(.*)$/);
      const title=memory ? 'Kalau cuma sempat ingat satu hal:' : plain(quote[0]);
      blocks.push({kind:'callout',variant:memory?'gist':/ujian/.test(title)?'tip':'note',title,text:memory?memory[1]:quote.slice(1).join('\n'),...(memory?{compact:true}:{})}); continue;
    }
    if(/^[-*] /.test(line) || /^\d+\. /.test(line)) {
      const ordered=/^\d+\. /.test(line), items=[];
      while(i<lines.length && (ordered?/^\d+\. /:/^[-*] /).test(lines[i].trim())) items.push(lines[i++].trim().replace(ordered?/^\d+\. /:/^[-*] /,''));
      blocks.push({kind:ordered?'ol':'ul',items}); continue;
    }
    if(/^#{2,4} /.test(line)) { blocks.push({kind:line.startsWith('## ')?'h2':'h3',text:line.replace(/^#+ /,'')});i++;continue; }
    if(line.startsWith('**Kalau cuma sempat ingat satu hal:')) { blocks.push({kind:'callout',variant:'gist',compact:true,title:'Kalau cuma sempat ingat satu hal:',text:line.replace(/^\*\*Kalau cuma sempat ingat satu hal:\*\*\s*/, '')});i++;continue; }
    const paragraph=[line]; i++;
    while(i<lines.length && lines[i].trim() && !/^(?:\||>|#|:::|```|[-*] |\d+\. )/.test(lines[i].trim())) paragraph.push(lines[i++].trim());
    blocks.push({kind:'p',text:paragraph.join('\n')});
  }
  // Resolve specs only after adjacent source tables are known; preserve the source position.
  return blocks.map((b,i)=>b.kind==='visual-spec'?figure(b.spec, [...blocks.slice(0,i).reverse(),...blocks.slice(i+1)].find((x)=>x.kind==='table')):b);
}

export function buildReading(tm) {
  const lines=fs.readFileSync(sourcePath(tm),'utf8').split(/\r?\n/);
  const title=lines[0].replace(/^# (?:AKK203 )?TM\d+:\s*/, '');
  const boundaries=lines.flatMap((s,i)=>/^## /.test(s)?[i]:[]);
  const blocks=parseBlocks(lines.slice(1,boundaries[0]));
  for(let k=0;k<boundaries.length;k++) {
    const start=boundaries[k], end=boundaries[k+1]??lines.length, heading=lines[start].replace(/^## /,'');
    if(heading.startsWith('Inti')) {
      blocks.push({kind:'h2',text:heading});
      const sections=lines.slice(start+1,end).flatMap((s,i)=>/^### \d+\./.test(s)?[start+1+i]:[]);
      sections.forEach((s,i)=>blocks.push({kind:'section',layer:'main',title:lines[s].replace(/^### /,''),blocks:parseBlocks(lines.slice(s+1,sections[i+1]??end))}));
    } else if(heading==='Pendalaman') blocks.push(...parseBlocks(lines.slice(start+1,end)));
    else if(heading==='Persiapan ujian') {
      const exercises=lines.slice(start+1,end).flatMap((s,i)=>/^#### [ETL]\d+\./.test(s)?[start+1+i]:[]);
      blocks.push({kind:'section',layer:'latihan',title:heading,blocks:parseBlocks(lines.slice(start+1,exercises[0]))});
      exercises.forEach((s,i)=>{
        const body=lines.slice(s+1,exercises[i+1]??end);
        const solution=body.findIndex((l)=>/^\*\*(Penyelesaian[^*]*|Jawaban):\*\*/.test(l.trim()));
        if(solution<0) throw Error(`No solution ${lines[s]}`);
        blocks.push({kind:'solution-reveal',title:lines[s].replace(/^#### /,''),promptBlocks:parseBlocks(body.slice(0,solution)),blocks:parseBlocks(body.slice(solution)),revealLabel:'Tampilkan penyelesaian dan jawaban akhir'});
      });
    } else blocks.push({kind:'section',layer:'fondasi',title:heading,blocks:parseBlocks(lines.slice(start+1,end))});
  }
  const kilat=blocks.find((b)=>b.layer==='fondasi');
  const intro=kilat.blocks.find((b)=>b.kind==='callout')?.text ?? '';
  const objectives=kilat.blocks.find((b)=>b.kind==='ul'||b.kind==='ol')?.items ?? [];
  return {tm,title,ref:'Akuntansi Sektor Publik',intro,objectives,layout:'layered',blocks};
}

export function flatten(blocks) { return blocks.flatMap((b)=>[b,...flatten(b.blocks??[]),...flatten(b.promptBlocks??[]),...flatten(b.answer??[])]); }
