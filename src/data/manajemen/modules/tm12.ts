import type { Reading } from '../../../types';
import { CASE_LEADERSHIP_TRANSFORMATIONAL } from '../manajemenPracticeCases';

const SVG_SITUATIONAL_LEADERSHIP = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad12" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="s1Grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="s2Grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="s3Grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="s4Grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad12)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">MODEL KEPEMIMPINAN SITUASIONAL (HERSEY-BLANCHARD)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">SITUATIONAL MODEL</text>

  <g transform="translate(45, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="100" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="24" rx="10" fill="url(#s3Grad)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="14" y="17" fill="#fbbf24" font-size="10" font-weight="800">S3: SUPPORTING / PARTICIPATING</text>
    <text class="svg-text" x="380" y="17" fill="#cbd5e1" font-size="7.5" text-anchor="end">Tinggi Relasi, Rendah Tugas</text>
    <text class="svg-text" x="14" y="42" fill="#cbd5e1" font-size="8">• Kesiapan Pengikut: <tspan class="text-accent-amber" fill="#fbbf24" font-weight="700">R3 (Mampu tapi Ragu / Demotivasi)</tspan></text>
    <text class="svg-text" x="14" y="58" fill="#cbd5e1" font-size="8">• Buka diskusi partisipatif, dengarkan masukan, pompa moral</text>
    <text class="svg-muted" x="14" y="74" fill="#94a3b8" font-size="7.5">Peran Pemimpin: Fasilitator &amp; Pembangkit Kepercayaan Diri</text>
  </g>

  <g transform="translate(460, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="100" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="24" rx="10" fill="url(#s2Grad)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="17" fill="#34d399" font-size="10" font-weight="800">S2: COACHING / SELLING</text>
    <text class="svg-text" x="380" y="17" fill="#cbd5e1" font-size="7.5" text-anchor="end">Tinggi Relasi, Tinggi Tugas</text>
    <text class="svg-text" x="14" y="42" fill="#cbd5e1" font-size="8">• Kesiapan Pengikut: <tspan class="text-accent-green" fill="#34d399" font-weight="700">R2 (Belum Mampu tapi Mau Belajar)</tspan></text>
    <text class="svg-text" x="14" y="58" fill="#cbd5e1" font-size="8">• Jelaskan arahan kerja + beri dukungan emosional intensif</text>
    <text class="svg-muted" x="14" y="74" fill="#94a3b8" font-size="7.5">Peran Pemimpin: Pelatih &amp; Penjelas Rasionalitas Keputusan</text>
  </g>

  <g transform="translate(45, 185)">
    <rect class="svg-card" x="0" y="0" width="395" height="100" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="24" rx="10" fill="url(#s4Grad)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="14" y="17" fill="#a78bfa" font-size="10" font-weight="800">S4: DELEGATING (MENDELEGASIKAN)</text>
    <text class="svg-text" x="380" y="17" fill="#cbd5e1" font-size="7.5" text-anchor="end">Rendah Relasi, Rendah Tugas</text>
    <text class="svg-text" x="14" y="42" fill="#cbd5e1" font-size="8">• Kesiapan Pengikut: <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">R4 (Sangat Mampu &amp; Komitmen Tinggi)</tspan></text>
    <text class="svg-text" x="14" y="58" fill="#cbd5e1" font-size="8">• Berikan otonomi penuh atas cara kerja dan pengambilan keputusan</text>
    <text class="svg-muted" x="14" y="74" fill="#94a3b8" font-size="7.5">Peran Pemimpin: Pemberi Mandat &amp; Penyedia Sumber Daya</text>
  </g>

  <g transform="translate(460, 185)">
    <rect class="svg-card" x="0" y="0" width="395" height="100" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="24" rx="10" fill="url(#s1Grad)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="17" fill="#38bdf8" font-size="10" font-weight="800">S1: DIRECTING / TELLING (MENDIKTE)</text>
    <text class="svg-text" x="380" y="17" fill="#cbd5e1" font-size="7.5" text-anchor="end">Rendah Relasi, Tinggi Tugas</text>
    <text class="svg-text" x="14" y="42" fill="#cbd5e1" font-size="8">• Kesiapan Pengikut: <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">R1 (Tidak Mampu &amp; Tidak Percaya Diri)</tspan></text>
    <text class="svg-text" x="14" y="58" fill="#cbd5e1" font-size="8">• Berikan instruksi SOP rinci, spesifik, dan pantau harian ketat</text>
    <text class="svg-muted" x="14" y="74" fill="#94a3b8" font-size="7.5">Peran Pemimpin: Pengarah Tugas Spesifik &amp; Pengawas Langsung</text>
  </g>

  <g transform="translate(45, 295)">
    <rect class="svg-subcard" x="0" y="0" width="810" height="24" rx="6" fill="#1e293b"/>
    <rect x="5" y="3" width="195" height="18" rx="4" fill="#7c3aed" fill-opacity="0.3"/><text class="text-accent-purple" x="102" y="15" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">R4: Mampu &amp; Percaya Diri</text>
    <rect x="207" y="3" width="195" height="18" rx="4" fill="#d97706" fill-opacity="0.3"/><text class="text-accent-amber" x="304" y="15" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">R3: Mampu tapi Ragu</text>
    <rect x="409" y="3" width="195" height="18" rx="4" fill="#059669" fill-opacity="0.3"/><text class="text-accent-green" x="506" y="15" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">R2: Belum Mampu tapi Mau</text>
    <rect x="611" y="3" width="195" height="18" rx="4" fill="#0284c7" fill-opacity="0.3"/><text class="text-accent-blue" x="708" y="15" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">R1: Tidak Mampu &amp; Enggan</text>
  </g>
  <text class="svg-muted" x="450" y="335" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Tingkat Kesiapan Pengikut: Tinggi (Kiri) menuju Rendah (Kanan)</text>
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
