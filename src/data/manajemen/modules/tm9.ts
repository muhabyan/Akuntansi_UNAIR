import type { Reading } from '../../../types';
import { CASE_INNOVATION_CHANGE_LEWIN } from '../manajemenPracticeCases';

const SVG_LEWIN_CHANGE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="unfrGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="chgGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="refrGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad9)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">MODEL 3 TAHAP MANAJEMEN PERUBAHAN ORGANISASI (KURT LEWIN)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">LEWIN MODEL</text>

  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="225" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <rect x="0" y="0" width="265" height="34" rx="12" fill="url(#unfrGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="20" y="23" fill="#38bdf8" font-size="12" font-weight="800">1. UNFREEZING (MENCAIRKAN)</text>
    <rect class="svg-subcard" x="20" y="48" width="225" height="38" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-dasharray="3 3"/>
    <text class="text-accent-blue" x="132" y="65" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Mencairkan Status Quo</text>
    <text class="svg-muted" x="132" y="78" fill="#94a3b8" font-size="7.5" text-anchor="middle">Driving Forces &gt; Restraining Forces</text>
    <text class="svg-text" x="20" y="106" fill="#cbd5e1" font-size="8.5">• Ciptakan rasa urgensi krisis (Kotter)</text>
    <text class="svg-text" x="20" y="126" fill="#cbd5e1" font-size="8.5">• Paparkan kesenjangan kinerja riil</text>
    <text class="svg-text" x="20" y="146" fill="#cbd5e1" font-size="8.5">• Kurangi ketakutan &amp; resistensi staf</text>
    <text class="svg-text" x="20" y="166" fill="#cbd5e1" font-size="8.5">• Buka komunikasi dua arah transparan</text>
    <rect class="svg-badge-blue" x="20" y="185" width="225" height="24" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Kesiapan &amp; Motivasi Berubah</text>
  </g>

  <g transform="translate(318, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="225" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <rect x="0" y="0" width="265" height="34" rx="12" fill="url(#chgGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="20" y="23" fill="#34d399" font-size="12" font-weight="800">2. CHANGING (TRANSISI)</text>
    <rect class="svg-subcard" x="20" y="48" width="225" height="38" rx="6" fill="#1e293b" stroke="#34d399"/>
    <text class="text-accent-green" x="132" y="65" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">Eksekusi Perilaku Baru</text>
    <text class="svg-muted" x="132" y="78" fill="#94a3b8" font-size="7.5" text-anchor="middle">Implementasi Sistem &amp; Teknologi</text>
    <text class="svg-text" x="20" y="106" fill="#cbd5e1" font-size="8.5">• Luncurkan teknologi &amp; SOP baru</text>
    <text class="svg-text" x="20" y="126" fill="#cbd5e1" font-size="8.5">• Berikan pelatihan upskilling intensif</text>
    <text class="svg-text" x="20" y="146" fill="#cbd5e1" font-size="8.5">• Bimbingan &amp; role-modeling pimpinan</text>
    <text class="svg-text" x="20" y="166" fill="#cbd5e1" font-size="8.5">• Raih short-term wins (6 bulan)</text>
    <rect class="svg-badge-green" x="20" y="185" width="225" height="24" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="201" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">Pergeseran Sikap &amp; Kebiasaan</text>
  </g>

  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="225" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
    <rect x="0" y="0" width="265" height="34" rx="12" fill="url(#refrGrad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="20" y="23" fill="#a78bfa" font-size="12" font-weight="800">3. REFREEZING (MEMBEKUKAN)</text>
    <rect class="svg-subcard" x="20" y="48" width="225" height="38" rx="6" fill="#1e293b" stroke="#a78bfa"/>
    <text class="text-accent-purple" x="132" y="65" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Institusionalisasi Budaya Baru</text>
    <text class="svg-muted" x="132" y="78" fill="#94a3b8" font-size="7.5" text-anchor="middle">Mengunci agar Tidak Kambuh</text>
    <text class="svg-text" x="20" y="106" fill="#cbd5e1" font-size="8.5">• Integrasikan ke KPI &amp; sistem bonus</text>
    <text class="svg-text" x="20" y="126" fill="#cbd5e1" font-size="8.5">• Perbaharui struktur organisasi formal</text>
    <text class="svg-text" x="20" y="146" fill="#cbd5e1" font-size="8.5">• Rayakan kesuksesan transformasi</text>
    <text class="svg-text" x="20" y="166" fill="#cbd5e1" font-size="8.5">• Jadikan norma kerja sehari-hari</text>
    <rect class="svg-badge-purple" x="20" y="185" width="225" height="24" rx="6" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="132" y="201" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">Kestabilan Budaya Permanen</text>
  </g>

  <polygon points="305,185 315,190 305,195" fill="#38bdf8"/>
  <polygon points="587,185 597,190 587,195" fill="#34d399"/>
  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Tanpa tahap Refreezing, karyawan akan otomatis kembali ke kebiasaan kerja lama yang nyaman dalam hitungan bulan.</text>
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
