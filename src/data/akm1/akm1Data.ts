// =============================================================
// src/data/readings/akk201.ts
// Rangkuman KOMPREHENSIF — Akuntansi Keuangan Menengah I (AKK201)
// Sumber utama: Kieso, Weygandt & Warfield,
//               Intermediate Accounting: IFRS Edition (5th ed.).
// Mencakup teori, jurnal, format laporan (header benar),
// pembedaan perusahaan JASA vs DAGANG, diagram, dan
// laporan isian interaktif (builder).
// =============================================================
import type { ContentBlock, Reading } from "../../types";
import {
  AMAZON_WARRANTY_REVENUE_CASE,
  APRES_PURCHASE_COMMITMENT_CASE,
  CALL_MART_COST_FLOW_CASE,
  CASSY_SCF_CASE,
  CASSY_SFP_CASE,
  CETUS_GROSS_PROFIT_CASE,
  CINER_FULL_CYCLE_CASE,
  DEBENHAMS_RETAIL_INVENTORY_CASE,
  INFUSION_CONVENTIONAL_RETAIL_CASE,
  JEREMIAH_NOTES_RECEIVABLE_CASE,
  JINN_FENG_LCNRV_CASE,
  MANDER_NRV_CASE,
  NUGGET_BANK_RECONCILIATION_CASE,
  NORWOOD_INVENTORY_TURNOVER_CASE,
  RICARDO_LCNRV_RECOVERY_CASE,
  SKIPPER_REVENUE_ALLOCATION_CASE,
  SLAMAR_RECEIVABLE_TRANSFER_CASE,
  TATE_INVENTORY_ANALYSIS_CASE,
  VESPER_TVM_CASE,
  WERTH_INVENTORY_OWNERSHIP_CASE,
  WILSON_RECEIVABLES_AGING_CASE,
} from "./akm1PracticeCases";

// ---------- Diagram (SVG) ----------
const SVG_FRAMEWORK = `
<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="40" y="10" width="560" height="56" rx="10" fill="#151E2F" stroke="#E2C044"/>
  <text x="320" y="34" fill="#E2C044" font-size="13" font-weight="700" text-anchor="middle">LEVEL 1 — Tujuan Pelaporan Keuangan</text>
  <text x="320" y="52" fill="#cbd5e1" font-size="11" text-anchor="middle">Menyediakan informasi yang berguna untuk keputusan investor &amp; kreditor</text>
  <rect x="40" y="86" width="560" height="56" rx="10" fill="#151E2F" stroke="#2A374C"/>
  <text x="320" y="110" fill="#E2C044" font-size="13" font-weight="700" text-anchor="middle">LEVEL 2 — Karakteristik Kualitatif &amp; Elemen</text>
  <text x="320" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">Relevance, Faithful Representation, … | Aset, Liabilitas, Ekuitas, Income, Expense</text>
  <rect x="40" y="162" width="560" height="56" rx="10" fill="#151E2F" stroke="#2A374C"/>
  <text x="320" y="186" fill="#E2C044" font-size="13" font-weight="700" text-anchor="middle">LEVEL 3 — Asumsi, Prinsip &amp; Kendala</text>
  <text x="320" y="204" fill="#cbd5e1" font-size="11" text-anchor="middle">Going concern, accrual, historical cost, revenue/expense recognition, cost constraint</text>
</svg>`;

const SVG_QUALITIES = `
<svg viewBox="0 0 660 270" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <rect x="230" y="8" width="200" height="38" rx="8" fill="#E2C044"/>
  <text x="330" y="32" fill="#0B1120" font-size="12" font-weight="800" text-anchor="middle">Karakteristik Kualitatif</text>
  <line x1="330" y1="46" x2="170" y2="70" stroke="#2A374C"/><line x1="330" y1="46" x2="500" y2="70" stroke="#2A374C"/>
  <rect x="60" y="70" width="220" height="34" rx="8" fill="#151E2F" stroke="#E2C044"/>
  <text x="170" y="92" fill="#E2C044" font-size="12" font-weight="700" text-anchor="middle">FUNDAMENTAL</text>
  <rect x="390" y="70" width="220" height="34" rx="8" fill="#151E2F" stroke="#2A374C"/>
  <text x="500" y="92" fill="#cbd5e1" font-size="12" font-weight="700" text-anchor="middle">ENHANCING</text>
  <text x="170" y="134" fill="#cbd5e1" font-size="11" text-anchor="middle" font-weight="700">Relevance</text>
  <text x="170" y="152" fill="#94a3b8" font-size="10" text-anchor="middle">predictive · confirmatory · materiality</text>
  <text x="170" y="182" fill="#cbd5e1" font-size="11" text-anchor="middle" font-weight="700">Faithful Representation</text>
  <text x="170" y="200" fill="#94a3b8" font-size="10" text-anchor="middle">complete · neutral · free from error</text>
  <text x="500" y="134" fill="#94a3b8" font-size="11" text-anchor="middle">Comparability</text>
  <text x="500" y="156" fill="#94a3b8" font-size="11" text-anchor="middle">Verifiability</text>
  <text x="500" y="178" fill="#94a3b8" font-size="11" text-anchor="middle">Timeliness</text>
  <text x="500" y="200" fill="#94a3b8" font-size="11" text-anchor="middle">Understandability</text>
  <text x="330" y="245" fill="#64748b" font-size="10" text-anchor="middle">Dibatasi kendala biaya (cost constraint)</text>
</svg>`;

const SVG_CYCLE = `
<svg viewBox="0 0 660 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#E2C044"/></marker></defs>
  <g font-size="10.5" text-anchor="middle">
    <rect x="10" y="20" width="120" height="44" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="70" y="40" fill="#E2C044" font-weight="700">1. Transaksi</text><text x="70" y="55" fill="#94a3b8">bukti</text>
    <rect x="180" y="20" width="120" height="44" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="240" y="40" fill="#E2C044" font-weight="700">2. Jurnal</text><text x="240" y="55" fill="#94a3b8">journalizing</text>
    <rect x="350" y="20" width="120" height="44" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="410" y="40" fill="#E2C044" font-weight="700">3. Buku Besar</text><text x="410" y="55" fill="#94a3b8">posting</text>
    <rect x="520" y="20" width="120" height="44" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="580" y="40" fill="#E2C044" font-weight="700">4. Neraca Saldo</text><text x="580" y="55" fill="#94a3b8">trial balance</text>
    <rect x="520" y="120" width="120" height="44" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="580" y="140" fill="#E2C044" font-weight="700">5. Penyesuaian</text><text x="580" y="155" fill="#94a3b8">adjusting</text>
    <rect x="350" y="120" width="120" height="44" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="410" y="140" fill="#E2C044" font-weight="700">6. NS Disesuaikan</text><text x="410" y="155" fill="#94a3b8">+ worksheet</text>
    <rect x="180" y="120" width="120" height="44" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="240" y="140" fill="#E2C044" font-weight="700">7. Laporan</text><text x="240" y="155" fill="#94a3b8">statements</text>
    <rect x="10" y="120" width="120" height="44" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="70" y="140" fill="#E2C044" font-weight="700">8. Penutup</text><text x="70" y="155" fill="#94a3b8">+ post-closing</text>
  </g>
  <line x1="130" y1="42" x2="178" y2="42" stroke="#E2C044" marker-end="url(#ar)"/>
  <line x1="300" y1="42" x2="348" y2="42" stroke="#E2C044" marker-end="url(#ar)"/>
  <line x1="470" y1="42" x2="518" y2="42" stroke="#E2C044" marker-end="url(#ar)"/>
  <line x1="580" y1="64" x2="580" y2="118" stroke="#E2C044" marker-end="url(#ar)"/>
  <line x1="518" y1="142" x2="472" y2="142" stroke="#E2C044" marker-end="url(#ar)"/>
  <line x1="348" y1="142" x2="302" y2="142" stroke="#E2C044" marker-end="url(#ar)"/>
  <line x1="178" y1="142" x2="132" y2="142" stroke="#E2C044" marker-end="url(#ar)"/>
</svg>`;

const SVG_REV5 = `
<svg viewBox="0 0 660 90" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="ar2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#E2C044"/></marker></defs>
  <g font-size="10" text-anchor="middle">
    <rect x="6" y="25" width="118" height="42" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="65" y="44" fill="#E2C044" font-weight="700">1. Kontrak</text><text x="65" y="58" fill="#94a3b8">identify contract</text>
    <rect x="134" y="25" width="118" height="42" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="193" y="44" fill="#E2C044" font-weight="700">2. Kewajiban</text><text x="193" y="58" fill="#94a3b8">perf. obligation</text>
    <rect x="262" y="25" width="118" height="42" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="321" y="44" fill="#E2C044" font-weight="700">3. Harga</text><text x="321" y="58" fill="#94a3b8">transaction price</text>
    <rect x="390" y="25" width="118" height="42" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="449" y="44" fill="#E2C044" font-weight="700">4. Alokasi</text><text x="449" y="58" fill="#94a3b8">allocate</text>
    <rect x="518" y="25" width="136" height="42" rx="8" fill="#151E2F" stroke="#E2C044"/><text x="586" y="44" fill="#E2C044" font-weight="700">5. Akui Pendapatan</text><text x="586" y="58" fill="#94a3b8">on satisfaction</text>
  </g>
  <line x1="124" y1="46" x2="132" y2="46" stroke="#E2C044" marker-end="url(#ar2)"/>
  <line x1="252" y1="46" x2="260" y2="46" stroke="#E2C044" marker-end="url(#ar2)"/>
  <line x1="380" y1="46" x2="388" y2="46" stroke="#E2C044" marker-end="url(#ar2)"/>
  <line x1="508" y1="46" x2="516" y2="46" stroke="#E2C044" marker-end="url(#ar2)"/>
</svg>`;

const SVG_TVM = `
<svg viewBox="0 0 640 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <line x1="40" y1="80" x2="600" y2="80" stroke="#475569" stroke-width="2"/>
  <g font-size="11" fill="#cbd5e1" text-anchor="middle">
    <line x1="60" y1="72" x2="60" y2="88" stroke="#475569"/><text x="60" y="104">0</text>
    <line x1="195" y1="72" x2="195" y2="88" stroke="#475569"/><text x="195" y="104">1</text>
    <line x1="330" y1="72" x2="330" y2="88" stroke="#475569"/><text x="330" y="104">2</text>
    <line x1="465" y1="72" x2="465" y2="88" stroke="#475569"/><text x="465" y="104">…</text>
    <line x1="585" y1="72" x2="585" y2="88" stroke="#475569"/><text x="585" y="104">n</text>
  </g>
  <text x="60" y="56" fill="#E2C044" font-size="12" font-weight="800" text-anchor="middle">PV</text>
  <text x="585" y="56" fill="#E2C044" font-size="12" font-weight="800" text-anchor="middle">FV</text>
  <text x="320" y="26" fill="#94a3b8" font-size="11" text-anchor="middle">FV = PV (1 + i)ⁿ  •  PV = FV ÷ (1 + i)ⁿ</text>
</svg>`;

const SVG_MERCH = `
<svg viewBox="0 0 660 150" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <defs><marker id="ar3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#E2C044"/></marker></defs>
  <text x="330" y="18" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="700">Perbedaan inti: perusahaan DAGANG punya Persediaan &amp; HPP</text>
  <g font-size="11" text-anchor="middle">
    <rect x="40" y="45" width="120" height="40" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="100" y="69" fill="#cbd5e1">Beli persediaan</text>
    <rect x="270" y="45" width="120" height="40" rx="8" fill="#151E2F" stroke="#2A374C"/><text x="330" y="69" fill="#cbd5e1">Simpan (Inventory)</text>
    <rect x="500" y="45" width="120" height="40" rx="8" fill="#151E2F" stroke="#E2C044"/><text x="560" y="63" fill="#E2C044" font-weight="700">Jual</text><text x="560" y="78" fill="#94a3b8">Penjualan &amp; HPP</text>
  </g>
  <line x1="160" y1="65" x2="268" y2="65" stroke="#E2C044" marker-end="url(#ar3)"/>
  <line x1="390" y1="65" x2="498" y2="65" stroke="#E2C044" marker-end="url(#ar3)"/>
  <text x="330" y="120" fill="#64748b" font-size="10.5" text-anchor="middle">JASA: tidak ada Persediaan/HPP — Pendapatan jasa − Beban operasi = Laba</text>
</svg>`;

// =====================================================================

// ---------- Learning flow blocks TM 1–7 (Batch 14) ----------
const AKM1_TM1_FLOW_BLOCKS: ContentBlock[] = [
  { kind: "h2", text: "A0. Peta Belajar TM 1 — Kerangka Dulu, Baru Istilah" },
  {
    kind: "p",
    text: "TM 1 tidak bertujuan membuat mahasiswa menghafal definisi sebanyak mungkin. Fokus utamanya adalah memahami **mengapa laporan keuangan disusun**, **informasi seperti apa yang dianggap berguna**, dan **bagaimana kerangka konseptual membantu akuntan mengambil keputusan ketika transaksi tidak sederhana**.",
  },
  {
    kind: "table",
    headers: ["Urutan belajar", "Isi", "Cara membaca"],
    rows: [
      [
        "1. Tujuan pelaporan",
        "Decision-usefulness untuk investor, kreditor, dan pengguna utama",
        "Pahami arah besarnya terlebih dahulu.",
      ],
      [
        "2. Karakteristik informasi",
        "Relevance, faithful representation, comparability, verifiability, timeliness, understandability",
        "Bedakan kualitas fundamental dan enhancing.",
      ],
      [
        "3. Elemen laporan",
        "Aset, liabilitas, ekuitas, income, expense",
        "Gunakan definisi elemen sebelum menentukan jurnal.",
      ],
      [
        "4. Recognition dan measurement",
        "Kapan diakui, berapa diukur, bagaimana disajikan",
        "Ini jembatan dari teori ke pencatatan.",
      ],
      [
        "5. Latihan klasifikasi",
        "Pasangkan situasi dengan konsep",
        "Gunakan sebagai cek pemahaman, bukan hafalan kosong.",
      ],
    ],
    caption:
      "Peta ini memisahkan bagian teori, peta konsep, dan latihan aktif TM 1.",
  },
  {
    kind: "callout",
    variant: "key",
    title: "Inti TM 1",
    text: "Kerangka konseptual menjawab tiga pertanyaan: **apa tujuan laporan keuangan**, **apa yang membuat informasi berguna**, dan **kapan suatu item layak diakui atau diungkapkan**.",
  },
  { kind: "h3", text: "Teori ringkas sebelum masuk diagram" },
  {
    kind: "p",
    text: "Dalam IFRS, laporan keuangan bukan sekadar daftar akun. Laporan keuangan adalah sistem komunikasi ekonomi. Angka yang disajikan harus membantu pengguna menilai prospek arus kas, risiko, dan stewardship manajemen. Karena itu, informasi harus relevan sekaligus merepresentasikan fenomena ekonomi secara setia.",
  },
  {
    kind: "p",
    text: "Kesalahan umum mahasiswa adalah langsung menghafal istilah tanpa melihat hubungan antar konsep. **Relevance** menjawab apakah informasi mampu memengaruhi keputusan. **Faithful representation** menjawab apakah angka tersebut menggambarkan realitas ekonomi secara lengkap, netral, dan bebas dari kesalahan material. Enhancing qualities baru memperkuat kegunaan setelah dua kualitas fundamental terpenuhi.",
  },
  {
    kind: "callout",
    variant: "warning",
    title: "Jebakan UTS TM 1",
    text: "Kalau soal menyebut informasi membantu prediksi masa depan, jawabannya cenderung **relevance/predictive value**. Kalau soal menekankan bebas bias, lengkap, atau tidak menyesatkan, jawabannya cenderung **faithful representation**. Kalau soal menekankan perbandingan antarperiode atau antarperusahaan, jawabannya **comparability/consistency**.",
  },
];

const AKM1_TM2_FLOW_BLOCKS: ContentBlock[] = [
  {
    kind: "h2",
    text: "A0. Peta Belajar TM 2 — Dari Transaksi ke Trial Balance",
  },
  {
    kind: "p",
    text: "TM 2 adalah fondasi mekanis AKM. Tujuannya bukan hanya bisa debit-kredit, tetapi bisa menelusuri alur **transaksi → jurnal → posting → trial balance**. Jika alur ini lemah, topik berikutnya seperti inventory, receivables, dan revenue recognition akan terasa seperti hafalan terpisah.",
  },
  {
    kind: "table",
    headers: ["Bagian", "Fokus teori", "Output belajar"],
    rows: [
      [
        "Debit-kredit",
        "Saldo normal akun dan efek transaksi",
        "Mahasiswa bisa menentukan sisi debit/kredit tanpa menebak.",
      ],
      [
        "Siklus akuntansi",
        "Urutan pemrosesan data akuntansi",
        "Mahasiswa tahu posisi jurnal, buku besar, dan trial balance.",
      ],
      [
        "Jasa vs dagang",
        "Perbedaan revenue, purchase, inventory, COGS, gross profit",
        "Mahasiswa bisa membaca laporan dagang.",
      ],
      [
        "Latihan jurnal",
        "Transaksi dasar berbasis kasus",
        "Mahasiswa bisa mengubah bukti transaksi menjadi jurnal.",
      ],
    ],
    caption:
      "Peta TM 2 memberi jeda antara teori siklus, tabel akun, dan latihan jurnal.",
  },
  { kind: "h3", text: "Teori inti: mengapa debit-kredit harus konsisten" },
  {
    kind: "p",
    text: "Double-entry accounting menjaga agar setiap transaksi mempertahankan persamaan akuntansi. Setiap kejadian ekonomi minimal memengaruhi dua akun. Karena itu, kesalahan debit-kredit bukan hanya salah posisi angka, tetapi dapat mengubah makna ekonomi transaksi.",
  },
  {
    kind: "p",
    text: "Trial balance hanya membuktikan total debit sama dengan total kredit. Trial balance **tidak menjamin** semua transaksi sudah benar. Kesalahan klasifikasi akun, transaksi yang belum dicatat, atau jurnal dengan akun salah tetap dapat menghasilkan trial balance yang seimbang.",
  },
  {
    kind: "callout",
    variant: "tip",
    title: "Cara membaca soal jurnal",
    text: "Identifikasi dahulu akun yang berubah, tentukan jenis akunnya, baru tentukan sisi debit/kredit. Jangan mulai dari hafalan jurnal, karena transaksi yang sedikit dimodifikasi bisa menjebak.",
  },
  {
    kind: "callout",
    variant: "warning",
    title: "Jebakan UTS TM 2",
    text: "Perusahaan dagang memakai akun **Inventory/COGS/Sales Revenue/Sales Returns/Sales Discounts**. Perusahaan jasa biasanya tidak memakai COGS dan gross profit. Jika soal menyebut pembelian barang untuk dijual kembali, perlakuannya berbeda dari pembelian perlengkapan untuk dipakai sendiri.",
  },
];

const AKM1_TM3_FLOW_BLOCKS: ContentBlock[] = [
  {
    kind: "h2",
    text: "A0. Peta Belajar TM 3 — Penyesuaian Mengubah Cash Basis Menjadi Accrual Basis",
  },
  {
    kind: "p",
    text: "TM 3 menjelaskan mengapa saldo trial balance awal belum siap menjadi laporan keuangan. Pada akhir periode, perusahaan harus menyesuaikan pendapatan dan beban agar mengikuti **accrual basis**, bukan sekadar arus kas.",
  },
  {
    kind: "table",
    headers: ["Tahap", "Pertanyaan utama", "Contoh akun"],
    rows: [
      [
        "Deferral",
        "Kas sudah terjadi, tetapi pendapatan/beban belum sepenuhnya terjadi?",
        "Prepaid expense, unearned revenue.",
      ],
      [
        "Accrual",
        "Pendapatan/beban sudah terjadi, tetapi kas belum terjadi?",
        "Accrued revenue, accrued expense.",
      ],
      [
        "Estimate",
        "Perlu alokasi atau estimasi akhir periode?",
        "Depreciation, allowance.",
      ],
      [
        "Worksheet",
        "Bagaimana adjustment mengalir ke laporan?",
        "Adjusted trial balance, income statement, SFP.",
      ],
      [
        "Closing",
        "Akun nominal ditutup ke retained earnings?",
        "Revenue, expense, dividends.",
      ],
    ],
    caption:
      "Peta TM 3 memisahkan teori penyesuaian, worksheet, dan closing entries.",
  },
  { kind: "h3", text: "Teori inti: accrual basis" },
  {
    kind: "p",
    text: "Accrual basis mengakui pendapatan ketika performance obligation dipenuhi dan mengakui beban ketika manfaat ekonomi dikonsumsi atau kewajiban terjadi. Karena itu, tanggal pembayaran kas tidak selalu sama dengan tanggal pengakuan pendapatan atau beban.",
  },
  {
    kind: "p",
    text: "Adjusting entries tidak dibuat untuk mengoreksi semua kesalahan, melainkan untuk memperbarui saldo akun agar mencerminkan kondisi akhir periode. Setelah penyesuaian, adjusted trial balance menjadi dasar penyusunan laporan keuangan.",
  },
  {
    kind: "callout",
    variant: "key",
    title: "Logika empat penyesuaian",
    text: "**Prepaid**: aset berubah menjadi beban. **Unearned**: liabilitas berubah menjadi pendapatan. **Accrued revenue**: aset/piutang dan pendapatan diakui. **Accrued expense**: beban dan liabilitas diakui.",
  },
  {
    kind: "callout",
    variant: "warning",
    title: "Jebakan UTS TM 3",
    text: "Worksheet bukan laporan keuangan formal. Worksheet membantu menyusun laporan, tetapi laporan resmi tetap income statement, statement of financial position, statement of changes in equity, statement of cash flows, dan notes.",
  },
];

const AKM1_TM4_FLOW_BLOCKS: ContentBlock[] = [
  {
    kind: "h2",
    text: "A0. Peta Belajar TM 4 — Kinerja, Pendapatan, dan Comprehensive Income",
  },
  {
    kind: "p",
    text: "TM 4 menghubungkan laba rugi dengan revenue recognition. Mahasiswa perlu memahami struktur income statement terlebih dahulu, lalu masuk ke kapan dan berapa pendapatan diakui. Tanpa urutan ini, revenue recognition sering terasa seperti rumus terpisah.",
  },
  {
    kind: "table",
    headers: ["Bagian", "Isi teori", "Latihan terkait"],
    rows: [
      [
        "Income statement",
        "Revenue, expense, gains, losses, income from operations",
        "Braun Company.",
      ],
      [
        "Quality of earnings",
        "Transitory items, recurring income, discontinued operations",
        "Klasifikasi item laba rugi.",
      ],
      [
        "OCI",
        "Item yang belum masuk laba rugi tetapi memengaruhi comprehensive income",
        "Gill SpA.",
      ],
      [
        "Revenue recognition",
        "Five-step model IFRS 15",
        "Allocation dan timing recognition.",
      ],
    ],
    caption:
      "Peta TM 4 memisahkan teori penyajian kinerja dan teori pengakuan pendapatan.",
  },
  {
    kind: "h3",
    text: "Teori inti: laba bukan hanya total pendapatan dikurangi beban",
  },
  {
    kind: "p",
    text: "Income statement membantu pengguna menilai profitabilitas, keberlanjutan laba, dan risiko. Karena itu, format multiple-step memisahkan gross profit, income from operations, non-operating items, income tax, discontinued operations, dan net income. Pemisahan ini membuat pengguna bisa membedakan kinerja utama dari item yang tidak berulang.",
  },
  {
    kind: "p",
    text: "Revenue recognition berfokus pada transfer barang atau jasa kepada pelanggan. Pendapatan tidak selalu diakui saat kas diterima. Pendapatan diakui ketika entitas memenuhi performance obligation dan jumlah yang diakui mencerminkan consideration yang diharapkan menjadi hak entitas.",
  },
  {
    kind: "callout",
    variant: "key",
    title: "Five-step model",
    text: "Urutan IFRS 15: identifikasi kontrak, identifikasi performance obligations, tentukan transaction price, alokasikan transaction price, lalu akui revenue ketika obligation dipenuhi.",
  },
  {
    kind: "callout",
    variant: "warning",
    title: "Jebakan UTS TM 4",
    text: "Unusual gain/loss bukan discontinued operation. Discontinued operation membutuhkan pelepasan atau klasifikasi held for sale atas komponen bisnis yang dapat dibedakan dan biasanya disajikan net of tax.",
  },
];

const AKM1_TM5_FLOW_BLOCKS: ContentBlock[] = [
  {
    kind: "h2",
    text: "A0. Peta Belajar TM 5 — Statement of Financial Position",
  },
  {
    kind: "p",
    text: "TM 5 berfokus pada posisi keuangan pada satu tanggal. Kunci utamanya adalah klasifikasi: mana current asset, non-current asset, current liability, non-current liability, dan equity. Klasifikasi ini menentukan likuiditas dan struktur keuangan yang dibaca pengguna.",
  },
  {
    kind: "table",
    headers: ["Area", "Pertanyaan klasifikasi", "Contoh"],
    rows: [
      [
        "Current assets",
        "Akan direalisasi/dikonsumsi dalam operating cycle atau 12 bulan?",
        "Cash, receivables, inventory, prepaid expense.",
      ],
      [
        "Non-current assets",
        "Memberi manfaat lebih dari satu periode?",
        "PPE, intangible assets, long-term investments.",
      ],
      [
        "Current liabilities",
        "Akan diselesaikan dalam operating cycle atau 12 bulan?",
        "Accounts payable, accrued expenses, current maturities.",
      ],
      [
        "Non-current liabilities",
        "Kewajiban jangka panjang?",
        "Bonds payable, long-term notes payable.",
      ],
      [
        "Equity",
        "Hak residual pemilik",
        "Share capital, share premium, retained earnings.",
      ],
    ],
    caption:
      "Peta klasifikasi TM 5 membantu mahasiswa membaca statement of financial position sebelum mengisi angka.",
  },
  { kind: "h3", text: "Teori inti: posisi keuangan dan likuiditas" },
  {
    kind: "p",
    text: "Statement of financial position menyajikan sumber daya yang dikendalikan entitas, kewajiban yang harus diselesaikan, dan hak residual pemilik. Informasi ini dipakai untuk menilai likuiditas, solvabilitas, fleksibilitas keuangan, dan struktur modal.",
  },
  {
    kind: "p",
    text: "Dalam IFRS, current/non-current classification dipakai kecuali penyajian berdasarkan likuiditas lebih relevan. Aset lancar tidak selalu berarti kas; inventory dan receivables juga current jika diharapkan direalisasi dalam operating cycle normal.",
  },
  {
    kind: "callout",
    variant: "warning",
    title: "Jebakan UTS TM 5",
    text: "Jangan mengklasifikasikan semua aset jangka pendek sebagai cash. Cash, receivables, inventory, dan prepaid expenses sama-sama current assets, tetapi sifat dan pengukurannya berbeda.",
  },
];

const AKM1_TM6_FLOW_BLOCKS: ContentBlock[] = [
  { kind: "h2", text: "A0. Peta Belajar TM 6 — Statement of Cash Flows" },
  {
    kind: "p",
    text: "TM 6 menjawab pertanyaan yang tidak selalu terlihat dari income statement: dari mana kas datang dan ke mana kas dipakai. Fokusnya adalah klasifikasi arus kas ke operating, investing, dan financing activities.",
  },
  {
    kind: "table",
    headers: ["Kategori", "Makna ekonomi", "Contoh umum"],
    rows: [
      [
        "Operating activities",
        "Arus kas dari aktivitas utama menghasilkan laba",
        "Cash received from customers, cash paid to suppliers/employees.",
      ],
      [
        "Investing activities",
        "Pembelian/penjualan aset jangka panjang dan investasi",
        "Purchase of equipment, sale of land, collection of loan principal.",
      ],
      [
        "Financing activities",
        "Transaksi dengan pemilik dan kreditor jangka panjang",
        "Issue shares, pay dividends, issue/repay debt principal.",
      ],
      [
        "Non-cash activities",
        "Transaksi signifikan tanpa kas",
        "Acquire equipment by issuing notes.",
      ],
    ],
    caption:
      "Peta TM 6 memisahkan operating, investing, financing, dan transaksi non-kas.",
  },
  { kind: "h3", text: "Teori inti: laba tidak sama dengan kas" },
  {
    kind: "p",
    text: "Income statement disusun dengan accrual basis, sedangkan statement of cash flows menjelaskan perubahan kas. Perusahaan bisa laba tetapi kas operasinya negatif, atau rugi tetapi kasnya meningkat karena pinjaman baru. Karena itu, laporan arus kas membantu menilai kualitas laba dan kemampuan membayar kewajiban.",
  },
  {
    kind: "p",
    text: "Metode tidak langsung dimulai dari net income lalu menyesuaikan item non-kas dan perubahan working capital. Depreciation ditambahkan kembali bukan karena menghasilkan kas, tetapi karena beban tersebut mengurangi laba tanpa mengurangi kas periode berjalan.",
  },
  {
    kind: "callout",
    variant: "warning",
    title: "Jebakan UTS TM 6",
    text: "Pembayaran dividen adalah financing outflow. Pembelian equipment adalah investing outflow. Depreciation expense bukan cash outflow dan tidak dimasukkan sebagai pembayaran kas.",
  },
];

const AKM1_TM7_FLOW_BLOCKS: ContentBlock[] = [
  { kind: "h2", text: "A0. Peta Belajar TM 7 — Time Value of Money" },
  {
    kind: "p",
    text: "TM 7 adalah jembatan ke topik pengukuran AKM berikutnya. Notes receivable, bonds, leases, pensions, dan impairment sering membutuhkan present value. Karena itu, mahasiswa perlu memahami arah waktu, jenis arus kas, dan tingkat bunga yang dipakai.",
  },
  {
    kind: "table",
    headers: ["Konsep", "Pertanyaan kunci", "Rumus/alat"],
    rows: [
      [
        "Future value",
        "Berapa nilai kas sekarang di masa depan?",
        "FV = PV × factor.",
      ],
      [
        "Present value",
        "Berapa nilai sekarang dari kas masa depan?",
        "PV = FV × factor.",
      ],
      [
        "Ordinary annuity",
        "Pembayaran terjadi di akhir periode?",
        "Gunakan ordinary annuity factor.",
      ],
      [
        "Annuity due",
        "Pembayaran terjadi di awal periode?",
        "Gunakan annuity due factor.",
      ],
      [
        "Effective interest",
        "Bunga aktual berdasarkan carrying amount?",
        "Carrying amount × effective rate.",
      ],
    ],
    caption:
      "Peta TM 7 memisahkan arah waktu, jenis cash flow, dan factor yang dipakai.",
  },
  {
    kind: "h3",
    text: "Teori inti: nilai uang berubah karena waktu dan risiko",
  },
  {
    kind: "p",
    text: "Time value of money menyatakan bahwa kas hari ini tidak setara dengan kas masa depan karena kas hari ini dapat diinvestasikan dan menghasilkan return. Dalam akuntansi, konsep ini dipakai untuk mengukur transaksi yang kasnya diterima atau dibayar di masa depan.",
  },
  {
    kind: "p",
    text: "Kesalahan umum adalah memakai future value saat soal meminta present value, atau memakai ordinary annuity factor padahal pembayaran terjadi di awal periode. Selalu gambar timeline sebelum memilih factor.",
  },
  {
    kind: "callout",
    variant: "key",
    title: "Langkah memilih factor TVM",
    text: "Tentukan dulu: satu kas atau anuitas, mau PV atau FV, pembayaran awal atau akhir periode, jumlah periode, dan rate per periode. Setelah itu baru pilih factor.",
  },
  {
    kind: "callout",
    variant: "warning",
    title: "Jebakan UTS TM 7",
    text: "Jika pembayaran terjadi setiap awal periode, itu **annuity due**, bukan ordinary annuity. Jika tingkat bunga tahunan dibagi periode, pastikan rate dan n konsisten dengan frekuensi pembayaran.",
  },
];

const tm1: Reading = {
  tm: 1,
  title: "The Environment and Conceptual Framework of Financial Reporting",
  ref: "Kieso IFRS 5e · Ch. 1",
  intro:
    'Sebelum mencatat satu transaksi pun, akuntan harus paham "aturan main": untuk siapa laporan dibuat, standar apa yang dipakai, dan konsep dasar yang menjadi fondasi seluruh praktik. Inilah inti Chapter 1 Kieso IFRS Fifth Edition — fondasi konseptual sebelum masuk pencatatan dan penyajian.',
  objectives: [
    "Menjelaskan lingkungan pelaporan keuangan, peran IASB/IFRS, dan tantangannya.",
    "Menyebutkan tujuan (objective) pelaporan keuangan bertujuan umum.",
    "Mengidentifikasi karakteristik kualitatif informasi yang berguna.",
    "Mendefinisikan kelima elemen laporan keuangan.",
    "Menjelaskan asumsi dasar, prinsip pengukuran/pengakuan, dan kendala biaya.",
  ],
  blocks: [
    ...AKM1_TM1_FLOW_BLOCKS,
    { kind: "h2", text: "A. Lingkungan Pelaporan Keuangan" },
    {
      kind: "p",
      text: 'Akuntansi keuangan berujung pada **laporan keuangan bertujuan umum** (general-purpose financial statements) bagi pihak eksternal. Karena pengguna tidak bisa "memesan" laporan khusus, dibutuhkan **standar** yang seragam. Standar global adalah **IFRS** yang diterbitkan oleh **IASB**. Di Indonesia dikonvergensi menjadi **SAK** (DSAK-IAI).',
    },
    {
      kind: "ul",
      items: [
        "Empat laporan keuangan utama: **statement of financial position**, **income statement / statement of comprehensive income**, **statement of cash flows**, dan **statement of changes in equity**. **Notes** merupakan bagian integral dari setiap laporan keuangan.",
        "Pengguna utama: **investor**, **pemberi pinjaman**, dan **kreditor lain** yang tidak dapat meminta informasi langsung.",
        "Tantangan: **cost constraint**, tekanan politik pada standard-setting, isu etika pelaporan, serta risiko bias manajemen dalam menyajikan informasi.",
      ],
    },
    {
      kind: "callout",
      variant: "key",
      title: "Decision-usefulness",
      text: "Seluruh kerangka akuntansi berpijak pada satu ide: informasi harus **berguna untuk keputusan ekonomi**. Bila sebuah aturan tidak menambah kegunaan, ia kehilangan alasannya.",
    },

    { kind: "h2", text: "B. Kerangka Konseptual — Tiga Level" },
    {
      kind: "figure",
      title: "Struktur Kerangka Konseptual",
      svg: SVG_FRAMEWORK,
    },

    { kind: "h3", text: "Level 1 — Tujuan" },
    {
      kind: "p",
      text: "Menyediakan informasi keuangan yang **berguna** bagi investor & kreditor saat ini/potensial dalam keputusan menyediakan sumber daya (beli/jual saham, beri/tarik pinjaman).",
    },

    { kind: "h3", text: "Level 2 — Karakteristik Kualitatif" },
    {
      kind: "figure",
      title: "Hierarki Karakteristik Kualitatif",
      svg: SVG_QUALITIES,
    },
    {
      kind: "ul",
      items: [
        "**Relevance** (fundamental): mampu membedakan keputusan — nilai **prediktif**, **konfirmatori**, dibatasi **materialitas**.",
        "**Faithful Representation** (fundamental): **lengkap**, **netral**, **bebas dari kesalahan**.",
        "**Enhancing**: **Comparability** (termasuk konsistensi), **Verifiability**, **Timeliness**, **Understandability**.",
      ],
    },
    { kind: "h3", text: "Elemen Laporan Keuangan" },
    {
      kind: "table",
      headers: ["Elemen", "Definisi ringkas (IFRS)"],
      rows: [
        [
          "Aset",
          "Sumber daya kini yang dikuasai akibat peristiwa masa lalu, berpotensi memberi manfaat ekonomi.",
        ],
        [
          "Liabilitas",
          "Kewajiban kini untuk mengalihkan sumber daya ekonomi akibat peristiwa masa lalu.",
        ],
        ["Ekuitas", "Hak residual atas aset setelah dikurangi liabilitas."],
        [
          "Penghasilan (Income)",
          "Kenaikan aset / penurunan liabilitas yang menaikkan ekuitas, selain setoran pemilik.",
        ],
        [
          "Beban (Expense)",
          "Penurunan aset / kenaikan liabilitas yang menurunkan ekuitas, selain distribusi ke pemilik.",
        ],
      ],
    },

    { kind: "h3", text: "Level 3 — Asumsi, Prinsip & Kendala" },
    {
      kind: "ul",
      items: [
        "**Asumsi:** entitas ekonomi, **kelangsungan usaha**, unit moneter, periodisitas, **dasar akrual**.",
        "**Prinsip pengukuran:** **biaya historis** & **nilai wajar** (fair value).",
        "**Prinsip pengakuan:** pendapatan (saat performance obligation dipenuhi), beban (**matching**), **pengungkapan penuh**.",
        "**Kendala:** **biaya tidak boleh melebihi manfaat** (cost constraint).",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Cara mengingat",
      text: 'Level 1 = "untuk apa", Level 2 = "informasi baik itu seperti apa + terdiri dari apa", Level 3 = "bagaimana mengukur & mengakui".',
    },

    { kind: "h2", text: "C. Dari Kerangka Konseptual ke Keputusan Pelaporan" },
    {
      kind: "p",
      text: "Kerangka konseptual bukan daftar istilah untuk dihafal. Dalam praktik, akuntan memakainya untuk menjawab tiga keputusan berurutan: **apakah** suatu item memenuhi definisi elemen, **berapa** jumlah yang mewakili fenomena secara relevan dan setia, serta **bagaimana** informasi tersebut disajikan atau diungkapkan kepada pengguna utama.",
    },
    {
      kind: "table",
      headers: [
        "Pertanyaan keputusan",
        "Konsep yang dipakai",
        "Konsekuensi pelaporan",
      ],
      rows: [
        [
          "Apakah entitas memiliki sumber daya kini akibat peristiwa masa lalu?",
          "Definisi asset dan control",
          "Item dapat dipertimbangkan sebagai asset apabila memberikan economic resource yang dikendalikan.",
        ],
        [
          "Apakah ada kewajiban kini untuk mentransfer sumber daya?",
          "Definisi liability dan present obligation",
          "Kewajiban diakui atau diungkapkan sesuai kepastian dan measurement information.",
        ],
        [
          "Apakah angka membantu keputusan tanpa bias?",
          "Relevance dan faithful representation",
          "Measurement/presentation harus menghasilkan informasi material, netral, dan cukup lengkap.",
        ],
        [
          "Apakah pengguna memerlukan detail tambahan?",
          "Full disclosure dan understandability",
          "Notes dapat menjelaskan risiko, kebijakan, estimasi, serta ketidakpastian yang tidak cukup terlihat di angka utama.",
        ],
      ],
      caption:
        "Peta reasoning untuk menghubungkan Conceptual Framework dengan pencatatan dan penyajian laporan.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "Urutan berpikir sebelum jurnal",
      text: "Definisikan fenomena dahulu, tentukan recognition dan measurement yang sesuai, lalu pikirkan presentation/disclosure. Jurnal adalah konsekuensi dari analisis, bukan titik awal keputusan pelaporan.",
    },

    {
      kind: "h2",
      text: "D. Praktik Aktif — Klasifikasi dan Reasoning Kerangka Konseptual",
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Identifikasi Konsep Pelaporan Keuangan",
        instruction:
          "Pasangkan setiap situasi dengan konsep yang paling tepat. Latihan ini diturunkan dari struktur Conceptual Framework pada Kieso IFRS Fifth Edition, Chapter 1.",
        choices: [
          "Relevance — Predictive value",
          "Faithful representation — Neutrality",
          "Enhancing quality — Comparability",
          "Asumsi — Periodisitas",
          "Prinsip — Pengakuan pendapatan",
          "Kendala — Cost constraint",
          "Elemen — Liabilitas",
        ],
        pairs: [
          {
            id: "cf-1",
            prompt:
              "Informasi tren pendapatan digunakan investor untuk menilai arus kas masa depan.",
            answer: "Relevance — Predictive value",
          },
          {
            id: "cf-2",
            prompt:
              "Laporan tidak diarahkan untuk menghasilkan angka laba yang menguntungkan kelompok tertentu.",
            answer: "Faithful representation — Neutrality",
          },
          {
            id: "cf-3",
            prompt:
              "Metode dan penyajian memungkinkan pengguna membandingkan dua entitas.",
            answer: "Enhancing quality — Comparability",
          },
          {
            id: "cf-4",
            prompt:
              "Aktivitas perusahaan dibagi menjadi periode pelaporan tahunan.",
            answer: "Asumsi — Periodisitas",
          },
          {
            id: "cf-5",
            prompt:
              "Pendapatan diakui ketika kewajiban pelaksanaan kepada pelanggan telah dipenuhi.",
            answer: "Prinsip — Pengakuan pendapatan",
          },
          {
            id: "cf-6",
            prompt:
              "Informasi tidak ditambahkan apabila biaya penyediaannya melampaui manfaat bagi pengguna.",
            answer: "Kendala — Cost constraint",
          },
          {
            id: "cf-7",
            prompt:
              "Kewajiban kini perusahaan untuk mengalihkan sumber daya ekonomi akibat peristiwa masa lalu.",
            answer: "Elemen — Liabilitas",
          },
        ],
      },
    },
    {
      kind: "solution-reveal",
      title: "Pembahasan reasoning - Conceptual Framework",
      prompt:
        "Buka setelah menyelesaikan klasifikasi konsep untuk melihat alasan di balik setiap keputusan.",
      blocks: [
        {
          kind: "table",
          headers: ["Situasi", "Mengapa konsep itu tepat"],
          rows: [
            [
              "Tren pendapatan untuk memperkirakan arus kas",
              "Informasi mempunyai predictive value sehingga memenuhi relevance.",
            ],
            [
              "Laporan tidak dimanipulasi untuk pihak tertentu",
              "Neutrality merupakan unsur faithful representation.",
            ],
            [
              "Perbandingan dua entitas",
              "Comparability meningkatkan kegunaan informasi setelah relevance dan faithful representation terpenuhi.",
            ],
            [
              "Periode laporan tahunan",
              "Periodicity memungkinkan kinerja dilaporkan secara berkala walaupun entitas terus berjalan.",
            ],
            [
              "Pendapatan saat obligation dipenuhi",
              "Recognition mengikuti transfer barang/jasa yang dijanjikan kepada pelanggan.",
            ],
            [
              "Biaya informasi melebihi manfaat",
              "Cost constraint membatasi keluasan informasi yang disediakan.",
            ],
            [
              "Kewajiban mentransfer sumber daya",
              "Definisi tersebut menunjukkan liability, bukan expense atau equity.",
            ],
          ],
          caption:
            "Pembahasan menautkan klasifikasi konsep dengan keputusan pelaporan, bukan sekadar hafalan istilah.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "info",
      title: "Traceability sumber",
      text: "Peta konsep dan latihan klasifikasi TM 1 mengikuti Learning Objectives serta pembahasan Conceptual Framework pada Kieso, Weygandt, dan Warfield, **Intermediate Accounting: IFRS Edition, Fifth Edition**, Chapter 1.",
    },
  ],
};

const tm2: Reading = {
  tm: 2,
  title: "The Accounting Information System — Bagian 1: Siklus, Jasa vs Dagang",
  ref: "Kieso IFRS 5e · Ch. 2",
  intro:
    "Sistem informasi akuntansi mengubah transaksi menjadi laporan melalui **siklus akuntansi**. Di sini kita kuasai langkah 1–4 sekaligus memahami **perbedaan mendasar siklus perusahaan JASA dan DAGANG** — pondasi sebelum masuk pos-pos kompleks AKM.",
  objectives: [
    "Menerapkan persamaan akuntansi & aturan debit-kredit.",
    "Menjurnal dan memposting transaksi perusahaan jasa dan dagang.",
    "Membedakan akun & alur perusahaan jasa vs dagang.",
    "Menyusun neraca saldo (trial balance).",
  ],
  blocks: [
    ...AKM1_TM2_FLOW_BLOCKS,
    { kind: "h2", text: "A. Persamaan Akuntansi & Aturan Debit–Kredit" },
    {
      kind: "formula",
      text: "Aset = Liabilitas + Ekuitas",
      note: "Diperluas: Ekuitas = Modal Saham + Saldo Laba + Pendapatan − Beban − Dividen.",
    },
    {
      kind: "table",
      headers: ["Jenis Akun", "Bertambah", "Berkurang", "Saldo Normal"],
      rows: [
        ["Aset", "Debit", "Kredit", "Debit"],
        ["Beban", "Debit", "Kredit", "Debit"],
        ["Dividen", "Debit", "Kredit", "Debit"],
        ["Liabilitas", "Kredit", "Debit", "Kredit"],
        ["Ekuitas (Modal)", "Kredit", "Debit", "Kredit"],
        ["Pendapatan", "Kredit", "Debit", "Kredit"],
      ],
      caption:
        "Kunci hafalan: **A-B-D** (Aset, Beban, Dividen) bersaldo normal **Debit**; sisanya Kredit.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: 'Mnemonic "HUMBP" (sering keluar UTS)',
      text: "**H**arta (Assets) ⬆ Debit · **U**tang (Liabilities) ⬆ Kredit · **M**odal (Equity) ⬆ Kredit · pendapatan (re**B**enue) ⬆ Kredit · **P**engeluaran/beban (Expense) ⬆ Debit. Khusus: **Dividen** ⬆ Debit (mirip beban); **Treasury Shares** ⬆ Debit (contra-equity).",
    },

    {
      kind: "interactive-match",
      spec: {
        title: "Saldo Normal Akun",
        instruction:
          "Pilih saldo normal untuk setiap akun sebelum menyusun jurnal transaksi.",
        choices: [
          "Debit — Aset",
          "Debit — Beban",
          "Debit — Dividen",
          "Kredit — Liabilitas",
          "Kredit — Ekuitas",
          "Kredit — Pendapatan",
        ],
        pairs: [
          { id: "normal-cash", prompt: "Cash / Kas", answer: "Debit — Aset" },
          {
            id: "normal-ap",
            prompt: "Accounts Payable / Utang Usaha",
            answer: "Kredit — Liabilitas",
          },
          {
            id: "normal-capital",
            prompt: "Share Capital—Ordinary / Modal Saham",
            answer: "Kredit — Ekuitas",
          },
          {
            id: "normal-revenue",
            prompt: "Service Revenue / Pendapatan Jasa",
            answer: "Kredit — Pendapatan",
          },
          {
            id: "normal-expense",
            prompt: "Rent Expense / Beban Sewa",
            answer: "Debit — Beban",
          },
          {
            id: "normal-dividend",
            prompt: "Dividends / Dividen",
            answer: "Debit — Dividen",
          },
        ],
      },
    },

    {
      kind: "h2",
      text: "B. Siklus Akuntansi (8 Langkah Utama + Reversing Entries Opsional)",
    },
    { kind: "figure", title: "Alur Siklus Akuntansi", svg: SVG_CYCLE },
    {
      kind: "ol",
      items: [
        "Mengidentifikasi dan menganalisis transaksi dari bukti.",
        "Menjurnal transaksi (journalizing).",
        "Memposting ke buku besar (posting).",
        "Menyusun **unadjusted trial balance**.",
        "Membuat dan memposting **adjusting entries**.",
        "Menyusun **adjusted trial balance** sebagai dasar laporan keuangan.",
        "Menyusun laporan keuangan.",
        "Membuat closing entries dan menyusun **post-closing trial balance**.",
      ],
    },
    {
      kind: "callout",
      variant: "info",
      title: "Reversing entries",
      text: "Jurnal pembalik dapat dibuat pada awal periode berikutnya untuk penyesuaian tertentu, tetapi bersifat **opsional** dan bukan langkah wajib siklus utama.",
    },

    { kind: "h2", text: "C. Perusahaan JASA vs DAGANG" },
    { kind: "figure", title: "Mengapa Berbeda?", svg: SVG_MERCH },
    {
      kind: "table",
      headers: ["Aspek", "Perusahaan Jasa", "Perusahaan Dagang"],
      rows: [
        ["Sumber pendapatan", "Pendapatan jasa", "Penjualan barang dagang"],
        [
          "Akun khas",
          "— (tidak ada persediaan)",
          "Persediaan, Pembelian, HPP, Retur",
        ],
        ["Beban pokok", "Tidak ada", "Beban Pokok Penjualan (HPP)"],
        ["Laba kotor", "Tidak dihitung", "Penjualan neto − HPP = Laba kotor"],
        ["Sistem persediaan", "—", "Perpetual atau Periodik"],
      ],
    },
    {
      kind: "callout",
      variant: "info",
      title: "Dampak ke laporan",
      text: "Karena ada HPP, **laporan laba rugi dagang** memakai format **bertahap (multiple-step)** dengan Laba Kotor & Laba Operasi, sedangkan **jasa** cukup format **single-step**. Detailnya di TM 4.",
    },
    {
      kind: "h3",
      text: "Jembatan Kieso — Ciner Cabinets sebagai Perusahaan Dagang",
    },
    {
      kind: "p",
      text: "Setelah contoh perusahaan jasa **Yazici Advertising A.Ş.**, Kieso memperkenalkan **Ciner Cabinets** sebagai perusahaan dagang. Laporan Ciner disusun dari adjusted trial balance dan memperlihatkan ciri inti bisnis dagang: terdapat **Inventory**, **Cost of Goods Sold**, dan subtotal **Gross Profit on Sales**.",
    },
    {
      kind: "table",
      headers: ["Potongan Income Statement Ciner Cabinets", "Jumlah"],
      rows: [
        ["Net sales", "400.000"],
        ["Cost of goods sold", "(316.000)"],
        ["Gross profit on sales", "84.000"],
        ["Income from operations", "16.540"],
        ["Net income", "12.200"],
      ],
      caption:
        "Data bersumber dari Kieso IFRS Fifth Edition, Chapter 2, Illustration 2.44 — Income Statement for a Merchandising Company.",
    },
    {
      kind: "table",
      headers: ["Potongan Current Assets Ciner Cabinets", "Jumlah"],
      rows: [
        ["Inventory", "40.000"],
        ["Cash", "1.200"],
      ],
      caption:
        "Inventory disajikan sebagai current asset dalam classified statement of financial position Ciner Cabinets, Kieso Chapter 2, Illustration 2.46.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Jembatan ke periodic dan perpetual",
      text: "Ciner memperlihatkan **hasil penyajian** perusahaan dagang. Dalam **Illustration 2C.1**, Kieso secara khusus menjelaskan bahwa saldo **Inventory $40.000** berasal dari penerapan **perpetual inventory system**. Mekanismenya diperdalam di TM 10–11 (Kieso Ch. 7): pada **perpetual**, pembelian dicatat ke Inventory dan Cost of Goods Sold dicatat ketika penjualan terjadi; pada **periodic**, pembelian dikumpulkan dalam Purchases dan Cost of Goods Sold ditentukan pada akhir periode setelah persediaan akhir diketahui.",
    },

    {
      kind: "h2",
      text: "D. Menjurnal Transaksi Dasar — Latihan Berbasis Kieso",
    },
    {
      kind: "p",
      text: "Latihan berikut memakai transaksi terpilih dari **Snyder Miniature Golf and Driving Range plc** pada Kieso IFRS Fifth Edition, Chapter 2, Exercise E2.17. Fokusnya adalah menganalisis transaksi sebelum menyusun jurnal umum.",
    },
    {
      kind: "table",
      headers: ["Tanggal", "Transaksi terpilih", "Nilai"],
      rows: [
        [
          "1 Maret",
          "Pemegang saham menginvestasikan kas sebagai pertukaran saham biasa.",
          "£60.000",
        ],
        [
          "3 Maret",
          "Membeli kompleks usaha secara tunai: land £10.000, buildings £22.000, equipment £6.000.",
          "£38.000",
        ],
        [
          "10 Maret",
          "Membeli golf equipment dari Young Company secara kredit.",
          "£2.500",
        ],
        [
          "18 Maret",
          "Menerima kas atas jasa/golf fees yang diberikan.",
          "£1.200",
        ],
        ["25 Maret", "Mendeklarasikan dan membayar dividen tunai.", "£1.000"],
        ["30 Maret", "Melunasi kewajiban kepada Young Company.", "£2.500"],
      ],
      caption:
        "Data diadaptasi dari Kieso IFRS Fifth Edition, Chapter 2, Exercise E2.17 — Snyder Miniature Golf and Driving Range plc.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Cara berpikir sebelum menjurnal",
      text: "Untuk setiap transaksi, tentukan akun yang berubah, klasifikasikan akun tersebut, kemudian putuskan sisi debit dan kredit. Transaksi 3 Maret adalah **compound entry** karena satu kredit kas dialokasikan ke tiga aset.",
    },

    {
      kind: "h2",
      text: "E. Praktik Aktif — Jurnal Umum Snyder Miniature Golf",
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Bagian 1 — Investasi Awal dan Akuisisi Aset (1 & 3 Maret)",
        instruction:
          "Susun jurnal tanggal 1 Maret terlebih dahulu, kemudian jurnal majemuk tanggal 3 Maret. Masukkan 0 pada sisi yang tidak digunakan.",
        currency: "£",
        accountChoices: [
          "Cash",
          "Land",
          "Buildings",
          "Equipment",
          "Accounts Payable",
          "Share Capital—Ordinary",
          "Dividends",
          "Service Revenue",
        ],
        lines: [
          {
            id: "snyder-invest-dr",
            group: "1 Maret — investasi awal",
            account: "Cash",
            debit: 60000,
          },
          {
            id: "snyder-invest-cr",
            account: "Share Capital—Ordinary",
            credit: 60000,
          },
          {
            id: "snyder-property-land-dr",
            group: "3 Maret — akuisisi land, buildings, dan equipment",
            account: "Land",
            debit: 10000,
          },
          {
            id: "snyder-property-building-dr",
            account: "Buildings",
            debit: 22000,
          },
          {
            id: "snyder-property-equipment-dr",
            account: "Equipment",
            debit: 6000,
          },
          { id: "snyder-property-cash-cr", account: "Cash", credit: 38000 },
        ],
      },
    },
    {
      kind: "journal-builder",
      spec: {
        title:
          "Bagian 2 — Peralatan Kredit, Pendapatan, Dividen, dan Pelunasan (10–30 Maret)",
        instruction:
          "Susun jurnal sesuai urutan tanggal: 10 Maret, 18 Maret, 25 Maret, lalu 30 Maret. Masukkan 0 pada sisi yang tidak digunakan.",
        currency: "£",
        accountChoices: [
          "Cash",
          "Land",
          "Buildings",
          "Equipment",
          "Accounts Payable",
          "Share Capital—Ordinary",
          "Dividends",
          "Service Revenue",
        ],
        lines: [
          {
            id: "snyder-equipment-dr",
            group: "10 Maret — equipment dibeli secara kredit",
            account: "Equipment",
            debit: 2500,
          },
          {
            id: "snyder-equipment-ap-cr",
            account: "Accounts Payable",
            credit: 2500,
          },
          {
            id: "snyder-fee-cash-dr",
            group: "18 Maret — penerimaan golf fees",
            account: "Cash",
            debit: 1200,
          },
          {
            id: "snyder-fee-revenue-cr",
            account: "Service Revenue",
            credit: 1200,
          },
          {
            id: "snyder-dividend-dr",
            group: "25 Maret — cash dividend",
            account: "Dividends",
            debit: 1000,
          },
          { id: "snyder-dividend-cash-cr", account: "Cash", credit: 1000 },
          {
            id: "snyder-pay-ap-dr",
            group: "30 Maret — pelunasan payable",
            account: "Accounts Payable",
            debit: 2500,
          },
          { id: "snyder-pay-cash-cr", account: "Cash", credit: 2500 },
        ],
      },
    },
    {
      kind: "callout",
      variant: "info",
      title: "Traceability sumber praktik",
      text: "Latihan jurnal aktif ini menggunakan transaksi yang dapat ditelusuri langsung ke Kieso, Weygandt, dan Warfield, **Intermediate Accounting: IFRS Edition, Fifth Edition**, Chapter 2, Exercise E2.17. Contoh perusahaan dagang tetap akan diperdalam saat materi penyajian laporan dan persediaan dibangun pada TM berikutnya.",
    },
  ],
};

const tm3: Reading = {
  tm: 3,
  title:
    "The Accounting Information System — Bagian 2: Penyesuaian, Worksheet & Penutupan",
  ref: "Kieso IFRS 5e · Ch. 2",
  intro:
    "Agar laporan mencerminkan periode yang tepat (dasar akrual), dibuat **jurnal penyesuaian**, lalu disusun **neraca lajur (worksheet)**, laporan keuangan, dan terakhir akun sementara **ditutup**.",
  objectives: [
    "Membuat jurnal penyesuaian untuk deferral & akrual.",
    "Memahami struktur neraca lajur (worksheet) 10 kolom.",
    "Menyusun jurnal penutup & neraca saldo setelah penutupan.",
  ],
  blocks: [
    ...AKM1_TM3_FLOW_BLOCKS,
    { kind: "h2", text: "A. Empat Jenis Penyesuaian" },
    {
      kind: "table",
      headers: ["Kategori", "Jenis", "Contoh", "Pola Jurnal"],
      rows: [
        [
          "Deferral",
          "Beban dibayar di muka",
          "Asuransi, sewa, perlengkapan, penyusutan",
          "Dr Beban — Cr Aset / Akum. Penyusutan",
        ],
        [
          "Deferral",
          "Pendapatan diterima di muka",
          "Uang muka pelanggan",
          "Dr Pendapatan Diterima di Muka — Cr Pendapatan",
        ],
        [
          "Akrual",
          "Pendapatan masih harus diterima",
          "Jasa selesai belum ditagih",
          "Dr Piutang — Cr Pendapatan",
        ],
        [
          "Akrual",
          "Beban masih harus dibayar",
          "Gaji, bunga terutang",
          "Dr Beban — Cr Utang",
        ],
      ],
    },
    {
      kind: "example",
      title: "Membaca Pola Penyesuaian — Yazici Advertising A.Ş. (Kieso Ch. 2)",
      blocks: [
        {
          kind: "p",
          text: "Contoh baca ini menggunakan data **31 Oktober** pada kasus Yazici Advertising A.Ş. Setiap jurnal menghubungkan akun laba rugi dengan akun posisi keuangan tanpa melibatkan Cash.",
        },
        { kind: "p", text: "**Supplies used** UM15.000:" },
        {
          kind: "journal",
          lines: [
            { account: "Supplies Expense", debit: "15.000" },
            { account: "Supplies", credit: "15.000", isCredit: true },
          ],
        },
        { kind: "p", text: "**Depreciation of office equipment** UM400:" },
        {
          kind: "journal",
          lines: [
            { account: "Depreciation Expense", debit: "400" },
            {
              account: "Accumulated Depreciation—Equipment",
              credit: "400",
              isCredit: true,
            },
          ],
        },
        {
          kind: "p",
          text: "**Unearned service revenue yang telah earned** UM4.000:",
        },
        {
          kind: "journal",
          lines: [
            { account: "Unearned Service Revenue", debit: "4.000" },
            { account: "Service Revenue", credit: "4.000", isCredit: true },
          ],
        },
        { kind: "p", text: "**Accrued service revenue** UM2.000:" },
        {
          kind: "journal",
          lines: [
            { account: "Accounts Receivable", debit: "2.000" },
            { account: "Service Revenue", credit: "2.000", isCredit: true },
          ],
        },
        { kind: "p", text: "**Accrued salaries and wages** UM6.000:" },
        {
          kind: "journal",
          lines: [
            { account: "Salaries and Wages Expense", debit: "6.000" },
            {
              account: "Salaries and Wages Payable",
              credit: "6.000",
              isCredit: true,
            },
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Sumber ilustrasi",
          text: "Angka dan pola jurnal contoh baca berasal dari ilustrasi adjusting entries **Yazici Advertising A.Ş.** pada Kieso IFRS Fifth Edition, Chapter 2. Praktik aktif berikutnya meminta tujuh penyesuaian lengkap, termasuk insurance dan accrued interest.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Aturan emas penyesuaian",
      text: "Setiap jurnal penyesuaian **selalu** menyentuh ≥1 akun laba rugi (pendapatan/beban) dan ≥1 akun neraca (aset/liabilitas), dan **tidak pernah** menyentuh Kas.",
    },

    {
      kind: "h2",
      text: "B. Praktik Aktif — Adjusting Entries (Adaptasi Kieso Chapter 2)",
    },
    {
      kind: "table",
      headers: ["Data Yazici Advertising A.Ş.", "Nilai penyesuaian"],
      rows: [
        [
          "Supplies UM25.000 tersedia; supplies tersisa pada akhir periode UM10.000",
          "Supplies used UM15.000",
        ],
        [
          "Prepaid Insurance UM6.000 untuk 12 bulan; satu bulan telah berakhir",
          "Insurance Expense UM500",
        ],
        [
          "Office equipment disusutkan untuk bulan berjalan",
          "Depreciation Expense UM400",
        ],
        [
          "Unearned Service Revenue UM12.000; jasa yang telah diberikan UM4.000",
          "Revenue earned UM4.000",
        ],
        [
          "Jasa telah dilakukan tetapi belum ditagih",
          "Accrued revenue UM2.000",
        ],
        [
          "Notes payable UM50.000, bunga 12% per tahun, satu bulan terutang",
          "Accrued interest UM500",
        ],
        [
          "Upah tiga hari telah terjadi tetapi belum dibayar",
          "Accrued salaries and wages UM6.000",
        ],
      ],
      caption:
        "Data latihan diadaptasi dari ilustrasi adjusting entries Yazici Advertising A.Ş. pada Kieso IFRS Fifth Edition, Chapter 2.",
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Worksheet Adjusting Entries — Yazici Advertising A.Ş.",
        instruction:
          "Susun jurnal penyesuaian akhir periode berdasarkan data pada tabel. Mata uang ditulis sebagai unit moneter (UM) karena latihan menekankan struktur jurnal dan angka sumber internasional.",
        currency: "UM",
        accountChoices: [
          "Supplies Expense",
          "Supplies",
          "Insurance Expense",
          "Prepaid Insurance",
          "Depreciation Expense",
          "Accumulated Depreciation—Equipment",
          "Unearned Service Revenue",
          "Service Revenue",
          "Accounts Receivable",
          "Interest Expense",
          "Interest Payable",
          "Salaries and Wages Expense",
          "Salaries and Wages Payable",
        ],
        lines: [
          {
            id: "adj-sup-dr",
            group: "Supplies used",
            account: "Supplies Expense",
            debit: 15000,
          },
          { id: "adj-sup-cr", account: "Supplies", credit: 15000 },
          {
            id: "adj-ins-dr",
            group: "Insurance expired",
            account: "Insurance Expense",
            debit: 500,
          },
          { id: "adj-ins-cr", account: "Prepaid Insurance", credit: 500 },
          {
            id: "adj-dep-dr",
            group: "Depreciation office equipment",
            account: "Depreciation Expense",
            debit: 400,
          },
          {
            id: "adj-dep-cr",
            account: "Accumulated Depreciation—Equipment",
            credit: 400,
          },
          {
            id: "adj-unearned-dr",
            group: "Unearned revenue now earned",
            account: "Unearned Service Revenue",
            debit: 4000,
          },
          { id: "adj-unearned-cr", account: "Service Revenue", credit: 4000 },
          {
            id: "adj-ar-dr",
            group: "Accrued service revenue",
            account: "Accounts Receivable",
            debit: 2000,
          },
          { id: "adj-ar-cr", account: "Service Revenue", credit: 2000 },
          {
            id: "adj-int-dr",
            group: "Accrued interest",
            account: "Interest Expense",
            debit: 500,
          },
          { id: "adj-int-cr", account: "Interest Payable", credit: 500 },
          {
            id: "adj-sal-dr",
            group: "Accrued salaries and wages",
            account: "Salaries and Wages Expense",
            debit: 6000,
          },
          {
            id: "adj-sal-cr",
            account: "Salaries and Wages Payable",
            credit: 6000,
          },
        ],
      },
    },

    { kind: "h2", text: "C. Neraca Lajur (Worksheet) 10 Kolom" },
    {
      kind: "p",
      text: "Worksheet adalah kertas kerja (bukan laporan resmi) berisi 5 pasang kolom debit/kredit: **Neraca Saldo → Penyesuaian → NS Disesuaikan → Laba Rugi → Posisi Keuangan**. Membantu menyiapkan laporan & jurnal penutup secara rapi.",
    },

    ...CINER_FULL_CYCLE_CASE.promptBlocks,

    {
      kind: "table-fill",
      spec: {
        title:
          "Worksheet 10 Kolom — Baris Terpilih Ciner Cabinets (Illustration 2C.1)",
        instruction:
          "Lengkapi kolom Adjustments dan lanjutkan saldo yang telah disesuaikan ke kolom Income Statement atau Statement of Financial Position yang tepat. Tabel memakai seluruh lima pasangan kolom worksheet Kieso; hanya baris yang relevan untuk latihan penyesuaian yang ditampilkan.",
        currency: "$",
        headers: [
          "Akun",
          "Trial Balance Dr.",
          "Trial Balance Cr.",
          "Adjustments Dr.",
          "Adjustments Cr.",
          "Adjusted TB Dr.",
          "Adjusted TB Cr.",
          "Income Statement Dr.",
          "Income Statement Cr.",
          "SFP Dr.",
          "SFP Cr.",
        ],
        rows: [
          {
            id: "ws-ins",
            label: "Prepaid Insurance",
            cells: [
              { id: "ws-ins-tbdr", readonly: true, display: "900" },
              { id: "ws-ins-tbcr", readonly: true, display: "—" },
              { id: "ws-ins-adjdr", readonly: true, display: "—" },
              { id: "ws-ins-adjcr", answer: 360 },
              { id: "ws-ins-atbdr", answer: 540 },
              { id: "ws-ins-atbcr", readonly: true, display: "—" },
              { id: "ws-ins-isdr", readonly: true, display: "—" },
              { id: "ws-ins-iscr", readonly: true, display: "—" },
              { id: "ws-ins-sfpdr", answer: 540 },
              { id: "ws-ins-sfpcr", readonly: true, display: "—" },
            ],
          },
          {
            id: "ws-allow",
            label: "Allowance for Doubtful Accounts",
            cells: [
              { id: "ws-allow-tbdr", readonly: true, display: "—" },
              { id: "ws-allow-tbcr", readonly: true, display: "2.000" },
              { id: "ws-allow-adjdr", readonly: true, display: "—" },
              { id: "ws-allow-adjcr", answer: 1000 },
              { id: "ws-allow-atbdr", readonly: true, display: "—" },
              { id: "ws-allow-atbcr", answer: 3000 },
              { id: "ws-allow-isdr", readonly: true, display: "—" },
              { id: "ws-allow-iscr", readonly: true, display: "—" },
              { id: "ws-allow-sfpdr", readonly: true, display: "—" },
              { id: "ws-allow-sfpcr", answer: 3000 },
            ],
          },
          {
            id: "ws-accdep",
            label: "Accumulated Depreciation—Equipment",
            cells: [
              { id: "ws-accdep-tbdr", readonly: true, display: "—" },
              { id: "ws-accdep-tbcr", readonly: true, display: "12.000" },
              { id: "ws-accdep-adjdr", readonly: true, display: "—" },
              { id: "ws-accdep-adjcr", answer: 6700 },
              { id: "ws-accdep-atbdr", readonly: true, display: "—" },
              { id: "ws-accdep-atbcr", answer: 18700 },
              { id: "ws-accdep-isdr", readonly: true, display: "—" },
              { id: "ws-accdep-iscr", readonly: true, display: "—" },
              { id: "ws-accdep-sfpdr", readonly: true, display: "—" },
              { id: "ws-accdep-sfpcr", answer: 18700 },
            ],
          },
          {
            id: "ws-interest-rec",
            label: "Interest Receivable",
            cells: [
              { id: "ws-interest-rec-tbdr", readonly: true, display: "—" },
              { id: "ws-interest-rec-tbcr", readonly: true, display: "—" },
              { id: "ws-interest-rec-adjdr", answer: 800 },
              { id: "ws-interest-rec-adjcr", readonly: true, display: "—" },
              { id: "ws-interest-rec-atbdr", answer: 800 },
              { id: "ws-interest-rec-atbcr", readonly: true, display: "—" },
              { id: "ws-interest-rec-isdr", readonly: true, display: "—" },
              { id: "ws-interest-rec-iscr", readonly: true, display: "—" },
              { id: "ws-interest-rec-sfpdr", answer: 800 },
              { id: "ws-interest-rec-sfpcr", readonly: true, display: "—" },
            ],
          },
          {
            id: "ws-prepaid-rent",
            label: "Prepaid Rent",
            cells: [
              { id: "ws-prepaid-rent-tbdr", readonly: true, display: "—" },
              { id: "ws-prepaid-rent-tbcr", readonly: true, display: "—" },
              { id: "ws-prepaid-rent-adjdr", answer: 500 },
              { id: "ws-prepaid-rent-adjcr", readonly: true, display: "—" },
              { id: "ws-prepaid-rent-atbdr", answer: 500 },
              { id: "ws-prepaid-rent-atbcr", readonly: true, display: "—" },
              { id: "ws-prepaid-rent-isdr", readonly: true, display: "—" },
              { id: "ws-prepaid-rent-iscr", readonly: true, display: "—" },
              { id: "ws-prepaid-rent-sfpdr", answer: 500 },
              { id: "ws-prepaid-rent-sfpcr", readonly: true, display: "—" },
            ],
          },
          {
            id: "ws-tax-payable",
            label: "Property Taxes Payable",
            cells: [
              { id: "ws-tax-payable-tbdr", readonly: true, display: "—" },
              { id: "ws-tax-payable-tbcr", readonly: true, display: "—" },
              { id: "ws-tax-payable-adjdr", readonly: true, display: "—" },
              { id: "ws-tax-payable-adjcr", answer: 2000 },
              { id: "ws-tax-payable-atbdr", readonly: true, display: "—" },
              { id: "ws-tax-payable-atbcr", answer: 2000 },
              { id: "ws-tax-payable-isdr", readonly: true, display: "—" },
              { id: "ws-tax-payable-iscr", readonly: true, display: "—" },
              { id: "ws-tax-payable-sfpdr", readonly: true, display: "—" },
              { id: "ws-tax-payable-sfpcr", answer: 2000 },
            ],
          },
          {
            id: "ws-dep-exp",
            label: "Depreciation Expense",
            cells: [
              { id: "ws-dep-exp-tbdr", readonly: true, display: "—" },
              { id: "ws-dep-exp-tbcr", readonly: true, display: "—" },
              { id: "ws-dep-exp-adjdr", answer: 6700 },
              { id: "ws-dep-exp-adjcr", readonly: true, display: "—" },
              { id: "ws-dep-exp-atbdr", answer: 6700 },
              { id: "ws-dep-exp-atbcr", readonly: true, display: "—" },
              { id: "ws-dep-exp-isdr", answer: 6700 },
              { id: "ws-dep-exp-iscr", readonly: true, display: "—" },
              { id: "ws-dep-exp-sfpdr", readonly: true, display: "—" },
              { id: "ws-dep-exp-sfpcr", readonly: true, display: "—" },
            ],
          },
          {
            id: "ws-bad-debt",
            label: "Bad Debt Expense",
            cells: [
              { id: "ws-bad-debt-tbdr", readonly: true, display: "—" },
              { id: "ws-bad-debt-tbcr", readonly: true, display: "—" },
              { id: "ws-bad-debt-adjdr", answer: 1000 },
              { id: "ws-bad-debt-adjcr", readonly: true, display: "—" },
              { id: "ws-bad-debt-atbdr", answer: 1000 },
              { id: "ws-bad-debt-atbcr", readonly: true, display: "—" },
              { id: "ws-bad-debt-isdr", answer: 1000 },
              { id: "ws-bad-debt-iscr", readonly: true, display: "—" },
              { id: "ws-bad-debt-sfpdr", readonly: true, display: "—" },
              { id: "ws-bad-debt-sfpcr", readonly: true, display: "—" },
            ],
          },
          {
            id: "ws-ins-exp",
            label: "Insurance Expense",
            cells: [
              { id: "ws-ins-exp-tbdr", readonly: true, display: "—" },
              { id: "ws-ins-exp-tbcr", readonly: true, display: "—" },
              { id: "ws-ins-exp-adjdr", answer: 360 },
              { id: "ws-ins-exp-adjcr", readonly: true, display: "—" },
              { id: "ws-ins-exp-atbdr", answer: 360 },
              { id: "ws-ins-exp-atbcr", readonly: true, display: "—" },
              { id: "ws-ins-exp-isdr", answer: 360 },
              { id: "ws-ins-exp-iscr", readonly: true, display: "—" },
              { id: "ws-ins-exp-sfpdr", readonly: true, display: "—" },
              { id: "ws-ins-exp-sfpcr", readonly: true, display: "—" },
            ],
          },
          {
            id: "ws-interest-rev",
            label: "Interest Revenue",
            cells: [
              { id: "ws-interest-rev-tbdr", readonly: true, display: "—" },
              { id: "ws-interest-rev-tbcr", readonly: true, display: "—" },
              { id: "ws-interest-rev-adjdr", readonly: true, display: "—" },
              { id: "ws-interest-rev-adjcr", answer: 800 },
              { id: "ws-interest-rev-atbdr", readonly: true, display: "—" },
              { id: "ws-interest-rev-atbcr", answer: 800 },
              { id: "ws-interest-rev-isdr", readonly: true, display: "—" },
              { id: "ws-interest-rev-iscr", answer: 800 },
              { id: "ws-interest-rev-sfpdr", readonly: true, display: "—" },
              { id: "ws-interest-rev-sfpcr", readonly: true, display: "—" },
            ],
          },
          {
            id: "ws-tax-exp",
            label: "Property Tax Expense",
            cells: [
              { id: "ws-tax-exp-tbdr", readonly: true, display: "3.300" },
              { id: "ws-tax-exp-tbcr", readonly: true, display: "—" },
              { id: "ws-tax-exp-adjdr", answer: 2000 },
              { id: "ws-tax-exp-adjcr", readonly: true, display: "—" },
              { id: "ws-tax-exp-atbdr", answer: 5300 },
              { id: "ws-tax-exp-atbcr", readonly: true, display: "—" },
              { id: "ws-tax-exp-isdr", answer: 5300 },
              { id: "ws-tax-exp-iscr", readonly: true, display: "—" },
              { id: "ws-tax-exp-sfpdr", readonly: true, display: "—" },
              { id: "ws-tax-exp-sfpcr", readonly: true, display: "—" },
            ],
          },
        ],
      },
    },
    {
      kind: "table-fill",
      spec: {
        title: "Checkpoint Full Accounting Cycle — Ciner Cabinets",
        instruction:
          "Setelah menyelesaikan selected-row worksheet, hitung checkpoint hasil siklus dari unadjusted trial balance dan tujuh adjustment facts yang telah diberikan.",
        currency: "$",
        headers: ["Output siklus yang diuji", "Jawaban Anda"],
        rows: [
          {
            id: "ciner-cycle-adjustments",
            label: "Total adjustments - debit/credit",
            cells: [{ id: "ciner-cycle-adjustments-value", answer: 14800 }],
          },
          {
            id: "ciner-cycle-atb",
            label: "Adjusted trial balance - debit/credit",
            cells: [{ id: "ciner-cycle-atb-value", answer: 557640 }],
          },
          {
            id: "ciner-cycle-ni",
            label: "Net income",
            cells: [{ id: "ciner-cycle-ni-value", answer: 12200 }],
          },
          {
            id: "ciner-cycle-re",
            label: "Retained earnings, December 31, 2025",
            cells: [{ id: "ciner-cycle-re-value", answer: 26400 }],
          },
          {
            id: "ciner-cycle-assets",
            label: "Total assets",
            cells: [{ id: "ciner-cycle-assets-value", answer: 145340 }],
          },
          {
            id: "ciner-cycle-el",
            label: "Total equity and liabilities",
            cells: [{ id: "ciner-cycle-el-value", answer: 145340 }],
          },
        ],
      },
    },
    CINER_FULL_CYCLE_CASE.explanationBlock,
    {
      kind: "callout",
      variant: "info",
      title: "Catatan format dan sumber",
      text: "Worksheet adalah alat kerja informal, bukan laporan keuangan formal. Format latihan menampilkan **lima pasangan kolom** sesuai Kieso Appendix 2C, Illustration 2C.1: Trial Balance, Adjustments, Adjusted Trial Balance, Income Statement, dan Statement of Financial Position. Baris dipilih untuk memusatkan latihan pada proses penyesuaian dan penggolongan saldo.",
    },

    { kind: "h2", text: "D. Jurnal Penutup" },
    {
      kind: "ol",
      items: [
        "Tutup **pendapatan**: Dr Pendapatan — Cr Ikhtisar Laba Rugi.",
        "Tutup **beban**: Dr Ikhtisar Laba Rugi — Cr tiap Beban.",
        "Tutup **Ikhtisar Laba Rugi** ke Saldo Laba (laba/rugi neto).",
        "Tutup **Dividen**: Dr Saldo Laba — Cr Dividen.",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Riil vs nominal",
      text: "Akun **riil** (aset, liabilitas, ekuitas) terbawa ke periode berikutnya. Akun **nominal** (pendapatan, beban, dividen) ditutup tiap akhir periode agar mulai dari nol.",
    },

    {
      kind: "journal-builder",
      spec: {
        title:
          "Closing Entries — Yazici Advertising A.Ş. (Adaptasi Kieso Illustration 2.41)",
        instruction:
          "Susun empat kelompok closing entries: tutup revenue, tutup seluruh expenses, pindahkan laba neto ke retained earnings, lalu tutup dividends. Isi 0 pada sisi yang tidak digunakan.",
        currency: "UM",
        accountChoices: [
          "Service Revenue",
          "Income Summary",
          "Supplies Expense",
          "Depreciation Expense",
          "Insurance Expense",
          "Salaries and Wages Expense",
          "Rent Expense",
          "Interest Expense",
          "Bad Debt Expense",
          "Retained Earnings",
          "Dividends",
        ],
        lines: [
          {
            id: "close-rev-dr",
            group: "Close revenue to Income Summary",
            account: "Service Revenue",
            debit: 106000,
          },
          { id: "close-rev-cr", account: "Income Summary", credit: 106000 },
          {
            id: "close-exp-dr",
            group: "Close expenses to Income Summary",
            account: "Income Summary",
            debit: 73000,
          },
          { id: "close-sup-cr", account: "Supplies Expense", credit: 15000 },
          { id: "close-dep-cr", account: "Depreciation Expense", credit: 400 },
          { id: "close-ins-cr", account: "Insurance Expense", credit: 500 },
          {
            id: "close-sal-cr",
            account: "Salaries and Wages Expense",
            credit: 46000,
          },
          { id: "close-rent-cr", account: "Rent Expense", credit: 9000 },
          { id: "close-int-cr", account: "Interest Expense", credit: 500 },
          { id: "close-bad-cr", account: "Bad Debt Expense", credit: 1600 },
          {
            id: "close-ni-dr",
            group: "Transfer net income to Retained Earnings",
            account: "Income Summary",
            debit: 33000,
          },
          { id: "close-ni-cr", account: "Retained Earnings", credit: 33000 },
          {
            id: "close-div-dr",
            group: "Close dividends to Retained Earnings",
            account: "Retained Earnings",
            debit: 5000,
          },
          { id: "close-div-cr", account: "Dividends", credit: 5000 },
        ],
      },
    },
    {
      kind: "callout",
      variant: "info",
      title: "Post-closing trial balance & istilah cepat",
      text: "**Post-closing trial balance** HANYA berisi akun **riil/permanen**. **Accrued** = sudah terjadi tapi uang belum diterima/dibayar. **Prepaid/Unearned** = uang sudah berpindah tapi jasa/manfaat belum diberikan.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Jebakan soal yang sering salah",
      text: "**Akumulasi Penyusutan** = akun **RIIL** (contra-asset), BUKAN nominal — tetap muncul di post-closing TB. Jika penyesuaian penyusutan **terlupa** → aset **overstated** dan ekuitas **overstated** (bukan liabilitas).",
    },
  ],
};

const tm4: Reading = {
  tm: 4,
  title: "Income Statement, Related Information, and Revenue Recognition",
  ref: "Kieso IFRS 5e · Ch. 3",
  intro:
    "Laporan laba rugi mengukur kinerja periode berjalan dan menghubungkannya dengan penyajian laba komprehensif, perubahan ekuitas, serta pengakuan pendapatan. Materi praktik TM 4 menggunakan kasus **Braun Company** dan **Gill SpA** dari Kieso Chapter 3.",
  objectives: [
    "Menyusun income statement dengan gross profit, income from operations, discontinued operations, dan EPS.",
    "Menghubungkan net income dengan other comprehensive income dan comprehensive income.",
    "Membedakan perubahan prinsip, perubahan estimasi, dan koreksi kesalahan.",
    "Menerapkan model lima langkah pengakuan pendapatan.",
  ],
  blocks: [
    ...AKM1_TM4_FLOW_BLOCKS,
    { kind: "h2", text: "A. Struktur Income Statement dalam IFRS" },
    {
      kind: "p",
      text: "Kieso menekankan subtotal yang informatif: **gross profit**, **income from operations**, **income before income tax**, dan **net income**. Jika ada discontinued operations, hasilnya disajikan terpisah setelah income from continuing operations, net of tax. **Earnings per share (EPS)** disajikan pada wajah laporan laba rugi.",
    },
    {
      kind: "table",
      headers: ["Komponen", "Makna penyajian"],
      rows: [
        ["Gross profit", "Sales revenue dikurangi cost of goods sold."],
        [
          "Income from operations",
          "Kinerja setelah beban operasi dan item operasi/related yang disajikan dalam laporan.",
        ],
        [
          "Income from continuing operations",
          "Hasil operasi berlanjut setelah income tax.",
        ],
        [
          "Discontinued operations",
          "Komponen yang dihentikan, disajikan terpisah net of tax.",
        ],
        ["Net income dan EPS", "Laba akhir serta laba per ordinary share."],
      ],
      caption:
        "Ringkasan struktur Chapter 3 sebelum mengerjakan kasus Braun Company.",
    },

    { kind: "h2", text: "B. Praktik Income Statement — Braun Company" },
    {
      kind: "table",
      headers: ["Data sumber Kieso Practice Problem", "Jumlah"],
      rows: [
        ["Sales revenue", "$2.700.000"],
        ["Cost of goods sold", "$1.150.000"],
        ["Selling and administrative expenses", "$480.000"],
        ["Interest revenue", "$15.000"],
        ["Gain from extinguishment of debt", "$28.000"],
        ["Loss from abandonment of plant assets", "($45.000)"],
        ["Loss from earthquake", "($30.000)"],
        [
          "Effect of change in estimated useful lives of fixed assets",
          "$35.000 — data kasus; bukan pos terpisah dalam income statement",
        ],
        ["Gain on disposal of discontinued operation", "$50.000"],
        ["Tax rate / ordinary shares outstanding", "30% / 100.000 saham"],
      ],
      caption: "Kieso IFRS 5e, Chapter 3, Practice Problem — Braun Company.",
    },
    {
      kind: "callout",
      variant: "info",
      title: "Mengapa perubahan estimasi $35.000 tidak menjadi baris laporan?",
      text: "Practice Problem Braun memuat **effect of change in estimated useful lives of fixed assets sebesar $35.000**. Sesuai perlakuan perubahan estimasi, dampaknya ditangani **secara prospektif** dan tidak disajikan sebagai pos terpisah pada income statement Braun dalam solusi Kieso.",
    },
    {
      kind: "builder",
      instructions:
        "Susun income statement Braun. Masukkan angka yang diminta; subtotal dihitung otomatis. Seluruh data berasal dari Practice Problem Chapter 3.",
      spec: {
        entity: "Braun Company",
        title: "Income Statement",
        period: "For the Year Ended December 31, 2025",
        currency: "$",
        lines: [
          {
            id: "br-sales",
            kind: "given",
            label: "Sales revenue",
            amount: 2700000,
          },
          {
            id: "br-cogs",
            kind: "input",
            label: "Cost of goods sold",
            amount: 1150000,
            bracket: true,
          },
          {
            id: "br-gp",
            kind: "computed",
            label: "Gross profit",
            amount: 1550000,
            rule: "top",
            bold: true,
            compute: [{ id: "br-sales" }, { id: "br-cogs", sign: -1 }],
          },
          {
            id: "br-sga",
            kind: "input",
            label: "Selling and administrative expenses",
            amount: 480000,
            bracket: true,
          },
          {
            id: "br-before-other",
            kind: "computed",
            label: "Income before other income and expense",
            amount: 1070000,
            rule: "top",
            compute: [{ id: "br-gp" }, { id: "br-sga", sign: -1 }],
          },
          { kind: "header", label: "Other income and expense" },
          {
            id: "br-intrev",
            kind: "input",
            label: "Interest revenue",
            amount: 15000,
            indent: 1,
          },
          {
            id: "br-gain-debt",
            kind: "input",
            label: "Gain on debt extinguishment",
            amount: 28000,
            indent: 1,
          },
          {
            id: "br-loss-plant",
            kind: "input",
            label: "Loss from plant abandonment",
            amount: 45000,
            bracket: true,
            indent: 1,
          },
          {
            id: "br-loss-earth",
            kind: "input",
            label: "Loss from earthquake",
            amount: 30000,
            bracket: true,
            indent: 1,
          },
          {
            id: "br-op",
            kind: "computed",
            label: "Income from operations",
            amount: 1038000,
            rule: "top",
            bold: true,
            compute: [
              { id: "br-before-other" },
              { id: "br-intrev" },
              { id: "br-gain-debt" },
              { id: "br-loss-plant", sign: -1 },
              { id: "br-loss-earth", sign: -1 },
            ],
          },
          {
            id: "br-tax",
            kind: "input",
            label: "Income tax (30%)",
            amount: 311400,
            bracket: true,
          },
          {
            id: "br-cont",
            kind: "computed",
            label: "Income from continuing operations",
            amount: 726600,
            rule: "top",
            bold: true,
            compute: [{ id: "br-op" }, { id: "br-tax", sign: -1 }],
          },
          { kind: "header", label: "Discontinued operations" },
          {
            id: "br-disc-gain",
            kind: "input",
            label: "Gain on disposal of discontinued operation",
            amount: 50000,
            indent: 1,
          },
          {
            id: "br-disc-tax",
            kind: "input",
            label: "Applicable income tax",
            amount: 15000,
            bracket: true,
            indent: 1,
          },
          {
            id: "br-disc-net",
            kind: "computed",
            label: "Gain on discontinued operation, net of tax",
            amount: 35000,
            rule: "top",
            compute: [{ id: "br-disc-gain" }, { id: "br-disc-tax", sign: -1 }],
          },
          {
            id: "br-ni",
            kind: "computed",
            label: "Net income",
            amount: 761600,
            rule: "double",
            bold: true,
            compute: [{ id: "br-cont" }, { id: "br-disc-net" }],
          },
          {
            id: "br-eps-cont",
            kind: "input",
            label: "EPS — income from continuing operations",
            amount: 7.27,
            indent: 1,
          },
          {
            id: "br-eps-disc",
            kind: "input",
            label: "EPS — discontinued operations",
            amount: 0.35,
            indent: 1,
          },
          {
            id: "br-eps-net",
            kind: "input",
            label: "EPS — net income",
            amount: 7.62,
            indent: 1,
            rule: "double",
          },
        ],
      },
    },

    {
      kind: "h2",
      text: "C. Other Comprehensive Income dan Comprehensive Income",
    },
    {
      kind: "p",
      text: "Other comprehensive income (OCI) memuat perubahan ekuitas non-owner tertentu yang tidak masuk net income. Kieso menyajikan dua opsi: satu statement of comprehensive income atau dua laporan berurutan. Contoh **Gill SpA** memperlihatkan OCI berupa unrealized holding gain pada non-trading equity securities.",
    },
    {
      kind: "statement",
      spec: {
        entity: "Gill SpA",
        title: "Statement of Comprehensive Income",
        period: "For the Year Ended December 31, 2025",
        currency: "€",
        lines: [
          { label: "Sales revenue", amount: 800000 },
          { label: "Cost of goods sold", amount: 600000, bracket: true },
          { label: "Gross profit", amount: 200000, rule: "top", bold: true },
          { label: "Operating expenses", amount: 90000, bracket: true },
          { label: "Net income", amount: 110000, rule: "top", bold: true },
          { kind: "header", label: "Other comprehensive income" },
          {
            label:
              "Unrealized holding gain on non-trading equity securities, net of tax",
            amount: 30000,
            indent: 1,
          },
          {
            label: "Comprehensive income",
            amount: 140000,
            rule: "double",
            bold: true,
          },
        ],
      },
    },
    {
      kind: "builder",
      instructions:
        "Braun memiliki net income $761.600 dan unrealized holding loss pada non-trading equity securities sebesar $12.000, net of tax. Lengkapi comprehensive income.",
      spec: {
        entity: "Braun Company",
        title: "Comprehensive Income Computation",
        period: "For the Year Ended December 31, 2025",
        currency: "$",
        lines: [
          {
            id: "br-ci-ni",
            kind: "given",
            label: "Net income",
            amount: 761600,
          },
          {
            id: "br-ci-oci",
            kind: "input",
            label:
              "Unrealized holding loss on non-trading equity securities, net of tax",
            amount: 12000,
            bracket: true,
          },
          {
            id: "br-ci-total",
            kind: "computed",
            label: "Comprehensive income",
            amount: 749600,
            rule: "double",
            bold: true,
            compute: [{ id: "br-ci-ni" }, { id: "br-ci-oci", sign: -1 }],
          },
        ],
      },
    },

    { kind: "h2", text: "D. Accounting Changes, Estimates, and Errors" },
    {
      kind: "table",
      headers: ["Jenis", "Perlakuan yang ditekankan Kieso"],
      rows: [
        [
          "Change in accounting principle",
          "Penyesuaian melalui retained earnings, umumnya retrospektif.",
        ],
        [
          "Correction of error",
          "Penyesuaian melalui retained earnings untuk periode sebelumnya.",
        ],
        [
          "Change in estimate",
          "Prospektif: dampak dicatat pada periode perubahan dan periode mendatang.",
        ],
      ],
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Klasifikasi Pelaporan Chapter 3",
        instruction:
          "Tentukan penyajian atau perlakuan yang tepat untuk setiap item.",
        choices: [
          "Income from continuing operations",
          "Discontinued operations, net of tax",
          "Other comprehensive income",
          "Retained earnings adjustment",
          "Prospective income effect",
          "EPS on face of income statement",
        ],
        pairs: [
          {
            id: "tm4-map-1",
            prompt: "Gain on disposal of a discontinued component",
            answer: "Discontinued operations, net of tax",
          },
          {
            id: "tm4-map-2",
            prompt:
              "Unrealized holding gain/loss on non-trading equity securities",
            answer: "Other comprehensive income",
          },
          {
            id: "tm4-map-3",
            prompt: "Correction of a material prior-period error",
            answer: "Retained earnings adjustment",
          },
          {
            id: "tm4-map-4",
            prompt: "Change in estimated useful life of fixed assets",
            answer: "Prospective income effect",
          },
          {
            id: "tm4-map-5",
            prompt: "Per ordinary share disclosure of net income",
            answer: "EPS on face of income statement",
          },
        ],
      },
    },

    { kind: "h2", text: "E. Revenue Recognition — Lima Langkah" },
    {
      kind: "figure",
      title: "Lima Langkah Pengakuan Pendapatan",
      svg: SVG_REV5,
    },
    {
      kind: "ol",
      items: [
        "Identifikasi **kontrak** dengan pelanggan.",
        "Identifikasi **performance obligations** yang terpisah.",
        "Tentukan **transaction price**.",
        "Alokasikan harga transaksi kepada kewajiban pelaksanaan.",
        "Akui pendapatan saat atau sepanjang kewajiban pelaksanaan dipenuhi.",
      ],
    },
    {
      kind: "callout",
      variant: "key",
      title: "Kunci praktik revenue recognition",
      text: "Jangan langsung mengakui seluruh harga kontrak ketika kontrak memuat beberapa kewajiban pelaksanaan. Pertama pisahkan performance obligations, baru tentukan timing pengakuan setiap bagian.",
    },

    {
      kind: "h2",
      text: "F. Praktik Numerik Revenue Recognition — Allocation dan Timing",
    },
    {
      kind: "p",
      text: "Dua contoh Kieso berikut menutup gap antara lima langkah konseptual dan pengisian angka. **Skipper Marine** menguji Step 4 (allocation), sedangkan **Amazon** menguji Step 5 (recognition at a point in time vs over time).",
    },

    { kind: "h3", text: "Case 1 — Skipper Marine: Allocate Transaction Price" },
    ...SKIPPER_REVENUE_ALLOCATION_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Allocation Worksheet — Skipper Marine",
        instruction:
          "Alokasikan bundled transaction price berdasarkan relative standalone selling prices. Isikan allocated revenue untuk tiap performance obligation.",
        currency: "$",
        headers: ["Performance obligation", "Allocated transaction price"],
        rows: [
          {
            id: "skipper-boat",
            label: "Boat",
            cells: [{ id: "skipper-boat-value", answer: 27857 }],
          },
          {
            id: "skipper-mooring",
            label: "Mooring services - one year",
            cells: [{ id: "skipper-mooring-value", answer: 4643 }],
          },
          {
            id: "skipper-total",
            label: "Total allocated transaction price",
            cells: [{ id: "skipper-total-value", answer: 32500 }],
          },
        ],
      },
    },
    SKIPPER_REVENUE_ALLOCATION_CASE.explanationBlock,

    {
      kind: "h3",
      text: "Case 2 — Amazon: Recognize Product and Extended Warranty Revenue",
    },
    ...AMAZON_WARRANTY_REVENUE_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title:
          "Revenue Timing Worksheet — Amazon Fitness Tracker and Extended Warranty",
        instruction:
          "Isikan revenue yang diakui pada masing-masing tahun. Isi 0 apabila performance obligation belum atau tidak lagi menghasilkan revenue pada tahun tersebut.",
        currency: "$",
        headers: ["Revenue item", "2025", "2026", "2027"],
        rows: [
          {
            id: "amazon-tracker-rev",
            label: "Fitness tracker revenue",
            cells: [
              { id: "amazon-tracker-2025", answer: 3600 },
              { id: "amazon-tracker-2026", answer: 0 },
              { id: "amazon-tracker-2027", answer: 0 },
            ],
          },
          {
            id: "amazon-warranty-rev",
            label: "Extended warranty revenue",
            cells: [
              { id: "amazon-warranty-2025", answer: 0 },
              { id: "amazon-warranty-2026", answer: 240 },
              { id: "amazon-warranty-2027", answer: 240 },
            ],
          },
        ],
      },
    },
    AMAZON_WARRANTY_REVENUE_CASE.explanationBlock,
  ],
};

const tm5: Reading = {
  tm: 5,
  title: "Statement of Financial Position",
  ref: "Kieso IFRS 5e · Ch. 4",
  intro:
    "Statement of financial position menyajikan aset, liabilitas, dan ekuitas pada satu tanggal. Praktik TM 5 menggunakan **Cassy Corporation** dari Kieso Chapter 4 agar klasifikasi dan angka laporan dapat ditelusuri langsung ke sumber utama.",
  objectives: [
    "Mengklasifikasikan pos dalam statement of financial position.",
    "Menyusun statement of financial position berdasarkan perubahan saldo aset, ekuitas, dan liabilitas.",
    "Menjelaskan peran liquidity, solvency, dan financial flexibility dalam pembacaan laporan.",
  ],
  blocks: [
    ...AKM1_TM5_FLOW_BLOCKS,
    { kind: "h2", text: "A. Klasifikasi Statement of Financial Position" },
    {
      kind: "table",
      headers: ["Klasifikasi", "Contoh pos"],
      rows: [
        [
          "Long-term investments",
          "Investment in shares yang dimaksudkan untuk jangka panjang.",
        ],
        [
          "Property, plant, and equipment",
          "Land, buildings, equipment dikurangi accumulated depreciation.",
        ],
        ["Intangible assets", "Patents setelah amortization."],
        [
          "Current assets",
          "Aset yang direalisasi/digunakan dalam operating cycle atau jangka pendek.",
        ],
        [
          "Equity",
          "Share capital, retained earnings, dikurangi cost of treasury shares.",
        ],
        ["Non-current liabilities", "Bonds payable jangka panjang."],
        [
          "Current liabilities",
          "Kewajiban yang jatuh tempo dalam operating cycle atau jangka pendek.",
        ],
      ],
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Klasifikasi Pos Cassy Corporation",
        instruction:
          "Tempatkan pos berikut ke klasifikasi statement of financial position yang tepat.",
        choices: [
          "Long-term investments",
          "Property, plant, and equipment",
          "Intangible assets",
          "Current assets",
          "Equity deduction",
          "Non-current liabilities",
          "Current liabilities",
        ],
        pairs: [
          {
            id: "tm5-class-1",
            prompt: "Investment in shares purchased for long-term holding",
            answer: "Long-term investments",
          },
          {
            id: "tm5-class-2",
            prompt: "Patents net of amortization",
            answer: "Intangible assets",
          },
          {
            id: "tm5-class-3",
            prompt: "Cost of treasury shares",
            answer: "Equity deduction",
          },
          {
            id: "tm5-class-4",
            prompt: "Bonds payable issued as long-term financing",
            answer: "Non-current liabilities",
          },
          {
            id: "tm5-class-5",
            prompt: "Buildings less accumulated depreciation",
            answer: "Property, plant, and equipment",
          },
        ],
      },
    },

    { kind: "h2", text: "B. Practice Case — Cassy Corporation" },
    ...CASSY_SFP_CASE.promptBlocks,
    {
      kind: "builder",
      instructions:
        "Isi angka laporan posisi keuangan Cassy pada 31 Desember 2025. Current assets merupakan plug figure sebagaimana dijelaskan dalam solusi Kieso.",
      spec: {
        entity: "Cassy Corporation",
        title: "Statement of Financial Position",
        period: "December 31, 2025",
        currency: "$",
        lines: [
          { kind: "header", label: "Assets" },
          {
            id: "ca-invest",
            kind: "input",
            label: "Long-term investments",
            amount: 19200,
          },
          { kind: "header", label: "Property, plant, and equipment" },
          {
            id: "ca-land",
            kind: "given",
            label: "Land",
            amount: 36000,
            indent: 1,
          },
          {
            id: "ca-build",
            kind: "input",
            label: "Buildings",
            amount: 176400,
            indent: 1,
          },
          {
            id: "ca-build-ad",
            kind: "input",
            label: "Accumulated depreciation—buildings",
            amount: 40800,
            indent: 1,
            bracket: true,
          },
          {
            id: "ca-build-net",
            kind: "computed",
            label: "Net buildings",
            amount: 135600,
            indent: 1,
            rule: "top",
            compute: [{ id: "ca-build" }, { id: "ca-build-ad", sign: -1 }],
          },
          {
            id: "ca-equip",
            kind: "input",
            label: "Equipment",
            amount: 84000,
            indent: 1,
          },
          {
            id: "ca-equip-ad",
            kind: "input",
            label: "Accumulated depreciation—equipment",
            amount: 14400,
            indent: 1,
            bracket: true,
          },
          {
            id: "ca-equip-net",
            kind: "computed",
            label: "Net equipment",
            amount: 69600,
            indent: 1,
            rule: "top",
            compute: [{ id: "ca-equip" }, { id: "ca-equip-ad", sign: -1 }],
          },
          {
            id: "ca-ppe",
            kind: "computed",
            label: "Total property, plant, and equipment",
            amount: 241200,
            rule: "top",
            bold: true,
            compute: [
              { id: "ca-land" },
              { id: "ca-build-net" },
              { id: "ca-equip-net" },
            ],
          },
          {
            id: "ca-patent",
            kind: "input",
            label: "Intangible assets—patents",
            amount: 45000,
          },
          {
            id: "ca-current-assets",
            kind: "input",
            label: "Current assets",
            amount: 355800,
          },
          {
            id: "ca-total-assets",
            kind: "computed",
            label: "Total assets",
            amount: 661200,
            rule: "double",
            bold: true,
            compute: [
              { id: "ca-invest" },
              { id: "ca-ppe" },
              { id: "ca-patent" },
              { id: "ca-current-assets" },
            ],
          },
          { kind: "header", label: "Equity and Liabilities" },
          {
            id: "ca-share",
            kind: "given",
            label: "Share capital—ordinary",
            amount: 216000,
            indent: 1,
          },
          {
            id: "ca-re",
            kind: "input",
            label: "Retained earnings",
            amount: 82800,
            indent: 1,
          },
          {
            id: "ca-equity-before-ts",
            kind: "computed",
            label: "Equity before treasury shares",
            amount: 298800,
            rule: "top",
            compute: [{ id: "ca-share" }, { id: "ca-re" }],
          },
          {
            id: "ca-ts",
            kind: "input",
            label: "Less: Cost of treasury shares",
            amount: 13200,
            bracket: true,
          },
          {
            id: "ca-equity",
            kind: "computed",
            label: "Total equity",
            amount: 285600,
            rule: "top",
            bold: true,
            compute: [{ id: "ca-equity-before-ts" }, { id: "ca-ts", sign: -1 }],
          },
          {
            id: "ca-bonds",
            kind: "input",
            label: "Non-current liabilities — Bonds payable",
            amount: 180000,
          },
          {
            id: "ca-current-liab",
            kind: "input",
            label: "Current liabilities",
            amount: 195600,
          },
          {
            id: "ca-liab",
            kind: "computed",
            label: "Total liabilities",
            amount: 375600,
            rule: "top",
            compute: [{ id: "ca-bonds" }, { id: "ca-current-liab" }],
          },
          {
            id: "ca-total-el",
            kind: "computed",
            label: "Total equity and liabilities",
            amount: 661200,
            rule: "double",
            bold: true,
            compute: [{ id: "ca-equity" }, { id: "ca-liab" }],
          },
        ],
      },
    },
    CASSY_SFP_CASE.explanationBlock,
  ],
};

const tm6: Reading = {
  tm: 6,
  title: "Statement of Cash Flows",
  ref: "Kieso IFRS 5e · Ch. 4",
  intro:
    "Statement of cash flows mengklasifikasikan perubahan kas menjadi operating, investing, dan financing activities. Praktik TM 6 melanjutkan **Cassy Corporation** sehingga laporan posisi keuangan dan arus kas saling terhubung.",
  objectives: [
    "Mengklasifikasikan transaksi sebagai operating, investing, atau financing activity.",
    "Menyusun statement of cash flows metode tidak langsung.",
    "Menghubungkan cash flows dengan perubahan akun pada statement of financial position.",
  ],
  blocks: [
    ...AKM1_TM6_FLOW_BLOCKS,
    { kind: "h2", text: "A. Tiga Kelompok Arus Kas" },
    {
      kind: "table",
      headers: ["Aktivitas", "Fokus"],
      rows: [
        [
          "Operating activities",
          "Aktivitas penghasil utama pendapatan; indirect method dimulai dari net income.",
        ],
        [
          "Investing activities",
          "Perolehan dan pelepasan long-term assets serta investasi.",
        ],
        [
          "Financing activities",
          "Perubahan ekuitas dan pinjaman jangka panjang, termasuk dividends dan treasury shares.",
        ],
      ],
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Klasifikasi Arus Kas — Transaksi Cassy Corporation",
        instruction:
          "Klasifikasikan setiap transaksi Cassy dalam statement of cash flows.",
        choices: [
          "Operating activity",
          "Investing activity",
          "Financing activity",
        ],
        pairs: [
          {
            id: "cf-class-1",
            prompt: "Net income disesuaikan dalam indirect method",
            answer: "Operating activity",
          },
          {
            id: "cf-class-2",
            prompt: "Sale of equipment for $12.000",
            answer: "Investing activity",
          },
          {
            id: "cf-class-3",
            prompt: "Addition to building costing $32.400",
            answer: "Investing activity",
          },
          {
            id: "cf-class-4",
            prompt: "Issuance of bonds of $60.000",
            answer: "Financing activity",
          },
          {
            id: "cf-class-5",
            prompt: "Payment of dividends of $36.000",
            answer: "Financing activity",
          },
          {
            id: "cf-class-6",
            prompt: "Purchase of treasury shares of $13.200",
            answer: "Financing activity",
          },
        ],
      },
    },

    { kind: "h2", text: "B. Practice Case — Cassy Corporation" },
    ...CASSY_SCF_CASE.promptBlocks,
    {
      kind: "builder",
      instructions:
        "Susun statement of cash flows Cassy dengan indirect method sesuai Practice Problem Chapter 4.",
      spec: {
        entity: "Cassy Corporation",
        title: "Statement of Cash Flows",
        period: "For the Year Ended December 31, 2025",
        currency: "$",
        lines: [
          { kind: "header", label: "Cash flows from operating activities" },
          { id: "cf-ni", kind: "given", label: "Net income", amount: 66000 },
          {
            id: "cf-loss-sale",
            kind: "input",
            label: "Loss on sale of equipment",
            amount: 2400,
            indent: 1,
          },
          {
            id: "cf-dep",
            kind: "input",
            label: "Depreciation expense",
            amount: 15600,
            indent: 1,
          },
          {
            id: "cf-amort",
            kind: "input",
            label: "Patent amortization",
            amount: 3000,
            indent: 1,
          },
          {
            id: "cf-increase-liab",
            kind: "input",
            label: "Increase in current liabilities",
            amount: 15600,
            indent: 1,
          },
          {
            id: "cf-increase-assets",
            kind: "input",
            label: "Increase in current assets other than cash",
            amount: 34800,
            indent: 1,
            bracket: true,
          },
          {
            id: "cf-adj-total",
            kind: "computed",
            label: "Net adjustments to net income",
            amount: 1800,
            rule: "top",
            compute: [
              { id: "cf-loss-sale" },
              { id: "cf-dep" },
              { id: "cf-amort" },
              { id: "cf-increase-liab" },
              { id: "cf-increase-assets", sign: -1 },
            ],
          },
          {
            id: "cf-cfo",
            kind: "computed",
            label: "Net cash provided by operating activities",
            amount: 67800,
            rule: "top",
            bold: true,
            compute: [{ id: "cf-ni" }, { id: "cf-adj-total" }],
          },
          { kind: "header", label: "Cash flows from investing activities" },
          {
            id: "cf-sale-equip",
            kind: "input",
            label: "Sale of equipment",
            amount: 12000,
          },
          {
            id: "cf-building",
            kind: "input",
            label: "Addition to building",
            amount: 32400,
            bracket: true,
          },
          {
            id: "cf-invest",
            kind: "input",
            label: "Investment in shares",
            amount: 19200,
            bracket: true,
          },
          {
            id: "cf-cfi",
            kind: "computed",
            label: "Net cash used by investing activities",
            amount: -39600,
            rule: "top",
            bold: true,
            bracket: true,
            compute: [
              { id: "cf-sale-equip" },
              { id: "cf-building", sign: -1 },
              { id: "cf-invest", sign: -1 },
            ],
          },
          { kind: "header", label: "Cash flows from financing activities" },
          {
            id: "cf-bonds",
            kind: "input",
            label: "Issuance of bonds",
            amount: 60000,
          },
          {
            id: "cf-div",
            kind: "input",
            label: "Payment of dividends",
            amount: 36000,
            bracket: true,
          },
          {
            id: "cf-treasury",
            kind: "input",
            label: "Purchase of treasury shares",
            amount: 13200,
            bracket: true,
          },
          {
            id: "cf-cff",
            kind: "computed",
            label: "Net cash provided by financing activities",
            amount: 10800,
            rule: "top",
            bold: true,
            compute: [
              { id: "cf-bonds" },
              { id: "cf-div", sign: -1 },
              { id: "cf-treasury", sign: -1 },
            ],
          },
          {
            id: "cf-net",
            kind: "computed",
            label: "Net increase in cash",
            amount: 39000,
            rule: "double",
            bold: true,
            compute: [{ id: "cf-cfo" }, { id: "cf-cfi" }, { id: "cf-cff" }],
          },
        ],
      },
    },
    CASSY_SCF_CASE.explanationBlock,
    {
      kind: "callout",
      variant: "tip",
      title: "Transaksi nonkas",
      text: "Transaksi investing atau financing yang tidak menggunakan kas tidak ditempatkan sebagai cash inflow/outflow dalam badan statement of cash flows; transaksi tersebut memerlukan disclosure terpisah bila material.",
    },
  ],
};

const tm7: Reading = {
  tm: 7,
  title: "Accounting and the Time Value of Money",
  ref: "Kieso IFRS 5e · Ch. 5",
  intro:
    "Time value of money menjadi dasar pengukuran notes, bonds, leases, pensions, sinking funds, dan installment contracts. Praktik TM 7 menggunakan **Vesper Inc.** dari Kieso Chapter 5.",
  objectives: [
    "Membedakan simple interest dan compound interest.",
    "Memilih faktor present value atau future value untuk single sum dan annuity.",
    "Menghitung future value, bond price, sinking fund, dan deferred annuity.",
  ],
  blocks: [
    ...AKM1_TM7_FLOW_BLOCKS,
    { kind: "h2", text: "A. Peta Keputusan Time Value of Money" },
    {
      kind: "table",
      headers: ["Situasi", "Model pengukuran"],
      rows: [
        [
          "Satu jumlah diterima/dibayar di masa depan",
          "Future value atau present value of 1",
        ],
        ["Pembayaran sama besar pada akhir periode", "Ordinary annuity"],
        ["Pembayaran sama besar pada awal periode", "Annuity due"],
        [
          "Pembayaran anuitas dimulai setelah masa penundaan",
          "Deferred annuity",
        ],
        ["Obligasi", "PV bunga sebagai annuity + PV pokok sebagai single sum"],
      ],
    },
    {
      kind: "formula",
      text: "FV = PV(1+i)^n",
      note: "Future value of a single sum.",
    },
    {
      kind: "formula",
      text: "PV = FV(PVF_{n,i})",
      note: "Present value of a single sum.",
    },
    {
      kind: "formula",
      text: "PV-OA = R × PVF-OA(n,i)",
      note: "Present value of an ordinary annuity.",
    },
    {
      kind: "formula",
      text: "FV-OA = R × FVF-OA(n,i)",
      note: "Future value of an ordinary annuity.",
    },
    { kind: "h3", text: "Mengapa TVM penting dalam Akuntansi Keuangan" },
    {
      kind: "p",
      text: "TVM digunakan ketika penerimaan atau pembayaran terjadi pada waktu yang berbeda. Nilai tercatat notes, bonds, leases, dan pension obligations tidak cukup dibaca dari nominal kontrak; akuntan perlu mengukur nilai kini atau nilai masa depan berdasarkan tingkat bunga dan pola pembayaran.",
    },
    {
      kind: "table",
      headers: ["Pertanyaan sebelum menghitung", "Keputusan model"],
      rows: [
        ["Apakah hanya ada satu arus kas?", "Gunakan single sum PV atau FV."],
        [
          "Apakah pembayaran sama dan terjadi setiap akhir periode?",
          "Gunakan ordinary annuity.",
        ],
        [
          "Apakah pembayaran dimulai pada awal periode?",
          "Gunakan annuity due.",
        ],
        [
          "Apakah pembayaran annuity baru mulai setelah masa tunggu?",
          "Hitung annuity pada tanggal mulai, lalu diskontokan kembali.",
        ],
        [
          "Apakah instrumen memiliki bunga periodik dan principal?",
          "Pisahkan PV bunga annuity dan PV principal single sum.",
        ],
      ],
      caption: "Decision guide sebelum mengerjakan Vesper Inc.",
    },
    { kind: "h2", text: "Bank Formula dan Format Praktik UTS — TM 1–7" },
    {
      kind: "table",
      headers: [
        "Area praktik",
        "Rumus / pola inti",
        "Format jawaban yang diharapkan",
      ],
      rows: [
        [
          "Accounting cycle",
          "Debit = Credit setelah adjustment dan closing",
          "General journal → adjusted trial balance / worksheet → closing entries",
        ],
        [
          "Income statement",
          "Gross profit = Net sales − COGS; Comprehensive income = Net income ± OCI",
          "Statement dengan subtotal dan EPS bila diminta",
        ],
        [
          "Statement of financial position",
          "Assets = Liabilities + Equity",
          "Classified statement; current/non-current terpisah",
        ],
        [
          "Statement of cash flows",
          "Net change in cash = CFO + CFI + CFF",
          "Operating, investing, financing; noncash disclosure terpisah",
        ],
        [
          "Single sum TVM",
          "FV = PV(1+i)^n; PV = FV × PVF(n,i)",
          "Tulis model, faktor, substitusi, dan hasil akhir",
        ],
        [
          "Ordinary annuity",
          "PV-OA = R × PVF-OA(n,i); FV-OA = R × FVF-OA(n,i)",
          "Schedule pembayaran akhir periode",
        ],
        [
          "Bond pricing",
          "PV interest annuity + PV principal single sum",
          "Pisahkan PV kupon dan PV pokok sebelum total harga",
        ],
      ],
      caption:
        "Ringkasan format kerja Pra-UTS berdasarkan Kieso IFRS 5e Chapters 1–5.",
    },
    { kind: "figure", title: "Garis Waktu PV ↔ FV", svg: SVG_TVM },

    { kind: "h2", text: "B. Practice Case — Vesper Inc." },
    ...VESPER_TVM_CASE.promptBlocks,
    ...VESPER_TVM_CASE.guideBlocks!,
    {
      kind: "table-fill",
      spec: {
        title: "Worksheet TVM — Vesper Inc.",
        instruction:
          "Masukkan hasil perhitungan sebagaimana diminta pada Practice Problem. Angka dibulatkan ke unit terdekat mengikuti solusi Kieso.",
        currency: "$",
        headers: ["Output yang dihitung", "Jawaban"],
        rows: [
          {
            id: "vesper-a",
            label: "FV security deposit pada akhir tahun ke-10",
            cells: [{ id: "vesper-a-ans", answer: 31125 }],
          },
          {
            id: "vesper-b-int",
            label: "PV pembayaran bunga obligasi",
            cells: [{ id: "vesper-b-int-ans", answer: 2536454 }],
          },
          {
            id: "vesper-b-principal",
            label: "PV pokok obligasi",
            cells: [{ id: "vesper-b-principal-ans", answer: 694140 }],
          },
          {
            id: "vesper-b-price",
            label: "Selling price of bonds",
            cells: [{ id: "vesper-b-price-ans", answer: 3230594 }],
          },
          {
            id: "vesper-c-fund",
            label: "FV ordinary annuity sinking fund",
            cells: [{ id: "vesper-c-fund-ans", answer: 2859523 }],
          },
          {
            id: "vesper-c-def",
            label: "Deficiency sinking fund",
            cells: [{ id: "vesper-c-def-ans", answer: 140477 }],
          },
          {
            id: "vesper-d-at-retire",
            label: "PV annuity pension pada tanggal retirement",
            cells: [{ id: "vesper-d-at-retire-ans", answer: 5368064 }],
          },
          {
            id: "vesper-d-now",
            label: "PV pension liability pada awal 2025",
            cells: [{ id: "vesper-d-now-ans", answer: 1692228 }],
          },
        ],
      },
    },
    VESPER_TVM_CASE.explanationBlock,
    {
      kind: "callout",
      variant: "key",
      title: "Transfer ke topik AKM berikutnya",
      text: "Kemampuan TVM pada TM 7 akan dipakai kembali saat mengukur notes receivable jangka panjang, bonds, leases, dan liabilitas lain pada pembahasan berikutnya.",
    },
  ],
};

const TM8_LEARNING_FLOW: ContentBlock[] = [
  { kind: "h2", text: "A0. Peta Belajar TM 8 — Teori Dulu, Baru Rekonsiliasi" },
  {
    kind: "p",
    text: "Sebelum masuk tabel dan latihan, TM 8 harus dibaca sebagai tiga lapis materi: **klasifikasi kas**, **pengendalian kas kecil**, lalu **rekonsiliasi bank**. Klasifikasi menentukan di mana pos muncul di statement of financial position; pengendalian kas menjelaskan mengapa petty cash memakai sistem imprest; rekonsiliasi bank menjelaskan mengapa saldo bank dan saldo buku hampir selalu berbeda pada tanggal laporan.",
  },
  {
    kind: "table",
    headers: ["Lapisan belajar", "Apa yang dipahami", "Kapan masuk latihan"],
    rows: [
      [
        "1. Cash classification",
        "Membedakan cash, cash equivalent, restricted cash, overdraft, dan item bukan kas.",
        "Sebelum menjawab soal klasifikasi kas.",
      ],
      [
        "2. Petty cash imprest",
        "Memahami bahwa petty cash dibuat tetap; jurnal muncul saat pembentukan, reimbursement, atau perubahan dana.",
        "Sebelum jurnal petty cash dan cash over/short.",
      ],
      [
        "3. Bank reconciliation",
        "Membedakan item sisi bank dan item sisi buku; hanya sisi buku yang dijurnal.",
        "Sebelum builder rekonsiliasi dan jurnal penyesuaian.",
      ],
    ],
    caption:
      "Peta ini menjadi jeda antara teori, contoh, dan latihan agar TM 8 tidak terasa seperti kumpulan tabel.",
  },
  {
    kind: "callout",
    variant: "info",
    title: "Cara membedakan materi dan latihan",
    text: "Blok teori menjelaskan aturan akuntansi. Blok tabel merangkum keputusan. Blok latihan aktif seperti builder/journal-builder adalah tempat menguji pemahaman. Jangan mulai dari builder jika istilah sisi bank dan sisi buku belum jelas.",
  },
  { kind: "h3", text: "Teori inti — mengapa rekonsiliasi bank diperlukan?" },
  {
    kind: "p",
    text: "Saldo kas menurut bank dan saldo kas menurut buku perusahaan jarang sama karena waktu pencatatan dan sumber informasi berbeda. Bank mencatat transaksi saat dana benar-benar diproses oleh bank, sedangkan perusahaan mencatat transaksi berdasarkan dokumen internal dan informasi yang diterima. Rekonsiliasi bank bukan untuk mencari siapa yang salah, tetapi untuk menemukan **correct cash balance** yang dapat dilaporkan.",
  },
  {
    kind: "ul",
    items: [
      "**Deposit in transit** adalah penerimaan kas yang sudah dicatat perusahaan tetapi belum muncul di bank statement; ditambahkan di sisi bank.",
      "**Outstanding checks** adalah cek yang sudah dikeluarkan dan dicatat perusahaan tetapi belum dikliring bank; dikurangkan di sisi bank.",
      "**NSF check** adalah cek pelanggan yang ditolak bank; dikurangkan di sisi buku dan biasanya mengembalikan piutang pelanggan.",
      "**Bank service charge** dikurangkan di sisi buku karena bank sudah membebankan biaya tetapi perusahaan belum mencatat.",
      "**Interest collected by bank** ditambahkan di sisi buku karena bank sudah menagih/menerima kas untuk perusahaan.",
    ],
  },
  {
    kind: "callout",
    variant: "key",
    title: "Aturan jurnal rekonsiliasi",
    text: "Jurnal hanya dibuat untuk item yang memengaruhi saldo buku perusahaan. Item yang hanya menjelaskan perbedaan sisi bank tidak dijurnal oleh perusahaan.",
  },
];

const TM9_LEARNING_FLOW: ContentBlock[] = [
  {
    kind: "h2",
    text: "A0. Peta Belajar TM 9 — Dari Hak Tagih ke Nilai Tertagih",
  },
  {
    kind: "p",
    text: "TM 9 menjawab satu pertanyaan utama: **berapa nilai piutang yang layak dilaporkan?** Jawabannya tidak selalu sama dengan saldo faktur. Piutang harus diklasifikasikan, disesuaikan dengan diskon/retur, dikurangi estimasi tidak tertagih, dan untuk notes tertentu diukur dengan present value.",
  },
  {
    kind: "table",
    headers: ["Topik", "Fungsi teori", "Latihan yang mengikuti"],
    rows: [
      [
        "Classification of receivables",
        "Menentukan trade/non-trade, current/non-current, accounts/notes receivable.",
        "Klasifikasi piutang dan penyajian.",
      ],
      [
        "Allowance method",
        "Mengukur cash realizable value dengan estimasi kerugian kredit.",
        "Aging schedule, write-off, recovery.",
      ],
      [
        "Notes receivable",
        "Menghitung maturity value, interest, dan present value bila material.",
        "Jurnal notes receivable dan interest.",
      ],
      [
        "Transfer receivables",
        "Membedakan sale/factoring dan secured borrowing.",
        "Decision case factoring/borrowing.",
      ],
    ],
    caption:
      "Urutan ini sengaja dibuat dari teori hak tagih menuju praktik penilaian dan transfer.",
  },
  { kind: "h3", text: "Teori inti — allowance bukan cadangan bebas" },
  {
    kind: "p",
    text: "Allowance for doubtful accounts adalah **contra asset** yang mengurangi accounts receivable agar piutang dilaporkan sebesar kas yang realistis akan diterima. Akun ini bukan kas, bukan dana yang disisihkan, dan bukan beban. Beban muncul melalui Bad Debt Expense; allowance adalah akun penilaian yang menyesuaikan carrying amount piutang.",
  },
  {
    kind: "ul",
    items: [
      "Saat estimasi piutang tidak tertagih dibuat: debit **Bad Debt Expense**, kredit **Allowance for Doubtful Accounts**.",
      "Saat piutang tertentu dihapus: debit **Allowance for Doubtful Accounts**, kredit **Accounts Receivable**.",
      "Saat piutang yang sudah dihapus kemudian tertagih: restore piutang dahulu, lalu catat penerimaan kas.",
      "Direct write-off umumnya tidak tepat untuk pelaporan keuangan bila jumlah bad debts material karena tidak mencocokkan expense dengan revenue periode terkait.",
    ],
  },
  {
    kind: "callout",
    variant: "warning",
    title: "Jebakan TM 9",
    text: "Jangan mengurangi accounts receivable dengan Bad Debt Expense. Yang mengurangi saldo piutang di statement of financial position adalah Allowance for Doubtful Accounts.",
  },
];

const TM10_LEARNING_FLOW: ContentBlock[] = [
  {
    kind: "h2",
    text: "A0. Peta Belajar TM 10 — Inventory Cost-Basis Bagian 1",
  },
  {
    kind: "p",
    text: "TM 10 membahas dasar pengukuran persediaan: **barang apa yang masuk inventory** dan **biaya apa yang boleh dikapitalisasi**. Sebelum menghitung FIFO atau average, mahasiswa harus tahu dulu apakah barang tersebut milik perusahaan dan apakah biaya tersebut membawa persediaan ke lokasi/kondisi siap dijual.",
  },
  {
    kind: "table",
    headers: ["Keputusan", "Pertanyaan kunci", "Contoh jebakan"],
    rows: [
      [
        "Ownership",
        "Apakah risiko dan manfaat kepemilikan sudah berpindah?",
        "FOB shipping point, FOB destination, goods in transit.",
      ],
      [
        "Goods held by others",
        "Apakah perusahaan masih pemilik barang?",
        "Consignment out tetap milik consignor.",
      ],
      [
        "Cost included",
        "Apakah biaya diperlukan untuk membawa inventory ke lokasi dan kondisi siap dijual?",
        "Freight-in dan import duties biasanya dikapitalisasi.",
      ],
      [
        "Cost excluded",
        "Apakah biaya terjadi setelah barang siap dijual atau bersifat selling/admin?",
        "Freight-out, selling expense, abnormal waste.",
      ],
    ],
    caption:
      "Peta ini harus dipahami sebelum masuk latihan inventoriable cost dan ownership.",
  },
  {
    kind: "h3",
    text: "Teori inti — inventory adalah asset, bukan sekadar barang di gudang",
  },
  {
    kind: "p",
    text: "Persediaan diakui sebagai aset karena perusahaan mengendalikan sumber daya yang akan dijual atau digunakan dalam produksi. Karena itu, fokus akuntansi bukan hanya lokasi fisik barang, tetapi **control/ownership**. Barang bisa berada di perjalanan atau di tempat pihak lain tetapi tetap menjadi inventory perusahaan jika risiko dan manfaat kepemilikan belum berpindah.",
  },
  {
    kind: "callout",
    variant: "key",
    title: "Rule of thumb FOB",
    text: "FOB shipping point: pembeli menanggung risiko sejak barang dikirim. FOB destination: penjual masih menanggung risiko sampai barang tiba di tujuan.",
  },
];

const TM11_LEARNING_FLOW: ContentBlock[] = [
  {
    kind: "h2",
    text: "A0. Peta Belajar TM 11 — Cost Flow dan Inventory Errors",
  },
  {
    kind: "p",
    text: "TM 11 bukan sekadar memilih rumus FIFO atau average. Intinya adalah bagaimana biaya persediaan mengalir dari purchases ke ending inventory dan cost of goods sold. Kesalahan di ending inventory akan memengaruhi laba periode berjalan dan sering berbalik pada periode berikutnya.",
  },
  {
    kind: "table",
    headers: ["Metode", "Logika biaya", "Yang sering diuji"],
    rows: [
      [
        "FIFO",
        "Unit paling awal dianggap terjual lebih dahulu; ending inventory berisi biaya pembelian terbaru.",
        "Perpetual dan periodic biasanya menghasilkan ending inventory sama jika data sama.",
      ],
      [
        "Weighted-average periodic",
        "Total cost available for sale dibagi total unit available for sale.",
        "Average cost dihitung sekali pada akhir periode.",
      ],
      [
        "Moving-average perpetual",
        "Average cost diperbarui setiap kali ada pembelian.",
        "Setiap sale memakai average cost terakhir.",
      ],
      [
        "Inventory error",
        "Ending inventory salah memengaruhi COGS, gross profit, net income.",
        "Overstatement ending inventory menurunkan COGS dan menaikkan income.",
      ],
    ],
    caption: "Gunakan peta ini sebelum masuk latihan cost flow.",
  },
  { kind: "h3", text: "Teori inti — hubungan inventory dan income" },
  {
    kind: "formula",
    text: "COGS = Beginning Inventory + Net Purchases − Ending Inventory",
    note: "Jika ending inventory terlalu tinggi, COGS terlalu rendah dan net income terlalu tinggi. Jika ending inventory terlalu rendah, COGS terlalu tinggi dan net income terlalu rendah.",
  },
  {
    kind: "callout",
    variant: "tip",
    title: "Cara cepat audit inventory error",
    text: "Tanya tiga hal: inventory akhir salah naik/turun, COGS bergerak berlawanan, net income bergerak searah dengan ending inventory.",
  },
];

const TM12_LEARNING_FLOW: ContentBlock[] = [
  { kind: "h2", text: "A0. Peta Belajar TM 12 — Additional Valuation Issues" },
  {
    kind: "p",
    text: "TM 12 berfokus pada situasi ketika cost tidak lagi menjadi ukuran terbaik karena nilai realisasi persediaan turun. Dalam IFRS, inventory diukur pada **lower of cost and net realizable value**. Artinya, jika NRV lebih rendah dari cost, persediaan harus diturunkan nilainya.",
  },
  {
    kind: "table",
    headers: ["Konsep", "Makna teori", "Output akuntansi"],
    rows: [
      [
        "NRV",
        "Estimated selling price dikurangi estimated costs of completion dan estimated selling costs.",
        "Nilai pembanding terhadap cost.",
      ],
      [
        "LCNRV",
        "Inventory dilaporkan pada lower of cost and NRV.",
        "Loss jika NRV < cost.",
      ],
      [
        "Loss method",
        "Loss dicatat secara terpisah.",
        "Loss Due to Decline of Inventory to NRV.",
      ],
      [
        "COGS method",
        "Penurunan nilai langsung menambah COGS.",
        "COGS lebih tinggi tanpa akun loss terpisah.",
      ],
      [
        "Recovery under IFRS",
        "Jika NRV naik lagi, recovery dapat diakui terbatas pada kerugian sebelumnya.",
        "Recovery tidak boleh membuat carrying amount melebihi cost awal.",
      ],
    ],
    caption: "Peta ini memisahkan teori measurement dari latihan angka LCNRV.",
  },
  { kind: "h3", text: "Teori inti — mengapa inventory bisa turun nilainya?" },
  {
    kind: "p",
    text: "Nilai persediaan dapat turun karena kerusakan, keusangan, penurunan harga jual, atau kenaikan biaya penyelesaian/penjualan. Jika perusahaan tetap melaporkan inventory pada cost ketika NRV lebih rendah, aset dan laba akan terlalu tinggi. Karena itu LCNRV bersifat konservatif dalam batas faithful representation: laporan harus mencerminkan manfaat ekonomi yang masih dapat direalisasi.",
  },
  {
    kind: "callout",
    variant: "warning",
    title: "Jebakan LCNRV",
    text: "NRV bukan fair value. NRV adalah harga jual estimasian dikurangi biaya penyelesaian dan biaya penjualan. Jangan langsung memakai selling price bruto sebagai NRV.",
  },
];

const TM13_LEARNING_FLOW: ContentBlock[] = [
  {
    kind: "h2",
    text: "A0. Peta Belajar TM 13 — Estimasi Inventory Saat Data Tidak Lengkap",
  },
  {
    kind: "p",
    text: "TM 13 membahas dua metode estimasi inventory: **gross profit method** dan **retail inventory method**. Keduanya dipakai ketika physical count belum tersedia atau inventory perlu diestimasi, tetapi keduanya tidak sama dengan metode cost flow normal.",
  },
  {
    kind: "table",
    headers: ["Metode", "Kapan dipakai", "Logika inti"],
    rows: [
      [
        "Gross profit method",
        "Estimasi inventory saat terjadi kebakaran, laporan interim, atau audit reasonableness.",
        "Estimasi COGS dari sales dan gross profit rate, lalu ending inventory = goods available − estimated COGS.",
      ],
      [
        "Retail inventory method",
        "Retailer memiliki data cost dan retail price tetapi sulit menghitung unit satu per satu.",
        "Cost-to-retail ratio dikalikan ending inventory at retail.",
      ],
      [
        "Conventional retail method",
        "Pendekatan lower-of-cost-or-market/NRV dalam retail method.",
        "Markdown biasanya tidak masuk denominator ratio.",
      ],
    ],
    caption:
      "Gunakan peta ini sebelum mengerjakan builder gross profit dan retail inventory.",
  },
  {
    kind: "h3",
    text: "Teori inti — markup on cost berbeda dari markup on selling price",
  },
  {
    kind: "p",
    text: "Soal gross profit sering menjebak lewat persentase. Markup 40% on cost tidak sama dengan gross profit 40% on sales. Jika markup 40% on cost, maka sales = cost + 40% cost = 140% cost, sehingga gross profit rate on sales = 40/140 = 28,57%.",
  },
  {
    kind: "callout",
    variant: "key",
    title: "Rumus pengaman gross profit method",
    text: "Jika persentase diberikan on cost, ubah dulu ke on sales sebelum menghitung estimated COGS dari sales.",
  },
];

const TM14_LEARNING_FLOW: ContentBlock[] = [
  { kind: "h2", text: "A0. Cara Pakai TM 14 — Review UAS, Bukan Materi Baru" },
  {
    kind: "p",
    text: "TM 14 diposisikan sebagai ruang review. Mahasiswa tidak perlu membaca semuanya secara linear seperti TM 8–13. Gunakan TM 14 untuk mengunci rumus, mengecek pola jurnal, lalu masuk ke diagnostic atau simulator UAS.",
  },
  {
    kind: "table",
    headers: ["Jika kondisi kamu...", "Mulai dari bagian ini", "Lanjut ke"],
    rows: [
      [
        "Belum paham konsep",
        "Baca ulang teori TM 8–13 sesuai topik lemah.",
        "Flashcard dan contoh mini.",
      ],
      [
        "Sudah paham tapi sering salah hitung",
        "Formula sheet dan rapid calculation matrix.",
        "Practice builder.",
      ],
      [
        "Mau latihan seperti ujian website",
        "Diagnostic UAS untuk pemanasan.",
        "Simulasi UAS 80 soal timer 2 jam.",
      ],
      [
        "Waktu belajar tinggal sedikit",
        "Exam trap dan decision guide.",
        "Soal topik dengan bobot tinggi.",
      ],
    ],
    caption:
      "Peta penggunaan TM 14 agar review tidak terasa bercampur antara materi, rumus, dan ujian.",
  },
  {
    kind: "callout",
    variant: "tip",
    title: "Urutan review 90 menit",
    text: "20 menit baca formula sheet, 25 menit kerjakan diagnostic, 25 menit ulang topik salah, 20 menit kerjakan bank soal pilihan. Simulator penuh 2 jam dikerjakan setelah itu.",
  },
];

const tm8: Reading = {
  tm: 8,
  title:
    "Cash and Receivables — Bagian 1: Cash Controls, Petty Cash, dan Bank Reconciliation",
  ref: "Kieso IFRS 5e · Ch. 6 + Appendix 6A",
  intro:
    "Kas harus dilaporkan secara tepat karena sangat likuid dan rentan disalahgunakan. TM 8 berfokus pada klasifikasi cash-related items, sistem petty cash imprest, serta rekonsiliasi bank dua sisi menggunakan ilustrasi Kieso.",
  objectives: [
    "Mengklasifikasikan cash, cash equivalents, restricted cash, dan bank overdrafts.",
    "Menyusun jurnal petty cash dengan sistem imprest.",
    "Menyusun bank reconciliation dan jurnal penyesuaian sisi buku.",
  ],
  blocks: [
    ...TM8_LEARNING_FLOW,
    { kind: "h2", text: "A. Pelaporan Cash dan Pos Terkait" },
    {
      kind: "p",
      text: "Cash dilaporkan sebagai aset lancar apabila tersedia untuk memenuhi kewajiban lancar dan tidak dibatasi penggunaannya. **Cash equivalents** merupakan investasi jangka pendek yang sangat likuid, siap dikonversi menjadi jumlah kas tertentu, dan memiliki risiko perubahan nilai yang tidak signifikan. Menurut Kieso/IFRS, instrumen ini pada umumnya memiliki original maturity **tiga bulan atau kurang** sejak tanggal perolehan dan dimiliki untuk memenuhi komitmen kas jangka pendek, bukan tujuan investasi.",
    },
    {
      kind: "table",
      headers: ["Pos", "Penyajian menurut prinsip Chapter 6"],
      rows: [
        [
          "Coin, currency, petty cash, checking/savings accounts",
          "Cash and cash equivalents — current assets",
        ],
        [
          "Restricted cash untuk pinjaman jangka pendek",
          "Disajikan terpisah di current assets bila material",
        ],
        ["Restricted cash untuk tujuan jangka panjang", "Non-current assets"],
        [
          "Bank overdraft",
          "Current liabilities, kecuali memenuhi syarat offset yang berlaku",
        ],
        [
          "Postdated checks, stamps, travel advances",
          "Bukan cash; klasifikasi sesuai sifat pos",
        ],
      ],
    },
    {
      kind: "callout",
      variant: "key",
      title: "Fokus UAS TM 8",
      text: "Soal UAS AKM I sering meminta mahasiswa membedakan **cash**, **cash equivalent**, **restricted cash**, dan item yang tampak seperti kas tetapi bukan kas. Kunci cepatnya: tanya apakah item sudah tersedia sekarang, tidak dibatasi, dan dapat digunakan sebagai alat pembayaran tanpa risiko nilai signifikan.",
    },
    {
      kind: "table",
      headers: [
        "Item yang sering menjebak",
        "Keputusan pelaporan",
        "Alasan singkat",
      ],
      rows: [
        [
          "Customer postdated check",
          "Receivable, bukan cash",
          "Tanggal pencairan belum jatuh tempo sehingga belum tersedia sebagai kas.",
        ],
        [
          "IOU dari karyawan",
          "Receivable",
          "Perusahaan memiliki klaim kepada karyawan, bukan alat bayar.",
        ],
        [
          "Perangko/stamps on hand",
          "Office supplies atau prepaid expense",
          "Akan dikonsumsi sebagai perlengkapan/beban, bukan digunakan membayar kewajiban.",
        ],
        [
          "Cash restricted for plant expansion",
          "Non-current restricted asset bila material",
          "Penggunaan terkait tujuan jangka panjang, bukan operasi lancar biasa.",
        ],
        [
          "Compensating balance untuk pinjaman",
          "Restricted cash terpisah bila material; current/non-current mengikuti durasi pembatasan dan hubungan dengan pinjaman",
          "Saldo minimum dipertahankan karena syarat kredit; tidak selalu current cash biasa.",
        ],
        [
          "Bank overdraft tidak dapat dioffset",
          "Current liability",
          "Saldo negatif bank menunjukkan kewajiban jangka pendek kepada bank.",
        ],
      ],
      caption:
        "Decision guide ini mengikuti pola materi TM 8–9 dan pola soal UAS tentang klasifikasi cash-related items.",
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Klasifikasi Cash-Related Items",
        instruction:
          "Pilih penyajian yang tepat untuk setiap pos pada statement of financial position.",
        choices: [
          "Cash and cash equivalents",
          "Current liabilities",
          "Non-current restricted asset",
          "Bukan cash",
        ],
        pairs: [
          {
            id: "cash-petty",
            prompt: "Petty cash fund yang siap digunakan",
            answer: "Cash and cash equivalents",
          },
          {
            id: "cash-overdraft",
            prompt: "Bank overdraft yang tidak dapat dioffset",
            answer: "Current liabilities",
          },
          {
            id: "cash-bondfund",
            prompt: "Cash restricted untuk pelunasan obligasi jangka panjang",
            answer: "Non-current restricted asset",
          },
          {
            id: "cash-postdated",
            prompt: "Postdated check dari pelanggan",
            answer: "Bukan cash",
          },
        ],
      },
    },

    { kind: "h2", text: "B. Sistem Imprest untuk Petty Cash" },
    {
      kind: "p",
      text: "Dalam **imprest system**, perusahaan membentuk dana petty cash dengan jumlah tetap. Transaksi kecil tidak dijurnal saat kas dikeluarkan oleh custodian; jurnal dibuat ketika dana direimburse berdasarkan bukti pengeluaran. Akun Petty Cash hanya berubah apabila ukuran dana dinaikkan atau diturunkan.",
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Petty Cash — Ilustrasi Appendix 6A",
        instruction:
          "Susun jurnal pembentukan dana, reimbursement, dan pengurangan dana petty cash berdasarkan angka ilustrasi Kieso.",
        currency: "$",
        accountChoices: [
          "Petty Cash",
          "Cash",
          "Supplies Expense",
          "Postage Expense",
          "Miscellaneous Expense",
          "Cash Over and Short",
        ],
        lines: [
          {
            id: "pc-est-dr",
            group: "Membentuk dana petty cash",
            account: "Petty Cash",
            debit: 300,
          },
          { id: "pc-est-cr", account: "Cash", credit: 300 },
          {
            id: "pc-reim-sup",
            group: "Reimbursement dana",
            account: "Supplies Expense",
            debit: 42,
          },
          { id: "pc-reim-post", account: "Postage Expense", debit: 53 },
          { id: "pc-reim-misc", account: "Miscellaneous Expense", debit: 76 },
          { id: "pc-reim-short", account: "Cash Over and Short", debit: 2 },
          { id: "pc-reim-cash", account: "Cash", credit: 173 },
          {
            id: "pc-dec-dr",
            group: "Mengurangi ukuran dana",
            account: "Cash",
            debit: 50,
          },
          { id: "pc-dec-cr", account: "Petty Cash", credit: 50 },
        ],
      },
    },

    { kind: "h2", text: "C. Bank Reconciliation — Nugget Mining Company" },
    {
      kind: "p",
      text: "Appendix 6A menggunakan kasus **Nugget Mining Company**. Rekonsiliasi terdiri dari sisi bank dan sisi buku; kedua sisi harus berakhir pada **correct cash balance** yang sama. Hanya reconciling items pada sisi buku yang memerlukan jurnal perusahaan.",
    },
    ...NUGGET_BANK_RECONCILIATION_CASE.promptBlocks,
    {
      kind: "table",
      headers: ["Reconciling item Nugget", "Perlakuan"],
      rows: [
        ["Deposit in transit $3,680", "Tambah sisi bank"],
        [
          "Outstanding checks: $150 + $4,820 + $31 = $5,001",
          "Kurang sisi bank",
        ],
        [
          "Bank salah membebankan cek Nugent Oil $175",
          "Tambah sisi bank; bank yang mengoreksi",
        ],
        ["Interest collected by bank $600", "Tambah sisi buku dan jurnal"],
        [
          "Kesalahan pencatatan cek #7322 sebesar $180",
          "Tambah sisi buku dan jurnal koreksi",
        ],
        [
          "Bank service charge $18 dan NSF check $220",
          "Kurang sisi buku dan jurnal",
        ],
      ],
    },
    {
      kind: "builder",
      instructions:
        "Isi setiap reconciling item. Saldo kas benar pada kedua sisi harus sama.",
      spec: {
        entity: "Nugget Mining Company",
        title: "Bank Reconciliation",
        period: "Denver National Bank, November 30, 2025",
        currency: "$",
        lines: [
          { kind: "header", label: "Balance per bank statement" },
          {
            id: "nug-bank",
            kind: "given",
            label: "Balance per bank statement",
            amount: 22190,
          },
          {
            id: "nug-dit",
            kind: "input",
            label: "Add: Deposit in transit",
            amount: 3680,
            indent: 1,
          },
          {
            id: "nug-bankerr",
            kind: "input",
            label: "Add: Bank error — incorrect check charged",
            amount: 175,
            indent: 1,
          },
          {
            id: "nug-oc",
            kind: "input",
            label: "Deduct: Outstanding checks",
            amount: 5001,
            bracket: true,
            indent: 1,
          },
          {
            id: "nug-correct-bank",
            kind: "computed",
            label: "Correct cash balance",
            amount: 21044,
            bold: true,
            rule: "double",
            compute: [
              { id: "nug-bank" },
              { id: "nug-dit" },
              { id: "nug-bankerr" },
              { id: "nug-oc", sign: -1 },
            ],
          },
          { kind: "header", label: "Balance per depositor books" },
          {
            id: "nug-book",
            kind: "given",
            label: "Balance per books",
            amount: 20502,
          },
          {
            id: "nug-int",
            kind: "input",
            label: "Add: Interest collected by bank",
            amount: 600,
            indent: 1,
          },
          {
            id: "nug-bookerr",
            kind: "input",
            label: "Add: Error in recording check #7322",
            amount: 180,
            indent: 1,
          },
          {
            id: "nug-fee",
            kind: "input",
            label: "Deduct: Bank service charges",
            amount: 18,
            bracket: true,
            indent: 1,
          },
          {
            id: "nug-nsf",
            kind: "input",
            label: "Deduct: NSF check returned",
            amount: 220,
            bracket: true,
            indent: 1,
          },
          {
            id: "nug-correct-book",
            kind: "computed",
            label: "Correct cash balance",
            amount: 21044,
            bold: true,
            rule: "double",
            compute: [
              { id: "nug-book" },
              { id: "nug-int" },
              { id: "nug-bookerr" },
              { id: "nug-fee", sign: -1 },
              { id: "nug-nsf", sign: -1 },
            ],
          },
        ],
      },
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Jurnal Penyesuaian Rekonsiliasi Bank — Nugget",
        instruction:
          "Susun jurnal hanya untuk item sisi buku. Deposit in transit, outstanding checks, dan bank error tidak dijurnal oleh Nugget.",
        currency: "$",
        accountChoices: [
          "Cash",
          "Interest Revenue",
          "Accounts Payable",
          "Accounts Receivable",
          "Bank Service Charge Expense",
        ],
        lines: [
          {
            id: "nug-j1-dr",
            group: "Bank credit dan koreksi kesalahan buku",
            account: "Cash",
            debit: 780,
          },
          { id: "nug-j1-cr1", account: "Interest Revenue", credit: 600 },
          { id: "nug-j1-cr2", account: "Accounts Payable", credit: 180 },
          {
            id: "nug-j2-dr1",
            group: "Bank charges dan NSF check",
            account: "Accounts Receivable",
            debit: 220,
          },
          {
            id: "nug-j2-dr2",
            account: "Bank Service Charge Expense",
            debit: 18,
          },
          { id: "nug-j2-cr", account: "Cash", credit: 238 },
        ],
      },
    },
    NUGGET_BANK_RECONCILIATION_CASE.explanationBlock,

    { kind: "h2", text: "D. Drill UAS — Bank Reconciliation dan Petty Cash" },
    {
      kind: "p",
      text: "Bagian ini menambahkan latihan ringkas berbasis pola soal UAS: correct cash balance dari sisi bank/buku, item yang perlu jurnal, serta cash over and short pada petty cash. Angka dibuat sebagai latihan paralel agar mahasiswa berlatih alur, bukan menghafal soal.",
    },
    {
      kind: "builder",
      instructions:
        "Isi rekonsiliasi dua sisi. Hanya item sisi buku yang menjadi jurnal perusahaan.",
      spec: {
        entity: "BOC Training Co.",
        title: "Bank Reconciliation Drill",
        period: "April 30, 20X1",
        currency: "Rp",
        lines: [
          { kind: "header", label: "Balance per bank statement" },
          {
            id: "boc-bank",
            kind: "given",
            label: "Balance per bank statement",
            amount: 39140,
          },
          {
            id: "boc-dit",
            kind: "input",
            label: "Add: Deposit in transit",
            amount: 5000,
            indent: 1,
          },
          {
            id: "boc-oc",
            kind: "input",
            label: "Deduct: Outstanding checks",
            amount: 5200,
            bracket: true,
            indent: 1,
          },
          {
            id: "boc-correct-bank",
            kind: "computed",
            label: "Correct cash balance",
            amount: 38940,
            bold: true,
            rule: "double",
            compute: [
              { id: "boc-bank" },
              { id: "boc-dit" },
              { id: "boc-oc", sign: -1 },
            ],
          },
          { kind: "header", label: "Balance per depositor books" },
          {
            id: "boc-book",
            kind: "given",
            label: "Balance per books before adjustment",
            amount: 39410,
          },
          {
            id: "boc-nsf",
            kind: "input",
            label: "Deduct: NSF check returned by bank",
            amount: 450,
            bracket: true,
            indent: 1,
          },
          {
            id: "boc-charge",
            kind: "input",
            label: "Deduct: Bank service charge",
            amount: 20,
            bracket: true,
            indent: 1,
          },
          {
            id: "boc-correct-book",
            kind: "computed",
            label: "Correct cash balance",
            amount: 38940,
            bold: true,
            rule: "double",
            compute: [
              { id: "boc-book" },
              { id: "boc-nsf", sign: -1 },
              { id: "boc-charge", sign: -1 },
            ],
          },
        ],
      },
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Jurnal Drill Rekonsiliasi Bank — BOC Training Co.",
        instruction:
          "Buat jurnal untuk book-side items saja. NSF check mengembalikan piutang kepada pelanggan; bank service charge menjadi expense.",
        currency: "Rp",
        accountChoices: [
          "Accounts Receivable",
          "Bank Service Charge Expense",
          "Cash",
          "Accounts Payable",
        ],
        lines: [
          {
            id: "boc-j-nsf-dr",
            group: "NSF check dan service charge",
            account: "Accounts Receivable",
            debit: 450,
          },
          {
            id: "boc-j-fee-dr",
            account: "Bank Service Charge Expense",
            debit: 20,
          },
          { id: "boc-j-cash-cr", account: "Cash", credit: 470 },
        ],
      },
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Petty Cash Drill — Cash Over and Short",
        instruction:
          "Dana petty cash sebesar 400. Saat diperiksa terdapat bukti pengeluaran 364 dan kas tersisa 44. Tentukan jurnal reimbursement untuk mengembalikan dana ke saldo imprest 400.",
        currency: "$",
        accountChoices: [
          "Miscellaneous Expense",
          "Cash Over and Short",
          "Cash",
          "Petty Cash",
        ],
        lines: [
          {
            id: "pc-drill-exp",
            group: "Replenishment petty cash fund",
            account: "Miscellaneous Expense",
            debit: 364,
          },
          { id: "pc-drill-over", account: "Cash Over and Short", credit: 8 },
          { id: "pc-drill-cash", account: "Cash", credit: 356 },
        ],
      },
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Jebakan rekonsiliasi bank",
      text: "Deposit in transit dan outstanding checks sudah dicatat oleh perusahaan, sehingga tidak dijurnal lagi. Journal entry dibuat untuk item yang belum masuk catatan perusahaan atau kesalahan pencatatan buku.",
    },
  ],
};

const tm9: Reading = {
  tm: 9,
  title:
    "Cash and Receivables — Bagian 2: Valuation, Notes, dan Transfers of Receivables",
  ref: "Kieso IFRS 5e · Ch. 6",
  intro:
    "Receivables dilaporkan pada jumlah yang diharapkan tertagih. TM 9 mempraktikkan allowance method, aging schedule, notes receivable pada present value, dan transfer piutang menggunakan contoh Kieso.",
  objectives: [
    "Menjelaskan cash realizable value dan allowance method.",
    "Menyusun aging schedule, jurnal bad debt adjustment, serta jurnal write-off dan recovery.",
    "Mengukur notes receivable menggunakan present value dan effective interest.",
    "Membedakan factoring tanpa guarantee dan secured borrowing.",
  ],
  blocks: [
    ...TM9_LEARNING_FLOW,
    { kind: "h2", text: "A. Accounts Receivable dan Cash Realizable Value" },
    {
      kind: "p",
      text: "Short-term receivables dilaporkan pada **cash realizable value**, yaitu jumlah kas neto yang diharapkan diterima. Karena bad debts material harus diestimasi, IFRS menghendaki penggunaan **allowance method** untuk pelaporan keuangan.",
    },
    {
      kind: "table",
      headers: [
        "Dasar klasifikasi receivables",
        "Kategori",
        "Implikasi penyajian",
      ],
      rows: [
        [
          "Waktu penagihan",
          "Current / non-current receivables",
          "Piutang yang ditagih dalam satu tahun atau siklus operasi normal disajikan current; sisanya non-current.",
        ],
        [
          "Sumber transaksi",
          "Trade / non-trade receivables",
          "Trade berasal dari penjualan barang/jasa utama; non-trade berasal dari pinjaman karyawan, advances, deposits, interest/dividend receivable, atau claims.",
        ],
        [
          "Bentuk hak tagih",
          "Accounts receivable / notes receivable",
          "Accounts receivable umumnya janji lisan jangka pendek; notes receivable adalah promissory note formal dengan maturity dan dapat berbunga.",
        ],
      ],
      caption:
        "Klasifikasi ini penting sebelum menentukan measurement, allowance, present value, dan disclosure.",
    },
    {
      kind: "formula",
      text: "Cash realizable value = Gross accounts receivable − Allowance for doubtful accounts",
      note: "Bukan dikurangi Bad Debt Expense. Expense adalah akun laba-rugi; allowance adalah valuation account yang mengurangi carrying amount receivables.",
    },

    {
      kind: "h2",
      text: "B. Pengukuran Awal A/R: Trade Discount, Cash Discount, Returns/Allowances",
    },
    {
      kind: "p",
      text: "Receivables diukur sebesar **transaction price** yang diharapkan akan diterima. Diskon dagang langsung mengurangi harga transaksi; cash discount dapat dicatat dengan gross method atau net method; sales returns and allowances mengurangi pendapatan dan/atau piutang ketika estimasi/kejadian retur terjadi.",
    },
    {
      kind: "table",
      headers: ["Item", "Perlakuan ringkas", "Jebakan UAS"],
      rows: [
        [
          "Trade discount",
          "Langsung catat harga net setelah diskon dagang.",
          "Tidak membuat akun Sales Discount terpisah.",
        ],
        [
          "Cash discount — gross method",
          "Penjualan dicatat bruto; diskon dicatat saat pelanggan mengambil diskon.",
          "Jika pelanggan tidak mengambil diskon, tidak ada jurnal diskon tambahan.",
        ],
        [
          "Cash discount — net method",
          "Penjualan dicatat net; jika pelanggan gagal mengambil diskon, selisih menjadi Sales Discounts Forfeited.",
          "Diskon tidak dicatat lagi ketika pelanggan membayar dalam periode diskon karena sejak awal sudah net.",
        ],
        [
          "Sales returns/allowances",
          "Mengurangi pendapatan/piutang atau menggunakan return liability bila estimasi dibuat saat penjualan.",
          "Jangan disamakan dengan allowance for doubtful accounts.",
        ],
      ],
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Cash Discount Drill — 1/10, n/30",
        instruction:
          "Perusahaan menjual barang secara kredit Rp300.000 dengan credit term 1/10, n/30. Susun jurnal gross method dan net method untuk skenario pembayaran dalam periode diskon serta lewat periode diskon.",
        currency: "Rp",
        accountChoices: [
          "Accounts Receivable",
          "Sales Revenue",
          "Cash",
          "Sales Discount",
          "Sales Discounts Forfeited",
        ],
        lines: [
          {
            id: "disc-gross-sale-dr",
            group: "Gross method — saat penjualan",
            account: "Accounts Receivable",
            debit: 300000,
          },
          {
            id: "disc-gross-sale-cr",
            account: "Sales Revenue",
            credit: 300000,
          },
          {
            id: "disc-gross-pay-dr-cash",
            group: "Gross method — dibayar dalam 10 hari",
            account: "Cash",
            debit: 297000,
          },
          {
            id: "disc-gross-pay-dr-disc",
            account: "Sales Discount",
            debit: 3000,
          },
          {
            id: "disc-gross-pay-cr-ar",
            account: "Accounts Receivable",
            credit: 300000,
          },
          {
            id: "disc-net-sale-dr",
            group: "Net method — saat penjualan",
            account: "Accounts Receivable",
            debit: 297000,
          },
          { id: "disc-net-sale-cr", account: "Sales Revenue", credit: 297000 },
          {
            id: "disc-net-late-dr-cash",
            group: "Net method — dibayar lewat periode diskon",
            account: "Cash",
            debit: 300000,
          },
          {
            id: "disc-net-late-cr-ar",
            account: "Accounts Receivable",
            credit: 297000,
          },
          {
            id: "disc-net-late-cr-forfeit",
            account: "Sales Discounts Forfeited",
            credit: 3000,
          },
        ],
      },
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Cara cepat membaca syarat 1/10, n/30",
      text: "Angka pertama adalah tingkat diskon; angka kedua adalah batas hari diskon; n/30 berarti jumlah net harus dilunasi paling lambat 30 hari. Untuk Rp300.000, diskon 1% = Rp3.000, sehingga nilai net = Rp297.000.",
    },

    {
      kind: "h2",
      text: "C. Valuation of Accounts Receivable — Allowance Method",
    },
    {
      kind: "table",
      headers: ["Metode", "Konsekuensi pelaporan"],
      rows: [
        [
          "Direct write-off",
          "Mengakui beban hanya ketika akun tertentu terbukti tidak tertagih; tidak tepat bila uncollectible material.",
        ],
        [
          "Allowance method",
          "Mengestimasi expected uncollectibles, mencatat Bad Debt Expense dan Allowance for Doubtful Accounts.",
        ],
        [
          "Write-off dengan allowance",
          "Debit Allowance; kredit Accounts Receivable — tidak menambah bad debt expense lagi.",
        ],
      ],
    },
    {
      kind: "statement",
      spec: {
        entity: "Brown Furniture",
        title: "Statement of Financial Position",
        partial: "(Partial)",
        period: "December 31, 2025",
        currency: "£",
        lines: [
          { kind: "header", label: "Current assets" },
          { label: "Accounts receivable", amount: 150000, indent: 1 },
          {
            label: "Less: Allowance for doubtful accounts",
            amount: 10000,
            bracket: true,
            indent: 1,
          },
          {
            label: "Cash realizable value of accounts receivable",
            amount: 140000,
            bold: true,
            rule: "top",
          },
        ],
      },
    },

    { kind: "h2", text: "D. Aging Schedule — Wilson & Co." },
    {
      kind: "p",
      text: "Illustration 6.6 mengelompokkan saldo berdasarkan umur piutang. Tarif meningkat seiring meningkatnya risiko keterlambatan; hasil akhirnya merupakan **saldo allowance yang dibutuhkan**, bukan langsung beban apabila allowance telah memiliki saldo sebelumnya.",
    },
    ...WILSON_RECEIVABLES_AGING_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Accounts Receivable Aging Schedule — Wilson & Co.",
        instruction:
          "Isi required balance in allowance untuk setiap kategori umur dan total saldo allowance akhir tahun.",
        currency: "€",
        headers: [
          "Age of receivable",
          "Amount",
          "Estimated uncollectible rate",
          "Required allowance",
        ],
        rows: [
          {
            id: "wil-1",
            label: "Under 30 days",
            cells: [
              { id: "wil-1-a", readonly: true, display: "€345,000" },
              { id: "wil-1-r", readonly: true, display: "0.8%" },
              { id: "wil-1-x", answer: 2760 },
            ],
          },
          {
            id: "wil-2",
            label: "30–60 days",
            cells: [
              { id: "wil-2-a", readonly: true, display: "€115,000" },
              { id: "wil-2-r", readonly: true, display: "4.0%" },
              { id: "wil-2-x", answer: 4600 },
            ],
          },
          {
            id: "wil-3",
            label: "61–90 days",
            cells: [
              { id: "wil-3-a", readonly: true, display: "€18,000" },
              { id: "wil-3-r", readonly: true, display: "15.0%" },
              { id: "wil-3-x", answer: 2700 },
            ],
          },
          {
            id: "wil-4",
            label: "91–120 days",
            cells: [
              { id: "wil-4-a", readonly: true, display: "€14,000" },
              { id: "wil-4-r", readonly: true, display: "20.0%" },
              { id: "wil-4-x", answer: 2800 },
            ],
          },
          {
            id: "wil-5",
            label: "Over 120 days",
            cells: [
              { id: "wil-5-a", readonly: true, display: "€55,000" },
              { id: "wil-5-r", readonly: true, display: "25.0%" },
              { id: "wil-5-x", answer: 13750 },
            ],
          },
          {
            id: "wil-total",
            label: "Year-end allowance required",
            cells: [
              { id: "wil-t-a", readonly: true, display: "€547,000" },
              { id: "wil-t-r", readonly: true, display: "—" },
              { id: "wil-t-x", answer: 26610 },
            ],
          },
        ],
      },
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Adjustment Allowance — Wilson & Co.",
        instruction:
          "Asumsikan Allowance for Doubtful Accounts telah memiliki saldo kredit €800 sebelum penyesuaian. Susun adjusting entry.",
        currency: "€",
        accountChoices: [
          "Bad Debt Expense",
          "Allowance for Doubtful Accounts",
          "Accounts Receivable",
          "Cash",
        ],
        lines: [
          {
            id: "wil-adj-dr",
            group:
              "Required allowance €26,610 less existing credit balance €800",
            account: "Bad Debt Expense",
            debit: 25810,
          },
          {
            id: "wil-adj-cr",
            account: "Allowance for Doubtful Accounts",
            credit: 25810,
          },
        ],
      },
    },
    WILSON_RECEIVABLES_AGING_CASE.explanationBlock,

    {
      kind: "h2",
      text: "E. Write-Off dan Recovery — Brown Furniture / Randall plc",
    },
    {
      kind: "p",
      text: "Pada **allowance method**, write-off tidak lagi menambah Bad Debt Expense karena estimasi beban telah diakui sebelumnya. Kieso mengilustrasikan Brown Furniture yang menghapus saldo Randall plc sebesar **£1,000** pada 1 Maret 2026, lalu menerima pelunasannya pada 1 Juli 2026. Recovery memerlukan dua jurnal: mengembalikan piutang yang pernah dihapus, lalu mencatat penerimaan kas.",
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Write-Off and Recovery — Randall plc",
        instruction:
          "Susun jurnal Brown Furniture. Perhatikan bahwa write-off dan recovery tidak mendebit Bad Debt Expense lagi pada allowance method.",
        currency: "£",
        accountChoices: [
          "Allowance for Doubtful Accounts",
          "Accounts Receivable (Randall plc)",
          "Cash",
          "Bad Debt Expense",
        ],
        lines: [
          {
            id: "brown-wo-dr",
            group: "March 1, 2026 — write-off Randall plc",
            account: "Allowance for Doubtful Accounts",
            debit: 1000,
          },
          {
            id: "brown-wo-cr",
            account: "Accounts Receivable (Randall plc)",
            credit: 1000,
          },
          {
            id: "brown-rec-rein-dr",
            group: "July 1, 2026 — reverse write-off / reinstate receivable",
            account: "Accounts Receivable (Randall plc)",
            debit: 1000,
          },
          {
            id: "brown-rec-rein-cr",
            account: "Allowance for Doubtful Accounts",
            credit: 1000,
          },
          {
            id: "brown-rec-cash-dr",
            group: "July 1, 2026 — record collection",
            account: "Cash",
            debit: 1000,
          },
          {
            id: "brown-rec-cash-cr",
            account: "Accounts Receivable (Randall plc)",
            credit: 1000,
          },
        ],
      },
    },
    {
      kind: "callout",
      variant: "key",
      title: "Dampak laporan keuangan",
      text: "Write-off dan recovery dengan allowance method hanya mengubah akun statement of financial position. Write-off mengurangi Accounts Receivable dan Allowance dengan jumlah sama; recovery membalik penghapusan lalu mencatat kas yang diterima.",
    },

    {
      kind: "h2",
      text: "F. Notes Receivable — Present Value dan Effective Interest",
    },
    {
      kind: "p",
      text: "Short-term notes umumnya dicatat pada face value, sedangkan long-term notes dicatat pada present value dari kas yang akan diterima. Untuk zero-interest-bearing note, diskon diamortisasi menjadi interest revenue menggunakan effective-interest method.",
    },
    ...JEREMIAH_NOTES_RECEIVABLE_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Discount Amortization Schedule — Jeremiah Company",
        instruction:
          "Jeremiah menerima three-year zero-interest-bearing note dengan face value $10,000 dan present value $7,721.80 pada effective rate 9%. Isi schedule amortisasi diskon.",
        currency: "$",
        headers: [
          "Period",
          "Cash received",
          "Interest revenue",
          "Discount amortized",
          "Carrying amount",
        ],
        rows: [
          {
            id: "jer-0",
            label: "Date of issue",
            cells: [
              { id: "jer-0-cash", readonly: true, display: "—" },
              { id: "jer-0-int", readonly: true, display: "—" },
              { id: "jer-0-disc", readonly: true, display: "—" },
              { id: "jer-0-ca", readonly: true, display: "$7,721.80" },
            ],
          },
          {
            id: "jer-1",
            label: "End of year 1",
            cells: [
              { id: "jer-1-cash", readonly: true, display: "$0" },
              { id: "jer-1-int", answer: 694.96, tolerance: 0.01 },
              { id: "jer-1-disc", answer: 694.96, tolerance: 0.01 },
              { id: "jer-1-ca", answer: 8416.76, tolerance: 0.01 },
            ],
          },
          {
            id: "jer-2",
            label: "End of year 2",
            cells: [
              { id: "jer-2-cash", readonly: true, display: "$0" },
              { id: "jer-2-int", answer: 757.51, tolerance: 0.01 },
              { id: "jer-2-disc", answer: 757.51, tolerance: 0.01 },
              { id: "jer-2-ca", answer: 9174.27, tolerance: 0.01 },
            ],
          },
          {
            id: "jer-3",
            label: "End of year 3",
            cells: [
              { id: "jer-3-cash", readonly: true, display: "$0" },
              { id: "jer-3-int", answer: 825.73, tolerance: 0.01 },
              { id: "jer-3-disc", answer: 825.73, tolerance: 0.01 },
              { id: "jer-3-ca", answer: 10000, tolerance: 0.01 },
            ],
          },
        ],
      },
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Notes Receivable — Jeremiah Company",
        instruction:
          "Susun jurnal penerimaan note pada present value dan pengakuan interest revenue akhir tahun pertama.",
        currency: "$",
        accountChoices: ["Notes Receivable", "Cash", "Interest Revenue"],
        lines: [
          {
            id: "jer-issue-dr",
            group: "Date of issue",
            account: "Notes Receivable",
            debit: 7721.8,
            tolerance: 0.01,
          },
          {
            id: "jer-issue-cr",
            account: "Cash",
            credit: 7721.8,
            tolerance: 0.01,
          },
          {
            id: "jer-y1-dr",
            group: "End of year 1 — discount amortization",
            account: "Notes Receivable",
            debit: 694.96,
            tolerance: 0.01,
          },
          {
            id: "jer-y1-cr",
            account: "Interest Revenue",
            credit: 694.96,
            tolerance: 0.01,
          },
        ],
      },
    },
    JEREMIAH_NOTES_RECEIVABLE_CASE.explanationBlock,

    { kind: "h2", text: "G. Transfers of Receivables — Slamar Ltd." },
    {
      kind: "p",
      text: "Practice Problem Chapter 6 memberikan tiga situasi **independen**: factoring tanpa guarantee, assignment sebagai secured borrowing, dan pembentukan allowance. Karena independen, setiap situasi dihitung dari data awalnya sendiri.",
    },
    ...SLAMAR_RECEIVABLE_TRANSFER_CASE.promptBlocks,
    {
      kind: "journal-builder",
      spec: {
        title: "Factoring, Secured Borrowing, dan Allowance — Slamar Ltd.",
        instruction:
          "Susun jurnal untuk masing-masing situasi independen dalam Practice Problem.",
        currency: "¥",
        accountChoices: [
          "Cash",
          "Loss on Sale of Receivables",
          "Accounts Receivable",
          "Interest Expense",
          "Notes Payable",
          "Bad Debt Expense",
          "Allowance for Doubtful Accounts",
        ],
        lines: [
          {
            id: "sla-1-dr-cash",
            group: "1. Factor without guarantee: ¥50,000; finance charge 11%",
            account: "Cash",
            debit: 44500,
          },
          {
            id: "sla-1-dr-loss",
            account: "Loss on Sale of Receivables",
            debit: 5500,
          },
          { id: "sla-1-cr-ar", account: "Accounts Receivable", credit: 50000 },
          {
            id: "sla-2-dr-cash",
            group:
              "2. Assign receivables for a one-year loan: loan ¥75,000; charge 9%",
            account: "Cash",
            debit: 68250,
          },
          { id: "sla-2-dr-int", account: "Interest Expense", debit: 6750 },
          { id: "sla-2-cr-note", account: "Notes Payable", credit: 75000 },
          {
            id: "sla-3-dr-bde",
            group:
              "3. Required allowance: 6% of ¥338,000 less existing credit ¥4,240",
            account: "Bad Debt Expense",
            debit: 16040,
          },
          {
            id: "sla-3-cr-allow",
            account: "Allowance for Doubtful Accounts",
            credit: 16040,
          },
        ],
      },
    },
    SLAMAR_RECEIVABLE_TRANSFER_CASE.explanationBlock,
    {
      kind: "table",
      headers: [
        "Kondisi transfer receivables",
        "Accounting treatment",
        "Dampak analisis",
      ],
      rows: [
        [
          "Risks and rewards berpindah secara substansial ke factor",
          "Derecognize receivables; catat cash, loss/fee, dan setiap retained interest bila ada.",
          "A/R turun; current ratio dan receivables turnover dapat berubah karena denominator berkurang.",
        ],
        [
          "Risks and rewards tidak berpindah / receivables hanya dijaminkan",
          "Receivables tetap di buku; catat liability/notes payable dan interest/finance expense.",
          "Aset dan liabilitas naik/bertahan; pengguna perlu disclosure bahwa receivables dijaminkan.",
        ],
        [
          "Ada continuing involvement atau recourse/guarantee",
          "Perlu analisis tambahan atas risiko yang masih ditanggung transferor.",
          "Tidak boleh otomatis mengakui sale hanya karena kas diterima dari factor.",
        ],
      ],
      caption:
        "Decision table untuk membedakan sale of receivables dan secured borrowing.",
    },

    { kind: "h2", text: "H. Presentation and Analysis — Receivables Turnover" },
    {
      kind: "p",
      text: "Analisis piutang tidak berhenti pada jurnal. Receivables turnover dan average collection period membantu membaca kualitas penagihan, potensi overstated receivables, risiko poor collection, dan red flag seperti lapping. Namun rasio tersebut harus dibaca bersama kebijakan kredit, perubahan sales mix, serta perubahan allowance.",
    },
    {
      kind: "formula",
      text: "Accounts receivable turnover = Net credit sales ÷ Average net accounts receivable",
      note: "Jika net credit sales tidak tersedia, analis kadang memakai net sales sebagai pendekatan, tetapi harus diungkapkan sebagai proxy.",
    },
    {
      kind: "formula",
      text: "Average collection period = 365 ÷ Accounts receivable turnover",
      note: "Semakin lama collection period, semakin besar kebutuhan analisis umur piutang, kebijakan kredit, dan potensi impairment.",
    },
    {
      kind: "table-fill",
      spec: {
        title: "Receivables Turnover Drill",
        instruction:
          "Net credit sales Rp1.200.000; beginning net A/R Rp180.000; ending net A/R Rp220.000. Hitung turnover dan rata-rata hari penagihan.",
        currency: "Rp",
        headers: ["Komponen", "Jawaban"],
        rows: [
          {
            id: "ar-avg",
            label: "Average net accounts receivable",
            cells: [{ id: "ar-avg-ans", answer: 200000 }],
          },
          {
            id: "ar-turn",
            label: "Accounts receivable turnover",
            cells: [{ id: "ar-turn-ans", answer: 6, tolerance: 0.01 }],
          },
          {
            id: "ar-days",
            label: "Average collection period",
            cells: [{ id: "ar-days-ans", answer: 60.83, tolerance: 0.1 }],
          },
        ],
      },
    },
    {
      kind: "callout",
      variant: "key",
      title: "Penyajian piutang",
      text: "Accounts receivable dilaporkan net of allowance. Long-term notes receivable diukur pada present value/amortized cost. Receivables yang hanya dijaminkan tetap berada dalam laporan perusahaan dan disertai kewajiban pinjaman.",
    },
  ],
};

const tm10: Reading = {
  tm: 10,
  title:
    "Valuation of Inventories: A Cost-Basis Approach — Bagian 1: Inventory Issues, Ownership, dan Inventoriable Costs",
  ref: "Kieso IFRS 5e · Ch. 7",
  intro:
    "Penilaian inventory dimulai dari pertanyaan paling mendasar: barang mana yang benar-benar dimiliki pada tanggal laporan dan biaya mana yang dapat melekat pada inventory. TM 10 memakai struktur Chapter 7 serta latihan kepemilikan dari Werth Company.",
  objectives: [
    "Membedakan inventory perusahaan dagang dan manufaktur serta sistem perpetual dan periodic.",
    "Menentukan goods included in inventory berdasarkan terms of sale, consignment, dan returns.",
    "Membedakan product costs dan period costs dalam pengukuran inventory.",
    "Menyusun koreksi saldo inventory berdasarkan kasus kepemilikan.",
  ],
  blocks: [
    ...TM10_LEARNING_FLOW,
    { kind: "h2", text: "A. Klasifikasi Inventory dan Sistem Pencatatan" },
    {
      kind: "table",
      headers: ["Entitas / sistem", "Pokok perlakuan"],
      rows: [
        [
          "Merchandising company",
          "Satu kelompok inventory berupa merchandise inventory/barang dagang.",
        ],
        [
          "Manufacturing company",
          "Raw materials, work in process, dan finished goods inventory.",
        ],
        [
          "Perpetual inventory system",
          "Perubahan inventory dan cost of goods sold ditelusuri terus-menerus.",
        ],
        [
          "Periodic inventory system",
          "Purchases dikumpulkan selama periode; COGS ditentukan setelah physical count.",
        ],
      ],
    },
    { kind: "h2", text: "B. Goods Included in Inventory" },
    {
      kind: "p",
      text: "Inventory hanya mencakup barang yang hak kepemilikannya berada pada entitas pada tanggal pelaporan. Terms of sale menentukan kapan title berpindah; barang konsinyasi tetap menjadi inventory consignor, bukan consignee.",
    },
    ...WERTH_INVENTORY_OWNERSHIP_CASE.promptBlocks,
    {
      kind: "interactive-match",
      spec: {
        title: "Kepemilikan Inventory — Adaptasi Exercise Werth Company",
        instruction:
          "Tentukan perlakuan terhadap physical inventory Werth per 31 Desember 2025.",
        choices: [
          "Tambahkan ke inventory",
          "Keluarkan dari inventory",
          "Tetap termasuk inventory; tidak mengubah count",
          "Bukan milik Werth; tidak ditambahkan",
        ],
        pairs: [
          {
            id: "wer-browser",
            prompt:
              "Barang Browser $10,420 dikirim FOB shipping point sebelum akhir tahun tetapi belum diterima/dihitung",
            answer: "Tambahkan ke inventory",
          },
          {
            id: "wer-bubbey",
            prompt:
              "Barang dijual ke Bubbey FOB destination, masih in transit dan sudah termasuk hitungan",
            answer: "Tetap termasuk inventory; tidak mengubah count",
          },
          {
            id: "wer-dudley",
            prompt:
              "Barang dari Dudley FOB destination telah diterima 31 Desember dan sudah termasuk hitungan",
            answer: "Tetap termasuk inventory; tidak mengubah count",
          },
          {
            id: "wer-minsky",
            prompt:
              "Barang Minsky $8,540 diterima setelah physical count pada 31 Desember",
            answer: "Tambahkan ke inventory",
          },
          {
            id: "wer-jackel",
            prompt:
              "Barang konsinyasi Jackel $10,438 dimasukkan dalam hitungan Werth sebagai consignee",
            answer: "Keluarkan dari inventory",
          },
          {
            id: "wer-sims",
            prompt:
              "Barang dijual ke Sims FOB shipping point telah dikirim setelah count; cost $11,520 masih termasuk hitungan",
            answer: "Keluarkan dari inventory",
          },
          {
            id: "wer-return",
            prompt:
              "Barang retur pelanggan senilai cost $1,500 diterima baik tetapi belum masuk hitungan",
            answer: "Tambahkan ke inventory",
          },
        ],
      },
    },
    {
      kind: "builder",
      instructions:
        "Mulai dari physical count Werth. Masukkan hanya penyesuaian yang mengubah kuantitas/biaya inventory pada tanggal pelaporan.",
      spec: {
        entity: "Werth Company",
        title: "Corrected Ending Inventory Schedule",
        period: "December 31, 2025",
        currency: "$",
        lines: [
          {
            id: "wer-count",
            kind: "given",
            label: "Physical inventory count",
            amount: 234890,
          },
          {
            id: "wer-add-browser",
            kind: "input",
            label: "Add: Browser — FOB shipping point in transit",
            amount: 10420,
            indent: 1,
          },
          {
            id: "wer-add-minsky",
            kind: "input",
            label: "Add: Minsky — received after count",
            amount: 8540,
            indent: 1,
          },
          {
            id: "wer-less-jackel",
            kind: "input",
            label: "Deduct: Jackel consigned inventory",
            amount: 10438,
            bracket: true,
            indent: 1,
          },
          {
            id: "wer-less-sims",
            kind: "input",
            label: "Deduct: Sims — FOB shipping point sale",
            amount: 11520,
            bracket: true,
            indent: 1,
          },
          {
            id: "wer-add-return",
            kind: "input",
            label: "Add: Returned goods in good condition",
            amount: 1500,
            indent: 1,
          },
          {
            id: "wer-correct",
            kind: "computed",
            label: "Proper ending inventory",
            amount: 233392,
            bold: true,
            rule: "double",
            compute: [
              { id: "wer-count" },
              { id: "wer-add-browser" },
              { id: "wer-add-minsky" },
              { id: "wer-less-jackel", sign: -1 },
              { id: "wer-less-sims", sign: -1 },
              { id: "wer-add-return" },
            ],
          },
        ],
      },
    },
    {
      kind: "callout",
      variant: "info",
      title: "Mengapa dua item tidak mengubah schedule?",
      text: "Bubbey dan Dudley sudah berada dalam physical count dan memang masih/sudah menjadi milik Werth pada tanggal laporan. Keduanya dapat memerlukan pembetulan pencatatan akun terkait, tetapi tidak mengubah jumlah inventory yang sudah dihitung.",
    },
    { kind: "h2", text: "C. Correcting Entries — Werth Company" },
    {
      kind: "p",
      text: "Exercise E7.13 menyatakan bahwa Werth memakai **periodic inventory method**. Karena itu, item yang hanya membuat physical ending inventory salah diperbaiki melalui corrected ending inventory schedule di atas. Jurnal berikut memperbaiki transaksi yang sudah atau belum dicatat pada akun terkait: penjualan FOB destination ke Bubbey belum boleh diakui, pembelian Dudley telah menjadi kewajiban Werth saat barang diterima, dan retur pelanggan yang diterima kembali harus mengurangi penjualan/piutang.",
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Correcting Entries — Werth Company (Periodic Method)",
        instruction:
          "Susun correcting entries akun terkait. Proper ending inventory sebesar $233,392 tetap digunakan dalam proses penutupan periodic; jangan menduplikasi penyesuaian physical inventory di jurnal ini.",
        currency: "$",
        accountChoices: [
          "Sales Revenue",
          "Accounts Receivable",
          "Purchases",
          "Accounts Payable",
          "Sales Returns and Allowances",
          "Inventory",
          "Cost of Goods Sold",
        ],
        lines: [
          {
            id: "wer-j-bubbey-dr",
            group:
              "Bubbey — reverse sale recorded too early; FOB destination, goods received January 3",
            account: "Sales Revenue",
            debit: 12800,
          },
          {
            id: "wer-j-bubbey-cr",
            account: "Accounts Receivable",
            credit: 12800,
          },
          {
            id: "wer-j-dudley-dr",
            group:
              "Dudley — goods received December 31; invoice not yet recorded",
            account: "Purchases",
            debit: 15630,
          },
          { id: "wer-j-dudley-cr", account: "Accounts Payable", credit: 15630 },
          {
            id: "wer-j-return-dr",
            group:
              "Customer return — goods accepted in good condition; credit not yet recorded",
            account: "Sales Returns and Allowances",
            debit: 2600,
          },
          {
            id: "wer-j-return-cr",
            account: "Accounts Receivable",
            credit: 2600,
          },
        ],
      },
    },
    {
      kind: "table",
      headers: [
        "Item lain pada exercise",
        "Mengapa tidak dimasukkan sebagai jurnal akun terkait di latihan ini?",
      ],
      rows: [
        [
          "Browser dan Minsky",
          "Purchase/invoice telah dicatat; koreksinya adalah memasukkan barang yang dimiliki ke corrected ending inventory.",
        ],
        [
          "Jackel consignment",
          "Werth hanya consignee; barang dikeluarkan dari corrected ending inventory.",
        ],
        [
          "Sims sale — FOB shipping point",
          "Sale telah tepat diakui; barang yang masih ikut terhitung dikeluarkan dari corrected ending inventory.",
        ],
      ],
    },
    WERTH_INVENTORY_OWNERSHIP_CASE.explanationBlock,

    { kind: "h2", text: "D. Costs Included in Inventory" },
    {
      kind: "p",
      text: "Kieso menjelaskan product costs sebagai biaya yang melekat pada inventory: costs of purchase, conversion costs, dan other costs yang **normal** serta diperlukan untuk membawa inventory ke lokasi dan kondisi siap dijual. Selling expenses dan general administrative expenses pada umumnya merupakan period costs; **abnormal freight, abnormal handling, serta abnormal waste/spoilage** dibebankan sebagai expense periode berjalan.",
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Product Cost atau Period Cost?",
        instruction:
          "Klasifikasikan komponen biaya berdasarkan prinsip Chapter 7.",
        choices: ["Product cost — inventory", "Period cost — expense"],
        pairs: [
          {
            id: "cost-purchase",
            prompt: "Purchase price barang untuk dijual",
            answer: "Product cost — inventory",
          },
          {
            id: "cost-import",
            prompt: "Import duties terkait pembelian inventory",
            answer: "Product cost — inventory",
          },
          {
            id: "cost-freightin",
            prompt:
              "Normal transportation/handling yang diperlukan untuk membawa inventory ke lokasi dan kondisi siap dijual",
            answer: "Product cost — inventory",
          },
          {
            id: "cost-abnormal",
            prompt:
              "Abnormal freight/handling atau abnormal wasted materials (spoilage)",
            answer: "Period cost — expense",
          },
          {
            id: "cost-selling",
            prompt: "Selling expenses biasa",
            answer: "Period cost — expense",
          },
          {
            id: "cost-admin",
            prompt: "General and administrative expenses biasa",
            answer: "Period cost — expense",
          },
        ],
      },
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Abnormal costs tidak dikapitalisasi",
      text: "Abnormal freight, abnormal handling costs, dan jumlah abnormal dari wasted materials/spoilage tidak dicatat sebagai inventory cost. Selisih di atas tingkat normal dibebankan sebagai expense pada periode berjalan.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Purchase discounts",
      text: "Dalam IFRS, purchase discounts dicatat sebagai pengurang cost of inventories. Jangan memperlakukannya sebagai pendapatan terpisah.",
    },

    {
      kind: "h2",
      text: "E. Periodic vs Perpetual — Logika Pencatatan Inventory",
    },
    {
      kind: "p",
      text: "Mahasiswa sering keliru mencampur akun periodic dan perpetual. Pada **perpetual system**, pembelian barang dagang langsung masuk Inventory dan COGS dicatat setiap terjadi penjualan. Pada **periodic system**, pembelian dikumpulkan di akun Purchases, lalu COGS dihitung pada akhir periode melalui beginning inventory, net purchases, dan ending inventory.",
    },
    {
      kind: "table",
      headers: ["Transaksi", "Perpetual system", "Periodic system"],
      rows: [
        [
          "Pembelian barang dagang",
          "Dr Inventory; Cr Cash/A/P",
          "Dr Purchases; Cr Cash/A/P",
        ],
        [
          "Freight-in normal",
          "Dr Inventory; Cr Cash/A/P",
          "Dr Freight-in; Cr Cash/A/P",
        ],
        [
          "Purchase discount/return",
          "Mengurangi Inventory",
          "Mengurangi Purchases melalui akun Purchase Discounts/Purchase Returns",
        ],
        [
          "Penjualan barang dagang",
          "Dr Cash/A/R; Cr Sales Revenue dan Dr Cost of Goods Sold; Cr Inventory",
          "Dr Cash/A/R; Cr Sales Revenue. COGS baru ditentukan saat akhir periode.",
        ],
        [
          "Akhir periode",
          "Saldo Inventory sudah diperbarui secara berjalan; tetap perlu physical count untuk shrinkage/error.",
          "COGS dihitung: beginning inventory + net purchases − ending inventory.",
        ],
      ],
    },
    {
      kind: "formula",
      text: "Net purchases = Purchases − Purchase returns and allowances − Purchase discounts + Freight-in",
      note: "Gunakan struktur ini terutama saat soal memakai periodic inventory system.",
    },
    {
      kind: "table-fill",
      spec: {
        title: "Inventory Cost Capitalization Drill — PT Lumin",
        instruction:
          "Invoice price Rp120.000; purchase returns Rp5.000; purchase discount Rp2.400; freight-in normal Rp7.500; normal handling Rp3.000; abnormal storage Rp1.200; delivery to customers Rp4.000. Hitung komponen yang boleh dikapitalisasi dan yang menjadi period expense.",
        currency: "Rp",
        headers: ["Komponen", "Jawaban"],
        rows: [
          {
            id: "lumin-net-purchase",
            label: "Net purchase price sebelum freight/handling",
            cells: [{ id: "lumin-net-purchase-a", answer: 112600 }],
          },
          {
            id: "lumin-inventoriable",
            label: "Total inventoriable cost",
            cells: [{ id: "lumin-inventoriable-a", answer: 123100 }],
          },
          {
            id: "lumin-period",
            label:
              "Period expense dari abnormal storage dan delivery to customers",
            cells: [{ id: "lumin-period-a", answer: 5200 }],
          },
        ],
      },
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Decision Drill — Goods Included in Inventory",
        instruction:
          "Tentukan apakah item berikut masuk inventory pembeli/seller pada tanggal laporan.",
        choices: [
          "Inventory pembeli",
          "Inventory seller",
          "Inventory consignor",
          "Bukan inventory entitas pelapor",
        ],
        pairs: [
          {
            id: "inv-fob-sp-buyer",
            prompt:
              "Barang dibeli FOB shipping point, sudah dikirim tetapi belum diterima pembeli saat tanggal laporan",
            answer: "Inventory pembeli",
          },
          {
            id: "inv-fob-dest-seller",
            prompt:
              "Barang dijual FOB destination, masih dalam perjalanan ke pelanggan",
            answer: "Inventory seller",
          },
          {
            id: "inv-consign",
            prompt:
              "Barang konsinyasi berada di toko consignee tetapi belum terjual ke customer akhir",
            answer: "Inventory consignor",
          },
          {
            id: "inv-consignee",
            prompt:
              "Barang konsinyasi yang berada di gudang consignee ketika consignee menjadi entitas pelapor",
            answer: "Bukan inventory entitas pelapor",
          },
        ],
      },
    },
    {
      kind: "callout",
      variant: "key",
      title: "Checklist cepat TM 10",
      text: "Sebelum menghitung inventory, jawab tiga pertanyaan: (1) siapa pemilik barang pada reporting date; (2) apakah biayanya normal dan perlu untuk membawa barang ke kondisi/lokasi siap dijual; (3) sistem pencatatannya periodic atau perpetual.",
    },
  ],
};

const tm11: Reading = {
  tm: 11,
  title:
    "Valuation of Inventories: A Cost-Basis Approach — Bagian 2: FIFO, Average-Cost, dan Inventory Errors",
  ref: "Kieso IFRS 5e · Ch. 7",
  intro:
    "Untuk item yang dapat diidentifikasi secara khusus, IFRS menggunakan specific identification. Untuk unit inventory yang saling dapat dipertukarkan dan dibeli pada biaya berbeda, IFRS menggunakan FIFO atau average-cost. TM 11 mempraktikkan schedule Call-Mart dan menganalisis dampak inventory errors.",
  objectives: [
    "Menjelaskan kapan specific identification digunakan serta keterbatasannya.",
    "Menghitung ending inventory dan cost of goods sold menggunakan FIFO dan average-cost.",
    "Membedakan weighted-average periodic dengan moving-average perpetual.",
    "Menjelaskan pengaruh inventory errors terhadap laporan keuangan.",
  ],
  blocks: [
    ...TM11_LEARNING_FLOW,
    { kind: "h2", text: "A. Specific Identification" },
    {
      kind: "p",
      text: "Menurut Kieso, **specific identification** digunakan ketika inventory tidak ordinarily interchangeable atau barang/jasa diproduksi dan dipisahkan untuk proyek khusus. Metode ini menelusuri biaya aktual unit yang dijual ke cost of goods sold dan biaya aktual unit yang tersisa ke inventory. Penerapannya paling realistis untuk barang bernilai tinggi dan mudah dibedakan, seperti rumah tertentu, mobil, perhiasan, atau special orders.",
    },
    {
      kind: "table",
      headers: ["Aspek specific identification", "Penjelasan"],
      rows: [
        [
          "Kekuatan",
          "Mencocokkan actual cost dengan actual revenue dan menyajikan ending inventory pada actual cost.",
        ],
        [
          "Keterbatasan",
          "Tidak praktis untuk unit massal/interchangeable dan dapat membuka peluang pemilihan unit untuk memengaruhi laba.",
        ],
        ["Jika tidak praktis", "Gunakan FIFO atau average-cost sesuai IFRS."],
      ],
    },
    {
      kind: "table",
      headers: [
        "Call-Mart — specific units tersisa",
        "Units",
        "Unit cost",
        "Total cost",
      ],
      rows: [
        ["March 2 purchase", "1,000", "€4.00", "€4,000"],
        ["March 15 purchase", "3,000", "€4.40", "€13,200"],
        ["March 30 purchase", "2,000", "€4.75", "€9,500"],
        ["Ending inventory — specific identification", "6,000", "—", "€26,700"],
        ["Cost of goods sold (€43,900 − €26,700)", "—", "—", "€17,200"],
      ],
    },
    {
      kind: "callout",
      variant: "info",
      title: "Jangan salah membaca hasil angka",
      text: "Pada data Call-Mart, ending inventory specific identification kebetulan sama dengan moving-average perpetual, yaitu €26,700. Alasan perhitungannya berbeda: specific identification mengikuti unit aktual yang tersisa, sedangkan moving-average menghitung rata-rata bergerak setelah pembelian.",
    },

    { kind: "h2", text: "B. FIFO dan Average-Cost dalam IFRS" },
    {
      kind: "p",
      text: "Untuk inventory yang tidak dapat diidentifikasi secara khusus per unit, IFRS mengizinkan **FIFO** dan **average-cost**. FIFO berasumsi unit pertama dibeli adalah unit pertama dibebankan ke COGS; average-cost meratakan biaya unit sejenis yang tersedia.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "LIFO bukan metode IFRS",
      text: "Kieso membahas LIFO dalam appendix untuk perbandingan, tetapi IFRS tidak mengizinkan penggunaan LIFO untuk pengukuran inventory dalam laporan berbasis IFRS.",
    },

    { kind: "h2", text: "C. Worked Schedule — Call-Mart SpA" },
    ...CALL_MART_COST_FLOW_CASE.promptBlocks,
    {
      kind: "table",
      headers: ["Tanggal", "Transaksi"],
      rows: [
        ["March 2", "Purchase 2,000 units @ €4.00"],
        ["March 15", "Purchase 6,000 units @ €4.40"],
        ["March 19", "Sold/issued 4,000 units"],
        ["March 30", "Purchase 2,000 units @ €4.75"],
        [
          "Total available",
          "10,000 units; cost of goods available for sale €43,900; ending inventory 6,000 units",
        ],
      ],
    },
    {
      kind: "table-fill",
      spec: {
        title: "Cost Flow Comparison — Call-Mart SpA",
        instruction:
          "Isi ending inventory dan cost of goods sold untuk metode yang diberikan. Gunakan angka ilustrasi Kieso.",
        currency: "€",
        headers: ["Method", "Ending inventory", "Cost of goods sold"],
        rows: [
          {
            id: "call-wa",
            label: "Weighted-average — periodic",
            cells: [
              { id: "call-wa-end", answer: 26340 },
              { id: "call-wa-cogs", answer: 17560 },
            ],
          },
          {
            id: "call-ma",
            label: "Moving-average — perpetual",
            cells: [
              { id: "call-ma-end", answer: 26700 },
              { id: "call-ma-cogs", answer: 17200 },
            ],
          },
          {
            id: "call-fifo",
            label: "FIFO — periodic/perpetual",
            cells: [
              { id: "call-fifo-end", answer: 27100 },
              { id: "call-fifo-cogs", answer: 16800 },
            ],
          },
        ],
      },
    },
    {
      kind: "table",
      headers: ["Metode", "Penalaran utama"],
      rows: [
        [
          "Weighted-average periodic",
          "Average unit cost €4.39; ending inventory 6,000 × €4.39 = €26,340.",
        ],
        [
          "Moving-average perpetual",
          "Average baru dihitung setiap pembelian; setelah March 30 carrying cost ending inventory menjadi €26,700.",
        ],
        [
          "FIFO",
          "Ending inventory terdiri dari unit terbaru; hasil periodic dan perpetual sama pada FIFO.",
        ],
      ],
    },
    CALL_MART_COST_FLOW_CASE.explanationBlock,
    {
      kind: "callout",
      variant: "key",
      title: "Saat harga meningkat",
      text: "Dalam ilustrasi Kieso dengan harga yang meningkat, FIFO menghasilkan ending inventory lebih tinggi dan COGS lebih rendah dibanding average-cost; konsekuensinya gross profit dan net income FIFO lebih tinggi.",
    },

    {
      kind: "h2",
      text: "D. Mini Drill — FIFO, Weighted-Average, dan Moving-Average",
    },
    {
      kind: "p",
      text: "Drill berikut menutup celah antara hafalan rumus dan penerapan angka. Kuncinya: **weighted-average periodic** memakai rata-rata seluruh goods available for sale selama periode; **moving-average perpetual** memperbarui rata-rata setelah setiap pembelian; **FIFO** membebankan unit yang paling awal diperoleh ke COGS.",
    },
    {
      kind: "table-fill",
      spec: {
        title: "Mini Cost-Flow Drill — PT Lumin",
        instruction:
          "Beginning inventory 100 unit @ Rp10; purchase 200 unit @ Rp12; sale 180 unit; purchase 100 unit @ Rp14. Total units available 400; ending units 220; total cost available Rp4.800.",
        currency: "Rp",
        headers: ["Metode", "Ending inventory", "Cost of goods sold"],
        rows: [
          {
            id: "lumin-fifo",
            label: "FIFO — periodic/perpetual",
            cells: [
              { id: "lumin-fifo-end", answer: 2840 },
              { id: "lumin-fifo-cogs", answer: 1960 },
            ],
          },
          {
            id: "lumin-wa",
            label: "Weighted-average — periodic",
            cells: [
              { id: "lumin-wa-end", answer: 2640 },
              { id: "lumin-wa-cogs", answer: 2160 },
            ],
          },
          {
            id: "lumin-ma",
            label: "Moving-average — perpetual",
            cells: [
              { id: "lumin-ma-end", answer: 2760 },
              { id: "lumin-ma-cogs", answer: 2040 },
            ],
          },
        ],
      },
    },
    {
      kind: "table",
      headers: ["Metode", "Cara membaca jawaban PT Lumin"],
      rows: [
        [
          "FIFO",
          "COGS berasal dari 100 unit @ Rp10 dan 80 unit @ Rp12 = Rp1.960; ending inventory berasal dari unit terbaru = Rp2.840.",
        ],
        [
          "Weighted-average periodic",
          "Average cost = Rp4.800 ÷ 400 unit = Rp12; ending inventory 220 × Rp12 = Rp2.640.",
        ],
        [
          "Moving-average perpetual",
          "Setelah purchase pertama, average = Rp3.400 ÷ 300 = Rp11,333; sale 180 menghasilkan COGS Rp2.040; sisa Rp1.360 lalu ditambah purchase Rp1.400 = ending Rp2.760.",
        ],
      ],
    },

    { kind: "h2", text: "E. Effect of Inventory Errors" },
    {
      kind: "p",
      text: "Kesalahan ending inventory memengaruhi statement of financial position dan income statement. Dalam sistem periodic, ending inventory yang understated akan membuat COGS overstated dan net income understated; jika persediaan tahun berikutnya benar, efek laba akan berbalik pada periode berikutnya.",
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Dampak Kesalahan Ending Inventory",
        instruction:
          "Tentukan dampak pada periode berjalan ketika beginning inventory dan purchases telah dicatat benar.",
        choices: ["Understated", "Overstated"],
        pairs: [
          {
            id: "err-under-inv",
            prompt: "Ending inventory ketika barang terlewat dari hitungan",
            answer: "Understated",
          },
          {
            id: "err-under-cogs",
            prompt: "Cost of goods sold ketika ending inventory understated",
            answer: "Overstated",
          },
          {
            id: "err-under-ni",
            prompt: "Net income ketika ending inventory understated",
            answer: "Understated",
          },
          {
            id: "err-under-re",
            prompt: "Retained earnings ketika ending inventory understated",
            answer: "Understated",
          },
          {
            id: "err-over-cogs",
            prompt: "Cost of goods sold ketika ending inventory overstated",
            answer: "Understated",
          },
          {
            id: "err-over-ni",
            prompt: "Net income ketika ending inventory overstated",
            answer: "Overstated",
          },
        ],
      },
    },
    {
      kind: "table-fill",
      spec: {
        title: "Two-Year Inventory Error Drill",
        instruction:
          "Asumsikan purchases dan sales benar. Jika error ending inventory tahun 2025 baru terkoreksi melalui physical count normal tahun 2026, tentukan dampak laba bersih tiap tahun.",
        currency: "Rp",
        headers: [
          "Skenario",
          "Dampak net income 2025",
          "Dampak net income 2026",
        ],
        rows: [
          {
            id: "err-over-18",
            label: "Ending inventory 2025 overstated Rp18.000",
            cells: [
              { id: "err-over-18-2025", answer: 18000 },
              { id: "err-over-18-2026", answer: -18000 },
            ],
          },
          {
            id: "err-under-12",
            label: "Ending inventory 2025 understated Rp12.000",
            cells: [
              { id: "err-under-12-2025", answer: -12000 },
              { id: "err-under-12-2026", answer: 12000 },
            ],
          },
        ],
        feedback:
          "Gunakan tanda positif untuk overstated dan tanda negatif untuk understated. Error ending inventory tahun berjalan menjadi beginning inventory tahun berikutnya sehingga efek laba berbalik.",
      },
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Koneksi ke Simulasi UAS",
      text: "Schedule Call-Mart, ownership adjustment Werth, dan mini drill PT Lumin menjadi fondasi latihan UAS untuk inventory cost-basis sebelum masuk LCNRV, gross profit method, dan retail inventory method.",
    },
  ],
};

const tm12: Reading = {
  tm: 12,
  title:
    "Inventories: Additional Valuation Issues — Bagian 1: LCNRV, Write-Down, dan Valuation Bases",
  ref: "Kieso IFRS 5e · Ch. 8",
  intro:
    "TM 12 memindahkan fokus dari biaya historis ke recoverability inventory. Ketika manfaat ekonomi inventory turun di bawah cost, IFRS mengharuskan pengukuran pada lower-of-cost-or-net realizable value (LCNRV) dan memungkinkan recovery terbatas apabila NRV pulih.",
  objectives: [
    "Menghitung net realizable value dan menerapkan LCNRV secara tepat.",
    "Membedakan penerapan LCNRV item-by-item, kelompok terkait, dan total inventory.",
    "Mencatat write-down dan recovery inventory menggunakan allowance account.",
    "Menjelaskan valuation bases lain dan purchase commitment yang menjadi onerous contract.",
  ],
  blocks: [
    ...TM12_LEARNING_FLOW,
    { kind: "h2", text: "A. Net Realizable Value dan LCNRV" },
    {
      kind: "p",
      text: "Inventory awalnya dicatat pada cost. Apabila utility atau revenue-producing ability turun di bawah cost akibat kerusakan, keusangan, atau perubahan harga, inventory harus diturunkan ke **net realizable value (NRV)**. NRV adalah estimasi selling price dalam kegiatan normal dikurangi estimated cost to complete dan estimated cost to sell.",
    },
    {
      kind: "formula",
      text: "NRV = Estimated selling price − Estimated cost to complete − Estimated cost to sell",
      note: "Inventory carrying amount = lower of cost or NRV pada setiap reporting date.",
    },
    ...MANDER_NRV_CASE.promptBlocks,
    {
      kind: "builder",
      instructions:
        "Hitung NRV dan loss on inventory write-down untuk unfinished inventory berdasarkan Illustration 8.1.",
      spec: {
        entity: "Mander AG",
        title: "Computation of Net Realizable Value",
        period: "Illustration 8.1",
        currency: "€",
        lines: [
          {
            id: "man-selling",
            kind: "given",
            label: "Inventory value—unfinished / estimated selling price",
            amount: 1000,
          },
          {
            id: "man-complete",
            kind: "input",
            label: "Less: Estimated cost of completion",
            amount: 50,
            bracket: true,
            indent: 1,
          },
          {
            id: "man-sell-cost",
            kind: "input",
            label: "Estimated cost to sell",
            amount: 200,
            bracket: true,
            indent: 1,
          },
          {
            id: "man-nrv",
            kind: "computed",
            label: "Net realizable value",
            amount: 750,
            rule: "double",
            bold: true,
            compute: [
              { id: "man-selling" },
              { id: "man-complete", sign: -1 },
              { id: "man-sell-cost", sign: -1 },
            ],
          },
          {
            id: "man-cost",
            kind: "given",
            label: "Inventory cost",
            amount: 950,
          },
          {
            id: "man-loss",
            kind: "computed",
            label: "Loss on inventory write-down",
            amount: 200,
            rule: "double",
            bold: true,
            compute: [{ id: "man-cost" }, { id: "man-nrv", sign: -1 }],
          },
        ],
      },
    },
    MANDER_NRV_CASE.explanationBlock,

    { kind: "h3", text: "UAS Quick Drill — LCNRV per Unit" },
    {
      kind: "p",
      text: "Pola UAS sering memberi data per unit: cost, selling price, estimated cost to complete, dan estimated selling cost. Langkahnya selalu sama: hitung NRV terlebih dahulu, lalu ambil nilai yang lebih rendah antara cost dan NRV.",
    },
    {
      kind: "table-fill",
      spec: {
        title: "Per-Unit LCNRV Drill — Produk Z, ALPHA, dan 2005WSC",
        instruction:
          "Hitung NRV per unit dan carrying amount LCNRV. Jangan langsung memilih NRV jika cost lebih rendah.",
        currency: "Rp",
        headers: [
          "Item",
          "Cost",
          "Selling price",
          "Complete + sell cost",
          "NRV",
          "LCNRV carrying amount",
        ],
        rows: [
          {
            id: "lcnrv-z",
            label: "Produk Z",
            cells: [
              { id: "lcnrv-z-cost", readonly: true, display: "150" },
              { id: "lcnrv-z-sell", readonly: true, display: "190" },
              { id: "lcnrv-z-extra", readonly: true, display: "20 + 11" },
              { id: "lcnrv-z-nrv", answer: 159 },
              { id: "lcnrv-z-carry", answer: 150 },
            ],
          },
          {
            id: "lcnrv-alpha",
            label: "Produk ALPHA",
            cells: [
              { id: "lcnrv-alpha-cost", readonly: true, display: "85" },
              { id: "lcnrv-alpha-sell", readonly: true, display: "97" },
              { id: "lcnrv-alpha-extra", readonly: true, display: "8 + 6" },
              { id: "lcnrv-alpha-nrv", answer: 83 },
              { id: "lcnrv-alpha-carry", answer: 83 },
            ],
          },
          {
            id: "lcnrv-2005wsc",
            label: "Produk 2005WSC",
            cells: [
              { id: "lcnrv-2005wsc-cost", readonly: true, display: "18" },
              { id: "lcnrv-2005wsc-sell", readonly: true, display: "25" },
              { id: "lcnrv-2005wsc-extra", readonly: true, display: "4 + 6" },
              { id: "lcnrv-2005wsc-nrv", answer: 15 },
              { id: "lcnrv-2005wsc-carry", answer: 15 },
            ],
          },
        ],
      },
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Kesalahan UAS yang sering muncul",
      text: "Mahasiswa sering berhenti pada NRV. Padahal LCNRV membutuhkan langkah kedua: bandingkan NRV dengan cost dan pilih angka yang lebih rendah.",
    },

    { kind: "h2", text: "B. LCNRV Item-by-Item — Jinn-Feng Foods" },
    {
      kind: "p",
      text: "Kieso menggunakan Jinn-Feng Foods untuk menunjukkan bahwa setiap jenis makanan dibandingkan antara cost dan NRV. Dalam kebanyakan situasi, item-by-item merupakan basis utama karena penurunan satu item tidak tertutup oleh kenaikan nilai item lain.",
    },
    ...JINN_FENG_LCNRV_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Final Inventory Value — Jinn-Feng Foods",
        instruction:
          "Isi final inventory value untuk setiap food item menggunakan LCNRV item-by-item, lalu masukkan total final inventory.",
        currency: "¥",
        headers: [
          "Food",
          "Cost",
          "Net realizable value",
          "Final inventory value",
        ],
        rows: [
          {
            id: "jinn-spinach",
            label: "Spinach",
            cells: [
              { id: "jinn-spinach-cost", readonly: true, display: "¥80,000" },
              { id: "jinn-spinach-nrv", readonly: true, display: "¥120,000" },
              { id: "jinn-spinach-final", answer: 80000 },
            ],
          },
          {
            id: "jinn-carrots",
            label: "Carrots",
            cells: [
              { id: "jinn-carrots-cost", readonly: true, display: "¥100,000" },
              { id: "jinn-carrots-nrv", readonly: true, display: "¥110,000" },
              { id: "jinn-carrots-final", answer: 100000 },
            ],
          },
          {
            id: "jinn-beans",
            label: "Cut beans",
            cells: [
              { id: "jinn-beans-cost", readonly: true, display: "¥50,000" },
              { id: "jinn-beans-nrv", readonly: true, display: "¥40,000" },
              { id: "jinn-beans-final", answer: 40000 },
            ],
          },
          {
            id: "jinn-peas",
            label: "Peas",
            cells: [
              { id: "jinn-peas-cost", readonly: true, display: "¥90,000" },
              { id: "jinn-peas-nrv", readonly: true, display: "¥72,000" },
              { id: "jinn-peas-final", answer: 72000 },
            ],
          },
          {
            id: "jinn-mixed",
            label: "Mixed vegetables",
            cells: [
              { id: "jinn-mixed-cost", readonly: true, display: "¥95,000" },
              { id: "jinn-mixed-nrv", readonly: true, display: "¥92,000" },
              { id: "jinn-mixed-final", answer: 92000 },
            ],
          },
          {
            id: "jinn-total",
            label: "Total final inventory value — item-by-item",
            cells: [
              { id: "jinn-total-cost", readonly: true, display: "¥415,000" },
              { id: "jinn-total-nrv", readonly: true, display: "¥434,000" },
              { id: "jinn-total-final", answer: 384000 },
            ],
          },
        ],
      },
    },
    {
      kind: "table",
      headers: [
        "Basis penerapan Jinn-Feng",
        "Inventory carrying amount",
        "Makna",
      ],
      rows: [
        [
          "Individual items",
          "¥384,000",
          "Penurunan tiap item segera tercermin; nilai terendah.",
        ],
        [
          "Major groups: frozen dan canned",
          "¥394,000",
          "Kenaikan NRV sebagian meng-offset penurunan dalam kelompok.",
        ],
        [
          "Total inventory",
          "¥415,000",
          "Kenaikan NRV seluruh item meng-offset penurunan; paling tidak konservatif.",
        ],
      ],
    },
    JINN_FENG_LCNRV_CASE.explanationBlock,

    { kind: "h2", text: "C. Recording Write-Down dan Recovery — Ricardo SpA" },
    {
      kind: "p",
      text: "Kieso membandingkan cost-of-goods-sold method dan loss method. Untuk latihan ini digunakan **loss method dengan allowance account** karena kerugian penurunan NRV terlihat terpisah dalam income statement dan cost tetap dapat dipertahankan dalam catatan inventory.",
    },
    ...RICARDO_LCNRV_RECOVERY_CASE.promptBlocks,
    {
      kind: "table",
      headers: ["Data Ricardo SpA", "Jumlah"],
      rows: [
        ["Ending inventory at cost", "€82,000"],
        ["Ending inventory at NRV", "€70,000"],
        ["Required allowance / write-down", "€12,000"],
        ["Subsequent NRV after recovery", "€74,000"],
        ["Allowance needed after recovery", "€8,000"],
        ["Recovery amount", "€4,000"],
      ],
    },
    {
      kind: "journal-builder",
      spec: {
        title: "LCNRV Write-Down and Recovery — Ricardo SpA (Loss Method)",
        instruction:
          "Susun jurnal menggunakan allowance account. Recovery tidak boleh melampaui write-down semula.",
        currency: "€",
        accountChoices: [
          "Loss Due to Decline of Inventory to Net Realizable Value",
          "Allowance to Reduce Inventory to Net Realizable Value",
          "Recovery of Inventory Loss",
          "Inventory",
          "Cost of Goods Sold",
        ],
        lines: [
          {
            id: "ric-write-dr",
            group: "Write-down: cost €82,000; NRV €70,000",
            account: "Loss Due to Decline of Inventory to Net Realizable Value",
            debit: 12000,
          },
          {
            id: "ric-write-cr",
            account: "Allowance to Reduce Inventory to Net Realizable Value",
            credit: 12000,
          },
          {
            id: "ric-rec-dr",
            group: "Subsequent recovery: NRV rises from €70,000 to €74,000",
            account: "Allowance to Reduce Inventory to Net Realizable Value",
            debit: 4000,
          },
          {
            id: "ric-rec-cr",
            account: "Recovery of Inventory Loss",
            credit: 4000,
          },
        ],
      },
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Batas recovery IFRS",
      text: "Recovery diakui hanya sejauh membalik write-down sebelumnya. Inventory tidak boleh dilaporkan di atas original cost.",
    },
    RICARDO_LCNRV_RECOVERY_CASE.explanationBlock,

    { kind: "h3", text: "Loss Method vs Cost-of-Goods-Sold Method" },
    {
      kind: "table",
      headers: ["Aspek", "Loss method", "Cost-of-goods-sold method"],
      rows: [
        [
          "Tujuan penyajian",
          "Menampilkan loss akibat penurunan NRV secara eksplisit.",
          "Menyerap write-down ke COGS sehingga lebih ringkas.",
        ],
        [
          "Akun debit saat write-down",
          "Loss Due to Decline of Inventory to NRV.",
          "Cost of Goods Sold.",
        ],
        [
          "Akun kredit saat memakai allowance",
          "Allowance to Reduce Inventory to NRV.",
          "Allowance to Reduce Inventory to NRV atau langsung Inventory, tergantung desain pencatatan.",
        ],
        [
          "Kapan cocok untuk latihan",
          "Saat soal menanyakan loss/recovery secara eksplisit.",
          "Saat soal menekankan COGS dan ending inventory setelah adjustment.",
        ],
      ],
      caption:
        "Kedua pendekatan dapat menghasilkan carrying amount inventory yang sama, tetapi klasifikasi income statement berbeda.",
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Pilih Metode Pencatatan LCNRV",
        instruction:
          "Pasangkan ciri soal dengan metode pencatatan yang paling tepat dibaca mahasiswa.",
        feedback:
          "Kata kunci soal menentukan akun yang dipakai. Jika soal menyebut loss method atau recovery, akun loss/recovery harus tampak eksplisit.",
        choices: ["Loss method", "Cost-of-goods-sold method", "Bukan LCNRV"],
        pairs: [
          {
            id: "lcnrv-method-1",
            prompt:
              "Soal meminta akun Recovery of Inventory Loss setelah NRV pulih.",
            answer: "Loss method",
            feedback: "Recovery loss muncul eksplisit pada loss method.",
          },
          {
            id: "lcnrv-method-2",
            prompt:
              "Soal meminta penyesuaian COGS akhir tahun akibat NRV lebih rendah dari cost.",
            answer: "Cost-of-goods-sold method",
            feedback: "Fokusnya COGS, bukan akun loss terpisah.",
          },
          {
            id: "lcnrv-method-3",
            prompt: "Soal hanya meminta pemilihan FIFO atau average-cost.",
            answer: "Bukan LCNRV",
            feedback: "Itu cost flow assumption, bukan LCNRV write-down.",
          },
        ],
      },
    },

    { kind: "h2", text: "D. Other Valuation Issues dan Purchase Commitments" },
    {
      kind: "table",
      headers: ["Isu valuation Chapter 8", "Prinsip"],
      rows: [
        [
          "Agricultural produce / biological assets",
          "Pada kondisi yang ditetapkan IFRS, diukur menggunakan fair value/net realizable basis sebagaimana relevan.",
        ],
        [
          "Minerals dan mineral products",
          "NRV dapat digunakan ketika produk readily marketable, memiliki quoted price, dan costs of disposal dapat diprediksi.",
        ],
        [
          "Commodity broker-traders",
          "NRV relevan ketika commodity ditahan untuk dijual kembali dalam waktu singkat tanpa jasa tambahan signifikan.",
        ],
        [
          "Basket purchase",
          "Lump-sum cost dialokasikan berdasarkan relative standalone sales value.",
        ],
        [
          "Firm purchase commitment yang merugi",
          "Jika contract price melampaui market value dan kerugian diharapkan terjadi, akui loss dan purchase commitment liability.",
        ],
      ],
    },
    ...APRES_PURCHASE_COMMITMENT_CASE.promptBlocks,
    {
      kind: "journal-builder",
      spec: {
        title: "Onerous Purchase Commitment — Apres Paper AG",
        instruction:
          "Susun jurnal ketika timber-cutting contract €10,000,000 turun menjadi market price €7,000,000 pada tanggal laporan.",
        currency: "€",
        accountChoices: [
          "Unrealized Holding Gain or Loss—Income",
          "Purchase Commitment Liability",
          "Purchases (Inventory)",
          "Cash",
        ],
        lines: [
          {
            id: "apres-loss-dr",
            group:
              "December 31, 2025 — recognize decline in purchase commitment",
            account: "Unrealized Holding Gain or Loss—Income",
            debit: 3000000,
          },
          {
            id: "apres-loss-cr",
            account: "Purchase Commitment Liability",
            credit: 3000000,
          },
          {
            id: "apres-buy-dr1",
            group: "2026 — execute contract after liability recognized",
            account: "Purchases (Inventory)",
            debit: 7000000,
          },
          {
            id: "apres-buy-dr2",
            account: "Purchase Commitment Liability",
            debit: 3000000,
          },
          { id: "apres-buy-cr", account: "Cash", credit: 10000000 },
        ],
      },
    },
    APRES_PURCHASE_COMMITMENT_CASE.explanationBlock,

    {
      kind: "h2",
      text: "E. Pengayaan Praktik — Biological Assets, Agricultural Produce, dan Standalone Sales Value",
    },
    {
      kind: "callout",
      variant: "info",
      title: "Catatan kelas tambahan",
      text: "Blok ini adalah pengayaan praktik yang konsisten dengan Kieso IFRS Chapter 8 untuk memperjelas valuation bases khusus, tanpa mengganti materi inti LCNRV, write-down, recovery, dan purchase commitment.",
    },
    { kind: "h3", text: "Biological Asset vs Agricultural Produce" },
    {
      kind: "table",
      headers: ["Item", "Klasifikasi", "Perlakuan umum"],
      rows: [
        [
          "Pohon/sapi/tanaman hidup sebelum panen",
          "Biological asset",
          "Diukur pada fair value less costs to sell sesuai ketentuan IFRS terkait biological assets.",
        ],
        [
          "Buah/susu/hasil panen pada saat dipanen",
          "Agricultural produce",
          "Pada saat panen menjadi dasar pencatatan awal inventory.",
        ],
        [
          "Produk setelah dipanen dan siap dijual/diolah",
          "Inventory",
          "Setelah titik panen, perlakuan mengikuti inventory normal.",
        ],
      ],
      caption:
        "Pemisahan ini mencegah kesalahan mencampur aset biologis dengan persediaan hasil panen.",
    },
    {
      kind: "table-fill",
      spec: {
        title: "FreshGarden — Biological Asset dan Agricultural Produce",
        instruction:
          "Hitung carrying value pohon apel dan nilai awal inventory buah apel. Angka mengikuti catatan kelas sebagai latihan pengayaan.",
        currency: "Rp",
        headers: ["Output", "Jawaban"],
        rows: [
          {
            id: "fresh-net-change",
            label: "Perubahan bersih biological asset",
            cells: [{ id: "fresh-net-change-a", answer: 70000000 }],
          },
          {
            id: "fresh-carrying",
            label: "Carrying value pohon apel pada 31 Januari 2025",
            cells: [{ id: "fresh-carrying-a", answer: 370000000 }],
          },
          {
            id: "fresh-inventory",
            label: "Nilai awal inventory buah apel saat panen",
            cells: [{ id: "fresh-inventory-a", answer: 65000000 }],
          },
          {
            id: "fresh-sales",
            label: "Sales revenue jika buah dijual Rp67.000.000",
            cells: [{ id: "fresh-sales-a", answer: 67000000 }],
          },
          {
            id: "fresh-cogs",
            label: "COGS atas buah apel terjual",
            cells: [{ id: "fresh-cogs-a", answer: 65000000 }],
          },
        ],
      },
    },
    {
      kind: "journal-builder",
      spec: {
        title: "FreshGarden — Jurnal Pengayaan",
        instruction:
          "Susun jurnal utama untuk pembelian biological asset, perubahan fair value bersih, pengakuan hasil panen sebagai inventory, dan penjualan hasil panen.",
        feedback:
          "Pisahkan objek akuntansi: pohon apel tetap biological asset, sedangkan buah apel saat panen diakui sebagai inventory berdasarkan fair value less costs to sell.",
        currency: "Rp",
        accountChoices: [
          "Biological Asset",
          "Cash",
          "Unrealized Holding Gain or Loss—Income",
          "Inventory",
          "Sales Revenue",
          "Cost of Goods Sold",
        ],
        lines: [
          {
            id: "fresh-buy-dr",
            group: "Membeli pohon apel produktif",
            account: "Biological Asset",
            debit: 300000000,
          },
          {
            id: "fresh-buy-cr",
            group: "Membeli pohon apel produktif",
            account: "Cash",
            credit: 300000000,
          },
          {
            id: "fresh-gain-dr",
            group: "Perubahan fair value bersih",
            account: "Biological Asset",
            debit: 70000000,
          },
          {
            id: "fresh-gain-cr",
            group: "Perubahan fair value bersih",
            account: "Unrealized Holding Gain or Loss—Income",
            credit: 70000000,
          },
          {
            id: "fresh-harvest-dr",
            group: "Mengakui buah apel saat panen",
            account: "Inventory",
            debit: 65000000,
          },
          {
            id: "fresh-harvest-cr",
            group: "Mengakui buah apel saat panen",
            account: "Unrealized Holding Gain or Loss—Income",
            credit: 65000000,
          },
          {
            id: "fresh-sale-dr",
            group: "Menjual buah apel",
            account: "Cash",
            debit: 67000000,
          },
          {
            id: "fresh-sale-cr",
            group: "Menjual buah apel",
            account: "Sales Revenue",
            credit: 67000000,
          },
          {
            id: "fresh-cogs-dr",
            group: "Mengakui COGS buah apel",
            account: "Cost of Goods Sold",
            debit: 65000000,
          },
          {
            id: "fresh-cogs-cr",
            group: "Mengakui COGS buah apel",
            account: "Inventory",
            credit: 65000000,
          },
        ],
      },
    },
    { kind: "h3", text: "Relative Standalone Sales Value — Lump-Sum Purchase" },
    {
      kind: "p",
      text: "Jika beberapa item dibeli dalam satu harga gabungan, cost dialokasikan berdasarkan relative standalone sales value. Logikanya: cost mengikuti proporsi nilai jual relatif, bukan dibagi rata.",
    },
    {
      kind: "table",
      headers: ["Langkah", "Pertanyaan kontrol"],
      rows: [
        [
          "1. Tentukan total cost pembelian gabungan",
          "Berapa jumlah cost yang harus dialokasikan?",
        ],
        [
          "2. Tentukan standalone sales value tiap kelompok",
          "Berapa nilai jual relatif masing-masing item/lot?",
        ],
        [
          "3. Hitung proporsi nilai jual",
          "Standalone value item ÷ total standalone value.",
        ],
        ["4. Alokasikan cost", "Proporsi × total lump-sum cost."],
        [
          "5. Pisahkan COGS dan ending inventory",
          "Cost item terjual masuk COGS, sisanya tetap inventory.",
        ],
      ],
      caption:
        "Worksheet angka Woodland Developers dari catatan kelas dapat ditambahkan sebagai latihan final setelah seluruh angka kategori A/B/C diverifikasi dari gambar sumber.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Pemeriksaan manual — Woodland Developers",
      text: "Catatan kelas memuat contoh Woodland Developers, tetapi tidak semua angka kategori terlihat pada parsed text. Karena itu, materi ini memasukkan metode dan workflow, sedangkan worksheet angka penuh ditandai [Perlu pemeriksaan manual] sampai data tabel kategori terverifikasi.",
    },
  ],
};

const tm13: Reading = {
  tm: 13,
  title:
    "Inventories: Additional Valuation Issues — Bagian 2: Gross Profit, Retail Inventory, dan Analysis",
  ref: "Kieso IFRS 5e · Ch. 8",
  intro:
    "TM 13 berfokus pada estimasi ending inventory ketika physical count tidak praktis, terutama untuk interim reporting atau kerugian akibat bencana. Gross profit method dan retail inventory method harus dikerjakan dalam format schedule, bukan hanya menghafal rumus.",
  objectives: [
    "Menyusun schedule gross profit method secara formal.",
    "Menghitung ending inventory menggunakan retail inventory method.",
    "Menjelaskan conventional retail method sebagai pendekatan LCNRV.",
    "Menghitung dan menafsirkan inventory turnover serta average days to sell inventory.",
  ],
  blocks: [
    ...TM13_LEARNING_FLOW,
    { kind: "h2", text: "A. Gross Profit Method — Cetus SE" },
    {
      kind: "p",
      text: "Gross profit method digunakan untuk mengestimasi inventory ketika physical count tidak praktis, seperti laporan interim atau inventory yang rusak karena kebakaran. Kieso menekankan bahwa metode ini menghasilkan estimasi dan tidak menggantikan verifikasi physical inventory untuk pelaporan akhir.",
    },
    {
      kind: "formula",
      text: "Estimated ending inventory = Goods available at cost − Estimated cost of goods sold",
      note: "Estimated COGS = Net sales − estimated gross profit. Gross profit biasanya dinyatakan sebagai persentase dari selling price.",
    },
    ...CETUS_GROSS_PROFIT_CASE.promptBlocks,
    {
      kind: "builder",
      instructions:
        "Lengkapi schedule metode laba kotor berdasarkan Illustration 8.13. Gross profit rate adalah 30% dari sales.",
      spec: {
        entity: "Cetus SE",
        title: "Application of Gross Profit Method",
        period: "Illustration 8.13",
        currency: "€",
        lines: [
          {
            id: "cet-beg",
            kind: "given",
            label: "Beginning inventory, at cost",
            amount: 60000,
          },
          {
            id: "cet-purch",
            kind: "input",
            label: "Purchases, at cost",
            amount: 200000,
          },
          {
            id: "cet-avail",
            kind: "computed",
            label: "Goods available, at cost",
            amount: 260000,
            rule: "top",
            bold: true,
            compute: [{ id: "cet-beg" }, { id: "cet-purch" }],
          },
          {
            id: "cet-sales",
            kind: "given",
            label: "Sales, at selling price",
            amount: 280000,
          },
          {
            id: "cet-gp",
            kind: "input",
            label: "Less: Gross profit (30% × €280,000)",
            amount: 84000,
            bracket: true,
            indent: 1,
          },
          {
            id: "cet-cogs",
            kind: "computed",
            label: "Sales at cost / estimated COGS",
            amount: 196000,
            rule: "top",
            compute: [{ id: "cet-sales" }, { id: "cet-gp", sign: -1 }],
          },
          {
            id: "cet-ending",
            kind: "computed",
            label: "Approximate inventory, at cost",
            amount: 64000,
            rule: "double",
            bold: true,
            compute: [{ id: "cet-avail" }, { id: "cet-cogs", sign: -1 }],
          },
        ],
      },
    },
    {
      kind: "table",
      headers: ["Batas penggunaan gross profit method", "Konsekuensi"],
      rows: [
        [
          "Estimated value",
          "Physical inventory tetap perlu dilakukan untuk verifikasi; kerusakan atau theft tidak otomatis tertangkap.",
        ],
        [
          "Historical percentage",
          "Gross profit rate masa lalu dapat tidak representatif untuk periode kini.",
        ],
        [
          "Varying gross profit rates",
          "Jika department/product line berbeda, estimasi perlu dilakukan per kelompok yang seragam.",
        ],
      ],
    },
    CETUS_GROSS_PROFIT_CASE.explanationBlock,

    {
      kind: "h3",
      text: "UAS Quick Drill — Gross Profit Method dan Markup Conversion",
    },
    {
      kind: "table-fill",
      spec: {
        title: "Glaus Inc. — Gross Profit Method",
        instruction:
          "Hitung ending inventory dari beginning inventory, purchases, sales, dan gross profit rate on sales.",
        currency: "Rp",
        headers: ["Komponen", "Jumlah"],
        rows: [
          {
            id: "glaus-beg",
            label: "Beginning inventory",
            cells: [{ id: "glaus-beg-a", readonly: true, display: "800.000" }],
          },
          {
            id: "glaus-pur",
            label: "Purchases",
            cells: [
              { id: "glaus-pur-a", readonly: true, display: "1.600.000" },
            ],
          },
          {
            id: "glaus-avail",
            label: "Goods available for sale",
            cells: [{ id: "glaus-avail-a", answer: 2400000 }],
          },
          {
            id: "glaus-gp",
            label: "Gross profit, 25% × sales Rp2.000.000",
            cells: [{ id: "glaus-gp-a", answer: 500000 }],
          },
          {
            id: "glaus-cogs",
            label: "Estimated COGS",
            cells: [{ id: "glaus-cogs-a", answer: 1500000 }],
          },
          {
            id: "glaus-end",
            label: "Estimated ending inventory",
            cells: [{ id: "glaus-end-a", answer: 900000 }],
          },
        ],
      },
    },
    {
      kind: "formula",
      text: "Markup on selling price = Markup on cost ÷ (100% + Markup on cost)",
      note: "Contoh: markup 40% on cost berarti selling price = 140% of cost; markup on selling price = 40/140 = 28,57% ≈ 29%.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Baca basis persentase",
      text: "Gross profit rate, markup on cost, dan markup on selling price tidak boleh dipertukarkan. Tentukan dulu penyebutnya: cost atau selling price.",
    },

    { kind: "h2", text: "B. Retail Inventory Method — Debenhams" },
    {
      kind: "p",
      text: "Retail inventory method menyimpan data cost dan retail untuk goods available for sale, kemudian mengonversi ending inventory at retail menjadi cost melalui cost-to-retail ratio.",
    },
    ...DEBENHAMS_RETAIL_INVENTORY_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Retail Inventory Method Calculations — Debenhams",
        instruction:
          "Isi total goods available, ending inventory at retail, cost-to-retail ratio, dan ending inventory at cost.",
        currency: "£",
        headers: ["Item", "Cost", "Retail"],
        rows: [
          {
            id: "deb-beg",
            label: "Beginning inventory",
            cells: [
              { id: "deb-beg-c", readonly: true, display: "£14,000" },
              { id: "deb-beg-r", readonly: true, display: "£20,000" },
            ],
          },
          {
            id: "deb-pur",
            label: "Purchases",
            cells: [
              { id: "deb-pur-c", readonly: true, display: "£63,000" },
              { id: "deb-pur-r", readonly: true, display: "£90,000" },
            ],
          },
          {
            id: "deb-avail",
            label: "Goods available for sale",
            cells: [
              { id: "deb-avail-c", answer: 77000 },
              { id: "deb-avail-r", answer: 110000 },
            ],
          },
          {
            id: "deb-sales",
            label: "Deduct: Sales",
            cells: [
              { id: "deb-sales-c", readonly: true, display: "—" },
              { id: "deb-sales-r", readonly: true, display: "£85,000" },
            ],
          },
          {
            id: "deb-end-r",
            label: "Ending inventory, at retail",
            cells: [
              { id: "deb-end-r-c", readonly: true, display: "—" },
              { id: "deb-end-r-r", answer: 25000 },
            ],
          },
          {
            id: "deb-ratio",
            label: "Cost-to-retail ratio",
            cells: [
              { id: "deb-ratio-c", answer: "70%" },
              {
                id: "deb-ratio-r",
                readonly: true,
                display: "£77,000 ÷ £110,000",
              },
            ],
          },
          {
            id: "deb-end-c",
            label: "Ending inventory at cost",
            cells: [
              { id: "deb-end-c-answer", answer: 17500 },
              { id: "deb-end-c-r", readonly: true, display: "£25,000 × 70%" },
            ],
          },
        ],
      },
    },
    DEBENHAMS_RETAIL_INVENTORY_CASE.explanationBlock,

    {
      kind: "h2",
      text: "C. Conventional Retail Method (LCNRV) — In-Fusion SA",
    },
    {
      kind: "p",
      text: "Dalam conventional retail method, net markups dimasukkan dalam denominator cost-to-retail ratio, sedangkan markdowns dan markdown cancellations tidak dimasukkan ke ratio. Markdowns dikurangkan setelahnya dari retail goods available; pendekatan ini menghasilkan estimasi LCNRV.",
    },
    ...INFUSION_CONVENTIONAL_RETAIL_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Conventional Retail Inventory Method — In-Fusion SA",
        instruction:
          "Hitung ratio dengan net markups tetapi tanpa net markdowns, kemudian tentukan ending inventory pada approximate LCNRV.",
        currency: "€",
        headers: ["Item", "Cost", "Retail"],
        rows: [
          {
            id: "inf-beg",
            label: "Beginning inventory",
            cells: [
              { id: "inf-beg-c", readonly: true, display: "€500" },
              { id: "inf-beg-r", readonly: true, display: "€1,000" },
            ],
          },
          {
            id: "inf-pur",
            label: "Purchases, net",
            cells: [
              { id: "inf-pur-c", readonly: true, display: "€20,000" },
              { id: "inf-pur-r", readonly: true, display: "€35,000" },
            ],
          },
          {
            id: "inf-merch",
            label: "Merchandise available before markups",
            cells: [
              { id: "inf-merch-c", answer: 20500 },
              { id: "inf-merch-r", answer: 36000 },
            ],
          },
          {
            id: "inf-netmarkup",
            label: "Add: Net markups (€3,000 − €1,000)",
            cells: [
              { id: "inf-netmarkup-c", readonly: true, display: "—" },
              { id: "inf-netmarkup-r", answer: 2000 },
            ],
          },
          {
            id: "inf-denom",
            label: "Retail basis for LCNRV ratio",
            cells: [
              { id: "inf-denom-c", readonly: true, display: "€20,500" },
              { id: "inf-denom-r", answer: 38000 },
            ],
          },
          {
            id: "inf-ratio",
            label: "Cost-to-retail ratio (LCNRV)",
            cells: [
              { id: "inf-ratio-c", answer: "53.9%" },
              {
                id: "inf-ratio-r",
                readonly: true,
                display: "€20,500 ÷ €38,000",
              },
            ],
          },
          {
            id: "inf-markdown",
            label: "Deduct: Net markdowns (€2,500 − €2,000)",
            cells: [
              { id: "inf-markdown-c", readonly: true, display: "—" },
              { id: "inf-markdown-r", answer: 500 },
            ],
          },
          {
            id: "inf-sales",
            label: "Deduct: Sales, net",
            cells: [
              { id: "inf-sales-c", readonly: true, display: "—" },
              { id: "inf-sales-r", readonly: true, display: "€25,000" },
            ],
          },
          {
            id: "inf-end-r",
            label: "Ending inventory, at retail",
            cells: [
              { id: "inf-end-r-c", readonly: true, display: "—" },
              { id: "inf-end-r-r", answer: 12500 },
            ],
          },
          {
            id: "inf-end-lcnrv",
            label: "Ending inventory at approximate LCNRV",
            cells: [
              { id: "inf-end-c", answer: 6737.5, tolerance: 0.01 },
              {
                id: "inf-end-display",
                readonly: true,
                display: "€12,500 × 53.9%",
              },
            ],
          },
        ],
      },
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Markdown dalam conventional retail method",
      text: "Net markdowns tidak masuk ke denominator cost-to-retail ratio pada conventional retail method. Mengikutsertakannya akan menghasilkan pendekatan cost method, bukan approximate LCNRV.",
    },
    {
      kind: "table",
      headers: ["Retail method", "Denominator ratio", "Hasil yang dituju"],
      rows: [
        [
          "Cost method retail",
          "Memasukkan net markups dan net markdowns.",
          "Approximate cost.",
        ],
        [
          "Conventional retail method",
          "Memasukkan net markups tetapi mengecualikan net markdowns.",
          "Approximate LCNRV.",
        ],
        [
          "Kesalahan umum",
          "Markdown dimasukkan ke denominator conventional.",
          "Ratio terlalu rendah/tinggi sesuai data dan estimasi LCNRV tidak konsisten.",
        ],
      ],
      caption:
        "Tabel ini dipakai sebagai checkpoint sebelum mengerjakan soal retail inventory method.",
    },
    INFUSION_CONVENTIONAL_RETAIL_CASE.explanationBlock,

    { kind: "h2", text: "D. Presentation and Analysis — Inventory Turnover" },
    {
      kind: "formula",
      text: "Inventory turnover = Cost of goods sold ÷ Average inventory",
      note: "Average days to sell inventory = 365 ÷ inventory turnover.",
    },
    ...TATE_INVENTORY_ANALYSIS_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Inventory Analysis — Tate & Lyle plc",
        instruction:
          "Hitung inventory turnover dan average days to sell inventory dari data annual report yang digunakan Kieso.",
        currency: "£",
        headers: ["Measure", "Input / formula", "Result"],
        rows: [
          {
            id: "tate-avg",
            label: "Average inventory",
            cells: [
              {
                id: "tate-avg-form",
                readonly: true,
                display: "(£419 million + £434 million) ÷ 2",
              },
              { id: "tate-avg-res", answer: 426.5, tolerance: 0.01 },
            ],
          },
          {
            id: "tate-turn",
            label: "Inventory turnover",
            cells: [
              {
                id: "tate-turn-form",
                readonly: true,
                display: "£1,621 million ÷ £426.5 million",
              },
              { id: "tate-turn-res", answer: 3.8, tolerance: 0.01 },
            ],
          },
          {
            id: "tate-days",
            label: "Average days to sell inventory",
            cells: [
              { id: "tate-days-form", readonly: true, display: "365 ÷ 3.80" },
              { id: "tate-days-res", answer: 96, tolerance: 1 },
            ],
          },
        ],
      },
    },
    TATE_INVENTORY_ANALYSIS_CASE.explanationBlock,

    {
      kind: "h2",
      text: "E. Pengayaan Praktik — Markup/Markdown Glossary dan Retail Special Items",
    },
    {
      kind: "table",
      headers: ["Istilah", "Makna", "Contoh ringkas"],
      rows: [
        [
          "Markup",
          "Kenaikan harga jual di atas original retail price.",
          "Harga awal 30 naik menjadi 35, markup = 5.",
        ],
        [
          "Markup cancellation",
          "Penurunan setelah sebelumnya terjadi markup.",
          "Harga setelah markup 35 turun menjadi 32, cancellation = 3.",
        ],
        [
          "Markdown",
          "Penurunan harga dari original retail price.",
          "Harga awal 30 turun menjadi 23, markdown = 7.",
        ],
        [
          "Markdown cancellation",
          "Kenaikan setelah sebelumnya terjadi markdown.",
          "Harga turun ke 23 lalu naik ke 25, cancellation = 2.",
        ],
      ],
      caption:
        "Glossary ini membantu membaca retail inventory method, terutama conventional method vs cost method.",
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Markup/Markdown Glossary Check",
        instruction:
          "Pasangkan situasi harga dengan istilah retail inventory yang tepat.",
        feedback:
          "Markup bergerak ke atas dari original retail price, sedangkan markdown bergerak ke bawah. Cancellation adalah pembalikan sebagian dari markup atau markdown sebelumnya.",
        choices: [
          "Markup",
          "Markup cancellation",
          "Markdown",
          "Markdown cancellation",
        ],
        pairs: [
          {
            id: "mk-1",
            prompt: "Harga retail awal 30 dinaikkan menjadi 35.",
            answer: "Markup",
            feedback: "Kenaikan dari harga retail awal disebut markup.",
          },
          {
            id: "mk-2",
            prompt: "Harga setelah markup 35 kemudian diturunkan menjadi 32.",
            answer: "Markup cancellation",
            feedback:
              "Penurunan setelah markup disebut markup cancellation, bukan markdown awal.",
          },
          {
            id: "mk-3",
            prompt: "Harga retail awal 30 diturunkan menjadi 23.",
            answer: "Markdown",
            feedback: "Penurunan dari harga retail awal disebut markdown.",
          },
          {
            id: "mk-4",
            prompt: "Harga setelah markdown 23 kemudian dinaikkan menjadi 25.",
            answer: "Markdown cancellation",
            feedback:
              "Kenaikan setelah markdown disebut markdown cancellation, bukan markup baru.",
          },
        ],
      },
    },
    { kind: "h3", text: "Special Retail Inventory Items" },
    {
      kind: "table",
      headers: [
        "Item khusus",
        "Perlakuan kontrol dalam worksheet retail inventory",
      ],
      rows: [
        ["Freight costs", "Umumnya menambah cost side, bukan retail side."],
        [
          "Purchase returns",
          "Mengurangi purchases pada cost dan retail jika data retail tersedia.",
        ],
        [
          "Purchase discounts and allowances",
          "Mengurangi cost purchases; perlakuan retail mengikuti data yang tersedia.",
        ],
        [
          "Transfer-in",
          "Ditambahkan pada goods available sesuai cost/retail transfer.",
        ],
        [
          "Normal shortages",
          "Umumnya diperlakukan sebagai bagian dari operasi normal dalam retail reconciliation.",
        ],
        [
          "Abnormal shortages",
          "Dipisahkan karena bukan shrinkage normal dan dapat memengaruhi loss.",
        ],
        [
          "Employee discounts",
          "Perlu dipisahkan dari markdown karena sifatnya berbeda dari penurunan harga retail umum.",
        ],
      ],
      caption:
        "Pengayaan catatan kelas: item khusus ini tidak selalu muncul dalam soal dasar, tetapi sering membuat retail inventory worksheet salah jika tidak dibaca eksplisit.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "Cara membaca feedback latihan",
      text: "Jika hasil retail inventory salah, cek berurutan: goods available at cost, goods available at retail, apakah markdown masuk ratio atau tidak, lalu baru ending inventory at cost.",
    },
  ],
};

const tm14: Reading = {
  tm: 14,
  title: "Review / Pemantapan UAS — Cash, Receivables, dan Inventories",
  ref: "Review TM 8–14 · Kieso IFRS 5e · Ch. 6–8",
  intro:
    "TM 14 merupakan pertemuan review resmi untuk Pra-UAS. Pada Batch 11F, bagian ini disinkronkan dengan practice case TM 8–13 yang sudah distandardisasi, sehingga mahasiswa melihat alur kerja ujian dari cash, receivables, inventory cost-basis, LCNRV, gross profit method, retail method, sampai inventory analysis.",
  objectives: [
    "Memetakan kembali kompetensi praktik TM 8–13 berdasarkan practice case Kieso yang telah distandardisasi.",
    "Menentukan urutan kerja UAS: baca data, identifikasi konsep, susun schedule atau jurnal, lalu tafsirkan angka.",
    "Menghubungkan ownership, LCNRV, COGS, dan inventory turnover dalam satu kasus integratif Norwood.",
    "Menyiapkan transisi langsung ke Simulasi UAS yang memakai pola data dan requirements yang sama.",
  ],
  blocks: [
    ...TM14_LEARNING_FLOW,
    { kind: "h2", text: "A. Peta Kompetensi UAS" },
    {
      kind: "table",
      headers: ["TM", "Kasus Kieso utama", "Output praktik"],
      rows: [
        [
          "8",
          "Nugget Mining Company",
          "Petty cash, bank reconciliation dua sisi, jurnal sisi buku",
        ],
        [
          "9",
          "Wilson; Brown/Randall; Jeremiah; Slamar",
          "Allowance schedule, write-off/recovery, notes receivable, transfer receivables",
        ],
        [
          "10",
          "Werth Company",
          "Ownership adjustment, corrected ending inventory, correcting entries",
        ],
        [
          "11",
          "Call-Mart SpA",
          "Specific identification, FIFO, weighted-average, moving-average, inventory errors",
        ],
        [
          "12",
          "Mander; Jinn-Feng; Ricardo; Apres",
          "NRV, LCNRV, write-down/recovery, purchase commitment",
        ],
        [
          "13",
          "Cetus; Debenhams; In-Fusion; Tate & Lyle",
          "Gross profit method, retail method, conventional retail LCNRV, analysis",
        ],
        [
          "14",
          "Norwood Company",
          "Integrated ownership, LCNRV, adjusted COGS, dan inventory turnover",
        ],
      ],
    },
    { kind: "h2", text: "B. Traceability Review ke Practice Case" },
    {
      kind: "table",
      headers: [
        "Cluster UAS",
        "Practice case yang menjadi baseline",
        "Output yang harus siap dikerjakan",
      ],
      rows: [
        [
          "Cash",
          "Nugget Mining Company",
          "Bank reconciliation dua sisi dan adjusting entries sisi buku",
        ],
        [
          "Receivables",
          "Wilson; Jeremiah; Slamar",
          "Aging schedule, notes receivable amortization, transfer/factoring journal",
        ],
        [
          "Inventory cost-basis",
          "Werth; Call-Mart",
          "Corrected ending inventory dan cost-flow comparison",
        ],
        [
          "Additional inventory valuation",
          "Mander; Jinn-Feng; Ricardo; Apres",
          "NRV, LCNRV, recovery, dan purchase commitment loss",
        ],
        [
          "Inventory estimation and analysis",
          "Cetus; Debenhams; In-Fusion; Tate & Lyle; Norwood",
          "Gross profit method, retail method, conventional retail LCNRV, turnover analysis",
        ],
      ],
      caption:
        "Traceability ini memastikan TM 14 dan Simulasi UAS memakai kasus yang sama dengan TM 8–13, bukan paket soal yang terpisah dari materi.",
    },
    { kind: "h2", text: "C. Formula dan Pola Jurnal Wajib" },
    {
      kind: "table",
      headers: ["Area", "Formula / pola", "Jebakan utama"],
      rows: [
        [
          "Bank reconciliation",
          "Adjusted bank balance = Adjusted book balance",
          "Jurnal hanya untuk item sisi buku.",
        ],
        [
          "Cash realizable value",
          "Accounts receivable − allowance",
          "Aging menentukan ending allowance, bukan langsung expense jika ada saldo awal.",
        ],
        [
          "Inventory ownership",
          "Masukkan barang yang dimiliki pada reporting date",
          "FOB dan consignment mengubah kepemilikan, bukan sekadar lokasi barang.",
        ],
        [
          "LCNRV",
          "Lower of cost or NRV; NRV = selling price − completion and selling costs",
          "Recovery terbatas pada original write-down.",
        ],
        [
          "Gross profit method",
          "Ending inventory = goods available − estimated COGS",
          "Gross profit rate harus berbasis selling price jika diterapkan langsung ke sales.",
        ],
        [
          "Retail method",
          "Ending inventory at retail × cost-to-retail ratio",
          "Conventional method mengecualikan markdowns dari ratio.",
        ],
        [
          "Inventory analysis",
          "COGS ÷ average inventory; 365 ÷ turnover",
          "Turnover perlu dibaca bersama konteks stockout dan obsolescence.",
        ],
      ],
    },

    { kind: "h2", text: "D. Bank Format Praktik UAS — TM 8–14" },
    {
      kind: "table",
      headers: [
        "Output praktik",
        "Struktur format minimum",
        "Kasus acuan Kieso",
      ],
      rows: [
        [
          "Bank reconciliation",
          "Sisi bank, sisi buku, correct cash balance, lalu jurnal sisi buku",
          "Nugget Mining Company",
        ],
        [
          "Allowance / aging schedule",
          "Age category, balance, estimated uncollectible %, required allowance, adjustment",
          "Wilson & Co.",
        ],
        [
          "Notes receivable schedule",
          "PV awal, effective interest revenue, carrying amount per periode, maturity",
          "Jeremiah Company",
        ],
        [
          "Corrected inventory schedule",
          "Physical count ± ownership adjustments = proper ending inventory; jurnal terkait terpisah",
          "Werth Company",
        ],
        [
          "Cost-flow comparison",
          "Metode, ending inventory, COGS, dan interpretasi harga",
          "Call-Mart SpA",
        ],
        [
          "LCNRV schedule",
          "Cost, NRV, lower amount/final value, loss/recovery journal",
          "Mander; Jinn-Feng; Ricardo",
        ],
        [
          "Gross profit method",
          "Goods available − estimated COGS = estimated ending inventory",
          "Cetus SE",
        ],
        [
          "Retail inventory method",
          "Cost/retail availability, ratio, ending retail, converted cost/LCNRV",
          "Debenhams; In-Fusion",
        ],
        [
          "Inventory analysis",
          "Adjusted inventory, adjusted COGS, turnover, days to sell bila diminta",
          "Norwood; Tate & Lyle",
        ],
      ],
      caption:
        "Bank format praktik Financial Accounting; format mengikuti kasus Kieso, bukan format laporan AKBI.",
    },

    { kind: "h2", text: "E. Kasus Integratif Review — Norwood Company" },
    ...NORWOOD_INVENTORY_TURNOVER_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Integrated Inventory Analysis — Norwood Company",
        instruction:
          "Hitung turnover sebelum adjustment, lalu koreksi ending inventory dan COGS sebelum menghitung adjusted turnover.",
        currency: "$",
        headers: ["Item", "Adjustment / Result"],
        rows: [
          {
            id: "nor-before-turnover",
            label: "Inventory turnover before adjustment",
            cells: [
              { id: "nor-before-turnover-v", answer: 11.6, tolerance: 0.1 },
            ],
          },
          {
            id: "nor-consigned",
            label: "Add ending inventory: consigned goods",
            cells: [{ id: "nor-consigned-v", answer: 22000 }],
          },
          {
            id: "nor-transit",
            label: "Add ending inventory: goods in transit FOB destination",
            cells: [{ id: "nor-transit-v", answer: 25000 }],
          },
          {
            id: "nor-lcnrv",
            label: "Deduct ending inventory: LCNRV write-down",
            cells: [{ id: "nor-lcnrv-v", answer: 11200 }],
          },
          {
            id: "nor-ending",
            label: "Adjusted ending inventory",
            cells: [{ id: "nor-ending-v", answer: 1042800 }],
          },
          {
            id: "nor-cogs",
            label: "Adjusted cost of goods sold",
            cells: [{ id: "nor-cogs-v", answer: 11740200 }],
          },
          {
            id: "nor-turnover",
            label: "Adjusted inventory turnover",
            cells: [{ id: "nor-turnover-v", answer: 11.3, tolerance: 0.1 }],
          },
        ],
      },
    },
    NORWOOD_INVENTORY_TURNOVER_CASE.explanationBlock,
    { kind: "h2", text: "F. Formula Sheet Sinkronisasi UAS — Quick Audit" },
    {
      kind: "table",
      headers: ["Cluster", "Formula / format final", "Catatan sinkronisasi"],
      rows: [
        [
          "Cash",
          "Correct cash balance: adjusted bank balance = adjusted book balance",
          "Jurnal hanya untuk book-side items: collection by bank, NSF, service charge, book error, interest.",
        ],
        [
          "Petty cash",
          "Reimbursement = imprest fund − cash on hand; cash over/short = cash + receipts − imprest fund",
          "Petty Cash tidak dikredit saat replenishment normal imprest system.",
        ],
        [
          "Receivables",
          "Cash realizable value = gross A/R − Allowance for Doubtful Accounts",
          "Allowance adalah valuation account setelah piutang diakui, bukan faktor transaction price.",
        ],
        [
          "Cash discount",
          "Gross: Sales Revenue bruto lalu Sales Discount saat diskon diambil; Net: Sales Revenue net lalu Sales Discounts Forfeited jika terlambat",
          "Batch 5 menstandarkan akun pendapatan barang dagang menjadi Sales Revenue.",
        ],
        [
          "Notes receivable",
          "Initial measurement = present value; interest revenue = carrying amount × effective rate",
          "Discount diamortisasi dengan effective-interest method.",
        ],
        [
          "Transfer receivables",
          "Sale/factoring jika derecognition terpenuhi; secured borrowing jika risks and rewards tetap substantif",
          "Jika secured borrowing: receivables tetap diakui dan liability dicatat.",
        ],
        [
          "Inventory ownership",
          "Inventory = barang yang dimiliki pada tanggal laporan, bukan sekadar barang yang berada secara fisik di gudang",
          "FOB shipping point/destination dan consignment wajib dibaca lebih dahulu.",
        ],
        [
          "Inventory cost",
          "Net purchases = purchases − purchase returns/allowances − purchase discounts + freight-in",
          "Normal handling/freight-in dikapitalisasi; abnormal storage dan delivery to customers menjadi period expense.",
        ],
        [
          "LCNRV",
          "NRV = selling price − cost to complete − cost to sell; carrying amount = lower of cost or NRV",
          "Write-down/recovery memakai loss method atau COGS method sesuai instruksi soal.",
        ],
        [
          "Gross profit method",
          "Ending inventory = goods available at cost − estimated COGS",
          "Pastikan gross profit rate berbasis sales bila langsung dikalikan sales.",
        ],
        [
          "Retail inventory method",
          "Ending inventory at retail × cost-to-retail ratio",
          "Conventional retail mengecualikan net markdowns dari denominator, tetapi markdown tetap mengurangi ending retail.",
        ],
        [
          "Inventory analysis",
          "Inventory turnover = COGS ÷ average inventory; days to sell = 365 ÷ turnover",
          "Gunakan COGS dan inventory yang sudah disesuaikan jika ada ownership/LCNRV correction.",
        ],
      ],
      caption:
        "Formula sheet ini menjadi penghubung antara materi TM 8–13, kuis UAS, bank soal UAS, dan flashcard setelah sinkronisasi Batch 5.",
    },
    {
      kind: "h2",
      text: "G. Practice Builder Sprint — Diagnostic UAS 30 Menit",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Cara pakai sprint",
      text: "Kerjakan tiga builder berikut setelah membaca formula sheet. Tujuannya bukan mengulang seluruh Simulasi UAS, tetapi mengecek apakah konsep yang paling sering menjebak sudah otomatis: klasifikasi item, hitungan inti, dan jurnal singkat.",
    },
    {
      kind: "interactive-match",
      spec: {
        title: "Decision Branching UAS — Cash, Receivables, Inventory",
        instruction:
          "Pilih keputusan akuntansi yang paling tepat. Builder ini melatih pemilihan perlakuan sebelum menghitung angka.",
        feedback:
          "Jika salah, ulangi pertanyaan dasarnya: apakah item memengaruhi saldo bank, saldo buku, transaction price, valuation account, ownership, atau NRV?",
        choices: [
          "Tambah sisi bank, tidak dijurnal",
          "Kurang sisi buku dan dijurnal",
          "Catat sebagai Sales Discounts Forfeited",
          "Tetap akui receivable dan catat liability",
          "Masukkan ke inventory pembeli",
          "Turunkan inventory ke NRV",
        ],
        pairs: [
          {
            id: "sprint-dit",
            prompt:
              "Deposit in transit sudah dicatat perusahaan tetapi belum muncul pada rekening koran.",
            answer: "Tambah sisi bank, tidak dijurnal",
            feedback:
              "Deposit in transit adalah reconciling item sisi bank karena buku perusahaan sudah mencatatnya.",
          },
          {
            id: "sprint-nsf",
            prompt: "NSF check pelanggan dikembalikan bank.",
            answer: "Kurang sisi buku dan dijurnal",
            feedback:
              "NSF mengurangi kas menurut catatan perusahaan dan mengembalikan klaim kepada pelanggan.",
          },
          {
            id: "sprint-net-late",
            prompt:
              "Penjualan memakai net method, lalu pelanggan membayar setelah periode diskon berakhir.",
            answer: "Catat sebagai Sales Discounts Forfeited",
            feedback:
              "Pada net method, piutang awal sudah net; selisih karena diskon gagal diambil menjadi forfeited revenue.",
          },
          {
            id: "sprint-secured",
            prompt:
              "Piutang ditransfer tetapi risiko dan manfaat substantif masih ditahan perusahaan.",
            answer: "Tetap akui receivable dan catat liability",
            feedback:
              "Kondisi ini lebih dekat ke secured borrowing daripada sale/factoring yang memenuhi derecognition.",
          },
          {
            id: "sprint-fob",
            prompt:
              "Barang sudah dikirim FOB shipping point sebelum tanggal laporan dan masih dalam perjalanan.",
            answer: "Masukkan ke inventory pembeli",
            feedback:
              "FOB shipping point memindahkan kepemilikan saat barang dikirim.",
          },
          {
            id: "sprint-lcnrv",
            prompt:
              "Cost inventory lebih tinggi daripada NRV pada akhir periode.",
            answer: "Turunkan inventory ke NRV",
            feedback:
              "LCNRV melaporkan kerugian ketika utilitas masa depan inventory turun di bawah cost.",
          },
        ],
      },
    },
    {
      kind: "table-fill",
      spec: {
        title: "Rapid Calculation Matrix — UAS Core Numbers",
        instruction:
          "Isi hasil akhir dari tujuh pola hitung yang paling sering muncul. Angka dapat ditulis dengan titik/koma ribuan; persentase dapat ditulis 53,9%, 53.9%, atau 0,539. Builder ini memakai beberapa mata uang, jadi kunci nominal ditampilkan tanpa prefix mata uang global.",
        currency: "",
        feedback:
          "Cek kembali basis perhitungan: book-side vs bank-side, gross vs net, ending allowance vs bad debt expense, NRV, gross profit rate berbasis sales, dan denominator conventional retail.",
        headers: ["Output cepat", "Jawaban"],
        rows: [
          {
            id: "sprint-boc-correct",
            label:
              "BOC Co. correct cash balance: bank 39.140 + DIT 5.000 − outstanding checks 5.200",
            cells: [
              {
                id: "sprint-boc-correct-a",
                answer: 38940,
                feedback:
                  "Deposit in transit menambah sisi bank, outstanding checks mengurangi sisi bank.",
              },
            ],
          },
          {
            id: "sprint-petty-reimb",
            label: "Petty cash reimbursement: imprest 400, cash on hand 44",
            cells: [
              {
                id: "sprint-petty-reimb-a",
                answer: 356,
                feedback:
                  "Reimbursement cash = 400 − 44 = 356; cash over muncul karena receipts 364 + cash 44 = 408.",
              },
            ],
          },
          {
            id: "sprint-net-sale",
            label: "Net method initial A/R: sale Rp300.000, term 1/10 n/30",
            cells: [
              {
                id: "sprint-net-sale-a",
                answer: 297000,
                feedback:
                  "Net method mencatat piutang setelah diskon: 300.000 × 99%.",
              },
            ],
          },
          {
            id: "sprint-allowance-adjust",
            label:
              "Wilson bad debt adjustment: required allowance €26.610, existing credit €800",
            cells: [
              {
                id: "sprint-allowance-adjust-a",
                answer: 25810,
                feedback:
                  "Aging menghasilkan target ending allowance; expense penyesuaian = 26.610 − 800.",
              },
            ],
          },
          {
            id: "sprint-alpha-nrv",
            label:
              "ALPHA NRV: selling price 97 − completion cost 8 − selling cost 6",
            cells: [
              {
                id: "sprint-alpha-nrv-a",
                answer: 83,
                feedback:
                  "NRV = estimated selling price − estimated cost to complete − estimated cost to sell.",
              },
            ],
          },
          {
            id: "sprint-glaus-ending",
            label:
              "Glaus ending inventory: beginning 800.000 + purchases 1.600.000 − COGS 75% × sales 2.000.000",
            cells: [
              {
                id: "sprint-glaus-ending-a",
                answer: 900000,
                feedback:
                  "Gross profit 25% berarti COGS 75% dari sales = 1.500.000.",
              },
            ],
          },
          {
            id: "sprint-retail-ratio",
            label:
              "In-Fusion conventional retail ratio: cost 20.500 ÷ retail denominator 38.000",
            cells: [
              {
                id: "sprint-retail-ratio-a",
                answer: "53,9%",
                answerType: "percent",
                tolerance: 0.1,
                feedback:
                  "Conventional method memasukkan net markups tetapi mengecualikan markdowns dari denominator ratio.",
              },
            ],
          },
        ],
      },
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Rapid Journal Builder — Book-Side, Discount, Allowance, LCNRV",
        instruction:
          "Susun jurnal singkat dari lima kelompok jurnal yang sering keluar. Baris kosong tidak diperlukan; pilih akun dan letakkan nominal pada sisi debit/kredit yang benar. Karena builder menggabungkan beberapa kasus, nominal kunci ditampilkan tanpa prefix mata uang global.",
        currency: "",
        feedback:
          "Jika jurnal tidak seimbang, cek apakah transaksi memengaruhi aset, contra account, revenue, expense, atau liability.",
        accountChoices: [
          "Cash",
          "Accounts Receivable",
          "Bank Service Charge Expense",
          "Sales Revenue",
          "Sales Discount",
          "Sales Discounts Forfeited",
          "Bad Debt Expense",
          "Allowance for Doubtful Accounts",
          "Loss Due to Decline of Inventory to Net Realizable Value",
          "Allowance to Reduce Inventory to Net Realizable Value",
          "Recovery of Inventory Loss",
        ],
        lines: [
          {
            id: "sprint-j-boc-ar",
            group: "BOC Co. — NSF check Rp450 dan service charge Rp20",
            account: "Accounts Receivable",
            debit: 450,
            feedback: "NSF check mengembalikan klaim kepada pelanggan.",
          },
          {
            id: "sprint-j-boc-fee",
            account: "Bank Service Charge Expense",
            debit: 20,
            feedback: "Service charge adalah beban sisi buku.",
          },
          {
            id: "sprint-j-boc-cash",
            account: "Cash",
            credit: 470,
            feedback:
              "Cash dikredit sebesar total book-side deduction: 450 + 20.",
          },
          {
            id: "sprint-j-net-cash",
            group: "Net method — pelanggan terlambat membayar Rp300.000",
            account: "Cash",
            debit: 300000,
            feedback: "Kas diterima penuh karena periode diskon lewat.",
          },
          {
            id: "sprint-j-net-ar",
            account: "Accounts Receivable",
            credit: 297000,
            feedback: "Piutang awal pada net method hanya 99% dari invoice.",
          },
          {
            id: "sprint-j-net-forfeit",
            account: "Sales Discounts Forfeited",
            credit: 3000,
            feedback:
              "Selisih diskon yang tidak diambil menjadi forfeited revenue.",
          },
          {
            id: "sprint-j-afda-exp",
            group: "Wilson — allowance adjustment setelah aging",
            account: "Bad Debt Expense",
            debit: 25810,
            feedback:
              "Expense adalah selisih agar AFDA mencapai required ending balance.",
          },
          {
            id: "sprint-j-afda-cr",
            account: "Allowance for Doubtful Accounts",
            credit: 25810,
            feedback:
              "Allowance adalah contra asset yang mengurangi accounts receivable.",
          },
          {
            id: "sprint-j-lcnrv-loss",
            group: "Produk per unit — cost Rp85, NRV Rp83",
            account: "Loss Due to Decline of Inventory to Net Realizable Value",
            debit: 2,
            feedback: "Write-down per unit = 85 − 83.",
          },
          {
            id: "sprint-j-lcnrv-allow",
            account: "Allowance to Reduce Inventory to Net Realizable Value",
            credit: 2,
            feedback:
              "Loss method dapat memakai allowance untuk menurunkan carrying amount inventory.",
          },
          {
            id: "sprint-j-recovery-allow",
            group: "PT ABC — recovery inventory loss dari 200.000 ke 216.000",
            account: "Allowance to Reduce Inventory to Net Realizable Value",
            debit: 16000,
            feedback:
              "Recovery dibatasi sampai original cost; kenaikan NRV 16.000 mengurangi allowance.",
          },
          {
            id: "sprint-j-recovery-cr",
            account: "Recovery of Inventory Loss",
            credit: 16000,
            feedback:
              "Under IFRS, reversal write-down diakui sebagai recovery sampai batas write-down sebelumnya.",
          },
        ],
      },
    },
    { kind: "h2", text: "H. Diagnostic UAS Final — Scored Remediation Map" },
    {
      kind: "p",
      text: "Setelah sprint TM 14, buka tab **Quiz** lalu pilih set **Diagnostic UAS Final: Scored TM 8-14**. Mode ini bukan pengganti Kuis UAS penuh; fungsinya sebagai pemeriksaan cepat berbasis topik agar mahasiswa tahu bagian mana yang harus diulang sebelum mengerjakan simulasi penuh.",
    },
    {
      kind: "table",
      headers: ["Rumpun skor", "Yang diuji", "Tindak lanjut bila skor rendah"],
      rows: [
        [
          "Cash & Bank Reconciliation",
          "Cash classification, deposit in transit, NSF, service charge, petty cash",
          "Ulangi builder bank reconciliation dan petty cash.",
        ],
        [
          "Receivables",
          "Transaction price, allowance, notes receivable, transfer/factoring receivables",
          "Ulangi TM 8-9 dan bandingkan gross/net method serta sale vs secured borrowing.",
        ],
        [
          "Inventory Cost-Basis",
          "Ownership, inventoriable cost, cost flow, inventory errors",
          "Ulangi TM 10-11 dan kerjakan bank soal ownership/cost-flow.",
        ],
        [
          "LCNRV, GPM, Retail, Analysis",
          "NRV, write-down/recovery, gross profit method, conventional retail, turnover",
          "Ulangi formula sheet TM 14 dan drill TM 12-13.",
        ],
      ],
      caption:
        "Batch 7 menambahkan quiz set diagnostik dengan metadata topic/skill sehingga hasil kuis bisa dibaca sebagai peta remediasi, bukan hanya skor total.",
    },
    {
      kind: "callout",
      variant: "key",
      title: "TM 14 bukan Simulasi UAS",
      text: "TM 14 adalah pemantapan materi. Simulasi UAS tampil sebagai paket latihan terpisah setelah TM 14 dan kini mengikuti traceability practice case TM 8–13 yang sudah distandardisasi.",
    },
  ],
};

// ---------- Simulasi UTS AKM I (TM 1–7) ----------
// Model interaksi mengikuti benchmark AKBI, sedangkan substansi dan angka berasal dari Kieso IFRS Fifth Edition.
export const AKM1_SIMULATION_UTS_READING: Reading = {
  tm: 0,
  title: "Simulasi UTS",
  ref: "TM 1–7 · Kieso IFRS 5e · Ch. 1–5 · Paket Praktik",
  intro:
    "Paket simulasi praktik untuk materi UTS AKM I. Kerjakan klasifikasi, jurnal, worksheet laporan, dan perhitungan TVM seperti dalam evaluasi langsung; format latihan diturunkan dari kasus dan ilustrasi Kieso Chapters 1–5.",
  objectives: [
    "Mengintegrasikan conceptual framework dan accounting information system.",
    "Menyusun jurnal transaksi dan jurnal penyesuaian.",
    "Menyusun income statement, statement of financial position, dan statement of cash flows.",
    "Mengerjakan perhitungan time value of money.",
  ],
  blocks: [
    { kind: "h2", text: "Petunjuk Simulasi UTS" },
    {
      kind: "callout",
      variant: "key",
      title: "Mode ujian praktik",
      text: "Kerjakan setiap bagian tanpa melihat kunci terlebih dahulu. Gunakan format akun dan urutan penyajian yang ditampilkan. Data angka berasal dari contoh/exercise/practice problem Kieso; skor di bawah hanya panduan belajar, bukan bobot resmi kelas.",
    },
    {
      kind: "table",
      headers: ["Bagian", "Cakupan TM", "Output praktik", "Bobot latihan"],
      rows: [
        ["A", "TM 1", "Klasifikasi framework dan kualitas informasi", "10"],
        ["B", "TM 2", "Journalizing transaksi Snyder", "15"],
        ["C", "TM 3", "Adjusting entries Yazici", "15"],
        ["D", "TM 4", "Income statement dan comprehensive income Braun", "20"],
        [
          "E",
          "TM 5–6",
          "Statement of financial position dan cash flows Cassy",
          "25",
        ],
        ["F", "TM 7", "Worksheet TVM Vesper", "15"],
      ],
      caption:
        "Total latihan 100 poin. Paket ini mengikuti cakupan resmi TM 1–7.",
    },

    { kind: "h2", text: "Bagian A — Conceptual Framework" },
    {
      kind: "interactive-match",
      spec: {
        title: "Matching Konsep Fundamental",
        instruction: "Pilih kategori Chapter 1 yang paling tepat.",
        choices: [
          "Relevance",
          "Faithful representation",
          "Comparability",
          "Periodicity assumption",
          "Cost constraint",
          "Liability",
        ],
        pairs: [
          {
            id: "sim-a1",
            prompt:
              "Informasi membantu pengguna memperkirakan cash flows masa depan",
            answer: "Relevance",
          },
          {
            id: "sim-a2",
            prompt: "Informasi lengkap, netral, dan bebas kesalahan material",
            answer: "Faithful representation",
          },
          {
            id: "sim-a3",
            prompt:
              "Membandingkan laporan dua perusahaan pada periode yang sama",
            answer: "Comparability",
          },
          {
            id: "sim-a4",
            prompt: "Aktivitas entitas dibagi ke periode pelaporan",
            answer: "Periodicity assumption",
          },
          {
            id: "sim-a5",
            prompt:
              "Manfaat informasi tidak boleh lebih kecil dari biaya penyajiannya",
            answer: "Cost constraint",
          },
          {
            id: "sim-a6",
            prompt: "Kewajiban kini akibat peristiwa masa lalu",
            answer: "Liability",
          },
        ],
      },
    },

    { kind: "h2", text: "Bagian B — Journalizing Transaksi Snyder" },
    {
      kind: "p",
      text: "Gunakan transaksi terpilih dari **Exercise E2.17 — Snyder Miniature Golf and Driving Range plc**.",
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Journal Entries — Snyder (selected transactions)",
        instruction:
          "Susun jurnal untuk investasi owner, perolehan aset, transaksi kredit, penerimaan fees, pembayaran dividend, dan pelunasan utang.",
        currency: "£",
        accountChoices: [
          "Cash",
          "Share Capital—Ordinary",
          "Land",
          "Buildings",
          "Equipment",
          "Accounts Payable",
          "Service Revenue",
          "Dividends",
        ],
        lines: [
          {
            id: "sim-b1-dr",
            group: "1 Maret — investasi awal",
            account: "Cash",
            debit: 60000,
          },
          { id: "sim-b1-cr", account: "Share Capital—Ordinary", credit: 60000 },
          {
            id: "sim-b2-dr1",
            group: "3 Maret — akuisisi aset",
            account: "Land",
            debit: 10000,
          },
          { id: "sim-b2-dr2", account: "Buildings", debit: 22000 },
          { id: "sim-b2-dr3", account: "Equipment", debit: 6000 },
          { id: "sim-b2-cr", account: "Cash", credit: 38000 },
          {
            id: "sim-b3-dr",
            group: "10 Maret — equipment on account",
            account: "Equipment",
            debit: 2500,
          },
          { id: "sim-b3-cr", account: "Accounts Payable", credit: 2500 },
          {
            id: "sim-b4-dr",
            group: "18 Maret — golf fees received",
            account: "Cash",
            debit: 1200,
          },
          { id: "sim-b4-cr", account: "Service Revenue", credit: 1200 },
          {
            id: "sim-b5-dr",
            group: "25 Maret — dividends",
            account: "Dividends",
            debit: 1000,
          },
          { id: "sim-b5-cr", account: "Cash", credit: 1000 },
          {
            id: "sim-b6-dr",
            group: "30 Maret — payable settled",
            account: "Accounts Payable",
            debit: 2500,
          },
          { id: "sim-b6-cr", account: "Cash", credit: 2500 },
        ],
      },
    },

    { kind: "h2", text: "Bagian C — Adjusting Entries Yazici" },
    {
      kind: "journal-builder",
      spec: {
        title: "Adjusting Entries — Yazici Advertising A.Ş.",
        instruction:
          "Buat jurnal penyesuaian dari kasus Yazici: supplies used, depreciation, revenue earned dari unearned balance, accrued revenue, dan accrued salaries.",
        currency: "UM",
        accountChoices: [
          "Supplies Expense",
          "Supplies",
          "Depreciation Expense",
          "Accumulated Depreciation—Equipment",
          "Unearned Service Revenue",
          "Service Revenue",
          "Accounts Receivable",
          "Salaries and Wages Expense",
          "Salaries and Wages Payable",
        ],
        lines: [
          {
            id: "sim-c1-dr",
            group: "Supplies used",
            account: "Supplies Expense",
            debit: 15000,
          },
          { id: "sim-c1-cr", account: "Supplies", credit: 15000 },
          {
            id: "sim-c2-dr",
            group: "Depreciation office equipment",
            account: "Depreciation Expense",
            debit: 400,
          },
          {
            id: "sim-c2-cr",
            account: "Accumulated Depreciation—Equipment",
            credit: 400,
          },
          {
            id: "sim-c3-dr",
            group: "Unearned revenue now earned",
            account: "Unearned Service Revenue",
            debit: 4000,
          },
          { id: "sim-c3-cr", account: "Service Revenue", credit: 4000 },
          {
            id: "sim-c4-dr",
            group: "Accrued service revenue",
            account: "Accounts Receivable",
            debit: 2000,
          },
          { id: "sim-c4-cr", account: "Service Revenue", credit: 2000 },
          {
            id: "sim-c5-dr",
            group: "Accrued salaries and wages",
            account: "Salaries and Wages Expense",
            debit: 6000,
          },
          {
            id: "sim-c5-cr",
            account: "Salaries and Wages Payable",
            credit: 6000,
          },
        ],
      },
    },

    {
      kind: "h2",
      text: "Bagian D — Income Statement dan Comprehensive Income Braun",
    },
    {
      kind: "p",
      text: "Gunakan data **Practice Problem Chapter 3 — Braun Company**. Perubahan estimasi umur manfaat aset tetap sebesar $35.000 merupakan informasi kasus yang diperlakukan prospektif; item tersebut tidak disajikan sebagai pos terpisah dalam income statement solusi Kieso.",
    },
    {
      kind: "builder",
      instructions:
        "Susun income statement Braun dengan baris other income and expense, discontinued operation, dan EPS sesuai format latihan Kieso.",
      spec: {
        entity: "Braun Company",
        title: "Income Statement",
        period: "For the Year Ended December 31, 2025",
        currency: "$",
        lines: [
          {
            id: "sim-d-sales",
            kind: "given",
            label: "Sales revenue",
            amount: 2700000,
          },
          {
            id: "sim-d-cogs",
            kind: "input",
            label: "Cost of goods sold",
            amount: 1150000,
            bracket: true,
          },
          {
            id: "sim-d-gp",
            kind: "computed",
            label: "Gross profit",
            amount: 1550000,
            rule: "top",
            bold: true,
            compute: [{ id: "sim-d-sales" }, { id: "sim-d-cogs", sign: -1 }],
          },
          {
            id: "sim-d-sga",
            kind: "input",
            label: "Selling and administrative expenses",
            amount: 480000,
            bracket: true,
          },
          {
            id: "sim-d-before-other",
            kind: "computed",
            label: "Income before other income and expense",
            amount: 1070000,
            rule: "top",
            compute: [{ id: "sim-d-gp" }, { id: "sim-d-sga", sign: -1 }],
          },
          { kind: "header", label: "Other income and expense" },
          {
            id: "sim-d-intrev",
            kind: "input",
            label: "Interest revenue",
            amount: 15000,
            indent: 1,
          },
          {
            id: "sim-d-gain-debt",
            kind: "input",
            label: "Gain on debt extinguishment",
            amount: 28000,
            indent: 1,
          },
          {
            id: "sim-d-loss-plant",
            kind: "input",
            label: "Loss from plant abandonment",
            amount: 45000,
            bracket: true,
            indent: 1,
          },
          {
            id: "sim-d-loss-earth",
            kind: "input",
            label: "Loss from earthquake",
            amount: 30000,
            bracket: true,
            indent: 1,
          },
          {
            id: "sim-d-op",
            kind: "computed",
            label: "Income from operations",
            amount: 1038000,
            rule: "top",
            bold: true,
            compute: [
              { id: "sim-d-before-other" },
              { id: "sim-d-intrev" },
              { id: "sim-d-gain-debt" },
              { id: "sim-d-loss-plant", sign: -1 },
              { id: "sim-d-loss-earth", sign: -1 },
            ],
          },
          {
            id: "sim-d-tax",
            kind: "input",
            label: "Income tax (30%)",
            amount: 311400,
            bracket: true,
          },
          {
            id: "sim-d-cont",
            kind: "computed",
            label: "Income from continuing operations",
            amount: 726600,
            rule: "top",
            bold: true,
            compute: [{ id: "sim-d-op" }, { id: "sim-d-tax", sign: -1 }],
          },
          { kind: "header", label: "Discontinued operations" },
          {
            id: "sim-d-disc-gain",
            kind: "input",
            label: "Gain on disposal of discontinued operation",
            amount: 50000,
            indent: 1,
          },
          {
            id: "sim-d-disc-tax",
            kind: "input",
            label: "Applicable income tax",
            amount: 15000,
            bracket: true,
            indent: 1,
          },
          {
            id: "sim-d-disc-net",
            kind: "computed",
            label: "Gain on discontinued operation, net of tax",
            amount: 35000,
            rule: "top",
            compute: [
              { id: "sim-d-disc-gain" },
              { id: "sim-d-disc-tax", sign: -1 },
            ],
          },
          {
            id: "sim-d-ni",
            kind: "computed",
            label: "Net income",
            amount: 761600,
            rule: "double",
            bold: true,
            compute: [{ id: "sim-d-cont" }, { id: "sim-d-disc-net" }],
          },
          {
            id: "sim-d-eps-cont",
            kind: "input",
            label: "EPS — income from continuing operations",
            amount: 7.27,
            indent: 1,
          },
          {
            id: "sim-d-eps-disc",
            kind: "input",
            label: "EPS — discontinued operations",
            amount: 0.35,
            indent: 1,
          },
          {
            id: "sim-d-eps-net",
            kind: "input",
            label: "EPS — net income",
            amount: 7.62,
            indent: 1,
            rule: "double",
          },
        ],
      },
    },
    {
      kind: "builder",
      instructions:
        "Lanjutkan penyajian comprehensive income Braun setelah memperoleh net income.",
      spec: {
        entity: "Braun Company",
        title: "Comprehensive Income Computation",
        period: "For the Year Ended December 31, 2025",
        currency: "$",
        lines: [
          {
            id: "sim-d-ci-ni",
            kind: "given",
            label: "Net income",
            amount: 761600,
          },
          {
            id: "sim-d-ci-oci",
            kind: "input",
            label:
              "Unrealized holding loss on non-trading equity securities, net of tax",
            amount: 12000,
            bracket: true,
          },
          {
            id: "sim-d-ci-total",
            kind: "computed",
            label: "Comprehensive income",
            amount: 749600,
            rule: "double",
            bold: true,
            compute: [{ id: "sim-d-ci-ni" }, { id: "sim-d-ci-oci", sign: -1 }],
          },
        ],
      },
    },

    {
      kind: "h2",
      text: "Bagian E — Statement of Financial Position dan Cash Flows Cassy",
    },
    {
      kind: "p",
      text: "Susun laporan **Cassy Corporation** berdasarkan Practice Problem Chapter 4. Current assets merupakan plug figure sebagaimana ditunjukkan dalam solusi Kieso.",
    },
    {
      kind: "builder",
      instructions:
        "Lengkapi statement of financial position Cassy per 31 Desember 2025 dalam format laporan yang lebih utuh.",
      spec: {
        entity: "Cassy Corporation",
        title: "Statement of Financial Position",
        period: "December 31, 2025",
        currency: "$",
        lines: [
          { kind: "header", label: "Assets" },
          {
            id: "sim-e-invest",
            kind: "input",
            label: "Long-term investments",
            amount: 19200,
          },
          { kind: "header", label: "Property, plant, and equipment" },
          {
            id: "sim-e-land",
            kind: "given",
            label: "Land",
            amount: 36000,
            indent: 1,
          },
          {
            id: "sim-e-build",
            kind: "input",
            label: "Buildings",
            amount: 176400,
            indent: 1,
          },
          {
            id: "sim-e-build-ad",
            kind: "input",
            label: "Accumulated depreciation—buildings",
            amount: 40800,
            indent: 1,
            bracket: true,
          },
          {
            id: "sim-e-build-net",
            kind: "computed",
            label: "Net buildings",
            amount: 135600,
            indent: 1,
            rule: "top",
            compute: [
              { id: "sim-e-build" },
              { id: "sim-e-build-ad", sign: -1 },
            ],
          },
          {
            id: "sim-e-equip",
            kind: "input",
            label: "Equipment",
            amount: 84000,
            indent: 1,
          },
          {
            id: "sim-e-equip-ad",
            kind: "input",
            label: "Accumulated depreciation—equipment",
            amount: 14400,
            indent: 1,
            bracket: true,
          },
          {
            id: "sim-e-equip-net",
            kind: "computed",
            label: "Net equipment",
            amount: 69600,
            indent: 1,
            rule: "top",
            compute: [
              { id: "sim-e-equip" },
              { id: "sim-e-equip-ad", sign: -1 },
            ],
          },
          {
            id: "sim-e-ppe",
            kind: "computed",
            label: "Total property, plant, and equipment",
            amount: 241200,
            rule: "top",
            bold: true,
            compute: [
              { id: "sim-e-land" },
              { id: "sim-e-build-net" },
              { id: "sim-e-equip-net" },
            ],
          },
          {
            id: "sim-e-patent",
            kind: "input",
            label: "Intangible assets—patents",
            amount: 45000,
          },
          {
            id: "sim-e-current-assets",
            kind: "input",
            label: "Current assets",
            amount: 355800,
          },
          {
            id: "sim-e-total-assets",
            kind: "computed",
            label: "Total assets",
            amount: 661200,
            rule: "double",
            bold: true,
            compute: [
              { id: "sim-e-invest" },
              { id: "sim-e-ppe" },
              { id: "sim-e-patent" },
              { id: "sim-e-current-assets" },
            ],
          },
          { kind: "header", label: "Equity and Liabilities" },
          {
            id: "sim-e-share",
            kind: "given",
            label: "Share capital—ordinary",
            amount: 216000,
            indent: 1,
          },
          {
            id: "sim-e-re",
            kind: "input",
            label: "Retained earnings",
            amount: 82800,
            indent: 1,
          },
          {
            id: "sim-e-equity-before-ts",
            kind: "computed",
            label: "Equity before treasury shares",
            amount: 298800,
            rule: "top",
            compute: [{ id: "sim-e-share" }, { id: "sim-e-re" }],
          },
          {
            id: "sim-e-ts",
            kind: "input",
            label: "Less: Cost of treasury shares",
            amount: 13200,
            bracket: true,
          },
          {
            id: "sim-e-equity",
            kind: "computed",
            label: "Total equity",
            amount: 285600,
            rule: "top",
            bold: true,
            compute: [
              { id: "sim-e-equity-before-ts" },
              { id: "sim-e-ts", sign: -1 },
            ],
          },
          {
            id: "sim-e-bonds",
            kind: "input",
            label: "Non-current liabilities — Bonds payable",
            amount: 180000,
          },
          {
            id: "sim-e-current-liab",
            kind: "input",
            label: "Current liabilities",
            amount: 195600,
          },
          {
            id: "sim-e-liab",
            kind: "computed",
            label: "Total liabilities",
            amount: 375600,
            rule: "top",
            compute: [{ id: "sim-e-bonds" }, { id: "sim-e-current-liab" }],
          },
          {
            id: "sim-e-total-el",
            kind: "computed",
            label: "Total equity and liabilities",
            amount: 661200,
            rule: "double",
            bold: true,
            compute: [{ id: "sim-e-equity" }, { id: "sim-e-liab" }],
          },
        ],
      },
    },
    {
      kind: "builder",
      instructions:
        "Lengkapi statement of cash flows Cassy menggunakan indirect method, termasuk adjustment operating serta arus investing dan financing.",
      spec: {
        entity: "Cassy Corporation",
        title: "Statement of Cash Flows",
        period: "For the Year Ended December 31, 2025",
        currency: "$",
        lines: [
          { kind: "header", label: "Cash flows from operating activities" },
          {
            id: "sim-e-cf-ni",
            kind: "given",
            label: "Net income",
            amount: 66000,
          },
          {
            id: "sim-e-cf-loss-sale",
            kind: "input",
            label: "Loss on sale of equipment",
            amount: 2400,
            indent: 1,
          },
          {
            id: "sim-e-cf-dep",
            kind: "input",
            label: "Depreciation expense",
            amount: 15600,
            indent: 1,
          },
          {
            id: "sim-e-cf-amort",
            kind: "input",
            label: "Patent amortization",
            amount: 3000,
            indent: 1,
          },
          {
            id: "sim-e-cf-increase-liab",
            kind: "input",
            label: "Increase in current liabilities",
            amount: 15600,
            indent: 1,
          },
          {
            id: "sim-e-cf-increase-assets",
            kind: "input",
            label: "Increase in current assets other than cash",
            amount: 34800,
            indent: 1,
            bracket: true,
          },
          {
            id: "sim-e-cf-adj-total",
            kind: "computed",
            label: "Net adjustments to net income",
            amount: 1800,
            rule: "top",
            compute: [
              { id: "sim-e-cf-loss-sale" },
              { id: "sim-e-cf-dep" },
              { id: "sim-e-cf-amort" },
              { id: "sim-e-cf-increase-liab" },
              { id: "sim-e-cf-increase-assets", sign: -1 },
            ],
          },
          {
            id: "sim-e-cfo",
            kind: "computed",
            label: "Net cash provided by operating activities",
            amount: 67800,
            rule: "top",
            bold: true,
            compute: [{ id: "sim-e-cf-ni" }, { id: "sim-e-cf-adj-total" }],
          },
          { kind: "header", label: "Cash flows from investing activities" },
          {
            id: "sim-e-cf-sale-equip",
            kind: "input",
            label: "Sale of equipment",
            amount: 12000,
          },
          {
            id: "sim-e-cf-building",
            kind: "input",
            label: "Addition to building",
            amount: 32400,
            bracket: true,
          },
          {
            id: "sim-e-cf-invest",
            kind: "input",
            label: "Investment in shares",
            amount: 19200,
            bracket: true,
          },
          {
            id: "sim-e-cfi",
            kind: "computed",
            label: "Net cash used by investing activities",
            amount: -39600,
            rule: "top",
            bold: true,
            bracket: true,
            compute: [
              { id: "sim-e-cf-sale-equip" },
              { id: "sim-e-cf-building", sign: -1 },
              { id: "sim-e-cf-invest", sign: -1 },
            ],
          },
          { kind: "header", label: "Cash flows from financing activities" },
          {
            id: "sim-e-cf-bonds",
            kind: "input",
            label: "Issuance of bonds",
            amount: 60000,
          },
          {
            id: "sim-e-cf-div",
            kind: "input",
            label: "Payment of dividends",
            amount: 36000,
            bracket: true,
          },
          {
            id: "sim-e-cf-treasury",
            kind: "input",
            label: "Purchase of treasury shares",
            amount: 13200,
            bracket: true,
          },
          {
            id: "sim-e-cff",
            kind: "computed",
            label: "Net cash provided by financing activities",
            amount: 10800,
            rule: "top",
            bold: true,
            compute: [
              { id: "sim-e-cf-bonds" },
              { id: "sim-e-cf-div", sign: -1 },
              { id: "sim-e-cf-treasury", sign: -1 },
            ],
          },
          {
            id: "sim-e-netcash",
            kind: "computed",
            label: "Net increase in cash",
            amount: 39000,
            rule: "double",
            bold: true,
            compute: [
              { id: "sim-e-cfo" },
              { id: "sim-e-cfi" },
              { id: "sim-e-cff" },
            ],
          },
        ],
      },
    },

    { kind: "h2", text: "Bagian F — Time Value of Money Vesper" },
    {
      kind: "table-fill",
      spec: {
        title: "Worksheet TVM — Vesper Inc.",
        instruction:
          "Masukkan hasil akhir setiap komputasi TVM berdasarkan data Practice Problem Chapter 5.",
        currency: "$",
        headers: ["Output", "Jawaban"],
        rows: [
          {
            id: "sim-f1",
            label: "FV security deposit",
            cells: [{ id: "sim-f1-answer", answer: 31125 }],
          },
          {
            id: "sim-f2",
            label: "Selling price of bonds",
            cells: [{ id: "sim-f2-answer", answer: 3230594 }],
          },
          {
            id: "sim-f3",
            label: "FV sinking fund",
            cells: [{ id: "sim-f3-answer", answer: 2859523 }],
          },
          {
            id: "sim-f4",
            label: "Deficiency sinking fund",
            cells: [{ id: "sim-f4-answer", answer: 140477 }],
          },
          {
            id: "sim-f5",
            label: "PV pension liability at January 1, 2025",
            cells: [{ id: "sim-f5-answer", answer: 1692228 }],
          },
        ],
      },
    },
  ],
};

// ---------- Simulasi UAS AKM I (TM 8–14) ----------
// Model interaksi mengikuti benchmark AKBI; substansi dan format berasal dari Kieso IFRS Fifth Edition, Chapters 6–8.
export const AKM1_SIMULATION_UAS_READING: Reading = {
  tm: 15,
  title: "Simulasi UAS",
  ref: "TM 8–14 · Kieso IFRS 5e · Ch. 6–8 · Paket Praktik",
  intro:
    "Paket simulasi praktik Pra-UAS AKM I. Batch 11F menyinkronkan simulasi ini dengan practice case TM 8–13 yang sudah distandardisasi, sehingga setiap workspace didahului lembar data, requirements, dan konteks kasus sebelum user mengisi jawaban.",
  objectives: [
    "Menyusun bank reconciliation dan jurnal penyesuaian sisi buku berdasarkan data Nugget yang terlihat.",
    "Mengukur receivables melalui aging, recovery, notes receivable, dan transfer/factoring.",
    "Menentukan proper inventory dan cost flow inventory dengan data Werth dan Call-Mart.",
    "Menghitung NRV, LCNRV, recovery, purchase commitment, gross profit method, serta retail inventory method.",
    "Menghubungkan valuation inventory dengan rasio inventory turnover pada Tate & Lyle dan Norwood.",
  ],
  blocks: [
    { kind: "h2", text: "Petunjuk Simulasi UAS" },
    {
      kind: "callout",
      variant: "key",
      title: "Mode ujian praktik",
      text: "Kerjakan tanpa membuka kunci terlebih dahulu. Pastikan journal entries seimbang, schedule mempertahankan urutan sumber, dan valuation method tidak tercampur. Skor merupakan panduan belajar, bukan bobot resmi kelas.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Shortcut sebelum simulasi penuh",
      text: "Jika waktu belajar terbatas, buka tab Quiz dan pilih **Diagnostic UAS Final: Scored TM 8-14** sebelum mengerjakan paket simulasi ini. Gunakan peta topik diagnostic untuk menentukan bagian yang harus diulang: Cash & Bank Reconciliation, Receivables, Notes Receivable, Transfer Receivables, Inventory Cost-Basis, LCNRV, Gross Profit Method, Retail Inventory Method, atau Inventory Analysis.",
    },
    {
      kind: "table",
      headers: ["Bagian", "Cakupan TM", "Output praktik", "Bobot latihan"],
      rows: [
        [
          "A",
          "TM 8",
          "Bank reconciliation dan jurnal sisi buku — Nugget",
          "12",
        ],
        [
          "B",
          "TM 9",
          "Allowance, recovery, zero-interest note, dan transfer receivables — Wilson/Brown/Jeremiah/Slamar",
          "23",
        ],
        [
          "C",
          "TM 10–11",
          "Corrected inventory dan cost flow — Werth/Call-Mart",
          "18",
        ],
        [
          "D",
          "TM 12",
          "NRV, LCNRV, recovery, dan purchase commitment — Mander/Jinn-Feng/Ricardo/Apres",
          "22",
        ],
        ["E", "TM 13", "Gross profit method — Cetus", "10"],
        [
          "F",
          "TM 13–14",
          "Retail method dan inventory analysis — Debenhams/In-Fusion/Tate/Norwood",
          "15",
        ],
      ],
      caption:
        "Total latihan 100 poin. Paket mengikuti cakupan resmi TM 8–14 dan memakai practice case yang telah distandardisasi pada Batch 11D sampai Batch 11E.",
    },
    {
      kind: "table",
      headers: [
        "Syarat sinkronisasi Batch 11F",
        "Implementasi dalam Simulasi UAS",
      ],
      rows: [
        [
          "Data awal harus terlihat",
          "Setiap bagian memakai promptBlocks practice case sebelum worksheet.",
        ],
        [
          "Requirements harus eksplisit",
          "Instruksi diletakkan sebelum builder, table-fill, atau journal-builder.",
        ],
        [
          "Kunci tidak terbuka di awal",
          "Pembahasan tetap menggunakan solution-reveal setelah workspace.",
        ],
        [
          "Traceability laporan valid",
          "Kasus tetap mengarah ke linked report ID yang sudah lulus audit Batch 11D.1 dan 11E.",
        ],
      ],
      caption:
        "Kontrol pedagogis ini mencegah simulasi berubah menjadi tabel isian tanpa lembar soal.",
    },

    {
      kind: "h2",
      text: "Bagian A — Bank Reconciliation Nugget Mining Company",
    },
    ...NUGGET_BANK_RECONCILIATION_CASE.promptBlocks,
    {
      kind: "builder",
      instructions:
        "Susun bank reconciliation dua sisi sampai mencapai correct cash balance yang sama.",
      spec: {
        entity: "Nugget Mining Company",
        title: "Bank Reconciliation",
        period: "April 30",
        currency: "$",
        lines: [
          { kind: "header", label: "Balance per bank statement" },
          {
            id: "uas-nug-bank",
            kind: "given",
            label: "Balance per bank statement",
            amount: 22190,
          },
          {
            id: "uas-nug-dit",
            kind: "input",
            label: "Add: Deposit in transit",
            amount: 3680,
            indent: 1,
          },
          {
            id: "uas-nug-bankerr",
            kind: "input",
            label: "Add: Bank error",
            amount: 175,
            indent: 1,
          },
          {
            id: "uas-nug-oc",
            kind: "input",
            label: "Less: Outstanding checks",
            amount: 5001,
            bracket: true,
            indent: 1,
          },
          {
            id: "uas-nug-bank-correct",
            kind: "computed",
            label: "Correct cash balance per bank",
            amount: 21044,
            rule: "double",
            bold: true,
            compute: [
              { id: "uas-nug-bank" },
              { id: "uas-nug-dit" },
              { id: "uas-nug-bankerr" },
              { id: "uas-nug-oc", sign: -1 },
            ],
          },
          { kind: "header", label: "Balance per books" },
          {
            id: "uas-nug-book",
            kind: "given",
            label: "Balance per books",
            amount: 20502,
          },
          {
            id: "uas-nug-interest",
            kind: "input",
            label: "Add: Interest collected by bank",
            amount: 600,
            indent: 1,
          },
          {
            id: "uas-nug-error",
            kind: "input",
            label: "Add: Error in recording check",
            amount: 180,
            indent: 1,
          },
          {
            id: "uas-nug-charge",
            kind: "input",
            label: "Less: Bank service charges",
            amount: 18,
            bracket: true,
            indent: 1,
          },
          {
            id: "uas-nug-nsf",
            kind: "input",
            label: "Less: NSF check returned",
            amount: 220,
            bracket: true,
            indent: 1,
          },
          {
            id: "uas-nug-book-correct",
            kind: "computed",
            label: "Correct cash balance per books",
            amount: 21044,
            rule: "double",
            bold: true,
            compute: [
              { id: "uas-nug-book" },
              { id: "uas-nug-interest" },
              { id: "uas-nug-error" },
              { id: "uas-nug-charge", sign: -1 },
              { id: "uas-nug-nsf", sign: -1 },
            ],
          },
        ],
      },
    },
    {
      kind: "journal-builder",
      spec: {
        title: "Adjusting Entries — Nugget Book-Side Items",
        instruction:
          "Buat jurnal hanya untuk item yang mengubah catatan perusahaan.",
        currency: "$",
        accountChoices: [
          "Cash",
          "Interest Revenue",
          "Accounts Payable",
          "Accounts Receivable",
          "Bank Service Charge Expense",
        ],
        lines: [
          {
            id: "uas-nug-j1-dr",
            group: "Interest collected and book error correction",
            account: "Cash",
            debit: 780,
          },
          { id: "uas-nug-j1-cr1", account: "Interest Revenue", credit: 600 },
          { id: "uas-nug-j1-cr2", account: "Accounts Payable", credit: 180 },
          {
            id: "uas-nug-j2-dr1",
            group: "NSF check and service charge",
            account: "Accounts Receivable",
            debit: 220,
          },
          {
            id: "uas-nug-j2-dr2",
            account: "Bank Service Charge Expense",
            debit: 18,
          },
          { id: "uas-nug-j2-cr", account: "Cash", credit: 238 },
        ],
      },
    },
    NUGGET_BANK_RECONCILIATION_CASE.explanationBlock,

    { kind: "h2", text: "Bagian B — Receivables Valuation dan Notes" },
    ...WILSON_RECEIVABLES_AGING_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Aging Schedule — Wilson & Co.",
        instruction:
          "Hitung required allowance per umur piutang dan adjustment setelah mempertimbangkan existing credit balance €800.",
        currency: "€",
        headers: [
          "Age category",
          "Receivable balance",
          "Rate",
          "Required allowance",
        ],
        rows: [
          {
            id: "uas-wil-1",
            label: "Under 30 days",
            cells: [
              { id: "uas-wil-1-bal", readonly: true, display: "€345,000" },
              { id: "uas-wil-1-rate", readonly: true, display: "0.8%" },
              { id: "uas-wil-1-ans", answer: 2760 },
            ],
          },
          {
            id: "uas-wil-2",
            label: "30–60 days",
            cells: [
              { id: "uas-wil-2-bal", readonly: true, display: "€115,000" },
              { id: "uas-wil-2-rate", readonly: true, display: "4.0%" },
              { id: "uas-wil-2-ans", answer: 4600 },
            ],
          },
          {
            id: "uas-wil-3",
            label: "61–90 days",
            cells: [
              { id: "uas-wil-3-bal", readonly: true, display: "€18,000" },
              { id: "uas-wil-3-rate", readonly: true, display: "15.0%" },
              { id: "uas-wil-3-ans", answer: 2700 },
            ],
          },
          {
            id: "uas-wil-4",
            label: "91–120 days",
            cells: [
              { id: "uas-wil-4-bal", readonly: true, display: "€14,000" },
              { id: "uas-wil-4-rate", readonly: true, display: "20.0%" },
              { id: "uas-wil-4-ans", answer: 2800 },
            ],
          },
          {
            id: "uas-wil-5",
            label: "Over 120 days",
            cells: [
              { id: "uas-wil-5-bal", readonly: true, display: "€55,000" },
              { id: "uas-wil-5-rate", readonly: true, display: "25.0%" },
              { id: "uas-wil-5-ans", answer: 13750 },
            ],
          },
          {
            id: "uas-wil-total",
            label: "Required ending allowance",
            cells: [
              { id: "uas-wil-total-bal", readonly: true, display: "€547,000" },
              { id: "uas-wil-total-rate", readonly: true, display: "—" },
              { id: "uas-wil-total-ans", answer: 26610 },
            ],
          },
          {
            id: "uas-wil-adjust",
            label: "Adjustment after existing credit balance €800",
            cells: [
              { id: "uas-wil-adjust-bal", readonly: true, display: "—" },
              { id: "uas-wil-adjust-rate", readonly: true, display: "—" },
              { id: "uas-wil-adjust-ans", answer: 25810 },
            ],
          },
        ],
      },
    },
    WILSON_RECEIVABLES_AGING_CASE.explanationBlock,
    {
      kind: "journal-builder",
      spec: {
        title: "Write-Off and Recovery — Brown Furniture / Randall plc",
        instruction:
          "Susun jurnal allowance method untuk write-off dan recovery.",
        currency: "£",
        accountChoices: [
          "Allowance for Doubtful Accounts",
          "Accounts Receivable—Randall plc",
          "Cash",
          "Bad Debt Expense",
        ],
        lines: [
          {
            id: "uas-brown-write-dr",
            group: "March 1, 2026 — write off Randall receivable",
            account: "Allowance for Doubtful Accounts",
            debit: 1000,
          },
          {
            id: "uas-brown-write-cr",
            account: "Accounts Receivable—Randall plc",
            credit: 1000,
          },
          {
            id: "uas-brown-rec-dr",
            group: "July 1, 2026 — reinstate before collection",
            account: "Accounts Receivable—Randall plc",
            debit: 1000,
          },
          {
            id: "uas-brown-rec-cr",
            account: "Allowance for Doubtful Accounts",
            credit: 1000,
          },
          {
            id: "uas-brown-cash-dr",
            group: "July 1, 2026 — collect recovered balance",
            account: "Cash",
            debit: 1000,
          },
          {
            id: "uas-brown-cash-cr",
            account: "Accounts Receivable—Randall plc",
            credit: 1000,
          },
        ],
      },
    },
    ...JEREMIAH_NOTES_RECEIVABLE_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Zero-Interest-Bearing Note — Jeremiah Company",
        instruction:
          "Isi carrying amount note berdasarkan effective interest rate 9% dan initial present value $7,721.80.",
        currency: "$",
        headers: ["Date / Output", "Answer"],
        rows: [
          {
            id: "uas-jer-pv",
            label: "Initial present value",
            cells: [{ id: "uas-jer-pv-a", answer: 7721.8, tolerance: 0.01 }],
          },
          {
            id: "uas-jer-y1",
            label: "Carrying amount — end of year 1",
            cells: [{ id: "uas-jer-y1-a", answer: 8416.76, tolerance: 0.01 }],
          },
          {
            id: "uas-jer-y2",
            label: "Carrying amount — end of year 2",
            cells: [{ id: "uas-jer-y2-a", answer: 9174.27, tolerance: 0.01 }],
          },
          {
            id: "uas-jer-maturity",
            label: "Carrying amount — maturity",
            cells: [{ id: "uas-jer-maturity-a", answer: 10000 }],
          },
        ],
      },
    },
    JEREMIAH_NOTES_RECEIVABLE_CASE.explanationBlock,
    ...SLAMAR_RECEIVABLE_TRANSFER_CASE.promptBlocks,
    {
      kind: "journal-builder",
      spec: {
        title: "Transfer of Receivables — Slamar Ltd.",
        instruction:
          "Susun jurnal untuk tiga situasi Slamar: factoring without guarantee, secured borrowing, dan allowance adjustment.",
        currency: "¥",
        accountChoices: [
          "Cash",
          "Loss on Sale of Receivables",
          "Accounts Receivable",
          "Interest Expense",
          "Notes Payable",
          "Bad Debt Expense",
          "Allowance for Doubtful Accounts",
        ],
        lines: [
          {
            id: "uas-slamar-fact-cash",
            group: "1. Factoring without guarantee",
            account: "Cash",
            debit: 44500,
          },
          {
            id: "uas-slamar-fact-loss",
            account: "Loss on Sale of Receivables",
            debit: 5500,
          },
          {
            id: "uas-slamar-fact-ar",
            account: "Accounts Receivable",
            credit: 50000,
          },
          {
            id: "uas-slamar-borrow-cash",
            group: "2. Secured borrowing",
            account: "Cash",
            debit: 68250,
          },
          {
            id: "uas-slamar-borrow-interest",
            account: "Interest Expense",
            debit: 6750,
          },
          {
            id: "uas-slamar-borrow-note",
            account: "Notes Payable",
            credit: 75000,
          },
          {
            id: "uas-slamar-allow-dr",
            group: "3. Allowance adjustment",
            account: "Bad Debt Expense",
            debit: 16040,
          },
          {
            id: "uas-slamar-allow-cr",
            account: "Allowance for Doubtful Accounts",
            credit: 16040,
          },
        ],
      },
    },
    SLAMAR_RECEIVABLE_TRANSFER_CASE.explanationBlock,

    { kind: "h2", text: "Bagian C — Inventory Cost-Basis" },
    ...WERTH_INVENTORY_OWNERSHIP_CASE.promptBlocks,
    {
      kind: "builder",
      instructions:
        "Tentukan proper ending inventory Werth berdasarkan ownership pada tanggal pelaporan.",
      spec: {
        entity: "Werth Company",
        title: "Corrected Ending Inventory Schedule",
        period: "December 31, 2025",
        currency: "$",
        lines: [
          {
            id: "uas-wer-count",
            kind: "given",
            label: "Physical inventory count",
            amount: 234890,
          },
          {
            id: "uas-wer-browser",
            kind: "input",
            label: "Add: Browser — FOB shipping point in transit",
            amount: 10420,
            indent: 1,
          },
          {
            id: "uas-wer-minsky",
            kind: "input",
            label: "Add: Minsky — received after count",
            amount: 8540,
            indent: 1,
          },
          {
            id: "uas-wer-jackel",
            kind: "input",
            label: "Deduct: Jackel consigned inventory",
            amount: 10438,
            bracket: true,
            indent: 1,
          },
          {
            id: "uas-wer-sims",
            kind: "input",
            label: "Deduct: Sims — FOB shipping point sale",
            amount: 11520,
            bracket: true,
            indent: 1,
          },
          {
            id: "uas-wer-return",
            kind: "input",
            label: "Add: Returned goods in good condition",
            amount: 1500,
            indent: 1,
          },
          {
            id: "uas-wer-proper",
            kind: "computed",
            label: "Proper ending inventory",
            amount: 233392,
            rule: "double",
            bold: true,
            compute: [
              { id: "uas-wer-count" },
              { id: "uas-wer-browser" },
              { id: "uas-wer-minsky" },
              { id: "uas-wer-jackel", sign: -1 },
              { id: "uas-wer-sims", sign: -1 },
              { id: "uas-wer-return" },
            ],
          },
        ],
      },
    },
    WERTH_INVENTORY_OWNERSHIP_CASE.explanationBlock,
    ...CALL_MART_COST_FLOW_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Cost Flow Comparison — Call-Mart SpA",
        instruction: "Tentukan ending inventory dan COGS pada setiap metode.",
        currency: "€",
        headers: ["Method", "Ending inventory", "Cost of goods sold"],
        rows: [
          {
            id: "uas-call-wa",
            label: "Weighted-average — periodic",
            cells: [
              { id: "uas-call-wa-end", answer: 26340 },
              { id: "uas-call-wa-cogs", answer: 17560 },
            ],
          },
          {
            id: "uas-call-ma",
            label: "Moving-average — perpetual",
            cells: [
              { id: "uas-call-ma-end", answer: 26700 },
              { id: "uas-call-ma-cogs", answer: 17200 },
            ],
          },
          {
            id: "uas-call-fifo",
            label: "FIFO — periodic/perpetual",
            cells: [
              { id: "uas-call-fifo-end", answer: 27100 },
              { id: "uas-call-fifo-cogs", answer: 16800 },
            ],
          },
        ],
      },
    },
    CALL_MART_COST_FLOW_CASE.explanationBlock,

    {
      kind: "h2",
      text: "Bagian D — NRV, LCNRV, Recovery, dan Purchase Commitment",
    },
    ...MANDER_NRV_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "NRV and LCNRV — Mander AG",
        instruction:
          "Hitung NRV, carrying amount LCNRV, dan loss on inventory write-down.",
        currency: "€",
        headers: ["Output", "Answer"],
        rows: [
          {
            id: "uas-mander-nrv",
            label: "Net realizable value",
            cells: [{ id: "uas-mander-nrv-a", answer: 750 }],
          },
          {
            id: "uas-mander-carrying",
            label: "Inventory carrying amount under LCNRV",
            cells: [{ id: "uas-mander-carrying-a", answer: 750 }],
          },
          {
            id: "uas-mander-loss",
            label: "Loss on inventory write-down",
            cells: [{ id: "uas-mander-loss-a", answer: 200 }],
          },
        ],
      },
    },
    MANDER_NRV_CASE.explanationBlock,
    ...JINN_FENG_LCNRV_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "LCNRV Item-by-Item — Jinn-Feng Foods",
        instruction:
          "Masukkan final inventory value setiap item dan total LCNRV.",
        currency: "¥",
        headers: ["Food", "Cost", "NRV", "Final inventory value"],
        rows: [
          {
            id: "uas-jinn-spinach",
            label: "Spinach",
            cells: [
              { id: "uas-jinn-spinach-c", readonly: true, display: "¥80,000" },
              { id: "uas-jinn-spinach-n", readonly: true, display: "¥120,000" },
              { id: "uas-jinn-spinach-a", answer: 80000 },
            ],
          },
          {
            id: "uas-jinn-carrots",
            label: "Carrots",
            cells: [
              { id: "uas-jinn-carrots-c", readonly: true, display: "¥100,000" },
              { id: "uas-jinn-carrots-n", readonly: true, display: "¥110,000" },
              { id: "uas-jinn-carrots-a", answer: 100000 },
            ],
          },
          {
            id: "uas-jinn-beans",
            label: "Cut beans",
            cells: [
              { id: "uas-jinn-beans-c", readonly: true, display: "¥50,000" },
              { id: "uas-jinn-beans-n", readonly: true, display: "¥40,000" },
              { id: "uas-jinn-beans-a", answer: 40000 },
            ],
          },
          {
            id: "uas-jinn-peas",
            label: "Peas",
            cells: [
              { id: "uas-jinn-peas-c", readonly: true, display: "¥90,000" },
              { id: "uas-jinn-peas-n", readonly: true, display: "¥72,000" },
              { id: "uas-jinn-peas-a", answer: 72000 },
            ],
          },
          {
            id: "uas-jinn-mixed",
            label: "Mixed vegetables",
            cells: [
              { id: "uas-jinn-mixed-c", readonly: true, display: "¥95,000" },
              { id: "uas-jinn-mixed-n", readonly: true, display: "¥92,000" },
              { id: "uas-jinn-mixed-a", answer: 92000 },
            ],
          },
          {
            id: "uas-jinn-total",
            label: "Total LCNRV item-by-item",
            cells: [
              { id: "uas-jinn-total-c", readonly: true, display: "¥415,000" },
              { id: "uas-jinn-total-n", readonly: true, display: "¥434,000" },
              { id: "uas-jinn-total-a", answer: 384000 },
            ],
          },
        ],
      },
    },
    JINN_FENG_LCNRV_CASE.explanationBlock,
    ...RICARDO_LCNRV_RECOVERY_CASE.promptBlocks,
    {
      kind: "journal-builder",
      spec: {
        title: "Inventory Write-Down and Recovery — Ricardo SpA",
        instruction: "Susun jurnal loss method dengan allowance account.",
        currency: "€",
        accountChoices: [
          "Loss Due to Decline of Inventory to Net Realizable Value",
          "Allowance to Reduce Inventory to Net Realizable Value",
          "Recovery of Inventory Loss",
          "Inventory",
        ],
        lines: [
          {
            id: "uas-ric-dr1",
            group: "Write-down: cost €82,000; NRV €70,000",
            account: "Loss Due to Decline of Inventory to Net Realizable Value",
            debit: 12000,
          },
          {
            id: "uas-ric-cr1",
            account: "Allowance to Reduce Inventory to Net Realizable Value",
            credit: 12000,
          },
          {
            id: "uas-ric-dr2",
            group: "Recovery: NRV subsequently increases to €74,000",
            account: "Allowance to Reduce Inventory to Net Realizable Value",
            debit: 4000,
          },
          {
            id: "uas-ric-cr2",
            account: "Recovery of Inventory Loss",
            credit: 4000,
          },
        ],
      },
    },
    RICARDO_LCNRV_RECOVERY_CASE.explanationBlock,
    ...APRES_PURCHASE_COMMITMENT_CASE.promptBlocks,
    {
      kind: "journal-builder",
      spec: {
        title: "Purchase Commitment Loss — Apres Paper AG",
        instruction:
          "Susun jurnal saat market price turun dan saat kontrak dieksekusi.",
        currency: "€",
        accountChoices: [
          "Unrealized Holding Gain or Loss—Income",
          "Purchase Commitment Liability",
          "Purchases",
          "Inventory",
          "Cash",
        ],
        lines: [
          {
            id: "uas-apres-loss-dr",
            group: "December 31, 2025 — recognize onerous purchase commitment",
            account: "Unrealized Holding Gain or Loss—Income",
            debit: 3000000,
          },
          {
            id: "uas-apres-loss-cr",
            account: "Purchase Commitment Liability",
            credit: 3000000,
          },
          {
            id: "uas-apres-exec-dr1",
            group: "When contract is executed",
            account: "Purchases",
            debit: 7000000,
          },
          {
            id: "uas-apres-exec-dr2",
            account: "Purchase Commitment Liability",
            debit: 3000000,
          },
          { id: "uas-apres-exec-cr", account: "Cash", credit: 10000000 },
        ],
      },
    },
    APRES_PURCHASE_COMMITMENT_CASE.explanationBlock,

    { kind: "h2", text: "Bagian E — Gross Profit Method Cetus" },
    ...CETUS_GROSS_PROFIT_CASE.promptBlocks,
    {
      kind: "builder",
      instructions:
        "Susun schedule estimasi ending inventory dengan gross profit rate 30% dari sales.",
      spec: {
        entity: "Cetus SE",
        title: "Gross Profit Method Schedule",
        period: "Illustration 8.13",
        currency: "€",
        lines: [
          {
            id: "uas-cet-beg",
            kind: "given",
            label: "Beginning inventory, at cost",
            amount: 60000,
          },
          {
            id: "uas-cet-pur",
            kind: "input",
            label: "Purchases, at cost",
            amount: 200000,
          },
          {
            id: "uas-cet-avail",
            kind: "computed",
            label: "Goods available, at cost",
            amount: 260000,
            rule: "top",
            compute: [{ id: "uas-cet-beg" }, { id: "uas-cet-pur" }],
          },
          {
            id: "uas-cet-sales",
            kind: "given",
            label: "Sales, at selling price",
            amount: 280000,
          },
          {
            id: "uas-cet-gp",
            kind: "input",
            label: "Less: Gross profit, 30% of sales",
            amount: 84000,
            bracket: true,
            indent: 1,
          },
          {
            id: "uas-cet-cogs",
            kind: "computed",
            label: "Estimated COGS / sales at cost",
            amount: 196000,
            rule: "top",
            compute: [{ id: "uas-cet-sales" }, { id: "uas-cet-gp", sign: -1 }],
          },
          {
            id: "uas-cet-end",
            kind: "computed",
            label: "Approximate ending inventory, at cost",
            amount: 64000,
            rule: "double",
            bold: true,
            compute: [
              { id: "uas-cet-avail" },
              { id: "uas-cet-cogs", sign: -1 },
            ],
          },
        ],
      },
    },
    CETUS_GROSS_PROFIT_CASE.explanationBlock,

    { kind: "h2", text: "Bagian F — Retail Method dan Inventory Analysis" },
    ...DEBENHAMS_RETAIL_INVENTORY_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Retail Inventory Method — Debenhams",
        instruction:
          "Hitung goods available, cost-to-retail ratio, ending inventory at retail, dan ending inventory at cost.",
        currency: "£",
        headers: ["Output", "Answer"],
        rows: [
          {
            id: "uas-deb-avail-cost",
            label: "Goods available at cost",
            cells: [{ id: "uas-deb-avail-cost-a", answer: 77000 }],
          },
          {
            id: "uas-deb-avail-retail",
            label: "Goods available at retail",
            cells: [{ id: "uas-deb-avail-retail-a", answer: 110000 }],
          },
          {
            id: "uas-deb-end-retail",
            label: "Ending inventory at retail",
            cells: [{ id: "uas-deb-end-retail-a", answer: 25000 }],
          },
          {
            id: "uas-deb-ratio",
            label: "Cost-to-retail ratio",
            cells: [{ id: "uas-deb-ratio-a", answer: "70%" }],
          },
          {
            id: "uas-deb-end-cost",
            label: "Ending inventory at cost",
            cells: [{ id: "uas-deb-end-cost-a", answer: 17500 }],
          },
        ],
      },
    },
    DEBENHAMS_RETAIL_INVENTORY_CASE.explanationBlock,
    ...INFUSION_CONVENTIONAL_RETAIL_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Conventional Retail Inventory Method — In-Fusion SA",
        instruction:
          "Gunakan LCNRV ratio yang memasukkan net markups tetapi mengecualikan markdowns dari denominator.",
        currency: "€",
        headers: ["Output", "Answer"],
        rows: [
          {
            id: "uas-inf-merch",
            label: "Merchandise available before net markups — retail",
            cells: [{ id: "uas-inf-merch-a", answer: 36000 }],
          },
          {
            id: "uas-inf-netmarkup",
            label: "Net markups",
            cells: [{ id: "uas-inf-netmarkup-a", answer: 2000 }],
          },
          {
            id: "uas-inf-ratio-base",
            label: "Retail basis for LCNRV ratio",
            cells: [{ id: "uas-inf-ratio-base-a", answer: 38000 }],
          },
          {
            id: "uas-inf-ratio",
            label: "Cost-to-retail ratio (LCNRV)",
            cells: [{ id: "uas-inf-ratio-a", answer: "53.9%" }],
          },
          {
            id: "uas-inf-netmarkdown",
            label: "Net markdowns deducted after ratio",
            cells: [{ id: "uas-inf-netmarkdown-a", answer: 500 }],
          },
          {
            id: "uas-inf-end-retail",
            label: "Ending inventory, at retail",
            cells: [{ id: "uas-inf-end-retail-a", answer: 12500 }],
          },
          {
            id: "uas-inf-end-lcnrv",
            label: "Ending inventory at approximate LCNRV",
            cells: [
              { id: "uas-inf-end-lcnrv-a", answer: 6737.5, tolerance: 0.01 },
            ],
          },
        ],
      },
    },
    INFUSION_CONVENTIONAL_RETAIL_CASE.explanationBlock,
    ...TATE_INVENTORY_ANALYSIS_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Inventory Analysis — Tate & Lyle plc",
        instruction:
          "Hitung average inventory, inventory turnover, dan average days to sell inventory.",
        currency: "£",
        headers: ["Output", "Answer"],
        rows: [
          {
            id: "uas-tate-avg",
            label: "Average inventory, in millions",
            cells: [{ id: "uas-tate-avg-a", answer: 426.5, tolerance: 0.01 }],
          },
          {
            id: "uas-tate-turnover",
            label: "Inventory turnover",
            cells: [
              { id: "uas-tate-turnover-a", answer: 3.8, tolerance: 0.01 },
            ],
          },
          {
            id: "uas-tate-days",
            label: "Average days to sell inventory",
            cells: [{ id: "uas-tate-days-a", answer: 96, tolerance: 1 }],
          },
        ],
      },
    },
    TATE_INVENTORY_ANALYSIS_CASE.explanationBlock,
    ...NORWOOD_INVENTORY_TURNOVER_CASE.promptBlocks,
    {
      kind: "table-fill",
      spec: {
        title: "Integrated Inventory Turnover — Norwood Company",
        instruction:
          "Setelah ownership dan LCNRV adjustments, hitung angka inventory dan turnover yang telah disesuaikan.",
        currency: "$",
        headers: ["Output", "Answer"],
        rows: [
          {
            id: "uas-nor-ending",
            label: "Adjusted ending inventory",
            cells: [{ id: "uas-nor-ending-a", answer: 1042800 }],
          },
          {
            id: "uas-nor-cogs",
            label: "Adjusted cost of goods sold",
            cells: [{ id: "uas-nor-cogs-a", answer: 11740200 }],
          },
          {
            id: "uas-nor-turn",
            label: "Adjusted inventory turnover",
            cells: [{ id: "uas-nor-turn-a", answer: 11.3, tolerance: 0.1 }],
          },
        ],
      },
    },
    NORWOOD_INVENTORY_TURNOVER_CASE.explanationBlock,
  ],
};

export const AKM1_REVIEW_READINGS: Partial<Record<"uts" | "uas", Reading>> = {
  uts: AKM1_SIMULATION_UTS_READING,
  uas: AKM1_SIMULATION_UAS_READING,
};

// ---------- Registry per TM ----------
export const AKK201_READINGS: Record<number, Reading> = {
  1: tm1,
  2: tm2,
  3: tm3,
  4: tm4,
  5: tm5,
  6: tm6,
  7: tm7,
  8: tm8,
  9: tm9,
  10: tm10,
  11: tm11,
  12: tm12,
  13: tm13,
  14: tm14,
};
