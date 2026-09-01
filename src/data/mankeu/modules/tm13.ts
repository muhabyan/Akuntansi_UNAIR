import type { Reading } from '../../../types';
import { CASE_MULTINATIONAL_FX_RISK } from '../mankeuPracticeCases';

const SVG_FX_PARITY = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TRIANGLE HUBUNGAN PARITAS KURS INTERNASIONAL (INTERNATIONAL FX PARITY)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">INTEREST RATE PARITY</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(IRP - Suku Bunga &amp; Forward)</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">F / S_0 = (1 + r_h) / (1 + r_f)</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Forward premium/discount</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">menyamakan imbal hasil uang</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Covered Arbitrage</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">PURCHASING POWER</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(PPP - Inflasi &amp; Kurs Spot)</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">E(S_t) / S_0 = (1 + I_h) / (1 + I_f)</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mata uang inflasi tinggi</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">pasti mengalami depresiasi</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Law of One Price</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">MANAJEMEN RISIKO FX</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(3 Jenis Eksposur Valas)</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">1. Transaction Exposure</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">2. Translation Exposure</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">3. Economic Exposure</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Hedging Strategies</text>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Multinational Financial Management, Currency Risk, & International Parity',
  ref: 'Brigham & Ehrhardt Ch. 17 | Teori Paritas Valas (IRP, PPP, IFE) | Lindung Nilai (Hedging) Valuta Asing',
  intro: 'TM 13 membahas manajemen keuangan internasional bagi perusahaan multinasional (MNC): struktur pasar valas (Spot vs Forward Market), kuotasi mata uang (Direct vs Indirect Quotation, Cross Rates), teori paritas internasional (Interest Rate Parity / IRP, Purchasing Power Parity / PPP, International Fisher Effect / IFE), serta strategi lindung nilai (Forward Contract, Money Market Hedge, dan Currency Options).',
  objectives: [
    'Menghitung kurs silang (Cross Exchange Rates) dan mengidentifikasi peluang Triangular Arbitrage.',
    'Menerapkan Teori Interest Rate Parity (IRP) untuk menentukan kurs forward yang wajar.',
    'Membedakan 3 jenis eksposur valuta asing: Transaksi, Translasi/Akuntansi, dan Ekonomi/Operasi.',
    'Merancang strategi Forward Market Hedge dan Money Market Hedge untuk melindungi piutang/utang impor-ekspor.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 13.1: Hubungan Teori Paritas Kurs Valas dan Manajemen Risiko Internasional.',
      svg: SVG_FX_PARITY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 13'
    },
    {
      kind: 'table',
      headers: ['Teori Paritas Valas', 'Hubungan Variabel Finansial', 'Formula Keseimbangan', 'Kondisi Jika Paritas Terganggu'],
      rows: [
        ['Interest Rate Parity (IRP)', 'Selisih Suku Bunga Domestik vs Asing dengan Forward Premium/Discount.', '$F_t = S_0 \\times \\frac{1 + r_{\\text{home}}}{1 + r_{\\text{foreign}}}$', 'Memicu Covered Interest Arbitrage oleh bank investasi internasional.'],
        ['Purchasing Power Parity (PPP)', 'Perbedaan Tingkat Inflasi dengan Ekspektasi Perubahan Kurs Spot.', '$E(S_t) = S_0 \\times \\frac{1 + I_{\\text{home}}}{1 + I_{\\text{foreign}}}$', 'Mata uang negara dengan inflasi tinggi akan terdepresiasi sebesar selisih inflasi.'],
        ['International Fisher Effect (IFE)', 'Selisih Suku Bunga Nominal dengan Perubahan Kurs Spot Masa Depan.', '$\\frac{S_t - S_0}{S_0} \\approx r_{\\text{home}} - r_{\\text{foreign}}$', 'Suku bunga nominal tinggi mencerminkan ekspektasi depresiasi mata uang.'],
        ['Cross Exchange Rate', 'Penentuan kurs antara dua mata uang non-USD melalui kurs acuan USD.', '$\\text{Kurs } (A/B) = \\frac{\\text{Kurs } (A/USD)}{\\text{Kurs } (B/USD)}$', 'Penyimpangan antar pasar valas memicu Triangular Arbitrage instan.']
      ],
      caption: 'Tabel 13.0: Ringkasan teori paritas nilai tukar internasional.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: IRP & Forward Hedging'
    },
    {
      kind: 'formula',
      text: `\\text{Interest Rate Parity (IRP)}: \\quad \\frac{F_t - S_0}{S_0} = \\frac{r_{\\text{home}} - r_{\\text{foreign}}}{1 + r_{\\text{foreign}}} \\approx r_{\\text{home}} - r_{\\text{foreign}}
\\text{Cross Exchange Rate}: \\quad \\left(\\frac{\\text{IDR}}{\\text{JPY}}\\right) = \\frac{\\text{IDR/USD}}{\\text{JPY/USD}}
\\text{Penghematan Forward Hedge vs Unhedged}: \\quad \\Delta \\text{Kas} = |\\text{Nilai Valas} \\times F| - |\\text{Nilai Valas} \\times S_{\\text{actual}}|`,
      note: 'Jika suku bunga dalam negeri ($r_h$) lebih tinggi dibanding suku bunga luar negeri ($r_f$), mata uang asing WAJIB diperdagangkan dengan status Forward Premium ($F > S_0$).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perhitungan Cross Exchange Rate IDR/JPY',
      prompt: 'Di pasar valas Jakarta dan Tokyo berlaku kuotasi: USD/IDR = Rp 16.000 dan USD/JPY = JPY 160. Hitung kurs silang (Cross Rate) IDR per 1 JPY dan tentukan nilai rupiah untuk transaksi impor sebesar JPY 10.000.000!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Perhitungan Cross Rate IDR/JPY**:\n$\text{Kurs (IDR/JPY)} = \\frac{\\text{USD/IDR}}{\\text{USD/JPY}} = \\frac{Rp 16.000}{JPY 160} = \\mathbf{Rp 100 / JPY}$.',
            '**Total Nilai Rupiah Transaksi**:\nTotal Rupiah = JPY 10.000.000 × Rp 100/JPY = **Rp 1.000.000.000** (1 Miliar Rupiah).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 13'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Pasar Valas & Cross Rates', 'Konversi direct vs indirect quote dan perhitungan cross rate.', 'Mampu menghitung kurs silang mata uang asing tanpa bias.'],
        ['2', 'Teori Paritas IRP & PPP', 'Kalkulasi forward rate teoritis dan ekspektasi pergeseran kurs spot.', 'Mampu mengidentifikasi kondisi disequilibrium dan arbitrase.'],
        ['3', '3 Jenis Eksposur & Hedging', 'Strategi mitigasi Transaction, Translation, dan Economic Exposure.', 'Mampu merancang instrumen lindung nilai kontrak forward dan money market.']
      ],
      caption: 'Tabel 13.2: Peta penguasaan submateri TM 13 Manajemen Keuangan.'
    },
    CASE_MULTINATIONAL_FX_RISK,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Transaction vs Economic Exposure**: Transaction exposure terkait dengan kontrak piutang/utang valas yang sudah disepakati; Economic exposure adalah dampak perubahan kurs terhadap daya saing dan arus kas jangka panjang.',
        '**Forward Contract adalah Komitmen Pasti**: Kontrak forward mengunci kurs pasti di masa depan dan wajib dieksekusi, berbeda dengan opsi valas (Currency Option) yang memberi hak tanpa kewajiban.',
        '**Country Risk Analysis**: Investasi di negara berkembang menuntut premi risiko tambahan atas ancaman nasionalisasi aset, pembatasan transfer valas, dan ketidakstabilan politik.'
      ]
    }
  ]
};
