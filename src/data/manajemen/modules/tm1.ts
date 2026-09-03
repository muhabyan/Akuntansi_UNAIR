import type { Reading } from '../../../types';
import { CASE_POAC_MANAGERIAL_ROLES } from '../manajemenPracticeCases';

const SVG_POAC_SKILLS = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1329"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="planGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="orgGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
    <linearGradient id="actGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <linearGradient id="ctrlGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
    <filter id="cardGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Container Box -->
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="1.5" filter="url(#cardGlow)"/>
  
  <!-- Header Bar -->
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700" letter-spacing="0.5">FUNGSI MANAJEMEN POAC &amp; MODEL PROPORSI KETERAMPILAN MANAJERIAL (KATZ)</text>
  <rect class="svg-badge-blue" x="740" y="21" width="135" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="807" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">INTEGRATED MODEL</text>

  <!-- Divider Line Between POAC and Katz -->
  <line x1="440" y1="70" x2="440" y2="330" stroke="#1e293b" stroke-width="2" stroke-dasharray="4 4"/>

  <!-- ==================== LEFT PANEL: POAC CONTINUOUS CYCLE ==================== -->
  <text class="svg-muted" x="225" y="82" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">SIKLUS MANAJEMEN BERKELANJUTAN (POAC)</text>
  
  <!-- Connecting Track Circle -->
  <circle cx="225" cy="205" r="95" fill="none" stroke="#1e293b" stroke-width="6"/>
  <circle cx="225" cy="205" r="95" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="6 6"/>

  <!-- Center Core: Organizational Goals -->
  <circle cx="225" cy="205" r="38" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
  <text class="text-accent-blue" x="225" y="200" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">TUJUAN</text>
  <text class="svg-text" x="225" y="214" fill="#cbd5e1" font-size="8.5" font-weight="600" text-anchor="middle">ORGANISASI</text>

  <!-- Step 1: PLANNING (Top) -->
  <g transform="translate(225, 110)">
    <rect class="svg-card" x="-70" y="-22" width="140" height="44" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <rect x="-70" y="-22" width="28" height="44" rx="10" fill="url(#planGrad)"/>
    <text x="-56" y="5" fill="#ffffff" font-size="11" font-weight="800" text-anchor="middle">P</text>
    <text class="text-accent-blue" x="2" y="-4" fill="#38bdf8" font-size="9.5" font-weight="700">PLANNING</text>
    <text class="svg-muted" x="2" y="10" fill="#94a3b8" font-size="7.5">Visi, Sasaran, Strategi</text>
  </g>

  <!-- Step 2: ORGANIZING (Right) -->
  <g transform="translate(320, 205)">
    <rect class="svg-card" x="-20" y="-22" width="130" height="44" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <rect x="-20" y="-22" width="28" height="44" rx="10" fill="url(#orgGrad)"/>
    <text x="-6" y="5" fill="#ffffff" font-size="11" font-weight="800" text-anchor="middle">O</text>
    <text class="text-accent-green" x="18" y="-4" fill="#34d399" font-size="9.5" font-weight="700">ORGANIZING</text>
    <text class="svg-muted" x="18" y="10" fill="#94a3b8" font-size="7.5">Struktur &amp; Sumber Daya</text>
  </g>

  <!-- Step 3: ACTUATING / LEADING (Bottom) -->
  <g transform="translate(225, 300)">
    <rect class="svg-card" x="-70" y="-22" width="140" height="44" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
    <rect x="-70" y="-22" width="28" height="44" rx="10" fill="url(#actGrad)"/>
    <text x="-56" y="5" fill="#ffffff" font-size="11" font-weight="800" text-anchor="middle">A</text>
    <text class="text-accent-amber" x="2" y="-4" fill="#fbbf24" font-size="9.5" font-weight="700">ACTUATING</text>
    <text class="svg-muted" x="2" y="10" fill="#94a3b8" font-size="7.5">Motivasi &amp; Memimpin</text>
  </g>

  <!-- Step 4: CONTROLLING (Left) -->
  <g transform="translate(130, 205)">
    <rect class="svg-card" x="-110" y="-22" width="130" height="44" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
    <rect x="-110" y="-22" width="28" height="44" rx="10" fill="url(#ctrlGrad)"/>
    <text x="-96" y="5" fill="#ffffff" font-size="11" font-weight="800" text-anchor="middle">C</text>
    <text class="text-accent-purple" x="-72" y="-4" fill="#a78bfa" font-size="9.5" font-weight="700">CONTROLLING</text>
    <text class="svg-muted" x="-72" y="10" fill="#94a3b8" font-size="7.5">Ukur Kinerja &amp; Koreksi</text>
  </g>

  <!-- Flow Arrows around circle -->
  <path d="M 285 130 Q 315 155 318 175" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M 315 235 Q 295 275 270 285" fill="none" stroke="#34d399" stroke-width="2"/>
  <path d="M 165 285 Q 135 265 132 235" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <path d="M 135 175 Q 155 135 180 128" fill="none" stroke="#a78bfa" stroke-width="2"/>

  <!-- ==================== RIGHT PANEL: KATZ SKILLS DISTRIBUTION ==================== -->
  <text class="svg-muted" x="665" y="82" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">DISTRIBUSI KETERAMPILAN MANAJERIAL (KATZ)</text>

  <!-- Skill Legend -->
  <g transform="translate(470, 96)">
    <rect x="0" y="0" width="12" height="12" rx="3" fill="#38bdf8"/>
    <text class="svg-text" x="18" y="10" fill="#cbd5e1" font-size="8.5" font-weight="600">Konseptual</text>

    <rect x="130" y="0" width="12" height="12" rx="3" fill="#34d399"/>
    <text class="svg-text" x="148" y="10" fill="#cbd5e1" font-size="8.5" font-weight="600">Manusiawi (Human)</text>

    <rect x="280" y="0" width="12" height="12" rx="3" fill="#fbbf24"/>
    <text class="svg-text" x="298" y="10" fill="#cbd5e1" font-size="8.5" font-weight="600">Teknis (Technical)</text>
  </g>

  <!-- Level 1: TOP MANAGEMENT -->
  <g transform="translate(460, 122)">
    <text x="0" y="12" fill="#f8fafc" font-size="10" font-weight="700">TOP MANAGEMENT (Direksi / CEO)</text>
    <text class="text-accent-blue" x="400" y="12" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="end">Fokus Visi Strategis</text>
    <!-- Stacked Bar: 45% Conceptual, 40% Human, 15% Technical (Total 400px width) -->
    <!-- 45% = 180px, 40% = 160px, 15% = 60px -->
    <rect class="svg-subcard" x="0" y="20" width="400" height="26" rx="6" fill="#1e293b"/>
    <rect x="0" y="20" width="180" height="26" rx="6" fill="url(#planGrad)"/>
    <text x="90" y="37" fill="#0f172a" font-size="9" font-weight="800" text-anchor="middle">Konseptual 45%</text>

    <rect x="182" y="20" width="158" height="26" fill="url(#orgGrad)"/>
    <text x="261" y="37" fill="#0f172a" font-size="9" font-weight="800" text-anchor="middle">Manusiawi 40%</text>

    <rect x="342" y="20" width="58" height="26" rx="6" fill="url(#actGrad)"/>
    <text x="371" y="37" fill="#0f172a" font-size="8" font-weight="800" text-anchor="middle">15%</text>
  </g>

  <!-- Level 2: MIDDLE MANAGEMENT -->
  <g transform="translate(460, 192)">
    <text x="0" y="12" fill="#f8fafc" font-size="10" font-weight="700">MIDDLE MANAGEMENT (Kepala Divisi / Manajer)</text>
    <text class="text-accent-green" x="400" y="12" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="end">Jembatan Komunikasi</text>
    <!-- Stacked Bar: 25% Conceptual, 50% Human, 25% Technical -->
    <!-- 25% = 100px, 50% = 200px, 25% = 100px -->
    <rect class="svg-subcard" x="0" y="20" width="400" height="26" rx="6" fill="#1e293b"/>
    <rect x="0" y="20" width="100" height="26" rx="6" fill="url(#planGrad)"/>
    <text x="50" y="37" fill="#0f172a" font-size="9" font-weight="800" text-anchor="middle">25%</text>

    <rect x="102" y="20" width="196" height="26" fill="url(#orgGrad)"/>
    <text x="200" y="37" fill="#0f172a" font-size="9" font-weight="800" text-anchor="middle">Manusiawi 50% (Paling Kritis)</text>

    <rect x="300" y="20" width="100" height="26" rx="6" fill="url(#actGrad)"/>
    <text x="350" y="37" fill="#0f172a" font-size="9" font-weight="800" text-anchor="middle">Teknis 25%</text>
  </g>

  <!-- Level 3: FIRST-LINE MANAGEMENT -->
  <g transform="translate(460, 262)">
    <text x="0" y="12" fill="#f8fafc" font-size="10" font-weight="700">FIRST-LINE (Supervisor / Team Leader)</text>
    <text class="text-accent-amber" x="400" y="12" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="end">Eksekusi Lapangan</text>
    <!-- Stacked Bar: 15% Conceptual, 35% Human, 50% Technical -->
    <!-- 15% = 60px, 35% = 140px, 50% = 200px -->
    <rect class="svg-subcard" x="0" y="20" width="400" height="26" rx="6" fill="#1e293b"/>
    <rect x="0" y="20" width="60" height="26" rx="6" fill="url(#planGrad)"/>
    <text x="30" y="37" fill="#0f172a" font-size="8" font-weight="800" text-anchor="middle">15%</text>

    <rect x="62" y="20" width="136" height="26" fill="url(#orgGrad)"/>
    <text x="130" y="37" fill="#0f172a" font-size="9" font-weight="800" text-anchor="middle">Manusiawi 35%</text>

    <rect x="200" y="20" width="200" height="26" rx="6" fill="url(#actGrad)"/>
    <text x="300" y="37" fill="#0f172a" font-size="9" font-weight="800" text-anchor="middle">Teknis 50% (SOP &amp; Alat)</text>
  </g>

  <!-- Bottom Insight Note -->
  <rect class="svg-subcard" x="460" y="316" width="400" height="22" rx="6" fill="#1e293b" fill-opacity="0.6"/>
  <text class="svg-muted" x="660" y="331" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Keahlian Manusiawi (Human Skills) dibutuhkan konstan di seluruh level manajemen.</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Leading Edge Management: Konsep Dasar, Fungsi POAC, & Peran Manajerial',
  ref: 'Richard L. Daft (Management 13e/14e) Bab 1 | Stephen P. Robbins Bab 1 | Mintzberg Managerial Roles',
  intro: 'TM 1 membahas fondasi esensial ilmu manajemen modern: definisi manajemen sebagai pencapaian tujuan organisasi secara efektif dan efisien melalui integrasi empat fungsi utama POAC (Planning, Organizing, Leading/Actuating, dan Controlling), hierarki keterampilan manajerial menurut Robert L. Katz (Conceptual, Human, dan Technical Skills), serta 10 Peran Manajerial Henry Mintzberg yang terbagi dalam peran Interpersonal, Informasional, dan Pengambilan Keputusan (Decisional).',
  objectives: [
    'Menjelaskan perbedaan mendasar antara Efektivitas (Doing the right things) vs Efisiensi (Doing things right).',
    'Mengintegrasikan 4 fungsi manajemen POAC dalam siklus operasional organisasi modern.',
    'Menganalisis pergeseran proporsi 3 keterampilan manajerial Katz pada level Top, Middle, dan First-line Management.',
    'Mengklasifikasikan 10 peran manajerial Mintzberg ke dalam peran Interpersonal, Informasional, dan Decisional.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Proporsi Tiga Keterampilan Manajerial Katz pada Setiap Tingkatan Manajemen.',
      svg: SVG_POAC_SKILLS
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 1'
    },
    {
      kind: 'table',
      headers: ['Fungsi Manajemen (POAC)', 'Aktivitas Kunci Manajer', 'Output / Hasil yang Diharapkan', 'Kaitan dengan Kinerja'],
      rows: [
        ['Planning (Perencanaan)', 'Menetapkan sasaran masa depan dan menentukan tindakan untuk mencapainya.', 'Rencana strategis, sasaran MBO, dan anggaran operasional.', 'Menjamin arah dan tujuan organisasi jelas (Efektivitas).'],
        ['Organizing (Pengorganisasian)', 'Mengalokasikan sumber daya, mendesain struktur tugas, dan mendelegasikan wewenang.', 'Bagan struktur organisasi, job description, dan rantai komando.', 'Mencegah duplikasi peran dan mengoptimalkan aset (Efisiensi).'],
        ['Leading / Actuating (Kepemimpinan)', 'Memotivasi, berkomunikasi, mengarahkan, dan menginspirasi karyawan.', 'Tingkat keterikatan karyawan (employee engagement) dan budaya kerja positif.', 'Mendorong manusia bekerja melampaui standar minimal.'],
        ['Controlling (Pengendalian)', 'Memantau aktivitas, membandingkan kinerja riil dengan standar, dan koreksi deviasi.', 'Laporan evaluasi kinerja, dashboard analitik, dan tindakan korektif.', 'Memastikan realisasi tidak melenceng dari rencana awal.']
      ],
      caption: 'Tabel 1.0: Matriks integrasi 4 fungsi manajemen POAC.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 10 Peran Manajerial Henry Mintzberg'
    },
    {
      kind: 'table',
      headers: ['Kategori Utama', 'Peran Spesifik', 'Perilaku Kunci Manajer di Lapangan'],
      rows: [
        ['Interpersonal Roles', 'Figurehead (Tokoh Simbolis)', 'Menghadiri seremoni pembukaan kantor, menandatangani dokumen legal resmi.'],
        ['Interpersonal Roles', 'Leader (Pemimpin)', 'Memotivasi, melatih, membimbing, dan memberi teladan kepada bawahan.'],
        ['Interpersonal Roles', 'Liaison (Penghubung)', 'Membangun jaringan kontak eksternal di luar rantai komando vertikal.'],
        ['Informational Roles', 'Monitor (Pemantau)', 'Mengamati tren pasar, membaca laporan intelijen industri, menerima rumor internal.'],
        ['Informational Roles', 'Disseminator (Penyebar)', 'Meneruskan informasi strategis kepada anggota tim yang membutuhkan.'],
        ['Informational Roles', 'Spokesperson (Juru Bicara)', 'Menyampaikan konferensi pers dan presentasi resmi kepada pihak luar.'],
        ['Decisional Roles', 'Entrepreneur (Wirausahawan)', 'Menginisiasi proyek inovasi produk baru dan adaptasi perubahan teknologi.'],
        ['Decisional Roles', 'Disturbance Handler (Peredam Krisis)', 'Menyelesaikan mogok kerja karyawan atau perselisihan antar-divisi.'],
        ['Decisional Roles', 'Resource Allocator (Pengalokasi)', 'Menentukan pembagian anggaran modal, peralatan mesin, dan waktu kerja.'],
        ['Decisional Roles', 'Negotiator (Perunding)', 'Bernegosiasi kontrak dengan serikat pekerja, pemasok, atau mitra merger.']
      ],
      caption: 'Tabel 1.1: Klasifikasi 10 peran manajerial Mintzberg.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Dilema Efektivitas vs Efisiensi Pabrik Otomotif',
      prompt: 'Sebuah pabrik perakitan berhasil memproduksi 10.000 unit mobil dengan biaya sangat murah dan tanpa limbah (efisiensi maksimal). Namun, tipe mobil yang diproduksi adalah sedan bensin manual yang sudah tidak diminati pasar karena konsumen beralih ke mobil listrik (tidak efektif). Apakah manajemen pabrik tersebut berkinerja baik?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Definisi Konseptual (Peter Drucker)**:\n- *Efisiensi*: Melakukan sesuatu dengan benar (*Doing things right*) $\\r→$ Fokus pada input, biaya minimal, dan rasio output/input.\n- *Efektivitas*: Melakukan hal yang benar (*Doing the right things*) $\\r→$ Fokus pada kesesuaian hasil akhir dengan kebutuhan pasar dan tujuan strategis.',
            '**Evaluasi Kasus**: Pabrik tersebut memiliki **Efisiensi Tinggi tetapi Efektivitas Nol**. Memproduksi barang yang salah secara murah dan cepat tetap menghasilkan kerugian finansial karena mobil tersebut menumpuk di gudang tanpa ada pembeli.',
            '**Kesimpulan**: Manajemen berkinerja buruk. Manajemen modern menuntut **Efektivitas terlebih dahulu**, baru kemudian dicapai dengan cara yang paling **Efisien**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 1'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Konsep POAC', 'Definisi, keterkaitan sekuensial, dan implementasi 4 fungsi manajemen.', 'Mampu mengidentifikasi fungsi manajerial pada skenario kasus.'],
        ['2', 'Keterampilan Katz', 'Dinamika kebutuhan keterampilan konseptual, manusiawi, dan teknis pada 3 level.', 'Mampu mendiagnosa defisit keahlian manajerial seorang eksekutif.'],
        ['3', '10 Peran Mintzberg', 'Perbedaan 3 peran interpersonal, 3 informasional, dan 4 decisional.', 'Mampu memetakan tindakan manajer ke dalam peran Mintzberg yang tepat.']
      ],
      caption: 'Tabel 1.2: Peta penguasaan submateri TM 1 Pengantar Manajemen.'
    },
    CASE_POAC_MANAGERIAL_ROLES,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Keahlian Manusiawi Dibutuhkan di Semua Level**: Keterampilan interpersonal (Human Skills) memiliki bobot penting yang konstan dan tinggi di seluruh tingkatan manajemen, dari supervisor hingga CEO.',
        '**Manajer Bukan Individual Contributor**: Transisi tersulit dari staf ahli menjadi manajer pertama kali adalah pergeseran pola pikir: dari menyelesaikan pekerjaan sendiri (*doing*) menjadi mencapai hasil melalui kerja orang lain (*coaching and orchestrating*).',
        '**Sinergi Efektif & Efisien**: Keberhasilan organisasi mensyaratkan pencapaian target yang tepat sasaran (Efektif) dengan konsumsi sumber daya seminimal mungkin (Efisien).'
      ]
    }
  ]
};
