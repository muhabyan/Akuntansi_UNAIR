import type { Reading } from '../../../types';
import { CASE_UTS_MANSTRAT_INTEGRATED } from '../manstratPracticeCases';

const SVG_UTS_MANSTRAT_SUMMARY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMns8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="s1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="s2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="s3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="s4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMns8)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PETA SINTESIS KURIKULUM PRA-UTS MANAJEMEN STRATEGIK (TM 1 - TM 7)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ROADMAP UTS</text>

  <!-- 4 Pillars Roadmap -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#s1)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="21" fill="#38bdf8" font-size="10.5" font-weight="800">ANALISIS LINGKUNGAN</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-blue" x="44" y="56" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">TM 1 - TM 2</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• 3 Tingkat Hierarki Strategi</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Visi, Misi, Sasaran Strategis</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Analisis Makro PESTEL</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• 5 Kekuatan Bersaing Porter</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Pemetaan Strategic Groups</text>
    <rect class="svg-badge-blue" x="14" y="185" width="167" height="24" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Scanning Peluang &amp; Ancaman</text>
  </g>

  <polygon points="237,185 247,190 237,195" fill="#38bdf8"/>

  <g transform="translate(250, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#s2)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="21" fill="#34d399" font-size="10.5" font-weight="800">SUMBER DAYA INTERNAL</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-green" x="44" y="56" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">TM 3</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Rantai Nilai (Value Chain)</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• 5 Aktivitas Primer Porter</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• 4 Aktivitas Pendukung</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• Kerangka VRIO (Jay Barney)</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Parit Keunggulan (SCA)</text>
    <rect class="svg-badge-green" x="14" y="185" width="167" height="24" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Identifikasi Kompetensi Inti</text>
  </g>

  <polygon points="452,185 462,190 452,195" fill="#34d399"/>

  <g transform="translate(465, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#s3)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="14" y="21" fill="#fbbf24" font-size="10.5" font-weight="800">FORMULASI &amp; GLOBAL</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-amber" x="44" y="56" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">TM 4 - TM 5</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• 4 Strategi Generik Porter</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Cost vs Differentiation</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Bahaya "Stuck in the Middle"</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• 4 Strategi Global Bartlett</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Sinergi Efisiensi &amp; Budaya</text>
    <rect class="svg-badge-amber" x="14" y="185" width="167" height="24" rx="6" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Penentuan Posisi Pasar</text>
  </g>

  <polygon points="667,185 677,190 667,195" fill="#fbbf24"/>

  <g transform="translate(680, 75)">
    <rect class="svg-card" x="0" y="0" width="185" height="225" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="185" height="32" rx="12" fill="url(#s4)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="14" y="21" fill="#a78bfa" font-size="10.5" font-weight="800">KENDALI &amp; STRUKTUR</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-purple" x="44" y="56" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">TM 6 - TM 7</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Informational Control Loop</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Behavioral Control Triangle</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Tata Kelola Good Governance</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• Desain Ambidextrous</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Eksploitasi vs Eksplorasi</text>
    <rect class="svg-badge-purple" x="14" y="185" width="157" height="24" rx="6" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="92" y="201" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Institusionalisasi Eksekusi</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Integrasi holistik TM 1-7 mempersiapkan mahasiswa mengupas studi kasus korporasi multidimensional pada evaluasi UTS.</text>
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
