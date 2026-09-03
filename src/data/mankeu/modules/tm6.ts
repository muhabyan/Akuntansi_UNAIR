import type { Reading } from '../../../types';
import { CASE_CAPITAL_BUDGETING_EVAL } from '../mankeuPracticeCases';

const SVG_CAPITAL_BUDGETING = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="npvGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk6)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">5 METODE EVALUASI PENGANGGARAN MODAL (CAPITAL BUDGETING CRITERIA)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">DECISION RULES</text>

  <!-- Left: Gold Standard King (NPV) Large Card -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="310" height="240" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <rect x="0" y="0" width="310" height="34" rx="12" fill="url(#npvGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="155" y="22" fill="#34d399" font-size="11" font-weight="900" text-anchor="middle">1. NET PRESENT VALUE (GOLD STANDARD)</text>
    
    <rect class="svg-subcard" x="14" y="44" width="282" height="32" rx="6" fill="#1e293b"/>
    <text class="text-accent-green" x="155" y="64" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">Kriteria: Terima Jika NPV &gt; 0</text>

    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Menghitung tambahan kekayaan riil pemegang saham</text>
    <text class="svg-text" x="14" y="115" fill="#cbd5e1" font-size="8">• Mempertimbangkan seluruh arus kas masuk &amp; keluar</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="8">• Menggunakan prinsip nilai waktu uang (Discount rate WACC)</text>
    <text class="svg-text" x="14" y="149" fill="#cbd5e1" font-size="8">• Mengasumsikan reinvestasi pada tingkat biaya modal (Realistis)</text>
    <text class="svg-text" x="14" y="166" fill="#cbd5e1" font-size="8">• Selalu konsisten saat memilih proyek saling eksklusif</text>
    
    <rect class="svg-badge-green" x="14" y="190" width="282" height="28" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="155" y="208" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">Metode Terbaik &amp; Paling Teoretis Bebas Bias</text>
  </g>

  <!-- Right: 4 Other Methods Grid (2x2) -->
  <g transform="translate(365, 75)">
    <!-- 2. IRR -->
    <rect class="svg-card" x="0" y="0" width="245" height="112" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="14" y="20" fill="#38bdf8" font-size="9.5" font-weight="800">2. INTERNAL RATE OF RETURN (IRR)</text>
    <rect class="svg-subcard" x="14" y="28" width="217" height="18" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="122" y="41" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Kriteria: Terima jika IRR &gt; WACC</text>
    <text class="svg-text" x="14" y="62" fill="#cbd5e1" font-size="7.5">• Tingkat diskonto yang membuat NPV = 0</text>
    <text class="svg-text" x="14" y="76" fill="#cbd5e1" font-size="7.5">• Kelemahan: Asumsi reinvestasi setinggi IRR</text>
    <text class="text-accent-red" x="14" y="90" fill="#f87171" font-size="7.5">• Dapat muncul Multiple IRR bila arus kas tidak normal</text>

    <!-- 3. MIRR -->
    <rect class="svg-card" x="255" y="0" width="245" height="112" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <text class="text-accent-purple" x="14" y="20" fill="#a78bfa" font-size="9.5" font-weight="800">3. MODIFIED IRR (MIRR)</text>
    <rect class="svg-subcard" x="14" y="28" width="217" height="18" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="122" y="41" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Kriteria: Terima jika MIRR &gt; WACC</text>
    <text class="svg-text" x="14" y="62" fill="#cbd5e1" font-size="7.5">• Memperbaiki kelemahan utama model IRR standar</text>
    <text class="svg-text" x="14" y="76" fill="#cbd5e1" font-size="7.5">• Arus kas masuk direinvestasikan pada suku bunga WACC</text>
    <text class="text-accent-purple" x="14" y="90" fill="#a78bfa" font-size="7.5">• Menghilangkan problem multiple IRR</text>

    <!-- 4. Payback Period -->
    <rect class="svg-card" x="0" y="128" width="245" height="112" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <text class="text-accent-amber" x="14" y="20" fill="#fbbf24" font-size="9.5" font-weight="800">4. PAYBACK PERIOD (PP)</text>
    <rect class="svg-subcard" x="14" y="28" width="217" height="18" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="122" y="41" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Kriteria: Waktu Balik Modal &lt; Target</text>
    <text class="svg-text" x="14" y="62" fill="#cbd5e1" font-size="7.5">• Sederhana &amp; mengukur likuiditas kas awal</text>
    <text class="text-accent-red" x="14" y="76" fill="#f87171" font-size="7.5">• Mengabaikan arus kas setelah periode balik modal</text>
    <text class="text-accent-red" x="14" y="90" fill="#f87171" font-size="7.5">• Mengabaikan nilai waktu uang (pada Simple PP)</text>

    <!-- 5. Profitability Index -->
    <rect class="svg-card" x="255" y="128" width="245" height="112" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <text class="text-accent-green" x="14" y="20" fill="#34d399" font-size="9.5" font-weight="800">5. PROFITABILITY INDEX (PI)</text>
    <rect class="svg-subcard" x="14" y="28" width="217" height="18" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="122" y="41" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Kriteria: Terima jika PI &gt; 1.0</text>
    <text class="svg-text" x="14" y="62" fill="#cbd5e1" font-size="7.5">• PI = PV Arus Kas Masuk ÷ Investasi Awal</text>
    <text class="svg-text" x="14" y="76" fill="#cbd5e1" font-size="7.5">• Rasio efisiensi "bang-for-buck" modal terpakai</text>
    <text class="text-accent-green" x="14" y="90" fill="#34d399" font-size="7.5">• Sangat ampuh saat perusahaan mengalami penjatahan modal (Rationing)</text>
  </g>
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
