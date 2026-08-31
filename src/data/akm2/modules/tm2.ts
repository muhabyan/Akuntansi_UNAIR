import type { Reading } from '../../../types';
import {
  CASE_NON_MONETARY_EXCHANGE,
  CASE_INVOLUNTARY_CONVERSION,
} from '../akm2PracticeCases';

const SVG_EXCHANGE_DECISION = `
<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="230" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#a855f7" font-size="13" font-weight="700" text-anchor="middle">POHON KEPUTUSAN PERTUKARAN ASET NON-MONETER (PSAK 16)</text>
  
  <rect x="230" y="50" width="220" height="34" rx="6" fill="#3b0764" stroke="#a855f7" stroke-width="1.5"/>
  <text x="340" y="72" fill="#f3e8ff" font-size="11" font-weight="700" text-anchor="middle">Apakah Ada Commercial Substance?</text>

  <line x1="280" y1="84" x2="160" y2="115" stroke="#a855f7" stroke-width="1.5"/>
  <rect x="50" y="115" width="220" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="160" y="135" fill="#10b981" font-size="11.5" font-weight="700" text-anchor="middle">YA (HAS SUBSTANCE)</text>
  <text x="160" y="155" fill="#cbd5e1" font-size="10" text-anchor="middle">• Akui SEMUA Keuntungan (Gain)</text>
  <text x="160" y="172" fill="#cbd5e1" font-size="10" text-anchor="middle">• Akui SEMUA Kerugian (Loss)</text>
  <text x="160" y="192" fill="#38bdf8" font-size="9.5" text-anchor="middle">Aset Baru = Fair Value Diserahkan</text>
  <text x="160" y="208" fill="#38bdf8" font-size="9.5" text-anchor="middle">+ Kas Dibayar / - Kas Diterima</text>

  <line x1="400" y1="84" x2="520" y2="115" stroke="#a855f7" stroke-width="1.5"/>
  <rect x="410" y="115" width="220" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="520" y="135" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">TIDAK (LACKS SUBSTANCE)</text>
  <text x="520" y="155" fill="#ef4444" font-size="10" font-weight="600" text-anchor="middle">• Kondisi RUGI: Akui Segera 100%!</text>
  <text x="520" y="172" fill="#f59e0b" font-size="10" text-anchor="middle">• Kondisi UNTUNG (Bayar Kas):</text>
  <text x="520" y="188" fill="#cbd5e1" font-size="9.5" text-anchor="middle">  Tangguhkan Seluruh Keuntungan</text>
  <text x="520" y="206" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Kondisi UNTUNG (Terima Kas): Proporsional</text>
</svg>`;

export const TM2_READING: Reading = {
  tm: 2,
  title: 'Kos Setelah Akuisisi & Disposisi Aset Tetap',
  ref: 'Kieso IFRS 5e Ch. 10 | PSAK 16, PSAK 58',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 2: Menguasai 4 klasifikasi pengeluaran setelah akuisisi (Capital vs Revenue Expenditure), perlakuan akuntansi penghentian/penjualan aset, konversi terpaksa (asuransi), dan mekanisme pertukaran aset non-moneter berdasarkan Commercial Substance.',
  objectives: [
    'Membedakan Pengeluaran Modal (Capital Expenditure) vs Pengeluaran Pendapatan (Revenue Expenditure / Expense).',
    'Menguasai 4 kategori pengeluaran: Penambahan (Additions), Peningkatan & Penggantian (Improvements & Replacements), Penataan Kembali (Rearrangements), dan Perbaikan Rutin (Repairs).',
    'Menerapkan 3 pendekatan akuntansi penggantian komponen aset (Substitution Approach, Capitalize New Cost, Charge to Accumulated Depreciation).',
    'Mampu menghitung depresiasi parsial dan menjurnal pelepasan aset tetap (Penjualan, Penghentian Sukarela, dan Konversi Terpaksa/Asuransi).',
    'Menguasai analisis dan jurnal Pertukaran Aset Non-Moneter (Has Commercial Substance vs Lacks Commercial Substance) pada kondisi untung dan rugi.',
    'Memahami kriteria & penghentian depresiasi aset tidak lancar yang dimiliki untuk dijual (PSAK 58).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Pohon Keputusan Pertukaran Aset Non-Moneter & Pengakuan Untung/Rugi',
      svg: SVG_EXCHANGE_DECISION,
      caption: 'Gambar 2.1: Alur pengakuan laba/rugi pertukaran aset berdasarkan ada/tidaknya substansi komersial.'
    },
    { kind: 'h2', text: '1. Pengeluaran Setelah Akuisisi (Costs Subsequent to Acquisition)' },
    {
      kind: 'p',
      text: 'Setelah aset tetap beroperasi, entitas secara berkala mengeluarkan biaya tambahan. Kriteria mendasar pengakuan biaya tambahan ke dalam nilai tercatat aset (**Capital Expenditure**) adalah jika pengeluaran tersebut memenuhi salah satu dari 3 syarat: (1) **memperpanjang masa manfaat** aset, (2) **meningkatkan kuantitas/kapasitas output**, atau (3) **meningkatkan kualitas/efisiensi output** secara signifikan.'
    },
    {
      kind: 'table',
      headers: ['Kategori Pengeluaran', 'Karakteristik & Contoh Kasus', 'Perlakuan Akuntansi (PSAK 16)'],
      rows: [
        ['1. Penambahan (Additions)', 'Menambah unit fisik baru pada aset (misal: membangun sayap ruang baru pada gedung rumah sakit, memasang sistem pendingin tambahan pada truk).', '**KAPITALISASI**: Mendebit akun Aset Tetap bersangkutan.'],
        ['2. Peningkatan & Penggantian (Improvements & Replacements)', 'Mengganti komponen lama dengan komponen baru yang lebih baik (Improvement) atau komponen serupa (Replacement). Misal: ganti atap asbes dengan rangka baja ringan, ganti mesin diesel dengan motor listrik.', '**KAPITALISASI**: Menggunakan Pendekatan Substitusi (Substitution Approach) — hapus nilai buku komponen lama, masukkan biaya komponen baru.'],
        ['3. Penataan Kembali & Reorganisasi (Rearrangement & Reinstallation)', 'Biaya merelokasi/mengatur ulang tata letak mesin pabrik guna melancarkan alur proses produksi.', '**KAPITALISASI** (jika menghasilkan manfaat efisiensi masa depan terukur) atau **BEBAN** jika manfaatnya tidak pasti.'],
        ['4. Perbaikan & Pemeliharaan Rutin (Ordinary Repairs & Maintenance)', 'Aktivitas rutin menjaga aset tetap dalam kondisi kerja normal (ganti oli mesin, servis berkala, pengecatan dinding berkala, penggantian suku cadang kecil).', '**BEBAN PERIODE (EXPENSE)**: Mendebit akun Beban Pemeliharaan & Perbaikan (Maintenance & Repair Expense).']
      ],
      caption: 'Tabel 2.1: Klasifikasi dan perlakuan 4 jenis pengeluaran setelah akuisisi.'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Tiga Pendekatan Akuntansi Penggantian Komponen (Replacements)',
      text: '1. **Pendekatan Substitusi (Substitution Approach - Paling Dianjurkan IFRS)**: Hapus biaya historis dan akumulasi depresiasi komponen lama (akui laba/rugi pelepasan komponen lama jika ada), lalu debit biaya komponen baru ke aset.\n2. **Kapitalisasi Biaya Baru (Capitalize New Cost)**: Jika nilai tercatat komponen lama tidak dapat dipisahkan secara andal, debit biaya komponen baru ke nilai aset dengan asumsi depresiasi lama sudah mengikis komponen lama.\n3. **Mendebit Akumulasi Depresiasi (Charge to Accumulated Depreciation)**: Jika penggantian semata-mata memperpanjang masa manfaat aset tanpa meningkatkan efisiensi/kapasitas produksi.'
    },
    { kind: 'h2', text: '2. Disposisi / Pelepasan Aset Tetap (Dispositions of PPE)' },
    {
      kind: 'p',
      text: 'Pelepasan aset tetap dapat terjadi melalui penjualan sukarela, penghentian/penghapusan (scrapping), konversi terpaksa (bencana/asuransi), atau pertukaran aset. Dalam setiap disposisi, akuntan wajib mengikuti **4 langkah baku**:'
    },
    {
      kind: 'ol',
      items: [
        '**Update Depresiasi**: Hitung dan jurnal beban depresiasi parsial dari tanggal penutupan buku terakhir hingga tanggal pelepasan aset.',
        '**Tentukan Nilai Buku Bersih (Carrying Amount)**: Nilai Buku = Harga Perolehan Historis - Total Akumulasi Depresiasi Terkini.',
        '**Bandingkan Penerimaan Bersih dengan Nilai Buku**: Jika Kas/Klaim Diterima > Nilai Buku = **Keuntungan (Gain on Disposal)**; jika Kas/Klaim Diterima < Nilai Buku = **Kerugian (Loss on Disposal)**.',
        '**Buat Jurnal Pelepasan**: Tutup akun Akumulasi Depresiasi di DEBIT, tutup akun Aset Tetap di KREDIT, debit Kas/Piutang, dan catat selisihnya sebagai Gain (Kredit) atau Loss (Debit).'
      ]
    },
    CASE_INVOLUNTARY_CONVERSION,
    { kind: 'h2', text: '3. Pertukaran Aset Non-Moneter (Non-Monetary Asset Exchanges)' },
    {
      kind: 'p',
      text: 'Akuntansi pertukaran aset non-moneter (misal menukar mesin lama dengan mesin baru, atau tanah dengan bangunan) diatur dalam PSAK 16 berdasarkan konsep **Substansi Komersial (Commercial Substance)**.'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: 'Apa itu Substansi Komersial (Commercial Substance)?',
      text: 'Suatu transaksi pertukaran memiliki substansi komersial jika **arus kas masa depan entitas diperkirakan berubah secara signifikan** sebagai akibat dari transaksi tersebut, yaitu:\n• Risiko, waktu, dan jumlah arus kas dari aset yang diterima berbeda dari aset yang diserahkan; ATAU\n• Nilai spesifik entitas (entity-specific value) dari bagian operasinya yang terpengaruh oleh pertukaran mengalami perubahan.'
    },
    {
      kind: 'table',
      headers: ['Kondisi Transaksi', 'Kondisi RUGI (Loss Situation)', 'Kondisi UNTUNG (Gain Situation)'],
      rows: [
        ['Memiliki Substansi Komersial (Has Commercial Substance)', 'Akui Kerugian SEGERA 100% di Laba Rugi.', 'Akui Keuntungan SEGERA 100% di Laba Rugi.'],
        ['TIDAK Memiliki Substansi Komersial (Lacks Commercial Substance) — Tanpa Kas', 'Akui Kerugian SEGERA 100% di Laba Rugi.', 'TANGGUHKAN seluruh keuntungan (mengurangi nilai awal aset baru).'],
        ['TIDAK Memiliki Substansi Komersial — Menerima Kas Sebagian (Boot Received)', 'Akui Kerugian SEGERA 100% di Laba Rugi.', 'Akui Keuntungan secara PROPORSIONAL: (Kas Diterima / Total Nilai Wajar) × Total Gain.']
      ],
      caption: 'Tabel 2.2: Matriks pengakuan untung/rugi pertukaran aset non-moneter.'
    },
    CASE_NON_MONETARY_EXCHANGE,
    { kind: 'h2', text: '4. Aset Tidak Lancar yang Dimiliki untuk Dijual (PSAK 58 / IFRS 5)' },
    {
      kind: 'p',
      text: 'Jika entitas memutuskan untuk menjual aset tetapnya dan tidak lagi menggunakannya dalam operasional, aset tersebut harus direklasifikasi dari Aset Tetap menjadi **Aset Tidak Lancar yang Dimiliki untuk Dijual (Non-Current Assets Held for Sale)**.'
    },
    {
      kind: 'table',
      headers: ['Ketentuan Pokok PSAK 58', 'Aturan Standar Akuntansi'],
      rows: [
        ['Kriteria Reklasifikasi', 'Aset harus tersedia untuk segera dijual dalam kondisi saat ini, dan penjualannya harus **sangat mungkin terjadi (highly probable)** dalam waktu 12 bulan.'],
        ['Dasar Pengukuran', 'Diukur pada nilai yang **LEBIH RENDAH** antara Nilai Tercatat (Carrying Amount) vs Nilai Wajar Dikurangi Biaya untuk Menjual (Fair Value Less Costs to Sell).'],
        ['Penghentian Depresiasi', '**Aset TIDAK LAGI DIDEPRESIASI** sejak tanggal reklasifikasi menjadi dimiliki untuk dijual!'],
        ['Penyajian di Laporan Keuangan', 'Disajikan secara terpisah di kelompok Aset Lancar pada Laporan Posisi Keuangan.']
      ],
      caption: 'Tabel 2.3: Ketentuan aset tidak lancar yang dimiliki untuk dijual (PSAK 58).'
    },
    { kind: 'h2', text: '5. Rangkuman & Kunci Penguasaan Ujian TM 2' },
    {
      kind: 'ul',
      items: [
        '**Biaya Penggantian Komponen**: Gunakan Substitution Approach: hapus nilai buku komponen lama dan debit komponen baru.',
        '**Disposisi**: Jangan pernah lupa membuat jurnal penyesuaian depresiasi parsial hingga tanggal pelepasan.',
        '**Pertukaran - Kondisi Rugi**: Kerugian SELALU diakui 100% segera, baik memiliki substansi komersial maupun tidak.',
        '**Pertukaran - Tanpa Substansi Komersial (Untung)**: Keuntungan ditangguhkan dengan cara mengurangi nilai tercatat awal aset baru.',
        '**PSAK 58 Held for Sale**: Hentikan perhitungan depresiasi dan ukur sebesar Lower of Carrying Amount vs Fair Value Less Costs to Sell.'
      ]
    }
  ]
};