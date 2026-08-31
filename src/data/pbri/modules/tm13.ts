import type { Reading } from '../../../types';

const SVG_AUDIT_TEST_TYPES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">LIMA JENIS PENGUJIAN AUDIT (TYPES OF AUDIT TESTS - SA 330)</text>
  
  <rect x="25" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">1. Risk Assess.</text>
  <text x="82" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Prosedur</text>
  <text x="82" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Penilaian Risiko</text>
  <line x1="35" y1="120" x2="130" y2="120" stroke="#334155"/>
  <text x="82" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pahami bisnis</text>
  <text x="82" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pahami IC</text>
  <text x="82" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Brainstorming</text>
  <text x="82" y="188" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">(Perencanaan)</text>

  <rect x="155" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="212" y="78" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">2. TOC</text>
  <text x="212" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Test of</text>
  <text x="212" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Controls</text>
  <line x1="165" y1="120" x2="260" y2="120" stroke="#334155"/>
  <text x="212" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Uji efektivitas</text>
  <text x="212" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">  operasi kontrol</text>
  <text x="212" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Reperformance</text>
  <text x="212" y="188" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">(Kurangi Substantif)</text>

  <rect x="285" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="342" y="78" fill="#f59e0b" font-size="9.5" font-weight="700" text-anchor="middle">3. STOT</text>
  <text x="342" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Substantive Test</text>
  <text x="342" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">of Transactions</text>
  <line x1="295" y1="120" x2="390" y2="120" stroke="#334155"/>
  <text x="342" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Uji salah saji</text>
  <text x="342" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">  rupiah transaksi</text>
  <text x="342" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Vouching faktur</text>
  <text x="342" y="188" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">(Moneter Transaksi)</text>

  <rect x="415" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a855f7" font-size="9.5" font-weight="700" text-anchor="middle">4. SAP</text>
  <text x="472" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Substantive</text>
  <text x="472" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Analytical Proc.</text>
  <line x1="425" y1="120" x2="520" y2="120" stroke="#334155"/>
  <text x="472" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Perbandingan</text>
  <text x="472" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">  angka &amp; rasio</text>
  <text x="472" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Prediksi bunga</text>
  <text x="472" y="188" fill="#c084fc" font-size="8.5" font-weight="700" text-anchor="middle">(Efisien &amp; Murah)</text>

  <rect x="545" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="602" y="78" fill="#f43f5e" font-size="9.5" font-weight="700" text-anchor="middle">5. TOD</text>
  <text x="602" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Test of Details</text>
  <text x="602" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">of Balances</text>
  <line x1="555" y1="120" x2="650" y2="120" stroke="#334155"/>
  <text x="602" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Konfirmasi piutang</text>
  <text x="602" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Stok opname fisik</text>
  <text x="602" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Uji pisah batas</text>
  <text x="602" y="188" fill="#fca5a5" font-size="8.5" font-weight="700" text-anchor="middle">(Mahal tapi Kuat)</text>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Pengujian Pengendalian (TOC) & Pengujian Substantif (STOT/TOD)',
  ref: 'Arens Ch. 13 | SA 330, SA 265',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 13: Menguasai bauran bukti (Evidence Mix) dari 5 jenis pengujian audit, perancangan Pengujian Pengendalian (Test of Controls), Pengujian Substantif atas Transaksi (STOT), Pengujian Rincian Saldo (Test of Details of Balances - TOD), serta komunikasi defisiensi signifikan pengendalian internal (SA 265).',
  objectives: [
    'Membedakan 5 jenis pengujian audit: Prosedur Penilaian Risiko, TOC, STOT, SAP, dan TOD.',
    'Menjelaskan konsep Bauran Bukti (Evidence Mix) dan pengorbanan biaya (Cost-Benefit Tradeoff) antarpengujian.',
    'Merancang Pengujian Pengendalian (Test of Controls) untuk menguji efektivitas otorisasi dan pemisahan tugas.',
    'Memahami bagaimana hasil TOC mempengaruhi luas pengujian substantif (TOD).',
    'Mengklasifikasikan defisiensi pengendalian internal: Defisiensi Kontrol vs Defisiensi Signifikan vs Kelemahan Material (Material Weakness) sesuai SA 265.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta 5 Jenis Pengujian Audit dalam Merespons Risiko Teridentifikasi',
      svg: SVG_AUDIT_TEST_TYPES,
      caption: 'Gambar 13.1: Hierarki dan kombinasi bauran pengujian menurut Standar Audit 330.'
    },

    { kind: 'h2', text: '1. Lima Jenis Pengujian Audit (SA 330)' },
    {
      kind: 'table',
      headers: ['Jenis Pengujian', 'Tujuan Utama Pengujian', 'Tingkat Biaya Relatif'],
      rows: [
        ['1. Prosedur Penilaian Risiko (Risk Assessment)', 'Memperoleh pemahaman atas entitas, lingkungan bisnis, dan kontrol internal untuk menilai RMM.', 'Rendah'],
        ['2. Pengujian Pengendalian (Test of Controls - TOC)', 'Menguji efektivitas operasi pengendalian internal dalam mencegah/mendeteksi salah saji.', 'Sedang'],
        ['3. Pengujian Substantif Transaksi (STOT)', 'Menentukan apakah transaksi individual telah dicatat secara akurat dan lengkap dalam jurnal moneter.', 'Sedang'],
        ['4. Prosedur Analitis Substantif (SAP)', 'Menilai kewajaran saldo akun melalui perbandingan rasio dan ekspektasi pemodelan.', 'Sangat Rendah'],
        ['5. Pengujian Rincian Saldo (Test of Details - TOD)', 'Menguji langsung saldo akhir buku besar neraca (misal konfirmasi bank/piutang dan stok opname fisik).', 'Tinggi (Paling Mahal)']
      ],
      caption: 'Tabel 13.1: Karakteristik dan perbandingan biaya 5 jenis pengujian audit.'
    },

    { kind: 'h2', text: '2. Komunikasi Defisiensi Pengendalian Internal (SA 265)' },
    {
      kind: 'table',
      headers: ['Tingkat Keparahan Defisiensi', 'Definisi Menurut SA 265', 'Kewajiban Pelaporan Auditor'],
      rows: [
        ['1. Defisiensi Kontrol (Control Deficiency)', 'Kontrol tidak dirancang atau tidak dioperasikan dengan baik untuk mencegah salah saji.', 'Cukup disampaikan dalam *Management Letter* ke manajemen operasional.'],
        ['2. Defisiensi Signifikan (Significant Deficiency)', 'Defisiensi yang cukup penting untuk mendapatkan perhatian pihak yang bertanggung jawab atas tata kelola (TCWG).', '**WAJIB TERTULIS** disampaikan kepada **Komite Audit / Dewan Komisaris (TCWG)**.'],
        ['3. Kelemahan Material (Material Weakness)', 'Defisiensi yang mengakibatkan kemungkinan wajar bahwa salah saji material laporan keuangan tidak akan dicegah atau terdeteksi tepat waktu.', '**WAJIB TERTULIS** kepada TCWG dan Manajemen Puncak; meningkatkan risiko kontrol ke tingkat maksimum (CR = 100%).']
      ],
      caption: 'Tabel 13.2: Klasifikasi defisiensi pengendalian internal menurut SA 265.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 13' },
    {
      kind: 'ul',
      items: [
        '**TOC Efektif**: Memungkinkan auditor menurunkan Control Risk $\\rightarrow$ Mengurangi sampel Test of Details of Balances (menghemat biaya audit).',
        '**TOC Gagal / Kontrol Lemah**: Auditor menetapkan CR = 100% $\\rightarrow$ Tidak melakukan TOC lebih lanjut $\\rightarrow$ Melakukan pengujian substantif (TOD) ekstensif.',
        '**Management Letter**: Surat resmi auditor kepada manajemen yang berisi rekomendasi perbaikan atas kelemahan pengendalian internal yang ditemukan.'
      ]
    }
  ]
};