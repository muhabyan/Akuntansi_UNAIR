import type { Reading } from '../../../types';
import { CASE_STRATEGY_MAP } from '../manstratPracticeCases';

const SVG_STRATEGY_MAP = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="28" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRATEGY MAP: EMPAT PERSPEKTIF KAUSALITAS (KAPLAN &amp; NORTON)</text>
  
  <!-- Financial Perspective -->
  <rect x="30" y="40" width="620" height="38" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="50" y="63" fill="#38bdf8" font-size="10.5" font-weight="700">1. Financial Perspective:</text>
  <text x="230" y="63" fill="#cbd5e1" font-size="9">Strategi Pertumbuhan Pendapatan (Pasar Baru) + Strategi Produktivitas (Efisiensi Biaya) &rarr; ROE / Nilai Pemegang Saham</text>

  <!-- Customer Perspective -->
  <rect x="30" y="83" width="620" height="38" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="50" y="106" fill="#34d399" font-size="10.5" font-weight="700">2. Customer Perspective:</text>
  <text x="230" y="106" fill="#cbd5e1" font-size="9">Customer Value Proposition: Harga Bersaing, Kualitas Superior, Hubungan Personal, atau Kepemimpinan Produk</text>

  <!-- Internal Process Perspective -->
  <rect x="30" y="126" width="620" height="38" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="50" y="149" fill="#f59e0b" font-size="10.5" font-weight="700">3. Internal Processes:</text>
  <text x="230" y="149" fill="#cbd5e1" font-size="9">Manajemen Operasi (Rantai Pasok), Manajemen Pelanggan (Retensi), Inovasi Produk, dan Regulasi/Sosial (ESG)</text>

  <!-- Learning & Growth Perspective -->
  <rect x="30" y="169" width="620" height="38" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="50" y="192" fill="#a855f7" font-size="10.5" font-weight="700">4. Learning &amp; Growth:</text>
  <text x="230" y="192" fill="#cbd5e1" font-size="9">Modal Manusia (Keahlian/Pelatihan) + Modal Informasi (IT/Sistem Cloud) + Modal Organisasi (Budaya/Leadership)</text>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Strategy Maps & Balanced Scorecard: Mengubah Aset Tak Berwujud Menjadi Hasil Nyata',
  ref: 'Robert S. Kaplan & David P. Norton, Strategy Maps (Harvard Business School Press)',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 10: Menguasai arsitektur Peta Strategi (*Strategy Maps*) dan Kartu Skor Berimbang (*Balanced Scorecard* - BSC) oleh Robert S. Kaplan dan David P. Norton, konversi aset tidak berwujud (*Intangible Assets*) menjadi hasil finansial berwujud (*Tangible Financial Outcomes*), 4 Perspektif hierarki sebab-akibat (Keuangan, Pelanggan, Proses Bisnis Internal, Pembelajaran & Pertumbuhan), Tiga Pilar Nilai Pelanggan (*Customer Value Proposition: Operational Excellence, Customer Intimacy, Product Leadership*), serta Tiga Kategori Modal Pembelajaran (*Human Capital, Information Capital, Organization Capital*).',
  objectives: [
    'Menjelaskan prinsip fundamental Strategy Map: Strategi menyeimbangkan kekuatan yang saling bertentangan antara pertumbuhan jangka panjang vs efisiensi jangka pendek.',
    'Menganalisis rantai sebab-akibat (Cause-and-Effect Chain) dari dasar aset modal tak berwujud menuju puncak kinerja finansial.',
    'Membedakan Tiga Proposisi Nilai Pelanggan (Customer Value Proposition): Keunggulan Operasional (*Lowest Total Cost*), Keakraban Pelanggan (*Customer Intimacy*), dan Kepemimpinan Produk (*Best Product*).',
    'Mengidentifikasi 4 klaster Proses Bisnis Internal: Manajemen Operasi, Manajemen Pelanggan, Manajemen Inovasi, dan Proses Regulasi & Sosial.',
    'Menganalisis Tiga Komponen Kesiapan Modal Pembelajaran & Pertumbuhan: Modal Manusia, Modal Informasi, dan Modal Organisasi.',
    'Menyusun Balanced Scorecard yang memadukan Sasaran Strategis, Indikator Kinerja Utama (KPI/Lagging Indicators), Pendorong Kinerja (Leading Indicators), Target, dan Inisiatif Aksi.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Arsitektur Kausalitas Empat Perspektif Strategy Map (Kaplan & Norton)',
      svg: SVG_STRATEGY_MAP,
      caption: 'Gambar 10.1: Alur transformasi logis dari kapabilitas internal menuju kepuasan pelanggan dan penciptaan nilai pemegang saham.'
    },

    { kind: 'h2', text: '1. Rantai Sebab-Akibat Empat Perspektif Balanced Scorecard' },
    {
      kind: 'table',
      headers: ['Perspektif BSC', 'Pertanyaan Panduan Kunci', 'Fokus Utama Pengukuran'],
      rows: [
        ['**1. Perspektif Keuangan (Financial)**', '"Bagaimana kita harus tampil di mata para pemegang saham untuk berhasil secara finansial?"', 'Pertumbuhan pendapatan penjualan, Return on Equity (ROE), penghematan biaya operasional, dan efisiensi modal kerja.'],
        ['**2. Perspektif Pelanggan (Customer)**', '"Bagaimana kita harus tampil di mata para pelanggan untuk mencapai visi keuangan kita?"', 'Pangsa pasar, retensi pelanggan setia, akuisisi pelanggan baru, kepuasan pelanggan, dan profitabilitas per segmen.'],
        ['**3. Perspektif Proses Internal (Internal Process)**', '"Proses bisnis internal apa yang harus kita kuasai dengan sempurna untuk memuaskan pelanggan dan pemegang saham?"', 'Waktu siklus manufaktur, tingkat cacat mutu, kecepatan peluncuran produk baru ke pasar (*Time-to-Market*), dan kepatuhan K3/ESG.'],
        ['**4. Perspektif Pembelajaran & Pertumbuhan (Learning & Growth)**', '"Bagaimana kita mempertahankan kemampuan kita untuk berubah, berinovasi, dan berkembang?"', 'Ketersediaan keterampilan digital karyawan (*Competency Readiness*), sistem IT analitik data, dan budaya kerja tim yang selaras.']
      ],
      caption: 'Tabel 10.1: Empat pilar pengukuran kinerja komprehensif BSC.'
    },

    CASE_STRATEGY_MAP,

    { kind: 'h2', text: '2. Tiga Klaster Proposisi Nilai Pelanggan (Customer Value Proposition)' },
    {
      kind: 'table',
      headers: ['Proposisi Nilai Pelanggan', 'Fokus Keunggulan Bersaing', 'Contoh Perusahaan Penerap'],
      rows: [
        ['**1. Keunggulan Operasional (Operational Excellence)**', 'Menawarkan kombinasi harga terendah, kualitas konsisten terpercaya, dan kemudahan transaksi cepat tanpa repot.', 'Indomaret, Lion Air, McDonald\'s, IKEA.'],
        ['**2. Kepemimpinan Produk (Product Leadership)**', 'Menawarkan produk paling inovatif dengan performa teknologi terdepan dan desain estetika terkini.', 'Apple, Tesla, Sony, Nike.'],
        ['**3. Keakraban Pelanggan (Customer Intimacy)**', 'Menyesuaikan solusi produk dan layanan secara personal untuk memenuhi kebutuhan spesifik pelanggan jangka panjang.', 'Layanan Prioritas BCA, McKinsey & Company, IBM Consulting.']
      ],
      caption: 'Tabel 10.2: Tiga jalur diferensiasi proposisi nilai pelanggan.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 10' },
    {
      kind: 'ul',
      items: [
        '**Lagging vs Leading Indicators**: Lagging indicators mengukur hasil akhir historis (misal laba bersih atau churn rate); Leading indicators mengukur pendorong proses masa depan (misal jam pelatihan karyawan atau jumlah panggilan prospek).',
        '**Strategic Readiness**: Tingkat kesiapan aset tak berwujud (karyawan, IT, budaya) untuk mendukung eksekusi proses bisnis internal yang kritis.',
        '**Cascading Scorecard**: Menurunkan Balanced Scorecard tingkat korporasi ke tingkat divisi unit bisnis, departemen, hingga KPI individu karyawan.'
      ]
    }
  ]
};