import type { Reading } from '../../../types';
import { CASE_WORKING_CAPITAL_CASH_CCC } from '../mankeuPracticeCases';

const SVG_WORKING_CAPITAL_CCC = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SIKLUS KONVERSI KAS (CASH CONVERSION CYCLE - CCC)</text>
  
  <rect x="30" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="120" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. ICP (DSI)</text>
  <text x="120" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Inventory Conversion:</text>
  <text x="120" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Persediaan / (HPP/365)</text>
  <text x="120" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Waktu bahan mentah</text>
  <text x="120" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">jadi barang &amp; terjual</text>
  <text x="120" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Perputaran Stok</text>

  <text x="225" y="130" fill="#94a3b8" font-size="18" font-weight="700" text-anchor="middle">+</text>

  <rect x="240" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="330" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">2. DSO (ACP)</text>
  <text x="330" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Days Sales Outstanding:</text>
  <text x="330" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Piutang / (Penjualan/365)</text>
  <text x="330" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Waktu penagihan kas</text>
  <text x="330" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">dari pembeli piutang</text>
  <text x="330" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Penagihan Piutang</text>

  <text x="435" y="130" fill="#94a3b8" font-size="18" font-weight="700" text-anchor="middle">-</text>

  <rect x="450" y="55" width="195" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="547" y="78" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">3. PDP (DPO)</text>
  <text x="547" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Payables Deferral Period:</text>
  <text x="547" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Utang Usaha / (HPP/365)</text>
  <text x="547" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Jangka waktu tunda bayar</text>
  <text x="547" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">ke vendor pemasok</text>
  <text x="547" y="175" fill="#fca5a5" font-size="9" font-weight="700" text-anchor="middle">CCC = ICP + DSO - PDP</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Working Capital Management - Part I: Cash Management & Credit Policies',
  ref: 'Brigham & Ehrhardt Ch. 15 | Siklus Konversi Kas (CCC) | Model Saldo Kas Baumol & Miller-Orr | Kebijakan Kredit',
  intro: 'TM 11 membahas pengelolaan modal kerja bersih (Net Working Capital) dan likuiditas operasional: Siklus Konversi Kas (Cash Conversion Cycle / CCC), 3 strategi pendanaan modal kerja (Relaxed, Restricted, Moderate/Maturity Matching), model manajemen kas optimal (Model Baumol dan Model Miller-Orr), sistem Lockbox, serta penetapan kebijakan kredit (Credit Standards, Credit Terms, Collection Policy).',
  objectives: [
    'Menghitung dan menganalisis Siklus Konversi Kas (CCC = ICP + DSO - PDP).',
    'Membandingkan strategi investasi dan pendanaan modal kerja (Aggressive vs Conservative vs Moderate).',
    'Menghitung saldo kas optimal dan titik batas menggunakan Model Baumol dan Miller-Orr.',
    'Mengevaluasi trade-off perubahan kebijakan kredit terhadap laba dan penambahan investasi piutang.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 11.1: Komponen Penghitungan Siklus Konversi Kas (Cash Conversion Cycle).',
      svg: SVG_WORKING_CAPITAL_CCC
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 11'
    },
    {
      kind: 'table',
      headers: ['Parameter Modal Kerja', 'Formula Perhitungan', 'Tujuan Strategis', 'Dampak Jika Diperpendek'],
      rows: [
        ['Inventory Conversion Period (ICP)', '$ICP = \\frac{\\text{Persediaan}}{\\text{HPP / 365}}$', 'Mempercepat perputaran persediaan tanpa kehabisan stok (stockout).', 'Mengurangi biaya simpan dan memperpendek CCC.'],
        ['Days Sales Outstanding (DSO)', '$DSO = \\frac{\\text{Piutang Usaha}}{\\text{Penjualan / 365}}$', 'Mempercepat penagihan kas dari konsumen.', 'Mempercepat penerimaan kas dan menekan piutang tak tertagih.'],
        ['Payables Deferral Period (PDP)', '$PDP = \\frac{\\text{Utang Usaha}}{\\text{HPP / 365}}$', 'Memaksimalkan pemanfaatan kredit tanpa bunga dari pemasok.', 'Memperpanjang PDP akan memperpendek CCC (menghemat kas).'],
        ['Cash Conversion Cycle (CCC)', '$CCC = ICP + DSO - PDP$', 'Meminimalkan jeda waktu antara pembayaran bahan baku dan penerimaan kas.', 'Semakin pendek CCC (bahkan negatif), semakin kecil kebutuhan dana bank.']
      ],
      caption: 'Tabel 11.0: Matriks parameter Siklus Konversi Kas.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Model Saldo Kas Baumol & Miller-Orr'
    },
    {
      kind: 'formula',
      text: `\\text{Model Baumol (Saldo Kas Optimal)}: \\quad C^* = \\sqrt{\\frac{2 \\times T \\times F}{r}}
\\text{Model Miller-Orr (Return Point } Z^*): \\quad Z^* = \\sqrt[3]{\\frac{3 \\times F \\times \\sigma^2}{4 \\times r}} + L
\\text{Batas Atas Miller-Orr } (H^*): \\quad H^* = 3 Z^* - 2 L`,
      note: 'Keterangan: $T$ = Total kebutuhan kas tahunan; $F$ = Biaya transaksi per transaksi sekuritas; $r$ = Suku bunga sekuritas pasar uang harian; $\\sigma^2$ = Varians arus kas harian; $L$ = Batas bawah saldo kas minimum.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Model Saldo Kas Miller-Orr',
      prompt: 'Biaya transaksi sekuritas pasar uang $F = Rp 50.000$ per transaksi. Varians arus kas harian $\\sigma^2 = Rp 4.000.000.000$. Suku bunga harian $r = 0,0002$ (0,02% per hari). Batas bawah kas minimum yang ditetapkan direksi $L = Rp 10.000.000$. Hitung Return Point ($Z^*$) dan Batas Atas Kas ($H^*$)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perhitungan Return Point ($Z^*$)**:\n$Z^* = \\sqrt[3]{\\frac{3 \\times 50.000 \\times 4.000.000.000}{4 \\times 0,0002}} + 10.000.000 = \\sqrt[3]{\\frac{600.000.000.000.000}{0,0008}} + 10.000.000$\n$Z^* = \\sqrt[3]{7,5 \\times 10^{17}} + 10.000.000 = 9.085.603 + 10.000.000 = \\mathbf{Rp 19.085.603}$.',
            '**Perhitungan Batas Atas ($H^*$)**:\n$H^* = 3(19.085.603) - 2(10.000.000) = 57.256.809 - 20.000.000 = \\mathbf{Rp 37.256.809}$.',
            '**Aturan Keputusan**: Jika kas mencapai Rp 37,26 Juta, beli sekuritas sebesar $(H^* - Z^*) = Rp 18,17$ Juta; jika kas menyentuh batas bawah Rp 10 Juta, jual sekuritas sebesar $(Z^* - L) = Rp 9,09$ Juta untuk kembali ke $Z^*$.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 11'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kalkulasi CCC Lengkap', 'Perhitungan ICP, DSO, PDP, dan CCC gabungan.', 'Mampu menganalisis efisiensi pengelolaan modal kerja operasional.'],
        ['2', 'Model Baumol & Miller-Orr', 'Penentuan saldo kas optimal, target return point, dan batas atas kas.', 'Mampu merancang kebijakan manajemen kas korporasi.'],
        ['3', 'Kebijakan Kredit & Aging Schedule', 'Evaluasi diskon kas, syarat kredit 2/10 net 30, dan analisis umur piutang.', 'Mampu memutuskan kelayakan pelonggaran standar kredit.']
      ],
      caption: 'Tabel 11.2: Peta penguasaan submateri TM 11 Manajemen Keuangan.'
    },
    CASE_WORKING_CAPITAL_CASH_CCC,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**CCC Negatif adalah Keunggulan Kompetitif**: Perusahaan seperti Amazon atau Alfamart beroperasi dengan CCC negatif karena barang terjual dan kas terkumpul sebelum tagihan pemasok jatuh tempo.',
        '**Maturity Matching Strategy**: Membiayai aset lancar permanen dengan modal jangka panjang dan membiayai aset lancar musiman dengan utang jangka pendek meminimalkan risiko likuiditas.',
        '**Lockbox System**: Mempercepat proses kliring penerimaan cek/bilyet giro dengan mengarahkan pembayaran konsumen langsung ke kotak pos bank lokal terdekat.'
      ]
    }
  ]
};
