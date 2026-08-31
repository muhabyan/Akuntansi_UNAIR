import type { Reading } from '../../../types';

const SVG_AUDIT_GOV_TYPES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TIGA JENIS PEMERIKSAAN BPK MENURUT UU NO. 15 TAHUN 2004 &amp; SPKN</text>
  
  <!-- Financial Audit -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Pemeriksaan Keuangan</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Audit Lapkeu LKPP/LKPD</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Menguji kesesuaian SAP</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Kepatuhan peraturan UU</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Efektivitas SPI</text>
  <text x="125" y="186" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Output: Opini WTP / WDP</text>

  <!-- Performance Audit -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Pemeriksaan Kinerja</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Audit Value for Money (3E)</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Aspek Ekonomi (Hemat)</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Aspek Efisiensi (Daya guna)</text>
  <text x="340" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Aspek Efektivitas (Hasil)</text>
  <text x="340" y="186" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Output: Rekomendasi 3E</text>

  <!-- DTT Audit -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Pemeriksaan DTT</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Dengan Tujuan Tertentu</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Audit Investigatif Tipikor</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Penghitungan Kerugian</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">  Keuangan Negara (PKKN)</text>
  <text x="555" y="186" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Output: Simpulan / Bukti Ahli</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Audit Sektor Publik: Pengawasan Intern (APIP) & Pemeriksaan Eksternal (BPK)',
  ref: 'UU 15/2004 | UU 15/2006 | Standar Pemeriksaan Keuangan Negara (SPKN BPK)',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 11: Menguasai arsitektur audit sektor publik di Indonesia, peran Aparat Pengawasan Intern Pemerintah (APIP: BPKP dan Inspektorat Daerah/Kementerian) vs Badan Pemeriksa Keuangan (BPK RI) sebagai pemeriksa eksternal independen, 3 jenis pemeriksaan menurut UU No. 15/2004 (Pemeriksaan Keuangan, Kinerja, dan DTT), Standar Pemeriksaan Keuangan Negara (SPKN), serta 4 kriteria penentuan opini BPK atas LKPP/LKPD.',
  objectives: [
    'Membedakan peran dan wewenang Pengawas Internal (APIP: BPKP, Itjen, Inspektorat Daerah) vs Pemeriksa Eksternal (BPK RI).',
    'Menjelaskan 3 jenis pemeriksaan keuangan negara menurut UU No. 15/2004: Pemeriksaan Keuangan, Pemeriksaan Kinerja, dan Pemeriksaan Dengan Tujuan Tertentu (PDTT).',
    'Menerapkan Standar Pemeriksaan Keuangan Negara (SPKN) yang diterbitkan melalui Peraturan BPK RI No. 1/2017.',
    'Menganalisis 4 kriteria penetapan Opini BPK atas laporan keuangan pemerintah (Kesesuaian SAP, Kecukupan Pengungkapan, Kepatuhan Peraturan UU, dan Efektivitas SPI).',
    'Menjelaskan kewajiban entitas terperiksa dalam menindaklanjuti Laporan Hasil Pemeriksaan (LHP) dalam tenggat waktu 60 hari.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Kategori Pemeriksaan BPK RI menurut UU 15/2004 dan SPKN',
      svg: SVG_AUDIT_GOV_TYPES,
      caption: 'Gambar 11.1: Ruang lingkup pemeriksaan keuangan, kinerja operasional, dan investigatif negara.'
    },

    { kind: 'h2', text: '1. Komparasi APIP (Internal) vs BPK (Eksternal)' },
    {
      kind: 'table',
      headers: ['Dimensi Audit', 'Aparat Pengawasan Intern Pemerintah (APIP)', 'Badan Pemeriksa Keuangan (BPK RI)'],
      rows: [
        ['Kedudukan Lembaga', 'Bagian internal eksekutif pemerintah (BPKP bertanggung jawab kepada Presiden; Inspektorat kepada Menteri/Gubernur/Bupati).', 'Lembaga negara independen setingkat Presiden/DPR yang diatur langsung dalam UUD 1945.'],
        ['Fokus Penugasan', 'Memberikan asurans internal (*assurance*), pendampingan (*consulting*), reviu laporan keuangan sebelum diserahkan ke BPK, dan pengawasan korupsi dini.', 'Melakukan audit pasca-fakta (*post-audit*) independen atas seluruh laporan pertanggungjawaban keuangan negara.'],
        ['Penerima Laporan', 'Kepala Daerah, Menteri, atau Presiden.', 'DPR, DPD, DPRD, dan Pemerintah (kemudian terbuka untuk akses publik).']
      ],
      caption: 'Tabel 11.1: Pemisahan fungsi audit internal dan eksternal pemerintahan.'
    },

    { kind: 'h2', text: '2. Empat Kriteria Penetapan Opini BPK atas LKPD / LKPP' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dasar Pertimbangan Pemberian Opini BPK (Pasal 16 UU 15/2004)',
      text: '1. **Kesesuaian dengan Standar Akuntansi Pemerintahan (SAP)**: Apakah pos-pos LK disajikan sesuai PP 71/2010.\n2. **Kecukupan Pengungkapan (Adequate Disclosures)**: Apakah CaLK memberikan rincian penjelasan yang transparan dan lengkap.\n3. **Kepatuhan terhadap Peraturan Perundang-undangan**: Apakah tidak terdapat pelanggaran hukum pengadaan barang/jasa atau penyalahgunaan anggaran.\n4. **Efektivitas Sistem Pengendalian Intern (SPI)**: Apakah kontrol internal pemerintah andal dalam mengamankan aset dan data transaksi.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 11' },
    {
      kind: 'ul',
      items: [
        '**Tindak Lanjut Rekomendasi (TLR)**: Pejabat pemerintah wajib menindaklanjuti rekomendasi dalam LHP BPK selambat-lambatnya **60 hari** setelah laporan diterima.',
        '**SPKN (Peraturan BPK No. 1/2017)**: Standar etika, standar pelaksanaan, dan standar pelaporan audit bagi seluruh pemeriksa keuangan negara.',
        '**Reviu APIP**: LKPD wajib di-reviu terlebih dahulu oleh Inspektorat Daerah sebelum diserahkan secara resmi oleh Kepala Daerah kepada BPK paling lambat 3 bulan setelah tahun anggaran berakhir.'
      ]
    }
  ]
};