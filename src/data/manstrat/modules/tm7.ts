import type { Reading } from '../../../types';
import { CASE_AMBIDEXTROUS_ORGANIZATIONAL_DESIGN } from '../manstratPracticeCases';

const SVG_AMBIDEXTROUS_DESIGN = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">DESAIN ORGANISASI AMBIDEXTROUS: EKSPLOITASI VS EKSPLORASI (DESS ET AL.)</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">BISNIS INTI EKSPLOITASI</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Cash Cows / Efisiensi Operasional):</text>
  <text x="177" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Struktur mekanistik kaku &amp; disiplin</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Inovasi bertahap (Incremental)</text>
  <text x="177" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kontrol biaya &amp; marjin laba</text>
  <text x="177" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Sumber Arus Kas Hari Ini</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="497" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">UNIT INOVASI EKSPLORASI</text>
  <text x="497" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Venture Baru / Riset Disruptif):</text>
  <text x="497" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Struktur organik lincah (Agile Squads)</text>
  <text x="497" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Eksperimen radikal &amp; berani gagal</text>
  <text x="497" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Otonomi tinggi dari birokrasi induk</text>
  <text x="497" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Pertumbuhan Masa Depan</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Organizational Design, Strategic Leadership, & Corporate Entrepreneurship',
  ref: 'Dess et al. Bab 10, 11, & 12 | OReilly & Tushman Ambidextrous Organization | Strategic Leadership & Ethics',
  intro: 'TM 7 membahas penyelarasan desain struktur organisasi dengan kepemimpinan strategis dan kewirausahaan korporasi: arsitektur Desain Organisasi Ambidextrous (Ambidextrous Organizational Design yang memfasilitasi eksploitasi dan eksplorasi secara simultan), 3 aktivitas kunci kepemimpinan strategis (Menetapkan Arah Strategis, Mendesain Organisasi, dan Memupuk Budaya Beretika), mengatasi hambatan perubahan organisasi, serta instrumen Kewirausahaan Korporasi (Corporate Entrepreneurship: Corporate Venture Capital dan Inkubator Bisnis).',
  objectives: [
    'Menganalisis arsitektur Organisasi Ambidextrous dalam menyeimbangkan eksploitasi bisnis inti vs eksplorasi ide disruptif.',
    'Menjelaskan 3 pilar aktivitas kepemimpinan strategis: Menetapkan Arah, Merancang Organisasi, Memupuk Budaya Etis.',
    'Mengidentifikasi dan mengatasi 5 hambatan kepemimpinan terhadap perubahan strategis (Vested Interest, Political Barriers).',
    'Menerapkan instrumen Corporate Entrepreneurship: New Venture Groups, Business Incubators, dan Corporate Venture Capital.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 7.1: Desain Organisasi Ambidextrous dalam Menyeimbangkan Eksploitasi Efisiensi dan Eksplorasi Inovasi.',
      svg: SVG_AMBIDEXTROUS_DESIGN
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 7'
    },
    {
      kind: 'table',
      headers: ['Aktivitas Kepemimpinan Strategis', 'Tanggung Jawab Eksekutif Kunci', 'Output Nyata bagi Korporasi', 'Tantangan Terberat'],
      rows: [
        ['1. Menetapkan Arah Strategis (Setting Direction)', 'Merumuskan visi masa depan yang memikat, peta jalan transformasi, dan sasaran jangka panjang.', 'Visi bersama yang menyatukan ribuan karyawan di semua level.', 'Mengatasi pandangan sempit (tunnel vision) para manajer divisi.'],
        ['2. Merancang Organisasi (Designing Organization)', 'Membangun struktur yang memfasilitasi kolaborasi lintas divisi dan alokasi sumber daya.', 'Struktur ambidextrous yang memisahkan eksplorasi namun tetap terintegrasi.', 'Resistensi dari manajer bisnis lama yang takut kehilangan anggaran modal.'],
        ['3. Memupuk Budaya Beretika (Nurturing Ethical Culture)', 'Menjadi teladan moral, membuat kode etik tegas, dan melindungi pelapor pelanggaran (whistleblower).', 'Integritas korporasi, kepatuhan tata kelola, dan kepercayaan pemangku kepentingan.', 'Godaan memanipulasi kinerja keuangan jangka pendek demi bonus direksi.']
      ],
      caption: 'Tabel 7.0: Tiga pilar aktivitas kepemimpinan strategis Dess et al.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 5 Hambatan Kepemimpinan Terhadap Perubahan Strategis'
    },
    {
      kind: 'table',
      headers: ['Jenis Hambatan Perubahan', 'Akar Penyebab Hambatan', 'Strategi Kepemimpinan untuk Mengatasi'],
      rows: [
        ['Vested Interests in the Status Quo', 'Manajer senior merasa nyaman dengan kekuasaan dan gaji dari sistem bisnis lama.', 'Menghubungkan bonus insentif masa depan dengan keberhasilan adopsi strategi baru.'],
        ['Systemic Barriers', 'Struktur organisasi dan sistem pelaporan yang terlalu birokratis dan kaku.', 'Membentuk tim proyek lintas fungsi mandiri (Agile Squads) di luar rantai komando biasa.'],
        ['Behavioral Barriers', 'Karyawan terbiasa memandang masalah dari perspektif fungsional sempit (silo mentality).', 'Melakukan rotasi kepemimpinan lintas departemen dan pelatihan holistik.'],
        ['Political Barriers', 'Perebutan kekuasaan dan persaingan pengaruh antar faksi eksekutif puncak.', 'Membangun koalisi kepemimpinan baru yang berkomitmen pada transformasi korporasi.'],
        ['Personal Time Constraints', 'Para pemimpin terlalu sibuk memadamkan api masalah operasional harian hingga lupa berpikir strategis.', 'Mendelegasikan wewenang operasional agar pimpinan memiliki waktu memikirkan visi masa depan.']
      ],
      caption: 'Tabel 7.1: Hambatan kepemimpinan strategis dalam transformasi.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Dilema Inovasi Disruptif dalam Struktur Konvensional',
      prompt: 'Sebuah konglomerasi media cetak mencoba mengembangkan divisi media daring digital di dalam departemen koran konvensional yang sama. Para jurnalis senior menolak menulis artikel untuk platform online karena dianggap "berita murahan dan tidak bermutu", sehingga divisi digital mati suri. Bagaimana solusi desain organisasi ambidextrous menurut OReilly & Tushman?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Akar Kegagalan**: Memaksakan unit eksplorasi digital baru berada di bawah hierarki dan budaya bisnis cetak lama yang kaku (*structural entrapment*).',
            '**Solusi Desain Ambidextrous**: Manajemen harus **memisahkan unit media digital secara struktural**: mendirikan entitas anak perusahaan baru di gedung berbeda, merekrut talenta muda dengan budaya digital lincah, serta menetapkan KPI berbasis *pageviews* dan *engagement*, bukan oplah cetak.',
            '**Integrasi di Puncak**: Kedua unit bisnis tetap terhubung di tingkat direksi holding korporasi untuk memanfaatkan kekuatan merek dan arsip berita bersama.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 7'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Desain Organisasi Ambidextrous', 'Pemisahan struktural eksploitasi vs eksplorasi dan integrasi kepemimpinan.', 'Mampu mendesain arsitektur organisasi inovatif.'],
        ['2', '3 Pilar Kepemimpinan Strategis', 'Penetapan arah, perancangan struktur, dan pembentukan budaya beretika.', 'Mampu menguraikan agenda strategis pemimpin transformasi.'],
        ['3', 'Corporate Entrepreneurship', 'Inkubator bisnis, CVC, dan penanganan hambatan politik perubahan.', 'Mampu merancang ekosistem kewirausahaan di dalam korporasi besar.']
      ],
      caption: 'Tabel 7.2: Peta penguasaan submateri TM 7 Manajemen Strategik.'
    },
    CASE_AMBIDEXTROUS_ORGANIZATIONAL_DESIGN,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Pemimpin Menolak Status Quo**: Tugas paling penting dari seorang pemimpin strategis bukanlah menjaga kenyamanan operasional yang ada, melainkan terus menggugah organisasi agar tidak terlena oleh kesuksesan masa lalu.',
        '**Ambidextrous Menghubungkan Dua Dunia**: Perusahaan yang sukses bertahan melintasi abad adalah yang mampu mengoperasikan dua mesin sekaligus: mesin efisiensi hari ini dan mesin penemuan masa depan.',
        '**Etika Dimulai dari Keteladanan Puncak (Tone at the Top)**: Karyawan memperhatikan apa yang dilakukan para pemimpin di ruang tertutup, bukan apa yang mereka katakan di panggung pidato.'
      ]
    }
  ]
};
