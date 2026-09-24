import type { Reading } from '../../../types';
import { CASE_CAPM_PORTFOLIO_RISK } from '../mankeuPracticeCases';

const SVG_SML_CAPM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="smlLine" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk4)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">GARIS PASAR SEKURITAS (SECURITY MARKET LINE - SML / CAPM)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">CAPM GRAPH</text>

  <!-- Left: SML Graph Axes (Width 450px, Height 240px) -->
  <g transform="translate(65, 80)">
    <!-- Y-Axis: Expected Return E(R) -->
    <line x1="50" y1="20" x2="50" y2="210" stroke="#94a3b8" stroke-width="2"/>
    <polygon points="50,15 46,25 54,25" fill="#94a3b8"/>
    <text class="svg-title font-bold" x="40" y="20" fill="#94a3b8" font-size="9.5" font-weight="800" text-anchor="end">Required Return (ri)</text>

    <!-- X-Axis: Systematic Risk (Beta β) -->
    <line x1="50" y1="210" x2="430" y2="210" stroke="#94a3b8" stroke-width="2"/>
    <polygon points="435,210 425,206 425,214" fill="#94a3b8"/>
    <text class="svg-title font-bold" x="430" y="228" fill="#94a3b8" font-size="9.5" font-weight="800" text-anchor="end">Risiko Pasar (Beta β)</text>

    <!-- Risk-Free Rate Rf Tick -->
    <line x1="45" y1="165" x2="55" y2="165" stroke="#a78bfa" stroke-width="2"/>
    <text class="text-accent-purple" x="40" y="169" fill="#a78bfa" font-size="9" font-weight="800" text-anchor="end">rRF (8%)</text>

    <!-- SML Linear Slope Line -->
    <line x1="50" y1="165" x2="400" y2="50" stroke="#38bdf8" stroke-width="3.5"/>
    <text class="text-accent-blue" x="390" y="42" fill="#38bdf8" font-size="10" font-weight="900">SML</text>

    <!-- Market Portfolio Point M (Beta = 1.0) -->
    <line x1="225" y1="110" x2="225" y2="210" stroke="#334155" stroke-dasharray="3 3"/>
    <line x1="50" y1="110" x2="225" y2="110" stroke="#334155" stroke-dasharray="3 3"/>
    <circle cx="225" cy="110" r="6" fill="#34d399"/>
    <text class="text-accent-green" x="225" y="225" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">βM = 1.0</text>
    <text class="text-accent-green" x="40" y="114" fill="#34d399" font-size="8.5" font-weight="800" text-anchor="end">rM (15%)</text>
    <text class="text-accent-green" x="235" y="105" fill="#34d399" font-size="8" font-weight="700">Portofolio Pasar (IHSG)</text>

    <!-- Undervalued Zone (Above SML) -->
    <rect x="110" y="45" width="130" height="32" rx="6" fill="#059669" fill-opacity="0.3" stroke="#34d399"/>
    <text class="text-accent-green" x="175" y="60" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">UNDERVALUED (BELI)</text>
    <text class="svg-text" x="175" y="71" fill="#cbd5e1" font-size="6.5" text-anchor="middle">Return Ekspektasi &gt; Required Return</text>

    <!-- Overvalued Zone (Below SML) -->
    <rect x="255" y="145" width="130" height="32" rx="6" fill="#dc2626" fill-opacity="0.3" stroke="#f87171"/>
    <text class="text-accent-red" x="320" y="160" fill="#f87171" font-size="8" font-weight="800" text-anchor="middle">OVERVALUED (JUAL)</text>
    <text class="svg-text" x="320" y="171" fill="#cbd5e1" font-size="6.5" text-anchor="middle">Return Ekspektasi &lt; Required Return</text>
  </g>

  <!-- Right: CAPM Formula & Components Explanation -->
  <g transform="translate(540, 75)">
    <!-- Formula Box -->
    <rect class="svg-subcard" x="0" y="0" width="325" height="48" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="162" y="20" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">PERSAMAAN SAKTI MODEL CAPM</text>
    <text class="text-accent-blue" x="162" y="38" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">ri = rRF + βi × ( rM - rRF )</text>

    <!-- Variable Cards -->
    <rect class="svg-card" x="0" y="58" width="325" height="52" rx="6" fill="#0f172a" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="12" y="76" fill="#a78bfa" font-size="8.5" font-weight="800">rRF: Risk-Free Rate (Suku Bunga Bebas Risiko)</text>
    <text class="svg-text" x="12" y="92" fill="#cbd5e1" font-size="7.5">Imbal hasil instrumen tanpa risiko gagal bayar (contoh: Surat Berharga Negara / T-bills 8%).</text>

    <rect class="svg-card" x="0" y="118" width="325" height="52" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="12" y="136" fill="#38bdf8" font-size="8.5" font-weight="800">βi: Koefisien Beta Saham i</text>
    <text class="svg-text" x="12" y="152" fill="#cbd5e1" font-size="7.5">Sensitivitas fluktuasi saham terhadap pasar. β &gt; 1 = Agresif, β &lt; 1 = Defensif.</text>

    <rect class="svg-card" x="0" y="178" width="325" height="52" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text class="text-accent-amber" x="12" y="196" fill="#fbbf24" font-size="8.5" font-weight="800">( rM - rRF ): Market Risk Premium (RPM)</text>
    <text class="svg-text" x="12" y="212" fill="#cbd5e1" font-size="7.5">Kompensasi "uang lelah" ekstra atas keberanian menanggung risiko saham di atas aset bebas risiko.</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Saham di atas garis SML memberikan return lebih tinggi dari kompensasi risikonya (Murah/Layak Beli / Undervalued).</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Risk and Rates of Return, Portfolio Theory, & Capital Asset Pricing Model (CAPM)',
  ref: 'Brigham & Houston Ch. 8 | Brigham & Ehrhardt Ch. 6 | Silabus Ujian Tengah Semester (UTS) FEB UNAIR',
  intro: 'TM 4 membahas prinsip paling fundamental dalam dunia investasi dan pasar modal: "High Risk, High Return" bukan sekadar slogan, melainkan hukum matematika keseimbangan harga. Modul ini mengajarkan Anda membedakan risiko yang bisa dihilangkan (Unsystematic Risk) vs risiko yang tidak bisa dihilangkan (Market Risk), memahami mengapa memegang portofolio jauh lebih aman daripada 1 saham sendirian, menghitung koefisien Beta, serta menguasai rumus keramat CAPM dan kurva Security Market Line (SML).',
  objectives: [
    'Membedah kamus simbol dan notasi risiko pasar (r-hat, r_RF, r_M, RPM, Beta, Sigma, CV, Koefisien Korelasi).',
    'Menghitung return investasi satu periode (Dividen Yield + Capital Gain Yield) serta statistik risiko aset tunggal (Expected Return, Standar Deviasi, dan Koefisien Variasi).',
    'Menjelaskan mengapa diversifikasi portofolio mengeliminasi risiko unik perusahaan (Diversifiable Risk) dan mengapa pasar modal HANYA membayar kompensasi atas risiko pasar (Beta).',
    'Menghitung Beta portofolio gabungan multi-aset (termasuk kasus saham ber-Beta negatif) dan return yang diharapkan portofolio.',
    'Menerapkan persamaan CAPM untuk menghitung Required Rate of Return dan mengevaluasi posisi saham terhadap kurva SML (Undervalued / Beli vs Overvalued / Jual).'
  ],
  blocks: [
    {
      kind: 'callout',
      title: 'Sorotan Dosen FEB UNAIR: Dua Konsep Kunci yang Selalu Menjebak di UTS',
      text: '1. **Investor tidak pernah dibayar atas risiko unik (*stand-alone risk*)**: Jika Anda nekat membeli 1 saham saja, Anda menanggung risiko kebangkrutan perusahaan sendirian tanpa kompensasi return tambahan karena risiko itu sebenarnya bisa Anda hilangkan gratis lewat diversifikasi.\n2. **Korelasi Negatif ($\rho < 0$) adalah penyelamat portofolio**: Menggabungkan dua saham yang bergerak berlawanan arah saling menambal kerugian sehingga risiko portofolio mengecil drastis tanpa harus mengorbankan return yang diharapkan.',
      variant: 'tip'
    },
    {
      kind: 'figure',
      caption: 'Gambar 4.1: Garis Pasar Sekuritas (Security Market Line - SML) dan Posisi Valuasi Saham.',
      svg: SVG_SML_CAPM
    },
    {
      kind: 'h2',
      text: 'Kamus Bahasa Bayi Simbol & Notasi Risiko & Return (TM 4)'
    },
    {
      kind: 'p',
      text: 'Banyak mahasiswa panik melihat banyaknya huruf Yunani dan indeks pada bab ini. Pelajari kamus terjemahan bahasa manusia berikut:'
    },
    {
      kind: 'table',
      headers: ['Simbol', 'Nama Finansial', 'Bahasa Manusia (Maksud Aslinya)', 'Arti Angka / Satuan'],
      rows: [
        [
          '$r$ atau $k$',
          'Rate of Return',
          '**Persentase Keuntungan**. Berapa persen uang Anda bertumbuh setelah diinvestasikan selama 1 periode.',
          'Contoh: $15\\%$ artinya modal Rp 1.000 bertambah untung Rp 150.'
        ],
        [
          '$\\hat{r}$ (*r-hat*)',
          'Expected Return',
          '**Ekspektasi Keuntungan**. Rata-rata tertimbang dari seluruh skenario kemungkinan masa depan (probabilitas dikali return skenario).',
          'Contoh: $\\hat{r} = 12\\%$ adalah rata-rata keuntungan yang diharapkan investor.'
        ],
        [
          '$r_i$ atau $k_i$',
          'Required Rate of Return',
          '**Return Minimal yang Dituntut**. Syarat batas keuntungan minimal yang diminta investor agar mau menaruh uang di saham $i$.',
          'Dihitung dengan rumus CAPM. Jika saham diproyeksikan untung $15\\%$ padahal syarat minimalnya $13,4\\%$, saham tersebut layak dibeli!'
        ],
        [
          '$\\sigma$ (*Sigma*)',
          'Standar Deviasi',
          '**Ukuran Lebar Goyangan / Risiko Total (*Stand-alone Risk*)**. Seberapa jauh hasil riil bisa melenceng meleset dari ekspektasi.',
          'Contoh: $\\sigma = 20\\%$ artinya harga saham sangat fluktuatif (berdebar-debar). $\\sigma = 3\\%$ artinya sangat stabil.'
        ],
        [
          '$CV$',
          'Coefficient of Variation',
          '**Risiko per 1 Unit Return** ($CV = \\sigma / \\hat{r}$). Mengukur risiko secara adil tanpa bias besarnya nilai return.',
          'Contoh: $CV = 1,5\\times$ artinya untuk tiap 1% keuntungan yang diharapkan, Anda harus menanggung 1,5 unit risiko.'
        ],
        [
          '$\\rho_{AB}$ atau $r_{AB}$',
          'Koefisien Korelasi',
          '**Kekompakan Arah Gerak Dua Saham**. Nilainya selalu berkisar antara $-1,0$ (berlawanan arah total) sampai $+1,0$ (searah kompak total).',
          'Contoh: $\\rho = -0,80$ artinya jika saham A anjlok, saham B hampir pasti melonjak.'
        ],
        [
          '$\\beta$ (*Beta*)',
          'Koefisien Beta',
          '**Sensitivitas Keliaran Saham terhadap Pasar (IHSG)**. Mengukur seberapa keras saham berguncang jika pasar saham bergoncang.',
          '$\\beta = 1,0$ (seirama pasar); $\\beta = 1,30$ (30% lebih liar/agresif); $\\beta = 0,80$ (defensif/kalem); $\\beta = 0$ (bebas risiko).'
        ],
        [
          '$r_{RF}$ atau $k_{RF}$',
          'Risk-Free Rate',
          '**Suku Bunga Bebas Risiko**. Bunga investasi teraman di negara tersebut (Obligasi Pemerintah / SBN / T-bills) di mana $\\beta = 0$.',
          'Contoh: $k_{RF} = 8\\%$. Uang dijamin pasti balik utuh beserta bunga 8%.'
        ],
        [
          '$r_M$ atau $k_M$',
          'Market Return',
          '**Keuntungan Rata-rata Seluruh Pasar**. Imbal hasil rata-rata jika investor membeli seluruh saham di bursa (portofolio pasar IHSG).',
          'Contoh: $k_M = 15\\%$.'
        ],
        [
          '$(r_M - r_{RF})$ / $RPM$',
          'Market Risk Premium',
          '**Uang Lelah / Premi Risiko Pasar**. Bonus ekstra yang diminta investor karena berani tarung di bursa saham dibanding taruh dana aman di obligasi negara.',
          'Contoh: $RPM = 15\\% - 8\\% = 7\\%$.'
        ]
      ],
      caption: 'Tabel 4.1: Kamus simbol notasi risiko dan return.'
    },
    {
      kind: 'h2',
      text: 'Pilar I: Mengukur Return dan Risiko Aset Tunggal (Stand-Alone Risk)'
    },
    {
      kind: 'p',
      text: 'Sebelum membentuk portofolio gabungan, kita harus bisa mengukur kinerja dan risiko satu saham yang berdiri sendiri (*stand-alone*):'
    },
    {
      kind: 'h3',
      text: '1. Menghitung Return Satu Periode (Dollar Return & Percentage Return)'
    },
    {
      kind: 'formula',
      text: `\\text{Dollar Return} = \\text{Dividen Kas} + (\\text{Harga Akhir} - \\text{Harga Awal}) = D_t + (P_t - P_{t-1})
\\text{Rate of Return (Total Return)} = \\frac{D_t + (P_t - P_{t-1})}{P_{t-1}} = \\underbrace{\\frac{D_t}{P_{t-1}}}_{\\text{Dividend Yield}} + \\underbrace{\\frac{P_t - P_{t-1}}{P_{t-1}}}_{\\text{Capital Gain Yield}}`,
      note: 'Total return investor saham terdiri dari dua sumber: tetesan kas dividen (Dividend Yield) dan kenaikan harga pasar saham (Capital Gain Yield).'
    },
    {
      kind: 'example',
      title: 'Contoh Sederhana: Menghitung Return Saham PT Astra',
      blocks: [
        {
          kind: 'p',
          text: 'Anda membeli saham pada awal tahun seharga **$1.000**. Selama setahun memegang saham, perusahaan membagikan dividen tunai sebesar **$50**, dan di akhir tahun harga saham naik menjadi **$1.100** (total uang yang Anda terima adalah $1.150).'
        },
        {
          kind: 'p',
          text: '$$\\text{Total Return} = \\frac{50 + (1.100 - 1.000)}{1.000} = \\frac{50 + 100}{1.000} = \\frac{150}{1.000} = \\mathbf{15\\%}$$'
        },
        {
          kind: 'p',
          text: 'Dekomposisi hasilnya:\n- **Dividend Yield**: $50 / 1.000 = 5\\%$.\n- **Capital Gain Yield**: $100 / 1.000 = 10\\%$.\n- **Total Return**: $5\\% + 10\\% = \\mathbf{15\\%}$.'
        }
      ]
    },
    {
      kind: 'h3',
      text: '2. Statistik Ketidakpastian: Expected Return, Standar Deviasi, dan CV'
    },
    {
      kind: 'formula',
      text: `\\text{Expected Return}: \\quad \\hat{r} = \\sum_{i=1}^N P_i r_i
\\text{Varians}: \\quad \\sigma^2 = \\sum_{i=1}^N P_i (r_i - \\hat{r})^2
\\text{Standar Deviasi}: \\quad \\sigma = \\sqrt{\\sigma^2} = \\sqrt{\\sum_{i=1}^N P_i (r_i - \\hat{r})^2}
\\text{Koefisien Variasi (CV)}: \\quad CV = \\frac{\\sigma}{\\hat{r}}`,
      note: 'Pi adalah probabilitas terjadinya skenario ekonomi i (total seluruh Pi harus sama dengan 1,0 atau 100%). ri adalah return pada skenario tersebut.'
    },
    {
      kind: 'callout',
      title: 'Kenapa Harus Ada Koefisien Variasi (CV)? Kenapa Standar Deviasi Saja Kurang?',
      text: 'Bayangkan ada 2 pilihan investasi:\n- **Investasi A**: Expected return 10%, standar deviasi $\\sigma = 5\\%$.\n- **Investasi B**: Expected return 100%, standar deviasi $\\sigma = 15\\%$.\nJika Anda hanya melihat standar deviasi, Investasi B terlihat 3 kali lebih berisiko (15% vs 5%). Tapi hitunglah CV-nya:\n- $CV_A = 5\\% / 10\\% = 0,50$.\n- $CV_B = 15\\% / 100\\% = 0,15$.\nInvestasi B sebenarnya **JAUH LEBIH EFISIEN** karena untuk setiap 1 unit keuntungan, risikonya hanya 0,15! CV mengukur risiko per unit return yang menghilangkan bias perbedaan skala keuntungan.',
      variant: 'tip'
    },
    {
      kind: 'h2',
      text: 'Pilar II: Dua Wajah Risiko (Unsystematic vs Systematic Risk)'
    },
    {
      kind: 'p',
      text: 'Inilah konsep yang paling sering diujikan di lembar soal UTS Manajemen Keuangan FEB UNAIR. Risiko total saham ($Stand\\text{-}Alone\\ Risk$) sebenarnya tersusun atas dua komponen yang sangat berbeda perilakunya:'
    },
    {
      kind: 'table',
      headers: ['Karakteristik', 'Risiko Tidak Sistematis (Unsystematic / Firm-Specific)', 'Risiko Sistematis (Systematic / Market Risk)'],
      rows: [
        [
          'Nama Lain di Buku',
          '**Diversifiable Risk**, Unique Risk, Idiosyncratic Risk, Residual Risk.',
          '**Market Risk**, Non-Diversifiable Risk, Systematic Risk, Beta Risk.'
        ],
        [
          'Penyebab / Sumber',
          'Peristiwa internal spesifik perusahaan: pemogokan buruh, tuntutan hukum paten, kegagalan uji produk baru, skandal korupsi direktur.',
          'Peristiwa makroekonomi yang mengguncang seluruh pasar: inflasi melonjak, Bank Indonesia menaikkan suku bunga acuan, resesi global, perang, krisis moneter.'
        ],
        [
          'Apakah Bisa Dihilangkan?',
          '**BISA HILANG 100%!** Cukup dengan membagi modal ke portofolio 30–40 saham lintas sektor yang berbeda.',
          '**TIDAK BISA DIHILANGKAN** dengan cara apapun. Bahkan portofolio berisi 500 saham pun tetap terkena imbas krisis pasar.'
        ],
        [
          'Apakah Pasar Memberi Kompensasi?',
          '**TIDAK ADA KOMPENSASI!** Pasar modal tidak akan memberi imbal hasil ekstra untuk investor yang malas mendiversifikasi portofolionya.',
          '**DIKOMPENSASI PENUH!** Investor diberi kompensasi keuntungan lebih tinggi sebanding dengan tingkat risiko pasarnya (Beta).'
        ],
        [
          'Alat Ukur Risiko',
          'Standar Deviasi Residu ($e_i$).',
          '**Koefisien Beta ($\\beta$)**.'
        ]
      ],
      caption: 'Tabel 4.2: Pembedaan esensial Unsystematic Risk vs Systematic Risk.'
    },
    {
      kind: 'callout',
      title: 'Pahami Analogi Bayi: Kenapa Investor Tunggal Tidak Mendapat Bonus Ekstra?',
      text: 'Bayangkan Anda menyeberang jurang dengan seutas tali tambang. Teman Anda menyeberang jurang dengan jembatan gantung berpagar pengaman kokoh. Keduanya sama-sama sampai di seberang. Anda minta hadiah Rp 1 miliar karena *"Saya menyeberang dengan tali tipis yang sangat berbahaya!"*. Penyelenggara akan menjawab: *"Itu kebodohanmu sendiri. Ada jembatan gratis yang aman (diversifikasi), kenapa kamu sengaja memilih bahaya tanpa perlindungan?"* Pasar saham memperlakukan investor persis seperti itu: **Risiko yang gampang dihilangkan lewat diversifikasi tidak akan pernah dibayar oleh pasar!**',
      variant: 'warning'
    },
    {
      kind: 'h2',
      text: 'Pilar III: Teori Portofolio & Keajaiban Korelasi Negatif'
    },
    {
      kind: 'p',
      text: 'Ketika beberapa saham digabungkan menjadi sebuah portofolio, expected return portofolio hanyalah rata-rata tertimbang dari masing-masing saham:'
    },
    {
      kind: 'formula',
      text: `\\hat{r}_p = \\sum_{i=1}^N w_i \\hat{r}_i = w_1 \\hat{r}_1 + w_2 \\hat{r}_2 + \\dots + w_N \\hat{r}_N`,
      note: 'wi adalah bobot proporsi modal yang diinvestasikan pada saham i (total seluruh wi wajib sama dengan 1,0 atau 100%).'
    },
    {
      kind: 'p',
      text: 'Namun, **risiko portofolio ($\\sigma_p$) BUKAN rata-rata tertimbang dari risiko saham penyusunnya!** Risiko portofolio bergantung pada derajat korelasi antar-saham:'
    },
    {
      kind: 'formula',
      text: `\\sigma_p^2 = w_A^2 \\sigma_A^2 + w_B^2 \\sigma_B^2 + 2 w_A w_B \\rho_{AB} \\sigma_A \\sigma_B`,
      note: 'rho_AB adalah koefisien korelasi antara return saham A dan saham B (-1,0 <= rho <= +1,0).'
    },
    {
      kind: 'table',
      headers: ['Nilai Korelasi (\\rho)', 'Nama Hubungan', 'Dampak terhadap Risiko Portofolio (\\sigma_p)', 'Contoh Pasangan Bisnis'],
      rows: [
        [
          '$\\rho = +1,0$',
          'Korelasi Positif Sempurna',
          '**Tidak ada manfaat diversifikasi sama sekali**. Risiko portofolio sama persis dengan rata-rata risiko kedua saham.',
          'Dua pabrik semen di kota yang sama dengan teknologi dan pasar identik.'
        ],
        [
          '$\\rho = 0,0$',
          'Tidak Berkorelasi (Independen)',
          'Risiko portofolio berkurang secara signifikan, tetapi tidak sampai nol.',
          'Pabrik ban mobil dan perusahaan perangkat lunak cloud.'
        ],
        [
          '$\\rho = -1,0$',
          'Korelasi Negatif Sempurna',
          '**Seluruh risiko hilang total (\\sigma_p = 0)**! Portofolio menjadi instrumen bebas risiko yang menjamin return pasti.',
          'Penjual payung hujan vs penjual kacamata hitam di pantai.'
        ]
      ],
      caption: 'Tabel 4.3: Pengaruh koefisien korelasi terhadap reduksi risiko portofolio.'
    },
    {
      kind: 'h2',
      text: 'Pilar IV: Koefisien Beta (\\beta) — Mengukur Risiko Pasar'
    },
    {
      kind: 'p',
      text: 'Karena risiko spesifik perusahaan dapat dieliminasi melalui portofolio, satu-satunya ukuran risiko yang relevan bagi investor adalah **Koefisien Beta ($\\beta$)**, yaitu ukuran volatilitas saham relatif terhadap pergerakan pasar saham secara agregat (IHSG):'
    },
    {
      kind: 'table',
      headers: ['Besar Nilai Beta (\\beta)', 'Kategori Saham', 'Arti Bahasa Manusianya', 'Contoh Sektor Industri'],
      rows: [
        [
          '$\\beta = 1,0$',
          'Saham Rata-rata Pasar',
          'Sensitivitas saham seirama pasar. Jika IHSG naik 10%, saham naik 10%. Jika IHSG turun 10%, saham turun 10%.',
          'ETF Indeks IHSG, reksa dana indeks LQ45.'
        ],
        [
          '$\\beta = 1,30$',
          'Saham Agresif (High Beta)',
          'Saham **30% lebih liar dibanding pasar**. Jika IHSG naik 10%, saham melonjak 13%! Namun jika IHSG anjlok 10%, saham ambruk 13%.',
          'Sektor teknologi, properti mewah, komoditas tambang nikel/batu bara.'
        ],
        [
          '$\\beta = 0,80$',
          'Saham Defensif (Low Beta)',
          'Saham **20% lebih tenang/kalem dibanding pasar**. Fluktuasi harga lebih stabil dan tahan banting saat krisis.',
          'Sektor konsumsi primer (Indofood, Unilever), farmasi (Kalbe), utilitas listrik/air.'
        ],
        [
          '$\\beta = 0,0$',
          'Aset Bebas Risiko',
          'Tidak terpengaruh oleh naik turunnya bursa saham sama sekali.',
          'Surat Berharga Negara (SBN), T-bills, deposito perbankan.'
        ],
        [
          '$\\beta = -0,87$',
          'Saham Kontra-Siklikal (Negative Beta)',
          'Bergerak **berlawanan arah dengan pasar**. Saat IHSG rontok krisis, harga saham ini justru melonjak naik!',
          'Tambang emas batangan (safe haven), perusahaan jasa penagihan utang macet.'
        ]
      ],
      caption: 'Tabel 4.4: Arti dan interpretasi angka koefisien Beta.'
    },
    {
      kind: 'h3',
      text: 'Menghitung Beta Portofolio (\\beta_p)'
    },
    {
      kind: 'p',
      text: 'Beta portofolio dihitung dengan sangat mudah: kalikan bobot persentase modal masing-masing saham dengan Betanya, lalu jumlahkan:'
    },
    {
      kind: 'formula',
      text: `\\beta_p = \\sum_{i=1}^N w_i \\beta_i = (w_1 \\times \\beta_1) + (w_2 \\times \\beta_2) + \\dots + (w_N \\times \\beta_N)`,
      note: 'Jika sebuah saham memiliki Beta negatif, tanda minus (-) harus disertakan dalam perhitungan matematis.'
    },
    {
      kind: 'example',
      title: 'Contoh Soal Asistensi UTS: Menghitung Beta Portofolio dengan Beta Negatif',
      blocks: [
        {
          kind: 'p',
          text: 'Seorang investor mengalokasikan 50% dananya pada saham HT ($\\beta = 1,30$) dan 50% dananya pada saham Coll ($\\beta = -0,87$). Berapakah Beta portofolio tersebut?'
        },
        {
          kind: 'p',
          text: '$$\\text{Diketahui: } w_{HT} = 50\\% = 0,50; \\quad \\beta_{HT} = 1,30; \\quad w_{Coll} = 50\\% = 0,50; \\quad \\beta_{Coll} = -0,87$$'
        },
        {
          kind: 'p',
          text: '$$\\beta_p = (0,50 \\times 1,30) + (0,50 \\times -0,87) = 0,65 + (-0,435) = \\mathbf{0,215}$$'
        },
        {
          kind: 'p',
          text: '**Penjelasan Hasil**: Saham HT aslinya sangat agresif dan berisiko tinggi ($\\beta = 1,30$). Namun berkat dimasukkannya saham Coll yang memiliki korelasi negatif ($\\beta = -0,87$), risiko portofolionya turun drastis menjadi hanya **0,215**. Portofolio gabungan ini menjadi sangat aman dan tahan guncangan!'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar V: Model Penetapan Harga Aset Modal (CAPM) & Garis SML'
    },
    {
      kind: 'p',
      text: 'Capital Asset Pricing Model (CAPM) menghubungkan secara matematis antara risiko pasar suatu saham (Beta) dengan tingkat keuntungan minimal yang dituntut investor (*Required Return*):'
    },
    {
      kind: 'formula',
      text: `r_i = r_{RF} + \\underbrace{(r_M - r_{RF})}_{\\text{Market Risk Premium (RPM)}} \\times \\beta_i
r_i = r_{RF} + RPM \\times \\beta_i`,
      note: 'r_RF adalah imbal hasil bebas risiko. r_M adalah return pasar. (r_M - r_RF) adalah premi risiko pasar. beta_i adalah koefisien beta saham.'
    },
    {
      kind: 'example',
      title: 'Bedah Rumus CAPM Langkah demi Langkah (Soal Asistensi UTS No. 5)',
      blocks: [
        {
          kind: 'p',
          text: 'Diketahui suku bunga bebas risiko $k_{RF} = 8\\%$, return pasar saham $k_M = 15\\%$, dan saham USR memiliki $\\beta = 0,89$. Berapakah Required Return ($k_i$) untuk saham USR?'
        },
        {
          kind: 'ul',
          items: [
            '**Langkah 1: Hitung Premi Risiko Pasar (RPM)**:\n$RPM = k_M - k_{RF} = 15\\% - 8\\% = \\mathbf{7\\%}$. Ini adalah bonus ekstra yang dituntut investor pasar secara keseluruhan.',
            '**Langkah 2: Kalikan dengan Faktor Risiko Saham USR (Beta)**:\n$\\text{Premi Risiko Saham USR} = 7\\% \\times 0,89 = \\mathbf{6,23\\%}$. Saham USR hanya menuntut bonus 6,23% karena risikonya lebih rendah dibanding pasar (0,89 < 1,0).',
            '**Langkah 3: Tambahkan dengan Suku Bunga Bebas Risiko**:\n$k_{USR} = 8\\% + 6,23\\% = \\mathbf{14,23\\%}$.'
          ]
        },
        {
          kind: 'p',
          text: '**Arti Finansial Angka 14,23%**: Investor mensyaratkan keuntungan minimal **14,23% per tahun** agar bersedia membeli saham USR. Jika analis memproyeksikan saham USR hanya akan menghasilkan keuntungan 13,8%, maka saham tersebut tidak layak dibeli karena return-nya tidak sebanding dengan risikonya!'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar VI: Keputusan Investasi Berdasarkan Security Market Line (SML)'
    },
    {
      kind: 'table',
      headers: ['Posisi Terhadap Garis SML', 'Kondisi Matematis', 'Status Harga Saham', 'Keputusan / Rekomendasi Investasi'],
      rows: [
        [
          '**Di ATAS Garis SML**',
          'Return Ekspektasi Analis > Required Return CAPM ($\\hat{r}_i > r_i$)',
          '**UNDERVALUED (Terlalu Murah)**. Saham memberikan return nyata yang lebih tinggi daripada kompensasi risiko yang dituntut pasar.',
          '**BELI (BUY)**. Harga pasar saat ini terlalu murah dan akan terkerek naik menuju ekuilibrium.'
        ],
        [
          '**TEPAT Pada Garis SML**',
          'Return Ekspektasi Analis = Required Return CAPM ($\\hat{r}_i = r_i$)',
          '**FAIRLY VALUED (Harga Wajar)**. Saham berada dalam titik keseimbangan pasar (ekuilibrium).',
          '**TAHAN (HOLD)**. Imbal hasil sepadan persis dengan risiko yang ditanggung.'
        ],
        [
          '**Di BAWAH Garis SML**',
          'Return Ekspektasi Analis < Required Return CAPM ($\\hat{r}_i < r_i$)',
          '**OVERVALUED (Kemahalan)**. Saham memberikan keuntungan yang terlalu kecil dibanding risiko keliaran yang harus ditanggung.',
          '**JUAL / HINDARI (SELL / AVOID)**. Harga pasar kemahalan dan akan anjlok menuju ekuilibrium.'
        ]
      ],
      caption: 'Tabel 4.5: Matriks keputusan investasi berdasarkan posisi terhadap kurva SML.'
    },
    {
      kind: 'h2',
      text: 'Jebakan Klasik Ujian Tengah Semester (Exam Traps TM 4)'
    },
    {
      kind: 'ul',
      items: [
        '**Jebakan 1: Hati-hati dengan Kalimat Soal "Market Risk Premium" vs "Market Return"**:\n- Jika soal menyebut: *"Return pasar adalah 12% dan Risk-free rate 5%"*, maka $RPM = 12\\% - 5\\% = 7\\%$.\n- Namun jika soal menyebut: *"Premi risiko pasar (Market Risk Premium) adalah 7%"*, **JANGAN DIKURANGI RISK-FREE RATE LAGI!** Angka 7% itu sudah merupakan selisih $(r_M - r_{RF})$. Kesalahan ini sering membuat mahasiswa kehilangan nilai penuh!',
        '**Jebakan 2: Tertukar Menghitung Standar Deviasi vs Beta**:\nStandar deviasi ($\sigma$) mengukur risiko total (stand-alone risk), cocok hanya jika investor menaruh 100% uangnya di satu saham itu saja. Jika investor memiliki portofolio saham, ukuran risiko yang benar **HANYALAH BETA ($\beta$)**.',
        '**Jebakan 3: Efek Pergeseran Garis SML**:\n- Jika **ekspektasi inflasi naik**, suku bunga bebas risiko ($r_{RF}$) naik $\to$ kurva SML **bergeser sejajar ke atas** (garis tetap paralel).\n- Jika **keengganan risiko investor (*risk aversion*) naik**, premi risiko pasar $(r_M - r_{RF})$ membesar $\to$ kurva SML **berotasi menjadi semakin curam (slope naik)**.'
      ]
    },
    {
      kind: 'h2',
      text: 'Latihan Ujian Mandiri Lengkap (Worked Exam Cases)'
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 1: Evaluasi Keputusan Portofolio Dua Saham (Korelasi & Risiko)',
      prompt: 'Seorang analis sedang mempertimbangkan dua saham untuk portofolionya: Saham A memiliki Expected Return 14% dengan standar deviasi 18%. Saham B memiliki Expected Return 10% dengan standar deviasi 12%. Koefisien korelasi antara Saham A dan B adalah -0,40. Jika analis menginvestasikan 60% dananya pada Saham A dan 40% pada Saham B, hitung: (1) Expected Return Portofolio, dan (2) Standar Deviasi Portofolio! Jelaskan mengapa standar deviasi portofolio lebih rendah dari kedua saham penyusunnya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Perhitungan Expected Return Portofolio**:\n$\\hat{r}_p = (w_A \\times \\hat{r}_A) + (w_B \\times \\hat{r}_B) = (0,60 \\times 14\\%) + (0,40 \\times 10\\%) = 8,4\\% + 4,0\\% = \\mathbf{12,4\\%}$.',
            '**2. Perhitungan Varians & Standar Deviasi Portofolio**:\n$\\sigma_p^2 = (0,60)^2(0,18)^2 + (0,40)^2(0,12)^2 + 2(0,60)(0,40)(-0,40)(0,18)(0,12)$\n$\\sigma_p^2 = 0,36(0,0324) + 0,16(0,0144) + (-0,192)(0,0216)$\n$\\sigma_p^2 = 0,011664 + 0,002304 - 0,0041472 = 0,0098208$\n$\\sigma_p = \\sqrt{0,0098208} = 0,0991 = \\mathbf{9,91\\%}$.',
            '**3. Analisis Keajaiban Diversifikasi**:\nStandar deviasi portofolio ($9,91\\%$) **jauh lebih rendah daripada risiko Saham B (12%) apalagi Saham A (18%)!** Hal ini terjadi karena korelasi kedua saham negatif ($\\rho = -0,40$), sehingga fluktuasi penurunan satu saham diredam oleh kenaikan saham lainnya.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 2: Penentuan Sinyal Beli/Jual Berdasarkan CAPM & SML',
      prompt: 'Diketahui $r_{RF} = 6,0\\%$ dan $r_M = 13,0\\%$. Tiga saham memiliki data sebagai berikut:\n- Saham Alfa: Beta = 1,40, Proyeksi Analis = 16,5%.\n- Saham Beta: Beta = 0,80, Proyeksi Analis = 11,2%.\n- Saham Gama: Beta = 1,10, Proyeksi Analis = 13,5%.\nHitung Required Return CAPM untuk masing-masing saham dan tentukan rekomendasi investasi (Beli / Jual / Tahan)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Premi Risiko Pasar (RPM)**: $r_M - r_{RF} = 13,0\\% - 6,0\\% = 7,0\\%$.',
            '**Perhitungan CAPM**:\n- **Saham Alfa**: $r_{Alfa} = 6,0\\% + (1,40 \\times 7,0\\%) = 6,0\\% + 9,8\\% = \\mathbf{15,8\\%}$.\n  *Evaluasi*: Proyeksi Analis (16,5%) > Syarat CAPM (15,8%) $\\to$ Terletak di **ATAS SML** $\\to$ **UNDERVALUED (REKOMENDASI: BELI / BUY)**.\n- **Saham Beta**: $r_{Beta} = 6,0\\% + (0,80 \\times 7,0\\%) = 6,0\\% + 5,6\\% = \\mathbf{11,6\\%}$.\n  *Evaluasi*: Proyeksi Analis (11,2%) < Syarat CAPM (11,6%) $\\to$ Terletak di **BAWAH SML** $\\to$ **OVERVALUED (REKOMENDASI: JUAL / SELL)**.\n- **Saham Gama**: $r_{Gama} = 6,0\\% + (1,10 \\times 7,0\\%) = 6,0\\% + 7,7\\% = \\mathbf{13,7\\%}$.\n  *Evaluasi*: Proyeksi Analis (13,5%) < Syarat CAPM (13,7%) $\\to$ Terletak sedikit di **BAWAH SML** $\\to$ **OVERVALUED (REKOMENDASI: HINDARI / JUAL)**.'
          ]
        }
      ]
    },
    CASE_CAPM_PORTFOLIO_RISK,
    {
      kind: 'h2',
      text: 'Rangkuman Inti & Checklist Kesiapan Ujian TM 4'
    },
    {
      kind: 'ul',
      items: [
        '**Hukum Diversifikasi**: Risiko yang bisa dihilangkan lewat diversifikasi adalah *Unsystematic Risk*. Risiko yang tersisa dan tidak bisa dihilangkan adalah *Market Risk*.',
        '**Pasar Hanya Membayar Beta**: Pasar modal hanya memberikan kompensasi atas risiko yang tidak dapat dihindari, yaitu risiko pasar yang diwakili oleh koefisien Beta ($\\beta$).',
        '**Korelasi Negatif**: Menggabungkan aset dengan korelasi negatif ($\\rho < 0$) secara dramatis mereduksi risiko portofolio tanpa menurunkan expected return.',
        '**Sinyal SML**: Saham di atas garis SML adalah *Undervalued* (Beli); saham di bawah garis SML adalah *Overvalued* (Jual).'
      ]
    }
  ]
};
