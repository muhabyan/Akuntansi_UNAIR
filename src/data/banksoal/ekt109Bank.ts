export type PteBankPhase = 'pra-uts' | 'pra-uas';
export type PteBankDifficulty = 'easy' | 'medium' | 'hard';
export type PteBankCompetency =
  | 'Konsep Dasar'
  | 'Hubungan Sebab-Akibat'
  | 'Interpretasi Grafik'
  | 'Movement & Shift'
  | 'Perhitungan'
  | 'Kasus Integratif';
export type PteBankKind =
  | 'single-choice'
  | 'true-false'
  | 'multi-select'
  | 'matching'
  | 'ordering'
  | 'numeric'
  | 'graph'
  | 'short-answer';
export type PteBankSourceStatus = 'adapted-source' | 'generated-from-reading';

export interface PteBankBase {
  id: string;
  phase: PteBankPhase;
  tm: number;
  topic: string;
  difficulty: PteBankDifficulty;
  competency: PteBankCompetency;
  kind: PteBankKind;
  sourceRef: string;
  sourceStatus: PteBankSourceStatus;
  sourceAnchors?: string[];
  prompt: string;
  explanation: string;
}

export interface PteBankChoiceQuestion extends PteBankBase {
  kind: 'single-choice' | 'true-false';
  options: string[];
  answerIndex: number;
}

export interface PteBankMultiSelectQuestion extends PteBankBase {
  kind: 'multi-select';
  options: string[];
  answerIndexes: number[];
}

export interface PteBankMatchingQuestion extends PteBankBase {
  kind: 'matching';
  pairs: Array<{ prompt: string; answer: string }>;
  choices: string[];
}

export interface PteBankOrderingQuestion extends PteBankBase {
  kind: 'ordering';
  items: string[];
  correctOrder: string[];
}

export interface PteBankNumericQuestion extends PteBankBase {
  kind: 'numeric';
  answer: number;
  tolerance?: number;
  answerPrefix?: string;
  answerSuffix?: string;
}

export interface PteBankGraphQuestion extends PteBankBase {
  kind: 'graph';
  options: string[];
  answerIndex: number;
  svg: string;
  altText: string;
}

export interface PteBankShortAnswerQuestion extends PteBankBase {
  kind: 'short-answer';
  assessmentMode: 'guided-review';
  simulatorEligible: false;
  answerGuide: string;
}

export type PteBankQuestion =
  | PteBankChoiceQuestion
  | PteBankMultiSelectQuestion
  | PteBankMatchingQuestion
  | PteBankOrderingQuestion
  | PteBankNumericQuestion
  | PteBankGraphQuestion
  | PteBankShortAnswerQuestion;

export const EKT109_BANK_QUESTIONS: PteBankQuestion[] = [
  {
    "id": "PTE-BANK-UTS-001",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Kelangkaan, Pilihan, dan PPF",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "kind": "single-choice",
    "sourceRef": "Reading EKT109 TM 1",
    "sourceStatus": "generated-from-reading",
    "prompt": "Kelangkaan dalam ilmu ekonomi berarti...",
    "explanation": "Kelangkaan muncul karena kebutuhan manusia lebih luas daripada sumber daya yang tersedia, sehingga setiap pilihan menimbulkan trade-off.",
    "options": [
      "kebutuhan manusia terbatas dan sumber daya melimpah",
      "sumber daya terbatas relatif terhadap kebutuhan",
      "semua barang harus berharga tinggi",
      "pemerintah selalu mengatur produksi"
    ],
    "answerIndex": 1,
    "sourceAnchors": [
      "A. Kelangkaan & Efisiensi"
    ]
  },
  {
    "id": "PTE-BANK-UTS-002",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Kelangkaan, Pilihan, dan PPF",
    "difficulty": "easy",
    "competency": "Perhitungan",
    "kind": "numeric",
    "sourceRef": "Reading EKT109 TM 1",
    "sourceStatus": "generated-from-reading",
    "prompt": "Seseorang memilih belajar selama 3 jam dan melepaskan pendapatan kerja paruh waktu Rp150.000. Berapa biaya peluang keputusan belajar tersebut?",
    "explanation": "Biaya peluang adalah nilai alternatif terbaik yang dilepaskan. Karena alternatif terbaiknya adalah bekerja dengan pendapatan Rp150.000, biaya peluang belajar adalah Rp150.000.",
    "answer": 150000,
    "tolerance": 0,
    "answerPrefix": "Rp",
    "sourceAnchors": [
      "A. Kelangkaan & Efisiensi"
    ]
  },
  {
    "id": "PTE-BANK-UTS-003",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Kelangkaan, Pilihan, dan PPF",
    "difficulty": "medium",
    "competency": "Hubungan Sebab-Akibat",
    "kind": "multi-select",
    "sourceRef": "Reading EKT109 TM 1",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pilih semua akibat langsung dari kelangkaan.",
    "explanation": "Kelangkaan memaksa pelaku ekonomi memilih, menghadapi trade-off, dan menanggung biaya peluang. Kelangkaan tidak berarti semua barang langka secara absolut.",
    "options": [
      "Harus membuat pilihan",
      "Muncul biaya peluang",
      "Ada trade-off",
      "Semua barang selalu tidak tersedia"
    ],
    "answerIndexes": [
      0,
      1,
      2
    ],
    "sourceAnchors": [
      "A. Kelangkaan & Efisiensi"
    ]
  },
  {
    "id": "PTE-BANK-UTS-004",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Kelangkaan, Pilihan, dan PPF",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "kind": "matching",
    "sourceRef": "Reading EKT109 TM 1",
    "sourceStatus": "generated-from-reading",
    "prompt": "Cocokkan posisi atau perubahan pada PPF dengan maknanya.",
    "explanation": "Titik pada PPF efisien, titik di dalam PPF menunjukkan sumber daya menganggur, titik di luar PPF belum dapat dicapai, dan pergeseran PPF ke luar menunjukkan kapasitas produksi bertambah.",
    "pairs": [
      {
        "prompt": "Titik pada kurva PPF",
        "answer": "Produksi efisien"
      },
      {
        "prompt": "Titik di dalam PPF",
        "answer": "Sumber daya belum digunakan penuh"
      },
      {
        "prompt": "Titik di luar PPF",
        "answer": "Belum dapat dicapai dengan sumber daya saat ini"
      },
      {
        "prompt": "PPF bergeser ke luar",
        "answer": "Kapasitas produksi meningkat"
      }
    ],
    "choices": [
      "Kapasitas produksi meningkat",
      "Belum dapat dicapai dengan sumber daya saat ini",
      "Produksi efisien",
      "Sumber daya belum digunakan penuh"
    ],
    "sourceAnchors": [
      "C. Production Possibilities Frontier (PPF)"
    ]
  },
  {
    "id": "PTE-BANK-UTS-005",
    "phase": "pra-uts",
    "tm": 1,
    "topic": "Kelangkaan, Pilihan, dan PPF",
    "difficulty": "hard",
    "competency": "Kasus Integratif",
    "kind": "short-answer",
    "assessmentMode": "guided-review",
    "simulatorEligible": false,
    "sourceRef": "Reading EKT109 TM 1",
    "sourceStatus": "generated-from-reading",
    "prompt": "Sebuah pemerintah memiliki anggaran terbatas dan harus memilih antara membangun rumah sakit atau jalan. Jelaskan trade-off dan biaya peluang keputusan tersebut.",
    "explanation": "Jawaban harus mengidentifikasi tujuan yang dipilih, manfaat alternatif terbaik yang dikorbankan sebagai biaya peluang, serta alasan mengapa kelangkaan anggaran memaksa prioritas.",
    "answerGuide": "Trade-off adalah pertukaran antara manfaat rumah sakit dan jalan. Bila rumah sakit dipilih, biaya peluangnya adalah manfaat jalan terbaik yang tidak jadi dibangun, dan sebaliknya. Analisis yang baik menyebut dampak jangka pendek, jangka panjang, serta kelompok yang menerima manfaat.",
    "sourceAnchors": [
      "A. Kelangkaan & Efisiensi"
    ]
  },
  {
    "id": "PTE-BANK-UTS-006",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Sistem Ekonomi dan Peran Pemerintah",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "kind": "single-choice",
    "sourceRef": "Reading EKT109 TM 2",
    "sourceStatus": "generated-from-reading",
    "prompt": "Sistem ekonomi yang terutama mengandalkan harga dan mekanisme pasar untuk menjawab what, how, dan for whom adalah...",
    "explanation": "Dalam sistem pasar bebas, keputusan produksi dan konsumsi terutama dikoordinasikan melalui harga dan pasar.",
    "options": [
      "sistem tradisional",
      "sistem komando",
      "sistem campuran",
      "sistem pasar bebas"
    ],
    "answerIndex": 3,
    "sourceAnchors": [
      "B. Sistem Ekonomi"
    ]
  },
  {
    "id": "PTE-BANK-UTS-007",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Sistem Ekonomi dan Peran Pemerintah",
    "difficulty": "medium",
    "competency": "Hubungan Sebab-Akibat",
    "kind": "ordering",
    "sourceRef": "Reading EKT109 TM 2",
    "sourceStatus": "generated-from-reading",
    "prompt": "Urutkan mekanisme koordinasi “invisible hand” ketika permintaan suatu barang meningkat.",
    "explanation": "Kenaikan permintaan memberi tekanan pada harga. Harga yang lebih tinggi menjadi sinyal bagi produsen untuk menambah output dan mengalihkan sumber daya, sehingga pasar bergerak menuju keseimbangan baru.",
    "items": [
      "Produsen menambah output dan mengalihkan sumber daya",
      "Permintaan barang meningkat",
      "Pasar bergerak menuju keseimbangan baru",
      "Harga relatif barang naik"
    ],
    "correctOrder": [
      "Permintaan barang meningkat",
      "Harga relatif barang naik",
      "Produsen menambah output dan mengalihkan sumber daya",
      "Pasar bergerak menuju keseimbangan baru"
    ],
    "sourceAnchors": [
      "C. Invisible Hand & Kegagalan Pasar"
    ]
  },
  {
    "id": "PTE-BANK-UTS-008",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Sistem Ekonomi dan Peran Pemerintah",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "kind": "true-false",
    "sourceRef": "Reading EKT109 TM 2",
    "sourceStatus": "generated-from-reading",
    "prompt": "Dalam ekonomi campuran, keputusan ekonomi hanya dibuat pemerintah tanpa peran mekanisme pasar.",
    "explanation": "Salah. Ekonomi campuran menggabungkan mekanisme pasar dengan regulasi dan peran pemerintah.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1,
    "sourceAnchors": [
      "B. Sistem Ekonomi"
    ]
  },
  {
    "id": "PTE-BANK-UTS-009",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Sistem Ekonomi dan Peran Pemerintah",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "kind": "graph",
    "sourceRef": "Reading EKT109 TM 2",
    "sourceStatus": "generated-from-reading",
    "prompt": "Posisi “Campuran” pada diagram sistem ekonomi menunjukkan bahwa...",
    "explanation": "Ekonomi campuran menggunakan mekanisme pasar untuk banyak keputusan, sekaligus memberi pemerintah peran regulasi, penyediaan barang publik, dan koreksi kegagalan pasar.",
    "options": [
      "mekanisme pasar dan peran pemerintah digunakan bersama",
      "seluruh keputusan ditentukan adat",
      "harga tidak memiliki fungsi koordinasi",
      "seluruh alat produksi wajib dimiliki pemerintah"
    ],
    "answerIndex": 0,
    "svg": "<svg data-graph-id=\"PTE-BANK-UTS-G01\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-UTS-G01-title PTE-BANK-UTS-G01-desc\"><title id=\"PTE-BANK-UTS-G01-title\">Kontinuum sistem ekonomi</title><desc id=\"PTE-BANK-UTS-G01-desc\">Sistem pasar bebas berada dekat koordinasi pasar, sistem komando dekat perencanaan pemerintah, dan ekonomi campuran berada di antara keduanya karena menggabungkan mekanisme pasar dan intervensi pemerintah.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"system-continuum\" x1=\"70\" y1=\"140\" x2=\"350\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"3\"/><path d=\"M70 140 l12 -7 v14 z\" fill=\"#94a3b8\"/><path d=\"M350 140 l-12 -7 v14 z\" fill=\"#94a3b8\"/><text data-role=\"market-end-label\" x=\"52\" y=\"184\" fill=\"#cbd5e1\" font-size=\"12\">Koordinasi pasar</text><text data-role=\"command-end-label\" x=\"274\" y=\"184\" fill=\"#cbd5e1\" font-size=\"12\">Perencanaan pemerintah</text><circle data-role=\"market-point\" cx=\"105\" cy=\"140\" r=\"8\" fill=\"#60a5fa\"/><circle data-role=\"mixed-point\" cx=\"210\" cy=\"140\" r=\"10\" fill=\"#f59e0b\"/><circle data-role=\"command-point\" cx=\"325\" cy=\"140\" r=\"8\" fill=\"#f87171\"/><text data-role=\"market-point-label\" x=\"72\" y=\"116\" fill=\"#93c5fd\" font-size=\"12\">Pasar bebas</text><text data-role=\"mixed-point-label\" x=\"178\" y=\"108\" fill=\"#fbbf24\" font-size=\"12\">Campuran</text><text data-role=\"command-point-label\" x=\"298\" y=\"116\" fill=\"#fca5a5\" font-size=\"12\">Komando</text></svg>",
    "altText": "Kontinuum sistem ekonomi menempatkan pasar bebas di sisi koordinasi pasar, sistem komando di sisi perencanaan pemerintah, dan ekonomi campuran di tengah.",
    "sourceAnchors": [
      "B. Sistem Ekonomi"
    ]
  },
  {
    "id": "PTE-BANK-UTS-010",
    "phase": "pra-uts",
    "tm": 2,
    "topic": "Sistem Ekonomi dan Peran Pemerintah",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "kind": "multi-select",
    "sourceRef": "Reading EKT109 TM 2",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pilih semua kondisi yang dalam reading TM2 dikategorikan sebagai kegagalan pasar dan dapat menjadi alasan intervensi pemerintah.",
    "explanation": "Reading TM2 mencantumkan kekuatan pasar atau monopoli, eksternalitas, barang publik, dan informasi asimetris sebagai kegagalan pasar.",
    "options": [
      "Monopoli atau kekuatan pasar",
      "Eksternalitas",
      "Barang publik",
      "Informasi asimetris"
    ],
    "answerIndexes": [
      0,
      1,
      2,
      3
    ],
    "sourceAnchors": [
      "C. Invisible Hand & Kegagalan Pasar"
    ]
  },
  {
    "id": "PTE-BANK-UTS-011",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Permintaan dan Penawaran",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "kind": "single-choice",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceStatus": "generated-from-reading",
    "prompt": "Hukum permintaan menyatakan bahwa, ceteris paribus...",
    "explanation": "Ketika harga barang naik, jumlah yang diminta turun; ketika harga turun, jumlah yang diminta naik.",
    "options": [
      "harga dan jumlah diminta bergerak searah",
      "penawaran selalu sama dengan permintaan",
      "harga dan jumlah diminta bergerak berlawanan arah",
      "pendapatan tidak pernah memengaruhi permintaan"
    ],
    "answerIndex": 2,
    "sourceAnchors": [
      "A. Hukum Permintaan & Penawaran"
    ]
  },
  {
    "id": "PTE-BANK-UTS-012",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Permintaan dan Penawaran",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "kind": "graph",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceStatus": "generated-from-reading",
    "prompt": "Grafik menunjukkan kurva permintaan bergeser dari D1 ke D2. Perubahan mana yang paling mungkin menyebabkannya untuk barang normal?",
    "explanation": "Kenaikan pendapatan meningkatkan permintaan barang normal sehingga seluruh kurva bergeser ke kanan.",
    "options": [
      "Harga barang itu sendiri naik",
      "Biaya produksi naik",
      "Jumlah penjual turun",
      "Pendapatan konsumen naik"
    ],
    "answerIndex": 3,
    "svg": "<svg data-graph-id=\"PTE-BANK-UTS-G02\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-UTS-G02-title PTE-BANK-UTS-G02-desc\"><title id=\"PTE-BANK-UTS-G02-title\">Pergeseran permintaan ke kanan</title><desc id=\"PTE-BANK-UTS-G02-desc\">Kenaikan pendapatan untuk barang normal menggeser seluruh kurva permintaan dari D1 ke D2, bukan gerakan sepanjang kurva.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Kuantitas</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Harga</text><line data-role=\"demand-before\" x1=\"92\" y1=\"72\" x2=\"340\" y2=\"190\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"demand-after\" x1=\"120\" y1=\"52\" x2=\"368\" y2=\"170\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"7 5\"/><text data-role=\"demand-before-label\" x=\"332\" y=\"194\" fill=\"#60a5fa\" font-size=\"12\">D₁</text><text data-role=\"demand-after-label\" x=\"356\" y=\"174\" fill=\"#fbbf24\" font-size=\"12\">D₂</text></svg>",
    "altText": "Dua kurva permintaan menurun, D2 berada di kanan D1.",
    "sourceAnchors": [
      "B. Faktor Penggeser"
    ]
  },
  {
    "id": "PTE-BANK-UTS-013",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Permintaan dan Penawaran",
    "difficulty": "medium",
    "competency": "Movement & Shift",
    "kind": "multi-select",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pilih semua faktor yang dapat menggeser kurva permintaan.",
    "explanation": "Pendapatan, harga barang terkait, dan ekspektasi adalah determinan permintaan. Harga barang itu sendiri menimbulkan gerakan sepanjang kurva.",
    "options": [
      "Pendapatan konsumen",
      "Harga barang substitusi",
      "Ekspektasi harga masa depan",
      "Harga barang itu sendiri"
    ],
    "answerIndexes": [
      0,
      1,
      2
    ],
    "sourceAnchors": [
      "B. Faktor Penggeser"
    ]
  },
  {
    "id": "PTE-BANK-UTS-014",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Permintaan dan Penawaran",
    "difficulty": "medium",
    "competency": "Hubungan Sebab-Akibat",
    "kind": "ordering",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceStatus": "generated-from-reading",
    "prompt": "Urutkan penyesuaian pasar ketika harga berada di bawah harga keseimbangan.",
    "explanation": "Harga terlalu rendah menimbulkan shortage. Pembeli bersaing memperoleh barang, harga terdorong naik, dan jumlah diminta serta ditawarkan bergerak menuju keseimbangan.",
    "items": [
      "Harga naik",
      "Terjadi shortage",
      "Pasar mendekati keseimbangan",
      "Jumlah diminta melebihi jumlah ditawarkan"
    ],
    "correctOrder": [
      "Jumlah diminta melebihi jumlah ditawarkan",
      "Terjadi shortage",
      "Harga naik",
      "Pasar mendekati keseimbangan"
    ],
    "sourceAnchors": [
      "C. Keseimbangan Pasar"
    ]
  },
  {
    "id": "PTE-BANK-UTS-015",
    "phase": "pra-uts",
    "tm": 3,
    "topic": "Permintaan dan Penawaran",
    "difficulty": "easy",
    "competency": "Movement & Shift",
    "kind": "true-false",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceStatus": "generated-from-reading",
    "prompt": "Perubahan harga barang itu sendiri menggeser kurva permintaan.",
    "explanation": "Salah. Perubahan harga barang itu sendiri menyebabkan gerakan sepanjang kurva permintaan.",
    "options": [
      "Salah",
      "Benar"
    ],
    "answerIndex": 0,
    "sourceAnchors": [
      "A. Hukum Permintaan & Penawaran"
    ]
  },
  {
    "id": "PTE-BANK-UTS-016",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Perilaku Konsumen",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "kind": "single-choice",
    "sourceRef": "Reading EKT109 TM 4",
    "sourceStatus": "generated-from-reading",
    "prompt": "Hukum utilitas marginal yang menurun berarti...",
    "explanation": "Tambahan kepuasan dari unit konsumsi berikutnya cenderung menurun ketika konsumsi barang yang sama bertambah.",
    "options": [
      "total utility selalu turun sejak unit pertama",
      "marginal utility bertambah tanpa batas",
      "tambahan kepuasan dari unit berikutnya cenderung menurun",
      "konsumen tidak memiliki kendala anggaran"
    ],
    "answerIndex": 2,
    "sourceAnchors": [
      "A. Total & Marginal Utility"
    ]
  },
  {
    "id": "PTE-BANK-UTS-017",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Perilaku Konsumen",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "kind": "matching",
    "sourceRef": "Reading EKT109 TM 4",
    "sourceStatus": "generated-from-reading",
    "prompt": "Cocokkan konsep perilaku konsumen dengan maknanya.",
    "explanation": "TM4 membedakan marginal utility, keseimbangan konsumen, kendala anggaran, dan substitution effect.",
    "pairs": [
      {
        "prompt": "Marginal utility",
        "answer": "Tambahan kepuasan dari satu unit tambahan"
      },
      {
        "prompt": "Keseimbangan konsumen",
        "answer": "MU per rupiah sama antarbarang pada solusi interior"
      },
      {
        "prompt": "Budget constraint",
        "answer": "P₁Q₁ + P₂Q₂ = I"
      },
      {
        "prompt": "Substitution effect",
        "answer": "Beralih ke barang yang relatif lebih murah"
      }
    ],
    "choices": [
      "P₁Q₁ + P₂Q₂ = I",
      "Beralih ke barang yang relatif lebih murah",
      "Tambahan kepuasan dari satu unit tambahan",
      "MU per rupiah sama antarbarang pada solusi interior"
    ],
    "sourceAnchors": [
      "A. Total & Marginal Utility",
      "B. Keseimbangan Konsumen",
      "C. Garis Anggaran (Budget Constraint)",
      "D. Income Effect & Substitution Effect"
    ]
  },
  {
    "id": "PTE-BANK-UTS-018",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Perilaku Konsumen",
    "difficulty": "easy",
    "competency": "Perhitungan",
    "kind": "numeric",
    "sourceRef": "Reading EKT109 TM 4",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pendapatan konsumen Rp240.000 dan harga satu unit barang X Rp30.000. Jika seluruh pendapatan digunakan untuk X, berapa unit maksimum X?",
    "explanation": "Jumlah maksimum X = 240.000/30.000 = 8 unit.",
    "answer": 8,
    "tolerance": 0,
    "answerSuffix": "unit",
    "sourceAnchors": [
      "C. Garis Anggaran (Budget Constraint)"
    ]
  },
  {
    "id": "PTE-BANK-UTS-019",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Produsen, Konsumen, dan Efisiensi Pasar",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "kind": "graph",
    "sourceRef": "Reading EKT109 TM 7",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pada grafik surplus, area CS menunjukkan...",
    "explanation": "Consumer surplus adalah selisih antara willingness to pay dan harga yang dibayar, yaitu area di bawah kurva permintaan dan di atas harga pasar.",
    "options": [
      "selisih willingness to pay dan harga",
      "biaya produksi total",
      "penerimaan pajak",
      "deadweight loss"
    ],
    "answerIndex": 0,
    "svg": "<svg data-graph-id=\"PTE-BANK-UTS-G04\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-UTS-G04-title PTE-BANK-UTS-G04-desc\"><title id=\"PTE-BANK-UTS-G04-title\">Surplus konsumen dan produsen pada harga keseimbangan</title><desc id=\"PTE-BANK-UTS-G04-desc\">Kurva permintaan menurun dan penawaran menanjak berpotongan pada harga pasar. Consumer surplus adalah segitiga di bawah permintaan dan di atas garis harga, sedangkan producer surplus adalah segitiga di atas penawaran dan di bawah garis harga.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Kuantitas</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Harga</text><polygon data-role=\"consumer-surplus\" points=\"58,55 211.2,130 58,130\" fill=\"#38bdf8\" fill-opacity=\".22\"/><polygon data-role=\"producer-surplus\" points=\"58,205 211.2,130 58,130\" fill=\"#f59e0b\" fill-opacity=\".22\"/><line data-role=\"demand\" x1=\"58\" y1=\"55\" x2=\"350\" y2=\"198\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"supply\" x1=\"58\" y1=\"205\" x2=\"350\" y2=\"62\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"market-price\" x1=\"58\" y1=\"130\" x2=\"211.2\" y2=\"130\" stroke=\"#f8fafc\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\"/><line data-role=\"equilibrium-quantity\" x1=\"211.2\" y1=\"130\" x2=\"211.2\" y2=\"218\" stroke=\"#f8fafc\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\"/><circle data-role=\"equilibrium\" cx=\"211.2\" cy=\"130\" r=\"4.5\" fill=\"#f8fafc\"/><text data-role=\"consumer-surplus-label\" x=\"82\" y=\"100\" fill=\"#7dd3fc\" font-size=\"12\">CS</text><text data-role=\"producer-surplus-label\" x=\"82\" y=\"166\" fill=\"#fbbf24\" font-size=\"12\">PS</text><text data-role=\"equilibrium-label\" x=\"216\" y=\"124\" fill=\"#f8fafc\" font-size=\"11\">E</text><text data-role=\"demand-label\" x=\"320\" y=\"194\" fill=\"#60a5fa\" font-size=\"11\">D</text><text data-role=\"supply-label\" x=\"323\" y=\"66\" fill=\"#22c55e\" font-size=\"11\">S</text></svg>",
    "altText": "Kurva permintaan dan penawaran berpotongan pada harga pasar. Area consumer surplus berada di bawah permintaan dan di atas harga; area producer surplus berada di atas penawaran dan di bawah harga.",
    "sourceAnchors": [
      "A. Surplus Konsumen & Produsen"
    ]
  },
  {
    "id": "PTE-BANK-UTS-020",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Perilaku Konsumen",
    "difficulty": "hard",
    "competency": "Konsep Dasar",
    "kind": "multi-select",
    "sourceRef": "Reading EKT109 TM 4",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pilih semua kondisi yang konsisten dengan pilihan konsumen optimal.",
    "explanation": "Pilihan optimal harus berada pada kendala anggaran, memberikan utilitas tertinggi yang terjangkau, dan menyamakan manfaat marginal per rupiah antarbarang pada solusi interior.",
    "options": [
      "Paket konsumsi terjangkau",
      "Utilitas tertinggi di antara paket terjangkau",
      "MUx/Px = MUy/Py pada solusi interior",
      "Selalu membeli satu barang saja"
    ],
    "answerIndexes": [
      0,
      1,
      2
    ],
    "sourceAnchors": [
      "B. Keseimbangan Konsumen"
    ]
  },
  {
    "id": "PTE-BANK-UTS-021",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Elastisitas",
    "difficulty": "medium",
    "competency": "Hubungan Sebab-Akibat",
    "kind": "single-choice",
    "sourceRef": "Reading EKT109 TM 5",
    "sourceStatus": "generated-from-reading",
    "prompt": "Jika permintaan elastis, kenaikan harga cenderung...",
    "explanation": "Pada permintaan elastis, persentase penurunan kuantitas lebih besar daripada persentase kenaikan harga sehingga total revenue turun.",
    "options": [
      "menaikkan total revenue",
      "menurunkan total revenue",
      "tidak mengubah kuantitas",
      "selalu menaikkan laba"
    ],
    "answerIndex": 1,
    "sourceAnchors": [
      "A. Price Elasticity of Demand (Ed)"
    ]
  },
  {
    "id": "PTE-BANK-UTS-022",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Elastisitas",
    "difficulty": "medium",
    "competency": "Perhitungan",
    "kind": "numeric",
    "sourceRef": "Reading EKT109 TM 5",
    "sourceStatus": "generated-from-reading",
    "prompt": "Harga naik dari 100 menjadi 110 dan jumlah diminta turun 20%. Dengan pendekatan persentase sederhana, berapa nilai absolut elastisitas harga permintaan?",
    "explanation": "Persentase perubahan harga = 10%; elastisitas absolut = 20%/10% = 2.",
    "answer": 2,
    "tolerance": 0.01,
    "answerSuffix": "",
    "sourceAnchors": [
      "A. Price Elasticity of Demand (Ed)"
    ]
  },
  {
    "id": "PTE-BANK-UTS-023",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Elastisitas",
    "difficulty": "easy",
    "competency": "Interpretasi Grafik",
    "kind": "graph",
    "sourceRef": "Reading EKT109 TM 5",
    "sourceStatus": "generated-from-reading",
    "prompt": "Kurva permintaan mana yang lebih elastis?",
    "explanation": "Kurva yang lebih datar menunjukkan perubahan kuantitas lebih besar untuk perubahan harga yang sama, sehingga lebih elastis.",
    "options": [
      "Kurva yang lebih curam",
      "Keduanya selalu sama",
      "Kurva yang lebih datar",
      "Tidak dapat dibandingkan"
    ],
    "answerIndex": 2,
    "svg": "<svg data-graph-id=\"PTE-BANK-UTS-G05\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-UTS-G05-title PTE-BANK-UTS-G05-desc\"><title id=\"PTE-BANK-UTS-G05-title\">Perbandingan kurva permintaan elastis dan inelastis</title><desc id=\"PTE-BANK-UTS-G05-desc\">Dua kurva permintaan melewati titik tengah yang sama. Kurva biru jauh lebih datar sehingga lebih elastis; kurva jingga jauh lebih curam sehingga lebih inelastis.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Kuantitas</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Harga</text><line data-role=\"elastic-demand\" x1=\"70\" y1=\"96\" x2=\"360\" y2=\"156\" stroke=\"#60a5fa\" stroke-width=\"4\"/><line data-role=\"inelastic-demand\" x1=\"200\" y1=\"60\" x2=\"240\" y2=\"194\" stroke=\"#f59e0b\" stroke-width=\"4\"/><circle cx=\"220\" cy=\"127\" r=\"4\" fill=\"#f8fafc\"/><text data-role=\"elastic-demand-label\" x=\"295\" y=\"148\" fill=\"#60a5fa\" font-size=\"12\">D elastis</text><text data-role=\"inelastic-demand-label\" x=\"246\" y=\"82\" fill=\"#fbbf24\" font-size=\"12\">D inelastis</text></svg>",
    "altText": "Dua kurva permintaan melewati titik yang sama. Kurva biru lebih datar dan lebih elastis; kurva jingga lebih curam dan lebih inelastis.",
    "sourceAnchors": [
      "A. Price Elasticity of Demand (Ed)"
    ]
  },
  {
    "id": "PTE-BANK-UTS-024",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Elastisitas",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "kind": "graph",
    "sourceRef": "Reading EKT109 TM 5",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pada kurva permintaan yang sangat curam, beban pajak cenderung lebih banyak ditanggung oleh...",
    "explanation": "Sisi pasar yang lebih inelastis menanggung bagian pajak lebih besar karena kuantitasnya kurang responsif terhadap perubahan harga.",
    "options": [
      "produsen tanpa melihat elastisitas",
      "pemerintah",
      "pihak luar pasar",
      "konsumen jika permintaan lebih inelastis"
    ],
    "answerIndex": 3,
    "svg": "<svg data-graph-id=\"PTE-BANK-UTS-G05B\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-UTS-G05B-title PTE-BANK-UTS-G05B-desc\"><title id=\"PTE-BANK-UTS-G05B-title\">Permintaan inelastis dan insidensi pajak</title><desc id=\"PTE-BANK-UTS-G05B-desc\">Kurva permintaan sangat curam. Pajak menggeser penawaran ke atas, menurunkan kuantitas sedikit, menaikkan harga pembeli jauh lebih besar daripada penurunan harga yang diterima penjual. Konsumen menanggung bagian pajak lebih besar.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Kuantitas</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Harga</text><line data-role=\"inelastic-demand\" x1=\"190\" y1=\"45\" x2=\"245\" y2=\"210\" stroke=\"#60a5fa\" stroke-width=\"4\"/><line data-role=\"supply\" x1=\"80\" y1=\"200\" x2=\"350\" y2=\"65\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"taxed-supply\" x1=\"80\" y1=\"165\" x2=\"350\" y2=\"30\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"7 5\"/><line data-role=\"tax-wedge\" x1=\"208.6\" y1=\"100.7\" x2=\"208.6\" y2=\"135.7\" stroke=\"#f59e0b\" stroke-width=\"6\"/><circle data-role=\"pre-tax-equilibrium\" cx=\"218.6\" cy=\"130.7\" r=\"4\" fill=\"#f8fafc\"/><circle data-role=\"buyer-price\" cx=\"208.6\" cy=\"100.7\" r=\"4\" fill=\"#f59e0b\"/><circle data-role=\"seller-price\" cx=\"208.6\" cy=\"135.7\" r=\"4\" fill=\"#f59e0b\"/><line x1=\"58\" y1=\"100.7\" x2=\"208.6\" y2=\"100.7\" stroke=\"#f59e0b\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><line x1=\"58\" y1=\"130.7\" x2=\"218.6\" y2=\"130.7\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><line x1=\"58\" y1=\"135.7\" x2=\"208.6\" y2=\"135.7\" stroke=\"#f59e0b\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text data-role=\"inelastic-demand-label\" x=\"252\" y=\"205\" fill=\"#60a5fa\" font-size=\"11\">D inelastis</text><text data-role=\"supply-label\" x=\"338\" y=\"69\" fill=\"#22c55e\" font-size=\"11\">S</text><text data-role=\"taxed-supply-label\" x=\"326\" y=\"32\" fill=\"#fca5a5\" font-size=\"11\">S + pajak</text><text data-role=\"consumer-burden-label\" x=\"216\" y=\"96\" fill=\"#fbbf24\" font-size=\"11\">beban konsumen lebih besar</text></svg>",
    "altText": "Kurva permintaan sangat curam dan kurva penawaran bergeser ke atas akibat pajak. Kenaikan harga pembeli lebih besar daripada penurunan harga penjual, sehingga konsumen menanggung bagian pajak lebih besar.",
    "sourceAnchors": [
      "D. Aplikasi"
    ]
  },
  {
    "id": "PTE-BANK-UTS-025",
    "phase": "pra-uts",
    "tm": 5,
    "topic": "Elastisitas",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "kind": "matching",
    "sourceRef": "Reading EKT109 TM 5",
    "sourceStatus": "generated-from-reading",
    "prompt": "Cocokkan jenis elastisitas dengan respons kuantitas.",
    "explanation": "Elastisitas nol berarti kuantitas tidak berubah; unit elastic berarti persentase sama; elastis lebih dari satu; inelastis kurang dari satu.",
    "pairs": [
      {
        "prompt": "Elastis sempurna",
        "answer": "Kurva horizontal"
      },
      {
        "prompt": "Inelastis sempurna",
        "answer": "Kurva vertikal"
      },
      {
        "prompt": "Unit elastic",
        "answer": "|Ed| = 1"
      },
      {
        "prompt": "Elastis",
        "answer": "|Ed| > 1"
      }
    ],
    "choices": [
      "|Ed| > 1",
      "Kurva vertikal",
      "Kurva horizontal",
      "|Ed| = 1"
    ],
    "sourceAnchors": [
      "A. Price Elasticity of Demand (Ed)",
      "C. Elastisitas Lain"
    ]
  },
  {
    "id": "PTE-BANK-UTS-026",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Kebijakan Pemerintah di Pasar",
    "difficulty": "easy",
    "competency": "Hubungan Sebab-Akibat",
    "kind": "single-choice",
    "sourceRef": "Reading EKT109 TM 6",
    "sourceStatus": "generated-from-reading",
    "prompt": "Price ceiling yang mengikat akan menyebabkan...",
    "explanation": "Price ceiling di bawah harga keseimbangan membuat jumlah diminta lebih besar daripada jumlah ditawarkan sehingga terjadi shortage.",
    "options": [
      "surplus",
      "shortage",
      "harga naik tanpa batas",
      "kurva penawaran hilang"
    ],
    "answerIndex": 1,
    "sourceAnchors": [
      "A. Kontrol Harga"
    ]
  },
  {
    "id": "PTE-BANK-UTS-027",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Kebijakan Pemerintah di Pasar",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "kind": "graph",
    "sourceRef": "Reading EKT109 TM 6",
    "sourceStatus": "generated-from-reading",
    "prompt": "Grafik menunjukkan price floor di atas harga keseimbangan. Hasil utamanya adalah...",
    "explanation": "Harga minimum yang mengikat membuat jumlah ditawarkan lebih besar daripada jumlah diminta sehingga terbentuk surplus.",
    "options": [
      "surplus",
      "shortage",
      "tidak ada transaksi",
      "permintaan bergeser kanan"
    ],
    "answerIndex": 0,
    "svg": "<svg data-graph-id=\"PTE-BANK-UTS-G06\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-UTS-G06-title PTE-BANK-UTS-G06-desc\"><title id=\"PTE-BANK-UTS-G06-title\">Price floor di atas keseimbangan</title><desc id=\"PTE-BANK-UTS-G06-desc\">Harga minimum di atas keseimbangan menyebabkan jumlah ditawarkan melebihi jumlah diminta atau surplus.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Kuantitas</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Harga</text><line data-role=\"supply\" x1=\"92\" y1=\"190\" x2=\"340\" y2=\"72\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"demand\" x1=\"92\" y1=\"72\" x2=\"340\" y2=\"190\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"price-floor\" x1=\"58\" y1=\"92\" x2=\"388\" y2=\"92\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"7 5\"/><text data-role=\"price-floor-label\" x=\"305\" y=\"86\" fill=\"#fbbf24\" font-size=\"12\">P minimum</text></svg>",
    "altText": "Kurva permintaan dan penawaran dengan garis price floor di atas harga keseimbangan.",
    "sourceAnchors": [
      "A. Kontrol Harga"
    ]
  },
  {
    "id": "PTE-BANK-UTS-028",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Kebijakan Pemerintah di Pasar",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "kind": "graph",
    "sourceRef": "Reading EKT109 TM 6",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pada grafik pajak, segitiga DWL muncul karena...",
    "explanation": "Pajak mengurangi jumlah transaksi yang saling menguntungkan sehingga sebagian total surplus hilang.",
    "options": [
      "pajak menambah semua transaksi",
      "kuantitas transaksi turun dari tingkat efisien",
      "harga pembeli dan penjual menjadi sama",
      "penawaran menjadi vertikal"
    ],
    "answerIndex": 1,
    "svg": "<svg data-graph-id=\"PTE-BANK-UTS-G07\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-UTS-G07-title PTE-BANK-UTS-G07-desc\"><title id=\"PTE-BANK-UTS-G07-title\">Pajak, tax wedge, dan deadweight loss</title><desc id=\"PTE-BANK-UTS-G07-desc\">Tanpa pajak, permintaan dan penawaran berpotongan pada kuantitas efisien Qe. Pajak menciptakan wedge vertikal pada kuantitas lebih rendah Qt. Segitiga antara Qt dan Qe adalah deadweight loss.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Kuantitas</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Harga</text><polygon data-role=\"deadweight-loss\" points=\"180,113.2 180,146.8 215,130\" fill=\"#ef4444\" fill-opacity=\".28\"/><line data-role=\"demand\" x1=\"90\" y1=\"70\" x2=\"340\" y2=\"190\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"supply\" x1=\"90\" y1=\"190\" x2=\"340\" y2=\"70\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"tax-wedge\" x1=\"180\" y1=\"113.2\" x2=\"180\" y2=\"146.8\" stroke=\"#f59e0b\" stroke-width=\"6\"/><circle data-role=\"equilibrium\" cx=\"215\" cy=\"130\" r=\"4.5\" fill=\"#f8fafc\"/><line x1=\"180\" y1=\"146.8\" x2=\"180\" y2=\"218\" stroke=\"#f59e0b\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><line x1=\"215\" y1=\"130\" x2=\"215\" y2=\"218\" stroke=\"#f8fafc\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text data-role=\"tax-quantity-label\" x=\"168\" y=\"234\" fill=\"#fbbf24\" font-size=\"11\">Qt</text><text data-role=\"efficient-quantity-label\" x=\"207\" y=\"234\" fill=\"#f8fafc\" font-size=\"11\">Qe</text><text data-role=\"tax-label\" x=\"186\" y=\"126\" fill=\"#fbbf24\" font-size=\"11\">pajak</text><text data-role=\"deadweight-loss-label\" x=\"187\" y=\"104\" fill=\"#fca5a5\" font-size=\"11\">DWL</text><text data-role=\"demand-label\" x=\"326\" y=\"190\" fill=\"#60a5fa\" font-size=\"11\">D</text><text data-role=\"supply-label\" x=\"326\" y=\"72\" fill=\"#22c55e\" font-size=\"11\">S</text></svg>",
    "altText": "Kurva permintaan dan penawaran berpotongan pada kuantitas efisien Qe. Pajak menciptakan wedge pada kuantitas lebih rendah Qt, dan segitiga di antara Qt dan Qe menunjukkan deadweight loss.",
    "sourceAnchors": [
      "B. Pajak & Tax Incidence"
    ]
  },
  {
    "id": "PTE-BANK-UTS-029",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Kebijakan Pemerintah di Pasar",
    "difficulty": "hard",
    "competency": "Hubungan Sebab-Akibat",
    "kind": "ordering",
    "sourceRef": "Reading EKT109 TM 6",
    "sourceStatus": "generated-from-reading",
    "prompt": "Urutkan mekanisme pajak spesifik pada pasar kompetitif.",
    "explanation": "Pajak menciptakan wedge, menaikkan harga pembeli dan menurunkan harga penjual, lalu menurunkan kuantitas transaksi dan menimbulkan deadweight loss.",
    "items": [
      "Kuantitas transaksi turun",
      "Wedge pajak terbentuk",
      "Deadweight loss muncul",
      "Harga pembeli dan penjual terpisah"
    ],
    "correctOrder": [
      "Wedge pajak terbentuk",
      "Harga pembeli dan penjual terpisah",
      "Kuantitas transaksi turun",
      "Deadweight loss muncul"
    ],
    "sourceAnchors": [
      "B. Pajak & Tax Incidence"
    ]
  },
  {
    "id": "PTE-BANK-UTS-030",
    "phase": "pra-uts",
    "tm": 6,
    "topic": "Kebijakan Pemerintah di Pasar",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "kind": "true-false",
    "sourceRef": "Reading EKT109 TM 6",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pihak yang secara hukum diwajibkan menyetor pajak selalu menanggung seluruh beban ekonomi pajak.",
    "explanation": "Salah. Beban ekonomi pajak ditentukan elastisitas relatif permintaan dan penawaran, bukan hanya siapa yang menyetor secara administratif.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1,
    "sourceAnchors": [
      "B. Pajak & Tax Incidence"
    ]
  },
  {
    "id": "PTE-BANK-UTS-031",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Produsen, Konsumen, dan Efisiensi Pasar",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "kind": "single-choice",
    "sourceRef": "Reading EKT109 TM 7",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pasar kompetitif mencapai efisiensi alokatif ketika...",
    "explanation": "Pada keseimbangan kompetitif, jumlah yang diperdagangkan memaksimalkan total surplus.",
    "options": [
      "harga selalu nol",
      "produsen menerima seluruh surplus",
      "jumlah yang diperdagangkan memaksimalkan total surplus",
      "pemerintah menentukan semua harga"
    ],
    "answerIndex": 2,
    "sourceAnchors": [
      "B. Efisiensi Pasar"
    ]
  },
  {
    "id": "PTE-BANK-UTS-032",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Produsen, Konsumen, dan Efisiensi Pasar",
    "difficulty": "easy",
    "competency": "Interpretasi Grafik",
    "kind": "graph",
    "sourceRef": "Reading EKT109 TM 7",
    "sourceStatus": "generated-from-reading",
    "prompt": "Titik E* pada grafik pasar kompetitif menunjukkan...",
    "explanation": "Perpotongan permintaan dan penawaran menentukan harga dan kuantitas keseimbangan; tanpa distorsi, titik ini memaksimalkan total surplus.",
    "options": [
      "harga maksimum",
      "shortage permanen",
      "monopoli alamiah",
      "keseimbangan pasar"
    ],
    "answerIndex": 3,
    "svg": "<svg data-graph-id=\"PTE-BANK-UTS-G08\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-UTS-G08-title PTE-BANK-UTS-G08-desc\"><title id=\"PTE-BANK-UTS-G08-title\">Keseimbangan pasar kompetitif</title><desc id=\"PTE-BANK-UTS-G08-desc\">Perpotongan permintaan dan penawaran menentukan harga dan kuantitas keseimbangan yang memaksimalkan total surplus tanpa distorsi.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Kuantitas</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Harga</text><line data-role=\"supply\" x1=\"92\" y1=\"190\" x2=\"340\" y2=\"72\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"demand\" x1=\"92\" y1=\"72\" x2=\"340\" y2=\"190\" stroke=\"#60a5fa\" stroke-width=\"3\"/><circle data-role=\"equilibrium\" cx=\"216\" cy=\"130\" r=\"6\" fill=\"#f59e0b\"/><line data-role=\"equilibrium-quantity\" x1=\"216\" y1=\"130\" x2=\"216\" y2=\"218\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><line data-role=\"equilibrium-price\" x1=\"58\" y1=\"130\" x2=\"216\" y2=\"130\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><text data-role=\"equilibrium-label\" x=\"226\" y=\"124\" fill=\"#fbbf24\" font-size=\"12\">E*</text></svg>",
    "altText": "Kurva permintaan dan penawaran berpotongan pada titik keseimbangan E*.",
    "sourceAnchors": [
      "B. Efisiensi Pasar"
    ]
  },
  {
    "id": "PTE-BANK-UTS-033",
    "phase": "pra-uts",
    "tm": 4,
    "topic": "Perilaku Konsumen",
    "difficulty": "medium",
    "competency": "Movement & Shift",
    "kind": "matching",
    "sourceRef": "Reading EKT109 TM 4",
    "sourceStatus": "generated-from-reading",
    "prompt": "Cocokkan perubahan kondisi dengan perubahan garis anggaran.",
    "explanation": "Dengan harga tetap, perubahan pendapatan menggeser garis anggaran sejajar. Perubahan harga satu barang memutar garis melalui perubahan intersep barang tersebut.",
    "pairs": [
      {
        "prompt": "Pendapatan naik, harga tetap",
        "answer": "Garis anggaran bergeser keluar sejajar"
      },
      {
        "prompt": "Pendapatan turun, harga tetap",
        "answer": "Garis anggaran bergeser ke dalam sejajar"
      },
      {
        "prompt": "Harga barang X turun",
        "answer": "Intersep sumbu X bergerak keluar"
      },
      {
        "prompt": "Harga barang Y naik",
        "answer": "Intersep sumbu Y bergerak ke dalam"
      }
    ],
    "choices": [
      "Intersep sumbu Y bergerak ke dalam",
      "Garis anggaran bergeser keluar sejajar",
      "Intersep sumbu X bergerak keluar",
      "Garis anggaran bergeser ke dalam sejajar"
    ],
    "sourceAnchors": [
      "C. Garis Anggaran (Budget Constraint)"
    ]
  },
  {
    "id": "PTE-BANK-UTS-034",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Produsen, Konsumen, dan Efisiensi Pasar",
    "difficulty": "easy",
    "competency": "Perhitungan",
    "kind": "numeric",
    "sourceRef": "Reading EKT109 TM 7",
    "sourceStatus": "generated-from-reading",
    "prompt": "Seorang konsumen bersedia membayar Rp90.000, tetapi harga pasar Rp65.000. Berapa surplus konsumen?",
    "explanation": "Surplus konsumen = willingness to pay - harga = 90.000 - 65.000 = 25.000.",
    "answer": 25000,
    "tolerance": 0,
    "answerPrefix": "Rp",
    "sourceAnchors": [
      "A. Surplus Konsumen & Produsen"
    ]
  },
  {
    "id": "PTE-BANK-UTS-035",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Produsen, Konsumen, dan Efisiensi Pasar",
    "difficulty": "hard",
    "competency": "Hubungan Sebab-Akibat",
    "kind": "ordering",
    "sourceRef": "Reading EKT109 TM 7",
    "sourceStatus": "generated-from-reading",
    "prompt": "Urutkan mekanisme munculnya deadweight loss akibat pajak per unit.",
    "explanation": "Pajak membentuk wedge antara harga pembeli dan penjual, menurunkan kuantitas di bawah tingkat efisien, menghilangkan transaksi yang sebelumnya saling menguntungkan, lalu menimbulkan deadweight loss.",
    "items": [
      "Sebagian transaksi saling menguntungkan hilang",
      "Tax wedge terbentuk",
      "Deadweight loss muncul",
      "Kuantitas transaksi turun di bawah Q*"
    ],
    "correctOrder": [
      "Tax wedge terbentuk",
      "Kuantitas transaksi turun di bawah Q*",
      "Sebagian transaksi saling menguntungkan hilang",
      "Deadweight loss muncul"
    ],
    "sourceAnchors": [
      "C. Deadweight Loss (DWL)"
    ]
  },
  {
    "id": "PTE-BANK-UTS-036",
    "phase": "pra-uts",
    "tm": 7,
    "topic": "Produsen, Konsumen, dan Efisiensi Pasar",
    "difficulty": "hard",
    "competency": "Kasus Integratif",
    "kind": "short-answer",
    "assessmentMode": "guided-review",
    "simulatorEligible": false,
    "sourceRef": "Reading EKT109 TM 7",
    "sourceStatus": "generated-from-reading",
    "prompt": "Pajak per unit menurunkan kuantitas transaksi dari Q* ke Qt. Jelaskan bagian surplus yang berpindah menjadi penerimaan pemerintah, bagian yang hilang sebagai deadweight loss, dan mengapa pasar yang lebih elastis cenderung menghasilkan DWL lebih besar.",
    "explanation": "Penerimaan pemerintah adalah pajak per unit dikalikan Qt dan merupakan transfer surplus. DWL adalah surplus dari transaksi antara Qt dan Q* yang tidak lagi terjadi. Respons kuantitas lebih besar pada pasar elastis, sehingga lebih banyak transaksi hilang dan DWL lebih besar.",
    "answerGuide": "Jelaskan tax revenue = t × Qt sebagai transfer, DWL sebagai surplus transaksi yang hilang antara Qt dan Q*, serta hubungan elastisitas yang lebih tinggi dengan penurunan kuantitas dan DWL yang lebih besar.",
    "sourceAnchors": [
      "C. Deadweight Loss (DWL)"
    ]
  },
  {
    "id": "PTE-BANK-SRC-001",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pendapatan Nasional",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q001 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "GDP mengukur...",
    "explanation": "GDP/PDB berbasis wilayah domestik dan hanya menghitung barang/jasa akhir baru.",
    "kind": "single-choice",
    "options": [
      "nilai pasar barang dan jasa akhir yang diproduksi domestik",
      "nilai pasar barang antara",
      "nilai seluruh transaksi saham",
      "pendapatan warga negara di mana pun berada"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-002",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pendapatan Nasional",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q002 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Pembelian rumah baru dalam GDP pendekatan pengeluaran masuk ke...",
    "explanation": "Rumah baru masuk investasi residensial.",
    "kind": "single-choice",
    "options": [
      "I",
      "C",
      "G",
      "NX"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-003",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pendapatan Nasional",
    "difficulty": "easy",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q003 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Jika nominal GDP = 1.500 dan real GDP = 1.200, GDP deflator = ...",
    "explanation": "Deflator = 1.500/1.200 × 100 = 125.",
    "kind": "numeric",
    "answer": 125,
    "tolerance": 0
  },
  {
    "id": "PTE-BANK-SRC-004",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Perekonomian Tertutup: Tabungan dan Dana Pinjaman",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q004 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Dalam perekonomian tertutup dengan pemerintah, identitas pengeluaran adalah...",
    "explanation": "Ekonomi tertutup tidak memiliki NX, sehingga Y=C+I+G.",
    "kind": "single-choice",
    "options": [
      "Y=C+I+G+NX",
      "S=NX",
      "GDP=GNP",
      "Y=C+I+G"
    ],
    "answerIndex": 3
  },
  {
    "id": "PTE-BANK-SRC-005",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Perekonomian Tertutup: Multiplier dan Kebijakan Fiskal",
    "difficulty": "easy",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q005 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Jika MPC = 0,75, multiplier belanja pemerintah adalah...",
    "explanation": "k = 1/(1−0,75) = 4.",
    "kind": "numeric",
    "answer": 4,
    "tolerance": 0
  },
  {
    "id": "PTE-BANK-SRC-006",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Perekonomian Tertutup: Multiplier dan Kebijakan Fiskal",
    "difficulty": "easy",
    "competency": "Hubungan Sebab-Akibat",
    "sourceRef": "PTE-SRC-Q006 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Tax multiplier bernilai negatif karena...",
    "explanation": "Pajak menurunkan Yd, lalu konsumsi turun sebesar MPC × perubahan pajak.",
    "kind": "single-choice",
    "options": [
      "pajak selalu buruk",
      "pajak tidak memengaruhi konsumsi",
      "kenaikan pajak mengurangi disposable income dan konsumsi",
      "pajak langsung masuk GDP"
    ],
    "answerIndex": 2
  },
  {
    "id": "PTE-BANK-SRC-007",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Perekonomian Tertutup: Multiplier dan Kebijakan Fiskal",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q007 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Balanced-budget multiplier dalam model sederhana bernilai...",
    "explanation": "Kenaikan G dan T sama besar menaikkan output sebesar perubahan G bersih karena multiplier G lebih besar dari multiplier T secara absolut.",
    "kind": "single-choice",
    "options": [
      "0",
      "−1",
      "sebesar MPC",
      "1"
    ],
    "answerIndex": 3
  },
  {
    "id": "PTE-BANK-SRC-008",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q008 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Fungsi utama uang sebagai medium of exchange berarti uang...",
    "explanation": "Medium of exchange berarti alat tukar yang diterima umum.",
    "kind": "single-choice",
    "options": [
      "mengukur inflasi",
      "menjadi alat tukar umum",
      "selalu memberi bunga",
      "hanya berupa emas"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-BANK-SRC-009",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "easy",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q009 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Jika reserve ratio = 20%, simple money multiplier = ...",
    "explanation": "Multiplier = 1/0,20 = 5.",
    "kind": "numeric",
    "answer": 5,
    "tolerance": 0
  },
  {
    "id": "PTE-BANK-SRC-010",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q010 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "MV = PY adalah persamaan dalam...",
    "explanation": "MV=PY adalah quantity equation.",
    "kind": "single-choice",
    "options": [
      "teori keunggulan komparatif",
      "teori kuantitas uang",
      "teori utilitas",
      "hukum permintaan"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-BANK-SRC-011",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "easy",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q011 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Kenaikan policy rate biasanya akan...",
    "explanation": "Suku bunga acuan lebih tinggi membuat kredit lebih mahal dan menekan permintaan agregat.",
    "kind": "graph",
    "options": [
      "mendorong investasi naik kuat",
      "menurunkan biaya kredit dan menaikkan AD",
      "tidak memengaruhi ekonomi",
      "menaikkan biaya kredit dan menekan AD"
    ],
    "answerIndex": 3,
    "svg": "<svg data-graph-id=\"PTE-BANK-G011\" viewBox=\"0 0 440 250\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G011-title PTE-BANK-G011-desc\"><title id=\"PTE-BANK-G011-title\">Transmisi kenaikan policy rate</title><desc id=\"PTE-BANK-G011-desc\">Kenaikan suku bunga kebijakan menaikkan suku bunga pasar, menekan konsumsi dan investasi, lalu menurunkan permintaan agregat.</desc><defs><marker id=\"PTE-BANK-G011-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#fbbf24\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"440\" height=\"250\" rx=\"14\" fill=\"#0f172a\"/><rect data-role=\"policy-node-1\" x=\"30\" y=\"92\" width=\"76\" height=\"66\" rx=\"12\" fill=\"#172554\" stroke=\"#60a5fa\"/><text data-role=\"policy-node-1-label-1\" x=\"68\" y=\"119\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">Policy rate</text><text data-role=\"policy-node-1-label-2\" x=\"68\" y=\"137\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">naik</text><rect data-role=\"policy-node-2\" x=\"130\" y=\"92\" width=\"76\" height=\"66\" rx=\"12\" fill=\"#172554\" stroke=\"#60a5fa\"/><text data-role=\"policy-node-2-label-1\" x=\"168\" y=\"119\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">Bunga pasar</text><text data-role=\"policy-node-2-label-2\" x=\"168\" y=\"137\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">naik</text><rect data-role=\"policy-node-3\" x=\"230\" y=\"92\" width=\"76\" height=\"66\" rx=\"12\" fill=\"#172554\" stroke=\"#60a5fa\"/><text data-role=\"policy-node-3-label-1\" x=\"268\" y=\"119\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">C dan</text><text data-role=\"policy-node-3-label-2\" x=\"268\" y=\"137\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">I turun</text><rect data-role=\"policy-node-4\" x=\"330\" y=\"92\" width=\"76\" height=\"66\" rx=\"12\" fill=\"#172554\" stroke=\"#60a5fa\"/><text data-role=\"policy-node-4-label-1\" x=\"368\" y=\"128\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">AD turun</text><line data-role=\"policy-arrow-1\" x1=\"108\" y1=\"125\" x2=\"124\" y2=\"125\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#PTE-BANK-G011-arrow)\"/><line data-role=\"policy-arrow-2\" x1=\"208\" y1=\"125\" x2=\"224\" y2=\"125\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#PTE-BANK-G011-arrow)\"/><line data-role=\"policy-arrow-3\" x1=\"308\" y1=\"125\" x2=\"324\" y2=\"125\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#PTE-BANK-G011-arrow)\"/></svg>",
    "altText": "Transmisi kenaikan policy rate. Kenaikan suku bunga kebijakan menaikkan suku bunga pasar, menekan konsumsi dan investasi, lalu menurunkan permintaan agregat."
  },
  {
    "id": "PTE-BANK-SRC-012",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Perekonomian Terbuka",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q012 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Current account mencatat...",
    "explanation": "Current account berisi transaksi riil dan pendapatan/transfer lintas negara.",
    "kind": "single-choice",
    "options": [
      "hanya cadangan devisa",
      "transaksi barang, jasa, pendapatan, dan transfer berjalan",
      "hanya pembelian saham",
      "hanya APBN"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-BANK-SRC-013",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Perekonomian Terbuka: Tabungan, Investasi, dan Ekspor Neto",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q013 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Dalam ekonomi terbuka, identitas yang benar adalah...",
    "explanation": "Dari Y=C+I+G+NX dan S=Y−C−G, diperoleh S=I+NX.",
    "kind": "single-choice",
    "options": [
      "S=C+G",
      "S=I+NX",
      "NX=I−S selalu",
      "NCO=G"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-BANK-SRC-014",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Perekonomian Terbuka: Tabungan, Investasi, dan Ekspor Neto",
    "difficulty": "easy",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q014 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Jika S < I, maka biasanya...",
    "explanation": "NX = S−I, sehingga jika S<I maka NX negatif.",
    "kind": "graph",
    "options": [
      "NX negatif",
      "NX positif",
      "tidak ada arus modal",
      "ekspor pasti nol"
    ],
    "answerIndex": 0,
    "svg": "<svg data-graph-id=\"PTE-BANK-G014\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G014-title PTE-BANK-G014-desc\"><title id=\"PTE-BANK-G014-title\">Tabungan lebih kecil daripada investasi</title><desc id=\"PTE-BANK-G014-desc\">Batang tabungan S lebih pendek daripada batang investasi I sehingga NX sama dengan S dikurangi I bernilai negatif.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"70\" y1=\"212\" x2=\"370\" y2=\"212\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"70\" y1=\"212\" x2=\"70\" y2=\"34\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><rect data-role=\"saving-bar\" x=\"120\" y=\"112\" width=\"72\" height=\"100\" rx=\"8\" fill=\"#22c55e\"/><rect data-role=\"investment-bar\" x=\"238\" y=\"66\" width=\"72\" height=\"146\" rx=\"8\" fill=\"#ef4444\"/><text data-role=\"saving-symbol-label\" x=\"156\" y=\"232\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"13\">S</text><text data-role=\"investment-symbol-label\" x=\"274\" y=\"232\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"13\">I</text><text data-role=\"saving-label\" x=\"156\" y=\"102\" text-anchor=\"middle\" fill=\"#86efac\" font-size=\"12\">Tabungan</text><text data-role=\"investment-label\" x=\"274\" y=\"56\" text-anchor=\"middle\" fill=\"#fca5a5\" font-size=\"12\">Investasi</text><text data-role=\"nx-identity-label\" x=\"210\" y=\"30\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"14\">NX = S − I &lt; 0</text><text data-role=\"x-axis-label\" x=\"326\" y=\"248\" fill=\"#cbd5e1\" font-size=\"10\">Komponen</text><text data-role=\"y-axis-label\" x=\"8\" y=\"48\" fill=\"#cbd5e1\" font-size=\"10\">Nilai relatif</text></svg>",
    "altText": "Diagram batang menunjukkan tabungan S lebih kecil daripada investasi I, sehingga ekspor neto NX sama dengan S dikurangi I bernilai negatif."
  },
  {
    "id": "PTE-BANK-SRC-015",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Perekonomian Terbuka",
    "difficulty": "easy",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q015 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Depresiasi mata uang domestik cenderung...",
    "explanation": "Depresiasi membuat mata uang domestik lebih lemah sehingga barang impor menjadi lebih mahal.",
    "kind": "graph",
    "options": [
      "membuat impor lebih murah",
      "membuat impor lebih mahal",
      "membuat ekspor lebih mahal bagi asing",
      "selalu menurunkan inflasi"
    ],
    "answerIndex": 1,
    "svg": "<svg data-graph-id=\"PTE-BANK-G015\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G015-title PTE-BANK-G015-desc\"><title id=\"PTE-BANK-G015-title\">Dampak depresiasi pada perdagangan</title><desc id=\"PTE-BANK-G015-desc\">Depresiasi membuat impor lebih mahal dan dapat meningkatkan daya saing ekspor, dengan dampak ekspor neto bergantung elastisitas dan jeda.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Volume perdagangan</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Harga relatif</text><line data-role=\"import-curve\" x1=\"92\" y1=\"64\" x2=\"330\" y2=\"194\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"export-curve\" x1=\"92\" y1=\"194\" x2=\"330\" y2=\"64\" stroke=\"#22c55e\" stroke-width=\"3\"/><text data-role=\"import-label\" x=\"326\" y=\"199\" fill=\"#60a5fa\" font-size=\"12\">Impor</text><text data-role=\"export-label\" x=\"326\" y=\"70\" fill=\"#22c55e\" font-size=\"12\">Ekspor</text><path data-role=\"depreciation-path\" d=\"M180 168 C230 150 272 120 310 88\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><text data-role=\"depreciation-label\" x=\"218\" y=\"145\" fill=\"#fbbf24\" font-size=\"11\">depresiasi</text></svg>",
    "altText": "Dampak depresiasi pada perdagangan. Depresiasi membuat impor lebih mahal dan dapat meningkatkan daya saing ekspor, dengan dampak ekspor neto bergantung elastisitas dan jeda."
  },
  {
    "id": "PTE-BANK-SRC-016",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Perekonomian Terbuka",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q016 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "PPP menyatakan bahwa nilai tukar jangka panjang cenderung menyesuaikan...",
    "explanation": "PPP berangkat dari law of one price dan kesetaraan daya beli.",
    "kind": "single-choice",
    "options": [
      "jumlah penduduk saja",
      "APBN saja",
      "perbedaan daya beli/harga antarnegara",
      "tingkat pengangguran saja"
    ],
    "answerIndex": 2
  },
  {
    "id": "PTE-BANK-SRC-017",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q017 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Inflasi demand-pull terjadi ketika...",
    "explanation": "Demand-pull berasal dari permintaan agregat yang melebihi kapasitas output.",
    "kind": "graph",
    "options": [
      "AS bergeser kanan",
      "uang hilang dari ekonomi",
      "pengangguran struktural naik tanpa permintaan",
      "AD terlalu kuat"
    ],
    "answerIndex": 3,
    "svg": "<svg data-graph-id=\"PTE-BANK-G017\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G017-title PTE-BANK-G017-desc\"><title id=\"PTE-BANK-G017-title\">Demand-pull inflation akibat pergeseran AD ke kanan</title><desc id=\"PTE-BANK-G017-desc\">Kurva SRAS menanjak. AD1 dan AD2 sama-sama menurun; AD2 berada di kanan AD1. Pergeseran permintaan agregat ke kanan menaikkan tingkat harga dan output jangka pendek.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Output riil</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Tingkat harga</text><line data-role=\"sras\" x1=\"85\" y1=\"190\" x2=\"340\" y2=\"65\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"ad1\" x1=\"75\" y1=\"70\" x2=\"325\" y2=\"190\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"ad2\" x1=\"120\" y1=\"70\" x2=\"370\" y2=\"190\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"7 5\"/><path d=\"M275 205 C300 214 326 213 348 198\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.8\" marker-end=\"url(#PTE-BANK-G017-arrow)\"/><defs><marker id=\"PTE-BANK-G017-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L0,6 L8,3 z\" fill=\"#f59e0b\"/></marker></defs><text data-role=\"sras-label\" x=\"328\" y=\"66\" fill=\"#22c55e\" font-size=\"12\">SRAS</text><text data-role=\"ad1-label\" x=\"300\" y=\"194\" fill=\"#60a5fa\" font-size=\"12\">AD₁</text><text data-role=\"ad2-label\" x=\"350\" y=\"184\" fill=\"#fbbf24\" font-size=\"12\">AD₂</text></svg>",
    "altText": "Kurva SRAS menanjak. Kurva AD1 dan AD2 sama-sama menurun, dengan AD2 bergeser ke kanan sehingga tingkat harga dan output jangka pendek meningkat."
  },
  {
    "id": "PTE-BANK-SRC-018",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q018 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Cost-push inflation dapat dipicu oleh...",
    "explanation": "Biaya produksi naik menggeser SRAS ke kiri dan menaikkan harga.",
    "kind": "graph",
    "options": [
      "penurunan harga energi",
      "penurunan upah nominal",
      "surplus besar barang",
      "kenaikan biaya produksi"
    ],
    "answerIndex": 3,
    "svg": "<svg data-graph-id=\"PTE-BANK-G018\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G018-title PTE-BANK-G018-desc\"><title id=\"PTE-BANK-G018-title\">Cost-push inflation</title><desc id=\"PTE-BANK-G018-desc\">Pergeseran SRAS ke kiri menaikkan tingkat harga dan menurunkan output, yaitu pola stagflasi.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Output riil</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Tingkat harga</text><line data-role=\"sras-before\" x1=\"82\" y1=\"186\" x2=\"334\" y2=\"86\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"sras-after\" x1=\"52\" y1=\"166\" x2=\"304\" y2=\"66\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"7 5\"/><line data-role=\"ad\" x1=\"82\" y1=\"78\" x2=\"334\" y2=\"178\" stroke=\"#60a5fa\" stroke-width=\"3\"/><text data-role=\"sras-before-label\" x=\"332\" y=\"82\" fill=\"#22c55e\" font-size=\"12\">SRAS₁</text><text data-role=\"sras-after-label\" x=\"293\" y=\"64\" fill=\"#ef4444\" font-size=\"12\">SRAS₂</text><text data-role=\"ad-label\" x=\"332\" y=\"182\" fill=\"#60a5fa\" font-size=\"12\">AD</text></svg>",
    "altText": "Cost-push inflation. Pergeseran SRAS ke kiri menaikkan tingkat harga dan menurunkan output, yaitu pola stagflasi."
  },
  {
    "id": "PTE-BANK-SRC-019",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q019 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Unemployment rate = ...",
    "explanation": "Tingkat pengangguran memakai angkatan kerja sebagai penyebut.",
    "kind": "single-choice",
    "options": [
      "unemployed/population",
      "labor force/population",
      "employed/unemployed",
      "unemployed/labor force × 100%"
    ],
    "answerIndex": 3
  },
  {
    "id": "PTE-BANK-SRC-020",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q020 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Pengangguran karena ketidaksesuaian skill disebut...",
    "explanation": "Structural unemployment muncul karena mismatch struktur keterampilan/lokasi/industri.",
    "kind": "single-choice",
    "options": [
      "structural",
      "frictional",
      "cyclical",
      "seasonal"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-021",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q021 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Okun’s law menghubungkan...",
    "explanation": "Okun mengaitkan deviasi pengangguran dari natural rate dengan deviasi output dari potensial.",
    "kind": "single-choice",
    "options": [
      "inflasi dan uang",
      "kurs dan ekspor",
      "pengangguran dan output gap",
      "tabungan dan investasi"
    ],
    "answerIndex": 2
  },
  {
    "id": "PTE-BANK-SRC-022",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q022 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Phillips curve jangka pendek menunjukkan...",
    "explanation": "Dalam jangka pendek, pengangguran lebih rendah sering terkait inflasi lebih tinggi.",
    "kind": "graph",
    "options": [
      "GDP selalu naik",
      "uang netral dalam semua jangka",
      "trade-off inflasi dan pengangguran",
      "kurs selalu tetap"
    ],
    "answerIndex": 2,
    "svg": "<svg data-graph-id=\"PTE-BANK-G022\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G022-title PTE-BANK-G022-desc\"><title id=\"PTE-BANK-G022-title\">Kurva Phillips jangka pendek dan panjang</title><desc id=\"PTE-BANK-G022-desc\">Kurva Phillips jangka pendek menurun, sedangkan kurva jangka panjang vertikal pada tingkat pengangguran alami.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Pengangguran</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Inflasi</text><path data-role=\"srpc\" d=\"M88 72 C170 100 260 142 340 192\" fill=\"none\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"lrpc\" x1=\"218\" y1=\"58\" x2=\"218\" y2=\"218\" stroke=\"#f59e0b\" stroke-width=\"3\"/><text data-role=\"srpc-label\" x=\"326\" y=\"196\" fill=\"#60a5fa\" font-size=\"12\">SRPC</text><text data-role=\"lrpc-label\" x=\"226\" y=\"66\" fill=\"#fbbf24\" font-size=\"12\">LRPC</text></svg>",
    "altText": "Kurva Phillips jangka pendek dan panjang. Kurva Phillips jangka pendek menurun, sedangkan kurva jangka panjang vertikal pada tingkat pengangguran alami."
  },
  {
    "id": "PTE-BANK-SRC-023",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q023 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Stagflation adalah kondisi...",
    "explanation": "Stagflation sering muncul akibat supply shock negatif.",
    "kind": "single-choice",
    "options": [
      "inflasi rendah dan output tinggi",
      "inflasi tinggi dan pengangguran tinggi",
      "pengangguran nol",
      "kurs tetap"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-BANK-SRC-024",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Pertumbuhan Ekonomi",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q024 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Pertumbuhan ekonomi paling tepat diukur dengan...",
    "explanation": "Pertumbuhan harus menghilangkan efek inflasi, sehingga memakai real GDP.",
    "kind": "single-choice",
    "options": [
      "kenaikan GDP nominal saja",
      "kenaikan harga saham saja",
      "jumlah uang kartal",
      "kenaikan real GDP atau real GDP per capita"
    ],
    "answerIndex": 3
  },
  {
    "id": "PTE-BANK-SRC-025",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Pertumbuhan Ekonomi",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q025 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Rule of 70 digunakan untuk...",
    "explanation": "Waktu pelipatan kira-kira 70 dibagi growth rate persen.",
    "kind": "single-choice",
    "options": [
      "memperkirakan waktu pelipatan pendapatan",
      "menghitung inflasi bulanan",
      "menentukan kurs PPP",
      "menghitung multiplier bank"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-026",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Pertumbuhan Ekonomi",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q026 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Sumber utama pertumbuhan jangka panjang yang berkelanjutan adalah...",
    "explanation": "Modal mengalami diminishing returns; kemajuan teknologi/TFP menopang pertumbuhan jangka panjang.",
    "kind": "single-choice",
    "options": [
      "teknologi dan produktivitas",
      "inflasi tinggi",
      "transfer payment saja",
      "konsumsi utang"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-027",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Pertumbuhan Ekonomi",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q027 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Catch-up effect berarti...",
    "explanation": "Modal awal rendah membuat tambahan modal lebih produktif, tetapi institusi dan stabilitas tetap penting.",
    "kind": "single-choice",
    "options": [
      "negara dengan modal awal rendah bisa tumbuh lebih cepat jika syarat dasar terpenuhi",
      "negara kaya pasti selalu tumbuh lebih cepat",
      "inflasi selalu nol",
      "perdagangan harus ditutup"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-028",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Pertumbuhan Ekonomi",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q028 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Human capital mencakup...",
    "explanation": "Human capital adalah kualitas manusia sebagai input produksi.",
    "kind": "single-choice",
    "options": [
      "mesin pabrik",
      "pendidikan, keterampilan, dan kesehatan tenaga kerja",
      "cadangan devisa",
      "barang impor"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-BANK-SRC-029",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Perekonomian Tertutup: Tabungan dan Dana Pinjaman",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q029 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Crowding out terjadi ketika...",
    "explanation": "Defisit meningkatkan kebutuhan pinjaman pemerintah dan dapat mengurangi ruang pembiayaan swasta.",
    "kind": "graph",
    "options": [
      "pajak turun selalu menaikkan tabungan publik",
      "ekspor selalu nol",
      "defisit pemerintah menekan investasi swasta melalui suku bunga/dana pinjaman",
      "uang tidak digunakan"
    ],
    "answerIndex": 2,
    "svg": "<svg data-graph-id=\"PTE-BANK-G029\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G029-title PTE-BANK-G029-desc\"><title id=\"PTE-BANK-G029-title\">Crowding out di pasar dana pinjaman</title><desc id=\"PTE-BANK-G029-desc\">Defisit menurunkan tabungan nasional sehingga kurva penawaran dana bergeser ke kiri, suku bunga riil naik, dan investasi turun.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Dana pinjaman</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Suku bunga riil</text><line data-role=\"investment-demand\" x1=\"100\" y1=\"80\" x2=\"342\" y2=\"190\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"saving-before\" x1=\"120\" y1=\"190\" x2=\"362\" y2=\"80\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"saving-after\" x1=\"78\" y1=\"190\" x2=\"320\" y2=\"80\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"7 5\"/><text data-role=\"investment-demand-label\" x=\"340\" y=\"194\" fill=\"#60a5fa\" font-size=\"12\">I</text><text data-role=\"saving-before-label\" x=\"352\" y=\"78\" fill=\"#22c55e\" font-size=\"12\">S₁</text><text data-role=\"saving-after-label\" x=\"308\" y=\"76\" fill=\"#ef4444\" font-size=\"12\">S₂</text></svg>",
    "altText": "Crowding out di pasar dana pinjaman. Defisit menurunkan tabungan nasional sehingga kurva penawaran dana bergeser ke kiri, suku bunga riil naik, dan investasi turun."
  },
  {
    "id": "PTE-BANK-SRC-030",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Pertumbuhan Ekonomi",
    "difficulty": "medium",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q030 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Pertumbuhan berbeda dari pembangunan karena pembangunan juga menilai...",
    "explanation": "Pembangunan lebih luas daripada pertumbuhan output.",
    "kind": "single-choice",
    "options": [
      "kualitas hidup, distribusi, kesehatan, pendidikan, dan lingkungan",
      "harga saja",
      "jumlah uang kartal saja",
      "pajak impor saja"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-031",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pendapatan Nasional",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q031 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "GDP menghitung barang antara dan barang akhir sekaligus.",
    "explanation": "Salah. GDP hanya menghitung nilai barang/jasa akhir; memasukkan barang antara menyebabkan penghitungan ganda.",
    "kind": "true-false",
    "options": [
      "Salah",
      "Benar"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-032",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Perekonomian Tertutup: Tabungan dan Dana Pinjaman",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q032 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Dalam perekonomian tertutup, tabungan nasional sama dengan investasi (S = I).",
    "explanation": "Benar. Dari Y = C + I + G diperoleh S = Y - C - G = I pada ekonomi tertutup.",
    "kind": "true-false",
    "options": [
      "Salah",
      "Benar"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-BANK-SRC-033",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q033 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Dalam jangka panjang, kenaikan jumlah uang beredar terutama menaikkan output riil, bukan harga.",
    "explanation": "Salah. Netralitas uang: dalam jangka panjang perubahan jumlah uang memengaruhi tingkat harga, bukan output riil.",
    "kind": "true-false",
    "options": [
      "Salah",
      "Benar"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-034",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Perekonomian Terbuka",
    "difficulty": "easy",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q034 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Depresiasi rupiah membuat ekspor Indonesia lebih murah bagi pembeli luar negeri.",
    "explanation": "Benar. Depresiasi menurunkan harga ekspor dalam mata uang asing sehingga lebih kompetitif.",
    "kind": "graph",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 0,
    "svg": "<svg data-graph-id=\"PTE-BANK-G034\" viewBox=\"0 0 440 250\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G034-title PTE-BANK-G034-desc\"><title id=\"PTE-BANK-G034-title\">Depresiasi rupiah dan ekspor</title><desc id=\"PTE-BANK-G034-desc\">Rupiah yang melemah membuat harga barang Indonesia relatif lebih murah bagi pembeli luar negeri, dengan syarat respons kuantitas dan kapasitas produksi memadai.</desc><defs><marker id=\"PTE-BANK-G034-arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#fbbf24\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"440\" height=\"250\" rx=\"14\" fill=\"#0f172a\"/><rect data-role=\"depreciation-node-1\" x=\"30\" y=\"92\" width=\"76\" height=\"66\" rx=\"12\" fill=\"#172554\" stroke=\"#60a5fa\"/><text data-role=\"depreciation-node-1-label-1\" x=\"68\" y=\"128\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">Rupiah melemah</text><rect data-role=\"depreciation-node-2\" x=\"130\" y=\"92\" width=\"76\" height=\"66\" rx=\"12\" fill=\"#172554\" stroke=\"#60a5fa\"/><text data-role=\"depreciation-node-2-label-1\" x=\"168\" y=\"119\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">Harga ekspor</text><text data-role=\"depreciation-node-2-label-2\" x=\"168\" y=\"137\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">relatif turun</text><rect data-role=\"depreciation-node-3\" x=\"230\" y=\"92\" width=\"76\" height=\"66\" rx=\"12\" fill=\"#172554\" stroke=\"#60a5fa\"/><text data-role=\"depreciation-node-3-label-1\" x=\"268\" y=\"119\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">Permintaan ekspor</text><text data-role=\"depreciation-node-3-label-2\" x=\"268\" y=\"137\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">naik</text><rect data-role=\"depreciation-node-4\" x=\"330\" y=\"92\" width=\"76\" height=\"66\" rx=\"12\" fill=\"#172554\" stroke=\"#60a5fa\"/><text data-role=\"depreciation-node-4-label-1\" x=\"368\" y=\"119\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">NX dapat</text><text data-role=\"depreciation-node-4-label-2\" x=\"368\" y=\"137\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"11\">naik</text><line data-role=\"depreciation-arrow-1\" x1=\"108\" y1=\"125\" x2=\"124\" y2=\"125\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#PTE-BANK-G034-arrow)\"/><line data-role=\"depreciation-arrow-2\" x1=\"208\" y1=\"125\" x2=\"224\" y2=\"125\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#PTE-BANK-G034-arrow)\"/><line data-role=\"depreciation-arrow-3\" x1=\"308\" y1=\"125\" x2=\"324\" y2=\"125\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#PTE-BANK-G034-arrow)\"/></svg>",
    "altText": "Depresiasi rupiah dan ekspor. Rupiah yang melemah membuat harga barang Indonesia relatif lebih murah bagi pembeli luar negeri, dengan syarat respons kuantitas dan kapasitas produksi memadai."
  },
  {
    "id": "PTE-BANK-SRC-035",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Perekonomian Terbuka",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q035 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Comparative advantage ditentukan oleh siapa yang memproduksi dengan input paling sedikit.",
    "explanation": "Salah. Itu absolute advantage. Comparative advantage ditentukan oleh biaya peluang terendah.",
    "kind": "true-false",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-BANK-SRC-036",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "easy",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q036 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Kurva Phillips jangka panjang menunjukkan trade-off permanen antara inflasi dan pengangguran.",
    "explanation": "Salah. Kurva Phillips jangka panjang tegak di tingkat pengangguran alami; tidak ada trade-off permanen.",
    "kind": "graph",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1,
    "svg": "<svg data-graph-id=\"PTE-BANK-G036\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G036-title PTE-BANK-G036-desc\"><title id=\"PTE-BANK-G036-title\">Trade-off Phillips tidak permanen</title><desc id=\"PTE-BANK-G036-desc\">Kurva jangka panjang vertikal menunjukkan tidak ada trade-off permanen antara inflasi dan pengangguran.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Pengangguran</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Inflasi</text><path data-role=\"srpc\" d=\"M88 72 C170 100 260 142 340 192\" fill=\"none\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"lrpc\" x1=\"218\" y1=\"58\" x2=\"218\" y2=\"218\" stroke=\"#f59e0b\" stroke-width=\"3\"/><text data-role=\"srpc-label\" x=\"326\" y=\"196\" fill=\"#60a5fa\" font-size=\"12\">SRPC</text><text data-role=\"lrpc-label\" x=\"226\" y=\"66\" fill=\"#fbbf24\" font-size=\"12\">LRPC</text></svg>",
    "altText": "Trade-off Phillips tidak permanen. Kurva jangka panjang vertikal menunjukkan tidak ada trade-off permanen antara inflasi dan pengangguran."
  },
  {
    "id": "PTE-BANK-SRC-037",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q037 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Suku bunga riil kira-kira sama dengan suku bunga nominal dikurangi inflasi.",
    "explanation": "Benar. Persamaan Fisher: r kira-kira i - inflasi.",
    "kind": "true-false",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-038",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "easy",
    "competency": "Hubungan Sebab-Akibat",
    "sourceRef": "PTE-SRC-Q038 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Pengangguran struktural terutama disebabkan oleh resesi dan permintaan agregat yang lemah.",
    "explanation": "Salah. Itu pengangguran siklis. Struktural berasal dari ketidaksesuaian keterampilan, lokasi, atau struktur pasar kerja.",
    "kind": "true-false",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-BANK-SRC-039",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "easy",
    "competency": "Hubungan Sebab-Akibat",
    "sourceRef": "PTE-SRC-Q039 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Inflasi yang tidak terduga cenderung merugikan kreditur dan menguntungkan debitur.",
    "explanation": "Benar. Inflasi tak terduga menurunkan nilai riil pembayaran utang, merugikan pemberi pinjaman, menguntungkan peminjam.",
    "kind": "true-false",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-040",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "easy",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q040 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Kurva LRAS bergeser setiap kali tingkat harga berubah.",
    "explanation": "Salah. LRAS ditentukan faktor riil (tenaga kerja, modal, teknologi). Perubahan harga adalah gerakan, bukan pergeseran LRAS.",
    "kind": "graph",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1,
    "svg": "<svg data-graph-id=\"PTE-BANK-G040\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G040-title PTE-BANK-G040-desc\"><title id=\"PTE-BANK-G040-title\">LRAS tetap vertikal ketika tingkat harga berubah</title><desc id=\"PTE-BANK-G040-desc\">LRAS vertikal pada output potensial. Perubahan tingkat harga ditunjukkan sebagai gerakan naik atau turun sepanjang LRAS, bukan pergeseran kurva. SRAS menanjak dan AD menurun.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Output riil</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Tingkat harga</text><line data-role=\"lras\" x1=\"215\" y1=\"42\" x2=\"215\" y2=\"218\" stroke=\"#f59e0b\" stroke-width=\"3\"/><line data-role=\"sras\" x1=\"80\" y1=\"195\" x2=\"350\" y2=\"55\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"ad\" x1=\"80\" y1=\"55\" x2=\"350\" y2=\"195\" stroke=\"#60a5fa\" stroke-width=\"3\"/><circle data-role=\"lras-price-point-low\" cx=\"215\" cy=\"160\" r=\"4\" fill=\"#f8fafc\"/><circle data-role=\"lras-price-point-high\" cx=\"215\" cy=\"90\" r=\"4\" fill=\"#f8fafc\"/><line data-role=\"movement-along-lras\" x1=\"215\" y1=\"153\" x2=\"215\" y2=\"97\" stroke=\"#f8fafc\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><text data-role=\"lras-label\" x=\"224\" y=\"52\" fill=\"#fbbf24\" font-size=\"12\">LRAS</text><text data-role=\"sras-label\" x=\"337\" y=\"58\" fill=\"#22c55e\" font-size=\"12\">SRAS</text><text data-role=\"ad-label\" x=\"337\" y=\"194\" fill=\"#60a5fa\" font-size=\"12\">AD</text><text data-role=\"price-high-label\" x=\"224\" y=\"92\" fill=\"#f8fafc\" font-size=\"11\">P₂</text><text data-role=\"price-low-label\" x=\"224\" y=\"164\" fill=\"#f8fafc\" font-size=\"11\">P₁</text></svg>",
    "altText": "LRAS vertikal pada output potensial. Dua titik tingkat harga berada pada LRAS yang sama, menunjukkan gerakan sepanjang kurva, bukan pergeseran. SRAS menanjak dan AD menurun."
  },
  {
    "id": "PTE-BANK-SRC-041",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Pertumbuhan Ekonomi",
    "difficulty": "easy",
    "competency": "Konsep Dasar",
    "sourceRef": "PTE-SRC-Q041 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Pertumbuhan ekonomi yang benar diukur dari kenaikan GDP nominal.",
    "explanation": "Salah. Pertumbuhan diukur dari GDP riil agar tidak terkecoh oleh kenaikan harga.",
    "kind": "true-false",
    "options": [
      "Salah",
      "Benar"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-BANK-SRC-042",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Perekonomian Tertutup: Tabungan dan Dana Pinjaman",
    "difficulty": "easy",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q042 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Defisit anggaran pemerintah dapat menaikkan suku bunga riil dan menekan investasi swasta (crowding out).",
    "explanation": "Benar. Defisit menurunkan tabungan nasional sehingga penawaran dana pinjaman berkurang, suku bunga riil naik, investasi swasta turun.",
    "kind": "graph",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 0,
    "svg": "<svg data-graph-id=\"PTE-BANK-G042\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G042-title PTE-BANK-G042-desc\"><title id=\"PTE-BANK-G042-title\">Defisit anggaran dan investasi swasta</title><desc id=\"PTE-BANK-G042-desc\">Defisit menurunkan tabungan nasional sehingga kurva penawaran dana bergeser ke kiri, suku bunga riil naik, dan investasi turun.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Dana pinjaman</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Suku bunga riil</text><line data-role=\"investment-demand\" x1=\"100\" y1=\"80\" x2=\"342\" y2=\"190\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"saving-before\" x1=\"120\" y1=\"190\" x2=\"362\" y2=\"80\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"saving-after\" x1=\"78\" y1=\"190\" x2=\"320\" y2=\"80\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"7 5\"/><text data-role=\"investment-demand-label\" x=\"340\" y=\"194\" fill=\"#60a5fa\" font-size=\"12\">I</text><text data-role=\"saving-before-label\" x=\"352\" y=\"78\" fill=\"#22c55e\" font-size=\"12\">S₁</text><text data-role=\"saving-after-label\" x=\"308\" y=\"76\" fill=\"#ef4444\" font-size=\"12\">S₂</text></svg>",
    "altText": "Defisit anggaran dan investasi swasta. Defisit menurunkan tabungan nasional sehingga kurva penawaran dana bergeser ke kiri, suku bunga riil naik, dan investasi turun."
  },
  {
    "id": "PTE-BANK-SRC-043",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Perekonomian Tertutup: Multiplier dan Kebijakan Fiskal",
    "difficulty": "medium",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q043 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Jika MPC = 0,8, berapa multiplier pengeluaran pemerintah?",
    "explanation": "k = 1/(1 - MPC) = 1/0,2 = 5.",
    "kind": "numeric",
    "answer": 5,
    "tolerance": 0
  },
  {
    "id": "PTE-BANK-SRC-044",
    "phase": "pra-uas",
    "tm": 8,
    "topic": "Pendapatan Nasional",
    "difficulty": "medium",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q044 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Nominal GDP = 2.000 dan GDP deflator = 125. Berapa real GDP?",
    "explanation": "Real GDP = Nominal/Deflator x 100 = 2.000/125 x 100 = 1.600.",
    "kind": "numeric",
    "answer": 1600,
    "tolerance": 0
  },
  {
    "id": "PTE-BANK-SRC-045",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "medium",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q045 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Rasio cadangan wajib 10%. Berapa money multiplier maksimum?",
    "explanation": "Money multiplier = 1/rr = 1/0,1 = 10.",
    "kind": "numeric",
    "answer": 10,
    "tolerance": 0
  },
  {
    "id": "PTE-BANK-SRC-046",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "medium",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q046 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Suku bunga nominal 7% dan inflasi 4%. Berapa perkiraan suku bunga riil?",
    "explanation": "r kira-kira i - inflasi = 7% - 4% = 3%.",
    "kind": "numeric",
    "answer": 3,
    "tolerance": 0,
    "answerSuffix": "%"
  },
  {
    "id": "PTE-BANK-SRC-047",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Perekonomian Tertutup: Multiplier dan Kebijakan Fiskal",
    "difficulty": "medium",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q047 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Jika MPC = 0,75, berapa multiplier pajak?",
    "explanation": "Multiplier pajak = -MPC/(1 - MPC) = -0,75/0,25 = -3.",
    "kind": "numeric",
    "answer": -3,
    "tolerance": 0
  },
  {
    "id": "PTE-BANK-SRC-048",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "medium",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q048 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Pengangguran 8 juta dan angkatan kerja 160 juta. Berapa tingkat pengangguran terbuka?",
    "explanation": "TPT = penganggur/angkatan kerja x 100% = 8/160 x 100% = 5%.",
    "kind": "numeric",
    "answer": 5,
    "tolerance": 0,
    "answerSuffix": "%"
  },
  {
    "id": "PTE-BANK-SRC-049",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Perekonomian Tertutup: Multiplier dan Kebijakan Fiskal",
    "difficulty": "hard",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q049 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Diketahui C = 100 + 0,8Yd, I = 150, G = 200, dan T = 100. Hitung output ekuilibrium (Y).",
    "explanation": "Yd = Y - T = Y - 100, jadi C = 100 + 0,8(Y - 100) = 20 + 0,8Y. AE = C + I + G = 20 + 0,8Y + 150 + 200 = 370 + 0,8Y. Ekuilibrium Y = AE: Y - 0,8Y = 370, 0,2Y = 370, Y = 1.850.",
    "kind": "numeric",
    "answer": 1850,
    "tolerance": 0
  },
  {
    "id": "PTE-BANK-SRC-050",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Pertumbuhan Ekonomi",
    "difficulty": "hard",
    "competency": "Perhitungan",
    "sourceRef": "PTE-SRC-Q050 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "PDB suatu negara tumbuh 7% per tahun. Dengan Rule of 70, berapa lama PDB menjadi dua kali lipat?",
    "explanation": "Rule of 70: waktu lipat ganda kira-kira 70 dibagi laju pertumbuhan = 70/7 = 10 tahun.",
    "kind": "numeric",
    "answer": 10,
    "tolerance": 0,
    "answerSuffix": "tahun"
  },
  {
    "id": "PTE-BANK-SRC-051",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q051 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Diagram pasar uang berikut. Ketika kurva tegak bergeser ke kanan (penawaran uang bertambah), suku bunga keseimbangan akan...",
    "explanation": "Penawaran uang naik (kurva MS geser kanan) menurunkan suku bunga keseimbangan.",
    "kind": "graph",
    "options": [
      "Naik",
      "Tetap",
      "Turun",
      "Tidak dapat ditentukan"
    ],
    "answerIndex": 2,
    "svg": "<svg data-graph-id=\"PTE-BANK-G051\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G051-title PTE-BANK-G051-desc\"><title id=\"PTE-BANK-G051-title\">Pasar uang: penawaran uang bertambah</title><desc id=\"PTE-BANK-G051-desc\">Pergeseran penawaran uang dari MS1 ke MS2 menurunkan suku bunga keseimbangan pada kurva permintaan uang yang menurun.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Jumlah uang</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Suku bunga</text><line data-role=\"money-supply-before\" x1=\"160\" y1=\"52\" x2=\"160\" y2=\"218\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"money-supply-after\" x1=\"254\" y1=\"52\" x2=\"254\" y2=\"218\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"7 5\"/><line data-role=\"money-demand\" x1=\"86\" y1=\"72\" x2=\"344\" y2=\"190\" stroke=\"#60a5fa\" stroke-width=\"3\"/><text data-role=\"money-supply-before-label\" x=\"146\" y=\"46\" fill=\"#22c55e\" font-size=\"12\">MS₁</text><text data-role=\"money-supply-after-label\" x=\"240\" y=\"46\" fill=\"#ef4444\" font-size=\"12\">MS₂</text><text data-role=\"money-demand-label\" x=\"338\" y=\"194\" fill=\"#60a5fa\" font-size=\"12\">MD</text></svg>",
    "altText": "Pasar uang: penawaran uang bertambah. Pergeseran penawaran uang dari MS1 ke MS2 menurunkan suku bunga keseimbangan pada kurva permintaan uang yang menurun."
  },
  {
    "id": "PTE-BANK-SRC-052",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "hard",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q052 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Pada diagram AS-AD berikut, kurva yang berbentuk vertikal (garis tegak) melambangkan...",
    "explanation": "Kurva vertikal adalah LRAS, output potensial yang ditentukan faktor riil dan tidak tergantung tingkat harga.",
    "kind": "graph",
    "options": [
      "Permintaan agregat (AD)",
      "Penawaran agregat jangka pendek (SRAS)",
      "Kurva Phillips",
      "Penawaran agregat jangka panjang (LRAS)"
    ],
    "answerIndex": 3,
    "svg": "<svg data-graph-id=\"PTE-BANK-G052\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G052-title PTE-BANK-G052-desc\"><title id=\"PTE-BANK-G052-title\">Model AS-AD lengkap</title><desc id=\"PTE-BANK-G052-desc\">Garis vertikal adalah LRAS, kurva menanjak adalah SRAS, dan kurva menurun adalah AD.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Output riil</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Tingkat harga</text><line data-role=\"lras\" x1=\"220\" y1=\"56\" x2=\"220\" y2=\"218\" stroke=\"#f59e0b\" stroke-width=\"3\"/><line data-role=\"sras\" x1=\"92\" y1=\"190\" x2=\"342\" y2=\"78\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"ad\" x1=\"92\" y1=\"72\" x2=\"342\" y2=\"190\" stroke=\"#60a5fa\" stroke-width=\"3\"/><text data-role=\"lras-label\" x=\"226\" y=\"64\" fill=\"#fbbf24\" font-size=\"12\">LRAS</text><text data-role=\"sras-label\" x=\"330\" y=\"82\" fill=\"#22c55e\" font-size=\"12\">SRAS</text><text data-role=\"ad-label\" x=\"330\" y=\"194\" fill=\"#60a5fa\" font-size=\"12\">AD</text></svg>",
    "altText": "Model AS-AD lengkap. Garis vertikal adalah LRAS, kurva menanjak adalah SRAS, dan kurva menurun adalah AD."
  },
  {
    "id": "PTE-BANK-SRC-053",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q053 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Diagram kurva Phillips berikut. Garis yang menurun melambangkan...",
    "explanation": "Garis menurun adalah kurva Phillips jangka pendek: trade-off antara inflasi dan pengangguran.",
    "kind": "graph",
    "options": [
      "Kurva Phillips jangka panjang",
      "Permintaan agregat",
      "Kurva Phillips jangka pendek",
      "Fungsi produksi"
    ],
    "answerIndex": 2,
    "svg": "<svg data-graph-id=\"PTE-BANK-G053\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G053-title PTE-BANK-G053-desc\"><title id=\"PTE-BANK-G053-title\">Kurva Phillips</title><desc id=\"PTE-BANK-G053-desc\">Kurva Phillips jangka pendek menurun, sedangkan kurva jangka panjang vertikal pada tingkat pengangguran alami.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Pengangguran</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Inflasi</text><path data-role=\"srpc\" d=\"M88 72 C170 100 260 142 340 192\" fill=\"none\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"lrpc\" x1=\"218\" y1=\"58\" x2=\"218\" y2=\"218\" stroke=\"#f59e0b\" stroke-width=\"3\"/><text data-role=\"srpc-label\" x=\"326\" y=\"196\" fill=\"#60a5fa\" font-size=\"12\">SRPC</text><text data-role=\"lrpc-label\" x=\"226\" y=\"66\" fill=\"#fbbf24\" font-size=\"12\">LRPC</text></svg>",
    "altText": "Kurva Phillips. Kurva Phillips jangka pendek menurun, sedangkan kurva jangka panjang vertikal pada tingkat pengangguran alami."
  },
  {
    "id": "PTE-BANK-SRC-054",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Perekonomian Tertutup: Tabungan dan Dana Pinjaman",
    "difficulty": "hard",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q054 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Diagram pasar dana pinjaman berikut. Jika kurva penawaran dana bergeser ke kiri (misalnya akibat defisit pemerintah), suku bunga riil keseimbangan akan...",
    "explanation": "Penawaran dana berkurang (geser kiri) menaikkan suku bunga riil keseimbangan; inilah crowding out.",
    "kind": "graph",
    "options": [
      "Naik",
      "Turun",
      "Tetap",
      "Menjadi nol"
    ],
    "answerIndex": 0,
    "svg": "<svg data-graph-id=\"PTE-BANK-G054\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G054-title PTE-BANK-G054-desc\"><title id=\"PTE-BANK-G054-title\">Pergeseran penawaran dana pinjaman</title><desc id=\"PTE-BANK-G054-desc\">Defisit menurunkan tabungan nasional sehingga kurva penawaran dana bergeser ke kiri, suku bunga riil naik, dan investasi turun.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Dana pinjaman</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Suku bunga riil</text><line data-role=\"investment-demand\" x1=\"100\" y1=\"80\" x2=\"342\" y2=\"190\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"saving-before\" x1=\"120\" y1=\"190\" x2=\"362\" y2=\"80\" stroke=\"#22c55e\" stroke-width=\"3\"/><line data-role=\"saving-after\" x1=\"78\" y1=\"190\" x2=\"320\" y2=\"80\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"7 5\"/><text data-role=\"investment-demand-label\" x=\"340\" y=\"194\" fill=\"#60a5fa\" font-size=\"12\">I</text><text data-role=\"saving-before-label\" x=\"352\" y=\"78\" fill=\"#22c55e\" font-size=\"12\">S₁</text><text data-role=\"saving-after-label\" x=\"308\" y=\"76\" fill=\"#ef4444\" font-size=\"12\">S₂</text></svg>",
    "altText": "Pergeseran penawaran dana pinjaman. Defisit menurunkan tabungan nasional sehingga kurva penawaran dana bergeser ke kiri, suku bunga riil naik, dan investasi turun."
  },
  {
    "id": "PTE-BANK-SRC-055",
    "phase": "pra-uas",
    "tm": 10,
    "topic": "Perekonomian Tertutup: Multiplier dan Kebijakan Fiskal",
    "difficulty": "hard",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q055 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Pada diagram Keynesian cross berikut, output ekuilibrium ditentukan pada...",
    "explanation": "Ekuilibrium berada pada perpotongan garis pengeluaran agregat dengan garis 45 derajat, tempat Y = AE.",
    "kind": "graph",
    "options": [
      "Sembarang titik pada garis pengeluaran agregat",
      "Perpotongan garis pengeluaran agregat dengan garis 45 derajat",
      "Titik potong dengan sumbu tegak",
      "Titik tertinggi kurva"
    ],
    "answerIndex": 1,
    "svg": "<svg data-graph-id=\"PTE-BANK-G055\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G055-title PTE-BANK-G055-desc\"><title id=\"PTE-BANK-G055-title\">Keynesian cross dengan marker ekuilibrium tepat</title><desc id=\"PTE-BANK-G055-desc\">Garis pengeluaran agregat berpotongan tepat dengan garis 45 derajat pada titik E. Proyeksi vertikal dari E menunjukkan output ekuilibrium Y bintang.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Output Y</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Pengeluaran AE</text><line data-role=\"forty-five-line\" x1=\"70\" y1=\"210\" x2=\"330\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"2\"/><line data-role=\"aggregate-expenditure\" x1=\"70\" y1=\"165\" x2=\"350\" y2=\"82.7\" stroke=\"#60a5fa\" stroke-width=\"3\"/><circle data-role=\"equilibrium\" cx=\"210\" cy=\"123.85\" r=\"5\" fill=\"#f59e0b\"/><line data-role=\"equilibrium-output\" x1=\"210\" y1=\"123.85\" x2=\"210\" y2=\"218\" stroke=\"#f59e0b\" stroke-width=\"1.2\" stroke-dasharray=\"4 4\"/><text data-role=\"equilibrium-label\" x=\"218\" y=\"118\" fill=\"#fbbf24\" font-size=\"12\">E: Y*=AE</text><text data-role=\"forty-five-label\" x=\"334\" y=\"50\" fill=\"#cbd5e1\" font-size=\"12\">45°</text><text data-role=\"aggregate-expenditure-label\" x=\"338\" y=\"80\" fill=\"#60a5fa\" font-size=\"12\">AE</text><text data-role=\"equilibrium-output-label\" x=\"202\" y=\"234\" fill=\"#fbbf24\" font-size=\"11\">Y*</text></svg>",
    "altText": "Keynesian cross dengan garis pengeluaran agregat dan garis 45 derajat berpotongan tepat pada titik E. Proyeksi vertikal menunjukkan output ekuilibrium Y bintang."
  },
  {
    "id": "PTE-BANK-SRC-056",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Pertumbuhan Ekonomi",
    "difficulty": "medium",
    "competency": "Interpretasi Grafik",
    "sourceRef": "PTE-SRC-Q056 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Kurva pada diagram fungsi produksi berikut makin landai saat modal bertambah. Ini menunjukkan...",
    "explanation": "Kemiringan yang makin landai menunjukkan diminishing returns terhadap modal.",
    "kind": "graph",
    "options": [
      "Increasing returns",
      "Skala hasil konstan",
      "Diminishing returns terhadap modal",
      "Tidak ada hubungan modal dengan output"
    ],
    "answerIndex": 2,
    "svg": "<svg data-graph-id=\"PTE-BANK-G056\" viewBox=\"0 0 420 260\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-labelledby=\"PTE-BANK-G056-title PTE-BANK-G056-desc\"><title id=\"PTE-BANK-G056-title\">Fungsi produksi dan diminishing returns</title><desc id=\"PTE-BANK-G056-desc\">Kurva produksi makin landai ketika modal bertambah sehingga produk marginal modal menurun.</desc><rect x=\"0\" y=\"0\" width=\"420\" height=\"260\" rx=\"14\" fill=\"#0f172a\"/><line data-role=\"x-axis\" x1=\"58\" y1=\"218\" x2=\"388\" y2=\"218\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><line data-role=\"y-axis\" x1=\"58\" y1=\"218\" x2=\"58\" y2=\"24\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text data-role=\"x-axis-label\" x=\"282\" y=\"244\" fill=\"#cbd5e1\" font-size=\"12\">Modal K</text><text data-role=\"y-axis-label\" x=\"14\" y=\"34\" fill=\"#cbd5e1\" font-size=\"12\">Output Y</text><path data-role=\"production-function\" d=\"M76 202 Q150 104 354 62\" fill=\"none\" stroke=\"#60a5fa\" stroke-width=\"3\"/><line data-role=\"marginal-product-early\" x1=\"148\" y1=\"138\" x2=\"190\" y2=\"112\" stroke=\"#f59e0b\" stroke-width=\"2\"/><line data-role=\"marginal-product-late\" x1=\"262\" y1=\"84\" x2=\"304\" y2=\"74\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text data-role=\"production-function-label\" x=\"302\" y=\"60\" fill=\"#60a5fa\" font-size=\"12\">Y=f(K)</text><text data-role=\"marginal-product-label\" x=\"178\" y=\"102\" fill=\"#fbbf24\" font-size=\"11\">MPK menurun</text></svg>",
    "altText": "Fungsi produksi dan diminishing returns. Kurva produksi makin landai ketika modal bertambah sehingga produk marginal modal menurun."
  },
  {
    "id": "PTE-BANK-SRC-057",
    "phase": "pra-uas",
    "tm": 12,
    "topic": "Perekonomian Terbuka",
    "difficulty": "hard",
    "competency": "Kasus Integratif",
    "sourceRef": "PTE-SRC-Q057 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Jelaskan perbedaan absolute advantage dan comparative advantage, serta mengapa dasar perdagangan adalah comparative advantage.",
    "explanation": "Absolute advantage: mampu memproduksi dengan input lebih sedikit. Comparative advantage: mampu memproduksi dengan biaya peluang lebih rendah. Perdagangan menguntungkan bila tiap pihak berspesialisasi pada barang dengan biaya peluang terendah, bahkan jika satu negara unggul mutlak di semua barang, karena spesialisasi menaikkan total output dan kesejahteraan kedua pihak.",
    "kind": "short-answer",
    "assessmentMode": "guided-review",
    "simulatorEligible": false,
    "answerGuide": "Absolute advantage: mampu memproduksi dengan input lebih sedikit. Comparative advantage: mampu memproduksi dengan biaya peluang lebih rendah. Perdagangan menguntungkan bila tiap pihak berspesialisasi pada barang dengan biaya peluang terendah, bahkan jika satu negara unggul mutlak di semua barang, karena spesialisasi menaikkan total output dan kesejahteraan kedua pihak."
  },
  {
    "id": "PTE-BANK-SRC-058",
    "phase": "pra-uas",
    "tm": 9,
    "topic": "Perekonomian Tertutup: Tabungan dan Dana Pinjaman",
    "difficulty": "hard",
    "competency": "Hubungan Sebab-Akibat",
    "sourceRef": "PTE-SRC-Q058 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Jelaskan mekanisme crowding out akibat defisit anggaran lewat pasar dana pinjaman.",
    "explanation": "Defisit membuat tabungan publik negatif sehingga tabungan nasional (penawaran dana) turun. Kurva penawaran dana bergeser ke kiri, suku bunga riil naik, dan investasi swasta yang sensitif terhadap bunga berkurang. Investasi yang terdesak keluar inilah crowding out.",
    "kind": "short-answer",
    "assessmentMode": "guided-review",
    "simulatorEligible": false,
    "answerGuide": "Defisit membuat tabungan publik negatif sehingga tabungan nasional (penawaran dana) turun. Kurva penawaran dana bergeser ke kiri, suku bunga riil naik, dan investasi swasta yang sensitif terhadap bunga berkurang. Investasi yang terdesak keluar inilah crowding out."
  },
  {
    "id": "PTE-BANK-SRC-059",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "hard",
    "competency": "Kasus Integratif",
    "sourceRef": "PTE-SRC-Q059 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Bedakan inflasi demand-pull dan cost-push, serta dampaknya terhadap output dalam kerangka AS-AD.",
    "explanation": "Demand-pull: AD bergeser ke kanan sehingga harga dan output naik (ekonomi memanas). Cost-push: SRAS bergeser ke kiri karena biaya produksi naik, sehingga harga naik tetapi output turun (stagflasi). Demand-pull lebih mudah diredam dengan kebijakan kontraktif, sedangkan cost-push menimbulkan dilema karena menekan inflasi dapat memperdalam penurunan output.",
    "kind": "short-answer",
    "assessmentMode": "guided-review",
    "simulatorEligible": false,
    "answerGuide": "Demand-pull: AD bergeser ke kanan sehingga harga dan output naik (ekonomi memanas). Cost-push: SRAS bergeser ke kiri karena biaya produksi naik, sehingga harga naik tetapi output turun (stagflasi). Demand-pull lebih mudah diredam dengan kebijakan kontraktif, sedangkan cost-push menimbulkan dilema karena menekan inflasi dapat memperdalam penurunan output."
  },
  {
    "id": "PTE-BANK-SRC-060",
    "phase": "pra-uas",
    "tm": 13,
    "topic": "Inflasi dan Pengangguran",
    "difficulty": "hard",
    "competency": "Hubungan Sebab-Akibat",
    "sourceRef": "PTE-SRC-Q060 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Mengapa kurva Phillips jangka panjang berbentuk vertikal? Kaitkan dengan ekspektasi inflasi.",
    "explanation": "Dalam jangka panjang, ekspektasi inflasi menyesuaikan dengan inflasi aktual sehingga trade-off jangka pendek hilang. Pengangguran kembali ke tingkat alaminya berapa pun tingkat inflasinya, sehingga kurva tegak di pengangguran alami. Hanya inflasi yang tidak terduga yang dapat menggeser pengangguran untuk sementara.",
    "kind": "short-answer",
    "assessmentMode": "guided-review",
    "simulatorEligible": false,
    "answerGuide": "Dalam jangka panjang, ekspektasi inflasi menyesuaikan dengan inflasi aktual sehingga trade-off jangka pendek hilang. Pengangguran kembali ke tingkat alaminya berapa pun tingkat inflasinya, sehingga kurva tegak di pengangguran alami. Hanya inflasi yang tidak terduga yang dapat menggeser pengangguran untuk sementara."
  },
  {
    "id": "PTE-BANK-SRC-061",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "hard",
    "competency": "Hubungan Sebab-Akibat",
    "sourceRef": "PTE-SRC-Q061 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Jelaskan teori liquidity preference dan bagaimana bank sentral memengaruhi suku bunga jangka pendek.",
    "explanation": "Suku bunga ditentukan oleh keseimbangan permintaan dan penawaran uang. Penawaran uang (MS) ditetapkan bank sentral sehingga kurvanya tegak; permintaan uang (MD) menurun terhadap suku bunga. Bila bank sentral menambah uang, MS bergeser ke kanan dan suku bunga turun, mendorong investasi dan konsumsi sehingga AD naik. Untuk menahan inflasi, bank sentral menyerap likuiditas agar suku bunga naik.",
    "kind": "short-answer",
    "assessmentMode": "guided-review",
    "simulatorEligible": false,
    "answerGuide": "Suku bunga ditentukan oleh keseimbangan permintaan dan penawaran uang. Penawaran uang (MS) ditetapkan bank sentral sehingga kurvanya tegak; permintaan uang (MD) menurun terhadap suku bunga. Bila bank sentral menambah uang, MS bergeser ke kanan dan suku bunga turun, mendorong investasi dan konsumsi sehingga AD naik. Untuk menahan inflasi, bank sentral menyerap likuiditas agar suku bunga naik."
  },
  {
    "id": "PTE-BANK-SRC-062",
    "phase": "pra-uas",
    "tm": 14,
    "topic": "Pertumbuhan Ekonomi",
    "difficulty": "hard",
    "competency": "Kasus Integratif",
    "sourceRef": "PTE-SRC-Q062 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Apa beda pertumbuhan ekonomi dan pembangunan ekonomi, dan apa keterbatasan GDP sebagai ukuran kesejahteraan?",
    "explanation": "Pertumbuhan ekonomi adalah kenaikan output riil (GDP riil). Pembangunan lebih luas: mencakup distribusi pendapatan, kesehatan, pendidikan, lingkungan, dan kualitas hidup. GDP tidak menangkap ketimpangan, kegiatan non-pasar, kerusakan lingkungan, maupun kualitas hidup, sehingga GDP tinggi belum tentu berarti kesejahteraan tinggi.",
    "kind": "short-answer",
    "assessmentMode": "guided-review",
    "simulatorEligible": false,
    "answerGuide": "Pertumbuhan ekonomi adalah kenaikan output riil (GDP riil). Pembangunan lebih luas: mencakup distribusi pendapatan, kesehatan, pendidikan, lingkungan, dan kualitas hidup. GDP tidak menangkap ketimpangan, kegiatan non-pasar, kerusakan lingkungan, maupun kualitas hidup, sehingga GDP tinggi belum tentu berarti kesejahteraan tinggi."
  },
  {
    "id": "PTE-BANK-SRC-063",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "hard",
    "competency": "Kasus Integratif",
    "sourceRef": "PTE-SRC-Q063 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Pada 9 Juni 2026 Bank Indonesia menaikkan BI-Rate menjadi 5,50% ketika inflasi Mei tercatat 3,08% dan rupiah melemah. Gunakan snapshot tanggal tersebut untuk menjelaskan logika kebijakan melalui pasar uang dan pendekatan Fisher.",
    "explanation": "Untuk snapshot 9 Juni, kebijakan pengetatan dapat digambarkan sebagai penurunan penawaran uang relatif terhadap permintaan sehingga suku bunga naik. Pendekatan ex-post sederhana memberi 5,50% - 3,08% = 2,42%, sehingga imbal hasil riil rupiah tetap positif dan daya tarik aset rupiah menguat. Ini bukan persamaan Fisher forward-looking yang lengkap karena Fisher memakai inflasi ekspektasian. Setelah tanggal soal tersebut, BI kembali menaikkan BI-Rate menjadi 5,75% pada 18 Juni 2026.",
    "kind": "short-answer",
    "assessmentMode": "guided-review",
    "simulatorEligible": false,
    "answerGuide": "Untuk snapshot 9 Juni, kebijakan pengetatan dapat digambarkan sebagai penurunan penawaran uang relatif terhadap permintaan sehingga suku bunga naik. Pendekatan ex-post sederhana memberi 5,50% - 3,08% = 2,42%, sehingga imbal hasil riil rupiah tetap positif dan daya tarik aset rupiah menguat. Ini bukan persamaan Fisher forward-looking yang lengkap karena Fisher memakai inflasi ekspektasian. Setelah tanggal soal tersebut, BI kembali menaikkan BI-Rate menjadi 5,75% pada 18 Juni 2026."
  },
  {
    "id": "PTE-BANK-SRC-064",
    "phase": "pra-uas",
    "tm": 11,
    "topic": "Uang dan Sistem Keuangan",
    "difficulty": "hard",
    "competency": "Hubungan Sebab-Akibat",
    "sourceRef": "PTE-SRC-Q064 · PTE Pra-UAS companion",
    "sourceStatus": "adapted-source",
    "prompt": "Gunakan persamaan kuantitas (MV = PY) untuk menjelaskan hubungan pertumbuhan jumlah uang dan inflasi dalam jangka panjang.",
    "explanation": "Dari MV = PY, jika velositas (V) relatif stabil dan output riil (Y) tumbuh sesuai kapasitas, maka pertumbuhan jumlah uang (M) yang melebihi pertumbuhan output akan menaikkan tingkat harga (P). Maka inflasi jangka panjang kira-kira sama dengan pertumbuhan uang dikurangi pertumbuhan output (inflasi kira-kira gM - gY).",
    "kind": "short-answer",
    "assessmentMode": "guided-review",
    "simulatorEligible": false,
    "answerGuide": "Dari MV = PY, jika velositas (V) relatif stabil dan output riil (Y) tumbuh sesuai kapasitas, maka pertumbuhan jumlah uang (M) yang melebihi pertumbuhan output akan menaikkan tingkat harga (P). Maka inflasi jangka panjang kira-kira sama dengan pertumbuhan uang dikurangi pertumbuhan output (inflasi kira-kira gM - gY)."
  }
];
