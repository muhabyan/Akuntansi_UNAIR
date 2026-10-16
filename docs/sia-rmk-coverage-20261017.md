# Perbaikan cakupan SIA TM8–14 · 17 Oktober 2026

Materi versi 16 Oktober sudah membetulkan pasangan TM/bab, tetapi perbandingan dengan tujuh rangkuman pengguna memperlihatkan rincian yang hilang atau terlalu dipadatkan. Revisi ini menambahkan penjelasan di dekat topik terkait; konsep inti dibaca langsung, sedangkan rincian panjang tersedia melalui pendalaman. Materi pra-UTS, katalog, identitas kartu, kuis dan kasus yang sudah ada dipertahankan.

## Arti hasil pemeriksaan

**75 bagian dan 299 subpoin sumber telah diindeks ke lokasi penjelasan pada bacaan aktif.** Ini adalah penelusuran dan penilaian oleh pembuat revisi, belum pemeriksaan akademik independen oleh dosen. Angka tersebut menghitung butir dalam tujuh rangkuman yang diberikan, bukan seluruh isi buku, bukan 299 tes pemahaman, dan bukan sertifikasi bahwa tidak mungkin ada kekurangan.

[Ledger per subpoin](../content-pipeline/SII306/revision-20261017/rmk-traceability.json) mencatat ID, judul butir, halaman sumber, lokasi blok, frasa pilihan, teks penjelasan lengkap serta apakah berada di pendalaman. Setiap frasa dipilih menurut hubungan makna; pencocokan otomatis berikutnya mendeteksi hilangnya penjelasan. Pemeriksaan otomatis tidak mengulangi penilaian makna secara independen.

Status: **AUTHOR_MAPPED_PENDING_INDEPENDENT_REVIEW**. Pemeriksaan teknis dan visual dilaporkan terpisah di bagian verifikasi.

## Tambahan dan keputusan isi

| TM | Perbaikan di bacaan |
| --- | --- |
| 8 / Ch.9 | Tujuan dan pemicu produksi; integrasi pembelian–konversi–penjualan; labor plan vs labor operations; data objects dan batch/subprocess; agents internal, type images, perluasan equipment dan query manajemen. |
| 9 / Ch.10 | Y Not Flowers, Z Cheddr dan Boston Small Business Accounting; rencana proyek, fact finding, context diagram, validasi BPMN/exception, value-added; implementasi Access, hasil query dan final report yang konsisten. Kasus angka latihan tetap dibedakan dari proyek buku. |
| 10 / Ch.11 | Corporate governance, etika, tanggung jawab management/audit committee, SOX 302/404/406 dan PCAOB dalam konteks buku; SoD, input–processing–output dan hash total; control risk vs residual risk, ilustrasi expected loss, konteks lintas versi COBIT/ITIL/ISO serta akses ERP. |
| 11 / Ch.12 | Jenis malware/serangan, information security, certificate/PKI, AUP dan kontrol SDLC; siklus vulnerability management, oversight dan Trust Services Criteria; UPS/RAID/provider, SOC 3 serta BCM/privacy. |
| 12 / Ch.14 | Internal/external reporting, sumber warehouse, distributed computing, OLAP, DSS, management by exception, refresh, alur BI dan web crawler, data mining/correlation; XML/manfaat/batas XBRL serta reporting/system independence XBRL GL. |
| 13 / Ch.15 | PoW/PoS/PoA, public/private/consortium dan contoh loyalty; audit/kompetensi; neural networks/deep learning; empat cara belajar, classification/regression/clustering, NLP; contoh hitungan confusion matrix, precision/recall/accuracy dan human review. |
| 14 / Ch.17 | Keterbatasan investasi dan complementary changes, empat jenis manfaat, simulation/expert opinion/benchmarks/real options, TCO, enam kategori risiko buku, life cycle project management dan perbandingan actual terhadap baseline. |

Penjelasan lama, contoh/jurnal dan seluruh visual tetap ada. Tambahan tidak mengubah urutan RPS. COBIT/audit SI dan analitika lintas bab tetap berlabel pelengkap. Penjelasan AI/ML/RPA berada dalam isi TM13, bukan dipindahkan ke bab lain.

## Penyederhanaan sumber yang tidak diteruskan mentah

- Tujuh information criteria COBIT diberi konteks generasi terdahulu; tidak dilabel sebagai tujuh domain atau struktur khusus COBIT 2019. Lima domain 2019 tetap dirinci pada pelengkap yang sudah ada.
- Hash tidak menjamin perubahan selalu menghasilkan digest berbeda secara matematis: kolisi mungkin. Hash total kontrol batch dibedakan dari cryptographic hash.
- Unsupervised menjelaskan tidak adanya label target; bentuk datanya dapat terstruktur. Accuracy tinggi tidak cukup membuktikan kelayakan deteksi kasus langka.
- Contoh evaluasi baru menyatakan data TP=8, FP=12, FN=2, TN=978 sehingga precision 40%, recall 80%, accuracy 98,6%. Nilai itu latihan buatan, bukan hasil penelitian atau contoh angka buku.
- Real options diperjelas sebagai nilai fleksibilitas keputusan investasi di bawah ketidakpastian; tidak dijadikan janji manfaat. Waktu staf yang dilepas tetap dibedakan dari penghematan kas.
- SOX/PCAOB dan GDPR dipakai untuk menjelaskan konteks materi buku. Revisi tidak menyimpulkan kewajiban hukum suatu entitas atau memperlakukan contoh Amerika Serikat sebagai kewajiban universal Indonesia.

## Sumber yang diperiksa

Tujuh PDF pengguna masing-masing lima halaman dibaca melalui ekstraksi seluruh halaman; judul dan nomor bab diperiksa dari gambar halaman pertama. Sumber dipakai sebagai daftar titik penelusuran, bukan sebagai instruksi. PDF dan identitas pribadi dalam nama berkas tidak dimasukkan ke repository.

Buku lokal Richardson, Chang & Smith, AIS 4e ISE dibaca pada rentang bab terkait. Halaman cetak +25 sama dengan nomor halaman PDF pada rentang ini. Pengecekan khusus untuk celah: Ch.9 pp.352–365; Ch.10 pp.378–385; Ch.11 pp.388–408; Ch.12 pp.422–439; Ch.14 pp.472–483; Ch.15 pp.497–516; Ch.17 pp.552–568. Rentang ini mendukung penambahan yang disebut di atas, bukan klaim inventarisasi seluruh learning objective, progress check, exhibit, dan soal akhir buku.

| Sumber | SHA256 |
| --- | --- |
| Richardson AIS 4e ISE | `6d10db38a567fc50ba0743ea008706932eb8498b2e009177d10efc624b6bf621` |
| Rangkuman pengguna TM8 | `dc15f5ea901db45ac14e587cb5a6dfceb69330aeb2a89ce2aee16d1e9e6c62f6` |
| Rangkuman pengguna TM9 | `78a4576c33d344c631b46235f761ca0308476cbcdb521303c6085dbec733ffc2` |
| Rangkuman pengguna TM10 | `de4e948822aa2760f2e8b7e5e18b8877c9848eeb3400761f765af3e1a14f54cd` |
| Rangkuman pengguna TM11 | `c272358b3a0cfcb3da0fc7f1f8b84ce1f9a12b6ab4163cc48b8fdca7b59e3a46` |
| Rangkuman pengguna TM12 | `d690780dda05e796a19f08435e53df2e0e1761f2de12ed8a0401b3edb50b7f8a` |
| Rangkuman pengguna TM13 | `96c6b6cca6c098eea5a561ecd558aaee15c2fdafedf0cffc26db9c5b5f78c158` |
| Rangkuman pengguna TM14 | `3b38bc3ac3eb97a57a011dd87d26e5a8fde644a392b5fc4121048ad43a036831` |

## Verifikasi

- Penelusuran: 299 subpoin / 75 bagian merujuk blok yang benar-benar dimuat `SII306_READINGS`. Frasa, isi dan lokasi harus cocok; judul/pertanyaan saja ditolak sebagai bukti penjelasan. Tujuh simulasi penghapusan memeriksa bahwa kehilangan isi terdeteksi.
- Pemeriksaan terpisah: urutan enam kategori risiko proyek, hitungan precision/recall/accuracy, konteks COBIT lama dan sifat hash/unsupervised.
- `npm test`: **85/85 PASS**, mode standard, 227,992 detik. Percobaan pertama dalam sandbox berhenti pada pembatasan rename cache Vite; pengulangan di lingkungan yang dapat mengelola cache selesai tanpa perubahan tes.
- `npm run lint`: **PASS**, 409 berkas TypeScript/TSX. `npm run build`: **PASS**, termasuk TypeScript. Peringatan ukuran chunk bawaan tetap muncul.
- Preservasi pra-UTS **17 mata kuliah PASS** dalam suite; konten latihan SIA yang sudah ada tetap 35 kuis, 42 flashcard pasca-UTS dan tujuh kasus. Total uji pemahaman dalam bacaan menjadi 21, termasuk pendalaman; visual tetap 31 dan jurnal 11.
- Generator paket aktif dijalankan ulang tanpa perubahan pada **50 berkas**. `git diff --check` PASS.
- Browser: **14 keadaan**, tujuh bacaan × desktop 1440×1000 dan ponsel 390×844. Semua pendalaman dibuka (18 per lebar), dua contoh pokok tambahan per TM diperiksa pada teks yang tampil. Lebar dokumen cocok dengan viewport efektif 1425/375 px, tanpa overflow horizontal. Ini bukan audit setiap kemungkinan perangkat atau setiap interaksi kuis.
- Bukti yang ditinjau: [OLAP/DSS desktop](sia-rmk-coverage-20261017/tm12-desktop.png), [OLAP/DSS ponsel](sia-rmk-coverage-20261017/tm12-mobile.png), [jenis belajar AI desktop](sia-rmk-coverage-20261017/tm13-desktop.png), [neural network ponsel](sia-rmk-coverage-20261017/tm13-mobile.png), dan [ukuran serta cek isi](sia-rmk-coverage-20261017/browser-checks.json).
- Kelulusan teknis dan tampilan tersebut **tidak mengubah status peninjauan akademik independen**.

## Indeks bagian sumber

Detail 299 lokasi dan kutipan penjelasan terdapat pada ledger JSON. Tabel ini merangkum 75 bagian; halaman adalah halaman PDF rangkuman pengguna. Sebagian penjelasan tampil pada visual yang mempunyai transkrip teks, dan sebagian pada pendalaman yang dapat dibuka.

| Bagian sumber | Subpoin | Halaman | Lokasi penjelasan pada bacaan |
| --- | ---: | --- | --- |
| TM8.1 · Conversion Business Process | 4 | 1 | 1. Alur barang dan alur biaya; Tujuan produksi, pemicu, dan hubungan antarsiklus |
| TM8.2 · Production Activities | 4 | 1 | 1. Alur barang dan alur biaya |
| TM8.3 · Production Documents and Cost Information | 4 | 2 | 1. Alur barang dan alur biaya; Tujuan produksi, pemicu, dan hubungan antarsiklus; 5. Struktur REA/UML dan perhitungan WIP |
| TM8.4 · Inventory and Accounting Effects | 4 | 2 | 2. Contoh bertahap: dari biaya masuk sampai HPP |
| TM8.5 · Activity Models Using BPMN | 4 | 2, 3 | 3. Model aktivitas BPMN dan exception produksi; Membaca data objects, batch, dan subprocess |
| TM8.6 · Batch Processing and Exceptions | 4 | 3 | Membaca data objects, batch, dan subprocess; 3. Model aktivitas BPMN dan exception produksi; 4. Business rules, akses, dan kontrol aplikasi |
| TM8.7 · Business Rules and Internal Controls | 4 | 3, 4 | 4. Business rules, akses, dan kontrol aplikasi |
| TM8.8 · Structure Model Using UML and REA | 4 | 4 | 5. Struktur REA/UML dan perhitungan WIP |
| TM8.9 · Multiplicity and Type Images | 4 | 4, 5 | 5. Struktur REA/UML dan perhitungan WIP |
| TM8.10 · Relational Database Implementation | 4 | 5 | 5. Struktur REA/UML dan perhitungan WIP |
| TM9.1 · Integrated Project | 4 | 1 | 1. Integrated project: satu proses analisis yang utuh; Laporan akhir: hasil query harus menjawab kebutuhan awal |
| TM9.2 · Integrated Project Options | 4 | 1 | Pilihan proyek dalam buku dan keluaran yang diminta |
| TM9.3 · Project Planning | 4 | 2 | Rencana proyek dan penemuan kebutuhan |
| TM9.4 · Determine Business Requirements | 4 | 2 | Rencana proyek dan penemuan kebutuhan |
| TM9.5 · Context Diagram | 4 | 2, 3 | Rencana proyek dan penemuan kebutuhan |
| TM9.6 · Prepare Activity Models Using BPMN | 4 | 3 | Rencana proyek dan penemuan kebutuhan |
| TM9.7 · Risk Assessment and Process Improvement | 4 | 3, 4 | Rencana proyek dan penemuan kebutuhan |
| TM9.8 · Prepare an Integrated UML Class Diagram | 4 | 4 | 1. Integrated project: satu proses analisis yang utuh; 2. Dari multiplicity ke PK dan FK |
| TM9.9 · Implement the Relational Database in Access | 4 | 4, 5 | Implementasi Access dan pemeriksaan hasil impor |
| TM9.10 · Queries and Financial Statement Information | 4 | 5 | Laporan akhir: hasil query harus menjawab kebutuhan awal |
| TM9.11 · Validation and Final Report | 4 | 5 | Laporan akhir: hasil query harus menjawab kebutuhan awal; 5. Audit trail dan query laporan |
| TM10.1 · Internal Control and Corporate Governance | 4 | 1 | 1. Tujuan pengendalian dan keyakinan memadai; Corporate governance, kode etik, dan akuntabilitas SOX |
| TM10.2 · Sarbanes-Oxley Act and Accountability | 4 | 1, 2 | Corporate governance, kode etik, dan akuntabilitas SOX |
| TM10.3 · Control Categories | 4 | 2 | 3. Mengklasifikasikan kontrol dari dua sudut |
| TM10.4 · COSO Internal Control Framework | 4 | 2 | 1. Tujuan pengendalian dan keyakinan memadai; Information and communication · prinsip 13–15; monitoring · 16–17 |
| TM10.5 · Five Components of Internal Control | 5 | 3 | Control environment · prinsip 1–5; Risk assessment · prinsip 6–9; Control activities · prinsip 10–12; Information and communication · prinsip 13–15; monitoring · 16–17 |
| TM10.6 · COSO Enterprise Risk Management | 4 | 3, 4 | 5. COSO internal control dan dua versi ERM; 4. Risiko bawaan, risiko sisa, dan respons |
| TM10.7 · Risk Assessment and Response | 4 | 4 | 4. Risiko bawaan, risiko sisa, dan respons |
| TM10.8 · Control Activities in AIS | 4 | 4 | Kontrol input, pemrosesan, dan output |
| TM10.9 · COBIT Framework | 4 | 5 | 7. Uji pemahaman dan pola jawaban kasus; 1. Tata kelola menentukan arah, manajemen menjalankan |
| TM10.10 · Other Frameworks and ERP Controls | 4 | 5 | 7. Uji pemahaman dan pola jawaban kasus |
| TM11.1 · Information Security and Systems Integrity | 4 | 1 | 1. Memulai dari CIA, ancaman, dan kerentanan |
| TM11.2 · Information Security Threats | 4 | 1 | 1. Memulai dari CIA, ancaman, dan kerentanan |
| TM11.3 · Encryption Methods | 4 | 2 | 3. Hash, enkripsi, dan tanda tangan digital |
| TM11.4 · Authentication and Digital Signatures | 4 | 2 | 2. Siapa masuk, boleh melakukan apa, dan meninggalkan bukti apa?; 3. Hash, enkripsi, dan tanda tangan digital |
| TM11.5 · Computer Fraud and Fraud Triangle | 4 | 2, 3 | Kebijakan penggunaan dan kontrol sepanjang SDLC; 4. Computer fraud dan fraud triangle |
| TM11.6 · Fraud Schemes and Prevention | 4 | 3 | 4. Computer fraud dan fraud triangle; 2. Siapa masuk, boleh melakukan apa, dan meninggalkan bukti apa?; Kebijakan penggunaan dan kontrol sepanjang SDLC |
| TM11.7 · Detection and Cybersecurity Risk Management | 4 | 3, 4 | Siklus vulnerability assessment dan management |
| TM11.8 · Vulnerability Assessment and Management | 4 | 4 | 1. Memulai dari CIA, ancaman, dan kerentanan; Siklus vulnerability assessment dan management |
| TM11.9 · System Availability and Cloud Risks | 4 | 4, 5 | 5. BCP, DRP, dan target pemulihan |
| TM11.10 · System and Organization Controls Reports | 4 | 5 | 6. Pihak ketiga, cloud, dan laporan SOC |
| TM11.11 · Disaster Recovery and Business Continuity | 4 | 5 | 5. BCP, DRP, dan target pemulihan |
| TM12.1 · Reporting Processes in AIS | 4 | 1 | Warehouse, OLAP, DSS, dan management by exception; 1. Dari transaksi ke informasi pelaporan |
| TM12.2 · Data Warehouses | 4 | 1 | 1. Dari transaksi ke informasi pelaporan; Warehouse, OLAP, DSS, dan management by exception |
| TM12.3 · Data Marts and Data Lakes | 3 | 2 | 1. Dari transaksi ke informasi pelaporan; Warehouse, OLAP, DSS, dan management by exception |
| TM12.4 · Analytical Processing and Decision Support | 4 | 2 | Warehouse, OLAP, DSS, dan management by exception |
| TM12.5 · Business Intelligence | 4 | 2, 3 | 1. Dari transaksi ke informasi pelaporan; Business intelligence dan data mining |
| TM12.6 · Data Mining and Professional Judgment | 3 | 3 | Business intelligence dan data mining |
| TM12.7 · Digital Dashboards | 4 | 3 | 1. Dari transaksi ke informasi pelaporan; 2. KPI yang bisa diartikan dan ditindaklanjuti; Business intelligence dan data mining |
| TM12.8 · XML and XBRL | 4 | 4 | 3. Komponen XBRL dan perbedaannya |
| TM12.9 · XBRL Components | 5 | 4 | 3. Komponen XBRL dan perbedaannya |
| TM12.10 · XBRL Reporting and Assurance | 4 | 5 | 5. Pemetaan, validasi, dan assurance; 3. Komponen XBRL dan perbedaannya |
| TM12.11 · XBRL Global Ledger Taxonomy | 4 | 5 | 6. XBRL GL dan perkembangan penyajian |
| TM13.1 · Blockchain and Distributed Ledger | 4 | 1 | 1. Mengapa memakai distributed ledger?; 3. Smart contract dan oracle problem |
| TM13.2 · Blocks and Transaction Validation | 4 | 1 | 1. Mengapa memakai distributed ledger? |
| TM13.3 · Consensus Mechanisms | 3 | 2 | 2. Jenis jaringan dan governance |
| TM13.4 · Blockchain Types and Applications | 4 | 2 | 2. Jenis jaringan dan governance |
| TM13.5 · Smart Contracts and Use Cases | 4 | 2, 3 | 3. Smart contract dan oracle problem |
| TM13.6 · Blockchain in Audit and Assurance | 4 | 3 | 3. Smart contract dan oracle problem; 4. Double-entry, shared receipt, dan triple-entry |
| TM13.7 · Artificial Intelligence and Machine Learning | 4 | 3, 4 | AI, neural networks, dan deep learning |
| TM13.8 · Learning Types and Analytical Tasks | 4 | 4 | AI, neural networks, dan deep learning |
| TM13.9 · Model Performance | 4 | 4 | 12. Menilai model AI dan batas keputusan otomatis |
| TM13.10 · Natural Language Processing and RPA | 4 | 5 | 8. Proses mana yang layak diotomasi?; 7. RPA, AI, dan machine learning; 10. Bot governance dan pengendalian perubahan |
| TM13.11 · Accounting Applications and Governance | 4 | 5 | 8. Proses mana yang layak diotomasi?; 12. Menilai model AI dan batas keputusan otomatis |
| TM14.1 · Economic Justification and Business Case | 4 | 1 | Kebutuhan, complementary changes, dan ukuran keberhasilan; 1. Business case: kebutuhan sebelum teknologi |
| TM14.2 · Business Requirements and Complementary Changes | 4 | 1 | Kebutuhan, complementary changes, dan ukuran keberhasilan |
| TM14.3 · Estimating Benefits | 4 | 2 | 1. Business case: kebutuhan sebelum teknologi; Kebutuhan, complementary changes, dan ukuran keberhasilan |
| TM14.4 · Estimating Costs and Total Cost of Ownership | 4 | 2 | Kebutuhan, complementary changes, dan ukuran keberhasilan |
| TM14.5 · IT Initiative Risks | 4 | 2, 3 | 3. Risiko dan sensitivitas nilai proyek |
| TM14.6 · Capital Budgeting and Value Proposition | 5 | 3 | 2. Metrik ekonomi: satu angka tidak cukup; 3. Risiko dan sensitivitas nilai proyek |
| TM14.7 · Systems Development Life Cycle | 5 | 3, 4 | 4. Systems Development Life Cycle (SDLC) |
| TM14.8 · Waterfall and Agile Models | 3 | 4 | 4. Systems Development Life Cycle (SDLC); 5. Lingkup, sponsor, dan pengendalian perubahan |
| TM14.9 · Project Management and Responsibilities | 3 | 4, 5 | Project management life cycle dan baseline; 5. Lingkup, sponsor, dan pengendalian perubahan |
| TM14.10 · Triple Constraints and Scope Creep | 4 | 5 | 5. Lingkup, sponsor, dan pengendalian perubahan; Project management life cycle dan baseline |
| TM14.11 · Project Management Tools | 4 | 5 | 6. WBS, dependency, dan critical path |
