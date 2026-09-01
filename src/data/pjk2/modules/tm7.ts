import type { Reading } from '../../../types';
import { CASE_PPH24_ARTICLE_31E } from '../pjk2PracticeCases';

const SVG_PPH24_31E = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KREDIT PAJAK LUAR NEGERI (PPH 24) &amp; FASILITAS TARIF PASAL 31E UU PPH</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">KREDIT PPH PASAL 24</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Metode Ordinary Credit):</text>
  <text x="177" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Batas Maksimum = (Penghasilan LN / PKP) × PPh Terutang</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pilih yang TERKECIL antara Pajak LN vs Batas Maks</text>
  <text x="177" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dihitung per negara (Per Country Limitation)</text>
  <text x="177" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Pencegahan Pajak Berganda</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="497" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">FASILITAS PASAL 31E</text>
  <text x="497" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Diskon Tarif 50% untuk WP Badan):</text>
  <text x="497" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Omzet s/d 4,8 Miliar: 50% × 22% = 11% (Seluruh PKP)</text>
  <text x="497" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Omzet 4,8 M s/d 50 M: Fasilitas porsi proporsional 4,8 M</text>
  <text x="497" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Omzet > 50 Miliar: Tarif normal penuh 22%</text>
  <text x="497" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Insentif Pajak Badan Menengah</text>
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
