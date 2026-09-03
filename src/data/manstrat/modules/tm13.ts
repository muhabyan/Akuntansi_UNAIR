import type { Reading } from '../../../types';
import { CASE_EMIRATES_AIRLINE_STRATEGY } from '../manstratPracticeCases';

const SVG_AIRLINE_STRATEGY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns13" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns13)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">STRATEGI JARINGAN PENERBANGAN: HUB-AND-SPOKE (EMIRATES) VS POINT-TO-POINT (LCC)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">AVIATION MODEL</text>

  <!-- Left: HUB-AND-SPOKE (EMIRATES) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="245" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="197" y="22" fill="#38bdf8" font-size="11" font-weight="800" text-anchor="middle">HUB-AND-SPOKE (EMIRATES / QATAR / SQ)</text>
    <!-- Visual Hub Chart -->
    <circle cx="197" cy="78" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
    <text x="197" y="78" fill="#ffffff" font-size="7.5" font-weight="800" text-anchor="middle">MEGA HUB</text>
    <text x="197" y="89" fill="#ffffff" font-size="6.5" text-anchor="middle">(DXB)</text>
    <!-- Spokes -->
    <circle cx="95" cy="55" r="12" fill="#1e293b" stroke="#38bdf8"/><text class="svg-text" x="95" y="58" fill="#cbd5e1" font-size="6" text-anchor="middle">London</text>
    <circle cx="95" cy="105" r="12" fill="#1e293b" stroke="#38bdf8"/><text class="svg-text" x="95" y="108" fill="#cbd5e1" font-size="6" text-anchor="middle">NY</text>
    <circle cx="300" cy="55" r="12" fill="#1e293b" stroke="#38bdf8"/><text class="svg-text" x="300" y="58" fill="#cbd5e1" font-size="6" text-anchor="middle">Tokyo</text>
    <circle cx="300" cy="105" r="12" fill="#1e293b" stroke="#38bdf8"/><text class="svg-text" x="300" y="108" fill="#cbd5e1" font-size="6" text-anchor="middle">Sydney</text>
    <line x1="107" y1="58" x2="175" y2="72" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="107" y1="102" x2="175" y2="84" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="288" y1="58" x2="219" y2="72" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="288" y1="102" x2="219" y2="84" stroke="#38bdf8" stroke-width="1.5"/>

    <text class="svg-text" x="14" y="145" fill="#cbd5e1" font-size="8">• Menghubungkan ribuan kombinasi kota dunia lewat 1 mega transfer hub</text>
    <text class="svg-text" x="14" y="162" fill="#cbd5e1" font-size="8">• Armada pesawat berbadan lebar (A380, B777) →Maksimalkan penumpang</text>
    <text class="svg-text" x="14" y="179" fill="#cbd5e1" font-size="8">• Layanan premium full-service (First/Business class &amp; inflight lounge mewah)</text>
    <rect class="svg-badge-blue" x="14" y="195" width="367" height="22" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="210" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Konektivitas Global Maksimal Antar-Benua</text>
  </g>

  <!-- Right: POINT-TO-POINT (LCC) -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="245" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <text class="text-accent-amber" x="197" y="22" fill="#fbbf24" font-size="11" font-weight="800" text-anchor="middle">POINT-TO-POINT DIRECT (AIRASIA / RYANAIR)</text>
    <!-- Visual P2P Chart -->
    <circle cx="100" cy="65" r="14" fill="#1e293b" stroke="#fbbf24"/><text class="svg-text" x="100" y="68" fill="#cbd5e1" font-size="6.5" text-anchor="middle">Kota A</text>
    <circle cx="295" cy="65" r="14" fill="#1e293b" stroke="#fbbf24"/><text class="svg-text" x="295" y="68" fill="#cbd5e1" font-size="6.5" text-anchor="middle">Kota B</text>
    <circle cx="100" cy="105" r="14" fill="#1e293b" stroke="#fbbf24"/><text class="svg-text" x="100" y="108" fill="#cbd5e1" font-size="6.5" text-anchor="middle">Kota C</text>
    <circle cx="295" cy="105" r="14" fill="#1e293b" stroke="#fbbf24"/><text class="svg-text" x="295" y="108" fill="#cbd5e1" font-size="6.5" text-anchor="middle">Kota D</text>
    <line x1="114" y1="65" x2="281" y2="65" stroke="#fbbf24" stroke-width="2"/>
    <line x1="114" y1="105" x2="281" y2="105" stroke="#fbbf24" stroke-width="2"/>
    <text class="text-accent-amber" x="197" y="88" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Penerbangan Langsung Tanpa Transit</text>

    <text class="svg-text" x="14" y="145" fill="#cbd5e1" font-size="8">• Rute langsung antar bandara sekunder (Biaya landing fee bandara murah)</text>
    <text class="svg-text" x="14" y="162" fill="#cbd5e1" font-size="8">• Satu tipe pesawat seragam (A320/B737) →Efisiensi mekanik &amp; pilot</text>
    <text class="svg-text" x="14" y="179" fill="#cbd5e1" font-size="8">• Waktu putar pesawat cepat di darat (Turnaround time 25 menit) →Utilisasi 14 jam</text>
    <rect class="svg-badge-amber" x="14" y="195" width="367" height="22" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="197" y="210" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Struktur Biaya Operasional Per Kursi Terendah (CASK)</text>
  </g>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Studi Kasus Strategik III: Penerbangan Global & Inovasi Layanan Premium (Emirates Airline vs LCCs)',
  ref: 'Michael Porter Strategy and the Aviation Industry | Kasus Emirates Airline & Model Southwest/Ryanair | Hub Economics',
  intro: 'TM 13 menyajikan studi kasus strategis sektor penerbangan komersial internasional: perbandingan arsitektur jaringan Hub-and-Spoke (Emirates Airline di Dubai) vs jaringan Point-to-Point Low-Cost Carrier (LCC: Southwest, Ryanair, AirAsia): pemanfaatan lokasi geografis geostrategis, skala ekonomis armada pesawat jumbo (Airbus A380 & Boeing 777), integrasi pengalaman penumpang premium (In-Flight Entertainment ICE, Shower Spa, Private Suites), metrik biaya industri penerbangan (CASK: Cost per Available Seat Kilometer vs RASK: Revenue per Available Seat Kilometer), serta manajemen lindung nilai bahan bakar (Fuel Hedging) di tengah turbulensi geopolitik.',
  objectives: [
    'Menganalisis efisiensi ekonomi jaringan Hub-and-Spoke terpusat dibandingkan model Point-to-Point.',
    'Menghitung dan membandingkan metrik kinerja industri penerbangan: CASK, RASK, dan Passenger Load Factor.',
    'Mengevaluasi strategi diferensiasi premium Emirates dalam merebut segmen pelancong bisnis bernilai tinggi.',
    'Menganalisis strategi unbundling layanan pada maskapai berbiaya hemat (LCC) dalam menekan struktur biaya pokok.',
    'Merumuskan strategi manajemen risiko bahan bakar avtur dan mitigasi risiko geopolitik global.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 13.1: Perbandingan Model Jaringan Penerbangan Hub-and-Spoke Terpusat vs Point-to-Point Desentralisasi.',
      svg: SVG_AIRLINE_STRATEGY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 13'
    },
    {
      kind: 'table',
      headers: ['Dimensi Operasional', 'Model Maskapai Jaringan Hub-and-Spoke (Emirates)', 'Model Maskapai Bertarif Rendah LCC (Ryanair / AirAsia)'],
      rows: [
        ['Struktur Jaringan Rute', 'Menghubungkan ratusan kota dunia melalui satu bandara mega-hub sentral (Dubai).', 'Rute langsung antar kota padat (Point-to-Point) tanpa fasilitas transfer bagasi.'],
        ['Komposisi Armada Pesawat', 'Armada ganda berbadan lebar (Airbus A380 dan Boeing 777) untuk rute jarak jauh.', 'Satu tipe pesawat tunggal berbadan sempit (hanya Boeing 737 atau Airbus A320).'],
        ['Waktu Perputaran di Darat', 'Lama (2-3 jam) untuk pembersihan kabin mewah dan transfer ribuan koper transit.', 'Sangat cepat (25-30 menit) untuk memaksimalkan jam terbang harian pesawat.'],
        ['Struktur Pendapatan', 'Bundled: Tiket mencakup bagasi gratis, makanan berkelas, dan hiburan multimedia.', 'Unbundled: Tiket dasar murah; penumpang membayar ekstra untuk kursi, bagasi, dan air minum.'],
        ['Target Segmen Pasar', 'Pelancong bisnis korporasi global, turis jarak jauh, dan penerbangan antar-benua.', 'Pelancong sensitif harga yang bepergian jarak pendek dengan anggaran hemat.']
      ],
      caption: 'Tabel 13.0: Komparasi strategis industri penerbangan dunia.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Metrik Kunci Kinerja Keuangan Maskapai Penerbangan'
    },
    {
      kind: 'formula',
      text: `\\mathbf{\\text{Metrik Efisiensi Biaya (CASK)}}: \\quad \\text{CASK} = \\frac{\\text{Total Biaya Operasi Penerbangan}}{\\text{Available Seat Kilometers (ASK)}}
\\mathbf{\\text{Metrik Efisiensi Pendapatan (RASK)}}: \\quad \\text{RASK} = \\frac{\\text{Total Pendapatan Operasional}}{\\text{Available Seat Kilometers (ASK)}}
\\mathbf{\\text{Tingkat Keterisian Penumpang (Load Factor)}}: \\quad \\text{PLF} = \\frac{\\text{Revenue Passenger Kilometers (RPK)}}{\\text{Available Seat Kilometers (ASK)}} \\times 100\\%
\\text{Keuntungan Operasional Tercipta jika } \\mathbf{\\text{RASK} > \\text{CASK}}`,
      note: 'Maskapai LCC memenangkan persaingan dengan menekan CASK serendah mungkin, sedangkan maskapai premium seperti Emirates memenangkan persaingan dengan mendongkrak RASK setinggi mungkin melalui penjualan tiket kelas bisnis/first-class.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Mengapa Model Armada Tunggal LCC Sangat Efisien?',
      prompt: 'Mengapa maskapai penerbangan bertarif rendah (LCC) seperti Southwest Airlines dan Ryanair bersikeras hanya mengoperasikan satu jenis tipe pesawat saja (Boeing 737)? Efisiensi biaya apa saja yang tercipta dari pilihan strategi ini?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Efisiensi Pelatihan Pilot & Kru**: Semua pilot dan pramugari memiliki satu lisensi tipe (*type rating*) yang sama; maskapai dapat menjadwalkan kru mana saja ke pesawat mana saja tanpa batasan sertifikasi.',
            '**Penghematan Suku Cadang Gudang**: Maskapai hanya perlu menyimpan satu set suku cadang cadangan di bengkel (tidak perlu membeli suku cadang berbeda untuk berbagai mesin), memangkas modal kerja persediaan secara drastis.',
            '**Daya Tawar Pembelian Massal (Purchasing Power)**: Memesan ratusan pesawat dari satu pabrikan (Boeing saja) memberikan diskon volume raksasa hingga 40-50% dari harga katalog resmi.',
            '**Efisiensi Mekanik Perawatan**: Teknisi darat menjadi sangat ahli memperbaiki satu tipe pesawat, mempercepat waktu inspeksi berkala di apron.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 13'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Ekonomi Jaringan Hub-and-Spoke', 'Analisis keterhubungan rute transit global vs keterbatasan point-to-point.', 'Mampu membandingkan keunggulan struktur jaringan maskapai.'],
        ['2', 'Diferensiasi Layanan Premium', 'Penciptaan nilai first-class dan loyalitas pelancong korporat bernilai tinggi.', 'Mampu mengevaluasi sumber keunggulan diferensiasi rute jarak jauh.'],
        ['3', 'Metrik Kinerja Aviasi (CASK/RASK)', 'Kalkulasi efisiensi biaya kursi kilometer dan break-even load factor.', 'Mampu menghitung indikator profitabilitas operasional maskapai.']
      ],
      caption: 'Tabel 13.2: Peta penguasaan submateri TM 13 Manajemen Strategik.'
    },
    CASE_EMIRATES_AIRLINE_STRATEGY,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Geografi Adalah Takdir Keunggulan**: Lokasi sentral Dubai memungkinkan Emirates menghubungkan kota-kota yang sebelumnya tidak pernah memiliki rute penerbangan langsung.',
        '**First Class Membayar Penerbangan**: Penumpang kelas bisnis dan utama (hanya 15% dari total kursi) menyumbang lebih dari 50% dari total pendapatan tiket penerbangan Emirates.',
        '**Hindari Terjebak di Antara (Avoid the Middle)**: Maskapai yang terjebak di tengah (tidak semurah LCC dan tidak semewah Emirates) adalah yang paling rentan mengalami kebangkrutan.'
      ]
    }
  ]
};
