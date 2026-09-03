// src/data/banksoal/aka201.ts
// Bank Soal Esai & Studi Kasus Pengauditan Berbasis Risiko I (AKA201)
import type { BankSoal } from '../../types';

export const AKA201_BANK_UTS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 2–5: Kode Etik, Asersi & Penentuan Materialitas Audit",
    "difficulty": "Menengah",
    "estimatedTime": "30–40 menit",
    "question": "Penyusunan Ambang Batas Materialitas (Planning & Performance Materiality) dan Evaluasi Independensi",
    "context": "KAP Rama & Rekan ditunjuk mengaudit laporan keuangan PT Bintang Niaga Tbk untuk tahun buku yang berakhir 31 Desember 2024. Data keuangan pendahuluan klien: Total Aset Rp 200.000.000.000, Pendapatan Penjualan Rp 250.000.000.000, dan Laba Sebelum Pajak Rp 15.000.000.000. Partner audit menetapkan tolok ukur (benchmark) materialitas perencanaan sebesar 5% dari Laba Sebelum Pajak. Selain itu, diketahui bahwa salah satu anggota tim audit senior adalah menantu dari Direktur Utama klien.",
    "data": [
      "Tolok Ukur: 5% dari Laba Sebelum Pajak (Laba Sebelum Pajak: Rp 15 Miliar).",
      "Aturan KAP: Performance materiality ditetapkan 60% dari Planning Materiality; Ambang Trivial ditetapkan 4% dari Planning Materiality.",
      "Isu Independensi: Senior auditor memiliki hubungan kekerabatan dengan Direktur Utama klien."
    ],
    "instructions": [
      "Hitung Materialitas Laporan Keuangan secara Keseluruhan (Planning Materiality).",
      "Hitung Materialitas Pelaksanaan (Performance Materiality) dan Ambang Batas Sepele (Clearly Trivial).",
      "Evaluasi ancaman terhadap independensi auditor berdasarkan Kode Etik Akuntan Publik dan tentukan tindakan pencegahan (safeguard) yang wajib diambil KAP."
    ],
    "outputFormat": [
      "Perhitungan ambang batas materialitas bertingkat",
      "Analisis etika independensi dan mitigasi"
    ],
    "rubric": [
      "Ketepatan perhitungan ketiga level materialitas (40%)",
      "Identifikasi jenis ancaman independensi (30%)",
      "Kesesuaian safeguard pencegahan etika (30%)"
    ],
    "answerGuide": "1. Kalkulasi Ambang Batas Materialitas:\na. Materialitas Keseluruhan (Planning Materiality / PM):\n   PM = 5% × Laba Sebelum Pajak = 5% × Rp 15.000.000.000 = Rp 750.000.000.\nb. Materialitas Pelaksanaan (Performance Materiality):\n   Performance Materiality = 60% × Rp 750.000.000 = Rp 450.000.000.\n   (Fungsi: Membatasi akumulasi risiko salah saji yang tidak terdeteksi pada tingkat akun individual).\nc. Ambang Batas Sepele (Clearly Trivial Threshold):\n   Trivial = 4% × Rp 750.000.000 = Rp 30.000.000.\n   (Salah saji di bawah Rp 30 juta dianggap sepele dan tidak perlu diakumulasikan ke ringkasan salah saji yang belum dikoreksi).\n\n2. Evaluasi Ancaman Etika & Safeguards:\n- Identifikasi Ancaman: Hubungan kekerabatan senior auditor sebagai menantu Direktur Utama memicu Familiarity Threat (ancaman kedekatan) dan Self-Interest Threat yang sangat serius.\n- Tindakan Pencegahan (Safeguard) Wajib:\n  1. Senior auditor tersebut WAJIB SEGERA DIKELUARKAN dari tim penugasan audit PT Bintang Niaga Tbk.\n  2. Kertas kerja yang mungkin telah disusun oleh yang bersangkutan harus direviu ulang oleh staf independen lain.\n  3. Menugaskan Quality Review Partner (EQCR) yang independen untuk mengawasi area-area berisiko tinggi."
  }
];

export const AKA201_BANK_UAS: BankSoal[] = [
  {
    "type": "case",
    "scope": "TM 9–11: Model Risiko Audit & Evaluasi Segitiga Fraud SA 240",
    "difficulty": "Tinggi",
    "estimatedTime": "30–35 menit",
    "question": "Penerapan Audit Risk Model & Prosedur Respon Kecurangan Manajemen",
    "context": "Dalam perencanaan audit PT Cahaya Semesta, auditor menetapkan Acceptable Audit Risk (AAR) pada tingkat 5%. Berdasarkan pemahaman industri dan pengendalian internal klien, auditor menilai Inherent Risk (IR) akun Pendapatan sebesar 80% dan Control Risk (CR) sebesar 50% karena ketiadaan verifikasi independen atas surat jalan pengiriman. Selain itu, ditemukan indikasi bahwa kompensasi bonus manajemen sangat bergantung pada pencapaian target laba yang agresif.",
    "data": [
      "AAR = 5% (0,05).",
      "IR = 80% (0,80); CR = 50% (0,50).",
      "Fraud Risk Factor: Bonus manajer dikaitkan ketat dengan target laba akhir tahun."
    ],
    "instructions": [
      "Hitung Planned Detection Risk (PDR) menggunakan formula Audit Risk Model.",
      "Jelaskan dampak nilai PDR tersebut terhadap jumlah bukti audit substantif yang harus dihimpun.",
      "Analisis faktor risiko fraud berdasarkan Segitiga Kecurangan (Fraud Triangle).",
      "Rancang 3 prosedur audit spesifik untuk mendeteksi potensi kecurangan pengakuan pendapatan dini (cutoff fraud)."
    ],
    "outputFormat": [
      "Kalkulasi matematis PDR",
      "Analisis fraud triangle",
      "Program prosedur audit deteksi cutoff"
    ],
    "rubric": [
      "Ketepatan perhitungan PDR (25%)",
      "Analisis logika risiko dan bukti audit (25%)",
      "Evaluasi fraud triangle (25%)",
      "Perancangan prosedur audit spesifik (25%)"
    ],
    "answerGuide": "1. Perhitungan Planned Detection Risk (PDR):\nFormula: AAR = IR × CR × PDR\nPDR = AAR / (IR × CR)\nPDR = 0,05 / (0,80 × 0,50) = 0,05 / 0,40 = 0,125 (12,5%).\n\n2. Dampak terhadap Bukti Audit:\nNilai PDR sebesar 12,5% tergolong RENDAH. Risiko deteksi yang rendah mengharuskan auditor untuk TIDAK DAPAT mengandalkan pengendalian internal semata, melainkan WAJIB mengumpulkan bukti audit substantif dalam kuantitas yang LEBIH BESAR, lebih kompeten, dan memperluas sampel pengujian transaksi pendapatan mendekati akhir tahun.\n\n3. Analisis Segitiga Fraud (Fraud Triangle):\n- Tekanan (Pressure): Target laba yang agresif dan keterkaitan bonus direksi memicu tekanan berat untuk melakukan pelaporan keuangan curang.\n- Peluang (Opportunity): Kontrol verifikasi surat jalan pengiriman yang lemah (CR 50%) memberi celah mencatat faktur penjualan fiktif tanpa pengiriman fisik.\n- Rasionalisasi (Rationalization): Manajemen membenarkan tindakan memajukan pencatatan pendapatan bulan Januari ke Desember sebagai \"hanya penyesuaian waktu sementara\".\n\n4. Tiga Prosedur Audit Spesifik:\n1. Uji Pisah Batas Penjualan (Sales Cutoff Test): Memeriksa dokumen pengiriman (Bill of Lading) dan faktur penjualan 15 hari sebelum dan 15 hari sesudah tanggal neraca untuk memastikan transaksi dicatat pada periode yang benar.\n2. Konfirmasi Piutang Usaha Positif: Mengirimkan surat konfirmasi langsung kepada pelanggan utama terkait saldo piutang dan syarat penjualan konsinyasi/retur.\n3. Review Jurnal Penyesuaian Akhir Tahun: Menggunakan software audit (CAATs) untuk memfilter seluruh jurnal penyesuaian pendapatan manual yang dibuat pada tanggal 31 Desember atau mendekati penutupan buku."
  }
];

export const AKA201_BANK: BankSoal[] = [...AKA201_BANK_UTS, ...AKA201_BANK_UAS];
