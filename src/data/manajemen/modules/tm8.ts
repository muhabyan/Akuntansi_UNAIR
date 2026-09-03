import type { Reading } from '../../../types';
import { CASE_UTS_MANAJEMEN_INTEGRATED } from '../manajemenPracticeCases';

const SVG_UTS_MANAJEMEN_MAP = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="m1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="m2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="m3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="m4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad8)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PETA SINTESIS KURIKULUM PRA-UTS PENGANTAR MANAJEMEN (TM 1 - TM 7)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ROADMAP UTS</text>

  <!-- 4 Milestones Journey -->
  <!-- Milestone 1 -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#m1)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="21" fill="#38bdf8" font-size="10.5" font-weight="800">FONDASI &amp; LINGKUNGAN</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-blue" x="44" y="56" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">TM 1 - TM 2</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• 4 Fungsi POAC &amp; Efisiensi</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Keterampilan Manajerial Katz</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• 10 Peran Manajer Mintzberg</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• Lingkungan Umum PESTEL</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• 4 Budaya Daft (Clan/Market)</text>
    <rect class="svg-badge-blue" x="14" y="185" width="167" height="24" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Fondasi Prinsip Dasar</text>
  </g>

  <polygon points="237,185 247,190 237,195" fill="#38bdf8"/>

  <!-- Milestone 2 -->
  <g transform="translate(250, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#m2)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="21" fill="#34d399" font-size="10.5" font-weight="800">GLOBAL &amp; ETIKA SOSIAL</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-green" x="44" y="56" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">TM 3 - TM 4</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Moda Masuk Pasar Global</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Dimensi Budaya Hofstede</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Piramida CSR 4-Tier Carroll</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• 4 Pendekatan Etika Bisnis</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Whistleblowing &amp; Integritas</text>
    <rect class="svg-badge-green" x="14" y="185" width="167" height="24" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Tanggung Jawab Moral</text>
  </g>

  <polygon points="452,185 462,190 452,195" fill="#34d399"/>

  <!-- Milestone 3 -->
  <g transform="translate(465, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#m3)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="14" y="21" fill="#fbbf24" font-size="10.5" font-weight="800">PERENCANAAN &amp; KEPUTUSAN</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-amber" x="44" y="56" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">TM 5 - TM 6</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Hierarki Visi, Misi, Sasaran</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Matriks Portofolio BCG 2x2</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Strategi Bersaing Porter</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• 3 Model Keputusan Simon</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• 6 Tahap Keputusan Rasional</text>
    <rect class="svg-badge-amber" x="14" y="185" width="167" height="24" rx="6" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Arah &amp; Formulasi</text>
  </g>

  <polygon points="667,185 677,190 667,195" fill="#fbbf24"/>

  <!-- Milestone 4 -->
  <g transform="translate(680, 75)">
    <rect class="svg-card" x="0" y="0" width="185" height="225" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="185" height="32" rx="12" fill="url(#m4)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="14" y="21" fill="#a78bfa" font-size="10.5" font-weight="800">PENGORGANISASIAN</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-purple" x="44" y="56" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">TM 7</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Rantai Komando &amp; Wewenang</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Rentang Kendali (Span of Ctrl)</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Sentralisasi vs Desentralisasi</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• 5 Desain Struktur (Daft)</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Koordinasi Horizontal</text>
    <rect class="svg-badge-purple" x="14" y="185" width="157" height="24" rx="6" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="92" y="201" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Arsitektur Eksekusi</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Penguasaan terpadu TM 1 hingga TM 7 menjamin ketajaman analisis studi kasus komprehensif pada Ujian Tengah Semester (UTS).</text>
</svg>`;

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan & Review Ujian Tengah Semester (UTS) Pengantar Manajemen',
  ref: 'Sintesis Komprehensif TM 1 s/d TM 7 | Kumpulan Soal Analisis Kasus UTS Terpilih | 10 Jebakan Soal Manajemen',
  intro: 'TM 8 adalah modul pemantapan integratif Pra-UTS Pengantar Manajemen yang mengkristalisasikan seluruh materi semester paruh pertama: integrasi POAC, peran manajerial Mintzberg, keterampilan Katz, analisis lingkungan PESTEL, tipologi budaya Daft, ekspansi global Hofstede, etika dan CSR Carroll, penetapan sasaran MBO, strategi generik Porter, matriks BCG, model keputusan Herbert Simon, bias kognitif, serta 5 desain struktur organisasi.',
  objectives: [
    'Mengintegrasikan teori-teori manajemen TM 1-7 untuk memecahkan studi kasus bisnis komprehensif.',
    'Mendeteksi dan menghindari 10 jebakan konseptual terpopuler pada Ujian Tengah Semester Pengantar Manajemen.',
    'Menyusun jawaban esai analitis terstruktur menggunakan kerangka kerja (framework) manajemen yang baku.',
    'Mempersiapkan strategi manajemen waktu dalam menghadapi ujian studi kasus berbobot tinggi.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 8.1: Peta Sintesis Integratif Materi Pra-UTS Pengantar Manajemen.',
      svg: SVG_UTS_MANAJEMEN_MAP
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 8: Top 5 Tipikal Soal Kasus UTS'
    },
    {
      kind: 'table',
      headers: ['Nomor Kasus UTS', 'Topik Manajemen yang Diuji', 'Konsep / Model Analisis Kunci', 'Kunci Pendekatan Jawaban Ujian'],
      rows: [
        ['Soal Kasus 1', 'Disfungsi Kepemimpinan & Keterampilan Manajer', 'Piramida Keterampilan Katz dan 10 Peran Mintzberg.', 'Jelaskan mengapa manajer baru gagal karena terlalu fokus teknis dan kurang keahlian manusiawi.'],
        ['Soal Kasus 2', 'Resistensi Budaya terhadap Perubahan Pasar', '4 Tipologi Budaya Daft dan Lapisan Budaya Schein.', 'Identifikasi pergeseran dari Consistency Culture ke Adaptability Culture.'],
        ['Soal Kasus 3', 'Dilema Ekspansi Pasar Internasional', 'Spektrum Masuk Pasar Global dan Dimensi Budaya Hofstede.', 'Bandingkan risiko Joint Venture vs Greenfield dengan analisis Power Distance dan Kolektivisme.'],
        ['Soal Kasus 4', 'Formulasi Strategi Korporasi Multi-Bisnis', 'Matriks Portofolio BCG dan Strategi Generik Porter.', 'Petakan unit bisnis ke Cash Cow/Star dan tentukan alokasi arus kas strategis.'],
        ['Soal Kasus 5', 'Redesain Struktur Organisasi Mengatasi Konflik', 'Struktur Fungsional vs Divisional vs Matriks.', 'Uraikan pemecahan Silo Effect dan mitigasi rantai komando ganda (Dual Authority).']
      ],
      caption: 'Tabel 8.0: Matriks 5 tipe soal kasus terpopuler UTS Pengantar Manajemen.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 10 Jebakan Terpopuler UTS Pengantar Manajemen'
    },
    {
      kind: 'ul',
      items: [
        '**Jebakan 1 (Efisiensi vs Efektivitas)**: Mengira perusahaan yang beroperasi tanpa limbah otomatis berhasil. Efisiensi adalah cara kerja hemat input (*doing things right*), sedangkan efektivitas adalah ketepatan sasaran produk yang diminati pasar (*doing the right things*).',
        '**Jebakan 2 (Peran Mintzberg Terbalik)**: Mengacaukan peran *Figurehead* (tokoh simbolis menghadiri upacara) dengan *Leader* (memotivasi dan mengarahkan kerja bawahan secara substantif).',
        '**Jebakan 3 (Budaya Organisasi Hanya Slogan)**: Mengira budaya organisasi sebatas deklarasi nilai di dinding kantor (Espoused Values). Budaya sejati berakar pada asumsi dasar bawah sadar (*Underlying Assumptions*).',
        '**Jebakan 4 (Hofstede Adalah Stereotip Individu)**: Menggunakan skor Hofstede untuk menghakimi satu orang tertentu. Hofstede adalah generalisasi rata-rata norma budaya nasional, bukan determinan mutlak kepribadian personal.',
        '**Jebakan 5 (Legal Berarti Etis)**: Menjawab bahwa suatu tindakan otomatis etis hanya karena tidak ada pasal hukum yang melanggar. Wilayah etika jauh lebih luas dan menuntut standar moral yang lebih tinggi daripada sekadar kepatuhan hukum.',
        '**Jebakan 6 (CSR Sekadar Donasi)**: Menganggap CSR hanya bagi-bagi uang amal (Filantropis). Tanggung jawab CSR dimulai dari pilar ekonomi (laba) dan pilar hukum (kepatuhan regulasi) sebelum filantropis.',
        '**Jebakan 7 (MBO Bersifat Otokratis)**: Mengira sasaran MBO ditentukan sepihak oleh atasan secara sewenang-wenang. Esensi MBO adalah **kesepakatan bersama secara partisipatif** antara atasan dan bawahan.',
        '**Jebakan 8 (Matriks BCG Cash Cow Ditinggalkan)**: Menganggap unit bisnis Cash Cow tidak penting karena pertumbuhannya rendah. Cash Cow adalah sumber oksigen arus kas vital untuk membiayai riset produk Star masa depan.',
        '**Jebakan 9 (Model Klasik Terjadi di Dunia Nyata)**: Berasumsi manajer mengambil keputusan secara rasional sempurna. Dunia nyata beroperasi di bawah **Bounded Rationality dan Satisficing** Herbert Simon.',
        '**Jebakan 10 (Struktur Matriks Tanpa Konflik)**: Menilai struktur matriks sempurna untuk segala kondisi. Matriks secara inheren melanggar kesatuan komando dan membutuhkan kedewasaan komunikasi tinggi untuk menangani komando ganda.'
      ]
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Kerangka Menjawab Soal Esai Studi Kasus UTS',
      prompt: 'Bagaimana struktur kerangka jawaban esai terbaik ketika menghadapi soal studi kasus kompleks di ujian manajemen agar memperoleh nilai maksimal dari dosen?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Gunakan Format 4 Tahap Analitis**:\n1. **Identifikasi Masalah Utama (Problem Statement)**: Definisikan dengan tegas apa akar masalah manajemen yang dihadapi (contoh: krisis kepemimpinan, konflik struktur fungsional, atau ancaman disrupsi teknologi).\n2. **Landasan Teori & Kerangka Kerja (Theoretical Framework)**: Sebutkan nama teori dan tokoh pencetusnya secara presisi (contoh: 4 Tipologi Budaya Daft, Strategi Bersaing Porter, Model Keputusan Simon).\n3. **Analisis Alternatif Solusi (Evaluation of Alternatives)**: Evaluasi pro dan kontra dari 2-3 tindakan manajerial yang dapat diambil.\n4. **Rekomendasi Rencana Aksi Konkret (Action Plan)**: Rumuskan langkah implementasi nyata terstruktur (siapa melakukan apa, kapan waktunya, dan bagaimana mengukurnya).',
            '**Hindari Jawaban Bersifat Opini Umum**: Jangan menjawab dengan kata-kata umum seperti "manajer harus lebih bijaksana dan bekerja keras". Selalu kaitkan dengan konsep baku manajemen ilmiah.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 8'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Sintesis Konsep Manajemen TM 1-7', 'Keterkaitan sekuensial POAC dari perumusan visi hingga desain struktur.', 'Mampu menghubungkan teori lintas modul dalam satu analisis kasus.'],
        ['2', 'Analisis 10 Jebakan Konseptual', 'Penghindaran kekeliruan definisi dan bias pemahaman konsep.', 'Mampu menjawab soal jebakan pilihan ganda dan esai dengan presisi.'],
        ['3', 'Metodologi Pemecahan Kasus Bisnis', 'Penerapan format Problem-Theory-Alternative-Recommendation.', 'Mampu menghasilkan esai ujian bernilai tinggi dan berbobot akademis.']
      ],
      caption: 'Tabel 8.2: Peta penguasaan submateri TM 8 Pengantar Manajemen.'
    },
    CASE_UTS_MANAJEMEN_INTEGRATED,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Sebutkan Tokoh dan Tahun Teori**: Menyebutkan nama ahli (contoh: "Menurut Richard L. Daft...", "Berdasarkan Herbert Simon...", "Menggunakan model Michael Porter...") meningkatkan kredibilitas jawaban ujian Anda secara signifikan.',
        '**Visualisasikan dengan Diagram**: Jika format ujian memungkinkan, buat sketsa bagan matriks (seperti 4 kuadran BCG atau matriks budaya Daft) untuk membuktikan pemahaman visual konseptual Anda.',
        '**Fokus pada Solusi yang Dapat Diterapkan**: Rekomendasi manajerial yang baik harus realistis dan memperhitungkan keterbatasan anggaran kas serta kesiapan SDM perusahaan.'
      ]
    }
  ]
};
