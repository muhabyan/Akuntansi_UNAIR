import type { Reading } from '../../../types';

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan & Review Ujian Tengah Semester (UTS) Perpajakan II',
  ref: 'Kompilasi TM 1 s.d TM 7 | UU PPh jo. UU HPP | PP 55/2022',
  intro: 'Rangkuman terpadu dan intisari perhitungan pajak kritis Pra-UTS Perpajakan II: Konsep Deductible vs Non-Deductible 3M, Penilaian Harta & Larangan LIFO, Tarif PPh OP (5 lapis) & Badan (22%), Transfer Pricing PMK 172/2023, Penyusutan Fiskal PMK 72/2023, Withholding Tax PPh 22/23/26, PPh UMKM 0,5%, PPh Final 4(2) Jasa Konstruksi & Sewa, Kredit PPh 24, Angsuran PPh 25, dan Fasilitas Pasal 31E.',
  objectives: [
    'Mengintegrasikan seluruh aturan pemajakan PPh dari TM 1 s.d TM 7.',
    'Menguasai simulasi kasus hitungan cepat untuk persiapan UTS Perpajakan II.'
  ],
  blocks: [
    { kind: 'h2', text: 'Poin-Poin Kritis Ujian UTS Perpajakan II' },
    {
      kind: 'ul',
      items: [
        '**Deductible vs Non-Deductible (TM 1)**: Biaya 3M (Pasal 6) boleh dibebankan; Dividen, kepentingan pribadi pemilik, dan sanksi denda pajak (Pasal 9) dilarang dibiayakan (Koreksi Positif).',
        '**Tarif PPh (TM 2)**: OP (5%, 15%, 25%, 30%, 35%); Badan 22%. Persediaan hanya boleh FIFO & Average (LIFO dilarang).',
        '**Transfer Pricing (TM 3)**: Hubungan Istimewa (Saham $\\ge 25\\%$, Penguasaan, Keluarga); 5 Metode ALP (CUP, RPM, Cost Plus, TNMM, Profit Split); DER maks 4:1.',
        '**Penyusutan Fiskal (TM 4)**: Kelompok 1 (4 thn / 25% / 50%), Kelompok 2 (8 thn / 12,5% / 25%), Kelompok 3 (16 thn / 6,25% / 12,5%), Kelompok 4 (20 thn / 5% / 10%). Bangunan Permanen 20 thn (Garis Lurus 5%).',
        '**Withholding Tax (TM 5)**: PPh 22 Impor (API 2,5%, Non-API 7,5%), Bendahara APBN (1,5%); PPh 23 Bunga/Royalti (15%), Sewa Mesin/Jasa Lain (2%); PPh UMKM 0,5% (Omzet 1st Rp 500jt WP OP Bebas Pajak).',
        '**PPh Final 4(2) & 15 (TM 6)**: Sewa Tanah/Bangunan 10%; Jual Beli Tanah 2,5%; Konstruksi PP 9/2022 (Pelaksanaan SBU Kecil 1,75%, Menengah/Besar 2,65%, Non-SBU 4%; Konsultansi SBU 3,5%, Non-SBU 6%); Pelayaran DN PPh 15 1,2% Final.',
        '**PPh 24 & Fasilitas 31E (TM 7)**: Kredit Pajak LN dipilih terendah antara Pajak Aktual LN vs Batas Maksimum (BMKP); Fasilitas 31E memberikan diskon tarif 50% (menjadi 11%) untuk porsi PKP dari omzet s.d Rp 4,8 Miliar.'
      ]
    }
  ]
};