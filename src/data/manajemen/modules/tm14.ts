import type { Reading } from '../../../types';
import { CASE_TEAM_COMMUNICATION_TQM } from '../manajemenPracticeCases';

const SVG_TUCKMAN_TQM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad14" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad14)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">5 TAHAP PERKEMBANGAN TIM TUCKMAN &amp; SIKLUS PENGENDALIAN PDCA</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TEAM &amp; TQM</text>

  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="540" height="250" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
    <text class="text-accent-blue" x="270" y="24" fill="#38bdf8" font-size="11" font-weight="800" text-anchor="middle">KURVA KINERJA TIM SEIRING WAKTU (BRUCE TUCKMAN)</text>
    <path d="M 20 180 Q 70 120 120 140 Q 180 210 230 190 Q 300 130 360 90 Q 430 40 480 50 Q 510 60 520 120" fill="none" stroke="#38bdf8" stroke-width="3"/>
    
    <circle cx="60" cy="145" r="14" fill="#0284c7"/>
    <text x="60" y="149" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">1</text>
    <text class="text-accent-blue" x="60" y="172" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">FORMING</text>
    <text class="svg-muted" x="60" y="185" fill="#94a3b8" font-size="7" text-anchor="middle">Orientasi &amp; Sopan</text>

    <circle cx="175" cy="200" r="14" fill="#dc2626"/>
    <text x="175" y="204" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">2</text>
    <text class="text-accent-red" x="175" y="226" fill="#f87171" font-size="8.5" font-weight="700" text-anchor="middle">STORMING</text>
    <text class="svg-muted" x="175" y="238" fill="#94a3b8" font-size="7" text-anchor="middle">Friksi &amp; Konflik</text>

    <circle cx="295" cy="130" r="14" fill="#d97706"/>
    <text x="295" y="134" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">3</text>
    <text class="text-accent-amber" x="295" y="152" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">NORMING</text>
    <text class="svg-muted" x="295" y="165" fill="#94a3b8" font-size="7" text-anchor="middle">Konsensus Norma</text>

    <circle cx="430" cy="50" r="16" fill="#059669"/>
    <text x="430" y="55" fill="#ffffff" font-size="10" font-weight="800" text-anchor="middle">4</text>
    <text class="text-accent-green" x="430" y="76" fill="#34d399" font-size="9" font-weight="800" text-anchor="middle">PERFORMING</text>
    <text class="svg-muted" x="430" y="89" fill="#94a3b8" font-size="7" text-anchor="middle">Sinergi Produktif</text>

    <circle cx="510" cy="115" r="14" fill="#7c3aed"/>
    <text x="510" y="119" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">5</text>
    <text class="text-accent-purple" x="510" y="140" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">ADJOURNING</text>
    <text class="svg-muted" x="510" y="153" fill="#94a3b8" font-size="7" text-anchor="middle">Pembubaran Tim</text>
  </g>

  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="250" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
    <text class="text-accent-green" x="132" y="24" fill="#34d399" font-size="11" font-weight="800" text-anchor="middle">SIKLUS KENDALI MUTU PDCA</text>
    <circle cx="132" cy="135" r="75" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="4 4"/>
    
    <rect class="svg-subcard" x="30" y="50" width="90" height="42" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="75" y="68" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">PLAN</text>
    <text class="svg-muted" x="75" y="80" fill="#94a3b8" font-size="6.5" text-anchor="middle">Rencana Standar</text>

    <rect class="svg-subcard" x="145" y="50" width="90" height="42" rx="6" fill="#1e293b" stroke="#34d399"/>
    <text class="text-accent-green" x="190" y="68" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">DO</text>
    <text class="svg-muted" x="190" y="80" fill="#94a3b8" font-size="6.5" text-anchor="middle">Jalankan Operasi</text>

    <rect class="svg-subcard" x="145" y="175" width="90" height="42" rx="6" fill="#1e293b" stroke="#fbbf24"/>
    <text class="text-accent-amber" x="190" y="193" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">CHECK</text>
    <text class="svg-muted" x="190" y="205" fill="#94a3b8" font-size="6.5" text-anchor="middle">Audit &amp; Bandingkan</text>

    <rect class="svg-subcard" x="30" y="175" width="90" height="42" rx="6" fill="#1e293b" stroke="#a78bfa"/>
    <text class="text-accent-purple" x="75" y="193" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">ACT</text>
    <text class="svg-muted" x="75" y="205" fill="#94a3b8" font-size="6.5" text-anchor="middle">Tindakan Korektif</text>
  </g>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Managing Communication, High-Performing Teams, & Quality/Performance Control (TQM)',
  ref: 'Richard L. Daft Bab 18 & 19 | Bruce Tuckman 5 Stages of Team Development | Total Quality Management (TQM)',
  intro: 'TM 14 membahas penutup fungsi manajemen yang mengintegrasikan komunikasi interpersonal, dinamika tim berkinerja tinggi, dan sistem pengendalian kinerja: kekayaan saluran komunikasi (Channel Richness), 5 Tahap Perkembangan Tim Bruce Tuckman (Forming, Storming, Norming, Performing, Adjourning), penanganan konflik tim, 4 langkah proses pengendalian organisasi (Menetapkan Standar, Mengukur Kinerja, Membandingkan Standar, Mengambil Tindakan Korektif), 3 fokus waktu kontrol (Feedforward, Concurrent, Feedback Control), serta filosofi Total Quality Management (TQM: Siklus PDCA Kaizen, Gugus Kendali Mutu, Six Sigma, dan Benchmarking).',
  objectives: [
    'Menganalisis hirarki kekayaan saluran komunikasi (Channel Richness) dari tatap muka hingga memo tertulis.',
    'Menerapkan 5 Tahap Perkembangan Tim Tuckman untuk memfasilitasi tim mencapai tahap Performing.',
    'Menjalankan 4 langkah proses pengendalian manajemen dan umpan balik korektif.',
    'Membedakan fokus waktu pengendalian: Pengendalian di Muka (Feedforward), Bersamaan (Concurrent), dan Umpan Balik (Feedback).',
    'Menerapkan teknik Total Quality Management (TQM): Siklus PDCA Deming, Kaizen perbaikan berkelanjutan, dan Six Sigma.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 14.1: Lima Tahap Perkembangan Tim Bruce Tuckman dan Siklus Pengendalian Mutu Organisasi.',
      svg: SVG_TUCKMAN_TQM
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 14'
    },
    {
      kind: 'table',
      headers: ['Tahap Perkembangan Tim (Tuckman)', 'Dinamika Perilaku Anggota Tim', 'Peran Kunci Pemimpin Tim', 'Tantangan Terbesar'],
      rows: [
        ['1. Forming (Pembentukan)', 'Anggota saling mengamati, mencari kepastian peran, dan bersikap sopan hati-hati.', 'Directing: Memberikan orientasi visi tim, sasaran kerja, dan struktur peran yang jelas.', 'Ketidakpastian dan keraguan diri anggota.'],
        ['2. Storming (Konflik/Pemberontakan)', 'Muncul friksi pendapat, perebutan pengaruh informal, dan resistensi terhadap beban tugas.', 'Coaching & Fasilitasi: Mengelola konflik secara terbuka dan mengarahkan kembali ke sasaran bersama.', 'Perpecahan tim dan frustrasi emosional jika konflik dihindari.'],
        ['3. Norming (Harmoni & Norma)', 'Konflik terselesaikan, terbentuk konsensus aturan main, dan kohesivitas tim tumbuh erat.', 'Supporting: Mendorong kerja sama mandiri dan memperkuat norma positif.', 'Bahaya timbulnya Groupthink karena takut merusak keharmonisan.'],
        ['4. Performing (Kinerja Puncak)', 'Anggota tim bersinergi menyelesaikan masalah kompleks secara otonom dan produktif.', 'Delegating: Memberikan otonomi penuh dan mendukung kebutuhan sumber daya tim.', 'Menjaga stamina tim agar tidak kelelahan (burnout).'],
        ['5. Adjourning (Pembubaran)', 'Tugas proyek selesai, tim dibubarkan, dan anggota bersiap pindah tugas.', 'Recognizing: Memberikan penghargaan atas capaian dan merayakan keberhasilan bersama.', 'Rasa kehilangan dan kecemasan tugas baru.']
      ],
      caption: 'Tabel 14.0: Matriks 5 tahap perkembangan tim Bruce Tuckman.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 3 Fokus Waktu Pengendalian Manajemen'
    },
    {
      kind: 'table',
      headers: ['Jenis Pengendalian', 'Fokus Waktu Pengawasan', 'Tujuan Pencegahan', 'Contoh Nyata di Industri'],
      rows: [
        ['Feedforward Control (Pengendalian di Muka)', 'Sebelum pekerjaan dimulai (Input).', 'Mencegah terjadinya masalah sebelum operasi berjalan.', 'Inspeksi kualitas bahan baku gandum dan seleksi ketat pilot pesawat.'],
        ['Concurrent Control (Pengendalian Bersamaan)', 'Saat pekerjaan sedang berlangsung (Proses).', 'Memperbaiki kesalahan secara langsung di tempat kerja.', 'Lampu Andon di ban berjalan Toyota dan supervisi langsung manajer di dapur restoran.'],
        ['Feedback Control (Pengendalian Umpan Balik)', 'Setelah pekerjaan selesai (Output).', 'Mengevaluasi hasil akhir dan mencegah deviasi terulang di masa depan.', 'Analisis laporan keuangan kuartalan dan survei kepuasan pelanggan tahunan.']
      ],
      caption: 'Tabel 14.1: Tiga fokus waktu pengendalian manajemen organisasi.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Memilih Saluran Komunikasi yang Tepat (Channel Richness)',
      prompt: 'Seorang manajer divisi harus menyampaikan keputusan sulit kepada seorang karyawan berprestasi: perusahaannya terpaksa melakukan PHK atas divisi tersebut akibat krisis keuangan. Manajer tersebut berniat mengirimkan pesan singkat melalui WhatsApp atau email agar tidak merasa canggung. Evaluasi pilihan saluran komunikasi ini menggunakan teori Channel Richness!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Konsep Kekayaan Saluran (Channel Richness)**: Saluran komunikasi bervariasi dalam kapasitasnya mengirimkan informasi kaya: tatap muka langsung (Paling Kaya: mencakup bahasa tubuh, intonasi, umpan balik instan, dan sentuhan personal), sedangkan email/chat adalah saluran miskin (*Lean Channels*).',
            '**Evaluasi Keputusan Manajer**: Mengirim kabar PHK melalui chat WhatsApp adalah **Kesalahan Fatal dan Tidak Beretika**. Pesan non-rutin yang sangat sensitif dan berdampak emosional besar menuntut **Saluran Paling Kaya (Pertemuan Tatap Muka Langsung / Face-to-Face)**.',
            '**Tindakan Seharusnya**: Manajer harus mengundang karyawan ke ruang privat, menyampaikan keputusan tersebut secara empatik, menjelaskan hak-hak pesangon secara langsung, dan memberikan ruang bagi karyawan untuk menumpahkan emosinya.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 14'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kekayaan Saluran Komunikasi', 'Hierarki channel richness dari tatap muka hingga laporan tertulis.', 'Mampu memilih saluran komunikasi yang tepat untuk berbagai pesan.'],
        ['2', '5 Tahap Perkembangan Tim Tuckman', 'Dinamika Forming, Storming, Norming, Performing, Adjourning.', 'Mampu memfasilitasi tim melewati krisis konflik Storming.'],
        ['3', 'Proses Pengendalian & TQM', 'Feedforward, Concurrent, Feedback control dan siklus PDCA Kaizen.', 'Mampu merancang sistem pengendalian mutu operasional perusahaan.']
      ],
      caption: 'Tabel 14.2: Peta penguasaan submateri TM 14 Pengantar Manajemen.'
    },
    CASE_TEAM_COMMUNICATION_TQM,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Konflik Storming Itu Normal dan Perlu**: Jangan takut dengan fase konflik *Storming*; tim yang menghindari konflik (*artificial harmony*) tidak akan pernah mencapai kedewasaan dan kinerja puncak *Performing*.',
        '**Pengendalian di Muka Menghemat Biaya (Feedforward)**: Biaya mencegah cacat di muka (memeriksa bahan baku) jauh lebih murah 100 kali lipat dibanding biaya menarik produk rusak yang sudah telanjur beredar di tangan konsumen.',
        '**Kaizen Adalah Filosofi Sehari-Hari**: Total Quality Management bukan sekadar proyek sekali jalan, melainkan komitmen budaya perbaikan tiada henti (*continuous improvement*) yang dijalankan oleh setiap individu pekerja.'
      ]
    }
  ]
};
