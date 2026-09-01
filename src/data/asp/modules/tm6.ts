import type { Reading } from '../../../types';
import { CASE_FUND_COMMITMENT_ACCOUNTING } from '../aspPracticeCases';

const SVG_ACCOUNTING_BASES = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SPEKTRUM TEKNIK &amp; BASIS AKUNTANSI SEKTOR PUBLIK</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">AKUNTANSI DANA</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Fund Accounting):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• General Fund (Dana Umum)</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Special Revenue Fund</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Setiap dana = entitas akuntansi</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Restriksi Penggunaan</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">AKUNTANSI ANGGARAN</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Budgetary Accounting):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Anggaran dicatat ke buku besar</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Estimasi Pendapatan vs Apropriasi</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pengawasan varians real-time</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Kontrol Otorisasi</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">AKUNTANSI KOMITMEN</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Commitment / Encumbrance):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dicatat saat order/SPK terbit</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mengunci pagu sisa anggaran</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mencegah overspending kontrak</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Pengendalian Kontrak</text>
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
