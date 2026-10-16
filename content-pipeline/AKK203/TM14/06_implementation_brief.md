# Implementasi TM14

Bangun ulang dari04 JSON (f52a177c1703fb0d3c591691d9752e7386cb16374d406843a652d7fda665afd5): node scripts/build-akk203-pra-uas.mjs.

Visual:

```json
[
  {
    "id": "ASP-UAS-14-KILAT",
    "type": "process",
    "title": "Peta Penelitian Akuntansi Sektor Publik: Membaca Bukti",
    "nodes": [
      {
        "title": "Tentukan konteks",
        "items": [
          "Artikel terkait, judul tidak ditentukan; RPP PDF 6"
        ]
      },
      {
        "title": "Pertanyaan riset: hubungan akuntabilitas dan bukti",
        "items": []
      },
      {
        "title": "Desain eksperimen dan unit pengamatan",
        "items": []
      },
      {
        "title": "Pengukuran: pengeluaran hilang sebagai proksi",
        "items": []
      },
      {
        "title": "Hasil: nilai, satuan dan spesifikasi harus disebut",
        "items": []
      },
      {
        "title": "Mekanisme, validitas dan batas generalisasi",
        "items": []
      },
      {
        "title": "Menyusun ulasan dan rancangan riset yang dapat diuji",
        "items": []
      }
    ],
    "source": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)",
    "alt": "Peta Penelitian Akuntansi Sektor Publik: Membaca Bukti. Tentukan konteks → Pertanyaan riset: hubungan akuntabilitas dan bukti → Desain eksperimen dan unit pengamatan → Pengukuran: pengeluaran hilang sebagai proksi → Hasil: nilai, satuan dan spesifikasi harus disebut → Mekanisme, validitas dan batas generalisasi → Menyusun ulasan dan rancangan riset yang dapat diuji",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-14-PERTANYAAN",
    "type": "process",
    "title": "Rantai pertanyaan penelitian",
    "nodes": [
      {
        "title": "Masalah pertanggungjawaban",
        "items": []
      },
      {
        "title": "Mekanisme audit/pengawasan",
        "items": []
      },
      {
        "title": "Hasil yang dapat diukur",
        "items": []
      },
      {
        "title": "Desain dan pembanding",
        "items": []
      },
      {
        "title": "Kesimpulan dengan batas",
        "items": []
      }
    ],
    "source": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1)",
    "alt": "Rantai pertanyaan penelitian. Masalah pertanggungjawaban → Mekanisme audit/pengawasan → Hasil yang dapat diukur → Desain dan pembanding → Kesimpulan dengan batas",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-14-DESAIN",
    "type": "parallel",
    "title": "Perlakuan dan pembanding",
    "nodes": [
      {
        "title": "Kelompok audit",
        "items": [
          "Pengumuman peluang audit 100%"
        ]
      },
      {
        "title": "Kelompok kontrol",
        "items": [
          "Peluang dasar sekitar 4%"
        ]
      }
    ],
    "source": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)",
    "alt": "Perlakuan dan pembanding. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka.",
    "result": "Bandingkan hasil, dengan galat baku sesuai pengelompokan"
  },
  {
    "id": "ASP-UAS-14-UKUR",
    "type": "parallel",
    "title": "Dua masukan untuk proksi",
    "nodes": [
      {
        "title": "Pengeluaran dilaporkan",
        "items": [
          "Dokumen proyek"
        ]
      },
      {
        "title": "Estimasi biaya aktual",
        "items": [
          "Teknik, pasar dan upah"
        ]
      }
    ],
    "source": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3)",
    "alt": "Dua masukan untuk proksi. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka.",
    "result": "Selisih log → proksi → interpretasi dengan batas pengukuran"
  },
  {
    "id": "ASP-UAS-14-HASIL",
    "type": "bar",
    "title": "Proksi missing: kontrol dan perlakuan",
    "nodes": [],
    "source": "[Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "alt": "Proksi missing: kontrol dan perlakuan. Kontrol: 27.7; Perlakuan audit: 19.2. Skala persen proksi selisih log. Table 4, komponen utama jalan, N 477. Selisih 8,5 poin; bukan rasio uang hilang langsung.",
    "footer": "Table 4, komponen utama jalan, N 477. Selisih 8,5 poin; bukan rasio uang hilang langsung.",
    "bars": [
      {
        "label": "Kontrol",
        "value": 27.7
      },
      {
        "label": "Perlakuan audit",
        "value": 19.2
      }
    ],
    "axis": "Skala persen proksi selisih log",
    "max": 30
  },
  {
    "id": "ASP-UAS-14-VALIDITAS",
    "type": "parallel",
    "title": "Dua pertanyaan validitas",
    "nodes": [
      {
        "title": "Internal",
        "items": [
          "Penugasan acak, pembanding, galat baku, pengukuran"
        ]
      },
      {
        "title": "Eksternal",
        "items": [
          "Entitas, periode, jenis proyek dan kapasitas berbeda"
        ]
      }
    ],
    "source": "[Olken(2007) desain dan pengukuran, cetak 202-211,216-217/PDF 3-12,17-18](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=3) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "alt": "Dua pertanyaan validitas. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-14-ULASAN",
    "type": "process",
    "title": "Dari hasil ke rekomendasi",
    "nodes": [
      {
        "title": "Angka tabel dan model",
        "items": []
      },
      {
        "title": "Batas ukuran/ketidakpastian",
        "items": []
      },
      {
        "title": "Mekanisme yang didukung",
        "items": []
      },
      {
        "title": "Perbedaan konteks penerapan",
        "items": []
      },
      {
        "title": "Uji lanjutan serta rekomendasi terbatas",
        "items": []
      }
    ],
    "source": "[Olken(2007), Monitoring Corruption: Evidence from a Field Experiment in Indonesia, JPE 115(2), cetak 200-249/PDF 1-50; sumber tambahan pilihan, bukan artikel dosen yang terkonfirmasi](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=1) [Olken(2007) Table 4 dan pembahasan, cetak 218-221/PDF 19-22; Figure 1 pada PDF 21](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf#page=19)",
    "alt": "Dari hasil ke rekomendasi. Angka tabel dan model → Batas ukuran/ketidakpastian → Mekanisme yang didukung → Perbedaan konteks penerapan → Uji lanjutan serta rekomendasi terbatas",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  }
]
```

## Lampiran A: bahan tambahan dan batas

- Table 2 keseimbangan, Table 3 statistik deskriptif, Table 5 harga/kuantitas dan evaluasi biaya tambahan menjadi bacaan lanjutan.
- Figure 1 diperiksa langsung; kurva empiris tidak digambar ulang tanpa data mentah. Appendix dan seluruh robustness lanjutan belum diaudit penuh; tidak diklaim sebagai cakupan inti selesai.
