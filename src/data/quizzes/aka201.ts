// src/data/quizzes/aka201.ts
// Bank Soal Kuis Pilihan Ganda Komprehensif Pengauditan Berbasis Risiko I (AKA201)
import type { QuizQuestion } from '../../types';

export const AKA201_QUIZ_UTS: QuizQuestion[] = [
  {
    "tm": 1,
    "topic": "Konsep Dasar Audit & Jasa Asurans",
    "difficulty": "medium",
    "q": "Penyebab utama timbulnya permintaan akan jasa audit laporan keuangan independen oleh para pengguna laporan adalah...",
    "options": [
      "Persyaratan mutlak perbankan untuk membuka rekening koran",
      "Risiko informasi yang diakibatkan oleh benturan kepentingan antara manajemen dan pengguna, kompleksitas transaksi, serta jarak informasi",
      "Jaminan bahwa perusahaan tidak akan pernah mengalami kebangkrutan",
      "Pencegahan 100% atas terjadinya kesalahan pembukuan karyawan"
    ],
    "answer": 1,
    "explanation": "Auditor independen mengurangi information risk akibat adanya keterpisahan prinsipal dan agen serta potensi bias dalam pelaporan keuangan."
  },
  {
    "tm": 2,
    "topic": "Etika Profesi & Independensi",
    "difficulty": "medium",
    "q": "Seorang auditor ditawari posisi sebagai Direktur Keuangan di perusahaan klien audit yang saat ini sedang diperiksanya. Situasi ini menimbulkan ancaman independensi berupa...",
    "options": [
      "Self-interest threat dan familiarity threat",
      "Advocacy threat saja",
      "Intimidation threat saja",
      "Self-review threat saja"
    ],
    "answer": 0,
    "explanation": "Peluang pekerjaan di klien memicu kepentingan pribadi finansial (self-interest) dan kedekatan hubungan masa depan (familiarity)."
  },
  {
    "tm": 3,
    "topic": "Asersi Manajemen",
    "difficulty": "medium",
    "q": "Ketika auditor memeriksa bukti fisik keberadaan mesin pabrik di bengkel kerja untuk memastikan mesin yang tercatat di neraca benar-benar ada, auditor sedang menguji asersi...",
    "options": [
      "Kelengkapan (Completeness)",
      "Keberadaan (Existence)",
      "Hak dan Kewajiban (Rights and Obligations)",
      "Pisah Batas (Cutoff)"
    ],
    "answer": 1,
    "explanation": "Mencocokkan catatan buku ke fisik nyata menguji apakah aset yang dicatat benar-benar ada (keberadaan/existence)."
  },
  {
    "tm": 4,
    "topic": "Laporan Audit & Opini Auditor (SA 700)",
    "difficulty": "medium",
    "q": "Apabila laporan keuangan klien mengandung salah saji yang bersifat MATERIAL tetapi TIDAK PERVASIF, maka opini yang tepat diberikan auditor adalah...",
    "options": [
      "Opini Wajar Tanpa Pengecualian (Unmodified)",
      "Opini Wajar Dengan Pengecualian (Qualified Opinion)",
      "Opini Tidak Wajar (Adverse Opinion)",
      "Opini Tidak Menyatakan Pendapat (Disclaimer)"
    ],
    "answer": 1,
    "explanation": "Salah saji material namun tidak pervasif menghasilkan Opini Wajar Dengan Pengecualian (\"kecuali untuk dampak hal yang dijelaskan...\")."
  },
  {
    "tm": 5,
    "topic": "Materialitas Audit (SA 320)",
    "difficulty": "medium",
    "q": "Mengapa auditor menetapkan Materialitas Pelaksanaan (Performance Materiality) pada tingkat yang LEBIH RENDAH daripada Materialitas Laporan Keuangan secara Keseluruhan?",
    "options": [
      "Untuk mempercepat waktu penyelesaian audit di lapangan",
      "Untuk mengurangi ke tingkat rendah yang tepat probabilitas bahwa akumulasi salah saji yang tidak terdeteksi melebihi materialitas keseluruhan",
      "Untuk mematuhi instruksi manajemen klien dalam menekan biaya audit",
      "Untuk membatasi jumlah sampel dokumen yang diperiksa"
    ],
    "answer": 1,
    "explanation": "Performance materiality memberikan bantalan pengaman agar total salah saji kecil yang terakumulasi tidak melampaui batas materialitas keseluruhan."
  },
  {
    "tm": 6,
    "topic": "Bukti Audit & Prosedur Vouching (SA 500)",
    "difficulty": "medium",
    "q": "Prosedur audit yang menelusuri dari buku jurnal penjualan mundur ke faktur penjualan dan dokumen pengiriman barang (vouching) bertujuan utama menguji asersi...",
    "options": [
      "Kelengkapan (Completeness / Understatement)",
      "Keterjadian (Occurrence / Overstatement)",
      "Hak dan Kewajiban",
      "Klasifikasi Akun"
    ],
    "answer": 1,
    "explanation": "Vouching (dari jurnal ke dokumen sumber) mendeteksi transaksi fiktif atau pencatatan berlebih (menguji Keterjadian). Tracing menguji Kelengkapan."
  },
  {
    "tm": 7,
    "topic": "Prosedur Analitis (SA 520)",
    "difficulty": "medium",
    "q": "Dalam standar audit ISA, prosedur analitis DIWAJIBKAN untuk dilaksanakan pada dua tahapan audit berikut, yaitu...",
    "options": [
      "Tahap Perencanaan (Penilaian Risiko) dan Tahap Reviu Akhir (Penyelesaian Audit)",
      "Tahap Pengujian Pengendalian dan Tahap Pengujian Substantif Saldo",
      "Tahap Konfirmasi Eksternal dan Tahap Stock Opname",
      "Tahap Penerbitan Surat Manajemen dan Tahap Penagihan Invoice"
    ],
    "answer": 0,
    "explanation": "SA 520 mewajibkan prosedur analitis pada tahap penilaian risiko awal (perencanaan) dan tahap evaluasi menyeluruh sebelum opini final ditandatangani."
  }
];

export const AKA201_QUIZ_UAS: QuizQuestion[] = [
  {
    "tm": 8,
    "topic": "Perencanaan Audit & Pemahaman Klien",
    "difficulty": "medium",
    "q": "Surat tertulis resmi antara Kantor Akuntan Publik dan klien yang mendokumentasikan tujuan perikatan, ruang lingkup tanggung jawab, dan dasar penetapan honorarium disebut...",
    "options": [
      "Management Representation Letter",
      "Audit Engagement Letter (Surat Perikatan Audit)",
      "Management Letter",
      "Comfort Letter"
    ],
    "answer": 1,
    "explanation": "Engagement letter mengonfirmasi penerimaan penugasan dan mencegah kesalahpahaman antara auditor dan manajemen klien."
  },
  {
    "tm": 9,
    "topic": "Model Risiko Audit (SA 200)",
    "difficulty": "medium",
    "q": "Jika auditor menilai Inherent Risk (IR) dan Control Risk (CR) klien sangat TINGGI, maka untuk mempertahankan Acceptable Audit Risk (AAR) pada tingkat yang rendah, Planned Detection Risk (PDR) harus ditetapkan...",
    "options": [
      "Sangat Tinggi, sehingga pengujian substantif dikurangi",
      "Rendah, sehingga bukti audit substantif yang dikumpulkan harus LEBIH BANYAK dan meyakinkan",
      "Tidak berubah, karena risiko pengendalian tidak memengaruhi risiko deteksi",
      "Nol mutlak tanpa pengujian sampel"
    ],
    "answer": 1,
    "explanation": "PDR = AAR / (IR × CR). Jika IR dan CR tinggi, PDR harus rendah, yang mewajibkan auditor memperluas pengujian substantif."
  },
  {
    "tm": 10,
    "topic": "Pertimbangan Fraud (SA 240)",
    "difficulty": "medium",
    "q": "Tiga kondisi yang membentuk Segitiga Kecurangan (Fraud Triangle) menurut Donald Cressey adalah...",
    "options": [
      "Peluang, Keserakahan, dan Kebodohan",
      "Tekanan/Insentif, Peluang (Opportunity), dan Rasionalisasi/Sikap",
      "Kolusi, Kurangnya Pengawasan, dan Kompensasi Rendah",
      "Pemberontakan, Ketiadaan Dokumen, dan Otorisasi Ganda"
    ],
    "answer": 1,
    "explanation": "Fraud triangle terdiri dari Pressure/Incentive, Opportunity (kelemahan kontrol), dan Rationalization (pembenaran diri)."
  },
  {
    "tm": 11,
    "topic": "Pengendalian Internal COSO & Pemisahan Tugas",
    "difficulty": "medium",
    "q": "Untuk mencegah terjadinya kecurangan dan kesalahan, fungsi-fungsi berikut HARUS dipisahkan satu sama lain, KECUALI...",
    "options": [
      "Fungsi Otorisasi Transaksi",
      "Fungsi Pencatatan Akuntansi",
      "Fungsi Penyimpanan Fisik Aset (Custody)",
      "Fungsi Penyusunan Anggaran Operasional dan Perencanaan Strategis Pemasaran"
    ],
    "answer": 3,
    "explanation": "Pemisahan tugas kunci (Segregation of Duties) mewajibkan pemisahan antara: Otorisasi, Pencatatan, Kustodi aset, dan Rekonsiliasi independen."
  },
  {
    "tm": 12,
    "topic": "Pengujian Pengendalian (TOC) vs Substantif",
    "difficulty": "medium",
    "q": "Jika hasil pengujian pengendalian (Tests of Controls) membuktikan bahwa sistem pengendalian internal klien beroperasi sangat efektif sepanjang tahun, maka auditor dapat...",
    "options": [
      "Menaikkan penilaian risiko pengendalian (Control Risk) ke tingkat maksimum",
      "Mengurangi luas pengujian rincian saldo substantif (Tests of Details of Balances)",
      "Menerbitkan laporan opini wajar dengan pengecualian",
      "Menghilangkan seluruh prosedur audit kelangsungan usaha"
    ],
    "answer": 1,
    "explanation": "TOC yang memuaskan menurunkan Control Risk, menaikkan batas PDR, sehingga auditor dapat membatasi ukuran sampel pengujian substantif."
  },
  {
    "tm": 13,
    "topic": "Teknik Audit Berbantuan Komputer (CAATs)",
    "difficulty": "medium",
    "q": "Teknik audit sistem informasi di mana auditor memproses data transaksi uji buatan (mengandung kesalahan terencana) ke dalam program komputer klien untuk menguji kontrol aplikasi disebut...",
    "options": [
      "Parallel Simulation",
      "Test Data Approach",
      "Integrated Test Facility (ITF)",
      "Embedded Audit Module"
    ],
    "answer": 1,
    "explanation": "Test data approach menguji apakah kontrol validasi aplikasi klien mampu mendeteksi dan menolak data uji yang tidak valid."
  },
  {
    "tm": 14,
    "topic": "Review UAS Pengauditan I",
    "difficulty": "medium",
    "q": "Konfirmasi positif saldo piutang usaha yang dikirimkan auditor kepada debitur klien meminta responden untuk membalas...",
    "options": [
      "Hanya jika debitur tidak setuju dengan saldo piutang yang tercantum",
      "Baik jika setuju maupun jika tidak setuju dengan informasi saldo yang tercantum",
      "Hanya jika debitur telah melunasi seluruh kewajibannya",
      "Kepada manajemen klien secara langsung bukan ke auditor"
    ],
    "answer": 1,
    "explanation": "Konfirmasi Positif mensyaratkan balasan dalam kondisi apapun (setuju atau tidak setuju). Konfirmasi Negatif hanya dibalas jika ada selisih."
  }
];

export const AKA201_QUIZ: QuizQuestion[] = [...AKA201_QUIZ_UTS, ...AKA201_QUIZ_UAS];
