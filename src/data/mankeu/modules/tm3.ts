import type { Reading } from '../../../types';
import { CASE_TVM_LOAN_AMORTIZATION } from '../mankeuPracticeCases';

const SVG_TVM_TIMELINE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">GARIS WAKTU NILAI WAKTU UANG (TIME VALUE OF MONEY TIMELINE)</text>
  
  <line x1="60" y1="110" x2="620" y2="110" stroke="#475569" stroke-width="3"/>
  
  <circle cx="90" cy="110" r="14" fill="#38bdf8"/>
  <text x="90" y="115" fill="#0f172a" font-size="11" font-weight="700" text-anchor="middle">0</text>
  <text x="90" y="85" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">PV</text>
  <text x="90" y="145" fill="#94a3b8" font-size="9" text-anchor="middle">Saat Ini (t=0)</text>

  <circle cx="230" cy="110" r="14" fill="#64748b"/>
  <text x="230" y="115" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">1</text>
  <text x="230" y="85" fill="#cbd5e1" font-size="10" font-weight="700" text-anchor="middle">PMT 1</text>
  <text x="230" y="145" fill="#94a3b8" font-size="9" text-anchor="middle">Akhir Thn 1</text>

  <circle cx="370" cy="110" r="14" fill="#64748b"/>
  <text x="370" y="115" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">2</text>
  <text x="370" y="85" fill="#cbd5e1" font-size="10" font-weight="700" text-anchor="middle">PMT 2</text>
  <text x="370" y="145" fill="#94a3b8" font-size="9" text-anchor="middle">Akhir Thn 2</text>

  <circle cx="510" cy="110" r="14" fill="#64748b"/>
  <text x="510" y="115" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">3</text>
  <text x="510" y="85" fill="#cbd5e1" font-size="10" font-weight="700" text-anchor="middle">PMT 3</text>
  <text x="510" y="145" fill="#94a3b8" font-size="9" text-anchor="middle">Akhir Thn 3</text>

  <circle cx="610" cy="110" r="14" fill="#4ade80"/>
  <text x="610" y="115" fill="#0f172a" font-size="11" font-weight="700" text-anchor="middle">N</text>
  <text x="610" y="85" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">FV</text>
  <text x="610" y="145" fill="#94a3b8" font-size="9" text-anchor="middle">Masa Depan (t=N)</text>

  <text x="350" y="65" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">Pemajemukan (Compounding): FV = PV × (1 + i)^N</text>
  <text x="350" y="180" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Pendiskontoan (Discounting): PV = FV / (1 + i)^N</text>
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
