import type { Reading } from '../../../types';
import { CASE_STRATEGIC_PLANNING_PORTER } from '../manajemenPracticeCases';

const SVG_BCG_MATRIX = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="qmGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="cowGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="dogGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad5)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">MATRIKS PORTOFOLIO BISNIS BCG (BOSTON CONSULTING GROUP)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">BCG MATRIX</text>

  <!-- Y-Axis -->
  <text class="text-accent-blue" x="50" y="120" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">PERTUMBUHAN</text>
  <text class="text-accent-blue" x="50" y="135" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">PASAR TINGGI</text>
  <text class="svg-muted" x="50" y="275" fill="#94a3b8" font-size="9.5" font-weight="800" text-anchor="middle">PERTUMBUHAN</text>
  <text class="svg-muted" x="50" y="290" fill="#94a3b8" font-size="9.5" font-weight="800" text-anchor="middle">PASAR RENDAH</text>

  <!-- X-Axis -->
  <text class="text-accent-green" x="275" y="78" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">PANGSA PASAR RELATIF TINGGI</text>
  <text class="text-accent-red" x="685" y="78" fill="#f87171" font-size="10" font-weight="800" text-anchor="middle">PANGSA PASAR RELATIF RENDAH</text>

  <!-- Quadrants -->
  <g transform="translate(105, 92)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#starGrad)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="11" font-weight="800">★ STARS (BINTANG)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Pertumbuhan pasar cepat &amp; pangsa dominan</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Arus kas seimbang / butuh reinvestasi besar</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Strategi: Investasi agresif pertahankan kepemimpinan</text>
    <rect x="250" y="88" width="100" height="18" rx="9" fill="#0284c7" fill-opacity="0.3"/>
    <text class="text-accent-blue" x="300" y="101" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Masa Depan Korporasi</text>
  </g>

  <g transform="translate(490, 92)">
    <rect class="svg-card" x="0" y="0" width="370" height="115" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="370" height="28" rx="12" fill="url(#qmGrad)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="16" y="20" fill="#fbbf24" font-size="11" font-weight="800">? QUESTION MARKS (TANDA TANYA)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Pasar tumbuh cepat namun pangsa pasar tertinggal</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Menguras kas besar; belum tentu sukses</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Strategi: Suntik modal ubah ke Star ATAU Divestasi</text>
    <rect x="255" y="88" width="100" height="18" rx="9" fill="#d97706" fill-opacity="0.3"/>
    <text class="text-accent-amber" x="305" y="101" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Keputusan Kritis</text>
  </g>

  <g transform="translate(105, 218)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#cowGrad)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="11" font-weight="800">CASH COWS (SAPI PERAH)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Pertumbuhan lambat namun pangsa pasar terkuat</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Mesin pencetak arus kas positif melimpah</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Strategi: Pertahankan posisi, perah kas untuk danai Star</text>
    <rect x="250" y="88" width="100" height="18" rx="9" fill="#059669" fill-opacity="0.3"/>
    <text class="text-accent-green" x="300" y="101" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Sumber Oksigen Kas</text>
  </g>

  <g transform="translate(490, 218)">
    <rect class="svg-card" x="0" y="0" width="370" height="115" rx="12" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="370" height="28" rx="12" fill="url(#dogGrad)" fill-opacity="0.2"/>
    <text class="text-accent-red" x="16" y="20" fill="#f87171" font-size="11" font-weight="800">DOGS (ANJING)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Pasar stagnan/turun &amp; pangsa pasar sangat kecil</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Menghasilkan laba minim atau jebakan kerugian kas</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Strategi: Panen kas (Harvesting) atau Jual (Divestasi)</text>
    <rect x="255" y="88" width="100" height="18" rx="9" fill="#dc2626" fill-opacity="0.3"/>
    <text class="text-accent-red" x="305" y="101" fill="#f87171" font-size="7.5" font-weight="700" text-anchor="middle">Kandidat Divestasi</text>
  </g>
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
