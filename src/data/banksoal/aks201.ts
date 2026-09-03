// src/data/banksoal/aks201.ts
// Bank Soal Esai & Studi Kasus Akuntansi Sektor Publik (AKS201)
import type { BankSoal } from '../../types';

export const AKS201_BANK_UTS: BankSoal[] = [
  {
    "type": "journal",
    "scope": "TM 5–6: Jurnal Akuntansi Keuangan Daerah SAP Akrual",
    "difficulty": "Menengah",
    "estimatedTime": "30–35 menit",
    "question": "Pencatatan Transaksi Dualistis (Jurnal Finansial & Jurnal Anggaran) SKPD",
    "context": "Dinas Kesehatan Kabupaten Sejahtera (SKPD) pada tahun anggaran 2024 melaksanakan transaksi berikut:\n1. Tanggal 5 Maret 2024: Menerbitkan Surat Ketetapan Retribusi Daerah (SKRD) atas pelayanan kesehatan Puskesmas sebesar Rp 60.000.000.\n2. Tanggal 10 Maret 2024: Menerima kas pelunasan retribusi sebesar Rp 50.000.000 ke Bendahara Penerimaan.\n3. Tanggal 12 Maret 2024: Bendahara Penerimaan menyetor kas retribusi Rp 50.000.000 ke Kas Daerah (Kasda).\n4. Tanggal 20 April 2024: Membeli obat-obatan medis senilai Rp 150.000.000 secara kredit (SP2D-LS diterbitkan oleh BUD kepada rekanan).",
    "data": [
      "SKPD: Dinas Kesehatan; PPKD: Bendahara Umum Daerah.",
      "Transaksi 1: SKRD Terbit Rp 60.000.000.",
      "Transaksi 2: Kas Retribusi Masuk Rp 50.000.000.",
      "Transaksi 3: Setor ke Kasda Rp 50.000.000.",
      "Transaksi 4: Pengadaan Obat SP2D-LS Rp 150.000.000."
    ],
    "instructions": [
      "Buat Jurnal Finansial (Laporan Operasional & Neraca) untuk masing-masing transaksi.",
      "Buat Jurnal Anggaran (Laporan Realisasi Anggaran) untuk transaksi yang melibatkan arus kas.",
      "Jelaskan alasan mengapa transaksi tanggal 5 Maret tidak dicatat dalam Jurnal Anggaran."
    ],
    "outputFormat": [
      "Tabel Jurnal Finansial dan Jurnal Anggaran",
      "Penjelasan basis kas vs akrual"
    ],
    "rubric": [
      "Ketepatan akun jurnal finansial (40%)",
      "Ketepatan akun jurnal anggaran (30%)",
      "Pemahaman konsep pengakuan kas vs akrual (30%)"
    ],
    "answerGuide": "1. Transaksi 5 Maret 2024 (Penerbitan SKRD Rp 60 jt):\n- Jurnal Finansial:\n  (D) Piutang Retribusi Daerah ............. Rp 60.000.000\n      (K) Pendapatan Retribusi Daerah - LO ................. Rp 60.000.000\n- Jurnal Anggaran:\n  TIDAK ADA JURNAL (karena belum ada penerimaan kas riil).\n\n2. Transaksi 10 Maret 2024 (Kas diterima Bendahara Penerimaan Rp 50 jt):\n- Jurnal Finansial:\n  (D) Kas di Bendahara Penerimaan .......... Rp 50.000.000\n      (K) Piutang Retribusi Daerah ......................... Rp 50.000.000\n- Jurnal Anggaran:\n  (D) Perubahan SAL ........................ Rp 50.000.000\n      (K) Pendapatan Retribusi Daerah - LRA ................ Rp 50.000.000\n\n3. Transaksi 12 Maret 2024 (Penyetoran Kas ke Kasda Rp 50 jt):\n- Jurnal Finansial:\n  (D) RK PPKD .............................. Rp 50.000.000\n      (K) Kas di Bendahara Penerimaan ...................... Rp 50.000.000\n- Jurnal Anggaran:\n  TIDAK ADA JURNAL (karena pemindahan kas internal SKPD ke Kasda bukan transaksi pendapatan/belanja LRA).\n\n4. Transaksi 20 April 2024 (Pengadaan Obat SP2D-LS Rp 150 jt):\n- Jurnal Finansial:\n  (D) Beban Persediaan Obat-Obatan - LO ... Rp 150.000.000\n      (K) RK PPKD .......................................... Rp 150.000.000\n- Jurnal Anggaran:\n  (D) Belanja Barang dan Jasa - LRA ........ Rp 150.000.000\n      (K) Perubahan SAL .................................... Rp 150.000.000"
  }
];

export const AKS201_BANK_UAS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 8–10: Hubungan PPKD-SKPD & Evaluasi Value for Money",
    "difficulty": "Tinggi",
    "estimatedTime": "25–35 menit",
    "question": "Analisis Kinerja Keuangan Daerah 3E (Value for Money)",
    "context": "Dinas Kebersihan Kota Madani menganggarkan program pengolahan sampah tahun 2024 dengan rincian: Pagu Anggaran Belanja Rp 1.000.000.000 untuk memproses 20.000 ton sampah. Pada akhir tahun, realisasi belanja operasional adalah Rp 850.000.000 dan volume sampah yang berhasil diproses secara tuntas mencapai 19.000 ton.",
    "data": [
      "Anggaran Belanja: Rp 1.000.000.000; Target Output: 20.000 ton sampah (Standar Biaya: Rp 50.000/ton).",
      "Realisasi Belanja: Rp 850.000.000; Realisasi Output: 19.000 ton sampah (Biaya Aktual: Rp 44.737/ton)."
    ],
    "instructions": [
      "Hitung rasio ekonomis / efisiensi anggaran belanja.",
      "Hitung rasio efektivitas pencapaian target output.",
      "Evaluasi kinerja menyeluruh Dinas Kebersihan berdasarkan konsep Value for Money (Ekonomis, Efisien, Efektif)."
    ],
    "outputFormat": [
      "Kalkulasi rasio matematis 3E",
      "Interpretasi kualitatif kinerja pelayanan publik"
    ],
    "rubric": [
      "Kebenaran perhitungan rasio matematis (40%)",
      "Kedalaman evaluasi 3E Value for Money (60%)"
    ],
    "answerGuide": "1. Kalkulasi Rasio:\n- Rasio Efisiensi / Ekonomis Belanja:\n  Rasio = (Realisasi Belanja / Anggaran Belanja) × 100%\n  Rasio = (Rp 850.000.000 / Rp 1.000.000.000) × 100% = 85,00% (Hemat 15%).\n- Biaya per Satuan Output:\n  * Standar Biaya = Rp 1.000.000.000 / 20.000 ton = Rp 50.000 per ton.\n  * Realisasi Biaya = Rp 850.000.000 / 19.000 ton = Rp 44.737 per ton (Lebih efisien Rp 5.263/ton).\n- Rasio Efektivitas Output:\n  Rasio = (Realisasi Output / Target Output) × 100%\n  Rasio = (19.000 ton / 20.000 ton) × 100% = 95,00%.\n\n2. Evaluasi Menyeluruh Value for Money (3E):\n- Ekonomis: Tercapai dengan sangat baik. Program mampu menghemat pengeluaran anggaran sebesar Rp 150.000.000 (15%).\n- Efisien: Tercapai sangat baik. Biaya aktual per ton sampah (Rp 44.737) lebih rendah daripada standar pagu anggaran (Rp 50.000).\n- Efektif: Cukup Efektif (95%). Meskipun target 20.000 ton belum tercapai 100%, tingkat pencapaian 95% menunjukkan kinerja operasional yang solid.\nRekomendasi: Sisa anggaran efisiensi dapat dialokasikan untuk pemeliharaan armada truk pengangkut agar tahun depan target volume tercapai 100%."
  }
];

export const AKS201_BANK: BankSoal[] = [...AKS201_BANK_UTS, ...AKS201_BANK_UAS];
