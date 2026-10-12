import fs from 'node:fs';
import ts from 'typescript';
import { build } from 'esbuild';
const file='src/data/quizzes/sii306.ts';
const bundle=await build({entryPoints:[file],bundle:true,write:false,format:'esm',platform:'node',logLevel:'silent'});
const {SII306_QUIZ_UAS:questions}=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const changes={
  11:{q:'Apa pembeda audit around dan through the computer dalam pemeriksaan AIS?',options:[
    'Around menguji kode program, sedangkan through hanya membandingkan total laporan.',
    'Around berfokus input dan output, sedangkan through juga menguji proses di sistem.',
    'Around menguji seluruh proses, sedangkan through hanya membaca dokumen input.',
    'Around membuktikan semua kontrol, sedangkan through hanya menguji saldo akun.',
  ],explanation:'Perbedaan terletak pada apakah pemrosesan di dalam sistem juga diuji. Pemilihan prosedur tetap mengikuti risiko dan bukti yang diperlukan.',ref:'Richardson AIS 4e, Ch.13, Computer-Assisted Audit Techniques, PDF 480-488'},
  19:{options:[
    'Mencocokkan nomor faktur, vendor, tanggal dan nominal, lalu meninjau kandidat duplikat.',
    'Meregresikan laba terhadap penjualan, lalu menilai perubahan tren laba tahunan.',
    'Meringkas pembayaran per bulan, lalu menilai apakah total tahun sama dengan anggaran.',
    'Mengurutkan vendor menurut saldo akhir, lalu menguji vendor dengan saldo terbesar.',
  ],explanation:'Pencocokan tepat dan fuzzy dapat menemukan kandidat ganda. Kandidat tetap diperiksa terhadap transaksi asli; kemiripan field tidak otomatis membuktikan pembayaran ganda.',ref:'Richardson AIS 4e, Ch.3, Exploratory Data Analysis, PDF 135-151'},
  21:{options:[
    'Attended dipicu/didampingi pengguna; unattended berjalan menurut pemicu terjadwal.',
    'Attended dijadwalkan di server; unattended selalu menunggu klik pengguna desktop.',
    'Attended beroperasi tanpa pengguna; unattended meminta pengguna pada setiap langkah.',
    'Attended dan unattended sama-sama harus dipicu manual dari sesi pengguna desktop.',
  ],explanation:'Pembedaan berkaitan dengan interaksi pengguna dan cara pemicu dijalankan. Bot tetap memerlukan otorisasi, pemantauan, penanganan pengecualian dan pemeliharaan. Istilah ini memakai sumber vendor sebagai pelengkap buku.',ref:'UiPath Overview, Attended vs. Unattended automation, bagian Attended Automations dan Unattended Automations, https://docs.uipath.com/overview/other/latest/overview/attended-vs-unattended-automation, dibaca 12 Oktober 2026; Richardson AIS 4e Ch.15 memberi konteks otomasi'},
  24:{options:[
    'Bot memastikan format input selalu sama sehingga pengujian perubahan dapat dihentikan.',
    'Perubahan format input tanpa pembaruan bot dapat menghasilkan kesalahan berulang.',
    'Bot mengurangi risiko input sehingga seluruh otorisasi transaksi dapat dihapuskan.',
    'Bot membuat laporan akhir benar sehingga jejak transaksi tidak perlu disimpan.',
  ],explanation:'Perubahan input atau antarmuka dapat membuat aturan bot salah diterapkan berulang. Change control, testing dan pemantauan pengecualian tetap diperlukan.',ref:'Richardson AIS 4e, Ch.15, Automation dan RPA, PDF 539-541'},
  30:{q:'Dalam integrated project Richardson, bagaimana model proses dan database mendukung laporan keuangan?',options:[
    'Semua event langsung dijumlahkan sebagai kas tanpa membedakan pembayaran dan penjualan.',
    'Event, resources dan hubungan dipetakan untuk menyiapkan query serta laporan yang sesuai.',
    'Database menggantikan kebutuhan memodelkan kontrol dan menetapkan business requirements.',
    'UML class diagram hanya mengatur tampilan laporan tanpa menghubungkan data antarproses.',
  ],explanation:'Buku menghubungkan business requirements, BPMN, integrated UML class diagram, tabel/relasi dan query laporan. Penjualan, pembelian, timecards dan pembayaran mempunyai peran berbeda; integrasi tidak berarti semua event adalah kas.',ref:'Richardson AIS 4e, Ch.10, Exhibit 10.8 dan Summary, PDF 408-410'},
  31:{options:[
    'Mengurangi volume data dengan menghapus seluruh riwayat setelah laporan ditutup.',
    'Menelusuri pelaku, waktu dan perubahan transaksi untuk pemeriksaan bukti serta kontrol.',
    'Menghilangkan kebutuhan otorisasi karena setiap transaksi sudah tercatat dalam sistem.',
    'Membuktikan isi transaksi benar hanya dari urutan waktu pencatatan dokumen dalam sistem.',
  ],explanation:'Jejak audit mendukung penelusuran transaksi dan perubahan. Integritas catatan perlu pengendalian akses; jejak saja tidak membuktikan keberadaan, hak atau nilai transaksi.',ref:'Richardson AIS 4e, Ch.11-13, Internal Controls dan Auditing AIS, PDF 411-433,475-488'},
  32:{q:'Kontrol preventif apa yang sesuai untuk membatasi penyalahgunaan jurnal manual dalam AIS?',options:[
    'Memberikan akses tanpa batas pada seluruh staf agar koreksi dapat dicatat secepatnya.',
    'Membatasi akses, memisahkan tugas dan mensyaratkan persetujuan serta bukti pendukung.',
    'Menghapus identitas pengguna setelah posting agar data pegawai terlindungi dari pemeriksa.',
    'Menyimpan jurnal tak seimbang sampai akhir tahun agar tim dapat memperbaiki semuanya.',
  ],explanation:'Akses yang dibatasi, pemisahan tugas, otorisasi dan bukti membatasi kesempatan manipulasi. Ambang persetujuan mengikuti risiko dan kebijakan; tidak ada larangan universal semua jurnal ke Kas pada sumber ini.',ref:'Richardson AIS 4e, Ch.11, Control Activities, PDF 411-433'},
  33:{options:[
    'Mengelompokkan akun secara konsisten untuk mencatat transaksi dan menyusun laporan.',
    'Mengelompokkan vendor menurut nama untuk mengizinkan pembayaran tanpa validasi.',
    'Mengelompokkan pengguna menurut unit kerja untuk menggantikan otorisasi transaksi.',
    'Mengelompokkan dokumen menurut tanggal untuk membuktikan nilai seluruh saldo akun.',
  ],explanation:'Bagan akun mendukung klasifikasi dan pengikhtisaran transaksi. Daftar akun tidak menggantikan master data, validasi atau kontrol akses.',ref:'Richardson AIS 4e, Ch.10, Develop Financial Statement Information, PDF 408-410'},
  34:{q:'Dalam integrated project Richardson, apa yang perlu dilakukan setelah data diimpor untuk menjaga keandalan query AIS?',options:[
    'Menyusun query dari tabel impor dahulu dan menggunakan nama pelanggan sebagai kunci.',
    'Menetapkan primary key, memeriksa tipe data, lalu menegakkan referential integrity.',
    'Menggabungkan seluruh event dalam satu tabel dan menetapkan tanggal sebagai kunci.',
    'Menyusun laporan dari tabel impor dahulu dan memeriksa hubungan setelah penutupan.',
  ],explanation:'PDF 409 mengharuskan koreksi data, primary key, tipe data dan struktur tabel yang efisien, kemudian relasi dengan referential integrity. Tanpa integritas referensial, keandalan query terpengaruh. Langkah ini memakai UML class diagram sebagai blueprint.',ref:'Richardson AIS 4e, Ch.10, Import Data into Access, Create Efficient Tables, and Set Relationships, PDF 408-409, Exhibit 10.9'},
};
for(const [key,change] of Object.entries(changes)){
  const q=questions[+key];if(change.q)q.q=change.q;if(change.options)q.options=change.options;
  q.explanation=`${change.explanation} Rujukan: ${change.ref}.`;
}
// Preserve the exact pre-UTS source and compatibility exports.
let source=fs.readFileSync(file,'utf8');const tree=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);
let target;
function walk(n){if(ts.isVariableDeclaration(n)&&n.name.getText(tree)==='SII306_QUIZ_UAS'&&n.initializer&&ts.isArrayLiteralExpression(n.initializer))target=n.initializer;ts.forEachChild(n,walk);}
walk(tree);if(!target)throw new Error('SIA UAS array missing');
source=source.slice(0,target.getStart(tree))+JSON.stringify(questions,null,2)+source.slice(target.getEnd());fs.writeFileSync(file,source);
console.log('SIA: nine options/context corrections, source boundaries, original keys and 35 UAS questions retained.');
