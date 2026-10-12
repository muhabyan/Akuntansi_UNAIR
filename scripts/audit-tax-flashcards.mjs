import fs from 'node:fs';
import { build } from 'esbuild';
import { writePostUtsCards } from './audit-card-writer.mjs';
const file='src/data/flashcards/pjk201.ts';
const result=await build({entryPoints:[file],bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
const {PJK201_FC:cards}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const corrections={
  'pjk201-tm08-38':['Lingkup dan waktu pemeriksaan menurut PMK 15/2025','Pengujian: lengkap paling lama 5 bulan, terfokus 3 bulan, spesifik 1 bulan; pembahasan akhir/pelaporan umumnya paling lama 30 hari kerja. Ada pengecualian dan perpanjangan tertentu. Klasifikasi kantor/lapangan dari ketentuan lama tidak menentukan waktu model ini. Rujukan: PMK 15/2025 Pasal 1 angka 7-9 dan Pasal 6.'],
  'pjk201-tm08-74':['Jenis pemeriksaan pada materi tahun 2026','PMK 15/2025 memakai lingkup lengkap, terfokus dan spesifik untuk menguji kepatuhan; pemeriksaan tujuan lain diatur tersendiri. Kasus sebelum aturan ini perlu memeriksa ketentuan peralihan. Rujukan: PMK 15/2025 Pasal 3 dan 6.'],
  'pjk201-tm09-76':['Mekanisme restitusi dan batas 12 bulan','Pada permohonan yang dicakup Pasal 17B, periksa tanggal diterima lengkap, pemeriksaan dan pengecualiannya. Lewat batas tanpa keputusan mengikuti mekanisme permohonan dianggap dikabulkan dan penerbitan SKPLB; imbalan bunga mempunyai dasar/syarat tersendiri. Rujukan: UU KUP Pasal 17B dan 27A.'],
  'pjk201-tm10-77':['Syarat pengajuan keberatan','Surat berbahasa Indonesia menyatakan hitungan dan alasan. Batas umumnya 3 bulan sejak surat dikirim atau tanggal pemotongan/pemungutan, dengan pengecualian keadaan di luar kuasa. Bayar bagian yang disetujui pada pembahasan akhir sebelum pengajuan. Rujukan: UU KUP Pasal 25 ayat (2),(3),(3a).'],
  'pjk201-tm10-78':['Banding dan pembayaran pajak menurut KUP','Banding atas keputusan keberatan diajukan ke Pengadilan Pajak dalam 3 bulan sejak diterima, kecuali alasan di luar kuasa. Jangan menerapkan syarat bayar 50% tanpa membedakan objek/yurisdiksi; KUP mengatur penangguhan jumlah yang belum dibayar sebelum keberatan selama banding. Rujukan: UU KUP Pasal 27 ayat (3),(5a)-(5c).'],
  'pjk201-tm13-64':['Tujuh jenis pajak provinsi menurut HKPD','PKB, BBNKB, PAB, PBBKB, PAP, Pajak Rokok dan Opsen Pajak MBLB. Jenis, objek dan pemerintah pemungut perlu dibedakan. Rujukan: UU 1/2022 Pasal 4 ayat (1) huruf a.'],
  'pjk201-tm13-65':['Batas tarif PKB menurut HKPD','Daerah biasa: kepemilikan pertama paling tinggi 1,2%, berikutnya progresif paling tinggi 6%. Daerah provinsi tanpa kab/kota otonom: paling tinggi 2,4% dan progresif 10%. Tarif nyata memakai Perda. Rujukan: UU 1/2022 Pasal 10 ayat (1)-(3),(5).'],
  'pjk201-tm13-66':['Objek dan batas tarif BBNKB','Objek HKPD adalah penyerahan pertama. Maksimum umum 12%; provinsi tanpa kab/kota otonom maksimum 20%. Perda menetapkan tarif nyata; bukan seluruh penyerahan kendaraan bekas menjadi objek. Rujukan: UU 1/2022 Pasal 12 ayat (1) dan 15.'],
  'pjk201-tm14-68':['Sembilan jenis pajak kabupaten/kota','PBB-P2, BPHTB, PBJT, Reklame, Air Tanah, MBLB, Sarang Burung Walet, Opsen PKB dan Opsen BBNKB. Opsen MBLB adalah pajak provinsi. Rujukan: UU 1/2022 Pasal 4 ayat (1) huruf b.'],
  'pjk201-tm14-69':['Rumus PBB-P2 dan batas tarif','PBB-P2 = tarif Perda × persentase basis (20%-100%) × (NJOP - NJOPTKP). NJOPTKP paling sedikit Rp10 juta. Maksimum tarif 0,5%; tarif lahan pangan/ternak ditetapkan lebih rendah tanpa angka nasional 0,25% pada pasal ini. Rujukan: UU 1/2022 Pasal 40 ayat (3),(5),41-42.'],
  'pjk201-tm14-84':['Cara menghitung PBB-P2','Nyatakan NJOP, NJOPTKP, persentase basis dan tarif daerah. Ilustrasi buatan NJOP Rp800 juta, pengurang Rp10 juta, basis 40%, tarif 0,1% memberi Rp316.000. Jangan menganggap basis selalu 100%. Rujukan: UU 1/2022 Pasal 40-42.'],
  'pjk201-tm14-70':['BPHTB dan dasar NPOP','NPOP mengikuti jenis perolehan. Pada jual beli gunakan harga transaksi, atau NJOP ketika NPOP tidak diketahui/lebih rendah dari NJOP. NPOPTKP minimal Rp80 juta untuk perolehan pertama di daerah; Rp300 juta untuk waris/hibah wasiat keluarga yang dicakup. Tarif maksimum 5%, nyata menurut Perda. Rujukan: UU 1/2022 Pasal 46-48.'],
  'pjk201-tm14-72':['Tiga golongan retribusi daerah','Retribusi jasa umum, jasa usaha dan perizinan tertentu. Objek serta layanan/izin yang dicakup diperiksa pada aturan daerah dan pelaksana HKPD; jangan memakai daftar izin lama sebagai daftar yang pasti masih berlaku. Rujukan: UU 1/2022 Pasal 87-94; PP 35/2023.'],
};
const refs={8:'UU KUP Pasal 1,29; PMK 15/2025 Pasal 3-6',9:'UU KUP Pasal 13-17D',10:'UU KUP Pasal 25-27; UU Pengadilan Pajak Pasal 35,40',11:'UU PPSP Pasal 8-14,29-34; UU KUP Pasal 21; PMK 61/2023',12:'UU 10/2020 Pasal 3-9',13:'UU 1/2022 Pasal 4,10,12,15,35-36,83,86',14:'UU 1/2022 Pasal 4,40-48,58,83,87-94'};
for(const card of cards){
  if(card.phase!=='pra-uas')continue;
  if(corrections[card.id]){[card.front,card.back]=corrections[card.id];card.topic=card.front;}
  if(!card.back.includes('Rujukan:'))card.back+=` Rujukan: ${refs[card.tm]}. Tahun dan Perda mengikuti kasus; ini tidak mengubah aturan kasus tahun lain.`;
}
writePostUtsCards(file,cards);
for(let tm=8;tm<=14;tm++){
  const dir=`content-pipeline/PJK201/TM${String(tm).padStart(2,'0')}/audit-20261012`;
  fs.writeFileSync(`${dir}/08_flashcard_alignment.json`,JSON.stringify(cards.filter(c=>c.phase==='pra-uas'&&c.tm===tm),null,2)+'\n');
}
console.log('PJK201 flashcards: 13 statutory corrections, post-UTS references added, all 84 cards retained.');
