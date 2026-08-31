import type { Reading } from '../../../types';
import { CASE_EQUITY_METHOD_INVESTMENT } from '../akm2PracticeCases';

const SVG_INVESTMENTS_MAP = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KLASIFIKASI &amp; METODE AKUNTANSI INVESTASI (PSAK 71 / 15 / 65)</text>
  
  <!-- Passive <20% -->
  <rect x="30" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="122" y="78" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Pasif (&lt; 20% Saham)</text>
  <text x="122" y="98" fill="#f8fafc" font-size="10.5" font-weight="600" text-anchor="middle">PSAK 71: Fair Value</text>
  <text x="122" y="118" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• FVTPL (Laba Rugi)</text>
  <text x="122" y="135" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• FVOCI (Ekuitas/OCI)</text>
  <text x="122" y="155" fill="#94a3b8" font-size="9" text-anchor="middle">Dividen diakui sebagai</text>
  <text x="122" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">Pendapatan Dividen</text>

  <!-- Significant 20-50% -->
  <rect x="245" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="337" y="78" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Asosiasi (20% - 50%)</text>
  <text x="337" y="98" fill="#f8fafc" font-size="10.5" font-weight="600" text-anchor="middle">PSAK 15: Equity Method</text>
  <text x="337" y="118" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Laba Asosiasi = +Investasi</text>
  <text x="337" y="135" fill="#fca5a5" font-size="9.5" font-weight="700" text-anchor="middle">• Dividen = -Investasi!</text>
  <text x="337" y="155" fill="#94a3b8" font-size="9" text-anchor="middle">Pengaruh Signifikan</text>
  <text x="337" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">(Significant Influence)</text>

  <!-- Controlling >50% -->
  <rect x="460" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="552" y="78" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Induk-Anak (&gt; 50%)</text>
  <text x="552" y="98" fill="#f8fafc" font-size="10.5" font-weight="600" text-anchor="middle">PSAK 65: Konsolidasi</text>
  <text x="552" y="118" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Pengendalian (Control)</text>
  <text x="552" y="135" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Laporan Keuangan</text>
  <text x="552" y="152" fill="#cbd5e1" font-size="9.5" text-anchor="middle">  Konsolidasian Gabungan</text>
  <text x="552" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">• Kepentingan Nonpengendali</text>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Investasi Efek Utang dan Ekuitas (Investments)',
  ref: 'Kieso IFRS 5e Ch. 17 | PSAK 71, PSAK 15, PSAK 65',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 14: Menguasai klasifikasi instrumen keuangan PSAK 71 (Amortised Cost, FVOCI, FVTPL) berbasis uji SPPI dan Business Model, mekanisme recycling laba rugi, serta penerapan Metode Ekuitas (Equity Method) pada entitas asosiasi (PSAK 15).',
  objectives: [
    'Memahami 3 klasifikasi Investasi Efek Utang (Debt Investments): Biaya Perolehan Diamortisasi, FVOCI, dan FVTPL.',
    'Menerapkan Uji SPPI (Solely Payments of Principal and Interest) dan Uji Model Bisnis entitas.',
    'Menjurnal keuntungan/kerugian belum terealisasi (Unrealized Holding Gain/Loss) pada FVTPL vs FVOCI.',
    'Menguasai Metode Ekuitas (Equity Method - PSAK 15) untuk investasi dengan pengaruh signifikan (20% - 50%).',
    'Memahami perlakuan penerimaan dividen pada Metode Ekuitas yang mengurangi saldo investasi (bukan pendapatan dividen).',
    'Mengetahui gambaran umum konsolidasi pada kepemilikan pengendali > 50% (PSAK 65).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Klasifikasi Kepemilikan Saham & Standar Akuntansi yang Berlaku',
      svg: SVG_INVESTMENTS_MAP,
      caption: 'Gambar 14.1: Pemisahan metode akuntansi berdasarkan persentase kepemilikan dan derajat pengaruh.'
    },

    { kind: 'h2', text: '1. Klasifikasi Investasi Efek Utang (Debt Investments - PSAK 71)' },
    {
      kind: 'table',
      headers: ['Kategori Investasi Utang', 'Model Bisnis & SPPI Test', 'Pengukuran Neraca & Dampak Perubahan Nilai Wajar'],
      rows: [
        ['1. Biaya Perolehan Diamortisasi (Amortised Cost)', 'Dimiliki semata-mata untuk menagih arus kas kontraktual (Hold to Collect).', 'Disajikan pada nilai amortisasi bunga efektif di Neraca. Perubahan nilai wajar pasar **DIABAIKAN**.'],
        ['2. Nilai Wajar Melalui Penghasilan Komprehensif Lain (FVOCI)', 'Dimiliki untuk menagih arus kas kontraktual DAN dijual (Hold to Collect and Sell).', 'Disajikan pada **Nilai Wajar** di Neraca. Keuntungan/kerugian belum terealisasi masuk ke **OCI (Ekuitas)** dan di-*recycle* ke Laba Rugi saat obligasi dijual!'],
        ['3. Nilai Wajar Melalui Laba Rugi (FVTPL)', 'Dimiliki untuk tujuan diperdagangkan / trading / spekulasi.', 'Disajikan pada **Nilai Wajar** di Neraca. Keuntungan/kerugian belum terealisasi langsung masuk ke **Laba Rugi (Net Income)**.']
      ],
      caption: 'Tabel 14.1: Tiga kategori investasi efek utang menurut PSAK 71.'
    },

    { kind: 'h2', text: '2. Investasi Saham: Metode Ekuitas (Equity Method - PSAK 15)' },
    {
      kind: 'p',
      text: 'Jika investor memiliki 20% hingga 50% saham berhak suara pada investee (sehingga memiliki Pengaruh Signifikan / *Significant Influence*), akuntansi wajib menggunakan **Metode Ekuitas (Equity Method)**:'
    },
    {
      kind: 'table',
      headers: ['Peristiwa pada Investee', 'Dampak pada Akun Investasi Investor', 'Ayat Jurnal Akuntansi'],
      rows: [
        ['1. Investee Menghasilkan Laba Bersih', 'Saldo Investasi **BERTAMBAH** proporsional sebesar bagian laba investor.', '**Debit**: Investasi pada Asosiasi\n**Kredit**: Bagian Laba atas Entitas Asosiasi (Laba Rugi)'],
        ['2. Investee Mengalami Rugi Bersih', 'Saldo Investasi **BERKURANG** proporsional.', '**Debit**: Bagian Rugi atas Entitas Asosiasi (Laba Rugi)\n**Kredit**: Investasi pada Asosiasi'],
        ['3. Investee Membagikan Dividen Kas', 'Saldo Investasi **BERKURANG** (dianggap pengembalian modal investasi, BUKAN pendapatan dividen!).', '**Debit**: Kas / Piutang Dividen\n**Kredit**: Investasi pada Asosiasi'],
        ['4. Fluktuasi Nilai Wajar Saham di Pasar', '**DIABAIKAN** (tidak ada jurnal penyesuaian fair value).', 'Tidak ada jurnal, kecuali terjadi penurunan nilai permanen (Impairment).']
      ],
      caption: 'Tabel 14.2: Mekanisme penjurnalan Metode Ekuitas PSAK 15.'
    },

    CASE_EQUITY_METHOD_INVESTMENT,

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 14 (Pra-UAS)' },
    {
      kind: 'ul',
      items: [
        '**FVTPL vs FVOCI**: FVTPL mencatat untung/rugi fair value di Laba Rugi; FVOCI mencatat di OCI.',
        '**Equity Method**: Bagian laba investee mendebit Investasi; dividen diterima mengkredit Investasi.',
        '**Dividen pada Equity Method**: Bukan pendapatan dividen, melainkan pengembalian investasi (reduksi saldo aset investasi).',
        '**Konsolidasi (>50%)**: Menggabungkan seluruh baris laporan keuangan entitas anak ke entitas induk dengan mengeliminasi transaksi antar-perusahaan.'
      ]
    }
  ]
};