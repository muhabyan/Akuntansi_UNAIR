// MNU108 TM01 — Leading Edge Management.
// Isi akademik berasal dari paket konten MNU108/TM01 (05_student_learning_version.md); aturan render dari 06.
// Sumber fakta tunggal: Daft & Marcic, Understanding Management 12e (2023), Chapter 1, hal. 2–51.
// Cakupan mengikuti RPP Pengantar Manajemen pertemuan 1. Semua anchor [hal. X] merujuk halaman buku tercetak.
// Jangan menambah fakta di luar paket: ubah paketnya, lalu perbarui file ini.
import type { Reading } from '../../../types';

// Exhibit 1.9 [hal. 25]: susunan pendekatan pada timeline, dibaca dari bawah ke atas.
// Timeline hanya menunjukkan kapan sebuah pendekatan dominan, bukan kapan ia berhenti dipakai.
const EXHIBIT_1_9_PERSPECTIVES = [
  'Classical Perspective (Things of Production)',
  'Humanistic Perspective (Humanity of Production)',
  'Systems Thinking',
  'Contingency View',
  'Total Quality Management',
  'Artificial Intelligence (Administration, Nudge Management)',
  'The Technology-Driven Workplace (Internet of Things, Big Data Analytics)',
  'The People-Driven Workplace (Employee Engagement, Radical Decentralization)',
];

// Peta konsep §12 sebagai daftar bertingkat, bukan pohon ASCII: pohon monospace terpotong di kanan hampir di setiap
// baris pada layar ponsel dan harus digeser. Isi dan urutan simpulnya sama persis dengan pohon itu — satu cabang per
// item, sub-cabangnya sebagai daftar markdown di dalam item yang sama. Titik penomoran di-escape supaya "1. " tidak
// dibaca markdown sebagai penanda daftar bernomor.
const CONCEPT_MAP_BRANCHES = [
  `**1. DASAR**
- Management (effective + efficient, lewat 4 fungsi)
- Organization (social entity, goal-directed, deliberately structured)
- Drucker 5 tasks`,
  `**2. FUNGSI & HASIL**
- Planning → Organizing → Leading → Controlling
- Performance = Efficiency (input) + Effectiveness (hasil)`,
  `**3. MANAJER**
- Competencies: controller→enabler, … , stability→change
  - Bossless (Morning Star, FAVI)
- Skills: Technical / Human / Conceptual
  - When skills fail (Exh. 1.5: komunikasi #1)
- Transisi: individual identity → manager identity (Exh. 1.6)
- Activities: variety, fragmentation, brevity; time mgmt ABC
- Roles (10): Informational / Interpersonal / Decisional
- [di luar RPP] Nonprofit`,
  `**4. EVOLUSI: Things vs Humanity of Production**
- Classical: Scientific Mgmt, Bureaucracy, Admin. Principles
- Management Science (bagian classical): OR, OM, IT
- Humanistic: Human Relations, Human Resources (Theory X/Y), Behavioral Sciences`,
  `**5. MASA DEPAN**
- Technology-driven: Big data, IoT, Platform
- People-driven: Radical decentralization, Employee engagement`,
  '**6. AI: otomasi rutin + Nudge management**',
];

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Leading Edge Management',
  ref: 'Daft & Marcic, Understanding Management 12e · Ch. 1 (hal. 2–51) · RPP Pengantar Manajemen pertemuan 1',
  intro: 'Tatap muka pertama membangun seluruh kerangka dasar manajemen: apa itu **management** dan **organization**, empat fungsi manajemen, serta beda **efficiency** dan **effectiveness** sebagai ukuran kinerja organisasi. Dari situ pembahasan bergerak ke manajernya sendiri — kompetensi yang bergeser dari controller ke enabler, tren bossless, tiga jenis skill, penyebab kegagalan manajer, tantangan manajer baru, sampai sepuluh role Mintzberg. Paruh kedua menelusuri evolusi pemikiran manajemen sebagai tarik-menarik antara *things of production* dan *humanity of production*: perspektif classical (termasuk management science) dan humanistic, lalu arah manajemen ke depan dan peran AI. Ditutup dengan peta konsep siap mind map, contoh penerapan, analisis kasus SmartStyle Salons, dan alat bantu ujian.',
  objectives: [
    'Menjelaskan ruang lingkup mata kuliah serta cara kerja tugas presenter materi, presenter kasus, dan mind map.',
    'Menjelaskan konsep dasar management dan organization, empat fungsi manajemen, dan kompetensi manajer abad ke-21.',
    'Membedakan technical, human, dan conceptual skills serta menjelaskan peran, aktivitas, dan tantangan manajer baru.',
    'Menjelaskan organizational effectiveness, efficiency, dan performance sebagai konsep kinerja organisasi.',
    'Menguraikan evolusi pemikiran manajemen: perspektif classical (termasuk management science) dan humanistic.',
    'Menjelaskan arah manajemen di era digital, tren bossless organization, dan peran artificial intelligence.',
    'Menerapkan teori Chapter 1 untuk menganalisis kasus SmartStyle Salons dan merumuskan implikasi manajerial.',
  ],
  blocks: [
    // ---------------------------------------------------------------- §0
    { kind: 'h2', text: '0. Orientasi TM01' },
    {
      kind: 'p',
      text: '**Sub-CPMK TM01 (RPP):** mahasiswa mampu menjelaskan konsep dasar manajemen, fungsi inti manajemen, evolusi pemikiran manajemen, dan tantangan organisasi modern dengan mengaitkannya pada praktik bisnis nyata. Sub-CPMK ini mendukung CLO 1 (menjelaskan konsep, fungsi, dan evolusi manajemen) dan CLO 4 (menerapkan teori untuk menganalisis kasus).',
    },
    // Daftar, bukan tabel: kolom pertamanya mengelompokkan baris, dan di ponsel kelompok itu hilang saat tabel digeser.
    { kind: 'p', text: '**Cara memakai halaman ini untuk tugas kelompok** (format tugas mengikuti mekanisme perkuliahan):' },
    { kind: 'p', text: '**Presenter Materi**' },
    {
      kind: 'ol',
      items: [
        'Konsep utama chapter → §1–§11',
        'Hubungan antar konsep → §12 Peta Konsep',
        'Contoh penerapan di organisasi → §13 dan contoh di tiap bagian',
        'Bedah film → **Tidak ada di TM01**',
        'Kesimpulan dan implikasi manajerial → §15',
      ],
    },
    { kind: 'p', text: '**Presenter Kasus**' },
    {
      kind: 'ul',
      items: [
        'Case Summary → Problem Identification → Analisis Kasus → Jawaban Pertanyaan → Rekomendasi, seluruhnya di §14 (SmartStyle Salons)',
      ],
    },
    { kind: 'p', text: '**Non-presenter: Mind Map**' },
    {
      kind: 'ul',
      items: [
        'Konsep utama, hubungan antar konsep, struktur sistematis, kata kunci → §12 (cabang, garis silang, kata kunci)',
      ],
    },
    { kind: 'p', text: '**Non-presenter: pertanyaan kritis**' },
    {
      kind: 'ul',
      items: [
        'Minimal satu pertanyaan kritis → §16 Bank Pertanyaan Kritis',
      ],
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Cara memakai halaman ini',
      text: 'Presentasi dinilai dari pemahaman, bukan dari membaca slide. Pakai tabel di halaman ini untuk memahami, lalu jelaskan dengan kata-katamu sendiri.',
    },

    // ---------------------------------------------------------------- §1
    { kind: 'h2', text: '1. Apa itu Management dan Organization' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Istilah', 'Arti sederhana', 'Sumber'],
      rows: [
        ['**Management**', 'Mencapai tujuan organisasi secara **effective** dan **efficient** melalui **planning, organizing, leading, controlling** sumber daya organisasi.', '[hal. 5]'],
        ['**Organization**', 'Entitas sosial yang punya tujuan dan disusun dengan sengaja.', '[hal. 11]'],
      ],
    },
    { kind: 'p', text: 'Tiga unsur **organization** [hal. 11]:' },
    {
      kind: 'table',
      headers: ['Unsur', 'Artinya', 'Contoh dari buku'],
      rows: [
        ['Social entity', 'Terdiri dari dua orang atau lebih', 'Semua organisasi'],
        ['Goal-directed', 'Dirancang untuk mencapai suatu hasil', 'Profit (Target Stores), kebutuhan spiritual (Lutheran Church)'],
        ['Deliberately structured', 'Tugas dibagi dan tanggung jawab ditetapkan', 'Berlaku untuk for-profit maupun nonprofit'],
      ],
    },
    {
      kind: 'p',
      text: '**Lima tugas manajer menurut Peter Drucker** [hal. 8]: set goals, organize activities, motivate and communicate, measure performance, develop people.',
    },
    {
      kind: 'callout',
      variant: 'tip',
      title: 'Inti pekerjaan manajer',
      text: 'Inti pekerjaan manajer adalah menyelesaikan pekerjaan **melalui orang lain**. Manajer menata sistem dan kondisi supaya orang lain bisa berkinerja baik [hal. 4, 8].',
    },
    {
      kind: 'p',
      text: '**Mengapa manajemen penting:** studi McKinsey bersama London School of Economics atas sekitar 14.000 organisasi di lebih dari 30 negara menemukan bahwa perusahaan yang dikelola dengan baik punya produktivitas, nilai pasar, dan pertumbuhan lebih tinggi, serta lebih tahan dalam kondisi sulit [hal. 4–5].',
    },

    // ---------------------------------------------------------------- §2
    { kind: 'h2', text: '2. Empat Fungsi Manajemen' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Fungsi', 'Arti sederhana', 'Pertanyaan kunci', 'Contoh dari buku'],
      rows: [
        ['**Planning**', 'Menetapkan tujuan kinerja masa depan dan cara mencapainya', '"Mau ke mana, lewat jalan apa?"', 'Coca-Cola menetapkan tujuan spesifik untuk kesejahteraan komunitas, water neutrality, pemberdayaan pengusaha perempuan (Ekocenter) [hal. 10]'],
        ['**Organizing**', 'Menugaskan pekerjaan, mengelompokkan tugas ke departemen, mengalokasikan sumber daya', '"Siapa mengerjakan apa, dengan sumber daya apa?"', 'Stonecipher menyiapkan kebijakan, prosedur, dan struktur di Guidance Aviation [hal. 9]'],
        ['**Leading**', 'Memakai pengaruh untuk memotivasi karyawan mencapai tujuan', '"Bagaimana orang mau bergerak?"', 'Stonecipher mendukung dan menyemangati 50+ karyawannya [hal. 9]'],
        ['**Controlling**', 'Memantau aktivitas, menjaga organisasi tetap di jalur, dan melakukan koreksi', '"Sudah sesuai rencana? Apa yang perlu dikoreksi?"', 'Marne Levine membuat anggaran formal pertama Instagram [hal. 10]'],
      ],
      caption: 'Sumber definisi: [hal. 8–10].',
    },
    { kind: 'p', text: '**Alur proses manajemen (Exhibit 1.2)** [hal. 9]:' },
    {
      kind: 'table',
      headers: ['Resources (input)', 'Management functions (siklus)', 'Performance (hasil)'],
      rows: [
        ['Human', 'Planning', 'Attain goals'],
        ['Financial', 'Organizing', 'Products'],
        ['Raw materials', 'Leading', 'Services'],
        ['Technological', 'Controlling', 'Efficiency'],
        ['Information', '→ kembali ke Planning', 'Effectiveness'],
      ],
      caption: 'Exhibit 1.2 [hal. 9]: lima sumber daya masuk, diolah lewat empat fungsi, dan menghasilkan lima bentuk performance. Keempat fungsi membentuk siklus dan saling terhubung satu sama lain.',
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Pengecualian yang sering terlewat',
      text: 'Tren saat ini adalah mengurangi kontrol dari atas dan melatih karyawan memantau serta mengoreksi pekerjaannya sendiri. Namun tanggung jawab akhir atas controlling **tetap ada pada manajer** [hal. 10].',
    },

    // ---------------------------------------------------------------- §3
    { kind: 'h2', text: '3. Organizational Performance' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Konsep', 'Arti sederhana', 'Fokus', 'Sumber'],
      rows: [
        ['**Organizational effectiveness**', 'Sejauh mana organisasi mencapai tujuan yang dinyatakan; memberi produk/jasa yang dihargai pelanggan', '**Hasil**: apakah tujuannya tercapai?', '[hal. 11]'],
        ['**Organizational efficiency**', 'Jumlah sumber daya (bahan baku, uang, orang) yang dipakai untuk mencapai tujuan', '**Input**: berapa banyak sumber daya yang dipakai?', '[hal. 11]'],
        ['**Performance**', 'Kemampuan mencapai tujuan dengan memakai sumber daya secara efisien **dan** efektif', 'Keduanya sekaligus', '[hal. 12]'],
      ],
    },
    { kind: 'p', text: '**Contoh dari buku:**' },
    {
      kind: 'ul',
      items: [
        '**Square** membuat smartphone bisa menerima kartu kredit. Efisiensi naik (biaya lebih murah) dan efektivitas juga naik (usaha kecil tidak kehilangan penjualan) [hal. 11]. Efficiency dan effectiveness **bisa sama-sama tinggi**.',
        '**EMI** memangkas biaya terlalu keras. Laba operasi naik, tetapi kemampuan merekrut artis baru turun dan band lama pergi. Efisiensi merusak efektivitas, sehingga performance turun [hal. 12].',
        '**WeWork** jago menciptakan hype tetapi gagal mencapai operational excellence [hal. 11].',
        'Pelatihan praktik manajemen di 20 pabrik tekstil India menurunkan cacat produksi 50% dan menaikkan produktivitas serta laba (Bloom & Van Reenen). **Middle manager yang baik ikut menentukan hasil** [hal. 11].',
      ],
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Efficient belum tentu effective',
      text: 'Efficient belum tentu effective. Memotong biaya secara ekstrem bisa merusak kemampuan organisasi mencapai tujuannya [hal. 12].',
    },
    {
      kind: 'p',
      text: '**Catatan cakupan:** Chapter 1 membahas konsep performance, bukan alat ukurnya. Alat ukur kinerja organisasi dibahas di TM15 (Chapter 15, Managing Quality and Performance).',
    },

    // ---------------------------------------------------------------- §4
    { kind: 'h2', text: '4. Kompetensi Manajer Masa Kini dan Tren Bosslessness' },
    {
      kind: 'p',
      text: '**Mengapa kompetensi manajer berubah** [hal. 5]: teknologi (social media, mobile apps), ekonomi berbasis pengetahuan, AI, pasar global, cybercrime, dan ekspektasi karyawan serta pelanggan yang berubah. Akibatnya hierarki organisasi menurun dan pekerja makin berdaya.',
    },
    {
      kind: 'table',
      headers: ['Management principle', 'From (traditional)', 'To (new competencies)'],
      rows: [
        ['Overseeing work', 'Controller', '**Enabler**'],
        ['Accomplishing tasks', 'Supervising individuals', '**Leading teams**'],
        ['Managing relationships', 'Conflict and competition', '**Collaboration**, termasuk social media'],
        ['Leading', 'Autocratic', '**Empowering**, kadang bossless'],
        ['Designing', 'Maintaining stability', '**Mobilizing for change**'],
      ],
      caption: "Exhibit 1.1: Management Competencies for Today's World [hal. 5].",
    },
    {
      kind: 'ul',
      items: [
        '**Enabler**, bukan controller: membantu orang mendapat apa yang dibutuhkan, menyingkirkan hambatan, memberi kesempatan belajar, feedback, dan coaching [hal. 5].',
        '**Future-facing**: mendesain organisasi dan budaya untuk mengantisipasi ancaman dan peluang, menantang status quo, serta mendorong kreativitas dan inovasi [hal. 6].',
      ],
    },
    { kind: 'p', text: '**Contoh dari buku:**' },
    {
      kind: 'ul',
      items: [
        '**Caffè Panna** (Hallie Meyer) bertahan saat lockdown pandemi dengan tetap memegang misi intinya tetapi menjangkau pelanggan lewat cara baru: jendela penjualan, pre-order, delivery, pengiriman nasional, dan wholesale [hal. 6, 8].',
        'Beberapa tim bisbol MLB mengganti manajer dengan pemimpin yang lebih relasional; manajer Mariners bicara personal dengan tiap pemain setiap hari [hal. 7].',
      ],
    },
    { kind: 'h3', text: 'Trend Toward Bosslessness [hal. 7–8]' },
    {
      kind: 'p',
      text: '**Bossless design** menyerahkan otoritas dan tanggung jawab manajemen kepada karyawan. Paling tidak 18 organisasi di dunia beroperasi terutama tanpa bos, termasuk FAVI, Morning Star, dan Mondragon [hal. 7].',
    },
    {
      kind: 'table',
      headers: ['Keuntungan', 'Tantangan'],
      rows: [
        ['Fleksibilitas lebih tinggi', 'Perlu investasi training dan pengembangan karyawan yang terus-menerus'],
        ['Inisiatif dan komitmen karyawan lebih besar', 'Budaya harus benar-benar mendukung lingkungan tanpa hierarki'],
        ['Keputusan lebih baik dan lebih cepat', 'Sebagian ahli meragukan tren ini akan bertahan lama [hal. 7]'],
        ['Overhead lebih rendah', ''],
      ],
      caption: 'Sumber: [hal. 8].',
    },
    {
      kind: 'p',
      text: '**Contoh dari buku, Morning Star:** pengolah tomat terbesar di dunia yang tidak punya jabatan, hierarki, atau manajer. Karyawan (disebut *colleagues*) membuat kesepakatan kerja dengan rekan lewat Colleague Letters of Understanding (CLOUs). Semua dilatih menjalankan planning, organizing, leading, dan controlling sendiri [hal. 7].',
    },

    // ---------------------------------------------------------------- §5
    { kind: 'h2', text: '5. Management Skills' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Skill', 'Arti sederhana', 'Paling menonjol pada', 'Contoh dari buku'],
      rows: [
        ['**Technical**', 'Memahami dan cakap melakukan tugas spesifik', 'Nonmanager (individual contributor)', 'Elon Musk: gelar fisika dan ekonomi [hal. 13]'],
        ['**Human**', 'Bekerja dengan dan melalui orang lain; efektif sebagai anggota kelompok', 'Makin penting di **semua level**', 'Riset Google tentang manajer yang baik (Exhibit 1.4) [hal. 13]'],
        ['**Conceptual**', 'Melihat organisasi sebagai **satu sistem utuh** dan hubungan antarbagiannya', 'Semua manajer, **terutama manajer puncak**', 'Ursula Burns mentransformasi Xerox [hal. 14]'],
      ],
      caption: 'Sumber definisi: [hal. 13–15].',
    },
    { kind: 'p', text: '**Exhibit 1.3** [hal. 12] membandingkan dua kelompok saja:' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Kelompok', 'Technical', 'Human', 'Conceptual'],
      rows: [
        ['Nonmanagers (individual contributors)', 'Besar', 'Sedang', 'Kecil'],
        ['Middle managers', 'Kecil', 'Besar', 'Besar'],
      ],
      caption: 'Exhibit 1.3 [hal. 12] hanya memuat dua kelompok ini; Chapter 1 tidak menyajikan tingkatan manajer lain.',
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Yang berubah saat dipromosikan',
      text: 'Saat seseorang dipromosikan menjadi manajer, porsi skill yang dibutuhkan bergeser drastis. Technical skill yang membuatnya dipromosikan **tidak lagi cukup** [hal. 12–13].',
    },
    {
      kind: 'p',
      text: "**Exhibit 1.4: Google's Top 10 Behaviors for Managers** [hal. 13]. Hampir semuanya human skills; technical skill hanya berada di urutan 8.",
    },
    {
      kind: 'ol',
      items: [
        'Be a good coach.',
        "Empower your team and don't micromanage.",
        'Create an inclusive team environment.',
        'Be productive and results-oriented.',
        'Be a good communicator and listen to your team.',
        'Support career development and discuss performance.',
        'Have a clear vision and strategy for the team.',
        'Have key technical skills.',
        'Collaborate across Google.',
        'Be a strong decision maker.',
      ],
    },
    { kind: 'h3', text: 'When Skills Fail [hal. 14–15]' },
    {
      kind: 'p',
      text: 'Kelemahan manajer paling terlihat saat **perubahan cepat, ketidakpastian, atau krisis** [hal. 14]. Contohnya **Volkswagen**: target pertumbuhan tercapai, tetapi budaya yang sangat menekan berujung pada skandal software emisi diesel [hal. 14].',
    },
    {
      kind: 'table',
      headers: ['#', 'Penyebab', '% manajer yang menyebut'],
      rows: [
        ['1', 'Ineffective communication skills and practices', '81%'],
        ['2', 'Poor work relationships / interpersonal skills', '78%'],
        ['3', 'Person-job mismatch', '69%'],
        ['4', 'Failure to clarify direction or performance expectations', '64%'],
        ['5', 'Failure to adapt and break old habits', '57%'],
        ['6', 'Breakdown of delegation and empowerment', '56%'],
        ['7', 'Lack of personal integrity and trustworthiness', '52%'],
        ['8', 'Inability to develop cooperation and teamwork', '50%'],
        ['9', 'Inability to lead/motivate others', '47%'],
        ['10', 'Poor planning practices / reactionary behavior', '45%'],
      ],
      caption: 'Exhibit 1.5: Top Causes of Manager Failure [hal. 15].',
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dua penyebab teratas adalah human skills',
      text: 'Dua penyebab teratas kegagalan manajer adalah soal **human skills**: komunikasi dan hubungan kerja [hal. 15].',
    },

    // ---------------------------------------------------------------- §6
    { kind: 'h2', text: '6. Tantangan Manajer Baru' },
    {
      kind: 'p',
      text: 'Menjadi manajer bukan sekadar belajar skill baru, tetapi **transformasi personal identity**: melepas kebiasaan lama dan belajar cara berpikir baru (riset Linda Hill terhadap 19 manajer baru) [hal. 16].',
    },
    {
      kind: 'table',
      headers: ['From: Individual identity', 'To: Manager identity'],
      rows: [
        ['Specialist; performs specific tasks', 'Generalist; coordinates diverse tasks'],
        ['Gets things done through own efforts', 'Gets things done **through others**'],
        ['An individual actor', 'A **network builder**'],
        ['Works relatively independently', 'Works in **highly interdependent** manner'],
      ],
      caption: 'Exhibit 1.6: Making the Leap from Individual Performer to Manager [hal. 16].',
    },
    { kind: 'p', text: '**Dua jebakan manajer baru** [hal. 16–17]:' },
    {
      kind: 'ol',
      items: [
        '**Ingin mengerjakan semuanya sendiri**, alih-alih mendelegasikan dan mengembangkan kemampuan orang lain.',
        '**Mengira akan lebih bebas**, padahal manajer terikat banyak saling ketergantungan (interdependencies).',
      ],
    },
    {
      kind: 'p',
      text: '**Contoh dari buku:** **Mark Zuckerberg** unggul sebagai individual performer, tetapi kesulitan dengan manajemen sehari-hari. Ia merekrut manajer berpengalaman seperti Sheryl Sandberg dan mencari mentor [hal. 15–16].',
    },
    {
      kind: 'callout',
      variant: 'tip',
      title: 'Kelompok yang paling rentan',
      text: 'First-line supervisor adalah kelompok manajer yang paling rentan burnout dan keluar [hal. 15]. Itu sebabnya banyak organisasi kini menyediakan training bagi manajer baru [hal. 17].',
    },

    // ---------------------------------------------------------------- §7
    { kind: 'h2', text: '7. Pekerjaan Manajer Sebenarnya: Activities dan Roles' },
    {
      kind: 'p',
      text: 'Henry Mintzberg mengikuti dan mencatat aktivitas manajer, lalu merumuskan **3 karakteristik umum** dan **10 roles** [hal. 17].',
    },
    { kind: 'h3', text: '7a. Manager Activities [hal. 18–20]' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Karakteristik', 'Artinya', 'Bukti dari buku'],
      rows: [
        ['**Adventures in multitasking**', 'Kerja manajer beragam (variety), terpotong-potong (fragmentation), dan singkat (brevity)', 'Top executive rata-rata < 9 menit per aktivitas; sebagian first-line supervisor satu aktivitas tiap 48 detik [hal. 18]'],
        ['**Life on speed dial**', 'Ritme kerja cepat tanpa henti, banyak gangguan tak terduga', 'Kontak dan rapat umumnya ad hoc; teknologi mempercepat ritme [hal. 19]'],
        ['**Where does a manager find the time?**', 'Waktu adalah sumber daya paling berharga manajer', 'Manajer sukses mendahulukan hal penting [hal. 20]'],
      ],
    },
    {
      kind: 'p',
      text: '**Time management** = teknik untuk menyelesaikan lebih banyak dalam waktu lebih singkat dengan hasil lebih baik [hal. 20]. Tips dari buku:',
    },
    {
      kind: 'ul',
      items: [
        'Buat **to-do list**.',
        'Pakai sistem **ABC**: **A** penting dan wajib (konsekuensi serius); **B** sebaiknya dikerjakan (konsekuensi kecil); **C** bagus bila sempat (tanpa konsekuensi); **D** delegasikan.',
        'Jadwalkan hari kerja dan kerjakan tugas besar lebih dulu.',
        'Lakukan **satu hal pada satu waktu**, karena multitasking justru menurunkan produktivitas.',
      ],
    },
    { kind: 'h3', text: '7b. Manager Roles [hal. 21–22]' },
    { kind: 'p', text: '**Role** = seperangkat ekspektasi atas perilaku manajer [hal. 21].' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Kategori', 'Role', 'Aktivitas'],
      rows: [
        ['**Informational** (managing by information)', 'Monitor', 'Mencari dan menerima informasi; memindai web, laporan; menjaga kontak'],
        ['', 'Disseminator', 'Meneruskan informasi ke anggota organisasi'],
        ['', 'Spokesperson', 'Menyampaikan informasi ke pihak luar lewat pidato, laporan'],
        ['**Interpersonal** (managing through people)', 'Figurehead', 'Tugas seremonial dan simbolis: menyambut tamu, menandatangani dokumen resmi'],
        ['', 'Leader', 'Mengarahkan, memotivasi, melatih, konseling, berkomunikasi dengan bawahan'],
        ['', 'Liaison', 'Menjaga jalur informasi di dalam dan di luar organisasi'],
        ['**Decisional** (managing through action)', 'Entrepreneur', 'Memulai proyek perbaikan; mencari ide baru'],
        ['', 'Disturbance handler', 'Mengambil tindakan korektif saat konflik atau krisis; menyelesaikan perselisihan bawahan'],
        ['', 'Resource allocator', 'Memutuskan siapa mendapat sumber daya; jadwal, anggaran, prioritas'],
        ['', 'Negotiator', 'Mewakili kepentingan tim saat negosiasi anggaran, kontrak serikat, pembelian'],
      ],
      caption: 'Exhibit 1.7: Ten Manager Roles [hal. 21]. Baris kosong pada kolom pertama adalah lanjutan kategori di atasnya.',
    },
    { kind: 'p', text: '**Hubungan penting:**' },
    {
      kind: 'ul',
      items: [
        'Setiap role adalah aktivitas untuk menjalankan **empat fungsi** manajemen. Dalam praktik, semua role **saling berinteraksi**, tidak berdiri sendiri [hal. 21].',
        '**Exhibit 1.8:** makin tinggi posisi manajer, pentingnya **leader role cenderung menurun** dan **liaison role meningkat** [hal. 21–22].',
        'Bobot role juga dipengaruhi posisi di hierarki, skill pribadi, jenis organisasi, tujuan departemen, dan perubahan lingkungan [hal. 21–22].',
        '**Disseminator** dan **spokesperson** menjadi krusial saat krisis [hal. 21].',
      ],
    },
    { kind: 'p', text: '**Contoh dari buku:**' },
    {
      kind: 'ul',
      items: [
        '**Boeing 737 MAX:** CEO Dennis Muilenburg terlalu bergantung pada data dan nasihat hukum, sehingga ketegangan dengan pelanggan dan regulator justru membesar. Ia gagal menjalankan peran disseminator dan spokesperson saat krisis [hal. 21–22].',
        '**National Foods (Pakistan):** supervisor menilai kondisi pekerja setiap pagi dan menyesuaikan shift (leader role). Manajer membangun sumber informasi soal keamanan (liaison role) [hal. 22].',
      ],
    },

    // ---------------------------------------------------------------- §8
    { kind: 'h2', text: '8. Managing in Nonprofit Organizations (di luar RPP: pengayaan singkat)' },
    { kind: 'p', text: 'Fungsi, skill, dan aktivitas manajemen berlaku sama di nonprofit, tetapi konteksnya berbeda [hal. 23–24].' },
    {
      kind: 'table',
      headers: ['Aspek', 'Bisnis', 'Nonprofit'],
      rows: [
        ['Arah usaha', 'Menghasilkan uang bagi perusahaan dan pemilik', 'Menghasilkan **dampak sosial**'],
        ['Sumber dana', 'Penjualan produk/jasa ke pelanggan', 'Pajak, appropriations, grants, donasi'],
        ['Ukuran efektivitas', 'Relatif jelas (pendapatan vs biaya)', 'Ambigu dan intangible ("meningkatkan kesehatan publik")'],
        ['Orang yang dikelola', 'Karyawan', 'Juga relawan dan donor, yang tidak bisa diawasi seperti karyawan'],
        ['Role Mintzberg yang lebih ditekankan', '—', 'Spokesperson, leader, resource allocator'],
      ],
      caption: 'Perbandingan bisnis dan nonprofit [hal. 23–24].',
    },
    {
      kind: 'p',
      text: '**Contoh dari buku:** Second Harvest Food Bank memakai software logistik untuk memantau tanggal kedaluwarsa dan berhasil memangkas limbah 50% [hal. 24].',
    },

    // ---------------------------------------------------------------- §9
    { kind: 'h2', text: '9. Evolusi Pemikiran Manajemen' },
    { kind: 'h3', text: '9a. The Historical Struggle: Things of Production vs Humanity of Production [hal. 25–26]' },
    { kind: 'p', text: 'Sejarah manajemen adalah tarik-menarik antara dua fokus:' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Fokus', 'Isi', 'Tujuan utama', 'Contoh perspektif'],
      rows: [
        ['**Things of production**', 'Desain organisasi, alur kerja, sistem, dan kontrol', 'Efisiensi produksi', 'Classical perspective'],
        ['**Humanity of production**', 'Kebutuhan manusia akan motivasi dan engagement', 'Meningkatkan efektivitas', 'Humanistic perspective'],
      ],
      caption: 'Sumber: Exhibit 1.10 [hal. 26].',
    },
    {
      kind: 'ul',
      items: [
        'Classical perspective sering mengabaikan kebutuhan manusia demi efisiensi dan profit. Pada 1920–1930-an, perlakuan positif terhadap karyawan "ditemukan" sebagai jalan lain menuju efisiensi dan profit [hal. 26].',
        'Belajar sejarah manajemen bukan menghafal urutan peristiwa, tetapi memahami pengaruh kekuatan sosial terhadap organisasi. Ini melatih strategic thinking dan **conceptual skills** [hal. 25].',
      ],
    },
    {
      kind: 'p',
      text: '**Exhibit 1.9: Management Perspectives over Time** [hal. 25]. Pendekatan yang tercantum, sesuai susunan exhibit dari bawah ke atas:',
    },
    { kind: 'ol', items: EXHIBIT_1_9_PERSPECTIVES },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Batas cakupan Exhibit 1.9',
      text: 'Systems Thinking, Contingency View, dan TQM hanya muncul sebagai label di Exhibit 1.9. Chapter 1 edisi ini tidak menjelaskannya. Timeline hanya menunjukkan kapan sebuah pendekatan dominan; unsur-unsurnya tetap dipakai sampai sekarang [hal. 26].',
    },

    { kind: 'h3', text: '9b. Classical Perspective [hal. 27–33]' },
    {
      kind: 'p',
      text: '**Konteks:** sistem pabrik abad ke-19 memunculkan masalah baru, seperti penjadwalan produksi yang rumit, pelatihan pekerja, dan pemogokan. Dari situ lahir "salaried manager". Jumlah manajer profesional di AS naik dari 161.000 (1880) menjadi lebih dari 1 juta (1920) [hal. 27].',
    },
    { kind: 'p', text: 'Classical perspective punya **empat subbidang** [hal. 27]:' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Subbidang', 'Fokus', 'Tokoh', 'Ide kunci', 'Contoh dari buku'],
      rows: [
        ['**Scientific management**', 'Produktivitas **pekerja individu**', 'Frederick W. Taylor; Henry Gantt; Frank & Lillian Gilbreth', 'Pekerjaan dan praktik manajemen ditentukan lewat studi ilmiah, menggantikan kebiasaan dan tradisi', 'Bethlehem Steel; lini perakitan Ford [hal. 27]'],
        ['**Bureaucratic organizations**', 'Organisasi **secara utuh**', 'Max Weber', 'Organisasi dikelola secara impersonal dan rasional', 'UPS [hal. 30]'],
        ['**Administrative principles**', '**Total organization**', 'Henri Fayol; Charles C. Spaulding', 'Prinsip dan fungsi umum manajemen', 'North Carolina Mutual (Spaulding) [hal. 31]'],
        ['**Management science**', '**Keputusan** berbasis kuantitatif', '(tim ilmuwan PD II)', 'Matematika, statistik, dan komputer untuk memecahkan masalah', 'Disney FastPass [hal. 32]'],
      ],
    },

    { kind: 'p', text: '**1) Scientific Management** [hal. 27–28]' },
    {
      kind: 'ul',
      items: [
        // Dua tanda dollar dalam satu teks akan dibaca sebagai rumus KaTeX, jadi keduanya di-escape (\\$ -> "$").
        'Taylor (*father of scientific management*): produktivitas naik bila keputusan berbasis prosedur presisi hasil studi cermat. Di **Bethlehem Steel** (1898), dengan gerakan, alat, dan urutan yang tepat, tiap pekerja bisa memuat 47,5 ton per hari (sebelumnya 12,5 ton), dengan upah naik dari \\$1,15 menjadi \\$1,85 per hari [hal. 27].',
        'Henry Gantt: **Gantt chart**. Frank Gilbreth: **time and motion study**, mencari "one best way". Lillian Gilbreth: aspek manusia dalam kerja, pelopor industrial psychology [hal. 27–28].',
      ],
    },
    {
      kind: 'table',
      headers: ['General approach', 'Contributions', 'Criticisms'],
      rows: [
        ['Metode standar untuk setiap pekerjaan', 'Menunjukkan pentingnya kompensasi atas kinerja', 'Mengabaikan konteks sosial kerja dan kebutuhan pekerja yang lebih tinggi'],
        ['Memilih pekerja dengan kemampuan yang sesuai', 'Memulai studi cermat atas tugas dan pekerjaan', 'Tidak mengakui perbedaan antarindividu'],
        ['Melatih pekerja dengan metode standar', 'Menunjukkan pentingnya seleksi dan training', 'Menganggap pekerja tidak paham dan mengabaikan ide mereka'],
        ['Mendukung pekerja (merencanakan kerja, menghilangkan interupsi)', '', ''],
        ['Memberi insentif upah untuk output lebih tinggi', '', ''],
      ],
      caption: 'Exhibit 1.11: Characteristics of Scientific Management [hal. 28].',
    },
    {
      kind: 'ul',
      items: [
        '**Masih dipakai sekarang:** Meijer dan Hannaford memakai sistem komputer yang memecah tugas kasir menjadi unit terukur dengan waktu standar [hal. 28]. Harvard Business Review menempatkan scientific management di urutan teratas 12 inovasi yang membentuk manajemen modern [hal. 28].',
        '**Risikonya:** pekerja merasa dieksploitasi. Serikat pekerja UFCW mengajukan keluhan atas sistem di Meijer [hal. 28].',
      ],
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Contoh di luar buku (1/3)',
      text: 'Jaringan restoran cepat saji umumnya memakai prosedur standar (SOP) untuk menyiapkan dan menyajikan menu, sehingga produk dan layanan seragam di banyak gerai. Ini jejak ide scientific management: satu metode standar, pekerja dilatih dengan metode itu.',
    },

    { kind: 'p', text: '**2) Bureaucratic Organizations** [hal. 28–30]' },
    {
      kind: 'ul',
      items: [
        '**Masalah yang ingin diatasi:** organisasi Eropa akhir 1800-an dikelola secara personal dan kekeluargaan, sehingga sumber daya dipakai untuk kepentingan pribadi, bukan tujuan organisasi [hal. 28–29].',
      ],
    },
    { kind: 'p', text: '**Exhibit 1.12: Characteristics of Weberian Bureaucracy** [hal. 29]' },
    {
      kind: 'ol',
      items: [
        'Division of labor, dengan definisi otoritas dan tanggung jawab yang jelas.',
        'Posisi disusun dalam hierarki otoritas.',
        'Manajer tunduk pada aturan dan prosedur, sehingga perilaku andal dan dapat diprediksi.',
        'Manajemen terpisah dari kepemilikan organisasi.',
        'Tindakan dan keputusan administratif dicatat secara tertulis.',
        'Personel dipilih dan dipromosikan berdasarkan kualifikasi teknis.',
      ],
    },
    {
      kind: 'table',
      headers: ['Sisi positif', 'Sisi negatif'],
      rows: [
        ['Rasional dan efisien; kontinuitas melekat pada posisi, bukan orang [hal. 29]', 'Identik dengan red tape dan aturan tanpa akhir [hal. 29]'],
        ['Aturan berlaku sama untuk semua; semua tahu aturannya [hal. 30]', 'Weber sendiri melihatnya sebagai ancaman bagi kebebasan pribadi [hal. 30]'],
      ],
    },
    {
      kind: 'p',
      text: '**Contoh dari buku, UPS:** pengemudi baru menghafal lebih dari 600 "methods" wajib, dari cara memuat truk hingga cara membawa kunci. CEO-nya memulai karier sebagai pemuat paket paruh waktu dan naik melalui hierarki [hal. 30].',
    },

    { kind: 'p', text: '**3) Administrative Principles** [hal. 30–31]' },
    {
      kind: 'ul',
      items: [
        '**Henri Fayol**, dalam *General and Industrial Management*, merumuskan **14 prinsip**. Buku hanya menguraikan empat di antaranya:',
      ],
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Prinsip Fayol', 'Arti'],
      rows: [
        ['Unity of command', 'Setiap bawahan menerima perintah dari satu atasan saja'],
        ['Division of work', 'Pekerjaan manajerial dan teknis dispesialisasi agar hasil lebih banyak dan lebih baik'],
        ['Unity of direction', 'Aktivitas yang serupa dikelompokkan di bawah satu manajer'],
        ['Scalar chain', 'Rantai otoritas dari puncak sampai bawah, mencakup setiap karyawan'],
      ],
      caption: 'Empat dari 14 prinsip Fayol yang diuraikan buku [hal. 30].',
    },
    {
      kind: 'ul',
      items: [
        'Fayol juga merumuskan **5 fungsi/elemen manajemen**: planning, organizing, commanding, coordinating, controlling. Fungsi-fungsi ini mendasari banyak teori manajemen umum saat ini [hal. 30].',
        '**Charles Clinton Spaulding** ("father of African-American management") menulis 8 "fundamental necessities". Buku menguraikan empat: authority and responsibility; division of labor; adequate manpower; cooperation and teamwork [hal. 31].',
      ],
    },

    { kind: 'p', text: '**4) Management Science** (quantitative perspective) [hal. 31–33]' },
    {
      kind: 'ul',
      items: [
        'Muncul pertengahan abad ke-20 dari tim ilmuwan yang memecahkan masalah militer Perang Dunia II. Pendekatan ini memakai matematika, statistik, dan teknik kuantitatif, lalu diperkuat oleh komputer [hal. 31–32].',
      ],
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Subset', 'Isi', 'Sumber'],
      rows: [
        ['**Operations research**', 'Membangun model matematis untuk masalah manajerial', '[hal. 32]'],
        ['**Operations management**', 'Produksi fisik barang/jasa: forecasting, inventory modeling, linear programming, queuing theory, scheduling, simulation, break-even analysis', '[hal. 32]'],
        ['**Information technology (IT)**', 'Sistem informasi manajemen yang memberi informasi tepat waktu dan hemat biaya', '[hal. 32–33]'],
      ],
    },
    {
      kind: 'ul',
      items: [
        '**Digital organization:** komputer dan internet mengambil alih makin banyak tugas, sampai teknologi digital menjadi senjata kompetitif utama [hal. 33].',
        '**Batasnya:** terlalu bergantung pada model kuantitatif bisa berbahaya. Contohnya krisis mortgage 2007–2008 dan dominasi "quants" di lembaga keuangan [hal. 33].',
      ],
    },

    { kind: 'h3', text: '9c. Humanistic Perspective [hal. 34–39]' },
    {
      kind: 'p',
      text: 'Humanistic perspective menekankan pemahaman atas perilaku, kebutuhan, dan sikap manusia di tempat kerja, serta interaksi sosial dan proses kelompok [hal. 34].',
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Tokoh', 'Kontribusi'],
      rows: [
        ['**Mary Parker Follett**', 'Common superordinate goals untuk meredam konflik; kepemimpinan berfokus pada manusia, bukan teknik ("Don\'t hug your blueprints"); empowering dan facilitating, bukan controlling'],
        ['**Chester I. Barnard**', '**Informal organization** (klik, jaringan informal, kelompok sosial alami) sebagai kekuatan yang bisa membantu organisasi; **acceptance theory of authority**: karyawan punya kehendak bebas dan bisa memilih mengikuti perintah atau tidak'],
      ],
      caption: 'Early advocates [hal. 34–35].',
    },
    { kind: 'p', text: '**Tiga subbidang humanistic perspective:**' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Subbidang', 'Ide inti', 'Tokoh / studi', 'Sumber'],
      rows: [
        ['**Human relations movement**', 'Kontrol yang efektif datang dari dalam diri pekerja, bukan dari kontrol otoriter', 'Hawthorne studies (Mayo & Roethlisberger)', '[hal. 35–36]'],
        ['**Human resources perspective**', 'Desain tugas harian dipadukan dengan teori motivasi; pekerjaan harus memungkinkan orang memakai potensi penuhnya', 'Abraham Maslow; Douglas McGregor', '[hal. 37–38]'],
        ['**Behavioral sciences approach**', 'Metode ilmiah dari sosiologi, psikologi, antropologi, dan ekonomi untuk memahami perilaku di organisasi', 'Organization development (OD)', '[hal. 39]'],
      ],
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Tafsiran awal', 'Reanalisis kemudian'],
      rows: [
        ['Output naik bukan karena uang, tetapi karena **human relations**: manajer memperlakukan pekerja dengan baik', '**Uang mungkin faktor terpenting**; masuk kelompok eksperimen berarti kenaikan pendapatan besar. Rasa dianggap penting dan kebanggaan kelompok juga berperan'],
      ],
      caption: 'Hawthorne studies: dua tafsiran [hal. 35–36].',
    },
    {
      kind: 'ul',
      items: [
        '**Hawthorne effect:** peneliti yang terlalu terlibat bisa memengaruhi hasil eksperimen. Ini istilah **metodologi riset** [hal. 36].',
        '**Nilai historisnya:** terlepas dari kelemahan metodenya, studi ini memicu cara pandang bahwa karyawan lebih dari sekadar perpanjangan mesin produksi [hal. 36].',
      ],
    },
    { kind: 'p', text: '**Human resources perspective** [hal. 37–38]' },
    {
      kind: 'ul',
      items: [
        'Human relations awal dikritik sebagai "dairy farm view": sapi yang puas memberi lebih banyak susu, jadi pekerja yang puas bekerja lebih banyak [hal. 37].',
        '**Maslow:** hierarki kebutuhan physiological → safety → belongingness → esteem → self-actualization. Dibahas lebih rinci di Chapter 12 [hal. 37].',
        '**McGregor:** classical perspective berbasis asumsi Theory X, sementara human relations awal hanya versi Theory X yang sedikit dimodifikasi. McGregor mengusulkan Theory Y [hal. 38].',
      ],
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Theory X (asumsi)', 'Theory Y (asumsi)'],
      rows: [
        ['Rata-rata orang tidak suka bekerja dan menghindarinya bila bisa', 'Mengeluarkan usaha fisik dan mental dalam bekerja sama alaminya dengan bermain atau istirahat'],
        ['Karena itu orang harus dipaksa, dikontrol, diarahkan, atau diancam hukuman', 'Kontrol eksternal dan ancaman bukan satu-satunya cara; orang mengarahkan dan mengontrol diri demi tujuan yang ia komitmenkan'],
        ['Orang lebih suka diarahkan, menghindari tanggung jawab, kurang ambisi, dan mengutamakan rasa aman', 'Dalam kondisi yang tepat, orang tidak hanya menerima tetapi **mencari** tanggung jawab'],
        ['', 'Kemampuan berimajinasi dan berkreasi untuk memecahkan masalah tersebar luas di populasi'],
        ['', 'Dalam kehidupan industri modern, potensi intelektual orang baru terpakai sebagian'],
      ],
      caption: 'Exhibit 1.13: Theory X vs Theory Y [hal. 38]. Tiga asumsi X dan lima asumsi Y.',
    },
    {
      kind: 'p',
      text: '**Contoh dari buku, Buurtzorg (Belanda):** lebih dari 9.000 perawat bekerja dalam tim mandiri berisi 10–12 orang, dengan kurang dari 50 staf administrasi. Hasilnya produktivitas, kepuasan karyawan dan pasien, serta kualitas layanan lebih tinggi dengan biaya lebih rendah [hal. 38].',
    },
    { kind: 'p', text: '**Behavioral sciences approach** [hal. 39]' },
    {
      kind: 'ul',
      items: [
        'Contoh: Instagram meriset tes dan wawancara terbaik untuk seleksi; Kohl\'s dan Wendy\'s melatih manajer baru soal motivasi karyawan.',
        '**Organization development (OD)** muncul pada 1970-an untuk meningkatkan kesehatan organisasi: kemampuan menghadapi perubahan, relasi internal, dan pemecahan masalah. Dibahas di Chapter 8.',
        'Ide lain yang lahir dari pendekatan ini: matrix organizations, self-managed teams, corporate culture, management by wandering around.',
      ],
    },

    { kind: 'h3', text: '9d. Perbandingan Besar: Classical vs Humanistic vs Management Science' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Aspek', 'Classical (SM, Bureaucracy, Admin. Principles)', 'Management Science', 'Humanistic'],
      rows: [
        ['Posisi dalam buku', 'Perspektif pertama', '**Subbidang ke-4 classical perspective** [hal. 27, 31]', 'Perspektif kedua'],
        ['Fokus utama', 'Things of production: efisiensi, struktur, aturan', 'Keputusan kuantitatif untuk masalah kompleks', 'Humanity of production: kebutuhan, perilaku, kelompok'],
        ['Asumsi tentang manusia', 'Pekerja bisa "dikalibrasi ulang seperti mesin" [hal. 27]; sejalan dengan Theory X [hal. 38]', 'Masalah bisa dimodelkan secara matematis', 'Pekerja punya kebutuhan sosial dan potensi (Theory Y)'],
        ['Tokoh', 'Taylor, Gilbreth, Gantt, Weber, Fayol, Spaulding', 'Tim ilmuwan PD II', 'Follett, Barnard, Mayo, Maslow, McGregor'],
        ['Kelebihan', 'Produktivitas naik drastis; dasar struktur modern', 'Alat bantu keputusan untuk masalah besar', 'Engagement, kreativitas, efektivitas'],
        ['Keterbatasan', 'Mengabaikan konteks sosial, variasi individu, ide pekerja', 'Terlalu bergantung pada model bisa berbahaya (krisis 2007–2008)', 'Human relations awal terlalu sederhana ("dairy farm view")'],
        ['Jejaknya kini', 'Meijer, Hannaford, UPS', 'Disney FastPass, IT, digital organization', 'Buurtzorg, Zappos, OD, self-managed teams'],
      ],
      caption: 'Tabel sintesis dari hal. 25–39; setiap sel bersumber pada halaman yang dirujuk di bagian 9a–9c.',
    },

    // ---------------------------------------------------------------- §10
    { kind: 'h2', text: '10. Manajemen ke Depan: Technology-Driven dan People-Driven Workplace (ringkas)' },
    {
      kind: 'p',
      text: 'Survei Bain & Company mencatat lima tren: pergeseran dari hierarki ke empowered teams, pemanfaatan teknologi digital, fokus membangun budaya, penguatan relasi pelanggan, dan kontrol biaya. Tren ini kembali jatuh ke dua kategori lama, **things** dan **humanity of production** [hal. 40].',
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Workplace', 'Konsep', 'Arti singkat', 'Contoh dari buku'],
      rows: [
        ['**Technology-driven**', 'Big data analytics', 'Teknologi, skill, dan proses untuk menelusuri data masif dan kompleks demi menemukan pola dan korelasi tersembunyi', 'Rekomendasi produk Amazon [hal. 41]'],
        ['', 'Internet of Things (IoT)', 'Benda-benda yang terhubung dan saling bertukar data', 'Sensor turbin angin Siemens Gamesa [hal. 41]'],
        ['', 'Platform-based organization', 'Menciptakan nilai dengan menghubungkan dua kelompok yang saling bergantung, biasanya produsen dan konsumen', 'Uber, YouTube, Airbnb [hal. 41–42]'],
        ['**People-driven**', 'Radical decentralization', 'Hubungan pelaporan atasan–bawahan hampir hilang; karyawan punya otoritas penuh atas keputusan kerjanya', '1Sale.com [hal. 43]'],
        ['', 'Employee engagement', 'Terlibat secara emosional, puas, berkontribusi antusias, dan merasa memiliki organisasi serta misinya', 'Plante Moran [hal. 43–44]'],
      ],
      caption: 'Baris kosong pada kolom pertama adalah lanjutan kategori di atasnya.',
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Pipe (linear) organization', 'Platform-based organization'],
      rows: [
        ['Mengambil sumber daya, memproduksi, lalu mendorong hasil ke pelanggan secara berurutan', 'Menghubungkan produsen dan konsumen lewat teknologi digital'],
        ['Mengontrol inventori lewat supply chain', 'Tidak membuat barang; menurunkan biaya pertukaran'],
        ['Nilai bertumpu pada aset yang dimiliki', 'Nilai bertumpu pada sumber daya yang bisa **dihubungkan**'],
      ],
      caption: 'Pipe vs Platform [hal. 41–42].',
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Contoh di luar buku (2/3)',
      text: 'Gojek dan Tokopedia adalah contoh platform-based organization di Indonesia. Aplikasinya menghubungkan mitra atau penjual dengan konsumen, sementara perusahaan menyediakan platformnya, bukan memproduksi sendiri barang atau jasa yang dipertukarkan.',
    },
    {
      kind: 'p',
      text: '**Empat ide inti radical decentralization** [hal. 43]: orang berkembang bila diberi tanggung jawab lebih; otoritas keputusan sebaiknya ada pada orang yang paling dekat dengan pekerjaannya; orang membawa energi dan kreativitas lebih bila bebas berekspresi; orang lebih bahagia bila mengontrol pekerjaannya sendiri.',
    },

    // ---------------------------------------------------------------- §11
    { kind: 'h2', text: '11. AI dan Historical Struggle (ringkas)' },
    {
      kind: 'ul',
      items: [
        '**Artificial intelligence (AI):** teknik yang membuat sistem komputer bisa belajar, bernalar, mempersepsi, menyimpulkan, berkomunikasi, dan mengambil keputusan setara atau lebih baik dari manusia [hal. 44].',
        '**Dampak terbesarnya** ada pada pekerjaan rutin dan administratif, seperti mengecek catatan pelanggan, mengisi spreadsheet, dan membayar tagihan. Manusia bergeser ke pekerjaan interpersonal dan empatik yang tidak bisa dilakukan AI [hal. 44–45].',
        '**Nudge management:** menerapkan wawasan behavioral sciences untuk mendesain elemen organisasi yang mengarahkan orang ke perilaku yang mendukung tujuan dan nilai organisasi. Contohnya **Humu**, yang mengirim pengingat kecil kepada manajer Sweetgreen [hal. 45].',
      ],
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'AI sebagai jembatan',
      text: 'Untuk pertama kalinya, sebuah "thing of production" (AI) berpotensi langsung menambah "humanity of production": AI mengambil pekerjaan membosankan dan membantu relasi kerja menjadi lebih baik [hal. 45].',
    },

    // ---------------------------------------------------------------- §12
    { kind: 'h2', text: '12. Peta Konsep (siap dijadikan Mind Map)' },
    {
      kind: 'p',
      text: '**Simpul pusat:** LEADING EDGE MANAGEMENT. Enam cabang utama beserta sub-cabangnya, siap disalin menjadi mind map:',
    },
    { kind: 'ul', items: CONCEPT_MAP_BRANCHES },
    { kind: 'p', text: '**Garis silang (hubungan antar cabang):**' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Dari', 'Ke', 'Hubungannya', 'Sumber'],
      rows: [
        ['10 Roles', '4 Fungsi', 'Roles adalah aktivitas untuk menjalankan fungsi', '[hal. 21]'],
        ['Fayol: 5 elemen', '4 Fungsi modern', 'Elemen Fayol mendasari teori manajemen umum sekarang', '[hal. 30]'],
        ['Things of production', 'Efficiency', 'Fokus pada struktur, alur kerja, kontrol → efisiensi produksi', '[hal. 26]'],
        ['Humanity of production', 'Effectiveness', 'Fokus pada motivasi dan engagement → efektivitas', '[hal. 26]'],
        ['Classical', 'Theory X', 'Classical berbasis asumsi Theory X', '[hal. 38]'],
        ['Theory Y', 'Bossless, Zappos, Buurtzorg, radical decentralization', 'Organisasi kurang hierarkis bertumpu pada asumsi Theory Y', '[hal. 25, 38, 43]'],
        ['Behavioral sciences', 'Nudge management', 'Nudge menerapkan wawasan behavioral sciences', '[hal. 39, 45]'],
        ['Management science (IT)', 'Digital organization, big data, platform', 'Garis perkembangan teknologi sebagai alat manajemen', '[hal. 32–33, 41]'],
        ['Kompetensi baru (enabler, collaboration)', 'Human skills; Exh. 1.5 #1–2', 'Kompetensi baru menuntut human skills; kegagalan terbesar ada di human skills', '[hal. 5, 13, 15]'],
        ['Naik hierarki', 'Skills & roles', 'Conceptual dan human naik, technical turun (Exh. 1.3); leader turun, liaison naik (Exh. 1.8)', '[hal. 12, 22]'],
        ['Sejarah manajemen', 'Conceptual skills', 'Belajar sejarah melatih big-picture thinking', '[hal. 25]'],
      ],
    },
    {
      kind: 'p',
      text: '**Kata kunci per cabang:** Dasar: *effective, efficient, goal-directed* · Fungsi: *POLC, resources → performance* · Manajer: *enabler, bossless, human skills, identity, 10 roles* · Evolusi: *Taylor, Weber, Fayol, Hawthorne, Theory X/Y* · Masa depan: *platform, IoT, engagement, decentralization* · AI: *nudge, routine work*',
    },

    // ---------------------------------------------------------------- §13
    { kind: 'h2', text: '13. Contoh Penerapan' },
    {
      kind: 'p',
      text: '**Tabel ringkas contoh dari buku** (paling relevan untuk ujian; contoh lain ada di bagian masing-masing):',
    },
    {
      kind: 'table',
      // Tanpa kolom nomor: urutan baris sudah membawanya, dan tiga kolom muat di ponsel tanpa perlu digeser.
      headers: ['Konsep', 'Contoh dari buku', 'Hal.'],
      rows: [
        ['Empat fungsi manajemen', 'John Stonecipher, Guidance Aviation', '9'],
        ['Controlling', 'Marne Levine membuat anggaran pertama Instagram', '10'],
        ['Efficiency dan effectiveness sama-sama naik', 'Square', '11'],
        ['Efisiensi merusak efektivitas', 'EMI', '12'],
        ['Bossless organization', 'Morning Star (CLOUs)', '7'],
        ['Human skills', 'Google Top 10 Behaviors', '13'],
        ['Conceptual skills', 'Ursula Burns, Xerox', '14'],
        ['Transisi individual performer → manager', 'Mark Zuckerberg, Facebook', '15–16'],
        ['Kegagalan role disseminator/spokesperson', 'Boeing 737 MAX', '21–22'],
        ['Scientific management', 'Taylor di Bethlehem Steel', '27'],
        ['Bureaucracy', 'UPS', '30'],
        ['Theory Y / self-managed teams', 'Buurtzorg', '38'],
      ],
    },
    {
      kind: 'p',
      text: '**Contoh di luar buku** — 2 dari maksimal 3 slot terpakai: SOP restoran cepat saji (§9b) dan Gojek/Tokopedia (§10).',
    },

    // ---------------------------------------------------------------- §14
    { kind: 'h2', text: '14. Analisis Kasus: SmartStyle Salons [hal. 49–50]' },
    { kind: 'h3', text: '14.1 Case Summary' },
    {
      kind: 'p',
      text: 'Keisha Westbrook adalah manajer salah satu salon SmartStyle di sebuah mal pinggiran kota. Salonnya satu dari enam salon lokal yang terkait jaringan ritel besar. Ia memimpin 30 orang: penata rambut, teknisi kuku, resepsionis, asisten sampo, dan petugas kebersihan. Ia meniti karier dari asisten sampo, menjadi penata rambut terbaik dengan banyak pelanggan setia, lalu dipilih manajer sebelumnya sebagai penggantinya. Ia dikenal pekerja keras dan peduli pada timnya.',
    },
    {
      kind: 'p',
      text: 'Resesi ekonomi di daerah itu membuat keluarga memangkas pengeluaran, dan kunjungan ke salon termasuk yang pertama dikurangi. Bisnis dan laba salon turun tajam. Keisha harus terbang ke kantor pusat keesokan harinya. Ia cemas soal kemungkinan pengurangan staf dan peluangnya menjadi manajer salon Riverwood Mall, salon dengan kinerja terbaik.',
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Kejadian', 'Respons Keisha'],
      rows: [
        ['Carol Jean, penata rambut populer, izin sakit dan kembali menjelekkan salon di Facebook. Sebelumnya Keisha menolak permintaannya untuk tidak masuk sehari karena ingin menonton konser di luar kota [hal. 49]', 'Menyuruh resepsionis Marianne menuntut surat dokter; berteriak "She had better be sick!" dan membanting pintu di depan staf dan pelanggan'],
        ['Laporan status untuk rapat besok', 'Mengaku tidak tahu bagaimana membuat keadaan terlihat "better than they are", lalu berusaha memberi "the best possible spin" pada laporannya [hal. 50]'],
        ['Menelepon Sharon, manajer salon lain', 'Mengaku lepas kendali tetapi tidak akan minta maaf'],
        ['Pelanggan marah minta bicara dengan manajer', 'Sempat membiarkan Victoria (asisten manajer) menangani, lalu menarik kembali dan menangani sendiri'],
        ['Victoria Boone: berpengalaman memimpin salon sukses, dipromosikan oleh Keisha', 'Keisha melihatnya sebagai rival untuk posisi Riverwood dan berusaha membatasi kesempatannya tampil'],
      ],
      caption: 'Rangkaian kejadian dalam satu pagi [hal. 49–50].',
    },

    { kind: 'h3', text: '14.2 Problem Identification' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['#', 'Isu', 'Jenis'],
      rows: [
        ['P1', 'Resesi menurunkan permintaan dan laba', 'Eksternal, di luar kendali manajer'],
        ['P2', 'Ledakan emosi di depan staf dan pelanggan', 'Human skills, komunikasi'],
        ['P3', 'Disiplin tidak konsisten: absensi dan posting Carol Jean sebelumnya dibiarkan', 'Controlling, leading'],
        ['P4', 'Godaan menyajikan laporan status secara terlalu positif ("best possible spin") [hal. 50]', 'Risiko integritas *(hasil analisis)*'],
        ['P5', 'Menganggap asisten manajer sebagai rival dan menyembunyikan kompetensinya', 'Delegasi, pengembangan orang'],
        ['P6', 'Fokus pada ambisi pribadi (posisi Riverwood) melebihi kondisi tim', 'Identitas manajer'],
        ['P7', 'Bereaksi terhadap gangguan tanpa rencana menghadapi resesi', 'Planning'],
      ],
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Masalah inti kasus',
      text: 'Masalah inti kasus ini bukan resesinya. Resesi hanya menguji skill manajer: kelemahan manajer paling terlihat saat perubahan dan krisis [hal. 14].',
    },

    { kind: 'h3', text: '14.3 Analisis Kasus (dengan teori Chapter 1)' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Teori / konsep', 'Temuan pada kasus', 'Hal.'],
      rows: [
        ['**Exh. 1.6: identity shift**', 'Keisha naik karena ia *top hairdresser* (specialist, individual actor). Ia belum sepenuhnya menjadi network builder yang bekerja lewat orang lain. Ia memegang sendiri urusan pelanggan dan laporan', '16'],
        ['**Manager Achievement (hal. 3)**', 'Buku mengingatkan: keinginan menjadi "individual winner" bisa membuat manajer **bersaing dengan timnya**, bukan mengembangkannya. Itulah yang terjadi dengan Victoria', '3'],
        ['**3 skills**', 'Technical kuat; human bercampur (reputasi peduli vs ledakan emosi); conceptual paling lemah (tidak menyusun gambaran besar dan rencana menghadapi resesi)', '12–15'],
        ['**Exh. 1.5: causes of failure**', 'benar #1 komunikasi (teriakan, perintah lewat resepsionis); #2 relasi kerja (Victoria, Carol Jean); #6 delegasi (menarik kembali tugas dari Victoria); #10 perilaku reaktif. Selain itu ada **risiko integritas** (#7) bila godaan menyajikan laporan terlalu positif diikuti *(hasil analisis)*', '15'],
        ['**Exh. 1.1: kompetensi baru**', 'Keisha bertindak sebagai *controller* dan otokratis, bukan *enabler* yang memberdayakan', '5'],
        ['**Theory X vs Y**', '"She had better be sick!" dan "I hope I scared her" mencerminkan asumsi Theory X (orang harus diancam)', '38'],
        ['**Mintzberg roles**', 'Disturbance handler dijalankan secara emosional; leader (mengembangkan Victoria) lemah; sebagai spokesperson ke kantor pusat, ia tergoda menyajikan gambaran yang terlalu positif; liaison dengan Sharon berjalan', '21'],
        ['**Manager activities**', 'Pagi yang penuh gangguan menunjukkan kerja manajer yang *variety, fragmentation, brevity*', '18'],
        ['**Time management ABC**', 'Laporan = item **A**. Pelanggan marah bisa menjadi item **D** (didelegasikan) ke Victoria, yang sudah menawarkan diri', '20'],
        ['**4 fungsi**', 'Planning reaktif; controlling tidak konsisten; leading menakut-nakuti; organizing tidak memanfaatkan asisten manajer', '8–10'],
      ],
    },

    { kind: 'h3', text: '14.4 Jawaban Pertanyaan Kasus' },
    {
      kind: 'p',
      text: '**Q1. Karakteristik manajerial positif dan negatif apa yang dimiliki Keisha? Bagaimana kaitannya dengan technical, human, dan conceptual skills?**',
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Skill', 'Positif', 'Negatif'],
      rows: [
        ['**Technical**', 'Penata rambut terbaik dengan banyak pelanggan setia; paham operasi salon [hal. 49]', 'Masih mengandalkan cara kerja "mengerjakan sendiri"'],
        ['**Human**', 'Dikenal peduli dan pekerja keras; penata rambut ingin bekerja dengannya; mau mempromosikan orang berbakat (Victoria); membangun jejaring sesama manajer (Sharon) [hal. 49–50]', 'Marah di depan umum; mengancam lewat perantara; membiarkan masalah Carol Jean berlarut; merendahkan Victoria di depan manajemen; enggan minta maaf'],
        ['**Conceptual**', 'Menyadari pengaruh ekonomi pada bisnis [hal. 49]', 'Tidak menyusun gambaran besar maupun rencana menghadapi resesi; fokus pada "bagaimana laporan terlihat", bukan penyebab dan solusinya'],
      ],
    },
    {
      kind: 'p',
      text: '*Kesimpulan:* technical skill-nya kuat, dan itulah yang membuatnya dipromosikan. Tetapi Exhibit 1.3 menunjukkan bahwa di level manajer, human dan conceptual skills yang lebih dibutuhkan, dan justru di sanalah kelemahan Keisha [hal. 12].',
    },
    {
      kind: 'p',
      text: '**Q2. Bagaimana sifat-sifat ini membantu atau menghambat peluangnya mendapat posisi di Riverwood Mall?**',
    },
    {
      kind: 'p',
      text: '**Membantu:** rekam jejak salon yang dulu termasuk top performer, reputasi peduli pada tim, dan keahlian teknis [hal. 49].',
    },
    { kind: 'p', text: '**Menghambat:**' },
    {
      kind: 'ul',
      items: [
        'Ledakan emosi disaksikan pelanggan dan staf, sehingga reputasi dan citra kepemimpinannya rusak. Komunikasi adalah penyebab kegagalan manajer #1 [hal. 15].',
        'Menyajikan laporan secara terlalu positif ("best possible spin") [hal. 50] bisa menjadi **risiko integritas** di mata kantor pusat. Lack of personal integrity and trustworthiness adalah penyebab kegagalan manajer #7 [hal. 15]. *(Kaitan ini hasil analisis; buku tidak menyebut Keisha mengubah data.)*',
        'Menekan Victoria berarti gagal mengembangkan orang, padahal Drucker menempatkan *develop people* sebagai tugas manajer [hal. 8] dan Google menempatkan *good coach* di urutan pertama [hal. 13].',
        'Salon dengan kinerja terbaik menuntut conceptual skill untuk mengelola bisnis secara utuh, dan skill itulah yang paling lemah pada Keisha [hal. 14].',
      ],
    },
    {
      kind: 'p',
      text: '*Analisis:* ironisnya, perilaku yang dimaksudkan untuk melindungi peluangnya (menyembunyikan kompetensi Victoria, menyajikan laporan terlalu positif) adalah perilaku yang paling mungkin menghilangkan peluang itu.',
    },
    {
      kind: 'p',
      text: '**Q3. Bagaimana kamu menangani insiden dengan Marianne, Carol Jean, dan Victoria?**',
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Orang', 'Yang terjadi', 'Penanganan yang disarankan', 'Dasar teori'],
      rows: [
        ['**Marianne** (resepsionis)', 'Dijadikan penyampai ancaman ke Carol Jean; menyaksikan kemarahan', 'Berterima kasih atas informasinya; minta ia fokus menjadwal ulang pelanggan; **Keisha sendiri** yang menghubungi Carol Jean', 'Komunikasi langsung (Exh. 1.5 #1); disturbance handler adalah peran manajer [hal. 15, 21]'],
        ['**Carol Jean** (penata rambut)', 'Izin sakit, mengkritik salon di Facebook, pernah absen tanpa alasan kuat', 'Bicara empat mata dengan tenang saat ia kembali; dengarkan keluhannya (sebelumnya permintaannya untuk tidak masuk sehari demi menonton konser di luar kota ditolak [hal. 49]); jelaskan aturan kehadiran dan etika media sosial yang **berlaku sama untuk semua**; terapkan konsekuensi secara konsisten bila berulang', 'Human skills [hal. 13]; aturan yang impersonal dan seragam (bureaucracy) [hal. 29–30]; Theory Y alih-alih ancaman [hal. 38]'],
        ['**Victoria** (asisten manajer)', 'Menawarkan diri menangani pelanggan, tetapi ditarik kembali; dianggap rival', 'Biarkan Victoria menangani pelanggan (delegasi); libatkan ia dalam menyiapkan rencana menghadapi penurunan bisnis; akui kontribusinya secara terbuka di depan manajemen', 'Delegation & empowerment (Exh. 1.5 #6); network builder (Exh. 1.6); develop people [hal. 8, 15, 16]'],
      ],
    },

    { kind: 'h3', text: '14.5 Rekomendasi Manajerial' },
    {
      kind: 'p',
      text: '*Rekomendasi berikut adalah hasil analisis berdasarkan teori Chapter 1, bukan fakta dari buku.*',
    },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Horizon', 'Rekomendasi', 'Teori pendukung'],
      rows: [
        ['**Hari ini**', 'Tenangkan diri, akui kepada staf bahwa reaksinya tadi tidak pantas, dan pulihkan suasana kerja', 'Human skills; communication [hal. 13, 15]'],
        ['', 'Delegasikan pelanggan marah ke Victoria; fokus pada laporan (item A)', 'Time management ABC [hal. 20]'],
        ['', 'Sajikan laporan secara **berimbang**: kondisi salon apa adanya, penjelasan penyebab (resesi), dan rencana tindakan, bukan sekadar "spin" yang positif', 'Spokesperson role [hal. 21]; menghindari risiko integritas (Exh. 1.5 #7) [hal. 15]'],
        ['**Jangka menengah**', 'Tetapkan dan komunikasikan aturan kehadiran dan media sosial yang berlaku sama untuk semua, lalu tegakkan secara konsisten', 'Bureaucracy (aturan impersonal) [hal. 29–30]; controlling [hal. 10]'],
        ['', 'Adakan rapat tim untuk menjelaskan kondisi bisnis dan mengajak tim mengusulkan cara mempertahankan pelanggan', 'Theory Y; employee engagement [hal. 38, 43]'],
        ['', 'Jadikan Victoria mitra, bukan rival: beri tanggung jawab dan kembangkan ia', 'Develop people; delegation [hal. 8, 15–16]'],
        ['**Pengembangan diri**', 'Geser identitas dari "penata rambut bintang" ke "manajer yang bekerja lewat orang lain"; latih conceptual skills dengan menyusun rencana menghadapi resesi', 'Exh. 1.6; conceptual skills [hal. 14, 16]'],
      ],
      caption: 'Baris kosong pada kolom pertama adalah lanjutan horizon di atasnya.',
    },

    // ---------------------------------------------------------------- §15
    { kind: 'h2', text: '15. Implikasi Manajerial dan Kesimpulan' },
    {
      kind: 'ol',
      items: [
        '**Manajer bekerja melalui orang lain.** Keberhasilan diukur dari kinerja tim, bukan dari seberapa hebat ia mengerjakan tugas sendiri [hal. 16].',
        '**Human skills adalah pembeda utama.** Dua penyebab kegagalan manajer teratas adalah komunikasi dan relasi kerja; Google pun menempatkan technical skill di urutan 8 [hal. 13, 15].',
        '**Performance butuh efficiency dan effectiveness sekaligus.** Mengejar efisiensi secara ekstrem bisa merusak kemampuan mencapai tujuan (EMI) [hal. 12].',
        '**Kompetensi manajer terus bergeser**, dari controller ke enabler dan dari stabilitas ke perubahan, sehingga organisasi makin bisa bekerja dengan hierarki yang lebih sedikit [hal. 5, 7–8].',
        '**Setiap teori punya konteks.** Scientific management, bureaucracy, dan management science masih dipakai, tetapi keterbatasannya harus dipahami. Belajar sejarah melatih conceptual skills [hal. 25, 28, 33].',
        '**Things vs humanity of production tetap relevan.** Teknologi (big data, platform, AI) dan pendekatan manusiawi (engagement, decentralization) perlu diseimbangkan, dan AI berpotensi menjembatani keduanya [hal. 40, 45].',
        '**Krisis menguji skill manajer.** Kelemahan paling terlihat saat ketidakpastian, seperti yang dialami Volkswagen, Boeing, dan Keisha Westbrook [hal. 14, 22, 49–50].',
      ],
    },

    // ---------------------------------------------------------------- §16
    { kind: 'h2', text: '16. Alat Bantu Ujian' },
    { kind: 'h3', text: 'Quick Reference: Daftar Komponen Lengkap' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Kerangka', 'Komponen', 'Hal.'],
      rows: [
        ['4 fungsi', 'Planning, Organizing, Leading, Controlling', '8–10'],
        ['Performance', 'Efficiency + Effectiveness', '11–12'],
        ['3 skills', 'Technical, Human, Conceptual', '12–15'],
        ['10 roles', 'Informational (Monitor, Disseminator, Spokesperson); Interpersonal (Figurehead, Leader, Liaison); Decisional (Entrepreneur, Disturbance Handler, Resource Allocator, Negotiator)', '21'],
        ['Classical: 4 subfields', 'Scientific management, Bureaucratic organizations, Administrative principles, Management science', '27'],
        ['Weber: 6 ciri', 'Division of labor; hierarchy; rules & procedures; management terpisah dari ownership; tercatat tertulis; seleksi berdasar kualifikasi teknis', '29'],
        ['Fayol: 5 elemen', 'Planning, Organizing, Commanding, Coordinating, Controlling', '30'],
        ['Mgmt science: 3 subsets', 'Operations research, Operations management, Information technology', '32'],
        ['Humanistic: 3 subfields', 'Human relations, Human resources perspective, Behavioral sciences', '34'],
        ['Theory X / Theory Y', '3 asumsi X / 5 asumsi Y', '38'],
      ],
    },
    { kind: 'h3', text: 'Exam Traps' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Jebakan', 'Jawaban salah', 'Jawaban benar', 'Hal.'],
      rows: [
        ['Posisi management science', '"Perspektif ketiga yang terpisah dari classical"', 'Menurut buku, management science adalah **subbidang ke-4 classical perspective** (hal. 27). RPP mendaftarnya berdampingan dengan classical dan humanistic; kalau ditanya klasifikasinya, pakai versi buku.', '27'],
        ['Efficiency vs effectiveness', 'Dianggap sama', 'Efficiency = sumber daya yang dipakai; effectiveness = tujuan tercapai', '11'],
        ['Efficiency & effectiveness selalu trade-off', '"Harus pilih salah satu"', 'Keduanya bisa sama-sama tinggi (Square)', '11'],
        ['Prinsip Fayol', 'Menyebut 4 prinsip sebagai "seluruh prinsip Fayol"', 'Fayol punya 14 prinsip; buku mencontohkan 4', '30'],
        ['Fungsi Fayol vs fungsi modern', '"Fayol juga memakai planning, organizing, leading, controlling"', 'Fayol: planning, organizing, **commanding, coordinating**, controlling', '30'],
        ['Hasil Hawthorne', '"Terbukti uang tidak berpengaruh"', 'Tafsiran awal: human relations; reanalisis: **uang mungkin paling penting**', '35–36'],
        ['Hawthorne effect', '"Efek perlakuan baik terhadap karyawan"', 'Pengaruh keterlibatan peneliti terhadap hasil eksperimen (istilah metodologi riset)', '36'],
        ['Scientific vs administrative', 'Sama-sama fokus pada pekerja', 'SM: pekerja individu; administrative principles: total organization', '30'],
        ['Bureaucracy', '"Selalu buruk"', 'Rasional, efisien, adil (UPS); sisi negatifnya red tape', '29–30'],
        ['Leader vs liaison role', '"Leader role makin penting di puncak"', 'Makin tinggi posisi, leader turun, liaison naik', '22'],
        ['Roles', '"Tiap role dijalankan terpisah"', 'Semua role saling berinteraksi', '21'],
        ['Bossless / self-control', '"Manajer tidak lagi bertanggung jawab atas kontrol"', 'Tanggung jawab akhir kontrol tetap pada manajer', '10'],
      ],
    },
    { kind: 'h3', text: 'Bank Pertanyaan Kritis (untuk non-presenter)' },
    { kind: 'p', text: 'Diadaptasi dari Discussion Questions [hal. 46]:' },
    {
      kind: 'table',
      stackOnMobile: true,
      headers: ['Pertanyaan', 'Terkait bagian'],
      rows: [
        ['Bisakah manajer mengejar profit dan keselamatan sekaligus? (kasus Boeing)', '§3, §7'],
        ['Bisakah people skills dipelajari, atau manajer dengan technical skill tinggi harus pindah jalur karier?', '§5, §6'],
        ['Apakah sistem radikal terdesentralisasi efektif untuk karyawan Gen Z? Mengapa?', '§10'],
        ['Apakah big data analytics mengurangi "humanity of production"?', '§9a, §10'],
        ['Apa kelemahan sistem eliminasi pemborosan tenaga kerja berbasis scientific management di ritel? Akankah ciri scientific management hilang?', '§9b'],
        ['Mengapa Hawthorne studies menjadi titik balik sejarah manajemen meskipun hasilnya kemudian dipersoalkan?', '§9c'],
      ],
    },
    {
      kind: 'p',
      text: '*Semua `[hal. X]` merujuk ke Daft & Marcic, Understanding Management 12e (2023). Label yang dipakai: "di luar RPP" (1×: §8), "Contoh di luar buku" (2×: §9b, §10), "Ilustrasi" (0×, karena TM01 tanpa bedah film).*',
    },
  ],
};
