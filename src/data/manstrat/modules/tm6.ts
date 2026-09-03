import type { Reading } from '../../../types';
import { CASE_GOVERNANCE_AGENCY_CONTROL } from '../manstratPracticeCases';

const SVG_STRATEGIC_CONTROL = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="infoGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="behGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns6)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">ARSITEKTUR PENGENDALIAN STRATEGIK &amp; TATA KELOLA KORPORASI (DESS)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">STRATEGIC CONTROL</text>

  <!-- Left: Dual-Loop Control Structure (Width 400px) -->
  <g transform="translate(35, 75)">
    <!-- 1. Informational Control -->
    <rect class="svg-card" x="0" y="0" width="395" height="115" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="26" rx="10" fill="url(#infoGrad)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="18" fill="#38bdf8" font-size="10" font-weight="800">1. INFORMATIONAL CONTROL ("DOING THE RIGHT THINGS")</text>
    <text class="svg-text" x="14" y="44" fill="#cbd5e1" font-size="8">• Memindai lingkungan eksternal &amp; menguji asumsi strategis</text>
    <text class="svg-text" x="14" y="60" fill="#cbd5e1" font-size="8">• Sistem peringatan dini (Early Warning System) disrupsi pasar</text>
    <text class="svg-text" x="14" y="76" fill="#cbd5e1" font-size="8">• Umpan balik real-time: "Apakah strategi kita masih relevan?"</text>
    <rect class="svg-badge-blue" x="14" y="88" width="367" height="18" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="100" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Kemampuan Adaptasi Terhadap Perubahan Eksternal</text>

    <!-- 2. Behavioral Control -->
    <rect class="svg-card" x="0" y="130" width="395" height="120" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="130" width="395" height="26" rx="10" fill="url(#behGrad)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="14" y="148" fill="#a78bfa" font-size="10" font-weight="800">2. BEHAVIORAL CONTROL ("DOING THINGS RIGHT")</text>
    <text class="svg-text" x="14" y="174" fill="#cbd5e1" font-size="8">• Mempengaruhi tindakan staf agar selaras dengan sasaran korporasi</text>
    <text class="svg-text" x="14" y="190" fill="#cbd5e1" font-size="8">• Menyelaraskan kepentingan manajemen &amp; pemegang saham (Agency)</text>
    <text class="svg-text" x="14" y="206" fill="#cbd5e1" font-size="8">• Menggunakan 3 pilar: Budaya, Sistem Imbalan, &amp; Batasan Regulasi</text>
    <rect class="svg-badge-purple" x="14" y="222" width="367" height="18" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="197" y="234" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Eksekusi Disiplin &amp; Integritas Perilaku Internal</text>
  </g>

  <!-- Right: The Behavioral Control Triangle -->
  <g transform="translate(465, 75)">
    <rect class="svg-card" x="0" y="0" width="400" height="245" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
    <text class="text-accent-green" x="200" y="24" fill="#34d399" font-size="11" font-weight="800" text-anchor="middle">SEGITIGA PENGENDALIAN PERILAKU (BEHAVIORAL TRIANGLE)</text>

    <!-- Pillar 1: Culture (Top) -->
    <g transform="translate(100, 40)">
      <rect class="svg-subcard" x="0" y="0" width="200" height="50" rx="8" fill="#1e293b" stroke="#34d399"/>
      <text class="text-accent-green" x="100" y="18" fill="#34d399" font-size="9" font-weight="800" text-anchor="middle">1. BUDAYA (CULTURE)</text>
      <text class="svg-text" x="100" y="32" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Norma tak tertulis, nilai bersama,</text>
      <text class="svg-text" x="100" y="44" fill="#cbd5e1" font-size="7.5" text-anchor="middle">identitas &amp; rasa kepemilikan tim</text>
    </g>

    <!-- Pillar 2: Rewards (Bottom Left) -->
    <g transform="translate(20, 150)">
      <rect class="svg-subcard" x="0" y="0" width="165" height="55" rx="8" fill="#1e293b" stroke="#fbbf24"/>
      <text class="text-accent-amber" x="82" y="18" fill="#fbbf24" font-size="9" font-weight="800" text-anchor="middle">2. IMBALAN (REWARDS)</text>
      <text class="svg-text" x="82" y="32" fill="#cbd5e1" font-size="7" text-anchor="middle">Bonus KPI, kenaikan gaji,</text>
      <text class="svg-text" x="82" y="44" fill="#cbd5e1" font-size="7" text-anchor="middle">insentif saham (ESOP)</text>
    </g>

    <!-- Pillar 3: Boundaries (Bottom Right) -->
    <g transform="translate(215, 150)">
      <rect class="svg-subcard" x="0" y="0" width="165" height="55" rx="8" fill="#1e293b" stroke="#f87171"/>
      <text class="text-accent-red" x="82" y="18" fill="#f87171" font-size="9" font-weight="800" text-anchor="middle">3. BATASAN (BOUNDARIES)</text>
      <text class="svg-text" x="82" y="32" fill="#cbd5e1" font-size="7" text-anchor="middle">Kode etik, pagu anggaran,</text>
      <text class="svg-text" x="82" y="44" fill="#cbd5e1" font-size="7" text-anchor="middle">SOP &amp; aturan kepatuhan hukum</text>
    </g>

    <!-- Connective Triangle Lines -->
    <line x1="160" y1="90" x2="105" y2="150" stroke="#34d399" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="240" y1="90" x2="295" y2="150" stroke="#34d399" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="185" y1="177" x2="215" y2="177" stroke="#34d399" stroke-width="1.5" stroke-dasharray="3 3"/>

    <text class="svg-muted" x="200" y="228" fill="#94a3b8" font-size="7.5" font-style="italic" text-anchor="middle">Kombinasi harmonis ketiganya meminimalkan perilaku oportunistik manajemen.</text>
  </g>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Entrepreneurial Strategy, Strategic Control, & Corporate Governance',
  ref: 'Dess et al. Bab 8 & 9 | Agency Theory (Jensen & Meckling) | Informational vs Behavioral Control',
  intro: 'TM 6 membahas strategi kewirausahaan, sistem pengendalian strategik terpadu, dan tata kelola perusahaan (Corporate Governance): strategi masuk wirausaha baru (Pioneering, Imitative, Adaptive Entry), pergeseran dari pengendalian tradisional menuju Pengendalian Kontemporer (Informational Control vs Behavioral Control yang ditopang oleh Budaya, Penghargaan, dan Batasan), Teori Keagenan (Agency Theory), serta mekanisme tata kelola internal (Dewan Komisaris, Pemegang Saham Pengendali) dan eksternal (Market for Corporate Control, Auditor, Regulator).',
  objectives: [
    'Menjelaskan 3 strategi masuk wirausaha baru: Pioneering Entry, Imitative Entry, dan Adaptive Entry.',
    'Membedakan peran Pengendalian Informasi (Informational Control) vs Pengendalian Perilaku (Behavioral Control).',
    'Menganalisis 3 tuas Pengendalian Perilaku: Budaya Organisasi, Sistem Penghargaan (Rewards), dan Batasan Aturan (Boundaries).',
    'Menganalisis Teori Keagenan (Agency Problem) dan mekanisme tata kelola perusahaan internal vs eksternal.',
    'Mengevaluasi peran Dewan Komisaris Independen dalam memantau keputusan manajerial direksi.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 6.1: Sistem Pengendalian Kontemporer dan Mekanisme Tata Kelola Korporasi.',
      svg: SVG_STRATEGIC_CONTROL
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 6'
    },
    {
      kind: 'table',
      headers: ['Tuas Pengendalian Perilaku', 'Fungsi Strategis dalam Organisasi', 'Kondisi Paling Efektif Diterapkan', 'Kelemahan jika Berlebihan'],
      rows: [
        ['Budaya Perusahaan (Culture)', 'Menanamkan norma nilai bersama yang diinternalisasi ke dalam hati karyawan.', 'Pada organisasi berbasis inovasi, profesional otonom, dan startup.', 'Rentan menimbulkan kultus tertutup yang menolak pandangan luar.'],
        ['Sistem Penghargaan (Rewards)', 'Menyelaraskan insentif pribadi dengan pencapaian sasaran strategis korporasi.', 'Ketika hasil kerja dapat diukur secara kuantitatif dan objektif.', 'Bisa memicu kecurangan (gaming the system) demi mengejar bonus.'],
        ['Batasan & Aturan (Boundaries)', 'Menetapkan rambu-rambu SOP, kuota pengeluaran, dan aturan kepatuhan legal.', 'Pada industri berisiko tinggi (perbankan, penerbangan, farmasi).', 'Membunuh kreativitas staf dan menciptakan birokrasi lambat.']
      ],
      caption: 'Tabel 6.0: Matriks 3 pilar pengendalian perilaku organisasi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Mekanisme Tata Kelola Perusahaan (Corporate Governance)'
    },
    {
      kind: 'table',
      headers: ['Mekanisme Tata Kelola', 'Komponen Mekanisme Kunci', 'Cara Kerja Menyelaraskan Kepentingan'],
      rows: [
        ['Mekanisme Internal', 'Dewan Komisaris Independen (Board of Directors)', 'Memiliki hak veto atas keputusan belanja modal besar direksi dan mengevaluasi kinerja CEO.'],
        ['Mekanisme Internal', 'Skema Remunerasi Saham (Stock Options / ESOP)', 'Mengikat kekayaan pribadi CEO dengan apresiasi harga saham jangka panjang perusahaan.'],
        ['Mekanisme Internal', 'Aktivisme Pemegang Saham (Shareholder Activism)', 'Investor institusional (Dana Pensiun, Reksadana) menggunakan hak suara RUPS untuk mengganti direksi yang buruk.'],
        ['Mekanisme Eksternal', 'Pasar Kendali Korporasi (Market for Corporate Control)', 'Ancaman pengambilalihan paksa (Hostile Takeover) oleh korporasi lain jika saham undervalued akibat salah urus.'],
        ['Mekanisme Eksternal', 'Auditor Eksternal & Lembaga Pemeringkat', 'Memastikan transparansi laporan keuangan dan mencegah manipulasi akuntansi.']
      ],
      caption: 'Tabel 6.1: Mekanisme tata kelola internal dan eksternal.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Masalah Keagenan pada Penggunaan Jet Pribadi Direksi',
      prompt: 'CEO sebuah perusahaan terbuka membeli jet pribadi mewah senilai Rp 500 Miliar menggunakan kas perusahaan dengan alasan "efisiensi mobilitas direksi", padahal 90% waktu terbangnya digunakan untuk liburan keluarga. Bagaimana Teori Keagenan menjelaskan fenomena ini dan mekanisme tata kelola apa yang gagal?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Penjelasan Teori Keagenan (Agency Problem)**: Terjadi *Perquisite Consumption* (konsumsi kenikmatan pribadi oleh agen dengan membebankan biaya kepada prinsipal/pemegang saham). CEO mengejar status dan kemewahan pribadi yang merusak laba investor.',
            '**Kegagalan Tata Kelola Internal**: Dewan Komisaris (Board of Commissioners) dan Komite Audit gagal menjalankan fungsi pengawasan independen (*monitoring failure*); kemungkinan besar karena Dewan Komisaris diisi oleh kroni CEO tanpa kompetensi independen.',
            '**Solusi Tata Kelola**: Pemegang saham institusional dalam RUPS harus menuntut pembatalan pembelian jet, mencopot dewan komisaris yang lalai, serta menetapkan batas wewenang belanja modal diskresioner CEO secara ketat.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 6'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Strategi Masuk Wirausaha Baru', 'Analisis pioneering, imitative, dan adaptive entry.', 'Mampu merekomendasikan strategi penetrasi pasar startup.'],
        ['2', 'Pengendalian Strategik Modern', 'Pembedaan informational control vs behavioral control (budaya, reward, boundary).', 'Mampu merancang sistem pengendalian strategis korporasi.'],
        ['3', 'Teori Keagenan & Tata Kelola', 'Masalah keagenan, peran dewan komisaris, dan hostile takeover.', 'Mampu mengevaluasi efektivitas tata kelola perusahaan publik.']
      ],
      caption: 'Tabel 6.2: Peta penguasaan submateri TM 6 Manajemen Strategik.'
    },
    CASE_GOVERNANCE_AGENCY_CONTROL,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Informational Control Mempertanyakan Asumsi**: Pengendalian informasi berfokus pada pertanyaan fundamental: "Apakah strategi kita masih tepat?"; bukan sekadar memeriksa kepatuhan anggaran.',
        '**Tiga Tuas Pengendalian Saling Melengkapi**: Budaya yang kuat memberikan arah moral, sistem penghargaan memicu motivasi kinerja, dan batasan aturan kepatuhan mencegah kejahatan penipuan.',
        '**Komisaris Independen Bukan Stempel**: Tanpa keberanian Dewan Komisaris Independen untuk menolak keputusan ekspansi sembrono direksi, tata kelola perusahaan hanya menjadi formalitas di atas kertas.'
      ]
    }
  ]
};
