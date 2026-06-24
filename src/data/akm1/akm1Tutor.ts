import type { ContentBlock } from "../../types";

export const AKM1_TUTOR_BLOCKS: ContentBlock[] = [
  { kind: "h2", text: "Modul Tutor UAS AKM 1 - Cheat Sheet & Catatan Penting" },
  {
    kind: "callout",
    variant: "info",
    title: "Sumber Materi",
    text: "Materi ini diekstrak dari **Modul Tutor UAS AKM 1 (TM 8-14)** dan **PPT REVIEW PRA UAS AKM I**. Fokus utama adalah pada pemahaman pola hitungan, jurnal, dan variasi soal yang berpeluang besar keluar pada UAS."
  },
  { kind: "h3", text: "Cheat Sheet Rumus dan Jurnal Inti" },
  {
    kind: "table",
    headers: ["Topik", "Rumus/Jurnal Kunci"],
    rows: [
      ["Cash equivalents", "Short-term, highly liquid, readily convertible to known cash, insignificant risk; biasanya original maturity <= 3 bulan."],
      ["Bank overdraft", "Jika bank berbeda: current liability. Jika bank sama dan integral cash management: boleh di-offset dengan cash."],
      ["Net method sales discount", "Penjualan dicatat net: AR = Sales x (1 - diskon). Jika tidak diskon: Cash (Dr) gross; AR (Cr) net; Sales Discounts Forfeited (Cr) selisih."],
      ["Present value zero-interest note", "PV = Face value x PV factor. Discount = Face - PV. Interest revenue tahun berjalan = Carrying amount awal x effective rate."],
      ["Allowance - % receivables", "Desired allowance = AR x estimasi %. Bad debt expense = desired ending allowance - credit balance lama."],
      ["Factoring without recourse", "Cash = AR - finance charge - holdback. Loss on sale = finance charge. Due from Factor = holdback."],
      ["AR turnover", "Net credit sales / Average accounts receivable."],
      ["COGS periodic", "Beginning inventory + Net purchases - Ending inventory."],
      ["Weighted-average periodic", "Average cost per unit = Cost of goods available / Units available. EI = Ending units x average cost. COGS = Sold units x average cost."],
      ["FIFO periodic", "Ending inventory berasal dari unit terbaru; COGS berasal dari unit terlama."],
      ["Inventory turnover", "COGS / Average inventory."],
      ["LCNRV", "Inventory dilaporkan sebesar yang lebih rendah antara cost dan NRV."],
      ["NRV", "Estimated selling price - estimated cost to complete - estimated selling costs."],
      ["Inventory write-down allowance", "Loss Due to Decline of Inventory to NRV (Dr); Allowance to Reduce Inventory to NRV (Cr)."],
      ["Recovery inventory loss", "Allowance (Dr); Recovery of Inventory Loss (Cr), dibatasi maksimum sebesar write-down awal."],
      ["Gross profit method", "Estimated COGS = Net Sales x (1 - Gross Profit %). Estimated EI = Goods Available - Estimated COGS."],
      ["Retail inventory method", "Cost-to-retail ratio = Cost of Goods Available / Retail Goods Available. Estimated EI at Cost = Ending Inventory at Retail x Ratio."]
    ]
  },
  { kind: "h3", text: "Catatan Penting Atas Kunci Kuis & Jebakan UAS" },
  {
    kind: "callout",
    variant: "warning",
    title: "Inkonsistensi Kuis Pra-UAS vs Standar IFRS (Perhatikan Kunci Dosen)",
    text: "Beberapa soal Kuis memiliki kunci yang berbeda dari standar IFRS murni. Pada UAS, kerjakan sesuai standar IFRS, namun waspadai arah dosen:\\n\\n- **Soal Antorio (Non-monetary exchange):** PV Penjualan $640.000 vs Carrying Amount $690.000 secara standar menghasilkan **Loss $50.000**, namun kunci kuis menunjuk **Gain**.\\n- **Soal Aging PT Snk/SnE:** Hasil sebenarnya Rp1.209.000, tapi kunci kuis Rp1.139.000 (cocok jika tarif 61-90 hari adalah 15%, bukan 25%).\\n- **Soal PT Mawar (Recovery):** Jika ditanya 'maksimum pemulihan', maka batasnya Rp60.000.000 (sesuai write-down awal). Jika ditanya pemulihan aktual tahun ini saat NRV naik Rp40.000.000, maka pemulihannya hanya **Rp40.000.000**.\\n- **Soal Oscar Piastri:** Kunci kuis mensyaratkan Beginning Inventory 4.000 unit, meskipun teks menulis 4.800 unit."
  },
  { kind: "h3", text: "Peta Materi & Strategi TM 8-14" },
  {
    kind: "p",
    text: "Cara belajar paling efisien untuk AKM I adalah memahami pola, bukan menghafal jawaban. Hampir semua soal bisa dipecahkan dengan 3 pertanyaan utama: **Apa akun yang diukur**, **Berapa basis pengukurannya**, dan **Apakah ada penyesuaian** (diskon, allowance, NRV, error)."
  },
  {
    kind: "table",
    headers: ["TM", "Fokus Utama", "Kemampuan yang Harus Dikuasai"],
    rows: [
      ["8-9: Cash & Receivables", "Klasifikasi kas, net/gross method, notes receivable, factoring", "Membedakan cash equivalents, jurnal bank overdraft, hitung bad debt expense (aging), jurnal factoring without recourse, AR turnover."],
      ["10-11: Inventory Cost-Basis", "FOB, periodic vs perpetual, FIFO vs Average, errors", "Menentukan kapan hak milik berpindah (shipping point vs destination), hitung COGS/EI dengan FIFO dan Weighted Average, hitung dampak error inventory ke net income."],
      ["12-13: Additional Valuation", "LCNRV, Gross Profit Method, Retail Method", "Hitung NRV item-by-item, susun jurnal allowance LCNRV & recovery, hitung estimasi inventory dari gross profit rate, alokasi net markups di conventional retail."]
    ]
  }
];
