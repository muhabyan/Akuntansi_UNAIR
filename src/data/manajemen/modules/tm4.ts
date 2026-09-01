import type { Reading } from '../../../types';
import { CASE_ETHICAL_DECISION_CSR } from '../manajemenPracticeCases';

const SVG_CARROLL_CSR = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PIRAMIDA TANGGUNG JAWAB SOSIAL PERUSAHAAN (ARCHIE B. CARROLL)</text>
  
  <polygon points="340,50 430,85 250,85" fill="#a78bfa" stroke="#c4b5fd" stroke-width="1.5"/>
  <text x="340" y="74" fill="#ffffff" font-size="8.5" font-weight="700" text-anchor="middle">1. FILANTROPIS (Jadilah Warga Baik)</text>

  <polygon points="250,88 430,88 470,123 210,123" fill="#38bdf8" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="340" y="109" fill="#0f172a" font-size="9" font-weight="700" text-anchor="middle">2. ETIS (Lakukan Hal yang Benar &amp; Adil)</text>

  <polygon points="210,126 470,126 510,161 170,161" fill="#fbbf24" stroke="#fde047" stroke-width="1.5"/>
  <text x="340" y="147" fill="#0f172a" font-size="9" font-weight="700" text-anchor="middle">3. HUKUM (Patuhi Hukum &amp; Regulasi Negara)</text>

  <polygon points="170,164 510,164 550,200 130,200" fill="#4ade80" stroke="#86efac" stroke-width="1.5"/>
  <text x="340" y="185" fill="#0f172a" font-size="9.5" font-weight="700" text-anchor="middle">4. EKONOMI (Hasilkan Keuntungan &amp; Bernilai Ekonomis)</text>
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
