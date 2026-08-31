import type { Reading } from '../../../types';
import { CASE_WORKING_CAPITAL_TRADE_CREDIT } from '../mankeuPracticeCases';

const SVG_CCC_FLOW = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SIKLUS KONVERSI KAS (CASH CONVERSION CYCLE - CCC)</text>
  
  <!-- Operating Cycle Bar -->
  <rect x="50" y="55" width="580" height="40" rx="6" fill="#1e293b" stroke="#38bdf8"/>
  <text x="340" y="80" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">Operating Cycle = Days Inventory (DII) + Days Sales Outstanding (DSO)</text>

  <!-- DII & DSO sub blocks -->
  <rect x="50" y="105" width="300" height="40" rx="6" fill="#0369a1" opacity="0.4"/>
  <rect x="50" y="105" width="300" height="40" rx="6" fill="none" stroke="#38bdf8"/>
  <text x="200" y="130" fill="#7dd3fc" font-size="10.5" font-weight="600" text-anchor="middle">1. Days Inventory Outstanding (DII / ICP)</text>

  <rect x="360" y="105" width="270" height="40" rx="6" fill="#065f46" opacity="0.4"/>
  <rect x="360" y="105" width="270" height="40" rx="6" fill="none" stroke="#34d399"/>
  <text x="495" y="130" fill="#6ee7b7" font-size="10.5" font-weight="600" text-anchor="middle">2. Days Sales Outstanding (DSO / RCP)</text>

  <!-- DPO & CCC (Bottom) -->
  <rect x="50" y="155" width="180" height="45" rx="6" fill="#991b1b" opacity="0.4"/>
  <rect x="50" y="155" width="180" height="45" rx="6" fill="none" stroke="#ef4444"/>
  <text x="140" y="182" fill="#fca5a5" font-size="10" font-weight="700" text-anchor="middle">- Days Payable (DPO)</text>

  <rect x="240" y="155" width="390" height="45" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="435" y="182" fill="#fbbf24" font-size="11.5" font-weight="700" text-anchor="middle">= Cash Conversion Cycle (CCC: Dana Tertambat)</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Working Capital Management - Part I: Cash & Receivables',
  ref: 'Brigham & Houston Ch. 16',
  intro: 'Modul Pembelajaran Mendalam Manajemen Keuangan TM 11: Menguasai strategi manajemen modal kerja (Working Capital Policies: Relaxed, Restricted, Moderate), konsep Siklus Konversi Kas (Cash Conversion Cycle - CCC), teknik manajemen kas dan surat berharga (*Marketable Securities*), serta pengelolaan piutang dan kebijakan kredit (Credit Policy: 5 Cs of Credit).',
  objectives: [
    'Mendefinisikan Modal Kerja Bruto (Gross Working Capital) dan Modal Kerja Operasi Bersih (Net Operating Working Capital - NOWC).',
    'Membedakan 3 kebijakan investasi aset lancar: Relaxed, Restricted, dan Moderate Policy.',
    'Menghitung Siklus Konversi Kas (Cash Conversion Cycle / CCC = DII + DSO - DPO).',
    'Merancang strategi percepatan penerimaan kas (Lockbox System, Wire Transfers) dan pengendalian pengeluaran kas.',
    'Menganalisis 4 pilar kebijakan kredit (Credit Period, Cash Discounts, Credit Standards, Collection Policy).',
    'Menerapkan prinsip 5 C dalam evaluasi kredit pelanggan: Character, Capacity, Capital, Collateral, Conditions.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Aliran Siklus Konversi Kas (Cash Conversion Cycle)',
      svg: SVG_CCC_FLOW,
      caption: 'Gambar 11.1: Komponen pembentuk hari siklus kas yang membutuhkan pembiayaan modal kerja.'
    },

    { kind: 'h2', text: '1. Tiga Strategi Investasi Modal Kerja' },
    {
      kind: 'table',
      headers: ['Strategi Modal Kerja', 'Karakteristik Saldo Aset Lancar', 'Trade-Off Risiko vs Profitabilitas'],
      rows: [
        ['1. Relaxed Policy (Konservatif)', 'Saldo kas, piutang, dan persediaan sangat besar. Kebijakan kredit longgar.', 'Risiko kehabisan kas/stok sangat rendah, namun profitabilitas (ROA/ROE) rendah karena aset menganggur.'],
        ['2. Restricted Policy (Agresif / Lean)', 'Saldo aset lancar diminimalkan (sistem persediaan Just-in-Time, penagihan kredit ketat).', 'Profitabilitas tinggi, namun menghadapi risiko tinggi kehabisan stok (*stockout*) dan kehilangan pelanggan.'],
        ['3. Moderate Policy (Moderat)', 'Keseimbangan antara kebijakan relaxed dan restricted.', 'Memaksimalkan efisiensi pada tingkat risiko yang terkendali.']
      ],
      caption: 'Tabel 11.1: Perbandingan tiga strategi investasi aset lancar.'
    },

    { kind: 'h2', text: '2. Rumus Formula Siklus Konversi Kas (CCC)' },
    {
      kind: 'formula',
      text: '\\text{CCC} = \\underbrace{\\frac{\\text{Persediaan}}{\\text{HPP}/365}}_{\\text{Days Inventory (DII)}} + \\underbrace{\\frac{\\text{Piutang}}{\\text{Penjualan}/365}}_{\\text{Days Sales (DSO)}} - \\underbrace{\\frac{\\text{Utang Dagang}}{\\text{Pembelian}/365}}_{\\text{Days Payable (DPO)}}',
      note: 'Makin pendek CCC (bahkan negatif seperti Amazon/Dell), makin efisien perusahaan dalam memanfaatkan kas operasinya!'
    },

    CASE_WORKING_CAPITAL_TRADE_CREDIT,

    { kind: 'h2', text: '3. Evaluasi Kelayakan Kredit: Prinsip 5 Cs of Credit' },
    {
      kind: 'table',
      headers: ['Prinsip 5 C', 'Definisi Evaluasi', 'Metode Pembuktian'],
      rows: [
        ['1. Character', 'Reputasi kejujuran dan itikad baik debitur untuk melunasi kewajiban tepat waktu.', 'Laporan riwayat kredit perbankan (SLIK OJK / BI Checking).'],
        ['2. Capacity', 'Kemampuan arus kas operasional debitur untuk membayar angsuran utang.', 'Analisis laporan laba rugi dan rasio arus kas operasi terhadap utang.'],
        ['3. Capital', 'Kondisi kekayaan finansial dan ekuitas bersih yang dimiliki debitur.', 'Analisis neraca dan Debt to Equity Ratio (DER).'],
        ['4. Collateral', 'Aset yang dijaminkan sebagai jaminan pelunasan jika debitur gagal bayar.', 'Penilaian appraisal sertifikat tanah, bangunan, atau deposito.'],
        ['5. Conditions', 'Kondisi ekonomi umum dan tren industri spesifik yang mempengaruhi kelancaran usaha.', 'Analisis makroekonomi, suku bunga, dan tren pasar industri debitur.']
      ],
      caption: 'Tabel 11.2: Lima dimensi penilaian kredit korporasi.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 11' },
    {
      kind: 'ul',
      items: [
        '**Tujuan CCC**: Memperpendek periode persediaan (DII) dan penagihan piutang (DSO) tanpa merusak kepuasan pelanggan, serta memperpanjang periode utang (DPO) tanpa merusak reputasi kredit.',
        '**Lockbox System**: Mengarahkan pembayaran pelanggan ke kotak pos bank lokal untuk memotong waktu *Mail Float* dan *Processing Float*.',
        '**NOWC**: Aset Lancar Operasi dikurangi Liabilitas Lancar Bebas Bunga (*Non-Interest-Bearing Current Liabilities* seperti Utang Usaha dan Akrual Beban).'
      ]
    }
  ]
};