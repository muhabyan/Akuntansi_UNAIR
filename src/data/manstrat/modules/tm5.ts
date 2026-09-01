import type { Reading } from '../../../types';
import { CASE_CORPORATE_DIVERSIFICATION_MA } from '../manstratPracticeCases';

const SVG_GLOBAL_STRATEGIES = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">4 STRATEGI INTEGRASI GLOBAL (BARTLETT &amp; GHOSHAL / DESS ET AL.)</text>
  
  <rect x="35" y="55" width="285" height="68" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="76" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">GLOBAL STRATEGY</text>
  <text x="177" y="93" fill="#cbd5e1" font-size="8" text-anchor="middle">Tekanan Biaya: TINGGI | Responsivitas Lokal: RENDAH</text>
  <text x="177" y="108" fill="#94a3b8" font-size="8" text-anchor="middle">Produk standar dunia, sentralisasi pabrik (Boeing, Intel)</text>

  <rect x="355" y="55" width="285" height="68" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="497" y="76" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">TRANSNATIONAL STRATEGY</text>
  <text x="497" y="93" fill="#cbd5e1" font-size="8" text-anchor="middle">Tekanan Biaya: TINGGI | Responsivitas Lokal: TINGGI</text>
  <text x="497" y="108" fill="#94a3b8" font-size="8" text-anchor="middle">Efisiensi global + adaptasi lokal lincah (Unilever, Toyota)</text>

  <rect x="35" y="132" width="285" height="68" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="177" y="153" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">INTERNATIONAL STRATEGY</text>
  <text x="177" y="170" fill="#cbd5e1" font-size="8" text-anchor="middle">Tekanan Biaya: RENDAH | Responsivitas Lokal: RENDAH</text>
  <text x="177" y="185" fill="#94a3b8" font-size="8" text-anchor="middle">Eksploitasi kompetensi inti ke luar negeri (Harley-Davidson)</text>

  <rect x="355" y="132" width="285" height="68" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="497" y="153" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">MULTIDOMESTIC STRATEGY</text>
  <text x="497" y="170" fill="#cbd5e1" font-size="8" text-anchor="middle">Tekanan Biaya: RENDAH | Responsivitas Lokal: TINGGI</text>
  <text x="497" y="185" fill="#94a3b8" font-size="8" text-anchor="middle">Desentralisasi cabang, kustomisasi rasa/budaya (Nestle, Kraft)</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Corporate-Level Strategy & International Strategy: Diversifikasi, M&A, & Ekspansi Global',
  ref: 'Dess et al. Bab 6 & 7 | Bartlett & Ghoshal Managing Across Borders | Michael Porter Diamond of National Advantage',
  intro: 'TM 5 membahas strategi tingkat korporasi (Corporate-Level Strategy) dan ekspansi internasional: motivasi diversifikasi korporasi, Diversifikasi Terkait (Related Diversification melalui Economies of Scope dan Market Power) vs Diversifikasi Tak Terkait (Unrelated Diversification melalui Restrukturisasi dan Parenting Advantage), sarana diversifikasi (M&A, Aliansi Strategis, dan Internal Development), Model Berlian Keunggulan Nasional Michael Porter (Porters Diamond), serta 4 Strategi Integrasi Global Bartlett & Ghoshal (International, Global, Multidomestic, Transnational).',
  objectives: [
    'Menganalisis penciptaan nilai melalui Diversifikasi Terkait (Sharing Activities dan Core Competencies).',
    'Menjelaskan motivasi finansial Diversifikasi Tak Terkait (Parenting Advantage dan Portfolio Restructuring).',
    'Mengevaluasi faktor pendorong dan penyebab kegagalan Merger dan Akuisisi (M&A) korporasi.',
    'Menerapkan 4 pilar Model Berlian Nasional Porter dalam menjelaskan daya saing industri suatu negara.',
    'Membandingkan 4 strategi ekspansi global Bartlett & Ghoshal berdasarkan tekanan efisiensi biaya vs responsivitas lokal.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 5.1: Empat Strategi Ekspansi Global Bartlett & Ghoshal Berdasarkan Tekanan Biaya dan Responsivitas.',
      svg: SVG_GLOBAL_STRATEGIES
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 5'
    },
    {
      kind: 'table',
      headers: ['Strategi Global', 'Tekanan Efisiensi Biaya', 'Tekanan Responsivitas Lokal', 'Konfigurasi Operasional Kunci'],
      rows: [
        ['International Strategy', 'Rendah', 'Rendah', 'Operasi inti tetap di negara asal; produk ekspor tidak banyak dimodifikasi.'],
        ['Global Strategy', 'Tinggi', 'Rendah', 'Operasi sangat tersentralisasi pada lokasi berbiaya termurah; produk distandarisasi secara seragam di seluruh dunia.'],
        ['Multidomestic Strategy', 'Rendah', 'Tinggi', 'Otonomi penuh didelegasikan kepada anak perusahaan lokal untuk memodifikasi produk sesuai budaya negara tuan rumah.'],
        ['Transnational Strategy', 'Tinggi', 'Tinggi', 'Rantai nilai terdistribusi secara global namun saling terhubung terkoordinasi erat (*dispersed, interdependent, and specialized*).']
      ],
      caption: 'Tabel 5.0: Matriks strategi ekspansi global organisasi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 4 Atribut Model Berlian Keunggulan Nasional Michael Porter'
    },
    {
      kind: 'table',
      headers: ['Pilar Model Berlian Porter', 'Definisi Kondisi Nasional', 'Dampak Terhadap Keunggulan Global'],
      rows: [
        ['1. Kondisi Faktor (Factor Conditions)', 'Ketersediaan faktor produksi canggih (SDM berketerampilan tinggi, infrastruktur digital, lab riset).', 'Menciptakan spesialisasi keunggulan yang tidak dimiliki negara lain (contoh: Jerman dalam teknik mesin).'],
        ['2. Kondisi Permintaan (Demand Conditions)', 'Karakter konsumen domestik yang sangat cerdas, kritis, dan menuntut standar tinggi.', 'Memaksa perusahaan terus berinovasi dan menyempurnakan kualitas sebelum bersaing di panggung dunia.'],
        ['3. Industri Terkait & Pendukung', 'Keberadaan kluster industri pemasok lokal kelas dunia yang saling mendukung.', 'Menghasilkan aliran inovasi cepat dan pasokan komponen murah (contoh: Silicon Valley di AS).'],
        ['4. Struktur, Strategi, & Rivalitas Perusahaan', 'Kondisi pendirian perusahaan dan intensitas rivalitas kompetisi domestik.', 'Rivalitas sengit di pasar dalam negeri melatih perusahaan menjadi tangguh saat ekspansi ke luar negeri.']
      ],
      caption: 'Tabel 5.1: Model berlian keunggulan kompetitif bangsa Michael Porter.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Jebakan Sinergi Semu dalam Akuisisi Konglomerasi',
      prompt: 'Sebuah konglomerat properti mengakuisisi perusahaan game e-sports dengan harga sangat mahal dengan alasan "menciptakan sinergi". Namun setelah 2 tahun, laba kedua entitas justru anjlok dan utang menumpuk. Jenis diversifikasi apa yang terjadi dan mengapa sinergi yang dijanjikan gagal terwujud?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Jenis Diversifikasi**: Merupakan **Unrelated Diversification (Diversifikasi Tak Terkait)** karena tidak ada kesamaan rantai nilai operasional antara industri properti fisik dengan pengembangan perangkat lunak game.',
            '**Penyebab Kegagalan Sinergi**: Manajemen puncak properti tidak memiliki kompetensi manajerial (*Corporate Parenting Advantage*) untuk mengelola industri kreatif digital; mereka menerapkan birokrasi kaku properti yang membunuh kreativitas para developer game.',
            '**Premi Akuisisi Berlebih (Winners Curse)**: Membayar valuasi startup terlalu mahal membuat arus kas operasional game tidak sanggup menutup beban bunga utang akuisisi.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 5'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Diversifikasi Terkait vs Tak Terkait', 'Analisis economies of scope, market power, dan parenting advantage.', 'Mampu mengevaluasi motif strategis diversifikasi korporasi.'],
        ['2', 'Merger & Akuisisi (M&A)', 'Kelebihan/risiko M&A vs aliansi strategis dan internal venture.', 'Mampu mengidentifikasi penyebab kegagalan integrasi pasca akuisisi.'],
        ['3', 'Model Berlian Porter & Strategi Global', 'Analisis 4 pilar Diamond dan 4 strategi Bartlett & Ghoshal.', 'Mampu merekomendasikan strategi ekspansi global yang optimal.']
      ],
      caption: 'Tabel 5.2: Peta penguasaan submateri TM 5 Manajemen Strategik.'
    },
    CASE_CORPORATE_DIVERSIFICATION_MA,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Uji 1 + 1 = 3 untuk Diversifikasi**: Diversifikasi korporasi hanya dibenarkan jika menghasilkan nilai sinergi di mana gabungan dua bisnis menghasilkan laba yang lebih besar daripada penjumlahan masing-masing entitas jika berdiri sendiri.',
        '**Strategi Transnasional Adalah Idaman**: Mencapai efisiensi skala global sekaligus tetap responsif terhadap selera lokal (*Transnational Strategy*) adalah puncak keunggulan strategis multinasional modern.',
        '**Aliansi Lebih Fleksibel dari Akuisisi**: Aliansi strategis memungkinkan perusahaan mengakses teknologi baru tanpa harus menanggung risiko finansial dan benturan budaya merger yang mahal.'
      ]
    }
  ]
};
