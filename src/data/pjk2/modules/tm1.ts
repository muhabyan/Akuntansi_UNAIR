import type { Reading } from '../../../types';
import { CASE_EXPENSE_DEDUCTIBILITY } from '../pjk2PracticeCases';

const SVG_DEDUCTIBILITY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="dedGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="nondedGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk1)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">KLASIFIKASI BEBAN FISKAL: DEDUCTIBLE (PASAL 6) VS NON-DEDUCTIBLE (PASAL 9 UU PPH)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TAX DEDUCTIBILITY</text>

  <!-- Left: Deductible Expense (Pasal 6) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#dedGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="10.5" font-weight="800">1. BIAYA 3M BOLEH DIKURANGKAN (PASAL 6 AYAT 1)</text>
    
    <text class="svg-text" x="16" y="50" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Prinsip 3M:</tspan> Mendapatkan, Menagih, &amp; Memelihara penghasilan usaha</text>
    <text class="svg-text" x="16" y="68" fill="#cbd5e1" font-size="8">• Gaji, upah, honorarium, bonus, &amp; tunjangan BPJS Ketenagakerjaan</text>
    <text class="svg-text" x="16" y="86" fill="#cbd5e1" font-size="8">• Beban bunga pinjaman perbankan untuk kegiatan operasional</text>
    <text class="svg-text" x="16" y="104" fill="#cbd5e1" font-size="8">• Biaya sewa kantor, penyusutan aset tetap fiskal, &amp; royalti paten</text>
    <text class="svg-text" x="16" y="122" fill="#cbd5e1" font-size="8">• Piutang nyata-nyata tak tertagih (syarat daftar nominatif terpenuhi)</text>
    <text class="svg-text" x="16" y="140" fill="#cbd5e1" font-size="8">• Biaya natura di daerah tertentu / natura wajib kerja (UU HPP &amp; PMK 66)</text>
    
    <rect class="svg-badge-green" x="16" y="175" width="363" height="30" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="197" y="194" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Mengurangi Penghasilan Bruto → PPh Terutang Lebih Rendah</text>
  </g>

  <!-- Right: Non-Deductible Expense (Pasal 9) -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#nondedGrad)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="16" y="20" fill="#f87171" font-size="10.5" font-weight="800">2. BIAYA TIDAK BOLEH DIKURANGKAN (PASAL 9 AYAT 1)</text>
    
    <text class="svg-text" x="16" y="50" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-red" fill="#f87171" font-weight="700">Pembagian Laba:</tspan> Dividen tunai kepada pemegang saham</text>
    <text class="svg-text" x="16" y="68" fill="#cbd5e1" font-size="8">• Biaya untuk kepentingan pribadi pemegang saham / keluarga direksi</text>
    <text class="svg-text" x="16" y="86" fill="#cbd5e1" font-size="8">• Pembentukan atau pemupukan dana cadangan (Kecuali bank &amp; asuransi)</text>
    <text class="svg-text" x="16" y="104" fill="#cbd5e1" font-size="8">• Pajak Penghasilan (PPh Badan itu sendiri tidak boleh jadi beban)</text>
    <text class="svg-text" x="16" y="122" fill="#cbd5e1" font-size="8">• Sanksi administrasi pajak: Bunga keterlambatan, denda, &amp; kenaikan SKP</text>
    <text class="svg-text" x="16" y="140" fill="#cbd5e1" font-size="8">• Biaya yang dikeluarkan untuk menghasilkan objek PPh Final / Bukan Objek</text>
    
    <rect class="svg-badge-red" x="16" y="175" width="363" height="30" rx="6" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="197" y="194" fill="#f87171" font-size="8" font-weight="700" text-anchor="middle">Wajib Dilakukan Koreksi Fiskal Positif (Menambah Laba Kena Pajak)</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Koreksi Fiskal Positif dilakukan atas biaya non-deductible yang sudah terlanjur dicatat di laporan laba rugi komersial.</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Konsep Dasar PPh, Subjek/Objek Pajak, & Biaya 3M (Deductible vs Non-Deductible)',
  ref: 'UU No. 7/2021 (UU HPP) | Pasal 4, 6, & 9 UU PPh | PMK No. 02/PMK.03/2010 Daftar Nominatif',
  intro: 'TM 1 membahas fondasi pemajakan penghasilan di Indonesia: klasifikasi subjek pajak dalam negeri vs luar negeri, pemilahan objek pajak (Objek Pajak Reguler, Objek PPh Final, dan Bukan Objek Pajak), prinsip Biaya 3M (Mendapatkan, Menagih, dan Memelihara penghasilan), serta evaluasi komparatif Deductible Expense (Pasal 6) vs Non-Deductible Expense (Pasal 9) yang memicu koreksi fiskal positif.',
  objectives: [
    'Mengklasifikasikan penghasilan: Objek PPh Umum, Objek PPh Final, dan Bukan Objek Pajak.',
    'Menganalisis kriteria Biaya 3M yang berhak menjadi pengurang penghasilan bruto (Pasal 6 UU PPh).',
    'Menguasai daftar biaya yang dilarang dikurangkan secara fiskal menurut Pasal 9 UU PPh.',
    'Menghitung penyesuaian koreksi fiskal positif atas biaya jamuan, sanksi pajak, dan prive.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Klasifikasi Beban Fiskal: Deductible Expense (Pasal 6) vs Non-Deductible Expense (Pasal 9).',
      svg: SVG_DEDUCTIBILITY
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 6 ayat (1) UU PPh (Deductible Expense)',
      text: '"Besarnya Penghasilan Kena Pajak bagi Wajib Pajak dalam negeri dan bentuk usaha tetap, ditentukan berdasarkan penghasilan bruto dikurangi biaya untuk mendapatkan, menagih, dan memelihara penghasilan (Biaya 3M), termasuk: a. biaya yang secara langsung atau tidak langsung berkaitan dengan kegiatan usaha, antara lain: 1. biaya pembelian bahan; 2. biaya berkenaan dengan pekerjaan atau jasa termasuk upah, gaji, honorarium, bonus, gratifikasi, dan tunjangan dalam bentuk uang; 3. bunga, sewa, dan royalti; 4. biaya perjalanan; 5. biaya pengolahan limbah; 6. premi asuransi; 7. biaya promosi dan penjualan; 8. biaya administrasi; dan 9. pajak kecuali Pajak Penghasilan; b. penyusutan dan amortisasi fiskal (Pasal 11 & 11A); c. iuran dana pensiun yang disahkan Menkeu; d. kerugian pengalihan harta perusahaan; e. kerugian selisih kurs; f. biaya penelitian & pengembangan di Indonesia; g. biaya beasiswa, magang, & pelatihan; h. piutang yang nyata-nyata tidak dapat ditagih; i. sumbangan penanggulangan bencana nasional; j. sumbangan litbang; k. sumbangan fasilitas pendidikan; l. sumbangan pembinaan olahraga; dan m. biaya pembangunan infrastruktur sosial."'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 9 ayat (1) UU PPh (Non-Deductible Expense)',
      text: '"Untuk menentukan besarnya Penghasilan Kena Pajak bagi Wajib Pajak dalam negeri dan bentuk usaha tetap tidak boleh dikurangkan: a. pembagian laba dengan nama dan dalam bentuk apapun seperti dividen; b. biaya yang dibebankan atau dikeluarkan untuk kepentingan pribadi pemegang saham, sekutu, atau anggota; c. pembentukan atau pemupukan dana cadangan, kecuali cadangan piutang tak tertagih bank/lembaga keuangan/asuransi; d. premi asuransi kesehatan, kecelakaan, jiwa, dwiguna, dan bea siswa yang dibayar oleh WP orang pribadi; e. penggantian atau imbalan sehubungan dengan pekerjaan atau jasa yang diberikan dalam bentuk natura/kenikmatan kecuali yang diatur khusus dalam PMK 66/2023; f. jumlah yang melebihi kewajaran yang dibayarkan kepada pihak yang mempunyai hubungan istimewa; g. harta yang dihibahkan, bantuan atau sumbangan, dan warisan; h. Pajak Penghasilan itu sendiri; i. gaji yang dibayarkan kepada anggota persekutuan, firma, atau CV yang modalnya tidak terbagi atas saham; j. sanksi administrasi berupa bunga, denda, dan kenaikan serta sanksi pidana perpajakan; dan k. pajak masukan yang tidak dapat dikreditkan karena faktur pajak cacat atau perolehan barang non-usaha."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 1'
    },
    {
      kind: 'table',
      headers: ['Kelompok Beban Komersial', 'Ketentuan Pasal UU PPh', 'Perlakuan Fiskal', 'Syarat Administratif Wajib'],
      rows: [
        ['Gaji, Tunjangan, & Bonus Pegawai', 'Pasal 6 ayat (1) huruf a', 'Deductible (Boleh Dikurangkan)', 'Telah dipotong PPh Pasal 21 dan dilaporkan di SPT Masa.'],
        ['Beban Entertainment / Jamuan Relasi', 'Pasal 6 jo PMK 02/2010', 'Deductible jika ada Daftar Nominatif; Non-Deductible jika tanpa daftar.', 'Wajib melampirkan Daftar Nominatif berisi nama relasi, posisi, dan jumlah.'],
        ['Sumbangan Bencana Alam / Litbang', 'Pasal 6 ayat (1) huruf i & j', 'Deductible (Boleh Dikurangkan)', 'Disalurkan melalui badan/lembaga yang ditunjuk pemerintah (BNPB/Kemensos).'],
        ['Pembagian Dividen / Laba', 'Pasal 9 ayat (1) huruf a', 'Non-Deductible (Koreksi Positif)', 'Dividen adalah distribusi laba neto, bukan biaya operasional.'],
        ['Sanksi Bunga & Denda STP Pajak', 'Pasal 9 ayat (1) huruf k', 'Non-Deductible (Koreksi Positif)', 'Sanksi hukum tidak boleh disubsidi melalui penghematan pajak.']
      ],
      caption: 'Tabel 1.0: Matriks evaluasi beban fiskal PPh Badan.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Penentuan Penghasilan Kena Pajak (PKP)'
    },
    {
      kind: 'formula',
      text: `\\text{Laba Komersial Bersih Sebelum Pajak} \\pm \\text{Koreksi Fiskal} = \\text{Penghasilan Kena Pajak (PKP)}
\\text{Koreksi Fiskal Positif} \\implies \\text{Menambah PKP (Beban Komersial } > \\text{ Beban Fiskal atau Pendapatan Kurang Catat)}
\\text{Koreksi Fiskal Negatif} \\implies \\text{Mengurangi PKP (Pendapatan PPh Final / Bukan Objek atau Beban Fiskal } > \\text{ Komersial)}`,
      note: 'Penghasilan yang dikenai PPh Final (Pasal 4 ayat 2) dan Bukan Objek Pajak (Pasal 4 ayat 3) wajib dikoreksi negatif dari laba komersial agar tidak dipajaki berganda.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Evaluasi Beban Premi Asuransi Pemegang Saham',
      prompt: 'Perusahaan membayar premi asuransi jiwa dan kesehatan untuk direktur utama yang juga merupakan pemegang saham pengendali sebesar Rp 50.000.000 per tahun. Premi tersebut tidak dimasukkan sebagai penghasilan di slip gaji direktur. Apakah beban tersebut deductible bagi perusahaan?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Ketentuan Pasal 9 ayat (1) huruf d UU PPh**: Premi asuransi kesehatan, kecelakaan, dan jiwa yang dibayar oleh Wajib Pajak untuk kepentingan pribadi pemegang saham atau keluarganya adalah **Non-Deductible Expense**.',
            '**Pengecualian**: Premi tersebut HANYA boleh dikurangkan oleh perusahaan jika premi tersebut digabungkan sebagai **tambahan penghasilan bruto** bagi pegawai yang dipotong PPh Pasal 21.',
            '**Kesimpulan**: Karena tidak dipotong PPh 21 pada slip gaji, perusahaan **WAJIB melakukan Koreksi Fiskal Positif sebesar Rp 50.000.000**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 1'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Subjek & Objek PPh', 'Kriteria SPDN vs SPLN dan pemisahan 3 kelompok objek pajak.', 'Mampu mengidentifikasi status pengenaan PPh.'],
        ['2', 'Prinsip Biaya 3M (Pasal 6)', 'Kriteria keterkaitan langsung beban dengan perolehan omzet.', 'Mampu menentukan pos beban yang berhak dikurangkan.'],
        ['3', 'Beban Non-Deductible (Pasal 9)', 'Daftar 11 larangan pengurang penghasilan bruto.', 'Mampu menghitung nilai koreksi fiskal positif di SPT 1771.']
      ],
      caption: 'Tabel 1.2: Peta penguasaan submateri TM 1 Perpajakan II.'
    },
    CASE_EXPENSE_DEDUCTIBILITY,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Daftar Nominatif adalah Nyawa Biaya Promosi**: Tanpa daftar nominatif resmi sesuai PMK 02/2010, pemeriksa pajak akan mendiskualifikasi 100% biaya entertainment dan promosi menjadi koreksi positif.',
        '**Dividen Antar-PT Bukan Objek Pajak**: Sejak berlakunya UU Cipta Kerja & UU HPP, dividen yang diterima oleh perseroan terbatas dalam negeri dari perseroan terbatas lain di Indonesia bukan lagi objek PPh (tanpa syarat kepemilikan 25%).',
        '**Sanksi Bunga STP Bukan Beban Usaha**: Sanksi administrasi pajak tidak pernah diakui sebagai biaya usaha karena negara tidak membiayai kelalaian kepatuhan Wajib Pajak.'
      ]
    }
  ]
};
