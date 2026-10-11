# AKA201 TM01: Status

| Field | Nilai |
|---|---|
| Mata kuliah | AKA201 Pengauditan Berbasis Risiko I (FEB25603017) |
| TM | 01 (RPS Week 1, Sub-CPMK 1) |
| Topik RPS | Sifat dan tujuan auditing vs akuntansi; permintaan ekonomik atas audit; jasa asurans dan jenis audit; jenis auditor |
| Sumber | ARENS Ch.1 pp.1–19; ISA 200 paras. 3–6, 11–17 |
| Status | **Pilot. Siap diimplementasikan setelah Byan menyetujui tiga keputusan di bawah.** |
| Disusun | Claude (chat), bukan Content Agent. Struktur file mengikuti nama lima file paket standar; susunan isi di dalamnya belum dicocokkan dengan template Content Agent. |

## File

- `00_status.md`: file ini
- `04_canonical_spec.md`: 56 fakta kanonik (C-001 sampai C-090) dengan rujukan halaman/paragraf
- `05_student_learning_version.md`: bacaan mahasiswa, 11 section, 3 kasus latihan, exam toolkit
- `06_implementation_brief.md`: metadata mata kuliah, pemetaan blok, konvensi render, 8 kuis, 12 flashcard, 3 soal esai
- `07_qa_manifest.md`: verifikasi sumber per fakta, checklist konten dan teknis, inkonsistensi

## Sumber dan edisi

| Sumber | Catatan |
|---|---|
| Arens dkk., 15th Canadian ed. (file dari Byan) | RPS menulis 16th Canadian ed. (2024). Semua halaman yang dirujuk RPS Week 1–7 (p.3, 7, 10, 11, 14, 29, 40, 52, 87, 97, 104, 200, 622) cocok dengan file ini, jadi file ini dipakai. Halaman PDF = halaman buku + 13. |
| IAASB 2025 Handbook Vol. 1 | ISA 200 di halaman cetak 99–. Halaman PDF = halaman cetak + 7. |
| SA 200 IAPI (Revisi 2021) | Disebut di RPS, tidak tersedia. Isi diambil dari ISA 200. |

## Keputusan yang dibutuhkan dari Byan

1. **Agency theory.** Selesai di v2: ditambahkan dari sumber primer Jensen & Meckling (1976).
2. **Blok Interpretasi padanan Indonesia (C-090).** Keputusan: ditampilkan (default). Isinya pernyataan umum tanpa nomor regulasi: DJP sebagai padanan auditor CRA, BPK sebagai padanan Auditor General, IAPI mengadopsi ISA. Pilihan: tampilkan atau hapus. Default: tampilkan.
3. **Format paket.** Jika kamu punya contoh paket Content Agent (misalnya lima file PJK301 TM01), kirimkan. TM02 dan seterusnya akan mengikuti strukturnya, dan TM01 bisa disesuaikan.

## Cakupan TM berikutnya (dari RPS)

| TM | Topik | Buku | Standar |
|---|---|---|---|
| 02 | Profesi akuntan publik (KAP, IAPI, IAASB); kerangka SA/ISA; pengendalian mutu | Ch.2 pp.25–49 | SA 220, SPM 1 / ISQM 1 |
| 03 | Dilema etis, kode etik, ancaman dan pengaman independensi | Ch.3 pp.50–85 | IESBA Code; Kode Etik AP Indonesia |
| 04 | Tujuan audit; tanggung jawab manajemen vs auditor; skeptisisme | Ch.4 pp.86–98 | SA 200 |
| 05 | Siklus laporan keuangan; asersi manajemen; tujuan audit per transaksi/saldo | Ch.4 pp.99–125 | SA 315 |
| 06 | Laporan audit; opini tanpa modifikasian; modifikasi opini; EOM; KAM | Ch.18 pp.619–643 | SA 700, 701, 705, 706 |
| 07 | Materialitas perencanaan dan pelaksanaan | Ch.6 pp.199–211 | SA 320 |

Standar yang dibutuhkan TM02–TM07 sudah ada di IAASB Handbook Vol. 1: ISQM 1, ISA 220, ISA 315, ISA 320, ISA 700, 701, 705, 706.

Sumber yang belum tersedia: teks IESBA Code dan Kode Etik AP Indonesia (TM03); UU 5/2011 dan PP 20/2015 (TM02, disebut di referensi RPS); teks SA versi IAPI.

## Revisi v2: penguatan fondasi

Dilakukan setelah audit fundamental TM01–TM07. Tambahan: section 0 "Fondasi" dengan tabel "Kesalahpahaman umum"; section "Uji pemahaman" berisi soal terbuka dengan contoh jawaban dan tanda belum paham; empat flashcard diganti dari hafalan definisi menjadi pertanyaan "kenapa" dan "contoh". Lihat juga `shared/benang_merah_TM01-07.md`.

## Revisi v3: keterbacaan

Kalimat panjang (lebih dari 30 kata) dipecah atau diubah menjadi daftar; setiap section bernomor dibuka dengan blok "Intinya"; kutipan sumber dipindah keluar dari judul; blok pendalaman ditandai agar tertutup secara default. Substansi dan sumber tidak berubah. Aturan tampilan ada di `shared/panduan_tampilan_dan_bahasa.md`.
