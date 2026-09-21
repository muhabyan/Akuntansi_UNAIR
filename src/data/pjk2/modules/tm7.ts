import type { Reading } from '../../../types';

const SVG_PPH24_25_31E = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="gGreen" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="gAmber" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk7)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">ARSITEKTUR KREDIT PAJAK LUAR NEGERI, ANGSURAN PPH 25, &amp; INSENTIF PPH BADAN</text>
  <rect class="svg-badge-blue" x="725" y="21" width="150" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="800" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TM07 PRA-UTS</text>

  <!-- Card 1: PPh Pasal 24 Kredit Luar Negeri -->
  <g transform="translate(30, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="12" fill="url(#gBlue)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. PPH PASAL 24 (KREDIT LN)</text>
    
    <rect class="svg-subcard" x="12" y="38" width="241" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="53" fill="#38bdf8" font-size="7.5" font-weight="800" text-anchor="middle">Asas Worldwide Income &amp; Ordinary Credit</text>
    
    <text class="svg-text" x="12" y="78" fill="#cbd5e1" font-size="7.5">• Per-Country Limitation (dihitung per negara)</text>
    <text class="svg-text" x="12" y="93" fill="#cbd5e1" font-size="7.5">• BKMKPLN = (Penghasilan LN ÷ PKP) × PPh Terutang</text>
    <text class="svg-text" x="12" y="108" fill="#cbd5e1" font-size="7.5">• Kredit Diakui = min(Pajak LN, BKMKPLN)</text>
    <text class="svg-text" x="12" y="123" fill="#cbd5e1" font-size="7.5">• Rugi LN dilarang digabung / diisolasi</text>
    <text class="svg-text" x="12" y="138" fill="#cbd5e1" font-size="7.5">• Kelebihan pajak LN hangus (tidak restitusi/biaya)</text>
    <text class="svg-text" x="12" y="153" fill="#cbd5e1" font-size="7.5">• Rujukan: UU PPh Pasal 24 jo. PMK 192/2018</text>

    <rect class="svg-badge-blue" x="12" y="185" width="241" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Metode Batas Maksimum Terbatas</text>
  </g>

  <!-- Card 2: PPh Pasal 25 & WP OPPT -->
  <g transform="translate(315, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="12" fill="url(#gGreen)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">2. PPH 25 &amp; WP OPPT</text>
    
    <rect class="svg-subcard" x="12" y="38" width="241" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="53" fill="#34d399" font-size="7.5" font-weight="800" text-anchor="middle">PMK 81/2024 Pasal 226 s.d. 237</text>
    
    <text class="svg-text" x="12" y="78" fill="#cbd5e1" font-size="7.5">• Dasar Angsuran = PPh SPT Lalu - Kredit (21-24)</text>
    <text class="svg-text" x="12" y="93" fill="#cbd5e1" font-size="7.5">• Angsuran Normal = Dasar Angsuran ÷ 12 bulan</text>
    <text class="svg-text" x="12" y="108" fill="#cbd5e1" font-size="7.5">• Masa Transisi (Jan-Feb) = Angsuran Des lalu</text>
    <text class="svg-text" x="12" y="123" fill="#cbd5e1" font-size="7.5">• WP OPPT = 0,75% × Omzet per Outlet bulanan</text>
    <text class="svg-text" x="12" y="138" fill="#cbd5e1" font-size="7.5">• Sifat OPPT: TIDAK FINAL (Kredit PPh 1770)</text>
    <text class="svg-text" x="12" y="153" fill="#cbd5e1" font-size="7.5">• Setor tgl 15 bulan berikut, lapor validasi SSP</text>

    <rect class="svg-badge-green" x="12" y="185" width="241" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Pelunasan Pajak Berjalan Sendiri</text>
  </g>

  <!-- Card 3: Insentif Pasal 31A & 31E -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="12" fill="url(#gAmber)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="132" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">3. INSENTIF PASAL 31A &amp; 31E</text>
    
    <rect class="svg-subcard" x="12" y="38" width="241" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="132" y="53" fill="#fbbf24" font-size="7.5" font-weight="800" text-anchor="middle">Fasilitas Investasi &amp; Pengurangan Tarif</text>
    
    <text class="svg-text" x="12" y="78" fill="#cbd5e1" font-size="7.5">• 31A: Tax Allowance (PP 78/2019 jo. PMK 81)</text>
    <text class="svg-text" x="12" y="93" fill="#cbd5e1" font-size="7.5">  - Pengurang neto 30% (5%/th selama 6 th)</text>
    <text class="svg-text" x="12" y="108" fill="#cbd5e1" font-size="7.5">• 31E: Diskon 50% Tarif PPh Badan (Omzet &le; 50 M)</text>
    <text class="svg-text" x="12" y="123" fill="#cbd5e1" font-size="7.5">  - Omzet &le; 4,8 Miliar: Fasilitas penuh (11%)</text>
    <text class="svg-text" x="12" y="138" fill="#cbd5e1" font-size="7.5">  - Omzet 4,8 M s.d. 50 M: Proporsional</text>
    <text class="svg-text" x="12" y="153" fill="#cbd5e1" font-size="7.5">  - Omzet &gt; 50 Miliar: Tarif normal 22%</text>

    <rect class="svg-badge-amber" x="12" y="185" width="241" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="132" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Pengurangan Beban Pajak Badan</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Penerapan Fasilitas Pasal 31E menentukan PPh Terutang, sedangkan PPh 24 dan PPh 25 menjadi pengurang sebelum pelunasan PPh Pasal 29 akhir tahun.</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Kredit Pajak Luar Negeri (PPh 24), Angsuran PPh 25 & WP OPPT, Insentif PPh Pasal 31A & 31E',
  ref: 'UU PPh jo. UU HPP No. 7/2021 | PMK 81/2024 Pasal 226–237 (PPh 25 & OPPT) & Pasal 407–424 (Pasal 31A) | PP 78/2019 | SE-02/PJ/2015',
  intro: 'Pertemuan TM07 merupakan materi penutup paruh pertama semester sebelum Ujian Tengah Semester (UTS). Pembahasan mengintegrasikan mekanisme pelunasan pajak tahun berjalan dan optimalisasi insentif fiskal: penghitungan Kredit Pajak Luar Negeri (PPh Pasal 24) dengan metode Ordinary Credit per-country limitation, penetapan cicilan bulanan Wajib Pajak Badan dan Orang Pribadi (PPh Pasal 25 normal, masa transisi, dan WP OPPT 0,75%), fasilitas Tax Allowance penanaman modal (Pasal 31A UU PPh jo. PP 78/2019 jo. PMK 81/2024), serta fasilitas pengurangan tarif 50% bagi perseroan dengan peredaran bruto sampai dengan Rp50 Miliar (Pasal 31E UU PPh).',
  objectives: [
    'Menghitung Batas Maksimum Kredit Pajak Luar Negeri (BKMKPLN) per negara (Ordinary Credit) dan mengisolasi kerugian luar negeri.',
    'Menghitung angsuran bulanan PPh Pasal 25 normal dan angsuran masa transisi awal tahun (Januari-Februari) sesuai PMK 81/2024 Pasal 226–237.',
    'Menghitung angsuran PPh Pasal 25 Wajib Pajak Orang Pribadi Pengusaha Tertentu (WP OPPT) 0,75% per tempat usaha dan status kreditnya.',
    'Menghitung fasilitas Tax Allowance Pasal 31A (pengurangan neto 5% per tahun selama 6 tahun).',
    'Mengidentifikasi hak fasilitas Pasal 31E UU PPh dan menghitung PPh terutang (fasilitas penuh vs fasilitas proporsional).',
    'Menyelesaikan rekonsiliasi PPh Pasal 29 akhir tahun dan penetapan angsuran PPh 25 tahun pajak berikutnya.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 7.1: Taksonomi Terpadu Kredit Pajak Luar Negeri, Angsuran PPh 25 / OPPT, dan Insentif Perpajakan Badan.',
      svg: SVG_PPH24_25_31E
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Transparansi Asal Rujukan (Provenance Notice)',
      text: 'Karena silabus TM07 tidak memiliki materi tayang slide resmi dosen di repositori, materi komprehensif ini dikonstruksi secara otoritatif dan terstruktur dari kombinasi Subbahasan RPS Pertemuan 7 Perpajakan II serta teks perundang-undangan primer yang berlaku positif: UU PPh jo. UU HPP No. 7 Tahun 2021, PP No. 78 Tahun 2019, dan PMK No. 81 Tahun 2024 (Coretax).'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dasar Hukum Otentik: PPh Pasal 24 UU PPh & Ordinary Credit Per-Country Limitation',
      text: '1. Asas Worldwide Income: Wajib Pajak Dalam Negeri dikenai pajak atas seluruh penghasilan dari dalam dan luar negeri.\n2. Penghindaran Pajak Berganda Yuridis: Pajak yang dibayar atau terutang di luar negeri boleh dikreditkan terhadap pajak terutang di Indonesia dalam tahun pajak yang sama (Pasal 24 ayat 1).\n3. Prinsip Ordinary Credit & Batas Maksimum: Besarnya kredit pajak paling tinggi sama dengan jumlah pajak yang dihitung menurut UU PPh (Pasal 24 ayat 2). Dihitung per masing-masing negara sumber (Per-Country Limitation).\n4. Isolasi Kerugian Luar Negeri: Kerugian yang diderita di luar negeri dilarang digabungkan atau dikompensasikan dengan laba dalam negeri.\n5. Kelebihan Pajak Luar Negeri: Apabila pajak yang dibayar di luar negeri melebihi BKMKPLN, selisih lebih tersebut hangus (tidak dapat direstitusi, tidak dapat dikompensasi ke tahun berikutnya, dan tidak boleh dibebankan sebagai biaya).'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dasar Hukum Otentik: Angsuran PPh Pasal 25 & WP OPPT (PMK 81/2024 BAB VI Bagian Keenam Pasal 226–237)',
      text: '1. Pencabutan PMK 215/2018: Berdasarkan Pasal 483 angka 27 PMK 81/2024, ketentuan teknis angsuran PPh 25 dialihkan ke BAB VI Bagian Keenam Pasal 226 sampai dengan Pasal 237 PMK 81/2024.\n2. Rumus Normal (Pasal 226): Dasar angsuran adalah PPh Terutang menurut SPT Tahunan tahun pajak yang lalu dikurangi kredit pajak PPh 21, 22, 23, dan 24, kemudian dibagi 12 bulan.\n3. Masa Transisi Awal Tahun (Pasal 229): Untuk bulan-bulan sebelum batas waktu penyampaian SPT Tahunan (Masa Januari dan Februari bagi WP Badan), besarnya angsuran PPh 25 sama dengan angsuran Masa Desember tahun pajak sebelumnya.\n4. Pengurangan Angsuran (Pasal 232): WP dapat mengajukan permohonan pengurangan angsuran PPh 25 apabila proyeksi PPh terutang tahun berjalan turun hingga kurang dari 75% dari dasar penghitungan.\n5. WP Orang Pribadi Pengusaha Tertentu / OPPT (Pasal 235 & 236): WP OP yang melakukan kegiatan usaha perdagangan eceran atau penyerahan jasa melalui tempat usaha yang berbeda domisili wajib membayar angsuran PPh 25 sebesar 0,75% dari peredaran bruto per bulan untuk masing-masing tempat usaha. Pembayaran ini bersifat TIDAK FINAL dan merupakan kredit pajak pada Formulir SPT Tahunan 1770.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Dasar Hukum Otentik: Insentif Penanaman Modal (Pasal 31A) & Pengurangan Tarif (Pasal 31E)',
      text: '1. Tax Allowance (Pasal 31A UU PPh jo. PP 78/2019 jo. PMK 81/2024 BAB VII Bagian Kedua Pasal 407–424):\n- Pengurangan penghasilan neto sebesar 30% dari nilai investasi aktiva tetap berwujud termasuk tanah, dibebankan 5% per tahun selama 6 tahun (Pasal 408 ayat 1 huruf a).\n- Penyusutan dan amortisasi dipercepat (dua kali lipat tarif normal dengan masa manfaat separuh).\n- Tarif PPh dividen WPLN sebesar 10% (atau tarif P3B yang lebih rendah).\n- Perpanjangan jangka waktu kompensasi kerugian hingga 10 tahun sesuai kriteria investasi.\n\n2. Fasilitas Pengurangan Tarif PPh Badan (Pasal 31E UU PPh):\n- Wajib Pajak Badan dalam negeri dengan peredaran bruto sampai dengan Rp50 Miliar mendapat fasilitas pengurangan tarif 50% dari tarif normal Pasal 17 (22%), sehingga tarif efektifnya adalah 11%.\n- Omzet s.d. Rp4,8 Miliar: Fasilitas penuh atas seluruh Penghasilan Kena Pajak (PPh = 11% x PKP).\n- Omzet Rp4,8 Miliar s.d. Rp50 Miliar: Fasilitas proporsional. Bagian PKP Fasilitas = (Rp4,8 Miliar / Omzet Total) x PKP Total dikenakan tarif 11%, dan sisanya (PKP Non-Fasilitas) dikenakan tarif normal 22%.\n- Omzet > Rp50 Miliar: Diskualifikasi mutlak dari fasilitas Pasal 31E. Seluruh PKP dikenakan tarif normal 22%.'
    },
    {
      kind: 'h2',
      text: 'Struktur & Matriks Regulasi Pelunasan Pajak Tahun Berjalan & Fasilitas'
    },
    {
      kind: 'table',
      headers: ['Instrumen Perpajakan', 'Dasar Regulasi Primer', 'Objek / Target Subjek', 'Formula / Tarif Pokok', 'Sifat Pembayaran'],
      rows: [
        ['PPh Pasal 24 (Kredit Pajak LN)', 'Pasal 24 UU PPh jo. PMK 192/2018', 'Penghasilan neto dari luar negeri (worldwide income)', 'Kredit = min(Pajak LN, BKMKPLN). BKMKPLN = (Penghasilan LN / PKP) × PPh Terutang', 'Kredit Pajak Luar Negeri'],
        ['PPh Pasal 25 Badan Normal', 'Pasal 25 UU PPh jo. PMK 81/2024 Ps 226', 'Wajib Pajak Badan yang telah memiliki SPT Tahunan', 'Angsuran = [PPh Terutang Lalu - Kredit (21+22+23+24)] ÷ 12', 'Penyetoran Sendiri (Kredit PPh 28)'],
        ['PPh Pasal 25 Masa Transisi', 'PMK 81/2024 Pasal 229', 'WP Badan sebelum batas lapor SPT (Jan-Feb)', 'Besaran angsuran = Angsuran PPh 25 Masa Desember tahun lalu', 'Penyetoran Sendiri (Kredit PPh 28)'],
        ['PPh 25 WP OPPT', 'PMK 81/2024 Pasal 235 & 236', 'Pedagang eceran / jasa dengan gerai/outlet terpisah', '0,75% × Peredaran bruto bulanan per masing-masing tempat usaha', 'TIDAK FINAL (Kredit SPT OP 1770)'],
        ['Tax Allowance (Pasal 31A)', 'PP 78/2019 jo. PMK 81/2024 Ps 407–424', 'WP Badan industri tertentu / daerah tertentu', 'Pengurangan neto fiskal 5% per tahun selama 6 tahun (total 30%)', 'Fasilitas Pengurang Penghasilan'],
        ['Pasal 31E (Omzet s.d. 4,8 M)', 'Pasal 31E UU PPh jo. SE-02/PJ/2015', 'WP Badan omzet tahunan s.d. Rp4.800.000.000', 'Diskon 50% atas seluruh PKP: PPh = 11% × PKP', 'Penetapan Beban Pajak Terutang'],
        ['Pasal 31E (Omzet 4,8 M - 50 M)', 'Pasal 31E UU PPh jo. SE-02/PJ/2015', 'WP Badan omzet > Rp4,8 Miliar s.d. Rp50 Miliar', 'PKP Fasilitas (tarif 11%) + PKP Non-Fasilitas (tarif 22%)', 'Penetapan Beban Pajak Terutang']
      ],
      caption: 'Tabel 7.1: Matriks perbandingan instrumen kredit pajak, angsuran tahun berjalan, dan fasilitas insentif PPh Badan.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: PPh 24, PPh 25, OPPT, & Insentif 31A/31E'
    },
    {
      kind: 'formula',
      text: `\\text{BKMKPLN}_i = \\frac{\\text{Penghasilan LN}_i}{\\text{Penghasilan Kena Pajak Total}} \\times \\text{Total PPh Terutang di Indonesia}
\\text{Kredit PPh 24 Diakui}_i = \\min(\\text{Pajak Dibayar di LN}_i, \\text{BKMKPLN}_i)
\\text{Dasar Angsuran PPh 25} = \\text{PPh Terutang SPT Lalu} - (\\text{PPh 21} + \\text{PPh 22} + \\text{PPh 23} + \\text{PPh 24})
\\text{Angsuran Bulanan PPh 25} = \\frac{\\text{Dasar Angsuran}}{12}
\\text{PPh 25 OPPT}_k = 0,75\\% \\times \\text{Peredaran Bruto Bulanan Outlet}_k
\\text{Pengurang Neto Tax Allowance} = 5\\% \\times \\text{Nilai Investasi Aktiva Tetap} \\quad (\\text{selama 6 tahun})
\\text{PKP Fasilitas 31E} = \\frac{\\text{Rp}4.800.000.000}{\\text{Peredaran Bruto Total}} \\times \\text{PKP Total}
\\text{Total PPh Terutang 31E} = (11\\% \\times \\text{PKP Fasilitas}) + (22\\% \\times [\\text{PKP Total} - \\text{PKP Fasilitas}])`,
      note: 'Kerugian usaha di luar negeri tidak boleh digabungkan dengan laba dalam negeri (isolated loss). Fasilitas Pasal 31E gugur sepenuhnya bila peredaran bruto tahunan melebihi Rp50 Miliar.'
    },
    {
      kind: 'h2',
      text: 'Studi Kasus Komprehensif (8 Worked Practice Cases)'
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 1: PPh Pasal 24 WP Badan Multi-Negara (PT Global Nusantara)',
      prompt: 'PT Global Nusantara (WP Badan Dalam Negeri) pada Tahun Pajak 2025 memperoleh penghasilan neto usaha di dalam negeri Rp4.000.000.000. Selain itu, perusahaan memiliki cabang di Negara A dengan laba neto Rp1.000.000.000 (tarif pajak Negara A 30% = Rp300.000.000) dan di Negara B dengan laba neto Rp1.000.000.000 (tarif pajak Negara B 15% = Rp150.000.000). Tidak terdapat akumulasi rugi fiskal. Tarif PPh Badan domestik berlaku 22%. Hitung kredit pajak PPh Pasal 24 yang diperkenankan untuk masing-masing negara dan total kredit yang sah!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Penghitungan Total Penghasilan Kena Pajak (Worldwide Income)**:\nTotal PKP = Rp4.000.000.000 (DN) + Rp1.000.000.000 (Negara A) + Rp1.000.000.000 (Negara B) = **Rp6.000.000.000**.',
            '**2. Penghitungan Total PPh Terutang di Indonesia**:\nTotal PPh Terutang = 22% × Rp6.000.000.000 = **Rp1.320.000.000**.',
            '**3. Batas Maksimum Kredit Pajak Luar Negeri (BKMKPLN) per Negara**:\n- **Negara A**:\n  $\\text{BKMKPLN}_A = \\frac{\\text{Rp}1.000.000.000}{\\text{Rp}6.000.000.000} \\times \\text{Rp}1.320.000.000 = \\mathbf{Rp220.000.000}$.\n  Pajak riil di Negara A = Rp300.000.000. Karena pajak riil > BKMKPLN, maka kredit pajak yang diakui adalah **Rp220.000.000** _(sisa Rp80.000.000 hangus dan tidak boleh dibebankan)_.\n- **Negara B**:\n  $\\text{BKMKPLN}_B = \\frac{\\text{Rp}1.000.000.000}{\\text{Rp}6.000.000.000} \\times \\text{Rp}1.320.000.000 = \\mathbf{Rp220.000.000}$.\n  Pajak riil di Negara B = Rp150.000.000. Karena pajak riil < BKMKPLN, maka kredit pajak yang diakui adalah seluruh pajak riil = **Rp150.000.000**.',
            '**4. Total Kredit Pajak PPh Pasal 24 yang Diperkenankan**:\nTotal Kredit = Rp220.000.000 + Rp150.000.000 = **Rp370.000.000**.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 2: PPh Pasal 24 Wajib Pajak Orang Pribadi (Tuan Sanjaya)',
      prompt: 'Tuan Sanjaya (status kawin dengan 1 tanggungan / K/1) memperoleh penghasilan neto dalam negeri selama tahun 2025 sebesar Rp400.000.000 dan dividen dari investasi saham di Negara Z sebesar Rp100.000.000 (dipotong pajak di Negara Z dengan tarif 20% = Rp20.000.000). PTKP K/1 adalah Rp63.000.000. Hitung PPh Pasal 17 terutang dan batas maksimum kredit PPh 24 yang dapat dikreditkan di Indonesia!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Penghasilan Neto Total (Gabungan)**: Rp400.000.000 + Rp100.000.000 = **Rp500.000.000**.',
            '**2. Penghasilan Kena Pajak (PKP)**: Rp500.000.000 - Rp63.000.000 (PTKP K/1) = **Rp437.000.000**.',
            '**3. PPh Terutang Tarif Pasal 17 ayat (1) huruf a UU PPh jo. UU HPP**:\n- Lapisan 1 (s.d. Rp60 Juta @ 5%): 5% × Rp60.000.000 = Rp3.000.000\n- Lapisan 2 (> Rp60 Juta s.d. Rp250 Juta @ 15%): 15% × Rp190.000.000 = Rp28.500.000\n- Lapisan 3 (> Rp250 Juta s.d. Rp437 Juta @ 25%): 25% × Rp187.000.000 = Rp46.750.000\n- **Total PPh Terutang** = Rp3.000.000 + Rp28.500.000 + Rp46.750.000 = **Rp78.250.000**.',
            '**4. Batas Maksimum Kredit Pajak Luar Negeri (BKMKPLN) Negara Z**:\n$\\text{BKMKPLN} = \\frac{\\text{Rp}100.000.000}{\\text{Rp}437.000.000} \\times \\text{Rp}78.250.000 = \\mathbf{Rp17.906.178}$.',
            '**5. Penentuan Kredit PPh 24 yang Diakui**:\nPajak dipotong di Negara Z (Rp20.000.000) > BKMKPLN (Rp17.906.178).\nMaka kredit pajak PPh Pasal 24 yang diakui pada SPT Tahunan Tuan Sanjaya adalah **Rp17.906.178** _(selisih Rp2.093.822 hangus)_.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 3: Angsuran PPh Pasal 25 Badan Normal (PT Sumber Rezeki)',
      prompt: 'SPT Tahunan PPh Badan PT Sumber Rezeki Tahun Pajak 2025 melaporkan PPh Terutang sebesar Rp600.000.000. Kredit pajak tahun berjalan yang telah dipotong/dipungut pihak ketiga mencakup: PPh Pasal 22 = Rp50.000.000, PPh Pasal 23 = Rp70.000.000, dan PPh Pasal 24 = Rp120.000.000. Hitung dasar angsuran dan besarnya angsuran PPh Pasal 25 yang wajib disetor sendiri setiap bulan untuk Tahun Pajak 2026!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Identifikasi Total Kredit Pajak Tahun Pajak 2025**:\nTotal Kredit = PPh 22 (Rp50.000.000) + PPh 23 (Rp70.000.000) + PPh 24 (Rp120.000.000) = **Rp240.000.000**.',
            '**2. Penghitungan Dasar Angsuran PPh Pasal 25**:\nDasar Angsuran = PPh Terutang SPT Lalu - Total Kredit Pajak\nDasar Angsuran = Rp600.000.000 - Rp240.000.000 = **Rp360.000.000**.',
            '**3. Penghitungan Angsuran Bulanan PPh Pasal 25 Tahun 2026**:\n$\\text{Angsuran Bulanan} = \\frac{\\text{Rp}360.000.000}{12} = \\mathbf{Rp30.000.000 \\text{ per bulan}}$.',
            '**4. Ketentuan Penyetoran & Pelaporan**:\nAngsuran Rp30.000.000 wajib disetor paling lambat tanggal 15 bulan berikutnya melalui pembuatan kode billing Coretax. Validasi NTPN pada Surat Setoran Pajak (SSP) secara otomatis terakui sebagai pelaporan SPT Masa PPh 25.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 4: Angsuran PPh Pasal 25 Masa Awal Tahun (Januari-Februari Rollover)',
      prompt: 'Melanjutkan data PT Sumber Rezeki pada Kasus 3, perusahaan baru menyampaikan SPT Tahunan PPh Badan Tahun Pajak 2025 pada tanggal 28 April 2026. Angsuran PPh Pasal 25 Masa Pajak Desember 2025 tercatat sebesar Rp25.000.000. Berapa besarnya angsuran PPh Pasal 25 yang wajib dibayar perusahaan untuk Masa Pajak Januari, Februari, dan Maret 2026, serta mulai kapan angsuran baru Rp30.000.000 diberlakukan?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Dasar Hukum Transisi (Pasal 229 PMK 81/2024)**:\nUntuk bulan-bulan sebelum batas waktu penyampaian SPT Tahunan PPh (Masa Januari s.d. Maret bagi WP Badan yang menyampaikan SPT di bulan April), besarnya angsuran PPh 25 adalah sama dengan besarnya angsuran PPh 25 Masa Pajak terakhir dari Tahun Pajak sebelumnya (Masa Desember).',
            '**2. Besaran Angsuran Masa Januari, Februari, dan Maret 2026**:\nMengikuti nilai angsuran Masa Desember 2025, yaitu sebesar **Rp25.000.000 per bulan**.',
            '**3. Mulai Berlakunya Angsuran Baru**:\nAngsuran hasil perhitungan SPT Tahunan 2025 (sebesar **Rp30.000.000 per bulan**) mulai berlaku untuk Masa Pajak April 2026 (bulan disampaikannya SPT Tahunan).'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 5: Angsuran PPh Pasal 25 WP OPPT Multi-Gerai (Tuan Heru)',
      prompt: 'Tuan Heru adalah pedagang pakaian grosir dan eceran (WP OPPT) yang memiliki tempat tinggal di Jakarta Selatan. Tuan Heru memiliki 3 lokasi usaha ritel terpisah:\n1. Toko Pusat di Pasar Tanah Abang (Peredaran bruto Januari 2026 = Rp100.000.000)\n2. Gerai Cabang 1 di Mangga Dua (Peredaran bruto Januari 2026 = Rp60.000.000)\n3. Gerai Cabang 2 di Thamrin City (Peredaran bruto Januari 2026 = Rp40.000.000)\nHitung kewajiban PPh Pasal 25 OPPT Tuan Heru untuk Masa Pajak Januari 2026 dan jelaskan sifat pembayarannya pada akhir tahun!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Dasar Regulasi (Pasal 235 & 236 PMK 81/2024)**:\nWajib Pajak Orang Pribadi Pengusaha Tertentu (WP OPPT) dikenakan angsuran PPh Pasal 25 sebesar 0,75% dari peredaran bruto bulanan per masing-masing tempat usaha.',
            '**2. Penghitungan Angsuran per Tempat Usaha**:\n- Toko Pusat (Tanah Abang): 0,75% × Rp100.000.000 = **Rp750.000**\n- Gerai Cabang 1 (Mangga Dua): 0,75% × Rp60.000.000 = **Rp450.000**\n- Gerai Cabang 2 (Thamrin City): 0,75% × Rp40.000.000 = **Rp300.000**',
            '**3. Total Pembayaran Masa Januari 2026**:\nTotal PPh 25 OPPT = Rp750.000 + Rp450.000 + Rp300.000 = **Rp1.500.000**.',
            '**4. Sifat Pembayaran & Rekonsiliasi SPT Tahunan**:\nPembayaran PPh 25 OPPT 0,75% bersifat **TIDAK FINAL**. Seluruh setoran bulanan di gerai pusat maupun cabang menjadi kredit pajak pelunasan pajak di muka (Kredit PPh 28) dalam Formulir 1770 SPT Tahunan PPh Orang Pribadi Tuan Heru untuk diperhitungkan terhadap PPh terutang tarif umum Pasal 17.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 6: Fasilitas Tax Allowance 30% Pasal 31A UU PPh (PT Industri Maju)',
      prompt: 'PT Industri Maju melakukan penanaman modal baru pada sektor industri kimia hilir di kawasan industri dengan merealisasikan investasi aktiva tetap mesin pabrik baru senilai Rp10.000.000.000. Perusahaan telah mengantongi surat keputusan persetujuan fasilitas Tax Allowance berdasarkan PP No. 78 Tahun 2019 jo. PMK No. 81 Tahun 2024. Hitung total fasilitas pengurangan penghasilan neto dan alokasi pembebanan pengurang fiskal setiap tahunnya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Dasar Regulasi (Pasal 408 PMK 81/2024)**:\nFasilitas Tax Allowance memberikan pengurangan penghasilan neto sebesar 30% dari nilai penanaman modal pada aktiva tetap berwujud termasuk tanah.',
            '**2. Penghitungan Total Pengurang Neto Fiskal**:\nTotal Fasilitas = 30% × Rp10.000.000.000 = **Rp3.000.000.000**.',
            '**3. Alokasi Pembebanan per Tahun Pajak**:\nSesuai ketentuan, fasilitas dibebankan selama 6 (enam) tahun berturut-turut masing-masing sebesar 5% per tahun:\n$\\text{Pengurang Neto Tahunan} = 5\\% \\times \\text{Rp}10.000.000.000 = \\mathbf{Rp500.000.000 \\text{ per tahun}}$.',
            '**4. Dampak Fiskal**:\nSetiap tahun selama 6 tahun pajak berturut-turut, PT Industri Maju melakukan penyesuaian fiskal negatif sebesar Rp500.000.000 dalam SPT Tahunan 1771, sehingga menurunkan Penghasilan Kena Pajak secara signifikan.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 7: Fasilitas Pengurangan Tarif Pasal 31E Penuh (PT Anugerah Gemilang)',
      prompt: 'PT Anugerah Gemilang memperoleh peredaran bruto pada Tahun Pajak 2025 sebesar Rp3.000.000.000 dengan Penghasilan Kena Pajak (PKP) sebesar Rp300.000.000. Hitung besarnya PPh Badan terutang dengan fasilitas Pasal 31E UU PPh!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Evaluasi Batas Peredaran Bruto**:\nPeredaran bruto perusahaan adalah Rp3.000.000.000, berada di bawah batas ambang Rp4.800.000.000. Dengan demikian, perseroan berhak memperoleh **fasilitas pengurangan tarif 50% atas SELURUH Penghasilan Kena Pajak (Fasilitas Penuh)**.',
            '**2. Penentuan Tarif Efektif**:\nTarif Efektif = 50% × Tarif Normal Pasal 17 (22%) = **11%**.',
            '**3. Penghitungan PPh Badan Terutang**:\n$\\text{PPh Terutang} = 11\\% \\times \\text{Rp}300.000.000 = \\mathbf{Rp33.000.000}$.',
            '**4. Catatan Efisiensi Fiskal**:\nTanpa fasilitas Pasal 31E, PPh terutang adalah 22% × Rp300.000.000 = Rp66.000.000. Fasilitas Pasal 31E memberikan penghematan pajak riil sebesar Rp33.000.000.'
          ]
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Kasus 8: Integrasi Komprehensif Persiapan UTS (PT Cemerlang Abadi)',
      prompt: 'PT Cemerlang Abadi (WP Badan Dalam Negeri) menyajikan data keuangan fiskal Tahun Pajak 2025:\n- Peredaran Bruto Total: Rp30.000.000.000\n- Penghasilan Kena Pajak (PKP): Rp3.000.000.000\n- Kredit Pajak PPh Pasal 22 (Impor/Belanja BUMN): Rp100.000.000\n- Kredit Pajak PPh Pasal 23 (Sewa & Jasa Teknik): Rp80.000.000\n- Kredit Pajak PPh Pasal 24 (Cabang Luar Negeri): Rp120.000.000\n- Angsuran PPh Pasal 25 yang telah dibayar selama tahun 2025: Rp240.000.000 (12 bulan @ Rp20.000.000)\n\nSelesaikan langkah komprehensif:\n1. Hitung PPh Terutang Tahun Pajak 2025 dengan fasilitas Pasal 31E proporsional.\n2. Hitung PPh yang Kurang Dibayar Sendiri (Dasar Angsuran).\n3. Hitung PPh Kurang Bayar Akhir Tahun (PPh Pasal 29).\n4. Hitung besaran angsuran bulanan PPh Pasal 25 untuk Tahun Pajak 2026!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Penghitungan PPh Terutang Fasilitas Pasal 31E Proporsional (Omzet Rp30 Miliar)**:\n- **Porsi PKP Mendapat Fasilitas**:\n  $\\text{PKP Fasilitas} = \\frac{\\text{Rp}4.800.000.000}{\\text{Rp}30.000.000.000} \\times \\text{Rp}3.000.000.000 = \\mathbf{Rp480.000.000}$.\n- **Porsi PKP Tidak Mendapat Fasilitas**:\n  $\\text{PKP Non-Fasilitas} = \\text{Rp}3.000.000.000 - \\text{Rp}480.000.000 = \\mathbf{Rp2.520.000.000}$.\n- **Penghitungan Pajak Terutang**:\n  PPh Fasilitas = 11% × Rp480.000.000 = Rp52.800.000\n  PPh Non-Fasilitas = 22% × Rp2.520.000.000 = Rp554.400.000\n  **Total PPh Badan Terutang** = Rp52.800.000 + Rp554.400.000 = **Rp607.200.000**.',
            '**2. Penghitungan PPh Kurang Dibayar Sendiri (Dasar Angsuran PPh 25)**:\nTotal Kredit Pihak Ketiga = PPh 22 (Rp100.000.000) + PPh 23 (Rp80.000.000) + PPh 24 (Rp120.000.000) = **Rp300.000.000**.\nDasar Angsuran = PPh Terutang - Total Kredit Pajak\nDasar Angsuran = Rp607.200.000 - Rp300.000.000 = **Rp307.200.000**.',
            '**3. Penghitungan PPh Kurang Bayar Akhir Tahun (PPh Pasal 29)**:\nPPh Pasal 29 = Dasar Angsuran - Setoran Angsuran PPh 25 Tahun 2025\nPPh Pasal 29 = Rp307.200.000 - Rp240.000.000 = **Rp67.200.000**.\n_(Wajib dilunasi sebelum SPT Tahunan PPh Badan disampaikan, paling lambat 30 April 2026)._',
            '**4. Penetapan Angsuran Bulanan PPh Pasal 25 Tahun Pajak 2026**:\n$\\text{Angsuran PPh 25 (2026)} = \\frac{\\text{Rp}307.200.000}{12} = \\mathbf{Rp25.600.000 \\text{ per bulan}}$.\n_(Mulai disetorkan untuk Masa Pajak disampaikannya SPT Tahunan, sedangkan Masa Januari-Maret menggunakan nominal Masa Desember 2025 yaitu Rp20.000.000/bulan)._'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Toolkit Ujian Mahasiswa: Jebakan Klasik & Strategi Menjawab UTS'
    },
    {
      kind: 'table',
      headers: ['Parameter Pembeda', 'Wajib Pajak Orang Pribadi Pengusaha Tertentu (WP OPPT)', 'Skema PPh Final UMKM (PP 20/2026 jo. PP 55/2022)'],
      rows: [
        ['Dasar Hukum Positif', 'PMK 81/2024 Pasal 235 & 236', 'PP 20/2026 jo. PP 55/2022'],
        ['Tarif Pemajakan', '0,75% dari peredaran bruto bulanan per tempat usaha', '0,5% dari peredaran bruto bulanan'],
        ['Fasilitas Bebas Omzet', 'TIDAK ADA fasilitas omzet bebas pajak', 'Bebas pajak s.d. omzet kumulatif Rp500.000.000/tahun (khusus WP OP)'],
        ['Sifat Pembayaran', 'TIDAK FINAL (KREDIT PAJAK Pasal 28)', 'FINAL (Rampung, tidak dapat dikreditkan)'],
        ['Mekanisme Akhir Tahun', 'Dihitung kembali dengan tarif umum Pasal 17 UU PPh; seluruh setoran 0,75% jadi kredit', 'Penghasilan dilaporkan pada lampiran penghasilan final formulir SPT']
      ],
      caption: 'Tabel 7.2: Matriks perbandingan fundamental skema WP OPPT vs PPh Final UMKM.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Daftar Jebakan Klasik Ujian Tengah Semester (Exam Traps)',
      text: '1. Jebakan Kerugian Luar Negeri pada PPh 24:\n- Jebakan Soal: Soal menyajikan PT X memiliki laba dalam negeri Rp1 Miliar dan menderita rugi cabang di luar negeri Rp300 Juta.\n- Perangkap: Mahasiswa mengurangkan kerugian luar negeri sehingga PKP dihitung Rp700 Juta.\n- Solusi Benar: Berdasarkan asas pemajakan internasional, kerugian luar negeri DILARANG DIGABUNG. PKP di Indonesia tetap utuh Rp1.000.000.000.\n\n2. Jebakan Batasan Omzet Rp50 Miliar Fasilitas Pasal 31E:\n- Jebakan Soal: PT Y membukukan omzet Rp52 Miliar, apakah berhak atas tarif 11% atas omzet s.d. Rp4,8 Miliar?\n- Solusi Benar: TIDAK BERHAK SAMA SEKALI. Syarat mutlak Pasal 31E adalah peredaran bruto kumulatif tidak melebihi Rp50 Miliar. Jika omzet > Rp50 Miliar, seluruh PKP wajib dikenai tarif normal 22%.\n\n3. Jebakan Angsuran Awal Tahun PPh 25 (Rollover Masa Transisi):\n- Jebakan Soal: Kapan hasil perhitungan angsuran PPh 25 baru dari SPT Tahunan 2025 mulai berlaku?\n- Solusi Benar: Mulai berlaku pada bulan disampaikannya SPT Tahunan. Untuk Masa Januari dan Februari (atau Masa Januari s.d. Maret bagi WP Badan), besarnya angsuran WAJIB MENGIKUTI Masa Desember tahun pajak sebelumnya.\n\n4. Jebakan Sifat Pajak WP OPPT:\n- Jebakan Soal: Apakah setoran 0,75% per gerai bagi pedagang eceran bersifat final?\n- Solusi Benar: BUKAN FINAL. Angsuran 0,75% adalah cicilan pelunasan pajak di muka (Kredit PPh 28) yang dapat dikreditkan pada SPT Tahunan Orang Pribadi Formulir 1770.'
    },
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Per-Country Limitation Mutlak**: Batas maksimum kredit PPh 24 wajib dihitung secara terpisah untuk masing-masing negara sumber penghasilan. Dilarang menggabungkan (pooling) pajak dari berbagai negara.',
        '**Pajak Luar Negeri Lebih Hangus**: Kelebihan pajak yang dibayar di luar negeri dibanding batas BKMKPLN tidak dapat direstitusi, tidak dapat dikompensasikan ke tahun depan, dan dilarang dibebankan sebagai biaya fiskal.',
        '**Masa Transisi PPh 25 (Pasal 229 PMK 81/2024)**: Sebelum SPT Tahunan baru dilaporkan, angsuran bulanan tahun berjalan sama dengan angsuran Masa Desember tahun sebelumnya.',
        '**WP OPPT Tarif 0,75% Bersifat Kredit**: PPh 25 OPPT dikenakan per masing-masing tempat usaha yang berbeda domisili, dan seluruhnya merupakan kredit pajak di SPT Tahunan.',
        '**Fasilitas Pasal 31E Otomatis Berdasarkan Omzet**: Diskon 50% tarif PPh Badan berlaku otomatis bagi WP Badan dalam negeri dengan omzet kumulatif sampai dengan Rp50 Miliar (penuh untuk omzet s.d. Rp4,8 Miliar, proporsional untuk omzet antara Rp4,8 Miliar s.d. Rp50 Miliar).'
      ]
    }
  ]
};
