import type { Reading } from '../../../types';
import { CASE_VRIO_ANALYSIS_RESOURCES } from '../manstratPracticeCases';

const SVG_VALUE_CHAIN = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">RANTAI NILAI PERUSAHAAN (MICHAEL PORTER'S VALUE CHAIN)</text>
  
  <rect x="30" y="48" width="510" height="70" rx="6" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="285" y="65" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">AKTIVITAS PENDUKUNG (SUPPORT ACTIVITIES)</text>
  <text x="285" y="82" fill="#cbd5e1" font-size="8" text-anchor="middle">• Infrastruktur Perusahaan (Tata Kelola, Keuangan, Legal)</text>
  <text x="285" y="96" fill="#cbd5e1" font-size="8" text-anchor="middle">• Manajemen SDM &amp; Pengembangan Teknologi (R&amp;D)</text>
  <text x="285" y="110" fill="#cbd5e1" font-size="8" text-anchor="middle">• Pengadaan Barang &amp; Jasa (Procurement)</text>

  <rect x="30" y="125" width="95" height="75" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="77" y="145" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">INBOUND</text>
  <text x="77" y="160" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Penerimaan &amp;</text>
  <text x="77" y="173" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Gudang Bahan</text>

  <rect x="135" y="125" width="95" height="75" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="182" y="145" fill="#4ade80" font-size="8.5" font-weight="700" text-anchor="middle">OPERATIONS</text>
  <text x="182" y="160" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Pabrikasi &amp;</text>
  <text x="182" y="173" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Perakitan</text>

  <rect x="240" y="125" width="95" height="75" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="287" y="145" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">OUTBOUND</text>
  <text x="287" y="160" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Distribusi &amp;</text>
  <text x="287" y="173" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Pengiriman</text>

  <rect x="345" y="125" width="95" height="75" rx="6" fill="#1e293b" stroke="#f472b6" stroke-width="1.5"/>
  <text x="392" y="145" fill="#f472b6" font-size="8.5" font-weight="700" text-anchor="middle">MARKETING</text>
  <text x="392" y="160" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Iklan, Promosi,</text>
  <text x="392" y="173" fill="#cbd5e1" font-size="7.5" text-anchor="middle">&amp; Penjualan</text>

  <rect x="450" y="125" width="90" height="75" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="495" y="145" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">SERVICE</text>
  <text x="495" y="160" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Layanan</text>
  <text x="495" y="173" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Purnajual</text>

  <polygon points="555,48 645,125 555,200 555,48" fill="#4ade80" stroke="#86efac" stroke-width="1.5"/>
  <text x="590" y="130" fill="#0f172a" font-size="12" font-weight="700" text-anchor="middle">MARGIN</text>
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
