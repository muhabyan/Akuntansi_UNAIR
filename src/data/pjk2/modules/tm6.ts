import type { Reading } from '../../../types';

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Pemotongan PPh Final Pasal 4 ayat (2) & Norma Khusus PPh Pasal 15',
  ref: 'UU PPh Pasal 4(2), Pasal 15 | PP 9/2022 Jasa Konstruksi | PP 34/2016 Pengalihan Tanah',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 6: Menguasai pemotongan Pajak Penghasilan Bersifat Final berdasarkan Pasal 4 ayat (2) (Bunga Deposito, Obligasi, Hadiah Undian, Sewa & Pengalihan Hak atas Tanah/Bangunan, Transaksi Saham Bursa Efek, dan Jasa Konstruksi menurut PP 9/2022) serta Norma Perhitungan Khusus PPh Pasal 15 atas usaha pelayaran dan penerbangan dalam negeri maupun luar negeri.',
  objectives: [
    'Menjelaskan karakteristik yuridis PPh Final (penghasilan tidak digabung dalam SPT Tahunan, biaya terkait tidak boleh dikurangkan, dan pajak dipotong tidak dapat dikreditkan).',
    'Menghitung PPh Final Sewa Tanah dan/atau Bangunan (10%) dan Pengalihan Hak atas Tanah/Bangunan (2,5% - PP 34/2016).',
    'Menerapkan tarif baru PPh Final Jasa Konstruksi menurut PP No. 9 Tahun 2022 (Pekerjaan Konstruksi Ber-SBU Kecil 1,75%, Menengah/Besar 2,65%, Tanpa SBU 4%; Konsultansi Konstruksi Ber-SBU 3,5%, Tanpa SBU 6%).',
    'Menghitung PPh Final Hadiah Undian (25%) dan Transaksi Penjualan Saham di Bursa Efek (0,1% + 0,5% untuk saham pendiri).',
    'Menghitung PPh Pasal 15 Pelayaran Dalam Negeri (1,2% Final), Penerbangan Dalam Negeri (1,8% Tidak Final), serta Pelayaran/Penerbangan Luar Negeri (2,64% Final).'
  ],
  blocks: [
    { kind: 'h2', text: '1. Objek & Tarif PPh Final Pasal 4 ayat (2)' },
    {
      kind: 'table',
      headers: ['Objek Penghasilan PPh Final', 'Dasar Pengenaan Pajak (DPP)', 'Tarif PPh Final', 'Dasar Regulasi PP'],
      rows: [
        ['Bunga Deposito, Tabungan, & Sertifikat BI', 'Jumlah Bruto Bunga', '**20%**', 'PP 131/2000 jo. PP 123/2015'],
        ['Bunga Obligasi / Surat Utang Negara (SUN)', 'Jumlah Bruto Bunga / Diskonto', '**10%**', 'PP 91/2021'],
        ['Hadiah Undian (Bukan Perlombaan)', 'Nilai Bruto Hadiah', '**25%**', 'PP 132/2000'],
        ['Sewa Tanah dan/atau Bangunan', 'Jumlah Bruto Nilai Persewaan (Termasuk Service Charge)', '**10%**', 'PP 34/2017'],
        ['Pengalihan Hak atas Tanah/Bangunan (Jual Beli)', 'Nilai Pengalihan Bruto / NJOP (Pilih Tertinggi)', '**2,5%** *(Rumah Sederhana: **1%**)*', 'PP 34/2016'],
        ['Penjualan Saham di Bursa Efek Indonesia', 'Jumlah Bruto Nilai Transaksi Penjualan', '**0,1%** *(Saham Pendiri + **0,5%**)*', 'PP 14/1997'],
        ['Dividen diterima WP Orang Pribadi Dalam Negeri', 'Jumlah Bruto Dividen Dibagikan', '**10%** *(Bebas jika direinvestasikan)*', 'PP 55/2022']
      ],
      caption: 'Tabel 6.1: Daftar objek dan tarif pemotongan PPh Final Pasal 4 ayat (2).'
    },

    { kind: 'h2', text: '2. Tarif PPh Final Jasa Konstruksi Terbaru (PP No. 9 Tahun 2022)' },
    {
      kind: 'table',
      headers: ['Layanan Jasa Konstruksi', 'Kualifikasi Sertifikat Badan Usaha (SBU)', 'Tarif PPh Final PP 9/2022'],
      rows: [
        ['Pekerjaan Konstruksi Pelaksanaan', 'Kualifikasi Kecil / Sertifikat Kompetensi Kerja', '**1,75%**'],
        ['Pekerjaan Konstruksi Pelaksanaan', 'Kualifikasi Menengah, Besar, atau Spesialis', '**2,65%**'],
        ['Pekerjaan Konstruksi Pelaksanaan', '**Tidak Memiliki SBU**', '**4,0%**'],
        ['Konsultansi Konstruksi (Perencanaan/Pengawasan)', 'Memiliki SBU / Sertifikat Keahlian Kerja', '**3,5%**'],
        ['Konsultansi Konstruksi (Perencanaan/Pengawasan)', '**Tidak Memiliki SBU**', '**6,0%**'],
        ['Pekerjaan Konstruksi Terintegrasi (EPC / Rancang Bangun)', 'Memiliki Sertifikat Badan Usaha', '**2,65%** *(Tanpa SBU: **4,0%**)*']
      ],
      caption: 'Tabel 6.2: Tarif PPh Final Jasa Konstruksi berdasarkan PP 9/2022.'
    },

    { kind: 'h2', text: '3. Norma Khusus PPh Pasal 15 (Transportasi Laut & Udara)' },
    {
      kind: 'table',
      headers: ['Perusahaan Pelayaran / Penerbangan', 'Norma Penghasilan Neto', 'Tarif Efektif PPh', 'Sifat Pemajakan'],
      rows: [
        ['Perusahaan Pelayaran Dalam Negeri', '6% dari Peredaran Bruto', '20% × 6% = **1,2%**', '**FINAL**'],
        ['Perusahaan Penerbangan Dalam Negeri', '6% dari Peredaran Bruto', '30% × 6% = **1,8%**', '**TIDAK FINAL** (Dapat dikreditkan di SPT Tahunan)'],
        ['Perusahaan Pelayaran / Penerbangan Luar Negeri (SPLN)', '6% dari Peredaran Bruto', '20% × (100% - 20%) × 6% = **2,64%**', '**FINAL**']
      ],
      caption: 'Tabel 6.3: Norma penghitungan khusus PPh Pasal 15.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 6' },
    {
      kind: 'ul',
      items: [
        '**Service Charge Sewa Gedung**: Ikut dipotong PPh Final 10% jika ditagihkan oleh pemilik gedung.',
        '**SBU Konstruksi**: Keberadaan SBU menentukan apakah kontraktor dikenakan tarif rendah (1,75% / 2,65%) atau tarif penalti (4% / 6%).',
        '**Penerbangan DN**: Satu-satunya jenis usaha PPh Pasal 15 yang pemajakannya bersifat **TIDAK FINAL**.'
      ]
    }
  ]
};