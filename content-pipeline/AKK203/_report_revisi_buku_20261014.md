# Revisi pencarian dan audit buku ASP, 14 Oktober 2026

[PR draft #61](https://github.com/muhabyan/Akuntansi_UNAIR/pull/61). Revisi ini melanjutkan implementasi, setelah pengguna menegaskan bahwa buku harus dicari mandiri. Audit pertama terlalu cepat menerima ketiadaan buku lokal sebagai batas akhir. Laporan pertama tidak ditimpa; dokumen ini mencatat koreksi dan bukti pencarian lanjutan.

## Hasil pencarian yang nyata

|Buku RPP|Akses yang diperoleh|Isi yang benar-benar dibaca|Batas tersisa|
|---|---|---|---|
|JP|Teks penuh161 halaman dari perpustakaan FEB UIN Jakarta|Bab2 cetak18-29/PDF29-40 dan Bab9 cetak127-140/PDF138-151 seluruhnya, termasuk gambar halaman|RPP menyebut ed.6 tahun2000; teks hak cipta dan Pearson menetapkan ed.6 tahun2010;2000 ed.5|
|IBS|Penerbit dan pratinjau resmi myedisi14 halaman pilihan|Pengantar dan Bab1 cetakiii/4; gambar pratinjau2/3/5/10|Bab2 belum terbuka; preview cetakan2019/hakcipta2006, RPP2011 tidak diasumsikan cetakan yang sama|
|DN|Penerbit ISBN9789790611139 dan beberapa katalog universitas|Spesifikasi dan status akses; tidak mengklaim isi bab|Bab3/8/10 tidak tersedia dari halaman publik yang diperiksa|
|MD|Katalog Airlangga edisi2009 ISBN9789792907797; penerbit/GoogleBooks edisi lebih baru|Identitas edisi dan pembatasan akses; tidak mengklaim Bab8|Digital collection403; pratinjau halaman yang diperiksa terbatas, edisi baru berbeda dari2009|
|Tambahan Mahsun dkk.|Teks penuh279 halaman dari repositori salah satu penulis di USD|Halaman terpilih Bab10/11 mengenai nonlaba,partai dan BLU, dengan gambar|Buku tambahan historis2011, tidak disamakan dengan DN/MD/IBS atau disetujui dosen|

Pencarian memakai judul, penulis, ISBN, edisi dan bab, mencakup penerbit resmi, perpustakaan universitas, repositori penulis, Google Books serta platform yang ditautkan penerbit. Register per buku menyimpan URL dan alasan akses gagal/terbatas. Metadata katalog, sinopsis dan daftar isi tidak disebut sebagai pembacaan bab. Tidak ada pembelian, pengiriman pesan ke pihak lain atau pelewatan login/paywall dalam tugas ini.

## Audit isi dan keputusan

JP Bab2: seluruh enam tantangan pengukuran dipetakan ke pertanyaan analitis. Exhibit2.1-2.6 Eutopia kini dipakai sebagai contoh dan satu kasus inti. Anggaran sekolahA £3.000.000,450murid,70guru; kota £10.000.000,1.950murid,350guru. Hitungan ulang: £6.666,67 dan£5.128,21 per murid; rasio6,43 dan5,57 murid/guru. Buku menampilkan£6.666/£5.128 serta6,4/5,6; kedua bentuk dicatat terpisah. Anggaran hanya proksi biaya, bukan realisasi, dan guru paruh waktu/asisten tidak terhitung. Inspeksi baik tidak menghapus kelemahan hasil tes, satu rasio tidak menentukan seluruh mutu. Grafik baru mempertahankan satuan pound dan dasar hitungan, tidak mengubah angka ke rupiah atau menganggap Eutopia data Indonesia.

JP Bab9: independensi kelembagaan, akses bukti/sumberdaya/pelaporan, materialitas kualitatif dan batas kontrol ditambahkan. Objek anggaran merupakan target/prediksi, berbeda dari laporan transaksi realisasi; tingkat kesimpulan harus mengikuti bukti. Kerangka Inggris/AS dalam buku tidak mengganti mandat APIP/BPK dan SPKN Indonesia. Bab9 tidak mempunyai latihan bernomor; daftar further reading masuk LampiranA, tidak otomatis menjadi artikel dosen TM14.

IBS: pratinjau mendukung hubungan dokumen, pemrosesan, pembagian wewenang, informasi keluaran dan pengendalian dalam desain sistem. Penjelasan tersebut ditambahkan pada TM8. Bab2 menurut daftar isi platform juga mencakup organisasi,formulir/register/jurnal/buku besar,kode rekening,laporan statistik dan kertas kerja; judul subtopik ini memetakan celah, tidak menjadi klaim seluruh mekanik/case sudah dibaca.

Mahsun: perbandingan historis ditambahkan pada TM11-13. Tiga kelas asetneto lama dipisahkan dari ilustrasi DE35. Ambang sumbangan partai Rp15juta/Rp150juta dalam pembahasan aturan1999 tidak dipakai untuk kasus UU2/2011. Gambar11.1-11.3 rumah sakit lama menggunakan laporan aktivitas dan asetneto; paket BLU kini tetap memakai PSAP13/PMK128. Sumber tambahan ini memperkuat konteks tanpa menyamarkan sumber final yang belum diperoleh.

## Cakupan pemeriksaan dan assurance

Register sumber PDF kini25 berkas; IBS preview dan jalur buku lain dicatat terpisah. JP29 halaman gambar (hakcipta/isi dan semua halaman dua bab) ditinjau melalui15 lembar. Mahsun21 halaman terpilih ditinjau melalui11 lembar; IBS4 halaman gambar melalui pratinjau resmi. PDF dan scan sumber tetap lokal dan tidak dimasukkan ke Git.

Jumlah latihan tetap60 kuis,42 kartu,14 kasus. Jumlah visual menjadi41 karena grafik anggaran Eutopia ditambahkan. Contoh pertama TM9 dan kasus pertama TM9 sekarang mendahulukan ilustrasi buku; latihan buatan biayaRp600.000/layanan tetap ada pada kuis. Semua identitas kartu dan seluruh pra-UTS tetap sama. Kuis efisiensi mendapat rujukan JP tanpa mengubah kunci jawaban. Kebenaran perhitungan ilustrasi diuji independen dari kanonik, termasuk pemisahan angka buku dan hitungan ulang.

Status akademik tetap NEEDS_HUMAN_REVIEW karena MD8,DN3/8/10 dan IBS2 penuh belum dapat dibaca, konflik bibliografi JP pada RPP dicatat, teks final SAK/ISAK335 dan artikel dosen tetap belum tersedia. Assurance bertambah untuk Bab2/9 JP yang kini sungguh dibaca. Akses metadata dan pratinjau tidak dipakai untuk menjamin seluruh bab lainnya lengkap. Cara membangun ulang sama dengan README; hasil akhir tes/log/browser dicatat dalam qa-evidence.json setelah pemeriksaan ulang revisi ini.

## Hasil verifikasi akhir revisi

80/80 tes standar lulus,0 gagal,durasi241414ms; lint,TypeScript,build,komponen,source/structure,runtime,E2E ulang dan browser lulus. Browser28 keadaan memeriksa41 visual,overflow0 dan errorKaTeX0. Font SVG ponsel minimum13,18px; kontras minimum9,90terang/12,02gelap.164 PNG terdiri atas132 yang hash identik dengan bukti lama,28frame berubah ditinjau ulang dalam14 lembar,dan4frame grafik baru ditinjau satu per satu.

E2E pertama gagal karena portCDP9222 dipakai aplikasi lain, sehingga target navigasinya keliru. Ulang dengan portCDP9367/preview4287 lulus tanpa perubahan komponen/skrip bersama. Peringatan dependensi,chunkbuild dan nestedp tetap tercatat pada bukti QA; tidak ada kegagalan akhir aktif.

Paket revisi disinkronkan ke ContentAgent dengan hash dan laporan awal dipertahankan. Seluruh pra-UTS,mata kuliah lain serta identitas kartu tetap utuh. PR61 tetap draft,tanpa merge.
