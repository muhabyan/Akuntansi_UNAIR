// src/data/quizzes/aka201.ts
// Kuis pilihan ganda Pengauditan Berbasis Risiko I (AKA201).
// TM01-TM07 mengikuti paket pra-UTS yang sudah ada. TM09-TM15 disusun dari 04 dan 05.
// Rujukan 04 ditampilkan dalam pembahasan; jejak sumber ada di scripts/fixtures/aka201-practice-sources.json.
// Edited by hand, not by the Semester 3 generators (see scripts/test-sem3-generators.mjs).
import type { QuizQuestion } from '../../types';

export const AKA201_QUIZ_UTS: QuizQuestion[] = [
  {
    "id": "aka201-tm01-q01",
    "tm": 1,
    "topic": "Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "q": "Audit atas laporan keuangan debitur paling langsung menurunkan komponen suku bunga yang mana?",
    "options": [
      "Risk-free interest rate",
      "Business risk debitur",
      "Information risk",
      "Ketiganya dalam proporsi yang sama"
    ],
    "answer": 2,
    "explanation": "audit tidak berpengaruh pada risk-free rate dan business risk; pengaruhnya pada information risk.",
    "sourceAnchors": [
      "C-042"
    ]
  },
  {
    "id": "aka201-tm01-q02",
    "tm": 1,
    "topic": "Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "q": "Reasonable assurance tidak bersifat absolut terutama karena:",
    "options": [
      "Sebagian besar bukti audit bersifat persuasive, bukan conclusive",
      "Auditor tidak independen dari klien yang membayarnya",
      "Standar audit hanya mewajibkan limited assurance",
      "Manajemen tidak bertanggung jawab atas laporan keuangan"
    ],
    "answer": 0,
    "explanation": "ISA 200 para. 5.",
    "sourceAnchors": [
      "C-014"
    ]
  },
  {
    "id": "aka201-tm01-q03",
    "tm": 1,
    "topic": "Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "q": "Sebuah BUMN besar memproses ratusan ribu faktur per bulan, dan kelebihan bayar kecil kepada pemasok tidak terdeteksi. Penyebab information risk yang paling tepat:",
    "options": [
      "Remoteness of information",
      "Voluminous data",
      "Complex exchange transactions",
      "Biases and motives of the provider"
    ],
    "answer": 1,
    "explanation": "volume transaksi besar membuat kesalahan terkubur (contoh buku: kelebihan bayar 2.000 dolar).",
    "sourceAnchors": [
      "C-044"
    ]
  },
  {
    "id": "aka201-tm01-q04",
    "tm": 1,
    "topic": "Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "q": "Menilai apakah proses penggajian terkomputerisasi anak usaha berjalan ekonomis, efisien, dan efektif adalah contoh:",
    "options": [
      "Financial statement audit",
      "Compliance audit",
      "Operational audit",
      "Review engagement"
    ],
    "answer": 2,
    "explanation": "Table 1-1.",
    "sourceAnchors": [
      "C-050",
      "C-052"
    ]
  },
  {
    "id": "aka201-tm01-q05",
    "tm": 1,
    "topic": "Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "q": "Perbedaan utama internal auditor dengan auditor eksternal adalah:",
    "options": [
      "Internal auditor tidak boleh melakukan compliance audit",
      "Internal auditor tidak memerlukan pengetahuan akuntansi",
      "Internal auditor melapor kepada otoritas pajak",
      "Tingkat independensi terhadap entitas"
    ],
    "answer": 3,
    "explanation": "ARENS p.12.",
    "sourceAnchors": [
      "C-061"
    ]
  },
  {
    "id": "aka201-tm01-q06",
    "tm": 1,
    "topic": "Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "q": "Kesimpulan berbentuk \"tidak ada hal yang menjadi perhatian kami yang menunjukkan bahwa...\" menunjukkan jenis keyakinan:",
    "options": [
      "Limited assurance",
      "Reasonable assurance",
      "Absolute assurance",
      "Tidak ada asurans"
    ],
    "answer": 0,
    "explanation": "keyakinan negatif dari perikatan limited assurance, misalnya review.",
    "sourceAnchors": [
      "C-012",
      "C-080",
      "C-081"
    ]
  },
  {
    "id": "aka201-tm01-q07",
    "tm": 1,
    "topic": "Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "q": "Pernyataan yang BENAR tentang perbedaan akuntansi dan auditing:",
    "options": [
      "Auditor mencatat transaksi yang belum dicatat klien",
      "Auditor menilai kewajaran informasi yang sudah dicatat dalam batas materialitas",
      "Auditor tidak perlu memahami standar akuntansi",
      "Akuntansi dan auditing sama-sama bertujuan memberi opini"
    ],
    "answer": 1,
    "explanation": "ARENS pp.14–15.",
    "sourceAnchors": [
      "C-072"
    ]
  },
  {
    "id": "aka201-tm01-q08",
    "tm": 1,
    "topic": "Sifat Audit, Permintaan atas Audit, dan Jenis Auditor",
    "q": "Jasa KAP yang tidak memberikan asurans sama sekali atas laporan keuangan:",
    "options": [
      "Audit",
      "Review",
      "Audit atas satu akun tertentu",
      "Compilation"
    ],
    "answer": 3,
    "explanation": "ARENS p.18.",
    "sourceAnchors": [
      "C-083",
      "C-084"
    ]
  },
  {
    "id": "aka201-tm02-q01",
    "tm": 2,
    "topic": "Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "q": "Komponen sistem manajemen mutu yang TIDAK ada dalam enam elemen pengendalian mutu versi lama adalah:",
    "options": [
      "Relevant ethical requirements",
      "The firm's risk assessment process",
      "Engagement performance",
      "Acceptance and continuance of client relationships"
    ],
    "answer": 1,
    "explanation": "proses penilaian risiko KAP serta informasi dan komunikasi adalah komponen baru di ISQM 1 / SMM 1.",
    "sourceAnchors": [
      "C-051"
    ]
  },
  {
    "id": "aka201-tm02-q02",
    "tm": 2,
    "topic": "Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "q": "Menurut PP 20/2015, seorang Akuntan Publik yang telah mengaudit perusahaan asuransi selama 5 tahun buku berturut-turut dapat kembali mengauditnya setelah:",
    "options": [
      "1 tahun buku",
      "3 tahun buku",
      "5 tahun buku",
      "2 tahun buku berturut-turut tidak memberikan jasa audit"
    ],
    "answer": 3,
    "explanation": "PPAP Pasal 11 ayat (4).",
    "sourceAnchors": [
      "C-080"
    ]
  },
  {
    "id": "aka201-tm02-q03",
    "tm": 2,
    "topic": "Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "q": "Menurut UU 5/2011, jasa audit atas informasi keuangan historis:",
    "options": [
      "Hanya dapat diberikan oleh Akuntan Publik",
      "Dapat diberikan oleh setiap akuntan beregister",
      "Dapat diberikan oleh Rekan non-Akuntan Publik",
      "Dapat diberikan oleh internal auditor bersertifikat"
    ],
    "answer": 0,
    "explanation": "UUAP Pasal 3 ayat (2).",
    "sourceAnchors": [
      "C-071"
    ]
  },
  {
    "id": "aka201-tm02-q04",
    "tm": 2,
    "topic": "Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "q": "Standar yang mengatur tanggung jawab engagement partner atas mutu satu perikatan audit adalah:",
    "options": [
      "ISQM 1",
      "ISQM 2",
      "ISA 220 (Revised)",
      "ISA 200"
    ],
    "answer": 2,
    "explanation": "ISQM 1 di tingkat KAP; ISA 220 di tingkat perikatan.",
    "sourceAnchors": [
      "C-058",
      "C-059"
    ]
  },
  {
    "id": "aka201-tm02-q05",
    "tm": 2,
    "topic": "Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "q": "Perbedaan utama PCAOB dengan CPAB menurut buku adalah bahwa PCAOB:",
    "options": [
      "Tidak melakukan inspeksi",
      "Hanya mengawasi KAP kecil",
      "Diangkat oleh AICPA",
      "Juga menetapkan standar audit untuk perusahaan publik"
    ],
    "answer": 3,
    "explanation": "ARENS p.31.",
    "sourceAnchors": [
      "C-015"
    ]
  },
  {
    "id": "aka201-tm02-q06",
    "tm": 2,
    "topic": "Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "q": "Kewenangan menyusun dan menetapkan SPAP di Indonesia ada pada:",
    "options": [
      "Menteri Keuangan",
      "Asosiasi Profesi Akuntan Publik",
      "Komite Profesi Akuntan Publik",
      "Otoritas pasar modal"
    ],
    "answer": 1,
    "explanation": "UUAP Pasal 44 ayat (1) huruf a; PPAP Pasal 8.",
    "sourceAnchors": [
      "C-076"
    ]
  },
  {
    "id": "aka201-tm02-q07",
    "tm": 2,
    "topic": "Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "q": "Menurut buku, pendorong utama kualitas audit adalah:",
    "options": [
      "Budaya KAP yang menyeimbangkan komersialisme dan profesionalisme",
      "Ukuran KAP",
      "Besarnya fee audit",
      "Jumlah kantor cabang"
    ],
    "answer": 0,
    "explanation": "ARENS p.39.",
    "sourceAnchors": [
      "C-030"
    ]
  },
  {
    "id": "aka201-tm02-q08",
    "tm": 2,
    "topic": "Profesi Akuntan Publik, Standar Audit, dan Manajemen Mutu",
    "q": "Tiga langkah pendekatan berbasis risiko dalam ISQM 1 / SMM 1 secara berurutan adalah:",
    "options": [
      "Merencanakan, melaksanakan, melaporkan",
      "Menilai risiko audit, menetapkan materialitas, mengumpulkan bukti",
      "Menetapkan tujuan mutu, menilai risiko mutu, merancang respons",
      "Menerima klien, menugaskan tim, mereviu kertas kerja"
    ],
    "answer": 2,
    "explanation": "ISQM1 para. 8.",
    "sourceAnchors": [
      "C-052"
    ]
  },
  {
    "id": "aka201-tm03-q01",
    "tm": 3,
    "topic": "Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "q": "Auditor yang tahun lalu menyusun laporan keuangan klien lalu tahun ini mengaudit laporan tersebut menghadapi ancaman:",
    "options": [
      "Advokasi",
      "Intimidasi",
      "Telaah pribadi",
      "Kedekatan"
    ],
    "answer": 2,
    "explanation": "menilai pekerjaan sendiri (KEPAP 120.6-A3(b)).",
    "sourceAnchors": [
      "C-031"
    ]
  },
  {
    "id": "aka201-tm03-q02",
    "tm": 3,
    "topic": "Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "q": "Menurut KEPAP Seksi 420, anggota tim audit boleh menerima hadiah dari klien audit jika:",
    "options": [
      "Nilainya trivial dan tidak memiliki konsekuensi, serta tidak dimaksudkan memengaruhi perilaku secara tidak patut",
      "Hadiah diberikan setelah laporan audit terbit",
      "Hadiah disetujui oleh CFO klien",
      "Nilainya di bawah fee audit"
    ],
    "answer": 0,
    "explanation": "KEPAP P420.3 dan 420.3-A2.",
    "sourceAnchors": [
      "C-050"
    ]
  },
  {
    "id": "aka201-tm03-q03",
    "tm": 3,
    "topic": "Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "q": "Tolok ukur untuk menentukan apakah ancaman berada pada level yang dapat diterima menurut KEPAP adalah:",
    "options": [
      "Pendapat engagement partner",
      "Persetujuan komite audit klien",
      "Batas nominal yang ditetapkan KAP",
      "Pengujian pihak ketiga yang rasional dan memiliki informasi yang memadai"
    ],
    "answer": 3,
    "explanation": "KEPAP 120.7-A1.",
    "sourceAnchors": [
      "C-032"
    ]
  },
  {
    "id": "aka201-tm03-q04",
    "tm": 3,
    "topic": "Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "q": "Prinsip dasar etika yang mensyaratkan pertimbangan tidak dikompromikan oleh bias, benturan kepentingan, atau pengaruh yang tidak semestinya adalah:",
    "options": [
      "Integritas",
      "Objektivitas",
      "Perilaku profesional",
      "Kerahasiaan"
    ],
    "answer": 1,
    "explanation": "KEPAP 110.1-A1(b).",
    "sourceAnchors": [
      "C-010"
    ]
  },
  {
    "id": "aka201-tm03-q05",
    "tm": 3,
    "topic": "Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "q": "Perusahaan klien bangkrut akibat resesi, dan laporan keuangannya ternyata disajikan wajar serta audit dilakukan sesuai standar. Ini adalah contoh:",
    "options": [
      "Audit failure",
      "Deficient performance gap",
      "Pelanggaran due care",
      "Business failure tanpa audit failure"
    ],
    "answer": 3,
    "explanation": "ARENS pp.70–71.",
    "sourceAnchors": [
      "C-082"
    ]
  },
  {
    "id": "aka201-tm03-q06",
    "tm": 3,
    "topic": "Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "q": "Menurut KEPAP, jika ancaman berada pada level yang tidak dapat diterima dan tidak ada pengamanan yang dapat diterapkan, serta keadaannya tidak dapat dihilangkan, Anggota harus:",
    "options": [
      "Menolak atau mengakhiri aktivitas profesional tersebut",
      "Melanjutkan dengan menambah jumlah sampel",
      "Meminta persetujuan tertulis manajemen klien",
      "Mengungkapkan ancaman di laporan auditor"
    ],
    "answer": 0,
    "explanation": "KEPAP P120.10 dan 120.10-A1.",
    "sourceAnchors": [
      "C-033"
    ]
  },
  {
    "id": "aka201-tm03-q07",
    "tm": 3,
    "topic": "Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "q": "Menurut UU 5/2011 Pasal 30, Akuntan Publik dilarang:",
    "options": [
      "Memberikan jasa reviu",
      "Menerima imbalan jasa bersyarat",
      "Menjadi dosen akuntansi",
      "Membuat kertas kerja"
    ],
    "answer": 1,
    "explanation": "Pasal 30 ayat (1) huruf h.",
    "sourceAnchors": [
      "C-072"
    ]
  },
  {
    "id": "aka201-tm03-q08",
    "tm": 3,
    "topic": "Etika Profesi, Independensi, dan Lingkungan Hukum Auditor",
    "q": "Anggapan publik bahwa opini wajar tanpa pengecualian menjamin laporan keuangan bebas kesalahan adalah contoh:",
    "options": [
      "Deficient standards gap",
      "Deficient performance gap",
      "Reasonableness gap",
      "Audit risk"
    ],
    "answer": 2,
    "explanation": "harapan yang melebihi apa yang wajar diharapkan dari auditor (ARENS pp.68–69).",
    "sourceAnchors": [
      "C-080",
      "C-081"
    ]
  },
  {
    "id": "aka201-tm04-q01",
    "tm": 4,
    "topic": "Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "q": "Auditor menemukan salah saji material pada saldo persediaan. Siapa yang seharusnya membuat jurnal koreksinya?",
    "options": [
      "Manajemen klien",
      "Engagement partner",
      "Senior auditor yang menemukan salah saji",
      "Komite audit"
    ],
    "answer": 0,
    "explanation": "koreksi oleh auditor menimbulkan ancaman telaah pribadi (ARENS p.95).",
    "sourceAnchors": [
      "C-012"
    ]
  },
  {
    "id": "aka201-tm04-q02",
    "tm": 4,
    "topic": "Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "q": "Menurut ISA 200, pernyataan yang BENAR tentang keterbatasan bawaan audit adalah:",
    "options": [
      "Keterbatasan bawaan membolehkan auditor melewatkan prosedur yang mahal",
      "Keterbatasan bawaan berarti auditor tidak bertanggung jawab atas fraud",
      "Kesulitan, waktu, atau biaya bukan alasan sah untuk puas dengan bukti yang kurang meyakinkan",
      "Keterbatasan bawaan hanya berlaku untuk entitas kecil"
    ],
    "answer": 2,
    "explanation": "ISA200 para. A53.",
    "sourceAnchors": [
      "C-033"
    ]
  },
  {
    "id": "aka201-tm04-q03",
    "tm": 4,
    "topic": "Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "q": "Direktur menunda pencatatan beban agar target laba tercapai. Ini adalah contoh:",
    "options": [
      "Error",
      "Pelaporan keuangan curang",
      "Penyalahgunaan aset",
      "Ketidakpatuhan hukum berdampak tidak langsung"
    ],
    "answer": 1,
    "explanation": "salah saji disengaja untuk menyesatkan pengguna (ARENS p.90).",
    "sourceAnchors": [
      "C-041"
    ]
  },
  {
    "id": "aka201-tm04-q04",
    "tm": 4,
    "topic": "Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "q": "Menurut ISA 200, pengalaman bertahun-tahun bahwa manajemen klien jujur:",
    "options": [
      "Membolehkan auditor mengurangi bukti untuk area berisiko tinggi",
      "Menggantikan kebutuhan konfirmasi pihak ketiga",
      "Tidak boleh dipertimbangkan sama sekali",
      "Boleh dipertimbangkan, tetapi tidak membebaskan auditor dari skeptisisme profesional"
    ],
    "answer": 3,
    "explanation": "ISA200 para. A25.",
    "sourceAnchors": [
      "C-075"
    ]
  },
  {
    "id": "aka201-tm04-q05",
    "tm": 4,
    "topic": "Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "q": "Untuk hukum dan regulasi yang berdampak tidak langsung pada laporan keuangan, auditor:",
    "options": [
      "Melakukan prosedur tertentu seperti bertanya kepada manajemen dan memeriksa korespondensi dengan regulator",
      "Wajib memperoleh bukti kepatuhan atas setiap ketentuan",
      "Tidak memiliki tanggung jawab apa pun",
      "Wajib mencari semua tindakan ilegal"
    ],
    "answer": 0,
    "explanation": "ARENS pp.92–93.",
    "sourceAnchors": [
      "C-052"
    ]
  },
  {
    "id": "aka201-tm04-q06",
    "tm": 4,
    "topic": "Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "q": "Kualitas skeptisisme yang berarti \"tidak buru-buru menyimpulkan sebelum ada bukti yang memadai\" adalah:",
    "options": [
      "Autonomy",
      "Search for knowledge",
      "Suspension of judgment",
      "Self-esteem"
    ],
    "answer": 2,
    "explanation": "ARENS Table 4-1.",
    "sourceAnchors": [
      "C-072"
    ]
  },
  {
    "id": "aka201-tm04-q07",
    "tm": 4,
    "topic": "Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "q": "Auditor memakai prosedur yang sama dengan tahun lalu tanpa mempertimbangkan apakah masih tepat. Jebakan pertimbangan yang paling sesuai:",
    "options": [
      "Availability",
      "Overconfidence",
      "Confirmation",
      "Anchoring"
    ],
    "answer": 3,
    "explanation": "ARENS pp.98–99.",
    "sourceAnchors": [
      "C-076"
    ]
  },
  {
    "id": "aka201-tm04-q08",
    "tm": 4,
    "topic": "Tujuan Audit, Tanggung Jawab, dan Skeptisisme Profesional",
    "q": "Tanggung jawab menilai kemampuan entitas melanjutkan usaha berada pada:",
    "options": [
      "Auditor",
      "Manajemen",
      "Regulator pasar modal",
      "Komite audit"
    ],
    "answer": 1,
    "explanation": "auditor menyimpulkan kelayakan penggunaan basis tersebut, tetapi penilaiannya tanggung jawab manajemen (ARENS p.94).",
    "sourceAnchors": [
      "C-053"
    ]
  },
  {
    "id": "aka201-tm05-q01",
    "tm": 5,
    "topic": "Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "q": "Barang konsinyasi milik pemasok ikut dihitung sebagai persediaan klien. Asersi yang dilanggar:",
    "options": [
      "Existence",
      "Rights and obligations",
      "Completeness",
      "Cutoff"
    ],
    "answer": 1,
    "explanation": "barangnya ada tetapi bukan milik entitas.",
    "sourceAnchors": [
      "C-042",
      "C-051"
    ]
  },
  {
    "id": "aka201-tm05-q02",
    "tm": 5,
    "topic": "Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "q": "Penjualan dicatat pada 31 Desember padahal barang dikirim 4 Januari. Asersi transaksi yang dilanggar:",
    "options": [
      "Occurrence",
      "Classification",
      "Cutoff",
      "Presentation"
    ],
    "answer": 2,
    "explanation": "ARENS p.107.",
    "sourceAnchors": [
      "C-033"
    ]
  },
  {
    "id": "aka201-tm05-q03",
    "tm": 5,
    "topic": "Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "q": "Asersi yang hanya berlaku untuk saldo akun (tidak ada padanannya di asersi transaksi) adalah:",
    "options": [
      "Completeness",
      "Classification",
      "Presentation",
      "Rights and obligations"
    ],
    "answer": 3,
    "explanation": "Table 4-4 / ISA 315 A190.",
    "sourceAnchors": [
      "C-023"
    ]
  },
  {
    "id": "aka201-tm05-q04",
    "tm": 5,
    "topic": "Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "q": "Prosedur yang paling tepat untuk memperoleh bukti atas asersi existence persediaan adalah:",
    "options": [
      "Mengamati perhitungan fisik persediaan",
      "Mencocokkan total daftar persediaan dengan neraca saldo",
      "Menelaah pengungkapan kebijakan akuntansi persediaan",
      "Menghitung ulang penyusutan"
    ],
    "answer": 0,
    "explanation": "ARENS p.108.",
    "sourceAnchors": [
      "C-041"
    ]
  },
  {
    "id": "aka201-tm05-q05",
    "tm": 5,
    "topic": "Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "q": "Menurut ISA 315, penentuan apakah suatu asersi relevan dilakukan:",
    "options": [
      "Setelah menguji efektivitas pengendalian",
      "Setelah laporan auditor terbit",
      "Berdasarkan besarnya fee audit",
      "Sebelum mempertimbangkan pengendalian terkait (berdasarkan risiko inheren)"
    ],
    "answer": 3,
    "explanation": "ISA315 para. 12(h).",
    "sourceAnchors": [
      "C-024"
    ]
  },
  {
    "id": "aka201-tm05-q06",
    "tm": 5,
    "topic": "Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "q": "Alasan siklus perolehan dan pelunasan modal dipisahkan dari siklus pembelian dan pembayaran adalah:",
    "options": [
      "Memakai jurnal yang berbeda",
      "Transaksinya terkait pendanaan, sedikit jumlahnya, tetapi masing-masing sering sangat material",
      "Tidak melibatkan kas",
      "Diatur oleh standar audit yang berbeda"
    ],
    "answer": 1,
    "explanation": "ARENS pp.101–102.",
    "sourceAnchors": [
      "C-006"
    ]
  },
  {
    "id": "aka201-tm05-q07",
    "tm": 5,
    "topic": "Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "q": "Auditor memutuskan tidak mengandalkan pengendalian klien dan hanya melakukan uji substantif. Pendekatan ini disebut:",
    "options": [
      "Substantive approach",
      "Combined approach",
      "Entity-level approach",
      "Cycle approach"
    ],
    "answer": 0,
    "explanation": "ARENS p.115.",
    "sourceAnchors": [
      "C-065"
    ]
  },
  {
    "id": "aka201-tm05-q08",
    "tm": 5,
    "topic": "Siklus, Asersi Manajemen, dan Gambaran Proses Audit",
    "q": "Menurut buku, asersi yang biasanya relevan untuk kas adalah:",
    "options": [
      "Valuation dan presentation",
      "Classification dan accuracy",
      "Existence dan cutoff",
      "Rights dan valuation"
    ],
    "answer": 2,
    "explanation": "ARENS pp.105–106.",
    "sourceAnchors": [
      "C-026"
    ]
  },
  {
    "id": "aka201-tm06-q01",
    "tm": 6,
    "topic": "Laporan Auditor dan Jenis Opini",
    "q": "Auditor menyimpulkan laporan keuangan mengandung salah saji yang material dan pervasif. Opini yang tepat:",
    "options": [
      "Wajar dengan pengecualian",
      "Tidak menyatakan pendapat",
      "Tidak wajar",
      "Tanpa modifikasian dengan paragraf penekanan suatu hal"
    ],
    "answer": 2,
    "explanation": "ISA705 para. 8.",
    "sourceAnchors": [
      "C-052"
    ]
  },
  {
    "id": "aka201-tm06-q02",
    "tm": 6,
    "topic": "Laporan Auditor dan Jenis Opini",
    "q": "Terdapat ketidakpastian material terkait kelangsungan usaha dan manajemen mengungkapkannya secara memadai. Pelaporan yang tepat:",
    "options": [
      "Opini tidak wajar",
      "Opini tanpa modifikasian dengan bagian Material Uncertainty Related to Going Concern",
      "Opini wajar dengan pengecualian",
      "Opini tidak menyatakan pendapat"
    ],
    "answer": 1,
    "explanation": "ARENS p.628.",
    "sourceAnchors": [
      "C-020"
    ]
  },
  {
    "id": "aka201-tm06-q03",
    "tm": 6,
    "topic": "Laporan Auditor dan Jenis Opini",
    "q": "Paragraf yang merujuk hal yang sudah diungkapkan dengan tepat dalam laporan keuangan tetapi fundamental bagi pemahaman pengguna adalah:",
    "options": [
      "Paragraf Penekanan Suatu Hal",
      "Paragraf Hal Lain",
      "Key Audit Matters",
      "Basis for Qualified Opinion"
    ],
    "answer": 0,
    "explanation": "ISA706 para. 7(a).",
    "sourceAnchors": [
      "C-040"
    ]
  },
  {
    "id": "aka201-tm06-q04",
    "tm": 6,
    "topic": "Laporan Auditor dan Jenis Opini",
    "q": "Pernyataan yang BENAR tentang Key Audit Matters:",
    "options": [
      "KAM dapat menggantikan opini wajar dengan pengecualian bila salah sajinya dijelaskan",
      "KAM merupakan opini terpisah atas setiap hal",
      "KAM dipilih dari seluruh transaksi klien secara acak",
      "KAM bukan pengganti pengungkapan manajemen maupun opini modifikasian"
    ],
    "answer": 3,
    "explanation": "ISA701 para. 4.",
    "sourceAnchors": [
      "C-034"
    ]
  },
  {
    "id": "aka201-tm06-q05",
    "tm": 6,
    "topic": "Laporan Auditor dan Jenis Opini",
    "q": "Setelah perikatan diterima, manajemen melarang auditor mengirim konfirmasi piutang. Langkah pertama yang diwajibkan ISA 705 adalah:",
    "options": [
      "Langsung menerbitkan opini tidak menyatakan pendapat",
      "Meminta manajemen mencabut pembatasan tersebut",
      "Mengundurkan diri tanpa pemberitahuan",
      "Mengabaikan piutang dalam audit"
    ],
    "answer": 1,
    "explanation": "ISA705 para. 11.",
    "sourceAnchors": [
      "C-064"
    ]
  },
  {
    "id": "aka201-tm06-q06",
    "tm": 6,
    "topic": "Laporan Auditor dan Jenis Opini",
    "q": "Perbedaan utama opini tidak wajar dan opini tidak menyatakan pendapat adalah:",
    "options": [
      "Opini tidak wajar hanya untuk entitas nirlaba",
      "Opini tidak menyatakan pendapat tidak memerlukan komunikasi dengan TCWG",
      "Opini tidak wajar diberikan bila dampaknya tidak material",
      "Opini tidak wajar berarti auditor tahu laporan salah saji pervasif; tidak menyatakan pendapat berarti auditor tidak memiliki cukup bukti"
    ],
    "answer": 3,
    "explanation": "ARENS p.641.",
    "sourceAnchors": [
      "C-072"
    ]
  },
  {
    "id": "aka201-tm06-q07",
    "tm": 6,
    "topic": "Laporan Auditor dan Jenis Opini",
    "q": "Tanggal laporan auditor ditetapkan:",
    "options": [
      "Pada tanggal neraca",
      "Pada tanggal auditor mulai fieldwork",
      "Setelah dewan menyetujui laporan keuangan, dan menjadi batas tanggung jawab auditor menelaah peristiwa kemudian",
      "Pada tanggal laporan diterbitkan ke bursa"
    ],
    "answer": 2,
    "explanation": "ARENS p.628.",
    "sourceAnchors": [
      "C-015"
    ]
  },
  {
    "id": "aka201-tm06-q08",
    "tm": 6,
    "topic": "Laporan Auditor dan Jenis Opini",
    "q": "Menurut ISA 705, dampak salah saji disebut pervasif antara lain jika:",
    "options": [
      "Tidak terbatas pada unsur, akun, atau pos tertentu laporan keuangan",
      "Jumlahnya di atas materialitas pelaksanaan",
      "Salah sajinya disebabkan fraud",
      "Klien adalah entitas tercatat"
    ],
    "answer": 0,
    "explanation": "ISA705 para. 5(a).",
    "sourceAnchors": [
      "C-051"
    ]
  },
  {
    "id": "aka201-tm07-q01",
    "tm": 7,
    "topic": "Materialitas Perencanaan dan Pelaksanaan",
    "q": "Fungsi utama materialitas pelaksanaan adalah:",
    "options": [
      "Menentukan jenis opini auditor",
      "Menggantikan materialitas keseluruhan saat evaluasi akhir",
      "Menurunkan aggregation risk dan memberi penyangga atas salah saji yang tidak terdeteksi",
      "Menentukan fee audit"
    ],
    "answer": 2,
    "explanation": "ISA320 para. 9(a); ARENS p.204.",
    "sourceAnchors": [
      "C-050",
      "C-051"
    ]
  },
  {
    "id": "aka201-tm07-q02",
    "tm": 7,
    "topic": "Materialitas Perencanaan dan Pelaksanaan",
    "q": "Tolok ukur materialitas yang paling umum untuk entitas yang terutama dibiayai utang menurut buku adalah:",
    "options": [
      "Total aset",
      "Laba sebelum pajak",
      "Total beban",
      "Ekuitas pemegang saham"
    ],
    "answer": 0,
    "explanation": "ARENS Table 6-6.",
    "sourceAnchors": [
      "C-014"
    ]
  },
  {
    "id": "aka201-tm07-q03",
    "tm": 7,
    "topic": "Materialitas Perencanaan dan Pelaksanaan",
    "q": "EBITA sebuah perusahaan 8.822 ribu dan auditor memilih 5 persen. Materialitas keseluruhan kira-kira:",
    "options": [
      "265.000",
      "331.000",
      "618.000",
      "441.000"
    ],
    "answer": 3,
    "explanation": "5% × 8.822 ribu = 441.100, dibulatkan 441.000 (contoh Hillsburg).",
    "sourceAnchors": [
      "C-016",
      "C-031"
    ]
  },
  {
    "id": "aka201-tm07-q04",
    "tm": 7,
    "topic": "Materialitas Perencanaan dan Pelaksanaan",
    "q": "Perikatan tahun pertama dengan lingkungan pengendalian yang lemah paling tepat menggunakan materialitas pelaksanaan sekitar:",
    "options": [
      "90 persen dari materialitas keseluruhan",
      "50 persen dari materialitas keseluruhan",
      "100 persen dari materialitas keseluruhan",
      "150 persen dari materialitas keseluruhan"
    ],
    "answer": 1,
    "explanation": "risiko tinggi mengarah ke ujung bawah rentang 50–75 persen (ARENS p.207).",
    "sourceAnchors": [
      "C-054",
      "C-056"
    ]
  },
  {
    "id": "aka201-tm07-q05",
    "tm": 7,
    "topic": "Materialitas Perencanaan dan Pelaksanaan",
    "q": "Salah saji di bawah materialitas keseluruhan tetap dapat dianggap material jika:",
    "options": [
      "Ditemukan pada akhir fieldwork",
      "Mengubah laba menjadi rugi",
      "Dicatat di jurnal umum",
      "Ditemukan oleh staff accountant"
    ],
    "answer": 1,
    "explanation": "ARENS Table 6-8.",
    "sourceAnchors": [
      "C-071"
    ]
  },
  {
    "id": "aka201-tm07-q06",
    "tm": 7,
    "topic": "Materialitas Perencanaan dan Pelaksanaan",
    "q": "Pernyataan yang BENAR tentang salah saji yang jelas trivial:",
    "options": [
      "Sama artinya dengan salah saji yang tidak material",
      "Harus selalu dikoreksi oleh manajemen",
      "Ditetapkan oleh regulator untuk semua KAP",
      "Salah saji di bawah ambang ini tidak perlu diakumulasi, tetapi \"trivial\" tidak sama dengan \"tidak material\""
    ],
    "answer": 3,
    "explanation": "ARENS pp.208–209.",
    "sourceAnchors": [
      "C-041"
    ]
  },
  {
    "id": "aka201-tm07-q07",
    "tm": 7,
    "topic": "Materialitas Perencanaan dan Pelaksanaan",
    "q": "Auditor menetapkan tingkat materialitas lebih rendah khusus untuk kompensasi eksekutif karena pemegang saham sangat sensitif. Ini disebut:",
    "options": [
      "Materialitas spesifik",
      "Materialitas pelaksanaan",
      "Ambang trivial",
      "Materialitas keseluruhan"
    ],
    "answer": 0,
    "explanation": "ARENS p.208; ISA320 para. 10.",
    "sourceAnchors": [
      "C-060"
    ]
  },
  {
    "id": "aka201-tm07-q08",
    "tm": 7,
    "topic": "Materialitas Perencanaan dan Pelaksanaan",
    "q": "Salah saji yang merupakan estimasi auditor untuk seluruh populasi berdasarkan hasil sampel disebut:",
    "options": [
      "Factual misstatement",
      "Judgmental misstatement",
      "Projected misstatement",
      "Trivial misstatement"
    ],
    "answer": 2,
    "explanation": "ARENS p.209.",
    "sourceAnchors": [
      "C-070"
    ]
  }
];

export const AKA201_QUIZ_UAS: QuizQuestion[] = [
  {
    "id": "aka201-tm09-q01",
    "tm": 9,
    "topic": "Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "difficulty": "basic",
    "q": "Apa fungsi overall audit strategy (strategi audit menyeluruh)?",
    "options": [
      "Menetapkan seluruh langkah rinci pengujian piutang",
      "Menetapkan hasil konfirmasi sebelum pelaksanaan audit",
      "Menetapkan cakupan, waktu, dan arah audit",
      "Menetapkan tanggung jawab penyusunan laporan klien"
    ],
    "answer": 2,
    "explanation": "Overall audit strategy menetapkan cakupan, waktu, dan arah audit serta menjadi pegangan audit plan, yaitu rencana audit. Rujukan 04 TM09: C-020 (ARENS p.185; ISA300 para. 7).",
    "sourceRef": "Rujukan 04 TM09: C-020 (ARENS p.185; ISA300 para. 7).",
    "sourceAnchors": [
      "C-020"
    ]
  },
  {
    "id": "aka201-tm09-q02",
    "tm": 9,
    "topic": "Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "difficulty": "basic",
    "q": "Komponen mana yang termasuk audit plan (rencana audit)?",
    "options": [
      "Sifat, waktu, luas prosedur penilaian risiko",
      "Sifat, waktu, luas strategi pemasaran klien",
      "Sifat, waktu, luas target penjualan klien",
      "Sifat, waktu, luas produksi persediaan klien"
    ],
    "answer": 0,
    "explanation": "Audit plan merinci nature, timing, extent, yaitu sifat, waktu, dan luas prosedur penilaian risiko, prosedur tambahan terkait asersi, serta prosedur lain untuk memenuhi standar. Rujukan 04 TM09: C-023 (ARENS p.177; ISA300 paras. 9, A15).",
    "sourceRef": "Rujukan 04 TM09: C-023 (ARENS p.177; ISA300 paras. 9, A15).",
    "sourceAnchors": [
      "C-023"
    ]
  },
  {
    "id": "aka201-tm09-q03",
    "tm": 9,
    "topic": "Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "difficulty": "basic",
    "q": "Dalam perencanaan, apa arti engagement risk (risiko perikatan)?",
    "options": [
      "Risiko entitas gagal mencapai tujuan bisnis",
      "Risiko yang mau ditanggung firma audit",
      "Risiko laporan salah saji sebelum diaudit",
      "Risiko prosedur gagal mendeteksi salah saji"
    ],
    "answer": 1,
    "explanation": "Engagement risk adalah tingkat risiko yang mau ditanggung firma saat menerima atau melanjutkan klien. Client business risk menyangkut tujuan entitas; risk of material misstatement menyangkut salah saji sebelum audit. Risiko kegagalan prosedur dijelaskan di TM12. Rujukan 04 TM09: C-010 (ARENS pp.176–177); C-011 (ARENS pp.176–177); C-012 (ARENS pp.176–177).",
    "sourceRef": "Rujukan 04 TM09: C-010 (ARENS pp.176–177); C-011 (ARENS pp.176–177); C-012 (ARENS pp.176–177).",
    "sourceAnchors": [
      "C-010",
      "C-011",
      "C-012"
    ]
  },
  {
    "id": "aka201-tm09-q04",
    "tm": 9,
    "topic": "Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "difficulty": "basic",
    "q": "Apa langkah auditor penerus sebelum menghubungi predecessor auditor (auditor pendahulu)?",
    "options": [
      "Memperoleh seluruh kertas kerja tanpa izin",
      "Meminta pendahulu menetapkan opini tahun berjalan",
      "Memperoleh izin klien untuk komunikasi tersebut",
      "Meminta manajemen menghapus perselisihan tahun lalu"
    ],
    "answer": 2,
    "explanation": "Predecessor auditor adalah auditor pendahulu. Penerus memulai komunikasi setelah izin klien karena kerahasiaan; penolakan izin atau jawaban tidak memadai menjadi alasan serius mempertimbangkan penolakan perikatan. Rujukan 04 TM09: C-035 (ARENS p.180).",
    "sourceRef": "Rujukan 04 TM09: C-035 (ARENS p.180).",
    "sourceAnchors": [
      "C-035"
    ]
  },
  {
    "id": "aka201-tm09-q05",
    "tm": 9,
    "topic": "Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "difficulty": "basic",
    "q": "Apa preconditions (syarat awal) audit menurut ISA 210?",
    "options": [
      "Kerangka diterima, auditor menyusun laporan keuangan",
      "Kerangka diterima, auditor menjamin ketiadaan fraud",
      "Kerangka diterima, manajemen menentukan opini auditor",
      "Kerangka diterima, manajemen mengakui tanggung jawabnya"
    ],
    "answer": 3,
    "explanation": "Preconditions mencakup kerangka pelaporan yang dapat diterima dan pengakuan manajemen atas tanggung jawab laporan, pengendalian internal, serta akses auditor. Catatan sumber: rumusan pengakuan mengikuti ISA 210. Rujukan 04 TM09: C-040 (ARENS p.181; ISA210 paras. 6, 10).",
    "sourceRef": "Rujukan 04 TM09: C-040 (ARENS p.181; ISA210 paras. 6, 10).",
    "sourceAnchors": [
      "C-040"
    ]
  },
  {
    "id": "aka201-tm09-q06",
    "tm": 9,
    "topic": "Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "difficulty": "basic",
    "q": "Saat memakai auditor expert (spesialis auditor), siapa memegang tanggung jawab audit?",
    "options": [
      "Auditor tetap memegang tanggung jawab audit",
      "Spesialis mengambil seluruh tanggung jawab audit",
      "Manajemen mengambil seluruh tanggung jawab audit",
      "Auditor internal mengambil tanggung jawab audit"
    ],
    "answer": 0,
    "explanation": "Auditor expert adalah spesialis dengan keahlian yang dibutuhkan auditor. Kualifikasi dan objektivitasnya dinilai; penggunaan spesialis tidak memindahkan tanggung jawab auditor. Rujukan 04 TM09: C-051 (ARENS p.187).",
    "sourceRef": "Rujukan 04 TM09: C-051 (ARENS p.187).",
    "sourceAnchors": [
      "C-051"
    ]
  },
  {
    "id": "aka201-tm09-q07",
    "tm": 9,
    "topic": "Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "difficulty": "medium",
    "q": "Apa tujuan risk assessment procedures (prosedur penilaian risiko)?",
    "options": [
      "Menetapkan opini tanpa menjalankan prosedur lanjutan",
      "Menilai risiko dan merancang prosedur lanjutan",
      "Menggantikan seluruh bukti pengujian tingkat asersi",
      "Membuktikan seluruh rasio janggal merupakan fraud"
    ],
    "answer": 1,
    "explanation": "Risk assessment procedures memberi dasar identifikasi dan penilaian risiko serta rancangan prosedur lanjutan. Inquiry, analitis, observasi dan inspeksi dipakai; hasilnya belum menjadi dasar opini. Rujukan 04 TM09: C-070 (ISA315 para. 13; ARENS p.192); C-071 (ISA315 para. 14; ARENS p.193).",
    "sourceRef": "Rujukan 04 TM09: C-070 (ISA315 para. 13; ARENS p.192); C-071 (ISA315 para. 14; ARENS p.193).",
    "sourceAnchors": [
      "C-070",
      "C-071"
    ]
  },
  {
    "id": "aka201-tm09-q08",
    "tm": 9,
    "topic": "Perencanaan Audit, Strategi Audit Menyeluruh & Pemahaman Bisnis Klien",
    "difficulty": "medium",
    "q": "Rasio aktivitas Hillsburg mengarahkan perhatian pada valuation (penilaian) akun mana?",
    "options": [
      "Kas bank dan modal saham biasa",
      "Utang usaha dan beban bunga pinjaman",
      "Aset tetap dan pendapatan penjualan aset",
      "Piutang usaha dan persediaan barang dagang"
    ],
    "answer": 3,
    "explanation": "Valuation adalah asersi penilaian saldo. Perputaran piutang dan persediaan Hillsburg di bawah industri; auditor menilai risiko tinggi pada kedua akun dan menambah upaya audit. Rujukan 04 TM09: C-082 (ARENS p.197, Table 6-5); C-083 (ARENS p.197).",
    "sourceRef": "Rujukan 04 TM09: C-082 (ARENS p.197, Table 6-5); C-083 (ARENS p.197).",
    "sourceAnchors": [
      "C-082",
      "C-083"
    ]
  },
  {
    "id": "aka201-tm10-q01",
    "tm": 10,
    "topic": "Bukti Audit dan Prosedur Analitis",
    "difficulty": "basic",
    "q": "Apa arti sufficiency (kecukupan) audit evidence?",
    "options": [
      "Kualitas bukti yang diperoleh oleh auditor",
      "Ketepatan waktu pelaksanaan seluruh prosedur auditor",
      "Kuantitas bukti yang diperoleh oleh auditor",
      "Hubungan logis prosedur dengan asersi tertentu"
    ],
    "answer": 2,
    "explanation": "Sufficiency menyangkut kuantitas bukti. Appropriateness adalah ketepatan kualitas berupa relevance (relevansi) dan reliability (keandalan). Rujukan 04 TM10: C-020 (ARENS pp.130, 133); C-025 (ARENS p.132; ISA500 para. A8).",
    "sourceRef": "Rujukan 04 TM10: C-020 (ARENS pp.130, 133); C-025 (ARENS p.132; ISA500 para. A8).",
    "sourceAnchors": [
      "C-020",
      "C-025"
    ]
  },
  {
    "id": "aka201-tm10-q02",
    "tm": 10,
    "topic": "Bukti Audit dan Prosedur Analitis",
    "difficulty": "basic",
    "q": "Untuk completeness (kelengkapan) penjualan, arah tracing yang relevan adalah?",
    "options": [
      "Dari dokumen pengiriman menuju faktur penjualan",
      "Dari faktur penjualan menuju dokumen pengiriman",
      "Dari jurnal penjualan menuju faktur penjualan",
      "Dari saldo piutang menuju faktur penjualan"
    ],
    "answer": 0,
    "explanation": "Tracing menelusuri dokumen sumber ke catatan untuk menguji completeness. Memulai dari faktur lalu ke pengiriman menguji occurrence (keterjadian). Rujukan 04 TM10: C-021 (ARENS p.130); C-034 (ARENS p.136).",
    "sourceRef": "Rujukan 04 TM10: C-021 (ARENS p.130); C-034 (ARENS p.136).",
    "sourceAnchors": [
      "C-021",
      "C-034"
    ]
  },
  {
    "id": "aka201-tm10-q03",
    "tm": 10,
    "topic": "Bukti Audit dan Prosedur Analitis",
    "difficulty": "basic",
    "q": "Apa yang langsung dibuktikan physical inspection (inspeksi fisik) aset berwujud?",
    "options": [
      "Valuation, yaitu ketepatan nilai aset berwujud",
      "Existence, yaitu keberadaan fisik aset berwujud",
      "Rights, yaitu kepemilikan hukum aset berwujud",
      "Completeness, yaitu kelengkapan pencatatan aset berwujud"
    ],
    "answer": 1,
    "explanation": "Physical inspection membuktikan existence, yaitu keberadaan fisik. Inspeksi fisik sendiri tidak membuktikan valuation (penilaian) atau rights (hak atas aset), misalnya barang konsinyasi. Rujukan 04 TM10: C-032 (ARENS p.135; ISA500 paras. A18, A20).",
    "sourceRef": "Rujukan 04 TM10: C-032 (ARENS p.135; ISA500 paras. A18, A20).",
    "sourceAnchors": [
      "C-032"
    ]
  },
  {
    "id": "aka201-tm10-q04",
    "tm": 10,
    "topic": "Bukti Audit dan Prosedur Analitis",
    "difficulty": "basic",
    "q": "Apa yang membedakan recalculation (penghitungan ulang) dari reperformance?",
    "options": [
      "Mengerjakan ulang pengendalian selain perhitungan matematis",
      "Meminta penjelasan manajemen tentang transaksi tertentu",
      "Memeriksa ulang ketepatan perhitungan matematis tertentu",
      "Mengamati pelaksanaan pengendalian pada saat tertentu"
    ],
    "answer": 2,
    "explanation": "Recalculation memeriksa ulang hitungan seperti harga dikali kuantitas atau footing (penjumlahan kolom). Reperformance mengerjakan ulang prosedur atau pengendalian selain hitungan. Rujukan 04 TM10: C-040 (ARENS pp.138, 142; ISA500 paras. A23, A24).",
    "sourceRef": "Rujukan 04 TM10: C-040 (ARENS pp.138, 142; ISA500 paras. A23, A24).",
    "sourceAnchors": [
      "C-040"
    ]
  },
  {
    "id": "aka201-tm10-q05",
    "tm": 10,
    "topic": "Bukti Audit dan Prosedur Analitis",
    "difficulty": "basic",
    "q": "Apa keterbatasan observation (observasi) sebagai bukti audit?",
    "options": [
      "Meliputi seluruh periode, perilaku pasti tetap",
      "Menjamin seluruh asersi, perilaku pasti benar",
      "Menghapus kebutuhan pengujian, perilaku selalu konsisten",
      "Terbatas saat diamati, perilaku bisa berubah"
    ],
    "answer": 3,
    "explanation": "Observation adalah pengamatan pelaksanaan proses. Bukti terbatas pada saat observasi; kehadiran auditor dapat mengubah perilaku sehingga observasi jarang cukup sendirian. Rujukan 04 TM10: C-036 (ARENS p.136; ISA500 para. A21).",
    "sourceRef": "Rujukan 04 TM10: C-036 (ARENS p.136; ISA500 para. A21).",
    "sourceAnchors": [
      "C-036"
    ]
  },
  {
    "id": "aka201-tm10-q06",
    "tm": 10,
    "topic": "Bukti Audit dan Prosedur Analitis",
    "difficulty": "basic",
    "q": "Setelah selisih signifikan ditemukan dalam substantive analytical procedures, apa langkah berikutnya?",
    "options": [
      "Menyelidiki selisih dengan bukti penguat penjelasan",
      "Menerima penjelasan lisan tanpa bukti penguat",
      "Mengubah ekspektasi agar sesuai angka tercatat",
      "Mengabaikan selisih karena analitis sudah selesai"
    ],
    "answer": 0,
    "explanation": "Substantive analytical procedures adalah prosedur analitis substantif. Selisih signifikan diselidiki; inquiry (permintaan keterangan) kepada manajemen saja tidak cukup. Rujukan 04 TM10: C-070 (ARENS p.148; ISA520 paras. 5, 7).",
    "sourceRef": "Rujukan 04 TM10: C-070 (ARENS p.148; ISA520 paras. 5, 7).",
    "sourceAnchors": [
      "C-070"
    ]
  },
  {
    "id": "aka201-tm10-q07",
    "tm": 10,
    "topic": "Bukti Audit dan Prosedur Analitis",
    "difficulty": "medium",
    "q": "Menurut koreksi canonical spec atas Figure 5-2, berapa total interest expectation Hillsburg?",
    "options": [
      "2.408.326, dengan selisih terhadap buku besar 316",
      "2.406.326, dengan selisih terhadap buku besar 2.316",
      "2.408.642, dengan selisih terhadap buku besar nol",
      "2.152.200, dengan selisih terhadap buku besar 256.442"
    ],
    "answer": 1,
    "explanation": "Interest expectation (ekspektasi beban bunga) adalah 254.126 ditambah 2.152.200, menjadi 2.406.326. Buku besar 2.408.642 memberi selisih 2.316. Catatan sumber: teks buku salah ketik 2.408.326. Rujukan 04 TM10: C-072 (ARENS pp.148–149).",
    "sourceRef": "Rujukan 04 TM10: C-072 (ARENS pp.148–149).",
    "sourceAnchors": [
      "C-072"
    ]
  },
  {
    "id": "aka201-tm10-q08",
    "tm": 10,
    "topic": "Bukti Audit dan Prosedur Analitis",
    "difficulty": "medium",
    "q": "Apa arti false positive pada audit data analytics (ADA)?",
    "options": [
      "Item ditandai dengan salah saji terbukti",
      "Item terlewat dengan salah saji terbukti",
      "Item terlewat karena data belum diakses",
      "Item ditandai tetapi tanpa masalah nyata"
    ],
    "answer": 3,
    "explanation": "False positive adalah item ditandai alat tetapi tidak mencerminkan risiko atau masalah nyata. Pengecualian ADA harus ditafsirkan dan ditindaklanjuti. Rujukan 04 TM10: C-082 (ARENS p.153).",
    "sourceRef": "Rujukan 04 TM10: C-082 (ARENS p.153).",
    "sourceAnchors": [
      "C-082"
    ]
  },
  {
    "id": "aka201-tm11-q01",
    "tm": 11,
    "topic": "Dokumentasi Audit dan Kertas Kerja",
    "difficulty": "basic",
    "q": "Menurut ISA 230, siapa pembaca tolok ukur audit documentation (dokumentasi audit)?",
    "options": [
      "Auditor penyusun dengan keterlibatan sebelumnya dalam audit",
      "Manajemen klien dengan keterlibatan penyusunan laporan keuangan",
      "Auditor berpengalaman tanpa keterkaitan sebelumnya dengan audit",
      "Staf klien dengan keterlibatan pemrosesan transaksi harian"
    ],
    "answer": 2,
    "explanation": "Dokumentasi harus memungkinkan experienced auditor (auditor berpengalaman) tanpa keterkaitan sebelumnya memahami prosedur, hasil, bukti, hal signifikan, kesimpulan, serta pertimbangan profesional. Rujukan 04 TM11: C-005 (ISA230 paras. 8, 6(c)).",
    "sourceRef": "Rujukan 04 TM11: C-005 (ISA230 paras. 8, 6(c)).",
    "sourceAnchors": [
      "C-005"
    ]
  },
  {
    "id": "aka201-tm11-q02",
    "tm": 11,
    "topic": "Dokumentasi Audit dan Kertas Kerja",
    "difficulty": "basic",
    "q": "Apa peran oral explanation (penjelasan lisan) terhadap dokumentasi audit?",
    "options": [
      "Menjernihkan dokumentasi, sendiri belum menjadi dukungan memadai",
      "Menggantikan dokumentasi, sendiri selalu menjadi dukungan memadai",
      "Menghapus dokumentasi, sendiri selalu menjadi bukti tertulis",
      "Menunda dokumentasi, sendiri selalu menjamin akurasi catatan"
    ],
    "answer": 0,
    "explanation": "Oral explanation dapat menjernihkan isi dokumentasi. Penjelasan lisan saja belum mendukung pekerjaan dan kesimpulan auditor secara memadai; dokumentasi disusun tepat waktu. Rujukan 04 TM11: C-007 (ISA230 para. 7, A1, A4, A5, A7).",
    "sourceRef": "Rujukan 04 TM11: C-007 (ISA230 para. 7, A1, A4, A5, A7).",
    "sourceAnchors": [
      "C-007"
    ]
  },
  {
    "id": "aka201-tm11-q03",
    "tm": 11,
    "topic": "Dokumentasi Audit dan Kertas Kerja",
    "difficulty": "basic",
    "q": "Dokumen mana lazim masuk permanent file (berkas permanen)?",
    "options": [
      "Program audit dan memorandum strategi tahunan",
      "Akta pendirian dan perjanjian obligasi klien",
      "Ringkasan selisih dan analitis akhir tahunan",
      "Kertas penyelesaian dan hasil pengujian tahunan"
    ],
    "answer": 1,
    "explanation": "Permanent file memuat informasi berkelanjutan seperti akta pendirian dan perjanjian obligasi. Current file memuat dokumentasi tahun audit termasuk perencanaan, respons risiko, dan penyelesaian. Rujukan 04 TM11: C-021 (ARENS p.157, Table 5-8).",
    "sourceRef": "Rujukan 04 TM11: C-021 (ARENS p.157, Table 5-8).",
    "sourceAnchors": [
      "C-021"
    ]
  },
  {
    "id": "aka201-tm11-q04",
    "tm": 11,
    "topic": "Dokumentasi Audit dan Kertas Kerja",
    "difficulty": "basic",
    "q": "Apa fungsi lead schedule (skedul utama)?",
    "options": [
      "Menggantikan seluruh catatan transaksi pada buku klien",
      "Menghapus seluruh kebutuhan referensi silang kertas kerja",
      "Merinci akun pembentuk total working trial balance",
      "Menetapkan seluruh opini sebelum bukti audit terkumpul"
    ],
    "answer": 2,
    "explanation": "Lead schedule merinci akun buku besar yang membentuk total suatu pos pada working trial balance (neraca saldo kerja). Rujukan 04 TM11: C-031 (ARENS p.158).",
    "sourceRef": "Rujukan 04 TM11: C-031 (ARENS p.158).",
    "sourceAnchors": [
      "C-031"
    ]
  },
  {
    "id": "aka201-tm11-q05",
    "tm": 11,
    "topic": "Dokumentasi Audit dan Kertas Kerja",
    "difficulty": "basic",
    "q": "Pada kertas kerja C-1, apa arti tick mark @?",
    "options": [
      "Wesel dikonfirmasi positif oleh auditor pada skedul",
      "Wesel diinspeksi fisik oleh auditor pada skedul",
      "Saldo ditelusuri auditor ke neraca saldo kerja",
      "Bunga dihitung ulang oleh auditor pada skedul"
    ],
    "answer": 3,
    "explanation": "Tick mark adalah tanda pekerjaan yang harus dijelaskan. Pada C-1, @ berarti bunga dihitung ulang; p berarti konfirmasi positif, x inspeksi dokumen wesel, dan t/b penelusuran ke trial balance. Rujukan 04 TM11: C-033 (ARENS p.159).",
    "sourceRef": "Rujukan 04 TM11: C-033 (ARENS p.159).",
    "sourceAnchors": [
      "C-033"
    ]
  },
  {
    "id": "aka201-tm11-q06",
    "tm": 11,
    "topic": "Dokumentasi Audit dan Kertas Kerja",
    "difficulty": "basic",
    "q": "Bagaimana ISA 230 A21 menyatakan batas final file assembly (perakitan berkas akhir)?",
    "options": [
      "Umumnya tidak lebih dari enam puluh hari",
      "Umumnya tidak kurang dari enam puluh hari",
      "Selalu tepat enam puluh hari tanpa pengecualian",
      "Selalu selesai sebelum tanggal laporan auditor diterbitkan"
    ],
    "answer": 0,
    "explanation": "Final file assembly adalah perakitan berkas audit akhir. Catatan sumber: ISA 230 A21 menyatakan batas yang sesuai umumnya tidak lebih dari 60 hari; buku menyebut 60 hari setelah tanggal laporan auditor. Rujukan 04 TM11: C-040 (ARENS pp.156–157; ISA230 para. A21).",
    "sourceRef": "Rujukan 04 TM11: C-040 (ARENS pp.156–157; ISA230 para. A21).",
    "sourceAnchors": [
      "C-040"
    ]
  },
  {
    "id": "aka201-tm11-q07",
    "tm": 11,
    "topic": "Dokumentasi Audit dan Kertas Kerja",
    "difficulty": "medium",
    "q": "Mana contoh administrative assembly (perakitan administratif) yang diperbolehkan setelah laporan?",
    "options": [
      "Melaksanakan prosedur baru tanpa mencatat alasan perubahan",
      "Mengurutkan dokumen dan melengkapi referensi silang berkas",
      "Membuat kesimpulan baru tanpa menilai dampak laporan",
      "Menghapus bukti final sebelum berakhirnya masa retensi"
    ],
    "answer": 1,
    "explanation": "Administrative assembly dapat merapikan, mengurutkan, dan melengkapi cross-reference (referensi silang). Prosedur atau kesimpulan baru memerlukan dokumentasi substantif sesuai ISA 230; dokumen tidak dihapus sebelum masa retensi berakhir. Rujukan 04 TM11: C-041 (ISA230 paras. 13–16, A20–A24).",
    "sourceRef": "Rujukan 04 TM11: C-041 (ISA230 paras. 13–16, A20–A24).",
    "sourceAnchors": [
      "C-041"
    ]
  },
  {
    "id": "aka201-tm11-q08",
    "tm": 11,
    "topic": "Dokumentasi Audit dan Kertas Kerja",
    "difficulty": "medium",
    "q": "Apa yang mendorong professional skepticism (skeptisisme profesional) lebih tinggi?",
    "options": [
      "Bukti selalu konsisten dan transaksi yang rutin",
      "Risiko dinilai rendah tanpa indikator fraud teridentifikasi",
      "Transaksi selalu rutin tanpa kesalahan yang ditemukan",
      "Bukti tidak konsisten dan pertimbangan yang kompleks"
    ],
    "answer": 3,
    "explanation": "Professional skepticism disesuaikan dengan risiko. Bukti tidak konsisten, pertimbangan kompleks, indikator fraud, dan kesalahan meningkatkan kebutuhan bukti serta dokumentasi. Cara evaluasi bukti dan pertimbangannya dicatat. Rujukan 04 TM11: C-051 (ARENS pp.160–161, Figure 5-5); C-052 (ISA230 para. A7).",
    "sourceRef": "Rujukan 04 TM11: C-051 (ARENS pp.160–161, Figure 5-5); C-052 (ISA230 para. A7).",
    "sourceAnchors": [
      "C-051",
      "C-052"
    ]
  },
  {
    "id": "aka201-tm12-q01",
    "tm": 12,
    "topic": "Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "difficulty": "basic",
    "q": "Komponen audit risk (risiko audit) mana yang dikendalikan auditor?",
    "options": [
      "Inherent risk melalui pengendalian yang dirancang auditor",
      "Control risk melalui pencatatan yang dilakukan auditor",
      "Detection risk melalui prosedur yang dirancang auditor",
      "Business risk melalui penjualan yang dilakukan auditor"
    ],
    "answer": 2,
    "explanation": "Detection risk adalah risiko prosedur auditor tidak mendeteksi salah saji. Inherent risk (kerentanan sebelum pengendalian) dan control risk (risiko kegagalan pengendalian) milik klien dan ada tanpa audit. Rujukan 04 TM12: C-001 (ARENS p.223; ISA200 para. 13(c)); C-004 (ARENS p.225; ISA200 para. 13(e), 13(n)).",
    "sourceRef": "Rujukan 04 TM12: C-001 (ARENS p.223; ISA200 para. 13(c)); C-004 (ARENS p.225; ISA200 para. 13(e), 13(n)).",
    "sourceAnchors": [
      "C-001",
      "C-004"
    ]
  },
  {
    "id": "aka201-tm12-q02",
    "tm": 12,
    "topic": "Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "difficulty": "basic",
    "q": "Dengan audit risk yang dituju tetap, apa akibat RMM meningkat?",
    "options": [
      "Detection risk turun, bukti perlu lebih meyakinkan",
      "Detection risk naik, bukti perlu lebih sedikit",
      "Inherent risk turun, pengujian substantif selalu dihapus",
      "Control risk turun, pengujian pengendalian selalu dihapus"
    ],
    "answer": 0,
    "explanation": "RMM adalah risk of material misstatement, yaitu risiko salah saji material. Hubungannya terbalik dengan detection risk; kenaikan RMM menuntut risiko deteksi lebih rendah dan bukti lebih meyakinkan. Model bersifat konseptual. Rujukan 04 TM12: C-005 (ARENS p.225; ISA200 para. A44); C-006 (ARENS pp.225–226).",
    "sourceRef": "Rujukan 04 TM12: C-005 (ARENS p.225; ISA200 para. A44); C-006 (ARENS pp.225–226).",
    "sourceAnchors": [
      "C-005",
      "C-006"
    ]
  },
  {
    "id": "aka201-tm12-q03",
    "tm": 12,
    "topic": "Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "difficulty": "basic",
    "q": "Apa penilaian control risk bila auditor tidak merencanakan tests of controls?",
    "options": [
      "RMM dinilai sama dengan tingkat detection risk",
      "RMM dinilai sama dengan tingkat inherent risk",
      "RMM dinilai nol karena kontrol belum diuji",
      "RMM dinilai rendah karena audit belum selesai"
    ],
    "answer": 1,
    "explanation": "Tests of controls adalah pengujian pengendalian. Tanpa rencana pengujian, ISA 315 para. 34 membuat penilaian control risk menghasilkan RMM sama dengan inherent risk. Rujukan 04 TM12: C-007 (ISA315 para. 34).",
    "sourceRef": "Rujukan 04 TM12: C-007 (ISA315 para. 34).",
    "sourceAnchors": [
      "C-007"
    ]
  },
  {
    "id": "aka201-tm12-q04",
    "tm": 12,
    "topic": "Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "difficulty": "basic",
    "q": "Kapan relevant assertion (asersi relevan) ditentukan?",
    "options": [
      "Setelah seluruh pengendalian terbukti efektif sepanjang periode",
      "Setelah seluruh prosedur substantif selesai tanpa pengecualian",
      "Sebelum mempertimbangkan pengendalian atas risiko salah saji",
      "Sebelum memahami entitas dan kerangka pelaporan keuangan"
    ],
    "answer": 2,
    "explanation": "Relevant assertion memiliki risiko salah saji yang teridentifikasi dan ditentukan sebelum mempertimbangkan pengendalian. Rujukan 04 TM12: C-010 (ARENS p.226; ISA315 para. 12(h), A9).",
    "sourceRef": "Rujukan 04 TM12: C-010 (ARENS p.226; ISA315 para. 12(h), A9).",
    "sourceAnchors": [
      "C-010"
    ]
  },
  {
    "id": "aka201-tm12-q05",
    "tm": 12,
    "topic": "Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "difficulty": "basic",
    "q": "Mengapa kas swalayan dengan likelihood tinggi belum tentu significant risk?",
    "options": [
      "Magnitude selalu tinggi sehingga kombinasi pasti signifikan",
      "Likelihood menggantikan magnitude sehingga saldo selalu signifikan",
      "Likelihood selalu nol sehingga kas bebas risiko",
      "Magnitude sangat rendah sehingga kombinasi belum signifikan"
    ],
    "answer": 3,
    "explanation": "Significant risk adalah risiko signifikan. Likelihood (kemungkinan) dan magnitude (besarnya dampak) dinilai bersama; ISA 315 A220 memberi contoh kas dengan kemungkinan tinggi namun dampak sangat rendah. Rujukan 04 TM12: C-032 (ISA315 paras. 31, A208–A214; ARENS p.232 (Figure 7-5)); C-034 (ISA315 para. A220).",
    "sourceRef": "Rujukan 04 TM12: C-032 (ISA315 paras. 31, A208–A214; ARENS p.232 (Figure 7-5)); C-034 (ISA315 para. A220).",
    "sourceAnchors": [
      "C-032",
      "C-034"
    ]
  },
  {
    "id": "aka201-tm12-q06",
    "tm": 12,
    "topic": "Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "difficulty": "basic",
    "q": "Bagaimana presumsi fraud atas revenue recognition (pengakuan pendapatan) diperlakukan?",
    "options": [
      "Nilai risiko; jika presumsi dibantah, dokumentasikan alasan",
      "Abaikan risiko; jika presumsi dibantah, hapus dokumentasi",
      "Tetapkan fraud; jika pendapatan naik, nyatakan terbukti",
      "Hapus risiko; jika manajemen jujur, hentikan pengujian"
    ],
    "answer": 0,
    "explanation": "Revenue recognition dipresumsikan berisiko fraud. Risiko fraud yang dinilai diperlakukan signifikan; bila presumsi tidak berlaku, alasannya didokumentasikan. Presumsi belum membuktikan fraud. Rujukan 04 TM12: C-036 (ARENS p.234; ISA550 para. 18; ISA240 paras. 27, 28, 48).",
    "sourceRef": "Rujukan 04 TM12: C-036 (ARENS p.234; ISA550 para. 18; ISA240 paras. 27, 28, 48).",
    "sourceAnchors": [
      "C-036"
    ]
  },
  {
    "id": "aka201-tm12-q07",
    "tm": 12,
    "topic": "Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "difficulty": "medium",
    "q": "Apa tiga sisi fraud triangle (segitiga kecurangan)?",
    "options": [
      "Insentif atau tekanan, peluang, penghitungan atau konfirmasi",
      "Insentif atau tekanan, peluang, sikap atau rasionalisasi",
      "Insentif atau tekanan, observasi, klasifikasi atau penyajian",
      "Insentif atau tekanan, dokumentasi, penilaian atau alokasi"
    ],
    "answer": 1,
    "explanation": "Fraud triangle memuat insentif atau tekanan, peluang, sikap atau rasionalisasi. Fraud risk factors atau tanda risiko belum membuktikan fraud. Rujukan 04 TM12: C-057 (ARENS pp.238–239; ISA240 paras. 12(b), 25); C-058 (ARENS p.240); C-059 (ARENS pp.239–240).",
    "sourceRef": "Rujukan 04 TM12: C-057 (ARENS pp.238–239; ISA240 paras. 12(b), 25); C-058 (ARENS p.240); C-059 (ARENS pp.239–240).",
    "sourceAnchors": [
      "C-057",
      "C-058",
      "C-059"
    ]
  },
  {
    "id": "aka201-tm12-q08",
    "tm": 12,
    "topic": "Model Risiko Audit, Penilaian Risiko & Risiko Kecurangan",
    "difficulty": "medium",
    "q": "Apa tiga prosedur wajib untuk management override (pengabaian pengendalian oleh manajemen)?",
    "options": [
      "Uji jurnal, review biaya audit, evaluasi anggaran pemasaran tahunan",
      "Uji jurnal, review seluruh pajak, evaluasi strategi produksi tahunan",
      "Uji jurnal, review harga saham, evaluasi keputusan dividen tahunan",
      "Uji jurnal, review bias estimasi, evaluasi transaksi tidak biasa"
    ],
    "answer": 3,
    "explanation": "Management override ada pada semua entitas sebagai risiko signifikan. Auditor menguji jurnal dan penyesuaian, menilai bias estimasi termasuk retrospective review (review retrospektif), dan mengevaluasi rasional bisnis transaksi tidak biasa. Rujukan 04 TM12: C-063 (ISA240 paras. 32–33; ARENS pp.242–244).",
    "sourceRef": "Rujukan 04 TM12: C-063 (ISA240 paras. 32–33; ARENS pp.242–244).",
    "sourceAnchors": [
      "C-063"
    ]
  },
  {
    "id": "aka201-tm13-q01",
    "tm": 13,
    "topic": "Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "difficulty": "basic",
    "q": "Apa yang dibuktikan design evaluation dan implementation pengendalian?",
    "options": [
      "Operasi selalu efektif selama seluruh periode audit",
      "Semua asersi benar selama seluruh periode audit",
      "Rancangan memadai dan pengendalian benar diterapkan entitas",
      "Semua fraud tercegah selama seluruh periode audit"
    ],
    "answer": 2,
    "explanation": "Design evaluation menilai rancangan; implementation menentukan pengendalian benar diterapkan. Keduanya berbeda dari operating effectiveness, yaitu efektivitas operasi sepanjang periode. Rujukan 04 TM13: C-002 (ISA315 paras. 26(a), A162, A163, A180); C-057 (ISA315 paras. 26(a), 26(d), A175–A177, A180; ISA330).",
    "sourceRef": "Rujukan 04 TM13: C-002 (ISA315 paras. 26(a), A162, A163, A180); C-057 (ISA315 paras. 26(a), 26(d), A175–A177, A180; ISA330).",
    "sourceAnchors": [
      "C-002",
      "C-057"
    ]
  },
  {
    "id": "aka201-tm13-q02",
    "tm": 13,
    "topic": "Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "difficulty": "basic",
    "q": "Menurut ISA 315 dan COSO 2013, apa tiga tujuan internal control?",
    "options": [
      "Pelaporan, operasi, kepatuhan sebagai kategori tujuan pengendalian",
      "Pelaporan, operasi, strategi sebagai kategori tujuan pengendalian",
      "Pelaporan, strategi, pemasaran sebagai kategori tujuan pengendalian",
      "Pelaporan, kepatuhan, pemasaran sebagai kategori tujuan pengendalian"
    ],
    "answer": 0,
    "explanation": "Internal control adalah pengendalian internal. Catatan sumber: ISA 315 dan COSO 2013 memakai pelaporan, operasi, kepatuhan; buku mencantumkan strategic sebagai tujuan keempat. Rujukan 04 TM13: C-003 (ARENS pp.256–258; ISA315 para. 12(m); COSO13).",
    "sourceRef": "Rujukan 04 TM13: C-003 (ARENS pp.256–258; ISA315 para. 12(m); COSO13).",
    "sourceAnchors": [
      "C-003"
    ]
  },
  {
    "id": "aka201-tm13-q03",
    "tm": 13,
    "topic": "Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "difficulty": "basic",
    "q": "Apa inherent limitations (batas bawaan) pengendalian internal?",
    "options": [
      "Kesalahan manusia, inspeksi auditor, konfirmasi, pertimbangan biaya-manfaat",
      "Kesalahan manusia, override manajemen, kolusi, pertimbangan biaya-manfaat",
      "Kesalahan manusia, pencatatan otomatis, dokumentasi, pertimbangan biaya-manfaat",
      "Kesalahan manusia, rekonsiliasi rutin, otorisasi, pertimbangan biaya-manfaat"
    ],
    "answer": 1,
    "explanation": "Inherent limitations mencakup kesalahan manusia, management override (pengabaian pengendalian oleh manajemen), collusion (kolusi), dan biaya-manfaat. Pengendalian memberi keyakinan memadai. Rujukan 04 TM13: C-008 (ARENS pp.257–258; ISA315 App.3 paras. 22–24).",
    "sourceRef": "Rujukan 04 TM13: C-008 (ARENS pp.257–258; ISA315 App.3 paras. 22–24).",
    "sourceAnchors": [
      "C-008"
    ]
  },
  {
    "id": "aka201-tm13-q04",
    "tm": 13,
    "topic": "Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "difficulty": "basic",
    "q": "Dalam penomoran COSO 2013, prinsip control activities (aktivitas pengendalian) bernomor?",
    "options": [
      "15 sampai 17 dalam dokumen COSO 2013",
      "13 sampai 15 dalam dokumen COSO 2013",
      "10 sampai 12 dalam dokumen COSO 2013",
      "16 sampai 17 dalam dokumen COSO 2013"
    ],
    "answer": 2,
    "explanation": "Control activities adalah aktivitas pengendalian. Catatan sumber: COSO 2013 menomori 10-12; Table 8-1 buku menomori aktivitas 15-17. Nomor sumber tidak disatukan. Rujukan 04 TM13: C-011 (ARENS p.261; COSO13).",
    "sourceRef": "Rujukan 04 TM13: C-011 (ARENS p.261; COSO13).",
    "sourceAnchors": [
      "C-011"
    ]
  },
  {
    "id": "aka201-tm13-q05",
    "tm": 13,
    "topic": "Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "difficulty": "basic",
    "q": "Mana direct control (pengendalian langsung) terhadap completeness pendapatan?",
    "options": [
      "Mereview ringkasan penjualan wilayah secara sangat agregat",
      "Mereview kode etik karyawan pada tingkat entitas",
      "Menetapkan budaya jujur manajemen pada tingkat entitas",
      "Mencocokkan dokumen pengiriman dengan penagihan secara langsung"
    ],
    "answer": 3,
    "explanation": "Direct control cukup tepat menangani risiko asersi. Pencocokan pengiriman dengan penagihan lebih langsung pada completeness (kelengkapan) daripada review ringkasan wilayah yang tidak langsung. Rujukan 04 TM13: C-012 (ARENS p.259; ISA315 para. A96); C-014 (ISA315 para. A149).",
    "sourceRef": "Rujukan 04 TM13: C-012 (ARENS p.259; ISA315 para. A96); C-014 (ISA315 para. A149).",
    "sourceAnchors": [
      "C-012",
      "C-014"
    ]
  },
  {
    "id": "aka201-tm13-q06",
    "tm": 13,
    "topic": "Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "difficulty": "basic",
    "q": "Pasangan mana perlu dipisahkan dalam segregation of duties (pemisahan tugas)?",
    "options": [
      "Kustodi aset dari pencatatan akuntansi aset terkait",
      "Kustodi aset dari pengamanan fisik aset terkait",
      "Pencatatan akuntansi dari penyimpanan catatan transaksi terkait",
      "Otorisasi transaksi dari penetapan batas transaksi terkait"
    ],
    "answer": 0,
    "explanation": "Segregation of duties memisahkan tugas tidak kompatibel, termasuk kustodi dari akuntansi, otorisasi dari kustodi, operasi dari pencatatan, rekonsiliasi dari entri data, serta TI dari pengguna. Rujukan 04 TM13: C-035 (ARENS pp.270–271; ISA315 App.3 para. 20).",
    "sourceRef": "Rujukan 04 TM13: C-035 (ARENS pp.270–271; ISA315 App.3 para. 20).",
    "sourceAnchors": [
      "C-035"
    ]
  },
  {
    "id": "aka201-tm13-q07",
    "tm": 13,
    "topic": "Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "difficulty": "medium",
    "q": "Apa hubungan IT general controls dengan application controls?",
    "options": [
      "Kontrol aplikasi menghapus kebutuhan kontrol umum TI",
      "Kontrol aplikasi bergantung efektivitas kontrol umum TI",
      "Kontrol umum menjamin seluruh saldo tanpa pengujian",
      "Kontrol umum selalu terpisah dari risiko aplikasi"
    ],
    "answer": 1,
    "explanation": "IT general controls adalah pengendalian umum TI. Application controls atau pengendalian aplikasi mungkin efektif hanya bila kontrol umum efektif; kontrol aplikasi mencakup input, processing, output. Rujukan 04 TM13: C-039 (ARENS p.273; ISA315 paras. 12(d), A108, App.5 para. 8); C-040 (ARENS pp.273–276); C-041 (ARENS p.276).",
    "sourceRef": "Rujukan 04 TM13: C-039 (ARENS p.273; ISA315 paras. 12(d), A108, App.5 para. 8); C-040 (ARENS pp.273–276); C-041 (ARENS p.276).",
    "sourceAnchors": [
      "C-039",
      "C-040",
      "C-041"
    ]
  },
  {
    "id": "aka201-tm13-q08",
    "tm": 13,
    "topic": "Pengendalian Internal COSO & Pengendalian Teknologi Informasi",
    "difficulty": "medium",
    "q": "Pada contoh lima faktur, apa hash total (total kode) yang benar?",
    "options": [
      "50.000.000, penjumlahan nilai uang seluruh lima faktur",
      "5, penjumlahan jumlah record seluruh lima faktur",
      "4102, penjumlahan nomor akun seluruh lima faktur",
      "21.014, penjumlahan nomor akun seluruh lima faktur"
    ],
    "answer": 3,
    "explanation": "Hash total 4102 + 4215 + 4102 + 4380 + 4215 = 21.014, tidak bermakna sebagai uang. Financial total (total keuangan) Rp50.000.000; record count (jumlah record) 5. Angka contoh adalah buatan penulis dalam 04. Rujukan 04 TM13: C-042 (ARENS p.277); C-045 (ARENS p.277).",
    "sourceRef": "Rujukan 04 TM13: C-042 (ARENS p.277); C-045 (ARENS p.277).",
    "sourceAnchors": [
      "C-042",
      "C-045"
    ]
  },
  {
    "id": "aka201-tm14-q01",
    "tm": 14,
    "topic": "Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "difficulty": "basic",
    "q": "Apa tujuan tests of controls (TOC)?",
    "options": [
      "Mendeteksi salah saji material pada seluruh asersi",
      "Menyusun catatan akuntansi sebagai tanggung jawab auditor",
      "Mengevaluasi efektivitas operasi pengendalian selama periode ketergantungan",
      "Menetapkan tujuan bisnis sebagai tanggung jawab auditor"
    ],
    "answer": 2,
    "explanation": "Tests of controls mengevaluasi efektivitas operasi pengendalian. Substantive procedures (prosedur substantif) mendeteksi salah saji material pada tingkat asersi. Rujukan 04 TM14: C-001 (ISA330 para. 4(a)–(b)); C-036 (ARENS p.314).",
    "sourceRef": "Rujukan 04 TM14: C-001 (ISA330 para. 4(a)–(b)); C-036 (ARENS p.314).",
    "sourceAnchors": [
      "C-001",
      "C-036"
    ]
  },
  {
    "id": "aka201-tm14-q02",
    "tm": 14,
    "topic": "Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "difficulty": "basic",
    "q": "Apa yang ditunjukkan walk-through (penelusuran transaksi) menurut buku?",
    "options": [
      "Desain dan implementasi, belum efektivitas sepanjang periode",
      "Seluruh asersi benar, tanpa prosedur substantif tambahan",
      "Seluruh kontrol efektif, tanpa bukti periode tambahan",
      "Seluruh fraud terdeteksi, tanpa prosedur lanjutan tambahan"
    ],
    "answer": 0,
    "explanation": "Walk-through menelusuri transaksi dari asal sampai tercatat memakai dokumen serta TI klien. Bukti menunjukkan desain dan implementasi; belum membuktikan operating effectiveness sepanjang periode. Rujukan 04 TM14: C-007 (ARENS p.298).",
    "sourceRef": "Rujukan 04 TM14: C-007 (ARENS p.298).",
    "sourceAnchors": [
      "C-007"
    ]
  },
  {
    "id": "aka201-tm14-q03",
    "tm": 14,
    "topic": "Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "difficulty": "basic",
    "q": "Kapan TOC wajib dilakukan menurut ISA 330 para. 8?",
    "options": [
      "Saat semua transaksi kecil atau manajemen dianggap jujur",
      "Saat kontrol diandalkan atau substantif saja tidak cukup",
      "Saat biaya audit rendah atau laporan belum diterbitkan",
      "Saat saldo tidak material atau risiko dinilai rendah"
    ],
    "answer": 1,
    "explanation": "TOC wajib ketika kontrol diandalkan sebagai dasar nature, timing, extent prosedur substantif, atau saat substantif saja tidak memberi bukti cukup dan tepat. Rujukan 04 TM14: C-019 (ARENS pp.305–306); C-031 (ARENS p.312; ISA330 paras. 8(b), A24); C-034 (ARENS p.302).",
    "sourceRef": "Rujukan 04 TM14: C-019 (ARENS pp.305–306); C-031 (ARENS p.312; ISA330 paras. 8(b), A24); C-034 (ARENS p.302).",
    "sourceAnchors": [
      "C-019",
      "C-031",
      "C-034"
    ]
  },
  {
    "id": "aka201-tm14-q04",
    "tm": 14,
    "topic": "Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "difficulty": "basic",
    "q": "Bagaimana inquiry (permintaan keterangan) digunakan dalam TOC?",
    "options": [
      "Dipakai sendirian untuk membuktikan efektivitas sepanjang periode",
      "Dipakai sendirian untuk menggantikan semua bukti tertulis",
      "Digabung inspeksi, observasi, atau reperformance sebagai penguat",
      "Digabung estimasi fee untuk membuktikan semua asersi"
    ],
    "answer": 2,
    "explanation": "Inquiry saja tidak cukup. Inquiry ditambah inspeksi atau reperformance (pengerjaan ulang) lebih kuat daripada ditambah observasi. Auditor menilai kapan kontrol berjalan, konsistensi, dan pelaksananya. Rujukan 04 TM14: C-038 (ARENS pp.314–316; ISA330 paras. 10(a), A26–A27).",
    "sourceRef": "Rujukan 04 TM14: C-038 (ARENS pp.314–316; ISA330 paras. 10(a), A26–A27).",
    "sourceAnchors": [
      "C-038"
    ]
  },
  {
    "id": "aka201-tm14-q05",
    "tm": 14,
    "topic": "Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "difficulty": "basic",
    "q": "Bagaimana bukti tahun lalu digunakan untuk kontrol atas significant risk?",
    "options": [
      "Uji kontrol terkait sekali dalam tiga audit",
      "Uji kontrol terkait hanya saat personel berubah",
      "Uji kontrol terkait hanya saat sistem berubah",
      "Uji kontrol terkait pada setiap periode berjalan"
    ],
    "answer": 3,
    "explanation": "Significant risk adalah risiko signifikan. Kontrol yang diandalkan atas risiko ini diuji pada periode berjalan. Aturan sekali dalam tiga audit untuk kontrol tidak berubah tidak menggantikan ketentuan tersebut. Rujukan 04 TM14: C-044 (ARENS p.317; ISA330 paras. 11–15, A33–A40).",
    "sourceRef": "Rujukan 04 TM14: C-044 (ARENS p.317; ISA330 paras. 11–15, A33–A40).",
    "sourceAnchors": [
      "C-044"
    ]
  },
  {
    "id": "aka201-tm14-q06",
    "tm": 14,
    "topic": "Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "difficulty": "basic",
    "q": "Apa arti tidak ditemukan salah saji bagi operating effectiveness?",
    "options": [
      "Belum membuktikan bahwa pengendalian beroperasi secara efektif",
      "Selalu membuktikan bahwa pengendalian beroperasi secara efektif",
      "Selalu membuktikan bahwa pengendalian tidak pernah diterapkan",
      "Selalu menghapus seluruh kewajiban pelaksanaan prosedur substantif"
    ],
    "answer": 0,
    "explanation": "Operating effectiveness adalah efektivitas operasi pengendalian. Tidak ditemukan salah saji bukan bukti kontrol efektif; deviasi diselidiki dan dasar ketergantungan dinilai. Rujukan 04 TM14: C-046 (ISA330 paras. 16–17, A41–A42, A63; ARENS p.314).",
    "sourceRef": "Rujukan 04 TM14: C-046 (ISA330 paras. 16–17, A41–A42, A63; ARENS p.314).",
    "sourceAnchors": [
      "C-046"
    ]
  },
  {
    "id": "aka201-tm14-q07",
    "tm": 14,
    "topic": "Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "difficulty": "medium",
    "q": "Apa tambahan laporan Type 2 dibanding Type 1 pada service organization?",
    "options": [
      "Desain kontrol pada tanggal tanpa uraian tes",
      "Efektivitas operasi selama periode serta uraian tes",
      "Opini laporan keuangan pengguna serta uraian tes",
      "Jaminan semua transaksi benar tanpa uraian tes"
    ],
    "answer": 1,
    "explanation": "Service organization adalah organisasi jasa. Type 1 memuat deskripsi dan desain pada tanggal tertentu; Type 2 menambah efektivitas operasi selama periode serta uraian pengujian. Rujukan 04 TM14: C-049 (ARENS p.310; ISA402 para. 8(b)–(c)).",
    "sourceRef": "Rujukan 04 TM14: C-049 (ARENS p.310; ISA402 para. 8(b)–(c)).",
    "sourceAnchors": [
      "C-049"
    ]
  },
  {
    "id": "aka201-tm14-q08",
    "tm": 14,
    "topic": "Pengujian Pengendalian (TOC) & Pengujian Substantif",
    "difficulty": "medium",
    "q": "Bagaimana dual-purpose test (pengujian dua tujuan) dievaluasi?",
    "options": [
      "Tujuan pengendalian menghapus seluruh kebutuhan evaluasi substantif",
      "Tujuan substantif menghapus seluruh kebutuhan evaluasi pengendalian",
      "Kedua tujuan otomatis terbukti dari satu persetujuan",
      "Tujuan pengendalian dan substantif dievaluasi secara terpisah"
    ],
    "answer": 3,
    "explanation": "Dual-purpose test memakai transaksi sama untuk TOC dan test of detail (uji rinci). Desain serta evaluasi dilakukan untuk tiap tujuan; deviasi pengendalian berbeda dari salah saji angka. Rujukan 04 TM14: C-058 (ARENS pp.316, 340; ISA330 para. A23).",
    "sourceRef": "Rujukan 04 TM14: C-058 (ARENS pp.316, 340; ISA330 para. A23).",
    "sourceAnchors": [
      "C-058"
    ]
  },
  {
    "id": "aka201-tm15-q01",
    "tm": 15,
    "topic": "CAATs dan Perancangan Program Audit",
    "difficulty": "basic",
    "q": "Apa fungsi audit program (program audit) dibanding strategi dan rencana?",
    "options": [
      "Menetapkan tujuan penjualan untuk pelaksanaan operasi klien",
      "Menetapkan opini final sebelum pelaksanaan pengumpulan bukti",
      "Memuat langkah audit untuk pelaksanaan pengumpulan bukti",
      "Menggantikan pertimbangan auditor sebelum pelaksanaan pengumpulan bukti"
    ],
    "answer": 2,
    "explanation": "Audit program memuat langkah audit; overall audit strategy menetapkan cakupan, waktu, arah, sementara audit plan memuat nature, timing, extent prosedur penilaian risiko dan lanjutan. Rujukan 04 TM15: C-001 (ARENS pp.331–332, 335, 350; ISA300 paras. 7, 9); C-002 (ARENS pp.332, 335, 350; ISA300 para. A15).",
    "sourceRef": "Rujukan 04 TM15: C-001 (ARENS pp.331–332, 335, 350; ISA300 paras. 7, 9); C-002 (ARENS pp.332, 335, 350; ISA300 para. A15).",
    "sourceAnchors": [
      "C-001",
      "C-002"
    ]
  },
  {
    "id": "aka201-tm15-q02",
    "tm": 15,
    "topic": "CAATs dan Perancangan Program Audit",
    "difficulty": "basic",
    "q": "Dengan saldo awal piutang 96, penjualan 660, penerimaan 590, berapa saldo akhirnya?",
    "options": [
      "166, dari saldo awal ditambah penjualan dikurangi penerimaan",
      "26, dari saldo awal ditambah penerimaan dikurangi penjualan",
      "756, dari saldo awal ditambah penjualan tanpa pengurangan",
      "1.346, dari saldo awal ditambah penjualan ditambah penerimaan"
    ],
    "answer": 0,
    "explanation": "Roll-forward (rekonsiliasi perubahan saldo) Figure 10-7: 96 + 660 - 590 = 166. Catatan sumber: satuan tidak dinyatakan, sehingga angka tidak diberi mata uang. Rujukan 04 TM15: C-016 (ARENS pp.341–342).",
    "sourceRef": "Rujukan 04 TM15: C-016 (ARENS pp.341–342).",
    "sourceAnchors": [
      "C-016"
    ]
  },
  {
    "id": "aka201-tm15-q03",
    "tm": 15,
    "topic": "CAATs dan Perancangan Program Audit",
    "difficulty": "basic",
    "q": "Apa prinsip pemilihan combined approach (pendekatan gabungan)?",
    "options": [
      "Pilih semua akun identik, abaikan hasil pengujian",
      "Pilih per akun dan asersi, pertimbangkan efisiensi",
      "Pilih semua kontrol diuji, abaikan risiko inheren",
      "Pilih seluruh analitis dihapus, abaikan karakteristik transaksi"
    ],
    "answer": 1,
    "explanation": "Pendekatan gabungan mengandalkan kontrol yang diuji bersama substantif. Pilihan dapat berbeda per akun dan asersi; kontrol kuat dengan inherent risk rendah belum tentu efisien diuji. Rujukan 04 TM15: C-017 (ARENS pp.342–343; ISA330 paras. A4, A18); C-021 (ARENS pp.345–346).",
    "sourceRef": "Rujukan 04 TM15: C-017 (ARENS pp.342–343; ISA330 paras. A4, A18); C-021 (ARENS pp.345–346).",
    "sourceAnchors": [
      "C-017",
      "C-021"
    ]
  },
  {
    "id": "aka201-tm15-q04",
    "tm": 15,
    "topic": "CAATs dan Perancangan Program Audit",
    "difficulty": "basic",
    "q": "Pada Audit 4 Figure 10-8, apa pemicu peralihan menuju substantive approach?",
    "options": [
      "Kontrol terbukti efektif dan tidak ada deviasi",
      "Biaya kontrol rendah dan saldo tidak material",
      "Deviasi kontrol banyak dan salah saji signifikan",
      "Program standar tersedia dan entitas tidak berubah"
    ],
    "answer": 2,
    "explanation": "Substantive approach adalah pendekatan substantif. Audit 4 awalnya gabungan; deviasi banyak serta salah saji signifikan memicu peralihan ke substantif penuh dengan biaya lebih tinggi. Rujukan 04 TM15: C-020 (ARENS p.344; ISA330 paras. 8, 17).",
    "sourceRef": "Rujukan 04 TM15: C-020 (ARENS p.344; ISA330 paras. 8, 17).",
    "sourceAnchors": [
      "C-020"
    ]
  },
  {
    "id": "aka201-tm15-q05",
    "tm": 15,
    "topic": "CAATs dan Perancangan Program Audit",
    "difficulty": "basic",
    "q": "Dalam tabel teknik di 05, bagaimana test data approach bekerja?",
    "options": [
      "Data nyata klien diproses melalui aplikasi buatan auditor",
      "Data nyata klien diabaikan melalui estimasi biaya auditor",
      "Data uji auditor dihapus sebelum aplikasi milik klien",
      "Data uji auditor diproses melalui aplikasi milik klien"
    ],
    "answer": 3,
    "explanation": "Test data approach (pendekatan data uji) memasukkan transaksi yang seharusnya diterima dan ditolak ke program klien, lalu membandingkan keluaran aktual dengan harapan. Rincian teknik mengikuti tabel CAATs di 05. Rujukan 04 TM15: C-034 (ARENS pp.151–153, 316, 349–350, 395–397; JAKSIC); C-036 (ARENS pp.316, 341, 349, 396; JAKSIC).",
    "sourceRef": "Rujukan 04 TM15: C-034 (ARENS pp.151–153, 316, 349–350, 395–397; JAKSIC); C-036 (ARENS pp.316, 341, 349, 396; JAKSIC).",
    "sourceAnchors": [
      "C-034",
      "C-036"
    ]
  },
  {
    "id": "aka201-tm15-q06",
    "tm": 15,
    "topic": "CAATs dan Perancangan Program Audit",
    "difficulty": "basic",
    "q": "Teknik CAATs mana dalam 04 dan 05 diperkenalkan dari satu sumber Jakšić?",
    "options": [
      "ITF, parallel simulation, dan online audit monitor",
      "ITF, external confirmation, dan substantive analytical procedures",
      "ITF, physical inspection, dan substantive analytical procedures",
      "ITF, bank reconciliation, dan substantive analytical procedures"
    ],
    "answer": 0,
    "explanation": "ITF (integrated test facility), parallel simulation (simulasi paralel), dan online audit monitor (monitor audit daring) diperkenalkan dari Jakšić. Catatan sumber: menyamakan monitor dengan embedded audit module adalah pembacaan penulis, bukan istilah yang dipakai artikel. Rujukan 04 TM15: C-034 (ARENS pp.151–153, 316, 349–350, 395–397; JAKSIC); C-035 (JAKSIC; ARENS p.316).",
    "sourceRef": "Rujukan 04 TM15: C-034 (ARENS pp.151–153, 316, 349–350, 395–397; JAKSIC); C-035 (JAKSIC; ARENS p.316).",
    "sourceAnchors": [
      "C-034",
      "C-035"
    ]
  },
  {
    "id": "aka201-tm15-q07",
    "tm": 15,
    "topic": "CAATs dan Perancangan Program Audit",
    "difficulty": "medium",
    "q": "Apa batas ADA terhadap sampling risk dan nonsampling risk?",
    "options": [
      "Sampling risk tetap pada cakupan seluruh populasi; nonsampling hilang",
      "Sampling risk hilang pada cakupan seluruh populasi; nonsampling tetap",
      "Sampling risk hilang pada sampel terbatas; nonsampling juga hilang",
      "Sampling risk tetap pada sampel terbatas; nonsampling selalu hilang"
    ],
    "answer": 1,
    "explanation": "Sampling risk adalah risiko akibat pemilihan sampel; cakupan seluruh populasi dapat menghilangkannya. Nonsampling risk (risiko selain sampling), seperti kesalahan pelaksanaan atau interpretasi, tetap ada; big data tidak menggantikan pertimbangan. Rujukan 04 TM15: C-037 (ARENS p.395); C-039 (ARENS p.396).",
    "sourceRef": "Rujukan 04 TM15: C-037 (ARENS p.395); C-039 (ARENS p.396).",
    "sourceAnchors": [
      "C-037",
      "C-039"
    ]
  },
  {
    "id": "aka201-tm15-q08",
    "tm": 15,
    "topic": "CAATs dan Perancangan Program Audit",
    "difficulty": "medium",
    "q": "Bagaimana standard audit program (program audit standar) digunakan?",
    "options": [
      "Salin seluruh tahun lalu, abaikan perubahan entitas",
      "Salin seluruh klien lain, abaikan karakteristik transaksi",
      "Tetapkan sebelum penilaian risiko, abaikan bukti bertentangan",
      "Sesuaikan dengan risiko, hindari penyalinan tahun lalu"
    ],
    "answer": 3,
    "explanation": "Program standar dapat meningkatkan efisiensi namun tidak menggantikan pertimbangan. SALY (same as last year, sama seperti tahun lalu) dan anchoring (terpaku pada penilaian awal) menjadi jebakan yang dibahas buku. Rujukan 04 TM15: C-046 (ARENS pp.350–351; ISA300 para. A20); C-047 (ARENS p.352).",
    "sourceRef": "Rujukan 04 TM15: C-046 (ARENS pp.350–351; ISA300 para. A20); C-047 (ARENS p.352).",
    "sourceAnchors": [
      "C-046",
      "C-047"
    ]
  }
];

export const AKA201_QUIZ: QuizQuestion[] = [...AKA201_QUIZ_UTS, ...AKA201_QUIZ_UAS];
