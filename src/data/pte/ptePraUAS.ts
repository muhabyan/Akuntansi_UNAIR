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
  "intro": "Membahas data yang digunakan oleh ekonom dan pembuat kebijakan untuk memantau kinerja ekonomi secara keseluruhan, yaitu Gross Domestic Product (GDP).",
  "objectives": [
    "Memahami konsep dan komponen-komponen penyusun Gross Domestic Product (GDP).",
    "Menjelaskan dua pendekatan pengukuran GDP: Pengeluaran dan Pendapatan.",
    "Menganalisis siklus aliran melingkar kegiatan ekonomi (Circular Flow).",
    "Membedakan GDP Nominal dan Riil serta menghitung GDP Deflator.",
    "Mengidentifikasi ukuran pendapatan nasional lain (GNP, NNP, NI, PI, DI) serta batasan GDP terhadap kesejahteraan."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Pengantar (Introduction)"
    },
    {
      "kind": "p",
      "text": "Bayangkan kamu diminta untuk menilai 'seberapa kuat dan sehat' perekonomian suatu negara tahun ini. Data apa yang paling pertama kamu cari? Jawabannya adalah data andalan yang selalu digunakan oleh ekonom dan pemerintah untuk mengukur kinerja ekonomi secara keseluruhan, yaitu **Gross Domestic Product (GDP)** atau Produk Domestik Bruto (PDB)."
    },
    {
      "kind": "h2",
      "text": "Apa Itu GDP?"
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Definisi Inti",
      "text": "GDP adalah **nilai pasar (market value)** dari **seluruh (all)** barang dan jasa **akhir (final)** yang **diproduksi (produced)** di dalam suatu **negara (within a country)** pada **periode waktu tertentu (given period of time)**."
    },
    {
      "kind": "p",
      "text": "Setiap kata dalam definisi di atas punya makna spesifik yang ketat. Mari kita bedah satu per satu agar kamu paham logika di baliknya:"
    },
    {
      "kind": "ul",
      "items": [
        "**\"Market Value...\"**: Kita tidak bisa menjumlahkan 10 mobil dan 100 potong roti menjadi '110 barang'—itu tidak masuk akal. Semua barang harus diuangkan (dinilai dengan harga pasarnya). ==Jika harga mobil Rp200 juta dan roti Rp10 ribu, kita jumlahkan nilai rupiahnya.==",
        "**\"... of All ...\"**: Mencakup semua barang dan jasa yang diproduksi dan dijual secara *legal* di pasar. *Contoh: ==Sayuran di swalayan dihitung, tapi sayuran yang kamu tanam sendiri di halaman rumah untuk dimakan sendiri tidak dihitung.==*",
        "**\"... Final ...\"**: Ini sangat penting! GDP hanya menghitung barang *akhir*, bukan barang *antara* (bahan baku). *Contoh: ==Kalau pabrik kertas menjual kertas ke penerbit buku, yang dihitung dalam GDP hanyalah harga jual BUKUNYA, karena nilai kertas sudah melekat di harga buku.==* Tujuannya agar tidak terjadi **double counting** (penghitungan ganda).",
        "**\"... Goods and Services ...\"**: GDP menghitung benda fisik (seperti baju, mobil, makanan) dan juga jasa tak berwujud (seperti tiket konser, jasa potong rambut, biaya ke dokter).",
        "**\"... Produced ...\"**: GDP adalah ukuran produksi *tahun berjalan*. *Contoh: ==Jika kamu membeli mobil bekas keluaran tahun 2020 hari ini, nilai mobil itu TIDAK MASUK ke GDP tahun ini. Mobil itu sudah pernah dihitung pada GDP tahun 2020.==*",
        "**\"... Within a Country ...\"**: Konsepnya adalah *batas wilayah geografis*. *Contoh: ==Pabrik Honda (milik Jepang) yang ada di Karawang tetap dihitung ke dalam GDP Indonesia karena beroperasi di dalam negeri.==*",
        "**\"... In a Given Period of Time.\"**: Biasanya diukur per tahun (annual) atau per 3 bulan (kuartal). Angka ini menunjukkan kecepatan aliran uang dan barang dalam rentang waktu tersebut."
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Awas Terjebak!",
      "text": "Narkoba ilegal, barang selundupan (black market), atau jasa bersih-bersih rumah yang kamu lakukan sendiri tanpa dibayar **TIDAK** masuk ke dalam GDP, karena tidak diperjualbelikan di pasar legal yang tercatat."
    },
    {
      "kind": "h2",
      "text": "Bagaimana Cara Mengukur GDP?"
    },
    {
      "kind": "p",
      "text": "Menariknya, GDP bisa dihitung dari dua sisi yang berlawanan, tapi hasilnya akan **selalu persis sama**. Kedua cara tersebut adalah:"
    },
    {
      "kind": "ul",
      "items": [
        "**1. Pendekatan Pengeluaran (Expenditure Approach):** Menjumlahkan seluruh uang yang *dibelanjakan* masyarakat untuk membeli produk akhir.",
        "**2. Pendekatan Pendapatan (Income Approach):** Menjumlahkan seluruh *penghasilan* (gaji, laba, sewa) yang diterima masyarakat dari proses memproduksi produk tersebut."
      ]
    },
    {
      "kind": "p",
      "text": "Kenapa hasilnya selalu identik? Karena di dunia nyata, **setiap transaksi selalu melibatkan dua pihak: pembeli dan penjual**. ==Uang Rp50.000 yang kamu keluarkan (pengeluaran) untuk membeli segelas es kopi susu akan otomatis tercatat sebagai Rp50.000 pendapatan bagi sang pemilik kedai kopi.=="
    },
    {
      "kind": "h2",
      "text": "Siklus Aliran Melingkar (Circular Flow)"
    },
    {
      "kind": "chart-guide",
      "title": "Panduan Membaca Diagram Circular Flow",
      "points": [
        "**Fokus ke Panah Hijau (Uang):** Ini adalah aliran uang. Rumah tangga membelanjakan uangnya (Spending) di Pasar Barang. Uang ini diterima Perusahaan sebagai Pendapatan (Revenue). Perusahaan kemudian menggunakan uang ini untuk menggaji karyawan dan membayar sewa (Wages/Rent/Profit) di Pasar Faktor Produksi. Uang itu pun kembali ke kantong Rumah Tangga sebagai Pendapatan (Income).",
        "**Fokus ke Panah Oranye (Barang/Jasa/Faktor Riil):** Ini adalah aliran wujud nyatanya. Rumah tangga menyumbangkan tenaga kerja dan modalnya ke Perusahaan. Perusahaan menggunakannya untuk memproduksi barang/jasa sungguhan, lalu menjualnya kembali ke Rumah Tangga untuk dikonsumsi."
      ]
    },
    {
      "kind": "illustration",
      "type": "circular-flow",
      "caption": "Diagram ini membuktikan argumen sebelumnya: Total aliran Pengeluaran di bagian atas (Spending/Revenue) selalu bermuara dan sama besarnya dengan Total aliran Pendapatan di bagian bawah (Income/Wages)."
    },
    {
      "kind": "h2",
      "text": "Memahami Masalah Penghitungan Ganda (Double Counting)"
    },
    {
      "kind": "p",
      "text": "Seperti yang dibahas pada syarat 'Final', GDP hanya menghitung barang akhir untuk menghindari penghitungan berlebihan. Kalau Badan Pusat Statistik menghitung total harga gandum, lalu ditambahkan harga tepung, lalu ditambahkan harga roti sekaligus, angkanya akan membengkak tidak masuk akal. Solusi untuk mengatasi ini adalah dengan menjumlahkan **Nilai Tambah (Value Added)** di tiap tahapan."
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Rumus Nilai Tambah",
      "text": "Nilai Tambah = Harga Jual Produk perusahaan – Biaya Pembelian Input/Bahan Baku dari perusahaan lain."
    },
    {
      "kind": "math-example",
      "title": "Ilustrasi: Nilai Tambah pada Sepotong Roti",
      "blocks": [
        {
          "kind": "table",
          "headers": ["Tahap Produksi", "Nilai Penjualan", "Dikurangi: Biaya Input Antara", "Nilai Tambah"],
          "rows": [
            ["Petani Gandum", "23", "0", "23"],
            ["Pabrik Tepung", "53", "23", "30"],
            ["Pabrik Adonan", "110", "53", "57"],
            ["Toko Roti (Produk Akhir)", "190", "110", "80"],
            ["**Total Keseluruhan**", "**376 (Total ini Salah!)**", "**186**", "**190 (Total Benar!)**"]
          ]
        },
        {
          "kind": "p",
          "text": "Perhatikan bahwa **total dari seluruh nilai tambah tahapan produksi (190)** nilainya ternyata ==persis sama dengan harga jual akhir produk roti (190)==. Inilah angka tunggal yang benar-benar dicatat dalam GDP. Jika kita gegabah menotal semua penjualannya (menjadi 376), itu berarti harga petani gandum dihitung berulang kali di tiap pabrik!"
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Rincian Komponen GDP"
    },
    {
      "kind": "h3",
      "text": "1. Pendekatan Pengeluaran (Expenditure Approach)"
    },
    {
      "kind": "p",
      "text": "Ini adalah pendekatan yang paling sering digunakan dan ditanyakan dalam ujian. Rumusnya legendaris:"
    },
    {
      "kind": "formula",
      "text": "Y = C + I + G + NX",
      "note": "Keterangan Simbol:\nY = GDP (Total Pengeluaran Nasional)\nC = Konsumsi (Consumption)\nI = Investasi (Investment)\nG = Belanja Pemerintah (Government Purchases)\nNX = Ekspor Neto (Ekspor dikurangi Impor)"
    },
    {
      "kind": "ul",
      "items": [
        "**Consumption (C):** Pengeluaran masyarakat rumah tangga untuk barang (baju, makanan, gadget) dan jasa (pendidikan, dokter). *Catatan: ==Pembelian rumah baru TIDAK masuk C, melainkan I.==*",
        "**Investment (I):** Belanja perusahaan untuk barang modal (mesin pabrik, komputer kantor), penambahan persediaan (inventory) yang belum terjual, dan pembelian rumah baru oleh rumah tangga. Ingat, =='Investasi' di makroekonomi berarti pembelian barang fisik baru untuk produksi, BUKAN investasi nabung saham di bursa!==",
        "**Government Purchases (G):** Belanja pemerintah pusat/daerah untuk barang dan jasa (contoh: membeli kendaraan operasional, menggaji PNS, aspal jalan). *Hati-hati: ==Bantuan Sosial (Bansos) atau uang pensiun disebut Transfer Payment dan TIDAK masuk dalam G, karena pemerintah membagikan uang secara cuma-cuma tanpa mendapat barang/jasa sebagai gantinya.==*",
        "**Net Exports (NX):** Ekspor (X) dikurangi Impor (M). Kenapa porsi impor harus dikurangi? ==Karena saat kamu membeli HP rakitan China, nilai HP itu sudah terlanjur dicatat masuk ke komponen Konsumsi (C). Kalau impornya tidak dikurangkan sebagai penyeimbang, seolah-olah HP itu hasil produksi dalam negeri Indonesia.=="
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Contoh Perhitungan: Aggregate Expenditure (AE) / Pengeluaran",
      "text": "Misalkan di suatu negara tercatat data: Konsumsi rumah tangga (C) = Rp10.000, Investasi pabrik (I) = Rp3.000, Belanja Pemerintah (G) = Rp4.000, Ekspor (X) = Rp2.000, dan Impor (M) = Rp1.500. Maka Net Exports (NX) = 2.000 - 1.500 = 500. Total GDP = C + I + G + NX = 10.000 + 3.000 + 4.000 + 500 = **Rp17.500**."
    },
    {
      "kind": "h3",
      "text": "2. Pendekatan Pendapatan (Income Approach)"
    },
    {
      "kind": "p",
      "text": "Sebaliknya, jika dihitung dari sisi penghasilan, GDP merupakan penjumlahan dari seluruh komponen kompensasi berikut:"
    },
    {
      "kind": "ul",
      "items": [
        "**Upah/Gaji (Wages):** Penghasilan dari keringat tenaga kerja.",
        "**Sewa (Rent):** Penghasilan dari aset tanah atau properti komersial.",
        "**Bunga (Interest):** Pendapatan para kreditur/pemilik modal.",
        "**Laba Perusahaan (Corporate Profit):** Keuntungan bersih pengusaha, termasuk pajak laba dan dividen pemegang saham.",
        "Ditambah beberapa penyesuaian khusus teknis seperti *Pajak Bisnis Tidak Langsung* dan *Penyusutan (Depreciation)* pabrik."
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Contoh Sederhana: Income Approach",
      "text": "Jika sebuah negara hanya memiliki total gaji pekerja Rp5.000, laba pengusaha Rp2.000, pendapatan sewa tanah Rp1.000, dan pendapatan bunga bersih Rp500, maka dengan pendekatan ini, nilai **GDP = 5000 + 2000 + 1000 + 500 = Rp8.500**."
    },
    {
      "kind": "h2",
      "text": "Real GDP vs Nominal GDP"
    },
    {
      "kind": "p",
      "text": "Misalnya dilaporkan GDP tahun ini meroket 10% dibanding tahun lalu. Apakah itu karena **produksi** barang kita benar-benar bertambah 10%, atau murni cuma karena harganya pada **naik (inflasi)**? Untuk memecahkan kebingungan ini, ekonom membagi GDP jadi dua dimensi:"
    },
    {
      "kind": "ul",
      "items": [
        "**Nominal GDP**: Menghitung nilai produksi pakai **harga yang berlaku tahun ini**. ==Kalau harga sembako tiba-tiba naik 2 kali lipat karena langka, GDP Nominal akan ikut-ikutan naik 2 kali lipat meskipun realitanya kita tidak memproduksi lebih banyak sembako.==",
        "**Real GDP**: Menghitung nilai produksi pakai **harga konstan** (dipatok mati pada patokan harga tahun dasar tertentu). ==Karena fluktuasi harganya dikunci rapat, maka setiap kenaikan Real GDP murni mencerminkan naiknya jumlah kuantitas barang/jasa yang diproduksi.== Inilah tolok ukur kinerja ekonomi yang paling jujur."
      ]
    },
    {
      "kind": "formula",
      "text": "Nominal GDP = Σ (Kuantitas Tahun Ini × Harga Tahun Ini)\nReal GDP = Σ (Kuantitas Tahun Ini × Harga Tahun Dasar)",
      "note": "Kunci Perbedaan: Nominal GDP memakai harga yang sedang berlaku (sehingga tercampur inflasi), sedangkan Real GDP mengunci/mematok harga pada satu tahun dasar tertentu agar bebas dari efek inflasi."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Contoh Perhitungan & Analisis Kritis: Nominal vs Real",
      "text": "Misalkan Negara X hanya memproduksi Apel. Tahun Dasar 2020: produksi 100 apel @Rp2.000. Tahun Ini 2024: produksi 100 apel @Rp4.000.\n\n- **Nominal GDP 2024:** 100 apel × Rp4.000 = Rp400.000 (Seolah-olah ekonomi tumbuh 2x lipat!)\n- **Real GDP 2024 (pakai harga 2020):** 100 apel × Rp2.000 = Rp200.000\n\n**Interpretasi Analitis:** Nilai Real GDP 2024 ternyata persis sama dengan tahun 2020 (Rp200.000). Ini membuktikan bahwa **secara riil ekonomi tidak tumbuh sama sekali** karena produksi tetap 100 apel. Kenaikan Nominal GDP menjadi Rp400.000 hanyalah \"pertumbuhan semu\" yang murni merupakan ilusi dari inflasi harga."
    },
    {
      "kind": "formula",
      "text": "GDP Deflator = (Nominal GDP / Real GDP) × 100",
      "note": "Indeks ini khusus dirancang untuk mengukur tingkat harga. Ia memberi tahu kita porsi kenaikan nominal yang murni disebabkan oleh faktor inflasi harga, alih-alih peningkatan kuantitas output."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Contoh Perhitungan: GDP Deflator",
      "text": "Jika Nominal GDP tahun 2024 adalah Rp22.000 (dihitung pakai harga 2024) dan Real GDP adalah Rp20.000 (dihitung pakai harga dasar tahun 2020), maka GDP Deflator = (22.000 / 20.000) × 100 = **110**. Artinya, secara umum harga-harga telah naik 10% sejak tahun dasar 2020."
    },
    {
      "kind": "h3",
      "text": "Mengukur Biaya Hidup: CPI / IHK (Indeks Harga Konsumen)"
    },
    {
      "kind": "p",
      "text": "Selain GDP Deflator, ada satu lagi indikator inflasi yang sangat terkenal: **CPI (Consumer Price Index)** atau IHK. Apa bedanya?"
    },
    {
      "kind": "ul",
      "items": [
        "**CPI / IHK:** Hanya mengukur perubahan harga sekeranjang barang/jasa yang ==murni dibeli oleh konsumen rumah tangga biasa== (seperti beras, bensin, biaya sewa rumah). Barang modal pabrik tidak masuk.",
        "**GDP Deflator:** Mengukur perubahan harga ==semua barang/jasa yang diproduksi di dalam negeri== (termasuk mesin berat, traktor pertanian, alat militer)."
      ]
    },
    {
      "kind": "formula",
      "text": "CPI = (Harga Keranjang Konsumen Tahun Ini / Harga Keranjang Konsumen Tahun Dasar) × 100",
      "note": "Perhatikan bahwa kuantitas barang dalam 'keranjang' dipatok tetap (fixed basket) berdasarkan pola konsumsi pada tahun dasar."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Contoh Perhitungan: Indeks Harga Konsumen (CPI / IHK)",
      "text": "Misalkan 'keranjang belanja' standar konsumen berisi 10kg beras dan 5 liter bensin. Pada tahun dasar (2020), total harga keranjang ini Rp100.000. Pada tahun ini (2024), karena harga beras naik, total harga keranjang yang persis sama menjadi Rp125.000. Maka CPI tahun 2024 = (Harga Keranjang Tahun Ini / Harga Keranjang Tahun Dasar) × 100 = (125.000 / 100.000) × 100 = **125**."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Soal Ujian: Contoh Perbedaan Krusial Deflator vs CPI",
      "text": "Jika harga **Tank Militer buatan Pindad (dalam negeri)** naik drastis, itu akan langsung membuat **GDP Deflator naik**, tapi CPI diam saja (karena rakyat biasa tidak beli tank). Sebaliknya, jika harga **Mobil Toyota yang diimpor dari Jepang** naik tajam, itu akan membuat **CPI naik**, tapi GDP Deflator diam saja (karena mobil itu tidak diproduksi di dalam negeri)."
    },
    {
      "kind": "h2",
      "text": "Interpretasi: Apa Arti Angka GDP dan Inflasi?"
    },
    {
      "kind": "p",
      "text": "Sering kali kita mendengar di berita: \"Kuartal ini, pertumbuhan GDP meroket tajam\" atau \"Angka inflasi menembus batas\". Tapi apa artinya bagi kehidupan sehari-hari kita? Mari kita terjemahkan:"
    },
    {
      "kind": "ul",
      "items": [
        "**GDP Sedang Tumbuh Tinggi (Bagus):** Artinya mesin pabrik beroperasi penuh, banyak bisnis baru dibuka, dan perusahaan berlomba-lomba merekrut pegawai baru. ==Lapangan kerja melimpah, pengangguran turun, dan masyarakat punya uang lebih banyak untuk belanja.== Inilah kondisi ekonomi yang sehat dan makmur.",
        "**GDP Sedang Melambat / Rendah (Buruk):** Jika angkanya mengecil (sering disebut *Resesi*), artinya daya beli lesu. Pabrik menumpuk barang yang tak laku, terpaksa mem-PHK karyawan agar tidak bangkrut. ==Pengangguran melonjak, masyarakat mengencangkan ikat pinggang, dan ekonomi terasa sulit.=="
      ]
    },
    {
      "kind": "h3",
      "text": "Cara Menghitung Inflasi & Tingkatannya"
    },
    {
      "kind": "formula",
      "text": "Tingkat Inflasi = ((Indeks Tahun 2 - Indeks Tahun 1) / Indeks Tahun 1) × 100%",
      "note": "Contoh: Jika CPI tahun lalu 125 dan CPI tahun ini 130, maka laju inflasi = ((130 - 125) / 125) × 100% = 4%. Catatan: Kamu bisa menggunakan baik CPI maupun GDP Deflator ke dalam rumus ini."
    },
    {
      "kind": "p",
      "text": "Menurut teori ekonomi makro konvensional, besaran persentase inflasi dikelompokkan ke dalam empat level (derajat keparahan):"
    },
    {
      "kind": "ul",
      "items": [
        "**Inflasi Ringan (< 10% per tahun):** Ekonomi normal dan stabil. Masyarakat percaya uangnya tetap bernilai dan dunia usaha terpacu berinvestasi. Ibarat mesin ekonomi yang memanas sedikit karena bekerja optimal.",
        "**Inflasi Sedang (10% - 30% per tahun):** Harga mulai terasa naik signifikan. Pekerja akan menuntut kenaikan gaji rutin agar daya belinya tidak merosot drastis.",
        "**Inflasi Berat (30% - 100% per tahun):** Orang-orang kehilangan kepercayaan pada uang tunai dan lebih suka menumpuk barang. Perencanaan bisnis jangka panjang menjadi hancur.",
        "**Hiperinflasi (> 100% per tahun):** Bencana moneter total. Harga-harga berubah setiap jam. ==Uang kertas berakhir menjadi sampah (seperti di Zimbabwe) dan transaksi terpaksa kembali ke sistem barter atau valuta asing.=="
      ]
    },
    {
      "kind": "h2",
      "text": "Beragam Ukuran Pendapatan Lain (GNP hingga DI)"
    },
    {
      "kind": "p",
      "text": "Selain berpatokan pada 'wilayah geografis' (GDP Domestik), ada ukuran lain yang merombaknya menjadi berpatokan pada 'siapa warga negaranya' (Nasional). Ukuran itu terus dikerucutkan dan dipangkas pajaknya sampai menjadi uang tunai di dompet."
    },
    {
      "kind": "h3",
      "text": "Analisis Soal: Jika GDP > GNP, Artinya Apa?"
    },
    {
      "kind": "p",
      "text": "Dosen sering menjebak dengan pertanyaan ini. Mari selesaikan pakai logika sederhana:"
    },
    {
      "kind": "ul",
      "items": [
        "**Jika GDP > GNP:** Artinya nilai produksi di dalam batas wilayah (termasuk milik asing) LEBIH BESAR daripada total penghasilan warga negara itu sendiri. Kesimpulannya: ==Banyak investor/perusahaan asing yang mengeruk untung di negara tersebut dibanding investasi warga lokal di luar negeri.== Ini adalah ciri khas **negara berkembang** (seperti Indonesia).",
        "**Jika GNP > GDP:** Artinya penghasilan warga negaranya yang berada di luar negeri sangat masif, melampaui produksi di dalam negerinya sendiri. Kesimpulannya: ==Negara tersebut banyak menanamkan modal dan punya bisnis raksasa di negara lain.== Ini ciri khas **negara maju**."
      ]
    },
    {
      "kind": "formula",
      "text": "GNP = GDP +/- Pendapatan Neto Luar Negeri\nNNP = GNP - Penyusutan\nNNI = NNP - Pajak Tak Langsung + Subsidi\nPI = NNI - Iuran + Transfer Payment\nDI = PI - Pajak Langsung",
      "note": "Catatan: 'Iuran' pada PI mencakup Laba Ditahan, Pajak Perseroan, dan Iuran Jamsostek. Secara prinsip, setiap turun satu level, kita selalu mencabut beban-beban ekonomi agar angkanya semakin riil untuk dibelanjakan individu."
    },
    {
      "kind": "chart-guide",
      "title": "Panduan Alur Menurun (Waterfall): Dari GDP menjadi Uang Siap Belanja (DI)",
      "points": [
        "**GNP (Gross National Product):** Fokus pada Warga Negara, di manapun lokasinya. Rumusnya adalah ==GDP + Pendapatan Neto Luar Negeri (Pendapatan WNI di Luar Negeri – Pendapatan WNA di Dalam Negeri)==. Pabrik sepatu milik pengusaha Indonesia di Vietnam masuk GNP Indonesia. Sebaliknya, pabrik raksasa milik asing di Bekasi TIDAK masuk GNP Indonesia.",
        "**NNP (Net National Product):** Angka GNP dikurangi **Penyusutan (Depresiasi)**. Kenapa dikurangi? Karena mesin yang sudah aus dipakai produksi adalah kerugian (pengurangan nilai ekonomi yang nyata).",
        "**NNI (Net National Income):** NNP dikurangi **Pajak Tak Langsung** (seperti PPN / Cukai yang menaikkan harga pasar tapi bukan milik penjual) lalu ditambah **Subsidi** (bantuan pemerintah yang menurunkan harga produksi).",
        "**PI (Personal Income):** NNI dirombak menjadi pendapatan level individu. Kita harus mengurangkan **Iuran** (seperti asuransi sosial, laba ditahan perusahaan, pajak perseroan) lalu menambahkan **Transfer Payment** (dana Bansos atau tunjangan pensiun dari pemerintah yang dibagikan cuma-cuma).",
        "**DI (Disposable Income):** Langkah terakhir yang paling riil! PI dikurangi **Pajak Langsung** (seperti Pajak Penghasilan / PPh Pribadi). ==Inilah uang tunai bersih paling final di tangan masyarakat yang benar-benar siap mereka pakai untuk Konsumsi (C) maupun Ditabung (S).=="
      ]
    },
    {
      "kind": "illustration",
      "type": "gdp-waterfall",
      "caption": "Sesuai dengan presentasi konsep pendapatan nasional, alur ini berjalan dari Nilai Domestik Bruto (GDP) terus dikerucutkan, dikurangi berbagai pajak dan iuran, hingga menyisakan Disposable Income (DI)."
    },
    {
      "kind": "h2",
      "text": "GDP dan Kesejahteraan: Apakah Angka Tinggi = Rakyat Bahagia?"
    },
    {
      "kind": "p",
      "text": "GDP per kapita (GDP dibagi rata ke seluruh jumlah penduduk) secara luas diakui sebagai indikator tunggal terbaik untuk menerka kesejahteraan ekonomi suatu peradaban. Realitanya memang terbukti kok: negara dengan GDP tinggi umumnya mampu menyediakan fasilitas pendidikan kelas dunia, infrastruktur rumah sakit yang lebih canggih, dan tingkat literasi yang merata."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Kelemahan Fatal GDP",
      "text": "Namun, sadari batasannya: GDP sama sekali BUKAN alat ukur yang sempurna. Ia memiliki kelemahan yang sangat fundamental karena sama sekali buta terhadap sisi 'kemanusiaan'."
    },
    {
      "kind": "p",
      "text": "Beberapa pilar penting yang membuat hidup rakyat menjadi berkualitas tinggi justru **sengaja tidak dicatat** dalam laporan GDP:"
    },
    {
      "kind": "ul",
      "items": [
        "**Waktu Luang (Leisure):** ==Bayangkan jika pemerintah membuat aturan: tidak ada hari libur, semua orang harus lembur setiap hari. Angka GDP pasti meroket drastis karena produksi naik berlipat. Tapi apakah rakyatnya bahagia?==",
        "**Kualitas Lingkungan:** Sebuah pabrik tekstil besar bebas membuang limbah beracun ke sungai, menghasilkan baju senilai triliunan (menaikkan nilai GDP), tapi angka GDP sama sekali tidak dikurangi oleh 'kerusakan sungai' atau 'biaya sakit kulit warga sekitar'.",
        "**Aktivitas Non-Pasar yang Penuh Kasih Sayang:** ==Kebaikan luar biasa seorang ibu yang merawat anaknya sendiri 24 jam sehari di rumah tidak dihitung sepeser pun oleh sistem (karena dilakukan gratis). Namun jika sang ibu menyewa babysitter berbayar, bayarannya tiba-tiba dihitung dan GDP negara melonjak naik.==",
        "**Ekonomi Bawah Tanah (Underground Economy):** Terdapat miliaran uang berputar setiap hari di transaksi informal pedagang kaki lima tanpa kuitansi atau sengaja disembunyikan agar lolos dari kewajiban pajak. Uang riilnya ada, tapi angkanya gaib di mata pemerintah."
      ]
    },
    {
      "kind": "practice-box",
      "title": "Cek Ombak: Latihan Evaluasi",
      "blocks": [
        {
          "kind": "p",
          "text": "1. Jika kamu membeli mobil bekas dari tetanggamu hari ini seharga Rp100 juta, apakah transaksi Rp100 juta itu dimasukkan ke dalam GDP tahun ini?\n2. Bulan depan, pemerintah membagikan BLT (Bantuan Langsung Tunai) miliaran rupiah ke rakyat miskin. Apakah total dana kucuran BLT tersebut mendongkrak komponen Belanja Pemerintah (G)?\n3. Mengapa angka harga jual tepung gandum dan angka harga akhir roti tidak dijumlahkan menjadi satu kesatuan utuh saat menjumlah total GDP nasional?"
        }
      ],
      "answerKey": "1. **TIDAK MASUK.** Syarat mutlak GDP adalah barang *\"Produced\"* (diproduksi pada periode tahun yang sama). Mobil bekas secara fundamental sudah pernah dihitung saat ia dilahirkan pabriknya beberapa tahun lalu (misal masuk GDP tahun 2021). Menghitungnya lagi berarti double counting lintas waktu.\n2. **BUKAN KOMPONEN G.** Program uang BLT / BPJS masuk ke kategori *Transfer Payment* (dana berpindah ke dompet rakyat tanpa pemerintah mendapatkan produk/jasa imbalan baru). Dana itu baru akan meledakkan angka GDP nanti ketika rakyat miskin membelanjakan BLT-nya untuk membeli mie instan (tercatat di komponen Konsumsi C).\n3. Tujuannya menghindari momok **Double Counting** (penghitungan terdobel). Nilai jual final sebuah roti sudah secara otomatis mencakup dan menghitung biaya bahan baku tepung yang diserap toko roti tersebut."
    }
  ]
};

const tm9: Reading = {
  "tm": 9,
  "title": "Perekonomian Tertutup: Model Dua Sektor (Konsumsi & Investasi)",
  "ref": "Kontrak: 1(20), 2(23,24) · Substansi: Samuelson Ch.21–22; Mankiw Ch.26, Ch.33–34",
  "intro": "Membedah struktur ekonomi paling murni tanpa pemerintah, membongkar mesin konsumsi rumah tangga, perilaku investasi perusahaan, dan keajaiban efek multiplier.",
  "objectives": [
    "Memahami anatomi ekonomi dua sektor (Rumah Tangga dan Perusahaan).",
    "Menjelaskan fungsi konsumsi, fungsi tabungan, serta menghitung MPC dan MPS.",
    "Membedakan investasi makro riil vs finansial dan memahami efek suku bunga terhadap nilai aset.",
    "Menghitung keseimbangan output (Y = C + I) dan menerapkan Investment Multiplier."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Pengantar: Anatomi Ekonomi Dua Sektor"
    },
    {
      "kind": "p",
      "text": "Perekonomian tertutup dua sektor adalah model paling mendasar untuk memahami mesin penggerak ekonomi. Di sini, ruang isolasi diberlakukan: kita **hanya** memiliki dua aktor, yakni **Rumah Tangga (Consumers)** dan **Perusahaan (Investors)**. Model ini melarang adanya campur tangan Pemerintah (tanpa pajak $T$ atau belanja $G$) dan tidak ada perdagangan internasional (tanpa ekspor $X$ atau impor $M$)."
    },
    {
      "kind": "h2",
      "text": "Mesin Pertama: Konsumsi & Tabungan (Consumption & Saving)"
    },
    {
      "kind": "p",
      "text": "Dalam dunia dua sektor, setiap keping uang (Disposable Income) yang diterima oleh Rumah Tangga secara matematis hanya memiliki dua takdir: **Dibelanjakan (C)** atau **Ditabung (S)**."
    },
    {
      "kind": "formula",
      "text": "Fungsi Konsumsi: C = C₀ + bY\nFungsi Tabungan: S = Y - C  =>  S = -C₀ + (1-b)Y",
      "note": "C₀ adalah Konsumsi Otonom (kebutuhan mutlak untuk bertahan hidup meskipun pendapatan nol). Angka 'b' melambangkan hasrat konsumsi (MPC), sedangkan '(1-b)' melambangkan hasrat menabung (MPS)."
    },
    {
      "kind": "ul",
      "items": [
        "**MPC (Marginal Propensity to Consume):** Derajat sensitivitas konsumsi. Berapa porsi tambahan konsumsi jika kamu dapat tambahan pendapatan? Jika gajimu naik Rp1.000 dan kamu pakai Rp800 untuk makan, maka MPC = 0,8.",
        "**MPS (Marginal Propensity to Save):** Derajat sensitivitas menabung. Dari kenaikan Rp1.000 tadi, kamu menyimpan Rp200. Maka MPS = 0,2."
      ]
    },
    {
      "kind": "formula",
      "text": "Hukum Besi Proporsi:\nMPC + MPS = 1",
      "note": "Uang tambahan yang didapat (ΔY) pasti habis dipecah ke dua keranjang: tambahan tabungan (ΔS) dan tambahan konsumsi (ΔC)."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Contoh Perhitungan: Fungsi C dan S",
      "text": "Diketahui fungsi konsumsi masyarakat adalah **C = 200 + 0,75Y**. Jika total pendapatan nasional (Y) adalah 1.000, berapa uang yang dikonsumsi dan ditabung?\n\n- **Konsumsi (C):** 200 + 0,75(1000) = 200 + 750 = **950**\n- **Tabungan (S):** Y - C = 1000 - 950 = **50**\nAtau pakai fungsi tabungan langsung: **S = -200 + 0,25Y** = -200 + 0,25(1000) = -200 + 250 = **50**."
    },
    {
      "kind": "h2",
      "text": "Mesin Kedua: Investasi (Investment)"
    },
    {
      "kind": "p",
      "text": "Awas jebakan teori makro! Dalam ilmu ekonomi makro, \"investasi\" **bukanlah** membeli saham di bursa efek atau mendepositokan uang di bank (itu hanyalah transaksi *finansial*, di mana uang hanya berpindah tangan). Investasi makro yang sesungguhnya harus menciptakan produk modal baru secara riil."
    },
    {
      "kind": "ul",
      "items": [
        "**Investasi Riil (Pembentukan Modal):** Membangun pabrik baru, membeli armada truk logistik, traktor pertanian, atau mengembangkan paten *software* (intangible asset). Ini nyata menambah kapasitas produksi negara.",
        "**Tiga Determinan Utama Investasi:** \n1. **Revenue (Pendapatan):** Harapan akan tingginya permintaan produk (GDP tumbuh).\n2. **Cost (Biaya):** Sangat bergantung pada **Suku Bunga (Interest Rate)** pinjaman bank.\n3. **Expectations (Ekspektasi):** Kepercayaan terhadap iklim bisnis di masa depan."
      ]
    },
    {
      "kind": "formula",
      "text": "Nilai Sekarang (Present Value):\nPV = Σ [ N / (1+i)^t ]",
      "note": "Makin tinggi Suku Bunga (i), maka nilai sekarang (PV) dari imbal hasil di masa depan akan semakin kecil. Akibatnya, pengusaha akan menunda investasi. Inilah hukum tak terbantahkan: Harga Aset dan Minat Investasi bergerak BERBALIKAN (Inverse) terhadap Suku Bunga."
    },
    {
      "kind": "figure",
      "title": "Kurva Permintaan Investasi (Investment Demand Curve)",
      "svg": "<svg font-family=\"DM Sans, sans-serif\" style=\"max-width:100%;height:auto;margin:0 auto;display:block\" viewBox=\"0 0 380 270\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"350\" y1=\"230\" y2=\"230\"></line>\n  <line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"50\" y1=\"230\" y2=\"30\"></line>\n  <text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"20\" y=\"35\">i (%)</text>\n  <text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"335\" y=\"245\">I</text>\n  <line stroke=\"#4f9cf9\" stroke-width=\"2.5\" x1=\"80\" x2=\"310\" y1=\"50\" y2=\"200\"></line>\n  <text fill=\"#4f9cf9\" font-size=\"12\" font-weight=\"bold\" x=\"320\" y=\"205\">DI</text>\n  <line stroke=\"#f9a825\" stroke-dasharray=\"4,4\" stroke-width=\"1.5\" x1=\"50\" x2=\"131\" y1=\"83\" y2=\"83\"></line>\n  <line stroke=\"#f9a825\" stroke-dasharray=\"4,4\" stroke-width=\"1.5\" x1=\"131\" x2=\"131\" y1=\"83\" y2=\"230\"></line>\n  <circle cx=\"131\" cy=\"83\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#f9a825\" font-size=\"11\" x=\"25\" y=\"87\">10%</text>\n  <text fill=\"#f9a825\" font-size=\"11\" x=\"120\" y=\"245\">I₁</text>\n  <line stroke=\"#22d3a0\" stroke-dasharray=\"4,4\" stroke-width=\"1.5\" x1=\"50\" x2=\"233\" y1=\"150\" y2=\"150\"></line>\n  <line stroke=\"#22d3a0\" stroke-dasharray=\"4,4\" stroke-width=\"1.5\" x1=\"233\" x2=\"233\" y1=\"150\" y2=\"230\"></line>\n  <circle cx=\"233\" cy=\"150\" fill=\"#22d3a0\" r=\"4\"></circle>\n  <text fill=\"#22d3a0\" font-size=\"11\" x=\"30\" y=\"154\">5%</text>\n  <text fill=\"#22d3a0\" font-size=\"11\" x=\"223\" y=\"245\">I₂</text>\n</svg>",
      "caption": "Kurva Demand of Investment (DI) memiliki lereng negatif. Saat suku bunga tinggi (10%), biaya utang mahal, sehingga volume investasi rendah (I₁). Saat suku bunga anjlok ke 5%, pengusaha terpacu meminjam uang, sehingga investasi membengkak tajam ke I₂."
    },
    {
      "kind": "h2",
      "text": "Titik Temu: Keseimbangan Output (Equilibrium)"
    },
    {
      "kind": "p",
      "text": "Perekonomian dinyatakan \"Seimbang\" (Equilibrium) jika total barang yang diproduksi pabrik tepat habis diserap oleh total belanja rencana masyarakat. Jika produksi kelebihan, barang menumpuk di gudang. Jika belanja membludak, barang di gudang ludes seketika."
    },
    {
      "kind": "formula",
      "text": "Dua Pendekatan Mencari Keseimbangan:\n\n1. Pendekatan Pengeluaran Agregat: Y = C + I\n2. Pendekatan Suntikan - Bocoran: S = I",
      "note": "Filosofi S = I: Tabungan (S) adalah uang yang 'BOCOR' keluar dari perputaran belanja. Sedangkan Investasi (I) adalah uang segar dari pinjaman bank yang 'DISUNTIKKAN' kembali ke ekonomi. Output akan stabil sempurna jika nilai Suntikan persis menambal nilai Bocoran."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Soal Ujian: Hitung Y Keseimbangan",
      "text": "Diberikan C = 300 + 0,75Y dan Investasi pengusaha dipatok tetap I = 400.\n\n**Cara Y = C + I**\nY = (300 + 0,75Y) + 400\nY = 700 + 0,75Y\nY - 0,75Y = 700\n0,25Y = 700  =>  **Y = 2.800**\n\n**Cara Bocoran-Suntikan (S = I)**\nFungsi S = -300 + 0,25Y\n-300 + 0,25Y = 400\n0,25Y = 700  =>  **Y = 2.800**\n\nHasil kedua pendekatan wajib membuahkan angka ekuilibrium yang sama persis!"
    },
    {
      "kind": "h2",
      "text": "Angka Pengganda Investasi (The Multiplier Effect)"
    },
    {
      "kind": "p",
      "text": "Konsep multiplier adalah \"Keajaiban Terbesar\" dalam pandangan Keynesian. Jika pengusaha menyuntikkan dana segar Rp1 Miliar untuk membangun pabrik, total pendapatan nasional (GDP) pada akhirnya tidak hanya naik Rp1 Miliar, melainkan bisa melambung hingga Rp4 Miliar atau lebih! Mengapa?"
    },
    {
      "kind": "ul",
      "items": [
        "**Efek Domino / Arithmathic Approach:** Uang Rp1 Miliar itu dipakai menggaji kuli bangunan. Kuli bangunan (yang punya MPC 0,8) membelanjakan Rp800 Juta untuk beli beras. Petani beras membelanjakan Rp640 Juta untuk beli motor. Uang itu terus berputar dari tangan ke tangan tanpa henti.",
        "Semakin boros masyarakatnya (nilai MPC semakin besar), perputaran uangnya semakin lama dan ganas, menghasilkan angka pengganda yang raksasa."
      ]
    },
    {
      "kind": "formula",
      "text": "Investment Multiplier Coefficient (k):\nk = 1 / (1 - MPC)  atau  k = 1 / MPS\n\nΔY = k × ΔI",
      "note": "Contoh: Jika MPC = 2/3 (artinya MPS = 1/3), maka k = 1 / (1/3) = 3. Jika ada pengusaha berinvestasi Rp 1.000 Triliun, maka Total GDP akan meledak sebanyak: 3 × 1.000 = Rp 3.000 Triliun!"
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
