import type { Reading } from '../../../types';
import { CASE_ORG_STRUCTURE_ADAPTIVE } from '../manajemenPracticeCases';

const SVG_ORG_STRUCTURES = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">5 DESAIN STRUKTUR ORGANISASI UTAMA (RICHARD L. DAFT)</text>
  
  <rect x="25" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">FUNGSIONAL</text>
  <text x="82" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Kelompok Keahlian:</text>
  <text x="82" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• SDM, Pemasaran</text>
  <text x="82" y="138" fill="#cbd5e1" font-size="8" text-anchor="middle">• Efisiensi tinggi</text>
  <text x="82" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Silo Effect kaku</text>
  <text x="82" y="175" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Skala Ekonomis</text>

  <rect x="155" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="212" y="78" fill="#4ade80" font-size="9.5" font-weight="700" text-anchor="middle">DIVISIONAL</text>
  <text x="212" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Produk / Geografi:</text>
  <text x="212" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Unit mandiri</text>
  <text x="212" y="138" fill="#cbd5e1" font-size="8" text-anchor="middle">• Cepat respon</text>
  <text x="212" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Duplikasi biaya</text>
  <text x="212" y="175" fill="#4ade80" font-size="8.5" font-weight="700" text-anchor="middle">Fokus Produk</text>

  <rect x="285" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="342" y="78" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">MATRIKS</text>
  <text x="342" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Komando Ganda:</text>
  <text x="342" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Dual Authority</text>
  <text x="342" y="138" fill="#cbd5e1" font-size="8" text-anchor="middle">• Kolaborasi ahli</text>
  <text x="342" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Rawan konflik</text>
  <text x="342" y="175" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">Fleksibilitas</text>

  <rect x="415" y="55" width="115" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a78bfa" font-size="9.5" font-weight="700" text-anchor="middle">TIM (TEAM-BASED)</text>
  <text x="472" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Lintas Fungsi:</text>
  <text x="472" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Otonomi tinggi</text>
  <text x="472" y="138" fill="#cbd5e1" font-size="8" text-anchor="middle">• Tanpa sekat seksi</text>
  <text x="472" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Butuh kedewasaan</text>
  <text x="472" y="175" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">Agile Squads</text>

  <rect x="545" y="55" width="110" height="145" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="1.5"/>
  <text x="600" y="78" fill="#f472b6" font-size="9" font-weight="700" text-anchor="middle">VIRTUAL NETWORK</text>
  <text x="600" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">Outsourcing:</text>
  <text x="600" y="122" fill="#cbd5e1" font-size="8" text-anchor="middle">• Inti kecil (hub)</text>
  <text x="600" y="138" fill="#cbd5e1" font-size="8" text-anchor="middle">• Mitra global</text>
  <text x="600" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">• Kontrol rapuh</text>
  <text x="600" y="175" fill="#f472b6" font-size="8.5" font-weight="700" text-anchor="middle">Ramping &amp; Lincah</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Designing Adaptive Organization Structure: Rentang Kendali & Departementalisasi',
  ref: 'Richard L. Daft Bab 10 & 11 | Desain Organisasi Mekanistik vs Organik | Rantai Komando & Wewenang',
  intro: 'TM 7 membahas seni perancangan struktur organisasi (Organizing) untuk mengoptimalkan koordinasi kerja: dimensi struktural vertikal (Rantai Komando, Kesatuan Komando / Unity of Command, Rentang Kendali / Span of Control, Sentralisasi vs Desentralisasi), 5 pendekatan departementalisasi (Struktur Fungsional, Divisional, Matriks, Berbasis Tim, dan Jaringan Virtual / Virtual Network), serta perbandingan Kontinjensi Organisasi Mekanistik vs Organik.',
  objectives: [
    'Menganalisis keterkaitan antara rentang kendali (Span of Control) dengan struktur tinggi (Tall) vs datar (Flat).',
    'Membandingkan keunggulan dan kelemahan 5 pendekatan departementalisasi organisasi.',
    'Menjelaskan fenomena kesatuan komando ganda (Dual Authority) dan manajemen konflik pada Struktur Matriks.',
    'Menentukan pilihan struktur Mekanistik vs Organik berdasarkan ketidakpastian lingkungan dan strategi bersaing.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 7.1: Lima Desain Struktur Organisasi Utama: Fungsional, Divisional, Matriks, Tim, dan Virtual Network.',
      svg: SVG_ORG_STRUCTURES
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 7'
    },
    {
      kind: 'table',
      headers: ['Dimensi Struktur', 'Struktur Mekanistik (Mekanistis)', 'Struktur Organik (Organis)', 'Kondisi Lingkungan yang Sesuai'],
      rows: [
        ['Hierarki Wewenang', 'Sentralisasi kaku di puncak kepemimpinan.', 'Desentralisasi luas ke level staf pelaksana.', 'Mekanistik cocok di lingkungan stabil; Organik di lingkungan dinamis.'],
        ['Rentang Kendali', 'Sempit (Narrow), membentuk struktur tinggi (Tall).', 'Melebar (Wide), membentuk struktur datar (Flat).', 'Flat mempercepat aliran komunikasi dan memangkas biaya gaji manajerial.'],
        ['Spesialisasi Kerja', 'Tinggi dan terkotak-kotak (Silo Spesialisasi).', 'Fleksibel dan berbasis tim lintas fungsi (Cross-Functional).', 'Organik mendukung inovasi dan eksperimen produk baru.'],
        ['Aturan & Prosedur', 'Banyak aturan formal tertulis (SOP kaku).', 'Sedikit aturan formal, mengandalkan nilai budaya bersama.', 'Mekanistik meminimalkan kesalahan; Organik memaksimalkan adaptasi.']
      ],
      caption: 'Tabel 7.0: Perbandingan arsitektur struktur mekanistik vs organik.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 5 Pendekatan Departementalisasi'
    },
    {
      kind: 'table',
      headers: ['Desain Struktur', 'Dasar Pengelompokan Kerja', 'Keunggulan Utama', 'Kelemahan Kritis'],
      rows: [
        ['Fungsional', 'Berdasarkan kesamaan keahlian fungsi (Produksi, Akuntansi, SDM).', 'Efisiensi skala ekonomis maksimal dalam departemen.', 'Koordinasi antar-fungsi sangat buruk (Silo Mentality).'],
        ['Divisional', 'Berdasarkan kesamaan output produk, segmen konsumen, atau geografis.', 'Respon cepat dan fleksibel terhadap dinamika pasar produk.', 'Duplikasi biaya aset dan staf pendukung antar-divisi.'],
        ['Matriks', 'Kombinasi simultan antara fungsi fungsional dan divisi produk.', 'Penggunaan SDM ahli lintas proyek yang sangat optimal.', 'Rantai komando ganda memicu kebingungan dan perebutan kekuasaan.'],
        ['Berbasis Tim', 'Tim permanen atau temporer lintas fungsi yang memiliki otonomi.', 'Mendobrak sekat departemen, komitmen dan moral staf tinggi.', 'Konflik loyalitas antara tim proyek vs departemen asal.'],
        ['Virtual Network', 'Fungsi inti kecil di pusat meng-outsource fungsi lain ke mitra global.', 'Sangat ramping, fleksibilitas biaya tetap yang minimal.', 'Kontrol kualitas rapuh dan rentan kehilangan keahlian inti.']
      ],
      caption: 'Tabel 7.1: Analisis komparatif 5 desain departementalisasi organisasi.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Dilema Kesatuan Komando pada Struktur Matriks',
      prompt: 'Seorang insinyur perangkat lunak di perusahaan teknologi ditugaskan dalam proyek pembuatan aplikasi e-wallet baru. Ia menerima dua perintah bertentangan pada hari yang sama: Manajer Fungsional IT memerintahkannya menulis dokumentasi kode lengkap (memakan waktu 1 minggu), sedangkan Manajer Proyek Produk memerintahkannya segera merilis aplikasi besok pagi (memotong dokumentasi). Prinsip manajemen apa yang dilanggar dan bagaimana solusinya?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Prinsip yang Dilanggar**: Melanggar prinsip klasik **Kesatuan Komando (Unity of Command)** Fayol, yang menyatakan bahwa seorang bawahan seharusnya hanya menerima perintah dari SATU orang atasan langsung.',
            '**Karakteristik Struktur Matriks**: Struktur Matriks sengaja menerapkan **Komando Ganda (Dual-Authority System)** untuk menyeimbangkan keandalan teknis (Manajer Fungsional) dan kecepatan rilis pasar (Manajer Produk).',
            '**Solusi Manajerial**: Manajer Fungsional dan Manajer Produk harus duduk bersama dalam forum koordinasi untuk menyepakati kompromi prioritas. Pemimpin puncak harus memfasilitasi budaya kolaboratif di mana negosiasi wewenang diselesaikan secara konstruktif tanpa menjadikan staf sebagai korban tarik-menarik kekuasaan.'
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
        ['1', 'Dimensi Struktural Vertikal', 'Rantai komando, span of control, dan struktur tall vs flat.', 'Mampu menghitung tingkatan hierarki dan rentang kendali.'],
        ['2', '5 Desain Departementalisasi', 'Karakteristik fungsional, divisional, matriks, tim, dan virtual network.', 'Mampu merekomendasikan bagan struktur organisasi yang tepat.'],
        ['3', 'Kontinjensi Desain Organisasi', 'Pengaruh strategi diferensiasi vs cost leadership pada struktur.', 'Mampu mencocokkan struktur mekanistik vs organik dengan kondisi bisnis.']
      ],
      caption: 'Tabel 7.2: Peta penguasaan submateri TM 7 Pengantar Manajemen.'
    },
    CASE_ORG_STRUCTURE_ADAPTIVE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Struktur Mengikuti Strategi (Structure Follows Strategy)**: Doktrin Alfred Chandler menegaskan bahwa struktur organisasi harus dirancang untuk melayani strategi korporasi, bukan sebaliknya.',
        '**Tren Organisasi Menuju Flat**: Kemajuan teknologi komunikasi dan tim swakelola (Self-Managed Teams) mendorong perusahaan memangkas lapisan manajemen menengah untuk mempercepat keputusan.',
        '**Silo Mentality Mematikan Kolaborasi**: Bahaya terbesar struktur fungsional murni adalah munculnya dinding ego antar-departemen yang melupakan kepentingan kepuasan pelanggan akhir.'
      ]
    }
  ]
};
