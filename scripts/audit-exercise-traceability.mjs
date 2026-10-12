import fs from 'node:fs';
import path from 'node:path';

// Run audit-course-inventory first. This reports missing anchors without inventing sources.
const input=process.argv[2]??'tmp/source-audit';
const output='docs/audit-2026-10-12';
const codes=['AKK201','AKM201','PJK201','AKA103','MNU101','EKT109','MAS122','AKK202','SII306','PJK301','MNK102','AKA201','AKM301','MNU307'];
const hasAnchor=x=>/(?:\bPDF\s+\d|\bhal(?:aman)?\.?\s+\d|\bp{1,2}\.\s*\d|\bpara(?:s)?\.\s*\d|\bPasal\s+\d|\b(?:Figure|Table|Exhibit|Illustration|Ch\.)\s*\d|\bPTE-SRC-ID|\bbagian\s+[A-Z])/i.test(JSON.stringify(x));
const text=x=>String(x??'').replaceAll('—',':').replace(/[\r\n|]/g,' ').slice(0,145).trim();
const totals=[];
for(const code of codes){
  const d=JSON.parse(fs.readFileSync(path.join(input,`${code}.json`),'utf8'));
  const quizzes=d.quizzes.filter(s=>/uas/.test(s.id)).flatMap(s=>s.items);
  const cards=d.cards.filter(c=>c.phase==='pra-uas'||(c.phase!=='pra-uts'&&c.tm>=8));
  const uasBanks=d.banks.filter(s=>/uas/.test(s.id));
  const banks=(uasBanks.length?uasBanks:d.banks.filter(s=>s.id==='all')).flatMap(s=>s.items);
  const missing=[];
  const counts=[];
  for(const [kind,items] of [['kuis',quizzes],['kartu',cards],['kasus',banks]]){
    const gaps=items.map((item,i)=>({item,i})).filter(({item})=>!hasAnchor(item));counts.push(gaps.length);
    missing.push(...gaps.map(({item,i})=>`| ${kind} | ${text(item.id??`${code}-${kind}-${String(i+1).padStart(3,'0')}`)} | ${text(item.tm??item.scope??'belum pasti')} | ${text(item.q??item.front??item.question)} |`));
  }
  const long=quizzes.map((q,i)=>({q,i,lengths:(q.options??[]).map(s=>s.length)})).filter(x=>x.lengths.length&&Math.max(...x.lengths)/Math.min(...x.lengths)>3);
  totals.push(`| ${code} | ${counts.join(' | ')} | ${long.length} |`);
  fs.writeFileSync(`${output}/${code}-exercise-gaps.md`,`# ${code}: butir untuk pemeriksaan sumber/pengecoh\n\nDaftar ini menunjukkan celah anchor, bukan sertifikat kebenaran isi. Rasio panjang >3 adalah sinyal editorial dan tidak otomatis berarti jawaban dapat ditebak.\n\n| Jenis | ID atau urutan set UAS | TM/scope | Pokok butir |\n| --- | --- | --- | --- |\n${missing.join('\n')}\n\n## Rasio panjang opsi di atas 3\n\n${long.length?long.map(({q,i,lengths})=>`- ${code}-quiz-${String(i+1).padStart(3,'0')}: rasio ${(Math.max(...lengths)/Math.min(...lengths)).toFixed(2)}, ${text(q.q)}`).join('\n'):'Tidak ditemukan pada set yang diperiksa.'}\n`);
}
fs.writeFileSync(`${output}/exercise-traceability.md`,`# Ketertelusuran latihan yang masih memerlukan pemeriksaan\n\nDeteksi membaca teks dan metadata setiap butir pada set UAS serta kartu pra-UAS. Anchor p./pp., para./paras., halaman/PDF/pasal, bab dan bagian sumber dikenali. Kehadiran anchor belum membuktikan hitungan atau sumber benar. Set all tidak dihitung ulang jika set UAS tersedia; jika tidak tersedia, kasus all dilaporkan dengan fase belum pasti. Butir tanpa metadata TM tetap dilaporkan. Area Manstrat tetap baca saja.\n\n| Mata kuliah | Kuis tanpa anchor spesifik | Kartu tanpa anchor spesifik | Kasus tanpa anchor spesifik | Opsi rasio panjang >3 |\n| --- | ---: | ---: | ---: | ---: |\n${totals.join('\n')}\n\nDaftar ID tiap mata kuliah ada pada CODE-exercise-gaps.md. Halaman yang belum diperiksa tidak ditambahkan untuk mengosongkan daftar. Nilai nol MNU307 berarti set UAS terpisah belum tersedia, bukan seluruh latihan sudah diverifikasi.\n\nSemester 2 dibekukan sesuai arahan pengguna. Untuk semester 3, 14 butir SIA diperbaiki pada TM10-14, dengan kunci dan jumlah tetap. Butir serta kasus lainnya pada daftar tetap memerlukan audit sumber.\n`);
console.log('Exercise traceability reports updated from current registered content; unresolved items retained.');
