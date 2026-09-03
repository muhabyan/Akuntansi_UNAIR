import type { Reading } from '../../../types';
import { CASE_WACC_COMPREHENSIVE } from '../mankeuPracticeCases';

const SVG_WACC_STRUCTURE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="waccWd" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="waccWp" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="waccWe" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk5)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">KOMPONEN BIAYA MODAL RATA-RATA TERTIMBANG (WACC)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">WACC MODEL</text>

  <!-- Formula Banner on Top -->
  <g transform="translate(35, 70)">
    <rect class="svg-subcard" x="0" y="0" width="830" height="42" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="415" y="26" fill="#f8fafc" font-size="10.5" font-weight="800" text-anchor="middle">
      WACC = [ <tspan class="text-accent-blue" fill="#38bdf8">Wd × Kd × (1 - T)</tspan> ] + [ <tspan class="text-accent-purple" fill="#a78bfa">Wp × Kp</tspan> ] + [ <tspan class="text-accent-green" fill="#34d399">We × Ke</tspan> ]
    </text>
  </g>

  <!-- 3 Capital Component Pillars -->
  <!-- Pillar 1: Debt (Kd after-tax) -->
  <g transform="translate(35, 125)">
    <rect class="svg-card" x="0" y="0" width="265" height="180" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#waccWd)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. MODAL UTANG (DEBT - Wd)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="56" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Biaya Riil: Kd × (1 - Tax Rate)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Memiliki fasilitas <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Tax Shield</tspan> bunga</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Bunga pinjaman mengurangi beban pajak</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Biaya modal paling murah di antara ketiganya</text>
    <text class="text-accent-red" x="14" y="136" fill="#f87171" font-size="8">• Risiko: Risiko kebangkrutan finansial</text>
    <rect class="svg-badge-blue" x="14" y="148" width="237" height="20" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="162" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Contoh Bobot Target: 30% - 40%</text>
  </g>

  <!-- Pillar 2: Preferred Stock (Kp) -->
  <g transform="translate(318, 125)">
    <rect class="svg-card" x="0" y="0" width="265" height="180" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#waccWp)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="132" y="20" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">2. SAHAM PREFEREN (Wp)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="132" y="56" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">Biaya Riil: Dp ÷ Net Proceeds (Pn)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Dividen tetap kumulatif prioritas</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-red" fill="#f87171" font-weight="700">TIDAK ADA tax shield</tspan> (bayar dari laba bersih)</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Memiliki sifat hibrida: Utang + Saham</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Hak klaim aset di atas saham biasa</text>
    <rect class="svg-badge-purple" x="14" y="148" width="237" height="20" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="132" y="162" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Contoh Bobot Target: 0% - 10%</text>
  </g>

  <!-- Pillar 3: Common Equity (Ke / Ks) -->
  <g transform="translate(600, 125)">
    <rect class="svg-card" x="0" y="0" width="265" height="180" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#waccWe)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">3. SAHAM BIASA (EQUITY - We)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="56" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">Dihitung via CAPM: Rf + β(Rm - Rf)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Biaya modal paling mahal (Risk Premium tertinggi)</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Pembayar klaim sisa terakhir (Residual Claimant)</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Menuntut imbal hasil laba &amp; capital gain</text>
    <text class="text-accent-green" x="14" y="136" fill="#34d399" font-size="8">• Keunggulan: Bebas kewajiban bayar bunga tetap</text>
    <rect class="svg-badge-green" x="14" y="148" width="237" height="20" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="162" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Contoh Bobot Target: 50% - 70%</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">WACC adalah "Hurdle Rate" minimum yang harus dilampaui (IRR &gt; WACC) agar proyek investasi menciptakan nilai tambah pemegang saham.</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'The Cost of Capital & Weighted Average Cost of Capital (WACC)',
  ref: 'Brigham & Ehrhardt Ch. 9 | Struktur Modal Sasaran | Perhitungan Biaya Modal Rata-rata Tertimbang',
  intro: 'TM 5 membahas biaya modal korporasi sebagai tingkat diskonto minimum (Hurdle Rate) untuk proyek investasi: biaya utang setelah pajak ($r_d(1-T)$), biaya saham preferen ($r_p$), 3 metode estimasi biaya ekuitas saham biasa ($r_s$: CAPM, DCF Gordon Growth Model, Bond Yield Plus Risk Premium), penyesuaian biaya emisi (Flotation Costs), serta kalkulasi WACC.',
  objectives: [
    'Menghitung After-Tax Cost of Debt dengan mempertimbangkan penghematan pajak bunga (Interest Tax Shield).',
    'Mengestimasi Cost of Common Equity ($r_s$) menggunakan 3 pendekatan berbeda dan merekonsiliasi hasilnya.',
    'Menghitung WACC menggunakan bobot pasar (Market Value Weights) dari struktur modal sasaran.',
    'Menerapkan WACC sebagai hurdle rate evaluasi penganggaran modal (Capital Budgeting Hurdle Rate).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 5.1: Struktur Komponen Biaya Modal Rata-rata Tertimbang (WACC).',
      svg: SVG_WACC_STRUCTURE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 5'
    },
    {
      kind: 'table',
      headers: ['Komponen Modal', 'Formula Penentuan Biaya', 'Perlakuan Pajak', 'Urutan Besaran Biaya'],
      rows: [
        ['Utang Jangka Panjang ($w_d$)', '$r_{d, after-tax} = r_d \\times (1 - T)$', 'Bunga MENGURANGI Pajak (Tax Shield).', 'Biaya Terendah (karena senioritas klaim & hemat pajak).'],
        ['Saham Preferen ($w_p$)', '$r_p = \\frac{D_p}{P_0(1 - F)}$', 'Dividen TIDAK mengurangi pajak.', 'Biaya Menengah (klaim sebelum saham biasa).'],
        ['Saldo Laba / Laba Ditahan ($w_s$)', 'CAPM: $r_s = r_{RF} + \\beta(r_M - r_{RF})$ \\quad | \\quad DCF: $r_s = \\frac{D_1}{P_0} + g$', 'Dividen TIDAK mengurangi pajak.', 'Biaya Tinggi (risiko residual tertinggi).'],
        ['Emisi Saham Baru ($r_e$)', '$r_e = \\frac{D_1}{P_0(1 - F)} + g$', 'Dividen TIDAK mengurangi pajak.', 'Biaya Paling Tinggi (ditambah beban Flotation Cost $F$).']
      ],
      caption: 'Tabel 5.0: Karakteristik dan perlakuan pajak komponen modal WACC.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Perhitungan WACC & 3 Metode Biaya Ekuitas'
    },
    {
      kind: 'formula',
      text: `\\text{WACC} = (w_d \\times r_d(1-T)) + (w_p \\times r_p) + (w_s \\times r_s)
\\text{3 Metode Estimasi Cost of Equity } (r_s):
1. \\mathbf{\\text{CAPM Approach}}: \\quad r_s = r_{RF} + \\beta_i (r_M - r_{RF})
2. \\mathbf{\\text{DCF / Gordon Growth Model}}: \\quad r_s = \\frac{D_1}{P_0} + g = \\frac{D_0(1+g)}{P_0} + g
3. \\mathbf{\\text{Bond Yield Plus Risk Premium}}: \\quad r_s = \\text{Yield Obligasi Perusahaan } (r_d) + \\text{Judgemental Risk Premium } (3\\% - 5\\%)`,
      note: 'Bobot komponen ($w_d, w_p, w_s$) WAJIB menggunakan Nilai Pasar (Market Value Weights), BUKAN Nilai Buku historis akuntansi.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Rekonsiliasi 3 Metode Estimasi Biaya Ekuitas',
      prompt: 'Data PT Mega Finansial: $r_{RF} = 6\\%$, $r_M = 12\\%$, $\\beta = 1,25$. Harga saham saat ini $P_0 = Rp 4.000$, dividen terakhir $D_0 = Rp 200$, dividen bertumbuh stabil $g = 7\\%$. Suku bunga obligasi perusahaan $r_d = 9\\%$ dengan premi risiko historis 4%. Hitung $r_s$ dengan ketiga metode dan tentukan rata-ratanya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Metode CAPM**: $r_s = 6,0\\% + 1,25(12,0\\% - 6,0\\%) = 6,0\\% + 7,5\\% = \\mathbf{13,50\\%}$.',
            '**2. Metode DCF**: $D_1 = 200 \\times 1,07 = Rp 214$. $r_s = (214 / 4.000) + 0,07 = 5,35\\% + 7,00\\% = \\mathbf{12,35\\%}$.',
            '**3. Metode Bond Yield + Risk Premium**: $r_s = 9,0\\% + 4,0\\% = \\mathbf{13,00\\%}$.',
            '**Rata-rata Estimasi $r_s$**: $(13,50\\% + 12,35\\% + 13,00\\%) / 3 = \\mathbf{12,95\\%}$. Angka ini menjadi input $r_s$ dalam formula WACC.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 5'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'After-tax Cost of Debt & Preferred', 'Kalkulasi penghematan pajak bunga dan emisi saham preferen.', 'Mampu menghitung komponen biaya utang dan saham preferen.'],
        ['2', '3 Pendekatan Cost of Equity', 'Penerapan CAPM, DCF, dan Bond Yield + RP.', 'Mampu mengestimasi biaya ekuitas internal vs eksternal.'],
        ['3', 'Perhitungan WACC Komprehensif', 'Penerapan bobot nilai pasar target pada struktur modal multi-komponen.', 'Mampu menghitung hurdle rate WACC untuk evaluasi proyek.']
      ],
      caption: 'Tabel 5.2: Peta penguasaan submateri TM 5 Manajemen Keuangan.'
    },
    CASE_WACC_COMPREHENSIVE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Penghematan Pajak Utang**: Biaya utang adalah satu-satunya komponen modal yang disesuaikan dengan pajak $(1 - T)$ karena beban bunga dapat dikurangkan dari penghasilan kena pajak.',
        '**Laba Ditahan Tidak Gratis**: Biaya laba ditahan ($r_s$) adalah Opportunity Cost pemegang saham yang mengharapkan return setara investasi lain dengan risiko sejenis.',
        '**WACC Divisi**: Proyek dengan risiko di atas rata-rata perusahaan harus dievaluasi dengan hurdle rate $WACC + \\text{Risk Adjustment}$, bukan WACC korporasi rata-rata.'
      ]
    }
  ]
};
