import type { ContentBlock } from '../../types';

export type AkbiReportCategory = 'akuntansi_manajemen';

export interface AkbiManagementReport {
  id: string;
  category: AkbiReportCategory;
  title: string;
  shortTitle: string;
  tm: string;
  source: string;
  description: string;
  priority: 'inti' | 'wajib' | 'penguat';
  practiceMode: 'builder' | 'template' | 'mixed';
  blocks: ContentBlock[];
}

export const AKBI_MANAGEMENT_REPORT_MENU = [
  { id: 'laporan-hpproduksi', label: 'Laporan Harga Pokok Produksi' },
  { id: 'laporan-hpp', label: 'Laporan Harga Pokok Penjualan' },
  { id: 'job-cost-sheet', label: 'Job Cost Sheet' },
  { id: 'production-cost-report-average', label: 'Production Cost Report - Average' },
  { id: 'production-cost-report-fifo', label: 'Production Cost Report - FIFO' },
  { id: 'quality-cost-report', label: 'Laporan Biaya Kualitas' },
  { id: 'production-loss-report', label: 'Laporan Kerugian Produksi' },
  { id: 'joint-byproduct-report', label: 'Laporan Produk Gabungan dan Produk Sampingan' },
  { id: 'materials-control-report', label: 'Laporan Perencanaan dan Pengendalian Bahan Baku' },
  { id: 'labor-control-report', label: 'Laporan Perencanaan dan Pengendalian Tenaga Kerja' },
  { id: 'factory-overhead-report', label: 'Laporan Overhead Pabrik: Planned, Applied, Actual' },
  { id: 'departmental-overhead', label: 'Laporan Departementalisasi Overhead' },
  { id: 'abc-report', label: 'Activity-Based Costing Report' },
  { id: 'variance-report', label: 'Laporan Varians Biaya' },
  { id: 'responsibility-report', label: 'Laporan Pertanggungjawaban Biaya' },
] as const;

const dataCell = 'Data dari soal';

const warningManual = (text: string): ContentBlock => ({
  kind: 'callout',
  variant: 'warning',
  title: '[Perlu pemeriksaan manual]',
  text,
});

const note = (text: string): ContentBlock => ({ kind: 'callout', variant: 'tip', title: 'Catatan Praktik', text });

const reportTable = (caption: string, rows: string[][]): ContentBlock => ({
  kind: 'table',
  headers: ['Bagian laporan', 'Isi atau cara pengisian'],
  rows,
  caption,
});

const checklist = (items: string[]): ContentBlock => ({
  kind: 'table',
  headers: ['Checklist sebelum jawaban dikumpulkan', 'Status'],
  rows: items.map((item) => [item, 'Dicek oleh mahasiswa']),
});

export const AKBI_MANAGEMENT_REPORTS: AkbiManagementReport[] = [
  {
    id: 'laporan-hpproduksi',
    category: 'akuntansi_manajemen',
    title: 'Laporan Harga Pokok Produksi / Cost of Goods Manufactured',
    shortTitle: 'HPP Produksi',
    tm: 'TM 3, Simulasi UTS, TM 14',
    source: 'AKBI Master TM 3, Simulasi UTS, Simulasi UAS',
    priority: 'inti',
    description:
      'Laporan inti untuk menghitung harga pokok produk yang selesai diproduksi. Format ini menunjukkan hubungan bahan baku, tenaga kerja langsung, overhead pabrik, dan barang dalam proses.',
    practiceMode: 'mixed',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      {
        kind: 'p',
        text:
          'Laporan Harga Pokok Produksi digunakan untuk menghitung biaya produksi yang sudah selesai dan dipindahkan ke persediaan barang jadi. Laporan ini menjadi jembatan antara biaya produksi dan laporan harga pokok penjualan.',
      },
      reportTable('Template COGM. Angka diisi mengikuti data soal.', [
        ['Persediaan awal bahan baku', dataCell],
        ['Pembelian bahan baku', dataCell],
        ['Bahan baku tersedia untuk digunakan', 'Persediaan awal bahan baku + pembelian bahan baku'],
        ['Persediaan akhir bahan baku', dataCell],
        ['Bahan baku digunakan', 'Bahan baku tersedia - persediaan akhir bahan baku'],
        ['Tenaga kerja langsung', dataCell],
        ['Overhead pabrik', dataCell],
        ['Total biaya produksi periode berjalan', 'Bahan baku digunakan + tenaga kerja langsung + overhead pabrik'],
        ['Persediaan awal barang dalam proses', dataCell],
        ['Total biaya dalam proses', 'Total biaya produksi + persediaan awal BDP'],
        ['Persediaan akhir barang dalam proses', dataCell],
        ['Harga pokok produksi', 'Total biaya dalam proses - persediaan akhir BDP'],
      ]),
      { kind: 'formula', text: 'Bahan baku digunakan = Persediaan awal bahan baku + Pembelian bahan baku - Persediaan akhir bahan baku' },
      { kind: 'formula', text: 'Total biaya produksi = Bahan baku digunakan + Tenaga kerja langsung + Overhead pabrik' },
      { kind: 'formula', text: 'Harga pokok produksi = BDP awal + Total biaya produksi - BDP akhir' },
      {
        kind: 'example',
        title: 'Contoh PT Attar Gemintang',
        blocks: [
          {
            kind: 'table',
            headers: ['Komponen', 'Nilai'],
            rows: [
              ['Persediaan awal bahan', 'Rp1.300'],
              ['Pembelian bahan', 'Rp12.500'],
              ['Persediaan akhir bahan', 'Rp1.600'],
              ['Upah langsung', 'Rp15.200'],
              ['Overhead pabrik', 'Rp12.400'],
              ['BDP awal', 'Rp3.400'],
              ['BDP akhir', 'Rp3.800'],
            ],
          },
          {
            kind: 'ol',
            items: [
              'Bahan digunakan = Rp1.300 + Rp12.500 - Rp1.600 = Rp12.200.',
              'Total biaya produksi = Rp12.200 + Rp15.200 + Rp12.400 = Rp39.800.',
              'Harga pokok produksi = Rp3.400 + Rp39.800 - Rp3.800 = Rp39.400.',
            ],
          },
        ],
      },
      {
        kind: 'builder',
        instructions: 'Latihan interaktif. Isi angka dari soal, lalu sistem menghitung subtotal dan harga pokok produksi.',
        spec: {
          entity: 'PT Attar Gemintang',
          title: 'Laporan Harga Pokok Produksi',
          period: 'Untuk periode berjalan',
          currency: 'rupiah',
          lines: [
            { id: 'raw_beg', label: 'Persediaan awal bahan baku', kind: 'input', amount: 1300 },
            { id: 'raw_purchase', label: 'Pembelian bahan baku', kind: 'input', amount: 12500 },
            { id: 'raw_available', label: 'Bahan tersedia untuk digunakan', kind: 'computed', compute: [{ id: 'raw_beg' }, { id: 'raw_purchase' }], rule: 'top' },
            { id: 'raw_end', label: 'Persediaan akhir bahan baku', kind: 'input', amount: 1600, bracket: true },
            { id: 'raw_used', label: 'Bahan baku digunakan', kind: 'computed', compute: [{ id: 'raw_available' }, { id: 'raw_end', sign: -1 }], rule: 'top', bold: true },
            { id: 'direct_labor', label: 'Tenaga kerja langsung', kind: 'input', amount: 15200 },
            { id: 'factory_overhead', label: 'Overhead pabrik', kind: 'input', amount: 12400 },
            { id: 'total_manufacturing_cost', label: 'Total biaya produksi', kind: 'computed', compute: [{ id: 'raw_used' }, { id: 'direct_labor' }, { id: 'factory_overhead' }], rule: 'top', bold: true },
            { id: 'wip_beg', label: 'Persediaan awal BDP', kind: 'input', amount: 3400 },
            { id: 'total_wip', label: 'Total biaya dalam proses', kind: 'computed', compute: [{ id: 'total_manufacturing_cost' }, { id: 'wip_beg' }], rule: 'top' },
            { id: 'wip_end', label: 'Persediaan akhir BDP', kind: 'input', amount: 3800, bracket: true },
            { id: 'cogm', label: 'Harga pokok produksi', kind: 'computed', compute: [{ id: 'total_wip' }, { id: 'wip_end', sign: -1 }], rule: 'double', bold: true },
          ],
        },
      },
      checklist(['Bahan baku digunakan sudah dihitung', 'Tenaga kerja langsung dan overhead sudah masuk', 'BDP awal dan BDP akhir tidak tertukar', 'Harga pokok produksi sudah ditarik sebagai total akhir']),
    ],
  },
  {
    id: 'laporan-hpp',
    category: 'akuntansi_manajemen',
    title: 'Laporan Harga Pokok Penjualan / Cost of Goods Sold',
    shortTitle: 'HPP',
    tm: 'TM 3, Simulasi UTS, TM 14',
    source: 'AKBI Master TM 3, Simulasi UTS, Simulasi UAS',
    priority: 'inti',
    description:
      'Laporan yang menghubungkan harga pokok produksi dengan persediaan barang jadi awal dan akhir untuk menentukan biaya produk yang terjual.',
    practiceMode: 'builder',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Laporan Harga Pokok Penjualan menunjukkan biaya produk yang sudah terjual. Laporan ini tidak boleh mencampur barang yang masih berada di persediaan barang jadi.' },
      reportTable('Template COGS. Angka diisi mengikuti data soal.', [
        ['Persediaan awal barang jadi', dataCell],
        ['Harga pokok produksi', dataCell],
        ['Barang jadi tersedia dijual', 'Persediaan awal barang jadi + harga pokok produksi'],
        ['Persediaan akhir barang jadi', dataCell],
        ['Harga pokok penjualan', 'Barang jadi tersedia dijual - persediaan akhir barang jadi'],
      ]),
      { kind: 'formula', text: 'Barang jadi tersedia dijual = Persediaan awal barang jadi + Harga pokok produksi' },
      { kind: 'formula', text: 'Harga pokok penjualan = Persediaan awal barang jadi + Harga pokok produksi - Persediaan akhir barang jadi' },
      {
        kind: 'example',
        title: 'Contoh PT Attar Gemintang',
        blocks: [
          {
            kind: 'table',
            headers: ['Komponen', 'Nilai'],
            rows: [
              ['Persediaan awal barang jadi', 'Rp2.400'],
              ['Harga pokok produksi', 'Rp39.400'],
              ['Persediaan akhir barang jadi', 'Rp2.600'],
              ['Harga pokok penjualan', 'Rp39.200'],
            ],
          },
          { kind: 'p', text: 'HPP = Rp2.400 + Rp39.400 - Rp2.600 = Rp39.200.' },
        ],
      },
      {
        kind: 'builder',
        instructions: 'Latihan interaktif. Isi komponen HPP berdasarkan soal.',
        spec: {
          entity: 'PT Attar Gemintang',
          title: 'Laporan Harga Pokok Penjualan',
          period: 'Untuk periode berjalan',
          currency: 'rupiah',
          lines: [
            { id: 'fg_beg', label: 'Persediaan awal barang jadi', kind: 'input', amount: 2400 },
            { id: 'cogm', label: 'Harga pokok produksi', kind: 'input', amount: 39400 },
            { id: 'goods_available', label: 'Barang jadi tersedia dijual', kind: 'computed', compute: [{ id: 'fg_beg' }, { id: 'cogm' }], rule: 'top' },
            { id: 'fg_end', label: 'Persediaan akhir barang jadi', kind: 'input', amount: 2600, bracket: true },
            { id: 'cogs', label: 'Harga pokok penjualan', kind: 'computed', compute: [{ id: 'goods_available' }, { id: 'fg_end', sign: -1 }], rule: 'double', bold: true },
          ],
        },
      },
      checklist(['Harga pokok produksi sudah berasal dari laporan sebelumnya', 'Barang jadi awal dan akhir tidak tertukar', 'HPP hanya untuk barang yang sudah terjual']),
    ],
  },
  {
    id: 'job-cost-sheet',
    category: 'akuntansi_manajemen',
    title: 'Kartu Biaya Pesanan / Job Cost Sheet',
    shortTitle: 'Job Cost Sheet',
    tm: 'TM 4',
    source: 'AKBI Master TM 4 dan Carter Job Order Costing',
    priority: 'inti',
    description:
      'Kartu biaya pesanan untuk mengumpulkan biaya bahan langsung, tenaga kerja langsung, dan overhead dibebankan pada setiap job.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Job Cost Sheet' },
      { kind: 'p', text: 'Job cost sheet dipakai dalam job order costing. Setiap pesanan menjadi cost object, sehingga semua biaya dikumpulkan menurut nomor job.' },
      reportTable('Template job cost sheet.', [
        ['Identitas job', 'Nomor job, pelanggan, tanggal mulai, tanggal selesai, jumlah unit'],
        ['Bahan langsung', 'Nomor requisition, tanggal, kuantitas, harga, nilai bahan'],
        ['Tenaga kerja langsung', 'Nomor time ticket, jam kerja, tarif, nilai tenaga kerja'],
        ['Overhead dibebankan', 'Dasar pembebanan aktual × tarif overhead ditentukan di muka'],
        ['Rekap biaya', 'Direct materials + direct labor + applied overhead'],
        ['Cost per unit', 'Total job cost ÷ jumlah unit pesanan'],
        ['Status job', 'WIP, Finished Goods, atau Cost of Goods Sold'],
      ]),
      { kind: 'formula', text: 'Job Cost = Direct Materials + Direct Labor + Applied Factory Overhead' },
      { kind: 'formula', text: 'Applied Factory Overhead = Predetermined Overhead Rate × Actual Allocation Base' },
      { kind: 'formula', text: 'Cost per Unit = Total Job Cost ÷ Unit job' },
      {
        kind: 'example',
        title: 'Contoh PT Lara Croft',
        blocks: [
          {
            kind: 'table',
            headers: ['Job', 'Bahan', 'Jam TKL', 'Tarif konversi', 'Status'],
            rows: [
              ['101', 'Rp5.000', '250', 'Rp25', 'Terjual'],
              ['102', 'Rp7.500', '350', 'Rp25', 'Selesai belum terjual'],
              ['103', 'Rp6.250', '300', 'Rp25', 'Belum selesai'],
              ['104', 'Rp3.500', '150', 'Rp25', 'Belum selesai'],
            ],
          },
          {
            kind: 'table',
            headers: ['Job', 'Biaya konversi', 'Total biaya', 'Akun'],
            rows: [
              ['101', 'Rp6.250', 'Rp11.250', 'COGS'],
              ['102', 'Rp8.750', 'Rp16.250', 'Finished Goods'],
              ['103', 'Rp7.500', 'Rp13.750', 'WIP'],
              ['104', 'Rp3.750', 'Rp7.250', 'WIP'],
            ],
          },
        ],
      },
      warningManual('Contoh PT Maomao memiliki angka atau jurnal yang perlu diverifikasi dari sumber asli sebelum dipakai sebagai data final.'),
      checklist(['Nomor job jelas', 'Bahan langsung, tenaga kerja langsung, dan overhead dibedakan', 'Status job sudah ditentukan', 'Applied overhead tidak dicampur dengan actual overhead']),
    ],
  },
  {
    id: 'production-cost-report-average',
    category: 'akuntansi_manajemen',
    title: 'Laporan Biaya Produksi / Production Cost Report - Average Method',
    shortTitle: 'PCR Average',
    tm: 'TM 5',
    source: 'AKBI Master TM 5 dan Carter Process Costing',
    priority: 'inti',
    description:
      'Laporan process costing metode rata-rata. BDP awal digabung dengan biaya periode berjalan untuk menghitung unit ekuivalen dan kos per UPE.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Metode average menggabungkan biaya BDP awal dengan biaya periode berjalan. Format ini cocok untuk produksi homogen yang dikumpulkan per departemen.' },
      reportTable('Struktur production cost report average.', [
        ['Daftar kuantitas', 'BDP awal, unit masuk, produk selesai, BDP akhir'],
        ['Unit ekuivalen', 'Produk selesai + BDP akhir ekuivalen'],
        ['Biaya dipertanggungjawabkan', 'Biaya BDP awal + biaya periode berjalan'],
        ['Kos per UPE', 'Total biaya ÷ unit ekuivalen'],
        ['Kos dipertanggungjawabkan', 'Produk selesai + BDP akhir'],
      ]),
      { kind: 'formula', text: 'UPE average = Produk selesai + (BDP akhir × persentase selesai)' },
      { kind: 'formula', text: 'Total biaya average = Biaya BDP awal + Biaya periode berjalan' },
      { kind: 'formula', text: 'Kos per UPE = Total biaya ÷ UPE' },
      {
        kind: 'example',
        title: 'Template PT Lapis Bento',
        blocks: [
          {
            kind: 'table',
            headers: ['Keterangan', 'Unit atau nilai'],
            rows: [
              ['BDP awal', '150 kg'],
              ['Unit masuk', '3.000 kg'],
              ['Produk selesai', '2.800 kg'],
              ['BDP akhir', '350 kg'],
              ['BDP akhir bahan baku', '100%'],
              ['BDP akhir biaya konversi', '60%'],
            ],
          },
          warningManual('Pembulatan dan inkonsistensi bulan pada contoh PT Lapis Bento perlu dicek dari sumber master sebelum dijadikan angka final.'),
        ],
      },
      checklist(['Daftar kuantitas seimbang', 'UPE dihitung per elemen biaya', 'Biaya BDP awal digabung dengan biaya periode berjalan', 'Rekonsiliasi biaya seimbang']),
    ],
  },
  {
    id: 'production-cost-report-fifo',
    category: 'akuntansi_manajemen',
    title: 'Laporan Biaya Produksi / Production Cost Report - FIFO Method',
    shortTitle: 'PCR FIFO',
    tm: 'TM 6',
    source: 'AKBI Master TM 6 dan Carter Process Costing',
    priority: 'inti',
    description:
      'Laporan process costing FIFO. Biaya BDP awal dipisahkan dari biaya periode berjalan dan hanya pekerjaan periode berjalan yang masuk perhitungan kos per UPE FIFO.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'FIFO memisahkan pekerjaan periode sebelumnya dari pekerjaan periode berjalan. Laporan ini lebih rinci karena menghitung penyelesaian BDP awal, unit dimulai dan selesai, serta BDP akhir.' },
      reportTable('Struktur production cost report FIFO.', [
        ['Daftar kuantitas', 'BDP awal, unit dimulai, produk selesai, BDP akhir'],
        ['UPE FIFO', 'Penyelesaian BDP awal + unit dimulai selesai + BDP akhir ekuivalen'],
        ['Biaya periode berjalan', 'Biaya yang dipakai untuk menghitung kos per UPE FIFO'],
        ['Kos dipertanggungjawabkan', 'BDP awal selesai + unit dimulai dan selesai + BDP akhir'],
      ]),
      { kind: 'formula', text: 'Unit dimulai dan selesai = Produk selesai - BDP awal' },
      { kind: 'formula', text: 'Persentase pekerjaan sisa BDP awal = 100% - Persentase penyelesaian BDP awal' },
      { kind: 'formula', text: 'UPE FIFO = BDP awal sisa + Unit dimulai selesai + BDP akhir ekuivalen' },
      { kind: 'formula', text: 'Kos per UPE FIFO = Biaya periode berjalan ÷ UPE FIFO' },
      {
        kind: 'example',
        title: 'PT Long Bite Departemen I',
        blocks: [
          {
            kind: 'table',
            headers: ['Keterangan', 'Data'],
            rows: [
              ['BDP awal', '6.000 kg'],
              ['Unit dimasukkan', '65.000 kg'],
              ['Produk selesai', '63.000 kg'],
              ['BDP akhir', '8.000 kg'],
              ['HP BDP awal', 'Rp7.010.000'],
              ['Biaya periode berjalan', 'Rp105.452.000'],
            ],
          },
          warningManual('Departemen II PT Long Bite dan bagian unit hilang atau unit cacat harus diverifikasi dari sumber asli jika digunakan sebagai angka final.'),
        ],
      },
      checklist(['BDP awal tidak digabung dengan biaya periode berjalan', 'Unit dimulai dan selesai dihitung', 'UPE FIFO dihitung per elemen biaya', 'BDP akhir dan produk selesai direkonsiliasi']),
    ],
  },
  {
    id: 'quality-cost-report',
    category: 'akuntansi_manajemen',
    title: 'Laporan Biaya Kualitas / Cost of Quality Report',
    shortTitle: 'Biaya Kualitas',
    tm: 'TM 7',
    source: 'AKBI Master TM 7 dan Carter Quality Cost',
    priority: 'wajib',
    description:
      'Laporan yang mengelompokkan biaya kualitas menjadi prevention cost, appraisal cost, internal failure cost, dan external failure cost.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Laporan biaya kualitas membantu perusahaan melihat biaya untuk mencegah, mendeteksi, dan menanggung kegagalan produk. Laporan ini mendukung TQM dan continuous improvement.' },
      {
        kind: 'table',
        headers: ['Kategori biaya kualitas', 'Contoh isi', 'Nilai'],
        rows: [
          ['Prevention cost', 'Pelatihan kualitas, evaluasi pemasok, perencanaan mutu', dataCell],
          ['Appraisal cost', 'Inspeksi, pengujian, audit kualitas', dataCell],
          ['Internal failure cost', 'Scrap, spoilage, rework sebelum produk sampai pelanggan', dataCell],
          ['External failure cost', 'Garansi, retur, klaim, layanan purna jual', dataCell],
          ['Total biaya kualitas', 'Jumlah semua kategori', 'Hasil perhitungan'],
        ],
        caption: 'Template cost of quality report.',
      },
      { kind: 'formula', text: 'Total biaya kualitas = Prevention + Appraisal + Internal Failure + External Failure' },
      { kind: 'formula', text: 'Failure cost = Internal Failure + External Failure' },
      note('Saat failure cost tinggi, perusahaan perlu mengevaluasi apakah prevention dan appraisal sudah memadai.'),
      checklist(['Biaya kualitas sudah dipisah dalam empat kategori', 'Scrap, spoilage, dan rework tidak dicampur', 'Kegagalan internal dan eksternal dibedakan']),
    ],
  },
  {
    id: 'production-loss-report',
    category: 'akuntansi_manajemen',
    title: 'Laporan Kerugian Produksi',
    shortTitle: 'Kerugian Produksi',
    tm: 'TM 7',
    source: 'AKBI Master TM 7 dan Carter Production Losses',
    priority: 'wajib',
    description:
      'Format untuk mencatat scrap, spoilage, rework, unit hilang, produk cacat, kerusakan normal, dan kerusakan abnormal.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Laporan kerugian produksi menjelaskan unit atau biaya yang hilang karena proses produksi. Bagian ini penting karena kerugian produksi dapat memengaruhi kos produk baik dan kerugian abnormal.' },
      {
        kind: 'table',
        headers: ['Keterangan', 'Unit', 'Titik kejadian', 'Tingkat selesai', 'Masuk UPE?', 'Normal atau abnormal'],
        rows: [
          ['Produk selesai', dataCell, 'Akhir proses', '100%', 'Ya', 'Output normal'],
          ['BDP akhir', dataCell, 'Akhir periode', dataCell, 'Ya', 'Bukan loss'],
          ['Unit hilang', dataCell, dataCell, dataCell, 'Tergantung soal', 'Normal atau abnormal sesuai soal'],
          ['Produk cacat', dataCell, 'Titik inspeksi', dataCell, 'Tergantung soal', 'Normal atau abnormal sesuai soal'],
          ['Rework', dataCell, 'Setelah cacat ditemukan', dataCell, 'Tergantung perlakuan', 'Normal atau abnormal sesuai soal'],
        ],
      },
      { kind: 'formula', text: 'Total unit dipertanggungjawabkan = Produk selesai + BDP akhir + Unit hilang + Produk cacat' },
      { kind: 'formula', text: 'UPE produk cacat = Unit cacat × Tingkat penyelesaian' },
      { kind: 'formula', text: 'Total rework cost = Materials + Labor + Applied Overhead' },
      {
        kind: 'example',
        title: 'PT Manis Food',
        blocks: [
          {
            kind: 'table',
            headers: ['Keterangan', 'Unit'],
            rows: [
              ['BDP awal Departemen Memasak', '10.000'],
              ['Unit dimulai', '15.000'],
              ['Total diproses', '25.000'],
              ['Ditransfer', '16.000'],
              ['BDP akhir', '8.000'],
              ['Unit hilang', '1.000'],
            ],
          },
          warningManual('UPE, kos per UPE, kos produk selesai, BDP akhir, dan produk cacat pada contoh PT Manis Food perlu diverifikasi dari sumber soal.'),
        ],
      },
      checklist(['Total unit dipertanggungjawabkan seimbang', 'Normal loss dan abnormal loss tidak tertukar', 'Titik inspeksi atau titik hilang dibaca dari soal']),
    ],
  },
  {
    id: 'joint-byproduct-report',
    category: 'akuntansi_manajemen',
    title: 'Laporan Produk Gabungan dan Produk Sampingan',
    shortTitle: 'Joint & By-product',
    tm: 'TM 8',
    source: 'AKBI Master TM 8 dan Carter Joint Products',
    priority: 'wajib',
    description:
      'Format untuk alokasi joint cost, split-off point, produk bersama, produk sampingan, dan perlakuan hasil penjualan produk sampingan.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Laporan ini dipakai ketika satu proses menghasilkan lebih dari satu produk. Kos bersama dialokasikan ke produk bersama, sedangkan produk sampingan mendapat perlakuan sesuai nilai jual dan kebijakan akuntansi.' },
      {
        kind: 'table',
        headers: ['Produk', 'Unit', 'Harga jual per unit', 'Nilai jual', 'Persentase nilai jual', 'Alokasi kos bersama', 'Kos per unit'],
        rows: [
          ['Produk A', dataCell, dataCell, 'Unit × harga jual', 'Nilai jual ÷ total nilai jual', 'Persentase × joint cost', 'Alokasi ÷ unit'],
          ['Produk B', dataCell, dataCell, 'Unit × harga jual', 'Nilai jual ÷ total nilai jual', 'Persentase × joint cost', 'Alokasi ÷ unit'],
          ['Produk C', dataCell, dataCell, 'Unit × harga jual', 'Nilai jual ÷ total nilai jual', 'Persentase × joint cost', 'Alokasi ÷ unit'],
          ['Total', 'Jumlah unit', 'Tidak diisi', 'Total nilai jual', '100%', 'Total joint cost', 'Tidak diisi'],
        ],
        caption: 'Format nilai jual relatif.',
      },
      { kind: 'formula', text: 'Nilai jual = Unit × Harga jual per unit' },
      { kind: 'formula', text: 'Proporsi nilai jual = Nilai jual produk ÷ Total nilai jual seluruh produk' },
      { kind: 'formula', text: 'Alokasi kos bersama = Proporsi nilai jual × Total kos bersama' },
      { kind: 'formula', text: 'Nilai jual hipotetis = Nilai jual akhir - Biaya proses lanjutan' },
      {
        kind: 'example',
        title: 'PT Berjaya Raya - Nilai Jual Relatif',
        blocks: [
          {
            kind: 'table',
            headers: ['Produk', 'Unit', 'Harga split-off', 'Nilai jual', 'Proporsi', 'Alokasi'],
            rows: [
              ['A', '60.000', 'Rp30.000', 'Rp1.800.000.000', '25%', 'Rp240.000.000'],
              ['B', '90.000', 'Rp36.000', 'Rp3.240.000.000', '45%', 'Rp432.000.000'],
              ['C', '90.000', 'Rp24.000', 'Rp2.160.000.000', '30%', 'Rp288.000.000'],
            ],
          },
        ],
      },
      note('Produk sampingan dapat diperlakukan sebagai penjualan, pendapatan lain-lain, pengurang HPP, atau pengurang total biaya produksi sesuai materi TM 8.'),
      warningManual('Reversal cost method, replacement cost method, dan tabel asli produk sampingan perlu dicek jika mengambil angka dari scan.'),
      checklist(['Split-off point sudah jelas', 'Metode alokasi dipilih sesuai soal', 'Produk sampingan tidak diperlakukan sama dengan produk utama tanpa alasan']),
    ],
  },
  {
    id: 'materials-control-report',
    category: 'akuntansi_manajemen',
    title: 'Laporan Perencanaan dan Pengendalian Bahan Baku Langsung',
    shortTitle: 'Bahan Baku',
    tm: 'TM 9',
    source: 'AKBI Master TM 9 dan Carter Materials',
    priority: 'wajib',
    description:
      'Format untuk pengadaan bahan, pembelian, pemakaian bahan, kartu persediaan, EOQ/KPE, TPK, safety stock, ABC inventory, JIT, dan Backflush Costing.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Laporan bahan baku membantu perusahaan mengendalikan kebutuhan bahan, dokumen pembelian, penerimaan, pemakaian bahan, persediaan akhir, dan kos bahan yang masuk produksi.' },
      reportTable('Dokumen utama bahan baku.', [
        ['Purchase requisition', 'Permintaan pembelian bahan'],
        ['Purchase order', 'Pesanan pembelian ke pemasok'],
        ['Receiving report', 'Laporan penerimaan bahan'],
        ['Material requisition', 'Permintaan pemakaian bahan oleh produksi'],
        ['Material record card', 'Kartu mutasi dan saldo bahan'],
      ]),
      {
        kind: 'table',
        headers: ['Keterangan', 'Jumlah'],
        rows: [
          ['Persediaan awal bahan baku', dataCell],
          ['Pembelian bahan baku', dataCell],
          ['Freight-in', dataCell],
          ['Diskon pembelian', dataCell],
          ['Retur pembelian', dataCell],
          ['Pembelian bersih', 'Pembelian + freight-in - diskon - retur'],
          ['Bahan tersedia untuk dipakai', 'Persediaan awal + pembelian bersih'],
          ['Persediaan akhir bahan baku', dataCell],
          ['Kos bahan baku dipakai', 'Bahan tersedia - persediaan akhir'],
        ],
      },
      { kind: 'formula', text: 'Pembelian bersih = Pembelian + Freight-in - Diskon pembelian - Retur pembelian' },
      { kind: 'formula', text: 'Kos bahan baku dipakai = Persediaan awal bahan baku + Pembelian bersih - Persediaan akhir bahan baku' },
      { kind: 'formula', text: 'EOQ/KPE = √((2 × kebutuhan × biaya pemesanan) ÷ biaya penyimpanan per unit)', note: '[Perlu pemeriksaan manual] Cocokkan notasi dengan dosen atau modul.' },
      { kind: 'formula', text: 'TPK atau reorder point = Kebutuhan selama lead time + Safety stock', note: '[Perlu pemeriksaan manual] Cocokkan istilah TPK dengan sumber dosen.' },
      { kind: 'formula', text: 'Sediaan maksimum = KPE + Safety stock' },
      { kind: 'formula', text: 'Unit di bawah reorder point = Sediaan tersedia - TPK', note: 'Jika hasil mendekati atau berada di bawah nol, bahan perlu dipesan kembali sesuai kebijakan.' },
      { kind: 'formula', text: 'Ukuran production run optimum = √((2 × kebutuhan tahunan × setup cost) ÷ biaya simpan per unit per tahun)' },
      { kind: 'formula', text: 'Jumlah production runs = kebutuhan tahunan ÷ ukuran production run optimum' },
      reportTable('Format tambahan pengendalian bahan baku.', [
        ['Metode siklus pemesanan', 'Tentukan jadwal review persediaan, cek saldo fisik, lalu pesan sesuai kebutuhan sampai level target'],
        ['Metode min-max', 'Tetapkan batas minimum, batas maksimum, lead time, dan jumlah pesan saat saldo mencapai batas minimum'],
        ['Two-bin method', 'Pisahkan bahan dalam dua bin; bin kedua menjadi cadangan sekaligus sinyal pemesanan kembali'],
        ['Pengendalian selektif/ABC', 'Kelompokkan item A, B, dan C berdasarkan nilai serta kuantitas agar pengawasan fokus pada item material'],
        ['Production runs', 'Hitung ukuran produksi optimum jika bahan atau komponen diproduksi sendiri'],
        ['JIT dan Backflush', 'Ringkas pencatatan persediaan; bahan dan biaya konversi direkonsiliasi saat produk selesai atau terjual'],
      ]),
      {
        kind: 'table',
        headers: ['Jurnal Backflush MAMAMIA', 'Debit', 'Kredit'],
        rows: [
          ['RIP / Account payable', 'Rp603.240.000', 'Rp603.240.000'],
          ['FOH-Control / Indirect material', 'Rp2.000.000', 'Rp2.000.000'],
          ['COGS, FOH-Control, Marketing expense, dan Administration expense / Salaries and Wages expense', 'Rp2.340.000.000', 'Rp2.340.000.000'],
          ['FOH-Control / Depreciation, Insurance, Cash, Account payable', 'Rp185.400.000', 'Rp185.400.000'],
          ['COGS / FOH-Control', 'Rp867.400.000', 'Rp867.400.000'],
          ['Finished Goods / RIP', 'Rp421.440.000', 'Rp421.440.000'],
          ['COGS / Finished Goods', 'Rp179.440.000', 'Rp179.440.000'],
          ['RIP dan Finished Goods / COGS', 'Rp138.500.000', 'Rp138.500.000'],
        ],
        caption: 'Ringkasan jurnal JIT dan Backflush Costing. Payroll pada baris ketiga tetap perlu dipecah sesuai akun rinci saat jawaban lengkap dibuat.',
      },
      note('ABC inventory control berbeda dari Activity-Based Costing. ABC inventory mengelompokkan bahan menjadi kelas A, B, dan C berdasarkan nilai dan kuantitas.'),
      note('JIT menekan persediaan agar mendekati kebutuhan produksi. Backflush Costing memakai pencatatan ringkas dan harus tetap direkonsiliasi dengan saldo RIP, Barang Jadi, FOH-Control, dan COGS.'),
      warningManual('Pada contoh MAMAMIA, sumber memuat inkonsistensi periode Mei/April dan konflik angka overhead lain-lain Rp66.900.000 versus rincian Rp48.000.000 + Rp12.900.000. Gunakan rekonsiliasi jurnal Rp60.900.000 untuk membentuk FOH-Control Rp185.400.000, tetapi catatan manual tetap dipertahankan.'),
      checklist(['Dokumen bahan sudah dipahami', 'Kos bahan tidak hanya harga faktur', 'Metode fisik dan perpetual dibedakan', 'EOQ/KPE, TPK, safety stock, min-max, two-bin, production runs, JIT, dan backflush memakai data soal']),
    ],
  },
  {
    id: 'labor-control-report',
    category: 'akuntansi_manajemen',
    title: 'Laporan Perencanaan dan Pengendalian Tenaga Kerja Langsung',
    shortTitle: 'Tenaga Kerja',
    tm: 'TM 10',
    source: 'AKBI Master TM 10 dan Carter Labor',
    priority: 'wajib',
    description:
      'Format untuk payroll, labor time ticket, distribusi gaji, premi lembur, premi shift, bonus, vacation pay, holiday pay, idle time, dan fringe benefits.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Laporan tenaga kerja langsung dipakai untuk merencanakan, mencatat, dan mengendalikan biaya tenaga kerja yang masuk ke produksi dan overhead.' },
      {
        kind: 'table',
        headers: ['Kategori tenaga kerja', 'Perlakuan biaya'],
        rows: [
          ['Tenaga kerja langsung', 'Barang Dalam Proses'],
          ['Tenaga kerja tidak langsung', 'Overhead Pabrik'],
          ['Tenaga kerja pemasaran', 'Beban Pemasaran'],
          ['Tenaga kerja administrasi', 'Beban Administrasi dan Umum'],
        ],
      },
      reportTable('Komponen payroll dan labor cost.', [
        ['Basic pay', 'Jam reguler × tarif reguler'],
        ['Overtime premium', 'Tambahan upah karena lembur'],
        ['Shift premium', 'Tambahan tarif karena shift tertentu'],
        ['Bonus', 'Tambahan berdasarkan laba, kinerja, atau output'],
        ['Vacation pay', 'Hak cuti berbayar'],
        ['Holiday pay', 'Pembayaran hari libur'],
        ['Idle time', 'Waktu menganggur yang perlu diklasifikasikan'],
        ['Fringe benefits', 'Tunjangan karyawan, asuransi, pensiun, dan manfaat lain'],
      ]),
      { kind: 'formula', text: 'Upah reguler = Jam reguler × Tarif reguler' },
      { kind: 'formula', text: 'Upah lembur = Jam lembur × Tarif lembur' },
      { kind: 'formula', text: 'Premi lembur = Jam lembur × (Tarif lembur - Tarif reguler)' },
      { kind: 'formula', text: 'Total upah = Upah reguler + Upah lembur + Bonus + Tunjangan terkait' },
      { kind: 'formula', text: 'Standar output harian = Standar unit per jam × Jam kerja harian' },
      { kind: 'formula', text: 'Unit di atas standar = max(0, Output aktual - Output standar)' },
      { kind: 'formula', text: 'Insentif output = (Unit di atas standar ÷ Standar unit per jam) × Persentase insentif × Tarif per jam' },
      reportTable('Format wage plans dan daftar gaji.', [
        ['Hourly-rate plan', 'Upah dihitung berdasarkan tarif per jam dikali jam kerja aktual'],
        ['Piece-rate plan', 'Upah dihitung berdasarkan jumlah unit yang dihasilkan'],
        ['Modified-rate plan', 'Menggabungkan unsur tarif waktu dan insentif output'],
        ['Straight piecework plan', 'Fokus pada output absolut; unit tambahan menaikkan upah'],
        ['One-hundred-percent bonus plan', 'Fokus pada standar waktu dan rasio efisiensi; bonus muncul jika efisiensi melampaui 100%'],
        ['Group bonus plan', 'Bonus dihitung dari waktu yang dihemat kelompok lalu dibagi proporsional'],
        ['Daftar gaji standar produksi', 'Pisahkan upah dasar, insentif output, total gaji, dan jurnal pembebanan'],
      ]),
      {
        kind: 'table',
        headers: ['Contoh daftar gaji standar produksi', 'Nilai'],
        rows: [
          ['Output standar per hari', '35 unit/jam × 6 jam = 210 unit'],
          ['Gaji Senin', 'Rp9.300'],
          ['Gaji Selasa', 'Rp9.000'],
          ['Gaji Rabu', 'Rp9.000'],
          ['Gaji Kamis', 'Rp9.000'],
          ['Gaji Jumat', 'Rp9.600'],
          ['Total gaji', 'Rp45.900'],
          ['Jurnal ringkas', 'Debit Gaji dan Upah Langsung Rp45.000; debit Premi Lembur/FOH Control Rp900; kredit Utang Gaji dan Upah Rp45.900'],
        ],
        caption: 'Contoh daftar gaji berbasis standar produksi dari latihan Pra-UAS.',
      },
      {
        kind: 'table',
        headers: ['Tahap jurnal', 'Debit', 'Kredit'],
        rows: [
          ['Saat gaji terjadi', 'Gaji dan Upah', 'Utang Gaji, Utang Pajak, Utang Asuransi, Utang Pensiun'],
          ['Saat distribusi', 'BDP, Overhead Pabrik, Beban Pemasaran, Beban Administrasi', 'Gaji dan Upah'],
          ['Saat pembayaran', 'Utang gaji dan potongan terkait', 'Kas'],
        ],
        caption: 'Format jurnal tenaga kerja.',
      },
      {
        kind: 'example',
        title: 'Contoh Lembur',
        blocks: [
          { kind: 'p', text: 'Jika pekerja bekerja 45 jam, tarif reguler Rp25.000 untuk 40 jam, dan tarif lembur Rp30.000, maka upah reguler Rp1.000.000, upah lembur Rp150.000, dan total upah Rp1.150.000.' },
        ],
      },
      warningManual('Contoh rinci premi shift, bonus, vacation pay, holiday pay, idle time, dan payroll register perlu dicek jika angka berasal dari scan.'),
      checklist(['Tenaga kerja langsung dan tidak langsung dipisah', 'Premi lembur tidak disamakan dengan total lembur', 'Distribusi gaji sudah masuk akun yang tepat']),
    ],
  },
  {
    id: 'factory-overhead-report',
    category: 'akuntansi_manajemen',
    title: 'Laporan Overhead Pabrik: Planned, Applied, Actual',
    shortTitle: 'Overhead Pabrik',
    tm: 'TM 11',
    source: 'AKBI Master TM 11 dan Carter Factory Overhead',
    priority: 'inti',
    description:
      'Laporan untuk menghitung tarif overhead ditentukan di muka, overhead dibebankan, overhead aktual, overapplied overhead, dan underapplied overhead.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Overhead pabrik adalah biaya produksi selain bahan baku langsung dan tenaga kerja langsung. Karena sulit ditelusuri langsung, overhead dibebankan dengan tarif yang ditentukan di muka.' },
      {
        kind: 'table',
        headers: ['Keterangan', 'Jumlah'],
        rows: [
          ['Estimasi overhead pabrik', dataCell],
          ['Estimasi dasar pembebanan', dataCell],
          ['Tarif overhead', 'Estimasi overhead ÷ estimasi dasar'],
          ['Dasar pembebanan aktual', dataCell],
          ['Overhead dibebankan', 'Tarif × dasar aktual'],
          ['Overhead aktual', dataCell],
          ['Selisih overhead', 'Overhead aktual - overhead dibebankan'],
          ['Keterangan', 'Overapplied atau underapplied'],
        ],
      },
      { kind: 'formula', text: 'Predetermined overhead rate = Estimasi overhead pabrik ÷ Estimasi dasar pembebanan' },
      { kind: 'formula', text: 'Overhead dibebankan = Tarif overhead × Dasar pembebanan aktual' },
      { kind: 'formula', text: 'Selisih overhead = Overhead aktual - Overhead dibebankan' },
      note('Jika overhead aktual lebih besar dari overhead dibebankan, terjadi underapplied overhead. Jika overhead aktual lebih kecil, terjadi overapplied overhead.'),
      warningManual('Angka E11-1 dan contoh variance overhead perlu dicek dari sumber jika digunakan sebagai contoh final.'),
      checklist(['Tarif dihitung dari estimasi, bukan aktual', 'Dasar pembebanan aktual sudah sesuai soal', 'Overapplied dan underapplied tidak tertukar']),
    ],
  },
  {
    id: 'departmental-overhead',
    category: 'akuntansi_manajemen',
    title: 'Laporan Departementalisasi Overhead',
    shortTitle: 'Departementalisasi Overhead',
    tm: 'TM 12',
    source: 'AKBI Master TM 12 dan Carter Departmental Overhead',
    priority: 'inti',
    description:
      'Laporan untuk membagi overhead ke departemen produksi dan departemen jasa, lalu mengalokasikan biaya departemen jasa ke departemen produksi.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Departementalisasi overhead membuat pembebanan overhead lebih tepat karena setiap departemen dapat memakai dasar pembebanan yang berbeda.' },
      reportTable('Alur departementalisasi overhead.', [
        ['Identifikasi departemen', 'Pisahkan departemen produksi dan departemen jasa'],
        ['Kumpulkan overhead awal', 'Masukkan biaya departemen langsung dan tidak langsung'],
        ['Factory survey', 'Gunakan luas lantai, jumlah karyawan, kWh, jam mesin, atau dasar lain'],
        ['Alokasi departemen jasa', 'Gunakan direct method, step method, atau simultaneous method'],
        ['Tarif overhead departemen', 'Total overhead departemen produksi setelah alokasi ÷ dasar pembebanan'],
      ]),
      {
        kind: 'table',
        headers: ['Keterangan', 'Produksi A', 'Produksi B', 'Jasa X', 'Jasa Y', 'Total'],
        rows: [
          ['Overhead awal', dataCell, dataCell, dataCell, dataCell, 'Total overhead awal'],
          ['Alokasi Jasa X', 'Hasil alokasi', 'Hasil alokasi', 'Ditutup', 'Jika metode step, diisi sesuai urutan', 'Total tetap seimbang'],
          ['Alokasi Jasa Y', 'Hasil alokasi', 'Hasil alokasi', 'Jika masih terbuka', 'Ditutup', 'Total tetap seimbang'],
          ['Total overhead setelah alokasi', 'Hasil akhir', 'Hasil akhir', '0', '0', 'Total overhead tetap sama'],
        ],
      },
      { kind: 'formula', text: 'Alokasi biaya departemen jasa = Biaya departemen jasa × Proporsi pemakaian jasa' },
      { kind: 'formula', text: 'Tarif overhead departemen = Total overhead departemen produksi setelah alokasi jasa ÷ Dasar pembebanan departemen' },
      { kind: 'formula', text: 'Overhead dibebankan per departemen = Tarif overhead departemen × Dasar aktual departemen' },
      {
        kind: 'table',
        headers: ['Metode Pra-UAS', 'Perakitan', 'Pengemasan', 'Total'],
        rows: [
          ['Direct Method', 'Rp1.256.000', 'Rp1.104.000', 'Rp2.360.000'],
          ['Sequential Method', 'Rp1.251.428', 'Rp1.108.572', 'Rp2.360.000'],
        ],
        caption: 'Ringkasan hasil alokasi departemen jasa Pemeliharaan dan Teknik ke departemen produksi.',
      },
      note('Pada sequential method contoh Pra-UAS, Pemeliharaan dialokasikan lebih dahulu ke Teknik, Perakitan, dan Pengemasan. Setelah Pemeliharaan ditutup, Teknik hanya dialokasikan ke departemen produksi.'),
      warningManual('Tabel factory survey, Nickleby Company, dan persentase jasa dari scan Carter perlu diverifikasi manual. Contoh Pra-UAS Pemeliharaan-Teknik sudah dimasukkan berdasarkan data soal yang terbaca.'),
      checklist(['Departemen produksi dan jasa sudah dipisah', 'Metode alokasi sesuai soal', 'Departemen jasa yang sudah ditutup tidak dialokasikan kembali', 'Total overhead sebelum dan sesudah alokasi seimbang']),
    ],
  },
  {
    id: 'abc-report',
    category: 'akuntansi_manajemen',
    title: 'Laporan Activity-Based Costing / ABC Report',
    shortTitle: 'ABC Report',
    tm: 'TM 13',
    source: 'AKBI Master TM 13 dan Carter Activity-Based Costing',
    priority: 'inti',
    description:
      'Laporan untuk menghitung biaya produk berbasis aktivitas melalui activity cost pool, activity driver, activity rate, dan pembebanan overhead ABC.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'ABC membebankan overhead berdasarkan aktivitas yang dikonsumsi produk. Laporan ini membantu mengurangi distorsi biaya yang muncul dari sistem tradisional berbasis volume.' },
      {
        kind: 'table',
        headers: ['Activity cost pool', 'Total biaya aktivitas', 'Total driver', 'Tarif aktivitas'],
        rows: [
          ['Setup', dataCell, dataCell, 'Total biaya setup ÷ total setup'],
          ['Design changes', dataCell, dataCell, 'Total biaya design changes ÷ total perubahan desain'],
          ['Other overhead', dataCell, dataCell, 'Total other overhead ÷ total dasar pembebanan'],
        ],
      },
      { kind: 'formula', text: 'Tarif aktivitas = Total biaya activity cost pool ÷ Total activity driver' },
      { kind: 'formula', text: 'Biaya aktivitas produk = Tarif aktivitas × Driver yang digunakan produk' },
      { kind: 'formula', text: 'Total overhead ABC produk = Jumlah seluruh biaya aktivitas yang dibebankan ke produk' },
      { kind: 'formula', text: 'Total kos produk ABC = Direct material + Direct labor + Overhead ABC' },
      { kind: 'formula', text: 'Kos per unit ABC = Total kos produk ABC ÷ Jumlah unit produk' },
      {
        kind: 'example',
        title: 'Bangtan Company - Contoh ABC Pra-UAS',
        blocks: [
          {
            kind: 'table',
            headers: ['Aktivitas', 'Klasifikasi', 'Total biaya', 'Total driver', 'Tarif aktivitas'],
            rows: [
              ['Setup', 'Batch-level', 'Rp8.000.000', '625 setup hours', 'Rp12.800'],
              ['Design', 'Product-level', 'Rp3.950.000', '250 design changes', 'Rp15.800'],
              ['Lighting', 'Plant/facility-level', 'Rp3.300.000', '4.000 m²', 'Rp825'],
            ],
          },
          {
            kind: 'table',
            headers: ['Produk', 'FOH ABC', 'Total kos', 'Kos per unit'],
            rows: [
              ['Boneka', 'Rp8.820.000', 'Rp56.320.000', 'Rp75.093,33'],
              ['Bantal', 'Rp6.430.000', 'Rp38.930.000', 'Rp77.860'],
            ],
          },
          note('Urutan kerja ABC: klasifikasi aktivitas, hitung tarif aktivitas, bebankan FOH ke produk, hitung total kos, lalu hitung kos per unit.'),
        ],
      },
      {
        kind: 'example',
        title: 'Dual Company',
        blocks: [
          {
            kind: 'table',
            headers: ['Activity Cost Pool', 'Total Biaya', 'Total Driver', 'Tarif Aktivitas'],
            rows: [
              ['Setup', '800.000', '80 setup', '10.000 per setup'],
              ['Design changes', '600.000', '20 perubahan desain', '30.000 per perubahan desain'],
              ['Other overhead', '1.600.000', '100.000 jam TKL', '16 per jam TKL'],
            ],
          },
          {
            kind: 'table',
            headers: ['Produk', 'Setup', 'Design Changes', 'Other Overhead', 'Total Overhead ABC'],
            rows: [
              ['Common', '400.000', '360.000', '1.568.000', '2.328.000'],
              ['Special', '400.000', '240.000', '32.000', '672.000'],
              ['Total', '800.000', '600.000', '1.600.000', '3.000.000'],
            ],
          },
          warningManual('Angka contoh Dual Company berasal dari scan Carter dan perlu verifikasi manual.'),
        ],
      },
      checklist(['Cost pool sudah ditentukan', 'Driver sesuai aktivitas', 'Tarif aktivitas dihitung sebelum pembebanan', 'Kos per unit dihitung setelah total kos produk']),
    ],
  },
  {
    id: 'variance-report',
    category: 'akuntansi_manajemen',
    title: 'Laporan Varians Biaya',
    shortTitle: 'Varians Biaya',
    tm: 'Penguat AKBI',
    source: 'Penguat dari konsep pengendalian biaya, standard costing, dan variance analysis',
    priority: 'penguat',
    description:
      'Laporan penguat untuk membandingkan biaya standar, biaya aktual, dan selisih biaya. Tidak menjadi pokok utama silabi, tetapi berguna untuk pengendalian biaya.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Laporan varians biaya membantu manajemen melihat selisih antara biaya standar dan biaya aktual. Selisih dapat dianalisis untuk bahan, tenaga kerja, dan overhead.' },
      {
        kind: 'table',
        headers: ['Komponen varians', 'Data yang diperlukan', 'Hasil'],
        rows: [
          ['Varians bahan baku', 'Harga standar, harga aktual, kuantitas standar, kuantitas aktual', 'Favorable atau unfavorable'],
          ['Varians tenaga kerja', 'Tarif standar, tarif aktual, jam standar, jam aktual', 'Favorable atau unfavorable'],
          ['Varians overhead', 'Overhead standar, overhead aktual, dasar pembebanan', 'Overapplied atau underapplied'],
        ],
      },
      { kind: 'formula', text: 'Varians biaya = Biaya aktual - Biaya standar' },
      { kind: 'formula', text: 'Jika biaya aktual > biaya standar, selisih biasanya unfavorable' },
      { kind: 'formula', text: 'Jika biaya aktual < biaya standar, selisih biasanya favorable' },
      warningManual('Laporan varians biaya adalah materi penguat. Gunakan jika dosen menautkan ke standard costing atau pengendalian biaya. Jangan diposisikan sebagai laporan inti jika tidak muncul di soal.'),
      checklist(['Standar dan aktual dibedakan', 'Selisih favorable dan unfavorable tidak tertukar', 'Varians dipakai sebagai alat pengendalian, bukan hanya hitungan angka']),
    ],
  },
  {
    id: 'responsibility-report',
    category: 'akuntansi_manajemen',
    title: 'Laporan Pertanggungjawaban Biaya / Responsibility Report',
    shortTitle: 'Responsibility Report',
    tm: 'Penguat AKBI',
    source: 'Penguat dari konsep responsibility accounting dan pengendalian biaya departemen',
    priority: 'penguat',
    description:
      'Laporan penguat untuk mengevaluasi biaya menurut pusat tanggung jawab, terutama departemen atau manajer yang mengendalikan biaya.',
    practiceMode: 'template',
    blocks: [
      { kind: 'h2', text: 'Fungsi Laporan' },
      { kind: 'p', text: 'Responsibility report membantu manajemen mengevaluasi biaya berdasarkan bagian yang bertanggung jawab. Dalam AKBI, konsep ini relevan dengan departementalisasi overhead dan pengendalian biaya.' },
      {
        kind: 'table',
        headers: ['Pusat tanggung jawab', 'Anggaran biaya', 'Biaya aktual', 'Selisih', 'Catatan pengendalian'],
        rows: [
          ['Departemen produksi', dataCell, dataCell, 'Aktual - anggaran', 'Diisi berdasarkan analisis'],
          ['Departemen jasa', dataCell, dataCell, 'Aktual - anggaran', 'Diisi berdasarkan analisis'],
          ['General factory', dataCell, dataCell, 'Aktual - anggaran', 'Diisi berdasarkan analisis'],
        ],
      },
      { kind: 'formula', text: 'Selisih biaya departemen = Biaya aktual departemen - Anggaran biaya departemen' },
      note('Responsibility report sebaiknya hanya menilai biaya yang dapat dikendalikan oleh manajer terkait.'),
      warningManual('Responsibility report adalah laporan penguat. Gunakan sebagai pendukung pengendalian biaya, bukan pengganti laporan produksi, overhead, atau ABC.'),
      checklist(['Pusat tanggung jawab jelas', 'Biaya terkendali dan tidak terkendali dibedakan', 'Selisih biaya diberi catatan analisis']),
    ],
  },
];

export function getAkbiManagementReport(id: string): AkbiManagementReport | undefined {
  return AKBI_MANAGEMENT_REPORTS.find((report) => report.id === id);
}
