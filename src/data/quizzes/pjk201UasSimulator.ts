import type { QuizQuestion } from '../../types';

/**
 * Simulasi UAS Perpajakan I TM 8-14.
 * 80 soal objektif: pilihan/benar-salah, pilih banyak, pencocokan, dan isian angka.
 * Pola soal disarikan dari paket latihan kating, lalu substansi dan kunci diselaraskan
 * dengan materi TM 8-14 serta regulasi aktif sampai Juni 2026.
 */
export const PJK201_QUIZ_UAS_SIMULATOR: QuizQuestion[] = [
  {
    "topic": "TM8 · Pengawasan Pajak",
    "skill": "Menentukan urutan eskalasi pengawasan",
    "difficulty": "basic",
    "q": "Urutan eskalasi pengawasan pajak dari ranah administratif menuju pidana yang tepat adalah...",
    "options": [
      "Penelitian, pemeriksaan, pemeriksaan bukti permulaan, penyidikan",
      "Pemeriksaan, penelitian, penyidikan, bukti permulaan",
      "Surat Paksa, penelitian, keberatan, penyidikan",
      "Keberatan, banding, pemeriksaan, penyidikan"
    ],
    "answer": 0,
    "explanation": "Pengawasan bergerak dari penelitian, pemeriksaan, pemeriksaan bukti permulaan, lalu penyidikan ketika dugaan pidana perlu dibuat terang."
  },
  {
    "topic": "TM8 · Penelitian",
    "skill": "Membedakan penelitian dan pemeriksaan",
    "difficulty": "basic",
    "q": "Fokus penelitian SPT adalah...",
    "options": [
      "Menguji seluruh pembukuan secara mendalam",
      "Menetapkan tersangka tindak pidana",
      "Mengadili sengketa pajak",
      "Menilai kelengkapan pengisian, lampiran, kebenaran tulis, dan hitung"
    ],
    "answer": 3,
    "explanation": "Penelitian merupakan pengujian administratif atas kelengkapan dan kebenaran formal SPT, bukan audit mendalam atau proses pidana."
  },
  {
    "topic": "TM8 · SP2DK",
    "skill": "Menghindari miskonsepsi SP2DK",
    "difficulty": "medium",
    "q": "Benar atau salah: SP2DK merupakan surat ketetapan pajak yang terbit dari Laporan Hasil Pemeriksaan.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answer": 1,
    "explanation": "SP2DK adalah instrumen pengawasan kepatuhan awal untuk meminta penjelasan data atau keterangan. SP2DK bukan SKP dan bukan produk LHP."
  },
  {
    "topic": "TM8 · Pemeriksaan",
    "skill": "Mengenali jenis pemeriksaan terbaru",
    "difficulty": "basic",
    "q": "Menurut PMK 15/2025, jenis pemeriksaan berdasarkan kedalaman pengujian terdiri atas...",
    "options": [
      "Formal, materiil, dan yudisial",
      "Lengkap, terfokus, dan spesifik",
      "Lapangan, kantor, dan pidana",
      "Umum, khusus, dan keberatan"
    ],
    "answer": 1,
    "explanation": "PMK 15/2025 mengganti pembagian lama lapangan dan kantor menjadi pemeriksaan lengkap, terfokus, dan spesifik."
  },
  {
    "topic": "TM8 · Pemeriksaan",
    "skill": "Menguasai jangka waktu pemeriksaan",
    "difficulty": "medium",
    "q": "Pasangan jenis pemeriksaan dan jangka waktu pengujian yang benar adalah...",
    "options": [
      "Lengkap 5 bulan, terfokus 3 bulan, spesifik 1 bulan",
      "Lengkap 12 bulan, terfokus 6 bulan, spesifik 3 bulan",
      "Lengkap 3 bulan, terfokus 5 bulan, spesifik 10 bulan",
      "Semua jenis pemeriksaan 12 bulan"
    ],
    "answer": 0,
    "explanation": "Jangka waktu pengujian standar adalah 5 bulan untuk lengkap, 3 bulan untuk terfokus, dan 1 bulan untuk spesifik. Data konkret tertentu dapat diperiksa dalam 10 hari kerja."
  },
  {
    "topic": "TM8 · Bukper",
    "skill": "Menentukan posisi bukti permulaan",
    "difficulty": "medium",
    "q": "Pemeriksaan Bukti Permulaan paling tepat dipahami sebagai...",
    "options": [
      "Tahap akhir banding di Pengadilan Pajak",
      "Cara melunasi Bea Meterai",
      "Produk restitusi pendahuluan",
      "Jembatan antara pemeriksaan administratif dan penyidikan pidana"
    ],
    "answer": 3,
    "explanation": "Bukper bertujuan memperoleh bukti permulaan adanya dugaan tindak pidana. Jika bukti cukup, proses dapat naik ke penyidikan."
  },
  {
    "topic": "TM8 · Penyidikan",
    "skill": "Menentukan batas penggunaan Pasal 44A",
    "difficulty": "medium",
    "q": "WP masih dapat mengungkapkan ketidakbenaran perbuatan agar tidak dilakukan penyidikan sepanjang...",
    "options": [
      "Surat Paksa belum diberitahukan",
      "Lelang belum diumumkan",
      "SPDP belum dikirim kepada Penuntut Umum",
      "Putusan banding belum terbit"
    ],
    "answer": 2,
    "explanation": "Pasal 8 ayat (3) jo. Pasal 44A memberi pintu keluar sebelum SPDP dikirim, dengan pelunasan pokok dan sanksi sesuai ketentuan."
  },
  {
    "kind": "multi-select",
    "topic": "TM8 · Pemeriksaan",
    "skill": "Mengidentifikasi hak Wajib Pajak saat diperiksa",
    "difficulty": "medium",
    "q": "Pilih semua yang merupakan hak Wajib Pajak dalam pemeriksaan.",
    "options": [
      "Meminta pemeriksa menunjukkan tanda pengenal dan Surat Perintah Pemeriksaan",
      "Menerima SPHP dan menghadiri pembahasan akhir",
      "Menolak seluruh permintaan dokumen tanpa alasan",
      "Memberikan tanggapan tertulis atas SPHP",
      "Menentukan sendiri hasil LHP"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Hak WP mencakup identifikasi pemeriksa, penjelasan alasan pemeriksaan, SPHP, pembahasan akhir, dan tanggapan tertulis. WP tetap wajib memberikan dokumen dan keterangan yang diminta secara sah."
  },
  {
    "kind": "account-match",
    "topic": "TM8 · Produk Pengawasan",
    "skill": "Memadankan tahap dan produk utama",
    "difficulty": "medium",
    "q": "Pasangkan tahap pengawasan dengan produk atau hasil utamanya.",
    "instruction": "Pasangkan setiap pernyataan dengan jawaban yang paling tepat.",
    "choices": [
      "STP atau SKPPKP",
      "SKP atau STP berdasarkan LHP",
      "Berkas perkara untuk penuntutan",
      "Permintaan klarifikasi data"
    ],
    "pairs": [
      {
        "prompt": "Penelitian SPT",
        "answer": "STP atau SKPPKP"
      },
      {
        "prompt": "Pemeriksaan kepatuhan",
        "answer": "SKP atau STP berdasarkan LHP"
      },
      {
        "prompt": "Penyidikan",
        "answer": "Berkas perkara untuk penuntutan"
      },
      {
        "prompt": "SP2DK",
        "answer": "Permintaan klarifikasi data"
      }
    ],
    "explanation": "Setiap tahap memiliki fungsi berbeda. SP2DK adalah klarifikasi awal, penelitian dan pemeriksaan menghasilkan produk administrasi, sedangkan penyidikan menghasilkan berkas perkara."
  },
  {
    "kind": "report-fill",
    "topic": "TM8 · Pasal 44B",
    "skill": "Menghitung pembayaran penghentian penyidikan",
    "difficulty": "advanced",
    "q": "Sebuah kasus faktur pajak fiktif memuat pajak Rp500.000.000. Hitung denda Pasal 44B dan total pembayaran bila pokok pajak juga harus dilunasi.",
    "instruction": "Isi seluruh angka tanpa simbol mata uang. Pemisah ribuan boleh digunakan.",
    "data": [
      "Denda penghentian penyidikan untuk Pasal 39A = 4 kali jumlah pajak dalam faktur.",
      "Total pembayaran = pokok pajak + denda."
    ],
    "blanks": [
      {
        "id": "denda",
        "label": "Denda Pasal 44B",
        "answer": 2000000000,
        "prefix": "Rp"
      },
      {
        "id": "total",
        "label": "Total pokok dan denda",
        "answer": 2500000000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Denda = 4 × Rp500.000.000 = Rp2.000.000.000. Total pokok dan denda = Rp2.500.000.000."
  },
  {
    "topic": "TM9 · SKP",
    "skill": "Mengklasifikasi jenis SKP",
    "difficulty": "basic",
    "q": "Manakah susunan yang seluruhnya termasuk Surat Ketetapan Pajak?",
    "options": [
      "Surat Teguran, Surat Paksa, SKPN, dan SPOP",
      "SKPKB, SKPKBT, SKPN, dan SKPLB",
      "STP, SP2DK, SPHP, dan LHP",
      "SKPKB, SKPLBT, SKPT, dan SPMP"
    ],
    "answer": 1,
    "explanation": "SKP terdiri atas SKPKB, SKPKBT, SKPN, dan SKPLB. SKPLBT serta SKPT bukan jenis SKP dalam klasifikasi tersebut."
  },
  {
    "topic": "TM9 · Daluwarsa Penetapan",
    "skill": "Menguasai batas penerbitan ketetapan",
    "difficulty": "basic",
    "q": "Daluwarsa umum penerbitan SKPKB adalah...",
    "options": [
      "5 tahun sejak saat terutangnya pajak atau berakhirnya masa, bagian tahun, atau tahun pajak",
      "10 tahun sejak surat teguran",
      "3 bulan sejak SPT disampaikan",
      "24 bulan sejak pemeriksaan dimulai"
    ],
    "answer": 0,
    "explanation": "Batas umum penerbitan ketetapan adalah 5 tahun sesuai ketentuan KUP."
  },
  {
    "topic": "TM9 · SKPKBT",
    "skill": "Mengenali data baru dan sanksi",
    "difficulty": "medium",
    "q": "SKPKBT diterbitkan apabila...",
    "options": [
      "Pajak terutang sama dengan kredit pajak",
      "WP menang keberatan dan terjadi lebih bayar",
      "DJP hanya menemukan salah tulis pada STP",
      "Setelah ketetapan sebelumnya ditemukan data baru yang menambah pajak terutang"
    ],
    "answer": 3,
    "explanation": "SKPKBT berkaitan dengan novum atau data baru setelah ketetapan sebelumnya. Sanksi khasnya kenaikan 100 persen, kecuali kondisi pengecualian yang ditentukan UU."
  },
  {
    "topic": "TM9 · STP",
    "skill": "Membedakan STP dan SKP",
    "difficulty": "basic",
    "q": "STP digunakan untuk...",
    "options": [
      "Menetapkan tersangka",
      "Mengalihkan pembinaan Pengadilan Pajak",
      "Menagih pajak dan/atau sanksi administrasi berupa bunga dan/atau denda",
      "Mengadili banding"
    ],
    "answer": 2,
    "explanation": "STP adalah surat untuk melakukan tagihan pajak dan/atau sanksi administrasi berupa bunga dan/atau denda."
  },
  {
    "topic": "TM9 · Sanksi Administrasi",
    "skill": "Membedakan bunga dinamis dari rezim lama",
    "difficulty": "medium",
    "q": "Benar atau salah: seluruh sanksi bunga perpajakan masih menggunakan tarif tetap 2 persen per bulan.",
    "options": [
      "Salah",
      "Benar"
    ],
    "answer": 0,
    "explanation": "Setelah perubahan UU Cipta Kerja dan HPP, tarif bunga bersifat dinamis dan ditetapkan bulanan berdasarkan suku bunga acuan serta uplift tertentu."
  },
  {
    "topic": "TM9 · Restitusi",
    "skill": "Membedakan restitusi biasa dan pendahuluan",
    "difficulty": "medium",
    "q": "Restitusi biasa Pasal 17B dilakukan melalui...",
    "options": [
      "Pemeriksaan dan berujung pada SKPLB",
      "Penelitian dan berujung pada SKPPKP untuk semua WP",
      "Penyidikan dan penghentian Pasal 44B",
      "Gugatan ke Pengadilan Negeri"
    ],
    "answer": 0,
    "explanation": "Restitusi biasa menggunakan pemeriksaan. Pengembalian pendahuluan menggunakan penelitian dan menghasilkan SKPPKP."
  },
  {
    "topic": "TM9 · Restitusi",
    "skill": "Menguasai batas waktu restitusi biasa",
    "difficulty": "medium",
    "q": "Jika dalam 12 bulan sejak permohonan restitusi lengkap DJP belum memberi keputusan, permohonan pada prinsipnya...",
    "options": [
      "Dianggap dicabut",
      "Berubah menjadi keberatan",
      "Langsung masuk penyidikan",
      "Dianggap dikabulkan"
    ],
    "answer": 3,
    "explanation": "Pasal 17B mengatur batas 12 bulan. Jika terlampaui tanpa keputusan, permohonan dianggap dikabulkan dan SKPLB diterbitkan."
  },
  {
    "topic": "TM9 · Pengembalian Pendahuluan",
    "skill": "Mengenali produk hukum",
    "difficulty": "basic",
    "q": "Surat yang diterbitkan dalam pengembalian pendahuluan melalui penelitian adalah...",
    "options": [
      "SPMP",
      "Surat Paksa",
      "SKPPKP",
      "SKPKBT"
    ],
    "answer": 2,
    "explanation": "Produk pengembalian pendahuluan adalah Surat Keputusan Pengembalian Pendahuluan Kelebihan Pajak atau SKPPKP."
  },
  {
    "topic": "TM9 · Angsuran dan Penundaan",
    "skill": "Menguasai jangka waktu angsuran",
    "difficulty": "medium",
    "q": "Jangka waktu persetujuan pengangsuran atau penundaan pembayaran pajak paling lama adalah...",
    "options": [
      "5 tahun",
      "24 bulan",
      "12 bulan",
      "3 bulan"
    ],
    "answer": 1,
    "explanation": "Materi menetapkan jangka waktu paling lama 24 bulan. Angsuran paling banyak satu kali dalam satu bulan."
  },
  {
    "kind": "multi-select",
    "topic": "TM9 · Restitusi Pendahuluan",
    "skill": "Mengidentifikasi subjek pengembalian pendahuluan",
    "difficulty": "medium",
    "q": "Pilih semua kelompok yang dapat menggunakan mekanisme pengembalian pendahuluan sesuai syaratnya.",
    "options": [
      "Wajib Pajak kriteria tertentu",
      "Wajib Pajak persyaratan tertentu",
      "PKP berisiko rendah",
      "Setiap penanggung pajak yang telah disandera",
      "Setiap pihak yang mengajukan gugatan"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Pengembalian pendahuluan ditujukan bagi WP kriteria tertentu, WP persyaratan tertentu, dan PKP berisiko rendah sesuai rezim masing-masing."
  },
  {
    "kind": "account-match",
    "topic": "TM9 · Produk Ketetapan",
    "skill": "Memadankan surat dan kondisi",
    "difficulty": "medium",
    "q": "Pasangkan produk hukum dengan kondisi yang paling tepat.",
    "instruction": "Pasangkan setiap pernyataan dengan jawaban yang paling tepat.",
    "choices": [
      "Pajak kurang dibayar",
      "Data baru menambah pajak setelah ketetapan",
      "Pajak lebih dibayar",
      "Pajak nihil"
    ],
    "pairs": [
      {
        "prompt": "SKPKB",
        "answer": "Pajak kurang dibayar"
      },
      {
        "prompt": "SKPKBT",
        "answer": "Data baru menambah pajak setelah ketetapan"
      },
      {
        "prompt": "SKPLB",
        "answer": "Pajak lebih dibayar"
      },
      {
        "prompt": "SKPN",
        "answer": "Pajak nihil"
      }
    ],
    "explanation": "Empat jenis SKP dibedakan berdasarkan posisi kurang bayar, tambahan kurang bayar karena data baru, lebih bayar, atau nihil."
  },
  {
    "kind": "report-fill",
    "topic": "TM9 · Sanksi SKPKB",
    "skill": "Menghitung bunga SKPKB",
    "difficulty": "advanced",
    "q": "PT Maju memiliki kurang bayar Rp200.000.000. Tarif bunga Pasal 13 ayat (2) pada saat penerbitan diasumsikan 1,82 persen per bulan untuk 10 bulan. Hitung bunga dan total tagihan.",
    "instruction": "Isi seluruh angka tanpa simbol mata uang. Pemisah ribuan boleh digunakan.",
    "data": [
      "Bunga = pokok × tarif bulanan × jumlah bulan.",
      "Total = pokok + bunga."
    ],
    "blanks": [
      {
        "id": "bunga",
        "label": "Sanksi bunga",
        "answer": 36400000,
        "prefix": "Rp"
      },
      {
        "id": "total",
        "label": "Total tagihan",
        "answer": 236400000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Bunga = Rp200.000.000 × 1,82% × 10 = Rp36.400.000. Total = Rp236.400.000."
  },
  {
    "topic": "TM10 · Keberatan",
    "skill": "Menentukan lembaga keberatan",
    "difficulty": "basic",
    "q": "Keberatan atas SKPKB diajukan kepada...",
    "options": [
      "Direktur Jenderal Pajak",
      "Pengadilan Pajak",
      "Pengadilan Negeri",
      "Mahkamah Agung"
    ],
    "answer": 0,
    "explanation": "Keberatan merupakan upaya administratif kepada DJP. Banding baru diajukan ke Pengadilan Pajak atas keputusan keberatan."
  },
  {
    "topic": "TM10 · Keberatan",
    "skill": "Menguasai batas waktu pengajuan",
    "difficulty": "basic",
    "q": "Batas waktu umum mengajukan keberatan adalah...",
    "options": [
      "14 hari sejak Surat Paksa",
      "30 hari sejak lelang",
      "12 bulan sejak putusan banding",
      "3 bulan sejak SKP dikirim atau pemotongan/pemungutan dilakukan"
    ],
    "answer": 3,
    "explanation": "Keberatan diajukan paling lama 3 bulan, kecuali keadaan di luar kekuasaan Wajib Pajak."
  },
  {
    "topic": "TM10 · Keberatan",
    "skill": "Menerapkan syarat pembayaran",
    "difficulty": "medium",
    "q": "Sebelum mengajukan keberatan, WP wajib melunasi...",
    "options": [
      "Separuh jumlah pajak dalam putusan banding",
      "Biaya lelang dan penyanderaan",
      "Jumlah pajak yang telah disetujui dalam pembahasan akhir",
      "Seluruh jumlah dalam SKPKB tanpa pengecualian"
    ],
    "answer": 2,
    "explanation": "Yang wajib dilunasi adalah jumlah yang disetujui WP dalam Pembahasan Akhir Hasil Pemeriksaan."
  },
  {
    "topic": "TM10 · Pencabutan Keberatan",
    "skill": "Menilai konsekuensi pencabutan",
    "difficulty": "medium",
    "q": "Risiko pencabutan keberatan adalah WP...",
    "options": [
      "Dibebaskan dari seluruh utang pajak",
      "Kehilangan hak mengajukan pengurangan atau pembatalan SKP yang tidak benar atas objek yang sama",
      "Otomatis dipidana",
      "Mendapat restitusi pendahuluan"
    ],
    "answer": 1,
    "explanation": "Jalur keberatan dan Pasal 36 bersifat alternatif untuk objek yang sama. Pencabutan dapat menutup hak menggunakan pengurangan atau pembatalan SKP yang tidak benar."
  },
  {
    "topic": "TM10 · Banding",
    "skill": "Menentukan pihak yang berhak",
    "difficulty": "basic",
    "q": "Benar atau salah: kuasa hukum yang memenuhi syarat tidak dapat mengajukan banding untuk Wajib Pajak.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answer": 1,
    "explanation": "Kuasa hukum yang memenuhi persyaratan dapat mengajukan banding untuk Wajib Pajak."
  },
  {
    "topic": "TM10 · Banding",
    "skill": "Mengidentifikasi objek banding",
    "difficulty": "medium",
    "q": "Banding diajukan ke Pengadilan Pajak atas...",
    "options": [
      "SP2DK",
      "Surat Perintah Pemeriksaan",
      "SPOP PBB-P2",
      "Surat Keputusan Keberatan"
    ],
    "answer": 3,
    "explanation": "Objek banding adalah keputusan keberatan. Sengketa formal tertentu ditempuh melalui gugatan."
  },
  {
    "topic": "TM10 · Gugatan",
    "skill": "Membedakan sengketa materi dan formal",
    "difficulty": "medium",
    "q": "Gugatan terutama digunakan untuk sengketa...",
    "options": [
      "Perhitungan gaji pegawai",
      "Penetapan tarif PPh nasional",
      "Formal atau prosedural, termasuk pelaksanaan penagihan",
      "Materi besarnya pajak dalam SKP"
    ],
    "answer": 2,
    "explanation": "Gugatan berfokus pada tindakan atau keputusan formal dan prosedural, misalnya Surat Paksa, SPMP, pengumuman lelang, pencegahan, atau cacat prosedur tertentu."
  },
  {
    "topic": "TM10 · Peninjauan Kembali",
    "skill": "Memahami sifat PK",
    "difficulty": "medium",
    "q": "Peninjauan Kembali dalam sengketa pajak adalah...",
    "options": [
      "Permohonan kepada KPP untuk menghapus semua pajak",
      "Upaya hukum luar biasa ke Mahkamah Agung yang hanya dapat diajukan satu kali",
      "Tahap administratif sebelum keberatan",
      "Upaya kasasi biasa"
    ],
    "answer": 1,
    "explanation": "PK merupakan upaya luar biasa ke Mahkamah Agung melalui Pengadilan Pajak. Tidak ada kasasi atas Putusan Pengadilan Pajak."
  },
  {
    "topic": "TM10 · Pengadilan Pajak",
    "skill": "Mengetahui perkembangan kelembagaan",
    "difficulty": "medium",
    "q": "Putusan MK No. 26/PUU-XXI/2023 mengarahkan pembinaan organisasi, administrasi, dan keuangan Pengadilan Pajak untuk beralih sepenuhnya kepada...",
    "options": [
      "Mahkamah Agung",
      "Direktorat Jenderal Pajak",
      "Pemerintah Daerah",
      "Badan Pemeriksa Keuangan"
    ],
    "answer": 0,
    "explanation": "Transisi pembinaan penuh ke Mahkamah Agung ditujukan memperkuat independensi Pengadilan Pajak."
  },
  {
    "kind": "multi-select",
    "topic": "TM10 · Gugatan",
    "skill": "Mengidentifikasi objek gugatan",
    "difficulty": "medium",
    "q": "Pilih semua yang dapat menjadi objek gugatan di Pengadilan Pajak.",
    "options": [
      "Pelaksanaan Surat Paksa",
      "Pelaksanaan SPMP atau pengumuman lelang",
      "Keputusan pencegahan dalam rangka penagihan",
      "Ketidaksetujuan materi atas besarnya pajak dalam SK Keberatan",
      "Penerbitan SKP yang prosedurnya tidak sesuai ketentuan"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Sengketa materi atas keputusan keberatan ditempuh melalui banding. Gugatan menangani tindakan penagihan dan keputusan formal atau prosedural tertentu."
  },
  {
    "kind": "account-match",
    "topic": "TM10 · Upaya Hukum",
    "skill": "Memadankan jalur dan lembaga",
    "difficulty": "medium",
    "q": "Pasangkan upaya hukum dengan lembaga yang memutusnya.",
    "instruction": "Pasangkan setiap pernyataan dengan jawaban yang paling tepat.",
    "choices": [
      "Direktur Jenderal Pajak",
      "Pengadilan Pajak",
      "Mahkamah Agung"
    ],
    "pairs": [
      {
        "prompt": "Keberatan",
        "answer": "Direktur Jenderal Pajak"
      },
      {
        "prompt": "Banding",
        "answer": "Pengadilan Pajak"
      },
      {
        "prompt": "Gugatan",
        "answer": "Pengadilan Pajak"
      },
      {
        "prompt": "Peninjauan Kembali",
        "answer": "Mahkamah Agung"
      }
    ],
    "explanation": "Keberatan diputus DJP, banding dan gugatan oleh Pengadilan Pajak, sedangkan PK diputus Mahkamah Agung."
  },
  {
    "kind": "report-fill",
    "topic": "TM10 · Sanksi Sengketa",
    "skill": "Menghitung denda keberatan dan banding",
    "difficulty": "advanced",
    "q": "SKPKB sebesar Rp1.000.000.000 tidak disetujui dan belum dibayar. Hitung denda jika keberatan ditolak tanpa banding, serta denda jika perkara dilanjutkan dan banding ditolak.",
    "instruction": "Isi seluruh angka tanpa simbol mata uang. Pemisah ribuan boleh digunakan.",
    "data": [
      "Denda keberatan = 30 persen dari dasar yang relevan.",
      "Denda banding = 60 persen dari dasar yang relevan."
    ],
    "blanks": [
      {
        "id": "keberatan",
        "label": "Denda keberatan",
        "answer": 300000000,
        "prefix": "Rp"
      },
      {
        "id": "banding",
        "label": "Denda banding",
        "answer": 600000000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Denda keberatan = 30% × Rp1 miliar = Rp300 juta. Denda banding = 60% × Rp1 miliar = Rp600 juta."
  },
  {
    "topic": "TM11 · Penagihan Aktif",
    "skill": "Mengenali tahapan penagihan",
    "difficulty": "basic",
    "q": "Yang bukan tahapan penagihan aktif adalah...",
    "options": [
      "Surat Teguran",
      "Surat Paksa",
      "Penyitaan",
      "Penerbitan SKPKB sebagai hasil pemeriksaan"
    ],
    "answer": 3,
    "explanation": "SKPKB dapat menjadi dasar penagihan, tetapi penerbitannya bukan tahapan eksekusi penagihan aktif seperti teguran, paksa, sita, dan lelang."
  },
  {
    "topic": "TM11 · Surat Paksa",
    "skill": "Menguasai waktu penerbitan",
    "difficulty": "basic",
    "q": "Surat Paksa diterbitkan apabila utang belum dilunasi setelah...",
    "options": [
      "14 hari sejak penyitaan",
      "30 hari sejak gugatan",
      "21 hari sejak Surat Teguran",
      "2 kali 24 jam sejak jatuh tempo"
    ],
    "answer": 2,
    "explanation": "Surat Paksa diterbitkan setelah lewat 21 hari sejak Surat Teguran jika utang belum dilunasi."
  },
  {
    "topic": "TM11 · Penyitaan",
    "skill": "Menguasai waktu penyitaan",
    "difficulty": "basic",
    "q": "Benar atau salah: penyitaan dilakukan 7 hari setelah Surat Paksa diberitahukan.",
    "options": [
      "Salah",
      "Benar"
    ],
    "answer": 0,
    "explanation": "Penyitaan dilakukan setelah lewat 2 kali 24 jam sejak Surat Paksa diberitahukan dan utang belum dilunasi."
  },
  {
    "topic": "TM11 · Lelang",
    "skill": "Menguasai urutan lelang",
    "difficulty": "medium",
    "q": "Setelah penyitaan dan utang belum dilunasi, pengumuman lelang dilakukan setelah...",
    "options": [
      "14 hari",
      "21 hari",
      "2 kali 24 jam",
      "5 tahun"
    ],
    "answer": 0,
    "explanation": "Pengumuman lelang dilakukan setelah lewat 14 hari sejak penyitaan. Lelang dilaksanakan setelah 14 hari sejak pengumuman."
  },
  {
    "topic": "TM11 · Penagihan Seketika",
    "skill": "Mengidentifikasi kondisi penagihan seketika",
    "difficulty": "medium",
    "q": "Penagihan seketika dan sekaligus dapat dilakukan ketika...",
    "options": [
      "WP sekadar meminta salinan SPT",
      "WP mengajukan flashcard",
      "DJP menerbitkan SKPLB",
      "Penanggung Pajak berniat meninggalkan Indonesia untuk selama-lamanya"
    ],
    "answer": 3,
    "explanation": "Penagihan seketika dapat dilakukan tanpa menunggu jatuh tempo pada kondisi berisiko, termasuk niat meninggalkan Indonesia, pemindahtanganan aset untuk menghentikan usaha, pembubaran badan, atau kepailitan."
  },
  {
    "topic": "TM11 · Pencegahan dan Penyanderaan",
    "skill": "Menguasai syarat upaya paksa badan",
    "difficulty": "medium",
    "q": "Syarat nilai utang untuk pencegahan dan penyanderaan adalah sekurang-kurangnya...",
    "options": [
      "Rp1.000.000.000 hanya untuk badan",
      "Tidak ada batas nilai",
      "Rp100.000.000 dan diragukan itikad baiknya",
      "Rp10.000.000 tanpa syarat lain"
    ],
    "answer": 2,
    "explanation": "Pencegahan dan penyanderaan memerlukan utang sedikitnya Rp100 juta serta keraguan atas itikad baik Penanggung Pajak."
  },
  {
    "topic": "TM11 · Hak Mendahulu",
    "skill": "Menentukan kedudukan negara",
    "difficulty": "basic",
    "q": "Hak mendahulu menempatkan negara sebagai...",
    "options": [
      "Kuasa hukum banding",
      "Kreditur preferen atas barang Penanggung Pajak",
      "Debitur konkuren",
      "Penjamin restitusi"
    ],
    "answer": 1,
    "explanation": "Negara didahulukan dalam pelunasan utang pajak atas barang Penanggung Pajak, dengan pengecualian biaya tertentu."
  },
  {
    "topic": "TM11 · Daluwarsa Penagihan",
    "skill": "Menguasai batas penagihan",
    "difficulty": "medium",
    "q": "Hak menagih pajak pada prinsipnya daluwarsa setelah...",
    "options": [
      "5 tahun sejak penerbitan dasar penagihan",
      "3 bulan sejak pemeriksaan",
      "10 hari kerja sejak SPHP",
      "24 bulan sejak SPT"
    ],
    "answer": 0,
    "explanation": "Daluwarsa penagihan adalah 5 tahun, tetapi dapat tertangguh antara lain oleh Surat Paksa, pengakuan utang, ketetapan tertentu, atau penyidikan."
  },
  {
    "topic": "TM11 · Pidana Pajak",
    "skill": "Menerapkan rumusan pidana aktif",
    "difficulty": "medium",
    "q": "Setelah penyesuaian pidana 2026, ancaman umum Pasal 39A atas faktur pajak fiktif adalah...",
    "options": [
      "Penjara wajib minimum 2 tahun dan denda wajib minimum 2 kali",
      "Kurungan maksimal 1 bulan tanpa denda",
      "Hanya sanksi administrasi 30 persen",
      "Penjara paling lama 6 tahun dan/atau denda paling banyak 6 kali jumlah pajak dalam dokumen"
    ],
    "answer": 3,
    "explanation": "Rumusan aktif menghapus minimum khusus lama dan menggunakan penjara paling lama 6 tahun dan/atau denda paling banyak 6 kali."
  },
  {
    "kind": "multi-select",
    "topic": "TM11 · Penagihan Seketika",
    "skill": "Mengidentifikasi kondisi berisiko",
    "difficulty": "medium",
    "q": "Pilih semua kondisi yang dapat memicu penagihan seketika dan sekaligus.",
    "options": [
      "Penanggung Pajak akan meninggalkan Indonesia untuk selama-lamanya",
      "Badan menunjukkan tanda akan dibubarkan",
      "Aset dipindahtangankan untuk menghentikan atau mengecilkan usaha",
      "WP meminta penjelasan dasar pengenaan pajak",
      "Terdapat tanda kepailitan atau penyitaan oleh pihak ketiga"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Penagihan seketika ditujukan pada keadaan yang mengancam tertagihnya utang, bukan karena WP menggunakan hak meminta penjelasan."
  },
  {
    "kind": "account-match",
    "topic": "TM11 · Penagihan Aktif",
    "skill": "Memadankan tahap dan interval",
    "difficulty": "medium",
    "q": "Pasangkan tahap penagihan dengan interval waktunya.",
    "instruction": "Pasangkan setiap pernyataan dengan jawaban yang paling tepat.",
    "choices": [
      "7 hari setelah jatuh tempo",
      "21 hari setelah Surat Teguran",
      "2 kali 24 jam setelah Surat Paksa",
      "14 hari setelah penyitaan",
      "14 hari setelah pengumuman lelang"
    ],
    "pairs": [
      {
        "prompt": "Surat Teguran",
        "answer": "7 hari setelah jatuh tempo"
      },
      {
        "prompt": "Surat Paksa",
        "answer": "21 hari setelah Surat Teguran"
      },
      {
        "prompt": "Penyitaan",
        "answer": "2 kali 24 jam setelah Surat Paksa"
      },
      {
        "prompt": "Pengumuman lelang",
        "answer": "14 hari setelah penyitaan"
      },
      {
        "prompt": "Pelaksanaan lelang",
        "answer": "14 hari setelah pengumuman lelang"
      }
    ],
    "explanation": "Urutan waktu ini merupakan pola utama yang sering diuji: 7 hari, 21 hari, 2×24 jam, 14 hari, dan 14 hari."
  },
  {
    "kind": "report-fill",
    "topic": "TM11 · Timeline Penagihan",
    "skill": "Menghitung interval penagihan aktif",
    "difficulty": "advanced",
    "q": "Isi jumlah hari atau satuan waktu untuk setiap tahap setelah Surat Teguran diterbitkan.",
    "instruction": "Isi seluruh angka tanpa simbol mata uang. Pemisah ribuan boleh digunakan.",
    "data": [
      "Surat Paksa: setelah 21 hari.",
      "Penyitaan: setelah 2 kali 24 jam dari pemberitahuan Surat Paksa.",
      "Pengumuman lelang: setelah 14 hari dari penyitaan.",
      "Lelang: setelah 14 hari dari pengumuman."
    ],
    "blanks": [
      {
        "id": "paksa",
        "label": "Surat Paksa setelah",
        "answer": 21,
        "suffix": "hari"
      },
      {
        "id": "sita",
        "label": "Penyitaan setelah",
        "answer": 48,
        "suffix": "jam"
      },
      {
        "id": "umum",
        "label": "Pengumuman lelang setelah",
        "answer": 14,
        "suffix": "hari"
      },
      {
        "id": "lelang",
        "label": "Lelang setelah pengumuman",
        "answer": 14,
        "suffix": "hari"
      }
    ],
    "explanation": "Penyitaan dilakukan setelah 2 × 24 jam, sehingga isian numeriknya adalah 48 jam. Rangkaian setelah Surat Teguran adalah 21 hari, 48 jam, 14 hari, dan 14 hari."
  },
  {
    "topic": "TM12 · Konsep Bea Meterai",
    "skill": "Memahami objek pajak dokumen",
    "difficulty": "basic",
    "q": "Bea Meterai adalah...",
    "options": [
      "Retribusi pelayanan daerah",
      "Cukai atas barang",
      "Pajak atas dokumen",
      "Pajak atas penghasilan"
    ],
    "answer": 2,
    "explanation": "UU 10/2020 mendefinisikan Bea Meterai sebagai pajak atas dokumen."
  },
  {
    "topic": "TM12 · Tarif Bea Meterai",
    "skill": "Menguasai tarif tunggal",
    "difficulty": "basic",
    "q": "Tarif Bea Meterai yang berlaku adalah...",
    "options": [
      "Rp5.000 untuk dokumen elektronik",
      "Rp10.000 per dokumen",
      "Rp6.000 per transaksi",
      "10 persen dari nilai dokumen"
    ],
    "answer": 1,
    "explanation": "UU 10/2020 menetapkan tarif tunggal Rp10.000 untuk setiap dokumen yang terutang."
  },
  {
    "topic": "TM12 · Objek Bea Meterai",
    "skill": "Mengidentifikasi kelompok objek",
    "difficulty": "basic",
    "q": "Dokumen yang menjadi objek Bea Meterai meliputi...",
    "options": [
      "Dokumen perdata dan dokumen yang digunakan sebagai alat bukti di pengadilan",
      "Semua dokumen tanpa pengecualian",
      "Hanya dokumen pidana",
      "Hanya dokumen yang diterbitkan pemerintah daerah"
    ],
    "answer": 0,
    "explanation": "Dua kelompok utamanya adalah dokumen perdata dan dokumen yang dipakai sebagai alat bukti di pengadilan."
  },
  {
    "topic": "TM12 · Batas Nominal",
    "skill": "Menerapkan batas Rp5 juta",
    "difficulty": "medium",
    "q": "Batas nominal lebih dari Rp5.000.000 hanya berlaku untuk...",
    "options": [
      "Semua surat perjanjian",
      "Semua akta notaris",
      "Semua surat berharga",
      "Dokumen yang menyatakan jumlah uang, seperti kuitansi"
    ],
    "answer": 3,
    "explanation": "Perjanjian dan akta tetap dapat terutang tanpa memandang nilai. Batas Rp5 juta khusus dokumen yang menyatakan jumlah uang."
  },
  {
    "topic": "TM12 · Bukan Objek",
    "skill": "Mengenali dokumen yang dikecualikan",
    "difficulty": "medium",
    "q": "Benar atau salah: dokumen yang menyebutkan simpanan atau giro di bank merupakan objek Bea Meterai.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answer": 1,
    "explanation": "Dokumen simpanan atau giro bank termasuk yang bukan objek Bea Meterai."
  },
  {
    "topic": "TM12 · Saat Terutang",
    "skill": "Menentukan saat terutang perjanjian",
    "difficulty": "basic",
    "q": "Untuk surat perjanjian, Bea Meterai terutang pada saat...",
    "options": [
      "Dokumen disimpan lima tahun",
      "Dokumen ditandatangani",
      "Dokumen difotokopi",
      "Utang pajak ditagih dengan Surat Paksa"
    ],
    "answer": 1,
    "explanation": "Untuk perjanjian, akta notaris, dan akta PPAT, saat terutang adalah ketika dokumen dibubuhi tanda tangan."
  },
  {
    "topic": "TM12 · Pemeteraian Kemudian",
    "skill": "Menghitung konsekuensi kurang bayar",
    "difficulty": "medium",
    "q": "Dokumen terutang Rp10.000 yang belum dilunasi dan harus dilakukan pemeteraian kemudian karena kurang bayar dikenai...",
    "options": [
      "Bea Meterai Rp10.000 dan sanksi 100 persen Rp10.000",
      "Hanya denda Rp5.000",
      "Sanksi 30 persen tanpa pokok",
      "Tidak ada kewajiban apa pun"
    ],
    "answer": 0,
    "explanation": "Pemeteraian kemudian atas dokumen yang tidak atau kurang dibayar dikenai Bea Meterai terutang ditambah sanksi administrasi 100 persen."
  },
  {
    "kind": "multi-select",
    "topic": "TM12 · Bukan Objek",
    "skill": "Mengidentifikasi pengecualian Bea Meterai",
    "difficulty": "medium",
    "q": "Pilih semua dokumen yang pada prinsipnya bukan objek Bea Meterai.",
    "options": [
      "Ijazah",
      "Tanda terima gaji dan pensiun",
      "Kuitansi pajak atau penerimaan negara",
      "Surat perjanjian sewa",
      "Dokumen simpanan atau giro bank"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Surat perjanjian merupakan objek dokumen perdata. Ijazah, tanda terima gaji, kuitansi pajak, dan dokumen simpanan bank termasuk pengecualian."
  },
  {
    "kind": "account-match",
    "topic": "TM12 · Saat Terutang",
    "skill": "Memadankan dokumen dan saat terutang",
    "difficulty": "medium",
    "q": "Pasangkan dokumen dengan saat terutangnya Bea Meterai.",
    "instruction": "Pasangkan setiap pernyataan dengan jawaban yang paling tepat.",
    "choices": [
      "Saat ditandatangani",
      "Saat selesai dibuat",
      "Saat diserahkan",
      "Saat diajukan ke pengadilan",
      "Saat digunakan di Indonesia"
    ],
    "pairs": [
      {
        "prompt": "Surat perjanjian",
        "answer": "Saat ditandatangani"
      },
      {
        "prompt": "Surat berharga",
        "answer": "Saat selesai dibuat"
      },
      {
        "prompt": "Surat keterangan sepihak",
        "answer": "Saat diserahkan"
      },
      {
        "prompt": "Dokumen alat bukti",
        "answer": "Saat diajukan ke pengadilan"
      },
      {
        "prompt": "Dokumen perdata dari luar negeri",
        "answer": "Saat digunakan di Indonesia"
      }
    ],
    "explanation": "Saat terutang ditentukan oleh jenis dan penggunaan dokumen, bukan satu waktu yang sama untuk semua dokumen."
  },
  {
    "kind": "report-fill",
    "topic": "TM12 · Penghitungan Bea Meterai",
    "skill": "Menghitung total Bea Meterai",
    "difficulty": "advanced",
    "q": "Terdapat satu surat perjanjian, satu kuitansi Rp8.000.000, dan satu kuitansi Rp3.000.000. Hitung jumlah dokumen terutang dan total Bea Meterai.",
    "instruction": "Isi seluruh angka tanpa simbol mata uang. Pemisah ribuan boleh digunakan.",
    "data": [
      "Surat perjanjian terutang tanpa batas nominal.",
      "Kuitansi Rp8 juta terutang karena lebih dari Rp5 juta.",
      "Kuitansi Rp3 juta tidak terutang karena tidak melebihi Rp5 juta."
    ],
    "blanks": [
      {
        "id": "dokumen",
        "label": "Jumlah dokumen terutang",
        "answer": 2,
        "suffix": "dokumen"
      },
      {
        "id": "total",
        "label": "Total Bea Meterai",
        "answer": 20000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Ada dua dokumen terutang. Masing-masing Rp10.000, sehingga total Rp20.000."
  },
  {
    "topic": "TM13 · Rezim HKPD",
    "skill": "Membedakan aturan lama dan aktif",
    "difficulty": "basic",
    "q": "UU No. 1 Tahun 2022 tentang HKPD menggantikan...",
    "options": [
      "UU No. 10 Tahun 2020 tentang Bea Meterai",
      "UU No. 14 Tahun 2002 tentang Pengadilan Pajak",
      "UU KUP",
      "UU No. 28 Tahun 2009 tentang PDRD"
    ],
    "answer": 3,
    "explanation": "UU HKPD mencabut dan menggantikan rezim UU PDRD 28/2009 untuk pajak daerah dan retribusi daerah."
  },
  {
    "topic": "TM13 · Pajak Provinsi",
    "skill": "Mengklasifikasi jenis pajak",
    "difficulty": "basic",
    "q": "Yang termasuk pajak provinsi adalah...",
    "options": [
      "PPh, PPN, PPnBM, dan Bea Meterai",
      "Pajak hotel, restoran, parkir, dan penerangan jalan sebagai pajak terpisah",
      "PKB, BBNKB, PAB, PBBKB, PAP, Pajak Rokok, dan Opsen MBLB",
      "PBB-P2, BPHTB, PBJT, dan reklame"
    ],
    "answer": 2,
    "explanation": "Pajak provinsi dalam UU HKPD terdiri atas PKB, BBNKB, PAB, PBBKB, PAP, Pajak Rokok, dan Opsen MBLB."
  },
  {
    "topic": "TM13 · PKB",
    "skill": "Menguasai tarif maksimum",
    "difficulty": "medium",
    "q": "Tarif maksimal PKB kepemilikan pertama untuk provinsi pada umumnya adalah...",
    "options": [
      "12 persen",
      "1,2 persen",
      "2 persen",
      "6 persen"
    ],
    "answer": 1,
    "explanation": "UU HKPD menetapkan tarif maksimal kepemilikan pertama 1,2 persen. Ketentuan khusus berlaku untuk DKI."
  },
  {
    "topic": "TM13 · BBNKB",
    "skill": "Memahami perubahan objek",
    "difficulty": "medium",
    "q": "Perubahan penting BBNKB dalam UU HKPD adalah...",
    "options": [
      "Penyerahan kendaraan bekas kedua dan seterusnya bukan lagi objek BBNKB",
      "Semua kendaraan bebas BBNKB",
      "BBNKB berubah menjadi pajak pusat",
      "Tarif maksimal umum menjadi 66 persen"
    ],
    "answer": 0,
    "explanation": "BBNKB berfokus pada penyerahan pertama. Penyerahan kedua dan seterusnya tidak lagi menjadi objek BBNKB."
  },
  {
    "topic": "TM13 · Opsen",
    "skill": "Menguasai tarif opsen",
    "difficulty": "basic",
    "q": "Tarif Opsen PKB dan Opsen BBNKB adalah...",
    "options": [
      "25 persen dari NJOP",
      "10 persen dari cukai",
      "0,2 persen dari nilai alat berat",
      "66 persen dari pokok pajak induk"
    ],
    "answer": 3,
    "explanation": "Kabupaten atau kota memungut Opsen PKB dan BBNKB sebesar 66 persen dari pokok pajak provinsi."
  },
  {
    "topic": "TM13 · Pajak Rokok",
    "skill": "Menguasai tarif dan pemungutan",
    "difficulty": "medium",
    "q": "Pajak Rokok dikenakan sebesar...",
    "options": [
      "66 persen dari PKB",
      "25 persen dari MBLB",
      "10 persen dari cukai rokok",
      "10 persen dari harga eceran sebelum cukai"
    ],
    "answer": 2,
    "explanation": "Pajak Rokok dipungut bersama cukai oleh pemerintah pusat lalu disalurkan kepada provinsi."
  },
  {
    "topic": "TM13 · Retribusi",
    "skill": "Mengidentifikasi contoh aktif",
    "difficulty": "medium",
    "q": "Contoh objek Retribusi Jasa Umum yang sesuai rezim HKPD adalah...",
    "options": [
      "Izin mendirikan bangunan dengan istilah lama",
      "Pelayanan kesehatan dan kebersihan",
      "Penerbitan KTP dan akta sebagai contoh utama",
      "Terminal sebagai contoh Jasa Usaha"
    ],
    "answer": 1,
    "explanation": "Objek Jasa Umum mencakup kesehatan, kebersihan, parkir tepi jalan umum, pasar, dan pengendalian lalu lintas. Istilah perizinan bangunan yang tepat adalah persetujuan bangunan gedung."
  },
  {
    "kind": "multi-select",
    "topic": "TM13 · Pajak Provinsi",
    "skill": "Mengidentifikasi jenis pajak provinsi",
    "difficulty": "medium",
    "q": "Pilih semua yang termasuk pajak provinsi.",
    "options": [
      "Pajak Kendaraan Bermotor",
      "Pajak Alat Berat",
      "Pajak Air Permukaan",
      "PBB-P2",
      "Pajak Rokok"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "PBB-P2 merupakan pajak kabupaten atau kota. PKB, PAB, PAP, dan Pajak Rokok termasuk pajak provinsi."
  },
  {
    "kind": "account-match",
    "topic": "TM13 · Dasar Pengenaan",
    "skill": "Memadankan pajak dan DPP",
    "difficulty": "medium",
    "q": "Pasangkan pajak provinsi dengan dasar pengenaannya.",
    "instruction": "Pasangkan setiap pernyataan dengan jawaban yang paling tepat.",
    "choices": [
      "NJKB dikali bobot",
      "Nilai jual kendaraan",
      "Nilai jual alat berat",
      "Nilai jual bahan bakar sebelum PPN",
      "Cukai rokok"
    ],
    "pairs": [
      {
        "prompt": "PKB",
        "answer": "NJKB dikali bobot"
      },
      {
        "prompt": "BBNKB",
        "answer": "Nilai jual kendaraan"
      },
      {
        "prompt": "PAB",
        "answer": "Nilai jual alat berat"
      },
      {
        "prompt": "PBBKB",
        "answer": "Nilai jual bahan bakar sebelum PPN"
      },
      {
        "prompt": "Pajak Rokok",
        "answer": "Cukai rokok"
      }
    ],
    "explanation": "Setiap pajak provinsi memiliki dasar pengenaan yang berbeda sesuai objek ekonominya."
  },
  {
    "kind": "report-fill",
    "topic": "TM13 · Opsen PKB",
    "skill": "Menghitung PKB dan opsen",
    "difficulty": "advanced",
    "q": "Dasar PKB sebuah mobil Rp200.000.000 dan tarif PKB 1,1 persen. Hitung PKB, Opsen PKB 66 persen, dan total yang dibayar.",
    "instruction": "Isi seluruh angka tanpa simbol mata uang. Pemisah ribuan boleh digunakan.",
    "data": [
      "PKB = tarif × dasar PKB.",
      "Opsen = 66 persen × pokok PKB.",
      "Total = PKB + opsen."
    ],
    "blanks": [
      {
        "id": "pkb",
        "label": "PKB",
        "answer": 2200000,
        "prefix": "Rp"
      },
      {
        "id": "opsen",
        "label": "Opsen PKB",
        "answer": 1452000,
        "prefix": "Rp"
      },
      {
        "id": "total",
        "label": "Total pembayaran",
        "answer": 3652000,
        "prefix": "Rp"
      }
    ],
    "explanation": "PKB = 1,1% × Rp200 juta = Rp2,2 juta. Opsen = 66% × Rp2,2 juta = Rp1,452 juta. Total Rp3,652 juta."
  },
  {
    "topic": "TM14 · PBB-P2",
    "skill": "Mengenali objek PBB-P2",
    "difficulty": "basic",
    "q": "PBB-P2 dikenakan atas...",
    "options": [
      "Bumi dan bangunan perdesaan atau perkotaan, kecuali sektor perkebunan, perhutanan, dan pertambangan pusat",
      "Semua dokumen perdata",
      "Penghasilan badan",
      "Penyerahan kendaraan pertama"
    ],
    "answer": 0,
    "explanation": "PBB-P2 merupakan pajak kabupaten atau kota atas bumi dan bangunan perdesaan atau perkotaan, dengan pengecualian sektor P3 yang tetap pusat."
  },
  {
    "topic": "TM14 · PBB-P2",
    "skill": "Menguasai tarif maksimum",
    "difficulty": "basic",
    "q": "Tarif maksimal PBB-P2 menurut UU HKPD adalah...",
    "options": [
      "0,3 persen untuk semua daerah",
      "5 persen",
      "10 persen",
      "0,5 persen"
    ],
    "answer": 3,
    "explanation": "UU HKPD menetapkan batas tarif PBB-P2 paling tinggi 0,5 persen. Tarif riil ditetapkan Perda."
  },
  {
    "topic": "TM14 · BPHTB",
    "skill": "Menguasai NPOPTKP minimum",
    "difficulty": "medium",
    "q": "NPOPTKP minimum untuk perolehan hak pertama adalah...",
    "options": [
      "Rp10.000.000",
      "Rp300.000.000 untuk semua perolehan",
      "Rp80.000.000",
      "Rp60.000.000"
    ],
    "answer": 2,
    "explanation": "UU HKPD menetapkan minimum Rp80 juta untuk perolehan pertama. Waris atau hibah wasiat dalam hubungan keluarga tertentu memiliki minimum Rp300 juta."
  },
  {
    "topic": "TM14 · BPHTB",
    "skill": "Menentukan saat terutang",
    "difficulty": "medium",
    "q": "Untuk perolehan karena waris, BPHTB terutang pada saat...",
    "options": [
      "Lelang diumumkan",
      "Peralihan hak didaftarkan ke kantor pertanahan",
      "Pewaris menandatangani SPT",
      "Surat Teguran diterbitkan"
    ],
    "answer": 1,
    "explanation": "Saat terutang waris adalah ketika penerima waris mendaftarkan peralihan hak ke kantor pertanahan."
  },
  {
    "topic": "TM14 · PBJT",
    "skill": "Memahami penyederhanaan pajak",
    "difficulty": "medium",
    "q": "PBJT menggabungkan pajak lama atas...",
    "options": [
      "Makanan atau minuman, tenaga listrik, perhotelan, parkir, serta kesenian dan hiburan",
      "PKB, BBNKB, PAB, PBBKB, dan PAP",
      "PBB-P2, BPHTB, reklame, PAT, dan MBLB",
      "PPh, PPN, PPnBM, dan Bea Meterai"
    ],
    "answer": 0,
    "explanation": "PBJT menyatukan objek yang sebelumnya dikenal sebagai pajak restoran, penerangan jalan, hotel, parkir, dan hiburan."
  },
  {
    "topic": "TM14 · Pajak Kab/Kota",
    "skill": "Mengidentifikasi tarif maksimum",
    "difficulty": "medium",
    "q": "Pasangan pajak dan tarif maksimal yang benar adalah...",
    "options": [
      "Reklame 10 persen, PAT 66 persen, Walet 75 persen",
      "PBB-P2 5 persen, BPHTB 0,5 persen, PBJT 25 persen",
      "Pajak Rokok 66 persen, PAB 20 persen, PBBKB 0,2 persen",
      "Reklame 25 persen, PAT 20 persen, Walet 10 persen"
    ],
    "answer": 3,
    "explanation": "Tarif maksimum yang relevan adalah Reklame 25 persen, PAT 20 persen, MBLB 20 persen, dan Walet 10 persen."
  },
  {
    "kind": "multi-select",
    "topic": "TM14 · PBJT",
    "skill": "Mengidentifikasi objek PBJT",
    "difficulty": "medium",
    "q": "Pilih semua konsumsi yang menjadi objek PBJT.",
    "options": [
      "Makanan dan minuman",
      "Tenaga listrik",
      "Jasa perhotelan",
      "Jasa parkir",
      "Penyerahan pertama kendaraan bermotor"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Penyerahan kendaraan merupakan ranah BBNKB. PBJT mencakup makanan atau minuman, listrik, hotel, parkir, dan kesenian atau hiburan."
  },
  {
    "kind": "account-match",
    "topic": "TM14 · Pajak Kab/Kota",
    "skill": "Memadankan pajak dan dasar pengenaan",
    "difficulty": "medium",
    "q": "Pasangkan pajak kabupaten atau kota dengan dasar pengenaannya.",
    "instruction": "Pasangkan setiap pernyataan dengan jawaban yang paling tepat.",
    "choices": [
      "NJOP",
      "NPOP",
      "Nilai Sewa Reklame",
      "Nilai Perolehan Air Tanah",
      "Nilai jual sarang burung walet"
    ],
    "pairs": [
      {
        "prompt": "PBB-P2",
        "answer": "NJOP"
      },
      {
        "prompt": "BPHTB",
        "answer": "NPOP"
      },
      {
        "prompt": "Pajak Reklame",
        "answer": "Nilai Sewa Reklame"
      },
      {
        "prompt": "Pajak Air Tanah",
        "answer": "Nilai Perolehan Air Tanah"
      },
      {
        "prompt": "Pajak Sarang Burung Walet",
        "answer": "Nilai jual sarang burung walet"
      }
    ],
    "explanation": "DPP berbeda menurut objek: NJOP untuk PBB-P2, NPOP untuk BPHTB, NSR untuk reklame, dan nilai perolehan atau nilai jual untuk objek lainnya."
  },
  {
    "kind": "report-fill",
    "topic": "TM14 · PBB-P2",
    "skill": "Menghitung PBB-P2",
    "difficulty": "advanced",
    "q": "NJOP rumah Rp800.000.000, NJOPTKP Rp10.000.000, persentase dasar pengenaan 40 persen, dan tarif 0,2 persen. Hitung dasar pengenaan terpakai dan PBB-P2.",
    "instruction": "Isi seluruh angka tanpa simbol mata uang. Pemisah ribuan boleh digunakan.",
    "data": [
      "Kurangi NJOP dengan NJOPTKP.",
      "Kalikan hasilnya dengan 40 persen.",
      "Kalikan dasar pengenaan terpakai dengan tarif 0,2 persen."
    ],
    "blanks": [
      {
        "id": "dasar",
        "label": "Dasar pengenaan terpakai",
        "answer": 316000000,
        "prefix": "Rp"
      },
      {
        "id": "pbb",
        "label": "PBB-P2 terutang",
        "answer": 632000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Rp800 juta − Rp10 juta = Rp790 juta. Dasar terpakai 40% = Rp316 juta. PBB-P2 = 0,2% × Rp316 juta = Rp632 ribu."
  },
  {
    "kind": "report-fill",
    "topic": "TM14 · BPHTB",
    "skill": "Menghitung BPHTB",
    "difficulty": "advanced",
    "q": "Sebuah rumah dibeli dengan NPOP Rp1.000.000.000. NPOPTKP Perda Rp80.000.000 dan tarif BPHTB 5 persen. Hitung dasar kena pajak dan BPHTB.",
    "instruction": "Isi seluruh angka tanpa simbol mata uang. Pemisah ribuan boleh digunakan.",
    "data": [
      "Dasar kena pajak = NPOP − NPOPTKP.",
      "BPHTB = tarif × dasar kena pajak."
    ],
    "blanks": [
      {
        "id": "dasar",
        "label": "Dasar kena pajak",
        "answer": 920000000,
        "prefix": "Rp"
      },
      {
        "id": "bphtb",
        "label": "BPHTB terutang",
        "answer": 46000000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Dasar = Rp1 miliar − Rp80 juta = Rp920 juta. BPHTB = 5% × Rp920 juta = Rp46 juta."
  },
  {
    "topic": "Integratif · Alur Administrasi",
    "skill": "Menghubungkan pemeriksaan dan sengketa",
    "difficulty": "advanced",
    "q": "Hasil pemeriksaan menerbitkan SKPKB dan WP tidak setuju dengan materi besarnya pajak. Alur yang tepat adalah...",
    "options": [
      "PBB-P2, SPMP, restitusi, penyidikan",
      "SKPPKP, gugatan, surat sita, banding",
      "Pemeriksaan, LHP, SKPKB, keberatan, banding",
      "SP2DK, lelang, Bea Meterai, opsen"
    ],
    "answer": 2,
    "explanation": "Sengketa materi atas ketetapan ditempuh melalui keberatan kepada DJP dan dapat dilanjutkan dengan banding ke Pengadilan Pajak."
  },
  {
    "topic": "Integratif · Aturan Lama dan Aktif",
    "skill": "Mendeteksi pernyataan kedaluwarsa",
    "difficulty": "advanced",
    "q": "Pernyataan yang harus ditolak karena memakai rezim lama adalah...",
    "options": [
      "Pemeriksaan lengkap memiliki jangka waktu pengujian 5 bulan",
      "Sanksi bunga selalu tetap 2 persen per bulan dan BBNKB tetap dikenakan atas kendaraan bekas",
      "Tarif Bea Meterai Rp10.000 per dokumen",
      "Opsen PKB sebesar 66 persen dari pokok PKB"
    ],
    "answer": 1,
    "explanation": "Bunga kini dinamis dan kendaraan bekas atau penyerahan kedua bukan lagi objek BBNKB. Tiga pernyataan lain sesuai materi aktif."
  },
  {
    "kind": "multi-select",
    "topic": "Integratif · Validasi Pernyataan",
    "skill": "Menyaring pernyataan yang benar",
    "difficulty": "advanced",
    "q": "Pilih semua pernyataan yang benar menurut materi TM 8–14.",
    "options": [
      "SKPKBT berkaitan dengan data baru setelah ketetapan sebelumnya",
      "Gugatan materi atas besarnya pajak menggantikan banding",
      "Surat Paksa memiliki kekuatan eksekutorial",
      "Bea Meterai atas dokumen yang menyatakan uang berlaku bila nominalnya lebih dari Rp5 juta",
      "PBB-P2 merupakan pajak pusat untuk seluruh sektor"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "Sengketa materi ditempuh melalui banding, bukan gugatan. PBB-P2 adalah pajak kabupaten atau kota, sementara sektor perkebunan, perhutanan, dan pertambangan tertentu tetap pusat."
  },
  {
    "kind": "account-match",
    "topic": "Integratif · Produk dan Fungsi",
    "skill": "Memadankan produk hukum lintas topik",
    "difficulty": "advanced",
    "q": "Pasangkan produk atau instrumen dengan fungsi utamanya.",
    "instruction": "Pasangkan setiap pernyataan dengan jawaban yang paling tepat.",
    "choices": [
      "Klarifikasi data kepatuhan",
      "Dasar tagihan pajak atau sanksi",
      "Ketetapan lebih bayar",
      "Penagihan dengan kekuatan eksekutorial",
      "Pengembalian pendahuluan"
    ],
    "pairs": [
      {
        "prompt": "SP2DK",
        "answer": "Klarifikasi data kepatuhan"
      },
      {
        "prompt": "STP",
        "answer": "Dasar tagihan pajak atau sanksi"
      },
      {
        "prompt": "SKPLB",
        "answer": "Ketetapan lebih bayar"
      },
      {
        "prompt": "Surat Paksa",
        "answer": "Penagihan dengan kekuatan eksekutorial"
      },
      {
        "prompt": "SKPPKP",
        "answer": "Pengembalian pendahuluan"
      }
    ],
    "explanation": "Instrumen tersebut berasal dari tahap berbeda dan tidak dapat dipertukarkan fungsinya."
  }
];
