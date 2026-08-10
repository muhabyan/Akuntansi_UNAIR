// ============================================================================
// src/data/flashcards/pjk201.ts
// Flashcard Komprehensif Perpajakan I (PJK201) — S1 Akuntansi FEB UNAIR
// Terstruktur dalam 2 Fase: Pra-UTS (TM 1-7: KUP & Dasar Pajak) dan
// Pra-UAS (TM 8-14: Pemeriksaan, Sengketa, Penagihan, Bea Meterai, Pajak Daerah)
// ============================================================================

import type { AdvancedStudyCard } from '../../types';

export const PJK201_FC: AdvancedStudyCard[] = [
  // ==========================================================================
  // FASE PRA-UTS (TM 1 - TM 7: KUP & DASAR PERPAJAKAN)
  // ==========================================================================

  // --- TM 1: Kebijakan Fiskal, Sejarah & Pengertian Pajak ---
  {
    id: "pjk201-tm01-01",
    phase: "pra-uts",
    tm: 1,
    topic: "Definisi Pajak (UU KUP)",
    category: "Definisi",
    front: "Definisi Pajak menurut UU KUP No. 28 Tahun 2007",
    back: "Kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan yang bersifat memaksa berdasarkan Undang-Undang, dengan tidak mendapatkan imbalan secara langsung dan digunakan untuk keperluan negara bagi sebesar-besarnya kemakmuran rakyat."
  },
  {
    id: "pjk201-tm01-02",
    phase: "pra-uts",
    tm: 1,
    topic: "Fungsi Budgetair",
    category: "Konsep",
    front: "Fungsi Budgetair (Fungsi Finansial)",
    back: "Fungsi pajak sebagai sumber penerimaan kas negara terbesar untuk membiayai pengeluaran rutin dan pembangunan (menjalankan anggaran pendapatan dan belanja negara/APBN)."
  },
  {
    id: "pjk201-tm01-03",
    phase: "pra-uts",
    tm: 1,
    topic: "Fungsi Regulerend",
    category: "Konsep",
    front: "Fungsi Regulerend (Fungsi Mengatur)",
    back: "Fungsi pajak sebagai alat untuk mengatur atau melaksanakan kebijakan pemerintah dalam bidang sosial dan ekonomi (contoh: tarif cukai rokok tinggi untuk menekan konsumsi, insentif pajak untuk UMKM)."
  },
  {
    id: "pjk201-tm01-04",
    phase: "pra-uts",
    tm: 1,
    topic: "Fungsi Alokasi & Distribusi",
    category: "Konsep",
    front: "Fungsi Alokasi & Fungsi Distribusi Pajak",
    back: "Fungsi Alokasi: menyediakan barang dan layanan publik (jalan, sekolah, rumah sakit). Fungsi Distribusi: menyeimbangkan dan meratakan pendapatan masyarakat melalui pemerataan pembangunan serta perlindungan sosial."
  },
  {
    id: "pjk201-tm01-05",
    phase: "pra-uts",
    tm: 1,
    topic: "Perbedaan Pajak vs Retribusi",
    category: "Miskonsepsi",
    front: "Perbedaan Utama Pajak dan Retribusi",
    back: "Pajak tidak memberikan kontraprestasi (imbalan) langsung kepada pembayarnya dan berlaku umum; sedangkan Retribusi memberikan kontraprestasi langsung yang dapat dirasakan oleh pembayar (misal: retribusi parkir, kebersihan, izin mendirikan bangunan)."
  },
  {
    id: "pjk201-tm01-06",
    phase: "pra-uts",
    tm: 1,
    topic: "Reformasi Pajak 1983",
    category: "Sejarah",
    front: "Tonggak Reformasi Perpajakan Indonesia Tahun 1983",
    back: "Perubahan fundamental sistem pemungutan dari Official Assessment System (pajak ditentukan sepenuhnya oleh aparat fiskus pada era kolonial) menjadi Self Assessment System (wajib pajak aktif menghitung, membayar, dan melaporkan pajaknya sendiri)."
  },

  // --- TM 2: Teori, Jenis, Cara Pemungutan, Tarif & Utang Pajak ---
  {
    id: "pjk201-tm02-07",
    phase: "pra-uts",
    tm: 2,
    topic: "Teori Asuransi & Teori Kepentingan",
    category: "Teori",
    front: "Teori Asuransi vs Teori Kepentingan dalam Pemungutan Pajak",
    back: "Teori Asuransi: negara mengemban tugas melindungi jiwa dan harta warga, sehingga wajar rakyat membayar premi (pajak). Teori Kepentingan: besarnya beban pajak disesuaikan dengan seberapa besar kepentingan seseorang terhadap perlindungan negara."
  },
  {
    id: "pjk201-tm02-08",
    phase: "pra-uts",
    tm: 2,
    topic: "Teori Daya Pikul & Teori Bakti",
    category: "Teori",
    front: "Teori Daya Pikul vs Teori Bakti (Kewajiban Mutlak)",
    back: "Teori Daya Pikul: beban pajak harus sama beratnya sesuai kemampuan kemampuan finansial (pendapatan dikurangi pengeluaran pokok). Teori Bakti: hak mutlak negara untuk memungut pajak dan kewajiban mutlak warga untuk berbakti kepada negara."
  },
  {
    id: "pjk201-tm02-09",
    phase: "pra-uts",
    tm: 2,
    topic: "Pajak Langsung vs Tidak Langsung",
    category: "Klasifikasi",
    front: "Pajak Langsung (Direct Tax) vs Pajak Tidak Langsung (Indirect Tax)",
    back: "Pajak Langsung: beban pajaknya harus dipikul sendiri oleh wajib pajak dan tidak dapat dilimpahkan kepada pihak lain (contoh: PPh, PBB). Pajak Tidak Langsung: bebannya dapat dilimpahkan kepada pihak akhir/konsumen (contoh: PPN, PPnBM, Cukai)."
  },
  {
    id: "pjk201-tm02-10",
    phase: "pra-uts",
    tm: 2,
    topic: "Pajak Subjektif vs Objektif",
    category: "Klasifikasi",
    front: "Pajak Subjektif vs Pajak Objektif",
    back: "Pajak Subjektif: pengenaannya memperhatikan kondisi pribadi/subjeknya (contoh: PPh melihat status kawin dan jumlah tanggungan/PTKP). Pajak Objektif: pengenaannya hanya memperhatikan objeknya tanpa melihat kondisi pribadi pembayarnya (contoh: PPN, PBB)."
  },
  {
    id: "pjk201-tm02-11",
    phase: "pra-uts",
    tm: 2,
    topic: "Stelsel Pajak (Nyata, Anggapan, Campuran)",
    category: "Mekanisme",
    front: "Stelsel Nyata (Riil), Stelsel Anggapan (Fiktif), dan Stelsel Campuran",
    back: "Stelsel Nyata: pajak dihitung di akhir tahun berdasarkan penghasilan sesungguhnya. Stelsel Anggapan: pajak dihitung di awal tahun berdasarkan asumsi/penghasilan tahun lalu. Stelsel Campuran: kombinasi keduanya, bayar angsuran awal tahun lalu dikoreksi di akhir tahun."
  },
  {
    id: "pjk201-tm02-12",
    phase: "pra-uts",
    tm: 2,
    topic: "Jenis Tarif Pajak",
    category: "Tarif",
    front: "4 Jenis Tarif Pajak (Proporsional, Progresif, Regresif, Tetap)",
    back: "Proporsional: persentase tetap (PPN 11%). Progresif: persentase naik seiring kenaikan dasar pengenaan (PPh OP Pasal 17). Regresif: persentase turun saat dasar pengenaan naik. Tetap: nominal rupiah tetap berapapun nilainya (Bea Meterai Rp 10.000)."
  },
  {
    id: "pjk201-tm02-13",
    phase: "pra-uts",
    tm: 2,
    topic: "Timbul & Hapusnya Utang Pajak",
    category: "Hukum",
    front: "Ajaran Materiil vs Ajaran Formil Timbulnya Utang Pajak",
    back: "Ajaran Materiil: utang pajak timbul dengan sendirinya karena terpenuhinya tatabestaan/undang-undang (ada subjek dan objek, berlaku di Self Assessment). Ajaran Formil: utang pajak timbul setelah diterbitkannya Surat Ketetapan Pajak (SKP) oleh fiskus (berlaku di Official Assessment)."
  },

  // --- TM 3: Asas Pemungutan & Hukum Pajak Internasional ---
  {
    id: "pjk201-tm03-14",
    phase: "pra-uts",
    tm: 3,
    topic: "The Four Maxims (Adam Smith)",
    category: "Prinsip",
    front: "4 Asas Pemungutan Pajak menurut Adam Smith (The Four Maxims)",
    back: "1) Equality (keadilan & kesetaraan daya pikul); 2) Certainty (kepastian hukum, objek, dan tarif); 3) Convenience of Payment (kemudahan waktu pembayaran); 4) Economy/Efficiency (biaya pemungutan harus serendah mungkin dibanding hasil pajaknya)."
  },
  {
    id: "pjk201-tm03-15",
    phase: "pra-uts",
    tm: 3,
    topic: "Asas Domisili, Sumber & Kewarganegaraan",
    category: "Prinsip",
    front: "Asas Domisili (Tempat Tinggal), Asas Sumber, dan Asas Kewarganegaraan",
    back: "Asas Domisili: negara memungut pajak atas seluruh penghasilan penduduknya (worldwide income). Asas Sumber: negara memungut pajak atas penghasilan yang bersumber di wilayahnya tanpa melihat domisili subjek. Asas Kewarganegaraan: pajak didasarkan pada status kewarganegaraan (seperti sistem AS)."
  },
  {
    id: "pjk201-tm03-16",
    phase: "pra-uts",
    tm: 3,
    topic: "Pajak Berganda (Double Taxation)",
    category: "Konsep",
    front: "Pajak Berganda Yuridis vs Pajak Berganda Ekonomis",
    back: "Pajak Berganda Yuridis: satu subjek pajak dikenakan pajak oleh dua negara atau lebih atas objek penghasilan yang sama pada periode yang sama. Pajak Berganda Ekonomis: satu objek pajak dikenakan pajak lebih dari satu kali di tangan subjek yang berbeda (misal: laba perseroan dikena PPh Badan, lalu dividennya dikena PPh lagi)."
  },
  {
    id: "pjk201-tm03-17",
    phase: "pra-uts",
    tm: 3,
    topic: "P3B (Tax Treaty)",
    category: "Definisi",
    front: "P3B (Perjanjian Penghindaran Pajak Berganda / Tax Treaty)",
    back: "Perjanjian bilateral antar negara untuk mengeliminasi pajak berganda, mencegah pengelakan pajak internasional (tax evasion), serta mengatur hak pemajakan antar negara sumber dan negara domisili."
  },

  // --- TM 4: KUP — NPWP/NPPKP, Subjek & Objek Pajak Secara Umum ---
  {
    id: "pjk201-tm04-18",
    phase: "pra-uts",
    tm: 4,
    topic: "Definisi NPWP",
    category: "Definisi",
    front: "NPWP (Nomor Pokok Wajib Pajak)",
    back: "Nomor yang diberikan kepada Wajib Pajak sebagai sarana dalam administrasi perpajakan yang dipergunakan sebagai tanda pengenal diri atau identitas Wajib Pajak dalam melaksanakan hak dan kewajiban perpajakannya."
  },
  {
    id: "pjk201-tm04-19",
    phase: "pra-uts",
    tm: 4,
    topic: "Fungsi & Kewajiban NPPKP",
    category: "Definisi",
    front: "NPPKP (Nomor Pengukuhan Pengusaha Kena Pajak)",
    back: "Status yang diberikan kepada pengusaha yang melakukan penyerahan BKP/JKP (omzet > Rp 4,8 Miliar per tahun atau memilih dikukuhkan). Berfungsi untuk memungut, menyetor, dan melaporkan PPN serta menerbitkan Faktur Pajak."
  },
  {
    id: "pjk201-tm04-20",
    phase: "pra-uts",
    tm: 4,
    topic: "Penghapusan NPWP & Pencabutan NPPKP",
    category: "Prosedur",
    front: "Alasan Penghapusan NPWP dan Pencabutan NPPKP",
    back: "NPWP dihapus jika: WP OP meninggal tanpa warisan, WP meninggalkan Indonesia selamanya, WP Badan bubar, atau warisan selesai dibagi. NPPKP dicabut jika PKP pindah alamat, omzet turun di bawah Rp 4,8 M (kembali jadi pengusaha kecil), atau bubar."
  },
  {
    id: "pjk201-tm04-21",
    phase: "pra-uts",
    tm: 4,
    topic: "Wajib Pajak Dalam Negeri vs Luar Negeri",
    category: "Subjek",
    front: "Kriteria Wajib Pajak Dalam Negeri (WPDN) vs Luar Negeri (WPLN)",
    back: "WPDN: bertempat tinggal di Indonesia, atau berada di Indonesia > 183 hari dalam 12 bulan, atau berniat tinggal di Indonesia. WPLN: tidak tinggal/berada di Indonesia < 183 hari yang memperoleh penghasilan dari Indonesia (melalui BUT maupun pemotongan langsung)."
  },
  {
    id: "pjk201-tm04-22",
    phase: "pra-uts",
    tm: 4,
    topic: "Objek Pajak secara Umum (UU KUP)",
    category: "Objek",
    front: "Konsep Objek Pajak dalam KUP",
    back: "Setiap tambahan kemampuan ekonomis yang diterima atau diperoleh Wajib Pajak, baik yang berasal dari dalam maupun dari luar negeri, yang dapat dipakai untuk konsumsi atau untuk menambah kekayaan Wajib Pajak yang bersangkutan dengan nama dan dalam bentuk apapun."
  },

  // --- TM 5: KUP — Pembayaran, Pelaporan Pajak & SPT ---
  {
    id: "pjk201-tm05-23",
    phase: "pra-uts",
    tm: 5,
    topic: "Definisi SPT",
    category: "Definisi",
    front: "SPT (Surat Pemberitahuan)",
    back: "Surat yang oleh Wajib Pajak digunakan untuk melaporkan penghitungan dan/atau pembayaran pajak, objek pajak dan/atau bukan objek pajak, dan/atau harta dan kewajiban sesuai dengan ketentuan peraturan perundang-undangan perpajakan."
  },
  {
    id: "pjk201-tm05-24",
    phase: "pra-uts",
    tm: 5,
    topic: "Batas Waktu Pelaporan SPT",
    category: "Standar",
    front: "Batas Waktu Pelaporan SPT Masa dan SPT Tahunan",
    back: "SPT Masa: paling lambat tanggal 20 bulan berikutnya (untuk PPN akhir bulan berikutnya). SPT Tahunan WP OP: paling lambat 3 bulan setelah akhir tahun pajak (31 Maret). SPT Tahunan WP Badan: paling lambat 4 bulan setelah akhir tahun pajak (30 April)."
  },
  {
    id: "pjk201-tm05-25",
    phase: "pra-uts",
    tm: 5,
    topic: "Sanksi Keterlambatan Lapor SPT",
    category: "Sanksi",
    front: "Sanksi Denda Keterlambatan Pelaporan SPT (Pasal 7 KUP)",
    back: "SPT Masa PPN: Rp 500.000. SPT Masa lainnya: Rp 100.000. SPT Tahunan OP: Rp 100.000. SPT Tahunan Badan: Rp 1.000.000."
  },
  {
    id: "pjk201-tm05-26",
    phase: "pra-uts",
    tm: 5,
    topic: "e-Billing & SSP",
    category: "Mekanisme",
    front: "e-Billing (Surat Setoran Pajak Elektronik)",
    back: "Metode pembayaran pajak secara elektronik menggunakan Kode Billing (kode identifikasi diterbitkan sistem Ditjen Pajak atas jenis pajak, masa, tahun pajak, dan nominal yang akan dibayar)."
  },
  {
    id: "pjk201-tm05-27",
    phase: "pra-uts",
    tm: 5,
    topic: "Pembetulan SPT (Pasal 8 KUP)",
    category: "Prosedur",
    front: "Hak Pembetulan SPT oleh Wajib Pajak",
    back: "WP dapat membetulkan SPT dengan kemauan sendiri dengan menyampaikan pernyataan tertulis, dengan syarat Dirjen Pajak BELUM melakukan tindakan pemeriksaan atau penyidikan."
  },

  // --- TM 6: Kepatuhan Pajak & Tax Digitalization ---
  {
    id: "pjk201-tm06-28",
    phase: "pra-uts",
    tm: 6,
    topic: "Kepatuhan Formal vs Materiil",
    category: "Konsep",
    front: "Kepatuhan Formal vs Kepatuhan Materiil",
    back: "Kepatuhan Formal: memenuhi administrasi ketepatan waktu lapor dan bayar sesuai jadwal hukum. Kepatuhan Materiil: isi pelaporan SPT secara substantif jujur, akurat, dan sesuai dengan ketentuan hukum pajak yang sesungguhnya."
  },
  {
    id: "pjk201-tm06-29",
    phase: "pra-uts",
    tm: 6,
    topic: "Tax Evasion vs Tax Avoidance",
    category: "Miskonsepsi",
    front: "Tax Evasion (Pengelakan) vs Tax Avoidance (Penghindaran)",
    back: "Tax Evasion: tindakan ilegal mengurangi pajak dengan memalsukan data, menyembunyikan omzet, atau tindak pidana. Tax Avoidance: rekayasa legal memanfaatkan celah undang-undang (loopholes) untuk meminimalkan beban pajak tanpa melanggar hukum."
  },
  {
    id: "pjk201-tm06-30",
    phase: "pra-uts",
    tm: 6,
    topic: "PSIAP / CoreTax System",
    category: "Definisi",
    front: "PSIAP (Pembaruan Sistem Inti Administrasi Perpajakan / CoreTax)",
    back: "Proyek transformasi digital komprehensif Ditjen Pajak untuk mengintegrasikan seluruh layanan perpajakan (registrasi, pembayaran, pelaporan, pemeriksaan, penagihan, tax account) dalam satu sistem terpadu berfokus pada pengalaman WP dan otomasi."
  },
  {
    id: "pjk201-tm06-31",
    phase: "pra-uts",
    tm: 6,
    topic: "e-Filing, e-Form, dan e-Bupot",
    category: "Dokumen",
    front: "Layanan Digital DJP (e-Filing, e-Form, e-Bupot)",
    back: "e-Filing: pelaporan SPT online secara real-time. e-Form: pengisian SPT offline via file form (.pdf/.xfdl) lalu diunggah saat selesai. e-Bupot: aplikasi pembuatan bukti pemotongan/pemungutan PPh secara elektronik."
  },

  // --- TM 7: Pembukuan & Pencatatan ---
  {
    id: "pjk201-tm07-32",
    phase: "pra-uts",
    tm: 7,
    topic: "Pembukuan vs Pencatatan (Pasal 28 KUP)",
    category: "Definisi",
    front: "Perbedaan Pembukuan dan Pencatatan",
    back: "Pembukuan: proses pencatatan teratur mengumpulkan data keuangan (harta, kewajiban, modal, penghasilan, biaya) hingga menyusun laporan keuangan neraca & laba rugi (Wajib bagi WP Badan & WP OP omzet >= Rp 4,8 M). Pencatatan: pengumpulan data peredaran bruto secara sederhana (Boleh untuk WP OP omzet < Rp 4,8 M atau pekerja bebas)."
  },
  {
    id: "pjk201-tm07-33",
    phase: "pra-uts",
    tm: 7,
    topic: "Syarat Sah Pembukuan Fiskal",
    category: "Standar",
    front: "4 Syarat Penyelenggaraan Pembukuan menurut UU KUP",
    back: "1) Diselenggarakan dengan iktikad baik dan mencerminkan keadaan sebenarnya; 2) Diselenggarakan di Indonesia dengan huruf Latin, angka Arab, mata uang Rupiah, dan bahasa Indonesia (atau asing izin Menkeu); 3) Asas taat asas (konsisten metode akrual/kas); 4) Buku dan bukti transaksi wajib disimpan selama 10 tahun di Indonesia."
  },
  {
    id: "pjk201-tm07-34",
    phase: "pra-uts",
    tm: 7,
    topic: "NPPN (Norma Penghitungan Penghasilan Neto)",
    category: "Mekanisme",
    front: "NPPN (Norma Penghitungan Penghasilan Neto)",
    back: "Fasilitas bagi WP OP yang melakukan pencatatan (omzet < Rp 4,8 M) untuk menghitung penghasilan neto dengan mengalikan peredaran bruto dengan persentase norma sesuai wilayah dan jenis usaha/profesi (wajib lapor ke DJP maksimal 3 bulan pertama tahun pajak)."
  },
  {
    id: "pjk201-tm07-35",
    phase: "pra-uts",
    tm: 7,
    topic: "Sanksi Tidak Melakukan Pembukuan",
    category: "Sanksi",
    front: "Konsekuensi Tidak Melakukan Pembukuan bagi WP Wajib Pembukuan",
    back: "Pajak terutang akan ditetapkan secara jabatan oleh fiskus (SKPKB) disertai sanksi kenaikan administrasi, karena fiskus tidak dapat menguji kebenaran penghitungan pajak dari bukti pembukuan."
  },

  // ==========================================================================
  // FASE PRA-UAS (TM 8 - TM 14: PEMERIKSAAN, SENGKETA, PENAGIHAN, METERAI & PAJAK DAERAH)
  // ==========================================================================

  // --- TM 8: Penelitian, Pemeriksaan, dan Penyidikan Pajak ---
  {
    id: "pjk201-tm08-36",
    phase: "pra-uas",
    tm: 8,
    topic: "Penelitian vs Pemeriksaan vs Penyidikan",
    category: "Definisi",
    front: "Perbedaan Penelitian, Pemeriksaan, dan Penyidikan",
    back: "Penelitian: pengujian kelengkapan formal administrasi dan kebenaran hitung angka di SPT. Pemeriksaan: serangkaian kegiatan mencari dan mengolah data/bukti untuk menguji kepatuhan materiil. Penyidikan: proses projustitia oleh PPNS DJP mencari tersangka atas bukti permulaan tindak pidana perpajakan."
  },
  {
    id: "pjk201-tm08-37",
    phase: "pra-uas",
    tm: 8,
    topic: "Tujuan Pemeriksaan Pajak",
    category: "Konsep",
    front: "2 Tujuan Utama Pemeriksaan Pajak",
    back: "1) Menguji kepatuhan pemenuhan kewajiban perpajakan (misal: SPT Lebih Bayar, SPT Rugi, tidak lapor SPT, atau analisis risiko); 2) Tujuan lain dalam rangka melaksanakan ketentuan UU (misal: pemberian/penghapusan NPWP, pencabutan NPPKP, penentuan lokasi BUT)."
  },
  {
    id: "pjk201-tm08-38",
    phase: "pra-uas",
    tm: 8,
    topic: "Pemeriksaan Kantor vs Lapangan",
    category: "Prosedur",
    front: "Pemeriksaan Kantor vs Pemeriksaan Lapangan",
    back: "Pemeriksaan Kantor: dilakukan di kantor DJP dengan memanggil WP untuk membawa dokumen pendukung (jangka waktu 4 bulan + perpanjangan 2 bulan). Pemeriksaan Lapangan: dilakukan di tempat usaha/tinggal WP dengan mendatangi langsung (jangka waktu 6 bulan + perpanjangan 2 bulan)."
  },
  {
    id: "pjk201-tm08-39",
    phase: "pra-uas",
    tm: 8,
    topic: "Produk Akhir Pemeriksaan (LHP)",
    category: "Dokumen",
    front: "Laporan Hasil Pemeriksaan (LHP)",
    back: "Laporan yang berisi tentang pelaksanaan dan hasil pemeriksaan yang disusun oleh pemeriksa pajak secara ringkas dan jelas, yang menjadi dasar penerbitan Surat Ketetapan Pajak (SKP) atau Surat Tagihan Pajak (STP)."
  },
  {
    id: "pjk201-tm08-40",
    phase: "pra-uas",
    tm: 8,
    topic: "Kewajiban WP Saat Diperiksa",
    category: "Standar",
    front: "Kewajiban Wajib Pajak saat Dilakukan Pemeriksaan",
    back: "Wajib memperlihatkan dan meminjamkan buku/catatan/dokumen, memberi kesempatan pemeriksa memasuki tempat usaha/bangunan, dan memberi keterangan lisan maupun tertulis yang diperlukan."
  },

  // --- TM 9: Penetapan & Ketetapan Pajak, Restitusi ---
  {
    id: "pjk201-tm09-41",
    phase: "pra-uas",
    tm: 9,
    topic: "SKPKB (Surat Ketetapan Pajak Kurang Bayar)",
    category: "Dokumen",
    front: "SKPKB (Surat Ketetapan Pajak Kurang Bayar)",
    back: "Surat ketetapan yang menentukan besarnya jumlah pokok pajak, kredit pajak, kekurangan bayar pokok pajak, besarnya sanksi administrasi (bunga/kenaikan), dan jumlah pajak yang masih harus dibayar (diterbitkan dalam jangka waktu maksimal 5 tahun)."
  },
  {
    id: "pjk201-tm09-42",
    phase: "pra-uas",
    tm: 9,
    topic: "SKPKBT (Surat Ketetapan Pajak Kurang Bayar Tambahan)",
    category: "Dokumen",
    front: "SKPKBT (Surat Ketetapan Pajak Kurang Bayar Tambahan)",
    back: "Surat ketetapan yang menentukan tambahan atas jumlah pajak yang telah ditetapkan sebelumnya (biasanya diterbitkan jika ditemukan data baru/novum setelah pemeriksaan ulang, disertai sanksi kenaikan 100% dari jumlah kurang bayar tambahan)."
  },
  {
    id: "pjk201-tm09-43",
    phase: "pra-uas",
    tm: 9,
    topic: "SKPLB (Surat Ketetapan Pajak Lebih Bayar)",
    category: "Dokumen",
    front: "SKPLB (Surat Ketetapan Pajak Lebih Bayar)",
    back: "Surat ketetapan yang menentukan jumlah kelebihan pembayaran pajak karena jumlah kredit pajak lebih besar daripada pajak yang terutang atau tidak seharusnya terutang."
  },
  {
    id: "pjk201-tm09-44",
    phase: "pra-uas",
    tm: 9,
    topic: "SKPN (Surat Ketetapan Pajak Nihil)",
    category: "Dokumen",
    front: "SKPN (Surat Ketetapan Pajak Nihil)",
    back: "Surat ketetapan yang menentukan jumlah pokok pajak sama besarnya dengan jumlah kredit pajak atau pajak tidak terutang dan tidak ada kredit pajak."
  },
  {
    id: "pjk201-tm09-45",
    phase: "pra-uas",
    tm: 9,
    topic: "Restitusi Pajak (Pasal 17B KUP)",
    category: "Mekanisme",
    front: "Prosedur Restitusi (Pengembalian Kelebihan Pembayaran Pajak)",
    back: "WP mengajukan permohonan restitusi pada SPT. DJP wajib menerbitkan keputusan setelah melakukan pemeriksaan paling lambat 12 bulan sejak permohonan diterima lengkap. Jika lewat 12 bulan tidak ada keputusan, permohonan dianggap dikabulkan."
  },
  {
    id: "pjk201-tm09-46",
    phase: "pra-uas",
    tm: 9,
    topic: "Pengembalian Pendahuluan (Pasal 17C / 17D KUP)",
    category: "Mekanisme",
    front: "Pengembalian Pendahuluan Kelebihan Pajak (WP Kriteria Tertentu / Patuh)",
    back: "Fasilitas pengembalian cepat tanpa pemeriksaan mendalam (hanya penelitian) bagi WP Kriteria Tertentu (Golden Taxpayer) atau WP Persyaratan Tertentu (nominal lebih bayar kecil). Surat Keputusan Pengembalian Pendahuluan (SKPPKP) diterbitkan maksimal 3 bulan untuk PPh dan 1 bulan untuk PPN."
  },

  // --- TM 10: Penyelesaian Sengketa Pajak ---
  {
    id: "pjk201-tm10-47",
    phase: "pra-uas",
    tm: 10,
    topic: "Upaya Keberatan (Pasal 25 KUP)",
    category: "Prosedur",
    front: "Prosedur Pengajuan Keberatan Pajak",
    back: "Diajukan tertulis dalam bahasa Indonesia kepada Dirjen Pajak atas suatu SKP (SKPKB, SKPKBT, SKPLB, SKPN) atau pemotongan pihak ketiga. Batas waktu pengajuan adalah 3 bulan sejak surat dikirim/dipotong. Wajib membayar minimal pajak yang disetujui dalam pembahasan akhir sebelum keberatan diajukan."
  },
  {
    id: "pjk201-tm10-48",
    phase: "pra-uas",
    tm: 10,
    topic: "Sanksi Denda Keberatan yang Ditolak",
    category: "Sanksi",
    front: "Sanksi Denda jika Keberatan Ditolak atau Dikabulkan Sebagian (Pasal 25 ayat 9 KUP)",
    back: "Dikenakan sanksi denda administrasi sebesar 30% dari jumlah pajak berdasarkan keputusan keberatan dikurangi dengan pajak yang telah dibayar sebelum mengajukan keberatan (Kecuali WP melanjutkan banding ke Pengadilan Pajak)."
  },
  {
    id: "pjk201-tm10-49",
    phase: "pra-uas",
    tm: 10,
    topic: "Upaya Banding (Pasal 27 KUP)",
    category: "Prosedur",
    front: "Prosedur Pengajuan Banding ke Pengadilan Pajak",
    back: "Diajukan tertulis dalam bahasa Indonesia kepada Pengadilan Pajak HANYA atas Surat Keputusan Keberatan. Batas waktu pengajuan maksimal 3 bulan sejak keputusan keberatan diterima."
  },
  {
    id: "pjk201-tm10-50",
    phase: "pra-uas",
    tm: 10,
    topic: "Sanksi Denda Banding yang Ditolak",
    category: "Sanksi",
    front: "Sanksi Denda jika Banding Ditolak atau Dikabulkan Sebagian (Pasal 27 ayat 5d KUP)",
    back: "Dikenakan sanksi denda administrasi sebesar 60% dari jumlah pajak berdasarkan Putusan Banding dikurangi dengan pembayaran pajak yang telah dibayar sebelum mengajukan keberatan."
  },
  {
    id: "pjk201-tm10-51",
    phase: "pra-uas",
    tm: 10,
    topic: "Gugatan & Peninjauan Kembali (PK)",
    category: "Prosedur",
    front: "Gugatan ke Pengadilan Pajak & Peninjauan Kembali (PK) ke Mahkamah Agung",
    back: "Gugatan: diajukan ke Pengadilan Pajak atas sengketa tata cara/prosedur penerbitan surat ketetapan atau pelaksanaan penagihan pajak (batas 14 hari untuk Surat Paksa, 30 hari untuk keputusan lain). Peninjauan Kembali: upaya hukum luar biasa terakhir ke Mahkamah Agung atas putusan Pengadilan Pajak."
  },

  // --- TM 11: Penagihan Pajak Aktif ---
  {
    id: "pjk201-tm11-52",
    phase: "pra-uas",
    tm: 11,
    topic: "Dasar Hukum & Definisi Penagihan Aktif",
    category: "Definisi",
    front: "Penagihan Pajak Aktif (UU No. 19 Tahun 1997 jo. UU No. 19 Tahun 2000)",
    back: "Serangkaian tindakan agar Penanggung Pajak melunasi utang pajak dan biaya penagihan pajak dengan menegur atau memperingatkan, melaksanakan penagihan seketika dan sekaligus, memberitahukan Surat Paksa, mengusulkan pencegahan, melaksanakan penyitaan, hingga menyandera dan menjual barang yang disita (lelang)."
  },
  {
    id: "pjk201-tm11-53",
    phase: "pra-uas",
    tm: 11,
    topic: "Jadwal Surat Teguran & Surat Paksa",
    category: "Prosedur",
    front: "Timeline Surat Teguran dan Surat Paksa",
    back: "1) Jatuh tempo SKPKB/STP adalah 1 bulan sejak diterbitkan; 2) Jika tidak dibayar, setelah 7 hari jatuh tempo diterbitkan Surat Teguran/Peringatan; 3) Jika dalam 21 hari sejak Surat Teguran belum dilunasi, diterbitkan Surat Paksa."
  },
  {
    id: "pjk201-tm11-54",
    phase: "pra-uas",
    tm: 11,
    topic: "Kekuatan Hukum Surat Paksa",
    category: "Hukum",
    front: "Kekuatan Eksekutorial Surat Paksa",
    back: "Surat Paksa mempunyai kekuatan eksekutorial dan kedudukan hukum yang sama dengan putusan pengadilan yang telah mempunyai kekuatan hukum tetap (berketerangan 'Demi Keadilan Berdasarkan Ketuhanan Yang Maha Esa'), langsung diberitahukan oleh Jurusita Pajak."
  },
  {
    id: "pjk201-tm11-55",
    phase: "pra-uas",
    tm: 11,
    topic: "Penyitaan (SPMP) & Lelang",
    category: "Prosedur",
    front: "Prosedur Penyitaan Aset dan Pelaksanaan Lelang",
    back: "Jika Surat Paksa tidak dilunasi dalam 2 x 24 jam, Jurusita menerbitkan Surat Perintah Melaksanakan Penyitaan (SPMP) atas barang bergerak/tidak bergerak. Jika dalam 14 hari sejak sita tidak dilunasi, dilakukan pengumuman lelang, dan 14 hari berikutnya dilakukan eksekusi lelang oleh Kantor Lelang Negara."
  },
  {
    id: "pjk201-tm11-56",
    phase: "pra-uas",
    tm: 11,
    topic: "Pencegahan & Penyanderaan (Gijzeling)",
    category: "Sanksi",
    front: "Pencegahan (ke Luar Negeri) & Penyanderaan (Gijzeling)",
    back: "Pencegahan: larangan sementara ke luar negeri maksimal 6 bulan (+ perpanjang 6 bulan). Penyanderaan (Gijzeling): pengekangan sementara kebebasan penanggung pajak di rutan (maksimal 6 bulan + perpanjang 6 bulan), khusus utang pajak minimal Rp 100 juta dan diragukan iktikad baiknya."
  },
  {
    id: "pjk201-tm11-57",
    phase: "pra-uas",
    tm: 11,
    topic: "Hak Mendahulu (Droit de Preference)",
    category: "Hukum",
    front: "Hak Mendahulu Negara (Droit de Preference - Pasal 21 KUP)",
    back: "Negara mempunyai hak mendahulu untuk tagihan pajak atas barang-barang milik Penanggung Pajak. Dalam likuidasi/keterpurukan usaha, utang pajak harus dilunasi terlebih dahulu sebelum utang kepada kreditur lain (kecuali biaya perkara pengadilan, biaya lelang, dan biaya penyelamatan barang)."
  },

  // --- TM 12: Bea Meterai ---
  {
    id: "pjk201-tm12-58",
    phase: "pra-uas",
    tm: 12,
    topic: "Dasar Hukum & Tarif Bea Meterai",
    category: "Definisi",
    front: "Bea Meterai UU No. 10 Tahun 2020 (Tarif Tunggal)",
    back: "Pajak atas dokumen yang bersifat perdata dan dokumen untuk alat bukti di pengadilan. Berlaku tarif tunggal sebesar Rp 10.000,00 (menggantikan tarif lama Rp 3.000 & Rp 6.000 mulai 1 Januari 2021)."
  },
  {
    id: "pjk201-tm12-59",
    phase: "pra-uas",
    tm: 12,
    topic: "Dokumen Objek Bea Meterai",
    category: "Objek",
    front: "Dokumen Utama Objek Bea Meterai Rp 10.000",
    back: "1) Surat perjanjian, surat keterangan, surat pernyataan; 2) Akta notaris & akta PPAT beserta salinannya; 3) Surat berharga dengan nama dan dalam bentuk apapun; 4) Dokumen transaksi uang yang menyebutkan nominal di atas Rp 5.000.000,00 yang menyatakan penerimaan uang atau pelunasan utang."
  },
  {
    id: "pjk201-tm12-60",
    phase: "pra-uas",
    tm: 12,
    topic: "Bukan Objek Bea Meterai (Pengecualian)",
    category: "Pengecualian",
    front: "Dokumen yang Dikecualikan dari Bea Meterai",
    back: "1) Dokumen pemindahan orang/barang (karcis penumpang, konosemen, resi); 2) Ijazah, tanda lulus, surat keterangan dokter; 3) Tanda terima gaji/pensiun/tunjangan kerja; 4) Tanda bukti penerimaan uang negara dari kas negara/daerah; 5) Dokumen transaksi uang yang nominalnya <= Rp 5.000.000."
  },
  {
    id: "pjk201-tm12-61",
    phase: "pra-uas",
    tm: 12,
    topic: "Jenis Meterai & e-Meterai",
    category: "Mekanisme",
    front: "3 Cara Pembayaran Bea Meterai",
    back: "1) Meterai Tempel (perekat fisik bermotif Garuda dan nomor seri unik); 2) Meterai Elektronik / e-Meterai (label elektronik yang mengandung unsur pengaman yang dibubuhkan pada dokumen elektronik via PERURI); 3) Meterai Dalam Bentuk Lain (mesin teraan, komputerisasi/peruri)."
  },
  {
    id: "pjk201-tm12-62",
    phase: "pra-uas",
    tm: 12,
    topic: "Pemeteraian Kemudian (Nachzegelen)",
    category: "Prosedur",
    front: "Pemeteraian Kemudian (Nachzegelen)",
    back: "Pelunasan Bea Meterai yang dilakukan oleh pejabat pos atas dokumen yang belum/kurang dibayar bea meterainya, atau dokumen yang dibuat di luar negeri yang akan digunakan di Indonesia sebagai alat bukti di pengadilan (dikenakan sanksi denda 100% jika akibat kelalaian)."
  },

  // --- TM 13: Pajak Daerah & Retribusi Daerah (1) — Pajak Provinsi ---
  {
    id: "pjk201-tm13-63",
    phase: "pra-uas",
    tm: 13,
    topic: "Dasar Hukum Pajak Daerah (UU HKPD)",
    category: "Dasar Hukum",
    front: "UU HKPD No. 1 Tahun 2022 tentang Hubungan Keuangan Pusat dan Daerah",
    back: "Undang-undang modern yang mengatur restrukturisasi pajak daerah, simplifikasi jenis pajak, penguatan local taxing power, serta harmonisasi tarif retribusi antara Pemerintah Pusat dan Pemerintah Daerah (Provinsi dan Kabupaten/Kota)."
  },
  {
    id: "pjk201-tm13-64",
    phase: "pra-uas",
    tm: 13,
    topic: "5 Jenis Pajak Daerah Provinsi",
    category: "Klasifikasi",
    front: "5 Jenis Pajak yang Dipungut oleh Pemerintah Daerah Provinsi (UU HKPD)",
    back: "1) Pajak Kendaraan Bermotor (PKB); 2) Bea Balik Nama Kendaraan Bermotor (BBNKB); 3) Pajak Alat Berat (PAB - baru dalam HKPD); 4) Pajak Bahan Bakar Kendaraan Bermotor (PBBKB); 5) Pajak Air Permukaan (PAP); 6) Pajak Rokok (pungutan atas cukai rokok)."
  },
  {
    id: "pjk201-tm13-65",
    phase: "pra-uas",
    tm: 13,
    topic: "Pajak Kendaraan Bermotor (PKB)",
    category: "Tarif",
    front: "Objek dan Tarif Pajak Kendaraan Bermotor (PKB)",
    back: "Objek: kepemilikan/penguasaan kendaraan bermotor. Tarif PKB pribadi kepemilikan pertama maksimal 1,2% s.d. 2,4% (ditetapkan Perda). Kepemilikan kedua dan seterusnya dikenakan tarif progresif maksimal 10% (UU HKPD menghapus tarif progresif di beberapa daerah yang menerapkan kebijakan simplifikasi)."
  },
  {
    id: "pjk201-tm13-66",
    phase: "pra-uas",
    tm: 13,
    topic: "Bea Balik Nama Kendaraan Bermotor (BBNKB)",
    category: "Tarif",
    front: "Ketentuan Bea Balik Nama Kendaraan Bermotor (BBNKB)",
    back: "Pajak atas penyerahan hak milik kendaraan bermotor sebagai akibat perjanjian dua pihak atau sepihak. Menurut UU HKPD, tarif BBNKB ditetapkan maksimal 12% (banyak provinsi telah membebaskan BBNKB II atau kendaraan bekas untuk merangsang tertib administrasi)."
  },
  {
    id: "pjk201-tm13-67",
    phase: "pra-uas",
    tm: 13,
    topic: "Pajak Rokok",
    category: "Mekanisme",
    front: "Pajak Rokok sebagai Pajak Provinsi",
    back: "Pungutan atas cukai rokok yang dipungut oleh Pemerintah Pusat bersamaan dengan pemungutan cukai rokok, lalu dialokasikan/dbagikan ke Provinsi sebesar 10% dari cukai rokok. Minimal 50% dari hasilnya wajib dialokasikan untuk pelayanan kesehatan masyarakat dan penegakan hukum."
  },

  // --- TM 14: Pajak Daerah & Retribusi Daerah (2) — Pajak Kabupaten/Kota & Retribusi ---
  {
    id: "pjk201-tm14-68",
    phase: "pra-uas",
    tm: 14,
    topic: "Jenis Pajak Kabupaten/Kota (UU HKPD)",
    category: "Klasifikasi",
    front: "Pajak yang Dipungut oleh Pemerintah Kabupaten/Kota",
    back: "1) PBB-P2 (Pajak Bumi dan Bangunan Perdesaan dan Perkotaan); 2) BPHTB; 3) PBJT (Pajak Barang dan Jasa Tertentu - peleburan pajak hotel, restoran, hiburan, parkir, listrik); 4) Pajak Reklame; 5) Pajak Air Tanah (PAT); 6) Pajak MBLB (Mineral Bukan Logam dan Batuan); 7) Pajak Sarang Burung Walet; 8) Opsen Pajak Provinsi."
  },
  {
    id: "pjk201-tm14-69",
    phase: "pra-uas",
    tm: 14,
    topic: "PBB-P2 & NJOP/NJOPTKP",
    category: "Rumus",
    front: "Perhitungan PBB-P2 (Pajak Bumi dan Bangunan Perdesaan dan Perkotaan)",
    back: "Rumus: Tarif x (NJOP Bumi + NJOP Bangunan - NJOPTKP). NJOPTKP (NJOP Tidak Kena Pajak) ditetapkan paling rendah Rp 10.000.000 untuk setiap Wajib Pajak. Tarif maksimal PBB-P2 menurut UU HKPD adalah 0,5% (khusus lahan produksi pangan/ternak maksimal 0,25%)."
  },
  {
    id: "pjk201-tm14-70",
    phase: "pra-uas",
    tm: 14,
    topic: "BPHTB & NPOPTKP",
    category: "Rumus",
    front: "Perhitungan BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan)",
    back: "Rumus: Tarif maksimal 5% x (NPOP - NPOPTKP). NPOP adalah Nilai Perolehan Objek Pajak (harga transaksi atau NJOP, mana yang lebih tinggi). NPOPTKP (Tidak Kena Pajak) ditetapkan paling rendah Rp 80.000.000 untuk transaksi umum, dan Rp 300.000.000 untuk waris/hibah wasiat dalam keluarga sedarah."
  },
  {
    id: "pjk201-tm14-71",
    phase: "pra-uas",
    tm: 14,
    topic: "PBJT (Pajak Barang dan Jasa Tertentu)",
    category: "Definisi",
    front: "PBJT (Pajak Barang dan Jasa Tertentu - Integrasi Baru UU HKPD)",
    back: "Pajak yang dibayarkan oleh konsumen akhir atas konsumsi barang/jasa tertentu di kabupaten/kota, mencakup: 1) Makanan dan/atau minuman (restoran); 2) Tenaga listrik; 3) Jasa perhotelan; 4) Jasa parkir; 5) Jasa kesenian dan hiburan. Tarif umum PBJT maksimal 10% (khusus hiburan tertentu seperti diskotek, karaoke, spa tarifnya 40% s.d. 75%)."
  },
  {
    id: "pjk201-tm14-72",
    phase: "pra-uas",
    tm: 14,
    topic: "Definisi & 3 Golongan Retribusi Daerah",
    category: "Klasifikasi",
    front: "Definisi Retribusi Daerah dan 3 Golongannya (UU HKPD)",
    back: "Pungutan daerah sebagai pembayaran atas jasa atau pemberian izin tertentu yang khusus disediakan dan/atau diberikan oleh Pemda untuk kepentingan orang pribadi atau badan. Dibagi menjadi 3 golongan: 1) Retribusi Jasa Umum (kesehatan, persampahan, pasar); 2) Retribusi Jasa Usaha (sewa aset daerah, terminal); 3) Retribusi Perizinan Tertentu (PBG/IMB, izin trayek)."
  },
  {
    id: "pjk201-tm14-73",
    phase: "pra-uas",
    tm: 14,
    topic: "Opsen Pajak dalam UU HKPD",
    category: "Konsep",
    front: "Konsep Opsen Pajak antara Provinsi dan Kabupaten/Kota",
    back: "Pungutan tambahan pajak menurut persentase tertentu yang dikenakan atas pajak terutang dari tingkat pemerintahan daerah yang berbeda. Contoh: Opsen PKB dan Opsen BBNKB dipungut oleh Kabupaten/Kota (66%) bersamaan dengan pajak Provinsi, sehingga mempercepat distribusi bagi hasil dan transparansi daerah."
  },
  // --- Tambahan 11 kartu untuk melengkapi 84 ---
  {
    id: "pjk201-tm08-74",
    phase: "pra-uas",
    tm: 8,
    topic: "Pemeriksaan Pajak",
    category: "Prosedur",
    front: "Jenis Pemeriksaan Pajak",
    back: "1) Pemeriksaan Lapangan: dilakukan di tempat WP, maksimal 6 bulan (dapat diperpanjang). 2) Pemeriksaan Kantor: dilakukan di kantor DJP, maksimal 4 bulan (dapat diperpanjang). Tujuan: menguji kepatuhan dan tujuan lain."
  },
  {
    id: "pjk201-tm09-75",
    phase: "pra-uas",
    tm: 9,
    topic: "Surat Ketetapan Pajak",
    category: "Klasifikasi",
    front: "4 Jenis Surat Ketetapan Pajak",
    back: "1) SKPKB (Surat Ketetapan Pajak Kurang Bayar), 2) SKPKBT (Kurang Bayar Tambahan), 3) SKPLB (Lebih Bayar), 4) SKPN (Nihil). Masing-masing diterbitkan berdasarkan hasil pemeriksaan."
  },
  {
    id: "pjk201-tm09-76",
    phase: "pra-uas",
    tm: 9,
    topic: "Restitusi Pajak",
    category: "Prosedur",
    front: "Mekanisme Restitusi Pajak",
    back: "WP mengajukan permohonan restitusi → DJP melakukan pemeriksaan → SKPLB diterbitkan paling lambat 12 bulan sejak permohonan diterima lengkap. Jika terlambat, WP mendapat imbalan bunga."
  },
  {
    id: "pjk201-tm10-77",
    phase: "pra-uas",
    tm: 10,
    topic: "Keberatan Pajak",
    category: "Prosedur",
    front: "Syarat Pengajuan Keberatan",
    back: "Diajukan tertulis dalam Bahasa Indonesia, dalam jangka waktu 3 bulan sejak tanggal SKP, menyebutkan jumlah pajak terutang menurut WP. DJP wajib memberikan keputusan dalam 12 bulan, jika tidak maka keberatan diterima."
  },
  {
    id: "pjk201-tm10-78",
    phase: "pra-uas",
    tm: 10,
    topic: "Banding ke Pengadilan Pajak",
    category: "Prosedur",
    front: "Banding atas Keputusan Keberatan",
    back: "Diajukan ke Pengadilan Pajak dalam 3 bulan sejak keputusan keberatan diterima. Syarat: membayar 50% pajak terutang. Putusan Pengadilan Pajak bersifat final dan mengikat (kecuali Peninjauan Kembali ke MA)."
  },
  {
    id: "pjk201-tm11-79",
    phase: "pra-uas",
    tm: 11,
    topic: "Penagihan Pajak",
    category: "Prosedur",
    front: "Tahapan Penagihan Aktif",
    back: "1) Surat Teguran (7 hari setelah jatuh tempo), 2) Surat Paksa (21 hari setelah teguran), 3) Sita (2×24 jam setelah Surat Paksa), 4) Lelang (14 hari setelah pengumuman). Jurusita pajak negara berwenang melakukan penyitaan."
  },
  {
    id: "pjk201-tm11-80",
    phase: "pra-uas",
    tm: 11,
    topic: "Hak Mendahulu Negara",
    category: "Hukum",
    front: "Kedudukan Utang Pajak vs Utang Lainnya",
    back: "Negara mempunyai hak mendahulu atas barang-barang milik Penanggung Pajak untuk utang pajak. Kedudukan utang pajak lebih tinggi dari kreditor lain, termasuk dalam pailit, kecuali biaya perkara dan upah buruh."
  },
  {
    id: "pjk201-tm12-81",
    phase: "pra-uas",
    tm: 12,
    topic: "Bea Meterai",
    category: "Tarif",
    front: "Tarif Bea Meterai (UU No. 10/2020)",
    back: "Tarif tunggal Rp10.000 berlaku untuk dokumen dengan nilai >Rp5.000.000, surat berharga, akta notaris, dan dokumen transaksi efek. Dokumen di bawah Rp5.000.000 tidak dikenakan bea meterai."
  },
  {
    id: "pjk201-tm12-82",
    phase: "pra-uas",
    tm: 12,
    topic: "Pemeteraian Kemudian",
    category: "Prosedur",
    front: "Pemeteraian Kemudian",
    back: "Dilakukan terhadap dokumen yang bea meterainya tidak atau kurang dibayar. WP membayar bea meterai terutang ditambah sanksi administratif 100% dari bea meterai terutang. Dilaksanakan oleh pejabat pos."
  },
  {
    id: "pjk201-tm13-83",
    phase: "pra-uas",
    tm: 13,
    topic: "Pajak Kendaraan Bermotor",
    category: "Tarif",
    front: "Tarif PKB (Pajak Kendaraan Bermotor)",
    back: "Tarif progresif berdasarkan kepemilikan: kendaraan pertama 1,05%, kedua 2%, ketiga 3%, keempat dan seterusnya 3,5% (sesuai UU HKPD). Dasar pengenaan: NJKB × bobot × tarif."
  },
  {
    id: "pjk201-tm14-84",
    phase: "pra-uas",
    tm: 14,
    topic: "PBB-P2",
    category: "Rumus",
    front: "Cara Menghitung PBB-P2",
    back: "NJOP = NJOP Tanah + NJOP Bangunan. NJOP setelah NJOPTKP = NJOP − NJOPTKP (minimal Rp10 juta). PBB-P2 = Tarif × NJOP setelah NJOPTKP. Tarif maksimal 0,5% (ditetapkan Perda)."
  }
];
