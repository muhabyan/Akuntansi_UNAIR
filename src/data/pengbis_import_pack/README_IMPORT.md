# Paket Import Website — Pengantar Bisnis TM1–14

Paket ini dibuat agar materi Pengantar Bisnis bisa digabungkan ke website kumpulan materi tanpa kehilangan isi. Format HTML interaktif sering bermasalah saat diimpor AI karena accordion, CSS, dan JavaScript membuat sebagian konten dianggap tersembunyi. Karena itu, paket ini menyediakan format **Markdown, JSON, JS module, dan chunks per TM**.

## File utama

- `pengbis_data_structured.json` — paling disarankan untuk website. Konten sudah berbentuk array `blocks`.
- `pengbis_module_data.js` — sama seperti JSON, tetapi siap diimpor di React/Vite/Next.js dengan `import pengbisData from './pengbis_module_data.js'`.
- `pengbis_master_TM1-14_FULL.md` — satu dokumen master lengkap, aman untuk dibaca AI tanpa CSS/JS.
- `pengbis_PRA_UAS_TM8-14_PRIORITAS.md` — khusus Pra-UAS, paling penting.
- `pengbis_PRA_UTS_TM1-7_FONDASI.md` — fondasi Pra-UTS.
- `pengbis_CASE_DAN_LATIHAN.md` — case bank dan latihan esai.
- `pengbis_GLOSSARY_CHEATSHEET.md` — glossary dan cheat sheet.
- `chunks/*.md` — file per TM/per bagian untuk import modular.
- `PROMPT_IMPORT_KE_WEBSITE.txt` — instruksi yang bisa langsung diberikan ke AI/coding agent.

## Struktur kategori

- `pra_uas`: TM8–14, tampilkan sebagai prioritas utama.
- `pra_uts`: TM1–7, tampilkan sebagai fondasi/review.
- `latihan`: case bank dan model jawaban esai.
- `referensi`: glossary dan cheat sheet.

## Cara paling aman untuk website

1. Copy folder ini ke project, misalnya `src/data/pengbis/`.
2. Import `pengbis_module_data.js` atau fetch `pengbis_data_structured.json`.
3. Render berdasarkan `blocks`, urutkan dengan field `order`.
4. Tampilkan `body_markdown` menggunakan markdown renderer.
5. Jangan meringkas isi saat import.

## Estimasi ukuran konten

Total block: 20. Total estimasi kata: 10,604 kata.
