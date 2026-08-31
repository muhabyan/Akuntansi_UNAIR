import type { Reading } from '../../../types';

const SVG_STRATEGIC_CONTROL = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SISTEM KONTROL STRATEGIS TIGA PILAR (BEHAVIORAL CONTROL - DESS CH. 9)</text>
  
  <!-- Culture (Top) -->
  <polygon points="340,45 430,95 250,95" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="340" y="72" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. CULTURE (Budaya)</text>
  <text x="340" y="86" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Nilai bersama, norma, &amp; kepercayaan bersama</text>

  <!-- Left: Rewards -->
  <polygon points="120,105 270,105 195,195" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="195" y="135" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. REWARDS</text>
  <text x="195" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Insentif kinerja</text>
  <text x="195" y="164" fill="#cbd5e1" font-size="8.5" text-anchor="middle">&amp; kompensasi</text>

  <!-- Right: Boundaries -->
  <polygon points="410,105 560,105 485,195" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="485" y="135" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">3. BOUNDARIES</text>
  <text x="485" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">SOP, batasan aturan,</text>
  <text x="485" y="164" fill="#cbd5e1" font-size="8.5" text-anchor="middle">&amp; kode etik</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Entrepreneurial Strategy, Strategic Control, & Corporate Governance',
  ref: 'Dess, McNamara, Eisner, & Lee (11th ed.) Ch. 8 & 9',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 6: Menguasai Strategi Kewirausahaan (*Entrepreneurial Strategy: Peluang Kewirausahaan, Sumber Daya, Keunggulan Penggerak Pertama / First Mover Advantage vs Fast Follower*), Dinamika Bersaing (*Competitive Dynamics & Threat Analysis*), Sistem Kontrol Strategis Tradisional (Umpan Balik Bertahap / *Single-Loop*) vs Kontemporer (Kontrol Informasi / *Double-Loop Learning* & Kontrol Perilaku: *Culture, Rewards, Boundaries*), serta Tata Kelola Perusahaan (*Corporate Governance: Agency Theory, Dewan Direksi, Pemegang Saham Aktivis, & Mekanisme Pengambilalihan Pasar / Market for Corporate Control*).',
  objectives: [
    'Menganalisis Tiga Elemen Peluang Kewirausahaan: Pengenalan Peluang (*Discovery & Evaluation*), Sumber Daya Kewirausahaan, dan Kepemimpinan Wirausaha.',
    'Membandingkan keuntungan dan risiko menjadi Penggerak Pertama (*First Mover Advantage*) vs Pengikut Cepat (*Fast Follower*).',
    'Membedakan Kontrol Tradisional (Sequential) vs Kontrol Kontemporer (Informational & Behavioral Control).',
    'Menerapkan Tiga Pilar Kontrol Perilaku: Budaya Organisasi, Sistem Imbalan/Insentif, dan Batasan/Aturan Kerja (*Boundaries and Constraints*).',
    'Menganalisis Teori Keagenan (Agency Theory: Konflik Principal vs Agent dan Biaya Keagenan / *Agency Costs*).',
    'Mengevaluasi Mekanisme Tata Kelola Korporat Internal (Dewan Direksi Independen, Komite Audit, Kepemilikan Saham Manajemen) dan Eksternal (Pasal Pengambilalihan / *Hostile Takeovers*, Auditor Independen, Regulasi Pasar Modal).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Pilar Sistem Kontrol Perilaku Strategis Kontemporer',
      svg: SVG_STRATEGIC_CONTROL,
      caption: 'Gambar 6.1: Penyelarasan budaya, sistem insentif, dan batasan prosedur untuk memfokuskan energi organisasi pada sasaran strategis.'
    },

    { kind: 'h2', text: '1. Kontrol Tradisional vs Kontrol Kontemporer' },
    {
      kind: 'table',
      headers: ['Dimensi Kontrol', 'Pendekatan Kontrol Tradisional', 'Pendekatan Kontrol Kontemporer'],
      rows: [
        ['Alur Proses Pengendalian', '**Sekuensial / Berurutan**: Formulasi Strategi $\\rightarrow$ Implementasi Strategi $\\rightarrow$ Pengukuran Kinerja Akhir.', '**Interaktif / Berkelanjutan**: Menguji asumsi strategi secara terus-menerus (*Double-Loop Learning*).'],
        ['Respon terhadap Perubahan', 'Lambat dan kaku; strategi baru hanya dievaluasi setiap akhir tahun anggaran.', '**Sangat Lincah**: Kontrol informasi memicu penyesuaian strategi secara real-time saat lingkungan makro berubah.'],
        ['Fokus Pengawasan', 'Membandingkan angka realisasi keuangan terhadap plafon anggaran historis.', 'Memantau asumsi kritis fundamental bisnis dan kepuasan pelanggan di lapangan.']
      ],
      caption: 'Tabel 6.1: Perbandingan paradigma kontrol strategis.'
    },

    { kind: 'h2', text: '2. Teori Keagenan & Mekanisme Tata Kelola Korporat (Corporate Governance)' },
    {
      kind: 'table',
      headers: ['Elemen Tata Kelola', 'Masalah Keagenan (Agency Problem)', 'Solusi Mekanisme Tata Kelola'],
      rows: [
        ['**Pemisahan Kepemilikan & Kendali**', 'Manajer profesional (Agent) mengejar kepentingan pribadi (gaji mewah, fasilitas empire-building) yang merugikan pemegang saham (Principal).', '1. **Dewan Direksi Independen**: Mengawasi dan mengevaluasi CEO secara objektif.\n2. **Kompensasi Berbasis Saham**: Mengaitkan bonus eksekutif dengan kinerja jangka panjang saham.'],
        ['**Asimetri Informasi**', 'Manajer memiliki informasi bisnis operasional harian yang jauh lebih lengkap dibanding pemilik saham publik.', '1. **Transparansi & Keterbukaan Informasi Publik**.\n2. **Audit Independen oleh Akuntan Publik Eksternal**.\n3. **Komite Audit Dewan Komisaris yang Kompeten**.']
      ],
      caption: 'Tabel 6.2: Dinamika tata kelola perusahaan modern.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 6' },
    {
      kind: 'ul',
      items: [
        '**Informational Control**: Menjawab pertanyaan *"Apakah kita melakukan hal yang benar dalam menghadapi perubahan lingkungan?"* (Menguji asumsi strategi).',
        '**Behavioral Control**: Menjawab pertanyaan *"Apakah kita melakukan hal-hal secara benar dalam pelaksanaan operasional?"* (Mempengaruhi perilaku karyawan melalui Budaya, Reward, dan Batasan).',
        '**Market for Corporate Control**: Ancaman pengambilalihan paksa (*Hostile Takeover*) oleh investor luar jika manajemen saat ini gagal memaksimalkan nilai pemegang saham.'
      ]
    }
  ]
};