import type { Reading } from '../../../types';
import { CASE_DIVIDEND_POLICY_REPURCHASE } from '../mankeuPracticeCases';

const SVG_DIVIDEND_POLICY = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">DISTRIBUSI KAS: DIVIDEN TUNAI VS SHARE REPURCHASE (BUYBACK)</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">PEMBAGIAN DIVIDEN TUNAI</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Cash Dividend Characteristics:</text>
  <text x="177" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">• Pembayaran kas langsung ke pemegang saham</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="9" text-anchor="middle">• Menciptakan ekspektasi pembayaran rutin</text>
  <text x="177" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">• Pemotongan dividen dipandang sinyal buruk</text>
  <text x="177" y="180" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Sticky Dividend Policy</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="502" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">PEMBELIAN KEMBALI SAHAM (BUYBACK)</text>
  <text x="502" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Stock Repurchase Advantages:</text>
  <text x="502" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">• Fleksibilitas kas tanpa komitmen permanen</text>
  <text x="502" y="138" fill="#cbd5e1" font-size="9" text-anchor="middle">• Menurunkan lembar saham $\rightarrow$ EPS naik</text>
  <text x="502" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">• Sinyal manajemen: Saham sedang Undervalued</text>
  <text x="502" y="180" fill="#4ade80" font-size="9.5" font-weight="700" text-anchor="middle">Capital Gain &amp; EPS Booster</text>
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
