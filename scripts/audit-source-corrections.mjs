import fs from 'node:fs';
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { buildFinanceFigure } from './mnk102-visuals.mjs';

const bundle=await build({stdin:{contents:[
  "export { SII306_READINGS } from './src/data/sia/siaReadings.ts';",
  "export { PJK301_READINGS } from './src/data/pjk2/pjk2Data.ts';",
  "export { AKA201_READINGS } from './src/data/pbri/pbriData.ts';",
].join('\n'),resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
const m=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
function packageDelta(code,tm,source,changes){
  const dir=`content-pipeline/${code}/TM${String(tm).padStart(2,'0')}/audit-20261012`;fs.mkdirSync(dir,{recursive:true});
  const json=JSON.stringify({code,tm,source,changes},null,2);const hash=createHash('sha256').update(json).digest('hex');
  fs.writeFileSync(`${dir}/04_canonical_spec.json`,json);
  fs.writeFileSync(`${dir}/04_canonical_spec.md`,`# ${code} TM${tm}: keputusan sumber\n\nSumber: ${source}\n\nSHA256 spesifikasi: ${hash}\n\n${changes.map(c=>c.text??c.ref??c.title).filter(Boolean).join('\n\n')}\n`);
  fs.writeFileSync(`${dir}/05_student_learning_version.md`,`# ${code} TM${tm}: hasil audit\n\n${changes.map(c=>c.text??c.ref??c.title).filter(Boolean).join('\n\n')}\n\nSumber: ${source}\n`);
  fs.writeFileSync(`${dir}/06_implementation_brief.md`,`Spesifikasi 04 JSON SHA256: ${hash}. Tambahan tidak mengubah materi pra-UTS. Pemeriksaan angka dan sumber dicatat pada laporan mata kuliah.\n`);
  fs.writeFileSync(`${dir}/07_qa_manifest.md`,`Periksa kesesuaian 04 dengan data aplikasi; sumber dan batas disebutkan; semua hitungan memakai unit/periode yang sesuai; lint, tipe, build, tes dan browser dijalankan pada akhir batch.\n`);
}
// Correct source mapping against the original AIS 4e contents, PDF 21, 25-26.
const siaRefs={8:'Ch. 11, hal. cetak 386-408 (PDF 411-433)',9:'Ch. 12, hal. cetak 420-439 (PDF 445-464)',10:'Ch. 11 dan 13, hal. 403-408 dan 450-463 (PDF 428-433 dan 475-488)',11:'Ch. 2 dan 3, hal. 49-60 dan 110-126 (PDF 74-85 dan 135-151)',12:'Ch. 15, hal. 508-516 (PDF 533-541)',13:'Ch. 15, hal. 494-508 (PDF 519-533)',14:'Ch. 10, Integrated Project, hal. 376-385 (PDF 401-410)'};
const siaSource='Richardson, Chang dan Smith, AIS 4e; daftar isi PDF 21, 25-26; dampak blockchain pada audit hal. 507 (PDF 532).';
let sia=fs.readFileSync('src/data/sia/siaReadings.ts','utf8');
for(const [key,ref] of Object.entries(siaRefs)){
  const tm=Number(key),r=m.SII306_READINGS[tm];const newRef='Richardson et al. AIS 4e · '+ref;
  sia=sia.replace(`ref: '${r.ref}'`,`ref: '${newRef}'`).replace(`"ref": ${JSON.stringify(r.ref)}`,`"ref": ${JSON.stringify(newRef)}`);
  packageDelta('SII306',tm,siaSource,[{ref:newRef}]);
}
const corrections=[
 ['Recovery Time Objective (RTO) — Berapa lama sistem boleh mati?','Recovery Time Objective (RTO): Berapa lama sistem boleh mati?'],
 ['Recovery Point Objective (RPO) — Berapa jam transaksi yang boleh hilang?','Recovery Point Objective (RPO): Berapa jam transaksi yang boleh hilang?'],
 ['Sistem informasi akuntansi modern bukan sekumpulan modul terpisah, melainkan ekosistem terpadu di mana peristiwa operasional di hulu (upstream) secara otomatis memicu pembaruan laporan keuangan di hilir (downstream):','SIA terpadu menghubungkan data proses operasional dengan pencatatan dan pelaporan. Dampak tiap peristiwa bergantung pada model data, pemetaan akun, otorisasi dan kontrol yang diterapkan. Richardson Ch.10, PDF 408-409, membedakan peran event, resources dan query laporan:'],
 ['Nol Rekonsiliasi','Rekonsiliasi Tetap Diuji'],['Auditor Otomatis','Auditor Menilai Bukti'],
 ['Tidak Bisa Diubah','Sulit Diubah Tanpa Jejak'],
 ["Sifat Immutability (Kekekalan Data): Jika seorang peretas mencoba mengubah data transaksi pada blok masa lalu (misal mengubah nominal dari Rp 10 juta menjadi Rp 100 juta), nilai hash blok tersebut akan berubah total seketika. Akibatnya, hubungan rantai ke seluruh blok berikutnya menjadi tidak valid dan ditolak oleh konsensus mayoritas node jaringan.",
  'Immutability berarti catatan sulit diubah tanpa memengaruhi hash dan mekanisme validasi jaringan. Batasnya bergantung pada rancangan konsensus, kendali jaringan dan akses kunci. Catatan yang konsisten masih dapat memuat transaksi dunia nyata yang salah. Auditor tetap memeriksa keberadaan, hak, nilai dan pengendalian. Rujukan: Richardson AIS 4e, hal. 497-507 (PDF 522-532).'],
];
for(const [before,after] of corrections)sia=sia.replaceAll(before,after);
fs.writeFileSync('src/data/sia/siaReadings.ts',sia);
let quiz=fs.readFileSync('src/data/quizzes/sii306.ts','utf8');
quiz=quiz.replace('Sifat immutable (tidak dapat diubah) menghilangkan risiko pemalsuan jurnal transaksi masa lalu (tamper-proof). Auditor mendapatkan Single Source of Truth yang dapat diverifikasi secara independen.',
 'Hash dan validasi jaringan membuat perubahan catatan lebih mudah ditelusuri. Risiko manipulasi dan kesalahan input tetap perlu diuji; validasi ledger tidak membuktikan keberadaan atau nilai transaksi dunia nyata. Rujukan: Richardson AIS 4e, hal. 497-507 (PDF 522-532).');
fs.writeFileSync('src/data/quizzes/sii306.ts',quiz);
packageDelta('SII306',13,siaSource,[...corrections.map(([before,text])=>({before,text})),{text:'Pembahasan kuis tentang immutability membedakan integritas catatan dari kebenaran transaksi dunia nyata.'}]);

// Preserve the book/standard distinction in the write-first audit documentation answer.
let pbri=fs.readFileSync('src/data/pbri/modules/tm11.ts','utf8');
pbri=pbri.replace('*Contoh jawaban:* 60 hari setelah tanggal laporan auditor. Setelah itu berkas dibekukan.',
 '*Contoh jawaban:* buku memakai 60 hari setelah tanggal laporan auditor. ISA 230 A21 menyebut waktu yang sesuai umumnya tidak lebih dari 60 hari; periksa ketentuan yurisdiksi dan firma. Setelah perakitan akhir, integritas berkas dijaga.');
fs.writeFileSync('src/data/pbri/modules/tm11.ts',pbri);
packageDelta('AKA201',11,'Arens hal. 156-157 (PDF 169-170); ISA 230 A21, dibaca bersama ISQM 1 A83 pada IAASB 2025 Volume 1 PDF 67.',[{text:'Jawaban cek pemahaman membedakan contoh batas 60 hari pada buku dengan istilah umumnya pada standar. Isi pra-UTS dipertahankan.'}]);

// Native tax formulas must carry named variables and original legal anchors.
const notes={
 9:'Bruto objek adalah penghasilan bruto yang menjadi dasar pemotongan masa; TER adalah tarif efektif sesuai kategori dan interval bruto. Rumus ini berlaku untuk masa yang menggunakan TER, dengan rekonsiliasi pada masa terakhir. Rujukan: PMK 168/2023 Pasal 8 dan 15; PP 58/2023 Lampiran A. Tahun kasus 2024/2025 tetap sesuai soal.',
 10:'PPh tahunan adalah hasil tarif Pasal 17 atas PKP sesuai cakupan penerima; potongan sebelumnya adalah PPh 21 pada masa sebelum masa terakhir dari pemotong yang relevan. Hasil negatif memerlukan pengembalian kelebihan potong sesuai aturan. Rujukan: PMK 168/2023 Pasal 15 dan 21. Tahun kasus 2024/2025 tetap sesuai soal.',
 11:'PMK 31E pada rumus ini dibaca sebagai fasilitas Pasal 31E UU PPh. PKP fasilitas merupakan bagian PKP badan yang mendapatkan pengurangan tarif 50%; peredaran bruto dibatasi cakupan Pasal 31E. Nilai Rp4,8 miliar adalah batas bagian peredaran, bukan pengurang PKP. Rujukan: UU PPh Pasal 31E ayat (1), dibaca bersama Pasal 17.',
 12:'Harga berarti harga jual, penggantian atau nilai impor yang menjadi dasar sesuai transaksi. Pada kasus nonmewah umum 2025 ini, DPP nilai lain adalah 11/12 nilai tersebut; hasil 12% × 11/12 memberi beban 11%. Skema khusus dan barang mewah diuji tersendiri. Rujukan: PMK 131/2024 Pasal 2-5; UU PPN Pasal 7 dan 8A.',
 13:'Harga di sini adalah nilai sebelum PPN dan PPnBM. PPnBM dihitung atas DPP sesuai klasifikasi; jangan menambahkan PPnBM ke DPP PPN tanpa dasar. Rujukan: UU PPN Pasal 5, 8, 8A dan 10. Tarif PPnBM dan tahun dinyatakan pada soal.',
 14:'PM adalah Pajak Masukan terkait aset bersama; Z proporsi perkiraan penggunaan untuk penyerahan yang memberi hak kredit; T masa manfaat menurut ketentuan; Z prima adalah proporsi realisasi; delta P adalah penyesuaian terhadap alokasi kredit awal per tahun. Rujukan: PMK 186/2022 Pasal 3-8 dan Lampiran. Kasus menyatakan tahun dan penggunaan.',
 15:'Rumus pajak karbon pada kasus adalah simulasi berdasarkan emisi yang dinyatakan, batas/kuota dan unit yang diasumsikan diakui. Konversi ton ke kilogram memakai 1.000 kg per ton. Simulasi tidak menetapkan tanggal implementasi, kredit pajak aktual atau kelayakan unit. Rujukan: UU HPP Pasal 13 ayat (5)-(15) dan Pasal 17 ayat (3).',
};
for(const [key,note] of Object.entries(notes)){
 const tm=Number(key),r=m.PJK301_READINGS[tm];
 r.blocks=r.blocks.filter(b=>!(b.kind==='figure'&&b.title==='PPh OP: tarif berlapis dan pajak total')&&!(b.kind==='p'&&b.text.startsWith('Cara membaca: PKP berarti')));
 for(const b of r.blocks)if(b.kind==='formula')b.note=note;
 // Clarify the statute title rather than implying a ministerial regulation named 31E.
 notes[key]=note.replace('PMK 31E pada rumus ini dibaca sebagai fasilitas Pasal 31E UU PPh. ','');
 for(const b of r.blocks)if(b.kind==='formula')b.note=notes[key];
 if(tm===11){
  const tax=x=>Math.min(x,60)*.05+Math.max(0,Math.min(x-60,190))*.15+Math.max(0,Math.min(x-250,250))*.25+Math.max(0,Math.min(x-500,4500))*.30+Math.max(0,x-5000)*.35;
  const points=[0,60,100,250,500,1000,2500,5000,6000].map(x=>[x,tax(x)]);
  const f=buildFinanceFigure({id:'PJK301-TM11-TARIF',jenis:'chart',judul:'PPh OP: tarif berlapis dan pajak total',sumber:'UU PPh Pasal 17 ayat (1) huruf a sebagaimana diubah UU HPP; UU HPP PDF 56-57. Kurva hasil rumus tarif, bukan data wajib pajak.',isi:JSON.stringify(['PKP 60 juta: PPh 3 juta rupiah','PKP 250 juta: PPh 31,5 juta rupiah','Tarif tertinggi hanya untuk bagian PKP pada lapisannya']),hubungan:'Sumbu horizontal PKP tahunan; sumbu vertikal PPh tahunan','pesan utama':'Kenaikan PKP melewati batas tidak mengenakan tarif baru pada seluruh PKP.','versi HP':'Grafik sempit dengan label 16 unit','alt text':'PPh OP naik menurut lima lapisan PKP; tarif marginal berlaku pada tambahan penghasilan.',data:JSON.stringify({panels:[{title:'PKP dan PPh tahunan',xlabel:'PKP (juta rupiah per tahun)',ylabel:'PPh (juta rupiah per tahun)',series:[{label:'PPh menurut tarif Pasal 17',points}],xmin:0,xmax:6000,ymin:0,ymax:2000}]})});
  r.blocks.splice(r.blocks.findIndex(b=>b.kind==='solution-reveal'),0,f,{kind:'p',text:'Cara membaca: PKP berarti penghasilan kena pajak setelah pengurang sah, bukan bruto. Pada PKP 250 juta rupiah, pajak = 60 juta × 5% + 190 juta × 15% = 31,5 juta rupiah. Tarif 25% baru berlaku untuk bagian di atas 250 juta. Grafik ini berbeda dari TER masa bulanan. Rujukan: UU PPh Pasal 17 ayat (1) huruf a; UU HPP PDF 56-57.'});
 }
 fs.writeFileSync(`src/data/pjk2/modules/tm${tm}.ts`,`// PJK301 TM${tm}: audited formula notes, 12 October 2026.\nimport type { Reading } from '../../../types';\nexport const TM${tm}_READING: Reading = ${JSON.stringify(r,null,2)};\n`);
 packageDelta('PJK301',tm,'RPP Perpajakan II PDF 3-5; '+notes[key],[...r.blocks.filter(b=>b.kind==='formula'),...(tm===11?r.blocks.filter(b=>b.kind==='figure'):[])]);
}
console.log('Source corrections written: SIA source chapters and blockchain limits; PBR standard qualifier; PJK seven formula notes and progressive tax figure.');
