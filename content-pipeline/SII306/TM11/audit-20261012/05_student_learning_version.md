# Keamanan Informasi, Computer Fraud, dan Pemulihan Bisnis

Tagihan yang benar dapat dibayar ke rekening salah bila akun pengguna dibajak. Pelajari hubungan ancaman, kerentanan, CIA, pengendalian akses, kriptografi, computer fraud, serta rencana pemulihan. Contoh waktu membantu membedakan target bisnis dari kemampuan backup yang sebenarnya.

Email pemasok meminta ganti rekening

Staf utang menerima email yang tampak berasal dari pemasok lama dan langsung mengganti rekening vendor. Barang serta invoice benar, tetapi kas masuk ke pelaku. Keamanan informasi menjadi masalah akuntansi karena **identitas, otorisasi perubahan, dan bukti pembayaran** menentukan keandalan catatan serta perlindungan aset.

1. Memulai dari CIA, ancaman, dan kerentanan

**Threat** adalah sesuatu yang dapat menyebabkan kerugian, seperti pencurian kredensial. **Vulnerability** adalah kelemahan yang dapat dieksploitasi, seperti akun tanpa autentikasi tambahan dan staf yang tidak memverifikasi permintaan. Risiko mempertimbangkan peluang dan dampak ancaman terhadap tujuan. Satu insiden bisa memengaruhi beberapa tujuan sekaligus.

CIA: tujuan keamanan dan dampak akuntansi

Peta buatan berdasarkan pembahasan keamanan Richardson pp. 422–427. CIA bukan tiga jenis perangkat lunak.

1. Confidentiality: Akses hanya untuk pihak berwenang. Contoh: data gaji tidak bocor.

2. Integrity: Data lengkap, sah, dan tidak rusak. Contoh: rekening vendor benar.

3. Availability: Layanan tersedia saat diperlukan. Contoh: ERP bisa dipakai tutup buku.

4. Kontrol berlapis: Akses + validasi + pemulihan. Pilih sesuai ancaman dan dampak.

Ancaman yang perlu dihubungkan dengan kontrol

Ancaman / skenario | Risiko | Pencegahan, deteksi, dan tindak lanjut

Phishing / business email compromise | Kredensial dicuri atau perubahan rekening palsu disetujui. | MFA, pelatihan, konfirmasi melalui kontak lama terverifikasi, review perubahan master.

Ransomware | Akses data terhenti; kemungkinan pencurian data juga perlu diperiksa. | Patch, pembatasan hak, segmentasi, deteksi, cadangan terisolasi, latihan restore.

Malware / perubahan program tak sah | Program membuat transaksi atau perhitungan yang salah. | Pembatasan instalasi, perubahan terotorisasi, pengujian dan log.

DoS / DDoS | Layanan tidak tersedia akibat sumber daya kewalahan. | Kapasitas, penyaringan dan mitigasi jaringan serta prosedur layanan alternatif.

Insider abuse | Pengguna sah menyalahgunakan kewenangan. | Least privilege, pemisahan tugas, review akses, log yang dilindungi.

Kegagalan listrik / perangkat / kesalahan manusia | Catatan hilang atau pemrosesan terputus tanpa serangan. | UPS sesuai kebutuhan, redundansi, validasi input, backup dan pemulihan teruji.

**Defense in depth** berarti menggunakan lapisan yang menangani kegagalan berbeda. Firewall tidak memverifikasi keberadaan barang. MFA membantu mengurangi pembajakan akun, tetapi pengguna yang sudah login masih perlu batas otorisasi. Antivirus tidak menggantikan review perubahan program atau rekonsiliasi transaksi.

2. Siapa masuk, boleh melakukan apa, dan meninggalkan bukti apa?

Tiga konsep akses

Konsep | Pertanyaan | Contoh

Authentication | Apakah identitas pengguna dapat diverifikasi? | Password dan faktor tambahan untuk masuk.

Authorization | Tindakan dan data apa yang boleh diakses? | Staf AP boleh mencatat invoice, tetapi tidak menyetujui pembayaran sendiri.

Accountability / audit trail | Siapa melakukan apa dan kapan? | Log mencatat nilai lama/baru rekening, pengguna, waktu, serta persetujuan.

MFA memakai faktor dari kategori berbeda: sesuatu yang diketahui, dimiliki, atau melekat pada pengguna. Dua password tetap satu kategori faktor. **Role-based access control** memberi hak menurut peran; **least privilege** membatasi hak sebatas kebutuhan. Hak perlu diperiksa saat pegawai berganti jabatan atau keluar, termasuk akun administrator dan akun layanan.

Kontrol perubahan rekening vendor yang dapat diuji

Staf mengajukan permintaan perubahan beserta dokumen.

Petugas independen menghubungi pemasok melalui nomor terverifikasi yang sudah tersimpan, bukan nomor baru pada email.

Penyetuju terpisah memeriksa bukti; sistem merekam nilai lama/baru dan identitas penyetuju.

Laporan perubahan menjelang pembayaran ditinjau dan kejanggalan ditindaklanjuti.

3. Hash, enkripsi, dan tanda tangan digital

Tiga alat, tiga fungsi

Alat | Fungsi utama | Batas

Hash | Membuat ringkasan dari data untuk pembandingan integritas. | Bukan enkripsi yang dapat didekripsi; hash saja tidak membuktikan siapa pembuatnya.

Encryption | Menjaga kerahasiaan dengan kunci untuk mengembalikan plaintext. | Tidak otomatis membuktikan transaksi bisnis benar atau pengguna berwenang.

Digital signature | Menandatangani dengan private key; diverifikasi dengan public key terkait. | Mendukung integritas dan autentikasi asal; bergantung pada pengelolaan kunci dan kepercayaan identitas.

Enkripsi **simetris** menggunakan kunci rahasia bersama dan efisien untuk data berukuran besar. Sistem **asimetris** memakai pasangan public/private key. Jika A mengirim data rahasia kepada B, kerahasiaan ditujukan kepada B; jika A menandatangani, verifikasi memakai public key A. Protokol nyata dapat memadukan metode asimetris untuk pembentukan/pertukaran kunci dan simetris untuk data.

Alur konseptual tanda tangan digital

Ilustrasi umum, tidak menyamakan semua algoritme signature dengan “mengenkripsi hash”. Richardson pp. 425–426 dan pelengkap NIST Digital Signature.

1. Pengirim menyiapkan data: Dokumen + algoritme signature. Private key pengirim dijaga rahasia.

2. Pengirim menandatangani: Hasil: dokumen dan signature. Kerahasiaan perlu enkripsi terpisah.

3. Penerima memverifikasi: Gunakan public key pengirim. Periksa kepercayaan identitas kunci.

4. Interpretasikan hasil: Valid: data dan signature cocok. Tidak membuktikan barang ada.

Batas kriptografi

Signature yang valid tidak otomatis membuktikan pemilik manusia sengaja menyetujui transaksi jika kunci dicuri. Dukungan non-repudiation bergantung pada identitas, perlindungan kunci, dan bukti proses. SHA-256 menghasilkan 256 bit = 32 byte, umumnya ditulis sebagai 64 karakter heksadesimal; byte dan karakter tidak sama.

4. Computer fraud dan fraud triangle

Fraud triangle membantu menilai **pressure/incentive**, **opportunity**, dan **rationalization**. Tekanan target laba dapat memberi dorongan; hak akses tanpa pengawasan memberi peluang; pelaku dapat membenarkan tindakannya sebagai “pinjaman sementara”. Kerangka ini membantu asesmen, tetapi keberadaan tekanan bukan bukti bahwa seseorang berbuat curang. Richardson pp. 428–431.

Titik manipulasi dalam SIA

Titik | Contoh skema | Kontrol / bukti audit

Input | Invoice fiktif dimasukkan sebagai pembelian. | Verifikasi vendor dan penerimaan; cocokkan dokumen sumber.

Program / processing | Logika komisi diubah untuk menguntungkan akun tertentu. | Review perubahan, test data, reperformance independen.

Data tersimpan | Rekening vendor diubah oleh orang dalam. | Pembatasan master data dan log perubahan yang ditinjau.

Output | Laporan exception dihapus sebelum ditinjau. | Distribusi ke reviewer independen; rekonsiliasi kelengkapan laporan.

Menangani insiden secara terarah

Identifikasi dan nilai insiden: sistem, data, pihak, serta dampak yang terpengaruh.

Batasi penyebaran sesuai prosedur insiden; jaga bukti dan koordinasi dengan penanggung jawab.

Hilangkan penyebab dan pulihkan dari sumber yang dipercaya.

Validasi integritas data, rekonsiliasi transaksi tertunda, dan setujui pengoperasian kembali.

Evaluasi akar masalah, perbaiki kontrol, dan lakukan pemberitahuan sesuai ketentuan yang berlaku.

5. BCP, DRP, dan target pemulihan

**Business continuity plan (BCP)** menjelaskan bagaimana layanan penting tetap berjalan: personel, lokasi, komunikasi, pihak ketiga, dan prosedur alternatif. **Disaster recovery plan (DRP)** berfokus pada pemulihan infrastruktur dan layanan TI pendukungnya. Analisis dampak bisnis membantu menentukan urutan prioritas, kebutuhan sumber daya, dan target pemulihan.

RPO dan RTO menjawab pertanyaan berbeda

Metrik | Pertanyaan | Contoh target

Recovery Point Objective (RPO) | Ke titik waktu mana data harus dapat dikembalikan? | Toleransi kehilangan data 15 menit sebelum gangguan.

Recovery Time Objective (RTO) | Berapa lama pemulihan layanan dapat ditoleransi? | Layanan pembayaran harus pulih dalam 2 jam.

Target adalah kebutuhan bisnis. Interval backup dan kemampuan restore adalah rancangan untuk memenuhi target. Backup tiap jam bisa memberikan potensi kehilangan mendekati satu jam bila semua salinan valid, tetapi itu tidak membuktikan target RPO satu jam sudah disetujui atau terpenuhi. Periksa keberhasilan backup, log transaksi, replikasi, dan uji restore.

Dua arah waktu: kehilangan data dan pemulihan layanan

Ilustrasi buatan, waktu setempat pada hari yang sama. Ruas waktu skematis. Target kasus: RPO 15 menit dan RTO 2 jam; kedua target tidak terpenuhi.

10.00: backup terakhir yang berhasil diverifikasi.

10.40: insiden terjadi; ada potensi kehilangan 40 menit data.

13.10: layanan pulih; durasi pemulihan 2 jam 30 menit.

Garis waktu bersifat skematis; panjang ruas tidak mewakili skala menit.

Hitungan bertahap: dua target gagal

Asumsi kasus: backup valid terakhir 10.00, insiden 10.40, sistem pulih 13.10. Tidak ada log/replikasi untuk mengembalikan transaksi setelah backup.

Potensi kehilangan data = 10.40 − 10.00 = 40 menit; target RPO 15 menit terlampaui 25 menit.

Durasi pulih = 13.10 − 10.40 = 2 jam 30 menit; target RTO 2 jam terlampaui 30 menit.

Respons: perbaiki kemampuan pemulihan data dan layanan secara terpisah. Jangan hanya menambah backup tanpa menguji durasi serta integritas restore.

Pilihan situs pemulihan

Pilihan | Kesiapan | Pertimbangan

Cold site | Lokasi dan fasilitas dasar; banyak perangkat/data perlu disiapkan. | Biaya relatif rendah, waktu pemulihan cenderung lebih panjang.

Warm site | Sebagian infrastruktur tersedia, masih perlu konfigurasi dan data. | Kompromi biaya dan kesiapan; uji ketergantungan.

Hot site | Infrastruktur relatif siap, dilengkapi mekanisme pemulihan data. | Biaya lebih tinggi; kesiapan aplikasi dan data tetap harus dibuktikan.

Backup yang bisa dipakai

Prinsip 3-2-1: tiga salinan, dua jenis media, satu di lokasi berbeda. Offsite tidak otomatis offline atau immutable. Perlindungan dari penghapusan/ransomware, pemisahan kredensial, dan uji restore tetap perlu ditentukan. RAID atau replikasi langsung dapat menyalin kerusakan dan tidak menggantikan backup.

6. Pihak ketiga, cloud, dan laporan SOC

Memindahkan sistem ke penyedia layanan memindahkan sebagian kegiatan, bukan seluruh tanggung jawab pengguna. Periksa hak akses perusahaan sendiri, kontrak, lokasi/retensi data, pemulihan, ketergantungan jaringan, serta kontrol pengguna yang disyaratkan laporan penyedia.

SOC 1, SOC 2, dan Type 1/Type 2

Membaca lingkup assurance penyedia

Istilah | Fokus

SOC 1 | Kontrol organisasi jasa yang relevan terhadap pengendalian internal pelaporan keuangan pengguna.

SOC 2 | Kontrol terhadap kriteria Trust Services sesuai lingkup laporan, termasuk security dan kategori relevan lainnya.

Type 1 | Rancangan kontrol pada tanggal tertentu.

Type 2 | Rancangan dan efektivitas operasi selama periode tertentu.

Periksa periode, cakupan layanan, pengecualian, subservice organization, serta complementary user entity controls. Logo atau sertifikat pemasaran tidak menggantikan pembacaan laporan yang sesuai. Richardson pp. 436–438.

7. Uji pemahaman

Dokumen pembayaran telah dienkripsi dan ditandatangani. Apakah cukup untuk menyetujui pembayaran?

Belum. Periksa kewenangan penyetuju, kepercayaan identitas kunci, bukti penerimaan, kelengkapan invoice, dan rekening tujuan. Kriptografi melindungi aspek data dan asal, bukan substansi seluruh transaksi.

Target RPO 30 menit dan RTO 3 jam. Backup terakhir 08.00, insiden 09.20, pulih 11.30 tanpa log tambahan. Evaluasi hasilnya.

Data berisiko hilang 80 menit, sehingga target RPO terlampaui 50 menit. Waktu pulih 2 jam 10 menit memenuhi target RTO. Memenuhi RTO tidak menutupi kegagalan RPO.

Sumber dan batas pembahasan

Richardson Ch. 12 pp. 420–439, terutama kriptografi pp. 425–426, computer fraud pp. 428–431, SOC dan recovery pp. 436–439. Definisi tambahan: [NIST RPO](https://csrc.nist.gov/glossary/term/recovery_point_objective), [NIST RTO](https://csrc.nist.gov/glossary/term/recovery_time_objective), [NIST digital signature](https://csrc.nist.gov/glossary/term/digital_signature). Angka, perusahaan, diagram, dan skenario latihan di halaman ini adalah ilustrasi buatan kecuali dinyatakan lain. Urutan materi inti mengikuti RPS-SIA, Pembagian Mengajar Gasal 2025/2026, halaman 1; pendalaman di luar bab terjadwal diberi label pelengkap.

## Latihan

Tiga tujuan CIA adalah...

Kerahasiaan, keutuhan dan ketersediaan dapat terdampak bersamaan dalam satu insiden. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).

Apa batas tanda tangan digital yang valid?

Signature bukan bukti seluruh asersi bisnis. Kepercayaan identitas dan pengelolaan private key penting. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).

Target RPO 30 menit. Backup valid 08.00, insiden 09.20, tanpa log tambahan. Hasil evaluasi adalah...

Bandingkan kemampuan aktual dengan target. Interval backup bukan otomatis sasaran RPO. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).

Apa perbedaan authentication dan authorization?

Login yang sah tidak memberikan hak tak terbatas; akses perlu dibatasi menurut peran. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).

BCP dan DRP berbeda terutama karena...

Manusia, komunikasi, lokasi dan prosedur alternatif merupakan bagian kelangsungan bisnis. Restore TI mendukungnya. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).

## Flashcard

CIA

Confidentiality: rahasia; integrity: utuh/akurat; availability: tersedia. Satu insiden dapat memengaruhi beberapa tujuan. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).

Authentication dan authorization

Verifikasi identitas berbeda dari pembatasan tindakan; pengguna sah tetap memerlukan least privilege. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).

Hash, encryption, signature

Hash merangkum integritas; encryption menjaga rahasia; signature mendukung asal/integritas dengan kepercayaan kunci. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).

RPO versus RTO

RPO: titik pemulihan data/toleransi kehilangan. RTO: target durasi pemulihan layanan. Interval backup bukan otomatis target. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).

Fraud triangle

Pressure/incentive, opportunity, rationalization membantu asesmen risiko; keberadaannya belum bukti individu curang. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).

BCP, DRP dan SOC

BCP mencakup kelangsungan bisnis; DRP pemulihan TI. SOC 1 fokus ICFR pengguna; SOC 2 kriteria Trust Services sesuai cakupan. Rujukan: Richardson AIS 4e, Ch.12 pp.420–439 (PDF 445–464).
