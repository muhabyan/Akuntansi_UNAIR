import type { Reading } from '../../../types';
import { CASE_STRATEGIC_PLANNING_PORTER } from '../manajemenPracticeCases';

const SVG_BCG_MATRIX = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MATRIKS PORTOFOLIO BISNIS BCG (BOSTON CONSULTING GROUP)</text>
  
  <rect x="35" y="55" width="285" height="68" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="76" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">STARS (BINTANG)</text>
  <text x="177" y="93" fill="#cbd5e1" font-size="8" text-anchor="middle">Pangsa Pasar Tinggi | Pertumbuhan Pasar Tinggi</text>
  <text x="177" y="108" fill="#94a3b8" font-size="8" text-anchor="middle">Strategi: Investasi agresif untuk pertahankan posisi</text>

  <rect x="355" y="55" width="285" height="68" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="497" y="76" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">QUESTION MARKS (TANDA TANYA)</text>
  <text x="497" y="93" fill="#cbd5e1" font-size="8" text-anchor="middle">Pangsa Pasar Rendah | Pertumbuhan Pasar Tinggi</text>
  <text x="497" y="108" fill="#94a3b8" font-size="8" text-anchor="middle">Strategi: Selektif investasi menjadi Star atau divestasi</text>

  <rect x="35" y="132" width="285" height="68" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="177" y="153" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">CASH COWS (SAPI PERAH)</text>
  <text x="177" y="170" fill="#cbd5e1" font-size="8" text-anchor="middle">Pangsa Pasar Tinggi | Pertumbuhan Pasar Rendah</text>
  <text x="177" y="185" fill="#94a3b8" font-size="8" text-anchor="middle">Strategi: Perah kas surplus untuk mendanai Stars/R&amp;D</text>

  <rect x="355" y="132" width="285" height="68" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="497" y="153" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">DOGS (ANJING)</text>
  <text x="497" y="170" fill="#cbd5e1" font-size="8" text-anchor="middle">Pangsa Pasar Rendah | Pertumbuhan Pasar Rendah</text>
  <text x="497" y="185" fill="#fca5a5" font-size="8" text-anchor="middle">Strategi: Likuidasi, perampingan, atau divestasi</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Planning, Goal Setting, & Strategic Thinking (MBO & Porter Strategies)',
  ref: 'Richard L. Daft Bab 6, 7, & 8 | Peter Drucker Management by Objectives | Michael Porter Competitive Advantage',
  intro: 'TM 5 membahas proses perencanaan organisasi dari tingkat strategis hingga operasional: hierarki tujuan organisasi (Misi Organisasi, Sasaran Strategis, Sasaran Taktis, dan Sasaran Operasional), kriteria penetapan sasaran efektif SMART (Specific, Measurable, Attainable, Relevant, Time-bound), siklus Management by Objectives (MBO), analisis lingkungan SWOT, Matriks Portofolio Bisnis BCG, serta Strategi Bersaing Generik Michael Porter (Cost Leadership, Differentiation, dan Focus).',
  objectives: [
    'Menjelaskan hierarki sasaran dan rencana: Strategis (Top), Taktis (Middle), dan Operasional (First-Line).',
    'Menerapkan 4 langkah siklus Management by Objectives (MBO) menurut Peter Drucker.',
    'Menyusun Matriks Portofolio BCG untuk mengalokasikan arus kas korporasi multi-bisnis.',
    'Menganalisis 3 Strategi Bersaing Generik Porter: Keunggulan Biaya, Diferensiasi, dan Fokus Pasar.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 5.1: Matriks Portofolio Bisnis Boston Consulting Group (BCG Matrix).',
      svg: SVG_BCG_MATRIX
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 5'
    },
    {
      kind: 'table',
      headers: ['Level Perencanaan', 'Aktor Penanggung Jawab', 'Horizon Waktu Rencana', 'Fokus Utama Aktivitas'],
      rows: [
        ['Rencana Strategis (Strategic Planning)', 'Top Management (Direksi / Board of Directors)', 'Jangka Panjang (3 s/d 5 tahun ke depan)', 'Visi korporasi, alokasi portofolio bisnis, ekspansi pasar baru, dan keunggulan kompetitif makro.'],
        ['Rencana Taktis (Tactical Planning)', 'Middle Management (Kepala Divisi / Manajer Departemen)', 'Jangka Menengah (1 s/d 2 tahun)', 'Menerjemahkan rencana strategis ke dalam tindakan departemen (Pemasaran, SDM, Keuangan, Operasi).'],
        ['Rencana Operasional (Operational Planning)', 'First-Line Management (Supervisor / Team Leader)', 'Jangka Pendek (Harian, Mingguan, Bulanan)', 'Jadwal kerja harian, standar operasi prosedur (SOP), kuota produksi, dan anggaran kas rutin.']
      ],
      caption: 'Tabel 5.0: Matriks hierarki perencanaan organisasi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 3 Strategi Bersaing Generik Michael Porter'
    },
    {
      kind: 'table',
      headers: ['Strategi Generik Porter', 'Keunggulan Strategis Utama', 'Target Pasar', 'Contoh Nyata di Indonesia'],
      rows: [
        ['Cost Leadership (Keunggulan Biaya)', 'Memproduksi barang/jasa dengan biaya terendah di industri melalui skala ekonomis raksasa.', 'Pasar Luas (Broad Market)', 'Lion Air (penerbangan berbiaya murah) dan mie instan Indomie.'],
        ['Differentiation (Diferensiasi)', 'Menawarkan produk unik bernilai tambah tinggi yang dipersepsikan berbeda dan superior oleh konsumen.', 'Pasar Luas (Broad Market)', 'Apple iPhone, Starbucks Coffee, dan mobil BMW.'],
        ['Focus Strategy (Fokus Biaya / Diferensiasi)', 'Melayani segmen pasar ceruk (niche market) sempit yang diabaikan oleh pesaing raksasa.', 'Pasar Sempit (Narrow / Niche Market)', 'Ferrari (supercar ultra-mewah) atau klinik kecantikan khusus pria.']
      ],
      caption: 'Tabel 5.1: Strategi bersaing generik Michael Porter.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Jebakan "Terjebak di Tengah" (Stuck in the Middle)',
      prompt: 'Sebuah jaringan toserba mencoba bersaing dengan supermarket diskon grosir dalam hal harga murah, sekaligus ingin menawarkan suasana belanja mewah seperti butik kelas atas. Namun, toserba ini tidak berhasil menjadi yang termurah dan juga tidak berhasil menjadi yang termewah. Jelaskan resiko kondisi ini menurut Michael Porter!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Konsep Terjebak di Tengah (Stuck in the Middle)**: Michael Porter memperingatkan bahwa perusahaan yang mencoba mengejar Keunggulan Biaya dan Diferensiasi sekaligus tanpa fokus jelas akan berakhir dengan performa laba di bawah rata-rata industri.',
            '**Penyebab Kegagalan**: Biaya operasional toserba membengkak karena dekorasi mewah (gagal Cost Leadership), namun konsumen kelas atas menganggap kualitas produknya biasa saja (gagal Diferensiasi).',
            '**Rekomendasi Strategis**: Manajemen harus memilih secara tegas satu keunggulan bersaing utama: fokus memangkas biaya untuk menjadi pemimpin harga murah ATAU fokus meningkatkan eksklusivitas layanan untuk membebankan harga premium.'
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
        ['1', 'Hierarki Sasaran & MBO', 'Penyusunan sasaran SMART dan 4 siklus Management by Objectives.', 'Mampu merumuskan indikator sasaran MBO yang terukur.'],
        ['2', 'Matriks Portofolio BCG', 'Klasifikasi Stars, Cash Cows, Question Marks, dan Dogs serta arus kasnya.', 'Mampu mengalokasikan strategi kas antar-unit bisnis.'],
        ['3', 'Strategi Generik Porter', 'Pembedaan Cost Leadership, Diferensiasi, dan Fokus Pasar.', 'Mampu menganalisis strategi keunggulan bersaing sebuah merek.']
      ],
      caption: 'Tabel 5.2: Peta penguasaan submateri TM 5 Pengantar Manajemen.'
    },
    CASE_STRATEGIC_PLANNING_PORTER,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Sasaran Harus SMART**: Sasaran yang kabur seperti "meningkatkan penjualan" tidak memotivasi; sasaran harus spesifik: "menaikkan volume penjualan produk X sebesar 15% pada kuartal IV 2026".',
        '**Cash Cow Mendanai Masa Depan**: Jangan mematikan unit bisnis Cash Cow yang matang; arus kas surplus darinya adalah sumber bahan bakar untuk mendanai riset produk Star di masa depan.',
        '**Strategi Berarti Berani Memilih**: Strategi bukan tentang melakukan segalanya, melainkan tentang berani memilih apa yang TIDAK AKAN dilakukan demi mempertahankan keunggulan bersaing.'
      ]
    }
  ]
};
