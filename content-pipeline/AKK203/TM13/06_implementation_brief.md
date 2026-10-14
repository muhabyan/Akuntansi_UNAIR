# Implementasi TM13

Bangun ulang dari04 JSON (993ceb6198cdd20e91e56887b9b4f239f7595be969322a8376b159ccee425106): node scripts/build-akk203-pra-uas.mjs.

Visual:

```json
[
  {
    "id": "ASP-UAS-13-KILAT",
    "type": "process",
    "title": "Peta Badan Layanan Umum dan BLUD Rumah Sakit",
    "nodes": [
      {
        "title": "Tentukan konteks",
        "items": [
          "DN Bab 3; PSAP 13; PP 23/2005 jo. PP 74/2012, PP 12/2019; pembaruan atas Permendagri 61/2007 dan PMK 220/2016, RPP PDF 6"
        ]
      },
      {
        "title": "BLU dan BLUD: layanan, fleksibilitas dan batas entitas",
        "items": []
      },
      {
        "title": "Basis laporan: LRA dan LO menjawab pertanyaan berbeda",
        "items": []
      },
      {
        "title": "Tujuh laporan dan hubungan saldo",
        "items": []
      },
      {
        "title": "Mekanisme sistem: bukti, pengesahan dan rekonsiliasi",
        "items": []
      },
      {
        "title": "Konsolidasi: gabungkan dan eliminasi menurut jenis laporan",
        "items": []
      },
      {
        "title": "BLUD rumah sakit: ambang RBA dan tanggung jawab layanan",
        "items": []
      }
    ],
    "source": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "alt": "Peta Badan Layanan Umum dan BLUD Rumah Sakit. Tentukan konteks → BLU dan BLUD: layanan, fleksibilitas dan batas entitas → Basis laporan: LRA dan LO menjawab pertanyaan berbeda → Tujuh laporan dan hubungan saldo → Mekanisme sistem: bukti, pengesahan dan rekonsiliasi → Konsolidasi: gabungkan dan eliminasi menurut jenis laporan → BLUD rumah sakit: ambang RBA dan tanggung jawab layanan",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-13-ENTITAS",
    "type": "parallel",
    "title": "Tentukan konteks sebelum memilih sistem",
    "nodes": [
      {
        "title": "BLU pusat",
        "items": [
          "PSAP 13 dan sistem PMK 128/2024"
        ]
      },
      {
        "title": "BLUD daerah",
        "items": [
          "PSAP 13 dan aturan/kebijakan daerah"
        ]
      },
      {
        "title": "Rumah sakit swasta",
        "items": [
          "Kerangka entitas swasta yang relevan"
        ]
      }
    ],
    "source": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
    "alt": "Tentukan konteks sebelum memilih sistem. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-13-BASIS",
    "type": "parallel",
    "title": "Satu transaksi, dua sudut laporan",
    "nodes": [
      {
        "title": "Hak layanan timbul",
        "items": [
          "LO dan piutang sesuai ketentuan"
        ]
      },
      {
        "title": "Kas diterima dan disahkan",
        "items": [
          "LRA sesuai mekanisme pengesahan"
        ]
      }
    ],
    "source": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "alt": "Satu transaksi, dua sudut laporan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-13-LAPORAN",
    "type": "parallel",
    "title": "Hubungan laporan BLU",
    "nodes": [
      {
        "title": "Jalur anggaran",
        "items": [
          "LRA → LPSAL"
        ]
      },
      {
        "title": "Jalur operasi",
        "items": [
          "LO → LPE → ekuitas neraca"
        ]
      },
      {
        "title": "Jalur kas",
        "items": [
          "LAK → kas neraca"
        ]
      },
      {
        "title": "Penjelasan",
        "items": [
          "Ca LK untuk seluruh laporan"
        ]
      }
    ],
    "source": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "alt": "Hubungan laporan BLU. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-13-SISTEM",
    "type": "process",
    "title": "Peta belajar sistem BLU",
    "nodes": [
      {
        "title": "Bukti dan subsistem",
        "items": []
      },
      {
        "title": "Jurnal serta buku besar",
        "items": []
      },
      {
        "title": "Pengesahan sesuai mekanisme",
        "items": []
      },
      {
        "title": "Neraca percobaan dan rekonsiliasi",
        "items": []
      },
      {
        "title": "Laporan serta Ca LK",
        "items": []
      }
    ],
    "source": "[PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17)",
    "alt": "Peta belajar sistem BLU. Bukti dan subsistem → Jurnal serta buku besar → Pengesahan sesuai mekanisme → Neraca percobaan dan rekonsiliasi → Laporan serta Ca LK",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-13-KONSOL",
    "type": "parallel",
    "title": "Jenis laporan menentukan perlakuan",
    "nodes": [
      {
        "title": "LRA",
        "items": [
          "Gabungkan, ketentuan tanpa eliminasi"
        ]
      },
      {
        "title": "LO/neraca",
        "items": [
          "Periksa dan eliminasi internal yang relevan"
        ]
      },
      {
        "title": "LAK/LPSAL",
        "items": [
          "Jalur BUN/BUD sesuai PSAP 13"
        ]
      }
    ],
    "source": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257)",
    "alt": "Jenis laporan menentukan perlakuan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-13-KONTROL",
    "type": "parallel",
    "title": "Pemeriksaan sebelum menyimpulkan",
    "nodes": [
      {
        "title": "Entitas/periode",
        "items": [
          "Status dan versi aturan"
        ]
      },
      {
        "title": "Transaksi",
        "items": [
          "Hak, kas, klasifikasi dan pengesahan"
        ]
      },
      {
        "title": "Laporan",
        "items": [
          "Basis, hubungan dan eliminasi"
        ]
      },
      {
        "title": "Layanan",
        "items": [
          "Mutu, akses serta kemampuan pendanaan"
        ]
      }
    ],
    "source": "[SAP 2026, PSAP 13 par.6-12,17-31,76-88,116-123; cetak 250-266/PDF 257-273](https://www.ksap.org/sap/wp-content/uploads/2026/01/2026-0101-Buku-SAP-2026-Besar.pdf#page=257) [PMK 128/2024, lampiran Sistem Akuntansi dan Pelaporan Keuangan BLU, PDF 17-20,168-175; berlaku untuk LK 2024 dan seterusnya](https://jdih.kemenkeu.go.id/download/c6ab0355-774d-4a2f-9190-363cdda2c9c6/2024pmkeuangan128.pdf#page=17) [Permendagri 79/2018 Ps.50-54,74-75,99-100; cetak/PDF 31-34,36-38,47-50; mengganti 61/2007](https://peraturan.bpk.go.id/Download/102253/Permendagri%20Nomor%2079%20Tahun%202018.pdf#page=31)",
    "alt": "Pemeriksaan sebelum menyimpulkan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  }
]
```

## Lampiran A: bahan tambahan dan batas

- Lampiran PMK 128 tentang akun dan proses detail di luar peta belajar inti tetap menjadi rujukan lanjutan.
- Penetapan tarif, remunerasi dan pengadaan spesifik rumah sakit memerlukan aturan serta dokumen lokal.
