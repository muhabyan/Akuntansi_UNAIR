// =============================================================
// src/data/readings/ekt109.ts
// Rangkuman KOMPREHENSIF — Pengantar Teori Ekonomi (EKT109)
// TM1–7 (mikro) dirangkum dari catatan UTS; TM8–14 (makro) dari RPS.
// Sumber: Samuelson & Nordhaus, Economics (19th); Mankiw, Principles (9th).
// =============================================================
import type { Reading } from '../../types';
import { PTE_PRA_UAS_READINGS, PTE_PRA_UAS_SUPPLEMENT } from './ptePraUAS';

const SVG_PPF = `
<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <title>Kurva kemungkinan produksi</title>
  <desc>Kurva cekung yang membedakan titik efisien, tidak efisien, dan kombinasi produksi yang belum dapat dicapai.</desc>
  <line x1="50" y1="20" x2="50" y2="240" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="240" x2="390" y2="240" stroke="#475569" stroke-width="1.5"/>
  <path d="M50,40 Q150,90 230,150 Q300,200 360,240" fill="none" stroke="#E2C044" stroke-width="2.5"/>
  <circle cx="150" cy="90" r="4" fill="#E2C044"/><text x="158" y="88" fill="#cbd5e1" font-size="11">A (efisien)</text>
  <circle cx="120" cy="190" r="4" fill="#38bdf8"/><text x="128" y="194" fill="#cbd5e1" font-size="11">C (tidak efisien)</text>
  <circle cx="320" cy="70" r="4" fill="#f87171"/><text x="270" y="60" fill="#cbd5e1" font-size="11">D (tak mungkin)</text>
  <text x="20" y="130" fill="#94a3b8" font-size="11" transform="rotate(-90 20,130)">Senjata</text>
  <text x="210" y="265" fill="#94a3b8" font-size="11">Mentega</text>
</svg>`;

const SVG_SD = `
<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
  <title>Keseimbangan permintaan dan penawaran</title>
  <desc>Kurva penawaran menanjak dan kurva permintaan menurun berpotongan pada titik keseimbangan harga dan kuantitas.</desc>
  <line x1="50" y1="20" x2="50" y2="240" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="240" x2="390" y2="240" stroke="#475569" stroke-width="1.5"/>
  <line x1="70" y1="40" x2="350" y2="220" stroke="#E2C044" stroke-width="2.5"/><text x="352" y="222" fill="#E2C044" font-size="12" font-weight="700">S</text>
  <line x1="70" y1="220" x2="350" y2="40" stroke="#38bdf8" stroke-width="2.5"/><text x="352" y="44" fill="#38bdf8" font-size="12" font-weight="700">D</text>
  <circle cx="210" cy="130" r="5" fill="#fff"/><text x="216" y="126" fill="#cbd5e1" font-size="11">E (P*, Q*)</text>
  <text x="20" y="130" fill="#94a3b8" font-size="11" transform="rotate(-90 20,130)">Harga (P)</text>
  <text x="200" y="265" fill="#94a3b8" font-size="11">Kuantitas (Q)</text>
</svg>`;

const tm1: Reading = {
  tm: 1,
  title: 'Konsep Dasar Ilmu Ekonomi (Bagian 1): Kelangkaan, Pilihan & PPF',
  ref: 'Samuelson Ch. 1–2 · Mankiw Ch. 1',
  intro:
    'Ekonomi lahir dari satu kenyataan: sumber daya **langka**, sedangkan kebutuhan **tak terbatas**. Karena itu setiap masyarakat — dan setiap individu — harus **memilih**, dan setiap pilihan punya pengorbanan.',
  objectives: [
    'Menjelaskan kelangkaan (scarcity) dan efisiensi (efficiency).',
    'Memahami biaya peluang (opportunity cost) & berpikir marjinal.',
    'Menjelaskan 10 prinsip ekonomi Mankiw.',
    'Membaca kurva kemungkinan produksi (PPF).',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Kelangkaan & Efisiensi' },
    { kind: 'p', text: '**Ekonomi** mempelajari bagaimana masyarakat menggunakan sumber daya yang **langka** untuk memenuhi kebutuhan yang tak terbatas. Dua tema utamanya: **kelangkaan (scarcity)** dan **efisiensi (efficiency)** — menggunakan sumber daya sehemat mungkin tanpa pemborosan.' },
    { kind: 'callout', variant: 'key', title: 'Opportunity Cost', text: 'Karena harus memilih, setiap keputusan punya **biaya peluang** = nilai terbaik dari alternatif yang **tidak** dipilih. Contoh: punya 3 jam, pilih belajar daripada kerja paruh waktu Rp150.000 → opportunity cost = Rp150.000.' },

    { kind: 'h2', text: 'B. 10 Prinsip Ekonomi (Mankiw)' },
    { kind: 'h3', text: 'Bagaimana individu mengambil keputusan' },
    { kind: 'ol', items: [
      'Orang menghadapi **trade-off**.',
      'Biaya sesuatu = **opportunity cost**-nya.',
      'Orang rasional berpikir pada **margin** (tambahan).',
      'Orang merespons **insentif**.',
    ] },
    { kind: 'h3', text: 'Bagaimana orang berinteraksi' },
    { kind: 'ol', items: [
      'Perdagangan dapat menguntungkan **semua pihak**.',
      'Pasar biasanya **cara baik** mengorganisasi aktivitas ekonomi.',
      'Pemerintah **kadang** dapat memperbaiki hasil pasar.',
    ] },
    { kind: 'h3', text: 'Bagaimana perekonomian bekerja' },
    { kind: 'ol', items: [
      'Standar hidup bergantung pada kemampuan **memproduksi** barang & jasa (produktivitas).',
      'Harga naik bila pemerintah **mencetak terlalu banyak uang** (inflasi).',
      'Ada **trade-off jangka pendek** antara inflasi & pengangguran.',
    ] },

    { kind: 'h2', text: 'C. Production Possibilities Frontier (PPF)' },
    { kind: 'p', text: '**PPF** menunjukkan berbagai kombinasi output maksimum yang bisa diproduksi dengan sumber daya & teknologi tersedia secara penuh dan efisien.' },
    { kind: 'figure', title: 'Kurva Kemungkinan Produksi', svg: SVG_PPF, altText: 'Kurva kemungkinan produksi dengan titik A efisien di kurva, titik C tidak efisien di dalam kurva, dan titik D belum dapat dicapai di luar kurva.', caption: 'Titik pada kurva menunjukkan penggunaan sumber daya yang efisien; titik di dalam kurva menunjukkan sumber daya menganggur; titik di luar kurva belum dapat dicapai.' },
    { kind: 'ul', items: [
      '**Di kurva** → efisien (semua sumber daya optimal).',
      '**Di dalam kurva** → tidak efisien (ada sumber daya menganggur).',
      '**Di luar kurva** → tidak mungkin dengan sumber daya saat ini.',
      'PPF **cekung** karena hukum **biaya peluang yang meningkat** — sumber daya tak bisa dialihkan sempurna antar produk.',
    ] },
  ],
};

const tm2: Reading = {
  tm: 2,
  title: 'Konsep Dasar Ilmu Ekonomi (Bagian 2): Sistem Ekonomi & Peran Pemerintah',
  ref: 'Samuelson Ch. 1–2 · Mankiw Ch. 1–2',
  intro:
    'Setiap masyarakat menjawab tiga pertanyaan ekonomi dasar melalui suatu **sistem ekonomi**. Pasar mengoordinasi lewat "tangan tak terlihat", tetapi pemerintah hadir saat pasar gagal.',
  objectives: [
    'Menjelaskan tiga pertanyaan fundamental ekonomi.',
    'Membandingkan sistem ekonomi pasar, komando, tradisional, dan campuran.',
    'Menjelaskan invisible hand & kegagalan pasar.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Tiga Pertanyaan Fundamental' },
    { kind: 'ol', items: [
      '**What?** Barang/jasa apa & berapa banyak diproduksi?',
      '**How?** Metode produksi apa (padat karya/padat modal, teknologi apa)?',
      '**For Whom?** Siapa yang menikmati output (distribusi pendapatan)?',
    ] },
    { kind: 'h2', text: 'B. Sistem Ekonomi' },
    { kind: 'table', headers: ['Sistem', 'Pengelola', 'Mekanisme', 'Contoh'], rows: [
      ['Pasar bebas', 'Swasta/individu', 'Harga & pasar', 'AS (dominan)'],
      ['Komando', 'Pemerintah', 'Perencanaan terpusat', 'Korea Utara'],
      ['Tradisional', 'Adat/kebiasaan', 'Warisan turun-temurun', 'Masyarakat primitif'],
      ['Campuran (mixed)', 'Swasta + pemerintah', 'Pasar + regulasi', 'Indonesia, Jerman'],
    ] },
    { kind: 'h2', text: 'C. Invisible Hand & Kegagalan Pasar' },
    { kind: 'p', text: '**Adam Smith (1776):** individu yang mengejar kepentingan pribadi di pasar kompetitif, seolah dituntun **"tangan tak terlihat"**, justru meningkatkan kesejahteraan umum. **Harga** menjadi sinyal yang mengoordinasi jutaan keputusan tanpa perencanaan terpusat.' },
    { kind: 'table', headers: ['Kegagalan Pasar', 'Penjelasan', 'Respons Pemerintah'], rows: [
      ['Monopoli/kekuatan pasar', 'Satu produsen dominan, harga tinggi', 'Regulasi anti-monopoli'],
      ['Eksternalitas', 'Biaya/manfaat ke pihak ketiga (polusi)', 'Pajak, subsidi, regulasi'],
      ['Barang publik', 'Non-rival & non-excludable (pertahanan)', 'Disediakan langsung pemerintah'],
      ['Informasi asimetris', 'Satu pihak lebih tahu', 'Regulasi pengungkapan'],
    ] },
    { kind: 'callout', variant: 'tip', title: 'Mixed economy', text: 'Hampir semua negara nyata adalah **ekonomi campuran**: pasar + intervensi pemerintah untuk mengatasi kegagalan pasar, menyediakan barang publik, dan menjaga stabilitas.' },
  ],
};

const tm3: Reading = {
  tm: 3,
  title: 'Elemen Dasar Permintaan & Penawaran',
  ref: 'Samuelson Ch. 3 · Mankiw Ch. 4',
  intro:
    'Permintaan dan penawaran adalah model paling fundamental dalam ekonomi. Interaksi keduanya menentukan **harga** dan **kuantitas** keseimbangan di pasar kompetitif.',
  objectives: [
    'Menyatakan hukum permintaan & penawaran.',
    'Membedakan pergerakan sepanjang kurva vs pergeseran kurva.',
    'Menentukan keseimbangan pasar dan dampak pergeseran.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Hukum Permintaan & Penawaran' },
    { kind: 'ul', items: [
      '**Hukum permintaan:** ceteris paribus, harga ↑ → jumlah diminta ↓ (kurva turun ke kanan).',
      '**Hukum penawaran:** ceteris paribus, harga ↑ → jumlah ditawarkan ↑ (kurva naik ke kanan).',
    ] },
    { kind: 'callout', variant: 'warning', title: 'Geser vs gerak', text: 'Perubahan **harga barang itu sendiri** → **pergerakan sepanjang** kurva. Perubahan **faktor lain** (pendapatan, harga barang lain, selera, teknologi, pajak) → **pergeseran** kurva.' },
    { kind: 'h2', text: 'B. Faktor Penggeser' },
    { kind: 'table', headers: ['Penggeser DEMAND', 'Arah (jika naik)'], rows: [
      ['Pendapatan (barang normal)', 'Demand ↑ (geser kanan)'],
      ['Pendapatan (barang inferior)', 'Demand ↓ (geser kiri)'],
      ['Harga barang substitusi ↑', 'Demand ↑'],
      ['Harga barang komplementer ↑', 'Demand ↓'],
      ['Selera / jumlah pembeli ↑', 'Demand ↑'],
    ] },
    { kind: 'table', headers: ['Penggeser SUPPLY', 'Arah'], rows: [
      ['Harga input ↑', 'Supply ↓ (geser kiri)'],
      ['Teknologi lebih efisien', 'Supply ↑ (geser kanan)'],
      ['Pajak ↑', 'Supply ↓'],
      ['Subsidi ↑ / jumlah produsen ↑', 'Supply ↑'],
    ] },
    { kind: 'h2', text: 'C. Keseimbangan Pasar' },
    { kind: 'figure', title: 'Keseimbangan Pasar', svg: SVG_SD, altText: 'Kurva permintaan menurun dan kurva penawaran menanjak berpotongan di titik E yang menunjukkan harga dan kuantitas keseimbangan.', caption: 'Perpotongan kurva permintaan dan penawaran menentukan harga P* dan kuantitas Q* keseimbangan.' },
    { kind: 'p', text: 'Keseimbangan terjadi saat **Qd = Qs** (harga P*, kuantitas Q*). Bila P > P* → **surplus** (Qs > Qd), harga turun. Bila P < P* → **shortage** (Qd > Qs), harga naik.' },
    { kind: 'table', headers: ['Kejadian', 'Efek pada P*', 'Efek pada Q*'], rows: [
      ['Demand ↑ (geser kanan)', '↑ Naik', '↑ Naik'],
      ['Demand ↓ (geser kiri)', '↓ Turun', '↓ Turun'],
      ['Supply ↑ (geser kanan)', '↓ Turun', '↑ Naik'],
      ['Supply ↓ (geser kiri)', '↑ Naik', '↓ Turun'],
    ] },
    { kind: 'example', title: 'Kasus: Kopi & krisis cuaca', blocks: [
      { kind: 'p', text: 'El Niño merusak panen kopi → **supply kopi turun** (geser kiri) → harga kopi **naik**, kuantitas **turun**. Konsumen beralih ke teh (substitusi) → **demand teh naik**.' },
    ] },
  ],
};

const tm4: Reading = {
  tm: 4,
  title: 'Permintaan & Perilaku Konsumen',
  ref: 'Samuelson Ch. 5 · Mankiw Ch. 5 (Apx Ch. 21)',
  intro:
    'Mengapa kurva permintaan turun? Jawabannya ada pada **utilitas** (kepuasan) konsumen dan keterbatasan **anggaran**. Konsumen rasional mengalokasikan uangnya agar kepuasan maksimum.',
  objectives: [
    'Membedakan total utility (TU) & marginal utility (MU).',
    'Menjelaskan hukum utilitas marginal yang menurun.',
    'Menentukan keseimbangan konsumen & garis anggaran.',
    'Membedakan income effect & substitution effect.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Total & Marginal Utility' },
    { kind: 'formula', text: 'MU = ΔTU ÷ ΔQ', note: 'MU = tambahan kepuasan dari satu unit tambahan; TU = total kepuasan.' },
    { kind: 'p', text: '**Hukum utilitas marginal yang menurun:** semakin banyak unit dikonsumsi, MU tiap unit tambahan **menurun**. Saat **MU = 0**, TU **maksimum**; bila MU negatif, TU mulai turun.' },
    { kind: 'table', headers: ['Q', 'TU', 'MU'], rows: [
      ['1', '10', '10'], ['2', '18', '8'], ['3', '24', '6'], ['4', '28', '4'], ['5', '30', '2'], ['6', '30', '0'], ['7', '28', '−2'],
    ] },
    { kind: 'h2', text: 'B. Keseimbangan Konsumen' },
    { kind: 'formula', text: 'MU₁ ÷ P₁ = MU₂ ÷ P₂ = … = MUₙ ÷ Pₙ', note: 'Kepuasan maksimum saat MU per rupiah SAMA untuk semua barang.' },
    { kind: 'example', title: 'Alokasi optimal', blocks: [
      { kind: 'p', text: 'Sekar punya Rp60.000; harga X (makanan) Rp10.000, Y (minuman) Rp5.000. Optimal saat **MUₓ/10.000 = MUᵧ/5.000**, yaitu **MUₓ/MUᵧ = 2**.' },
    ] },
    { kind: 'h2', text: 'C. Garis Anggaran (Budget Constraint)' },
    { kind: 'formula', text: 'P₁Q₁ + P₂Q₂ = I', note: 'I = pendapatan. Pendapatan berubah → garis bergeser sejajar. Harga berubah → garis berputar (pivot).' },
    { kind: 'h2', text: 'D. Income Effect & Substitution Effect' },
    { kind: 'ul', items: [
      '**Substitution effect:** harga relatif berubah → konsumen beralih ke barang yang lebih murah; selalu berlawanan arah dengan perubahan harga.',
      '**Income effect:** harga berubah → daya beli riil berubah; barang normal: harga ↑ → konsumsi ↓.',
      '**Total effect = substitution + income effect.**',
    ] },
  ],
};

const tm5: Reading = {
  tm: 5,
  title: 'Elastisitas & Penerapannya',
  ref: 'Samuelson Ch. 4 · Mankiw Ch. 5',
  intro:
    'Elastisitas mengukur **seberapa responsif** kuantitas terhadap perubahan harga (atau variabel lain). Ia menjelaskan mengapa menaikkan harga kadang menaikkan pendapatan, kadang justru menurunkannya.',
  objectives: [
    'Menghitung elastisitas harga permintaan (termasuk metode midpoint).',
    'Mengaitkan elastisitas dengan total revenue (TR).',
    'Membedakan elastisitas penawaran, pendapatan, dan silang.',
    'Menerapkan elastisitas pada kebijakan & strategi harga.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Price Elasticity of Demand (Ed)' },
    { kind: 'formula', text: 'Ed = (%ΔQd) ÷ (%ΔP) = (ΔQ/ΔP) × (P/Q)', note: 'Midpoint: pakai rata-rata sebagai basis agar nilai tidak bergantung arah.' },
    { kind: 'table', headers: ['Nilai Ed', 'Jenis', 'TR jika harga ↑'], rows: [
      ['Ed = 0', 'Perfectly inelastic', 'TR ↑'],
      ['Ed < 1', 'Inelastic', 'TR ↑'],
      ['Ed = 1', 'Unit elastic', 'TR tetap (maks)'],
      ['Ed > 1', 'Elastic', 'TR ↓'],
      ['Ed = ∞', 'Perfectly elastic', 'TR → 0'],
    ] },
    { kind: 'callout', variant: 'key', title: 'Aturan TR', text: 'Demand **inelastic** → naikkan harga untuk **menaikkan** TR. Demand **elastic** → turunkan harga untuk menaikkan TR. Pada **unit elastic**, TR tidak berubah.' },
    { kind: 'h2', text: 'B. Penentu Elastisitas Permintaan' },
    { kind: 'ul', items: [
      'Makin banyak **substitusi** → makin elastis.',
      '**Kebutuhan pokok** cenderung inelastic; **kemewahan** elastic.',
      'Pasar lebih **sempit** lebih elastis (ayam vs daging).',
      '**Jangka panjang** lebih elastis daripada jangka pendek.',
      'Barang yang menyerap **porsi besar** pendapatan lebih elastis.',
    ] },
    { kind: 'h2', text: 'C. Elastisitas Lain' },
    { kind: 'ul', items: [
      '**Elastisitas penawaran (Es):** Es>1 elastic; Es=0 perfectly inelastic (mis. tanah); Es=∞ perfectly elastic.',
      '**Elastisitas pendapatan:** + untuk barang normal, − untuk barang inferior.',
      '**Elastisitas silang:** + untuk substitusi, − untuk komplementer.',
    ] },
    { kind: 'h2', text: 'D. Aplikasi' },
    { kind: 'ul', items: [
      '**Kebijakan pajak:** barang inelastic (rokok, BBM) → pajak efektif menambah penerimaan; beban lebih besar ke konsumen.',
      '**Paradoks petani:** demand beras inelastic → panen melimpah (supply ↑) menurunkan harga drastis → pendapatan petani bisa **turun**.',
    ] },
  ],
};

const tm6: Reading = {
  tm: 6,
  title: 'Kebijakan Pemerintah dalam Kerangka Permintaan–Penawaran',
  ref: 'Samuelson Ch. 7 · Mankiw Ch. 6',
  intro:
    'Pemerintah sering mengintervensi pasar lewat **kontrol harga**, **pajak**, dan **subsidi**. Analisis permintaan–penawaran menunjukkan siapa yang diuntungkan, siapa yang menanggung beban, dan efek sampingnya.',
  objectives: [
    'Menganalisis dampak price ceiling & price floor.',
    'Menjelaskan tax incidence (siapa menanggung pajak).',
    'Menjelaskan dampak subsidi & tarif impor.',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Kontrol Harga' },
    { kind: 'table', headers: ['Kebijakan', 'Syarat efektif', 'Akibat', 'Contoh'], rows: [
      ['Price ceiling (maksimum)', 'P_ceiling < P*', 'Shortage, antrian, pasar gelap', 'HET, BBM subsidi, rent control'],
      ['Price floor (minimum)', 'P_floor > P*', 'Surplus', 'Upah minimum, harga dasar gabah'],
    ] },
    { kind: 'callout', variant: 'tip', title: 'Upah minimum', text: 'Upah minimum adalah **price floor** di pasar tenaga kerja. Bila ditetapkan di atas upah keseimbangan → **surplus tenaga kerja** (pengangguran).' },
    { kind: 'h2', text: 'B. Pajak & Tax Incidence' },
    { kind: 'p', text: '**Tax incidence** = siapa yang sebenarnya menanggung beban pajak, terlepas dari siapa yang menyetor secara hukum.' },
    { kind: 'formula', text: 'Pajak per unit (t) = Pb − Ps', note: 'Pb = harga yang dibayar pembeli; Ps = harga yang diterima penjual.' },
    { kind: 'callout', variant: 'key', title: 'Aturan beban pajak', text: 'Beban pajak lebih besar pada pihak yang **lebih inelastis**. Pajak BBM: karena demand inelastic, **konsumen** menanggung porsi lebih besar.' },
    { kind: 'h2', text: 'C. Subsidi & Tarif Impor' },
    { kind: 'ul', items: [
      '**Subsidi** (pembayaran ke produsen): supply ↑, harga ↓, kuantitas ↑. Manfaat terbesar ke pihak yang lebih **inelastis**.',
      '**Tarif impor** (pajak atas barang impor): harga domestik ↑, konsumsi domestik ↓, produksi domestik ↑, impor ↓ — menguntungkan produsen domestik.',
    ] },
  ],
};

const tm7: Reading = {
  tm: 7,
  title: 'Produsen, Konsumen & Efisiensi Pasar',
  ref: 'Samuelson Ch. 8–11 · Mankiw Ch. 7',
  intro:
    'Mengapa pasar bebas sering dianggap "baik"? Karena pada keseimbangan kompetitif, **total surplus** (kesejahteraan) maksimum. Intervensi yang menggeser dari titik ini menimbulkan **deadweight loss**.',
  objectives: [
    'Menjelaskan surplus konsumen & surplus produsen.',
    'Menjelaskan efisiensi pasar (total surplus maksimum).',
    'Mengidentifikasi deadweight loss (DWL).',
  ],
  blocks: [
    { kind: 'h2', text: 'A. Surplus Konsumen & Produsen' },
    { kind: 'ul', items: [
      '**Consumer surplus (CS):** selisih antara harga yang **bersedia** dibayar konsumen dan harga yang **benar-benar** dibayar — area di bawah kurva demand, di atas harga pasar.',
      '**Producer surplus (PS):** selisih antara harga yang **diterima** produsen dan biaya minimum yang **bersedia** mereka terima — area di atas kurva supply, di bawah harga pasar.',
    ] },
    { kind: 'formula', text: 'Total Surplus = Consumer Surplus + Producer Surplus', note: 'Mengukur total kesejahteraan dari aktivitas pasar.' },
    { kind: 'h2', text: 'B. Efisiensi Pasar' },
    { kind: 'p', text: 'Pada keseimbangan pasar kompetitif, **total surplus maksimum** → pasar **efisien** secara alokatif. Barang sampai ke pembeli yang menghargainya paling tinggi, dan diproduksi oleh penjual berbiaya terendah.' },
    { kind: 'h2', text: 'C. Deadweight Loss (DWL)' },
    { kind: 'p', text: '**DWL** = hilangnya total surplus akibat kuantitas pasar menyimpang dari keseimbangan efisien — disebabkan pajak, kontrol harga, monopoli, atau kuota. DWL adalah "kue kesejahteraan" yang lenyap, bukan sekadar berpindah tangan.' },
    { kind: 'callout', variant: 'warning', title: 'Catatan penting', text: 'Pajak **memindahkan** sebagian surplus ke pemerintah (penerimaan) **dan** menghapus sebagian (DWL). Makin elastis pasar, makin besar DWL untuk pajak yang sama.' },
  ],
};

// ===================== MAKRO (TM 8–14) =====================
// Batch 2: konten Pra-UAS dinormalisasi dari sumber Markdown dan companion HTML.
// TM 1–7 legacy tetap dipertahankan tanpa perubahan.

// ---------- Registry per TM ----------
export const EKT109_READINGS: Record<number, Reading> = {
  1: tm1,
  2: tm2,
  3: tm3,
  4: tm4,
  5: tm5,
  6: tm6,
  7: tm7,
  ...PTE_PRA_UAS_READINGS,
};


/**
 * Toolkit baca Pra-UAS PTE. Disajikan hanya untuk EKT109 melalui customReferensi,
 * sehingga formula sheet, peta materi, checklist, dan sumber tidak masuk ke
 * registry atau progress mata kuliah lain.
 */
export const EKT109_PRA_UAS_TOOLKIT = [
  {
    kind: 'callout',
    variant: 'key',
    title: 'Toolkit Review Pra-UAS PTE',
    text: 'Gunakan Formula Sheet untuk pemeriksaan cepat, lalu selesaikan checklist berdasarkan mekanisme ekonomi, bukan hafalan arah panah. Peta UAS membantu menghubungkan output, uang, sektor eksternal, stabilisasi, dan pertumbuhan.',
  },
  { kind: 'h2', text: 'Formula Sheet Pra-UAS' },
  ...PTE_PRA_UAS_SUPPLEMENT.formulaSheet,
  { kind: 'h2', text: 'Peta Materi, Checklist, dan Prediksi UAS' },
  ...PTE_PRA_UAS_SUPPLEMENT.examMap,
  { kind: 'h2', text: 'Referensi Penyusunan' },
  ...PTE_PRA_UAS_SUPPLEMENT.references,
] satisfies import('../../types').ContentBlock[];
