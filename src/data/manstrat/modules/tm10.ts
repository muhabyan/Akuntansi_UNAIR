import type { Reading } from '../../../types';
import { CASE_BALANCED_SCORECARD_MAP } from '../manstratPracticeCases';

const SVG_STRATEGY_MAP_BSC = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="28" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">ARSITEKTUR STRATEGY MAP &amp; BALANCED SCORECARD (KAPLAN &amp; NORTON)</text>
  
  <rect x="30" y="42" width="620" height="34" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="340" y="58" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">1. FINANCIAL PERSPECTIVE (HASIL AKHIR PEMEGANG SAHAM)</text>
  <text x="340" y="70" fill="#cbd5e1" font-size="8" text-anchor="middle">Pertumbuhan Pendapatan, Produktivitas Biaya, Nilai Pemegang Saham (ROE, EVA)</text>

  <rect x="30" y="82" width="620" height="34" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="98" fill="#4ade80" font-size="9.5" font-weight="700" text-anchor="middle">2. CUSTOMER PERSPECTIVE (PROPOSISI NILAI KONSUMEN)</text>
  <text x="340" y="110" fill="#cbd5e1" font-size="8" text-anchor="middle">Kepuasan Nasabah, Retensi Pelanggan, Akuisisi Pasar, Hubungan Kemitraan</text>

  <rect x="30" y="122" width="620" height="34" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="340" y="138" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">3. INTERNAL BUSINESS PROCESS (PROSES RANTAI NILAI UTAMA)</text>
  <text x="340" y="150" fill="#cbd5e1" font-size="8" text-anchor="middle">Manajemen Operasi, Manajemen Inovasi, Manajemen Pelanggan, Regulasi &amp; Sosial</text>

  <rect x="30" y="162" width="620" height="34" rx="6" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="340" y="178" fill="#a78bfa" font-size="9.5" font-weight="700" text-anchor="middle">4. LEARNING &amp; GROWTH PERSPECTIVE (FONDASI ASET TAK BERWUJUD)</text>
  <text x="340" y="190" fill="#cbd5e1" font-size="8" text-anchor="middle">Modal Manusia (Kompetensi), Modal Informasi (Sistem IT), Modal Organisasi (Budaya &amp; Visi)</text>
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
