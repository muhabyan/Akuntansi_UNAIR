import type { Reading } from '../../../types';
import { CASE_VRIO_ANALYSIS_RESOURCES } from '../manstratPracticeCases';

const SVG_VALUE_CHAIN = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="marginGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns3)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">RANTAI NILAI KORPORASI &amp; SUMBER MARGIN LABA (MICHAEL E. PORTER)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">VALUE CHAIN</text>

  <!-- Support Activities (Top 4 Rows) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="700" height="32" rx="4" fill="#0f172a" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="15" y="20" fill="#a78bfa" font-size="9" font-weight="700">INFRASTRUKTUR PERUSAHAAN (Manajemen Umum, Perencanaan Strategis, Hukum, Keuangan)</text>

    <rect class="svg-card" x="0" y="36" width="700" height="32" rx="4" fill="#0f172a" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="15" y="56" fill="#a78bfa" font-size="9" font-weight="700">MANAJEMEN SUMBER DAYA MANUSIA (Perekrutan, Pelatihan, Sistem Insentif, Kompensasi)</text>

    <rect class="svg-card" x="0" y="72" width="700" height="32" rx="4" fill="#0f172a" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="15" y="92" fill="#a78bfa" font-size="9" font-weight="700">PENGEMBANGAN TEKNOLOGI (R&amp;D, Otomasi Pabrik, Desain Produk, Software IT)</text>

    <rect class="svg-card" x="0" y="108" width="700" height="32" rx="4" fill="#0f172a" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="15" y="128" fill="#a78bfa" font-size="9" font-weight="700">PENGADAAN / PROCUREMENT (Pembelian Bahan Baku, Negosiasi Kontrak Vendor Global)</text>
    
    <text class="text-accent-purple" x="690" y="18" fill="#a78bfa" font-size="8" font-style="italic" text-anchor="end">AKTIVITAS PENDUKUNG (SUPPORT ACTIVITIES)</text>
  </g>

  <!-- Primary Activities (Bottom 5 Columns) -->
  <g transform="translate(35, 225)">
    <rect class="svg-card" x="0" y="0" width="135" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="67" y="18" fill="#38bdf8" font-size="8.5" font-weight="800" text-anchor="middle">INBOUND LOGISTICS</text>
    <text class="svg-text" x="10" y="40" fill="#cbd5e1" font-size="7.5">• Penerimaan bahan</text>
    <text class="svg-text" x="10" y="55" fill="#cbd5e1" font-size="7.5">• Gudang penyimpanan</text>
    <text class="svg-text" x="10" y="70" fill="#cbd5e1" font-size="7.5">• Pengendalian stok</text>

    <rect class="svg-card" x="141" y="0" width="135" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="208" y="18" fill="#38bdf8" font-size="8.5" font-weight="800" text-anchor="middle">OPERATIONS</text>
    <text class="svg-text" x="151" y="40" fill="#cbd5e1" font-size="7.5">• Pabrikasi perakitan</text>
    <text class="svg-text" x="151" y="55" fill="#cbd5e1" font-size="7.5">• Uji kendali mutu</text>
    <text class="svg-text" x="151" y="70" fill="#cbd5e1" font-size="7.5">• Operasional mesin</text>

    <rect class="svg-card" x="282" y="0" width="135" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="349" y="18" fill="#38bdf8" font-size="8.5" font-weight="800" text-anchor="middle">OUTBOUND LOGISTICS</text>
    <text class="svg-text" x="292" y="40" fill="#cbd5e1" font-size="7.5">• Pengiriman produk</text>
    <text class="svg-text" x="292" y="55" fill="#cbd5e1" font-size="7.5">• Distribusi armada</text>
    <text class="svg-text" x="292" y="70" fill="#cbd5e1" font-size="7.5">• Pemenuhan order</text>

    <rect class="svg-card" x="423" y="0" width="135" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="490" y="18" fill="#38bdf8" font-size="8.5" font-weight="800" text-anchor="middle">MARKETING &amp; SALES</text>
    <text class="svg-text" x="433" y="40" fill="#cbd5e1" font-size="7.5">• Iklan &amp; promosi</text>
    <text class="svg-text" x="433" y="55" fill="#cbd5e1" font-size="7.5">• Penetapan harga</text>
    <text class="svg-text" x="433" y="70" fill="#cbd5e1" font-size="7.5">• Saluran distribusi</text>

    <rect class="svg-card" x="564" y="0" width="136" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="632" y="18" fill="#38bdf8" font-size="8.5" font-weight="800" text-anchor="middle">AFTER-SALES SERVICE</text>
    <text class="svg-text" x="574" y="40" fill="#cbd5e1" font-size="7.5">• Layanan servis garansi</text>
    <text class="svg-text" x="574" y="55" fill="#cbd5e1" font-size="7.5">• Pasokan suku cadang</text>
    <text class="svg-text" x="574" y="70" fill="#cbd5e1" font-size="7.5">• Pelatihan pemakai</text>
  </g>

  <!-- Margin Wedge -->
  <polygon points="742,75 865,200 742,325" fill="url(#marginGrad)" stroke="#86efac" stroke-width="2"/>
  <text x="770" y="195" fill="#0f172a" font-size="14" font-weight="900" text-anchor="middle" transform="rotate(90, 770, 195)">MARGIN LABA</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Analisis Lingkungan Internal, Rantai Nilai (Value Chain), & Aset Intelektual (RBV / VRIO)',
  ref: 'Dess et al. Bab 3 & 4 | Jay Barney Firm Resources and Sustained Competitive Advantage | Michael Porter Value Chain',
  intro: 'TM 3 membahas sumber keunggulan bersaing dari dalam organisasi (Internal Analysis): analisis Rantai Nilai (Value Chain Analysis) yang memisahkan 5 Aktivitas Utama (Inbound, Operations, Outbound, Marketing/Sales, Service) dan 4 Aktivitas Pendukung (Infrastruktur, SDM, Teknologi, Pengadaan), pandangan berbasis sumber daya (Resource-Based View / RBV), aset berwujud vs tak berwujud, serta evaluasi kapabilitas menggunakan Kerangka Kerja VRIO (Valuable, Rare, Inimitable, Organized to Exploit).',
  objectives: [
    'Menganalisis penciptaan margin nilai melalui 5 aktivitas utama dan 4 aktivitas pendukung Rantai Nilai Porter.',
    'Membedakan aset berwujud (Tangible), aset tak berwujud (Intangible), dan kapabilitas organisasi.',
    'Menerapkan 4 kriteria Kerangka VRIO (Valuable, Rare, Inimitable, Organized) untuk menguji keunggulan bersaing.',
    'Menjelaskan 4 sumber sulitnya suatu sumber daya ditiru pesaing (Inimitability): Physical Uniqueness, Path Dependency, Causal Ambiguity, dan Social Complexity.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 3.1: Arsitektur Rantai Nilai Michael E. Porter dan Penciptaan Marjin Nilai Korporasi.',
      svg: SVG_VALUE_CHAIN
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 3'
    },
    {
      kind: 'table',
      headers: ['Aktivitas Rantai Nilai Porter', 'Kategori Aktivitas', 'Fungsi Penciptaan Nilai', 'Peluang Keunggulan Bersaing'],
      rows: [
        ['Inbound Logistics', 'Aktivitas Utama', 'Penerimaan, penyimpanan, dan penanganan bahan baku.', 'Sistem Just-in-Time (JIT) memangkas biaya pergudangan.'],
        ['Operations', 'Aktivitas Utama', 'Transformasi input menjadi produk jadi (manufaktur/layanan).', 'Otomatisasi pabrik meningkatkan presisi dan kecepatan.'],
        ['Outbound Logistics', 'Aktivitas Utama', 'Pengumpulan, penyimpanan, dan distribusi fisik ke pembeli.', 'Armada distribusi mandiri menjamin barang tiba tepat waktu.'],
        ['Marketing & Sales', 'Aktivitas Utama', 'Membujuk dan memfasilitasi konsumen untuk membeli produk.', 'Brand equity kuat memungkinkan harga jual premium.'],
        ['Customer Service', 'Aktivitas Utama', 'Dukungan pemeliharaan dan garansi purnajual bagi pembeli.', 'Layanan bengkel resmi prima mengikat loyalitas nasabah.'],
        ['Technology Development', 'Aktivitas Pendukung', 'Peralatan, perangkat lunak piranti keras, prosedur, litbang.', 'Paten teknologi eksklusif melindungi keunikan produk.']
      ],
      caption: 'Tabel 3.0: Rincian aktivitas rantai nilai internal perusahaan.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Kerangka Keputusan VRIO (Jay Barney)'
    },
    {
      kind: 'table',
      headers: ['Valuable? (Bernilai)', 'Rare? (Langka)', 'Inimitable? (Sulit Ditiru)', 'Organized? (Terorganisir)', 'Implikasi Kinerja Bersaing Perusahaan'],
      rows: [
        ['Tidak', 'Tidak', 'Tidak', 'Tidak', 'Kelemahan Bersaing (Competitive Disadvantage) - Kinerja di Bawah Rata-Rata'],
        ['Ya', 'Tidak', 'Tidak', 'Tidak / Ya', 'Kesetaraan Bersaing (Competitive Parity) - Laba Rata-Rata Industri Biasa'],
        ['Ya', 'Ya', 'Tidak', 'Tidak / Ya', 'Keunggulan Sementara (Temporary Competitive Advantage) - Segera Dikejar Pesaing'],
        ['Ya', 'Ya', 'Ya', 'Tidak', 'Keunggulan Tak Terekspoitasi (Unexploited Competitive Advantage) - Organisasi Belum Siap'],
        ['Ya', 'Ya', 'Ya', 'Ya', 'KEUNGGULAN BERSAING BERKELANJUTAN (SUSTAINABLE COMPETITIVE ADVANTAGE)']
      ],
      caption: 'Tabel 3.1: Matriks keputusan evaluasi VRIO.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Evaluasi VRIO Resep Rahasia dan Budaya Perusahaan',
      prompt: 'Sebuah restoran cepat saji memiliki resep bumbu ayam goreng yang lezat dan budaya pelayanan ramah yang dibangun selama 30 tahun. Apakah resep bumbu dan budaya pelayanan tersebut memenuhi kriteria "Inimitable" (Sulit Ditiru) dalam kerangka VRIO? Jelaskan alasannya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Evaluasi Resep Bumbu**: Resep bumbu memiliki *Physical Uniqueness* dan hak paten/rahasia dagang, namun secara kimiawi masih berpotensi direkayasa balik (reverse engineering) oleh lab pesaing.',
            '**Evaluasi Budaya Pelayanan 30 Tahun**: Budaya pelayanan memenuhi kriteria **Inimitable Sempurna** karena didukung oleh:\n- *Path Dependency (Ketergantungan Historis)*: Budaya tersebut tidak bisa dibeli instan di pasar, melainkan hasil akumulasi pembelajaran dan seleksi nilai selama 30 tahun.\n- *Causal Ambiguity (Ambiguitas Sebab-Akibat)*: Pesaing tidak tahu pasti interaksi mikro mana yang membuat staf begitu kompak dan tulus melayani.\n- *Social Complexity (Kompleksitas Sosial)*: Ikatan kepercayaan interpersonal antar-karyawan sangat rumit untuk diduplikasi.',
            '**Kesimpulan**: Budaya organisasi yang matang adalah sumber keunggulan bersaing yang jauh lebih sulit ditiru (*Inimitable*) dibanding sekadar resep fisik.'
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
        ['1', 'Rantai Nilai Porter', 'Pembedaan 5 aktivitas primer dan 4 aktivitas pendukung penentu margin.', 'Mampu mengidentifikasi aktivitas pencipta nilai utama perusahaan.'],
        ['2', 'Resource-Based View (RBV)', 'Klasifikasi aset berwujud, tak berwujud, dan kapabilitas dinamis.', 'Mampu membedakan sumber daya statis vs kapabilitas dinamis.'],
        ['3', 'Kerangka Evaluasi VRIO', 'Penerapan 4 uji V-R-I-O dan 4 pilar inimitability.', 'Mampu menentukan apakah sumber daya menghasilkan keunggulan berkelanjutan.']
      ],
      caption: 'Tabel 3.2: Peta penguasaan submateri TM 3 Manajemen Strategik.'
    },
    CASE_VRIO_ANALYSIS_RESOURCES,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Aset Tak Berwujud Lebih Berharga**: Di era modern, aset tak berwujud seperti reputasi merek, budaya inovasi, dan modal intelektual jauh lebih sulit ditiru pesaing dibanding pabrik fisik atau mesin.',
        '**Organized to Exploit**: Sumber daya yang langka dan berharga tidak ada gunanya jika struktur organisasi, sistem pelaporan, dan skema kompensasi perusahaan tidak siap mengeksploitasinya.',
        '**Causal Ambiguity Melindungi Laba**: Ketika kompetitor tidak memahami dengan persis apa resep rahasia di balik kesuksesan Anda (*Causal Ambiguity*), keunggulan bersaing Anda akan bertahan sangat lama.'
      ]
    }
  ]
};
