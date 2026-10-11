// AKK202 TM10: diperiksa terhadap Kieso IFRS 5e dan RPP lokal.
import type { Reading } from '../../../types';

export const TM10_READING: Reading = {
  "tm": 10,
  "title": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
  "ref": "Kieso IFRS 5e Ch. 13 | RPP AKM II, halaman PDF 3",
  "intro": "TM10 membahas long-term notes payable (wesel bayar jangka panjang), extinguishment (penghentian utang), modifikasi persyaratan, dan fair value option (opsi nilai wajar). Bedakan penghapusan utang dari pembayaran bunga dan pelepasan aset.",
  "objectives": [
    "Menilai wesel berbunga dan tanpa kupon menggunakan nilai kini.",
    "Memisahkan laba rugi pelepasan aset dan penghentian utang.",
    "Memeriksa modifikasi substansial secara kuantitatif dan kualitatif.",
    "Menjelaskan perubahan nilai wajar akibat pasar dan risiko kredit sendiri."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "1. Orientation / Quick Map"
    },
    {
      "kind": "figure",
      "title": "Peta konsep TM10",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 680 340\" role=\"img\" aria-label=\"Peta analisis TM10\" style=\"width:100%;height:auto;font-family:Inter,Arial,sans-serif\"><rect x=\"8\" y=\"8\" width=\"664\" height=\"324\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\"/><text x=\"28\" y=\"34\" font-size=\"16\" fill=\"#38bdf8\" font-weight=\"700\">Peta analisis TM10</text><rect x=\"24\" y=\"48\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"70\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">1. Wesel</text><text x=\"40\" y=\"90\" font-size=\"12\" fill=\"#e2e8f0\">Hitung nilai kini dan bunga efektif.</text><rect x=\"24\" y=\"116\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"138\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">2. Pelunasan</text><text x=\"40\" y=\"158\" font-size=\"12\" fill=\"#e2e8f0\">Mutakhirkan nilai tercatat sebelum menghitung laba rugi.</text><rect x=\"24\" y=\"184\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"206\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">3. Imbalan</text><text x=\"40\" y=\"226\" font-size=\"12\" fill=\"#e2e8f0\">Pisahkan aset atau saham yang diserahkan.</text><rect x=\"24\" y=\"252\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"274\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">4. Pelaporan</text><text x=\"40\" y=\"294\" font-size=\"12\" fill=\"#e2e8f0\">Bedakan amortized cost, nilai wajar, dan OCI.</text></svg>",
      "overview": {
        "heading": "Wesel Jangka Panjang, Pelunasan Utang, dan Opsi Nilai Wajar",
        "cards": [
          {
            "title": "Wesel",
            "subtitle": "Langkah analisis",
            "items": [
              "Hitung nilai kini dan bunga efektif."
            ],
            "takeaway": "Hitung nilai kini dan bunga efektif."
          },
          {
            "title": "Pelunasan",
            "subtitle": "Langkah analisis",
            "items": [
              "Mutakhirkan nilai tercatat sebelum menghitung laba rugi."
            ],
            "takeaway": "Mutakhirkan nilai tercatat sebelum menghitung laba rugi."
          },
          {
            "title": "Imbalan",
            "subtitle": "Langkah analisis",
            "items": [
              "Pisahkan aset atau saham yang diserahkan."
            ],
            "takeaway": "Pisahkan aset atau saham yang diserahkan."
          },
          {
            "title": "Pelaporan",
            "subtitle": "Langkah analisis",
            "items": [
              "Bedakan amortized cost, nilai wajar, dan OCI."
            ],
            "takeaway": "Bedakan amortized cost, nilai wajar, dan OCI."
          }
        ],
        "footer": "RPP AKM II, halaman PDF 3; Kieso IFRS 5e Ch. 13."
      },
      "transcript": [
        "Wesel: Hitung nilai kini dan bunga efektif.",
        "Pelunasan: Mutakhirkan nilai tercatat sebelum menghitung laba rugi.",
        "Imbalan: Pisahkan aset atau saham yang diserahkan.",
        "Pelaporan: Bedakan amortized cost, nilai wajar, dan OCI."
      ],
      "caption": "Peta pembelajaran mengikuti RPP AKM II, halaman PDF 3, dengan bab disesuaikan ke Kieso IFRS 5e Ch. 13."
    },
    {
      "kind": "h2",
      "text": "2. Wesel dan pengukuran awal"
    },
    {
      "kind": "p",
      "text": "Long-term notes payable memiliki jatuh tempo dan bunga eksplisit atau implisit. Nilai awalnya adalah nilai kini kas pokok dan bunga. Zero-interest-bearing note (wesel tanpa kupon) tetap memiliki beban bunga implisit apabila kas awal lebih rendah daripada nominal yang dibayar nanti. (Kieso IFRS 5e, halaman PDF 1117-1120.)"
    },
    {
      "kind": "table",
      "title": "Wesel pada nilai pari dan diskonto",
      "headers": [
        "Kondisi",
        "Pengukuran",
        "Beban bunga"
      ],
      "rows": [
        [
          "Kupon = bunga efektif",
          "Nilai nominal",
          "Kupon kontraktual"
        ],
        [
          "Kupon di bawah bunga efektif",
          "Nilai kini di bawah nominal",
          "Nilai tercatat awal × bunga efektif"
        ],
        [
          "Tanpa kupon",
          "Kas diterima atau nilai kini transaksi",
          "Pertambahan nilai tercatat tiap periode"
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1118-1120.",
      "stackOnMobile": true
    },
    {
      "kind": "h2",
      "text": "3. Nilai kini dan penghentian utang"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle PV=\\frac{F}{(1+i)^n}\\qquad E_t=B_{t-1}i",
      "note": "Untuk wesel tanpa kupon, seluruh beban bunga menambah nilai tercatat. Kieso IFRS 5e, halaman PDF 1118-1119."
    },
    {
      "kind": "p",
      "text": "Pada pelunasan sebelum jatuh tempo, mutakhirkan amortisasi dan bunga akrual hingga tanggal transaksi. Reacquisition price adalah harga untuk memperoleh kembali utang. Selisih terhadap carrying amount diakui sebagai laba atau rugi penghentian utang. (Kieso IFRS 5e, halaman PDF 1126-1128, catatan 12 pada halaman PDF 1173.)"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle \\text{Gain on extinguishment}=\\text{Carrying amount}-\\text{Reacquisition price}",
      "note": "Hasil negatif menunjukkan loss (rugi). Kieso IFRS 5e, halaman PDF 1128."
    },
    {
      "kind": "h2",
      "text": "4. Kasus wesel dan pelunasan Evermaster"
    },
    {
      "kind": "example",
      "title": "Turtle Cove: wesel tanpa kupon tiga tahun",
      "blocks": [
        {
          "kind": "p",
          "text": "Turtle Cove menerbitkan wesel nominal USD10.000 dan menerima USD7.721,80 dengan bunga implisit 9%. Jadwal buku menunjukkan beban bunga tahun pertama USD694,96, tahun kedua USD757,51, dan tahun ketiga USD825,73. Angka terakhir mencakup penyesuaian pembulatan lima sen. (Kieso IFRS 5e, halaman PDF 1118-1119, Illustration 13.15.)"
        },
        {
          "kind": "journal",
          "title": "Penerbitan wesel",
          "caption": "Kieso IFRS 5e, halaman PDF 1119.",
          "lines": [
            {
              "account": "Cash",
              "debit": "USD7.721,80"
            },
            {
              "account": "Notes Payable",
              "credit": "USD7.721,80",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "journal",
          "title": "Bunga tahun pertama",
          "caption": "Kieso IFRS 5e, halaman PDF 1119.",
          "lines": [
            {
              "account": "Interest Expense",
              "debit": "USD694,96"
            },
            {
              "account": "Notes Payable",
              "credit": "USD694,96",
              "isCredit": true
            }
          ]
        }
      ]
    },
    {
      "kind": "example",
      "title": "Evermaster: penebusan pada 101",
      "blocks": [
        {
          "kind": "p",
          "text": "Pada 1 Januari 2027, nilai tercatat obligasi Evermaster €94.925. Harga tebus 101% dari nominal €100.000 adalah €101.000, sehingga loss on extinguishment sebesar €6.075. (Kieso IFRS 5e, halaman PDF 1127-1128, Illustration 13.22.)"
        },
        {
          "kind": "journal",
          "title": "Penghapusan obligasi dan rugi pelunasan",
          "caption": "Kieso IFRS 5e, halaman PDF 1128.",
          "lines": [
            {
              "account": "Bonds Payable",
              "debit": "€94.925"
            },
            {
              "account": "Loss on Extinguishment of Debt",
              "debit": "€6.075"
            },
            {
              "account": "Cash",
              "credit": "€101.000",
              "isCredit": true
            }
          ]
        }
      ]
    },
    {
      "kind": "h2",
      "text": "5. Pelunasan aset, saham, dan modifikasi"
    },
    {
      "kind": "p",
      "text": "Bonn Mortgage melunasi utang €20.000.000 dengan real estate bernilai buku €21.000.000 dan nilai wajar €16.000.000. Loss on disposal (rugi pelepasan aset) €5.000.000 terpisah dari gain on extinguishment (laba penghentian utang) €4.000.000. (Kieso IFRS 5e, halaman PDF 1128-1129.)"
    },
    {
      "kind": "journal",
      "title": "Bonn Mortgage: transfer real estate",
      "caption": "Kieso IFRS 5e, halaman PDF 1128-1129.",
      "lines": [
        {
          "account": "Notes Payable",
          "debit": "€20.000.000"
        },
        {
          "account": "Loss on Disposal of Real Estate",
          "debit": "€5.000.000"
        },
        {
          "account": "Real Estate",
          "credit": "€21.000.000",
          "isCredit": true
        },
        {
          "account": "Gain on Extinguishment of Debt",
          "credit": "€4.000.000",
          "isCredit": true
        }
      ]
    },
    {
      "kind": "p",
      "text": "Sebagai alternatif, Bonn menerbitkan 320.000 ordinary shares (saham biasa), par €10 dan nilai wajar total €16.000.000. Modal saham €3.200.000, agio €12.800.000, dan laba penghentian utang tetap €4.000.000. (Kieso IFRS 5e, halaman PDF 1129.)"
    },
    {
      "kind": "p",
      "text": "Catatan 14 buku memakai uji selisih sekurangnya 10% dengan suku bunga efektif historis atau perubahan fundamental persyaratan untuk menilai modifikasi substansial. Jadi, perubahan pokok saja belum cukup. Kasus Resorts Development yang dihentikan pengakuannya memakai nilai wajar utang baru ¥7.201.336 dan laba ¥3.298.664. (Kieso IFRS 5e, halaman PDF 1129-1131, catatan 14 pada halaman PDF 1173.)"
    },
    {
      "kind": "callout",
      "title": "Batas pembahasan modifikasi",
      "text": "Contoh Resorts Development adalah modifikasi yang diperlakukan sebagai penghentian utang. Rumusan catatan 14 tentang modifikasi non-substansial tidak dijadikan aturan umum atau latihan jurnal baru; penerapannya perlu dicocokkan dengan bacaan standar yang ditetapkan dosen. (Kieso IFRS 5e, halaman PDF 1173.)",
      "variant": "warning"
    },
    {
      "kind": "h2",
      "text": "6. Opsi nilai wajar dan rasio utang"
    },
    {
      "kind": "p",
      "text": "Fair value option mengukur liabilitas pada nilai wajar tiap tanggal pelaporan. Buku membedakan perubahan akibat kondisi pasar yang masuk profit or loss (laba rugi) dari perubahan risiko kredit entitas sendiri yang masuk OCI (penghasilan komprehensif lain), dengan pengecualian liabilitas held for trading yang dibahas sumber. (Kieso IFRS 5e, halaman PDF 1131-1132.)"
    },
    {
      "kind": "p",
      "text": "Edmonds memiliki utang €500.000 yang turun nilai wajarnya menjadi €480.000. Perubahan €20.000 masuk laba rugi apabila berasal dari perubahan bunga pasar; contoh alternatif karena penurunan kualitas kredit sendiri memasukkannya ke OCI. (Kieso IFRS 5e, halaman PDF 1131-1132.)"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle \\text{Debt to assets}=\\frac{\\text{Total liabilities}}{\\text{Total assets}}\\qquad\\text{Times interest earned}=\\frac{\\text{Income before tax}+\\text{Interest expense}}{\\text{Interest expense}}",
      "note": "Rasio pertama menilai proporsi pendanaan utang; rasio kedua menilai kemampuan menutup bunga. Kieso IFRS 5e, halaman PDF 1139."
    },
    {
      "kind": "h2",
      "text": "7. Latihan dan uji pemahaman"
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan Bonn Mortgage",
      "prompt": "Utang Bonn €20.000.000 dilunasi dengan aset bernilai buku €21.000.000 dan nilai wajar €16.000.000. Hitung kedua laba rugi secara terpisah dan jelaskan mengapa keduanya muncul. Rujukan: Kieso IFRS 5e, halaman PDF 1128-1129.",
      "blocks": [
        {
          "kind": "formula",
          "text": "\\displaystyle \\text{Loss on disposal}=21000000-16000000=5000000\\\\\\text{Gain on extinguishment}=20000000-16000000=4000000",
          "note": "Kieso IFRS 5e, halaman PDF 1128-1129."
        },
        {
          "kind": "p",
          "text": "Aset dilepas dibandingkan dengan nilai wajarnya; utang yang dihapus dibandingkan dengan nilai wajar imbalan pelunasan. Keduanya mengukur transaksi yang berbeda. (Kieso IFRS 5e, halaman PDF 1128-1129.)"
        }
      ]
    },
    {
      "kind": "h2",
      "text": "8. Exam Toolkit"
    },
    {
      "kind": "table",
      "title": "Alur penyelesaian TM10",
      "headers": [
        "Langkah",
        "Pemeriksaan"
      ],
      "rows": [
        [
          "Wesel",
          "Hitung nilai kini dan bunga efektif."
        ],
        [
          "Pelunasan",
          "Mutakhirkan nilai tercatat sebelum menghitung laba rugi."
        ],
        [
          "Imbalan",
          "Pisahkan aset atau saham yang diserahkan."
        ],
        [
          "Pelaporan",
          "Bedakan amortized cost, nilai wajar, dan OCI."
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1118-1120.",
      "stackOnMobile": true
    },
    {
      "kind": "callout",
      "title": "Batas sumber dan penomoran",
      "text": "RPP menggunakan nomor bab dan beberapa rujukan lokal dari susunan lama. Materi ini mengikuti topik pertemuan di RPP dan isi Kieso IFRS edisi kelima. Angka contoh berasal dari buku; hasil hitungan tambahan diberi label Interpretasi. Pembandingan SAK ETAP memerlukan bacaan dosen tersendiri. (Kieso IFRS 5e, halaman PDF 1101.)",
      "variant": "info"
    }
  ]
};
