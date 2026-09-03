import type { Reading } from '../../../types';
import { CASE_NATURA_TER_CONCEPT } from '../pjk2PracticeCases';

const SVG_TER_CATEGORIES = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="terA" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="terB" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="terC" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk9)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">SKEMA TARIF EFEKTIF RATA-RATA (TER) PPH PASAL 21 TERBARU (PP 58/2023 &amp; PMK 168/2023)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">SKEMA TER PPH 21</text>

  <!-- 3 TER Categories Grid -->
  <!-- 1. TER A -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="175" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#terA)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10.5" font-weight="800" text-anchor="middle">TER KATEGORI A</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="56" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">Status PTKP: TK/0, TK/1, K/0</text>
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="7.5">• TK/0 (Rp 54 jt), TK/1 &amp; K/0 (Rp 58,5 jt)</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="7.5">• Gaji s.d. Rp 5,4 Juta/bln →<tspan class="text-accent-green" fill="#34d399" font-weight="700">Tarif TER 0%</tspan></text>
    <text class="svg-text" x="14" y="114" fill="#cbd5e1" font-size="7.5">• Tarif berjenjang 0,25% s.d. 34% sesuai tabel</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="7.5">• Diterapkan masa Januari s.d. November</text>
    <rect class="svg-badge-blue" x="14" y="142" width="237" height="22" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="157" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">PPh 21 Bln = Penghasilan Bruto × Tarif TER</text>
  </g>

  <!-- 2. TER B -->
  <g transform="translate(318, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="175" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#terB)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="10.5" font-weight="800" text-anchor="middle">TER KATEGORI B</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="56" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">Status PTKP: TK/2, TK/3, K/1, K/2</text>
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="7.5">• TK/2 &amp; K/1 (Rp 63 jt), TK/3 &amp; K/2 (Rp 67,5 jt)</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="7.5">• Gaji s.d. Rp 6,2 Juta/bln →<tspan class="text-accent-green" fill="#34d399" font-weight="700">Tarif TER 0%</tspan></text>
    <text class="svg-text" x="14" y="114" fill="#cbd5e1" font-size="7.5">• Tarif berjenjang 0,25% s.d. 34% sesuai tabel</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="7.5">• Menampung pegawai berkeluarga tanggungan 1-2</text>
    <rect class="svg-badge-green" x="14" y="142" width="237" height="22" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="157" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Simulasi Sederhana Slip Gaji Bulanan</text>
  </g>

  <!-- 3. TER C -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="175" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#terC)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="132" y="20" fill="#a78bfa" font-size="10.5" font-weight="800" text-anchor="middle">TER KATEGORI C</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="132" y="56" fill="#a78bfa" font-size="8.5" font-weight="700" text-anchor="middle">Status PTKP: K/3 (Maksimal)</text>
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="7.5">• K/3 Kawin Tanggungan 3 (Rp 72 Juta)</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="7.5">• Gaji s.d. Rp 6,6 Juta/bln →<tspan class="text-accent-green" fill="#34d399" font-weight="700">Tarif TER 0%</tspan></text>
    <text class="svg-text" x="14" y="114" fill="#cbd5e1" font-size="7.5">• Tarif berjenjang 0,25% s.d. 34% sesuai tabel</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="7.5">• Batas PTKP tanggungan penuh kepala keluarga</text>
    <rect class="svg-badge-purple" x="14" y="142" width="237" height="22" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="132" y="157" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Tunjangan PTKP Maksimum</text>
  </g>

  <!-- Bottom December True-Up Banner -->
  <g transform="translate(35, 260)">
    <rect class="svg-subcard" x="0" y="0" width="830" height="52" rx="8" fill="#1e293b" stroke="#fbbf24"/>
    <text class="text-accent-amber" x="14" y="20" fill="#fbbf24" font-size="9" font-weight="800">MEKANISME PERHITUNGAN MASA PAJAK DESEMBER (TRUE-UP AKHIR TAHUN):</text>
    <text class="svg-text" x="14" y="38" fill="#cbd5e1" font-size="7.5">
      Khusus masa Desember, hitung PPh 21 Setahun menggunakan Tarif Progresif Pasal 17 ayat (1) huruf a UU PPh (5% s.d. 35%), lalu dikurangi total PPh 21 yang sudah dipotong masa Jan-Nov dengan TER.
    </text>
  </g>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Konsep Pemotongan PPh 21/26 Terbaru (PP 58/2023 & PMK 168/2023) & Pajak Natura (PMK 66/2023)',
  ref: 'PP 58/2023 | PMK 168/2023 Petunjuk Teknis PPh 21 | PMK 66/2023 Pemajakan Natura & Kenikmatan',
  intro: 'TM 9 membahas reformasi regulasi pemotongan PPh Pasal 21 yang berlaku efektif 2024: pengenalan metode Tarif Efektif Rata-Rata (TER) Bulanan (Kategori A, B, dan C) serta TER Harian untuk mempermudah pemotongan masa pajak Januari sampai November, rekalkulasi menggunakan tarif Pasal 17 ayat (1) huruf a UU HPP pada masa pajak Desember, serta pergeseran paradigma pemajakan imbalan non-tunai (Natura dan Kenikmatan) menurut PMK No. 66/2023.',
  objectives: [
    'Mengklasifikasikan status PTKP karyawan ke dalam TER Kategori A, Kategori B, atau Kategori C.',
    'Menerapkan skema pemotongan TER bulanan pada masa Januari s/d November (PPh 21 = Bruto × % TER).',
    'Menjelaskan pengecualian objek pajak natura (makanan bersama, daerah tertentu, bingkisan hari raya).',
    'Menghitung nilai kenikmatan fasilitas mobil dinas dan perumahan yang menjadi objek PPh Pasal 21.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 9.1: Klasifikasi Tarif Efektif Rata-Rata (TER) PPh 21 berdasarkan Status PTKP (PP 58/2023).',
      svg: SVG_TER_CATEGORIES
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 21 ayat (1) & (5) UU PPh s.t.d.t.d UU HPP',
      text: '"Pasal 21 ayat (1): Pemotongan pajak atas penghasilan sehubungan dengan pekerjaan, jasa, atau kegiatan dengan nama dan dalam bentuk apa pun yang diterima atau diperoleh Wajib Pajak orang pribadi dalam negeri wajib dilakukan oleh pemberi kerja, bendahara pemerintah, dana pensiun, badan, dan penyelenggara kegiatan.\n\nPasal 21 ayat (5): Tarif pemotongan atas penghasilan sebagaimana dimaksud pada ayat (1) adalah tarif pajak sebagaimana dimaksud dalam Pasal 17 ayat (1) huruf a, kecuali diatur lain dengan Peraturan Pemerintah (menjadi dasar berlakunya skema TER PP No. 58 Tahun 2023)."'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: '📜 Ketentuan Regulasi: PP No. 58 Tahun 2023 & PMK No. 168/2023 (Skema TER PPh 21)',
      text: '"PP 58/2023 menetapkan Tarif Efektif Rata-Rata (TER) PPh 21 untuk menghitung pemotongan pajak masa Januari s.d. November:\n• TER Kategori A (PTKP TK/0, TK/1, K/0): Penghasilan bruto s/d Rp 5.400.000 tarif 0%, hingga 44 lapisan tarif (maks 34%);\n• TER Kategori B (PTKP TK/2, TK/3, K/1, K/2): Penghasilan bruto s/d Rp 6.200.000 tarif 0%, hingga 40 lapisan tarif (maks 34%);\n• TER Kategori C (PTKP K/3): Penghasilan bruto s/d Rp 6.600.000 tarif 0%, hingga 41 lapisan tarif (maks 34%).\nMasa Pajak Desember: Dilakukan rekalkulasi setahun menggunakan tarif progresif normal Pasal 17 ayat (1) huruf a UU HPP dikurangi seluruh PPh 21 yang telah dipotong pada masa Jan-Nov."'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Ketentuan Regulasi: PMK No. 66/PMK.03/2023 (Perlakuan Pajak atas Natura & Kenikmatan)',
      text: '"Berdasarkan UU HPP & PMK 66/2023, natura dan/atau kenikmatan merupakan objek PPh bagi penerima dan biaya pengurang bruto (deductible) bagi pemberi kerja, KECUALI 5 kelompok natura non-objek:\n1. Makanan dan minuman bagi seluruh pegawai di tempat kerja tanpa batasan nilai;\n2. Natura/kenikmatan di daerah tertentu (sarana tempat tinggal, kesehatan, pendidikan, transportasi);\n3. Natura/kenikmatan keharusan pelaksanaan pekerjaan (pakaian seragam, APD keselamatan, fasilitas cuci/laundry);\n4. Natura yang bersumber dari APBN, APBD, dan/atau APBDes;\n5. Natura dengan jenis dan batasan tertentu: bingkisan hari raya keagamaan (tanpa batas); bingkisan selain hari raya s.d. Rp 3 jt/tahun; peralatan kerja komputer/laptop/ponsel/pulsa (tanpa batas); fasilitas tempat tinggal bersama komunal (tanpa batas); fasilitas kendaraan bagi non-pemegang saham s.d. omzet rata-rata."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 9'
    },
    {
      kind: 'table',
      headers: ['Kategori TER Bulanan', 'Status Penghasilan Tidak Kena Pajak (PTKP)', 'Batas Penghasilan Bruto Tarif 0%', 'Jumlah Lapisan Tarif'],
      rows: [
        ['TER Kategori A', 'TK/0 (Rp 54 Jt), TK/1 (Rp 58,5 Jt), K/0 (Rp 58,5 Jt).', 'Gaji bruto s/d Rp 5.400.000 per bulan.', '44 Lapisan Tarif (0% s/d 34%).'],
        ['TER Kategori B', 'TK/2 (Rp 63 Jt), K/1 (Rp 63 Jt), TK/3 (Rp 67,5 Jt), K/2 (Rp 67,5 Jt).', 'Gaji bruto s/d Rp 6.200.000 per bulan.', '40 Lapisan Tarif (0% s/d 34%).'],
        ['TER Kategori C', 'K/3 (Rp 72 Jt - Menikah + 3 Tanggungan Anak/Orang Tua).', 'Gaji bruto s/d Rp 6.600.000 per bulan.', '41 Lapisan Tarif (0% s/d 34%).'],
        ['TER Harian', 'Pegawai tidak tetap dengan upah harian / borongan.', 'Upah s/d Rp 450.000 per hari bebas pajak (0%).', 'Upah > 450 rb s/d 2,5 jt = 0,5%; Upah > 2,5 jt = Tarif Ps 17.']
      ],
      caption: 'Tabel 9.0: Matriks pengelompokan TER PPh 21 menurut PP No. 58 Tahun 2023.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Mekanisme TER PPh 21 Jan-Nov vs Des'
    },
    {
      kind: 'formula',
      text: `\\text{Masa Pajak Januari s/d November}: \\quad \\text{PPh 21 Bulanan} = \\text{Penghasilan Bruto Sebulan} \\times \\% \\text{TER (Tabel PP 58/2023)}
\\text{Masa Pajak Desember (Rekalkulasi Setahun)}:
\\text{PPh 21 Desember} = [\\text{Tarif Progresif Pasal 17} \\times \\text{Penghasilan Kena Pajak Setahun}] - \\sum_{t=1}^{11} \\text{PPh 21 Terpotong Jan-Nov}`,
      note: 'TER bukan tarif pajak baru yang menambah beban pajak setahun; total PPh 21 yang dipotong dalam satu tahun pajak tetap SAMA PERSIS dengan perhitungan tarif normal Pasal 17 UU HPP.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penentuan Kategori TER dan PPh 21 Karyawan Baru',
      prompt: 'Seorang karyawan memiliki status K/0 (Menikah, belum memiliki anak) dengan penghasilan bruto Rp 8.000.000 per bulan. Tentukan kategori TER dan hitung pemotongan PPh 21 bulan Januari jika tarif TER untuk rentang Rp 7.500.001 - Rp 8.550.000 adalah 1,5%!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Penentuan Kategori TER**: Status K/0 (PTKP Rp 58.500.000) masuk dalam **TER Kategori A**.',
            '**Perhitungan PPh 21 Bulan Januari**: Penghasilan Bruto × % TER = Rp 8.000.000 × 1,5% = **Rp 120.000**.',
            '**Efisiensi Administrasi**: Bagian payroll tidak perlu lagi menghitung biaya jabatan dan PTKP bulanan pada masa Januari s/d November; perhitungan tersebut baru dilakukan pada masa pajak Desember.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 9'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Klasifikasi TER Kategori A, B, C', 'Penetapan kategori berdasarkan status kawin dan jumlah tanggungan PTKP.', 'Mampu mengkategorikan status TER pegawai dengan tepat.'],
        ['2', 'Skema Natura PMK 66/2023', 'Daftar natura yang dikecualikan dari objek pajak PPh 21.', 'Mampu membedakan natura kena pajak vs bebas pajak.'],
        ['3', 'Logika Pemajakan TER vs Pasal 17', 'Memahami bahwa TER adalah alat bantu pemotongan bulanan bukan tarif final.', 'Mampu menjelaskan sinkronisasi penghitungan tahunan PPh 21.']
      ],
      caption: 'Tabel 9.2: Peta penguasaan submateri TM 9 Perpajakan II.'
    },
    CASE_NATURA_TER_CONCEPT,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**PP 58/2023 Menyederhanakan Payroll**: Menghilangkan kerumitan kalkulasi biaya jabatan dan iuran pensiun setiap bulan di Jan-Nov; cukup mengalikan penghasilan bruto dengan persentase tabel TER.',
        '**Bingkisan Hari Raya Bebas Pajak**: Parsel lebaran, natal, atau tahun baru keagamaan untuk seluruh pegawai dikecualikan dari objek PPh 21 tanpa batasan nominal.',
        '**Fasilitas Tempat Tinggal Individual Kena Pajak**: Fasilitas sewa apartemen pribadi direksi/manajer merupakan objek PPh 21 natura yang dinilai berdasarkan harga sewa pasar wajar.'
      ]
    }
  ]
};
