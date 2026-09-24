import type { Reading } from '../../../types';

const SVG_WITHHOLDING_SYSTEM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="w1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="w2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="w3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="w4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk5)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">ARSITEKTUR SISTEM PEMOTONGAN &amp; PEMUNGUTAN PAJAK PENGHASILAN (WITHHOLDING TAX)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">WITHHOLDING TAX</text>

  <!-- 4 Columns Withholding Taxonomy -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#w1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="97" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">PPH PASAL 21 / 26</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="97" y="53" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle">Objek: Tenaga Kerja &amp; WPLN</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Pemotong: Pemberi kerja / Badan</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Skema: TER bulanan &amp; Tarif Ps 17</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Pegawai tetap, honorarium dokter,</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  tenaga ahli, konsultan lepas</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Ps 26: WNA bukan BUT (20% / P3B)</text>
    <rect class="svg-badge-blue" x="10" y="185" width="175" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Pemotongan atas Tenaga Kerja</text>
  </g>

  <g transform="translate(245, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#w2)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="97" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">PPH PASAL 22</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="97" y="53" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">Objek: Perdagangan &amp; Impor</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Pemungut: DJBC, BUMN, Bendahara</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Impor API (2,5%) / Non-API (7,5%)</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Belanja Pemerintah: 1,5%</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Industri semen, kertas, baja, oto</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">• Regulasi: PMK 51/2025</text>
    <rect class="svg-badge-green" x="10" y="185" width="175" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Pemungutan Transaksi Komoditas</text>
  </g>

  <g transform="translate(455, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#w3)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="97" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">PPH PASAL 23</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="53" fill="#fbbf24" font-size="8" font-weight="800" text-anchor="middle">Objek: Jasa, Modal, &amp; Royalti</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Tarif 2%: Jasa teknik, manajemen,</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  konsultan, sewa harta (non-tanah)</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Tarif 15%: Bunga pinjaman, royalti,</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  hadiah undian badan usaha</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">• Dividen Badan DN: Non-Objek</text>
    <rect class="svg-badge-amber" x="10" y="185" width="175" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Pemotongan Penghasilan Modal/Jasa</text>
  </g>

  <g transform="translate(665, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#w4)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="97" y="20" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">PPH FINAL &amp; UMKM</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="97" y="53" fill="#a78bfa" font-size="8" font-weight="800" text-anchor="middle">Objek: Pasal 4(2) &amp; PP 20/2026</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Sewa Tanah/Bangunan: 10%</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Pengalihan Tanah/Bangunan: 2,5%</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• UMKM OP: 0,5% tanpa batas waktu</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Bebas omzet s.d. Rp500 Juta/thn</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">• Konstruksi: 1,75% s.d. 4% (PP 9/2022)</text>
    <rect class="svg-badge-purple" x="10" y="185" width="175" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="97" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Pajak Rampung Seketika</text>
  </g>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Pemungutan PPh Pasal 22, Pemotongan PPh Pasal 23/26, Pemungut Marketplace, dan Skema PPh Final UMKM',
  ref: 'UU No. 7/2021 (UU HPP) · PMK No. 81/2024 s.t.d.t.d. PMK 54/2025 · PMK No. 51/2025 · PMK No. 37/2025 · PP No. 20/2026',
  intro: 'Membahas arsitektur withholding tax dalam pelunasan pajak tahun berjalan: pemungutan PPh Pasal 22 (impor, bendahara, industri tertentu, migas, tambang, marketplace), pemotongan PPh Pasal 23 atas modal dan jasa, PPh Pasal 26 atas Wajib Pajak Luar Negeri, serta skema PPh Final UMKM 0,5% tanpa batas waktu bagi Wajib Pajak Orang Pribadi berdasarkan PP 20/2026.',
  objectives: [
    'Membedakan konsep yuridis pemungutan (PPh Pasal 22) versus pemotongan (PPh Pasal 23 dan Pasal 26).',
    'Menghitung PPh Pasal 22 atas impor barang (API vs Non-API), ekspor tambang, belanja pemerintah, dan sektor industri/migas berdasarkan PMK 51/2025.',
    'Menganalisis ketentuan pemungut marketplace PMK 37/2025 dan status penundaan administratifnya.',
    'Menghitung PPh Pasal 23 atas dividen, bunga, royalti, hadiah, sewa harta, dan jasa teknik/manajemen/konsultan serta PPh Pasal 26 WPLN.',
    'Menerapkan skema PPh Final UMKM 0,5% PP 20/2026 dengan fasilitas pembebasan omzet Rp500.000.000 per tahun bagi Wajib Pajak Orang Pribadi.',
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 5.1: Arsitektur Taksonomi Sistem Pemotongan dan Pemungutan PPh (Withholding Tax).',
      svg: SVG_WITHHOLDING_SYSTEM,
    },
    {
      kind: 'h2',
      text: '1. Arsitektur Sistem Withholding Tax: Dipungut vs Dipotong',
    },
    {
      kind: 'p',
      text: 'Dalam sistem perpajakan Indonesia, mekanisme pelunasan pajak dalam tahun berjalan (withholding tax system) dirancang untuk menjaga likuiditas penerimaan kas negara serta mempermudah pengawasan kepatuhan Wajib Pajak. Terdapat perbedaan yuridis mendasar antara istilah dipungut dan dipotong:',
    },
    {
      kind: 'ul',
      items: [
        '**Dipungut (PPh Pasal 22):** Dikenakan atas transaksi penyerahan barang di mana pihak pembeli (bendahara pemerintah / BUMN) memungut pajak saat membayar, atau produsen/importir memungut pajak dari pembeli saat menyerahkan barang, atau DJBC memungut saat arus barang impor/ekspor.',
        '**Dipotong (PPh Pasal 23 & 26):** Dikenakan oleh pihak yang membayarkan penghasilan atas modal, penyerahan jasa, atau hadiah kepada penerima penghasilan (mengurangi jumlah kas yang dibayarkan ke rekanan).',
      ],
    },
    {
      kind: 'h2',
      text: '2. PPh Pasal 22: Posisi Slide Dosen vs Regulasi Positif Terkini',
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Dua Posisi - Dasar Regulasi PPh Pasal 22',
      text: 'Pada materi perkuliahan dan soal UTS berbasis RPS, dosen sering kali masih merujuk regulasi lama: PMK No. 34/PMK.010/2017 jo. PMK No. 110/PMK.010/2018 jo. PMK No. 41/PMK.010/2022. Namun secara hukum positif, seluruh PMK tersebut telah resmi DICABUT berdasarkan Pasal 483 angka 22 PMK No. 81 Tahun 2024. Selanjutnya, ketentuan pemungutan PPh 22 diundangkan kembali secara mandiri melalui PMK No. 51 Tahun 2025 yang berlaku efektif sejak 1 Agustus 2025 (setelah Pasal 217 s.d. 225 PMK 81/2024 dihapus oleh PMK 54/2025). Tarif dan objek materiil keduanya sebagian besar identik, kecuali penambahan pemungut Lembaga Jasa Keuangan (LJK) kegiatan usaha bulion emas pada PMK 51/2025.',
    },
    {
      kind: 'table',
      caption: 'Tabel 5.1: Matriks Pemungut, Objek, Dasar Pengenaan Pajak (DPP), dan Tarif PPh Pasal 22',
      headers: ['No', 'Subjek Pemungut', 'Objek Transaksi', 'Dasar Pengenaan Pajak (DPP)', 'Tarif', 'Sifat', 'Pengecualian / Batas Nilai'],
      rows: [
        ['1', 'Bank Devisa & DJBC', 'Impor Barang Tertentu (Lampiran I PMK 51/2025)', 'Nilai Impor (CIF + Bea Masuk)', '10%', 'Tidak Final', 'Dilengkapi SKB jika bebas bea masuk.'],
        ['2', 'Bank Devisa & DJBC', 'Impor Barang Tertentu Lainnya (Lampiran II PMK 51/2025)', 'Nilai Impor (CIF + Bea Masuk)', '7,5%', 'Tidak Final', 'Daftar barang lampiran regulasi.'],
        ['3', 'Bank Devisa & DJBC', 'Impor Barang Umum dengan API (Angka Pengenal Importir)', 'Nilai Impor (CIF + Bea Masuk)', '2,5%', 'Tidak Final', 'Importir resmi beridentitas API.'],
        ['4', 'Bank Devisa & DJBC', 'Impor Kedelai, Gandum, dan Tepung Terigu dengan API', 'Nilai Impor (CIF + Bea Masuk)', '0,5%', 'Tidak Final', 'Komoditas pangan pokok strategis.'],
        ['5', 'Bank Devisa & DJBC', 'Impor Barang Umum Non-API', 'Nilai Impor (CIF + Bea Masuk)', '7,5%', 'Tidak Final', 'Importir tanpa izin API.'],
        ['6', 'DJBC / Kantor Lelang', 'Penjualan Barang Impor yang Tidak Dikuasai (Lelang)', 'Harga Jual Lelang', '7,5%', 'Tidak Final', 'Barang sitaan kepabeanan.'],
        ['7', 'Bank Devisa & DJBC', 'Ekspor Batubara, Mineral Logam, dan Mineral Bukan Logam', 'Nilai Ekspor FOB pada PEB', '1,5%', 'Tidak Final', 'Dikecualikan eksportir berkontrak khusus.'],
        ['8', 'Bendahara Pemerintah (KPA/PPK/UP)', 'Belanja Barang oleh Instansi Pemerintah', 'Harga Pembelian (non-PPN)', '1,5%', 'Tidak Final', 'Bebas jika belanja s.d. Rp2.000.000 (tidak dipecah).'],
        ['9', 'BUMN & Anak BUMN Tertentu', 'Pembelian Barang / Bahan Kebutuhan Operasional', 'Harga Pembelian (non-PPN)', '1,5%', 'Tidak Final', 'Bebas jika belanja s.d. Rp10.000.000 (tidak dipecah).'],
        ['10', 'Badan Usaha Industri Semen', 'Penjualan Semen di Dalam Negeri', 'DPP PPN (Harga Jual)', '0,25%', 'Tidak Final', 'Penjualan kepada distributor.'],
        ['11', 'Badan Usaha Industri Kertas', 'Penjualan Kertas di Dalam Negeri', 'DPP PPN (Harga Jual)', '0,1%', 'Tidak Final', 'Penjualan kepada distributor.'],
        ['12', 'Badan Usaha Industri Baja', 'Penjualan Baja di Dalam Negeri', 'DPP PPN (Harga Jual)', '0,3%', 'Tidak Final', 'Penjualan kepada distributor.'],
        ['13', 'Badan Usaha Industri Otomotif', 'Penjualan Kendaraan Bermotor Roda 4 atau Lebih', 'DPP PPN (Harga Jual)', '0,45%', 'Tidak Final', 'Penjualan kepada dealer/distributor.'],
        ['14', 'Badan Usaha Industri Farmasi', 'Penjualan Obat-Obatan di Dalam Negeri', 'DPP PPN (Harga Jual)', '0,3%', 'Tidak Final', 'Penjualan kepada distributor.'],
        ['15', 'Produsen / Importir BBM & Gas', 'Penjualan BBM ke SPBU Swasta Non-Pertamina', 'Nilai Penjualan (non-PPN)', '0,25%', 'FINAL', 'Membebaskan SPT Tahunan atas laba BBM agen.'],
        ['16', 'Produsen / Importir BBM & Gas', 'Penjualan BBM ke Pabrik / Industri Manufaktur', 'Nilai Penjualan (non-PPN)', '0,3%', 'Tidak Final', 'Dapat dikreditkan di SPT Tahunan pembeli.'],
        ['17', 'Produsen / Importir BBM & Gas', 'Penjualan Pelumas', 'Nilai Penjualan (non-PPN)', '0,3%', 'Tidak Final', 'Berlaku bagi seluruh segmen pembeli.'],
        ['18', 'Industri Pengolah Hasil Alam', 'Pembelian Bahan Hasil Perkebunan, Pertanian, Perikanan', 'Harga Pembelian (non-PPN)', '0,25%', 'Tidak Final', 'Dibeli dari pedagang pengumpul.'],
        ['19', 'Badan Usaha Pembeli Tambang', 'Pembelian Batubara dan Mineral dari Pemegang IUP', 'Harga Pembelian (non-PPN)', '1,5%', 'Tidak Final', 'Dibeli dari pemilik izin tambang.'],
        ['20', 'Penyelenggara PMSE Terdaftar', 'Transaksi Penjualan Aset Kripto (PMK 68/2022)', 'Nilai Transaksi Kripto', '0,1%', 'FINAL', 'Jika exchange tidak terdaftar: tarif 0,2%.'],
        ['21', 'Mitra Pengadaan SIPLah / LPSE', 'Pembelian Barang Pengadaan Sekolah Elektronik', 'Harga Belanja (non-PPN)', '0,5%', 'Tidak Final', 'PMK 58/2022 jo. PMK 81/2024.'],
        ['22', 'Penjual WP Badan', 'Penjualan Barang Sangat Mewah (Supercar, Rumah Mewah)', 'Harga Jual (non-PPN/PPnBM)', '5%', 'Tidak Final', 'Mobil > Rp2 Miliar / cc > 3.000; Rumah > Rp30 Miliar.'],
      ],
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Ketentuan Sanksi Wajib Pajak Tanpa NPWP',
      text: 'Berdasarkan Pasal 22 ayat (3) UU PPh jo. PMK No. 51 Tahun 2025, bagi rekanan atau penerima penghasilan yang tidak memiliki NPWP (atau NIK yang belum tervalidasi sebagai NPWP), tarif pemungutan PPh Pasal 22 dikenakan tarif 100% lebih tinggi (menjadi 2 kali lipat tarif normal). Contoh: tarif belanja pemerintah 1,5% melonjak menjadi 3%.',
    },
    {
      kind: 'h2',
      text: '3. Pemungutan PPh Pasal 22 Marketplace (PMK 37/2025) & Status Penundaan',
    },
    {
      kind: 'p',
      text: 'Pemerintah menerbitkan PMK No. 37 Tahun 2025 yang menunjuk Penyelenggara Sistem Elektronik (Marketplace / E-commerce Platform) sebagai Pemungut PPh Pasal 22 atas penjualan barang oleh pedagang (merchant) di platform mereka:',
    },
    {
      kind: 'ul',
      items: [
        '**Dasar Pemungutan:** Peredaran bruto (omzet) penjualan barang oleh merchant.',
        '**Tarif Pemungutan:** 0,5% (setara dengan tarif PPh Final UMKM).',
        '**Fasilitas Pembebasan Omzet WP Orang Pribadi:** Merchant Orang Pribadi dengan omzet kumulatif tahun berjalan belum melebihi Rp500.000.000 dikecualikan dari pemungutan, dengan syarat menyampaikan Surat Pernyataan Omzet kepada platform marketplace.',
        '**Klausul Keberlakuan Formal:** Pasal 18 PMK 37/2025 menetapkan regulasi berlaku pada tanggal diundangkan, yaitu 14 Juli 2025.',
      ],
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Catatan Rujukan - Penundaan Administratif PMK 37/2025',
      text: 'Berdasarkan pengumuman resmi Direktorat Jenderal Pajak (DJP), penunjukan dan implementasi teknis pemungutan oleh marketplace ditunda sampai dengan 31 Oktober 2026 dan baru mulai berlaku efektif per 1 November 2026 guna memberikan waktu kesiapan integrasi sistem TI platform e-commerce.',
    },
    {
      kind: 'h2',
      text: '4. Pemotongan PPh Pasal 23 dan PPh Pasal 26',
    },
    {
      kind: 'p',
      text: 'PPh Pasal 23 dikenakan atas penghasilan modal, penyerahan jasa, dan hadiah yang dibayarkan kepada Wajib Pajak Dalam Negeri atau Bentuk Usaha Tetap (BUT):',
    },
    {
      kind: 'table',
      caption: 'Tabel 5.2: Matriks Objek, Tarif, dan Dasar Pemotongan PPh Pasal 23',
      headers: ['Jenis Penghasilan', 'Tarif', 'Dasar Pemotongan', 'Ketentuan Khusus & Pembebasan'],
      rows: [
        ['Dividen', '0% / 10% / 15%', 'Jumlah Bruto', 'Badan DN: BUKAN OBJEK (Pasal 4 ayat 3 huruf f UU PPh). Orang Pribadi DN: PPh Final 10% (bebas jika reinvestasi di NKRI min 3 tahun). Non-kualifikasi dipotong 15%.'],
        ['Bunga (Pinjaman selain Bank)', '15%', 'Jumlah Bruto', 'Bunga pinjaman antar-perusahaan, bunga obligasi non-bursa, dan diskonto pinjaman.'],
        ['Royalti', '15%', 'Jumlah Bruto', 'Imbalan atas penggunaan hak cipta, paten, merek dagang, formula, atau lisensi teknologi.'],
        ['Hadiah, Penghargaan, Bonus', '15%', 'Jumlah Bruto', 'Hadiah perlombaan atau penghargaan kepada badan usaha (selain yang dipotong PPh 21).'],
        ['Sewa Harta (selain Tanah/Bangunan)', '2%', 'Jumlah Bruto', 'Sewa kendaraan, mesin pabrik, alat berat, dan peralatan kantor. (Sewa tanah/bangunan objek PPh Final 4(2) 10%).'],
        ['Jasa Teknik, Manajemen, Konsultan, & Jasa Lain', '2%', 'Jumlah Bruto (non-PPN & non-material)', 'Diatur dalam PMK 141/2015 mencakup 62 jenis jasa lain (jasa katering, kebersihan, keamanan, akuntansi, hukum, TI).'],
      ],
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Sanksi Rekanan Tanpa NPWP dalam PPh Pasal 23',
      text: 'Rekanan penerima penghasilan PPh 23 yang tidak ber-NPWP dikenakan tarif pemotongan 100% lebih tinggi: tarif 15% melonjak menjadi 30%, dan tarif 2% melonjak menjadi 4%.',
    },
    {
      kind: 'p',
      text: 'Sementara itu, PPh Pasal 26 mengatur pemotongan atas penghasilan bersumber dari Indonesia yang dibayarkan kepada Wajib Pajak Luar Negeri (WPLN non-BUT):',
    },
    {
      kind: 'ul',
      items: [
        '**Tarif Domestik:** 20% bersifat FINAL dari jumlah bruto penghasilan.',
        '**Penerapan Tax Treaty (P3B):** Jika negara domisili WPLN memiliki Perjanjian Penghindaran Pajak Berganda dengan Indonesia, berlaku tarif treaty yang lebih rendah (misalnya 10%, 7,5%, atau 0%), dengan syarat mutlak WPLN melampirkan Surat Keterangan Domisili (Form DGT) yang sah dan tervalidasi di sistem DJP.',
      ],
    },
    {
      kind: 'h2',
      text: '5. Skema PPh Final UMKM 0,5% PP 20/2026 (Perubahan PP 55/2022)',
    },
    {
      kind: 'p',
      text: 'Wajib Pajak tertentu dengan peredaran bruto tidak melebihi Rp4.800.000.000 dalam satu Tahun Pajak berhak menggunakan skema PPh Final UMKM 0,5%:',
    },
    {
      kind: 'ul',
      items: [
        '**Penghapusan Batas Waktu WP Orang Pribadi:** Berdasarkan PP No. 20 Tahun 2026, ketentuan Pasal 59 PP 55/2022 yang sebelumnya membatasi skema UMKM maksimal 7 tahun bagi Orang Pribadi resmi DIHAPUS. Wajib Pajak Orang Pribadi dapat memanfaatkan tarif 0,5% seterusnya tanpa batas waktu sepanjang omzet tahunannya tidak melebihi Rp4.800.000.000.',
        '**Fasilitas Pembebasan Omzet Rp500.000.000 per Tahun:** Khusus bagi WP Orang Pribadi, omzet kumulatif sampai dengan Rp500.000.000 dalam satu Tahun Pajak tidak dikenai PPh. Tarif 0,5% baru dipungut/disetor pada bulan di mana omzet kumulatif telah melampaui Rp500.000.000.',
        '**Subjek yang Berhak (Pasal 57 PP 20/2026):** Wajib Pajak Orang Pribadi, Perseroan Perorangan yang didirikan oleh 1 orang, dan Koperasi (diberikan jangka waktu maksimal 4 Tahun Pajak).',
        '**Ketentuan Peralihan Badan Usaha Lain:** Bagi CV, Firma, dan PT konvensional terdaftar sebelum berlakunya PP 20/2026, tetap dapat memanfaatkan tarif 0,5% hingga sisa jangka waktu PP 55/2022 berakhir (PT maksimal 3 tahun, CV/Firma maksimal 4 tahun).',
      ],
    },
    {
      kind: 'h2',
      text: '6. Kumpulan Kasus Komprehensif (Worked Practice Cases)',
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 1: Impor Biji Plastik ber-API (PT Dynaplast)',
      prompt: 'PT Dynaplast (importir ber-API) mengimpor biji plastik dari Korea Selatan dengan CIF US$ 1.200, Bea Masuk 10%, dan kurs KMK Rp14.500 per US$ 1. Hitung PPh Pasal 22 terutang beserta sifat pemungutannya!',
      blocks: [
        { kind: 'formula', text: '\\text{CIF}=\\text{US\\$ }1.200,\\quad \\text{Bea Masuk}=10\\% \\times \\text{US\\$ }1.200=\\text{US\\$ }120' },
        { kind: 'formula', text: '\\text{Nilai Impor (US\\$)}=\\text{US\\$ }1.200+\\text{US\\$ }120=\\text{US\\$ }1.320' },
        { kind: 'formula', text: '\\text{DPP Nilai Impor (Rp)}=\\text{US\\$ }1.320 \\times \\text{Rp}14.500=\\text{Rp}19.140.000' },
        { kind: 'formula', text: '\\text{PPh Pasal 22 Dipungut}=2{,}5\\% \\times \\text{Rp}19.140.000=\\text{Rp}478.500' },
        { kind: 'p', text: 'Sifat Pemungutan: **TIDAK FINAL** (dapat dikreditkan pada SPT Tahunan PPh Badan PT Dynaplast).' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 2: Ekspor Batubara (PT Kaltim Prima Coal)',
      prompt: 'PT Kaltim Prima Coal mengekspor batubara ke Tiongkok dengan nilai Free on Board (FOB) pada PEB sebesar Rp200.000.000. Berapakah PPh Pasal 22 yang dipungut oleh DJBC?',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 22 Ekspor Tambang}=1{,}5\\% \\times \\text{Rp}200.000.000=\\text{Rp}3.000.000' },
        { kind: 'p', text: 'Dasar Hukum: Pasal 218 ayat (1) huruf b PMK 81/2024 jo. PMK 51/2025. Sifat: Tidak Final.' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 3: Belanja Komputer oleh Bendahara Pemerintah',
      prompt: 'Dinas Kominfo Pemkot Semarang membeli 10 unit komputer kantor seharga Rp5.000.000 per unit (belum termasuk PPN) dari CV Media Mandiri (ber-NPWP). Tentukan apakah terutang PPh 22 dan hitung nilainya!',
      blocks: [
        { kind: 'formula', text: '\\text{Total Harga Belanja}=10 \\times \\text{Rp}5.000.000=\\text{Rp}50.000.000' },
        { kind: 'p', text: 'Analisis Ambang Batas: Nilai transaksi Rp50.000.000 berada di atas batas pembebasan belanja pemerintah Rp2.000.000, sehingga wajib dipungut PPh Pasal 22.' },
        { kind: 'formula', text: '\\text{PPh Pasal 22 Dipungut}=1{,}5\\% \\times \\text{Rp}50.000.000=\\text{Rp}750.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 4: Penjualan BBM Industri vs SPBU Swasta (PT Pertamina Patra Niaga)',
      prompt: 'PT Pertamina Patra Niaga menjual solar Rp400.000.000 kepada pabrik PT Bahtera Abadi, dan bensin Rp500.000.000 kepada SPBU Swasta Non-Pertamina (keduanya belum termasuk PPN). Hitung PPh 22 masing-masing transaksi dan jelaskan sifatnya!',
      blocks: [
        { kind: 'p', text: '**1. Penjualan Solar ke PT Bahtera Abadi (Pabrik / Manufaktur):**' },
        { kind: 'formula', text: '\\text{PPh Pasal 22}=0{,}3\\% \\times \\text{Rp}400.000.000=\\text{Rp}1.200.000' },
        { kind: 'p', text: 'Sifat: **TIDAK FINAL** (dapat diperhitungkan sebagai kredit pajak di SPT Tahunan PT Bahtera Abadi).' },
        { kind: 'p', text: '**2. Penjualan Bensin ke SPBU Swasta Non-Pertamina (Penyalur / Agen):**' },
        { kind: 'formula', text: '\\text{PPh Pasal 22}=0{,}25\\% \\times \\text{Rp}500.000.000=\\text{Rp}1.250.000' },
        { kind: 'p', text: 'Sifat: **FINAL** (pajak rampung seketika; laba penjualan BBM SPBU swasta tidak dihitung pajaknya lagi di akhir tahun).' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 5: Penjualan Baja Domestik (PT Krakatau Steel Tbk)',
      prompt: 'PT Krakatau Steel Tbk menjual lembaran baja kepada distributor PT Mega Bangunan senilai Rp120.000.000 (DPP PPN). Hitung PPh Pasal 22 yang wajib dipungut!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 22 Industri Baja}=0{,}3\\% \\times \\text{Rp}120.000.000=\\text{Rp}360.000' },
        { kind: 'p', text: 'Dasar Pengenaan Pajak adalah DPP PPN (harga jual). Sifat pemungutan: Tidak Final.' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 6: Pembelian Hasil Laut oleh Eksportir (PT Mina Bahari)',
      prompt: 'PT Mina Bahari Nusantara (industri pengolahan & eksportir ikan) membeli tuna segar dari Tuan Sastro (pedagang pengumpul) senilai Rp80.000.000. Hitung PPh 22 terutang!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 22 Komoditas Perikanan}=0{,}25\\% \\times \\text{Rp}80.000.000=\\text{Rp}200.000' },
        { kind: 'p', text: 'Pemungutan dikenakan kepada pedagang pengumpul hasil perikanan/pertanian/kehutanan. Sifat: Tidak Final.' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 7: Penjualan Barang Sangat Mewah (Supercar)',
      prompt: 'PT Sumber Mobil Mewah menjual 1 unit Ferrari 4.000 cc seharga Rp7.000.000.000 (sebelum PPN dan PPnBM). Hitung PPh Pasal 22 barang sangat mewah!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 22 Barang Sangat Mewah}=5\\% \\times \\text{Rp}7.000.000.000=\\text{Rp}350.000.000' },
        { kind: 'p', text: 'Kriteria: kapasitas mesin > 3.000 cc atau harga jual mobil > Rp2 Miliar dikenakan tarif pemungutan 5%.' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 8: Transaksi Pembelian Aset Kripto (PMK 68/2022)',
      prompt: 'Nona Felicia membeli 0,7 unit Bitcoin seharga Rp350.000.000 di exchange terdaftar Bappebti. Hitung PPh Pasal 22 dan PPN yang dipungut platform!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 22 Final}=0{,}1\\% \\times \\text{Rp}350.000.000=\\text{Rp}350.000' },
        { kind: 'formula', text: '\\text{PPN}=0{,}11\\% \\times \\text{Rp}350.000.000=\\text{Rp}385.000' },
        { kind: 'formula', text: '\\text{Total Pungutan Pajak}=\\text{Rp}350.000+\\text{Rp}385.000=\\text{Rp}735.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 9: Belanja Sekolah via SIPLah (PMK 58/2022)',
      prompt: 'SMP Negeri 1 membeli buku pelajaran dan ATK senilai Rp5.000.000 (tidak termasuk PPN) via platform SIPLah. Hitung PPh 22 yang dipungut mitra!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh Pasal 22 SIPLah}=0{,}5\\% \\times \\text{Rp}5.000.000=\\text{Rp}25.000' },
        { kind: 'p', text: 'Tarif PPh Pasal 22 pengadaan barang melalui sistem pengadaan sekolah elektronik (SIPLah) adalah 0,5%.' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 10: Pemotongan PPh Pasal 23 Multi-Transaksi (PT Dynaplast)',
      prompt: 'PT Dynaplast membayar bunga pinjaman Rp20.000.000 ke PT Mitra Finansial (non-bank), royalti paten Rp100.000.000 ke PT Polimer Inovasi, dan hadiah undian operasional Rp200.000.000 ke CV Sukses Abadi (semua ber-NPWP). Hitung total PPh 23!',
      blocks: [
        { kind: 'formula', text: '\\text{PPh 23 Bunga}=15\\% \\times \\text{Rp}20.000.000=\\text{Rp}3.000.000' },
        { kind: 'formula', text: '\\text{PPh 23 Royalti}=15\\% \\times \\text{Rp}100.000.000=\\text{Rp}15.000.000' },
        { kind: 'formula', text: '\\text{PPh 23 Hadiah Undian}=15\\% \\times \\text{Rp}200.000.000=\\text{Rp}30.000.000' },
        { kind: 'formula', text: '\\text{Total PPh 23}=\\text{Rp}3.000.000+\\text{Rp}15.000.000+\\text{Rp}30.000.000=\\text{Rp}48.000.000' },
      ],
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 11: Skema PPh UMKM PP 20/2026 Pedagang Online (Tuan Bambang)',
      prompt: 'Tuan Bambang (pedagang pakaian online di Tokopedia) mencatatkan riwayat omzet: Jan-Mei akumulasi Rp400.000.000, Juni omzet Rp150.000.000 (total Rp550.000.000), Juli-Desember omzet Rp100.000.000 per bulan. Hitung PPh Final UMKM Tuan Bambang sesuai PP 20/2026!',
      blocks: [
        { kind: 'p', text: '**1. Periode Januari s.d. Mei (Omzet Akumulasi Rp400.000.000):**' },
        { kind: 'p', text: 'Karena omzet belum melampaui batas pembebasan Rp500.000.000, PPh terutang = **Rp0 (Nihil)**.' },
        { kind: 'p', text: '**2. Bulan Juni (Omzet Bulanan Rp150.000.000, Akumulasi Rp550.000.000):**' },
        { kind: 'formula', text: '\\text{Omzet Kena Pajak Juni}=\\text{Rp}550.000.000-\\text{Rp}500.000.000=\\text{Rp}50.000.000' },
        { kind: 'formula', text: '\\text{PPh Final Bulan Juni}=0{,}5\\% \\times \\text{Rp}50.000.000=\\text{Rp}250.000' },
        { kind: 'p', text: '**3. Bulan Juli s.d. Desember (Omzet Rp100.000.000 per bulan):**' },
        { kind: 'formula', text: '\\text{PPh Final Bulanan}=0{,}5\\% \\times \\text{Rp}100.000.000=\\text{Rp}500.000' },
        { kind: 'p', text: 'Catatan Regulasi: Sesuai PP 20/2026, Tuan Bambang tidak lagi dibatasi masa berlaku 7 tahun dan dapat terus menggunakan tarif 0,5% selama omzetnya tidak melampaui Rp4.800.000.000 dalam setahun.' },
      ],
    },
    {
      kind: 'h2',
      text: '7. Exam Toolkit: Pohon Keputusan & 5 Jebakan Klasik Ujian UTS',
    },
    {
      kind: 'ul',
      items: [
        '**Pohon Keputusan Belanja Pemerintah vs BUMN:** Belanja oleh Instansi Pemerintah dibebaskan jika nilai transaksi s.d. Rp2.000.000; jika di atas Rp2.000.000 dipungut 1,5%. Belanja oleh BUMN dibebaskan jika nilai transaksi s.d. Rp10.000.000; jika di atas Rp10.000.000 dipungut 1,5%.',
        '**Jebakan Sifat PPh 22 BBM:** Penjualan BBM ke industri manufaktur bertarif 0,3% dan TIDAK FINAL (dapat dikreditkan). Sifat FINAL (tarif 0,25%) hanya berlaku untuk penjualan ke SPBU swasta / agen penyalur.',
        '**Jebakan Dividen Badan DN:** Dividen yang dibagikan kepada Wajib Pajak Badan Dalam Negeri BUKAN OBJEK PAJAK (Pasal 4 ayat 3 huruf f UU PPh), sehingga TIDAK DIPOTONG PPh 23 berapapun persentase kepemilikannya.',
        '**Jebakan PPh 23 Sewa Harta:** Sewa tanah dan/atau bangunan objek PPh Final Pasal 4 ayat (2) tarif 10%. Sewa harta bergerak (kendaraan, mesin, komputer) objek PPh Pasal 23 tarif 2%.',
        '**Jebakan Batas Belanja Tepat Rp2.000.000:** Pembelian barang oleh instansi pemerintah dengan nilai faktur tepat Rp2.000.000 (tidak dipecah) dibebaskan dari pemungutan PPh 22. Pemungutan baru berlaku jika nilai belanja di atas Rp2.000.000.',
      ],
    },
  ],
};
