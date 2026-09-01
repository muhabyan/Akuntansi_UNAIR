import type { Reading } from '../../../types';
import { CASE_CASHFLOW_RISK_ANALYSIS } from '../mankeuPracticeCases';

const SVG_CASH_FLOW_STRUCTURE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">3 TAHAP ESTIMASI ARUS KAS PROYEK (INCREMENTAL CASH FLOWS)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="125" y="78" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">1. INITIAL OUTLAY (CF_0)</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Pengeluaran Awal (t=0):</text>
  <text x="125" y="120" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Harga Beli + Instalasi</text>
  <text x="125" y="136" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tambahan Modal Kerja (NWC)</text>
  <text x="125" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Opportunity Costs tanah</text>
  <text x="125" y="175" fill="#fca5a5" font-size="9" font-weight="700" text-anchor="middle">Sunk Cost TIDAK Masuk</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="340" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">2. OPERATING CF (OCF)</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Arus Kas Operasional (t=1..N):</text>
  <text x="340" y="120" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• OCF = NOPAT + Depresiasi</text>
  <text x="340" y="136" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• OCF = (Rev-Cost)(1-T) + Dep(T)</text>
  <text x="340" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pertimbangkan kanibalisasi</text>
  <text x="340" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Tax Shield Depresiasi</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="555" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">3. TERMINAL CF (TCF)</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Arus Kas Akhir Proyek (t=N):</text>
  <text x="555" y="120" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Nilai Sisa Bersih (Salvage)</text>
  <text x="555" y="136" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pajak atas Gain/Loss Jual</text>
  <text x="555" y="152" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pencairan Kembali 100% NWC</text>
  <text x="555" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Likuidasi Aset Proyek</text>
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
