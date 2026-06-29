const tm11: Reading = {
  "tm": 11,
  "title": "Uang, Sistem Keuangan, dan Pasar Dana Pinjaman",
  "ref": "Mankiw Ch. 29 (Monetary System), Ch. 26 (Saving, Investment, and the Financial System)",
  "intro": "Memahami apa itu uang, bagaimana bank menciptakan uang melalui sistem cadangan fraksional, instrumen kebijakan moneter, dan interaksi tabungan-investasi di pasar dana pinjaman.",
  "objectives": [
    "Menjelaskan fungsi dan jenis-jenis uang.",
    "Mengukur jumlah uang beredar (M1 dan M2).",
    "Menganalisis penciptaan uang oleh bank (Money Multiplier).",
    "Menjelaskan alat kebijakan moneter bank sentral.",
    "Menganalisis pasar dana pinjaman dan dampak kebijakan pemerintah."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Makna dan Fungsi Uang"
    },
    {
      "kind": "p",
      "text": "Uang adalah aset dalam ekonomi yang secara rutin digunakan oleh orang-orang untuk membeli barang dan jasa dari orang lain. Bagi seorang ekonom, uang bukan sekadar kekayaan, melainkan hanya beberapa jenis kekayaan yang diterima secara umum oleh penjual."
    },
    {
      "kind": "ul",
      "items": [
        "**Medium of exchange (Alat tukar):** Barang yang diberikan pembeli kepada penjual ketika mereka ingin membeli barang dan jasa.",
        "**Unit of account (Satuan hitung):** Tolok ukur yang digunakan orang untuk memasang harga dan mencatat utang.",
        "**Store of value (Penyimpan nilai):** Aset yang dapat digunakan orang untuk memindahkan daya beli dari masa sekarang ke masa depan."
      ]
    },
    {
      "kind": "p",
      "text": "Uang dibedakan menjadi **Commodity money** (uang barang yang memiliki nilai intrinsik seperti emas atau perak) dan **Fiat money** (uang fiat yang digunakan sebagai uang karena dekrit/hukum pemerintah, seperti uang kertas dan koin saat ini)."
    },
    {
      "kind": "h2",
      "text": "Jumlah Uang Beredar (Money Supply) dan Permintaan Uang"
    },
    {
      "kind": "p",
      "text": "Kuantitas uang yang tersedia dalam ekonomi disebut *money supply*. Pengukurannya umumnya dibagi dua:"
    },
    {
      "kind": "ul",
      "items": [
        "**M1:** Uang logam dan mata uang kertas yang beredar di luar bank ditambah simpanan yang dapat dicek (giro).",
        "**M2:** M1 ditambah dengan aset lain yang sangat likuid seperti rekening tabungan dan deposito jangka pendek."
      ]
    },
    {
      "kind": "p",
      "text": "Permintaan uang (*money demand*) muncul karena dua alasan utama:"
    },
    {
      "kind": "ul",
      "items": [
        "**Transaksi (Transactions Demand):** Untuk membeli barang. Permintaan ini meningkat jika pendapatan atau harga naik.",
        "**Aset (Asset Demand):** Menyimpan uang sebagai aset, biasanya terjadi ketika suku bunga investasi sangat rendah (mendekati nol). Biaya peluang (*opportunity cost*) dari memegang uang adalah bunga yang hilang karena tidak diinvestasikan."
      ]
    },
    {
      "kind": "h2",
      "text": "Sistem Keuangan: Perantara dan Pasar"
    },
    {
      "kind": "p",
      "text": "Sistem keuangan terdiri dari lembaga-lembaga yang membantu mempertemukan tabungan satu pihak dengan investasi pihak lain. Sistem ini memiliki dua jalur:"
    },
    {
      "kind": "ul",
      "items": [
        "**Perantara Keuangan (Financial Intermediaries):** Lembaga tempat penabung secara *tidak langsung* menyediakan dana bagi peminjam. Contoh: Bank komersial dan reksa dana.",
        "**Pasar Keuangan (Financial Markets):** Lembaga tempat penabung secara *langsung* menyediakan dana bagi peminjam. Contoh: Pasar saham dan pasar obligasi."
      ]
    },
    {
      "kind": "h2",
      "text": "Bank dan Penciptaan Uang (Money Multiplier)"
    },
    {
      "kind": "p",
      "text": "Ketika kita menyimpan uang di bank, bank tidak menyimpannya 100% di brankas. Dalam sistem **Fractional-Reserve Banking**, bank hanya menahan sebagian dana sebagai cadangan (*reserves*) dan meminjamkan sisanya. Rasio dari total deposito yang harus ditahan bank disebut *reserve ratio* (R)."
    },
    {
      "kind": "callout",
      "variant": "key",
      "title": "Money Multiplier",
      "text": "Money multiplier (pengganda uang) adalah jumlah uang yang dihasilkan sistem perbankan untuk setiap dolar cadangan. Rumusnya adalah **M = 1 / R**."
    },
    {
      "kind": "example",
      "title": "Contoh Penciptaan Uang",
      "blocks": [
        {
          "kind": "p",
          "text": "Misalkan *reserve ratio* (R) adalah 10% (0.1). Jika Bank Sentral menyuntikkan uang $1000 ke dalam ekonomi:"
        },
        {
          "kind": "ul",
          "items": [
            "Bank Pertama menerima deposit $1000. Menyimpan $100 (10%) sebagai cadangan, meminjamkan $900.",
            "Peminjam membelanjakan $900, dan uang itu masuk ke Bank Kedua. Bank Kedua menyimpan $90 (10%) dan meminjamkan $810.",
            "Total uang beredar pada tahap ini: $1000 + $900 + $810 + ... = $10.000."
          ]
        },
        {
          "kind": "p",
          "text": "Pengganda uang = 1 / 0.1 = 10. Uang $1000 berubah menjadi **$10.000** dalam sistem perbankan."
        }
      ]
    },
    {
      "kind": "h2",
      "text": "Kebijakan Moneter"
    },
    {
      "kind": "p",
      "text": "Bank Sentral mengendalikan *money supply* melalui tiga instrumen utama:"
    },
    {
      "kind": "ul",
      "items": [
        "**Open-Market Operations (Operasi Pasar Terbuka):** Membeli obligasi pemerintah untuk *menambah* uang beredar, atau menjual obligasi untuk *mengurangi* uang beredar.",
        "**Reserve Requirements (Giro Wajib Minimum):** Mengubah rasio cadangan minimum. *Menurunkan* rasio berarti bank bisa meminjamkan lebih banyak uang (uang beredar bertambah). *Menaikkan* rasio akan mengurangi uang beredar.",
        "**Discount Rate (Suku Bunga Diskonto):** Suku bunga pinjaman yang diberikan Bank Sentral kepada bank komersial. *Menurunkan* suku bunga ini mendorong bank untuk meminjam lebih banyak cadangan (uang beredar bertambah)."
      ]
    },
    {
      "kind": "h2",
      "text": "Pasar Dana Pinjaman (Market for Loanable Funds)"
    },
    {
      "kind": "p",
      "text": "Di pasar dana pinjaman, mereka yang memiliki sisa pendapatan menawarkannya sebagai tabungan, dan mereka yang butuh modal memintanya untuk investasi. Keseimbangan antara Supply (Tabungan) dan Demand (Investasi) menentukan **suku bunga riil (real interest rate)**."
    },
    {
      "kind": "table",
      "headers": [
        "Kebijakan",
        "Dampak Terhadap Pasar",
        "Hasil"
      ],
      "rows": [
        [
          "Insentif Pajak Tabungan (Penurunan pajak bunga)",
          "Meningkatkan Supply dana pinjaman (kurva Supply bergeser ke kanan).",
          "Suku bunga **turun**, kuantitas dana/investasi **naik**."
        ],
        [
          "Kredit Pajak Investasi (Insentif perusahaan)",
          "Meningkatkan Demand dana pinjaman (kurva Demand bergeser ke kanan).",
          "Suku bunga **naik**, kuantitas dana/investasi **naik**."
        ],
        [
          "Defisit Anggaran Pemerintah (G > T)",
          "Mengurangi Public Saving. Supply dana pinjaman agregat menurun (bergeser ke kiri).",
          "Suku bunga **naik**, investasi swasta **turun** (*Crowding Out*)."
        ]
      ]
    },
    {
      "kind": "callout",
      "variant": "warning",
      "title": "Crowding Out",
      "text": "Ketika pemerintah mengalami defisit anggaran, pemerintah harus meminjam dari pasar dana pinjaman. Hal ini mengurangi pasokan dana yang tersedia bagi sektor swasta, menyebabkan suku bunga naik dan investasi perusahaan menurun. Fenomena investasi swasta yang 'tergusur' oleh defisit pemerintah ini disebut *crowding out*."
    }
  ]
};