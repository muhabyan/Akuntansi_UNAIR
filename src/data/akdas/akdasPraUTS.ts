// src/data/akdas/akdasPraUTS.ts
// Konten AKDAS Pra-UTS: TM 1–7 + Paket Latihan UTS
// Basis: Silabus Akuntansi Dasar FEB UNAIR dan Financial Accounting IFRS Edition (Weygandt, Kimmel, Kieso).
// Catatan: Materi ini adalah materi belajar orisinal yang diparafrasekan dan disusun ulang untuk e-learning pribadi.

export type MaterialSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  formulas?: string[];
};

export type WorkedExample = {
  title: string;
  case: string;
  solutionSteps: string[];
  conclusion: string;
};

export type PracticeReport = {
  title: string;
  caseDescription: string;
  rawData: string[];
  requiredOutputs: string[];
  stepByStepSolution: string[];
  finalReport?: {
    title: string;
    columns: string[];
    rows: string[][];
    notes?: string[];
  };
};

export type ReportTemplate = {
  title: string;
  purpose: string;
  columns: string[];
  notes: string[];
};

export type QuizItem = {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type FlashcardItem = {
  front: string;
  back: string;
};

export type BankQuestion = {
  type: "essay" | "case" | "calculation" | "concept-check" | "journal" | "report";
  question: string;
  answerGuide: string;
};

export type MeetingContent = {
  meeting: number;
  title: string;
  topicGroup: string;
  references: string[];
  learningObjectives: string[];
  prerequisite: string[];
  conceptMap: string[];
  sections: MaterialSection[];
  workedExamples: WorkedExample[];
  practiceReports: PracticeReport[];
  templates: ReportTemplate[];
  commonMistakes: string[];
  quickSummary: string[];
  quiz: QuizItem[];
  flashcards: FlashcardItem[];
  bankQuestions: BankQuestion[];
};

export type ExamPractice = {
  title: string;
  description: string;
  coverage: string[];
  multipleChoice: QuizItem[];
  calculationCases: BankQuestion[];
  essayCases: BankQuestion[];
  answerNotes: string[];
};

export const akdasPraUTS = {
  courseCode: "AKK106",
  courseName: "Akuntansi Keuangan Dasar",
  alias: "AKDAS",
  semester: 1,
  sks: 3,
  period: "Pra-UTS",
  description:
    "Paket Pra-UTS AKDAS berisi materi TM 1–7: pengantar akuntansi, proses pencatatan, jurnal penyesuaian, penyelesaian siklus akuntansi, operasi perusahaan dagang, persediaan, serta fraud, pengendalian internal, dan kas. Paket ini tidak hanya berisi teori, tetapi juga latihan transaksi, jurnal, worksheet, laporan keuangan, kartu persediaan, rekonsiliasi bank, quiz, flashcard, dan bank soal.",
  sourceBasis: [
    "Silabus Akuntansi Dasar FEB Universitas Airlangga Semester Gasal 2021/2022.",
    "Weygandt, J. J., Kimmel, P. D., & Kieso, D. E. Financial Accounting: IFRS Edition, 3rd Edition."
  ],
  meetings: [
    {
      meeting: 1,
      title: "Accounting in Action",
      topicGroup: "Fondasi Akuntansi, Persamaan Dasar Akuntansi, dan Laporan Keuangan",
      references: ["WKK Chapter 1: Accounting in Action", "Silabus AKDAS FEB UNAIR TM 1"],
      learningObjectives: [
        "Menjelaskan akuntansi sebagai sistem informasi keuangan.",
        "Menjelaskan tiga aktivitas utama akuntansi: identification, recording, dan communication.",
        "Membedakan pengguna internal dan eksternal informasi akuntansi.",
        "Menjelaskan building blocks of accounting: ethics, accounting standards, measurement principles, dan assumptions.",
        "Menjelaskan persamaan dasar akuntansi: Assets = Liabilities + Equity.",
        "Menganalisis pengaruh transaksi bisnis terhadap persamaan dasar akuntansi.",
        "Menyusun laporan keuangan sederhana dari data transaksi dasar."
      ],
      prerequisite: [
        "Memahami makna dasar bisnis: pemilik, pelanggan, pemasok, kas, utang, modal, pendapatan, dan beban.",
        "Belum wajib menguasai debit-kredit; TM 1 berfokus pada logika persamaan dasar akuntansi."
      ],
      conceptMap: [
        "Bisnis menghasilkan transaksi ekonomi.",
        "Transaksi ekonomi diidentifikasi dan diukur.",
        "Akuntansi mencatat transaksi secara sistematis.",
        "Transaksi memengaruhi aset, liabilitas, dan ekuitas.",
        "Keseimbangan persamaan akuntansi menjadi dasar pencatatan.",
        "Hasil akhir proses akuntansi adalah laporan keuangan."
      ],
      sections: [
        {
          heading: "1. Pengertian dan Peran Akuntansi",
          paragraphs: [
            "Akuntansi adalah sistem informasi yang mengidentifikasi, mencatat, dan mengomunikasikan peristiwa ekonomi suatu entitas kepada pihak yang membutuhkan informasi tersebut. Fokus utamanya bukan sekadar menghitung uang, tetapi mengubah transaksi menjadi informasi yang berguna untuk pengambilan keputusan.",
            "Peran akuntansi dalam bisnis sangat penting karena pemilik, manajemen, investor, kreditur, pemerintah, dan pihak lain membutuhkan dasar yang jelas untuk menilai kinerja dan posisi keuangan suatu entitas. Tanpa akuntansi, kegiatan bisnis hanya menjadi kumpulan transaksi yang sulit ditelusuri.",
            "Akuntansi juga menjadi bahasa bisnis karena laporan keuangan dapat digunakan untuk menjelaskan kondisi perusahaan secara ringkas. Ketika seseorang membaca laporan laba rugi, laporan posisi keuangan, dan laporan arus kas, ia dapat memahami apakah perusahaan menghasilkan laba, memiliki aset cukup, memiliki utang besar, atau mengalami masalah kas."
          ],
          bullets: [
            "Identification: memilih peristiwa ekonomi yang relevan untuk dicatat.",
            "Recording: mencatat transaksi secara sistematis.",
            "Communication: menyajikan informasi dalam bentuk laporan keuangan."
          ]
        },
        {
          heading: "2. Pengguna Informasi Akuntansi",
          paragraphs: [
            "Pengguna internal adalah pihak di dalam organisasi, seperti manajer, direktur, pemilik aktif, dan kepala divisi. Mereka membutuhkan informasi untuk menyusun anggaran, mengendalikan biaya, menentukan harga, mengevaluasi kinerja, dan mengambil keputusan operasional.",
            "Pengguna eksternal adalah pihak di luar organisasi, seperti investor, kreditur, pemerintah, pemasok, pelanggan, dan masyarakat. Investor memakai informasi akuntansi untuk menilai prospek keuntungan dan risiko investasi. Kreditur menggunakannya untuk menilai kemampuan perusahaan membayar pinjaman.",
            "Perbedaan utama pengguna internal dan eksternal terletak pada akses informasi. Pengguna internal biasanya memiliki akses data lebih rinci, sedangkan pengguna eksternal mengandalkan laporan keuangan umum."
          ],
          bullets: [
            "Pengguna internal: manajemen, pemilik aktif, direktur, supervisor.",
            "Pengguna eksternal: investor, kreditur, pemerintah, pemasok, pelanggan, masyarakat.",
            "Laporan keuangan harus relevan, andal, dan dapat dibandingkan karena digunakan oleh banyak pihak."
          ]
        },
        {
          heading: "3. Building Blocks of Accounting",
          paragraphs: [
            "Building blocks of accounting adalah fondasi yang membuat informasi akuntansi dapat dipercaya. Fondasi ini mencakup etika, standar akuntansi, prinsip pengukuran, dan asumsi dasar pelaporan.",
            "Etika penting karena penyusunan laporan keuangan melibatkan pertimbangan profesional. Akuntan dapat menghadapi tekanan untuk mempercepat pengakuan pendapatan, menunda beban, atau menyajikan kondisi perusahaan lebih baik daripada kenyataan. Karena itu, integritas dan objektivitas menjadi bagian penting dari praktik akuntansi.",
            "Standar akuntansi menyediakan pedoman agar laporan keuangan disusun secara konsisten. Prinsip pengukuran membantu menentukan nilai yang dicatat, misalnya berdasarkan biaya perolehan atau nilai wajar. Asumsi dasar seperti monetary unit assumption dan economic entity assumption membantu menentukan batas transaksi yang dicatat."
          ],
          bullets: [
            "Ethics: informasi disusun secara jujur dan bertanggung jawab.",
            "Accounting standards: pedoman untuk menyusun laporan secara konsisten.",
            "Measurement principles: dasar untuk mengukur nilai akun.",
            "Monetary unit assumption: hanya peristiwa yang dapat diukur dengan uang yang dicatat.",
            "Economic entity assumption: transaksi perusahaan dipisahkan dari transaksi pribadi pemilik."
          ]
        },
        {
          heading: "4. Persamaan Dasar Akuntansi",
          paragraphs: [
            "Persamaan dasar akuntansi menunjukkan bahwa sumber daya perusahaan selalu memiliki sumber klaim. Aset adalah sumber daya yang dikuasai entitas dan diharapkan memberi manfaat ekonomi. Liabilitas adalah kewajiban perusahaan kepada pihak lain. Ekuitas adalah hak residual pemilik atas aset setelah dikurangi liabilitas.",
            "Persamaan Assets = Liabilities + Equity harus tetap seimbang setelah setiap transaksi. Keseimbangan ini menjadi dasar double-entry bookkeeping. Jika aset bertambah, maka harus ada kenaikan liabilitas, kenaikan ekuitas, atau penurunan aset lain.",
            "Ekuitas dapat berubah karena investasi pemilik, pendapatan, beban, dan dividen/prive. Pendapatan meningkatkan ekuitas karena menaikkan laba, sedangkan beban dan dividen/prive mengurangi ekuitas."
          ],
          formulas: [
            "Assets = Liabilities + Equity",
            "Equity = Owner's Capital + Revenues - Expenses - Dividends/Drawings",
            "Net Income = Revenues - Expenses"
          ],
          bullets: [
            "Aset: kas, piutang, persediaan, perlengkapan, peralatan.",
            "Liabilitas: utang usaha, utang gaji, pinjaman bank, pendapatan diterima di muka.",
            "Ekuitas: modal pemilik, share capital, retained earnings."
          ]
        },
        {
          heading: "5. Laporan Keuangan Dasar",
          paragraphs: [
            "Laporan laba rugi menyajikan pendapatan dan beban untuk menentukan laba bersih atau rugi bersih selama periode tertentu. Laporan ini menjawab pertanyaan apakah kegiatan usaha menghasilkan keuntungan.",
            "Laporan perubahan ekuitas menjelaskan perubahan ekuitas selama periode berjalan. Perubahan dapat berasal dari setoran pemilik, laba bersih, rugi bersih, dividen, atau prive.",
            "Laporan posisi keuangan menyajikan aset, liabilitas, dan ekuitas pada tanggal tertentu. Laporan ini menggambarkan posisi keuangan pada satu titik waktu. Laporan arus kas menyajikan penerimaan dan pengeluaran kas yang dikelompokkan ke dalam aktivitas operasi, investasi, dan pendanaan."
          ],
          bullets: [
            "Income Statement: pendapatan dan beban.",
            "Statement of Changes in Equity: perubahan modal/ekuitas.",
            "Statement of Financial Position: aset, liabilitas, dan ekuitas.",
            "Statement of Cash Flows: arus kas operasi, investasi, dan pendanaan."
          ]
        }
      ],
      workedExamples: [
        {
          title: "Analisis Transaksi Dasar Usaha Jasa",
          case:
            "Pada awal bulan, pemilik menyetor kas Rp50.000.000. Perusahaan membeli perlengkapan tunai Rp2.000.000, membeli peralatan kredit Rp10.000.000, menerima pendapatan jasa tunai Rp8.000.000, membayar beban sewa Rp3.000.000, dan pemilik mengambil prive Rp1.000.000.",
          solutionSteps: [
            "Setoran modal: Kas +Rp50.000.000 dan Ekuitas +Rp50.000.000.",
            "Beli perlengkapan tunai: Perlengkapan +Rp2.000.000 dan Kas -Rp2.000.000; total aset tidak berubah.",
            "Beli peralatan kredit: Peralatan +Rp10.000.000 dan Liabilitas +Rp10.000.000.",
            "Pendapatan jasa tunai: Kas +Rp8.000.000 dan Ekuitas +Rp8.000.000 melalui pendapatan.",
            "Bayar sewa: Kas -Rp3.000.000 dan Ekuitas -Rp3.000.000 melalui beban.",
            "Prive: Kas -Rp1.000.000 dan Ekuitas -Rp1.000.000."
          ],
          conclusion:
            "Setiap transaksi menjaga persamaan akuntansi tetap seimbang. Transaksi dapat memengaruhi dua akun atau lebih, tetapi total sisi kiri dan kanan tetap sama."
        }
      ],
      practiceReports: [
        {
          title: "Praktik TM 1: Laporan Keuangan Mini Usaha Jasa",
          caseDescription:
            "Nara Service memulai usaha pada bulan Januari. Mahasiswa diminta menganalisis transaksi menggunakan persamaan dasar dan menyusun laporan keuangan sederhana.",
          rawData: [
            "Pemilik menyetor kas Rp40.000.000.",
            "Membeli perlengkapan tunai Rp3.000.000.",
            "Membeli peralatan secara kredit Rp12.000.000.",
            "Menerima pendapatan jasa tunai Rp9.000.000.",
            "Membayar beban sewa Rp2.500.000.",
            "Membayar beban listrik Rp500.000.",
            "Pemilik mengambil prive Rp1.000.000."
          ],
          requiredOutputs: [
            "Analisis dampak transaksi terhadap aset, liabilitas, dan ekuitas.",
            "Laporan laba rugi sederhana.",
            "Laporan perubahan ekuitas sederhana.",
            "Laporan posisi keuangan sederhana."
          ],
          stepByStepSolution: [
            "Pendapatan = Rp9.000.000.",
            "Total beban = Rp2.500.000 + Rp500.000 = Rp3.000.000.",
            "Laba bersih = Rp9.000.000 - Rp3.000.000 = Rp6.000.000.",
            "Ekuitas akhir = Modal awal Rp40.000.000 + Laba bersih Rp6.000.000 - Prive Rp1.000.000 = Rp45.000.000.",
            "Kas akhir = Rp40.000.000 - Rp3.000.000 + Rp9.000.000 - Rp2.500.000 - Rp500.000 - Rp1.000.000 = Rp42.000.000.",
            "Total aset = Kas Rp42.000.000 + Perlengkapan Rp3.000.000 + Peralatan Rp12.000.000 = Rp57.000.000.",
            "Liabilitas = Utang Usaha Rp12.000.000.",
            "Liabilitas + Ekuitas = Rp12.000.000 + Rp45.000.000 = Rp57.000.000."
          ],
          finalReport: {
            title: "Nara Service - Laporan Keuangan Mini Januari",
            columns: ["Laporan", "Komponen", "Jumlah"],
            rows: [
              ["Laba Rugi", "Pendapatan Jasa", "Rp9.000.000"],
              ["Laba Rugi", "Total Beban", "Rp3.000.000"],
              ["Laba Rugi", "Laba Bersih", "Rp6.000.000"],
              ["Perubahan Ekuitas", "Modal Awal", "Rp40.000.000"],
              ["Perubahan Ekuitas", "Tambah: Laba Bersih", "Rp6.000.000"],
              ["Perubahan Ekuitas", "Kurang: Prive", "Rp1.000.000"],
              ["Perubahan Ekuitas", "Ekuitas Akhir", "Rp45.000.000"],
              ["Posisi Keuangan", "Total Aset", "Rp57.000.000"],
              ["Posisi Keuangan", "Total Liabilitas", "Rp12.000.000"],
              ["Posisi Keuangan", "Total Ekuitas", "Rp45.000.000"]
            ],
            notes: [
              "Contoh ini belum memakai jurnal debit-kredit.",
              "Tujuannya adalah memahami hubungan transaksi dengan laporan keuangan."
            ]
          }
        }
      ],
      templates: [
        {
          title: "Template Analisis Persamaan Dasar Akuntansi",
          purpose: "Membantu mahasiswa membaca dampak transaksi sebelum masuk ke jurnal debit-kredit.",
          columns: ["Tanggal", "Transaksi", "Aset", "Liabilitas", "Ekuitas", "Penjelasan"],
          notes: [
            "Pastikan setiap transaksi menjaga Assets = Liabilities + Equity.",
            "Pendapatan menambah ekuitas; beban dan prive/dividen mengurangi ekuitas."
          ]
        },
        {
          title: "Template Laporan Keuangan Mini",
          purpose: "Membantu mahasiswa menyusun laporan laba rugi, perubahan ekuitas, dan posisi keuangan dari data transaksi sederhana.",
          columns: ["Bagian Laporan", "Nama Akun", "Jumlah"],
          notes: [
            "Laporan laba rugi disusun sebelum laporan perubahan ekuitas.",
            "Laporan posisi keuangan harus seimbang."
          ]
        }
      ],
      commonMistakes: [
        "Menganggap semua penerimaan kas sebagai pendapatan.",
        "Menganggap semua pengeluaran kas sebagai beban.",
        "Mencampur transaksi pribadi pemilik dengan transaksi perusahaan.",
        "Lupa bahwa pendapatan dan beban memengaruhi ekuitas.",
        "Mengira laporan posisi keuangan menunjukkan aktivitas selama satu periode, padahal laporan itu menunjukkan posisi pada tanggal tertentu."
      ],
      quickSummary: [
        "Akuntansi adalah sistem informasi untuk mengidentifikasi, mencatat, dan mengomunikasikan peristiwa ekonomi.",
        "Persamaan dasar akuntansi adalah Assets = Liabilities + Equity.",
        "Pendapatan meningkatkan ekuitas; beban dan prive/dividen mengurangi ekuitas.",
        "Laporan keuangan dasar terdiri atas laporan laba rugi, perubahan ekuitas, posisi keuangan, dan arus kas."
      ],
      quiz: [
        {
          question: "Akuntansi terutama berfungsi sebagai...",
          options: ["alat promosi perusahaan", "sistem informasi keuangan", "sistem produksi", "media pemasaran"],
          answerIndex: 1,
          explanation: "Akuntansi mengubah transaksi ekonomi menjadi informasi keuangan untuk pengambilan keputusan."
        },
        {
          question: "Persamaan dasar akuntansi yang benar adalah...",
          options: ["Assets = Revenues - Expenses", "Assets = Liabilities + Equity", "Equity = Assets + Liabilities", "Liabilities = Assets + Equity"],
          answerIndex: 1,
          explanation: "Aset berasal dari klaim kreditur dan klaim pemilik."
        },
        {
          question: "Pembelian peralatan secara kredit menyebabkan...",
          options: ["aset bertambah dan liabilitas bertambah", "aset berkurang dan ekuitas berkurang", "liabilitas berkurang", "pendapatan bertambah"],
          answerIndex: 0,
          explanation: "Peralatan bertambah sebagai aset dan utang bertambah sebagai liabilitas."
        }
      ],
      flashcards: [
        { front: "Apa itu akuntansi?", back: "Sistem informasi yang mengidentifikasi, mencatat, dan mengomunikasikan informasi ekonomi suatu entitas." },
        { front: "Apa persamaan dasar akuntansi?", back: "Assets = Liabilities + Equity." },
        { front: "Apa perbedaan aset dan liabilitas?", back: "Aset adalah sumber daya ekonomi; liabilitas adalah kewajiban kepada pihak lain." },
        { front: "Apa fungsi laporan laba rugi?", back: "Menunjukkan pendapatan, beban, dan laba/rugi bersih selama periode tertentu." }
      ],
      bankQuestions: [
        {
          type: "essay",
          question: "Jelaskan mengapa akuntansi disebut sebagai bahasa bisnis.",
          answerGuide: "Akuntansi disebut bahasa bisnis karena menyajikan aktivitas ekonomi dalam laporan yang dapat digunakan pemilik, manajemen, investor, kreditur, dan pihak lain untuk memahami kondisi perusahaan."
        },
        {
          type: "calculation",
          question: "Perusahaan memiliki aset Rp100.000.000 dan liabilitas Rp35.000.000. Hitung ekuitas.",
          answerGuide: "Ekuitas = Aset - Liabilitas = Rp100.000.000 - Rp35.000.000 = Rp65.000.000."
        },
        {
          type: "case",
          question: "Pemilik menggunakan kas perusahaan untuk kebutuhan pribadi. Jelaskan perlakuannya dalam akuntansi.",
          answerGuide: "Transaksi itu tidak boleh dicatat sebagai beban usaha. Untuk perusahaan perseorangan dapat dicatat sebagai prive, sedangkan untuk korporasi dapat dianalogikan sebagai distribusi kepada pemilik sesuai konteks."
        }
      ]
    },

    {
      meeting: 2,
      title: "The Recording Process",
      topicGroup: "Akun, Debit-Kredit, Jurnal Umum, Buku Besar, dan Neraca Saldo",
      references: ["WKK Chapter 2: The Recording Process", "Silabus AKDAS FEB UNAIR TM 2"],
      learningObjectives: [
        "Menjelaskan fungsi akun dalam pencatatan akuntansi.",
        "Memahami debit dan kredit sebagai sisi pencatatan, bukan sebagai uang masuk dan uang keluar.",
        "Menerapkan aturan debit-kredit untuk aset, liabilitas, ekuitas, pendapatan, beban, dan dividen/prive.",
        "Membuat jurnal umum dari transaksi sederhana.",
        "Melakukan posting dari jurnal ke buku besar.",
        "Menyusun neraca saldo dan menjelaskan keterbatasannya."
      ],
      prerequisite: [
        "Memahami persamaan dasar akuntansi.",
        "Mampu menentukan transaksi yang memengaruhi aset, liabilitas, ekuitas, pendapatan, dan beban."
      ],
      conceptMap: [
        "Transaksi dianalisis.",
        "Akun yang terdampak ditentukan.",
        "Debit-kredit dipilih sesuai jenis akun.",
        "Transaksi dicatat di jurnal.",
        "Jurnal diposting ke buku besar.",
        "Saldo akun dirangkum dalam neraca saldo."
      ],
      sections: [
        {
          heading: "1. Akun dan Akun T",
          paragraphs: [
            "Akun adalah tempat untuk mengelompokkan kenaikan dan penurunan elemen laporan keuangan. Setiap jenis transaksi tidak dicampur dalam satu daftar umum, tetapi diklasifikasikan ke akun yang sesuai, seperti Kas, Piutang Usaha, Perlengkapan, Peralatan, Utang Usaha, Modal, Pendapatan Jasa, dan Beban Sewa.",
            "Akun T digunakan sebagai bentuk sederhana untuk memahami mekanisme debit dan kredit. Sisi kiri akun disebut debit, sedangkan sisi kanan disebut kredit. Debit dan kredit bukan berarti baik atau buruk; keduanya hanya menunjukkan sisi pencatatan.",
            "Saldo normal akun menunjukkan sisi tempat akun tersebut biasanya bertambah. Aset dan beban memiliki saldo normal debit. Liabilitas, ekuitas, dan pendapatan memiliki saldo normal kredit."
          ],
          bullets: [
            "Debit = sisi kiri akun.",
            "Kredit = sisi kanan akun.",
            "Saldo akun = selisih total debit dan total kredit."
          ]
        },
        {
          heading: "2. Aturan Debit dan Kredit",
          paragraphs: [
            "Aturan debit dan kredit mengikuti posisi elemen dalam persamaan dasar akuntansi. Aset bertambah di debit dan berkurang di kredit. Liabilitas serta ekuitas bertambah di kredit dan berkurang di debit.",
            "Pendapatan meningkatkan ekuitas, sehingga pendapatan bertambah di kredit. Beban mengurangi ekuitas, sehingga beban bertambah di debit. Dividen atau prive juga mengurangi ekuitas, sehingga bertambah di debit.",
            "Kesalahan umum mahasiswa adalah menghafal debit sebagai uang masuk dan kredit sebagai uang keluar. Cara ini tidak tepat karena pembelian perlengkapan tunai, misalnya, mencatat Perlengkapan di debit dan Kas di kredit. Debit-kredit harus dilihat dari jenis akun."
          ],
          bullets: [
            "Aset: + debit, - kredit.",
            "Liabilitas: + kredit, - debit.",
            "Ekuitas: + kredit, - debit.",
            "Pendapatan: + kredit.",
            "Beban: + debit.",
            "Dividen/prive: + debit."
          ]
        },
        {
          heading: "3. Jurnal Umum",
          paragraphs: [
            "Jurnal umum adalah catatan awal transaksi secara kronologis. Setiap jurnal biasanya memuat tanggal, akun yang didebit, akun yang dikredit, jumlah, dan keterangan singkat.",
            "Akun debit ditulis lebih dahulu, lalu akun kredit ditulis setelahnya. Total debit harus sama dengan total kredit. Jika tidak sama, jurnal tidak seimbang dan tidak dapat diposting dengan benar.",
            "Jurnal membantu menyediakan audit trail atau jejak pencatatan. Ketika ada kesalahan, perusahaan dapat menelusuri transaksi dari laporan keuangan kembali ke buku besar, jurnal, dan dokumen sumber."
          ],
          bullets: [
            "Jurnal mencatat transaksi berdasarkan urutan waktu.",
            "Setiap jurnal minimal memiliki satu debit dan satu kredit.",
            "Jumlah debit dan kredit wajib sama."
          ]
        },
        {
          heading: "4. Buku Besar dan Posting",
          paragraphs: [
            "Buku besar adalah kumpulan seluruh akun yang digunakan oleh perusahaan. Jika jurnal menunjukkan urutan transaksi, buku besar menunjukkan saldo masing-masing akun.",
            "Posting adalah proses memindahkan informasi dari jurnal ke buku besar. Akun yang didebit di jurnal diposting ke sisi debit akun terkait, sedangkan akun yang dikredit diposting ke sisi kredit akun terkait.",
            "Setelah posting, saldo setiap akun dapat dihitung. Saldo akhir akun kemudian dipakai untuk menyusun neraca saldo."
          ],
          bullets: [
            "Jurnal = catatan kronologis.",
            "Buku besar = catatan per akun.",
            "Posting = memindahkan data dari jurnal ke buku besar."
          ]
        },
        {
          heading: "5. Neraca Saldo",
          paragraphs: [
            "Neraca saldo adalah daftar akun beserta saldo debit atau kreditnya pada tanggal tertentu. Tujuannya adalah membuktikan kesamaan total debit dan total kredit setelah posting.",
            "Neraca saldo yang seimbang tidak menjamin seluruh pencatatan benar. Kesalahan masih mungkin terjadi, misalnya transaksi tidak dicatat, transaksi dicatat pada akun yang salah, atau debit dan kredit sama-sama salah jumlah.",
            "Neraca saldo adalah alat pemeriksa awal. Setelah neraca saldo disusun, proses berikutnya adalah membuat jurnal penyesuaian pada akhir periode."
          ],
          bullets: [
            "Total debit harus sama dengan total kredit.",
            "Neraca saldo membantu menemukan kesalahan ketidakseimbangan.",
            "Neraca saldo tidak mendeteksi semua kesalahan."
          ]
        }
      ],
      workedExamples: [
        {
          title: "Jurnal Dasar Perusahaan Jasa",
          case: "Pemilik menyetor kas Rp30.000.000, membeli perlengkapan kredit Rp2.000.000, menerima pendapatan jasa tunai Rp5.000.000, dan membayar beban sewa Rp1.500.000.",
          solutionSteps: [
            "Setoran modal: Debit Kas Rp30.000.000; Kredit Modal Pemilik Rp30.000.000.",
            "Beli perlengkapan kredit: Debit Perlengkapan Rp2.000.000; Kredit Utang Usaha Rp2.000.000.",
            "Pendapatan jasa tunai: Debit Kas Rp5.000.000; Kredit Pendapatan Jasa Rp5.000.000.",
            "Bayar sewa: Debit Beban Sewa Rp1.500.000; Kredit Kas Rp1.500.000."
          ],
          conclusion: "Semua jurnal seimbang karena total debit dan kredit setiap transaksi sama."
        }
      ],
      practiceReports: [
        {
          title: "Praktik TM 2: Jurnal, Buku Besar, dan Neraca Saldo",
          caseDescription: "Nara Service memiliki transaksi selama bulan Februari. Mahasiswa diminta membuat jurnal umum, posting ke buku besar, dan menyusun neraca saldo.",
          rawData: [
            "1 Feb: Pemilik menyetor kas Rp25.000.000.",
            "2 Feb: Membeli perlengkapan tunai Rp1.500.000.",
            "3 Feb: Membeli peralatan secara kredit Rp8.000.000.",
            "5 Feb: Menerima pendapatan jasa tunai Rp4.000.000.",
            "8 Feb: Memberikan jasa secara kredit Rp3.000.000.",
            "10 Feb: Membayar beban sewa Rp2.000.000.",
            "15 Feb: Membayar sebagian utang usaha Rp2.500.000.",
            "20 Feb: Menerima kas dari piutang Rp1.000.000.",
            "25 Feb: Membayar beban listrik Rp600.000.",
            "28 Feb: Pemilik mengambil prive Rp700.000."
          ],
          requiredOutputs: [
            "Jurnal umum.",
            "Saldo akun buku besar.",
            "Neraca saldo per 28 Februari."
          ],
          stepByStepSolution: [
            "Jurnal dibuat berdasarkan aturan debit-kredit.",
            "Saldo Kas = Rp25.000.000 - Rp1.500.000 + Rp4.000.000 - Rp2.000.000 - Rp2.500.000 + Rp1.000.000 - Rp600.000 - Rp700.000 = Rp22.700.000 debit.",
            "Saldo Piutang Usaha = Rp3.000.000 - Rp1.000.000 = Rp2.000.000 debit.",
            "Saldo Perlengkapan = Rp1.500.000 debit.",
            "Saldo Peralatan = Rp8.000.000 debit.",
            "Saldo Utang Usaha = Rp8.000.000 - Rp2.500.000 = Rp5.500.000 kredit.",
            "Saldo Modal Pemilik = Rp25.000.000 kredit.",
            "Saldo Pendapatan Jasa = Rp7.000.000 kredit.",
            "Saldo Beban Sewa = Rp2.000.000 debit.",
            "Saldo Beban Listrik = Rp600.000 debit.",
            "Saldo Prive = Rp700.000 debit.",
            "Total debit = Rp37.500.000 dan total kredit = Rp37.500.000."
          ],
          finalReport: {
            title: "Nara Service - Neraca Saldo per 28 Februari",
            columns: ["Akun", "Debit", "Kredit"],
            rows: [
              ["Kas", "Rp22.700.000", ""],
              ["Piutang Usaha", "Rp2.000.000", ""],
              ["Perlengkapan", "Rp1.500.000", ""],
              ["Peralatan", "Rp8.000.000", ""],
              ["Utang Usaha", "", "Rp5.500.000"],
              ["Modal Pemilik", "", "Rp25.000.000"],
              ["Pendapatan Jasa", "", "Rp7.000.000"],
              ["Beban Sewa", "Rp2.000.000", ""],
              ["Beban Listrik", "Rp600.000", ""],
              ["Prive", "Rp700.000", ""],
              ["Total", "Rp37.500.000", "Rp37.500.000"]
            ],
            notes: ["Neraca saldo seimbang, tetapi belum berarti seluruh transaksi pasti benar."]
          }
        }
      ],
      templates: [
        {
          title: "Template Jurnal Umum",
          purpose: "Mencatat transaksi secara kronologis sebelum diposting ke buku besar.",
          columns: ["Tanggal", "Nama Akun dan Keterangan", "Debit", "Kredit"],
          notes: ["Akun debit ditulis dahulu.", "Akun kredit ditulis setelahnya.", "Total debit dan kredit harus sama."]
        },
        {
          title: "Template Buku Besar Akun T",
          purpose: "Mengelompokkan transaksi berdasarkan akun untuk menghitung saldo akhir.",
          columns: ["Tanggal", "Keterangan", "Debit", "Kredit", "Saldo"],
          notes: ["Posting dilakukan dari jurnal.", "Saldo normal bergantung pada jenis akun."]
        },
        {
          title: "Template Neraca Saldo",
          purpose: "Meringkas saldo akun dan memeriksa kesamaan total debit-kredit.",
          columns: ["Nama Akun", "Debit", "Kredit"],
          notes: ["Hanya menunjukkan keseimbangan matematis.", "Tidak menjamin bebas dari salah klasifikasi."]
        }
      ],
      commonMistakes: [
        "Menganggap debit sebagai uang masuk dan kredit sebagai uang keluar.",
        "Mencatat pendapatan di debit.",
        "Mencatat pembelian aset sebagai beban.",
        "Tidak menyeimbangkan debit dan kredit dalam jurnal.",
        "Mengira neraca saldo seimbang berarti semua pencatatan benar."
      ],
      quickSummary: [
        "Akun digunakan untuk mengelompokkan transaksi.",
        "Debit adalah sisi kiri; kredit adalah sisi kanan.",
        "Aset dan beban bertambah di debit.",
        "Liabilitas, ekuitas, dan pendapatan bertambah di kredit.",
        "Proses pencatatan: analisis transaksi → jurnal → posting → neraca saldo."
      ],
      quiz: [
        {
          question: "Aset bertambah dicatat di...",
          options: ["kredit", "debit", "income summary", "ekuitas"],
          answerIndex: 1,
          explanation: "Aset memiliki saldo normal debit."
        },
        {
          question: "Pendapatan bertambah dicatat di...",
          options: ["debit", "kredit", "aset", "beban"],
          answerIndex: 1,
          explanation: "Pendapatan meningkatkan ekuitas sehingga bertambah di kredit."
        },
        {
          question: "Fungsi utama neraca saldo adalah...",
          options: ["menjamin semua akun benar", "membuktikan total debit sama dengan total kredit", "menghapus akun sementara", "mencatat transaksi pertama kali"],
          answerIndex: 1,
          explanation: "Neraca saldo memeriksa kesamaan total debit dan kredit."
        }
      ],
      flashcards: [
        { front: "Apa itu akun?", back: "Tempat untuk mencatat kenaikan dan penurunan elemen laporan keuangan tertentu." },
        { front: "Apa itu jurnal?", back: "Catatan awal transaksi secara kronologis." },
        { front: "Apa itu posting?", back: "Proses memindahkan data dari jurnal ke buku besar." },
        { front: "Apa itu neraca saldo?", back: "Daftar akun dan saldo debit/kreditnya pada tanggal tertentu." }
      ],
      bankQuestions: [
        {
          type: "journal",
          question: "Buat jurnal untuk pembelian perlengkapan Rp2.500.000 secara kredit.",
          answerGuide: "Debit Perlengkapan Rp2.500.000; Kredit Utang Usaha Rp2.500.000."
        },
        {
          type: "essay",
          question: "Jelaskan perbedaan jurnal dan buku besar.",
          answerGuide: "Jurnal mencatat transaksi secara kronologis, sedangkan buku besar mengelompokkan transaksi berdasarkan akun."
        },
        {
          type: "case",
          question: "Neraca saldo seimbang, tetapi transaksi pembelian peralatan tunai belum dicatat. Jelaskan mengapa neraca saldo tetap seimbang.",
          answerGuide: "Karena transaksi tidak masuk sama sekali, tidak ada debit dan kredit yang memengaruhi total. Neraca saldo tetap seimbang tetapi tidak lengkap."
        }
      ]
    },

    {
      meeting: 3,
      title: "Adjusting the Accounts",
      topicGroup: "Basis Akrual, Jurnal Penyesuaian, dan Neraca Saldo Disesuaikan",
      references: ["WKK Chapter 3: Adjusting the Accounts", "Silabus AKDAS FEB UNAIR TM 3"],
      learningObjectives: [
        "Menjelaskan timing issues dalam akuntansi.",
        "Membedakan fiscal year dan calendar year.",
        "Membedakan cash-basis accounting dan accrual-basis accounting.",
        "Menjelaskan prinsip pengakuan pendapatan dan beban.",
        "Membuat jurnal penyesuaian untuk deferrals dan accruals.",
        "Menyusun neraca saldo disesuaikan dan menjelaskan hubungannya dengan laporan keuangan."
      ],
      prerequisite: [
        "Memahami jurnal umum, buku besar, dan neraca saldo.",
        "Memahami saldo normal akun aset, liabilitas, pendapatan, dan beban."
      ],
      conceptMap: [
        "Neraca saldo sebelum penyesuaian belum tentu menunjukkan saldo yang benar.",
        "Basis akrual mengakui pendapatan saat diperoleh dan beban saat terjadi.",
        "Penyesuaian diperlukan untuk deferrals dan accruals.",
        "Penyesuaian menghasilkan neraca saldo disesuaikan.",
        "Neraca saldo disesuaikan menjadi dasar laporan keuangan."
      ],
      sections: [
        {
          heading: "1. Timing Issues dan Periode Akuntansi",
          paragraphs: [
            "Timing issues muncul karena penerimaan atau pembayaran kas tidak selalu terjadi pada periode yang sama dengan saat pendapatan diperoleh atau beban terjadi. Akuntansi perlu menentukan periode yang tepat agar laporan keuangan tidak menyesatkan.",
            "Calendar year adalah periode akuntansi yang berakhir pada 31 Desember. Fiscal year adalah periode akuntansi satu tahun yang dapat berakhir selain 31 Desember. Pemilihan periode akuntansi memengaruhi kapan perusahaan menutup buku dan menyusun laporan.",
            "Tanpa pembagian periode, perusahaan sulit mengukur kinerja secara berkala. Karena itu, pendapatan dan beban harus ditempatkan pada periode yang benar."
          ],
          bullets: ["Calendar year berakhir 31 Desember.", "Fiscal year dapat berakhir selain 31 Desember.", "Periode akuntansi memungkinkan pelaporan berkala."]
        },
        {
          heading: "2. Cash Basis dan Accrual Basis",
          paragraphs: [
            "Cash basis mengakui pendapatan ketika kas diterima dan beban ketika kas dibayar. Pendekatan ini sederhana, tetapi tidak selalu mencerminkan kegiatan ekonomi yang sebenarnya.",
            "Accrual basis mengakui pendapatan ketika barang atau jasa telah diberikan, dan mengakui beban ketika manfaat telah digunakan atau kewajiban telah terjadi. Basis ini digunakan dalam pelaporan keuangan karena lebih menggambarkan kinerja periode berjalan.",
            "Karena basis akrual tidak hanya mengikuti arus kas, maka jurnal penyesuaian diperlukan pada akhir periode."
          ],
          bullets: [
            "Cash basis: fokus pada kas masuk dan kas keluar.",
            "Accrual basis: fokus pada pendapatan diperoleh dan beban terjadi.",
            "Jurnal penyesuaian adalah konsekuensi dari basis akrual."
          ]
        },
        {
          heading: "3. Deferrals dan Accruals",
          paragraphs: [
            "Deferrals terjadi ketika kas dibayar atau diterima lebih dahulu sebelum beban atau pendapatan diakui sepenuhnya. Contohnya beban dibayar di muka dan pendapatan diterima di muka.",
            "Accruals terjadi ketika pendapatan atau beban sudah terjadi tetapi kas belum diterima atau dibayar. Contohnya pendapatan masih harus diterima dan beban masih harus dibayar.",
            "Keempat jenis penyesuaian ini membantu laporan keuangan menyajikan pendapatan, beban, aset, dan liabilitas secara lebih tepat."
          ],
          bullets: [
            "Prepaid expenses: aset berubah menjadi beban saat manfaat digunakan.",
            "Unearned revenues: liabilitas berubah menjadi pendapatan saat jasa diberikan.",
            "Accrued revenues: pendapatan sudah diperoleh tetapi kas belum diterima.",
            "Accrued expenses: beban sudah terjadi tetapi kas belum dibayar."
          ]
        },
        {
          heading: "4. Neraca Saldo Disesuaikan",
          paragraphs: [
            "Neraca saldo disesuaikan disusun setelah jurnal penyesuaian dibuat dan diposting. Neraca ini memuat saldo akun yang sudah mencerminkan kondisi akhir periode.",
            "Akun pendapatan dan beban dari neraca saldo disesuaikan digunakan untuk menyusun laporan laba rugi. Akun aset, liabilitas, dan ekuitas digunakan untuk menyusun laporan posisi keuangan.",
            "Jika penyesuaian tidak dibuat, laporan keuangan dapat salah saji. Misalnya beban terlalu rendah, aset terlalu tinggi, pendapatan terlalu tinggi, atau liabilitas terlalu rendah."
          ],
          bullets: [
            "Adjusted trial balance disusun setelah adjustment.",
            "Menjadi dasar penyusunan laporan keuangan.",
            "Mencegah salah periode dalam pengakuan pendapatan dan beban."
          ]
        }
      ],
      workedExamples: [
        {
          title: "Jurnal Penyesuaian Dasar",
          case: "Perusahaan membayar asuransi Rp12.000.000 untuk 12 bulan pada 1 Januari. Pada 31 Januari, perlu dibuat penyesuaian.",
          solutionSteps: [
            "Beban asuransi per bulan = Rp12.000.000 / 12 = Rp1.000.000.",
            "Manfaat asuransi yang sudah digunakan selama Januari = Rp1.000.000.",
            "Jurnal: Debit Beban Asuransi Rp1.000.000; Kredit Asuransi Dibayar di Muka Rp1.000.000."
          ],
          conclusion: "Aset berkurang karena manfaat telah digunakan, dan beban bertambah pada periode yang tepat."
        }
      ],
      practiceReports: [
        {
          title: "Praktik TM 3: Neraca Saldo Disesuaikan",
          caseDescription: "Nara Service memiliki beberapa saldo sebelum penyesuaian dan informasi akhir periode. Mahasiswa diminta membuat jurnal penyesuaian dan ringkasan adjusted trial balance.",
          rawData: [
            "Perlengkapan sebelum penyesuaian Rp3.000.000.",
            "Perlengkapan tersisa akhir periode Rp1.100.000.",
            "Asuransi Dibayar di Muka Rp2.400.000 untuk 12 bulan, sudah berjalan 2 bulan.",
            "Peralatan Rp18.000.000, depresiasi periode berjalan Rp1.500.000.",
            "Pendapatan Diterima di Muka Rp4.000.000, jasa yang sudah diberikan Rp1.500.000.",
            "Gaji yang masih harus dibayar Rp900.000."
          ],
          requiredOutputs: [
            "Jurnal penyesuaian.",
            "Dampak adjustment terhadap aset, liabilitas, pendapatan, dan beban.",
            "Ringkasan akun yang berubah setelah penyesuaian."
          ],
          stepByStepSolution: [
            "Perlengkapan terpakai = Rp3.000.000 - Rp1.100.000 = Rp1.900.000. Jurnal: Debit Beban Perlengkapan; Kredit Perlengkapan.",
            "Beban asuransi = Rp2.400.000 / 12 × 2 = Rp400.000. Jurnal: Debit Beban Asuransi; Kredit Asuransi Dibayar di Muka.",
            "Depresiasi: Debit Beban Depresiasi Rp1.500.000; Kredit Akumulasi Depresiasi Peralatan Rp1.500.000.",
            "Pendapatan yang sudah diperoleh: Debit Pendapatan Diterima di Muka Rp1.500.000; Kredit Pendapatan Jasa Rp1.500.000.",
            "Gaji masih harus dibayar: Debit Beban Gaji Rp900.000; Kredit Utang Gaji Rp900.000."
          ],
          finalReport: {
            title: "Ringkasan Jurnal Penyesuaian Nara Service",
            columns: ["Akun Debit", "Akun Kredit", "Jumlah"],
            rows: [
              ["Beban Perlengkapan", "Perlengkapan", "Rp1.900.000"],
              ["Beban Asuransi", "Asuransi Dibayar di Muka", "Rp400.000"],
              ["Beban Depresiasi", "Akumulasi Depresiasi Peralatan", "Rp1.500.000"],
              ["Pendapatan Diterima di Muka", "Pendapatan Jasa", "Rp1.500.000"],
              ["Beban Gaji", "Utang Gaji", "Rp900.000"]
            ],
            notes: ["Setiap penyesuaian minimal memengaruhi satu akun laporan laba rugi dan satu akun laporan posisi keuangan."]
          }
        }
      ],
      templates: [
        {
          title: "Template Jurnal Penyesuaian",
          purpose: "Mencatat adjustment akhir periode untuk menerapkan basis akrual.",
          columns: ["Tanggal", "Akun Debit", "Akun Kredit", "Jumlah", "Jenis Penyesuaian"],
          notes: ["Jenis penyesuaian: prepaid expense, unearned revenue, accrued revenue, accrued expense."]
        },
        {
          title: "Template Neraca Saldo Disesuaikan",
          purpose: "Menampilkan saldo akun setelah penyesuaian.",
          columns: ["Nama Akun", "Debit", "Kredit"],
          notes: ["Pendapatan dan beban masuk laporan laba rugi.", "Aset, liabilitas, dan ekuitas masuk laporan posisi keuangan."]
        }
      ],
      commonMistakes: [
        "Mengakui pendapatan hanya saat kas diterima.",
        "Mengakui beban hanya saat kas dibayar.",
        "Tidak menyesuaikan prepaid expense yang sudah terpakai.",
        "Langsung mengakui uang muka pelanggan sebagai pendapatan.",
        "Tidak mencatat accrued expenses."
      ],
      quickSummary: [
        "Jurnal penyesuaian diperlukan karena akuntansi memakai basis akrual.",
        "Deferrals mencakup prepaid expenses dan unearned revenues.",
        "Accruals mencakup accrued revenues dan accrued expenses.",
        "Adjusted trial balance menjadi dasar laporan keuangan."
      ],
      quiz: [
        {
          question: "Pendapatan diterima di muka pada awalnya dicatat sebagai...",
          options: ["aset", "liabilitas", "beban", "dividen"],
          answerIndex: 1,
          explanation: "Perusahaan masih memiliki kewajiban memberikan barang/jasa."
        },
        {
          question: "Beban yang sudah terjadi tetapi belum dibayar disebut...",
          options: ["prepaid expense", "unearned revenue", "accrued expense", "owner's equity"],
          answerIndex: 2,
          explanation: "Accrued expense adalah beban yang sudah terjadi tetapi belum dibayar."
        },
        {
          question: "Tujuan adjustment adalah...",
          options: ["menghapus semua akun", "menempatkan pendapatan dan beban pada periode yang benar", "mengganti buku besar", "menutup akun kas"],
          answerIndex: 1,
          explanation: "Adjustment memastikan laporan keuangan sesuai basis akrual."
        }
      ],
      flashcards: [
        { front: "Apa itu accrual basis?", back: "Pendapatan diakui saat diperoleh dan beban diakui saat terjadi, bukan semata-mata saat kas bergerak." },
        { front: "Apa itu prepaid expense?", back: "Pembayaran di muka yang awalnya aset dan menjadi beban saat manfaat digunakan." },
        { front: "Apa itu accrued revenue?", back: "Pendapatan yang sudah diperoleh tetapi belum diterima kas atau belum dicatat." },
        { front: "Apa itu adjusted trial balance?", back: "Neraca saldo setelah jurnal penyesuaian diposting." }
      ],
      bankQuestions: [
        {
          type: "calculation",
          question: "Sewa dibayar di muka Rp18.000.000 untuk 6 bulan. Pada akhir bulan pertama, buat jurnal penyesuaian.",
          answerGuide: "Beban sewa = Rp18.000.000 / 6 = Rp3.000.000. Debit Beban Sewa Rp3.000.000; Kredit Sewa Dibayar di Muka Rp3.000.000."
        },
        {
          type: "essay",
          question: "Mengapa basis akrual lebih informatif dibanding cash basis untuk laporan keuangan?",
          answerGuide: "Basis akrual mencerminkan pendapatan saat diperoleh dan beban saat terjadi, sehingga kinerja periode berjalan lebih akurat daripada hanya mengikuti arus kas."
        },
        {
          type: "case",
          question: "Jika perusahaan tidak mencatat utang gaji akhir periode, apa dampaknya?",
          answerGuide: "Beban dan liabilitas terlalu rendah, laba bersih dan ekuitas terlalu tinggi."
        }
      ]
    },

    {
      meeting: 4,
      title: "Completing the Accounting Cycle",
      topicGroup: "Worksheet, Closing Entries, Post-Closing Trial Balance, dan Classified Statement of Financial Position",
      references: ["WKK Chapter 4: Completing the Accounting Cycle", "Silabus AKDAS FEB UNAIR TM 4"],
      learningObjectives: [
        "Menjelaskan fungsi worksheet.",
        "Menggunakan worksheet untuk menghubungkan trial balance, adjustments, adjusted trial balance, income statement, dan statement of financial position.",
        "Membedakan temporary accounts dan permanent accounts.",
        "Membuat closing entries.",
        "Menyusun post-closing trial balance.",
        "Menyusun classified statement of financial position."
      ],
      prerequisite: [
        "Memahami neraca saldo dan jurnal penyesuaian.",
        "Memahami akun pendapatan, beban, aset, liabilitas, ekuitas, dan dividen/prive."
      ],
      conceptMap: [
        "Trial balance disesuaikan dengan adjustment.",
        "Adjusted trial balance digunakan untuk laporan keuangan.",
        "Worksheet membantu proses akhir periode.",
        "Akun sementara ditutup.",
        "Post-closing trial balance berisi akun permanen.",
        "Laporan posisi keuangan diklasifikasikan."
      ],
      sections: [
        {
          heading: "1. Worksheet",
          paragraphs: [
            "Worksheet adalah alat bantu kerja akuntansi untuk menyusun laporan keuangan dan adjustment secara lebih teratur. Worksheet bukan laporan resmi, bukan jurnal, dan bukan buku besar.",
            "Worksheet 10 kolom biasanya memuat trial balance, adjustments, adjusted trial balance, income statement, dan statement of financial position. Setiap bagian memiliki kolom debit dan kredit.",
            "Kegunaan worksheet adalah membantu akuntan melihat hubungan antarsaldo akun dalam satu tempat, sehingga kesalahan penyesuaian atau pemindahan akun lebih mudah ditemukan."
          ],
          bullets: ["Worksheet membantu proses, tetapi tidak menggantikan jurnal.", "Worksheet bukan laporan keuangan resmi.", "Akun pendapatan dan beban masuk kolom income statement."]
        },
        {
          heading: "2. Temporary dan Permanent Accounts",
          paragraphs: [
            "Temporary accounts adalah akun yang digunakan untuk mengukur aktivitas satu periode dan ditutup pada akhir periode. Contohnya pendapatan, beban, dan dividen/prive.",
            "Permanent accounts adalah akun yang saldonya dibawa ke periode berikutnya. Contohnya aset, liabilitas, dan ekuitas.",
            "Jika akun sementara tidak ditutup, pendapatan dan beban periode lama akan tercampur dengan periode baru. Jika akun permanen ditutup, saldo aset, liabilitas, atau ekuitas akan salah."
          ],
          bullets: ["Temporary: pendapatan, beban, dividen/prive.", "Permanent: aset, liabilitas, ekuitas.", "Temporary ditutup; permanent tidak ditutup."]
        },
        {
          heading: "3. Closing Entries",
          paragraphs: [
            "Closing entries adalah jurnal akhir periode yang dibuat untuk menutup akun sementara ke akun ekuitas. Proses ini membuat saldo pendapatan, beban, dan dividen/prive menjadi nol.",
            "Secara umum, pendapatan ditutup ke Income Summary, beban ditutup ke Income Summary, Income Summary ditutup ke modal atau retained earnings, lalu dividen/prive ditutup ke modal atau retained earnings.",
            "Income Summary hanya akun sementara untuk proses penutupan. Setelah penutupan selesai, Income Summary juga bersaldo nol."
          ],
          bullets: [
            "Debit Pendapatan; Kredit Income Summary.",
            "Debit Income Summary; Kredit Beban.",
            "Jika laba: Debit Income Summary; Kredit Modal/Retained Earnings.",
            "Jika rugi: Debit Modal/Retained Earnings; Kredit Income Summary.",
            "Debit Modal/Retained Earnings; Kredit Dividen/Prive."
          ]
        },
        {
          heading: "4. Post-Closing Trial Balance",
          paragraphs: [
            "Post-closing trial balance disusun setelah jurnal penutup diposting. Tujuannya memastikan akun permanen tetap seimbang setelah penutupan.",
            "Post-closing trial balance hanya berisi aset, liabilitas, dan ekuitas. Akun pendapatan, beban, dan dividen/prive tidak muncul karena saldonya sudah nol.",
            "Post-closing trial balance menjadi saldo awal untuk periode akuntansi berikutnya."
          ],
          bullets: ["Disusun setelah closing entries.", "Hanya akun permanen.", "Menjadi titik awal periode berikutnya."]
        },
        {
          heading: "5. Classified Statement of Financial Position",
          paragraphs: [
            "Classified statement of financial position menyajikan aset, liabilitas, dan ekuitas dalam klasifikasi yang membantu pembaca memahami likuiditas dan struktur pendanaan perusahaan.",
            "Aset diklasifikasikan menjadi current assets dan non-current assets. Liabilitas diklasifikasikan menjadi current liabilities dan non-current liabilities. Ekuitas disajikan sesuai bentuk entitas.",
            "Klasifikasi ini penting karena tidak semua aset memiliki tingkat likuiditas yang sama dan tidak semua kewajiban jatuh tempo dalam waktu dekat."
          ],
          bullets: ["Current assets: kas, piutang, persediaan, prepaid.", "Non-current assets: peralatan, bangunan, tanah, aset takberwujud.", "Current liabilities: utang usaha, utang gaji, unearned revenue.", "Non-current liabilities: pinjaman jangka panjang, obligasi."]
        }
      ],
      workedExamples: [
        {
          title: "Closing Entries Pendapatan dan Beban",
          case: "Pendapatan Jasa Rp20.000.000, Beban Gaji Rp7.000.000, Beban Sewa Rp3.000.000, Beban Listrik Rp1.000.000.",
          solutionSteps: [
            "Tutup pendapatan: Debit Pendapatan Jasa Rp20.000.000; Kredit Income Summary Rp20.000.000.",
            "Total beban = Rp11.000.000.",
            "Tutup beban: Debit Income Summary Rp11.000.000; Kredit Beban Gaji Rp7.000.000; Kredit Beban Sewa Rp3.000.000; Kredit Beban Listrik Rp1.000.000.",
            "Income Summary bersaldo kredit Rp9.000.000, berarti laba bersih.",
            "Tutup laba: Debit Income Summary Rp9.000.000; Kredit Modal/Retained Earnings Rp9.000.000."
          ],
          conclusion: "Akun pendapatan dan beban menjadi nol, sedangkan laba bersih dipindahkan ke ekuitas."
        }
      ],
      practiceReports: [
        {
          title: "Praktik TM 4: Worksheet dan Jurnal Penutup",
          caseDescription: "Data akhir periode Nara Consulting digunakan untuk membuat ringkasan laba rugi, jurnal penutup, dan post-closing trial balance.",
          rawData: [
            "Pendapatan Jasa setelah penyesuaian Rp19.000.000.",
            "Beban Gaji Rp5.800.000.",
            "Beban Sewa Rp1.600.000.",
            "Beban Perlengkapan Rp1.800.000.",
            "Beban Asuransi Rp600.000.",
            "Beban Depresiasi Rp2.000.000.",
            "Prive Rp1.000.000.",
            "Modal sebelum penutupan Rp25.000.000."
          ],
          requiredOutputs: [
            "Hitung laba bersih.",
            "Buat jurnal penutup.",
            "Hitung modal akhir.",
            "Tentukan akun yang muncul di post-closing trial balance."
          ],
          stepByStepSolution: [
            "Total beban = Rp5.800.000 + Rp1.600.000 + Rp1.800.000 + Rp600.000 + Rp2.000.000 = Rp11.800.000.",
            "Laba bersih = Rp19.000.000 - Rp11.800.000 = Rp7.200.000.",
            "Tutup pendapatan ke Income Summary.",
            "Tutup seluruh beban ke Income Summary.",
            "Tutup laba bersih ke Modal.",
            "Tutup prive ke Modal.",
            "Modal akhir = Rp25.000.000 + Rp7.200.000 - Rp1.000.000 = Rp31.200.000."
          ],
          finalReport: {
            title: "Ringkasan Penutupan Nara Consulting",
            columns: ["Komponen", "Jumlah"],
            rows: [
              ["Pendapatan Jasa", "Rp19.000.000"],
              ["Total Beban", "Rp11.800.000"],
              ["Laba Bersih", "Rp7.200.000"],
              ["Modal Sebelum Penutupan", "Rp25.000.000"],
              ["Tambah: Laba Bersih", "Rp7.200.000"],
              ["Kurang: Prive", "Rp1.000.000"],
              ["Modal Akhir", "Rp31.200.000"]
            ],
            notes: ["Akun sementara tidak muncul di post-closing trial balance."]
          }
        }
      ],
      templates: [
        {
          title: "Template Worksheet 10 Kolom",
          purpose: "Menghubungkan trial balance, adjustments, adjusted trial balance, income statement, dan statement of financial position.",
          columns: ["Account", "TB Dr", "TB Cr", "Adj Dr", "Adj Cr", "ATB Dr", "ATB Cr", "IS Dr", "IS Cr", "SFP Dr/Cr"],
          notes: ["Worksheet adalah alat bantu internal.", "Laba/rugi bersih digunakan untuk menyeimbangkan kolom laporan."]
        },
        {
          title: "Template Jurnal Penutup",
          purpose: "Menutup akun sementara pada akhir periode.",
          columns: ["No", "Akun Debit", "Akun Kredit", "Jumlah"],
          notes: ["Tutup pendapatan, beban, Income Summary, dan dividen/prive."]
        }
      ],
      commonMistakes: [
        "Menganggap worksheet sebagai laporan resmi.",
        "Menutup akun permanen seperti kas dan utang.",
        "Lupa menutup dividen/prive.",
        "Memasukkan aset ke income statement.",
        "Mengira post-closing trial balance sama dengan adjusted trial balance."
      ],
      quickSummary: [
        "Worksheet membantu proses akhir periode.",
        "Closing entries menutup akun sementara.",
        "Post-closing trial balance hanya memuat akun permanen.",
        "Classified statement of financial position menyajikan aset dan liabilitas berdasarkan klasifikasi."
      ],
      quiz: [
        {
          question: "Akun yang termasuk temporary account adalah...",
          options: ["Kas", "Utang Usaha", "Pendapatan Jasa", "Peralatan"],
          answerIndex: 2,
          explanation: "Pendapatan Jasa ditutup pada akhir periode."
        },
        {
          question: "Post-closing trial balance berisi...",
          options: ["semua akun termasuk beban", "hanya akun permanen", "hanya pendapatan", "hanya beban"],
          answerIndex: 1,
          explanation: "Akun sementara sudah ditutup sehingga hanya akun permanen yang tersisa."
        },
        {
          question: "Worksheet adalah...",
          options: ["laporan resmi", "alat bantu penyusunan laporan", "akun permanen", "dokumen pengganti jurnal"],
          answerIndex: 1,
          explanation: "Worksheet membantu, tetapi bukan laporan resmi."
        }
      ],
      flashcards: [
        { front: "Apa itu worksheet?", back: "Alat bantu untuk mengorganisasi trial balance, adjustment, adjusted trial balance, dan laporan keuangan." },
        { front: "Apa itu closing entries?", back: "Jurnal untuk menutup akun sementara pada akhir periode." },
        { front: "Apa isi post-closing trial balance?", back: "Aset, liabilitas, dan ekuitas." },
        { front: "Apa itu classified statement of financial position?", back: "Laporan posisi keuangan yang mengelompokkan aset dan liabilitas sesuai klasifikasi." }
      ],
      bankQuestions: [
        {
          type: "calculation",
          question: "Pendapatan Rp32.000.000 dan total beban Rp21.500.000. Hitung laba bersih dan jurnal penutup laba.",
          answerGuide: "Laba bersih Rp10.500.000. Setelah pendapatan dan beban ditutup ke Income Summary, jurnal penutup laba: Debit Income Summary Rp10.500.000; Kredit Modal/Retained Earnings Rp10.500.000."
        },
        {
          type: "essay",
          question: "Mengapa akun pendapatan dan beban perlu ditutup?",
          answerGuide: "Karena keduanya hanya mengukur aktivitas satu periode. Jika tidak ditutup, saldo periode lama akan tercampur dengan periode baru."
        },
        {
          type: "report",
          question: "Sebutkan klasifikasi utama dalam classified statement of financial position.",
          answerGuide: "Current assets, non-current assets, current liabilities, non-current liabilities, dan equity."
        }
      ]
    },

    {
      meeting: 5,
      title: "Accounting for Merchandising Operations",
      topicGroup: "Perusahaan Dagang, Pembelian, Penjualan, HPP, dan Laporan Laba Rugi",
      references: ["WKK Chapter 5: Accounting for Merchandising Operations", "Silabus AKDAS FEB UNAIR TM 5"],
      learningObjectives: [
        "Membedakan perusahaan jasa dan perusahaan dagang.",
        "Menjelaskan siklus operasi perusahaan dagang.",
        "Mencatat pembelian barang dagang dalam sistem perpetual.",
        "Mencatat retur pembelian, diskon pembelian, dan freight-in.",
        "Mencatat penjualan barang dagang, retur penjualan, diskon penjualan, dan HPP.",
        "Menjelaskan cost of goods sold dan gross profit.",
        "Menyusun laporan laba rugi perusahaan dagang."
      ],
      prerequisite: [
        "Menguasai jurnal umum dan debit-kredit.",
        "Memahami laporan laba rugi perusahaan jasa.",
        "Memahami konsep aset, pendapatan, dan beban."
      ],
      conceptMap: [
        "Perusahaan dagang membeli barang untuk dijual kembali.",
        "Inventory adalah aset utama perusahaan dagang.",
        "Penjualan barang menghasilkan sales revenue.",
        "Barang yang dijual menimbulkan cost of goods sold.",
        "Net sales dikurangi cost of goods sold menghasilkan gross profit.",
        "Gross profit dikurangi operating expenses menghasilkan income from operations."
      ],
      sections: [
        {
          heading: "1. Perusahaan Jasa vs Perusahaan Dagang",
          paragraphs: [
            "Perusahaan jasa memperoleh pendapatan terutama dari pemberian jasa. Perusahaan dagang memperoleh pendapatan dari penjualan barang dagang yang sebelumnya dibeli untuk dijual kembali.",
            "Perbedaan utama perusahaan dagang adalah adanya akun Inventory dan Cost of Goods Sold. Inventory menunjukkan barang yang tersedia untuk dijual, sedangkan Cost of Goods Sold menunjukkan biaya barang yang telah terjual.",
            "Siklus operasi perusahaan dagang biasanya lebih panjang daripada perusahaan jasa karena melibatkan pembelian barang, penyimpanan, penjualan, penagihan piutang, dan penerimaan kas."
          ],
          bullets: ["Service company: tidak memiliki inventory untuk dijual kembali.", "Merchandising company: memiliki inventory dan COGS.", "Gross profit = Net Sales - Cost of Goods Sold."]
        },
        {
          heading: "2. Sistem Persediaan Perpetual dan Periodic",
          paragraphs: [
            "Dalam sistem perpetual, akun Inventory diperbarui setiap terjadi pembelian, penjualan, retur, diskon, atau ongkos angkut yang menjadi bagian biaya perolehan. Ketika barang dijual, perusahaan mencatat dua jurnal: satu untuk penjualan dan satu untuk HPP.",
            "Dalam sistem periodic, akun Inventory tidak diperbarui setiap transaksi penjualan. HPP ditentukan pada akhir periode melalui perhitungan fisik persediaan dan perhitungan cost of goods sold.",
            "Pada tingkat dasar, sistem perpetual sering digunakan untuk menunjukkan hubungan langsung antara penjualan dan pengurangan persediaan."
          ],
          bullets: ["Perpetual: inventory diperbarui terus-menerus.", "Periodic: HPP dihitung pada akhir periode.", "Penjualan perpetual membutuhkan jurnal revenue dan jurnal HPP."]
        },
        {
          heading: "3. Pembelian Barang Dagang",
          paragraphs: [
            "Pembelian barang dagang secara kredit dalam sistem perpetual dicatat dengan mendebit Inventory dan mengkredit Accounts Payable. Jika dibayar tunai, kreditnya adalah Cash.",
            "Retur pembelian mengurangi Inventory karena barang dikembalikan kepada pemasok. Diskon pembelian juga mengurangi Inventory karena biaya perolehan barang menjadi lebih rendah.",
            "Freight-in atau ongkos angkut pembelian yang menjadi tanggungan pembeli biasanya ditambahkan ke Inventory karena merupakan bagian dari biaya memperoleh barang sampai siap dijual."
          ],
          bullets: [
            "Pembelian kredit: Debit Inventory; Kredit Accounts Payable.",
            "Retur pembelian: Debit Accounts Payable; Kredit Inventory.",
            "Diskon pembelian: mengurangi Inventory.",
            "Freight-in: menambah Inventory jika menjadi tanggungan pembeli."
          ]
        },
        {
          heading: "4. Penjualan Barang Dagang",
          paragraphs: [
            "Penjualan barang dagang dalam sistem perpetual membutuhkan dua jurnal. Jurnal pertama mencatat pendapatan penjualan. Jurnal kedua mencatat beban pokok penjualan dan pengurangan inventory.",
            "Jika penjualan tunai terjadi, perusahaan mendebit Cash dan mengkredit Sales Revenue. Jika penjualan kredit terjadi, perusahaan mendebit Accounts Receivable dan mengkredit Sales Revenue.",
            "Pada saat yang sama, harga pokok barang yang terjual dicatat dengan mendebit Cost of Goods Sold dan mengkredit Inventory."
          ],
          bullets: [
            "Jurnal penjualan: Debit Cash/Accounts Receivable; Kredit Sales Revenue.",
            "Jurnal HPP: Debit Cost of Goods Sold; Kredit Inventory.",
            "Retur penjualan mengurangi sales revenue dan dapat mengembalikan inventory jika barang masih layak dijual."
          ]
        },
        {
          heading: "5. Laporan Laba Rugi Perusahaan Dagang",
          paragraphs: [
            "Laporan laba rugi perusahaan dagang berbeda dari perusahaan jasa karena memiliki bagian net sales, cost of goods sold, dan gross profit. Net sales dihitung dari sales revenue dikurangi sales returns and allowances serta sales discounts.",
            "Gross profit adalah selisih antara net sales dan cost of goods sold. Gross profit menunjukkan kemampuan perusahaan memperoleh margin dari aktivitas jual beli barang.",
            "Setelah gross profit, laporan laba rugi menyajikan operating expenses. Gross profit dikurangi operating expenses menghasilkan income from operations. Jika ada other income and expense, item tersebut disajikan setelah income from operations."
          ],
          formulas: [
            "Net Sales = Sales Revenue - Sales Returns and Allowances - Sales Discounts",
            "Gross Profit = Net Sales - Cost of Goods Sold",
            "Income from Operations = Gross Profit - Operating Expenses"
          ],
          bullets: [
            "Net sales menunjukkan penjualan bersih.",
            "COGS menunjukkan biaya barang yang terjual.",
            "Gross profit menjadi indikator margin utama perusahaan dagang."
          ]
        }
      ],
      workedExamples: [
        {
          title: "Jurnal Penjualan Barang Dagang Sistem Perpetual",
          case: "Perusahaan menjual barang dagang secara kredit Rp5.000.000 dengan harga pokok Rp3.000.000.",
          solutionSteps: [
            "Catat penjualan kredit: Debit Accounts Receivable Rp5.000.000; Kredit Sales Revenue Rp5.000.000.",
            "Catat HPP: Debit Cost of Goods Sold Rp3.000.000; Kredit Inventory Rp3.000.000.",
            "Piutang bertambah sebesar harga jual, sedangkan inventory berkurang sebesar harga pokok."
          ],
          conclusion: "Sistem perpetual selalu mencatat pendapatan dan HPP pada saat penjualan terjadi."
        }
      ],
      practiceReports: [
        {
          title: "Praktik TM 5: Laporan Laba Rugi Perusahaan Dagang",
          caseDescription: "Nara Mart memiliki data penjualan dan beban selama Maret. Mahasiswa diminta menyusun laporan laba rugi perusahaan dagang.",
          rawData: [
            "Sales Revenue Rp120.000.000.",
            "Sales Returns and Allowances Rp4.000.000.",
            "Sales Discounts Rp2.000.000.",
            "Cost of Goods Sold Rp72.000.000.",
            "Salaries Expense Rp14.000.000.",
            "Rent Expense Rp6.000.000.",
            "Utilities Expense Rp2.500.000.",
            "Advertising Expense Rp3.500.000.",
            "Interest Revenue Rp1.000.000.",
            "Interest Expense Rp1.500.000."
          ],
          requiredOutputs: [
            "Hitung net sales.",
            "Hitung gross profit.",
            "Hitung total operating expenses.",
            "Hitung income from operations.",
            "Hitung net income.",
            "Susun laporan laba rugi."
          ],
          stepByStepSolution: [
            "Net sales = Rp120.000.000 - Rp4.000.000 - Rp2.000.000 = Rp114.000.000.",
            "Gross profit = Rp114.000.000 - Rp72.000.000 = Rp42.000.000.",
            "Operating expenses = Rp14.000.000 + Rp6.000.000 + Rp2.500.000 + Rp3.500.000 = Rp26.000.000.",
            "Income from operations = Rp42.000.000 - Rp26.000.000 = Rp16.000.000.",
            "Other income and expense net = Rp1.000.000 - Rp1.500.000 = -Rp500.000.",
            "Net income = Rp16.000.000 - Rp500.000 = Rp15.500.000."
          ],
          finalReport: {
            title: "Nara Mart - Income Statement for March",
            columns: ["Keterangan", "Jumlah"],
            rows: [
              ["Sales Revenue", "Rp120.000.000"],
              ["Less: Sales Returns and Allowances", "Rp4.000.000"],
              ["Less: Sales Discounts", "Rp2.000.000"],
              ["Net Sales", "Rp114.000.000"],
              ["Cost of Goods Sold", "Rp72.000.000"],
              ["Gross Profit", "Rp42.000.000"],
              ["Salaries Expense", "Rp14.000.000"],
              ["Rent Expense", "Rp6.000.000"],
              ["Utilities Expense", "Rp2.500.000"],
              ["Advertising Expense", "Rp3.500.000"],
              ["Total Operating Expenses", "Rp26.000.000"],
              ["Income from Operations", "Rp16.000.000"],
              ["Interest Revenue", "Rp1.000.000"],
              ["Interest Expense", "Rp1.500.000"],
              ["Net Income", "Rp15.500.000"]
            ],
            notes: ["Format ini menonjolkan net sales, COGS, gross profit, dan income from operations."]
          }
        }
      ],
      templates: [
        {
          title: "Template Jurnal Perusahaan Dagang Sistem Perpetual",
          purpose: "Mencatat pembelian, penjualan, retur, diskon, freight, dan HPP.",
          columns: ["Tanggal", "Transaksi", "Akun Debit", "Akun Kredit", "Jumlah"],
          notes: ["Penjualan barang dagang biasanya butuh dua jurnal: sales dan COGS."]
        },
        {
          title: "Template Income Statement Perusahaan Dagang",
          purpose: "Menyajikan net sales, cost of goods sold, gross profit, operating expenses, dan net income.",
          columns: ["Section", "Keterangan", "Jumlah"],
          notes: ["Gross profit adalah indikator penting dalam perusahaan dagang."]
        }
      ],
      commonMistakes: [
        "Mencatat penjualan barang dagang hanya satu jurnal dalam sistem perpetual.",
        "Lupa mencatat Cost of Goods Sold.",
        "Menganggap sales discounts sebagai beban, padahal disajikan sebagai pengurang sales revenue.",
        "Mengabaikan freight terms.",
        "Tidak membedakan sales returns dengan purchase returns."
      ],
      quickSummary: [
        "Perusahaan dagang memiliki inventory dan COGS.",
        "Net sales = sales revenue - returns - discounts.",
        "Gross profit = net sales - COGS.",
        "Dalam sistem perpetual, penjualan memerlukan jurnal pendapatan dan jurnal HPP."
      ],
      quiz: [
        {
          question: "Akun khas perusahaan dagang yang tidak umum pada perusahaan jasa adalah...",
          options: ["Cash", "Inventory", "Rent Expense", "Accounts Payable"],
          answerIndex: 1,
          explanation: "Inventory adalah barang dagang yang tersedia untuk dijual."
        },
        {
          question: "Gross profit dihitung dengan rumus...",
          options: ["Net Sales - COGS", "Revenue - Liabilities", "Assets - Equity", "Cash - Expenses"],
          answerIndex: 0,
          explanation: "Gross profit adalah penjualan bersih dikurangi harga pokok penjualan."
        },
        {
          question: "Dalam perpetual system, saat penjualan barang dilakukan, perusahaan mencatat...",
          options: ["hanya kas", "sales dan COGS", "hanya inventory", "hanya liabilities"],
          answerIndex: 1,
          explanation: "Perpetual system mencatat pendapatan penjualan dan HPP sekaligus."
        }
      ],
      flashcards: [
        { front: "Apa itu merchandising company?", back: "Perusahaan yang membeli barang untuk dijual kembali." },
        { front: "Apa itu COGS?", back: "Biaya barang yang telah terjual selama periode tertentu." },
        { front: "Apa itu gross profit?", back: "Net sales dikurangi cost of goods sold." },
        { front: "Apa itu net sales?", back: "Sales revenue dikurangi sales returns and allowances dan sales discounts." }
      ],
      bankQuestions: [
        {
          type: "journal",
          question: "Catat penjualan kredit Rp10.000.000 dengan HPP Rp6.000.000 dalam sistem perpetual.",
          answerGuide: "Debit Accounts Receivable Rp10.000.000; Kredit Sales Revenue Rp10.000.000. Lalu Debit Cost of Goods Sold Rp6.000.000; Kredit Inventory Rp6.000.000."
        },
        {
          type: "calculation",
          question: "Sales Revenue Rp80.000.000, returns Rp3.000.000, discounts Rp2.000.000, COGS Rp50.000.000. Hitung net sales dan gross profit.",
          answerGuide: "Net sales = Rp80.000.000 - Rp3.000.000 - Rp2.000.000 = Rp75.000.000. Gross profit = Rp75.000.000 - Rp50.000.000 = Rp25.000.000."
        },
        {
          type: "essay",
          question: "Jelaskan perbedaan income measurement perusahaan jasa dan perusahaan dagang.",
          answerGuide: "Perusahaan jasa mengukur laba dari pendapatan jasa dikurangi beban. Perusahaan dagang menghitung net sales, COGS, gross profit, lalu mengurangi operating expenses."
        }
      ]
    },

    {
      meeting: 6,
      title: "Inventories",
      topicGroup: "Pengendalian Persediaan, Cost Flow Assumptions, FIFO, Average, dan Pelaporan Inventory",
      references: ["WKK Chapter 6: Inventories", "Silabus AKDAS FEB UNAIR TM 6"],
      learningObjectives: [
        "Menjelaskan pentingnya pengendalian inventory.",
        "Membedakan physical inventory count dan pencatatan inventory.",
        "Menjelaskan cost flow assumptions.",
        "Menghitung COGS dan ending inventory menggunakan FIFO dan average.",
        "Membedakan perpetual dan periodic inventory system.",
        "Membandingkan dampak metode persediaan terhadap laba dan laporan posisi keuangan.",
        "Menjelaskan pelaporan inventory dalam laporan keuangan."
      ],
      prerequisite: [
        "Memahami perusahaan dagang, Inventory, dan Cost of Goods Sold.",
        "Memahami sistem perpetual dan periodic secara dasar."
      ],
      conceptMap: [
        "Inventory adalah aset perusahaan dagang.",
        "Barang masuk dan keluar harus dikendalikan.",
        "Metode arus biaya memengaruhi COGS dan ending inventory.",
        "COGS memengaruhi laba.",
        "Ending inventory memengaruhi total aset.",
        "Pelaporan inventory harus memperhatikan nilai yang wajar."
      ],
      sections: [
        {
          heading: "1. Pengendalian Persediaan",
          paragraphs: [
            "Inventory adalah salah satu aset paling penting dalam perusahaan dagang. Inventory yang terlalu sedikit dapat menyebabkan kehilangan penjualan, sedangkan inventory yang terlalu banyak dapat menyebabkan biaya penyimpanan, risiko usang, dan risiko kerusakan.",
            "Pengendalian inventory mencakup pemisahan tugas, otorisasi pembelian, dokumentasi penerimaan barang, pencatatan barang keluar, dan perhitungan fisik persediaan. Perhitungan fisik diperlukan untuk memastikan saldo pencatatan sesuai dengan barang yang benar-benar ada.",
            "Selisih antara catatan inventory dan hasil perhitungan fisik dapat terjadi karena pencurian, kerusakan, kesalahan pencatatan, atau penyusutan fisik."
          ],
          bullets: ["Inventory perlu dikontrol karena rawan hilang, rusak, atau usang.", "Physical count memverifikasi jumlah barang aktual.", "Selisih inventory harus dianalisis dan dicatat."]
        },
        {
          heading: "2. Cost Flow Assumptions",
          paragraphs: [
            "Cost flow assumptions adalah asumsi tentang biaya mana yang dianggap keluar lebih dahulu ketika barang dijual. Asumsi ini tidak selalu sama dengan aliran fisik barang. Tujuannya adalah menentukan cost of goods sold dan ending inventory.",
            "FIFO mengasumsikan barang yang dibeli lebih dahulu dijual lebih dahulu. Dalam kondisi harga naik, FIFO biasanya menghasilkan COGS lebih rendah dan ending inventory lebih tinggi dibanding average.",
            "Average cost menghitung biaya rata-rata per unit. Metode ini meratakan perubahan harga pembelian sehingga COGS dan ending inventory berada di antara efek harga lama dan harga baru."
          ],
          bullets: ["FIFO: first-in, first-out.", "Average: biaya rata-rata per unit.", "Metode persediaan memengaruhi COGS, laba, dan inventory akhir."]
        },
        {
          heading: "3. Perpetual vs Periodic Inventory System",
          paragraphs: [
            "Dalam perpetual system, saldo inventory dan COGS diperbarui setiap terjadi transaksi pembelian dan penjualan. Sistem ini memberikan informasi yang lebih cepat tentang jumlah dan nilai inventory.",
            "Dalam periodic system, perusahaan tidak memperbarui COGS setiap penjualan. Pada akhir periode, perusahaan menghitung inventory fisik dan menentukan COGS melalui formula barang tersedia untuk dijual dikurangi ending inventory.",
            "Kedua sistem dapat menghasilkan perhitungan yang berbeda terutama jika metode average digunakan, karena waktu perhitungan rata-rata dapat berbeda."
          ],
          formulas: [
            "Cost of Goods Available for Sale = Beginning Inventory + Purchases",
            "COGS = Cost of Goods Available for Sale - Ending Inventory"
          ],
          bullets: ["Perpetual: update setiap transaksi.", "Periodic: COGS dihitung akhir periode.", "Physical count tetap penting dalam kedua sistem."]
        },
        {
          heading: "4. Pelaporan Inventory",
          paragraphs: [
            "Inventory biasanya disajikan sebagai current asset dalam laporan posisi keuangan karena diharapkan dijual dalam siklus operasi normal. Nilai inventory yang disajikan memengaruhi total aset.",
            "COGS disajikan di laporan laba rugi. Jika COGS terlalu tinggi, laba bersih menjadi terlalu rendah. Jika COGS terlalu rendah, laba bersih menjadi terlalu tinggi.",
            "Kesalahan inventory dapat memengaruhi dua periode karena ending inventory suatu periode menjadi beginning inventory periode berikutnya."
          ],
          bullets: ["Ending inventory masuk statement of financial position.", "COGS masuk income statement.", "Kesalahan inventory dapat berdampak lintas periode."]
        }
      ],
      workedExamples: [
        {
          title: "FIFO Periodic",
          case: "Beginning inventory 10 unit @Rp10.000. Pembelian: 20 unit @Rp12.000 dan 15 unit @Rp14.000. Terjual 30 unit. Hitung COGS dan ending inventory dengan FIFO periodic.",
          solutionSteps: [
            "Barang tersedia = 10 + 20 + 15 = 45 unit.",
            "Terjual 30 unit, ending inventory = 15 unit.",
            "FIFO menganggap barang awal keluar dulu: COGS = 10×Rp10.000 + 20×Rp12.000 = Rp340.000.",
            "Ending inventory berasal dari pembelian terbaru: 15×Rp14.000 = Rp210.000."
          ],
          conclusion: "Dengan FIFO, ending inventory berasal dari biaya pembelian terbaru."
        }
      ],
      practiceReports: [
        {
          title: "Praktik TM 6: Kartu Persediaan FIFO dan Average",
          caseDescription: "Nara Mart mencatat transaksi inventory bulan April. Mahasiswa diminta menghitung COGS dan ending inventory menggunakan FIFO dan average dalam sistem perpetual.",
          rawData: [
            "1 Apr: Inventory awal 100 unit @Rp10.000.",
            "5 Apr: Pembelian 60 unit @Rp11.000.",
            "10 Apr: Penjualan 90 unit.",
            "15 Apr: Pembelian 80 unit @Rp12.000.",
            "20 Apr: Penjualan 70 unit.",
            "25 Apr: Pembelian 50 unit @Rp13.000."
          ],
          requiredOutputs: [
            "Kartu persediaan FIFO perpetual.",
            "COGS FIFO.",
            "Ending inventory FIFO.",
            "Rata-rata bergerak setelah setiap pembelian.",
            "COGS average.",
            "Ending inventory average."
          ],
          stepByStepSolution: [
            "FIFO: Penjualan 10 Apr sebanyak 90 unit berasal dari inventory awal 90×Rp10.000 = Rp900.000. Sisa awal 10 unit @Rp10.000 dan pembelian 60 unit @Rp11.000.",
            "FIFO: Penjualan 20 Apr sebanyak 70 unit berasal dari 10×Rp10.000 + 60×Rp11.000 = Rp760.000.",
            "FIFO COGS total = Rp900.000 + Rp760.000 = Rp1.660.000.",
            "FIFO ending inventory setelah pembelian 25 Apr = 80 unit @Rp12.000 + 50 unit @Rp13.000 = Rp1.610.000.",
            "Average setelah 5 Apr: total biaya Rp1.000.000 + Rp660.000 = Rp1.660.000 untuk 160 unit; rata-rata Rp10.375/unit.",
            "Penjualan 10 Apr: 90×Rp10.375 = Rp933.750; sisa 70 unit dengan total Rp726.250.",
            "Setelah pembelian 15 Apr: total Rp726.250 + Rp960.000 = Rp1.686.250 untuk 150 unit; rata-rata Rp11.241,67/unit.",
            "Penjualan 20 Apr: 70×Rp11.241,67 ≈ Rp786.916,90; sisa ≈ Rp899.333,10.",
            "Setelah pembelian 25 Apr: ending inventory ≈ Rp899.333,10 + Rp650.000 = Rp1.549.333,10.",
            "Average COGS total ≈ Rp933.750 + Rp786.916,90 = Rp1.720.666,90."
          ],
          finalReport: {
            title: "Ringkasan Perhitungan Inventory Nara Mart",
            columns: ["Metode", "COGS", "Ending Inventory"],
            rows: [
              ["FIFO Perpetual", "Rp1.660.000", "Rp1.610.000"],
              ["Moving Average Perpetual", "±Rp1.720.666,90", "±Rp1.549.333,10"]
            ],
            notes: [
              "Angka average dibulatkan dua desimal.",
              "Perbedaan metode menghasilkan COGS dan ending inventory berbeda."
            ]
          }
        }
      ],
      templates: [
        {
          title: "Template Kartu Persediaan Perpetual",
          purpose: "Mencatat kuantitas dan biaya inventory masuk, keluar, dan saldo akhir.",
          columns: ["Tanggal", "Keterangan", "Masuk Unit", "Masuk Cost", "Keluar Unit", "Keluar Cost", "Saldo Unit", "Saldo Cost"],
          notes: ["Gunakan layer biaya untuk FIFO.", "Hitung ulang average setelah setiap pembelian untuk moving average."]
        },
        {
          title: "Template Perhitungan COGS Periodic",
          purpose: "Menghitung HPP pada akhir periode.",
          columns: ["Beginning Inventory", "Purchases", "Goods Available for Sale", "Ending Inventory", "COGS"],
          notes: ["COGS = Goods Available for Sale - Ending Inventory."]
        }
      ],
      commonMistakes: [
        "Menganggap arus biaya harus selalu sama dengan arus fisik barang.",
        "Lupa menghitung ulang moving average setelah pembelian.",
        "Mencampur periodic average dan moving average perpetual.",
        "Mengira ending inventory tidak memengaruhi laba.",
        "Tidak melakukan physical count karena merasa pencatatan sudah cukup."
      ],
      quickSummary: [
        "Inventory adalah current asset penting bagi perusahaan dagang.",
        "FIFO dan average adalah metode arus biaya.",
        "Metode inventory memengaruhi COGS, gross profit, net income, dan ending inventory.",
        "Perpetual system memperbarui inventory setiap transaksi.",
        "Periodic system menghitung COGS pada akhir periode."
      ],
      quiz: [
        {
          question: "FIFO berarti...",
          options: ["barang terakhir dianggap terjual dahulu", "barang pertama dianggap terjual dahulu", "semua barang dihitung rata-rata", "inventory tidak dicatat"],
          answerIndex: 1,
          explanation: "FIFO adalah first-in, first-out."
        },
        {
          question: "Inventory dilaporkan sebagai...",
          options: ["current asset", "current liability", "expense", "equity"],
          answerIndex: 0,
          explanation: "Inventory biasanya diharapkan dijual dalam siklus operasi normal."
        },
        {
          question: "COGS disajikan dalam...",
          options: ["statement of financial position", "income statement", "statement of changes in equity", "trial balance saja"],
          answerIndex: 1,
          explanation: "COGS adalah beban utama perusahaan dagang dalam laporan laba rugi."
        }
      ],
      flashcards: [
        { front: "Apa itu inventory?", back: "Barang yang dimiliki perusahaan untuk dijual dalam kegiatan normal usaha." },
        { front: "Apa itu FIFO?", back: "Metode arus biaya yang menganggap barang pertama masuk sebagai barang pertama keluar." },
        { front: "Apa itu average cost?", back: "Metode yang menggunakan biaya rata-rata per unit untuk menentukan COGS dan ending inventory." },
        { front: "Apa hubungan inventory dan COGS?", back: "Barang yang terjual dipindahkan dari Inventory menjadi Cost of Goods Sold." }
      ],
      bankQuestions: [
        {
          type: "calculation",
          question: "Beginning inventory 50 unit @Rp8.000; pembelian 100 unit @Rp9.000; terjual 80 unit. Hitung COGS dan ending inventory FIFO periodic.",
          answerGuide: "COGS = 50×Rp8.000 + 30×Rp9.000 = Rp670.000. Ending inventory = 70×Rp9.000 = Rp630.000."
        },
        {
          type: "essay",
          question: "Mengapa kesalahan ending inventory dapat memengaruhi dua periode?",
          answerGuide: "Karena ending inventory periode berjalan menjadi beginning inventory periode berikutnya. Kesalahan nilai akhir akan memengaruhi COGS dan laba di dua periode."
        },
        {
          type: "case",
          question: "Dalam kondisi harga naik, bagaimana FIFO biasanya memengaruhi COGS dan laba dibanding average?",
          answerGuide: "FIFO cenderung menghasilkan COGS lebih rendah dan laba lebih tinggi karena biaya barang lama yang lebih murah dianggap keluar lebih dahulu."
        }
      ]
    },

    {
      meeting: 7,
      title: "Fraud, Internal Control, and Cash",
      topicGroup: "Fraud, Pengendalian Internal, Pengendalian Kas, Rekonsiliasi Bank, dan Pelaporan Kas",
      references: ["WKK Chapter 7: Fraud, Internal Control, and Cash", "Silabus AKDAS FEB UNAIR TM 7"],
      learningObjectives: [
        "Menjelaskan fraud dan kaitannya dengan pengendalian internal.",
        "Menjelaskan tujuan dan prinsip pengendalian internal.",
        "Mengidentifikasi keterbatasan pengendalian internal.",
        "Menjelaskan pengendalian kas penerimaan dan pengeluaran.",
        "Menyusun rekonsiliasi bank sederhana.",
        "Membuat jurnal penyesuaian terkait rekonsiliasi bank.",
        "Menjelaskan pelaporan kas dalam laporan posisi keuangan."
      ],
      prerequisite: [
        "Memahami kas sebagai aset lancar.",
        "Memahami jurnal umum, adjustment, dan laporan posisi keuangan.",
        "Memahami risiko kesalahan dan kecurangan dalam pencatatan."
      ],
      conceptMap: [
        "Kas adalah aset paling likuid dan paling rawan disalahgunakan.",
        "Fraud dapat dicegah/dideteksi melalui internal control.",
        "Internal control mencakup pemisahan tugas, otorisasi, dokumentasi, physical control, dan review.",
        "Bank membantu pengendalian kas.",
        "Rekonsiliasi bank menjelaskan perbedaan saldo kas menurut bank dan buku perusahaan.",
        "Beberapa item rekonsiliasi membutuhkan jurnal."
      ],
      sections: [
        {
          heading: "1. Fraud dan Internal Control",
          paragraphs: [
            "Fraud adalah tindakan tidak jujur yang dilakukan untuk memperoleh keuntungan tidak semestinya atau merugikan pihak lain. Dalam konteks akuntansi, fraud dapat berupa pencurian kas, manipulasi dokumen, pengakuan pendapatan palsu, atau penyembunyian kewajiban.",
            "Internal control adalah proses yang dirancang untuk memberikan keyakinan memadai bahwa aset terlindungi, pencatatan akurat, operasi efisien, dan perusahaan mematuhi peraturan. Pengendalian internal tidak menghilangkan seluruh risiko, tetapi mengurangi kemungkinan kesalahan dan kecurangan.",
            "Pengendalian internal penting karena laporan keuangan hanya dapat dipercaya jika proses pencatatan dan penjagaan aset berjalan baik."
          ],
          bullets: ["Fraud dapat berupa pencurian aset atau manipulasi laporan.", "Internal control melindungi aset dan meningkatkan keandalan pencatatan.", "Pengendalian memberi reasonable assurance, bukan absolute assurance."]
        },
        {
          heading: "2. Prinsip Pengendalian Internal",
          paragraphs: [
            "Pemisahan tugas berarti tanggung jawab otorisasi, pencatatan, dan penyimpanan aset tidak dipegang oleh orang yang sama. Jika satu orang menguasai seluruh proses, risiko penyalahgunaan meningkat.",
            "Otorisasi memastikan transaksi hanya dilakukan jika telah disetujui pihak berwenang. Dokumentasi menyediakan bukti transaksi. Physical control melindungi aset secara fisik, misalnya brankas, CCTV, password, dan akses terbatas.",
            "Independent internal verification berarti pekerjaan seseorang diperiksa oleh pihak lain. Human resource control mencakup seleksi pegawai, pelatihan, rotasi tugas, dan kewajiban cuti."
          ],
          bullets: [
            "Establishment of responsibility.",
            "Segregation of duties.",
            "Documentation procedures.",
            "Physical controls.",
            "Independent internal verification.",
            "Human resource controls."
          ]
        },
        {
          heading: "3. Keterbatasan Internal Control",
          paragraphs: [
            "Pengendalian internal tidak sempurna. Kesalahan manusia, kelalaian, kurangnya pelatihan, kolusi, dan keputusan manajemen yang override control dapat membuat pengendalian gagal.",
            "Cost-benefit consideration juga penting. Perusahaan tidak mungkin menerapkan pengendalian dengan biaya lebih besar daripada manfaatnya. Karena itu, sistem pengendalian harus proporsional dengan risiko.",
            "Internal control harus dipantau dan diperbaiki secara berkala karena risiko bisnis dan teknologi dapat berubah."
          ],
          bullets: ["Human error.", "Collusion.", "Management override.", "Biaya pengendalian melebihi manfaat.", "Perubahan proses bisnis dan teknologi."]
        },
        {
          heading: "4. Cash Controls",
          paragraphs: [
            "Kas adalah aset paling likuid sehingga mudah disalahgunakan. Pengendalian kas mencakup pengendalian penerimaan kas dan pengeluaran kas.",
            "Pengendalian penerimaan kas dapat dilakukan dengan penggunaan cash register, bukti penerimaan bernomor urut, pemisahan fungsi penerimaan dan pencatatan, serta penyetoran kas ke bank secara rutin.",
            "Pengendalian pengeluaran kas dapat dilakukan dengan sistem voucher, pembayaran melalui cek atau transfer, otorisasi pembayaran, dan rekonsiliasi bank."
          ],
          bullets: ["Kas perlu dikendalikan ketat.", "Penerimaan kas harus terdokumentasi.", "Pengeluaran kas harus diotorisasi.", "Bank digunakan sebagai alat kontrol."]
        },
        {
          heading: "5. Bank Reconciliation",
          paragraphs: [
            "Rekonsiliasi bank adalah proses menjelaskan perbedaan antara saldo kas menurut bank dan saldo kas menurut buku perusahaan. Perbedaan ini umum terjadi karena waktu pencatatan bank dan perusahaan tidak selalu sama.",
            "Item yang biasanya menyesuaikan saldo bank meliputi deposits in transit dan outstanding checks. Item yang biasanya menyesuaikan saldo buku meliputi bank service charges, interest revenue, notes collected by bank, NSF checks, dan kesalahan pencatatan perusahaan.",
            "Hanya item yang memengaruhi saldo buku perusahaan yang memerlukan jurnal. Item seperti deposits in transit dan outstanding checks tidak perlu jurnal karena sudah dicatat perusahaan tetapi belum dicatat bank."
          ],
          bullets: [
            "Add deposits in transit ke saldo bank.",
            "Deduct outstanding checks dari saldo bank.",
            "Add bank collections/interest ke saldo buku.",
            "Deduct bank charges/NSF checks dari saldo buku.",
            "Buat jurnal hanya untuk item sisi buku."
          ]
        },
        {
          heading: "6. Reporting Cash",
          paragraphs: [
            "Kas biasanya disajikan sebagai current asset paling atas karena paling likuid. Kas dapat mencakup cash on hand, cash in bank, dan cash equivalents jika memenuhi kriteria sangat likuid dan jangka pendek.",
            "Kas yang dibatasi penggunaannya tidak selalu dapat disajikan sebagai kas lancar biasa. Jika pembatasan signifikan, perlu klasifikasi atau pengungkapan yang sesuai.",
            "Pelaporan kas yang benar penting karena pengguna laporan keuangan melihat kas sebagai indikator likuiditas dan kemampuan perusahaan memenuhi kewajiban jangka pendek."
          ],
          bullets: ["Cash biasanya current asset pertama.", "Cash equivalents sangat likuid dan jangka pendek.", "Restricted cash perlu perhatian khusus."]
        }
      ],
      workedExamples: [
        {
          title: "Rekonsiliasi Bank Sederhana",
          case: "Saldo bank Rp18.000.000. Saldo buku perusahaan Rp15.700.000. Deposit in transit Rp2.500.000. Outstanding checks Rp3.200.000. Bank service charge Rp100.000. Bank menagih piutang wesel untuk perusahaan Rp3.000.000. Cek pelanggan NSF Rp600.000.",
          solutionSteps: [
            "Saldo bank disesuaikan: Rp18.000.000 + Rp2.500.000 - Rp3.200.000 = Rp17.300.000.",
            "Saldo buku disesuaikan: Rp15.700.000 + Rp3.000.000 - Rp100.000 - Rp600.000 = Rp18.000.000. Hasil belum sama, berarti ada data tambahan yang perlu diperiksa.",
            "Jika terdapat error pencatatan atau item lain, rekonsiliasi harus dilengkapi sampai saldo benar-benar sama.",
            "Item sisi buku yang perlu jurnal: bank service charge, collection by bank, dan NSF check."
          ],
          conclusion: "Rekonsiliasi bank bukan sekadar menghitung, tetapi mencari penyebab perbedaan saldo sampai bank dan buku dapat disamakan."
        }
      ],
      practiceReports: [
        {
          title: "Praktik TM 7: Rekonsiliasi Bank Lengkap",
          caseDescription: "Nara Mart menyusun rekonsiliasi bank 31 Mei. Mahasiswa diminta menentukan adjusted cash balance dan jurnal yang diperlukan.",
          rawData: [
            "Saldo menurut bank statement Rp25.400.000.",
            "Saldo menurut buku perusahaan Rp23.150.000.",
            "Deposit in transit Rp4.200.000.",
            "Outstanding checks Rp3.600.000.",
            "Bank service charge Rp150.000.",
            "Interest revenue dari bank Rp75.000.",
            "Bank menagih piutang wesel perusahaan Rp2.000.000.",
            "Cek pelanggan NSF Rp275.000.",
            "Perusahaan salah mencatat cek pembayaran beban listrik Rp890.000 sebagai Rp980.000."
          ],
          requiredOutputs: [
            "Hitung adjusted bank balance.",
            "Hitung adjusted book balance.",
            "Tentukan jurnal yang diperlukan.",
            "Jelaskan item mana yang tidak perlu jurnal."
          ],
          stepByStepSolution: [
            "Adjusted bank balance = Rp25.400.000 + Rp4.200.000 - Rp3.600.000 = Rp26.000.000.",
            "Saldo buku awal = Rp23.150.000.",
            "Tambahkan interest revenue Rp75.000.",
            "Tambahkan collection by bank Rp2.000.000.",
            "Kurangi bank service charge Rp150.000.",
            "Kurangi NSF check Rp275.000.",
            "Kesalahan cek: seharusnya Rp890.000 tetapi dicatat Rp980.000, berarti kas terlalu rendah Rp90.000; tambahkan Rp90.000.",
            "Adjusted book balance = Rp23.150.000 + Rp75.000 + Rp2.000.000 - Rp150.000 - Rp275.000 + Rp90.000 = Rp24.890.000.",
            "Karena adjusted bank balance Rp26.000.000 belum sama dengan adjusted book balance Rp24.890.000, kemungkinan masih ada item rekonsiliasi yang belum tercatat atau data perlu dicek ulang.",
            "Untuk versi latihan yang seimbang, tambahkan data: deposit bank salah mencatat setoran perusahaan Rp1.110.000 terlalu rendah. Setelah koreksi bank +Rp1.110.000, adjusted bank balance menjadi Rp27.110.000. Namun jika tidak ada data koreksi, jawaban yang benar adalah menyatakan rekonsiliasi belum selesai."
          ],
          finalReport: {
            title: "Jurnal Rekonsiliasi Bank Nara Mart",
            columns: ["Akun Debit", "Akun Kredit", "Jumlah"],
            rows: [
              ["Cash", "Interest Revenue", "Rp75.000"],
              ["Cash", "Notes Receivable", "Rp2.000.000"],
              ["Miscellaneous/Bank Charge Expense", "Cash", "Rp150.000"],
              ["Accounts Receivable", "Cash", "Rp275.000"],
              ["Cash", "Utilities Expense", "Rp90.000"]
            ],
            notes: [
              "Deposit in transit dan outstanding checks tidak perlu jurnal perusahaan.",
              "Jika saldo rekonsiliasi belum sama, jangan dipaksa; cari data yang hilang atau kesalahan pencatatan."
            ]
          }
        }
      ],
      templates: [
        {
          title: "Template Rekonsiliasi Bank",
          purpose: "Menjelaskan perbedaan saldo kas menurut bank dan menurut buku perusahaan.",
          columns: ["Item", "Tambah", "Kurang", "Saldo Disesuaikan"],
          notes: [
            "Sisi bank: deposit in transit dan outstanding checks.",
            "Sisi buku: bank charges, interest, collections, NSF checks, dan error buku.",
            "Buat jurnal hanya untuk item yang memengaruhi saldo buku."
          ]
        },
        {
          title: "Template Checklist Pengendalian Kas",
          purpose: "Mengevaluasi kekuatan pengendalian penerimaan dan pengeluaran kas.",
          columns: ["Area", "Risiko", "Kontrol yang Diperlukan", "Bukti"],
          notes: ["Pisahkan fungsi otorisasi, pencatatan, dan penyimpanan aset.", "Gunakan dokumen bernomor urut dan rekonsiliasi berkala."]
        }
      ],
      commonMistakes: [
        "Membuat jurnal untuk deposit in transit.",
        "Membuat jurnal untuk outstanding checks.",
        "Tidak membedakan saldo bank dan saldo buku.",
        "Menganggap rekonsiliasi selesai walaupun adjusted balance belum sama.",
        "Tidak melihat internal control sebagai proses, melainkan hanya prosedur administratif."
      ],
      quickSummary: [
        "Fraud dapat dicegah dan dideteksi melalui internal control yang baik.",
        "Internal control memberi reasonable assurance, bukan jaminan mutlak.",
        "Kas perlu kontrol ketat karena paling likuid.",
        "Rekonsiliasi bank menjelaskan perbedaan saldo bank dan buku.",
        "Jurnal hanya dibuat untuk item yang belum dicatat di buku perusahaan."
      ],
      quiz: [
        {
          question: "Tujuan utama internal control adalah...",
          options: ["menghilangkan semua risiko", "memberi keyakinan memadai atas perlindungan aset dan keandalan pencatatan", "mengganti auditor", "menghapus kebutuhan dokumentasi"],
          answerIndex: 1,
          explanation: "Internal control memberi reasonable assurance, bukan absolute assurance."
        },
        {
          question: "Outstanding checks dalam rekonsiliasi bank akan...",
          options: ["ditambahkan ke saldo bank", "dikurangkan dari saldo bank", "ditambahkan ke saldo buku", "dikurangkan dari saldo buku"],
          answerIndex: 1,
          explanation: "Outstanding checks sudah dicatat perusahaan tetapi belum mengurangi saldo bank."
        },
        {
          question: "Bank service charge memerlukan jurnal karena...",
          options: ["sudah dicatat perusahaan", "belum dicatat di buku perusahaan", "tidak memengaruhi kas", "hanya kesalahan bank"],
          answerIndex: 1,
          explanation: "Bank service charge biasanya baru diketahui dari bank statement sehingga harus dicatat perusahaan."
        }
      ],
      flashcards: [
        { front: "Apa itu internal control?", back: "Proses untuk memberi keyakinan memadai bahwa aset terlindungi, pencatatan andal, operasi efisien, dan kepatuhan terjaga." },
        { front: "Apa itu segregation of duties?", back: "Pemisahan fungsi otorisasi, pencatatan, dan penyimpanan aset." },
        { front: "Apa itu deposit in transit?", back: "Setoran yang sudah dicatat perusahaan tetapi belum dicatat bank." },
        { front: "Apa itu outstanding check?", back: "Cek yang sudah dicatat perusahaan tetapi belum dicairkan oleh bank." }
      ],
      bankQuestions: [
        {
          type: "case",
          question: "Mengapa orang yang menerima kas sebaiknya tidak sekaligus mencatat transaksi kas?",
          answerGuide: "Karena menggabungkan penyimpanan aset dan pencatatan meningkatkan risiko penyalahgunaan kas tanpa terdeteksi."
        },
        {
          type: "calculation",
          question: "Saldo bank Rp20.000.000, deposit in transit Rp3.000.000, outstanding checks Rp2.500.000. Hitung adjusted bank balance.",
          answerGuide: "Adjusted bank balance = Rp20.000.000 + Rp3.000.000 - Rp2.500.000 = Rp20.500.000."
        },
        {
          type: "journal",
          question: "Bank statement menunjukkan bank service charge Rp75.000 dan interest revenue Rp50.000. Buat jurnal.",
          answerGuide: "Debit Bank Charge Expense Rp75.000; Kredit Cash Rp75.000. Debit Cash Rp50.000; Kredit Interest Revenue Rp50.000."
        }
      ]
    }
  ],

  utsPractice: {
    title: "Paket Latihan UTS AKDAS",
    description:
      "Latihan UTS mencakup TM 1–7: persamaan dasar akuntansi, jurnal umum, buku besar, neraca saldo, jurnal penyesuaian, worksheet, jurnal penutup, laporan perusahaan dagang, persediaan, pengendalian internal, dan rekonsiliasi bank.",
    coverage: [
      "TM 1 Accounting in Action",
      "TM 2 The Recording Process",
      "TM 3 Adjusting the Accounts",
      "TM 4 Completing the Accounting Cycle",
      "TM 5 Accounting for Merchandising Operations",
      "TM 6 Inventories",
      "TM 7 Fraud, Internal Control, and Cash"
    ],
    multipleChoice: [
      {
        question: "Akun yang memiliki saldo normal debit adalah...",
        options: ["Accounts Payable", "Sales Revenue", "Equipment", "Owner's Capital"],
        answerIndex: 2,
        explanation: "Equipment adalah aset dan memiliki saldo normal debit."
      },
      {
        question: "Jika perusahaan menerima uang muka dari pelanggan, akun yang dikredit adalah...",
        options: ["Service Revenue", "Unearned Revenue", "Accounts Receivable", "Prepaid Expense"],
        answerIndex: 1,
        explanation: "Sebelum jasa diberikan, penerimaan tersebut adalah liabilitas."
      },
      {
        question: "Dalam sistem perpetual, penjualan barang dagang dicatat dengan...",
        options: ["satu jurnal saja", "dua jurnal: sales dan COGS", "hanya jurnal inventory", "hanya jurnal cash"],
        answerIndex: 1,
        explanation: "Perpetual system mencatat pendapatan dan pengurangan inventory melalui COGS."
      },
      {
        question: "Akun yang tidak muncul dalam post-closing trial balance adalah...",
        options: ["Cash", "Accounts Receivable", "Rent Expense", "Accounts Payable"],
        answerIndex: 2,
        explanation: "Rent Expense adalah temporary account dan ditutup pada akhir periode."
      },
      {
        question: "Deposit in transit dalam rekonsiliasi bank akan...",
        options: ["ditambahkan ke saldo bank", "dikurangkan dari saldo bank", "ditambahkan ke saldo buku", "dikurangkan dari saldo buku"],
        answerIndex: 0,
        explanation: "Deposit in transit sudah dicatat perusahaan tetapi belum dicatat bank."
      }
    ],
    calculationCases: [
      {
        type: "journal",
        question:
          "Buat jurnal untuk transaksi berikut: (1) pemilik menyetor kas Rp50.000.000; (2) perusahaan membeli perlengkapan kredit Rp4.000.000; (3) menerima pendapatan jasa tunai Rp7.500.000; (4) membayar beban sewa Rp2.000.000.",
        answerGuide:
          "1) Debit Cash Rp50.000.000; Kredit Owner's Capital Rp50.000.000. 2) Debit Supplies Rp4.000.000; Kredit Accounts Payable Rp4.000.000. 3) Debit Cash Rp7.500.000; Kredit Service Revenue Rp7.500.000. 4) Debit Rent Expense Rp2.000.000; Kredit Cash Rp2.000.000."
      },
      {
        type: "calculation",
        question:
          "Supplies sebelum penyesuaian Rp5.000.000 dan supplies tersisa Rp1.800.000. Buat jurnal penyesuaian.",
        answerGuide:
          "Supplies terpakai = Rp5.000.000 - Rp1.800.000 = Rp3.200.000. Jurnal: Debit Supplies Expense Rp3.200.000; Kredit Supplies Rp3.200.000."
      },
      {
        type: "report",
        question:
          "Sales Revenue Rp150.000.000, Sales Returns Rp5.000.000, Sales Discounts Rp3.000.000, COGS Rp95.000.000, Operating Expenses Rp30.000.000. Hitung net sales, gross profit, dan net income.",
        answerGuide:
          "Net sales = Rp150.000.000 - Rp5.000.000 - Rp3.000.000 = Rp142.000.000. Gross profit = Rp142.000.000 - Rp95.000.000 = Rp47.000.000. Net income = Rp47.000.000 - Rp30.000.000 = Rp17.000.000."
      },
      {
        type: "calculation",
        question:
          "Beginning inventory 40 unit @Rp10.000, purchase 60 unit @Rp12.000, sold 70 unit. Hitung COGS dan ending inventory FIFO periodic.",
        answerGuide:
          "COGS = 40×Rp10.000 + 30×Rp12.000 = Rp760.000. Ending inventory = 30×Rp12.000 = Rp360.000."
      },
      {
        type: "calculation",
        question:
          "Saldo bank Rp30.000.000, deposit in transit Rp2.400.000, outstanding checks Rp3.100.000. Saldo buku Rp28.900.000, bank service charge Rp100.000, interest revenue Rp50.000, collection by bank Rp450.000. Hitung adjusted bank balance dan adjusted book balance.",
        answerGuide:
          "Adjusted bank balance = Rp30.000.000 + Rp2.400.000 - Rp3.100.000 = Rp29.300.000. Adjusted book balance = Rp28.900.000 - Rp100.000 + Rp50.000 + Rp450.000 = Rp29.300.000."
      }
    ],
    essayCases: [
      {
        type: "essay",
        question:
          "Jelaskan hubungan antara neraca saldo, jurnal penyesuaian, neraca saldo disesuaikan, laporan keuangan, dan jurnal penutup.",
        answerGuide:
          "Neraca saldo merangkum saldo akun sebelum penyesuaian. Jurnal penyesuaian dibuat agar pendapatan dan beban sesuai periode. Setelah diposting, disusun neraca saldo disesuaikan. Dari neraca saldo disesuaikan, laporan keuangan dibuat. Setelah laporan selesai, akun sementara ditutup melalui jurnal penutup agar periode baru dimulai dari saldo nol untuk pendapatan, beban, dan dividen/prive."
      },
      {
        type: "essay",
        question:
          "Mengapa perusahaan dagang membutuhkan akun Inventory dan Cost of Goods Sold, sedangkan perusahaan jasa umumnya tidak?",
        answerGuide:
          "Perusahaan dagang membeli barang untuk dijual kembali sehingga harus mencatat barang yang tersedia sebagai Inventory dan biaya barang yang telah terjual sebagai COGS. Perusahaan jasa menjual jasa, bukan barang dagang, sehingga umumnya tidak memiliki inventory untuk dijual kembali."
      },
      {
        type: "case",
        question:
          "Sebuah perusahaan kecil hanya memiliki satu pegawai yang menerima kas, mencatat transaksi, menyimpan uang, dan melakukan rekonsiliasi bank. Jelaskan risiko dan rekomendasi pengendalian internal.",
        answerGuide:
          "Risikonya adalah fraud atau kesalahan sulit terdeteksi karena satu orang menguasai seluruh proses. Rekomendasi: pisahkan fungsi penerimaan kas dan pencatatan, gunakan bukti bernomor urut, setorkan kas secara rutin ke bank, pemilik melakukan review independen, dan rekonsiliasi bank dilakukan oleh pihak yang tidak memegang kas."
      }
    ],
    answerNotes: [
      "Untuk soal jurnal, selalu tentukan jenis akun terlebih dahulu sebelum menentukan debit/kredit.",
      "Untuk adjustment, cek apakah kasusnya deferral atau accrual.",
      "Untuk perusahaan dagang, pisahkan net sales, COGS, dan operating expenses.",
      "Untuk inventory, tulis metode yang dipakai karena FIFO dan average menghasilkan angka berbeda.",
      "Untuk rekonsiliasi bank, pisahkan item sisi bank dan sisi buku; jurnal hanya untuk sisi buku."
    ]
  }
};

export default akdasPraUTS;
