// AKK202 TM9: diperiksa terhadap Kieso IFRS 5e dan RPP lokal.
import type { Reading } from '../../../types';

export const TM9_READING: Reading = {
  "tm": 9,
  "title": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
  "ref": "Kieso IFRS 5e Ch. 13 | RPP AKM II, halaman PDF 3",
  "intro": "TM09 melanjutkan fondasi liabilitas dengan penilaian obligasi, amortisasi diskonto dan premi, serta penerbitan di antara tanggal bunga. Fokusnya adalah memisahkan kas kupon dari beban bunga efektif.",
  "objectives": [
    "Menjelaskan bond indenture (perjanjian obligasi) dan jenis obligasi.",
    "Menghitung present value (nilai kini) pokok dan kupon dengan periode yang konsisten.",
    "Menyusun amortisasi serta jurnal penerbit dan bunga akrual.",
    "Memisahkan accrued interest (bunga berjalan) dari harga obligasi."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "1. Orientation / Quick Map"
    },
    {
      "kind": "figure",
      "title": "Peta konsep TM9",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 680 340\" role=\"img\" aria-label=\"Peta analisis TM9\" style=\"width:100%;height:auto;font-family:Inter,Arial,sans-serif\"><rect x=\"8\" y=\"8\" width=\"664\" height=\"324\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\"/><text x=\"28\" y=\"34\" font-size=\"16\" fill=\"#38bdf8\" font-weight=\"700\">Peta analisis TM9</text><rect x=\"24\" y=\"48\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"70\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">1. Kontrak</text><text x=\"40\" y=\"90\" font-size=\"12\" fill=\"#e2e8f0\">Tentukan pokok, kupon, jadwal, dan yield.</text><rect x=\"24\" y=\"116\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"138\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">2. Penilaian</text><text x=\"40\" y=\"158\" font-size=\"12\" fill=\"#e2e8f0\">Diskontokan kupon dan pokok dalam periode yang sama.</text><rect x=\"24\" y=\"184\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"206\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">3. Amortisasi</text><text x=\"40\" y=\"226\" font-size=\"12\" fill=\"#e2e8f0\">Bandingkan beban efektif dengan kas kupon.</text><rect x=\"24\" y=\"252\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"274\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">4. Jurnal</text><text x=\"40\" y=\"294\" font-size=\"12\" fill=\"#e2e8f0\">Pisahkan liabilitas obligasi dari bunga akrual.</text></svg>",
      "overview": {
        "heading": "Liabilitas Jangka Panjang: Harga Obligasi dan Suku Bunga Efektif",
        "cards": [
          {
            "title": "Kontrak",
            "subtitle": "Langkah analisis",
            "items": [
              "Tentukan pokok, kupon, jadwal, dan yield."
            ],
            "takeaway": "Tentukan pokok, kupon, jadwal, dan yield."
          },
          {
            "title": "Penilaian",
            "subtitle": "Langkah analisis",
            "items": [
              "Diskontokan kupon dan pokok dalam periode yang sama."
            ],
            "takeaway": "Diskontokan kupon dan pokok dalam periode yang sama."
          },
          {
            "title": "Amortisasi",
            "subtitle": "Langkah analisis",
            "items": [
              "Bandingkan beban efektif dengan kas kupon."
            ],
            "takeaway": "Bandingkan beban efektif dengan kas kupon."
          },
          {
            "title": "Jurnal",
            "subtitle": "Langkah analisis",
            "items": [
              "Pisahkan liabilitas obligasi dari bunga akrual."
            ],
            "takeaway": "Pisahkan liabilitas obligasi dari bunga akrual."
          }
        ],
        "footer": "RPP AKM II, halaman PDF 3; Kieso IFRS 5e Ch. 13."
      },
      "transcript": [
        "Kontrak: Tentukan pokok, kupon, jadwal, dan yield.",
        "Penilaian: Diskontokan kupon dan pokok dalam periode yang sama.",
        "Amortisasi: Bandingkan beban efektif dengan kas kupon.",
        "Jurnal: Pisahkan liabilitas obligasi dari bunga akrual."
      ],
      "caption": "Peta pembelajaran mengikuti RPP AKM II, halaman PDF 3, dengan bab disesuaikan ke Kieso IFRS 5e Ch. 13."
    },
    {
      "kind": "h2",
      "text": "2. Kontrak, jenis, dan risiko obligasi"
    },
    {
      "kind": "p",
      "text": "Bond indenture adalah kontrak yang menetapkan nominal, bunga, jatuh tempo, dan covenant atau pembatasan bagi penerbit. Secured bonds memakai agunan; debentures tidak memakai agunan khusus. Term bonds jatuh tempo serentak, serial bonds bertahap, dan callable bonds dapat ditebus penerbit sesuai kontrak. (Kieso IFRS 5e, halaman PDF 1104-1105.)"
    },
    {
      "kind": "table",
      "title": "Komponen penilaian obligasi",
      "headers": [
        "Istilah",
        "Makna Indonesia",
        "Penggunaan"
      ],
      "rows": [
        [
          "Face value",
          "Nilai nominal",
          "Pokok yang dilunasi saat jatuh tempo"
        ],
        [
          "Stated rate",
          "Suku bunga kupon",
          "Menentukan kas bunga kontraktual"
        ],
        [
          "Effective rate",
          "Suku bunga efektif pasar",
          "Mendiskontokan arus kas dan mengukur beban bunga"
        ],
        [
          "Carrying amount",
          "Nilai tercatat",
          "Dasar beban bunga tiap periode"
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1107-1110.",
      "stackOnMobile": true
    },
    {
      "kind": "h2",
      "text": "3. Penilaian dan konsistensi periode"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle PV=F(1+i)^{-n}+C\\frac{1-(1+i)^{-n}}{i}",
      "note": "F = pokok; C = kupon per periode; i = bunga efektif per periode; n = jumlah periode. Kieso IFRS 5e, halaman PDF 1107-1111."
    },
    {
      "kind": "p",
      "text": "Untuk bunga semesteran, gunakan suku bunga tahunan dibagi dua dan jumlah tahun dikali dua. Kupon di bawah yield menghasilkan discount (diskonto); kupon di atas yield menghasilkan premium (premi). Pada penerbitan at par (nilai pari), keduanya sama. (Kieso IFRS 5e, halaman PDF 1107-1112.)"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle E_t=B_{t-1}i\\qquad A_t=E_t-C\\qquad B_t=B_{t-1}+A_t",
      "note": "E = beban bunga; B = nilai tercatat; A positif untuk amortisasi diskonto dan negatif untuk premi. Kieso IFRS 5e, halaman PDF 1110-1113."
    },
    {
      "kind": "h2",
      "text": "4. Kasus Evermaster: diskonto dan premi"
    },
    {
      "kind": "example",
      "title": "Evermaster AG: obligasi diskonto, Illustrations 13.6-13.7",
      "blocks": [
        {
          "kind": "p",
          "text": "Pada 1 Januari 2025 Evermaster menerbitkan obligasi nominal €100.000, kupon 8%, umur lima tahun, dengan bunga setiap 1 Juli dan 1 Januari. Yield tahunan 10%. Buku membulatkan harga ke €92.278. (Kieso IFRS 5e, halaman PDF 1110-1111.)"
        },
        {
          "kind": "table",
          "title": "Dua periode awal amortisasi diskonto",
          "headers": [
            "Tanggal",
            "Kas kupon",
            "Beban bunga",
            "Amortisasi",
            "Nilai tercatat"
          ],
          "rows": [
            [
              "1 Januari 2025",
              "€0",
              "€0",
              "€0",
              "€92.278"
            ],
            [
              "1 Juli 2025",
              "€4.000",
              "€4.614",
              "€614",
              "€92.892"
            ],
            [
              "1 Januari 2026",
              "€4.000",
              "€4.645",
              "€645",
              "€93.537"
            ]
          ],
          "caption": "Kieso IFRS 5e, halaman PDF 1111, Illustration 13.7.",
          "stackOnMobile": true
        },
        {
          "kind": "journal",
          "title": "Penerbitan diskonto: net method (metode nilai neto)",
          "caption": "Kieso IFRS 5e, halaman PDF 1112.",
          "lines": [
            {
              "account": "Cash",
              "debit": "€92.278"
            },
            {
              "account": "Bonds Payable",
              "credit": "€92.278",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "journal",
          "title": "Bunga pertama, 1 Juli 2025",
          "caption": "Kieso IFRS 5e, halaman PDF 1112.",
          "lines": [
            {
              "account": "Interest Expense",
              "debit": "€4.614"
            },
            {
              "account": "Bonds Payable",
              "credit": "€614",
              "isCredit": true
            },
            {
              "account": "Cash",
              "credit": "€4.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "journal",
          "title": "Akrual bunga pada 31 Desember 2025",
          "caption": "Kieso IFRS 5e, halaman PDF 1112.",
          "lines": [
            {
              "account": "Interest Expense",
              "debit": "€4.645"
            },
            {
              "account": "Interest Payable",
              "credit": "€4.000",
              "isCredit": true
            },
            {
              "account": "Bonds Payable",
              "credit": "€645",
              "isCredit": true
            }
          ]
        }
      ]
    },
    {
      "kind": "example",
      "title": "Evermaster: yield 6% dan penerbitan premi",
      "blocks": [
        {
          "kind": "p",
          "text": "Dengan kontrak yang sama dan yield tahunan 6%, harga pada buku €108.530. Bunga efektif semester pertama €3.256, kas kupon €4.000, amortisasi premi €744, dan nilai tercatat akhir €107.786. Pembulatan tabel buku dipertahankan. (Kieso IFRS 5e, halaman PDF 1112-1113.)"
        },
        {
          "kind": "journal",
          "title": "Bunga pertama pada obligasi premi",
          "caption": "Kieso IFRS 5e, halaman PDF 1113.",
          "lines": [
            {
              "account": "Interest Expense",
              "debit": "€3.256"
            },
            {
              "account": "Bonds Payable",
              "debit": "€744"
            },
            {
              "account": "Cash",
              "credit": "€4.000",
              "isCredit": true
            }
          ]
        }
      ]
    },
    {
      "kind": "h2",
      "text": "5. Penerbitan antar-tanggal dan biaya emisi"
    },
    {
      "kind": "p",
      "text": "Pada penerbitan at par tanggal 1 Mei, Evermaster menerima harga pokok €100.000 dan accrued interest empat bulan €2.667. Pembayaran kupon 1 Juli tetap €4.000. Beban bunga dua bulan setelah penerbitan adalah €1.333. Buku mengkredit Interest Expense atas bunga yang diterima; Interest Payable juga disebut sebagai alternatif. (Kieso IFRS 5e, halaman PDF 1114-1115.)"
    },
    {
      "kind": "p",
      "text": "Pada obligasi premi yang diterbitkan antar-tanggal, harga pokok dan amortisasi parsial harus dihitung terpisah dari bunga berjalan. Untuk liabilitas pada amortized cost (biaya perolehan diamortisasi), bond issue costs (biaya penerbitan obligasi) mengurangi nilai tercatat awal dan menaikkan suku bunga efektif. (Kieso IFRS 5e, halaman PDF 1115-1117, catatan 3 pada halaman PDF 1171-1172.)"
    },
    {
      "kind": "h2",
      "text": "6. Penyajian dan analisis"
    },
    {
      "kind": "p",
      "text": "Diskonto atau premi diamortisasi hingga jatuh tempo, walaupun kontrak memiliki call provision atau hak penebusan awal. Penggunaan bunga efektif menjaga hubungan beban bunga dengan nilai tercatat. Kas kupon tetap mengikuti kontrak. (Kieso IFRS 5e, halaman PDF 1110-1113, catatan 5 pada halaman PDF 1172.)"
    },
    {
      "kind": "callout",
      "title": "Jebakan periode dan pembulatan",
      "text": "Kupon tahunan 8% dengan dua pembayaran berarti 4% per semester. Yield tahunan 10% berarti 5% per semester. Harga dan tabel Evermaster dibulatkan ke euro; perhitungan tanpa pembulatan dapat berbeda kecil. (Kieso IFRS 5e, halaman PDF 1111-1113.)",
      "variant": "warning"
    },
    {
      "kind": "h2",
      "text": "7. Latihan dan uji pemahaman"
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan diskonto Evermaster",
      "prompt": "Dengan data Evermaster nominal €100.000, kupon 8%, yield 10%, bunga semesteran, dan harga €92.278, hitung kupon, beban bunga semester pertama, amortisasi, dan nilai tercatat akhir. Rujukan: Kieso IFRS 5e, halaman PDF 1110-1112.",
      "blocks": [
        {
          "kind": "formula",
          "text": "\\displaystyle C=100000(0.08)/2=4000\\qquad E_1\\approx92278(0.10)/2=4614\\\\A_1=4614-4000=614\\qquad B_1=92278+614=92892",
          "note": "Angka dibulatkan mengikuti buku. Kieso IFRS 5e, halaman PDF 1111."
        },
        {
          "kind": "p",
          "text": "Diskonto meningkat melalui kredit Bonds Payable. Untuk premi, selisih kas yang melebihi beban bunga mengurangi Bonds Payable melalui debit. (Kieso IFRS 5e, halaman PDF 1112-1113.)"
        }
      ]
    },
    {
      "kind": "h2",
      "text": "8. Exam Toolkit"
    },
    {
      "kind": "table",
      "title": "Alur penyelesaian TM9",
      "headers": [
        "Langkah",
        "Pemeriksaan"
      ],
      "rows": [
        [
          "Kontrak",
          "Tentukan pokok, kupon, jadwal, dan yield."
        ],
        [
          "Penilaian",
          "Diskontokan kupon dan pokok dalam periode yang sama."
        ],
        [
          "Amortisasi",
          "Bandingkan beban efektif dengan kas kupon."
        ],
        [
          "Jurnal",
          "Pisahkan liabilitas obligasi dari bunga akrual."
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1107-1110.",
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
