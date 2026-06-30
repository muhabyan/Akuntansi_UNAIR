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
  "title": "Closed Economy: Consumption, Saving, and Investment",
  "ref": "Salinan 9-10. Closed Economy",
  "intro": "Membahas hubungan konsumsi, tabungan, dan investasi dalam ekonomi tertutup.",
  "objectives": [
    "Memahami konsep Consumption dan Saving.",
    "Memahami fungsi konsumsi dan tabungan.",
    "Memahami konsep Marginal Propensity to Consume (MPC) dan Marginal Propensity to Save (MPS).",
    "Memahami konsep Investasi."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Cover"
    },
    {
      "kind": "p",
      "text": "Judul materi: `Closed Economy`."
    },
    {
      "kind": "p",
      "text": "Keterangan waktu: `Week 9-10`."
    },
    {
      "kind": "p",
      "text": "Inti materi: Modul ini membahas ekonomi tertutup, yaitu ekonomi yang tidak memasukkan transaksi luar negeri. Fokusnya adalah hubungan konsumsi, tabungan, investasi, keseimbangan output nasional, multiplier, dan kebijakan fiskal."
    },
    {
      "kind": "p",
      "text": "Implementasi website: Jadikan slide ini sebagai hero section TM 9 dan TM 10, tetapi isi TM 9 dimulai dari konsumsi, tabungan, dan investasi."
    },
    {
      "kind": "h2",
      "text": "Outline"
    },
    {
      "kind": "p",
      "text": "Materi yang tercakup dalam file:"
    },
    {
      "kind": "ol",
      "items": [
        "Two-sectors economy.",
        "Consumption and saving.",
        "Investment.",
        "National income equilibrium and multiplier model.",
        "Three-sectors economy.",
        "The role of fiscal policy in the multiplier model."
      ]
    },
    {
      "kind": "p",
      "text": "Pembagian modul:"
    },
    {
      "kind": "p",
      "text": "TM 9 mencakup poin 1 sampai bagian awal investasi, yaitu slide 1-22."
    },
    {
      "kind": "p",
      "text": "TM 10 mencakup peran investasi, keseimbangan pendapatan nasional, multiplier, tiga sektor, dan kebijakan fiskal, yaitu slide 23-52."
    },
    {
      "kind": "h2",
      "text": "Consumption"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Consumption adalah aktivitas yang mengurangi atau menghabiskan utility barang dan jasa. Personal consumption expenditure adalah pengeluaran rumah tangga untuk membeli barang tidak tahan lama, barang tahan lama kecuali rumah baru, dan jasa."
    },
    {
      "kind": "p",
      "text": "Rumus fungsi konsumsi linear:"
    },
    {
      "kind": "formula",
      "text": "C = C_0 + bY"
    },
    {
      "kind": "p",
      "text": "Makna simbol:"
    },
    {
      "kind": "p",
      "text": "`C` adalah konsumsi. `C0` atau `C₀` adalah autonomous consumption. `b` adalah marginal propensity to consume atau MPC. `Y` adalah disposable income pada model sederhana slide ini. Nilai `b` berada pada interval `0 < b < 1`."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Konsumsi terdiri dari dua komponen. Pertama, konsumsi otonom yang tetap ada meskipun pendapatan nol. Kedua, konsumsi yang dipengaruhi pendapatan. Jika `b = 0.8`, tambahan pendapatan 1 unit akan menaikkan konsumsi sebesar 0.8 unit."
    },
    {
      "kind": "p",
      "text": "Implementasi website: Buat kartu konsep `Autonomous Consumption` dan `Induced Consumption`. Tambahkan formula interaktif agar pengguna bisa mengganti nilai `C0`, `b`, dan `Y`."
    },
    {
      "kind": "h2",
      "text": "Saving"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Personal saving adalah bagian dari disposable income yang tidak dikonsumsi."
    },
    {
      "kind": "p",
      "text": "Derivasi fungsi tabungan:"
    },
    {
      "kind": "formula",
      "text": "S = Y - C"
    },
    {
      "kind": "p",
      "text": "Karena:"
    },
    {
      "kind": "formula",
      "text": "C = C_0 + bY"
    },
    {
      "kind": "p",
      "text": "Maka:"
    },
    {
      "kind": "formula",
      "text": "S = Y - (C_0 + bY)"
    },
    {
      "kind": "p",
      "text": "Sehingga:"
    },
    {
      "kind": "formula",
      "text": "S = -C_0 + (1-b)Y"
    },
    {
      "kind": "p",
      "text": "Makna simbol:"
    },
    {
      "kind": "p",
      "text": "`S` adalah saving atau tabungan. `-C0` adalah dissaving atau tabungan negatif. `(1-b)` adalah marginal propensity to save atau MPS. `Y` adalah disposable income. Nilai `b` berada antara 0 dan 1, sehingga MPS juga berada antara 0 dan 1."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Tabungan adalah sisa dari pendapatan setelah konsumsi. Jika pendapatan rendah, konsumsi dapat melebihi pendapatan sehingga tabungan negatif. Ketika pendapatan meningkat, tabungan naik mengikuti slope `(1-b)`."
    },
    {
      "kind": "p",
      "text": "Catatan validasi: Jangan tampilkan bentuk `S = Y - C0 + bY` sebagai bentuk akhir. Bentuk final yang konsisten adalah `S = -C0 + (1-b)Y`."
    },
    {
      "kind": "h2",
      "text": "Income, Consumption and Saving"
    },
    {
      "kind": "p",
      "text": "Tabel ini menunjukkan hubungan disposable income, consumption, dan saving. Saving dihitung sebagai disposable income dikurangi consumption."
    },
    {
      "kind": "table",
      "headers": [
        "Kelompok",
        "Disposable Income",
        "Consumption",
        "Saving = Income - Consumption"
      ],
      "rows": [
        [
          "A",
          "24,000",
          "24,200",
          "-200"
        ],
        [
          "B",
          "25,000",
          "25,000",
          "0"
        ],
        [
          "C",
          "26,000",
          "25,800",
          "200"
        ],
        [
          "D",
          "27,000",
          "26,600",
          "400"
        ],
        [
          "E",
          "28,000",
          "27,400",
          "600"
        ],
        [
          "F",
          "29,000",
          "28,200",
          "800"
        ],
        [
          "G",
          "30,000",
          "29,000",
          "1,000"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Makna tabel: Saat disposable income sebesar 24,000, konsumsi sebesar 24,200. Artinya rumah tangga melakukan dissaving sebesar 200. Titik B adalah break-even karena pendapatan sama dengan konsumsi. Setelah pendapatan melewati 25,000, saving menjadi positif."
    },
    {
      "kind": "p",
      "text": "Catatan koreksi: Pada hasil ekstraksi teks PPT, baris A kadang terbaca `200`. Secara ekonomi dan aritmetika harus `-200`, karena `24,000 - 24,200 = -200`."
    },
    {
      "kind": "p",
      "text": "Implementasi website: Tabel ini wajib muncul sebagai tabel HTML. Tambahkan highlight pada baris B sebagai `break-even point`."
    },
    {
      "kind": "h2",
      "text": "Income, Consumption and Saving: Grafik Fungsi Konsumsi"
    },
    {
      "kind": "p",
      "text": "Visual: grafik fungsi konsumsi dengan sumbu horizontal `Disposable income` dan sumbu vertikal `Consumption expenditures`. Titik A-G mengikuti data slide 5. Garis 45 derajat menunjukkan kondisi `Y = C`. Garis konsumsi menunjukkan hubungan aktual antara disposable income dan konsumsi."
    },
    {
      "kind": "p",
      "text": "Data grafik:"
    },
    {
      "kind": "table",
      "headers": [
        "Titik",
        "Disposable Income",
        "Consumption"
      ],
      "rows": [
        [
          "A",
          "24,000",
          "24,200"
        ],
        [
          "B",
          "25,000",
          "25,000"
        ],
        [
          "C",
          "26,000",
          "25,800"
        ],
        [
          "D",
          "27,000",
          "26,600"
        ],
        [
          "E",
          "28,000",
          "27,400"
        ],
        [
          "F",
          "29,000",
          "28,200"
        ],
        [
          "G",
          "30,000",
          "29,000"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Makna visual: Titik B adalah break-even point. Di kiri titik B, konsumsi lebih besar daripada pendapatan sehingga terjadi dissaving. Di kanan titik B, pendapatan lebih besar daripada konsumsi sehingga terjadi saving. Jarak vertikal antara garis 45 derajat dan fungsi konsumsi menunjukkan besar tabungan atau dissaving."
    },
    {
      "kind": "p",
      "text": "Instruksi chart: Buat line chart dengan dua garis: `45-degree line: C = Y` dan `Consumption function`. Gunakan label sumbu lengkap. Jangan hanya menulis `DI` dan `C`. Tambahkan anotasi `Break-even point` pada B."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide06_consumption_function.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "Income, Consumption and Saving: Grafik Fungsi Tabungan"
    },
    {
      "kind": "p",
      "text": "Visual: grafik fungsi tabungan sebagai cerminan dari fungsi konsumsi. Sumbu horizontal adalah `Disposable income`; sumbu vertikal adalah `Net saving`."
    },
    {
      "kind": "p",
      "text": "Data grafik:"
    },
    {
      "kind": "table",
      "headers": [
        "Titik",
        "Disposable Income",
        "Saving"
      ],
      "rows": [
        [
          "A",
          "24,000",
          "-200"
        ],
        [
          "B",
          "25,000",
          "0"
        ],
        [
          "C",
          "26,000",
          "200"
        ],
        [
          "D",
          "27,000",
          "400"
        ],
        [
          "E",
          "28,000",
          "600"
        ],
        [
          "F",
          "29,000",
          "800"
        ],
        [
          "G",
          "30,000",
          "1,000"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Makna visual: Fungsi tabungan memotong sumbu horizontal pada titik B, yaitu saat tabungan sama dengan nol. Di bawah titik B, saving negatif. Di atas titik B, saving positif. Semakin tinggi disposable income, semakin tinggi saving."
    },
    {
      "kind": "p",
      "text": "Instruksi chart: Buat line chart dengan satu garis `Saving function`. Pastikan area negatif pada saving tetap terlihat agar konsep dissaving tidak hilang."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide07_saving_function.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "MPC and MPS"
    },
    {
      "kind": "p",
      "text": "Definisi: MPC adalah slope dari fungsi konsumsi. MPC mengukur tambahan konsumsi akibat tambahan satu unit disposable income. MPS adalah slope dari fungsi tabungan. MPS mengukur bagian dari tambahan disposable income yang masuk ke tambahan tabungan."
    },
    {
      "kind": "p",
      "text": "Rumus hubungan:"
    },
    {
      "kind": "formula",
      "text": "MPC + MPS = 1"
    },
    {
      "kind": "p",
      "text": "Rumus operasional:"
    },
    {
      "kind": "formula",
      "text": "MPC = \\frac{\\Delta C}{\\Delta Y_d}"
    },
    {
      "kind": "formula",
      "text": "MPS = \\frac{\\Delta S}{\\Delta Y_d}"
    },
    {
      "kind": "p",
      "text": "Makna simbol: `ΔC` adalah perubahan konsumsi. `ΔS` adalah perubahan tabungan. `ΔYd` adalah perubahan disposable income."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Karena tambahan pendapatan hanya dapat digunakan untuk konsumsi atau tabungan, jumlah MPC dan MPS selalu sama dengan satu. Jika MPC = 0.8, maka MPS = 0.2."
    },
    {
      "kind": "h2",
      "text": "MPC and MPS: Tabel Marginal Propensities"
    },
    {
      "kind": "p",
      "text": "Tabel ini menunjukkan bahwa setiap kenaikan disposable income sebesar 1,000 menaikkan konsumsi sebesar 800 dan saving sebesar 200."
    },
    {
      "kind": "table",
      "headers": [
        "Kelompok",
        "Disposable Income",
        "Consumption",
        "MPC",
        "Net Saving",
        "MPS"
      ],
      "rows": [
        [
          "A",
          "24,000",
          "24,200",
          "-",
          "-200",
          "-"
        ],
        [
          "B",
          "25,000",
          "25,000",
          "800 / 1,000 = 0.80",
          "0",
          "200 / 1,000 = 0.20"
        ],
        [
          "C",
          "26,000",
          "25,800",
          "800 / 1,000 = 0.80",
          "200",
          "200 / 1,000 = 0.20"
        ],
        [
          "D",
          "27,000",
          "26,600",
          "800 / 1,000 = 0.80",
          "400",
          "200 / 1,000 = 0.20"
        ],
        [
          "E",
          "28,000",
          "27,400",
          "800 / 1,000 = 0.80",
          "600",
          "200 / 1,000 = 0.20"
        ],
        [
          "F",
          "29,000",
          "28,200",
          "800 / 1,000 = 0.80",
          "800",
          "200 / 1,000 = 0.20"
        ],
        [
          "G",
          "30,000",
          "29,000",
          "800 / 1,000 = 0.80",
          "1,000",
          "200 / 1,000 = 0.20"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Makna tabel: Ketika disposable income naik dari 25,000 ke 26,000, consumption naik dari 25,000 ke 25,800. Perubahannya 800, sehingga MPC = 0.80. Pada saat yang sama, saving naik dari 0 ke 200, sehingga MPS = 0.20."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide09_mpc_mps_table.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "MPC and MPS: Slope Consumption Function"
    },
    {
      "kind": "p",
      "text": "Visual: grafik fungsi konsumsi yang menampilkan perubahan consumption sebesar 800 ketika disposable income naik sebesar 1,000. Hal ini menunjukkan bahwa slope fungsi konsumsi adalah MPC."
    },
    {
      "kind": "p",
      "text": "Rumus:"
    },
    {
      "kind": "formula",
      "text": "MPC = \\frac{\\Delta C}{\\Delta Y_d} = \\frac{800}{1000} = 0.8"
    },
    {
      "kind": "p",
      "text": "Makna visual: Garis konsumsi memiliki slope lebih kecil daripada garis 45 derajat karena tidak semua tambahan pendapatan dikonsumsi. Sebagian pendapatan tambahan masuk ke saving."
    },
    {
      "kind": "p",
      "text": "Instruksi chart: Gunakan data slide 6. Tambahkan anotasi vertikal `ΔC = 800` dan anotasi horizontal `ΔYd = 1,000` antara titik B dan C."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide10_mpc_slope.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "MPC and MPS: Formula dan Diagram Tambahan"
    },
    {
      "kind": "p",
      "text": "Slide ini memuat empat visual pendukung."
    },
    {
      "kind": "p",
      "text": "Pertama, diagram fungsi konsumsi:"
    },
    {
      "kind": "formula",
      "text": "C = C_0 + cY_D"
    },
    {
      "kind": "p",
      "text": "atau jika ada pajak:"
    },
    {
      "kind": "formula",
      "text": "C = C_0 + c(Y - T)"
    },
    {
      "kind": "p",
      "text": "Makna simbol: `c` pada gambar sama dengan `b` atau MPC. `Y_D` adalah disposable income. `T` adalah pajak."
    },
    {
      "kind": "p",
      "text": "Kedua, rumus MPC:"
    },
    {
      "kind": "formula",
      "text": "MPC = \\frac{\\Delta C}{\\Delta Y}"
    },
    {
      "kind": "p",
      "text": "Contoh dalam gambar:"
    },
    {
      "kind": "formula",
      "text": "MPC = \\frac{C_2 - C_1}{Y_2 - Y_1} = \\frac{600000 - 400000}{1000000 - 500000} = \\frac{200000}{500000} = 0.4"
    },
    {
      "kind": "p",
      "text": "Ketiga, rumus konsumsi dengan pajak:"
    },
    {
      "kind": "formula",
      "text": "C = \\text{Autonomous Consumption} + \\text{Induced Consumption}"
    },
    {
      "kind": "formula",
      "text": "C = C_0 + cY_D"
    },
    {
      "kind": "formula",
      "text": "C = C_0 + c(Y - T)"
    },
    {
      "kind": "p",
      "text": "Keempat, rumus MPS:"
    },
    {
      "kind": "formula",
      "text": "MPS = \\frac{\\Delta S}{\\Delta Y_d} = \\frac{S_2 - S_1}{Y_2 - Y_1}"
    },
    {
      "kind": "p",
      "text": "Makna visual: Slide ini memperjelas bahwa fungsi konsumsi dan tabungan dapat diturunkan dari disposable income. Ketika ada pajak, pendapatan yang relevan untuk konsumsi bukan `Y`, tetapi `Yd = Y - T`."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide11_consumption_curve_diagram.png",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "MPC and MPS: Hubungan Fungsi Konsumsi dan Fungsi Tabungan"
    },
    {
      "kind": "p",
      "text": "Visual: diagram gabungan fungsi konsumsi dan fungsi tabungan. Garis `C = Y` menunjukkan kondisi pendapatan sama dengan konsumsi. Fungsi konsumsi ditulis sebagai `C = a + bY`. Fungsi tabungan ditulis sebagai `S = -a + (1-b)Y`."
    },
    {
      "kind": "p",
      "text": "Makna simbol: `a` sama dengan autonomous consumption atau `C0`. `b` adalah MPC. `(1-b)` adalah MPS. `YE` adalah tingkat pendapatan pada titik break-even."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Titik E adalah titik ketika konsumsi sama dengan pendapatan. Pada titik ini saving sama dengan nol. Jika pendapatan di bawah `YE`, saving negatif. Jika pendapatan di atas `YE`, saving positif."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide12_consumption_saving_combined.png",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "Investment"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Dalam makroekonomi, investment atau real investment berarti penambahan stok aset produktif atau barang modal. Contohnya adalah pembelian kapital baru seperti peralatan dan bangunan."
    },
    {
      "kind": "p",
      "text": "Contoh: Ketika Amazon membangun gudang baru atau keluarga membangun rumah baru, aktivitas tersebut termasuk investment dalam makroekonomi."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Investasi makroekonomi berbeda dari pemakaian kata investasi sehari-hari. Fokusnya bukan sekadar pembelian aset keuangan, melainkan penciptaan atau penambahan kapital riil yang meningkatkan kapasitas produksi."
    },
    {
      "kind": "h2",
      "text": "Investment: Real Investment vs Financial Investment"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Banyak orang menyebut pembelian tanah, saham, atau pembukaan rekening tabungan sebagai investasi. Dalam ekonomi, transaksi tersebut lebih tepat disebut financial transaction atau financial investment."
    },
    {
      "kind": "p",
      "text": "Penjelasan: Jika seseorang membeli saham, orang lain menjual saham tersebut. Efek bersih terhadap stok kapital riil ekonomi bisa nol. Investment dalam makroekonomi baru terjadi ketika real capital diproduksi."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Perbedaan ini penting karena model pendapatan nasional menghitung investasi sebagai penambahan kapasitas produksi, bukan hanya perpindahan kepemilikan aset."
    },
    {
      "kind": "h2",
      "text": "Istilah BPS: Investasi, PMTB, dan Perubahan Stok"
    },
    {
      "kind": "p",
      "text": "Menurut istilah BPS dalam slide, investasi mencakup pembentukan modal tetap bruto dan perubahan stok."
    },
    {
      "kind": "p",
      "text": "Pembentukan Modal Tetap Bruto atau PMTB setara dengan Gross Fixed Capital Formation atau GFCF. PMTB adalah pengeluaran untuk barang modal yang memiliki umur pemakaian lebih dari satu tahun dan bukan barang konsumsi."
    },
    {
      "kind": "p",
      "text": "Cakupan PMTB meliputi bangunan tempat tinggal, bangunan bukan tempat tinggal, bangunan lain seperti jalan dan bandara, serta mesin dan peralatan."
    },
    {
      "kind": "p",
      "text": "Catatan: Pengeluaran barang modal untuk keperluan militer tidak dicakup dalam rincian PMTB, tetapi digolongkan sebagai konsumsi pemerintah."
    },
    {
      "kind": "p",
      "text": "Implementasi website: Buat box khusus `Istilah BPS` agar mahasiswa memahami istilah Indonesia dan padanan Inggrisnya."
    },
    {
      "kind": "h2",
      "text": "Perubahan Stok"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Stok terdiri atas barang yang akan dipakai, barang dalam proses pengerjaan, dan barang jadi yang belum dijual. Pemegang stok sebagian besar adalah perusahaan, termasuk perusahaan pemerintah dan pemerintah sendiri."
    },
    {
      "kind": "p",
      "text": "Contoh stok pemerintah: persediaan barang strategis seperti bahan pangan."
    },
    {
      "kind": "p",
      "text": "Rumus konseptual:"
    },
    {
      "kind": "formula",
      "text": "\\text{Perubahan stok} = \\text{Stok akhir tahun} - \\text{Stok awal tahun}"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Jika stok akhir lebih besar daripada stok awal, terjadi penambahan stok yang masuk ke komponen investasi. Jika stok akhir lebih kecil, terjadi pengurangan stok."
    },
    {
      "kind": "p",
      "text": "Catatan slide: Data perubahan stok barang strategis pemerintah belum tersedia."
    },
    {
      "kind": "h2",
      "text": "Important to Note: Capital"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Capital terdiri dari durable produced items yang digunakan sebagai input produktif untuk produksi lebih lanjut."
    },
    {
      "kind": "p",
      "text": "Kategori tangible capital:"
    },
    {
      "kind": "ol",
      "items": [
        "Structures, seperti pabrik dan rumah.",
        "Equipment, seperti mobil, machine tools, dan truk.",
        "Inventories, seperti mobil di dealer."
      ]
    },
    {
      "kind": "p",
      "text": "Perkembangan baru: Intangible capital atau e-capital semakin penting. Contohnya adalah software, paten, dan brand names."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Kapital modern tidak hanya berbentuk fisik. Aset tidak berwujud juga dapat meningkatkan produktivitas dan nilai produksi."
    },
    {
      "kind": "h2",
      "text": "Important to Note: Tangible, Intangible, and Financial Assets"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Tangible assets dan intangible assets harus dibedakan dari financial assets."
    },
    {
      "kind": "p",
      "text": "Financial assets adalah klaim moneter satu pihak terhadap pihak lain. Bentuknya bisa berupa dokumen kertas atau catatan elektronik."
    },
    {
      "kind": "p",
      "text": "Contoh: Mortgage adalah klaim terhadap pemilik rumah untuk membayar bunga dan pokok pinjaman setiap bulan. Pembayaran tersebut dipakai untuk melunasi pinjaman yang membantu pembelian rumah."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Dalam contoh mortgage, rumah adalah tangible asset, sedangkan mortgage adalah financial asset. Tangible asset dapat menjadi collateral bagi financial asset."
    },
    {
      "kind": "h2",
      "text": "Important to Note: Fungsi Financial Assets"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Tangible assets penting karena meningkatkan produktivitas faktor produksi lain. Namun financial assets juga penting karena menjembatani mismatch antara saver dan investor."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Saver adalah pihak yang memiliki kelebihan dana, sedangkan investor adalah pihak yang membutuhkan dana untuk membiayai investasi riil. Financial assets membantu mengalirkan dana dari saver ke investor."
    },
    {
      "kind": "p",
      "text": "Implementasi website: Buat ilustrasi alur `Saver -> Financial Market -> Investor -> Real Capital`."
    },
    {
      "kind": "h2",
      "text": "Important to Note: Rate of Return dan Interest Rate"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Rate of return on investment adalah return bersih tahunan per unit modal yang diinvestasikan."
    },
    {
      "kind": "p",
      "text": "Contoh: Perusahaan rental mobil KARTIKA membeli mobil bekas seharga 20,000 dolar. Setelah mengurangi semua biaya dan mengasumsikan harga mobil tidak berubah, perusahaan memperoleh net rental 2,400 dolar per tahun."
    },
    {
      "kind": "p",
      "text": "Rumus:"
    },
    {
      "kind": "formula",
      "text": "\\text{Rate of return} = \\frac{2400}{20000} = 0.12 = 12\\%"
    },
    {
      "kind": "p",
      "text": "Interest rate adalah tingkat pengembalian aset keuangan yang diukur dalam persen per tahun."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Rate of return mengukur profitabilitas investasi riil. Interest rate mengukur biaya atau imbal hasil finansial. Keputusan investasi sering membandingkan keduanya."
    },
    {
      "kind": "h2",
      "text": "Important to Note: Present Value of Assets"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Present value of assets adalah nilai hari ini dari aliran pendapatan masa depan."
    },
    {
      "kind": "p",
      "text": "Rumus umum present value:"
    },
    {
      "kind": "formula",
      "text": "V = \\frac{N_1}{1+i} + \\frac{N_2}{(1+i)^2} + \\cdots + \\frac{N_t}{(1+i)^t}"
    },
    {
      "kind": "p",
      "text": "Makna simbol: `V` adalah present value. `N1`, `N2`, sampai `Nt` adalah net receipts pada periode 1, 2, sampai t. `i` adalah interest rate. `t` adalah periode waktu."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Semakin tinggi interest rate, semakin kecil present value dari pendapatan masa depan. Karena itu, kenaikan suku bunga cenderung menurunkan harga aset jangka panjang."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide21_present_value_formula.png",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "Important to Note: Interest Rates, Asset Prices, Real and Nominal Interest Rates"
    },
    {
      "kind": "p",
      "text": "Konsep utama pertama: Harga aset cenderung bergerak berlawanan arah dengan interest rate. Present value turun ketika interest rate naik."
    },
    {
      "kind": "p",
      "text": "Implikasi: Harga saham, obligasi, real estate, dan banyak aset jangka panjang akan turun ketika suku bunga meningkat."
    },
    {
      "kind": "p",
      "text": "Konsep utama kedua: Nominal interest rate adalah suku bunga uang dalam satuan uang. Real interest rate adalah nominal interest rate yang sudah dikoreksi oleh inflasi."
    },
    {
      "kind": "p",
      "text": "Rumus tambahan untuk penjelasan website:"
    },
    {
      "kind": "formula",
      "text": "r \\approx i - \\pi"
    },
    {
      "kind": "p",
      "text": "Makna simbol: `r` adalah real interest rate. `i` adalah nominal interest rate. `π` adalah inflation rate."
    },
    {
      "kind": "p",
      "text": "Catatan: Rumus `r ≈ i - π` adalah penjelasan tambahan standar untuk memperjelas konsep real interest rate. Slide hanya menyatakan definisi verbal."
    },
    {
      "kind": "p",
      "text": "---"
    }
  ]
};

const tm10: Reading = {
  "tm": 10,
  "title": "Closed Economy: Equilibrium Output, Multiplier, and Fiscal Policy",
  "ref": "Salinan 9-10. Closed Economy",
  "intro": "Menentukan keseimbangan output nasional, memahami multiplier model, dan peran kebijakan fiskal.",
  "objectives": [
    "Memahami penentuan output keseimbangan (Equilibrium Output).",
    "Memahami model Multiplier.",
    "Menganalisis keseimbangan tiga sektor dengan peran kebijakan fiskal.",
    "Memahami konsep Output Gap dan Paradox of Thrift."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "The Roles of Investment in Macroeconomics"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Investment memiliki dua peran dalam makroekonomi."
    },
    {
      "kind": "p",
      "text": "Pertama, investment memengaruhi output jangka pendek melalui dampaknya terhadap aggregate demand. Ketika investasi meningkat, pengeluaran agregat naik dan output dapat meningkat."
    },
    {
      "kind": "p",
      "text": "Kedua, investment memengaruhi pertumbuhan output jangka panjang melalui capital accumulation. Semakin besar akumulasi modal, semakin tinggi kapasitas produksi masa depan."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Investasi bekerja melalui dua kanal. Kanal permintaan bekerja dalam jangka pendek. Kanal akumulasi kapital bekerja dalam jangka panjang."
    },
    {
      "kind": "h2",
      "text": "Determinants of Investment"
    },
    {
      "kind": "p",
      "text": "Tiga determinan utama investment:"
    },
    {
      "kind": "ol",
      "items": [
        "Revenue, yaitu overall level of output atau GDP.",
        "Cost, yaitu harga barang modal, interest rate, dan pajak.",
        "Expectation, yaitu ekspektasi profit dan business confidence."
      ]
    },
    {
      "kind": "p",
      "text": "Interpretasi: Investasi meningkat ketika output tinggi, biaya modal rendah, suku bunga rendah, pajak tidak terlalu memberatkan, dan ekspektasi bisnis positif. Sebaliknya, investasi menurun ketika biaya pembiayaan naik atau ekspektasi profit memburuk."
    },
    {
      "kind": "h2",
      "text": "Investment Demand Curve: Tabel Profitabilitas Investasi"
    },
    {
      "kind": "p",
      "text": "Tabel ini menunjukkan bahwa profitabilitas investasi bergantung pada interest rate."
    },
    {
      "kind": "table",
      "headers": [
        "Project",
        "Total Investment ($ million)",
        "Annual Revenue per $1,000 Invested",
        "Cost per $1,000 at 10%",
        "Cost per $1,000 at 5%",
        "Annual Net Profit at 10%",
        "Annual Net Profit at 5%"
      ],
      "rows": [
        [
          "A",
          "1",
          "1,500",
          "100",
          "50",
          "1,400",
          "1,450"
        ],
        [
          "B",
          "4",
          "220",
          "100",
          "50",
          "120",
          "170"
        ],
        [
          "C",
          "10",
          "160",
          "100",
          "50",
          "60",
          "110"
        ],
        [
          "D",
          "10",
          "130",
          "100",
          "50",
          "30",
          "80"
        ],
        [
          "E",
          "5",
          "110",
          "100",
          "50",
          "10",
          "60"
        ],
        [
          "F",
          "15",
          "90",
          "100",
          "50",
          "-10",
          "40"
        ],
        [
          "G",
          "10",
          "60",
          "100",
          "50",
          "-40",
          "10"
        ],
        [
          "H",
          "20",
          "40",
          "100",
          "50",
          "-60",
          "-10"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Makna tabel: Pada interest rate 10 persen, proyek A sampai E masih menghasilkan net profit positif. Pada interest rate 5 persen, proyek A sampai G menghasilkan net profit positif. Penurunan interest rate membuat lebih banyak proyek layak secara finansial."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide25_investment_profitability_table.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "Investment Demand Curve: Investment Depends upon Interest Rate"
    },
    {
      "kind": "p",
      "text": "Visual: kurva demand-for-investment schedule berbentuk tangga. Sumbu vertikal menunjukkan return on investment atau interest rate. Sumbu horizontal menunjukkan investment spending."
    },
    {
      "kind": "p",
      "text": "Data konseptual yang dapat dipakai dari slide 25:"
    },
    {
      "kind": "table",
      "headers": [
        "Interest Rate",
        "Proyek Layak",
        "Cumulative Investment"
      ],
      "rows": [
        [
          "20%",
          "A dan B",
          "5"
        ],
        [
          "15%",
          "A, B, dan C",
          "15"
        ],
        [
          "10%",
          "A sampai E",
          "30"
        ],
        [
          "5%",
          "A sampai G",
          "55"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Makna visual: Ketika interest rate turun, lebih banyak proyek menjadi menguntungkan. Karena itu investment spending naik. Hubungan antara interest rate dan investment demand bersifat negatif."
    },
    {
      "kind": "p",
      "text": "Instruksi chart: Buat step chart. Titik penting: pada 10 persen investment sekitar 30 juta dolar; pada 5 persen investment sekitar 55 juta dolar."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide26_investment_demand_schedule.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "Investment Demand Curve: Shifts in Investment Demand Function"
    },
    {
      "kind": "p",
      "text": "Visual: tiga panel pergeseran investment demand function."
    },
    {
      "kind": "p",
      "text": "Panel a, Higher Output: kenaikan output mendorong investment demand bergeser ke kanan. Penyebabnya adalah prospek revenue yang lebih tinggi."
    },
    {
      "kind": "p",
      "text": "Panel b, Higher Taxes: pajak yang lebih tinggi mengurangi profitabilitas investasi sehingga investment demand bergeser ke kiri."
    },
    {
      "kind": "p",
      "text": "Panel c, Business Euphoria: optimisme bisnis meningkatkan ekspektasi profit sehingga investment demand bergeser ke kanan."
    },
    {
      "kind": "p",
      "text": "Makna visual: Perubahan interest rate menyebabkan pergerakan sepanjang kurva investasi. Perubahan output, pajak, dan ekspektasi menyebabkan pergeseran kurva investasi."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide27_investment_demand_shift.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "Equilibrium Output in the Two-Sectors Economy: Y = C + I Approach"
    },
    {
      "kind": "p",
      "text": "Model dua sektor terdiri dari rumah tangga dan perusahaan. Dalam model ini belum ada pemerintah dan luar negeri."
    },
    {
      "kind": "p",
      "text": "Persamaan dasar:"
    },
    {
      "kind": "formula",
      "text": "Y = C + I"
    },
    {
      "kind": "p",
      "text": "Dengan fungsi konsumsi:"
    },
    {
      "kind": "formula",
      "text": "C = C_0 + bY"
    },
    {
      "kind": "p",
      "text": "Substitusi:"
    },
    {
      "kind": "formula",
      "text": "Y = C_0 + bY + I"
    },
    {
      "kind": "p",
      "text": "Penyelesaian:"
    },
    {
      "kind": "formula",
      "text": "Y - bY = C_0 + I"
    },
    {
      "kind": "formula",
      "text": "(1-b)Y = C_0 + I"
    },
    {
      "kind": "formula",
      "text": "Y = \\frac{1}{1-b}(C_0 + I)"
    },
    {
      "kind": "p",
      "text": "Makna simbol: `Y` adalah equilibrium output. `C0` adalah konsumsi otonom. `b` adalah MPC. `I` adalah planned investment."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Output keseimbangan naik ketika konsumsi otonom atau investasi naik. Besarnya kenaikan diperkuat oleh multiplier `1/(1-b)`."
    },
    {
      "kind": "p",
      "text": "Asset referensi grafik: `assets/slide28_equilibrium_y_ci_graph_lightmode.jpg`."
    },
    {
      "kind": "h2",
      "text": "Equilibrium Output in the Two-Sector Economy: S = I Approach"
    },
    {
      "kind": "p",
      "text": "Pendekatan kedua menentukan keseimbangan melalui kesamaan saving dan investment."
    },
    {
      "kind": "p",
      "text": "Persamaan dasar:"
    },
    {
      "kind": "formula",
      "text": "I = S"
    },
    {
      "kind": "p",
      "text": "Dengan fungsi tabungan:"
    },
    {
      "kind": "formula",
      "text": "S = -C_0 + (1-b)Y"
    },
    {
      "kind": "p",
      "text": "Substitusi:"
    },
    {
      "kind": "formula",
      "text": "I = -C_0 + (1-b)Y"
    },
    {
      "kind": "p",
      "text": "Penyelesaian:"
    },
    {
      "kind": "formula",
      "text": "Y = \\frac{1}{1-b}(C_0 + I)"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Pendekatan `Y = C + I` dan `S = I` menghasilkan equilibrium output yang sama. Perbedaannya hanya sudut pandang. Pendekatan pertama melihat pengeluaran agregat. Pendekatan kedua melihat kebocoran dan injeksi dalam perekonomian."
    },
    {
      "kind": "p",
      "text": "Asset referensi grafik: `assets/slide29_equilibrium_si_graph_lightmode.jpg`."
    },
    {
      "kind": "h2",
      "text": "Equilibrium Output in the Two-Sector Economy: Tabel GDP Determination"
    },
    {
      "kind": "p",
      "text": "Tabel ini menunjukkan output equilibrium ketika total planned spending sama dengan GDP."
    },
    {
      "kind": "table",
      "headers": [
        "GDP and DI",
        "Planned Consumption",
        "Planned Saving",
        "Planned Investment",
        "Total Planned Expenditure C + I",
        "Tendency of Output"
      ],
      "rows": [
        [
          "4,200",
          "3,800",
          "400",
          "200",
          "4,000",
          "Contraction"
        ],
        [
          "3,900",
          "3,600",
          "300",
          "200",
          "3,800",
          "Contraction"
        ],
        [
          "3,600",
          "3,400",
          "200",
          "200",
          "3,600",
          "Equilibrium"
        ],
        [
          "3,300",
          "3,200",
          "100",
          "200",
          "3,400",
          "Expansion"
        ],
        [
          "3,000",
          "3,000",
          "0",
          "200",
          "3,200",
          "Expansion"
        ],
        [
          "2,700",
          "2,800",
          "-100",
          "200",
          "3,000",
          "Expansion"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Makna tabel: Jika GDP lebih tinggi daripada planned expenditure, output cenderung berkontraksi. Jika planned expenditure lebih tinggi daripada GDP, output cenderung berekspansi. Equilibrium terjadi saat GDP sama dengan total planned expenditure, yaitu pada 3,600."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide30_gdp_determination_table.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "The Multiplier Model"
    },
    {
      "kind": "p",
      "text": "Konsep utama: Multiplier model menjelaskan bahwa setiap perubahan satu unit pada exogenous expenditure dapat menghasilkan perubahan GDP yang lebih besar daripada perubahan awal."
    },
    {
      "kind": "p",
      "text": "Asumsi utama:"
    },
    {
      "kind": "ol",
      "items": [
        "Wages and prices are fixed.",
        "There are unemployed resources."
      ]
    },
    {
      "kind": "p",
      "text": "Interpretasi: Multiplier bekerja kuat dalam kondisi harga dan upah kaku serta masih ada sumber daya menganggur. Jika ekonomi sudah full employment, tambahan pengeluaran dapat lebih banyak mendorong harga daripada output."
    },
    {
      "kind": "h2",
      "text": "Investment Multiplier: Pertanyaan Contoh"
    },
    {
      "kind": "p",
      "text": "Soal: Jika MPC adalah 2/3, berapa perubahan GDP ketika investment dalam ekonomi meningkat sebesar 1,000 miliar rupiah?"
    },
    {
      "kind": "p",
      "text": "Diketahui:"
    },
    {
      "kind": "formula",
      "text": "MPC = \\frac{2}{3}"
    },
    {
      "kind": "formula",
      "text": "\\Delta I = 1000"
    },
    {
      "kind": "p",
      "text": "Yang ditanya:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y"
    },
    {
      "kind": "p",
      "text": "Interpretasi awal: Karena MPC positif, kenaikan investasi akan menaikkan pendapatan. Kenaikan pendapatan akan memicu konsumsi lanjutan. Proses inilah yang menghasilkan multiplier."
    },
    {
      "kind": "h2",
      "text": "Investment Multiplier: Arithmetic Approach"
    },
    {
      "kind": "p",
      "text": "Tabel aritmetik multiplier:"
    },
    {
      "kind": "table",
      "headers": [
        "Putaran",
        "Tambahan GDP",
        "Rumus"
      ],
      "rows": [
        [
          "1",
          "1,000.00",
          "`1 × 1000`"
        ],
        [
          "2",
          "666.67",
          "`(2/3) × 1000`"
        ],
        [
          "3",
          "444.44",
          "`(2/3)^2 × 1000`"
        ],
        [
          "4",
          "296.30",
          "`(2/3)^3 × 1000`"
        ],
        [
          "5",
          "197.53",
          "`(2/3)^4 × 1000`"
        ],
        [
          "...",
          "...",
          "..."
        ],
        [
          "Total",
          "3,000.00",
          "`1/(1 - 2/3) × 1000`"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Makna tabel: Dampak awal investasi sebesar 1,000 menciptakan pendapatan baru sebesar 1,000. Karena MPC = 2/3, dua pertiga dari pendapatan tersebut dibelanjakan lagi, menghasilkan pendapatan tambahan 666.67. Proses berulang dengan nilai yang makin kecil sampai totalnya mendekati 3,000."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide33_multiplier_arithmetic_table_lightmode.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "Investment Multiplier: Formula"
    },
    {
      "kind": "p",
      "text": "Rumus perubahan GDP:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y = \\left(1 + \\frac{2}{3} + \\left(\\frac{2}{3}\\right)^2 + \\left(\\frac{2}{3}\\right)^3 + \\cdots \\right) \\times 1000"
    },
    {
      "kind": "p",
      "text": "Karena deret geometri tersebut sama dengan:"
    },
    {
      "kind": "formula",
      "text": "\\frac{1}{1 - \\frac{2}{3}} = 3"
    },
    {
      "kind": "p",
      "text": "Maka:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y = 3 \\times 1000 = 3000"
    },
    {
      "kind": "p",
      "text": "Rumus multiplier sederhana:"
    },
    {
      "kind": "formula",
      "text": "\\Delta GDP = \\frac{1}{1-MPC} \\times \\Delta I"
    },
    {
      "kind": "p",
      "text": "Karena:"
    },
    {
      "kind": "formula",
      "text": "MPS = 1 - MPC"
    },
    {
      "kind": "p",
      "text": "Maka:"
    },
    {
      "kind": "formula",
      "text": "\\Delta GDP = \\frac{1}{MPS} \\times \\Delta I"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Semakin besar MPC, semakin besar multiplier. Semakin besar MPS, semakin kecil multiplier."
    },
    {
      "kind": "h2",
      "text": "Investment Multiplier Coefficient"
    },
    {
      "kind": "p",
      "text": "Pendekatan pertama: dari persamaan pengeluaran."
    },
    {
      "kind": "formula",
      "text": "Y = C + I"
    },
    {
      "kind": "formula",
      "text": "Y = C_0 + bY + I"
    },
    {
      "kind": "formula",
      "text": "Y = \\frac{1}{1-b}(C_0 + I)"
    },
    {
      "kind": "p",
      "text": "Jika investment berubah:"
    },
    {
      "kind": "formula",
      "text": "Y + \\Delta Y = \\frac{1}{1-b}(C_0 + I + \\Delta I)"
    },
    {
      "kind": "p",
      "text": "Maka:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y = \\frac{1}{1-b}\\Delta I"
    },
    {
      "kind": "p",
      "text": "Pendekatan kedua: dari persamaan saving-investment."
    },
    {
      "kind": "formula",
      "text": "I = S"
    },
    {
      "kind": "formula",
      "text": "I = -C_0 + (1-b)Y"
    },
    {
      "kind": "p",
      "text": "Jika investment berubah:"
    },
    {
      "kind": "formula",
      "text": "I + \\Delta I = -C_0 + (1-b)(Y + \\Delta Y)"
    },
    {
      "kind": "formula",
      "text": "I + \\Delta I = -C_0 + (1-b)Y + (1-b)\\Delta Y"
    },
    {
      "kind": "p",
      "text": "Maka:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y = \\frac{1}{1-b}\\Delta I"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Koefisien multiplier investasi adalah `1/(1-b)`. Jika MPC naik, penyebut mengecil dan multiplier membesar."
    },
    {
      "kind": "h2",
      "text": "Fiscal Policy in the Multiplier Model"
    },
    {
      "kind": "p",
      "text": "Peran fiscal policy dalam ekonomi:"
    },
    {
      "kind": "ol",
      "items": [
        "Allocative, yaitu mengalokasikan sumber daya.",
        "Distributive, yaitu memengaruhi distribusi pendapatan.",
        "Stabilizer, yaitu menstabilkan fluktuasi ekonomi."
      ]
    },
    {
      "kind": "p",
      "text": "Instrumen fiscal policy:"
    },
    {
      "kind": "ol",
      "items": [
        "Government spending.",
        "Taxation."
      ]
    },
    {
      "kind": "p",
      "text": "Interpretasi: Dalam multiplier model, belanja pemerintah berperan sebagai injeksi pengeluaran agregat, sedangkan pajak memengaruhi disposable income dan konsumsi."
    },
    {
      "kind": "h2",
      "text": "Important to Note: Principles of Taxation"
    },
    {
      "kind": "p",
      "text": "Prinsip benefit: Pajak dikenakan kepada orang sesuai marginal benefits yang diterima dari barang atau jasa yang disediakan pemerintah."
    },
    {
      "kind": "p",
      "text": "Prinsip ability-to-pay: Pajak yang paling adil adalah pajak yang didasarkan pada kemampuan finansial seseorang untuk mendukung aktivitas pemerintah."
    },
    {
      "kind": "p",
      "text": "Vertical equity: Orang yang lebih mampu membayar pajak lebih tinggi seharusnya membayar lebih tinggi."
    },
    {
      "kind": "p",
      "text": "Horizontal equity: Individu yang setara dalam aspek penting harus diperlakukan secara setara."
    },
    {
      "kind": "p",
      "text": "Catatan sumber internal slide: SAM, Chapter 16, halaman 312-320."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Prinsip perpajakan bukan hanya teknis fiskal, tetapi juga menyangkut keadilan distribusi beban pajak."
    },
    {
      "kind": "h2",
      "text": "Important to Note: Classification of Tax"
    },
    {
      "kind": "p",
      "text": "Pragmatic compromise in taxation:"
    },
    {
      "kind": "ol",
      "items": [
        "Progressive tax: pendapatan yang lebih tinggi dikenai pajak secara proporsional lebih besar.",
        "Regressive tax: persentase pendapatan yang dibayar sebagai pajak turun ketika pendapatan naik.",
        "Proportional tax: persentase pendapatan yang dibayar sebagai pajak tetap."
      ]
    },
    {
      "kind": "p",
      "text": "Klasifikasi pajak:"
    },
    {
      "kind": "ol",
      "items": [
        "Indirect taxes.",
        "Direct taxes."
      ]
    },
    {
      "kind": "p",
      "text": "Interpretasi: Pajak progresif berkaitan dengan ability-to-pay principle. Pajak proporsional lebih sederhana secara administrasi. Pajak regresif sering dikritik karena beban relatifnya lebih berat bagi kelompok berpendapatan rendah."
    },
    {
      "kind": "h2",
      "text": "Equilibrium Output in the Three-Sectors Economy: Grafik C + I + G"
    },
    {
      "kind": "p",
      "text": "Visual: grafik menunjukkan bahwa government purchases menambah pengeluaran agregat seperti investment. Garis konsumsi `C` bergeser ke atas menjadi `C + I`, lalu bergeser lagi menjadi `C + I + G = TE`."
    },
    {
      "kind": "p",
      "text": "Makna visual: Equilibrium output ditentukan pada perpotongan antara garis 45 derajat dan total expenditure. Penambahan `G` menggeser total expenditure ke atas dan menaikkan equilibrium GDP."
    },
    {
      "kind": "p",
      "text": "Instruksi chart: Tampilkan tiga garis: `C`, `C + I`, dan `C + I + G = TE`. Tampilkan garis 45 derajat. Tandai titik equilibrium `E`. Sumbu horizontal: `Gross Domestic Product / GDP`. Sumbu vertikal: `Total Expenditure`."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide39_government_purchases_graph.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "Equilibrium Output in the Three-Sectors Economy: Tabel Government Spending"
    },
    {
      "kind": "p",
      "text": "Tabel output determination dengan government spending:"
    },
    {
      "kind": "table",
      "headers": [
        "Initial GDP",
        "Taxes T",
        "Disposable Income DI",
        "Planned Consumption C",
        "Planned Investment I",
        "Government Expenditure G",
        "Total Planned Expenditure C+I+G",
        "Tendency"
      ],
      "rows": [
        [
          "4,200",
          "300",
          "3,900",
          "3,600",
          "200",
          "200",
          "4,000",
          "Contraction"
        ],
        [
          "3,900",
          "300",
          "3,600",
          "3,400",
          "200",
          "200",
          "3,800",
          "Contraction"
        ],
        [
          "3,600",
          "300",
          "3,300",
          "3,200",
          "200",
          "200",
          "3,600",
          "Equilibrium"
        ],
        [
          "3,300",
          "300",
          "3,000",
          "3,000",
          "200",
          "200",
          "3,400",
          "Expansion"
        ],
        [
          "3,000",
          "300",
          "2,700",
          "2,800",
          "200",
          "200",
          "3,200",
          "Expansion"
        ]
      ]
    },
    {
      "kind": "p",
      "text": "Makna tabel: Pajak menurunkan disposable income, sementara government spending menambah total planned expenditure. Equilibrium tetap terjadi ketika GDP sama dengan total planned expenditure."
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide40_government_spending_table.jpg",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "Equilibrium Output: Tax Independent to Income"
    },
    {
      "kind": "p",
      "text": "Asumsi: pajak tidak bergantung pada pendapatan."
    },
    {
      "kind": "formula",
      "text": "T = T_0"
    },
    {
      "kind": "p",
      "text": "Identitas tiga sektor:"
    },
    {
      "kind": "formula",
      "text": "Y = C + I + G"
    },
    {
      "kind": "p",
      "text": "Fungsi konsumsi:"
    },
    {
      "kind": "formula",
      "text": "C = C_0 + bY_d"
    },
    {
      "kind": "p",
      "text": "Disposable income:"
    },
    {
      "kind": "formula",
      "text": "Y_d = Y - T"
    },
    {
      "kind": "p",
      "text": "Karena `T = T0`, maka:"
    },
    {
      "kind": "formula",
      "text": "Y_d = Y - T_0"
    },
    {
      "kind": "p",
      "text": "Substitusi:"
    },
    {
      "kind": "formula",
      "text": "Y = C_0 + b(Y - T_0) + I + G"
    },
    {
      "kind": "formula",
      "text": "Y = C_0 + bY - bT_0 + I + G"
    },
    {
      "kind": "p",
      "text": "Penyelesaian:"
    },
    {
      "kind": "formula",
      "text": "Y = \\frac{1}{1-b}(C_0 - bT_0 + I + G)"
    },
    {
      "kind": "p",
      "text": "Pendekatan saving-tax:"
    },
    {
      "kind": "formula",
      "text": "I + G = S + T"
    },
    {
      "kind": "formula",
      "text": "I + G = -C_0 + (1-b)Y_d + T_0"
    },
    {
      "kind": "formula",
      "text": "I + G = -C_0 + (1-b)(Y - T_0) + T_0"
    },
    {
      "kind": "formula",
      "text": "I + G = -C_0 + (1-b)Y + bT_0"
    },
    {
      "kind": "p",
      "text": "Hasil akhirnya sama:"
    },
    {
      "kind": "formula",
      "text": "Y = \\frac{1}{1-b}(C_0 - bT_0 + I + G)"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Pajak tetap menurunkan konsumsi melalui disposable income. Namun karena pajak tidak berubah ketika pendapatan berubah, multiplier belanja pemerintah tetap `1/(1-b)`."
    },
    {
      "kind": "p",
      "text": "Asset formula: `assets/slide41_lump_sum_tax_formula_lightmode.png`."
    },
    {
      "kind": "h2",
      "text": "Fiscal Policy Multiplier: Tax Independent to Income"
    },
    {
      "kind": "p",
      "text": "Asumsi:"
    },
    {
      "kind": "formula",
      "text": "T = T_0"
    },
    {
      "kind": "p",
      "text": "Government expenditure multiplier:"
    },
    {
      "kind": "formula",
      "text": "Y = \\frac{1}{1-b}(C_0 - bT_0 + I + G)"
    },
    {
      "kind": "p",
      "text": "Jika belanja pemerintah berubah:"
    },
    {
      "kind": "formula",
      "text": "Y + \\Delta Y = \\frac{1}{1-b}(C_0 - bT_0 + I + G + \\Delta G)"
    },
    {
      "kind": "p",
      "text": "Maka:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y = \\frac{1}{1-b}\\Delta G"
    },
    {
      "kind": "p",
      "text": "Koefisien government expenditure multiplier:"
    },
    {
      "kind": "formula",
      "text": "\\frac{1}{1-b}"
    },
    {
      "kind": "p",
      "text": "Tax multiplier:"
    },
    {
      "kind": "formula",
      "text": "Y + \\Delta Y = \\frac{1}{1-b}(C_0 - bT_0 - b\\Delta T_0 + I + G)"
    },
    {
      "kind": "p",
      "text": "Maka:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y = -\\frac{b}{1-b}\\Delta T_0"
    },
    {
      "kind": "p",
      "text": "Koefisien tax multiplier:"
    },
    {
      "kind": "formula",
      "text": "-\\frac{b}{1-b}"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Belanja pemerintah berdampak langsung pada pengeluaran agregat, sehingga multiplier-nya positif. Pajak berdampak melalui disposable income dan konsumsi, sehingga multiplier pajak bernilai negatif."
    },
    {
      "kind": "h2",
      "text": "Example: Lump-Sum Tax"
    },
    {
      "kind": "p",
      "text": "Diketahui:"
    },
    {
      "kind": "formula",
      "text": "C = 300 + 0.75Y_d"
    },
    {
      "kind": "formula",
      "text": "I = 400"
    },
    {
      "kind": "formula",
      "text": "G = T = 200"
    },
    {
      "kind": "p",
      "text": "Karena `T = 200`, maka `T0 = 200`. Nilai `b = 0.75`, sehingga `1-b = 0.25`."
    },
    {
      "kind": "p",
      "text": "Equilibrium GDP:"
    },
    {
      "kind": "formula",
      "text": "Y = \\frac{1}{0.25}(300 - 0.75(200) + 400 + 200)"
    },
    {
      "kind": "formula",
      "text": "Y = 4(300 - 150 + 400 + 200)"
    },
    {
      "kind": "formula",
      "text": "Y = 4(750) = 3000"
    },
    {
      "kind": "p",
      "text": "Government expenditure multiplier:"
    },
    {
      "kind": "formula",
      "text": "\\frac{1}{1-b} = \\frac{1}{0.25} = 4"
    },
    {
      "kind": "p",
      "text": "Jika `G` naik 50:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y = 4 \\times 50 = 200"
    },
    {
      "kind": "p",
      "text": "Tax multiplier:"
    },
    {
      "kind": "formula",
      "text": "-\\frac{b}{1-b} = -\\frac{0.75}{0.25} = -3"
    },
    {
      "kind": "p",
      "text": "Jika pajak naik 50:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y = -3 \\times 50 = -150"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Belanja pemerintah 50 menaikkan GDP 200. Pajak 50 menurunkan GDP 150. Dampak pajak lebih kecil secara absolut daripada dampak belanja pemerintah karena pajak memengaruhi output melalui konsumsi, bukan langsung melalui total expenditure."
    },
    {
      "kind": "p",
      "text": "Asset formula tambahan: `assets/slide43_multiplier_g_formula_lightmode.png`."
    },
    {
      "kind": "h2",
      "text": "Visual Example: Tax Rate Case"
    },
    {
      "kind": "p",
      "text": "Slide ini berupa gambar contoh hitung dengan fungsi pajak proporsional. Jangan biarkan tetap sebagai gambar saja. Ketik ulang menjadi langkah berikut."
    },
    {
      "kind": "p",
      "text": "Diketahui:"
    },
    {
      "kind": "formula",
      "text": "Y = C + I + G"
    },
    {
      "kind": "formula",
      "text": "C = 300 + 0.75(Y - T)"
    },
    {
      "kind": "formula",
      "text": "T = 200 + 0.15Y"
    },
    {
      "kind": "p",
      "text": "Substitusi pajak ke fungsi konsumsi:"
    },
    {
      "kind": "formula",
      "text": "C = 300 + 0.75(Y - 200 - 0.15Y)"
    },
    {
      "kind": "p",
      "text": "Multiplier government spending ketika pajak bergantung pada pendapatan:"
    },
    {
      "kind": "formula",
      "text": "\\frac{1}{1 - MPC(1-t)}"
    },
    {
      "kind": "p",
      "text": "Dengan `MPC = 0.75` dan `t = 0.15`:"
    },
    {
      "kind": "formula",
      "text": "1 - MPC(1-t) = 1 - 0.75(1 - 0.15)"
    },
    {
      "kind": "formula",
      "text": "= 1 - 0.75(0.85)"
    },
    {
      "kind": "formula",
      "text": "= 1 - 0.6375 = 0.3625"
    },
    {
      "kind": "formula",
      "text": "\\text{Multiplier} = \\frac{1}{0.3625} = 2.7586"
    },
    {
      "kind": "figure",
      "url": "/assets/pte/slide44_tax_rate_example_image.png",
      "caption": "Referensi visual dari sumber asli",
      "altText": "Gambar referensi"
    },
    {
      "kind": "h2",
      "text": "Equilibrium Output: Tax Dependent to Income"
    },
    {
      "kind": "p",
      "text": "Asumsi:"
    },
    {
      "kind": "formula",
      "text": "T = T_0 + tY"
    },
    {
      "kind": "p",
      "text": "Identitas tiga sektor:"
    },
    {
      "kind": "formula",
      "text": "Y = C + I + G"
    },
    {
      "kind": "p",
      "text": "Fungsi konsumsi:"
    },
    {
      "kind": "formula",
      "text": "C = C_0 + bY_d"
    },
    {
      "kind": "p",
      "text": "Disposable income:"
    },
    {
      "kind": "formula",
      "text": "Y_d = Y - T_0 - tY"
    },
    {
      "kind": "p",
      "text": "Substitusi:"
    },
    {
      "kind": "formula",
      "text": "Y = C_0 + b(Y - T_0 - tY) + I + G"
    },
    {
      "kind": "formula",
      "text": "Y = C_0 + bY - bT_0 - btY + I + G"
    },
    {
      "kind": "p",
      "text": "Penyelesaian:"
    },
    {
      "kind": "formula",
      "text": "Y = \\frac{1}{1-b+bt}(C_0 - bT_0 + I + G)"
    },
    {
      "kind": "p",
      "text": "Pendekatan saving-tax:"
    },
    {
      "kind": "formula",
      "text": "I + G = S + T"
    },
    {
      "kind": "formula",
      "text": "I + G = -C_0 + (1-b)Y_d + (T_0 + tY)"
    },
    {
      "kind": "formula",
      "text": "I + G = -C_0 + (1-b)(Y - T_0 - tY) + (T_0 + tY)"
    },
    {
      "kind": "formula",
      "text": "I + G = -C_0 + (1-b)Y + bT_0 + btY"
    },
    {
      "kind": "p",
      "text": "Hasil akhir:"
    },
    {
      "kind": "formula",
      "text": "Y = \\frac{1}{1-b+bt}(C_0 - bT_0 + I + G)"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Ketika pajak meningkat bersama pendapatan, multiplier menjadi lebih kecil karena sebagian tambahan pendapatan otomatis ditarik sebagai pajak. Pajak proporsional bertindak sebagai automatic stabilizer."
    },
    {
      "kind": "h2",
      "text": "Fiscal Policy Multiplier: Tax Dependent to Income"
    },
    {
      "kind": "p",
      "text": "Asumsi:"
    },
    {
      "kind": "formula",
      "text": "T = T_0 + tY"
    },
    {
      "kind": "p",
      "text": "Government expenditure multiplier:"
    },
    {
      "kind": "formula",
      "text": "\\frac{\\Delta Y}{\\Delta G} = \\frac{1}{1-b+bt}"
    },
    {
      "kind": "p",
      "text": "Tax multiplier untuk pajak tetap `T0`:"
    },
    {
      "kind": "formula",
      "text": "\\frac{\\Delta Y}{\\Delta T_0} = -\\frac{b}{1-b+bt}"
    },
    {
      "kind": "p",
      "text": "Dampak perubahan tax rate terhadap GDP:"
    },
    {
      "kind": "formula",
      "text": "\\frac{\\Delta Y}{\\Delta t} = -\\frac{b}{1-b+bt}Y"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Kenaikan `t` menurunkan multiplier karena tambahan pendapatan lebih banyak masuk sebagai pajak. Dampaknya negatif terhadap GDP karena disposable income dan konsumsi turun."
    },
    {
      "kind": "h2",
      "text": "Example: Income-Dependent Tax"
    },
    {
      "kind": "p",
      "text": "Diketahui:"
    },
    {
      "kind": "formula",
      "text": "C = 300 + 0.75Y_d"
    },
    {
      "kind": "formula",
      "text": "I = 400"
    },
    {
      "kind": "formula",
      "text": "G = 200"
    },
    {
      "kind": "formula",
      "text": "T = 200 + 0.15Y"
    },
    {
      "kind": "p",
      "text": "Parameter:"
    },
    {
      "kind": "formula",
      "text": "C_0 = 300, \\quad b = 0.75, \\quad T_0 = 200, \\quad t = 0.15"
    },
    {
      "kind": "p",
      "text": "Penyebut multiplier:"
    },
    {
      "kind": "formula",
      "text": "1-b+bt = 1 - 0.75 + (0.75)(0.15)"
    },
    {
      "kind": "formula",
      "text": "= 0.25 + 0.1125 = 0.3625"
    },
    {
      "kind": "p",
      "text": "Equilibrium GDP:"
    },
    {
      "kind": "formula",
      "text": "Y = \\frac{1}{0.3625}(300 - 0.75(200) + 400 + 200)"
    },
    {
      "kind": "formula",
      "text": "Y = 2.7586(300 - 150 + 400 + 200)"
    },
    {
      "kind": "formula",
      "text": "Y = 2.7586(750) = 2068.96"
    },
    {
      "kind": "p",
      "text": "Government expenditure multiplier:"
    },
    {
      "kind": "formula",
      "text": "\\frac{1}{0.3625} = 2.7586"
    },
    {
      "kind": "p",
      "text": "Jika `G` naik 50:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y = 2.7586 \\times 50 = 137.93"
    },
    {
      "kind": "p",
      "text": "Tax multiplier:"
    },
    {
      "kind": "formula",
      "text": "-\\frac{0.75}{0.3625} = -2.069"
    },
    {
      "kind": "p",
      "text": "Jika pajak tetap naik 50:"
    },
    {
      "kind": "formula",
      "text": "\\Delta Y = -2.069 \\times 50 = -103.45"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Multiplier pada pajak proporsional lebih kecil daripada multiplier pada pajak tetap. Pada contoh sebelumnya government expenditure multiplier = 4. Setelah ada tax rate 0.15, multiplier turun menjadi 2.7586."
    },
    {
      "kind": "h2",
      "text": "National Income Identity in the Closed Economy"
    },
    {
      "kind": "p",
      "text": "Identitas pendapatan nasional dalam ekonomi tertutup:"
    },
    {
      "kind": "formula",
      "text": "Y = C + I + G"
    },
    {
      "kind": "p",
      "text": "Kurangi `C` dan `G` dari kedua sisi:"
    },
    {
      "kind": "formula",
      "text": "Y - C - G = I"
    },
    {
      "kind": "p",
      "text": "Manipulasi dengan memasukkan pajak `T`:"
    },
    {
      "kind": "formula",
      "text": "(Y - T - C) + (T - G) = I"
    },
    {
      "kind": "p",
      "text": "Makna simbol:"
    },
    {
      "kind": "p",
      "text": "`Y - T - C` adalah private saving. `T - G` adalah public saving. Jumlah keduanya adalah national saving."
    },
    {
      "kind": "p",
      "text": "Rumus:"
    },
    {
      "kind": "formula",
      "text": "S_{national} = S_{private} + S_{public}"
    },
    {
      "kind": "formula",
      "text": "S_{national} = (Y - T - C) + (T - G)"
    },
    {
      "kind": "formula",
      "text": "S_{national} = I"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Dalam ekonomi tertutup, national saving sama dengan investment."
    },
    {
      "kind": "h2",
      "text": "Important to Note: Saving Equals Investment"
    },
    {
      "kind": "p",
      "text": "Fakta utama: Untuk ekonomi secara keseluruhan, saving harus sama dengan investment."
    },
    {
      "kind": "p",
      "text": "Implikasi pertama: Semakin besar konsumsi, semakin kecil private saving. Akibatnya national saving lebih rendah."
    },
    {
      "kind": "p",
      "text": "Implikasi kedua: Jika pemerintah membelanjakan lebih banyak daripada penerimaan pajaknya, terjadi budget deficit. Defisit anggaran menurunkan public saving dan akhirnya menurunkan national saving."
    },
    {
      "kind": "p",
      "text": "Interpretasi: Identitas ini menjelaskan hubungan antara perilaku konsumsi rumah tangga, kebijakan fiskal pemerintah, tabungan nasional, dan kapasitas pembiayaan investasi."
    },
    {
      "kind": "h2",
      "text": "Example: Closed Economy Identity, Part 1"
    },
    {
      "kind": "p",
      "text": "Soal: GDP adalah Rp 8.00 triliun, taxes Rp 1.50 triliun, private saving Rp 0.50 triliun, dan public saving Rp 0.20 triliun. Hitung consumption, government purchases, national saving, dan investment."
    },
    {
      "kind": "p",
      "text": "Diketahui:"
    },
    {
      "kind": "formula",
      "text": "Y = 8.00"
    },
    {
      "kind": "formula",
      "text": "T = 1.50"
    },
    {
      "kind": "formula",
      "text": "S_{private} = 0.50"
    },
    {
      "kind": "formula",
      "text": "S_{public} = 0.20"
    },
    {
      "kind": "p",
      "text": "Menghitung consumption:"
    },
    {
      "kind": "formula",
      "text": "S_{private} = Y - T - C"
    },
    {
      "kind": "formula",
      "text": "0.50 = 8.00 - 1.50 - C"
    },
    {
      "kind": "formula",
      "text": "C = 6.00"
    },
    {
      "kind": "p",
      "text": "Jadi consumption adalah Rp 6.00 triliun."
    },
    {
      "kind": "h2",
      "text": "Example: Closed Economy Identity, Part 2"
    },
    {
      "kind": "p",
      "text": "Menghitung government purchases:"
    },
    {
      "kind": "formula",
      "text": "S_{public} = T - G"
    },
    {
      "kind": "formula",
      "text": "0.20 = 1.50 - G"
    },
    {
      "kind": "formula",
      "text": "G = 1.30"
    },
    {
      "kind": "p",
      "text": "Jadi government purchases adalah Rp 1.30 triliun."
    },
    {
      "kind": "p",
      "text": "Menghitung national saving:"
    },
    {
      "kind": "formula",
      "text": "S_{national} = S_{private} + S_{public}"
    },
    {
      "kind": "formula",
      "text": "S_{national} = 0.50 + 0.20 = 0.70"
    },
    {
      "kind": "p",
      "text": "Karena dalam ekonomi tertutup national saving sama dengan investment:"
    },
    {
      "kind": "formula",
      "text": "I = S_{national} = 0.70"
    },
    {
      "kind": "p",
      "text": "Jadi investment adalah Rp 0.70 triliun."
    },
    {
      "kind": "p",
      "text": "Alternatif memakai identitas nasional:"
    },
    {
      "kind": "formula",
      "text": "Y = C + I + G"
    },
    {
      "kind": "formula",
      "text": "I = Y - C - G"
    },
    {
      "kind": "formula",
      "text": "I = 8.00 - 6.00 - 1.30 = 0.70"
    },
    {
      "kind": "p",
      "text": "Interpretasi: Kedua pendekatan menghasilkan investment yang sama karena keduanya berasal dari identitas ekonomi tertutup."
    },
    {
      "kind": "h2",
      "text": "Closing"
    },
    {
      "kind": "p",
      "text": "Teks penutup: Thank you for your attention."
    },
    {
      "kind": "p",
      "text": "Implementasi website: Jadikan slide ini sebagai penutup TM 10. Tambahkan ringkasan singkat: ekonomi tertutup menunjukkan hubungan antara konsumsi, tabungan, investasi, belanja pemerintah, pajak, dan output nasional. Model multiplier memperlihatkan bahwa perubahan pengeluaran otonom dapat berdampak lebih besar terhadap GDP, terutama ketika MPC tinggi dan masih ada sumber daya menganggur."
    },
    {
      "kind": "p",
      "text": "---"
    },
    {
      "kind": "p",
      "text": "# Data Siap Pakai untuk Chart dan Tabel"
    },
    {
      "kind": "p",
      "text": "## Dataset Konsumsi-Tabungan"
    },
    {
      "kind": "p",
      "text": "```json"
    },
    {
      "kind": "p",
      "text": "["
    },
    {
      "kind": "p",
      "text": "{\"point\":\"A\",\"disposableIncome\":24000,\"consumption\":24200,\"saving\":-200},"
    },
    {
      "kind": "p",
      "text": "{\"point\":\"B\",\"disposableIncome\":25000,\"consumption\":25000,\"saving\":0},"
    },
    {
      "kind": "p",
      "text": "{\"point\":\"C\",\"disposableIncome\":26000,\"consumption\":25800,\"saving\":200},"
    },
    {
      "kind": "p",
      "text": "{\"point\":\"D\",\"disposableIncome\":27000,\"consumption\":26600,\"saving\":400},"
    },
    {
      "kind": "p",
      "text": "{\"point\":\"E\",\"disposableIncome\":28000,\"consumption\":27400,\"saving\":600},"
    },
    {
      "kind": "p",
      "text": "{\"point\":\"F\",\"disposableIncome\":29000,\"consumption\":28200,\"saving\":800},"
    },
    {
      "kind": "p",
      "text": "{\"point\":\"G\",\"disposableIncome\":30000,\"consumption\":29000,\"saving\":1000}"
    },
    {
      "kind": "p",
      "text": "]"
    },
    {
      "kind": "p",
      "text": "```"
    },
    {
      "kind": "p",
      "text": "## Dataset Investment Profitability"
    },
    {
      "kind": "p",
      "text": "```json"
    },
    {
      "kind": "p",
      "text": "["
    },
    {
      "kind": "p",
      "text": "{\"project\":\"A\",\"investment\":1,\"annualRevenue\":1500,\"cost10\":100,\"cost5\":50,\"profit10\":1400,\"profit5\":1450},"
    },
    {
      "kind": "p",
      "text": "{\"project\":\"B\",\"investment\":4,\"annualRevenue\":220,\"cost10\":100,\"cost5\":50,\"profit10\":120,\"profit5\":170},"
    },
    {
      "kind": "p",
      "text": "{\"project\":\"C\",\"investment\":10,\"annualRevenue\":160,\"cost10\":100,\"cost5\":50,\"profit10\":60,\"profit5\":110},"
    },
    {
      "kind": "p",
      "text": "{\"project\":\"D\",\"investment\":10,\"annualRevenue\":130,\"cost10\":100,\"cost5\":50,\"profit10\":30,\"profit5\":80},"
    },
    {
      "kind": "p",
      "text": "{\"project\":\"E\",\"investment\":5,\"annualRevenue\":110,\"cost10\":100,\"cost5\":50,\"profit10\":10,\"profit5\":60},"
    },
    {
      "kind": "p",
      "text": "{\"project\":\"F\",\"investment\":15,\"annualRevenue\":90,\"cost10\":100,\"cost5\":50,\"profit10\":-10,\"profit5\":40},"
    },
    {
      "kind": "p",
      "text": "{\"project\":\"G\",\"investment\":10,\"annualRevenue\":60,\"cost10\":100,\"cost5\":50,\"profit10\":-40,\"profit5\":10},"
    },
    {
      "kind": "p",
      "text": "{\"project\":\"H\",\"investment\":20,\"annualRevenue\":40,\"cost10\":100,\"cost5\":50,\"profit10\":-60,\"profit5\":-10}"
    },
    {
      "kind": "p",
      "text": "]"
    },
    {
      "kind": "p",
      "text": "```"
    },
    {
      "kind": "p",
      "text": "## Dataset Investment Demand Schedule"
    },
    {
      "kind": "p",
      "text": "```json"
    },
    {
      "kind": "p",
      "text": "["
    },
    {
      "kind": "p",
      "text": "{\"interestRate\":20,\"cumulativeInvestment\":5,\"interpretation\":\"Projects A-B are profitable\"},"
    },
    {
      "kind": "p",
      "text": "{\"interestRate\":15,\"cumulativeInvestment\":15,\"interpretation\":\"Projects A-C are profitable\"},"
    },
    {
      "kind": "p",
      "text": "{\"interestRate\":10,\"cumulativeInvestment\":30,\"interpretation\":\"Projects A-E are profitable\"},"
    },
    {
      "kind": "p",
      "text": "{\"interestRate\":5,\"cumulativeInvestment\":55,\"interpretation\":\"Projects A-G are profitable\"}"
    },
    {
      "kind": "p",
      "text": "]"
    },
    {
      "kind": "p",
      "text": "```"
    },
    {
      "kind": "p",
      "text": "## Dataset GDP Determination Two-Sector"
    },
    {
      "kind": "p",
      "text": "```json"
    },
    {
      "kind": "p",
      "text": "["
    },
    {
      "kind": "p",
      "text": "{\"gdp\":4200,\"consumption\":3800,\"saving\":400,\"investment\":200,\"plannedExpenditure\":4000,\"tendency\":\"Contraction\"},"
    },
    {
      "kind": "p",
      "text": "{\"gdp\":3900,\"consumption\":3600,\"saving\":300,\"investment\":200,\"plannedExpenditure\":3800,\"tendency\":\"Contraction\"},"
    },
    {
      "kind": "p",
      "text": "{\"gdp\":3600,\"consumption\":3400,\"saving\":200,\"investment\":200,\"plannedExpenditure\":3600,\"tendency\":\"Equilibrium\"},"
    },
    {
      "kind": "p",
      "text": "{\"gdp\":3300,\"consumption\":3200,\"saving\":100,\"investment\":200,\"plannedExpenditure\":3400,\"tendency\":\"Expansion\"},"
    },
    {
      "kind": "p",
      "text": "{\"gdp\":3000,\"consumption\":3000,\"saving\":0,\"investment\":200,\"plannedExpenditure\":3200,\"tendency\":\"Expansion\"},"
    },
    {
      "kind": "p",
      "text": "{\"gdp\":2700,\"consumption\":2800,\"saving\":-100,\"investment\":200,\"plannedExpenditure\":3000,\"tendency\":\"Expansion\"}"
    },
    {
      "kind": "p",
      "text": "]"
    },
    {
      "kind": "p",
      "text": "```"
    },
    {
      "kind": "p",
      "text": "## Dataset GDP Determination Three-Sector"
    },
    {
      "kind": "p",
      "text": "```json"
    },
    {
      "kind": "p",
      "text": "["
    },
    {
      "kind": "p",
      "text": "{\"gdp\":4200,\"tax\":300,\"disposableIncome\":3900,\"consumption\":3600,\"investment\":200,\"governmentSpending\":200,\"plannedExpenditure\":4000,\"tendency\":\"Contraction\"},"
    },
    {
      "kind": "p",
      "text": "{\"gdp\":3900,\"tax\":300,\"disposableIncome\":3600,\"consumption\":3400,\"investment\":200,\"governmentSpending\":200,\"plannedExpenditure\":3800,\"tendency\":\"Contraction\"},"
    },
    {
      "kind": "p",
      "text": "{\"gdp\":3600,\"tax\":300,\"disposableIncome\":3300,\"consumption\":3200,\"investment\":200,\"governmentSpending\":200,\"plannedExpenditure\":3600,\"tendency\":\"Equilibrium\"},"
    },
    {
      "kind": "p",
      "text": "{\"gdp\":3300,\"tax\":300,\"disposableIncome\":3000,\"consumption\":3000,\"investment\":200,\"governmentSpending\":200,\"plannedExpenditure\":3400,\"tendency\":\"Expansion\"},"
    },
    {
      "kind": "p",
      "text": "{\"gdp\":3000,\"tax\":300,\"disposableIncome\":2700,\"consumption\":2800,\"investment\":200,\"governmentSpending\":200,\"plannedExpenditure\":3200,\"tendency\":\"Expansion\"}"
    },
    {
      "kind": "p",
      "text": "]"
    },
    {
      "kind": "p",
      "text": "```"
    },
    {
      "kind": "p",
      "text": "---"
    },
    {
      "kind": "p",
      "text": "# Checklist Final untuk Antigravity"
    },
    {
      "kind": "p",
      "text": "Sebelum menyatakan pekerjaan selesai, lakukan pengecekan berikut:"
    },
    {
      "kind": "ol",
      "items": [
        "TM 9 berisi slide 1-22, tidak kurang dan tidak lebih.",
        "TM 10 berisi slide 23-52, tidak kurang dan tidak lebih.",
        "Total slide yang terwakili adalah 52.",
        "Semua rumus dirender dengan MathJax/KaTeX.",
        "Semua simbol dijelaskan minimal sekali pada modul yang relevan.",
        "Tabel slide 5, 9, 25, 30, 33, dan 40 diketik ulang, bukan hanya ditempel sebagai gambar.",
        "Grafik slide 6, 7, 10, 11, 12, 26, 27, 28, 29, dan 39 memiliki interpretasi.",
        "Formula visual slide 21, 41, 43, dan 44 tidak ditinggalkan sebagai gambar gelap tanpa penjelasan.",
        "Warna teks dan grafik terbaca pada light mode dan dark mode.",
        "Tidak ada elemen grafis dengan teks putih transparan di atas background putih.",
        "Setiap grafik memiliki `alt text`, judul, label sumbu, dan paragraf makna visual.",
        "Tidak ada halaman tambahan fiktif di luar slide 1-52."
      ]
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
