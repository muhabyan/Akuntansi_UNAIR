import type { Reading } from '../../../types';
import { CASE_BUDGET_APPROACHES_PBB_ZBB } from '../aspPracticeCases';

const SVG_BUDGET_APPROACHES = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">EVOLUSI PENDEKATAN ANGGARAN: TRADISIONAL VS NEW PUBLIC MANAGEMENT (NPM)</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="177" y="78" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">ANGGARAN TRADISIONAL</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Line-Item &amp; Inkrementalisme:</text>
  <text x="177" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Fokus input belanja (gaji, ATK, dinas)</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Asumsi dasar tahun lalu + persentase kenaikan</text>
  <text x="177" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mengabaikan efisiensi &amp; capaian manfaat</text>
  <text x="177" y="175" fill="#fca5a5" font-size="9" font-weight="700" text-anchor="middle">Spend-It-Or-Lose-It Syndrome</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="497" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">NEW PUBLIC MANAGEMENT (NPM)</text>
  <text x="497" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Performance-Based &amp; Zero-Based:</text>
  <text x="497" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Menghubungkan dana belanja dengan Output/Outcome</text>
  <text x="497" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• ZBB: Justifikasi kelayakan dari titik nol</text>
  <text x="497" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PPBS: Perencanaan strategis multi-tahunan</text>
  <text x="497" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Value for Money (VFM)</text>
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
\\text{Input (Dana, SDM)} \\longrightarrow \\text{Proses (Aktivitas)} \\longrightarrow \\text{Output (Barang/Jasa Dihasilkan)} \\longrightarrow \\text{Outcome (Manfaat Nyata)} \\longrightarrow \\text{Impact (Dampak Jangka Panjang)}
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
