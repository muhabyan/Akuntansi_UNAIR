import type { Reading } from '../../../types';
import { CASE_ETHICAL_DECISION_CSR } from '../manajemenPracticeCases';

const SVG_CARROLL_CSR = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="etGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="legGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="ecGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad4)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PIRAMIDA TANGGUNG JAWAB SOSIAL PERUSAHAAN (ARCHIE B. CARROLL)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">CSR PYRAMID</text>

  <!-- Left: Visual 4-Tier Pyramid -->
  <polygon points="250,75 190,135 310,135" fill="url(#phGrad)" stroke="#c4b5fd" stroke-width="1.5"/>
  <text x="250" y="120" fill="#0f172a" font-size="10" font-weight="800" text-anchor="middle">FILANTROPIS</text>

  <polygon points="187,140 135,200 365,200 313,140" fill="url(#etGrad)" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="250" y="175" fill="#0f172a" font-size="10" font-weight="800" text-anchor="middle">ETIS (ETHICAL)</text>

  <polygon points="132,205 80,265 420,265 368,205" fill="url(#legGrad)" stroke="#86efac" stroke-width="1.5"/>
  <text x="250" y="240" fill="#0f172a" font-size="10.5" font-weight="800" text-anchor="middle">HUKUM (LEGAL)</text>

  <polygon points="77,270 25,330 475,330 423,270" fill="url(#ecGrad)" stroke="#fde047" stroke-width="1.5"/>
  <text x="250" y="305" fill="#0f172a" font-size="11" font-weight="800" text-anchor="middle">EKONOMI (ECONOMIC) - FONDASI DASAR</text>

  <!-- Right: Explanatory Cards for Each Tier -->
  <g transform="translate(505, 75)">
    <rect class="svg-subcard" x="0" y="0" width="365" height="58" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1"/>
    <text class="text-accent-purple" x="14" y="20" fill="#a78bfa" font-size="9.5" font-weight="700">4. TANGGUNG JAWAB FILANTROPIS</text>
    <text class="svg-text" x="14" y="36" fill="#cbd5e1" font-size="8">Kontribusi sukarela: Beasiswa, amal, dan pemberdayaan komunitas.</text>
    <text class="svg-muted" x="14" y="48" fill="#94a3b8" font-size="7.5" font-style="italic">"Be a good corporate citizen" (Diharapkan masyarakat)</text>

    <rect class="svg-subcard" x="0" y="65" width="365" height="58" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="14" y="85" fill="#38bdf8" font-size="9.5" font-weight="700">3. TANGGUNG JAWAB ETIS</text>
    <text class="svg-text" x="14" y="101" fill="#cbd5e1" font-size="8">Menjalankan bisnis secara adil dan bermoral melampaui aturan tertulis.</text>
    <text class="svg-muted" x="14" y="113" fill="#94a3b8" font-size="7.5" font-style="italic">"Be ethical &amp; do what is right" (Diharapkan masyarakat)</text>

    <rect class="svg-subcard" x="0" y="130" width="365" height="58" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1"/>
    <text class="text-accent-green" x="14" y="150" fill="#34d399" font-size="9.5" font-weight="700">2. TANGGUNG JAWAB HUKUM</text>
    <text class="svg-text" x="14" y="166" fill="#cbd5e1" font-size="8">Mematuhi seluruh regulasi ketenagakerjaan, pajak, dan lingkungan.</text>
    <text class="svg-muted" x="14" y="178" fill="#94a3b8" font-size="7.5" font-style="italic">"Obey the law" (Kewajiban mutlak masyarakat)</text>

    <rect class="svg-subcard" x="0" y="195" width="365" height="58" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
    <text class="text-accent-amber" x="14" y="215" fill="#fbbf24" font-size="9.5" font-weight="700">1. TANGGUNG JAWAB EKONOMI</text>
    <text class="svg-text" x="14" y="231" fill="#cbd5e1" font-size="8">Menghasilkan laba, menciptakan lapangan kerja, &amp; efisiensi biaya.</text>
    <text class="svg-muted" x="14" y="243" fill="#94a3b8" font-size="7.5" font-style="italic">"Be profitable" (Fondasi dasar kelangsungan hidup korporasi)</text>
  </g>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Managing Ethics and Social Responsibility (CSR & ESG)',
  ref: 'Richard L. Daft Bab 5 | Archie Carroll CSR Pyramid | 4 Pendekatan Etika & Kerangka Triple Bottom Line',
  intro: 'TM 4 membahas dimensi moral dalam pengambilan keputusan bisnis: domain hukum vs etika vs kebebasan individu, 4 pendekatan etika manajerial (Utilitarian, Individualism, Moral-Rights, Justice Approach), tahapan perkembangan moral Lawrence Kohlberg, Piramida Tanggung Jawab Sosial Korporasi (Archie B. Carroll: Ekonomi, Hukum, Etis, Filantropis), serta evolusi keberlanjutan bisnis modern melalui kerangka Triple Bottom Line (People, Planet, Profit) dan Environmental, Social, and Governance (ESG).',
  objectives: [
    'Membedakan 3 domain tindakan manusia: Hukum yang Dikodifikasi, Etika, dan Pilihan Bebas Individu.',
    'Menerapkan 4 pendekatan etika manajerial dalam memecahkan dilema bisnis yang ambigu.',
    'Menganalisis 4 tingkatan piramida CSR Archie Carroll: Ekonomi, Hukum, Etis, dan Filantropis.',
    'Menjelaskan integrasi prinsip Environmental, Social, and Governance (ESG) dalam penciptaan nilai jangka panjang.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 4.1: Piramida Tanggung Jawab Sosial Perusahaan (Carrolls CSR Pyramid).',
      svg: SVG_CARROLL_CSR
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 4'
    },
    {
      kind: 'table',
      headers: ['Pendekatan Etika Manajerial', 'Prinsip Penentuan Keputusan Moral', 'Contoh Kasus Pengambilan Keputusan', 'Kelemahan / Risiko Pendekatan'],
      rows: [
        ['Pendekatan Utilitarian', 'Memilih alternatif yang menghasilkan kebaikan terbesar bagi jumlah orang terbanyak.', 'Menutup satu pabrik cabang yang merugi demi menyelamatkan ribuan pekerja di pabrik utama.', 'Bisa mengorbankan hak dasar kelompok minoritas demi kepentingan mayoritas.'],
        ['Pendekatan Individualisme', 'Tindakan benar secara moral jika mempromosikan kepentingan pribadi jangka panjang terbaik.', 'Menolak memberi suap kepada pejabat agar perusahaan tidak terkena sanksi hukum di masa depan.', 'Rentan disalahartikan sebagai justifikasi keserakahan jangka pendek.'],
        ['Pendekatan Hak Moral (Moral-Rights)', 'Menghormati hak asasi manusia dasar yang tidak boleh dilanggar (privasi, kebebasan berbicara, keselamatan).', 'Melarang pemantauan CCTV di ruang istirahat pribadi dan menolak jam kerja yang membahayakan nyawa.', 'Dapat menghambat efisiensi operasional dan manajemen kontrol.'],
        ['Pendekatan Keadilan (Justice)', 'Standar keadilan distributive (distribusi adil), procedural (prosedur transparan), dan compensatory (ganti rugi).', 'Memberikan upah setara untuk pekerjaan yang sama (Equal Pay for Equal Work) tanpa diskriminasi gender.', 'Sulit mendefinisikan apa yang adil bagi pihak-pihak yang memiliki kepentingan berbeda.']
      ],
      caption: 'Tabel 4.0: Matriks 4 pendekatan etika manajerial dalam pengambilan keputusan.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 3 Tingkat Perkembangan Moral Lawrence Kohlberg'
    },
    {
      kind: 'table',
      headers: ['Tingkatan Moral Kohlberg', 'Fokus Pertimbangan Moral', 'Perilaku Manajer di Tempat Kerja', 'Gaya Kepemimpinan'],
      rows: [
        ['Tingkat 1: Pra-Konvensional (Pre-Conventional)', 'Fokus pada diri sendiri: Menghindari hukuman fisik dan mengejar imbalan langsung.', 'Mematuhi aturan hanya jika diawasi atasan; mencari keuntungan pribadi semata.', 'Kepemimpinan Otokratis / Memaksa.'],
        ['Tingkat 2: Konvensional (Conventional)', 'Fokus pada harapan sosial: Memenuhi ekspektasi masyarakat, rekan kerja, dan hukum tertulis.', 'Menjadi pemain tim yang patuh norma kelompok dan menjaga keharmonisan organisasi.', 'Kepemimpinan Berorientasi Hubungan & Tim.'],
        ['Tingkat 3: Pasca-Konvensional (Post-Conventional)', 'Fokus pada prinsip universal: Bertindak berdasarkan keadilan dan nilai moral internal meskipun melawan hukum atau tekanan kelompok.', 'Berani menjadi Whistleblower membongkar korupsi internal demi membela kebenaran.', 'Kepemimpinan Visioner / Pelayan (Servant).']
      ],
      caption: 'Tabel 4.1: Tahapan perkembangan moral Kohlberg.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Evaluasi Kasus Penarikan Produk Cacat (Product Recall)',
      prompt: 'Sebuah pabrik makanan bayi mendeteksi adanya potensi kontaminasi bakteri dalam 0,1% produk yang telah beredar di supermarket. Hukum belum mewajibkan penarikan karena belum ada laporan korban sakit, dan penarikan produk (recall) akan memicu kerugian finansial Rp 50 Miliar. Apa tindakan manajer yang berada di level moral Pasca-Konvensional Kohlberg?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Tindakan Manajer Moral Level 3 (Pasca-Konvensional)**: Manajer akan segera melakukan **Penarikan Produk Massal Sukarela (Voluntary Recall)** dan mengumumkan bahaya tersebut secara transparan ke publik.',
            '**Landasan Etika**: Keselamatan nyawa bayi merupakan nilai universal tertinggi (*Moral-Rights Approach*) yang mutlak tidak dapat ditukar dengan kerugian finansial Rp 50 Miliar atau ketiadaan sanksi hukum formal.',
            '**Dampak Reputasi Jangka Panjang**: Langkah etis ini (seperti kasus klasik Tylenol Johnson & Johnson) justru menyelamatkan reputasi korporasi dan membangun kepercayaan abadi dari konsumen di masa depan.'
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
        ['1', '4 Pendekatan Etika', 'Pembedaan utilitarian, individualisme, hak moral, dan keadilan distributive/procedural.', 'Mampu menganalisis studi kasus dilema etika bisnis.'],
        ['2', 'Piramida CSR Carroll', 'Hierarki 4 tanggung jawab: ekonomi, hukum, etis, dan filantropis.', 'Mampu memetakan program tanggung jawab sosial perusahaan.'],
        ['3', 'Kerangka ESG & Triple Bottom Line', 'Integrasi pilar Lingkungan, Sosial, dan Tata Kelola dalam strategi korporasi.', 'Mampu mengevaluasi laporan keberlanjutan (Sustainability Report).']
      ],
      caption: 'Tabel 4.2: Peta penguasaan submateri TM 4 Pengantar Manajemen.'
    },
    CASE_ETHICAL_DECISION_CSR,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Legal Belum Tentu Etis**: Hukum adalah batas standar minimal yang disepakati masyarakat; tindakan yang legal secara formal dapat tetap sangat tidak etis di mata moralitas publik.',
        '**Landasan Ekonomi Adalah Fondasi Piramida**: Perusahaan tidak dapat menjalankan tanggung jawab etis atau filantropis jika gagal menghasilkan laba (tanggung jawab ekonomi dasar) untuk mempertahankan kelangsungan hidup usahanya.',
        '**Whistleblower Butuh Perlindungan Formal**: Manajemen wajib menyediakan saluran pengaduan pelanggaran anonim (Whistleblowing System) yang menjamin pelapor bebas dari ancaman pembalasan karier.'
      ]
    }
  ]
};
