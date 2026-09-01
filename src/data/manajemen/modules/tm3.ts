import type { Reading } from '../../../types';
import { CASE_GLOBAL_HOFSTEDE_ENTRY } from '../manajemenPracticeCases';

const SVG_GLOBAL_ENTRY = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SPEKTRUM STRATEGI MASUK PASAR GLOBAL: RISIKO, KONTROL, &amp; BIAYA</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. EKSPOR</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Exporting):</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Produksi di DN, jual ke LN</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Risiko paling rendah</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kontrol pasar minimal</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Biaya Awal Rendah</text>

  <rect x="185" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="257" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">2. LISENSI / FRANCHISE</text>
  <text x="257" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Licensing/Franchising):</text>
  <text x="257" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Sewa merek &amp; teknologi</text>
  <text x="257" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Royalti penerimaan rutin</text>
  <text x="257" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Risiko tiruan teknologi</text>
  <text x="257" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Ekspansi Cepat</text>

  <rect x="345" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="417" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">3. JOINT VENTURE</text>
  <text x="417" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Aliansi Strategis):</text>
  <text x="417" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kongsi dengan mitra lokal</text>
  <text x="417" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bagi biaya &amp; keahlian</text>
  <text x="417" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Potensi konflik wewenang</text>
  <text x="417" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Akses Pasar Lokal</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">4. GREENFIELD / FDI</text>
  <text x="580" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Investasi Langsung):</text>
  <text x="580" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bangun pabrik baru 100%</text>
  <text x="580" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• <tspan fill="#fca5a5" font-weight="700">Risiko &amp; Biaya TERTINGGI</tspan></text>
  <text x="580" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• <tspan fill="#86efac" font-weight="700">Kontrol Penuh 100%</tspan></text>
  <text x="580" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Komitmen Maksimal</text>
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
