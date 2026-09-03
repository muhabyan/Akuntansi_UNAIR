import type { Reading } from '../../../types';
import { CASE_WORKING_CAPITAL_CASH_CCC } from '../mankeuPracticeCases';

const SVG_WORKING_CAPITAL_CCC = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="cccGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk11)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">SIKLUS KONVERSI KAS: CCC = DIO (PERSEDIAAN) + DSO (PIUTANG) - DPO (UTANG DAGANG)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">WORKING CAPITAL</text>

  <!-- Top Level: OPERATING CYCLE (DIO + DSO) -->
  <g transform="translate(45, 75)">
    <!-- Bar 1: Days Inventory Outstanding (DIO) -->
    <rect x="0" y="0" width="460" height="36" rx="6" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="230" y="22" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">1. DIO: DAYS INVENTORY OUTSTANDING (Misal: 60 Hari)</text>

    <!-- Bar 2: Days Sales Outstanding (DSO) -->
    <rect x="468" y="0" width="342" height="36" rx="6" fill="#7c3aed" fill-opacity="0.3" stroke="#a78bfa" stroke-width="1.5"/>
    <text class="text-accent-purple" x="639" y="22" fill="#a78bfa" font-size="9" font-weight="800" text-anchor="middle">2. DSO: DAYS SALES OUTSTANDING (Misal: 45 Hari)</text>

    <text class="svg-text" x="405" y="52" fill="#cbd5e1" font-size="8" font-weight="700" text-anchor="middle">SIKLUS OPERASI TOTAL (OPERATING CYCLE) = DIO + DSO = 105 HARI</text>
  </g>

  <!-- Middle Level: PAYABLES DELAY (DPO) -->
  <g transform="translate(45, 145)">
    <!-- Bar 3: Days Payables Outstanding (DPO) -->
    <rect x="0" y="0" width="280" height="36" rx="6" fill="#059669" fill-opacity="0.3" stroke="#34d399" stroke-width="1.5"/>
    <text class="text-accent-green" x="140" y="22" fill="#34d399" font-size="9" font-weight="800" text-anchor="middle">3. DPO: UTANG USAHA (Misal: 35 Hari)</text>
    <text class="text-accent-green" x="140" y="50" fill="#34d399" font-size="7.5" text-anchor="middle">Penundaan Kas Keluar Didanai Pemasok</text>

    <!-- Bar 4: CASH CONVERSION CYCLE (GAP) -->
    <rect x="288" y="0" width="522" height="36" rx="6" fill="#dc2626" fill-opacity="0.3" stroke="#f87171" stroke-width="2"/>
    <text class="text-accent-red" x="549" y="22" fill="#f87171" font-size="9.5" font-weight="900" text-anchor="middle">CASH CONVERSION CYCLE (CCC) = 70 HARI</text>
    <text class="text-accent-red" x="549" y="50" fill="#f87171" font-size="7.5" font-weight="700" text-anchor="middle">Periode Kas Perusahaan "Terkunci" &amp; Membutuhkan Pendanaan Modal Kerja Eksternal</text>
  </g>

  <!-- Milestone Dots & Event Labels on Timeline -->
  <g transform="translate(45, 215)">
    <line x1="0" y1="20" x2="810" y2="20" stroke="#334155" stroke-width="2"/>
    
    <!-- Day 0: Beli Bahan Baku -->
    <circle cx="0" cy="20" r="5" fill="#38bdf8"/>
    <text class="text-accent-blue" x="0" y="42" fill="#38bdf8" font-size="7.5" font-weight="700">Hari 0</text>
    <text class="svg-text" x="0" y="55" fill="#cbd5e1" font-size="7">Beli Bahan Baku</text>

    <!-- Day 35: Bayar Utang Dagang -->
    <circle cx="280" cy="20" r="5" fill="#34d399"/>
    <text class="text-accent-green" x="280" y="42" fill="#34d399" font-size="7.5" font-weight="700">Hari 35</text>
    <text class="svg-text" x="280" y="55" fill="#cbd5e1" font-size="7">Bayar Pemasok (Kas Keluar)</text>

    <!-- Day 60: Jual Barang Jadi -->
    <circle cx="460" cy="20" r="5" fill="#a78bfa"/>
    <text class="text-accent-purple" x="460" y="42" fill="#a78bfa" font-size="7.5" font-weight="700">Hari 60</text>
    <text class="svg-text" x="460" y="55" fill="#cbd5e1" font-size="7">Barang Jadi Terjual (Kredit)</text>

    <!-- Day 105: Terima Pelunasan Kas -->
    <circle cx="810" cy="20" r="5" fill="#fbbf24"/>
    <text class="text-accent-amber" x="810" y="42" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="end">Hari 105</text>
    <text class="svg-text" x="810" y="55" fill="#cbd5e1" font-size="7" text-anchor="end">Terima Kas Pelanggan</text>
  </g>

  <!-- Strategic Insight Box -->
  <g transform="translate(45, 290)">
    <rect class="svg-subcard" x="0" y="0" width="810" height="34" rx="6" fill="#1e293b"/>
    <text class="text-accent-blue" x="405" y="21" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">
      Trik Perusahaan Kelas Dunia (contoh: Dell &amp; Amazon): Memiliki CCC Negatif (DPO &gt; DIO + DSO) sehingga bisnis didanai gratis oleh vendor!
    </text>
  </g>
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
