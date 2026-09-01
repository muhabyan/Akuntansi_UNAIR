import type { Reading } from '../../../types';
import { CASE_GENERIC_STRATEGIES_LIFECYCLE } from '../manstratPracticeCases';

const SVG_GENERIC_STRATEGIES = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRATEGI BERSAING GENERIK &amp; CAKUPAN PASAR (MICHAEL E. PORTER)</text>
  
  <rect x="35" y="55" width="285" height="68" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="76" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">COST LEADERSHIP (BIAYA RENDAH)</text>
  <text x="177" y="93" fill="#cbd5e1" font-size="8" text-anchor="middle">Keunggulan: Biaya Murah | Target: Pasar Luas</text>
  <text x="177" y="108" fill="#94a3b8" font-size="8" text-anchor="middle">Skala raksasa, efisiensi rantai pasok (Walmart, Lion Air)</text>

  <rect x="355" y="55" width="285" height="68" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="497" y="76" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">DIFFERENTIATION (DIFERENSIASI)</text>
  <text x="497" y="93" fill="#cbd5e1" font-size="8" text-anchor="middle">Keunggulan: Nilai Unik | Target: Pasar Luas</text>
  <text x="497" y="108" fill="#94a3b8" font-size="8" text-anchor="middle">Brand prestise, inovasi, harga premium (Apple, BMW)</text>

  <rect x="35" y="132" width="285" height="68" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="177" y="153" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">FOCUSED COST LEADERSHIP</text>
  <text x="177" y="170" fill="#cbd5e1" font-size="8" text-anchor="middle">Keunggulan: Biaya Murah | Target: Ceruk Sempit</text>
  <text x="177" y="185" fill="#94a3b8" font-size="8" text-anchor="middle">Melayani segmen sensitif harga di area khusus</text>

  <rect x="355" y="132" width="285" height="68" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="497" y="153" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">FOCUSED DIFFERENTIATION</text>
  <text x="497" y="170" fill="#cbd5e1" font-size="8" text-anchor="middle">Keunggulan: Nilai Unik | Target: Ceruk Sempit</text>
  <text x="497" y="185" fill="#94a3b8" font-size="8" text-anchor="middle">Produk kustom spesifik (Ferrari, Jam Tangan Rolex)</text>
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
