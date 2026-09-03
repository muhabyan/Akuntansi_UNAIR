import type { Reading } from '../../../types';
import { CASE_MULTINATIONAL_FX_RISK } from '../mankeuPracticeCases';

const SVG_FX_PARITY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk13" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk13)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">TRIANGLE HUBUNGAN PARITAS KEUANGAN INTERNASIONAL (PPP, IFE, &amp; IRP)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">FOREX PARITY</text>

  <!-- Left: Parity Triangle Graphic (Width 450px) -->
  <g transform="translate(50, 75)">
    <!-- Top Apex: Diferensial Inflasi (Inflation Differential) -->
    <rect class="svg-card" x="110" y="0" width="220" height="50" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text class="text-accent-blue" x="220" y="22" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">DIFERENSIAL INFLASI (Δi)</text>
    <text class="svg-text" x="220" y="38" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Selisih Inflasi Domestik vs Asing</text>

    <!-- Bottom Left: Diferensial Suku Bunga (Interest Rate Differential) -->
    <rect class="svg-card" x="0" y="170" width="200" height="50" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <text class="text-accent-amber" x="100" y="192" fill="#fbbf24" font-size="9.5" font-weight="800" text-anchor="middle">DIFERENSIAL SUKU BUNGA (Δr)</text>
    <text class="svg-text" x="100" y="208" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Selisih Bunga BI vs The Fed</text>

    <!-- Bottom Right: Perubahan Kurs Spot / Forward (Exchange Rate) -->
    <rect class="svg-card" x="240" y="170" width="200" height="50" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <text class="text-accent-green" x="340" y="192" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">PERUBAHAN KURS (ΔS / F)</text>
    <text class="svg-text" x="340" y="208" fill="#cbd5e1" font-size="7.5" text-anchor="middle">Depresiasi / Apresiasi Rupiah</text>

    <!-- Triangle Side 1: PPP (Top to Bottom Right) -->
    <line x1="280" y1="50" x2="360" y2="170" stroke="#38bdf8" stroke-width="2"/>
    <rect class="svg-subcard" x="310" y="95" width="80" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="350" y="110" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle">TEORI PPP</text>

    <!-- Triangle Side 2: Fisher Effect (Top to Bottom Left) -->
    <line x1="160" y1="50" x2="80" y2="170" stroke="#fbbf24" stroke-width="2"/>
    <rect class="svg-subcard" x="50" y="95" width="95" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="110" fill="#fbbf24" font-size="8" font-weight="800" text-anchor="middle">FISHER EFFECT</text>

    <!-- Triangle Side 3: IRP / IFE (Bottom Horizontal) -->
    <line x1="200" y1="195" x2="240" y2="195" stroke="#34d399" stroke-width="2"/>
    <rect class="svg-subcard" x="185" y="225" width="70" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="220" y="240" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">IRP / IFE</text>
  </g>

  <!-- Right: 3 Parity Theorems Cards -->
  <g transform="translate(520, 75)">
    <rect class="svg-subcard" x="0" y="0" width="345" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text class="text-accent-blue" x="14" y="20" fill="#38bdf8" font-size="9.5" font-weight="800">1. PURCHASING POWER PARITY (PPP)</text>
    <text class="svg-text" x="14" y="38" fill="#cbd5e1" font-size="8">Mata uang negara dengan inflasi lebih tinggi akan terdepresiasi</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">sebesar selisih inflasi agar daya beli barang setara (Law of One Price).</text>

    <rect class="svg-subcard" x="0" y="80" width="345" height="70" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
    <text class="text-accent-amber" x="14" y="100" fill="#fbbf24" font-size="9.5" font-weight="800">2. INTEREST RATE PARITY (IRP)</text>
    <text class="svg-text" x="14" y="118" fill="#cbd5e1" font-size="8">Premi kurs forward mencerminkan selisih suku bunga kedua negara</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="8">sehingga investor tidak dapat melakukan Covered Interest Arbitrage.</text>

    <rect class="svg-subcard" x="0" y="160" width="345" height="70" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1"/>
    <text class="text-accent-green" x="14" y="180" fill="#34d399" font-size="9.5" font-weight="800">3. INTERNATIONAL FISHER EFFECT (IFE)</text>
    <text class="svg-text" x="14" y="198" fill="#cbd5e1" font-size="8">Mata uang dengan suku bunga nominal tinggi akan terdepresiasi</text>
    <text class="svg-text" x="14" y="212" fill="#cbd5e1" font-size="8">karena suku bunga tinggi mengindikasikan ekspektasi inflasi tinggi.</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Jika kondisi paritas terpenuhi secara sempurna di pasar bebas modal, laba arbitrase lintas mata uang menjadi nol.</text>
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
