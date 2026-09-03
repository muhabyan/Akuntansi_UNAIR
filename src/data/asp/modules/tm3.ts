import type { Reading } from '../../../types';
import { CASE_GOV_ACCOUNTING_STANDARDS } from '../aspPracticeCases';

const SVG_GOV_REGULATIONS = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="reg1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="reg2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="reg3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="reg4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp3)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PAKET 3 UNDANG-UNDANG KEUANGAN NEGARA &amp; STANDAR AKUNTANSI PEMERINTAHAN (SAP)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">LEGAL FRAMEWORK</text>

  <!-- 4 Columns Regulatory Pillars -->
  <!-- 1. UU 17/2003 -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#reg1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="97" y="20" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">UU NO. 17 TAHUN 2003</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="97" y="53" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle">Tentang: Keuangan Negara</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Landasan reformasi fiskal RI</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Ruang lingkup keuangan negara</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Asas tahunan, universalitas,</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  kesatuan, &amp; asas spesialitas</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Mandat basis akrual pemerintah</text>
    <rect class="svg-badge-blue" x="10" y="185" width="175" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Payung Hukum Anggaran Negara</text>
  </g>

  <!-- 2. UU 1/2004 -->
  <g transform="translate(245, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#reg2)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="97" y="20" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">UU NO. 1 TAHUN 2004</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="97" y="53" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">Perbendaharaan Negara</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Pengelolaan Kas Negara (TSA)</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Pembayaran belanja &amp; SPM/SP2D</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Pengelolaan Barang Milik Negara</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Larangan penyitaan uang negara</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Pejabat Bendahara &amp; PPK</text>
    <rect class="svg-badge-green" x="10" y="185" width="175" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Tata Kelola Kas &amp; Aset Negara</text>
  </g>

  <!-- 3. UU 15/2004 -->
  <g transform="translate(455, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#reg3)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="97" y="20" fill="#fbbf24" font-size="9.5" font-weight="800" text-anchor="middle">UU NO. 15 TAHUN 2004</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="53" fill="#fbbf24" font-size="8" font-weight="800" text-anchor="middle">Pemeriksaan Keuangan</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Mandat audit Badan Pemeriksa</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  Keuangan (BPK RI)</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• 3 Jenis Pemeriksaan: Keuangan,</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  Kinerja (VFM), &amp; Tujuan Tertentu</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Tindak lanjut rekomendasi BPK</text>
    <rect class="svg-badge-amber" x="10" y="185" width="175" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Audit Independen Eksternal</text>
  </g>

  <!-- 4. PP 71/2010 SAP -->
  <g transform="translate(665, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#reg4)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="97" y="20" fill="#a78bfa" font-size="9.5" font-weight="800" text-anchor="middle">PP NO. 71 TAHUN 2010</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="97" y="53" fill="#a78bfa" font-size="8" font-weight="800" text-anchor="middle">Standar Akuntansi Pemerintah</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• SAP Berbasis Akrual Penuh</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Diterapkan oleh seluruh K/L &amp; Pemda</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Mengatur 7 komponen laporan</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  keuangan pemerintah</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Disusun oleh Komite KSAP</text>
    <rect class="svg-badge-purple" x="10" y="185" width="175" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="97" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Standar Resmi Penyusunan Lapkeu</text>
  </g>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Regulasi Pengelolaan Keuangan Negara & Standar Akuntansi Pemerintahan (SAP)',
  ref: 'Paket UU Keuangan Negara (UU 17/2003, UU 1/2004, UU 15/2004) | PP 71/2010 (SAP Berbasis Akrual)',
  intro: 'TM 3 membahas arsitektur regulasi keuangan publik di Indonesia: 3 paket undang-undang reformasi keuangan negara, peran Bendahara Umum Negara (BUN) dan Bendahara Umum Daerah (BUD), kerangka konseptual Standar Akuntansi Pemerintahan (SAP), serta struktur Pernyataan Standar Akuntansi Pemerintahan (PSAP 01 s/d 17) berbasis akrual penuh menurut PP 71/2010.',
  objectives: [
    'Menguasai ruang lingkup dan prinsip pokok 3 paket UU Keuangan Negara.',
    'Membedakan peran Otoritas Pengguna Anggaran (PA/KPA) vs Bendahara Umum (BUN/BUD).',
    'Menganalisis kerangka konseptual Standar Akuntansi Pemerintahan (SAP) berbasis akrual.',
    'Mengidentifikasi daftar 17 Pernyataan Standar Akuntansi Pemerintahan (PSAP) utama.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 3.1: Hierarki Regulasi Keuangan Negara dan Standar Akuntansi Pemerintahan di Indonesia.',
      svg: SVG_GOV_REGULATIONS
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 3'
    },
    {
      kind: 'table',
      headers: ['Regulasi Pokok', 'Nomor Undang-Undang / PP', 'Fokus Pengaturan', 'Implikasi Akuntansi Utama'],
      rows: [
        ['UU Keuangan Negara', 'UU No. 17 Tahun 2003', 'Pengelolaan kekayaan negara, defisit anggaran max 3% PDB, utang max 60% PDB.', 'Mewajibkan akuntansi dan pelaporan berbasis akrual selambat-lambatnya 5 tahun.'],
        ['UU Perbendaharaan Negara', 'UU No. 1 Tahun 2004', 'Pelaksanaan anggaran, fungsi kas, piutang, utang, investasi, dan pembentukan BLU.', 'Pemisahan tegas kewenangan ordonator (PA) dan komparator (Bendahara).'],
        ['UU Pemeriksaan Keuangan', 'UU No. 15 Tahun 2004', 'Kewenangan BPK RI memeriksa keuangan negara dan memberikan opini audit.', 'Batas waktu tindak lanjut LHP BPK adalah 60 hari.'],
        ['PP Standar Akuntansi (SAP)', 'PP No. 71 Tahun 2010', 'Pemberlakuan SAP Berbasis Akrual menggantikan PP 24/2005.', 'Wajib menyusun 7 laporan keuangan pemerintah lengkap.']
      ],
      caption: 'Tabel 3.0: Matriks regulasi pokok keuangan negara dan SAP.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Batas Ambang Fiskal UU 17/2003'
    },
    {
      kind: 'formula',
      text: `\\text{Defisit Anggaran Tahunan (APBN/APBD)} \\le 3\\% \\times \\text{Produk Domestik Bruto (PDB)}
\\text{Jumlah Kumulatif Utang Pemerintah} \\le 60\\% \\times \\text{Produk Domestik Bruto (PDB)}
\\text{Batas Waktu Penyerahan LKPD ke BPK} = 3 \\text{ Bulan Pasca Tahun Anggaran Berakhir (31 Maret)}
\\text{Batas Waktu Penyerahan LHP BPK ke DPRD} = 2 \\text{ Bulan Pasca Menerima LKPD (31 Mei)}`,
      note: 'Pelanggaran terhadap batas defisit 3% dan rasio utang 60% PDB merupakan pelanggaran undang-undang fiskal yang dapat memicu krisis keuangan negara.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Pemisahan Kewenangan Ordonator vs Komparator',
      prompt: 'Jelaskan mengapa Menteri/Kepala Dinas bertindak sebagai Pejabat Pengguna Anggaran (Ordonator) dilarang merangkap jabatan sebagai Bendahara Penerimaan/Pengeluaran (Komparator)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Prinsip Segregasi Kewenangan Perbendaharaan**: Ordonator berwenang memerintahkan pengeluaran kas (Authorization), sedangkan Komparator/Bendahara bertindak sebagai penyimpan kas dan penguji keabsahan tagihan (Custody & Verification).',
            '**Pencegahan Korupsi**: Jika satu orang berwenang memerintahkan pembayaran sekaligus memegang uang kas, peluang penerbitan SP2D fiktif dan penggelapan kas negara menjadi sangat terbuka tanpa ada mekanisme kontrol penyeimbang (Check and Balance).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 3'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Paket UU Keuangan Negara', 'Substansi UU 17/2003, UU 1/2004, UU 15/2004.', 'Mampu menjelaskan landasan hukum reformasi pengelolaan keuangan negara.'],
        ['2', 'Prinsip PP 71/2010 SAP Akrual', 'Struktur Lampiran I SAP Akrual dan 17 PSAP.', 'Mampu membedakan ketentuan standar akrual vs kas menuju akrual.'],
        ['3', 'Jadwal Siklus Pertanggungjawaban', 'Batas waktu penyusunan LKPD, audit BPK, dan pengesahan Perda.', 'Menguasai timeline formal siklus pertanggungjawaban APBN/APBD.']
      ],
      caption: 'Tabel 3.2: Peta penguasaan submateri TM 3 Akuntansi Sektor Publik.'
    },
    CASE_GOV_ACCOUNTING_STANDARDS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Asas Universalitas**: Seluruh pendapatan dan belanja pemerintah wajib disajikan secara bruto di APBN/APBD tanpa kompensasi perjumpaan utang-piutang (No Netting Off).',
        '**Fungsi BUD (Bendahara Umum Daerah)**: Kepala BPKAD bertindak sebagai BUD yang mengelola rekening Kas Umum Daerah (Kasda), sedangkan kepala dinas adalah Pengguna Anggaran (PA).',
        '**Status Hukum SAP**: Standar Akuntansi Pemerintahan (SAP) memiliki kekuatan hukum mengikat tertinggi karena ditetapkan melalui Peraturan Pemerintah (PP), bukan sekadar standar profesi privat.'
      ]
    }
  ]
};
