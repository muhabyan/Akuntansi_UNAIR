import type { Reading } from '../../../types';
import { CASE_CASHFLOW_RISK_ANALYSIS } from '../mankeuPracticeCases';

const SVG_CASH_FLOW_STRUCTURE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="cf0Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <linearGradient id="ocfGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="tcfGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk7)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">3 FASE ESTIMASI ARUS KAS INKREMENTAL PROYEK INVESTASI (CAPITAL EXPENDITURE)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">PROJECT CASH FLOWS</text>

  <!-- 3 Phases Horizontal Sequence -->
  <!-- Phase 1: Initial Outlay (t=0) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#cf0Grad)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="132" y="20" fill="#f87171" font-size="10" font-weight="800" text-anchor="middle">FASE 1: ARUS KAS AWAL (t = 0)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-red" x="132" y="56" fill="#f87171" font-size="9" font-weight="700" text-anchor="middle">Initial Outlay (Kas Keluar Bersih)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Harga perolehan aset tetap baru</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Biaya pengiriman &amp; instalasi mesin</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Kebutuhan tambahan Modal Kerja (ΔNWC)</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Dikurangi: Kas hasil jual aset lama</text>
    <text class="svg-text" x="14" y="153" fill="#cbd5e1" font-size="8">• Ditambah/dikurangi: Pajak atas laba/rugi jual</text>
    <rect class="svg-badge-red" x="14" y="185" width="237" height="24" rx="4" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="132" y="201" fill="#f87171" font-size="8" font-weight="700" text-anchor="middle">Pengeluaran Investasi Awal (Outflow)</text>
  </g>

  <!-- Arrow 1 -->
  <polygon points="310,185 318,190 310,195" fill="#38bdf8"/>

  <!-- Phase 2: Operating Cash Flow (t=1..N) -->
  <g transform="translate(325, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#ocfGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">FASE 2: OPERASIONAL (t = 1 s.d. N)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="56" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">OCF = EBIT(1 - T) + Depresiasi</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Pendapatan tambahan operasional proyek</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Penghematan beban kas operasional</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• Beban penyusutan (Non-cash tax shield)</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Beban bunga utang <tspan class="text-accent-red" fill="#f87171" font-weight="700">TIDAK dimasukkan</tspan></text>
    <text class="svg-text" x="14" y="153" fill="#cbd5e1" font-size="8">  (sudah tercermin pada WACC)</text>
    <rect class="svg-badge-blue" x="14" y="185" width="237" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Arus Kas Masuk Bersih Tahunan (Inflow)</text>
  </g>

  <!-- Arrow 2 -->
  <polygon points="600,185 608,190 600,195" fill="#34d399"/>

  <!-- Phase 3: Terminal Cash Flow (t=N) -->
  <g transform="translate(615, 75)">
    <rect class="svg-card" x="0" y="0" width="250" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="250" height="30" rx="10" fill="url(#tcfGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="125" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">FASE 3: TERMINAL AKHIR (t = N)</text>
    <rect class="svg-subcard" x="14" y="40" width="222" height="26" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="125" y="56" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">Terminal Cash Flow (TCF)</text>
    <text class="svg-text" x="14" y="85" fill="#cbd5e1" font-size="8">• Nilai sisa penjualan mesin (Salvage Value)</text>
    <text class="svg-text" x="14" y="102" fill="#cbd5e1" font-size="8">• Pajak atas pelepasan nilai sisa aset</text>
    <text class="svg-text" x="14" y="119" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Pemulihan Modal Kerja</tspan> (100% NWC Recovery)</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Saldo piutang &amp; stok dilikuidasi ke kas</text>
    <text class="svg-text" x="14" y="153" fill="#cbd5e1" font-size="8">• Ditambahkan ke OCF tahun terakhir (N)</text>
    <rect class="svg-badge-green" x="14" y="185" width="222" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="125" y="201" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Penutupan &amp; Likuidasi Proyek</text>
  </g>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Cash Flow Estimation, Tax Shield Depreciation, & Project Risk Analysis',
  ref: 'Brigham & Ehrhardt Ch. 11 | Estimasi Arus Kas Relevan | Analisis Sensitivitas, Skenario, & Simulasi Monte Carlo',
  intro: 'TM 7 membahas estimasi arus kas inkremental yang relevan dalam penganggaran modal: pengeluaran awal (Initial Outlay), arus kas operasi tahunan (Operating Cash Flow), arus kas terminal (Terminal Cash Flow), perlakuan biaya hangus (Sunk Costs) vs biaya kesempatan (Opportunity Costs), efek kanibalisasi, serta metode analisis risiko proyek (Sensitivitas, Skenario, dan Pohon Keputusan).',
  objectives: [
    'Mengidentifikasi arus kas inkremental relevan dan mengecualikan Sunk Costs serta Beban Bunga Pembiayaan dari OCF.',
    'Menghitung Initial Outlay ($CF_0$), Annual OCF dengan Depresiasi Tax Shield, dan Terminal Cash Flow ($TCF$).',
    'Menghitung pajak atas penjualan aset bekas (Taxes on Salvage Value).',
    'Menerapkan Analisis Sensitivitas (NPV vs satu variabel) dan Analisis Skenario (Base, Best, Worst case).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 7.1: 3 Tahap Aliran Arus Kas Inkremental Proyek Investasi.',
      svg: SVG_CASH_FLOW_STRUCTURE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 7'
    },
    {
      kind: 'table',
      headers: ['Komponen Arus Kas', 'Aturan Perlakuan Finansial', 'Formula Pokok', 'Jebakan Ujian Terpopuler'],
      rows: [
        ['Sunk Costs (Biaya Riset Lalu)', 'TIDAK RELEVAN (Abaikan 100%).', 'Tidak dimasukkan ke $CF_0$.', 'Memasukkan biaya survei kelayakan yang sudah dibayar tahun lalu ke biaya proyek.'],
        ['Opportunity Costs (Tanah Sendiri)', 'RELEVAN (Wajib Ditambahkan).', 'Nilai pasar wajar tanah dimasukkan sebagai arus kas keluar di $t=0$.', 'Menganggap tanah milik sendiri gratis dan tidak berbiaya modal.'],
        ['Efek Kanibalisasi (Erosion)', 'RELEVAN (Wajib Dikurangkan).', 'Penurunan laba produk lama dikurangkan dari pendapatan proyek baru.', 'Mengabaikan hilangnya penjualan lini produk lama saat meluncurkan varian baru.'],
        ['Beban Bunga Pinjaman', 'JANGAN DIMASUKKAN ke dalam OCF!', 'Dikeluarkan dari OCF (sudah diakomodasi di tingkat diskonto WACC).', 'Mengurangkan beban bunga pada laba operasional (Double Counting of Financing Cost)!'],
        ['Nilai Sisa Aset (Salvage Value)', 'RELEVAN + Penyesuaian Pajak.', '$\\text{After-tax Salvage} = \\text{Harga Jual} - T(\\text{Harga Jual} - \\text{Nilai Buku})$', 'Lupa memperhitungkan pajak atas laba penjualan aset bekas di atas nilai buku.']
      ],
      caption: 'Tabel 7.0: Matriks perlakuan item arus kas relevan vs tidak relevan.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: OCF & After-Tax Salvage Value'
    },
    {
      kind: 'formula',
      text: `\\text{Operating Cash Flow (OCF)} = EBIT(1 - T) + \\text{Depresiasi} = (\\text{Revenues} - \\text{Costs})(1 - T) + (\\text{Depresiasi} \\times T)
\\text{After-Tax Salvage Value} = \\text{Market Salvage Value} - T \\times (\\text{Market Salvage Value} - \\text{Book Value})
\\text{Terminal Cash Flow (TCF)} = \\text{After-Tax Salvage Value} + \\Delta \\text{NWC Recovery}`,
      note: 'Formula Tax Shield: $(\\text{Depresiasi} \\times T)$ memperlihatkan bahwa depresiasi bukan pengeluaran kas, namun menghemat pengeluaran kas pajak riil.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perhitungan Nilai Sisa Setelah Pajak',
      prompt: 'Mesin pabrik dibeli seharga Rp 500 Juta, disusutkan selama 5 tahun hingga nilai buku akhir tahun ke-5 menjadi Rp 50 Juta. Pada akhir tahun ke-5, mesin tersebut berhasil dijual seharga Rp 120 Juta. Tarif pajak korporasi = 22%. Berapa Arus Kas Bersih dari Penjualan Mesin tersebut?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Keuntungan Penjualan Aset (Gain on Sale)**: Harga Jual - Nilai Buku = Rp 120 Juta - Rp 50 Juta = **Rp 70 Juta**.',
            '**Pajak atas Keuntungan**: 22% × Rp 70 Juta = **Rp 15,4 Juta**.',
            '**Arus Kas Bersih (After-Tax Salvage)**: Harga Jual - Pajak = Rp 120 Juta - Rp 15,4 Juta = **Rp 104,6 Juta**.',
            '**Catatan**: Angka Rp 104,6 Juta ini yang dicatat sebagai arus kas masuk terminal di tahun ke-5.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 7'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Prinsip Arus Kas Inkremental', 'Identifikasi Sunk Cost, Opportunity Cost, NWC, dan Kanibalisasi.', 'Mampu mengeliminasi pos non-relevan dari skedul arus kas.'],
        ['2', 'Kalkulasi Initial, OCF, & Terminal CF', 'Penyusunan tabel arus kas proyek multi-tahun lengkap.', 'Mampu menghitung NPV proyek investasi aset modal nyata.'],
        ['3', 'Analisis Risiko Proyek', 'Analisis Sensitivitas, Skenario (Best/Base/Worst), dan Pohon Keputusan.', 'Mampu menghitung Expected NPV dan Standar Deviasi skenario.']
      ],
      caption: 'Tabel 7.2: Peta penguasaan submateri TM 7 Manajemen Keuangan.'
    },
    CASE_CASHFLOW_RISK_ANALYSIS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Modal Kerja Bersih (NWC) Dicairkan Penuh**: Tambahan NWC di awal ($t=0$) selalu dicairkan kembali 100% pada akhir proyek ($t=N$) tanpa potongan pajak.',
        '**Depreciation Tax Shield**: Depresiasi non-kas menghemat pembayaran pajak riil sebesar $\\text{Depresiasi} \\times T$.',
        '**Jangan Masukkan Bunga**: Beban bunga tidak boleh dikurangkan saat menghitung OCF proyek karena biaya bunga sudah tercermin di dalam tingkat diskonto WACC.'
      ]
    }
  ]
};
