# Implementasi TM12

Bangun ulang dari04 JSON (78b24fdb1a2db71dc54edf4ce05fd86f51897499f19db167be3f9ba8d75b00d4): node scripts/build-akk203-pra-uas.mjs.

Visual:

```json
[
  {
    "id": "ASP-UAS-12-KILAT",
    "type": "process",
    "title": "Peta Laporan Keuangan Nonlaba: Partai Politik",
    "nodes": [
      {
        "title": "Tentukan konteks",
        "items": [
          "PSAK terkait; DN Bab 3; peraturan terkait, RPP PDF 5"
        ]
      },
      {
        "title": "Sumber dana partai dan tujuan pencatatan",
        "items": []
      },
      {
        "title": "Laporan entitas dan LPJ bantuan mempunyai ruang berbeda",
        "items": []
      },
      {
        "title": "Sumbangan: kategori donor dan batas tahun",
        "items": []
      },
      {
        "title": "Bantuan: suara, tingkat dan prioritas penggunaan",
        "items": []
      },
      {
        "title": "LPJ: bukti menghubungkan penerimaan dan kegiatan",
        "items": []
      },
      {
        "title": "Menyusun laporan entitas dan rekonsiliasi bantuan",
        "items": []
      }
    ],
    "source": "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "alt": "Peta Laporan Keuangan Nonlaba: Partai Politik. Tentukan konteks → Sumber dana partai dan tujuan pencatatan → Laporan entitas dan LPJ bantuan mempunyai ruang berbeda → Sumbangan: kategori donor dan batas tahun → Bantuan: suara, tingkat dan prioritas penggunaan → LPJ: bukti menghubungkan penerimaan dan kegiatan → Menyusun laporan entitas dan rekonsiliasi bantuan",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-12-DANA",
    "type": "parallel",
    "title": "Sumber dana dan jejak penggunaannya",
    "nodes": [
      {
        "title": "Iuran anggota",
        "items": [
          "Bukti dan aturan AD/ART"
        ]
      },
      {
        "title": "Sumbangan sah",
        "items": [
          "Identitas, nilai dan bentuk"
        ]
      },
      {
        "title": "Bantuan APBN/APBD",
        "items": [
          "Tingkat, suara dan dasar alokasi"
        ]
      }
    ],
    "source": "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "alt": "Sumber dana dan jejak penggunaannya. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka.",
    "result": "Pembukuan entitas dengan rincian per sumber dan penggunaan"
  },
  {
    "id": "ASP-UAS-12-LPJ",
    "type": "process",
    "title": "Jejak LPJ bantuan",
    "nodes": [
      {
        "title": "Bantuan diterima dan bukti disimpan",
        "items": []
      },
      {
        "title": "Buku kas dan rincian kegiatan",
        "items": []
      },
      {
        "title": "Rekap penerimaan serta belanja",
        "items": []
      },
      {
        "title": "LPJ kepada BPK dalam tenggat",
        "items": []
      },
      {
        "title": "Pemeriksaan dan laporan sesuai tingkat",
        "items": []
      }
    ],
    "source": "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf) [Permendagri 36/2018 Ps.27-37 dan lampiran LPJ; cetak/PDF 18-22,31-34; dibaca bersama perubahan 78/2020](https://peraturan.go.id/files/bn630-2018.pdf#page=18)",
    "alt": "Jejak LPJ bantuan. Bantuan diterima dan bukti disimpan → Buku kas dan rincian kegiatan → Rekap penerimaan serta belanja → LPJ kepada BPK dalam tenggat → Pemeriksaan dan laporan sesuai tingkat",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-12-AUDIT",
    "type": "parallel",
    "title": "Jalur pertanggungjawaban partai",
    "nodes": [
      {
        "title": "Seluruh keuangan entitas",
        "items": [
          "Ps.39 → akuntan publik → pengumuman"
        ]
      },
      {
        "title": "Bantuan APBN/APBD",
        "items": [
          "Ps.34A → BPK → pihak pemerintah sesuai tingkat"
        ]
      }
    ],
    "source": "[UU 2/2008 sebagaimana diubah UU 2/2011 Ps.34,34 A,35,39; cetak/PDF 10-12 UU 2/2011](https://peraturan.bpk.go.id/Download/224586/UU%20No.%202%20Tahun%202011.pdf)",
    "alt": "Jalur pertanggungjawaban partai. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  }
]
```

## Lampiran A: bahan tambahan dan batas

- Lampiran formulir permohonan serta beritaacara verifikasi tambahan tidak menggantikan latihan penyusunan laporan inti.
- LADK/LPPDK dan auditkampanye perlu aturan KPU sesuai pemilu, tidak disalin dariPasal 35 atau 34 A.
- Buku tambahan Mahsun dkk. edisi ketiga 2011 tersedia dari repositori penulis; halaman terpilih dibandingkan sebagai konteks historis. Buku ini tidak menggantikan identitas DN pada RPP.
