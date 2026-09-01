import type { Reading } from '../../../types';
import { CASE_EMIRATES_AIRLINE_STRATEGY } from '../manstratPracticeCases';

const SVG_AIRLINE_STRATEGY = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL JARINGAN HUB-AND-SPOKE (EMIRATES) VS POINT-TO-POINT (LCC)</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">HUB-AND-SPOKE GLOBAL (EMIRATES)</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Mega-Hub Tunggal di Dubai:</text>
  <text x="177" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pesawat raksasa berbadan lebar (A380, B777)</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Menghubungkan kota sekunder ke seluruh benua</text>
  <text x="177" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Layanan mewah first-class &amp; business lounge</text>
  <text x="177" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Konektivitas Global &amp; Marjin Tinggi</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="497" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">POINT-TO-POINT LCC (RYANAIR / LION)</text>
  <text x="497" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Penerbangan Langsung Antar Kota:</text>
  <text x="497" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Armada tunggal berbadan sempit (B737/A320)</text>
  <text x="497" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Perputaran pesawat kilat 25 menit di apron</text>
  <text x="497" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Unbundling tarif: bagasi &amp; makanan berbayar</text>
  <text x="497" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Efisiensi Biaya per Kursi (CASK)</text>
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
