import type { Reading } from '../../../types';

const SVG_ANALYTICAL_PHASES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TIGA TAHAP PENERAPAN PROSEDUR ANALITIS (SA 520)</text>
  
  <!-- Phase 1 -->
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Tahap Perencanaan</text>
  <text x="125" y="102" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">WAJIB (MANDATORY)</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">• Memahami bisnis klien</text>
  <text x="125" y="142" fill="#cbd5e1" font-size="10" text-anchor="middle">• Mengidentifikasi area</text>
  <text x="125" y="158" fill="#cbd5e1" font-size="10" text-anchor="middle">  berisiko tinggi (anomali)</text>
  <text x="125" y="180" fill="#94a3b8" font-size="9.5" text-anchor="middle">• Menentukan sifat, waktu,</text>
  <text x="125" y="195" fill="#94a3b8" font-size="9.5" text-anchor="middle">  dan luas pengujian audit</text>

  <!-- Phase 2 -->
  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">2. Tahap Pengujian</text>
  <text x="340" y="102" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">OPSIONAL (SUBSTANTIF)</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">• Memperoleh bukti</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="10" text-anchor="middle">  substantif atas saldo</text>
  <text x="340" y="158" fill="#cbd5e1" font-size="10" text-anchor="middle">• Efisiensi biaya audit</text>
  <text x="340" y="180" fill="#94a3b8" font-size="9.5" text-anchor="middle">• Misal: Beban bunga</text>
  <text x="340" y="195" fill="#94a3b8" font-size="9.5" text-anchor="middle">  = Utang × Tarif Bunga</text>

  <!-- Phase 3 -->
  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="555" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">3. Tahap Penyelesaian</text>
  <text x="555" y="102" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">WAJIB (MANDATORY)</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="10" text-anchor="middle">• Reviu menyeluruh (Final)</text>
  <text x="555" y="142" fill="#cbd5e1" font-size="10" text-anchor="middle">• Memastikan simpulan</text>
  <text x="555" y="158" fill="#cbd5e1" font-size="10" text-anchor="middle">  masuk akal &amp; konsisten</text>
  <text x="555" y="180" fill="#94a3b8" font-size="9.5" text-anchor="middle">• Mendeteksi adanya risiko</text>
  <text x="555" y="195" fill="#94a3b8" font-size="9.5" text-anchor="middle">  going concern tersisa</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Prosedur Analitis & Analisis Rasio Keuangan dalam Audit',
  ref: 'Arens Ch. 7, 8 | SA 520',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 7: Menguasai teknik prosedur analitis (SA 520) dalam 3 tahapan audit (Perencanaan, Pengujian Substantif, dan Reviu Akhir), analisis data keuangan komparatif, analisis tren dan rasio keuangan, penentuan ambang batas selisih yang dapat diterima (*Threshold of Acceptable Difference*), serta investigasi fluktuasi anomali.',
  objectives: [
    'Mendefinisikan prosedur analitis menurut SA 520.',
    'Menjelaskan fungsi dan sifat kewajiban Prosedur Analitis pada tahap Perencanaan (Wajib), Pengujian Substantif (Opsional), dan Penyelesaian Akhir (Wajib).',
    'Menguasai 5 jenis pembanding data dalam prosedur analitis (Data Industri, Data Historis Klien, Ekspektasi Klien/Anggaran, Ekspektasi Auditor, dan Data Non-Keuangan).',
    'Menghitung dan menginterpretasikan rasio keuangan utama: Likuiditas, Aktivitas, Profitabilitas, dan Solvabilitas untuk tujuan audit.',
    'Merancang prosedur investigasi atas fluktuasi yang tidak lazim atau selisih material.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Tahapan Penerapan Prosedur Analitis dalam Audit',
      svg: SVG_ANALYTICAL_PHASES,
      caption: 'Gambar 7.1: Status kewajiban dan tujuan prosedur analitis pada setiap tahapan perikatan audit.'
    },

    { kind: 'h2', text: '1. Definisi & Hakikat Prosedur Analitis (SA 520)' },
    {
      kind: 'p',
      text: '**Prosedur Analitis** adalah evaluasi atas informasi keuangan yang dilakukan dengan menganalisis hubungan yang masuk akal antara data keuangan dan non-keuangan. Prosedur ini juga mencakup investigasi atas fluktuasi atau hubungan yang teridentifikasi yang tidak konsisten dengan informasi relevan lainnya atau yang berbeda dari nilai yang diharapkan dalam jumlah yang signifikan.'
    },

    { kind: 'h2', text: '2. Lima Jenis Pembanding dalam Prosedur Analitis' },
    {
      kind: 'table',
      headers: ['Jenis Pembanding', 'Metode Analisis', 'Contoh Kasus Audit'],
      rows: [
        ['1. Data Industri (Industry Data)', 'Membandingkan rasio klien dengan rata-rata rasio industri acuan.', 'Rasio Marjin Kotor klien 35% sementara rata-rata industri sejenis hanya 15% $\\rightarrow$ Indikasi persediaan dinilai terlalu tinggi atau penjualan fiktif.'],
        ['2. Data Historis Klien (Prior-Period Data)', 'Analisis tren horizontal antar tahun (tahun berjalan vs tahun lalu).', 'Beban komisi penjualan naik 50% sementara total pendapatan penjualan turun 10%.'],
        ['3. Ekspektasi Anggaran Klien (Budgets)', 'Membandingkan realisasi aktual dengan anggaran yang disetujui.', 'Realisasi biaya pemeliharaan mesin jauh di bawah anggaran.'],
        ['4. Ekspektasi Auditor Sendiri', 'Auditor memproyeksikan saldo berdasarkan model independen.', 'Beban bunga diproyeksikan = Saldo Rata-rata Utang Obligasi × Suku Bunga Kontrak.'],
        ['5. Data Non-Keuangan (Non-Financial Data)', 'Menghubungkan data operasional dengan angka keuangan.', 'Pendapatan kamar hotel dihitung = Jumlah Kamar × Tarif Kamar Rata-rata × Tingkat Hunian (Occupancy Rate).']
      ],
      caption: 'Tabel 7.1: Lima sumber data pembanding untuk membangun ekspektasi auditor.'
    },

    { kind: 'h2', text: '3. Rasio Keuangan Kunci dalam Pendeteksian Salah Saji' },
    {
      kind: 'table',
      headers: ['Kategori Rasio', 'Rasio Kunci', 'Indikasi Risiko Audit'],
      rows: [
        ['Rasio Likuiditas', 'Current Ratio & Quick Ratio', 'Penurunan tajam mengindikasikan kesulitan likuiditas jangka pendek dan ancaman kelangsungan usaha (*going concern*).'],
        ['Rasio Perputaran', 'Days Sales in Receivables (DSO)', 'Kenaikan signifikan hari penagihan piutang mengindikasikan piutang macet yang belum dicadangkan (asersi Penilaian & Alokasi).'],
        ['Rasio Perputaran', 'Days Sales in Inventory (DSI)', 'Kenaikan hari persediaan mengindikasikan barang usang/rusak yang belum diturunkan nilainya (NRV impairment).'],
        ['Rasio Profitabilitas', 'Gross Profit Margin & Operating Margin', 'Fluktuasi marjin kotor yang tidak wajar mengindikasikan salah saji pisah batas (cutoff) penjualan atau persediaan akhir.']
      ],
      caption: 'Tabel 7.2: Hubungan anomali rasio dengan indikator risiko audit.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 7 (Pra-UTS)' },
    {
      kind: 'ul',
      items: [
        '**Status Wajib**: Prosedur Analitis **WAJIB** pada Perencanaan dan Reviu Akhir, tetapi **OPSIONAL** pada pengujian substantif.',
        '**Langkah Analitis**: (1) Bentuk ekspektasi auditor $\\rightarrow$ (2) Tentukan selisih yang dapat diterima $\\rightarrow$ (3) Bandingkan ekspektasi dengan angka tercatat $\\rightarrow$ (4) Investigasi selisih signifikan.',
        '**Kombinasi Bukti**: Prosedur analitis substantif yang andal dapat mengurangi jumlah pengujian rincian saldo (Test of Details).'
      ]
    }
  ]
};