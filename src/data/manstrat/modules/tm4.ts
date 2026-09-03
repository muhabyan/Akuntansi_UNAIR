import type { Reading } from '../../../types';
import { CASE_GENERIC_STRATEGIES_LIFECYCLE } from '../manstratPracticeCases';

const SVG_GENERIC_STRATEGIES = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="costGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="diffGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="fCostGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="fDiffGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns4)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">4 STRATEGI GENERIK KEUNGGULAN BERSAING (MICHAEL E. PORTER)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">GENERIC MATRIX</text>

  <!-- Y-Axis -->
  <text class="text-accent-blue" x="55" y="120" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">PASAR LUAS</text>
  <text class="text-accent-blue" x="55" y="135" fill="#38bdf8" font-size="8" text-anchor="middle">(Broad Scope)</text>
  <text class="text-accent-amber" x="55" y="275" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">PASAR CERUK</text>
  <text class="text-accent-amber" x="55" y="290" fill="#fbbf24" font-size="8" text-anchor="middle">(Narrow Focus)</text>

  <!-- X-Axis -->
  <text class="text-accent-blue" x="290" y="78" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">KEUNGGULAN BIAYA RENDAH (LOW COST)</text>
  <text class="text-accent-purple" x="690" y="78" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">KEUNGGULAN DIFERENSIASI (KEUNIKAN PRODUK)</text>

  <g transform="translate(110, 92)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#costGrad)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="11" font-weight="800">1. COST LEADERSHIP (BIAYA RENDAH)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Skala pabrikasi raksasa, efisiensi operasional ketat</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Menawarkan harga terendah di pasar massal</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Walmart, AirAsia, Xiaomi (Entry-level)</text>
    <rect x="250" y="88" width="100" height="18" rx="9" fill="#0284c7" fill-opacity="0.3"/>
    <text class="text-accent-blue" x="300" y="101" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Skala Ekonomis</text>
  </g>

  <g transform="translate(495, 92)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#diffGrad)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="16" y="20" fill="#a78bfa" font-size="11" font-weight="800">2. DIFFERENTIATION (DIFERENSIASI)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Fitur unik, merek prestisius, loyalitas konsumen tinggi</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Mampu menetapkan harga premi (Premium Price)</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Apple iPhone, BMW, Singapore Airlines</text>
    <rect x="250" y="88" width="100" height="18" rx="9" fill="#7c3aed" fill-opacity="0.3"/>
    <text class="text-accent-purple" x="300" y="101" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Harga Premium</text>
  </g>

  <g transform="translate(110, 218)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#fCostGrad)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="11" font-weight="800">3. COST FOCUS (FOKUS BIAYA RENDAH)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Melayani segmen geografis atau pembeli ceruk khusus</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Keunggulan biaya di ceruk yang diabaikan pemain besar</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Supermarket diskon regional / Grosir lokal</text>
    <rect x="250" y="88" width="100" height="18" rx="9" fill="#059669" fill-opacity="0.3"/>
    <text class="text-accent-green" x="300" y="101" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Ceruk Murah</text>
  </g>

  <g transform="translate(495, 218)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#fDiffGrad)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="16" y="20" fill="#fbbf24" font-size="11" font-weight="800">4. DIFFERENTIATION FOCUS (FOKUS DIFERENSIASI)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Menguasai pasar ultra-spesifik dengan produk kustom</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Memenuhi kebutuhan unik konsumen elit / profesional</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Ferrari, Rolex, Kopi Spesialti Geisha Luwak</text>
    <rect x="250" y="88" width="100" height="18" rx="9" fill="#d97706" fill-opacity="0.3"/>
    <text class="text-accent-amber" x="300" y="101" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Eksklusif / Mewah</text>
  </g>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Business-Level Strategy: Keunggulan Bersaing Generik & Siklus Hidup Industri',
  ref: 'Dess et al. Bab 5 | Michael Porter Generic Strategies | Industry Life Cycle Analysis',
  intro: 'TM 4 membahas strategi tingkat bisnis (Business-Level Strategy) untuk memposisikan unit bisnis dalam persaingan industri: 3 strategi bersaing generik Michael Porter (Overall Cost Leadership, Differentiation, Focus Strategy), strategi terpadu (Integrated Low-Cost and Differentiation), bahaya posisi terjebak di tengah (Stuck in the Middle), serta pergeseran dinamika strategi sepanjang 4 tahap Siklus Hidup Industri (Introduction, Growth, Maturity, Decline).',
  objectives: [
    'Menganalisis sumber keunggulan bersaing Cost Leadership dan risikonya terhadap perubahan teknologi.',
    'Mengevaluasi strategi Diferensiasi dalam menciptakan loyalitas pelanggan dan menolak elastisitas harga.',
    'Menjelaskan taktik strategi Fokus Biaya dan Fokus Diferensiasi pada segmen ceruk pasar (Niche Market).',
    'Menghubungkan tahap Siklus Hidup Industri (Perkenalan, Pertumbuhan, Kedewasaan, Penurunan) dengan strategi fungsional.',
    'Menerapkan 4 strategi pada tahap penurunan (Decline Stage): Maintaining, Harvesting, Divesting, Forging Ahead.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 4.1: Matriks Strategi Bersaing Generik Michael Porter Berdasarkan Keunggulan dan Cakupan Target.',
      svg: SVG_GENERIC_STRATEGIES
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 4'
    },
    {
      kind: 'table',
      headers: ['Tahap Siklus Hidup Industri', 'Tingkat Pertumbuhan Pasar', 'Tingkat Intensitas Persaingan', 'Fokus Utama Inovasi & Strategi'],
      rows: [
        ['1. Perkenalan (Introduction)', 'Rendah (pasar baru lahir)', 'Sangat rendah (sedikit pelopor)', 'Inovasi Produk radikal; mengedukasi konsumen awal dan membangun saluran distribusi.'],
        ['2. Pertumbuhan (Growth)', 'Sangat Tinggi (lonjakan eksponensial)', 'Meningkat pesat (banyak pendatang baru)', 'Membangun loyalitas merek, memperluas kapasitas pabrik, dan meraih pangsa pasar dominan.'],
        ['3. Kedewasaan (Maturity)', 'Melambat s/d Nol (pasar jenuh)', 'Sangat Sengit (perang harga)', 'Inovasi Proses; efisiensi biaya manufaktur, diferensiasi layanan, dan rasionalisasi SKU.'],
        ['4. Penurunan (Decline)', 'Negatif (penyusutan penjualan)', 'Bervariasi (konsolidasi atau eksodus)', 'Strategi panen kas (Harvesting), konsolidasi monopoli ceruk, atau divestasi bisnis.']
      ],
      caption: 'Tabel 4.0: Matriks dinamika 4 tahap siklus hidup industri.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 4 Pilihan Strategi pada Tahap Penurunan Industri (Decline Stage)'
    },
    {
      kind: 'table',
      headers: ['Pilihan Strategi Penurunan', 'Tindakan Manajerial Kunci', 'Kapan Paling Tepat Diterapkan'],
      rows: [
        ['1. Maintaining (Mempertahankan)', 'Melanjutkan operasi tanpa investasi baru yang signifikan, berharap pesaing keluar duluan.', 'Ketika kapasitas pasar yang tersisa masih cukup menguntungkan.'],
        ['2. Harvesting (Memanen Kas)', 'Memotong drastis anggaran promosi dan R&D, memerah arus kas sisa secepat mungkin.', 'Ketika produk masih menghasilkan kas jangka pendek namun masa depannya suram.'],
        ['3. Divesting (Divestasi / Jual)', 'Menjual seluruh unit bisnis atau aset pabrik kepada pihak lain sedini mungkin.', 'Ketika perusahaan dapat menemukan pembeli yang bersedia membayar harga wajar.'],
        ['4. Consolidating (Konsolidasi)', 'Membeli pesaing yang sekarat untuk menguasai 100% sisa ceruk pasar monopoli.', 'Ketika pasar ceruk yang tersisa sangat stabil dan loyal (contoh: piringan hitam vinyl).']
      ],
      caption: 'Tabel 4.1: Strategi mengatasi penurunan industri menurut Dess et al.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Risiko Strategi Diferensiasi yang Berlebihan',
      prompt: 'Sebuah produsen laptop menambahkan puluhan fitur mewah berteknologi tinggi (layar hologram, casing berlapis emas) sehingga harga laptop melambung menjadi Rp 150 Juta per unit. Penjualannya anjlok drastis. Risiko strategi diferensiasi apa yang dialami perusahaan tersebut?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Identifikasi Risiko**: Mengalami risiko **Perbedaan Harga yang Terlalu Lebar (Excessive Price Differential)**.',
            '**Mekanisme Kegagalan**: Konsumen memang menghargai diferensiasi unik, namun ada batas ambang toleransi kesediaan membayar (*willingness to pay*). Ketika premi harga melampaui nilai utilitas yang dirasakan konsumen, pelanggan akan beralih ke produk standar yang "cukup baik".',
            '**Rekomendasi Porter**: Diferensiasi harus selalu memperhatikan efisiensi biaya; jangan menambahkan fitur yang tidak diinginkan konsumen jika fitur tersebut mendongkrak biaya produksi secara tidak proporsional.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 4'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Cost Leadership & Diferensiasi', 'Analisis keunggulan dan kerentanan 3 strategi bersaing generik.', 'Mampu membedah posisi bersaing merek dalam industri.'],
        ['2', 'Jebakan Stuck in the Middle', 'Penyebab dan bahaya gagal memilih antara biaya rendah vs diferensiasi.', 'Mampu merekomendasikan reposisi merek yang terjebak di tengah.'],
        ['3', 'Siklus Hidup Industri', 'Dinamika perkenalan, pertumbuhan, kedewasaan, penurunan dan strategi panen.', 'Mampu menyesuaikan strategi fungsional dengan fase umur industri.']
      ],
      caption: 'Tabel 4.2: Peta penguasaan submateri TM 4 Manajemen Strategik.'
    },
    CASE_GENERIC_STRATEGIES_LIFECYCLE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Biaya Rendah Bukan Berarti Murahan**: Pemimpin biaya (*Cost Leader*) harus menawarkan produk dengan kualitas yang dapat diterima pasar (*acceptable standard*); jika produk terlalu murahan hingga ditolak konsumen, strategi tersebut gagal.',
        '**Inovasi Produk vs Inovasi Proses**: Inovasi produk mendominasi tahap perkenalan dan pertumbuhan industri; sedangkan inovasi proses (*process innovation*) mendominasi tahap kedewasaan untuk memangkas biaya.',
        '**Keberanian Melepaskan**: Pada tahap penurunan (*Decline*), manajer terbaik adalah yang berani melakukan divestasi lebih awal saat aset masih bernilai, bukan yang bertahan keras kepala hingga bangkrut.'
      ]
    }
  ]
};
