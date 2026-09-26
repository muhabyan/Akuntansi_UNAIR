import type { Reading } from '../../../types';
import { CASE_TVM_LOAN_AMORTIZATION } from '../mankeuPracticeCases';

const SVG_TVM_TIMELINE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="fvGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="pvGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk3)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">GARIS WAKTU NILAI WAKTU UANG: COMPOUNDING (FV) VS DISCOUNTING (PV)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TVM DYNAMICS</text>

  <!-- Central Timeline Track -->
  <g transform="translate(45, 120)">
    <line x1="20" y1="50" x2="790" y2="50" stroke="#334155" stroke-width="4"/>
    
    <!-- Year 0 (Present Value) -->
    <circle cx="50" cy="50" r="16" fill="#0f172a" stroke="#a78bfa" stroke-width="3"/>
    <text class="text-accent-purple" x="50" y="54" fill="#a78bfa" font-size="10" font-weight="900" text-anchor="middle">t=0</text>
    <text class="text-accent-purple" x="50" y="85" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">PV</text>
    <text class="svg-text" x="50" y="100" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Saat Ini</text>

    <!-- Year 1 -->
    <circle cx="230" cy="50" r="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text class="svg-text" x="230" y="54" fill="#cbd5e1" font-size="9" font-weight="700" text-anchor="middle">t=1</text>
    <text class="svg-muted" x="230" y="85" fill="#94a3b8" font-size="8" text-anchor="middle">Tahun 1</text>

    <!-- Year 2 -->
    <circle cx="410" cy="50" r="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text class="svg-text" x="410" y="54" fill="#cbd5e1" font-size="9" font-weight="700" text-anchor="middle">t=2</text>
    <text class="svg-muted" x="410" y="85" fill="#94a3b8" font-size="8" text-anchor="middle">Tahun 2</text>

    <!-- Year 3 -->
    <circle cx="590" cy="50" r="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text class="svg-text" x="590" y="54" fill="#cbd5e1" font-size="9" font-weight="700" text-anchor="middle">t=3</text>
    <text class="svg-muted" x="590" y="85" fill="#94a3b8" font-size="8" text-anchor="middle">Tahun 3</text>

    <!-- Year N (Future Value) -->
    <circle cx="760" cy="50" r="16" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
    <text class="text-accent-blue" x="760" y="54" fill="#38bdf8" font-size="10" font-weight="900" text-anchor="middle">t=N</text>
    <text class="text-accent-blue" x="760" y="85" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">FV</text>
    <text class="svg-text" x="760" y="100" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Masa Depan</text>

    <!-- Compounding Arc (Top: PV -> FV) -->
    <path d="M 65 35 Q 405 -40 745 35" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 4"/>
    <polygon points="745,35 735,28 738,40" fill="#38bdf8"/>
    <rect class="svg-subcard" x="300" y="-30" width="210" height="24" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="405" y="-14" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">COMPOUNDING: FV = PV × (1 + r)ⁿ</text>

    <!-- Discounting Arc (Bottom: FV -> PV) -->
    <path d="M 745 65 Q 405 140 65 65" fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-dasharray="6 4"/>
    <polygon points="65,65 75,72 72,60" fill="#a78bfa"/>
    <rect class="svg-subcard" x="300" y="115" width="210" height="24" rx="6" fill="#1e293b" stroke="#a78bfa"/>
    <text class="text-accent-purple" x="405" y="131" fill="#a78bfa" font-size="9" font-weight="800" text-anchor="middle">DISCOUNTING: PV = FV ÷ (1 + r)ⁿ</text>
  </g>

  <!-- Bottom Explanatory Concept Cards -->
  <g transform="translate(45, 275)">
    <rect class="svg-subcard" x="0" y="0" width="395" height="52" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="14" y="18" fill="#38bdf8" font-size="9" font-weight="800">BUNGA MAJEMUK (COMPOUND INTEREST)</text>
    <text class="svg-text" x="14" y="34" fill="#cbd5e1" font-size="7.5">Bunga menghasilkan bunga kembali seiring waktu (Eksponensial). Semakin tinggi suku bunga</text>
    <text class="svg-text" x="14" y="44" fill="#cbd5e1" font-size="7.5">dan periode (n), akumulasi nilai akhir kas melonjak berlipat ganda.</text>

    <rect class="svg-subcard" x="415" y="0" width="395" height="52" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="14" y="18" fill="#a78bfa" font-size="9" font-weight="800">NILAI SEKARANG (PRESENT VALUE &amp; INFLASI)</text>
    <text class="svg-text" x="14" y="34" fill="#cbd5e1" font-size="7.5">Rp 1 juta hari ini lebih berharga daripada Rp 1 juta 5 tahun lagi karena adanya peluang investasi</text>
    <text class="svg-text" x="14" y="44" fill="#cbd5e1" font-size="7.5">(Opportunity Cost of Capital) serta erosi daya beli akibat inflasi.</text>
  </g>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Time Value of Money (TVM), Cash Flow Mechanics, & Loan Amortization',
  ref: 'Brigham & Ehrhardt Ch. 5 | Brigham & Houston Ch. 5 | Standar Matematika Keuangan FEB UNAIR',
  intro: 'TM 3 adalah fondasi inti dari seluruh keputusan keuangan korporasi. Seluruh teknik penilaian obligasi, valuasi saham, analisis kelayakan investasi modal (NPV/IRR), hingga restrukturisasi utang perbankan berakar pada konsep Time Value of Money (TVM). Modul ini disusun dengan pendekatan ramah pemula: membedah setiap simbol, menjabarkan arti angka per angka, mengupas skedul amortisasi pinjaman, serta menyajikan latihan bertahap sesuai standar ujian FEB UNAIR.',
  objectives: [
    'Memahami intuisi fundamental TVM dan menerjemahkan simbol-simbol matematis (PV, FV, PMT, I/Y, N, EAR, APR) ke bahasa praktis.',
    'Menghitung Present Value (PV) dan Future Value (FV) arus kas tunggal, anuitas biasa, anuitas jatuh tempo, perpetuitas, dan arus kas tidak merata.',
    'Membuktikan dan mengaplikasikan hubungan emas antara Ordinary Annuity dan Annuity Due dalam perencanaan kas.',
    'Menguasai konversi suku bunga majemuk non-tahunan (semesteran, kuartalan, bulanan, harian, dan kontinu) menjadi Effective Annual Rate (EAR / EFF%).',
    'Menyusun skedul amortisasi pinjaman lengkap dan menghitung sisa saldo pokok utang tanpa harus menyusun tabel dari awal.'
  ],
  blocks: [
    {
      kind: 'callout',
      title: 'Pedoman Belajar Pemula: Kunci Menguasai Rumus Keuangan',
      text: 'Jangan menghafal rumus secara buta! Keuangan korporasi hanya memiliki 2 arah pergerakan uang: **Maju ke masa depan (Compounding / Melipatgandakan bunga)** dan **Mundur ke masa kini (Discounting / Memotong nilai waktu)**. Jika Anda paham arah pergerakan uang dan arti setiap simbolnya, seluruh soal ujian TVM dapat diselesaikan dengan tenang.',
      variant: 'tip'
    },
    {
      kind: 'figure',
      caption: 'Gambar 3.1: Garis Waktu Nilai Waktu Uang (Compounding vs Discounting).',
      svg: SVG_TVM_TIMELINE,
      transcript: [
        "t=0: PV (Saat Ini)",
        "t=1: Tahun 1",
        "t=2: Tahun 2",
        "t=3: Tahun 3",
        "t=N: FV (Masa Depan)",
        "COMPOUNDING: FV = PV × (1 + r)ⁿ",
        "DISCOUNTING: PV = FV ÷ (1 + r)ⁿ",
        "BUNGA MAJEMUK (COMPOUND INTEREST)",
        "Bunga menghasilkan bunga kembali seiring waktu (Eksponensial). Semakin tinggi suku bunga dan periode (n), akumulasi nilai akhir kas melonjak berlipat ganda.",
        "NILAI SEKARANG (PRESENT VALUE & INFLASI)",
        "Rp 1 juta hari ini lebih berharga daripada Rp 1 juta 5 tahun lagi karena adanya peluang investasi (Opportunity Cost of Capital) serta erosi daya beli akibat inflasi."
      ]
    },
    {
      kind: 'h2',
      text: 'Kamus Simbol & Istilah "Bahasa Manusia" TVM'
    },
    {
      kind: 'p',
      text: 'Sebelum menyentuh rumus, kenali simbol-simbol yang sering muncul di buku teks Brigham & Ehrhardt serta tombol kalkulator finansial:'
    },
    {
      kind: 'table',
      headers: ['Simbol', 'Nama Finansial', 'Bahasa Manusia (Maksud Aslinya)', 'Contoh Konkret di Soal'],
      rows: [
        [
          '$PV$',
          'Present Value',
          '**Nilai Sekarang / Modal Awal**. Jumlah uang tunai hari ini di tangan ($t=0$).',
          'Uang tabungan awal Rp 10.000.000 yang Anda setorkan ke bank hari ini.'
        ],
        [
          '$FV_N$',
          'Future Value',
          '**Nilai Masa Depan**. Jumlah uang di masa depan setelah ditambah bunga majemuk selama $N$ periode.',
          'Berapa saldo rekening tabungan Anda setelah disimpan 5 tahun kemudian.'
        ],
        [
          '$PMT$',
          'Payment',
          '**Angsuran / Setoran Tetap**. Arus kas yang besarnya **sama persis** dan keluar/masuk secara rutin setiap periode.',
          'Cicilan KPR Rp 3.500.000 tiap bulan, atau premi asuransi Rp 1.000.000 tiap awal tahun.'
        ],
        [
          '$I$ atau $I/Y$ atau $r$',
          'Interest Rate / Discount Rate',
          '**Tingkat Suku Bunga**. Imbalan atas waktu dan risiko yang diberikan bank atau dituntut oleh investor per periode.',
          'Bunga deposito 6% per tahun ($0,06$) atau bunga kredit bank 12% per tahun ($0,12$).'
        ],
        [
          '$N$',
          'Number of Periods',
          '**Jumlah Periode Waktu**. Berapa kali proses pemajemukan bunga terjadi (bisa tahun, semester, kuartal, atau bulan).',
          'Pinjaman 3 tahun dengan pembayaran bulanan memiliki $N = 3 \\times 12 = 36$ periode.'
        ],
        [
          '$m$',
          'Compounding Frequency',
          '**Frekuensi Pemajemukan per Tahun**. Berapa kali dalam setahun bank menghitung dan menambahkan bunga ke rekening.',
          'Tahunan ($m=1$), Semesteran ($m=2$), Kuartalan ($m=4$), Bulanan ($m=12$), Harian ($m=365$).'
        ],
        [
          '$r_{Nom}$ / $APR$',
          'Annual Percentage Rate',
          '**Suku Bunga Nominal**. Tingkat bunga yang tertulis di brosur atau perjanjian bank (belum memperhitungkan bunga-berbunga).',
          'Bank mengiklankan suku bunga pinjaman 12% p.a. cicilan bulanan.'
        ],
        [
          '$EAR$ / $EFF\\%$',
          'Effective Annual Rate',
          '**Suku Bunga Efektif Tahunan**. Tingkat bunga sesungguhnya yang riil dibayar/diterima dalam 1 tahun penuh.',
          'Bunga nominal 12% bulanan memiliki bunga riil $EAR = 12,68\\%$ per tahun.'
        ]
      ],
      caption: 'Tabel 3.1: Kamus simbol matematis dan tombol kalkulator TVM.'
    },
    {
      kind: 'h2',
      text: 'Pilar I: Mengapa Uang Memiliki Nilai Waktu?'
    },
    {
      kind: 'p',
      text: 'Pertanyaan mendasar: *Mengapa Rp 100.000.000 hari ini jauh lebih berharga daripada janji Rp 100.000.000 lima tahun lagi?* Ada 3 alasan rasional yang mendasari:'
    },
    {
      kind: 'ul',
      items: [
        '**1. Opportunity Cost of Capital (Kapasitas Menghasilkan Bunga)**: Jika Anda memegang Rp 100 juta hari ini, Anda bisa menyimpannya di deposito bank berbunga 6% per tahun. Lima tahun lagi, uang itu tumbuh menjadi Rp 133,82 juta. Menerima Rp 100 juta 5 tahun lagi berarti Anda kehilangan peluang mendapatkan keuntungan Rp 33,82 juta.',
        '**2. Erosi Daya Beli Akibat Inflasi**: Uang Rp 100 juta pada tahun 2000 bisa membeli sebidang tanah luas. Uang Rp 100 juta hari ini mungkin hanya cukup untuk uang muka mobil. Di masa depan, kenaikan harga barang (inflasi) menggerus daya beli nominal uang yang sama.',
        '**3. Risiko Ketidakpastian (Default Risk)**: Janji pembayaran 5 tahun lagi memiliki risiko: pihak yang berjanji bisa bangkrut, meninggal dunia, atau mengalami krisis moneter. Uang di tangan hari ini adalah kepastian, janji masa depan adalah ketidakpastian.'
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar II: Arus Kas Tunggal (Single Lump-Sum Cash Flows)'
    },
    {
      kind: 'p',
      text: 'Arus kas tunggal adalah transaksi satu kali: menyetor modal sekali hari ini, lalu melihat nilainya di masa depan (*Compounding*), atau membutuhkan dana di masa depan, lalu menghitung berapa yang harus disisihkan hari ini (*Discounting*).'
    },
    {
      kind: 'formula',
      text: `\\text{Future Value (Nilai Masa Depan)}: \\quad FV_N = PV \\times (1 + I)^N
\\text{Present Value (Nilai Sekarang)}: \\quad PV = \\frac{FV_N}{(1 + I)^N} = FV_N \\times (1 + I)^{-N}
\\text{Rule of 72 (Waktu Melipatgandakan Uang)}: \\quad N \\approx \\frac{72}{I\\%}`,
      note: 'I dinyatakan dalam desimal pada rumus (contoh 8% = 0,08), namun pada Rule of 72 dimasukkan dalam angka bulat (72 / 8 = 9 tahun).'
    },
    {
      kind: 'example',
      title: 'Contoh Nyata 1: Membedah Angka Pemajemukan Bunga Majemuk Langkah demi Langkah',
      blocks: [
        {
          kind: 'p',
          text: 'Anda menaruh uang Rp 10.000.000 di deposito bank dengan bunga 10% per tahun selama 3 tahun. Mari kita lihat bagaimana angka-angka ini bertumbuh dari tahun ke tahun:'
        },
        {
          kind: 'table',
          headers: ['Tahun (t)', 'Saldo Awal Tahun', 'Bunga 10% per Tahun', 'Saldo Akhir Tahun', 'Analisis "Bunga atas Bunga"'],
          rows: [
            ['Tahun 1', 'Rp 10.000.000', 'Rp 1.000.000', 'Rp 11.000.000', 'Bunga murni dari modal awal Rp 10 juta.'],
            ['Tahun 2', 'Rp 11.000.000', 'Rp 1.100.000', 'Rp 12.100.000', 'Ada tambahan bunga Rp 100.000 yang dihasilkan dari bunga tahun ke-1!'],
            ['Tahun 3', 'Rp 12.100.000', 'Rp 1.210.000', 'Rp 13.310.000', 'Bunga tahun ke-3 melonjak jadi Rp 1,21 juta karena saldo modal makin besar.']
          ],
          caption: 'Tabel 3.2: Penjabaran proses compounding tahunan.'
        },
        {
          kind: 'p',
          text: 'Dengan rumus langsung: $FV_3 = 10.000.000 \\times (1 + 0,10)^3 = 10.000.000 \\times 1,331 = \\mathbf{Rp\\ 13.310.000}$. Total bunga yang diperoleh adalah Rp 3.310.000.'
        }
      ]
    },
    {
      kind: 'example',
      title: 'Contoh Nyata 2: Menghitung Nilai Sekarang (Pendiskontoan)',
      blocks: [
        {
          kind: 'p',
          text: 'Seorang mahasiswa ingin membeli laptop seharga Rp 15.000.000 saat lulus kuliah 2 tahun lagi. Jika bank menawarkan tabungan berjangka dengan bunga 8% per tahun, berapa uang yang harus didepositokan sekarang?'
        },
        {
          kind: 'p',
          text: '$$\\text{Diketahui: } FV_2 = 15.000.000; \\quad I = 8\\% = 0,08; \\quad N = 2$$'
        },
        {
          kind: 'p',
          text: '$$PV = \\frac{15.000.000}{(1 + 0,08)^2} = \\frac{15.000.000}{1,1664} = \\mathbf{Rp\\ 12.859.911}$$'
        },
        {
          kind: 'p',
          text: '**Artinya**: Menaruh Rp 12.859.911 hari ini setara nilainya dengan Rp 15.000.000 dua tahun mendatang pada tingkat diskonto 8%.'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar III: Anuitas (Annuities) — Ordinary Annuity vs Annuity Due'
    },
    {
      kind: 'p',
      text: 'Anuitas adalah rangkaian pembayaran atau penerimaan kas dengan **jumlah yang sama besar ($PMT$)** pada **interval waktu yang teratur** (misal tiap bulan atau tiap tahun) selama periode tertentu ($N$).'
    },
    {
      kind: 'table',
      headers: ['Dimensi Pembeda', 'Ordinary Annuity (Anuitas Biasa)', 'Annuity Due (Anuitas Jatuh Tempo / Dimuka)'],
      rows: [
        [
          'Waktu Aliran Kas',
          'Kas terjadi di **AKHIR** setiap periode ($t = 1, 2, 3, \\dots, N$).',
          'Kas terjadi di **AWAL** setiap periode ($t = 0, 1, 2, \\dots, N-1$).'
        ],
        [
          'Contoh Sehari-hari',
          'Cicilan KPR bank, bunga kupon obligasi biasa, gaji bulanan karyawan.',
          'Pembayaran uang sewa kos/kantor (bayar di depan), premi asuransi jiwa.'
        ],
        [
          'Rumus Future Value ($FV$)',
          '$FV_{Ord} = PMT \\times \\left[\\frac{(1 + I)^N - 1}{I}\\right]$',
          '$FV_{Due} = FV_{Ord} \\times (1 + I)$'
        ],
        [
          'Rumus Present Value ($PV$)',
          '$PV_{Ord} = PMT \\times \\left[\\frac{1 - (1 + I)^{-N}}{I}\\right]$',
          '$PV_{Due} = PV_{Ord} \\times (1 + I)$'
        ],
        [
          'Perbandingan Nilai',
          'Nilai akumulasi lebih kecil karena pembayaran pertama tidak menghasilkan bunga di tahun ke-0.',
          '**Selalu lebih besar** sebesar faktor $(1+I)$ dibanding Ordinary Annuity karena uang mengendap 1 periode lebih lama.'
        ]
      ],
      caption: 'Tabel 3.3: Komparasi tuntas Ordinary Annuity vs Annuity Due.'
    },
    {
      kind: 'callout',
      title: 'Hukum Emas Anuitas: Mengapa Annuity Due Selalu Dikali (1 + I)?',
      text: 'Bayangkan Anda menabung Rp 10 juta tiap tahun selama 3 tahun bunga 10%. Jika Anda menabung di **awal tahun (Annuity Due)**, setoran pertama langsung masuk hari ini ($t=0$) dan bekerja menghasilkan bunga selama 3 tahun penuh! Pada **Ordinary Annuity**, setoran pertama baru masuk di akhir tahun ke-1 ($t=1$), sehingga hanya bekerja 2 tahun. Setiap setoran pada Annuity Due mendapatkan bunga 1 periode lebih banyak, itulah sebabnya rumusnya cukup dikalikan $(1 + I)$.',
      variant: 'tip'
    },
    {
      kind: 'h2',
      text: 'Pilar IV: Perpetuitas (Perpetuities) — Aliran Kas Selamanya'
    },
    {
      kind: 'p',
      text: 'Perpetuitas adalah anuitas yang berlangsung terus-menerus tanpa batas akhir waktu ($N \\to \\infty$). Dalam keuangan, konsep ini digunakan untuk menilai **saham preferen** dividen tetap dan **dana abadi (endowment fund)**.'
    },
    {
      kind: 'formula',
      text: `\\text{Perpetuitas Biasa (Kas Tetap)}: \\quad PV = \\frac{PMT}{I}
\\text{Growing Perpetuity (Gordon Growth Model)}: \\quad PV = \\frac{PMT_1}{r - g} = \\frac{PMT_0(1 + g)}{r - g} \\quad (\\text{Syarat: } r > g)`,
      note: 'Pada Growing Perpetuity, PMT bertumbuh sebesar g setiap tahun. Syarat mutlak r harus lebih besar dari g, jika tidak nilai sekarang menjadi tak hingga atau negatif yang tidak masuk akal secara finansial.'
    },
    {
      kind: 'example',
      title: 'Contoh Nyata 3: Menilai Saham Preferen & Dana Abadi Kampus',
      blocks: [
        {
          kind: 'p',
          text: 'Sebuah yayasan alumni ingin mendanai beasiswa mahasiswa berprestasi sebesar Rp 60.000.000 setiap tahun untuk selamanya. Jika bank syariah mampu memberikan imbal hasil investasi stabil 6% per tahun, berapa dana yang harus disumbangkan alumni hari ini?'
        },
        {
          kind: 'p',
          text: '$$PV = \\frac{PMT}{I} = \\frac{\\text{Rp } 60.000.000}{0,06} = \\mathbf{Rp\\ 1.000.000.000\\ (1\\text{ Miliar})}$$'
        },
        {
          kind: 'p',
          text: '**Logika Keuangannya**: Uang Rp 1 Miliar ditaruh di investasi bunga 6%. Setiap tahun dana itu menghasilkan bunga persis Rp 60 juta. Bunga inilah yang dibagikan untuk beasiswa, sementara pokok tabungan Rp 1 Miliar tetap utuh selamanya!'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Pilar V: Arus Kas Tidak Merata (Uneven Cash Flows)'
    },
    {
      kind: 'p',
      text: 'Dalam dunia nyata, omset laba proyek bisnis hampir tidak pernah sama setiap tahun. Untuk mencari nilai sekarang dari aliran kas yang tidak beraturan, hitunglah Present Value masing-masing arus kas satu per satu, lalu jumlahkan keseluruhannya:'
    },
    {
      kind: 'formula',
      text: `PV = \\sum_{t=1}^N \\frac{CF_t}{(1 + I)^t} = \\frac{CF_1}{(1+I)^1} + \\frac{CF_2}{(1+I)^2} + \\dots + \\frac{CF_N}{(1+I)^N}`,
      note: 'CF_t adalah aliran kas pada periode t. Jika ada investasi awal di t=0, maka Net Present Value (NPV) = PV seluruh aliran kas masuk dikurangi pengeluaran awal (CF_0).'
    },
    {
      kind: 'h2',
      text: 'Pilar VI: Pemajemukan Non-Tahunan & Suku Bunga Efektif (APR vs EAR)'
    },
    {
      kind: 'p',
      text: 'Bank sering kali mengiklankan suku bunga nominal tahunan ($r_{Nom}$ atau APR), padahal bunga dihitung dan ditambahkan setiap bulan atau setiap kuartal. Akibat efek bunga majemuk, **bunga riil yang Anda rasakan selalu lebih tinggi dari bunga iklan brosur bank!**'
    },
    {
      kind: 'formula',
      text: `\\text{Suku Bunga Periodik}: \\quad I_{Per} = \\frac{r_{Nom}}{m}
\\text{Jumlah Periode Pemajemukan}: \\quad \\text{Total Periode} = N \\times m
\\text{Effective Annual Rate (EAR / EFF\\%)}: \\quad EAR = \\left(1 + \\frac{r_{Nom}}{m}\\right)^m - 1
\\text{Continuous Compounding (Pemajemukan Kontinu)}: \\quad FV_N = PV \\times e^{r \\times N} \\quad | \\quad EAR = e^r - 1`,
      note: 'm adalah frekuensi pemajemukan dalam 1 tahun. Nilai e adalah konstanta Euler = 2,71828.'
    },
    {
      kind: 'table',
      headers: ['Frekuensi Pemajemukan', 'Nilai m', 'Suku Bunga Periodik (r_Nom = 12%)', 'Effective Annual Rate (EAR)', 'Saldo Akhir Rp 10 Juta (1 Thn)'],
      rows: [
        ['Tahunan (Annual)', '1', '12,00%', '12,000%', 'Rp 11.200.000'],
        ['Semesteran (Semi-annual)', '2', '6,00%', '12,360%', 'Rp 11.236.000'],
        ['Kuartalan (Quarterly)', '4', '3,00%', '12,551%', 'Rp 11.255.088'],
        ['Bulanan (Monthly)', '12', '1,00%', '12,683%', 'Rp 11.268.250'],
        ['Harian (Daily - 365 hari)', '365', '0,03288%', '12,747%', 'Rp 11.274.746'],
        ['Kontinu (Continuous)', '$\\infty$', 'Mendekati 0', '12,750%', 'Rp 11.274.969']
      ],
      caption: 'Tabel 3.4: Perbandingan dampak frekuensi pemajemukan terhadap suku bunga efektif tahunan.'
    },
    {
      kind: 'callout',
      title: 'Wawasan Praktis Ujian: Kapan Harus Menggunakan EAR?',
      text: 'Gunakan EAR saat Anda harus **membandingkan dua alternatif investasi atau pinjaman** yang memiliki frekuensi pemajemukan berbeda (misalnya: Bank Mandiri menawarkan 8% majemuk semesteran, sedangkan Bank BCA menawarkan 7,9% majemuk bulanan). Jangan bandingkan bunga nominalnya! Hitung EAR keduanya terlebih dahulu, lalu pilih bunga tertinggi untuk tabungan atau bunga terendah untuk pinjaman.',
      variant: 'tip'
    },
    {
      kind: 'h2',
      text: 'Pilar VII: Skedul Amortisasi Pinjaman (Loan Amortization Schedule)'
    },
    {
      kind: 'p',
      text: 'Amortisasi adalah proses melunasi utang melalui pembayaran cicilan berkala dalam jumlah tetap ($PMT$). Setiap cicilan yang Anda bayar dibagi menjadi dua porsi: **(1) Pembayaran Beban Bunga** kepada bank, dan **(2) Pelunasan Pokok Utang**.'
    },
    {
      kind: 'table',
      headers: ['Langkah', 'Komponen', 'Rumus Matematis', 'Penjelasan Bahasa Manusia'],
      rows: [
        [
          'Langkah 1',
          'Hitung Angsuran Tetap ($PMT$)',
          '$PMT = \\frac{\\text{Jumlah Pinjaman (PV)}}{PVIFA_{I, N}} = \\frac{PV}{\\left[\\frac{1 - (1+I)^{-N}}{I}\\right]}$',
          'Besarnya uang tunai yang harus ditransfer ke bank pada akhir setiap periode (nilainya konstan sama besar).'
        ],
        [
          'Langkah 2',
          'Beban Bunga Periode $t$',
          '$\\text{Bunga}_t = \\text{Saldo Awal Utang}_t \\times I$',
          'Biaya sewa uang yang ditarik bank atas sisa saldo pokok utang yang belum Anda bayar.'
        ],
        [
          'Langkah 3',
          'Pelunasan Pokok Periode $t$',
          '$\\text{Pelunasan Pokok}_t = PMT - \\text{Bunga}_t$',
          'Sisa uang cicilan Anda setelah dipotong bunga bank. Porsi inilah yang benar-benar mengurangi saldo utang Anda!'
        ],
        [
          'Langkah 4',
          'Saldo Akhir Utang Periode $t$',
          '$\\text{Saldo Akhir}_t = \\text{Saldo Awal}_t - \\text{Pelunasan Pokok}_t$',
          'Sisa utang Anda yang belum lunas. Angka ini akan menjadi saldo awal untuk periode berikutnya ($t+1$).'
        ]
      ],
      caption: 'Tabel 3.5: 4 Langkah mekanis penyusunan tabel amortisasi pinjaman.'
    },
    {
      kind: 'example',
      title: 'Tabel Amortisasi Lengkap: Pinjaman Rp 100.000.000, Bunga 10% per Tahun, Jangka Waktu 3 Tahun',
      blocks: [
        {
          kind: 'p',
          text: 'Langkah pertama, cari cicilan tahunan tetap ($PMT$):'
        },
        {
          kind: 'p',
          text: '$$PMT = \\frac{100.000.000}{\\frac{1 - (1+0,10)^{-3}}{0,10}} = \\frac{100.000.000}{2,486852} = \\mathbf{Rp\\ 40.211.480}$$'
        },
        {
          kind: 'table',
          headers: ['Tahun', 'Saldo Awal Pinjaman', 'Cicilan Tetap (PMT)', 'Porsi Beban Bunga (10%)', 'Porsi Pelunasan Pokok', 'Saldo Akhir Pinjaman'],
          rows: [
            ['Tahun 1', 'Rp 100.000.000', 'Rp 40.211.480', 'Rp 10.000.000', 'Rp 30.211.480', 'Rp 69.788.520'],
            ['Tahun 2', 'Rp 69.788.520', 'Rp 40.211.480', 'Rp 6.978.852', 'Rp 33.232.628', 'Rp 36.555.892'],
            ['Tahun 3', 'Rp 36.555.892', 'Rp 40.211.480', 'Rp 3.655.588', 'Rp 36.555.892', 'Rp 0 (Lunas)']
          ],
          caption: 'Tabel 3.6: Skedul amortisasi pinjaman 3 tahun.'
        },
        {
          kind: 'ul',
          items: [
            '**Perhatikan Perilaku Dinamisnya (Pasti Ditanyakan Dosen!)**:\n1. Porsi bunga selalu **MENURUN** (dari Rp 10 juta $\\to$ Rp 6,97 juta $\\to$ Rp 3,65 juta) karena sisa utang mengecil.\n2. Porsi pelunasan pokok selalu **MENINGKAT** (dari Rp 30,21 juta $\\to$ Rp 33,23 juta $\\to$ Rp 36,55 juta).\n3. Di akhir tahun ke-3, saldo utang tepat habis menjadi **Rp 0**.'
          ]
        }
      ]
    },
    {
      kind: 'callout',
      title: 'Trik Cepat Ujian: Menghitung Sisa Pokok Utang Tanpa Membuat Tabel!',
      text: 'Jika soal ujian menanyakan: *"Berapa sisa pokok pinjaman setelah 5 tahun dari pinjaman KPR 20 tahun?"*, **JANGAN MEMBUAT TABEL 20 BARIS!** Sisa saldo utang pada akhir tahun ke-k adalah **Present Value dari sisa angsuran (PMT) yang belum dibayarkan**. Cukup hitung PV dari PMT untuk sisa waktu $(N - k) = 15$ tahun pada suku bunga pinjaman!',
      variant: 'tip'
    },
    {
      kind: 'h2',
      text: 'Jebakan Klasik Ujian Tengah Semester (Exam Traps)'
    },
    {
      kind: 'ul',
      items: [
        '**Jebakan 1: Lupa Mengubah Mode Kalkulator ke BGN**: Saat menghitung Annuity Due (sewa dibayar di muka), mode kalkulator finansial wajib diubah ke **BEGIN / BGN**. Jika lupa dan tetap di mode END, jawaban Anda akan otomatis salah sekitar 5% hingga 15%!',
        '**Jebakan 2: Salah Menghitung N dan I pada Pemajemukan Non-Tahunan**: Jika pinjaman 5 tahun dibayar bulanan dengan bunga 12% per tahun, jangan masukkan $N = 5$ dan $I = 12\\%$. Nilai yang benar adalah $N = 5 \\times 12 = 60$ bulan dan $I = 12\\% / 12 = 1\\%$ per bulan.',
        '**Jebakan 3: Anuitas Tertunda (Deferred Annuity)**: Anuitas yang baru mulai dibayar pada tahun ke-5. Rumus $PV$ anuitas akan menghasilkan nilai pada tahun ke-4 ($t = 4$). Anda masih harus mendiskontokan nilai tersebut 4 tahun ke belakang agar sampai di tahun ke-0 ($t = 0$).'
      ]
    },
    {
      kind: 'h2',
      text: 'Latihan Ujian Mandiri (Worked Exam Cases)'
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 1: Perencanaan Tabungan Dana Pendidikan Anak (Kombinasi FV & PV)',
      prompt: 'Seorang ayah merencanakan dana kuliah anaknya 5 tahun lagi. Biaya kuliah diperkirakan Rp 25.000.000 per tahun selama 4 tahun, dibayar pada awal setiap tahun kuliah (tahun ke-5, 6, 7, dan 8). Jika suku bunga tabungan diperkirakan 7% per tahun, berapa uang yang harus disetorkan sang ayah dalam jumlah yang sama setiap akhir tahun dari tahun ke-1 hingga tahun ke-4?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Langkah 1: Hitung Kebutuhan Dana pada Awal Kuliah (t = 4 atau t = 5)**:\nPembayaran biaya kuliah adalah Annuity Due sebanyak 4 periode sebesar Rp 25.000.000 pada bunga 7%.\n$PV_{kuliah\\ di\\ t=4} = 25.000.000 \\times \\left[\\frac{1 - (1,07)^{-4}}{0,07}\\right] \\times 1,07 = 25.000.000 \\times 3,387211 \\times 1,07 = \\mathbf{Rp\\ 90.607.894}$.',
            '**Langkah 2: Hitung Setoran Tahunan Ayah (PMT tabungan t = 1 sampai t = 4)**:\nSang ayah menabung 4 kali di akhir tahun ke-1, 2, 3, dan 4 untuk mengumpulkan target $FV_4 = Rp\\ 90.607.894$.\n$FV_4 = PMT \\times \\left[\\frac{(1,07)^4 - 1}{0,07}\\right] = PMT \\times 4,439943$\n$PMT = \\frac{90.607.894}{4,439943} = \\mathbf{Rp\\ 20.407.445}$ per tahun.',
            '**Kesimpulan**: Sang ayah harus menabung sebesar **Rp 20.407.445 setiap akhir tahun selama 4 tahun** agar dana pendidikan anaknya tercukupi penuh.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 2: Membandingkan 2 Tawaran Kredit Mobil Menggunakan EAR',
      prompt: 'Anda ingin membeli mobil seharga Rp 300.000.000 secara kredit selama 3 tahun. Dealer menawarkan dua opsi pembiayaan: (A) Bunga flat nominal 9,6% per tahun dimajemukkan bulanan (Compounded Monthly), atau (B) Bunga nominal 9,8% per tahun dimajemukkan semesteran (Compounded Semi-annually). Manakah opsi pembiayaan yang lebih menguntungkan (lebih murah) bagi Anda?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Opsi A (9,6% Pemajemukan Bulanan, m = 12)**:\n$EAR_A = \\left(1 + \\frac{0,096}{12}\\right)^{12} - 1 = (1 + 0,008)^{12} - 1 = (1,008)^{12} - 1 = 1,1003387 - 1 = \\mathbf{10,034\\%}$.',
            '**Opsi B (9,8% Pemajemukan Semesteran, m = 2)**:\n$EAR_B = \\left(1 + \\frac{0,098}{2}\\right)^2 - 1 = (1 + 0,049)^2 - 1 = (1,049)^2 - 1 = 1,100401 - 1 = \\mathbf{10,040\\%}$.',
            '**Keputusan Finansial**: Pilih **Opsi A**. Meskipun suku bunga nominalnya terkesan mirip, Opsi A memiliki Effective Annual Rate yang lebih rendah (10,034% vs 10,040%), sehingga total beban bunga riil yang dibayarkan konsumen lebih hemat.'
          ]
        }
      ]
    },
    CASE_TVM_LOAN_AMORTIZATION,
    {
      kind: 'h2',
      text: 'Rangkuman Inti & Checklist Kesiapan Ujian TM 3'
    },
    {
      kind: 'ul',
      items: [
        '**Arah Waktu**: Maju ke masa depan = *Compounding* (kalikan $(1+I)^N$). Mundur ke masa kini = *Discounting* (bagi dengan $(1+I)^N$).',
        '**Anuitas**: Annuity Due selalu bernilai lebih tinggi dibanding Ordinary Annuity dengan rasio perkalian tepat $(1 + I)$.',
        '**Perpetuitas**: Nilai kini aliran kas abadi sama dengan setoran dibagi suku bunga ($PV = PMT / I$). Jika bertumbuh, bagi dengan selisih $(r - g)$.',
        '**EAR vs APR**: Jika bunga dimajemukkan lebih dari sekali setahun ($m > 1$), suku bunga efektif ($EAR$) selalu lebih tinggi dari suku bunga nominal ($APR$). Selalu gunakan EAR untuk membandingkan opsi.',
        '**Amortisasi**: Angsuran tetap ($PMT$) melunasi bunga terlebih dahulu baru mengurangi pokok. Seiring waktu, porsi bunga menyusut dan porsi pelunasan pokok membesar.'
      ]
    }
  ]
};
