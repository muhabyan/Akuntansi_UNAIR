import type { Reading } from '../../../types';
import { CASE_INDIVIDUAL_BEHAVIOR_EQ } from '../manajemenPracticeCases';

const SVG_BIG_FIVE_OCEAN = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL 5 BESAR KEPRIBADIAN (THE BIG FIVE PERSONALITY - OCEAN)</text>
  
  <rect x="25" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">OPENNESS</text>
  <text x="82" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Keterbukaan:</text>
  <text x="82" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Imajinasi luas</text>
  <text x="82" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Rasa ingin tahu</text>
  <text x="82" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Suka hal baru</text>
  <text x="82" y="175" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Inovator Kreatif</text>

  <rect x="155" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="212" y="78" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">CONSCIENTIOUS</text>
  <text x="212" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Kehati-hatian:</text>
  <text x="212" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Teratur &amp; disiplin</text>
  <text x="212" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bertanggung jawab</text>
  <text x="212" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Fokus target</text>
  <text x="212" y="175" fill="#4ade80" font-size="8.5" font-weight="700" text-anchor="middle">Prediktor Kerja #1</text>

  <rect x="285" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="342" y="78" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">EXTRAVERSION</text>
  <text x="342" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Ekstraversi:</text>
  <text x="342" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Senang sosialisasi</text>
  <text x="342" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Enerjik &amp; asertif</text>
  <text x="342" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Percaya diri</text>
  <text x="342" y="175" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">Sales &amp; Leader</text>

  <rect x="415" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">AGREEABLENESS</text>
  <text x="472" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Keramahan:</text>
  <text x="472" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Kerja sama tim</text>
  <text x="472" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Empati &amp; percaya</text>
  <text x="472" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Menghindari friksi</text>
  <text x="472" y="175" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">Harmoni Tim</text>

  <rect x="545" y="55" width="110" height="145" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="600" y="78" fill="#f43f5e" font-size="9" font-weight="700" text-anchor="middle">NEUROTICISM</text>
  <text x="600" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Stabilitas Emosi:</text>
  <text x="600" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Cemas &amp; tegang</text>
  <text x="600" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mudah murung</text>
  <text x="600" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Rentan stres</text>
  <text x="600" y="175" fill="#f43f5e" font-size="8.5" font-weight="700" text-anchor="middle">Stres Kerja</text>
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
