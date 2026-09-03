import type { Reading } from '../../../types';
import { CASE_DEPRECIATION_REVALUATION } from '../pjk2PracticeCases';

const SVG_DEPRECIATION_RATES = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="thGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk4)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">TABEL TARIF PENYUSUTAN FISKAL HARTA BERWUJUD (PASAL 11 UU PPH &amp; PMK 72/2023)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">DEPRECIATION RATES</text>

  <!-- Table Container (Width 830px) -->
  <g transform="translate(35, 75)">
    <!-- Header Row -->
    <rect class="svg-subcard" x="0" y="0" width="830" height="32" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="15" y="20" fill="#38bdf8" font-size="9" font-weight="800">KELOMPOK HARTA BERWUJUD</text>
    <text class="text-accent-blue" x="260" y="20" fill="#38bdf8" font-size="9" font-weight="800">MASA MANFAAT</text>
    <text class="text-accent-blue" x="400" y="20" fill="#38bdf8" font-size="9" font-weight="800">GARIS LURUS (SLM)</text>
    <text class="text-accent-blue" x="560" y="20" fill="#38bdf8" font-size="9" font-weight="800">SALDO MENURUN (DBM)</text>
    <text class="text-accent-blue" x="730" y="20" fill="#38bdf8" font-size="9" font-weight="800">CONTOH ASET</text>

    <!-- Row 1: Kelompok 1 -->
    <rect class="svg-card" x="0" y="36" width="830" height="30" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="15" y="56" fill="#f8fafc" font-size="8.5" font-weight="700">Kelompok 1 (Bukan Bangunan)</text>
    <text class="svg-text" x="260" y="56" fill="#cbd5e1" font-size="8.5">4 Tahun</text>
    <text class="text-accent-green" x="400" y="56" fill="#34d399" font-size="8.5" font-weight="700">25% per tahun</text>
    <text class="text-accent-amber" x="560" y="56" fill="#fbbf24" font-size="8.5" font-weight="700">50% per tahun</text>
    <text class="svg-muted" x="730" y="56" fill="#94a3b8" font-size="7.5">Komputer, Printer, HP, Mebel Kayu</text>

    <!-- Row 2: Kelompok 2 -->
    <rect class="svg-card" x="0" y="70" width="830" height="30" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="15" y="90" fill="#f8fafc" font-size="8.5" font-weight="700">Kelompok 2 (Bukan Bangunan)</text>
    <text class="svg-text" x="260" y="90" fill="#cbd5e1" font-size="8.5">8 Tahun</text>
    <text class="text-accent-green" x="400" y="90" fill="#34d399" font-size="8.5" font-weight="700">12,5% per tahun</text>
    <text class="text-accent-amber" x="560" y="90" fill="#fbbf24" font-size="8.5" font-weight="700">25% per tahun</text>
    <text class="svg-muted" x="730" y="90" fill="#94a3b8" font-size="7.5">Mobil Truk, Bus, AC, Mesin Ringan</text>

    <!-- Row 3: Kelompok 3 -->
    <rect class="svg-card" x="0" y="104" width="830" height="30" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="15" y="124" fill="#f8fafc" font-size="8.5" font-weight="700">Kelompok 3 (Bukan Bangunan)</text>
    <text class="svg-text" x="260" y="124" fill="#cbd5e1" font-size="8.5">16 Tahun</text>
    <text class="text-accent-green" x="400" y="124" fill="#34d399" font-size="8.5" font-weight="700">6,25% per tahun</text>
    <text class="text-accent-amber" x="560" y="124" fill="#fbbf24" font-size="8.5" font-weight="700">12,5% per tahun</text>
    <text class="svg-muted" x="730" y="124" fill="#94a3b8" font-size="7.5">Mesin Pabrik Berat, Kapal, Pipa Tambang</text>

    <!-- Row 4: Kelompok 4 -->
    <rect class="svg-card" x="0" y="138" width="830" height="30" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="15" y="158" fill="#f8fafc" font-size="8.5" font-weight="700">Kelompok 4 (Bukan Bangunan)</text>
    <text class="svg-text" x="260" y="158" fill="#cbd5e1" font-size="8.5">20 Tahun</text>
    <text class="text-accent-green" x="400" y="158" fill="#34d399" font-size="8.5" font-weight="700">5% per tahun</text>
    <text class="text-accent-amber" x="560" y="158" fill="#fbbf24" font-size="8.5" font-weight="700">10% per tahun</text>
    <text class="svg-muted" x="730" y="158" fill="#94a3b8" font-size="7.5">Konstruksi Berat, Rel Kereta, Dok Kapal</text>

    <!-- Row 5: Bangunan Permanen -->
    <rect class="svg-card" x="0" y="172" width="830" height="30" rx="4" fill="#0f172a" stroke="#334155"/>
    <text class="text-accent-purple" x="15" y="192" fill="#a78bfa" font-size="8.5" font-weight="700">Bangunan: Permanen</text>
    <text class="svg-text" x="260" y="192" fill="#cbd5e1" font-size="8.5">20 Tahun</text>
    <text class="text-accent-green" x="400" y="192" fill="#34d399" font-size="8.5" font-weight="700">5% per tahun</text>
    <text class="text-accent-red" x="560" y="192" fill="#f87171" font-size="8.5" font-weight="700">Tidak Boleh DBM</text>
    <text class="svg-muted" x="730" y="192" fill="#94a3b8" font-size="7.5">Gedung Kantor, Gudang Permanen, Pabrik</text>

    <!-- Row 6: Bangunan Tidak Permanen -->
    <rect class="svg-card" x="0" y="206" width="830" height="30" rx="4" fill="#0f172a" stroke="#334155"/>
    <text class="text-accent-purple" x="15" y="226" fill="#a78bfa" font-size="8.5" font-weight="700">Bangunan: Tidak Permanen</text>
    <text class="svg-text" x="260" y="226" fill="#cbd5e1" font-size="8.5">10 Tahun</text>
    <text class="text-accent-green" x="400" y="226" fill="#34d399" font-size="8.5" font-weight="700">10% per tahun</text>
    <text class="text-accent-red" x="560" y="226" fill="#f87171" font-size="8.5" font-weight="700">Tidak Boleh DBM</text>
    <text class="svg-muted" x="730" y="226" fill="#94a3b8" font-size="7.5">Barak Pekerja Proyek, Gudang Kayu Seng</text>
  </g>

  <text class="svg-muted" x="450" y="332" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Catatan Kunci: Bangunan WAJIB disusutkan dengan Metode Garis Lurus (Straight-Line Method) dan tidak diperkenankan metode Saldo Menurun.</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Penyusutan & Amortisasi Fiskal, Penarikan Aset, & Revaluasi Aset Tetap',
  ref: 'Pasal 11 & 11A UU PPh | PMK 72/2023 | PMK 79/PMK.03/2008 Revaluasi Aset Tetap',
  intro: 'TM 4 membahas perhitungan beban penyusutan dan amortisasi menurut ketentuan perpajakan: pengelompokan masa manfaat harta berwujud (Kelompok 1 s/d 4 serta Bangunan), metode Garis Lurus vs Saldo Menurun Ganda, saat dimulainya penyusutan (Bulan perolehan secara pro-rata), perlakuan penarikan aset tetap (Disposal of Assets), amortisasi harta tak berwujud, serta insentif revaluasi aset tetap dengan tarif PPh Final 10%.',
  objectives: [
    'Menguasai tabel masa manfaat dan tarif penyusutan fiskal harta berwujud (Pasal 11 UU PPh).',
    'Menghitung penyusutan fiskal tahun berjalan secara pro-rata berdasarkan bulan perolehan aset.',
    'Menghitung laba/rugi fiskal atas penarikan dan penjualan aset tetap.',
    'Menerapkan amortisasi harta tak berwujud (Kelompok 1 s/d 4) dan biaya pendirian usaha.',
    'Menjelaskan perlakuan pajak atas selisih lebih revaluasi aset tetap (PPh Final 10%).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 4.1: Pengelompokan dan Tarif Penyusutan Fiskal Harta Berwujud (Pasal 11 UU PPh).',
      svg: SVG_DEPRECIATION_RATES
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 11 ayat (1) & (6) UU PPh (Tarif Penyusutan Fiskal)',
      text: '"Pasal 11 ayat (1): Penyusutan atas pengeluaran untuk pembelian, pendirian, penambahan, perbaikan, atau perubahan harta berwujud, kecuali tanah, yang dimiliki dan digunakan untuk mendapatkan, menagih, dan memelihara penghasilan yang mempunyai masa manfaat lebih dari 1 tahun dilakukan dalam bagian-bagian yang sama besar (Garis Lurus) atau dalam bagian-bagian yang menurun (Saldo Menurun).\n\nPasal 11 ayat (6) - Tabel Tarif Penyusutan:\n• Kelompok 1: Masa Manfaat 4 Tahun (Garis Lurus 25% / Saldo Menurun 50%)\n• Kelompok 2: Masa Manfaat 8 Tahun (Garis Lurus 12,5% / Saldo Menurun 25%)\n• Kelompok 3: Masa Manfaat 16 Tahun (Garis Lurus 6,25% / Saldo Menurun 12,5%)\n• Kelompok 4: Masa Manfaat 20 Tahun (Garis Lurus 5% / Saldo Menurun 10%)\n• Bangunan Permanen: Masa Manfaat 20 Tahun (Garis Lurus 5%)\n• Bangunan Tidak Permanen: Masa Manfaat 10 Tahun (Garis Lurus 10%)."'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: '📜 Ketentuan Regulasi: PMK No. 72 Tahun 2023 Pasal 6 (Penyusutan Aset > 20 Tahun)',
      text: '"Berdasarkan PMK 72/2023, untuk harta berwujud bukan bangunan yang masa manfaat sebenarnya melebihi 20 tahun dan bangunan permanen yang masa manfaat sebenarnya melebihi 20 tahun, Wajib Pajak dapat memilih melakukan penyusutan sesuai dengan masa manfaat sebenarnya (misal 25 atau 30 tahun) berdasarkan pembukuan Wajib Pajak, dengan menyampaikan pemberitahuan tertulis kepada Direktur Jenderal Pajak paling lambat akhir tahun pajak bersangkutan."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 4'
    },
    {
      kind: 'table',
      headers: ['Kelompok Harta Berwujud', 'Masa Manfaat Fiskal', 'Tarif Garis Lurus (Straight Line)', 'Tarif Saldo Menurun (Declining Balance)'],
      rows: [
        ['Kelompok 1 (Bukan Bangunan)', '4 Tahun', '25%', '50% (Tahun ke-4 disusutkan sekaligus)'],
        ['Kelompok 2 (Bukan Bangunan)', '8 Tahun', '12,5%', '25% (Tahun ke-8 disusutkan sekaligus)'],
        ['Kelompok 3 (Bukan Bangunan)', '16 Tahun', '6,25%', '12,5% (Tahun ke-16 disusutkan sekaligus)'],
        ['Kelompok 4 (Bukan Bangunan)', '20 Tahun', '5%', '10% (Tahun ke-20 disusutkan sekaligus)'],
        ['Bangunan Permanen', '20 Tahun', '5%', 'Tidak Boleh Digunakan (Wajib Garis Lurus)'],
        ['Bangunan Non-Permanen', '10 Tahun', '10%', 'Tidak Boleh Digunakan (Wajib Garis Lurus)']
      ],
      caption: 'Tabel 4.0: Matriks tarif penyusutan fiskal harta berwujud.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Penyusutan Pro-Rata & Nilai Sisa Buku'
    },
    {
      kind: 'formula',
      text: `\\text{Penyusutan Fiskal Tahun Pertama} = \\frac{\\text{Jumlah Bulan Pemakaian}}{12} \\times \\text{Tarif Penyusutan} \\times \\text{Harga Perolehan}
\\text{Penyusutan Saldo Menurun Tahun ke-}t = \\text{Tarif} \\times \\text{Nilai Sisa Buku Fiskal Awal Tahun ke-}t
\\text{Laba / Rugi Penarikan Aset} = \\text{Harga Jual Kas} - \\text{Nilai Sisa Buku Fiskal Saat Penarikan}`,
      note: 'Penyusutan fiskal dimulai pada bulan dilakukannya pengeluaran/perolehan harta, bukan pada awal tahun kalender (pro-rata bulan).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penarikan & Penjualan Mesin Pabrik Sebelum Masa Manfaat Habis',
      prompt: 'Mesin Kelompok 2 dibeli 1 Juli 2024 seharga Rp 400.000.000 (disusutkan metode Garis Lurus 12,5% per tahun). Pada 1 Juli 2026 mesin dijual seharga Rp 350.000.000. Hitung akumulasi penyusutan fiskal saat dijual dan laba/rugi penjualan aset menurut fiskal!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Penyusutan Fiskal yang Telah Diakui**:\n- Tahun 2024 (6 bulan): $\\frac{6}{12} \\times 12,5\\% \\times 400 \\text{ Jt} = Rp 25.000.000$.\n- Tahun 2025 (12 bulan): $12,5\\% \\times 400 \\text{ Jt} = Rp 50.000.000$.\n- Tahun 2026 (6 bulan s/d Juli): $\\frac{6}{12} \\times 12,5\\% \\times 400 \\text{ Jt} = Rp 25.000.000$.\n- Total Akumulasi Penyusutan = 25 Jt + 50 Jt + 25 Jt = **Rp 100.000.000**.',
            '**Nilai Sisa Buku Fiskal Saat Dijual**: Rp 400 Jt - Rp 100 Jt = **Rp 300.000.000**.',
            '**Laba Penjualan Aset Fiskal**: Harga Jual - Nilai Sisa Buku = Rp 350 Juta - Rp 300 Juta = **+Rp 50.000.000 (Keuntungan Kena Pajak)**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 4'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Pengelompokan Aset Fiskal', 'Klasifikasi aset ke Kelompok 1, 2, 3, 4 dan bangunan.', 'Mampu mengidentifikasi masa manfaat fiskal yang tepat.'],
        ['2', 'Kalkulasi Garis Lurus vs Saldo Menurun', 'Perhitungan penyusutan tahunan dan aturan sisa buku tahun terakhir.', 'Mampu menghitung beda waktu penyusutan komersial vs fiskal.'],
        ['3', 'Revaluasi Aset Tetap PMK 79', 'Tarif PPh Final 10% atas selisih lebih revaluasi dan dasar penyusutan baru.', 'Mampu menganalisis keuntungan cash flow revaluasi aset.']
      ],
      caption: 'Tabel 4.2: Peta penguasaan submateri TM 4 Perpajakan II.'
    },
    CASE_DEPRECIATION_REVALUATION,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Bangunan Dilarang Saldo Menurun**: Bangunan permanen dan non-permanen WAJIB disusutkan dengan metode Garis Lurus (Pasal 11 ayat 2 UU PPh).',
        '**Saldo Menurun Disusutkan Sekaligus di Akhir**: Pada tahun terakhir masa manfaat, seluruh nilai sisa buku yang masih tersisa disusutkan sekaligus menjadi beban tahun tersebut.',
        '**Revaluasi Aset Menguntungkan Cash Flow Jangka Panjang**: Pajak revaluasi 10% dibayar sekali di depan, tetapi perusahaan memperoleh penghematan pajak 22% setiap tahun melalui kenaikan beban penyusutan fiskal.'
      ]
    }
  ]
};
