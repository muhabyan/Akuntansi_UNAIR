# Implementasi TM8

Bangun ulang dari04 JSON (3ecf8ac8c5edd50f93036718a8981bda57ffb6f2edb94bac40fd1448969d861e): node scripts/build-akk203-pra-uas.mjs.

Visual:

```json
[
  {
    "id": "ASP-UAS-8-KILAT",
    "type": "process",
    "title": "Peta Sistem Akuntansi Pemerintah Pusat dan Daerah",
    "nodes": [
      {
        "title": "Tentukan konteks",
        "items": [
          "DN Bab 10; IBS Bab 2; peraturan terkait, RPP PDF 5"
        ]
      },
      {
        "title": "SAPP: dua jalur dengan fungsi berbeda",
        "items": []
      },
      {
        "title": "SAI: laporan naik, bukti tetap dapat ditelusuri",
        "items": []
      },
      {
        "title": "SAPD: SKPD dan PPKD membentuk satu laporan daerah",
        "items": []
      },
      {
        "title": "Rekonsiliasi: cari sebab selisih sebelum koreksi",
        "items": []
      },
      {
        "title": "Konsolidasi dan eliminasi akun timbal balik",
        "items": []
      },
      {
        "title": "Kebijakan pusat dan batas eliminasi",
        "items": []
      }
    ],
    "source": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "alt": "Peta Sistem Akuntansi Pemerintah Pusat dan Daerah. Tentukan konteks → SAPP: dua jalur dengan fungsi berbeda → SAI: laporan naik, bukti tetap dapat ditelusuri → SAPD: SKPD dan PPKD membentuk satu laporan daerah → Rekonsiliasi: cari sebab selisih sebelum koreksi → Konsolidasi dan eliminasi akun timbal balik → Kebijakan pusat dan batas eliminasi",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-8-SAPP",
    "type": "parallel",
    "title": "Dua jalur SAPP",
    "nodes": [
      {
        "title": "SAI",
        "items": [
          "Kementerian/lembaga"
        ]
      },
      {
        "title": "SABUN",
        "items": [
          "Menteri Keuangan sebagai BUN"
        ]
      }
    ],
    "source": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "alt": "Dua jalur SAPP. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka.",
    "result": "LKPP: konsolidasi LK K/L dan LK BUN"
  },
  {
    "id": "ASP-UAS-8-SAI",
    "type": "process",
    "title": "Jenjang SAI yang dibentuk",
    "nodes": [
      {
        "title": "UAKPA",
        "items": [
          "Transaksi satker"
        ]
      },
      {
        "title": "UAPPA-W",
        "items": [
          "Penggabungan wilayah bila dibentuk"
        ]
      },
      {
        "title": "UAPPA-E1",
        "items": [
          "Penggabungan eselon I"
        ]
      },
      {
        "title": "UAPA",
        "items": [
          "Laporan K/L"
        ]
      }
    ],
    "source": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "alt": "Jenjang SAI yang dibentuk. UAKPA → UAPPA-W → UAPPA-E1 → UAPA",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-8-REKON",
    "type": "process",
    "title": "Alur rekonsiliasi",
    "nodes": [
      {
        "title": "Tentukan pasangan data",
        "items": [
          "Entitas, akun, periode"
        ]
      },
      {
        "title": "Cocokkan bukti",
        "items": [
          "Nomor dokumen dan nilai"
        ]
      },
      {
        "title": "Jelaskan selisih",
        "items": [
          "Waktu, pencatatan atau klasifikasi"
        ]
      },
      {
        "title": "Koreksi yang terbukti",
        "items": [
          "Simpan jejak penyesuaian"
        ]
      },
      {
        "title": "Gabungkan laporan",
        "items": [
          "Setelah data cocok"
        ]
      }
    ],
    "source": "[PMK 217/PMK.05/2022 Ps.2-3,20-26,37-40; cetak/PDF 10-11,20-23,25-27](https://jdih.kemenkeu.go.id/api/download/84e2ae15-d735-487c-af36-e81644ee4b58/217~PMK.05~2022Per.pdf#page=10)",
    "alt": "Alur rekonsiliasi. Tentukan pasangan data → Cocokkan bukti → Jelaskan selisih → Koreksi yang terbukti → Gabungkan laporan",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-8-KONSOL",
    "type": "process",
    "title": "Kertas kerja sampai laporan daerah",
    "nodes": [
      {
        "title": "Neraca saldo disesuaikan",
        "items": [
          "Seluruh SKPD dan PPKD"
        ]
      },
      {
        "title": "Kertas kerja gabungan",
        "items": [
          "Kolom per entitas"
        ]
      },
      {
        "title": "Eliminasi",
        "items": [
          "Pasangan RK yang terverifikasi"
        ]
      },
      {
        "title": "Neraca saldo pemda",
        "items": [
          "Saldo untuk pelaporan"
        ]
      },
      {
        "title": "Laporan konsolidasian",
        "items": [
          "LRA, LO, neraca, LPSAL, LPE, LAK, Ca LK"
        ]
      }
    ],
    "source": "[Permendagri 64/2013 Lampiran II bagian j; cetak 33-37, PDF 71-75](https://peraturan.bpk.go.id/Details/111750/permendagri-no-64-tahun-2013)",
    "alt": "Kertas kerja sampai laporan daerah. Neraca saldo disesuaikan → Kertas kerja gabungan → Eliminasi → Neraca saldo pemda → Laporan konsolidasian",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  }
]
```

## Lampiran A: bahan tambahan dan batas

- Format laporan PPKD lengkap pada PDF 69-81 merupakan latihan tambahan pembacaan penyajian.
- Subsistem SABUN yang tidak dibahas mendalam dan seluruh tenggat teknis per unit perlu teks prosedur penugasan terkait.
