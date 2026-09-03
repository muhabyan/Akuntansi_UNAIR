import type { Reading } from '../../../types';
import { CASE_ORG_STRUCTURE_ADAPTIVE } from '../manajemenPracticeCases';

const SVG_ORG_STRUCTURES = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad7)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">5 DESAIN STRUKTUR DEPARTEMENTALISASI ORGANISASI (RICHARD L. DAFT)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ORG DESIGN</text>

  <!-- 1. FUNGSIONAL -->
  <g transform="translate(30, 75)">
    <rect class="svg-card" x="0" y="0" width="160" height="255" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect class="svg-badge-blue" x="0" y="0" width="160" height="28" rx="10" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="80" y="19" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. FUNGSIONAL</text>
    <rect class="svg-subcard" x="55" y="38" width="50" height="18" rx="4" fill="#1e293b" stroke="#38bdf8"/>
    <text class="svg-text" x="80" y="50" fill="#cbd5e1" font-size="7" text-anchor="middle">CEO</text>
    <line x1="80" y1="56" x2="80" y2="66" stroke="#334155"/>
    <line x1="25" y1="66" x2="135" y2="66" stroke="#334155"/>
    <rect class="svg-subcard" x="15" y="70" width="38" height="16" rx="3" fill="#1e293b"/><text class="svg-muted" x="34" y="81" fill="#94a3b8" font-size="6" text-anchor="middle">SDM</text>
    <rect class="svg-subcard" x="61" y="70" width="38" height="16" rx="3" fill="#1e293b"/><text class="svg-muted" x="80" y="81" fill="#94a3b8" font-size="6" text-anchor="middle">Pemasaran</text>
    <rect class="svg-subcard" x="107" y="70" width="38" height="16" rx="3" fill="#1e293b"/><text class="svg-muted" x="126" y="81" fill="#94a3b8" font-size="6" text-anchor="middle">Keuangan</text>
    <text class="svg-text" x="12" y="110" fill="#cbd5e1" font-size="7.5" font-weight="700">Basis:</text>
    <text class="svg-muted" x="12" y="124" fill="#94a3b8" font-size="7.5">Kesamaan fungsi keahlian</text>
    <text class="text-accent-green" x="12" y="146" fill="#34d399" font-size="7.5" font-weight="700">Keunggulan:</text>
    <text class="svg-text" x="12" y="160" fill="#cbd5e1" font-size="7.5">• Skala ekonomis tinggi</text>
    <text class="svg-text" x="12" y="174" fill="#cbd5e1" font-size="7.5">• Pendalaman keahlian</text>
    <text class="text-accent-red" x="12" y="196" fill="#f87171" font-size="7.5" font-weight="700">Kelemahan:</text>
    <text class="svg-text" x="12" y="210" fill="#cbd5e1" font-size="7.5">• Silo effect terkotak</text>
    <text class="svg-text" x="12" y="224" fill="#cbd5e1" font-size="7.5">• Koordinasi fungsi kaku</text>
  </g>

  <!-- 2. DIVISIONAL -->
  <g transform="translate(200, 75)">
    <rect class="svg-card" x="0" y="0" width="160" height="255" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect class="svg-badge-green" x="0" y="0" width="160" height="28" rx="10" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="80" y="19" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">2. DIVISIONAL</text>
    <rect class="svg-subcard" x="55" y="38" width="50" height="18" rx="4" fill="#1e293b" stroke="#34d399"/>
    <text class="svg-text" x="80" y="50" fill="#cbd5e1" font-size="7" text-anchor="middle">CEO</text>
    <line x1="80" y1="56" x2="80" y2="66" stroke="#334155"/>
    <line x1="40" y1="66" x2="120" y2="66" stroke="#334155"/>
    <rect class="svg-subcard" x="18" y="70" width="55" height="16" rx="3" fill="#1e293b"/><text class="svg-muted" x="45" y="81" fill="#94a3b8" font-size="6" text-anchor="middle">Divisi Produk A</text>
    <rect class="svg-subcard" x="88" y="70" width="55" height="16" rx="3" fill="#1e293b"/><text class="svg-muted" x="115" y="81" fill="#94a3b8" font-size="6" text-anchor="middle">Divisi Produk B</text>
    <text class="svg-text" x="12" y="110" fill="#cbd5e1" font-size="7.5" font-weight="700">Basis:</text>
    <text class="svg-muted" x="12" y="124" fill="#94a3b8" font-size="7.5">Output produk / Geografi</text>
    <text class="text-accent-green" x="12" y="146" fill="#34d399" font-size="7.5" font-weight="700">Keunggulan:</text>
    <text class="svg-text" x="12" y="160" fill="#cbd5e1" font-size="7.5">• Respon cepat pada pasar</text>
    <text class="svg-text" x="12" y="174" fill="#cbd5e1" font-size="7.5">• Otonomi unit mandiri</text>
    <text class="text-accent-red" x="12" y="196" fill="#f87171" font-size="7.5" font-weight="700">Kelemahan:</text>
    <text class="svg-text" x="12" y="210" fill="#cbd5e1" font-size="7.5">• Duplikasi biaya divisi</text>
    <text class="svg-text" x="12" y="224" fill="#cbd5e1" font-size="7.5">• Persaingan sumber daya</text>
  </g>

  <!-- 3. MATRIKS -->
  <g transform="translate(370, 75)">
    <rect class="svg-card" x="0" y="0" width="160" height="255" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect class="svg-badge-amber" x="0" y="0" width="160" height="28" rx="10" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="80" y="19" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">3. MATRIKS</text>
    <rect class="svg-subcard" x="15" y="38" width="45" height="16" rx="3" fill="#1e293b"/><text class="svg-muted" x="37" y="49" fill="#94a3b8" font-size="6" text-anchor="middle">Fungsi IT</text>
    <rect class="svg-subcard" x="15" y="60" width="45" height="16" rx="3" fill="#1e293b"/><text class="svg-muted" x="37" y="71" fill="#94a3b8" font-size="6" text-anchor="middle">Fungsi SDM</text>
    <rect class="svg-subcard" x="75" y="38" width="70" height="38" rx="4" fill="#1e293b" stroke="#fbbf24"/><text class="text-accent-amber" x="110" y="55" fill="#fbbf24" font-size="6.5" font-weight="700" text-anchor="middle">Dual Authority</text><text class="svg-text" x="110" y="66" fill="#cbd5e1" font-size="6" text-anchor="middle">Komando Ganda</text>
    <text class="svg-text" x="12" y="110" fill="#cbd5e1" font-size="7.5" font-weight="700">Basis:</text>
    <text class="svg-muted" x="12" y="124" fill="#94a3b8" font-size="7.5">Simultan Fungsi &amp; Produk</text>
    <text class="text-accent-green" x="12" y="146" fill="#34d399" font-size="7.5" font-weight="700">Keunggulan:</text>
    <text class="svg-text" x="12" y="160" fill="#cbd5e1" font-size="7.5">• Optimalisasi SDM ahli</text>
    <text class="svg-text" x="12" y="174" fill="#cbd5e1" font-size="7.5">• Fleksibilitas proyek</text>
    <text class="text-accent-red" x="12" y="196" fill="#f87171" font-size="7.5" font-weight="700">Kelemahan:</text>
    <text class="svg-text" x="12" y="210" fill="#cbd5e1" font-size="7.5">• Perebutan wewenang 2 bos</text>
    <text class="svg-text" x="12" y="224" fill="#cbd5e1" font-size="7.5">• Frustrasi &amp; stres staf</text>
  </g>

  <!-- 4. TEAM-BASED -->
  <g transform="translate(540, 75)">
    <rect class="svg-card" x="0" y="0" width="160" height="255" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect class="svg-badge-purple" x="0" y="0" width="160" height="28" rx="10" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="80" y="19" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">4. TEAM-BASED</text>
    <circle cx="50" cy="55" r="16" fill="#1e293b" stroke="#a78bfa"/>
    <text class="text-accent-purple" x="50" y="58" fill="#a78bfa" font-size="6.5" font-weight="700" text-anchor="middle">Squad 1</text>
    <circle cx="110" cy="55" r="16" fill="#1e293b" stroke="#a78bfa"/>
    <text class="text-accent-purple" x="110" y="58" fill="#a78bfa" font-size="6.5" font-weight="700" text-anchor="middle">Squad 2</text>
    <line x1="66" y1="55" x2="94" y2="55" stroke="#a78bfa" stroke-dasharray="2 2"/>
    <text class="svg-text" x="12" y="110" fill="#cbd5e1" font-size="7.5" font-weight="700">Basis:</text>
    <text class="svg-muted" x="12" y="124" fill="#94a3b8" font-size="7.5">Tim otonom lintas-fungsi</text>
    <text class="text-accent-green" x="12" y="146" fill="#34d399" font-size="7.5" font-weight="700">Keunggulan:</text>
    <text class="svg-text" x="12" y="160" fill="#cbd5e1" font-size="7.5">• Runtuhkan sekat seksi</text>
    <text class="svg-text" x="12" y="174" fill="#cbd5e1" font-size="7.5">• Kecepatan adaptasi tinggi</text>
    <text class="text-accent-red" x="12" y="196" fill="#f87171" font-size="7.5" font-weight="700">Kelemahan:</text>
    <text class="svg-text" x="12" y="210" fill="#cbd5e1" font-size="7.5">• Konflik loyalitas ganda</text>
    <text class="svg-text" x="12" y="224" fill="#cbd5e1" font-size="7.5">• Butuh banyak rapat</text>
  </g>

  <!-- 5. VIRTUAL NETWORK -->
  <g transform="translate(710, 75)">
    <rect class="svg-card" x="0" y="0" width="160" height="255" rx="10" fill="#0f172a" stroke="#f472b6" stroke-width="1.5"/>
    <rect x="0" y="0" width="160" height="28" rx="10" fill="#db2777" fill-opacity="0.2"/>
    <text x="80" y="19" fill="#f472b6" font-size="10" font-weight="800" text-anchor="middle">5. VIRTUAL NETWORK</text>
    <circle cx="80" cy="55" r="16" fill="#db2777" fill-opacity="0.3" stroke="#f472b6"/>
    <text x="80" y="58" fill="#f472b6" font-size="6.5" font-weight="800" text-anchor="middle">HUB</text>
    <circle cx="28" cy="40" r="10" fill="#1e293b"/><text class="svg-muted" x="28" y="43" fill="#94a3b8" font-size="5" text-anchor="middle">R&amp;D</text>
    <circle cx="132" cy="40" r="10" fill="#1e293b"/><text class="svg-muted" x="132" y="43" fill="#94a3b8" font-size="5" text-anchor="middle">Pabrik</text>
    <circle cx="80" cy="85" r="10" fill="#1e293b"/><text class="svg-muted" x="80" y="88" fill="#94a3b8" font-size="5" text-anchor="middle">Sales</text>
    <line x1="38" y1="45" x2="65" y2="52" stroke="#334155"/>
    <line x1="122" y1="45" x2="95" y2="52" stroke="#334155"/>
    <line x1="80" y1="71" x2="80" y2="75" stroke="#334155"/>
    <text class="svg-text" x="12" y="110" fill="#cbd5e1" font-size="7.5" font-weight="700">Basis:</text>
    <text class="svg-muted" x="12" y="124" fill="#94a3b8" font-size="7.5">Outsource ke mitra global</text>
    <text class="text-accent-green" x="12" y="146" fill="#34d399" font-size="7.5" font-weight="700">Keunggulan:</text>
    <text class="svg-text" x="12" y="160" fill="#cbd5e1" font-size="7.5">• Sangat ramping &amp; lincah</text>
    <text class="svg-text" x="12" y="174" fill="#cbd5e1" font-size="7.5">• Biaya modal tetap minimal</text>
    <text class="text-accent-red" x="12" y="196" fill="#f87171" font-size="7.5" font-weight="700">Kelemahan:</text>
    <text class="svg-text" x="12" y="210" fill="#cbd5e1" font-size="7.5">• Kontrol kualitas rapuh</text>
    <text class="svg-text" x="12" y="224" fill="#cbd5e1" font-size="7.5">• Risiko rahasia bocor</text>
  </g>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Designing Adaptive Organization Structure: Rentang Kendali & Departementalisasi',
  ref: 'Richard L. Daft Bab 10 & 11 | Desain Organisasi Mekanistik vs Organik | Rantai Komando & Wewenang',
  intro: 'TM 7 membahas seni perancangan struktur organisasi (Organizing) untuk mengoptimalkan koordinasi kerja: dimensi struktural vertikal (Rantai Komando, Kesatuan Komando / Unity of Command, Rentang Kendali / Span of Control, Sentralisasi vs Desentralisasi), 5 pendekatan departementalisasi (Struktur Fungsional, Divisional, Matriks, Berbasis Tim, dan Jaringan Virtual / Virtual Network), serta perbandingan Kontinjensi Organisasi Mekanistik vs Organik.',
  objectives: [
    'Menganalisis keterkaitan antara rentang kendali (Span of Control) dengan struktur tinggi (Tall) vs datar (Flat).',
    'Membandingkan keunggulan dan kelemahan 5 pendekatan departementalisasi organisasi.',
    'Menjelaskan fenomena kesatuan komando ganda (Dual Authority) dan manajemen konflik pada Struktur Matriks.',
    'Menentukan pilihan struktur Mekanistik vs Organik berdasarkan ketidakpastian lingkungan dan strategi bersaing.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 7.1: Lima Desain Struktur Organisasi Utama: Fungsional, Divisional, Matriks, Tim, dan Virtual Network.',
      svg: SVG_ORG_STRUCTURES
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 7'
    },
    {
      kind: 'table',
      headers: ['Dimensi Struktur', 'Struktur Mekanistik (Mekanistis)', 'Struktur Organik (Organis)', 'Kondisi Lingkungan yang Sesuai'],
      rows: [
        ['Hierarki Wewenang', 'Sentralisasi kaku di puncak kepemimpinan.', 'Desentralisasi luas ke level staf pelaksana.', 'Mekanistik cocok di lingkungan stabil; Organik di lingkungan dinamis.'],
        ['Rentang Kendali', 'Sempit (Narrow), membentuk struktur tinggi (Tall).', 'Melebar (Wide), membentuk struktur datar (Flat).', 'Flat mempercepat aliran komunikasi dan memangkas biaya gaji manajerial.'],
        ['Spesialisasi Kerja', 'Tinggi dan terkotak-kotak (Silo Spesialisasi).', 'Fleksibel dan berbasis tim lintas fungsi (Cross-Functional).', 'Organik mendukung inovasi dan eksperimen produk baru.'],
        ['Aturan & Prosedur', 'Banyak aturan formal tertulis (SOP kaku).', 'Sedikit aturan formal, mengandalkan nilai budaya bersama.', 'Mekanistik meminimalkan kesalahan; Organik memaksimalkan adaptasi.']
      ],
      caption: 'Tabel 7.0: Perbandingan arsitektur struktur mekanistik vs organik.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 5 Pendekatan Departementalisasi'
    },
    {
      kind: 'table',
      headers: ['Desain Struktur', 'Dasar Pengelompokan Kerja', 'Keunggulan Utama', 'Kelemahan Kritis'],
      rows: [
        ['Fungsional', 'Berdasarkan kesamaan keahlian fungsi (Produksi, Akuntansi, SDM).', 'Efisiensi skala ekonomis maksimal dalam departemen.', 'Koordinasi antar-fungsi sangat buruk (Silo Mentality).'],
        ['Divisional', 'Berdasarkan kesamaan output produk, segmen konsumen, atau geografis.', 'Respon cepat dan fleksibel terhadap dinamika pasar produk.', 'Duplikasi biaya aset dan staf pendukung antar-divisi.'],
        ['Matriks', 'Kombinasi simultan antara fungsi fungsional dan divisi produk.', 'Penggunaan SDM ahli lintas proyek yang sangat optimal.', 'Rantai komando ganda memicu kebingungan dan perebutan kekuasaan.'],
        ['Berbasis Tim', 'Tim permanen atau temporer lintas fungsi yang memiliki otonomi.', 'Mendobrak sekat departemen, komitmen dan moral staf tinggi.', 'Konflik loyalitas antara tim proyek vs departemen asal.'],
        ['Virtual Network', 'Fungsi inti kecil di pusat meng-outsource fungsi lain ke mitra global.', 'Sangat ramping, fleksibilitas biaya tetap yang minimal.', 'Kontrol kualitas rapuh dan rentan kehilangan keahlian inti.']
      ],
      caption: 'Tabel 7.1: Analisis komparatif 5 desain departementalisasi organisasi.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Dilema Kesatuan Komando pada Struktur Matriks',
      prompt: 'Seorang insinyur perangkat lunak di perusahaan teknologi ditugaskan dalam proyek pembuatan aplikasi e-wallet baru. Ia menerima dua perintah bertentangan pada hari yang sama: Manajer Fungsional IT memerintahkannya menulis dokumentasi kode lengkap (memakan waktu 1 minggu), sedangkan Manajer Proyek Produk memerintahkannya segera merilis aplikasi besok pagi (memotong dokumentasi). Prinsip manajemen apa yang dilanggar dan bagaimana solusinya?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Prinsip yang Dilanggar**: Melanggar prinsip klasik **Kesatuan Komando (Unity of Command)** Fayol, yang menyatakan bahwa seorang bawahan seharusnya hanya menerima perintah dari SATU orang atasan langsung.',
            '**Karakteristik Struktur Matriks**: Struktur Matriks sengaja menerapkan **Komando Ganda (Dual-Authority System)** untuk menyeimbangkan keandalan teknis (Manajer Fungsional) dan kecepatan rilis pasar (Manajer Produk).',
            '**Solusi Manajerial**: Manajer Fungsional dan Manajer Produk harus duduk bersama dalam forum koordinasi untuk menyepakati kompromi prioritas. Pemimpin puncak harus memfasilitasi budaya kolaboratif di mana negosiasi wewenang diselesaikan secara konstruktif tanpa menjadikan staf sebagai korban tarik-menarik kekuasaan.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 7'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Dimensi Struktural Vertikal', 'Rantai komando, span of control, dan struktur tall vs flat.', 'Mampu menghitung tingkatan hierarki dan rentang kendali.'],
        ['2', '5 Desain Departementalisasi', 'Karakteristik fungsional, divisional, matriks, tim, dan virtual network.', 'Mampu merekomendasikan bagan struktur organisasi yang tepat.'],
        ['3', 'Kontinjensi Desain Organisasi', 'Pengaruh strategi diferensiasi vs cost leadership pada struktur.', 'Mampu mencocokkan struktur mekanistik vs organik dengan kondisi bisnis.']
      ],
      caption: 'Tabel 7.2: Peta penguasaan submateri TM 7 Pengantar Manajemen.'
    },
    CASE_ORG_STRUCTURE_ADAPTIVE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Struktur Mengikuti Strategi (Structure Follows Strategy)**: Doktrin Alfred Chandler menegaskan bahwa struktur organisasi harus dirancang untuk melayani strategi korporasi, bukan sebaliknya.',
        '**Tren Organisasi Menuju Flat**: Kemajuan teknologi komunikasi dan tim swakelola (Self-Managed Teams) mendorong perusahaan memangkas lapisan manajemen menengah untuk mempercepat keputusan.',
        '**Silo Mentality Mematikan Kolaborasi**: Bahaya terbesar struktur fungsional murni adalah munculnya dinding ego antar-departemen yang melupakan kepentingan kepuasan pelanggan akhir.'
      ]
    }
  ]
};
