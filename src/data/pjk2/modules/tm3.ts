import type { Reading } from '../../../types';
import { CASE_TRANSFER_PRICING_ALP } from '../pjk2PracticeCases';

const SVG_TRANSFER_PRICING = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="tpTrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="tpProf" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk3)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">5 METODE PENETAPAN HARGA TRANSFER &amp; PRINSIP KEWAJARAN / ARMS LENGTH (PMK 172/2023)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TRANSFER PRICING</text>

  <!-- Left: Traditional Transaction Methods (3 Methods) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#tpTrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="10.5" font-weight="800">1. METODE TRANSAKSI TRADISIONAL (TRADITIONAL)</text>
    
    <text class="text-accent-blue" x="14" y="50" fill="#38bdf8" font-size="8.5" font-weight="700">A. CUP (Comparable Uncontrolled Price):</text>
    <text class="svg-text" x="14" y="64" fill="#cbd5e1" font-size="7.5">Bandingkan harga langsung dengan transaksi barang sejenis pada pihak independen.</text>

    <text class="text-accent-blue" x="14" y="86" fill="#38bdf8" font-size="8.5" font-weight="700">B. RPM (Resale Price Method):</text>
    <text class="svg-text" x="14" y="100" fill="#cbd5e1" font-size="7.5">Harga jual kembali ke pihak independen dikurangi margin laba kotor wajar distributor.</text>

    <text class="text-accent-blue" x="14" y="122" fill="#38bdf8" font-size="8.5" font-weight="700">C. CPM (Cost Plus Method):</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="7.5">Beban pokok produksi ditambah mark-up laba kotor wajar pabrikan manufaktur.</text>

    <rect class="svg-badge-blue" x="14" y="175" width="367" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="191" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Prioritas Utama Bila Data Pembanding Identik Tersedia</text>
  </g>

  <!-- Right: Transactional Profit Methods (2 Methods) -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#tpProf)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="16" y="20" fill="#a78bfa" font-size="10.5" font-weight="800">2. METODE LABA TRANSAKSIONAL (PROFIT METHODS)</text>
    
    <text class="text-accent-purple" x="14" y="50" fill="#a78bfa" font-size="8.5" font-weight="700">D. TNMM (Transactional Net Margin Method):</text>
    <text class="svg-text" x="14" y="64" fill="#cbd5e1" font-size="7.5">Membandingkan margin laba bersih usaha (Net Margin / Berry Ratio / OM) terhadap basis yang tepat (Biaya / Penjualan / Aset).</text>

    <text class="text-accent-purple" x="14" y="96" fill="#a78bfa" font-size="8.5" font-weight="700">E. PSM (Profit Split Method):</text>
    <text class="svg-text" x="14" y="110" fill="#cbd5e1" font-size="7.5">Membagi laba gabungan dari transaksi terafiliasi berdasarkan kontribusi fungsi, aset tak berwujud unik, &amp; risiko yang ditanggung (FAR).</text>

    <rect class="svg-badge-purple" x="14" y="175" width="367" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="197" y="191" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Digunakan Bila Transaksi Sangat Terintegrasi / Memiliki Intangibles</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Wajib didokumentasikan dalam TP Doc (Local File, Master File, CbCR) untuk menghindari koreksi jabatan oleh DJP.</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Hubungan Istimewa, Transfer Pricing, & Pencegahan Penghindaran Pajak (PMK 172/2023)',
  ref: 'PMK 172/2023 | Pasal 18 UU PPh | Pedoman Transfer Pricing OECD | Prinsip Kewajaran Usaha (ALP)',
  intro: 'TM 3 membahas tata kelola pemajakan transaksi afiliasi dan pencegahan erosi basis pajak (Base Erosion and Profit Shifting / BEPS): kriteria Hubungan Istimewa menurut Pasal 18 ayat (4) UU PPh (Kepemilikan modal >= 25%, Penguasaan manajemen/teknologi, dan Hubungan keluarga), penerapan Prinsip Kewajaran dan Kelaziman Usaha (Arms Length Principle / ALP) berdasarkan PMK No. 172/2023, pemilihan 5 metode transfer pricing, dokumentasi 3-tier TP Doc (Master File, Local File, CbCR), serta aturan Debt-to-Equity Ratio (DER 4:1).',
  objectives: [
    'Mengidentifikasi 3 kriteria terjadinya Hubungan Istimewa menurut UU PPh.',
    'Menerapkan Prinsip Kewajaran dan Kelaziman Usaha (ALP) dalam transaksi afiliasi.',
    'Memilih metode transfer pricing terbaik (The Most Appropriate Method: CUP, RPM, CPM, TNMM, PSM).',
    'Menjelaskan batasan rasio utang terhadap modal (DER 4:1) untuk pembebanan biaya bunga pinjaman.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 3.1: Hierarki Metode Transfer Pricing dan Dokumentasi TP Doc menurut PMK No. 172/2023.',
      svg: SVG_TRANSFER_PRICING
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 18 ayat (3) & (4) UU PPh (Transfer Pricing & Hubungan Istimewa)',
      text: '"Pasal 18 ayat (3): Direktur Jenderal Pajak berwenang untuk menentukan kembali besarnya penghasilan dan pengurangan serta menentukan utang sebagai modal untuk menghitung besarnya Penghasilan Kena Pajak bagi Wajib Pajak yang mempunyai hubungan istimewa dengan Wajib Pajak lainnya sesuai dengan kewajaran dan kelaziman usaha yang tidak dipengaruhi oleh hubungan istimewa (Arm\'s Length Principle / PKKU) dengan menggunakan metode penentuan harga transfer.\n\nPasal 18 ayat (4): Hubungan istimewa dianggap ada apabila: a. WP mempunyai penyertaan modal langsung atau tidak langsung paling rendah 25% pada WP lain; b. WP menguasai WP lainnya atau dua/lebih WP berada di bawah penguasaan yang sama baik langsung maupun tidak langsung; atau c. terdapat hubungan keluarga baik sedarah maupun semenda dalam garis keturunan lurus dan/atau ke samping satu derajat."'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: '📜 Ketentuan Regulasi: PMK No. 172 Tahun 2023 (Prinsip Kewajaran & Kelaziman Usaha / PKKU)',
      text: '"PMK 172/2023 mengatur penerapan Prinsip Kewajaran dan Kelaziman Usaha (PKKU) melalui 3 tahapan: 1. Analisis Industri & Karakterisasi Fungsi, Aset, dan Risiko (FAR); 2. Pemilihan Metode Transfer Pricing yang Tepat (CUP, Resale Price, Cost Plus, TNMM, atau Profit Split); dan 3. Analisis Komparabilitas & Penentuan Nilai Wajar. Wajib Pajak dengan transaksi afiliasi di atas threshold wajib menyusun Dokumen Penentuan Harga Transfer (TP Doc) yang terdiri dari Dokumen Induk (Master File), Dokumen Lokal (Local File), dan Laporan per Negara (CbCR)."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 3'
    },
    {
      kind: 'table',
      headers: ['Metode Transfer Pricing', 'Prinsip Penentuan Harga Wajar', 'Kondisi Paling Tepat Diterapkan', 'Kelemahan / Tantangan'],
      rows: [
        ['Comparable Uncontrolled Price (CUP)', 'Membandingkan harga transaksi afiliasi langsung dengan harga pasar independen.', 'Tersedia data transaksi pasar bebas atas barang/komoditas yang identik.', 'Sangat sensitif terhadap perbedaan kecil kualitas, merek, atau volume.'],
        ['Resale Price Method (RPM)', 'Harga jual kembali ke pihak independen dikurangi laba kotor (gross margin) wajar.', 'Entitas afiliasi bertindak sebagai distributor/reseller tanpa menambah nilai manufaktur.', 'Sulit menentukan margin pembanding jika terdapat variasi biaya operasional.'],
        ['Cost Plus Method (CPM)', 'Biaya produksi langsung/tidak langsung ditambah margin laba kotor wajar.', 'Entitas afiliasi bertindak sebagai pabrikan maklon (Contract Manufacturer).', 'Perbedaan standar akuntansi biaya antar-perusahaan pembanding.'],
        ['Transactional Net Margin (TNMM)', 'Membandingkan margin laba operasi bersih terhadap basis yang tepat (Penjualan, Biaya, Aset).', 'Banyak transaksi manufaktur dan jasa kompleks yang tidak memiliki data laba kotor.', 'Dapat dipengaruhi oleh inefisiensi manajerial internal perusahaan.'],
        ['Profit Split Method (PSM)', 'Membagi laba gabungan operasi transaksi afiliasi berdasarkan kontribusi nilai ekonomi.', 'Kedua belah pihak memiliki aset tak berwujud unik bernilai tinggi (Intangible Assets).', 'Sangat subjektif dalam mengalokasikan bobot kontribusi laba residual.']
      ],
      caption: 'Tabel 3.0: Matriks 5 metode transfer pricing menurut standar OECD dan PMK 172/2023.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Batasan Biaya Bunga Utang (DER 4:1)'
    },
    {
      kind: 'formula',
      text: `\\text{Rasio Utang terhadap Modal (Debt-to-Equity Ratio / DER)} \\le 4 : 1 \\quad \\text{(PMK 169/PMK.010/2015)}
\\text{Jika } DER > 4 : 1 \\implies \\text{Beban Bunga yang Boleh Dikurangkan} = \\left(\\frac{4 \\times \\text{Ekuitas}}{\\text{Total Utang}}\\right) \\times \\text{Total Beban Bunga}
\\text{Selisih Beban Bunga yang Melebihi Batas} \\implies \\text{Non-Deductible Expense (Koreksi Fiskal Positif)}`,
      note: 'Ketentuan DER 4:1 dikecualikan bagi lembaga perbankan, lembaga pembiayaan, asuransi, pertambangan migas (PSC), dan Wajib Pajak yang seluruh penghasilannya dikenai PPh Final.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Batasan Pembebanan Bunga Pinjaman (Thin Capitalization)',
      prompt: 'PT Manufaktur memiliki rata-rata saldo utang tahun 2026 sebesar Rp 10 Miliar dan rata-rata saldo ekuitas sebesar Rp 2 Miliar. Beban bunga pinjaman komersial yang dibayarkan selama setahun adalah Rp 1.000.000.000. Berapa beban bunga yang boleh dikurangkan secara fiskal dan berapa koreksi fiskalnya?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Rasio Utang terhadap Modal Riil**: DER = Rp 10 Miliar / Rp 2 Miliar = **5 : 1** (Melebihi batas ambang maksimum 4:1).',
            '**Plafon Utang Maksimum yang Bunganya Boleh Diakui**: 4 × Ekuitas = 4 × Rp 2 Miliar = **Rp 8 Miliar**.',
            '**Beban Bunga yang Boleh Dikurangkan (Deductible)**:\nBunga Deductible = $\\frac{Rp 8 \\text{ Miliar}}{Rp 10 \\text{ Miliar}} \\times Rp 1.000.000.000 = \\mathbf{Rp 800.000.000}$.',
            '**Koreksi Fiskal Positif**: Rp 1.000.000.000 - Rp 800.000.000 = **Rp 200.000.000** (Wajib dikoreksi positif menambah laba kena pajak).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 3'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kriteria Hubungan Istimewa', 'Kepemilikan modal >= 25%, penguasaan manajemen, dan keluarga sedarah/semenda.', 'Mampu mengidentifikasi keberadaan transaksi afiliasi.'],
        ['2', 'Penerapan ALP & 5 Metode TP', 'Kriteria seleksi The Most Appropriate Method dan analisis kesebandingan.', 'Mampu menentukan metode transfer pricing yang tepat.'],
        ['3', 'Ketentuan Thin Capitalization DER 4:1', 'Kalkulasi beban bunga pinjaman yang boleh dikurangkan vs koreksi positif.', 'Mampu menghitung koreksi fiskal atas biaya bunga pinjaman afiliasi.']
      ],
      caption: 'Tabel 3.2: Peta penguasaan submateri TM 3 Perpajakan II.'
    },
    CASE_TRANSFER_PRICING_ALP,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**PMK 172/2023 Mengintegrasikan Ketentuan TP**: Menggabungkan aturan transfer pricing, Advance Pricing Agreement (APA), dan Mutual Agreement Procedure (MAP) dalam satu kodifikasi modern.',
        '**Secondary Adjustment**: Koreksi fiskal atas transfer pricing yang tidak wajar dapat direkarakterisasi oleh DJP sebagai pembagian dividen terselubung yang dikenai withholding tax PPh 26 (tarif 20% atau tarif tax treaty).',
        '**Kewajiban TP Doc Tepat Waktu**: TP Doc wajib tersedia paling lambat 4 bulan setelah tahun pajak berakhir (saat lapor SPT Tahunan); keterlambatan penyusunan dianggap tidak menerapkan prinsip kewajaran.'
      ]
    }
  ]
};
