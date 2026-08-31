import type { Reading } from '../../../types';

const SVG_BLU_FLEXIBILITY = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">FLEKSIBILITAS PENGELOLAAN KEUANGAN BLU &amp; BLUD (PP 23/2005 &amp; PSAP 13)</text>
  
  <rect x="25" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. Belanja Langsung</text>
  <text x="97" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Pendapatan Jasa</text>
  <line x1="35" y1="108" x2="160" y2="108" stroke="#334155"/>
  <text x="97" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pendapatan PNBP/</text>
  <text x="97" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  retribusi layanan</text>
  <text x="97" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Langsung dipakai</text>
  <text x="97" y="180" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Tanpa Setor Kasda</text>

  <rect x="185" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="257" y="78" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">2. Ambang Batas</text>
  <text x="257" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">RBA Fleksibel</text>
  <line x1="195" y1="108" x2="320" y2="108" stroke="#334155"/>
  <text x="257" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Rencana Bisnis</text>
  <text x="257" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  dan Anggaran (RBA)</text>
  <text x="257" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Fleksibilitas %</text>
  <text x="257" y="180" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">Belanja Mengikuti Omzet</text>

  <rect x="345" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="417" y="78" fill="#f59e0b" font-size="10.5" font-weight="700" text-anchor="middle">3. Remunerasi</text>
  <text x="417" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Sistem Insentif</text>
  <line x1="355" y1="108" x2="480" y2="108" stroke="#334155"/>
  <text x="417" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Gaji + Insentif</text>
  <text x="417" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  berbasis kinerja</text>
  <text x="417" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Profesional Non-PNS</text>
  <text x="417" y="180" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Motivasi Pelayanan</text>

  <rect x="505" y="55" width="150" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a855f7" font-size="10.5" font-weight="700" text-anchor="middle">4. PSAP 13</text>
  <text x="580" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Standar Akuntansi BLU</text>
  <line x1="515" y1="108" x2="645" y2="108" stroke="#334155"/>
  <text x="580" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pembukuan SAK &amp;</text>
  <text x="580" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  Konsolidasi SAP</text>
  <text x="580" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Laporan BLU Lengkap</text>
  <text x="580" y="180" fill="#c084fc" font-size="9" font-weight="700" text-anchor="middle">Kombinasi SAK &amp; SAP</text>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Pengelolaan Keuangan Badan Layanan Umum (BLU & BLUD: Kasus Rumah Sakit)',
  ref: 'PP 23/2005 jo. PP 74/2012 | Permendagri 79/2018 | PSAP 13 Penyajian Lapkeu BLU',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 13: Menguasai pola pengelolaan keuangan Badan Layanan Umum (BLU / BLUD), fleksibilitas operasional bisnis yang sehat (*Pola Pengelolaan Keuangan BLU*), penyusunan Rencana Bisnis dan Anggaran (RBA), sistem tarif dan remunerasi tenaga medis rumah sakit, serta standar akuntansi pelaporan keuangan BLU berdasarkan PSAP 13.',
  objectives: [
    'Mendefinisikan Badan Layanan Umum (BLU / BLUD) sebagai instansi pemerintah penyedia barang/jasa publik yang diberikan fleksibilitas pengelolaan keuangan tanpa mencari keuntungan semata.',
    'Menganalisis 3 persyaratan penetapan status BLU: Persyaratan Substantif, Teknis, dan Administratif.',
    'Menjelaskan 5 bentuk fleksibilitas BLU: Penggunaan Pendapatan Langsung, Pengelolaan Kas & Investasi Jangka Pendek, Pengelolaan Utang/Piutang, Pengadaan Barang/Jasa Khusus, dan Sistem Remunerasi Kinerja.',
    'Menyusun Rencana Bisnis dan Anggaran (RBA) BLU berbasis kinerja pembiayaan.',
    'Menerapkan ketentuan pelaporan keuangan BLU menurut PSAP 13 (menyusun LK berbasis SAK untuk operasional dan dikonsolidasikan ke LK K/L/Pemda berbasis SAP).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Pilar Fleksibilitas Pengelolaan Keuangan BLU/BLUD',
      svg: SVG_BLU_FLEXIBILITY,
      caption: 'Gambar 13.1: Fleksibilitas manajerial BLU dalam meningkatkan produktivitas pelayanan publik rumah sakit dan universitas.'
    },

    { kind: 'h2', text: '1. Karakteristik & Persyaratan Status BLU / BLUD' },
    {
      kind: 'table',
      headers: ['Jenis Persyaratan', 'Kriteria Penilaian Penetapan Status BLU / BLUD'],
      rows: [
        ['1. Persyaratan Substantif', 'Menyelenggarakan tugas pokok pelayanan umum: (a) Penyediaan barang/jasa publik (Rumah Sakit, Puskesmas, Perguruan Tinggi Negeri / PTN), (b) Pengelolaan kawasan khusus, atau (c) Pengelolaan dana khusus (LPDP, BPJS).'],
        ['2. Persyaratan Teknis', 'Kinerja pelayanan layak dikelola secara bisnis sehat; kinerja keuangan berpotensi meningkatkan efisiensi dan PNBP; memiliki pangsa pasar jelas.'],
        ['3. Persyaratan Administratif', 'Menyerahkan dokumen: Standar Pelayanan Minimal (SPM), Rencana Strategis Bisnis (RSB), Pola Tata Kelola (*Governance*), Laporan Keuangan Pokok, dan Surat Pernyataan Kesanggupan Peningkatan Kinerja.']
      ],
      caption: 'Tabel 13.1: Tiga persyaratan pembentukan BLU.'
    },

    { kind: 'h2', text: '2. Perlakuan Akuntansi BLU menurut PSAP 13' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dualisme Pelaporan Keuangan Satker BLU / BLUD',
      text: '• **Untuk Tujuan Manajerial**: Satker BLU (misal RSUD) menyelenggarakan pembukuan berbasis **Standar Akuntansi Keuangan (SAK)** yang menghasilkan Laporan Posisi Keuangan, Laporan Laba Rugi, Laporan Perubahan Ekuitas, dan Laporan Arus Kas komersial.\n• **Untuk Tujuan Konsolidasi Pemda/Kementerian**: Satker BLU menyusun Laporan Keuangan berbasis **Standar Akuntansi Pemerintahan (PSAP 13)** yang kemudian digabungkan ke dalam LKPD/LK K/L melalui proses pengesahan belanja (*Surat Pengesahan Pendapatan dan Belanja BLU - SP3B / SP2B*).'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 13' },
    {
      kind: 'ul',
      items: [
        '**Penggunaan Kas Langsung**: Pendapatan operasional rumah sakit (tarif pasien umum/BPJS) dapat langsung dibelanjakan untuk membeli obat dan bahan medis habis pakai tanpa harus disetor ke Kasda terlebih dahulu.',
        '**RBA (Rencana Bisnis dan Anggaran)**: Disusun berbasis kinerja dengan menganalisis unit cost pelayanan (*Activity-Based Costing*).',
        '**Kekayaan BLU**: Merupakan kekayaan negara/daerah yang **TIDAK DIPISAHKAN** (berbeda dengan BUMN/BUMD yang kekayaannya dipisahkan dari APBN/APBD).'
      ]
    }
  ]
};