import type { Reading } from '../../../types';

const SVG_OSP_DIFFERENCES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PERBANDINGAN SEKTOR PUBLIK VS SEKTOR SWASTA KOMERSIAL</text>
  
  <rect x="30" y="55" width="290" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="175" y="80" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">Organisasi Sektor Publik (OSP)</text>
  <text x="175" y="102" fill="#cbd5e1" font-size="10" text-anchor="middle">• Tujuan: Kesejahteraan &amp; Pelayanan Publik</text>
  <text x="175" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">• Pendanaan: Pajak, Retribusi, Hibah, APBN</text>
  <text x="175" y="142" fill="#cbd5e1" font-size="10" text-anchor="middle">• Akuntabilitas: Vertikal &amp; Horisontal (Publik)</text>
  <text x="175" y="162" fill="#cbd5e1" font-size="10" text-anchor="middle">• Kepemilikan: Kolektif seluruh warga negara</text>
  <text x="175" y="182" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Non-Profit Oriented &amp; Political Environment</text>

  <rect x="360" y="55" width="290" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="505" y="80" fill="#f59e0b" font-size="12" font-weight="700" text-anchor="middle">Sektor Swasta (Private Sector)</text>
  <text x="505" y="102" fill="#cbd5e1" font-size="10" text-anchor="middle">• Tujuan: Maksimisasi Laba &amp; Nilai Pemegang Saham</text>
  <text x="505" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">• Pendanaan: Modal Saham, Utang Bank, Obligasi</text>
  <text x="505" y="142" fill="#cbd5e1" font-size="10" text-anchor="middle">• Akuntabilitas: Pemegang Saham &amp; Kreditor</text>
  <text x="505" y="162" fill="#cbd5e1" font-size="10" text-anchor="middle">• Kepemilikan: Pemilik modal/saham privat</text>
  <text x="505" y="182" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">Profit Oriented &amp; Market Competition</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Karakteristik Organisasi Sektor Publik & Peran Akuntansi',
  ref: 'Mardiasmo Bab 1 | Deddi Nordiawan Bab 1',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 1: Menguasai definisi dan ruang lingkup Organisasi Sektor Publik (OSP), perbedaan fundamental OSP vs sektor swasta komersial, peran akuntansi sektor publik dalam akuntabilitas publik dan transparansi tata kelola (Good Public Governance), serta kontribusi pada pencapaian SDG 16 (Peace, Justice and Strong Institutions).',
  objectives: [
    'Mendefinisikan Organisasi Sektor Publik dan membedakannya dari sektor bisnis swasta.',
    'Menganalisis perbedaan karakteristik tujuan organisasi, sumber pendanaan, pola pertanggungjawaban, dan struktur birokrasi.',
    'Menjelaskan peran informasi akuntansi sektor publik bagi manajemen (internal) dan masyarakat (eksternal).',
    'Membedakan Akuntabilitas Vertikal (kepada atasan hierarki) vs Akuntabilitas Horisontal (kepada masyarakat luas).',
    'Memahami keterkaitan akuntansi sektor publik dengan penguatan tata kelola publik (Good Governance) dan SDG 16.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Perbandingan Karakteristik Utama Sektor Publik vs Sektor Swasta',
      svg: SVG_OSP_DIFFERENCES,
      caption: 'Gambar 1.1: Perbedaan orientasi tujuan, sumber pendanaan, dan akuntabilitas sektor publik vs swasta.'
    },

    { kind: 'h2', text: '1. Perbandingan Esensial Sektor Publik vs Sektor Swasta' },
    {
      kind: 'table',
      headers: ['Dimensi Pembeda', 'Organisasi Sektor Publik (OSP)', 'Organisasi Sektor Swasta (Private)'],
      rows: [
        ['Tujuan Utama (Goal)', 'Pelayanan publik (*public service*), penyediaan barang publik, dan kesejahteraan masyarakat (Non-profit).', 'Memaksimalkan profitabilitas, laba bersih, dan kekayaan pemilik modal saham (*Profit oriented*).'],
        ['Sumber Pendanaan', 'Pajak, retribusi daerah, hibah, utang luar negeri/SBN, dan pendapatan negara bukan pajak (PNBP).', 'Modal sendiri (ekuitas pemilik), laba ditahan, pinjaman bank, dan penerbitan obligasi.'],
        ['Pola Akuntabilitas', 'Bertanggung jawab kepada publik secara langsung dan lembaga perwakilan rakyat (DPR/DPRD).', 'Bertanggung jawab kepada pemegang saham (*stockholders*) dan kreditor lewat RUPS.'],
        ['Struktur Organisasi', 'Birokrasi hierarkis, kaku, dan dipengaruhi oleh dinamika politik kebijakan pemerintah.', 'Fleksibel, piramida datar, berorientasi pasar (*market-driven*), dan cepat beradaptasi.'],
        ['Karakteristik Anggaran', 'Anggaran bersifat **TERBUKA UNTUK PUBLIK** dan berfungsi sebagai **DOKUMEN HUKUM/POLITIK** mengikat.', 'Anggaran bersifat **RAHASIA PERUSAHAAN (INTERNAL)** dan fleksibel direvisi manajerial.']
      ],
      caption: 'Tabel 1.1: Matriks perbandingan sektor publik vs swasta.'
    },

    { kind: 'h2', text: '2. Dimensi Akuntabilitas Sektor Publik' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dua Jalur Akuntabilitas Publik',
      text: '1. **Akuntabilitas Vertikal (Vertical Accountability)**: Pertanggungjawaban atas pengelolaan dana kepada otoritas yang lebih tinggi dalam hierarki birokrasi (misal: Kepala Dinas kepada Bupati/Walikota, Menteri kepada Presiden).\n2. **Akuntabilitas Horisontal (Horizontal Accountability)**: Pertanggungjawaban kepada lembaga perwakilan rakyat (DPRD/DPR), lembaga pemeriksa independen (BPK), dan kepada masyarakat luas (*public at large*).'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 1' },
    {
      kind: 'ul',
      items: [
        '**Tujuan Non-Laba**: Keberhasilan OSP diukur dari kepuasan layanan publik dan *Value for Money*, bukan besarnya saldo kas.',
        '**Anggaran Publik**: Merupakan instrumen akuntabilitas hukum tertinggi di sektor publik.',
        '**Good Governance**: Memerlukan 4 pilar: Transparansi, Akuntabilitas, Partisipasi Masyarakat, dan Penegakan Hukum.'
      ]
    }
  ]
};