import type { Reading } from '../../../types';

const SVG_EOQ_COST_CURVES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL KUANTITAS PESANAN EKONOMIS (EOQ - ECONOMIC ORDER QUANTITY)</text>
  
  <!-- Axis -->
  <line x1="80" y1="180" x2="600" y2="180" stroke="#475569" stroke-width="1.5"/>
  <line x1="80" y1="55" x2="80" y2="180" stroke="#475569" stroke-width="1.5"/>
  <text x="70" y="60" fill="#94a3b8" font-size="9" text-anchor="end">Biaya (Rp)</text>
  <text x="600" y="195" fill="#94a3b8" font-size="9" text-anchor="end">Ukuran Pesanan (Q)</text>

  <!-- Carrying Cost Line -->
  <line x1="90" y1="170" x2="560" y2="70" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="565" y="70" fill="#38bdf8" font-size="9.5" font-weight="700">Carrying Costs = (Q/2) &times; C</text>

  <!-- Ordering Cost Curve -->
  <path d="M 90 70 Q 180 140 560 170" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="565" y="170" fill="#f59e0b" font-size="9.5" font-weight="700">Ordering Costs = (S/Q) &times; O</text>

  <!-- Total Cost Curve -->
  <path d="M 90 95 Q 300 160 560 95" fill="none" stroke="#34d399" stroke-width="3"/>
  <text x="300" y="105" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Total Inventory Costs (TIC)</text>

  <!-- EOQ point -->
  <circle cx="300" cy="125" r="5" fill="#f43f5e"/>
  <line x1="300" y1="125" x2="300" y2="180" stroke="#f43f5e" stroke-dasharray="3,3"/>
  <text x="300" y="195" fill="#f43f5e" font-size="10" font-weight="700" text-anchor="middle">EOQ</text>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Working Capital Management - Part II: Inventory & Short-Term Financing',
  ref: 'Brigham & Houston Ch. 16',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 12: Menguasai teknik manajemen persediaan (Economic Order Quantity / EOQ, Reorder Point / ROP, Safety Stock, Just-in-Time), strategi pendanaan modal kerja (Maturity Matching, Aggressive, Conservative), kredit dagang vendor (*Trade Credit*), serta instrumen pinjaman bank jangka pendek.',
  objectives: [
    'Memahami biaya-biaya terkait persediaan: Biaya Penyimpanan (*Carrying Costs*), Biaya Pemesanan (*Ordering Costs*), dan Biaya Kehabisan Stok (*Stockout Costs*).',
    'Menghitung Economic Order Quantity (EOQ): $EOQ = \\sqrt{\\frac{2 \\times S \\times O}{C}}$.',
    'Menentukan Titik Pemesanan Ulang (Reorder Point / ROP) dan fungsi Safety Stock.',
    'Membandingkan 3 pendekatan pendanaan modal kerja: Maturity Matching (Self-Liquidating), Aggressive Approach, dan Conservative Approach.',
    'Menghitung Biaya Nominal Tahunan dan Biaya Efektif dari melepas diskon kas kredit dagang (*Cost of Trade Credit*).',
    'Memahami instrumen pinjaman jangka pendek: Kredit Tanpa Jaminan (Line of Credit, Revolving Credit) dan Pinjaman Beragun (Pledging & Factoring Piutang).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Kurva Kuantitas Pesanan Ekonomis (EOQ Model)',
      svg: SVG_EOQ_COST_CURVES,
      caption: 'Gambar 12.1: Titik perpotongan biaya penyimpanan dan pemesanan yang meminimalkan Total Biaya Persediaan.'
    },

    { kind: 'h2', text: '1. Model Kuantitas Pesanan Ekonomis (EOQ Model)' },
    {
      kind: 'p',
      text: 'Model EOQ menentukan jumlah pesanan optimal ($Q^*$) yang meminimalkan **Total Biaya Persediaan (Total Inventory Costs - TIC)**:'
    },
    {
      kind: 'formula',
      text: 'EOQ = \\sqrt{\\frac{2 \\times S \\times O}{C}}',
      note: 'S = Jumlah unit penjualan/kebutuhan per tahun, O = Biaya per kali pesan, C = Biaya simpan per unit per tahun (C = P × c).'
    },
    {
      kind: 'table',
      headers: ['Parameter Persediaan', 'Rumus Matematis', 'Penjelasan'],
      rows: [
        ['Total Carrying Costs (TCC)', '$\\frac{Q}{2} \\times C$', 'Biaya sewa gudang, asuransi, kerusakan, dan opportunity cost dana persediaan rata-rata ($Q/2$).'],
        ['Total Ordering Costs (TOC)', '$\\frac{S}{Q} \\times O$', 'Biaya administrasi pemesanan, pengiriman, dan inspeksi barang masuk.'],
        ['Titik Pesan Ulang (Reorder Point - ROP)', '$\\text{ROP} = (\\text{Pemakaian Harian} \\times \\text{Lead Time}) + \\text{Safety Stock}$', 'Tingkat persediaan di gudang saat pesanan baru harus segera diterbitkan.']
      ],
      caption: 'Tabel 12.1: Komponen perhitungan persediaan optimal.'
    },

    { kind: 'h2', text: '2. Tiga Pendekatan Pendanaan Modal Kerja' },
    {
      kind: 'table',
      headers: ['Pendekatan Pendanaan', 'Mekanisme Struktur Utang', 'Profil Risiko & Imbal Hasil'],
      rows: [
        ['1. Maturity Matching (Self-Liquidating)', 'Aset tetap & aset lancar permanen didanai utang jangka panjang + ekuitas; aset lancar musiman didanai utang jangka pendek.', 'Risiko moderat, imbal hasil moderat (pendekatan ideal).'],
        ['2. Aggressive Approach', 'Seluruh aset musiman dan SEBAGIAN aset lancar permanen didanai dengan utang jangka pendek.', 'Biaya bunga lebih murah tetapi **Risiko Likuiditas & Refinansiasi SANGAT TINGGI**!'],
        ['3. Conservative Approach', 'Seluruh aset tetap, aset permanen, dan SEBAGIAN aset musiman didanai dengan modal jangka panjang.', 'Sangat aman dan bebas risiko gagal bayar, tetapi profitabilitas lebih rendah karena suku bunga jangka panjang lebih mahal.']
      ],
      caption: 'Tabel 12.2: Tiga strategi pembiayaan aset lancar.'
    },

    { kind: 'h2', text: '3. Pendanaan Jangka Pendek: Anjak Piutang (Factoring)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Pledging vs Factoring Piutang',
      text: '• **Pledging**: Menjaminkan piutang usaha sebagai agunan untuk memperoleh pinjaman bank (perusahaan tetap bertanggung jawab menagih piutang).\n• **Factoring (Anjak Piutang)**: Menjual putus piutang usaha kepada lembaga keuangan (*Factor*) dengan diskon tunai. Faktor mengambil alih seluruh risiko kredit macet (Without Recourse) atau sebagian risiko (With Recourse).'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 12' },
    {
      kind: 'ul',
      items: [
        '**EOQ Optimal**: Pada titik EOQ, Total Biaya Simpan (TCC) tepat sama dengan Total Biaya Pesan (TOC).',
        '**Cost of Trade Credit**: Menolak diskon kas 2/10 net 30 berbiaya setara bunga pinjaman 37,24% per tahun.',
        '**Maturity Matching**: Mencocokkan umur ekonomis aset dengan tanggal jatuh tempo liabilitas pembiayaannya.'
      ]
    }
  ]
};