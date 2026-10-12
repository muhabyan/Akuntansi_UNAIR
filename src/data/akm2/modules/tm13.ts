// AKK202 TM13: audited source addition, 12 October 2026.
import type { Reading } from '../../../types';
export const TM13_READING: Reading = {
  "tm": 13,
  "title": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
  "ref": "Kieso IFRS 5e Ch. 15 | RPP AKM II, halaman PDF 3",
  "intro": "TM13 menghitung basic earnings per share (EPS dasar) dan diluted earnings per share (EPS dilusian). Penyelesaian dimulai dari laba untuk saham biasa dan rata-rata tertimbang saham, lalu menguji setiap instrumen potensial.",
  "objectives": [
    "Menghitung laba yang tersedia untuk saham biasa.",
    "Menyusun weighted-average shares (saham rata-rata tertimbang).",
    "Menerapkan if-converted method dan treasury-share method.",
    "Mengecualikan instrumen antidilutive (yang menaikkan EPS atau memperkecil rugi per saham)."
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
      "title": "Peta konsep TM13",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 680 340\" role=\"img\" aria-label=\"Peta analisis TM13\" style=\"width:100%;height:auto;font-family:Inter,Arial,sans-serif\"><rect x=\"8\" y=\"8\" width=\"664\" height=\"324\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\"/><text x=\"28\" y=\"34\" font-size=\"16\" fill=\"#38bdf8\" font-weight=\"700\">Peta analisis TM13</text><rect x=\"24\" y=\"48\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"70\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">1. Pembilang</text><text x=\"40\" y=\"90\" font-size=\"12\" fill=\"#e2e8f0\">Pisahkan laba untuk saham biasa dan dividen preferen.</text><rect x=\"24\" y=\"116\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"138\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">2. Penyebut</text><text x=\"40\" y=\"158\" font-size=\"12\" fill=\"#e2e8f0\">Bobot saham berdasarkan waktu dan restatement.</text><rect x=\"24\" y=\"184\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"206\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">3. Potensi saham</text><text x=\"40\" y=\"226\" font-size=\"12\" fill=\"#e2e8f0\">Gunakan if-converted atau treasury-share method.</text><rect x=\"24\" y=\"252\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"274\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">4. Antidilusi</text><text x=\"40\" y=\"294\" font-size=\"12\" fill=\"#e2e8f0\">Uji pengaruh tiap instrumen sebelum digabungkan.</text></svg>",
      "overview": {
        "heading": "Earnings Per Share: EPS Dasar dan EPS Dilusian",
        "cards": [
          {
            "title": "Pembilang",
            "subtitle": "Langkah analisis",
            "items": [
              "Pisahkan laba untuk saham biasa dan dividen preferen."
            ],
            "takeaway": "Pisahkan laba untuk saham biasa dan dividen preferen."
          },
          {
            "title": "Penyebut",
            "subtitle": "Langkah analisis",
            "items": [
              "Bobot saham berdasarkan waktu dan restatement."
            ],
            "takeaway": "Bobot saham berdasarkan waktu dan restatement."
          },
          {
            "title": "Potensi saham",
            "subtitle": "Langkah analisis",
            "items": [
              "Gunakan if-converted atau treasury-share method."
            ],
            "takeaway": "Gunakan if-converted atau treasury-share method."
          },
          {
            "title": "Antidilusi",
            "subtitle": "Langkah analisis",
            "items": [
              "Uji pengaruh tiap instrumen sebelum digabungkan."
            ],
            "takeaway": "Uji pengaruh tiap instrumen sebelum digabungkan."
          }
        ],
        "footer": "RPP AKM II, halaman PDF 3; Kieso IFRS 5e Ch. 15."
      },
      "transcript": [
        "Pembilang: Pisahkan laba untuk saham biasa dan dividen preferen.",
        "Penyebut: Bobot saham berdasarkan waktu dan restatement.",
        "Potensi saham: Gunakan if-converted atau treasury-share method.",
        "Antidilusi: Uji pengaruh tiap instrumen sebelum digabungkan."
      ],
      "caption": "Peta pembelajaran mengikuti RPP AKM II, halaman PDF 3, dengan bab disesuaikan ke Kieso IFRS 5e Ch. 15."
    },
    {
      "kind": "h2",
      "text": "2. Pembilang dan penyebut EPS dasar"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle \\text{Basic EPS}=\\frac{\\text{Net income}-\\text{Preference dividends}}{\\text{Weighted-average ordinary shares}}",
      "note": "Dividen preferen kumulatif tahun berjalan diperhitungkan meskipun belum dideklarasikan; tunggakan tahun sebelumnya tidak dihitung dua kali. Kieso IFRS 5e, halaman PDF 1285."
    },
    {
      "kind": "p",
      "text": "Simple capital structure (struktur modal sederhana) tidak memiliki instrumen saham potensial yang dilutif. Complex capital structure (struktur modal kompleks) memerlukan perhatian pada EPS dasar dan dilusian. Jika terdapat rugi, pengurangan dividen preferen memperbesar rugi yang tersedia bagi saham biasa. (Kieso IFRS 5e, halaman PDF 1284-1285.)"
    },
    {
      "kind": "table",
      "title": "Dasar penghitungan saham tertimbang",
      "headers": [
        "Peristiwa",
        "Perlakuan"
      ],
      "rows": [
        [
          "Penerbitan saham untuk kas",
          "Bobot sejak penerbitan"
        ],
        [
          "Pembelian treasuri",
          "Kurangi saham beredar sejak pembelian"
        ],
        [
          "Share dividend",
          "Restatement saham sebelum dividen"
        ],
        [
          "Share split",
          "Restatement saham sebelum pemecahan"
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1286-1287.",
      "stackOnMobile": true
    },
    {
      "kind": "h2",
      "text": "3. Kasus Franks: pembobotan saham"
    },
    {
      "kind": "example",
      "title": "Franks Inc.: Illustrations 15.15-15.16",
      "blocks": [
        {
          "kind": "p",
          "text": "Franks memiliki 90.000 saham pada awal tahun, menerbitkan 30.000 saham untuk kas pada 1 April, membeli 39.000 saham pada 1 Juli, dan menerbitkan 60.000 saham pada 1 November. (Kieso IFRS 5e, halaman PDF 1286.)"
        },
        {
          "kind": "table",
          "title": "Perhitungan saham rata-rata tertimbang Franks",
          "headers": [
            "Periode",
            "Saham beredar",
            "Bobot",
            "Saham tertimbang"
          ],
          "rows": [
            [
              "Januari-Maret",
              "90.000",
              "3/12",
              "22.500"
            ],
            [
              "April-Juni",
              "120.000",
              "3/12",
              "30.000"
            ],
            [
              "Juli-Oktober",
              "81.000",
              "4/12",
              "27.000"
            ],
            [
              "November-Desember",
              "141.000",
              "2/12",
              "23.500"
            ],
            [
              "Total",
              "Saham akhir 141.000",
              "Satu tahun",
              "103.000"
            ]
          ],
          "caption": "Kieso IFRS 5e, halaman PDF 1286.",
          "stackOnMobile": true
        },
        {
          "kind": "p",
          "text": "Saldo akhir 141.000 berbeda dari rata-rata tertimbang 103.000. Pada contoh Vijay, 100.000 saham awal dengan share dividend 25% pada Juni menghasilkan rata-rata 125.000 karena saham sebelum dividen disajikan kembali. (Kieso IFRS 5e, halaman PDF 1286-1287.)"
        }
      ]
    },
    {
      "kind": "h2",
      "text": "4. If-converted method untuk obligasi"
    },
    {
      "kind": "p",
      "text": "If-converted method (metode jika dikonversi) mengasumsikan konversi pada awal periode atau tanggal penerbitan jika lebih akhir. Interest expense net of tax (beban bunga setelah pajak) ditambahkan ke pembilang; saham hasil konversi berbobot waktu ditambahkan ke penyebut. Gunakan beban bunga komponen liabilitas, bukan kas kupon semata. (Kieso IFRS 5e, halaman PDF 1293-1294.)"
    },
    {
      "kind": "example",
      "title": "Mayfield: dua seri obligasi konversi",
      "blocks": [
        {
          "kind": "p",
          "text": "Laba Mayfield £210.000 dan saham tertimbang 100.000. Seri pertama beredar sepanjang tahun: beban bunga £62.000 dan 20.000 saham konversi. Seri kedua diterbitkan 1 April: beban bunga setahun penuh £80.000 dan 32.000 saham konversi. Tarif pajak 40%. (Kieso IFRS 5e, halaman PDF 1293-1294.)"
        },
        {
          "kind": "formula",
          "text": "\\displaystyle N=210000+62000(1-0.40)+80000\\frac{9}{12}(1-0.40)=283200\\\\D=100000+20000+32000\\frac{9}{12}=144000\\\\\\text{Basic EPS}=2.10\\qquad\\text{Diluted EPS}=\\frac{283200}{144000}\\approx1.97",
          "note": "Hasil akhir dalam pound per saham mengikuti buku. Kieso IFRS 5e, halaman PDF 1294-1295."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "5. Opsi, waran, dan antidilusi"
    },
    {
      "kind": "p",
      "text": "Treasury-share method (metode saham treasuri untuk EPS) mengasumsikan hasil pelaksanaan opsi dipakai membeli kembali saham pada average market price (harga pasar rata-rata). Hanya incremental shares (saham tambahan neto) yang menambah penyebut. Metode ini adalah asumsi EPS, sehingga tidak membuat jurnal treasuri aktual. (Kieso IFRS 5e, halaman PDF 1296-1298.)"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle \\text{Incremental shares}=Q-\\frac{QX}{M}",
      "note": "Q = opsi; X = harga pelaksanaan; M = harga pasar rata-rata. Gunakan hanya bila hasilnya dilutif. Kieso IFRS 5e, halaman PDF 1297."
    },
    {
      "kind": "p",
      "text": "Contoh 1.500 opsi dengan harga pelaksanaan €30 dan harga pasar rata-rata €50 memberi kas asumsi €45.000, pembelian kembali 900 saham, dan saham tambahan neto 600. Instrumen antidilutif dikeluarkan dan tidak dipakai mengimbangi instrumen dilutif. (Kieso IFRS 5e, halaman PDF 1297, uji antidilusi pada halaman PDF 1299-1300.)"
    },
    {
      "kind": "p",
      "text": "Martin memiliki laba USD210.000, saham 100.000, bunga obligasi konversi USD60.000, pajak 40%, dan 10.000 saham hasil konversi. EPS sebelum konversi USD2,10. EPS asumsi setelah konversi USD2,24 lebih tinggi, sehingga obligasi dikeluarkan. (Kieso IFRS 5e, halaman PDF 1300, Illustration 15.29.)"
    },
    {
      "kind": "h2",
      "text": "6. Penyajian, urutan, dan saham kontinjensi"
    },
    {
      "kind": "p",
      "text": "EPS dari continuing operations (operasi berkelanjutan) menjadi titik uji dilusi. Urutkan instrumen dari incremental EPS terendah; opsi atau waran tidak menambah pembilang dan diperiksa dahulu. Tambahkan instrumen satu per satu dan hentikan pemasukan instrumen yang meningkatkan EPS. Contingently issuable shares (saham yang diterbitkan bersyarat) dianalisis menurut pemenuhan kondisi pada akhir periode. (Kieso IFRS 5e, halaman PDF 1298-1299, urutan dan angka kontrol pada Appendix 15B, halaman PDF 1314-1318.)"
    },
    {
      "kind": "callout",
      "title": "Jebakan pembilang konversi",
      "text": "Kupon tunai berbeda dari interest expense berdasarkan bunga efektif untuk utang konversi. Pada konversi saham preferen, dividen yang dipulihkan tidak diberi faktor pajak seperti bunga utang. (Kieso IFRS 5e, halaman PDF 1293-1296.)",
      "variant": "warning"
    },
    {
      "kind": "h2",
      "text": "7. Latihan dan uji pemahaman"
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan opsi dan waran",
      "prompt": "Ada 1.500 opsi beredar dengan exercise price €30 dan average market price €50. Hitung jumlah saham yang secara asumsi dapat dibeli kembali dan tambahan saham neto. Rujukan: Kieso IFRS 5e, halaman PDF 1297, Illustration 15.27.",
      "blocks": [
        {
          "kind": "formula",
          "text": "\\displaystyle \\text{Repurchased shares}=1500(30)/50=900\\qquad\\text{Incremental shares}=1500-900=600",
          "note": "Kieso IFRS 5e, halaman PDF 1297."
        },
        {
          "kind": "p",
          "text": "Saham tambahan neto 600 masuk pengujian diluted EPS. Pembilang tidak bertambah karena pelaksanaan opsi tidak menghapus beban bunga. (Kieso IFRS 5e, halaman PDF 1296-1298.)"
        }
      ]
    },
    {
      "kind": "p",
      "text": "EPS dasar membagi laba untuk saham biasa dengan jumlah saham biasa rata-rata tertimbang. Uji dilusi dilakukan terhadap laba dari operasi berlanjut yang tersedia bagi saham biasa sebagai control number. Instrumen yang meningkatkan EPS atau mengurangi rugi per saham bersifat antidilutif dan dikeluarkan. Saham akibat stock split disesuaikan retrospektif sesuai sumber; penerbitan tunai diberi bobot waktu. [Kieso IFRS 5e, halaman PDF 1285-1299] Rujukan pemeriksaan: Kieso IFRS 5e, halaman PDF 1285-1299."
    },
    {
      "kind": "h2",
      "text": "8. Exam Toolkit"
    },
    {
      "kind": "table",
      "title": "Alur penyelesaian TM13",
      "headers": [
        "Langkah",
        "Pemeriksaan"
      ],
      "rows": [
        [
          "Pembilang",
          "Pisahkan laba untuk saham biasa dan dividen preferen."
        ],
        [
          "Penyebut",
          "Bobot saham berdasarkan waktu dan restatement."
        ],
        [
          "Potensi saham",
          "Gunakan if-converted atau treasury-share method."
        ],
        [
          "Antidilusi",
          "Uji pengaruh tiap instrumen sebelum digabungkan."
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1286-1287.",
      "stackOnMobile": true
    },
    {
      "kind": "callout",
      "title": "Batas sumber dan penomoran",
      "text": "RPP menggunakan nomor bab dan beberapa rujukan lokal dari susunan lama. Materi ini mengikuti topik pertemuan di RPP dan isi Kieso IFRS edisi kelima. Angka contoh berasal dari buku; hasil hitungan tambahan diberi label Interpretasi. Pembandingan SAK ETAP memerlukan bacaan dosen tersendiri. (Kieso IFRS 5e, halaman PDF 1252.)",
      "variant": "info"
    }
  ]
};
