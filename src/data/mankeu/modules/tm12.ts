import type { Reading } from '../../../types';
import { CASE_INVENTORY_TRADE_CREDIT } from '../mankeuPracticeCases';

const SVG_EOQ_COST_CURVE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL KUANTITAS PESANAN EKONOMIS (ECONOMIC ORDER QUANTITY - EOQ)</text>
  
  <line x1="80" y1="180" x2="620" y2="180" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="180" x2="80" y2="45" stroke="#64748b" stroke-width="2"/>
  <text x="620" y="195" fill="#94a3b8" font-size="10" text-anchor="end">Kuantitas Pesanan (Q Unit)</text>
  <text x="70" y="50" fill="#94a3b8" font-size="10" text-anchor="end">Biaya Total (Rp)</text>

  <path d="M 90 60 L 600 170" stroke="#f87171" stroke-width="2" fill="none"/>
  <text x="590" y="160" fill="#f87171" font-size="9" font-weight="700" text-anchor="end">Biaya Simpan (Holding Cost): (Q/2) × H</text>

  <path d="M 100 170 Q 250 140 600 70" stroke="#fbbf24" stroke-width="2" fill="none"/>
  <text x="590" y="85" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="end">Biaya Pesan (Ordering Cost): (D/Q) × S</text>

  <path d="M 100 190 Q 320 85 580 180" stroke="#4ade80" stroke-width="2.5" fill="none"/>
  <text x="340" y="90" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">TOTAL INVENTORY COST (TIC)</text>

  <line x1="335" y1="180" x2="335" y2="115" stroke="#38bdf8" stroke-dasharray="3 3"/>
  <circle cx="335" cy="115" r="5" fill="#38bdf8"/>
  <text x="335" y="195" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TITIK OPTIMAL EOQ</text>
  <text x="340" y="135" fill="#38bdf8" font-size="8.5">Biaya Pesan = Biaya Simpan</text>
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
