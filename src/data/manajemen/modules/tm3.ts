import type { Reading } from '../../../types';

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Managing in a Global Environment: Strategi Internasional & Kecerdasan Budaya',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 3',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 3: Menguasai dinamika manajemen global di era dunia tanpa batas (*Borderless World*), karakteristik Perusahaan Multinasional (MNC: Etnosentris, Polisentris, Geosentris), 4 strategi masuk pasar global (*Exporting, Global Outsourcing, Licensing/Franchising, Direct Investment / Joint Venture & Greenfield*), Dimensi Nilai Budaya Geert Hofstede, serta Kecerdasan Budaya (*Cultural Intelligence* / CQ: Kognitif, Emosional, Fisik).',
  objectives: [
    'Menjelaskan dampak globalisasi dan pergeseran lanskap ekonomi internasional (BRICS, pasar negara berkembang / Emerging Markets).',
    'Membedakan 3 orientasi filosofi manajemen MNC: Etnosentris (berpusat di negara asal), Polisentris (berpusat di negara tuan rumah), dan Geosentris (berorientasi global tanpa batas).',
    'Membandingkan strategi masuk pasar internasional dari tingkat biaya/risiko terendah hingga tertinggi.',
    'Menerapkan 5 Dimensi Budaya Geert Hofstede: Jarak Kekuasaan (*Power Distance*), Penghindaran Ketidakpastian (*Uncertainty Avoidance*), Individualisme vs Kolektivisme, Maskulinitas vs Feminitas, dan Orientasi Jangka Panjang.',
    'Memahami konsep High-Context Culture (komunikasi tersirat berbasis relasi) vs Low-Context Culture (komunikasi langsung berbasis kata-kata tertulis).',
    'Mengembangkan Kecerdasan Budaya (Cultural Intelligence - CQ).'
  ],
  blocks: [
    { kind: 'h2', text: '1. Strategi Masuk Pasar Global (Market Entry Strategies)' },
    {
      kind: 'table',
      headers: ['Strategi Masuk Global', 'Tingkat Keterlibatan & Biaya', 'Tingkat Risiko & Pengendalian', 'Karakteristik Operasional'],
      rows: [
        ['1. Ekspor (Exporting)', 'Sangat Rendah', 'Sangat Rendah', 'Memproduksi barang di negara asal dan mengirimkannya ke luar negeri untuk dijual.'],
        ['2. Alih Daya Global (Global Outsourcing / Offshoring)', 'Rendah', 'Rendah - Sedang', 'Membeli bahan baku atau memanfaatkan tenaga kerja di negara lain dengan biaya paling murah (misal pabrik perakitan di Asia).'],
        ['3. Lisensi & Waralaba (Licensing & Franchising)', 'Sedang', 'Sedang', 'Memberikan hak paten, merek dagang, atau sistem bisnis lengkap kepada mitra lokal di luar negeri dengan imbalan royalti.'],
        ['4. Usaha Patungan (Joint Venture)', 'Tinggi', 'Sedang - Tinggi', 'Membentuk kemitraan perusahaan baru bersama entitas lokal untuk berbagi modal, risiko, dan keahlian pasar lokal.'],
        ['5. Investasi Langsung / Pabrik Baru (Greenfield Venture)', '**Paling Tinggi**', '**Paling Tinggi**', 'Membangun anak perusahaan mandiri dari nol di negara asing; memiliki kendali penuh 100% atas seluruh operasional.']
      ],
      caption: 'Tabel 3.1: Spektrum strategi penetrasi pasar internasional.'
    },

    { kind: 'h2', text: '2. Dimensi Nilai Budaya Geert Hofstede' },
    {
      kind: 'table',
      headers: ['Dimensi Budaya Hofstede', 'Definisi Konseptual', 'Implikasi Praktik Manajemen'],
      rows: [
        ['**Power Distance (Jarak Kekuasaan)**', 'Tingkat penerimaan masyarakat terhadap distribusi kekuasaan yang tidak setara.', 'Tinggi (Indonesia/Malaysia): Bawahan patuh pada atasan hierarkis; Rendah (Denmark/AS): Hubungan egaliter dan konsultatif.'],
        ['**Uncertainty Avoidance (Penghindaran Ketidakpastian)**', 'Tingkat ketidaknyamanan masyarakat menghadapi situasi ambigu dan tidak pasti.', 'Tinggi (Jepang/Jerman): Menyukai aturan ketat, kepastian, dan stabilitas; Rendah (Singapura/AS): Terbuka pada risiko dan fleksibilitas.'],
        ['**Individualism vs Collectivism**', 'Ikatan erat antarindividu dalam kelompok masyarakat.', 'Individualis (AS): Fokus pada pencapaian prestasi pribadi; Kolektivis (Indonesia/Tiongkok): Mengutamakan loyalitas kelompok dan harmoni bersama.'],
        ['**Masculinity vs Femininity**', 'Nilai yang lebih dihargai dalam masyarakat.', 'Maskulin (Jepang/AS): Menekankan prestasi, persaingan, dan uang; Feminin (Swedia/Norwegia): Menekankan kualitas hidup, relasi hangat, dan kepedulian.']
      ],
      caption: 'Tabel 3.2: Empat dimensi budaya fundamental Hofstede.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 3' },
    {
      kind: 'ul',
      items: [
        '**High-Context Culture**: Makna komunikasi lebih banyak tersirat dari nada suara, bahasa tubuh, dan status hubungan relasi (misal di Jepang dan Indonesia).',
        '**Low-Context Culture**: Makna komunikasi murni tertulis dan terucap secara langsung lugas / *to the point* (misal di Jerman dan Amerika Serikat).',
        '**CQ (Cultural Intelligence)**: Kemampuan seseorang untuk mengamati, menafsirkan, dan merespons secara adaptif isyarat budaya yang berbeda.'
      ]
    }
  ]
};