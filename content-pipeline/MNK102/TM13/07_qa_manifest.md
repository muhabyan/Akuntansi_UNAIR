# QA MNK102 TM13

Status konten: READY_WITH_SCOPE_LIMITATION

05 SHA256: d0068fe5262287a70b1c63426d697b59d1e0338c74ff1a8257e2e45a92222979
Visual: 2; self-check Inti: 6; contoh sumber: 2.

Rumus contoh diperiksa dari input buku/artikel, satuan dan pembulatan dijelaskan. Tidak ada jurnal akuntansi yang perlu dibuat pada topik ini. Batas sumber: Bab 19 pada kontrak edisi 15 dipetakan ke Bab 18 edisi 16. Data kurs buku bersifat historis. Pembulatan forward Swiss dihitung ulang dan sesuai kunci buku.

## Penilaian gaya

Sampel: paragraf pembuka konsep, pembahasan contoh pertama, catatan sumber. Rubrik: ketepatan sumber, bahasa, alur, istilah, keterbacaan; penilaian editorial 8/8/8/8/8 = 40/50. Pemeriksaan mesin frasa terlarang dan em dash wajib nol. Penilaian ini bukan hasil uji pembaca manusia.

## Pengujian

Bukti teknis terpusat di docs/mnk102-pra-uas-audit.md; status tes tidak dinyatakan lulus sampai dijalankan pada revisi akhir.


## Verifikasi akhir

Lint, TypeScript, build, 70/70 tes standar, runtime, E2E port terisolasi, dan browser MNK102 lulus. Detail dan batas baseline ada pada docs/mnk102-pra-uas-audit.md. Tidak ada kegagalan akhir.
