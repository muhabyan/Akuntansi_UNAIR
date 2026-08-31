import type { Reading } from '../../../types';
import { CASE_LOAN_AMORTIZATION } from '../mankeuPracticeCases';

const SVG_TIMELINE_CASHFLOW = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">GARIS WAKTU ARUS KAS &amp; KONSEP DASAR TVM (BRIGHAM CH. 5)</text>
  
  <!-- Timeline bar -->
  <line x1="80" y1="120" x2="600" y2="120" stroke="#475569" stroke-width="3"/>
  
  <!-- Points 0, 1, 2, 3, N -->
  <circle cx="100" cy="120" r="8" fill="#38bdf8"/>
  <text x="100" y="150" fill="#f8fafc" font-size="12" font-weight="700" text-anchor="middle">0 (Hari Ini)</text>
  <text x="100" y="95" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">PV</text>

  <circle cx="230" cy="120" r="6" fill="#94a3b8"/>
  <text x="230" y="150" fill="#cbd5e1" font-size="11" text-anchor="middle">1</text>
  <text x="230" y="95" fill="#94a3b8" font-size="10" text-anchor="middle">CF1</text>

  <circle cx="360" cy="120" r="6" fill="#94a3b8"/>
  <text x="360" y="150" fill="#cbd5e1" font-size="11" text-anchor="middle">2</text>
  <text x="360" y="95" fill="#94a3b8" font-size="10" text-anchor="middle">CF2</text>

  <circle cx="490" cy="120" r="6" fill="#94a3b8"/>
  <text x="490" y="150" fill="#cbd5e1" font-size="11" text-anchor="middle">3</text>
  <text x="490" y="95" fill="#94a3b8" font-size="10" text-anchor="middle">CF3</text>

  <circle cx="580" cy="120" r="8" fill="#34d399"/>
  <text x="580" y="150" fill="#f8fafc" font-size="12" font-weight="700" text-anchor="middle">N</text>
  <text x="580" y="95" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">FV</text>

  <!-- Arrows Compounding & Discounting -->
  <path d="M 120 75 Q 340 45 560 75" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="340" y="55" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Pemajemukan (Compounding): FV = PV &times; (1 + I)^N &rarr;</text>

  <path d="M 560 175 Q 340 205 120 175" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="340" y="195" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">&larr; Pendiskontoan (Discounting): PV = FV / (1 + I)^N</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Time Value of Money (Nilai Waktu dari Uang)',
  ref: 'Brigham & Houston Ch. 5',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 3: Menguasai prinsip fundamental Nilai Waktu dari Uang (Time Value of Money), kalkulasi Future Value (FV) dan Present Value (PV) untuk arus kas tunggal, Anuitas Biasa vs Anuitas Jatuh Tempo (Annuity Due), Arus Kas Tidak Rata (Uneven Cash Flows), Perpetuitas, Bunga Majemuk Berkala (EAR vs APR), serta Skedul Amortisasi Pinjaman.',
  objectives: [
    'Menjelaskan mengapa satu rupiah hari ini bernilai lebih tinggi daripada satu rupiah di masa depan.',
    'Menghitung Future Value (FV) melalui Pemajemukan (Compounding) dan Present Value (PV) melalui Pendiskontoan (Discounting).',
    'Membedakan Anuitas Biasa (Ordinary Annuity) vs Anuitas Jatuh Tempo (Annuity Due) dengan faktor pengali (1 + I).',
    'Menghitung nilai sekarang dari Perpetuitas (Perpetuity: PV = PMT / I).',
    'Mengonversi Suku Bunga Nominal (Annual Percentage Rate / APR) menjadi Suku Bunga Efektif Tahunan (Effective Annual Rate / EAR).',
    'Menyusun Tabel Amortisasi Pinjaman (Loan Amortization Schedule).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Garis Waktu Pemajemukan (Compounding) dan Pendiskontoan (Discounting)',
      svg: SVG_TIMELINE_CASHFLOW,
      caption: 'Gambar 3.1: Alur perhitungan nilai masa depan dan nilai sekarang sepanjang garis waktu.'
    },

    { kind: 'h2', text: '1. Rumus Dasar Time Value of Money' },
    {
      kind: 'table',
      headers: ['Konsep Aliran Kas', 'Rumus Matematis', 'Keterangan Parameter'],
      rows: [
        ['Arus Kas Tunggal - FV', 'FV_N = PV \\times (1 + I)^N', 'PV = Nilai sekarang, I = Suku bunga per periode, N = Jumlah periode.'],
        ['Arus Kas Tunggal - PV', 'PV = \\frac{FV_N}{(1 + I)^N} = FV_N \\times (1 + I)^{-N}', 'Mendiskontokan arus kas masa depan ke nilai hari ini.'],
        ['Anuitas Biasa (Ordinary Annuity - FVA)', 'FVA_N = PMT \\times \\left[ \\frac{(1 + I)^N - 1}{I} \\right]', 'Pembayaran berkala seragam yang terjadi di **AKHIR** setiap periode.'],
        ['Anuitas Biasa (Ordinary Annuity - PVA)', 'PVA_N = PMT \\times \\left[ \\frac{1 - (1 + I)^{-N}}{I} \\right]', 'Nilai sekarang dari serangkaian pembayaran di akhir periode.'],
        ['Anuitas Jatuh Tempo (Annuity Due)', 'PVA_{\\text{due}} = PVA_{\\text{ordinary}} \\times (1 + I)', 'Pembayaran terjadi di **AWAL** setiap periode (selalu bernilai lebih tinggi sebesar faktor 1+I).'],
        ['Perpetuitas (Perpetuity)', 'PV = \\frac{PMT}{I}', 'Serangkaian pembayaran seragam tanpa batas waktu (selamanya).']
      ],
      caption: 'Tabel 3.1: Formula fundamental nilai waktu dari uang.'
    },

    { kind: 'h2', text: '2. Pemajemukan Bukan Tahunan: APR vs EAR' },
    {
      kind: 'p',
      text: 'Jika bunga dimajemukkan beberapa kali dalam setahun ($m$ kali per tahun, misal: semesteran $m=2$, kuartalan $m=4$, bulanan $m=12$), tingkat bunga efektif yang sebenarnya diperoleh investor adalah **Effective Annual Rate (EAR)**:'
    },
    {
      kind: 'formula',
      text: 'EAR = \\left( 1 + \\frac{I_{\\text{NOM}}}{m} \\right)^m - 1',
      note: 'Makin sering pemajemukan terjadi (m makin besar), makin tinggi EAR dibanding suku bunga nominal APR!'
    },

    CASE_LOAN_AMORTIZATION,

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 3' },
    {
      kind: 'ul',
      items: [
        '**Annuity Due**: Selalu kalikan formula anuitas biasa dengan `(1 + I)`.',
        '**Amortisasi Pinjaman**: Total PMT bersifat tetap, tetapi porsi bunga menurun seiring penurunan saldo pokok, sementara porsi pelunasan pokok meningkat.',
        '**Perpetuity**: Saham preferen tanpa jatuh tempo dinilai menggunakan rumus perpetuitas $PV = D_p / r_p$.'
      ]
    }
  ]
};