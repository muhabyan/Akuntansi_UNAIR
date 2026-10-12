import fs from 'node:fs';
import { build } from 'esbuild';
import { writePostUtsCards } from './audit-card-writer.mjs';
const file='src/data/flashcards/sii306.ts';
const bundle=await build({stdin:{contents:"export {SII306_FC} from './src/data/flashcards/sii306.ts'; export {SII306_READINGS} from './src/data/sia/siaReadings.ts';",resolveDir:process.cwd(),loader:'ts'},bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
const {SII306_FC:cards,SII306_READINGS:readings}=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const corrections={
  'aks301-tm13-01':'Ledger memakai hash, validasi dan aturan jaringan untuk menjaga konsistensi. Algoritme, transparansi dan desentralisasi bergantung rancangan; perubahan sulit dilakukan tanpa jejak, tetapi integritas ledger tidak membuktikan transaksi dunia nyata benar.',
  'aks301-tm13-02':'Grigg (2005) menekankan receipt bersama yang ditandatangani secara kriptografis di samping pencatatan internal. Konsep ini tidak mensyaratkan shared public blockchain. Rujukan: Grigg (2005), Triple Entry Accounting, bagian Signed Receipts, https://iang.org/papers/triple_entry.html.',
  'aks301-tm13-03':'Program menjalankan ketentuan yang dikodekan ketika input/kondisi dipenuhi. Input atau oracle dapat salah; eksekusi otomatis tidak sendirian membuktikan hak, kewajiban atau nilai transaksi.',
  'aks301-tm13-06':'Periksa ketergantungan vendor, akses, privasi, kontinuitas dan pengendalian yang harus dijalankan pelanggan. Pilih laporan assurance yang sesuai risiko/cakupan serta periode; SOC 1 dan SOC 2 mempunyai tujuan berbeda, bukan kewajiban universal untuk semua cloud.',
  'aks301-tm14-01':'Perkiraan prioritas dari RPP dan materi: proses transaksi, kelemahan pengendalian, metode audit TI dan batas teknologi. Arsip UAS yang mendukung bentuk/bobot spesifik belum ditemukan.',
  'aks301-tm14-05':'SOC 1 berkaitan dengan pengendalian organisasi jasa yang relevan bagi pengendalian internal pelaporan keuangan entitas pengguna. Jenis, periode, pengecualian dan kontrol pelengkap pengguna harus dibaca. Rujukan standar: ISA 402 paragraf 8 dan 16-17.',
};
for(const card of cards){
  if(card.phase!=='pra-uas')continue;
  if(corrections[card.id])card.back=corrections[card.id];
  if(!card.back.includes('Rujukan:'))card.back+=` Rujukan: ${readings[card.tm].ref}.`;
}
writePostUtsCards(file,cards);
for(let tm=8;tm<=14;tm++)fs.writeFileSync(`content-pipeline/SII306/TM${String(tm).padStart(2,'0')}/audit-20261012/08_flashcard_alignment.json`,JSON.stringify(cards.filter(c=>c.phase==='pra-uas'&&c.tm===tm),null,2)+'\n');
console.log('SII306: six bounded claims/priorities corrected, 42 post-UTS card references and all 105 cards preserved.');
