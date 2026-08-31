import type { Reading } from '../../../types';

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Studi Kasus Strategik III: Penerbangan Global & Inovasi Layanan Premium (Emirates Airline vs LCCs)',
  ref: 'Silabus Resmi Manajemen Stratejik FEB UNAIR | Case Study: Emirates Airline',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 13: Menganalisis studi kasus industri penerbangan komersial internasional: Model Bisnis Hub-and-Spoke Global Emirates Airline (pemanfaatan keunggulan geografis Dubai sebagai poros penghubung 8 jam penerbangan ke dua pertiga populasi dunia), armada eksklusif berbadan lebar (Airbus A380 & Boeing 777), strategi diferensiasi pengalaman penumpang kelas atas (*First Class Private Suites, Onboard Shower Spa, ICE Entertainment*), tantangan fluktuasi harga bahan bakar avtur, persaingan sengit dari maskapai berbiaya hemat (*Low-Cost Carriers* / LCC), serta maskapai teluk saingan (Qatar Airways, Etihad).',
  objectives: [
    'Menganalisis keunggulan bersaing geografis (*Geographic Strategic Advantage*) Dubai International Airport sebagai mega-hub global.',
    'Mengevaluasi strategi armada homogen berbadan lebar (*Wide-Body Fleet: A380 & B777*) dalam memaksimalkan kapasitas transit dan skala ekonomis.',
    'Menganalisis strategi diferensiasi premium Emirates yang membenarkan harga tiket tinggi di kabin kelas bisnis dan utama.',
    'Membandingkan model jaringan Hub-and-Spoke Emirates vs Model Point-to-Point maskapai LCC (AirAsia, Ryanair).',
    'Merumuskan respon strategis Emirates terhadap perubahan tren penerbangan pascapandemi dan efisiensi bahan bakar pesawat generasi baru (A350, B787 Dreamliner).'
  ],
  blocks: [
    { kind: 'h2', text: '1. Tiga Pilar Keunggulan Bersaing Emirates Airline' },
    {
      kind: 'table',
      headers: ['Pilar Strategis', 'Implementasi Operasional', 'Keunggulan Bersaing yang Diciptakan'],
      rows: [
        ['**1. Lokasi Geografis Dubai (The 8-Hour Hub)**', 'Dubai terletak di persimpangan strategis antara Eropa, Asia, Afrika, dan Australia.', 'Mampu menghubungkan dua kota mana pun di dunia hanya dengan satu kali transit singkat (*Connecting the World*).'],
        ['**2. Komitmen Armada Berbadan Lebar (Wide-Body Only)**', 'Hanya mengoperasikan pesawat raksasa Airbus A380 dan Boeing 777 tanpa pesawat lorong tunggal kecil.', 'Biaya operasional per kursi (*Cost per Available Seat Kilometer*) sangat rendah saat kapasitas penumpang penuh.'],
        ['**3. Diferensiasi Layanan Tanpa Kompromi**', 'Inovasi fasilitas mewah: Shower Spa di udara, Onboard Lounge Bar, menu makanan gourmet chef dunia, dan sistem hiburan *ice* peraih penghargaan 15 tahun berturut-turut.', 'Membangun loyalitas penumpang bisnis internasional yang memberikan imbal hasil margin profit tertinggi.']
      ],
      caption: 'Tabel 13.1: Tiga fondasi keunggulan kompetitif Emirates.'
    },

    { kind: 'h2', text: '2. Hub-and-Spoke vs Point-to-Point Network' },
    {
      kind: 'table',
      headers: ['Model Jaringan Penerbangan', 'Karakteristik Operasi', 'Kelebihan & Kelemahan Utama'],
      rows: [
        ['**Hub-and-Spoke (Emirates, SIA, Qatar)**', 'Seluruh penerbangan dari berbagai kota pengumpan (*spokes*) diterbangkan ke satu bandara pusat mega-hub (Dubai) untuk ditransfer ke destinasi akhir.', '• **Kelebihan**: Efisiensi rute maksimal; mampu melayani ribuan kombinasi pasangan kota dunia.\n• **Kelemahan**: Ketergantungan tinggi pada kelancaran operasional bandara hub; risiko kemacetan transit.'],
        ['**Point-to-Point (LCC / Ryanair, AirAsia)**', 'Penerbangan langsung antar dua kota sekunder tanpa melalui bandara transit pusat.', '• **Kelebihan**: Waktu tempuh langsung cepat, waktu putar pesawat di darat (*turnaround time*) singkat (25 menit).\n• **Kelemahan**: Tidak dapat melayani rute jarak jauh lintas benua (*Long-Haul*) secara efisien.']
      ],
      caption: 'Tabel 13.2: Perbandingan arsitektur rute penerbangan global.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Diskusi Kasus TM 13' },
    {
      kind: 'ul',
      items: [
        '**Open Skies Policy**: Kebijakan langit terbuka yang didorong pemerintah Dubai memungkinkan Emirates berekspansi ke berbagai negara tanpa batasan kuota penerbangan proteksionis.',
        '**Tantangan Dekarbonisasi Aviasi**: Industri penerbangan global menghadapi target net-zero emission 2050 yang mewajibkan transisi ke Bahan Bakar Penerbangan Berkelanjutan (*Sustainable Aviation Fuel* / SAF).',
        '**Premium Economy**: Inovasi terbaru Emirates untuk menangkap segmen penumpang kelas menengah yang ingin kenyamanan lebih tanpa membayar harga penuh tiket Business Class.'
      ]
    }
  ]
};