import type { Reading } from '../../../types';
import { CASE_GLOBAL_HOFSTEDE_ENTRY } from '../manajemenPracticeCases';

const SVG_GLOBAL_ENTRY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="expGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="licGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="jvGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="wosGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <linearGradient id="trendArrow" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#38bdf8"/><stop offset="50%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad3)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">SPEKTRUM MODA MASUK PASAR GLOBAL: KENDALI, BIAYA, &amp; RISIKO</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ENTRY SPECTRUM</text>

  <!-- 4 Ascending Cards -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="175" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#expGrad)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="16" y="22" fill="#38bdf8" font-size="11" font-weight="800">1. EKSPOR (EXPORT)</text>
    <text class="svg-muted" x="16" y="52" fill="#94a3b8" font-size="8" font-weight="700">Langsung / Tak Langsung</text>
    <text class="svg-text" x="16" y="74" fill="#cbd5e1" font-size="8">• Biaya investasi: Terendah</text>
    <text class="svg-text" x="16" y="92" fill="#cbd5e1" font-size="8">• Tingkat kendali: Minimal</text>
    <text class="svg-text" x="16" y="110" fill="#cbd5e1" font-size="8">• Risiko modal: Sangat rendah</text>
    <text class="svg-text" x="16" y="128" fill="#cbd5e1" font-size="8">• Hambatan: Bea cukai &amp; tarif</text>
    <rect class="svg-badge-blue" x="16" y="145" width="163" height="20" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="159" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Tahap Awal Penetrasi</text>
  </g>

  <g transform="translate(250, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="175" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#licGrad)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="16" y="22" fill="#34d399" font-size="11" font-weight="800">2. LISENSI &amp; WARALABA</text>
    <text class="svg-muted" x="16" y="52" fill="#94a3b8" font-size="8" font-weight="700">Licensing &amp; Franchising</text>
    <text class="svg-text" x="16" y="74" fill="#cbd5e1" font-size="8">• Menjual hak merek / paten</text>
    <text class="svg-text" x="16" y="92" fill="#cbd5e1" font-size="8">• Pendapatan fee royalti</text>
    <text class="svg-text" x="16" y="110" fill="#cbd5e1" font-size="8">• Risiko mutu mitra lokal</text>
    <text class="svg-text" x="16" y="128" fill="#cbd5e1" font-size="8">• Contoh: McDonald's, Disney</text>
    <rect class="svg-badge-green" x="16" y="145" width="163" height="20" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="159" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Skalabilitas Cepat</text>
  </g>

  <g transform="translate(465, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="175" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#jvGrad)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="16" y="22" fill="#fbbf24" font-size="11" font-weight="800">3. JOINT VENTURE</text>
    <text class="svg-muted" x="16" y="52" fill="#94a3b8" font-size="8" font-weight="700">Kemitraan Strategis</text>
    <text class="svg-text" x="16" y="74" fill="#cbd5e1" font-size="8">• Berbagi modal &amp; risiko (50:50)</text>
    <text class="svg-text" x="16" y="92" fill="#cbd5e1" font-size="8">• Akses jaringan mitra lokal</text>
    <text class="svg-text" x="16" y="110" fill="#cbd5e1" font-size="8">• Rawan friksi manajemen</text>
    <text class="svg-text" x="16" y="128" fill="#cbd5e1" font-size="8">• Kepatuhan aturan negara</text>
    <rect class="svg-badge-amber" x="16" y="145" width="163" height="20" rx="6" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="159" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Sinergi Lokal-Global</text>
  </g>

  <g transform="translate(680, 75)">
    <rect class="svg-card" x="0" y="0" width="185" height="175" rx="12" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="185" height="32" rx="12" fill="url(#wosGrad)" fill-opacity="0.2"/>
    <text class="text-accent-red" x="14" y="22" fill="#f87171" font-size="11" font-weight="800">4. DIRECT SUBSIDIARY</text>
    <text class="svg-muted" x="14" y="52" fill="#94a3b8" font-size="8" font-weight="700">Greenfield / Akuisisi</text>
    <text class="svg-text" x="14" y="74" fill="#cbd5e1" font-size="8">• Kendali operasional 100%</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="8">• Biaya modal: TERTINGGI</text>
    <text class="svg-text" x="14" y="110" fill="#cbd5e1" font-size="8">• Risiko politik &amp; pasar penuh</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="8">• Proteksi rahasia paten</text>
    <rect class="svg-badge-red" x="14" y="145" width="157" height="20" rx="6" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="92" y="159" fill="#f87171" font-size="8" font-weight="700" text-anchor="middle">Kendali Mutlak</text>
  </g>

  <!-- Bottom Comparison Trend Bar -->
  <g transform="translate(35, 270)">
    <rect class="svg-subcard" x="0" y="0" width="830" height="22" rx="11" fill="#1e293b"/>
    <rect x="0" y="0" width="830" height="22" rx="11" fill="url(#trendArrow)" fill-opacity="0.25"/>
    <polygon points="825,11 810,4 810,18" fill="#f87171"/>
    <text class="text-accent-blue" x="15" y="15" fill="#38bdf8" font-size="9" font-weight="700">RENDAH</text>
    <text class="svg-text" x="415" y="15" fill="#cbd5e1" font-size="9" font-weight="700" text-anchor="middle">KOMITMEN MODAL, TINGKAT KENDALI, &amp; RISIKO KORPORASI</text>
    <text class="text-accent-red" x="800" y="15" fill="#f87171" font-size="9" font-weight="700" text-anchor="end">TERTINGGI</text>
  </g>
  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Semakin bergerak ke kanan, potensi keuntungan jangka panjang semakin besar namun menuntut belanja modal masif.</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Managing in a Global Environment: Strategi Internasional & Kecerdasan Budaya',
  ref: 'Richard L. Daft Bab 4 | Geert Hofstede 6 Cultural Dimensions | Global Mindset & Market Entry Modes',
  intro: 'TM 3 membahas tantangan pengelolaan bisnis melintasi batas-batas negara (Cross-Border Management): motivasi ekspansi internasional, spektrum 4 strategi masuk pasar global (Ekspor, Lisensi/Waralaba, Joint Venture, dan Greenfield / Foreign Direct Investment), 6 Dimensi Budaya Nasional Geert Hofstede (Power Distance, Individualism vs Collectivism, Masculinity vs Femininity, Uncertainty Avoidance, Long-Term Orientation, Indulgence), serta pengembangan Kecerdasan Budaya (Cultural Intelligence / CQ).',
  objectives: [
    'Mengevaluasi spektrum strategi masuk pasar global berdasarkan trade-off antara biaya investasi, tingkat risiko, dan kendali manajemen.',
    'Menerapkan 6 Dimensi Budaya Geert Hofstede untuk menganalisis perbedaan norma kerja antar-negara.',
    'Membedakan strategi integrasi global: Global Strategy, Transnational Strategy, dan Multi-Domestic Strategy.',
    'Mengembangkan 3 komponen Kecerdasan Budaya (CQ: Kognitif, Emosional/Motivasional, dan Fisik/Perilaku).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 3.1: Spektrum Strategi Masuk Pasar Global: Dari Ekspor hingga Greenfield Investment.',
      svg: SVG_GLOBAL_ENTRY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 3'
    },
    {
      kind: 'table',
      headers: ['Metode Masuk Pasar Global', 'Tingkat Komitmen Modal', 'Tingkat Kontrol Manajemen', 'Keunggulan Utama', 'Risiko Utama'],
      rows: [
        ['Ekspor (Exporting)', 'Paling Rendah', 'Rendah (tergantung agen)', 'Memanfaatkan kapasitas pabrik dalam negeri tanpa investasi fisik di luar negeri.', 'Biaya transportasi tinggi dan tarif bea cukai impor.'],
        ['Lisensi & Waralaba', 'Rendah', 'Sedang', 'Pendapatan royalti stabil tanpa menanggung biaya operasional gerai.', 'Mitra lisensi berpotensi mencuri rahasia dagang dan menjadi pesaing.'],
        ['Joint Venture (Aliansi)', 'Sedang s/d Tinggi', 'Terbagi (Shared Control)', 'Memperoleh wawasan regulasi, jaringan distribusi, dan koneksi politik mitra lokal.', 'Konflik kepentingan mengenai pembagian laba dan arah strategi.'],
        ['Greenfield Venture (FDI)', 'Paling Tinggi', 'Paling Tinggi (100% Penuh)', 'Kontrol mutlak atas standar kualitas, teknologi mutakhir, dan seluruh laba.', 'Risiko nasionalisasi politik, regulasi ketat, dan kerugian modal masif jika gagal.']
      ],
      caption: 'Tabel 3.0: Matriks perbandingan strategi ekspansi global.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 6 Dimensi Budaya Nasional Geert Hofstede'
    },
    {
      kind: 'table',
      headers: ['Dimensi Budaya Hofstede', 'Skor Tinggi (High Score)', 'Skor Rendah (Low Score)', 'Relevansi Manajemen'],
      rows: [
        ['Power Distance (PDI)', 'Menerima hierarki kekuasaan kaku dan kesenjangan status (contoh: Indonesia, Malaysia).', 'Menuntut kesetaraan wewenang, gaya kepemimpinan egaliter (contoh: Denmark, Belanda).', 'Menentukan apakah gaya kepemimpinan harus instruktif atau partisipatif.'],
        ['Individualism (IDV)', 'Mengutamakan pencapaian pribadi dan hak individu (contoh: AS, Inggris).', 'Kolektivisme; loyalitas kelompok dan keharmonisan tim diutamakan (contoh: Indonesia, Jepang).', 'Menentukan apakah sistem reward berbasis kinerja individu atau bonus tim.'],
        ['Uncertainty Avoidance (UAI)', 'Menolak ambiguitas; membutuhkan aturan formal kaku dan SOP tertulis (contoh: Jerman, Jepang).', 'Nyaman dengan ketidakpastian; fleksibel dan toleran terhadap perbedaan (contoh: Singapura).', 'Menentukan tingkat detail dan kekakuan prosedur operasi standar pabrik.'],
        ['Long-Term Orientation (LTO)', 'Fokus pada masa depan, ketekunan, menabung, dan adaptasi (contoh: Tiongkok, Korsel).', 'Fokus pada masa kini dan tradisi masa lalu, mengejar hasil kuartalan instan (contoh: AS).', 'Mempengaruhi horizon waktu perencanaan investasi strategis korporasi.']
      ],
      caption: 'Tabel 3.1: Dimensi budaya Geert Hofstede dalam manajemen lintas budaya.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Negosiasi Bisnis Manajer Amerika dengan Pengusaha Indonesia',
      prompt: 'Seorang manajer ekspatriat asal Amerika Serikat (budaya Individualis, Power Distance rendah, Low-Context Communication) merasa frustrasi karena dalam rapat bisnis di Surabaya, para mitra lokal Indonesia tersenyum dan mengangguk tetapi tidak memberikan jawaban "Ya" atau "Tidak" yang tegas. Bagaimana analisis manajemen lintas budaya menjelaskan fenomena ini?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Dimensi Komunikasi (High-Context vs Low-Context)**: Amerika adalah budaya *Low-Context* di mana kata-kata lisan bermakna harfiah dan langsung (*direct*). Indonesia adalah budaya *High-Context* di mana makna tersirat dalam bahasa tubuh, intonasi, konteks relasi, dan kesantunan (*indirect*).',
            '**Kolektivisme & Harmoni (Muka/Face-Saving)**: Bagi pengusaha Indonesia, mengatakan "Tidak" secara terang-terangan di depan forum dianggap kasar dan mempermalukan lawan bicara. Senyuman dan anggukan berarti "Saya mendengar Anda dengan hormat", BUKAN persetujuan kontrak.',
            '**Rekomendasi Manajer Global**: Manajer AS harus mengasah Kecerdasan Budaya (CQ): tidak memaksakan konfrontasi verbal langsung, membangun relasi informal di luar jam kerja (makan malam bersama), serta mendengarkan pesan tersirat yang disampaikan secara halus.'
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
        ['1', 'Strategi Masuk Pasar Global', 'Analisis komparatif ekspor, lisensi, joint venture, dan FDI.', 'Mampu merekomendasikan moda ekspansi yang sesuai profil risiko perusahaan.'],
        ['2', 'Dimensi Budaya Hofstede', 'Aplikasi 6 dimensi budaya dalam mengelola tim multinasional.', 'Mampu menganalisis gesekan budaya kerja pada kasus ekspatriat.'],
        ['3', 'Kecerdasan Budaya (CQ)', 'Integrasi kognitif, emosional, dan perilaku dalam adaptasi global.', 'Mampu merumuskan program pelatihan lintas budaya bagi pimpinan.']
      ],
      caption: 'Tabel 3.2: Peta penguasaan submateri TM 3 Pengantar Manajemen.'
    },
    CASE_GLOBAL_HOFSTEDE_ENTRY,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Pikirkan Global, Bertindak Lokal (Glocal)**: Keberhasilan internasional mensyaratkan standarisasi skala global (efisiensi biaya) sekaligus adaptasi produk terhadap cita rasa dan norma lokal (responsivitas pasar).',
        '**Etnosentrisme Adalah Musuh Manajemen**: Sikap memandang budaya negara asal sendiri lebih unggul dibanding budaya negara tuan rumah akan memicu kegagalan fatal dalam negosiasi dan kepemimpinan global.',
        '**Joint Venture Butuh Keselarasan Budaya**: Mayoritas kegagalan Joint Venture internasional bukan disebabkan oleh masalah teknis keuangan, melainkan karena perselisihan budaya kerja dan ketidakpercayaan antar-mitra.'
      ]
    }
  ]
};
