// scripts/build-sem3-bank-data.mjs
import fs from 'node:fs';
import path from 'node:path';

function bankItem(type, scope, difficulty, estimatedTime, question, context, data, instructions, outputFormat, rubric, answerGuide) {
  return {
    type,
    scope,
    difficulty,
    estimatedTime,
    question,
    context,
    data,
    instructions,
    outputFormat,
    rubric,
    answerGuide
  };
}

// Only the courses listed for this artefact in scripts/test-sem3-generators.mjs may be generated; the rest are edited by hand.
const BANK_SPEC = {
  AKM202: {
    courseName: 'Akuntansi Manajemen',
    uts: [
      bankItem(
        'case',
        'TM 2–3: Analisis CVP & Variable Costing',
        'Menengah',
        '30–40 menit',
        'Rekonsiliasi Laba Bersih Variable vs Absorption Costing & Analisis Titik Impas Multi-Produk',
        'PT Prima Manufaktur memproduksi dan menjual barang konsumen. Kapasitas normal adalah 50.000 unit per tahun. Harga jual per unit Rp 100.000. Biaya manufaktur: Bahan Langsung Rp 30.000/unit, Tenaga Kerja Langsung Rp 15.000/unit, BOP Variabel Rp 5.000/unit. Total BOP Tetap tahunan Rp 1.000.000.000 (tarif Rp 20.000/unit). Beban penjualan variabel Rp 10.000/unit dan beban administrasi tetap Rp 400.000.000 per tahun. Pada tahun 2024, perusahaan memproduksi 50.000 unit dan berhasil menjual 40.000 unit (persediaan awal nol).',
        [
          'Unit Diproduksi: 50.000 unit; Unit Terjual: 40.000 unit; Persediaan Akhir: 10.000 unit.',
          'Harga Jual: Rp 100.000/unit.',
          'Biaya Manufaktur Variabel: Rp 50.000/unit (DM 30rb + DL 15rb + VMOH 5rb).',
          'Biaya Manufaktur Tetap (FMOH): Rp 1.000.000.000 (Rp 20.000/unit).',
          'Beban Operasional: Variabel Rp 10.000/unit terjual; Tetap Rp 400.000.000.'
        ],
        [
          'Susun Laporan Laba Rugi menggunakan Metode Absorption Costing.',
          'Susun Laporan Laba Rugi menggunakan Metode Variable Costing.',
          'Buat rekonsiliasi perbedaan laba bersih di antara kedua metode.',
          'Hitung Titik Impas (Break-Even Point) dalam unit dan rupiah menggunakan data Variable Costing.'
        ],
        ['Format Laba Rugi Absorption & Variable', 'Tabel rekonsiliasi laba', 'Kalkulasi BEP'],
        [
          'Ketepatan format dan perhitungan Absorption Costing (30%)',
          'Ketepatan format dan perhitungan Variable Costing (30%)',
          'Penjelasan rekonsiliasi selisih BOP tetap tertahan (20%)',
          'Kalkulasi BEP unit & rupiah (20%)'
        ],
        `1. Laporan Laba Rugi Absorption Costing:
- Penjualan (40.000 × Rp 100.000) .................... Rp 4.000.000.000
- HPP (40.000 × Rp 70.000*) ........................... (Rp 2.800.000.000)
  (*HPP/unit = Var 50.000 + Tetap 20.000 = Rp 70.000)
- Laba Kotor (Gross Margin) ............................ Rp 1.200.000.000
- Beban Operasional:
  * Penjualan Variabel (40.000 × Rp 10.000) = Rp 400.000.000
  * Administrasi Tetap = Rp 400.000.000
  * Total Beban Operasional ........................... (Rp 800.000.000)
- Laba Bersih Operasi (Absorption) .................... Rp 400.000.000

2. Laporan Laba Rugi Variable Costing:
- Penjualan (40.000 × Rp 100.000) .................... Rp 4.000.000.000
- Biaya Variabel:
  * Manufaktur Variabel (40.000 × Rp 50.000) = Rp 2.000.000.000
  * Penjualan Variabel (40.000 × Rp 10.000) = Rp 400.000.000
  * Total Biaya Variabel .............................. (Rp 2.400.000.000)
- Contribution Margin (40.000 × Rp 40.000) ............. Rp 1.600.000.000
- Biaya Tetap:
  * BOP Tetap Pabrik = Rp 1.000.000.000
  * Administrasi Tetap = Rp 400.000.000
  * Total Biaya Tetap ................................. (Rp 1.400.000.000)
- Laba Bersih Operasi (Variable) ...................... Rp 200.000.000

3. Rekonsiliasi Laba Bersih:
- Laba Bersih Absorption Costing ....................... Rp 400.000.000
- Laba Bersih Variable Costing ......................... Rp 200.000.000
- Selisih Laba ......................................... Rp 200.000.000
Penjelasan: Produksi (50.000) > Penjualan (40.000) = 10.000 unit tertahan di persediaan akhir.
BOP Tetap yang tertahan di persediaan = 10.000 unit × Rp 20.000/unit = Rp 200.000.000.

4. Perhitungan BEP:
- CM per unit = Rp 100.000 - Rp 60.000 (total variabel) = Rp 40.000/unit.
- CM Ratio = Rp 40.000 / Rp 100.000 = 40%.
- Total Biaya Tetap = Rp 1.000 jt + Rp 400 jt = Rp 1.400.000.000.
- BEP Unit = Rp 1.400.000.000 / Rp 40.000 = 35.000 unit.
- BEP Rupiah = Rp 1.400.000.000 / 40% = Rp 3.500.000.000.`
      )
    ],
    uas: [
      bankItem(
        'case',
        'TM 10: Pengambilan Keputusan Taktis & Biaya Relevan',
        'Tinggi',
        '30–35 menit',
        'Keputusan Make-or-Buy dan Alokasi Sumber Daya Terbatas',
        'PT Delta Elektronik membutuhkan 10.000 unit komponen X-1 setiap tahun. Biaya produksi internal per unit: Bahan Langsung Rp 12.000, Tenaga Kerja Langsung Rp 8.000, BOP Variabel Rp 4.000, dan BOP Tetap Terhindarkan (sewa mesin khusus) Rp 3.000, serta Alokasi Biaya Bersama Pabrik Rp 5.000. Pemasok eksternal menawarkan untuk memasok komponen tersebut seharga Rp 25.000 per unit. Jika perusahaan membeli dari luar, fasilitas pabrik dapat disewakan kepada pihak ketiga sebesar Rp 20.000.000 per tahun.',
        [
          'Kebutuhan: 10.000 unit komponen X-1.',
          'Biaya Internal/unit: DM 12rb, DL 8rb, VMOH 4rb, Avoidable Fixed Overhead 3rb, Unavoidable Common Overhead 5rb.',
          'Harga Tawaran Pemasok Eksternal: Rp 25.000/unit.',
          'Peluang Sewa Fasilitas: Pendapatan sewa Rp 20.000.000/tahun.'
        ],
        [
          'Identifikasi biaya relevan per unit untuk keputusan membuat sendiri (Make).',
          'Susun tabel analisis komparatif total biaya relevan antara Membuat vs Membeli.',
          'Berikan rekomendasi kuantitatif dan kualitatif kepada manajemen PT Delta Elektronik.'
        ],
        ['Daftar biaya relevan', 'Tabel perbandingan biaya', 'Rekomendasi keputusan manajerial'],
        [
          'Identifikasi biaya terhindarkan vs tidak terhindarkan (30%)',
          'Ketepatan perhitungan opportunity cost sewa (30%)',
          'Kelayakan analisis strategis dan rekomendasi (40%)'
        ],
        `1. Analisis Biaya Relevan:
Biaya bersama pabrik (Unavoidable Common Overhead Rp 5.000) adalah BIAYA TIDAK RELEVAN karena tetap terjadi apapun alternatif yang dipilih.
Biaya Relevan Membuat Sendiri (Make) per unit:
- Bahan Langsung: Rp 12.000
- Tenaga Kerja Langsung: Rp 8.000
- BOP Variabel: Rp 4.000
- BOP Tetap Terhindarkan: Rp 3.000
Total Biaya Relevan per unit = Rp 27.000.

2. Tabel Komparasi Total (10.000 unit):
Alternatif MEMBUAT (Make):
- Biaya Produksi Relevan (10.000 × Rp 27.000) = Rp 270.000.000
- Opportunity Cost (Pendapatan Sewa yang Hilang) = Rp 20.000.000
Total Biaya Relevan Membuat = Rp 290.000.000.

Alternatif MEMBELI (Buy):
- Harga Pembelian dari Pemasok (10.000 × Rp 25.000) = Rp 250.000.000.
Total Biaya Relevan Membeli = Rp 250.000.000.

Penghematan Bersih jika Membeli dari Luar = Rp 290.000.000 - Rp 250.000.000 = Rp 40.000.000 per tahun.

3. Rekomendasi Manajerial:
- Kuantitatif: PT Delta Elektronik direkomendasikan untuk MEMBELI komponen X-1 dari pemasok eksternal karena menghemat biaya sebesar Rp 40.000.000 per tahun.
- Kualitatif: Manajemen harus memverifikasi rekam jejak ketepatan waktu pengiriman pemasok, jaminan kualitas mutu komponen, dan klausul kenaikan harga di masa depan.`
      )
    ]
  },
};

const outputCode = `// scripts/sem3-bank-data.mjs
export const SEM3_BANK_DATA = ${JSON.stringify(BANK_SPEC, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'scripts/sem3-bank-data.mjs'), outputCode, 'utf8');
console.log('Successfully wrote sem3-bank-data.mjs');
