const tm9: Reading = {
  "tm": 9,
  "title": "Perekonomian Tertutup: Model Dua Sektor (Konsumsi & Investasi)",
  "ref": "Kontrak: 1(20), 2(23,24) · Substansi: Samuelson Ch.21–22; Mankiw Ch.26, Ch.33–34",
  "intro": "Membedah struktur ekonomi paling murni tanpa campur tangan pemerintah, membongkar anatomi konsumsi rumah tangga, fungsi tabungan, dan tabel perhitungan MPC & MPS secara presisi.",
  "objectives": [
    "Memahami anatomi ekonomi dua sektor: Konsumsi dan Tabungan.",
    "Menyusun fungsi Konsumsi (C) dan fungsi Tabungan (S) dari tabel data absolut.",
    "Membaca dan menginterpretasikan grafik Fungsi Konsumsi, Break-Even Point, dan Fungsi Tabungan.",
    "Menghitung secara presisi Marginal Propensity to Consume (MPC) dan Marginal Propensity to Save (MPS)."
  ],
  "blocks": [
    {
      "kind": "h2",
      "text": "Pengantar: Anatomi Ekonomi Dua Sektor"
    },
    {
      "kind": "p",
      "text": "Perekonomian tertutup dua sektor adalah model paling mendasar untuk memahami mesin penggerak ekonomi. Di sini, ruang isolasi diberlakukan: kita **hanya** memiliki dua aktor utama, yakni **Rumah Tangga (Households)** dan **Perusahaan (Firms)**. Model ini melarang adanya campur tangan Pemerintah (tanpa pajak $T$ atau belanja $G$) dan tidak ada perdagangan internasional (tanpa ekspor $X$ atau impor $M$)."
    },
    {
      "kind": "h2",
      "text": "Mesin Pertama: Consumption (Konsumsi)"
    },
    {
      "kind": "ul",
      "items": [
        "**Definisi Absolut:** Konsumsi adalah aktivitas yang menghancurkan nilai guna (utility) dari barang dan jasa.",
        "**Personal Consumption Expenditure:** Pengeluaran oleh rumah tangga untuk membeli barang tidak tahan lama (non-durable), barang tahan lama (durable) *kecuali* perumahan baru, dan jasa.",
        "**Fungsi Konsumsi Linear:** Bentuk persamaan mutlaknya adalah **C = C₀ + bY**."
      ]
    },
    {
      "kind": "formula",
      "text": "C = C₀ + bY",
      "note": "Di mana:\nC₀ = Autonomous Consumption (Konsumsi Otonom: konsumsi minimum untuk bertahan hidup saat pendapatan nol).\nb = Marginal Propensity to Consume (MPC), nilainya di antara 0 dan 1 (0 < b < 1).\nY = Disposable Income (Pendapatan Siap Pakai)."
    },
    {
      "kind": "h2",
      "text": "Mesin Kedua: Saving (Tabungan)"
    },
    {
      "kind": "ul",
      "items": [
        "**Definisi Absolut:** Personal saving adalah bagian dari disposable income (pendapatan) yang **TIDAK** dikonsumsi.",
        "**Penurunan Rumus Tabungan:** Karena setiap uang hanya bisa dikonsumsi atau ditabung, maka persamaannya diturunkan langsung dari fungsi konsumsi."
      ]
    },
    {
      "kind": "formula",
      "text": "S = Y - C\nS = Y - (C₀ + bY)\nS = -C₀ + (1 - b)Y",
      "note": "Di mana:\n-C₀ = Dissaving (Tabungan Negatif / Ngutang untuk makan saat pendapatan nol).\n(1 - b) = Marginal Propensity to Save (MPS), nilainya di antara 0 dan 1 (0 < b < 1)."
    },
    {
      "kind": "h2",
      "text": "Tabel 1: Hubungan Income, Consumption, dan Saving"
    },
    {
      "kind": "p",
      "text": "Mari kita bedah angka absolut pembentuk kurva makroekonomi (lihat tabel di bawah). Jika Pendapatan (Y) adalah kolom 1, dan Konsumsi (C) adalah kolom 2, maka Tabungan (S) adalah sisa dari Kolom 1 dikurangi Kolom 2."
    },
    {
      "kind": "table",
      "headers": ["Titik", "Disposable Income (1)", "Consumption (2)", "Saving (3) = (1) - (2)"],
      "rows": [
        ["A", "$24.000", "$24.200", "-$200 (Dissaving)"],
        ["B", "$25.000", "$25.000", "$0 (Break-even)"],
        ["C", "$26.000", "$25.800", "$200 (Saving)"],
        ["D", "$27.000", "$26.600", "$400 (Saving)"],
        ["E", "$28.000", "$27.400", "$600 (Saving)"],
        ["F", "$29.000", "$28.200", "$800 (Saving)"],
        ["G", "$30.000", "$29.000", "$1.000 (Saving)"]
      ]
    },
    {
      "kind": "h2",
      "text": "Grafik 1: Kurva Fungsi Konsumsi & Titik Impas"
    },
    {
      "kind": "figure",
      "title": "Plot Fungsi Konsumsi (Titik A hingga G)",
      "svg": "<svg font-family=\"DM Sans, sans-serif\" style=\"max-width:100%;height:auto;margin:0 auto;display:block\" viewBox=\"0 0 450 350\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Sumbu Utama -->\n  <line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"400\" y1=\"300\" y2=\"300\"></line>\n  <line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"50\" y1=\"300\" y2=\"30\"></line>\n  <!-- Label Sumbu -->\n  <text fill=\"#9aa4b7\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(-90 20 180)\" x=\"20\" y=\"180\">Consumption (dollars)</text>\n  <text fill=\"#9aa4b7\" font-size=\"11\" font-weight=\"bold\" x=\"180\" y=\"335\">Disposable income (dollars)</text>\n  <text fill=\"#9aa4b7\" font-size=\"11\" font-weight=\"bold\" x=\"410\" y=\"305\">DI</text>\n  <text fill=\"#9aa4b7\" font-size=\"11\" font-weight=\"bold\" x=\"45\" y=\"20\">C</text>\n  <!-- Garis 45 Derajat -->\n  <line stroke=\"#9aa4b7\" stroke-width=\"1.5\" x1=\"50\" x2=\"300\" y1=\"300\" y2=\"50\"></line>\n  <text fill=\"#d81b60\" font-size=\"10\" x=\"75\" y=\"290\">45°</text>\n  <!-- Kurva Konsumsi -->\n  <line stroke=\"#4f9cf9\" stroke-width=\"2\" x1=\"160\" x2=\"370\" y1=\"200\" y2=\"50\"></line>\n  <text fill=\"#4f9cf9\" font-size=\"10\" font-weight=\"bold\" x=\"365\" y=\"75\">Consumption</text>\n  <text fill=\"#4f9cf9\" font-size=\"10\" font-weight=\"bold\" x=\"375\" y=\"88\">function</text>\n  <!-- Titik Data -->\n  <circle cx=\"200\" cy=\"171\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"190\" y=\"165\">A</text>\n  <circle cx=\"220\" cy=\"157\" fill=\"#d81b60\" r=\"4\"></circle>\n  <text fill=\"#d81b60\" font-size=\"10\" font-weight=\"bold\" x=\"195\" y=\"145\">B</text>\n  <text fill=\"#d81b60\" font-size=\"10\" x=\"105\" y=\"145\">Break-even point</text>\n  <line stroke=\"#d81b60\" stroke-width=\"1\" x1=\"190\" x2=\"215\" y1=\"145\" y2=\"155\"></line>\n  <circle cx=\"240\" cy=\"143\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"230\" y=\"137\">C</text>\n  <circle cx=\"260\" cy=\"129\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"250\" y=\"123\">D</text>\n  <circle cx=\"280\" cy=\"114\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"290\" y=\"117\">E</text>\n  <circle cx=\"300\" cy=\"100\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"310\" y=\"103\">F</text>\n  <circle cx=\"320\" cy=\"86\" fill=\"#f9a825\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"330\" y=\"89\">G</text>\n  <!-- Garis Saving -->\n  <line stroke=\"#d81b60\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\" x1=\"280\" x2=\"280\" y1=\"114\" y2=\"70\"></line>\n  <text fill=\"#d81b60\" font-size=\"10\" font-weight=\"bold\" transform=\"rotate(-35 340 60)\" x=\"340\" y=\"60\">Saving</text>\n  <circle cx=\"280\" cy=\"70\" fill=\"#d81b60\" r=\"3\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"265\" y=\"65\">E''</text>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"285\" y=\"315\">28,000</text>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"210\" y=\"315\">25,000</text>\n</svg>",
      "caption": "Figure 21-2. A Plot of the Consumption Function. Kurva Konsumsi (biru) memotong garis 45 derajat pada titik B. Di sebelah kanan B, jarak vertikal antara kurva biru dan garis 45 derajat adalah Saving (Tabungan)."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Interpretasi Anatomi: Kurva Fungsi Konsumsi",
      "text": "**Titik A:** Keluarga berada di posisi miskin absolut. Pendapatan hanya $24.000, tapi biaya hidup mendesak $24.200. Akibatnya keluarga ini **berutang $200 (Dissaving)**. Secara grafis, kurva biru *berada di atas* garis 45 derajat.\n\n**Titik B (Break-Even Point):** Titik keramat di mana Pendapatan ($25.000) tepat ludes digunakan untuk Konsumsi ($25.000). Tidak ada yang ditabung, tidak ada utang (S=0). Di grafik, ini adalah **titik perpotongan** Kurva Konsumsi dengan Garis Kesempurnaan 45 derajat.\n\n**Titik E (dan C,D,F,G):** Ekonomi membaik. Pendapatan naik ke $28.000. Keluarga hanya membelanjakan $27.400, dan menabung $600. Di area ini, kurva Konsumsi *berada di bawah* garis 45 derajat. **Jarak vertikal** antara kurva Konsumsi (titik E) merentang naik ke garis 45 derajat (titik E'') adalah representasi visual mutlak dari Saving."
    },
    {
      "kind": "h2",
      "text": "Grafik 2: Kurva Fungsi Tabungan (Saving)"
    },
    {
      "kind": "figure",
      "title": "Fungsi Tabungan adalah Cerminan Fungsi Konsumsi",
      "svg": "<svg font-family=\"DM Sans, sans-serif\" style=\"max-width:100%;height:auto;margin:0 auto;display:block\" viewBox=\"0 0 450 300\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Sumbu Utama -->\n  <line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"400\" y1=\"220\" y2=\"220\"></line>\n  <line stroke=\"#657084\" stroke-width=\"1.5\" x1=\"50\" x2=\"50\" y1=\"280\" y2=\"30\"></line>\n  <line stroke=\"#657084\" stroke-width=\"1\" x1=\"45\" x2=\"55\" y1=\"250\" y2=\"250\"></line>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"20\" y=\"255\">-200</text>\n  <line stroke=\"#657084\" stroke-width=\"1\" x1=\"45\" x2=\"55\" y1=\"220\" y2=\"220\"></line>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"30\" y=\"225\">0</text>\n  <!-- Label Sumbu -->\n  <text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(-90 15 150)\" x=\"15\" y=\"150\">Net saving (dollars)</text>\n  <text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"190\" y=\"285\">Disposable income (dollars)</text>\n  <text fill=\"#9aa4b7\" font-size=\"11\" font-weight=\"bold\" x=\"410\" y=\"225\">DI</text>\n  <text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"45\" y=\"20\">S</text>\n  <!-- Kurva Saving -->\n  <line stroke=\"#d81b60\" stroke-width=\"2.5\" x1=\"160\" x2=\"370\" y1=\"270\" y2=\"50\"></line>\n  <text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"310\" y=\"150\">Saving</text>\n  <!-- Titik Data -->\n  <circle cx=\"190\" cy=\"240\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"180\" y=\"235\">A</text>\n  <circle cx=\"210\" cy=\"220\" fill=\"#d81b60\" r=\"5\"></circle>\n  <text fill=\"#d81b60\" font-size=\"11\" font-weight=\"bold\" x=\"200\" y=\"210\">B</text>\n  <circle cx=\"230\" cy=\"198\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"220\" y=\"190\">C</text>\n  <circle cx=\"250\" cy=\"177\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"240\" y=\"170\">D</text>\n  <circle cx=\"270\" cy=\"156\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"260\" y=\"149\">E</text>\n  <circle cx=\"290\" cy=\"135\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"280\" y=\"128\">F</text>\n  <circle cx=\"310\" cy=\"114\" fill=\"#f9a825\" r=\"4\"></circle>\n  <text fill=\"#9aa4b7\" font-size=\"11\" x=\"300\" y=\"107\">G</text>\n  <!-- Garis Jarak E -->\n  <line stroke=\"#d81b60\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\" x1=\"270\" x2=\"270\" y1=\"220\" y2=\"156\"></line>\n  <line stroke=\"#657084\" stroke-width=\"1\" x1=\"270\" x2=\"270\" y1=\"220\" y2=\"225\"></line>\n  <text fill=\"#9aa4b7\" font-size=\"10\" x=\"255\" y=\"240\">28,000</text>\n</svg>",
      "caption": "Figure 21-3. The Saving Function Is the Mirror Image of the Consumption Function. Kurva menembus garis nol (0) tepat di titik break-even B."
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Interpretasi Anatomi: Cermin Tabungan",
      "text": "Jika di grafik pertama, kurva biru berpotongan dengan garis 45 derajat di titik B... maka di grafik kedua ini, kurva merah jambu (Saving) **memotong tepat di angka NOL pada sumbu horizontal** pada titik B yang sama ($25.000). \n\nArea di bawah garis horizontal (seperti Titik A) melambangkan **Utang (Dissaving)**, dan area di atas garis horizontal (mulai Titik C ke atas) melambangkan tumpukan kekayaan riil (Saving positif)."
    },
    {
      "kind": "h2",
      "text": "Mengukur Percepatan: Marginal Propensity to Consume & Save (MPC & MPS)"
    },
    {
      "kind": "p",
      "text": "Jika kamu mendapat rejeki tambahan $1, berapakah porsi receh yang akan kamu bakar untuk konsumsi? Angka inilah yang disebut dengan **MPC**."
    },
    {
      "kind": "ul",
      "items": [
        "**MPC (Marginal Propensity to Consume):** Secara matematis adalah **Kemiringan (Slope)** dari fungsi konsumsi. Mengukur tambahan konsumsi akibat tambahan 1 dollar disposable income.",
        "**MPS (Marginal Propensity to Save):** Adalah kemiringan dari fungsi tabungan. Mengukur porsi dari tambahan 1 dollar yang masuk ke celengan.",
        "**Hubungan Besi:** Keduanya harus bernilai mutlak 1, karena setiap tambahan koin HANYA bisa dikonsumsi atau ditabung. (MPC + MPS = 1)"
      ]
    },
    {
      "kind": "formula",
      "text": "MPC = ΔC / ΔY  atau  MPC = (C₂ - C₁) / (Y₂ - Y₁)\n\nMPS = ΔS / ΔY  atau  MPS = (S₂ - S₁) / (Y₂ - Y₁)",
      "note": "Δ (Delta) melambangkan selisih atau 'perubahan'. Selisih data baris bawah dikurangi data baris atasnya."
    },
    {
      "kind": "h2",
      "text": "Tabel 2: Eksekusi Perhitungan MPC dan MPS"
    },
    {
      "kind": "p",
      "text": "Mari kita hitung transisi dari Titik A ke Titik B berdasarkan data Tabel 1 sebelumnya:\n- **ΔY (Perubahan Income):** Pendapatan naik dari $24.000 ke $25.000. Selisih = $1.000.\n- **ΔC (Perubahan Konsumsi):** Belanja naik dari $24.200 ke $25.000. Selisih = $800.\n- **ΔS (Perubahan Tabungan):** Tabungan berubah dari -$200 menjadi 0. Selisih = +$200."
    },
    {
      "kind": "table",
      "headers": ["Transisi", "Δ Income (ΔY)", "Δ Consump. (ΔC)", "MPC (ΔC / ΔY)", "Δ Saving (ΔS)", "MPS (ΔS / ΔY)"],
      "rows": [
        ["A ke B", "$1.000", "$800", "800/1000 = **0.80**", "$200", "200/1000 = **0.20**"],
        ["B ke C", "$1.000", "$800", "800/1000 = **0.80**", "$200", "200/1000 = **0.20**"],
        ["C ke D", "$1.000", "$800", "800/1000 = **0.80**", "$200", "200/1000 = **0.20**"],
        ["D ke E", "$1.000", "$800", "800/1000 = **0.80**", "$200", "200/1000 = **0.20**"]
      ]
    },
    {
      "kind": "callout",
      "variant": "info",
      "title": "Interpretasi Kunci",
      "text": "Perhatikan bahwa angka MPC terus menerus **0.80** dan MPS selalu **0.20** di sepanjang tabel. Hal ini membuktikan bahwa Fungsi Konsumsi dan Tabungan di kasus ini berbentuk **Linear (Garis Lurus)** dengan kemiringan (slope) konstan. Jika fungsinya melengkung (non-linear), maka angka MPC akan berubah di tiap tingkatan."
    }
  ]
};

const tm10: Reading = {