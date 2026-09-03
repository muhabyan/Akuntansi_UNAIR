import type { Reading } from '../../../types';
import { CASE_COMPETITIVE_ADVANTAGE_STAKEHOLDER } from '../manstratPracticeCases';

const SVG_STRATEGY_HIERARCHY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="corpGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="busGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="funcGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns1)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">HIERARKI STRATEGI KORPORASI 3 TINGKAT (GREGORY G. DESS)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">STRATEGY LEVELS</text>

  <!-- Left: Visual Stepped Pyramid -->
  <polygon points="230,75 140,150 320,150" fill="url(#corpGrad)" stroke="#c4b5fd" stroke-width="1.5"/>
  <text x="230" y="125" fill="#0f172a" font-size="11" font-weight="800" text-anchor="middle">CORPORATE LEVEL</text>
  <text x="230" y="139" fill="#0f172a" font-size="8" font-weight="700" text-anchor="middle">"Bisnis Apa yang Kita Masuki?"</text>

  <polygon points="137,155 70,235 390,235 323,155" fill="url(#busGrad)" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="230" y="195" fill="#0f172a" font-size="11.5" font-weight="800" text-anchor="middle">BUSINESS LEVEL (SBU)</text>
  <text x="230" y="211" fill="#0f172a" font-size="8.5" font-weight="700" text-anchor="middle">"Bagaimana Bersaing &amp; Menang di Pasar?"</text>

  <polygon points="67,240 15,325 445,325 393,240" fill="url(#funcGrad)" stroke="#86efac" stroke-width="1.5"/>
  <text x="230" y="280" fill="#0f172a" font-size="12" font-weight="800" text-anchor="middle">FUNCTIONAL LEVEL (OPERASIONAL)</text>
  <text x="230" y="298" fill="#0f172a" font-size="9" font-weight="700" text-anchor="middle">"Alokasi Sumber Daya Penopang Strategi SBU"</text>

  <!-- Right: 3 Strategy Cards -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="400" height="75" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="400" height="24" rx="10" fill="url(#corpGrad)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="14" y="17" fill="#a78bfa" font-size="10" font-weight="800">1. CORPORATE LEVEL (DIREKSI KORPORAT / CEO)</text>
    <text class="svg-text" x="14" y="38" fill="#cbd5e1" font-size="8">• Portofolio multi-bisnis, sinergi korporasi, M&amp;A, dan alokasi modal</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• Keputusan diversifikasi (terkait/konglomerasi) &amp; aliansi global</text>
    <text class="svg-muted" x="14" y="66" fill="#94a3b8" font-size="7.5">Contoh: PT Astra International Tbk mengelola 7 pilar industri mandiri</text>

    <rect class="svg-card" x="0" y="85" width="400" height="75" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="85" width="400" height="24" rx="10" fill="url(#busGrad)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="102" fill="#38bdf8" font-size="10" font-weight="800">2. BUSINESS LEVEL (KEPALA SBU / GENERAL MANAGER)</text>
    <text class="svg-text" x="14" y="123" fill="#cbd5e1" font-size="8">• Posisi bersaing: Keunggulan Biaya (Cost) vs Diferensiasi Produk</text>
    <text class="svg-text" x="14" y="137" fill="#cbd5e1" font-size="8">• Merespon ancaman 5 Kekuatan Porter &amp; membangun parit proteksi (Moat)</text>
    <text class="svg-muted" x="14" y="151" fill="#94a3b8" font-size="7.5">Contoh: Auto2000 (Otomotif) vs United Tractors (Alat Berat)</text>

    <rect class="svg-card" x="0" y="170" width="400" height="75" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="170" width="400" height="24" rx="10" fill="url(#funcGrad)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="187" fill="#34d399" font-size="10" font-weight="800">3. FUNCTIONAL LEVEL (MANAJER OPERASIONAL &amp; TI)</text>
    <text class="svg-text" x="14" y="208" fill="#cbd5e1" font-size="8">• Penerjemahan taktis: Anggaran R&amp;D, pemasaran digital, efisiensi rantai pasok</text>
    <text class="svg-text" x="14" y="222" fill="#cbd5e1" font-size="8">• Menjamin integrasi mulus antara efisiensi proses harian &amp; target laba SBU</text>
    <text class="svg-muted" x="14" y="236" fill="#94a3b8" font-size="7.5">Contoh: Departemen Pemasaran meluncurkan program loyalitas terintegrasi</text>
  </g>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Strategic Management: Creating Competitive Advantages, Proses Strategik, & Simbiosis Pemangku Kepentingan',
  ref: 'Gregory G. Dess, G.T. Lumpkin, Alan B. Eisner & Gerry McNamara (Strategic Management 10e/11e) Bab 1 | Michael Porter What is Strategy?',
  intro: 'TM 1 membahas definisi dan fondasi hakiki manajemen strategik: analisis, keputusan, dan tindakan yang diambil organisasi untuk menciptakan dan mempertahankan keunggulan bersaing (Sustainable Competitive Advantage), 4 atribut kunci kepemimpinan strategik, perbandingan pandangan Zero-Sum vs Simbiosis Pemangku Kepentingan (Stakeholder Symbiosis), perbedaan esensial antara Efektivitas Operasional vs Strategic Positioning (Michael Porter), serta hierarki strategi 3 tingkatan (Corporate, Business, dan Functional).',
  objectives: [
    'Mendefinisikan keunggulan bersaing berkelanjutan (Sustainable Competitive Advantage).',
    'Menjelaskan 4 atribut kunci manajemen strategik (Arah tujuan umum, multi-stakeholder, jangka panjang vs pendek, efisiensi vs efektivitas).',
    'Menganalisis konsep Simbiosis Pemangku Kepentingan (Stakeholder Symbiosis) vs Zero-Sum View.',
    'Membedakan peran manajer pada 3 tingkatan hierarki strategi: Corporate, Business, dan Functional Level.',
    'Menjelaskan mengapa Efektivitas Operasional (OE) saja tidak mencukupi untuk keunggulan bersaing menurut Michael Porter.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Tiga Tingkatan Hierarki Strategi Organisasi dan Integrasi Arah Kepemimpinan.',
      svg: SVG_STRATEGY_HIERARCHY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 1'
    },
    {
      kind: 'table',
      headers: ['Tingkatan Strategi', 'Pertanyaan Strategis Inti', 'Ruang Lingkup Keputusan', 'Aktor Penanggung Jawab Utama'],
      rows: [
        ['Corporate-Level Strategy', 'Bisnis apa yang seharusnya kita masuki untuk memaksimalkan nilai?', 'Portofolio industri, diversifikasi terkait/tak terkait, merger, akuisisi, aliansi, dan alokasi modal antar-SBU.', 'CEO, Dewan Direksi, dan Komite Investasi Korporasi.'],
        ['Business-Level Strategy', 'Bagaimana cara kita bersaing dan memenangkan pasar industri ini?', 'Penetapan posisi bersaing: Cost Leadership, Diferensiasi unik, atau Fokus ceruk pasar tertentu.', 'Presiden Direktur Unit Bisnis Strategis (SBU Head).'],
        ['Functional-Level Strategy', 'Bagaimana aktivitas operasional mendukung keunggulan bersaing SBU?', 'Efisiensi rantai pasok, riset produk baru, kampanye branding, dan pengelolaan modal kerja.', 'Manajer Pemasaran, Keuangan, Operasi, dan SDM.']
      ],
      caption: 'Tabel 1.0: Matriks hierarki strategi organisasi modern.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Efektivitas Operasional vs Penentuan Posisi Strategis (Michael Porter)'
    },
    {
      kind: 'table',
      headers: ['Dimensi Evaluasi', 'Efektivitas Operasional (Operational Effectiveness / OE)', 'Posisi Strategis (Strategic Positioning)'],
      rows: [
        ['Definisi Konsep', 'Melakukan aktivitas serupa dengan cara yang LEBIH BAIK daripada pesaing (contoh: Six Sigma, eliminasi cacat, TQM).', 'Melakukan aktivitas yang BERBEDA dari pesaing atau melakukan aktivitas serupa dengan CARA YANG BERBEDA.'],
        ['Sifat Keunggulan', 'Sementara dan mudah ditiru; teknologi dan perangkat lunak terbaik dapat dibeli oleh siapa saja.', 'Berkelanjutan; berakar pada konfigurasi sistem aktivitas terintegrasi yang saling memperkuat (*Activity System Fit*).'],
        ['Hasil Akhir Industri', 'Konvergensi kompetitif dan perang harga berdarah yang menghancurkan profitabilitas seluruh industri.', 'Keunggulan bersaing unik di mana masing-masing perusahaan melayani segmen kebutuhan yang berbeda dengan laba sehat.']
      ],
      caption: 'Tabel 1.1: Komparasi doktrin strategis Michael Porter.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Jebakan Zero-Sum vs Simbiosis Pemangku Kepentingan',
      prompt: 'Sebuah pabrik tekstil multinasional memutuskan memotong upah buruh sebesar 20% dan membuang limbah pewarna kimia ke sungai tanpa pengolahan demi mencapai target laba kuartalan pemegang saham. Evaluasi keputusan ini menggunakan konsep Simbiosis Pemangku Kepentingan (Stakeholder Symbiosis)!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Pola Pikir yang Digunakan**: Manajemen terjebak dalam **Zero-Sum View** (mengira memeras buruh dan merusak alam akan menambah kekayaan pemegang saham).',
            '**Konsekuensi Nyata**: Tindakan ini memicu pemogokan massal pekerja, boikot konsumen global pecinta lingkungan, dan penutupan izin pabrik oleh kementerian lingkungan hidup.',
            '**Pendekatan Simbiosis Pemangku Kepentingan**: Manajemen seharusnya mengadopsi prinsip *Creating Shared Value (CSV)*: mengolah limbah menjadi bahan daur ulang bernilai ekonomis dan memberikan upah berkeadilan yang memicu lonjakan produktivitas buruh, sehingga laba pemegang saham tumbuh sehat tanpa risiko hukum.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 1'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Konsep Keunggulan Bersaing', 'Definisi keunggulan bersaing berkelanjutan dan 4 atribut manajemen strategik.', 'Mampu mengidentifikasi orientasi strategis korporasi.'],
        ['2', 'Simbiosis Pemangku Kepentingan', 'Pembedaan zero-sum vs stakeholder symbiosis dalam penciptaan nilai bersama.', 'Mampu menganalisis benturan kepentingan pemegang saham vs masyarakat.'],
        ['3', 'OE vs Strategic Positioning', 'Kritik Michael Porter terhadap efektivitas operasional murni.', 'Mampu membedakan strategi positioning unik vs sekadar efisiensi operasional.']
      ],
      caption: 'Tabel 1.2: Peta penguasaan submateri TM 1 Manajemen Strategik.'
    },
    CASE_COMPETITIVE_ADVANTAGE_STAKEHOLDER,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Strategi Adalah Menolak Trade-Off Murahan**: Strategi sejati bukan tentang mencoba menyenangkan semua orang, melainkan tentang memilih batasan yang jelas mengenai apa yang tidak akan dilakukan perusahaan.',
        '**Fit Sistem Aktivitas**: Keunggulan bersaing yang paling sulit ditiru pesaing adalah rantai aktivitas yang saling mengunci (*interlocking activities*), di mana meniru satu bagian saja tidak akan menghasilkan efek apa-apa.',
        '**Pemangku Kepentingan Saling Menguatkan**: Perusahaan tidak beroperasi di ruang hampa; keberhasilan pemegang saham bergantung penuh pada kepuasan pelanggan, dedikasi karyawan, dan keharmonisan lingkungan komunitas.'
      ]
    }
  ]
};
