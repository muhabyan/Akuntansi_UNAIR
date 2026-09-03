import type { Reading } from '../../../types';
import { CASE_INVENTORY_TRADE_CREDIT } from '../mankeuPracticeCases';

const SVG_EOQ_COST_CURVE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk12" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk12)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">MODEL KUANTITAS PESANAN EKONOMIS: ECONOMIC ORDER QUANTITY (EOQ)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">INVENTORY MODEL</text>

  <!-- Left: Cost Curve Graph (Width 450px) -->
  <g transform="translate(65, 80)">
    <!-- Axes -->
    <line x1="40" y1="20" x2="40" y2="210" stroke="#94a3b8" stroke-width="2"/>
    <text x="30" y="20" fill="#f8fafc" font-size="8.5" font-weight="800" text-anchor="end">Total Biaya (Rp)</text>
    <line x1="40" y1="210" x2="410" y2="210" stroke="#94a3b8" stroke-width="2"/>
    <text x="410" y="228" fill="#f8fafc" font-size="8.5" font-weight="800" text-anchor="end">Kuantitas Pesanan (Q)</text>

    <!-- Carrying Cost Line (Linear Upward: H × Q/2) -->
    <line x1="40" y1="210" x2="380" y2="40" stroke="#38bdf8" stroke-width="2.5"/>
    <text class="text-accent-blue" x="385" y="45" fill="#38bdf8" font-size="8" font-weight="800">Biaya Simpan (Carrying Cost)</text>

    <!-- Ordering Cost Curve (Hyperbolic Downward: S × D/Q) -->
    <path d="M 55 50 Q 120 180 380 205" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
    <text class="text-accent-amber" x="385" y="205" fill="#fbbf24" font-size="8" font-weight="800">Biaya Pesan (Ordering Cost)</text>

    <!-- Total Cost Curve U-Shape -->
    <path d="M 65 75 Q 210 180 380 90" fill="none" stroke="#34d399" stroke-width="3"/>
    <text class="text-accent-green" x="385" y="90" fill="#34d399" font-size="9" font-weight="900">Total Biaya Persediaan (TC)</text>

    <!-- Optimal Point EOQ (Intersection) -->
    <line x1="210" y1="130" x2="210" y2="210" stroke="#f87171" stroke-dasharray="3 3"/>
    <line x1="40" y1="130" x2="210" y2="130" stroke="#f87171" stroke-dasharray="3 3"/>
    <circle cx="210" cy="130" r="6" fill="#f87171"/>
    <text class="text-accent-red" x="210" y="225" fill="#f87171" font-size="9" font-weight="900" text-anchor="middle">EOQ (Q*)</text>
    <text class="text-accent-red" x="35" y="134" fill="#f87171" font-size="8" font-weight="800" text-anchor="end">TC Min</text>
  </g>

  <!-- Right: Formula & Parameters Card -->
  <g transform="translate(540, 75)">
    <!-- Formula Box -->
    <rect class="svg-subcard" x="0" y="0" width="325" height="55" rx="8" fill="#1e293b" stroke="#34d399"/>
    <text class="text-accent-green" x="162" y="22" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">RUMUS KUANTITAS OPTIMAL (EOQ)</text>
    <text x="162" y="44" fill="#f8fafc" font-size="13" font-weight="900" text-anchor="middle">EOQ = √[ (2 × D × S) ÷ H ]</text>

    <!-- Parameter Items -->
    <rect class="svg-card" x="0" y="65" width="325" height="52" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="14" y="85" fill="#38bdf8" font-size="9" font-weight="800">D: Permintaan Tahunan (Annual Demand)</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="7.5">Total unit barang yang dibutuhkan perusahaan dalam 1 tahun.</text>

    <rect class="svg-card" x="0" y="125" width="325" height="52" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text class="text-accent-amber" x="14" y="145" fill="#fbbf24" font-size="9" font-weight="800">S: Biaya Pemesanan Per Order (Setup/Order Cost)</text>
    <text class="svg-text" x="14" y="162" fill="#cbd5e1" font-size="7.5">Biaya kurir, administrasi PO, ekspedisi, inspeksi barang masuk.</text>

    <rect class="svg-card" x="0" y="185" width="325" height="52" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="14" y="205" fill="#38bdf8" font-size="9" font-weight="800">H: Biaya Penyimpanan Per Unit/Tahun (Holding Cost)</text>
    <text class="svg-text" x="14" y="222" fill="#cbd5e1" font-size="7.5">Sewa gudang, listrik pendingin, asuransi, risiko usang/rusak.</text>
  </g>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Working Capital Management - Part II: Inventory Models & Short-Term Financing',
  ref: 'Brigham & Ehrhardt Ch. 16 | Model EOQ & Safety Stock | Biaya Kredit Perdagangan (Trade Credit) & Pinjaman Bank',
  intro: 'TM 12 membahas manajemen persediaan dan sumber pendanaan jangka pendek: Model Economic Order Quantity (EOQ), Reorder Point (ROP) dengan Safety Stock, biaya peluang mengabaikan diskon kredit dagang (Cost of Trade Credit 2/10 net 30), serta struktur pinjaman bank jangka pendek (Compensating Balances, Discount Interest, dan Line of Credit).',
  objectives: [
    'Menghitung kuantitas pesanan optimal (EOQ), frekuensi pemesanan, dan Total Inventory Costs (TIC).',
    'Menetapkan Reorder Point (ROP) dengan mempertimbangkan Lead Time dan Safety Stock.',
    'Menghitung Nominal Annual Rate dan Effective Annual Rate (EAR) dari biaya mengabaikan diskon kredit dagang.',
    'Menghitung suku bunga efektif pinjaman bank jangka pendek dengan syarat Compensating Balance.',
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 12.1: Kurva Biaya Total Model Kuantitas Pesanan Ekonomis (EOQ).',
      svg: SVG_EOQ_COST_CURVE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 12'
    },
    {
      kind: 'table',
      headers: ['Konsep Pengendalian', 'Formula Penentuan', 'Tujuan Manajerial', 'Jebakan Ujian Terpopuler'],
      rows: [
        ['Economic Order Quantity (EOQ)', '$EOQ = \\sqrt{\\frac{2 \\times D \\times S}{H}}$', 'Meminimalkan penjumlahan total Biaya Pemesanan dan Biaya Penyimpanan.', 'Pada titik EOQ, Total Biaya Pesan selalu SAMA PERSIS dengan Total Biaya Simpan.'],
        ['Reorder Point (ROP)', '$ROP = (\\text{Lead Time} \\times \\text{Daily Usage}) + \\text{Safety Stock}$', 'Menentukan kapan surat pesanan pembelian baru harus dikirimkan ke vendor.', 'Lupa menambahkan Safety Stock saat lead time atau permintaan harian bersifat fluktuatif.'],
        ['Cost of Trade Credit (Nominal)', '$r_{Nom} = \\frac{\\text{Discount}\\}{100 - \\text{Discount}\} \\times \\frac{365}{\\text{Net Period} - \\text{Discount Period}}$', 'Mengukur mahalnya biaya dana jika menolak diskon pembayaran cepat.', 'Mengabaikan diskon 2/10 net 30 menghasilkan biaya tahunan sangat mahal (> 37%).'],
        ['Compensating Balance', '$EAR = \\frac{\\text{Bunga Nominal Pinjaman}}{\\text{Plafon Pinjaman} - \\text{Saldo Mengendap (CB)}}$', 'Persyaratan bank menyisakan saldo kas minimum tanpa bunga di rekening.', 'Compensating balance menaikkan tingkat suku bunga efektif pinjaman secara signifikan.']
      ],
      caption: 'Tabel 12.0: Matriks rumus persediaan dan pendanaan jangka pendek.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: EOQ & Suku Bunga Efektif Kredit Dagang'
    },
    {
      kind: 'formula',
      text: `\\text{Total Inventory Cost (TIC)} = \\left(\\frac{D}{Q} \\times S\\right) + \\left(\\frac{Q}{2} \\times H\\right)
\\text{Cost of Forgoing Discount (EAR)} = \\left(1 + \\frac{\\text{Discount}\\}{100 - \\text{Discount}\\}}\\right)^{\\frac{365}{\\text{Days Credit} - \\text{Days Discount}}} - 1
\\text{Bank Loan with Compensating Balance (CB)}: \\quad EAR = \\frac{\\text{Nominal Interest Amount}}{\\text{Loan Amount} \\times (1 - CB\\%)}`,
      note: 'Perusahaan sebaiknya meminjam ke bank dengan bunga wajar (misal 10-14%) untuk mengambil diskon dagang 2/10 net 30 daripada membayar pada hari ke-30 (biaya > 44% EAR).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Pinjaman Bank dengan Syarat Compensating Balance',
      prompt: 'Perusahaan meminjam Rp 1.000.000.000 dari bank dengan bunga nominal 10% per tahun selama 1 tahun. Bank mensyaratkan 20% Compensating Balance yang harus mengendap di rekening giro tanpa bunga. Berapa suku bunga efektif tahunan (EAR) pinjaman tersebut?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Total Beban Bunga Nominal**: 10% × Rp 1.000.000.000 = **Rp 100.000.000**.',
            '**Dana Bersih yang Dapat Digunakan**: Plafon Pinjaman - Saldo Mengendap (20%) = Rp 1.000.000.000 - Rp 200.000.000 = **Rp 800.000.000**.',
            '**Suku Bunga Efektif (EAR)**: $EAR = \\frac{Rp 100.000.000}{Rp 800.000.000} = \\mathbf{12,50\\%}$.',
            '**Kesimpulan**: Syarat saldo mengendap 20% menaikkan biaya pinjaman riil dari nominal 10% menjadi efektif 12,50%.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 12'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Model Persediaan EOQ & ROP', 'Perhitungan kuantitas ekonomis, biaya simpan, biaya pesan, dan ROP.', 'Mampu menentukan titik pemesanan persediaan optimal.'],
        ['2', 'Biaya Kredit Perdagangan (Trade Credit)', 'Kalkulasi suku bunga nominal dan EAR syarat kredit 2/10 net 30/60.', 'Mampu membuat keputusan finansial mengambil vs menolak diskon kas.'],
        ['3', 'Struktur Pinjaman Bank Jangka Pendek', 'Analisis diskonto, compensating balance, dan commercial paper.', 'Mampu menghitung suku bunga efektif berbagai instrumen utang jangka pendek.']
      ],
      caption: 'Tabel 12.2: Peta penguasaan submateri TM 12 Manajemen Keuangan.'
    },
    CASE_INVENTORY_TRADE_CREDIT,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Free Trade Credit vs Costly Trade Credit**: Kredit dagang selama periode diskon adalah gratis; kredit dagang yang diperpanjang melewati periode diskon adalah salah satu sumber dana paling mahal.',
        '**Just-In-Time (JIT)**: Pendekatan manufaktur modern yang bertujuan menekan kuantitas persediaan mendekati nol melalui koordinasi ketat dengan pemasok.',
        '**Pledge vs Factoring Piutang**: Pledging menggunakan piutang sebagai jaminan pinjaman bank; Factoring adalah penjualan putus piutang usaha kepada perusahaan anjak piutang.'
      ]
    }
  ]
};
