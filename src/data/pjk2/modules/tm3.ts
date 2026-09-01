import type { Reading } from '../../../types';
import { CASE_TRANSFER_PRICING_ALP } from '../pjk2PracticeCases';

const SVG_TRANSFER_PRICING = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PRINSIP KEWAJARAN DAN KELAZIMAN USAHA (ARM'S LENGTH PRINCIPLE - PMK 172/2023)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">METODE TRANSAKSI LABA</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Traditional Transaction Methods):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 1. CUP (Comparable Uncontrolled Price)</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 2. RPM (Resale Price Method)</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 3. CPM (Cost Plus Method)</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Metode Berbasis Harga/Biaya</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">METODE MARGIN TRANSAKSI</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Transactional Profit Methods):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 4. TNMM (Transactional Net Margin)</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 5. PSM (Profit Split Method)</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Digunakan jika CUP sulit dibandingkan</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Metode Berbasis Laba Bersih</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">DOKUMEN TP (TP DOC)</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Ketentuan Pelaporan 3 Tingkat):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dokumen Induk (Master File)</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dokumen Lokal (Local File)</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• CbCR (Laporan per Negara)</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Kepatuhan Anti-BEPS</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Hubungan Istimewa, Transfer Pricing, & Pencegahan Penghindaran Pajak (PMK 172/2023)',
  ref: 'PMK 172/2023 | Pasal 18 UU PPh | Pedoman Transfer Pricing OECD | Prinsip Kewajaran Usaha (ALP)',
  intro: 'TM 3 membahas tata kelola pemajakan transaksi afiliasi dan pencegahan erosi basis pajak (Base Erosion and Profit Shifting / BEPS): kriteria Hubungan Istimewa menurut Pasal 18 ayat (4) UU PPh (Kepemilikan modal >= 25%, Penguasaan manajemen/teknologi, dan Hubungan keluarga), penerapan Prinsip Kewajaran dan Kelaziman Usaha (Arms Length Principle / ALP) berdasarkan PMK No. 172/2023, pemilihan 5 metode transfer pricing, dokumentasi 3-tier TP Doc (Master File, Local File, CbCR), serta aturan Debt-to-Equity Ratio (DER 4:1).',
  objectives: [
    'Mengidentifikasi 3 kriteria terjadinya Hubungan Istimewa menurut UU PPh.',
    'Menerapkan Prinsip Kewajaran dan Kelaziman Usaha (ALP) dalam transaksi afiliasi.',
    'Memilih metode transfer pricing terbaik (The Most Appropriate Method: CUP, RPM, CPM, TNMM, PSM).',
    'Menjelaskan batasan rasio utang terhadap modal (DER 4:1) untuk pembebanan biaya bunga pinjaman.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 3.1: Hierarki Metode Transfer Pricing dan Dokumentasi TP Doc menurut PMK No. 172/2023.',
      svg: SVG_TRANSFER_PRICING
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 3'
    },
    {
      kind: 'table',
      headers: ['Metode Transfer Pricing', 'Prinsip Penentuan Harga Wajar', 'Kondisi Paling Tepat Diterapkan', 'Kelemahan / Tantangan'],
      rows: [
        ['Comparable Uncontrolled Price (CUP)', 'Membandingkan harga transaksi afiliasi langsung dengan harga pasar independen.', 'Tersedia data transaksi pasar bebas atas barang/komoditas yang identik.', 'Sangat sensitif terhadap perbedaan kecil kualitas, merek, atau volume.'],
        ['Resale Price Method (RPM)', 'Harga jual kembali ke pihak independen dikurangi laba kotor (gross margin) wajar.', 'Entitas afiliasi bertindak sebagai distributor/reseller tanpa menambah nilai manufaktur.', 'Sulit menentukan margin pembanding jika terdapat variasi biaya operasional.'],
        ['Cost Plus Method (CPM)', 'Biaya produksi langsung/tidak langsung ditambah margin laba kotor wajar.', 'Entitas afiliasi bertindak sebagai pabrikan maklon (Contract Manufacturer).', 'Perbedaan standar akuntansi biaya antar-perusahaan pembanding.'],
        ['Transactional Net Margin (TNMM)', 'Membandingkan margin laba operasi bersih terhadap basis yang tepat (Penjualan, Biaya, Aset).', 'Banyak transaksi manufaktur dan jasa kompleks yang tidak memiliki data laba kotor.', 'Dapat dipengaruhi oleh inefisiensi manajerial internal perusahaan.'],
        ['Profit Split Method (PSM)', 'Membagi laba gabungan operasi transaksi afiliasi berdasarkan kontribusi nilai ekonomi.', 'Kedua belah pihak memiliki aset tak berwujud unik bernilai tinggi (Intangible Assets).', 'Sangat subjektif dalam mengalokasikan bobot kontribusi laba residual.']
      ],
      caption: 'Tabel 3.0: Matriks 5 metode transfer pricing menurut standar OECD dan PMK 172/2023.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Batasan Biaya Bunga Utang (DER 4:1)'
    },
    {
      kind: 'formula',
      text: `\\text{Rasio Utang terhadap Modal (Debt-to-Equity Ratio / DER)} \\le 4 : 1 \\quad \\text{(PMK 169/PMK.010/2015)}
\\text{Jika } DER > 4 : 1 \\implies \\text{Beban Bunga yang Boleh Dikurangkan} = \\left(\\frac{4 \\times \\text{Ekuitas}}{\\text{Total Utang}}\\right) \\times \\text{Total Beban Bunga}
\\text{Selisih Beban Bunga yang Melebihi Batas} \\implies \\text{Non-Deductible Expense (Koreksi Fiskal Positif)}`,
      note: 'Ketentuan DER 4:1 dikecualikan bagi lembaga perbankan, lembaga pembiayaan, asuransi, pertambangan migas (PSC), dan Wajib Pajak yang seluruh penghasilannya dikenai PPh Final.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Batasan Pembebanan Bunga Pinjaman (Thin Capitalization)',
      prompt: 'PT Manufaktur memiliki rata-rata saldo utang tahun 2026 sebesar Rp 10 Miliar dan rata-rata saldo ekuitas sebesar Rp 2 Miliar. Beban bunga pinjaman komersial yang dibayarkan selama setahun adalah Rp 1.000.000.000. Berapa beban bunga yang boleh dikurangkan secara fiskal dan berapa koreksi fiskalnya?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Rasio Utang terhadap Modal Riil**: DER = Rp 10 Miliar / Rp 2 Miliar = **5 : 1** (Melebihi batas ambang maksimum 4:1).',
            '**Plafon Utang Maksimum yang Bunganya Boleh Diakui**: 4 × Ekuitas = 4 × Rp 2 Miliar = **Rp 8 Miliar**.',
            '**Beban Bunga yang Boleh Dikurangkan (Deductible)**:\nBunga Deductible = $\\frac{Rp 8 \\text{ Miliar}}{Rp 10 \\text{ Miliar}} \\times Rp 1.000.000.000 = \\mathbf{Rp 800.000.000}$.',
            '**Koreksi Fiskal Positif**: Rp 1.000.000.000 - Rp 800.000.000 = **Rp 200.000.000** (Wajib dikoreksi positif menambah laba kena pajak).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 3'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kriteria Hubungan Istimewa', 'Kepemilikan modal >= 25%, penguasaan manajemen, dan keluarga sedarah/semenda.', 'Mampu mengidentifikasi keberadaan transaksi afiliasi.'],
        ['2', 'Penerapan ALP & 5 Metode TP', 'Kriteria seleksi The Most Appropriate Method dan analisis kesebandingan.', 'Mampu menentukan metode transfer pricing yang tepat.'],
        ['3', 'Ketentuan Thin Capitalization DER 4:1', 'Kalkulasi beban bunga pinjaman yang boleh dikurangkan vs koreksi positif.', 'Mampu menghitung koreksi fiskal atas biaya bunga pinjaman afiliasi.']
      ],
      caption: 'Tabel 3.2: Peta penguasaan submateri TM 3 Perpajakan II.'
    },
    CASE_TRANSFER_PRICING_ALP,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**PMK 172/2023 Mengintegrasikan Ketentuan TP**: Menggabungkan aturan transfer pricing, Advance Pricing Agreement (APA), dan Mutual Agreement Procedure (MAP) dalam satu kodifikasi modern.',
        '**Secondary Adjustment**: Koreksi fiskal atas transfer pricing yang tidak wajar dapat direkarakterisasi oleh DJP sebagai pembagian dividen terselubung yang dikenai withholding tax PPh 26 (tarif 20% atau tarif tax treaty).',
        '**Kewajiban TP Doc Tepat Waktu**: TP Doc wajib tersedia paling lambat 4 bulan setelah tahun pajak berakhir (saat lapor SPT Tahunan); keterlambatan penyusunan dianggap tidak menerapkan prinsip kewajaran.'
      ]
    }
  ]
};
