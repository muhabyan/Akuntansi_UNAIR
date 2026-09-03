import type { Reading } from '../../../types';
import { CASE_CAPITAL_STRUCTURE_LEVERAGE } from '../mankeuPracticeCases';

const SVG_CAPITAL_STRUCTURE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="mm1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="mm2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="toGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk9)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">EVOLUSI TEORI STRUKTUR MODAL: MODIGLIANI-MILLER HINGGA TRADE-OFF THEORY</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">CAPITAL STRUCTURE</text>

  <!-- 3 Evolution Stages -->
  <!-- Stage 1: MM Without Tax (1958) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="225" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#mm1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">MM TANPA PAJAK (1958)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="56" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Proposisi 1: V_L = V_U (Irrelevan)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Asumsi pasar modal sempurna tanpa gesekan</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Tidak ada pajak, biaya transaksi, &amp; kebangkrutan</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Nilai perusahaan ditentukan oleh aset riil</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Rasio utang tidak mempengaruhi nilai korporasi</text>
    <rect class="svg-badge-blue" x="14" y="175" width="237" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="191" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Fondasi Awal Teori Finansial Modern</text>
  </g>

  <!-- Stage 2: MM With Tax (1963) -->
  <g transform="translate(318, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="225" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#mm2)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">MM DENGAN PAJAK (1963)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="56" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">Proposisi 1: V_L = V_U + (Tc × D)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Pengakuan bunga utang sebagai pengurang pajak</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Tax Shield Bunga</tspan> meningkatkan arus kas</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Nilai perusahaan meningkat seiring porsi utang</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Implikasi ekstrem teoretis: Utang 100% optimal</text>
    <rect class="svg-badge-green" x="14" y="175" width="237" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="191" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Penghematan Pajak Mendorong Nilai</text>
  </g>

  <!-- Stage 3: Trade-Off Theory (Myers, 1984) -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="225" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#toGrad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="132" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">TRADE-OFF THEORY (REALISTIS)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="132" y="56" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">V_L = V_U + PV(Tax Shield) - PV(Distress)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Menyeimbangkan tax shield vs risiko kebangkrutan</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Utang berlebih memicu Biaya Financial Distress</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Terdapat titik struktur modal optimal (D*)</text>
    <text class="text-accent-amber" x="14" y="136" fill="#fbbf24" font-size="8">• Pada titik optimal, WACC mencapai titik terendah</text>
    <rect class="svg-badge-amber" x="14" y="175" width="237" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="132" y="191" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Struktur Modal Optimal di Dunia Nyata</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Titik struktur modal optimal tercapai saat manfaat marjinal tax shield tepat diimbangi oleh kenaikan marjinal biaya kebangkrutan.</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Capital Structure Decisions, Financial Leverage, & Modigliani-Miller Theories',
  ref: 'Brigham & Ehrhardt Ch. 13 | Teori Struktur Modal MM (1958 & 1963) | Trade-Off Theory & Persamaan Hamada',
  intro: 'TM 9 membahas pilihan bauran pendanaan utang vs ekuitas: Teori Modigliani-Miller tanpa pajak (Struktur Modal Tidak Relevan) dan dengan pajak (Manfaat Tax Shield Bunga), Teori Trade-Off (Keseimbangan Penghematan Pajak vs Biaya Kebangkrutan / Financial Distress), Teori Pecking Order, Teori Sinyal (Signaling), serta Persamaan Hamada untuk menghitung kenaikan risiko ekuitas (Levered Beta).',
  objectives: [
    'Menganalisis Proposisi MM I & II (tanpa pajak dan dengan pajak korporasi).',
    'Menghitung nilai perusahaan ter-leverage ($V_L = V_U + T \\times D$) dan penghematan pajak bunga.',
    'Menerapkan Persamaan Hamada untuk mengkonversi Unlevered Beta ($\\beta_U$) menjadi Levered Beta ($\\beta_L$).',
    'Menjelaskan hierarki pendanaan Teori Pecking Order (Internal Funds $\\r→$ Debt $\\r→$ External Equity).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 9.1: Evolusi Teori Struktur Modal: Dari MM hingga Trade-Off dan Pecking Order.',
      svg: SVG_CAPITAL_STRUCTURE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 9'
    },
    {
      kind: 'table',
      headers: ['Teori Struktur Modal', 'Asumsi Dasar', 'Implikasi terhadap Nilai Perusahaan ($V_L$)', 'Implikasi terhadap WACC'],
      rows: [
        ['MM Tanpa Pajak (1958)', 'Pasar modal sempurna, tanpa pajak, tanpa biaya kebangkrutan.', '$V_L = V_U$ (Struktur modal sama sekali TIDAK mempengaruhi nilai).', 'WACC konstan pada seluruh rentang rasio utang.'],
        ['MM Dengan Pajak (1963)', 'Bunga utang dapat dikurangkan dari pajak penghasilan korporasi.', '$V_L = V_U + (T \\times D)$ (Nilai bertambah sebesar present value tax shield).', 'WACC turun terus mendekati biaya utang; modal optimal 100% utang.'],
        ['Trade-Off Theory (Static Trade-off)', 'Ada penghematan pajak bunga DAN ada biaya kebangkrutan (Financial Distress Costs).', '$V_L = V_U + (T \\times D) - PV(\\text{Distress Costs})$.', 'WACC berbentuk kurva U; titik minimum kurva adalah Struktur Modal Optimal.'],
        ['Pecking Order Theory', 'Asimetri informasi antara manajer (insider) dan investor publik.', 'Tidak ada target rasio D/E tetap; struktur modal mengikuti kebutuhan kas.', 'Pendanaan diprioritaskan: 1. Kas Internal, 2. Utang, 3. Saham Baru.']
      ],
      caption: 'Tabel 9.0: Ringkasan 4 teori utama struktur modal korporasi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Modigliani-Miller & Persamaan Hamada'
    },
    {
      kind: 'formula',
      text: `\\text{MM with Taxes (Proposisi I)}: \\quad V_L = V_U + (T \\times D)
\\text{Persamaan Hamada (Levered Beta)}: \\quad \\beta_L = \\beta_U \\left[1 + (1 - T)\\left(\\frac{D}{S}\\right)\\right]
\\text{Unlevered Beta (Asset Beta)}: \\quad \\beta_U = \\frac{\\beta_L}{1 + (1 - T)(D/S)}
\\text{Cost of Equity under MM II with Taxes}: \\quad r_{sL} = r_{sU} + (r_{sU} - r_d)(1 - T)\\left(\\frac{D}{S}\\right)`,
      note: 'Penambahan utang meningkatkan risiko finansial yang ditanggung pemegang saham biasa, sehingga menaikkan Beta ($\\beta_L$) dan biaya ekuitas ($r_{sL}$).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Persamaan Hamada & Efek Perubahan Rasio D/E',
      prompt: 'PT Cemerlang saat ini 100% ekuitas dengan $\\beta_U = 0,80$. Tarif pajak $T = 22\\%$. Perusahaan ingin mengubah struktur modal menjadi $D/S = 50\\%$ (Debt-to-Equity = 0,50). Jika $r_{RF} = 5,5\\%$ dan Market Risk Premium = 6,0%, berapa Levered Beta dan Biaya Ekuitas baru perusahaan?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perhitungan Levered Beta ($\\beta_L$)**:\n$\\beta_L = 0,80 \\left[1 + (1 - 0,22)(0,50)\\right] = 0,80 [1 + 0,78(0,50)] = 0,80(1 + 0,39) = 0,80 \\times 1,39 = \\mathbf{1,112}$.',
            '**Perhitungan Biaya Ekuitas Baru ($r_{sL}$ via CAPM)**:\n$r_{sL} = 5,5\\% + 1,112(6,0\\%) = 5,5\\% + 6,672\\% = \\mathbf{12,172\\% \\approx 12,17\\%}$.',
            '**Kenaikan Biaya Ekuitas**: Biaya ekuitas naik dari $10,30\\%$ ($5,5\\% + 0,80 \\times 6\\%$) menjadi $12,17\\%$ sebagai kompensasi atas risiko penambahan beban utang 50% D/E.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 9'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Teori MM Tanpa & Dengan Pajak', 'Kalkulasi $V_L$, penghematan pajak, dan biaya modal.', 'Mampu menganalisis dampak restrukturisasi modal pada nilai perusahaan.'],
        ['2', 'Persamaan Hamada', 'Konversi $\\beta_U$ ke $\\beta_L$ dan sebaliknya.', 'Mampu menghitung perubahan beta akibat perubahan rasio D/E.'],
        ['3', 'Trade-off vs Pecking Order', 'Analisis Trade-Off Theory, Financial Distress, dan Signaling.', 'Mampu menjelaskan fenomena pemilihan sumber dana korporasi riil.']
      ],
      caption: 'Tabel 9.2: Peta penguasaan submateri TM 9 Manajemen Keuangan.'
    },
    CASE_CAPITAL_STRUCTURE_LEVERAGE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Interest Tax Shield**: Merupakan nilai tambah utama dari penggunaan utang ($T \\times D$), namun dibatasi oleh potensi biaya kebangkrutan.',
        '**Business Risk vs Financial Risk**: Business Risk melekat pada operasional aset ($\\beta_U$); Financial Risk timbul dari keputusan mendanai aset dengan utang ($\\beta_L - \\beta_U$).',
        '**Signaling Theory**: Pengumuman penerbitan saham baru sering dipandang pasar sebagai sinyal negatif bahwa saham sedang overvalued, memicu penurunan harga saham.'
      ]
    }
  ]
};
