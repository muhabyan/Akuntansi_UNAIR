# Keamanan Informasi, Ancaman Siber & Manajemen Kelangsungan Bisnis (BCP/DRP)

Menganalisis prinsip CIA Triad (Confidentiality, Integrity, Availability) dalam sistem akuntansi. Membedakan kriptografi simetris vs asimetris, teknik mitigasi serangan siber seperti ransomware dan phishing, serta perancangan Business Continuity Plan (BCP) dan Disaster Recovery Plan (DRP).

Gambar 9.1: Prinsip Keamanan Informasi CIA Triad dan Skema Tanda Tangan Digital Kriptografi Asimetris.

Prinsip CIA Triad dalam Sistem Akuntansi

Confidentiality (Kerahasiaan): Informasi sensitif (seperti data gaji direksi, nomor rekening bank, dan daftar harga negosiasi) terlindung dari akses pihak tidak berwenang. Diimplementasikan dengan enkripsi data dan Role-Based Access Control (RBAC).

Integrity (Integritas): Data transaksi dan laporan keuangan akurat, lengkap, dan terlindung dari modifikasi tidak sah (tamper-proof). Diimplementasikan dengan hash functions (SHA-256) dan write-once logs.

Availability (Ketersediaan): Sistem akuntansi dan data keuangan dapat diakses oleh personil yang berwenang kapan pun dibutuhkan untuk operasional atau audit. Diimplementasikan dengan server redundancy, UPS, dan backup data.

Kriptografi & Tanda Tangan Digital (Digital Signatures)

Tabel 9.1: Perbandingan Kriptografi Simetris vs Asimetris

Karakteristik | Kriptografi Simetris (Secret Key) | Kriptografi Asimetris (Public-Private Key)

Kunci Enkripsi & Dekripsi | Menggunakan SATU kunci rahasia yang sama untuk enkripsi dan dekripsi. | Menggunakan SEPASANG kunci: Public Key (dibagikan bebas) dan Private Key (disimpan rahasia).

Kecepatan Komputasi | Sangat cepat, cocok untuk mengenkripsi database bervolume gigabyte/terabyte. | Lebih lambat (sekitar 1.000x lebih lambat dari simetris), hanya efisien untuk data kecil.

Masalah Utama | Distribusi kunci: bagaimana membagikan kunci rahasia secara aman kepada pihak kedua tanpa disadap? | Distribusi kunci mudah melalui Public Key, namun membutuhkan infrastruktur sertifikat digital (PKI).

Penerapan Akuntansi | Enkripsi seluruh database ERP yang sedang tersimpan (Data at Rest) menggunakan standar AES-256. | Tanda tangan digital (Digital Signature) untuk otorisasi transfer kawat dan validasi faktur elektronik pajak.

Mekanisme Tanda Tangan Digital (Digital Signature): Pengirim membuat ringkasan hash dari dokumen, lalu mengenkripsi hash tersebut menggunakan Private Key miliknya. Penerima mendeskripsi tanda tangan menggunakan Public Key pengirim dan mencocokkan nilai hash. Ini menjamin dua hal kritis: Non-repudiation (pengirim tidak bisa menyangkal telah menyetujui transaksi) dan Data Integrity (dokumen terbukti tidak mengalami perubahan 1 byte pun selama transmisi).

Perencanaan Kelangsungan Bisnis: RPO, RTO, dan Situs Pemulihan

Tabel 9.2: Metrik Pemulihan Bencana dan Perbandingan Fasilitas Alternatif

Parameter | Hot Site | Warm Site | Cold Site

Biaya Investasi | Sangat Mahal (operasi 24/7 paralel). | Moderat (perangkat keras siap, data dipulihkan terjadwal). | Paling Ekonomis (hanya sewa gedung kosong).

Recovery Time Objective (RTO) — Berapa lama sistem boleh mati? | Hitungan menit hingga detik (hampir instan). | Hitungan beberapa jam hingga 1 hari. | Hitungan hari hingga minggu.

Recovery Point Objective (RPO) — Berapa jam transaksi yang boleh hilang? | Mendekati 0 detik (data direplikasi secara sinkron real-time). | Maksimal data backup hari sebelumnya (misal 24 jam). | Seluruh data sejak backup tape fisik terakhir.

Kelayakan Penggunaan | Bank, bursa efek, sistem pembayaran nasional. | Perusahaan manufaktur dan distribusi skala menengah. | Organisasi dengan operasional non-kritis.

Protokol Backup 3-2-1

Untuk mencegah kehancuran data akibat serangan ransomware, terapkan aturan 3-2-1: Simpan 3 salinan data, pada 2 media penyimpanan berbeda (misal SSD server lokal dan cloud storage), dengan 1 salinan disimpan di lokasi offsite yang terputus jaringan (air-gapped immutable backup).

## Flashcard

Triad Keamanan Informasi (CIA Triad)

Confidentiality (Kerahasiaan data dari pihak tak berhak), Integrity (Akurasi & keutuhan data), dan Availability (Ketersediaan sistem saat dibutuhkan). Rujukan: Richardson et al. AIS 4e · Ch. 12, hal. cetak 420-439 (PDF 445-464).

Metode Phishing & Social Engineering

Upaya memanipulasi psikologis korban melalui email atau situs web tiruan palsu untuk mencuri kredensial login akun dan data rahasia. Rujukan: Richardson et al. AIS 4e · Ch. 12, hal. cetak 420-439 (PDF 445-464).

Ransomware & Malware

Perangkat lunak jahat yang mengenkripsi seluruh file dan basis data sistem perusahaan, lalu menuntut uang tebusan untuk kunci pembuka enkripsi. Rujukan: Richardson et al. AIS 4e · Ch. 12, hal. cetak 420-439 (PDF 445-464).

Enkripsi Simetris vs Asimetris

Simetris memakai satu kunci yang sama untuk enkripsi dan dekripsi (cepat). Asimetris memakai sepasang Public Key dan Private Key. Rujukan: Richardson et al. AIS 4e · Ch. 12, hal. cetak 420-439 (PDF 445-464).

Fungsi Tanda Tangan Digital (Digital Signature)

Menjamin keaslian pengirim (autentikasi), keutuhan isi dokumen (integritas), dan pencegahan penyangkalan transaksi (non-repudiation). Rujukan: Richardson et al. AIS 4e · Ch. 12, hal. cetak 420-439 (PDF 445-464).

Pusat Pemulihan Bencana: Hot Site vs Cold Site

Hot Site adalah fasilitas komputasi duplikat lengkap yang siap beroperasi dalam hitungan menit. Cold Site hanya ruang gedung tanpa instalasi komputer lengkap. Rujukan: Richardson et al. AIS 4e · Ch. 12, hal. cetak 420-439 (PDF 445-464).

## Kuis TM terdaftar

Tiga pilar utama keamanan sistem informasi akuntansi yang dikenal sebagai CIA Triad adalah...

CIA Triad: Confidentiality (data hanya bisa dibaca oleh pihak berwenang), Integrity (data terlindung dari manipulasi ilegal), dan Availability (sistem dan data siap diakses saat dibutuhkan operasional bisnis).

Dalam sistem Kriptografi Asimetris (Public-Key Cryptography), jika Perusahaan A ingin mengirimkan dokumen keuangan rahasia ke Auditor B sehingga HANYA Auditor B yang bisa membacanya, maka dokumen tersebut harus dienkripsi menggunakan...

Untuk kerahasiaan (encryption): Pengirim mengenkripsi pesan menggunakan Public Key Penerima (Auditor B). Pesan tersebut secara matematis hanya dapat didekripsi menggunakan Private Key rahasia milik Auditor B.

Fungsi utama dari Tanda Tangan Digital (Digital Signature) yang dibuat dengan mengenkripsi hash dokumen menggunakan Private Key pengirim adalah menjamin...

Digital Signature membuktikan secara kriptografis bahwa dokumen benar-benar berasal dari pemilik private key (otentikasi), isi dokumen tidak diubah satu bit pun saat transit (integritas), dan pengirim tidak dapat menyangkal telah menandatanganinya (non-repudiation).

Dalam perencanaan kelangsungan usaha dan pemulihan bencana (BCP/DRP), metrik RPO (Recovery Point Objective) mengukur...

RPO (Recovery Point Objective) mengukur toleransi kehilangan data dalam satuan waktu (misal: backup tiap jam berarti RPO = 1 jam). Sedangkan RTO (Recovery Time Objective) mengukur target kecepatan memulihkan sistem hingga online kembali.

Serangan siber di mana pelaku menyisipkan kode berbahaya ke formulir input web sehingga sistem database mengeksekusi perintah manipulasi data secara tidak sah disebut...

SQL Injection mengeksploitasi kelemahan validasi form input aplikasi akuntansi. Jika input tidak disanitasi, peretas dapat memasukkan sintaks SQL seperti "' OR '1'='1" untuk mencuri seluruh data laporan keuangan atau menghapus tabel transaksi.
