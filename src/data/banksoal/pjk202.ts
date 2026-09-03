// src/data/banksoal/pjk202.ts
// Bank Soal Esai & Studi Kasus Perpajakan II (PJK202)
import type { BankSoal } from '../../types';

export const PJK202_BANK_UTS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 4–6: Penyusutan Fiskal & Pemotongan PPh 22/23/Final",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Kalkulasi Penyusutan Fiskal Harta Berwujud & Pemotongan Pajak Transaksi",
    "context": "PT Indo Mega pada tahun 2024 memiliki transaksi berikut:\n1. Membeli server komputer kantor pada 1 April 2024 seharga Rp 80.000.000 (Kelompok 1, masa manfaat 4 tahun). Perusahaan menggunakan metode saldo menurun (declining balance) untuk fiskal.\n2. Membayar jasa konsultan manajemen kepada PT Solusi Prima (memiliki NPWP) sebesar Rp 50.000.000 (belum PPN).\n3. Membayar sewa gudang penyimpanan barang kepada Tuan Hendra sebesar Rp 60.000.000.",
    "data": [
      "Server Komputer: Rp 80.000.000 (Kelompok 1, tarif DDB fiskal 50%, beli 1 April 2024).",
      "Jasa Konsultan PT Solusi Prima: Rp 50.000.000.",
      "Sewa Gudang Tuan Hendra: Rp 60.000.000."
    ],
    "instructions": [
      "Hitung beban penyusutan fiskal server komputer untuk Tahun Pajak 2024.",
      "Hitung PPh Pasal 23 yang wajib dipotong atas jasa konsultan manajemen beserta kewajiban setor dan lapornya.",
      "Hitung PPh Final Pasal 4 ayat 2 yang wajib dipotong atas persewaan gudang."
    ],
    "outputFormat": [
      "Kalkulasi penyusutan fiskal proporsional",
      "Perhitungan PPh 23 dan PPh 4(2)"
    ],
    "rubric": [
      "Ketepatan perhitungan bulan penyusutan saldo menurun (40%)",
      "Kebenaran tarif dan objek PPh 23 & 4(2) (60%)"
    ],
    "answerGuide": "1. Penyusutan Fiskal Server Komputer (Kelompok 1, 4 tahun):\n- Tarif Saldo Menurun Kelompok 1 = 50% per tahun.\n- Pembelian 1 April 2024 (April - Desember = 9 bulan masa penggunaan).\n- Penyusutan Fiskal 2024 = (9/12) × 50% × Rp 80.000.000 = Rp 30.000.000.\n(Nilai Sisa Buku Fiskal per 31 Des 2024 = Rp 80 jt - Rp 30 jt = Rp 50.000.000).\n\n2. Pemotongan PPh Pasal 23 atas Jasa Konsultan Manajemen:\n- Dasar Pengenaan Pajak (DPP) = Rp 50.000.000.\n- Tarif PPh Pasal 23 Jasa Manajemen = 2%.\n- PPh 23 Dipotong = 2% × Rp 50.000.000 = Rp 1.000.000.\n- Kas dibayarkan ke PT Solusi Prima = Rp 49.000.000.\n- Batas setor: paling lambat tanggal 10 bulan berikutnya; lapor SPT Masa unifikasi paling lambat tanggal 20.\n\n3. Pemotongan PPh Final Pasal 4(2) atas Sewa Gudang:\n- Objek: Sewa tanah dan/atau bangunan.\n- Tarif PPh Final = 10%.\n- PPh Final Dipotong = 10% × Rp 60.000.000 = Rp 6.000.000.\n- Kas dibayarkan ke Tuan Hendra = Rp 54.000.000."
  }
];

export const PJK202_BANK_UAS: BankSoal[] = [
  {
    "type": "calculation",
    "scope": "TM 11: Rekonsiliasi Fiskal & SPT 1771",
    "difficulty": "Komprehensif",
    "estimatedTime": "35–45 menit",
    "question": "Penyusunan Kertas Kerja Rekonsiliasi Fiskal & Perhitungan PPh Badan Terutang",
    "context": "PT Sejahtera Abadi (peredaran bruto tahun 2024 sebesar Rp 20.000.000.000) membukukan laba bersih komersial sebelum pajak sebesar Rp 2.500.000.000. Dalam laporan keuangan komersial terdapat pos-pos berikut:\n1. Beban jamuan makan relasi tanpa daftar nominatif: Rp 40.000.000.\n2. Beban sanksi denda administrasi pajak: Rp 15.000.000.\n3. Beban penyusutan aset tetap komersial Rp 300.000.000 (sedangkan penyusutan menurut aturan fiskal adalah Rp 360.000.000).\n4. Pendapatan bunga deposito (telah dipotong PPh Final 20%): Rp 50.000.000.\n5. Pembagian dividen dari PT Anak (kepemilikan saham 30%): Rp 80.000.000.\n6. Kredit pajak yang telah dipotong pihak lain: PPh 22 Rp 25 jt, PPh 23 Rp 35 jt, angsuran PPh 25 Rp 180 jt.",
    "data": [
      "Peredaran Bruto: Rp 20.000.000.000 (Memperoleh fasilitas Pasal 31E proporsional).",
      "Laba Bersih Komersial Sebelum Pajak: Rp 2.500.000.000.",
      "Kredit Pajak: PPh 22 (25 jt) + PPh 23 (35 jt) + PPh 25 (180 jt) = Rp 240.000.000."
    ],
    "instructions": [
      "Susun kertas kerja rekonsiliasi fiskal untuk menentukan Penghasilan Kena Pajak (PKP).",
      "Hitung PPh Badan terutang dengan fasilitas Pasal 31E UU PPh.",
      "Hitung PPh Kurang/Lebih Bayar (Pasal 29/28A) pada SPT Tahunan 1771."
    ],
    "outputFormat": [
      "Tabel koreksi fiskal positif dan negatif",
      "Kalkulasi fasilitas 31E dan PPh Pasal 29"
    ],
    "rubric": [
      "Ketepatan identifikasi koreksi positif & negatif (40%)",
      "Kalkulasi proporsi fasilitas Pasal 31E (35%)",
      "Ketepatan perhitungan PPh Pasal 29 (25%)"
    ],
    "answerGuide": "1. Kertas Kerja Rekonsiliasi Fiskal 2024:\nLaba Bersih Komersial Sebelum Pajak .................. Rp 2.500.000.000\n\nKoreksi Fiskal Positif:\n- Jamuan tanpa daftar nominatif (non-deductible) ...... Rp 40.000.000\n- Sanksi denda pajak (Pasal 9 ayat 1k) ................ Rp 15.000.000\nTotal Koreksi Positif ................................. Rp 55.000.000\n\nKoreksi Fiskal Negatif:\n- Selisih penyusutan fiskal (Fiskal 360 jt - Kom 300 jt) (Rp 60.000.000)\n- Pendapatan bunga deposito (PPh Final) ............... (Rp 50.000.000)\n- Dividen dari anak usaha (Non-Objek UU HPP) .......... (Rp 80.000.000)\nTotal Koreksi Negatif ................................. (Rp 190.000.000)\n\nPenghasilan Kena Pajak (PKP) .......................... Rp 2.365.000.000\n\n2. Perhitungan PPh Badan Terutang (Fasilitas Pasal 31E):\nOmzet = Rp 20.000.000.000 (antara Rp 4,8 M s.d Rp 50 M).\n- Bagian PKP yang mendapat fasilitas tarif 11% (diskon 50% dari 22%):\n  PKP Fasilitas = (Rp 4.800.000.000 / Rp 20.000.000.000) × Rp 2.365.000.000\n  PKP Fasilitas = 24% × Rp 2.365.000.000 = Rp 567.600.000.\n  PPh Fasilitas = 11% × Rp 567.600.000 = Rp 62.436.000.\n\n- Bagian PKP yang TIDAK mendapat fasilitas (tarif normal 22%):\n  PKP Non-Fasilitas = Rp 2.365.000.000 - Rp 567.600.000 = Rp 1.797.400.000.\n  PPh Non-Fasilitas = 22% × Rp 1.797.400.000 = Rp 395.428.000.\n\n- Total PPh Badan Terutang = Rp 62.436.000 + Rp 395.428.000 = Rp 457.864.000.\n\n3. PPh Kurang Bayar (PPh Pasal 29):\nTotal PPh Terutang .................................... Rp 457.864.000\nKredit Pajak:\n- PPh Pasal 22 .......................... Rp 25.000.000\n- PPh Pasal 23 .......................... Rp 35.000.000\n- Angsuran PPh Pasal 25 ................. Rp 180.000.000\nTotal Kredit Pajak .................................... (Rp 240.000.000)\nPPh Kurang Bayar (PPh Pasal 29) ....................... Rp 217.864.000"
  }
];

export const PJK202_BANK: BankSoal[] = [...PJK202_BANK_UTS, ...PJK202_BANK_UAS];
