import type { Reading } from '../../../types';
import { CASE_PPH21_TER_DECEMBER_CALC } from '../pjk2PracticeCases';

const SVG_PPH21_SCENARIOS = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PEMOTONGAN PPH 21 BERBAGAI SUBJEK PENERIMA PENGHASILAN (PMK 168/2023)</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">PEGAWAI TETAP</text>
  <text x="97" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Kontrak / Permanen):</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Jan-Nov: Bruto × TER</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Des: Tarif Ps 17 setahun</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dikurangi Biaya Jabatan</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Form 1721-A1</text>

  <rect x="185" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="257" y="78" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">PEGAWAI TDK TETAP</text>
  <text x="257" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Upah Harian/Borongan):</text>
  <text x="257" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Upah s/d 450 rb/hari: 0%</text>
  <text x="257" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Upah > 450 rb - 2,5 jt: 0,5%</text>
  <text x="257" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bulanan: TER Bulanan</text>
  <text x="257" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Harian Lepas</text>

  <rect x="345" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="417" y="78" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">BUKAN PEGAWAI</text>
  <text x="417" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Dokter, Artis, Ahli):</text>
  <text x="417" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• DPP = 50% × Bruto</text>
  <text x="417" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dikalikan Tarif Ps 17</text>
  <text x="417" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dihitung per transaksi</text>
  <text x="417" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Jasa Tenaga Ahli</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a78bfa" font-size="10" font-weight="700" text-anchor="middle">UANG PESANGON</text>
  <text x="580" y="98" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Dibayar Sekaligus):</text>
  <text x="580" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• s/d 50 Juta: 0%</text>
  <text x="580" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 50 Jt s/d 100 Jt: 5%</text>
  <text x="580" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 100 Jt s/d 500 Jt: 15%</text>
  <text x="580" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">PPh Final Pesangon</text>
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
