import type { Reading } from '../../../types';

const SVG_ACCOUNTING_TECHNIQUES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">LIMA TEKNIK &amp; BASIS AKUNTANSI SEKTOR PUBLIK</text>
  
  <rect x="25" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. Basis Akrual</text>
  <text x="82" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Accrual Basis</text>
  <line x1="35" y1="108" x2="130" y2="108" stroke="#334155"/>
  <text x="82" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Diakui saat hak /</text>
  <text x="82" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">kewajiban timbul</text>
  <text x="82" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Neraca, LO, LPE)</text>
  <text x="82" y="180" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">(Full Financial)</text>

  <rect x="155" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="212" y="78" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">2. Basis Kas</text>
  <text x="212" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Cash Basis</text>
  <line x1="165" y1="108" x2="260" y2="108" stroke="#334155"/>
  <text x="212" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Diakui saat kas</text>
  <text x="212" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">masuk / keluar</text>
  <text x="212" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">(LRA &amp; LAK)</text>
  <text x="212" y="180" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">(Budget Realization)</text>

  <rect x="285" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="342" y="78" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">3. Akun Dana</text>
  <text x="342" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Fund Accounting</text>
  <line x1="295" y1="108" x2="390" y2="108" stroke="#334155"/>
  <text x="342" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Memisahkan dana</text>
  <text x="342" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">berdasarkan</text>
  <text x="342" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">tujuan restriksi</text>
  <text x="342" y="180" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">(Self-Balancing)</text>

  <rect x="415" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a855f7" font-size="10" font-weight="700" text-anchor="middle">4. Anggaran</text>
  <text x="472" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Budgetary Acc.</text>
  <line x1="425" y1="108" x2="520" y2="108" stroke="#334155"/>
  <text x="472" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Mencatat pagu</text>
  <text x="472" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">anggaran ke dlm</text>
  <text x="472" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">buku besar jurnal</text>
  <text x="472" y="180" fill="#c084fc" font-size="8.5" font-weight="700" text-anchor="middle">(Kontrol Plafon)</text>

  <rect x="545" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="602" y="78" fill="#f43f5e" font-size="10" font-weight="700" text-anchor="middle">5. Komitmen</text>
  <text x="602" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Commitment Acc.</text>
  <line x1="555" y1="108" x2="650" y2="108" stroke="#334155"/>
  <text x="602" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Mencatat saat SPK /</text>
  <text x="602" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">PO diterbitkan</text>
  <text x="602" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Encumbrance)</text>
  <text x="602" y="180" fill="#fca5a5" font-size="8.5" font-weight="700" text-anchor="middle">(Cegah Overspend)</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Teknik & Basis Akuntansi Sektor Publik: Dana, Anggaran, & Komitmen',
  ref: 'Mardiasmo Bab 9 | Deddi Nordiawan Bab 6 | PP 71/2010',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 6: Menguasai spektrum basis akuntansi (Basis Kas, Kas Menuju Akrual / CTA, Basis Akrual Penuh), fokus pengukuran (*Measurement Focus: Cash Flow vs Current Financial Resources vs Total Economic Resources*), Akuntansi Dana (*Fund Accounting*), Akuntansi Anggaran (*Budgetary Accounting*), dan Akuntansi Komitmen (*Commitment / Encumbrance Accounting*).',
  objectives: [
    'Membedakan 3 basis akuntansi dan fokus pengukurannya.',
    'Menjelaskan konsep Akuntansi Dana (Fund Accounting) sebagai unit akuntansi dan fiskal mandiri dengan persamaan neraca seimbang (*self-balancing set of accounts*).',
    'Membedakan Governmental Funds, Proprietary Funds, dan Fiduciary Funds dalam sistem akuntansi dana (GASB).',
    'Menjelaskan mekanisme Akuntansi Anggaran (Budgetary Accounting) untuk memonitor ketaatan terhadap plafon pagu anggaran.',
    'Menerapkan Akuntansi Komitmen (Commitment Accounting / Encumbrance) dalam mengunci sisa pagu anggaran sejak kontrak/SPK ditandatangani.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Lima Teknik dan Basis Akuntansi Sektor Publik',
      svg: SVG_ACCOUNTING_TECHNIQUES,
      caption: 'Gambar 6.1: Variasi teknik pencatatan transaksi untuk tujuan kepatuhan anggaran dan pelaporan finansial.'
    },

    { kind: 'h2', text: '1. Spektrum Basis Akuntansi & Fokus Pengukuran' },
    {
      kind: 'table',
      headers: ['Basis Akuntansi', 'Waktu Pengakuan Pendapatan/Belanja', 'Fokus Pengukuran', 'Laporan yang Dihasilkan'],
      rows: [
        ['1. Basis Kas (Cash Basis)', 'Saat kas diterima di Rekening Kas Umum Negara/Daerah atau saat kas dibayarkan.', 'Arus Kas Masuk & Keluar (*Cash Flows*).', 'Laporan Realisasi Anggaran (LRA) & Laporan Arus Kas (LAK).'],
        ['2. Kas Menuju Akrual (CTA - PP 24/2005)', 'Kas untuk pendapatan/belanja LRA; Akrual untuk pencatatan aset lancar, utang jangka pendek di Neraca.', 'Sumber Daya Keuangan Lancar (*Current Financial Resources*).', 'LRA, Neraca (tanpa ekuitas penuh), LAK.'],
        ['3. Basis Akrual Penuh (Full Accrual - PP 71/2010)', 'Saat hak timbul (pendapatan-LO) atau kewajiban terjadi (beban), tanpa melihat kas masuk/keluar.', 'Seluruh Sumber Daya Ekonomi (*Economic Resources Measurement Focus*).', 'Laporan Operasional (LO), Neraca, LPE, CaLK.']
      ],
      caption: 'Tabel 6.1: Perbandingan karakteristik tiga basis akuntansi.'
    },

    { kind: 'h2', text: '2. Tiga Teknik Khusus Akuntansi Sektor Publik' },
    {
      kind: 'table',
      headers: ['Teknik Akuntansi', 'Prinsip Kerja & Mekanisme', 'Tujuan Manajerial'],
      rows: [
        ['1. Akuntansi Dana (Fund Accounting)', 'Membagi organisasi menjadi unit-unit akuntansi terpisah (dana umum, dana khusus, dana proyek) dengan neraca seimbang masing-masing.', 'Memastikan dana dengan peruntukan khusus (restricted grant) tidak bercampur atau disalahgunakan untuk operasional umum.'],
        ['2. Akuntansi Anggaran (Budgetary Accounting)', 'Mencatat estimasi pendapatan dan apropriasi belanja ke dalam akun-akun buku besar sejak anggaran disahkan.', 'Menyajikan perbandingan real-time antara realisasi aktual dengan anggaran langsung dari sistem buku besar.'],
        ['3. Akuntansi Komitmen (Commitment Accounting)', 'Mencatat transaksi pada tahap **pemesanan / kontrak (Encumbrance)** sebelum barang diterima atau faktur ditagihkan.', 'Mencegah manajer menerbitkan surat pesanan (PO) yang melampaui sisa pagu anggaran (*preventing over-spending*).']
      ],
      caption: 'Tabel 6.2: Tiga teknik akuntansi pengendalian internal publik.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 6' },
    {
      kind: 'ul',
      items: [
        '**SAP Berbasis Akrual Indonesia (PP 71/2010)**: Menggabungkan Basis Kas (untuk LRA/LP-SAL) dan Basis Akrual (untuk LO/Neraca/LPE) dalam satu sistem pembukuan terintegrasi (*Dual-System / Dual-Journal*).',
        '**Encumbrance**: Mengunci alokasi anggaran sehingga saldo dana bebas belanja (*Unencumbered Balance*) dapat terpantau secara akurat.',
        '**Self-Balancing Fund**: Setiap dana memiliki persamaan $Aset = Kewajiban + Ekuitas Dana$.'
      ]
    }
  ]
};