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
  "intro": "Membedah struktur ekonomi paling murni tanpa campur tangan pemerintah, membongkar anatomi konsumsi rumah tangga, fungsi tabungan, dan tabel perhitungan MPC & MPS secara presisi.",
  "objectives": [
    "Memahami anatomi ekonomi dua sektor: Konsumsi dan Tabungan.",
    "Menyusun fungsi Konsumsi (C) dan fungsi Tabungan (S) dari tabel data absolut.",
    "Membaca dan menginterpretasikan grafik Fungsi Konsumsi, Break-Even Point, dan Fungsi Tabungan.",
    "Menghitung secara presisi Marginal Propensity to Consume (MPC) dan Marginal Propensity to Save (MPS)."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Pengantar: Anatomi Ekonomi Dua Sektor"
    },
    {
      "kind": "p",
      "text": "Perekonomian tertutup dua sektor adalah model paling mendasar untuk memahami mesin penggerak ekonomi. Di sini, ruang isolasi diberlakukan: kita **hanya** memiliki dua aktor utama, yakni **Rumah Tangga (Households)** dan **Perusahaan (Firms)**. Model ini melarang adanya campur tangan Pemerintah (tanpa pajak T atau belanja G) dan tidak ada perdagangan internasional (tanpa ekspor X atau impor M)."
    },
    {
      "kind": "h2",
      "text": "Mesin Pertama: Consumption (Konsumsi)"
    },
    {
      "kind": "ul",
      "items": [
        "**Definisi Absolut:** Konsumsi adalah aktivitas yang menghancurkan nilai guna (utility) dari barang dan jasa.",
        "**Personal Consumption Expenditure:** Pengeluaran oleh rumah tangga untuk membeli barang tidak tahan lama (non-durable), barang tahan lama (durable) *kecuali* perumahan baru, dan jasa.",
        "**Fungsi Konsumsi Linear:** Bentuk persamaan mutlaknya adalah **C = C₀ + bY**."
      ]
    },
    {
      "kind": "formula",
      "text": "C = C₀ + bY",
      "note": "Di mana:\nC₀ = Autonomous Consumption (Konsumsi Otonom: konsumsi minimum untuk bertahan hidup saat pendapatan nol).\nb = Marginal Propensity to Consume (MPC), nilainya di antara 0 dan 1 (0 < b < 1).\nY = Disposable Income (Pendapatan Siap Pakai)."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Bedah Kritis: Mengapa C₀ Tidak Pernah Nol?",
      "text": "**Interpretasi Ekstrem:** Bayangkan sebuah negara dilanda krisis total hingga Pendapatan (Y) = $0. Apakah konsumsi (C) menjadi nol? **TIDAK.** Manusia tetap harus makan untuk bertahan hidup. Mereka akan mencairkan tabungan masa lalu, menjual aset, atau berutang. Inilah makna absolut dari C₀ (Autonomous Consumption). Nilai C₀ memastikan kurva konsumsi tidak pernah bermula dari titik (0,0) di grafik."
    },
    {
      "kind": "h2",
      "text": "Mesin Kedua: Saving (Tabungan)"
    },
    {
      "kind": "ul",
      "items": [
        "**Definisi Absolut:** Personal saving adalah bagian dari disposable income (pendapatan) yang **TIDAK** dikonsumsi.",
        "**Penurunan Rumus Tabungan:** Karena setiap uang hanya bisa dikonsumsi atau ditabung, maka persamaannya diturunkan langsung dari fungsi konsumsi."
      ]
    },
    {
      "kind": "formula",
      "text": "S = Y - C\nS = Y - (C₀ + bY)\nS = -C₀ + (1 - b)Y",
      "note": "Di mana:\n-C₀ = Dissaving (Tabungan Negatif / Ngutang untuk makan saat pendapatan nol).\n(1 - b) = Marginal Propensity to Save (MPS), nilainya di antara 0 dan 1 (0 < b < 1)."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Pembuktian Matematis Absolut: MPC + MPS = 1",
      "text": "Mengapa kedua angka ini jika dijumlahkan pasti 1? Secara logika matematis, setiap tambahan 1 keping koin yang kamu terima (ΔY) HANYA memiliki dua jalur pelarian: dikonsumsi (ΔC) atau ditabung (ΔS).\n\n**Pembuktian Absolut:**\n1. Secara kodrat: **ΔY = ΔC + ΔS**\n2. Bagi semua sisi dengan ΔY:\n   **(ΔY / ΔY) = (ΔC / ΔY) + (ΔS / ΔY)**\n3. **1 = MPC + MPS** *(Terbukti!)*\n\n**Kemungkinan Ekstrem & Hubungannya:** \n- Jika sebuah masyarakat sangat pelit (MPS = 1), maka uang berhenti mengalir karena MPC = 0. Tidak ada pabrik yang bisa berjualan, ekonomi mati membeku.\n- Sebaliknya, jika masyarakat sangat boros (MPC = 1), maka tabungan nol (MPS = 0). Dampaknya? Bank tidak punya pasokan uang untuk dipinjamkan ke pengusaha, investasi mati total!"
    },
    {
      "kind": "h2",
      "text": "Tabel 1: Hubungan Income, Consumption, dan Saving"
    },
    {
      "kind": "p",
      "text": "Mari kita bedah angka absolut pembentuk kurva makroekonomi (lihat tabel di bawah). Jika Pendapatan (Y) adalah kolom 1, dan Konsumsi (C) adalah kolom 2, maka Tabungan (S) adalah sisa dari Kolom 1 dikurangi Kolom 2."
    },
    {
      "kind": "table",
      "headers": ["Titik", "Disposable Income (1)", "Consumption (2)", "Saving (3) = (1) - (2)"],
      "rows": [
        ["A", "$24.000", "$24.200", "-$200 (Dissaving)"],
        ["B", "$25.000", "$25.000", "$0 (Break-even)"],
        ["C", "$26.000", "$25.800", "$200 (Saving)"],
        ["D", "$27.000", "$26.600", "$400 (Saving)"],
        ["E", "$28.000", "$27.400", "$600 (Saving)"],
        ["F", "$29.000", "$28.200", "$800 (Saving)"],
        ["G", "$30.000", "$29.000", "$1.000 (Saving)"]
      ]
    },
    {
      "kind": "h2",
      "text": "Grafik 1: Kurva Fungsi Konsumsi & Titik Impas"
    },
    {
      "kind": "figure",
      "title": "Plot Fungsi Konsumsi (Titik A hingga G)",
      "svg": "<svg font-family=\"DM Sans, sans-serif\" style=\"max-width:100%;height:auto;margin:0 auto;display:block\" viewBox=\"0 0 450 350\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Sumbu Utama -->\n  <line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"400\" y1=\"300\" y2=\"300\"></line>\n  <line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"50\" y1=\"300\" y2=\"30\"></line>\n  <!-- Label Sumbu -->\n  <text fill=\"#9aa4b7\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(-90 20 180)\" x=\"20\" y=\"180\">Consumption (dollars)</text>\n  <text fill=\"#9aa4b7\" font-size=\"11\" font-weight=\"bold\" x=\"180\" y=\"335\">Disposable income (dollars)</text>\n  <text fill=\"#9aa4b7\" font-size=\"11\" font-weight=\"bold\" x=\"410\" y=\"305\">DI</text>\n  <text fill=\"#9aa4b7\" font-size=\"11\" font-weight=\"bold\" x=\"45\" y=\"20\">C</text>\n  <!-- Garis 45 Derajat -->\n  <line stroke=\"#9aa4b7\" stroke-width=\"1.5\" x1=\"50\" x2=\"300\" y1=\"300\" y2=\"50\"></line>\n  <text fill=\"#d81b60\" font-size=\"10\" x=\"75\" y=\"290\">45°</text>\n  <!-- Kurva Konsumsi -->\n  <line stroke=\"#4f9cf9\" stroke-width=\"2\" x1=\"160\" x2=\"370\" y1=\"200\" y2=\"50\"></line>\n  <text fill=\"#4f9cf9\" font-size=\"10\" font-weight=\"bold\" x=\"365\" y=\"75\">Consumption</text>\n  <text fill=\"#4f9cf9\" font-size=\"10\" font-weight=\"bold\" x=\"375\" y=\"88\">function</text>\n  <!-- Titik Data -->\n  <circle cx=\"200\" cy=\"171\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"190\" y=\"165\">A</text>\n  <circle cx=\"220\" cy=\"157\" fill=\"#d81b60\" r=\"4\"></circle>\n  <text fill=\"#d81b60\" font-size=\"10\" font-weight=\"bold\" x=\"195\" y=\"145\">B</text>\n  <text fill=\"#d81b60\" font-size=\"10\" x=\"105\" y=\"145\">Break-even point</text>\n  <line stroke=\"#d81b60\" stroke-width=\"1\" x1=\"190\" x2=\"215\" y1=\"145\" y2=\"155\"></line>\n  <circle cx=\"240\" cy=\"143\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"230\" y=\"137\">C</text>\n  <circle cx=\"260\" cy=\"129\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"250\" y=\"123\">D</text>\n  <circle cx=\"280\" cy=\"114\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"290\" y=\"117\">E</text>\n  <circle cx=\"300\" cy=\"100\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"310\" y=\"103\">F</text>\n  <circle cx=\"320\" cy=\"86\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"330\" y=\"89\">G</text>\n  <!-- Garis Saving -->\n  <line stroke=\"#d81b60\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\" x1=\"280\" x2=\"280\" y1=\"114\" y2=\"70\"></line>\n  <text fill=\"#d81b60\" font-size=\"10\" font-weight=\"bold\" transform=\"rotate(-35 340 60)\" x=\"340\" y=\"60\">Saving</text>\n  <circle cx=\"280\" cy=\"70\" fill=\"#d81b60\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"265\" y=\"65\">E''</text>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"285\" y=\"315\">28,000</text>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"210\" y=\"315\">25,000</text>\n</svg>",
      "caption": "Figure 21-2. A Plot of the Consumption Function. Kurva Konsumsi (biru) memotong garis 45 derajat pada titik B. Di sebelah kanan B, jarak vertikal antara kurva biru dan garis 45 derajat adalah Saving (Tabungan)."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Interpretasi Anatomi: Kurva Fungsi Konsumsi",
      "text": "**Titik A:** Keluarga berada di posisi miskin absolut. Pendapatan hanya $24.000, tapi biaya hidup mendesak $24.200. Akibatnya keluarga ini **berutang $200 (Dissaving)**. Secara grafis, kurva biru *berada di atas* garis 45 derajat.\n\n**Titik B (Break-Even Point):** Titik keramat di mana Pendapatan ($25.000) tepat ludes digunakan untuk Konsumsi ($25.000). Tidak ada yang ditabung, tidak ada utang (S=0). Di grafik, ini adalah **titik perpotongan** Kurva Konsumsi dengan Garis Kesempurnaan 45 derajat.\n\n**Titik E (dan C,D,F,G):** Ekonomi membaik. Pendapatan naik ke $28.000. Keluarga hanya membelanjakan $27.400, dan menabung $600. Di area ini, kurva Konsumsi *berada di bawah* garis 45 derajat. **Jarak vertikal** antara kurva Konsumsi (titik E) merentang naik ke garis 45 derajat (titik E'') adalah representasi visual mutlak dari Saving."
    },
    {
      "kind": "h2",
      "text": "Grafik 2: Kurva Fungsi Tabungan (Saving)"
    },
    {
      "kind": "figure",
      "title": "Fungsi Tabungan adalah Cerminan Fungsi Konsumsi",
      "svg": "<svg font-family=\"DM Sans, sans-serif\" style=\"max-width:100%;height:auto;margin:0 auto;display:block\" viewBox=\"0 0 450 300\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Sumbu Utama -->\n  <line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"400\" y1=\"220\" y2=\"220\"></line>\n  <line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"50\" y1=\"280\" y2=\"30\"></line>\n  <line stroke=\"#657084\" stroke-width=\"1\" x1=\"45\" x2=\"55\" y1=\"250\" y2=\"250\"></line>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"20\" y=\"255\">-200</text>\n  <line stroke=\"#657084\" stroke-width=\"1\" x1=\"45\" x2=\"55\" y1=\"220\" y2=\"220\"></line>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"30\" y=\"225\">0</text>\n  <!-- Label Sumbu -->\n  <text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(-90 15 150)\" x=\"15\" y=\"150\">Net saving (dollars)</text>\n  <text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"190\" y=\"285\">Disposable income (dollars)</text>\n  <text fill=\"#9aa4b7\" font-size=\"11\" font-weight=\"bold\" x=\"410\" y=\"225\">DI</text>\n  <text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"45\" y=\"20\">S</text>\n  <!-- Kurva Saving -->\n  <line stroke=\"#d81b60\" stroke-width=\"2.5\" x1=\"160\" x2=\"370\" y1=\"270\" y2=\"50\"></line>\n  <text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"310\" y=\"150\">Saving</text>\n  <!-- Titik Data -->\n  <circle cx=\"190\" cy=\"240\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"180\" y=\"235\">A</text>\n  <circle cx=\"210\" cy=\"220\" fill=\"#d81b60\" r=\"5\"></circle>\n  <text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"200\" y=\"210\">B</text>\n  <circle cx=\"230\" cy=\"198\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"220\" y=\"190\">C</text>\n  <circle cx=\"250\" cy=\"177\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"240\" y=\"170\">D</text>\n  <circle cx=\"270\" cy=\"156\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"260\" y=\"149\">E</text>\n  <circle cx=\"290\" cy=\"135\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"280\" y=\"128\">F</text>\n  <circle cx=\"310\" cy=\"114\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"300\" y=\"107\">G</text>\n  <!-- Garis Jarak E -->\n  <line stroke=\"#d81b60\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\" x1=\"270\" x2=\"270\" y1=\"220\" y2=\"156\"></line>\n  <line stroke=\"#657084\" stroke-width=\"1\" x1=\"270\" x2=\"270\" y1=\"220\" y2=\"225\"></line>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"255\" y=\"240\">28,000</text>\n</svg>",
      "caption": "Figure 21-3. The Saving Function Is the Mirror Image of the Consumption Function. Kurva menembus garis nol (0) tepat di titik break-even B."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Interpretasi Anatomi: Cermin Tabungan",
      "text": "Jika di grafik pertama, kurva biru berpotongan dengan garis 45 derajat di titik B... maka di grafik kedua ini, kurva merah jambu (Saving) **memotong tepat di angka NOL pada sumbu horizontal** pada titik B yang sama ($25.000). \n\nArea di bawah garis horizontal (seperti Titik A) melambangkan **Utang (Dissaving)**, dan area di atas garis horizontal (mulai Titik C ke atas) melambangkan tumpukan kekayaan riil (Saving positif)."
    },
    {
      "kind": "h2",
      "text": "Mengukur Percepatan: Marginal Propensity to Consume & Save (MPC & MPS)"
    },
    {
      "kind": "p",
      "text": "Jika kamu mendapat rejeki tambahan $1, berapakah porsi receh yang akan kamu bakar untuk konsumsi? Angka inilah yang disebut dengan **MPC**."
    },
    {
      "kind": "ul",
      "items": [
        "**MPC (Marginal Propensity to Consume):** Secara matematis adalah **Kemiringan (Slope)** dari fungsi konsumsi. Mengukur tambahan konsumsi akibat tambahan 1 dollar disposable income.",
        "**MPS (Marginal Propensity to Save):** Adalah kemiringan dari fungsi tabungan. Mengukur porsi dari tambahan 1 dollar yang masuk ke celengan.",
        "**Hubungan Besi:** Keduanya harus bernilai mutlak 1, karena setiap tambahan koin HANYA bisa dikonsumsi atau ditabung. (MPC + MPS = 1)"
      ]
    },
    {
      "kind": "formula",
      "text": "MPC = ΔC / ΔY  atau  MPC = (C₂ - C₁) / (Y₂ - Y₁)\n\nMPS = ΔS / ΔY  atau  MPS = (S₂ - S₁) / (Y₂ - Y₁)",
      "note": "Δ (Delta) melambangkan selisih atau 'perubahan'. Selisih data baris bawah dikurangi data baris atasnya."
    },
    {
      "kind": "h2",
      "text": "Tabel 2: Eksekusi Perhitungan MPC dan MPS"
    },
    {
      "kind": "p",
      "text": "Mari kita hitung transisi dari Titik A ke Titik B berdasarkan data Tabel 1 sebelumnya:\n- **ΔY (Perubahan Income):** Pendapatan naik dari $24.000 ke $25.000. Selisih = $1.000.\n- **ΔC (Perubahan Konsumsi):** Belanja naik dari $24.200 ke $25.000. Selisih = $800.\n- **ΔS (Perubahan Tabungan):** Tabungan berubah dari -$200 menjadi 0. Selisih = +$200."
    },
    {
      "kind": "table",
      "headers": ["Transisi", "Δ Income (ΔY)", "Δ Consump. (ΔC)", "MPC (ΔC / ΔY)", "Δ Saving (ΔS)", "MPS (ΔS / ΔY)"],
      "rows": [
        ["A ke B", "$1.000", "$800", "800/1000 = **0.80**", "$200", "200/1000 = **0.20**"],
        ["B ke C", "$1.000", "$800", "800/1000 = **0.80**", "$200", "200/1000 = **0.20**"],
        ["C ke D", "$1.000", "$800", "800/1000 = **0.80**", "$200", "200/1000 = **0.20**"],
        ["D ke E", "$1.000", "$800", "800/1000 = **0.80**", "$200", "200/1000 = **0.20**"]
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Interpretasi Kunci",
      "text": "Perhatikan bahwa angka MPC terus menerus **0.80** dan MPS selalu **0.20** di sepanjang tabel. Hal ini membuktikan bahwa Fungsi Konsumsi dan Tabungan di kasus ini berbentuk **Linear (Garis Lurus)** dengan kemiringan (slope) konstan. Jika fungsinya melengkung (non-linear), maka angka MPC akan berubah di tiap tingkatan."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "🚨 PANDUAN UJIAN: Cara Mengekstrak Rumus dari Tabel Data",
      "text": "Dalam ujian Pengantar Teori Ekonomi, soal sering kali disajikan dalam bentuk tabel yang hanya berisi angka Pendapatan (Y) dan Konsumsi (C). Mahasiswa dituntut untuk merumuskan sendiri persamaan matematis C = a + bY. Kuasai langkah-langkah di bawah ini untuk memecahkan soal kuis dan UAS dosen!"
    },
    {
      "kind": "h2",
      "text": "Contoh Soal Ujian: Ekstraksi Rumus & Titik Impas"
    },
    {
      "kind": "p",
      "text": "Misalkan di lembar ujianmu hanya diberikan tabel buta seperti ini:"
    },
    {
      "kind": "table",
      "headers": ["Titik", "Pendapatan / Y (Miliar Rp)", "Konsumsi / C (Miliar Rp)"],
      "rows": [
        ["A", "0", "150"],
        ["B", "1.000", "900"],
        ["C", "2.000", "1.650"]
      ]
    },
    {
      "kind": "p",
      "text": "**Pertanyaan Ujian:** Tentukan Fungsi Konsumsi, Fungsi Tabungan, dan Titik Keseimbangan (Break-Even Point) beserta maknanya!"
    },
    {
      "kind": "ul",
      "items": [
        "**Langkah 1 (Cari MPC / b):** Kita ambil data titik B dan C. ΔC = 1.650 - 900 = 750. ΔY = 2.000 - 1.000 = 1.000. Maka MPC = 750 / 1000 = **0.75**.",
        "**Langkah 2 (Cari Konsumsi Otonom / a):** Karena di tabel sudah ada saat Y = 0 (Titik A), maka nilai a otomatis **150**. *Jika Titik A disembunyikan dosen*, kita masukkan titik B (1.000, 900) ke kerangka C = a + bY ➔ 900 = a + (0.75 × 1.000) ➔ 900 = a + 750 ➔ a = **150**.",
        "**Langkah 3 (Menyusun Fungsi):** Maka Fungsi Konsumsi utuhnya adalah **C = 150 + 0.75Y**. Dan karena MPS = 1 - MPC (1 - 0.75 = 0.25), maka Fungsi Tabungannya adalah **S = -150 + 0.25Y**."
      ]
    },
    {
      "kind": "formula",
      "text": "Mencari Titik Impas (Y = C):\nY = 150 + 0.75Y\nY - 0.75Y = 150\n0.25Y = 150\nY = 600",
      "note": "Perhitungan aljabar pembuktian ekuilibrium Break-Even Point."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Interpretasi Hasil Analisis",
      "text": "**Titik Impas (Break-Even) terjadi pada angka Pendapatan 600 Miliar Rupiah.**\n\n- **Makna 1:** Ketika Pendapatan Nasional mencapai 600 Miliar, seluruh uang tersebut LUDES dikonsumsi oleh rumah tangga. Tidak ada yang ditabung (S = 0), dan tidak ada yang harus mengutang.\n- **Makna 2:** Fungsi Konsumsi (C = 150 + 0.75Y) membuktikan bahwa masyarakat negara ini menggunakan 75% (0.75) dari SETIAP TAMBAHAN pendapatan mereka untuk belanja, dan menabung sisanya 25% (0.25).\n- **Pembuktian Absolut:** Mari kita cek ke Fungsi Tabungan di titik tersebut: S = -150 + 0.25(600) ➔ S = -150 + 150 = 0. Terbukti valid dan sesuai dengan teori dasar makroekonomi!"
    },
    {
      "kind": "h2",
      "text": "Grafik 3: Keterkaitan Absolut Konsumsi dan Tabungan"
    },
    {
      "kind": "figure",
      "title": "Titik Temu Break-Even (Y_E)",
      "svg": "<svg font-family=\"DM Sans, sans-serif\" style=\"max-width:100%;height:auto;margin:0 auto;display:block\" viewBox=\"0 0 450 350\" xmlns=\"http://www.w3.org/2000/svg\"><line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"400\" y1=\"200\" y2=\"200\"></line><line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"100\" x2=\"100\" y1=\"300\" y2=\"50\"></line><text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"80\" y=\"60\">C,S</text><text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"410\" y=\"205\">Y</text><line stroke=\"#9aa4b7\" stroke-width=\"1.5\" x1=\"100\" x2=\"300\" y1=\"200\" y2=\"0\"></line><text fill=\"#9aa4b7\" font-size=\"11\" transform=\"rotate(-45 250 50)\" x=\"250\" y=\"50\">C = Y</text><line stroke=\"#4f9cf9\" stroke-width=\"2\" x1=\"50\" x2=\"380\" y1=\"160\" y2=\"60\"></line><text fill=\"#4f9cf9\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(-15 300 80)\" x=\"300\" y=\"80\">C = a + bY</text><line stroke=\"#d81b60\" stroke-width=\"2\" x1=\"50\" x2=\"380\" y1=\"240\" y2=\"140\"></line><text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(-15 300 160)\" x=\"280\" y=\"160\">S = -a + (1 - b)Y</text><circle cx=\"231.5\" cy=\"105\" fill=\"#f9a825\" r=\"4\"></circle><text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"240\" y=\"110\">E</text><circle cx=\"231.5\" cy=\"200\" fill=\"#f9a825\" r=\"4\"></circle><text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"225\" y=\"215\">Y_E</text><line stroke=\"#f9a825\" stroke-dasharray=\"4,4\" stroke-width=\"1.5\" x1=\"231.5\" x2=\"231.5\" y1=\"200\" y2=\"105\"></line><circle cx=\"100\" cy=\"145\" fill=\"#9aa4b7\" r=\"3\"></circle><text fill=\"#9aa4b7\" font-size=\"12\" x=\"85\" y=\"145\">a</text><circle cx=\"100\" cy=\"225\" fill=\"#9aa4b7\" r=\"3\"></circle><text fill=\"#9aa4b7\" font-size=\"12\" x=\"75\" y=\"230\">-a</text></svg>",
      "caption": "Grafik gabungan Fungsi Konsumsi (C = a + bY) dan Fungsi Tabungan (S = -a + (1-b)Y). Jarak dari 0 ke 'a' sama persis dengan jarak dari 0 ke '-a'."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Interpretasi Keterkaitan: Ekuilibrium & Break-Even",
      "text": "Grafik di atas merangkum hubungan matematis mutlak antara Konsumsi dan Tabungan:\n\n- Pada sumbu vertikal (C, S), titik **a** melambangkan Konsumsi Otonom (C₀). Karena konsumsi ini harus dibayar meski tak punya pendapatan, ia menghasilkan utang yang digambarkan sebagai titik **-a** (Dissaving) pada fungsi tabungan.\n- Titik E adalah **Break-Even Point**. Di sini, Kurva Konsumsi berpotongan dengan Garis 45 Derajat (C=Y). Seluruh pendapatan habis dikonsumsi.\n- Tepat pada tingkat pendapatan yang sama, yakni pada titik Y (Ekuilibrium), **Kurva Tabungan memotong sumbu horizontal**. Artinya, Tabungan (S) persis bernilai Nol (0). Garis putus-putus membuktikan bahwa perpotongan E dan titik S=0 selalu sejajar vertikal!"
    },
    {
      "kind": "h2",
      "text": "Mesin Kedua: Investasi (Perspektif Makro & BPS)"
    },
    {
      "kind": "p",
      "text": "Awas jebakan teori makro! Banyak orang awam menyebut \"berinvestasi\" saat mereka membeli tanah, membeli saham, atau menaruh uang di rekening tabungan. Dalam ekonomi makro, transaksi tersebut hanyalah **transaksi finansial (financial investments)**, karena efek nettonya hanyalah berpindah tangan (Zero-Sum Game)."
    },
    {
      "kind": "ul",
      "items": [
        "**Investasi Makroekonomi (Real Investment):** Harus berarti **penambahan stok aset produktif atau barang modal baru**. Contoh: Amazon membangun gudang baru, atau Tuan Smith membangun rumah baru.",
        "**Klasifikasi BPS (Badan Pusat Statistik):** Investasi di Indonesia dibagi menjadi dua kategori mutlak:\n1. **Pembentukan Modal Tetap Bruto (PMTB / GFCF):** Pengeluaran barang modal dengan umur > 1 tahun (bukan barang konsumsi). Mencakup: bangunan tempat tinggal/bukan tempat tinggal, jalan, bandara, mesin & peralatan. (Catatan: Senjata militer dihitung sebagai konsumsi pemerintah, bukan PMTB).\n2. **Perubahan Stok (Inventory Investment):** Barang yang akan dipakai, sedang dikerjakan, atau sudah jadi tapi belum terjual. Dihitung dari selisih stok akhir tahun dikurangi stok awal tahun."
      ]
    },
    {
      "kind": "h2",
      "text": "Kategori Kapital & Aset"
    },
    {
      "kind": "ul",
      "items": [
        "**Tangible Assets (Aset Berwujud):** Aset fisik yang meningkatkan produktivitas. Dibagi 3:\n  - *Structures* (Pabrik, rumah)\n  - *Equipment* (Mesin, mobil, truk)\n  - *Inventories* (Stok mobil di dealer)\n- **Intangible Assets / e-Capital:** Aset tak berwujud yang saat ini makin krusial (Software komputer, paten, merek dagang).\n- **Financial Assets (Aset Finansial):** Hanya berupa secarik kertas atau catatan elektronik berupa klaim moneter pihak satu terhadap pihak lain (contoh: KPR/Mortgage, di mana rumah fisiknya menjadi jaminan/collateral)."
      ]
    },
    {
      "kind": "h2",
      "text": "Rate of Return vs Interest Rate"
    },
    {
      "kind": "p",
      "text": "Apa fungsi Aset Finansial jika ia bukan 'investasi riil'? Fungsinya sangat vital: **Menjembatani ketidakcocokan (mismatch) antara orang yang punya tabungan (saver) dengan pengusaha yang butuh modal (investors).**"
    },
    {
      "kind": "formula",
      "text": "Rate of Return on Investment (RoR)\nRoR = (Net Revenue / Modal Diinvestasikan) × 100%",
      "note": "Contoh: Perusahaan rental 'KARTIKA' beli mobil bekas seharga $20.000. Laba bersih setahun $2.400. Maka RoR = (2.400 / 20.000) = 12%."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Perbedaan Mendasar",
      "text": "- **Rate of Return on Investment:** Dihitung berdasarkan imbal hasil dari **Aset Riil / Tangible** (seperti mobil rental tadi, mesin pabrik, dll).\n- **Interest Rate (Suku Bunga):** Dihitung berdasarkan imbal hasil dari **Aset Finansial** (seperti bunga deposito di bank, bunga obligasi, dll)."
    },
    {
      "kind": "h2",
      "text": "Present Value (Nilai Sekarang) dan Harga Aset"
    },
    {
      "kind": "formula",
      "text": "Nilai Sekarang (Present Value):\nV = [ N₁ / (1+i) ] + [ N₂ / (1+i)² ] + ... + [ N_t / (1+i)^t ]",
      "note": "Di mana V = Nilai sekarang aset, N = Penerimaan bersih (net receipts) di masa depan, dan i = Suku Bunga (Interest rate)."
    },
    {
      "kind": "p",
      "text": "Present value dari sebuah aset adalah nilai uang hari ini dari aliran pendapatan (stream of future income) yang akan dihasilkan aset tersebut di masa depan."
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Hukum Inverse: Suku Bunga vs Harga Aset",
      "text": "Terdapat hukum mutlak dalam aset finansial: **Harga aset cenderung bergerak berlawanan (inversely) dengan suku bunga.** Mengapa? Karena berdasarkan rumus di atas, jika angka penyebut yakni suku bunga (i) membesar, maka hasil pembagiannya alias nilai sekarang (Present Value) otomatis menyusut secara matematis.\n\nOleh karena itu, **Harga saham, obligasi, real estat, dan banyak aset berumur panjang lainnya akan TURUN seiring dengan kenaikan suku bunga.**"
    },
    {
      "kind": "h2",
      "text": "Suku Bunga Riil vs Nominal"
    },
    {
      "kind": "ul",
      "items": [
        "**Nominal Interest Rate (Suku Bunga Nominal):** Suku bunga yang tertera di atas kertas (misal, bunga deposito 5% di bank). Suku bunga ini belum memperhitungkan kejamnya inflasi.",
        "**Real Interest Rate (Suku Bunga Riil):** Adalah Suku Bunga Nominal yang **telah dikoreksi/dikurangi dengan tingkat Inflasi**. Ini menunjukkan daya beli sesungguhnya dari imbal hasilmu."
      ]
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Eksekusi Angka: Persamaan Fisher (Fisher Equation)",
      "text": "Hubungan antara Suku Bunga Nominal (i), Suku Bunga Riil (r), dan Inflasi (π) dirumuskan oleh Irving Fisher secara matematis:\n\n**r = i - π**\n\n**Studi Kasus Kritis:**\nKamu melihat Bank X menawarkan bunga deposito tinggi sebesar **10%** (Nominal i). Kamu tergiur dan menaruh uang $1.000 (berharap jadi $1.100 tahun depan). Namun, ternyata tahun itu negara dilanda hiperinflasi sebesar **15%** (π).\n\n**Hasil & Interpretasi:**\nr = 10% - 15% = **-5%**\n\nSecara riil, suku bungamu **negatif 5%**. Artinya, meski uang di rekeningmu bertambah secara angka, daya beli sesungguhnya justru **merosot 5%**. Kamu bukannya makin kaya, melainkan makin miskin karena digerogoti inflasi! Inilah hasil nyata dari ilusi uang (money illusion) yang sangat ditakuti para ekonom."
    }
  ]
};

const tm10: Reading = {
  "tm": 10,
  "title": "Perekonomian Tertutup (Bagian 2): Keseimbangan, Multiplier & Kebijakan Fiskal",
  "ref": "Kontrak: 1(20), 2(23,24) · Substansi: Samuelson Ch.21-22; Mankiw Ch.26, Ch.33-34",
  "intro": "Membedah peran investasi, mencetak rumus sakti Multiplier, dan membongkar cara kerja Kebijakan Fiskal (Pajak & Belanja Negara) secara matematis absolut.",
  "objectives": [
    "Memahami anatomi Investasi (determinan dan kurva permintaannya).",
    "Menentukan titik keseimbangan Y = C + I dan S = I secara grafis dan matematis.",
    "Membuktikan secara aljabar rumus sakti Multiplier Investasi, Belanja (G), dan Pajak (T).",
    "Mengekstrak fungsi dan keseimbangan 3-Sektor dalam skenario pajak absolut (T0) dan pajak proporsional (tY)."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Peran dan Determinan Investasi"
    },
    {
      "kind": "p",
      "text": "Investasi memiliki peran ganda yang sangat mematikan dalam makroekonomi: secara jangka pendek ia mendongkrak **Aggregate Demand (Permintaan Agregat)**, dan secara jangka panjang ia merangsang **akumulasi modal** yang memperbesar kapasitas produksi negara. Apa yang menentukan orang mau berinvestasi?"
    },
    {
      "kind": "ul",
      "items": [
        "**Revenue (Pendapatan):** Apakah investasi ini akan meningkatkan output / PDB yang menghasilkan uang?",
        "**Cost (Biaya):** Sangat dipengaruhi oleh **Suku Bunga (Interest Rate)** dan Pajak.",
        "**Expectation (Ekspektasi):** Kepercayaan diri pebisnis terhadap masa depan ekonomi negara."
      ]
    },
    {
      "kind": "figure",
      "title": "Investment Demand Curve (Kurva Permintaan Investasi)",
      "svg": "<svg viewBox=\"0 0 450 300\" xmlns=\"http://www.w3.org/2000/svg\"><line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"400\" y1=\"250\" y2=\"250\"></line><line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"50\" y1=\"250\" y2=\"30\"></line><text fill=\"#9aa4b7\" font-size=\"11\" x=\"10\" y=\"20\">r (%)</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"410\" y=\"255\">I</text><text fill=\"#9aa4b7\" font-size=\"11\" transform=\"rotate(-90 20 150)\" x=\"20\" y=\"150\">Interest Rate / Suku Bunga</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"180\" y=\"280\">Investment (Triliun Rp)</text><line stroke=\"#4f9cf9\" stroke-width=\"2.5\" x1=\"80\" x2=\"350\" y1=\"50\" y2=\"220\"></line><text fill=\"#4f9cf9\" font-size=\"12\" font-weight=\"bold\" x=\"360\" y=\"225\">ID (Investment Demand)</text></svg>",
      "caption": "Kurva miring ke bawah secara mutlak: Semakin tinggi suku bunga (biaya meminjam), semakin merosot jumlah investasi yang dilakukan pengusaha."
    },
    {
      "kind": "h2",
      "text": "Keseimbangan 2-Sektor: Keynesian Cross & Titik Impas"
    },
    {
      "kind": "p",
      "text": "Jika di TM 9 kita membahas ekuilibrium saat C = Y (Break-Even keluarga), kini kita memasukkan Perusahaan (I). Perekonomian mencapai **Keseimbangan (Ekuilibrium)** saat total produksi persis sama dengan total permintaan."
    },
    {
      "kind": "figure",
      "title": "Pendekatan 1: Pengeluaran Agregat (Y = C + I)",
      "svg": "<svg viewBox=\"0 0 450 350\" xmlns=\"http://www.w3.org/2000/svg\"><line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"400\" y1=\"300\" y2=\"300\"></line><line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"50\" y1=\"300\" y2=\"30\"></line><text fill=\"#9aa4b7\" font-size=\"11\" x=\"20\" y=\"20\">AE</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"410\" y=\"305\">Y</text><line stroke=\"#9aa4b7\" stroke-width=\"1.5\" x1=\"50\" x2=\"320\" y1=\"300\" y2=\"30\"></line><text fill=\"#9aa4b7\" font-size=\"11\" transform=\"rotate(-45 280 60)\" x=\"280\" y=\"60\">Y = AE (45°)</text><line stroke=\"#d81b60\" stroke-width=\"2\" x1=\"50\" x2=\"350\" y1=\"200\" y2=\"100\"></line><text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"360\" y=\"105\">C</text><line stroke=\"#4f9cf9\" stroke-width=\"2.5\" x1=\"50\" x2=\"350\" y1=\"150\" y2=\"50\"></line><text fill=\"#4f9cf9\" font-size=\"11\" font-weight=\"bold\" x=\"360\" y=\"55\">AE = C + I</text><line stroke=\"#f9a825\" stroke-dasharray=\"4,4\" stroke-width=\"1.5\" x1=\"200\" x2=\"200\" y1=\"300\" y2=\"150\"></line><circle cx=\"200\" cy=\"150\" fill=\"#f9a825\" r=\"5\"></circle><text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"190\" y=\"320\">Y*</text><text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"210\" y=\"145\">E</text></svg>",
      "caption": "Kurva Konsumsi (C) didorong ke atas sebesar I (Investasi). Titik potong E adalah Y Ekuilibrium (Y*)."
    },
    {
      "kind": "figure",
      "title": "Pendekatan 2: Injeksi vs Kebocoran (S = I)",
      "svg": "<svg viewBox=\"0 0 450 250\" xmlns=\"http://www.w3.org/2000/svg\"><line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"400\" y1=\"150\" y2=\"150\"></line><line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"50\" y1=\"220\" y2=\"30\"></line><text fill=\"#9aa4b7\" font-size=\"11\" x=\"20\" y=\"20\">S, I</text><text fill=\"#9aa4b7\" font-size=\"11\" x=\"410\" y=\"155\">Y</text><line stroke=\"#4f9cf9\" stroke-width=\"2.5\" x1=\"50\" x2=\"380\" y1=\"80\" y2=\"80\"></line><text fill=\"#4f9cf9\" font-size=\"11\" font-weight=\"bold\" x=\"390\" y=\"85\">I (Investasi)</text><line stroke=\"#d81b60\" stroke-width=\"2\" x1=\"100\" x2=\"350\" y1=\"200\" y2=\"50\"></line><text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"360\" y=\"55\">S (Tabungan)</text><line stroke=\"#f9a825\" stroke-dasharray=\"4,4\" stroke-width=\"1.5\" x1=\"300\" x2=\"300\" y1=\"150\" y2=\"80\"></line><circle cx=\"300\" cy=\"80\" fill=\"#f9a825\" r=\"5\"></circle><text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"290\" y=\"170\">Y*</text><text fill=\"#9aa4b7\" font-size=\"12\" font-weight=\"bold\" x=\"280\" y=\"70\">E (S=I)</text></svg>",
      "caption": "Ekuilibrium absolut juga tercapai saat Kebocoran (Tabungan / S) persis sama besarnya dengan Injeksi (Investasi / I)."
    },
    {
      "kind": "h2",
      "text": "Model Multiplier (Efek Pengganda)"
    },
    {
      "kind": "p",
      "text": "Konsep radikal Keynes: Setiap 1 Rupiah injeksi dari luar (Investasi/Belanja) tidak hanya menaikkan PDB sebesar 1 Rupiah, melainkan berlipat ganda! Mengapa? Karena pengeluaran perusahaan akan menjadi gaji pekerja, lalu pekerja membelanjakan gajinya (sesuai MPC), yang menjadi gaji orang lain lagi, dan seterusnya."
    },
    {
      "kind": "formula",
      "text": "Rumus Sakti Multiplier\n\nK_I = 1 / (1 - MPC) = 1 / MPS\n\nPerubahan PDB = K_I × Perubahan Investasi",
      "note": "K_I adalah Koefisien Multiplier Investasi."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Pembuktian Deret Matematika Absolut",
      "text": "Misalkan Pabrik Z berinvestasi 1.000 Miliar dan MPC masyarakat adalah 2/3 (0.67).\n1. Putaran pertama: Pekerja pabrik dapat 1.000 Miliar.\n2. Putaran kedua: Pekerja belanja 2/3 dari gajinya = 667 Miliar.\n3. Putaran ketiga: Uang 667 Miliar jadi gaji orang lain, dibelanjakan lagi 2/3-nya = 444 Miliar.\n\nSecara aljabar tak terhingga: 1000 × (1 + 2/3 + (2/3)² + (2/3)³ + ...)\nDeret geometri ini disederhanakan menjadi: **1 / (1 - 2/3) × 1000 = 3 × 1000 = 3.000 Miliar.** PDB meledak 3x lipat!"
    },
    {
      "kind": "h2",
      "text": "Keseimbangan 3-Sektor: Kebijakan Fiskal (Pajak Independen)"
    },
    {
      "kind": "p",
      "text": "Pemerintah masuk membawa instrumen **Kebijakan Fiskal**: Belanja Negara (G) dan Pajak (T). Jika diasumsikan Pajak adalah beban tetap (Lump-sum) terlepas dari seberapa besar gaji rakyat, maka rumusnya adalah T = T0."
    },
    {
      "kind": "ul",
      "items": [
        "**Belanja Negara (G):** Berfungsi sebagai INJEKSI langsung ke nadi ekonomi (Sama dengan Investasi).",
        "**Pajak (T):** Berfungsi sebagai KEBOCORAN karena menghisap daya beli masyarakat dari fungsi Konsumsi."
      ]
    },
    {
      "kind": "formula",
      "text": "Penyelesaian Aljabar Keseimbangan (Y = C + I + G)\n\nY = C₀ + b(Y - T₀) + I + G\nY = C₀ + bY - bT₀ + I + G\nY - bY = C₀ - bT₀ + I + G\nY(1 - b) = C₀ - bT₀ + I + G\n\nY = (1 / (1 - b)) × (C₀ - bT₀ + I + G)",
      "note": "Perhatikan bahwa Pajak (T0) berdampak negatif terhadap GDP, namun dikalikan dengan (b) karena uang pajak yang hilang seharusnya sebagian ditabung, sebagian dikonsumsi."
    },
    {
      "kind": "example",
      "title": "Studi Kasus 1: Perhitungan Pajak Konstan (Lump-sum)",
      "blocks": [
        {
          "kind": "p",
          "text": "Diketahui: C = 300 + 0.75Yd, I = 400, G = 200, T = 200.\nTentukan Y Keseimbangan, Multiplier G, dan Multiplier T!"
        },
        {
          "kind": "ul",
          "items": [
            "**Y Keseimbangan:** Masukkan ke rumus jadi Y = [1 / (1 - 0.75)] × (300 - (0.75×200) + 400 + 200) ➔ Y = 4 × (300 - 150 + 400 + 200) ➔ Y = 4 × 750 = **3.000**.",
            "**Multiplier Belanja Negara (K_G):** Rumusnya 1 / (1 - b) ➔ 1 / 0.25 = **4**. Artinya, setiap pemerintah menambah belanja G sebesar 50, PDB (Y) akan meledak naik sebesar 4 × 50 = 200.",
            "**Multiplier Pajak (K_T):** Rumusnya -b / (1 - b) ➔ -0.75 / 0.25 = **-3**. Artinya, setiap pemerintah menaikkan pajak T sebesar 50, PDB (Y) akan merosot sebesar -3 × 50 = -150."
          ]
        }
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Jebakan Kritis UAS",
      "text": "Kenapa Multiplier Pajak lebih kecil secara absolut (3) dibandingkan Multiplier Belanja Negara (4)? Karena saat pemerintah membelanjakan uang (G), 100% uang itu langsung berputar di pasar. Tapi saat rakyat dipajaki (T), uang yang hilang itu sebenarnya terdiri dari jatah konsumsi DAN jatah menabung. Jadi daya pukul pajak ke roda ekonomi sedikit lebih lemah daripada daya dorong belanja negara!"
    },
    {
      "kind": "h2",
      "text": "Keseimbangan dengan Pajak Proporsional (T = T0 + tY)"
    },
    {
      "kind": "p",
      "text": "Dunia nyata tidak menggunakan pajak lump-sum. Semakin kaya kamu, pajaknya makin besar. Ini disebut Pajak Proporsional (dengan tarif t). Fungsi pajaknya menjadi: **T = T₀ + tY**."
    },
    {
      "kind": "example",
      "title": "Studi Kasus 2: Pajak Proporsional",
      "blocks": [
        {
          "kind": "p",
          "text": "Diketahui: C = 300 + 0.75Yd, I = 400, G = 200, **T = 200 + 0.15Y**.\nTentukan Y Keseimbangan baru!"
        },
        {
          "kind": "ul",
          "items": [
            "**Perombakan Multiplier:** Karena ada t, pembagi multiplier berubah jadi 1 / (1 - b + bt).",
            "**Penyebut Baru:** 1 - 0.75 + (0.75 × 0.15) = 0.25 + 0.1125 = **0.3625**.",
            "**Y Keseimbangan:** Y = [1 / 0.3625] × (300 - (0.75×200) + 400 + 200) ➔ Y = 2.7586 × 750 = **2.068,96**."
          ]
        }
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Automatic Stabilizer",
      "text": "Adanya (t) membuat nilai penyebut multiplier semakin besar (dari 0.25 jadi 0.3625). Hasilnya, rasio multiplier hancur mengecil dari 4 menjadi 2.75! Inilah kekuatan rahasia dari **Pajak Proporsional (Automatic Stabilizer)**. Pajak ini otomatis meredam siklus bom-dan-kehancuran ekonomi agar negara tidak terlalu overheating saat *boom* dan tidak terlalu hancur saat resesi."
    },
    {
      "kind": "h2",
      "text": "Identitas Makroekonomi & Tabungan Nasional"
    },
    {
      "kind": "p",
      "text": "Mari kita mainkan trik aljabar dari persamaan absolut keseimbangan untuk membongkar misteri tabungan."
    },
    {
      "kind": "formula",
      "text": "Y = C + I + G\nY - C - G = I\n\nModifikasi (Tambah dan kurangi dengan T):\n(Y - T - C) + (T - G) = I\n\nPrivate Saving + Public Saving = National Saving = Investment",
      "note": "(Y-T-C) adalah sisa gaji rakyat. (T-G) adalah sisa anggaran APBN (Defisit/Surplus)."
    },
    {
      "kind": "example",
      "title": "Studi Kasus 3: Membedah Urat Nadi Tabungan",
      "blocks": [
        {
          "kind": "p",
          "text": "Diketahui GDP (Y) = 8 Triliun, Pajak (T) = 1.5 Triliun, Tabungan Swasta (Private Saving) = 0.5 Triliun, dan Tabungan Publik (Public Saving) = 0.2 Triliun."
        },
        {
          "kind": "ul",
          "items": [
            "**Berapa Konsumsi Rakyat (C)?** Private = Y - T - C ➔ 0.5 = 8 - 1.5 - C ➔ C = 8 - 1.5 - 0.5 = **6 Triliun**.",
            "**Berapa Belanja Pemerintah (G)?** Public = T - G ➔ 0.2 = 1.5 - G ➔ G = 1.5 - 0.2 = **1.3 Triliun**.",
            "**Berapa Total Investasi Negara (I)?** Investment = Private + Public ➔ I = 0.5 + 0.2 = **0.7 Triliun**. (Terbukti juga dari 8 - 6 - 1.3 = 0.7)."
          ]
        }
      ]
    }
  ]
};

const tm11: Reading = {
  "tm": 11,
  "title": "Uang, Sistem Keuangan, dan Pasar Dana Pinjaman",
  "ref": "Mankiw Ch. 29 (Monetary System), Ch. 26 (Saving, Investment, and the Financial System)",
  "intro": "Memahami apa itu uang, bagaimana bank menciptakan uang melalui sistem cadangan fraksional, instrumen kebijakan moneter, dan interaksi tabungan-investasi di pasar dana pinjaman.",
  "objectives": [
    "Menjelaskan fungsi dan jenis-jenis uang.",
    "Mengukur jumlah uang beredar (M1 dan M2).",
    "Menganalisis penciptaan uang oleh bank (Money Multiplier).",
    "Menjelaskan alat kebijakan moneter bank sentral.",
    "Menganalisis pasar dana pinjaman dan dampak kebijakan pemerintah."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Makna dan Fungsi Uang"
    },
    {
      "kind": "p",
      "text": "Uang adalah aset dalam ekonomi yang secara rutin digunakan oleh orang-orang untuk membeli barang dan jasa dari orang lain. Bagi seorang ekonom, uang bukan sekadar kekayaan, melainkan hanya beberapa jenis kekayaan yang diterima secara umum oleh penjual."
    },
    {
      "kind": "ul",
      "items": [
        "**Medium of exchange (Alat tukar):** Barang yang diberikan pembeli kepada penjual ketika mereka ingin membeli barang dan jasa.",
        "**Unit of account (Satuan hitung):** Tolok ukur yang digunakan orang untuk memasang harga dan mencatat utang.",
        "**Store of value (Penyimpan nilai):** Aset yang dapat digunakan orang untuk memindahkan daya beli dari masa sekarang ke masa depan."
      ]
    },
    {
      "kind": "p",
      "text": "Uang dibedakan menjadi **Commodity money** (uang barang yang memiliki nilai intrinsik seperti emas atau perak) dan **Fiat money** (uang fiat yang digunakan sebagai uang karena dekrit/hukum pemerintah, seperti uang kertas dan koin saat ini)."
    },
    {
      "kind": "h2",
      "text": "Jumlah Uang Beredar (Money Supply) dan Permintaan Uang"
    },
    {
      "kind": "p",
      "text": "Kuantitas uang yang tersedia dalam ekonomi disebut *money supply*. Pengukurannya umumnya dibagi dua:"
    },
    {
      "kind": "ul",
      "items": [
        "**M1:** Uang logam dan mata uang kertas yang beredar di luar bank ditambah simpanan yang dapat dicek (giro).",
        "**M2:** M1 ditambah dengan aset lain yang sangat likuid seperti rekening tabungan dan deposito jangka pendek."
      ]
    },
    {
      "kind": "p",
      "text": "Permintaan uang (*money demand*) muncul karena dua alasan utama:"
    },
    {
      "kind": "ul",
      "items": [
        "**Transaksi (Transactions Demand):** Untuk membeli barang. Permintaan ini meningkat jika pendapatan atau harga naik.",
        "**Aset (Asset Demand):** Menyimpan uang sebagai aset, biasanya terjadi ketika suku bunga investasi sangat rendah (mendekati nol). Biaya peluang (*opportunity cost*) dari memegang uang adalah bunga yang hilang karena tidak diinvestasikan."
      ]
    },
    {
      "kind": "h2",
      "text": "Sistem Keuangan: Perantara dan Pasar"
    },
    {
      "kind": "p",
      "text": "Sistem keuangan terdiri dari lembaga-lembaga yang membantu mempertemukan tabungan satu pihak dengan investasi pihak lain. Sistem ini memiliki dua jalur:"
    },
    {
      "kind": "ul",
      "items": [
        "**Perantara Keuangan (Financial Intermediaries):** Lembaga tempat penabung secara *tidak langsung* menyediakan dana bagi peminjam. Contoh: Bank komersial dan reksa dana.",
        "**Pasar Keuangan (Financial Markets):** Lembaga tempat penabung secara *langsung* menyediakan dana bagi peminjam. Contoh: Pasar saham dan pasar obligasi."
      ]
    },
    {
      "kind": "h2",
      "text": "Bank dan Penciptaan Uang (Money Multiplier)"
    },
    {
      "kind": "p",
      "text": "Ketika kita menyimpan uang di bank, bank tidak menyimpannya 100% di brankas. Dalam sistem **Fractional-Reserve Banking**, bank hanya menahan sebagian dana sebagai cadangan (*reserves*) dan meminjamkan sisanya. Rasio dari total deposito yang harus ditahan bank disebut *reserve ratio* (R)."
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Money Multiplier",
      "text": "Money multiplier (pengganda uang) adalah jumlah uang yang dihasilkan sistem perbankan untuk setiap dolar cadangan. Rumusnya adalah **M = 1 / R**."
    },
    {
      "kind": "example",
      "title": "Contoh Penciptaan Uang",
      "blocks": [
        {
          "kind": "p",
          "text": "Misalkan *reserve ratio* (R) adalah 10% (0.1). Jika Bank Sentral menyuntikkan uang $1000 ke dalam ekonomi:"
        },
        {
          "kind": "ul",
          "items": [
            "Bank Pertama menerima deposit $1000. Menyimpan $100 (10%) sebagai cadangan, meminjamkan $900.",
            "Peminjam membelanjakan $900, dan uang itu masuk ke Bank Kedua. Bank Kedua menyimpan $90 (10%) dan meminjamkan $810.",
            "Total uang beredar pada tahap ini: $1000 + $900 + $810 + ... = $10.000."
          ]
        },
        {
          "kind": "p",
          "text": "Pengganda uang = 1 / 0.1 = 10. Uang $1000 berubah menjadi **$10.000** dalam sistem perbankan."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Kebijakan Moneter"
    },
    {
      "kind": "p",
      "text": "Bank Sentral mengendalikan *money supply* melalui tiga instrumen utama:"
    },
    {
      "kind": "ul",
      "items": [
        "**Open-Market Operations (Operasi Pasar Terbuka):** Membeli obligasi pemerintah untuk *menambah* uang beredar, atau menjual obligasi untuk *mengurangi* uang beredar.",
        "**Reserve Requirements (Giro Wajib Minimum):** Mengubah rasio cadangan minimum. *Menurunkan* rasio berarti bank bisa meminjamkan lebih banyak uang (uang beredar bertambah). *Menaikkan* rasio akan mengurangi uang beredar.",
        "**Discount Rate (Suku Bunga Diskonto):** Suku bunga pinjaman yang diberikan Bank Sentral kepada bank komersial. *Menurunkan* suku bunga ini mendorong bank untuk meminjam lebih banyak cadangan (uang beredar bertambah)."
      ]
    },
    {
      "kind": "h2",
      "text": "Pasar Dana Pinjaman (Market for Loanable Funds)"
    },
    {
      "kind": "p",
      "text": "Di pasar dana pinjaman, mereka yang memiliki sisa pendapatan menawarkannya sebagai tabungan, dan mereka yang butuh modal memintanya untuk investasi. Keseimbangan antara Supply (Tabungan) dan Demand (Investasi) menentukan **suku bunga riil (real interest rate)**."
    },
    {
      "kind": "table",
      "headers": [
        "Kebijakan",
        "Dampak Terhadap Pasar",
        "Hasil"
      ],
      "rows": [
        [
          "Insentif Pajak Tabungan (Penurunan pajak bunga)",
          "Meningkatkan Supply dana pinjaman (kurva Supply bergeser ke kanan).",
          "Suku bunga **turun**, kuantitas dana/investasi **naik**."
        ],
        [
          "Kredit Pajak Investasi (Insentif perusahaan)",
          "Meningkatkan Demand dana pinjaman (kurva Demand bergeser ke kanan).",
          "Suku bunga **naik**, kuantitas dana/investasi **naik**."
        ],
        [
          "Defisit Anggaran Pemerintah (G > T)",
          "Mengurangi Public Saving. Supply dana pinjaman agregat menurun (bergeser ke kiri).",
          "Suku bunga **naik**, investasi swasta **turun** (*Crowding Out*)."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Crowding Out",
      "text": "Ketika pemerintah mengalami defisit anggaran, pemerintah harus meminjam dari pasar dana pinjaman. Hal ini mengurangi pasokan dana yang tersedia bagi sektor swasta, menyebabkan suku bunga naik dan investasi perusahaan menurun. Fenomena investasi swasta yang 'tergusur' oleh defisit pemerintah ini disebut *crowding out*."
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
      "kind": "formula",
      "text": "The Degree of Openness (Indikator Keterbukaan)\n\nTrade Dependence Index (TDI) = (Ekspor + Impor) / GDP\n\nSemakin tinggi rasio ini, semakin terbuka dan bergantung suatu negara pada perdagangan internasional."
    },
    {
      "kind": "figure",
      "title": "Output Determination with Foreign Trade",
      "caption": "Keseimbangan Output (Equilibrium GDP) tercapai ketika kurva pengeluaran agregat (C+I+G+NX) memotong garis 45 derajat (titik E). Penambahan Ekspor Neto (NX) mengubah kemiringan kurva. Karena ada kecenderungan mengimpor (MPM), kurva C+I+G+NX lebih landai dari C+I+G. Jarak vertikal antara C+I+G dan C+I+G+NX pada keseimbangan menunjukkan defisit atau surplus ekspor neto.",
      "svg": "<svg viewBox=\"0 0 600 400\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Output Determination with Foreign Trade</title><desc>Grafik Keynesian Cross. Garis C+I+G lebih curam, sedangkan C+I+G+NX lebih landai karena ada kecenderungan mengimpor (marginal propensity to import). Jarak antara keduanya mencerminkan defisit/surplus ekspor neto.</desc><defs><marker id=\"arrow1\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"currentColor\"/></marker></defs><line x1=\"60\" y1=\"340\" x2=\"550\" y2=\"340\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow1)\"/><line x1=\"60\" y1=\"340\" x2=\"60\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow1)\"/><text x=\"540\" y=\"360\" fill=\"currentColor\" font-size=\"12\">GDP (Y)</text><text x=\"20\" y=\"45\" fill=\"currentColor\" font-size=\"12\" transform=\"rotate(-90, 20, 45)\">Total Spending</text><line x1=\"60\" y1=\"340\" x2=\"350\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><text x=\"80\" y=\"325\" fill=\"currentColor\" font-size=\"12\">45°</text><line x1=\"100\" y1=\"230\" x2=\"480\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"490\" y=\"65\" fill=\"#64748b\" font-size=\"13\" font-weight=\"bold\">C + I + G</text><line x1=\"100\" y1=\"230\" x2=\"480\" y2=\"100\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/><text x=\"490\" y=\"105\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">C + I + G + NX</text><circle cx=\"212\" cy=\"188\" r=\"4\" fill=\"#64748b\"/><circle cx=\"340\" cy=\"148\" r=\"4\" fill=\"#f43f5e\"/><text x=\"195\" y=\"180\" fill=\"#64748b\" font-size=\"12\">F (Closed)</text><text x=\"345\" y=\"165\" fill=\"#f43f5e\" font-size=\"12\">E (Open)</text><line x1=\"340\" y1=\"122\" x2=\"340\" y2=\"148\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/><polygon points=\"337,126 343,126 340,122\" fill=\"#f43f5e\"/><polygon points=\"337,144 343,144 340,148\" fill=\"#f43f5e\"/><text x=\"330\" y=\"115\" fill=\"#f43f5e\" font-size=\"11\" text-anchor=\"end\">Net-export deficit</text><line x1=\"212\" y1=\"188\" x2=\"212\" y2=\"340\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"3\"/><line x1=\"340\" y1=\"148\" x2=\"340\" y2=\"340\" stroke=\"#f43f5e\" stroke-width=\"1\" stroke-dasharray=\"3\"/></svg>"
    },
    {
      "kind": "ul",
      "items": []
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
      "svg": "<svg data-graph-id=\"PTE-FLOW-06\" viewBox=\"0 0 920 190\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Identitas ekonomi terbuka</title><desc>Tabungan nasional S menuju Dikurangi investasi domestik I menuju Sisa menjadi NX menuju Selisih yang sama adalah NCO menuju NX sama dengan NCO</desc><defs><marker id=\"arrow-PTE-FLOW-06\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"currentColor\"/></marker></defs><rect x=\"31.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"106.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"106.0\" dy=\"0\">Tabungan nasional S</tspan></text><line x1=\"185.0\" y1=\"97.0\" x2=\"203.0\" y2=\"97.0\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-06)\"/><rect x=\"208.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"283.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"283.0\" dy=\"0\">Dikurangi investasi</tspan><tspan x=\"283.0\" dy=\"18\">domestik I</tspan></text><line x1=\"362.0\" y1=\"97.0\" x2=\"380.0\" y2=\"97.0\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-06)\"/><rect x=\"385.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"460.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"460.0\" dy=\"0\">Sisa menjadi NX</tspan></text><line x1=\"539.0\" y1=\"97.0\" x2=\"557.0\" y2=\"97.0\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-06)\"/><rect x=\"562.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"637.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"637.0\" dy=\"0\">Selisih yang sama</tspan><tspan x=\"637.0\" dy=\"18\">adalah NCO</tspan></text><line x1=\"716.0\" y1=\"97.0\" x2=\"734.0\" y2=\"97.0\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-06)\"/><rect x=\"739.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f9a825\" stroke-width=\"1.5\"/><text x=\"814.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"814.0\" dy=\"0\">NX sama dengan NCO</tspan></text></svg>",
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
      "text": "Keseimbangan Dua Pasar: Loanable Funds & Valuta Asing"
    },
    {
      "kind": "p",
      "text": "Dalam ekonomi terbuka versi Mankiw, terdapat dua pasar utama yang saling terhubung erat oleh Net Capital Outflow (NCO):"
    },
    {
      "kind": "ul",
      "items": [
        "**1. Pasar Dana Pinjaman (Market for Loanable Funds):** Di sini, penawaran dana berasal dari Tabungan Nasional ($S$). Permintaan dana berasal dari Investasi Domestik ($I$) dan Net Capital Outflow ($NCO$). Pada tingkat suku bunga riil keseimbangan, jumlah uang yang ingin ditabung masyarakat akan sama persis dengan jumlah investasi domestik dan investasi asing bersih (NCO).",
        "**2. Pasar Valuta Asing (Market for Foreign-Currency Exchange):** Di pasar ini, penawaran mata uang domestik berasal dari $NCO$ (orang yang menjual mata uang domestik untuk membeli aset luar negeri). Permintaannya berasal dari Ekspor Neto / $NX$ (orang asing yang butuh mata uang kita untuk membeli ekspor kita). Keseimbangan Nilai Tukar Riil ($\\epsilon$) memastikan demand untuk $NX$ persis sama dengan supply dari $NCO$."
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "NCO sebagai Jembatan",
      "text": "NCO menghubungkan kedua pasar ini secara mekanis. Kurva NCO memiliki kemiringan negatif terhadap Suku Bunga Riil ($r$). Mengapa? Karena suku bunga domestik yang lebih tinggi membuat aset domestik (seperti obligasi) lebih menarik bagi investor. Hal ini mengurangi arus modal keluar (NCO turun). Catatan penting: NCO bisa bernilai negatif; nilai NCO negatif berarti perekonomian sedang mengalami aliran masuk modal bersih (Net Capital Inflow)."
    },
    {
      "kind": "figure",
      "title": "Keseimbangan Dua Pasar Ekonomi Terbuka Mankiw",
      "caption": "Model Mankiw: Suku bunga riil ditentukan di pasar dana pinjaman. Suku bunga tersebut menentukan tingkat NCO. Kemudian, NCO menentukan penawaran mata uang domestik di pasar valas, yang bersilangan dengan permintaan ekspor neto (NX) untuk menentukan nilai tukar riil.",
      "svg": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>The Real Equilibrium in an Open Economy</title><desc>Tiga panel pasar terbuka Mankiw. Panel A: Pasar Loanable Funds. Panel B: NCO. Panel C: Pasar Valas.</desc><defs><marker id=\"arrow2\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"currentColor\"/></marker></defs><!-- Panel A --><text x=\"250\" y=\"30\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(a) The Market for Loanable Funds</text><line x1=\"80\" y1=\"280\" x2=\"420\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow2)\"/><line x1=\"80\" y1=\"280\" x2=\"80\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow2)\"/><text x=\"250\" y=\"310\" fill=\"currentColor\" font-size=\"12\" text-anchor=\"middle\">Quantity of Loanable Funds</text><text x=\"70\" y=\"100\" fill=\"currentColor\" font-size=\"12\" text-anchor=\"end\">Real Interest Rate</text><line x1=\"130\" y1=\"260\" x2=\"350\" y2=\"90\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><text x=\"355\" y=\"85\" fill=\"#3b82f6\" font-size=\"12\">Supply (S)</text><line x1=\"130\" y1=\"90\" x2=\"350\" y2=\"260\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><text x=\"355\" y=\"265\" fill=\"#3b82f6\" font-size=\"12\">Demand (I+NCO)</text><circle cx=\"240\" cy=\"175\" r=\"4\" fill=\"currentColor\"/><line x1=\"80\" y1=\"175\" x2=\"480\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/><text x=\"65\" y=\"180\" fill=\"currentColor\" font-size=\"12\">r₁</text><!-- Panel B --><text x=\"700\" y=\"30\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(b) Net Capital Outflow</text><line x1=\"530\" y1=\"280\" x2=\"870\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow2)\"/><line x1=\"530\" y1=\"280\" x2=\"530\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow2)\"/><line x1=\"680\" y1=\"280\" x2=\"680\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"3\"/><text x=\"850\" y=\"300\" fill=\"currentColor\" font-size=\"12\" text-anchor=\"middle\">Net Capital Outflow (NCO)</text><line x1=\"600\" y1=\"90\" x2=\"780\" y2=\"260\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><circle cx=\"690\" cy=\"175\" r=\"4\" fill=\"currentColor\"/><line x1=\"690\" y1=\"175\" x2=\"690\" y2=\"520\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/><text x=\"680\" y=\"295\" fill=\"currentColor\" font-size=\"12\">0</text><!-- Panel C --><text x=\"700\" y=\"580\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(c) The Market for Foreign-Currency Exchange</text><line x1=\"530\" y1=\"520\" x2=\"870\" y2=\"520\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow2)\"/><line x1=\"530\" y1=\"520\" x2=\"530\" y2=\"350\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow2)\"/><text x=\"850\" y=\"540\" fill=\"currentColor\" font-size=\"12\" text-anchor=\"middle\">Quantity of Dollars</text><text x=\"520\" y=\"390\" fill=\"currentColor\" font-size=\"12\" text-anchor=\"end\">Real Exchange Rate</text><line x1=\"690\" y1=\"360\" x2=\"690\" y2=\"520\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><text x=\"700\" y=\"370\" fill=\"#3b82f6\" font-size=\"12\">Supply (NCO)</text><line x1=\"580\" y1=\"380\" x2=\"800\" y2=\"490\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><text x=\"810\" y=\"495\" fill=\"#3b82f6\" font-size=\"12\">Demand (NX)</text><circle cx=\"690\" cy=\"435\" r=\"4\" fill=\"currentColor\"/><line x1=\"530\" y1=\"435\" x2=\"690\" y2=\"435\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/><text x=\"510\" y=\"440\" fill=\"currentColor\" font-size=\"12\">E₁</text></svg>"
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
      "svg": "<svg data-graph-id=\"PTE-FLOW-03B\" viewBox=\"0 0 920 235\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Shock nilai tukar</title><desc>Modal keluar atau sentimen memburuk menuju Kurs domestik melemah menuju Harga impor dan beban valas naik menuju Inflasi naik dan permintaan domestik melemah menuju Ekspor dapat membaik setelah jeda. Kebijakan perlu menimbang stabilitas kurs, inflasi, pertumbuhan, cadangan devisa, dan risiko sektor berutang valas.</desc><defs><marker id=\"arrow-PTE-FLOW-03B\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"currentColor\"/></marker></defs><rect x=\"31.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"106.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"106.0\" dy=\"0\">Modal keluar atau</tspan><tspan x=\"106.0\" dy=\"18\">sentimen memburuk</tspan></text><line x1=\"185.0\" y1=\"97.0\" x2=\"203.0\" y2=\"97.0\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03B)\"/><rect x=\"208.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"283.0\" y=\"97.0\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"283.0\" dy=\"0\">Kurs domestik melemah</tspan></text><line x1=\"362.0\" y1=\"97.0\" x2=\"380.0\" y2=\"97.0\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03B)\"/><rect x=\"385.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"460.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"460.0\" dy=\"0\">Harga impor dan beban</tspan><tspan x=\"460.0\" dy=\"18\">valas naik</tspan></text><line x1=\"539.0\" y1=\"97.0\" x2=\"557.0\" y2=\"97.0\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03B)\"/><rect x=\"562.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#172033\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"637.0\" y=\"79.0\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"637.0\" dy=\"0\">Inflasi naik dan</tspan><tspan x=\"637.0\" dy=\"18\">permintaan domestik</tspan><tspan x=\"637.0\" dy=\"18\">melemah</tspan></text><line x1=\"716.0\" y1=\"97.0\" x2=\"734.0\" y2=\"97.0\" stroke=\"currentColor\" stroke-width=\"2\" marker-end=\"url(#arrow-PTE-FLOW-03B)\"/><rect x=\"739.0\" y=\"54\" width=\"150\" height=\"86\" rx=\"14\" fill=\"#111827\" stroke=\"#f4516c\" stroke-width=\"1.5\"/><text x=\"814.0\" y=\"88.0\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"13\" font-family=\"system-ui, sans-serif\" font-weight=\"600\"><tspan x=\"814.0\" dy=\"0\">Ekspor dapat membaik</tspan><tspan x=\"814.0\" dy=\"18\">setelah jeda</tspan></text><rect x=\"110\" y=\"165\" width=\"700\" height=\"45\" rx=\"12\" fill=\"#0b1220\" stroke=\"currentColor\" stroke-dasharray=\"5 4\"/><text x=\"460\" y=\"193\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"13\" font-family=\"system-ui, sans-serif\">Kebijakan perlu menimbang stabilitas kurs, inflasi, pertumbuhan, cadangan devisa, dan risiko sektor berutang valas.</text></svg>",
      "caption": "Shock kurs memengaruhi perekonomian melalui harga impor, neraca perusahaan, arus modal, ekspor, dan ekspektasi.",
      "altText": "Diagram alur modal keluar menuju pelemahan kurs, kenaikan harga impor dan beban valuta asing, kenaikan inflasi dan pelemahan permintaan domestik, serta kemungkinan perbaikan ekspor setelah jeda."
    },
    {
      "kind": "p",
      "text": "Mari kita lihat bagaimana berbagai shock memengaruhi keseimbangan tersebut:"
    },
    {
      "kind": "ul",
      "items": [
        "**1. Defisit Anggaran Pemerintah (Budget Deficit)**\nDefisit menyebabkan Tabungan Nasional ($S$) turun $\\rightarrow$ Supply dana pinjaman turun $\\rightarrow$ **Suku bunga riil naik**. Karena bunga naik, investor asing masuk dan NCO turun. Akibatnya, Supply mata uang domestik di pasar valas turun $\\rightarrow$ **Nilai tukar riil apresiasi** $\\rightarrow$ Ekspor Neto (NX) turun. Fenomena ini memicu *Twin Deficits* (Defisit Anggaran & Defisit Perdagangan).",
        "**2. Kebijakan Perdagangan (Kuota Impor / Tarif)**\nSangat penting dicatat: **Kebijakan ini TIDAK mengubah Trade Balance ($NX$)!** Mengapa? Kuota impor menurunkan impor, sehingga Demand untuk mata uang domestik (untuk beli ekspor neto kita) seolah naik $\\rightarrow$ **Nilai tukar riil apresiasi**. Karena apresiasi, barang ekspor kita jadi mahal, sehingga Ekspor turun. Penurunan ekspor ini membatalkan efek penurunan impor awal. $NX$ tetap sama selama $S$ dan $I$ tidak berubah.",
        "**3. Ketidakstabilan Politik & Capital Flight (Pelarian Modal)**\n*Capital flight* adalah penurunan besar dan tiba-tiba dalam permintaan aset yang berlokasi di suatu negara. Hal ini memiliki dampak terbesar pada negara yang ditinggalkan oleh modal tersebut, namun juga memengaruhi negara lain.\n*   Jika investor mulai khawatir tentang keamanan investasi mereka (misal karena instabilitas politik), modal dapat dengan cepat keluar dari suatu perekonomian.\n*   Hal ini memicu suku bunga naik dan mata uang domestik mengalami depresiasi tajam.\n\n**Studi Kasus: Krisis Meksiko 1994**\nKetika investor di seluruh dunia mengamati masalah politik di Meksiko tahun 1994, mereka menjual sebagian aset Meksiko yang mereka miliki dan menggunakan hasilnya untuk membeli aset di negara lain.\n*   Hal ini meningkatkan *Net Capital Outflow* (NCO) Meksiko secara drastis.\n*   Meningkatnya NCO berarti **permintaan (*demand*) di pasar dana pinjaman (*loanable funds*) ikut meningkat**, yang pada akhirnya **meningkatkan suku bunga** di Meksiko.\n*   Secara bersamaan, tingginya NCO berarti investor menukarkan peso mereka ke mata uang asing. Hal ini **meningkatkan penawaran (*supply*) peso di pasar valuta asing**, sehingga nilai peso jatuh (depresiasi)."
      ]
    },
    {
      "kind": "figure",
      "title": "Efek Defisit Anggaran terhadap Ekonomi Terbuka (Twin Deficits)",
      "caption": "Garis merah menunjukkan kondisi setelah shock defisit anggaran. Penurunan S memicu kenaikan bunga, jatuhnya NCO, dan apresiasi nilai tukar yang merugikan ekspor neto.",
      "svg": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>The Effects of Government Budget Deficit</title><desc>Defisit fiskal menggeser kurva supply dana pinjaman ke kiri, menaikkan suku bunga. Akibatnya NCO turun. Penurunan NCO menggeser kurva supply valas ke kiri, sehingga nilai tukar terapresiasi.</desc><defs><marker id=\"arrow3\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"currentColor\"/></marker></defs><!-- Panel A --><text x=\"250\" y=\"30\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(a) The Market for Loanable Funds</text><line x1=\"80\" y1=\"280\" x2=\"420\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow3)\"/><line x1=\"80\" y1=\"280\" x2=\"80\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow3)\"/><line x1=\"150\" y1=\"260\" x2=\"350\" y2=\"90\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><line x1=\"100\" y1=\"260\" x2=\"300\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/><text x=\"355\" y=\"85\" fill=\"#3b82f6\" font-size=\"12\">S₁</text><text x=\"305\" y=\"85\" fill=\"#f43f5e\" font-size=\"12\">S₂</text><path d=\"M 280 120 L 230 120\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrow3)\"/><line x1=\"110\" y1=\"90\" x2=\"350\" y2=\"260\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><circle cx=\"250\" cy=\"175\" r=\"4\" fill=\"currentColor\"/><circle cx=\"205\" cy=\"138\" r=\"4\" fill=\"#f43f5e\"/><line x1=\"80\" y1=\"175\" x2=\"550\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/><line x1=\"80\" y1=\"138\" x2=\"450\" y2=\"138\" stroke=\"#f43f5e\" stroke-width=\"1\" stroke-dasharray=\"4\"/><text x=\"65\" y=\"180\" fill=\"currentColor\" font-size=\"12\">r₁</text><text x=\"65\" y=\"143\" fill=\"#f43f5e\" font-size=\"12\">r₂</text><!-- Panel B --><text x=\"700\" y=\"30\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(b) Net Capital Outflow</text><line x1=\"530\" y1=\"280\" x2=\"870\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow3)\"/><line x1=\"530\" y1=\"280\" x2=\"530\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow3)\"/><line x1=\"600\" y1=\"90\" x2=\"780\" y2=\"260\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><circle cx=\"690\" cy=\"175\" r=\"4\" fill=\"currentColor\"/><circle cx=\"650\" cy=\"138\" r=\"4\" fill=\"#f43f5e\"/><line x1=\"690\" y1=\"175\" x2=\"690\" y2=\"520\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/><line x1=\"650\" y1=\"138\" x2=\"650\" y2=\"520\" stroke=\"#f43f5e\" stroke-width=\"1\" stroke-dasharray=\"4\"/><path d=\"M 690 220 L 665 220\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrow3)\"/><!-- Panel C --><text x=\"700\" y=\"580\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(c) The Market for Foreign-Currency Exchange</text><line x1=\"530\" y1=\"520\" x2=\"870\" y2=\"520\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow3)\"/><line x1=\"530\" y1=\"520\" x2=\"530\" y2=\"350\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrow3)\"/><line x1=\"690\" y1=\"360\" x2=\"690\" y2=\"520\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><line x1=\"650\" y1=\"360\" x2=\"650\" y2=\"520\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/><text x=\"700\" y=\"370\" fill=\"#3b82f6\" font-size=\"12\">S₁</text><text x=\"625\" y=\"370\" fill=\"#f43f5e\" font-size=\"12\">S₂</text><path d=\"M 690 400 L 665 400\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrow3)\"/><line x1=\"580\" y1=\"380\" x2=\"800\" y2=\"490\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/><circle cx=\"690\" cy=\"435\" r=\"4\" fill=\"currentColor\"/><circle cx=\"650\" cy=\"415\" r=\"4\" fill=\"#f43f5e\"/><line x1=\"530\" y1=\"435\" x2=\"690\" y2=\"435\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/><line x1=\"530\" y1=\"415\" x2=\"650\" y2=\"415\" stroke=\"#f43f5e\" stroke-width=\"1\" stroke-dasharray=\"4\"/><text x=\"510\" y=\"440\" fill=\"currentColor\" font-size=\"12\">E₁</text><text x=\"510\" y=\"420\" fill=\"#f43f5e\" font-size=\"12\">E₂</text><rect x=\"30\" y=\"320\" width=\"210\" height=\"70\" fill=\"#1e293b\" rx=\"4\"/><text x=\"40\" y=\"340\" fill=\"#f8fafc\" font-size=\"11\">1. Defisit menggeser S ke kiri,</text><text x=\"40\" y=\"355\" fill=\"#f8fafc\" font-size=\"11\">sehingga r naik.</text><text x=\"40\" y=\"375\" fill=\"#f8fafc\" font-size=\"11\">2. NCO merespons r naik (turun).</text><rect x=\"740\" y=\"330\" width=\"200\" height=\"70\" fill=\"#1e293b\" rx=\"4\"/><text x=\"750\" y=\"350\" fill=\"#f8fafc\" font-size=\"11\">3. NCO turun = Supply valas turun.</text><text x=\"750\" y=\"365\" fill=\"#f8fafc\" font-size=\"11\">4. E naik (Apresiasi).</text></svg>"
    },
    {
      "kind": "figure",
      "title": "Efek Kebijakan Perdagangan (Import Quota)",
      "caption": "Kuota impor menggeser kurva Demand valas ke kanan, menaikkan nilai tukar riil. Karena NCO (S dan I) tidak berubah, ekspor neto secara total tetap sama.",
      "svg": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<title>The Effects of an Import Quota</title>\n<desc>Kuota impor mengurangi impor, sehingga demand valas naik. E naik, NX tetap.</desc>\n<defs><marker id=\"arrowQ\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"currentColor\"/></marker></defs>\n<!-- Panel A -->\n<text x=\"250\" y=\"30\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(a) The Market for Loanable Funds</text>\n<line x1=\"80\" y1=\"280\" x2=\"420\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowQ)\"/>\n<line x1=\"80\" y1=\"280\" x2=\"80\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowQ)\"/>\n<line x1=\"130\" y1=\"260\" x2=\"350\" y2=\"90\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n<line x1=\"130\" y1=\"90\" x2=\"350\" y2=\"260\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n<text x=\"355\" y=\"85\" fill=\"#3b82f6\" font-size=\"12\">Supply</text>\n<text x=\"355\" y=\"265\" fill=\"#3b82f6\" font-size=\"12\">Demand</text>\n<circle cx=\"240\" cy=\"175\" r=\"4\" fill=\"currentColor\"/>\n<line x1=\"80\" y1=\"175\" x2=\"480\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n<text x=\"65\" y=\"180\" fill=\"currentColor\" font-size=\"12\">r₁</text>\n<!-- Panel B -->\n<text x=\"700\" y=\"30\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(b) Net Capital Outflow</text>\n<line x1=\"530\" y1=\"280\" x2=\"870\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowQ)\"/>\n<line x1=\"530\" y1=\"280\" x2=\"530\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowQ)\"/>\n<line x1=\"600\" y1=\"90\" x2=\"780\" y2=\"260\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n<circle cx=\"690\" cy=\"175\" r=\"4\" fill=\"currentColor\"/>\n<line x1=\"690\" y1=\"175\" x2=\"690\" y2=\"520\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n<text x=\"790\" y=\"265\" fill=\"#3b82f6\" font-size=\"12\">NCO</text>\n<!-- Panel C -->\n<text x=\"700\" y=\"580\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(c) The Market for Foreign-Currency Exchange</text>\n<line x1=\"530\" y1=\"520\" x2=\"870\" y2=\"520\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowQ)\"/>\n<line x1=\"530\" y1=\"520\" x2=\"530\" y2=\"350\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowQ)\"/>\n<line x1=\"690\" y1=\"360\" x2=\"690\" y2=\"520\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n<line x1=\"580\" y1=\"380\" x2=\"800\" y2=\"490\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n<line x1=\"580\" y1=\"350\" x2=\"800\" y2=\"460\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n<text x=\"700\" y=\"370\" fill=\"#3b82f6\" font-size=\"12\">Supply</text>\n<text x=\"810\" y=\"495\" fill=\"#3b82f6\" font-size=\"12\">D₁</text>\n<text x=\"810\" y=\"465\" fill=\"#f43f5e\" font-size=\"12\">D₂</text>\n<path d=\"M 750 465 L 750 435\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrowQ)\"/>\n<circle cx=\"690\" cy=\"435\" r=\"4\" fill=\"currentColor\"/>\n<circle cx=\"690\" cy=\"405\" r=\"4\" fill=\"currentColor\"/>\n<line x1=\"530\" y1=\"435\" x2=\"690\" y2=\"435\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n<line x1=\"530\" y1=\"405\" x2=\"690\" y2=\"405\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n<text x=\"510\" y=\"440\" fill=\"currentColor\" font-size=\"12\">E₁</text>\n<text x=\"510\" y=\"410\" fill=\"currentColor\" font-size=\"12\">E₂</text>\n\n<rect x=\"540\" y=\"200\" width=\"160\" height=\"40\" fill=\"#1e293b\" rx=\"4\"/>\n<text x=\"550\" y=\"215\" fill=\"#f8fafc\" font-size=\"11\">3. Net exports,</text>\n<text x=\"550\" y=\"230\" fill=\"#f8fafc\" font-size=\"11\">however, remain the same.</text>\n\n<rect x=\"730\" y=\"360\" width=\"175\" height=\"40\" fill=\"#1e293b\" rx=\"4\"/>\n<text x=\"740\" y=\"375\" fill=\"#f8fafc\" font-size=\"11\">1. An import quota</text>\n<text x=\"740\" y=\"390\" fill=\"#f8fafc\" font-size=\"11\">increases demand for dollars</text>\n\n<rect x=\"400\" y=\"450\" width=\"170\" height=\"40\" fill=\"#1e293b\" rx=\"4\"/>\n<text x=\"410\" y=\"465\" fill=\"#f8fafc\" font-size=\"11\">2. ... and causes real</text>\n<text x=\"410\" y=\"480\" fill=\"#f8fafc\" font-size=\"11\">exchange rate to appreciate.</text>\n</svg>"
    },
    {
      "kind": "figure",
      "title": "Efek Ketidakstabilan Ekonomi (Capital Flight)",
      "caption": "Capital flight membuat arus modal keluar (NCO) melonjak. Permintaan dana pinjaman naik, memicu suku bunga naik. Lonjakan NCO membanjiri pasar dengan mata uang domestik, sehingga nilai tukarnya terdepresiasi parah.",
      "svg": "<svg viewBox=\"0 0 1000 600\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<title>The Effects of Capital Flight</title>\n<desc>Capital flight meningkatkan NCO dan Demand for Loanable Funds. Suku bunga naik, E turun.</desc>\n<defs><marker id=\"arrowF\" markerWidth=\"9\" markerHeight=\"9\" refX=\"8\" refY=\"4.5\" orient=\"auto\"><path d=\"M0,0 L9,4.5 L0,9 Z\" fill=\"currentColor\"/></marker></defs>\n<!-- Panel A -->\n<text x=\"250\" y=\"30\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(a) The Market for Loanable Funds</text>\n<line x1=\"80\" y1=\"280\" x2=\"420\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowF)\"/>\n<line x1=\"80\" y1=\"280\" x2=\"80\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowF)\"/>\n<line x1=\"130\" y1=\"260\" x2=\"350\" y2=\"90\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n<line x1=\"130\" y1=\"90\" x2=\"350\" y2=\"260\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n<line x1=\"170\" y1=\"90\" x2=\"390\" y2=\"260\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n<text x=\"355\" y=\"85\" fill=\"#3b82f6\" font-size=\"12\">Supply</text>\n<text x=\"355\" y=\"265\" fill=\"#3b82f6\" font-size=\"12\">D₁</text>\n<text x=\"395\" y=\"265\" fill=\"#f43f5e\" font-size=\"12\">D₂</text>\n<path d=\"M 280 205 L 320 205\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrowF)\"/>\n<circle cx=\"240\" cy=\"175\" r=\"4\" fill=\"currentColor\"/>\n<circle cx=\"260\" cy=\"160\" r=\"4\" fill=\"currentColor\"/>\n<line x1=\"80\" y1=\"175\" x2=\"690\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n<line x1=\"80\" y1=\"160\" x2=\"730\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n<text x=\"65\" y=\"180\" fill=\"currentColor\" font-size=\"12\">r₁</text>\n<text x=\"65\" y=\"165\" fill=\"currentColor\" font-size=\"12\">r₂</text>\n\n<!-- Panel B -->\n<text x=\"700\" y=\"30\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(b) Net Capital Outflow</text>\n<line x1=\"530\" y1=\"280\" x2=\"870\" y2=\"280\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowF)\"/>\n<line x1=\"530\" y1=\"280\" x2=\"530\" y2=\"60\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowF)\"/>\n<line x1=\"600\" y1=\"90\" x2=\"780\" y2=\"260\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n<line x1=\"650\" y1=\"90\" x2=\"830\" y2=\"260\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n<text x=\"790\" y=\"265\" fill=\"#3b82f6\" font-size=\"12\">NCO₁</text>\n<text x=\"840\" y=\"265\" fill=\"#f43f5e\" font-size=\"12\">NCO₂</text>\n<path d=\"M 660 130 L 700 130\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrowF)\"/>\n<circle cx=\"690\" cy=\"175\" r=\"4\" fill=\"currentColor\"/>\n<circle cx=\"730\" cy=\"160\" r=\"4\" fill=\"currentColor\"/>\n<line x1=\"690\" y1=\"175\" x2=\"690\" y2=\"520\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n<line x1=\"730\" y1=\"160\" x2=\"730\" y2=\"520\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n\n<!-- Panel C -->\n<text x=\"700\" y=\"580\" fill=\"currentColor\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">(c) The Market for Foreign-Currency Exchange</text>\n<line x1=\"530\" y1=\"520\" x2=\"870\" y2=\"520\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowF)\"/>\n<line x1=\"530\" y1=\"520\" x2=\"530\" y2=\"350\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrowF)\"/>\n<line x1=\"690\" y1=\"360\" x2=\"690\" y2=\"520\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n<line x1=\"730\" y1=\"360\" x2=\"730\" y2=\"520\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n<text x=\"700\" y=\"370\" fill=\"#3b82f6\" font-size=\"12\">S₁</text>\n<text x=\"740\" y=\"370\" fill=\"#f43f5e\" font-size=\"12\">S₂</text>\n<path d=\"M 690 390 L 730 390\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrowF)\"/>\n<line x1=\"580\" y1=\"380\" x2=\"800\" y2=\"490\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n<text x=\"810\" y=\"495\" fill=\"#3b82f6\" font-size=\"12\">Demand</text>\n<circle cx=\"690\" cy=\"435\" r=\"4\" fill=\"currentColor\"/>\n<circle cx=\"730\" cy=\"455\" r=\"4\" fill=\"currentColor\"/>\n<line x1=\"530\" y1=\"435\" x2=\"690\" y2=\"435\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n<line x1=\"530\" y1=\"455\" x2=\"730\" y2=\"455\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n<text x=\"510\" y=\"440\" fill=\"currentColor\" font-size=\"12\">E₁</text>\n<text x=\"510\" y=\"460\" fill=\"currentColor\" font-size=\"12\">E₂</text>\n\n<rect x=\"740\" y=\"90\" width=\"150\" height=\"40\" fill=\"#1e293b\" rx=\"4\"/>\n<text x=\"750\" y=\"105\" fill=\"#f8fafc\" font-size=\"11\">1. Increase in NCO...</text>\n\n<rect x=\"80\" y=\"400\" width=\"130\" height=\"40\" fill=\"#1e293b\" rx=\"4\"/>\n<text x=\"90\" y=\"415\" fill=\"#f8fafc\" font-size=\"11\">2. ...increases demand</text>\n<text x=\"90\" y=\"430\" fill=\"#f8fafc\" font-size=\"11\">for loanable funds...</text>\n\n<rect x=\"20\" y=\"190\" width=\"100\" height=\"40\" fill=\"#1e293b\" rx=\"4\"/>\n<text x=\"40\" y=\"205\" fill=\"#f8fafc\" font-size=\"11\">3. ...which</text>\n<text x=\"40\" y=\"220\" fill=\"#f8fafc\" font-size=\"11\">increases r.</text>\n\n<rect x=\"735\" y=\"380\" width=\"170\" height=\"40\" fill=\"#1e293b\" rx=\"4\"/>\n<text x=\"750\" y=\"395\" fill=\"#f8fafc\" font-size=\"11\">4. Increase in NCO</text>\n<text x=\"750\" y=\"410\" fill=\"#f8fafc\" font-size=\"11\">increases supply of pesos</text>\n\n<rect x=\"410\" y=\"470\" width=\"115\" height=\"40\" fill=\"#1e293b\" rx=\"4\"/>\n<text x=\"420\" y=\"485\" fill=\"#f8fafc\" font-size=\"11\">5. ...which causes</text>\n<text x=\"420\" y=\"500\" fill=\"#f8fafc\" font-size=\"11\">peso to depreciate.</text>\n</svg>"
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
