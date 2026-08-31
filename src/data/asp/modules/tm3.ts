import type { Reading } from '../../../types';

const SVG_STATE_FINANCE_LAWS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TRILOGI PAKET UU KEUANGAN NEGARA &amp; STANDAR AKUNTANSI PEMERINTAHAN</text>
  
  <rect x="25" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">UU 17 / 2003</text>
  <text x="97" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Keuangan Negara</text>
  <line x1="35" y1="108" x2="160" y2="108" stroke="#334155"/>
  <text x="97" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pengertian &amp; Asas</text>
  <text x="97" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Mandat Basis Akrual</text>
  <text x="97" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Hubungan APBN/D</text>
  <text x="97" y="180" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Landasan Utama</text>

  <rect x="185" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="257" y="78" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">UU 1 / 2004</text>
  <text x="257" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Perbendaharaan</text>
  <line x1="195" y1="108" x2="320" y2="108" stroke="#334155"/>
  <text x="257" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pejabat BUN &amp; BUD</text>
  <text x="257" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pengelolaan Kas</text>
  <text x="257" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Badan Layanan Umum</text>
  <text x="257" y="180" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">Operasional Kas</text>

  <rect x="345" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="417" y="78" fill="#f59e0b" font-size="10.5" font-weight="700" text-anchor="middle">UU 15 / 2004</text>
  <text x="417" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Pemeriksaan Keuangan</text>
  <line x1="355" y1="108" x2="480" y2="108" stroke="#334155"/>
  <text x="417" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Kewenangan BPK</text>
  <text x="417" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Opini WTP / WDP</text>
  <text x="417" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Standar SPKN</text>
  <text x="417" y="180" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Audit Eksternal</text>

  <rect x="505" y="55" width="150" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a855f7" font-size="10.5" font-weight="700" text-anchor="middle">PP 71 / 2010</text>
  <text x="580" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">SAP Berbasis Akrual</text>
  <line x1="515" y1="108" x2="645" y2="108" stroke="#334155"/>
  <text x="580" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Lampiran I (Akrual)</text>
  <text x="580" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• 7 Laporan Keuangan</text>
  <text x="580" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• PSAP 01 s.d PSAP 17</text>
  <text x="580" y="180" fill="#c084fc" font-size="9" font-weight="700" text-anchor="middle">Standar Akuntansi</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Regulasi Pengelolaan Keuangan Negara & Standar Akuntansi Pemerintahan (SAP)',
  ref: 'UU 17/2003, UU 1/2004, UU 15/2004 | PP 71/2010 | UU 1/2022 HKPD',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 3: Menguasai pilar hukum keuangan negara Indonesia (Trilogi Paket UU Keuangan Negara: UU 17/2003, UU 1/2004, UU 15/2004), UU Hubungan Keuangan Pusat dan Daerah (UU 1/2022 HKPD), Kerangka Konseptual dan Pernyataan Standar Akuntansi Pemerintahan (PSAP) berbasis Akrual (PP 71/2010), International Public Sector Accounting Standards (IPSAS), serta Standar Pemeriksaan Keuangan Negara (SPKN).',
  objectives: [
    'Menjelaskan ruang lingkup Keuangan Negara berdasarkan Pasal 2 UU No. 17/2003.',
    'Menganalisis peran Bendahara Umum Negara (BUN) dan Pengguna Anggaran (PA) menurut UU No. 1/2004.',
    'Menjelaskan dasar hukum audit BPK dan jenis-jenis opini menurut UU No. 15/2004.',
    'Memahami arsitektur PP No. 71 Tahun 2010 tentang Standar Akuntansi Pemerintahan (SAP Berbasis Akrual).',
    'Menjelaskan perbedaan IPSAS (Internasional) vs SAP Indonesia.',
    'Menganalisis prinsip desentralisasi fiskal dan transfer ke daerah (TKD) berdasarkan UU No. 1/2022 (HKPD).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Pilar Regulasi Keuangan Negara dan Standar Akuntansi Pemerintahan',
      svg: SVG_STATE_FINANCE_LAWS,
      caption: 'Gambar 3.1: Hubungan sinergis antara UU Keuangan Negara, Perbendaharaan, Audit BPK, dan SAP Akrual.'
    },

    { kind: 'h2', text: '1. Trilogi Paket Undang-Undang Keuangan Negara' },
    {
      kind: 'table',
      headers: ['Regulasi UU', 'Nama Undang-Undang', 'Substansi & Ketentuan Kunci'],
      rows: [
        ['UU No. 17 Tahun 2003', 'Keuangan Negara', 'Mendefinisikan hak dan kewajiban negara yang dapat dinilai dengan uang; memandatkan penerapan **Basis Akrual penuh** selambat-lambatnya 5 tahun sejak UU diundangkan.'],
        ['UU No. 1 Tahun 2004', 'Perbendaharaan Negara', 'Mengatur pengelolaan kas, piutang/utang negara, investasi pemerintah, kewenangan Menteri Keuangan sebagai BUN, serta **Pelembagaan Badan Layanan Umum (BLU)**.'],
        ['UU No. 15 Tahun 2004', 'Pemeriksaan Pengelolaan dan Tanggung Jawab Keuangan Negara', 'Mengatur kewenangan independen BPK dalam melaksanakan pemeriksaan keuangan, kinerja, dan PDTT atas seluruh entitas pengguna anggaran negara.']
      ],
      caption: 'Tabel 3.1: Trilogi undang-undang reformasi keuangan negara.'
    },

    { kind: 'h2', text: '2. Kerangka Standar Akuntansi Pemerintahan (PP 71/2010)' },
    {
      kind: 'p',
      text: 'Standar Akuntansi Pemerintahan (SAP) ditetapkan oleh Komite Standar Akuntansi Pemerintahan (KSAP) melalui **PP No. 71 Tahun 2010** yang memuat:'
    },
    {
      kind: 'ul',
      items: [
        '**Lampiran I (SAP Berbasis Akrual)**: Berlaku wajib untuk seluruh instansi pemerintah pusat dan daerah sejak tahun anggaran 2015.',
        '**Pengakuan Akrual**: Pendapatan-LO, Beban, Aset, Kewajiban, dan Ekuitas diakui pada saat hak timbul atau terjadi transaksi, bukan saat kas diterima/dikeluarkan.',
        '**Pengakuan Kas pada Anggaran**: Khusus Laporan Realisasi Anggaran (LRA), pendapatan dan belanja tetap diakui berdasarkan **Basis Kas** sesuai format penganggaran APBN/APBD.'
      ]
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 3' },
    {
      kind: 'ul',
      items: [
        '**PP 71/2010 Lampiran I**: Menggantikan PP 24/2005 (Cash Towards Accrual) menjadi Full Accrual SAP.',
        '**UU 1/2022 (HKPD)**: Mengatur sinergi pendanaan transfer ke daerah (DAU, DAK, DBH) dengan berbasis kinerja layanan publik.',
        '**BUN vs PA**: Menteri Keuangan bertindak sebagai Chief Financial Officer (CFO / BUN), sedangkan para Menteri teknis bertindak sebagai Chief Operating Officer (COO / PA).'
      ]
    }
  ]
};