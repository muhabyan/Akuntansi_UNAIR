import type { Reading } from '../../../types';
import { CASE_UTS_MANKEU_INTEGRATED } from '../mankeuPracticeCases';

const SVG_UTS_MANKEU_SUMMARY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgUtsMankeu" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="m1Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="m2Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="m3Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="m4Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgUtsMankeu)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PETA SINTESIS PRA-UTS MANAJEMEN KEUANGAN (TM 1 s.d. TM 7)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">FINANCIAL ROADMAP</text>

  <g transform="translate(30, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#m1Grad)"/>
    <text class="text-accent-blue" x="14" y="28" fill="#38bdf8" font-size="10" font-weight="800">1. RASIO & DUPONT</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 1 & TM 2 | Rasio & Analisis</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Teori Keagenan & Tata Kelola</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• Likuiditas: Current & Quick</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Solvabilitas: DER & TIE Ratio</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Profitabilitas: ROA & ROE</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• DuPont 3-Way: PM x TATO x EM</text>
    <text class="text-accent-blue" x="18" y="195" fill="#38bdf8" font-size="7.5" font-weight="700">Fokus: Dekomposisi Kinerja</text>
  </g>

  <g transform="translate(245, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#m2Grad)"/>
    <text class="text-accent-green" x="14" y="28" fill="#34d399" font-size="10" font-weight="800">2. TVM & VALUASI</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 3 | Nilai Waktu dari Uang</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Present Value & Future Value</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• Ordinary Annuity vs Annuity Due</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Perpetuitas: PV = PMT / r</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Suku Bunga Efektif (EAR / EFF%)</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• Tabel Amortisasi Pinjaman Bank</text>
    <text class="text-accent-green" x="18" y="195" fill="#34d399" font-size="7.5" font-weight="700">Fokus: Matematika Keuangan</text>
  </g>

  <g transform="translate(460, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#m3Grad)"/>
    <text class="text-accent-amber" x="14" y="28" fill="#fbbf24" font-size="10" font-weight="800">3. RISIKO, CAPM, & WACC</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 4 & TM 5 | Risk & Return</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Diversifikasi & Risiko Sistematik</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• Koefisien Beta (β) Portofolio</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• SML / CAPM: r_s = r_RF + β(r_M - r_RF)</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Cost of Debt Setelah Pajak: r_d(1-T)</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• WACC = w_d r_d(1-T) + w_p r_p + w_s r_s</text>
    <text class="text-accent-amber" x="18" y="195" fill="#fbbf24" font-size="7.5" font-weight="700">Fokus: Biaya Modal Rata-rata</text>
  </g>

  <g transform="translate(675, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#m4Grad)"/>
    <text class="text-accent-purple" x="14" y="28" fill="#a78bfa" font-size="10" font-weight="800">4. CAPITAL BUDGETING</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 6 & TM 7 | Evaluasi Proyek</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• NPV: Metode Evaluasi Emas</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• IRR vs MIRR (Tingkat Reinvestasi)</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Profitability Index (PI) & Payback</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Crossover Rate Mutually Exclusive</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• OCF & Tax Shield Depresiasi</text>
    <text class="text-accent-purple" x="18" y="195" fill="#a78bfa" font-size="7.5" font-weight="700">Fokus: Kelayakan Investasi</text>
  </g>

  <text class="svg-muted" x="450" y="328" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Sintesis Terpadu Manajemen Keuangan Pra-UTS: Integrasi menyeluruh analisis rasio, nilai waktu uang, risiko portofolio, biaya modal, dan keputusan investasi modal.</text>
</svg>`;

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Master Review & Cheatsheet Pra-UTS (TM 1 s.d. TM 7) Manajemen Keuangan',
  ref: 'Kompilasi Standar Ujian Tengah Semester (UTS) FEB UNAIR | Brigham & Houston Ch. 1, 3, 4, 5, 8, 9, 10, 11',
  intro: 'Modul ini adalah panduan pamungkas persiapan Ujian Tengah Semester (UTS) Manajemen Keuangan (MNK201). Modul ini menyatukan benang merah seluruh konsep TM 1 hingga TM 7 ke dalam satu kerangka kerja pengambilan keputusan finansial: mulai dari tujuan memaksimalkan kekayaan pemegang saham, dekomposisi laporan keuangan DuPont, nilai waktu dari uang (TVM), risiko dan imbal hasil CAPM, biaya modal rata-rata tertimbang (WACC), hingga evaluasi penganggaran modal (Capital Budgeting) dan estimasi arus kas inkremental.',
  objectives: [
    'Menguasai peta komprehensif seluruh rumus dan konsep inti TM 1 sampai TM 7 dalam satu lembar cheatsheet terpadu.',
    'Memahami 7 prinsip emas logika finansial yang selalu menjadi kunci jawaban soal ujian pilihan ganda dan analisis kasus.',
    'Menghubungkan keterkaitan matematis: bagaimana WACC (TM 5) menjadi discount rate di NPV (TM 6) dan bagaimana arus kas inkremental (TM 7) menjadi input dalam tabel arus kas.',
    'Mengerjakan soal latihan ujian terpadu dengan standar waktu dan tingkat kesulitan ujian semester FEB UNAIR.'
  ],
  blocks: [
    {
      kind: 'callout',
      title: 'Pedoman Belajar Strategis Menghadapi UTS Manajemen Keuangan',
      text: 'UTS Manajemen Keuangan FEB UNAIR umumnya terdiri dari 2 bagian:\n1. **Soal Konseptual / Pilihan Ganda (30% - 40%)**: Menguji pemahaman "mengapa" (contoh: mengapa diversifikasi mengurangi risiko, mengapa bunga utang mendapat tax shield, mengapa laba ditahan tidak gratis, mengapa NPV mengalahkan IRR).\n2. **Soal Hitungan Kasus Terpadu (60% - 70%)**: Soal bercabang di mana hasil hitungan langkah (a) dipakai untuk menjawab langkah (b) dan (c). Ketelitian angka dan pemahaman rumus mutlak diperlukan!',
      variant: 'tip'
    },
    {
      kind: 'figure',
      caption: 'Gambar 8.1: Peta Sintesis Alur Manajemen Keuangan (Pra-UTS TM 1 s.d. TM 7).',
      svg: SVG_UTS_MANKEU_SUMMARY
    },
    {
      kind: 'h2',
      text: 'Master Cheatsheet Rumus Pokok Pra-UTS (TM 1 s.d. TM 7)'
    },
    {
      kind: 'table',
      headers: ['Modul (TM)', 'Topik Utama', 'Rumus Kunci Wajib Hafal', 'Makna Finansial Inti'],
      rows: [
        [
          '**TM 1**',
          'Tujuan Perusahaan & Teori Keagenan',
          '$\\text{Maximize Stockholder Wealth}$',
          'Tujuan manajer keuangan adalah memaksimalkan harga saham intrinsik jangka panjang, bukan sekadar laba akuntansi sesaat.'
        ],
        [
          '**TM 2**',
          'Rasio Keuangan & DuPont 3-Way',
          '$ROE = \\frac{\\text{Net Income}}{\\text{Sales}} \\times \\frac{\\text{Sales}}{\\text{Total Assets}} \\times \\frac{\\text{Total Assets}}{\\text{Equity}}$\n$ROE = NPM \\times TATO \\times EM$',
          'Dekomposisi 3 pemicu laba: efisiensi operasional ($NPM$), efisiensi pemanfaatan aset ($TATO$), dan daya ungkit utang ($EM$).'
        ],
        [
          '**TM 2**',
          'Arus Kas Bebas (FCF)',
          '$FCF = [EBIT(1 - T) + \\text{Depr}] - [\\Delta \\text{Gross FA} + \\Delta \\text{NOWC}]$',
          'Kas riil yang benar-benar bebas dibagikan ke seluruh investor (kreditor dan pemegang saham) setelah belanja modal operasional.'
        ],
        [
          '**TM 3**',
          'Nilai Waktu Uang (TVM)',
          '$\\text{PV} = \\frac{FV}{(1+r)^n} \\quad | \\quad \\text{Anuitas Biasa}: PMT \\left[\\frac{1 - (1+r)^{-n}}{r}\\right]$\n$\\text{Annuity Due} = \\text{Ordinary Annuity} \\times (1 + r)$',
          'Satu rupiah hari ini lebih bernilai daripada satu rupiah nanti. Anuitas di muka (*due*) selalu menghasilkan nilai lebih besar sebesar faktor $(1+r)$.'
        ],
        [
          '**TM 3**',
          'Suku Bunga Efektif (EAR)',
          '$EAR = \\left(1 + \\frac{r_{Nom}}{m}\\right)^m - 1$',
          'Suku bunga tahunan riil yang memperhitungkan efek bunga-berbunga lebih dari 1 kali setahun ($m > 1$).'
        ],
        [
          '**TM 4**',
          'Risiko Portofolio & Korelasi',
          '$\\hat{r}_p = \\sum w_i \\hat{r}_i \\quad | \\quad \\beta_p = \\sum w_i \\beta_i$\n$\\sigma_p = \\sqrt{w_A^2 \\sigma_A^2 + w_B^2 \\sigma_B^2 + 2w_A w_B \\rho_{AB} \\sigma_A \\sigma_B}$',
          'Korelasi negatif ($\\rho < 0$) melenyapkan risiko portofolio secara dramatis tanpa mengorbankan return yang diharapkan.'
        ],
        [
          '**TM 4**',
          'Model CAPM & Garis SML',
          '$r_i = r_{RF} + (r_M - r_{RF}) \\times \\beta_i = r_{RF} + RPM \\times \\beta_i$',
          'Di atas SML = *Undervalued* (Layak Beli); Di bawah SML = *Overvalued* (Layak Jual / Hindari).'
        ],
        [
          '**TM 5**',
          'Biaya Modal Rata-rata (WACC)',
          '$\\text{WACC} = w_d r_d(1-T) + w_p r_p + w_e r_s$',
          'Hanya utang ($r_d$) yang dikalikan $(1-T)$ karena bunga pinjaman mengurangi laba kena pajak (*Tax Shield*).'
        ],
        [
          '**TM 5**',
          'Biaya Ekuitas ($r_s$) & Breakpoint',
          '$\\text{CAPM}: r_{RF} + \\beta(RPM) \\quad | \\quad \\text{DCF}: \\frac{D_1}{P_0} + g$\n$BP = \\frac{\\text{Laba Ditahan}}{w_e}$',
          'Laba ditahan memiliki biaya kesempatan (*Opportunity Cost*). Di atas titik Breakpoint ($BP$), WACC melonjak naik karena harus emisi saham baru ($r_e$).'
        ],
        [
          '**TM 6**',
          'Capital Budgeting (NPV & IRR)',
          '$NPV = \\sum_{t=0}^N \\frac{CF_t}{(1+WACC)^t} \\quad | \\quad \\sum_{t=0}^N \\frac{CF_t}{(1+IRR)^t} = 0$',
          'NPV adalah "Raja Penganggaran Modal". Jika ada konflik antara NPV dan IRR pada proyek saling meniadakan, SELALU ikuti NPV tertinggi!'
        ],
        [
          '**TM 6**',
          'Crossover Rate',
          '$\\text{Hitung IRR dari selisih arus kas } (\\Delta CF = CF_X - CF_Y)$',
          'Titik temu profil kurva NPV. Jika WACC di bawah Crossover Rate, terjadi konflik rekomendasi antara NPV dan IRR.'
        ],
        [
          '**TM 7**',
          'Arus Kas Proyek 3 Babak',
          '$CF_0 = -(\\text{Aset Baru} + \\Delta NWC) + \\text{Jual Lama Net Pajak}$\n$OCF = EBIT(1-T) + \\text{Depr} = (\\text{Rev} - \\text{Cost})(1-T) + \\text{Depr}(T)$\n$TCF = \\text{Salvage Net Pajak} + \\Delta NWC \\text{ (100% Recovery)}$',
          'Beban bunga pembiayaan DILARANG masuk OCF. Modal kerja disetor di awal ($CF_0$) dan WAJIB dicairkan kembali utuh 100% di akhir ($TCF$).'
        ]
      ],
      caption: 'Tabel 8.1: Master Cheatsheet Rumus Lengkap Pra-UTS Manajemen Keuangan.'
    },
    {
      kind: 'h2',
      text: '7 Prinsip Emas Logika Finansial (Kunci Jawaban Soal Teori UTS)'
    },
    {
      kind: 'ul',
      items: [
        '**Prinsip 1: Pasar Hanya Membayar Risiko Pasar (Beta)**: Investor yang menaruh modal di satu saham tunggal menanggung risiko unik perusahaan sendirian. Pasar tidak akan memberi bonus return ekstra untuk risiko yang sebenarnya bisa dihilangkan gratis lewat diversifikasi portofolio.',
        '**Prinsip 2: Nilai Waktu dari Uang (TVM)**: Uang hari ini selalu lebih berharga daripada uang besok karena ada faktor bunga/imbal hasil produktif dan inflasi.',
        '**Prinsip 3: Bunga Menghemat Pajak, Dividen Tidak**: Bunga pinjaman adalah beban pengurang pajak (*tax deductible*), sehingga biaya utang riil adalah $r_d(1-T)$. Sebaliknya, dividen saham dibayarkan dari laba bersih setelah pajak, sehingga tidak ada penghematan pajak untuk saham.',
        '**Prinsip 4: Laba Ditahan itu Tidak Gratis**: Meskipun laba ditahan adalah uang milik perusahaan sendiri, penggunaannya memiliki *Opportunity Cost* ($r_s$), yaitu imbal hasil yang dituntut pemegang saham jika uang tersebut diinvestasikan di tempat lain dengan risiko sejenis.',
        '**Prinsip 5: NPV Adalah Raja Penganggaran Modal**: Ketika terjadi konflik antara NPV dan IRR pada proyek saling meniadakan (*Mutually Exclusive*), keputusan SELALU mengikuti NPV tertinggi karena NPV secara langsung mengukur tambahan kekayaan moneter riil bagi pemegang saham.',
        '**Prinsip 6: Asumsi Reinvestasi yang Realistis**: Alasan ilmiah mengapa NPV mengalahkan IRR adalah asumsi reinvestasinya. NPV mengasumsikan arus kas masuk diputar kembali pada biaya modal pasar (WACC) yang realistis, sedangkan IRR mengasumsikan reinvestasi pada tingkat bunga IRR proyek itu sendiri yang tidak realistis.',
        '**Prinsip 7: Jangan Pernah Mengurangkan Bunga dari OCF**: Saat merakit arus kas operasional proyek investasi, beban bunga pembiayaan tidak boleh dikurangkan, karena biaya bunga sudah diperhitungkan di dalam tingkat diskonto WACC saat mendiskontokan NPV.'
      ]
    },
    {
      kind: 'h2',
      text: 'Simulasi Soal Integrasi Pra-UTS (Master Exam Cases)'
    },
    CASE_UTS_MANKEU_INTEGRATED,
    {
      kind: 'solution-reveal',
      title: 'Soal Integrasi 1: Dekomposisi DuPont 3-Way & Evaluasi Solvabilitas',
      prompt: 'Data Keuangan PT Makmur Raya tahun 2026: Penjualan = Rp 500 Miliar, Laba Bersih = Rp 40 Miliar, Total Aset = Rp 400 Miliar, Total Utang = Rp 240 Miliar, Total Ekuitas = Rp 160 Miliar, Beban Bunga = Rp 12 Miliar, EBIT = Rp 60 Miliar. Industri sejenis memiliki rata-rata: ROE = 20,0%, NPM = 7,0%, TATO = 1,4x, Equity Multiplier = 2,0x, dan TIE = 4,0x. Hitung rasio PT Makmur Raya dan evaluasi posisinya terhadap industri!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Dekomposisi DuPont PT Makmur Raya**:\n- Net Profit Margin ($NPM$) = $\\frac{40}{500} = \\mathbf{8,0\\%}$ (Industri: $7,0\\%$ — Lebih Baik).\n- Total Asset Turnover ($TATO$) = $\\frac{500}{400} = \\mathbf{1,25\\times}$ (Industri: $1,40\\times$ — Lebih Lambat).\n- Equity Multiplier ($EM$) = $\\frac{\\text{Total Aset}}{\\text{Ekuitas}} = \\frac{400}{160} = \\mathbf{2,50\\times}$ (Industri: $2,00\\times$ — Menggunakan Lebih Banyak Utang).\n- $ROE = 8,0\\% \\times 1,25 \\times 2,50 = \\mathbf{25,0\\%}$ (Industri: $20,0\\%$).',
            '**2. Rasio Solvabilitas (TIE)**:\n$$TIE = \\frac{EBIT}{\\text{Beban Bunga}} = \\frac{Rp 60 \\text{ Miliar}}{Rp 12 \\text{ Miliar}} = \\mathbf{5,0\\times} \\quad (\\text{Industri: } 4,0\\times)$$',
            '**3. Evaluasi Kinerja untuk Ujian**:\nROE PT Makmur Raya lebih tinggi dari industri ($25\\% > 20\\%$) didorong oleh dua faktor: margin keuntungan yang lebih tebal ($8\\% > 7\\%$) dan penggunaan leverage utang yang lebih agresif ($EM = 2,5\\times > 2,0\\times$). Meskipun banyak memakai utang, perusahaan tetap aman karena kemampuan membayar bunganya sangat sehat ($TIE = 5,0\\times > 4,0\\times$ industri).'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Soal Integrasi 2: Rangkaian Lengkap WACC ke Evaluasi Penganggaran Modal',
      prompt: 'Sebuah perusahaan manufaktur memiliki struktur modal: 40% Utang ($r_d = 10\\%$, Pajak $T = 20\\%$) dan 60% Ekuitas Biasa (Saham memiliki $\\beta = 1,25$, $r_{RF} = 5\\%$, $r_M = 13\\%$). Perusahaan sedang mengevaluasi proyek investasi mesin baru yang membutuhkan modal awal $CF_0 = -\\$10.000$ dan menghasilkan arus kas bersih $CF_1 = \\$4.000$, $CF_2 = \\$4.000$, $CF_3 = \\$4.000$, $CF_4 = \\$4.000$. Hitunglah WACC perusahaan dan tentukan apakah proyek diterima berdasarkan kriteria NPV!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Langkah 1: Hitung Biaya Utang Setelah Pajak**:\n$$r_{d, after-tax} = r_d \\times (1 - T) = 10\\% \\times (1 - 0,20) = \\mathbf{8,0\\%}$$',
            '**Langkah 2: Hitung Biaya Ekuitas Menggunakan CAPM**:\n$$r_s = r_{RF} + \\beta \\times (r_M - r_{RF}) = 5\\% + 1,25 \\times (13\\% - 5\\%) = 5\\% + 1,25(8\\%) = 5\\% + 10\\% = \\mathbf{15,0\\%}$$',
            '**Langkah 3: Hitung WACC Perusahaan**:\n$$\\text{WACC} = (w_d \\times r_d(1-T)) + (w_e \\times r_s) = (0,40 \\times 8,0\\%) + (0,60 \\times 15,0\\%) = 3,2\\% + 9,0\\% = \\mathbf{12,2\\%}$$',
            '**Langkah 4: Hitung NPV Proyek Menggunakan WACC = 12,2% Sebagai Hurdle Rate**:\nArus kas adalah anuitas $\$4.000$ per tahun selama 4 tahun pada bunga $12,2\\%$ ($r = 0,122$):\n$$PVIFA_{12,2\\%, 4} = \\frac{1 - (1,122)^{-4}}{0,122} = \\frac{1 - 0,63098}{0,122} = 3,02475$$\n$$\\text{Total PV Kas Masuk} = 4.000 \\times 3,02475 = \\$12.099$$\n$$NPV = 12.099 - 10.000 = \\mathbf{+\\$2.099}$$',
            '**Kesimpulan Keputusan**: Karena $NPV > 0$ (**+$2.099**), proyek investasi mesin baru ini **LAYAK DITERIMA** karena memberikan imbal hasil di atas biaya modal WACC perusahaan.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Rangkuman Pamungkas Persiapan Hari-H Ujian'
    },
    {
      kind: 'ul',
      items: [
        '**Urutan Pengerjaan Soal**: Kerjakan soal hitungan yang rumusnya sudah Anda kuasai terlebih dahulu (seperti TVM atau CAPM), lalu selesaikan soal kasus narasi panjang.',
        '**Cek Ketelitian Satuan**: Bedakan antara satuan persentase ($\\%$), satuan pengali rasio ($\\times$), dan satuan nominal uang ($/Rp).',
        '**Ingat Logika Dasar Finansial**: Semua keputusan keuangan bermuara pada satu tujuan: memaksimalisasi nilai intrinsik kekayaan pemegang saham jangka panjang!'
      ]
    }
  ]
};
