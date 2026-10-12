import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { buildFinanceFigure } from './mnk102-visuals.mjs';

// Reviewable deltas. Book page numbers below were checked in the actual local PDFs.
const data = {};
const p = text => ({ kind: 'p', text });
const table = (headers, rows) => ({ kind: 'table', headers, rows });
function add(code, tm, source, finding, blocks) {
  (data[code] ??= {})[tm] = { source, finding, blocks: [
    { kind: 'h2', text: 'Hubungan konsep, penerapan, dan batas' }, ...blocks,
    p(`Rujukan audit: ${source}`),
  ] };
}
function example(title, question, answer, source) {
  return { kind: 'solution-reveal', title, prompt: question, blocks: [p(`${answer} Rujukan: ${source}`)] };
}
function graph(id, title, source, labels, panels, takeaway) {
  return buildFinanceFigure({ id, jenis: 'chart', judul: title, sumber: source,
    isi: JSON.stringify(labels), hubungan: 'Baca satuan pada kedua sumbu',
    'pesan utama': takeaway, 'versi HP': 'Panel sempit dengan label yang tetap terbaca',
    'alt text': `${title}. ${takeaway}`, data: JSON.stringify({ panels }) });
}

const k = 'Kieso, Intermediate Accounting IFRS 5e';
add('AKK201',8,`${k}, Appendix 6A, Illustration 6A.1-6A.2, PDF 555-557`,
  'Belum ada visual rekonsiliasi; bedakan koreksi bank dari jurnal perusahaan.', [
    table(['Sisi bank','Sisi buku'],[['Setoran dalam perjalanan: tambah','Tagihan bank belum dicatat: tambah'],['Cek beredar: kurang','Biaya bank dan NSF: kurang'],['Kesalahan bank: koreksi bank','Kesalahan buku: koreksi buku']]),
    example('Nugget: pertemuan dua saldo sumber','Mengapa hanya sebagian pos memerlukan jurnal perusahaan?',
      'Bank: 22.190 + 3.680 - 150 - 4.820 - 31 + 175 = 21.044 USD. Buku: 20.502 + 600 - 18 - 220 + 180 = 21.044 USD. Koreksi cek 311 menjadi 131 menambah kas 180 USD. Pos waktu pada sisi bank tidak dijurnal ulang; transaksi yang belum dicatat dan kesalahan buku memerlukan jurnal.',`${k}, PDF 555-557`),
  ]);
add('AKK201',9,`${k}, Illustration 6.6, PDF 532-533`,
  'Target allowance berbeda dari beban penyesuaian; umur piutang perlu dilihat bersama tarif.', [
    graph('AKK201-AGING','Wilson: kontribusi tiap umur piutang',`${k}, Illustration 6.6 PDF 533. Angka euro asli; umur ditampilkan sebagai kelompok diskret.`,
      ['Saldo target 26.610 euro','Saldo kredit awal mengurangi beban','Saldo debit awal menambah beban'],[
        { title:'Kerugian estimasian per kelompok umur',xlabel:'Kelompok umur (nomor)',ylabel:'Allowance (euro)',xmin:1,xmax:5,ymin:0,ymax:15000,discrete:true,series:[{label:'1 <30; 2 30-60; 3 61-90',points:[[1,2760],[2,4600],[3,2700],[4,2800],[5,13750]]}] },
      ],'Kelompok 4 adalah 91-120 hari, kelompok 5 di atas 120 hari. Tingkat kerugian meningkat, tetapi kontribusi juga bergantung pada saldo.'),
    p('Target = 345.000 × 0,8% + 115.000 × 4% + 18.000 × 15% + 14.000 × 20% + 55.000 × 25% = 26.610 euro. Dengan allowance kredit awal 800 euro, beban 25.810 euro; dengan debit awal 200 euro, beban 26.810 euro. Tarif mempertimbangkan pengalaman, keadaan kini dan prakiraan yang dapat didukung.'),
  ]);
add('AKK201',10,`${k}, Ch.7, Goods Included in Inventory dan Costs Included in Inventory, PDF 611-622`,
  'Keberadaan fisik perlu dipisahkan dari kepemilikan/pengendalian dan biaya siap jual.', [
    table(['Pertanyaan','Implikasi'],[['Barang di gudang milik pengirim konsinyasi?','Lokasi fisik tidak cukup untuk mengakui aset penerima.'],['Barang sedang dikirim?','Periksa syarat penyerahan dan perpindahan kendali.'],['Biaya membawa barang ke lokasi/kondisi sekarang?','Dapat masuk biaya persediaan jika memenuhi ketentuan.'],['Biaya penjualan atau administrasi umum?','Umumnya beban periode; jangan dikapitalisasi hanya karena dialokasikan.']]),
    p('Pada konsinyasi, pengirim tetap mengakui persediaan sampai penjualan kepada pelanggan. Penerima dapat memegang barang tanpa memiliki persediaan tersebut. Periksa kontrak jika syarat pengiriman atau hak pengembalian berbeda dari contoh buku.'),
  ]);
add('AKK201',11,`${k}, Illustration 7.7-7.10, PDF 623-627`,
  'Periodik dan perpetual memerlukan basis rata-rata berbeda.', [
    table(['Call-Mart, 6.000 unit akhir','Nilai akhir','HPP'],[['Specific identification sumber','26.700 euro','17.200 euro'],['Weighted average periodik: 43.900 / 10.000','26.340 euro','17.560 euro'],['FIFO: 4.000 × 4,40 + 2.000 × 4,75','27.100 euro','16.800 euro']]),
    p('Semua metode memakai barang tersedia 43.900 euro sehingga persediaan akhir + HPP = 43.900 euro. Rata-rata bergerak perpetual dihitung ulang pada pembelian; hasilnya dapat berbeda karena waktu penjualan. IFRS tidak mengizinkan LIFO sebagai formula biaya persediaan.'),
  ]);
const nrvSource=`${k}, Illustration 8.1-8.2, PDF 689-690`;
add('AKK201',12,nrvSource,'Belum ada kurva batas biaya dan NRV; kasus Mander perlu dibaca sebagai nilai bersih.',[
  graph('AKK201-NRV','Mander: batas biaya dan nilai bersih',`${nrvSource}. Kurva ilustratif dari rumus; hanya titik harga jual 1.000 euro memakai angka kasus buku.`,
    ['NRV = harga jual - 250 euro','Biaya awal 950 euro','Titik kasus: NRV 750 euro'],[
      {title:'Nilai persediaan menurut harga jual',xlabel:'Harga jual estimasian (euro)',ylabel:'Nilai per unit (euro)',xmin:250,xmax:1500,ymin:0,ymax:1300,series:[
        {label:'NRV: harga jual - 250',points:[[250,0],[750,500],[1000,750],[1200,950],[1500,1250]]},
        {label:'Biaya awal 950',points:[[250,950],[1500,950]]},
        {label:'Nilai dilaporkan: minimum',points:[[250,0],[750,500],[1000,750],[1200,950],[1500,950]]},
      ]},
    ],'Pada harga jual 1.000 euro, biaya penyelesaian 50 dan biaya jual 200 memberi NRV 750; penurunan nilai 200 euro.'),
  p('Pemulihan NRV pada persediaan yang sama dibatasi penurunan nilai sebelumnya. Nilai tercatat setelah reversal tetap paling rendah antara biaya awal dan NRV terbaru. Harga lain pada kurva adalah asumsi ilustrasi, dengan biaya penyelesaian dan biaya jual tetap.'),
]);
add('AKK201',13,`${k}, Illustration 8.13 dan 8.19, PDF 703-704 dan 710-712`,
  'Basis persentase markup sering tertukar; retail perlu membedakan perlakuan markdown.',[
    example('Cetus: laba kotor dan persediaan estimasian','Hitung persediaan jika laba kotor 30% dari penjualan.',
      'Barang tersedia 60.000 + 200.000 = 260.000 euro. HPP = 280.000 × 70% = 196.000 euro. Persediaan estimasian = 64.000 euro. Jika 30% adalah markup atas biaya, persentase laba atas penjualan menjadi 30/130; hasilnya berbeda. Metode ini bergantung pada pola margin yang representatif.',`${k}, Illustration 8.13 PDF 703`),
    p('Pada conventional retail, markdown tidak dimasukkan dalam denominator rasio cost-to-retail, tetapi tetap mengurangi barang tersedia pada harga retail untuk menghitung persediaan retail akhir. Periksa metode yang diminta; rasio average-cost retail berbeda.'),
  ]);
add('AKK201',14,`${k}, Ch.6-8; modul tutor lokal UAS AKM1 TM8-14 PDF 2-13`,
  'Prioritas tutor perlu dibedakan dari bukti arsip ujian.',[
    table(['Kontrol jawaban','Pemeriksaan'],[['Rekonsiliasi','Saldo bank disesuaikan sama dengan buku disesuaikan.'],['Allowance','Saldo target berbeda dari beban perubahan akun.'],['Inventory cost flow','HPP + persediaan akhir = barang tersedia.'],['LCNRV','Nilai tiap item memakai biaya dan NRV pada basis sama.'],['Estimasi retail/gross profit','Persentase, markup/markdown dan basis harga dinyatakan.']]),
    p('Prioritas ini merupakan perkiraan dari cakupan bab dan modul tutor. Arsip lokal UTS tidak membuktikan bentuk atau bobot UAS. Latihan yang menggunakan data buatan tetap perlu menyebutkan asumsi dan satuan.'),
  ]);

const c='Carter, Cost Accounting 14e';
add('AKM201',8,`${c}, hal.8-12 sampai 8-13, PDF 242-243`,
  'Kos bersama untuk alokasi tidak menjadi dasar keputusan proses lanjut.',[
    example('Produk B: keputusan proses lanjut dari sumber','Bandingkan penjualan saat split-off dan setelah proses lanjut.',
      'Pendapatan saat split-off 60.000 USD, setelah proses 75.000 USD, tambahan biaya 10.000 USD. Tambahan kontribusi = 75.000 - 60.000 - 10.000 = 5.000 USD. Biaya bersama sudah terjadi pada titik keputusan sehingga tidak mengubah selisih ini. Keputusan juga memeriksa kapasitas dan apakah biaya 10.000 dapat dihindari.',`${c}, hal.8-13 PDF 243`),
  ]);
const eoq=[100,200,300,400,Math.sqrt(200000),500,600,800,1000];
add('AKM201',9,`${c}, hal.9-5 dan 9-11 sampai 9-12, PDF 260,266-267`,
  'EOQ perlu menyebutkan biaya relevan, unit per tahun dan asumsi permintaan.',[
    graph('AKM201-EOQ','EOQ: biaya pesan dan biaya simpan',`${c}, hal.9-11 sampai 9-12 PDF 266-267. Angka ilustratif buatan: D 10.000 unit/tahun, S Rp20.000/pesanan, H Rp2.000/unit/tahun.`,
      ['Biaya pesan = DS/Q','Biaya simpan = HQ/2','EOQ dibulatkan 447 unit'],[
        {title:'Jumlah pesan dan biaya tahunan',xlabel:'Q (unit per pesanan)',ylabel:'Biaya (juta Rp per tahun)',xmin:100,xmax:1000,ymin:0,ymax:2.5,series:[
          {label:'Biaya pesan',points:eoq.map(q=>[q,200/q])},
          {label:'Biaya simpan',points:eoq.map(q=>[q,q/1000])},
          {label:'Jumlah keduanya',points:eoq.map(q=>[q,200/q+q/1000])},
        ]},
      ],'Q optimum kontinu = akar(2DS/H) = 447,21 unit; jumlah biaya relevan minimum sekitar Rp894.427 per tahun.'),
    p('Model memakai permintaan tetap, pengisian sekaligus, tanpa stockout atau diskon kuantitas. H dan S hanya memuat biaya yang berubah karena keputusan; sewa gudang tetap tidak otomatis relevan. Total di grafik tidak memasukkan harga pembelian yang tetap. Pembulatan jumlah pesanan mengikuti kebijakan operasional.'),
  ]);
add('AKM201',10,`${c}, hal.11-4, PDF 320`,
  'Produktivitas tenaga kerja dan biaya per unit harus dibedakan.',[
    example('Insentif upah: jam dan unit dari sumber','Mengapa upah per jam meningkat tetapi biaya per unit turun?',
      'Sebelum insentif: Rp6 diganti USD6 per jam pada contoh buku, 5 unit per jam, biaya tenaga kerja 1,20 USD/unit. Sesudah: 6,60 USD per jam dan 6 unit per jam, biaya 1,10 USD/unit. Tarif per jam naik 10%, output per jam naik 20%. Buku juga memisahkan komponen bahan dan overhead; keputusan tetap menjaga kualitas dan keselamatan.',`${c}, hal.11-4 PDF 320`),
  ]);
// Correct the teaching example's currency before writing the package.
data.AKM201[10].blocks[1].blocks[0].text=data.AKM201[10].blocks[1].blocks[0].text.replace('Rp6 diganti USD6 per jam pada contoh buku','6 USD per jam');
add('AKM201',11,`${c}, hal.12-3 PDF 364; modul tutor lokal FOH PDF 11-12`,
  'Tarif rencana, overhead aktual dan selisih memakai basis aktivitas berbeda.',[
    table(['Ukuran','Cara hitung'],[['Tarif ditentukan di awal','Anggaran overhead / anggaran dasar aktivitas'],['Overhead dibebankan','Tarif rencana × aktivitas aktual'],['Selisih underapplied','Overhead aktual lebih besar dari dibebankan']]),
    p('Contoh modul tutor: aktual Rp438.000, dibebankan Rp425.250, selisih kurang dibebankan Rp12.750. Penutupan ke HPP atau prorata akun bergantung materialitas dan ketentuan soal. Pemilihan jam mesin, jam tenaga kerja atau driver lain harus menjelaskan penyebab overhead, bukan memilih denominator agar tarif kecil.'),
  ]);
add('AKM201',12,`${c}, Ch.13, PDF 389-430; modul tutor lokal departementalisasi PDF 6-10`,
  'Metode alokasi jasa mempunyai batas timbal balik berbeda.',[
    table(['Metode','Jasa antardepartemen jasa'],[['Langsung','Diabaikan; alokasikan ke produksi.'],['Bertahap','Sebagian diakui; departemen yang sudah ditutup tidak menerima alokasi balik.'],['Resiprokal','Diakui melalui persamaan simultan.']]),
    p('Jangan menafsirkan hasil alokasi sebagai biaya marginal keputusan. Pada metode bertahap, urutan penutupan mengubah hasil sehingga dasar urutan harus dinyatakan. Tarif departemen produksi dihitung setelah menerima biaya jasa dengan denominator aktivitasnya sendiri.'),
  ]);
add('AKM201',13,`${c}, Ch.14, PDF 431-435`,
  'ABC harus memisahkan pemicu aktivitas dari jumlah produk.',[
    table(['Tahap','Pemeriksaan'],[['Kumpulkan biaya per aktivitas','Pool biaya konsisten dengan definisi aktivitas.'],['Tentukan driver dan tarif','Biaya pool / kapasitas atau jumlah driver sesuai soal.'],['Bebankan produk','Tarif × konsumsi driver produk.']]),
    p('Dua produk dengan unit sama dapat memakai jumlah setup berbeda. Ilustrasi buatan: pool setup Rp12 juta, 30 setup, tarif Rp400.000/setup. Produk A memakai 5 setup, alokasi Rp2 juta; B 25 setup, Rp10 juta. Total Rp12 juta. Driver dipilih berdasarkan hubungan sebab biaya; banyak driver tidak otomatis membuat model lebih akurat.'),
  ]);
add('AKM201',14,`${c}, Ch.8-14; Soal Kuis Pra-UAS Akuntansi Biaya 2026 PDF 1-8`,
  'Arsip kuis memberi bentuk latihan, tidak menjamin soal UAS.',[
    table(['Topik','Kontrol numerik'],[['Joint cost','Alokasi semua produk menjumlah ke total pool; keputusan memakai selisih.'],['Bahan/upah','Pisahkan unit, jam, tarif, dan biaya per periode.'],['FOH','Tarif anggaran × aktivitas aktual; rekonsiliasi dengan aktual.'],['Departemen/ABC','Total biaya yang dialokasikan tidak hilang atau dihitung dua kali.']]),
    p('Arsip kuis pra-UAS 2026 dibaca sebagai bukti latihan, dengan tahun dan identitas dokumen tetap dicatat. Bobot ujian akhir belum dibuktikan dari arsip UAS yang dapat dibaca lengkap; soal spreadsheet UAS 2022 memerlukan pemeriksaan terpisah.'),
  ]);

const pride='Pride, Foundations of Business 6e';
const business=[
  [8,'Ch.9-10, PDF 259-301','Maslow dan Herzberg tidak memberi satu ukuran motivasi yang berlaku untuk semua orang.',table(['Pemicu','Pertanyaan HR'],[['Kebutuhan/hygiene','Apakah upah, kondisi kerja dan kebijakan memadai?'],['Motivator','Apakah pekerjaan memberi prestasi, tanggung jawab dan pengembangan?'],['Evaluasi','Apakah bukti produktivitas, retensi dan kualitas mendukung tindakan?']])],
  [9,'Ch.11, PDF 320-344','STP perlu mendahului kombinasi 4P; segmentasi tidak sama dengan memilih target.',table(['Langkah','Hasil'],[['Segmentation','Kelompok kebutuhan atau karakteristik pasar.'],['Targeting','Kelompok yang dipilih dengan ukuran dan kemampuan layanan.'],['Positioning','Nilai pembeda yang ingin dipahami pelanggan.'],['Marketing mix','Produk, harga, saluran dan promosi yang konsisten dengan target.']])],
  [10,'Ch.12, Figure 12-1, hal.331, PDF 349-351','Diagram product life cycle belum tersedia sebagai kurva penjualan dan laba.',null],
  [11,'Ch.13, Figure 13-1, hal.363-364, PDF 381-382','Saluran distribusi dan supply chain mempunyai ruang lingkup berbeda.',table(['Bentuk saluran','Implikasi'],[['Produsen ke konsumen','Kendali kontak lebih langsung; produsen menanggung fungsi saluran.'],['Produsen ke perantara ke konsumen','Perantara dapat mengurangi biaya transaksi dan memperluas jangkauan.'],['Supply chain','Mengelola aliran barang, informasi dan dana antarpihak.']])],
  [12,'Ch.14, hal.414-425, PDF 432-443','Pencapaian media sosial memerlukan tujuan dan ukuran hasil, bukan jumlah unggahan.',table(['Rencana','Ukuran'],[['Tujuan','Nyatakan layanan, awareness, penjualan atau retensi.'],['Audiens dan kanal','Cocokkan kebiasaan pengguna dengan kapasitas layanan.'],['Pelaksanaan','Tetapkan tanggung jawab, anggaran dan keamanan akses.'],['Pengukuran','Bedakan impresi, tindakan dan hasil bisnis; evaluasi biaya.']])],
  [13,'Ch.15, hal.434-440, PDF 452-458','Informasi mengurangi ketidakpastian jika relevan dan dapat dipercaya.',table(['Data ke keputusan','Kontrol'],[['Kumpulkan dan simpan','Otorisasi akses, validasi dan ketepatan waktu.'],['Olah menjadi informasi','Definisi ukuran konsisten dan asal data dapat ditelusuri.'],['Gunakan dan evaluasi','Pengguna memahami batas data; hasil ditinjau kembali.']])],
  [14,'Ch.16, hal.467-481, PDF 485-499','Laba akrual, anggaran kas dan kebutuhan pendanaan perlu dipisahkan.',table(['Kondisi','Tindakan'],[['Penjualan kredit meningkat','Periksa waktu penagihan, bukan menyamakan penjualan dengan kas.'],['Kebutuhan musiman','Bandingkan biaya, tenor dan risiko pembaruan utang.'],['Investasi berumur panjang','Rencanakan sumber pendanaan yang sesuai kemampuan membayar.']])],
];
for(const [tm,ref,finding,t] of business)add('MNU101',tm,`${pride}, ${ref}; RPS 2026 minggu ${tm}`,finding,[
  p(finding),...(t?[t]:[]),p('Prioritas belajar ini diperkirakan dari RPS dan bab buku. Kasus Chobani, Dunkin, Domino, FedEx dan Zappos pada rencana kuliah tidak membuktikan bahwa kasus yang sama akan menjadi soal ujian akhir.'),
]);
data.MNU101[10].blocks.splice(2,0,graph('MNU101-PLC','Siklus hidup produk: penjualan dan laba',`${pride}, Figure 12-1, PDF 349. Skematis; waktu dan nilai memakai indeks buatan, tanpa data penjualan perusahaan.`,
  ['Laba dapat negatif saat pengenalan','Laba memuncak sebelum penjualan','Durasi tiap tahap tidak tetap'],[
    {title:'Penjualan dan laba sepanjang siklus',xlabel:'Waktu (indeks skematis)',ylabel:'Nilai (indeks skematis)',xmin:0,xmax:10,ymin:-20,ymax:100,series:[
      {label:'Penjualan',points:[[0,0],[1,7],[2,20],[3,45],[4,70],[5,88],[6,93],[7,85],[8,60],[9,30],[10,8]]},
      {label:'Laba',points:[[0,-15],[1,-12],[2,3],[3,25],[4,43],[5,37],[6,29],[7,21],[8,12],[9,4],[10,0]]},
    ]},
  ],'Tahap pengenalan, pertumbuhan, kedewasaan dan penurunan adalah pola analisis. Penjualan yang naik tidak selalu berarti laba ikut naik.'));

const ethics=[
  [8,'Sia (2008) hal.702-709, PDF 2-8; Juliyani (2016) hal.66-69, PDF 4-7','Rujukan RPS saja belum cukup untuk membedakan posisi analitis dari nilai agama.',table(['Aksioma Juliyani','Penerapan akuntan, ilustrasi buatan'],[['Kesatuan','Konsistensi antara keyakinan dan tindakan profesional.'],['Keseimbangan','Menilai hak pemilik, pekerja dan pihak terdampak.'],['Kehendak bebas','Memilih tindakan dengan batas tanggung jawab.'],['Tanggung jawab','Menjelaskan keputusan dan memperbaiki dampak.'],['Kebajikan','Mengejar manfaat dengan kejujuran, bukan hanya kepatuhan minimum.']])],
  [9,'RPS PDF 5; Byars dan Stanberry, Business Ethics Ch.8, bagian 8.1-8.5','DEI belum mencakup seluruh topik hak pada RPS.',table(['Topik RPS','Analisis kasus'],[['Kemampuan dan keyakinan berbeda','Hubungkan kebutuhan akomodasi dengan tugas dan keselamatan.'],['Identitas dan orientasi','Uji penghormatan, privasi dan kriteria kompetensi.'],['Ketimpangan pendapatan','Jelaskan dasar kompensasi dan peluang.'],['Hak hewan','Bedakan kewajiban hukum, kesejahteraan dan argumen moral.']])],
  [10,'Ngoo, Tiong dan Pok (2015), hal.98-104, Table 1-2 PDF 3-6; Kavanagh dan Drennan (2008)','Hasil survei bukan ranking kemampuan yang berlaku universal.',p('Ngoo dkk. membandingkan persepsi pemberi kerja dan lulusan di Malaysia. Selisih prioritas dan signifikansi statistik perlu dibedakan dari kemampuan aktual atau hubungan sebab. Pada survei mahasiswa, nyatakan populasi, cara memilih responden, pertanyaan dan ukuran penilaian sebelum menarik kesimpulan. Penerapan ke pasar Indonesia memerlukan bukti lokal.')],
  [11,'Felo (2011), hal.281-296, PDF 310-325 pada buku Brink lengkap; RPS PDF 6','TARIF belum menggantikan enam mekanisme tata kelola yang ditugaskan.',table(['Mekanisme RPS','Risiko yang diuji'],[['Keterlibatan dewan dalam kode etik','Apakah pengawasan diterapkan atau hanya simbolis?'],['Independensi dan CEO duality','Konflik kepentingan serta kualitas informasi ke dewan.'],['Kompensasi dan pemilihan direktur','Insentif, horizon keputusan dan akuntabilitas.'],['Auditor eksternal','Mutu bukti dan independensi; audit tidak menjamin semua fraud ditemukan.']])],
  [12,'Oberer dan Erkollar (2018), hal.409-410, PDF 6-7; Othman dan Rahman (2014), Table 2-3, hal.367 PDF 8','Leadership 4.0 perlu menghubungkan perhatian manusia dan inovasi.',table(['Dimensi','Bukti perilaku'],[['Inovasi/teknologi','Mendukung eksperimen, pembelajaran dan perubahan proses.'],['Manusia','Memberi dukungan, kesempatan berpartisipasi dan pengembangan.'],['Etika','Keterbukaan konflik kepentingan, kejujuran dan akuntabilitas.']])],
  [13,'Siriwardane, Low dan Blietz (2015), hal.338-340, Table 2-5 PDF 7-9','Tugas, keterampilan dan atribut komunikasi masih tercampur.',table(['Kategori','Contoh dari studi'],[['Tugas','Menyiapkan kertas kerja dan pesan elektronik.'],['Keterampilan','Mendengarkan, membaca, parafrasa dan membedakan fakta/inferensi.'],['Atribut','Kejelasan dan kesesuaian komunikasi dengan penerima.']])],
  [14,'RPS PDF 7, kuliah tamu; integrasi sumber TM8-13','TM14 sebenarnya kuliah tamu; ringkasan praktisi tidak tersedia.',p('RPS menempatkan perspektif praktisi pada kuliah tamu. Integrasi berikut adalah latihan buatan sampai catatan kuliah tamu tersedia: temuan faktur tidak wajar memerlukan bukti dan prinsip etika, pemimpin memastikan jalur eskalasi, lalu komunikasi memisahkan fakta, dugaan, dampak dan tindakan. Jangan menyebut dugaan sebagai fraud yang sudah terbukti.')],
];
for(const [tm,source,finding,b] of ethics)add('AKA103',tm,source,finding,[p(finding),b]);

const m='Mankiw, Principles of Economics, Ch.';
const econ=[
  [8,`${m}23, bagian 23-3, hal.473-476 PDF 510-513`,'GDP expenditure perlu membedakan barang akhir dari transaksi keuangan.',p('Y = C + I + G + NX adalah identitas pengeluaran atas produksi domestik. Pembelian saham merupakan transaksi aset keuangan, sedangkan investasi I meliputi modal fisik, bangunan baru dan perubahan persediaan. Impor dikurangkan agar pengeluaran C/I/G yang memuat produksi asing tidak menambah GDP domestik.')],
  [9,'Samuelson dan Nordhaus, Economics, Ch.21, fungsi konsumsi dan tabungan; slide lokal Closed Economy','Break-even rumah tangga berbeda dari keseimbangan output seluruh ekonomi.',p('Pada C = a + bY, titik C = Y berarti tabungan nol. Itu belum menunjukkan keseimbangan makro karena investasi, pemerintah atau sektor luar negeri dapat menambah pengeluaran. MPC = perubahan C / perubahan Y; MPS = 1 - MPC pada identitas disposable income yang sama. Nyatakan pajak jika pendapatan bruto dipakai.')],
  [10,'Samuelson dan Nordhaus, Economics, Ch.22, model multiplier; slide lokal Closed Economy','Multiplier sederhana perlu batas harga tetap dan sumber kebocoran.',p('Pada model harga tetap tanpa pajak proporsional dan impor, multiplier = 1/(1-MPC). Ilustrasi buatan MPC 0,75 memberi multiplier 4; tambahan pengeluaran otonom 20 miliar rupiah menaikkan output keseimbangan 80 miliar rupiah. Ini hasil model, dengan kapasitas menganggur dan investasi/komponen lain tetap; pajak, impor dan respons bunga dapat mengurangi hasil.')],
  [11,`${m}26, hal.537-542 PDF 574-579; Ch.29 bagian 29-3 PDF 634-638`,'Pasar dana pinjaman belum mempunyai grafik yang dapat dibaca pada ponsel.',p('Saving S = Y - C - G pada ekonomi tertutup sama dengan I secara akuntansi. Suku bunga pada pasar dana pinjaman adalah tingkat riil yang menyeimbangkan penawaran saving dan permintaan investment. Identitas tidak berarti setiap rumah tangga menabung sebesar investasinya. Multiplier deposito 1/R adalah model dengan seluruh dana disimpan dan tidak ada excess reserves, bukan batas mekanis seluruh sistem keuangan nyata.')],
  [12,`${m}31-32, PPP dan pasar valas; hal.653-656 PDF 690-693`,'Konvensi kuotasi kurs perlu disebut sebelum menyimpulkan apresiasi.',p('Jika kurs ditulis mata uang asing per unit domestik, kenaikan berarti apresiasi domestik. Jika ditulis rupiah per unit asing, kenaikan berarti depresiasi rupiah. Rumus kurs riil mengikuti konvensi yang dipilih. PPP membandingkan daya beli barang; biaya perdagangan, barang tidak diperdagangkan dan perbedaan barang membatasi penerapannya.')],
  [13,`${m}35, bagian 35-2d, hal.753-754 PDF 790-791`,'Phillips curve perlu membedakan perubahan sepanjang kurva dari pergeseran ekspektasi.',p('Pada ekspektasi inflasi tetap, kejutan permintaan dapat membawa pengangguran dan inflasi bergerak sepanjang Phillips curve jangka pendek. Perubahan ekspektasi atau supply shock menggeser kurva. Dalam model natural rate, kurva jangka panjang vertikal; inflasi tinggi tidak memberi pengangguran rendah secara permanen.')],
  [14,`${m}25, bagian 25-3b, hal.513-514 PDF 550-551`,'Diminishing returns bukan penurunan level output saat modal naik.',p('Dengan tenaga kerja dan teknologi tetap, tambahan modal masih meningkatkan output, tetapi tambahan output per unit modal makin kecil. Catch-up bergantung pada kondisi teknologi, institusi dan investasi, sehingga negara berpendapatan rendah tidak otomatis tumbuh cepat. Perubahan teknologi dapat menggeser fungsi produksi.')],
];
for(const [tm,source,finding,b] of econ)add('EKT109',tm,source,finding,[p(finding),b]);
data.EKT109[11].blocks.splice(2,0,graph('EKT109-LOANABLE','Dana pinjaman: pertemuan saving dan investment',`${m}26, Figure 1, hal.538 PDF 575. Titik buku r 5% dan 1.200 miliar USD dipertahankan; titik lain kurva adalah skematis, tanpa persamaan estimasi buku.`,
  ['Bunga riil menyeimbangkan pasar','Titik sumber 1.200 miliar USD, 5%','Garis lain adalah skematis'],[
    {title:'Pasar dana pinjaman',xlabel:'Dana (miliar USD)',ylabel:'Bunga riil (% per tahun)',xmin:0,xmax:2400,ymin:0,ymax:10,series:[
      {label:'Penawaran saving (skematis)',points:[[300,1.5],[1200,5],[2100,8.5]]},
      {label:'Permintaan investment (skematis)',points:[[300,8.5],[1200,5],[2100,1.5]]},
    ]},
  ],'Pada bunga di bawah 5%, permintaan melebihi penawaran pada gambar ini; tekanan penyesuaian menaikkan bunga.'));

const os='https://openstax.org/books/principles-managerial-accounting/pages/';
const mgmt=[
  [8,'12-3-evaluate-an-operating-segment-or-a-project-using-return-on-investment-residual-income-and-economic-value-added','ROI memakai rasio, RI memakai nilai uang dan hurdle rate yang dinyatakan.',p('Ilustrasi buatan: aset rata-rata Rp100 juta dan laba operasi Rp20 juta memberi ROI 20%. Proyek Rp20 juta memberi laba Rp3,6 juta, ROI 18%. ROI gabungan menjadi 23,6/120 = 19,67%, tetapi tambahan RI pada hurdle 15% adalah 3,6 - 3 = Rp0,6 juta. Jangan membandingkan RI dua divisi berukuran berbeda tanpa konteks aset dan risikonya.')],
  [9,'9-4-describe-the-effects-of-various-decisions-on-performance-evaluation-of-responsibility-centers','Opportunity cost kapasitas penuh harus dihitung per unit transfer, dengan biaya luar yang dihindari.',p('Ilustrasi buatan: biaya variabel Rp40 ribu/unit, harga luar Rp70 ribu, biaya jual luar Rp5 ribu yang tidak timbul pada transfer, batas pembeli Rp68 ribu. Kapasitas menganggur tanpa penggunaan alternatif: batas bawah 40 ribu. Kapasitas penuh dan satu unit transfer menggantikan satu penjualan luar: kontribusi hilang 25 ribu, batas bawah 65 ribu. Rentang kesepakatan 65-68 ribu. Batas atas bergantung penawaran luar yang sebanding.')],
  [10,'10-1-identify-relevant-information-for-decision-making','Sunk cost berbeda dari nilai peluang aset yang sudah dibeli.',p('Biaya pembelian historis mesin merupakan sunk cost. Namun nilai jual mesin sekarang adalah opportunity cost jika mesin tetap dipakai. Ilustrasi buatan: membuat komponen memakai biaya variabel Rp30 ribu dan biaya tetap dapat dihindari Rp5 ribu/unit; tawaran beli Rp32 ribu. Pembelian menghemat Rp3 ribu/unit jika kapasitas dan mutu setara; biaya tetap tak terhindarkan tidak dimasukkan lagi dalam selisih.')],
  [11,'10-2-evaluate-and-determine-whether-to-accept-or-reject-a-special-order','Harga berbasis biaya perlu membedakan markup atas biaya dan margin atas harga.',p('Ilustrasi buatan: harga Rp100 ribu dan margin target 20% dari harga memberi biaya target Rp80 ribu. Markup 20% atas biaya memberi harga 1,2 × biaya, sehingga biaya pada harga 100 ribu menjadi Rp83.333,33. Bedakan dasar persentase. Pesanan khusus memeriksa kapasitas, biaya tambahan dan dampak pada pasar reguler; harga di atas biaya variabel saja belum cukup pada kapasitas penuh.')],
  [12,'11-4-use-discounted-cash-flow-models-to-make-capital-investment-decisions','NPV perlu waktu kas, pajak, working capital dan batas IRR.',p('Ilustrasi buatan: investasi awal Rp100 juta, kas akhir tahun Rp60 juta selama dua tahun, diskonto 10% per tahun. NPV = -100 + 60/1,1 + 60/1,1² = Rp4,132 juta, dibulatkan tiga desimal. Sumber kas sudah setelah pajak; jangan menambah perisai depresiasi jika sudah dimasukkan. Pemulihan modal kerja dan nilai sisa ditempatkan pada waktunya. IRR dapat lebih dari satu pada kas yang berubah tanda berulang.')],
  [13,'ASQ: https://asq.org/quality-resources/cost-of-quality','Belanja pencegahan tidak otomatis menurunkan seluruh biaya secara drastis.',table(['Kelompok biaya','Contoh'],[['Pencegahan','Perencanaan mutu dan pelatihan.'],['Penilaian','Inspeksi dan pengujian.'],['Kegagalan internal','Scrap/rework sebelum produk diterima pelanggan.'],['Kegagalan eksternal','Garansi, retur dan dampak setelah penerimaan.']])],
  [14,'13-1-describe-sustainability-and-the-way-it-creates-business-value','Ukuran lingkungan perlu unit fisik dan biaya, dengan batas organisasi jelas.',p('Ilustrasi buatan: energi 50.000 kWh untuk 10.000 unit memberi intensitas 5 kWh/unit. Penurunan total energi karena produksi turun tidak membuktikan efisiensi meningkat. Bandingkan intensitas, total dampak, harga energi dan batas proses. Prioritas UAS pada aplikasi adalah perkiraan cakupan, sebab RPP/arsip ujian dan buku Garrison/Hansen yang ditetapkan belum tersedia untuk diverifikasi.')],
];
for(const [tm,ref,finding,b] of mgmt){const source=ref.startsWith('ASQ')?ref:`OpenStax, Principles of Accounting Volume 2, bagian ${ref.slice(0,4).replace(/-$/,'')}: ${os+ref}`;add('AKM301',tm,source,finding,[p(finding),b]);}
const rates=[0,5,10,15,20,25,30];
data.AKM301[12].blocks.splice(2,0,graph('AKM301-NPV','NPV berubah dengan tingkat diskonto',`Ilustrasi buatan pada investasi 100 juta dan kas 60 juta akhir tahun selama dua tahun. Rujukan metode: OpenStax Volume 2 bagian 11.4, ${os}11-4-use-discounted-cash-flow-models-to-make-capital-investment-decisions.`,
  ['Kas dan risiko proyek tetap','Diskonto memakai periode tahunan','NPV positif pada r 10%'],[
    {title:'Tingkat diskonto dan nilai proyek',xlabel:'Diskonto (% per tahun)',ylabel:'NPV (juta rupiah)',xmin:0,xmax:30,ymin:-20,ymax:25,series:[
      {label:'NPV ilustrasi',points:rates.map(r=>[r,-100+60/(1+r/100)+60/(1+r/100)**2])},
      {label:'NPV nol',points:[[0,0],[30,0]]},
    ]},
  ],'Diskonto yang naik menurunkan NPV pada arus masuk positif ini; hubungan dapat berbeda untuk pola kas lain.'));

const taxSources=[
  [8,'UU KUP Pasal 1 angka 25,26,30; PMK 15/2025 Pasal 1 angka 7-9; sumber DJP https://www.pajak.go.id/id/peraturan/pemeriksaan-pajak','Pemeriksaan lengkap, terfokus dan spesifik perlu dibedakan dari lokasi pemeriksaan.',table(['Jenis tindakan','Tujuan'],[['Penelitian','Uji administratif kelengkapan dan hitungan SPT.'],['Pemeriksaan','Uji kepatuhan atau tujuan lain; lingkup lengkap/terfokus/spesifik.'],['Bukti permulaan/penyidikan','Mekanisme dugaan tindak pidana dengan dasar dan prosedur tersendiri.']])],
  [9,'UU KUP Pasal 13,14,15,17,17B-17D','Jenis surat tidak menentukan jumlah pajak tanpa membaca dasar dan keputusan.',table(['Surat','Pertanyaan'],[['SKPKB/SKPKBT','Apa dasar koreksi dan periode pajaknya?'],['STP','Apa tagihan dan sanksi yang dinyatakan?'],['SKPLB/SKPN','Apa hasil penelitian/pemeriksaan dan status bayar?']])],
  [10,'UU KUP Pasal 25-27; UU Pengadilan Pajak Pasal 31,35,40','Objek dan forum menentukan jalur sengketa; jangan mencampur batas waktu.',table(['Jalur','Forum dan objek'],[['Keberatan','DJP, ketetapan/pemotongan yang dicakup KUP.'],['Banding','Pengadilan Pajak, keputusan keberatan.'],['Gugatan','Pengadilan Pajak, tindakan/keputusan yang dicakup undang-undang.'],['PK','Mahkamah Agung, alasan yang diatur undang-undang.']])],
  [11,'UU PPSP Pasal 1,8,12; PMK 61/2023 bagian tahapan penagihan','Alur penagihan biasa berbeda dari penagihan seketika dan sekaligus.',p('Tanggal latihan adalah ilustrasi urutan. Sebelum menghitung jadwal, tentukan tanggal jatuh tempo, pemberitahuan yang sah dan apakah kondisi penagihan seketika berlaku. Surat Paksa mempunyai kekuatan eksekutorial. Keberatan atas besarnya pajak dan gugatan atas tindakan penagihan memakai objek serta prosedur berbeda.')],
  [12,'UU 10/2020 Pasal 3,5,6,7,9','Nilai uang pada dokumen adalah batas objek tertentu, bukan dasar tarif persentase.',p('Bea Meterai memakai tarif tetap Rp10.000 per dokumen yang menjadi objek, dengan waktu terutang sesuai jenis dokumen. Batas nilai Rp5 juta pada dokumen tertentu yang menyatakan jumlah uang tidak menggantikan pemeriksaan objek dan pengecualian. Pembayaran meterai tidak otomatis membuktikan kebenaran isi atau keabsahan seluruh transaksi.')],
  [13,'UU 1/2022 Pasal 4,23,83,191; PP 35/2023','Opsen memakai pajak terutang sebagai dasar, dengan pemerintah penerima berbeda.',p('Opsen PKB/BBNKB 66% dihitung atas pokok PKB/BBNKB yang terutang sesuai aturan, bukan 66% dari nilai kendaraan. Ilustrasi buatan pokok PKB Rp1 juta memberi opsen Rp660 ribu. Periksa tanggal berlaku dan Perda; tarif maksimum nasional tidak boleh langsung dipakai sebagai tarif nyata semua daerah.')],
  [14,'UU 1/2022 Pasal 40-41,46-47,62-64,73-75; PDF resmi 39,43-44 https://jdih.kemenkeu.go.id/api/download/770ecf1d-664b-48a1-88f4-8849b8ca7258/1TAHUN2022UU.pdf','Nomor pasal Reklame dan MBLB pada materi lama belum dinyatakan pasti.',table(['Pajak','Dasar resmi'],[['Reklame','DPP Pasal 62, tarif maksimum 25% Pasal 63; tarif daerah ditetapkan Perda.'],['MBLB','DPP Pasal 73, tarif maksimum 20% Pasal 74; daerah provinsi tanpa kab/kota otonom maksimum 25%.'],['PBB-P2/BPHTB','Periksa pengurang, persentase basis dan Perda; jangan mengalikan NJOP/NPOP bruto begitu saja.']])],
];
for(const [tm,source,finding,b] of taxSources)add('PJK201',tm,source,finding,[p(finding),b]);

function studentText(blocks) {
  return blocks.map(b => [b.text ?? b.title ?? '', b.prompt ?? '', b.caption ?? '',
    ...(b.headers ? [b.headers.join(' | ')] : []),
    ...(b.rows ? b.rows.map(row => row.join(' | ')) : []),
    ...(b.blocks ? [studentText(b.blocks)] : []),
  ].filter(Boolean).join('\n\n')).join('\n\n');
}
for(const [code,tms] of Object.entries(data))for(const [tm,delta] of Object.entries(tms)){
  const dir=`content-pipeline/${code}/TM${String(tm).padStart(2,'0')}/audit-20261012`;fs.mkdirSync(dir,{recursive:true});
  const json=JSON.stringify({code,tm:+tm,...delta},null,2)+'\n';
  fs.writeFileSync(`${dir}/04_canonical_spec.json`,json);
  const hash=createHash('sha256').update(json).digest('hex');
  const layout=code==='AKM301'&&+tm===8?'\nKoreksi tampilan figure Balanced Scorecard lama: gunakan viewBox 0 0 900 340 dan latar height 320 pada src/data/akmen/modules/tm8.ts. Translasi kelompok y=60 membuat label terakhir melewati canvas lama. Pertahankan seluruh teks dan angka; periksa bounds label setelah transformasi.\n':'';
  fs.writeFileSync(`${dir}/04_canonical_spec.md`,`# ${code} TM${tm}: delta audit\n\nTemuan: ${delta.finding}\n\nSumber: ${delta.source}\n\nSpesifikasi 04 JSON SHA256: ${hash}\n${layout}`);
  fs.writeFileSync(`${dir}/05_student_learning_version.md`,`# ${code} TM${tm}\n\n${studentText(delta.blocks)}\n\nStruktur dan SVG lengkap tersimpan pada 04 JSON; angka, jawaban dan sumber dicantumkan di atas.\n`);
  fs.writeFileSync(`${dir}/06_implementation_brief.md`,`Tambahkan delta setelah blok lama melalui applyCourseAudit. Jangan mengubah objek pra-UTS. Gunakan 04 JSON dengan SHA256 ${hash}. Jangan menghitung tambahan cek ini sebagai perubahan jumlah kuis, flashcard atau bank soal.\n${layout}`);
  fs.writeFileSync(`${dir}/07_qa_manifest.md`,'Periksa rumus, data sumber, unit dan label ilustratif secara terpisah dari tes teknis. Batas sumber/arsip dicatat pada laporan audit. Hasil teknis ada di docs/audit-2026-10-12/verification.md.\n');
  fs.writeFileSync(`${dir}/00_status.md`,'Status: revisi terimplementasi, audit terbatas pada temuan dan sumber yang disebut. Tidak menyatakan seluruh mata kuliah lengkap.\n');
}
fs.mkdirSync('src/data/source-audit',{recursive:true});
fs.writeFileSync('src/data/source-audit/supplements.json',JSON.stringify(data,null,2)+'\n');
console.log(`Source deltas generated: ${Object.keys(data).length} courses, ${Object.values(data).reduce((n,t)=>n+Object.keys(t).length,0)} meetings.`);
