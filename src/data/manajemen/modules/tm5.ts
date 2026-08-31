import type { Reading } from '../../../types';

const SVG_GOAL_HIERARCHY = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">HIERARKI SASARAN &amp; PERENCANAAN ORGANISASI (DAFT &amp; MARCIC CH. 5)</text>
  
  <!-- Mission (Top) -->
  <polygon points="340,55 450,95 230,95" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="340" y="80" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. MISSION (Misi Organisasi)</text>
  <text x="340" y="91" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Alasan fundamental keberadaan bisnis</text>

  <!-- Strategic Goals -->
  <polygon points="230,100 450,100 520,135 160,135" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="118" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. STRATEGIC GOALS &amp; PLANS (Top Management)</text>
  <text x="340" y="130" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Organisasi menyeluruh (Horizon Jangka Panjang 3 - 5 Tahun)</text>

  <!-- Tactical Goals -->
  <polygon points="160,140 520,140 580,175 100,175" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="158" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">3. TACTICAL GOALS &amp; PLANS (Middle Management)</text>
  <text x="340" y="170" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Fokus divisi dan subunit fungsional (Horizon Jangka Menengah 1 - 2 Tahun)</text>

  <!-- Operational Goals -->
  <polygon points="100,180 580,180 640,210 40,210" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="340" y="196" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">4. OPERATIONAL GOALS &amp; PLANS (First-Line Management)</text>
  <text x="340" y="206" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Departemen harian, tugas spesifik, MBO, dan KPI individu (Horizon Bulanan/Mingguan)</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Planning, Goal Setting, & Strategic Thinking (MBO & Porter Strategies)',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 5',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 5: Menguasai hierarki penetapan sasaran dan perencanaan (Misi, Sasaran Strategis, Sasaran Taktis, Sasaran Operasional), kriteria sasaran efektif (SMART Goals), Manajemen Berdasarkan Sasaran (Management by Objectives - MBO), perencanaan skenario dan krisis (*Contingency Planning & Scenario Building*), proses manajemen strategik, Analisis SWOT, serta Strategi Keunggulan Bersaing Michael Porter (*Cost Leadership, Differentiation, Focus*).',
  objectives: [
    'Menjelaskan proses perencanaan dan hierarki sasaran organisasi dari tingkat puncak hingga lini depan.',
    'Menerapkan 5 kriteria sasaran efektif SMART (Specific, Measurable, Attainable, Relevant, Time-bound).',
    'Menjelaskan 4 langkah siklus Manajemen Berdasarkan Sasaran (Management by Objectives / MBO).',
    'Merancang rencana kontinjensi (*Contingency Plans*) dan manajemen krisis untuk menghadapi lingkungan yang turbulen.',
    'Melakukan Analisis SWOT (Strengths, Weaknesses, Opportunities, Threats) untuk merumuskan arah strategis.',
    'Membandingkan Tiga Strategi Kompetitif Michael Porter: Kepemimpinan Biaya Rendah (*Cost Leadership*), Diferensiasi (*Differentiation*), dan Fokus (*Cost Focus / Differentiation Focus*).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Hierarki Piramida Sasaran dan Rencana Organisasi',
      svg: SVG_GOAL_HIERARCHY,
      caption: 'Gambar 5.1: Penyelarasan sasaran strategis puncak hingga sasaran operasional lini depan.'
    },

    { kind: 'h2', text: '1. Kriteria Sasaran Efektif (SMART Goals)' },
    {
      kind: 'table',
      headers: ['Elemen SMART', 'Definisi Konseptual', 'Contoh Sasaran yang Benar'],
      rows: [
        ['**Specific (Spesifik)**', 'Sasaran dinyatakan secara jelas, konkret, dan tidak bermakna ganda.', '"Meningkatkan pangsa pasar mobil listrik model X di Indonesia..."'],
        ['**Measurable (Terukur)**', 'Memiliki tolok ukur kuantitatif yang dapat diverifikasi secara objektif.', '"...sebesar 15%..."'],
        ['**Attainable (Dapat Dicapai)**', 'Menantang (*stretch goals*) namun realistis dengan kapasitas sumber daya.', 'Bukan target mustahil yang meruntuhkan moral karyawan.'],
        ['**Relevant / Results-oriented**', 'Selaras langsung dengan misi strategis inti perusahaan.', 'Mendukung pertumbuhan lini bisnis utama.'],
        ['**Time-bound (Berbatas Waktu)**', 'Memiliki tenggat waktu (*deadline*) penyelesaian yang tegas.', '"...dalam periode 31 Desember 2026."']
      ],
      caption: 'Tabel 5.1: Lima parameter penyusunan sasaran kinerja SMART.'
    },

    { kind: 'h2', text: '2. Tiga Strategi Bersaing Generik Michael Porter' },
    {
      kind: 'table',
      headers: ['Strategi Bersaing Porter', 'Keunggulan Bersaing Utama', 'Cakupan Target Pasar', 'Contoh Perusahaan Riil'],
      rows: [
        ['1. Diferensiasi (Differentiation)', 'Menawarkan produk/layanan unik dengan kualitas superior, desain elegan, atau merek prestisius sehingga konsumen bersedia membayar harga premium.', '**Luas (Broad)**', 'Apple, BMW, Starbucks.'],
        ['2. Kepemimpinan Biaya (Cost Leadership)', 'Menekan biaya operasional serendah mungkin melalui skala ekonomis besar, efisiensi rantai pasok, dan fasilitas tanpa embel-embel (*no frills*).', '**Luas (Broad)**', 'Walmart, IKEA, AirAsia.'],
        ['3. Fokus (Cost Focus / Differentiation Focus)', 'Melayani segmen pasar ceruk (*niche market*) geografis atau demografis sempit secara intensif.', '**Sempit / Ceruk (Narrow)**', 'Ferrari (Fokus Diferensiasi), Bank Perkreditan Rakyat Mikro (Fokus Biaya).']
      ],
      caption: 'Tabel 5.2: Tiga strategi bersaing generik Michael Porter.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 5' },
    {
      kind: 'ul',
      items: [
        '**MBO (Management by Objectives)**: Sistem di mana manajer dan bawahan bersama-sama menetapkan sasaran, menyusun rencana aksi, meninjau kemajuan secara berkala, dan mengevaluasi kinerja akhir.',
        '**SWOT**: Memadukan faktor internal (Strengths & Weaknesses) dengan faktor eksternal lingkungan makro (Opportunities & Threats).',
        '**Contingency Planning**: Menentukan respon alternatif yang akan diambil jika terjadi peristiwa darurat di luar skenario dasar.'
      ]
    }
  ]
};