# Tata Kelola TI, Kerangka COBIT & Audit Sistem Informasi

Mendalami kerangka tata kelola teknologi informasi COBIT 2019, pemisahan tugas dalam departemen TI, serta metodologi audit sistem informasi: Audit Around the Computer vs Audit Through the Computer dan Computer-Assisted Audit Techniques (CAATs).

Gambar 10.1: Domain Tata Kelola TI COBIT 2019 dan Metodologi Audit Sistem Informasi (CAATs).

General IT Controls (GITC) vs Application Controls

Dalam audit sistem informasi, pengendalian TI dibagi menjadi dua tingkatan hierarki yang saling melengkapi:

General IT Controls (GITC): Pengendalian menyeluruh yang berlaku untuk seluruh lingkungan sistem informasi perusahaan. Jika GITC lemah, auditor TIDAK DAPAT mengandalkan Application Controls apa pun. GITC mencakup: Manajemen Akses Pengguna (User Access), Manajemen Perubahan Program (Change Management), Operasi Komputer & Backup, dan Tata Kelola Keamanan Siber.

Application Controls: Pengendalian otomatis yang tertanam di dalam modul aplikasi perangkat lunak tertentu untuk memastikan integritas pemrosesan transaksi. Terdiri dari: Input Controls (misal: Field Check, Validity Check, Range Check, Limit Check), Processing Controls (misal: Run-to-Run Totals), dan Output Controls (misal: Spooling Reconciliation).

Tabel 10.1: Jenis Pengendalian Masukan Aplikasi (Input Controls) dalam SIA

Nama Pengendalian | Aturan Logika | Contoh Kasus Kesalahan yang Dicegah

Field Check / Type Check | Memastikan karakter yang dimasukkan memiliki tipe data yang benar. | Mencegah entri huruf pada kolom 'Jumlah Pembayaran'.

Sign Check | Memeriksa tanda aritmatika (positif/negatif) apakah logis. | Mencegah entri kuantitas jam kerja bernilai negatif.

Limit Check & Range Check | Memastikan nilai berada di bawah batas tertentu atau dalam rentang yang wajar. | Menolak entri jam lembur > 20 jam per minggu atau nilai gaji < UMR.

Completeness Check | Memastikan tidak ada field wajib yang dibiarkan kosong. | Menolak menyimpan faktur jika nomor NPWP pelanggan belum diisi.

Validity Check | Mencocokkan nilai input dengan data master yang valid. | Menolak entri transaksi untuk Kode Akun yang tidak terdaftar di Bagan Akun (COA).

Check Digit Verification | Menghitung angka penguji matematis pada digit terakhir nomor identifikasi. | Mencegah salah ketik nomor rekening bank atau nomor kartu kredit.

Metodologi Audit SI: Around the Computer vs Through the Computer

Tabel 10.2: Perbandingan Pendekatan Audit Sistem Informasi

Dimensi | Audit Around the Computer (Black Box) | Audit Through the Computer (White Box)

Fokus Audit | Mencocokkan input fisik (dokumen sumber) langsung dengan output laporan tanpa menguji logika program. | Menguji integritas logika program, algoritma penghitungan, dan pengendalian otomatis di dalam software.

Kapan Digunakan? | Sistem sederhana, volume transaksi rendah, jejak audit (audit trail) fisik tersedia lengkap. | Sistem kompleks, transaksi real-time tanpa kertas (paperless), pemrosesan cloud ERP berskala besar.

Risiko Utama | Tidak mendeteksi kecurangan logika program yang disisipkan programmer (misal: Salami Fraud yang memotong sisa desimal sen). | Membutuhkan keahlian teknis auditor yang tinggi dan perangkat lunak audit khusus (CAATs).

Teknik Audit Berbantuan Komputer (CAATs)

Test Data Approach: Auditor memasukkan data dummy (termasuk data salah seperti limit kredit minus) ke dalam sistem klien untuk melihat apakah sistem bereaksi menolak transaksi tersebut.

Integrated Test Facility (ITF): Auditor membuat 'entitas/divisi fiktif' di dalam sistem operasional nyata klien dan memproses transaksi uji bersamaan dengan transaksi nyata tanpa mengganggu laporan konsolidasi.

Parallel Simulation: Auditor menulis program independen yang meniru logika perhitungan klien, lalu memasukkan data transaksi nyata klien ke kedua program untuk membandingkan apakah hasilnya 100% identik.

Pemisahan Tugas Wajib di Departemen TI

Programmer/Developer DILARANG KERAS memiliki akses ke lingkungan produksi (Live System). Program yang dibuat oleh Developer harus diuji oleh tim QA independen, disetujui oleh Manajemen Bisnis, dan dideploy ke server produksi HANYA oleh Operator/System Administrator.

## Flashcard

Auditing AROUND the Computer

Mengabaikan pemrosesan komputer internal; auditor hanya mencocokkan dokumen input sumber dengan laporan output cetak (hanya cocok untuk sistem sederhana). Rujukan: Richardson et al. AIS 4e · Ch. 11 dan 13, hal. 403-408 dan 450-463 (PDF 428-433 dan 475-488).

Auditing THROUGH the Computer

Auditor menguji langsung logika pemrograman dan kontrol internal yang tertanam di dalam perangkat lunak komputer. Rujukan: Richardson et al. AIS 4e · Ch. 11 dan 13, hal. 403-408 dan 450-463 (PDF 428-433 dan 475-488).

Test Data Approach (Pendekatan Data Uji)

Auditor memasukkan data transaksi buatan (valid dan tidak valid) ke dalam program klien untuk memverifikasi apakah kontrol sistem menolak data salah. Rujukan: Richardson et al. AIS 4e · Ch. 11 dan 13, hal. 403-408 dan 450-463 (PDF 428-433 dan 475-488).

Parallel Simulation (Simulasi Paralel)

Auditor menulis kode simulasi independen yang menjalankan data transaksi riil klien, lalu membandingkan outputnya dengan hasil produksi sistem klien. Rujukan: Richardson et al. AIS 4e · Ch. 11 dan 13, hal. 403-408 dan 450-463 (PDF 428-433 dan 475-488).

Kerangka Kerja Tata Kelola TI: COBIT 2019

Control Objectives for Information and Related Technologies (ISACA) yang menyelaraskan tata kelola TI dengan tujuan strategis bisnis korporasi. Rujukan: Richardson et al. AIS 4e · Ch. 11 dan 13, hal. 403-408 dan 450-463 (PDF 428-433 dan 475-488).

Pemisahan Tugas Khusus Departemen TI

Analis Sistem (merancang sistem) harus terpisah dari Programmer (menulis kode) dan terpisah dari Operator Komputer (menjalankan live system). Rujukan: Richardson et al. AIS 4e · Ch. 11 dan 13, hal. 403-408 dan 450-463 (PDF 428-433 dan 475-488).

## Kuis TM terdaftar

Dalam kerangka kerja COBIT 2019, domain tata kelola (Governance Domain) yang menjadi tanggung jawab utama Dewan Komisaris dan Direksi adalah...

COBIT 2019 membagi tata kelola dan manajemen: Domain Governance tunggal adalah EDM (Evaluate, Direct, and Monitor). Empat domain lainnya (APO, BAI, DSS, MEA) adalah Domain Manajemen yang dipimpin eksekutif operasional TI.

Apa pembeda audit around dan through the computer dalam pemeriksaan AIS?

Perbedaan terletak pada apakah pemrosesan di dalam sistem juga diuji. Pemilihan prosedur tetap mengikuti risiko dan bukti yang diperlukan. Rujukan: Richardson AIS 4e, Ch.13, Computer-Assisted Audit Techniques, PDF 480-488.

Teknik audit berbantuan komputer (CAATs) di mana auditor memasukkan unit bisnis atau entitas fiktif ke dalam sistem ERP operasional klien untuk memantau pemrosesan transaksi secara live tanpa mencemari laporan keuangan aktual disebut...

Integrated Test Facility (ITF) membuat divisi/entitas dummy dalam sistem live klien. Transaksi audit diproses bersama transaksi riil, lalu jurnal pembalik otomatis diaktifkan untuk mengisolasi agar laporan keuangan publik tidak terdistorsi.

Manakah pemisahan tugas (Segregation of Duties) yang WAJIB diterapkan di dalam struktur internal Departemen Teknologi Informasi (TI)?

Prinsip dasar kontrol umum TI (GITC): Systems Analyst dan Systems Programmer (pembuat kode) harus dipisahkan dari Computer Operators dan Database Administrator (DBA). Programmer tidak boleh memiliki akses langsung memodifikasi live data produksi.

Pengendalian Umum TI (General IT Controls / GITC) mencakup area berikut, KECUALI...

Pemeriksaan validitas limit diskon pada form penjualan individual adalah contoh Pengendalian Aplikasi (Application Control), bukan GITC. GITC adalah kontrol tingkat infrastruktur yang menaungi seluruh aplikasi.
