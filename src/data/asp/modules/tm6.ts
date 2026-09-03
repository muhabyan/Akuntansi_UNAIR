import type { Reading } from '../../../types';
import { CASE_FUND_COMMITMENT_ACCOUNTING } from '../aspPracticeCases';

const SVG_ACCOUNTING_BASES = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="kasGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="akrualGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp6)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">DUAL BASIS AKUNTANSI PEMERINTAH: BASIS KAS (LRA) VS BASIS AKRUAL (LO &amp; NERACA - PP 71/2010)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ACCOUNTING BASES</text>

  <!-- Left: Basis Kas (LRA) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#kasGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="10.5" font-weight="800">1. BASIS KAS (UNTUK LAPORAN PELAKSANAAN ANGGARAN)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Prinsip Pengakuan:</tspan> Transaksi diakui HANYA saat kas riil diterima atau dikeluarkan dari Kas Umum Negara/Daerah (KUN/KUD)</text>
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Laporan yang Dihasilkan:</tspan></text>
    <text class="text-accent-blue" x="14" y="96" fill="#38bdf8" font-size="7.5">  1. Laporan Realisasi Anggaran (LRA) - Pendapatan LRA &amp; Belanja</text>
    <text class="text-accent-blue" x="14" y="110" fill="#38bdf8" font-size="7.5">  2. Laporan Perubahan Saldo Anggaran Lebih (LP-SAL)</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="8">• Mengukur kepatuhan terhadap pagu Undang-Undang APBN / Perda APBD</text>
    <text class="svg-text" x="14" y="146" fill="#cbd5e1" font-size="8">• Tidak mencatat utang piutang atau penyusutan aset tetap</text>
    
    <rect class="svg-badge-blue" x="14" y="175" width="367" height="30" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="194" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Fungsi: Akuntabilitas Ketaatan Hukum Realisasi Anggaran Kas</text>
  </g>

  <!-- Right: Basis Akrual (Finansial) -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#akrualGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="10.5" font-weight="800">2. BASIS AKRUAL (UNTUK LAPORAN FINANSIAL)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Prinsip Pengakuan:</tspan> Transaksi diakui saat timbulnya hak/kewajiban ekonomi, terlepas dari kapan kas riil diterima atau dibayar</text>
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Laporan yang Dihasilkan:</tspan></text>
    <text class="text-accent-green" x="14" y="96" fill="#34d399" font-size="7.5">  1. Laporan Operasional (LO) - Pendapatan LO &amp; Beban Operasional</text>
    <text class="text-accent-green" x="14" y="110" fill="#34d399" font-size="7.5">  2. Laporan Perubahan Ekuitas (LPE)</text>
    <text class="text-accent-green" x="14" y="124" fill="#34d399" font-size="7.5">  3. Neraca Pemerintah (Aset, Kewajiban Utang, &amp; Ekuitas)</text>
    <text class="svg-text" x="14" y="142" fill="#cbd5e1" font-size="8">• Mengakui piutang pajak, beban penyusutan gedung, &amp; kewajiban pensiun</text>
    
    <rect class="svg-badge-green" x="14" y="175" width="367" height="30" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="197" y="194" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Fungsi: Mengukur Posisi Kekayaan Bersih &amp; Kinerja Hakiki Pemerintah</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Sistem Akuntansi Pemerintah RI menggunakan basis Akrual untuk Laporan Finansial dan basis Kas untuk Laporan Anggaran.</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Teknik & Basis Akuntansi Sektor Publik: Akuntansi Dana, Anggaran, & Komitmen',
  ref: 'GASB Standards | Deddi Nordiawan Ch. 4 | Akuntansi Komitmen & Akuntansi Dana Pemerintah',
  intro: 'TM 6 membahas instrumen teknis pencatatan keuangan sektor publik: Akuntansi Kas vs Akrual vs Kas Menuju Akrual, konsep Akuntansi Dana (Fund Accounting) sebagai entitas fiskal independen dengan persamaan akuntansi tersendiri, Akuntansi Anggaran (Budgetary Accounting) yang mencatat estimasi pendapatan dan apropriasi ke dalam buku besar, serta Akuntansi Komitmen (Commitment/Encumbrance Accounting) untuk mencegah overspending kontrak pihak ketiga.',
  objectives: [
    'Membedakan karakteristik Akuntansi Dana (General Fund, Special Revenue, Capital Projects, Debt Service).',
    'Menjurnal pencatatan anggaran pada awal tahun (Estimasi Pendapatan vs Apropriasi Belanja).',
    'Menjurnal siklus Akuntansi Komitmen: saat penerbitan SPK, penerimaan barang, hingga penerbitan SP2D pembayaran kas.',
    'Menghitung sisa pagu anggaran bebas (Unencumbered Balance) yang aman untuk dibelanjakan.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 6.1: Tiga Teknik Pengendalian Akuntansi Sektor Publik.',
      svg: SVG_ACCOUNTING_BASES
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 6'
    },
    {
      kind: 'table',
      headers: ['Teknik Akuntansi', 'Saat Pengakuan Transaksi', 'Fungsi Utama', 'Dampak Terhadap Neraca'],
      rows: [
        ['Akuntansi Kas', 'Saat kas masuk ke Kasda atau keluar dari Kasda.', 'Memantau ketersediaan likuiditas kas riil.', 'Hanya mencatat pos Kas dan Ekuitas Dana Kas.'],
        ['Akuntansi Akrual', 'Saat hak timbul (pendapatan) atau kewajiban terjadi (beban).', 'Menyajikan posisi aset dan kewajiban secara wajar.', 'Mencatat piutang, utang, dan aset tetap komprehensif.'],
        ['Akuntansi Anggaran', 'Saat Perda APBD atau DPA disahkan di awal tahun.', 'Memasukkan pagu hukum sebagai batas kontrol pengeluaran.', 'Mencatat akun anggaran (Estimasi Pendapatan & Apropriasi).'],
        ['Akuntansi Komitmen', 'Saat kontrak kerja atau SPK ditandatangani rekanan.', 'Mengunci alokasi anggaran agar tidak terjadi pengeluaran ganda.', 'Mencatat Encumbrance dan Reserve for Encumbrance.']
      ],
      caption: 'Tabel 6.0: Matriks teknik dan basis akuntansi sektor publik.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Siklus Akuntansi Komitmen & Sisa Pagu Bebas'
    },
    {
      kind: 'formula',
      text: `\\text{Sisa Pagu Anggaran Bebas (Unencumbered Balance)} = \\text{Total Apropriasi DPA} - \\text{Realisasi Belanja Riil} - \\text{Komitmen Terikat (Encumbrance)}
\\text{Jurnal Komitmen Saat SPK Ditandatangani}:
\\text{Debit: Encumbrances / Komitmen Belanja} \\quad \\text{Kredit: Reserve for Encumbrances}
\\text{Jurnal Saat Tagihan Diterima}:
\\text{1. Membalik Komitmen}: \\quad \\text{Debit: Reserve for Encumbrances} \\quad \\text{Kredit: Encumbrances}
\\text{2. Mengakui Belanja Riil}: \\quad \\text{Debit: Belanja Barang / Modal} \\quad \\text{Kredit: Utang Belanja / Kas}`,
      note: 'Jika Unencumbered Balance bernilai nol atau negatif, pejabat pengadaan dilarang keras menerbitkan surat perintah kerja baru.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perhitungan Sisa Pagu Anggaran Bebas',
      prompt: 'DPA Dinas Pekerjaan Umum memiliki pagu Apropriasi Belanja Pemeliharaan Jalan sebesar Rp 10 Miliar. Realisasi belanja yang sudah dibayar SP2D = Rp 6 Miliar. Terdapat 2 SPK rekanan yang sedang berjalan masing-masing senilai Rp 1,5 Miliar dan Rp 1,8 Miliar. Berapa sisa pagu bebas yang dapat dikontrakkan untuk proyek baru?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Total Komitmen Terikat (Encumbrances)**: Rp 1,5 Miliar + Rp 1,8 Miliar = **Rp 3,3 Miliar**.',
            '**Sisa Pagu Anggaran Bebas (Unencumbered Balance)**:\nPagu Apropriasi - Realisasi Belanja - Komitmen Terikat = Rp 10 Miliar - Rp 6 Miliar - Rp 3,3 Miliar = **Rp 700.000.000**.',
            '**Keputusan Manajerial**: Dinas PU hanya boleh menerbitkan kontrak pengadaan baru dengan nilai setinggi-tingginya Rp 700 Juta untuk mencegah defisit anggaran over-commitment.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 6'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Konsep Akuntansi Dana (Fund)', 'Karakteristik Governmental Funds, Proprietary Funds, Fiduciary Funds.', 'Mampu mengidentifikasi pemisahan entitas dana publik.'],
        ['2', 'Jurnal Akuntansi Anggaran', 'Pencatatan estimasi penerimaan dan pagu belanja di awal tahun.', 'Mampu mencatat ayat jurnal pembukaan anggaran di buku besar.'],
        ['3', 'Mekanisme Encumbrances', 'Siklus hidup komitmen belanja dan eliminasi cadangan komitmen.', 'Mampu membuat jurnal akuntansi komitmen pengadaan barang/jasa.']
      ],
      caption: 'Tabel 6.2: Peta penguasaan submateri TM 6 Akuntansi Sektor Publik.'
    },
    CASE_FUND_COMMITMENT_ACCOUNTING,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Akuntansi Komitmen adalah Rem Anggaran**: Tanpa akuntansi komitmen, dinas rawan menandatangani SPK melebihi sisa dana kas daerah (Over-commitment liability).',
        '**Dana (Fund) Memiliki Persamaan Neraca Sendiri**: Setiap dana dalam Fund Accounting menyusun neraca dan laporan realisasinya secara mandiri tanpa bercampur dengan dana lain.',
        '**Pencatatan Berpasangan Ganda**: Di Indonesia, sistem akuntansi daerah mengombinasikan Jurnal Anggaran (Basis Kas) dengan Jurnal Finansial (Basis Akrual) secara simultan.'
      ]
    }
  ]
};
