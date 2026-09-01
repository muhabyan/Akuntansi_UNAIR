import type { Reading } from '../../../types';
import { CASE_SAMSUNG_TECH_PORTFOLIO } from '../manstratPracticeCases';

const SVG_COOPETITION_PORTFOLIO = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL CO-OPETITION &amp; INTEGRASI VERTIKAL: SAMSUNG VS APPLE</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">SAMSUNG ELECTRONICS (IDM)</text>
  <text x="177" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">Integrasi Vertikal Manufaktur:</text>
  <text x="177" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Memiliki pabrik fabrikasi cip (Fabs) sendiri</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Menguasai display OLED &amp; memori DRAM/NAND</text>
  <text x="177" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Memasok komponen kritis ke rival Apple</text>
  <text x="177" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Keunggulan Teknologi &amp; Skala Fisik</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="497" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">APPLE INC. (FABLESS ECOSYSTEM)</text>
  <text x="497" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">Orkestrasi Ekosistem Tertutup:</text>
  <text x="497" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Desain silikon arsitektur cip in-house</text>
  <text x="497" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Manufaktur fisik di-outsource 100% (TSMC/Foxconn)</text>
  <text x="497" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mengunci pengguna dalam ekosistem iOS &amp; Services</text>
  <text x="497" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Taman Bertembok &amp; Margin Laba Raksasa</text>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Studi Kasus Strategik IV: Kepemimpinan Teknologi & Portofolio Konsumer (Samsung Electronics & Procter & Gamble)',
  ref: 'Brandenburger & Nalebuff (Co-opetition) | Gary Pisano (You Need an Innovation Strategy) | Portofolio P&G & Samsung',
  intro: 'TM 14 menyajikan studi kasus puncak penutup kurikulum manajemen strategik yang membedah kepemimpinan teknologi tinggi dan arsitektur portofolio global: dinamika Bekerja Sama Sekaligus Bersaing (Co-opetition antara Samsung Electronics dan Apple Inc.), perbandingan Model Integrasi Vertikal Produsen Perangkat Terpadu (Integrated Device Manufacturer / IDM) vs Model Ekosistem Tanpa Pabrik (Fabless & Outsourcing), manajemen portofolio multi-produk peredam siklus ekonomi, serta kepemimpinan merek global fast-moving consumer goods (P&G Brand Management).',
  objectives: [
    'Menerapkan konsep Co-opetition (Brandenburger & Nalebuff) dalam menganalisis persaingan teknologi tinggi.',
    'Membandingkan keuntungan dan risiko model integrasi vertikal IDM (Samsung) vs model outsourcing fabless (Apple).',
    'Menganalisis bagaimana diversifikasi portofolio bertindak sebagai lindung nilai (Portfolio Hedge) siklus industri memori.',
    'Mengevaluasi strategi arsitektur merek global korporasi consumer goods (House of Brands Procter & Gamble).',
    'Menyusun sintesis menyeluruh integrasi perumusan hingga eksekusi strategi korporasi modern.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 14.1: Model Co-opetition dan Perbandingan Integrasi Vertikal IDM Samsung vs Ekosistem Fabless Apple.',
      svg: SVG_COOPETITION_PORTFOLIO
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 14'
    },
    {
      kind: 'table',
      headers: ['Dimensi Strategis', 'Model Samsung Electronics (IDM Terintegrasi)', 'Model Apple Inc. (Fabless & Ekosistem Layanan)'],
      rows: [
        ['Penguasaan Fasilitas Pabrik', 'Memiliki dan mengoperasikan puluhan pabrik fabrikasi semikonduktor, layar, dan perakitan sendiri.', 'Fabless: Tidak memiliki pabrik manufaktur fisik; perakitan diserahkan ke Foxconn dan fabrikasi cip ke TSMC.'],
        ['Fokus Investasi Modal', 'Belanja modal (CapEx) raksasa puluhan miliar dolar per tahun untuk mesin litografi ultraviolet (EUV).', 'Belanja litbang perangkat lunak, desain arsitektur chip Apple Silicon, dan ekosistem konten layanan.'],
        ['Pengendalian Ekosistem', 'Menggunakan sistem operasi Android Google yang terbuka; bersaing dengan ribuan vendor ponsel lain.', 'Taman Bertembok (Walled Garden): Mengontrol 100% sistem operasi iOS, App Store, dan chip secara tertutup.'],
        ['Mitigasi Risiko Siklus Bisnis', 'Portofolio multi-divisi (Semikonduktor, Layar, Smartphone, Peralatan Rumah Tangga) saling menyubsidi silang.', 'Margin laba perangkat keras premium tinggi dipadu pendapatan berulang dari layanan berlangganan (Services).']
      ],
      caption: 'Tabel 14.0: Matriks perbandingan strategi Samsung Electronics vs Apple Inc.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Jaring Nilai Co-opetition (Brandenburger & Nalebuff)'
    },
    {
      kind: 'table',
      headers: ['Pilar Jaring Nilai (Value Net)', 'Peran Pemain dalam Ekosistem', 'Interaksi Strategis Nyata'],
      rows: [
        ['Pelanggan (Customers)', 'Pihak yang membeli produk atau jasa korporasi.', 'Pengguna akhir smartphone yang memilih antara Galaxy atau iPhone.'],
        ['Pemasok (Suppliers)', 'Pihak yang memasok sumber daya input komponen.', 'Samsung memasok layar OLED dan cip memori NAND kepada Apple.'],
        ['Pesaing (Competitors)', 'Pihak yang membuat produk Anda kurang bernilai bagi pembeli.', 'Samsung dan Apple saling memperebutkan pangsa pasar ponsel flagship global.'],
        ['Komplementer (Complementors)', 'Pihak yang membuat produk Anda LEBIH bernilai bagi pembeli jika digunakan bersama.', 'Pengembang aplikasi iOS membuat iPhone berharga; Google Search membayar miliaran dolar ke Apple.']
      ],
      caption: 'Tabel 14.1: Konsep jaring nilai Co-opetition Brandenburger & Nalebuff.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Mengapa Apple Tidak Pernah Membangun Pabrik Cip Sendiri?',
      prompt: 'Mengingat pentingnya pasokan cip mikroprosesor bagi iPhone, mengapa Apple memilih tetap berstatus Fabless (meng-outsource fabrikasi fisik ke TSMC Taiwan) dan tidak membangun pabrik fabrikasi silikon sendiri seperti Samsung?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Pengembalian Modal atas Investasi (ROIC Maksimal)**: Membangun satu pabrik fabrikasi cip semikonduktor tercanggih membutuhkan modal Rp 300 Triliun dengan risiko depresiasi aset kilat dalam 3 tahun. Dengan tidak memiliki pabrik fisik, neraca modal Apple sangat ramping (*Asset-Light Strategy*), menghasilkan Return on Invested Capital (ROIC) melampaui 50%.',
            '**Fokus pada Kompetensi Inti (Core Competencies)**: Kompetensi sejati Apple adalah pada **desain arsitektur silikon, integrasi perangkat keras-lunak, dan pengalaman pengguna**, bukan pada penanganan kimia limbah pabrik silikon.',
            '**Daya Tawar Monopoli Pembeli (Monopsony Power)**: Apple adalah pelanggan terbesar TSMC; Apple dapat mengunci kapasitas produksi pabrik TSMC paling awal dengan harga diskon volume tanpa harus menanggung risiko utilisasi pabrik saat ekonomi melambat.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 14'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Konsep Co-opetition', 'Dinamika kolaborasi dan persaingan simultan dalam ekosistem teknologi.', 'Mampu menganalisis simbiosis kompetitif antar-rival industri.'],
        ['2', 'Integrasi Vertikal IDM vs Fabless', 'Trade-off penguasaan aset pabrik vs fleksibilitas model tanpa aset.', 'Mampu mengevaluasi keputusan strategi make-or-buy semi-konduktor.'],
        ['3', 'Manajemen Portofolio Anti-Siklus', 'Strategi diversifikasi korporasi sebagai peredam guncangan pasar komoditas.', 'Mampu merumuskan arsitektur portofolio bisnis yang tangguh.']
      ],
      caption: 'Tabel 14.2: Peta penguasaan submateri TM 14 Manajemen Strategik.'
    },
    CASE_SAMSUNG_TECH_PORTFOLIO,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Musuh Sekaligus Mitra Terbesar**: Di era ekosistem digital, batas antara kawan dan lawan menjadi kabur; rival terbesar Anda di pasar konsumen bisa jadi merupakan pelanggan terbesar bagi divisi manufaktur Anda.',
        '**Asset-Light vs Asset-Heavy**: Tidak ada model yang secara inheren lebih baik; model IDM Samsung memberikan kendali teknologi mutlak, sedangkan model Fabless Apple menghasilkan margin laba finansial yang spektakuler.',
        '**Eksekusi Menentukan Kemenangan**: Strategi yang brilian di atas kertas tidak ada artinya tanpa penyelarasan budaya, sistem pengendalian, dan kepemimpinan yang berani mengambil keputusan sulit.'
      ]
    }
  ]
};
