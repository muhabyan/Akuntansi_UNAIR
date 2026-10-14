# Implementasi TM9

Bangun ulang dari04 JSON (774f6d58aacac1d6fba947568bb71197bf00c7da409853a15812eaea66a79e1a): node scripts/build-akk203-pra-uas.mjs.

Visual:

```json
[
  {
    "id": "ASP-UAS-9-KILAT",
    "type": "process",
    "title": "Peta Pengukuran Kinerja Organisasi Pemerintah",
    "nodes": [
      {
        "title": "Tentukan konteks",
        "items": [
          "MD Bab 8; DN Bab 8; JP Bab 2; peraturan terkait, RPP PDF 5"
        ]
      },
      {
        "title": "Kinerja: hubungkan sumber daya dengan hasil",
        "items": []
      },
      {
        "title": "Tiga E menanyakan tiga hal berbeda",
        "items": []
      },
      {
        "title": "Indikator, target dan arah perbaikan",
        "items": []
      },
      {
        "title": "SAKIP: data menghubungkan rencana dan evaluasi",
        "items": []
      },
      {
        "title": "Hitungan: label rasio sebelum menilai",
        "items": []
      },
      {
        "title": "Evaluasi AKIP: kualitas dan pemanfaatan",
        "items": []
      }
    ],
    "source": "[Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6)",
    "alt": "Peta Pengukuran Kinerja Organisasi Pemerintah. Tentukan konteks → Kinerja: hubungkan sumber daya dengan hasil → Tiga E menanyakan tiga hal berbeda → Indikator, target dan arah perbaikan → SAKIP: data menghubungkan rencana dan evaluasi → Hitungan: label rasio sebelum menilai → Evaluasi AKIP: kualitas dan pemanfaatan",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-9-HASIL",
    "type": "process",
    "title": "Sumber daya sampai hasil",
    "nodes": [
      {
        "title": "Input",
        "items": [
          "Dana dan sumber daya"
        ]
      },
      {
        "title": "Kegiatan",
        "items": [
          "Layanan yang dilakukan"
        ]
      },
      {
        "title": "Output",
        "items": [
          "Keluaran terukur"
        ]
      },
      {
        "title": "Outcome",
        "items": [
          "Hasil yang dituju"
        ]
      },
      {
        "title": "Umpan balik",
        "items": [
          "Analisis capaian dan perbaikan"
        ]
      }
    ],
    "source": "[Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6)",
    "alt": "Sumber daya sampai hasil. Input → Kegiatan → Output → Outcome → Umpan balik",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-9-3E",
    "type": "parallel",
    "title": "Tiga sudut pengukuran",
    "nodes": [
      {
        "title": "Ekonomi",
        "items": [
          "Perolehan input sesuai kebutuhan"
        ]
      },
      {
        "title": "Efisiensi",
        "items": [
          "Sumber daya dibanding keluaran"
        ]
      },
      {
        "title": "Efektivitas",
        "items": [
          "Tujuan dibanding hasil"
        ]
      }
    ],
    "source": "[ISSAI 300 par.11, versi editorial IFPP 2019; PP 60/2008 Ps.50(2), cetak/PDF 23](https://www.issai.org/wp-content/uploads/2019/08/ISSAI-300.pdf#page=8)",
    "alt": "Tiga sudut pengukuran. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-9-SAKIP",
    "type": "process",
    "title": "Rangkaian SAKIP",
    "nodes": [
      {
        "title": "Renstra",
        "items": [
          "Sasaran jangka menengah"
        ]
      },
      {
        "title": "Perjanjian kinerja",
        "items": [
          "Indikator, target dan penanggung jawab"
        ]
      },
      {
        "title": "Pengukuran dan data",
        "items": [
          "Catat, olah, simpan dan cocokkan"
        ]
      },
      {
        "title": "Pelaporan",
        "items": [
          "Bandingkan realisasi dan target"
        ]
      },
      {
        "title": "Reviu dan evaluasi",
        "items": [
          "Perbaikan kinerja dan akuntabilitas"
        ]
      }
    ],
    "source": "[Perpres 29/2014 Ps.5,9,15-18,24; cetak/PDF 6,8,10-11,13](https://peraturan.bpk.go.id/Download/262284/Perpres%20Nomor%2029%20Tahun%202014.pdf#page=6)",
    "alt": "Rangkaian SAKIP. Renstra → Perjanjian kinerja → Pengukuran dan data → Pelaporan → Reviu dan evaluasi",
    "footer": "Skematis: hubungan konsep, tanpa skala angka.",
    "feedback": true
  },
  {
    "id": "ASP-UAS-9-BOBOT",
    "type": "bar",
    "title": "Bobot komponen evaluasi AKIP",
    "nodes": [],
    "source": "[Permen PAN-RB 88/2021 Lampiran I. B dan III. B.1; cetak/PDF 8,20-24](https://peraturan.bpk.go.id/Download/196187/Permen%20PANRB%20No.%2088%20Tahun%202021.pdf#page=8)",
    "alt": "Bobot komponen evaluasi AKIP. Perencanaan: 30; Pengukuran: 30; Pelaporan: 15; Evaluasi internal: 25. Bobot komponen (%). Permen PAN-RB 88/2021 lampiran. Total 30+30+15+25=100%; bukan nilai hasil suatu instansi.",
    "footer": "Permen PAN-RB 88/2021 lampiran. Total 30+30+15+25=100%; bukan nilai hasil suatu instansi.",
    "bars": [
      {
        "label": "Perencanaan",
        "value": 30
      },
      {
        "label": "Pengukuran",
        "value": 30
      },
      {
        "label": "Pelaporan",
        "value": 15
      },
      {
        "label": "Evaluasi internal",
        "value": 25
      }
    ],
    "axis": "Bobot komponen (%)",
    "max": 40
  },
  {
    "id": "ASP-UAS-9-EVAL",
    "type": "process",
    "title": "Alur evaluasi AKIP",
    "nodes": [
      {
        "title": "Perumusan tujuan",
        "items": []
      },
      {
        "title": "Penentuan ruang lingkup",
        "items": []
      },
      {
        "title": "Perancangan desain: metode dan alat",
        "items": []
      },
      {
        "title": "Mekanisme pelaksanaan",
        "items": []
      },
      {
        "title": "Pelaporan dan pengomunikasian hasil",
        "items": []
      }
    ],
    "source": "[Permen PAN-RB 88/2021 Lampiran I. B dan III. B.1; cetak/PDF 8,20-24](https://peraturan.bpk.go.id/Download/196187/Permen%20PANRB%20No.%2088%20Tahun%202021.pdf#page=8)",
    "alt": "Alur evaluasi AKIP. Perumusan tujuan → Penentuan ruang lingkup → Perancangan desain: metode dan alat → Mekanisme pelaksanaan → Pelaporan dan pengomunikasian hasil",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  }
]
```

## Lampiran A: bahan tambahan dan batas

- Format lengkap perjanjian kinerja unit kerja dan satker pada PAN 53 PDF 13-18 untuk latihan tambahan.
- Kategori nilai AKIP serta instrumen khusus penugasan disimpan sebagai bacaan tambahan, tidak ditebak dari rasio biaya.
