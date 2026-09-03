import type { Reading } from '../../../types';
import { CASE_AMBIDEXTROUS_ORGANIZATIONAL_DESIGN } from '../manstratPracticeCases';

const SVG_AMBIDEXTROUS_DESIGN = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="topExecGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="ventGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns7)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">DESAIN ORGANISASI AMBIDEXTROUS: EKSPLOITASI VS EKSPLORASI (O'REILLY &amp; TUSHMAN)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">AMBIDEXTROUS</text>

  <!-- Top: Executive Management Integrator -->
  <g transform="translate(250, 68)">
    <rect class="svg-card" x="0" y="0" width="400" height="48" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
    <rect x="0" y="0" width="400" height="20" rx="10" fill="url(#topExecGrad)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="200" y="16" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">KEPEMIMPINAN EKSEKUTIF SENIOR (INTEGRATOR KORPORASI)</text>
    <text class="svg-text" x="200" y="36" fill="#cbd5e1" font-size="8" text-anchor="middle">Mengalokasikan kas hasil eksploitasi bisnis inti untuk mendanai unit eksplorasi radikal</text>
  </g>

  <!-- Connector Lines to Left and Right Units -->
  <line x1="330" y1="116" x2="230" y2="140" stroke="#38bdf8" stroke-width="2"/>
  <line x1="570" y1="116" x2="670" y2="140" stroke="#a78bfa" stroke-width="2"/>

  <!-- Left: Core Business (Eksploitasi) -->
  <g transform="translate(35, 140)">
    <rect class="svg-card" x="0" y="0" width="395" height="175" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="28" rx="12" fill="url(#coreGrad)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="16" y="19" fill="#38bdf8" font-size="11" font-weight="800">SAYAP KIRI: CORE BUSINESS (EKSPLOITASI)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Target: Efisiensi biaya, produktivitas, laba kuartalan</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Tipe Inovasi: Bertahap / Inkremental (Penyempurnaan produk)</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Budaya: Disiplin, patuh SOP, minim kesalahan operasional</text>
    <text class="svg-text" x="16" y="102" fill="#cbd5e1" font-size="8.5">• Struktur: Mekanistik, hierarki ketat, koordinasi formal</text>
    <rect class="svg-badge-blue" x="16" y="138" width="363" height="24" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="154" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Mesin Penghasil Arus Kas Saat Ini (Cash Generator)</text>
  </g>

  <!-- Right: Venture Unit (Eksplorasi) -->
  <g transform="translate(470, 140)">
    <rect class="svg-card" x="0" y="0" width="395" height="175" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="28" rx="12" fill="url(#ventGrad)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="16" y="19" fill="#a78bfa" font-size="11" font-weight="800">SAYAP KANAN: VENTURE UNIT (EKSPLORASI)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Target: Model bisnis baru, teknologi terobosan masa depan</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Tipe Inovasi: Radikal / Disruptif (Mengguncang industri)</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Budaya: Fleksibel, otonom, toleran terhadap kegagalan eksperimen</text>
    <text class="svg-text" x="16" y="102" fill="#cbd5e1" font-size="8.5">• Struktur: Organik, unit otonom terpisah (Skunkworks squad)</text>
    <rect class="svg-badge-purple" x="16" y="138" width="363" height="24" rx="6" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="197" y="154" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">Pencipta Keunggulan Hidup Jangka Panjang Korporasi</text>
  </g>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Organizational Design, Strategic Leadership, & Corporate Entrepreneurship',
  ref: 'Dess et al. Bab 10, 11, & 12 | OReilly & Tushman Ambidextrous Organization | Strategic Leadership & Ethics',
  intro: 'TM 7 membahas penyelarasan desain struktur organisasi dengan kepemimpinan strategis dan kewirausahaan korporasi: arsitektur Desain Organisasi Ambidextrous (Ambidextrous Organizational Design yang memfasilitasi eksploitasi dan eksplorasi secara simultan), 3 aktivitas kunci kepemimpinan strategis (Menetapkan Arah Strategis, Mendesain Organisasi, dan Memupuk Budaya Beretika), mengatasi hambatan perubahan organisasi, serta instrumen Kewirausahaan Korporasi (Corporate Entrepreneurship: Corporate Venture Capital dan Inkubator Bisnis).',
  objectives: [
    'Menganalisis arsitektur Organisasi Ambidextrous dalam menyeimbangkan eksploitasi bisnis inti vs eksplorasi ide disruptif.',
    'Menjelaskan 3 pilar aktivitas kepemimpinan strategis: Menetapkan Arah, Merancang Organisasi, Memupuk Budaya Etis.',
    'Mengidentifikasi dan mengatasi 5 hambatan kepemimpinan terhadap perubahan strategis (Vested Interest, Political Barriers).',
    'Menerapkan instrumen Corporate Entrepreneurship: New Venture Groups, Business Incubators, dan Corporate Venture Capital.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 7.1: Desain Organisasi Ambidextrous dalam Menyeimbangkan Eksploitasi Efisiensi dan Eksplorasi Inovasi.',
      svg: SVG_AMBIDEXTROUS_DESIGN
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 7'
    },
    {
      kind: 'table',
      headers: ['Aktivitas Kepemimpinan Strategis', 'Tanggung Jawab Eksekutif Kunci', 'Output Nyata bagi Korporasi', 'Tantangan Terberat'],
      rows: [
        ['1. Menetapkan Arah Strategis (Setting Direction)', 'Merumuskan visi masa depan yang memikat, peta jalan transformasi, dan sasaran jangka panjang.', 'Visi bersama yang menyatukan ribuan karyawan di semua level.', 'Mengatasi pandangan sempit (tunnel vision) para manajer divisi.'],
        ['2. Merancang Organisasi (Designing Organization)', 'Membangun struktur yang memfasilitasi kolaborasi lintas divisi dan alokasi sumber daya.', 'Struktur ambidextrous yang memisahkan eksplorasi namun tetap terintegrasi.', 'Resistensi dari manajer bisnis lama yang takut kehilangan anggaran modal.'],
        ['3. Memupuk Budaya Beretika (Nurturing Ethical Culture)', 'Menjadi teladan moral, membuat kode etik tegas, dan melindungi pelapor pelanggaran (whistleblower).', 'Integritas korporasi, kepatuhan tata kelola, dan kepercayaan pemangku kepentingan.', 'Godaan memanipulasi kinerja keuangan jangka pendek demi bonus direksi.']
      ],
      caption: 'Tabel 7.0: Tiga pilar aktivitas kepemimpinan strategis Dess et al.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 5 Hambatan Kepemimpinan Terhadap Perubahan Strategis'
    },
    {
      kind: 'table',
      headers: ['Jenis Hambatan Perubahan', 'Akar Penyebab Hambatan', 'Strategi Kepemimpinan untuk Mengatasi'],
      rows: [
        ['Vested Interests in the Status Quo', 'Manajer senior merasa nyaman dengan kekuasaan dan gaji dari sistem bisnis lama.', 'Menghubungkan bonus insentif masa depan dengan keberhasilan adopsi strategi baru.'],
        ['Systemic Barriers', 'Struktur organisasi dan sistem pelaporan yang terlalu birokratis dan kaku.', 'Membentuk tim proyek lintas fungsi mandiri (Agile Squads) di luar rantai komando biasa.'],
        ['Behavioral Barriers', 'Karyawan terbiasa memandang masalah dari perspektif fungsional sempit (silo mentality).', 'Melakukan rotasi kepemimpinan lintas departemen dan pelatihan holistik.'],
        ['Political Barriers', 'Perebutan kekuasaan dan persaingan pengaruh antar faksi eksekutif puncak.', 'Membangun koalisi kepemimpinan baru yang berkomitmen pada transformasi korporasi.'],
        ['Personal Time Constraints', 'Para pemimpin terlalu sibuk memadamkan api masalah operasional harian hingga lupa berpikir strategis.', 'Mendelegasikan wewenang operasional agar pimpinan memiliki waktu memikirkan visi masa depan.']
      ],
      caption: 'Tabel 7.1: Hambatan kepemimpinan strategis dalam transformasi.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Dilema Inovasi Disruptif dalam Struktur Konvensional',
      prompt: 'Sebuah konglomerasi media cetak mencoba mengembangkan divisi media daring digital di dalam departemen koran konvensional yang sama. Para jurnalis senior menolak menulis artikel untuk platform online karena dianggap "berita murahan dan tidak bermutu", sehingga divisi digital mati suri. Bagaimana solusi desain organisasi ambidextrous menurut OReilly & Tushman?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Akar Kegagalan**: Memaksakan unit eksplorasi digital baru berada di bawah hierarki dan budaya bisnis cetak lama yang kaku (*structural entrapment*).',
            '**Solusi Desain Ambidextrous**: Manajemen harus **memisahkan unit media digital secara struktural**: mendirikan entitas anak perusahaan baru di gedung berbeda, merekrut talenta muda dengan budaya digital lincah, serta menetapkan KPI berbasis *pageviews* dan *engagement*, bukan oplah cetak.',
            '**Integrasi di Puncak**: Kedua unit bisnis tetap terhubung di tingkat direksi holding korporasi untuk memanfaatkan kekuatan merek dan arsip berita bersama.'
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
        ['1', 'Desain Organisasi Ambidextrous', 'Pemisahan struktural eksploitasi vs eksplorasi dan integrasi kepemimpinan.', 'Mampu mendesain arsitektur organisasi inovatif.'],
        ['2', '3 Pilar Kepemimpinan Strategis', 'Penetapan arah, perancangan struktur, dan pembentukan budaya beretika.', 'Mampu menguraikan agenda strategis pemimpin transformasi.'],
        ['3', 'Corporate Entrepreneurship', 'Inkubator bisnis, CVC, dan penanganan hambatan politik perubahan.', 'Mampu merancang ekosistem kewirausahaan di dalam korporasi besar.']
      ],
      caption: 'Tabel 7.2: Peta penguasaan submateri TM 7 Manajemen Strategik.'
    },
    CASE_AMBIDEXTROUS_ORGANIZATIONAL_DESIGN,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Pemimpin Menolak Status Quo**: Tugas paling penting dari seorang pemimpin strategis bukanlah menjaga kenyamanan operasional yang ada, melainkan terus menggugah organisasi agar tidak terlena oleh kesuksesan masa lalu.',
        '**Ambidextrous Menghubungkan Dua Dunia**: Perusahaan yang sukses bertahan melintasi abad adalah yang mampu mengoperasikan dua mesin sekaligus: mesin efisiensi hari ini dan mesin penemuan masa depan.',
        '**Etika Dimulai dari Keteladanan Puncak (Tone at the Top)**: Karyawan memperhatikan apa yang dilakukan para pemimpin di ruang tertutup, bukan apa yang mereka katakan di panggung pidato.'
      ]
    }
  ]
};
