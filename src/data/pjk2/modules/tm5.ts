import type { Reading } from '../../../types';

const SVG_WITHHOLDING_SYSTEM = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SISTEM WITHHOLDING TAX: PPH PASAL 22, PPH PASAL 23/26, &amp; PPH UMKM</text>
  
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. PPh Pasal 22</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Pemungutan Khusus)</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Impor (API 2,5% / Non 7,5%)</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Bendahara APBN (1,5%)</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• BUMN &amp; Industri Tertentu</text>
  <text x="125" y="186" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Kredit Pajak WP Badan</text>

  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. PPh Pasal 23 / 26</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Pemotongan Modal/Jasa)</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Dividen WP OP (10% Final)</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Bunga, Royalti, Hadiah (15%)</text>
  <text x="340" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Sewa Aset &amp; Jasa Teknik (2%)</text>
  <text x="340" y="186" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">PPh 26 Luar Negeri (20%/P3B)</text>

  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. PPh Final UMKM</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(PP 55/2022)</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Tarif Final 0,5% Omzet</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Syarat: Omzet &le; Rp 4,8M/thn</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• WP OP Bebas Pajak</text>
  <text x="555" y="186" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">  (Omzet 1st Rp 500jt Free!)</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Pemungutan PPh Pasal 22, Pemotongan PPh Pasal 23/26, & PPh Final UMKM 0,5%',
  ref: 'UU PPh Pasal 22, 23, 26 jo. UU HPP | PMK 34/2017 jo. PMK 41/2022 | PP 55/2022',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 5: Menguasai mekanisme Withholding Tax atas transaksi perdagangan dan modal: Pemungutan PPh Pasal 22 (Impor barang, belanja instansi pemerintah, BUMN, komoditas semen/kertas/baja/otomotif/farmasi, dan barang sangat mewah), Pemotongan PPh Pasal 23 atas dividen, bunga, royalti, sewa selain tanah/bangunan, dan 62 jenis jasa lain (PMK 141/2015), PPh Pasal 26 atas penghasilan SPLN, serta insentif PPh Final UMKM 0,5% dengan fasilitas batas omzet Rp 500 juta bebas pajak untuk Wajib Pajak Orang Pribadi.',
  objectives: [
    'Mengidentifikasi pemungut PPh Pasal 22, objek transaksi, dasar pengenaan pajak (DPP / Nilai Impor), dan tarifnya.',
    'Menjelaskan pengecualian pemungutan PPh Pasal 22 (pembelian < Rp 2 juta oleh bendahara, impor barang bebas bea masuk).',
    'Menghitung pemotongan PPh Pasal 23 atas Bunga, Royalti, Hadiah (15%) serta Sewa Aset Bukan Tanah dan Imbalan Jasa Lain (2%).',
    'Menerapkan pemotongan PPh Pasal 26 sebesar 20% atau tarif sesuai Tax Treaty / P3B yang berlaku.',
    'Menghitung PPh Final UMKM 0,5% menurut PP No. 55/2022 dan memanfaatkan batas omzet Rp 500 juta tidak kena pajak bagi WP Orang Pribadi.',
    'Memahami batasan jangka waktu penggunaan PPh Final UMKM (WP OP maks 7 tahun; PT maks 3 tahun; CV/Koperasi maks 4 tahun).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Sistem Withholding Tax: PPh 22, PPh 23/26, dan PPh Final UMKM',
      svg: SVG_WITHHOLDING_SYSTEM,
      caption: 'Gambar 5.1: Arsitektur pemungutan dan pemotongan pajak penghasilan atas transaksi bisnis komersial.'
    },

    { kind: 'h2', text: '1. Ringkasan Tarif Pemungutan PPh Pasal 22' },
    {
      kind: 'table',
      headers: ['Objek Transaksi PPh Pasal 22', 'Tarif Pemungutan', 'Dasar Pengenaan Pajak (DPP)'],
      rows: [
        ['Impor Barang dengan Angka Pengenal Importir (API)', '**2,5%** (Non-API: **7,5%**)', 'Nilai Impor (CIF + Bea Masuk + Pungutan Pabean Lain)'],
        ['Belanja Barang oleh Bendahara Pemerintah / APBN / APBD', '**1,5%** *(Bebas jika belanja $\\le$ Rp 2.000.000)*', 'Harga Pembelian tidak termasuk PPN'],
        ['Belanja Barang oleh BUMN Tertentu', '**1,5%** *(Bebas jika belanja $\\le$ Rp 10.000.000)*', 'Harga Pembelian tidak termasuk PPN'],
        ['Penjualan Semen / Kertas / Baja / Otomotif / Farmasi DN', '**0,25% s.d 0,45%**', 'Dasar Pengenaan Pajak (DPP) PPN'],
        ['Pembelian Bahan Hasil Kehutanan/Perkebunan/Perikanan oleh Industri', '**0,25%**', 'Harga Pembelian tidak termasuk PPN'],
        ['Penjualan Barang Sangat Mewah (Rumah > Rp 30M, Kapal Pesiar, Pesawat)', '**1% s.d 5%**', 'Harga Jual tidak termasuk PPN dan PPnBM']
      ],
      caption: 'Tabel 5.1: Matriks tarif dan objek pemungutan PPh Pasal 22.'
    },

    { kind: 'h2', text: '2. Ringkasan Tarif Pemotongan PPh Pasal 23 & 26' },
    {
      kind: 'table',
      headers: ['Objek Pemotongan PPh Pasal 23', 'Tarif Ber-NPWP', 'Tarif Tanpa NPWP (Kenaikan 100%)'],
      rows: [
        ['Dividen diterima WP Badan Dalam Negeri', '**BUKAN OBJEK (0%)**', 'Bukan Objek Pajak (UU HPP)'],
        ['Dividen diterima WP Orang Pribadi Dalam Negeri', '**10% Final** *(Bebas jika direinvestasikan di NKRI)*', '10% Final'],
        ['Bunga Pinjaman (selain bank) & Royalti Hak Cipta/Paten', '**15%**', '**30%** (Tarif 2x lipat)'],
        ['Hadiah Penghargaan, Bonus, & Perlombaan (selain PPh 21)', '**15%**', '**30%** (Tarif 2x lipat)'],
        ['Sewa Aset (Kendaraan, Alat Berat, Mesin - Bukan Tanah/Bangunan)', '**2%**', '**4%** (Tarif 2x lipat)'],
        ['Imbalan Jasa Teknik, Manajemen, Konsultan, & 62 Jasa Lain (PMK 141)', '**2%**', '**4%** (Tarif 2x lipat)'],
        ['**PPh Pasal 26**: Seluruh penghasilan yang dibayarkan ke Wajib Pajak Luar Negeri', '**20%** *(atau tarif reduksi P3B)*', '**20%**']
      ],
      caption: 'Tabel 5.2: Matriks tarif pemotongan PPh Pasal 23 dan PPh Pasal 26.'
    },

    { kind: 'h2', text: '3. Insentif PPh Final UMKM 0,5% (PP 55/2022)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Fasilitas Omzet Rp 500 Juta Tidak Kena Pajak bagi WP Orang Pribadi',
      text: 'Berdasarkan UU HPP dan PP No. 55/2022:\n• Wajib Pajak Orang Pribadi UMKM dengan peredaran bruto tidak melebihi Rp 4,8 Miliar setahun **TIDAK DIKENAI PPH ATAS BAGIAN PEREDARAN BRUTO SAMPAI DENGAN Rp 500.000.000 DALAM 1 TAHUN PAJAK**.\n• Pajak 0,5% hanya mulai dihitung pada bulan di mana akumulasi omzet kumulatif telah melampaui Rp 500 juta!'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 5' },
    {
      kind: 'ul',
      items: [
        '**Bukti Potong / Pungut Unifikasi**: Pemotong/pemungut wajib menerbitkan Bukti Pemotongan/Pemungutan Unifikasi Elektronik (e-Bupot) melalui DJP Online.',
        '**Sewa Tanah vs Kendaraan**: Sewa Tanah/Bangunan = **PPh Final Pasal 4(2) tarif 10%**; Sewa Kendaraan/Mesin = **PPh Pasal 23 tarif 2%**.',
        '**Batas Waktu UMKM**: PT hanya berhak menggunakan tarif 0,5% selama 3 tahun pajak sejak terdaftar.'
      ]
    }
  ]
};