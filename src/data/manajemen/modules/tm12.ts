import type { Reading } from '../../../types';
import { CASE_LEADERSHIP_TRANSFORMATIONAL } from '../manajemenPracticeCases';

const SVG_SITUATIONAL_LEADERSHIP = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL KEPEMIMPINAN SITUASIONAL (HERSEY-BLANCHARD)</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">DIRECTING / TELLING</text>
  <text x="97" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">Kesiapan Bawahan: R1</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Bawahan: Tidak mampu</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kurang percaya diri</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• <tspan fill="#7dd3fc" font-weight="700">Tinggi Tugas, Rendah Relasi</tspan></text>
  <text x="97" y="175" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Instruksi Spesifik</text>

  <rect x="185" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="257" y="78" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">COACHING / SELLING</text>
  <text x="257" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">Kesiapan Bawahan: R2</text>
  <text x="257" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Belum mampu tapi Mau</text>
  <text x="257" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Motivasi belajar tinggi</text>
  <text x="257" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• <tspan fill="#86efac" font-weight="700">Tinggi Tugas, Tinggi Relasi</tspan></text>
  <text x="257" y="175" fill="#4ade80" font-size="8.5" font-weight="700" text-anchor="middle">Bimbingan &amp; Dukungan</text>

  <rect x="345" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="417" y="78" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">SUPPORTING</text>
  <text x="417" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">Kesiapan Bawahan: R3</text>
  <text x="417" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Mampu tapi Ragu/Demotivasi</text>
  <text x="417" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Butuh dorongan moral</text>
  <text x="417" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• <tspan fill="#fde047" font-weight="700">Rendah Tugas, Tinggi Relasi</tspan></text>
  <text x="417" y="175" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">Partisipasi Diskusi</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a78bfa" font-size="10" font-weight="700" text-anchor="middle">DELEGATING</text>
  <text x="580" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">Kesiapan Bawahan: R4</text>
  <text x="580" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Sangat mampu &amp; Percaya diri</text>
  <text x="580" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Ahli independen</text>
  <text x="580" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• <tspan fill="#c4b5fd" font-weight="700">Rendah Tugas, Rendah Relasi</tspan></text>
  <text x="580" y="175" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">Otonomi Mandiri</text>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Leadership in Organizations: Teori Perilaku, Kontinjensi, & Kepemimpinan Transformasional',
  ref: 'Richard L. Daft Bab 16 | Hersey-Blanchard Situational Leadership | Bernard Bass Transformational Leadership',
  intro: 'TM 12 membahas evolusi teori kepemimpinan dalam organisasi: pergeseran dari Teori Sifat (Trait Theory) ke Teori Perilaku (Blake & Mouton Leadership Grid), Teori Kontinjensi (Model Kontinjensi Fiedler dan Kepemimpinan Situasional Hersey-Blanchard), perbandingan Kepemimpinan Transaksional vs Kepemimpinan Transformasional (The 4 Is: Idealized Influence, Inspirational Motivation, Intellectual Stimulation, Individualized Consideration), Kepemimpinan Karismatik, serta filosofi Kepemimpinan Pelayan (Servant Leadership).',
  objectives: [
    'Membedakan peran Manajemen (menciptakan keteraturan dan stabilitas) vs Kepemimpinan (menciptakan perubahan dan visi).',
    'Menerapkan Model Kepemimpinan Situasional Hersey-Blanchard sesuai tingkat kesiapan pengikut (R1 s/d R4).',
    'Menjelaskan model kontinjensi Fiedler (LPC Scale dan kesesuaian situasi kepemimpinan).',
    'Menganalisis 4 pilar Kepemimpinan Transformasional dalam mendorong kinerja melampaui ekspektasi.',
    'Menjelaskan karakteristik Servant Leadership menurut Robert Greenleaf.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 12.1: Model Kepemimpinan Situasional Hersey-Blanchard Berdasarkan Tingkat Kesiapan Pengikut.',
      svg: SVG_SITUATIONAL_LEADERSHIP
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 12'
    },
    {
      kind: 'table',
      headers: ['Tingkat Kesiapan Pengikut', 'Karakteristik Kompetensi & Komitmen Bawahan', 'Gaya Kepemimpinan yang Cocok', 'Fokus Perilaku Pemimpin'],
      rows: [
        ['R1: Kesiapan Rendah', 'Tidak mampu dan tidak percaya diri / enggan.', 'Directing / Telling (Menginstruksikan)', 'Tinggi perilaku tugas, rendah relasi; beri arahan SOP rinci dan pantau ketat.'],
        ['R2: Kesiapan Sedang-Rendah', 'Belum mampu secara teknis, namun bersemangat dan mau belajar.', 'Coaching / Selling (Melatih/Menjual Ide)', 'Tinggi tugas, tinggi relasi; menjelaskan rasionalitas keputusan dan membimbing.'],
        ['R3: Kesiapan Sedang-Tinggi', 'Kompeten secara teknis, namun ragu-ragu atau kehilangan motivasi.', 'Supporting / Participating (Mendukung)', 'Rendah tugas, tinggi relasi; membuka diskusi partisipatif dan memompa moral.'],
        ['R4: Kesiapan Sangat Tinggi', 'Sangat kompeten, berpengalaman, dan memiliki komitmen mandiri tinggi.', 'Delegating (Mendelegasikan)', 'Rendah tugas, rendah relasi; memberikan otonomi penuh atas sasaran kerja.']
      ],
      caption: 'Tabel 12.0: Matriks kepemimpinan situasional Hersey-Blanchard.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 4 Pilar Kepemimpinan Transformasional (The 4 Is)'
    },
    {
      kind: 'table',
      headers: ['Pilar Transformasional', 'Definisi Perilaku Kepemimpinan', 'Pengaruh Nyata Terhadap Karyawan'],
      rows: [
        ['Idealized Influence (Pengaruh Ideal / Karisma)', 'Pemimpin menjadi panutan teladan integritas, moralitas, dan keberanian berkorban.', 'Pengikut menaruh rasa hormat mendalam, kagum, dan meniru standar etikanya.'],
        ['Inspirational Motivation (Motivasi Inspiratif)', 'Mengkomunikasikan visi masa depan yang optimis dan menantang dengan penuh semangat.', 'Membangkitkan rasa memiliki misi luhur dan antusiasme kerja tim.'],
        ['Intellectual Stimulation (Stimulasi Intelektual)', 'Mendorong bawahan mempertanyakan cara-cara kerja konvensional dan mencoba ide baru.', 'Menciptakan budaya inovasi dan keberanian berpikir di luar kotak.'],
        ['Individualized Consideration (Perhatian Individual)', 'Memperlakukan setiap anggota tim secara unik, bertindak sebagai mentor dan pendengar sabar.', 'Karyawan merasa dihargai secara personal dan potensi kariernya bertumbuh mekar.']
      ],
      caption: 'Tabel 12.1: Empat pilar kepemimpinan transformasional Bernard Bass.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Memilih Gaya Kepemimpinan untuk Tim Programmer Senior',
      prompt: 'Sebuah perusahaan teknologi merekrut tim yang terdiri dari 5 orang software engineer senior kelas dunia (Kesiapan R4: sangat ahli dan berkomitmen tinggi). Manajer proyek baru justru menerapkan gaya kepemimpinan Telling (mengecek baris kode setiap jam dan mendikte cara penulisan algoritma). Apa dampak kesalahan gaya kepemimpinan ini?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Kondisi Kesiapan Pengikut**: Para engineer berada pada level kesiapan **R4 (Mampu dan Percaya Diri Tinggi)**.',
            '**Gaya yang Seharusnya**: Gaya yang cocok adalah **Delegating** (memberikan tujuan akhir proyek dan membiarkan mereka merancang arsitektur kode secara kreatif).',
            '**Dampak Kesalahan Gaya (Micromanagement)**: Penerapan gaya *Telling* yang kaku merendahkan martabat profesional para ahli, mematikan inovasi mereka, menimbulkan kebencian mendalam, dan memicu pengunduran diri massal talenta kunci.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 12'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Manajemen vs Kepemimpinan', 'Pembedaan fungsi kestabilan manajerial vs agen perubahan kepemimpinan.', 'Mampu membedakan aksi manajemen vs kepemimpinan.'],
        ['2', 'Situational Leadership Model', 'Penerapan 4 gaya (Telling, Selling, Supporting, Delegating) pada kesiapan R1-R4.', 'Mampu mendiagnosa gaya kepemimpinan yang tepat pada studi kasus.'],
        ['3', 'Kepemimpinan Transformasional', 'Analisis 4 pilar transformasional vs kepemimpinan transaksional dan servant.', 'Mampu menguraikan strategi kepemimpinan perubahan berskala masif.']
      ],
      caption: 'Tabel 12.2: Peta penguasaan submateri TM 12 Pengantar Manajemen.'
    },
    CASE_LEADERSHIP_TRANSFORMATIONAL,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Tidak Ada Satu Gaya Kepemimpinan Terbaik**: Teori Kontinjensi membuktikan bahwa efektivitas pemimpin bergantung pada kecocokan gaya kepemimpinannya dengan situasi dan tingkat kesiapan pengikut.',
        '**Pemimpin Melayani Dahulu (Servant First)**: Servant Leadership membalik logika tradisional kekuasaan; keberhasilan pemimpin diukur bukan dari berapa banyak orang yang melayaninya, melainkan dari berapa banyak orang yang ia layani dan kembangkan.',
        '**Transaksional Menjaga Sistem, Transformasional Mengubahnya**: Kepemimpinan transaksional efektif untuk menjaga kepatuhan operasional rutin harian, sedangkan kepemimpinan transformasional dibutuhkan saat krisis disrupsi.'
      ]
    }
  ]
};
