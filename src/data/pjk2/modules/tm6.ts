import type { Reading } from '../../../types';
import { CASE_FINAL_TAX_CONSTRUCTION_RENT } from '../pjk2PracticeCases';

const SVG_FINAL_TAX_4_2 = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="f1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="f2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="f3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="f4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk6)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">RAGAM OBJEK DAN TARIF PPH FINAL PASAL 4 AYAT (2) UU PPH (PP 9/2021 &amp; PP 34/2016)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">PPH FINAL 4(2)</text>

  <!-- 4 Key Categories Grid -->
  <!-- 1. Sewa Tanah & Bangunan -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#f1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="97" y="20" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">SEWA TANAH / GEDUNG</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="97" y="53" fill="#38bdf8" font-size="9" font-weight="900" text-anchor="middle">TARIF: 10% FINAL</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Objek: Sewa ruko, gedung kantor,</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  gudang, lahan tanah, apartemen</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• DPP: Total nilai sewa bruto + service charge</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Dipotong oleh penyewa berstatus badan</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">• Setor sendiri jika penyewa OP biasa</text>
    <rect class="svg-badge-blue" x="10" y="185" width="175" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Sewa Properti Tak Bergerak</text>
  </g>

  <!-- 2. Jasa Konstruksi -->
  <g transform="translate(245, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#f2)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="97" y="20" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">JASA KONSTRUKSI</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="97" y="53" fill="#34d399" font-size="9" font-weight="900" text-anchor="middle">TARIF: 1,75% s.d. 4%</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Pelaksana Kecil ber-SBU: 1,75%</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Pelaksana Menengah/Besar: 2,65%</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Pelaksana Tanpa SBU: 4%</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Konsultansi / Pengawasan: 3,5% - 6%</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">• Diatur dalam PP 9 Tahun 2021</text>
    <rect class="svg-badge-green" x="10" y="185" width="175" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Berdasarkan Kualifikasi SBU</text>
  </g>

  <!-- 3. Pengalihan Hak Tanah/Bangunan -->
  <g transform="translate(455, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#f3)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="97" y="20" fill="#fbbf24" font-size="9.5" font-weight="800" text-anchor="middle">PENGALIHAN HAK TANAH</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="53" fill="#fbbf24" font-size="9" font-weight="900" text-anchor="middle">TARIF: 2,5% FINAL</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Objek: Penjualan properti real estate</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Rumah Sederhana/Rusunami: 1%</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• DPP: Nilai tertinggi antara Akta Jual</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  Beli (AJB) vs NJOP PBB</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">• Syarat validasi sebelum balik nama BPN</text>
    <rect class="svg-badge-amber" x="10" y="185" width="175" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Pajak Penjual Properti (PPhTB)</text>
  </g>

  <!-- 4. Dividen OP & Bunga Deposito -->
  <g transform="translate(665, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#f4)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="97" y="20" fill="#a78bfa" font-size="9.5" font-weight="800" text-anchor="middle">DIVIDEN &amp; BUNGA BANK</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="97" y="53" fill="#a78bfa" font-size="9" font-weight="900" text-anchor="middle">TARIF: 10% / 20%</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Bunga Deposito &amp; Tabungan: 20%</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Dividen Orang Pribadi DN: 10%</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Fasilitas Bebas Pajak:</tspan> Dividen OP</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  BEBAS PPh jika direinvestasikan di</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">  wilayah NKRI minimal 3 tahun (UU Ciptaker)</text>
    <rect class="svg-badge-purple" x="10" y="185" width="175" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="97" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Penghasilan Bunga &amp; Investasi</text>
  </g>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Pemotongan PPh Final Pasal 4 ayat (2) & Norma Penghitungan Khusus PPh Pasal 15',
  ref: 'UU PPh Pasal 4 ayat (2) & Pasal 15 | PP 9/2022 Jasa Konstruksi | PP 34/2016 Pengalihan Tanah',
  intro: 'TM 6 membahas pemajakan berkarakteristik final atas penghasilan tertentu: PPh Final Pasal 4 ayat (2) atas sewa tanah dan/atau bangunan (10%), pengalihan hak atas tanah/bangunan (2,5%), bunga deposito dan tabungan (20%), transaksi saham di bursa efek (0,1%), tarif terkini jasa konstruksi menurut PP No. 9 Tahun 2022, serta norma penghitungan khusus PPh Pasal 15 bagi perusahaan pelayaran dan penerbangan nasional/internasional.',
  objectives: [
    'Menghitung pemotongan PPh Final Pasal 4 ayat (2) atas persewaan tanah/bangunan dan dividen orang pribadi.',
    'Menerapkan klasifikasi tarif jasa konstruksi sesuai sertifikasi kualifikasi usaha (PP No. 9/2022).',
    'Menghitung PPh Pasal 15 atas peredaran bruto perusahaan pelayaran dalam negeri (1,2%).',
    'Menganalisis dampak perlakuan PPh Final terhadap koreksi fiskal negatif di Lampiran I SPT 1771.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 6.1: Rincian Objek dan Tarif Pemotongan PPh Final Pasal 4 ayat (2) dan Norma Khusus PPh Pasal 15.',
      svg: SVG_FINAL_TAX_4_2
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 4 ayat (2) UU PPh s.t.d.t.d UU HPP (Objek PPh Final)',
      text: '"Penghasilan di bawah ini dapat dikenai pajak bersifat final: a. penghasilan berupa bunga deposito dan tabungan lainnya, bunga obligasi dan surat utang negara, dan bunga simpanan yang dibayarkan oleh koperasi kepada anggota orang pribadi; b. penghasilan berupa hadiah undian; c. penghasilan dari transaksi saham dan sekuritas lainnya, transaksi derivatif yang diperdagangkan di bursa, dan transaksi penjualan saham pada perusahaan pasangan modal ventura; d. penghasilan dari transaksi pengalihan harta berupa tanah dan/atau bangunan, usaha jasa konstruksi, usaha real estat, dan persewaan tanah dan/atau bangunan; dan e. penghasilan tertentu lainnya yang diatur dengan atau berdasarkan Peraturan Pemerintah."'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: '📜 Ketentuan Tarif Regulasi: PP No. 9/2021 (Jasa Konstruksi) & PP 34/2016 (Tanah/Bangunan)',
      text: '"1. Sewa Tanah dan/atau Bangunan: 10% dari jumlah bruto nilai persewaan (PP 34/2017);\n2. Pengalihan Hak atas Tanah/Bangunan: 2,5% dari jumlah bruto nilai pengalihan (PP 34/2016);\n3. Jasa Konstruksi (PP 9/2021):\n   • Pekerjaan Konstruksi: 1,75% (kualifikasi kecil), 2,65% (menengah/besar), 4% (tanpa sertifikat);\n   • Konsultansi Konstruksi: 3,5% (bersertifikat), 6% (tanpa sertifikat);\n   • Konstruksi Terintegrasi: 2,65% (bersertifikat), 4% (tanpa sertifikat);\n4. Dividen Orang Pribadi DN: 10% final (Pasal 17 ayat 2c UU PPh) atau bebas pajak jika direinvestasikan di NKRI sesuai UU Cipta Kerja."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 6'
    },
    {
      kind: 'table',
      headers: ['Objek Pemotongan PPh Final', 'Dasar Pengenaan Pajak (DPP)', 'Tarif PPh Final', 'Regulasi Rujukan'],
      rows: [
        ['Sewa Tanah dan/atau Bangunan', 'Jumlah bruto nilai persewaan termasuk service charge.', '10%', 'PP No. 34 Tahun 2017.'],
        ['Pengalihan Hak atas Tanah/Bangunan', 'Nilai tertinggi antara Akta Jual Beli vs NJOP PBB.', '2,5% (Umum) | 1% (RS/RSS) | 0% (Pemerintah).', 'PP No. 34 Tahun 2016.'],
        ['Jasa Pelaksanaan Konstruksi (Kecil)', 'Jumlah pembayaran kontrak tidak termasuk PPN.', '1,75% (Memiliki sertifikat badan usaha kecil).', 'PP No. 9 Tahun 2022.'],
        ['Jasa Pelaksanaan Konstruksi (Menengah/Besar)', 'Jumlah pembayaran kontrak tidak termasuk PPN.', '2,65% (Kualifikasi menengah atau besar).', 'PP No. 9 Tahun 2022.'],
        ['Jasa Konsultansi Konstruksi', 'Jumlah pembayaran kontrak tidak termasuk PPN.', '3,5% (Memiliki SBU) | 6% (Tanpa SBU).', 'PP No. 9 Tahun 2022.'],
        ['Pelayaran Dalam Negeri (PPh 15)', 'Peredaran bruto carter kapal / tiket angkutan laut.', '1,2% efektif (30% deemed profit × 4% tarif).', 'KMK No. 416/KMK.04/1996.']
      ],
      caption: 'Tabel 6.0: Matriks tarif PPh Final Pasal 4 ayat (2) dan PPh Pasal 15.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Jasa Konstruksi PP 9/2022'
    },
    {
      kind: 'formula',
      text: `\\text{Tarif Pelaksanaan Konstruksi}: \\quad \\begin{cases}
1,75\\% & \\text{(Memiliki Sertifikat Standar Kualifikasi Kecil)} \\\\
2,65\\% & \\text{(Memiliki Sertifikat Kualifikasi Menengah / Besar)} \\\\
4,00\\% & \\text{(Tidak Memiliki Sertifikat / Kualifikasi Usaha)}
\\end{cases}
\\text{PPh 15 Perusahaan Pelayaran DN} = 1,2\\% \\times \\text{Peredaran Bruto Carter Kapal} \\quad \\text{(Sifat Pajak: Final)}`,
      note: 'Biaya-biaya operasional yang dikeluarkan untuk mendapatkan penghasilan yang telah dikenai PPh Final TIDAK BOLEH dikurangkan dari penghasilan bruto (Non-Deductible Expense).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Kontrak Konsultansi Perencanaan Konstruksi',
      prompt: 'PT Arsitek Handal (memiliki Sertifikasi Kualifikasi Usaha Konsultansi Konstruksi) menerima kontrak jasa perencanaan gedung kantor senilai Rp 200.000.000 (tidak termasuk PPN). Berapa PPh Final Pasal 4 ayat (2) yang dipotong oleh pengguna jasa?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Ketentuan PP No. 9 Tahun 2022**: Jasa konsultansi konstruksi yang dikerjakan oleh penyedia jasa yang **memiliki sertifikat kualifikasi usaha** dikenai tarif **3,5%**.',
            '**Perhitungan Pajak**: PPh Final Pasal 4 ayat (2) = 3,5% × Rp 200.000.000 = **Rp 7.000.000**.',
            '**Kas Diterima Bersih**: Kas yang ditransfer pengguna jasa ke rekening PT Arsitek Handal = Rp 200.000.000 - Rp 7.000.000 = **Rp 193.000.000** (ditambah PPN 11% jika menerbitkan faktur pajak).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 6'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'PPh Final Properti (Sewa & Jual Tanah)', 'Kalkulasi tarif 10% sewa dan 2,5% pengalihan hak tanah/bangunan.', 'Mampu menghitung kewajiban PPh Final transaksi properti.'],
        ['2', 'Tarif Konstruksi PP No. 9/2022', 'Perubahan tarif konstruksi terbaru dan sanksi bagi yang tidak ber-SBU.', 'Mampu menggolongkan tarif konstruksi berdasarkan bukti sertifikat.'],
        ['3', 'Norma Khusus PPh Pasal 15', 'Kalkulasi deemed profit pelayaran dalam negeri dan penerbangan asing.', 'Mampu menghitung pemotongan PPh 15 atas jasa pengangkutan laut.']
      ],
      caption: 'Tabel 6.2: Peta penguasaan submateri TM 6 Perpajakan II.'
    },
    CASE_FINAL_TAX_CONSTRUCTION_RENT,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Service Charge Termasuk Objek PPh Sewa**: Service charge, sinking fund, dan biaya utilitas yang ditagihkan pemilik gedung kepada penyewa wajib digabung sebagai DPP PPh Final Sewa tarif 10%.',
        '**PP 9/2022 Menurunkan Sebagian Tarif Konstruksi**: Tarif pelaksanaan konstruksi kualifikasi kecil turun dari 2% menjadi 1,75%, dan kualifikasi menengah turun dari 3% menjadi 2,65%.',
        '**Dilarang Netting Off**: Penghasilan yang dikenai PPh Final dikeluarkan seluruhnya dari PKP, dan beban-beban terkait penghasilan final tersebut wajib dikoreksi positif 100%.'
      ]
    }
  ]
};
