# TM05: Siklus, Asersi Manajemen, dan Gambaran Proses Audit

**Sumber utama:** Arens dkk., Ch.4, pp.99–117. **Standar:** ISA 315 (Revised 2019) (SA 315), definisi dan kategori asersi.

**Setelah TM ini kamu bisa:**
1. Menjelaskan pendekatan siklus.
2. Menyebut 12 asersi manajemen.
3. **Menentukan asersi yang dilanggar suatu salah saji.**
4. Menentukan asersi yang relevan.
5. Menggambarkan tahapan proses audit.
---

## 0. Fondasi: asersi itu apa, dan kenapa auditor memerlukannya

**Intinya:** asersi adalah **klaim manajemen** tentang pos-pos dalam laporan keuangan, tersurat maupun tersirat. `(ARENS p.104)`

> **Kabar baik.** Daftar asersi di buku sama persis dengan standar yang berlaku (ISA 315 Revised 2019), jadi tidak ada versi lama yang perlu dibedakan.

Ambil contoh buku: neraca Hillsburg menampilkan kas 827.568. Angka itu sebenarnya membawa beberapa klaim sekaligus, yaitu bahwa kas itu **ada**, **tercatat lengkap**, **milik perusahaan**, dan (kecuali diungkapkan lain) **tidak dibatasi penggunaannya**. `(ARENS p.104)`

**Kenapa auditor memecah laporan menjadi asersi?** Ingat definisi auditing di TM01: auditor menilai kesesuaian antara asersi dan kriteria yang ditetapkan. `(ARENS pp.3, 104)` ISA 315 menjelaskan bahwa auditor memakai asersi untuk **mempertimbangkan jenis-jenis salah saji yang mungkin terjadi**. `(ISA315 para. 12(a))` Dengan kata lain, asersi memecah satu pertanyaan besar ("apakah laporan ini wajar?") menjadi pertanyaan kecil yang bisa diuji dengan bukti, misalnya:

- Apakah penjualan ini benar-benar terjadi?
- Apakah semua utang sudah dicatat?
- Apakah persediaan ini milik perusahaan?

*(Penjelasan ini uraian penulis, berdasarkan ISA 315 para. 12(a).)*

**Siklus** adalah cara membagi pekerjaan itu: akun-akun yang saling terkait diaudit bersama dalam satu segmen. `(ARENS pp.99–100)`

**Rantai yang harus kamu kuasai:**

1. Klaim manajemen (asersi)
2. Apa yang bisa salah (salah saji potensial)
3. Bukti apa yang bisa membuktikan atau membantah
4. Kesimpulan per asersi
5. Opini atas laporan secara keseluruhan (TM06)

### Kesalahpahaman umum

| Anggapan yang keliru | Yang benar | Sumber |
|---|---|---|
| "Asersi dibuat oleh auditor." | Asersi adalah representasi **manajemen**. Auditor yang mengujinya. | ARENS p.104; ISA315 para. 12(a) |
| "Occurrence dan existence sama saja." | Keduanya soal lebih saji, tetapi occurrence untuk transaksi **selama periode** dan existence untuk saldo **pada satu titik waktu**. | ARENS p.111 |
| "Kalau daftar persediaan cocok dengan buku besar, persediaannya pasti ada." | Pencocokan itu **tidak** membuktikan keberadaan. Bukti keberadaan diperoleh antara lain dengan mengamati perhitungan fisik. | ARENS p.108 |
| "Barang yang ada di gudang pasti milik perusahaan." | Barang bisa ada tetapi bukan milik, misalnya barang konsinyasi. Itu asersi rights and obligations. | ARENS pp.108–112 |
| "Semua asersi sama pentingnya untuk setiap akun." | Auditor menentukan **asersi yang relevan**, yaitu yang punya risiko salah saji material, dan mengumpulkan bukti lebih kuat di sana. | ARENS p.105; ISA315 para. 12(h) |

---

## 1. Mengapa audit dibagi menjadi siklus?

> **Intinya:** Audit dibagi per siklus, dan kas menghubungkan hampir semua siklus.

Laporan keuangan terlalu besar untuk diaudit sekaligus. Auditor membaginya menjadi segmen supaya lebih mudah dikelola dan dibagi ke anggota tim. Cara yang umum adalah **pendekatan siklus**: golongan transaksi dan saldo yang berkaitan erat dikelompokkan dalam satu segmen. `(ARENS pp.99–100)`

Contohnya, penjualan, retur penjualan, penerimaan kas, dan penghapusan piutang semuanya menambah atau mengurangi **piutang usaha**, jadi keempatnya masuk satu siklus.

| Siklus | Akun utama |
|---|---|
| **Pendapatan dan penagihan** | Kas, piutang, penyisihan piutang, penjualan, retur, beban piutang tak tertagih |
| **Pembelian dan pembayaran** | Kas, persediaan, aset tetap, utang usaha, berbagai beban operasional |
| **SDM dan penggajian** | Kas, gaji yang masih harus dibayar, beban gaji |
| **Persediaan dan distribusi** | Persediaan, harga pokok penjualan |
| **Perolehan dan pelunasan modal** | Kas, wesel bayar, bunga, modal saham, laba ditahan, dividen |

`(ARENS pp.100–101, Table 4-3)`

**Hal yang perlu diingat:**
- **Kas** menghubungkan hampir semua siklus. `(ARENS p.101)`
- Siklus modal dipisah dari siklus pembelian karena transaksinya untuk **pendanaan**, dan **jumlah transaksinya sedikit, tetapi nilai masing-masing sangat material**. `(ARENS pp.101–102)`
- Siklus persediaan terkait dengan **semua** siklus lain, terutama di perusahaan manufaktur. `(ARENS p.102)`
- Selain pengendalian per transaksi, ada **entity-level controls** yang berlaku untuk banyak siklus sekaligus. Kalau CFO bisa mengabaikan pengendalian dan mencatat transaksi fiktif, salah sajinya bisa muncul di banyak siklus. `(ARENS pp.102–103)`

### Contoh: transaksi membentuk saldo

Saldo akhir piutang Hillsburg (dalam ribuan): `(ARENS p.103, Figure 4-4)`

| | Jumlah |
|---|---:|
| Saldo awal | 17.521 |
| + Penjualan kredit | 144.328 |
| − Penerimaan kas | (137.087) |
| − Retur dan potongan penjualan | (1.242) |
| − Penghapusan piutang | (3.323) |
| **Saldo akhir** | **20.197** |

Kalau saldo awal sudah diaudit dan keempat golongan transaksi pasti benar, saldo akhirnya pasti benar. Tapi keyakinan penuh atas setiap transaksi hampir tidak mungkin diperoleh. Karena itu auditor biasanya **menggabungkan** keyakinan dari pengujian transaksi dan pengujian saldo akhir.

## 2. Apa itu asersi manajemen?

> **Intinya:** Asersi adalah klaim manajemen di balik setiap angka.

Asersi adalah representasi manajemen, tersurat maupun tersirat, tentang **pengakuan, pengukuran, penyajian, dan pengungkapan** pos-pos laporan keuangan. `(ARENS p.104; ISA315 para. 12(a))`

Contoh kas 827.568 di Fondasi menunjukkan hal ini: satu angka di neraca membawa beberapa klaim sekaligus. `(ARENS p.104)`

Asersi adalah alat auditor untuk bertanya **"apa yang bisa salah?"** pada setiap angka. Ini sejalan dengan definisi auditing di TM01: membandingkan informasi dengan kriteria yang ditetapkan. `(ARENS p.104)`

## 3. Dua belas asersi

> **Intinya:** Enam asersi untuk transaksi selama periode, enam untuk saldo di akhir periode.

**Asersi untuk golongan transaksi dan peristiwa selama periode**

| Asersi | Pertanyaan auditor |
|---|---|
| **Occurrence** (keterjadian) | Benar-benar terjadi dan milik entitas? |
| **Completeness** (kelengkapan) | Semua sudah dicatat? |
| **Accuracy** (akurasi) | Jumlahnya dicatat benar? |
| **Cutoff** (pisah batas) | Dicatat di periode yang benar? |
| **Classification** (klasifikasi) | Di akun yang tepat? |
| **Presentation** (penyajian) | Diagregasi dan dijelaskan dengan jelas? Pengungkapan dapat dipahami? |

**Asersi untuk saldo akun pada akhir periode**

| Asersi | Pertanyaan auditor |
|---|---|
| **Existence** (keberadaan) | Benar-benar ada? |
| **Rights and obligations** (hak dan kewajiban) | Aset milik entitas? Liabilitas kewajiban entitas? |
| **Completeness** (kelengkapan) | Semua sudah dicatat? |
| **Accuracy, valuation, and allocation** | Jumlah, nilai, dan alokasinya tepat? |
| **Classification** (klasifikasi) | Di akun yang tepat? |
| **Presentation** (penyajian) | Diagregasi dan dijelaskan dengan jelas? Pengungkapan dapat dipahami? |

`(ARENS p.105, Table 4-4; ISA315 para. A190)`

> **Versi lama vs versi berlaku.** Banyak modul dan ringkasan lama di internet membagi asersi menjadi **tiga** kategori: transaksi, saldo, serta **penyajian dan pengungkapan**. Itu model SA 315 versi lama (SPAP 2013). Standar yang berlaku di Indonesia adalah **SA 315 (Revisi)** dari IAPI, yang mengadopsi **ISA 315 (Revised 2019)**. `(IAPI, halaman SA 315 Revisi)` Model yang berlaku memakai **dua** kategori seperti dua tabel di atas. Pengungkapan tidak lagi menjadi kategori ketiga: setiap asersi sudah mencakup pengungkapan terkaitnya (misalnya completeness berarti transaksi **dan** pengungkapannya sudah lengkap), dan ada asersi presentation di kedua kategori. `(ISA315 para. A190)` Kalau di ujian kamu menjawab dengan tiga kategori, sebutkan bahwa itu versi lama.

Tiga asersi ada di kedua tabel: **completeness, classification, dan presentation**. Yang khas transaksi adalah **occurrence dan cutoff**. Yang khas saldo adalah **existence dan rights and obligations**. **Accuracy** di kolom saldo diperluas menjadi **accuracy, valuation, and allocation**.

### Contoh asersi untuk penjualan (transaksi)

| Asersi | Tujuan audit untuk penjualan Hillsburg | Contoh salah saji |
|---|---|---|
| Occurrence | Semua penjualan tercatat adalah pengiriman ke pelanggan nyata | Penjualan fiktif; pendapatan diakui terlalu dini |
| Completeness | Semua penjualan yang terjadi sudah dicatat | Penjualan tidak dicatat (misalnya untuk menghindari pajak) |
| Accuracy | Jumlah sesuai barang yang dikirim dan ditagih dengan benar | Harga salah; kuantitas ditagih ≠ kuantitas dikirim; salah hitung |
| Cutoff | Dicatat pada tanggal yang benar | Barang dikirim Januari tetapi dicatat Desember |
| Classification | Diklasifikasikan dengan benar | Penjualan tunai dicatat kredit; penjualan aset tetap dicatat sebagai pendapatan |
| Presentation | Kebijakan pengakuan pendapatan dijelaskan akurat dan dapat dipahami | Pengungkapan segmen tidak jelas |

`(ARENS pp.106–108, Figure 4-5)`

**Occurrence penjualan biasanya asersi yang paling relevan**, karena fraud pengakuan pendapatan adalah jenis fraud pelaporan keuangan yang paling umum. `(ARENS p.106)`

### Contoh asersi untuk persediaan (saldo)

| Asersi | Tujuan audit untuk persediaan Hillsburg | Cara menguji (contoh buku) |
|---|---|---|
| Existence | Semua item benar-benar ada pada tanggal neraca | Mengamati perhitungan fisik. Mencocokkan total daftar persediaan dengan neraca saldo **belum** membuktikan keberadaan |
| Rights | Hillsburg memiliki hak legal; tidak termasuk barang konsinyasi dan barang yang sudah ditagih ke pelanggan | Menelaah kontrak dengan pemasok dan pelanggan; bertanya soal barang konsinyasi |
| Completeness | Termasuk barang di gudang, dalam perjalanan, dan di lokasi luar | |
| Accuracy, valuation, allocation | Dinilai pada biaya, diturunkan ke nilai realisasi neto bila lebih rendah; penyesuaian di periode dan akun yang benar | Menilai kecukupan penghapusan persediaan usang |
| Classification | Dipisah menjadi bahan baku, barang dalam proses, dan barang jadi; aset lancar | |
| Presentation | Persediaan yang dijaminkan diungkapkan; kebijakan akuntansi jelas | |

`(ARENS pp.108–111, Figure 4-6)`

## 4. Cara cepat menentukan asersi yang dilanggar

> **Intinya:** Lebih saji: occurrence/existence. Kurang saji: completeness. Bukan milik: rights. Nilai salah: valuation. Periode salah: cutoff. Akun salah: classification. Pengungkapan: presentation.

Buku mengajarkan logika berikut lewat dialog di audit Hillsburg: `(ARENS pp.111–112)`

| Jenis salah saji | Asersi | Contoh |
|---|---|---|
| Mencatat sesuatu yang **tidak terjadi** atau **tidak ada** (lebih saji) | **Occurrence** (transaksi) atau **existence** (saldo) | Penjualan fiktif; persediaan terhitung dua kali |
| **Tidak mencatat** sesuatu yang seharusnya dicatat (kurang saji) | **Completeness** | Utang karena gugatan hukum tidak dicatat; tagihan listrik Desember tidak dicatat |
| Barangnya ada tapi **bukan milik** entitas | **Rights and obligations** | Barang konsinyasi dari pemasok ikut dihitung sebagai persediaan |
| Kuantitas benar tapi **nilainya** salah | **Valuation** | Persediaan usang tidak diturunkan ke nilai realisasi neto |
| Benar dicatat tapi di **periode** yang salah | **Cutoff** | Penjualan Januari dicatat Desember |
| Benar dicatat tapi di **akun** yang salah | **Classification** | Hasil penjualan aset tetap dicatat sebagai penjualan |
| Angka benar tapi **pengungkapan** tidak jelas atau tidak lengkap | **Presentation** | Jaminan atas persediaan tidak diungkapkan |

**Occurrence atau existence?** Keduanya soal **lebih saji**. Occurrence untuk pos yang **terjadi selama periode** (pendapatan, beban). Existence untuk pos yang ada **pada suatu titik waktu** (aset, liabilitas pada tanggal neraca). `(ARENS p.111)`

> **Jebakan ujian.** Satu salah saji bisa melanggar lebih dari satu asersi. Contoh buku: penjualan dicatat Desember padahal barangnya baru dikirim Januari. Pada transaksi penjualan, ini salah saji **cutoff**. Pada saldo akhir tahun, **piutang lebih saji** (asersi existence piutang, karena piutang itu belum ada) dan **persediaan kurang saji** (asersi completeness persediaan, karena barangnya masih ada di gudang tetapi tidak tercatat). `(ARENS p.107)`

## 5. Asersi yang relevan

> **Intinya:** Fokuskan bukti pada asersi yang berisiko salah saji material, dan tentukan sebelum melihat pengendalian.

Tidak semua asersi sama berisikonya. Menurut ISA 315, **asersi yang relevan** adalah asersi yang memiliki risiko salah saji material yang teridentifikasi, dan penentuannya dilakukan **sebelum** mempertimbangkan pengendalian. Artinya, ukurannya adalah risiko bawaan (inherent risk): seberapa rawan pos itu salah saji seandainya tidak ada pengendalian sama sekali. Seberapa baik pengendalian klien baru dinilai sesudahnya. `(ISA315 para. 12(h))`

**Faktor penentu:** bias, insentif, dan tekanan manajemen; kompleksitas atau subjektivitas asersi; risiko fraud dan error. `(ARENS p.105)`

| Akun | Asersi relevan | Alasan |
|---|---|---|
| Kas | Existence, cutoff | Kas rentan fraud dan error; banyak transaksi dalam perjalanan di akhir periode. Valuation jarang penting karena hampir tidak ada pertimbangan dalam menilai kas |
| Persediaan | Valuation | Butuh pertimbangan besar untuk menentukan nilai realisasi neto |
| Penjualan | Occurrence | Fraud pengakuan pendapatan paling umum |

`(ARENS pp.105–106)`

Respons auditor: kumpulkan **bukti yang lebih meyakinkan** untuk asersi yang relevan.

<!-- pendalaman:start judul="6. Gambaran proses audit" -->
## 6. Gambaran proses audit

*Sumber: ARENS pp.112–117, Figure 4-7*

> **Intinya:** Ini peta proses audit dari penerimaan klien sampai laporan. Rinciannya dibahas setelah UTS.
| Tahap | Kegiatan utama |
|---|---|
| 1. Penerimaan klien | Menilai risiko perikatan, ancaman independensi, kompetensi; menerbitkan surat perikatan |
| 2. Perencanaan | Memahami entitas, lingkungannya, dan pengendalian internalnya; menetapkan materialitas |
| 3. Menilai risiko salah saji material | Di tingkat laporan keuangan (pervasif) dan tingkat asersi (risiko inheren dan risiko pengendalian) |
| 4. Menyusun respons | Strategi audit keseluruhan; pendekatan per siklus; rencana audit |
| 5. Melaksanakan respons | Uji pengendalian (jika mengandalkannya); prosedur analitis substantif; uji rinci |
| 6. Kesimpulan | Mengevaluasi hasil dan kecukupan bukti; menentukan jenis opini |
| 7. Pelaporan | Menerbitkan laporan auditor setelah TCWG menyetujui laporan keuangan |

**Sepanjang audit:** etika dan pengendalian mutu, skeptisisme dan pertimbangan profesional, komunikasi dengan manajemen dan TCWG, dokumentasi.

**Respons atas risiko tingkat laporan keuangan:**

- menekankan skeptisisme kepada tim,
- menugaskan staf yang lebih berpengalaman atau pakar,
- supervisi lebih ketat,
- **unsur tidak terduga** dalam prosedur (penting bila risiko fraud tinggi),
- perubahan umum pada sifat, waktu, atau luas prosedur.
 `(ARENS p.115)`

**Dua pendekatan per asersi:**

| Pendekatan | Isi |
|---|---|
| Combined approach | Mengandalkan pengendalian: uji pengendalian **dan** uji substantif |
| Substantive approach | Tidak mengandalkan pengendalian: **hanya** uji substantif |

`(ARENS p.115)`

**Jenis pengujian:** `(ARENS p.116)`
- **Uji pengendalian:** menguji efektivitas pengendalian. Contoh: membandingkan sampel faktur dengan dokumen pengiriman dan pesanan untuk menguji pengendalian pencocokan otomatis, yang terkait asersi occurrence dan accuracy penjualan.
- **Uji rinci:** mencari salah saji moneter dalam rincian transaksi dan saldo. Contoh: membandingkan harga di faktur dengan daftar harga yang disetujui (accuracy penjualan); konfirmasi tertulis langsung kepada pelanggan (piutang).
- **Prosedur analitis substantif:** menilai kewajaran dengan hubungan yang masuk akal antardata. Tingkat keyakinannya berbeda-beda: memprediksi pendapatan sewa dari tarif, jumlah unit, dan tingkat kekosongan lebih meyakinkan daripada sekadar membandingkan persentase laba kotor.

---
<!-- pendalaman:end -->

## Kasus latihan

**Kasus 1: Tentukan asersi yang paling terkait.** PT Maju Jaya, 31 Desember 20X1:
1. Faktur penjualan tanggal 30 Desember untuk barang yang baru dikirim 3 Januari dicatat sebagai penjualan 20X1.
2. Mesin yang disewa (sewa jangka pendek) dicatat sebagai aset tetap milik perusahaan.
3. Tagihan listrik Desember yang diterima 10 Januari tidak dicatat sebagai utang per 31 Desember.
4. Persediaan kain yang sudah tidak laku dicatat pada harga perolehan penuh.
5. Penjualan kepada pelanggan fiktif dicatat untuk mencapai target.
6. Pembelian perlengkapan kantor dicatat sebagai beban bahan baku.
7. Kas dalam catatan termasuk deposito yang dijaminkan ke bank, tetapi pembatasannya tidak diungkapkan.
8. Harga di faktur dikalikan kuantitas dengan salah.

*Pembahasan.* (1) Cutoff (transaksi penjualan); akibatnya piutang lebih saji. (2) Rights and obligations. (3) Completeness (utang dan beban). Karena terkait akhir periode, bisa juga dibahas sebagai cutoff beban. (4) Accuracy, valuation, and allocation. (5) Occurrence. (6) Classification. (7) Presentation. (8) Accuracy. `(ARENS pp.106–112)`

**Kasus 2: Hitung saldo.** Saldo awal piutang yang sudah diaudit 50.000; penjualan kredit 400.000; penerimaan kas dari pelanggan 380.000; retur penjualan 5.000; penghapusan piutang 3.000. Berapa saldo akhir yang seharusnya, dan golongan transaksi apa saja yang membentuknya?

*Pembahasan.* 50.000 + 400.000 − 380.000 − 5.000 − 3.000 = **62.000**. Empat golongan transaksi: penjualan, penerimaan kas, retur, dan penghapusan. Jika keempatnya diaudit dengan baik, auditor memperoleh sebagian keyakinan atas saldo akhir. Keyakinan itu biasanya dilengkapi dengan pengujian saldo akhir, misalnya konfirmasi. `(logika ARENS p.103)`

**Kasus 3 (Interpretasi): pilih asersi yang relevan.** Sebuah distributor elektronik memberi bonus kepada direksi berdasarkan laba. Produknya cepat usang karena model baru terus bermunculan. Untuk akun persediaan dan penjualan, asersi mana yang paling relevan?

*Pembahasan (Interpretasi).* Untuk **persediaan**: valuation, karena produk cepat usang sehingga penurunan ke nilai realisasi neto butuh pertimbangan besar, dan bonus berbasis laba memberi insentif untuk tidak menurunkannya. Untuk **penjualan**: occurrence (dan cutoff di akhir tahun), karena insentif bonus mendorong lebih saji pendapatan, sejalan dengan contoh buku. Menentukan asersi relevan tetap pertimbangan profesional dengan tiga faktor: bias atau insentif, kompleksitas atau subjektivitas, dan risiko fraud atau error. `(ARENS pp.105–106)`

---

## Uji pemahaman

Jawab dulu tanpa melihat catatan, dengan kata-katamu sendiri.

**1. Jelaskan apa itu asersi kepada teman yang belum belajar audit, dengan satu contoh angka dari neraca.**
*Contoh jawaban:* setiap angka di laporan keuangan adalah klaim dari manajemen. Kalau neraca menulis kas 827.568, manajemen sedang mengklaim bahwa uang sebesar itu ada, milik perusahaan, sudah dicatat semua, dan boleh dipakai. Auditor menguji klaim-klaim itu satu per satu dengan bukti. `(ARENS p.104)`
*Tanda belum paham:* menjelaskan asersi hanya dengan menyebut daftar dua belas namanya.

**2. Kenapa auditor tidak langsung saja menguji "apakah laporan keuangan wajar", tetapi repot memecahnya menjadi asersi?**
*Contoh jawaban:* karena salah saji bisa terjadi dengan cara yang berbeda-beda (mencatat yang tidak terjadi, lupa mencatat, salah nilai, salah periode, salah akun), dan setiap cara butuh bukti yang berbeda. ISA 315 menyebut asersi dipakai auditor untuk mempertimbangkan jenis-jenis salah saji yang mungkin terjadi. `(ISA315 para. 12(a); ARENS pp.106–112)`
*Tanda belum paham:* menjawab "karena standar mengharuskan".

**3. Buat contoh salah saji sendiri (bukan dari buku) untuk asersi existence, completeness, dan rights, lalu jelaskan kenapa ketiganya berbeda.**
*Contoh jawaban:* existence: piutang dari pelanggan yang sebenarnya tidak ada; completeness: tagihan listrik Desember yang belum dicatat sebagai utang; rights: mesin sewaan dicatat sebagai aset milik sendiri. Yang pertama mencatat sesuatu yang tidak ada (lebih saji), yang kedua tidak mencatat sesuatu yang ada (kurang saji), yang ketiga mencatat sesuatu yang ada tetapi bukan milik. `(logika ARENS pp.111–112)`
*Tanda belum paham:* ketiga contohnya sebenarnya salah saji jenis yang sama.

**4. Satu penjualan dicatat 31 Desember padahal barangnya dikirim 3 Januari. Asersi apa saja yang terdampak, dan kenapa lebih dari satu?**
*Contoh jawaban:* pada transaksi penjualan, ini salah saji cutoff (periode salah). Pada saldo akhir tahun, piutang menjadi lebih saji dan persediaan kurang saji, jadi saldo akhir kedua akun ikut salah. Satu kejadian menyentuh transaksi dan saldo sekaligus. `(ARENS p.107)`
*Tanda belum paham:* hanya menyebut "cutoff" tanpa dampaknya pada saldo.

---

## Exam toolkit

**Kerangka jawaban "Tentukan asersi yang dilanggar"**
1. Tentukan: transaksi (selama periode) atau saldo (akhir periode)?
2. Tentukan arah: lebih saji, kurang saji, nilainya salah, atau jumlahnya tidak salah tapi tempat, waktu, atau pengungkapannya yang salah?
3. Petakan: lebih saji → occurrence/existence; kurang saji → completeness; bukan milik → rights; nilai salah → valuation; periode salah → cutoff; akun salah → classification; pengungkapan → presentation.
4. Sebut dampak lanjutannya pada akun lain bila ada.

**Pasangan yang sering tertukar**

| Pasangan | Pembeda |
|---|---|
| Occurrence vs existence | Transaksi selama periode vs saldo pada satu titik waktu; keduanya lebih saji |
| Existence vs rights | Ada vs milik |
| Accuracy vs valuation | Jumlah tercatat benar vs nilai sesuai jumlah yang dapat direalisasi |
| Cutoff vs occurrence | Terjadi tetapi di periode lain vs tidak terjadi sama sekali |
| Uji pengendalian vs uji substantif | Menguji efektivitas pengendalian vs mencari salah saji moneter |
| Combined vs substantive approach | Mengandalkan pengendalian vs tidak |
