import type { Reading } from '../../../types';
import { CASE_UTS_MANSTRAT_INTEGRATED } from '../manstratPracticeCases';

const SVG_UTS_MANSTRAT_SUMMARY = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PETA KONSEP SINTESIS MATERI PRA-UTS MANAJEMEN STRATEGIK (TM 1 - TM 7)</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">TM 1 &amp; TM 2</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Fondasi &amp; Industri:</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Keunggulan Bersaing</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Simbiosis Stakeholder</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Porters Five Forces</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Analisis Eksternal</text>

  <rect x="185" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="257" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">TM 3 &amp; TM 4</text>
  <text x="257" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Internal &amp; Bisnis:</text>
  <text x="257" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Value Chain Porter</text>
  <text x="257" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kerangka VRIO</text>
  <text x="257" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 3 Strategi Generik</text>
  <text x="257" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Kapabilitas &amp; Posisi</text>

  <rect x="345" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="417" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">TM 5 &amp; TM 6</text>
  <text x="417" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Korporasi &amp; Kontrol:</text>
  <text x="417" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Diversifikasi &amp; M&amp;A</text>
  <text x="417" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 4 Strategi Global</text>
  <text x="417" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Informational Control</text>
  <text x="417" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Tata Kelola Agensi</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">TM 7</text>
  <text x="580" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Desain &amp; Pimpinan:</text>
  <text x="580" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Desain Ambidextrous</text>
  <text x="580" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Hambatan Perubahan</text>
  <text x="580" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Corporate Venture</text>
  <text x="580" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Eksekusi Korporasi</text>
</svg>`;

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan & Review Ujian Tengah Semester (UTS) Manajemen Strategik',
  ref: 'Sintesis Komprehensif TM 1 s/d TM 7 | Kumpulan Soal Analisis Kasus UTS Strategik Terpilih | 10 Jebakan Soal Strategik',
  intro: 'TM 8 adalah modul peninjauan komprehensif Pra-UTS Manajemen Strategik yang mensintesiskan konsep-konsep analitis paruh pertama semester: penciptaan keunggulan bersaing, simbiosis pemangku kepentingan, model 5 kekuatan Porter, pemetaan kelompok strategis, rantai nilai (Value Chain), pengujian VRIO atas sumber daya internal, 3 strategi generik Porter, siklus hidup industri, diversifikasi korporasi dan M&A, model berlian Porter, 4 strategi global Bartlett & Ghoshal, sistem pengendalian strategik, tata kelola keagenan, serta desain organisasi ambidextrous.',
  objectives: [
    'Mengintegrasikan analisis eksternal industri (Five Forces) dan internal kapabilitas (VRIO) ke dalam matriks SWOT terapan.',
    'Menyelesaikan soal studi kasus korporasi multi-divisi menggunakan kerangka kerja manajemen strategik yang presisi.',
    'Mendeteksi dan menghindari 10 jebakan konseptual terpopuler pada Ujian Tengah Semester Manajemen Strategik.',
    'Menyusun rekomendasi strategik yang dapat dieksekusi (*actionable strategic recommendations*) dengan mitigasi risiko operasional.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 8.1: Peta Sintesis Integratif Materi Pra-UTS Manajemen Strategik.',
      svg: SVG_UTS_MANSTRAT_SUMMARY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 8: Top 5 Tipikal Soal Kasus UTS'
    },
    {
      kind: 'table',
      headers: ['Nomor Kasus UTS', 'Topik Strategik yang Diuji', 'Konsep / Model Analisis Kunci', 'Kunci Pendekatan Jawaban Ujian'],
      rows: [
        ['Soal Kasus 1', 'Evaluasi Daya Tarik Industri & Profitabilitas', 'Model 5 Kekuatan Bersaing Porter dan Hambatan Masuk.', 'Buktikan mengapa industri penerbangan memiliki laba rendah akibat kekuatan pembeli dan rivalitas sengit.'],
        ['Soal Kasus 2', 'Audit Sumber Daya & Kapabilitas Unggulan', 'Rantai Nilai Porter dan Kerangka Kerja VRIO Jay Barney.', 'Uji apakah paten teknologi dan saluran distribusi menghasilkan keunggulan sementara atau berkelanjutan.'],
        ['Soal Kasus 3', 'Dilema Posisi Bersaing dan Resiko Biaya', 'Strategi Generik Porter dan Bahaya Stuck in the Middle.', 'Identifikasi kegagalan perusahaan yang mencoba mengejar biaya murah dan diferensiasi tanpa skala ekonomis.'],
        ['Soal Kasus 4', 'Rencana Diversifikasi & Aliansi Korporasi', 'Diversifikasi Terkait (Economies of Scope) vs Tak Terkait.', 'Evaluasi sinergi berbagi rantai nilai dan risiko kelebihan harga bayar akuisisi (Winners Curse).'],
        ['Soal Kasus 5', 'Tata Kelola Perusahaan & Masalah Keagenan', 'Teori Keagenan dan Peran Dewan Komisaris Independen.', 'Rancang mekanisme komite audit dan skema opsi saham untuk menyelaraskan kepentingan agen dan prinsipal.']
      ],
      caption: 'Tabel 8.0: Matriks 5 tipe soal kasus terpopuler UTS Manajemen Strategik.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 10 Jebakan Terpopuler UTS Manajemen Strategik'
    },
    {
      kind: 'ul',
      items: [
        '**Jebakan 1 (Efektivitas Operasional Adalah Strategi)**: Mengira penerapan Six Sigma dan TQM otomatis merupakan strategi. Porter menegaskan OE mudah ditiru pesaing; strategi adalah **Strategic Positioning (memilih aktivitas yang berbeda)**.',
        '**Jebakan 2 (Pesaing Dianggap Substitusi)**: Mengacaukan antara sesama anggota industri dengan produk substitusi. Substitusi **berasal dari industri yang berbeda** yang memenuhi fungsi kebutuhan serupa.',
        '**Jebakan 3 (VRIO Cukup di Huruf V dan R)**: Menilai bahwa sumber daya yang bernilai (*Valuable*) dan langka (*Rare*) sudah cukup untuk keunggulan bersaing abadi. Tanpa perlindungan **Inimitable** (sulit ditiru) dan **Organized** (terorganisir), keunggulan tersebut hanya bertahan sementara.',
        '**Jebakan 4 (Cost Leadership Sama dengan Harga Murah)**: Mengira *Cost Leadership* berarti menjual produk paling murah ke konsumen. Cost leadership adalah **keunggulan struktur biaya produksi terendah di pabrik**; perusahaan bisa saja menjual dengan harga pasar normal untuk meraup margin laba super.',
        '**Jebakan 5 (Tahap Penurunan Industri Harus Ditinggalkan)**: Berasumsi bahwa industri yang sedang turun (*Decline*) harus langsung ditutup. Perusahaan dapat menerapkan strategi **Harvesting** (panen kas) atau **Consolidating** ceruk monopoli yang sangat menguntungkan.',
        '**Jebakan 6 (Diversifikasi Konglomerat Selalu Menguntungkan)**: Mengira memiliki banyak bisnis acak selalu mengurangi risiko. Kenyataannya, diversifikasi tak terkait (*Unrelated*) sering kali menghancurkan nilai (*Conglomerate Discount*) karena tingginya biaya birokrasi korporasi.',
        '**Jebakan 7 (M&A Solusi Paling Cepat)**: Memilih akuisisi sebagai satu-satunya jalan ekspansi. Lebih dari 70% merger dan akuisisi gagal menghasilkan sinergi akibat benturan budaya dan harga beli yang terlalu mahal (*Overpayment*).',
        '**Jebakan 8 (Pengendalian Strategis Sekadar Mengecek Anggaran)**: Menganggap *Strategic Control* sama dengan audit akuntansi keuangan biasa. Pengendalian strategis berfokus pada **Informational Control**: mempertanyakan apakah asumsi lingkungan luar masih relevan.',
        '**Jebakan 9 (Komisaris Eksekutif Bukan Independen)**: Mengira direktur operasional dapat bertindak sebagai pengawas independen. Tata kelola yang baik mewajibkan mayoritas anggota Dewan Komisaris adalah pihak independen yang tidak memiliki saham pengendali atau hubungan keluarga.',
        '**Jebakan 10 (Struktur Ambidextrous Menghilangkan Eksploitasi)**: Mengira perusahaan harus mengubah seluruh organisasinya menjadi startup lincah. Ambidextrous mensyaratkan **bisnis inti tetap eksploitasi efisien**, sementara eksplorasi radikal dikelola di unit inkubator terpisah.'
      ]
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Integrasi Kerangka Industri Porter dan Kapabilitas VRIO',
      prompt: 'Bagaimana keterkaitan logis antara Analisis 5 Kekuatan Porter (Eksternal) dengan Analisis Rantai Nilai & VRIO (Internal) dalam memformulasikan strategi bersaing korporasi?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Keterkaitan Logis (Strategic Fit)**:\n1. **Analisis 5 Kekuatan Porter (Menjawab "Di Mana Kita Bersaing?")**: Memetakan struktur industri eksternal, mengidentifikasi ancaman pendatang baru, daya tawar pembeli/pemasok, dan menentukan rata-rata potensi laba industri.\n2. **Analisis Rantai Nilai & VRIO (Menjawab "Dengan Senjata Apa Kita Menang?")**: Mengaudit sumber daya dan kapabilitas unik internal untuk menetralkan ancaman industri tersebut (contoh: rantai pasok JIT VRIO menetralkan daya tawar pemasok).\n3. **Formulasi Strategi Generik**: Menghubungkan kekuatan internal VRIO dengan posisi pasar (Cost Leadership atau Diferensiasi) untuk membangun parit pelindung ekonomi (*economic moat*) yang tidak dapat ditembus pesaing.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 8'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Integrasi Analisis Eksternal & Internal', 'Penyelarasan Five Forces Porter dengan audit VRIO rantai nilai.', 'Mampu menyusun analisis situasi strategis korporasi terpadu.'],
        ['2', 'Penguasaan 10 Jebakan Soal Strategik', 'Penghindaran kekeliruan definisi konsep bersaing dan tata kelola.', 'Mampu menjawab soal jebakan esai dan pilihan ganda secara presisi.'],
        ['3', 'Perumusan Rekomendasi Solutif', 'Penerapan metodologi pemecahan kasus berbasis bukti empiris.', 'Mampu menghasilkan rencana tindakan strategik yang dapat dieksekusi.']
      ],
      caption: 'Tabel 8.2: Peta penguasaan submateri TM 8 Manajemen Strategik.'
    },
    CASE_UTS_MANSTRAT_INTEGRATED,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Gunakan Framework, Bukan Intuisi Liar**: Dosen manajemen strategik menilai seberapa tajam Anda menggunakan alat analisis (Five Forces, VRIO, Generic Strategies, Ansoff, BCG), bukan sekadar cerita opini pribadi.',
        '**Parit Ekonomi (Economic Moat)**: Keberhasilan strategi diukur dari seberapa lebar dan dalam parit pertahanan yang dibangun perusahaan untuk melindungi margin labanya dari serbuan kompetitor.',
        '**Sinergi Nyata, Bukan Angka Neraca**: Sinergi korporasi hanya ada jika terjadi penciptaan nilai riil di lapangan (berbagi pabrik, berbagi saluran distribusi, atau transfer keahlian litbang).'
      ]
    }
  ]
};
