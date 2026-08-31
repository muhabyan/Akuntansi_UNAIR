import type { Reading } from '../../../types';

const SVG_SAPD_STRUCTURE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SISTEM AKUNTANSI PEMERINTAH DAERAH (SAPD - PERMENDAGRI 77/2020)</text>
  
  <!-- SKPD -->
  <rect x="30" y="55" width="280" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="170" y="80" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">1. SA-SKPD (Dinas / Badan)</text>
  <text x="170" y="98" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">ENTITAS AKUNTANSI</text>
  <line x1="50" y1="110" x2="290" y2="110" stroke="#334155"/>
  <text x="170" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Mengelola Anggaran DPA-SKPD</text>
  <text x="170" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Menyusun 4 Laporan:</text>
  <text x="170" y="166" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">  LRA, LO, Neraca SKPD, &amp; CaLK</text>
  <text x="170" y="186" fill="#94a3b8" font-size="9" text-anchor="middle">(Akun Antar-Kantor: RK PPKD)</text>

  <!-- PPKD / BUD -->
  <rect x="370" y="55" width="280" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="510" y="80" fill="#f59e0b" font-size="12" font-weight="700" text-anchor="middle">2. SA-PPKD (BPKAD / BUD)</text>
  <text x="510" y="98" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">ENTITAS PELAPORAN &amp; KASDA</text>
  <line x1="390" y1="110" x2="630" y2="110" stroke="#334155"/>
  <text x="510" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Mengelola Kas Daerah &amp; Dana Transfer</text>
  <text x="510" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Mengonsolidasi seluruh SKPD</text>
  <text x="510" y="166" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">  Menyusun 7 Laporan Pemda</text>
  <text x="510" y="186" fill="#94a3b8" font-size="9" text-anchor="middle">(Akun Antar-Kantor: RK SKPD)</text>

  <!-- Reciprocal arrow -->
  <line x1="310" y1="130" x2="370" y2="130" stroke="#34d399" stroke-width="2"/>
  <line x1="370" y1="130" x2="360" y2="125" stroke="#34d399" stroke-width="2"/>
  <line x1="310" y1="130" x2="320" y2="135" stroke="#34d399" stroke-width="2"/>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Sistem Akuntansi Pemerintah Pusat (SAPP) & Daerah (SAPD)',
  ref: 'Permendagri 77/2020 | Permendagri 64/2013 | PMK SAPP',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 9: Menguasai arsitektur Sistem Akuntansi Pemerintah Pusat (SAPP / SPAN / SAKTI) dan Sistem Akuntansi Pemerintah Daerah (SAPD - SIPD RI / Permendagri 77/2020), pemisahan Entitas Akuntansi (SKPD) vs Entitas Pelaporan (PPKD/BUD), mekanisme Transaksi Antar-Kantor (*Home Office - Branch Accounting* / RK PPKD & RK SKPD), serta proses konsolidasi laporan keuangan pemerintah daerah.',
  objectives: [
    'Membedakan Entitas Akuntansi (Satker/SKPD) vs Entitas Pelaporan (K/L/Pemda/Pemerintah Pusat).',
    'Memahami subsistem Sistem Akuntansi Pemerintah Daerah (SA-SKPD dan SA-PPKD).',
    'Mencatat transaksi resiprokal (hubungan timbal-balik) antara RK-PPKD (pada SKPD) dan RK-SKPD (pada PPKD).',
    'Menjelaskan proses konsolidasi laporan keuangan SKPD menjadi Laporan Keuangan Pemerintah Daerah (LKPD).',
    'Menjelaskan mekanisme uang persediaan (UP/GU/TU) dan pembayaran langsung (LS) oleh Kas Daerah.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Arsitektur Hubungan SA-SKPD dan SA-PPKD dalam SAPD',
      svg: SVG_SAPD_STRUCTURE,
      caption: 'Gambar 9.1: Pemisahan peran dinas operasional dengan pengelola kas umum daerah berbasis akun timbal balik.'
    },

    { kind: 'h2', text: '1. Entitas Akuntansi (SKPD) vs Entitas Pelaporan (PPKD)' },
    {
      kind: 'table',
      headers: ['Karakteristik', 'Satuan Kerja Perangkat Daerah (SKPD)', 'Pejabat Pengelola Keuangan Daerah (PPKD)'],
      rows: [
        ['Status Entitas', '**Entitas Akuntansi** (Wajib menyelenggarakan akuntansi dan menyusun laporan keuangan unitnya).', '**Entitas Pelaporan** (Wajib menggabungkan/mengonsolidasi seluruh laporan SKPD menjadi LKPD).'],
        ['Pengelolaan Anggaran', 'Mengelola belanja operasional dinas, gaji pegawai, belanja modal, dan pendapatan asli daerah (PAD) teknis.', 'Mengelola Pendapatan Transfer (DAU/DAK/DBH), Bagi Hasil Pajak, Belanja Tidak Terduga, Bunga Utang, dan Pembiayaan Daerah.'],
        ['Laporan Keuangan Dihasilkan', 'Menyusun **4 Laporan**: LRA, LO, LPE, Neraca, dan CaLK SKPD.', 'Menyusun **7 Laporan Lengkap LKPD**: LRA, LP-SAL, LO, LPE, Neraca, LAK, dan CaLK.']
      ],
      caption: 'Tabel 9.1: Komparasi fungsi akuntansi SKPD vs PPKD.'
    },

    { kind: 'h2', text: '2. Akun Resiprokal: Hubungan Kantor Pusat - Cabang' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Mekanisme Akun RK-PPKD dan RK-SKPD',
      text: 'Karena SKPD bukan entitas hukum yang terpisah dan seluruh kas berasal dari Kas Umum Daerah (Kasda):\n• **Di Buku SKPD**: Menggunakan akun **R/K PPKD** (Bersaldo normal di sisi Ekuitas / Kredit).\n• **Di Buku PPKD**: Menggunakan akun **R/K SKPD** (Bersaldo normal di sisi Aset / Debit).\n• **Saat Konsolidasi LKPD**: Akun RK-PPKD dan RK-SKPD harus saling dieliminasi (*offset*) menjadi Rp 0 sehingga tidak muncul di Neraca konsolidasi Pemda.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 9' },
    {
      kind: 'ul',
      items: [
        '**Mekanisme SP2D-LS**: Uang dibayarkan langsung dari Kasda ke rekening pihak ketiga/rekanan tanpa melewati rekening bendahara pengeluaran SKPD.',
        '**Mekanisme SP2D-UP**: Uang Persediaan diberikan kepada Bendahara Pengeluaran SKPD sebagai dana kas kecil (*petty cash*) untuk membiayai operasional harian.',
        '**SIPD-RI**: Sistem Informasi Pemerintahan Daerah terintegrasi yang menghubungkan perencanaan, penganggaran, penatausahaan, dan akuntansi secara nasional.'
      ]
    }
  ]
};