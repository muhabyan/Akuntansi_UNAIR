import type { Reading } from '../../../types';
import { CASE_SKPD_PPKD_CONSOLIDATION } from '../aspPracticeCases';

const SVG_SAPD_STRUCTURE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="ppkdGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="skpdGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp9)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">STRUKTUR HUBUNGAN HOBO SISTEM AKUNTANSI PEMERINTAH DAERAH: PPKD (BUD) VS SKPD</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">SAPD HOBO</text>

  <!-- Left: PPKD / BUD (Home Office) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="365" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="30" rx="12" fill="url(#ppkdGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="10.5" font-weight="800">1. PPKD (BENDAHARA UMUM DAERAH - BUD)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Peran:</tspan> Home Office (Kantor Pusat Entitas Pelaporan Pemda)</text>
    <text class="svg-text" x="14" y="70" fill="#cbd5e1" font-size="8">• Mengelola Rekening Kas Umum Daerah (RKUD)</text>
    <text class="svg-text" x="14" y="88" fill="#cbd5e1" font-size="8">• Mencatat Pendapatan PAD Tingkat Pemda, DAU, DAK, DBH</text>
    <text class="svg-text" x="14" y="106" fill="#cbd5e1" font-size="8">• Mencatat Belanja Bagi Hasil, Bunga Utang, Belanja BTT, &amp; Pembiayaan</text>
    <text class="svg-text" x="14" y="124" fill="#cbd5e1" font-size="8">• Menerbitkan SP2D transfer uang persediaan ke Bendahara SKPD</text>
    
    <rect class="svg-badge-blue" x="14" y="175" width="337" height="30" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="182" y="194" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Mencatat Akun Resiprokal: <tspan fill="#f8fafc">RK-SKPD (Debet)</tspan></text>
  </g>

  <!-- Center Bidirectional Connectors -->
  <g transform="translate(405, 140)">
    <rect class="svg-subcard" x="0" y="0" width="90" height="42" rx="6" fill="#1e293b" stroke="#fbbf24"/>
    <text class="text-accent-amber" x="45" y="18" fill="#fbbf24" font-size="7.5" font-weight="800" text-anchor="middle">REKENING</text>
    <text class="text-accent-amber" x="45" y="32" fill="#fbbf24" font-size="7.5" font-weight="800" text-anchor="middle">KORAN (RK)</text>
    <!-- Arrow Left -->
    <polygon points="-8,21 -2,16 -2,26" fill="#38bdf8"/>
    <!-- Arrow Right -->
    <polygon points="98,21 92,16 92,26" fill="#34d399"/>
  </g>

  <!-- Right: SKPD (Branch Office) -->
  <g transform="translate(500, 75)">
    <rect class="svg-card" x="0" y="0" width="365" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="30" rx="12" fill="url(#skpdGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="10.5" font-weight="800">2. SKPD (SATUAN KERJA PERANGKAT DAERAH)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Peran:</tspan> Branch Office (Kantor Cabang / Entitas Akuntansi)</text>
    <text class="svg-text" x="14" y="70" fill="#cbd5e1" font-size="8">• Contoh: Dinas Pendidikan, Dinas Kesehatan, Satpol PP, Dinas PU</text>
    <text class="svg-text" x="14" y="88" fill="#cbd5e1" font-size="8">• Mencatat Retribusi Daerah &amp; Belanja Operasional SKPD (Gaji, ATK, Perjadin)</text>
    <text class="svg-text" x="14" y="106" fill="#cbd5e1" font-size="8">• Menerima dana via mekanisme SP2D-UP/GU/TU atau SP2D-LS Gaji/Barang</text>
    <text class="svg-text" x="14" y="124" fill="#cbd5e1" font-size="8">• Mengirim laporan realisasi anggaran SKPD untuk dikonsolidasikan PPKD</text>
    
    <rect class="svg-badge-green" x="14" y="175" width="337" height="30" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="182" y="194" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Mencatat Akun Resiprokal: <tspan fill="#f8fafc">RK-PPKD (Kredit)</tspan></text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Pada akhir tahun, akun resiprokal RK-SKPD dan RK-PPKD WAJIB dieliminasi dalam Jurnal Eliminasi Konsolidasi Lapkeu Pemda.</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Sistem Akuntansi Pemerintah Pusat (SAPP) & Daerah (SAPD): Konsolidasi & Rekening Koran HOBO',
  ref: 'Permendagri 77/2020 | Modul SAPD Kemendagri | Hubungan Kantor Pusat - Cabang (HOBO) SKPD & PPKD',
  intro: 'TM 9 membahas mekanisme operasional Sistem Akuntansi Pemerintah Daerah (SAPD) dan Sistem Akuntansi Pemerintah Pusat (SAPP): pembagian peran SKPD sebagai Entitas Akuntansi (Branch) dan PPKD/BUD sebagai Entitas Pelaporan (Home Office), perlakuan akun timbal balik (Reciprocal Accounts: RK-PPKD vs RK-SKPD), mekanisme pencairan kas UP/GU/TU/LS, serta teknik eliminasi akun resiprokal dalam penyusunan Laporan Keuangan Konsolidasian Pemda (LKPD).',
  objectives: [
    'Membedakan peran dan wewenang Entitas Akuntansi (SKPD) vs Entitas Pelaporan (PPKD/Pemda).',
    'Menjurnal transaksi Uang Persediaan (UP), Ganti Uang (GU), Tambah Uang (TU), dan Pembayaran Langsung (LS).',
    'Mencatat akun timbal balik RK-PPKD di buku SKPD dan RK-SKPD di buku PPKD.',
    'Menyusun kertas kerja eliminasi konsolidasi akun timbal balik untuk menghasilkan Neraca Konsolidasian Pemda.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 9.1: Struktur Hubungan Akun Timbal Balik PPKD (Home Office) dan SKPD (Branch) dalam SAPD.',
      svg: SVG_SAPD_STRUCTURE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 9'
    },
    {
      kind: 'table',
      headers: ['Mekanisme Pencairan SP2D', 'Karakteristik Operasional', 'Jurnal Finansial di SKPD', 'Jurnal Finansial di PPKD'],
      rows: [
        ['Uang Persediaan (SP2D-UP)', 'Uang muka kerja kas kecil operasional bulanan dinas.', 'Debit: Kas di Bendahara Pengeluaran\nKredit: RK-PPKD', 'Debit: RK-SKPD Dinas\nKredit: Kas di Kas Daerah'],
        ['Ganti Uang (SP2D-GU)', 'Penggantian dana kas UP yang telah terpakai disertai SPJ lengkap.', 'Debit: Beban / Belanja (sesuai SPJ)\nKredit: RK-PPKD', 'Debit: RK-SKPD Dinas\nKredit: Kas di Kas Daerah'],
        ['Tambah Uang (SP2D-TU)', 'Tambahan kas untuk kegiatan mendesak yang tidak tertutup oleh UP.', 'Debit: Kas di Bendahara Pengeluaran\nKredit: RK-PPKD', 'Debit: RK-SKPD Dinas\nKredit: Kas di Kas Daerah'],
        ['Pembayaran Langsung (SP2D-LS Gaji)', 'Pembayaran gaji langsung ke rekening rekening ASN oleh BUD.', 'Debit: Beban Gaji & Tunjangan\nKredit: RK-PPKD', 'Debit: RK-SKPD Dinas\nKredit: Kas di Kas Daerah'],
        ['Pembayaran Langsung (SP2D-LS Rekanan)', 'Pembayaran proyek pihak ketiga langsung dari Kasda ke rekening bank vendor.', 'Debit: Aset Tetap / Beban Jasa\nKredit: RK-PPKD', 'Debit: RK-SKPD Dinas\nKredit: Kas di Kas Daerah']
      ],
      caption: 'Tabel 9.0: Matriks jurnal pencairan dana kas daerah (UP, GU, TU, LS).'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Jurnal Eliminasi Konsolidasi Akhir Tahun'
    },
    {
      kind: 'formula',
      text: `\\text{Prinsip Keseimbangan Akun Resiprokal}: \\quad \\text{Saldo Normal Debit (RK-SKPD di PPKD)} = \\text{Saldo Normal Kredit (RK-PPKD di SKPD)}
\\text{Jurnal Eliminasi Konsolidasi Akhir Tahun (Pada Kertas Kerja Penggabungan)}:
\\text{Debit: RK-PPKD (Menghapus Saldo Kredit di Pasiva SKPD)} \\quad \\text{Kredit: RK-SKPD (Menghapus Saldo Debit di Aset PPKD)}`,
      note: 'Setelah jurnal eliminasi di-posting pada kertas kerja konsolidasi, akun RK-PPKD dan RK-SKPD WAJIB bernilai nol dan tidak boleh muncul di Neraca Konsolidasian Pemda.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Jurnal Penyetoran Pendapatan Retribusi SKPD ke Kasda',
      prompt: 'Bendahara Penerimaan Dinas Perhubungan menyetor penerimaan retribusi parkir tunai sebesar Rp 30.000.000 ke rekening Kas Umum Daerah (Kasda). Buatlah jurnal di buku SKPD Dishub dan jurnal di buku PPKD!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Jurnal di Buku SKPD Dinas Perhubungan**:\n- *Debit*: RK-PPKD = Rp 30.000.000\n- *Kredit*: Kas di Bendahara Penerimaan = Rp 30.000.000.',
            '**Jurnal di Buku PPKD (BUD)**:\n- *Debit*: Kas di Kas Daerah = Rp 30.000.000\n- *Kredit*: RK-SKPD Dinas Perhubungan = Rp 30.000.000.',
            '**Penjelasan**: Penyetoran kas ke Kasda mengurangi tanggung jawab kas bendahara dinas dan mengurangi utang antarkantor cabang ke pusat (RK-PPKD).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 9'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Konsep Entitas Akuntansi vs Pelaporan', 'Kewenangan menyusun laporan di tingkat unit kerja dinas vs kepala daerah.', 'Mampu membedakan batas pelaporan SKPD dan PPKD.'],
        ['2', 'Mekanisme SP2D (UP, GU, TU, LS)', 'Alur dokumen SPP, SPM, dan pencairan SP2D oleh Kuasa BUN/BUD.', 'Mampu mencatat ayat jurnal transaksi pengeluaran kas daerah.'],
        ['3', 'Eliminasi Akun Timbal Balik', 'Rekonsiliasi saldo akun resiprokal dan pencatatan jurnal eliminasi.', 'Mampu menyusun neraca konsolidasian pemerintah daerah.']
      ],
      caption: 'Tabel 9.2: Peta penguasaan submateri TM 9 Akuntansi Sektor Publik.'
    },
    CASE_SKPD_PPKD_CONSOLIDATION,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**RK-PPKD adalah Akun Ekuitas**: Di neraca SKPD, akun RK-PPKD diklasifikasikan sebagai kelompok ekuitas yang mencerminkan pembiayaan modal kerja dari pemerintah daerah.',
        '**Eliminasi Wajib Sempurna**: Selisih antara saldo RK-SKPD dan RK-PPKD di akhir tahun menandakan adanya setoran atau pengeluaran kas dalam perjalanan (Cash in Transit) yang wajib direkonsiliasi terlebih dahulu.',
        '**Mekanisme LS Tanpa Lewat Kas Bendahara**: Pembayaran proyek SP2D-LS tidak pernah masuk ke rekening kas bendahara pengeluaran dinas, melainkan langsung ditransfer dari Kasda ke rekening kontraktor.'
      ]
    }
  ]
};
