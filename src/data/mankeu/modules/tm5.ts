import type { Reading } from '../../../types';
import { CASE_WACC_COMPREHENSIVE } from '../mankeuPracticeCases';

const SVG_WACC_STRUCTURE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KOMPONEN BIAYA MODAL RATA-RATA TERTIMBANG (WACC)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">BIAYA UTANG (DEBT)</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">After-Tax Cost of Debt:</text>
  <text x="125" y="122" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">r_d × (1 - T)</text>
  <text x="125" y="146" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tax-deductible interest</text>
  <text x="125" y="162" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Biaya komponen terendah</text>
  <text x="125" y="180" fill="#4ade80" font-size="9" text-anchor="middle">Tax Shield Benefit</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="340" y="78" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">SAHAM PREFEREN</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Cost of Preferred Stock:</text>
  <text x="340" y="122" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">r_p = D_p / P_n</text>
  <text x="340" y="146" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dividen tdk kurangi pajak</text>
  <text x="340" y="162" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Memperhitungkan flotation</text>
  <text x="340" y="180" fill="#fde68a" font-size="9" text-anchor="middle">Hybrid Capital</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="555" y="78" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">SAHAM BIASA (EQUITY)</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Cost of Common Equity (r_s):</text>
  <text x="555" y="122" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">CAPM / DCF / Bond+RP</text>
  <text x="555" y="146" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kompensasi risiko residual</text>
  <text x="555" y="162" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Komponen biaya tertinggi</text>
  <text x="555" y="180" fill="#fca5a5" font-size="9" text-anchor="middle">Opportunity Cost Modal</text>
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
