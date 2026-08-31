// =============================================================
// src/data/manstrat/manstratPracticeCases.ts
// Kasus Praktik Interaktif Manajemen Strategik (MNS301 / MNU307)
// Acuan: Dess et al. 11e, Blue Ocean Strategy, Strategy Maps (Kaplan-Norton)
// =============================================================
import type { ContentBlock } from '../../types';

// -------------------------------------------------------------
// KASUS 1: Analisis RBV & VRIO Framework (TM 3)
// -------------------------------------------------------------
export const CASE_VRIO_ANALYSIS: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 1: Evaluasi Keunggulan Bersaing Berkelanjutan dengan Kerangka VRIO',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Kondisi Sumber Daya PT Inovasi Baterai Nusantara',
      text: 'Perusahaan mengembangkan teknologi baterai Solid-State untuk kendaraan listrik dengan kepadatan energi 2x lipat dan waktu pengisian daya hanya 10 menit. Paten terdaftar secara global, memiliki tim R&D ahli kimia material langka, dan struktur pabrik yang terintegrasi secara modular.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Analisis 4 Pertanyaan Kunci VRIO (Resource-Based View)',
      prompt: 'Evaluasi apakah sumber daya menghasilkan Keunggulan Bersaing Berkelanjutan (*Sustained Competitive Advantage*):',
      blocks: [
        {
          kind: 'table',
          headers: ['Kriteria VRIO', 'Pertanyaan Uji Strategis', 'Status Penilaian Kasus', 'Implikasi Daya Saing'],
          rows: [
            ['**1. Valuable (Bernilai)?**', 'Apakah sumber daya mampu menetralisir ancaman pasar atau mengeksploitasi peluang bisnis?', '**YA (YES)**: Menghasilkan pengisian daya super cepat dan daya jangkau 2x lipat yang dicari konsumen.', 'Kelemahan Bersaing Teratasi (*Competitive Parity*).'],
            ['**2. Rare (Langka)?**', 'Apakah sumber daya hanya dikuasai oleh sedikit pesaing di industri?', '**YA (YES)**: Hanya sedikit produsen global yang memiliki formula kimia solid-state stabil.', 'Keunggulan Bersaing Sementara (*Temporary Competitive Advantage*).'],
            ['**3. Inimitable (Sulit Ditiru)?**', 'Apakah pesaing menghadapi kerugian biaya besar jika mencoba meniru (Kondisi historis unik, *Causal Ambiguity*, atau *Social Complexity*)?', '**YA (YES)**: Dilindungi hak paten global berlapis dan kompleksitas formula kimia R&D bertahun-tahun.', 'Potensi Keunggulan Berkelanjutan.'],
            ['**4. Organized (Terorganisir)?**', 'Apakah struktur organisasi, sistem kontrol, dan kompensasi perusahaan siap mengeksploitasi potensi sumber daya?', '**YA (YES)**: Didukung rantai pasok modular dan kemitraan strategis dengan pabrikan otomotif global.', '**KEUNGGULAN BERSAING BERKELANJUTAN (*SUSTAINED COMPETITIVE ADVANTAGE*)**']
          ],
          caption: 'Tabel Evaluasi VRIO Sumber Daya & Kapabilitas Perusahaan.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 2: Blue Ocean Strategy & ERRC Grid (TM 9)
// -------------------------------------------------------------
export const CASE_BLUE_OCEAN_ERRC: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 2: Penerapan Kerangka Kerja Empat Tindakan (ERRC Grid) Cirque du Soleil',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Dilema Industri Sirkus Tradisional',
      text: 'Sirkus konvensional terjebak dalam *Red Ocean* persaingan berdarah: biaya pemeliharaan hewan sirkus melonjak, tuntutan hak perlindungan satwa meningkat, dan anak-anak beralih ke video game. Pendiri Cirque du Soleil menciptakan *Blue Ocean* dengan menggabungkan atraksi sirkus dan teater seni dramatis untuk penonton dewasa.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Matriks ERRC Grid (Eliminate, Reduce, Raise, Create)',
      prompt: 'Pahami bagaimana inovasi nilai (Value Innovation) mendobrak trade-off biaya vs diferensiasi:',
      blocks: [
        {
          kind: 'table',
          headers: ['Tindakan Strategis', 'Elemen Industri yang Diubah', 'Dampak terhadap Biaya & Nilai Konsumen'],
          rows: [
            ['**Eliminate (Hapuskan)**', '• Pertunjukan atraksi hewan sirkus mahal\n• Bintang sirkus terkenal dengan honor tinggi\n• Tiga panggung simultan yang membingungkan', '**Penurunan Biaya Operasional Drastis** (Biaya pakan hewan, asuransi, dan kandang menjadi Rp 0).'],
            ['**Reduce (Kurangi)**', '• Unsur humor lelucon badut slapstick yang kekanak-kanakan\n• Tingkat bahaya atraksi murni', 'Mengalihkan fokus ke alur cerita tematik artistik.'],
            ['**Raise (Tingkatkan)**', '• Keunikan dan kenyamanan tempat duduk teater/tenda mewah\n• Kualitas musik pengiring orkestra hidup (*Live score*)', '**Peningkatan Nilai Pengalaman Konsumen** sehingga bersedia membayar tiket setara pertunjukan teater Broadway.'],
            ['**Create (Ciptakan)**', '• Alur cerita naratif dramatis (*Theme Storyline*)\n• Tarian balet dan koreografi akrobatik artistik kelas dunia', '**Membuka Segmen Pasar Baru (Non-Customers)**: Menarik penonton dewasa dan korporasi yang sebelumnya tidak pernah menonton sirkus.']
          ],
          caption: 'Tabel Matriks ERRC Grid Cirque du Soleil (Kim & Mauborgne).'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------
// KASUS 3: Strategy Map Kaplan & Norton (TM 10)
// -------------------------------------------------------------
export const CASE_STRATEGY_MAP: ContentBlock = {
  kind: 'example',
  title: 'Studi Kasus 3: Perancangan Strategy Map Hubungan Kausalitas Empat Perspektif',
  blocks: [
    {
      kind: 'callout',
      variant: 'info',
      title: 'Tujuan Strategis Bank Digital Sejahtera',
      text: 'Bank ingin meningkatkan Return on Equity (ROE) menjadi 20% dalam 3 tahun melalui diferensiasi layanan perbankan digital tanpa cabang (*branchless banking*) yang cepat, aman, dan tanpa antrean.',
    },
    {
      kind: 'solution-reveal',
      title: 'Buka Rantai Sebab-Akibat Strategy Map (Kaplan & Norton)',
      prompt: 'Pahami konversi dari aset tak berwujud (Learning & Growth) menuju hasil finansial berwujud:',
      blocks: [
        {
          kind: 'ol',
          items: [
            '**1. Perspektif Keuangan (Financial Perspective - Tangible Outcomes)**:\n$$\\text{Meningkatkan ROE } 20\\% \\leftarrow \\text{Pertumbuhan Pendapatan Fee-Based} + \\text{Efisiensi Rasio BOPO}$$',
            '**2. Perspektif Pelanggan (Customer Perspective - Value Proposition)**:\n$$\\text{Meningkatkan Retensi Nasabah Muda} \\leftarrow \\text{Kemudahan Transaksi Instant 24/7} + \\text{Bebas Biaya Transfer}$$',
            '**3. Perspektif Proses Bisnis Internal (Internal Business Processes)**:\n$$\\text{Operasi Tanpa Gangguan (99,99% Uptime)} \\leftarrow \\text{Digital Onboarding 3 Menit} + \\text{Keamanan Siber AI Anti-Fraud}$$',
            '**4. Perspektif Pembelajaran & Pertumbuhan (Learning & Growth - Intangible Assets)**:\n$$\\text{Pelatihan Data Scientist & Cloud Architect} + \\text{Budaya Inovasi Agile} + \\text{Infrastruktur Cloud Mikroservis}$$'
          ]
        }
      ]
    }
  ]
};