# Audit UTS AkuntansiHub — tahap pemeriksaan kode

**Tanggal:** 25 September 2026

**Versi yang diperiksa:** `muhabyan/Akuntansi_UNAIR`, cabang `main`, commit `5ecf5058234198b07392ab4105cecee105e4ca21`

**Empat mata kuliah yang sudah dikerjakan:** Akuntansi Keuangan Menengah II (AKM II, `AKK202`), Perpajakan II (`PJK301`), Sistem Informasi Akuntansi (SIA, `SII306`), dan Manajemen Keuangan (`MNK201`). **PBR I dikecualikan** karena belum termasuk kelompok yang selesai. Cakupan utama adalah TM01–TM07 dan review UTS.

Pemeriksaan ini membaca kode sumber serta mengeksekusi validasi dan build. Ketepatan seluruh isi terhadap slide/RPS dosen dan tampilan situs live masih memerlukan pemeriksaan tersendiri.

## Ringkasan empat mata kuliah

| Mata kuliah | Bacaan TM1–7 | Kuis UTS | Flashcard TM1–7 | Bank kasus UTS | Hasil awal |
| --- | ---: | ---: | ---: | ---: | --- |
| AKM II | 7/7 | 40 | 46 | 8 | Validator materi dan kesesuaian latihan lulus. |
| Perpajakan II | 7/7 | 35 | 42 | 7 | Validator khusus lulus; ada kesalahan judul regulasi dalam daftar referensi. |
| SIA | 7/7 | 35 | 42 | 7 | Validator materi dan kesesuaian latihan lulus. |
| Manajemen Keuangan | 7/7 | 35 | 42 | 7 | Ada 93 masalah render materi; pengujian proyek terhenti pada gate ini. |

**Kesimpulan operasional:** Keempat mata kuliah punya bacaan dan jalur latihan UTS yang terhubung. AKM II, SIA, dan Perpajakan II lulus validator khusus yang tersedia. Pada commit GitHub yang diaudit, Manajemen Keuangan masih gagal di pemeriksaan render. Handoff Antigravity menyatakan masalah tersebut telah diperbaiki dalam working copy lokal yang belum di-commit; hasil perbaikannya belum dapat diverifikasi dari commit GitHub ini. Jumlah konten dan kelulusan validator tidak membuktikan akurasi seluruh materi terhadap bahan dosen.

## Catatan handoff Antigravity yang diterima sesudah audit

Dokumen `HANDOFF_MNK201.md` menjelaskan pekerjaan Antigravity di `C:\cek`. Ia menyatakan telah memperbaiki benturan simbol dolar dengan parser matematika pada TM4–TM6 dan TM8, escape KaTeX di TM7–TM8, serta backslash yang berubah menjadi karakter kontrol di TM4. Ia juga menyatakan telah mengembalikan ekspor `TIMED_EXAM_SETS` dan `SESSION_VERSIONS` pada `QuizView.tsx` untuk validator simulator PTE. Selain itu, ia merapikan bahasa serta memberi analogi, contoh hitung bertahap, dan kotak jebakan ujian pada materi Manajemen Keuangan.

Handoff tersebut **mencantumkan delapan file yang masih berubah tetapi belum di-commit** (`QuizView.tsx`, TM1, TM2, TM4, TM5, TM6, TM7, TM8). Bagian verifikasi berisi perintah dan *output yang diharapkan*, bukan log hasil uji yang bisa aku reproduksi pada file lokal Antigravity. Remote `main` masih menunjuk commit `5ecf505`, tempat 93 masalah di bawah terdeteksi. Karena itu, temuan ini tetap benar untuk versi GitHub yang diaudit, tetapi **status working copy Antigravity belum diketahui**. Jangan meminta pembuatan ulang perbaikan yang sudah dilaporkan sebelum membandingkan versi lokal atau commit baru dan menjalankan ulang guard render, validator PTE, build, serta lint.

## Temuan prioritas

### 1. Manajemen Keuangan: 93 masalah render pada commit GitHub yang diaudit — tinggi

`node scripts/test-render-s1.mjs` gagal dengan **93 masalah baru, seluruhnya pada `MNK201`**: 50 kesalahan KaTeX, 39 kejadian tanda `$` mata uang yang dapat terbaca sebagai pembatas rumus, dan 4 karakter kontrol akibat escape LaTeX yang salah. Persebarannya: TM2 (1), TM4 (14), TM5 (1), TM6 (67), TM7 (2), TM8 (4), dan salinan review UTS (4). TM6 paling mendesak.

Contoh pada commit tersebut: `src/data/mankeu/modules/tm7.ts:178` memakai `&` di dalam `\\text{...}` sehingga KaTeX menolak rumus. Rumus terminal cash flow pada baris 197 juga tidak terurai dengan benar. Sejumlah teks di TM6 mencampur simbol mata uang dolar dengan pembatas matematika inline. Handoff menyebut perbaikan atas contoh ini di working copy lokal. Jalankan ulang pengujian pada **hasil kerja lokal/commit baru** untuk memastikan seluruh temuan telah hilang; jangan hanya mengecualikan temuan dari validator.

### 2. AKM II: materi dan latihan UTS terhubung, dengan satu batas cakupan TM8 — informasi

`node scripts/test-akk202-canonical.mjs` lulus untuk bacaan TM1–7. Validator melaporkan 127 jurnal seimbang dan 95 rumus valid dalam cakupannya. `node scripts/test-akk202-alignment.mjs` juga lulus: review UTS berdiri sendiri mempunyai 12 bagian, 8 latihan, dan 39 jurnal seimbang; kuis UTS 40 soal, flashcard 46 kartu, serta bank UTS 8 kasus selaras menurut pemeriksaan otomatis. Audit mandiri atas indeks jawaban dan duplikasi tidak menemukan indeks yang melampaui pilihan maupun soal identik.

Bacaan TM8 tidak dimuat ke `AKK202_READINGS` secara sengaja; review UTS tersedia sebagai entitas `uts` terpisah dengan `tm: 0`. Jadi untuk **audit UTS**, buka review melalui jalur review, bukan menganggap `modules/tm8.ts` sebagai bacaan aktif. Katalog masih mencantumkan TM8 sebagai review; konsistensi tombol “Baca” TM8 dapat ditinjau saat audit antarmuka, tetapi ini tidak menghilangkan review UTS yang aktif.

### 3. Perpajakan II: judul rujukan PP 20/2026 keliru — sedang

Daftar referensi `src/data/courseData.ts` memberi judul PP No. 20 Tahun 2026 sebagai **“Perlakuan Perpajakan atas Penghasilan Tertentu”**. Judul resmi adalah **“Perubahan atas Peraturan Pemerintah Nomor 55 Tahun 2022 tentang Penyesuaian Pengaturan di Bidang Pajak Penghasilan”**, menurut [JDIH Kemenkeu](https://jdih.kemenkeu.go.id/dok/pp-20-tahun-2026). Ini kesalahan bibliografi, bukan bukti bahwa seluruh uraian peraturannya salah. Sampel tarif final 0,5%, batas omzet Rp4,8 miliar, dan perubahan batas waktu bagi WP orang pribadi sesuai [penjelasan DJP](https://pajak.go.id/id/siaran-pers/pph-final-umkm-tetap-05-persen-djp-perkuat-ketepatan-sasaran). Setiap klaim pasal dan contoh hitung tetap perlu dicocokkan dengan hukum primer.

### 4. Lint repositori gagal dengan 51 error — sedang

`npm run lint` gagal dengan **51 error**. Sebagian besar berkaitan dengan escape dalam konten baru, terutama Manajemen Keuangan; sebagian lain ada pada komponen dan skrip lintas mata kuliah. `npm run build` lulus. Build yang berhasil tidak menggantikan pemeriksaan render maupun lint. Setelah masalah konten diperbaiki, jalankan lint kembali dan pisahkan error yang berasal dari empat mata kuliah ini dari error global.

### 5. Penomoran setelah UTS perlu ditinjau kemudian — di luar prioritas utama

Bacaan TM8 Manajemen Keuangan dipakai sebagai review UTS, sedangkan kuis UAS berlabel TM8 sudah memuat teori struktur modal yang bacaan utamanya ada pada TM9. Ini dapat mengacaukan filter latihan per TM pada periode UAS. Untuk AKM II, review UTS sudah dipisah sebagai entitas sendiri. Penataan ulang lintasan UAS dilakukan setelah empat paket UTS lolos pemeriksaan.

## Bukti pemeriksaan

| Pemeriksaan | Hasil pada commit yang diaudit |
| --- | --- |
| `npm run build` | Lulus. Ada peringatan ukuran beberapa chunk, tanpa kegagalan build. |
| `npm run lint` | Gagal, 51 error. |
| `node scripts/test-akk202-canonical.mjs` | Lulus untuk materi AKM II TM1–7. |
| `node scripts/test-akk202-alignment.mjs` | Lulus untuk review, 40 kuis, 46 flashcard, dan 8 kasus UTS. |
| `node scripts/test-sia-canonical.mjs` | Lulus. |
| `node scripts/test-aks301-alignment.mjs` | Lulus: 35 kuis, 42 flashcard, 7 kasus UTS. Nama skrip memakai kode lama `AKS301`; katalog aktif SIA memakai `SII306`. |
| `node scripts/test-pjk301-canonical.mjs` dan `test-pjk301-alignment.mjs` | Lulus: 35 kuis, 42 flashcard, 7 kasus UTS. |
| `node scripts/validate-data.mjs` | Lulus. |
| `npm test` | Gagal pada `render_s1_guard` setelah 11 pemeriksaan sebelumnya lulus; rinciannya 93 masalah Manajemen Keuangan. |
| Pemeriksaan jawaban dan duplikasi kuis empat paket UTS | Tidak ditemukan indeks jawaban di luar pilihan atau soal identik. |
| Hitung ulang sampel kasus Proyek S vs L, MNK TM6 | NPV S ≈ 51,82; NPV L ≈ 135,26; IRR L ≈ 12,70%, sesuai contoh yang diperiksa. Ini satu sampel, bukan verifikasi seluruh angka. |

## Batas pemeriksaan dan tindak lanjut

1. **Bahan kuliah:** RPS, PPT dosen, lembar asistensi, bab buku, dan soal sumber untuk keempat mata kuliah belum dibandingkan satu per satu dengan situs. Cocokkan setiap TM ke halaman/slide asal, hitung ulang contoh angka, dan periksa kunci jawaban. Khusus Perpajakan II, gunakan regulasi primer yang berlaku pada tanggal kasus.
2. **Tampilan nyata:** Situs live dan versi mobile belum berhasil diperiksa secara visual pada sesi ini. Setelah masalah render diperbaiki, uji keterbacaan tabel, rumus, jurnal, navigasi review UTS, dan perilaku kuis di desktop serta ponsel.
3. **Versi produksi:** Yang diaudit adalah commit `main` di atas. Kesamaannya dengan versi yang terpasang di `akuntansihub.my.id` belum diverifikasi.
4. **Pekerjaan paralel:** PBR I yang sedang akan dikerjakan dengan Claude Code berada di luar laporan ini. Tidak ada file proyek atau cabang jarak jauh yang diubah selama audit.

**Urutan kerja:** amankan delapan file yang disebut handoff tanpa mencampur pekerjaan Claude Code pada PBR I → verifikasi hasil lokal/commit baru dengan guard render, validator PTE, build, dan lint → perbaiki temuan yang masih tersisa → cocokkan sumber akademik/primer keempat mata kuliah → uji tampilan dan interaksi → pastikan produksi memakai commit yang telah lolos → tinjau penomoran TM8 pada jalur UAS.
