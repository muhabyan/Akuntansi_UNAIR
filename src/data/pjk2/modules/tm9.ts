import type { Reading } from '../../../types';
import { CASE_NATURA_TER_CONCEPT } from '../pjk2PracticeCases';

const SVG_TER_CATEGORIES = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SKEMA TARIF EFEKTIF RATA-RATA (TER) PPH 21 (PP 58/2023 &amp; PMK 168/2023)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">TER KATEGORI A</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Status PTKP Karyawan):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• TK/0 (PTKP 54 Juta)</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• TK/1 &amp; K/0 (PTKP 58,5 Juta)</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tarif: 0% s/d 34% (44 lapisan)</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Gaji s/d 5,4 Juta = 0%</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">TER KATEGORI B</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Status PTKP Karyawan):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• TK/2 &amp; K/1 (PTKP 63 Juta)</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• TK/3 &amp; K/2 (PTKP 67,5 Juta)</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tarif: 0% s/d 34% (40 lapisan)</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Gaji s/d 6,2 Juta = 0%</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">TER KATEGORI C</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Status PTKP Karyawan):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• K/3 (PTKP 72 Juta)</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Menikah dengan 3 tanggungan</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tarif: 0% s/d 34% (41 lapisan)</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Gaji s/d 6,6 Juta = 0%</text>
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
