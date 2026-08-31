import type { Reading } from '../../../types';
import { CASE_CULTURE_ENVIRONMENT } from '../manajemenPracticeCases';

const SVG_CULTURE_MATRIX = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">EMPAT TIPE BUDAYA ORGANISASI (DAFT &amp; MARCIC CULTURE MATRIX)</text>
  
  <!-- Adaptability Box -->
  <rect x="40" y="55" width="280" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="180" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. Adaptability Culture</text>
  <text x="180" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Fokus Eksternal &amp; Fleksibilitas Tinggi</text>
  <text x="180" y="112" fill="#34d399" font-size="9.5" font-weight="600" text-anchor="middle">(Inovasi Cepat &amp; Responsif Pasar)</text>

  <!-- Achievement Box -->
  <rect x="360" y="55" width="280" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="500" y="78" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">2. Achievement Culture</text>
  <text x="500" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Fokus Eksternal &amp; Stabilitas Terarah</text>
  <text x="500" y="112" fill="#fbbf24" font-size="9.5" font-weight="600" text-anchor="middle">(Target Kinerja &amp; Kompetitif Agresif)</text>

  <!-- Involvement Box -->
  <rect x="40" y="135" width="280" height="70" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="180" y="158" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">3. Involvement / Clan Culture</text>
  <text x="180" y="176" fill="#cbd5e1" font-size="9" text-anchor="middle">Fokus Internal &amp; Fleksibilitas Partisipatif</text>
  <text x="180" y="192" fill="#7dd3fc" font-size="9.5" font-weight="600" text-anchor="middle">(Kekeluargaan &amp; Kesejahteraan Karyawan)</text>

  <!-- Consistency Box -->
  <rect x="360" y="135" width="280" height="70" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="500" y="158" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">4. Consistency Culture</text>
  <text x="500" y="176" fill="#cbd5e1" font-size="9" text-anchor="middle">Fokus Internal &amp; Stabilitas Prosedural</text>
  <text x="500" y="192" fill="#c084fc" font-size="9.5" font-weight="600" text-anchor="middle">(Kepatuhan SOP, Disiplin, &amp; Ketertiban)</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'The Environment and Corporate Culture: Lingkungan Eksternal & Budaya Organisasi',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 2',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 2: Menguasai analisis Lingkungan Eksternal (Lingkungan Tugas / *Task Environment*: Pelanggan, Pesaing, Pemasok, Pasar Tenaga Kerja vs Lingkungan Umum / *General Environment*: Teknologi, Alami, Sosial-Budaya, Ekonomi, Hukum-Politik, Internasional), dimensi ketidakpastian lingkungan (*Environmental Uncertainty*), 4 tipologi Budaya Organisasi Daft (Adaptability, Achievement, Involvement, Consistency), serta peran Kepemimpinan Budaya (*Cultural Leadership*) dalam membangun organisasi berkinerja tinggi.',
  objectives: [
    'Menganalisis komponen Lingkungan Tugas (Task Environment) yang berinteraksi langsung dengan organisasi setiap hari.',
    'Menganalisis 6 dimensi Lingkungan Umum (General Environment) yang mempengaruhi organisasi secara tidak langsung.',
    'Menjelaskan strategi organisasi dalam merespons ketidakpastian lingkungan (Boundary-spanning roles, Kemitraan antarorganisasi / Interorganizational partnerships, Merger & Joint Ventures).',
    'Mengidentifikasi simbol-simbol kasat mata dan nilai-nilai tersembunyi pembentuk Budaya Organisasi (Simbol, Cerita / Stories, Pahlawan / Heroes, Slogan, dan Upacara / Ceremonies).',
    'Membandingkan 4 tipe budaya organisasi berdasarkan matriks Fokus Strategis vs Kebutuhan Lingkungan.',
    'Menerapkan peran Cultural Leader dalam menyelaraskan budaya dengan strategi kinerja tinggi.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Empat Tipologi Budaya Organisasi (Daft & Marcic)',
      svg: SVG_CULTURE_MATRIX,
      caption: 'Gambar 2.1: Klasifikasi budaya berdasarkan fokus internal/eksternal dan kebutuhan stabilitas/fleksibilitas lingkungan.'
    },

    { kind: 'h2', text: '1. Komponen Lingkungan Tugas vs Lingkungan Umum' },
    {
      kind: 'table',
      headers: ['Kategori Lingkungan', 'Elemen Komponen', 'Dampak Terhadap Keputusan Manajemen'],
      rows: [
        ['**I. Lingkungan Tugas (Task Environment)**', '1. Pelanggan (Customers)\n2. Pesaing (Competitors)\n3. Pemasok (Suppliers)\n4. Pasar Tenaga Kerja (Labor Market)', 'Mempengaruhi transaksi operasional harian secara langsung; menuntut diferensiasi produk, negosiasi harga bahan baku, dan perekrutan talenta terampil.'],
        ['**II. Lingkungan Umum (General Environment)**', '1. Teknologi (AI, Cloud, Robotika)\n2. Alamiah / Lingkungan Fisik (ESG)\n3. Sosial Budaya (Demografi, Gaya Hidup)\n4. Ekonomi (Inflasi, Suku Bunga, PDB)\n5. Hukum & Politik (Regulasi, Pajak)\n6. Internasional (Globalisasi, Tarif)', 'Menciptakan peluang atau ancaman makro jangka panjang yang memaksa organisasi mengubah model bisnis secara fundamental.']
      ],
      caption: 'Tabel 2.1: Pemilahan komponen lingkungan eksternal organisasi.'
    },

    { kind: 'h2', text: '2. Lima Unsur Terlihat Pembentuk Budaya Organisasi' },
    {
      kind: 'ul',
      items: [
        '**Simbol (Symbols)**: Objek, tindakan, atau peristiwa yang memiliki makna khusus (misal: tata ruang kantor terbuka tanpa sekat untuk melambangkan kesetaraan).',
        '**Cerita (Stories)**: Narasi berbasis kisah nyata yang diceritakan berulang-ulang untuk mengilustrasikan nilai-nilai utama perusahaan (misal kisah pendiri merintis dari garasi).',
        '**Pahlawan (Heroes)**: Sosok figur teladan yang menjadi model peran perilaku terpuji bagi karyawan.',
        '**Slogan (Slogans)**: Frasa ringkas yang mengekspresikan nilai budaya utama (misal *“Think Different”* atau *“Customer First”*).',
        '**Upacara (Ceremonies)**: Acara formal yang direncanakan untuk merayakan momen pencapaian penting dan memperkuat ikatan kebersamaan.'
      ]
    },

    CASE_CULTURE_ENVIRONMENT,

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 2' },
    {
      kind: 'ul',
      items: [
        '**High-Performance Culture**: Budaya yang menyeimbangkan antara nilai-nilai budaya yang kuat dengan dorongan pencapaian kinerja bisnis yang tinggi.',
        '**Boundary-Spanning**: Peran karyawan (seperti tim riset pasar dan humas) untuk mendeteksi sinyal perubahan di lingkungan luar.',
        '**Cultural Leader**: Pemimpin yang secara konsisten mengomunikasikan visi melalui tindakan nyata dan pemberian penghargaan.'
      ]
    }
  ]
};