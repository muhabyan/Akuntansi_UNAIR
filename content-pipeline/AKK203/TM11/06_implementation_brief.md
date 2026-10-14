# Implementasi TM11

Bangun ulang dari04 JSON (a2fa365be167fc4792ab486033e383dddfb664ac24306153b5fd1ad561123ac4): node scripts/build-akk203-pra-uas.mjs.

Visual:

```json
[
  {
    "id": "ASP-UAS-11-KILAT",
    "type": "process",
    "title": "Peta Laporan Keuangan Organisasi Nonlaba: LSM",
    "nodes": [
      {
        "title": "Tentukan konteks",
        "items": [
          "PSAK terkait; DN Bab 3; peraturan terkait, RPP PDF 5"
        ]
      },
      {
        "title": "LSM: tentukan bentuk badan dan kerangka laporan",
        "items": []
      },
      {
        "title": "ISAK 335: penyajian dan versi perlu dibaca terpisah",
        "items": []
      },
      {
        "title": "Aset neto: pahami asal pembatasan",
        "items": []
      },
      {
        "title": "Hubungan lima laporan dalam contoh historis",
        "items": []
      },
      {
        "title": "Menyusun angka: satu kasus, beberapa pemeriksaan",
        "items": []
      },
      {
        "title": "Audit dan transparansi yayasan",
        "items": []
      }
    ],
    "source": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)",
    "alt": "Peta Laporan Keuangan Organisasi Nonlaba: LSM. Tentukan konteks → LSM: tentukan bentuk badan dan kerangka laporan → ISAK 335: penyajian dan versi perlu dibaca terpisah → Aset neto: pahami asal pembatasan → Hubungan lima laporan dalam contoh historis → Menyusun angka: satu kasus, beberapa pemeriksaan → Audit dan transparansi yayasan",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-11-KERANGKA",
    "type": "process",
    "title": "Menentukan dasar laporan LSM",
    "nodes": [
      {
        "title": "Bentuk hukum dan kegiatan",
        "items": []
      },
      {
        "title": "Kewajiban regulasi badan",
        "items": []
      },
      {
        "title": "Kerangka SAK dan periode",
        "items": []
      },
      {
        "title": "Kebijakan transaksi",
        "items": []
      },
      {
        "title": "Laporan dan pengungkapan",
        "items": []
      }
    ],
    "source": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15) [IAI DE ISAK 35(2018) par.7-12, CI 01-04; cetak 35.1-35.5, PDF 15-19; contoh historis, bukan teks standar final](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=15)",
    "alt": "Menentukan dasar laporan LSM. Bentuk hukum dan kegiatan → Kewajiban regulasi badan → Kerangka SAK dan periode → Kebijakan transaksi → Laporan dan pengungkapan",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-11-NETO",
    "type": "parallel",
    "title": "Dua kelas aset neto pada contoh historis",
    "nodes": [
      {
        "title": "Tanpa pembatasan",
        "items": [
          "Penggunaan tidak dibatasi donor"
        ]
      },
      {
        "title": "Dengan pembatasan",
        "items": [
          "Tujuan atau periode donor masih berlaku"
        ]
      }
    ],
    "source": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "alt": "Dua kelas aset neto pada contoh historis. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-11-LAPORAN",
    "type": "process",
    "title": "Hubungan laporan LSM",
    "nodes": [
      {
        "title": "Transaksi dan kebijakan",
        "items": [
          "Identifikasi penghasilan, beban, aset, liabilitas"
        ]
      },
      {
        "title": "Penghasilan komprehensif",
        "items": [
          "Surplus/defisit serta OCI bila ada"
        ]
      },
      {
        "title": "Perubahan aset neto",
        "items": [
          "Saldo awal, perubahan dan reklasifikasi"
        ]
      },
      {
        "title": "Posisi keuangan",
        "items": [
          "Aset=liabilitas+aset neto"
        ]
      }
    ],
    "source": "[IAI DE ISAK 35(2018) contoh posisi keuangan/penghasilan/perubahan aset neto/arus kas/Ca LK; cetak 35.6-35.19, PDF 20-33; historis](https://web.iaiglobal.or.id/assets/files/file_berita/DE%20ISAK%2035.pdf#page=20)",
    "alt": "Hubungan laporan LSM. Transaksi dan kebijakan → Penghasilan komprehensif → Perubahan aset neto → Posisi keuangan",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-11-AUDIT",
    "type": "parallel",
    "title": "Uji kewajiban audit yayasan",
    "nodes": [
      {
        "title": "Bantuan≥Rp 500 juta dalam 1 tahun buku",
        "items": [
          "ATAU"
        ]
      },
      {
        "title": "Kekayaan di luar wakaf≥Rp 20 miliar",
        "items": [
          "Salah satu terpenuhi"
        ]
      }
    ],
    "source": "[UU 16/2001 Ps.48-50; cetak/PDF 15-16; UU 28/2004 Ps. I angka 16 perubahanPs.52; cetak/PDF 9-10](https://peraturan.bpk.go.id/Download/30439/UU%20Nomor%2028%20Tahun%202004.pdf#page=15)",
    "alt": "Dua ambang alternatif; salah satu cukup, tidak harus keduanya.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka.",
    "result": "Salah satu terpenuhi → audit akuntan publik dan publikasi ikhtisar"
  }
]
```

## Lampiran A: bahan tambahan dan batas

- DE 2018 CatatanD tentang investasi/endowment: belum masuk latihan inti karena teks transaksi final belum tersedia.
- DE 2018 FormatA/B dan arus kas tidak langsung dapat menjadi latihan penyajian tambahan;angka sumber berupa placeholder.
- Buku tambahan Mahsun dkk. edisi ketiga 2011 tersedia dari repositori penulis; halaman terpilih dibandingkan sebagai konteks historis. Buku ini tidak menggantikan identitas DN pada RPP.
