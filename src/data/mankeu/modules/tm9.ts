import type { Reading } from '../../../types';
import { CASE_LEVERAGE_DTL } from '../mankeuPracticeCases';

const SVG_LEVERAGE_PYRAMID = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRUKTUR PENGUNGKIT OPERASI, KEUANGAN, DAN TOTAL (LEVERAGE)</text>
  
  <!-- DOL -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Operating (DOL)</text>
  <text x="125" y="100" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">DOL = (S - VC) / EBIT</text>
  <line x1="45" y1="112" x2="205" y2="112" stroke="#334155"/>
  <text x="125" y="132" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Dipicu oleh Biaya Tetap</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Operasi Pabrik (Fixed Costs)</text>
  <text x="125" y="168" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Sensitivitas:</text>
  <text x="125" y="186" fill="#7dd3fc" font-size="10" font-weight="700" text-anchor="middle">% &Delta;EBIT / % &Delta;Sales</text>

  <!-- Multiplier symbol -->
  <text x="235" y="135" fill="#94a3b8" font-size="20" font-weight="700" text-anchor="middle">&times;</text>

  <!-- DFL -->
  <rect x="255" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="350" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">2. Financial (DFL)</text>
  <text x="350" y="100" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">DFL = EBIT / (EBIT - I)</text>
  <line x1="270" y1="112" x2="430" y2="112" stroke="#334155"/>
  <text x="350" y="132" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Dipicu oleh Beban Bunga</text>
  <text x="350" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Utang Tetap (Debt Financing)</text>
  <text x="350" y="168" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Sensitivitas:</text>
  <text x="350" y="186" fill="#fde68a" font-size="10" font-weight="700" text-anchor="middle">% &Delta;EPS / % &Delta;EBIT</text>

  <!-- Equal symbol -->
  <text x="460" y="135" fill="#94a3b8" font-size="20" font-weight="700" text-anchor="middle">=</text>

  <!-- DTL -->
  <rect x="475" y="55" width="180" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="565" y="80" fill="#f43f5e" font-size="11.5" font-weight="700" text-anchor="middle">3. Total (DTL)</text>
  <text x="565" y="100" fill="#fca5a5" font-size="11" font-weight="700" text-anchor="middle">DTL = DOL &times; DFL</text>
  <line x1="490" y1="112" x2="640" y2="112" stroke="#334155"/>
  <text x="565" y="132" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Penggandaan Total</text>
  <text x="565" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Risiko Bisnis + Finansial</text>
  <text x="565" y="168" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Sensitivitas:</text>
  <text x="565" y="186" fill="#fda4af" font-size="10" font-weight="700" text-anchor="middle">% &Delta;EPS / % &Delta;Sales</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Capital Structure, Leverage, & The Modigliani-Miller Theories',
  ref: 'Brigham & Houston Ch. 14',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 9: Menguasai teori struktur modal (Teori Modigliani-Miller / MM Tanpa Pajak vs Dengan Pajak), Trade-off Theory (Keseimbangan Pajak vs Biaya Kebangkrutan), Pecking Order Theory, serta kalkulasi kuantitatif Derajat Pengungkit Operasi (DOL), Derajat Pengungkit Keuangan (DFL), dan Derajat Pengungkit Total (DTL).',
  objectives: [
    'Mendefinisikan Struktur Modal Optimal yang meminimalkan WACC dan memaksimalkan nilai perusahaan.',
    'Membandingkan Proposisi Modigliani-Miller (MM) Tanpa Pajak (Ketidakrelevanan Struktur Modal) vs Dengan Pajak (Pengaruh Penghematan Pajak Bunga Utang / Tax Shield).',
    'Menjelaskan Teori Trade-Off Struktur Modal (Tax Shield vs Biaya Tekanan Finansial / Financial Distress Costs).',
    'Menjelaskan Teori Pecking Order (Hierarki Pendanaan: Internal $\\rightarrow$ Utang $\\rightarrow$ Saham Baru).',
    'Menghitung Degree of Operating Leverage (DOL), Degree of Financial Leverage (DFL), dan Degree of Total Leverage (DTL).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Struktur Tiga Tingkatan Pengungkit (Leverage Pyramid)',
      svg: SVG_LEVERAGE_PYRAMID,
      caption: 'Gambar 9.1: Hubungan perkalian antara pengungkit operasi dan pengungkit keuangan dalam membentuk pengungkit total.'
    },

    { kind: 'h2', text: '1. Teori-Teori Struktur Modal' },
    {
      kind: 'table',
      headers: ['Teori Struktur Modal', 'Pencetus & Asumsi Utama', 'Simpulan bagi Keputusan Utang'],
      rows: [
        ['1. MM Tanpa Pajak (1958)', 'Pasar modal sempurna, tanpa pajak, tanpa biaya kebangkrutan.', 'Nilai perusahaan **TIDAK DIPENGARUHI** oleh struktur modal ($V_L = V_U$). WACC konstan.'],
        ['2. MM Dengan Pajak (1963)', 'Bunga utang mengurangi pajak penghasilan (*Tax Deductible*).', 'Nilai perusahaan naik seiring bertambahnya utang ($V_L = V_U + T \\times D$). Struktur modal optimal = 100% Utang!'],
        ['3. Trade-Off Theory', 'Mempertimbangkan *Tax Shield* sekaligus **Biaya Tekanan Finansial (Financial Distress Costs)**.', 'Struktur modal optimal berada pada titik di mana manfaat marjinal penghematan pajak tepat seimbang dengan kenaikan biaya kebangkrutan.'],
        ['4. Pecking Order Theory', 'Asimetri informasi antara manajer dan investor.', 'Perusahaan mendanai investasi dengan urutan prioritas: (1) Laba Ditahan Internal $\\rightarrow$ (2) Utang $\\rightarrow$ (3) Saham Baru (Pilihan Terakhir).']
      ],
      caption: 'Tabel 9.1: Evolusi teori struktur modal korporasi.'
    },

    CASE_LEVERAGE_DTL,

    { kind: 'h2', text: '2. Rumus Formula Derajat Leverage' },
    {
      kind: 'table',
      headers: ['Jenis Leverage', 'Formula Titik Dasar', 'Formula Berbasis Persentase Perubahan'],
      rows: [
        ['Degree of Operating Leverage (DOL)', '$\\text{DOL} = \\frac{Q(P - V)}{Q(P - V) - F} = \\frac{\\text{Gross Margin}}{\\text{EBIT}}$', '$\\text{DOL} = \\frac{\\% \\Delta \\text{EBIT}}{\\% \\Delta \\text{Sales}}$'],
        ['Degree of Financial Leverage (DFL)', '$\\text{DFL} = \\frac{\\text{EBIT}}{\\text{EBIT} - I}$', '$\\text{DFL} = \\frac{\\% \\Delta \\text{EPS}}{\\% \\Delta \\text{EBIT}}$'],
        ['Degree of Total Leverage (DTL)', '$\\text{DTL} = \\text{DOL} \\times \\text{DFL} = \\frac{Q(P - V)}{\\text{EBIT} - I}$', '$\\text{DTL} = \\frac{\\% \\Delta \\text{EPS}}{\\% \\Delta \\text{Sales}}$']
      ],
      caption: 'Tabel 9.2: Rumus perhitungan DOL, DFL, dan DTL.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 9' },
    {
      kind: 'ul',
      items: [
        '**DOL Tinggi**: Perusahaan dengan biaya tetap tinggi (otomatisasi pabrik besar) memiliki volatilitas EBIT yang sangat peka terhadap perubahan penjualan.',
        '**DFL Tinggi**: Perusahaan dengan beban bunga utang tinggi memiliki volatilitas EPS yang sangat tinggi.',
        '**Trade-Off Optimal**: Titik WACC terendah menghasilkan Nilai Perusahaan ($V$) tertinggi.'
      ]
    }
  ]
};