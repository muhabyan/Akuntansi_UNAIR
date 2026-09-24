import type { Reading } from '../../../types';
import { CASE_WACC_COMPREHENSIVE } from '../mankeuPracticeCases';

const SVG_WACC_STRUCTURE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="waccWd" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="waccWp" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="waccWe" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk5)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">KOMPONEN BIAYA MODAL RATA-RATA TERTIMBANG (WACC)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">WACC MODEL</text>

  <!-- Formula Banner on Top -->
  <g transform="translate(35, 70)">
    <rect class="svg-subcard" x="0" y="0" width="830" height="42" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="415" y="26" fill="#f8fafc" font-size="10.5" font-weight="800" text-anchor="middle">
      WACC = [ <tspan class="text-accent-blue" fill="#38bdf8">Wd × Rd × (1 - T)</tspan> ] + [ <tspan class="text-accent-purple" fill="#a78bfa">Wp × Rp</tspan> ] + [ <tspan class="text-accent-green" fill="#34d399">We × Rs</tspan> ]
    </text>
  </g>

  <!-- 3 Capital Component Pillars -->
  <!-- Pillar 1: Debt (Rd after-tax) -->
  <g transform="translate(35, 125)">
    <rect class="svg-card" x="0" y="0" width="265" height="180" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#waccWd)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. MODAL UTANG (DEBT - Wd)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="56" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Biaya Riil: Rd × (1 - Tax Rate)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Memiliki fasilitas <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Tax Shield</tspan> bunga</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Bunga pinjaman mengurangi beban pajak</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Biaya modal paling murah di antara ketiganya</text>
    <text class="text-accent-red" x="14" y="136" fill="#f87171" font-size="8">• Risiko: Risiko kebangkrutan finansial</text>
    <rect class="svg-badge-blue" x="14" y="148" width="237" height="20" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="162" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Contoh Bobot Target: 30% - 40%</text>
  </g>

  <!-- Pillar 2: Preferred Stock (Rp) -->
  <g transform="translate(318, 125)">
    <rect class="svg-card" x="0" y="0" width="265" height="180" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#waccWp)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="132" y="20" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">2. SAHAM PREFEREN (Wp)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="132" y="56" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">Biaya Riil: Dp ÷ Net Proceeds (Pn)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Dividen tetap kumulatif prioritas</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-red" fill="#f87171" font-weight="700">TIDAK ADA tax shield</tspan> (bayar dari laba bersih)</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Memiliki sifat hibrida: Utang + Saham</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Hak klaim aset di atas saham biasa</text>
    <rect class="svg-badge-purple" x="14" y="148" width="237" height="20" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="132" y="162" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Contoh Bobot Target: 0% - 10%</text>
  </g>

  <!-- Pillar 3: Common Equity (We × Rs) -->
  <g transform="translate(600, 125)">
    <rect class="svg-card" x="0" y="0" width="265" height="180" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#waccWe)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">3. SAHAM BIASA (EQUITY - We)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="56" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">Dihitung via CAPM: Rf + β(Rm - Rf)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Biaya modal paling mahal (Risk Premium tertinggi)</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Pembayar klaim sisa terakhir (Residual Claimant)</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Menuntut imbal hasil dividen &amp; capital gain</text>
    <text class="text-accent-green" x="14" y="136" fill="#34d399" font-size="8">• Keunggulan: Bebas kewajiban bayar bunga tetap</text>
    <rect class="svg-badge-green" x="14" y="148" width="237" height="20" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="162" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Contoh Bobot Target: 50% - 70%</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">WACC adalah "Hurdle Rate" minimum yang harus dilampaui (IRR &gt; WACC) agar proyek investasi menciptakan nilai tambah pemegang saham.</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'The Cost of Capital & Weighted Average Cost of Capital (WACC)',
  ref: 'Brigham & Houston Ch. 9 | Brigham & Ehrhardt Ch. 9 | Silabus Ujian Tengah Semester (UTS) FEB UNAIR',
  intro: 'Sebelum perusahaan memutuskan untuk membangun pabrik, membeli mesin, atau meluncurkan produk baru (Capital Budgeting), perusahaan harus tahu berapa "ongkos sewa uang" yang harus dibayar kepada para penyedia modal (bank, pemegang obligasi, dan pemegang saham). Angka batas minimal keuntungan tersebut disebut Biaya Modal Rata-rata Tertimbang (Weighted Average Cost of Capital / WACC). Modul ini mengupas tuntas cara menghitung biaya utang setelah pajak, biaya saham preferen, 3 cara menghitung biaya saham biasa, penyesuaian biaya emisi (Flotation Costs), titik patah laba ditahan (Breakpoint), serta kalkulasi WACC.',
  objectives: [
    'Membedah kamus simbol biaya modal (WACC, r_d, T, r_d(1-T), r_p, r_s, r_e, F, w_d, w_p, w_e, BP).',
    'Menjelaskan mengapa biaya utang mendapatkan fasilitas penghematan pajak (Interest Tax Shield) sedangkan dividen saham tidak.',
    'Menghitung biaya ekuitas internal (r_s) menggunakan 3 metode standar (CAPM, DCF Gordon Model, Bond Yield Plus Risk Premium) dan merekonsiliasi hasilnya.',
    'Menghitung biaya penerbitan saham biasa baru (r_e) yang disesuaikan dengan biaya emisi penjamin emisi (Flotation Costs).',
    'Menghitung WACC komprehensif menggunakan bobot struktur modal sasaran (Target Capital Structure) dan menghitung Retained Earnings Breakpoint.'
  ],
  blocks: [
    {
      kind: 'callout',
      title: 'Sorotan Dosen FEB UNAIR: Dua Jebakan Utama Konsep Biaya Modal',
      text: '1. **Laba Ditahan itu TIDAK GRATIS!**: Banyak mahasiswa mengira laba ditahan tidak ada biayanya karena uang sendiri. SALAH BESAR! Laba ditahan memiliki biaya berupa *Opportunity Cost* ($r_s$) karena pemegang saham bisa saja mengambil uang dividen tersebut dan menginvestasikannya di tempat lain dengan risiko sejenis.\n2. **Bunga itu Hemat Pajak, Dividen itu Bayar Pajak Penuh**: Bunga pinjaman utang mengurangi laba kena pajak perusahaan ($r_d(1-T)$), sedangkan dividen dibayarkan dari Laba Bersih Setelah Pajak (EAT), sehingga dividen tidak memiliki fasilitas tax shield!',
      variant: 'warning'
    },
    {
      kind: 'figure',
      caption: 'Gambar 5.1: Struktur Komponen Biaya Modal Rata-rata Tertimbang (WACC).',
      svg: SVG_WACC_STRUCTURE
    },
    {
      kind: 'h2',
      text: 'Kamus Bahasa Bayi Simbol & Notasi Biaya Modal (TM 5)'
    },
    {
      kind: 'p',
      text: 'Berikut adalah kamus terjemahan bahasa manusia untuk seluruh simbol yang muncul pada bab Biaya Modal dan WACC:'
    },
    {
      kind: 'table',
      headers: ['Simbol / Notasi', 'Nama Finansial', 'Bahasa Manusia (Maksud Aslinya)', 'Arti Angka & Satuan'],
      rows: [
        [
          '$WACC$',
          'Weighted Average Cost of Capital',
          '**Rata-rata Ongkos Sewa Modal Campuran**. Biaya rata-rata tertimbang yang harus dibayar perusahaan ke bank, pemilik obligasi, dan pemegang saham.',
          'Satuan: $\\%$. Contoh: $WACC = 10\\%$ artinya setiap proyek baru harus menghasilkan untung minimal di atas 10% agar perusahaan tidak rugi.'
        ],
        [
          '$r_d$ atau $k_d$',
          'Before-Tax Cost of Debt',
          '**Suku Bunga Utang Sebelum Pajak**. Tingkat bunga pinjaman bank atau Yield to Maturity (YTM) obligasi yang diterbitkan perusahaan.',
          'Satuan: $\\%$. Contoh: $r_d = 10\\%$ adalah bunga yang tertera di kontrak pinjaman bank.'
        ],
        [
          '$T$',
          'Marginal Corporate Tax Rate',
          '**Tarif Pajak Penghasilan Badan**. Persentase pajak penghasilan yang dikenakan pemerintah pada laba perusahaan.',
          'Satuan: $\\%$. Contoh: $T = 25\\%$ artinya pemerintah memotong 25% dari laba kena pajak perusahaan.'
        ],
        [
          '$r_d(1 - T)$',
          'After-Tax Cost of Debt',
          '**Biaya Utang Riil yang Ditanggung Perusahaan**. Beban bunga riil setelah dipotong fasilitas diskon penghematan pajak dari pemerintah (*Tax Shield*).',
          'Satuan: $\\%$. Contoh: $10\\% \\times (1 - 0,25) = \\mathbf{7,5\\%}$. Karena bayar bunga, tagihan pajak perusahaan berkurang!'
        ],
        [
          '$r_p$ atau $k_p$',
          'Cost of Preferred Stock',
          '**Biaya Saham Preferen**. Persentase dividen tetap yang dijanjikan kepada pemegang saham preferen dibagi dengan harga jual bersih saham ($D_p / P_n$).',
          'Satuan: $\\%$. Contoh: $r_p = 10,2\\%$. Tidak ada potongan pajak $(1-T)$ karena dividen dibayar dari laba bersih.'
        ],
        [
          '$r_s$ atau $k_s$',
          'Cost of Retained Earnings (Internal Equity)',
          '**Biaya Ekuitas Internal (Laba Ditahan)**. Tingkat keuntungan minimal yang dituntut pemegang saham atas laba mereka yang ditahan di perusahaan.',
          'Satuan: $\\%$. Dihitung menggunakan CAPM atau Gordon DCF. Contoh: $r_s = 13,5\\%$.'
        ],
        [
          '$r_e$ atau $k_e$',
          'Cost of New Common Stock (External Equity)',
          '**Biaya Penerbitan Saham Biasa Baru**. Biaya ekuitas eksternal saat perusahaan menerbitkan saham baru di bursa, sudah ditambah biaya emisi bank investasi.',
          'Satuan: $\\%$. Selalu lebih mahal dari $r_s$ karena harus membayar biaya emisi ($F$). Contoh: $r_e = 14,8\\%$.'
        ],
        [
          '$F$',
          'Flotation Cost Percentage',
          '**Biaya Emisi Penjaminan Efek**. Ongkos jasa yang dipotong oleh *underwriter* (bankir investasi/sekuritas), biaya cetak prospektus, hukum, dan akuntan.',
          'Satuan: $\\%$ dari harga saham. Contoh: $F = 10\\% = 0,10$.'
        ],
        [
          '$w_d, w_p, w_e$',
          'Capital Structure Weights',
          '**Porsi Bobot Struktur Modal Sasaran**. Persentase pembagian modal: porsi utang ($w_d$), saham preferen ($w_p$), dan saham biasa ($w_e$).',
          'Total seluruh bobot WAJIB $\\sum w = w_d + w_p + w_e = 100\\% = 1,0$.'
        ],
        [
          '$D_0$ vs $D_1$',
          'Historical Dividend vs Expected Dividend',
          '**$D_0$** = Dividen yang baru saja dibayar kemarin. **$D_1$** = Dividen yang diperkirakan akan dibayar tahun depan ($D_1 = D_0(1+g)$).',
          'Satuan: Rupiah / Dollar per lembar saham. Hati-hati jangan sampai tertukar di rumus Gordon!'
        ],
        [
          '$g$',
          'Constant Growth Rate',
          '**Laju Pertumbuhan Dividen Konstan**. Persentase kenaikan dividen yang diharapkan terjadi setiap tahun secara stabil.',
          'Satuan: $\\%$. Contoh: $g = 6\\%$.'
        ],
        [
          '$P_0$',
          'Current Stock Price',
          '**Harga Pasar Saham Hari Ini**. Harga perdagangan saham saat ini di bursa efek.',
          'Satuan: Rupiah / Dollar per lembar saham. Contoh: $P_0 = \\text{Rp } 4.000$.'
        ],
        [
          '$BP$',
          'Retained Earnings Breakpoint',
          '**Titik Patah Laba Ditahan**. Batas maksimal total modal baru yang bisa didanai sebelum laba ditahan habis dan perusahaan terpaksa emisi saham baru.',
          'Satuan: Uang total. Formula: $BP = \\text{Laba Ditahan} / w_e$. Di atas titik ini, WACC melonjak naik!'
        ]
      ],
      caption: 'Tabel 5.1: Kamus lengkap simbol notasi biaya modal (WACC).'
    },
    {
      kind: 'h2',
      text: 'Pilar I: Biaya Utang Setelah Pajak [After-Tax Cost of Debt: Rd(1 - T)]'
    },
    {
      kind: 'p',
      text: 'Ketika perusahaan meminjam uang dari bank atau menerbitkan obligasi, perusahaan harus membayar bunga sebesar $r_d$. Namun, pemerintah memperlakukan bunga sebagai pengurang laba kena pajak (*Tax-Deductible Expense*):'
    },
    {
      kind: 'formula',
      text: `\\text{After-Tax Cost of Debt} = r_d \\times (1 - T)`,
      note: 'rd adalah suku bunga sebelum pajak. T adalah tarif pajak badan perusahaan. (1 - T) adalah faktor penyesuaian pajak.'
    },
    {
      kind: 'example',
      title: 'Contoh Bahasa Bayi: Kenapa Pemerintah Ikut Patungan Bayar Bunga?',
      blocks: [
        {
          kind: 'p',
          text: 'Misalkan PT Semen Nusantara meminjam uang dengan bunga **$10\\%$** per tahun. Tarif pajak penghasilan badan adalah **$25\\%$** ($0,25$).'
        },
        {
          kind: 'p',
          text: '$$\\text{Biaya Utang Setelah Pajak} = 10\\% \\times (1 - 0,25) = 10\\% \\times 0,75 = \\mathbf{7,5\\%}$$'
        },
        {
          kind: 'p',
          text: '**Penjelasan Bahasa Bayi**: Dari bunga 10% yang harus dibayarkan ke bank, sebesar **2,5% dihemat** karena tagihan pajak ke kantor pajak berkurang. Jadi, perusahaan sebetulnya cuma menanggung beban riil **7,5%**, sedangkan sisanya seolah-olah "disubsidi" oleh pemerintah lewat fasilitas pemotongan pajak (*Interest Tax Shield*)!'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar II: Biaya Saham Preferen (Cost of Preferred Stock: Rp)'
    },
    {
      kind: 'p',
      text: 'Saham preferen memberikan dividen tetap ($D_p$) kepada pemegangnya. Karena dividen dibayarkan dari laba setelah pajak, **TIDAK ADA potongan pajak** untuk saham preferen:'
    },
    {
      kind: 'formula',
      text: `r_p = \\frac{D_p}{P_n} = \\frac{D_p}{P_0(1 - F)}`,
      note: 'Dp adalah dividen tahunan saham preferen. P0 adalah harga pasar saham preferen. F adalah persentase biaya emisi (Flotation cost). Pn adalah kas bersih yang diterima perusahaan.'
    },
    {
      kind: 'example',
      title: 'Contoh Perhitungan Biaya Saham Preferen',
      blocks: [
        {
          kind: 'p',
          text: 'Perusahaan menerbitkan saham preferen dengan dividen tetap **$10** per lembar. Harga pasar saham saat ini adalah **$100**, dan biaya emisi (*flotation cost*) adalah **2,5%** ($F = 0,025$).'
        },
        {
          kind: 'p',
          text: '$$\\text{Kas Bersih yang Diterima } (P_n) = 100 \\times (1 - 0,025) = \\$97,50$$'
        },
        {
          kind: 'p',
          text: '$$r_p = \\frac{10}{97,50} = 0,10256 = \\mathbf{10,26\\%}$$'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar III: Tiga Metode Menghitung Biaya Ekuitas Internal (Rs)'
    },
    {
      kind: 'p',
      text: 'Biaya laba ditahan ($r_s$) adalah imbal hasil yang dituntut oleh pemegang saham lama. Terdapat **tiga metode standar** di buku Brigham untuk mengestimasinya:'
    },
    {
      kind: 'h3',
      text: 'Metode 1: Pendekatan CAPM (Capital Asset Pricing Model)'
    },
    {
      kind: 'formula',
      text: `r_s = r_{RF} + \\underbrace{(r_M - r_{RF})}_{RPM} \\times \\beta_i`,
      note: 'r_RF adalah risk-free rate. r_M adalah market return. RPM adalah premi risiko pasar. beta_i adalah koefisien beta saham.'
    },
    {
      kind: 'h3',
      text: 'Metode 2: Pendekatan Arus Kas Terdiskon / Gordon Growth Model (DCF)'
    },
    {
      kind: 'formula',
      text: `r_s = \\frac{D_1}{P_0} + g = \\frac{D_0(1 + g)}{P_0} + g`,
      note: 'D0 adalah dividen terakhir yang sudah dibayar. D1 adalah dividen tahun depan. P0 adalah harga saham saat ini. g adalah pertumbuhan konstan dividen.'
    },
    {
      kind: 'callout',
      title: 'Awas Jebakan Ujian D1 vs D0!',
      text: 'Perhatikan kalimat di lembar soal UTS FEB UNAIR:\n- Jika soal menyebut: *"Perusahaan **baru saja membayar** dividen Rp 200"*, itu adalah **$D_0$**! Anda WAJIB mengalikannya dengan $(1+g)$ untuk mendapatkan $D_1$.\n- Namun jika soal menyebut: *"Dividen **tahun depan diperkirakan** Rp 212"*, itu sudah merupakan **$D_1$**! JANGAN dikalikan $(1+g)$ lagi!',
      variant: 'warning'
    },
    {
      kind: 'h3',
      text: 'Metode 3: Pendekatan Yield Obligasi Ditambah Premi Risiko (Bond-Yield-Plus-Risk-Premium)'
    },
    {
      kind: 'formula',
      text: `r_s = \\text{Yield Obligasi Perusahaan } (r_d) + \\text{Judgemental Risk Premium } (3\\% \\text{ s.d. } 5\\%)`,
      note: 'Karena pemegang saham menanggung risiko lebih tinggi dibanding pemegang obligasi, mereka menuntut premi tambahan sekitar 3% hingga 5% di atas suku bunga obligasi perusahaan.'
    },
    {
      kind: 'example',
      title: 'Contoh Rekonsiliasi 3 Metode Biaya Ekuitas (Soal Standar UTS)',
      blocks: [
        {
          kind: 'p',
          text: 'Data PT Adaro Finansial:\n- Suku bunga bebas risiko $r_{RF} = 6,0\\%$; Return pasar $r_M = 12,0\\%$; Beta saham $\\beta = 1,20$.\n- Harga saham saat ini $P_0 = Rp 4.000$; Dividen terakhir yang baru saja dibayar $D_0 = Rp 200$; Pertumbuhan dividen stabil $g = 6,0\\%$.\n- Suku bunga obligasi perusahaan $r_d = 9,0\\%$, dan premi risiko ekuitas atas obligasi diperkirakan $4,0\\%$.'
        },
        {
          kind: 'ul',
          items: [
            '**1. Metode CAPM**:\n$r_s = 6,0\\% + 1,20(12,0\\% - 6,0\\%) = 6,0\\% + (1,20 \\times 6,0\\%) = 6,0\\% + 7,2\\% = \\mathbf{13,20\\%}$.',
            '**2. Metode DCF (Gordon)**:\n$D_1 = D_0(1 + g) = 200 \\times (1 + 0,06) = Rp 212$.\n$r_s = \\frac{212}{4.000} + 0,06 = 0,053 + 0,06 = 5,30\\% + 6,00\\% = \\mathbf{11,30\\%}$.',
            '**3. Metode Bond Yield + Risk Premium**:\n$r_s = 9,0\\% + 4,0\\% = \\mathbf{13,00\\%}$.',
            '**Rata-rata Estimasi Biaya Ekuitas ($r_s$)**:\n$$r_s = \\frac{13,20\\% + 11,30\\% + 13,00\\%}{3} = \\frac{37,50\\%}{3} = \\mathbf{12,50\\%}$$'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar IV: Biaya Saham Biasa Baru (Cost of New Common Stock: Re)'
    },
    {
      kind: 'p',
      text: 'Jika laba ditahan perusahaan sudah habis terpakai dan perusahaan butuh modal ekuitas tambahan, perusahaan harus menerbitkan saham biasa baru ke publik. Penerbitan saham baru memakan biaya jasa perbankan (*flotation cost* $F$):'
    },
    {
      kind: 'formula',
      text: `r_e = \\frac{D_1}{P_0(1 - F)} + g`,
      note: 'F adalah persentase biaya emisi penjamin efek (contoh: 10% = 0,10). Nilai re selalu lebih tinggi daripada rs.'
    },
    {
      kind: 'example',
      title: 'Contoh Dampak Flotation Cost pada Saham Baru',
      blocks: [
        {
          kind: 'p',
          text: 'Dari contoh sebelumnya, $D_1 = Rp 212$, $P_0 = Rp 4.000$, dan $g = 6,0\\%$. Jika perusahaan menerbitkan saham baru dengan biaya emisi $F = 10\\%$ ($0,10$), berapakah $r_e$?'
        },
        {
          kind: 'p',
          text: '$$P_n = P_0(1 - F) = 4.000 \\times (1 - 0,10) = Rp 3.600$$'
        },
        {
          kind: 'p',
          text: '$$r_e = \\frac{212}{3.600} + 0,06 = 0,05889 + 0,06 = 5,89\\% + 6,00\\% = \\mathbf{11,89\\%}$$'
        },
        {
          kind: 'p',
          text: '**Perbandingan**: Biaya laba ditahan adalah $11,30\\%$, tetapi biaya saham baru melonjak menjadi **11,89%** karena ada potongan biaya emisi penjamin efek!'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar V: Titik Patah Laba Ditahan (Retained Earnings Breakpoint)'
    },
    {
      kind: 'p',
      text: 'Berapa banyak total anggaran investasi modal yang bisa didanai sebelum laba ditahan habis dan perusahaan terpaksa menerbitkan saham baru yang berbiaya mahal? Titik batas itu disebut **Retained Earnings Breakpoint**:'
    },
    {
      kind: 'formula',
      text: `\\text{Breakpoint (BP)} = \\frac{\\text{Jumlah Laba Ditahan yang Tersedia}}{w_e}`,
      note: 'we adalah bobot target ekuitas saham biasa dalam struktur modal perusahaan.'
    },
    {
      kind: 'example',
      title: 'Contoh Logika Sederhana Breakpoint',
      blocks: [
        {
          kind: 'p',
          text: 'PT Surya Makmur memiliki laba ditahan yang tersedia sebesar **Rp 60 Miliar**. Struktur modal sasaran perusahaan menghendaki porsi ekuitas biasa sebesar **60%** ($w_e = 0,60$) dan utang **40%** ($w_d = 0,40$).'
        },
        {
          kind: 'p',
          text: '$$\\text{Breakpoint (BP)} = \\frac{\\text{Rp 60 Miliar}}{0,60} = \\mathbf{\\text{Rp 100 Miliar}}$$'
        },
        {
          kind: 'p',
          text: '**Makna Finansial untuk Ujian**:\n- Jika total ekspansi proyek investasi $\\le$ **Rp 100 Miliar**, perusahaan cukup menggunakan laba ditahan ($r_s$) dan WACC tetap rendah.\n- Namun jika perusahaan bernafsu mengambil proyek di atas **Rp 100 Miliar**, laba ditahan habis! Perusahaan terpaksa menerbitkan saham baru ($r_e$) yang mahal, sehingga WACC perusahaan akan **melonjak naik**!'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar VI: Menghitung WACC Komprehensif'
    },
    {
      kind: 'p',
      text: 'Setelah seluruh komponen biaya dan bobot sasaran diketahui, gabungkan ke dalam persamaan sakti WACC:'
    },
    {
      kind: 'formula',
      text: `\\text{WACC} = \\underbrace{\\left[ w_d \\times r_d \\times (1 - T) \\right]}_{\\text{Komponen Utang}} + \\underbrace{\\left[ w_p \\times r_p \\right]}_{\\text{Komponen Saham Preferen}} + \\underbrace{\\left[ w_e \\times r_s \\right]}_{\\text{Komponen Saham Biasa}}`,
      note: 'Total bobot wajib wd + wp + we = 1,0 (100%). Selalu gunakan Nilai Pasar (Market Value Weights) jika tersedia.'
    },
    {
      kind: 'example',
      title: 'Studi Kasus Lengkap: Menghitung WACC Perusahaan (Soal Wajib UTS)',
      blocks: [
        {
          kind: 'p',
          text: 'Struktur modal target PT Nusantara Prima:\n- **Utang Jangka Panjang ($w_d$)**: Bobot $30\\%$; Kupon bunga pinjaman $r_d = 10,0\\%$; Pajak badan $T = 25\\%$.\n- **Saham Preferen ($w_p$)**: Bobot $10\\%$; Biaya saham preferen $r_p = 11,0\\%$.\n- **Saham Biasa ($w_e$)**: Bobot $60\\%$; Biaya laba ditahan $r_s = 14,0\\%$.\nBerapakah WACC PT Nusantara Prima?'
        },
        {
          kind: 'ul',
          items: [
            '**1. Komponen Utang Setelah Pajak**:\n$w_d \\times r_d(1 - T) = 0,30 \\times 10,0\\% \\times (1 - 0,25) = 0,30 \\times 7,5\\% = \\mathbf{2,25\\%}$.',
            '**2. Komponen Saham Preferen**:\n$w_p \\times r_p = 0,10 \\times 11,0\\% = \\mathbf{1,10\\%}$.',
            '**3. Komponen Saham Biasa**:\n$w_e \\times r_s = 0,60 \\times 14,0\\% = \\mathbf{8,40\\%}$.',
            '**4. Penjumlahan Total WACC**:\n$$\\text{WACC} = 2,25\\% + 1,10\\% + 8,40\\% = \\mathbf{11,75\\%}$$'
          ]
        },
        {
          kind: 'p',
          text: '**Arti Finansial Angka 11,75%**: Setiap proyek investasi baru yang diajukan oleh divisi perusahaan **wajib menghasilkan tingkat pengembalian di atas 11,75% ($IRR > 11,75\\%$)**. Jika sebuah proyek hanya menghasilkan return 11%, maka proyek tersebut harus ditolak karena tidak mampu menutup ongkos sewa modal rata-rata!'
        }
      ]
    },
    CASE_WACC_COMPREHENSIVE,
    {
      kind: 'h2',
      text: 'Jebakan Klasik Ujian Tengah Semester (Exam Traps TM 5)'
    },
    {
      kind: 'ul',
      items: [
        '**Jebakan 1: Memasukkan Faktor Pajak (1 - T) ke Saham Preferen atau Saham Biasa**:\nIngat baik-baik: **HANYA UTANG ($r_d$) yang dikalikan $(1 - T)$**! Saham preferen dan saham biasa **JANGAN SEKALI-KALI DIKALI $(1 - T)$** karena dividen dibayarkan dari laba setelah pajak.',
        '**Jebakan 2: Menggunakan Nilai Buku (Book Value) Bukan Nilai Pasar (Market Value)**:\nJika di soal diberikan dua jenis neraca (Nilai Buku Akuntansi vs Nilai Pasar Saham/Utang), **selalu gunakan Nilai Pasar** untuk menghitung bobot $w_d, w_p, w_e$, karena modal baru yang ditarik dari pasar hari ini dihargai dengan harga pasar.',
        '**Jebakan 3: Menggunakan Satu WACC Korporasi untuk Semua Proyek Berbeda Risiko**:\nJika divisi perusahaan memiliki risiko yang jauh lebih liar dibanding risiko korporasi rata-rata (misal divisi eksplorasi tambang vs divisi minimarket), proyek tersebut wajib menggunakan *Risk-Adjusted Cost of Capital* ($WACC + \\text{Penyesuaian Risiko}$), bukan WACC rata-rata perusahaan.'
      ]
    },
    {
      kind: 'h2',
      text: 'Rangkuman Inti & Checklist Kesiapan Ujian TM 5'
    },
    {
      kind: 'ul',
      items: [
        '**Urutan Kemurahan Biaya**: $r_d(1-T)$ (Paling Murah) $<$ $r_p$ (Menengah) $<$ $r_s$ (Mahal) $<$ $r_e$ (Paling Mahal).',
        '**Fasilitas Tax Shield**: Bunga utang dapat mengurangi beban pajak perusahaan.',
        '**Tiga Metode $r_s$**: CAPM, DCF Gordon ($D_1/P_0 + g$), dan Bond Yield + RP ($r_d + 4\\%$).',
        '**WACC Sebagai Hurdle Rate**: Proyek diterima jika $IRR > WACC$ dan $NPV > 0$.'
      ]
    }
  ]
};
