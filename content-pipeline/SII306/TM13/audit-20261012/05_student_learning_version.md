# Teknologi Blockchain, Smart Contracts & Akuntansi Tiga Entri (Triple-Entry Accounting)

Membahas disrupsi teknologi Distributed Ledger Technology (DLT) dan Blockchain terhadap sistem akuntansi. Memahami arsitektur blok, kriptografi hash, konsensus, Smart Contracts, evolusi menuju Triple-Entry Accounting, serta audit atas aset digital.

Gambar 13.1: Struktur Rantai Blok (Blockchain) dan Paradigma Akuntansi Tiga Entri (Triple-Entry Accounting).

Arsitektur Blockchain & Mekanisme Kriptografi

Blockchain adalah buku besar digital terdistribusi (Distributed Ledger Technology / DLT) yang mencatat transaksi secara kronologis dalam rangkaian 'blok' yang saling terhubung menggunakan fungsi hash kriptografi (seperti SHA-256). Setiap blok memuat tiga komponen utama:

Data Transaksi: Catatan peristiwa ekonomi (misal: 'PT A mentransfer 100 token komoditas ke PT B').

Hash Blok Ini: Sidik jari digital unik yang dihasilkan dari komputasi seluruh isi blok saat ini.

Previous Hash (Hash Blok Sebelumnya): Tautan kriptografis ke blok sebelumnya yang menciptakan rantai (chain) yang tidak dapat diputus.

Immutability berarti catatan sulit diubah tanpa memengaruhi hash dan mekanisme validasi jaringan. Batasnya bergantung pada rancangan konsensus, kendali jaringan dan akses kunci. Catatan yang konsisten masih dapat memuat transaksi dunia nyata yang salah. Auditor tetap memeriksa keberadaan, hak, nilai dan pengendalian. Rujukan: Richardson AIS 4e, hal. 497-507 (PDF 522-532).

Revolusi Triple-Entry Accounting

Tabel 13.1: perbandingan pencatatan dan tanda terima. Sumber pelengkap: Grigg (2005), The Initial Role of a Receipt, Recovering Double Entry dan Triple Entry, https://iang.org/papers/triple_entry.html. Gagasan paper dibedakan dari standar akuntansi.

Era Akuntansi | Mekanisme Pembukuan | Kelemahan & Kebutuhan Audit | Pihak yang Memverifikasi

Single-entry | Hanya mencatat penambahan atau pengurangan kas dalam satu daftar. | Tidak ada mekanisme kontrol internal keseimbangan; mudah terjadi kehilangan catatan. | Pencatat itu sendiri (sangat subjektif).

Double-entry | Pada buku masing-masing entitas, transaksi memengaruhi akun dengan total debit sama dengan total kredit. | Keseimbangan debit/kredit tidak membuktikan keberadaan, kelengkapan atau ketepatan nilai transaksi. | Pencatat dan pengendalian internal; auditor menguji bukti yang relevan.

Gagasan triple-entry Grigg (2005) | Tanda terima bertanda tangan digital menjadi bukti bersama pihak terkait, di samping pencatatan mereka. | Perbedaan catatan dapat berkurang; hak, nilai dan kelengkapan transaksi tetap memerlukan pemeriksaan. | Pihak memverifikasi tanda terima; paper 2005 tidak mensyaratkan public blockchain modern.

Penerapan Smart Contracts dalam Rantai Pasok (Supply Chain)

Smart Contract adalah program komputer yang disimpan di dalam blockchain yang mengeksekusi tindakan secara otomatis jika kondisi tertentu yang telah disepakati terpenuhi ('If/Then Statement').

Contoh Siklus Pengadaan Terotomatisasi Smart Contract:

Syarat: 'JIKA sensor IoT pada kontainer mengonfirmasi barang telah tiba di pelabuhan Tanjung Perak dengan suhu terjaga di bawah -18°C DAN bea cukai terverifikasi lolos...'

Eksekusi Otomatis: '...MAKA smart contract seketika melepaskan pembayaran dana dari rekening escrow pembeli ke rekening vendor dan menerbitkan bukti pelunasan digital tanpa menunggu persetujuan faktur kertas selama 30 hari.'

Perlakuan Akuntansi Aset Kripto

Agenda decision IFRIC Juni 2019 membahas cryptocurrency dengan karakteristik tertentu, bukan seluruh token digital. IAS 2 dipakai bila dipegang untuk dijual dalam kegiatan usaha normal; bila IAS 2 tidak berlaku, IAS 38 dipakai. Jangka investasi panjang tidak menjadi syarat tunggal. Periksa hak kontraktual serta pengungkapan, dan jangan memperluas keputusan ini ke semua aset kripto. Rujukan: [IFRIC, Holdings of Cryptocurrencies, Juni 2019, PDF 1-3](https://www.ifrs.org/content/dam/ifrs/supporting-implementation/agenda-decisions/2019/holdings-of-cryptocurrencies-june-2019.pdf). Penomoran Indonesia efektif 1 Januari 2024 adalah PSAK 202 Persediaan dan PSAK 238 Aset Takberwujud, menurut dokumen IAI Perubahan Penomoran PSAK/ISAK, PDF 1-2; pemetaan nomor tidak menggantikan pemeriksaan teks standar nasional.

## Flashcard

Karakteristik Buku Besar Terdistribusi (Blockchain)

Ledger memakai hash, validasi dan aturan jaringan untuk menjaga konsistensi. Algoritme, transparansi dan desentralisasi bergantung rancangan; perubahan sulit dilakukan tanpa jejak, tetapi integritas ledger tidak membuktikan transaksi dunia nyata benar. Rujukan: Richardson et al. AIS 4e · Ch. 15, hal. 494-508 (PDF 519-533).

Triple-Entry Accounting

Grigg (2005) menekankan receipt bersama yang ditandatangani secara kriptografis di samping pencatatan internal. Konsep ini tidak mensyaratkan shared public blockchain. Rujukan: Grigg (2005), Triple Entry Accounting, bagian Signed Receipts, https://iang.org/papers/triple_entry.html.

Smart Contracts (Kontrak Pintar)

Program menjalankan ketentuan yang dikodekan ketika input/kondisi dipenuhi. Input atau oracle dapat salah; eksekusi otomatis tidak sendirian membuktikan hak, kewajiban atau nilai transaksi. Rujukan: Richardson et al. AIS 4e · Ch. 15, hal. 494-508 (PDF 519-533).

Public vs Private (Permissioned) Blockchain

Public (siapa saja boleh bergabung, misal: Bitcoin). Private/Consortium (hanya entitas yang diizinkan dan diverifikasi yang boleh mengakses jaringan). Rujukan: Richardson et al. AIS 4e · Ch. 15, hal. 494-508 (PDF 519-533).

Manfaat Cloud Accounting (SaaS)

Akses laporan keuangan kapan saja di mana saja, skalabilitas kapasitas fleksibel, pencadangan data otomatis, dan biaya modal TI lebih rendah. Rujukan: Richardson et al. AIS 4e · Ch. 15, hal. 494-508 (PDF 519-533).

Risiko Pengendalian Cloud Computing

Periksa ketergantungan vendor, akses, privasi, kontinuitas dan pengendalian yang harus dijalankan pelanggan. Pilih laporan assurance yang sesuai risiko/cakupan serta periode; SOC 1 dan SOC 2 mempunyai tujuan berbeda, bukan kewajiban universal untuk semua cloud. Rujukan: Richardson et al. AIS 4e · Ch. 15, hal. 494-508 (PDF 519-533).

## Kuis TM terdaftar

Dalam arsitektur blockchain, elemen mana yang menghubungkan blok dengan catatan blok sebelumnya? Rujukan: Richardson AIS 4e, hal. 497-499 (PDF 522-524).

Previous hash mengikat data blok sebelumnya. Perubahan data mengubah digest, sehingga validasi hubungan perlu diperiksa ulang. Alamat jaringan dan saldo bukan pengganti hubungan hash; kunci privat tidak disalin sebagai tautan antarbIok. Rujukan: Richardson AIS 4e, hal. 497-499 (PDF 522-524).

Apa peran tambahan pada konsep triple-entry Ian Grigg? Sumber pelengkap primer: Grigg (2005), bagian The Initial Role of a Receipt dan Triple Entry.

Grigg menjelaskan tanda terima bersama yang mendukung catatan pihak terkait. Paper tahun 2005 itu tidak mensyaratkan public blockchain modern. Tanda terima tidak menetapkan satu jurnal universal atau menggantikan pengujian nilai aset. Sumber pelengkap primer: [Grigg (2005), The Initial Role of a Receipt dan Triple Entry](https://iang.org/papers/triple_entry.html).

Kode yang menjalankan tindakan ketika kondisi kontrak terpenuhi disebut apa? Rujukan: Richardson AIS 4e, Ch. 15, Blockchain Applications, hal. 504-507 (PDF 529-532).

Smart contract mengeksekusi kode berdasarkan kondisi yang didefinisikan. Jika syarat bergantung pada sensor atau data luar, keandalan input itu tetap perlu diuji. EDI bertukar dokumen, VPN menghubungkan jaringan dan view menyajikan hasil query. Rujukan: Richardson AIS 4e, Ch. 15, Blockchain Applications, hal. 504-507 (PDF 529-532).

Apa manfaat utama immutability bagi pemeriksaan catatan? Rujukan: Richardson AIS 4e, hal. 497-507 (PDF 522-532).

Hash dan validasi jaringan membuat perubahan catatan lebih mudah ditelusuri. Risiko manipulasi dan kesalahan input tetap perlu diuji; validasi ledger tidak membuktikan keberadaan atau nilai transaksi dunia nyata. Rujukan: Richardson AIS 4e, hal. 497-507 (PDF 522-532).

Mengapa validasi ledger belum cukup sebagai bukti semua asersi laporan keuangan? Rujukan: Richardson AIS 4e, hal. 507 (PDF 532).

Validasi jaringan memeriksa catatan menurut aturan jaringan. Kesepakatan fiktif atau nilai aset keliru masih dapat masuk. Auditor perlu bukti keberadaan, hak, kelengkapan dan penilaian, serta memahami kontrol input. Rujukan: Richardson AIS 4e, hal. 507 (PDF 532).
