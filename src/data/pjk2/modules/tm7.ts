import type { Reading } from '../../../types';
import { CASE_PPH24_ARTICLE_31E } from '../pjk2PracticeCases';

const SVG_PPH24_31E = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="p31Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="p24Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk7)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">FASILITAS PENGURANGAN TARIF PPH BADAN (PASAL 31E) &amp; KREDIT PAJAK LUAR NEGERI (PASAL 24)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">PASAL 31E &amp; 24</text>

  <!-- Left: Pasal 31E UMKM / Menengah Diskon 50% -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#p31Grad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="10.5" font-weight="800">1. FASILITAS PASAL 31E (DISKON 50% DARI 22% = 11%)</text>
    
    <text class="text-accent-green" x="14" y="52" fill="#34d399" font-size="8.5" font-weight="700">A. Omzet Bruto s.d. Rp 4,8 Miliar:</text>
    <text class="svg-text" x="14" y="66" fill="#cbd5e1" font-size="7.5">Seluruh Penghasilan Kena Pajak (PKP) mendapat diskon 50% →Tarif efektif <tspan class="text-accent-green" fill="#34d399" font-weight="700">11%</tspan>.</text>

    <text class="text-accent-amber" x="14" y="90" fill="#fbbf24" font-size="8.5" font-weight="700">B. Omzet Bruto Rp 4,8 M s.d. Rp 50 Miliar (Proporsional):</text>
    <text class="svg-text" x="14" y="104" fill="#cbd5e1" font-size="7.5">• PKP Fasilitas = (Rp 4,8 M ÷ Total Omzet) × PKP →Dikenakan tarif 11%</text>
    <text class="svg-text" x="14" y="118" fill="#cbd5e1" font-size="7.5">• PKP Non-Fasilitas = Sisa PKP →Dikenakan tarif normal 22%</text>

    <text class="text-accent-red" x="14" y="142" fill="#f87171" font-size="8.5" font-weight="700">C. Omzet Bruto &gt; Rp 50 Miliar:</text>
    <text class="svg-text" x="14" y="156" fill="#cbd5e1" font-size="7.5">Tidak berhak mendapat fasilitas Pasal 31E →Seluruh PKP kena tarif normal 22%.</text>

    <rect class="svg-badge-green" x="14" y="180" width="367" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="197" y="196" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Insentif Pajak Pemerintah untuk Menumbuhkan UMKM</text>
  </g>

  <!-- Right: PPh Pasal 24 Kredit Luar Negeri -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#p24Grad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="10.5" font-weight="800">2. KREDIT PAJAK LUAR NEGERI (PPH PASAL 24)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Prinsip Worldwide Income:</tspan> Penghasilan dari seluruh dunia digabung</text>
    <text class="svg-text" x="14" y="70" fill="#cbd5e1" font-size="8">• Menghindari Pajak Berganda Internasional (Double Taxation Avoidance)</text>
    
    <rect class="svg-subcard" x="14" y="88" width="367" height="36" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text class="text-accent-blue" x="197" y="102" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle">BATAS MAKSIMUM KREDIT PAJAK (ORDINARY CREDIT):</text>
    <text x="197" y="116" fill="#f8fafc" font-size="8" font-weight="700" text-anchor="middle">Max Kredit = (Penghasilan LN ÷ Total PKP Gabungan) × Total PPh Terutang</text>

    <text class="svg-text" x="14" y="142" fill="#cbd5e1" font-size="8">• Kredit pajak yang diakui adalah nilai <tspan class="text-accent-green" fill="#34d399" font-weight="700">TERENDAH</tspan> antara:</text>
    <text class="svg-text" x="14" y="158" fill="#cbd5e1" font-size="8">  (1) Pajak riil dibayar di LN vs (2) Batas Maksimum Kredit PPh 24</text>

    <rect class="svg-badge-blue" x="14" y="180" width="367" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="196" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Perhitungan Dilakukan Per Negara (Per-Country Limitation)</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Penerapan Pasal 31E dilakukan saat menghitung PPh Terutang, sedangkan PPh 24 menjadi pengurang (Kredit) sebelum menghitung PPh Kurang Bayar (Pasal 29).</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Kredit Pajak Luar Negeri PPh Pasal 24, Angsuran Bulanan PPh 25, & Fasilitas Pasal 31E',
  ref: 'UU PPh Pasal 24, 25, 31E | PMK 192/PMK.03/2018 PPh 24 | SE-02/PJ/2015 Fasilitas Pasal 31E',
  intro: 'TM 7 membahas mekanisme penentuan beban pajak penghasilan akhir tahun bagi Wajib Pajak Badan: penghitungan Kredit Pajak Luar Negeri PPh Pasal 24 menggunakan metode Ordinary Credit dengan pembatasan per negara (Per Country Limitation), perhitungan angsuran bulanan PPh Pasal 25 tahun pajak berikutnya, serta penerapan insentif pengurangan tarif 50% (Pasal 31E UU PPh) bagi perseroan dengan peredaran bruto sampai dengan Rp 50 Miliar.',
  objectives: [
    'Menghitung batas maksimum kredit pajak PPh Pasal 24 per negara (Ordinary Credit Method).',
    'Menentukan perlakuan atas kelebihan pajak yang dibayarkan di luar negeri (Tax Excess).',
    'Menghitung porsi PKP fasilitas vs non-fasilitas Pasal 31E untuk omzet antara Rp 4,8 M s/d Rp 50 M.',
    'Menghitung besaran angsuran bulanan PPh Pasal 25 yang wajib disetor pada tahun berjalan.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 7.1: Skema Penghitungan Kredit Pajak Luar Negeri PPh Pasal 24 dan Fasilitas Tarif Pasal 31E.',
      svg: SVG_PPH24_31E
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 24 ayat (1) & (2) UU PPh (Kredit Pajak Luar Negeri)',
      text: '"Pasal 24 ayat (1): Pajak yang dibayar atau terutang di luar negeri atas penghasilan dari luar negeri yang diterima atau diperoleh Wajib Pajak dalam negeri boleh dikreditkan terhadap pajak yang terutang berdasarkan Undang-Undang ini dalam tahun pajak yang sama.\n\nPasal 24 ayat (2): Besarnya kredit pajak adalah sebesar pajak penghasilan yang dibayar atau terutang di luar negeri tetapi tidak boleh melebihi penghitungan pajak yang terutang berdasarkan Undang-Undang ini (Maksimum Kredit Pajak = [Penghasilan Luar Negeri per Negara / Total Penghasilan Kena Pajak] x Total PPh Terutang - Per Country Limitation)."'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 31E ayat (1) UU PPh (Fasilitas Diskon Tarif 50%)',
      text: '"Wajib Pajak badan dalam negeri dengan peredaran bruto sampai dengan Rp 50.000.000.000,00 (lima puluh miliar rupiah) mendapat fasilitas berupa pengurangan tarif sebesar 50% (lima puluh persen) dari tarif Pasal 17 ayat (1) huruf b (tarif efektif menjadi 11%) yang dikenakan atas Penghasilan Kena Pajak dari bagian peredaran bruto sampai dengan Rp 4.800.000.000,00 (empat miliar delapan ratus juta rupiah).\n\nFormula Alokasi PKP Mendapat Fasilitas:\nPKP Fasilitas = (Rp 4.800.000.000 / Peredaran Bruto Total) x PKP Total\nPKP Non-Fasilitas = PKP Total - PKP Fasilitas\nTotal PPh Terutang = (50% x 22% x PKP Fasilitas) + (22% x PKP Non-Fasilitas)."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 7'
    },
    {
      kind: 'table',
      headers: ['Peredaran Bruto (Omzet Tahunan)', 'Ketentuan Fasilitas Pasal 31E', 'Tarif Efektif yang Dikenakan', 'Formula Penghitungan PPh Terutang'],
      rows: [
        ['Omzet s/d Rp 4,8 Miliar', 'Mendapat diskon 50% atas SELURUH Penghasilan Kena Pajak.', '11% (50% × 22%)', '$PPh = 50\\% \\times 22\\% \\times PKP = 11\\% \\times PKP$.'],
        ['Omzet Rp 4,8 Miliar s/d Rp 50 Miliar', 'Mendapat diskon 50% atas PORSI PKP dari bagian omzet s/d 4,8 M.', 'Campuran (11% pada porsi fasilitas & 22% pada porsi non-fasilitas)', '$PKP_{Fas} = \\frac{4,8 \\text{ M}}{\\text{Omzet}} \\times PKP$; Sisa PKP non-fasilitas dikalikan 22%.'],
        ['Omzet > Rp 50 Miliar', 'TIDAK berhak atas fasilitas Pasal 31E.', '22% Penuh', '$PPh = 22\\% \\times PKP$.']
      ],
      caption: 'Tabel 7.0: Matriks pengenaan fasilitas tarif PPh Badan Pasal 31E.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: PPh 24 & Angsuran PPh 25'
    },
    {
      kind: 'formula',
      text: `\\text{Batas Maksimum Kredit PPh 24 Negara X} = \\frac{\\text{Penghasilan Neto Negara X}}{\\text{Total Penghasilan Kena Pajak (PKP)}} \\times \\text{Total PPh Badan Terutang}
\\text{Kredit PPh 24 yang Diakui} = \\min(\\text{Pajak Riil Dibayar di Luar Negeri}, \\text{Batas Maksimum Fiskal})
\\text{Angsuran Bulanan PPh 25 Tahun Berjalan} = \\frac{\\text{PPh Terutang SPT Lalu} - \\text{Total Kredit Pajak (PPh 21, 22, 23, 24)}}{12 \\text{ Bulan}}`,
      note: 'Kerugian usaha di luar negeri dilarang digabungkan (loss relief limitation). Jika Wajib Pajak menderita rugi di negara X, penghasilan negara X dianggap nol dalam penghitungan PPh 24.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Angsuran Bulanan PPh Pasal 25 Tahun Pajak Baru',
      prompt: 'SPT Tahunan PPh Badan PT Sentosa tahun pajak 2025 menunjukkan PPh Terutang sebesar Rp 600.000.000. Kredit pajak tahun berjalan yang dipotong pihak ketiga: PPh 22 = Rp 60 Jt, PPh 23 = Rp 40 Jt, PPh 24 = Rp 20 Jt. Hitung besarnya angsuran bulanan PPh Pasal 25 yang harus dibayar sendiri oleh PT Sentosa per bulan mulai masa Maret 2026!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Total Kredit Pajak**: PPh 22 (60 Jt) + PPh 23 (40 Jt) + PPh 24 (20 Jt) = **Rp 120.000.000**.',
            '**Dasar Penghitungan Angsuran**: PPh Terutang - Kredit Pajak = Rp 600.000.000 - Rp 120.000.000 = **Rp 480.000.000**.',
            '**Besaran Angsuran Bulanan PPh Pasal 25**: $\\frac{Rp 480.000.000}{12 \\text{ Bulan}} = \\mathbf{Rp 40.000.000 \\text{ per bulan}}$.',
            '**Ketentuan Setor**: Angsuran Rp 40 Juta wajib disetor paling lambat tanggal 15 bulan berikutnya.'
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
        ['1', 'Ordinary Credit PPh 24', 'Kalkulasi batas maksimum per negara dan penanganan selisih lebih pajak.', 'Mampu mengkalkulasi kredit pajak luar negeri yang sah.'],
        ['2', 'Fasilitas Diskon Tarif Pasal 31E', 'Pemisahan PKP fasilitas proporsional dan non-fasilitas.', 'Mampu menghitung PPh Badan terutang Wajib Pajak menengah.'],
        ['3', 'Penetapan Angsuran PPh 25', 'Perhitungan cicilan bulanan tahun berjalan dan saat berlakunya angsuran baru.', 'Mampu menyusun skedul kepatuhan angsuran PPh 25.']
      ],
      caption: 'Tabel 7.2: Peta penguasaan submateri TM 7 Perpajakan II.'
    },
    CASE_PPH24_ARTICLE_31E,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Per Country Limitation**: Batas maksimum kredit PPh 24 wajib dihitung secara individual untuk masing-masing negara sumber penghasilan, tidak boleh digabung secara global.',
        '**Kelebihan Pajak Luar Negeri Hangus**: Jika tarif pajak di luar negeri lebih tinggi daripada di Indonesia, selisih lebih pajak tersebut tidak dapat direstitusi dan tidak dapat menjadi beban pengurang di Indonesia.',
        '**Pasal 31E Berlaku Otomatis**: Fasilitas Pasal 31E merupakan ketentuan undang-undang yang berlaku otomatis tanpa mewajibkan permohonan tertulis kepada kantor pajak.'
      ]
    }
  ]
};
