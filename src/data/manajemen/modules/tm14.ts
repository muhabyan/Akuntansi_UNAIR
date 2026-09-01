import type { Reading } from '../../../types';
import { CASE_TEAM_COMMUNICATION_TQM } from '../manajemenPracticeCases';

const SVG_TUCKMAN_TQM = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">5 TAHAP PERKEMBANGAN TIM TUCKMAN &amp; SIKLUS PENGENDALIAN PDCA (TQM)</text>
  
  <rect x="25" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">FORMING</text>
  <text x="82" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Tahap 1: Orientasi</text>
  <text x="82" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Saling mengenal</text>
  <text x="82" y="138" fill="#cbd5e1" font-size="8" text-anchor="middle">• Suasana canggung</text>
  <text x="82" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Butuh arahan jelas</text>
  <text x="82" y="175" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Penjajakan Peran</text>

  <rect x="155" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="212" y="78" fill="#f87171" font-size="9.5" font-weight="700" text-anchor="middle">STORMING</text>
  <text x="212" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Tahap 2: Konflik</text>
  <text x="212" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Friksi pendapat</text>
  <text x="212" y="138" fill="#cbd5e1" font-size="8" text-anchor="middle">• Rebutan pengaruh</text>
  <text x="212" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Resistensi kendali</text>
  <text x="212" y="175" fill="#fca5a5" font-size="8.5" font-weight="700" text-anchor="middle">Fase Kritis</text>

  <rect x="285" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="342" y="78" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">NORMING</text>
  <text x="342" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Tahap 3: Harmoni</text>
  <text x="342" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Konsensus norma</text>
  <text x="342" y="138" fill="#cbd5e1" font-size="8" text-anchor="middle">• Peran disepakati</text>
  <text x="342" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Kohesivitas tumbuh</text>
  <text x="342" y="175" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">Aturan Main Jelas</text>

  <rect x="415" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="472" y="78" fill="#4ade80" font-size="9.5" font-weight="700" text-anchor="middle">PERFORMING</text>
  <text x="472" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Tahap 4: Sinergi</text>
  <text x="472" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Kinerja puncak</text>
  <text x="472" y="138" fill="#cbd5e1" font-size="8" text-anchor="middle">• Problem solving</text>
  <text x="472" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Otonomi tinggi</text>
  <text x="472" y="175" fill="#4ade80" font-size="8.5" font-weight="700" text-anchor="middle">Produktivitas Maks</text>

  <rect x="545" y="55" width="110" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="600" y="78" fill="#a78bfa" font-size="9.5" font-weight="700" text-anchor="middle">ADJOURNING</text>
  <text x="600" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Tahap 5: Pembubaran</text>
  <text x="600" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Proyek tuntas</text>
  <text x="600" y="138" fill="#cbd5e1" font-size="8" text-anchor="middle">• Perayaan capaian</text>
  <text x="600" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Evaluasi akhir</text>
  <text x="600" y="175" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">Dokumentasi</text>
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
