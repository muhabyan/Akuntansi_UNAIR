import type { Reading } from '../../../types';
import { CASE_CAPITAL_BUDGETING_EVAL } from '../mankeuPracticeCases';

const SVG_CAPITAL_BUDGETING = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">5 METODE EVALUASI PENGANGGARAN MODAL (CAPITAL BUDGETING)</text>
  
  <rect x="25" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="84" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">NET PRESENT VALUE</text>
  <text x="84" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(NPV - Raja Metode)</text>
  <text x="84" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tambahan nilai riil</text>
  <text x="84" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Asumsi reinvest: WACC</text>
  <text x="84" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kriteria: NPV &gt; 0</text>
  <text x="84" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Superior Rule</text>

  <rect x="153" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="212" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">INTERNAL RATE</text>
  <text x="212" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(IRR)</text>
  <text x="212" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Discount rate saat NPV=0</text>
  <text x="212" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Asumsi reinvest: IRR</text>
  <text x="212" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kriteria: IRR &gt; WACC</text>
  <text x="212" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Tingkat Imbal Hasil</text>

  <rect x="281" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="340" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">MODIFIED IRR</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(MIRR)</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Solusi Multiple IRR</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Asumsi reinvest: WACC</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kriteria: MIRR &gt; WACC</text>
  <text x="340" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Perbaikan IRR</text>

  <rect x="409" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="468" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">PROFITABILITY IX</text>
  <text x="468" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(PI)</text>
  <text x="468" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PV Arus Kas / Initial</text>
  <text x="468" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Efisiensi per rupiah</text>
  <text x="468" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kriteria: PI &gt; 1,0</text>
  <text x="468" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Capital Rationing</text>

  <rect x="537" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="596" y="78" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">PAYBACK PERIOD</text>
  <text x="596" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(PB &amp; DPB)</text>
  <text x="596" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Waktu balik modal</text>
  <text x="596" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Ukuran likuiditas</text>
  <text x="596" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Abaikan CF post-PB</text>
  <text x="596" y="175" fill="#fca5a5" font-size="9" font-weight="700" text-anchor="middle">Skrining Likuiditas</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'The Basics of Capital Budgeting: NPV, IRR, MIRR, PI, & Payback Period',
  ref: 'Brigham & Ehrhardt Ch. 10 | Evaluasi Penganggaran Modal | Keputusan Investasi Independen vs Mutually Exclusive',
  intro: 'TM 6 membahas kriteria pengambilan keputusan investasi aset riil: Net Present Value (NPV), Internal Rate of Return (IRR), Modified IRR (MIRR), Profitability Index (PI), Payback Period, serta Discounted Payback. Termasuk penyelesaian konflik peringkat pada proyek saling meniadakan (Mutually Exclusive) dan titik temu Crossover Rate.',
  objectives: [
    'Menghitung dan menginterpretasikan 5 kriteria penganggaran modal (NPV, IRR, MIRR, PI, Payback).',
    'Menjelaskan mengapa metode NPV selalu lebih unggul secara teoritis dibanding IRR (Reinvestment Rate Assumption).',
    'Menghitung Crossover Rate pada profil NPV dua proyek mutually exclusive.',
    'Menyelesaikan masalah Multiple IRR pada proyek non-normal cash flows menggunakan MIRR.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 6.1: 5 Metode Evaluasi Penganggaran Modal (Capital Budgeting Criteria).',
      svg: SVG_CAPITAL_BUDGETING
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 6'
    },
    {
      kind: 'table',
      headers: ['Metode Evaluasi', 'Formula Dasar', 'Kriteria Penerimaan', 'Kelebihan & Kelemahan'],
      rows: [
        ['Net Present Value (NPV)', '$NPV = \\sum_{t=0}^N \\frac{CF_t}{(1+WACC)^t}$', 'Terima jika $NPV > 0$.', 'Kelebihan: Mengukur penambahan nilai moneter absolut; Kelemahan: Butuh estimasi WACC yang presisi.'],
        ['Internal Rate of Return (IRR)', '$NPV = \\sum_{t=0}^N \\frac{CF_t}{(1+IRR)^t} = 0$', 'Terima jika $IRR > WACC$.', 'Kelebihan: Menghasilkan % return intuitif; Kelemahan: Asumsi reinvestasi tidak realistis (reinvest pada IRR).'],
        ['Modified IRR (MIRR)', '$PV_{\\text{Costs}} = \\frac{TV_{\\text{Inflows}}}{(1+MIRR)^N}$', 'Terima jika $MIRR > WACC$.', 'Kelebihan: Mengasumsikan reinvestasi pada WACC dan mengatasi multiple IRR.'],
        ['Profitability Index (PI)', '$PI = \\frac{\\sum PV \\text{ of Inflows}}{|CF_0|} = 1 + \\frac{NPV}{|CF_0|}$', 'Terima jika $PI > 1,0$.', 'Sangat berguna saat perusahaan mengalami Penjatahan Modal (Capital Rationing).'],
        ['Discounted Payback', 'Periode kumulatif $PV(CF_t)$ menutup $CF_0$', 'Terima jika $DPB < \\text{Target PB}$.', 'Memperhitungkan TVM, namun mengabaikan arus kas setelah titik impas.']
      ],
      caption: 'Tabel 6.0: Perbandingan 5 metode evaluasi penganggaran modal.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Capital Budgeting & Crossover Rate'
    },
    {
      kind: 'formula',
      text: `\\text{Modified IRR (MIRR)}: \\quad MIRR = \\sqrt[N]{\\frac{\\text{Terminal Value of Cash Inflows}}{\\text{Present Value of Cash Outflows}}} - 1
\\text{Crossover Rate}: \\quad \\text{Hitung IRR dari Selisih Arus Kas Proyek } (CF_{A-B, t} = CF_{A, t} - CF_{B, t})
\\text{Profitability Index (PI)} = \\frac{\\text{PV of Cash Inflows}}{\\text{Initial Outlay } (|CF_0|)} = 1 + \\frac{NPV}{|CF_0|}`,
      note: 'Jika WACC < Crossover Rate, konflik pemilihan antara proyek A dan proyek B akan terjadi; jika WACC > Crossover Rate, NPV dan IRR memberikan rekomendasi proyek yang sama.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Kalkulasi Crossover Rate 2 Proyek Bersaing',
      prompt: 'Proyek X: $CF_0 = -100$; $CF_1 = 60$; $CF_2 = 60$. Proyek Y: $CF_0 = -100$; $CF_1 = 10$; $CF_2 = 120$. Hitung Crossover Rate kedua proyek tersebut!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Langkah 1 (Hitung Selisih Arus Kas $\\Delta CF = CF_X - CF_Y$)**:\n- $\\Delta CF_0 = -100 - (-100) = 0$.\n- $\\Delta CF_1 = 60 - 10 = +50$.\n- $\\Delta CF_2 = 60 - 120 = -60$.',
            '**Langkah 2 (Selesaikan IRR Selisih)**:\n$0 = 0 + \\frac{50}{1 + k} - \\frac{60}{(1 + k)^2} \\implies 50(1 + k) = 60 \\implies 1 + k = \\frac{60}{50} = 1,20 \\implies k = \\mathbf{20,0\\%}$.',
            '**Makna Crossover Rate 20%**: Pada tingkat diskonto WACC = 20%, kedua proyek menghasilkan NPV yang persis sama. Jika WACC < 20%, Proyek Y memiliki NPV lebih tinggi; jika WACC > 20%, Proyek X memiliki NPV lebih tinggi.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 6'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kalkulasi NPV, IRR, MIRR, PI, PB', 'Perhitungan 5 metode evaluasi pada arus kas normal dan non-normal.', 'Mampu menghasilkan seluruh metrik keputusan investasi secara presisi.'],
        ['2', 'Konflik Keputusan Mutually Exclusive', 'Analisis asumsi reinvestment rate antara NPV (WACC) vs IRR (IRR).', 'Mampu memutuskan proyek pemenang dengan justifikasi akademik kuat.'],
        ['3', 'Crossover Rate & Profil NPV', 'Perhitungan titik potong profil kurva NPV dua proyek bersaing.', 'Mampu membuat grafik profil NPV dan menganalisis sensitivitas WACC.']
      ],
      caption: 'Tabel 6.2: Peta penguasaan submateri TM 6 Manajemen Keuangan.'
    },
    CASE_CAPITAL_BUDGETING_EVAL,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**NPV Selalu Jadi Kriteria Utama**: Saat terjadi perbedaan rekomendasi antara NPV dan IRR pada proyek mutually exclusive, selalu ikuti NPV karena NPV langsung mengukur penambahan kekayaan absolut pemegang saham.',
        '**Multiple IRR**: Terjadi pada proyek dengan arus kas non-normal (tanda arus kas berubah lebih dari 1 kali, misalnya $+ - +$). Solusi resmi untuk mengatasinya adalah menggunakan MIRR.',
        '**Profitability Index untuk Penjatahan Modal**: Jika dana investasi terbatas (Capital Rationing), urutkan proyek berdasarkan PI tertinggi untuk memaksimalisasi total NPV gabungan.'
      ]
    }
  ]
};
