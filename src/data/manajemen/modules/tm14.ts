import type { Reading } from '../../../types';

const SVG_FEEDBACK_CONTROL = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL PENGENDALIAN UMPAN BALIK (FEEDBACK CONTROL MODEL - DAFT CH. 14/15)</text>
  
  <rect x="25" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. Standar Kinerja</text>
  <text x="97" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Establish Standards</text>
  <line x1="35" y1="108" x2="160" y2="108" stroke="#334155"/>
  <text x="97" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Menetapkan target</text>
  <text x="97" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Kriteria mutu / biaya</text>
  <text x="97" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Waktu penyelesaian</text>
  <text x="97" y="180" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Patokan Awal</text>

  <rect x="185" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="257" y="78" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">2. Ukur Kinerja Riil</text>
  <text x="257" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Measure Performance</text>
  <line x1="195" y1="108" x2="320" y2="108" stroke="#334155"/>
  <text x="257" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Laporan keuangan</text>
  <text x="257" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Data output produksi</text>
  <text x="257" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Observasi langsung</text>
  <text x="257" y="180" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">Data Aktual</text>

  <rect x="345" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="417" y="78" fill="#f59e0b" font-size="10.5" font-weight="700" text-anchor="middle">3. Bandingkan</text>
  <text x="417" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Compare to Standards</text>
  <line x1="355" y1="108" x2="480" y2="108" stroke="#334155"/>
  <text x="417" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Analisis varians</text>
  <text x="417" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Selisih + atau -</text>
  <text x="417" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Identifikasi deviasi</text>
  <text x="417" y="180" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Deteksi Masalah</text>

  <rect x="505" y="55" width="150" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a855f7" font-size="10.5" font-weight="700" text-anchor="middle">4. Tindakan Koreksi</text>
  <text x="580" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Corrective Action</text>
  <line x1="515" y1="108" x2="645" y2="108" stroke="#334155"/>
  <text x="580" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Sesuaikan prosedur</text>
  <text x="580" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pelatihan ulang staf</text>
  <text x="580" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Revisi target standar</text>
  <text x="580" y="180" fill="#c084fc" font-size="9" font-weight="700" text-anchor="middle">Perbaikan Total</text>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Managing Communication, High-Performing Teams, & Quality/Performance Control (TQM)',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 13-15',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 14: Menguasai Komunikasi Manajerial yang Efektif (Kekayaan Saluran / *Channel Richness*, Komunikasi Nonverbal, Mendengarkan Aktif), Dinamika Memimpin Tim Unggul (5 Tahap Perkembangan Tim Bruce Tuckman: *Forming, Storming, Norming, Performing, Adjourning*, Manajemen Konflik Gaya Thomas-Kilmann), serta Pengendalian Kualitas dan Kinerja Organisasi (Model Pengendalian Umpan Balik / *Feedback Control Model*, Total Quality Management / TQM: *Quality Circles, Benchmarking, Six Sigma, Continuous Improvement / Kaizen*, dan Pengendalian Anggaran).',
  objectives: [
    'Menganalisis Kekayaan Saluran Komunikasi (Channel Richness: Tatap Muka langsung paling kaya vs Laporan statistik paling miskin).',
    'Menjelaskan 5 Tahap Perkembangan Tim Bruce Tuckman dan peran kepemimpinan yang dibutuhkan pada setiap fase.',
    'Menerapkan 5 Gaya Manajemen Konflik Thomas-Kilmann (Dominating/Competing, Collaborating, Compromising, Avoiding, Accommodating).',
    'Menerapkan 4 Langkah Kunci Feedback Control Model dalam menjaga keteraturan operasional organisasi.',
    'Menjelaskan teknik-teknik Total Quality Management (TQM): Gugus Kendali Mutu (Quality Circles), Benchmarking, Six Sigma, dan Perbaikan Berkelanjutan (Kaizen).',
    'Membedakan Pengendalian Birokratis Hierarkis (*Hierarchical Control*) vs Pengendalian Terdesentralisasi (*Decentralized Control*).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Model Empat Langkah Pengendalian Umpan Balik (Feedback Control Model)',
      svg: SVG_FEEDBACK_CONTROL,
      caption: 'Gambar 14.1: Siklus evaluasi dan koreksi deviasi kinerja organisasi terhadap standar operasional.'
    },

    { kind: 'h2', text: '1. Lima Tahap Perkembangan Tim (Bruce Tuckman)' },
    {
      kind: 'table',
      headers: ['Tahapan Tim', 'Dinamika Perilaku Anggota Tim', 'Peran Utama Pemimpin Tim'],
      rows: [
        ['**1. Forming (Pembentukan)**', 'Anggota saling berkenalan, merasa canggung, mencari kejelasan tujuan, dan menguji batasan aturan.', '**Mengarahkan (Directing)**: Memberikan orientasi, menetapkan tujuan awal, dan memfasilitasi perkenalan.'],
        ['**2. Storming (Pancaroba/Konflik)**', 'Muncul perbedaan pendapat, persaingan peran/posisi kepemimpinan, dan resistensi terhadap kontrol formal.', '**Memediasi (Coaching)**: Mengelola konflik secara terbuka, membangun norma dialog, dan meredakan ketegangan.'],
        ['**3. Norming (Penetapan Norma)**', 'Konflik terselesaikan, rasa kebersamaan (*cohesiveness*) tumbuh, dan norma aturan kerja disepakati bersama.', '**Memfasilitasi (Supporting)**: Menjelaskan peran tim dan memperkuat nilai-nilai persatuan.'],
        ['**4. Performing (Pelaksanaan Kinerja)**', 'Fokus penuh pada eksekusi tugas, koordinasi sangat mulus, dan produktivitas mencapai puncak tertinggi.', '**Mendelegasikan (Delegating)**: Memberikan otonomi pemecahan masalah kepada anggota tim.'],
        ['**5. Adjourning (Pembubaran)**', 'Tugas proyek selesai, pembubaran tim komite, dan perayaan keberhasilan bersama.', '**Mengapresiasi**: Memberikan pengakuan atas kontribusi seluruh anggota tim.']
      ],
      caption: 'Tabel 14.1: Siklus hidup tim kerja dalam organisasi.'
    },

    { kind: 'h2', text: '2. Lima Gaya Penanganan Konflik (Thomas-Kilmann)' },
    {
      kind: 'table',
      headers: ['Gaya Resolusi Konflik', 'Karakteristik Perilaku', 'Kondisi Situasional Terbaik Digunakan'],
      rows: [
        ['**1. Kolaborasi (Collaborating - Win-Win)**', 'Asertif tinggi & Kooperatif tinggi; mencari solusi integratif yang memuaskan kedua belah pihak.', 'Masalah sangat krusial dan komitmen jangka panjang kedua pihak diperlukan.'],
        ['**2. Kompromi (Compromising)**', 'Asertif sedang & Kooperatif sedang; masing-masing pihak mengorbankan sebagian tuntutannya.', 'Kedua pihak memiliki kekuatan seimbang dan waktu mendesak untuk mencapai kesepakatan sementara.'],
        ['**3. Dominasi / Kompetisi (Competing - Win-Lose)**', 'Asertif tinggi & Kooperatif rendah; memaksakan keinginan sendiri mengorbankan pihak lain.', 'Situasi darurat krisis yang menuntut tindakan cepat dan tegas, atau saat membela aturan vital.'],
        ['**4. Mengakomodasi (Accommodating - Lose-Win)**', 'Asertif rendah & Kooperatif tinggi; mengalah demi menjaga keharmonisan hubungan.', 'Saat menyadari diri sendiri keliru, atau saat masalah jauh lebih penting bagi pihak lain.'],
        ['**5. Menghindar (Avoiding - Lose-Lose)**', 'Asertif rendah & Kooperatif rendah; menolak terlibat atau menunda konfrontasi.', 'Masalah sepele, atau ketika emosi sedang memuncak dan butuh waktu mendinginkan suasana.']
      ],
      caption: 'Tabel 14.2: Matriks gaya penanganan konflik interpersonal.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 14 (Pra-UAS)' },
    {
      kind: 'ul',
      items: [
        '**Six Sigma**: Pendekatan kontrol kualitas berbasis statistik yang menargetkan tingkat cacat tidak melebihi **3,4 cacat per satu juta peluang** ($99,99966\\%$ sempurna).',
        '**Kaizen (Continuous Improvement)**: Filosofi Jepang tentang perbaikan bertahap yang tiada henti di semua aspek organisasi dengan melibatkan seluruh karyawan.',
        '**Decentralized Control**: Pengendalian berbasis nilai budaya bersama, kepercayaan, evaluasi diri, dan pemberdayaan bawahan, bukan aturan birokratis kaku.'
      ]
    }
  ]
};