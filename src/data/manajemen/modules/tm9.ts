import type { Reading } from '../../../types';
import { CASE_INNOVATION_CHANGE_LEWIN } from '../manajemenPracticeCases';

const SVG_LEWIN_CHANGE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL 3 TAHAP MANAJEMEN PERUBAHAN (KURT LEWIN)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. UNFREEZING</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Mencairkan Status Quo):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Ciptakan rasa urgensi (Kotter)</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Paparkan kesenjangan kinerja</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kurangi kekuatan penolak</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Kesiapan Berubah</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">2. CHANGING / MOVING</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Eksekusi Perubahan Baru):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Terapkan sistem/teknologi baru</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pelatihan keterampilan baru</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bimbingan &amp; role modeling</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Transisi Perilaku</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">3. REFREEZING</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Membekukan Budaya Baru):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Integrasikan ke KPI &amp; sistem bonus</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Perbaharui SOP resmi perusahaan</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Rayakan keberhasilan jangka pendek</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Institusionalisasi</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Managing Innovation and Change: Model Ambidextrous & Manajemen Perubahan',
  ref: 'Richard L. Daft Bab 12 | Kurt Lewin 3-Step Change Model | John Kotter 8-Step Leading Change',
  intro: 'TM 9 membahas bagaimana organisasi bertahan dan bertumbuh di tengah disrupsi industri melalui inovasi dan manajemen perubahan: inovasi produk vs teknologi proses, model Organisasi Ambidextrous (Ambidextrous Organization yang menyeimbangkan eksploitasi bisnis inti dengan eksplorasi inovasi baru), 3 peran pendorong inovasi internal (Idea Champion, Sponsor, Critic), Model 3 Tahap Perubahan Kurt Lewin (Unfreezing, Changing, Refreezing), analisis medan kekuatan (Force Field Analysis), serta 5 taktik mengatasi resistensi perubahan karyawan.',
  objectives: [
    'Menerapkan konsep Organisasi Ambidextrous dalam mengelola inovasi dan efisiensi secara simultan.',
    'Menjelaskan 3 peran kunci pendorong inovasi: Idea Champion, Sponsor, dan Critic.',
    'Menerapkan Model 3 Tahap Kurt Lewin dan 8 Langkah Perubahan John Kotter dalam transformasi organisasi.',
    'Menganalisis alasan karyawan menolak perubahan dan memilih taktik penanganan yang tepat (Komunikasi, Partisipasi, Negosiasi, Koersi).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 9.1: Model Tiga Tahap Perubahan Organisasi Kurt Lewin: Unfreezing, Changing, dan Refreezing.',
      svg: SVG_LEWIN_CHANGE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 9'
    },
    {
      kind: 'table',
      headers: ['Taktik Mengatasi Resistensi', 'Kapan Taktik Ini Paling Tepat Digunakan', 'Keunggulan Pendekatan', 'Kelemahan / Risiko Pendekatan'],
      rows: [
        ['Komunikasi & Edukasi', 'Ketika perubahan melibatkan informasi teknis baru dan karyawan kekurangan data.', 'Membangun pemahaman rasional dan kepercayaan.', 'Memakan waktu sangat panjang jika melibatkan ribuan karyawan.'],
        ['Partisipasi & Keterlibatan', 'Ketika perancang perubahan membutuhkan masukan ahli dari staf garis depan.', 'Meningkatkan rasa kepemilikan (ownership) dan komitmen tinggi.', 'Proses pengambilan keputusan menjadi lambat dan berpotensi kompromi buruk.'],
        ['Fasilitasi & Dukungan', 'Ketika karyawan mengalami kecemasan mendalam dan takut kehilangan kompetensi.', 'Meredakan stres kerja dan menumbuhkan loyalitas emosional.', 'Biaya program pelatihan dan konseling mahal.'],
        ['Negosiasi & Kesepakatan', 'Ketika kelompok penolak memiliki pengaruh politik kuat (contoh: serikat buruh).', 'Mencegah pemogokan kerja dan resistensi terbuka.', 'Bisa memicu kelompok lain menuntut konsesi serupa.'],
        ['Koersi / Paksaan (Opsi Terakhir)', 'Ketika krisis fatal melanda dan waktu keputusan sangat mendesak.', 'Cepat dan langsung menghentikan sabotase.', 'Meningkatkan kemarahan terpendam dan merusak budaya organisasi jangka panjang.']
      ],
      caption: 'Tabel 9.0: Matriks 5 taktik mengatasi resistensi perubahan menurut Richard L. Daft.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Analisis Medan Kekuatan (Force Field Analysis)'
    },
    {
      kind: 'formula',
      text: `\\text{Status Quo Perubahan} = \\text{Keseimbangan antara } \\mathbf{\\text{Kekuatan Pendorong (Driving Forces)}} \\text{ vs } \\mathbf{\\text{Kekuatan Penolak (Restraining Forces)}}
\\text{Strategi Perubahan Sukses}: \\quad \\text{Perkuat Driving Forces} + \\mathbf{\\text{Kurangi / Netralisir Restraining Forces}}`,
      note: 'Kesalahan paling fatal yang dilakukan manajer pemula adalah hanya menekan pendorong (Driving Forces) lebih kuat, yang justru memicu penolakan (Restraining Forces) yang semakin keras.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penerapan 3 Peran Inovasi di Tim Riset Teknologi',
      prompt: 'Sebuah laboratorium R&D ingin memastikan ide-ide kreatif staf muda tidak mati begitu saja di tengah jalan sebelum menjadi produk komersial. Tiga peran kepemimpinan apa yang wajib dihadirkan menurut Richard L. Daft?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Idea Champion (Juara Ide)**: Orang yang memiliki semangat tinggi dan keyakinan membara terhadap ide baru; ia berani memperjuangkan dan mengadvokasi idenya melintasi rintangan birokrasi.',
            '**2. Sponsor**: Manajer senior di tingkat atas yang memiliki kekuasaan wewenang dan anggaran kas; ia melindungi Idea Champion dari politik kantor dan mengalokasikan dana riset resmi.',
            '**3. Critic (Kritikus Konstruktif)**: Sosok analis kritis yang menantang kelayakan teknologi, menguji aspek finansial, dan memastikan ide tersebut benar-benar memiliki prospek bisnis realistis sebelum diluncurkan massal.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 9'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Model Ambidextrous & Inovasi', 'Pemisahan eksplorasi ide baru vs eksploitasi efisiensi operasional mapan.', 'Mampu mendesain struktur inkubator inovasi terpisah.'],
        ['2', 'Model 3 Tahap Perubahan Lewin', 'Tahapan Unfreezing, Changing, dan Refreezing serta 8 langkah Kotter.', 'Mampu menyusun roadmap manajemen perubahan korporasi.'],
        ['3', 'Manajemen Resistensi Perubahan', 'Force field analysis dan seleksi taktik komunikasi, partisipasi, koersi.', 'Mampu mengatasi penolakan staf terhadap adopsi sistem digital baru.']
      ],
      caption: 'Tabel 9.2: Peta penguasaan submateri TM 9 Pengantar Manajemen.'
    },
    CASE_INNOVATION_CHANGE_LEWIN,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Mencairkan Adalah 50% Keberhasilan**: Jangan pernah meluncurkan teknologi baru sebelum karyawan merasakan urgensi mengapa mereka harus berubah (*Unfreezing*); tanpa pencairan, perubahan akan ditolak mentah-mentah.',
        '**Rayakan Kemenangan Jangka Pendek (Short-Term Wins)**: Dalam 8 langkah Kotter, pimpinan harus menciptakan bukti keberhasilan awal yang nyata dalam 6 bulan pertama untuk menjaga optimisme tim.',
        '**Refreezing Mencegah Kambuh**: Tanpa penguncian kembali ke dalam sistem bonus dan KPI formal, karyawan akan segera kembali ke kebiasaan kerja lama yang nyaman.'
      ]
    }
  ]
};
