# Implementasi TM10

Bangun ulang dari04 JSON (1f6fee087cdcf51b409a78fdd17ab973154e727ed2fd0942c2d497771aafc591): node scripts/build-akk203-pra-uas.mjs.

Visual:

```json
[
  {
    "id": "ASP-UAS-10-KILAT",
    "type": "process",
    "title": "Peta Audit Organisasi Pemerintah: APIP dan BPK",
    "nodes": [
      {
        "title": "Tentukan konteks",
        "items": [
          "SAP, SPKN; JP Bab 2 dan 9 sesuai RPP PDF 5"
        ]
      },
      {
        "title": "APIP dan BPK: posisi dan tanggung jawab",
        "items": []
      },
      {
        "title": "Jenis pemeriksaan mengikuti tujuan",
        "items": []
      },
      {
        "title": "Unsur pemeriksaan: kriteria dan bukti",
        "items": []
      },
      {
        "title": "Opini dan batasnya",
        "items": []
      },
      {
        "title": "LHP dan tindak lanjut 60 hari",
        "items": []
      },
      {
        "title": "SPKN: bedakan pengundangan dan penerapan",
        "items": []
      }
    ],
    "source": "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)",
    "alt": "Peta Audit Organisasi Pemerintah: APIP dan BPK. Tentukan konteks → APIP dan BPK: posisi dan tanggung jawab → Jenis pemeriksaan mengikuti tujuan → Unsur pemeriksaan: kriteria dan bukti → Opini dan batasnya → LHP dan tindak lanjut 60 hari → SPKN: bedakan pengundangan dan penerapan",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-10-JENIS",
    "type": "parallel",
    "title": "Tiga tujuan pemeriksaan",
    "nodes": [
      {
        "title": "Keuangan",
        "items": [
          "Kewajaran LK → opini"
        ]
      },
      {
        "title": "Kinerja",
        "items": [
          "Ekonomi, efisiensi, efektivitas → kesimpulan/rekomendasi"
        ]
      },
      {
        "title": "PDTT",
        "items": [
          "Tujuan khusus → kesimpulan sesuai tujuan"
        ]
      }
    ],
    "source": "[Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)",
    "alt": "Tiga tujuan pemeriksaan. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-10-BUKTI",
    "type": "process",
    "title": "Dari tujuan sampai kesimpulan",
    "nodes": [
      {
        "title": "Tujuan dan hal pokok",
        "items": [
          "Apa yang dinilai?"
        ]
      },
      {
        "title": "Kriteria",
        "items": [
          "Tolok ukur yang relevan"
        ]
      },
      {
        "title": "Bukti",
        "items": [
          "Cukup dan tepat"
        ]
      },
      {
        "title": "Analisis",
        "items": [
          "Bandingkan kondisi dengan kriteria"
        ]
      },
      {
        "title": "LHP",
        "items": [
          "Kesimpulan sesuai jenis penugasan"
        ]
      }
    ],
    "source": "[Peraturan BPK 1/2017 Ps.3-5 dan KK par.14,18,21-42; cetak 4-5,5-13 KK; PDF 4-5,17-25](https://peraturan.bpk.go.id/Download/20433/Peraturan%20BPK%20Nomor%201%20Tahun%202017.pdf)",
    "alt": "Dari tujuan sampai kesimpulan. Tujuan dan hal pokok → Kriteria → Bukti → Analisis → LHP",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-10-TL",
    "type": "process",
    "title": "Tindak lanjut berdasarkan bukti",
    "nodes": [
      {
        "title": "LHP diterima",
        "items": [
          "Catat tanggal penerimaan"
        ]
      },
      {
        "title": "Pejabat menindaklanjuti",
        "items": [
          "Tetapkan tindakan dan penanggung jawab"
        ]
      },
      {
        "title": "Jawaban/penjelasan kepada BPK",
        "items": [
          "Paling lambat 60 hari; sertakan bukti/alasan sah"
        ]
      },
      {
        "title": "BPK memantau",
        "items": [
          "Nilai hasil tindak lanjut"
        ]
      },
      {
        "title": "Perbaikan berlanjut",
        "items": [
          "Selesaikan masalah yang masih ada"
        ]
      }
    ],
    "source": "[UU 15/2004 Ps.2,4,6,16-20; cetak/PDF 4-5,8-11; Penjelasan Ps.16,20 PDF 27-28](https://peraturan.bpk.go.id/Details/40509/uu-no-15-tahun-2004)",
    "alt": "Tindak lanjut berdasarkan bukti. LHP diterima → Pejabat menindaklanjuti → Jawaban/penjelasan kepada BPK → BPK memantau → Perbaikan berlanjut",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-10-VERSI",
    "type": "process",
    "title": "Garis waktu SPKN",
    "nodes": [
      {
        "title": "2017",
        "items": [
          "Kerangka dan PSP 100/200/300"
        ]
      },
      {
        "title": "10 April 2026",
        "items": [
          "SPKN baru diundangkan"
        ]
      },
      {
        "title": "14 Oktober 2026",
        "items": [
          "Audit paket: 2017 masih digunakan"
        ]
      },
      {
        "title": "10 April 2028",
        "items": [
          "Mulai berlaku 2026; pencabutan 2017"
        ]
      }
    ],
    "source": "[Peraturan BPK 1/2026 Ps.7-9; cetak/PDF 3-4; diundangkan 10 April 2026, berlaku 10 April 2028](https://peraturan.bpk.go.id/Download/411430/Salinan%20PBPK%201%20Tahun%202026.pdf#page=3)",
    "alt": "Garis waktu SPKN. 2017 → 10 April 2026 → 14 Oktober 2026 → 10 April 2028",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  },
  {
    "id": "ASP-UAS-10-SPIP",
    "type": "parallel",
    "title": "Unsur SPIP",
    "nodes": [
      {
        "title": "Lingkungan pengendalian",
        "items": [
          "Integritas dan struktur"
        ]
      },
      {
        "title": "Penilaian risiko",
        "items": [
          "Risiko terhadap tujuan"
        ]
      },
      {
        "title": "Kegiatan pengendalian",
        "items": [
          "Respons atas risiko"
        ]
      },
      {
        "title": "Informasi dan komunikasi",
        "items": [
          "Informasi untuk tanggung jawab"
        ]
      },
      {
        "title": "Pemantauan",
        "items": [
          "Nilai efektivitas pengendalian"
        ]
      }
    ],
    "source": "[PP 60/2008 Ps.2-3,47-54; cetak/PDF 3-4,21-25](https://peraturan.go.id/files/pp60-2008.pdf#page=3)",
    "alt": "Unsur SPIP. Cabang terpisah dibandingkan sesuai label. Tidak menunjukkan urutan waktu.",
    "footer": "Skematis: hubungan konsep, tanpa skala angka."
  }
]
```

## Lampiran A: bahan tambahan dan batas

- Penyelesaian ganti kerugian dan sanksi rinci UU 15 tidak menjadi fokus inti TM 10.
- Lampiran SPKN 2026 sesudah batang tubuh belum diterapkan sebagai standar aktif pada paket ini.
