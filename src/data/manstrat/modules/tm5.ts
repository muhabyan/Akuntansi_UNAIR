import type { Reading } from '../../../types';
import { CASE_CORPORATE_DIVERSIFICATION_MA } from '../manstratPracticeCases';

const SVG_GLOBAL_STRATEGIES = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns5)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">4 STRATEGI EKSPANSI INTERNASIONAL (BARTLETT &amp; GHOSHAL)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">GLOBAL MATRIX</text>

  <!-- Y-Axis -->
  <text class="text-accent-blue" x="55" y="120" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">INTEGRASI</text>
  <text class="text-accent-blue" x="55" y="135" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">GLOBAL TINGGI</text>
  <text class="svg-muted" x="55" y="275" fill="#94a3b8" font-size="9" font-weight="800" text-anchor="middle">INTEGRASI</text>
  <text class="svg-muted" x="55" y="290" fill="#94a3b8" font-size="9" font-weight="800" text-anchor="middle">GLOBAL RENDAH</text>

  <!-- X-Axis -->
  <text class="svg-text" x="290" y="78" fill="#cbd5e1" font-size="9.5" font-weight="800" text-anchor="middle">RESPON LOKAL RENDAH</text>
  <text class="text-accent-green" x="690" y="78" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">RESPON LOKAL TINGGI (ADAPTASI BUDAYA)</text>

  <g transform="translate(110, 92)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#g1)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="11" font-weight="800">1. GLOBAL STANDARDIZATION</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Produk standar seragam sedunia tanpa kustomisasi lokal</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Pabrikasi terpusat di negara biaya terendah (Skala raksasa)</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Chip Semikonduktor Intel, Boeing, Komponen Mesin</text>
    <rect x="250" y="88" width="100" height="18" rx="9" fill="#0284c7" fill-opacity="0.3"/>
    <text class="text-accent-blue" x="300" y="101" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Efisiensi Global</text>
  </g>

  <g transform="translate(495, 92)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#g2)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="11" font-weight="800">2. TRANSNATIONAL STRATEGY</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Paling ideal namun kompleks: Efisiensi global + Adaptasi lokal</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Berbagi inovasi dua arah di jaringan anak perusahaan global</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Unilever (Glico/Walls), Toyota Motor Corporation</text>
    <rect x="250" y="88" width="100" height="18" rx="9" fill="#059669" fill-opacity="0.3"/>
    <text class="text-accent-green" x="300" y="101" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Sinergi Dua Arah</text>
  </g>

  <g transform="translate(110, 218)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#g4)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="16" y="20" fill="#a78bfa" font-size="11" font-weight="800">3. INTERNATIONAL / EXPORT</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Menjual produk domestik ke luar negeri tanpa modifikasi</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Mengandalkan keunggulan kompetitif inti di kantor pusat</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Harley-Davidson, Apple (Diekspor langsung)</text>
    <rect x="250" y="88" width="100" height="18" rx="9" fill="#7c3aed" fill-opacity="0.3"/>
    <text class="text-accent-purple" x="300" y="101" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Transfer Inti</text>
  </g>

  <g transform="translate(495, 218)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#g3)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="16" y="20" fill="#fbbf24" font-size="11" font-weight="800">4. MULTIDOMESTIC / LOCALIZATION</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Kustomisasi penuh sesuai selera, lidah, &amp; regulasi lokal</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Otonomi penuh anak perusahaan di tiap negara tujuan</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Nestle (Rasa lokal), McDonald's (Menu nasi/halal)</text>
    <rect x="250" y="88" width="100" height="18" rx="9" fill="#d97706" fill-opacity="0.3"/>
    <text class="text-accent-amber" x="300" y="101" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Kustomisasi Lokal</text>
  </g>
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
