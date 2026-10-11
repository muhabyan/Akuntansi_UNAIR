// AKK202 TM15: diperiksa terhadap Kieso IFRS 5e dan RPP lokal.
import type { Reading } from '../../../types';

export const TM15_READING: Reading = {
  "tm": 15,
  "title": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
  "ref": "Kieso IFRS 5e Ch. 16 | RPP AKM II, halaman PDF 3",
  "intro": "TM15 melanjutkan investasi dengan equity investments (efek ekuitas), significant influence (pengaruh signifikan), equity method (metode ekuitas), dan pengantar consolidation (konsolidasi). Bedakan dividen sebagai pendapatan dengan dividen sebagai pengurang investasi.",
  "objectives": [
    "Membedakan FVPL dan pilihan OCI untuk investasi ekuitas non-trading.",
    "Menjelaskan larangan recycling pada pilihan OCI untuk efek ekuitas.",
    "Mencatat bagian laba dan dividen investee dengan metode ekuitas.",
    "Membedakan pengaruh signifikan dan control (pengendalian) berdasarkan bukti."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "1. Orientation / Quick Map"
    },
    {
      "kind": "figure",
      "title": "Peta konsep TM15",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 680 340\" role=\"img\" aria-label=\"Peta analisis TM15\" style=\"width:100%;height:auto;font-family:Inter,Arial,sans-serif\"><rect x=\"8\" y=\"8\" width=\"664\" height=\"324\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\"/><text x=\"28\" y=\"34\" font-size=\"16\" fill=\"#38bdf8\" font-weight=\"700\">Peta analisis TM15</text><rect x=\"24\" y=\"48\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"70\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">1. Hubungan</text><text x=\"40\" y=\"90\" font-size=\"12\" fill=\"#e2e8f0\">Periksa tujuan, pengaruh signifikan, dan pengendalian.</text><rect x=\"24\" y=\"116\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"138\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">2. Nilai wajar</text><text x=\"40\" y=\"158\" font-size=\"12\" fill=\"#e2e8f0\">Tentukan jalur laba rugi atau OCI untuk efek ekuitas.</text><rect x=\"24\" y=\"184\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"206\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">3. Metode ekuitas</text><text x=\"40\" y=\"226\" font-size=\"12\" fill=\"#e2e8f0\">Akui bagian laba dan kurangi investasi atas dividen.</text><rect x=\"24\" y=\"252\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"274\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">4. Pelepasan</text><text x=\"40\" y=\"294\" font-size=\"12\" fill=\"#e2e8f0\">Periksa kategori serta batas recycling OCI.</text></svg>",
      "overview": {
        "heading": "Investasi II: Efek Ekuitas, Metode Ekuitas, dan Konsolidasi",
        "cards": [
          {
            "title": "Hubungan",
            "subtitle": "Langkah analisis",
            "items": [
              "Periksa tujuan, pengaruh signifikan, dan pengendalian."
            ],
            "takeaway": "Periksa tujuan, pengaruh signifikan, dan pengendalian."
          },
          {
            "title": "Nilai wajar",
            "subtitle": "Langkah analisis",
            "items": [
              "Tentukan jalur laba rugi atau OCI untuk efek ekuitas."
            ],
            "takeaway": "Tentukan jalur laba rugi atau OCI untuk efek ekuitas."
          },
          {
            "title": "Metode ekuitas",
            "subtitle": "Langkah analisis",
            "items": [
              "Akui bagian laba dan kurangi investasi atas dividen."
            ],
            "takeaway": "Akui bagian laba dan kurangi investasi atas dividen."
          },
          {
            "title": "Pelepasan",
            "subtitle": "Langkah analisis",
            "items": [
              "Periksa kategori serta batas recycling OCI."
            ],
            "takeaway": "Periksa kategori serta batas recycling OCI."
          }
        ],
        "footer": "RPP AKM II, halaman PDF 3; Kieso IFRS 5e Ch. 16."
      },
      "transcript": [
        "Hubungan: Periksa tujuan, pengaruh signifikan, dan pengendalian.",
        "Nilai wajar: Tentukan jalur laba rugi atau OCI untuk efek ekuitas.",
        "Metode ekuitas: Akui bagian laba dan kurangi investasi atas dividen.",
        "Pelepasan: Periksa kategori serta batas recycling OCI."
      ],
      "caption": "Peta pembelajaran mengikuti RPP AKM II, halaman PDF 3, dengan bab disesuaikan ke Kieso IFRS 5e Ch. 16."
    },
    {
      "kind": "h2",
      "text": "2. Tingkat pengaruh dan metode pelaporan"
    },
    {
      "kind": "p",
      "text": "Persentase saham suara menjadi titik awal: kurang dari 20% biasanya pasif, 20% atau lebih menimbulkan praduga significant influence, dan mayoritas suara biasanya memberi control. Praduga tersebut perlu diuji dengan bukti. Representasi direksi, partisipasi kebijakan, transaksi material, pertukaran manajemen, dan ketergantungan teknologi dapat menunjukkan pengaruh signifikan. (Kieso IFRS 5e, halaman PDF 1384, bukti pengaruh pada halaman PDF 1390-1391.)"
    },
    {
      "kind": "table",
      "title": "Pemilihan metode investasi ekuitas",
      "headers": [
        "Hubungan",
        "Metode",
        "Dasar keputusan"
      ],
      "rows": [
        [
          "Pasif, trading",
          "Fair value melalui laba rugi",
          "Tujuan perdagangan"
        ],
        [
          "Pasif, pilihan non-trading",
          "Fair value melalui OCI",
          "Pilihan per investasi"
        ],
        [
          "Significant influence",
          "Equity method",
          "Bukti pengaruh signifikan"
        ],
        [
          "Control",
          "Consolidation",
          "Kemampuan mengarahkan dan memengaruhi imbal hasil"
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1384-1394, prinsip control pada catatan 16, halaman PDF 1173.",
      "stackOnMobile": true
    },
    {
      "kind": "h2",
      "text": "3. Nilai wajar efek ekuitas"
    },
    {
      "kind": "p",
      "text": "Trading equity investments mengakui perubahan nilai wajar dalam laba rugi. Pilihan non-trading OCI diterapkan pada setiap investasi dan menempatkan perubahan nilai wajar dalam OCI. Dividen biasa pada contoh Republic tetap menjadi Dividend Revenue (pendapatan dividen). (Kieso IFRS 5e, halaman PDF 1385-1388.)"
    },
    {
      "kind": "p",
      "text": "Pada Republic, investasi Hawthorne awal €20.750, dividen €450, dan nilai wajar akhir tahun €24.000. Unrealized holding gain (laba nilai wajar belum terealisasi) €3.250 masuk OCI; dividen €450 masuk laba rugi. (Kieso IFRS 5e, halaman PDF 1387-1389, Illustrations 16.17-16.18.)"
    },
    {
      "kind": "journal",
      "title": "Republic: dividen Hawthorne",
      "caption": "Kieso IFRS 5e, halaman PDF 1388.",
      "lines": [
        {
          "account": "Cash",
          "debit": "€450"
        },
        {
          "account": "Dividend Revenue",
          "credit": "€450",
          "isCredit": true
        }
      ]
    },
    {
      "kind": "journal",
      "title": "Republic: penyesuaian Hawthorne ke nilai wajar",
      "caption": "Kieso IFRS 5e, halaman PDF 1388.",
      "lines": [
        {
          "account": "Equity Investment - Hawthorne",
          "debit": "€3.250"
        },
        {
          "account": "Unrealized Holding Gain - OCI",
          "credit": "€3.250",
          "isCredit": true
        }
      ]
    },
    {
      "kind": "h2",
      "text": "4. Penjualan ekuitas OCI tanpa recycling"
    },
    {
      "kind": "example",
      "title": "Republic: penjualan Hawthorne pada 2026",
      "blocks": [
        {
          "kind": "p",
          "text": "Republic menjual Hawthorne seharga €22.500 setelah nilai tercatat sebelumnya €24.000. Sebelum penjualan, investasi dimutakhirkan ke €22.500 dengan penurunan €1.500 dalam OCI. Setelah itu, kas dan investasi dihapus pada nilai yang sama. (Kieso IFRS 5e, halaman PDF 1389.)"
        },
        {
          "kind": "journal",
          "title": "Penyesuaian sebelum penjualan",
          "caption": "Kieso IFRS 5e, halaman PDF 1389.",
          "lines": [
            {
              "account": "Unrealized Holding Loss - OCI",
              "debit": "€1.500"
            },
            {
              "account": "Equity Investment - Hawthorne",
              "credit": "€1.500",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "journal",
          "title": "Penjualan setelah penyesuaian",
          "caption": "Kieso IFRS 5e, halaman PDF 1389.",
          "lines": [
            {
              "account": "Cash",
              "debit": "€22.500"
            },
            {
              "account": "Equity Investment - Hawthorne",
              "credit": "€22.500",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "callout",
          "title": "Ekuitas OCI dan utang FVOCI berbeda",
          "text": "Untuk pilihan non-trading OCI pada efek ekuitas, perubahan nilai wajar kumulatif tetap dalam ekuitas dan tidak direklasifikasi ke laba rugi. Efek utang HFCS/FVOCI melakukan recycling saat dijual. (Kieso IFRS 5e, halaman PDF 1396.)",
          "variant": "warning"
        }
      ]
    },
    {
      "kind": "h2",
      "text": "5. Equity method dan kasus Meredith"
    },
    {
      "kind": "p",
      "text": "Equity method diawali dengan cost (biaya perolehan). Bagian laba investee (entitas penerima investasi) meningkatkan investasi dan Investment Revenue (pendapatan investasi); bagian rugi menurunkannya. Dividen mengurangi investasi karena merupakan distribusi aset neto yang labanya telah diakui. (Kieso IFRS 5e, halaman PDF 1391-1392.)"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle I_{akhir}=I_{awal}+\\text{Share of profit}-\\text{Dividends received}",
      "note": "Persamaan ini berlaku untuk contoh sederhana tanpa penyesuaian lain. Kieso IFRS 5e, halaman PDF 1391-1392."
    },
    {
      "kind": "example",
      "title": "Meredith plc dan Pirates Company, E16.20",
      "blocks": [
        {
          "kind": "p",
          "text": "Pada 1 Januari 2025 Meredith membeli 25% saham Pirates seharga £200.000. Pirates menghasilkan laba £80.000 dan membayar dividen total £20.000. Interpretasi penyelesaian latihan: bagian laba £20.000 dan bagian dividen £5.000. (Kieso IFRS 5e, halaman PDF 1452, E16.20.)"
        },
        {
          "kind": "journal",
          "title": "Interpretasi: perolehan investasi",
          "caption": "Kieso IFRS 5e, halaman PDF 1452, E16.20.",
          "lines": [
            {
              "account": "Equity Investment - Pirates",
              "debit": "£200.000"
            },
            {
              "account": "Cash",
              "credit": "£200.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "journal",
          "title": "Interpretasi: bagian laba Pirates",
          "caption": "Kieso IFRS 5e, halaman PDF 1452, E16.20 dan metode halaman PDF 1391.",
          "lines": [
            {
              "account": "Equity Investment - Pirates",
              "debit": "£20.000"
            },
            {
              "account": "Investment Revenue",
              "credit": "£20.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "journal",
          "title": "Interpretasi: penerimaan dividen",
          "caption": "Kieso IFRS 5e, halaman PDF 1452, E16.20 dan metode halaman PDF 1391.",
          "lines": [
            {
              "account": "Cash",
              "debit": "£5.000"
            },
            {
              "account": "Equity Investment - Pirates",
              "credit": "£5.000",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "formula",
          "text": "\\displaystyle I_{akhir}=200000+0.25(80000)-0.25(20000)=215000",
          "note": "Interpretasi penyelesaian E16.20, dalam pound. Kieso IFRS 5e, halaman PDF 1452."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "6. Pengendalian, batas kerugian, dan penyajian"
    },
    {
      "kind": "p",
      "text": "Consolidated financial statements (laporan keuangan konsolidasian) menyajikan induk dan entitas anak sebagai satu entitas ekonomi. Pengendalian dinilai dari power (kekuasaan), hak atau eksposur atas variable returns (imbal hasil variabel), dan kemampuan memakai kekuasaan untuk memengaruhi imbal hasil. Jadi, angka kepemilikan 50% bukan satu-satunya uji. (Kieso IFRS 5e, halaman PDF 1393-1394, catatan 16 pada halaman PDF 1173.)"
    },
    {
      "kind": "p",
      "text": "Jika bagian rugi melebihi carrying amount investasi, buku pada umumnya menghentikan pengakuan rugi lebih lanjut. Jaminan kewajiban atau komitmen dukungan tambahan perlu diperiksa. Kasus di modul ini tidak mengasumsikan adanya jaminan atau komitmen tambahan. (Kieso IFRS 5e, halaman PDF 1393.)"
    },
    {
      "kind": "table",
      "title": "Perbandingan pendapatan dan dividen",
      "headers": [
        "Pos",
        "Fair value pada contoh pasif",
        "Equity method"
      ],
      "rows": [
        [
          "Laba yang dilaporkan investee",
          "Tidak otomatis menjadi pendapatan investor",
          "Bagian investor diakui sebagai pendapatan"
        ],
        [
          "Dividen diterima",
          "Dividend Revenue pada contoh Republic",
          "Pengurang investasi"
        ],
        [
          "Perubahan nilai pasar",
          "Laba rugi atau OCI sesuai kategori",
          "Tidak menggantikan pengakuan bagian laba"
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1385-1392.",
      "stackOnMobile": true
    },
    {
      "kind": "h2",
      "text": "7. Latihan dan uji pemahaman"
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan Meredith dan Pirates",
      "prompt": "Meredith menginvestasikan £200.000 untuk 25% saham Pirates. Laba Pirates £80.000 dan dividen £20.000. Hitung pendapatan investasi, kas dividen, dan saldo investasi akhir. Rujukan: Kieso IFRS 5e, halaman PDF 1452, E16.20.",
      "blocks": [
        {
          "kind": "table",
          "title": "Interpretasi jawaban E16.20",
          "headers": [
            "Hasil",
            "Perhitungan",
            "Jumlah"
          ],
          "rows": [
            [
              "Investment Revenue",
              "25% × £80.000",
              "£20.000"
            ],
            [
              "Cash dividend",
              "25% × £20.000",
              "£5.000"
            ],
            [
              "Ending investment",
              "£200.000 + £20.000 - £5.000",
              "£215.000"
            ]
          ],
          "caption": "Kieso IFRS 5e, halaman PDF 1452.",
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Mengakui dividen lagi sebagai pendapatan akan menghitung bagian laba dua kali. Pada equity method, distribusi dividen mengurangi investasi. (Kieso IFRS 5e, halaman PDF 1391-1392.)"
        }
      ]
    },
    {
      "kind": "h2",
      "text": "8. Exam Toolkit"
    },
    {
      "kind": "table",
      "title": "Alur penyelesaian TM15",
      "headers": [
        "Langkah",
        "Pemeriksaan"
      ],
      "rows": [
        [
          "Hubungan",
          "Periksa tujuan, pengaruh signifikan, dan pengendalian."
        ],
        [
          "Nilai wajar",
          "Tentukan jalur laba rugi atau OCI untuk efek ekuitas."
        ],
        [
          "Metode ekuitas",
          "Akui bagian laba dan kurangi investasi atas dividen."
        ],
        [
          "Pelepasan",
          "Periksa kategori serta batas recycling OCI."
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1384-1394.",
      "stackOnMobile": true
    },
    {
      "kind": "callout",
      "title": "Batas sumber dan penomoran",
      "text": "RPP menggunakan nomor bab dan beberapa rujukan lokal dari susunan lama. Materi ini mengikuti topik pertemuan di RPP dan isi Kieso IFRS edisi kelima. Angka contoh berasal dari buku; hasil hitungan tambahan diberi label Interpretasi. Pembandingan SAK ETAP memerlukan bacaan dosen tersendiri. (Kieso IFRS 5e, halaman PDF 1368.)",
      "variant": "info"
    }
  ]
};
