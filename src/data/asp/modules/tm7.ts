import type { Reading } from '../../../types';
import { CASE_GOVERNMENT_JOURNALS } from '../aspPracticeCases';

const SVG_7_GOV_REPORTS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TUJUH KOMPONEN LAPORAN KEUANGAN PEMERINTAH (PP NO. 71/2010)</text>
  
  <!-- Group 1: Budgetary -->
  <rect x="25" y="55" width="200" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Laporan Anggaran (Kas)</text>
  <line x1="35" y1="90" x2="215" y2="90" stroke="#334155"/>
  <text x="125" y="112" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">• LRA (Realisasi Anggaran)</text>
  <text x="125" y="130" fill="#94a3b8" font-size="9" text-anchor="middle">  (Pendapatan-LRA, Belanja, &amp; Silpa)</text>
  <text x="125" y="152" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">• LP-SAL (Perubahan SAL)</text>
  <text x="125" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">  (Saldo Anggaran Lebih)</text>
  <text x="125" y="190" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Basis Kas &amp; Pertanggungjawaban</text>

  <!-- Group 2: Financial Accrual -->
  <rect x="240" y="55" width="200" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="78" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. Laporan Finansial (Akrual)</text>
  <line x1="250" y1="90" x2="430" y2="90" stroke="#334155"/>
  <text x="340" y="112" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">• LO (Laporan Operasional)</text>
  <text x="340" y="130" fill="#94a3b8" font-size="9" text-anchor="middle">  (Pendapatan-LO &amp; Beban)</text>
  <text x="340" y="152" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">• Neraca Pemerintah</text>
  <text x="340" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">  (Aset, Kewajiban, Ekuitas)</text>
  <text x="340" y="190" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">• LPE (Perubahan Ekuitas)</text>

  <!-- Group 3: Cash & Notes -->
  <rect x="455" y="55" width="200" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="78" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">3. Transisi &amp; Catatan</text>
  <line x1="465" y1="90" x2="645" y2="90" stroke="#334155"/>
  <text x="555" y="112" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">• LAK (Laporan Arus Kas)</text>
  <text x="555" y="130" fill="#94a3b8" font-size="9" text-anchor="middle">  (Operasi, Investasi, Pendanaan, Transitoris)</text>
  <text x="555" y="155" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">• CaLK</text>
  <text x="555" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">  (Catatan atas Laporan Keuangan)</text>
  <text x="555" y="190" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">Pengungkapan Wajib</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Laporan Keuangan Pemerintah di Indonesia Berbasis Akrual (PP 71/2010)',
  ref: 'PSAP 01 s.d PSAP 12 | PP 71/2010 Lampiran I',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 7: Menguasai 7 komponen laporan keuangan pemerintah pusat dan daerah (LRA, LP-SAL, LO, LPE, Neraca, LAK, dan CaLK), perbedaan fundamental antara Pendapatan-LRA vs Pendapatan-LO dan Belanja vs Beban, hubungan matematis keterkaitan antarlaporan, serta penyusunan jurnal akrual vs kas.',
  objectives: [
    'Menjelaskan fungsi dan struktur 7 komponen laporan keuangan pemerintah sesuai PP No. 71/2010.',
    'Membedakan Laporan Pelaksanaan Anggaran (LRA & LP-SAL - Basis Kas) vs Laporan Finansial (LO, Neraca, LPE - Basis Akrual).',
    'Membedakan Pendapatan-LRA vs Pendapatan-LO, serta Belanja (LRA) vs Beban (LO).',
    'Menganalisis keterkaitan surplus/defisit LO dengan LPE dan Neraca (Ekuitas).',
    'Menganalisis keterkaitan SiLPA pada LRA dengan Saldo Anggaran Lebih pada LP-SAL dan Kas di Kasda.',
    'Menjelaskan 4 aktivitas dalam Laporan Arus Kas (Operasi, Investasi Non-Keuangan, Pendanaan, dan Transitoris).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tujuh Komponen Laporan Keuangan Pemerintah Berbasis Akrual',
      svg: SVG_7_GOV_REPORTS,
      caption: 'Gambar 7.1: Taksonomi 7 laporan keuangan pemerintah menurut Standar Akuntansi Pemerintahan.'
    },

    { kind: 'h2', text: '1. Rincian Tujuh Komponen Laporan Keuangan Pemerintah' },
    {
      kind: 'table',
      headers: ['Nama Laporan Keuangan', 'Basis Akuntansi', 'Komponen Utama yang Disajikan', 'Entitas yang Menyusun'],
      rows: [
        ['1. Laporan Realisasi Anggaran (LRA)', 'Basis Kas', 'Pendapatan-LRA, Belanja, Transfer, dan Pembiayaan $\\rightarrow$ **SiLPA / SiKPA**.', 'SKPD & PPKD / Pemda & K/L'],
        ['2. Laporan Perubahan Saldo Anggaran Lebih (LP-SAL)', 'Basis Kas', 'Saldo Awal SAL, Penggunaan SAL, SiLPA/SiKPA tahun berjalan, Koreksi $\\rightarrow$ **Saldo Akhir SAL**.', 'Khusus BUD / PPKD & BUN'],
        ['3. Laporan Operasional (LO)', 'Basis Akrual', 'Pendapatan-LO, Beban Operasi, Kegiatan Non-Operasional, Pos Luar Biasa $\\rightarrow$ **Surplus / Defisit-LO**.', 'SKPD & PPKD / Pemda & K/L'],
        ['4. Laporan Perubahan Ekuitas (LPE)', 'Basis Akrual', 'Ekuitas Awal, Surplus/Defisit-LO, Dampak Kumulatif Kebijakan/Koreksi $\\rightarrow$ **Ekuitas Akhir**.', 'SKPD & PPKD / Pemda & K/L'],
        ['5. Neraca Pemerintah', 'Basis Akrual', 'Aset Lancar, Investasi Jangka Panjang, Aset Tetap, Aset Lainnya = Kewajiban Jangka Pendek + Jangka Panjang + **Ekuitas**.', 'SKPD & PPKD / Pemda & K/L'],
        ['6. Laporan Arus Kas (LAK)', 'Basis Kas', 'Arus Kas dari Aktivitas: (1) Operasi, (2) Investasi Non-Keuangan, (3) Pendanaan, (4) Transitoris/PFK.', 'Khusus BUD / PPKD & BUN'],
        ['7. Catatan atas Laporan Keuangan (CaLK)', 'Deskriptif Naratif', 'Penjelasan kebijakan fiskal/keuangan, kebijakan akuntansi, rincian penjelasan tiap pos di 6 laporan lainnya.', 'Seluruh Entitas Akuntansi & Pelaporan']
      ],
      caption: 'Tabel 7.1: Karakteristik 7 laporan keuangan pemerintah berbasis akrual.'
    },

    { kind: 'h2', text: '2. Pembedaan Kritis: LRA vs LO' },
    {
      kind: 'table',
      headers: ['Dimensi Akun', 'Laporan Realisasi Anggaran (LRA)', 'Laporan Operasional (LO)'],
      rows: [
        ['Penerimaan Hak', '**Pendapatan-LRA**: Diakui saat uang masuk ke kas negara/daerah (Basis Kas).', '**Pendapatan-LO**: Diakui saat timbul hak atas pendapatan atau ada aliran masuk sumber daya ekonomi (Basis Akrual).'],
        ['Pengeluaran Habis Pakai', '**Belanja Barang/Jasa**: Diakui saat kas keluar.', '**Beban Barang/Jasa**: Diakui saat barang dipakai/dikonsumsi atau jasa diterima.'],
        ['Pengadaan Aset Tetap', '**Belanja Modal**: Masuk LRA (mengurangi kas anggaran).', '**TIDAK MASUK LO** (Masuk ke Neraca sebagai penambahan Aset Tetap; LO hanya mencatat Beban Penyusutan/Depresiasi tahunan).'],
        ['Hasil Selisih Bersih', '**SiLPA / SiKPA** (Sisa Lebih/Kurang Pembiayaan Anggaran).', '**Surplus / Defisit-LO** (mengalir ke LPE untuk menambah/mengurangi Ekuitas di Neraca).']
      ],
      caption: 'Tabel 7.2: Perbedaan fundamental antara LRA dan LO.'
    },

    CASE_GOVERNMENT_JOURNALS,

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 7 (Pra-UTS)' },
    {
      kind: 'ul',
      items: [
        '**LP-SAL dan LAK**: Hanya disusun oleh Bendahara Umum Negara / Daerah (BUN / BUD / PPKD), **SKPD TIDAK MENYUSUN LP-SAL DAN LAK**.',
        '**Ekuitas Tunggal**: Pada PP 71/2010 tidak ada lagi pemisahan Ekuitas Dana Lancar/Investasi/Cadangan (hanya satu akun **Ekuitas** di Neraca).',
        '**Aktivitas Transitoris LAK**: Arus kas non-anggaran penerimaan dan pengeluaran Perhitungan Fihak Ketiga (PFK - seperti potongan pajak PPh/PPN dan Taspen/Askes).'
      ]
    }
  ]
};