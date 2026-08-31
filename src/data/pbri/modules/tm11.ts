import type { Reading } from '../../../types';

const SVG_FRAUD_TRIANGLE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SEGITIGA KECURANGAN (FRAUD TRIANGLE - SA 240)</text>
  
  <!-- Incentives / Pressures -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="125" y="80" fill="#f43f5e" font-size="11.5" font-weight="700" text-anchor="middle">1. Tekanan / Insentif</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">(Incentives / Pressures)</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Target laba agresif</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Ancaman kebangkrutan</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Bonus berbasis kinerja</text>
  <text x="125" y="185" fill="#94a3b8" font-size="9" text-anchor="middle">• Tekanan utang pribadi</text>

  <!-- Opportunity -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">2. Peluang (Opportunity)</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">(Celah Pengendalian)</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Kontrol internal lemah</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Kurang segregasi tugas</text>
  <text x="340" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Management Override</text>
  <text x="340" y="185" fill="#94a3b8" font-size="9" text-anchor="middle">• Transaksi kompleks/afiliasi</text>

  <!-- Rationalization -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="555" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">3. Sikap / Rasionalisasi</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">(Attitudes / Rationalization)</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• "Hanya pinjam sebentar"</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• "Perusahaan berutang padaku"</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• "Semua orang melakukannya"</text>
  <text x="555" y="185" fill="#94a3b8" font-size="9" text-anchor="middle">• Kurangnya budaya etis</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Pertimbangan Risiko Kecurangan (Fraud Risk & Fraud Triangle)',
  ref: 'Arens Ch. 11 | SA 240',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 11: Menguasai tanggung jawab auditor terkait kecurangan (SA 240), dua jenis kecurangan laporan keuangan vs penyalahgunaan aset, analisis 3 kondisi pendorong Segitiga Kecurangan (Fraud Triangle), prosedur pengabaian pengendalian oleh manajemen (*Management Override of Controls*), serta respons audit substantif.',
  objectives: [
    'Membedakan Kecurangan (Fraud - unsur kesengajaan) vs Kekeliruan (Error - ketidaksengajaan).',
    'Membedakan Pelaporan Keuangan yang Mengandung Kecurangan (Fraudulent Financial Reporting) vs Penyalahgunaan Aset (Misappropriation of Assets).',
    'Menganalisis 3 elemen Segitiga Kecurangan: Insentif/Tekanan, Peluang, dan Sikap/Rasionalisasi.',
    'Menerapkan sesi brainstorming tim audit mengenai kerentanan kecurangan.',
    'Merancang respons audit atas risiko pengabaian pengendalian oleh manajemen (Management Override) melalui pengujian entri jurnal (*Journal Entries Testing*).',
    'Memahami prosedur pelaporan kecurangan kepada manajemen, TCWG, dan pihak berwenang.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Kondisi Terjadinya Kecurangan (The Fraud Triangle)',
      svg: SVG_FRAUD_TRIANGLE,
      caption: 'Gambar 11.1: Kerangka analisis faktor risiko kecurangan menurut Standar Audit 240.'
    },

    { kind: 'h2', text: '1. Dua Kategori Utama Kecurangan (SA 240)' },
    {
      kind: 'table',
      headers: ['Kategori Kecurangan', 'Pelaku Utama & Motif', 'Metode yang Sering Digunakan'],
      rows: [
        ['1. Pelaporan Keuangan Curang (Fraudulent Financial Reporting)', 'Manajemen eksekutif untuk menipu investor/bank atau mencapai target laba bonus.', '• Mengakui pendapatan fiktif atau mengakui pendapatan sebelum waktunya (premature revenue).\n• Menyembunyikan liabilitas atau beban.\n• Memanipulasi estimasi akuntansi (misal: cadangan piutang/persediaan).'],
        ['2. Penyalahgunaan Aset (Misappropriation of Assets)', 'Karyawan operasional atau manajer untuk kepentingan pribadi (pencurian).', '• Mengambil uang kas masuk sebelum dicatat (skimming).\n• Mengajukan faktur vendor fiktif untuk pembayaran kas.\n• Mencuri persediaan barang dagang atau aset fisik perusahaan.']
      ],
      caption: 'Tabel 11.1: Perbandingan dua jenis kecurangan menurut SA 240.'
    },

    { kind: 'h2', text: '2. Respons Wajib Auditor atas Risiko Fraud' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Tiga Prosedur Wajib Menguji Management Override of Controls (SA 240)',
      text: 'Manajemen selalu berada pada posisi unik untuk melakukan fraud karena kemampuannya mengabaikan kontrol yang sah. Oleh karena itu, auditor WAJIB melakukan 3 prosedur berikut pada setiap perikatan audit:\n1. **Pengujian Jurnal Penyesuaian (Journal Entry Testing)**: Menguji jurnal tidak biasa di akhir tahun atau periode tutup buku.\n2. **Penelaahan Estimasi Akuntansi (Review Accounting Estimates)**: Mengevaluasi apakah ada bias manajemen dalam estimasi retrospektif tahun lalu vs realisasi.\n3. **Mengevaluasi Dasar Rasional Bisnis untuk Transaksi Signifikan yang Tidak Biasa**: Menyelidiki transaksi besar dengan pihak berelasi yang tidak memiliki substansi ekonomi yang jelas.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 11' },
    {
      kind: 'ul',
      items: [
        '**Praduga Risiko Pendapatan**: SA 240 menetapkan praduga bahwa terdapat **risiko kecurangan dalam pengakuan pendapatan** pada setiap audit.',
        '**Brainstorming Tim**: Tim audit wajib berdiskusi sebelum audit dimulai mengenai bagaimana dan di mana laporan keuangan rentan terhadap fraud.',
        '**Journal Entry Testing**: Wajib memeriksa jurnal non-rutin yang dibuat manual menjelang akhir tahun.'
      ]
    }
  ]
};