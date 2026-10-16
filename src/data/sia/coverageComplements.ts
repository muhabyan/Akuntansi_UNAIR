import type { ContentBlock } from '../../types';
import { sub, p, table, example, check, extra, note } from './uasBlocks';

// Teaching additions are inserted beside the related concepts, rather than collected at the end.
// Source-point decisions and page references live in docs/sia-rmk-coverage-20261017.md.
export const SIA_COVERAGE: Record<number, Record<string, ContentBlock[]>> = {
  8: {
    planning: [
      sub('Tujuan produksi, pemicu, dan hubungan antarsiklus'),
      p('Purchases menyediakan material, conversion mengolahnya, lalu sales menyerahkan produk. Persediaan yang dipakai bersama harus konsisten agar pembelian tidak dihitung lagi sebagai pemakaian dan produk selesai tidak langsung dianggap terjual. Tujuan conversion mencakup ketersediaan produk, mutu, efisiensi sumber daya, serta informasi biaya yang andal. Produksi dapat dipicu pengisian stok minimum atau kebutuhan pesanan sesuai kebijakan; contoh Sunset memakai kebutuhan barang jadi. Otorisasi menyetujui rencana, belum membuktikan penyelesaian.'),
      p('**Labor plan** menyimpan rencana operasi atau waktu standar; **labor operations** mencatat pekerjaan aktual. Bandingkan keduanya untuk menilai produktivitas dan telusuri selisih sebelum menyimpulkan pemborosan. Standar pada BOM, labor plan, dan kategori produk dibedakan dari kuantitas, jam, tarif, serta biaya aktual setiap pekerjaan. Model boleh disesuaikan jika perusahaan tidak memakai labor plan formal. Richardson Ch.9 pp.352–353, 358–362.'),
    ],
    process: [
      sub('Membaca data objects, batch, dan subprocess'),
      p('Pada model dasar satu pool mewakili proses internal; lane membedakan Inventory Manager, Conversion Employees dan pemeriksa mutu sesuai organisasi. **Data objects** memperlihatkan otorisasi, material issue dan catatan pekerjaan yang dibuat atau digunakan aktivitas. Pada batch berulang, collapsed subprocess merangkum pekerjaan; expanded subprocess menunjukkan persiapan, bahan, pengerjaan dan inspeksi. Gateway menguji apakah batch maupun seluruh kuantitas telah selesai. Sequence flow tetap berada dalam pool; loop tidak berarti setiap barang cacat boleh diterima. Richardson pp.353–357.'),
    ],
    data: [
      extra('Pengembangan model dan pemeriksaan database produksi',
        p('Model conversion dasar memakai agent internal: Employees berperan sebagai pemberi otorisasi, penerbit material dan pekerja; external agent tidak wajib ditambahkan untuk aktivitas internal. Satu authorization dapat mempunyai banyak material issues dan labor operations; minimum keterlibatannya mengikuti status dan aturan bisnis. Hubungan produk–material adalah many-to-many. Type images seperti BOM dan Product Category menyimpan standar/kategori, dan BOM dapat diperinci menjadi kelas bila atribut serta kebijakannya memerlukan itu.'),
        p('Jika perusahaan perlu melacak pemakaian mesin, tambahkan **Equipment** sebagai resource serta **Equipment Operations** sebagai event dengan waktu dan dasar biaya. Hubungan konsumsi material/tenaga kerja dengan hasil produksi membantu menelusuri pertukaran sumber daya; jangan memaksakan pola penjualan–penerimaan kas pada konversi internal. WIP yang dihitung dari biaya pekerjaan belum selesai tetap dapat menjadi saldo akuntansi walaupun tidak menjadi kelas resource tersendiri.'),
        p('Saat implementasi, pilih PK, tipe data dan FK; enforce referential integrity, lalu simpan kuantitas/biaya pada event atau baris penghubung yang tepat. Query manajemen dapat menjumlah kebutuhan material menurut BOM, membandingkan standar dengan aktual, menghitung biaya per job, dan memisahkan job selesai dari WIP. Uji satu job sampai dokumen asal: FK valid saja belum membuktikan kuantitas atau tarifnya benar. Richardson pp.358–365.'),
      ),
    ],
  },
  9: {
    project: [
      sub('Pilihan proyek dalam buku dan keluaran yang diminta'),
      table('Tiga pilihan pada Ch.10 p.378', ['Proyek buku', 'Konteks', 'Pekerjaan utama'], [
        ['Y Not Flowers', 'Distributor bunga dengan beberapa toko.', 'BPMN, UML, pindah data Excel ke Access, laporan keuangan dan temuan.'],
        ['Z Cheddr', 'Toko cheese/wine dengan penjualan daring.', 'Dokumentasikan proses, rancang data, implementasikan database, susun laporan dan temuan.'],
        ['Y Not Flowers Boston · Small Business Accounting', 'Simulasi sistem akuntansi satu toko.', 'Masukkan transaksi dan tinjau informasi ringkasan; tugas terpisah dari dua proyek desain lengkap.'],
      ]),
      p('Kasus angka pada halaman ini adalah latihan buatan untuk memahami integrasi. Buku memberi pilihan proyek berbeda tingkat kompleksitas; jangan menganggap setiap proyek memerlukan semua tabel atau mempunyai angka yang sama. Keluaran yang diminta dosen menentukan lingkup.'),
      sub('Rencana proyek dan penemuan kebutuhan'),
      p('Mulai dari **problem statement**, hasil yang diharapkan, tugas, penanggung jawab, tenggat dan ketergantungan. Urutan Exhibit 10.1 ialah project plan → business requirements → activity models → structure diagrams → import data → queries → report. Gantt membantu memantau jadwal; review berkala memperbarui rencana saat kebutuhan atau hambatan berubah. Ini urutan kerja yang bisa diiterasi, bukan alasan menunda validasi sampai laporan akhir.'),
      p('Fact finding menanyakan siapa, apa, kapan, di mana, mengapa dan bagaimana. Wawancarai managers/employees, periksa Sales Order, Invoice, Purchase Order, Timecard dan bukti kas, kemudian validasi kebutuhan bersama pengguna. Tentukan pengguna, periode dan tingkat rincian laporan sejak awal agar atribut yang dibutuhkan benar-benar dikumpulkan. Richardson pp.378–379.'),
      extra('Dari context diagram ke BPMN yang divalidasi',
        p('Dalam context diagram BPMN buku, focal organization ditempatkan sebagai pool utama dan Customers, Suppliers, Bank serta Payroll Service sebagai pool luar. Message flows menunjukkan pesanan, kiriman, kas atau informasi yang dipertukarkan. Pesan masuk harus memperoleh respons proses; pesan keluar harus memiliki aktivitas sumber. Interaksi ini membantu mengenali proses sales, purchases, payroll dan kas sebelum menggambar rincian internal.'),
        p('Mulai dari basic process flow, lalu tambahkan lane pelaksana dan data objects. Pada contoh sales, Customer Service mencatat pesanan, Shipping/Receiving menyiapkan barang dan Accounting mencatat pembayaran. Jika barang tidak tersedia, error boundary event dapat mengalihkan proses ke pembatalan, pembaruan status serta pemberitahuan pelanggan. Pilih notasi exception sesuai pemicu; gateway tidak identik dengan boundary event. Validasi urutan, tanggung jawab, dokumen dan pengecualian dengan stakeholders.'),
        p('Business rules menentukan otorisasi, batas akses dan kondisi transaksi. SoD memisahkan otorisasi, custody dan pencatatan. Evaluasi value-added versus cost-added activities: kurangi perpindahan, waktu tunggu dan koreksi berulang, tetapi pertahankan kontrol yang dibutuhkan. Approval yang tidak menambah nilai produk masih mungkin diperlukan untuk mengelola risiko. Richardson pp.379–382.'),
      ),
    ],
    implementation: [
      sub('Implementasi Access dan pemeriksaan hasil impor'),
      p('Setiap class menjadi tabel; atribut menjadi field dengan tipe/ukuran sesuai isinya. PK sisi one ditempatkan sebagai FK sisi many, sedangkan many-to-many memakai linking table. Sebelum impor Excel, periksa nama field, format tanggal, ID, nilai kosong dan duplikasi. Setelah impor, uji PK unik, FK valid, jumlah record dan total nilai; aktifkan referential integrity pada relationships Access. Diagram UML menjadi cetak biru, bukan sekadar lampiran laporan. Richardson pp.383–384.'),
    ],
    reporting: [
      sub('Laporan akhir: hasil query harus menjawab kebutuhan awal'),
      p('Transaction queries memilih field, join, menghitung dan mengelompokkan pada grain yang tepat. Sales, inventory, purchases serta timecards/payroll mendukung laba rugi sesuai pengakuan dan pembebanan; saldo resources dan alokasi pembayaran mendukung neraca; cash receipts, cash disbursements serta payroll mendukung arus kas. Query per pelanggan, produk atau toko mendukung penilaian kinerja. Jangan menjumlah pembelian sebagai HPP tanpa memperhitungkan persediaan.'),
      p('Rekonsiliasi jumlah/nilai query ke dokumen, peristiwa dan saldo yang relevan. **Final report** menjelaskan masalah, model proses/data, implementasi, hasil pengujian, temuan kontrol serta rekomendasi berbukti. Perubahan kebutuhan harus tercermin pada BPMN, UML, database dan report sekaligus. Contoh pemeriksaan: bila laporan meminta penjualan per toko, setiap transaksi harus memiliki hubungan toko yang dapat ditelusuri, bukan toko yang baru ditebak pada akhir proyek. Richardson pp.383–385.'),
    ],
  },
  10: {
    governance: [
      sub('Corporate governance, kode etik, dan akuntabilitas SOX'),
      p('**Corporate governance** mengarahkan dan mengawasi organisasi melalui kebijakan, tanggung jawab serta mekanisme internal/eksternal untuk kepentingan stakeholders. Code of ethics menjelaskan perilaku yang diharapkan dan konflik kepentingan. Tone at the top perlu tampak dalam keputusan dan penanganan pelanggaran; kode etik tertulis tidak cukup bila pimpinan memerintahkan override.'),
      table('SOX dalam konteks pembahasan buku', ['Pokok', 'Arti dan tanggung jawab'], [
        ['Latar belakang', 'Respons Amerika Serikat terhadap skandal pelaporan; memperkuat akuntabilitas, independensi auditor dan perhatian pada ICFR.'],
        ['Section 302', 'Sertifikasi laporan oleh pimpinan sesuai cakupan ketentuannya.'],
        ['Section 404', 'Tanggung jawab/evaluasi pengendalian internal pelaporan keuangan; persyaratan atestasi bergantung cakupan entitas.'],
        ['Section 406', 'Kode etik bagi senior financial officers dalam konteks pengungkapan SOX.'],
        ['Management dan Audit Committee', 'Management merancang, menjalankan dan mengevaluasi kontrol; Audit Committee mengawasi.'],
        ['PCAOB dan auditor', 'PCAOB mengawasi firma audit dalam cakupannya; auditor mengevaluasi bukti dengan fokus berbasis risiko.'],
      ]),
      note('Konteks yurisdiksi', 'Ringkasan SOX/PCAOB di sini menjelaskan materi historis buku Ch.11 pp.388–391, termasuk Exhibit 11.1. Jangan memperlakukannya sebagai daftar kewajiban yang otomatis berlaku bagi setiap perusahaan Indonesia.'),
    ],
    controls: [
      sub('Kontrol input, pemrosesan, dan output'),
      p('**Segregation of duties** memisahkan authorization, custody of assets dan recordkeeping. Orang yang menyetujui pembayaran tidak sekaligus menguasai kas serta mencatat seluruh transaksi tanpa review. Bila jumlah staf terbatas, supervision dan independent review dapat mengompensasi sebagian risiko; nilai ketelitian, frekuensi dan bukti review, karena kolusi serta override masih mungkin.'),
      table('Telusuri satu batch invoice', ['Tahap', 'Kontrol', 'Apa yang diperiksa'], [
        ['Input', 'Validity, completeness, range/limit check.', 'Vendor/akun valid, field wajib terisi, nilai berada pada batas yang disetujui.'],
        ['Processing', 'Sequence check, record count, control total dan hash total.', 'Nomor hilang/ganda, jumlah record serta total sebelum/sesudah pemrosesan dibandingkan.'],
        ['Output', 'Review, rekonsiliasi dan distribusi terbatas.', 'Laporan cocok dengan input/hasil sah dan hanya diterima pengguna berwenang.'],
      ]),
      p('**Hash total** dalam kontrol batch dapat menjumlah field nonmoneter seperti nomor pelanggan untuk mendeteksi perubahan kumpulan record; ini berbeda dari cryptographic hash SHA-256. Investigasi selisih diperlukan karena jumlah yang sama tidak menjamin isi identik. Audit trail merekam asal transaksi dan perubahan. ITGC mencakup lingkungan TI, akses, development/acquisition, change management dan operasi seperti patch, backup serta recovery. Contoh kontrol merupakan penerapan konsep Ch.11 pp.400–408.'),
    ],
    risk: [
      p('**Control risk** adalah risiko pengendalian gagal mencegah atau mendeteksi kesalahan yang relevan; **residual risk** mencakup risiko yang masih ada setelah respons. Keduanya tidak otomatis sama. Dalam cost-benefit analysis, bandingkan biaya kontrol dengan penurunan expected loss dan manfaat lain menggunakan asumsi peluang serta dampak yang jelas.'),
      example('Ilustrasi kelayakan kontrol', p('Asumsi satu jenis kerugian bernilai Rp100 juta, peluang tahunan turun dari 10% menjadi 2% karena kontrol. Expected loss turun dari Rp10 juta menjadi Rp2 juta: manfaat terukur Rp8 juta/tahun. Biaya kontrol Rp3 juta memberi selisih manfaat Rp5 juta dalam model sederhana ini. Ini bukan pengurangan skor ordinal dan belum memasukkan kolusi, ketidakpastian estimasi atau kewajiban yang harus dipenuhi.' )),
    ],
    frameworks: [
      extra('Kriteria informasi lintas versi dan hubungan antarframework',
        p('Tujuan COBIT ialah membantu penciptaan nilai dari informasi/teknologi melalui manfaat, risiko dan sumber daya. Governance mengevaluasi kebutuhan stakeholders, mengarahkan dan memantau; management merencanakan, membangun, menjalankan dan menilai sesuai arah itu. Domain COBIT 2019 EDM, APO, BAI, DSS dan MEA dirinci pada pelengkap berikut.'),
        p('Tujuh information criteria **effectiveness, efficiency, confidentiality, integrity, availability, compliance, reliability** berasal dari pembahasan COBIT generasi terdahulu. Daftar itu berguna untuk memahami kebutuhan informasi, tetapi jangan menyebutnya tujuh domain atau struktur khusus COBIT 2019. Versi framework harus disebut ketika membandingkan istilah.'),
        p('ITIL berfokus pada IT service management. Dalam keluarga ISO 27000, ISO 27001 memuat persyaratan sistem manajemen keamanan informasi dan ISO 27002 panduan kontrol. COSO berfokus pada internal control; ERM menghubungkan risiko dengan strategi/kinerja; COBIT pada governance/management TI. Pada ERP, integrasi perlu role-based access, review konflik SoD dan kontrol konfigurasi/perubahan supaya satu akun tidak menguasai pembuatan vendor sampai pembayaran. Ini perbandingan konsep dalam bab, bukan sertifikasi kepatuhan suatu perusahaan.'),
      ),
    ],
  },
  11: {
    threats: [
      p('**Information security** melindungi informasi dan sistem dari akses, perubahan serta gangguan yang tidak sah. Tujuannya mendukung confidentiality, integrity dan availability bagi pengguna berwenang, sehingga operasi, perlindungan aset dan data pelaporan SIA dapat diandalkan.'),
      extra('Istilah ancaman yang perlu dibedakan',
        table('Cara ancaman bekerja', ['Istilah', 'Ciri', 'Contoh dampak SIA'], [
          ['Virus / worm', 'Virus menginfeksi file/program; worm dapat menyebar sendiri melalui jaringan.', 'File transaksi rusak atau jaringan ERP terganggu.'],
          ['Trojan horse / spyware', 'Trojan tampak berguna namun menjalankan fungsi berbahaya; spyware mengumpulkan informasi diam-diam.', 'Program palsu mengambil kredensial staf pembayaran.'],
          ['Botnet / denial of service', 'Botnet ialah perangkat yang dikendalikan penyerang; DoS menghambat layanan pengguna sah.', 'Pemrosesan penjualan dan pembayaran tidak tersedia.'],
          ['Spoofing / social engineering', 'Pemalsuan identitas sumber dan manipulasi manusia dapat dipakai bersama.', 'Pelaku menyamar sebagai help desk atau pemasok untuk memperoleh akses.'],
        ]),
        p('Satu insiden dapat memadukan beberapa teknik. Identifikasi mekanisme serangan dan tujuan CIA yang terpengaruh sebelum memilih kontrol. Richardson Ch.12 pp.422–423.'),
      ),
    ],
    identity: [
      p('Pada **digital certificate**, Certificate Authority mengikat identitas dengan public key menurut proses penerbitannya. **Public-Key Infrastructure (PKI)** mencakup penerbitan, pemeliharaan dan pencabutan sertifikat serta pemeriksaan kepercayaan. Periksa identitas, masa berlaku dan status pencabutan; menemukan public key di email belum membuktikan pemiliknya. Hashing membantu mendeteksi perubahan dengan pembanding yang dipercaya, tetapi kolisi tetap mungkin secara matematis. Signature dan kunci perlu dikelola bersama kontrol proses. Richardson pp.424–426.'),
    ],
    prevention: [
      sub('Kebijakan penggunaan dan kontrol sepanjang SDLC'),
      p('Computer fraud melibatkan kesengajaan untuk menipu, menyembunyikan atau menyalahgunakan kepercayaan demi keuntungan; error biasa tidak otomatis fraud. Risiko dapat muncul pada requirements, design, development, implementation maupun maintenance. Code review, otorisasi perubahan, testing, documentation dan backup mencegah akses operasional berubah menjadi hak mengedit source code produksi tanpa pengawasan.'),
      p('**Acceptable Use Policy (AUP)** menjelaskan pemakaian TI yang diperbolehkan, larangan, tanggung jawab dan pelaporan insiden. Komunikasikan serta minta pengakuan pengguna sebelum akses diberikan; lengkapi dengan least privilege, MFA, review akses dan pencabutan akses saat tugas berakhir. Kebijakan tanpa penegakan atau log belum membuktikan pencegahan efektif. Richardson pp.428–432.'),
      sub('Siklus vulnerability assessment dan management'),
      p('Inventaris aset TI dan pemiliknya → identifikasi threat/vulnerability → nilai likelihood, business impact dan kritikalitas → prioritaskan respons → terapkan patch/perubahan terotorisasi → uji ulang dan pantau. Vulnerability dapat berupa konfigurasi buruk, software tertinggal, akses berlebihan atau prosedur pemulihan lemah. Risk response plan menetapkan pemilik, tenggat dan bukti penutupan; hasil scanner saja belum memastikan kelemahan sudah diperbaiki. Richardson pp.432–434.'),
      p('Management melakukan fraud risk assessment yang diperbarui ketika sistem atau ancaman berubah; Audit Committee mengawasi. Continuous monitoring atas log dan transaksi menyoroti exception untuk investigasi. Pelaporan cybersecurity risk management AICPA mencakup deskripsi program serta assurance atas kontrol sesuai kriteria/lingkup; itu berbeda dari sekadar daftar insiden. Trust Services Criteria mencakup **security, availability, processing integrity, confidentiality dan privacy**. Privacy membahas pemrosesan data pribadi, bukan hanya menutup akses. Richardson pp.426–427, 430–434.'),
    ],
    continuity: [
      p('**UPS** memberi daya sementara untuk menjaga operasi singkat atau shutdown terkontrol. Fault tolerance memakai komponen redundan agar satu kegagalan tidak langsung menghentikan layanan. RAID dapat mengatasi kegagalan drive sesuai konfigurasi, tetapi penghapusan salah atau ransomware tetap memerlukan backup terpisah. Saat memilih cloud provider, nilai rekam jejak/credibility, kontrol, keamanan, financial viability, SLA dan kemampuan pemulihannya. Richardson pp.434–436.'),
      extra('BCM life cycle dan privacy',
        p('Siklus BCM dimulai dari memahami organisasi dan risiko, business impact analysis, strategi continuity, pengembangan/implementasi rencana, lalu pengujian serta perbaikan. Catat orang, komunikasi, pemasok, prosedur manual sementara dan hubungan pemulihan TI dengan layanan bisnis. Latihan harus mengevaluasi transaksi selama gangguan, bukan hanya apakah server menyala.'),
        p('GDPR dibahas buku sebagai konteks perlindungan data pribadi. Poin belajar di sini ialah mengelola pengumpulan, akses, pemrosesan, penyimpanan/retensi dan penanganan insiden data secara bertanggung jawab. Kewajiban hukum perlu dinilai menurut yurisdiksi dan kegiatan entitas; paragraf ini tidak menentukan cakupan penerapan hukum untuk kasus tertentu. Richardson pp.432, 438–439.'),
      ),
    ],
    assurance: [
      p('**SOC 3** menyajikan laporan assurance untuk distribusi umum dalam bentuk lebih ringkas; SOC 2 menyediakan rincian sistem/kontrol sesuai pembatasan penggunaannya. Laporan AICPA/SOC perlu dibedakan menurut tujuan dan ruang lingkup. Type 1 menilai desain pada tanggal tertentu, Type 2 juga efektivitas operasi selama periode; jangan memperluas klasifikasi ini seolah seluruh jenis laporan identik. Periksa periode, hasil/pengecualian dan kontrol yang wajib dijalankan pengguna. Richardson pp.436–438.'),
    ],
  },
  12: {
    analysis: [
      sub('Warehouse, OLAP, DSS, dan management by exception'),
      p('Pelaporan mengubah data transaksi menjadi informasi untuk keputusan. **Internal reporting** mendukung planning, control dan evaluasi melalui budget variance, sales trends, inventory levels serta accounts receivable aging. **External reporting** menyampaikan informasi financial/nonfinancial kepada stakeholders sesuai kebutuhan pelaporan. Keduanya perlu populasi, periode, tingkat rincian dan tujuan pengguna yang jelas.'),
      p('Warehouse menggabungkan sumber internal seperti GL, inventory, sales dan purchases dengan sumber eksternal seperti kondisi ekonomi, industri serta pasar. Samakan kode, format, periode dan klasifikasi sebelum memuat histori. Warehouse yang terpisah membantu analisis tanpa membebani transaksi berjalan; **distributed computing** membagi penyimpanan/pemrosesan ke beberapa sistem, dengan kebutuhan integrasi dan kontrol yang tetap ada. Richardson Ch.14 pp.472–474.'),
      table('Dari data ke keputusan', ['Konsep', 'Pertanyaan dan contoh', 'Batas interpretasi'], [
        ['OLAP · Online Analytical Processing', 'Analisis penjualan menurut produk × toko × periode; ringkas, bandingkan, lalu drill down.', 'Utamanya analisis data terstruktur; tidak otomatis mengolah semua isi data lake.'],
        ['DSS · Decision Support System', 'Bandingkan alternatif kredit atau persediaan menggunakan data dan model analisis.', 'Mendukung judgment manajemen; rekomendasi bergantung asumsi dan kualitas data.'],
        ['Management by exception', 'Sorot overdue atau selisih anggaran yang melampaui toleransi.', 'Tentukan batas, pemilik tindak lanjut dan bukti penyelesaian; exception bukan otomatis fraud.'],
        ['Data refresh', 'Perbarui data sesuai kebutuhan dan tampilkan waktu/periode pemuatan.', 'Keputusan dapat keliru bila dashboard hari ini memakai populasi kemarin yang tidak lengkap.'],
      ]),
      sub('Business intelligence dan data mining'),
      p('Alur BI ialah **gather information → analyze patterns → make decisions**. Data dapat berasal dari sistem internal atau sumber luar; web crawler mengunjungi serta mengindeks isi web secara sistematis. Pilih sumber dan data yang relevan, periksa kualitasnya, cari pola, lalu terjemahkan temuan menjadi tindakan dengan pemilik serta ukuran hasil. Richardson pp.474–475.'),
      p('**Data mining** memakai teknik statistik/analitis untuk menemukan pola dalam kumpulan data besar, misalnya produk yang sering dibeli bersama. **Correlation tidak otomatis causation**: penjualan es krim dan minuman dapat sama-sama naik karena cuaca, sehingga promosi salah satu belum terbukti menyebabkan kenaikan lainnya. Komunikasikan hasil sebagai hubungan/asosiasi sampai ada bukti sebab-akibat yang memadai. Uji konteks bisnis, populasi dan penjelasan alternatif sebelum mengambil keputusan.'),
      example('Dari dashboard ke tindakan', p('Asumsi dashboard menunjukkan overdue naik di Toko A. Drill down ke pelanggan, invoice, due date dan penerimaan kas. Ternyata file pembayaran cabang belum dimuat. Perbarui dan rekonsiliasi data sebelum mengubah kebijakan kredit. Jika sesudah itu overdue tetap tinggi, gunakan DSS untuk membandingkan alternatif limit kredit atau penagihan dan pantau dampaknya. Contoh ini menghubungkan OLAP, refresh, exception dan keputusan tanpa menyamakan pola dengan sebab.')),
    ],
    exchange: [
      p('**XML (Extensible Markup Language)** adalah format penandaan data terstruktur; XBRL memakai konsep/tag bermakna untuk pertukaran informasi pelaporan. Data bertag dapat diekstraksi serta dipakai ulang tanpa mengetik ulang, membantu efisiensi dan perbandingan. Comparability tetap memerlukan pemahaman perbedaan taxonomy, pemilihan konsep, entitas, periode dan unit. Format yang sama tidak menghapus perbedaan kebijakan akuntansi. Richardson pp.477–481.'),
    ],
    ledger: [
      p('XBRL GL dapat memuat chart of accounts, journal entries serta data transaksi financial/nonfinancial. **Reporting independence** berarti data rinci dapat mendukung berbagai laporan tanpa disimpan ulang hanya karena tampilan berbeda. **System independence** membantu pertukaran antaraplikasi dengan format seragam sehingga koneksi khusus tiap pasangan sistem dapat dikurangi. Untuk consolidation dan analisis lintas unit, tetap dibutuhkan mapping akun, definisi, kontrol kelengkapan dan rekonsiliasi; format saja tidak menyelesaikan perbedaan tersebut. Richardson pp.481–483.'),
    ],
  },
  13: {
    consensus: [
      table('Tiga mekanisme konsensus', ['Mekanisme', 'Cara dasar', 'Pertimbangan kontrol'], [
        ['Proof of Work', 'Miner bersaing melakukan komputasi untuk memenuhi syarat protokol.', 'Kebutuhan energi/komputasi dan konsentrasi kendali ikut dinilai.'],
        ['Proof of Stake', 'Validator menempatkan stake; insentif dan konsekuensi mengikuti protokol.', 'Jangan menyamakan semua desain staking atau mekanisme penalti.'],
        ['Proof of Authority', 'Validator/administrator beridentitas dikenal diberi wewenang membuat atau memvalidasi blok.', 'Pemilihan, reputasi, pengawasan dan perubahan wewenang validator penting.'],
      ]),
      p('Public blockchain membuka partisipasi sesuai protokol; private blockchain membatasi peserta di bawah pengelolaan tertentu; consortium dikelola beberapa organisasi bersama. Bitcoin berfokus pada peer-to-peer cryptocurrency, sedangkan Ethereum memperluas platform programmable untuk smart contracts. Hak baca, kirim dan validasi tetap mengikuti desain masing-masing jaringan. Richardson Ch.15 pp.497–504.'),
    ],
    applications: [
      extra('Supply chain, loyalty program, dan audit berkelanjutan',
        p('Supply chain dapat berbagi asal material, perpindahan dan status pengiriman; sensor serta inspeksi tetap mengendalikan data fisik sebelum dicatat. **Loyalty program** lintas mitra dapat memakai catatan bersama untuk saldo dan penukaran points, sehingga perbedaan antarmitra lebih mudah direkonsiliasi. Rules harus mengatur siapa boleh menerbitkan/menukar points, kedaluwarsa dan koreksi transaksi. Richardson pp.504–506.'),
        p('Nilai implementation challenges: speed, confidentiality, governance, interoperability dan integrasi ERP. Akses lebih sering ke catatan memungkinkan continuous audit atas aturan/exception, tetapi auditor tetap menilai kecukupan bukti, hak/kewajiban dan valuation. Kompetensi protokol, smart contract dan integrasi sistem dibutuhkan; IT specialists dapat membantu menguji kode serta kontrol. Shared source of truth mengurangi perbedaan catatan, bukan menjamin kebenaran semua input. Richardson pp.506–508.'),
      ),
    ],
    learning: [
      sub('AI, neural networks, dan deep learning'),
      p('AI mencakup kemampuan mesin melakukan tugas seperti pengenalan pola, bahasa dan penalaran; machine learning mempelajari pola dari data. **Neural network** memproses input melalui nodes/neurons, weights dan activation functions hingga menghasilkan output. Training menyesuaikan parameter berdasarkan tujuan belajar. **Deep learning** memakai banyak lapisan untuk mempelajari pola kompleks; data, biaya komputasi serta evaluasi tetap menentukan kegunaannya. Lebih banyak lapisan tidak otomatis lebih baik. Richardson pp.508–513.'),
      table('Empat cara belajar dan tugasnya', ['Cara belajar', 'Data/feedback', 'Ilustrasi dan batas'], [
        ['Supervised learning', 'Pasangan input–label/output diketahui.', 'Classification invoice valid/tidak valid; regression memprediksi nilai numerik.'],
        ['Unsupervised learning', 'Tidak memakai label target yang sudah ditentukan.', 'Clustering pelanggan atau mencari outlier; datanya dapat tetap terstruktur.'],
        ['Semi-supervised learning', 'Sebagian data berlabel, sebagian tidak atau perlu diperiksa.', 'Gabungkan contoh terverifikasi dengan data lain; kualitas label tetap penting.'],
        ['Reinforcement learning', 'Agen mencoba tindakan dan mendapat feedback/reward.', 'Mempelajari kebijakan tindakan; reward harus mencerminkan tujuan dan batas lingkungan.'],
      ]),
      p('Classification menghasilkan kategori, regression nilai kontinu, clustering kelompok menurut kemiripan. Reinforcement learning berbeda karena tindakan memengaruhi pengalaman dan reward berikutnya. Pilih pendekatan dari pertanyaan bisnis, bukan dari istilah yang paling canggih. Richardson pp.513–514.'),
    ],
    nlp: [
      p('**Natural Language Processing (NLP)** membantu memahami atau mengekstraksi informasi dari bahasa/teks, misalnya tanggal serta ketentuan penting pada kontrak. RPA menjalankan workflow berulang; AI/ML atau NLP dapat membantu membaca input bervariasi sebelum RPA meneruskan tindakan. Anomaly detection hanya menyeleksi transaksi untuk pemeriksaan, contract analysis membantu ekstraksi, dan risk assessment menggabungkan konteks financial/nonfinancial. Periksa kualitas data, kompetensi reviewer dan batas otorisasi. Richardson pp.514–516.'),
    ],
    evaluation: [
      example('Precision, recall, dan accuracy dari satu confusion matrix',
        p('Asumsi evaluasi independen 1.000 transaksi: ada 10 kasus positif sebenarnya. Model menandai 20 transaksi, terdiri atas 8 true positive dan 12 false positive; 2 kasus terlewat sebagai false negative, sedangkan 978 true negative.'),
        table('Penyebut menjawab pertanyaan berbeda', ['Metrik', 'Hitungan', 'Interpretasi'], [
          ['Precision = TP / (TP + FP)', '8 / 20 = 40%.', 'Dari yang ditandai, 40% benar positif.'],
          ['Recall = TP / (TP + FN)', '8 / 10 = 80%.', 'Dari kasus positif sebenarnya, 80% ditemukan.'],
          ['Accuracy = (TP + TN) / seluruh kasus', '(8 + 978) / 1.000 = 98,6%.', 'Akurasi tinggi masih menyisakan 2 kasus yang terlewat.'],
        ]),
        p('Mengubah threshold dapat menukar beban false positive dengan risiko false negative; hasil aktual perlu diuji pada data evaluasi. Management memantau kualitas data, bias, keamanan dan perubahan pola, mencatat versi model serta keputusan, dan mempertahankan human review. Angka ini latihan buatan untuk konsep evaluasi Ch.15 p.514; label positif tidak boleh ditetapkan hanya dari dugaan model.'),
      ),
      check('Mengapa unsupervised tidak berarti unstructured?', p('Unsupervised menjelaskan tidak adanya label target, sedangkan unstructured menjelaskan bentuk data. Tabel transaksi yang terstruktur tetap dapat dianalisis tanpa label fraud untuk clustering atau deteksi outlier.')),
    ],
  },
  14: {
    benefits: [
      sub('Kebutuhan, complementary changes, dan ukuran keberhasilan'),
      p('Dana dan sumber daya terbatas, sedangkan beberapa alternatif investasi TI bersaing untuk dipilih. **Economic justification** membandingkan kebutuhan, manfaat, biaya dan risiko agar pilihan memberi nilai bagi perusahaan. Business case mendokumentasikan alasan, alternatif, waktu dan ukuran keberhasilan sebagai dasar persetujuan serta alokasi sumber daya; fitur terbaru saja belum cukup menjadi alasan investasi.'),
      p('Hubungkan kesenjangan current performance terhadap target dengan **critical success factors**. Bandingkan perubahan proses, upgrade, beli atau bangun, termasuk pilihan tidak melanjutkan. Teknologi menghasilkan manfaat melalui complementary changes: training, perubahan tugas, workflow serta incentives. Tetapkan baseline, target, waktu pencapaian dan pemilik manfaat. Akuntan berperan sebagai user, manager, designer serta evaluator untuk menilai proses, biaya dan hasil. Richardson Ch.17 pp.552–555.'),
      table('Empat jenis manfaat', ['Manfaat', 'Contoh ilustratif', 'Pemeriksaan'], [
        ['Revenue enhancement', 'Kanal baru menambah penjualan.', 'Hitung kontribusi kas tambahan, bukan seluruh omzet tanpa biaya.'],
        ['Revenue protection', 'Layanan lebih andal menjaga pelanggan.', 'Jelaskan pendapatan berisiko dan asumsi retensi.'],
        ['Cost savings', 'Biaya pemrosesan yang sedang berjalan berkurang.', 'Buktikan pengeluaran apa yang benar-benar turun.'],
        ['Cost avoidance', 'Kenaikan biaya masa depan dapat dihindari.', 'Bandingkan dengan skenario tanpa proyek; hindari menghitung manfaat dua kali.'],
      ]),
      extra('Empat metode estimasi dan total cost of ownership',
        table('Metode pada buku p.555', ['Metode', 'Cara memakai', 'Yang perlu diuji'], [
          ['Simulation', 'Uji perubahan KPI dan dampak finansial pada beberapa asumsi.', 'Data baseline, hubungan proses dan sensitivitas.'],
          ['Expert opinion', 'Minta pakar menilai manfaat dan peluang tercapainya.', 'Dasar estimasi, pengalaman dan potensi bias.'],
          ['External benchmarks', 'Bandingkan pengalaman organisasi dalam konteks serupa.', 'Skala, proses, waktu dan perbedaan kondisi.'],
          ['Real option theory', 'Nilai fleksibilitas investasi bertahap/menunda/memperluas di bawah ketidakpastian.', 'Skenario, probabilitas, biaya pilihan dan nilai fleksibilitas; bukan kepastian manfaat.'],
        ]),
        p('Acquisition costs langsung meliputi hardware, software, networking, development, project management, consulting dan training. Biaya tidak langsung meliputi gangguan operasi serta waktu staf selama implementasi. Operating costs meliputi maintenance, upgrades, help desk, administration, pelatihan lanjutan, penggantian perangkat dan penghentian sistem lama. **Total Cost of Ownership (TCO)** menilai biaya langsung/tidak langsung sepanjang life cycle, memakai jumlah dan timing relevan terhadap alternatif. Richardson pp.555–557.'),
        p('Benefit dependency perlu ditunjukkan: waktu yang dipangkas → perubahan kapasitas/tugas → hasil bisnis → arus kas atau manfaat nonkas. Menghemat dua jam staf tidak otomatis menurunkan gaji. Manfaat harus ditautkan ke perubahan nyata dan pemilik yang bertanggung jawab.'),
      ),
    ],
    risks: [
      table('Enam kategori risiko pada Ch.17 p.557', ['Risiko', 'Pertanyaan', 'Contoh mitigasi'], [
        ['Alignment risk', 'Apakah solusi selaras dengan strategi?', 'Validasi kebutuhan dan critical success factors bersama sponsor.'],
        ['Solution risk', 'Apakah solusi menghasilkan manfaat yang diproyeksikan?', 'Uji proses dan benefit dependency melalui pilot.'],
        ['Financial risk', 'Apakah hasil finansial yang diharapkan tercapai?', 'Uji skenario biaya, manfaat, timing dan discount rate.'],
        ['Project risk', 'Apakah proyek selesai dalam waktu dan anggaran?', 'Baseline, monitoring, ketergantungan dan eskalasi.'],
        ['Change risk', 'Apakah organisasi mampu beradaptasi?', 'Training, dukungan management, perubahan tugas dan komunikasi.'],
        ['Technological risk', 'Apakah teknologi memenuhi fungsi/kinerja yang dibutuhkan?', 'Vendor demonstration, pengujian integrasi dan kontrak yang sesuai.'],
      ]),
      p('Untuk setiap risiko, catat likelihood, financial/business impact dan biaya mitigasi. Penyesuaian estimasi manfaat/biaya harus transparan agar risiko yang sama tidak dihitung dua kali. Kategori membantu diagnosis; satu kejadian dapat memengaruhi beberapa kategori. Richardson pp.557–558.'),
    ],
    management: [
      sub('Project management life cycle dan baseline'),
      p('Siklus manajemen proyek mencakup **initiating, planning, executing, monitoring and controlling, closing**. Ini berbeda dari SDLC yang mengatur pengembangan sistem: satu proyek dapat mengelola aktivitas berbagai fase SDLC. Project manager mengkoordinasikan pekerjaan harian; sponsor memperoleh dukungan/sumber daya dan memutus masalah di luar kewenangan manager. Bandingkan actual costs, scope dan kemajuan dengan baseline; analisis change request, dapatkan persetujuan dan perbarui jadwal/sumber daya bila diperlukan. Richardson pp.563–568.'),
    ],
  },
};
