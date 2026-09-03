import type { Reading } from '../../../types';
import { CASE_PPH21_TER_DECEMBER_CALC } from '../pjk2PracticeCases';

const SVG_PPH21_SCENARIOS = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="sc1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="sc2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="sc3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient>
    <linearGradient id="sc4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk10)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">4 KATEGORI PENERIMA PENGHASILAN PPH 21 (PMK 168/2023)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">SUBJEK PPH 21</text>

  <!-- 4 Subject Categories Grid -->
  <g transform="translate(35, 75)">
    <!-- 1. Pegawai Tetap -->
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#sc1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="97" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. PEGAWAI TETAP</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="97" y="53" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle">Skema: TER Bulanan + Ps 17 Des</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Menerima gaji teratur bulanan</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Berhak: Biaya Jabatan (5% maks Rp 500rb/bln atau Rp 6jt/thn)</text>
    <text class="svg-text" x="10" y="112" fill="#cbd5e1" font-size="7.5">• Berhak: Pengurang iuran pensiun</text>
    <text class="svg-text" x="10" y="126" fill="#cbd5e1" font-size="7.5">• Bukti Potong: Form 1721-A1</text>
    <rect class="svg-badge-blue" x="10" y="185" width="175" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Karyawan Kontrak &amp; Organik</text>
  </g>

  <g transform="translate(245, 75)">
    <!-- 2. Pegawai Tidak Tetap -->
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#sc2)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="97" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">2. PEGAWAI TIDAK TETAP</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="97" y="53" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">Skema: TER Harian / Bulanan</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Upah harian, mingguan, borongan</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Upah &lt; Rp 450rb/hari →TER 0%</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Upah Rp 450rb - Rp 2,5jt/hari →TER 0,5%</text>
    <text class="svg-text" x="10" y="124" fill="#cbd5e1" font-size="7.5">• Upah &gt; Rp 2,5 jt/hari →Tarif Ps 17</text>
    <rect class="svg-badge-green" x="10" y="185" width="175" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Pekerja Lepas / Buruh Harian</text>
  </g>

  <g transform="translate(455, 75)">
    <!-- 3. Bukan Pegawai -->
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#sc3)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="97" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">3. BUKAN PEGAWAI</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="53" fill="#fbbf24" font-size="8" font-weight="800" text-anchor="middle">Skema: Tarif Ps 17 × (50% × Bruto)</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Dokter, Notaris, Pengacara, Artis</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Dasar Pengenaan Pajak (DPP):</text>
    <text class="text-accent-amber" x="10" y="106" fill="#fbbf24" font-size="7.5" font-weight="700">  50% × Penghasilan Bruto</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• PMK 168: Dihitung per transaksi tanpa kumulatif berjenjang bulanan</text>
    <rect class="svg-badge-amber" x="10" y="185" width="175" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Tenaga Ahli &amp; Profesional Lepas</text>
  </g>

  <g transform="translate(665, 75)">
    <!-- 4. Dewan Komisaris / Peserta Kegiatan -->
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#sc4)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="97" y="20" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">4. DEWAN KOMISARIS / LAIN</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="97" y="53" fill="#a78bfa" font-size="8" font-weight="800" text-anchor="middle">Skema: Tarif Ps 17 × Bruto</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Honorarium Komisaris Non-Pegawai</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Peserta kegiatan seminar / workshop</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Mantan pegawai terima bonus jasa</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Penarikan dana pensiun pegawai</text>
    <rect class="svg-badge-purple" x="10" y="185" width="175" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="97" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Penghasilan Tidak Berkesinambungan</text>
  </g>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Kalkulasi Komprehensif PPh Pasal 21: Pegawai Tetap, Tidak Tetap, Bukan Pegawai, & Pesangon',
  ref: 'PMK 168/2023 | PP 68/2009 PPh Final Pesangon | Tarif Pasal 17 UU HPP No. 7/2021',
  intro: 'TM 10 membahas aplikasi matematis komprehensif pemotongan PPh Pasal 21 atas berbagai subjek penerima penghasilan: siklus lengkap Pegawai Tetap (TER Januari-November vs Rekalkulasi Masa Pajak Terakhir Desember), Pegawai Tidak Tetap (Upah harian vs upah bulanan), Tenaga Ahli / Bukan Pegawai (Dasar Pengenaan Pajak 50% dari bruto dikalikan tarif progresif Pasal 17 tanpa kumulatif), serta pemajakan PPh Final atas Uang Pesangon yang dibayarkan sekaligus.',
  objectives: [
    'Menghitung PPh Pasal 21 pegawai tetap setahun penuh termasuk tunjangan, lembur, dan bonus akhir tahun.',
    'Melakukan rekalkulasi masa pajak Desember dan menentukan PPh 21 kurang bayar atau lebih bayar.',
    'Menghitung PPh 21 Bukan Pegawai / Tenaga Ahli (DPP 50% × Bruto × Tarif Pasal 17).',
    'Menghitung PPh Final Uang Pesangon yang dibayarkan sekaligus menggunakan tarif berjenjang PP 68/2009.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 10.1: Skema Penghitungan PPh 21 untuk Pegawai Tetap, Pegawai Tidak Tetap, Bukan Pegawai, dan Pesangon.',
      svg: SVG_PPH21_SCENARIOS
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: PMK No. 168/PMK.03/2023 Pasal 10 & 11 (Bukan Pegawai & Pegawai Tidak Tetap)',
      text: '"1. Bukan Pegawai (Tenaga Ahli, Pengajar, Penulis, Agen Iklan, dll.):\n   Dasar Pengenaan Pajak (DPP) = 50% dari Penghasilan Bruto (Dihitung per transaksi dan tidak berlaku kumulatif berkesinambungan).\n   PPh 21 Terutang = Tarif Progresif Pasal 17 ayat (1) huruf a x (50% x Penghasilan Bruto).\n\n2. Pegawai Tidak Tetap / Tenaga Kerja Lepas Harian:\n   • Upah harian s/d Rp 450.000: TER Harian 0% (Bebas PPh 21);\n   • Upah harian > Rp 450.000 s/d Rp 2.500.000: TER Harian 0,5% dari Penghasilan Bruto Harian;\n   • Upah harian > Rp 2.500.000: Tarif Pasal 17 x (Upah Bruto Harian - [PTKP Tahunan / 360]);\n   • Apabila kumulatif upah sebulan > Rp 2.500.000 s/d Rp 10.000.000: PPh 21 = Tarif Pasal 17 x (Penghasilan Bruto Kumulatif - PTKP Kumulatif);\n   • Apabila kumulatif upah sebulan > Rp 10.000.000: Diterapkan TER Bulanan Kategori A/B/C sesuai status PTKP."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 10'
    },
    {
      kind: 'table',
      headers: ['Kategori Penerima Penghasilan', 'Dasar Pengenaan Pajak (DPP)', 'Tarif Pajak yang Dikenakan', 'Sifat Pemotongan Pajak'],
      rows: [
        ['Pegawai Tetap (Jan - Nov)', 'Penghasilan Bruto Bulanan.', 'Tarif Efektif Rata-Rata (TER Kategori A/B/C).', 'Tidak Final (Kredit Pajak).'],
        ['Pegawai Tetap (Desember)', 'Penghasilan Kena Pajak (Bruto - Biaya Jabatan - PTKP).', 'Tarif Progresif Pasal 17 UU HPP (5% s/d 35%).', 'Rekalkulasi Pajak Setahun.'],
        ['Bukan Pegawai (Dokter/Konsultan)', '50% dari Jumlah Penghasilan Bruto.', 'Tarif Progresif Pasal 17 UU HPP.', 'Tidak Final per Transaksi.'],
        ['Pesangon Dibayar Sekaligus', 'Jumlah Bruto Uang Pesangon.', 'Lapisan Tarif Final PP 68/2009 (0%, 5%, 15%, 25%).', 'Final Selesai (Tidak Masuk SPT Tahunan).'],
        ['Dewan Komisaris Non-Pegawai', 'Jumlah Honorarium Bruto.', 'Tarif Efektif Rata-Rata (TER Bulanan).', 'Tidak Final.']
      ],
      caption: 'Tabel 10.0: Matriks penghitungan PPh 21 menurut subjek penerima.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Lapisan Tarif Pasal 17 UU HPP & Pesangon'
    },
    {
      kind: 'formula',
      text: `\\text{Tarif Progresif Orang Pribadi (Pasal 17 ayat 1a UU HPP)}:
\\begin{cases}
5\\% & \\text{untuk PKP s/d Rp 60.000.000} \\\\
15\\% & \\text{untuk PKP di atas Rp 60.000.000 s/d Rp 250.000.000} \\\\
25\\% & \\text{untuk PKP di atas Rp 250.000.000 s/d Rp 500.000.000} \\\\
30\\% & \\text{untuk PKP di atas Rp 500.000.000 s/d Rp 5.000.000.000} \\\\
35\\% & \\text{untuk PKP di atas Rp 5.000.000.000}
\\end{cases}
\\text{PPh 21 Bukan Pegawai (PMK 168/2023)} = \\text{Tarif Pasal 17} \\times (50\\% \\times \\text{Penghasilan Bruto})`,
      note: 'Sesuai PMK 168/2023, dasar pengenaan pajak Bukan Pegawai dihitung 50% dari bruto per transaksi tanpa kumulatif, menyederhanakan perhitungan honorarium pembicara/dokter.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: PPh 21 Jasa Dokter Spesialis Non-Pegawai',
      prompt: 'dr. Hendra, Sp.A (Bukan Pegawai tetap RS) menerima fee jasa medis pasien dari Rumah Sakit Husada sebesar Rp 40.000.000 dalam satu bulan. Berapa PPh Pasal 21 yang dipotong Rumah Sakit Husada?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Dasar Pengenaan Pajak (DPP)**: 50% × Penghasilan Bruto = 50% × Rp 40.000.000 = **Rp 20.000.000**.',
            '**Perhitungan PPh Pasal 21**: DPP masuk lapisan pertama tarif Pasal 17 (s/d Rp 60 Jt) tarif 5%:\nPPh 21 = 5% × Rp 20.000.000 = **Rp 1.000.000**.',
            '**Kas yang Dibayarkan ke dr. Hendra**: Rp 40.000.000 - Rp 1.000.000 = **Rp 39.000.000** (Rumah Sakit wajib menerbitkan Bukti Potong Formulir 1721-VIII/BP-Bukan Pegawai).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 10'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kalkulasi Pegawai Tetap Setahun', 'Penghitungan gaji, tunjangan, premi, bonus, biaya jabatan, dan PTKP.', 'Mampu menyusun Formulir 1721-A1 pegawai tetap.'],
        ['2', 'Rekalkulasi Masa Desember', 'Perhitungan selisih pajak setahun dikurangi potongan Jan-Nov.', 'Mampu menyelesaikan kasus kurang bayar/lebih bayar Desember.'],
        ['3', 'Bukan Pegawai & Tenaga Ahli', 'Kalkulasi DPP 50% × Bruto × Tarif Pasal 17.', 'Mampu menghitung potongan PPh 21 dokter, arsitek, dan pengacara.'],
        ['4', 'PPh Final Pesangon PP 68/2009', 'Penerapan tarif berjenjang pesangon sekaligus (0%, 5%, 15%, 25%).', 'Mampu menghitung pajak pesangon karyawan pensiun.']
      ],
      caption: 'Tabel 10.2: Peta penguasaan submateri TM 10 Perpajakan II.'
    },
    CASE_PPH21_TER_DECEMBER_CALC,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Biaya Jabatan Maksimum Rp 6 Juta/Tahun**: Besarnya biaya jabatan adalah 5% dari penghasilan bruto, dibatasi setinggi-tingginya Rp 500.000 per bulan atau Rp 6.000.000 per tahun.',
        '**Bukan Pegawai Tanpa Kumulatif**: Sejak 2024 (PMK 168/2023), perhitungan Bukan Pegawai tidak lagi mengakumulasikan penghasilan sebelumnya; setiap transaksi langsung dikalikan 50% x tarif lapisannya.',
        '**Pesangon Lebih dari 2 Tahun Jadi PPh 21 Normal**: Jika uang pesangon dicicil pembayarannya melewati tahun ke-2, cicilan tahun ke-3 dan seterusnya tidak lagi dikenai tarif final PP 68/2009 melainkan tarif PPh 21 reguler.'
      ]
    }
  ]
};
