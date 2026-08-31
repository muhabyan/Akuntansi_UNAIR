import type { Reading } from '../../../types';

const SVG_TP_METHODS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">METODE PENENTUAN HARGA TRANSFER WAJAR (PMK NO. 172/2023 &amp; OECD)</text>
  
  <rect x="25" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. CUP Method</text>
  <text x="82" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Comparable</text>
  <text x="82" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Uncontrolled Price</text>
  <line x1="35" y1="120" x2="130" y2="120" stroke="#334155"/>
  <text x="82" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">Membandingkan</text>
  <text x="82" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">harga transaksi</text>
  <text x="82" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">komoditas sejenis</text>
  <text x="82" y="188" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">(Paling Langsung)</text>

  <rect x="155" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="212" y="78" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">2. RPM Method</text>
  <text x="212" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Resale Price</text>
  <text x="212" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Method</text>
  <line x1="165" y1="120" x2="260" y2="120" stroke="#334155"/>
  <text x="212" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">Harga jual kembali</text>
  <text x="212" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">dikurangi marjin</text>
  <text x="212" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">laba kotor wajar</text>
  <text x="212" y="188" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">(Distributor/Agen)</text>

  <rect x="285" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="342" y="78" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">3. Cost Plus</text>
  <text x="342" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Cost Plus</text>
  <text x="342" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Method (CPM)</text>
  <line x1="295" y1="120" x2="390" y2="120" stroke="#334155"/>
  <text x="342" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">HPP ditambah</text>
  <text x="342" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">mark-up laba kotor</text>
  <text x="342" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">wajar independen</text>
  <text x="342" y="188" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">(Pabrikan Manufaktur)</text>

  <rect x="415" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a855f7" font-size="10" font-weight="700" text-anchor="middle">4. TNMM</text>
  <text x="472" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Transactional Net</text>
  <text x="472" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Margin Method</text>
  <line x1="425" y1="120" x2="520" y2="120" stroke="#334155"/>
  <text x="472" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">Membandingkan</text>
  <text x="472" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">indikator marjin laba</text>
  <text x="472" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">bersih usaha (EBIT)</text>
  <text x="472" y="188" fill="#c084fc" font-size="8.5" font-weight="700" text-anchor="middle">(Sangat Populer)</text>

  <rect x="545" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="602" y="78" fill="#ec4899" font-size="10" font-weight="700" text-anchor="middle">5. Profit Split</text>
  <text x="602" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Profit Split</text>
  <text x="602" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Method (PSM)</text>
  <line x1="555" y1="120" x2="650" y2="120" stroke="#334155"/>
  <text x="602" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">Membagi laba</text>
  <text x="602" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">gabungan atas</text>
  <text x="602" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">kontribusi unik</text>
  <text x="602" y="188" fill="#f472b6" font-size="8.5" font-weight="700" text-anchor="middle">(Aset Tak Berwujud)</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Hubungan Istimewa, Transfer Pricing, & Pencegahan Penghindaran Pajak (PMK 172/2023)',
  ref: 'UU PPh Pasal 18 jo. UU HPP | PP 55/2022 | PMK No. 172/2023',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 3: Menguasai kriteria Hubungan Istimewa (Kepemilikan $\\ge 25\\%$, Penguasaan manajemen/teknologi, dan Hubungan Keluarga), Prinsip Kewajaran dan Kelaziman Usaha (*Arm\'s Length Principle* / ALP), 5 Metode Penentuan Harga Transfer Wajar, Dokumentasi Transfer Pricing (TP Doc: Master File, Local File, CbCR), Kesepakatan Harga Transfer (*Advance Pricing Agreement* / APA), Prosedur Persetujuan Bersama (*Mutual Agreement Procedure* / MAP), serta instrumen anti-tax avoidance (Debt-to-Equity Ratio / DER dan Controlled Foreign Corporation / CFC Rules).',
  objectives: [
    'Mengidentifikasi 3 penyebab timbulnya Hubungan Istimewa menurut Pasal 18 ayat (4) UU PPh.',
    'Menerapkan Prinsip Kewajaran dan Kelaziman Usaha (Arm\'s Length Principle - ALP) sesuai PMK 172/2023.',
    'Membandingkan 5 metode Transfer Pricing: CUP, RPM, Cost Plus, TNMM, dan Profit Split Method.',
    'Menjelaskan struktur Tiga Tingkat Dokumentasi Transfer Pricing (Master File, Local File, Country-by-Country Report / CbCR).',
    'Menjelaskan fungsi instrumen APA (Advance Pricing Agreement) dan MAP (Mutual Agreement Procedure).',
    'Memahami pembatasan biaya bunga utang berbasis DER 4:1 (PMK 169/PMK.010/2015).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Lima Metode Penentuan Harga Transfer Wajar (PMK 172/2023)',
      svg: SVG_TP_METHODS,
      caption: 'Gambar 3.1: Hierarki metode transfer pricing berbasis analisis fungsi, aset, dan risiko (FAR Analysis).'
    },

    { kind: 'h2', text: '1. Kriteria Hubungan Istimewa (Pasal 18 ayat 4 UU PPh)' },
    {
      kind: 'table',
      headers: ['Penyebab Hubungan Istimewa', 'Ambang Batas / Kriteria Menurut UU PPh & PP 55/2022'],
      rows: [
        ['1. Penyertaan Modal (Kepemilikan Saham)', 'Wajib Pajak memiliki penyertaan modal langsung atau tidak langsung paling rendah **25% (dua puluh lima persen)** pada Wajib Pajak lain.'],
        ['2. Penguasaan (Control)', 'Wajib Pajak menguasai Wajib Pajak lainnya atau dua/lebih Wajib Pajak berada di bawah penguasaan yang sama baik langsung maupun tidak langsung melalui manajemen, teknologi, atau ketergantungan pasokan bisnis.'],
        ['3. Hubungan Keluarga', 'Terdapat hubungan keluarga baik sedarah maupun semenda dalam garis keturunan lurus dan/atau ke samping satu derajat (orang tua, anak, mertua, menantu, saudara kandung).']
      ],
      caption: 'Tabel 3.1: Tiga pilar penentu adanya hubungan istimewa fiskal.'
    },

    { kind: 'h2', text: '2. Tiga Tingkat Dokumentasi Transfer Pricing (TP Doc)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Kewajiban TP Doc menurut PMK 172/2023',
      text: '1. **Dokumen Induk (Master File)**: Memuat informasi global grup usaha (struktur kepemilikan, lini bisnis, aset tidak berwujud/intangibles, dan aktivitas pembiayaan antar grup).\n2. **Dokumen Lokal (Local File)**: Memuat profil transaksi terafiliasi entitas lokal di Indonesia dan penerapan ALP (Analisis FAR, pemilihan metode TP, dan pencarian data pembanding).\n3. **Laporan per Negara (Country-by-Country Report / CbCR)**: Alokasi penghasilan, pajak yang dibayar, dan aktivitas ekonomi per yurisdiksi negara (Wajib bagi Induk Usaha Grup dengan omzet konsolidasi $\\ge$ Rp 11 Triliun).'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 3' },
    {
      kind: 'ul',
      items: [
        '**Arm\'s Length Principle (ALP)**: Menilai apakah kondisi dalam transaksi antar pihak berafiliasi konsisten dengan kondisi yang terjadi antara pihak-pihak independen dalam kondisi yang sebanding.',
        '**Secondary Adjustment**: Selisih harga transfer yang tidak wajar dianggap sebagai dividen terselubung (*constructive dividend*) yang terutang PPh Pasal 23/26.',
        '**Batas DER 4:1**: Perbandingan utang terhadap modal maksimal 4 banding 1; bunga atas porsi utang di atas 4:1 tidak boleh dibiayakan (*non-deductible*).'
      ]
    }
  ]
};