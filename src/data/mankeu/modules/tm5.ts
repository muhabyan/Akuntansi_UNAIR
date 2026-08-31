import type { Reading } from '../../../types';
import { CASE_WACC_COMPREHENSIVE } from '../mankeuPracticeCases';

const SVG_WACC_STRUCTURE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KOMPONEN BIAYA MODAL RATA-RATA TERTIMBANG (WACC)</text>
  
  <!-- Debt Box -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Biaya Utang (Debt)</text>
  <text x="125" y="102" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">rd &times; (1 - T)</text>
  <line x1="45" y1="115" x2="205" y2="115" stroke="#334155"/>
  <text x="125" y="135" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Suku bunga obligasi</text>
  <text x="125" y="152" fill="#cbd5e1" font-size="9.5" text-anchor="middle">disesuaikan dengan</text>
  <text x="125" y="170" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Penghematan Pajak!</text>
  <text x="125" y="190" fill="#94a3b8" font-size="9" text-anchor="middle">(Beban bunga tax-deductible)</text>

  <!-- Preferred Box -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">2. Saham Preferen</text>
  <text x="340" y="102" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">rp = Dp / Pn</text>
  <line x1="260" y1="115" x2="420" y2="115" stroke="#334155"/>
  <text x="340" y="135" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Dividen preferen (Dp)</text>
  <text x="340" y="152" fill="#cbd5e1" font-size="9.5" text-anchor="middle">dibagi harga bersih (Pn)</text>
  <text x="340" y="170" fill="#fca5a5" font-size="9.5" font-weight="700" text-anchor="middle">TANPA PENGHEMATAN PAJAK</text>
  <text x="340" y="190" fill="#94a3b8" font-size="9" text-anchor="middle">(Dividen bukan biaya fiskal)</text>

  <!-- Common Equity Box -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="555" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">3. Ekuitas Biasa</text>
  <text x="555" y="102" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">rs (CAPM / DCF)</text>
  <line x1="475" y1="115" x2="635" y2="115" stroke="#334155"/>
  <text x="555" y="135" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Model CAPM: rRF + b(RPM)</text>
  <text x="555" y="152" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Model DCF: (D1/P0) + g</text>
  <text x="555" y="170" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Bond-Yield + Risk Premium</text>
  <text x="555" y="190" fill="#94a3b8" font-size="9" text-anchor="middle">(Biaya modal tertinggi)</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'The Cost of Capital & Weighted Average Cost of Capital (WACC)',
  ref: 'Brigham & Houston Ch. 10',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 5: Menguasai kalkulasi Biaya Modal Rata-rata Tertimbang (Weighted Average Cost of Capital - WACC), perhitungan Biaya Utang Setelah Pajak ($r_d(1-T)$), Biaya Saham Preferen ($r_p$), 3 metode estimasi Biaya Ekuitas Biasa Internal ($r_s$: CAPM, DCF Gordon Model, Bond Yield Plus Risk Premium), penyesuaian Biaya Emisi Saham Baru (*Flotation Costs*), serta penetapan Hurdle Rate proyek investasi.',
  objectives: [
    'Mendefinisikan konsep Biaya Modal (Cost of Capital) sebagai tingkat pengembalian minimum yang disyaratkan.',
    'Menghitung Biaya Komponen Utang Setelah Pajak (After-tax Cost of Debt) dengan memanfaatkan perisai pajak (Interest Tax Shield).',
    'Menghitung Biaya Saham Preferen ($r_p$).',
    'Mengestimasi Biaya Ekuitas Biasa ($r_s$) menggunakan 3 pendekatan independen.',
    'Menghitung WACC berdasarkan bobot struktur modal sasaran (Target Capital Structure).',
    'Menyesuaikan WACC untuk proyek-proyek dengan tingkat risiko berbeda dari rata-rata korporasi.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Pilar Pembentuk Biaya Modal Rata-rata Tertimbang (WACC)',
      svg: SVG_WACC_STRUCTURE,
      caption: 'Gambar 5.1: Komponen penimbang struktur modal dan penyesuaian pajak pada biaya utang.'
    },

    { kind: 'h2', text: '1. Komponen Biaya Modal Individual' },
    {
      kind: 'table',
      headers: ['Komponen Modal', 'Formula Matematis', 'Kunci Penting'],
      rows: [
        ['1. Biaya Utang Setelah Pajak', 'r_d(1 - T)', 'Beban bunga dapat dikurangkan dari penghasilan kena pajak sehingga biaya riil utang selalu lebih rendah dari suku bunga nominal.'],
        ['2. Biaya Saham Preferen', 'r_p = \\frac{D_p}{P_n}', 'D_p = Dividen preferen tahunan, P_n = Harga penerbitan bersih setelah biaya flotasi. Tidak ada pengurang pajak.'],
        ['3. Biaya Ekuitas (CAPM)', 'r_s = r_{RF} + b(r_M - r_{RF})', 'Metode paling dominan berdasarkan beta saham dan premi risiko pasar.'],
        ['4. Biaya Ekuitas (DCF / Gordon)', 'r_s = \\frac{D_1}{P_0} + g', 'D_1 = Dividen tahun depan, P_0 = Harga saham saat ini, g = Tingkat pertumbuhan konstan dividen.'],
        ['5. Bond-Yield Plus Risk Premium', 'r_s = \\text{Yield Obligasi Klien} + (3\\% \\text{ s.d } 5\\%)', 'Metode estimasi cepat berdasarkan premi risiko historis ekuitas di atas obligasi.']
      ],
      caption: 'Tabel 5.1: Formula perhitungan komponen biaya modal individual.'
    },

    { kind: 'h2', text: '2. Rumus Formula WACC' },
    {
      kind: 'formula',
      text: 'WACC = (w_d \\times r_d(1-T)) + (w_p \\times r_p) + (w_c \\times r_s)',
      note: 'wd, wp, wc = Bobot target utang, saham preferen, dan ekuitas biasa (Total bobot = 100%).'
    },

    CASE_WACC_COMPREHENSIVE,

    { kind: 'h2', text: '3. Penyesuaian WACC untuk Risiko Proyek Berbeda' },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Kesalahan Fatal Manajerial (The Hurdle Rate Trap)',
      text: 'WACC korporasi HANYA boleh digunakan sebagai tingkat diskonto untuk proyek yang memiliki **tingkat risiko yang sama dengan rata-rata risiko bisnis korporasi saat ini**.\n• **Proyek Berisiko Tinggi**: Wajib menggunakan *Risk-Adjusted Cost of Capital* yang **LEBIH TINGGI** dari WACC.\n• **Proyek Berisiko Rendah (Penggantian Mesin Rutin)**: Dapat menggunakan tingkat diskonto di bawah WACC.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 5' },
    {
      kind: 'ul',
      items: [
        '**Pajak**: Hanya komponen Utang yang dikalikan `(1 - T)`.',
        '**Bobot WACC**: Selalu gunakan bobot **Nilai Pasar (Market Value Weights)** atau target struktur modal, bukan nilai buku historis neraca.',
        '**Laba Ditahan**: Laba ditahan memiliki biaya modal ($r_s$) yang mencerminkan opportunity cost pemegang saham (bukan modal gratis!).'
      ]
    }
  ]
};