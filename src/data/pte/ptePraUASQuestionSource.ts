// Source-only normalized questions from the Pra-UAS HTML companion.
// These questions are intentionally NOT registered as bank soal or simulator data in Batch 2.
// Graph questions remain flagged for reconstruction and academic validation.

export interface PtePraUasSourceQuestion {
  id: string;
  kind: 'objective' | 'reveal';
  sourceTag: string;
  prompt: string;
  explanation: string;
  options?: string[];
  answerIndex?: number;
  sourceSvg?: string;
  needsGraphReconstruction?: boolean;
}

export const PTE_PRA_UAS_SOURCE_QUESTIONS: PtePraUasSourceQuestion[] = [
  {
    "id": "PTE-SRC-Q001",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "GDP mengukur...",
    "explanation": "GDP/PDB berbasis wilayah domestik dan hanya menghitung barang/jasa akhir baru.",
    "options": [
      "nilai pasar barang antara",
      "nilai pasar barang dan jasa akhir yang diproduksi domestik",
      "nilai seluruh transaksi saham",
      "pendapatan warga negara di mana pun berada"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q002",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Pembelian rumah baru dalam GDP pendekatan pengeluaran masuk ke...",
    "explanation": "Rumah baru masuk investasi residensial.",
    "options": [
      "C",
      "I",
      "G",
      "NX"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q003",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Jika nominal GDP = 1.500 dan real GDP = 1.200, GDP deflator = ...",
    "explanation": "Deflator = 1.500/1.200 × 100 = 125.",
    "options": [
      "80",
      "100",
      "125",
      "300"
    ],
    "answerIndex": 2
  },
  {
    "id": "PTE-SRC-Q004",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Dalam perekonomian tertutup dengan pemerintah, identitas pengeluaran adalah...",
    "explanation": "Ekonomi tertutup tidak memiliki NX, sehingga Y=C+I+G.",
    "options": [
      "Y=C+I+G",
      "Y=C+I+G+NX",
      "S=NX",
      "GDP=GNP"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q005",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Jika MPC = 0,75, multiplier belanja pemerintah adalah...",
    "explanation": "k = 1/(1−0,75) = 4.",
    "options": [
      "1,33",
      "3",
      "4",
      "0,25"
    ],
    "answerIndex": 2
  },
  {
    "id": "PTE-SRC-Q006",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Tax multiplier bernilai negatif karena...",
    "explanation": "Pajak menurunkan Yd, lalu konsumsi turun sebesar MPC × perubahan pajak.",
    "options": [
      "pajak selalu buruk",
      "kenaikan pajak mengurangi disposable income dan konsumsi",
      "pajak tidak memengaruhi konsumsi",
      "pajak langsung masuk GDP"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q007",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Balanced-budget multiplier dalam model sederhana bernilai...",
    "explanation": "Kenaikan G dan T sama besar menaikkan output sebesar perubahan G bersih karena multiplier G lebih besar dari multiplier T secara absolut.",
    "options": [
      "0",
      "1",
      "−1",
      "sebesar MPC"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q008",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Fungsi utama uang sebagai medium of exchange berarti uang...",
    "explanation": "Medium of exchange berarti alat tukar yang diterima umum.",
    "options": [
      "mengukur inflasi",
      "menjadi alat tukar umum",
      "selalu memberi bunga",
      "hanya berupa emas"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q009",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Jika reserve ratio = 20%, simple money multiplier = ...",
    "explanation": "Multiplier = 1/0,20 = 5.",
    "options": [
      "2",
      "4",
      "5",
      "20"
    ],
    "answerIndex": 2
  },
  {
    "id": "PTE-SRC-Q010",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "MV = PY adalah persamaan dalam...",
    "explanation": "MV=PY adalah quantity equation.",
    "options": [
      "teori kuantitas uang",
      "teori keunggulan komparatif",
      "teori utilitas",
      "hukum permintaan"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q011",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Kenaikan policy rate biasanya akan...",
    "explanation": "Suku bunga acuan lebih tinggi membuat kredit lebih mahal dan menekan permintaan agregat.",
    "options": [
      "mendorong investasi naik kuat",
      "menurunkan biaya kredit dan menaikkan AD",
      "menaikkan biaya kredit dan menekan AD",
      "tidak memengaruhi ekonomi"
    ],
    "answerIndex": 2
  },
  {
    "id": "PTE-SRC-Q012",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Current account mencatat...",
    "explanation": "Current account berisi transaksi riil dan pendapatan/transfer lintas negara.",
    "options": [
      "hanya cadangan devisa",
      "transaksi barang, jasa, pendapatan, dan transfer berjalan",
      "hanya pembelian saham",
      "hanya APBN"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q013",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Dalam ekonomi terbuka, identitas yang benar adalah...",
    "explanation": "Dari Y=C+I+G+NX dan S=Y−C−G, diperoleh S=I+NX.",
    "options": [
      "S=I+NX",
      "S=C+G",
      "NX=I−S selalu",
      "NCO=G"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q014",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Jika S < I, maka biasanya...",
    "explanation": "NX = S−I, sehingga jika S<I maka NX negatif.",
    "options": [
      "NX positif",
      "NX negatif",
      "tidak ada arus modal",
      "ekspor pasti nol"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q015",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Depresiasi mata uang domestik cenderung...",
    "explanation": "Depresiasi membuat mata uang domestik lebih lemah sehingga barang impor menjadi lebih mahal.",
    "options": [
      "membuat impor lebih murah",
      "membuat ekspor lebih mahal bagi asing",
      "membuat impor lebih mahal",
      "selalu menurunkan inflasi"
    ],
    "answerIndex": 2
  },
  {
    "id": "PTE-SRC-Q016",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "PPP menyatakan bahwa nilai tukar jangka panjang cenderung menyesuaikan...",
    "explanation": "PPP berangkat dari law of one price dan kesetaraan daya beli.",
    "options": [
      "perbedaan daya beli/harga antarnegara",
      "jumlah penduduk saja",
      "APBN saja",
      "tingkat pengangguran saja"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q017",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Inflasi demand-pull terjadi ketika...",
    "explanation": "Demand-pull berasal dari permintaan agregat yang melebihi kapasitas output.",
    "options": [
      "AD terlalu kuat",
      "AS bergeser kanan",
      "uang hilang dari ekonomi",
      "pengangguran struktural naik tanpa permintaan"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q018",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Cost-push inflation dapat dipicu oleh...",
    "explanation": "Biaya produksi naik menggeser SRAS ke kiri dan menaikkan harga.",
    "options": [
      "penurunan harga energi",
      "kenaikan biaya produksi",
      "penurunan upah nominal",
      "surplus besar barang"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q019",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Unemployment rate = ...",
    "explanation": "Tingkat pengangguran memakai angkatan kerja sebagai penyebut.",
    "options": [
      "unemployed/population",
      "unemployed/labor force × 100%",
      "labor force/population",
      "employed/unemployed"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q020",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Pengangguran karena ketidaksesuaian skill disebut...",
    "explanation": "Structural unemployment muncul karena mismatch struktur keterampilan/lokasi/industri.",
    "options": [
      "frictional",
      "structural",
      "cyclical",
      "seasonal"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q021",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Okun’s law menghubungkan...",
    "explanation": "Okun mengaitkan deviasi pengangguran dari natural rate dengan deviasi output dari potensial.",
    "options": [
      "inflasi dan uang",
      "pengangguran dan output gap",
      "kurs dan ekspor",
      "tabungan dan investasi"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q022",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Phillips curve jangka pendek menunjukkan...",
    "explanation": "Dalam jangka pendek, pengangguran lebih rendah sering terkait inflasi lebih tinggi.",
    "options": [
      "trade-off inflasi dan pengangguran",
      "GDP selalu naik",
      "uang netral dalam semua jangka",
      "kurs selalu tetap"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q023",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Stagflation adalah kondisi...",
    "explanation": "Stagflation sering muncul akibat supply shock negatif.",
    "options": [
      "inflasi rendah dan output tinggi",
      "inflasi tinggi dan pengangguran tinggi",
      "pengangguran nol",
      "kurs tetap"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q024",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Pertumbuhan ekonomi paling tepat diukur dengan...",
    "explanation": "Pertumbuhan harus menghilangkan efek inflasi, sehingga memakai real GDP.",
    "options": [
      "kenaikan GDP nominal saja",
      "kenaikan real GDP atau real GDP per capita",
      "kenaikan harga saham saja",
      "jumlah uang kartal"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q025",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Rule of 70 digunakan untuk...",
    "explanation": "Waktu pelipatan kira-kira 70 dibagi growth rate persen.",
    "options": [
      "menghitung inflasi bulanan",
      "memperkirakan waktu pelipatan pendapatan",
      "menentukan kurs PPP",
      "menghitung multiplier bank"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q026",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Sumber utama pertumbuhan jangka panjang yang berkelanjutan adalah...",
    "explanation": "Modal mengalami diminishing returns; kemajuan teknologi/TFP menopang pertumbuhan jangka panjang.",
    "options": [
      "inflasi tinggi",
      "teknologi dan produktivitas",
      "transfer payment saja",
      "konsumsi utang"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q027",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Catch-up effect berarti...",
    "explanation": "Modal awal rendah membuat tambahan modal lebih produktif, tetapi institusi dan stabilitas tetap penting.",
    "options": [
      "negara kaya pasti selalu tumbuh lebih cepat",
      "negara dengan modal awal rendah bisa tumbuh lebih cepat jika syarat dasar terpenuhi",
      "inflasi selalu nol",
      "perdagangan harus ditutup"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q028",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Human capital mencakup...",
    "explanation": "Human capital adalah kualitas manusia sebagai input produksi.",
    "options": [
      "mesin pabrik",
      "pendidikan, keterampilan, dan kesehatan tenaga kerja",
      "cadangan devisa",
      "barang impor"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q029",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Crowding out terjadi ketika...",
    "explanation": "Defisit meningkatkan kebutuhan pinjaman pemerintah dan dapat mengurangi ruang pembiayaan swasta.",
    "options": [
      "defisit pemerintah menekan investasi swasta melalui suku bunga/dana pinjaman",
      "pajak turun selalu menaikkan tabungan publik",
      "ekspor selalu nol",
      "uang tidak digunakan"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q030",
    "kind": "objective",
    "sourceTag": "Pilihan Ganda",
    "prompt": "Pertumbuhan berbeda dari pembangunan karena pembangunan juga menilai...",
    "explanation": "Pembangunan lebih luas daripada pertumbuhan output.",
    "options": [
      "harga saja",
      "kualitas hidup, distribusi, kesehatan, pendidikan, dan lingkungan",
      "jumlah uang kartal saja",
      "pajak impor saja"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q031",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "GDP menghitung barang antara dan barang akhir sekaligus.",
    "explanation": "Salah. GDP hanya menghitung nilai barang/jasa akhir; memasukkan barang antara menyebabkan penghitungan ganda.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q032",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Dalam perekonomian tertutup, tabungan nasional sama dengan investasi (S = I).",
    "explanation": "Benar. Dari Y = C + I + G diperoleh S = Y - C - G = I pada ekonomi tertutup.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q033",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Dalam jangka panjang, kenaikan jumlah uang beredar terutama menaikkan output riil, bukan harga.",
    "explanation": "Salah. Netralitas uang: dalam jangka panjang perubahan jumlah uang memengaruhi tingkat harga, bukan output riil.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q034",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Depresiasi rupiah membuat ekspor Indonesia lebih murah bagi pembeli luar negeri.",
    "explanation": "Benar. Depresiasi menurunkan harga ekspor dalam mata uang asing sehingga lebih kompetitif.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q035",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Comparative advantage ditentukan oleh siapa yang memproduksi dengan input paling sedikit.",
    "explanation": "Salah. Itu absolute advantage. Comparative advantage ditentukan oleh biaya peluang terendah.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q036",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Kurva Phillips jangka panjang menunjukkan trade-off permanen antara inflasi dan pengangguran.",
    "explanation": "Salah. Kurva Phillips jangka panjang tegak di tingkat pengangguran alami; tidak ada trade-off permanen.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q037",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Suku bunga riil kira-kira sama dengan suku bunga nominal dikurangi inflasi.",
    "explanation": "Benar. Persamaan Fisher: r kira-kira i - inflasi.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q038",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Pengangguran struktural terutama disebabkan oleh resesi dan permintaan agregat yang lemah.",
    "explanation": "Salah. Itu pengangguran siklis. Struktural berasal dari ketidaksesuaian keterampilan, lokasi, atau struktur pasar kerja.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q039",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Inflasi yang tidak terduga cenderung merugikan kreditur dan menguntungkan debitur.",
    "explanation": "Benar. Inflasi tak terduga menurunkan nilai riil pembayaran utang, merugikan pemberi pinjaman, menguntungkan peminjam.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q040",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Kurva LRAS bergeser setiap kali tingkat harga berubah.",
    "explanation": "Salah. LRAS ditentukan faktor riil (tenaga kerja, modal, teknologi). Perubahan harga adalah gerakan, bukan pergeseran LRAS.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q041",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Pertumbuhan ekonomi yang benar diukur dari kenaikan GDP nominal.",
    "explanation": "Salah. Pertumbuhan diukur dari GDP riil agar tidak terkecoh oleh kenaikan harga.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q042",
    "kind": "objective",
    "sourceTag": "Benar/Salah",
    "prompt": "Defisit anggaran pemerintah dapat menaikkan suku bunga riil dan menekan investasi swasta (crowding out).",
    "explanation": "Benar. Defisit menurunkan tabungan nasional sehingga penawaran dana pinjaman berkurang, suku bunga riil naik, investasi swasta turun.",
    "options": [
      "Benar",
      "Salah"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q043",
    "kind": "objective",
    "sourceTag": "Hitungan",
    "prompt": "Jika MPC = 0,8, berapa multiplier pengeluaran pemerintah?",
    "explanation": "k = 1/(1 - MPC) = 1/0,2 = 5.",
    "options": [
      "2",
      "4",
      "5",
      "8"
    ],
    "answerIndex": 2
  },
  {
    "id": "PTE-SRC-Q044",
    "kind": "objective",
    "sourceTag": "Hitungan",
    "prompt": "Nominal GDP = 2.000 dan GDP deflator = 125. Berapa real GDP?",
    "explanation": "Real GDP = Nominal/Deflator x 100 = 2.000/125 x 100 = 1.600.",
    "options": [
      "1.600",
      "1.875",
      "2.500",
      "1.250"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q045",
    "kind": "objective",
    "sourceTag": "Hitungan",
    "prompt": "Rasio cadangan wajib 10%. Berapa money multiplier maksimum?",
    "explanation": "Money multiplier = 1/rr = 1/0,1 = 10.",
    "options": [
      "5",
      "10",
      "20",
      "100"
    ],
    "answerIndex": 1
  },
  {
    "id": "PTE-SRC-Q046",
    "kind": "objective",
    "sourceTag": "Hitungan",
    "prompt": "Suku bunga nominal 7% dan inflasi 4%. Berapa perkiraan suku bunga riil?",
    "explanation": "r kira-kira i - inflasi = 7% - 4% = 3%.",
    "options": [
      "3%",
      "11%",
      "4%",
      "1,75%"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q047",
    "kind": "objective",
    "sourceTag": "Hitungan",
    "prompt": "Jika MPC = 0,75, berapa multiplier pajak?",
    "explanation": "Multiplier pajak = -MPC/(1 - MPC) = -0,75/0,25 = -3.",
    "options": [
      "-3",
      "-4",
      "3",
      "-0,75"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q048",
    "kind": "objective",
    "sourceTag": "Hitungan",
    "prompt": "Pengangguran 8 juta dan angkatan kerja 160 juta. Berapa tingkat pengangguran terbuka?",
    "explanation": "TPT = penganggur/angkatan kerja x 100% = 8/160 x 100% = 5%.",
    "options": [
      "5%",
      "8%",
      "12,5%",
      "0,8%"
    ],
    "answerIndex": 0
  },
  {
    "id": "PTE-SRC-Q049",
    "kind": "reveal",
    "sourceTag": "Hitungan",
    "prompt": "Diketahui C = 100 + 0,8Yd, I = 150, G = 200, dan T = 100. Hitung output ekuilibrium (Y).",
    "explanation": "Yd = Y - T = Y - 100, jadi C = 100 + 0,8(Y - 100) = 20 + 0,8Y. AE = C + I + G = 20 + 0,8Y + 150 + 200 = 370 + 0,8Y. Ekuilibrium Y = AE: Y - 0,8Y = 370, 0,2Y = 370, Y = 1.850."
  },
  {
    "id": "PTE-SRC-Q050",
    "kind": "reveal",
    "sourceTag": "Hitungan",
    "prompt": "PDB suatu negara tumbuh 7% per tahun. Dengan Rule of 70, berapa lama PDB menjadi dua kali lipat?",
    "explanation": "Rule of 70: waktu lipat ganda kira-kira 70 dibagi laju pertumbuhan = 70/7 = 10 tahun."
  },
  {
    "id": "PTE-SRC-Q051",
    "kind": "objective",
    "sourceTag": "Grafik",
    "prompt": "Diagram pasar uang berikut. Ketika kurva tegak bergeser ke kanan (penawaran uang bertambah), suku bunga keseimbangan akan...",
    "explanation": "Penawaran uang naik (kurva MS geser kanan) menurunkan suku bunga keseimbangan.",
    "options": [
      "Naik",
      "Turun",
      "Tetap",
      "Tidak dapat ditentukan"
    ],
    "answerIndex": 1,
    "sourceSvg": "<svg data-graph-id=\"PTE-QGRAPH-SRC-51\" viewBox=\"0 0 300 190\" width=\"100%\" style=\"max-width:320px\" xmlns=\"http://www.w3.org/2000/svg\"><title>Grafik sumber soal 51</title><desc>Grafik soal sumber yang masih memerlukan rekonstruksi label dan metadata.</desc><line x1=\"40\" y1=\"165\" x2=\"285\" y2=\"165\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"40\" y1=\"165\" x2=\"40\" y2=\"15\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"150\" y1=\"30\" x2=\"150\" y2=\"165\" stroke=\"#22d3a0\" stroke-width=\"2.2\"/><line x1=\"205\" y1=\"30\" x2=\"205\" y2=\"165\" stroke=\"#f4516c\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/><line x1=\"65\" y1=\"45\" x2=\"265\" y2=\"150\" stroke=\"#4f9cf9\" stroke-width=\"2.2\"/></svg>",
    "needsGraphReconstruction": true
  },
  {
    "id": "PTE-SRC-Q052",
    "kind": "objective",
    "sourceTag": "Grafik",
    "prompt": "Pada diagram AS-AD berikut, kurva yang berbentuk vertikal (garis tegak) melambangkan...",
    "explanation": "Kurva vertikal adalah LRAS, output potensial yang ditentukan faktor riil dan tidak tergantung tingkat harga.",
    "options": [
      "Permintaan agregat (AD)",
      "Penawaran agregat jangka pendek (SRAS)",
      "Penawaran agregat jangka panjang (LRAS)",
      "Kurva Phillips"
    ],
    "answerIndex": 2,
    "sourceSvg": "<svg data-graph-id=\"PTE-QGRAPH-SRC-52\" viewBox=\"0 0 300 190\" width=\"100%\" style=\"max-width:320px\" xmlns=\"http://www.w3.org/2000/svg\"><title>Grafik sumber soal 52</title><desc>Grafik soal sumber yang masih memerlukan rekonstruksi label dan metadata.</desc><line x1=\"40\" y1=\"165\" x2=\"285\" y2=\"165\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"40\" y1=\"165\" x2=\"40\" y2=\"15\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"150\" y1=\"28\" x2=\"150\" y2=\"165\" stroke=\"#f9a825\" stroke-width=\"2.2\"/><line x1=\"70\" y1=\"150\" x2=\"240\" y2=\"45\" stroke=\"#22d3a0\" stroke-width=\"2.2\"/><line x1=\"70\" y1=\"55\" x2=\"240\" y2=\"150\" stroke=\"#4f9cf9\" stroke-width=\"2.2\"/></svg>",
    "needsGraphReconstruction": true
  },
  {
    "id": "PTE-SRC-Q053",
    "kind": "objective",
    "sourceTag": "Grafik",
    "prompt": "Diagram kurva Phillips berikut. Garis yang menurun melambangkan...",
    "explanation": "Garis menurun adalah kurva Phillips jangka pendek: trade-off antara inflasi dan pengangguran.",
    "options": [
      "Kurva Phillips jangka panjang",
      "Kurva Phillips jangka pendek",
      "Permintaan agregat",
      "Fungsi produksi"
    ],
    "answerIndex": 1,
    "sourceSvg": "<svg data-graph-id=\"PTE-QGRAPH-SRC-53\" viewBox=\"0 0 300 190\" width=\"100%\" style=\"max-width:320px\" xmlns=\"http://www.w3.org/2000/svg\"><title>Grafik sumber soal 53</title><desc>Grafik soal sumber yang masih memerlukan rekonstruksi label dan metadata.</desc><line x1=\"40\" y1=\"165\" x2=\"285\" y2=\"165\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"40\" y1=\"165\" x2=\"40\" y2=\"15\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"145\" y1=\"28\" x2=\"145\" y2=\"165\" stroke=\"#f9a825\" stroke-width=\"2.2\"/><line x1=\"60\" y1=\"45\" x2=\"245\" y2=\"150\" stroke=\"#4f9cf9\" stroke-width=\"2.2\"/></svg>",
    "needsGraphReconstruction": true
  },
  {
    "id": "PTE-SRC-Q054",
    "kind": "objective",
    "sourceTag": "Grafik",
    "prompt": "Diagram pasar dana pinjaman berikut. Jika kurva penawaran dana bergeser ke kiri (misalnya akibat defisit pemerintah), suku bunga riil keseimbangan akan...",
    "explanation": "Penawaran dana berkurang (geser kiri) menaikkan suku bunga riil keseimbangan; inilah crowding out.",
    "options": [
      "Turun",
      "Naik",
      "Tetap",
      "Menjadi nol"
    ],
    "answerIndex": 1,
    "sourceSvg": "<svg data-graph-id=\"PTE-QGRAPH-SRC-54\" viewBox=\"0 0 300 190\" width=\"100%\" style=\"max-width:320px\" xmlns=\"http://www.w3.org/2000/svg\"><title>Grafik sumber soal 54</title><desc>Grafik soal sumber yang masih memerlukan rekonstruksi label dan metadata.</desc><line x1=\"40\" y1=\"165\" x2=\"285\" y2=\"165\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"40\" y1=\"165\" x2=\"40\" y2=\"15\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"60\" y1=\"50\" x2=\"250\" y2=\"150\" stroke=\"#4f9cf9\" stroke-width=\"2.2\"/><line x1=\"80\" y1=\"150\" x2=\"250\" y2=\"50\" stroke=\"#22d3a0\" stroke-width=\"2.2\"/><line x1=\"48\" y1=\"150\" x2=\"218\" y2=\"50\" stroke=\"#f4516c\" stroke-width=\"2\" stroke-dasharray=\"5,4\"/></svg>",
    "needsGraphReconstruction": true
  },
  {
    "id": "PTE-SRC-Q055",
    "kind": "objective",
    "sourceTag": "Grafik",
    "prompt": "Pada diagram Keynesian cross berikut, output ekuilibrium ditentukan pada...",
    "explanation": "Ekuilibrium berada pada perpotongan garis pengeluaran agregat dengan garis 45 derajat, tempat Y = AE.",
    "options": [
      "Sembarang titik pada garis pengeluaran agregat",
      "Perpotongan garis pengeluaran agregat dengan garis 45 derajat",
      "Titik potong dengan sumbu tegak",
      "Titik tertinggi kurva"
    ],
    "answerIndex": 1,
    "sourceSvg": "<svg data-graph-id=\"PTE-QGRAPH-SRC-55\" viewBox=\"0 0 300 190\" width=\"100%\" style=\"max-width:320px\" xmlns=\"http://www.w3.org/2000/svg\"><title>Grafik sumber soal 55</title><desc>Grafik soal sumber yang masih memerlukan rekonstruksi label dan metadata.</desc><line x1=\"40\" y1=\"165\" x2=\"285\" y2=\"165\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"40\" y1=\"165\" x2=\"40\" y2=\"15\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"40\" y1=\"165\" x2=\"195\" y2=\"15\" stroke=\"#9aa4b7\" stroke-width=\"1.4\"/><line x1=\"40\" y1=\"120\" x2=\"255\" y2=\"50\" stroke=\"#4f9cf9\" stroke-width=\"2.2\"/></svg>",
    "needsGraphReconstruction": true
  },
  {
    "id": "PTE-SRC-Q056",
    "kind": "objective",
    "sourceTag": "Grafik",
    "prompt": "Kurva pada diagram fungsi produksi berikut makin landai saat modal bertambah. Ini menunjukkan...",
    "explanation": "Kemiringan yang makin landai menunjukkan diminishing returns terhadap modal.",
    "options": [
      "Increasing returns",
      "Diminishing returns terhadap modal",
      "Skala hasil konstan",
      "Tidak ada hubungan modal dengan output"
    ],
    "answerIndex": 1,
    "sourceSvg": "<svg data-graph-id=\"PTE-QGRAPH-SRC-56\" viewBox=\"0 0 300 190\" width=\"100%\" style=\"max-width:320px\" xmlns=\"http://www.w3.org/2000/svg\"><title>Grafik sumber soal 56</title><desc>Grafik soal sumber yang masih memerlukan rekonstruksi label dan metadata.</desc><line x1=\"40\" y1=\"165\" x2=\"285\" y2=\"165\" stroke=\"#657084\" stroke-width=\"1.1\"/><line x1=\"40\" y1=\"165\" x2=\"40\" y2=\"15\" stroke=\"#657084\" stroke-width=\"1.1\"/><path d=\"M 50 155 Q 130 60 270 45\" fill=\"none\" stroke=\"#4f9cf9\" stroke-width=\"2.4\"/></svg>",
    "needsGraphReconstruction": true
  },
  {
    "id": "PTE-SRC-Q057",
    "kind": "reveal",
    "sourceTag": "Esai",
    "prompt": "Jelaskan perbedaan absolute advantage dan comparative advantage, serta mengapa dasar perdagangan adalah comparative advantage.",
    "explanation": "Absolute advantage: mampu memproduksi dengan input lebih sedikit. Comparative advantage: mampu memproduksi dengan biaya peluang lebih rendah. Perdagangan menguntungkan bila tiap pihak berspesialisasi pada barang dengan biaya peluang terendah, bahkan jika satu negara unggul mutlak di semua barang, karena spesialisasi menaikkan total output dan kesejahteraan kedua pihak."
  },
  {
    "id": "PTE-SRC-Q058",
    "kind": "reveal",
    "sourceTag": "Esai",
    "prompt": "Jelaskan mekanisme crowding out akibat defisit anggaran lewat pasar dana pinjaman.",
    "explanation": "Defisit membuat tabungan publik negatif sehingga tabungan nasional (penawaran dana) turun. Kurva penawaran dana bergeser ke kiri, suku bunga riil naik, dan investasi swasta yang sensitif terhadap bunga berkurang. Investasi yang terdesak keluar inilah crowding out."
  },
  {
    "id": "PTE-SRC-Q059",
    "kind": "reveal",
    "sourceTag": "Esai",
    "prompt": "Bedakan inflasi demand-pull dan cost-push, serta dampaknya terhadap output dalam kerangka AS-AD.",
    "explanation": "Demand-pull: AD bergeser ke kanan sehingga harga dan output naik (ekonomi memanas). Cost-push: SRAS bergeser ke kiri karena biaya produksi naik, sehingga harga naik tetapi output turun (stagflasi). Demand-pull lebih mudah diredam dengan kebijakan kontraktif, sedangkan cost-push menimbulkan dilema karena menekan inflasi dapat memperdalam penurunan output."
  },
  {
    "id": "PTE-SRC-Q060",
    "kind": "reveal",
    "sourceTag": "Esai",
    "prompt": "Mengapa kurva Phillips jangka panjang berbentuk vertikal? Kaitkan dengan ekspektasi inflasi.",
    "explanation": "Dalam jangka panjang, ekspektasi inflasi menyesuaikan dengan inflasi aktual sehingga trade-off jangka pendek hilang. Pengangguran kembali ke tingkat alaminya berapa pun tingkat inflasinya, sehingga kurva tegak di pengangguran alami. Hanya inflasi yang tidak terduga yang dapat menggeser pengangguran untuk sementara."
  },
  {
    "id": "PTE-SRC-Q061",
    "kind": "reveal",
    "sourceTag": "Esai",
    "prompt": "Jelaskan teori liquidity preference dan bagaimana bank sentral memengaruhi suku bunga jangka pendek.",
    "explanation": "Suku bunga ditentukan oleh keseimbangan permintaan dan penawaran uang. Penawaran uang (MS) ditetapkan bank sentral sehingga kurvanya tegak; permintaan uang (MD) menurun terhadap suku bunga. Bila bank sentral menambah uang, MS bergeser ke kanan dan suku bunga turun, mendorong investasi dan konsumsi sehingga AD naik. Untuk menahan inflasi, bank sentral menyerap likuiditas agar suku bunga naik."
  },
  {
    "id": "PTE-SRC-Q062",
    "kind": "reveal",
    "sourceTag": "Esai",
    "prompt": "Apa beda pertumbuhan ekonomi dan pembangunan ekonomi, dan apa keterbatasan GDP sebagai ukuran kesejahteraan?",
    "explanation": "Pertumbuhan ekonomi adalah kenaikan output riil (GDP riil). Pembangunan lebih luas: mencakup distribusi pendapatan, kesehatan, pendidikan, lingkungan, dan kualitas hidup. GDP tidak menangkap ketimpangan, kegiatan non-pasar, kerusakan lingkungan, maupun kualitas hidup, sehingga GDP tinggi belum tentu berarti kesejahteraan tinggi."
  },
  {
    "id": "PTE-SRC-Q063",
    "kind": "reveal",
    "sourceTag": "Esai",
    "prompt": "Pada 9 Juni 2026 Bank Indonesia menaikkan BI-Rate menjadi 5,50% ketika inflasi Mei tercatat 3,08% dan rupiah melemah. Gunakan snapshot tanggal tersebut untuk menjelaskan logika kebijakan melalui pasar uang dan pendekatan Fisher.",
    "explanation": "Untuk snapshot 9 Juni, kebijakan pengetatan dapat digambarkan sebagai penurunan penawaran uang relatif terhadap permintaan sehingga suku bunga naik. Pendekatan ex-post sederhana memberi 5,50% - 3,08% = 2,42%, sehingga imbal hasil riil rupiah tetap positif dan daya tarik aset rupiah menguat. Ini bukan persamaan Fisher forward-looking yang lengkap karena Fisher memakai inflasi ekspektasian. Setelah tanggal soal tersebut, BI kembali menaikkan BI-Rate menjadi 5,75% pada 18 Juni 2026."
  },
  {
    "id": "PTE-SRC-Q064",
    "kind": "reveal",
    "sourceTag": "Esai",
    "prompt": "Gunakan persamaan kuantitas (MV = PY) untuk menjelaskan hubungan pertumbuhan jumlah uang dan inflasi dalam jangka panjang.",
    "explanation": "Dari MV = PY, jika velositas (V) relatif stabil dan output riil (Y) tumbuh sesuai kapasitas, maka pertumbuhan jumlah uang (M) yang melebihi pertumbuhan output akan menaikkan tingkat harga (P). Maka inflasi jangka panjang kira-kira sama dengan pertumbuhan uang dikurangi pertumbuhan output (inflasi kira-kira gM - gY)."
  }
];
