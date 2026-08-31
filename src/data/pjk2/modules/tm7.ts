import type { Reading } from '../../../types';
import { CASE_PPH24_FOREIGN_CREDIT, CASE_REKONSILIASI_FISKAL_31E } from '../pjk2PracticeCases';

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Kredit Pajak Luar Negeri PPh Pasal 24, Angsuran Bulanan PPh 25, & Fasilitas Pasal 31E',
  ref: 'UU PPh Pasal 24, 25, 31E jo. UU HPP | PMK 192/PMK.03/2018 PPh 24',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 7: Menguasai mekanisme penghindaran pajak berganda unilateral melalui Kredit Pajak Luar Negeri PPh Pasal 24 (*Ordinary Credit Method dengan Per-Country Limitation*), penentuan besarnya Angsuran Bulanan PPh Pasal 25 tahun berjalan (termasuk Wajib Pajak Orang Pribadi Pengusaha Tertentu / WP OPPT 0,75%), serta fasilitas insentif reduksi tarif 50% untuk Wajib Pajak Badan dengan peredaran bruto s.d Rp 50 Miliar (Pasal 31E UU PPh).',
  objectives: [
    'Menerapkan metode pengkreditan pajak luar negeri PPh Pasal 24 dengan batasan per negara (Per-Country Limitation).',
    'Menghitung Batas Maksimum Kredit Pajak (BMKP) dan menentukan nilai kredit pajak yang boleh dikurangkan.',
    'Menghitung besarnya Angsuran Bulanan PPh Pasal 25 umum bagi WP Orang Pribadi dan Badan.',
    'Menghitung angsuran PPh 25 WP Orang Pribadi Pengusaha Tertentu (WP OPPT: 0,75% dari omzet per gerai/toko).',
    'Menghitung penghematan pajak fasilitas Pasal 31E UU PPh (diskon tarif 50% untuk bagian PKP dari omzet s.d Rp 4,8 Miliar).',
    'Menjelaskan fasilitas penanaman modal Pasal 31A UU PPh (Tax Allowance).'
  ],
  blocks: [
    { kind: 'h2', text: '1. Mekanisme Kredit Pajak Luar Negeri PPh Pasal 24' },
    {
      kind: 'p',
      text: 'Untuk menghindari pengenaan pajak berganda atas penghasilan yang diperoleh di luar negeri, Wajib Pajak Dalam Negeri berhak mengkreditkan pajak yang telah dibayar di luar negeri dengan memilih **nilai terendah di antara 3 unsur**:'
    },
    {
      kind: 'ol',
      items: [
        '**Jumlah Pajak yang Sebenarnya Terutang atau Dibayar di Luar Negeri**.',
        '**Batas Maksimum Kredit Pajak (BMKP) Per Negara**:\n$$\\text{BMKP} = \\frac{\\text{Penghasilan Luar Negeri per Negara}}{\\text{Total Penghasilan Kena Pajak (PKP)}} \\times \\text{Total PPh Terutang di Indonesia}$$',
        '**Jumlah Total PPh Terutang Seluruhnya** (apabila PKP lebih kecil dari penghasilan luar negeri karena adanya kompensasi kerugian dalam negeri).'
      ]
    },

    CASE_PPH24_FOREIGN_CREDIT,

    { kind: 'h2', text: '2. Perhitungan Angsuran Bulanan PPh Pasal 25' },
    {
      kind: 'table',
      headers: ['Kelompok Wajib Pajak', 'Formula Angsuran PPh Pasal 25 Bulanan', 'Jatuh Tempo Pembayaran & Pelaporan'],
      rows: [
        ['Wajib Pajak Badan / OP Umum', '$\\frac{\\text{PPh Terutang SPT Lalu} - (\\text{Kredit PPh 21, 22, 23, 24})}{12\\ \\text{Bulan}}$', 'Paling lambat tanggal 15 bulan berikutnya.'],
        ['WP Orang Pribadi Pengusaha Tertentu (WP OPPT)', '**0,75% × Peredaran Bruto Bulanan** dari masing-masing tempat usaha (toko/outlet)', 'Paling lambat tanggal 15 bulan berikutnya (Dapat dikreditkan di SPT 1770).'],
        ['Wajib Pajak Baru Terdaftar', 'Dihitung berdasarkan SPT masa pertama yang disetahunkan atau nihil (kecuali bank/BUMN).', 'Paling lambat tanggal 15 bulan berikutnya.']
      ],
      caption: 'Tabel 7.1: Formula angsuran pajak bulanan PPh Pasal 25.'
    },

    { kind: 'h2', text: '3. Fasilitas Pengurangan Tarif PPh Badan (Pasal 31E UU PPh)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Fasilitas Reduksi Tarif 50% bagi WP Badan Dalam Negeri',
      text: 'Wajib Pajak Badan Dalam Negeri dengan peredaran bruto sampai dengan Rp 50.000.000.000 (Rp 50 Miliar) mendapat fasilitas pengurangan tarif sebesar **50% dari tarif normal 22% (menjadi efektif 11%)** yang dikenakan atas **Penghasilan Kena Pajak dari bagian peredaran bruto sampai dengan Rp 4.800.000.000**.'
    },

    CASE_REKONSILIASI_FISKAL_31E,

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 7 (Pra-UTS)' },
    {
      kind: 'ul',
      items: [
        '**PPh 24 Per-Country**: Penggabungan penghasilan LN dilakukan per negara; jika di Negara X rugi dan Negara Y laba, kerugian di Negara X tidak boleh dikompensasikan ke penghasilan Negara Y.',
        '**Batas Waktu Setor PPh 25**: Tanggal 15 bulan berikutnya; jika tanggal 15 hari libur, jatuh tempo mundur ke hari kerja berikutnya.',
        '**Pasal 31E**: Jika omzet badan $\\le$ Rp 4,8 Miliar, maka **100% PKP mendapat fasilitas tarif 11%**.'
      ]
    }
  ]
};