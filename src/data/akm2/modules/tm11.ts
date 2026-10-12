// AKK202 TM11: audited source addition, 12 October 2026.
import type { Reading } from '../../../types';
export const TM11_READING: Reading = {
  "tm": 11,
  "title": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
  "ref": "Kieso IFRS 5e Ch. 14 | RPP AKM II, halaman PDF 3",
  "intro": "TM11 membahas equity (ekuitas), penerbitan saham, treasury shares (saham treasuri), dan dividend policy (kebijakan dividen). Jurnal memakai aturan IFRS yang dijelaskan buku, termasuk dividen saham pada nilai nominal.",
  "objectives": [
    "Membedakan contributed capital (modal disetor) dan retained earnings (saldo laba).",
    "Mencatat transaksi treasuri dengan cost method (metode biaya).",
    "Menjelaskan dividen kas, properti, likuidasi, dan saham.",
    "Memisahkan hibah pemerintah dari transaksi pemilik."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "1. Orientation / Quick Map"
    },
    {
      "kind": "callout",
      "variant": "note",
      "title": "Versi sumber dan batas standar nasional",
      "text": "Kasus menggunakan Kieso IFRS 5e (2024). RPP AKM II PDF 3 juga meminta konteks standar Indonesia serta SAK ETAP pada bagian terkait. IAI menyatakan SAK Entitas Privat menggantikan SAK ETAP sejak 1 Januari 2025. Dokumen lokal bertanda DE adalah draf eksposur. Rincian perbedaan standar nasional belum seluruhnya diverifikasi; contoh buku tidak otomatis menjadi ketentuan Indonesia. Rujukan: RPP AKM II, halaman PDF 3; [IAI, Tentang SAK ETAP](https://web.iaiglobal.or.id/SAK-IAI/Tentang%20SAK%20ETAP)."
    },
    {
      "kind": "figure",
      "title": "Peta konsep TM11",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 680 340\" role=\"img\" aria-label=\"Peta analisis TM11\" style=\"width:100%;height:auto;font-family:Inter,Arial,sans-serif\"><rect x=\"8\" y=\"8\" width=\"664\" height=\"324\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\"/><text x=\"28\" y=\"34\" font-size=\"16\" fill=\"#38bdf8\" font-weight=\"700\">Peta analisis TM11</text><rect x=\"24\" y=\"48\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"70\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">1. Modal</text><text x=\"40\" y=\"90\" font-size=\"12\" fill=\"#e2e8f0\">Pisahkan nominal saham, agio, saldo laba, dan OCI.</text><rect x=\"24\" y=\"116\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"138\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">2. Treasuri</text><text x=\"40\" y=\"158\" font-size=\"12\" fill=\"#e2e8f0\">Gunakan biaya perolehan dan urutan saldo agio.</text><rect x=\"24\" y=\"184\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"206\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">3. Dividen</text><text x=\"40\" y=\"226\" font-size=\"12\" fill=\"#e2e8f0\">Tentukan jenis dan tanggal pengakuan.</text><rect x=\"24\" y=\"252\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"274\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">4. Penyajian</text><text x=\"40\" y=\"294\" font-size=\"12\" fill=\"#e2e8f0\">Rekonsiliasi perubahan setiap komponen ekuitas.</text></svg>",
      "overview": {
        "heading": "Ekuitas Pemegang Saham, Saham Treasuri, dan Dividen",
        "cards": [
          {
            "title": "Modal",
            "subtitle": "Langkah analisis",
            "items": [
              "Pisahkan nominal saham, agio, saldo laba, dan OCI."
            ],
            "takeaway": "Pisahkan nominal saham, agio, saldo laba, dan OCI."
          },
          {
            "title": "Treasuri",
            "subtitle": "Langkah analisis",
            "items": [
              "Gunakan biaya perolehan dan urutan saldo agio."
            ],
            "takeaway": "Gunakan biaya perolehan dan urutan saldo agio."
          },
          {
            "title": "Dividen",
            "subtitle": "Langkah analisis",
            "items": [
              "Tentukan jenis dan tanggal pengakuan."
            ],
            "takeaway": "Tentukan jenis dan tanggal pengakuan."
          },
          {
            "title": "Penyajian",
            "subtitle": "Langkah analisis",
            "items": [
              "Rekonsiliasi perubahan setiap komponen ekuitas."
            ],
            "takeaway": "Rekonsiliasi perubahan setiap komponen ekuitas."
          }
        ],
        "footer": "RPP AKM II, halaman PDF 3; Kieso IFRS 5e Ch. 14."
      },
      "transcript": [
        "Modal: Pisahkan nominal saham, agio, saldo laba, dan OCI.",
        "Treasuri: Gunakan biaya perolehan dan urutan saldo agio.",
        "Dividen: Tentukan jenis dan tanggal pengakuan.",
        "Penyajian: Rekonsiliasi perubahan setiap komponen ekuitas."
      ],
      "caption": "Peta pembelajaran mengikuti RPP AKM II, halaman PDF 3, dengan bab disesuaikan ke Kieso IFRS 5e Ch. 14."
    },
    {
      "kind": "h2",
      "text": "2. Komponen ekuitas dan penerbitan saham"
    },
    {
      "kind": "p",
      "text": "Equity merupakan hak residual atas aset setelah liabilitas. Contributed capital berasal dari setoran pemegang saham, sedangkan earned capital tercermin dalam retained earnings. Share premium (agio saham) adalah setoran di atas nominal. Nilai nominal tidak menunjukkan nilai wajar saham. (Kieso IFRS 5e, halaman PDF 1179-1181.)"
    },
    {
      "kind": "table",
      "title": "Penerbitan dan komponen ekuitas",
      "headers": [
        "Komponen",
        "Makna",
        "Pencatatan"
      ],
      "rows": [
        [
          "Share capital",
          "Modal saham",
          "Nilai nominal saham yang diterbitkan"
        ],
        [
          "Share premium",
          "Agio saham",
          "Setoran di atas nominal"
        ],
        [
          "Retained earnings",
          "Saldo laba",
          "Laba yang ditahan dalam perusahaan"
        ],
        [
          "AOCI",
          "Akumulasi OCI",
          "Akumulasi penghasilan komprehensif lain"
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1179-1181.",
      "stackOnMobile": true
    },
    {
      "kind": "p",
      "text": "Untuk penerbitan gabungan beberapa kelas saham, buku membedakan proportional method (alokasi nilai wajar relatif ketika keduanya diketahui) dan incremental method (alokasi dahulu ke instrumen yang nilai wajarnya diketahui). Aturan ini dibahas untuk lump-sum share issuance; obligasi dengan waran pada TM12 menggunakan metode residual. (Kieso IFRS 5e, halaman PDF 1182-1184.)"
    },
    {
      "kind": "h2",
      "text": "3. Saham preferen dan saham treasuri"
    },
    {
      "kind": "p",
      "text": "Cumulative preference shares menuntut penyelesaian dividen tertunggak sebelum dividen saham biasa. Dividends in arrears (dividen tertunggak) diungkapkan dan belum menjadi liabilitas sebelum deklarasi. Participating preference shares dapat memperoleh bagian tambahan menurut kontrak. Saham preferen dengan kewajiban penebusan memerlukan perhatian pada klasifikasi liabilitas. (Kieso IFRS 5e, halaman PDF 1186-1188.)"
    },
    {
      "kind": "p",
      "text": "Treasury shares adalah saham sendiri yang dibeli kembali. Akun ini mengurangi ekuitas dan jumlah saham beredar. Pada cost method, biaya perolehan menjadi nilai debit ketika dibeli dan kredit ketika diterbitkan kembali. Selisih transaksi treasuri dicatat dalam ekuitas. (Kieso IFRS 5e, halaman PDF 1190-1193.)"
    },
    {
      "kind": "h2",
      "text": "4. Kasus Pacific: penerbitan kembali treasuri"
    },
    {
      "kind": "example",
      "title": "Pacific: transaksi treasuri dengan cost method",
      "blocks": [
        {
          "kind": "p",
          "text": "Pacific membeli 10.000 saham sendiri pada USD11 per saham. Selanjutnya Pacific menjual 1.000 saham pada USD15, lalu 1.000 saham pada USD8, dan 1.000 saham lagi pada USD8. Ikuti urutan transaksi karena saldo agio treasuri berubah. (Kieso IFRS 5e, halaman PDF 1191-1193.)"
        },
        {
          "kind": "journal",
          "title": "Penjualan pertama di atas biaya",
          "caption": "Kieso IFRS 5e, halaman PDF 1192.",
          "lines": [
            {
              "account": "Cash",
              "debit": "USD15.000"
            },
            {
              "account": "Treasury Shares",
              "credit": "USD11.000",
              "isCredit": true
            },
            {
              "account": "Share Premium - Treasury",
              "credit": "USD4.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "journal",
          "title": "Penjualan kedua di bawah biaya",
          "caption": "Kieso IFRS 5e, halaman PDF 1192.",
          "lines": [
            {
              "account": "Cash",
              "debit": "USD8.000"
            },
            {
              "account": "Share Premium - Treasury",
              "debit": "USD3.000"
            },
            {
              "account": "Treasury Shares",
              "credit": "USD11.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "journal",
          "title": "Penjualan ketiga setelah saldo agio berkurang",
          "caption": "Kieso IFRS 5e, halaman PDF 1193.",
          "lines": [
            {
              "account": "Cash",
              "debit": "USD8.000"
            },
            {
              "account": "Share Premium - Treasury",
              "debit": "USD1.000"
            },
            {
              "account": "Retained Earnings",
              "debit": "USD2.000"
            },
            {
              "account": "Treasury Shares",
              "credit": "USD11.000",
              "isCredit": true
            }
          ]
        }
      ]
    },
    {
      "kind": "h2",
      "text": "5. Dividen kas, properti, dan saham"
    },
    {
      "kind": "p",
      "text": "Cash dividend (dividen kas) menjadi liabilitas pada declaration date (tanggal deklarasi). Record date (tanggal pencatatan pemegang saham) tidak memerlukan jurnal. Saham treasuri tidak menerima dividen kas. Property dividend (dividen properti) memakai nilai wajar aset pada tanggal deklarasi dan mengakui penyesuaian aset terlebih dahulu. (Kieso IFRS 5e, halaman PDF 1196-1197, dividen properti pada halaman PDF 1200-1201.)"
    },
    {
      "kind": "example",
      "title": "Vine plc: dividen saham 10%",
      "blocks": [
        {
          "kind": "p",
          "text": "Vine memiliki 100.000 saham nominal £1, retained earnings £50.000, dan menyatakan dividen saham 10%. Nilai pasar £8 per saham tidak dipakai sebagai dasar transfer. Dividen saham sebesar £10.000 direklasifikasi dari saldo laba ke ekuitas modal saham. (Kieso IFRS 5e, halaman PDF 1202-1204, Illustration 14.13.)"
        },
        {
          "kind": "journal",
          "title": "Deklarasi dividen saham Vine",
          "caption": "Kieso IFRS 5e, halaman PDF 1203.",
          "lines": [
            {
              "account": "Retained Earnings",
              "debit": "£10.000"
            },
            {
              "account": "Ordinary Share Dividend Distributable",
              "credit": "£10.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "journal",
          "title": "Distribusi dividen saham Vine",
          "caption": "Kieso IFRS 5e, halaman PDF 1203.",
          "lines": [
            {
              "account": "Ordinary Share Dividend Distributable",
              "debit": "£10.000"
            },
            {
              "account": "Share Capital - Ordinary",
              "credit": "£10.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "callout",
          "title": "Dasar pengukuran dividen saham",
          "text": "Buku IFRS memakai par value (nilai nominal) untuk dividen saham. Rumusan dividen saham kecil pada nilai pasar berasal dari pembahasan lain dan tidak dipakai untuk kasus Vine. (Kieso IFRS 5e, halaman PDF 1203.)",
          "variant": "warning"
        }
      ]
    },
    {
      "kind": "p",
      "text": "Liquidating dividend (dividen likuidasi) mengembalikan modal. Share split (pemecahan saham) mengubah jumlah saham dan nominal per saham, tanpa mengubah total ekuitas. (Kieso IFRS 5e, halaman PDF 1201-1205.)"
    },
    {
      "kind": "h2",
      "text": "6. Hibah pemerintah dan analisis ekuitas"
    },
    {
      "kind": "p",
      "text": "Government grant (hibah pemerintah) terkait pemenuhan kondisi kegiatan usaha. Dalam pembahasan Kieso, income approach (pendekatan pendapatan) mengakui hibah secara sistematis bersama biaya terkait. Untuk aset, hibah dapat disajikan sebagai deferred grant revenue (pendapatan hibah ditangguhkan) atau pengurang nilai tercatat aset. Pemerintah bukan pemegang saham pada transaksi hibah ini. (Kieso IFRS 5e, halaman PDF 774-775, Ch. 9, topik tambahan yang dicantumkan RPP.)"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle \\text{Return on ordinary equity}=\\frac{\\text{Net income}-\\text{Preference dividends}}{\\text{Average ordinary equity}}",
      "note": "Ukuran imbal hasil untuk pemegang saham biasa. Kieso IFRS 5e, halaman PDF 1211."
    },
    {
      "kind": "p",
      "text": "Statement of changes in equity (laporan perubahan ekuitas) memisahkan kontribusi pemilik, distribusi, laba, OCI, dan saldo setiap komponen ekuitas. Analisis dividen perlu melihat laba dan ketersediaan kas secara terpisah. (Kieso IFRS 5e, halaman PDF 1195-1196, penyajian pada halaman PDF 1209-1210.)"
    },
    {
      "kind": "h2",
      "text": "7. Latihan dan uji pemahaman"
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan Tsen: dividen properti",
      "prompt": "Tsen mendeklarasikan dividen berupa investasi bernilai buku HKD1.250.000 dan nilai wajar HKD2.000.000. Tentukan penyesuaian aset serta liabilitas dividen. Rujukan: Kieso IFRS 5e, halaman PDF 1201, Illustration 14.11.",
      "blocks": [
        {
          "kind": "formula",
          "text": "\\displaystyle \\text{Gain}=2000000-1250000=750000\\qquad\\text{Dividend payable}=2000000",
          "note": "Kieso IFRS 5e, halaman PDF 1201."
        },
        {
          "kind": "journal",
          "title": "Penyesuaian investasi ke nilai wajar",
          "caption": "Kieso IFRS 5e, halaman PDF 1201.",
          "lines": [
            {
              "account": "Equity Investments",
              "debit": "HKD750.000"
            },
            {
              "account": "Unrealized Holding Gain - Income",
              "credit": "HKD750.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "journal",
          "title": "Deklarasi dividen properti",
          "caption": "Kieso IFRS 5e, halaman PDF 1201.",
          "lines": [
            {
              "account": "Retained Earnings",
              "debit": "HKD2.000.000"
            },
            {
              "account": "Property Dividends Payable",
              "credit": "HKD2.000.000",
              "isCredit": true
            }
          ]
        }
      ]
    },
    {
      "kind": "p",
      "text": "Dividen properti diukur memakai nilai wajar aset yang dibagikan. Pada Tsen, kenaikan nilai dari 1.250.000 menjadi 2.000.000 euro diakui sebelum utang dividen dicatat. Deklarasi menghasilkan kewajiban, dan distribusi melunasinya. Tanggal keputusan tidak sama dengan tanggal arus aset. [Kieso IFRS 5e, halaman PDF 1201] Rujukan pemeriksaan: Kieso IFRS 5e, halaman PDF 1201, Illustration 14.14."
    },
    {
      "kind": "h2",
      "text": "8. Exam Toolkit"
    },
    {
      "kind": "table",
      "title": "Alur penyelesaian TM11",
      "headers": [
        "Langkah",
        "Pemeriksaan"
      ],
      "rows": [
        [
          "Modal",
          "Pisahkan nominal saham, agio, saldo laba, dan OCI."
        ],
        [
          "Treasuri",
          "Gunakan biaya perolehan dan urutan saldo agio."
        ],
        [
          "Dividen",
          "Tentukan jenis dan tanggal pengakuan."
        ],
        [
          "Penyajian",
          "Rekonsiliasi perubahan setiap komponen ekuitas."
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1179-1181.",
      "stackOnMobile": true
    },
    {
      "kind": "callout",
      "title": "Batas sumber dan penomoran",
      "text": "RPP menggunakan nomor bab dan beberapa rujukan lokal dari susunan lama. Materi ini mengikuti topik pertemuan di RPP dan isi Kieso IFRS edisi kelima. Angka contoh berasal dari buku; hasil hitungan tambahan diberi label Interpretasi. Pembandingan SAK ETAP memerlukan bacaan dosen tersendiri. (Kieso IFRS 5e, halaman PDF 1174.)",
      "variant": "info"
    }
  ]
};
