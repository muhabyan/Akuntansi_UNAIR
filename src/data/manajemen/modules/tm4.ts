import type { Reading } from '../../../types';
import { CASE_ETHICAL_DECISION } from '../manajemenPracticeCases';

const SVG_ETHICAL_FRAMEWORKS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">LIMA PENDEKATAN PENGAMBILAN KEPUTUSAN ETIS (DAFT &amp; MARCIC CH. 4)</text>
  
  <rect x="25" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">1. Utilitarian</text>
  <text x="82" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Manfaat Terbesar</text>
  <line x1="35" y1="108" x2="130" y2="108" stroke="#334155"/>
  <text x="82" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Kebaikan maksimal</text>
  <text x="82" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">untuk jumlah orang</text>
  <text x="82" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">terbanyak</text>
  <text x="82" y="180" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">(Greatest Good)</text>

  <rect x="155" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="212" y="78" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">2. Individualism</text>
  <text x="212" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Kepentingan Diri</text>
  <line x1="165" y1="108" x2="260" y2="108" stroke="#334155"/>
  <text x="212" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Tindakan etis jika</text>
  <text x="212" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">mendorong laba</text>
  <text x="212" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">jangka panjang</text>
  <text x="212" y="180" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">(Self-Interest)</text>

  <rect x="285" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="342" y="78" fill="#f59e0b" font-size="9.5" font-weight="700" text-anchor="middle">3. Moral-Rights</text>
  <text x="342" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Hak Asasi Dasar</text>
  <line x1="295" y1="108" x2="390" y2="108" stroke="#334155"/>
  <text x="342" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Menghormati hak</text>
  <text x="342" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">hidup, privasi, &amp;</text>
  <text x="342" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">kebebasan bicara</text>
  <text x="342" y="180" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">(Human Rights)</text>

  <rect x="415" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a855f7" font-size="9.5" font-weight="700" text-anchor="middle">4. Justice</text>
  <text x="472" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Keadilan Setara</text>
  <line x1="425" y1="108" x2="520" y2="108" stroke="#334155"/>
  <text x="472" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Keadilan distributif,</text>
  <text x="472" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">prosedural, dan</text>
  <text x="472" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">kompensatori</text>
  <text x="472" y="180" fill="#c084fc" font-size="8.5" font-weight="700" text-anchor="middle">(Fairness)</text>

  <rect x="545" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="602" y="78" fill="#ec4899" font-size="9.5" font-weight="700" text-anchor="middle">5. Practical</text>
  <text x="602" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Standar Publik</text>
  <line x1="555" y1="108" x2="650" y2="108" stroke="#334155"/>
  <text x="602" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">Transparan bagi</text>
  <text x="602" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">masyarakat dan</text>
  <text x="602" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">profesi profesi</text>
  <text x="602" y="180" fill="#f472b6" font-size="8.5" font-weight="700" text-anchor="middle">(Public Scrutiny)</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Managing Ethics and Social Responsibility (CSR & ESG)',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 4',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 4: Menguasai etika manajerial (*Managerial Ethics*), domain hukum tertulis vs domain etika vs domain pilihan bebas, 5 pendekatan pengambilan keputusan etis (Utilitarian, Individualism, Moral-Rights, Justice, Practical), 3 tahapan perkembangan moral Lawrence Kohlberg, Tanggung Jawab Sosial Perusahaan (Corporate Social Responsibility / CSR), model Triple Bottom Line (People, Planet, Profit), serta struktur tata kelola etika (Code of Ethics, Chief Ethics Officer, Whistleblowing).',
  objectives: [
    'Mendefinisikan Etika Manajerial sebagai standar moral perilaku yang memandu pengambilan keputusan benar versus salah.',
    'Membedakan Tiga Domain Perilaku Manusia: Domain Hukum Terkodifikasi (Legal), Domain Etika (Standar Moral Sosial), dan Domain Pilihan Bebas (Personal Free Choice).',
    'Menerapkan 5 Kerangka Kerja Pengambilan Keputusan Etis: Utilitarian, Individualisme, Hak Moral, Keadilan (Distributif, Prosedural, Kompensatori), dan Praktikal.',
    'Menjelaskan Tiga Tingkat Perkembangan Moral Lawrence Kohlberg: Preconventional (Patuh demi hindari hukuman), Conventional (Menuruti norma sosial/hukum), dan Postconventional (Berprinsip keadilan universal).',
    'Mengevaluasi Piramida Tanggung Jawab Sosial Perusahaan Archie Carroll: Ekonomi, Hukum, Etika, dan Filantropis/Diskresioner.',
    'Menjelaskan mekanisme perlindungan bagi peniup peluit (*Whistleblower Protection*).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Lima Kerangka Kerja Pengambilan Keputusan Etis (Daft & Marcic)',
      svg: SVG_ETHICAL_FRAMEWORKS,
      caption: 'Gambar 4.1: Perspektif filosofis yang digunakan manajer untuk memecahkan dilema moral bisnis.'
    },

    { kind: 'h2', text: '1. Tiga Tingkat Perkembangan Moral (Lawrence Kohlberg)' },
    {
      kind: 'table',
      headers: ['Tingkat Perkembangan Moral', 'Motivasi Perilaku Individu', 'Gaya Kepemimpinan Manajer'],
      rows: [
        ['**Tingkat 1: Preconventional (Prakonvensional)**', 'Fokus pada kepentingan diri sendiri; mematuhi aturan hanya demi menghindari hukuman atau memperoleh hadiah fisik.', '**Otokratis / Koersif**: Menggunakan kekuasaan imbalan dan hukuman.'],
        ['**Tingkat 2: Conventional (Konvensional)**', 'Menuruti ekspektasi orang lain, menjaga norma sosial, dan mematuhi undang-undang yang berlaku.', '**Berorientasi Tim & Pembimbing**: Menekankan kepatuhan aturan dan harmoni kerja bersama.'],
        ['**Tingkat 3: Postconventional / Principled (Pascakonvensional)**', 'Berpegang teguh pada prinsip-prinsip keadilan, kesetaraan, dan hak asasi manusia universal, bahkan jika bertentangan dengan hukum mayoritas.', '**Servant Leadership / Transformatif**: Memberdayakan bawahan untuk berkembang penuh dan bertindak benar secara independen.']
      ],
      caption: 'Tabel 4.1: Tahapan kematangan moral manajerial.'
    },

    CASE_ETHICAL_DECISION,

    { kind: 'h2', text: '2. Piramida Tanggung Jawab Sosial Perusahaan (Archie Carroll)' },
    {
      kind: 'ol',
      items: [
        '**1. Tanggung Jawab Ekonomi (Economic Responsibility)**: Landasan dasar; menghasilkan laba dan menciptakan nilai ekonomis bagi pemilik modal (*Be profitable*).',
        '**2. Tanggung Jawab Hukum (Legal Responsibility)**: Mematuhi seluruh undang-undang dan peraturan pemerintah yang berlaku (*Obey the law*).',
        '**3. Tanggung Jawab Etis (Ethical Responsibility)**: Melakukan apa yang adil, patut, dan benar meskipun tidak diwajibkan secara eksplisit oleh hukum (*Be ethical*).',
        '**4. Tanggung Jawab Filantropis (Discretionary / Philanthropic)**: Berkontribusi secara sukarela untuk meningkatkan kesejahteraan komunitas lokal dan keberlanjutan bumi (*Be a good corporate citizen*).'
      ]
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 4' },
    {
      kind: 'ul',
      items: [
        '**Dilema Etis**: Situasi di mana semua pilihan alternatif memiliki konsekuensi negatif potensial dan sulit membedakan benar vs salah.',
        '**Triple Bottom Line (3P)**: Mengukur kinerja organisasi tidak hanya dari Profit finansial, tetapi juga dampak sosial People dan kelestarian lingkungan Planet.',
        '**Whistleblowing**: Pengungkapan tindakan ilegal atau tidak etis di dalam organisasi oleh karyawan kepada pihak berwenang.'
      ]
    }
  ]
};