// src/data/quizzes/aka201.ts
// Kuis pilihan ganda Pengauditan Berbasis Risiko I (AKA201).
// TM01–TM07: converted verbatim from each TM's 06_implementation_brief.md in the content package (IDs from 06, answer keys
// follow the key spread in 06 and 07). TM08–TM14: the earlier items, unchanged until that half is rebuilt.
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
