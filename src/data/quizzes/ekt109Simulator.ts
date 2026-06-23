import type { QuizQuestion } from '../../types';
import { EKT109_BANK_QUESTIONS, type PteBankQuestion } from '../banksoal/ekt109Bank';

const DIFFICULTY_MAP = { easy: 'basic', medium: 'medium', hard: 'advanced' } as const;

function convertBankQuestion(question: PteBankQuestion): QuizQuestion | null {
  const meta = {
    id: question.id,
    tm: question.tm,
    topic: `TM${question.tm} · ${question.topic}`,
    skill: question.competency,
    difficulty: DIFFICULTY_MAP[question.difficulty],
    q: question.prompt,
    explanation: question.explanation,
    sourceRef: question.sourceRef,
    sourceAnchors: question.sourceAnchors,
  } as const;

  if (question.kind === 'single-choice' || question.kind === 'true-false') {
    return { ...meta, options: question.options, answer: question.answerIndex };
  }
  if (question.kind === 'graph') {
    return { ...meta, options: question.options, answer: question.answerIndex, svg: question.svg, altText: question.altText };
  }
  if (question.kind === 'multi-select') {
    return { ...meta, kind: 'multi-select', options: question.options, answers: question.answerIndexes };
  }
  if (question.kind === 'matching') {
    return { ...meta, kind: 'account-match', choices: question.choices, pairs: question.pairs };
  }
  if (question.kind === 'ordering') {
    return { ...meta, kind: 'ordering', items: question.items, correctOrder: question.correctOrder };
  }
  if (question.kind === 'numeric') {
    return {
      ...meta,
      kind: 'report-fill',
      instruction: 'Isi jawaban numerik. Pemisah ribuan dan desimal Indonesia dapat digunakan.',
      blanks: [{
        id: 'answer',
        label: 'Jawaban',
        answer: question.answer,
        tolerance: question.tolerance ?? 0,
        prefix: question.answerPrefix,
        suffix: question.answerSuffix,
      }],
    };
  }
  return null;
}

function bankPhase(phase: 'pra-uts' | 'pra-uas'): QuizQuestion[] {
  return EKT109_BANK_QUESTIONS
    .filter((question) => question.phase === phase && question.kind !== 'short-answer')
    .map(convertBankQuestion)
    .filter((question): question is QuizQuestion => question !== null);
}

function balanceChoicePositions(items: QuizQuestion[]): QuizQuestion[] {
  let choiceIndex = 0;
  return items.map((question) => {
    if (question.kind && question.kind !== 'mcq') return question;
    const length = question.options.length;
    const shift = choiceIndex % length;
    choiceIndex += 1;
    if (shift === 0) return question;
    return {
      ...question,
      options: [...question.options.slice(shift), ...question.options.slice(0, shift)],
      answer: (question.answer - shift + length) % length,
    };
  });
}

const EKT109_UTS_SUPPLEMENT: QuizQuestion[] = [
  {
    "id": "PTE-SIM-UTS-SUP-001",
    "tm": 1,
    "topic": "TM1 · Analisis Positif dan Normatif",
    "skill": "Membedakan pernyataan positif dan normatif",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 1",
    "sourceAnchors": [
      "Analisis Positif dan Normatif"
    ],
    "q": "Pernyataan yang bersifat positif adalah...",
    "options": [
      "Pemerintah seharusnya menjamin harga pangan murah",
      "Kenaikan harga bensin cenderung mengurangi jumlah bensin yang diminta",
      "Distribusi pendapatan yang merata selalu lebih adil",
      "Pajak progresif merupakan kebijakan terbaik"
    ],
    "answer": 1,
    "explanation": "Pernyataan positif menjelaskan hubungan yang dapat diuji secara empiris, bukan penilaian tentang apa yang seharusnya dilakukan."
  },
  {
    "id": "PTE-SIM-UTS-SUP-002",
    "tm": 1,
    "topic": "TM1 · Berpikir pada Margin",
    "skill": "Menerapkan keputusan marginal",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 1",
    "sourceAnchors": [
      "Berpikir pada Margin"
    ],
    "q": "Seorang mahasiswa telah belajar 4 jam. Ia akan menambah 1 jam belajar jika...",
    "options": [
      "manfaat tambahan belajar melebihi biaya tambahannya",
      "total manfaat belajar selalu positif",
      "biaya total belajar sudah nol",
      "nilai ujian pasti menjadi sempurna"
    ],
    "answer": 0,
    "explanation": "Keputusan rasional pada margin membandingkan manfaat marginal dengan biaya marginal dari satu unit tambahan kegiatan."
  },
  {
    "id": "PTE-SIM-UTS-SUP-003",
    "tm": 1,
    "topic": "TM1 · PPF",
    "skill": "Menjelaskan opportunity cost yang meningkat",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 1",
    "sourceAnchors": [
      "PPF"
    ],
    "q": "PPF yang melengkung keluar dari titik asal menunjukkan...",
    "options": [
      "opportunity cost selalu nol",
      "opportunity cost meningkat ketika produksi satu barang terus ditambah",
      "kedua barang dapat diproduksi tanpa batas",
      "sumber daya identik untuk semua penggunaan"
    ],
    "answer": 1,
    "explanation": "Bentuk bowed-out mencerminkan sumber daya tidak sama produktifnya pada semua penggunaan, sehingga opportunity cost meningkat."
  },
  {
    "id": "PTE-SIM-UTS-SUP-004",
    "tm": 1,
    "topic": "TM1 · Insentif",
    "skill": "Menganalisis respons terhadap insentif",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 1",
    "sourceAnchors": [
      "Insentif"
    ],
    "q": "Subsidi transportasi publik menurunkan tarif bus. Respons yang paling sesuai dengan prinsip insentif adalah...",
    "options": [
      "sebagian pengguna kendaraan pribadi beralih ke bus",
      "permintaan bus pasti turun",
      "jumlah bus yang diminta tidak berubah",
      "biaya peluang menggunakan bus selalu naik"
    ],
    "answer": 0,
    "explanation": "Harga efektif yang lebih rendah memberi insentif kepada konsumen untuk menggunakan lebih banyak transportasi publik."
  },
  {
    "id": "PTE-SIM-UTS-SUP-005",
    "kind": "report-fill",
    "tm": 1,
    "topic": "TM1 · Opportunity Cost",
    "skill": "Menghitung biaya peluang dari PPF",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 1",
    "sourceAnchors": [
      "Opportunity Cost"
    ],
    "q": "Sebuah ekonomi dapat memproduksi kombinasi A: 20 unit makanan dan 0 pakaian, atau B: 16 unit makanan dan 2 pakaian. Berapa opportunity cost per unit pakaian ketika berpindah dari A ke B?",
    "instruction": "Isi jumlah unit makanan yang dikorbankan untuk setiap 1 unit pakaian.",
    "blanks": [
      {
        "id": "oc",
        "label": "Opportunity cost per pakaian",
        "answer": 2,
        "suffix": "unit makanan"
      }
    ],
    "explanation": "Produksi makanan turun 4 unit untuk memperoleh 2 pakaian, sehingga opportunity cost per pakaian adalah 4/2 = 2 unit makanan."
  },
  {
    "id": "PTE-SIM-UTS-SUP-006",
    "tm": 2,
    "topic": "TM2 · Sistem Komando",
    "skill": "Mengidentifikasi ciri sistem komando",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 2",
    "sourceAnchors": [
      "Sistem Komando"
    ],
    "q": "Ciri utama sistem ekonomi komando adalah...",
    "options": [
      "alokasi sumber daya terutama ditentukan perencanaan pemerintah",
      "seluruh keputusan ditentukan harga pasar",
      "hak milik privat selalu dominan",
      "pemerintah tidak memiliki peran ekonomi"
    ],
    "answer": 0,
    "explanation": "Dalam sistem komando, keputusan produksi dan alokasi utama dibuat melalui perencanaan pemerintah."
  },
  {
    "id": "PTE-SIM-UTS-SUP-007",
    "tm": 2,
    "topic": "TM2 · Ekonomi Campuran",
    "skill": "Menjelaskan karakter ekonomi campuran",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 2",
    "sourceAnchors": [
      "Ekonomi Campuran"
    ],
    "q": "Ekonomi campuran menggabungkan...",
    "options": [
      "mekanisme pasar dan intervensi pemerintah",
      "sistem tradisional tanpa pasar",
      "perencanaan penuh dan larangan hak milik",
      "pasar bebas tanpa regulasi"
    ],
    "answer": 0,
    "explanation": "Ekonomi campuran menggunakan pasar sebagai mekanisme utama, tetapi pemerintah tetap mengatur, menyediakan barang publik, dan mengoreksi kegagalan pasar."
  },
  {
    "id": "PTE-SIM-UTS-SUP-008",
    "tm": 2,
    "topic": "TM2 · Eksternalitas",
    "skill": "Mengenali kegagalan pasar",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 2",
    "sourceAnchors": [
      "Eksternalitas"
    ],
    "q": "Pabrik mencemari sungai tetapi tidak menanggung seluruh biaya kesehatan masyarakat. Kondisi ini merupakan...",
    "options": [
      "eksternalitas negatif",
      "barang publik murni",
      "informasi sempurna",
      "efisiensi Pareto otomatis"
    ],
    "answer": 0,
    "explanation": "Biaya yang ditanggung pihak ketiga dan tidak tercermin dalam harga merupakan eksternalitas negatif."
  },
  {
    "id": "PTE-SIM-UTS-SUP-009",
    "tm": 2,
    "topic": "TM2 · Barang Publik",
    "skill": "Membedakan barang publik",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 2",
    "sourceAnchors": [
      "Barang Publik"
    ],
    "q": "Pertahanan nasional sering disediakan pemerintah karena bersifat...",
    "options": [
      "rival dan excludable",
      "non-rival dan sulit mengecualikan pengguna",
      "selalu diproduksi monopoli swasta",
      "hanya bermanfaat bagi pembayar langsung"
    ],
    "answer": 1,
    "explanation": "Barang publik murni bersifat non-rival dan non-excludable sehingga pasar menghadapi masalah free rider."
  },
  {
    "id": "PTE-SIM-UTS-SUP-010",
    "kind": "multi-select",
    "tm": 2,
    "topic": "TM2 · Peran Pemerintah",
    "skill": "Mengidentifikasi alasan intervensi pemerintah",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 2",
    "sourceAnchors": [
      "Peran Pemerintah"
    ],
    "q": "Pilih semua alasan ekonomi yang dapat membenarkan intervensi pemerintah.",
    "options": [
      "Eksternalitas",
      "Barang publik",
      "Informasi asimetris",
      "Persaingan sempurna tanpa distorsi",
      "Kekuatan monopoli"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Eksternalitas, barang publik, informasi asimetris, dan kekuatan pasar merupakan bentuk kegagalan pasar yang dapat memerlukan kebijakan."
  },
  {
    "id": "PTE-SIM-UTS-SUP-011",
    "tm": 3,
    "topic": "TM3 · Movement pada Demand",
    "skill": "Membedakan movement dan shift",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceAnchors": [
      "Movement pada Demand"
    ],
    "q": "Harga kopi turun, sedangkan faktor lain tetap. Pada kurva permintaan kopi terjadi...",
    "options": [
      "pergerakan ke bawah sepanjang kurva permintaan",
      "kurva permintaan bergeser ke kanan",
      "kurva penawaran bergeser ke kiri",
      "kurva permintaan bergeser ke kiri"
    ],
    "answer": 0,
    "explanation": "Perubahan harga barang itu sendiri menyebabkan movement sepanjang kurva permintaan."
  },
  {
    "id": "PTE-SIM-UTS-SUP-012",
    "tm": 3,
    "topic": "TM3 · Pergeseran Supply",
    "skill": "Menganalisis biaya input",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceAnchors": [
      "Pergeseran Supply"
    ],
    "q": "Harga bahan baku naik. Dampak langsung pada kurva penawaran produk adalah...",
    "options": [
      "bergeser ke kiri",
      "bergeser ke kanan",
      "movement ke kanan",
      "tidak berubah"
    ],
    "answer": 0,
    "explanation": "Kenaikan biaya input mengurangi jumlah yang bersedia ditawarkan pada setiap harga sehingga supply bergeser ke kiri."
  },
  {
    "id": "PTE-SIM-UTS-SUP-013",
    "tm": 3,
    "topic": "TM3 · Keseimbangan Pasar",
    "skill": "Menganalisis perubahan simultan",
    "difficulty": "advanced",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceAnchors": [
      "Keseimbangan Pasar"
    ],
    "q": "Permintaan dan penawaran suatu barang sama-sama bergeser ke kanan. Kesimpulan yang pasti adalah...",
    "options": [
      "kuantitas keseimbangan meningkat",
      "harga keseimbangan meningkat",
      "harga keseimbangan menurun",
      "kuantitas keseimbangan menurun"
    ],
    "answer": 0,
    "explanation": "Kedua pergeseran menaikkan kuantitas keseimbangan. Arah perubahan harga bergantung pada besar relatif masing-masing pergeseran."
  },
  {
    "id": "PTE-SIM-UTS-SUP-014",
    "tm": 3,
    "topic": "TM3 · Shortage",
    "skill": "Menjelaskan penyesuaian harga",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceAnchors": [
      "Shortage"
    ],
    "q": "Pada harga di bawah keseimbangan terjadi shortage. Tanpa kontrol harga, mekanisme pasar cenderung...",
    "options": [
      "mendorong harga naik hingga shortage berkurang",
      "mendorong harga turun lebih jauh",
      "menggeser demand otomatis ke kiri",
      "menghapus penawaran"
    ],
    "answer": 0,
    "explanation": "Kelebihan permintaan mendorong pembeli bersaing dan harga naik menuju keseimbangan."
  },
  {
    "id": "PTE-SIM-UTS-SUP-015",
    "kind": "multi-select",
    "tm": 3,
    "topic": "TM3 · Pergeseran Supply",
    "skill": "Mengidentifikasi supply shifters",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceAnchors": [
      "Pergeseran Supply"
    ],
    "q": "Pilih semua faktor yang dapat menggeser kurva penawaran ke kanan.",
    "options": [
      "Teknologi membaik",
      "Harga input turun",
      "Jumlah produsen bertambah",
      "Harga barang itu sendiri naik",
      "Pajak produksi meningkat"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Teknologi, biaya input, dan jumlah produsen menggeser supply. Harga barang sendiri hanya menyebabkan movement, sedangkan pajak produksi cenderung menggeser supply ke kiri."
  },
  {
    "id": "PTE-SIM-UTS-SUP-016",
    "kind": "report-fill",
    "tm": 3,
    "topic": "TM3 · Keseimbangan Pasar",
    "skill": "Menghitung harga dan kuantitas keseimbangan",
    "difficulty": "advanced",
    "sourceRef": "Reading EKT109 TM 3",
    "sourceAnchors": [
      "Keseimbangan Pasar"
    ],
    "q": "Diketahui Qd = 120 - 2P dan Qs = 20 + 3P. Hitung harga dan kuantitas keseimbangan.",
    "instruction": "Isi nilai P* dan Q*.",
    "blanks": [
      {
        "id": "price",
        "label": "Harga keseimbangan P*",
        "answer": 20
      },
      {
        "id": "qty",
        "label": "Kuantitas keseimbangan Q*",
        "answer": 80
      }
    ],
    "explanation": "Set Qd = Qs: 120 - 2P = 20 + 3P, sehingga P = 20 dan Q = 80."
  },
  {
    "id": "PTE-SIM-UTS-SUP-017",
    "tm": 4,
    "topic": "TM4 · Garis Anggaran",
    "skill": "Menafsirkan slope garis anggaran",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 4",
    "sourceAnchors": [
      "Garis Anggaran"
    ],
    "q": "Untuk anggaran I = PxX + PyY, nilai absolut slope garis anggaran adalah...",
    "options": [
      "Px/Py",
      "Py/Px",
      "I/Px",
      "I/Py"
    ],
    "answer": 0,
    "explanation": "Jika Y pada sumbu vertikal, slope garis anggaran adalah -Px/Py."
  },
  {
    "id": "PTE-SIM-UTS-SUP-018",
    "tm": 4,
    "topic": "TM4 · Income Effect",
    "skill": "Menganalisis barang normal",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 4",
    "sourceAnchors": [
      "Income Effect"
    ],
    "q": "Pendapatan konsumen naik dan kedua barang normal. Garis anggaran akan...",
    "options": [
      "bergeser sejajar ke luar",
      "berputar pada intercept X",
      "bergeser sejajar ke dalam",
      "tidak berubah"
    ],
    "answer": 0,
    "explanation": "Dengan harga tetap, kenaikan pendapatan menaikkan kedua intercept sehingga garis anggaran bergeser sejajar ke luar."
  },
  {
    "id": "PTE-SIM-UTS-SUP-019",
    "tm": 4,
    "topic": "TM4 · Keseimbangan Konsumen",
    "skill": "Menerapkan equimarginal principle",
    "difficulty": "advanced",
    "sourceRef": "Reading EKT109 TM 4",
    "sourceAnchors": [
      "Keseimbangan Konsumen"
    ],
    "q": "Konsumen mencapai alokasi optimal interior ketika...",
    "options": [
      "MUx/Px = MUy/Py",
      "MUx = MUy tanpa memperhatikan harga",
      "Px = Py selalu",
      "total utility setiap barang nol"
    ],
    "answer": 0,
    "explanation": "Utilitas maksimum dicapai ketika marginal utility per rupiah sama untuk seluruh barang yang dikonsumsi."
  },
  {
    "id": "PTE-SIM-UTS-SUP-020",
    "tm": 4,
    "topic": "TM4 · Marginal Utility",
    "skill": "Membedakan total dan marginal utility",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 4",
    "sourceAnchors": [
      "Marginal Utility"
    ],
    "q": "Total utility masih meningkat, tetapi dengan laju makin lambat. Kondisi ini berarti marginal utility...",
    "options": [
      "positif tetapi menurun",
      "negatif dan meningkat",
      "selalu nol",
      "konstan positif"
    ],
    "answer": 0,
    "explanation": "Selama MU positif, TU meningkat. Jika MU menurun, pertambahan TU semakin kecil."
  },
  {
    "id": "PTE-SIM-UTS-SUP-021",
    "kind": "account-match",
    "tm": 4,
    "topic": "TM4 · Perilaku Konsumen",
    "skill": "Memadankan konsep konsumen",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 4",
    "sourceAnchors": [
      "Perilaku Konsumen"
    ],
    "q": "Pasangkan konsep dengan definisinya.",
    "choices": [
      "Tambahan kepuasan dari satu unit tambahan",
      "Batas kombinasi yang terjangkau",
      "Jumlah kepuasan seluruh unit",
      "MU per rupiah sama"
    ],
    "pairs": [
      {
        "prompt": "Marginal utility",
        "answer": "Tambahan kepuasan dari satu unit tambahan"
      },
      {
        "prompt": "Budget constraint",
        "answer": "Batas kombinasi yang terjangkau"
      },
      {
        "prompt": "Total utility",
        "answer": "Jumlah kepuasan seluruh unit"
      },
      {
        "prompt": "Kondisi optimum interior",
        "answer": "MU per rupiah sama"
      }
    ],
    "explanation": "Konsep-konsep tersebut membentuk kerangka pilihan konsumen dengan anggaran terbatas."
  },
  {
    "id": "PTE-SIM-UTS-SUP-022",
    "tm": 5,
    "topic": "TM5 · Permintaan Inelastis Sempurna",
    "skill": "Mengenali bentuk kurva elastisitas",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 5",
    "sourceAnchors": [
      "Permintaan Inelastis Sempurna"
    ],
    "q": "Kurva permintaan vertikal memiliki elastisitas harga...",
    "options": [
      "nol",
      "satu",
      "tak terhingga",
      "lebih besar dari satu"
    ],
    "answer": 0,
    "explanation": "Pada kurva vertikal, kuantitas tidak berubah ketika harga berubah sehingga elastisitas sama dengan nol."
  },
  {
    "id": "PTE-SIM-UTS-SUP-023",
    "tm": 5,
    "topic": "TM5 · Elastisitas dan Penerimaan",
    "skill": "Menganalisis total revenue",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 5",
    "sourceAnchors": [
      "Elastisitas dan Penerimaan"
    ],
    "q": "Jika permintaan elastis, penurunan harga akan cenderung...",
    "options": [
      "menaikkan total revenue",
      "menurunkan total revenue",
      "tidak mengubah total revenue",
      "membuat kuantitas tetap"
    ],
    "answer": 0,
    "explanation": "Pada permintaan elastis, persentase kenaikan kuantitas lebih besar daripada persentase penurunan harga sehingga total revenue naik."
  },
  {
    "id": "PTE-SIM-UTS-SUP-024",
    "tm": 5,
    "topic": "TM5 · Elastisitas Silang",
    "skill": "Mengidentifikasi barang substitusi",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 5",
    "sourceAnchors": [
      "Elastisitas Silang"
    ],
    "q": "Elastisitas silang bernilai positif menunjukkan kedua barang cenderung...",
    "options": [
      "substitusi",
      "komplementer",
      "inferior",
      "barang publik"
    ],
    "answer": 0,
    "explanation": "Harga satu barang naik dan permintaan barang lain ikut naik, sehingga keduanya merupakan substitusi."
  },
  {
    "id": "PTE-SIM-UTS-SUP-025",
    "tm": 5,
    "topic": "TM5 · Elastisitas Pendapatan",
    "skill": "Mengidentifikasi barang inferior",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 5",
    "sourceAnchors": [
      "Elastisitas Pendapatan"
    ],
    "q": "Jika elastisitas pendapatan permintaan bernilai negatif, barang tersebut tergolong...",
    "options": [
      "inferior",
      "normal mewah",
      "substitusi sempurna",
      "inelastis sempurna"
    ],
    "answer": 0,
    "explanation": "Permintaan barang inferior turun ketika pendapatan naik sehingga elastisitas pendapatannya negatif."
  },
  {
    "id": "PTE-SIM-UTS-SUP-026",
    "kind": "multi-select",
    "tm": 5,
    "topic": "TM5 · Determinan Elastisitas",
    "skill": "Mengidentifikasi faktor elastisitas permintaan",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 5",
    "sourceAnchors": [
      "Determinan Elastisitas"
    ],
    "q": "Pilih semua kondisi yang cenderung membuat permintaan lebih elastis.",
    "options": [
      "Banyak substitusi dekat",
      "Waktu penyesuaian lebih panjang",
      "Barang menyerap porsi anggaran besar",
      "Barang sangat dibutuhkan tanpa substitusi",
      "Pasar didefinisikan sangat sempit"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Substitusi, waktu, porsi anggaran, dan definisi pasar sempit meningkatkan respons kuantitas terhadap perubahan harga."
  },
  {
    "id": "PTE-SIM-UTS-SUP-027",
    "tm": 6,
    "topic": "TM6 · Price Ceiling",
    "skill": "Membedakan kebijakan mengikat dan tidak mengikat",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 6",
    "sourceAnchors": [
      "Price Ceiling"
    ],
    "q": "Price ceiling yang ditetapkan di atas harga keseimbangan akan...",
    "options": [
      "tidak mengikat dan tidak mengubah hasil pasar",
      "menimbulkan shortage",
      "menimbulkan surplus",
      "menggeser supply ke kanan"
    ],
    "answer": 0,
    "explanation": "Batas harga maksimum di atas harga pasar tidak membatasi transaksi sehingga non-binding."
  },
  {
    "id": "PTE-SIM-UTS-SUP-028",
    "tm": 6,
    "topic": "TM6 · Price Floor",
    "skill": "Menganalisis pembelian pemerintah",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 6",
    "sourceAnchors": [
      "Price Floor"
    ],
    "q": "Price floor pertanian di atas harga keseimbangan menimbulkan surplus. Jika pemerintah membeli surplus tersebut, dampak langsungnya adalah...",
    "options": [
      "pengeluaran pemerintah meningkat",
      "shortage makin besar",
      "harga jatuh di bawah floor",
      "permintaan pasar hilang"
    ],
    "answer": 0,
    "explanation": "Pembelian pemerintah menyerap surplus tetapi memerlukan anggaran dan dapat menciptakan biaya penyimpanan."
  },
  {
    "id": "PTE-SIM-UTS-SUP-029",
    "tm": 6,
    "topic": "TM6 · Tax Incidence",
    "skill": "Menentukan pembagian beban pajak",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 6",
    "sourceAnchors": [
      "Tax Incidence"
    ],
    "q": "Jika supply sangat inelastis dan demand relatif elastis, beban pajak lebih besar ditanggung oleh...",
    "options": [
      "produsen",
      "konsumen",
      "pemerintah",
      "keduanya selalu sama"
    ],
    "answer": 0,
    "explanation": "Sisi pasar yang lebih inelastis lebih sulit menghindari transaksi sehingga menanggung beban pajak lebih besar."
  },
  {
    "id": "PTE-SIM-UTS-SUP-030",
    "kind": "multi-select",
    "tm": 6,
    "topic": "TM6 · Kebijakan Pasar",
    "skill": "Mengidentifikasi akibat kebijakan harga dan pajak",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 6",
    "sourceAnchors": [
      "Kebijakan Pasar"
    ],
    "q": "Pilih semua pernyataan yang benar.",
    "options": [
      "Price ceiling mengikat dapat menimbulkan shortage",
      "Price floor mengikat dapat menimbulkan surplus",
      "Pajak menciptakan wedge antara harga pembeli dan penjual",
      "Subsidi per unit selalu menurunkan kuantitas",
      "Beban pajak ditentukan hanya oleh siapa yang menyetor"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Kebijakan mengikat mengubah kuantitas transaksi. Insidensi ekonomi bergantung pada elastisitas, bukan kewajiban hukum penyetoran."
  },
  {
    "id": "PTE-SIM-UTS-SUP-031",
    "kind": "report-fill",
    "tm": 6,
    "topic": "TM6 · Deadweight Loss",
    "skill": "Menghitung DWL pajak",
    "difficulty": "advanced",
    "sourceRef": "Reading EKT109 TM 6",
    "sourceAnchors": [
      "Deadweight Loss"
    ],
    "q": "Pajak per unit Rp8.000 menurunkan kuantitas transaksi sebanyak 25 unit. Hitung deadweight loss.",
    "blanks": [
      {
        "id": "dwl",
        "label": "Deadweight loss",
        "answer": 100000,
        "prefix": "Rp"
      }
    ],
    "explanation": "DWL = 1/2 × pajak per unit × penurunan kuantitas = 1/2 × 8.000 × 25 = Rp100.000."
  },
  {
    "id": "PTE-SIM-UTS-SUP-032",
    "tm": 7,
    "topic": "TM7 · Willingness to Pay",
    "skill": "Menghubungkan WTP dan demand",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 7",
    "sourceAnchors": [
      "Willingness to Pay"
    ],
    "q": "Willingness to pay seorang konsumen tercermin pada...",
    "options": [
      "tinggi kurva permintaan pada kuantitas terkait",
      "tinggi kurva penawaran",
      "biaya marginal produsen",
      "penerimaan pajak"
    ],
    "answer": 0,
    "explanation": "Kurva permintaan menunjukkan nilai marginal atau willingness to pay konsumen untuk unit tambahan."
  },
  {
    "id": "PTE-SIM-UTS-SUP-033",
    "tm": 7,
    "topic": "TM7 · Producer Surplus",
    "skill": "Mengidentifikasi surplus produsen",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 7",
    "sourceAnchors": [
      "Producer Surplus"
    ],
    "q": "Producer surplus untuk satu unit adalah...",
    "options": [
      "harga yang diterima dikurangi biaya marginal",
      "WTP dikurangi harga",
      "harga dikurangi pajak saja",
      "total revenue dikurangi consumer surplus"
    ],
    "answer": 0,
    "explanation": "Producer surplus adalah selisih antara harga yang diterima dan biaya marginal atau minimum willingness to accept."
  },
  {
    "id": "PTE-SIM-UTS-SUP-034",
    "tm": 7,
    "topic": "TM7 · Efisiensi Pasar",
    "skill": "Menentukan kondisi efisien",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 7",
    "sourceAnchors": [
      "Efisiensi Pasar"
    ],
    "q": "Total surplus dimaksimalkan ketika unit diproduksi sampai...",
    "options": [
      "manfaat marginal sama dengan biaya marginal",
      "harga selalu nol",
      "consumer surplus sama dengan producer surplus",
      "pemerintah menerima pajak maksimum"
    ],
    "answer": 0,
    "explanation": "Efisiensi alokatif tercapai pada kuantitas ketika marginal benefit sama dengan marginal cost."
  },
  {
    "id": "PTE-SIM-UTS-SUP-035",
    "kind": "account-match",
    "tm": 7,
    "topic": "TM7 · Analisis Kesejahteraan",
    "skill": "Memadankan komponen welfare",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 7",
    "sourceAnchors": [
      "Analisis Kesejahteraan"
    ],
    "q": "Pasangkan komponen kesejahteraan dengan rumus atau maknanya.",
    "choices": [
      "WTP - harga",
      "Harga - biaya marginal",
      "CS + PS",
      "Kehilangan total surplus"
    ],
    "pairs": [
      {
        "prompt": "Consumer surplus per unit",
        "answer": "WTP - harga"
      },
      {
        "prompt": "Producer surplus per unit",
        "answer": "Harga - biaya marginal"
      },
      {
        "prompt": "Total surplus",
        "answer": "CS + PS"
      },
      {
        "prompt": "Deadweight loss",
        "answer": "Kehilangan total surplus"
      }
    ],
    "explanation": "Analisis kesejahteraan membagi manfaat perdagangan menjadi surplus konsumen, surplus produsen, penerimaan pemerintah, dan kehilangan efisiensi."
  },
  {
    "id": "PTE-SIM-UTS-SUP-036",
    "kind": "report-fill",
    "tm": 7,
    "topic": "TM7 · Penerimaan Pajak",
    "skill": "Menghitung tax revenue",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 7",
    "sourceAnchors": [
      "Penerimaan Pajak"
    ],
    "q": "Pajak per unit Rp4.000 dikenakan pada 60 unit yang tetap diperdagangkan. Hitung penerimaan pajak pemerintah.",
    "blanks": [
      {
        "id": "revenue",
        "label": "Penerimaan pajak",
        "answer": 240000,
        "prefix": "Rp"
      }
    ],
    "explanation": "Penerimaan pajak = pajak per unit × kuantitas setelah pajak = 4.000 × 60 = Rp240.000."
  }
];

const EKT109_UAS_SUPPLEMENT: QuizQuestion[] = [
  {
    "id": "PTE-SIM-UAS-SUP-001",
    "tm": 8,
    "topic": "TM8 · Komponen GDP",
    "skill": "Mengidentifikasi transaksi di luar GDP",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 8",
    "sourceAnchors": [
      "Komponen GDP"
    ],
    "q": "Transaksi yang tidak menambah GDP tahun berjalan adalah...",
    "options": [
      "jasa dokter tahun berjalan",
      "pembelian mesin baru",
      "pembelian mobil bekas antar rumah tangga",
      "pembangunan rumah baru"
    ],
    "answer": 2,
    "explanation": "Barang bekas sudah dihitung ketika pertama kali diproduksi. Hanya jasa perantara baru, jika ada, yang masuk GDP tahun berjalan."
  },
  {
    "id": "PTE-SIM-UAS-SUP-002",
    "kind": "multi-select",
    "tm": 8,
    "topic": "TM8 · Pendekatan Pengeluaran",
    "skill": "Mengklasifikasikan komponen GDP",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 8",
    "sourceAnchors": [
      "Pendekatan Pengeluaran"
    ],
    "q": "Pilih semua transaksi yang masuk komponen investasi (I) dalam GDP.",
    "options": [
      "Pembelian rumah baru",
      "Penambahan persediaan perusahaan",
      "Pembelian saham perusahaan lama",
      "Pembelian mesin produksi baru",
      "Transfer sosial pemerintah"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Investasi GDP mencakup modal tetap, persediaan, dan rumah baru. Saham merupakan transaksi aset finansial dan transfer bukan pembelian output."
  },
  {
    "id": "PTE-SIM-UAS-SUP-003",
    "kind": "account-match",
    "tm": 8,
    "topic": "TM8 · Ukuran Pendapatan Nasional",
    "skill": "Memadankan indikator makro",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 8",
    "sourceAnchors": [
      "Ukuran Pendapatan Nasional"
    ],
    "q": "Pasangkan indikator dengan definisinya.",
    "choices": [
      "Produksi di wilayah domestik",
      "GDP dikurangi depresiasi",
      "Pendapatan siap pakai setelah pajak personal",
      "GDP ditambah pendapatan faktor neto luar negeri"
    ],
    "pairs": [
      {
        "prompt": "GDP",
        "answer": "Produksi di wilayah domestik"
      },
      {
        "prompt": "NDP",
        "answer": "GDP dikurangi depresiasi"
      },
      {
        "prompt": "Disposable income",
        "answer": "Pendapatan siap pakai setelah pajak personal"
      },
      {
        "prompt": "GNP/GNI",
        "answer": "GDP ditambah pendapatan faktor neto luar negeri"
      }
    ],
    "explanation": "Setiap indikator mengoreksi GDP berdasarkan penyusutan, kepemilikan faktor, atau aliran pendapatan rumah tangga."
  },
  {
    "id": "PTE-SIM-UAS-SUP-004",
    "kind": "ordering",
    "tm": 8,
    "topic": "TM8 · Pendekatan Nilai Tambah",
    "skill": "Mengurutkan perhitungan nilai tambah",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 8",
    "sourceAnchors": [
      "Pendekatan Nilai Tambah"
    ],
    "q": "Urutkan proses menghitung GDP dengan pendekatan nilai tambah.",
    "instruction": "Pilih tahap dari awal hingga hasil akhir.",
    "items": [
      "Identifikasi nilai output pada setiap tahap produksi",
      "Identifikasi biaya input antara pada setiap tahap",
      "Hitung nilai tambah setiap tahap: output dikurangi input antara",
      "Jumlahkan nilai tambah seluruh tahap produksi"
    ],
    "correctOrder": [
      "Identifikasi nilai output pada setiap tahap produksi",
      "Identifikasi biaya input antara pada setiap tahap",
      "Hitung nilai tambah setiap tahap: output dikurangi input antara",
      "Jumlahkan nilai tambah seluruh tahap produksi"
    ],
    "explanation": "Pendekatan nilai tambah menghitung output dikurangi input antara pada tiap tahap, lalu menjumlahkan seluruh nilai tambah. Prosedur ini mencegah penghitungan ganda barang antara sebagai konsekuensi metode, bukan sebagai langkah tersendiri."
  },
  {
    "id": "PTE-SIM-UAS-SUP-005",
    "tm": 9,
    "topic": "TM9 · Tabungan Publik",
    "skill": "Menganalisis defisit pemerintah",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 9",
    "sourceAnchors": [
      "Tabungan Publik"
    ],
    "q": "Jika T < G, maka tabungan publik bernilai...",
    "options": [
      "negatif",
      "positif",
      "nol selalu",
      "sama dengan investasi swasta"
    ],
    "answer": 0,
    "explanation": "Public saving = T - G. Ketika belanja melebihi penerimaan pajak, pemerintah mengalami defisit dan tabungan publik negatif."
  },
  {
    "id": "PTE-SIM-UAS-SUP-006",
    "kind": "multi-select",
    "tm": 9,
    "topic": "TM9 · Tabungan Nasional",
    "skill": "Mengidentifikasi komponen tabungan",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 9",
    "sourceAnchors": [
      "Tabungan Nasional"
    ],
    "q": "Pilih semua identitas yang benar dalam ekonomi tertutup.",
    "options": [
      "S = Y - C - G",
      "Sprivate = Y - T - C",
      "Spublic = T - G",
      "S = I",
      "NX selalu positif"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Dalam ekonomi tertutup NX = 0 dan tabungan nasional sama dengan investasi. Tabungan nasional merupakan jumlah tabungan privat dan publik."
  },
  {
    "id": "PTE-SIM-UAS-SUP-007",
    "kind": "account-match",
    "tm": 9,
    "topic": "TM9 · Pasar Dana Pinjaman",
    "skill": "Memadankan perubahan pasar dana",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 9",
    "sourceAnchors": [
      "Pasar Dana Pinjaman"
    ],
    "q": "Pasangkan perubahan dengan dampak utamanya.",
    "choices": [
      "Supply dana bergeser kiri",
      "Supply dana bergeser kanan",
      "Demand dana bergeser kanan",
      "Suku bunga riil turun"
    ],
    "pairs": [
      {
        "prompt": "Defisit pemerintah meningkat",
        "answer": "Supply dana bergeser kiri"
      },
      {
        "prompt": "Insentif menabung meningkat",
        "answer": "Supply dana bergeser kanan"
      },
      {
        "prompt": "Ekspektasi laba investasi membaik",
        "answer": "Demand dana bergeser kanan"
      },
      {
        "prompt": "Kelebihan penawaran dana",
        "answer": "Suku bunga riil turun"
      }
    ],
    "explanation": "Tabungan menentukan supply dana, investasi menentukan demand dana, dan suku bunga riil menyeimbangkan keduanya."
  },
  {
    "id": "PTE-SIM-UAS-SUP-008",
    "kind": "multi-select",
    "tm": 10,
    "topic": "TM10 · Kebijakan Fiskal",
    "skill": "Membedakan fiskal ekspansif",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 10",
    "sourceAnchors": [
      "Kebijakan Fiskal"
    ],
    "q": "Pilih semua kebijakan fiskal ekspansif.",
    "options": [
      "Belanja pemerintah meningkat",
      "Pajak menurun",
      "Transfer sosial meningkat",
      "Belanja pemerintah menurun",
      "Pajak meningkat"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Fiskal ekspansif meningkatkan pengeluaran agregat melalui kenaikan G, penurunan T, atau kenaikan transfer."
  },
  {
    "id": "PTE-SIM-UAS-SUP-009",
    "kind": "account-match",
    "tm": 10,
    "topic": "TM10 · Multiplier",
    "skill": "Memadankan multiplier",
    "difficulty": "advanced",
    "sourceRef": "Reading EKT109 TM 10",
    "sourceAnchors": [
      "Multiplier"
    ],
    "q": "Pasangkan multiplier dengan rumusnya.",
    "choices": [
      "1/(1-MPC)",
      "-MPC/(1-MPC)",
      "1",
      "1/MPS"
    ],
    "pairs": [
      {
        "prompt": "Government spending multiplier",
        "answer": "1/(1-MPC)"
      },
      {
        "prompt": "Tax multiplier",
        "answer": "-MPC/(1-MPC)"
      },
      {
        "prompt": "Balanced-budget multiplier",
        "answer": "1"
      },
      {
        "prompt": "Investment multiplier",
        "answer": "1/MPS"
      }
    ],
    "explanation": "Karena MPS = 1 - MPC, multiplier investasi dan belanja sama-sama dapat ditulis 1/MPS."
  },
  {
    "id": "PTE-SIM-UAS-SUP-010",
    "kind": "ordering",
    "tm": 10,
    "topic": "TM10 · Keynesian Cross",
    "skill": "Mengurutkan penyesuaian persediaan",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 10",
    "sourceAnchors": [
      "Keynesian Cross"
    ],
    "q": "Urutkan respons ekonomi ketika planned expenditure lebih besar daripada output aktual.",
    "items": [
      "Persediaan tak direncanakan turun",
      "Perusahaan menaikkan produksi",
      "Pendapatan dan output meningkat",
      "Ekonomi bergerak menuju Y = AE"
    ],
    "correctOrder": [
      "Persediaan tak direncanakan turun",
      "Perusahaan menaikkan produksi",
      "Pendapatan dan output meningkat",
      "Ekonomi bergerak menuju Y = AE"
    ],
    "explanation": "Ketika permintaan melebihi produksi, persediaan berkurang dan perusahaan meningkatkan output sampai planned expenditure sama dengan output."
  },
  {
    "id": "PTE-SIM-UAS-SUP-011",
    "tm": 11,
    "topic": "TM11 · Jenis Uang",
    "skill": "Membedakan fiat dan commodity money",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 11",
    "sourceAnchors": [
      "Jenis Uang"
    ],
    "q": "Rupiah modern tergolong fiat money karena...",
    "options": [
      "nilainya terutama berasal dari penetapan dan penerimaan umum",
      "selalu dapat ditukar emas dalam jumlah tetap",
      "memiliki nilai intrinsik sebesar nominalnya",
      "hanya digunakan bank komersial"
    ],
    "answer": 0,
    "explanation": "Fiat money bernilai karena legal tender, kepercayaan, dan penerimaan umum, bukan karena nilai intrinsik komoditasnya."
  },
  {
    "id": "PTE-SIM-UAS-SUP-012",
    "kind": "multi-select",
    "tm": 11,
    "topic": "TM11 · Bank Sentral",
    "skill": "Mengidentifikasi instrumen moneter",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 11",
    "sourceAnchors": [
      "Bank Sentral"
    ],
    "q": "Pilih semua instrumen atau saluran kebijakan moneter.",
    "options": [
      "Policy rate",
      "Operasi pasar terbuka",
      "Giro wajib minimum",
      "Belanja kementerian",
      "Fasilitas pinjaman bank sentral"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Policy rate, operasi pasar terbuka, reserve requirement, dan lending facility merupakan instrumen moneter. Belanja kementerian merupakan kebijakan fiskal."
  },
  {
    "id": "PTE-SIM-UAS-SUP-013",
    "kind": "account-match",
    "tm": 11,
    "topic": "TM11 · Sistem Keuangan",
    "skill": "Memadankan lembaga dan fungsi",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 11",
    "sourceAnchors": [
      "Sistem Keuangan"
    ],
    "q": "Pasangkan konsep sistem keuangan dengan fungsinya.",
    "choices": [
      "Menyalurkan dana melalui bank",
      "Mempertemukan penerbit dan investor langsung",
      "Menjadi alat pertukaran",
      "Menyediakan likuiditas darurat"
    ],
    "pairs": [
      {
        "prompt": "Financial intermediary",
        "answer": "Menyalurkan dana melalui bank"
      },
      {
        "prompt": "Financial market",
        "answer": "Mempertemukan penerbit dan investor langsung"
      },
      {
        "prompt": "Money",
        "answer": "Menjadi alat pertukaran"
      },
      {
        "prompt": "Lender of last resort",
        "answer": "Menyediakan likuiditas darurat"
      }
    ],
    "explanation": "Sistem keuangan menghubungkan penabung dan peminjam, sedangkan bank sentral menjaga likuiditas sistem."
  },
  {
    "id": "PTE-SIM-UAS-SUP-014",
    "kind": "ordering",
    "tm": 11,
    "topic": "TM11 · Transmisi Moneter",
    "skill": "Mengurutkan transmisi kebijakan ekspansif",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 11",
    "sourceAnchors": [
      "Transmisi Moneter"
    ],
    "q": "Urutkan transmisi umum ketika bank sentral menurunkan policy rate.",
    "items": [
      "Suku bunga pasar menurun",
      "Konsumsi tahan lama dan investasi meningkat",
      "Permintaan agregat meningkat",
      "Output jangka pendek cenderung meningkat"
    ],
    "correctOrder": [
      "Suku bunga pasar menurun",
      "Konsumsi tahan lama dan investasi meningkat",
      "Permintaan agregat meningkat",
      "Output jangka pendek cenderung meningkat"
    ],
    "explanation": "Penurunan policy rate ditransmisikan melalui suku bunga pasar, pengeluaran sensitif bunga, permintaan agregat, lalu output dan harga."
  },
  {
    "id": "PTE-SIM-UAS-SUP-015",
    "kind": "multi-select",
    "tm": 12,
    "topic": "TM12 · Neraca Pembayaran",
    "skill": "Mengidentifikasi current account",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 12",
    "sourceAnchors": [
      "Neraca Pembayaran"
    ],
    "q": "Pilih semua transaksi yang terutama dicatat dalam current account.",
    "options": [
      "Ekspor barang",
      "Impor jasa",
      "Pendapatan faktor dari luar negeri",
      "Pembelian saham asing",
      "Transfer unilateral"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Current account mencatat barang, jasa, pendapatan primer, dan transfer. Pembelian aset finansial masuk financial account."
  },
  {
    "id": "PTE-SIM-UAS-SUP-016",
    "kind": "account-match",
    "tm": 12,
    "topic": "TM12 · Nilai Tukar",
    "skill": "Memadankan konsep kurs",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 12",
    "sourceAnchors": [
      "Nilai Tukar"
    ],
    "q": "Pasangkan konsep nilai tukar dengan maknanya.",
    "choices": [
      "Kenaikan nilai mata uang domestik",
      "Penurunan nilai mata uang domestik",
      "Harga relatif barang domestik terhadap asing",
      "Kesetaraan daya beli jangka panjang"
    ],
    "pairs": [
      {
        "prompt": "Apresiasi",
        "answer": "Kenaikan nilai mata uang domestik"
      },
      {
        "prompt": "Depresiasi",
        "answer": "Penurunan nilai mata uang domestik"
      },
      {
        "prompt": "Real exchange rate",
        "answer": "Harga relatif barang domestik terhadap asing"
      },
      {
        "prompt": "PPP",
        "answer": "Kesetaraan daya beli jangka panjang"
      }
    ],
    "explanation": "Kurs nominal membandingkan mata uang, sedangkan kurs riil membandingkan harga barang lintas negara."
  },
  {
    "id": "PTE-SIM-UAS-SUP-017",
    "kind": "ordering",
    "tm": 12,
    "topic": "TM12 · Depresiasi Kurs",
    "skill": "Mengurutkan transmisi depresiasi",
    "difficulty": "advanced",
    "sourceRef": "Reading EKT109 TM 12",
    "sourceAnchors": [
      "Depresiasi Kurs"
    ],
    "q": "Urutkan mekanisme standar depresiasi mata uang terhadap ekspor neto, dengan asumsi kuantitas merespons setelah jeda.",
    "items": [
      "Mata uang domestik terdepresiasi",
      "Barang domestik relatif lebih murah bagi pihak luar",
      "Ekspor cenderung meningkat dan impor cenderung menurun",
      "Ekspor neto cenderung meningkat"
    ],
    "correctOrder": [
      "Mata uang domestik terdepresiasi",
      "Barang domestik relatif lebih murah bagi pihak luar",
      "Ekspor cenderung meningkat dan impor cenderung menurun",
      "Ekspor neto cenderung meningkat"
    ],
    "explanation": "Depresiasi mengubah harga relatif dan kemudian volume perdagangan. Respons dapat tertunda karena kontrak dan J-curve."
  },
  {
    "id": "PTE-SIM-UAS-SUP-018",
    "tm": 9,
    "topic": "TM9 · Fungsi Konsumsi dan Tabungan",
    "skill": "Menganalisis hubungan MPC dan MPS",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 9",
    "sourceAnchors": [
      "Fungsi Konsumsi dan Tabungan"
    ],
    "q": "Jika marginal propensity to consume (MPC) sebesar 0,75, maka marginal propensity to save (MPS) adalah...",
    "options": [
      "0,25",
      "0,75",
      "1,25",
      "1,75"
    ],
    "answer": 0,
    "explanation": "Dalam model konsumsi sederhana, MPC + MPS = 1. Karena MPC 0,75, MPS = 1 - 0,75 = 0,25."
  },
  {
    "id": "PTE-SIM-UAS-SUP-019",
    "kind": "multi-select",
    "tm": 8,
    "topic": "TM8 · Keterbatasan GDP",
    "skill": "Mengidentifikasi keterbatasan GDP sebagai ukuran kesejahteraan",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 8",
    "sourceAnchors": [
      "Keterbatasan GDP"
    ],
    "q": "Pilih semua aspek kesejahteraan yang tidak tercermin secara langsung dan lengkap dalam GDP.",
    "options": [
      "Distribusi pendapatan",
      "Kualitas lingkungan",
      "Nilai kegiatan nonpasar",
      "Jumlah produksi barang dan jasa final domestik",
      "Waktu luang dan kualitas hidup"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "GDP mengukur nilai produksi pasar, tetapi tidak secara langsung menangkap distribusi, lingkungan, kegiatan nonpasar, waktu luang, dan dimensi kualitas hidup lainnya."
  },
  {
    "id": "PTE-SIM-UAS-SUP-020",
    "kind": "multi-select",
    "tm": 10,
    "topic": "TM10 · Kebocoran Multiplier Fiskal",
    "skill": "Menganalisis faktor yang memperlemah multiplier",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 10",
    "sourceAnchors": [
      "Multiplier dan Kebijakan Fiskal"
    ],
    "q": "Pilih semua kondisi yang cenderung memperkecil dampak multiplier dari kenaikan belanja pemerintah.",
    "options": [
      "Sebagian pendapatan tambahan digunakan untuk impor",
      "Pajak meningkat ketika pendapatan naik",
      "Suku bunga naik dan menekan investasi swasta",
      "MPC rumah tangga sangat tinggi tanpa kebocoran lain",
      "Bank sentral mengetatkan kebijakan untuk menahan inflasi"
    ],
    "answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Impor, pajak, crowding out, dan pengetatan moneter merupakan kebocoran atau respons yang menahan penggandaan belanja. MPC tinggi justru memperbesar multiplier, faktor lain tetap."
  },
  {
    "id": "PTE-SIM-UAS-SUP-021",
    "kind": "account-match",
    "tm": 12,
    "topic": "TM12 · Neraca Pembayaran",
    "skill": "Memadankan transaksi ekonomi terbuka",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 12",
    "sourceAnchors": [
      "Balance of Payments"
    ],
    "q": "Pasangkan transaksi internasional dengan pencatatan utamanya dalam neraca pembayaran.",
    "choices": [
      "Kredit current account",
      "Debit current account",
      "Arus masuk financial account",
      "Arus keluar financial account"
    ],
    "pairs": [
      {
        "prompt": "Perusahaan domestik mengekspor jasa ke luar negeri",
        "answer": "Kredit current account"
      },
      {
        "prompt": "Rumah tangga domestik membeli barang impor",
        "answer": "Debit current account"
      },
      {
        "prompt": "Investor asing membeli obligasi domestik",
        "answer": "Arus masuk financial account"
      },
      {
        "prompt": "Penduduk domestik membeli saham perusahaan luar negeri",
        "answer": "Arus keluar financial account"
      }
    ],
    "explanation": "Ekspor dan impor barang atau jasa masuk current account, sedangkan pembelian aset lintas negara dicatat pada financial account sesuai arah arus modal."
  },
  {
    "id": "PTE-SIM-UAS-SUP-022",
    "kind": "account-match",
    "tm": 13,
    "topic": "TM13 · Jenis Pengangguran",
    "skill": "Memadankan jenis pengangguran",
    "difficulty": "basic",
    "sourceRef": "Reading EKT109 TM 13",
    "sourceAnchors": [
      "Jenis Pengangguran"
    ],
    "q": "Pasangkan jenis pengangguran dengan contoh.",
    "choices": [
      "Friksional",
      "Struktural",
      "Siklis",
      "Musiman"
    ],
    "pairs": [
      {
        "prompt": "Pencari kerja sedang berpindah antarpekerjaan",
        "answer": "Friksional"
      },
      {
        "prompt": "Skill pekerja tidak sesuai teknologi baru",
        "answer": "Struktural"
      },
      {
        "prompt": "PHK meningkat saat resesi",
        "answer": "Siklis"
      },
      {
        "prompt": "Pekerjaan panen hanya tersedia pada bulan tertentu",
        "answer": "Musiman"
      }
    ],
    "explanation": "Klasifikasi pengangguran membantu membedakan masalah pencarian, mismatch, siklus bisnis, dan pola musim."
  },
  {
    "id": "PTE-SIM-UAS-SUP-023",
    "kind": "multi-select",
    "tm": 14,
    "topic": "TM14 · Produktivitas",
    "skill": "Mengidentifikasi sumber pertumbuhan",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 14",
    "sourceAnchors": [
      "Produktivitas"
    ],
    "q": "Pilih semua faktor yang dapat meningkatkan produktivitas jangka panjang.",
    "options": [
      "Human capital",
      "Physical capital",
      "Kemajuan teknologi",
      "Institusi yang mendukung investasi",
      "Mencetak uang tanpa kenaikan output"
    ],
    "answers": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Produktivitas dipengaruhi modal fisik, modal manusia, teknologi, sumber daya, dan kualitas institusi. Pencetakan uang tidak menciptakan kapasitas riil dengan sendirinya."
  },
  {
    "id": "PTE-SIM-UAS-SUP-024",
    "kind": "account-match",
    "tm": 14,
    "topic": "TM14 · Pertumbuhan dan Pembangunan",
    "skill": "Memadankan indikator pembangunan",
    "difficulty": "medium",
    "sourceRef": "Reading EKT109 TM 14",
    "sourceAnchors": [
      "Pertumbuhan dan Pembangunan"
    ],
    "q": "Pasangkan konsep dengan fokus utamanya.",
    "choices": [
      "Kenaikan real GDP per kapita",
      "Pendidikan dan keterampilan",
      "Kualitas hidup multidimensi",
      "Konvergensi negara berpendapatan rendah"
    ],
    "pairs": [
      {
        "prompt": "Pertumbuhan ekonomi",
        "answer": "Kenaikan real GDP per kapita"
      },
      {
        "prompt": "Human capital",
        "answer": "Pendidikan dan keterampilan"
      },
      {
        "prompt": "Pembangunan ekonomi",
        "answer": "Kualitas hidup multidimensi"
      },
      {
        "prompt": "Catch-up effect",
        "answer": "Konvergensi negara berpendapatan rendah"
      }
    ],
    "explanation": "Pertumbuhan menekankan output riil, sedangkan pembangunan mencakup kesehatan, pendidikan, distribusi, institusi, dan kualitas hidup."
  }
];


export const EKT109_QUIZ_UTS_SIMULATOR: QuizQuestion[] = [
  ...bankPhase('pra-uts'),
  ...balanceChoicePositions(EKT109_UTS_SUPPLEMENT),
];

export const EKT109_QUIZ_UAS_SIMULATOR: QuizQuestion[] = [
  ...bankPhase('pra-uas'),
  ...balanceChoicePositions(EKT109_UAS_SUPPLEMENT),
];
