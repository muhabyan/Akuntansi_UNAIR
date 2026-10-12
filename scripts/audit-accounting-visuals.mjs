// Generate source-anchored additions only for the seven post-UTS accounting meetings.
import fs from 'node:fs';
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { buildFinanceFigure } from './mnk102-visuals.mjs';
const root='content-pipeline/AKK202';
const bundle=await build({entryPoints:['src/data/akm2/akm2Data.ts'],bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
const {AKK202_READINGS}=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const sha=s=>createHash('sha256').update(s).digest('hex');
const graph=(tm,title,source,labels,panels)=>{
  const spec={id:`AKK202-TM${tm}-AUDIT`,jenis:'chart',judul:title,sumber:source,isi:JSON.stringify(labels),hubungan:'Sumbu, satuan, kurva dan asumsi dijelaskan pada teks', 'pesan utama':labels.join('. '),'versi HP':'Grafik sempit dengan label 16 unit','alt text':title+'. '+labels.join('. '),data:JSON.stringify({panels})};
  const f=buildFinanceFigure(spec);return {...f,transcript:labels};
};
const panel=(title,xlabel,ylabel,series,xmin,xmax,ymin,ymax,markers=[])=>({title,xlabel,ylabel,series:series.map(([label,points])=>({label,points})),xmin,xmax,ymin,ymax,markers});
const amounts=[92278,92892,93537,94214,94925,95671,96454,97277,98141,99048,100000];
const price=i=>100000/(1+i/2)**10+4000*(1-(1+i/2)**-10)/(i/2);
const defs={
  9:{ref:'Kieso IFRS 5e, halaman PDF 1107-1113, Illustrations 13.6-13.9',text:'Cara membaca: pada kupon 8% setahun, yield 10% membuat harga di bawah nominal. Jadwal diskonto memakai angka bulat Illustration 13.7; selisih pembulatan sumber tetap dipertahankan. Nilai tercatat naik menuju 100.000 euro selama 10 semester, sementara kas kupon tetap 4.000 euro per semester. Kurva harga terhadap yield adalah hitungan dari kontrak sumber, dengan kupon dan jatuh tempo tetap.',figure:graph(9,'Evermaster: harga, yield dan amortisasi','Kieso IFRS 5e, halaman PDF 1107-1113; input kontrak sumber; kurva yield hasil hitungan.', ['Kupon 8% per tahun, 5 tahun, pembayaran semesteran','Yield 10%: harga buku 92.278 euro','Nilai tercatat menuju nominal 100.000 euro'],[
    panel('Harga saat yield berubah','Yield (% per tahun)','Harga (euro)',[['PV kupon dan pokok',[4,6,8,10,12,14].map(r=>[r,price(r/100)])]],4,14,70000,125000,[{x:8,y:100000,label:'Yield = kupon: harga = nominal'}]),
    panel('Nilai tercatat: jadwal diskonto','Periode semester (0 sampai 10)','Nilai tercatat (euro)',[['Angka bulat buku',amounts.map((n,i)=>[i,n])]],0,10,90000,101000),
  ])},
  10:{ref:'Kieso IFRS 5e, halaman PDF 1128-1129',text:'Pelunasan dengan aset menimbulkan dua penilaian yang berbeda. Pada Bonn Mortgage, nilai buku aset 21 juta euro dan nilai wajar 16 juta memberi rugi pelepasan aset 5 juta. Nilai tercatat utang 20 juta dibanding harga pelunasan 16 juta memberi keuntungan pelunasan 4 juta. Kedua hasil tidak boleh digabung menjadi satu keuntungan pelunasan. [Kieso IFRS 5e, halaman PDF 1128-1129]'},
  11:{ref:'Kieso IFRS 5e, halaman PDF 1201, Illustration 14.14',text:'Dividen properti diukur memakai nilai wajar aset yang dibagikan. Pada Tsen, kenaikan nilai dari 1.250.000 menjadi 2.000.000 euro diakui sebelum utang dividen dicatat. Deklarasi menghasilkan kewajiban, dan distribusi melunasinya. Tanggal keputusan tidak sama dengan tanggal arus aset. [Kieso IFRS 5e, halaman PDF 1201]'},
  12:{ref:'Kieso IFRS 5e, halaman PDF 1257-1258, Illustrations 15.1-15.4',text:'Roche menerima 2 juta euro, membayar kupon 120.000 euro pada akhir setiap tahun, dan melunasi pokok pada akhir tahun keempat. Liabilitas memakai yield instrumen tanpa konversi 9%, sehingga komponen ekuitas merupakan sisa 194.374 euro pada angka bulat buku. Kupon 6% menentukan kas; yield 9% menentukan nilai liabilitas. [Kieso IFRS 5e, halaman PDF 1257-1258]',figure:graph(12,'Roche: arus kupon dan pokok','Kieso IFRS 5e, halaman PDF 1258, Illustration 15.2. Jumlah dalam ribu euro.', ['Tahun 1-3: kupon 120 ribu euro per tahun','Tahun 4: kupon 120 dan pokok 2.000 ribu euro','PV liabilitas memakai yield 9%, bukan kupon 6%'],[{...panel('Pembayaran akhir tiap tahun','Tahun sejak penerbitan','Kas keluar (ribu euro)',[['Kupon',[[1,120],[2,120],[3,120],[4,120]]],['Pokok',[[1,0],[2,0],[3,0],[4,2000]]]],1,4,0,2200),discrete:true}])},
  13:{ref:'Kieso IFRS 5e, halaman PDF 1285-1299',text:'EPS dasar membagi laba untuk saham biasa dengan jumlah saham biasa rata-rata tertimbang. Uji dilusi dilakukan terhadap laba dari operasi berlanjut yang tersedia bagi saham biasa sebagai control number. Instrumen yang meningkatkan EPS atau mengurangi rugi per saham bersifat antidilutif dan dikeluarkan. Saham akibat stock split disesuaikan retrospektif sesuai sumber; penerbitan tunai diberi bobot waktu. [Kieso IFRS 5e, halaman PDF 1285-1299]'},
  14:{ref:'Kieso IFRS 5e, halaman PDF 1399, Illustrations 16.23-16.24',text:'Cara membaca: Bao membayar kupon kontraktual 20.000, tetapi ekspektasi tinggal 16.000 per tahun selama empat tahun. Selisih kas kupon nominal 16.000 selama empat tahun berbeda dari ECL 12.680 yang didiskonto pada tingkat efektif historis 10%. Pokok 200.000 masih diharapkan kembali. Satuan sumber adalah ribuan yen; gunakan angka pembulatan sumber. [Kieso IFRS 5e, halaman PDF 1399]',figure:graph(14,'Bao: kas kontraktual dan ekspektasian','Kieso IFRS 5e, halaman PDF 1399, Illustration 16.23; dalam ribuan yen.', ['Kontraktual: 20.000 per tahun sebelum pokok','Ekspektasian: 16.000 per tahun sebelum pokok','ECL 12.680 adalah kerugian nilai kini'],[panel('Kupon yang dipisahkan dari pokok','Tahun: 2025 sampai 2028','Kupon (ribuan yen)',[['Kontraktual',[[2025,20000],[2026,20000],[2027,20000],[2028,20000]]],['Ekspektasian',[[2025,16000],[2026,16000],[2027,16000],[2028,16000]]]],2025,2028,0,22000)])},
  15:{ref:'Kieso IFRS 5e, halaman PDF 1388-1392 dan 1452, E16.20',text:'Pada metode ekuitas, bagian laba investee menambah nilai investasi dan dividen menguranginya. Dengan investasi awal 200.000 pound, porsi 25%, laba 80.000 dan dividen 20.000 pound, nilai akhir adalah 215.000 pound dalam kasus sederhana. Dividen tersebut berbeda dari pendapatan dividen pada metode nilai wajar. Pengaruh signifikan dan pengendalian dinilai dari substansi; persentase kepemilikan memberi indikator, bukan satu-satunya bukti. [Kieso IFRS 5e, halaman PDF 1388-1392 dan 1452]'},
};
for(const [key,d] of Object.entries(defs)){
  const tm=Number(key);const r=AKK202_READINGS[tm];
  r.blocks=r.blocks.filter(b=>!(b.kind==='callout'&&b.title==='Versi sumber dan batas standar nasional')&&!(b.kind==='p'&&b.text.startsWith(d.text))&&!(b.kind==='figure'&&b.title===d.figure?.title));
  const intro={kind:'callout',variant:'note',title:'Versi sumber dan batas standar nasional',text:'Kasus menggunakan Kieso IFRS 5e (2024). RPP AKM II PDF 3 juga meminta konteks standar Indonesia serta SAK ETAP pada bagian terkait. IAI menyatakan SAK Entitas Privat menggantikan SAK ETAP sejak 1 Januari 2025. Dokumen lokal bertanda DE adalah draf eksposur. Rincian perbedaan standar nasional belum seluruhnya diverifikasi; contoh buku tidak otomatis menjadi ketentuan Indonesia. Rujukan: RPP AKM II, halaman PDF 3; [IAI, Tentang SAK ETAP](https://web.iaiglobal.or.id/SAK-IAI/Tentang%20SAK%20ETAP).'};
  r.blocks.splice(1,0,intro);
  const index=r.blocks.findIndex(b=>b.kind==='h2'&&b.text==='8. Exam Toolkit');
  const blocks=[{kind:'p',text:d.text+' Rujukan pemeriksaan: '+d.ref+'.'},...(d.figure?[d.figure]:[])];
  r.blocks.splice(index,0,...blocks);
  const dir=`${root}/TM${String(tm).padStart(2,'0')}/audit-20261012`;fs.mkdirSync(dir,{recursive:true});
  const canonical=JSON.stringify({scope:`AKK202 TM${tm}; tambahan setelah audit sumber`,reference:d.ref,blocks:[intro,...blocks]},null,2);
  fs.writeFileSync(`${dir}/04_canonical_spec.json`,canonical);
  fs.writeFileSync(`${dir}/04_canonical_spec.md`,`# AKK202 TM${tm}: tambahan sumber terverifikasi\n\n${d.text}\n\nSumber: ${d.ref}.\n\nSHA256 spesifikasi JSON: ${sha(canonical)}.\n`);
  fs.writeFileSync(`${dir}/05_student_learning_version.md`,`# AKK202 TM${tm}: hasil audit sumber\n\n${intro.text}\n\n${d.text}\n\nSumber: ${d.ref}.\n\n${d.figure?d.figure.transcript.join('\n\n'):''}\n`);
  fs.writeFileSync(`${dir}/06_implementation_brief.md`,`Paket tambahan dirender sebelum Exam Toolkit dan catatan versi di Orientation. SHA256 04: ${sha(canonical)}. Tidak mengubah materi/latihan pra-UTS atau mengurangi latihan UAS.\n`);
  fs.writeFileSync(`src/data/akm2/modules/tm${tm}.ts`, `// AKK202 TM${tm}: audited source addition, 12 October 2026.\nimport type { Reading } from '../../../types';\nexport const TM${tm}_READING: Reading = ${JSON.stringify(r,null,2)};\n`);
}
console.log('AKK202 source additions generated: 7 meetings, 3 numeric figures, explicit national-standard gap.');
