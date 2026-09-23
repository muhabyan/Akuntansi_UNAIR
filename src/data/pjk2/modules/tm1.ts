import type { Reading } from '../../../types';

const SVG_PPH_GENERAL_OP = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="gBlue1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="gGreen1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="gAmber1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk1)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">ARSITEKTUR KETENTUAN UMUM PPH &amp; PPH WAJIB PAJAK ORANG PRIBADI</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TM01 PPH UMUM</text>

  <!-- Card 1: Konsep & Subjek/Objek -->
  <g transform="translate(30, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="12" fill="url(#gBlue1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. KONSEP &amp; ASAS PEMAJAKAN</text>
    
    <rect class="svg-subcard" x="12" y="38" width="241" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="53" fill="#38bdf8" font-size="7.5" font-weight="800" text-anchor="middle">Teori SHS &amp; Asas Worldwide Income</text>
    
    <text class="svg-text" x="12" y="78" fill="#cbd5e1" font-size="7.5">• Konsep SHS: Income = Konsumsi + &Delta;Wealth</text>
    <text class="svg-text" x="12" y="93" fill="#cbd5e1" font-size="7.5">• SPDN (Worldwide) vs SPLN (Sumber RI)</text>
    <text class="svg-text" x="12" y="108" fill="#cbd5e1" font-size="7.5">• Objek Reguler: 19 kelompok Pasal 4(1)</text>
    <text class="svg-text" x="12" y="123" fill="#cbd5e1" font-size="7.5">• Objek Final: Pasal 4(2) rampung seketika</text>
    <text class="svg-text" x="12" y="138" fill="#cbd5e1" font-size="7.5">• Bukan Objek: Bantuan, warisan, dividen OP</text>
    <text class="svg-text" x="12" y="153" fill="#cbd5e1" font-size="7.5">  (reinvestasi 3 th), laba CV modal tak terbagi</text>

    <rect class="svg-badge-blue" x="12" y="185" width="241" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Pondasi Pemajakan Penghasilan</text>
  </g>

  <!-- Card 2: Biaya 3M vs Rezim Natura -->
  <g transform="translate(315, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="12" fill="url(#gGreen1)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">2. BIAYA 3M &amp; REZIM NATURA</text>
    
    <rect class="svg-subcard" x="12" y="38" width="241" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="53" fill="#34d399" font-size="7.5" font-weight="800" text-anchor="middle">Pasal 6, 9 &amp; PMK 66/2023</text>
    
    <text class="svg-text" x="12" y="78" fill="#cbd5e1" font-size="7.5">• Deductible: 3M, natura huruf n, sumbangan 5%</text>
    <text class="svg-text" x="12" y="93" fill="#cbd5e1" font-size="7.5">• Non-Deductible: Dividen, premi pribadi, suap</text>
    <text class="svg-text" x="12" y="108" fill="#cbd5e1" font-size="7.5">• Rezim Baru: Deductible bagi WP &amp; Taxable OP</text>
    <text class="svg-text" x="12" y="123" fill="#cbd5e1" font-size="7.5">• Bingkisan hari raya: Bebas penuh tanpa batas</text>
    <text class="svg-text" x="12" y="138" fill="#cbd5e1" font-size="7.5">• Bingkisan non-raya &le; 3 Jt/th, olahraga &le; 1,5 Jt</text>
    <text class="svg-text" x="12" y="153" fill="#cbd5e1" font-size="7.5">• Kendaraan dinas: non-pemegang saham &le; 100 Jt</text>

    <rect class="svg-badge-green" x="12" y="185" width="241" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Matching Cost &amp; Fringe Benefits</text>
  </g>

  <!-- Card 3: Penghitungan PPh OP & UMKM -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="12" fill="url(#gAmber1)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="132" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">3. PPH OP &amp; UMKM PP 20/2026</text>
    
    <rect class="svg-subcard" x="12" y="38" width="241" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="132" y="53" fill="#fbbf24" font-size="7.5" font-weight="800" text-anchor="middle">Pasal 17 UU HPP &amp; PP 20/2026</text>
    
    <text class="svg-text" x="12" y="78" fill="#cbd5e1" font-size="7.5">• Zakat PMK 114/2025: Dilarang picu rugi fiskal</text>
    <text class="svg-text" x="12" y="93" fill="#cbd5e1" font-size="7.5">• PTKP: Diri Rp54 Jt, Kawin Rp4,5 Jt, Anak Rp4,5 Jt</text>
    <text class="svg-text" x="12" y="108" fill="#cbd5e1" font-size="7.5">• Tarif 5 Lapisan: 5%, 15%, 25%, 30%, 35%</text>
    <text class="svg-text" x="12" y="123" fill="#cbd5e1" font-size="7.5">• UMKM PP 20/2026: Tarif 0,5% tanpa batas waktu</text>
    <text class="svg-text" x="12" y="138" fill="#cbd5e1" font-size="7.5">• Fasilitas omzet bebas: s.d. Rp500 Juta setahun</text>
    <text class="svg-text" x="12" y="153" fill="#cbd5e1" font-size="7.5">• Uji omzet 4,8 M: Wajib agregasi usaha + jasa bebas</text>

    <rect class="svg-badge-amber" x="12" y="185" width="241" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="132" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Skema Umum vs Skema Final UMKM</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Penghasilan neto dihitung setelah mengurangkan biaya 3M, zakat sah, dan kompensasi rugi, kemudian dikurangi PTKP sebelum dikenakan tarif progresif Pasal 17.</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Ketentuan Umum Pajak Penghasilan (PPh Umum) dan PPh Wajib Pajak Orang Pribadi',
  ref: 'UU No. 7/2021 (UU HPP) | PP No. 55/2022 | PP No. 20/2026 | PMK No. 66/2023 | PMK No. 114/2025 | PMK No. 168/2023',
  intro: 'Membahas prinsip fundamental Pajak Penghasilan di Indonesia: konsep Schanz-Haig-Simons (SHS) dan 5 elemen penghasilan, asas pemajakan internasional, klasifikasi subjek dan bukan subjek, objek reguler versus objek final versus bukan objek, prinsip matching biaya 3M (Deductible Pasal 6 vs Non-Deductible Pasal 9) serta larangan biaya suap PP 20/2026, rezim perlakuan natura dan kenikmatan berdasarkan PMK 66/2023, pengurang zakat sah PMK 114/2025, penghitungan PPh Orang Pribadi tarif progresif 5 lapisan UU HPP, serta pembaruan skema PPh Final UMKM 0,5% tanpa batas waktu tahunan bagi Orang Pribadi berdasarkan PP 20/2026.',
  objectives: [
    'Menjelaskan konsep teoretis penghasilan (SHS Accretion Model) dan membedakan subjek pajak serta saat mulai/berakhirnya kewajiban subjektif.',
    'Mengklasifikasikan penghasilan ke dalam Objek PPh Tidak Final, Objek PPh Final, dan Bukan Objek Pajak (negative list).',
    'Menganalisis biaya deductible versus non-deductible berdasarkan prinsip 3M serta menerapkan ketentuan anti-korupsi PP 20/2026.',
    'Menerapkan batas pengecualian natura/kenikmatan (11 batasan tertentu & sarana daerah tertentu) sesuai PMK 66/2023.',
    'Menghitung pengurangan zakat sah sesuai PMK 114/2025 dan menerapkan PTKP serta tarif progresif 5 lapisan UU HPP.',
    'Mengevaluasi pemanfaatan skema PPh Final UMKM 0,5% PP 20/2026 dan menerapkan formula agregasi omzet Pasal 58.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Arsitektur Ketentuan Umum Pajak Penghasilan dan PPh Wajib Pajak Orang Pribadi.',
      svg: SVG_PPH_GENERAL_OP
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dasar Hukum & Konsep Teoretis Pajak Penghasilan',
      text: '1. Konsep Schanz-Haig-Simons (SHS): Penghasilan adalah jumlah konsumsi ditambah perubahan kekayaan bersih dalam suatu periode (Income = Consumption + Delta Net Wealth).\n2. Definisi Yuridis (Pasal 4 ayat 1 UU PPh): Setiap tambahan kemampuan ekonomis yang diterima atau diperoleh Wajib Pajak, baik yang berasal dari Indonesia maupun dari luar Indonesia, yang dapat dipakai untuk konsumsi atau untuk menambah kekayaan Wajib Pajak yang bersangkutan, dengan nama dan dalam bentuk apa pun.\n3. Asas Pemajakan: Wajib Pajak Dalam Negeri (WPDN) dikenakan pajak berdasarkan asas Worldwide Income (penghasilan seluruh dunia), sedangkan Wajib Pajak Luar Negeri (WPLN) dikenakan pajak hanya atas penghasilan yang bersumber dari Indonesia (Asas Sumber).'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Dua Posisi - Harmonisasi Regulasi Positif vs Slide Dosen',
      text: '1. Jangka Waktu Retensi Dokumen: Slide dosen mencantumkan 10 tahun, namun berdasarkan hukum positif Pasal 28 ayat (11) UU KUP di Indonesia, buku, catatan, dan dokumen pendukung wajib disimpan selama 5 (lima) tahun di tempat tinggal atau tempat kegiatan usaha.\n2. Bingkisan Hari Raya Keagamaan: Pada beberapa materi slide biaya, bingkisan pegawai ditandai kena pajak. Namun secara hukum positif yang berlaku (PP 55/2022 Pasal 24 jo. PMK 66/2023 Lampiran A No. 1), bingkisan dalam rangka hari raya keagamaan (Idulfitri, Natal, Nyepi, Waisak, Imlek) yang diberikan kepada seluruh pegawai berstatus BUKAN OBJEK PAJAK (Non-Taxable) penuh tanpa batasan nominal rupiah.\n3. Skema PPh Final UMKM 0,5%: Slide perkuliahan lama mengutip ketentuan jangka waktu 7 tahun PP 55/2022. Berdasarkan Peraturan Pemerintah No. 20 Tahun 2026, batasan 7 tahun tersebut resmi DIHAPUS, sehingga WP Orang Pribadi dapat memanfaatkan tarif 0,5% tanpa batas waktu sepanjang omzet tahunannya tidak melebihi Rp4,8 Miliar.'
    },
    {
      kind: 'h2',
      text: '1. Subjek Pajak, Objek PPh, dan Negative List Bukan Objek'
    },
    {
      kind: 'table',
      headers: ['Kategori Yuridis', 'Dasar Regulasi Positif', 'Cakupan Subjek / Objek', 'Perlakuan Fiskal', 'Syarat & Pengecualian'],
      rows: [
        ['Subjek Pajak Dalam Negeri (SPDN)', 'Pasal 2 ayat (3) UU PPh', 'Orang Pribadi bertempat tinggal > 183 hari di RI, Badan didirikan di RI, Warisan belum terbagi', 'Dikenakan pajak atas penghasilan worldwide berdasar penghasilan neto', 'Tarif progresif Pasal 17 (OP) atau tarif Pasal 17 (Badan)'],
        ['Subjek Pajak Luar Negeri (SPLN)', 'Pasal 2 ayat (4) UU PPh', 'OP/Badan tidak bertempat tinggal di RI yang menjalankan BUT atau menerima penghasilan dari RI', 'Dikenakan pajak hanya atas penghasilan bersumber dari Indonesia (bruto)', 'Tarif sepadan 20% (Pasal 26) atau tarif reduksi Tax Treaty (P3B)'],
        ['Bukan Subjek Pajak', 'Pasal 3 ayat (1) UU PPh', 'Pejabat diplomatik/konsulat asing, pejabat organisasi internasional', 'Dikecualikan dari kewajiban perpajakan Indonesia', 'Bukan WNI dan berlaku asas perlakuan timbal balik (resiprositas)'],
        ['Objek PPh Tidak Final', 'Pasal 4 ayat (1) UU PPh', '19 kelompok: gaji, laba usaha, bunga, royalti, sewa, dividen non-investasi, keuntungan pengalihan harta', 'Digabungkan dalam SPT Tahunan, dihitung berdasar penghasilan neto', 'Kredit pajak (PPh 21, 22, 23, 24, 25) mengurangi pajak terutang'],
        ['Objek PPh Bersifat Final', 'Pasal 4 ayat (2) UU PPh', 'Bunga deposito, hadiah undian, transaksi saham bursa, sewa tanah/bangunan, PHTB, UMKM', 'Pajak rampung seketika saat potong/setor; tidak digabung pada akhir tahun', 'Biaya 3M terkait non-deductible; bukti potong tidak dapat dikreditkan'],
        ['Bukan Objek Pajak (Negative List)', 'Pasal 4 ayat (3) UU PPh', 'Bantuan/sumbangan non-afiliasi, warisan, klaim asuransi kesehatan/jiwa OP, beasiswa PMK 68', 'Dikecualikan sepenuhnya dari pengenaan PPh (Bebas Pajak)', 'Tidak ada hubungan usaha, pekerjaan, kepemilikan, atau penguasaan'],
        ['Dividen Dalam Negeri', 'Pasal 4 ayat (3) huruf f UU PPh', 'Dividen yang diterima WP Orang Pribadi dan WP Badan Dalam Negeri', 'Bukan Objek Pajak jika syarat terpenuhi', 'Bagi WP OP wajib diinvestasikan min 3 tahun di NKRI; Bagi WP Badan bebas syarat']
      ],
      caption: 'Tabel 1.1: Matriks taksonomi subjek dan objek Pajak Penghasilan di Indonesia.'
    },
    {
      kind: 'h2',
      text: '2. Prinsip Biaya 3M (Deductible vs Non-Deductible) & Larangan Biaya Suap'
    },
    {
      kind: 'p',
      text: 'Penghasilan Kena Pajak bagi Wajib Pajak yang menyelenggarakan pembukuan dihitung dari penghasilan bruto dikurangi biaya untuk mendapatkan, menagih, dan memelihara penghasilan (Biaya 3M) sesuai matching principle perpajakan:'
    },
    {
      kind: 'table',
      headers: ['Klasifikasi Biaya', 'Rujukan Regulasi', 'Contoh Pos Biaya Operasional', 'Konsekuensi Rekonsiliasi Fiskal'],
      rows: [
        ['Deductible Expense (Pasal 6 ayat 1)', 'Pasal 6 ayat (1) huruf a s.d. n UU PPh', 'Gaji pegawai, biaya bahan, sewa kantor, penyusutan fiskal, bunga operasional, litbang di Indonesia, biaya natura (huruf n)', 'Boleh dikurangkan dari penghasilan bruto (mengurangi Penghasilan Kena Pajak).'],
        ['Sumbangan Boleh Dikurangkan', 'Pasal 6 ayat (1) huruf i s.d. m jo. PMK 114/2025', 'Sumbangan bencana nasional, litbang di RI, infrastruktur sosial, fasilitas pendidikan, dan olahraga', 'Deductible maksimal 5% dari penghasilan neto fiskal tahun pajak sebelumnya.'],
        ['Non-Deductible Expense (Pasal 9 ayat 1)', 'Pasal 9 ayat (1) huruf a s.d. k UU PPh', 'Pembagian laba (dividen), biaya kepentingan pribadi pemegang saham/pengurus, dana cadangan (kecuali bank/asuransi), PPh terutang, sanksi administrasi pajak', 'Dilarang dikurangkan; wajib dilakukan KOREKSI FISKAL POSITIF.'],
        ['Premi Asuransi Dibayar Sendiri OP', 'Pasal 9 ayat (1) huruf d UU PPh', 'Premi asuransi kesehatan, kecelakaan, jiwa, dwiguna yang dibayar sendiri oleh Orang Pribadi', 'Non-deductible bagi OP. Jika dibayar oleh pemberi kerja, menjadi deductible bagi perusahaan dan taxable bagi pegawai.'],
        ['Larangan Biaya Suap & Korupsi', 'Pasal 20A PP No. 20 Tahun 2026', 'Pengeluaran untuk suap, gratifikasi, uang pelicin, atau tindak pidana korupsi lainnya', 'Mutlak Non-Deductible! Dilarang diklaim sebagai biaya 3M dan wajib dikoreksi positif penuh.']
      ],
      caption: 'Tabel 1.2: Matriks evaluasi beban komersial terhadap ketentuan fiskal deductible vs non-deductible.'
    },
    {
      kind: 'h2',
      text: '3. Rezim Pemajakan Natura dan Kenikmatan (PP 55/2022 jo. PMK 66/2023)'
    },
    {
      kind: 'p',
      text: 'Sejak berlakunya UU HPP dan PP 55/2022, rezim pemajakan imbalan non-kas bergeser mendasar: imbalan natura (barang) dan kenikmatan (fasilitas jasa) kini berstatus DEDUCTIBLE bagi pemberi kerja (sepanjang biaya 3M) dan menjadi OBJEK PPH PASAL 21 (Taxable) bagi penerima, kecuali yang masuk dalam daftar pengecualian.'
    },
    {
      kind: 'table',
      headers: ['Jenis Natura / Kenikmatan', 'Dasar Regulasi', 'Batasan Nilai Non-Taxable', 'Perlakuan Selisih Pelampauan Nilai'],
      rows: [
        ['Makanan & Minuman Seluruh Pegawai', 'Pasal 24 huruf a PP 55/2022', 'Tanpa batasan nominal di tempat kerja; Kupon dinas luar maks senilai makan kantor atau Rp2.000.000/bln', 'Selisih kupon di atas batas pembanding dipotong PPh 21.'],
        ['Natura/Kenikmatan Daerah Tertentu', 'Pasal 24 huruf b PP 55/2022', 'Tempat tinggal, pelayanan kesehatan, pendidikan, peribadatan, pengangkutan, olahraga non-mewah', 'Non-taxable penuh bagi pegawai di lokasi daerah tertentu yang disetujui DJP.'],
        ['Keharusan Keamanan / K3 Kerja', 'Pasal 24 huruf c PP 55/2022', 'Pakaian seragam, alat pelindung diri (APD), antar jemput pegawai, penginapan awak kapal/pesawat', 'Non-taxable penuh tanpa batasan nilai rupiah.'],
        ['Bingkisan Hari Raya Keagamaan', 'PMK 66/2023 Lamp. A No. 1', 'Diberikan kepada seluruh pegawai dalam rangka hari raya keagamaan resmi', 'Bebas PPh 21 penuh tanpa batas nominal rupiah.'],
        ['Bingkisan Selain Hari Raya', 'PMK 66/2023 Lamp. A No. 2', 'Maksimal Rp3.000.000 per pegawai dalam 1 Tahun Pajak', 'Akumulasi bingkisan di atas Rp3.000.000 dipotong PPh 21 pada bulan pelampauan.'],
        ['Fasilitas Olahraga Biasa', 'PMK 66/2023 Lamp. A No. 5', 'Maksimal Rp1.500.000 per pegawai dalam 1 Tahun Pajak (badminton, futsal, renang, gym)', 'Selisih di atas Rp1,5 Juta objek PPh 21. Golf, pacuan kuda, terbang layang, otomotif SELALU TAXABLE PENUH.'],
        ['Tempat Tinggal Sewa Individual', 'PMK 66/2023 Lamp. A No. 7', 'Maksimal biaya sewa Rp2.000.000 per pegawai per bulan (apartemen / mess non-komunal)', 'Kelebihan biaya sewa di atas Rp2.000.000/bulan dipotong PPh 21.'],
        ['Kendaraan Dinas Operasional', 'PMK 66/2023 Lamp. A No. 8', 'Pegawai bukan pemegang saham dan rata-rata bruto 12 bulan terakhir &le; Rp100.000.000/bulan', 'Bebas PPh 21 penuh. Jika pemegang saham atau gaji > 100 Jt/bln, seluruh fasilitas jadi objek PPh 21.']
      ],
      caption: 'Tabel 1.3: Daftar ambang batas kuantitatif fasilitas natura dan kenikmatan bebas pajak (PMK 66/2023).'
    },
    {
      kind: 'h2',
      text: '4. Pengurang Penghasilan Bruto: Zakat (PMK 114/2025), Kompensasi Rugi, dan PTKP'
    },
    {
      kind: 'ul',
      items: [
        '**Zakat dan Sumbangan Keagamaan Wajib (PMK 114/2025):** Zakat yang dibayarkan melalui Badan Amil Zakat Nasional (BAZNAS), Lembaga Amil Zakat (LAZ), atau lembaga keagamaan yang disahkan pemerintah berhak menjadi pengurang penghasilan bruto. Syarat mutlak: pembayaran wajib didukung bukti setor sah (validasi transfer bank) dan DILARANG MENYEBABKAN ATAU MEMPERBESAR RUGI FISKAL. Pengurangan zakat dibatasi maksimal sebesar laba fiskal (s.d. laba Rp0), dan sisa kelebihan zakat hangus.',
        '**Kompensasi Kerugian Fiskal (Pasal 6 ayat 2 UU PPh):** Kerugian fiskal tahun berjalan dapat dikompensasikan dengan laba neto fiskal mulai tahun pajak berikutnya berturut-turut sampai dengan paling lama 5 (lima) tahun. Sisa kerugian yang belum terserap pada akhir tahun kelima langsung hangus.',
        '**Penghasilan Tidak Kena Pajak / PTKP (Pasal 7 UU HPP):** Diri Wajib Pajak Orang Pribadi = Rp54.000.000; Tambahan Wajib Pajak Kawin = Rp4.500.000; Tambahan untuk setiap anggota keluarga sedarah/semenda dalam garis keturunan lurus serta anak angkat yang menjadi tanggungan sepenuhnya = Rp4.500.000 per orang (maksimal 3 orang tanggungan). Range: TK/0 (Rp54.000.000) hingga K/3 (Rp72.000.000).'
      ]
    },
    {
      kind: 'h2',
      text: '5. Formula Fondasi Penghitungan PPh Orang Pribadi & Skema UMKM'
    },
    {
      kind: 'formula',
      text: `\\text{Penghasilan Neto Fiskal} = \\text{Penghasilan Bruto} - \\text{Biaya 3M (Pasal 6 ayat 1)}
\\text{Penghasilan Kena Pajak (PKP)} = \\text{Penghasilan Neto} - \\text{Zakat Sah} - \\text{Kompensasi Rugi} - \\text{PTKP}
\\text{PPh Terutang OP} = \\sum (\\text{Lapisan PKP}_i \\times \\text{Tarif Progresif}_i)
\\text{PPh Final UMKM OP} = 0,5\\% \\times \\max(0, \\text{Omzet Kumulatif} - \\text{Rp}500.000.000)`,
      note: 'Struktur Tarif Progresif Pasal 17 ayat (1) huruf a UU HPP: Lapis 1 (s.d. Rp60 Juta @ 5%), Lapis 2 (> Rp60 Juta s.d. Rp250 Juta @ 15%), Lapis 3 (> Rp250 Juta s.d. Rp500 Juta @ 25%), Lapis 4 (> Rp500 Juta s.d. Rp5 Miliar @ 30%), Lapis 5 (> Rp5 Miliar @ 35%).'
    },
    {
      kind: 'h2',
      text: '6. Kumpulan Kasus Komprehensif (Worked Practice Cases)'
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 1: Evaluasi Kupon Makan Dinas Luar vs Makan Kantor (PT BA & PT BB)',
      prompt: 'PT BA dan PT BB menyediakan makan siang bersama di kantor dengan nilai wajar Rp100.000 per orang per bulan. Untuk staf pemasaran yang bertugas di luar kantor, PT BA memberikan kupon makan senilai Rp110.000 per bulan, sedangkan PT BB memberikan kupon makan senilai Rp95.000 per bulan. Tentukan status perpajakan kupon bagi pegawai dan pembebanannya bagi perusahaan sesuai PMK 66/2023!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Analisis PT BA**:\n- Nilai kupon dinas luar (Rp110.000) melebihi nilai penyediaan makanan di kantor (Rp100.000).\n- Selisih lebih: $\\text{Rp}110.000 - \\text{Rp}100.000 = \\mathbf{Rp10.000 \\text{ per bulan}}$.\n- **Status Pegawai**: Sebesar Rp10.000/bulan merupakan **Objek Pemotongan PPh Pasal 21**; bagian Rp100.000/bulan BUKAN objek pajak.\n- **Status Perusahaan**: Seluruh pengeluaran kupon Rp110.000/bulan merupakan **Biaya Deductible 3M** penuh.',
            '**2. Analisis PT BB**:\n- Nilai kupon dinas luar (Rp95.000) lebih rendah atau sama dengan nilai makanan di kantor (Rp100.000).\n- Selisih lebih: Rp0.\n- **Status Pegawai**: Seluruh nilai kupon Rp95.000/bulan merupakan **BUKAN Objek PPh (Non-Taxable)** penuh.\n- **Status Perusahaan**: Seluruh biaya kupon Rp95.000/bulan merupakan **Biaya Deductible 3M** penuh.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 2: Penyerahan Bingkisan Apresiasi Bertahap (PT BC & Nona A)',
      prompt: 'PT BC memberikan paket bingkisan apresiasi non-hari raya kepada Nona A (staf berprestasi) secara bertahap pada Tahun Pajak 2024: Januari sebesar Rp1.000.000, Februari sebesar Rp1.500.000, dan Maret sebesar Rp1.500.000. Batas non-taxable bingkisan non-hari raya adalah Rp3.000.000 per tahun. Hitung objek PPh Pasal 21 yang wajib dipotong PT BC pada masing-masing masa pajak!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Masa Pajak Januari 2024**:\nAkumulasi bingkisan = Rp1.000.000 (&le; ambang batas Rp3.000.000). Objek PPh Pasal 21 = **Rp0** (Non-taxable).',
            '**2. Masa Pajak Februari 2024**:\nAkumulasi bingkisan = Rp1.000.000 + Rp1.500.000 = Rp2.500.000 (&le; ambang batas Rp3.000.000). Objek PPh Pasal 21 = **Rp0** (Non-taxable).',
            '**3. Masa Pajak Maret 2024**:\nAkumulasi bingkisan = Rp2.500.000 + Rp1.500.000 = Rp4.000.000 (> ambang batas Rp3.000.000).\nSelisih pelampauan nilai: $\\text{Rp}4.000.000 - \\text{Rp}3.000.000 = \\mathbf{Rp1.000.000}$.\n**Objek Pemotongan PPh Pasal 21 Masa Maret** = **Rp1.000.000** (bagian non-taxable = Rp500.000).',
            '**4. Status Perusahaan**:\nTotal biaya bingkisan Rp4.000.000 merupakan **Biaya Deductible 3M** penuh bagi PT BC.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 3: Batasan Pengurangan Zakat terhadap Laba Fiskal (PMK 114/2025)',
      prompt: 'Wajib Pajak Orang Pribadi E membayar zakat profesi sebesar Rp20.000.000 kepada BAZNAS dengan bukti transfer perbankan yang sah. Evaluasi perlakuan pengurangan zakat pada SPT Tahunan jika: (1) Penghasilan neto fiskal sebelum zakat sebesar Rp100.000.000; (2) Penghasilan neto fiskal sebelum zakat sebesar Rp15.000.000!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Skenario 1 (Laba Neto Sebelum Zakat Rp100.000.000)**:\n- Uji larangan rugi: Rp100.000.000 - Rp20.000.000 = Rp80.000.000 (> 0, aman).\n- **Zakat Deductible**: Sebesar **Rp20.000.000 (Penuh)**.\n- Penghasilan neto fiskal setelah zakat = **Rp80.000.000**.',
            '**2. Skenario 2 (Laba Neto Sebelum Zakat Rp15.000.000)**:\n- Berdasarkan Pasal 9 ayat (1) huruf a & ayat (3) PMK 114/2025, zakat DILARANG menyebabkan atau memperbesar rugi fiskal.\n- **Zakat Deductible Maksimal**: Dibatasi sebesar laba neto fiskal, yaitu **Rp15.000.000** (laba neto fiskal menjadi Rp0).\n- **Sisa Zakat**: Kelebihan zakat sebesar Rp5.000.000 (Rp20.000.000 - Rp15.000.000) **HANGUS** (tidak dapat dikompensasikan ke tahun pajak berikutnya dan tidak dapat direstitusi).'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 4: Penghitungan Komprehensif PPh Terutang WP Orang Pribadi (Tuan F K/2)',
      prompt: 'Tuan F (status kawin dengan 2 anak kandung / K/2) menjalankan kantor konsultan hukum independen dengan pembukuan pada Tahun Pajak 2025. Data fiskal:\n- Peredaran bruto usaha: Rp1.200.000.000\n- Biaya 3M operasional yang sah: Rp700.000.000\n- Zakat profesi via LAZ resmi berizin: Rp15.000.000\n- Kompensasi rugi fiskal tahun 2024: Rp20.000.000\nHitung Penghasilan Kena Pajak (PKP) dan PPh Terutang Tahun Pajak 2025!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Penghitungan Penghasilan Neto Fiskal Usaha**:\nPenghasilan Bruto (Rp1.200.000.000) - Biaya 3M (Rp700.000.000) = **Rp500.000.000**.',
            '**2. Pengurangan Zakat Sah & Kompensasi Rugi**:\n- Pengurangan Zakat Profesi: Rp15.000.000 (uji laba lolos: Rp500 Jt > Rp15 Jt) &rarr; Sisa = Rp485.000.000.\n- Pengurangan Kompensasi Rugi Fiskal 2024: Rp20.000.000 &rarr; Penghasilan Neto Setelah Pengurang = **Rp465.000.000**.',
            '**3. Penghitungan PTKP Status K/2**:\nPTKP K/2 = WP Pribadi (Rp54.000.000) + Status Kawin (Rp4.500.000) + 2 Tanggungan Anak (2 × Rp4.500.000 = Rp9.000.000) = **Rp67.500.000**.',
            '**4. Penghitungan Penghasilan Kena Pajak (PKP)**:\nPKP = Rp465.000.000 - Rp67.500.000 = **Rp397.500.000**.',
            '**5. Penghitungan PPh Terutang Tarif Progresif UU HPP Pasal 17 ayat (1) huruf a**:\n- Lapis 1 (5% × Rp60.000.000) = Rp3.000.000\n- Lapis 2 (15% × Rp190.000.000) = Rp28.500.000\n- Lapis 3 (25% × [Rp397.500.000 - Rp250.000.000 = Rp147.500.000]) = Rp36.875.000\n- **Total PPh Terutang Tahun Pajak 2025** = Rp3.000.000 + Rp28.500.000 + Rp36.875.000 = **Rp68.375.000**.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 5: Penggabungan Omzet Usaha & Pekerjaan Bebas PP 20/2026 (Kasus Nona E)',
      prompt: 'Nona E terdaftar sebagai Wajib Pajak pada 10 April 2026. Selama Tahun Pajak 2026, Nona E memperoleh penghasilan dari jasa agen asuransi (pekerjaan bebas) dengan peredaran bruto Rp3.500.000.000, serta penghasilan dari usaha katering dengan peredaran bruto Rp1.500.000.000. Tentukan perlakuan PPh Tahun Pajak 2026 dan hak pemanfaatan skema PPh Final UMKM 0,5% untuk Tahun Pajak 2027 sesuai PP No. 20 Tahun 2026!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Perlakuan Pajak Tahun Pajak 2026**:\n- **Jasa Agen Asuransi (Rp3.500.000.000)**: Berdasarkan Pasal 56 ayat (3) huruf a jo. ayat (4) huruf j PP 20/2026, jasa pekerjaan bebas dikecualikan dari skema PPh Final UMKM 0,5% dan wajib dikenai **Tarif Umum Pasal 17**.\n- **Usaha Katering (Rp1.500.000.000)**: Memenuhi kriteria usaha dengan omzet di atas batas bebas Rp500 Juta, sehingga berhak dikenai **PPh Final 0,5%** atas omzet setelah Rp500 Juta.',
            '**2. Evaluasi Uji Ambang Batas untuk Tahun Pajak 2027 (Pasal 58 PP 20/2026)**:\n- Berdasarkan Pasal 58 ayat (1) huruf a PP No. 20 Tahun 2026, pengujian ambang batas Rp4.800.000.000 untuk tahun berikutnya **WAJIB MENGGABUNGKAN** seluruh peredaran bruto dari usaha DAN jasa sehubungan dengan pekerjaan bebas tahun sebelumnya.\n- Total Agregasi Omzet 2026: $\\text{Rp}3.500.000.000 + \\text{Rp}1.500.000.000 = \\mathbf{Rp5.000.000.000 \\text{ (Rp5 Miliar)}}$.',
            '**3. Status Tahun Pajak 2027**:\nKarena jumlah keseluruhan peredaran bruto tahun 2026 (Rp5 Miliar) telah melebihi ambang batas Rp4.800.000.000, maka mulai Tahun Pajak 2027 usaha katering Nona E **GUGUR DARI SKEMA PPh FINAL UMKM 0,5%** dan wajib dikenakan **Tarif Umum Pasal 17** (melalui pembukuan atau pencatatan jika memenuhi syarat).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: '7. Exam Toolkit: Kalender Batas Waktu, Pohon Keputusan, & 7 Jebakan Ujian'
    },
    {
      kind: 'table',
      headers: ['Kewajiban Perpajakan', 'Batas Waktu Yuridis', 'Dasar Regulasi Positif', 'Konsekuensi Keterlambatan'],
      rows: [
        ['Penyampaian SPT Tahunan PPh Orang Pribadi', 'Paling lambat 31 Maret tahun pajak berikutnya', 'UU KUP Pasal 3 ayat (3) huruf b', 'Denda administrasi keterlambatan Rp100.000 (Pasal 7 ayat 1 UU KUP).'],
        ['Pemberitahuan Menggunakan Pencatatan (NPPN)', 'Paling lama 3 bulan pertama dari tahun pajak berjalan', 'UU PPh Pasal 14 ayat (2) jo. PMK 81/2024 Ps 448', 'Otomatis dianggap memilih menyelenggarakan pembukuan penuh.'],
        ['Pemotongan PPh Pasal 21 atas Natura / Kenikmatan', 'Akhir bulan terjadinya penyerahan natura atau pemanfaatan kenikmatan', 'PMK 66/2023 Pasal 3 ayat (3)', 'Terutang sanksi bunga keterlambatan per bulan UU KUP.'],
        ['Jangka Waktu Reinvestasi Dividen Dalam Negeri OP', 'Paling singkat 3 Tahun Pajak sejak dividen diterima', 'UU PPh Pasal 4(3)f jo. PMK 18/2021', 'Dikenai PPh Final 10% secara retroaktif jika dicairkan sebelum 3 tahun.'],
        ['Penanaman Kembali Sisa Lebih Lembaga Pendidikan', 'Paling lama 4 tahun sejak diperolehnya sisa lebih', 'UU PPh Pasal 4(3)m & p', 'Diakui sebagai objek penghasilan kena pajak pada tahun kelima.']
      ],
      caption: 'Tabel 1.4: Kalender batas waktu kepatuhan formal perpajakan PPh Umum dan Orang Pribadi.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Daftar 7 Jebakan Klasik Ujian Tengah Semester (Exam Traps)',
      text: '1. Jebakan Jangka Waktu Simpan Dokumen: Slide dosen menyebut 10 tahun, namun hukum positif Indonesia (Pasal 28 ayat 11 UU KUP) menetapkan 5 (lima) tahun.\n2. Jebakan Bingkisan Hari Raya: Bingkisan hari raya keagamaan bagi seluruh pegawai berstatus BEBAS PAJAK PENUH tanpa batas nominal rupiah (bukan batas Rp3 Juta).\n3. Jebakan Fasilitas Olahraga Mewah: Fasilitas golf, pacuan kuda, terbang layang, dan balap otomotif SELALU TAXABLE PENUH bagi penerima (tidak berlaku ambang batas Rp1,5 Juta).\n4. Jebakan Zakat Menyebabkan Rugi: Zakat dilarang menyebabkan rugi fiskal. Jika laba Rp15 Juta dan zakat Rp20 Juta, zakat yang boleh dikurangkan maksimal Rp15 Juta, sisa Rp5 Juta hangus.\n5. Jebakan Biaya Pribadi Direktur: Beban listrik dan pembantu rumah direktur merupakan beban pribadi non-deductible (Pasal 9 ayat 1 huruf b), KECUALI dipotong PPh 21 kenikmatan atas nama direktur.\n6. Jebakan Dividen Badan: Pembebasan PPh atas dividen bagi Wajib Pajak Badan Dalam Negeri berlaku TANPA SYARAT investasi (syarat investasi 3 tahun hanya untuk Orang Pribadi).\n7. Jebakan Hapus Batas 7 Tahun UMKM: Berdasarkan PP 20/2026, pembatasan jangka waktu 7 tahun bagi Wajib Pajak Orang Pribadi telah DIHAPUS. Namun, pengujian ambang batas Rp4,8 Miliar wajib menggabungkan omzet usaha dengan seluruh peredaran bruto pekerjaan bebas (Pasal 58).'
    },
    {
      kind: 'h2',
      text: '8. Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Konsep SHS Menjadi Dasar Definisi:** Tambahan kemampuan ekonomis dalam bentuk apa pun dan dari mana pun adalah objek PPh, kecuali masuk negative list Pasal 4 ayat (3).',
        '**Biaya 3M sebagai Filter Pengurang:** Biaya komersial hanya dapat menjadi deductible expense jika terbukti berhubungan langsung dengan 3M penghasilan dan tidak melanggar 11 pos larangan Pasal 9 ayat (1) serta larangan suap Pasal 20A PP 20/2026.',
        '**Rezim Baru Natura Bersifat Simetris:** Natura/kenikmatan dapat dibiayakan oleh perusahaan (deductible) dan dipajaki bagi pegawai (taxable), kecuali 5 kelompok umum Pasal 24 PP 55/2022 dan 11 batasan tertentu PMK 66/2023.',
        '**Pengurangan Zakat Bersyarat Ketat:** Zakat hanya dapat dikurangkan jika disalurkan lewat BAZNAS/LAZ berizin dan tidak boleh memicu atau memperbesar rugi fiskal (PMK 114/2025).',
        '**Skema UMKM PP 20/2026 Tanpa Batas 7 Tahun:** WP Orang Pribadi dapat memanfaatkan tarif 0,5% seterusnya selama omzet tahunan $\\le$ Rp4,8 Miliar, dengan fasilitas omzet bebas pajak Rp500 Juta setahun.'
      ]
    }
  ]
};
