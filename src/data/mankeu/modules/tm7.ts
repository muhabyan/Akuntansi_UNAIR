import type { Reading } from '../../../types';

const SVG_PROJECT_CASHFLOWS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TIGA TAHAPAN ARUS KAS PROYEK INVESTASI (BRIGHAM CH. 12)</text>
  
  <!-- Initial Outlay -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="125" y="80" fill="#f43f5e" font-size="11.5" font-weight="700" text-anchor="middle">1. Initial Outlay (t = 0)</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Pengeluaran Kas Awal</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Harga beli aset baru</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Biaya angkut &amp; instalasi</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Tambahan NOWC</text>
  <text x="125" y="185" fill="#fca5a5" font-size="9.5" text-anchor="middle">• - Nilai jual aset lama (net)</text>

  <!-- Operating Cash Flow -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="340" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">2. Operating (t = 1..N)</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Arus Kas Operasional Tahunan</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• EBIT &times; (1 - T)</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• + Beban Depresiasi</text>
  <text x="340" y="166" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">OCF = NOPAT + Depr</text>
  <text x="340" y="188" fill="#94a3b8" font-size="9" text-anchor="middle">(Tanpa kurangkan bunga!)</text>

  <!-- Terminal Cash Flow -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="555" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">3. Terminal (t = N)</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Arus Kas Akhir Proyek</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Nilai sisa/jual mesin (Salvage)</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• - Pajak atas laba jual mesin</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• + Pemulihan (Recovery) NOWC</text>
  <text x="555" y="188" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Total Kas Masuk Terakhir</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Cash Flow Estimation and Project Risk Analysis',
  ref: 'Brigham & Houston Ch. 12',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 7: Menguasai estimasi arus kas inkremental (*Relevant Incremental Cash Flows*), pemisahan Sunk Costs vs Opportunity Costs vs Externalities (Cannibalization), kalkulasi Initial Outlay, Operating Cash Flows (OCF), Terminal Year Cash Flow, serta teknik analisis risiko proyek: Analisis Sensitivitas, Analisis Skenario, dan Simulasi Monte Carlo.',
  objectives: [
    'Mengidentifikasi arus kas inkremental yang relevan dalam analisis penganggaran modal.',
    'Membedakan perlakuan Sunk Costs (Diabaikan), Opportunity Costs (Dimasukkan sebagai pengurang), dan Externalities / Kanibalisasi produk.',
    'Menghitung Pengeluaran Kas Awal (Initial Outlay / $CF_0$).',
    'Menghitung Arus Kas Operasi Tahunan (Operating Cash Flow / OCF = NOPAT + Depresiasi).',
    'Menghitung Arus Kas Terminasi Akhir (Terminal Cash Flow: Nilai Sisa Neto Pajak + Pengembalian Modal Kerja NOWC).',
    'Menerapkan Analisis Sensitivitas (Sensitivity Analysis) dan Analisis Skenario (Scenario Analysis) untuk menguji ketahanan proyek terhadap risiko pasar.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Komponen Arus Kas Inkremental Proyek Investasi',
      svg: SVG_PROJECT_CASHFLOWS,
      caption: 'Gambar 7.1: Struktur arus kas dari tahun 0 (awal), tahun operasional 1..N, dan penutupan terminal tahun N.'
    },

    { kind: 'h2', text: '1. Pedoman Pengestimasian Arus Kas Relevan' },
    {
      kind: 'table',
      headers: ['Elemen Biaya / Arus Kas', 'Perlakuan dalam Evaluasi Investasi', 'Alasan Teoretis'],
      rows: [
        ['Sunk Costs (Biaya Masa Lalu)', '**DIABAIKAN (JANGAN DIMASUKKAN)**', 'Pengeluaran yang sudah terjadi di masa lalu (misal biaya riset awal) dan tidak akan berubah terlepas dari keputusan proyek diterima atau ditolak.'],
        ['Opportunity Costs (Biaya Peluang)', '**WAJIB DIMASUKKAN** sebagai arus kas keluar', 'Arus kas yang dikorbankan dari penggunaan alternatif aset (misal: jika memakai tanah milik sendiri yang bisa disewakan Rp 100jt/thn).'],
        ['Externalities & Kanibalisasi', '**WAJIB DIPERHITUNGKAN**', 'Dampak proyek baru terhadap penjualan produk eksisting perusahaan (misal peluncuran mobil baru mengurangi penjualan model lama).'],
        ['Beban Bunga Pinjaman', '**JANGAN DIKURANGKAN DI ARUS KAS**', 'Biaya pembiayaan bunga utang sudah diperhitungkan secara otomatis di dalam tingkat diskonto (WACC)!']
      ],
      caption: 'Tabel 7.1: Aturan baku penentuan komponen arus kas relevan.'
    },

    { kind: 'h2', text: '2. Rumus Formula Arus Kas Inkremental' },
    {
      kind: 'table',
      headers: ['Tahapan Arus Kas', 'Rumus Matematis Perhitungan'],
      rows: [
        ['1. Initial Outlay ($CF_0$)', '$CF_0 = - (\\text{Harga Beli Mesin Baru} + \\text{Biaya Angkut/Instalasi} + \\Delta \\text{NOWC} - \\text{Kas Jual Bersih Mesin Lama})$'],
        ['2. Operating Cash Flow (OCF)', '$OCF = (\\Delta \\text{Revenues} - \\Delta \\text{Costs} - \\Delta \\text{Depr}) \\times (1 - T) + \\Delta \\text{Depr} = \\text{EBIT}(1 - T) + \\text{Depr}$'],
        ['3. Terminal Cash Flow ($CF_N$)', '$CF_N = OCF_N + \\text{Nilai Jual Sisa (Salvage)} - [(\\text{Salvage} - \\text{Book Value}) \\times T] + \\Delta \\text{NOWC Recovery}$']
      ],
      caption: 'Tabel 7.2: Formula kalkulasi 3 tahapan arus kas proyek.'
    },

    { kind: 'h2', text: '3. Analisis Risiko Proyek: Sensitivitas & Skenario' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Tiga Metode Pengujian Risiko Proyek',
      text: '1. **Analisis Sensitivitas**: Mengubah satu variabel input (misal unit sales turun 10%) sementara variabel lain konstan untuk melihat slope kemiringan NPV.\n2. **Analisis Skenario**: Mengubah beberapa variabel sekaligus ke dalam kondisi *Best-Case*, *Base-Case*, dan *Worst-Case* dengan bobot probabilitas untuk menghitung Expected NPV dan standar deviasi proyek.\n3. **Simulasi Monte Carlo**: Simulasi berbasis komputer yang menghasilkan ribuan kemungkinan kombinasi input.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 7 (Pra-UTS)' },
    {
      kind: 'ul',
      items: [
        '**Depresiasi**: Merupakan biaya non-kas yang memberikan penghematan pajak (*Depreciation Tax Shield* = Depr × T).',
        '**Modal Kerja (NOWC)**: Dikeluarkan di awal proyek ($t=0$) dan **ditarik kembali 100% pada akhir proyek ($t=N$)**.',
        '**Pajak Nilai Sisa**: Jika Salvage > Book Value, selisih laba penjualan aset dikenakan pajak penghasilan.'
      ]
    }
  ]
};