// AKA201 shared/latihan_penyelesaian_masalah_SCPMK2.md, converted by C:\Users\Lenovo\aka201-converter\convert-aka201.mjs.
// The text is verbatim from the content package; change the package and re-run the converter instead of editing here.
import type { Reading } from '../../../types';

export const LATIHAN_PENYELESAIAN_MASALAH_READING: Reading = {
  "tm": 94,
  "title": "Latihan Penyelesaian Masalah: Sub-CPMK 2 (TM04–TM07)",
  "intro": "**Konteks dari Grading Policy:** ada dua kegiatan Penyelesaian Masalah (bobot total 10 persen), berupa **respons kasus individual** untuk Sub-CPMK 2 dan Sub-CPMK 3. Penilaiannya memakai rubrik bersama dan ada **komponen penilaian sejawat (peer assessment)**. Untuk kegiatan ini, AI boleh dipakai untuk merapikan tulisan, tetapi **wajib diungkapkan** dalam 1–2 kalimat di akhir jawaban, dan analisis serta kesimpulannya harus milikmu sendiri.\n\nFile ini berisi latihan dengan kasus buatan penulis. **Jangan dipakai sebagai jawaban untuk tugas yang dinilai.** Pakai untuk melatih cara berpikir.",
  "objectives": [],
  "layout": "layered",
  "badge": "Persiapan UTS",
  "blocks": [
    {
      "kind": "section",
      "title": "1. Bentuk jawaban yang disarankan",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "Karena dinilai dengan rubrik dan dibaca teman sejawat, jawaban yang rapi dan mudah dinilai punya keuntungan."
        },
        {
          "kind": "table",
          "headers": [
            "Bagian",
            "Isi",
            "Panjang wajar"
          ],
          "rows": [
            [
              "Ringkasan fakta",
              "Fakta kasus yang relevan saja",
              "2–4 kalimat"
            ],
            [
              "Isu",
              "Pertanyaan audit yang harus dijawab",
              "1–2 kalimat"
            ],
            [
              "Analisis",
              "Konsep dan standar, dihubungkan dengan fakta; alasan; kemungkinan lain",
              "Bagian terpanjang"
            ],
            [
              "Kesimpulan dan rekomendasi",
              "Jawaban tegas dan tindakan auditor",
              "2–5 kalimat"
            ],
            [
              "Pernyataan penggunaan AI",
              "Tool yang dipakai dan untuk apa, atau pernyataan tidak memakai AI",
              "1–2 kalimat"
            ]
          ],
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "**Contoh pernyataan penggunaan AI** (sesuaikan dengan kenyataan):"
        },
        {
          "kind": "ul",
          "items": [
            "\"Saya tidak menggunakan AI dalam penyusunan jawaban ini.\"",
            "\"Saya menggunakan [nama tool] untuk memeriksa tata bahasa pada paragraf terakhir; analisis dan kesimpulan adalah milik saya.\""
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "2. Tiga kasus latihan",
      "layer": "main",
      "blocks": [
        {
          "kind": "h3",
          "text": "Kasus A: Jawaban yang terlalu lancar (TM04)"
        },
        {
          "kind": "p",
          "text": "PT Delta Makmur mencatat pengurangan beban garansi sebesar 900 juta pada bulan Desember. Materialitas keseluruhan 350 juta. Manajer keuangan menjelaskan bahwa \"klaim garansi tahun ini memang jauh lebih sedikit karena kualitas produk membaik\". Tahun ini direksi mendapat bonus bila laba naik minimal 10 persen, dan laba sebelum koreksi ini hanya naik 6 persen."
        },
        {
          "kind": "self-check",
          "question": "**Tugas:** analisis sikap dan langkah auditor.",
          "answer": [
            {
              "kind": "p",
              "text": "**Kerangka jawaban (bukan jawaban lengkap):**"
            },
            {
              "kind": "ul",
              "items": [
                "Isu: apakah estimasi garansi yang turun itu wajar, atau merupakan bias manajemen.",
                "Konsep: skeptisisme dan penilaian kritis atas jawaban wawancara `(ISA200 paras. A21, A23, A25)`; estimasi dan pertimbangan manajemen sebagai sumber keterbatasan bawaan `(ISA200 para. A50)`; bias dan insentif sebagai faktor asersi relevan, di sini valuation liabilitas garansi `(Arens p.105)`.",
                "Analisis yang diharapkan: tanpa penurunan 900 juta, target bonus 10 persen tidak tercapai. Ini insentif yang kuat. Penjelasan \"kualitas membaik\" perlu dibuktikan, misalnya dengan data klaim aktual dibanding tahun-tahun sebelumnya dan data retur. Jangan menyimpulkan fraud sebelum ada bukti.",
                "Kesimpulan yang diharapkan: tunda kesimpulan, kumpulkan bukti yang bisa membantah, dokumentasikan, dan konsultasikan. Jika estimasinya tidak wajar, itu salah saji judgmental yang harus dibahas dengan manajemen `(Arens p.209)`."
              ]
            }
          ]
        },
        {
          "kind": "h3",
          "text": "Kasus B: Salah saji di bawah materialitas (TM07)"
        },
        {
          "kind": "p",
          "text": "Materialitas keseluruhan audit PT Omega Retail 500 juta. Auditor menemukan beban gaji Desember 180 juta belum dicatat. Manajemen menolak mengoreksi: \"Masih jauh di bawah materialitas.\" Laba sebelum pajak yang dilaporkan 150 juta, dan laba per saham menjadi ukuran kinerja utama yang dipantau investor."
        },
        {
          "kind": "self-check",
          "question": "**Tugas:** evaluasi argumen manajemen.",
          "answer": [
            {
              "kind": "p",
              "text": "**Kerangka jawaban:**"
            },
            {
              "kind": "ul",
              "items": [
                "Isu: apakah salah saji yang di bawah angka materialitas bisa tetap material.",
                "Konsep: faktor kualitatif Table 6-8, yaitu mengubah laba menjadi rugi dan pengaruh pada ukuran kinerja seperti laba per saham `(Arens p.209)`; auditor meminta koreksi salah saji yang tidak trivial `(Arens pp.208–209)`.",
                "Analisis yang diharapkan: koreksi 180 juta mengubah laba 150 juta menjadi **rugi 30 juta**. Secara kuantitatif di bawah 500 juta, tetapi secara kualitatif material. Pertimbangkan juga apakah materialitas perlu direvisi, karena laba aktual jauh berbeda dari yang dipakai saat perencanaan `(ISA320 para. A14)`.",
                "Kesimpulan yang diharapkan: argumen manajemen tidak dapat diterima; minta koreksi; jika ditolak, komunikasikan kepada TCWG dan pertimbangkan modifikasi opini (TM06)."
              ]
            }
          ]
        },
        {
          "kind": "h3",
          "text": "Kasus C: Menentukan asersi dan respons (TM05)"
        },
        {
          "kind": "p",
          "text": "PT Mega Bangun, kontraktor, mencatat piutang retensi 2,4 miliar dari tiga proyek pemerintah daerah. Salah satu proyek dihentikan sepihak oleh pemberi kerja, dan sengketanya sedang berjalan. Manajemen tetap mencatat piutang proyek itu sebesar 900 juta tanpa penyisihan dan tanpa pengungkapan sengketa."
        },
        {
          "kind": "self-check",
          "question": "**Tugas:** tentukan asersi yang berisiko dan jelaskan alasannya.",
          "answer": [
            {
              "kind": "p",
              "text": "**Kerangka jawaban:**"
            },
            {
              "kind": "ul",
              "items": [
                "Isu: apakah piutang retensi dicatat pada jumlah yang dapat direalisasi dan diungkapkan dengan memadai.",
                "Konsep: accuracy, valuation, and allocation (jumlah yang dapat direalisasi); presentation (pengungkapan sengketa) `(Arens pp.109–110; ISA315 para. A190)`.",
                "Analisis yang diharapkan: existence tidak menjadi masalah utama karena kontraknya ada. Masalahnya ada pada **nilai** piutang yang disengketakan dan **pengungkapan** sengketanya. Hubungkan dengan contoh buku tentang pengungkapan yang dibutuhkan pengguna.",
                "Kesimpulan yang diharapkan: kumpulkan bukti atas kemungkinan tertagihnya piutang (misalnya dokumen sengketa, pendapat penasihat hukum klien) dan evaluasi kebutuhan penyisihan serta pengungkapan."
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "section",
      "title": "3. Daftar periksa saat menilai jawaban teman (peer assessment)",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "Karena ada komponen penilaian sejawat, kamu juga perlu bisa menilai jawaban orang lain dengan adil. Pakai pertanyaan ini:"
        },
        {
          "kind": "ul",
          "items": [
            "[ ] Apakah jawabannya memakai **fakta kasus**, atau hanya teori umum?",
            "[ ] Apakah konsep dan standar yang disebut **tepat untuk isu tersebut**?",
            "[ ] Apakah ada **alasan** (kenapa), atau hanya kesimpulan?",
            "[ ] Apakah terlihat **skeptisisme**, misalnya tidak langsung menerima penjelasan manajemen?",
            "[ ] Apakah kesimpulannya **tegas** dan tindakannya **konkret**?",
            "[ ] Apakah ada **pernyataan penggunaan AI**?"
          ]
        },
        {
          "kind": "p",
          "text": "Beri komentar yang spesifik, misalnya: \"Analisis asersi sudah tepat, tetapi belum menjelaskan kenapa insentif bonus meningkatkan risiko.\" Hindari komentar umum seperti \"sudah bagus\"."
        }
      ]
    },
    {
      "kind": "section",
      "layer": "main",
      "blocks": [
        {
          "kind": "p",
          "text": "**Sumber:** Grading and AI Policies AKA201; Arens dkk. 15th Canadian ed. pp.105, 109–110, 208–209; ISA/SA 200 paras. A21, A23, A25, A50; ISA/SA 315 para. A190; ISA/SA 320 para. A14. Ketiga kasus adalah susunan penulis untuk latihan."
        }
      ]
    }
  ]
};
