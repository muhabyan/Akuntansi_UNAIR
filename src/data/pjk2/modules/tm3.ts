import type { Reading } from '../../../types';

const SVG_TRANSFER_PRICING_APA = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="gBlue3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="gPurple3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="gAmber3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk3)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">HUBUNGAN ISTIMEWA, TRANSFER PRICING, &amp; ANTI-PENGHINDARAN PAJAK (SAAR/GAAR/APA)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TM03 AFILIASI</text>

  <!-- Card 1: 3 Pilar Hubungan Istimewa -->
  <g transform="translate(30, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="12" fill="url(#gBlue3)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. TIGA PILAR AFILIASI</text>
    
    <rect class="svg-subcard" x="12" y="38" width="241" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="53" fill="#38bdf8" font-size="7.5" font-weight="800" text-anchor="middle">Pasal 18(4) UU PPh &amp; Pasal 33 PP 55/2022</text>
    
    <text class="svg-text" x="12" y="78" fill="#cbd5e1" font-size="7.5">• Pilar 1 (Modal): Saham &ge; 25% langsung atau</text>
    <text class="svg-text" x="12" y="93" fill="#cbd5e1" font-size="7.5">  bertingkat, atau dimiliki pihak sama &ge; 25%</text>
    <text class="svg-text" x="12" y="108" fill="#cbd5e1" font-size="7.5">• Pilar 2 (Penguasaan): Manajemen, teknologi,</text>
    <text class="svg-text" x="12" y="123" fill="#cbd5e1" font-size="7.5">  operasional, ketergantungan keputusan bisnis</text>
    <text class="svg-text" x="12" y="138" fill="#cbd5e1" font-size="7.5">• Pilar 3 (Keluarga): Sedarah / semenda</text>
    <text class="svg-text" x="12" y="153" fill="#cbd5e1" font-size="7.5">  1 derajat lurus/ke samping + Suami-Istri PH</text>

    <rect class="svg-badge-blue" x="12" y="185" width="241" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Uji Yuridis Hubungan Istimewa</text>
  </g>

  <!-- Card 2: ALP & 5 Metode Transfer Pricing -->
  <g transform="translate(315, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="12" fill="url(#gPurple3)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="132" y="20" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">2. ARM'S LENGTH &amp; 5 METODE</text>
    
    <rect class="svg-subcard" x="12" y="38" width="241" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="132" y="53" fill="#a78bfa" font-size="7.5" font-weight="800" text-anchor="middle">PMK 172/2023 &amp; Secondary Adjustment</text>
    
    <text class="svg-text" x="12" y="78" fill="#cbd5e1" font-size="7.5">• CUP: Pembanding harga barang sejenis</text>
    <text class="svg-text" x="12" y="93" fill="#cbd5e1" font-size="7.5">• RPM: Distributor murni tanpa nilai tambah</text>
    <text class="svg-text" x="12" y="108" fill="#cbd5e1" font-size="7.5">• CPM: Manufaktur kontrak / jasa rutin</text>
    <text class="svg-text" x="12" y="123" fill="#cbd5e1" font-size="7.5">• TNMM: Uji net margin (Berry/OM/Full Cost)</text>
    <text class="svg-text" x="12" y="138" fill="#cbd5e1" font-size="7.5">• PSM: Pembagian laba aset unik (intangibles)</text>
    <text class="svg-text" x="12" y="153" fill="#cbd5e1" font-size="7.5">• Secondary Adj: Selisih = Dividen Terselubung</text>

    <rect class="svg-badge-purple" x="12" y="185" width="241" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="132" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Pencegahan Pergeseran Laba Fiskal</text>
  </g>

  <!-- Card 3: 8 SAAR, GAAR, & Kesepakatan APA -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="12" fill="url(#gAmber3)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="132" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">3. SAAR, GAAR, &amp; APA</text>
    
    <rect class="svg-subcard" x="12" y="38" width="241" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="132" y="53" fill="#fbbf24" font-size="7.5" font-weight="800" text-anchor="middle">PP 55/2022 &amp; PMK 169/2015</text>
    
    <text class="svg-text" x="12" y="78" fill="#cbd5e1" font-size="7.5">• CFC: WPDN &ge; 50% &rarr; Deemed Dividend</text>
    <text class="svg-text" x="12" y="93" fill="#cbd5e1" font-size="7.5">• Thin Capitalization: Batas DER maks 4:1</text>
    <text class="svg-text" x="12" y="108" fill="#cbd5e1" font-size="7.5">• SPV, Conduit, Deemed Salary, Anti-Hybrid</text>
    <text class="svg-text" x="12" y="123" fill="#cbd5e1" font-size="7.5">• GAAR: Prinsip Substance Over Form</text>
    <text class="svg-text" x="12" y="138" fill="#cbd5e1" font-size="7.5">• APA: Maksimal 5 Tahun Pajak (Unilateral /</text>
    <text class="svg-text" x="12" y="153" fill="#cbd5e1" font-size="7.5">  Bilateral/Multilateral MAP) + Roll-back</text>

    <rect class="svg-badge-amber" x="12" y="185" width="241" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="132" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Instrumen Anti-Penghindaran Komprehensif</text>
  </g>

  <!-- Footer Banner -->
  <rect class="svg-footer" x="30" y="320" width="835" height="22" rx="6" fill="#1e293b" fill-opacity="0.8"/>
  <text class="svg-muted" x="447" y="335" fill="#94a3b8" font-size="8" text-anchor="middle">Pasal 18 &amp; 32A UU PPh | Bab VI PP 55/2022 | PMK 172/2023 | PMK 169/PMK.010/2015 | Pedoman OECD Transfer Pricing</text>
</svg>`;

export const TM3_READING: Reading = {
  tm: 3,
  title: 'Hubungan Istimewa, Instrumen Pencegahan Penghindaran Pajak, dan Kesepakatan Harga Transfer (APA)',
  ref: 'UU PPh Pasal 18 & 32A | UU No. 7/2021 HPP | PP 55/2022 Bab VI | PMK 172/2023 | PMK 169/2015',
  intro: 'Modul TM 3 membahas secara komprehensif tata kelola pemajakan atas transaksi antar-pihak berafiliasi dan pencegahan erosi basis pajak internasional (Base Erosion and Profit Shifting / BEPS): pengujian yuridis Tiga Pilar Hubungan Istimewa (modal minimal 25%, penguasaan operasional/teknologi, dan keluarga 1 derajat sedarah/semenda serta suami-istri pisah harta), penerapan Prinsip Kewajaran dan Kelaziman Usaha (Arm\'s Length Principle) berdasarkan PMK 172/2023, pemilihan 5 metode transfer pricing, rekonstruksi koreksi sekunder (secondary adjustment) sebagai dividen terselubung terutang PPh 23 / PPh 26, arsitektur 8 instrumen Specific Anti-Avoidance Rules (SAAR) termasuk pembatasan bunga pinjaman (Thin Capitalization DER 4:1) dan CFC rules (minimal 50%), General Anti-Avoidance Rule (GAAR) berbasis prinsip substance over form, tata cara Kesepakatan Harga Transfer (Advance Pricing Agreement / APA) dengan masa berlaku maksimal 5 tahun pajak, serta mekanisme eliminasi pajak berganda internasional melalui P3B (Tax Treaty) dan kredit pajak Pasal 24 UU PPh.',
  objectives: [
    'Menguji keberadaan hubungan istimewa berdasarkan Tiga Pilar (Penyertaan Modal langsung/bertingkat minimal 25%, Penguasaan Manajemen/Teknologi, dan Hubungan Keluarga 1 Derajat sedarah/semenda) menurut Pasal 18 ayat (4) UU PPh jo. Pasal 33 PP 55/2022.',
    'Menerapkan Prinsip Kewajaran dan Kelaziman Usaha (Arm\'s Length Principle / ALP) melalui analisis Fungsi, Aset, dan Risiko (FAR) serta memilih metode transfer pricing yang paling tepat (CUP, RPM, CPM, TNMM, PSM) sesuai PMK 172/2023.',
    'Menghitung koreksi fiskal primer (primary adjustment) atas transaksi penjualan/pembelian afiliasi serta menetapkan konsekuensi koreksi sekunder (secondary adjustment) sebagai dividen terselubung yang terutang pemotongan PPh Pasal 23 atau PPh Pasal 26.',
    'Menganalisis 8 instrumen Specific Anti-Avoidance Rules (SAAR) dalam PP 55/2022, khususnya pembatasan biaya bunga pada Thin Capitalization (Debt to Equity Ratio maksimal 4:1) menurut PMK 169/2015 dan penetapan Deemed Dividend pada Controlled Foreign Corporation (CFC).',
    'Menjelaskan penerapan klausul General Anti-Avoidance Rule (GAAR) berbasis prinsip substance over form menurut Pasal 32 ayat (4) PP 55/2022.',
    'Menguraikan tata kelola Kesepakatan Harga Transfer (Advance Pricing Agreement / APA) unilateral maupun bilateral/multilateral beserta batas waktu maksimal 5 tahun pajak dan mekanisme roll-back.',
    'Memetakan asas perpajakan internasional (asas domisili worldwide vs asas sumber) serta penerapan Perjanjian Penghindaran Pajak Berganda (P3B / Tax Treaty) sesuai Pasal 32A UU PPh.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 3.1: Arsitektur Pengujian Hubungan Istimewa, Transfer Pricing, SAAR/GAAR, dan APA.',
      svg: SVG_TRANSFER_PRICING_APA
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 18 UU PPh (Wewenang Fiskus & Hubungan Istimewa)',
      text: '"Pasal 18 ayat (1): Menteri Keuangan berwenang mengatur besarnya perbandingan antara utang dan modal perusahaan untuk keperluan penghitungan pajak.\n\nPasal 18 ayat (2): Menteri Keuangan berwenang menetapkan saat diperolehnya dividen oleh Wajib Pajak dalam negeri atas penyertaan modal pada badan usaha di luar negeri selain badan usaha yang menjual sahamnya di bursa efek (CFC Rules).\n\nPasal 18 ayat (3): Direktur Jenderal Pajak berwenang untuk menentukan kembali besarnya penghasilan dan pengurangan serta menentukan utang sebagai modal untuk menghitung besarnya Penghasilan Kena Pajak bagi Wajib Pajak yang mempunyai hubungan istimewa dengan Wajib Pajak lainnya sesuai dengan kewajaran dan kelaziman usaha yang tidak dipengaruhi oleh hubungan istimewa (Prinsip Kewajaran dan Kelaziman Usaha).\n\nPasal 18 ayat (4): Hubungan istimewa dianggap ada apabila:\na. Wajib Pajak mempunyai penyertaan modal langsung atau tidak langsung paling rendah 25% pada Wajib Pajak lain; atau hubungan antara dua Wajib Pajak atau lebih yang berada di bawah penguasaan yang sama;\nb. Wajib Pajak menguasai Wajib Pajak lainnya atau dua atau lebih Wajib Pajak berada di bawah penguasaan yang sama baik langsung maupun tidak langsung; atau\nc. terdapat hubungan keluarga baik sedarah maupun semenda dalam garis keturunan lurus dan/atau ke samping satu derajat."'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '⚖️ Pembaruan Regulasi Transfer Pricing: Status Dual Posisi PP 55/2022 & PMK 172/2023',
      text: 'Rujukan terdahulu pada slide perkuliahan dosen yang mengutip PER-43/PJ/2010 jo. PER-32/PJ/2011, PMK No. 213/PMK.03/2016 (TP Doc), PMK No. 49/PMK.03/2019 (MAP), dan PMK No. 22/PMK.03/2020 (APA) telah RESMI DICABUT dan disatukan (unifikasi) ke dalam Peraturan Pemerintah No. 55 Tahun 2022 (Bab VI) dan Peraturan Menteri Keuangan No. 172 Tahun 2023.\n\nPMK 172/2023 menjadi single omnibus regulation untuk transfer pricing di Indonesia yang mengintegrasikan penerapan Prinsip Kewajaran dan Kelaziman Usaha (PKKU), analisis kesebandingan, pendokumentasian 3-tier TP Doc, tata cara MAP, serta kesepakatan APA unilateral maupun bilateral.'
    },
    {
      kind: 'h2',
      text: '1. Tiga Pilar Kriteria Hubungan Istimewa (Pasal 18 ayat 4 UU PPh jo. Pasal 33 PP 55/2022)'
    },
    {
      kind: 'p',
      text: 'Hubungan istimewa merupakan pintu masuk yuridis bagi fiskus untuk melakukan pengujian kewajaran harga. Sesuai Pasal 18 ayat (4) UU PPh dan Pasal 33 PP 55/2022, hubungan istimewa terjadi apabila memenuhi salah satu dari 3 (tiga) pilar berikut:'
    },
    {
      kind: 'table',
      headers: ['Pilar Afiliasi', 'Kriteria Pokok & Batasan Kuantitatif', 'Mekanisme Deteksi Fiskus', 'Landasan Yuridis'],
      rows: [
        ['Pilar 1: Penyertaan Modal', 'Penyertaan modal langsung atau tidak langsung minimal 25% (dua puluh lima persen); atau kepemilikan oleh pihak yang sama masing-masing minimal 25%.', 'Dihitung secara langsung pada daftar pemegang saham, atau dikalikan berantai secara bertingkat (% Saham A ke B x % Saham B ke C).', 'Pasal 18 (4) huruf a UU PPh; Pasal 33 (2) PP 55/2022'],
        ['Pilar 2: Penguasaan Manajemen & Teknologi', 'Satu pihak menguasai pihak lain, atau dua/lebih pihak berada di bawah penguasaan yang sama melalui ketergantungan manajemen, kendali operasional, teknologi, formula rahasia, atau pasokan bahan baku.', 'Penguasaan faktual dan substansi ekonomis (meskipun kepemilikan saham di bawah 25% atau tanpa kepemilikan saham formal).', 'Pasal 18 (4) huruf b UU PPh; Pasal 33 (3) PP 55/2022'],
        ['Pilar 3: Hubungan Keluarga', 'Terdapat hubungan keluarga sedarah maupun semenda dalam garis keturunan lurus dan/atau ke samping SATU DERAJAT.', 'Sedarah lurus: ayah/ibu kandung, anak kandung. Sedarah ke samping: saudara kandung. Semenda lurus: mertua, menantu, anak tiri. Semenda ke samping: ipar. Suami-istri dengan perjanjian pisah harta (PH/MT).', 'Pasal 18 (4) huruf c UU PPh; Pasal 33 (4) PP 55/2022']
      ],
      caption: 'Tabel 3.1: Matriks pengujian Tiga Pilar Hubungan Istimewa perpajakan Indonesia.'
    },
    {
      kind: 'callout',
      variant: 'tip',
      title: '📌 Hubungan Istimewa Menurut UU PPN (Pasal 2 UU PPN)',
      text: 'Dalam transaksi penyerahan Barang Kena Pajak (BKP) atau Jasa Kena Pajak (JKP) antar-pihak yang memiliki hubungan istimewa, Dasar Pengenaan Pajak (DPP) PPN tidak boleh menggunakan harga faktur diskon internal. DPP PPN wajib ditetapkan berdasarkan HARGA PASAR WAJAR yang berlaku umum saat penyerahan BKP/JKP dilakukan.'
    },
    {
      kind: 'h2',
      text: '2. Prinsip Kewajaran dan Kelaziman Usaha (Arm\'s Length Principle) & 5 Metode Transfer Pricing'
    },
    {
      kind: 'p',
      text: 'Prinsip Kewajaran dan Kelaziman Usaha (PKKU) mensyaratkan kondisi dalam transaksi yang dilakukan antara pihak-pihak yang mempunyai hubungan istimewa harus sama atau sebanding dengan kondisi dalam transaksi antara pihak-pihak yang independen (PMK 172/2023). Pemilihan metode transfer pricing dilakukan berdasarkan prinsip the most appropriate method:'
    },
    {
      kind: 'table',
      headers: ['Metode Transfer Pricing', 'Prinsip Penentuan Harga Wajar', 'Kondisi Paling Sesuai Digunakan', 'Rujukan PMK 172/2023'],
      rows: [
        ['Comparable Uncontrolled Price (CUP)', 'Membandingkan harga transaksi afiliasi langsung dengan harga transaksi independen atas barang/jasa identik.', 'Transaksi komoditas dan produk standar dengan data pembanding internal/eksternal yang sangat sebanding.', 'Pasal 9 PMK 172/2023'],
        ['Resale Price Method (RPM)', 'Harga jual kembali ke pihak independen dikurangi margin laba kotor wajar distributor.', 'Entitas distributor atau reseller murni yang tidak menambah nilai ekonomis signifikan terhadap barang dagangan.', 'Pasal 10 PMK 172/2023'],
        ['Cost Plus Method (CPM)', 'Biaya perolehan/produksi langsung ditambah mark-up laba kotor wajar pabrikan.', 'Manufaktur kontrak (contract manufacturer) atau penyedia jasa rutin berafiliasi yang tidak menanggung risiko pasar.', 'Pasal 11 PMK 172/2023'],
        ['Transactional Net Margin Method (TNMM)', 'Membandingkan margin laba operasi bersih terhadap dasar yang tepat (Operating Margin, Full Cost Mark-up, Berry Ratio, Return on Assets).', 'Data margin laba kotor pihak ketiga tidak tersedia rinci, namun data margin laba bersih pembanding tersedia publik.', 'Pasal 12 PMK 172/2023'],
        ['Profit Split Method (PSM)', 'Membagi total laba operasi gabungan berdasarkan kontribusi fungsional dan nilai aset masing-masing pihak.', 'Transaksi intra-grup yang sangat terintegrasi di mana kedua pihak sama-sama mengontribusikan aset tak berwujud unik bernilai tinggi.', 'Pasal 13 PMK 172/2023']
      ],
      caption: 'Tabel 3.2: Perbandingan 5 metode penetapan harga transfer menurut PMK 172/2023.'
    },
    {
      kind: 'h2',
      text: '3. Rekonstruksi Koreksi Sekunder (Secondary Adjustment): Dividen Terselubung'
    },
    {
      kind: 'p',
      text: 'Berdasarkan Pasal 37 PP No. 55 Tahun 2022 dan PMK No. 172 Tahun 2023, apabila DJP melakukan penyesuaian harga transfer (koreksi primer) atas transaksi afiliasi:'
    },
    {
      kind: 'ul',
      items: [
        '**Koreksi Primer (Primary Adjustment)**: Mengoreksi nilai peredaran usaha atau beban pokok penjualan ke nilai wajar, sehingga menambah Penghasilan Kena Pajak (PKP) dan menimbulkan tambahan utang PPh Badan (tarif 22%).',
        '**Koreksi Sekunder (Secondary Adjustment)**: Selisih antara nilai transaksi yang tidak wajar dengan nilai wajar pasar merupakan aliran dana ekonomis yang telah berpindah ke pihak afiliasi. Jika selisih tersebut TIDAK DISETORKAN KEMBALI ke kas Wajib Pajak dalam negeri, selisih tersebut dikarakterisasi sebagai PEMBAGIAN DIVIDEN TERSELUBUNG (Constructive Dividend).',
        '**Withholding Tax**: Atas dividen terselubung tersebut terutang pemotongan PPh Pasal 23 (jika afiliasi dalam negeri) atau PPh Pasal 26 (tarif 20% atau tarif P3B jika afiliasi luar negeri).'
      ]
    },
    {
      kind: 'h2',
      text: '4. Arsitektur 8 Instrumen Specific Anti-Avoidance Rules (SAAR) PP 55/2022'
    },
    {
      kind: 'table',
      headers: ['No', 'Nama Aturan SAAR', 'Praktik Penghindaran yang Ditangkal', 'Mekanisme Penegakan Fiskus', 'Dasar Regulasi'],
      rows: [
        ['1', 'Controlled Foreign Corporation (CFC) Rules', 'Menunda pembagian dividen pada anak perusahaan di low-tax jurisdiction.', 'DJP menetapkan Deemed Dividend atas penyertaan modal WPDN minimal 50% pada badan luar negeri non-bursa.', 'Pasal 18 (2) UU PPh; Pasal 34 PP 55/2022'],
        ['2', 'Transfer Pricing & Secondary Adjustment', 'Menggeser laba keluar negeri lewat harga transaksi tidak wajar.', 'Koreksi primer ke nilai wajar pasar dan penetapan dividen terselubung atas selisih koreksi.', 'Pasal 18 (3) UU PPh; PMK 172/2023'],
        ['3', 'Special Purpose Vehicle (SPV) Conduit Sale', 'Menjual saham perusahaan perantara luar negeri untuk mengalihkan saham WPDN.', 'Penjualan saham SPV luar negeri dianggap sebagai penjualan langsung atas saham perseroan di Indonesia (look-through).', 'Pasal 18 (3b) UU PPh; Pasal 38 PP 55/2022'],
        ['4', 'Conduit Company Treaty Shopping', 'Penyalahgunaan fasilitas tarif tax treaty via paper company.', 'Menolak fasilitas P3B jika penerima penghasilan luar negeri bukan Beneficial Owner (pemilik manfaat ekonomi sebenarnya).', 'Pasal 18 (3c) UU PPh; Pasal 39 PP 55/2022'],
        ['5', 'Deemed Salary Rules', 'Menyamarkan pembagian dividen ke dalam beban gaji pengurus/pemegang saham.', 'Beban kompensasi yang melebihi batas kewajaran direklasifikasi menjadi dividen non-deductible.', 'Pasal 18 (3d) UU PPh; Pasal 40 PP 55/2022'],
        ['6', 'Benchmarking Rules', 'Melaporkan kerugian terus-menerus tanpa pembenaran komersial rasional.', 'Penetapan kembali penghasilan fiskal berbasis rasio standar profitabilitas industri sejenis.', 'Pasal 18 (3e) UU PPh; Pasal 41 PP 55/2022'],
        ['7', 'Thin Capitalization Rules (DER 4:1)', 'Mengganti setoran ekuitas dengan utang pinjaman pemegang saham berbunga tinggi.', 'Rasio Utang terhadap Modal dibatasi maksimal 4:1. Bunga atas porsi utang yang melampaui rasio 4:1 dilarang dikurangkan (non-deductible).', 'Pasal 18 (1) UU PPh; PMK 169/PMK.010/2015'],
        ['8', 'Anti-Hybrid Mismatch Rules', 'Memanfaatkan perbedaan klasifikasi instrumen utang/modal lintas negara (double deduction).', 'Menolak pengurangan biaya di Indonesia jika beban tersebut juga dikurangkan di yurisdiksi mitra atau tidak dipajaki di mitra.', 'Pasal 32 (2) h UU PPh; Pasal 43 PP 55/2022']
      ],
      caption: 'Tabel 3.3: Delapan instrumen pencegahan penghindaran pajak spesifik (SAAR) di Indonesia.'
    },
    {
      kind: 'h2',
      text: '5. General Anti-Avoidance Rule (GAAR) — Prinsip Substance Over Form'
    },
    {
      kind: 'p',
      text: 'Pasal 32 ayat (4) Peraturan Pemerintah No. 55 Tahun 2022 memperkenalkan instrumen sapu jagat perpajakan (General Anti-Avoidance Rule / GAAR):'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: '⚖️ Prinsip Substance Over Form dalam GAAR Indonesia',
      text: 'Dalam hal suatu transaksi atau skema penghindaran pajak TIDAK DAPAT DICEGAH menggunakan instrumen SAAR (butir 1 s.d. 8 di atas), Direktur Jenderal Pajak berwenang menentukan kembali besarnya pajak yang terutang berdasarkan PRINSIP SUBSTANSI EKONOMI MENGUNGGULI BENTUK FORMALNYA (SUBSTANCE OVER FORM).\n\nFiskus berwenang mengabaikan rekayasa dokumen formal (legal packaging) dan mengenakan pajak sesuai dengan hakikat ekonomi riil yang sebenarnya terjadi.'
    },
    {
      kind: 'h2',
      text: '6. Kesepakatan Harga Transfer (Advance Pricing Agreement - APA)'
    },
    {
      kind: 'p',
      text: 'Kesepakatan Harga Transfer (APA) diatur dalam PMK No. 172 Tahun 2023 Bab VI sebagai instrumen pencegahan sengketa (dispute prevention) transfer pricing:'
    },
    {
      kind: 'ul',
      items: [
        '**Definisi APA**: Perjanjian tertulis antara Direktur Jenderal Pajak dan Wajib Pajak dan/atau otoritas perpajakan negara mitra P3B mengenai kriteria penentuan harga wajar dan metode transfer pricing yang disepakati untuk transaksi afiliasi.',
        '**Jenis APA**: APA Unilateral (hanya mengikat DJP dan Wajib Pajak di Indonesia) atau APA Bilateral/Multilateral (melibatkan DJP, WP, dan otoritas pajak mitra treaty melalui prosedur MAP).',
        '**Jangka Waktu Berlaku**: Kesepakatan APA berlaku untuk masa pajak ke depan paling lama 5 (LIMA) TAHUN PAJAK sejak tahun pajak disepakati.',
        '**Roll-back Mechanism**: Kesepakatan APA dapat diberlakukan mundur (roll-back) ke tahun-tahun pajak sebelumnya sepanjang SPT Tahunan tahun bersangkutan belum dilakukan pemeriksaan pajak dan fakta bisnis masa lalu serupa.',
        '**Laporan Tahunan Kepatuhan**: Wajib Pajak wajib menyerahkan Laporan Tahunan Pelaksanaan Kesepakatan (Annual Compliance Report) bersamaan dengan SPT Tahunan PPh Badan.'
      ]
    },
    {
      kind: 'h2',
      text: '7. Asas Perpajakan Internasional & Perjanjian Penghindaran Pajak Berganda (P3B)'
    },
    {
      kind: 'p',
      text: 'Dalam interaksi ekonomi lintas yurisdiksi, negara-negara menerapkan kombinasi asas pemajakan:'
    },
    {
      kind: 'ul',
      items: [
        '**Asas Domisili (Residence Principle)**: Negara mendasarkan hak pemajakannya pada status kependudukan subjek pajak. Subjek Pajak Dalam Negeri (SPDN) dikenakan pajak atas seluruh penghasilan yang diperoleh dari dalam negeri maupun dari luar negeri (Worldwide Income Principle).',
        '**Asas Sumber (Source Principle)**: Negara mendasarkan hak pemajakannya pada letak sumber ekonomis timbulnya penghasilan. Subjek Pajak Luar Negeri (SPLN) hanya dikenakan pajak atas penghasilan yang bersumber dari wilayah Indonesia (Territorial Principle).',
        '**P3B / Tax Treaty (Pasal 32A UU PPh)**: Perjanjian bilateral internasional untuk mencegah pajak berganda yuridis (juridical double taxation), mengalokasikan hak pemajakan, mencegah penghindaran pajak, dan memfasilitasi pertukaran informasi perpajakan (Exchange of Information / EOI).'
      ]
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Hubungan Istimewa & Anti-Penghindaran Pajak'
    },
    {
      kind: 'formula',
      text: `\\text{Persentase Kepemilikan Bertingkat} = \\%\\ \\text{Saham Entitas Antara} \\times \\%\\ \\text{Saham Entitas Sasaran}
\\text{Kriteria Afiliasi Modal}: \\quad \\%\\ \\text{Kepemilikan Modal (Langsung/Tidak Langsung)} \\ge 25\\%
\\text{Batas Maksimal Utang Thin Cap (PMK 169/2015)} = 4 \\times \\text{Ekuitas Rata-Rata Tertimbang}
\\text{Beban Bunga Boleh Dikurangkan (Deductible)} = \\left( \\frac{\\text{Batas Utang Maksimal (4x Ekuitas)}}{\\text{Total Utang Riil}} \\right) \\times \\text{Total Beban Bunga}
\\text{Koreksi Fiskal Positif Bunga (Non-Deductible)} = \\text{Total Beban Bunga} - \\text{Beban Bunga Deductible}
\\text{Koreksi Primer Penjualan} = (\\text{Volume Transaksi} \\times \\text{Harga Pasar Wajar CUP}) - \\text{Penjualan Afiliasi Tercatat}`,
      note: 'Ambang batas pilar modal hubungan istimewa adalah 25%, sedangkan batas CFC rules adalah 50%. Bunga atas utang yang melampaui rasio 4:1 dilarang dikurangkan dan dapat direklasifikasi sebagai dividen.'
    },
    {
      kind: 'h2',
      text: 'Praktik Terbimbing Komprehensif (3 Kasus Kunci Terverifikasi)'
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 1: Pengujian Hubungan Istimewa Kepemilikan Bertingkat & Kepemilikan Bersama',
      prompt: 'Lakukan pengujian yuridis hubungan istimewa berdasarkan Pasal 18 ayat (4) huruf a UU PPh jo. Pasal 33 PP 55/2022 atas dua skenario berikut:\n- Skenario A: PT Alpha memiliki 50% saham di PT Beta, dan PT Beta memiliki 50% saham di PT Gamma. Apakah terdapat hubungan istimewa antara PT Alpha dan PT Gamma?\n- Skenario B: Tuan Haryo menguasai 30% saham di PT X dan 40% saham di PT Y. Apakah terdapat hubungan istimewa antara PT X dan PT Y?',
      blocks: [
        {
          kind: 'table',
          headers: ['Skenario Entitas', 'Perhitungan Kepemilikan Modal', 'Ambang Batas Yuridis', 'Status Hubungan Istimewa'],
          rows: [
            ['Skenario A: PT Alpha ke PT Gamma', '50% x 50% = 25% (Kepemilikan Tidak Langsung Bertingkat)', 'Minimal 25% (Pasal 18 ayat 4 huruf a)', 'TERBUKTI BERAFILIASI (Hubungan Istimewa Sah)'],
            ['Skenario B: PT X dan PT Y via Tuan Haryo', 'Tuan Haryo memiliki 30% di PT X dan 40% di PT Y (keduanya >= 25%)', 'Pihak yang sama menguasai masing-masing >= 25%', 'TERBUKTI BERAFILIASI (Hubungan Istimewa Sah)']
          ],
          caption: 'Tabel Solusi Kasus 1: Pengujian kepemilikan modal hubungan istimewa bertingkat dan bersama.'
        },
        {
          kind: 'ul',
          items: [
            '**Analisis Skenario A**: Karena persentase kepemilikan efektif PT Alpha pada PT Gamma tepat 25%, maka transaksi penjualan/pembelian barang antar-keduanya tunduk pada kewajiban Prinsip Kewajaran dan Kelaziman Usaha (PKKU).',
            '**Analisis Skenario B**: Dua perseroan yang berada di bawah kepemilikan pengendali yang sama (masing-masing minimal 25%) dianggap memiliki hubungan istimewa horizontal.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 2: Koreksi Transfer Pricing CUP & Dividen Terselubung (Secondary Adjustment)',
      prompt: 'PT Manufaktur Jaya (Indonesia) menjual 10.000 unit produk elektronika ke induk perusahaannya, SingaCorp Ltd (Singapura), dengan harga faktur transfer Rp500.000,00 per unit (Total omzet tercatat Rp5.000.000.000,00). Beban Pokok Penjualan adalah Rp4.000.000.000,00 dan beban operasional adalah Rp500.000.000,00 (Laba bersih komersial Rp500.000.000,00).\nPada periode yang sama, PT Manufaktur Jaya menjual produk identik ke pihak independen di Indonesia (PT Mitra Bebas) dengan harga pasar wajar Rp800.000,00 per unit.\nHitung: (1) Koreksi primer transfer pricing, (2) Penghasilan Kena Pajak dan tambahan PPh Badan terutang (tarif 22%), dan (3) Pemotongan PPh Pasal 26 atas dividen terselubung (tarif tax treaty 10%).',
      blocks: [
        {
          kind: 'table',
          headers: ['Tahapan Rekomputasi Fiskal', 'Formula & Operasi Angka', 'Nilai Rupiah Fiskal', 'Klasifikasi Pajak'],
          rows: [
            ['Penjualan Afiliasi Wajar (CUP)', '10.000 unit x Rp800.000', 'Rp8.000.000.000', 'Peredaran Usaha Wajar'],
            ['Penjualan Afiliasi Tercatat', '10.000 unit x Rp500.000', 'Rp5.000.000.000', 'Faktur Komersial'],
            ['Koreksi Primer Fiskal Positif', 'Rp8.000.000.000 - Rp5.000.000.000', 'Rp3.000.000.000', 'Primary Adjustment Penjualan'],
            ['Laba Usaha Komersial', 'Rp5.000.000.000 - Rp4.000.000.000 - Rp500.000.000', 'Rp500.000.000', 'Laba Sebelum Koreksi'],
            ['Penghasilan Kena Pajak (PKP)', 'Rp500.000.000 + Rp3.000.000.000', 'Rp3.500.000.000', 'Dasar Tarif PPh Badan'],
            ['PPh Badan Terutang (22%)', '22% x Rp3.500.000.000', 'Rp770.000.000', 'Ketetapan Baru'],
            ['Tambahan PPh Badan (SKPKB)', '22% x Rp3.000.000.000 (Koreksi)', 'Rp660.000.000', 'Kurang Bayar PPh Badan'],
            ['Koreksi Sekunder (Dividen Terselubung)', 'Selisih harga tidak disetor kembali', 'Rp3.000.000.000', 'Deemed Constructive Dividend'],
            ['PPh Pasal 26 Terutang (Treaty 10%)', '10% x Rp3.000.000.000', 'Rp300.000.000', 'Withholding Tax Luar Negeri'],
            ['Total Beban Pajak Koreksi', 'Rp660.000.000 + Rp300.000.000', 'Rp960.000.000', 'Total Dampak Pajak Kasus']
          ],
          caption: 'Tabel Solusi Kasus 2: Rekapitulasi koreksi transfer pricing dan dividen terselubung.'
        },
        {
          kind: 'p',
          text: 'Pelajaran Ujian Kritis: Jangan hanya menghitung koreksi PPh Badan (Rp660 Juta). Koreksi transfer pricing yang tidak dikembalikan ke kas perusahaan wajib dipotong PPh 26 dividen terselubung (Rp300 Juta), sehingga total beban pajak riil mencapai Rp960.000.000,00.'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Studi Kasus 3: Rekomputasi Thin Capitalization DER 4:1 (PMK No. 169/PMK.010/2015)',
      prompt: 'PT Finansia Investama memiliki struktur permodalan pada Tahun Pajak 2025:\n- Rata-rata saldo Utang Tertimbang selama 2025 = Rp10.000.000.000,00 (sepuluh miliar rupiah).\n- Rata-rata saldo Ekuitas (Modal) Tertimbang selama 2025 = Rp2.000.000.000,00 (dua miliar rupiah).\n- Beban Bunga Pinjaman tahun 2025 = Rp1.000.000.000,00 (satu miliar rupiah).\nHitung: (1) Rasio DER riil, (2) Batas maksimal utang yang diperkenankan untuk fiskal, (3) Beban bunga yang boleh dikurangkan (deductible), dan (4) Koreksi fiskal positif bunga (non-deductible).',
      blocks: [
        {
          kind: 'table',
          headers: ['Elemen Analisis Modal & Utang', 'Formula & Operasi Perhitungan', 'Hasil Nilai Rupiah / Rasio'],
          rows: [
            ['Rasio DER Riil Perusahaan', 'Rp10.000.000.000 / Rp2.000.000.000', '5:1 (Melampaui Batas Maksimal 4:1)'],
            ['Batas Utang Maksimal Diperkenankan', '4 x Ekuitas = 4 x Rp2.000.000.000', 'Rp8.000.000.000'],
            ['Kelebihan Utang Di Luar Batas (Excess Debt)', 'Rp10.000.000.000 - Rp8.000.000.000', 'Rp2.000.000.000'],
            ['Beban Bunga Boleh Dikurangkan (Deductible)', '(Rp8.000.000.000 / Rp10.000.000.000) x Rp1.000.000.000', 'Rp800.000.000'],
            ['Koreksi Fiskal Positif Bunga (Non-Deductible)', 'Rp1.000.000.000 - Rp800.000.000', 'Rp200.000.000']
          ],
          caption: 'Tabel Solusi Kasus 3: Rekomputasi batasan beban bunga thin capitalization.'
        },
        {
          kind: 'ul',
          items: [
            '**Porsi Bunga**: Bunga sebesar Rp800.000.000,00 tetap dapat menjadi biaya pengurang penghasilan bruto (deductible expense).',
            '**Koreksi Positif**: Bunga sebesar Rp200.000.000,00 dikoreksi fiskal positif menambah laba kena pajak perseroan. Jika pinjaman berasal dari pemegang saham, kelebihan bunga tersebut direklasifikasi sebagai pembagian dividen.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Exam Traps & Pantangan Ujian TM 3'
    },
    {
      kind: 'table',
      headers: ['Trap ID', 'Jebakan Umum Ujian', 'Perlakuan Fiskal yang Benar', 'Rujukan Regulasi'],
      rows: [
        ['ET-001', 'Menyamakan batas ambang kepemilikan saham hubungan istimewa dengan CFC rules.', 'Hubungan istimewa pilar modal mensyaratkan saham minimal 25% (Pasal 18 ayat 4a), sedangkan CFC rules mensyaratkan penyertaan minimal 50% pada badan luar negeri (Pasal 18 ayat 2).', 'UU PPh Pasal 18; PP 55/2022'],
        ['ET-002', 'Menganggap paman, bibi, keponakan, atau sepupu sebagai pihak yang memiliki hubungan istimewa.', 'UU PPh membatasi hubungan istimewa keluarga HANYA SATU DERAJAT lurus dan ke samping. Paman/sepupu adalah 2 atau 3 derajat, sehingga secara yuridis adalah pihak independen non-afiliasi.', 'Pasal 18 (4) huruf c UU PPh'],
        ['ET-003', 'Mengabaikan kewajiban withholding tax atas koreksi sekunder transfer pricing.', 'Koreksi primer transfer pricing yang tidak disetorkan kembali ke kas perseroan diakui sebagai DIVIDEN TERSELUBUNG yang terutang PPh 23 / PPh 26.', 'Pasal 37 PP 55/2022; PMK 172/2023'],
        ['ET-004', 'Mengoreksi seluruh total beban bunga pinjaman ketika rasio DER melebihi 4:1.', 'Hanya beban bunga atas PORSI KELEBIHAN UTANG di atas 4:1 yang dikoreksi fiskal positif; bunga atas utang s.d. rasio 4:1 tetap deductible.', 'PMK 169/PMK.010/2015'],
        ['ET-005', 'Mengasumsikan kesepakatan APA berlaku selamanya tanpa batas waktu.', 'Kesepakatan APA dibatasi maksimal untuk periode 5 (LIMA) TAHUN PAJAK ke depan sejak tahun pajak disepakati.', 'PMK 172/2023 Bab VI']
      ],
      caption: 'Tabel 3.4: Panduan jebakan ujian hubungan istimewa dan anti-penghindaran pajak.'
    },
    {
      kind: 'h2',
      text: 'Pohon Keputusan: Pengujian Hubungan Istimewa & Pemilihan Metode Transfer Pricing'
    },
    {
      kind: 'ul',
      items: [
        '**Pengujian Hubungan Istimewa (Urutan Pengujian)**: Uji 1: Apakah penyertaan saham langsung/tidak langsung >= 25%? Jika YA -> Hubungan Istimewa (Pilar Modal). Jika TIDAK -> Uji 2: Apakah terdapat penguasaan manajemen, teknologi, operasional, atau kendali bisnis? Jika YA -> Hubungan Istimewa (Pilar Penguasaan). Jika TIDAK -> Uji 3: Apakah ada hubungan keluarga sedarah/semenda 1 derajat lurus/ke samping atau suami-istri pisah harta? Jika YA -> Hubungan Istimewa (Pilar Keluarga). Jika TIDAK -> Pihak Independen Bebas.',
        '**Pemilihan Metode Transfer Pricing**: Jika ada transaksi pembanding sejenis yang identik (komoditas/produk standar) -> gunakan CUP. Jika entitas yang diuji adalah distributor murni tanpa nilai tambah -> gunakan RPM. Jika entitas adalah manufaktur kontrak / penyedia jasa rutin -> gunakan CPM. Jika ada kontribusi unik aset tidak berwujud berharga tinggi dari kedua pihak -> gunakan PSM. Default transaksi umum dengan ketersediaan data pembanding margin bersih -> gunakan TNMM.'
      ]
    },
    {
      kind: 'h2',
      text: 'Rangkuman Intisari Ujian TM 3'
    },
    {
      kind: 'ul',
      items: [
        '**Tiga Pilar Hubungan Istimewa**: Modal minimal 25% (langsung/bertingkat), Penguasaan manajemen/teknologi, dan Keluarga satu derajat sedarah/semenda serta suami-istri pisah harta.',
        '**Arm\'s Length Principle (PKKU)**: Wajib diterapkan pada setiap transaksi afiliasi melalui analisis FAR dan pemilihan metode transfer pricing paling sesuai (CUP, RPM, CPM, TNMM, PSM) menurut PMK 172/2023.',
        '**Koreksi Sekunder (Dividen Terselubung)**: Penyesuaian transfer pricing yang tidak disetorkan kembali terutang PPh 23 / PPh 26 sebagai dividen terselubung.',
        '**8 Instrumen SAAR & GAAR**: SAAR menangkal skema khusus (CFC 50%, Thin Cap DER 4:1, SPV, Conduit, Deemed Salary, Benchmarking, Anti-Hybrid). GAAR menerapkan asas substance over form untuk transaksi agresif lainnya.',
        '**Advance Pricing Agreement (APA)**: Berlaku maksimal 5 tahun pajak (Unilateral / Bilateral MAP) untuk memberikan kepastian hukum transfer pricing masa depan.'
      ]
    }
  ]
};
