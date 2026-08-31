import type { Reading } from '../../../types';
import { CASE_TREASURY_DIVIDENDS } from '../akm2PracticeCases';

const SVG_EQUITY_STRUCTURE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KOMPONEN UTAMA EKUITAS PEMEGANG SAHAM (PSAK 50 / IAS 1)</text>
  
  <rect x="30" y="55" width="140" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="100" y="80" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Modal Saham</text>
  <text x="100" y="105" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Saham Biasa</text>
  <text x="100" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Saham Preferen</text>
  <text x="100" y="150" fill="#94a3b8" font-size="9" text-anchor="middle">(Dicatat sebesar</text>
  <text x="100" y="165" fill="#94a3b8" font-size="9" text-anchor="middle">Nilai Pari/Par Value)</text>

  <rect x="190" y="55" width="140" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="260" y="80" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. Agio Saham</text>
  <text x="260" y="105" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Share Premium</text>
  <text x="260" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Agio Treasuri</text>
  <text x="260" y="145" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Agio Konversi</text>
  <text x="260" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">(Selisih di atas pari)</text>

  <rect x="350" y="55" width="140" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="420" y="80" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">3. Saldo Laba</text>
  <text x="420" y="105" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Retained Earnings</text>
  <text x="420" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Akumulasi Laba</text>
  <text x="420" y="145" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Dikurangi Dividen</text>
  <text x="420" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">(Unappropriated/App)</text>

  <rect x="510" y="55" width="140" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="580" y="80" fill="#f43f5e" font-size="11" font-weight="700" text-anchor="middle">4. Kontra Ekuitas</text>
  <text x="580" y="105" fill="#fca5a5" font-size="9.5" font-weight="700" text-anchor="middle">• Saham Treasuri</text>
  <text x="580" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Mengurangi Total</text>
  <text x="580" y="140" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Ekuitas Neraca)</text>
  <text x="580" y="165" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• AOCI (Komprehensif)</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Ekuitas Pemegang Saham (Stockholders\' Equity)',
  ref: 'Kieso IFRS 5e Ch. 15 | PSAK 50, UU PT No. 40/2007',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 11: Menguasai struktur permodalan perseroan terbatas, penerbitan saham biasa & preferen, perlakuan Saham Treasuri (Cost Method), kebijakan pembagian dividen (Kas, Properti, Saham, Likuidasi), serta pemecahan saham (Stock Split).',
  objectives: [
    'Memahami 4 komponen utama Ekuitas: Modal Saham, Agio Saham (Share Premium), Saldo Laba (Retained Earnings), dan Penghasilan Komprehensif Lain (AOCI).',
    'Menjurnal penerbitan saham dengan nilai pari, tanpa nilai pari, dan penerbitan gabungan (Lump-Sum Shares).',
    'Membedakan hak istimewa Saham Preferen (Kumulatif vs Non-Kumulatif, Partisipasi vs Non-Partisipasi).',
    'Menguasai Metode Kos (Cost Method) dalam mencatat pembelian dan penjualan kembali Saham Treasuri.',
    'Memahami larangan pengakuan untung/rugi transaksi saham sendiri di Laporan Laba Rugi.',
    'Menjurnal deklarasi dividen kas, dividen saham (Small vs Large), dan membedakannya dari Stock Split.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Struktur 4 Pilar Komponen Ekuitas Pemegang Saham',
      svg: SVG_EQUITY_STRUCTURE,
      caption: 'Gambar 11.1: Komponen penambah dan pengurang (kontra akun) ekuitas di neraca.'
    },

    { kind: 'h2', text: '1. Karakteristik Ekuitas & Penerbitan Saham' },
    {
      kind: 'p',
      text: 'Ekuitas mewakili hak residual atas aset entitas setelah dikurangi seluruh liabilitas. Modal disetor (*Contributed Capital*) terdiri dari Modal Saham pada nilai pari ditambah Agio Saham (*Share Premium*) yang disetorkan investor melebihi nilai pari.'
    },

    { kind: 'h2', text: '2. Akuntansi Saham Treasuri (Treasury Shares - Cost Method)' },
    {
      kind: 'p',
      text: 'Saham Treasuri adalah saham perusahaan sendiri yang telah diterbitkan dan dibeli kembali dari pasar, tetapi tidak dibatalkan/dipensiunkan. Berdasarkan IFRS / PSAK 50, transaksi saham treasuri **TIDAK PERNAH MENIMBULKAN LABA/RUGI** di Laporan Laba Rugi:'
    },
    {
      kind: 'ul',
      items: [
        '**Pembelian Saham Treasuri**: Didebit sebesar kos perolehan kas aktual ke akun kontra ekuitas `Saham Treasuri`.',
        '**Penjualan di Atas Kos**: Selisih lebih kas di atas kos dikreditkan ke `Agio Saham - Saham Treasuri`.',
        '**Penjualan di Bawah Kos**: Defisit didebitkan terlebih dahulu ke saldo `Agio Saham - Saham Treasuri` yang ada hingga habis; jika masih kurang, sisa defisit didebitkan ke `Saldo Laba (Retained Earnings)`!'
      ]
    },

    CASE_TREASURY_DIVIDENDS,

    { kind: 'h2', text: '3. Kebijakan & Bentuk Dividen' },
    {
      kind: 'table',
      headers: ['Jenis Dividen', 'Dasar Pengukuran', 'Dampak pada Neraca & Ekuitas'],
      rows: [
        ['1. Dividen Kas (Cash Dividend)', 'Jumlah kas per lembar saham beredar.', 'Mengurangi Saldo Laba dan Kas (menimbulkan Utang Dividen saat deklarasi).'],
        ['2. Dividen Properti (Property Dividend)', 'Diukur pada **Nilai Wajar Aset Properti** pada tanggal deklarasi.', 'Keuntungan/kerugian penyesuaian nilai wajar diakui di Laba Rugi terlebih dahulu.'],
        ['3. Dividen Saham Kecil (< 20-25%)', 'Diukur pada **Nilai Wajar Pasar Saham**.', 'Reklasifikasi dari Saldo Laba ke Modal Saham (Par) dan Agio Saham.'],
        ['4. Dividen Saham Besar (> 20-25%)', 'Diukur pada **Nilai Pari Saham**.', 'Reklasifikasi dari Saldo Laba ke Modal Saham saja.'],
        ['5. Pemecahan Saham (Stock Split)', 'Tidak ada perubahan total nominal atau saldo ekuitas.', '**TIDAK ADA JURNAL**, hanya memo jumlah lembar bertambah dan nilai pari turun!']
      ],
      caption: 'Tabel 11.1: Perbandingan perlakuan akuntansi jenis dividen dan stock split.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 11' },
    {
      kind: 'ul',
      items: [
        '**Saham Treasuri**: Mengurangi Total Ekuitas; tidak menerima dividen kas.',
        '**Penjualan Saham Treasuri Rugi**: Debet Agio Treasuri sampai nol, sisanya debet Retained Earnings.',
        '**Dividen Kas**: Hanya dibayarkan untuk lembar saham yang **beredar** (Beredar = Diterbitkan - Treasuri).',
        '**Stock Split**: Menurunkan nilai pari dan melipatgandakan jumlah lembar tanpa mempengaruhi total ekuitas.'
      ]
    }
  ]
};