import type { Reading } from '../../../types';

const SVG_BUDGET_APPROACHES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">EVOLUSI SISTEM PENDEKATAN PENGANGGARAN SEKTOR PUBLIK</text>
  
  <rect x="30" y="55" width="135" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="97" y="78" fill="#f43f5e" font-size="10.5" font-weight="700" text-anchor="middle">1. Line-Item</text>
  <text x="97" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Tradisional)</text>
  <line x1="40" y1="108" x2="155" y2="108" stroke="#334155"/>
  <text x="97" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Fokus Input belanja</text>
  <text x="97" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Inkrementalisme (+%)</text>
  <text x="97" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Rentan pemborosan</text>
  <text x="97" y="180" fill="#fca5a5" font-size="8.5" font-weight="700" text-anchor="middle">(Kontrol Pos Belanja)</text>

  <rect x="180" y="55" width="145" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="252" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">2. Performance</text>
  <text x="252" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Berbasis Kinerja / PB)</text>
  <line x1="190" y1="108" x2="315" y2="108" stroke="#334155"/>
  <text x="252" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Kaitan Input &rarr; Output</text>
  <text x="252" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Indikator Kinerja (IKU)</text>
  <text x="252" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Standar Biaya Masukan</text>
  <text x="252" y="180" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">(Digunakan di RI)</text>

  <rect x="340" y="55" width="145" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="412" y="78" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">3. PPBS</text>
  <text x="412" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Planning-Prog-Budget)</text>
  <line x1="350" y1="108" x2="475" y2="108" stroke="#334155"/>
  <text x="412" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Integrasi jangka panjang</text>
  <text x="412" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Analisis Cost-Benefit</text>
  <text x="412" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Lintas departemen</text>
  <text x="412" y="180" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">(Sistemik Rasional)</text>

  <rect x="500" y="55" width="150" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="575" y="78" fill="#f59e0b" font-size="10.5" font-weight="700" text-anchor="middle">4. Zero-Base (ZBB)</text>
  <text x="575" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Penganggaran Nol)</text>
  <line x1="510" y1="108" x2="640" y2="108" stroke="#334155"/>
  <text x="575" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Evaluasi dari titik nol</text>
  <text x="575" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Paket Keputusan (Decision)</text>
  <text x="575" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Ranking prioritas ketat</text>
  <text x="575" y="180" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">(Hapus Pemborosan)</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Pendekatan Sistem Penganggaran Sektor Publik (Traditional vs NPM)',
  ref: 'Mardiasmo Bab 5 | Deddi Nordiawan Bab 5 | PP 12/2019',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 5: Menguasai perbandingan pendekatan penganggaran tradisional (*Line-Item Budgeting & Incrementalism*) dengan paradigma New Public Management (NPM): Penganggaran Berbasis Kinerja (*Performance-Based Budgeting* / PB), Planning Programming Budgeting System (PPBS), dan Zero-Based Budgeting (ZBB).',
  objectives: [
    'Mengidentifikasi karakteristik dan kelemahan fatal sistem penganggaran tradisional (Line-Item & Incrementalism).',
    'Menjelaskan konsep Penganggaran Berbasis Kinerja (PB / Performance Budgeting) yang diadopsi dalam APBN/APBD modern.',
    'Menjelaskan mekanisme Planning Programming Budgeting System (PPBS) berbasis analisis Cost-Benefit.',
    'Menerapkan tahapan Zero-Based Budgeting (ZBB): Identifikasi Decision Units, Penyusunan Decision Packages, dan Ranking Prioritas.',
    'Membandingkan Medium-Term Expenditure Framework (MTEF / KPJM - Kerangka Pengeluaran Jangka Menengah).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Perbandingan 4 Pendekatan Penganggaran Sektor Publik',
      svg: SVG_BUDGET_APPROACHES,
      caption: 'Gambar 5.1: Transformasi penganggaran dari kontrol input historis menuju akuntabilitas kinerja hasil.'
    },

    { kind: 'h2', text: '1. Komparasi Empat Pendekatan Penganggaran' },
    {
      kind: 'table',
      headers: ['Pendekatan Sistem', 'Fokus Utama Analisis', 'Kelebihan Utama', 'Kelemahan / Hambatan'],
      rows: [
        ['1. Line-Item (Tradisional)', 'Pos-pos input belanja rincian (gaji, ATK, perjalanan) dengan kenaikan persentase historis (*incremental*).', 'Sederhana, mudah diawasi kepatuhan pembelanjaan anggarannya.', 'Mendorong pemborosan akhir tahun (*spend-it or lose-it*); tidak mengukur hasil layanan publik.'],
        ['2. Penganggaran Berbasis Kinerja (PB)', 'Keterkaitan langsung antara alokasi pendanaan input dengan target keluaran (*output*) dan hasil (*outcome*).', 'Meningkatkan akuntabilitas dan efisiensi belanja publik (*Value for Money*).', 'Sulit menentukan indikator kinerja terukur untuk program sosial abstrak.'],
        ['3. PPBS', 'Perencanaan strategis terpadu jangka panjang berbasis program lintas sektoral dan analisis *Cost-Benefit*.', 'Menghubungkan tujuan nasional jangka panjang dengan anggaran tahunan.', 'Membutuhkan data statistik dan keahlian ekonometrika sangat tinggi.'],
        ['4. Zero-Based Budgeting (ZBB)', 'Setiap program dievaluasi dari titik nol ($0) tanpa mengasumsikan anggaran tahun lalu otomatis berlanjut.', 'Menghilangkan program usang yang tidak lagi relevan.', 'Memakan waktu (*time consuming*), beban administrasi sangat besar, dan gesekan politik birokrasi tinggi.']
      ],
      caption: 'Tabel 5.1: Matriks perbandingan 4 sistem penganggaran publik.'
    },

    { kind: 'h2', text: '2. Tiga Pilar Penganggaran Modern di Indonesia (UU 17/2003)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Penerapan di Lingkungan Pemerintah RI',
      text: '1. **Penganggaran Terpadu (Unified Budgeting)**: Menghapuskan dualisme Anggaran Rutin dan Anggaran Pembangunan.\n2. **Penganggaran Berbasis Kinerja (PB)**: Mengaitkan setiap rupiah belanja dengan Standar Biaya Masukan (SBM) dan Indikator Kinerja Utama (IKU).\n3. **Kerangka Pengeluaran Jangka Menengah (KPJM / MTEF)**: Perencanaan alokasi anggaran bergulir untuk horizon waktu 3-5 tahun ke depan.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 5' },
    {
      kind: 'ul',
      items: [
        '**Inkrementalisme**: Menambah pagu anggaran tahun lalu secara otomatis sebesar $X\\%$ tanpa mengevaluasi efektivitas program (dihindari dalam sistem modern).',
        '**ZBB Decision Package**: Dokumen yang mendeskripsikan tujuan program, konsekuensi jika program dibatalkan, dan alternatif tingkat biaya pelayanan.',
        '**MTEF / KPJM**: Memberikan kepastian pendanaan bagi proyek infrastruktur *multi-years*.'
      ]
    }
  ]
};