import type { Reading } from '../../../types';
import { CASE_CASHFLOW_RISK_ANALYSIS } from '../mankeuPracticeCases';

const SVG_CASH_FLOW_STRUCTURE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="cf0Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <linearGradient id="ocfGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="tcfGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk7)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">3 FASE ESTIMASI ARUS KAS INKREMENTAL PROYEK INVESTASI (CAPITAL EXPENDITURE)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">PROJECT CASH FLOWS</text>

  <!-- 3 Phases Horizontal Sequence -->
  <!-- Phase 1: Initial Outlay (t=0) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#cf0Grad)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="132" y="20" fill="#f87171" font-size="10" font-weight="800" text-anchor="middle">FASE 1: ARUS KAS AWAL (t = 0)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-red" x="132" y="56" fill="#f87171" font-size="9" font-weight="700" text-anchor="middle">Initial Outlay (Kas Keluar Bersih)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Harga perolehan aset tetap baru</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Biaya pengiriman &amp; instalasi mesin</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Kebutuhan tambahan Modal Kerja (ΔNWC)</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Dikurangi: Kas hasil jual aset lama</text>
    <text class="svg-text" x="14" y="153" fill="#cbd5e1" font-size="8">• Ditambah/dikurangi: Pajak atas laba/rugi jual</text>
    <rect class="svg-badge-red" x="14" y="185" width="237" height="24" rx="4" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="132" y="201" fill="#f87171" font-size="8" font-weight="700" text-anchor="middle">Pengeluaran Investasi Awal (Outflow)</text>
  </g>

  <!-- Arrow 1 -->
  <polygon points="310,185 318,190 310,195" fill="#38bdf8"/>

  <!-- Phase 2: Operating Cash Flow (t=1..N) -->
  <g transform="translate(325, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#ocfGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">FASE 2: OPERASIONAL (t = 1 s.d. N)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="56" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">OCF = EBIT(1 - T) + Depresiasi</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Pendapatan tambahan operasional proyek</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Penghematan beban kas operasional</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Beban penyusutan (Non-cash tax shield)</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Beban bunga utang <tspan class="text-accent-red" fill="#f87171" font-weight="700">TIDAK dimasukkan</tspan></text>
    <text class="svg-text" x="14" y="153" fill="#cbd5e1" font-size="8">  (sudah tercermin pada WACC)</text>
    <rect class="svg-badge-blue" x="14" y="185" width="237" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Arus Kas Masuk Bersih Tahunan (Inflow)</text>
  </g>

  <!-- Arrow 2 -->
  <polygon points="600,185 608,190 600,195" fill="#34d399"/>

  <!-- Phase 3: Terminal Cash Flow (t=N) -->
  <g transform="translate(615, 75)">
    <rect class="svg-card" x="0" y="0" width="250" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="250" height="30" rx="10" fill="url(#tcfGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="125" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">FASE 3: TERMINAL AKHIR (t = N)</text>
    <rect class="svg-subcard" x="14" y="40" width="222" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="125" y="56" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">Terminal Cash Flow (TCF)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Nilai sisa penjualan mesin (Salvage Value)</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Pajak atas pelepasan nilai sisa aset</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Pemulihan Modal Kerja</tspan> (sesuai proyeksi)</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Saldo piutang &amp; stok dilikuidasi ke kas</text>
    <text class="svg-text" x="14" y="153" fill="#cbd5e1" font-size="8">• Ditambahkan ke OCF tahun terakhir (N)</text>
    <rect class="svg-badge-green" x="14" y="185" width="222" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="125" y="201" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Penutupan &amp; Likuidasi Proyek</text>
  </g>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Cash Flow Estimation, Tax Shield Depreciation, & Project Risk Analysis',
  ref: 'Brigham & Houston Ch. 11 | Brigham & Ehrhardt Ch. 11 | Silabus Ujian Tengah Semester (UTS) FEB UNAIR',
  intro: 'Di TM 6 kita belajar mengevaluasi NPV jika deretan angka arus kas sudah tersedia. Namun di dunia nyata dan lembar ujian komprehensif, angka-angka arus kas tersebut harus Anda rakit sendiri dari nol! TM 7 membahas proses perakitan arus kas inkremental yang relevan melalui 3 fase hidup proyek: Pengeluaran Investasi Awal (Initial Outlay t=0), Arus Kas Operasi Tahunan (Operating Cash Flow t=1..N), dan Arus Kas Terminal Penutupan (Terminal Cash Flow t=N). Modul ini juga membedah pembedaan biaya hangus (Sunk Cost), biaya kesempatan (Opportunity Cost), efek kanibalisasi, serta metode analisis risiko proyek (Sensitivitas dan Skenario).',
  objectives: [
    'Membedah kamus istilah estimasi arus kas (Initial Outlay, OCF, TCF, NWC, Sunk Cost, Opportunity Cost, Cannibalization, Salvage Value).',
    'Menghitung Initial Outlay (CF0) untuk proyek baru maupun proyek penggantian mesin lama (Replacement Project).',
    'Menghitung Operating Cash Flow (OCF) tahunan menggunakan Depreciation Tax Shield.',
    'Menghitung Terminal Cash Flow (TCF) termasuk pajak atas nilai sisa penjualan aset bekas dan pemulihan modal kerja bersih sesuai jumlah yang benar-benar dilepas pada akhir proyek.',
    'Melakukan analisis risiko proyek melalui Analisis Sensitivitas (Sensitivity Analysis) dan Analisis Skenario (Best, Base, Worst Case).'
  ],
  blocks: [
    {
      kind: 'callout',
      title: 'Dua Peraturan Sakti Dosen FEB UNAIR yang Sering Menjebak di Ujian',
      text: '1. **JANGAN PERNAH Mengurangkan Beban Bunga Pinjaman dari OCF!**: Bunga adalah biaya pembiayaan (*financing cost*), bukan biaya operasional. Biaya bunga sudah tercermin di dalam tingkat diskonto WACC saat mendiskontokan NPV. Jika Anda memasukkan bunga ke OCF, Anda melakukan kesalahan fatal **Double Counting** (menghukum proyek dua kali)!\n2. **Pulihkan Modal Kerja (NWC) Sesuai Asumsi Soal**: Tambahan modal kerja pada awal proyek biasanya dilepas saat proyek berakhir. Contoh di bawah mengasumsikan seluruh Rp30 juta pulih; jika soal memperkirakan piutang tidak tertagih atau persediaan tidak terjual, gunakan jumlah pemulihan yang diproyeksikan dan perhitungkan dampak pajak kerugiannya sesuai kasus.',
      variant: 'warning'
    },
    {
      kind: 'figure',
      caption: 'Gambar 7.1: 3 Tahap Aliran Arus Kas Inkremental Proyek Investasi.',
      svg: SVG_CASH_FLOW_STRUCTURE,
      transcript: [
        "FASE 1: ARUS KAS AWAL (t = 0)",
        "Initial Outlay (Kas Keluar Bersih)",
        "Harga perolehan aset tetap baru",
        "Biaya pengiriman & instalasi mesin",
        "Kebutuhan tambahan Modal Kerja (ΔNWC)",
        "Dikurangi: Kas hasil jual aset lama",
        "Ditambah/dikurangi: Pajak atas laba/rugi jual",
        "Pengeluaran Investasi Awal (Outflow)",
        "FASE 2: OPERASIONAL (t = 1 s.d. N)",
        "OCF = EBIT(1 - T) + Depresiasi",
        "Pendapatan tambahan operasional proyek",
        "Penghematan beban kas operasional",
        "Beban penyusutan (Non-cash tax shield)",
        "Beban bunga utang TIDAK dimasukkan (sudah tercermin pada WACC)",
        "Arus Kas Masuk Bersih Tahunan (Inflow)",
        "FASE 3: TERMINAL AKHIR (t = N)",
        "Terminal Cash Flow (TCF)",
        "Nilai sisa penjualan mesin (Salvage Value)",
        "Pajak atas pelepasan nilai sisa aset",
        "Pemulihan Modal Kerja (sesuai proyeksi)",
        "Saldo piutang & stok dilikuidasi ke kas",
        "Ditambahkan ke OCF tahun terakhir (N)",
        "Penutupan & Likuidasi Proyek"
      ]
    },
    {
      kind: 'h2',
      text: 'Kamus Bahasa Bayi Simbol & Istilah Arus Kas Proyek (TM 7)'
    },
    {
      kind: 'p',
      text: 'Berikut adalah kamus terjemahan bahasa manusia untuk seluruh konsep dan istilah estimasi arus kas:'
    },
    {
      kind: 'table',
      headers: ['Istilah / Simbol', 'Nama Finansial', 'Bahasa Manusia (Maksud Aslinya)', 'Aturan Perlakuannya di Ujian'],
      rows: [
        [
          '$CF_0$ / *Initial Outlay*',
          'Pengeluaran Investasi Awal',
          '**Modal Pertama Keluar**. Total uang tunai bersih yang harus digelontorkan hari ini ($t=0$) untuk memulai proyek.',
          'Nilainya selalu **NEGATIF** (arus kas keluar). Meliputi: harga beli mesin, biaya pasang, dan modal kerja.'
        ],
        [
          '$OCF$',
          'Operating Cash Flow',
          '**Uang Kas Masuk Bersih Operasional**. Uang tunai riil yang mengalir masuk ke kas perusahaan tiap tahun dari hasil jualan barang.',
          'Dihitung dengan rumus: $OCF = EBIT(1 - T) + \\text{Depresiasi}$. Beban bunga utang DILARANG masuk!'
        ],
        [
          '$TCF$',
          'Terminal Cash Flow',
          '**Uang Kas Penutupan Proyek**. Kas ekstra di tahun terakhir ($t=N$) saat proyek dibubarkan/selesai.',
          'Menjumlahkan: kas bersih hasil jual mesin rongsokan (setelah pajak) + modal kerja yang dipulihkan menurut asumsi proyek.'
        ],
        [
          '$\\Delta NWC$',
          'Net Working Capital (Modal Kerja)',
          '**Uang Kas Mengendap Operasional**. Uang yang harus disiapkan untuk mengisi stok persediaan barang dan piutang pelanggan.',
          'Keluar di $t=0$ (mengurangi kas), lalu masuk kembali di tahun ke-$N$ sebesar modal kerja yang dapat dipulihkan; contoh standar mengasumsikan seluruhnya kembali.'
        ],
        [
          '*Depreciation Tax Shield*',
          'Perisai Pajak Penyusutan',
          '**Diskon Pajak dari Depresiasi**. Penghematan pengeluaran kas pajak riil yang timbul karena adanya beban penyusutan mesin.',
          'Rumus penghematannya: $\\text{Depresiasi} \\times T$. Depresiasi bukan kas keluar, tapi membuat tagihan pajak berkurang!'
        ],
        [
          '*Sunk Cost*',
          'Biaya Hangus (Masa Lalu)',
          '**Uang yang Sudah Lenyap**. Pengeluaran masa lalu yang sudah terjadi dan tidak bisa ditarik kembali apa pun keputusan proyeknya.',
          '**100% HARUS DIABAIKAN!** Contoh: biaya survei riset kelayakan Rp 50 juta tahun lalu. Jangan dimasukkan ke biaya proyek!'
        ],
        [
          '*Opportunity Cost*',
          'Biaya Kesempatan',
          '**Uang yang Dikorbankan**. Nilai keuntungan yang hilang karena aset milik sendiri dipakai untuk proyek ini bukan disewakan/dijual.',
          '**WAJIB DIMASUKKAN** sebagai kas keluar di $t=0$. Contoh: tanah nganggur milik sendiri yang kalau dijual laku Rp 1 Miliar.'
        ],
        [
          '*Cannibalization / Erosion*',
          'Efek Kanibalisasi',
          '**Makan Pasar Saudara Sendiri**. Penurunan omzet penjualan produk lama perusahaan akibat diluncurkannya produk baru ini.',
          '**WAJIB DIKURANGKAN** dari arus kas masuk proyek baru (arus kas inkremental murni).'
        ],
        [
          '*Salvage Value*',
          'Nilai Sisa Jual Aset',
          '**Harga Jual Besi Tua / Mesin Bekas**. Uang kas yang diterima saat mesin proyek dijual di pasar loak pada akhir masa pakainya.',
          'Jika harga jual $>$ nilai buku, selisih untungnya **wajib dipotong pajak** penghasilan.'
        ]
      ],
      caption: 'Tabel 7.1: Kamus lengkap istilah estimasi arus kas penganggaran modal (TM 7).'
    },
    {
      kind: 'h2',
      text: 'Pilar I: Menghitung Arus Kas 3 Babak (Fase 1, 2, dan 3)'
    },
    {
      kind: 'h3',
      text: 'Babak 1: Initial Outlay (t = 0)'
    },
    {
      kind: 'formula',
      text: `CF_0 = - \\left[ \\text{Harga Beli Mesin Baru} + \\text{Biaya Angkut dan Instalasi} \\right] - \\Delta NWC + \\text{Hasil Jual Mesin Lama} - \\text{Pajak atas Laba Jual Mesin Lama}`,
      note: 'Basis depresiasi mesin baru adalah (Harga Beli + Biaya Angkut & Instalasi). NWC adalah modal kerja tambahan.'
    },
    {
      kind: 'h3',
      text: 'Babak 2: Operating Cash Flow / OCF (t = 1 s.d. N)'
    },
    {
      kind: 'formula',
      text: `\\text{Metode Laba Operasi}: \\quad OCF = EBIT(1 - T) + \\text{Depresiasi}
\\text{Metode Tax Shield}: \\quad OCF = (\\text{Pendapatan} - \\text{Biaya Kas})(1 - T) + (\\text{Depresiasi} \\times T)`,
      note: 'Kedua rumus di atas menghasilkan angka yang persis sama. Depresiasi x T adalah besarnya uang tunai riil yang dihemat dari kantor pajak.'
    },
    {
      kind: 'h3',
      text: 'Babak 3: Terminal Cash Flow / TCF (t = N)'
    },
    {
      kind: 'formula',
      text: `\\text{Arus Kas Masuk Nilai Sisa Setelah Pajak} = \\text{Harga Jual Bekas} - T \\times (\\text{Harga Jual Bekas} - \\text{Nilai Buku Akhir})
\\text{Terminal Cash Flow (TCF)} = \\text{Arus Kas Nilai Sisa Setelah Pajak} + \\text{Pengembalian 100\\% Modal Kerja } (\\Delta NWC)`,
      note: 'Jika mesin laku dijual persis sama dengan nilai bukunya, pajaknya adalah nol. TCF ditambahkan ke OCF tahun terakhir (t = N).'
    },
    {
      kind: 'h2',
      text: 'Latihan Studi Kasus Lengkap Angka per Angka (Tipe Soal Klasik UTS)'
    },
    {
      kind: 'example',
      title: 'Studi Kasus Menyeluruh: Proyek Pengadaan Mesin Cetak Baru PT Grafika Utama',
      blocks: [
        {
          kind: 'p',
          text: 'PT Grafika Utama mempertimbangkan pembelian mesin cetak otomatis baru dengan data:\n- Harga beli mesin baru = **Rp 400 Juta**; Biaya pengiriman & instalasi = **Rp 50 Juta**.\n- Umur ekonomis = **4 tahun**, disusutkan metode garis lurus (*straight-line*) hingga nilai buku akhir tahun ke-4 menjadi **Rp 50 Juta**.\n- Kebutuhan tambahan modal kerja bersih (NWC) pada awal proyek = **Rp 30 Juta**, diasumsikan pulih seluruhnya pada akhir proyek.\n- Mesin baru diproyeksikan menghemat biaya operasional kas sebesar **Rp 180 Juta per tahun** selama 4 tahun berturut-turut.\n- Pada akhir tahun ke-4, mesin baru diperkirakan bisa dijual di pasar loak seharga **Rp 80 Juta**.\n- Tarif pajak penghasilan badan = **25%** ($0,25$), dan WACC perusahaan = **10%**.'
        },
        {
          kind: 'solution-reveal',
          title: 'Solusi Langkah demi Langkah (Initial Outlay, OCF, TCF, dan NPV)',
          prompt: 'Buka lembar kerja penyelesaian perhitungan lengkap angka per angka!',
          blocks: [
            {
              kind: 'ul',
              items: [
                '**Langkah 1: Hitung Initial Outlay ($CF_0$) di Tahun 0**:\n- Basis biaya mesin = Rp 400 Juta + Rp 50 Juta = Rp 450 Juta.\n- Tambahan Modal Kerja (NWC) = Rp 30 Juta.\n$$CF_0 = - (450 \\text{ Juta} + 30 \\text{ Juta}) = \\mathbf{-Rp 480 \\text{ Juta}}$$',
                '**Langkah 2: Hitung Beban Depresiasi Tahunan (Metode Garis Lurus)**:\n$$\\text{Depresiasi Tahunan} = \\frac{\\text{Harga Perolehan} - \\text{Nilai Buku Akhir}}{\\text{Umur Proyek}} = \\frac{450 - 50}{4} = \\mathbf{Rp 100 \\text{ Juta / Tahun}}$$',
                '**Langkah 3: Hitung Operating Cash Flow (OCF) Tahun 1 s.d. 4**:\n- Penghematan kas operasional = Rp 180 Juta.\n- Beban depresiasi = Rp 100 Juta.\n- $EBIT = 180 - 100 = Rp 80 \\text{ Juta}$.\n- Pajak (25%) = $25\\% \\times 80 = Rp 20 \\text{ Juta}$.\n- Laba Bersih Operasi Setelah Pajak ($EAT / NOPAT$) = $80 - 20 = Rp 60 \\text{ Juta}$.\n- Tambahkan kembali Depresiasi non-kas:\n$$OCF = NOPAT + \\text{Depresiasi} = 60 \\text{ Juta} + 100 \\text{ Juta} = \\mathbf{Rp 160 \\text{ Juta / Tahun}}$$\n*(Cek dengan rumus Tax Shield: $180(1 - 0,25) + (100 \\times 0,25) = 135 + 25 = 160 \\text{ Juta}$ — Cocok!)*',
                '**Langkah 4: Hitung Terminal Cash Flow (TCF) di Akhir Tahun 4**:\n- Harga jual besi tua mesin = Rp 80 Juta; Nilai buku akhir = Rp 50 Juta.\n- Laba penjualan aset (*Gain on Sale*) = $80 - 50 = Rp 30 \\text{ Juta}$.\n- Pajak atas laba penjualan = $25\\% \\times 30 = Rp 7,5 \\text{ Juta}$.\n- Nilai sisa setelah pajak = $80 - 7,5 = \\mathbf{Rp 72,5 \\text{ Juta}}$.\n- Tambahkan Pengembalian Modal Kerja 100% (NWC Recovery) = $\\mathbf{Rp 30 \\text{ Juta}}$.\n$$TCF = 72,5 \\text{ Juta} + 30 \\text{ Juta} = \\mathbf{Rp 102,5 \\text{ Juta}}$$',
                '**Langkah 5: Rakit Total Arus Kas Bersih Tahunan**:\n- Tahun 0: **-Rp 480,0 Juta**\n- Tahun 1: **+Rp 160,0 Juta**\n- Tahun 2: **+Rp 160,0 Juta**\n- Tahun 3: **+Rp 160,0 Juta**\n- Tahun 4: $OCF + TCF = 160,0 + 102,5 = \\mathbf{+Rp 262,5 \\text{ Juta}}$',
                '**Langkah 6: Hitung Net Present Value (NPV pada WACC = 10%)**:\n$$PV_1 = \\frac{160}{1,10^1} = 145,45 \\text{ Juta}$$\n$$PV_2 = \\frac{160}{1,10^2} = 132,23 \\text{ Juta}$$\n$$PV_3 = \\frac{160}{1,10^3} = 120,21 \\text{ Juta}$$\n$$PV_4 = \\frac{262,5}{1,10^4} = 179,30 \\text{ Juta}$$\n$$\\text{Total PV Kas Masuk} = 145,45 + 132,23 + 120,21 + 179,30 = Rp 577,19 \\text{ Juta}$$\n$$NPV = 577,19 - 480,00 = \\mathbf{+Rp 97,19 \\text{ Juta}}$$',
                '**Keputusan Investasi**: Karena $NPV > 0$ (+Rp 97,19 Juta), proyek pengadaan mesin cetak baru ini **LAYAK DITERIMA (DILAKSANAKAN)** karena menambah kekayaan riil perusahaan sebesar Rp 97,19 Juta!'
              ]
            }
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar II: Analisis Risiko Proyek (Stand-Alone Risk Analysis)'
    },
    {
      kind: 'p',
      text: 'Di dunia nyata, estimasi penjualan, harga, dan biaya bisa meleset. Manajemen menggunakan **tiga teknik analisis risiko** untuk mengantisipasi ketidakpastian:'
    },
    {
      kind: 'table',
      headers: ['Metode Analisis Risiko', 'Cara Kerja', 'Tujuan / Output Utama', 'Kelemahan'],
      rows: [
        [
          '**Analisis Sensitivitas (Sensitivity Analysis)**',
          'Mengubah **SATU variabel input** (misal: volume unit turun 10%) sementara seluruh variabel lain dianggap tetap konstan (*ceteris paribus*).',
          'Mengidentifikasi variabel mana yang paling berbahaya/kritis bagi proyek. Semakin curam grafik garisnya, semakin berbahaya variabel tersebut.',
          'Mengabaikan kemungkinan beberapa variabel berubah bersamaan.'
        ],
        [
          '**Analisis Skenario (Scenario Analysis)**',
          'Mengubah **BANYAK variabel sekaligus** ke dalam 3 kemungkinan kondisi: Skenario Terburuk (*Worst Case* / Resesi), Normal (*Base Case*), dan Terbaik (*Best Case* / Boom).',
          'Menghasilkan nilai Expected NPV ($\\hat{NPV} = \\sum P_i NPV_i$) dan standar deviasi $\\sigma_{NPV}$ proyek.',
          'Hanya menguji 3 skenario diskrit yang kaku.'
        ],
        [
          '**Simulasi Monte Carlo**',
          'Komputer memasukkan distribusi probabilitas setiap variabel dan mengacak ribuan kemungkinan kombinasi arus kas secara otomatis.',
          'Menghasilkan kurva distribusi probabilitas kontinu lengkap dari NPV dan peluang proyek menghasilkan $NPV < 0$.',
          'Membutuhkan perangkat lunak dan keahlian statistik yang kompleks.'
        ]
      ],
      caption: 'Tabel 7.2: Perbandingan 3 metode analisis risiko proyek investasi.'
    },
    {
      kind: 'example',
      title: 'Contoh Soal Ujian: Menghitung Expected NPV dan Risiko Skenario',
      blocks: [
        {
          kind: 'p',
          text: 'Sebuah proyek pertambangan memiliki estimasi hasil skenario ekonomi sebagai berikut:\n- **Worst Case (Probabilitas 20%)**: $NPV = -Rp 300 \\text{ Juta}$.\n- **Base Case (Probabilitas 60%)**: $NPV = +Rp 100 \\text{ Juta}$.\n- **Best Case (Probabilitas 20%)**: $NPV = +Rp 500 \\text{ Juta}$.\nHitunglah Expected NPV dan Standar Deviasi risiko proyek!'
        },
        {
          kind: 'ul',
          items: [
            '**1. Expected NPV ($\\hat{NPV}$)**:\n$$\\hat{NPV} = (0,20 \\times -300) + (0,60 \\times 100) + (0,20 \\times 500) = -60 + 60 + 100 = \\mathbf{+Rp 100 \\text{ Juta}}$$',
            '**2. Varians ($\\sigma^2$)**:\n- Worst: $0,20 \\times (-300 - 100)^2 = 0,20 \\times (-400)^2 = 0,20 \\times 160.000 = 32.000$.\n- Base: $0,60 \\times (100 - 100)^2 = 0,60 \\times 0 = 0$.\n- Best: $0,20 \\times (500 - 100)^2 = 0,20 \\times (400)^2 = 0,20 \\times 160.000 = 32.000$.\n$$\\sigma^2 = 32.000 + 0 + 32.000 = 64.000$$\n$$\\sigma = \\sqrt{64.000} = \\mathbf{Rp 252,98 \\text{ Juta}}$$',
            '**3. Koefisien Variasi ($CV$)**:\n$$CV = \\frac{\\sigma}{\\hat{NPV}} = \\frac{252,98}{100} = \\mathbf{2,53\\times}$$\n*Makna*: Proyek ini memiliki risiko yang sangat tinggi ($CV = 2,53\\times$) karena terdapat 20% peluang perusahaan menanggung kerugian parah sebesar Rp 300 Juta jika terjadi kondisi terburuk.'
          ]
        }
      ]
    },
    CASE_CASHFLOW_RISK_ANALYSIS,
    {
      kind: 'h2',
      text: 'Jebakan Klasik Ujian Tengah Semester (Exam Traps TM 7)'
    },
    {
      kind: 'ul',
      items: [
        '**Jebakan 1: Memasukkan Biaya Sunk Cost ke Initial Outlay**:\nJika soal menyebut *"Perusahaan telah menghabiskan Rp 50 Juta tahun lalu untuk menyewa konsultan riset"*, **CORET DAN ABAIKAN!** Uang itu sudah hilang di masa lalu, tidak boleh dimasukkan ke dalam perhitungan proyek baru.',
        '**Jebakan 2: Lupa Menghitung Pajak atas Laba Penjualan Aset Sisa**:\nJika mesin laku dijual Rp 80 Juta padahal nilai bukunya tinggal Rp 50 Juta, perusahaan tidak menerima bersih Rp 80 Juta! Selisih untung Rp 30 Juta dikenai pajak 25% (Rp 7,5 Juta), sehingga kas bersih yang diterima hanyalah Rp 72,5 Juta.',
        '**Jebakan 3: Mengurangkan Modal Kerja (NWC) Tanpa Memulihkannya**:\nJika di tahun 0 ada modal kerja keluar Rp 30 Juta, **JANGAN LUPA** menambahkan kembali Rp 30 Juta itu di tahun terakhir proyek ($t=N$) sebagai kas masuk pemulihan (NWC Recovery).'
      ]
    },
    {
      kind: 'h2',
      text: 'Rangkuman Inti & Checklist Kesiapan Ujian TM 7'
    },
    {
      kind: 'ul',
      items: [
        '**Arus Kas Inkremental**: Hanya kas tambahan yang benar-benar berubah akibat diambilnya proyek yang dihitung.',
        '**Depresiasi Menghemat Kas**: Depresiasi bukan kas keluar, melainkan tameng pelindung kas pajak (*Depreciation Tax Shield*).',
        '**Pemulihan Modal Kerja**: Tambahan modal kerja keluar di awal dan biasanya dilepas pada akhir proyek. Gunakan persentase pemulihan yang diberikan soal; contoh modul ini mengasumsikan pemulihan penuh.',
        '**Analisis Sensitivitas vs Skenario**: Sensitivitas mengubah 1 variabel; Skenario mengubah banyak variabel sekaligus.'
      ]
    }
  ]
};
