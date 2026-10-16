# Emerging Technologies: Blockchain dan AI Automation

Pelajari blockchain, smart contract dan shared receipt, lalu hubungkan dengan AI/ML serta otomasi RPA. Contoh pembelian dan rekonsiliasi menunjukkan manfaat, batas bukti digital, risiko input, exception, pengawasan manusia dan perhitungan manfaat otomasi.

Catatan sama, barang tetap bisa bermasalah

Pembeli dan pemasok melihat catatan digital yang sama: “100 unit diterima baik”. Sensor yang mengirim data ternyata salah dikalibrasi, dan sebagian barang rusak. Catatan bersama membantu menelusuri siapa memasukkan informasi serta kapan, tetapi inspeksi fisik, syarat penerimaan, dan penyelesaian sengketa tetap dibutuhkan.

1. Mengapa memakai distributed ledger?

Blockchain merupakan salah satu bentuk distributed ledger: transaksi disimpan dalam rangkaian blok dengan keterkaitan kriptografis dan aturan validasi bersama. Peserta mempertahankan salinan sesuai desain jaringan. Ini berbeda dari database tunggal yang dikendalikan satu pengelola. Tidak semua distributed ledger memakai bentuk rantai blok, dan blockchain tidak harus memakai mata uang kripto publik.

Pertanyaan bisnisnya: apakah beberapa pihak perlu berbagi catatan, apakah satu pengelola pusat dapat dipercaya, dan apakah biaya koordinasi serta validasi bersama sepadan? Jika data hanya dipakai satu organisasi dengan otoritas yang jelas, database terpusat dengan kontrol yang baik dapat lebih sederhana. Richardson pp. 495–498.

Dari pengajuan sampai catatan bersama

Alur konseptual buatan; bukan diagram implementasi jaringan tertentu. Data input dunia nyata tetap harus diverifikasi.

1. Transaksi diajukan: Identitas/kunci dan data transaksi. Signature diperiksa sesuai aturan.

2. Validasi jaringan: Periksa aturan dan urutan transaksi. Mekanisme konsensus bergantung desain.

3. Blok terhubung: Blok merujuk hash blok sebelumnya. Perubahan meninggalkan inkonsistensi.

4. Peserta membaca riwayat: Salinan konsisten menurut protokol. Koreksi lazimnya entri lanjutan.

Komponen yang perlu dibedakan

Komponen | Peran | Batas

Hash | Ringkasan kriptografis yang menghubungkan dan memeriksa data. | Tidak membuat data rahasia atau membuktikan kondisi barang.

Signature dan kunci | Mendukung autentikasi pengajuan transaksi. | Kunci dicuri dapat disalahgunakan; pengamanan kunci penting.

Konsensus | Aturan menyepakati state/urutan yang diterima jaringan. | Valid menurut protokol belum tentu benar secara ekonomi.

Replikasi | Mendistribusikan salinan ledger. | Tetap ada risiko jaringan, governance, aplikasi dan hak akses.

Immutability memiliki konteks

Catatan dirancang tahan perubahan dan dapat memperlihatkan manipulasi, bergantung protokol, konsensus, kendali peserta, serta pengelolaan kunci. Ini bukan jaminan absolut. Transaksi koreksi dapat ditambahkan untuk memperbaiki konsekuensi bisnis tanpa menghapus riwayat.

Jejak perkembangan singkat: Bitcoin mempertemukan mekanisme kriptografi, jaringan terdistribusi dan konsensus dalam rancangan 2008 yang mulai beroperasi 2009. Pemanfaatan berikutnya meluas ke ledger konsorsium dan smart contracts. Blockchain sebagai infrastruktur perlu dibedakan dari cryptocurrency sebagai salah satu penggunaannya. Richardson Ch.15 pp.495–504.

2. Jenis jaringan dan governance

Izin peserta berbeda dari siapa yang mengelola

Jenis | Karakter | Pertimbangan

Permissionless | Partisipasi validasi terbuka sesuai protokol. | Konsensus, biaya, privasi, kapasitas, dan finalitas perlu ditinjau.

Permissioned | Keanggotaan/hak dibatasi kepada peserta berizin. | Siapa menerima anggota, mengubah aturan, dan mengawasi validator?

Private / consortium | Pengelolaan oleh satu organisasi atau kelompok organisasi. | Pembagian kuasa, konflik, akses data, dan prosedur keluar anggota.

Public/private sering membahas keterbukaan atau pengelolaan, sementara permissioned/permissionless membahas izin partisipasi. Jangan menganggap istilah itu selalu sinonim. Proof of work, proof of stake, dan mekanisme lain memberi pendekatan berbeda untuk konsensus; tidak semua jaringan memakai mining atau menyimpan data secara rahasia. Richardson pp. 498–504.

3. Smart contract dan oracle problem

**Smart contract** adalah program yang menjalankan aturan pada lingkungan blockchain ketika kondisi yang didefinisikan terpenuhi. Nama “contract” tidak otomatis berarti seluruh syarat hukum dan substansi kontrak bisnis sudah tercakup. Kode membutuhkan data tentang dunia luar dari **oracle**, seperti sensor, sistem gudang, atau inspektur. Kesalahan oracle dapat memicu aksi salah meskipun program berjalan sesuai kode.

Gerbang bukti sebelum pembayaran

Ilustrasi buatan. Titik paling awal sering berada di luar blockchain: data fisik yang masuk harus andal.

1. Dunia fisik: Jumlah, mutu dan penerimaan barang. Periksa dokumen dan inspeksi.

2. Oracle tepercaya: Identitas sumber, waktu, validasi. Bandingkan sensor dan reviewer.

3. Smart contract: Cek syarat, hak dan status bayar. Jika ragu, tahan dan eskalasi.

4. Settlement + catatan: Pembayaran hanya sekali. Rekonsiliasi bank dan buku besar.

Asumsi latihan: penerimaan 100 unit dan diskon 2%

Nilai invoice Rp100 juta. Pembayaran Rp98 juta hanya jika kontrak bisnis memang memberi diskon 2%, seluruh syarat terpenuhi, dan transaksi belum pernah dibayar. Apabila 10 unit rusak, program menahan pembayaran untuk penyelesaian, bukan mengubah laporan menjadi “diterima baik”.

IF caller_is_authorized
   AND oracle_evidence_is_valid_and_current
   AND accepted_quantity == ordered_quantity
   AND quality_approval == TRUE
   AND invoice_is_approved
   AND discount_terms_are_satisfied
   AND invoice_status == "UNPAID":
       reserve_invoice_once()
       request_settlement(invoice_amount * 0.98)
       confirm_settlement_before_marking_paid()
       record_receipt_and_audit_event()
ELSE:
       hold_and_route_exception_for_review()

Pseudocode pedagogis; bukan kode siap produksi atau kontrak hukum.

Status, penguncian, dan konfirmasi settlement mencegah retry menciptakan pembayaran ganda. Jika pembayaran melalui bank di luar jaringan, event blockchain saja belum membuktikan transfer bank sukses. Rekonsiliasi tetap diperlukan.

Risiko smart contract dan kontrol

Risiko | Kontrol | Bukti

Oracle salah atau dimanipulasi | Validasi sumber dan inspeksi independen; tangani data tidak konsisten. | Log sensor, hasil inspeksi, approval dan exception.

Bug / aturan kontrak tidak tepat | Review kode, test case, approval bisnis dan pengelolaan perubahan. | Versi, uji kondisi batas, persetujuan dan prosedur darurat.

Kunci dicuri | Penyimpanan aman, pemisahan peran dan multi-approval sesuai risiko. | Inventaris kunci, kebijakan akses dan log.

Salah bayar / double payment | Status transaksi unik dan konfirmasi settlement. | Ledger status, referensi bank serta hasil rekonsiliasi.

4. Double-entry, shared receipt, dan triple-entry

Double-entry tetap mencatat dua sisi setiap transaksi pada pembukuan masing-masing entitas. Pada konsep triple-entry, bukti transaksi yang ditandatangani dan dapat diverifikasi bersama menjadi lapisan bukti tambahan. “Entri ketiga” bukan sisi ketiga yang mengubah persamaan debit = kredit. Konsep shared receipt juga tidak mensyaratkan semua implementasi menggunakan blockchain.

Sumber pelengkap primer untuk shared signed receipt: [Ian Grigg, Triple Entry Accounting (2005)](https://iang.org/papers/triple_entry.html). Konsep ini mendahului public blockchain modern.

Pembukuan masing-masing dan bukti bersama

Ilustrasi transaksi kredit, tanpa pajak. Shared receipt membantu konsistensi bukti tetapi tidak menggantikan pembukuan entitas.

1. Pembeli: Dr Persediaan; Cr Utang. Pembukuan dan estimasi sendiri.

2. Pemasok: Dr Piutang; Cr Penjualan. Biaya barang dicatat terpisah.

3. Shared receipt: Bukti transaksi terverifikasi bersama. Menautkan catatan antarpihak.

4. Audit dan rekonsiliasi: Periksa hak, nilai, cutoff, sengketa. Cocokkan ledger, bank, dan GL.

Apa yang masih diuji auditor?

Keberadaan dan kondisi: apakah barang benar ada dan layak?

Hak dan kewajiban: apakah entitas memiliki hak atau kewajiban terkait?

Penilaian: apakah harga, penurunan nilai, atau estimasi lain tepat?

Kelengkapan dan cutoff: apakah transaksi di luar jaringan atau di akhir periode telah masuk dengan benar?

Kontrol: apakah kunci, oracle, perubahan program, dan akses peserta terjaga?

5. Cloud accounting berbeda dari blockchain

Dua pilihan arsitektur

Aspek | Cloud accounting / SaaS | Blockchain

Fokus | Aplikasi dan data dilayani penyedia melalui jaringan. | Catatan bersama dengan aturan validasi jaringan.

Pengelolaan | Penyedia mengelola bagian layanan sesuai kontrak. | Peserta dan validator mengikuti governance protokol.

Risiko utama | Akses, integrasi, outage, konfigurasi, portabilitas dan ketergantungan penyedia. | Kunci, konsensus, oracle, privasi, bug dan governance.

Tanggung jawab pengguna | Hak akses, kualitas input, approval, monitoring penyedia, pemulihan bisnis. | Input, akses, validasi substansi, kontrol aplikasi dan pembukuan.

Keduanya bisa dipakai bersama. Cloud tidak otomatis berarti ledger terdistribusi, dan blockchain bisa dijalankan pada infrastruktur cloud. Evaluasi SLA, lokasi/retensi data, kemampuan ekspor, pemulihan, dan strategi keluar penyedia. Kontrol serta laporan SOC yang relevan dari TM11 tetap perlu diperiksa.

Pelengkap: batas perlakuan akuntansi cryptocurrency

Agenda decision IFRIC Juni 2019 membahas cryptocurrency dengan karakteristik tertentu, bukan seluruh token digital. IAS 2 dipakai bila dipegang untuk dijual dalam kegiatan usaha normal; bila IAS 2 tidak berlaku, IAS 38 dipakai. Jangka investasi panjang tidak menjadi syarat tunggal. Periksa hak kontraktual serta pengungkapan, dan jangan memperluas keputusan ini ke semua aset kripto. Rujukan: [IFRIC, Holdings of Cryptocurrencies, Juni 2019, PDF 1–3](https://www.ifrs.org/content/dam/ifrs/supporting-implementation/agenda-decisions/2019/holdings-of-cryptocurrencies-june-2019.pdf). Penomoran Indonesia efektif 1 Januari 2024 adalah PSAK 202 Persediaan dan PSAK 238 Aset Takberwujud, menurut dokumen IAI Perubahan Penomoran PSAK/ISAK, PDF 1–2; pemetaan nomor tidak menggantikan pemeriksaan teks standar nasional.

6. Uji pemahaman

Seluruh anggota konsorsium melihat penerimaan 100 unit. Apakah barang pasti diterima baik?

Tidak. Konsistensi catatan tidak membuktikan sensor, petugas, dan dokumen benar. Periksa oracle, bukti fisik, kondisi, kewenangan serta sengketa.

Apakah transaksi koreksi bertentangan dengan konsep riwayat tahan perubahan?

Tidak selalu. Entri lanjutan dapat membatalkan atau mengoreksi konsekuensi bisnis sambil mempertahankan jejak sebelumnya. Kontrol tetap harus mengatur siapa yang berwenang dan bagaimana buku besar diperbarui.

Cepat mencocokkan belum tentu benar

Bot mencocokkan semua baris rekening koran dengan buku bank berdasarkan nominal. Dua pembayaran berbeda kebetulan bernilai sama dan dianggap cocok. Otomasi berhasil menekan waktu kerja, tetapi gagal menjaga integritas rekonsiliasi. Aturan pencocokan, unit transaksi, dan penanganan exception harus dirancang sebelum proses dijalankan massal.

7. RPA, AI, dan machine learning

**Robotic process automation (RPA)** menggunakan perangkat lunak untuk menjalankan langkah kerja berulang berbasis aturan, misalnya membuka aplikasi, mengambil data, mengisi kolom, dan memindahkan file. Robot ini bukan robot fisik. Perubahan antarmuka atau kredensial dapat membuat alur yang tadinya benar gagal. Richardson membahas RPA pada p. 515 (PDF 540).

Teknologi menurut cara kerjanya

Pilihan | Cara | Contoh dan batas

RPA berbasis aturan | Menjalankan langkah yang telah ditentukan. | Ambil laporan ERP dan bandingkan referensi; aturan berubah → bot perlu diperbarui.

API / integrasi langsung | Sistem bertukar data melalui antarmuka terstruktur. | Impor transaksi tanpa klik UI; tetap perlu otorisasi, validasi, retry dan log.

AI | Istilah luas untuk kemampuan komputer melakukan tugas yang memerlukan kecerdasan. | Klasifikasi dokumen, pemahaman bahasa, rekomendasi; hasil perlu dievaluasi.

Machine learning | Model mempelajari pola dari data. | Prediksi keterlambatan; mutu dipengaruhi representasi, label dan perubahan pola.

OCR + AI + RPA | Baca dokumen, ekstrak informasi, lalu jalankan alur. | Ekstraksi invoice perlu confidence threshold dan review untuk field meragukan.

AI dapat membantu proses yang masukannya tidak terstruktur, sedangkan RPA menjalankan aksi yang terdefinisi. Menggabungkan keduanya tidak menghilangkan kebutuhan kontrol. AI bisa salah membaca rekening, dan bot dapat meneruskan hasil salah dengan sangat konsisten. Pilih teknologi sesuai proses, bukan sekadar label produk.

8. Proses mana yang layak diotomasi?

Menilai kesiapan proses

Kriteria praktis buatan; kelayakan bersifat spektrum. Banyak exception dapat mengurangi manfaat, bukan otomatis membuat semua otomasi mustahil.

1. Aturan jelas: Input, keputusan, output terdefinisi. Sengketa perlu jalur manusia.

2. Data siap: Digital, terstruktur, dapat divalidasi. Kualitas sumber diuji dahulu.

3. Proses stabil: Volume berulang dan UI konsisten. Perubahan harus dikelola.

4. Kontrol siap: Pemilik, log, akses, stop dan retry. Manfaat dinilai setelah biaya.

Bandingkan dua kandidat

Aspek | Rekonsiliasi bank rutin | Penilaian sengketa piutang

Aturan | Referensi, nominal, tanggal dan toleransi dapat ditentukan. | Memerlukan interpretasi kontrak, bukti, dan negosiasi.

Data | File bank dan buku bank relatif terstruktur. | Email, dokumen hukum, dan informasi yang belum lengkap.

Tindakan | Cocokkan dan hasilkan exception untuk reviewer. | AI dapat meringkas; keputusan akhir tetap memerlukan pihak berwenang.

Prioritas | Kandidat awal jika sumber dan kontrol siap. | Otomasi bagian administratif lebih layak daripada keputusan penuh.

Attended dan unattended

Attended automation membantu pengguna dalam sesi kerja dengan keterlibatan manusia. Unattended automation berjalan dengan penjadwalan/pemicu dan pengelolaan terpusat tanpa interaksi pengguna pada setiap langkah. Keduanya tetap memerlukan pemilik, pengamanan kredensial, log, serta penanganan kegagalan. Ini istilah implementasi pelengkap, bukan pembeda “RPA versus AI”.

9. Merancang rekonsiliasi yang aman

Alur bot dengan gerbang review

Ilustrasi buatan. Garis dari pencocokan ke posting selalu melalui review/otorisasi sesuai desain; exception tidak dipaksa menjadi cocok.

1. Ambil dan validasi: Bank + GL, periode dan rekening. Cocokkan jumlah serta total file.

2. Cocokkan aturan: Referensi + nilai + tanggal. Bedakan pasangan unik dan ambigu.

3. Review exception: Belum cocok, ganda, beda nilai. Reviewer mencari sebab dan bukti.

4. Setujui dan arsipkan: Posting hanya bila terotorisasi. Log, hasil, approval, dan versi.

Lima baris, tiga hasil berbeda

Seluruh nominal Rp juta; jendela tanggal ditetapkan dalam asumsi

Bank | Buku bank | Hasil

REF-A · 10 | REF-A · 10 | Cocok unik dengan aturan yang terpenuhi.

REF-B · 7 | REF-B · 6,8 | Exception selisih 0,2; jangan langsung tulis biaya bank.

REF-C · 5 | Tidak ditemukan | Belum cocok; cek cutoff dan bukti sebelum jurnal.

REF-D · 4 | Dua catatan bernilai 4 dengan referensi tidak jelas | Ambigu; perlu investigasi, bukan dipilih acak.

Tidak ditemukan | REF-E · 3 | Transaksi buku belum tampak di bank; cek outstanding/timing.

Selisih dapat berupa biaya bank, kesalahan pencatatan, transaksi dalam perjalanan, atau aktivitas tidak sah. Penyebab berbeda menghasilkan tindak lanjut berbeda. Bot sebaiknya menandai dan menyertakan bukti, lalu reviewer menentukan koreksi atau item rekonsiliasi.

**Idempotency** berarti pengulangan pekerjaan tidak menciptakan pembayaran/jurnal ganda. Simpan kunci transaksi unik dan status pemrosesan; periksa hasil sebelum mencoba ulang. Timeout jaringan tidak selalu berarti aksi gagal. Bot yang mengulang seluruh batch tanpa memeriksa transaksi yang sudah diposting dapat menggandakan catatan.

10. Bot governance dan pengendalian perubahan

Risiko otomasi dan kontrolnya

Risiko | Kontrol | Bukti

Akun bot terlalu berkuasa | Identitas layanan yang dapat ditelusuri, least privilege, rahasia di penyimpanan aman. | Daftar izin, pemilik akun, hasil review akses dan log.

Bot mengusulkan sekaligus menyetujui pembayaran | Pemisahan pembuat dan penyetuju tetap berlaku untuk bot. | Alur approval dan identitas reviewer independen.

Perubahan UI / aturan | Uji regresi dan persetujuan sebelum rilis; sediakan stop/rollback. | Versi, test case, approval, dan hasil monitoring.

Retry menimbulkan transaksi ganda | Kunci unik, cek status dan pemrosesan idempotent. | Log retry serta uji simulasi kegagalan.

Exception tidak ditangani | Queue berpenanggung jawab dan batas waktu menurut risiko. | Umur exception, keputusan, bukti penyelesaian.

Bot memiliki pemilik bisnis dan pemilik teknis. Pemilik bisnis bertanggung jawab atas aturan serta hasil; tim teknis mengelola operasi dan perubahan. Sebelum produksi, jalankan pilot atau parallel run yang membandingkan hasil dengan prosedur terkontrol. Setelah rilis, ukur akurasi, exception, kegagalan, waktu penanganan, dan manfaat aktual.

11. Menghitung manfaat tanpa menyamakan waktu dengan kas

Asumsi latihan: PT Mitra Logistik

Sebelum otomasi: 3 staf × 4 jam × 250 hari = 3.000 jam/tahun.

Setelah otomasi: review dan exception memerlukan total 2 jam staf per hari × 250 = 500 jam/tahun.

Kapasitas yang dilepas = 3.000 − 500 = 2.500 jam/tahun.

Dengan asumsi nilai kapasitas Rp60.000/jam, manfaat kapasitas = Rp150 juta/tahun.

Biaya berulang lisensi/operasi Rp30 juta dan pemeliharaan Rp20 juta: manfaat bersih ekuivalen = 150 − 30 − 20 = Rp100 juta/tahun.

Investasi awal Rp120 juta: simple payback ekuivalen = 120 ÷ 100 = 1,2 tahun, jika manfaat stabil dan arus terjadi sesuai asumsi.

Kapasitas tidak otomatis menjadi penghematan kas

Jika gaji tetap dibayar dan waktu dialihkan ke tugas lain, Rp150 juta adalah nilai kapasitas, bukan kas yang pasti dihemat. Payback kas harus memakai perubahan arus kas aktual. Perhitungan sederhana juga belum memasukkan pajak, nilai waktu uang, pertumbuhan volume, dan risiko proyek.

Jembatan manfaat otomasi dalam kasus

Angka buatan dan satuan konsisten; bagan menunjukkan perhitungan, bukan janji hasil suatu produk.

1. 3.000 jam awal: 3 staf × 4 jam × 250 hari. Semua jam adalah jam kerja staf.

2. 500 jam tersisa: Review tetap memerlukan manusia. 500 = 2 jam × 250 hari.

3. 2.500 jam kapasitas: Nilai asumsi Rp150 juta/tahun. Bukan otomatis kas dihemat.

4. Kurangi biaya berulang: Rp50 juta/tahun → bersih 100. Payback ekuivalen: 1,2 tahun.

12. Menilai model AI dan batas keputusan otomatis

**Supervised learning** belajar dari contoh dengan label, misalnya invoice valid/tidak valid. **Unsupervised learning** mencari pola atau kelompok tanpa label hasil yang sama. Outlier yang berbeda dari pola mayoritas belum otomatis salah. Pemisahan data training dan testing serta pencegahan data leakage dibutuhkan agar evaluasi mencerminkan data baru. Richardson pp. 509–514.

Kesalahan klasifikasi perlu dinilai dari dampaknya

Hasil | Arti dalam penyaringan fraud | Konsekuensi

True positive | Transaksi bermasalah ditandai. | Masuk pemeriksaan yang relevan.

False positive | Transaksi sah ikut ditandai. | Beban review dan potensi keterlambatan.

False negative | Transaksi bermasalah tidak ditandai. | Risiko kerugian lolos dari penyaringan.

True negative | Transaksi sah tidak ditandai. | Pemrosesan berjalan sesuai rancangan.

Pada 1.000 transaksi dengan 10 masalah, model yang menyebut semuanya normal punya akurasi 99% tetapi menangkap nol masalah. Karena itu evaluasi juga **precision** (dari yang ditandai, berapa yang benar bermasalah) dan **recall** (dari seluruh masalah, berapa yang tertangkap), bersama biaya serta kapasitas review. Perubahan pola bisnis dapat mengurangi kinerja model atau menimbulkan drift.

Pelengkap AI generatif

Ringkasan kontrak atau usulan jurnal dari AI generatif bisa keliru atau mengarang rujukan. Verifikasi terhadap dokumen sumber, lindungi data, dan pertahankan review pihak berwenang. Bagian ini perluasan pedagogis; buku yang dibaca berfokus pada AI/ML dan RPA, bukan panduan produk AI terkini.

13. Uji pemahaman

Bot menemukan dua transaksi bernilai sama. Apakah keduanya boleh langsung dianggap cocok?

Tidak. Periksa referensi, rekening, tanggal, dan keunikan pasangan. Pasangan ambigu masuk exception. Simpan bukti keputusan agar proses dapat ditelusuri.

AI punya akurasi 99%. Mengapa belum tentu layak menyetujui pembayaran?

Akurasi dapat didominasi transaksi normal. Periksa false negative, false positive, mutu label, data baru, batas otorisasi, dan dampak kesalahan. Model pemberi rekomendasi tidak otomatis menjadi penyetuju pembayaran.

Sumber dan batas pembahasan

Richardson Ch. 15 pp. 508–516 (PDF 533–541), terutama AI/ML pp. 509–514 dan RPA p. 515. Idempotency, rancangan rekonsiliasi, evaluasi klasifikasi, serta contoh manfaat adalah perluasan latihan pengendalian. Angka, perusahaan, diagram, dan skenario latihan di halaman ini adalah ilustrasi buatan kecuali dinyatakan lain. Urutan materi inti mengikuti RPS-SIA, Pembagian Mengajar Gasal 2025/2026, halaman 1; pendalaman di luar bab terjadwal diberi label pelengkap.

Sumber dan batas pembahasan

Richardson Ch. 15 pp. 494–508 (PDF 519–533), terutama evaluasi kebutuhan dan audit pp. 497–507; cloud sebagai penghubung Ch. 6 p. 270 (PDF 295). [NISTIR 8202](https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf) menjadi pelengkap batas tamper-resistance dan oracle. Triple-entry dibahas sebagai konsep shared receipt, bukan standar pembukuan wajib. Angka, perusahaan, diagram, dan skenario latihan di halaman ini adalah ilustrasi buatan kecuali dinyatakan lain. Urutan materi inti mengikuti RPS-SIA, Pembagian Mengajar Gasal 2025/2026, halaman 1; pendalaman di luar bab terjadwal diberi label pelengkap.

## Latihan

Apa yang menghubungkan sebuah blok dengan blok sebelumnya?

Hash mengikat riwayat data; tidak otomatis membuktikan kondisi barang dunia nyata. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).

Apa yang dimaksud oracle problem?

Sensor, petugas dan sistem luar perlu kontrol keandalan. Validasi ledger belum cukup untuk substansi. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).

Apa arti shared receipt pada konsep triple-entry?

Double-entry tetap ada pada masing-masing entitas; shared signed receipt bukan pengganti semua rekonsiliasi. Sumber pelengkap: Grigg (2005). Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).

Bot gagal mendapat respons setelah meminta pembayaran. Kontrol retry yang tepat adalah...

Timeout tidak selalu berarti aksi gagal. Idempotency, status settlement, approval serta log diperlukan. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).

Model mendeteksi fraud dengan akurasi 99% pada populasi yang hampir semuanya normal. Evaluasi berikutnya adalah...

Akurasi tinggi bisa melewatkan semua kejadian langka; kualitas data, drift dan review tetap perlu dinilai. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).

## Flashcard

Blockchain dan batasnya

Hash, signature, konsensus dan replikasi membantu konsistensi riwayat. Integritas ledger belum membuktikan transaksi fisik benar. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).

Oracle problem

Input sensor/petugas/sistem luar dapat salah. Uji sumber, identitas, inspeksi, approval dan exception. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).

Triple-entry

Shared signed receipt mendukung catatan pihak terkait; bukan sisi debit ketiga atau pengganti seluruh double-entry. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).

RPA dan AI

RPA menjalankan aturan berulang; AI/ML memakai kemampuan/pola untuk tugas seperti klasifikasi. Keduanya butuh kontrol. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).

Bot governance

Identitas terpisah, least privilege, vault, approval, pengujian perubahan, exception, log serta retry idempotent. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).

Evaluasi AI

Nilai false positive/negative, precision/recall, mutu data, bias dan drift. Akurasi saja dapat menyesatkan untuk kejadian langka. Rujukan: Richardson AIS 4e, Ch.15 pp.494–516 (PDF 519–541).
