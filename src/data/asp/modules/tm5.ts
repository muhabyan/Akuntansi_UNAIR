import type { Reading } from '../../../types';
import { CASE_BUDGET_APPROACHES_PBB_ZBB } from '../aspPracticeCases';

const SVG_BUDGET_APPROACHES = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="tradGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <linearGradient id="npmGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp5)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">EVOLUSI PENDEKATAN ANGGARAN: TRADISIONAL (LINE-ITEM) VS NEW PUBLIC MANAGEMENT (KINERJA)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">BUDGET EVOLUTION</text>

  <!-- Left: Traditional Budgeting -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#tradGrad)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="16" y="20" fill="#f87171" font-size="10.5" font-weight="800">1. ANGGARAN TRADISIONAL (LINE-ITEM / INCREMENTAL)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-red" fill="#f87171" font-weight="700">Sifat Inkrementalisme:</tspan> Anggaran tahun berjalan ditambah persentase kenaikan rutin (misal +10%)</text>
    <text class="svg-text" x="14" y="72" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-red" fill="#f87171" font-weight="700">Orientasi Input:</tspan> Fokus hanya pada rincian belanja pos mata anggaran (ATK, lembur, dinas)</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-red" fill="#f87171" font-weight="700">Kelemahan Utama:</tspan> Tidak mengukur apakah belanja tersebut menghasilkan manfaat riil bagi publik</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• Memicu fenomena "Spend It or Lose It" di akhir tahun anggaran</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="8">• Struktur kaku, sentralistis, &amp; minim fleksibilitas operasional</text>
    
    <rect class="svg-badge-red" x="14" y="175" width="367" height="30" rx="6" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="197" y="194" fill="#f87171" font-size="8" font-weight="700" text-anchor="middle">Paradigma Usang: Habiskan Anggaran Tanpa Ukuran Hasil</text>
  </g>

  <!-- Right: New Public Management -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#npmGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="10.5" font-weight="800">2. ANGGARAN MODERN (PERFORMANCE-BASED / NPM)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Orientasi Output &amp; Outcome:</tspan> Setiap rupiah dikaitkan dengan Indikator Kinerja Utama (IKU)</text>
    <text class="svg-text" x="14" y="72" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Prinsip Value for Money:</tspan> Menjamin aspek Ekonomi (Hemat), Efisiensi, &amp; Efektivitas belanja</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Pendekatan Terpadu:</tspan> Zero-Based Budgeting (ZBB) &amp; Kerangka Pengeluaran Jangka Menengah (KPJM)</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• Menggunakan Analisis Standar Belanja (ASB) &amp; Standar Biaya Masukan (SBM)</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="8">• Desentralisasi kewenangan dengan akuntabilitas hasil yang terukur</text>
    
    <rect class="svg-badge-green" x="14" y="175" width="367" height="30" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="197" y="194" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Paradigma Modern: Money Follows Program &amp; Kinerja Pelayanan</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Indonesia mengadopsi Penganggaran Berbasis Kinerja (PBK) melalui UU 17/2003 untuk menjamin akuntabilitas setiap rupiah uang rakyat.</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Pendekatan Sistem Penganggaran Sektor Publik: Tradisional vs NPM (PBB, ZBB, PPBS)',
  ref: 'Mardiasmo Ch. 5 | Perbandingan Line-Item vs Penganggaran Berbasis Kinerja (PBK) | Zero-Based Budgeting',
  intro: 'TM 5 membahas evolusi dan tipologi sistem penganggaran publik: kelemahan sistem anggaran tradisional (Line-Item Budgeting dan Inkrementalisme), paradigma New Public Management (NPM), mekanisme Penganggaran Berbasis Kinerja (Performance-Based Budgeting / PBK), pembentukan paket keputusan pada Zero-Based Budgeting (ZBB), serta integrasi perencanaan multi-periode dalam Planning-Programming-Budgeting System (PPBS).',
  objectives: [
    'Membandingkan ciri-ciri, kelebihan, dan kelemahan anggaran tradisional vs anggaran berbasis kinerja.',
    'Menganalisis fenomena inkrementalisme dan sindrom penghabisan anggaran akhir tahun.',
    'Merumuskan indikator input, output, dan outcome dalam kerangka Penganggaran Berbasis Kinerja (PBK).',
    'Menjelaskan 3 langkah operasional penyusunan Zero-Based Budgeting (ZBB).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 5.1: Perbandingan Paradigma Anggaran Tradisional vs New Public Management (NPM).',
      svg: SVG_BUDGET_APPROACHES
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 5'
    },
    {
      kind: 'table',
      headers: ['Sistem Penganggaran', 'Prinsip Operasional', 'Keunggulan Utama', 'Tantangan Implementasi'],
      rows: [
        ['Tradisional (Line-Item)', 'Membagi anggaran berdasarkan jenis belanja (mata anggaran) dengan kenaikan persentase tahunan.', 'Sederhana, mudah diawasi secara ketaatan kas legalitas.', 'Inefisiensi terstruktur, tidak berorientasi pada hasil bagi warga.'],
        ['Penganggaran Berbasis Kinerja (PBK)', 'Mengalokasikan dana berdasarkan keterkaitan antara masukan dan target kinerja (Output & Outcome).', 'Meningkatkan akuntabilitas hasil dan efisiensi alokasi sumber daya.', 'Kesulitan merumuskan indikator outcome kuantitatif yang objektif.'],
        ['Zero-Based Budgeting (ZBB)', 'Setiap program dievaluasi dari titik dasar nol tanpa mengasumsikan alokasi tahun lalu wajib dilanjutkan.', 'Mengeliminasi program usang dan mubazir secara radikal.', 'Menuntut waktu, biaya analisis, dan beban dokumen kerja sangat tinggi.'],
        ['Planning-Programming-Budgeting (PPBS)', 'Mengintegrasikan perencanaan strategis jangka panjang dengan pemrograman anggaran sektoral.', 'Mencegah tumpang tindih program antar-dinas pemerintah.', 'Memerlukan sistem informasi terpadu dan kapasitas analisis ekonometrik.']
      ],
      caption: 'Tabel 5.0: Matriks perbandingan 4 sistem penganggaran sektor publik.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Rantai Kinerja PBK'
    },
    {
      kind: 'formula',
      text: `\\text{Rantai Nilai Kinerja (Performance Value Chain)}:
\\text{Input (Dana, SDM)} \\longr→ \\text{Proses (Aktivitas)} \\longr→ \\text{Output (Barang/Jasa Dihasilkan)} \\longr→ \\text{Outcome (Manfaat Nyata)} \\longr→ \\text{Impact (Dampak Jangka Panjang)}
\\text{Rasio Efisiensi Teknis} = \\frac{\\text{Realisasi Biaya Input}}{\\text{Output Fisik yang Dihasilkan}} \\quad \\text{(Biaya per Unit Output)}`,
      note: 'Tolok ukur keberhasilan PBK di Indonesia adalah ketercapaian target Standar Pelayanan Minimal (SPM) dan Indikator Kinerja Utama (IKU) Kepala Daerah.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Diferensiasi Output vs Outcome Program Kesehatan',
      prompt: 'Dinas Kesehatan melaksanakan program imunisasi campak balita. Tentukan mana yang merupakan Input, Output, dan Outcome dari program tersebut!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Input**: Anggaran kas Rp 500.000.000, 10.000 ampul vaksin campak, dan 50 orang tenaga vaksinator Puskesmas.',
            '**Output**: Jumlah balita yang berhasil disuntik vaksin campak secara lengkap sebanyak 9.800 balita (Cakupan 98%).',
            '**Outcome**: Penurunan angka kejadian luar biasa (KLB) penyakit campak balita di wilayah kerja sebesar 90% dan penurunan angka kematian bayi akibat komplikasi campak.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 5'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kelemahan Anggaran Tradisional', 'Line-item, inkrementalisme, dan sindrom penghabisan anggaran akhir tahun.', 'Mampu mengkritisi praktik anggaran tradisional birokrasi.'],
        ['2', 'Penganggaran Berbasis Kinerja (PBK)', 'Penyusunan indikator input, output, outcome, dan standar biaya masukan (SBM).', 'Mampu merancang kerangka logis program kerja SKPD.'],
        ['3', 'Teknik ZBB & Paket Keputusan', 'Penyusunan Decision Packages dan pemeringkatan prioritas program.', 'Mampu mengevaluasi kelayakan alokasi dana dari basis nol.']
      ],
      caption: 'Tabel 5.2: Peta penguasaan submateri TM 5 Akuntansi Sektor Publik.'
    },
    CASE_BUDGET_APPROACHES_PBB_ZBB,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Inkrementalisme Menyuburkan Pemborosan**: Mengasumsikan pos anggaran tahun lalu selalu benar menyebabkan pos belanja yang tidak efektif terus didanai tahun demi tahun.',
        '**Outcome adalah Muara Sejati**: Keberhasilan program vaksinasi bukan pada terserapnya 100% dana atau tercapainya target suntikan, melainkan pada turunnya angka kesakitan masyarakat.',
        '**Integrasi PBK di Indonesia**: Penerapan PBK di Indonesia diatur secara yuridis melalui Permendagri No. 77/2020 dan PP No. 12/2019 tentang Pengelolaan Keuangan Daerah.'
      ]
    }
  ]
};
