import type { Reading } from '../../../types';
import { CASE_VALUE_FOR_MONEY_EVAL } from '../aspPracticeCases';

const SVG_VFM_TRIANGLE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="e1Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="e2Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="e3Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp10)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">KERANGKA PENGUKURAN KINERJA VALUE FOR MONEY 3E (EKONOMI, EFISIENSI, &amp; EFEKTIVITAS)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">VFM 3E MODEL</text>

  <!-- 3 Sequential E-Pillars -->
  <!-- 1. Ekonomi (Input) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#e1Grad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. EKONOMI (HEMAT INPUT)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="56" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Rasio: Input Riil vs Input Anggaran</text>
    
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="7.5">• Memperoleh sumber daya input (SDM, material, fasilitas) dengan biaya serendah mungkin tanpa mengorbankan standar mutu</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="7.5">• Contoh: Pengadaan obat generik RSUD via e-Katalog LKPP dengan harga diskon optimal</text>
    <text class="text-accent-blue" x="14" y="138" fill="#38bdf8" font-size="7.5" font-weight="700">• Pertanyaan Kunci: "Apakah biaya input hemat?"</text>

    <rect class="svg-badge-blue" x="14" y="185" width="237" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Fokus: Pengendalian Biaya Masukan</text>
  </g>

  <polygon points="307,185 315,190 307,195" fill="#38bdf8"/>

  <!-- 2. Efisiensi (Input to Output) -->
  <g transform="translate(318, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#e2Grad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="132" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">2. EFISIENSI (BERDAYA GUNA)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="132" y="56" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">Rasio: Output Dihasilkan ÷ Input Digunakan</text>
    
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="7.5">• Memaksimalkan jumlah output fisik dengan input tertentu, atau meminimalkan input untuk target output tertentu</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="7.5">• Contoh: Jumlah kilometer jalan aspal yang terbangun per alokasi dana Rp 1 Miliar</text>
    <text class="text-accent-amber" x="14" y="138" fill="#fbbf24" font-size="7.5" font-weight="700">• Pertanyaan Kunci: "Apakah output optimal?"</text>

    <rect class="svg-badge-amber" x="14" y="185" width="237" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="132" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Fokus: Produktivitas Transformasi Proses</text>
  </g>

  <polygon points="590,185 598,190 590,195" fill="#fbbf24"/>

  <!-- 3. Efektivitas (Output to Outcome) -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#e3Grad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">3. EFEKTIVITAS (BERHASIL GUNA)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="56" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">Rasio: Realisasi Outcome ÷ Target Outcome</text>
    
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="7.5">• Tingkat keberhasilan dalam mencapai sasaran strategis &amp; dampak nyata bagi masyarakat</text>
    <text class="svg-text" x="14" y="106" fill="#cbd5e1" font-size="7.5">• Contoh: Penurunan prevalensi angka stunting balita daerah sebesar 5% pasca program gizi</text>
    <text class="text-accent-green" x="14" y="134" fill="#34d399" font-size="7.5" font-weight="700">• Pertanyaan Kunci: "Apakah tujuan tercapai?"</text>

    <rect class="svg-badge-green" x="14" y="185" width="237" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Fokus: Dampak Nyata bagi Kesejahteraan</text>
  </g>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Pengukuran Kinerja Organisasi Pemerintah & Paradigma Value for Money (VFM)',
  ref: 'Mardiasmo Ch. 8 | Indikator Kinerja Sektor Publik | Audit Kinerja BPK: 3E (Ekonomi, Efisiensi, Efektivitas)',
  intro: 'TM 10 membahas sistem pengukuran kinerja sektor publik yang berfokus pada Paradigma Value for Money (VFM): prinsip 3E (Ekonomi, Efisiensi, dan Efektivitas) ditambah Equity dan Equality, penyusunan Indikator Kinerja Utama (IKU), pengukuran Indeks Kepuasan Masyarakat (IKM), serta penyusunan Laporan Kinerja Instansi Pemerintah (LKjIP) berbasis Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP).',
  objectives: [
    'Mendefinisikan dan menghitung rasio Ekonomi, rasio Efisiensi, dan rasio Efektivitas program publik.',
    'Menjelaskan perbedaan mendasar antara Efisiensi (Input vs Output) dan Efektivitas (Output vs Outcome).',
    'Menyusun kerangka pengukuran kinerja instansi pemerintah (SAKIP / LKjIP).',
    'Menganalisis penyebab program publik yang efisien tetapi tidak efektif (atau sebaliknya).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 10.1: Tiga Pilar Paradigma Value for Money (VFM) Pengukuran Kinerja Publik.',
      svg: SVG_VFM_TRIANGLE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 10'
    },
    {
      kind: 'table',
      headers: ['Pilar Value for Money', 'Formula Pengukuran', 'Kriteria Penilaian Kinerja', 'Fokus Pengendalian'],
      rows: [
        ['Ekonomi (Economy)', '$\\frac{\\text{Realisasi Biaya Input}}{\\text{Anggaran Biaya Input}} \\times 100\\%$', '$< 100\\%$ = Ekonomis / Berhemat; $> 100\\%$ = Boros.', 'Pengadaan bahan baku & harga satuan barang/jasa.'],
        ['Efisiensi (Efficiency)', '$\\frac{\\text{Output Riil yang Dihasilkan}}{\\text{Input Biaya yang Digunakan}}$', 'Meningkat jika output naik dengan biaya sama, atau biaya turun dengan output sama.', 'Proses operasional & rasio biaya per unit output.'],
        ['Efektivitas (Effectiveness)', '$\\frac{\\text{Realisasi Hasil (Outcome)}}{\\text{Target Hasil yang Ditetapkan}} \\times 100\\%$', '$\\ge 100\\%$ = Efektif; $< 100\\%$ = Kurang/Tidak Efektif.', 'Pencapaian tujuan strategis & kepuasan masyarakat.'],
        ['Keadilan (Equity & Equality)', 'Pemerataan alokasi belanja bagi kelompok rentan/marjinal.', 'Apakah seluruh warga memperoleh akses pelayanan publik yang setara?', 'Distribusi spasial dan kelompok penerima manfaat.']
      ],
      caption: 'Tabel 10.0: Matriks pilar pengukuran kinerja Value for Money.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Evaluasi Kinerja Program Publik'
    },
    {
      kind: 'formula',
      text: `\\text{Rasio Ekonomi} = \\frac{\\text{Realisasi Belanja}}{\\text{Anggaran Belanja}} \\times 100\\% \\quad \\text{(Nilai < 100% Menandakan Penghematan Kas)}
\\text{Biaya per Unit Output} = \\frac{\\text{Total Biaya Realisasi}}{\\text{Jumlah Unit Output Fisik}} \\quad \\text{(Semakin Rendah, Semakin Efisien)}
\\text{Rasio Efektivitas} = \\frac{\\text{Realisasi Outcome}}{\\text{Target Outcome}} \\times 100\\% \\quad \\text{(Nilai } \\ge 100\\% \\text{ Menandakan Target Tercapai)}`,
      note: 'Program publik yang paling ideal adalah program yang memenuhi ketiga syarat sekaligus: Ekonomis saat membeli input, Efisien dalam memproses output, dan Efektif dalam menghasilkan outcome bagi rakyat.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Analisis Kinerja Program Pelatihan Kerja Dinas Tenaga Kerja',
      prompt: 'Dinas Tenaga Kerja menganggarkan pelatihan montir Rp 200 Juta untuk melatih 100 pemuda dengan target 80 orang terserap kerja. Realisasi: biaya dihabiskan Rp 180 Juta, 100 pemuda lulus pelatihan, dan 85 orang langsung diterima kerja. Hitung rasio ekonomi, efisiensi biaya per orang, dan rasio efektivitas program!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Rasio Ekonomi**: $\\frac{180 \\text{ Juta}}{200 \\text{ Juta}} \\times 100\\% = \\mathbf{90,0\\%}$ $\\r→$ **Ekonomis** (Hemat Rp 20 Juta).',
            '**2. Efisiensi Biaya per Unit**: $\\frac{Rp 180.000.000}{100 \\text{ Peserta}} = \\mathbf{Rp 1.800.000 \\text{ per peserta}}$ (Lebih efisien dibanding target awal Rp 2.000.000 per orang).',
            '**3. Rasio Efektivitas**: $\\frac{85 \\text{ Orang Terserap}}{80 \\text{ Orang Target}} \\times 100\\% = \\mathbf{106,25\\%}$ $\\r→$ **Sangat Efektif** (Melampaui target penyerapan kerja).',
            '**Kesimpulan**: Program ini berkinerja unggul karena memenuhi kriteria Value for Money secara sempurna (Ekonomis, Efisien, dan Efektif).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 10'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Prinsip Value for Money (3E)', 'Pengukuran rasio ekonomi, efisiensi, dan efektivitas kuantitatif.', 'Mampu mengkalkulasi skor kinerja program sektor publik.'],
        ['2', 'Indikator Input, Output, Outcome', 'Diferensiasi indikator antara barang fisik vs dampak kesejahteraan sosial.', 'Mampu merancang indikator kinerja utama dinas pemerintah.'],
        ['3', 'Sistem Akuntabilitas Kinerja (SAKIP)', 'Penyusunan dokumen Perjanjian Kinerja (PK) dan laporan LKjIP.', 'Mampu mengevaluasi keterkaitan sasaran strategis kepala daerah.']
      ],
      caption: 'Tabel 10.2: Peta penguasaan submateri TM 10 Akuntansi Sektor Publik.'
    },
    CASE_VALUE_FOR_MONEY_EVAL,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Efisien Belum Tentu Efektif**: Sebuah puskesmas bisa sangat efisien mengobati 1.000 pasien dengan biaya murah, tetapi gagal secara efektivitas jika wabah penyakit menular tetap meluas di lingkungan warga.',
        '**SAKIP Mewajibkan Keterkaitan Kinerja**: SAKIP menuntut setiap rupiah belanja di DPA dapat dipertanggungjawabkan hasilnya terhadap Indikator Kinerja Utama (IKU) Kepala Daerah.',
        '**Audit Kinerja BPK RI**: Berbeda dengan audit keuangan yang memberikan opini wajar tanpa pengecualian (WTP), audit kinerja BPK RI menilai kehematan, efisiensi, dan efektivitas operasional program pemerintah.'
      ]
    }
  ]
};
