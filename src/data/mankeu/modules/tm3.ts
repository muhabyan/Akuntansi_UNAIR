import type { Reading } from '../../../types';
import { CASE_TVM_LOAN_AMORTIZATION } from '../mankeuPracticeCases';

const SVG_TVM_TIMELINE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="fvGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="pvGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk3)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">GARIS WAKTU NILAI WAKTU UANG: COMPOUNDING (FV) VS DISCOUNTING (PV)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TVM DYNAMICS</text>

  <!-- Central Timeline Track -->
  <g transform="translate(45, 120)">
    <line x1="20" y1="50" x2="790" y2="50" stroke="#334155" stroke-width="4"/>
    
    <!-- Year 0 (Present Value) -->
    <circle cx="50" cy="50" r="16" fill="#0f172a" stroke="#a78bfa" stroke-width="3"/>
    <text class="text-accent-purple" x="50" y="54" fill="#a78bfa" font-size="10" font-weight="900" text-anchor="middle">t=0</text>
    <text class="text-accent-purple" x="50" y="85" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">PV</text>
    <text class="svg-text" x="50" y="100" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Saat Ini</text>

    <!-- Year 1 -->
    <circle cx="230" cy="50" r="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text class="svg-text" x="230" y="54" fill="#cbd5e1" font-size="9" font-weight="700" text-anchor="middle">t=1</text>
    <text class="svg-muted" x="230" y="85" fill="#94a3b8" font-size="8" text-anchor="middle">Tahun 1</text>

    <!-- Year 2 -->
    <circle cx="410" cy="50" r="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text class="svg-text" x="410" y="54" fill="#cbd5e1" font-size="9" font-weight="700" text-anchor="middle">t=2</text>
    <text class="svg-muted" x="410" y="85" fill="#94a3b8" font-size="8" text-anchor="middle">Tahun 2</text>

    <!-- Year 3 -->
    <circle cx="590" cy="50" r="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text class="svg-text" x="590" y="54" fill="#cbd5e1" font-size="9" font-weight="700" text-anchor="middle">t=3</text>
    <text class="svg-muted" x="590" y="85" fill="#94a3b8" font-size="8" text-anchor="middle">Tahun 3</text>

    <!-- Year N (Future Value) -->
    <circle cx="760" cy="50" r="16" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
    <text class="text-accent-blue" x="760" y="54" fill="#38bdf8" font-size="10" font-weight="900" text-anchor="middle">t=N</text>
    <text class="text-accent-blue" x="760" y="85" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">FV</text>
    <text class="svg-text" x="760" y="100" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Masa Depan</text>

    <!-- Compounding Arc (Top: PV -> FV) -->
    <path d="M 65 35 Q 405 -40 745 35" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4"/>
    <polygon points="745,35 735,28 738,40" fill="#38bdf8"/>
    <rect class="svg-subcard" x="300" y="-30" width="210" height="24" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="405" y="-14" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">COMPOUNDING: FV = PV × (1 + r)ⁿ</text>

    <!-- Discounting Arc (Bottom: FV -> PV) -->
    <path d="M 745 65 Q 405 140 65 65" fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-dasharray="6 4"/>
    <polygon points="65,65 75,72 72,60" fill="#a78bfa"/>
    <rect class="svg-subcard" x="300" y="115" width="210" height="24" rx="6" fill="#1e293b" stroke="#a78bfa"/>
    <text class="text-accent-purple" x="405" y="131" fill="#a78bfa" font-size="9" font-weight="800" text-anchor="middle">DISCOUNTING: PV = FV ÷ (1 + r)ⁿ</text>
  </g>

  <!-- Bottom Explanatory Concept Cards -->
  <g transform="translate(45, 275)">
    <rect class="svg-subcard" x="0" y="0" width="395" height="52" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="14" y="18" fill="#38bdf8" font-size="9" font-weight="800">BUNGA MAJEMUK (COMPOUND INTEREST)</text>
    <text class="svg-text" x="14" y="34" fill="#cbd5e1" font-size="7.5">Bunga menghasilkan bunga kembali seiring waktu (Eksponensial). Semakin tinggi suku bunga</text>
    <text class="svg-text" x="14" y="44" fill="#cbd5e1" font-size="7.5">dan periode (n), akumulasi nilai akhir kas melonjak berlipat ganda.</text>

    <rect class="svg-subcard" x="415" y="0" width="395" height="52" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="14" y="18" fill="#a78bfa" font-size="9" font-weight="800">NILAI SEKARANG (PRESENT VALUE &amp; INFLASI)</text>
    <text class="svg-text" x="14" y="34" fill="#cbd5e1" font-size="7.5">Rp 1 juta hari ini lebih berharga daripada Rp 1 juta 5 tahun lagi karena adanya peluang investasi</text>
    <text class="svg-text" x="14" y="44" fill="#cbd5e1" font-size="7.5">(Opportunity Cost of Capital) serta erosi daya beli akibat inflasi.</text>
  </g>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Time Value of Money (TVM), Cash Flow Mechanics, & Loan Amortization',
  ref: 'Brigham & Ehrhardt Ch. 5 | Konsep Nilai Waktu dari Uang | Skedul Amortisasi Pinjaman',
  intro: 'TM 3 membahas jantung matematika keuangan korporasi: konsep Nilai Waktu dari Uang (Time Value of Money), pemajemukan (Compounding) vs pendiskontoan (Discounting), anuitas biasa (Ordinary Annuity) vs anuitas jatuh tempo (Annuity Due), perpetuitas (Perpetuity), tingkat suku bunga efektif (EAR / EFF%), serta penyusunan skedul amortisasi kredit.',
  objectives: [
    'Menghitung Present Value (PV) dan Future Value (FV) arus kas tunggal, anuitas, dan arus kas tidak merata (Uneven Cash Flows).',
    'Membedakan Anuitas Biasa (pembayaran akhir periode) vs Anuitas Jatuh Tempo (pembayaran awal periode).',
    'Menghitung Suku Bunga Efektif Tahunan (Effective Annual Rate / EAR) dengan pemajemukan non-tahunan (semi-annual, quarterly, monthly).',
    'Menyusun skedul amortisasi pinjaman lengkap dan memisahkan porsi pembayaran pokok vs beban bunga.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 3.1: Garis Waktu Nilai Waktu Uang (Compounding vs Discounting).',
      svg: SVG_TVM_TIMELINE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 3'
    },
    {
      kind: 'table',
      headers: ['Konsep TVM', 'Formula Pokok', 'Karakteristik Aliran Kas', 'Aplikasi Praktis'],
      rows: [
        ['Lump-Sum (Arus Kas Tunggal)', '$FV_N = PV(1+i)^N$ \\quad | \\quad $PV = \\frac{FV_N}{(1+i)^N}$', 'Satu kali penerimaan/pembayaran kas di masa depan.', 'Valuasi obligasi zero-coupon, target tabungan pensiun.'],
        ['Ordinary Annuity (Anuitas Biasa)', '$PV = PMT \\left[\\frac{1 - (1+i)^{-N}}{i}\\right]$', 'Aliran kas sama besar di AKHIR setiap periode.', 'Cicilan KPR, angsuran kredit mobil, kupon obligasi biasa.'],
        ['Annuity Due (Anuitas Dimuka)', '$PV_{Due} = PV_{Ordinary} \\times (1+i)$', 'Aliran kas sama besar di AWAL setiap periode.', 'Pembayaran sewa gedung, premi asuransi tahunan.'],
        ['Perpetuity (Perpetuitas)', '$PV = \\frac{PMT}{i}$ \\quad | \\quad $PV = \\frac{D_1}{r - g}$ (Growing)', 'Aliran kas sama besar yang berlangsung selamanya.', 'Saham preferen dividen tetap, saham biasa Gordon Model.'],
        ['Amortisasi Pinjaman', '$PMT = \\frac{PV}{PVIFA_{i, N}}$', 'Angsuran tetap periodik melunasi pokok + bunga hingga 0.', 'Kredit investasi bank sindikasi, restrukturisasi utang.']
      ],
      caption: 'Tabel 3.0: Matriks rumus dan aplikasi konsep Time Value of Money.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: TVM & Effective Annual Rate (EAR)'
    },
    {
      kind: 'formula',
      text: `\\text{Effective Annual Rate (EAR / EFF\\%)} = \\left(1 + \\frac{r_{Nom}}{m}\\right)^m - 1
\\text{Continuous Compounding (Pemajemukan Kontinu)}: \\quad FV_N = PV \\times e^{i \\times N} \\quad | \\quad EAR = e^{r_{Nom}} - 1
\\text{Growing Annuity}: \\quad PV = \\frac{PMT_1}{r - g} \\left[1 - \\left(\\frac{1+g}{1+r}\\right)^N\\right]`,
      note: 'Semakin sering frekuensi pemajemukan per tahun ($m$), semakin tinggi nilai EAR dibandingkan suku bunga nominal tahunan ($r_{Nom}$).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perbandingan Tabungan Anuitas Biasa vs Anuitas Dimuka',
      prompt: 'Seseorang menabung Rp 10.000.000 setiap tahun selama 5 tahun dengan suku bunga 8% per tahun. Berapa akumulasi tabungan pada akhir tahun ke-5 jika: (a) Menabung di akhir setiap tahun (Ordinary Annuity), dan (b) Menabung di awal setiap tahun (Annuity Due)?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**(a) Ordinary Annuity (Akhir Tahun)**:\n$FV = PMT \\times \\left[\\frac{(1+i)^N - 1}{i}\\right] = 10.000.000 \\times \\left[\\frac{(1,08)^5 - 1}{0,08}\\right] = 10.000.000 \\times 5,866601 = \\mathbf{Rp 58.666.010}$.',
            '**(b) Annuity Due (Awal Tahun)**:\n$FV_{Due} = FV_{Ordinary} \\times (1+i) = Rp 58.666.010 \\times 1,08 = \\mathbf{Rp 63.359.291}$.',
            '**Selisih**: Menabung di awal periode menghasilkan tambahan Rp 4.693.281 karena setiap setoran memperoleh bunga 1 tahun lebih banyak.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 3'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Compounding & Discounting TVM', 'Perhitungan PV dan FV single sum dan uneven cash flows.', 'Mampu menghitung nilai kini dan nilai masa depan arus kas bisnis.'],
        ['2', 'Annuity Ordinary vs Due & Perpetuity', 'Penerapan faktor anuitas dan perpetuitas bertumbuh.', 'Menguasai perbedaan nilai waktu pembayaran awal vs akhir periode.'],
        ['3', 'Nominal vs Periodic vs EAR', 'Konversi suku bunga majemuk multi-periode.', 'Mampu menghitung EAR pada skema pemajemukan bulanan/kuartalan.'],
        ['4', 'Skedul Amortisasi Utang', 'Dekomposisi cicilan ke porsi pokok vs beban bunga.', 'Mampu menyusun tabel amortisasi pinjaman perbankan 4-5 periode.']
      ],
      caption: 'Tabel 3.2: Peta penguasaan submateri TM 3 Manajemen Keuangan.'
    },
    CASE_TVM_LOAN_AMORTIZATION,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Nilai Waktu Uang**: Satu rupiah yang diterima hari ini bernilai lebih tinggi daripada satu rupiah yang diterima di masa depan karena potensi kapasitas menghasilkan bunga (Earning Power).',
        '**Annuity Due Selalu Lebih Besar**: $PV_{Due} = PV_{Ordinary} \\times (1+i)$ dan $FV_{Due} = FV_{Ordinary} \\times (1+i)$.',
        '**Porsi Bunga Menurun, Porsi Pokok Meningkat**: Pada skedul amortisasi pinjaman dengan angsuran tetap (PMT), porsi beban bunga selalu menurun setiap periode seiring berkurangnya sisa saldo pokok pinjaman.'
      ]
    }
  ]
};
