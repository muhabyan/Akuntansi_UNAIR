# Paket Integrasi EKPA Pra UAS TM 8–14

Paket ini dibuat agar materi EKPA dapat digabungkan ke website kumpulan materi mata kuliah tanpa terpotong. Masalah utama pada file HTML interaktif adalah sebagian materi berada di CSS/JavaScript, sehingga AI atau builder website kadang hanya mengambil sebagian kecil konten.

## Isi Paket

1. `EKPA_TM8-14_GABUNGAN_FULLCONTENT.md`
   Versi paling aman untuk diberikan kepada AI. Semua materi tampil sebagai teks Markdown lengkap.

2. `EKPA_TM8-14_GABUNGAN_FRAGMENT.html`
   Fragmen HTML statis. Tidak ada `<html>`, `<head>`, CSS, atau JavaScript. Cocok ditempel ke halaman website yang sudah ada.

3. `ekpa_tm8_14_data.json`
   Data terstruktur untuk backend, CMS, atau generator website.

4. `ekpa_tm8_14_data.js`
   Data siap impor untuk React/Vite/Next.js. Contoh: `import ekpaData from './ekpa_tm8_14_data.js';`

5. Folder `chunks/`
   Materi dipecah per TM dan per bagian. Gunakan ini jika AI sering memotong konteks. Integrasikan satu file demi satu file.

6. `PROMPT_UNTUK_AI_INTEGRASI.txt`
   Prompt siap pakai agar AI tidak meringkas atau menghapus konten.

## Rekomendasi Penggunaan

- Untuk integrasi dengan AI: mulai dari file Markdown, bukan HTML lengkap.
- Untuk React/Vite: gunakan file JavaScript data source.
- Untuk HTML statis: gunakan file fragment HTML.
- Untuk mencegah konten hilang: masukkan file dari folder `chunks/` secara bertahap.

## Checklist Setelah Integrasi

- Ada 7 materi TM: TM 8, 9, 10, 11, 12, 13, dan 14.
- Ada 10 bank kasus.
- Ada 40 flashcard.
- Ada 90 soal latihan.
- Ada kerangka esai, rubrik nilai, dan referensi.
