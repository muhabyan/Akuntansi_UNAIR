import type { Reading } from '../../../types';
import { CASE_DEPRECIATION_REVALUATION } from '../pjk2PracticeCases';

const SVG_DEPRECIATION_RATES = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TABEL TARIF PENYUSUTAN FISKAL HARTA BERWUJUD (PASAL 11 UU PPH)</text>
  
  <rect x="30" y="55" width="135" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">KELOMPOK 1</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Masa Manfaat: 4 Tahun</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Komputer, printer, HP</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Garis Lurus: 25%</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Saldo Menurun: 50%</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Aset Cepat Aus</text>

  <rect x="180" y="55" width="135" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="247" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">KELOMPOK 2</text>
  <text x="247" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Masa Manfaat: 8 Tahun</text>
  <text x="247" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Mobil dinas, truk, mesin</text>
  <text x="247" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Garis Lurus: 12,5%</text>
  <text x="247" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Saldo Menurun: 25%</text>
  <text x="247" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Kendaraan &amp; Mesin</text>

  <rect x="330" y="55" width="135" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="397" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">KELOMPOK 3 &amp; 4</text>
  <text x="397" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Manfaat: 16 &amp; 20 Thn</text>
  <text x="397" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Alat berat tambang (K3)</text>
  <text x="397" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Garis Lurus: 6,25% / 5%</text>
  <text x="397" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Saldo Menurun: 12,5% / 10%</text>
  <text x="397" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Aset Berat Berat</text>

  <rect x="480" y="55" width="170" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="565" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">BANGUNAN</text>
  <text x="565" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Permanen &amp; Non-Permanen:</text>
  <text x="565" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Permanen: 20 Thn (5% GL)</text>
  <text x="565" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Non-Permanen: 10 Thn (10% GL)</text>
  <text x="565" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• <tspan fill="#fca5a5" font-weight="700">Dilarang Saldo Menurun</tspan></text>
  <text x="565" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Hanya Garis Lurus</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Penyusutan & Amortisasi Fiskal, Penarikan Aset, & Revaluasi Aset Tetap',
  ref: 'Pasal 11 & 11A UU PPh | PMK 72/2023 | PMK 79/PMK.03/2008 Revaluasi Aset Tetap',
  intro: 'TM 4 membahas perhitungan beban penyusutan dan amortisasi menurut ketentuan perpajakan: pengelompokan masa manfaat harta berwujud (Kelompok 1 s/d 4 serta Bangunan), metode Garis Lurus vs Saldo Menurun Ganda, saat dimulainya penyusutan (Bulan perolehan secara pro-rata), perlakuan penarikan aset tetap (Disposal of Assets), amortisasi harta tak berwujud, serta insentif revaluasi aset tetap dengan tarif PPh Final 10%.',
  objectives: [
    'Menguasai tabel masa manfaat dan tarif penyusutan fiskal harta berwujud (Pasal 11 UU PPh).',
    'Menghitung penyusutan fiskal tahun berjalan secara pro-rata berdasarkan bulan perolehan aset.',
    'Menghitung laba/rugi fiskal atas penarikan dan penjualan aset tetap.',
    'Menerapkan amortisasi harta tak berwujud (Kelompok 1 s/d 4) dan biaya pendirian usaha.',
    'Menjelaskan perlakuan pajak atas selisih lebih revaluasi aset tetap (PPh Final 10%).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 4.1: Pengelompokan dan Tarif Penyusutan Fiskal Harta Berwujud (Pasal 11 UU PPh).',
      svg: SVG_DEPRECIATION_RATES
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 4'
    },
    {
      kind: 'table',
      headers: ['Kelompok Harta Berwujud', 'Masa Manfaat Fiskal', 'Tarif Garis Lurus (Straight Line)', 'Tarif Saldo Menurun (Declining Balance)'],
      rows: [
        ['Kelompok 1 (Bukan Bangunan)', '4 Tahun', '25%', '50% (Tahun ke-4 disusutkan sekaligus)'],
        ['Kelompok 2 (Bukan Bangunan)', '8 Tahun', '12,5%', '25% (Tahun ke-8 disusutkan sekaligus)'],
        ['Kelompok 3 (Bukan Bangunan)', '16 Tahun', '6,25%', '12,5% (Tahun ke-16 disusutkan sekaligus)'],
        ['Kelompok 4 (Bukan Bangunan)', '20 Tahun', '5%', '10% (Tahun ke-20 disusutkan sekaligus)'],
        ['Bangunan Permanen', '20 Tahun', '5%', 'Tidak Boleh Digunakan (Wajib Garis Lurus)'],
        ['Bangunan Non-Permanen', '10 Tahun', '10%', 'Tidak Boleh Digunakan (Wajib Garis Lurus)']
      ],
      caption: 'Tabel 4.0: Matriks tarif penyusutan fiskal harta berwujud.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Penyusutan Pro-Rata & Nilai Sisa Buku'
    },
    {
      kind: 'formula',
      text: `\\text{Penyusutan Fiskal Tahun Pertama} = \\frac{\\text{Jumlah Bulan Pemakaian}}{12} \\times \\text{Tarif Penyusutan} \\times \\text{Harga Perolehan}
\\text{Penyusutan Saldo Menurun Tahun ke-}t = \\text{Tarif} \\times \\text{Nilai Sisa Buku Fiskal Awal Tahun ke-}t
\\text{Laba / Rugi Penarikan Aset} = \\text{Harga Jual Kas} - \\text{Nilai Sisa Buku Fiskal Saat Penarikan}`,
      note: 'Penyusutan fiskal dimulai pada bulan dilakukannya pengeluaran/perolehan harta, bukan pada awal tahun kalender (pro-rata bulan).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penarikan & Penjualan Mesin Pabrik Sebelum Masa Manfaat Habis',
      prompt: 'Mesin Kelompok 2 dibeli 1 Juli 2024 seharga Rp 400.000.000 (disusutkan metode Garis Lurus 12,5% per tahun). Pada 1 Juli 2026 mesin dijual seharga Rp 350.000.000. Hitung akumulasi penyusutan fiskal saat dijual dan laba/rugi penjualan aset menurut fiskal!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Penyusutan Fiskal yang Telah Diakui**:\n- Tahun 2024 (6 bulan): $\\frac{6}{12} \\times 12,5\\% \\times 400 \\text{ Jt} = Rp 25.000.000$.\n- Tahun 2025 (12 bulan): $12,5\\% \\times 400 \\text{ Jt} = Rp 50.000.000$.\n- Tahun 2026 (6 bulan s/d Juli): $\\frac{6}{12} \\times 12,5\\% \\times 400 \\text{ Jt} = Rp 25.000.000$.\n- Total Akumulasi Penyusutan = 25 Jt + 50 Jt + 25 Jt = **Rp 100.000.000**.',
            '**Nilai Sisa Buku Fiskal Saat Dijual**: Rp 400 Jt - Rp 100 Jt = **Rp 300.000.000**.',
            '**Laba Penjualan Aset Fiskal**: Harga Jual - Nilai Sisa Buku = Rp 350 Juta - Rp 300 Juta = **+Rp 50.000.000 (Keuntungan Kena Pajak)**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 4'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Pengelompokan Aset Fiskal', 'Klasifikasi aset ke Kelompok 1, 2, 3, 4 dan bangunan.', 'Mampu mengidentifikasi masa manfaat fiskal yang tepat.'],
        ['2', 'Kalkulasi Garis Lurus vs Saldo Menurun', 'Perhitungan penyusutan tahunan dan aturan sisa buku tahun terakhir.', 'Mampu menghitung beda waktu penyusutan komersial vs fiskal.'],
        ['3', 'Revaluasi Aset Tetap PMK 79', 'Tarif PPh Final 10% atas selisih lebih revaluasi dan dasar penyusutan baru.', 'Mampu menganalisis keuntungan cash flow revaluasi aset.']
      ],
      caption: 'Tabel 4.2: Peta penguasaan submateri TM 4 Perpajakan II.'
    },
    CASE_DEPRECIATION_REVALUATION,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Bangunan Dilarang Saldo Menurun**: Bangunan permanen dan non-permanen WAJIB disusutkan dengan metode Garis Lurus (Pasal 11 ayat 2 UU PPh).',
        '**Saldo Menurun Disusutkan Sekaligus di Akhir**: Pada tahun terakhir masa manfaat, seluruh nilai sisa buku yang masih tersisa disusutkan sekaligus menjadi beban tahun tersebut.',
        '**Revaluasi Aset Menguntungkan Cash Flow Jangka Panjang**: Pajak revaluasi 10% dibayar sekali di depan, tetapi perusahaan memperoleh penghematan pajak 22% setiap tahun melalui kenaikan beban penyusutan fiskal.'
      ]
    }
  ]
};
