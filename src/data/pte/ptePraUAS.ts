// =============================================================
// PTE Pra-UAS TM 8-14 — normalized source data (Batch 2)
// Canonical academic source: PTE_Pra-UAS_Materi (1).md
// Visual companion: pte-pra-uas-merge-ready (2).html
// No source CSS/JavaScript/inline event handler is executed here.
// =============================================================
import type { ContentBlock, Reading } from '../../types';

export const PTE_PRA_UAS_SOURCE_META = {
  "courseCode": "EKT109",
  "scope": "Pra-UAS TM 8-14",
  "canonicalSource": "PTE_Pra-UAS_Materi (1).md",
  "visualSource": "pte-pra-uas-merge-ready (2).html",
  "normalizedAt": "2026-06-19",
  "sourcePolicy": "Markdown is canonical for academic substance; HTML is used only as a visual and interaction reference."
} as const;

const tm8: Reading = {
  "tm": 8,
  "title": "Pendapatan Nasional",
  "ref": "Kontrak: 1(19) · Substansi: Samuelson Ch.19–20; Mankiw Ch.23–24",
  "intro": "Mengukur aktivitas ekonomi agregat melalui GDP/PDB dan ukuran turunannya, lalu menelusuri hubungan produksi, pendapatan, pengeluaran, harga, dan kesejahteraan.",
  "objectives": [
    "Membedakan GDP, GNP/GNI, NDP, NI, PI, dan disposable income.",
    "Menghitung pendapatan nasional melalui pendekatan produksi, pendapatan, dan pengeluaran.",
    "Membedakan GDP nominal, GDP riil, GDP deflator, dan CPI.",
    "Menganalisis shock pada C, I, G, X, dan M melalui alur sebab-akibat."
  ],
  "blocks": [
    {
      "kind": "callout",
      "variant": "info",
      "title": "Materi Terstandardisasi",
      "text": "Materi Pra-UAS ini telah dinormalisasi dan disesuaikan dengan pedoman kurikulum terbaru, mencakup aspek akademik komprehensif serta struktur visual yang interaktif."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Snapshot Data Kontekstual",
      "text": "Angka ekonomi Indonesia 2025–2026 ditampilkan sebagai snapshot historis bertanggal. Setiap kotak data mempertahankan periode dan sumber resminya agar konteks akademik tidak berubah ketika data terbaru diterbitkan."
    },
    {
      "kind": "h2",
      "text": "Inti Makro & Pendapatan Nasional"
    },
    {
      "kind": "p",
      "text": "Pendapatan nasional adalah pintu masuk utama ke makroekonomi karena ia menjawab pertanyaan paling dasar: seberapa besar aktivitas ekonomi suatu negara dalam satu periode tertentu. Dalam makroekonomi, perhatian tidak lagi berada pada satu konsumen atau satu perusahaan, melainkan pada agregat seperti output total, tingkat harga umum, pengangguran, konsumsi nasional, investasi nasional, tabungan nasional, pengeluaran pemerintah, ekspor-impor, dan pertumbuhan jangka panjang."
    },
    {
      "kind": "illustration",
      "type": "circular-flow",
      "caption": "Aliran luar (kuning) menunjukkan arus uang: rumah tangga belanja → perusahaan terima pendapatan → perusahaan bayar faktor produksi → rumah tangga terima penghasilan. Aliran dalam (biru) menunjukkan arus barang dan faktor produksi yang bergerak berlawanan arah."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Makroekonomi",
      "text": "mempelajari perilaku perekonomian secara keseluruhan. Ukuran kuncinya meliputi output nasional, kesempatan kerja, inflasi, pertumbuhan ekonomi, dan hubungan ekonomi internasional."
    },
    {
      "kind": "ul",
      "items": [
        "**Tujuan Makro:** Output tinggi dan tumbuh, pengangguran rendah, inflasi stabil, neraca eksternal sehat, serta distribusi hasil pembangunan yang lebih layak.",
        "**Instrumen Makro:** Kebijakan fiskal, kebijakan moneter, kebijakan perdagangan, kebijakan nilai tukar, dan kebijakan sisi penawaran.",
        "**Logika Dasar:** Produksi menciptakan pendapatan, pendapatan membiayai pengeluaran, dan pengeluaran menjadi permintaan terhadap produksi."
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Identitas inti",
      "text": "nilai produksi agregat = pendapatan agregat = pengeluaran agregat. Perbedaannya biasanya muncul karena cara pencatatan, bukan karena konsep ekonominya berbeda."
    },
    {
      "kind": "h2",
      "text": "GDP, GNP, NDP, NI, PI, dan DI"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Gross Domestic Product (GDP/PDB)",
      "text": "**GDP** adalah nilai pasar seluruh barang dan jasa akhir yang diproduksi di dalam wilayah suatu negara selama periode tertentu."
    },
    {
      "kind": "ul",
      "items": [
        "**Market Value:** Dinilai menggunakan harga pasar saat ini.",
        "**Of All:** Mencakup semua barang/jasa yang diproduksi dan dijual legal di pasar (mengabaikan barang ilegal atau yang diproduksi untuk konsumsi sendiri).",
        "**Final:** Hanya barang akhir, bukan barang antara (menghindari double counting).",
        "**Goods and Services:** Mencakup barang berwujud (makanan, baju) dan jasa tak berwujud (potong rambut, kunjungan dokter).",
        "**Produced:** Hanya barang yang diproduksi pada periode berjalan, bukan transaksi barang bekas.",
        "**Within a Country:** Mengukur produksi di dalam batas geografis suatu negara, terlepas dari kewarganegaraan produsennya.",
        "**In a Given Period of Time:** Biasanya diukur per tahun atau per kuartal."
      ]
    },
    {
      "kind": "table",
      "caption": "Perbandingan Konsep PDB (GDP) dan PNB (GNP)",
      "headers": ["Konsep", "Definisi", "Contoh & Analogi"],
      "rows": [
        [
          "GDP/PDB",
          "Produksi berdasarkan wilayah domestik, siapa pun pemilik faktor produksinya.",
          "Perusahaan asing yang produksi di Indonesia masuk PDB Indonesia.\n💡 **Analogi:** Seperti menghitung semua kue yang dipanggang di 'Dapur Indonesia', tak peduli siapa chef-nya (orang lokal atau asing)."
        ],
        [
          "GNP/PNB atau GNI",
          "Produksi/pendapatan berdasarkan kewarganegaraan atau kepemilikan faktor produksi.",
          "Pendapatan WNI dari luar negeri masuk GNP Indonesia, bukan PDB Indonesia.\n💡 **Analogi:** Seperti menghitung kue yang dipanggang oleh 'Chef Indonesia', tak peduli dia manggangnya di Dapur Indonesia atau Dapur Luar Negeri."
        ],
        [
          "NNP",
          "GNP dikurangi penyusutan (depresiasi).",
          "Mengukur produksi bersih setelah mengganti mesin yang rusak."
        ]
      ]
    },
    {
      "kind": "table",
      "headers": [
        "Konsep",
        "Makna",
        "Hal yang sering ditanyakan"
      ],
      "rows": [
        [
          "NDP/PDB Neto",
          "GDP dikurangi depresiasi/penyusutan modal.",
          "Lebih dekat dengan tambahan output bersih setelah modal aus."
        ],
        [
          "National Income (NI)",
          "Pendapatan yang diterima faktor produksi: upah, sewa, bunga, laba.",
          "Fokus pada sisi pendapatan faktor produksi."
        ],
        [
          "Personal Income (PI)",
          "Pendapatan yang benar-benar diterima rumah tangga sebelum pajak personal.",
          "Tidak sama dengan NI karena ada laba ditahan, pajak perusahaan, transfer, dan kontribusi jaminan sosial."
        ],
        [
          "Disposable Income (DI)",
          "Pendapatan siap pakai setelah pajak personal.",
          "DI = konsumsi + tabungan rumah tangga."
        ]
      ]
    },
    {
      "kind": "illustration",
      "type": "gdp-waterfall",
      "caption": "Setiap langkah mengurangi satu komponen dari GDP hingga menjadi pendapatan yang benar-benar bisa dibelanjakan rumah tangga (Disposable Income). DI hanya punya dua tujuan: dikonsumsi (C) atau ditabung (S)."
    },
    {
      "kind": "chart-guide",
      "title": "Panduan Membaca Diagram GDP ke DI",
      "points": [
        "**Gross National Product (GNP):** Ditambahkan dulu pendapatan faktor WNI dari luar negeri, dan dikurangi pendapatan faktor WNA di dalam negeri.",
        "**Net National Product (NNP):** Dari GNP dikurangi **Penyusutan (Depresiasi)** mesin/modal.",
        "**National Income (NI):** Dari NNP dikurangi **Pajak Tidak Langsung** (contoh: PPN).",
        "**Personal Income (PI):** Dari NI dikurangi laba ditahan, pajak perusahaan, iuran jaminan sosial, dan ditambah **Transfer Payment**.",
        "**Disposable Income (DI):** Dari PI dikurangi **Pajak Langsung** (contoh: PPh). Ini adalah uang tunai murni yang siap dibelanjakan atau ditabung."
      ]
    },
    {
      "kind": "h2",
      "text": "3 Pendekatan Perhitungan Pendapatan Nasional"
    },
    {
      "kind": "p",
      "text": "Dalam ujian, kesalahan paling umum adalah mencampur barang antara, barang akhir, transfer payment, dan transaksi finansial. GDP hanya menghitung produksi barang/jasa akhir yang baru diproduksi pada periode berjalan."
    },
    {
      "kind": "ul",
      "items": [
        "**1. Pendekatan Produksi (Value Added):** Menjumlahkan nilai tambah pada setiap tahap produksi untuk menghindari penghitungan ganda (double counting). Nilai tambah = Penjualan − Biaya bahan baku/input antara.",
        "**2. Pendekatan Pendapatan:** Menjumlahkan seluruh pendapatan: Wages/Salaries (upah), Interest (bunga), Rent (sewa), Laba Perusahaan, Pendapatan Usaha Bukan Badan Hukum, Pajak Bisnis Tak Langsung, dan Depresiasi.",
        "**3. Pendekatan Pengeluaran:** Menjumlahkan pengeluaran akhir (C + I + G + NX)."
      ]
    },
    {
      "kind": "table",
      "caption": "Contoh Perhitungan Nilai Tambah (Menghindari Double Counting) - Tahapan Produksi Roti",
      "headers": [
        "Tahap Produksi",
        "Nilai Penjualan",
        "Biaya Input Antara",
        "Nilai Tambah"
      ],
      "rows": [
        [
          "Gandum (Wheat)",
          "23",
          "0",
          "23"
        ],
        [
          "Tepung (Flour)",
          "53",
          "23",
          "30"
        ],
        [
          "Adonan (Dough)",
          "110",
          "53",
          "57"
        ],
        [
          "Roti (Final Product)",
          "190",
          "110",
          "80"
        ],
        [
          "**Total**",
          "**376**",
          "**186**",
          "**190**"
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Double Counting",
      "text": "Jika kita menjumlahkan semua penjualan (376), kita menghitung barang berulang kali. GDP hanya mencatat **nilai penjualan produk akhir** (190), yang secara matematis selalu sama dengan **total seluruh nilai tambah** (190)."
    },
    {
      "kind": "formula",
      "text": "Identitas Pengeluaran Nasional\n\nY = C + I + G + NX\n\nNX = X − M\n\nDalam perekonomian tertutup: NX = 0, sehingga Y = C + I + G"
    },
    {
      "kind": "table",
      "headers": [
        "Komponen",
        "Isi",
        "Bukan termasuk"
      ],
      "rows": [
        [
          "C\n(Konsumsi)",
          "Belanja konsumsi rumah tangga atas barang tahan lama, tidak tahan lama, dan jasa.",
          "Pembelian rumah baru, karena masuk investasi residensial.\n💡 **Analogi:** Seperti kamu beli sembako, jajan boba, atau bayar langganan Netflix. Uang keluar dari dompetmu untuk dinikmati langsung."
        ],
        [
          "I\n(Investasi)",
          "Investasi bisnis, perubahan persediaan, pembelian rumah baru.",
          "Pembelian saham lama; itu pertukaran aset finansial.\n💡 **Analogi:** Seperti pengusaha pabrik beli mesin jahit baru untuk nambah produksi baju, atau kamu ngebangun rumah baru. Ini uang keluar untuk bikin 'mesin pencetak uang' masa depan."
        ],
        [
          "G\n(Pengeluaran Pemerintah)",
          "Belanja pemerintah atas barang/jasa final.",
          "Transfer seperti bantuan sosial, karena tidak membeli output baru secara langsung.\n💡 **Analogi:** Seperti Pemkot bayar gaji guru, beli aspal untuk jalan raya, atau bangun rumah sakit."
        ],
        [
          "NX\n(Ekspor Neto)",
          "Ekspor dikurangi impor.",
          "Impor dikurangkan karena sudah masuk C/I/G tetapi diproduksi luar negeri.\n💡 **Analogi:** 'Kue' yang kita jual ke luar negeri dikurangi 'kue' yang kita beli dari luar negeri. Kalau positif, kita menang dagang."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Logika Interaktif Y = C + I + G + (X − M)"
    },
    {
      "kind": "p",
      "text": "Bagian ini penting untuk menjawab soal analisis. Identitas **Y = C + I + G + (X − M)** bukan sekadar rumus hafalan, tetapi peta hubungan antarbagian ekonomi. Ketika satu komponen berubah, dampaknya dapat menyebar ke komponen lain melalui pendapatan, ekspektasi, suku bunga, nilai tukar, inflasi, pajak, dan kebijakan pemerintah. Titik kritisnya: perubahan satu komponen tidak selalu otomatis membuat semua komponen lain berubah ke arah yang sama. Harus dilihat saluran transmisinya."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Prinsip ujian",
      "text": "bedakan efek langsung dan efek lanjutan. Jika X turun, yang turun langsung adalah ekspor dan NX, bukan C. C biasanya turun setelah pendapatan pekerja/perusahaan eksportir menurun. I bisa turun lebih cepat daripada C jika dunia usaha langsung merevisi ekspektasi permintaan."
    },
    {
      "kind": "formula",
      "text": "Identitas dan Alur Inti\n\nY = C + I + G + (X − M)\n\nJika C/I/G/X naik → AE naik → Y naik, selama kapasitas belum penuh.\n\nJika M naik → NX turun → kebocoran permintaan ke luar negeri naik → Y domestik cenderung turun.\n\nEfek total = efek langsung + multiplier + respons kebijakan + respons nilai tukar."
    },
    {
      "kind": "h3",
      "text": "Penggerak utama tiap komponen"
    },
    {
      "kind": "table",
      "headers": [
        "Komponen",
        "Naik jika...",
        "Turun jika...",
        "Catatan logika"
      ],
      "rows": [
        [
          "C\nConsumption",
          "Pendapatan disposabel naik, keyakinan konsumen membaik, bunga kredit turun, inflasi terkendali.",
          "Pendapatan riil turun, PHK naik, inflasi naik, cicilan/kredit mahal, ekspektasi krisis.",
          "C relatif besar dan stabil, tetapi sensitif terhadap pendapatan riil serta ekspektasi rumah tangga."
        ],
        [
          "I\nInvestment",
          "Ekspektasi permintaan naik, suku bunga turun, kapasitas produksi hampir penuh, kredit lancar, stabilitas membaik.",
          "Suku bunga naik, permintaan melemah, ketidakpastian naik, kurs melemah menaikkan biaya mesin/input impor.",
          "I biasanya paling volatil. Dalam krisis, I sering turun lebih cepat karena pengusaha menunda ekspansi."
        ],
        [
          "G\nGovernment spending",
          "Pemerintah melakukan stimulus, belanja infrastruktur naik, transfer atau belanja barang/jasa diperbesar.",
          "Konsolidasi fiskal, pemotongan anggaran, disiplin defisit, penerimaan negara melemah.",
          "G sering menjadi penstabil karena dapat dinaikkan saat C/I/X melemah. Pajak dan bantuan sosial juga bekerja sebagai automatic stabilizer."
        ],
        [
          "X\nExports",
          "Pendapatan luar negeri naik, kurs domestik melemah secara riil, harga komoditas ekspor naik, daya saing membaik.",
          "Resesi global, permintaan negara mitra turun, kurs domestik menguat secara riil, hambatan dagang naik.",
          "X bergantung pada kondisi luar negeri. Negara kecil dan terbuka rentan jika mitra dagang utama melemah."
        ],
        [
          "M\nImports",
          "Pendapatan domestik naik, C dan I naik, kurs domestik menguat, barang impor relatif murah.",
          "Pendapatan domestik turun, kurs domestik melemah, pembatasan impor, substitusi domestik meningkat.",
          "M bukan selalu buruk. Impor barang modal bisa memperkuat kapasitas produksi, tetapi dalam identitas GDP ia dikurangkan karena bukan output domestik."
        ]
      ]
    },
    {
      "kind": "h3",
      "text": "Logika shock yang sering keluar di ujian"
    },
    {
      "kind": "table",
      "headers": [
        "Skenario",
        "Yang bergerak pertama",
        "Rantai dampak yang masuk akal",
        "Penstabil/penyeimbang"
      ],
      "rows": [
        [
          "Ekspor turun karena krisis global",
          "X turun → NX turun → AE/Y turun.",
          "Perusahaan eksportir kehilangan penjualan → laba dan produksi turun → I sektor terkait turun karena ekspektasi permintaan melemah → tenaga kerja/jam kerja turun → pendapatan rumah tangga turun → C turun. Karena Y turun, M juga bisa turun sehingga sebagian penurunan NX tertahan.",
          "Depresiasi kurs dapat membantu ekspor menjadi lebih kompetitif, tetapi efeknya tidak instan. Pemerintah dapat menaikkan G, memberi insentif sektor terdampak, atau mencari pasar ekspor baru. Bank sentral dapat melonggarkan moneter jika inflasi terkendali."
        ],
        [
          "Rupiah melemah terhadap USD",
          "Harga impor naik; beban utang/input USD naik; daya saing ekspor bisa membaik.",
          "M cenderung turun karena impor mahal, tetapi biaya produksi naik jika industri memakai input impor. Inflasi impor menekan daya beli sehingga C riil bisa turun. I bisa turun jika mesin, bahan baku, dan utang valas menjadi mahal. X bisa naik jika permintaan luar negeri elastis dan perusahaan mampu menambah produksi.",
          "Bank sentral dapat menaikkan suku bunga, intervensi valas, atau menjaga ekspektasi inflasi. Pemerintah dapat menjaga pasokan bahan pokok, memberi dukungan terbatas untuk sektor strategis, dan mendorong substitusi impor. Dampak ke NX tidak pasti dalam jangka pendek karena ada kemungkinan J-curve."
        ],
        [
          "Konsumsi rumah tangga naik",
          "C naik → AE/Y naik.",
          "Penjualan perusahaan naik → persediaan turun → produksi dinaikkan → tenaga kerja dan pendapatan naik → C bisa naik lagi melalui multiplier. I dapat ikut naik jika perusahaan melihat permintaan akan bertahan. M juga cenderung naik karena sebagian konsumsi memakai barang impor. Jika kapasitas penuh, inflasi bisa naik.",
          "Pajak otomatis naik ketika pendapatan naik sehingga menahan overheating. Bank sentral bisa menaikkan suku bunga jika kenaikan C menekan inflasi. Peningkatan produksi domestik dapat menahan kenaikan impor."
        ],
        [
          "Investasi turun karena suku bunga naik",
          "I turun → AE/Y turun.",
          "Proyek ekspansi ditunda → permintaan mesin, konstruksi, dan tenaga kerja turun → pendapatan turun → C turun. M barang modal juga turun. Dalam jangka panjang, kapasitas produksi masa depan bisa ikut melemah jika penurunan I berlangsung lama.",
          "Jika tujuan kenaikan bunga adalah menurunkan inflasi, stabilisasi harga dapat memulihkan kepercayaan. Pemerintah dapat mengarahkan G ke proyek produktif, tetapi harus hati-hati terhadap defisit dan crowding out."
        ],
        [
          "Belanja pemerintah naik",
          "G naik → AE/Y naik.",
          "Pendapatan kontraktor/pekerja/pemasok naik → C naik. I bisa naik jika dunia usaha melihat permintaan meningkat atau kapasitas mulai penuh. M dapat naik karena sebagian belanja dan konsumsi tambahan memakai impor. Jika ekonomi sudah dekat kapasitas penuh, inflasi dan suku bunga bisa naik.",
          "Automatic stabilizer, desain belanja produktif, dan koordinasi fiskal-moneter. G lebih efektif jika diarahkan ke sektor dengan multiplier tinggi dan kebocoran impor rendah."
        ],
        [
          "Impor naik",
          "M naik → NX turun secara akuntansi.",
          "Jika impor naik karena C barang impor meningkat, permintaan bocor ke luar negeri dan output domestik bisa tertekan. Jika impor naik karena barang modal untuk investasi produktif, efek jangka pendek NX turun, tetapi I dan kapasitas produksi masa depan bisa naik.",
          "Substitusi impor yang efisien, peningkatan produktivitas domestik, dan kebijakan industri yang tidak sekadar proteksionis. Jangan langsung menyimpulkan impor naik pasti buruk."
        ],
        [
          "Krisis kepercayaan/financial shock",
          "I turun lebih dulu; C barang tahan lama juga turun.",
          "Ketidakpastian membuat perusahaan menahan investasi dan rumah tangga menunda konsumsi besar. Kredit mengetat → I turun → produksi turun → PHK naik → C turun. Jika modal asing keluar, kurs melemah dan inflasi impor dapat memperburuk daya beli.",
          "Penjaminan likuiditas, penurunan suku bunga jika memungkinkan, stimulus fiskal terarah, perlindungan sosial, dan komunikasi kebijakan untuk memulihkan ekspektasi."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Urutan jawaban yang aman",
      "text": "mulai dari komponen yang terkena shock langsung, lalu jelaskan dampaknya ke AE/Y, pendapatan, C, I, M, inflasi, kurs, dan respons kebijakan. Jangan menjawab “semua turun” atau “semua naik” tanpa mekanisme."
    },
    {
      "kind": "h3",
      "text": "Mini-peta timbal balik"
    },
    {
      "kind": "p",
      "text": "X↓  permintaan luar turun  →  NX↓ & Y↓  efek langsung  →  Profit/kerja↓  pendapatan turun  →  C↓ dan I↓  efek lanjutan  →  M↓ / G↑  penahan sebagian"
    },
    {
      "kind": "figure",
      "title": "Shock Ekspor Turun",
      "svg": "<svg data-graph-id=\"PTE-FLOW-02\" viewBox=\"0 0 920 190\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Shock ekspor turun</title><desc>Ekspor X turun menuju NX dan AE turun menuju Produksi dan laba turun menuju Pendapatan, C, dan I turun menuju M turun atau G naik menahan efek</desc><defs><marker id=\"arrow-PTE-FLOW-02\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"#94a3b8\"/></marker></defs><rect x=\"31.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"106.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"106.0\" dy=\"0\">Ekspor X turun</tspan></text><line x1=\"185.0\" y1=\"97.0\" x2=\"203.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-02)\"/><rect x=\"208.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"283.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"283.0\" dy=\"0\">NX dan AE turun</tspan></text><line x1=\"362.0\" y1=\"97.0\" x2=\"380.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-02)\"/><rect x=\"385.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"460.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"460.0\" dy=\"0\">Produksi dan laba</tspan><tspan x=\"460.0\" dy=\"18\">turun</tspan></text><line x1=\"539.0\" y1=\"97.0\" x2=\"557.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-02)\"/><rect x=\"562.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"637.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"637.0\" dy=\"0\">Pendapatan, C, dan I</tspan><tspan x=\"637.0\" dy=\"18\">turun</tspan></text><line x1=\"716.0\" y1=\"97.0\" x2=\"734.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-02)\"/><rect x=\"739.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"814.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"814.0\" dy=\"0\">M turun atau G naik</tspan><tspan x=\"814.0\" dy=\"18\">menahan efek</tspan></text></svg>",
      "caption": "Efek langsung terjadi pada X dan NX. Konsumsi serta investasi turun melalui pendapatan dan ekspektasi, bukan secara otomatis pada saat yang sama.",
      "altText": "Diagram alur ekspor turun menuju ekspor neto dan pengeluaran agregat turun, lalu produksi, laba, pendapatan, konsumsi, dan investasi turun; penurunan impor atau kenaikan belanja pemerintah dapat menahan sebagian dampak."
    },
    {
      "kind": "figure",
      "title": "Depresiasi Rupiah: Dua Saluran yang Berlawanan",
      "svg": "<svg data-graph-id=\"PTE-FLOW-03\" viewBox=\"0 0 920 235\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Depresiasi rupiah</title><desc>Rupiah melemah menuju Harga impor dan biaya input naik menuju Inflasi impor menekan C dan I menuju Ekspor dapat lebih kompetitif menuju Dampak NX bergantung elastisitas dan lag. Hasil tidak otomatis positif: periksa kandungan impor, kapasitas produksi, elastisitas permintaan, dan J-curve.</desc><defs><marker id=\"arrow-PTE-FLOW-03\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"#94a3b8\"/></marker></defs><rect x=\"31.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"106.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"106.0\" dy=\"0\">Rupiah melemah</tspan></text><line x1=\"185.0\" y1=\"97.0\" x2=\"203.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03)\"/><rect x=\"208.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"283.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"283.0\" dy=\"0\">Harga impor dan biaya</tspan><tspan x=\"283.0\" dy=\"18\">input naik</tspan></text><line x1=\"362.0\" y1=\"97.0\" x2=\"380.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03)\"/><rect x=\"385.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"460.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"460.0\" dy=\"0\">Inflasi impor menekan</tspan><tspan x=\"460.0\" dy=\"18\">C dan I</tspan></text><line x1=\"539.0\" y1=\"97.0\" x2=\"557.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03)\"/><rect x=\"562.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"637.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"637.0\" dy=\"0\">Ekspor dapat lebih</tspan><tspan x=\"637.0\" dy=\"18\">kompetitif</tspan></text><line x1=\"716.0\" y1=\"97.0\" x2=\"734.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03)\"/><rect x=\"739.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"814.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"814.0\" dy=\"0\">Dampak NX bergantung</tspan><tspan x=\"814.0\" dy=\"18\">elastisitas dan lag</tspan></text><rect x=\"110\" y=\"165\" width=\"700\" height=\"45\" rx=\"12\" fill=\"#0b1220\" stroke=\"#64748b\" stroke-dasharray=\"5 4\"/><text x=\"460\" y=\"193\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"13\" font-family=\"system-ui, sans-serif\">Hasil tidak otomatis positif: periksa kandungan impor, kapasitas produksi, elastisitas permintaan, dan J-curve.</text></svg>",
      "caption": "Depresiasi dapat memperbaiki daya saing ekspor tetapi sekaligus menaikkan biaya impor dan inflasi. Efek bersihnya harus dianalisis dengan syarat yang jelas.",
      "altText": "Diagram alur depresiasi rupiah yang menaikkan harga impor dan inflasi sehingga menekan konsumsi dan investasi, tetapi dapat meningkatkan daya saing ekspor; dampak ekspor neto bergantung elastisitas dan jeda waktu."
    },
    {
      "kind": "p",
      "text": "Rupiah melemah  USD lebih mahal  →  M mahal & inflasi impor↑  →  C riil↓ / I biaya↑  →  X bisa↑  jika elastis  →  NX tidak pasti  lihat elastisitas & lag"
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Catatan kurs",
      "text": "dalam pembahasan Indonesia, “rupiah turun terhadap USD” biasanya berarti rupiah melemah/depresiasi dan USD makin mahal. Jangan tertukar dengan “kurs USD/IDR turun”, yang justru sering berarti rupiah menguat jika angka rupiah per dolar menurun."
    },
    {
      "kind": "h2",
      "text": "Nominal, Riil, Deflator, dan CPI"
    },
    {
      "kind": "p",
      "text": "GDP nominal menghitung output dengan harga tahun berjalan, sedangkan GDP riil menggunakan harga tahun dasar. Karena itu, GDP nominal bisa naik hanya karena harga naik, walaupun jumlah barang tidak berubah. GDP riil lebih tepat untuk melihat perubahan volume produksi."
    },
    {
      "kind": "formula",
      "text": "Rumus Penting\n\nNominal GDP = Σ(P_t × Q_t)\n\nReal GDP = Σ(P_base × Q_t)\n\nGDP Deflator = (Nominal GDP / Real GDP) × 100\n\nInflation rate = [(Price Index_t − Price Index_{t−1}) / Price Index_{t−1}] × 100%"
    },
    {
      "kind": "table",
      "headers": [
        "GDP Deflator",
        "CPI/IHK"
      ],
      "rows": [
        [
          "Mengukur harga semua barang/jasa final yang diproduksi domestik.",
          "Mengukur harga keranjang konsumsi rumah tangga."
        ],
        [
          "Keranjang berubah mengikuti output tahun berjalan.",
          "Keranjang relatif tetap dalam periode tertentu."
        ],
        [
          "Tidak langsung memasukkan barang impor jika tidak diproduksi domestik.",
          "Barang impor yang dikonsumsi rumah tangga bisa masuk keranjang CPI."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Keterbatasan GDP sebagai Ukuran Kesejahteraan"
    },
    {
      "kind": "p",
      "text": "GDP penting, tetapi tidak boleh disamakan begitu saja dengan kesejahteraan. GDP tinggi sering berkorelasi dengan standar hidup yang lebih baik, tetapi GDP tidak mengukur seluruh aspek kualitas hidup."
    },
    {
      "kind": "ul",
      "items": [
        "**Kegiatan nonpasar** seperti pekerjaan rumah tangga dan perawatan keluarga tidak selalu tercatat.",
        "**Ekonomi informal dan underground economy** dapat membuat produksi aktual lebih besar daripada data resmi.",
        "**Distribusi pendapatan** tidak terlihat; GDP per kapita tinggi bisa tetap diikuti ketimpangan besar.",
        "**Kualitas lingkungan** tidak otomatis tercermin; produksi yang merusak lingkungan tetap menaikkan GDP.",
        "**Leisure, keamanan, kesehatan mental, dan kualitas institusi** tidak tercatat langsung.",
        "**Perubahan kualitas barang** sulit diukur sempurna, terutama pada teknologi digital."
      ]
    },
    {
      "kind": "h2",
      "text": "Contoh & Jebakan Ujian"
    },
    {
      "kind": "math-example",
      "title": "Contoh Perhitungan PDB Riil & GDP Deflator",
      "blocks": [
        {
          "kind": "p",
          "text": "Misalkan sebuah negara hanya memproduksi Hot Dog dan Hamburger. Tahun dasar adalah 2013."
        },
        {
          "kind": "table",
          "headers": ["Tahun", "Harga Hot Dog", "Kuantitas Hot Dog", "Harga Hamburger", "Kuantitas Hamburger"],
          "rows": [
            ["2013", "$1", "100", "$2", "50"],
            ["2014", "$2", "150", "$3", "100"]
          ]
        },
        {
          "kind": "p",
          "text": "**Langkah 1: Menghitung Nominal GDP** (menggunakan harga tahun berjalan)\n- 2013: ($1 × 100) + ($2 × 50) = $200\n- 2014: ($2 × 150) + ($3 × 100) = $600"
        },
        {
          "kind": "p",
          "text": "**Langkah 2: Menghitung Real GDP** (menggunakan harga tahun dasar 2013)\n- 2013: ($1 × 100) + ($2 × 50) = $200\n- 2014: ($1 × 150) + ($2 × 100) = $350"
        },
        {
          "kind": "p",
          "text": "**Langkah 3: Menghitung GDP Deflator** (Nominal / Real × 100)\n- 2013: ($200 / $200) × 100 = 100\n- 2014: ($600 / $350) × 100 = 171"
        }
      ]
    },
    {
      "kind": "math-example",
      "title": "Contoh Hitung GDP Pendekatan Pengeluaran",
      "blocks": [
        {
          "kind": "p",
          "text": "Diketahui data suatu negara: \n- Konsumsi (C) = 800\n- Investasi (I) = 250\n- Pengeluaran Pemerintah (G) = 300\n- Ekspor (X) = 120\n- Impor (M) = 170"
        },
        {
          "kind": "p",
          "text": "**Langkah Penyelesaian:**\n1. Cari Ekspor Neto (NX) = X - M = 120 - 170 = -50\n2. Masukkan ke rumus Y = C + I + G + NX\n3. Y = 800 + 250 + 300 + (-50) = 1.300"
        }
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Jebakan",
      "text": "transfer pemerintah, pembelian obligasi, pembelian saham, dan barang bekas bukan produksi final baru. Jangan masukkan ke GDP kecuali ada jasa baru yang muncul, misalnya komisi broker."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Data Riil: Ekonomi Indonesia 2025",
      "text": "PDB Indonesia 2025 atas dasar harga berlaku (nilai nominal) mencapai Rp23.821,1 triliun, sedangkan atas dasar harga konstan tahun dasar 2010 (nilai riil) sebesar Rp13.580,5 triliun. Selisih keduanya mencerminkan peran perubahan harga sejak tahun dasar. Ekonomi tumbuh 5,11% pada 2025, naik dari 5,03% pada 2024. PDB per kapita, yaitu PDB dibagi jumlah penduduk sebagai ukuran kasar output rata-rata per orang, mencapai Rp83,7 juta atau sekitar USD 5.083. Dari sisi pengeluaran, konsumsi rumah tangga tetap menjadi komponen terbesar, sekitar 53,9% PDB.\n\n*Snapshot resmi: BPS, rilis 5 Februari 2026; periode data tahun 2025.*"
    },
    {
      "kind": "p",
      "text": "Sumber: BPS, rilis 5 Februari 2026."
    },
    {
      "kind": "practice-box",
      "title": "Latihan Soal Ujian (Bab 1: Pendapatan Nasional)",
      "blocks": [
        {
          "kind": "p",
          "text": "1. Jika PDB nominal tahun 2024 adalah 1.200 dan PDB riil adalah 800, berapakah GDP Deflator tahun 2024?\n2. Sebuah perusahaan roti membeli tepung senilai Rp50.000, ragi Rp10.000, lalu menjual rotinya seharga Rp100.000. Berapa nilai tambah (value added) dari perusahaan tersebut?\n3. Jelaskan mengapa pembelian rumah baru dimasukkan ke dalam 'Investasi' bukan 'Konsumsi'!"
        }
      ],
      "answerKey": "1. **150.** (Nominal / Riil × 100 = 1200 / 800 × 100 = 150)\n2. **Rp40.000.** (Penjualan dikurangi biaya input antara = 100.000 - 50.000 - 10.000)\n3. Pembelian rumah baru masuk ke dalam investasi perumahan (residential investment) karena rumah merupakan aset jangka panjang (capital good) yang memberikan 'layanan perumahan' (housing services) selama bertahun-tahun, layaknya sebuah mesin pabrik bagi perusahaan."
    }
  ]
};

const tm9: Reading = {
  "tm": 9,
  "title": "Perekonomian Tertutup (Bagian 1): Identitas, Konsumsi, Tabungan & Dana Pinjaman",
  "ref": "Kontrak: 1(20), 2(23,24) · Substansi: Samuelson Ch.21–22; Mankiw Ch.26, Ch.33–34",
  "intro": "Membangun identitas ekonomi tertutup, fungsi konsumsi-tabungan, hubungan S = I, dan mekanisme pasar dana pinjaman.",
  "objectives": [
    "Menurunkan identitas tabungan nasional, tabungan privat, dan tabungan publik.",
    "Menggunakan fungsi konsumsi dan tabungan serta MPC dan MPS.",
    "Menjelaskan mengapa S = I dalam ekonomi tertutup.",
    "Menganalisis suku bunga riil dan crowding out melalui pasar dana pinjaman."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Identitas Ekonomi Tertutup"
    },
    {
      "kind": "p",
      "text": "Perekonomian tertutup adalah perekonomian yang tidak melakukan transaksi barang, jasa, dan aset finansial dengan luar negeri. Dalam model ini, ekspor dan impor dianggap nol, sehingga analisis berfokus pada interaksi rumah tangga, perusahaan, dan pemerintah di dalam negeri."
    },
    {
      "kind": "formula",
      "text": "Identitas Dasar\n\nY = C + I + G\n\nJika tanpa pemerintah: Y = C + I\n\nJika ekonomi tertutup: NX = 0"
    },
    {
      "kind": "p",
      "text": "Identitas ini bukan teori perilaku, melainkan persamaan akuntansi. Teori muncul ketika kita menjelaskan bagaimana C, I, dan G ditentukan, serta bagaimana perubahan salah satu komponen memengaruhi output ekuilibrium."
    },
    {
      "kind": "formula",
      "text": "Tabungan dan Investasi dalam Ekonomi Tertutup\n\nNational saving: S = Y − C − G\n\nPrivate saving: S_private = Y − T − C\n\nPublic saving: S_public = T − G\n\nS = S_private + S_public\n\nDalam ekonomi tertutup: S = I"
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Makna S = I",
      "text": "dana yang tidak dikonsumsi oleh rumah tangga/pemerintah menjadi sumber pembiayaan investasi domestik. Jika defisit pemerintah naik, tabungan publik turun dan bisa menekan dana investasi swasta melalui crowding out."
    },
    {
      "kind": "h2",
      "text": "Konsumsi, Tabungan, dan Investasi"
    },
    {
      "kind": "p",
      "text": "Konsumsi biasanya menjadi komponen terbesar pengeluaran agregat. Model sederhana Keynesian menempatkan konsumsi sebagai fungsi dari pendapatan disposabel. Semakin besar pendapatan disposabel, konsumsi naik, tetapi biasanya tidak sebesar kenaikan pendapatan karena sebagian ditabung. Di Indonesia, konsumsi rumah tangga adalah komponen pengeluaran terbesar, sekitar 53,9% PDB pada 2025 (BPS, rilis 5 Feb 2026)."
    },
    {
      "kind": "formula",
      "text": "Fungsi Konsumsi dan Tabungan\n\nC = a + bY_d\n\nS = Y_d − C = −a + (1−b)Y_d\n\nMPC = ΔC/ΔY_d = b\n\nMPS = ΔS/ΔY_d = 1−b\n\nMPC + MPS = 1"
    },
    {
      "kind": "table",
      "headers": [
        "Istilah",
        "Makna",
        "Implikasi"
      ],
      "rows": [
        [
          "Autonomous consumption (a)",
          "Konsumsi minimum saat pendapatan nol.",
          "Dibiayai dari tabungan lama, utang, atau transfer."
        ],
        [
          "MPC",
          "Tambahan konsumsi dari tambahan pendapatan.",
          "Semakin tinggi MPC, semakin besar multiplier."
        ],
        [
          "MPS",
          "Tambahan tabungan dari tambahan pendapatan.",
          "Semakin tinggi MPS, semakin kecil multiplier."
        ],
        [
          "Investasi",
          "Pengeluaran untuk menambah modal, persediaan, atau bangunan.",
          "Dipengaruhi suku bunga, ekspektasi laba, teknologi, kapasitas, dan stabilitas ekonomi."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Pasar Dana Pinjaman (Loanable Funds)"
    },
    {
      "kind": "p",
      "text": "Keynesian Cross menjelaskan output jangka pendek ketika harga cenderung kaku. Pasar dana pinjaman melihatnya dari sisi klasik: bagaimana tabungan dan investasi dipertemukan oleh suku bunga riil. Bayangkan satu pasar tempat seluruh tabungan ditawarkan dan seluruh kebutuhan dana untuk investasi diminta."
    },
    {
      "kind": "formula",
      "text": "Inti Pasar Dana Pinjaman (Mankiw Ch. 26)\n\nPenawaran dana = tabungan nasional (S)\n\nPermintaan dana = investasi (I)\n\nHarga = suku bunga riil (r)\n\nEkuilibrium: S = I pada r*"
    },
    {
      "kind": "p",
      "text": "Penawaran dana datang dari tabungan. Suku bunga yang lebih tinggi membuat menabung lebih menarik, jadi kurva penawaran menanjak. Permintaan dana datang dari investasi. Suku bunga yang lebih tinggi membuat pinjaman lebih mahal, jadi kurva permintaan menurun. Suku bunga riil menyesuaikan sampai dana yang ditabung sama dengan dana yang dipinjam untuk investasi."
    },
    {
      "kind": "figure",
      "title": "Pasar Dana Pinjaman: ekuilibrium & dampak defisit",
      "svg": "<svg data-graph-id=\"PTE-GRAPH-02\" font-family=\"DM Sans, sans-serif\" style=\"max-width:560px;margin:0 auto;display:block\" viewBox=\"0 0 380 270\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><title>Pasar Dana Pinjaman: ekuilibrium &amp; dampak defisit</title><desc>Grafik pasar dana pinjaman dengan kuantitas dana pada sumbu horizontal dan suku bunga riil pada sumbu vertikal. Penawaran dana bergeser ke kiri akibat defisit, sehingga suku bunga naik dan kuantitas investasi turun.</desc><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"355\" y1=\"235\" y2=\"235\"></line><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"55\" y1=\"235\" y2=\"20\"></line><text fill=\"#9aa4b7\" font-size=\"11\" x=\"14\" y=\"26\">r</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"342\" y=\"251\">Q</text><line stroke=\"#22d3a0\" stroke-width=\"2.3\" x1=\"100\" x2=\"325\" y1=\"205\" y2=\"50\"></line><text fill=\"#22d3a0\" font-size=\"10\" x=\"328\" y=\"52\">S₁</text><line stroke=\"#f4516c\" stroke-dasharray=\"5,4\" stroke-width=\"2\" x1=\"55\" x2=\"280\" y1=\"205\" y2=\"50\"></line><text fill=\"#f4516c\" font-size=\"10\" x=\"236\" y=\"42\">S₂ (defisit↑)</text><line stroke=\"#4f9cf9\" stroke-width=\"2.3\" x1=\"100\" x2=\"325\" y1=\"60\" y2=\"205\"></line><text fill=\"#4f9cf9\" font-size=\"10\" x=\"328\" y=\"207\">D = I</text><line stroke=\"#f9a825\" stroke-dasharray=\"3,3\" stroke-width=\"1\" x1=\"209\" x2=\"209\" y1=\"130\" y2=\"235\"></line><line stroke=\"#f9a825\" stroke-dasharray=\"3,3\" stroke-width=\"1\" x1=\"55\" x2=\"209\" y1=\"130\" y2=\"130\"></line><circle cx=\"209\" cy=\"130\" fill=\"#f9a825\" r=\"3.6\"></circle><line opacity=\"0.85\" stroke=\"#f9a825\" stroke-dasharray=\"2,3\" stroke-width=\"0.8\" x1=\"186\" x2=\"186\" y1=\"115\" y2=\"235\"></line><line opacity=\"0.85\" stroke=\"#f9a825\" stroke-dasharray=\"2,3\" stroke-width=\"0.8\" x1=\"55\" x2=\"186\" y1=\"115\" y2=\"115\"></line><circle cx=\"186\" cy=\"115\" fill=\"#f9a825\" r=\"3.6\"></circle><text fill=\"#f9a825\" font-size=\"10\" x=\"38\" y=\"134\">r₁</text><text fill=\"#f9a825\" font-size=\"10\" x=\"38\" y=\"112\">r₂</text><text fill=\"#f9a825\" font-size=\"10\" x=\"201\" y=\"249\">Q₁</text><text fill=\"#f9a825\" font-size=\"10\" x=\"166\" y=\"249\">Q₂</text></svg>",
      "caption": "Defisit menurunkan tabungan nasional sehingga kurva penawaran dana bergeser ke kiri dari S1 ke S2. Suku bunga riil naik dari r1 ke r2 dan dana investasi turun dari Q1 ke Q2.",
      "altText": "Grafik pasar dana pinjaman dengan kuantitas dana pada sumbu horizontal dan suku bunga riil pada sumbu vertikal. Penawaran dana bergeser ke kiri akibat defisit, sehingga suku bunga naik dan kuantitas investasi turun."
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Defisit dan crowding out",
      "text": "ketika pemerintah defisit, tabungan publik negatif sehingga tabungan nasional turun. Kurva penawaran dana bergeser ke kiri, suku bunga riil naik dari r₁ ke r₂, dan investasi swasta yang terdanai turun dari Q₁ ke Q₂. Inilah crowding out yang disinggung pada bagian kebijakan fiskal."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Hati-hati",
      "text": "tabungan dan investasi di sini adalah konsep makro agregat, bukan \"uang yang disimpan di rumah\". Tabungan mengalir menjadi dana investasi lewat sistem keuangan, bukan dana yang menganggur."
    }
  ]
};

const tm10: Reading = {
  "tm": 10,
  "title": "Perekonomian Tertutup (Bagian 2): Keseimbangan, Multiplier & Kebijakan Fiskal",
  "ref": "Kontrak: 1(20), 2(23,24) · Substansi: Samuelson Ch.21–22; Mankiw Ch.26, Ch.33–34",
  "intro": "Menentukan output ekuilibrium melalui Keynesian Cross, menghitung multiplier, dan menilai dampak kebijakan fiskal serta output gap.",
  "objectives": [
    "Menentukan keseimbangan Y = AE dan membaca Keynesian Cross.",
    "Menghitung multiplier belanja, investasi, pajak, dan balanced budget.",
    "Membedakan kebijakan fiskal ekspansif dan kontraktif.",
    "Menjelaskan recessionary gap, inflationary gap, dan paradox of thrift."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Aggregate Expenditure & Keynesian Cross"
    },
    {
      "kind": "p",
      "text": "Dalam model Keynesian sederhana, output ekuilibrium tercapai ketika produksi aktual sama dengan pengeluaran agregat yang direncanakan. Jika perusahaan memproduksi lebih banyak daripada permintaan, persediaan naik dan produksi akan dikurangi. Jika permintaan lebih tinggi daripada output, persediaan turun dan produksi akan dinaikkan."
    },
    {
      "kind": "formula",
      "text": "Pengeluaran Agregat Terencana\n\nAE = C + I + G\n\nAE = a + b(Y−T) + I + G\n\nEkuilibrium barang: Y = AE"
    },
    {
      "kind": "figure",
      "title": "Keynesian Cross: penentuan output ekuilibrium",
      "svg": "<svg data-graph-id=\"PTE-GRAPH-01\" font-family=\"DM Sans, sans-serif\" style=\"max-width:560px;margin:0 auto;display:block\" viewBox=\"0 0 380 270\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><title>Keynesian Cross: penentuan output ekuilibrium</title><desc>Grafik Keynesian Cross dengan output Y pada sumbu horizontal dan pengeluaran agregat AE pada sumbu vertikal. Garis 45 derajat berpotongan dengan garis AE sama dengan C tambah I tambah G pada output keseimbangan Y bintang.</desc><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"355\" y1=\"235\" y2=\"235\"></line><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"55\" y1=\"235\" y2=\"20\"></line><text fill=\"#9aa4b7\" font-size=\"11\" x=\"18\" y=\"26\">AE</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"340\" y=\"251\">Y</text><line stroke=\"#9aa4b7\" stroke-width=\"1.5\" x1=\"55\" x2=\"270\" y1=\"235\" y2=\"20\"></line><text fill=\"#9aa4b7\" font-size=\"10\" x=\"226\" y=\"32\">Y = AE (45°)</text><line stroke=\"#4f9cf9\" stroke-width=\"2.3\" x1=\"55\" x2=\"270\" y1=\"170\" y2=\"60\"></line><text fill=\"#4f9cf9\" font-size=\"10\" x=\"272\" y=\"62\">AE = C+I+G</text><circle cx=\"55\" cy=\"170\" fill=\"#4f9cf9\" r=\"3\"></circle><text fill=\"#4f9cf9\" font-size=\"10\" x=\"34\" y=\"166\">A</text><line stroke=\"#f9a825\" stroke-dasharray=\"3,3\" stroke-width=\"1\" x1=\"188\" x2=\"188\" y1=\"102\" y2=\"235\"></line><line stroke=\"#f9a825\" stroke-dasharray=\"3,3\" stroke-width=\"1\" x1=\"55\" x2=\"188\" y1=\"102\" y2=\"102\"></line><circle cx=\"188\" cy=\"102\" fill=\"#f9a825\" r=\"3.6\"></circle><text fill=\"#f9a825\" font-size=\"11\" x=\"181\" y=\"250\">Y*</text></svg>",
      "caption": "Titik Y* adalah perpotongan garis pengeluaran agregat dengan garis 45°. Di titik ini, output sama dengan pengeluaran agregat yang direncanakan.",
      "altText": "Grafik Keynesian Cross dengan output Y pada sumbu horizontal dan pengeluaran agregat AE pada sumbu vertikal. Garis 45 derajat berpotongan dengan garis AE sama dengan C tambah I tambah G pada output keseimbangan Y bintang."
    },
    {
      "kind": "example",
      "title": "Contoh hitung Y ekuilibrium dari fungsi konsumsi",
      "blocks": [
        {
          "kind": "p",
          "text": "Misal C = 100 + 0,75Y_d, I = 200, G = 150, dan pajak lump-sum T = 100. Karena Y_d = Y − T:"
        }
      ]
    },
    {
      "kind": "p",
      "text": "Y = C + I + G = 100 + 0,75(Y − 100) + 200 + 150"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Catatan Penting",
      "text": "Catatan Penting"
    },
    {
      "kind": "p",
      "text": "Y = 100 + 0,75Y − 75 + 350 = 375 + 0,75Y"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Catatan Penting",
      "text": "Catatan Penting"
    },
    {
      "kind": "p",
      "text": "Y − 0,75Y = 375 → 0,25Y = 375 → **Y* = 1.500**"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Catatan Penting",
      "text": "Catatan Penting"
    },
    {
      "kind": "p",
      "text": "Multiplier belanja = 1/(1−0,75) = 4. Jika G naik 50, output ekuilibrium naik 4 × 50 = 200 menjadi 1.700. Multiplier pajak = −0,75/(1−0,75) = −3. Jika T naik 50, output turun 3 × 50 = 150. Dampak pajak lebih kecil daripada belanja pada nominal yang sama karena pajak hanya memengaruhi pengeluaran lewat konsumsi."
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "Peran persediaan",
      "text": "perubahan persediaan adalah sinyal penyesuaian output. Persediaan tak terencana naik berarti produksi terlalu tinggi; persediaan tak terencana turun berarti produksi terlalu rendah."
    },
    {
      "kind": "h2",
      "text": "Multiplier"
    },
    {
      "kind": "p",
      "text": "Multiplier menjelaskan mengapa kenaikan awal pada belanja otonom dapat menimbulkan kenaikan output yang lebih besar. Mekanismenya terjadi karena pengeluaran satu pihak menjadi pendapatan pihak lain, lalu sebagian pendapatan itu dibelanjakan kembali."
    },
    {
      "kind": "formula",
      "text": "Rumus Multiplier Dasar\n\nGovernment spending multiplier: k_G = 1/(1−MPC)\n\nInvestment multiplier: k_I = 1/(1−MPC)\n\nTax multiplier: k_T = −MPC/(1−MPC)\n\nBalanced-budget multiplier = 1"
    },
    {
      "kind": "example",
      "title": "Contoh multiplier",
      "blocks": [
        {
          "kind": "p",
          "text": "Jika MPC = 0,8 dan G naik 100, maka k = 1/(1−0,8) = 5. Perubahan output = 5 × 100 = 500. Jika pajak naik 100, dampaknya = −0,8/(1−0,8) × 100 = −400."
        }
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Jebakan",
      "text": "multiplier pajak lebih kecil secara absolut daripada multiplier belanja pemerintah karena pajak memengaruhi pengeluaran melalui konsumsi, sedangkan belanja pemerintah langsung masuk ke pengeluaran agregat."
    },
    {
      "kind": "h2",
      "text": "Kebijakan Fiskal"
    },
    {
      "kind": "p",
      "text": "Kebijakan fiskal adalah penggunaan belanja pemerintah dan pajak untuk memengaruhi permintaan agregat, output, dan stabilitas ekonomi. Dalam resesi, pemerintah dapat menaikkan G atau menurunkan T untuk mendorong AE. Dalam ekonomi yang overheating, pemerintah dapat menurunkan G atau menaikkan T."
    },
    {
      "kind": "figure",
      "title": "Transmisi Kebijakan Fiskal Ekspansif",
      "svg": "<svg data-graph-id=\"PTE-FLOW-04\" viewBox=\"0 0 920 235\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Transmisi kebijakan fiskal</title><desc>G naik atau T turun menuju AE dan AD naik menuju Produksi dan pendapatan naik menuju Konsumsi ikut naik melalui multiplier menuju Risiko inflasi atau crowding out. Kekuatan efek bergantung MPC, kebocoran impor, kapasitas menganggur, pembiayaan defisit, dan respons bank sentral.</desc><defs><marker id=\"arrow-PTE-FLOW-04\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"#94a3b8\"/></marker></defs><rect x=\"31.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#22d3a0\" stroke-width=\"1.5\"/><text x=\"106.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"106.0\" dy=\"0\">G naik atau T turun</tspan></text><line x1=\"185.0\" y1=\"97.0\" x2=\"203.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-04)\"/><rect x=\"208.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#22d3a0\" stroke-width=\"1.5\"/><text x=\"283.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"283.0\" dy=\"0\">AE dan AD naik</tspan></text><line x1=\"362.0\" y1=\"97.0\" x2=\"380.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-04)\"/><rect x=\"385.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#22d3a0\" stroke-width=\"1.5\"/><text x=\"460.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"460.0\" dy=\"0\">Produksi dan</tspan><tspan x=\"460.0\" dy=\"18\">pendapatan naik</tspan></text><line x1=\"539.0\" y1=\"97.0\" x2=\"557.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-04)\"/><rect x=\"562.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#22d3a0\" stroke-width=\"1.5\"/><text x=\"637.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"637.0\" dy=\"0\">Konsumsi ikut naik</tspan><tspan x=\"637.0\" dy=\"18\">melalui multiplier</tspan></text><line x1=\"716.0\" y1=\"97.0\" x2=\"734.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-04)\"/><rect x=\"739.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#22d3a0\" stroke-width=\"1.5\"/><text x=\"814.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"814.0\" dy=\"0\">Risiko inflasi atau</tspan><tspan x=\"814.0\" dy=\"18\">crowding out</tspan></text><rect x=\"110\" y=\"165\" width=\"700\" height=\"45\" rx=\"12\" fill=\"#0b1220\" stroke=\"#64748b\" stroke-dasharray=\"5 4\"/><text x=\"460\" y=\"193\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"13\" font-family=\"system-ui, sans-serif\">Kekuatan efek bergantung MPC, kebocoran impor, kapasitas menganggur, pembiayaan defisit, dan respons bank sentral.</text></svg>",
      "caption": "Belanja pemerintah masuk langsung ke AE, sedangkan penurunan pajak bekerja melalui disposable income dan konsumsi.",
      "altText": "Diagram alur kebijakan fiskal ekspansif dari kenaikan belanja atau penurunan pajak menuju kenaikan pengeluaran agregat, produksi, pendapatan, konsumsi, lalu risiko inflasi atau crowding out."
    },
    {
      "kind": "table",
      "headers": [
        "Kebijakan",
        "Instrumen",
        "Dampak awal",
        "Risiko"
      ],
      "rows": [
        [
          "Fiskal ekspansif",
          "G naik atau T turun",
          "AE, AD, dan output jangka pendek naik",
          "Defisit, utang, inflasi, crowding out"
        ],
        [
          "Fiskal kontraktif",
          "G turun atau T naik",
          "AE, AD, dan tekanan inflasi turun",
          "Output dan kesempatan kerja bisa melemah"
        ],
        [
          "Automatic stabilizer",
          "Pajak progresif, bantuan pengangguran",
          "Meredam siklus tanpa keputusan baru",
          "Dampaknya tidak selalu cukup kuat"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "**Crowding out** terjadi ketika defisit pemerintah mendorong kebutuhan pembiayaan naik, menekan suku bunga ke atas, lalu mengurangi investasi swasta. Efek ini lebih penting ketika ekonomi dekat kapasitas penuh."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Data Riil: APBN 2026",
      "text": "Dalam APBN 2026, belanja negara direncanakan Rp3.842,7 triliun dan pendapatan negara Rp3.153,6 triliun. Karena belanja melebihi pendapatan, anggaran dirancang defisit, sekitar 2,68% terhadap PDB. Sampai Mei 2026, realisasi defisit tercatat Rp180,4 triliun atau 0,70% PDB. Defisit ini dibiayai dengan menerbitkan surat utang negara, sehingga pemerintah ikut menambah permintaan dana pinjaman. Lewat jalur inilah, secara teori, defisit dapat menekan suku bunga riil naik dan menimbulkan crowding out terhadap investasi swasta.\n\n*Snapshot resmi: Kementerian Keuangan, APBN 2026 dan APBN KiTa Juni 2026; realisasi sampai Mei 2026.*"
    },
    {
      "kind": "p",
      "text": "Sumber: Kemenkeu, APBN 2026 dan APBN KiTa Juni 2026."
    },
    {
      "kind": "h2",
      "text": "Output Gap & Paradox of Thrift"
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Output gap",
      "text": "adalah selisih antara output aktual dan output potensial. Recessionary gap terjadi ketika Y aktual lebih rendah dari Y potensial; inflationary gap terjadi ketika Y aktual melebihi kapasitas berkelanjutan."
    },
    {
      "kind": "figure",
      "title": "Recessionary Gap vs Inflationary Gap",
      "svg": "<svg data-graph-id=\"PTE-GRAPH-08\" viewBox=\"0 0 920 330\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<title>Recessionary gap dan inflationary gap</title><desc>Dua panel menunjukkan output keseimbangan dibandingkan output potensial. Recessionary gap terjadi saat output aktual di kiri output potensial. Inflationary gap terjadi saat output aktual di kanan output potensial.</desc>\n<text x=\"230\" y=\"25\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"16\" font-weight=\"700\">Recessionary gap</text><text x=\"690\" y=\"25\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"16\" font-weight=\"700\">Inflationary gap</text>\n<g transform=\"translate(25,35)\"><line x1=\"45\" y1=\"240\" x2=\"405\" y2=\"240\" stroke=\"#64748b\"/><line x1=\"45\" y1=\"240\" x2=\"45\" y2=\"20\" stroke=\"#64748b\"/><text x=\"392\" y=\"263\" fill=\"#94a3b8\">Y</text><text x=\"18\" y=\"25\" fill=\"#94a3b8\">P</text><line x1=\"85\" y1=\"65\" x2=\"350\" y2=\"215\" stroke=\"#4f9cf9\" stroke-width=\"2.5\"/><line x1=\"90\" y1=\"210\" x2=\"345\" y2=\"55\" stroke=\"#22d3a0\" stroke-width=\"2.5\"/><line x1=\"305\" y1=\"35\" x2=\"305\" y2=\"240\" stroke=\"#f4516c\" stroke-width=\"2.3\" stroke-dasharray=\"7 4\"/><text x=\"292\" y=\"31\" fill=\"#f4516c\">LRAS / Yp</text><circle cx=\"220\" cy=\"142\" r=\"4\" fill=\"#f9a825\"/><line x1=\"220\" y1=\"142\" x2=\"220\" y2=\"240\" stroke=\"#f9a825\" stroke-dasharray=\"4 3\"/><text x=\"208\" y=\"258\" fill=\"#f9a825\">Y*</text><path d=\"M220 278 H305\" stroke=\"#f9a825\" stroke-width=\"3\"/><text x=\"262\" y=\"300\" text-anchor=\"middle\" fill=\"#cbd5e1\">Y* &lt; Yp</text></g>\n<g transform=\"translate(485,35)\"><line x1=\"45\" y1=\"240\" x2=\"405\" y2=\"240\" stroke=\"#64748b\"/><line x1=\"45\" y1=\"240\" x2=\"45\" y2=\"20\" stroke=\"#64748b\"/><text x=\"392\" y=\"263\" fill=\"#94a3b8\">Y</text><text x=\"18\" y=\"25\" fill=\"#94a3b8\">P</text><line x1=\"110\" y1=\"55\" x2=\"375\" y2=\"205\" stroke=\"#4f9cf9\" stroke-width=\"2.5\"/><line x1=\"90\" y1=\"210\" x2=\"345\" y2=\"55\" stroke=\"#22d3a0\" stroke-width=\"2.5\"/><line x1=\"220\" y1=\"35\" x2=\"220\" y2=\"240\" stroke=\"#f4516c\" stroke-width=\"2.3\" stroke-dasharray=\"7 4\"/><text x=\"207\" y=\"31\" fill=\"#f4516c\">LRAS / Yp</text><circle cx=\"278\" cy=\"150\" r=\"4\" fill=\"#f9a825\"/><line x1=\"278\" y1=\"150\" x2=\"278\" y2=\"240\" stroke=\"#f9a825\" stroke-dasharray=\"4 3\"/><text x=\"268\" y=\"258\" fill=\"#f9a825\">Y*</text><path d=\"M220 278 H278\" stroke=\"#f9a825\" stroke-width=\"3\"/><text x=\"249\" y=\"300\" text-anchor=\"middle\" fill=\"#cbd5e1\">Y* &gt; Yp</text></g></svg>",
      "caption": "Recessionary gap berarti output aktual di bawah output potensial. Inflationary gap berarti permintaan mendorong output melewati kapasitas berkelanjutan dan meningkatkan tekanan harga.",
      "altText": "Dua grafik AS-AD. Grafik kiri menunjukkan output keseimbangan lebih rendah dari output potensial. Grafik kanan menunjukkan output keseimbangan lebih tinggi dari output potensial."
    },
    {
      "kind": "ul",
      "items": [
        "**Recessionary Gap:** Permintaan agregat kurang. Kebijakan ekspansif dapat menaikkan output dan menurunkan pengangguran siklis.",
        "**Inflationary Gap:** Permintaan terlalu kuat. Kebijakan kontraktif dapat menekan inflasi tetapi berisiko menurunkan output."
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Paradox of thrift",
      "text": "jika semua orang serentak menaikkan tabungan dengan mengurangi konsumsi, pengeluaran agregat turun, output turun, dan tabungan aktual secara agregat belum tentu meningkat."
    }
  ]
};

const tm11: Reading = {
  "tm": 11,
  "title": "Uang dan Sistem Keuangan",
  "ref": "Kontrak: 1(21), 2(31,32) · Substansi: Samuelson Ch.23–24; Mankiw Ch.29–30",
  "intro": "Membahas fungsi uang, intermediasi keuangan, penciptaan uang oleh bank, permintaan uang, kebijakan moneter, teori kuantitas, dan suku bunga riil.",
  "objectives": [
    "Menjelaskan fungsi uang dan peran sistem keuangan.",
    "Menghitung money multiplier sederhana dan memahami keterbatasannya.",
    "Menganalisis pasar uang serta transmisi kebijakan moneter.",
    "Menggunakan quantity equation dan persamaan Fisher."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Definisi & Fungsi Uang"
    },
    {
      "kind": "p",
      "text": "Uang adalah aset yang diterima secara umum untuk pembayaran barang, jasa, dan kewajiban. Uang bukan kekayaan dalam arti luas, karena kekayaan mencakup saham, obligasi, tanah, bangunan, dan aset produktif lain. Uang adalah bagian dari kekayaan yang paling likuid."
    },
    {
      "kind": "ul",
      "items": [
        "**Medium of Exchange:** Uang mempermudah pertukaran tanpa barter dan tanpa double coincidence of wants.",
        "**Unit of Account:** Uang menjadi satuan hitung untuk menyatakan harga dan mencatat nilai transaksi.",
        "**Store of Value:** Uang menyimpan daya beli, meski nilainya bisa tergerus inflasi.",
        "**Standard of Deferred Payment:** Uang menjadi dasar pembayaran utang pada masa depan."
      ]
    },
    {
      "kind": "table",
      "headers": [
        "Jenis Uang",
        "Ciri",
        "Contoh"
      ],
      "rows": [
        [
          "Commodity money",
          "Memiliki nilai intrinsik.",
          "Emas, perak, garam dalam sejarah."
        ],
        [
          "Fiat money",
          "Bernilai karena ditetapkan dan diterima sebagai alat pembayaran.",
          "Rupiah, dolar AS, euro."
        ],
        [
          "Bank money",
          "Uang giral/demand deposits yang muncul dari sistem perbankan.",
          "Saldo rekening giro dan tabungan transaksi."
        ],
        [
          "Digital/e-money",
          "Representasi elektronik dari nilai uang untuk pembayaran.",
          "Saldo uang elektronik; tetap terkait sistem pembayaran resmi."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Sistem Keuangan"
    },
    {
      "kind": "p",
      "text": "Sistem keuangan menghubungkan pihak surplus dana dengan pihak defisit dana. Tanpa sistem keuangan, tabungan rumah tangga sulit berubah menjadi investasi produktif. Lembaga dan pasar keuangan mempertemukan dana, mengelola risiko, menyediakan likuiditas, dan mendukung sistem pembayaran."
    },
    {
      "kind": "ul",
      "items": [
        "**Financial Markets:** Mempertemukan pemilik dana dan peminjam secara langsung melalui saham, obligasi, dan instrumen pasar uang.",
        "**Financial Intermediaries:** Mengumpulkan dana dari masyarakat lalu menyalurkan ke peminjam, misalnya bank, perusahaan asuransi, dana pensiun, dan reksa dana.",
        "**Alokasi modal:** dana diarahkan ke proyek yang dianggap paling produktif.",
        "**Risk sharing:** risiko dibagi melalui diversifikasi, asuransi, dan instrumen keuangan.",
        "**Maturity transformation:** dana jangka pendek dapat disalurkan menjadi kredit jangka lebih panjang.",
        "**Liquidity provision:** aset keuangan tertentu mudah ditukar menjadi uang.",
        "**Payment system:** memfasilitasi transaksi barang, jasa, dan aset."
      ]
    },
    {
      "kind": "h2",
      "text": "Bank dan Money Multiplier"
    },
    {
      "kind": "p",
      "text": "Bank menciptakan uang giral melalui fractional-reserve banking. Ketika bank menerima deposito, sebagian disimpan sebagai cadangan dan sisanya dipinjamkan. Pinjaman ini kemudian menjadi deposito baru di bank lain, sehingga jumlah uang beredar dapat bertambah."
    },
    {
      "kind": "formula",
      "text": "Fractional Reserve dan Multiplier\n\nReserve ratio = reserves/deposits\n\nSimple money multiplier = 1/rr\n\nMaximum deposit creation = initial reserves × (1/rr)"
    },
    {
      "kind": "example",
      "title": "Contoh bank multiplier",
      "blocks": [
        {
          "kind": "p",
          "text": "Jika cadangan awal 100 dan reserve ratio 10%, multiplier sederhana = 1/0,10 = 10. Potensi maksimum deposito = 100 × 10 = 1.000. Dalam kenyataan, hasilnya bisa lebih kecil karena ada uang tunai yang bocor ke masyarakat, cadangan berlebih, kredit macet, dan kehati-hatian bank."
        }
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Jangan terlalu mekanis",
      "text": "multiplier 1/rr adalah model sederhana. Dalam praktik, penciptaan kredit juga dipengaruhi permintaan kredit, modal bank, risiko, regulasi, dan kondisi makro."
    },
    {
      "kind": "h2",
      "text": "Bank Sentral & Kebijakan Moneter"
    },
    {
      "kind": "p",
      "text": "Bank sentral bertanggung jawab menjaga stabilitas moneter dan sistem keuangan. Fungsi umumnya mencakup pengendalian jumlah uang beredar, kebijakan suku bunga, lender of last resort, pengaturan sistem pembayaran, dan pengawasan stabilitas keuangan sesuai mandat masing-masing negara."
    },
    {
      "kind": "figure",
      "title": "Alur Transmisi Kebijakan Moneter",
      "svg": "<svg data-graph-id=\"PTE-FLOW-05\" viewBox=\"0 0 920 235\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Transmisi kebijakan moneter</title><desc>Policy rate berubah menuju Suku bunga pasar dan kredit berubah menuju C dan I bereaksi menuju AD, output, dan kesempatan kerja berubah menuju Inflasi dan kurs menyesuaikan. Transmisi juga melalui ekspektasi, harga aset, likuiditas bank, dan nilai tukar; dampaknya memiliki jeda waktu.</desc><defs><marker id=\"arrow-PTE-FLOW-05\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"#94a3b8\"/></marker></defs><rect x=\"31.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#a78bfa\" stroke-width=\"1.5\"/><text x=\"106.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"106.0\" dy=\"0\">Policy rate berubah</tspan></text><line x1=\"185.0\" y1=\"97.0\" x2=\"203.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-05)\"/><rect x=\"208.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#a78bfa\" stroke-width=\"1.5\"/><text x=\"283.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"283.0\" dy=\"0\">Suku bunga pasar dan</tspan><tspan x=\"283.0\" dy=\"18\">kredit berubah</tspan></text><line x1=\"362.0\" y1=\"97.0\" x2=\"380.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-05)\"/><rect x=\"385.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#a78bfa\" stroke-width=\"1.5\"/><text x=\"460.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"460.0\" dy=\"0\">C dan I bereaksi</tspan></text><line x1=\"539.0\" y1=\"97.0\" x2=\"557.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-05)\"/><rect x=\"562.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#a78bfa\" stroke-width=\"1.5\"/><text x=\"637.0\" y=\"79.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"637.0\" dy=\"0\">AD, output, dan</tspan><tspan x=\"637.0\" dy=\"18\">kesempatan kerja</tspan><tspan x=\"637.0\" dy=\"18\">berubah</tspan></text><line x1=\"716.0\" y1=\"97.0\" x2=\"734.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-05)\"/><rect x=\"739.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#a78bfa\" stroke-width=\"1.5\"/><text x=\"814.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"814.0\" dy=\"0\">Inflasi dan kurs</tspan><tspan x=\"814.0\" dy=\"18\">menyesuaikan</tspan></text><rect x=\"110\" y=\"165\" width=\"700\" height=\"45\" rx=\"12\" fill=\"#0b1220\" stroke=\"#64748b\" stroke-dasharray=\"5 4\"/><text x=\"460\" y=\"193\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"13\" font-family=\"system-ui, sans-serif\">Transmisi juga melalui ekspektasi, harga aset, likuiditas bank, dan nilai tukar; dampaknya memiliki jeda waktu.</text></svg>",
      "caption": "Kenaikan policy rate umumnya menekan C dan I serta AD. Penurunan rate bekerja sebaliknya, selama intermediasi dan permintaan kredit berfungsi.",
      "altText": "Diagram alur perubahan suku bunga kebijakan menuju suku bunga pasar dan kredit, konsumsi dan investasi, permintaan agregat, output, kesempatan kerja, inflasi, dan nilai tukar."
    },
    {
      "kind": "table",
      "headers": [
        "Instrumen",
        "Cara Kerja",
        "Dampak Umum"
      ],
      "rows": [
        [
          "Open market operation",
          "Bank sentral membeli/menjual surat berharga.",
          "Pembelian menambah cadangan dan likuiditas; penjualan menyerap likuiditas."
        ],
        [
          "Policy rate",
          "Suku bunga acuan memengaruhi suku bunga pasar.",
          "Rate turun mendorong kredit dan AD; rate naik menahan inflasi."
        ],
        [
          "Reserve requirement",
          "Mengatur cadangan minimum bank.",
          "RR naik menekan kemampuan kredit; RR turun melonggarkan kredit."
        ],
        [
          "Discount/lending facility",
          "Bank sentral menyediakan pinjaman likuiditas ke bank.",
          "Menjaga stabilitas ketika pasar uang terganggu."
        ],
        [
          "Komunikasi/kredibilitas",
          "Forward guidance dan sinyal kebijakan.",
          "Membentuk ekspektasi inflasi dan suku bunga."
        ]
      ]
    },
    {
      "kind": "formula",
      "text": "Transmisi Moneter\n\nPolicy rate → suku bunga pasar → konsumsi tahan lama & investasi → AD → output dan harga\n\nPolicy rate → nilai tukar → ekspor neto & harga impor → AD dan inflasi\n\nPolicy stance → ekspektasi → keputusan konsumsi, investasi, dan penetapan upah/harga"
    },
    {
      "kind": "h2",
      "text": "Permintaan Uang"
    },
    {
      "kind": "p",
      "text": "Permintaan uang dipengaruhi oleh kebutuhan transaksi, motif berjaga-jaga, dan motif spekulasi/portofolio. Masyarakat memegang uang karena uang likuid, tetapi memegang uang juga memiliki biaya kesempatan berupa bunga yang hilang dari aset lain."
    },
    {
      "kind": "ul",
      "items": [
        "**Transaction motive:** Semakin tinggi pendapatan dan transaksi, semakin tinggi kebutuhan uang.",
        "**Precautionary motive:** Uang dipegang untuk kebutuhan tak terduga dan ketidakpastian.",
        "**Speculative/portfolio motive:** Uang dibandingkan dengan aset berbunga. Suku bunga tinggi membuat memegang uang lebih mahal."
      ]
    },
    {
      "kind": "formula",
      "text": "Hubungan Intuitif\n\nMoney demand naik ketika Y naik\n\nMoney demand turun ketika interest rate naik"
    },
    {
      "kind": "h2",
      "text": "Pasar Uang dan Liquidity Preference"
    },
    {
      "kind": "p",
      "text": "Teori liquidity preference dari Keynes menjelaskan bagaimana suku bunga nominal terbentuk dalam jangka pendek. Suku bunga adalah biaya memegang uang: makin tinggi suku bunga, makin besar bunga yang dikorbankan ketika memegang uang tunai, sehingga jumlah uang yang diminta turun. Suku bunga bergerak sampai jumlah uang yang diminta sama dengan jumlah uang yang ditawarkan bank sentral."
    },
    {
      "kind": "formula",
      "text": "Pasar Uang (Liquidity Preference, Mankiw Ch. 34)\n\nPenawaran uang (MS): ditetapkan bank sentral, tidak tergantung suku bunga (kurva tegak)\n\nPermintaan uang (MD): turun saat suku bunga naik, naik saat pendapatan Y naik\n\nEkuilibrium: MD = MS menentukan suku bunga i*"
    },
    {
      "kind": "figure",
      "title": "Pasar Uang: penambahan likuiditas menurunkan suku bunga",
      "svg": "<svg data-graph-id=\"PTE-GRAPH-03\" font-family=\"DM Sans, sans-serif\" style=\"max-width:560px;margin:0 auto;display:block\" viewBox=\"0 0 380 270\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><title>Pasar Uang: penambahan likuiditas menurunkan suku bunga</title><desc>Grafik pasar uang dengan jumlah uang M pada sumbu horizontal dan suku bunga nominal i pada sumbu vertikal. Penawaran uang vertikal bergeser ke kanan dan menurunkan suku bunga keseimbangan.</desc><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"355\" y1=\"235\" y2=\"235\"></line><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"55\" y1=\"235\" y2=\"20\"></line><text fill=\"#9aa4b7\" font-size=\"11\" x=\"16\" y=\"26\">i</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"340\" y=\"251\">M</text><line stroke=\"#22d3a0\" stroke-width=\"2.3\" x1=\"180\" x2=\"180\" y1=\"40\" y2=\"235\"></line><text fill=\"#22d3a0\" font-size=\"10\" x=\"158\" y=\"34\">MS₁</text><line stroke=\"#f4516c\" stroke-dasharray=\"5,4\" stroke-width=\"2\" x1=\"250\" x2=\"250\" y1=\"40\" y2=\"235\"></line><text fill=\"#f4516c\" font-size=\"10\" x=\"236\" y=\"34\">MS₂</text><line stroke=\"#4f9cf9\" stroke-width=\"2.3\" x1=\"80\" x2=\"330\" y1=\"55\" y2=\"210\"></line><text fill=\"#4f9cf9\" font-size=\"10\" x=\"332\" y=\"212\">MD</text><line stroke=\"#f9a825\" stroke-dasharray=\"3,3\" stroke-width=\"1\" x1=\"55\" x2=\"180\" y1=\"117\" y2=\"117\"></line><circle cx=\"180\" cy=\"117\" fill=\"#f9a825\" r=\"3.6\"></circle><line opacity=\"0.85\" stroke=\"#f9a825\" stroke-dasharray=\"2,3\" stroke-width=\"0.8\" x1=\"55\" x2=\"250\" y1=\"160\" y2=\"160\"></line><circle cx=\"250\" cy=\"160\" fill=\"#f9a825\" r=\"3.6\"></circle><text fill=\"#f9a825\" font-size=\"10\" x=\"38\" y=\"120\">i₁</text><text fill=\"#f9a825\" font-size=\"10\" x=\"38\" y=\"163\">i₂</text></svg>",
      "caption": "Ketika penawaran uang bergeser ke kanan dari MS1 ke MS2, suku bunga keseimbangan turun dari i1 ke i2 sepanjang kurva permintaan uang.",
      "altText": "Grafik pasar uang dengan jumlah uang M pada sumbu horizontal dan suku bunga nominal i pada sumbu vertikal. Penawaran uang vertikal bergeser ke kanan dan menurunkan suku bunga keseimbangan."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Jalur kebijakan moneter",
      "text": "ketika bank sentral menambah jumlah uang, kurva MS bergeser ke kanan dan suku bunga turun dari i₁ ke i₂. Suku bunga yang lebih rendah mendorong investasi dan konsumsi tahan lama, sehingga permintaan agregat naik. Untuk menahan inflasi, bank sentral menempuh arah sebaliknya: menyerap likuiditas agar suku bunga naik."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Jangan tertukar dengan loanable funds",
      "text": "pasar uang menjelaskan suku bunga nominal jangka pendek lewat keseimbangan uang. Pasar dana pinjaman (TM 9–10) menjelaskan suku bunga riil jangka panjang lewat keseimbangan tabungan dan investasi. Keduanya benar pada konteks masing-masing."
    },
    {
      "kind": "h2",
      "text": "Quantity Theory & Inflasi"
    },
    {
      "kind": "p",
      "text": "Teori kuantitas uang menekankan hubungan antara jumlah uang beredar dan tingkat harga dalam jangka panjang. Jika velocity relatif stabil dan output riil ditentukan oleh faktor riil, pertumbuhan uang yang terlalu cepat akan terutama tercermin pada inflasi."
    },
    {
      "kind": "formula",
      "text": "Quantity Equation\n\nM × V = P × Y\n\nDalam laju pertumbuhan: g_M + g_V = π + g_Y\n\nJika V stabil: π ≈ g_M − g_Y"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Netralitas uang jangka panjang",
      "text": "perubahan jumlah uang memengaruhi variabel nominal seperti harga dan inflasi, sedangkan output riil jangka panjang terutama ditentukan oleh modal, tenaga kerja, teknologi, dan institusi."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Catatan kritis",
      "text": "teori kuantitas tidak berarti setiap kenaikan uang langsung menaikkan harga pada periode yang sama. Transmisi bergantung pada velocity, kapasitas menganggur, ekspektasi, struktur perbankan, dan respons kebijakan."
    },
    {
      "kind": "h2",
      "text": "Suku Bunga Nominal vs Riil (Fisher Effect)"
    },
    {
      "kind": "p",
      "text": "Suku bunga nominal adalah suku bunga yang diumumkan bank dan pasar. Suku bunga riil adalah suku bunga nominal setelah dikurangi inflasi, yaitu daya beli sebenarnya dari bunga yang diterima penabung atau dibayar peminjam."
    },
    {
      "kind": "formula",
      "text": "Persamaan Fisher (Mankiw Ch. 30)\n\nSuku bunga riil = suku bunga nominal − inflasi\n\nr ≈ i − π\n\ni ≈ r + π^e\n\nFisher effect: dalam jangka panjang, kenaikan 1% pertumbuhan uang menaikkan inflasi 1% dan suku bunga nominal 1%"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Data Riil: Suku Bunga dan Inflasi Indonesia 2026",
      "text": "Pada 9 Juni 2026, Bank Indonesia menaikkan BI-Rate menjadi 5,50% untuk memperkuat stabilisasi rupiah. Pada 18 Juni 2026, BI kembali menaikkan BI-Rate sebesar 25 bps menjadi 5,75%. Inflasi Mei 2026 tercatat 3,08% (yoy), masih dalam sasaran 2,5±1%. Dengan pendekatan ex-post sederhana, suku bunga riil berdasarkan posisi 18 Juni kira-kira 5,75% − 3,08% = 2,67%. Angka ini hanya ilustrasi karena persamaan Fisher yang berorientasi ke depan menggunakan inflasi ekspektasian, bukan semata-mata inflasi aktual bulan sebelumnya."
    },
    {
      "kind": "p",
      "text": "Sumber: Bank Indonesia (RDG 9 dan 17–18 Juni 2026); BPS (rilis inflasi 2 Juni 2026)."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Kaitan ke inflation tax",
      "text": "jika inflasi ternyata lebih tinggi daripada yang diperkirakan saat kontrak dibuat, penabung dirugikan karena suku bunga riil yang diterima menjadi lebih kecil, sedangkan peminjam diuntungkan. Inilah salah satu alasan inflasi yang tidak terduga mengganggu keadilan kontrak."
    }
  ]
};

const tm12: Reading = {
  "tm": 12,
  "title": "Perekonomian Terbuka",
  "ref": "Kontrak: 1(23), 2(29,30) · Substansi: Samuelson Ch.27–28; Mankiw Ch.31–32",
  "intro": "Menghubungkan perdagangan, arus modal, tabungan-investasi, nilai tukar, neraca pembayaran, dan shock eksternal dalam satu kerangka makro terbuka.",
  "objectives": [
    "Membedakan keunggulan absolut dan komparatif.",
    "Menjelaskan current account, financial account, NX, dan NCO.",
    "Menginterpretasikan nilai tukar nominal dan riil.",
    "Menganalisis depresiasi, apresiasi, kebijakan perdagangan, dan shock global."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Konsep Ekonomi Terbuka"
    },
    {
      "kind": "p",
      "text": "Perekonomian terbuka memasukkan perdagangan internasional dan arus modal internasional ke dalam analisis makro. Dalam ekonomi terbuka, output domestik tidak hanya dipengaruhi konsumsi, investasi, dan belanja pemerintah, tetapi juga ekspor neto serta pergerakan nilai tukar dan modal lintas negara."
    },
    {
      "kind": "formula",
      "text": "Identitas Pengeluaran Ekonomi Terbuka\n\nY = C + I + G + NX\n\nNX = exports − imports"
    },
    {
      "kind": "ul",
      "items": [
        "**Ekspor:** Barang/jasa domestik yang dibeli asing. Ekspor menambah permintaan terhadap output domestik.",
        "**Impor:** Barang/jasa asing yang dibeli domestik. Impor dikurangkan dari GDP karena bukan produksi domestik.",
        "**Trade balance:** NX positif = surplus dagang; NX negatif = defisit dagang."
      ]
    },
    {
      "kind": "h2",
      "text": "Keunggulan Komparatif dan Dasar Perdagangan"
    },
    {
      "kind": "p",
      "text": "Sebelum membahas neraca pembayaran dan kurs, ada pertanyaan dasar yang perlu dijawab: mengapa negara berdagang? Jawabannya adalah keunggulan komparatif. Ricardo (1817) menunjukkan bahwa perdagangan menguntungkan bukan karena satu negara lebih hebat dalam segala hal, melainkan karena tiap negara berkorban lebih sedikit untuk memproduksi barang tertentu."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Absolute advantage",
      "text": "adalah kemampuan memproduksi suatu barang dengan input lebih sedikit. **Comparative advantage** adalah kemampuan memproduksi suatu barang dengan biaya peluang lebih rendah. Dasar perdagangan adalah comparative advantage, bukan absolute advantage."
    },
    {
      "kind": "p",
      "text": "Misalkan dua negara memproduksi beras dan kain. Tabel berikut menunjukkan jam kerja untuk memproduksi 1 unit dan biaya peluangnya:"
    },
    {
      "kind": "table",
      "headers": [
        "Jam kerja per 1 unit",
        "Beras",
        "Kain",
        "Biaya peluang 1 Beras",
        "Biaya peluang 1 Kain"
      ],
      "rows": [
        [
          "Negara A",
          "2 jam",
          "4 jam",
          "0,5 Kain",
          "2 Beras"
        ],
        [
          "Negara B",
          "5 jam",
          "5 jam",
          "1 Kain",
          "1 Beras"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Negara A lebih efisien pada kedua barang, jadi A punya absolute advantage di beras dan kain. Namun yang menentukan arah perdagangan adalah biaya peluang. Untuk beras, biaya peluang Negara A (0,5 kain) lebih rendah daripada Negara B (1 kain), jadi A punya comparative advantage di beras. Untuk kain, biaya peluang Negara B (1 beras) lebih rendah daripada Negara A (2 beras), jadi B punya comparative advantage di kain."
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Kesimpulan",
      "text": "Negara A sebaiknya berspesialisasi pada beras dan Negara B pada kain, lalu saling berdagang. Keduanya untung selama nilai tukar dagang untuk 1 kain berada di antara 1 dan 2 beras. Walaupun A unggul mutlak pada kedua barang, spesialisasi sesuai keunggulan komparatif tetap menaikkan total output dan kesejahteraan kedua negara."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Jebakan ujian",
      "text": "jangan menyimpulkan negara yang unggul di segala hal tidak perlu berdagang. Selama biaya peluangnya berbeda, perdagangan tetap menguntungkan. Absolute advantage menjawab \"siapa lebih efisien\"; comparative advantage menjawab \"siapa sebaiknya memproduksi apa\"."
    },
    {
      "kind": "h2",
      "text": "Balance of Payments"
    },
    {
      "kind": "p",
      "text": "Neraca pembayaran mencatat transaksi ekonomi antara penduduk suatu negara dengan penduduk negara lain. Prinsip dasarnya adalah double-entry accounting, sehingga secara akuntansi transaksi internasional selalu memiliki pasangan pencatatan."
    },
    {
      "kind": "table",
      "headers": [
        "Komponen",
        "Isi",
        "Contoh"
      ],
      "rows": [
        [
          "Current account",
          "Transaksi barang, jasa, pendapatan primer, dan transfer berjalan.",
          "Ekspor barang, impor jasa, remitansi, dividen dari luar negeri."
        ],
        [
          "Financial account",
          "Transaksi aset finansial lintas negara.",
          "Investasi portofolio, FDI, pembelian obligasi asing."
        ],
        [
          "Capital account",
          "Transfer modal dan transaksi aset nonproduksi nonfinansial.",
          "Penghapusan utang, hak paten tertentu."
        ],
        [
          "Official reserves",
          "Perubahan cadangan devisa otoritas moneter.",
          "Intervensi bank sentral di pasar valas."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Jebakan",
      "text": "defisit transaksi berjalan bukan otomatis “buruk”. Ia bisa mencerminkan investasi domestik tinggi yang dibiayai modal asing. Masalah muncul jika pembiayaan rapuh, produktivitas rendah, atau utang valas tidak terkendali."
    },
    {
      "kind": "h2",
      "text": "NX, NCO, dan Saving-Investment"
    },
    {
      "kind": "p",
      "text": "Dalam ekonomi terbuka, tabungan nasional tidak harus sama dengan investasi domestik. Selisihnya mengalir ke luar negeri sebagai net capital outflow atau justru masuk dari luar negeri sebagai pembiayaan defisit."
    },
    {
      "kind": "figure",
      "title": "Peta Identitas S, I, NX, dan NCO",
      "svg": "<svg data-graph-id=\"PTE-FLOW-06\" viewBox=\"0 0 920 190\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Identitas ekonomi terbuka</title><desc>Tabungan nasional S menuju Dikurangi investasi domestik I menuju Sisa menjadi NX menuju Selisih yang sama adalah NCO menuju NX sama dengan NCO</desc><defs><marker id=\"arrow-PTE-FLOW-06\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"#94a3b8\"/></marker></defs><rect x=\"31.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"106.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"106.0\" dy=\"0\">Tabungan nasional S</tspan></text><line x1=\"185.0\" y1=\"97.0\" x2=\"203.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-06)\"/><rect x=\"208.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"283.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"283.0\" dy=\"0\">Dikurangi investasi</tspan><tspan x=\"283.0\" dy=\"18\">domestik I</tspan></text><line x1=\"362.0\" y1=\"97.0\" x2=\"380.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-06)\"/><rect x=\"385.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"460.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"460.0\" dy=\"0\">Sisa menjadi NX</tspan></text><line x1=\"539.0\" y1=\"97.0\" x2=\"557.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-06)\"/><rect x=\"562.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"637.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"637.0\" dy=\"0\">Selisih yang sama</tspan><tspan x=\"637.0\" dy=\"18\">adalah NCO</tspan></text><line x1=\"716.0\" y1=\"97.0\" x2=\"734.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-06)\"/><rect x=\"739.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"814.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"814.0\" dy=\"0\">NX sama dengan NCO</tspan></text></svg>",
      "caption": "Jika S > I, negara memiliki NX dan NCO positif. Jika S < I, investasi domestik dibiayai arus modal masuk dan NX negatif.",
      "altText": "Diagram identitas ekonomi terbuka: tabungan nasional dikurangi investasi domestik sama dengan ekspor neto dan net capital outflow, sehingga NX sama dengan NCO."
    },
    {
      "kind": "formula",
      "text": "Identitas Ekonomi Terbuka\n\nY = C + I + G + NX\n\nS = Y − C − G\n\nS = I + NX\n\nNX = S − I\n\nNet capital outflow (NCO) = S − I\n\nMaka: NX = NCO"
    },
    {
      "kind": "table",
      "headers": [
        "Kondisi",
        "Artinya",
        "Interpretasi"
      ],
      "rows": [
        [
          "S > I",
          "NX positif dan NCO positif.",
          "Negara menabung lebih dari kebutuhan investasi domestik; dana keluar dan neraca dagang surplus."
        ],
        [
          "S < I",
          "NX negatif dan NCO negatif.",
          "Investasi domestik melebihi tabungan nasional; negara menarik modal asing dan mengalami defisit dagang."
        ],
        [
          "S = I",
          "NX = 0.",
          "Tabungan nasional cukup membiayai investasi domestik."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Nilai Tukar Nominal & Riil"
    },
    {
      "kind": "p",
      "text": "Nilai tukar nominal adalah harga relatif mata uang. Nilai tukar riil adalah harga relatif barang antarnegara setelah memperhitungkan tingkat harga. Nilai tukar riil lebih relevan untuk daya saing ekspor-impor."
    },
    {
      "kind": "formula",
      "text": "Nilai Tukar\n\nNominal exchange rate: jumlah mata uang asing per 1 unit mata uang domestik, atau sebaliknya tergantung konvensi\n\nReal exchange rate = (nominal exchange rate × domestic price) / foreign price\n\nReal exchange rate naik → barang domestik relatif lebih mahal → ekspor cenderung turun, impor cenderung naik"
    },
    {
      "kind": "ul",
      "items": [
        "**Appreciation:** Mata uang domestik menguat. Impor lebih murah, ekspor cenderung kurang kompetitif.",
        "**Depreciation:** Mata uang domestik melemah. Ekspor cenderung lebih kompetitif, impor lebih mahal dan dapat menekan inflasi impor."
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Konvensi nilai tukar",
      "text": "dalam catatan ini, nilai tukar riil = e × P/P*, dengan e = jumlah mata uang asing per 1 unit mata uang domestik. Dengan konvensi ini, nilai tukar riil naik berarti barang domestik relatif lebih mahal. Hati-hati: kuotasi sehari-hari di Indonesia justru memakai rupiah per dolar (Rp/USD), sehingga angka yang naik berarti rupiah melemah (depresiasi). Saat menjawab soal, sebut dulu konvensi yang dipakai agar arah apresiasi/depresiasi tidak terbalik."
    },
    {
      "kind": "example",
      "title": "Contoh hitung nilai tukar riil",
      "blocks": [
        {
          "kind": "p",
          "text": "Misal sepasang sepatu seharga Rp600.000 di Indonesia dan USD40 di AS, dengan kurs Rp15.000 per USD. Harga sepatu AS dalam rupiah = 40 × 15.000 = Rp600.000, sehingga harga relatifnya setara (nilai tukar riil = 600.000 / 600.000 = 1). Jika rupiah melemah menjadi Rp17.000 per USD, harga sepatu AS dalam rupiah = 40 × 17.000 = Rp680.000. Sekarang sepatu Indonesia (Rp600.000) lebih murah daripada sepatu AS (Rp680.000), sehingga ekspor Indonesia lebih kompetitif dan impor lebih mahal. Inilah alasan depresiasi cenderung memperbaiki neraca dagang, walau dapat menaikkan inflasi impor."
        }
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Data Riil: Kurs Rupiah 2026",
      "text": "Pada periode April–Juni 2026, rupiah mengalami tekanan dan pada awal Juni kurs acuan JISDOR telah menembus Rp18.000 per dolar AS; JISDOR tercatat Rp18.141 per dolar AS pada 9 Juni 2026. Pelemahan rupiah dapat menaikkan harga barang impor, biaya input berdenominasi valuta asing, dan beban utang valas. Bank Indonesia menaikkan BI-Rate menjadi 5,50% pada 9 Juni dan kembali menjadi 5,75% pada 18 Juni 2026 sebagai bagian dari penguatan stabilisasi nilai tukar dan pengendalian inflasi."
    },
    {
      "kind": "p",
      "text": "Sumber: Bank Indonesia, Statistik JISDOR observasi 9 Juni 2026 dan siaran pers RDG Juni 2026."
    },
    {
      "kind": "h2",
      "text": "Purchasing Power Parity dan Pasar Valas"
    },
    {
      "kind": "p",
      "text": "Purchasing Power Parity (PPP) menyatakan bahwa satu unit mata uang seharusnya memiliki daya beli yang sama di berbagai negara setelah dikonversi dengan nilai tukar. Basisnya adalah law of one price. Dalam jangka panjang, negara dengan inflasi lebih tinggi cenderung mengalami depresiasi mata uang."
    },
    {
      "kind": "formula",
      "text": "PPP Intuitif\n\nJika P_domestik naik lebih cepat daripada P_luar negeri, mata uang domestik cenderung terdepresiasi dalam jangka panjang.\n\nApproximation: %ΔE ≈ π_domestik − π_luar negeri\n\nE = nilai tukar mata uang domestik per unit mata uang asing (mis. Rp per USD); E naik berarti depresiasi"
    },
    {
      "kind": "p",
      "text": "PPP berguna sebagai jangkar jangka panjang, tetapi sering meleset dalam jangka pendek karena biaya transportasi, hambatan perdagangan, barang nontradable, perbedaan kualitas, intervensi, ekspektasi, dan arus modal finansial."
    },
    {
      "kind": "table",
      "headers": [
        "Faktor",
        "Dampak terhadap nilai tukar"
      ],
      "rows": [
        [
          "Inflasi domestik relatif tinggi",
          "Tekanan depresiasi jangka panjang."
        ],
        [
          "Suku bunga domestik naik",
          "Dapat menarik modal dan menguatkan mata uang, tetapi tergantung risiko dan ekspektasi inflasi."
        ],
        [
          "Ekspor naik",
          "Permintaan mata uang domestik naik."
        ],
        [
          "Risiko politik/keuangan naik",
          "Modal keluar dan mata uang melemah."
        ],
        [
          "Produktivitas naik",
          "Daya saing membaik dan dapat mendukung penguatan fundamental."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Kebijakan dan Shock dalam Ekonomi Terbuka"
    },
    {
      "kind": "p",
      "text": "Kebijakan makro dalam ekonomi terbuka tidak hanya memengaruhi output domestik, tetapi juga nilai tukar, arus modal, dan neraca perdagangan. Karena itu, efek kebijakan bergantung pada rezim kurs, mobilitas modal, ekspektasi investor, dan kondisi eksternal."
    },
    {
      "kind": "figure",
      "title": "Shock Nilai Tukar dan Respons Ekonomi Terbuka",
      "svg": "<svg data-graph-id=\"PTE-FLOW-03B\" viewBox=\"0 0 920 235\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Shock nilai tukar</title><desc>Modal keluar atau sentimen memburuk menuju Kurs domestik melemah menuju Harga impor dan beban valas naik menuju Inflasi naik dan permintaan domestik melemah menuju Ekspor dapat membaik setelah jeda. Kebijakan perlu menimbang stabilitas kurs, inflasi, pertumbuhan, cadangan devisa, dan risiko sektor berutang valas.</desc><defs><marker id=\"arrow-PTE-FLOW-03B\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"#94a3b8\"/></marker></defs><rect x=\"31.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"106.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"106.0\" dy=\"0\">Modal keluar atau</tspan><tspan x=\"106.0\" dy=\"18\">sentimen memburuk</tspan></text><line x1=\"185.0\" y1=\"97.0\" x2=\"203.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03B)\"/><rect x=\"208.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"283.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"283.0\" dy=\"0\">Kurs domestik melemah</tspan></text><line x1=\"362.0\" y1=\"97.0\" x2=\"380.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03B)\"/><rect x=\"385.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"460.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"460.0\" dy=\"0\">Harga impor dan beban</tspan><tspan x=\"460.0\" dy=\"18\">valas naik</tspan></text><line x1=\"539.0\" y1=\"97.0\" x2=\"557.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03B)\"/><rect x=\"562.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"637.0\" y=\"79.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"637.0\" dy=\"0\">Inflasi naik dan</tspan><tspan x=\"637.0\" dy=\"18\">permintaan domestik</tspan><tspan x=\"637.0\" dy=\"18\">melemah</tspan></text><line x1=\"716.0\" y1=\"97.0\" x2=\"734.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03B)\"/><rect x=\"739.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"814.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"814.0\" dy=\"0\">Ekspor dapat membaik</tspan><tspan x=\"814.0\" dy=\"18\">setelah jeda</tspan></text><rect x=\"110\" y=\"165\" width=\"700\" height=\"45\" rx=\"12\" fill=\"#0b1220\" stroke=\"#64748b\" stroke-dasharray=\"5 4\"/><text x=\"460\" y=\"193\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"13\" font-family=\"system-ui, sans-serif\">Kebijakan perlu menimbang stabilitas kurs, inflasi, pertumbuhan, cadangan devisa, dan risiko sektor berutang valas.</text></svg>",
      "caption": "Shock kurs memengaruhi perekonomian melalui harga impor, neraca perusahaan, arus modal, ekspor, dan ekspektasi.",
      "altText": "Diagram alur modal keluar menuju pelemahan kurs, kenaikan harga impor dan beban valuta asing, kenaikan inflasi dan pelemahan permintaan domestik, serta kemungkinan perbaikan ekspor setelah jeda."
    },
    {
      "kind": "table",
      "headers": [
        "Kebijakan/Shock",
        "Efek utama",
        "Catatan analitis"
      ],
      "rows": [
        [
          "Defisit fiskal naik",
          "Tabungan nasional turun; S−I turun; NX cenderung turun.",
          "Bisa menimbulkan twin deficits jika defisit anggaran beriringan dengan defisit transaksi berjalan."
        ],
        [
          "Tarif/impor dibatasi",
          "Impor turun langsung, tetapi nilai tukar riil dapat menyesuaikan.",
          "Proteksi tidak otomatis memperbaiki neraca dagang jangka panjang."
        ],
        [
          "Capital inflow besar",
          "Mata uang menguat, pembiayaan investasi meningkat.",
          "Risiko sudden stop jika arus modal berbalik."
        ],
        [
          "Depresiasi kurs",
          "Ekspor lebih murah, impor lebih mahal.",
          "Dapat memperbaiki NX jika elastisitas ekspor-impor cukup tinggi, tetapi menaikkan inflasi impor."
        ],
        [
          "Resesi global",
          "Permintaan ekspor turun.",
          "Negara terbuka lebih rentan terhadap shock eksternal."
        ]
      ]
    },
    {
      "kind": "formula",
      "text": "Open Economy Multiplier Sederhana\n\nk_open = 1/(1 − MPC + MPM)\n\nDengan pajak proporsional: k = 1/[1 − MPC(1−t) + MPM]\n\nMPM = marginal propensity to import"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Mengapa multiplier terbuka lebih kecil?",
      "text": "sebagian tambahan pendapatan dibelanjakan untuk impor, sehingga “bocor” dari sirkulasi pendapatan domestik."
    }
  ]
};

const tm13: Reading = {
  "tm": 13,
  "title": "Inflasi dan Pengangguran",
  "ref": "Kontrak: 1(22), 2(33,34) · Substansi: Samuelson Ch.29–30; Mankiw Ch.24, Ch.28, Ch.30, Ch.33–35",
  "intro": "Menganalisis inflasi, pengangguran, siklus ekonomi, AS-AD, output gap, Okun, dan Phillips Curve dalam jangka pendek maupun panjang.",
  "objectives": [
    "Mengukur inflasi dan tingkat pengangguran.",
    "Membedakan demand-pull dan cost-push inflation.",
    "Menganalisis keseimbangan AS-AD dan output gap.",
    "Menjelaskan Phillips Curve jangka pendek dan jangka panjang."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Inflasi: Definisi, Ukuran, dan Penyebab"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Inflasi",
      "text": "adalah kenaikan tingkat harga umum secara berkelanjutan. Kenaikan harga satu atau dua barang bukan inflasi jika tidak mencerminkan kenaikan harga secara umum."
    },
    {
      "kind": "figure",
      "title": "Demand-Pull vs Cost-Push Inflation",
      "svg": "<svg data-graph-id=\"PTE-GRAPH-07\" viewBox=\"0 0 920 340\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<title>Demand-pull dibandingkan cost-push</title><desc>Dua panel AS-AD. Panel kiri menunjukkan AD bergeser ke kanan sehingga harga dan output naik. Panel kanan menunjukkan SRAS bergeser ke kiri sehingga harga naik tetapi output turun.</desc>\n<defs><marker id=\"pte-asad-arrow\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"#f9a825\"/></marker></defs>\n<text x=\"230\" y=\"27\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"16\" font-weight=\"700\">Demand-pull inflation</text>\n<text x=\"690\" y=\"27\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"16\" font-weight=\"700\">Cost-push inflation</text>\n<g transform=\"translate(25,38)\"><line x1=\"45\" y1=\"245\" x2=\"405\" y2=\"245\" stroke=\"#64748b\"/><line x1=\"45\" y1=\"245\" x2=\"45\" y2=\"20\" stroke=\"#64748b\"/><text x=\"392\" y=\"267\" fill=\"#94a3b8\">Y</text><text x=\"18\" y=\"25\" fill=\"#94a3b8\">P</text><line x1=\"90\" y1=\"210\" x2=\"345\" y2=\"55\" stroke=\"#22d3a0\" stroke-width=\"2.5\"/><text x=\"348\" y=\"55\" fill=\"#22d3a0\">SRAS</text><line x1=\"85\" y1=\"65\" x2=\"350\" y2=\"215\" stroke=\"#4f9cf9\" stroke-width=\"2.5\"/><text x=\"353\" y=\"218\" fill=\"#4f9cf9\">AD₁</text><line x1=\"130\" y1=\"55\" x2=\"395\" y2=\"205\" stroke=\"#f4516c\" stroke-width=\"2.5\" stroke-dasharray=\"7 4\"/><text x=\"373\" y=\"198\" fill=\"#f4516c\">AD₂</text><line x1=\"238\" y1=\"142\" x2=\"278\" y2=\"122\" stroke=\"#f9a825\" stroke-width=\"2\" marker-end=\"url(#pte-asad-arrow)\"/><text x=\"185\" y=\"292\" fill=\"#cbd5e1\" font-size=\"12\">AD kanan → P naik, Y naik</text></g>\n<g transform=\"translate(485,38)\"><line x1=\"45\" y1=\"245\" x2=\"405\" y2=\"245\" stroke=\"#64748b\"/><line x1=\"45\" y1=\"245\" x2=\"45\" y2=\"20\" stroke=\"#64748b\"/><text x=\"392\" y=\"267\" fill=\"#94a3b8\">Y</text><text x=\"18\" y=\"25\" fill=\"#94a3b8\">P</text><line x1=\"85\" y1=\"65\" x2=\"350\" y2=\"215\" stroke=\"#4f9cf9\" stroke-width=\"2.5\"/><text x=\"353\" y=\"218\" fill=\"#4f9cf9\">AD</text><line x1=\"90\" y1=\"210\" x2=\"345\" y2=\"55\" stroke=\"#22d3a0\" stroke-width=\"2.5\"/><text x=\"348\" y=\"55\" fill=\"#22d3a0\">SRAS₁</text><line x1=\"45\" y1=\"205\" x2=\"300\" y2=\"50\" stroke=\"#f4516c\" stroke-width=\"2.5\" stroke-dasharray=\"7 4\"/><text x=\"303\" y=\"50\" fill=\"#f4516c\">SRAS₂</text><line x1=\"228\" y1=\"132\" x2=\"188\" y2=\"112\" stroke=\"#f9a825\" stroke-width=\"2\" marker-end=\"url(#pte-asad-arrow)\"/><text x=\"165\" y=\"292\" fill=\"#cbd5e1\" font-size=\"12\">SRAS kiri → P naik, Y turun</text></g></svg>",
      "caption": "Demand-pull menggeser AD ke kanan sehingga P dan Y naik. Cost-push menggeser SRAS ke kiri sehingga P naik tetapi Y turun, yaitu stagflasi.",
      "altText": "Dua grafik AS-AD. Panel demand-pull menunjukkan AD bergeser ke kanan sehingga harga dan output naik. Panel cost-push menunjukkan SRAS bergeser ke kiri sehingga harga naik dan output turun."
    },
    {
      "kind": "formula",
      "text": "Rumus Inflasi\n\nInflation rate = [(Price Index_t − Price Index_{t−1}) / Price Index_{t−1}] × 100%"
    },
    {
      "kind": "table",
      "headers": [
        "Jenis Inflasi",
        "Penjelasan",
        "Contoh logika"
      ],
      "rows": [
        [
          "Demand-pull inflation",
          "Permintaan agregat terlalu tinggi dibanding kapasitas output.",
          "G naik besar, kredit mudah, konsumsi melonjak."
        ],
        [
          "Cost-push inflation",
          "Biaya produksi naik sehingga AS bergeser kiri.",
          "Harga energi, upah, bahan baku impor naik."
        ],
        [
          "Built-in/expected inflation",
          "Inflasi dipertahankan oleh ekspektasi dan penyesuaian upah-harga.",
          "Pekerja meminta kenaikan upah karena memperkirakan harga naik."
        ],
        [
          "Monetary inflation",
          "Jumlah uang beredar tumbuh lebih cepat daripada output riil jangka panjang.",
          "Pertumbuhan M jauh melebihi pertumbuhan Y."
        ],
        [
          "Imported inflation",
          "Harga impor naik akibat depresiasi kurs atau kenaikan harga luar negeri.",
          "Depresiasi rupiah membuat bahan baku impor lebih mahal."
        ]
      ]
    },
    {
      "kind": "ul",
      "items": [
        "**Headline inflation:** Inflasi umum seluruh keranjang konsumsi, termasuk komponen volatil.",
        "**Core inflation:** Inflasi inti, biasanya mengecualikan komponen sangat volatil atau administered price.",
        "**GDP deflator inflation:** Inflasi berbasis harga barang/jasa yang diproduksi domestik."
      ]
    },
    {
      "kind": "h2",
      "text": "Biaya Inflasi"
    },
    {
      "kind": "p",
      "text": "Inflasi rendah dan stabil biasanya masih dapat dikelola. Masalah besar muncul ketika inflasi tinggi, tidak stabil, dan tidak terprediksi. Inflasi yang tidak terantisipasi mengganggu kontrak, redistribusi pendapatan, keputusan investasi, dan kepercayaan terhadap uang."
    },
    {
      "kind": "ul",
      "items": [
        "**Shoe-leather cost:** biaya mengurangi saldo kas ketika inflasi tinggi, misalnya lebih sering memindahkan dana ke aset berbunga.",
        "**Menu cost:** biaya mengganti daftar harga, katalog, sistem kasir, dan kontrak.",
        "**Relative price distortion:** harga tidak naik serentak, sehingga sinyal harga menjadi kabur.",
        "**Tax distortion:** inflasi dapat memperbesar beban pajak nominal dan mengganggu perhitungan laba riil.",
        "**Confusion and inconvenience:** uang sebagai satuan hitung menjadi kurang stabil.",
        "**Arbitrary redistribution:** kreditur dan debitur terdampak berbeda jika inflasi aktual berbeda dari inflasi yang diharapkan.",
        "**Uncertainty:** inflasi tidak stabil meningkatkan risiko, menurunkan investasi jangka panjang."
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Inflation tax",
      "text": "pemerintah yang membiayai belanja melalui penciptaan uang pada dasarnya mengambil daya beli masyarakat melalui penurunan nilai uang."
    },
    {
      "kind": "h2",
      "text": "Pengangguran"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Pengangguran",
      "text": "adalah kondisi ketika seseorang termasuk angkatan kerja, tidak bekerja, sedang mencari pekerjaan, dan tersedia untuk bekerja. Tidak semua orang yang tidak bekerja dihitung sebagai penganggur."
    },
    {
      "kind": "formula",
      "text": "Rumus Tenaga Kerja\n\nLabor force = employed + unemployed\n\nUnemployment rate = unemployed/labor force × 100%\n\nLabor force participation rate = labor force/adult population × 100%"
    },
    {
      "kind": "table",
      "headers": [
        "Jenis Pengangguran",
        "Sumber Masalah",
        "Kebijakan yang cocok"
      ],
      "rows": [
        [
          "Frictional",
          "Waktu pencarian kerja dan pencocokan pekerja-perusahaan.",
          "Informasi pasar kerja, pelatihan pencarian kerja, job matching."
        ],
        [
          "Structural",
          "Ketidaksesuaian skill/lokasi/struktur industri.",
          "Pendidikan, reskilling, mobilitas tenaga kerja, reformasi industri."
        ],
        [
          "Cyclical",
          "Permintaan agregat lemah saat resesi.",
          "Kebijakan fiskal/moneter ekspansif."
        ],
        [
          "Seasonal",
          "Pola musim tertentu.",
          "Diversifikasi pekerjaan dan perlindungan pendapatan musiman."
        ],
        [
          "Classical/real-wage",
          "Upah riil di atas tingkat ekuilibrium.",
          "Evaluasi rigiditas upah, produktivitas, dan institusi pasar kerja."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Jebakan",
      "text": "orang yang berhenti mencari kerja karena putus asa bisa keluar dari angkatan kerja, sehingga tingkat pengangguran resmi dapat turun meskipun kondisi pasar kerja belum benar-benar membaik."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Data Riil: Pengangguran Indonesia 2026",
      "text": "Per Februari 2026, BPS mencatat Tingkat Pengangguran Terbuka (TPT) sebesar 4,68%, turun 0,08 poin dibanding Februari 2025. Dari angkatan kerja 154,91 juta orang, sekitar 147,67 juta bekerja dan 7,24 juta menganggur. Penyerapan tenaga kerja masih didominasi pertanian, perdagangan, serta industri. Angka ini lahir dari rumus tingkat pengangguran = penganggur / angkatan kerja × 100% = 7,24 / 154,91 × 100% ≈ 4,67% (selisih kecil dari angka resmi 4,68% karena pembulatan).\n\n*Snapshot resmi: BPS, rilis ketenagakerjaan Februari 2026.*"
    },
    {
      "kind": "p",
      "text": "Sumber: BPS, Berita Resmi Statistik (rilis 5 Mei 2026)."
    },
    {
      "kind": "h2",
      "text": "AS-AD dan Siklus Ekonomi"
    },
    {
      "kind": "figure",
      "title": "AS-AD: ekuilibrium jangka pendek dan jangka panjang",
      "svg": "<svg data-graph-id=\"PTE-GRAPH-04\" font-family=\"DM Sans, sans-serif\" style=\"max-width:560px;margin:0 auto;display:block\" viewBox=\"0 0 380 270\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><title>AS-AD: ekuilibrium jangka pendek dan jangka panjang</title><desc>Grafik permintaan dan penawaran agregat dengan output riil pada sumbu horizontal dan tingkat harga pada sumbu vertikal. AD menurun, SRAS menanjak, dan LRAS vertikal pada output potensial.</desc><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"355\" y1=\"235\" y2=\"235\"></line><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"55\" y1=\"235\" y2=\"20\"></line><text fill=\"#9aa4b7\" font-size=\"11\" x=\"40\" y=\"26\">P</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"338\" y=\"251\">Y</text><line stroke=\"#f9a825\" stroke-width=\"2.2\" x1=\"200\" x2=\"200\" y1=\"40\" y2=\"235\"></line><text fill=\"#f9a825\" font-size=\"10\" x=\"180\" y=\"34\">LRAS</text><line stroke=\"#22d3a0\" stroke-width=\"2.3\" x1=\"90\" x2=\"320\" y1=\"200\" y2=\"74\"></line><text fill=\"#22d3a0\" font-size=\"10\" x=\"322\" y=\"72\">SRAS</text><line stroke=\"#4f9cf9\" stroke-width=\"2.3\" x1=\"90\" x2=\"320\" y1=\"74\" y2=\"212\"></line><text fill=\"#4f9cf9\" font-size=\"10\" x=\"324\" y=\"214\">AD</text><line stroke=\"#f9a825\" stroke-dasharray=\"3,3\" stroke-width=\"0.8\" x1=\"55\" x2=\"200\" y1=\"140\" y2=\"140\"></line><line opacity=\"0.7\" stroke=\"#f9a825\" stroke-dasharray=\"3,3\" stroke-width=\"0.8\" x1=\"200\" x2=\"200\" y1=\"140\" y2=\"235\"></line><circle cx=\"200\" cy=\"140\" fill=\"#f9a825\" r=\"3.8\"></circle><text fill=\"#f9a825\" font-size=\"10\" x=\"34\" y=\"143\">P*</text><text fill=\"#f9a825\" font-size=\"10\" x=\"186\" y=\"250\">Yp</text></svg>",
      "caption": "AD menurun, SRAS menanjak, dan LRAS tegak pada output potensial Yp. Perpotongan AD dan SRAS menentukan tingkat harga dan output jangka pendek.",
      "altText": "Grafik permintaan dan penawaran agregat dengan output riil pada sumbu horizontal dan tingkat harga pada sumbu vertikal. AD menurun, SRAS menanjak, dan LRAS vertikal pada output potensial."
    },
    {
      "kind": "p",
      "text": "Model aggregate demand dan aggregate supply menjelaskan fluktuasi output dan harga dalam jangka pendek. AD menunjukkan hubungan antara tingkat harga dan jumlah output yang diminta. SRAS menunjukkan hubungan antara tingkat harga dan output yang ditawarkan dalam jangka pendek ketika sebagian harga/upah kaku. LRAS vertikal pada output potensial karena jangka panjang ditentukan oleh faktor riil."
    },
    {
      "kind": "table",
      "headers": [
        "Kurva",
        "Kemiringan",
        "Penyebab perubahan"
      ],
      "rows": [
        [
          "AD",
          "Menurun",
          "Wealth effect, interest-rate effect, exchange-rate effect."
        ],
        [
          "SRAS",
          "Menaik",
          "Upah/harga kaku, misperception, kontrak nominal."
        ],
        [
          "LRAS",
          "Vertikal",
          "Output potensial ditentukan tenaga kerja, modal, sumber daya, teknologi, institusi."
        ]
      ]
    },
    {
      "kind": "formula",
      "text": "Okun's Law sederhana\n\nGDP gap (%) ≈ −2 × (u − u_n)\n\nJika pengangguran aktual 2 poin di atas natural rate, output kira-kira 4% di bawah potensial."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Catatan",
      "text": "koefisien Okun bukan hukum alam yang tetap. Nilainya dapat berbeda antarnegara dan periode, sehingga gunakan sebagai pendekatan, bukan angka pasti."
    },
    {
      "kind": "h2",
      "text": "Phillips Curve"
    },
    {
      "kind": "figure",
      "title": "Phillips Curve: trade-off jangka pendek vs tegak jangka panjang",
      "svg": "<svg data-graph-id=\"PTE-GRAPH-05\" font-family=\"DM Sans, sans-serif\" style=\"max-width:560px;margin:0 auto;display:block\" viewBox=\"0 0 380 270\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><title>Phillips Curve: trade-off jangka pendek vs tegak jangka panjang</title><desc>Grafik kurva Phillips dengan pengangguran pada sumbu horizontal dan inflasi pada sumbu vertikal. Kurva jangka pendek menurun, sedangkan kurva jangka panjang vertikal pada tingkat pengangguran alami.</desc><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"355\" y1=\"235\" y2=\"235\"></line><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"55\" y1=\"235\" y2=\"20\"></line><text fill=\"#9aa4b7\" font-size=\"11\" x=\"36\" y=\"26\">π</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"338\" y=\"251\">u</text><line stroke=\"#f9a825\" stroke-width=\"2.2\" x1=\"190\" x2=\"190\" y1=\"40\" y2=\"235\"></line><text fill=\"#f9a825\" font-size=\"10\" x=\"196\" y=\"40\">LRPC</text><line stroke=\"#4f9cf9\" stroke-width=\"2.3\" x1=\"80\" x2=\"320\" y1=\"70\" y2=\"205\"></line><text fill=\"#4f9cf9\" font-size=\"10\" x=\"300\" y=\"218\">SRPC</text><circle cx=\"190\" cy=\"132\" fill=\"#22d3a0\" r=\"3.8\"></circle><text fill=\"#f9a825\" font-size=\"10\" x=\"172\" y=\"250\">uₙ</text></svg>",
      "caption": "SRPC menunjukkan trade-off jangka pendek antara inflasi dan pengangguran. LRPC tegak pada tingkat pengangguran alami sehingga trade-off tersebut tidak permanen.",
      "altText": "Grafik kurva Phillips dengan pengangguran pada sumbu horizontal dan inflasi pada sumbu vertikal. Kurva jangka pendek menurun, sedangkan kurva jangka panjang vertikal pada tingkat pengangguran alami."
    },
    {
      "kind": "p",
      "text": "Phillips Curve menjelaskan hubungan jangka pendek antara inflasi dan pengangguran. Ketika permintaan agregat kuat, output naik dan pengangguran turun, tetapi tekanan harga naik. Dalam jangka panjang, trade-off ini melemah karena ekspektasi inflasi menyesuaikan."
    },
    {
      "kind": "formula",
      "text": "Expectations-Augmented Phillips Curve\n\nπ = π^e − β(u − u_n) + v\n\nπ = inflasi aktual; π^e = inflasi ekspektasian; u = pengangguran aktual; u_n = natural rate; v = supply shock"
    },
    {
      "kind": "table",
      "headers": [
        "Peristiwa",
        "Dampak pada Phillips Curve"
      ],
      "rows": [
        [
          "AD ekspansif",
          "Bergerak sepanjang SR Phillips Curve: inflasi naik, pengangguran turun."
        ],
        [
          "Ekspektasi inflasi naik",
          "SR Phillips Curve bergeser ke atas."
        ],
        [
          "Supply shock negatif",
          "Inflasi naik dan pengangguran naik; stagflation."
        ],
        [
          "Kredibilitas anti-inflasi meningkat",
          "Ekspektasi inflasi bisa turun, biaya disinflasi lebih rendah."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Kebijakan Anti-Inflasi & Pengangguran"
    },
    {
      "kind": "p",
      "text": "Kebijakan makro harus membedakan penyebab masalah. Pengangguran siklis akibat permintaan lemah dapat ditangani dengan stimulus. Pengangguran struktural tidak cukup diselesaikan dengan stimulus karena masalahnya berada pada keterampilan, teknologi, lokasi, dan struktur pasar kerja. Inflasi demand-pull dapat dikendalikan dengan kebijakan kontraktif, sedangkan inflasi cost-push sering menimbulkan dilema karena menekan inflasi dapat memperburuk output."
    },
    {
      "kind": "table",
      "headers": [
        "Masalah",
        "Kebijakan umum",
        "Trade-off"
      ],
      "rows": [
        [
          "Inflasi demand-pull",
          "Moneter/fiskal kontraktif.",
          "Output dan kesempatan kerja melemah jangka pendek."
        ],
        [
          "Inflasi cost-push",
          "Stabilisasi ekspektasi, kebijakan pasokan, respons moneter berhati-hati.",
          "Terlalu ketat bisa memperdalam resesi; terlalu longgar bisa memperkuat inflasi."
        ],
        [
          "Pengangguran siklis",
          "Stimulus AD.",
          "Risiko inflasi jika ekonomi dekat kapasitas penuh."
        ],
        [
          "Pengangguran struktural",
          "Pelatihan, pendidikan, mobilitas, reformasi pasar kerja.",
          "Butuh waktu; tidak langsung menaikkan output jangka pendek."
        ],
        [
          "Disinflasi",
          "Kebijakan moneter kredibel dan konsisten.",
          "Sacrifice ratio: output yang hilang untuk menurunkan inflasi."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Kesimpulan ujian",
      "text": "tidak ada kebijakan tunggal untuk semua masalah. Identifikasi dulu apakah masalah berasal dari sisi permintaan, sisi penawaran, ekspektasi, atau struktur pasar kerja."
    }
  ]
};

const tm14: Reading = {
  "tm": 14,
  "title": "Pertumbuhan Ekonomi",
  "ref": "Kontrak: 1(29,30), 2(35) · Substansi: Samuelson Ch.25; Mankiw Ch.25–26",
  "intro": "Menjelaskan sumber pertumbuhan jangka panjang melalui produktivitas, modal, tenaga kerja, teknologi, institusi, dan kualitas pembangunan.",
  "objectives": [
    "Mengukur pertumbuhan GDP riil dan menggunakan Rule of 70.",
    "Menjelaskan fungsi produksi agregat dan produktivitas.",
    "Menganalisis diminishing returns, catch-up effect, dan model Solow.",
    "Mengevaluasi kebijakan pertumbuhan dan kualitas pertumbuhan."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Definisi & Arti Pertumbuhan"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Pertumbuhan ekonomi",
      "text": "adalah kenaikan output riil suatu perekonomian dari waktu ke waktu. Ukuran yang lazim digunakan adalah pertumbuhan real GDP atau real GDP per capita."
    },
    {
      "kind": "p",
      "text": "Pertumbuhan menjadi penting karena perbedaan kecil pada laju pertumbuhan dapat menghasilkan perbedaan besar dalam standar hidup setelah beberapa dekade. Negara yang tumbuh 2% per tahun dan negara yang tumbuh 6% per tahun akan memiliki lintasan pendapatan yang sangat berbeda dalam satu generasi."
    },
    {
      "kind": "formula",
      "text": "Rumus Pertumbuhan\n\nGrowth rate = [(Real GDP_t − Real GDP_{t−1}) / Real GDP_{t−1}] × 100%\n\nRule of 70: waktu pelipatan ≈ 70 / growth rate (%)"
    },
    {
      "kind": "example",
      "title": "Contoh rule of 70",
      "blocks": [
        {
          "kind": "p",
          "text": "Jika pendapatan per kapita tumbuh 5% per tahun, waktu untuk menjadi dua kali lipat kira-kira 70/5 = 14 tahun. Jika hanya tumbuh 2%, butuh sekitar 35 tahun."
        }
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Data Riil: Pertumbuhan Ekonomi Indonesia",
      "text": "Ekonomi Indonesia tumbuh 5,11% sepanjang 2025. Pada triwulan I-2026, pertumbuhan tercatat 5,61% (yoy) dan ditopang konsumsi rumah tangga serta ekspor. Pertumbuhan riil seperti ini, bukan sekadar kenaikan harga, yang menjadi ukuran sebenarnya dari naiknya output dan pendapatan per kapita.\n\n*Snapshot resmi: BPS, rilis pertumbuhan ekonomi triwulan I 2026.*"
    },
    {
      "kind": "p",
      "text": "Sumber: BPS (rilis pertumbuhan ekonomi 2025 dan Triwulan I-2026)."
    },
    {
      "kind": "h2",
      "text": "Produktivitas sebagai Kunci"
    },
    {
      "kind": "p",
      "text": "Standar hidup jangka panjang terutama ditentukan oleh produktivitas, yaitu output per unit input. Negara menjadi lebih makmur ketika pekerja mampu menghasilkan lebih banyak barang dan jasa per jam kerja."
    },
    {
      "kind": "formula",
      "text": "Produksi Agregat Sederhana\n\nY = A × F(K, L, H, N)\n\nY/L = A × F(K/L, 1, H/L, N/L)\n\nK = physical capital; L = labor; H = human capital; N = natural resources; A = technology/TFP"
    },
    {
      "kind": "table",
      "headers": [
        "Determinannya",
        "Makna",
        "Contoh"
      ],
      "rows": [
        [
          "Physical capital",
          "Peralatan, mesin, bangunan, infrastruktur produksi.",
          "Mesin pabrik, jalan, pelabuhan, jaringan listrik."
        ],
        [
          "Human capital",
          "Pengetahuan, keterampilan, kesehatan, pengalaman tenaga kerja.",
          "Pendidikan, pelatihan, gizi, kesehatan publik."
        ],
        [
          "Natural resources",
          "Sumber daya alam yang mendukung produksi.",
          "Mineral, tanah, energi, air."
        ],
        [
          "Technology/TFP",
          "Cara yang lebih efisien untuk mengubah input menjadi output.",
          "Digitalisasi, R&D, proses produksi baru, manajemen lebih baik."
        ],
        [
          "Institutions",
          "Aturan main ekonomi yang membentuk insentif.",
          "Hak milik, kepastian hukum, tata kelola, stabilitas politik."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Sumber Pertumbuhan"
    },
    {
      "kind": "p",
      "text": "Samuelson menekankan “four wheels of growth”: sumber daya manusia, sumber daya alam, pembentukan modal, dan teknologi. Mankiw menekankan produktivitas dan faktor yang mendorongnya. Keduanya bertemu pada satu ide: pertumbuhan jangka panjang bukan sekadar memperbanyak belanja, melainkan meningkatkan kapasitas produktif."
    },
    {
      "kind": "figure",
      "title": "Alur Sumber Pertumbuhan Jangka Panjang",
      "svg": "<svg data-graph-id=\"PTE-FLOW-07\" viewBox=\"0 0 920 235\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Sumber pertumbuhan jangka panjang</title><desc>Institusi dan stabilitas menuju Investasi fisik dan manusia menuju Teknologi serta inovasi menuju Produktivitas meningkat menuju Output riil per kapita tumbuh. Pertumbuhan berkualitas juga menuntut inklusi, distribusi, keberlanjutan lingkungan, dan ketahanan terhadap shock.</desc><defs><marker id=\"arrow-PTE-FLOW-07\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"#94a3b8\"/></marker></defs><rect x=\"31.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"106.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"106.0\" dy=\"0\">Institusi dan</tspan><tspan x=\"106.0\" dy=\"18\">stabilitas</tspan></text><line x1=\"185.0\" y1=\"97.0\" x2=\"203.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-07)\"/><rect x=\"208.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"283.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"283.0\" dy=\"0\">Investasi fisik dan</tspan><tspan x=\"283.0\" dy=\"18\">manusia</tspan></text><line x1=\"362.0\" y1=\"97.0\" x2=\"380.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-07)\"/><rect x=\"385.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"460.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"460.0\" dy=\"0\">Teknologi serta</tspan><tspan x=\"460.0\" dy=\"18\">inovasi</tspan></text><line x1=\"539.0\" y1=\"97.0\" x2=\"557.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-07)\"/><rect x=\"562.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"637.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"637.0\" dy=\"0\">Produktivitas</tspan><tspan x=\"637.0\" dy=\"18\">meningkat</tspan></text><line x1=\"716.0\" y1=\"97.0\" x2=\"734.0\" y2=\"97.0\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-07)\"/><rect x=\"739.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"814.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#e2e8f0\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"814.0\" dy=\"0\">Output riil per</tspan><tspan x=\"814.0\" dy=\"18\">kapita tumbuh</tspan></text><rect x=\"110\" y=\"165\" width=\"700\" height=\"45\" rx=\"12\" fill=\"#0b1220\" stroke=\"#64748b\" stroke-dasharray=\"5 4\"/><text x=\"460\" y=\"193\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"13\" font-family=\"system-ui, sans-serif\">Pertumbuhan berkualitas juga menuntut inklusi, distribusi, keberlanjutan lingkungan, dan ketahanan terhadap shock.</text></svg>",
      "caption": "Modal menambah kapasitas, tetapi teknologi, kualitas manusia, dan institusi menentukan produktivitas serta keberlanjutan pertumbuhan.",
      "altText": "Diagram alur institusi dan stabilitas menuju investasi fisik dan manusia, teknologi dan inovasi, produktivitas, lalu pertumbuhan output riil per kapita."
    },
    {
      "kind": "ul",
      "items": [
        "**Capital deepening:** Modal per pekerja naik, sehingga pekerja lebih produktif.",
        "**Human-capital accumulation:** Pendidikan dan kesehatan meningkatkan kualitas tenaga kerja.",
        "**Technological progress:** Output lebih besar dari input yang sama; sumber utama pertumbuhan berkelanjutan.",
        "**Institutional quality:** Insentif investasi, inovasi, dan kerja produktif bergantung pada kepastian aturan."
      ]
    },
    {
      "kind": "formula",
      "text": "Growth Accounting Sederhana\n\ng_Y ≈ αg_K + (1−α)g_L + g_A\n\ng_A = pertumbuhan produktivitas total faktor/TFP"
    },
    {
      "kind": "h2",
      "text": "Kebijakan untuk Mendorong Pertumbuhan"
    },
    {
      "kind": "table",
      "headers": [
        "Kebijakan",
        "Saluran dampak",
        "Catatan kritis"
      ],
      "rows": [
        [
          "Mendorong saving & investment",
          "Menambah modal fisik.",
          "Ada diminishing returns; perlu kualitas investasi."
        ],
        [
          "Pendidikan dan kesehatan",
          "Meningkatkan human capital.",
          "Butuh waktu panjang; kualitas lebih penting daripada kuantitas formal."
        ],
        [
          "Infrastruktur",
          "Menurunkan biaya transaksi dan logistik.",
          "Harus produktif, tidak sekadar proyek fisik."
        ],
        [
          "Property rights & rule of law",
          "Mendorong investasi dan inovasi.",
          "Tanpa kepastian hukum, modal cenderung lari atau pasif."
        ],
        [
          "R&D dan inovasi",
          "Mendorong teknologi dan TFP.",
          "Sering memerlukan ekosistem universitas-industri-pemerintah."
        ],
        [
          "Open trade",
          "Memperluas pasar, transfer teknologi, spesialisasi.",
          "Perlu kesiapan industri dan perlindungan transisi yang tepat."
        ],
        [
          "Stabilitas makro",
          "Mengurangi ketidakpastian inflasi, kurs, dan suku bunga.",
          "Stabilitas bukan tujuan akhir, tetapi prasyarat investasi."
        ]
      ]
    },
    {
      "kind": "h2",
      "text": "Model Pertumbuhan: Diminishing Returns, Catch-up, dan Solow"
    },
    {
      "kind": "figure",
      "title": "Fungsi produksi: diminishing returns terhadap modal",
      "svg": "<svg data-graph-id=\"PTE-GRAPH-06\" font-family=\"DM Sans, sans-serif\" style=\"max-width:560px;margin:0 auto;display:block\" viewBox=\"0 0 380 270\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><title>Fungsi produksi: diminishing returns terhadap modal</title><desc>Grafik fungsi produksi per pekerja dengan modal per pekerja pada sumbu horizontal dan output per pekerja pada sumbu vertikal. Kurva meningkat tetapi cekung karena diminishing returns.</desc><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"355\" y1=\"235\" y2=\"235\"></line><line stroke=\"#657084\" stroke-width=\"1.2\" x1=\"55\" x2=\"55\" y1=\"235\" y2=\"20\"></line><text fill=\"#9aa4b7\" font-size=\"11\" x=\"30\" y=\"26\">Y/L</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"320\" y=\"251\">K/L</text><path d=\"M 60 222 Q 150 95 345 72\" fill=\"none\" stroke=\"#4f9cf9\" stroke-width=\"2.4\"></path><text fill=\"#4f9cf9\" font-size=\"10\" x=\"150\" y=\"70\">Y/L = A·f(K/L)</text><line opacity=\"0.6\" stroke=\"#657084\" stroke-dasharray=\"3,3\" stroke-width=\"0.7\" x1=\"140\" x2=\"140\" y1=\"235\" y2=\"120\"></line><line opacity=\"0.6\" stroke=\"#657084\" stroke-dasharray=\"3,3\" stroke-width=\"0.7\" x1=\"220\" x2=\"220\" y1=\"235\" y2=\"86\"></line><line opacity=\"0.7\" stroke=\"#f9a825\" stroke-dasharray=\"3,3\" stroke-width=\"0.7\" x1=\"55\" x2=\"140\" y1=\"120\" y2=\"120\"></line><line opacity=\"0.7\" stroke=\"#f9a825\" stroke-dasharray=\"3,3\" stroke-width=\"0.7\" x1=\"55\" x2=\"220\" y1=\"86\" y2=\"86\"></line><text fill=\"#9aa4b7\" font-size=\"9\" x=\"120\" y=\"248\">k₁</text><text fill=\"#9aa4b7\" font-size=\"9\" x=\"208\" y=\"248\">k₂</text></svg>",
      "caption": "Output per pekerja meningkat ketika modal per pekerja bertambah, tetapi kemiringan kurva makin landai. Tambahan output dari setiap unit modal berikutnya semakin kecil.",
      "altText": "Grafik fungsi produksi per pekerja dengan modal per pekerja pada sumbu horizontal dan output per pekerja pada sumbu vertikal. Kurva meningkat tetapi cekung karena diminishing returns."
    },
    {
      "kind": "p",
      "text": "Akumulasi modal penting, tetapi modal memiliki diminishing returns. Tambahan satu mesin akan sangat berguna ketika modal awal sangat rendah, tetapi tambahan mesin berikutnya memberi tambahan output yang semakin kecil jika faktor lain tidak ikut membaik. Karena itu, negara miskin berpotensi tumbuh lebih cepat jika institusi, pendidikan, dan stabilitasnya memungkinkan; inilah catch-up effect."
    },
    {
      "kind": "table",
      "headers": [
        "Konsep",
        "Makna",
        "Implikasi"
      ],
      "rows": [
        [
          "Diminishing returns",
          "Tambahan output dari tambahan modal makin kecil.",
          "Modal saja tidak cukup untuk pertumbuhan permanen."
        ],
        [
          "Catch-up effect",
          "Negara dengan modal awal rendah bisa tumbuh lebih cepat.",
          "Berlaku jika ada institusi, keamanan, dan kemampuan menyerap teknologi."
        ],
        [
          "Steady state",
          "Kondisi ketika investasi baru hanya cukup menutup depresiasi dan kebutuhan modal pekerja baru.",
          "Pertumbuhan per kapita jangka panjang membutuhkan kemajuan teknologi."
        ],
        [
          "Technological progress",
          "Perbaikan metode produksi, organisasi, dan pengetahuan.",
          "Sumber utama pertumbuhan berkelanjutan."
        ],
        [
          "Endogenous growth",
          "Teknologi dipengaruhi keputusan ekonomi seperti R&D, pendidikan, dan kebijakan.",
          "Pemerintah dapat memengaruhi laju inovasi melalui insentif."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Koreksi asumsi sederhana",
      "text": "pertumbuhan tinggi tidak selalu baik jika bersumber dari eksploitasi berlebihan, utang tidak produktif, atau gelembung aset. Yang dicari adalah pertumbuhan produktif dan berkelanjutan."
    },
    {
      "kind": "h2",
      "text": "Kualitas Pertumbuhan"
    },
    {
      "kind": "p",
      "text": "Pertumbuhan ekonomi perlu dibedakan dari pembangunan ekonomi. Pertumbuhan menekankan kenaikan output riil, sedangkan pembangunan mencakup perbaikan kualitas hidup, distribusi, kesempatan kerja, pendidikan, kesehatan, lingkungan, dan kapasitas kelembagaan."
    },
    {
      "kind": "ul",
      "items": [
        "**Inclusive growth:** Pertumbuhan yang manfaatnya menjangkau banyak kelompok, bukan hanya pemilik modal atau wilayah tertentu.",
        "**Sustainable growth:** Pertumbuhan yang tidak merusak basis sumber daya dan lingkungan untuk generasi berikutnya.",
        "**Productive growth:** Pertumbuhan yang berasal dari produktivitas, inovasi, dan investasi bernilai tambah."
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Jebakan ujian",
      "text": "jangan menyamakan pertumbuhan dengan pemerataan. GDP bisa naik tetapi ketimpangan tetap melebar. Sebaliknya, redistribusi tanpa kenaikan produktivitas juga tidak cukup untuk menaikkan standar hidup jangka panjang."
    }
  ]
};

export const PTE_PRA_UAS_READINGS: Record<number, Reading> = {
  8: tm8,
  9: tm9,
  10: tm10,
  11: tm11,
  12: tm12,
  13: tm13,
  14: tm14,
};

export const PTE_PRA_UAS_SUPPLEMENT: { formulaSheet: ContentBlock[]; examMap: ContentBlock[]; references: ContentBlock[] } = {
  "formulaSheet": [
    {
      "kind": "p",
      "text": "*Rumus cepat TM 8–14*"
    },
    {
      "kind": "formula",
      "text": "National Income\n\nY = C + I + G + NX\nNX = X − M\nGNP = GDP + pendapatan faktor neto dari luar negeri\nNDP = GDP − depresiasi"
    },
    {
      "kind": "formula",
      "text": "Shock Logic Y=C+I+G+(X−M)\n\nX↓ → NX↓ → Y↓ → laba/kerja↓ → C↓ dan I↓; M bisa ikut turun sebagai penahan.\nC↑ → Y↑ → pendapatan↑ → C naik lagi; I dan M cenderung naik.\nRupiah melemah → M mahal & inflasi impor↑; X bisa naik; efek NX bergantung elastisitas dan lag.\nG↑ → Y↑ langsung; bisa crowding-in atau crowding-out terhadap I."
    },
    {
      "kind": "formula",
      "text": "Nominal, Real, Inflation\n\nNominal GDP = Σ(P_t×Q_t)\nReal GDP = Σ(P_base×Q_t)\nGDP Deflator = Nominal GDP/Real GDP × 100\nInflation = (Index_t−Index_{t−1})/Index_{t−1} × 100%"
    },
    {
      "kind": "formula",
      "text": "Closed Economy\n\nY = C + I + G\nC = a + bY_d\nS = −a + (1−b)Y_d\nS = I dalam ekonomi tertutup\nS = Y − C − G"
    },
    {
      "kind": "formula",
      "text": "Multiplier\n\nk_G = 1/(1−MPC)\nk_T = −MPC/(1−MPC)\nBalanced-budget multiplier = 1\nOpen economy: k = 1/(1−MPC+MPM)"
    },
    {
      "kind": "formula",
      "text": "Money\n\nMoney multiplier = 1/rr\nMV = PY\ng_M + g_V = π + g_Y\nJika V stabil: π ≈ g_M − g_Y"
    },
    {
      "kind": "formula",
      "text": "Open Economy\n\nS = I + NX\nNX = S − I\nNCO = S − I\nNX = NCO\nReal exchange rate = e×P/P*"
    },
    {
      "kind": "formula",
      "text": "Labor & Inflation\n\nUnemployment rate = unemployed/labor force × 100%\nLFPR = labor force/adult population × 100%\nGDP gap ≈ −2×(u−u_n)\nπ = π^e − β(u−u_n) + v"
    },
    {
      "kind": "formula",
      "text": "Growth\n\nGrowth = (Real GDP_t−Real GDP_{t−1})/Real GDP_{t−1} × 100%\nRule of 70 = 70/growth rate\nY = A×F(K,L,H,N)\ng_Y ≈ αg_K + (1−α)g_L + g_A"
    }
  ],
  "examMap": [
    {
      "kind": "p",
      "text": "*Gunakan untuk review terakhir*"
    },
    {
      "kind": "h2",
      "text": "Peta Hubungan Materi"
    },
    {
      "kind": "p",
      "text": "Pendapatan Nasional  mengukur output  →  Perekonomian Tertutup  menentukan Y lewat AE  →  Uang & Moneter  likuiditas, suku bunga, inflasi  →  Ekonomi Terbuka  NX, kurs, modal  →  Inflasi & Pengangguran  stabilisasi jangka pendek  →  Pertumbuhan  kapasitas jangka panjang"
    },
    {
      "kind": "h2",
      "text": "Checklist Tidak Boleh Tertinggal"
    },
    {
      "kind": "ul",
      "items": [
        "[ ] Bisa membedakan GDP, GNP/GNI, NDP, NI, PI, dan DI.",
        "[ ] Bisa menghitung GDP dengan pendekatan pengeluaran dan nilai tambah.",
        "[ ] Bisa menjelaskan logika timbal balik Y = C + I + G + (X−M), bukan sekadar menghafal rumus.",
        "[ ] Bisa menganalisis shock: X turun, C naik, I turun, G naik, M naik, dan rupiah melemah terhadap USD.",
        "[ ] Paham nominal GDP, real GDP, GDP deflator, dan CPI/IHK.",
        "[ ] Bisa menjelaskan keterbatasan GDP sebagai ukuran kesejahteraan.",
        "[ ] Menguasai Y = C + I + G dan S = I dalam ekonomi tertutup.",
        "[ ] Bisa memakai fungsi konsumsi C = a + bYd dan menghitung MPC/MPS.",
        "[ ] Bisa menghitung multiplier belanja, pajak, dan balanced-budget.",
        "[ ] Paham fiscal expansion/contraction, crowding out, dan automatic stabilizer.",
        "[ ] Bisa menjelaskan fungsi uang dan jenis-jenis uang.",
        "[ ] Paham bank, reserve ratio, money multiplier, dan keterbatasannya.",
        "[ ] Bisa menjelaskan instrumen kebijakan moneter dan transmisi moneter.",
        "[ ] Menguasai MV = PY dan hubungan uang-inflasi jangka panjang.",
        "[ ] Bisa membedakan current account, financial account, dan official reserves.",
        "[ ] Menguasai S = I + NX, NX = NCO, dan implikasinya.",
        "[ ] Bisa membedakan nilai tukar nominal, nilai tukar riil, apresiasi, dan depresiasi.",
        "[ ] Paham PPP, penyebab deviasi PPP, dan faktor nilai tukar.",
        "[ ] Bisa membedakan jenis inflasi dan biaya inflasi.",
        "[ ] Bisa menghitung unemployment rate dan LFPR.",
        "[ ] Bisa membedakan frictional, structural, cyclical, seasonal, dan classical unemployment.",
        "[ ] Paham AD, SRAS, LRAS, output gap, Okun's law, Phillips curve.",
        "[ ] Bisa membedakan pertumbuhan ekonomi dan pembangunan ekonomi.",
        "[ ] Menguasai produktivitas, four wheels of growth, catch-up effect, dan diminishing returns."
      ]
    },
    {
      "kind": "h2",
      "text": "Prediksi Bentuk Pertanyaan UAS"
    },
    {
      "kind": "ol",
      "items": [
        "Hitung GDP nominal, GDP riil, dan deflator dari data harga-kuantitas dua barang.",
        "Jelaskan mengapa transfer payment tidak masuk GDP.",
        "Diberikan fungsi C = a + bYd, hitung Y ekuilibrium dan multiplier.",
        "Bandingkan dampak kenaikan G dan kenaikan T dengan nominal yang sama.",
        "Jelaskan bagaimana bank menciptakan uang melalui fractional reserve.",
        "Gunakan MV = PY untuk menjelaskan inflasi jangka panjang.",
        "Analisis dampak depresiasi mata uang terhadap ekspor, impor, dan inflasi.",
        "Jika X turun karena krisis global, jelaskan komponen mana yang turun pertama, efek lanjutan ke C/I/M, dan kebijakan penstabilnya.",
        "Jika C naik tajam, jelaskan mengapa Y naik, mengapa I/M bisa ikut naik, dan kapan inflasi dapat muncul.",
        "Jelaskan hubungan S, I, NX, dan arus modal dalam ekonomi terbuka.",
        "Bedakan demand-pull inflation dan cost-push inflation dengan grafik AD-AS secara naratif.",
        "Jelaskan Phillips curve jangka pendek dan mengapa trade-off hilang dalam jangka panjang.",
        "Gunakan rule of 70 untuk membandingkan dua negara dengan laju pertumbuhan berbeda.",
        "Jelaskan mengapa produktivitas lebih penting daripada stimulus permintaan untuk pertumbuhan jangka panjang."
      ]
    }
  ],
  "references": [
    {
      "kind": "p",
      "text": "*Buku wajib dan acuan penyusunan*"
    },
    {
      "kind": "ul",
      "items": [
        "Samuelson, P. A., & Nordhaus, W. D. (2010). *Economics* (19th ed.). McGraw-Hill.",
        "Mankiw, N. G. (2020). *Principles of Economics* (9th ed.). Cengage Learning.",
        "Kontrak Perkuliahan Pengantar Teori Ekonomi AK, M, EKIS Tahun Akademik 2025/2026.",
        "Catatan Pra-UTS HTML yang diberikan pengguna digunakan sebagai acuan gaya visual, navigasi, dan struktur belajar."
      ]
    }
  ]
};
