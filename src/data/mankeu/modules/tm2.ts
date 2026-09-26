import type { Reading } from '../../../types';
import { CASE_DUPONT_ANALYSIS } from '../mankeuPracticeCases';

const SVG_DUPONT_SYSTEM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="roeGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="npmGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="tatGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="emGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk2)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">POHON DEKOMPOSISI ANALISIS DUPONT 3 PILAR (RETURN ON EQUITY)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">DUPONT TREE</text>

  <!-- Top Apex: RETURN ON EQUITY -->
  <g transform="translate(300, 68)">
    <rect class="svg-card" x="0" y="0" width="300" height="48" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <rect x="0" y="0" width="300" height="20" rx="10" fill="url(#roeGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="150" y="16" fill="#34d399" font-size="11" font-weight="900" text-anchor="middle">RETURN ON EQUITY (ROE)</text>
    <text class="svg-text" x="150" y="36" fill="#cbd5e1" font-size="8.5" font-weight="700" text-anchor="middle">ROE = Net Profit Margin × Asset Turnover × Equity Multiplier</text>
  </g>

  <!-- Branch Lines -->
  <line x1="450" y1="116" x2="165" y2="145" stroke="#38bdf8" stroke-width="2"/>
  <line x1="450" y1="116" x2="450" y2="145" stroke="#fbbf24" stroke-width="2"/>
  <line x1="450" y1="116" x2="735" y2="145" stroke="#a78bfa" stroke-width="2"/>

  <!-- 3 Pillar Foundation Cards -->
  <!-- Pillar 1: Net Profit Margin -->
  <g transform="translate(35, 145)">
    <rect class="svg-card" x="0" y="0" width="260" height="155" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="260" height="28" rx="10" fill="url(#npmGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="130" y="18" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. NET PROFIT MARGIN (NPM)</text>
    <rect class="svg-subcard" x="14" y="36" width="232" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="130" y="52" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Laba Bersih ÷ Penjualan</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Mengukur: <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Profitabilitas Operasional</tspan></text>
    <text class="svg-text" x="14" y="96" fill="#cbd5e1" font-size="8">• Efisiensi pengendalian beban pokok (HPP)</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• Strategi penetapan harga jual &amp; biaya pajak</text>
    <rect class="svg-badge-blue" x="14" y="125" width="232" height="18" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="130" y="137" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Efisiensi Biaya Produksi</text>
  </g>

  <!-- Pillar 2: Total Asset Turnover -->
  <g transform="translate(320, 145)">
    <rect class="svg-card" x="0" y="0" width="260" height="155" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="260" height="28" rx="10" fill="url(#tatGrad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="130" y="18" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">2. TOTAL ASSET TURNOVER (TATO)</text>
    <rect class="svg-subcard" x="14" y="36" width="232" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="130" y="52" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Penjualan ÷ Total Aset</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Mengukur: <tspan class="text-accent-amber" fill="#fbbf24" font-weight="700">Efisiensi Utilisasi Aset</tspan></text>
    <text class="svg-text" x="14" y="96" fill="#cbd5e1" font-size="8">• Perputaran piutang, kas, &amp; stok gudang</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• Optimalisasi kapasitas utilisasi pabrik</text>
    <rect class="svg-badge-amber" x="14" y="125" width="232" height="18" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="130" y="137" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Produktivitas Modal Kerja</text>
  </g>

  <!-- Pillar 3: Equity Multiplier -->
  <g transform="translate(605, 145)">
    <rect class="svg-card" x="0" y="0" width="260" height="155" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="260" height="28" rx="10" fill="url(#emGrad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="130" y="18" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">3. EQUITY MULTIPLIER (LEVERAGE)</text>
    <rect class="svg-subcard" x="14" y="36" width="232" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="130" y="52" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Total Aset ÷ Total Ekuitas</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Mengukur: <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Tingkat Leverage Finansial</tspan></text>
    <text class="svg-text" x="14" y="96" fill="#cbd5e1" font-size="8">• Pemanfaatan utang untuk mendongkrak laba</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• Menimbang risiko insolvensi vs tax shield</text>
    <rect class="svg-badge-purple" x="14" y="125" width="232" height="18" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="130" y="137" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Struktur Modal Pengungkit</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">DuPont membongkar apakah lonjakan ROE didorong oleh keunggulan produk (NPM), kecepatan operasi (TATO), atau risiko utang (Leverage).</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Analysis of Financial Statements, Financial Ratio Systems, & The DuPont Identity',
  ref: 'Brigham & Houston (Fundamentals of Financial Management 16e/2022 Ch. 3 & Ch. 4) | Silabus FEB UNAIR 2026',
  intro: 'TM 2 ini tentang cara "membaca" kesehatan keuangan perusahaan lewat 4 laporan keuangan utama, menghitung Free Cash Flow (FCF), dan menguasai 5 kelompok rasio keuangan (Likuiditas, Manajemen Aset, Utang, Profitabilitas, Nilai Pasar). Yang paling penting dan paling sering keluar ujian: Sistem DuPont 3-langkah dan 5-langkah buat membongkar dari mana ROE perusahaan sebenarnya berasal. Plus, kamu juga harus tahu trik window dressing yang sering dipakai perusahaan buat mempercantik laporan keuangannya.',
  objectives: [
    'Paham 4 laporan keuangan utama (Neraca, Laba Rugi, Arus Kas, Ekuitas) dan hubungannya satu sama lain.',
    'Bisa hitung NOPAT, NOWC, dan Free Cash Flow (FCF) — bedain mana kas operasional, mana kas pendanaan.',
    'Hafal dan bisa pakai 5 kelompok rasio keuangan, plus tahu benchmark industrinya.',
    'Bisa bongkar ROE pakai DuPont 3-Langkah (NPM × TATO × EM) dan 5-Langkah (tambah Tax Burden dan Interest Burden).',
    'Paham cara bikin laporan keuangan ukuran bersama (Common-Size Statements) buat bandingin perusahaan beda ukuran.',
    'Bisa hitung EVA dan MVA — dua ukuran apakah manajemen beneran nambah nilai buat pemegang saham.',
    'Tahu keterbatasan analisis rasio: efek konglomerasi, window dressing, beda kebijakan akuntansi, dan inflasi.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 2.1: Pohon Dekomposisi Sistem DuPont 3 Pilar (Return on Equity).',
      svg: SVG_DUPONT_SYSTEM,
      transcript: [
        "RETURN ON EQUITY (ROE)",
        "ROE = Net Profit Margin × Asset Turnover × Equity Multiplier",
        "1. NET PROFIT MARGIN (NPM)",
        "Laba Bersih ÷ Penjualan",
        "Mengukur: Profitabilitas Operasional",
        "Efisiensi pengendalian beban pokok (HPP)",
        "Strategi penetapan harga jual & biaya pajak",
        "Efisiensi Biaya Produksi",
        "2. TOTAL ASSET TURNOVER (TATO)",
        "Penjualan ÷ Total Aset",
        "Mengukur: Efisiensi Utilisasi Aset",
        "Perputaran piutang, kas, & stok gudang",
        "Optimalisasi kapasitas utilisasi pabrik",
        "Produktivitas Modal Kerja",
        "3. EQUITY MULTIPLIER (LEVERAGE)",
        "Total Aset ÷ Total Ekuitas",
        "Mengukur: Tingkat Leverage Finansial",
        "Pemanfaatan utang untuk mendongkrak laba",
        "Menimbang risiko insolvensi vs tax shield",
        "Struktur Modal Pengungkit",
        "DuPont membongkar apakah lonjakan ROE didorong oleh keunggulan produk (NPM), kecepatan operasi (TATO), atau risiko utang (Leverage)."
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Prinsip Dasar Analisis Keuangan: Jangan Asal Hitung',
      text: '1. **Rasio itu cuma gejala, bukan diagnosis**: Nilai rasio itu kayak termometer buat dokter. Angka yang aneh cuma nunjukin "ada yang sakit" — kamu tetap perlu investigasi lebih lanjut buat tahu penyebabnya.\n2. **Selalu bandingin**: Satu angka rasio nggak ada artinya kalau berdiri sendiri. Kamu harus bandingin sama rata-rata industri (Cross-Sectional) dan sama data perusahaan itu sendiri 3–5 tahun terakhir (Time-Series / Trend Analysis).\n3. **Kas lebih penting dari laba**: Perusahaan bisa aja punya laba akrual positif di atas kertas, tapi tetep bangkrut kalau Free Cash Flow-nya negatif karena piutang macet dan stok numpuk.'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Tips Ujian FEB UNAIR',
      text: '1. **Hati-hati rumus Inventory Turnover**: Buku Brigham pakai Penjualan / Persediaan di rasio umum, tapi juga nyebut HPP / Persediaan lebih akurat. Baca instruksi soal baik-baik.\n2. **Hafalin hubungan Equity Multiplier**: EM = Total Aset / Total Ekuitas = 1 / (1 − Debt Ratio) = 1 + D/E Ratio. Ini sering muncul di soal.\n3. **NOWC ≠ Working Capital biasa**: Notes Payable (utang wesel berbunga) itu utang pendanaan, bukan utang operasional. Jadi nggak boleh dikurangin waktu hitung NOWC!'
    },
    {
      kind: 'h2',
      text: '1. Struktur 4 Laporan Keuangan Pokok & Dinamika Arus Kas'
    },
    {
      kind: 'p',
      text: 'Laporan keuangan tahunan (Annual Report) perusahaan itu isinya 4 dokumen utama yang saling berhubungan:'
    },
    {
      kind: 'table',
      headers: ['Laporan Keuangan', 'Dimensi Waktu', 'Fungsi Strategis Finansial', 'Elemen Kunci & Persamaan'],
      rows: [
        [
          '1. Laporan Posisi Keuangan (Neraca / Balance Sheet)',
          '📌 **Titik Waktu Tertentu (Snapshot)**\nMisal: Per 31 Desember 2026.',
          'Menyajikan kekayaan aset perusahaan dan bagaimana aset tersebut didanai (utang atau ekuitas pemilik).',
          '$\\text{Total Aset} = \\text{Total Liabilitas} + \\text{Ekuitas Pemegang Saham}$\n(Urutan likuiditas: Lancar ke Tetap).'
        ],
        [
          '2. Laporan Laba Rugi (Income Statement)',
          '⏳ **Sepanjang Periode Waktu**\nMisal: 1 Januari – 31 Desember 2026.',
          'Mengukur profitabilitas operasional dan beban non-operasional (bunga pinjaman dan pajak penghasilan).',
          '$\\text{Penjualan} - \\text{HPP} = \\text{Laba Kotor} - \\text{Beban Operasional} = \\text{EBIT} - \\text{Bunga} = \\text{EBT} - \\text{Pajak} = \\text{Laba Bersih}$'
        ],
        [
          '3. Laporan Arus Kas (Statement of Cash Flows)',
          '⏳ **Sepanjang Periode Waktu**\nMenelusuri arus kas masuk & keluar.',
          'Merekonsiliasi laba akuntansi berbasis akrual menjadi kas riil yang tersedia di rekening bank.',
          '$\\Delta \\text{Kas} = \\text{Arus Kas Operasi (CFO)} + \\text{Arus Kas Investasi (CFI)} + \\text{Arus Kas Pendanaan (CFF)}$'
        ],
        [
          '4. Laporan Ekuitas Pemegang Saham',
          '⏳ **Sepanjang Periode Waktu**\nPerubahan komponen modal sendiri.',
          'Melacak penambahan modal disetor, laba ditahan yang diinvestasikan kembali, dan dividen yang dibayarkan.',
          'Laba Ditahan Akhir = Laba Ditahan Awal + Laba Bersih − Dividen Saham Biasa dan Preferen'
        ]
      ],
      caption: 'Tabel 2.1: Karakteristik dan keterkaitan empat laporan keuangan korporasi fundamental.'
    },
    {
      kind: 'h2',
      text: '2. Arus Kas Bebas (Free Cash Flow) & Modal Kerja Operasi Bersih (NOWC)'
    },
    {
      kind: 'p',
      text: 'Di manajemen keuangan, yang menentukan nilai perusahaan itu bukan laba akrual (Net Income), tapi Free Cash Flow (FCF) — yaitu kas bersih dari operasi yang beneran bebas buat dibagiin ke pemegang saham dan kreditor, setelah semua investasi aset dan modal kerja terpenuhi.'
    },
    {
      kind: 'formula',
      text: `\\text{NOPAT} = \\text{EBIT} \\times (1 - T)
\\text{NOWC} = \\text{Aktiva Lancar Operasi} - \\text{Kewajiban Lancar Operasi} = (\\text{Kas} + \\text{Piutang} + \\text{Persediaan}) - (\\text{Utang Usaha} + \\text{Akrual})
\\text{Total Net Operating Capital} = \\text{NOWC} + \\text{Aktiva Tetap Bersih (Net Plant \\& Equipment)}
\\text{Net Investment in Operating Capital} = \\text{Total Capital}_t - \\text{Total Capital}_{t-1}
\\text{Free Cash Flow (FCF)} = \\text{NOPAT} - \\text{Net Investment in Operating Capital}
\\text{Atau secara praktis}: \\quad \\text{FCF} = [\\text{EBIT}(1 - T) + \\text{Depresiasi}] - [\\text{CapEx} + \\Delta \\text{NOWC}]`,
      note: 'Catatan Kritis: Notes Payable (utang wesel jangka pendek berbunga) BUKAN kewajiban lancar operasi karena merupakan bagian dari keputusan pendanaan (financing debt), sehingga TIDAK boleh dikurangkan saat menghitung NOWC!'
    },
    {
      kind: 'h3',
      text: 'Ukuran Nilai Tambah Manajemen: MVA dan EVA'
    },
    {
      kind: 'table',
      headers: ['Metrik Nilai Tambah', 'Definisi & Rumus Konseptual', 'Interpretasi Keuangan'],
      rows: [
        [
          'Market Value Added (MVA)',
          '$\\text{MVA} = \\text{Nilai Pasar Ekuitas} - \\text{Nilai Buku Ekuitas}$\n$\\text{MVA} = (\\text{Jumlah Lembar Saham} \\times \\text{Harga Saham}) - \\text{Total Ekuitas Buku}$',
          'Mengukur seberapa besar kekayaan kumulatif yang berhasil diciptakan manajemen bagi pemegang saham sejak perusahaan pertama kali didirikan.'
        ],
        [
          'Economic Value Added (EVA)',
          '$\\text{EVA} = \\text{NOPAT} - (\\text{Total Net Operating Capital} \\times \\text{WACC})$\n$\\text{EVA} = \\text{Total Capital} \\times (\\text{ROIC} - \\text{WACC})$',
          'Mengukur laba ekonomis murni dalam satu tahun berjalan setelah memperhitungkan seluruh biaya modal operasi (termasuk biaya modal sendiri/ekuitas).'
        ]
      ],
      caption: 'Tabel 2.2: Perbandingan metrik nilai tambah pemegang saham MVA dan EVA.'
    },
    {
      kind: 'h2',
      text: '3. Lima Pilar Rasio Keuangan Korporasi (Financial Ratio Systems)'
    },
    {
      kind: 'p',
      text: 'Analisis rasio itu dibagi jadi 5 kelompok besar:'
    },
    {
      kind: 'h3',
      text: 'Pilar I: Rasio Likuiditas (Liquidity Ratios)'
    },
    {
      kind: 'p',
      text: 'Rasio likuiditas ngecek satu hal: sanggup nggak perusahaan bayar utang jangka pendek yang jatuh tempo kurang dari 1 tahun?'
    },
    {
      kind: 'table',
      headers: ['Nama Rasio', 'Rumus Matematis', 'Pertanyaan Diagnostik', 'Tolok Ukur Standar Industri'],
      rows: [
        [
          'Current Ratio (CR)',
          '$\\frac{\\text{Aktiva Lancar}}{\\text{Kewajiban Lancar}}$',
          'Berapa rupiah aset lancar yang tersedia untuk menjamin setiap Rp 1 utang lancar?',
          'Umumnya $\\ge 1,5\\times - 2,0\\times$. Terlalu tinggi menandakan kas menganggur atau piutang macet.'
        ],
        [
          'Quick Ratio (QR) / Acid-Test',
          '$\\frac{\\text{Aktiva Lancar} - \\text{Persediaan}}{\\text{Kewajiban Lancar}}$',
          'Mampukah perusahaan melunasi utang lancar seketika tanpa harus menjual persediaan barang dagang?',
          'Umumnya $\\ge 1,0\\times$. Persediaan dikeluarkan karena paling tidak likuid dan rentan rugi likuidasi.'
        ]
      ],
      caption: 'Tabel 2.3: Rasio likuiditas jangka pendek.'
    },
    {
      kind: 'h3',
      text: 'Pilar II: Rasio Manajemen Aset / Aktivitas (Asset Management Ratios)'
    },
    {
      kind: 'p',
      text: 'Kelompok ini ngukur seberapa produktif perusahaan ngelola asetnya buat menghasilkan pendapatan:'
    },
    {
      kind: 'table',
      headers: ['Nama Rasio', 'Rumus Matematis', 'Pertanyaan Diagnostik', 'Implikasi Finansial'],
      rows: [
        [
          'Inventory Turnover Ratio',
          '$\\frac{\\text{Penjualan}}{\\text{Persediaan}} \\quad \\text{atau} \\quad \\frac{\\text{HPP}}{\\text{Persediaan}}$',
          'Berapa kali persediaan barang dagang berputar (dijual dan diganti baru) dalam satu tahun?',
          'Angka tinggi = efisiensi pergudangan & modal kerja minimal. Angka rendah = risiko barang usang dan biaya simpan bengkak.'
        ],
        [
          'Days Sales Outstanding (DSO) / ACP',
          '$\\frac{\\text{Piutang Usaha}}{\\text{Penjualan / 365}} = \\frac{\\text{Piutang Usaha} \\times 365}{\\text{Penjualan}}$',
          'Berapa hari rata-rata yang dibutuhkan perusahaan untuk menagih kas dari penjualan kredit?',
          'Harus dibandingkan dengan syarat kredit (*credit terms*). Jika syarat net 30 tapi DSO 55 hari, penagihan kredit bermasalah.'
        ],
        [
          'Fixed Assets Turnover (FA TO)',
          '$\\frac{\\text{Penjualan}}{\\text{Aktiva Tetap Bersih (Net PP\\&E)}}$',
          'Seberapa produktif kapasitas pabrik, mesin, dan properti perusahaan dalam menghasilkan pendapatan?',
          'Perusahaan dengan mesin tua yang telah disusutkan penuh akan tampak memiliki FA TO lebih tinggi dibanding kompetitor baru.'
        ],
        [
          'Total Assets Turnover (TATO)',
          '$\\frac{\\text{Penjualan}}{\\text{Total Aktiva}}$',
          'Secara keseluruhan, berapa rupiah penjualan yang dihasilkan dari setiap rupiah total aktiva yang dimiliki?',
          'Merupakan pilar kedua penentu utama Return on Equity dalam sistem dekomposisi DuPont.'
        ]
      ],
      caption: 'Tabel 2.4: Rasio perputaran dan manajemen aset.'
    },
    {
      kind: 'h3',
      text: 'Pilar III: Rasio Manajemen Utang / Solvabilitas (Debt Management Ratios)'
    },
    {
      kind: 'p',
      text: 'Kelompok ini ngecek seberapa besar utang perusahaan dan sanggup nggak bayar bunga plus cicilan pokoknya:'
    },
    {
      kind: 'table',
      headers: ['Nama Rasio', 'Rumus Matematis', 'Fungsi Pengujian', 'Risiko Ekstrem'],
      rows: [
        [
          'Debt-to-Capital Ratio',
          '$\\frac{\\text{Total Utang (Utang Berbunga)}}{\\text{Total Modal}} = \\frac{\\text{Notes Payable} + \\text{Utang Jangka Panjang}}{\\text{Total Utang} + \\text{Total Ekuitas}}$',
          'Mengukur porsi modal berbunga yang berasal dari kreditor.',
          'Porsi utang tinggi meningkatkan risiko default saat suku bunga acuan melonjak.'
        ],
        [
          'Debt-to-Equity Ratio (D/E)',
          '$\\frac{\\text{Total Liabilitas}}{\\text{Total Ekuitas}}$',
          'Membandingkan modal pinjaman langsung dengan modal sendiri pemilik.',
          'Jika D/E > 2,0x, sebagian besar aset dibiayai pinjaman; proteksi kreditor tipis.'
        ],
        [
          'Equity Multiplier (EM)',
          '$\\frac{\\text{Total Aset}}{\\text{Total Ekuitas}} = 1 + \\frac{\\text{Total Utang}}{\\text{Total Ekuitas}}$',
          'Faktor pengungkit leverage dalam persamaan DuPont.',
          'Makin tinggi EM, makin sensitif laba bagi pemegang saham terhadap guncangan penjualan.'
        ],
        [
          'Times Interest Earned (TIE)',
          '$\\frac{\\text{EBIT}}{\\text{Beban Bunga}}$',
          'Mengukur batas aman penurunan laba operasi sebelum perusahaan gagal membayar bunga utang.',
          'TIE < 1,0x berarti laba operasi tidak cukup membayar bunga pinjaman (risiko pailit nyata).'
        ],
        [
          'EBITDA Coverage Ratio',
          '$\\frac{\\text{EBITDA} + \\text{Pembayaran Sewa}}{\\text{Beban Bunga} + \\text{Pokok Pinjaman} + \\text{Sewa}}$',
          'Ukuran komprehensif kemampuan kas operasi melunasi seluruh komitmen finansial tahunan.',
          'Lebih realistis dibanding TIE karena depresiasi non-kas ditambahkan kembali dan pokok diperhitungkan.'
        ]
      ],
      caption: 'Tabel 2.5: Rasio solvabilitas dan cakupan utang korporasi.'
    },
    {
      kind: 'h3',
      text: 'Pilar IV: Rasio Profitabilitas (Profitability Ratios)'
    },
    {
      kind: 'p',
      text: 'Rasio ini nunjukin hasil akhir gabungan dari semua kebijakan di atas — seberapa banyak laba yang bisa dihasilin:'
    },
    {
      kind: 'table',
      headers: ['Rasio Profitabilitas', 'Rumus Matematis', 'Fokus Pengukuran Efisiensi'],
      rows: [
        [
          'Operating Margin',
          '$\\frac{\\text{EBIT}}{\\text{Penjualan}}$',
          'Efisiensi murni operasi inti sebelum dikurangi biaya bunga dan beban pajak penghasilan.'
        ],
        [
          'Profit Margin (Net Profit Margin / NPM)',
          '$\\frac{\\text{Laba Bersih}}{\\text{Penjualan}}$',
          'Kemampuan menghasilkan laba bersih setelah seluruh biaya operasi, bunga, dan pajak dikurangkan.'
        ],
        [
          'Basic Earning Power (BEP)',
          '$\\frac{\\text{EBIT}}{\\text{Total Aktiva}}$',
          'Daya hasil operasi murni atas aset perusahaan tanpa bias distorsi pajak dan beban leverage utang.'
        ],
        [
          'Return on Assets (ROA)',
          '$\\frac{\\text{Laba Bersih}}{\\text{Total Aktiva}} = \\text{NPM} \\times \\text{TATO}$',
          'Kemampuan total investasi aset korporasi dalam mendulang laba bersih bagi pemegang saham.'
        ],
        [
          'Return on Common Equity (ROE)',
          '$\\frac{\\text{Laba Bersih}}{\\text{Total Ekuitas}} = \\text{ROA} \\times \\text{Equity Multiplier}$',
          'Tingkat imbal hasil per rupiah modal sendiri yang diinvestasikan pemegang saham (tolok ukur utama).'
        ]
      ],
      caption: 'Tabel 2.6: Rasio profitabilitas dan pengembalian modal.'
    },
    {
      kind: 'h3',
      text: 'Pilar V: Rasio Nilai Pasar (Market Value Ratios)'
    },
    {
      kind: 'p',
      text: 'Kelompok ini nyambungin harga saham di bursa sama kinerja keuangan internal perusahaan:'
    },
    {
      kind: 'table',
      headers: ['Nama Rasio Pasar', 'Rumus Matematis', 'Makna Penilaian Pasar Modal'],
      rows: [
        [
          'Price-to-Earnings Ratio (P/E)',
          '$\\frac{\\text{Harga Pasar per Lembar Saham (Price)}}{\\text{Laba per Saham (EPS)}} = \\frac{P_0}{\\text{Laba Bersih / Lembar Saham}}$',
          'Berapa rupiah yang rela dibayar investor untuk setiap Rp 1 laba berjalan. P/E tinggi = ekspektasi pertumbuhan laba masa depan tinggi dan risiko rendah.'
        ],
        [
          'Market-to-Book Ratio (M/B)',
          '$\\frac{\\text{Harga Saham}}{\\text{Nilai Buku per Saham (BVPS)}} = \\frac{P_0}{\\text{Total Ekuitas / Lembar Saham}}$',
          'M/B > 1,0x menunjukkan pasar menilai perusahaan mampu menghasilkan imbal hasil di atas biaya modal historisnya (menciptakan nilai tambah MVA positif).'
        ],
        [
          'Enterprise Value to EBITDA (EV/EBITDA)',
          '$\\frac{\\text{Enterprise Value (EV)}}{\\text{EBITDA}} = \\frac{\\text{Market Cap} + \\text{Total Utang} - \\text{Kas}}{\\text{EBITDA}}$',
          'Mengukur valuasi seluruh entitas bisnis (ekuitas + utang) bebas distorsi struktur modal dan depresiasi. Sangat populer dalam merger & akuisisi (M&A).'
        ]
      ],
      caption: 'Tabel 2.7: Rasio valuasi nilai pasar modal.'
    },
    {
      kind: 'h2',
      text: '4. Dekomposisi Sistem DuPont: 3-Langkah vs 5-Langkah'
    },
    {
      kind: 'p',
      text: 'Sistem DuPont ini dikembangin oleh perusahaan DuPont di tahun 1920-an buat jawab pertanyaan penting: ROE perusahaan naik itu karena emang bagus operasinya, atau cuma karena nambah utang?'
    },
    {
      kind: 'h3',
      text: 'Model 3-Langkah DuPont (3-Step DuPont Equation)'
    },
    {
      kind: 'formula',
      text: `\\text{ROE} = \\underbrace{\\frac{\\text{Laba Bersih}}{\\text{Penjualan}}}_{\\text{Profit Margin (NPM)}} \\times \\underbrace{\\frac{\\text{Penjualan}}{\\text{Total Aset}}}_{\\text{Total Asset Turnover (TATO)}} \\times \\underbrace{\\frac{\\text{Total Aset}}{\\text{Total Ekuitas}}}_{\\text{Equity Multiplier (EM)}}
\\text{ROE} = \\text{ROA} \\times \\text{Equity Multiplier}`,
      note: 'Dekomposisi ini membagi kinerja korporasi ke dalam 3 motor penggerak: (1) Efisiensi Operasi & Biaya (NPM), (2) Efisiensi Pemanfaatan Aset (TATO), dan (3) Kebijakan Struktur Modal / Leverage Finansial (EM).'
    },
    {
      kind: 'h3',
      text: 'Model 5-Langkah DuPont (5-Step DuPont Equation)'
    },
    {
      kind: 'p',
      text: 'DuPont 5-Langkah ini versi lebih detail — bongkar Net Profit Margin jadi 3 bagian: efisiensi operasi (Operating Margin), beban bunga (Interest Burden), dan beban pajak (Tax Burden):'
    },
    {
      kind: 'formula',
      text: `\\text{ROE} = \\underbrace{\\frac{\\text{Laba Bersih}}{\\text{EBT}}}_{\\text{Tax Burden (1 - T)}} \\times \\underbrace{\\frac{\\text{EBT}}{\\text{EBIT}}}_{\\text{Interest Burden}} \\times \\underbrace{\\frac{\\text{EBIT}}{\\text{Penjualan}}}_{\\text{Operating Margin}} \\times \\underbrace{\\frac{\\text{Penjualan}}{\\text{Total Aset}}}_{\\text{Asset Turnover}} \\times \\underbrace{\\frac{\\text{Total Aset}}{\\text{Total Ekuitas}}}_{\\text{Equity Multiplier}}`,
      note: 'Keunggulan 5-Step DuPont: Memberikan pemisahan sempurna antara efisiensi produksi/pemasaran (Operating Margin), beban pembiayaan pinjaman (Interest Burden), dan tarif pajak efektif (Tax Burden).'
    },
    {
      kind: 'table',
      headers: ['Komponen 5-Step DuPont', 'Rasio', 'Makna Finansial', 'Nilai Ideal'],
      rows: [
        ['1. Tax Burden', 'Net Income / EBT', 'Porsi laba sebelum pajak yang tersisa setelah disetor ke kas negara (1 - Tarif Pajak Efektif).', 'Tergantung insentif pajak; mendekati 1,0 jika bebas pajak.'],
        ['2. Interest Burden', 'EBT / EBIT', 'Mengukur pengikisan laba operasi oleh beban bunga pinjaman ($1 - [\\text{Interest}/\\text{EBIT}]$).', 'Makin dekat ke 1,0 = beban bunga ringan (utang rendah).'],
        ['3. Operating Margin', 'EBIT / Sales', 'Kemampuan operasi inti menghasilkan laba sebelum beban modal dan pajak.', 'Makin tinggi = keunggulan bersaing dan efisiensi HPP.'],
        ['4. Asset Turnover', 'Sales / Total Assets', 'Intensitas perputaran modal kerja dan aset tetap.', 'Makin tinggi = operasi ramping (lean capital).'],
        ['5. Equity Multiplier', 'Total Assets / Equity', 'Derajat penggunaan utang pengungkit.', 'Tinggi mendongkrak ROE, tetapi menurunkan Interest Burden.']
      ],
      caption: 'Tabel 2.8: Lima elemen dekomposisi mendalam DuPont 5-Langkah.'
    },
    {
      kind: 'h2',
      text: '5. Laporan Keuangan Ukuran Bersama (Common-Size Statements)'
    },
    {
      kind: 'p',
      text: 'Kalau mau bandingin dua perusahaan yang ukurannya jauh beda (misal Indofood vs UMKM makanan), bandingin angka rupiah mentah itu nggak adil. Solusinya: bikin semua angka jadi persentase!'
    },
    {
      kind: 'ul',
      items: [
        '**Neraca Ukuran Bersama (Common-Size Balance Sheet)**: Seluruh pos akun neraca (aset, utang, ekuitas) dibagi dengan **Total Aset** dan dinyatakan dalam bentuk persentase (Total Aset = 100%). Menunjukkan komposisi struktur aktiva dan struktur pendanaan.',
        '**Laba Rugi Ukuran Bersama (Common-Size Income Statement)**: Seluruh pos akun laba rugi (HPP, beban penjualan, administrasi, bunga, pajak) dibagi dengan **Penjualan Bersih (Net Sales)** dan dinyatakan dalam persentase (Penjualan = 100%). Menunjukkan rasio biaya per rupiah pendapatan.',
        '**Analisis Tren Persentase (Percent Change Analysis)**: Menghitung persentase pertumbuhan setiap akun relatif terhadap tahun dasar (*Base Year*). Menyoroti apakah biaya tumbuh lebih cepat dibanding pertumbuhan pendapatan.'
      ]
    },
    {
      kind: 'h2',
      text: '6. Studi Kasus Komparatif Riil: PT Nusantara Cemerlang Tbk vs Industri'
    },
    {
      kind: 'table',
      headers: ['Kelompok Rasio', 'Rasio Keuangan', 'PT Nusantara (2026)', 'Rata-Rata Industri', 'Diagnosis & Status Kinerja'],
      rows: [
        ['Likuiditas', 'Current Ratio', '1,20×', '2,10×', '🔴 **Kritis**: Likuiditas di bawah standar industri; risiko gagal bayar utang lancar.'],
        ['Likuiditas', 'Quick Ratio', '0,65×', '1,10×', '🔴 **Kritis**: Tanpa persediaan, kas dan piutang hanya menutup 65% utang jangka pendek.'],
        ['Manajemen Aset', 'Inventory Turnover', '4,20×', '6,50×', '🟡 **Lambat**: Persediaan menumpuk di gudang terlalu lama; modal kerja tertahan.'],
        ['Manajemen Aset', 'DSO (Days Sales Outstanding)', '68 Hari', '35 Hari', '🔴 **Buruk**: Pelanggan menunggak bayar 2x lebih lama dari standar industri.'],
        ['Manajemen Aset', 'Total Asset Turnover', '1,40×', '1,80×', '🟡 **Rendah**: Aset belum dimanfaatkan secara optimal untuk menghasilkan omzet.'],
        ['Manajemen Utang', 'Debt-to-Capital Ratio', '65,0%', '42,0%', '🔴 **Berisiko Tinggi**: Struktur modal didominasi pinjaman kreditor.'],
        ['Manajemen Utang', 'Times Interest Earned (TIE)', '2,10×', '5,80×', '🔴 **Rentan**: Penurunan kecil laba operasi dapat memicu default kupon pinjaman.'],
        ['Profitabilitas', 'Operating Margin (EBIT Margin)', '8,5%', '11,2%', '🟡 **Rendah**: Beban pokok penjualan dan operasional kurang efisien.'],
        ['Profitabilitas', 'Net Profit Margin (NPM)', '4,2%', '6,8%', '🟡 **Rendah**: Tergerus oleh beban bunga utang yang sangat berat.'],
        ['Profitabilitas', 'Basic Earning Power (BEP)', '11,9%', '20,2%', '🔴 **Rendah**: Kemampuan aset menghasilkan laba operasi jauh di bawah rekanan.'],
        ['Profitabilitas', 'Return on Assets (ROA)', '5,9%', '12,2%', '🔴 **Tertinggal**: Produktivitas laba atas investasi aset sangat lemah.'],
        ['Profitabilitas', 'Return on Equity (ROE)', '16,8%', '17,5%', '⚖️ **Tampak Mirip**: ROE terlihat wajar hanya karena didorong Equity Multiplier tinggi (2,85x)!'],
        ['Nilai Pasar', 'Price-to-Earnings (P/E)', '8,5×', '15,2×', '🏷️ **Diskon/Khawatir**: Investor mendiskonto valuasi saham akibat profil risiko utang tinggi.'],
        ['Nilai Pasar', 'Market-to-Book (M/B)', '1,1×', '2,6×', '🏷️ **Rendah**: Nilai tambah MVA tipis; pasar skeptis terhadap prospek ekspansi.']
      ],
      caption: 'Tabel 2.9: Komparasi diagnostik 14 rasio keuangan PT Nusantara Cemerlang Tbk terhadap rata-rata industri.'
    },
    {
      kind: 'h2',
      text: '7. Keterbatasan Analisis Rasio & Praktik Window Dressing'
    },
    {
      kind: 'p',
      text: 'Jangan langsung percaya angka rasio mentah-mentah! Ada beberapa jebakan yang harus kamu waspadai:'
    },
    {
      kind: 'ul',
      items: [
        '**Distorsi Konglomerasi / Diversifikasi**: Sulit mencari tolok ukur industri tunggal bagi perusahaan multisektor (misal Astra International yang bergerak di otomotif, alat berat, agribisnis, dan jasa keuangan sekaligus).',
        '**Praktik Window Dressing**: Tindakan manajemen memanipulasi neraca sesaat sebelum tanggal tutup buku (31 Desember) agar laporan keuangan tampak lebih sehat. Contoh: Menunda pelunasan utang dagang dengan kas beberapa hari sebelum tutup tahun untuk menaikkan Current Ratio di atas kertas.',
        '**Perbedaan Kebijakan Akuntansi (Accounting Diversity)**: Dua perusahaan identik dapat melaporkan rasio berbeda drastis akibat perbedaan metode persediaan (FIFO vs Biaya Rata-Rata) dan metode depresiasi (Garis Lurus vs Saldo Menurun).',
        '**Dampak Inflasi Moneter**: Inflasi menyebabkan nilai buku aset tetap historis (Net PP&E) jauh lebih rendah dibanding nilai penggantian wajar saat ini. Akibatnya, depresiasi menjadi kekecilan, laba tampak semu tinggi, dan perputaran aset (TATO) terdistorsi naik.',
        '**Faktor Kualitatif Non-Finansial**: Rasio tidak mencerminkan risiko penting seperti ketergantungan pendapatan pada satu pelanggan utama (*single customer risk*), sengketa hukum/gugatan perdata yang sedang berjalan, dan kualitas kepemimpinan manajemen.'
      ]
    },
    {
      kind: 'h2',
      text: '8. Latihan Soal Interaktif Mandiri'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan 1: Dekomposisi 3-Step DuPont & Solvabilitas Utang',
      prompt: 'Data Keuangan PT Garuda Makmur 2026: Penjualan = Rp 240 Miliar; Laba Bersih = Rp 14,4 Miliar; Total Aset = Rp 160 Miliar; Debt-to-Assets Ratio = 60%. (1) Hitung Net Profit Margin, Total Asset Turnover, dan Equity Multiplier! (2) Hitung ROA dan ROE! (3) Jika perusahaan menargetkan ROE 25% tanpa mengubah struktur modal dan perputaran aset, berapa Net Profit Margin yang harus dicapai?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Langkah 1: Menghitung Komponen DuPont**:\n- Net Profit Margin (NPM) = Laba Bersih / Penjualan = Rp 14,4 Miliar / Rp 240 Miliar = **6,0% (0,06)**.\n- Total Asset Turnover (TATO) = Penjualan / Total Aset = Rp 240 Miliar / Rp 160 Miliar = **1,50x**.\n- Total Ekuitas = Total Aset × (1 - Debt Ratio) = Rp 160 Miliar × (1 - 0,60) = Rp 64 Miliar.\n- Equity Multiplier (EM) = Total Aset / Total Ekuitas = Rp 160 M / Rp 64 M = **2,50x** (atau 1 / 0,40 = 2,50x).',
            '**Langkah 2: Menghitung ROA dan ROE**:\n- $ROA = \\text{NPM} \\times \\text{TATO} = 6,0\\% \\times 1,50 = \\mathbf{9,0\\%}$.\n- $ROE = ROA \\times EM = 9,0\\% \\times 2,50 = \\mathbf{22,5\\%}$.',
            '**Langkah 3: Menghitung Target NPM untuk ROE 25%**:\n- Formula: $ROE = \\text{NPM} \\times \\text{TATO} \\times \\text{EM}$\n- $25\\% = \\text{NPM} \\times 1,50 \\times 2,50$\n- $25\\% = \\text{NPM} \\times 3,75$\n- $\\text{NPM Target} = 25\\% / 3,75 = \\mathbf{6,67\\%}$.\n- Manajemen harus meningkatkan efisiensi biaya sehingga margin laba bersih naik dari 6,0% menjadi 6,67%.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan 2: Rekonsiliasi Free Cash Flow (FCF) dan NOWC',
      prompt: 'PT Berkah Abadi membukukan EBIT sebesar Rp 50 Miliar pada 2026 dengan tarif pajak 22%. Beban depresiasi tahun berjalan adalah Rp 10 Miliar. Belanja modal aset tetap (CapEx) sebesar Rp 18 Miliar. Data modal kerja operasi:\n- Awal Tahun (2025): Kas = Rp 5 M; Piutang = Rp 20 M; Persediaan = Rp 25 M; Utang Usaha = Rp 15 M; Akrual = Rp 5 M; Notes Payable = Rp 10 M.\n- Akhir Tahun (2026): Kas = Rp 6 M; Piutang = Rp 24 M; Persediaan = Rp 30 M; Utang Usaha = Rp 18 M; Akrual = Rp 6 M; Notes Payable = Rp 15 M.\nHitunglah: (1) NOPAT, (2) NOWC 2025 dan NOWC 2026, (3) Perubahan NOWC, dan (4) Free Cash Flow tahun 2026!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. NOPAT**:\n$\\text{NOPAT} = \\text{EBIT} \\times (1 - T) = \\text{Rp } 50\\text{ M} \\times (1 - 0,22) = \\mathbf{\\text{Rp } 39,0\\text{ Miliar}}$.',
            '**2. NOWC (Catatan: Notes Payable diabaikan karena merupakan utang berbunga/pendanaan)**:\n- $\\text{NOWC}_{2025} = (5 + 20 + 25) - (15 + 5) = 50 - 20 = \\mathbf{\\text{Rp } 30,0\\text{ Miliar}}$.\n- $\\text{NOWC}_{2026} = (6 + 24 + 30) - (18 + 6) = 60 - 24 = \\mathbf{\\text{Rp } 36,0\\text{ Miliar}}$.',
            '**3. Perubahan Modal Kerja Operasi (\\Delta NOWC)**:\n$\\Delta \\text{NOWC} = 36 - 30 = \\mathbf{\\text{Rp } 6,0\\text{ Miliar}}$ (Ada penambahan kas yang tertanam di modal kerja).',
            '**4. Free Cash Flow (FCF)**:\n$\\text{FCF} = [\\text{NOPAT} + \\text{Depresiasi}] - [\\text{CapEx} + \\Delta \\text{NOWC}]$\n$\\text{FCF} = [39,0 + 10,0] - [18,0 + 6,0] = 49,0 - 24,0 = \\mathbf{\\text{Rp } 25,0\\text{ Miliar}}$.\nPerusahaan menghasilkan Rp 25 Miliar kas riil bebas yang dapat dialokasikan untuk membayar dividen tunai atau pelunasan pokok utang perbankan.'
          ]
        }
      ]
    },
    CASE_DUPONT_ANALYSIS,
    {
      kind: 'h2',
      text: '9. Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Trilogi DuPont**: ROE adalah produk silang antara Efisiensi Biaya (Profit Margin), Efisiensi Operasional Aset (Asset Turnover), dan Risiko Struktur Modal (Equity Multiplier). Perusahaan hebat mencetak ROE tinggi melalui NPM dan TATO tinggi, bukan semata-mata menimbun utang berisiko.',
        '**Free Cash Flow adalah Raja**: Laba bersih akuntansi dapat dikaburkan oleh kebijakan akrual dan kapitalisasi biaya, namun Free Cash Flow memperlihatkan kas tunai riil yang menjadi sumber utama penentuan nilai wajar intrinsik korporasi.',
        '**Pengawasan Kualitas Rasio**: Waspadai praktik window dressing, siklus musiman industri dagang, serta perbedaan standar akuntansi saat melakukan perbandingan rasio lintas perusahaan (*cross-sectional benchmarking*).'
      ]
    }
  ]
};
