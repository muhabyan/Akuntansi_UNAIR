import type { Reading } from '../../../types';
import { CASE_INDIVIDUAL_BEHAVIOR_EQ } from '../manajemenPracticeCases';

const SVG_BIG_FIVE_OCEAN = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="oGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="cGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="eGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="aGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="nGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad11)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">MODEL 5 BESAR KEPRIBADIAN (THE BIG FIVE PERSONALITY - OCEAN)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">OCEAN MODEL</text>

  <g transform="translate(35, 70)">
    <text class="text-accent-blue" x="0" y="14" fill="#38bdf8" font-size="10.5" font-weight="800">O - OPENNESS TO EXPERIENCE</text>
    <text class="svg-muted" x="830" y="14" fill="#94a3b8" font-size="8" text-anchor="end">Inovator &amp; R&amp;D Kreatif</text>
    <rect class="svg-subcard" x="0" y="22" width="830" height="24" rx="6" fill="#1e293b"/>
    <rect x="0" y="22" width="550" height="24" rx="6" fill="url(#oGrad)" fill-opacity="0.3"/>
    <text class="svg-text" x="15" y="38" fill="#cbd5e1" font-size="8">Rendah: Praktis, konvensional, suka rutinitas</text>
    <text class="text-accent-blue" x="815" y="38" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="end">Tinggi: Imajinatif, rasa ingin tahu luas, suka hal baru</text>
  </g>

  <g transform="translate(35, 122)">
    <text class="text-accent-green" x="0" y="14" fill="#34d399" font-size="10.5" font-weight="800">C - CONSCIENTIOUSNESS (KEHATI-HATIAN)</text>
    <text class="text-accent-green" x="830" y="14" fill="#34d399" font-size="8" font-weight="700" text-anchor="end">★ Prediktor Kinerja Kerja #1</text>
    <rect class="svg-subcard" x="0" y="22" width="830" height="24" rx="6" fill="#1e293b"/>
    <rect x="0" y="22" width="680" height="24" rx="6" fill="url(#cGrad)" fill-opacity="0.3"/>
    <text class="svg-text" x="15" y="38" fill="#cbd5e1" font-size="8">Rendah: Spontan, ceroboh, mudah terdistraksi</text>
    <text class="text-accent-green" x="815" y="38" fill="#34d399" font-size="8" font-weight="700" text-anchor="end">Tinggi: Teratur, disiplin, tekun, bertanggung jawab</text>
  </g>

  <g transform="translate(35, 174)">
    <text class="text-accent-amber" x="0" y="14" fill="#fbbf24" font-size="10.5" font-weight="800">E - EXTRAVERSION (EKSTRAVERSI)</text>
    <text class="svg-muted" x="830" y="14" fill="#94a3b8" font-size="8" text-anchor="end">Sales, Negosiator, &amp; Pemimpin Publik</text>
    <rect class="svg-subcard" x="0" y="22" width="830" height="24" rx="6" fill="#1e293b"/>
    <rect x="0" y="22" width="480" height="24" rx="6" fill="url(#eGrad)" fill-opacity="0.3"/>
    <text class="svg-text" x="15" y="38" fill="#cbd5e1" font-size="8">Rendah (Introvert): Pendiam, mandiri, reflektif</text>
    <text class="text-accent-amber" x="815" y="38" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="end">Tinggi (Ekstrovert): Asertif, senang bergaul, enerjik</text>
  </g>

  <g transform="translate(35, 226)">
    <text class="text-accent-purple" x="0" y="14" fill="#a78bfa" font-size="10.5" font-weight="800">A - AGREEABLENESS (KERAMAHAN)</text>
    <text class="svg-muted" x="830" y="14" fill="#94a3b8" font-size="8" text-anchor="end">Harmoni Kerja Tim &amp; Layanan Nasabah</text>
    <rect class="svg-subcard" x="0" y="22" width="830" height="24" rx="6" fill="#1e293b"/>
    <rect x="0" y="22" width="600" height="24" rx="6" fill="url(#aGrad)" fill-opacity="0.3"/>
    <text class="svg-text" x="15" y="38" fill="#cbd5e1" font-size="8">Rendah: Dingin, skeptis, kompetitif keras</text>
    <text class="text-accent-purple" x="815" y="38" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="end">Tinggi: Empatik, kooperatif, dapat dipercaya, hangat</text>
  </g>

  <g transform="translate(35, 278)">
    <text class="text-accent-red" x="0" y="14" fill="#f87171" font-size="10.5" font-weight="800">N - NEUROTICISM / EMOTIONAL STABILITY</text>
    <text class="svg-muted" x="830" y="14" fill="#94a3b8" font-size="8" text-anchor="end">Stabilitas Emosi di Bawah Tekanan</text>
    <rect class="svg-subcard" x="0" y="22" width="830" height="24" rx="6" fill="#1e293b"/>
    <rect x="0" y="22" width="350" height="24" rx="6" fill="url(#nGrad)" fill-opacity="0.3"/>
    <text class="text-accent-green" x="15" y="38" fill="#34d399" font-size="8" font-weight="700">Rendah (Stabil): Tenang, percaya diri, tahan banting</text>
    <text class="text-accent-red" x="815" y="38" fill="#f87171" font-size="8" font-weight="700" text-anchor="end">Tinggi: Cemas, mudah tegang, murung, rentan stres</text>
  </g>

  <text class="svg-muted" x="450" y="332" fill="#94a3b8" font-size="8" font-style="italic" text-anchor="middle">Dimensi Conscientiousness terbukti secara empiris sebagai prediktor performa kerja paling konsisten di semua jenis industri.</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Understanding Individual Behavior: Sikap Kerja, Persepsi, Big Five, EQ, & Stres',
  ref: 'Richard L. Daft Bab 15 | Stephen P. Robbins Organizational Behavior | Daniel Goleman Emotional Intelligence',
  intro: 'TM 11 membahas perilaku manusia dalam organisasi: sikap kerja (Kepuasan Kerja / Job Satisfaction dan Komitmen Organisasi), proses persepsi dan bias distorsi (Stereotyping, Halo Effect, Perceptual Defense), Teori Atribusi (Internal vs External Attribution dan Fundamental Attribution Error), Model 5 Faktor Kepribadian Big Five (OCEAN), 4 dimensi Kecerdasan Emosional (EQ) Daniel Goleman, serta dinamika stres kerja dan strategi manajemen stres.',
  objectives: [
    'Menganalisis keterkaitan antara kepuasan kerja dan komitmen organisasi dengan retensi karyawan.',
    'Mendeteksi distorsi persepsi dalam interaksi kerja: Stereotyping, Halo Effect, dan Attributional Bias.',
    'Menguraikan 5 dimensi kepribadian The Big Five (OCEAN) dan kecocokannya dengan profil pekerjaan.',
    'Menerapkan 4 komponen Kecerdasan Emosional (EQ) Goleman dalam kepemimpinan dan pengelolaan stres.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 11.1: Lima Dimensi Kepribadian Model Big Five (The OCEAN Model).',
      svg: SVG_BIG_FIVE_OCEAN
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 11'
    },
    {
      kind: 'table',
      headers: ['Konsep Perilaku Organisasi', 'Definisi Psikologis Kunci', 'Wujud Perilaku Nyata di Kantor', 'Implikasi Manajerial'],
      rows: [
        ['Job Satisfaction (Kepuasan Kerja)', 'Sikap emosional positif karyawan terhadap pekerjaannya.', 'Tingkat kehadiran tinggi, antusiasme menyelesaikan tugas harian.', 'Karyawan yang puas mengurangi pergantian staf (turnover).'],
        ['Organizational Commitment', 'Tingkat loyalitas dan identifikasi diri staf dengan tujuan organisasi.', 'Rela bekerja lembur sukarela demi kesuksesan misi korporasi.', 'Melahirkan Organizational Citizenship Behavior (OCB).'],
        ['Locus of Control', 'Keyakinan seseorang tentang faktor penentu nasib hidupnya.', 'Internal: "Sukses karena kerja kerasku"; External: "Sukses karena hoki/atasan".', 'Internal cocok untuk posisi otonom; External butuh supervisi terarah.'],
        ['Kecerdasan Emosional (EQ)', 'Kemampuan mengenali, memahami, dan mengelola emosi diri dan orang lain.', 'Tetap tenang saat dikritik nasabah dan mampu berempati.', 'EQ tinggi adalah prediktor terbaik efektivitas kepemimpinan.']
      ],
      caption: 'Tabel 11.0: Matriks konsep perilaku individu dalam organisasi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 4 Kuadran Kecerdasan Emosional (Daniel Goleman)'
    },
    {
      kind: 'table',
      headers: ['Dimensi EQ', 'Fokus Pengenalan (Kesadaran Diri & Sosial)', 'Fokus Pengelolaan (Tindakan Nyata)'],
      rows: [
        ['Diri Sendiri (Self)', 'Self-Awareness (Kesadaran Diri): Mengetahui secara akurat apa yang dirasakan dan batas kekuatan/kelemahan diri.', 'Self-Management (Pengelolaan Diri): Kemampuan mengendalikan dorongan emosi destruktif dan berinisiatif secara optimis.'],
        ['Orang Lain (Social)', 'Social Awareness (Kesadaran Sosial): Empati memahami perasaan, kebutuhan, dan sudut pandang rekan kerja.', 'Relationship Management (Manajemen Hubungan): Membangun ikatan kerja harmonis, menginspirasi, dan menyelesaikan konflik.']
      ],
      caption: 'Tabel 11.1: Empat pilar kecerdasan emosional Daniel Goleman.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Jebakan Fundamental Attribution Error Atasan',
      prompt: 'Seorang staf biasanya berkinerja sangat baik, namun hari ini datang terlambat 1 jam dan laporan keuangannya terdapat salah ketik angka. Manajer langsung membentak dan menuduh staf tersebut pemalas dan tidak bertanggung jawab. Kesalahan persepsi apa yang dialami manajer tersebut?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Identifikasi Bias**: Manajer terjebak dalam **Fundamental Attribution Error (Kesalahan Atribusi Mendasar)**.',
            '**Mekanisme Bias**: Manajer **melebih-lebihkan faktor internal** (menuduh karakter malas dan ceroboh) dan **meremehkan faktor eksternal** (tidak menyelidiki bahwa staf tersebut mengalami ban meletus di jalan tol dan server kantor mengalami gangguan teknis).',
            '**Rekomendasi Pemimpin Ber-EQ**: Manajer seharusnya memanggil staf secara privat, menanyakan dengan tenang kendala apa yang sedang dihadapi di luar kendali staf, baru memberikan arahan perbaikan.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 11'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Big Five Personality (OCEAN)', 'Karakteristik 5 dimensi kepribadian dan relevansi performa kerja.', 'Mampu mencocokkan tipe kepribadian dengan kebutuhan peran jabatan.'],
        ['2', 'Teori Atribusi & Bias Persepsi', 'Pembedaan atribusi internal vs eksternal dan stereotyping.', 'Mampu mendeteksi bias evaluasi perilaku rekan kerja.'],
        ['3', 'Kecerdasan Emosional & Stres', 'Penerapan 4 dimensi EQ Goleman dan manajemen stres karyawan.', 'Mampu merancang intervensi kepemimpinan berbasis empati.']
      ],
      caption: 'Tabel 11.2: Peta penguasaan submateri TM 11 Pengantar Manajemen.'
    },
    CASE_INDIVIDUAL_BEHAVIOR_EQ,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Conscientiousness Adalah Raja Kinerja**: Dari kelima dimensi Big Five, dimensi *Conscientiousness* (kehati-hatian, kedisiplinan, ketekunan) adalah prediktor keberhasilan kerja yang paling konsisten di hampir semua jenis profesi.',
        '**IQ Membawa Anda Masuk, EQ Membawa Anda Naik**: Kecerdasan intelektual (IQ) mungkin mencukupi untuk direkrut pertama kali, namun Kecerdasan Emosional (EQ) adalah faktor penentu apakah seseorang dapat dipromosikan menjadi pemimpin puncak.',
        '**Stres Ada yang Positif (Eustress)**: Tidak semua stres buruk; tantangan target kerja dalam batas wajar (*Challenge Stress / Eustress*) justru memicu lonjakan adrenalin dan memacu produktivitas optimal.'
      ]
    }
  ]
};
