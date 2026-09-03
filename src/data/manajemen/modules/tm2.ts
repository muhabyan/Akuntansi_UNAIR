import type { Reading } from '../../../types';
import { CASE_CULTURE_ENVIRONMENT_DAFT } from '../manajemenPracticeCases';

const SVG_CULTURE_DAFT = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="adapGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="achGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="invGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="consGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad2)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">4 KUADRAN TIPOLOGI BUDAYA ORGANISASI (RICHARD L. DAFT)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">CULTURE MATRIX</text>

  <!-- Y-Axis: Fokus Lingkungan -->
  <text class="text-accent-blue" x="55" y="125" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">FOKUS EKSTERNAL</text>
  <text class="text-accent-purple" x="55" y="280" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">FOKUS INTERNAL</text>
  <line x1="55" y1="140" x2="55" y2="260" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4"/>

  <!-- X-Axis: Kebutuhan Lingkungan -->
  <text class="text-accent-green" x="275" y="78" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">FLEKSIBILITAS / ADAPTASI CEPAT</text>
  <text class="text-accent-amber" x="695" y="78" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">STABILITAS / KETERATURAN</text>

  <!-- Quadrant 1: ADAPTABILITY -->
  <g transform="translate(110, 92)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#adapGrad)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="11" font-weight="800">1. ADAPTABILITY CULTURE (ADAPTASI)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Cepat merespon sinyal pasar eksternal</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Mendorong eksperimen, inovasi, &amp; risiko kreatif</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Google, Startup Fintech, E-Commerce</text>
    <rect x="265" y="88" width="85" height="18" rx="9" fill="#0284c7" fill-opacity="0.3"/>
    <text class="text-accent-blue" x="307" y="101" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Lincah &amp; Inovatif</text>
  </g>

  <!-- Quadrant 2: ACHIEVEMENT -->
  <g transform="translate(495, 92)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#achGrad)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="16" y="20" fill="#fbbf24" font-size="11" font-weight="800">2. ACHIEVEMENT CULTURE (PENCAPAIAN)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Berorientasi target penjualan &amp; pangsa pasar</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Menghargai persaingan &amp; bonus kinerja tinggi</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Lembaga Investasi Wall Street, Sales</text>
    <rect x="265" y="88" width="85" height="18" rx="9" fill="#d97706" fill-opacity="0.3"/>
    <text class="text-accent-amber" x="307" y="101" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Target &amp; Kompetitif</text>
  </g>

  <!-- Quadrant 3: INVOLVEMENT -->
  <g transform="translate(110, 218)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#invGrad)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="11" font-weight="800">3. INVOLVEMENT CULTURE (KETERLIBATAN)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Kesejahteraan, kepedulian, &amp; partisipasi staf</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Suasana kekeluargaan hangat (Clan Culture)</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Southwest Airlines, Bisnis Keluarga</text>
    <rect x="265" y="88" width="85" height="18" rx="9" fill="#059669" fill-opacity="0.3"/>
    <text class="text-accent-green" x="307" y="101" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Kekeluargaan</text>
  </g>

  <!-- Quadrant 4: CONSISTENCY -->
  <g transform="translate(495, 218)">
    <rect class="svg-card" x="0" y="0" width="365" height="115" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="365" height="28" rx="12" fill="url(#consGrad)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="16" y="20" fill="#a78bfa" font-size="11" font-weight="800">4. CONSISTENCY CULTURE (KONSISTENSI)</text>
    <text class="svg-text" x="16" y="48" fill="#cbd5e1" font-size="8.5">• Menghargai aturan resmi, SOP, &amp; hierarki</text>
    <text class="svg-text" x="16" y="66" fill="#cbd5e1" font-size="8.5">• Disiplin kerja metodis, akurasi, &amp; minim cacat</text>
    <text class="svg-text" x="16" y="84" fill="#cbd5e1" font-size="8.5">• Contoh: Pabrikasi Otomotif Presisi, Bank</text>
    <rect x="265" y="88" width="85" height="18" rx="9" fill="#7c3aed" fill-opacity="0.3"/>
    <text class="text-accent-purple" x="307" y="101" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">SOP &amp; Kepatuhan</text>
  </g>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'The Environment and Corporate Culture: Lingkungan Eksternal & Budaya Organisasi',
  ref: 'Richard L. Daft Bab 2 & 3 | Edgar Schein Organizational Culture | Analisis PESTEL & Task Environment',
  intro: 'TM 2 membahas interaksi antara organisasi dengan ekosistem lingkungannya: pemisahan Lingkungan Umum (General Environment: Politik/Hukum, Ekonomi, Sosial-Budaya, Teknologi, Lingkungan Alami, Global / PESTEL) vs Lingkungan Tugas (Task Environment: Pelanggan, Pesaing, Pemasok, Pasar Tenaga Kerja), ketidakpastian lingkungan, serta 4 Tipologi Budaya Organisasi Daft (Adaptability, Achievement, Involvement, dan Consistency Culture) dan 3 Level Budaya menurut Edgar Schein (Artifacts, Espoused Values, Underlying Assumptions).',
  objectives: [
    'Membedakan dimensi Lingkungan Umum (PESTEL) vs Lingkungan Tugas yang dihadapi perusahaan.',
    'Menganalisis derajat ketidakpastian lingkungan (Environmental Uncertainty) berdasarkan dinamika dan kompleksitas.',
    'Mengklasifikasikan budaya perusahaan ke dalam 4 tipologi Daft (Adaptability, Achievement, Involvement, Consistency).',
    'Mendiagnosa 3 lapisan budaya organisasi Edgar Schein: Artifak terlihat, Nilai-nilai yang dianut, dan Asumsi dasar tersembunyi.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 2.1: Matriks 4 Kuadran Budaya Organisasi Daft Berdasarkan Fokus Strategis dan Tuntutan Lingkungan.',
      svg: SVG_CULTURE_DAFT
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 2'
    },
    {
      kind: 'table',
      headers: ['Dimensi Lingkungan Organisasi', 'Komponen Lingkungan Kunci', 'Contoh Nyata di Indonesia', 'Dampak Strategis bagi Manajemen'],
      rows: [
        ['Lingkungan Tugas (Task)', 'Pesaing (Competitors)', 'Persaingan Alfamart vs Indomaret, Gojek vs Grab.', 'Menentukan penetapan harga, promosi, dan diferensiasi produk.'],
        ['Lingkungan Tugas (Task)', 'Konsumen (Customers)', 'Pergeseran konsumen belanja offline ke live TikTok Shop.', 'Mendorong adopsi model bisnis omnichannel instan.'],
        ['Lingkungan Tugas (Task)', 'Pemasok (Suppliers)', 'Ketergantungan pabrik mie instan pada gandum impor Australia.', 'Memerlukan manajemen risiko rantai pasok dan kontrak berjangka.'],
        ['Lingkungan Umum (General)', 'Dimensi Teknologi', 'Kecerdasan buatan generatif (Generative AI) dan otomatisasi robotik.', 'Mereduksi kebutuhan staf administrasi dan menuntut upskilling.'],
        ['Lingkungan Umum (General)', 'Dimensi Hukum & Politik', 'UU Cipta Kerja, UU Pajak HPP, dan regulasi emisi karbon.', 'Meningkatkan biaya kepatuhan hukum dan tata kelola perusahaan.']
      ],
      caption: 'Tabel 2.0: Matriks klasifikasi lingkungan eksternal organisasi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 3 Lapisan Budaya Organisasi Edgar Schein'
    },
    {
      kind: 'table',
      headers: ['Tingkatan Budaya Schein', 'Karakteristik Visibilitas', 'Wujud Konkret dalam Organisasi', 'Tingkat Kesulitan Diubah'],
      rows: [
        ['1. Artifak (Artifacts)', 'Sangat terlihat di permukaan (Visible).', 'Seragam kantor kasual, tata letak ruang kerja terbuka (open space), jargon bahasa, upacara tahunan, logo.', 'Mudah diamati dan mudah diubah secara fisik.'],
        ['2. Nilai-Nilai Dianut (Espoused Values)', 'Kesadaran tingkat menengah (Conscious).', 'Pernyataan misi resmi, semboyan integritas, nilai AKHLAK di BUMN, kode etik perusahaan.', 'Dapat diubah melalui pelatihan kepemimpinan intensif.'],
        ['3. Asumsi Dasar (Underlying Assumptions)', 'Tidak terlihat dan di bawah sadar (Invisible / Subconscious).', 'Keyakinan terdalam yang dianggap sudah semestinya benar (contoh: "manusia pada dasarnya malas dan harus diawasi ketat").', 'Sangat sulit diubah; merupakan akar perilaku sejati organisasi.']
      ],
      caption: 'Tabel 2.1: Tiga tingkatan budaya organisasi Edgar Schein.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Mendiagnosa Budaya Perusahaan Startup Fintech',
      prompt: 'Sebuah startup fintech memiliki ruangan kantor tanpa sekat dinding, karyawan bebas berpakaian kasual, jam kerja fleksibel, dan pimpinan mendorong staf untuk berani bereksperimen meluncurkan fitur baru meskipun sesekali gagal (Fail Fast, Learn Faster). Tentukan tipologi budaya organisasi Daft yang dominan!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Karakteristik Kunci**: Lingkungan industri fintech sangat dinamis, menuntut fleksibilitas tinggi, dan fokus pada respon kebutuhan pasar eksternal yang bergerak cepat.',
            '**Tipologi Budaya Daft**: Karakteristik ini mencerminkan **Adaptability Culture** (Budaya Adaptabilitas).',
            '**Nilai Utama**: Nilai yang dihargai adalah kreativitas, eksperimentasi lincah, otonomi pengambilan keputusan cepat, dan kesiapan merangkul perubahan tanpa takut disanksi.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 2'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'PESTEL & Task Environment', 'Pemisahan 6 dimensi makro dan 4 aktor mikro lingkungan tugas.', 'Mampu mengidentifikasi sumber ancaman dan peluang eksternal.'],
        ['2', '4 Tipologi Budaya Daft', 'Kombinasi fokus internal/eksternal dan kebutuhan lingkungan fleksibel/stabil.', 'Mampu mencocokkan profil perusahaan dengan tipe budaya Daft.'],
        ['3', '3 Level Budaya Schein', 'Analisis artifak fisik, nilai resmi, dan asumsi dasar bawah sadar.', 'Mampu menguraikan anatomi budaya sebuah korporasi.']
      ],
      caption: 'Tabel 2.2: Peta penguasaan submateri TM 2 Pengantar Manajemen.'
    },
    CASE_CULTURE_ENVIRONMENT_DAFT,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Budaya Memakan Strategi Saat Sarapan (Culture Eats Strategy for Breakfast)**: Ucapan terkenal Peter Drucker menegaskan bahwa sebaik apapun rencana strategis dirancang, rencana tersebut akan gagal total jika bertentangan dengan budaya organisasi internal.',
        '**Boundary-Spanning Roles**: Untuk mengatasi ketidakpastian lingkungan, manajer harus membentuk peran perentang batas (Boundary Spanning) seperti tim riset pasar dan hubungan pemerintah.',
        '**Simbol dan Cerita Membentuk Budaya**: Para pemimpin menanamkan budaya baru bukan hanya melalui instruksi memo, melainkan melalui cerita keteladanan (hero stories), slogan inspiratif, dan upacara pemberian penghargaan.'
      ]
    }
  ]
};
