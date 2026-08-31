import type { Reading } from '../../../types';

const SVG_MANAGEMENT_FUNCTIONS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">EMPAT FUNGSI UTAMA MANAJEMEN (POAC - RICHARD L. DAFT)</text>
  
  <rect x="25" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Planning</text>
  <text x="97" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">(Perencanaan)</text>
  <line x1="35" y1="108" x2="160" y2="108" stroke="#334155"/>
  <text x="97" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Menetapkan sasaran</text>
  <text x="97" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Merumuskan strategi</text>
  <text x="97" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Alokasi sumber daya</text>
  <text x="97" y="180" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Arah Masa Depan</text>

  <rect x="185" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="257" y="78" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. Organizing</text>
  <text x="257" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">(Pengorganisasian)</text>
  <line x1="195" y1="108" x2="320" y2="108" stroke="#334155"/>
  <text x="257" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Membagi tugas kerja</text>
  <text x="257" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Struktur departemen</text>
  <text x="257" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Mendelegasi wewenang</text>
  <text x="257" y="180" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">Arsitektur Kerja</text>

  <rect x="345" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="417" y="78" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">3. Leading</text>
  <text x="417" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">(Kepemimpinan)</text>
  <line x1="355" y1="108" x2="480" y2="108" stroke="#334155"/>
  <text x="417" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Memotivasi karyawan</text>
  <text x="417" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Komunikasi visi misi</text>
  <text x="417" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Membangun budaya</text>
  <text x="417" y="180" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Menggerakkan Orang</text>

  <rect x="505" y="55" width="150" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">4. Controlling</text>
  <text x="580" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">(Pengendalian)</text>
  <line x1="515" y1="108" x2="645" y2="108" stroke="#334155"/>
  <text x="580" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Memantau kinerja</text>
  <text x="580" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Bandingkan standar</text>
  <text x="580" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Tindakan koreksi</text>
  <text x="580" y="180" fill="#c084fc" font-size="9" font-weight="700" text-anchor="middle">Memastikan Capaian</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Leading Edge Management: Konsep Dasar, Fungsi POAC, & Peran Manajerial',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 1',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 1: Menguasai konsep dasar manajemen di era disrupsi, 4 fungsi fundamental manajemen (Planning, Organizing, Leading, Controlling - POAC), efektivitas vs efisiensi organisasi, 3 keterampilan manajerial Katz (Conceptual, Human, Technical), 10 peran manajerial Mintzberg, evolusi teori manajemen (Klasik, Humanistik, Quantitative / Management Science), serta tren organisasi digital dan organisasi tanpa hierarki (*Bossless Workplace*).',
  objectives: [
    'Mendefinisikan Manajemen sebagai pencapaian tujuan organisasi secara efektif dan efisien melalui perencanaan, pengorganisasian, kepemimpinan, dan pengendalian sumber daya.',
    'Membedakan Efektivitas (Doing the right things - mencapai sasaran yang tepat) vs Efisiensi (Doing things right - meminimalkan penggunaan sumber daya).',
    'Menjelaskan Tiga Keterampilan Manajerial Robert L. Katz: Conceptual Skills (Top Manager), Human Skills (Middle Manager), dan Technical Skills (First-Line Manager).',
    'Mengidentifikasi 10 Peran Manajerial Henry Mintzberg dalam 3 Kategori (Informational, Interpersonal, Decisional).',
    'Menelusuri evolusi pemikiran manajemen: Scientific Management (Taylor/Gilbreth), Administrative Principles (Fayol), Bureaucracy (Weber), Human Relations (Hawthorne Studies), hingga Contingency View.',
    'Memahami tren tempat kerja kontemporer: Organisasi Bossless, Pemberdayaan (*Empowerment*), dan kecerdasan buatan (AI).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Empat Fungsi Fundamental Manajemen (POAC Framework)',
      svg: SVG_MANAGEMENT_FUNCTIONS,
      caption: 'Gambar 1.1: Siklus berkelanjutan perencanaan, pengorganisasian, kepemimpinan, dan pengendalian kinerja organisasi.'
    },

    { kind: 'h2', text: '1. Tiga Keterampilan Manajerial (Robert L. Katz)' },
    {
      kind: 'table',
      headers: ['Tingkatan Manajemen', 'Keterampilan Paling Dominan', 'Definisi & Penerapan Praktis'],
      rows: [
        ['**Top Managers** (CEO, Direktur Utama, Komisaris)', '**Conceptual Skills (Keterampilan Konseptual)**', 'Kemampuan kognitif untuk melihat organisasi secara holistik sebagai satu kesatuan utuh, berpikir strategis jangka panjang, dan mengantisipasi perubahan tren industri global.'],
        ['**Middle Managers** (Kepala Divisi, Manajer Cabang)', '**Human / Interpersonal Skills (Keterampilan Manusiawi)**', 'Kemampuan bekerja sama dengan orang lain, memotivasi, memfasilitasi komunikasi, dan menyelesaikan konflik tim (Krusial di semua jenjang).'],
        ['**First-Line / Frontline Managers** (Supervisor, Kepala Seksi)', '**Technical Skills (Keterampilan Teknis)**', 'Kemampuan memahami dan menguasai metode, teknik operasional, dan peralatan spesifik (misal teknik akuntansi, pengoperasian mesin pabrik, atau coding).']
      ],
      caption: 'Tabel 1.1: Distribusi keterampilan manajerial berdasarkan hierarki organisasi.'
    },

    { kind: 'h2', text: '2. Sepuluh Peran Manajerial (Henry Mintzberg)' },
    {
      kind: 'table',
      headers: ['Kategori Utama Peran', 'Peran Spesifik', 'Aktivitas Utama Manajer'],
      rows: [
        ['**I. Peran Informasional** (Mengelola Informasi)', '1. Monitor\n2. Disseminator\n3. Spokesperson', 'Mencari dan menerima informasi pasar, menyebarkan memo/visi ke staf internal, dan menyampaikan konferensi pers resmi ke pihak eksternal.'],
        ['**II. Peran Interpersonal** (Mengelola Hubungan Orang)', '4. Figurehead\n5. Leader\n6. Liaison', 'Melakukan tugas seremonial/simbolis, melatih dan memotivasi bawahan, serta menjalin jaringan kemitraan antardepartemen/eksternal.'],
        ['**III. Peran Pengambil Keputusan** (Mengambil Tindakan)', '7. Entrepreneur\n8. Disturbance Handler\n9. Resource Allocator\n10. Negotiator', 'Menggagas inovasi proyek baru, menyelesaikan krisis/konflik mogok kerja, membagi anggaran dana/waktu, dan bernegosiasi kontrak dengan serikat pekerja/vendor.']
      ],
      caption: 'Tabel 1.2: Sepuluh peran manajerial Mintzberg.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 1' },
    {
      kind: 'ul',
      items: [
        '**Manajemen Abad 21**: Bergeser dari paradigma lama (kontrol mandor, hierarki kaku, kompetisi individual) menuju paradigma baru (pemberdayaan tim, fleksibilitas kolaboratif, transparansi).',
        '**Human Skills**: Merupakan satu-satunya keterampilan yang wajib dimiliki secara merata dan tinggi di semua level manajerial.',
        '**Bossless Organization**: Struktur di mana akuntabilitas dan pengambilan keputusan didistribusikan ke tim yang mengatur diri sendiri (*self-managed teams*) tanpa manajer lini konvensional.'
      ]
    }
  ]
};