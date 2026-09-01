import type { Reading } from '../../../types';
import { CASE_GOV_ACCOUNTING_STANDARDS } from '../aspPracticeCases';

const SVG_GOV_REGULATIONS = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">HIERARKI REGULASI KEUANGAN NEGARA &amp; STANDAR AKUNTANSI PEMERINTAHAN</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">UU NO. 17 / 2003</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Keuangan Negara:</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Asas kesatuan &amp; universal</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bentuk APBN &amp; APBD</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mandat Basis Akrual</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Fondasi Keuangan</text>

  <rect x="185" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="257" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">UU NO. 1 / 2004</text>
  <text x="257" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Perbendaharaan Negara:</text>
  <text x="257" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Fungsi Bendahara Umum (BUN)</text>
  <text x="257" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pengelolaan Kas &amp; Piutang</text>
  <text x="257" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Badan Layanan Umum (BLU)</text>
  <text x="257" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Eksekusi Kas Negara</text>

  <rect x="345" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="417" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">UU NO. 15 / 2004</text>
  <text x="417" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Pemeriksaan Keuangan:</text>
  <text x="417" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kewenangan BPK RI</text>
  <text x="417" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 3 Jenis Pemeriksaan Audit</text>
  <text x="417" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tindak lanjut LHP 60 hari</text>
  <text x="417" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Pengawasan BPK RI</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">PP NO. 71 / 2010</text>
  <text x="580" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Standar Akuntansi (SAP):</text>
  <text x="580" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Lampiran I: SAP Akrual</text>
  <text x="580" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 7 Laporan Keuangan Pemda</text>
  <text x="580" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PSAP 01 s/d PSAP 17</text>
  <text x="580" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Standar Pelaporan</text>
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
