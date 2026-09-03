import type { Reading } from '../../../types';
import { CASE_DIVIDEND_POLICY_REPURCHASE } from '../mankeuPracticeCases';

const SVG_DIVIDEND_POLICY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgMk10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="divGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="repGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgMk10)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">DISTRIBUSI KAS KEPADA PEMEGANG SAHAM: DIVIDEN TUNAI VS SHARE BUYBACK</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">DIVIDEND POLICY</text>

  <!-- Left: Cash Dividend -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#divGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="11" font-weight="800">1. DIVIDEN TUNAI (CASH DIVIDEND)</text>
    
    <rect class="svg-subcard" x="16" y="44" width="363" height="36" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="197" y="58" fill="#38bdf8" font-size="8.5" font-weight="800" text-anchor="middle">MEKANISME: TRANSFER KAS BERKALA</text>
    <text class="svg-muted" x="197" y="72" fill="#94a3b8" font-size="7.5" text-anchor="middle">Kas Keluar Neraca →Masuk Rekening RDN Investor</text>

    <text class="svg-text" x="16" y="102" fill="#cbd5e1" font-size="8">• Sinyal Komitmen: Menunjukkan kepastian arus kas stabil ("Bird in the Hand")</text>
    <text class="svg-text" x="16" y="120" fill="#cbd5e1" font-size="8">• Efek Klientel: Sangat disukai dana pensiun &amp; yayasan yang butuh kas rutin</text>
    <text class="svg-text" x="16" y="138" fill="#cbd5e1" font-size="8">• Kekakuan Dividen (Dividend Sticky): Pemotongan dividen dianggap sinyal krisis buruk</text>
    <text class="svg-text" x="16" y="156" fill="#cbd5e1" font-size="8">• Harga saham otomatis terkoreksi turun sebesar dividen per lembar saat Ex-Date</text>
    
    <rect class="svg-badge-blue" x="16" y="185" width="363" height="24" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="201" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Sinyal Kesehatan Operasional &amp; Kepastian Kas Terjadwal</text>
  </g>

  <!-- Right: Share Buyback (Repurchase) -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#repGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="11" font-weight="800">2. PEMBELIAN KEMBALI SAHAM (SHARE BUYBACK)</text>
    
    <rect class="svg-subcard" x="16" y="44" width="363" height="36" rx="6" fill="#1e293b" stroke="#34d399"/>
    <text class="text-accent-green" x="197" y="58" fill="#34d399" font-size="8.5" font-weight="800" text-anchor="middle">MEKANISME: BUYBACK VIA PASAR REGULER</text>
    <text class="svg-muted" x="197" y="72" fill="#94a3b8" font-size="7.5" text-anchor="middle">Saham dibeli kembali menjadi Saham Treasuri (Treasury Shares)</text>

    <text class="svg-text" x="16" y="102" fill="#cbd5e1" font-size="8">• Sinyal Undervaluation: Manajemen yakin harga saham di pasar terlalu murah</text>
    <text class="svg-text" x="16" y="120" fill="#cbd5e1" font-size="8">• Mengurangi jumlah saham beredar →Secara mekanis mendongkrak EPS &amp; ROE</text>
    <text class="svg-text" x="16" y="138" fill="#cbd5e1" font-size="8">• Fleksibilitas Tinggi: Tidak menimbulkan ekspektasi komitmen wajib di tahun depan</text>
    <text class="svg-text" x="16" y="156" fill="#cbd5e1" font-size="8">• Efisiensi Pajak: Memberikan opsi capital gain bagi pemegang saham</text>
    
    <rect class="svg-badge-green" x="16" y="185" width="363" height="24" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="197" y="201" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Mendongkrak Laba Per Lembar Saham (EPS Booster)</text>
  </g>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Distributions to Shareholders: Dividends & Share Repurchases',
  ref: 'Brigham & Ehrhardt Ch. 14 | Teori Kebijakan Dividen | Residual Dividend Model & Share Buybacks',
  intro: 'TM 10 membahas strategi distribusi kekayaan kepada pemegang saham: perdebatan 3 teori dividen (Dividend Irrelevance MM, Bird-in-the-Hand Gordon-Lintner, Tax Preference Theory), Model Dividen Residual (Residual Dividend Model), Dividend Reinvestment Plans (DRIPs), pemecahan saham (Stock Splits & Stock Dividends), serta keunggulan strategis pembelian kembali saham (Share Repurchases).',
  objectives: [
    'Membandingkan 3 teori kebijakan dividen dan implikasinya terhadap nilai saham.',
    'Menghitung jumlah dividen yang dibagikan dan DPR menggunakan Residual Dividend Model.',
    'Menganalisis dampak pemecahan saham (Stock Split) vs Dividen Saham terhadap struktur ekuitas.',
    'Mengevaluasi keuntungan dan risiko Share Repurchase bagi pemegang saham dan korporasi.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 10.1: Perbandingan Karakteristik Dividen Tunai vs Share Repurchase.',
      svg: SVG_DIVIDEND_POLICY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 10'
    },
    {
      kind: 'table',
      headers: ['Teori Kebijakan Dividen', 'Pencetus Teori', 'Pandangan terhadap DPR Tinggi', 'Rekomendasi Manajer'],
      rows: [
        ['1. Dividend Irrelevance', 'Modigliani & Miller (1961)', 'TIDAK MEMPENGARUHI nilai perusahaan (investor dapat menciptakan *homemade dividends*).', 'Fokus pada proyek NPV positif, jangan pusingkan dividen.'],
        ['2. Bird-in-the-Hand Theory', 'Myron Gordon & John Lintner', 'MENINGKATKAN nilai saham (investor lebih menghargai dividen pasti dibanding capital gain berisiko).', 'Bayar dividen tunai tinggi untuk menekan biaya modal ekuitas ($r_s$).'],
        ['3. Tax Preference Theory', 'Farrar, Selwyn, Brennan', 'MENURUNKAN nilai saham (karena tarif pajak dividen sering lebih tinggi dibanding pajak capital gain yang ditunda).', 'Tahan laba dan lakukan reinvestasi atau bagikan via Share Buyback.']
      ],
      caption: 'Tabel 10.0: Perbandingan 3 mazhab teori kebijakan dividen.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Residual Dividend Model'
    },
    {
      kind: 'formula',
      text: `\\text{Dividen Dibagikan} = \\text{Net Income} - [\\text{Target Equity Ratio } (w_s) \\times \\text{Total Capital Budget}]
\\text{Dividend Payout Ratio (DPR)} = \\frac{\\text{Dividen Dibagikan}}{\\text{Net Income}}
\\text{Harga Saham Pasca-Buyback}: \\quad P^* = \\frac{\\text{Nilai Ekuitas Total} - \\text{Kas Digunakan untuk Buyback}}{\\text{Jumlah Saham Beredar Awal} - \\text{Jumlah Saham Dibeli Kembali}} = P_0`,
      note: 'Dalam Model Dividen Residual, dividen hanya dibayarkan jika masih ada sisa laba bersih setelah seluruh proyek investasi ber-NPV positif terpenuhi porsi ekuitasnya.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Kebijakan Dividen Residual PT Sejahtera',
      prompt: 'PT Sejahtera memproyeksikan laba bersih Rp 20 Miliar. Target rasio utang terhadap modal $w_d = 40\\%$ ($w_s = 60\\%$). Perusahaan memiliki 2 skenario Capital Budget: (a) Proyek Rp 25 Miliar, dan (b) Proyek Rp 40 Miliar. Hitung dividen yang dibagikan dan DPR untuk masing-masing skenario!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Skenario (a) Capital Budget Rp 25 Miliar**:\n- Kebutuhan Ekuitas = 60% × Rp 25 M = Rp 15 Miliar.\n- Dividen = Rp 20 M - Rp 15 M = **Rp 5 Miliar**.\n- DPR = Rp 5 M / Rp 20 M = **25,0%**.',
            '**Skenario (b) Capital Budget Rp 40 Miliar**:\n- Kebutuhan Ekuitas = 60% × Rp 40 M = Rp 24 Miliar.\n- Dividen = Rp 20 M - Rp 24 M = **Rp 0 (Defisit Ekuitas Rp 4 Miliar)**.\n- DPR = **0,0%**. Perusahaan tidak membagikan dividen sama sekali dan menahan seluruh laba untuk investasi.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 10'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', '3 Teori Kebijakan Dividen', 'Pembedaan MM, Bird-in-the-Hand, dan Tax Preference.', 'Mampu menganalisis pengaruh kebijakan dividen terhadap harga saham.'],
        ['2', 'Residual Dividend Model', 'Perhitungan alokasi laba bersih ke belanja modal vs dividen.', 'Mampu menghitung dividen residual dan DPR pada berbagai skenario belanja modal.'],
        ['3', 'Share Repurchase vs Cash Dividend', 'Analisis sinyal pasar, fleksibilitas kas, dan perubahan EPS.', 'Mampu membandingkan keunggulan buyback vs dividen tunai.']
      ],
      caption: 'Tabel 10.2: Peta penguasaan submateri TM 10 Manajemen Keuangan.'
    },
    CASE_DIVIDEND_POLICY_REPURCHASE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Informational Content / Signaling**: Kenaikan dividen yang tak terduga dipandang sebagai sinyal bahwa manajemen sangat optimis terhadap prospek laba masa depan.',
        '**Clientele Effect**: Kelompok investor tertentu (seperti dana pensiun) menyukai saham dengan dividen tinggi stabil, sedangkan investor individu tarif pajak tinggi menyukai capital gain.',
        '**Stock Split Tidak Mengubah Nilai**: Pemecahan saham (2-for-1 split) menurunkan harga saham per lembar menjadi setengahnya dan menggandakan jumlah lembar saham, namun total nilai ekuitas pemegang saham tetap sama.'
      ]
    }
  ]
};
