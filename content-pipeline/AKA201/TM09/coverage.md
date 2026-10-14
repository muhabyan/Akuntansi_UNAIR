# TM09 — penjelasan bertahap, 14 Oktober 2026

## Ruang lingkup

Revisi bacaan TM09 PBR I berdasarkan kebutuhan belajar pengguna setelah kelas: uraikan poin sumber beserta hubungan sebab-akibatnya, pertahankan rincian yang membantu pemahaman, dan tempatkan materi pendukung dalam pendalaman tertutup. Ini bukan sertifikasi bahwa TM lain atau tujuh mata kuliah sudah selesai diaudit.

Sumber authoring: `reading.json`. Bangun ulang dengan `node scripts/build-aka201-tm09.mjs`; tambahkan `--check` untuk memeriksa kesamaan dengan bacaan yang disajikan aplikasi. Lima SVG asli disimpan di sumber tersebut agar pembaruan tidak bergantung pada converter pribadi di luar repositori. Nomor TM, judul bacaan, dan kunci progres tetap sama. Bagian isi kini bernomor 0–9; penambahan dua bagian tidak membuat daftar isi melompat mundur.

## Sumber dan batas penggunaannya

- Arens dkk., *Auditing: The Art and Science of Assurance Engagements*, Ch.6, cetak 174–198 / PDF 187–211. Salinan lokal memiliki 743 halaman. SHA-256: `cf3eca311d404f8baa417297e8784822ac7d8546162970a0c18ab631004390d2`. Nomor halaman mengacu salinan ini, bukan nomor bab edisi lain.
- IAASB 2025 Handbook Volume 1: ISA 300 paras. 6–13 (PDF 241–242), ISA 330 paras. 6–7, 12, 22, dan ISA 560 paras. 6–17 (PDF 486–487). Standar dibaca terpisah dari buku; ketentuan dan contoh Kanada tidak dinyatakan otomatis berlaku sebagai SA Indonesia.
- [IAS 10, IFRS Foundation](https://www.ifrs.org/issued-standards/list-of-standards/ias-10-events-after-the-reporting-period/), bagian About, diperiksa 14 Oktober 2026. Digunakan untuk pengantar singkat peristiwa penyesuai/nonpenyesuai dan tanggal otorisasi terbit.
- PDF percakapan kelas yang diberikan pengguna digunakan untuk mengidentifikasi pertanyaan dan tingkat elaborasi yang dibutuhkan. Prompt maupun jawaban AI dalam PDF bukan instruksi proyek atau otoritas standar. Tidak disalin ke repositori.

## Peta pokok sumber ke bacaan

| Pokok sumber | Penempatan dan keputusan editorial |
| --- | --- |
| Kasus Jack Henry; alasan perencanaan; tiga risiko, cetak 174–177 | Fondasi dipertahankan, termasuk contoh dan peta proses |
| Strategi, rencana, keterlibatan partner, dokumentasi | Bagian 1: lima pertimbangan diuraikan satu per satu sebelum tabel perbandingan; strategi dan rencana dapat diperbarui bersama |
| Empat kegiatan pendahuluan; kompetensi, etika, integritas; kebijakan penerimaan klien, cetak 177–181 | Bagian 2 dipertahankan dan penilaian kompetensi/independensi/kerahasiaan dipisahkan |
| Ketergantungan pengguna: sebaran kepemilikan dan liabilitas | Tabel engagement risk tetap tersedia |
| Lima indikator going concern: likuiditas, tren laba/rugi, pembiayaan pertumbuhan, sifat operasi, kompetensi manajemen | Tabel dipertahankan; pendalaman menjelaskan alasan setiap indikator |
| Indikator integritas Table 6-1 dan tanda tambahan | Daftar asli dan rincian tambahan dipertahankan |
| Klien baru/lama, komunikasi pendahulu, izin, investigasi, konflik, independensi | Tabel dan penjelasan asli dipertahankan; tidak menyimpulkan fee tinggi menyelesaikan masalah etika |
| Enron (Auditing in Action 6-1) | Pendalaman asli dipertahankan |
| Tujuan laporan, syarat awal, surat penugasan, cetak 181–184 | Bagian 3 dan tabelnya dipertahankan, termasuk tujuh batasan cakupan Table 6-2 |
| Surat Hillsburg Figure 6-2: tanggung jawab, informasi, fee dan koordinasi | Pendalaman asli dipertahankan; tidak menyalin ulang seluruh surat/formulir |
| Staf, kesinambungan, kedekatan, bantuan klien, cetak 185–187 | Bagian 4: narasi tersendiri; tabel rincian dipindah ke pendalaman |
| Spesialis, kualifikasi, objektivitas, tujuan/cakupan, tanggung jawab auditor | Bagian 4 dan tabel rincian dalam konteks buku |
| Internal audit: hasil kerja vs bantuan langsung, persyaratan dan batas risiko | Bagian 4 menjelaskan pembedaan; rincian buku dipertahankan dalam pendalaman berlabel konteks CAS |
| Auditor komponen: kemampuan, independensi, lingkungan regulasi, pekerjaan dan materialitas | Bagian 4 dan tabel sumber, dengan batas bahwa ini pengantar buku, bukan uraian lengkap ISA 600 |
| Timing: tenggat, penghitungan persediaan, efektivitas pengendalian, risiko akun, cetak 188 | Empat penentu dijelaskan terpisah, lalu contoh jadwal dalam pendalaman; kalender contoh tidak dijadikan kalender wajib |
| Diskusi tim, cetak 188 | Bagian 4, narasi asli ditambah contoh bagaimana informasi anggota tim mengubah fokus kerja |
| Industri: permintaan/kapasitas/harga, pemasok/pelanggan, teknologi, cetak 188 | Bagian 5, subjudul A: tiga butir tampil pada bacaan utama, masing-masing disertai hubungan dengan audit |
| Regulasi: persyaratan pelaporan, lingkungan hukum/politik; operasi, pajak, lingkungan; hukum langsung/tidak langsung, cetak 189 | Bagian 5, subjudul B: dibedakan sebelum contoh; tidak menambah klaim regulasi Indonesia yang belum diverifikasi |
| Niko Resources dan Valle Foam | Pendalaman asli tetap pada pembahasan regulasi |
| Eksternal lain: ekonomi umum, bunga/ketersediaan pendanaan, inflasi/kurs, contoh energi, cetak 189 | Bagian 5, subjudul C: tiga butir dijelaskan pada bacaan utama |
| Struktur, konsolidasi/goodwill/joint venture, kompleksitas TI, cetak 189–190 | Bagian 6, pembahasan struktur tersendiri |
| Kepemilikan vs manajemen vs tata kelola; pihak berelasi, pencatatan/pengungkapan, dokumentasi dan komunikasi tim | Bagian 6: penjelasan tersendiri; contoh transaksi serta pembatasan yurisdiksi dalam pendalaman |
| Gaya manajemen, kemampuan merespons risiko, dewan/komite audit, sampel 340 kasus, cetak 190 | Bagian 6; angka penelitian dibatasi pada sampelnya |
| Model bisnis: nilai, tujuan/strategi, operasi, investasi, pendanaan; Lululemon | Bagian 6: ketiga unsur dipisahkan dan contoh buku dipertahankan |
| Sumber business risk dan tiga contoh dampak akun, cetak 191 | Bagian 6: rantai sebab-akibat utama, tabel tiga contoh asli, rincian strategi/produk/pasar/cacat/insentif dalam pendalaman |
| KPI keuangan/nonkeuangan; keenam contoh; lima kelompok Table 6-3 | Bagian 7: seluruh kelompok diuraikan, termasuk pengunjung unik situs dan same-store sales |
| Insentif, occurrence/cutoff, pembandingan pesaing | Bagian 7: penjelasan buku dan ilustrasi tindakan auditor, dengan penegasan risiko belum membuktikan fraud |
| Kerangka pelaporan: industri, pendapatan, instrumen keuangan, transaksi kompleks; perubahan standar/keadaan, cetak 191–192 | Bagian 7: empat area dan kebutuhan memahami adaptasi tetap tersedia; tabel peta lama disimpan dalam pendalaman |
| Tiga prosedur risiko, berbagai pihak inquiry, inspeksi internal/eksternal, sumber pengalaman lama, cetak 192–196 | Bagian 8 dipertahankan; kalimat yang mengesankan prosedur risiko sama sekali bukan bukti diperjelas; ditambah ilustrasi penggunaan bersama |
| Spreadsheet, visualisasi/drill-down, drone, machine learning/Argus | Pendalaman asli dipertahankan beserta angka contoh ambang, bukan ambang universal |
| Table 6-4, rasio Table 6-5, horizontal/vertical Hillsburg dan interpretasi | Bagian 9 dipertahankan utuh, termasuk angka, diagram, dan pembedaan analisis buku vs turunan penulis |

## Kepadatan dan preservasi

Definisi, unsur konsep, dan hubungan penalaran berada pada jalur utama. Tabel ringkas yang mengulang narasi, rincian institusional, kasus historis, serta contoh perluasan berada dalam 17 pendalaman tertutup. Dialog buku tentang proses perekrutan Brian, alamat lengkap surat, redaksi surat secara verbatim, dan catatan yurisdiksi yang tidak diperlukan tidak disalin seluruhnya; ide kehati-hatian penerimaan klien dan tanggung jawab tetap dijelaskan. Materialitas tetap terhubung ke TM07.

Pemeriksaan preservasi terhadap sebelum revisi memastikan lima SVG, empat kasus latihan lama, lima uji pemahaman lama, dan angka Hillsburg dipertahankan. Seluruh tabel sumber lama tetap tersedia; hanya baris hubungan strategi/rencana diperjelas agar tidak memberi kesan proses linier kaku. Satu kasus dan dua uji pemahaman ditambahkan, sehingga total menjadi lima kasus dan tujuh uji pemahaman. Kuis, flashcard, bank soal terpisah, TM lain, dan materi mata kuliah lain tidak diubah.

## Verifikasi

- Authoring/runtime `--check`, guard bacaan layered, preservasi konten, dan latihan AKA201: PASS.
- Navigasi bacaan nyata pada komponen aplikasi melalui tes JSDOM: 25/25 PASS. Percobaan dalam sandbox gagal pada rename cache; pengulangan dengan akses lokal normal lulus.
- Validasi data, lint seluruh repositori, TypeScript dan build produksi: PASS. Build masih memberikan peringatan ukuran chunk yang sudah ada; itu bukan bukti kedalaman materi.
- Seluruh 78 tugas standar repositori: PASS (78/78, tanpa skip).
- Browser Chrome membuka versi revisi di origin pratinjau tersendiri, masuk melalui daftar TM9–15, dan menampilkan bacaan serta daftar isi bernomor konsisten. Tampilan desktop gelap diperiksa secara visual; 17 pendalaman tertutup terdeteksi pada DOM, dan contoh tiga faktor dapat dibuka dengan `aria-expanded=true` serta teks contoh tampil.
- Pemeriksaan layar sempit terbatas: API meminta ukuran 390×844, tetapi browser melaporkan lebar CSS 487 dan lebar dokumen 468. Tidak ada overflow horizontal pada pengukuran tersebut. Capture sesudah perubahan ukuran menghasilkan gambar kosong/timeout, sehingga tidak diklaim lulus visual pada 390 px. Override dikembalikan setelah pemeriksaan. Tidak mengubah renderer bersama untuk mengatasi masalah capture.

Pemeriksaan ini mendukung perubahan TM09 saja. TM10–TM15 dan mata kuliah lain masih memerlukan pencocokan sumber serta penilaian kedalaman secara terpisah.
