import type { Reading } from '../../../types';
import { CASE_BALANCED_SCORECARD_MAP } from '../manstratPracticeCases';

const SVG_STRATEGY_MAP_BSC = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="finGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="custGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="intGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="lrnGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns10)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PETA STRATEGI 4 PERSPEKTIF BALANCED SCORECARD (KAPLAN &amp; NORTON)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">STRATEGY MAP</text>

  <!-- 4-Tier Vertical Cascade connected by Upward Arrows -->
  <!-- Tier 1: FINANCIAL PERSPECTIVE (Top) -->
  <g transform="translate(45, 70)">
    <rect class="svg-card" x="0" y="0" width="810" height="52" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="18" rx="8" fill="url(#finGrad)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="14" fill="#34d399" font-size="9" font-weight="800">1. PERSPEKTIF KEUANGAN (FINANCIAL PERSPECTIVE) - HASIL AKHIR</text>
    <text class="svg-text" x="795" y="14" fill="#cbd5e1" font-size="7.5" text-anchor="end">"Bagaimana Kita Terlihat di Mata Pemegang Saham?"</text>
    <text class="svg-text" x="14" y="36" fill="#cbd5e1" font-size="8">Sasaran: Pertumbuhan Pendapatan Usaha, Peningkatan Margin Laba Bersih, Optimalisasi ROIC/ROE, &amp; Arus Kas Bebas.</text>
  </g>

  <!-- Arrow Up 1 -->
  <polygon points="450,126 445,133 455,133" fill="#38bdf8"/>

  <!-- Tier 2: CUSTOMER PERSPECTIVE -->
  <g transform="translate(45, 133)">
    <rect class="svg-card" x="0" y="0" width="810" height="52" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="18" rx="8" fill="url(#custGrad)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="14" fill="#38bdf8" font-size="9" font-weight="800">2. PERSPEKTIF PELANGGAN (CUSTOMER PERSPECTIVE)</text>
    <text class="svg-text" x="795" y="14" fill="#cbd5e1" font-size="7.5" text-anchor="end">"Proposisi Nilai Apa yang Diberikan ke Pelanggan?"</text>
    <text class="svg-text" x="14" y="36" fill="#cbd5e1" font-size="8">Sasaran: Retensi Pelanggan, Kepuasan Pengguna (CSAT/NPS Tinggi), Kecepatan Pengiriman, &amp; Loyalitas Merek.</text>
  </g>

  <!-- Arrow Up 2 -->
  <polygon points="450,189 445,196 455,196" fill="#fbbf24"/>

  <!-- Tier 3: INTERNAL BUSINESS PROCESSES -->
  <g transform="translate(45, 196)">
    <rect class="svg-card" x="0" y="0" width="810" height="52" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="18" rx="8" fill="url(#intGrad)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="14" y="14" fill="#fbbf24" font-size="9" font-weight="800">3. PERSPEKTIF PROSES BISNIS INTERNAL (INTERNAL PROCESSES)</text>
    <text class="svg-text" x="795" y="14" fill="#cbd5e1" font-size="7.5" text-anchor="end">"Proses Internal Mana yang Harus Kita Ungguli?"</text>
    <text class="svg-text" x="14" y="36" fill="#cbd5e1" font-size="8">Sasaran: Inovasi R&amp;D Produk Baru, Keunggulan Rantai Pasok Lean, Otomasi Pabrikasi, &amp; Kepatuhan Tata Kelola ESG.</text>
  </g>

  <!-- Arrow Up 3 -->
  <polygon points="450,252 445,259 455,259" fill="#a78bfa"/>

  <!-- Tier 4: LEARNING & GROWTH (Base) -->
  <g transform="translate(45, 259)">
    <rect class="svg-card" x="0" y="0" width="810" height="52" rx="8" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="810" height="18" rx="8" fill="url(#lrnGrad)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="14" y="14" fill="#a78bfa" font-size="9" font-weight="800">4. PERSPEKTIF PEMBELAJARAN &amp; PERTUMBUHAN (LEARNING &amp; GROWTH) - FONDASI</text>
    <text class="svg-text" x="795" y="14" fill="#cbd5e1" font-size="7.5" text-anchor="end">"Bagaimana Menjaga Kemampuan Belajar &amp; Berinovasi?"</text>
    <text class="svg-text" x="14" y="36" fill="#cbd5e1" font-size="8">Sasaran: Modal Manusia (Upskilling Staf), Modal Informasi (Infrastruktur Cloud/AI), &amp; Modal Organisasi (Budaya Kerja Agile).</text>
  </g>

  <text class="svg-muted" x="450" y="332" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Hubungan Sebab-Akibat (Cause-and-Effect): Peningkatan di level Pembelajaran memicu efisiensi Proses, kepuasan Pelanggan, hingga Laba Keuangan.</text>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Strategy Maps & Balanced Scorecard: Mengubah Aset Tak Berwujud Menjadi Hasil Nyata',
  ref: 'Robert S. Kaplan & David P. Norton (Strategy Maps & The Balanced Scorecard) | Harvard Business School Press',
  intro: 'TM 10 membahas metodologi eksekusi strategi terlengkap di dunia: Balanced Scorecard (BSC) dan Peta Strategi (Strategy Maps) karya Robert S. Kaplan dan David P. Norton: mengatasi keterbatasan pengukuran akuntansi keuangan tradisional yang bersifat lagging (historis), 4 perspektif BSC yang terintegrasi (Keuangan, Pelanggan, Proses Bisnis Internal, serta Pembelajaran dan Pertumbuhan), rantai hubungan sebab-akibat (Cause-and-Effect Chain), pembedaan Lagging Indicators vs Leading Indicators, serta penyelarasan aset tak berwujud (Human Capital, Information Capital, Organization Capital) untuk menghasilkan keuntungan finansial jangka panjang.',
  objectives: [
    'Menjelaskan mengapa indikator keuangan tradisional saja gagal mencerminkan penciptaan nilai jangka panjang.',
    'Menyusun Peta Strategi (Strategy Map) yang menghubungkan 4 perspektif kinerja secara sekuensial sebab-akibat.',
    'Membedakan Leading Indicators (Indikator Penggerak Kinerja) vs Lagging Indicators (Indikator Hasil Akhir).',
    'Menyelaraskan 3 kategori aset tak berwujud (Human, Information, Organization Capital) dengan proses internal.',
    'Menerapkan proses Cascading Balanced Scorecard dari tingkat korporasi holding hingga ke level individu karyawan.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 10.1: Arsitektur Empat Perspektif Peta Strategi (Strategy Map) Robert S. Kaplan & David P. Norton.',
      svg: SVG_STRATEGY_MAP_BSC
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 10'
    },
    {
      kind: 'table',
      headers: ['Perspektif Balanced Scorecard', 'Pertanyaan Kunci Perspektif', 'Contoh KPI Baku Organisasi', 'Jenis Indikator Khas'],
      rows: [
        ['1. Keuangan (Financial)', 'Bagaimana penampilan kita di mata para pemegang saham?', 'ROI, ROE, Margin Laba Bersih, Arus Kas Bebas, Economic Value Added (EVA).', 'Lagging Indicator (Hasil Masa Lalu)'],
        ['2. Pelanggan (Customer)', 'Bagaimana penampilan kita di mata pelanggan target pasar?', 'Skor Net Promoter Score (NPS), Pangsa Pasar, Retensi Pembeli, Customer Lifetime Value.', 'Campuran (Lagging & Leading)'],
        ['3. Proses Bisnis Internal', 'Proses operasional internal apa yang harus kita kuasai dengan sempurna?', 'Waktu Siklus Manufaktur, Rasio Cacat Produksi, Waktu Respon Pengaduan, Waktu Rilis Produk Baru.', 'Leading Indicator (Pendorong Nilai)'],
        ['4. Pembelajaran & Pertumbuhan', 'Bagaimana kita mempertahankan kemampuan berubah dan terus berkembang?', 'Jam Pelatihan Karyawan, Tingkat Kesiapan Sistem TI, Indeks Keselarasan Budaya, Tingkat Retensi Talenta Kunci.', 'Leading Indicator (Akar Fondasi)']
      ],
      caption: 'Tabel 10.0: Matriks 4 perspektif Balanced Scorecard.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 3 Kategori Modal Tak Berwujud (Intangible Capital)'
    },
    {
      kind: 'table',
      headers: ['Kategori Modal Tak Berwujud', 'Definisi Komponen Strategis', 'Pengaruh pada Rantai Sebab-Akibat'],
      rows: [
        ['Human Capital (Modal Manusia)', 'Ketersediaan keterampilan, bakat, dan pengetahuan para karyawan untuk menjalankan aktivitas strategi.', 'Karyawan yang terampil mampu mengoperasikan teknologi baru tanpa kesalahan proses.'],
        ['Information Capital (Modal Informasi)', 'Ketersediaan sistem informasi, jaringan, database, dan infrastruktur perangkat lunak analitis.', 'Database yang akurat memberikan data real-time bagi staf untuk melayani konsumen.'],
        ['Organization Capital (Modal Organisasi)', 'Kemampuan korporasi memobilisasi budaya, kepemimpinan, kerja tim, dan keselarasan visi bersama.', 'Budaya kerja sama meruntuhkan sekat ego fungsional dan mempercepat inovasi produk.']
      ],
      caption: 'Tabel 10.1: Tiga pilar modal tak berwujud menurut Kaplan & Norton.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Menghubungkan Rantai Sebab-Akibat di Rumah Sakit',
      prompt: 'Sebuah rumah sakit swasta mengalami penurunan profitabilitas dan banyak pasien komplain mengenai waktu tunggu antrian poli rawat jalan yang mencapai 4 jam. Bagaimana merancang Strategy Map 4 perspektif untuk menyelesaikan krisis ini?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Penyusunan Rantai Hubungan Sebab-Akibat (Bawah ke Atas)**:\n1. **Learning & Growth**: Menyelenggarakan pelatihan sistem rekam medis elektronik bagi seluruh perawat dan dokter (Human Capital) serta menginstal sistem pendaftaran daring via aplikasi ponsel (Information Capital).\n2. **Internal Business Process**: Mengurangi waktu tunggu antrian poli dari 4 jam menjadi 20 menit (*Cycle Time Reduction*) dan mengeliminasi kesalahan berkas medis pasien.\n3. **Customer Perspective**: Kepuasan pasien meningkat drastis (*Patient Satisfaction Score naik ke 95%*) dan rekomendasi dari mulut ke mulut pasien melonjak.\n4. **Financial Perspective**: Jumlah kunjungan pasien rawat jalan naik 40%, utilitas ruang lab/radiologi optimal, dan laba operasional rumah sakit pulih mencetak rekor baru.',
            '**Pelajaran**: Keberhasilan finansial di puncak selalu berakar dari perbaikan kompetensi SDM dan sistem TI di dasar fondasi.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 10'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Keterbatasan Ukuran Keuangan', 'Analisis kelemahan lagging indicators akuntansi finansial.', 'Mampu mengidentifikasi kegagalan evaluasi kinerja moneter sempit.'],
        ['2', 'Arsitektur Strategy Map', 'Perancangan rantai sebab-akibat lintas 4 perspektif BSC.', 'Mampu menggambar peta strategi korporasi yang koheren.'],
        ['3', 'Lagging vs Leading Indicators', 'Pembedaan metrik hasil akhir vs metrik pendorong proses harian.', 'Mampu menetapkan KPI operasional yang relevan bagi departemen.']
      ],
      caption: 'Tabel 10.2: Peta penguasaan submateri TM 10 Manajemen Strategik.'
    },
    CASE_BALANCED_SCORECARD_MAP,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Jika Anda Tidak Bisa Mengukurnya, Anda Tidak Bisa Mengelolanya**: Doktrin Kaplan & Norton menegaskan bahwa strategi yang abstrak harus diterjemahkan menjadi sasaran (*Objectives*), ukuran (*Measures*), target (*Targets*), dan inisiatif (*Initiatives*).',
        '**Laba Adalah Akibat, Bukan Sebab**: Laba finansial hanyalah buah dari pohon yang akarnya adalah kepuasan pelanggan dan batangnya adalah keunggulan proses internal.',
        '**Strategy Map Menceritakan Kisah Strategi**: Peta strategi yang baik harus mampu dibaca layaknya sebuah cerita naratif yang logis dari bawah ke atas mengenai bagaimana perusahaan menciptakan nilai berkelanjutan.'
      ]
    }
  ]
};
