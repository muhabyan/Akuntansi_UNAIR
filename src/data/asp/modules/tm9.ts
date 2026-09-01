import type { Reading } from '../../../types';
import { CASE_SKPD_PPKD_CONSOLIDATION } from '../aspPracticeCases';

const SVG_SAPD_STRUCTURE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRUKTUR HUBUNGAN KANTOR PUSAT - CABANG (HOBO) SISTEM AKUNTANSI PEMDA (SAPD)</text>
  
  <rect x="35" y="55" width="275" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="172" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">PPKD (KANTOR PUSAT / HO)</text>
  <text x="172" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Pejabat Pengelola Keuangan Daerah (BUD):</text>
  <text x="172" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mengelola Rekening Kas Umum Daerah (Kasda)</text>
  <text x="172" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mencatat Pendapatan Dana Transfer &amp; Pembiayaan</text>
  <text x="172" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Akun Timbal Balik: <tspan fill="#38bdf8" font-weight="700">RK-SKPD (Aset Lancar)</tspan></text>
  <text x="172" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Entitas Pelaporan Pemda</text>

  <line x1="315" y1="128" x2="365" y2="128" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="340" y="120" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">ELIMINASI</text>

  <rect x="370" y="55" width="275" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="507" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">SKPD (KANTOR CABANG / BRANCH)</text>
  <text x="507" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Dinas Daerah, Badan, Satpol PP, RSUD:</text>
  <text x="507" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Melaksanakan Belanja Operasi &amp; Modal</text>
  <text x="507" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Memungut Retribusi &amp; Pajak Pelayanan</text>
  <text x="507" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Akun Timbal Balik: <tspan fill="#4ade80" font-weight="700">RK-PPKD (Ekuitas Dana)</tspan></text>
  <text x="507" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Entitas Akuntansi Dinas</text>
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
