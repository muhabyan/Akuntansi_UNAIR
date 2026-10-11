# Lanjutan PR45 dan audit — versi 1 setelah verifikasi browser

**Belum selesai; belum siap push/merge.** Pekerjaan lokal tetap 307157ec5ff1194833520a8dc0f0b84931e80e8f. Main tetap 639be11424eb9d6ba4621a3104d0c26f768f63c4; remote PR45 OPEN/CONFLICTING, head 20557e0463779f3d730929822dd0a41a158850a8. Tidak ada perubahan production baru, checkout asli C:/cek tidak diubah, dan bukti parsial lama tidak ditimpa.

## Hasil percobaan browser baru

Sesi cua di-reset, dokumentasi dimuat, baseline main dibangun ulang dengan log mentah dan preview dijalankan pada origin yang diminta 127.0.0.1:5186. Percobaan Chrome ditolak sebelum halaman dibuka. Setelah pengguna mengonfirmasi “Restart selesai”, sesi di-reset kembali dan Chrome dicoba lagi pada origin yang sama; tetap ditolak.

Pesan persis: **A saved user permission setting blocks this action.** Pesan lengkap tersimpan di resume-state.json. Konfigurasi lokal untuk origin tersebut dibaca secara terarah dan benar-benar berisi access=allow, downloads=allow (source-details.json). Jadi ada ketidakcocokan antara izin lokal yang terbaca dan kebijakan efektif tool pada chat ini. Akar masalah platform belum dapat ditetapkan. Restart sudah dicoba, bukan langkah yang belum dilakukan.

Ini penolakan saved permission, bukan laporan ERR_CONNECTION_REFUSED, bukan error aplikasi, dan bukan kegagalan executable Chrome. Tidak mencoba host/browser/surface/CDP lain atau shell Chrome untuk melewati penolakan. Izin pengguna sudah diberikan; tidak meminta izin untuk tujuan yang sama lagi. Diperlukan pemeriksaan/perbaikan izin aktif tool pada chat ini sebelum QA browser dilanjutkan. Preview milik sesi ini dihentikan setelah percobaan agar port bebas.

## Build dan log mentah

| Pemeriksaan | Head/surface | Hasil | Log mentah |
| --- | --- | --- | --- |
| Baseline npm run build | main 639be11424eb9d6ba4621a3104d0c26f768f63c4 | PASS, 2249 modules | logs/baseline-build-retry2.log |
| PR45 npm run lint | WIP 307157ec5ff1194833520a8dc0f0b84931e80e8f | PASS, source lint 358 files | logs/pr45-lint.log |
| PR45 npm run build / TypeScript | WIP 307157ec5ff1194833520a8dc0f0b84931e80e8f | PASS, 2252 modules | logs/pr45-build.log |
| PR45 npm run test:runtime | WIP 307157ec5ff1194833520a8dc0f0b84931e80e8f, Node/JSDOM+HTTP | PASS | logs/pr45-runtime.log |
| npm run check penuh | Actual browser mandatory | BELUM DIJALANKAN/LULUS | Status dan alasan di resume-state.json; tidak membuat raw log palsu |
| E2E, Manjik R1/R2 browser, lifecycle nyata | Browser | TERTAHAN | Tidak memakai skip atau menonaktifkan tes |

Dua percobaan awal logger baseline gagal karena quoting launcher cmd, sebelum build berjalan; logs/baseline-build.log dan -retry1.log disimpan. Setelah memakai shell launcher standar, retry2 benar-benar menjalankan TypeScript/Vite dan lulus. Dist baseline dan PR45 dipisahkan dan setiap file dist di-hash pada resume-state.json. Runtime mencatat warning nesting p di QuizView; bukan failure, dan tidak diubah pada PR45.

## Cakupan audit yang benar-benar selesai

Inventaris lama tetap 56 TM. **Audit lengkap semantik+sumber+UI: 0/56**; **capture website baru di chat ini: 0**. Tidak menyimpulkan keterbacaan diagram/overflow/375px dari metadata, count, source assets, atau JSDOM. 40 tugas non-browser sesi sebelumnya tetap berstatus bukti lama, bukan check penuh baru.

Pemeriksaan tambahan yang selesai: 42 file AKA201 archive/inbox byte-equal, tujuh objek runtime AKA201 deepEqual dengan hasil converter sumber inbox, identitas buku/PPTX/RPP/kontrak sumber, serta pencocokan terarah contoh Shalla dengan dua tabel sumber asli yang dibuka. Ini dicatat di [_report_rekonsiliasi_sumber_lanjutan1.md](_report_rekonsiliasi_sumber_lanjutan1.md), bukan menaikkan status seluruh TM menjadi selesai.

Sumber MNK201 sudah direkonsiliasi dengan gap spesifik: kontrak 15e/2019, buku dan PPTX lokal 16e/2022; refs runtime TM05–TM07 memakai nomor bab yang berbeda dari kontrak/buku lokal. Tidak mengubah ref/isi dalam PR45. Sumber AKK202 TM01 ditemukan pada RPP, deck99slides dan textbook shared; paket TM01 masih tidak tersedia. Contoh Shalla 95.500 cocok dengan source images slide35/37. AKA201 tidak lagi memiliki ketidakpastian archive→inbox→runtime; pemeriksaan halaman semua fakta masih tersisa.

## Bukti screenshot dan batasnya

provided-reviewer-access.png adalah salinan persis file screenshot reviewer yang disediakan pengguna. File dibuka dan memperlihatkan course home MNU108/onboarding pada desktop. Ini hanya bukti akses pada chat reviewer, bukan audit TM01, bukan baseline main, bukan sertifikasi WIP/build, dan bukan E2E. Dua gambar AKK202 di source-inspection adalah original embedded source images, bukan website screenshot. Manifest membedakan keduanya secara eksplisit.

## Langkah tersisa

Pulihkan izin tool yang efektif pada chat ini; lakukan audit utuh sumber/semantik dan website per56TM pada baseline, 375px terang/gelap dan desktop; QA PR45 build terpisah; lifecycle tanpa reload dan R1/R2; npm run check tanpa skip; telaah guard/preservasi akhir; baru push normal ke branch PR45 yang sama jika semua wajib lulus. Tidak merge. MNU108 TM01 tetap usulan pilot bersyarat. Tidak ada keputusan pilot yang diminta sebelum audit selesai.
