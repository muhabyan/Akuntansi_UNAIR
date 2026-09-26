import type { ContentBlock, Reading } from '../../../types';

const INSTINCT_REPLACEMENT_CASE: ContentBlock = {
  kind: 'example',
  title: 'Instinct Enterprises — Penggantian Sistem Pipa (Kieso p. 781)',
  blocks: [
    {
      kind: 'p',
      text: 'Instinct Enterprises mengganti sistem pipa lama dengan pipa plastik. Pipa lama: cost £150.000, akumulasi depresiasi £135.000, nilai sisa/scrap yang diterima £1.000. Pipa baru: biaya pembelian dan pemasangan £125.000, sehingga kas neto yang dibayar £124.000.'
    },
    {
      kind: 'formula',
      text: '\\text{Nilai buku pipa lama}=\\text{£150.000}-\\text{£135.000}=\\text{£15.000}\\\\\\text{Rugi pelepasan}=\\text{£15.000}-\\text{£1.000}=\\text{£14.000}\\\\\\text{Kas neto dibayar}=\\text{£125.000}-\\text{£1.000}=\\text{£124.000}'
    },
    {
      kind: 'journal',
      caption: 'Kapitalisasi pipa baru dan penghentian pengakuan pipa lama (substitution approach)',
      lines: [
        { account: 'Equipment (Plumbing System — New)', debit: '£125.000' },
        { account: 'Accumulated Depreciation—Equipment', debit: '£135.000' },
        { account: 'Loss on Disposal of Equipment', debit: '£14.000' },
        { account: 'Equipment (Plumbing System — Old)', credit: '£150.000', isCredit: true },
        { account: 'Cash', credit: '£124.000', isCredit: true }
      ]
    },
    { kind: 'callout', variant: 'info', title: 'Cek keseimbangan', text: 'Debit £125.000 + £135.000 + £14.000 = £274.000. Kredit £150.000 + £124.000 = £274.000.' }
  ]
};

const HANOI_COMPONENT_CASE: ContentBlock = {
  kind: 'example',
  title: 'Hanoi Ltd. — Depresiasi Komponen Traktor (Kieso p. 781)',
  blocks: [
    {
      kind: 'table',
      headers: ['Komponen', 'Cost', 'Umur manfaat', 'Nilai residu', 'Depresiasi tahunan'],
      rows: [
        ['Tires', '£6.000', '2 tahun', '£0', '£3.000'],
        ['Transmission', '£10.000', '5 tahun', '£0', '£2.000'],
        ['Truck Chassis / Body', '£34.000', '10 tahun', '£0', '£3.400'],
        ['Total aset', '£50.000', '—', '£0', '£8.400 per tahun']
      ],
      caption: 'Setiap komponen dengan cost signifikan dan umur berbeda disusutkan terpisah (Kieso p. 781).'
    },
    { kind: 'formula', text: '\\frac{\\text{£6.000}}{2}+\\frac{\\text{£10.000}}{5}+\\frac{\\text{£34.000}}{10}=\\text{£3.000}+\\text{£2.000}+\\text{£3.400}=\\text{£8.400}' },
    {
      kind: 'journal',
      caption: 'Depresiasi tahunan traktor',
      lines: [
        { account: 'Depreciation Expense', debit: '£8.400' },
        { account: 'Accumulated Depreciation—Tractor', credit: '£8.400', isCredit: true }
      ]
    },
    {
      kind: 'p',
      text: '**Ilustrasi lanjutan buatan situs (bukan angka dari Kieso p. 781):** andaikan pada akhir tahun ke-2 ban diganti dengan biaya £7.000. Akumulasi depresiasi ban sudah £3.000 × 2 = £6.000, sehingga nilai buku ban lama £6.000 − £6.000 = £0.'
    },
    {
      kind: 'journal',
      caption: 'Penggantian ban pada akhir tahun ke-2',
      lines: [
        { account: 'Tractor (Tires — New)', debit: '£7.000' },
        { account: 'Accumulated Depreciation—Tractor (Tires)', debit: '£6.000' },
        { account: 'Tractor (Tires — Old)', credit: '£6.000', isCredit: true },
        { account: 'Cash', credit: '£7.000', isCredit: true }
      ]
    },
    { kind: 'callout', variant: 'tip', title: 'Setelah penggantian', text: 'Ban baru disusutkan selama umur manfaatnya sendiri.' }
  ]
};

const SHIPAWAY_OVERHAUL_CASE: ContentBlock = {
  kind: 'example',
  title: 'Shipaway Co. — Overhaul Dry-Dock sebagai Komponen (Kieso pp. 782–783)',
  blocks: [
    {
      kind: 'p',
      text: 'Shipaway Co. membeli kapal komersial seharga \\$200.000.000 dengan umur keseluruhan 20 tahun. Regulasi maritim mewajibkan overhaul dry-dock setiap 4 tahun dengan estimasi biaya \\$4.000.000.'
    },
    {
      kind: 'formula',
      text: '\\text{Komponen overhaul}=\\frac{\\text{USD }4.000.000}{4}=\\text{USD }1.000.000\\text{ per tahun}\\\\\\text{Lambung kapal dan mesin}=\\frac{\\text{USD }196.000.000}{20}=\\text{USD }9.800.000\\text{ per tahun}\\\\\\text{Total depresiasi tahunan}=\\text{USD }10.800.000'
    },
    {
      kind: 'journal',
      caption: '1\\. Akhir tahun ke-4: hapus komponen overhaul awal yang telah disusutkan penuh',
      lines: [
        { account: 'Accumulated Depreciation—Ship (Overhaul)', debit: '$4.000.000' },
        { account: 'Ship (Overhaul Component)', credit: '$4.000.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: '2\\. Kapitalisasi overhaul aktual tahun ke-4 sebesar \\$4.500.000',
      lines: [
        { account: 'Ship (Overhaul Component)', debit: '$4.500.000' },
        { account: 'Cash / Accounts Payable', credit: '$4.500.000', isCredit: true }
      ]
    },
    { kind: 'formula', text: '\\text{Depresiasi overhaul baru}=\\frac{\\text{USD }4.500.000}{4}=\\text{USD }1.125.000\\text{ per tahun}' }
  ]
};

const BARRET_SALE_CASE: ContentBlock = {
  kind: 'example',
  title: 'Barret Group — Penjualan Mesin di Tengah Tahun (Kieso pp. 784–785)',
  blocks: [
    {
      kind: 'p',
      text: 'Mesin cost €18.000 dibeli 9,5 tahun lalu dan disusutkan garis lurus €1.200 per tahun. Akumulasi depresiasi sampai akhir tahun ke-9 adalah €10.800 (€1.200 × 9). Mesin dijual tunai €7.000 pada pertengahan tahun ke-10 (1 Juli).'
    },
    {
      kind: 'formula',
      text: '\\text{Depresiasi 6 bulan}=\\text{€1.200}\\times\\frac{6}{12}=\\text{€600}\\\\\\text{Akumulasi depresiasi}=\\text{€10.800}+\\text{€600}=\\text{€11.400}\\\\\\text{Nilai buku}=\\text{€18.000}-\\text{€11.400}=\\text{€6.600}\\\\\\text{Gain on disposal}=\\text{€7.000}-\\text{€6.600}=\\text{€400}'
    },
    {
      kind: 'journal',
      caption: 'Jurnal A — perbarui depresiasi sampai 1 Juli tahun ke-10',
      lines: [
        { account: 'Depreciation Expense', debit: '€600' },
        { account: 'Accumulated Depreciation—Machinery', credit: '€600', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: 'Jurnal B — catat penjualan dan hapus akun terkait',
      lines: [
        { account: 'Cash', debit: '€7.000' },
        { account: 'Accumulated Depreciation—Machinery', debit: '€11.400' },
        { account: 'Machinery', credit: '€18.000', isCredit: true },
        { account: 'Gain on Disposal of Machinery', credit: '€400', isCredit: true }
      ]
    }
  ]
};

const CAMEL_CONVERSION_CASE: ContentBlock = {
  kind: 'example',
  title: 'Camel Transport — Tornado dan Klaim Asuransi (Kieso pp. 785–786)',
  blocks: [
    {
      kind: 'p',
      text: 'Fasilitas manufaktur hancur total akibat tornado pada 16 Mei 2025. Cost \\$6.000.000, akumulasi depresiasi \\$2.500.000, nilai buku \\$3.500.000. Penyelesaian klaim asuransi disepakati pada 18 Maret 2026 sebesar \\$5.000.000 tunai.'
    },
    {
      kind: 'journal',
      caption: 'Tahap 1 (16 Mei 2025): hapus nilai buku dan akui kerugian bencana',
      lines: [
        { account: 'Loss from Tornado (Casualty Loss)', debit: '$3.500.000' },
        { account: 'Accumulated Depreciation—Buildings', debit: '$2.500.000' },
        { account: 'Buildings', credit: '$6.000.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: 'Tahap 2 (18 Maret 2026): akui hasil asuransi yang disepakati',
      lines: [
        { account: 'Cash (or Insurance Receivable)', debit: '$5.000.000' },
        { account: 'Gain from Insurance Settlement', credit: '$5.000.000', isCredit: true }
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Mengapa dua tahap',
      text: 'Kerugian bencana dan kompensasi asuransi adalah dua peristiwa ekonomi terpisah. Pada 16 Mei 2025 ganti rugi belum disepakati; mengakuinya saat itu berarti mengakui **aset kontinjensi**, yang dilarang IAS 37. Klaim diakui ketika pemulihan sudah hampir pasti, biasanya saat kesepakatan penyelesaian formal.'
    }
  ]
};

const INFORMATION_PROCESSING_CASE: ContentBlock = {
  kind: 'example',
  title: 'Information Processing SA — Substansi Komersial, Situasi Rugi (Kieso p. 772)',
  blocks: [
    {
      kind: 'p',
      text: 'Mesin lama: cost €12.000, akumulasi depresiasi €4.000, nilai buku €8.000, nilai wajar €6.000. Harga daftar mesin baru €16.000; trade-in allowance €9.000; kas dibayar €7.000 (€16.000 − €9.000).'
    },
    {
      kind: 'formula',
      text: '\\text{Cost mesin baru}=\\text{€6.000}+\\text{€7.000}=\\text{€13.000}\\\\\\text{Loss on disposal}=\\text{€8.000}-\\text{€6.000}=\\text{€2.000}'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Distorsi trade-in allowance',
      text: 'Trade-in allowance €9.000 mengandung diskon harga dari dealer. Cost aset baru didasarkan pada **nilai wajar imbalan yang diserahkan** (€6.000 + kas €7.000), bukan pada harga daftar atau allowance.'
    },
    {
      kind: 'journal',
      caption: 'Pertukaran dengan substansi komersial: rugi diakui penuh',
      lines: [
        { account: 'Equipment (Machine — New)', debit: '€13.000' },
        { account: 'Accumulated Depreciation—Equipment (Old)', debit: '€4.000' },
        { account: 'Loss on Disposal of Equipment', debit: '€2.000' },
        { account: 'Equipment (Machine — Old)', credit: '€12.000', isCredit: true },
        { account: 'Cash', credit: '€7.000', isCredit: true }
      ]
    }
  ]
};

const INTERSTATE_EXCHANGE_CASE: ContentBlock = {
  kind: 'example',
  title: 'Interstate Transportation Co. — Dengan vs Tanpa Substansi Komersial (Kieso pp. 773–774)',
  blocks: [
    {
      kind: 'p',
      text: 'Truk bekas: cost \\$64.000, akumulasi depresiasi \\$22.000, nilai buku \\$42.000, nilai wajar \\$49.000. Interstate membayar kas \\$11.000 untuk memperoleh truk semi baru bernilai wajar \\$60.000 (\\$49.000 + \\$11.000). Potensi gain = \\$49.000 − \\$42.000 = \\$7.000.'
    },
    { kind: 'h3', text: 'Skenario A — memiliki substansi komersial' },
    { kind: 'formula', text: '\\text{Truk baru}=\\text{USD }49.000+\\text{USD }11.000=\\text{USD }60.000\\\\\\text{Gain diakui}=\\text{USD }49.000-\\text{USD }42.000=\\text{USD }7.000' },
    {
      kind: 'journal',
      caption: 'Gain \\$7.000 diakui segera; debit \\$82.000 = kredit \\$82.000',
      lines: [
        { account: 'Trucks (Semi-Truck — New)', debit: '$60.000' },
        { account: 'Accumulated Depreciation—Trucks (Used)', debit: '$22.000' },
        { account: 'Trucks (Used)', credit: '$64.000', isCredit: true },
        { account: 'Gain on Disposal of Trucks', credit: '$7.000', isCredit: true },
        { account: 'Cash', credit: '$11.000', isCredit: true }
      ]
    },
    { kind: 'h3', text: 'Skenario B — tidak memiliki substansi komersial' },
    {
      kind: 'formula',
      text: '\\text{Metode 1}=\\text{USD }60.000-\\text{USD }7.000=\\text{USD }53.000\\\\\\text{Metode 2}=\\text{USD }42.000+\\text{USD }11.000=\\text{USD }53.000',
      note: 'Metode 1: nilai wajar aset baru dikurangi gain yang ditangguhkan. Metode 2: nilai buku aset diserahkan ditambah kas dibayar. Kedua metode menghasilkan basis yang sama.'
    },
    {
      kind: 'journal',
      caption: 'Tidak ada akun gain yang dikredit; debit \\$75.000 = kredit \\$75.000',
      lines: [
        { account: 'Trucks (Semi-Truck — New)', debit: '$53.000' },
        { account: 'Accumulated Depreciation—Trucks (Used)', debit: '$22.000' },
        { account: 'Trucks (Used)', credit: '$64.000', isCredit: true },
        { account: 'Cash', credit: '$11.000', isCredit: true }
      ]
    }
  ]
};

const SANTANA_DELAWARE_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Latihan E9.19 — Santana SA dan Delaware Co. (Kieso p. 805)',
  prompt: 'Santana SA: peralatan cost R\\$28.000, akumulasi depresiasi R\\$19.000, nilai wajar R\\$13.500, membayar kas R\\$2.000. Delaware Co.: peralatan cost R\\$28.000, akumulasi depresiasi R\\$10.000, nilai wajar R\\$15.500, menerima kas R\\$2.000. Susun jurnal kedua entitas bila (A) pertukaran tidak memiliki substansi komersial dan (B) memiliki substansi komersial.',
  blocks: [
    {
      kind: 'table',
      headers: ['Pos', 'Santana SA', 'Delaware Co.'],
      rows: [
        ['Nilai buku aset diserahkan', 'R\\$28.000 − R\\$19.000 = R\\$9.000', 'R\\$28.000 − R\\$10.000 = R\\$18.000'],
        ['Nilai wajar aset diserahkan', 'R\\$13.500', 'R\\$15.500'],
        ['Kas', 'Dibayar R\\$2.000', 'Diterima R\\$2.000'],
        ['Selisih nilai wajar dan nilai buku', 'Potensi gain R\\$13.500 − R\\$9.000 = R\\$4.500', 'Potensi loss R\\$18.000 − R\\$15.500 = R\\$2.500'],
        ['Skenario A: basis aset baru', 'R\\$9.000 + R\\$2.000 = R\\$11.000', 'R\\$18.000 − R\\$2.000 = R\\$16.000'],
        ['Skenario A: gain/loss diakui', 'Nol (gain ditangguhkan)', 'Nol (loss tidak diakui)'],
        ['Skenario B: cost aset baru', 'R\\$13.500 + R\\$2.000 = R\\$15.500', 'R\\$15.500 − R\\$2.000 = R\\$13.500'],
        ['Skenario B: gain/loss diakui', 'Gain R\\$4.500', 'Loss R\\$2.500']
      ],
      caption: 'Tanpa substansi komersial: tidak ada gain maupun loss (Kieso Ill. 9.14, p. 774). Dengan substansi komersial: seluruh gain atau loss diakui.'
    },
    { kind: 'h3', text: 'Skenario A — tidak memiliki substansi komersial' },
    {
      kind: 'journal',
      caption: 'Santana SA: basis R\\$11.000; tanpa gain (debit = kredit R\\$30.000)',
      lines: [
        { account: 'Equipment (New)', debit: 'R$11.000' },
        { account: 'Accumulated Depreciation—Equipment', debit: 'R$19.000' },
        { account: 'Equipment (Old)', credit: 'R$28.000', isCredit: true },
        { account: 'Cash', credit: 'R$2.000', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: 'Delaware Co.: basis R\\$16.000; tanpa loss (debit = kredit R\\$28.000)',
      lines: [
        { account: 'Cash', debit: 'R$2.000' },
        { account: 'Equipment (New)', debit: 'R$16.000' },
        { account: 'Accumulated Depreciation—Equipment', debit: 'R$10.000' },
        { account: 'Equipment (Old)', credit: 'R$28.000', isCredit: true }
      ]
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Catatan penurunan nilai',
      text: 'Bila nilai wajar R\\$15.500 mengindikasikan penurunan nilai sebelum pertukaran, hal itu dievaluasi terpisah berdasarkan IAS 36 di TM impairment, bukan sebagai rugi pertukaran.'
    },
    { kind: 'h3', text: 'Skenario B — memiliki substansi komersial' },
    {
      kind: 'journal',
      caption: 'Santana SA: gain R\\$4.500 diakui (debit = kredit R\\$34.500)',
      lines: [
        { account: 'Equipment (New)', debit: 'R$15.500' },
        { account: 'Accumulated Depreciation—Equipment', debit: 'R$19.000' },
        { account: 'Equipment (Old)', credit: 'R$28.000', isCredit: true },
        { account: 'Cash', credit: 'R$2.000', isCredit: true },
        { account: 'Gain on Disposal of Equipment', credit: 'R$4.500', isCredit: true }
      ]
    },
    {
      kind: 'journal',
      caption: 'Delaware Co.: loss R\\$2.500 diakui (debit = kredit R\\$28.000)',
      lines: [
        { account: 'Cash', debit: 'R$2.000' },
        { account: 'Equipment (New)', debit: 'R$13.500' },
        { account: 'Accumulated Depreciation—Equipment', debit: 'R$10.000' },
        { account: 'Loss on Disposal of Equipment', debit: 'R$2.500' },
        { account: 'Equipment (Old)', credit: 'R$28.000', isCredit: true }
      ]
    }
  ]
};

const TONKAWA_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Kasus Dosen CA9.1 — Tonkawa Group (Kieso pp. 818–819)',
  prompt: 'Tonkawa Group membeli tanah berisi pabrik tua untuk membangun kantor pusat. Pabrik dirobohkan, batuan diledakkan dan dibersihkan untuk fondasi gedung, dan kontraktor membangun jalan aspal dari jalan umum ke lahan parkir. Tiga tahun kemudian Tonkawa menambah 4 lantai (umur taksiran 5 tahun lebih panjang dari sisa umur gedung awal). Sepuluh tahun kemudian tanah dan gedung dijual di atas nilai buku neto dan kantor pusat pindah. (a) Klasifikasikan dan jelaskan dasar penyusutan setiap pengeluaran. (b) Bagaimana mencatat penjualannya?',
  blocks: [
    { kind: 'h3', text: 'Butir (a): klasifikasi dan dasar penyusutan' },
    {
      kind: 'table',
      headers: ['Pengeluaran', 'Akun', 'Alasan', 'Penyusutan'],
      rows: [
        ['Pembelian tanah dan pembongkaran pabrik tua', 'Land (Kieso p. 766)', 'Semua biaya memperoleh tanah dan menyiapkannya untuk tujuan umumnya adalah biaya tanah. Biaya pembongkaran neto (biaya merobohkan dikurangi hasil penjualan sisa material) menambah cost tanah.', 'Tidak disusutkan karena tanah memiliki umur tidak terbatas'],
        ['Peledakan dan pembersihan batuan untuk fondasi', 'Buildings (Kieso p. 767)', 'Pekerjaan khusus agar fondasi gedung dapat dibangun adalah biaya yang diatribusikan langsung pada pendirian gedung, bukan penyiapan tanah secara umum.', 'Disusutkan selama umur manfaat gedung kantor'],
        ['Jalan aspal dan lahan parkir', 'Land Improvements (Kieso p. 767)', 'Jalan, trotoar, pagar, penerangan, dan lahan parkir berumur terbatas, memerlukan perawatan dan pengaspalan ulang, serta terpisah dari tanah.', 'Disusutkan selama estimasi umur manfaatnya'],
        ['Pembangunan gedung kantor awal', 'Buildings (Kieso p. 767)', 'Biaya konstruksi gedung.', 'Disusutkan selama umur ekonomisnya'],
        ['Penambahan 4 lantai', 'Buildings (Addition) (Kieso p. 780)', 'Penambahan menciptakan ruang baru dan memperluas kapasitas layanan (capital expenditure).', 'Lihat catatan interpretasi di bawah']
      ]
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Interpretasi — umur penyusutan penambahan 4 lantai',
      text: 'Teks umum Kieso p. 780 hanya menyatakan bahwa penambahan dikapitalisasi sebagai aset baru yang disusutkan di periode mendatang; teks tersebut tidak menyebut batas sisa umur gedung induk secara eksplisit. CA9.1 (pp. 818–819) adalah soal analitis terbuka.\n\n**Solusi/interpretasi konseptual:** penambahan 4 lantai menyatu secara fisik dan struktural dengan gedung induk dan tidak dapat dimanfaatkan sendiri bila gedung induk dibongkar. Karena itu penambahan **disusutkan selama sisa umur gedung induk**, walaupun umur fisiknya 5 tahun lebih panjang (kecuali entitas berencana merenovasi total seluruh struktur).'
    },
    { kind: 'h3', text: 'Butir (b): penjualan tanah dan gedung 10 tahun kemudian' },
    {
      kind: 'ol',
      items: [
        'Perbarui depresiasi gedung, penambahan, dan land improvements dari awal tahun sampai tanggal penjualan (Kieso p. 784).',
        'Hitung total nilai buku neto pada tanggal penjualan.',
        'Debit Cash sebesar hasil penjualan neto dan debit seluruh akun Accumulated Depreciation terkait; kredit Land, Buildings, Buildings (Addition), dan Land Improvements sebesar cost historisnya; kredit Gain on Disposal of Plant Assets untuk kelebihan hasil neto atas total nilai buku neto.',
        'Sajikan di operasi berlanjut pada pos "Other income and expense", kecuali Tonkawa melepas seluruh segmen operasi tersendiri berdasarkan IFRS 5.'
      ]
    },
    {
      kind: 'formula',
      text: '\\text{NBV}_{\\text{total}}=\\text{Cost tanah}+(\\text{Cost gedung}-\\text{Akum. dep.})+(\\text{Cost penambahan}-\\text{Akum. dep.})+(\\text{Cost land improvements}-\\text{Akum. dep.})'
    }
  ]
};

const TROOPERS_CASE: ContentBlock = {
  kind: 'solution-reveal',
  title: 'Kasus Dosen CA9.2 — Troopers Medical Labs (Kieso p. 819)',
  prompt: 'Troopers Medical Labs merancang dan membangun sendiri mesin medis khusus karena peralatan komersial tidak tersedia. Ruang pabrik dialokasikan dan staf khusus direkrut. Mesin pertama menelan biaya total €714.000; tiga mesin identik berikutnya masing-masing €441.000. (a) Biaya apa yang dikapitalisasi? (b) Layakkah alokasi overhead inkremental dan overhead tetap? (c) Bagaimana perlakuan selisih biaya mesin pertama?',
  blocks: [
    { kind: 'h3', text: 'Butir (a): biaya aset yang dibuat sendiri (Kieso p. 768)' },
    {
      kind: 'ul',
      items: [
        '**Bahan baku langsung:** seluruh material dan suku cadang khusus yang terpasang pada mesin.',
        '**Tenaga kerja langsung:** upah, gaji, dan tunjangan staf yang langsung merancang, merakit, dan menguji mesin.',
        '**Overhead yang dapat diatribusikan langsung:** supervisi teknik, daya, pemakaian alat mesin, dan biaya pengujian yang dapat ditelusuri ke proses konstruksi.'
      ]
    },
    { kind: 'h3', text: 'Butir (b): kelayakan alokasi overhead' },
    {
      kind: 'table',
      headers: ['Jenis overhead', 'Kesimpulan', 'Alasan'],
      rows: [
        ['Overhead inkremental akibat konstruksi sendiri', 'Layak dan wajib dikapitalisasi (Kieso p. 768)', 'Biaya yang tidak akan terjadi tanpa proyek (misalnya lembur supervisi, daya tambahan, staf khusus) adalah biaya langsung untuk membawa aset ke kondisi operasi.'],
        ['Bagian proporsional overhead tetap (full absorption)', 'Layak dan diwajibkan menurut IFRS (Kieso p. 768)', 'Ruang pabrik dan sumber daya perusahaan dicurahkan untuk konstruksi, sehingga overhead tetap dialokasikan pro-rata, sepanjang tidak menaikkan cost aset di atas jumlah terpulihkan atau mengurangi alokasi overhead ke persediaan produksi reguler.']
      ]
    },
    { kind: 'h3', text: 'Butir (c): selisih €273.000' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Kaidah eksplisit Kieso p. 768',
      text: '"Abnormal amounts of wasted material, labor, or other resources should not be added to the cost of the asset. [IAS 16 paragraph 22]"\n\n"If the allocated overhead results in recording construction costs in excess of the costs that an outside independent producer would charge, the company should record the excess overhead as a period loss rather than capitalize it. This avoids capitalizing the asset at more than its fair value."'
    },
    { kind: 'formula', text: '\\text{Selisih}=\\text{€714.000}-\\text{€441.000}=\\text{€273.000}' },
    {
      kind: 'ol',
      items: [
        'Selisih €273.000 mencerminkan inefisiensi kurva pembelajaran (learning curve), kesalahan desain awal, dan pemborosan tidak normal (abnormal waste).',
        'Berdasarkan kaidah eksplisit p. 768, Troopers **tidak boleh mengkapitalisasi €273.000** ke akun mesin.',
        'Mesin pertama dicatat pada cost normal **€441.000**.',
        'Selisih **€273.000 diakui sebagai rugi periode berjalan (period loss)** di laporan laba rugi.',
        'Mengkapitalisasi pemborosan akan melebihsajikan aset di atas jumlah terpulihkannya dan membebani tahun-tahun mendatang dengan depresiasi yang tidak semestinya.'
      ]
    }
  ]
};

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Kos setelah Akuisisi, Disposisi, dan Pertukaran Aset Nonmoneter',
  ref: 'Kieso IFRS 5e Ch. 9 (pp. 766–819), CA9.1, CA9.2, E9.19 | IAS 16, IAS 37',
  intro: 'TM2 melanjutkan siklus aset tetap setelah aset siap digunakan: memilah pengeluaran yang dikapitalisasi dari beban, menerapkan substitution approach dan depresiasi komponen, menghentikan pengakuan aset yang dijual atau hancur, lalu mengukur pertukaran aset nonmoneter berdasarkan substansi komersial. Bagian akhir membedah kasus dosen CA9.1 dan CA9.2.',
  objectives: [
    'Membedakan capital expenditure dan revenue expenditure setelah perolehan aset tetap.',
    'Menerapkan substitution approach, depresiasi komponen, dan akuntansi overhaul besar.',
    'Mencatat penjualan aset dengan pembaruan depresiasi parsial serta konversi terpaksa dua tahap.',
    'Mengukur pertukaran aset nonmoneter dengan dan tanpa substansi komersial, termasuk kas yang dibayar atau diterima.',
    'Menyelesaikan kasus dosen CA9.1 (Tonkawa Group) dan CA9.2 (Troopers Medical Labs).'
  ],
  blocks: [
    { kind: 'h2', text: '1. Orientation / Quick Map' },
    {
      kind: 'table',
      headers: ['Tahap', 'Pertanyaan ujian', 'Output'],
      rows: [
        ['Pengeluaran setelah akuisisi', 'Apakah pengeluaran menambah manfaat ekonomi masa depan dan dapat diukur andal?', 'Kapitalisasi atau beban periode'],
        ['Penggantian komponen', 'Komponen lama mana yang harus dihentikan pengakuannya?', 'Jurnal substitusi dan gain/loss'],
        ['Disposisi', 'Sudahkah depresiasi diperbarui sampai tanggal pelepasan?', 'Nilai buku dan gain/loss pelepasan'],
        ['Pertukaran nonmoneter', 'Apakah pertukaran memiliki substansi komersial?', 'Basis aset baru dan gain/loss yang diakui'],
        ['Kasus dosen', 'Akun apa yang tepat dan bagaimana dasar penyusutannya?', 'Analisis CA9.1 dan CA9.2']
      ],
      caption: 'Alur TM2: klasifikasi pengeluaran → substitusi → disposisi → pertukaran → kasus dosen.'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Batas cakupan TM2',
      text: 'Metode alokasi depresiasi (garis lurus, saldo menurun, jumlah angka tahun, unit produksi) dan deplesi dibahas di TM3; TM2 memakai garis lurus hanya untuk memperbarui nilai buku sampai tanggal pelepasan. Pengujian penurunan nilai penuh dibahas di TM3–TM4; di TM2, penurunan nilai hanya dirujuk sebagai dasar konseptual ketika nilai wajar di bawah nilai tercatat. Revaluasi dasar sudah dibahas di TM1.'
    },

    { kind: 'h2', text: '2. Costs Subsequent to Acquisition' },
    {
      kind: 'p',
      text: 'Pengeluaran setelah perolehan diakui dalam nilai tercatat aset hanya jika (1) manfaat ekonomi masa depan **probable** mengalir ke entitas dan (2) biayanya dapat **diukur secara andal**. Jika tidak, pengeluaran dibebankan pada periode berjalan.'
    },
    {
      kind: 'table',
      headers: ['Pertanyaan', 'Jawaban', 'Perlakuan'],
      rows: [
        ['Apakah pengeluaran menambah manfaat ekonomi masa depan (umur diperpanjang, kapasitas naik, mutu meningkat, biaya operasi turun)?', 'Tidak', 'Revenue expenditure: beban segera di laba rugi (perawatan rutin, perbaikan kecil, pembersihan, servis)'],
        ['Jika ya, apakah biayanya dapat diukur andal?', 'Ya', 'Capital expenditure: kapitalisasi ke nilai tercatat aset (additions, improvements, penggantian komponen)'],
        ['Jika ya, apakah biayanya dapat diukur andal?', 'Tidak', 'Beban segera (kendala keandalan)']
      ],
      caption: 'Pohon keputusan pengeluaran setelah perolehan.'
    },
    {
      kind: 'table',
      headers: ['Jenis pengeluaran', 'Karakteristik', 'Perlakuan', 'Contoh', 'Kieso'],
      rows: [
        ['Additions (penambahan)', 'Perluasan fisik atau unit baru pada aset yang ada', 'Kapitalisasi ke akun aset; disusutkan selama umur penambahan atau sisa umur aset induk, mana yang lebih pendek (kecuali dapat dipisahkan)', 'Sayap gedung kantor baru, instalasi sistem HVAC', 'pp. 779–780'],
        ['Improvements / betterments', 'Mengganti aset lama dengan aset yang lebih baik', 'Kapitalisasi biaya baru; hapus nilai tercatat komponen yang diganti dan akui gain/loss di laba rugi', 'Lantai beton menggantikan lantai kayu', 'pp. 780–781'],
        ['Replacements (penggantian)', 'Mengganti aset lama dengan aset sejenis', 'Kapitalisasi biaya baru; hapus cost dan akumulasi depresiasi komponen lama dan akui gain/loss di laba rugi', 'Lantai kayu baru menggantikan lantai kayu lama', 'pp. 780–781'],
        ['Rearrangements & reorganizations', 'Memindahkan atau memasang ulang aset untuk memperlancar alur kerja', 'Beban saat terjadi; tidak dikapitalisasi setelah aset berada di lokasi dan kondisi yang dikehendaki manajemen', 'Memindahkan lini produksi antarpabrik', 'pp. 781–782'],
        ['Ordinary repairs', 'Perawatan rutin agar aset tetap berfungsi normal', 'Beban saat terjadi (Maintenance and Repair Expense)', 'Ganti oli, servis berkala, pengecatan dinding', 'p. 782'],
        ['Major repairs / overhauls', 'Overhaul berkala signifikan yang bermanfaat lintas tahun', 'Kapitalisasi sebagai komponen terpisah; hapus nilai tercatat overhaul sebelumnya', 'Dry-dock kapal tiap 4 tahun, rebuild mesin pesawat', 'pp. 782–783']
      ]
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Exam trap: kasus WorldCom',
      text: 'Biaya rutin yang hanya menjaga kondisi operasional awal adalah beban periode berjalan. Mengkapitalisasinya dengan alasan "memastikan aset beroperasi di masa depan" adalah manipulasi laporan keuangan, seperti pada kasus WorldCom.'
    },

    { kind: 'h2', text: '3. Substitution Approach & Component Depreciation' },
    {
      kind: 'ol',
      items: [
        '**Derecognition:** hapus cost bruto dan akumulasi depresiasi komponen lama.',
        '**Gain atau loss:** akui selisih antara hasil pelepasan neto (misalnya nilai scrap) dan nilai tercatat komponen lama.',
        '**Kapitalisasi:** debit akun aset sebesar cost komponen pengganti.'
      ]
    },
    INSTINCT_REPLACEMENT_CASE,
    {
      kind: 'p',
      text: 'Setiap bagian aset tetap yang cost-nya signifikan terhadap total cost dan memiliki umur manfaat berbeda disusutkan terpisah (Kieso p. 781). Overhaul atau inspeksi besar diperlakukan sebagai komponen: saat overhaul baru dilakukan dan kriteria pengakuan terpenuhi, cost-nya dikapitalisasi dan sisa nilai tercatat overhaul sebelumnya dihapus.'
    },
    HANOI_COMPONENT_CASE,
    SHIPAWAY_OVERHAUL_CASE,

    { kind: 'h2', text: '4. Dispositions of Property, Plant, and Equipment' },
    {
      kind: 'p',
      text: 'Nilai tercatat aset tetap dihentikan pengakuannya saat aset dilepas (dijual, masuk sewa pembiayaan, atau didonasikan) atau ketika tidak ada lagi manfaat ekonomi masa depan yang diharapkan dari penggunaan maupun pelepasannya (scrapping/abandonment).'
    },
    {
      kind: 'ol',
      items: [
        '**Perbarui depresiasi:** catat beban depresiasi dari awal periode berjalan sampai tanggal pelepasan.',
        '**Hentikan pengakuan dan catat imbalan:** debit Cash/Receivable sebesar imbalan neto, debit seluruh Accumulated Depreciation sampai tanggal tersebut, kredit akun aset sebesar cost bruto, lalu akui selisihnya sebagai gain atau loss on disposal di laba rugi.'
      ]
    },
    { kind: 'formula', text: '\\text{Gain/Loss on disposal}=\\text{imbalan neto}-\\text{nilai buku pada tanggal pelepasan}' },
    BARRET_SALE_CASE,

    { kind: 'h2', text: '5. Involuntary Conversions' },
    {
      kind: 'p',
      text: 'Ketika aset hancur karena bencana (kebakaran, banjir, badai) atau diambil alih pemerintah, kerugian bencana dan kompensasi asuransi dicatat sebagai dua peristiwa terpisah. Klaim asuransi baru diakui ketika pemulihan sudah hampir pasti.'
    },
    CAMEL_CONVERSION_CASE,

    { kind: 'h2', text: '6. Exchanges of Non-Monetary Assets' },
    {
      kind: 'p',
      text: 'Pertukaran aset nonmoneter memiliki **substansi komersial** jika (Kieso pp. 770–771):'
    },
    {
      kind: 'ol',
      items: [
        'konfigurasi arus kas (risiko, waktu, dan jumlah) aset yang diterima berbeda signifikan dari aset yang diserahkan; **atau**',
        'nilai spesifik entitas atas bagian operasi yang terpengaruh berubah akibat pertukaran; **dan**',
        'perbedaan pada butir 1 atau 2 signifikan relatif terhadap nilai wajar aset yang dipertukarkan.'
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Aturan utama Kieso Illustration 9.14 (p. 774)',
      text: '"Compute the total gain or loss on the transaction. This amount is equal to the difference between the fair value of the asset given up and the book value of the asset given up. (a) If the exchange has commercial substance, recognize the entire gain or loss. (b) If the exchange lacks commercial substance, no gain or loss is recognized."\n\nKieso p. 771: "However, if the exchange lacks commercial substance, it defers recognition of gains and losses."'
    },
    {
      kind: 'table',
      headers: ['Situasi', 'Substansi komersial', 'Perlakuan', 'Kieso'],
      rows: [
        ['Gain (nilai wajar > nilai buku)', 'Ya', 'Akui gain segera di laba rugi; aset baru pada nilai wajar', 'p. 773'],
        ['Gain (nilai wajar > nilai buku)', 'Tidak', 'Tidak ada gain yang diakui; gain ditangguhkan ke basis aset baru', 'p. 774'],
        ['Loss (nilai buku > nilai wajar)', 'Ya', 'Akui loss segera di laba rugi; aset baru pada nilai wajar', 'p. 772'],
        ['Loss (nilai buku > nilai wajar)', 'Tidak', 'Tidak ada loss yang diakui; selisih masuk basis aset baru', 'p. 774']
      ],
      caption: 'Ringkasan pengakuan pada pertukaran aset nonmoneter (Kieso Ill. 9.14).'
    },
    {
      kind: 'formula',
      text: '\\text{Basis aset baru (tanpa substansi komersial)}=\\text{nilai buku aset diserahkan}+\\text{kas dibayar}\\\\\\text{atau}=\\text{nilai wajar aset baru}-\\text{gain yang ditangguhkan}',
      note: 'Bila kas diterima, kas tersebut mengurangi basis aset baru (lihat Delaware Co. pada E9.19).'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Catatan penurunan nilai (IAS 36)',
      text: 'Bila nilai wajar aset berada di bawah nilai tercatat, hal itu menjadi indikasi penurunan nilai yang dievaluasi dengan IAS 36 (dibahas di TM impairment, Kieso Bab 10), bukan rugi atas pertukaran.'
    },
    INFORMATION_PROCESSING_CASE,
    INTERSTATE_EXCHANGE_CASE,
    SANTANA_DELAWARE_CASE,

    { kind: 'h2', text: '7. Lecturer Cases: CA9.1 & CA9.2' },
    {
      kind: 'p',
      text: 'Kedua kasus berasal dari Concepts for Analysis Kieso Bab 9. Kerjakan dulu setiap butir, lalu buka pembahasan untuk membandingkan akun, alasan, dan dasar penyusutan.'
    },
    TONKAWA_CASE,
    TROOPERS_CASE,

    { kind: 'h2', text: '8. Standards Comparison' },
    {
      kind: 'table',
      headers: ['Isu', 'IFRS (Kieso IFRS 5e)', 'US GAAP'],
      rows: [
        ['Depresiasi komponen', 'Wajib untuk setiap komponen signifikan dengan umur berbeda (p. 781)', 'Diizinkan, tetapi jarang dipakai; metode kelompok/komposit lebih umum'],
        ['Biaya rearrangement', 'Beban saat terjadi setelah aset dalam kondisi operasi (pp. 781–782)', 'Kapitalisasi diizinkan bila manfaat ekonomi masa depan terbukti'],
        ['Pertukaran tanpa substansi komersial (gain)', 'Tidak ada gain yang diakui; gain ditangguhkan ke basis aset (p. 774, Ill. 9.14)', 'Jika kas (boot) diterima, sebagian gain diakui secara proporsional'],
        ['Pertukaran tanpa substansi komersial (loss)', 'Tidak ada loss yang diakui pada pertukaran (p. 774, Ill. 9.14); potensi penurunan nilai dievaluasi dengan IAS 36', 'Loss diakui segera secara penuh'],
        ['Konversi terpaksa', 'Dua tahap: kerugian bencana terpisah dari pemulihan asuransi (pp. 785–786)', 'Gain/loss diakui; aset pengganti dicatat pada cost']
      ]
    },

    { kind: 'h2', text: '9. Exam Toolkit' },
    { kind: 'h3', text: 'Formula Sheet' },
    { kind: 'formula', text: '\\text{Gain/Loss penggantian}=\\text{hasil pelepasan neto}-\\text{nilai tercatat komponen lama}' },
    { kind: 'formula', text: '\\text{Depresiasi komponen tahunan}=\\frac{\\text{cost komponen}-\\text{nilai residu}}{\\text{umur komponen}}' },
    { kind: 'formula', text: '\\text{Gain/Loss on disposal}=\\text{imbalan neto}-\\text{nilai buku setelah depresiasi diperbarui}' },
    { kind: 'formula', text: '\\text{Aset baru (dengan substansi komersial)}=\\text{nilai wajar aset diserahkan}+\\text{kas dibayar}-\\text{kas diterima}' },
    { kind: 'formula', text: '\\text{Aset baru (tanpa substansi komersial)}=\\text{nilai buku aset diserahkan}+\\text{kas dibayar}-\\text{kas diterima}' },
    { kind: 'h3', text: 'Journal Sheet' },
    {
      kind: 'table',
      headers: ['Transaksi', 'Debit utama', 'Kredit utama'],
      rows: [
        ['Penggantian komponen', 'Aset (komponen baru); Accumulated Depreciation komponen lama; loss bila ada', 'Aset (komponen lama); Cash; gain bila ada'],
        ['Pembaruan depresiasi sebelum pelepasan', 'Depreciation Expense', 'Accumulated Depreciation'],
        ['Penjualan aset', 'Cash; Accumulated Depreciation; loss bila ada', 'Aset pada cost; gain bila ada'],
        ['Konversi terpaksa tahap 1', 'Casualty Loss; Accumulated Depreciation', 'Aset pada cost'],
        ['Konversi terpaksa tahap 2', 'Cash / Insurance Receivable', 'Gain from Insurance Settlement'],
        ['Pertukaran tanpa substansi komersial', 'Aset baru pada basis nilai buku; Accumulated Depreciation aset lama; Cash bila diterima', 'Aset lama pada cost; Cash bila dibayar']
      ]
    },
    { kind: 'h3', text: 'Common Traps' },
    {
      kind: 'ul',
      items: [
        '**Trade-in allowance dealer:** jangan memakai harga daftar atau allowance. Nilai aset baru = nilai wajar aset lama yang diserahkan + kas dibayar.',
        '**Lupa memperbarui depresiasi:** bila aset dijual 1 September, hitung dan jurnal depresiasi parsial 8 bulan (1 Januari–1 September) sebelum menghitung nilai buku dan gain/loss.',
        '**Gain pada pertukaran tanpa substansi komersial:** bila soal menyatakan lacks commercial substance, akun gain tidak boleh muncul di jurnal; gain mengurangi debit aset baru.',
        '**Kapitalisasi biaya rutin (WorldCom):** perawatan yang hanya menjaga kondisi awal adalah beban operasi periode berjalan.'
      ]
    },
    { kind: 'h3', text: 'Quick Review' },
    {
      kind: 'ol',
      items: [
        'Uji setiap pengeluaran: manfaat ekonomi masa depan dan pengukuran andal.',
        'Pada penggantian, hapus komponen lama sebelum mengkapitalisasi yang baru.',
        'Perbarui depresiasi sampai tanggal pelepasan sebelum menghitung gain/loss.',
        'Pisahkan kerugian bencana dari pemulihan asuransi.',
        'Tentukan substansi komersial sebelum menghitung basis aset baru.'
      ]
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Checklist 60 detik sebelum mengumpulkan',
      text: 'Apakah debit = kredit? Apakah depresiasi sudah diperbarui? Apakah pertukaran tanpa substansi komersial bebas dari gain maupun loss (Interstate: basis **\\$53.000**)? Apakah selisih prototipe Troopers **€273.000** dibebankan sebagai period loss?'
    }
  ]
};
