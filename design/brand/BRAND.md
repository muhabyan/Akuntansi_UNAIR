# AkuntansiHub — Brand Brief (konsep "Knowledge Panels")

Folder ini adalah sumber acuan desain untuk redesign. Isinya dibaca agen (Codex/Claude Code) sebelum mengubah UI.
File di sini TIDAK ikut ter-bundle ke website.

## Isi folder

| File | Fungsi |
|---|---|
| `concept-board.png` | Brand board konsep (gambar referensi, raster). Dipakai untuk arah visual saja, JANGAN di-embed ke website. |
| `logo-mark.svg` | Mark untuk latar terang (navy + beige). |
| `logo-mark-dark.svg` | Mark untuk latar gelap (paper + beige gelap). |
| `logo-mark-mono.svg` | Mark satu warna (`currentColor`), untuk monokrom/print. |
| `app-icon.svg` | Ikon aplikasi/favicon: tile navy, panel paper + beige. |

SVG di folder ini adalah sumber kebenaran geometri logo. Brand board hanya ilustrasi; kalau bentuknya berbeda, ikuti SVG.

## Logo

- Empat panel: panel kiri, panel atas (penunjuk arah), panel tengah beige, panel kanan. Semua flat, TANPA gradien, bayangan, atau efek kaca (efek di brand board hanya render ilustrasi).
- Wordmark: `AkuntansiHub`. "Akuntansi" tebal, "Hub" regular, warna sama (navy). Font display yang sudah ada di repo (Sora) boleh dipakai.
- Ukuran minimum mark: 20 px. Di bawah itu pakai `app-icon.svg`.
- Mode gelap WAJIB memakai `logo-mark-dark.svg`: panel navy di atas latar gelap hanya 1,15:1 dan praktis hilang.

## Palet (kontras sudah dihitung, WCAG)

### Light
| Token | Hex | Kontras vs bg `#F7F5F0` | Catatan |
|---|---|---|---|
| bg | `#F7F5F0` | – | latar halaman |
| surface | `#FFFFFF` | – | kartu, area baca, modal, quiz |
| text-primary / primary | `#182632` | 14.2 | heading, body, logo |
| text-secondary | `#3E4A55` | 8.3 | |
| text-muted | `#5F5A52` | 6.3 | metadata, caption |
| border | `#E2DDD3` | dekoratif | pemisah, kartu |
| border-strong | `#8C8376` | 3.4 | batas input/kontrol (butuh ≥3:1) |
| beige (supporting) | `#CEC2B2` | 1.6 | DEKORATIF SAJA. Tidak boleh untuk teks, ikon, atau batas kontrol |
| accent / interactive | `#2F6F73` | 5.3 | link, fokus, tombol sekunder. ±5% layar |
| success | `#2E6B45` | 5.8 | selalu bersama ikon + label |
| danger | `#A8322A` | 6.1 | selalu bersama ikon + label |
| warning | `#8A5A00` | 5.4 | |

### Dark (dirancang, bukan invert)
| Token | Hex | Kontras vs bg `#14191F` |
|---|---|---|
| bg | `#14191F` | – |
| surface | `#1B222A` | – |
| surface-elevated | `#222B34` | – |
| text-primary | `#EDE8DF` | 14.5 |
| text-secondary | `#C9C2B6` | 10.0 |
| text-muted | `#A39B8E` | 6.4 |
| border | `#2E3842` | dekoratif |
| border-strong | `#66727E` | 3.6 |
| accent | `#7FB8B4` | 7.9 |
| success | `#7CC49A` | 8.6 |
| danger | `#F08A80` | 7.3 |
| warning | `#E0B25C` | 9.0 |

## Kenyamanan baca (prioritas utama)

- Body text: sans (Manrope, sudah ada), 17–18 px desktop / 16–17 px mobile, line-height 1.7, warna `text-primary`.
- Kolom baca maks ±72ch (±720–780 px). Area baca di atas `surface` putih, bukan langsung di atas `bg`.
- Heading: Sora; jaga jarak atas heading lebih besar dari jarak bawahnya.
- Tabel akuntansi: angka rata kanan, `font-variant-numeric: tabular-nums`, padding rapat, header sticky bila tabel panjang, scroll horizontal di mobile. Garis ganda di bawah total tetap dipertahankan.
- Beige tidak dipakai sebagai latar blok teks panjang (callout pakai `surface` + garis/ikon, bukan blok beige penuh).
- Jangan pakai font serif tipis untuk body; serif di brand board hanya gaya presentasi.
