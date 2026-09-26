import type { Reading } from '../../../types';
import { CASE_CAPITAL_BUDGETING_EVAL } from '../mankeuPracticeCases';

const SVG_CAPITAL_BUDGETING = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="npvGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk6)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">5 METODE EVALUASI PENGANGGARAN MODAL (CAPITAL BUDGETING CRITERIA)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">DECISION RULES</text>

  <!-- Left: Gold Standard King (NPV) Large Card -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="310" height="240" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <rect x="0" y="0" width="310" height="34" rx="12" fill="url(#npvGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="155" y="22" fill="#34d399" font-size="11" font-weight="900" text-anchor="middle">1. NET PRESENT VALUE (GOLD STANDARD)</text>
    
    <rect class="svg-subcard" x="14" y="44" width="282" height="32" rx="6" fill="#1e293b"/>
    <text class="text-accent-green" x="155" y="64" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">Kriteria: Terima Jika NPV &gt; 0</text>

    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Menghitung tambahan kekayaan riil pemegang saham</text>
    <text class="svg-text" x="14" y="115" fill="#cbd5e1" font-size="8">• Mempertimbangkan seluruh arus kas masuk &amp; keluar</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="8">• Menggunakan prinsip nilai waktu uang (Discount rate WACC)</text>
    <text class="svg-text" x="14" y="149" fill="#cbd5e1" font-size="8">• Mengasumsikan reinvestasi pada tingkat biaya modal (Realistis)</text>
    <text class="svg-text" x="14" y="166" fill="#cbd5e1" font-size="8">• Selalu konsisten saat memilih proyek saling eksklusif</text>
    
    <rect class="svg-badge-green" x="14" y="190" width="282" height="28" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="155" y="208" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">Raja Penganggaran Modal: Selalu Menang Saat Konflik</text>
  </g>

  <!-- Right: 4 Other Methods Grid (2x2) -->
  <g transform="translate(365, 75)">
    <!-- 2. IRR -->
    <rect class="svg-card" x="0" y="0" width="245" height="112" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="14" y="20" fill="#38bdf8" font-size="9.5" font-weight="800">2. INTERNAL RATE OF RETURN (IRR)</text>
    <rect class="svg-subcard" x="14" y="28" width="217" height="18" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="122" y="41" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Kriteria: Terima jika IRR &gt; WACC</text>
    <text class="svg-text" x="14" y="62" fill="#cbd5e1" font-size="7.5">• Tingkat diskonto yang membuat NPV = 0</text>
    <text class="svg-text" x="14" y="76" fill="#cbd5e1" font-size="7.5">• Kelemahan: Asumsi reinvestasi tidak realistis (reinvest pada IRR)</text>
    <text class="text-accent-red" x="14" y="90" fill="#f87171" font-size="7.5">• Dapat terjadi Multiple IRR bila arus kas tidak normal</text>

    <!-- 3. MIRR -->
    <rect class="svg-card" x="255" y="0" width="245" height="112" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <text class="text-accent-purple" x="14" y="20" fill="#a78bfa" font-size="9.5" font-weight="800">3. MODIFIED IRR (MIRR)</text>
    <rect class="svg-subcard" x="14" y="28" width="217" height="18" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="122" y="41" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Kriteria: Terima jika MIRR &gt; WACC</text>
    <text class="svg-text" x="14" y="62" fill="#cbd5e1" font-size="7.5">• Memperbaiki kelemahan utama model IRR standar</text>
    <text class="svg-text" x="14" y="76" fill="#cbd5e1" font-size="7.5">• Arus kas masuk direinvestasikan pada suku bunga WACC</text>
    <text class="text-accent-purple" x="14" y="90" fill="#a78bfa" font-size="7.5">• Menghilangkan problem multiple IRR</text>

    <!-- 4. Payback Period -->
    <rect class="svg-card" x="0" y="128" width="245" height="112" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <text class="text-accent-amber" x="14" y="20" fill="#fbbf24" font-size="9.5" font-weight="800">4. PAYBACK PERIOD (PP)</text>
    <rect class="svg-subcard" x="14" y="28" width="217" height="18" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="122" y="41" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Kriteria: Waktu Balik Modal &lt; Target</text>
    <text class="svg-text" x="14" y="62" fill="#cbd5e1" font-size="7.5">• Sederhana &amp; mengukur likuiditas kas awal</text>
    <text class="text-accent-red" x="14" y="76" fill="#f87171" font-size="7.5">• Mengabaikan arus kas setelah periode balik modal</text>
    <text class="text-accent-red" x="14" y="90" fill="#f87171" font-size="7.5">• Mengabaikan nilai waktu uang (pada Simple PP)</text>

    <!-- 5. Discounted Payback -->
    <rect class="svg-card" x="255" y="128" width="245" height="112" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <text class="text-accent-green" x="14" y="20" fill="#34d399" font-size="9.5" font-weight="800">5. DISCOUNTED PAYBACK (DPB)</text>
    <rect class="svg-subcard" x="14" y="28" width="217" height="18" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="122" y="41" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Kriteria: DPB &lt; Batas Waktu Maksimal</text>
    <text class="svg-text" x="14" y="62" fill="#cbd5e1" font-size="7.5">• Memperbaiki PP dengan memperhitungkan faktor bunga diskonto</text>
    <text class="svg-text" x="14" y="76" fill="#cbd5e1" font-size="7.5">• Mengukur berapa lama modal riil balik nilai tunai</text>
    <text class="text-accent-amber" x="14" y="90" fill="#fbbf24" font-size="7.5">• Tetap mengabaikan arus kas setelah titik impas diskonto</text>
  </g>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'The Basics of Capital Budgeting: NPV, IRR, MIRR, PI, & Payback Period',
  ref: 'Brigham & Houston Ch. 10 | Brigham & Ehrhardt Ch. 10 | Silabus Ujian Tengah Semester (UTS) FEB UNAIR',
  intro: 'Penganggaran Modal (Capital Budgeting) adalah proses pengambilan keputusan investasi aset riil jangka panjang (seperti membeli mesin baru, membangun pabrik, atau meluncurkan lini produk) yang akan menentukan hidup-matinya perusahaan di masa depan. Modul ini mengajarkan Anda menguasai 5 kriteria penganggaran modal: Net Present Value (NPV), Internal Rate of Return (IRR), Modified IRR (MIRR), Payback Period, dan Discounted Payback Period; memahami mengapa NPV adalah "Raja Penganggaran Modal"; menyelesaikan konflik peringkat proyek saling meniadakan (Mutually Exclusive); serta menghitung Crossover Rate.',
  objectives: [
    'Membedah kamus istilah dan simbol penganggaran modal (NPV, IRR, MIRR, PI, PP, DPP, WACC, Crossover Rate, Mutually Exclusive vs Independent).',
    'Menghitung dan membandingkan 5 metode evaluasi proyek investasi menggunakan tabel arus kas terdiskon kumulatif.',
    'Menyelesaikan studi kasus proyek saling meniadakan (Project S vs Project L) dan menentukan proyek yang memaksimalkan nilai perusahaan.',
    'Memecahkan kasus komprehensif Project X vs Project Y: menghitung NPV, IRR, MIRR, Payback, dan Discounted Payback secara eksak.',
    'Menjelaskan secara teoritis dan matematis mengapa konflik NPV dan IRR terjadi ketika WACC berada di bawah Crossover Rate (Timing Difference & Reinvestment Rate Assumption).'
  ],
  blocks: [
    {
      kind: 'callout',
      title: 'Hukum Emas Penganggaran Modal Dosen FEB UNAIR',
      text: '1. **Jika Proyek Bersifat Independen**: Terima SEMUA proyek yang memiliki $NPV > 0$ (atau $IRR > WACC$). Tidak ada konflik karena kita bisa menjalankan semuanya sekaligus jika dana cukup.\n2. **Jika Proyek Bersifat Mutually Exclusive**: Kita HANYA boleh memilih SATU proyek terbaik. Jika terjadi konflik antara NPV dan IRR (misalnya Proyek X memiliki IRR lebih tinggi tetapi Proyek Y memiliki NPV lebih tinggi), **SELALU PILIH PROYEK DENGAN NPV TERTINGGI!** NPV langsung mengukur tambahan uang riil kekayaan pemegang saham.',
      variant: 'warning'
    },
    {
      kind: 'figure',
      caption: 'Gambar 6.1: 5 Metode Evaluasi Penganggaran Modal (Capital Budgeting Criteria).',
      svg: SVG_CAPITAL_BUDGETING,
      transcript: [
        "1. NET PRESENT VALUE (GOLD STANDARD)",
        "Kriteria: Terima Jika NPV > 0",
        "Menghitung tambahan kekayaan riil pemegang saham",
        "Mempertimbangkan seluruh arus kas masuk & keluar",
        "Menggunakan prinsip nilai waktu uang (Discount rate WACC)",
        "Mengasumsikan reinvestasi pada tingkat biaya modal (Realistis)",
        "Selalu konsisten saat memilih proyek saling eksklusif",
        "Raja Penganggaran Modal: Selalu Menang Saat Konflik",
        "2. INTERNAL RATE OF RETURN (IRR)",
        "Kriteria: Terima jika IRR > WACC",
        "Tingkat diskonto yang membuat NPV = 0",
        "Kelemahan: Asumsi reinvestasi tidak realistis (reinvest pada IRR)",
        "Dapat terjadi Multiple IRR bila arus kas tidak normal",
        "3. MODIFIED IRR (MIRR)",
        "Kriteria: Terima jika MIRR > WACC",
        "Memperbaiki kelemahan utama model IRR standar",
        "Arus kas masuk direinvestasikan pada suku bunga WACC",
        "Menghilangkan problem multiple IRR",
        "4. PAYBACK PERIOD (PP)",
        "Kriteria: Waktu Balik Modal < Target",
        "Sederhana & mengukur likuiditas kas awal",
        "Mengabaikan arus kas setelah periode balik modal",
        "Mengabaikan nilai waktu uang (pada Simple PP)",
        "5. DISCOUNTED PAYBACK (DPB)",
        "Kriteria: DPB < Batas Waktu Maksimal",
        "Memperbaiki PP dengan memperhitungkan faktor bunga diskonto",
        "Mengukur berapa lama modal riil balik nilai tunai",
        "Tetap mengabaikan arus kas setelah titik impas diskonto"
      ]
    },
    {
      kind: 'h2',
      text: 'Kamus Bahasa Bayi Simbol & Istilah Penganggaran Modal (TM 6)'
    },
    {
      kind: 'p',
      text: 'Banyak mahasiswa bingung membedakan istilah-istilah penganggaran modal. Berikut kamus terjemahan bahasa manusia yang wajib Anda kuasai:'
    },
    {
      kind: 'table',
      headers: ['Istilah / Simbol', 'Nama Finansial', 'Bahasa Manusia (Maksud Aslinya)', 'Kriteria Pengambilan Keputusan'],
      rows: [
        [
          '$NPV$',
          'Net Present Value (Nilai Bersih Sekarang)',
          '**Uang Tambahan Bersih**. Total nilai uang masuk di masa depan yang ditarik ke hari ini (PV) dikurangi modal awal investasi ($CF_0$).',
          '**Terima jika $NPV > 0$**. Menandakan kekayaan pemegang saham bertambah. Nilai satuannya: mata uang (Dollar / Rupiah).'
        ],
        [
          '$IRR$',
          'Internal Rate of Return',
          '**Persentase Imbal Hasil Internal Proyek**. Tingkat diskonto yang membuat total nilai sekarang kas masuk persis impas dengan modal awal ($NPV = 0$).',
          '**Terima jika $IRR > WACC$**. Menandakan proyek menghasilkan keuntungan di atas biaya modal. Satuan: persentase ($\\%$).'
        ],
        [
          '$MIRR$',
          'Modified Internal Rate of Return',
          '**Versi Jujur & Realistis dari IRR**. Memperbaiki cacat IRR dengan mengasumsikan kas masuk direinvestasikan pada biaya modal pasar ($WACC$), bukan pada tingkat $IRR$.',
          '**Terima jika $MIRR > WACC$**. Menghilangkan masalah Multiple IRR pada arus kas tidak normal. Satuan: persentase ($\\%$).'
        ],
        [
          '$PP$',
          'Payback Period (Waktu Balik Modal)',
          '**Lama Waktu Balik Modal Tanpa Bunga**. Berapa tahun yang dibutuhkan agar modal awal tertutup kembali oleh uang kas masuk murni.',
          '**Terima jika $PP < \\text{Target Perusahaan}$**. Satuan: Tahun. Kelemahan: Mengabaikan nilai waktu uang dan arus kas setelah balik modal.'
        ],
        [
          '$DPP$',
          'Discounted Payback Period',
          '**Lama Waktu Balik Modal dengan Memperhitungkan Bunga**. Berapa tahun modal awal tertutup oleh uang kas masuk yang sudah didiskontokan ($PV$).',
          '**Terima jika $DPP < \\text{Masa Proyek}$**. Satuan: Tahun. Lebih realistis dari PP biasa karena memperhitungkan nilai waktu uang.'
        ],
        [
          '$WACC$ / $k$',
          'Weighted Average Cost of Capital',
          '**Biaya Modal / Suku Bunga Diskonto**. Ongkos rata-rata yang harus dibayar perusahaan untuk mendanai proyek (tingkat rintangan / *hurdle rate*).',
          'Digunakan sebagai penyebut dalam rumus nilai sekarang ($1 + WACC)^t$.'
        ],
        [
          '*Mutually Exclusive*',
          'Proyek Saling Meniadakan',
          '**Pilihan "Entah Ini Atau Itu"**. Jika memilih Proyek A, maka Proyek B **wajib ditolak** (contoh: tanah yang sama mau dibangun ruko atau kos-kosan).',
          'Pilih **satu proyek dengan NPV tertinggi**.'
        ],
        [
          '*Independent Projects*',
          'Proyek Independen (Bebas)',
          '**Tidak Saling Mengganggu**. Memilih Proyek X tidak memengaruhi keputusan terhadap Proyek Y (kedua proyek bisa dijalankan berbarengan).',
          'Terima **seluruh proyek yang ber-NPV positif ($NPV > 0$)**.'
        ],
        [
          '*Crossover Rate*',
          'Tingkat Bunga Perpotongan',
          '**Titik Temu Sengketa NPV**. Tingkat suku bunga di mana grafik NPV kedua proyek saling berpotongan persis sama ($NPV_A = NPV_B$).',
          'Jika WACC di bawah Crossover Rate, timbul konflik ranking antara NPV dan IRR!'
        ]
      ],
      caption: 'Tabel 6.1: Kamus istilah lengkap penganggaran modal (TM 6).'
    },
    {
      kind: 'h2',
      text: 'Pilar I: Formula & Cara Menghitung 5 Kriteria Capital Budgeting'
    },
    {
      kind: 'formula',
      text: `\\text{1. Net Present Value (NPV)}: \\quad NPV = \\sum_{t=0}^N \\frac{CF_t}{(1 + WACC)^t} = \\left( \\sum_{t=1}^N \\frac{CF_t}{(1 + WACC)^t} \\right) - |CF_0|
\\text{2. Internal Rate of Return (IRR)}: \\quad \\sum_{t=0}^N \\frac{CF_t}{(1 + IRR)^t} = 0 \\implies |CF_0| = \\sum_{t=1}^N \\frac{CF_t}{(1 + IRR)^t}
\\text{3. Modified IRR (MIRR)}: \\quad PV_{\\text{Costs}} = \\frac{TV_{\\text{Inflows}}}{(1 + MIRR)^N} \\implies MIRR = \\sqrt[N]{\\frac{\\sum_{t=1}^N CF_t (1 + WACC)^{N - t}}{|CF_0|}} - 1
\\text{4. Payback Period (PP)}: \\quad PP = A + \\frac{B}{C} \\quad (A = \\text{tahun terakhir kas kumulatif negatif}, B = \\text{sisa modal belum balik}, C = \\text{kas masuk tahun berjalan})
\\text{5. Discounted Payback (DPP)}: \\quad DPP = A + \\frac{B_{\\text{terdiskon}}}{PV(C)}`,
      note: 'WACC adalah tingkat diskonto biaya modal. N adalah umur proyek dalam tahun. CF_t adalah arus kas bersih pada tahun t.'
    },
    {
      kind: 'h2',
      text: 'Bedah Tuntas Soal Asistensi UTS No. 1: Kasus Proyek Mutually Exclusive (Project S vs Project L)'
    },
    {
      kind: 'p',
      text: 'Berikut adalah soal yang dibahas dalam sesi asistensi persiapan UTS FEB UNAIR mengenai pemilihan proyek saling meniadakan:'
    },
    {
      kind: 'example',
      title: 'Soal Asistensi 1: Evaluasi Proyek S vs Proyek L pada WACC = 8,5%',
      blocks: [
        {
          kind: 'p',
          text: 'Sebuah perusahaan sedang menganalisis dua proyek yang **mutually exclusive**, yaitu **Project S** dan **Project L**, dengan arus kas berikut:\n- Investasi Awal ($CF_0$): $-1.000$ untuk kedua proyek.\n- Arus Kas Project S: Tahun 1 = $870$; Tahun 2 = $250$; Tahun 3 = $25$; Tahun 4 = $25$.\n- Arus Kas Project L: Tahun 1 = $0$; Tahun 2 = $250$; Tahun 3 = $400$; Tahun 4 = $845$.\nWACC perusahaan adalah **8,5%**.\n**Pertanyaan**: Proyek manakah yang seharusnya dipilih, dan berapakah IRR dari proyek yang lebih baik tersebut?'
        },
        {
          kind: 'solution-reveal',
          title: 'Langkah Pembahasan & Solusi Lengkap Kasus 1',
          prompt: 'Tentukan proyek yang dipilih dan hitung IRR proyek pemenang!',
          blocks: [
            {
              kind: 'ul',
              items: [
                '**Prinsip Dasar Proyek Mutually Exclusive**: Karena proyek saling meniadakan, kita hanya boleh memilih SATU proyek. Kriteria utama pemutus pilihan adalah **NPV tertinggi**, bukan IRR!',
                '**Langkah 1: Hitung NPV Project S (WACC = 8,5% = 0,085)**:\n$$NPV_S = -1.000 + \\frac{870}{(1,085)^1} + \\frac{250}{(1,085)^2} + \\frac{25}{(1,085)^3} + \\frac{25}{(1,085)^4}$$\n$$NPV_S = -1.000 + 801,84 + 212,36 + 19,57 + 18,04 = \\mathbf{+51,82}$$',
                '**Langkah 2: Hitung NPV Project L (WACC = 8,5% = 0,085)**:\n$$NPV_L = -1.000 + \\frac{0}{(1,085)^1} + \\frac{250}{(1,085)^2} + \\frac{400}{(1,085)^3} + \\frac{845}{(1,085)^4}$$\n$$NPV_L = -1.000 + 0 + 212,36 + 313,16 + 609,73 = \\mathbf{+135,26}$$',
                '**Langkah 3: Tentukan Proyek Pemenang**:\nKarena $NPV_L (+135,26) > NPV_S (+51,82)$, maka **Project L yang dipilih** karena memberikan tambahan kekayaan lebih dari dua kali lipat dibanding Project S.',
                '**Langkah 4: Hitung IRR Project L (Tingkat Diskonto yang membuat NPV = 0)**:\n$$0 = -1.000 + \\frac{0}{(1 + IRR)^1} + \\frac{250}{(1 + IRR)^2} + \\frac{400}{(1 + IRR)^3} + \\frac{845}{(1 + IRR)^4}$$\nDengan kalkulator finansial / interpolasi matematika:\n$$\\mathbf{IRR_L = 12,70\\%}$$',
                '**Kesimpulan Akhir Soal 1**: Proyek yang dipilih adalah **Project L** (karena NPV lebih tinggi), dan IRR Project L adalah **12,70%**.'
              ]
            }
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Bedah Tuntas Soal Asistensi UTS No. 2: Soal Integrasi Komprehensif (Project X dan Project Y)'
    },
    {
      kind: 'p',
      text: 'Ini adalah soal inti tipe ujian komprehensif (*integrated exam problem*) yang menguji seluruh 5 kriteria sekaligus beserta analisis konflik NPV vs IRR:'
    },
    {
      kind: 'example',
      title: 'Soal Asistensi 2: Analisis 5 Kriteria & Konflik WACC Project X vs Project Y',
      blocks: [
        {
          kind: 'p',
          text: 'Sebuah perusahaan menganalisis dua proyek investasi dengan modal awal masing-masing **$10.000** dan WACC perusahaan adalah **12%**.\nData Arus Kas Bersih Tahunan:'
        },
        {
          kind: 'table',
          headers: ['Tahun (t)', 'Project X (Cepat Panen)', 'Project Y (Anuitas Merata)'],
          rows: [
            ['0 (Modal Awal)', '-$10.000', '-$10.000'],
            ['1', '+$6.500', '+$3.500'],
            ['2', '+$3.000', '+$3.500'],
            ['3', '+$3.000', '+$3.500'],
            ['4', '+$1.000', '+$3.500'],
            ['Total Kas Masuk Kotor', '$13.500', '$14.000']
          ],
          caption: 'Tabel Arus Kas Project X dan Project Y.'
        },
        {
          kind: 'p',
          text: '**Pertanyaan Ujian**:\na. Untuk masing-masing proyek, hitung: (1) NPV, (2) IRR, (3) MIRR, (4) Payback Period, dan (5) Discounted Payback Period!\nb. Jika Project X dan Project Y merupakan *independent projects*, proyek mana yang seharusnya diterima?\nc. Jika Project X dan Project Y merupakan *mutually exclusive projects*, proyek mana yang seharusnya dipilih?\nd. Bagaimana perubahan WACC dapat menyebabkan konflik antara NPV dan IRR? Apakah terjadi konflik jika WACC = 5%?\ne. Mengapa dapat terjadi konflik antara NPV dan IRR dalam menentukan proyek yang akan dipilih?'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Pembahasan Lengkap Pertanyaan a: Perhitungan 5 Kriteria Project X & Y',
      prompt: 'Buka solusi perhitungan angka eksak untuk kelima kriteria pada WACC = 12%!',
      blocks: [
        {
          kind: 'h3',
          text: '1. Perhitungan Net Present Value (NPV pada WACC = 12%)'
        },
        {
          kind: 'ul',
          items: [
            '**Project X**:\n$$PV_1 = \\frac{6.500}{(1,12)^1} = 5.803,57$$\n$$PV_2 = \\frac{3.000}{(1,12)^2} = 2.391,58$$\n$$PV_3 = \\frac{3.000}{(1,12)^3} = 2.135,34$$\n$$PV_4 = \\frac{1.000}{(1,12)^4} = 635,52$$\n$$\\text{Total PV Kas Masuk} = 5.803,57 + 2.391,58 + 2.135,34 + 635,52 = 10.966,01$$\n$$NPV_X = 10.966,01 - 10.000 = \\mathbf{+966,01}$$',
            '**Project Y (Anuitas 3.500 per tahun selama 4 tahun)**:\n$$PVIFA_{12\\%, 4} = \\frac{1 - (1,12)^{-4}}{0,12} = 3,037349$$\n$$\\text{Total PV Kas Masuk} = 3.500 \\times 3,037349 = 10.630,72$$\n$$NPV_Y = 10.630,72 - 10.000 = \\mathbf{+630,72}$$'
          ]
        },
        {
          kind: 'h3',
          text: '2. Perhitungan Internal Rate of Return (IRR)'
        },
        {
          kind: 'ul',
          items: [
            '**Project X**:\n$$0 = -10.000 + \\frac{6.500}{1+IRR} + \\frac{3.000}{(1+IRR)^2} + \\frac{3.000}{(1+IRR)^3} + \\frac{1.000}{(1+IRR)^4} \\implies \\mathbf{IRR_X = 18,03\\%}$$',
            '**Project Y**:\n$$10.000 = 3.500 \\times PVIFA_{IRR, 4} \\implies PVIFA_{IRR, 4} = \\frac{10.000}{3.500} = 2,85714 \\implies \\mathbf{IRR_Y = 14,96\\%}$$'
          ]
        },
        {
          kind: 'h3',
          text: '3. Perhitungan Modified IRR (MIRR pada Reinvestasi WACC = 12%)'
        },
        {
          kind: 'ul',
          items: [
            '**Project X (Tarik seluruh arus kas masuk ke Nilai Masa Depan / Terminal Value pada Tahun 4)**:\n- Tahun 1: $6.500 \\times (1,12)^3 = 6.500 \\times 1,404928 = 9.132,03$\n- Tahun 2: $3.000 \\times (1,12)^2 = 3.000 \\times 1,254400 = 3.763,20$\n- Tahun 3: $3.000 \\times (1,12)^1 = 3.000 \\times 1,120000 = 3.360,00$\n- Tahun 4: $1.000 \\times (1,12)^0 = 1.000,00$\n$$\\text{Terminal Value (TV}_X) = 9.132,03 + 3.763,20 + 3.360,00 + 1.000,00 = \\mathbf{17.255,23}$$\n$$MIRR_X = \\left( \\frac{TV_X}{|CF_0|} \\right)^{1/4} - 1 = \\left( \\frac{17.255,23}{10.000} \\right)^{0,25} - 1 = (1,725523)^{0,25} - 1 = \\mathbf{14,61\\%}$$',
            '**Project Y (Terminal Value Anuitas)**:\n$$TV_Y = 3.500 \\times FVIFA_{12\\%, 4} = 3.500 \\times \\frac{(1,12)^4 - 1}{0,12} = 3.500 \\times 4,779328 = \\mathbf{16.727,65}$$\n$$MIRR_Y = \\left( \\frac{16.727,65}{10.000} \\right)^{0,25} - 1 = (1,672765)^{0,25} - 1 = \\mathbf{13,73\\%}$$'
          ]
        },
        {
          kind: 'h3',
          text: '4. Perhitungan Payback Period (Waktu Balik Modal Biasa)'
        },
        {
          kind: 'ul',
          items: [
            '**Project X**:\n- Modal awal: $-10.000$.\n- Tahun 1 masuk $6.500 \\implies$ Sisa belum balik: $3.500$.\n- Tahun 2 masuk $3.000 \\implies$ Sisa belum balik: $500$.\n- Tahun 3 masuk $3.000$. Kita hanya butuh $500$ dari $3.000$.\n$$Payback_X = 2 + \\frac{500}{3.000} = 2 + 0,167 = \\mathbf{2,17 \\text{ Tahun (2 Tahun 2 Bulan)}}$$',
            '**Project Y**:\n- Modal awal: $-10.000$.\n- Tahun 1 masuk $3.500$; Tahun 2 masuk $3.500$ (Total $7.000$). Sisa belum balik di akhir tahun 2: $3.000$.\n- Tahun 3 masuk $3.500$. Kita hanya butuh $3.000$ dari $3.500$.\n$$Payback_Y = 2 + \\frac{3.000}{3.500} = 2 + 0,857 = \\mathbf{2,86 \\text{ Tahun (2 Tahun 10 Bulan)}}$$'
          ]
        },
        {
          kind: 'h3',
          text: '5. Perhitungan Discounted Payback Period (Waktu Balik Modal Terdiskon)'
        },
        {
          kind: 'ul',
          items: [
            '**Project X (Arus kas terdiskon $PV$)**:\n- Tahun 1: $PV = 5.803,57 \\implies$ Sisa modal riil belum balik: $4.196,43$.\n- Tahun 2: $PV = 2.391,58 \\implies$ Sisa modal riil belum balik: $1.804,85$.\n- Tahun 3: $PV = 2.135,34$. Modal tertutup di tahun ke-3!\n$$DPB_X = 2 + \\frac{1.804,85}{2.135,34} = 2 + 0,845 = \\mathbf{2,85 \\text{ Tahun (2 Tahun 10 Bulan)}}$$',
            '**Project Y (Arus kas terdiskon $PV$)**:\n- Tahun 1: $PV = 3.125,00 \\implies$ Sisa: $6.875,00$.\n- Tahun 2: $PV = 2.790,18 \\implies$ Sisa: $4.084,82$.\n- Tahun 3: $PV = 2.491,23 \\implies$ Sisa: $1.593,59$.\n- Tahun 4: $PV = 2.224,31$. Modal tertutup di tahun ke-4!\n$$DPB_Y = 3 + \\frac{1.593,59}{2.224,31} = 3 + 0,716 = \\mathbf{3,72 \\text{ Tahun (3 Tahun 9 Bulan)}}$$'
          ]
        },
        {
          kind: 'table',
          headers: ['Metode Evaluasi', 'Project X', 'Project Y', 'Pemenang (WACC = 12%)'],
          rows: [
            ['Net Present Value (NPV)', '+966,01', '+630,72', '**Project X**'],
            ['Internal Rate of Return (IRR)', '18,03%', '14,96%', '**Project X**'],
            ['Modified IRR (MIRR)', '14,61%', '13,73%', '**Project X**'],
            ['Payback Period (PP)', '2,17 Tahun', '2,86 Tahun', '**Project X (Lebih Cepat)**'],
            ['Discounted Payback (DPB)', '2,85 Tahun', '3,72 Tahun', '**Project X (Lebih Cepat)**']
          ],
          caption: 'Tabel Rekapitulasi Metrik Evaluasi Project X vs Project Y.'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Pembahasan Lengkap Pertanyaan b, c, d, dan e: Keputusan & Analisis Konflik',
      prompt: 'Buka pembahasan keputusan proyek independen, mutually exclusive, dan analisis titik temu Crossover Rate!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Jawaban Bagian b (Jika Proyek Bersifat Independent)**:\n- **Keputusan: TERIMA KEDUA PROYEK (Project X dan Project Y keduanya diterima!)**.\n- *Alasan*: Karena kedua proyek bersifat independen, keduanya tidak saling menghalangi. Kriteria penerimaan adalah $NPV > 0$ dan $IRR > WACC$. Karena Project X ($NPV = +966,01; IRR = 18,03\\% > 12\\%$) dan Project Y ($NPV = +630,72; IRR = 14,96\\% > 12\\%$) keduanya menghasilkan nilai tambah positif, maka kedua proyek wajib dijalankan bersama-sama.',
            '**Jawaban Bagian c (Jika Proyek Bersifat Mutually Exclusive pada WACC = 12%)**:\n- **Keputusan: PILIH PROJECT X!**\n- *Alasan*: Proyek saling meniadakan hanya mengizinkan kita memilih satu proyek terbaik. Project X memiliki $NPV$ lebih tinggi ($+966,01 > +630,72$) dan juga $IRR$ lebih tinggi ($18,03\\% > 14,96\\%$). Pada tingkat bunga 12%, tidak terjadi konflik antara NPV dan IRR.',
            '**Jawaban Bagian d (Analisis Konflik Jika WACC = 5%)**:\n- Mari kita hitung ulang NPV kedua proyek pada suku bunga diskonto rendah **WACC = 5%**:\n  $$NPV_X (5\\%) = -10.000 + \\frac{6.500}{1,05} + \\frac{3.000}{(1,05)^2} + \\frac{3.000}{(1,05)^3} + \\frac{1.000}{(1,05)^4} = \\mathbf{+2.325,78}$$\n  $$NPV_Y (5\\%) = -10.000 + 3.500 \\times PVIFA_{5\\%, 4} = -10.000 + (3.500 \\times 3,54595) = \\mathbf{+2.410,83}$$\n- **Evaluasi Hasil**: Lihat apa yang terjadi!\n  - Berdasarkan kriteria **NPV**: Project Y menang ($NPV_Y = 2.410,83 > NPV_X = 2.325,78$)!\n  - Berdasarkan kriteria **IRR**: Project X tetap menang ($IRR_X = 18,03\\% > IRR_Y = 14,96\\%$)!\n- **Kesimpulan Bagian d: YA, TERJADI KONFLIK ANTARA NPV DAN IRR PADA WACC = 5%!**\n  - Titik persimpangan (*Crossover Rate*) terjadi pada tingkat diskonto **6,22%**.\n  - Jika WACC < 6,22% (seperti pada 5%), Project Y memiliki NPV lebih tinggi.\n  - Jika WACC > 6,22% (seperti pada 12%), Project X memiliki NPV lebih tinggi.\n  - *Keputusan yang benar saat konflik*: **Pilih Project Y** karena NPV-nya lebih tinggi!',
            '**Jawaban Bagian e (Mengapa Dapat Terjadi Konflik Antara NPV dan IRR?)**:\nAda dua penyebab mendasar mengapa NPV dan IRR bisa berselisih paham saat memeringkat proyek mutually exclusive:\n1. **Perbedaan Pola Waktu Arus Kas (*Timing Differences*)**:\n   - Project X adalah proyek "cepat panen" yang menerima kas sangat besar di awal (Tahun 1 = 6.500).\n   - Project Y adalah proyek dengan kas masuk yang bertahan lebih lama dan merata (3.500 tiap tahun hingga tahun ke-4), dengan total kas masuk tanpa diskonto lebih besar (14.000 vs 13.500).\n   - Saat suku bunga WACC tinggi (12%), arus kas tahun ke-3 dan 4 milik Project Y tergerus habis oleh diskonto yang berat sehingga Project X menang.\n   - Namun saat suku bunga WACC rendah (5%), nilai waktu uang tidak terlalu "menghukum" kas di masa depan, sehingga total uang Project Y yang lebih besar akhirnya mengalahkan Project X!\n2. **Perbedaan Asumsi Reinvestasi (*Reinvestment Rate Assumption*)**:\n   - **Metode IRR mengasumsikan kas masuk direinvestasikan pada tingkat bunga IRR proyek itu sendiri** (18,03% untuk X dan 14,96% untuk Y). Ini sangat tidak realistis karena sulit bagi perusahaan menemukan proyek baru di pasar yang terus-menerus bisa menghasilkan untung setinggi 18%.\n   - **Metode NPV mengasumsikan kas masuk direinvestasikan pada biaya modal (WACC)**, yaitu tingkat suku bunga pasar riil yang wajar (12% atau 5%). Asumsi NPV jauh lebih realistis!\n   - Karena itulah, para profesor keuangan dan penguji UTS FEB UNAIR sepakat: **NPV adalah Raja Penganggaran Modal yang tidak pernah salah!**'
          ]
        }
      ]
    },
    CASE_CAPITAL_BUDGETING_EVAL,
    {
      kind: 'h2',
      text: 'Jebakan Klasik Ujian Tengah Semester (Exam Traps TM 6)'
    },
    {
      kind: 'ul',
      items: [
        '**Jebakan 1: Terkecoh Memilih Proyek Berdasarkan IRR Tertinggi**:\nPada proyek saling meniadakan (Mutually Exclusive), jangan pernah tergoda memilih proyek hanya karena IRR-nya 50%. Jika proyek lain menghasilkan NPV Rp 10 Miliar sedangkan proyek ber-IRR 50% hanya menghasilkan NPV Rp 10 Juta, memilih proyek berdasarkan IRR akan membuat perusahaan rugi besar! Selalu patuhi NPV.',
        '**Jebakan 2: Lupa Membedakan Independent vs Mutually Exclusive**:\n- Jika soal menyebut *Independent Projects*, jawabannya bisa "Terima Keduanya" atau "Tolak Keduanya".\n- Jika soal menyebut *Mutually Exclusive Projects*, jawabannya HANYA BISA SATU pemenang.',
        '**Jebakan 3: Arus Kas Non-Normal dan Multiple IRR**:\nJika arus kas berubah tanda dari negatif $\\to$ positif $\\to$ negatif (misalnya proyek tambang yang butuh biaya reklamasi lingkungan di tahun terakhir), rumus IRR akan menghasilkan lebih dari 1 angka IRR yang membingungkan. Solusi akademis resminya: Gunakan **MIRR**!'
      ]
    },
    {
      kind: 'h2',
      text: 'Rangkuman Inti & Checklist Kesiapan Ujian TM 6'
    },
    {
      kind: 'ul',
      items: [
        '**NPV Positif = Tambahan Nilai Saham**: Kriteria paling konsisten dan tidak pernah bias.',
        '**IRR Impas pada NPV = 0**: Berguna untuk melihat persentase pengembalian, namun berbahaya jika digunakan untuk memilih antara dua proyek bersaing.',
        '**Crossover Rate**: Titik batas kritis penentu ada/tidaknya konflik peringkat antara grafik NPV kedua proyek.',
        '**MIRR**: Standar modern pengganti IRR yang mengasumsikan reinvestasi pada suku bunga WACC.'
      ]
    }
  ]
};
