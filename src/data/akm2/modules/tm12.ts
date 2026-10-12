// AKK202 TM12: audited source addition, 12 October 2026.
import type { Reading } from '../../../types';
export const TM12_READING: Reading = {
  "tm": 12,
  "title": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
  "ref": "Kieso IFRS 5e Ch. 15 | RPP AKM II, halaman PDF 3",
  "intro": "TM12 membedakan convertible debt (utang konversi), share warrants (waran saham), dan share compensation (kompensasi saham). Fokusnya pada pemisahan liabilitas dan ekuitas serta pengakuan jasa karyawan selama masa vesting.",
  "objectives": [
    "Memisahkan komponen utang dan hak konversi dengan with-and-without method.",
    "Membedakan conversion (konversi) dan repurchase (pembelian kembali).",
    "Mencatat obligasi dengan waran dan pelaksanaan waran.",
    "Mengukur kompensasi opsi pada grant date (tanggal hibah) dan mengalokasikannya selama service period (masa jasa)."
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
      "title": "Peta konsep TM12",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 680 340\" role=\"img\" aria-label=\"Peta analisis TM12\" style=\"width:100%;height:auto;font-family:Inter,Arial,sans-serif\"><rect x=\"8\" y=\"8\" width=\"664\" height=\"324\" rx=\"12\" fill=\"#0f172a\" stroke=\"#334155\"/><text x=\"28\" y=\"34\" font-size=\"16\" fill=\"#38bdf8\" font-weight=\"700\">Peta analisis TM12</text><rect x=\"24\" y=\"48\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"70\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">1. Klasifikasi</text><text x=\"40\" y=\"90\" font-size=\"12\" fill=\"#e2e8f0\">Baca hak konversi dan kewajiban penebusan.</text><rect x=\"24\" y=\"116\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"138\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">2. Pemisahan</text><text x=\"40\" y=\"158\" font-size=\"12\" fill=\"#e2e8f0\">Ukur liabilitas dahulu dan ekuitas residual.</text><rect x=\"24\" y=\"184\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"206\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">3. Penyelesaian</text><text x=\"40\" y=\"226\" font-size=\"12\" fill=\"#e2e8f0\">Bedakan konversi, pembelian kembali, dan waran.</text><rect x=\"24\" y=\"252\" width=\"632\" height=\"58\" rx=\"8\" fill=\"#1e293b\" stroke=\"#475569\"/><text x=\"40\" y=\"274\" font-size=\"14\" fill=\"#38bdf8\" font-weight=\"700\">4. Kompensasi</text><text x=\"40\" y=\"294\" font-size=\"12\" fill=\"#e2e8f0\">Ukur grant date dan alokasikan selama masa jasa.</text></svg>",
      "overview": {
        "heading": "Sekuritas Dilutif: Konversi, Waran, dan Kompensasi Saham",
        "cards": [
          {
            "title": "Klasifikasi",
            "subtitle": "Langkah analisis",
            "items": [
              "Baca hak konversi dan kewajiban penebusan."
            ],
            "takeaway": "Baca hak konversi dan kewajiban penebusan."
          },
          {
            "title": "Pemisahan",
            "subtitle": "Langkah analisis",
            "items": [
              "Ukur liabilitas dahulu dan ekuitas residual."
            ],
            "takeaway": "Ukur liabilitas dahulu dan ekuitas residual."
          },
          {
            "title": "Penyelesaian",
            "subtitle": "Langkah analisis",
            "items": [
              "Bedakan konversi, pembelian kembali, dan waran."
            ],
            "takeaway": "Bedakan konversi, pembelian kembali, dan waran."
          },
          {
            "title": "Kompensasi",
            "subtitle": "Langkah analisis",
            "items": [
              "Ukur grant date dan alokasikan selama masa jasa."
            ],
            "takeaway": "Ukur grant date dan alokasikan selama masa jasa."
          }
        ],
        "footer": "RPP AKM II, halaman PDF 3; Kieso IFRS 5e Ch. 15."
      },
      "transcript": [
        "Klasifikasi: Baca hak konversi dan kewajiban penebusan.",
        "Pemisahan: Ukur liabilitas dahulu dan ekuitas residual.",
        "Penyelesaian: Bedakan konversi, pembelian kembali, dan waran.",
        "Kompensasi: Ukur grant date dan alokasikan selama masa jasa."
      ],
      "caption": "Peta pembelajaran mengikuti RPP AKM II, halaman PDF 3, dengan bab disesuaikan ke Kieso IFRS 5e Ch. 15."
    },
    {
      "kind": "h2",
      "text": "2. Instrumen majemuk dan metode residual"
    },
    {
      "kind": "p",
      "text": "Convertible debt memberi pemegang hak mengubah utang menjadi saham. Compound instrument (instrumen majemuk) memiliki komponen liabilitas dan ekuitas. With-and-without method (metode residual) mengukur liabilitas sebagai nilai kini arus kas dengan yield utang serupa tanpa konversi; sisanya adalah conversion equity (ekuitas konversi). (Kieso IFRS 5e, halaman PDF 1256-1258.)"
    },
    {
      "kind": "table",
      "title": "Konversi dan waran",
      "headers": [
        "Instrumen",
        "Pembayaran ketika menjadi saham",
        "Pengukuran penerbitan"
      ],
      "rows": [
        [
          "Convertible bond",
          "Pemegang menyerahkan hak tagih utang",
          "Liabilitas dahulu, ekuitas residual"
        ],
        [
          "Bond with warrants",
          "Pemegang membayar exercise price (harga pelaksanaan)",
          "Liabilitas dahulu, ekuitas residual"
        ],
        [
          "Convertible preference shares",
          "Pemegang menukar saham preferen",
          "Ekuitas, kecuali ada kewajiban penebusan"
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1264, waran pada halaman PDF 1267-1270.",
      "stackOnMobile": true
    },
    {
      "kind": "formula",
      "text": "\\displaystyle \\text{Conversion equity}=\\text{Issue proceeds}-PV(\\text{liability cash flows})",
      "note": "Kupon kontraktual tetap berbeda dari yield pengukuran liabilitas. Kieso IFRS 5e, halaman PDF 1257-1258."
    },
    {
      "kind": "h2",
      "text": "3. Pengukuran Roche dan amortisasi liabilitas"
    },
    {
      "kind": "example",
      "title": "Roche Group: penerbitan obligasi konversi",
      "blocks": [
        {
          "kind": "p",
          "text": "Roche menerbitkan 2.000 obligasi nominal €1.000 per obligasi, kupon tahunan 6%, dan umur empat tahun. Hasil penerbitan €2.000.000. Yield utang tanpa konversi 9%. Setiap obligasi dapat dikonversi menjadi 250 saham biasa nominal €1. (Kieso IFRS 5e, halaman PDF 1258.)"
        },
        {
          "kind": "table",
          "title": "Pemisahan hasil emisi Roche",
          "headers": [
            "Komponen",
            "Jumlah"
          ],
          "rows": [
            [
              "PV pokok: €2.000.000 × 0,70843",
              "€1.416.860"
            ],
            [
              "PV kupon: €120.000 × 3,23972, dibulatkan",
              "€388.766"
            ],
            [
              "Liability component (komponen utang)",
              "€1.805.626"
            ],
            [
              "Conversion equity (ekuitas residual)",
              "€194.374"
            ]
          ],
          "caption": "Kieso IFRS 5e, halaman PDF 1258, Illustrations 15.3-15.4.",
          "stackOnMobile": true
        },
        {
          "kind": "journal",
          "title": "Penerbitan Roche",
          "caption": "Kieso IFRS 5e, halaman PDF 1258-1259.",
          "lines": [
            {
              "account": "Cash",
              "debit": "€2.000.000"
            },
            {
              "account": "Bonds Payable",
              "credit": "€1.805.626",
              "isCredit": true
            },
            {
              "account": "Share Premium - Conversion Equity",
              "credit": "€194.374",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "p",
          "text": "Tabel amortisasi buku memberi beban bunga tahun 2025 €162.506, kas kupon €120.000, amortisasi €42.506, dan nilai tercatat €1.848.132. Setelah periode 2026, nilai tercatat liabilitas €1.894.464. (Kieso IFRS 5e, halaman PDF 1260, Illustration 15.5.)"
        }
      ]
    },
    {
      "kind": "h2",
      "text": "4. Konversi, pembelian kembali, dan inducement"
    },
    {
      "kind": "journal",
      "title": "Roche: konversi pada akhir 2026",
      "caption": "Kieso IFRS 5e, halaman PDF 1260-1261.",
      "lines": [
        {
          "account": "Share Premium - Conversion Equity",
          "debit": "€194.374"
        },
        {
          "account": "Bonds Payable",
          "debit": "€1.894.464"
        },
        {
          "account": "Share Capital - Ordinary",
          "credit": "€500.000",
          "isCredit": true
        },
        {
          "account": "Share Premium - Ordinary",
          "credit": "€1.588.838",
          "isCredit": true
        }
      ]
    },
    {
      "kind": "p",
      "text": "Book value method (metode nilai buku) memindahkan nilai tercatat liabilitas dan komponen ekuitas konversi ke modal serta agio saham tanpa laba rugi konversi. Pada repurchase sebelum jatuh tempo, imbalan dipisahkan ke komponen liabilitas dan ekuitas; laba rugi hanya dihitung atas bagian liabilitas. Induced conversion (konversi yang didorong insentif) membebankan nilai tambahan sweetener (insentif) pada periode berjalan. (Kieso IFRS 5e, halaman PDF 1261-1263.)"
    },
    {
      "kind": "p",
      "text": "Convertible preference shares tanpa mandatory redemption (penebusan wajib) dijelaskan sebagai ekuitas. Konversinya memakai nilai buku. Ketentuan penebusan wajib harus diperiksa sebelum menggunakan kesimpulan klasifikasi ini. (Kieso IFRS 5e, halaman PDF 1264-1265.)"
    },
    {
      "kind": "h2",
      "text": "5. Waran dan kompensasi berbasis saham"
    },
    {
      "kind": "example",
      "title": "Siemens: obligasi dengan waran",
      "blocks": [
        {
          "kind": "p",
          "text": "Hasil penerbitan obligasi dengan waran Siemens €10.200.000. Nilai kini komponen liabilitas €9.707.852. With-and-without method menghasilkan Share Premium - Share Warrants €492.148. Pengukuran ini mengikuti residual yang digunakan buku IFRS. (Kieso IFRS 5e, halaman PDF 1268-1269, Illustration 15.8.)"
        },
        {
          "kind": "journal",
          "title": "Penerbitan gabungan, Interpretasi penggabungan dua jurnal buku",
          "caption": "Kieso IFRS 5e, halaman PDF 1269.",
          "lines": [
            {
              "account": "Cash",
              "debit": "€10.200.000"
            },
            {
              "account": "Bonds Payable",
              "credit": "€9.707.852",
              "isCredit": true
            },
            {
              "account": "Share Premium - Share Warrants",
              "credit": "€492.148",
              "isCredit": true
            }
          ]
        },
        {
          "kind": "callout",
          "title": "Bedakan dua konteks alokasi",
          "text": "Proportional method pada TM11 dipakai untuk penerbitan gabungan kelas saham. Untuk obligasi dengan waran dalam pembahasan IFRS Ch.15, gunakan komponen liabilitas dahulu dan ekuitas residual. (Kieso IFRS 5e, halaman PDF 1268-1269.)",
          "variant": "warning"
        }
      ]
    },
    {
      "kind": "p",
      "text": "Equity-settled share options (opsi yang diselesaikan dengan ekuitas) diukur pada nilai wajar grant date. Beban dialokasikan selama service period yang umumnya sama dengan vesting period. Perubahan harga saham sesudah hibah tidak mengukur ulang nilai wajar opsi tersebut. Estimasi jumlah yang memenuhi service condition (syarat jasa) dapat disesuaikan. (Kieso IFRS 5e, halaman PDF 1274-1276.)"
    },
    {
      "kind": "p",
      "text": "Chen memiliki nilai kompensasi opsi ¥22.000.000 dan masa jasa dua tahun. Beban dialokasikan ¥11.000.000 tiap tahun. Ketika opsi yang sudah vested kedaluwarsa tanpa pelaksanaan, saldo agio dipindahkan dalam ekuitas; beban jasa yang sudah diterima tidak dibalik. (Kieso IFRS 5e, halaman PDF 1275-1276.)"
    },
    {
      "kind": "h2",
      "text": "6. Penyajian dan hubungan dengan EPS"
    },
    {
      "kind": "p",
      "text": "Hak konversi, waran, dan opsi dapat menambah jumlah saham biasa. Pengukuran akuntansi penerbitan pada TM12 perlu dibedakan dari asumsi penghitungan diluted EPS (EPS dilusian) pada TM13. Pemisahan debt and equity (utang dan ekuitas) menjelaskan sumber nilai instrumen. (Kieso IFRS 5e, halaman PDF 1256-1257, hubungan EPS pada halaman PDF 1292-1293.)"
    },
    {
      "kind": "formula",
      "text": "\\displaystyle \\text{Annual compensation}=\\frac{\\text{Grant-date compensation cost}}{\\text{Service years}}",
      "note": "Formula alokasi rata ini mengikuti contoh Chen dengan masa jasa dua tahun. Kieso IFRS 5e, halaman PDF 1275."
    },
    {
      "kind": "h2",
      "text": "7. Latihan dan uji pemahaman"
    },
    {
      "kind": "solution-reveal",
      "title": "Latihan komponen ekuitas Siemens",
      "prompt": "Siemens menerima €10.200.000 dan mengukur komponen liabilitas €9.707.852. Hitung komponen ekuitas waran dan jelaskan urutan pengukurannya. Rujukan: Kieso IFRS 5e, halaman PDF 1269, Illustration 15.8.",
      "blocks": [
        {
          "kind": "formula",
          "text": "\\displaystyle \\text{Warrant equity}=10200000-9707852=492148",
          "note": "Kieso IFRS 5e, halaman PDF 1269."
        },
        {
          "kind": "p",
          "text": "Liabilitas diukur terlebih dahulu sebagai nilai kini utang tanpa hak waran. Sisa hasil penerbitan dialokasikan ke ekuitas waran. (Kieso IFRS 5e, halaman PDF 1269.)"
        }
      ]
    },
    {
      "kind": "p",
      "text": "Roche menerima 2 juta euro, membayar kupon 120.000 euro pada akhir setiap tahun, dan melunasi pokok pada akhir tahun keempat. Liabilitas memakai yield instrumen tanpa konversi 9%, sehingga komponen ekuitas merupakan sisa 194.374 euro pada angka bulat buku. Kupon 6% menentukan kas; yield 9% menentukan nilai liabilitas. [Kieso IFRS 5e, halaman PDF 1257-1258] Rujukan pemeriksaan: Kieso IFRS 5e, halaman PDF 1257-1258, Illustrations 15.1-15.4."
    },
    {
      "kind": "figure",
      "title": "Roche: arus kupon dan pokok",
      "svg": "<svg class=\"finance-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 670 455\" role=\"img\" aria-label=\"Roche: arus kupon dan pokok. Tahun 1-3: kupon 120 ribu euro per tahun. Tahun 4: kupon 120 dan pokok 2.000 ribu euro. PV liabilitas memakai yield 9%, bukan kupon 6%\"><style>.finance-svg{--svg-bg:#f8fafc;--svg-card:#fff;--svg-text:#0f172a;--svg-muted:#64748b;--svg-accent:#2563eb;--svg-success:#15803d;--svg-warning:#b45309}.dark .finance-svg{--svg-bg:#17212b;--svg-card:#1e293b;--svg-text:#e5e7eb;--svg-muted:#94a3b8;--svg-accent:#60a5fa;--svg-success:#34d399;--svg-warning:#fbbf24}.finance-svg .svg-bg{fill:var(--svg-bg)}.finance-svg .svg-card{fill:var(--svg-card)}.finance-svg .svg-text{fill:var(--svg-text);font-family:system-ui,sans-serif}</style><defs><marker id=\"arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0 L6 3 L0 6\" fill=\"var(--svg-accent,#2563eb)\"/></marker></defs><rect width=\"670\" height=\"455\" class=\"svg-bg\"/><text x=\"45\" y=\"45\" text-anchor=\"start\" font-size=\"19\" class=\"svg-text\">Pembayaran akhir tiap tahun</text><text x=\"45\" y=\"94\" text-anchor=\"start\" font-size=\"15\" class=\"svg-text\">Kas keluar (ribu euro)</text><line x1=\"90\" y1=\"110\" x2=\"90\" y2=\"265\" stroke=\"var(--svg-muted, #64748b)\" /><line x1=\"90\" y1=\"265\" x2=\"580\" y2=\"265\" stroke=\"var(--svg-muted, #64748b)\" /><line x1=\"90\" y1=\"265\" x2=\"90\" y2=\"270\" stroke=\"var(--svg-muted, #64748b)\" /><text x=\"90\" y=\"288\" text-anchor=\"middle\" font-size=\"15\" class=\"svg-text\">1</text><line x1=\"335\" y1=\"265\" x2=\"335\" y2=\"270\" stroke=\"var(--svg-muted, #64748b)\" /><text x=\"335\" y=\"288\" text-anchor=\"middle\" font-size=\"15\" class=\"svg-text\">2.5</text><line x1=\"580\" y1=\"265\" x2=\"580\" y2=\"270\" stroke=\"var(--svg-muted, #64748b)\" /><text x=\"580\" y=\"288\" text-anchor=\"middle\" font-size=\"15\" class=\"svg-text\">4</text><text x=\"82\" y=\"270\" text-anchor=\"end\" font-size=\"15\" class=\"svg-text\">0</text><text x=\"82\" y=\"192.5\" text-anchor=\"end\" font-size=\"15\" class=\"svg-text\">1100</text><text x=\"82\" y=\"115\" text-anchor=\"end\" font-size=\"15\" class=\"svg-text\">2200</text><text x=\"335\" y=\"313\" text-anchor=\"middle\" font-size=\"15\" class=\"svg-text\">Tahun sejak penerbitan</text><line x1=\"90\" y1=\"265\" x2=\"90\" y2=\"256.54545454545456\" stroke=\"var(--svg-accent, #2563eb)\" stroke-width=\"2\" /><line x1=\"253.33333333333331\" y1=\"265\" x2=\"253.33333333333331\" y2=\"256.54545454545456\" stroke=\"var(--svg-accent, #2563eb)\" stroke-width=\"2\" /><line x1=\"416.66666666666663\" y1=\"265\" x2=\"416.66666666666663\" y2=\"256.54545454545456\" stroke=\"var(--svg-accent, #2563eb)\" stroke-width=\"2\" /><line x1=\"580\" y1=\"265\" x2=\"580\" y2=\"256.54545454545456\" stroke=\"var(--svg-accent, #2563eb)\" stroke-width=\"2\" /><circle cx=\"90\" cy=\"256.54545454545456\" r=\"3\" fill=\"var(--svg-accent, #2563eb)\"/><circle cx=\"253.33333333333331\" cy=\"256.54545454545456\" r=\"3\" fill=\"var(--svg-accent, #2563eb)\"/><circle cx=\"416.66666666666663\" cy=\"256.54545454545456\" r=\"3\" fill=\"var(--svg-accent, #2563eb)\"/><circle cx=\"580\" cy=\"256.54545454545456\" r=\"3\" fill=\"var(--svg-accent, #2563eb)\"/><line x1=\"65\" y1=\"340\" x2=\"95\" y2=\"340\" stroke=\"var(--svg-accent, #2563eb)\" stroke-width=\"3\" /><text x=\"105\" y=\"345\" text-anchor=\"start\" font-size=\"15\" class=\"svg-text\">Kupon</text><line x1=\"90\" y1=\"265\" x2=\"90\" y2=\"265\" stroke=\"var(--svg-success, #16a34a)\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/><line x1=\"253.33333333333331\" y1=\"265\" x2=\"253.33333333333331\" y2=\"265\" stroke=\"var(--svg-success, #16a34a)\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/><line x1=\"416.66666666666663\" y1=\"265\" x2=\"416.66666666666663\" y2=\"265\" stroke=\"var(--svg-success, #16a34a)\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/><line x1=\"580\" y1=\"265\" x2=\"580\" y2=\"124.0909090909091\" stroke=\"var(--svg-success, #16a34a)\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/><circle cx=\"90\" cy=\"265\" r=\"3\" fill=\"var(--svg-success, #16a34a)\"/><circle cx=\"253.33333333333331\" cy=\"265\" r=\"3\" fill=\"var(--svg-success, #16a34a)\"/><circle cx=\"416.66666666666663\" cy=\"265\" r=\"3\" fill=\"var(--svg-success, #16a34a)\"/><circle cx=\"580\" cy=\"124.0909090909091\" r=\"3\" fill=\"var(--svg-success, #16a34a)\"/><line x1=\"65\" y1=\"370\" x2=\"95\" y2=\"370\" stroke=\"var(--svg-success, #16a34a)\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><text x=\"105\" y=\"375\" text-anchor=\"start\" font-size=\"15\" class=\"svg-text\">Pokok</text></svg>",
      "caption": "Kieso IFRS 5e, halaman PDF 1258, Illustration 15.2. Jumlah dalam ribu euro.",
      "mobileSvg": "<svg class=\"finance-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 490\" role=\"img\" aria-label=\"Roche: arus kupon dan pokok. Tahun 1-3: kupon 120 ribu euro per tahun. Tahun 4: kupon 120 dan pokok 2.000 ribu euro. PV liabilitas memakai yield 9%, bukan kupon 6%\"><style>.finance-svg{--svg-bg:#f8fafc;--svg-card:#fff;--svg-text:#0f172a;--svg-muted:#64748b;--svg-accent:#2563eb;--svg-success:#15803d;--svg-warning:#b45309}.dark .finance-svg{--svg-bg:#17212b;--svg-card:#1e293b;--svg-text:#e5e7eb;--svg-muted:#94a3b8;--svg-accent:#60a5fa;--svg-success:#34d399;--svg-warning:#fbbf24}.finance-svg .svg-bg{fill:var(--svg-bg)}.finance-svg .svg-card{fill:var(--svg-card)}.finance-svg .svg-text{fill:var(--svg-text);font-family:system-ui,sans-serif}</style><rect width=\"360\" height=\"490\" fill=\"var(--svg-bg,#f8fafc)\"/><text x=\"16\" y=\"35\" text-anchor=\"start\" font-size=\"18\" class=\"svg-text\">Pembayaran akhir tiap tahun</text><text x=\"16\" y=\"104\" text-anchor=\"start\" font-size=\"16\" class=\"svg-text\">Kas keluar (ribu euro)</text><line x1=\"61\" y1=\"120\" x2=\"61\" y2=\"300\" stroke=\"var(--svg-muted, #64748b)\" /><line x1=\"61\" y1=\"300\" x2=\"335\" y2=\"300\" stroke=\"var(--svg-muted, #64748b)\" /><line x1=\"61\" y1=\"300\" x2=\"61\" y2=\"305\" stroke=\"var(--svg-muted, #64748b)\" /><text x=\"61\" y=\"323\" text-anchor=\"middle\" font-size=\"16\" class=\"svg-text\">1</text><line x1=\"198\" y1=\"300\" x2=\"198\" y2=\"305\" stroke=\"var(--svg-muted, #64748b)\" /><text x=\"198\" y=\"323\" text-anchor=\"middle\" font-size=\"16\" class=\"svg-text\">2.5</text><line x1=\"335\" y1=\"300\" x2=\"335\" y2=\"305\" stroke=\"var(--svg-muted, #64748b)\" /><text x=\"335\" y=\"323\" text-anchor=\"middle\" font-size=\"16\" class=\"svg-text\">4</text><text x=\"53\" y=\"305\" text-anchor=\"end\" font-size=\"16\" class=\"svg-text\">0</text><text x=\"53\" y=\"215\" text-anchor=\"end\" font-size=\"16\" class=\"svg-text\">1100</text><text x=\"53\" y=\"125\" text-anchor=\"end\" font-size=\"16\" class=\"svg-text\">2200</text><text x=\"198\" y=\"348\" text-anchor=\"middle\" font-size=\"16\" class=\"svg-text\">Tahun sejak penerbitan</text><line x1=\"61\" y1=\"300\" x2=\"61\" y2=\"290.1818181818182\" stroke=\"var(--svg-accent, #2563eb)\" stroke-width=\"2\" /><line x1=\"152.33333333333331\" y1=\"300\" x2=\"152.33333333333331\" y2=\"290.1818181818182\" stroke=\"var(--svg-accent, #2563eb)\" stroke-width=\"2\" /><line x1=\"243.66666666666666\" y1=\"300\" x2=\"243.66666666666666\" y2=\"290.1818181818182\" stroke=\"var(--svg-accent, #2563eb)\" stroke-width=\"2\" /><line x1=\"335\" y1=\"300\" x2=\"335\" y2=\"290.1818181818182\" stroke=\"var(--svg-accent, #2563eb)\" stroke-width=\"2\" /><circle cx=\"61\" cy=\"290.1818181818182\" r=\"3\" fill=\"var(--svg-accent, #2563eb)\"/><circle cx=\"152.33333333333331\" cy=\"290.1818181818182\" r=\"3\" fill=\"var(--svg-accent, #2563eb)\"/><circle cx=\"243.66666666666666\" cy=\"290.1818181818182\" r=\"3\" fill=\"var(--svg-accent, #2563eb)\"/><circle cx=\"335\" cy=\"290.1818181818182\" r=\"3\" fill=\"var(--svg-accent, #2563eb)\"/><line x1=\"18\" y1=\"375\" x2=\"44\" y2=\"375\" stroke=\"var(--svg-accent, #2563eb)\" stroke-width=\"3\" /><text x=\"52\" y=\"380\" text-anchor=\"start\" font-size=\"16\" class=\"svg-text\">Kupon</text><line x1=\"61\" y1=\"300\" x2=\"61\" y2=\"300\" stroke=\"var(--svg-success, #16a34a)\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/><line x1=\"152.33333333333331\" y1=\"300\" x2=\"152.33333333333331\" y2=\"300\" stroke=\"var(--svg-success, #16a34a)\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/><line x1=\"243.66666666666666\" y1=\"300\" x2=\"243.66666666666666\" y2=\"300\" stroke=\"var(--svg-success, #16a34a)\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/><line x1=\"335\" y1=\"300\" x2=\"335\" y2=\"136.36363636363637\" stroke=\"var(--svg-success, #16a34a)\" stroke-width=\"2\" stroke-dasharray=\"8 5\"/><circle cx=\"61\" cy=\"300\" r=\"3\" fill=\"var(--svg-success, #16a34a)\"/><circle cx=\"152.33333333333331\" cy=\"300\" r=\"3\" fill=\"var(--svg-success, #16a34a)\"/><circle cx=\"243.66666666666666\" cy=\"300\" r=\"3\" fill=\"var(--svg-success, #16a34a)\"/><circle cx=\"335\" cy=\"136.36363636363637\" r=\"3\" fill=\"var(--svg-success, #16a34a)\"/><line x1=\"18\" y1=\"405\" x2=\"44\" y2=\"405\" stroke=\"var(--svg-success, #16a34a)\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><text x=\"52\" y=\"410\" text-anchor=\"start\" font-size=\"16\" class=\"svg-text\">Pokok</text></svg>",
      "altText": "Roche: arus kupon dan pokok. Tahun 1-3: kupon 120 ribu euro per tahun. Tahun 4: kupon 120 dan pokok 2.000 ribu euro. PV liabilitas memakai yield 9%, bukan kupon 6%",
      "overview": {
        "heading": "Roche: arus kupon dan pokok",
        "cards": [
          {
            "title": "Tahun 1-3: kupon 120 ribu euro per tahun",
            "subtitle": "",
            "items": [],
            "takeaway": ""
          },
          {
            "title": "Tahun 4: kupon 120 dan pokok 2.000 ribu euro",
            "subtitle": "",
            "items": [],
            "takeaway": ""
          },
          {
            "title": "PV liabilitas memakai yield 9%, bukan kupon 6%",
            "subtitle": "",
            "items": [],
            "takeaway": ""
          }
        ],
        "footer": "Sumbu, satuan, kurva dan asumsi dijelaskan pada teks. Tahun 1-3: kupon 120 ribu euro per tahun. Tahun 4: kupon 120 dan pokok 2.000 ribu euro. PV liabilitas memakai yield 9%, bukan kupon 6%"
      },
      "transcript": [
        "Tahun 1-3: kupon 120 ribu euro per tahun",
        "Tahun 4: kupon 120 dan pokok 2.000 ribu euro",
        "PV liabilitas memakai yield 9%, bukan kupon 6%"
      ]
    },
    {
      "kind": "h2",
      "text": "8. Exam Toolkit"
    },
    {
      "kind": "table",
      "title": "Alur penyelesaian TM12",
      "headers": [
        "Langkah",
        "Pemeriksaan"
      ],
      "rows": [
        [
          "Klasifikasi",
          "Baca hak konversi dan kewajiban penebusan."
        ],
        [
          "Pemisahan",
          "Ukur liabilitas dahulu dan ekuitas residual."
        ],
        [
          "Penyelesaian",
          "Bedakan konversi, pembelian kembali, dan waran."
        ],
        [
          "Kompensasi",
          "Ukur grant date dan alokasikan selama masa jasa."
        ]
      ],
      "caption": "Kieso IFRS 5e, halaman PDF 1264.",
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
