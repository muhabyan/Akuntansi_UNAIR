import type { Reading } from '../../../types';
import { CASE_VRIO_ANALYSIS } from '../manstratPracticeCases';

const SVG_VALUE_CHAIN = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PORTER'S VALUE CHAIN: PRIMARY VS SUPPORT ACTIVITIES (DESS CH. 3)</text>
  
  <!-- Support Activities (Top Area) -->
  <rect x="30" y="45" width="480" height="75" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="40" y="62" fill="#a855f7" font-size="10" font-weight="700">AKTIVITAS PENDUKUNG (SUPPORT ACTIVITIES):</text>
  <text x="40" y="78" fill="#cbd5e1" font-size="8.5">• Infrastruktur Umum Perusahaan (Manajemen, Perencanaan, Keuangan, Hukum)</text>
  <text x="40" y="92" fill="#cbd5e1" font-size="8.5">• Manajemen Sumber Daya Manusia (Perekrutan, Pelatihan, Sistem Kompensasi)</text>
  <text x="40" y="106" fill="#cbd5e1" font-size="8.5">• Pengembangan Teknologi (R&amp;D, Desain Produk, IT) &amp; Pengadaan / Procurement</text>

  <!-- Primary Activities (Bottom Area) -->
  <rect x="30" y="128" width="90" height="75" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
  <text x="75" y="148" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Inbound</text>
  <text x="75" y="160" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Logistics</text>
  <text x="75" y="180" fill="#94a3b8" font-size="7.5" text-anchor="middle">Bahan Baku</text>

  <rect x="128" y="128" width="90" height="75" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
  <text x="173" y="148" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Operations</text>
  <text x="173" y="160" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">(Operasi)</text>
  <text x="173" y="180" fill="#94a3b8" font-size="7.5" text-anchor="middle">Pabrikasi</text>

  <rect x="226" y="128" width="90" height="75" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
  <text x="271" y="148" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Outbound</text>
  <text x="271" y="160" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Logistics</text>
  <text x="271" y="180" fill="#94a3b8" font-size="7.5" text-anchor="middle">Distribusi</text>

  <rect x="324" y="128" width="90" height="75" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
  <text x="369" y="148" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Marketing</text>
  <text x="369" y="160" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">&amp; Sales</text>
  <text x="369" y="180" fill="#94a3b8" font-size="7.5" text-anchor="middle">Penjualan</text>

  <rect x="422" y="128" width="88" height="75" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
  <text x="466" y="148" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Service</text>
  <text x="466" y="160" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">(Layanan)</text>
  <text x="466" y="180" fill="#94a3b8" font-size="7.5" text-anchor="middle">Purnajual</text>

  <!-- Margin (Right Arrow Shape) -->
  <polygon points="520,45 650,128 520,203" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
  <text x="570" y="128" fill="#34d399" font-size="13" font-weight="800" text-anchor="middle">PROFIT</text>
  <text x="570" y="145" fill="#34d399" font-size="13" font-weight="800" text-anchor="middle">MARGIN</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Analisis Lingkungan Internal, Rantai Nilai (Value Chain), & Aset Intelektual (RBV / VRIO)',
  ref: 'Dess, McNamara, Eisner, & Lee (11th ed.) Ch. 3 & 4',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 3: Menguasai Analisis Rantai Nilai (*Porter\'s Value Chain Analysis*: Aktivitas Utama vs Aktivitas Pendukung), Pandangan Berbasis Sumber Daya (*Resource-Based View* / RBV: Sumber Daya Berwujud, Tak Berwujud, dan Kapabilitas Organisasi), Evaluasi Keunggulan Bersaing Berkelanjutan (*VRIO Framework: Valuable, Rare, Inimitable, Organized*), 4 faktor penghambat peniruan sumber daya (*Path Dependency, Causal Ambiguity, Social Complexity, Physical Uniqueness*), serta Pengelolaan Modal Intelektual (*Human Capital, Social Capital, & Explicit vs Tacit Knowledge*).',
  objectives: [
    'Menganalisis 5 Aktivitas Utama (Primary Activities) dan 4 Aktivitas Pendukung (Support Activities) dalam Rantai Nilai Michael Porter.',
    'Membedakan Sumber Daya Berwujud (Tangible Resources) vs Sumber Daya Tak Berwujud (Intangible Resources) vs Kapabilitas Organisasi.',
    'Menerapkan Kerangka Kerja VRIO untuk menguji potensi Keunggulan Bersaing Berkelanjutan (*Sustained Competitive Advantage*).',
    'Menjelaskan 4 faktor penyebab sumber daya sulit ditiru pesaing (Inimitability).',
    'Menganalisis Tiga Komponen Modal Intelektual: Modal Manusia (*Human Capital*), Modal Sosial (*Social Capital*), dan Modal Struktural.',
    'Membedakan Pengetahuan Eksplisit (*Explicit Knowledge*) vs Pengetahuan Tersirat (*Tacit Knowledge*) dalam manajemen pengetahuan.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Model Rantai Nilai Generik (Porter\'s Generic Value Chain)',
      svg: SVG_VALUE_CHAIN,
      caption: 'Gambar 3.1: Hubungan sinergis aktivitas utama dan pendukung dalam menghasilkan margin laba perusahaan.'
    },

    { kind: 'h2', text: '1. Aktivitas Utama vs Aktivitas Pendukung Rantai Nilai' },
    {
      kind: 'table',
      headers: ['Kelompok Aktivitas Nilai', 'Komponen Spesifik', 'Fungsi Penciptaan Nilai Tambah'],
      rows: [
        ['**I. Aktivitas Utama (Primary)**', '1. Inbound Logistics\n2. Operations\n3. Outbound Logistics\n4. Marketing & Sales\n5. Service (Layanan Purnajual)', 'Aktivitas fisik berurutan yang berhubungan langsung dengan penerimaan bahan baku, pengolahan produk, pengiriman barang jadi ke pelanggan, pemasaran, dan garansi purnajual.'],
        ['**II. Aktivitas Pendukung (Support)**', '1. Pengadaan (Procurement)\n2. Pengembangan Teknologi (R&D)\n3. Manajemen SDM\n4. Infrastruktur Umum Korporat', 'Aktivitas yang menopang dan mengintegrasikan seluruh aktivitas utama agar berjalan dengan efisiensi biaya dan standar kualitas tertinggi.']
      ],
      caption: 'Tabel 3.1: Klasifikasi aktivitas rantai nilai Porter.'
    },

    CASE_VRIO_ANALYSIS,

    { kind: 'h2', text: '2. Empat Faktor Penyebab Sumber Daya Sulit Ditiru (Inimitability)' },
    {
      kind: 'ul',
      items: [
        '**1. Keunikan Fisik (Physical Uniqueness)**: Sumber daya yang secara fisik langka dan tidak dapat digandakan (misal: lokasi tanah prima di pusat kota New York, hak paten kimia eksklusif, hak tambang nikel murni).',
        '**2. Ketergantungan Jalur Sejarah (Path Dependency)**: Sumber daya yang dibangun secara akumulatif melalui pengalaman dan pembelajaran bertahun-tahun di masa lalu (misal reputasi merek Coca-Cola selama 100+ tahun).',
        '**3. Ambiguitas Kausal (Causal Ambiguity)**: Pesaing tidak mampu memahami dengan pasti mana kombinasi aset dan kapabilitas spesifik yang menciptakan keberhasilan perusahaan.',
        '**4. Kompleksitas Sosial (Social Complexity)**: Sumber daya yang berakar pada dinamika sosial yang rumit, seperti budaya kepercayaan internal, loyalitas kerja tim, dan jejaring relasi interpersonal.'
      ]
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 3' },
    {
      kind: 'ul',
      items: [
        '**Tacit vs Explicit Knowledge**: Explicit knowledge mudah dikodifikasi dan ditransfer melalui manual SOP; Tacit knowledge bersifat personal, berbasis pengalaman intuitif, dan jauh lebih sulit ditiru pesaing.',
        '**Social Capital**: Jejaring hubungan persahabatan dan kolaborasi internal antarkaryawan yang mempercepat arus pertukaran informasi dan memecahkan silo fungsional.',
        '**Evaluasi Finansial Internal**: Menggunakan Analisis Rasio Keuangan Historis dan Perbandingan Tolok Ukur (*Benchmarking*) terhadap pesaing utama industri.'
      ]
    }
  ]
};