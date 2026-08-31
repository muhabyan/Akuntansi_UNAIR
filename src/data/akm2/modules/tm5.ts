import type { Reading } from '../../../types';
import { CASE_INTANGIBLE_GOODWILL } from '../akm2PracticeCases';

const SVG_INTANGIBLE_CATEGORIES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KLASIFIKASI MASA MANFAAT ASET TIDAK BERWUJUD (PSAK 19)</text>
  
  <!-- Limited Life -->
  <rect x="40" y="55" width="280" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="180" y="80" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">Masa Manfaat Terbatas (Limited Life)</text>
  <text x="180" y="102" fill="#cbd5e1" font-size="10.5" text-anchor="middle">• Paten (Patents) - 20 Tahun</text>
  <text x="180" y="122" fill="#cbd5e1" font-size="10.5" text-anchor="middle">• Hak Cipta (Copyrights)</text>
  <text x="180" y="142" fill="#cbd5e1" font-size="10.5" text-anchor="middle">• Waralaba Terbatas (Franchise)</text>
  <rect x="60" y="158" width="240" height="32" rx="4" fill="#0369a1" opacity="0.3"/>
  <text x="180" y="178" fill="#7dd3fc" font-size="10.5" font-weight="700" text-anchor="middle">DIAMORTISASI + Uji Impairment bila ada indikasi</text>

  <!-- Indefinite Life -->
  <rect x="360" y="55" width="280" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="500" y="80" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="middle">Masa Manfaat Tak Terbatas (Indefinite)</text>
  <text x="500" y="102" fill="#cbd5e1" font-size="10.5" text-anchor="middle">• Merek Dagang (Trademarks)</text>
  <text x="500" y="122" fill="#cbd5e1" font-size="10.5" text-anchor="middle">• Goodwill Penggabungan Usaha</text>
  <text x="500" y="142" fill="#cbd5e1" font-size="10.5" text-anchor="middle">• Lisensi Penyiaran Tanpa Batas</text>
  <rect x="380" y="158" width="240" height="32" rx="4" fill="#9f1239" opacity="0.3"/>
  <text x="500" y="178" fill="#fda4af" font-size="10.5" font-weight="700" text-anchor="middle">TIDAK DIAMORTISASI + Wajib Impairment Tahunan</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Aset Tidak Berwujud (Intangible Assets)',
  ref: 'Kieso IFRS 5e Ch. 12 | PSAK 19, PSAK 22',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 5: Menguasai definisi & kriteria pengakuan aset tak berwujud (PSAK 19), pemisahan tegas Biaya Riset vs Pengembangan, amortisasi masa manfaat terbatas vs tak terbatas, serta akuntansi Goodwill penggabungan usaha.',
  objectives: [
    'Memahami 3 karakteristik esensial Aset Tak Berwujud: Keteridentifikasian (Identifiability), Pengendalian (Control), dan Manfaat Ekonomik Masa Depan.',
    'Membedakan perlakuan Biaya Riset (Beban langsung) vs Biaya Pengembangan (Kapitalisasi jika memenuhi 6 kriteria kelayakan).',
    'Menguasai akuntansi Paten, Hak Cipta, Merek Dagang, dan Waralaba.',
    'Menghitung dan menjurnal amortisasi aset tak berwujud dengan metode garis lurus (tanpa akun akumulasi terpisah atau dengan akun kontra).',
    'Menghitung perolehan Goodwill penggabungan usaha dan memahami larangan kapitalisasi Goodwill internal.',
    'Memahami kewajiban uji penurunan nilai tahunan untuk Goodwill dan aset tak berwujud bermasa manfaat tidak terbatas.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Klasifikasi Masa Manfaat & Perlakuan Amortisasi Aset Tidak Berwujud',
      svg: SVG_INTANGIBLE_CATEGORIES,
      caption: 'Gambar 5.1: Pembedaan perlakuan amortisasi antara Limited Life vs Indefinite Life intangibles.'
    },

    { kind: 'h2', text: '1. Karakteristik & Kriteria Pengakuan Aset Tidak Berwujud (PSAK 19)' },
    {
      kind: 'p',
      text: 'Aset Tidak Berwujud (*Intangible Assets*) adalah aset non-moneter yang dapat diidentifikasi tanpa wujud fisik. Standar menetapkan 3 kriteria mutlak pengakuan:'
    },
    {
      kind: 'ul',
      items: [
        '**Keteridentifikasian (Identifiability)**: Aset dapat dipisahkan (dijual, dialihkan, dilisensikan) ATAU timbul dari hak kontraktual / hak hukum lainnya.',
        '**Pengendalian (Control)**: Entitas memiliki kekuatan untuk memperoleh manfaat ekonomik masa depan dari aset tersebut dan membatasi akses pihak lain.',
        '**Manfaat Ekonomik Masa Depan (Future Economic Benefits)**: Mencakup pendapatan dari penjualan barang/jasa, penghematan biaya produksi, atau imbal hasil lainnya.'
      ]
    },

    { kind: 'h2', text: '2. Pemisahan Biaya Riset vs Biaya Pengembangan (R&D Costs)' },
    {
      kind: 'table',
      headers: ['Tahapan R&D', 'Definisi & Aktivitas', 'Perlakuan Akuntansi (PSAK 19)'],
      rows: [
        ['Fase Riset (Research Phase)', 'Penyelidikan orisinal dan terencana untuk memperoleh pengetahuan ilmiah atau teknis baru (misal: pencarian alternatif formula bahan baku).', '**BEBAN PERIODE (EXPENSE)** saat terjadinya. Tidak ada kepastian masa depan.'],
        ['Fase Pengembangan (Development Phase)', 'Penerapan temuan riset untuk perencanaan atau desain produk/proses baru sebelum produksi komersial.', '**KAPITALISASI** sebagai Aset Tak Berwujud jika dan hanya jika memenuhi **6 Kriteria Kelayakan**!']
      ],
      caption: 'Tabel 5.1: Pembedaan tegas fase riset vs fase pengembangan.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '6 Kriteria Wajib Kapitalisasi Biaya Pengembangan (PIRATE Criteria)',
      text: 'Entitas WAJIB mengkapitalisasi biaya pengembangan jika mampu membuktikan seluruh 6 hal berikut:\n1. **Kelayakan Teknis** untuk menyelesaikan aset agar siap digunakan/dijual.\n2. **Niat Entitas** untuk menyelesaikan dan menggunakannya atau menjualnya.\n3. **Kemampuan** untuk menggunakan atau menjual aset tersebut.\n4. **Manfaat Ekonomik Masa Depan** (adanya pasar bagi output produk atau kegunaan internal).\n5. **Ketersediaan Sumber Daya** teknis, keuangan, dan sumber daya lain yang memadai.\n6. **Kemampuan Mengukur Pengeluaran** secara andal selama masa pengembangan.'
    },

    { kind: 'h2', text: '3. Akuntansi Goodwill Penggabungan Usaha (PSAK 22 / IFRS 3)' },
    {
      kind: 'p',
      text: 'Goodwill merepresentasikan manfaat ekonomik masa depan yang timbul dari aset lain yang diperoleh dalam penggabungan usaha yang tidak dapat diidentifikasi secara individual. Goodwill **HANYA DAPAT DIAKUI** jika timbul dari **transaksi pembelian bisnis nyata (Business Combination)**.'
    },
    {
      kind: 'formula',
      text: '\\text{Goodwill} = \\text{Imbalan yang Dialihkan (Harga Beli)} - \\text{Nilai Wajar Aset Bersih Teridentifikasi}',
      note: 'Jika Harga Beli < Nilai Wajar Aset Bersih, selisihnya diakui sebagai Keuntungan Pembelian Diskon (Bargain Purchase Gain) di Laba Rugi!'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Larangan PSAK 19 atas Goodwill yang Dihasilkan Internal',
      text: 'Goodwill yang dihasilkan secara internal (Internally Generated Goodwill) **TIDAK BOLEH DIAKUI SEBAGAI ASET** karena bukan merupakan sumber daya teridentifikasi yang dapat dikendalikan dan diukur secara andal.'
    },

    CASE_INTANGIBLE_GOODWILL,

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 5' },
    {
      kind: 'ul',
      items: [
        '**Biaya Riset**: Selalu dibebankan 100% saat terjadi.',
        '**Biaya Pengembangan**: Hanya dikapitalisasi setelah memenuhi 6 kriteria kelayakan teknis & komersial.',
        '**Amortisasi**: Hanya dilakukan untuk aset tak berwujud dengan masa manfaat terbatas (Limited Life).',
        '**Goodwill & Merek Dagang**: Tidak diamortisasi, tetapi wajib diuji penurunan nilai (Impairment Test) minimal sekali setahun.',
        '**Goodwill Internal**: Dilarang diakui di neraca.'
      ]
    }
  ]
};