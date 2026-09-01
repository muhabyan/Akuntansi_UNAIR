import type { Reading } from '../../../types';
import { CASE_CULTURE_ENVIRONMENT_DAFT } from '../manajemenPracticeCases';

const SVG_CULTURE_DAFT = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">4 KUADRAN TIPOLOGI BUDAYA ORGANISASI (RICHARD L. DAFT)</text>
  
  <rect x="35" y="55" width="285" height="68" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="76" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">ADAPTABILITY CULTURE</text>
  <text x="177" y="93" fill="#cbd5e1" font-size="8" text-anchor="middle">Fokus: Eksternal | Lingkungan: Dinamis</text>
  <text x="177" y="108" fill="#94a3b8" font-size="8" text-anchor="middle">Inovasi lincah, berani risiko (Apple, Gojek)</text>

  <rect x="355" y="55" width="285" height="68" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="497" y="76" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">ACHIEVEMENT CULTURE</text>
  <text x="497" y="93" fill="#cbd5e1" font-size="8" text-anchor="middle">Fokus: Eksternal | Lingkungan: Stabil</text>
  <text x="497" y="108" fill="#94a3b8" font-size="8" text-anchor="middle">Berorientasi hasil, kompetitif (Investment Bank)</text>

  <rect x="35" y="132" width="285" height="68" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="177" y="153" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">INVOLVEMENT CULTURE</text>
  <text x="177" y="170" fill="#cbd5e1" font-size="8" text-anchor="middle">Fokus: Internal | Lingkungan: Fleksibel</text>
  <text x="177" y="185" fill="#94a3b8" font-size="8" text-anchor="middle">Kekeluargaan, kepedulian karyawan (Southwest)</text>

  <rect x="355" y="132" width="285" height="68" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="497" y="153" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">CONSISTENCY CULTURE</text>
  <text x="497" y="170" fill="#cbd5e1" font-size="8" text-anchor="middle">Fokus: Internal | Lingkungan: Stabil</text>
  <text x="497" y="185" fill="#94a3b8" font-size="8" text-anchor="middle">Tertib aturan, metodis, kepatuhan SOP (Bank/BUMN)</text>
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
