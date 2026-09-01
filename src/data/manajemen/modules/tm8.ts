import type { Reading } from '../../../types';
import { CASE_UTS_MANAJEMEN_INTEGRATED } from '../manajemenPracticeCases';

const SVG_UTS_MANAJEMEN_MAP = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PETA KONSEP SINTESIS MATERI PRA-UTS PENGANTAR MANAJEMEN (TM 1 - TM 7)</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">TM 1 &amp; TM 2</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Fondasi &amp; Budaya:</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 4 Fungsi POAC</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Keterampilan Katz</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 4 Budaya Daft &amp; PESTEL</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Fondasi Manajemen</text>

  <rect x="185" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="257" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">TM 3 &amp; TM 4</text>
  <text x="257" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Global &amp; Etika:</text>
  <text x="257" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dimensi Hofstede</text>
  <text x="257" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Moda Masuk Pasar</text>
  <text x="257" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 4 Etika &amp; CSR Carroll</text>
  <text x="257" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Konteks Eksternal</text>

  <rect x="345" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="417" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">TM 5 &amp; TM 6</text>
  <text x="417" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Rencana &amp; Keputusan:</text>
  <text x="417" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• MBO &amp; Matriks BCG</text>
  <text x="417" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Strategi Porter</text>
  <text x="417" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bounded Rationality</text>
  <text x="417" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Formulasi Strategis</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">TM 7</text>
  <text x="580" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Struktur Organisasi:</text>
  <text x="580" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Rentang Kendali (Span)</text>
  <text x="580" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 5 Departementalisasi</text>
  <text x="580" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mekanistik vs Organik</text>
  <text x="580" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Eksekusi Struktural</text>
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
