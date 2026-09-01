import type { Reading } from '../../../types';
import {
  CASE_EQUITY_METHOD_INVESTMENT,
} from '../akm2PracticeCases';

const SVG_INVESTMENTS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KLASIFIKASI ASET KEUANGAN INVESTASI (PSAK 71 &amp; PSAK 15)</text>

  <rect x="30" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="102" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">AMORTIZED COST</text>
  <text x="102" y="96" fill="#94a3b8" font-size="9" text-anchor="middle">Efek Utang (Hold to Collect)</text>
  <line x1="40" y1="108" x2="165" y2="108" stroke="#334155"/>
  <text x="102" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">• Suku Bunga Efektif</text>
  <text x="102" y="146" fill="#cbd5e1" font-size="9" text-anchor="middle">• Fair Value diabaikan</text>
  <text x="102" y="164" fill="#34d399" font-size="9" font-weight="600" text-anchor="middle">Pendapatan Bunga</text>
  <text x="102" y="182" fill="#34d399" font-size="9" font-weight="600" text-anchor="middle">di Laba Rugi</text>

  <rect x="190" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="262" y="78" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">FVOCI</text>
  <text x="262" y="96" fill="#94a3b8" font-size="9" text-anchor="middle">Utang (Collect &amp; Sell) / Ekuitas</text>
  <line x1="200" y1="108" x2="325" y2="108" stroke="#334155"/>
  <text x="262" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">• Dinilai di Fair Value</text>
  <text x="262" y="146" fill="#a855f7" font-size="9" text-anchor="middle">• Unrealized Gain/Loss</text>
  <text x="262" y="164" fill="#a855f7" font-size="9" font-weight="700" text-anchor="middle">MASUK OCI</text>
  <text x="262" y="182" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Ekuitas Komprehensif)</text>

  <rect x="350" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="422" y="78" fill="#f43f5e" font-size="10.5" font-weight="700" text-anchor="middle">FVPL</text>
  <text x="422" y="96" fill="#94a3b8" font-size="9" text-anchor="middle">Trading / Spekulasi Cepat</text>
  <line x1="360" y1="108" x2="485" y2="108" stroke="#334155"/>
  <text x="422" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">• Dinilai di Fair Value</text>
  <text x="422" y="146" fill="#f87171" font-size="9" text-anchor="middle">• Unrealized Gain/Loss</text>
  <text x="422" y="164" fill="#f87171" font-size="9" font-weight="700" text-anchor="middle">MASUK LABA RUGI</text>
  <text x="422" y="182" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Profit or Loss Berjalan)</text>

  <rect x="510" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="582" y="78" fill="#f59e0b" font-size="10.5" font-weight="700" text-anchor="middle">EQUITY METHOD</text>
  <text x="582" y="96" fill="#94a3b8" font-size="9" text-anchor="middle">Kepemilikan 20% - 50%</text>
  <line x1="520" y1="108" x2="645" y2="108" stroke="#334155"/>
  <text x="582" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">• Pengaruh Signifikan</text>
  <text x="582" y="146" fill="#38bdf8" font-size="9" text-anchor="middle">• Akui % Laba Asosiasi</text>
  <text x="582" y="164" fill="#f87171" font-size="9" text-anchor="middle">• Dividen Mengurangi Kos</text>
  <text x="582" y="182" fill="#64748b" font-size="8.5" text-anchor="middle">(PSAK 15 Entitas Asosiasi)</text>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Akuntansi Investasi: Efek Utang, Efek Ekuitas, dan Metode Ekuitas (Equity Method)',
  ref: 'Kieso IFRS 5e Ch. 17 | PSAK 71, PSAK 15',
  intro: 'TM 14 membedah tuntas klasifikasi aset keuangan dan investasi sesuai PSAK 71 dan PSAK 15: evaluasi Model Bisnis & Karakteristik Arus Kas Kontraktual (SPPI Test), akuntansi Biaya Diamortisasi (Amortized Cost), Nilai Wajar melalui OCI (FVOCI dengan dan tanpa recycling), Nilai Wajar melalui Laba Rugi (FVPL), serta Metode Ekuitas (Equity Method) untuk entitas asosiasi (20%-50% kepemilikan).',
  objectives: [
    'Menganalisis 2 uji klasifikasi instrumen keuangan PSAK 71: Business Model Test dan SPPI Test (Solely Payments of Principal and Interest).',
    'Menghitung dan menjurnal investasi Efek Utang pada Biaya Diamortisasi, FVOCI, dan FVPL.',
    'Membedakan perlakuan keuntungan/kerugian nilai wajar yang belum terealisasi (Unrealized Holding Gain/Loss) pada pos OCI vs Laba Rugi.',
    'Menerapkan Metode Ekuitas (Equity Method - PSAK 15): pengakuan bagian laba/rugi asosiasi, perlakuan dividen kas, dan amortisasi kelebihan nilai wajar atas aset neto.',
    'Menjurnal penurunan nilai investasi (ECL Model - Expected Credit Loss) sesuai PSAK 71.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Klasifikasi Aset Keuangan Investasi Sesuai PSAK 71 & PSAK 15',
      svg: SVG_INVESTMENTS,
      caption: 'Gambar 14.1: Pemisahan 4 kategori perlakuan akuntansi investasi efek utang dan ekuitas.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 14'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Uji Model Bisnis & SPPI', 'Apakah investasi utang ditujukan semata-mata untuk mengumpulkan arus kas pokok & bunga?', 'Mengklasifikasikan ke Amortized Cost vs FVOCI vs FVPL.'],
        ['2', 'Pencatatan Penyesuaian Nilai Wajar', 'Kemana selisih penyesuaian nilai wajar akhir tahun dicatat (Laba Rugi vs OCI)?', 'Menjurnal Akun Penyesuaian Nilai Wajar dan Akumulasi OCI.'],
        ['3', 'Metode Ekuitas (20%-50%)', 'Bagaimana mencatat pengumuman laba bersih dan dividen oleh entitas asosiasi?', 'Mendebit Investasi saat ada laba, dan mengkredit Investasi saat dividen diterima.'],
        ['4', 'Amortisasi Selisih Nilai Wajar', 'Berapa kelebihan harga beli atas aset tetap asosiasi yang harus diamortisasi?', 'Mengurangi pendapatan investasi tahunan atas beban amortisasi diferensial.'],
        ['5', 'Pelepasan Investasi', 'Bagaimana menjurnal penjualan saham/obligasi dan mendaur ulang OCI (jika efek utang)?', 'Menghitung laba rugi terealisasi pelepasan investasi.']
      ],
      caption: 'Tabel 14.0: Roadmap belajar investasi efek utang dan ekuitas.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 14'
    },
    {
      kind: 'formula',
      text: '\\text{Pendapatan Bunga (Amortized Cost)} = \\text{Carrying Amount Awal Periode} \\times i_{\\text{efektif}}',
      note: 'Investasi obligasi pada Amortized Cost tidak disesuaikan terhadap fluktuasi harga pasar wajar akhir tahun.'
    },
    {
      kind: 'formula',
      text: '\\text{Bagian Laba Bersih (Equity Method)} = (\\% \\text{ Kepemilikan} \\times \\text{Laba Bersih Asosiasi}) - \\text{Amortisasi Kelebihan Nilai Wajar Aset}',
      note: 'Dividen kas dari asosiasi dicatat: Debit Kas | Kredit Investasi pada Entitas Asosiasi (mengurangi nilai investasi, BUKAN pendapatan dividen!).'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Penerapan Metode Ekuitas PT Indika Energy Tbk',
      blocks: [
        {
          kind: 'p',
          text: 'Pada 1 Januari 2026, PT Indika Energy membeli 30% saham biasa PT Petro Energi seharga Rp 600.000.000 tunai (memberikan pengaruh signifikan). Pada tanggal akuisisi, nilai buku aset neto PT Petro adalah Rp 1.600.000.000. Selisih harga beli disebabkan oleh peralatan pabrik yang nilai wajarnya lebih tinggi Rp 400 jt dari nilai buku (sisa umur 10 tahun). Sepanjang 2026:\n• PT Petro melaporkan Laba Bersih Rp 300.000.000.\n• PT Petro mendeklarasikan dan membayar Dividen Kas Rp 100.000.000.'
        },
        {
          kind: 'formula',
          text: 'Porsi Laba Bersih (30% × 300 jt) = Rp 90.000.000\nAmortisasi Kelebihan Nilai Wajar Peralatan (30% × 400 jt / 10 thn) = (Rp 12.000.000)\nPendapatan Investasi Neto di Laba Rugi = 90 jt - 12 jt = Rp 78.000.000\n\nPorsi Dividen Kas Diterima (30% × 100 jt) = Rp 30.000.000 (Mengurangi saldo investasi)\nSaldo Akhir Akun Investasi per 31 Des 2026 = 600 jt + 78 jt - 30 jt = Rp 648.000.000'
        },
        {
          kind: 'callout',
          variant: 'key',
          title: 'Jurnal Akuntansi PT Indika Energy',
          text: '1. Pengakuan Bagian Laba Bersih:\nDebit: Investasi pada Entitas Asosiasi Rp 78.000.000\nKredit: Pendapatan dari Entitas Asosiasi (Laba Rugi) Rp 78.000.000\n\n2. Penerimaan Dividen Kas:\nDebit: Kas Rp 30.000.000\nKredit: Investasi pada Entitas Asosiasi Rp 30.000.000'
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Perbandingan Perlakuan Fair Value FVPL vs FVOCI',
      prompt: 'PT Makmur membeli saham PT ABC seharga Rp 100 jt pada 1 Maret 2026. Per 31 Desember 2026, nilai wajar saham melonjak menjadi Rp 135 jt. Bandingkan jurnal penyesuaian akhir tahun jika investasi diklasifikasikan sebagai FVPL vs FVOCI!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Klasifikasi FVPL (Trading)**:\nDebit: Penyesuaian Nilai Wajar Saham Rp 35.000.000\nKredit: Keuntungan Kenaikan Nilai Wajar Belum Terealisasi (**LABA RUGI**) Rp 35.000.000\n*(Laba bersih tahun berjalan meningkat Rp 35 jt)*.',
            '**Klasifikasi FVOCI (Strategis / Non-Trading)**:\nDebit: Penyesuaian Nilai Wajar Saham Rp 35.000.000\nKredit: Keuntungan Kenaikan Nilai Wajar Belum Terealisasi (**PENGHASILAN KOMPREHENSIF LAIN / OCI**) Rp 35.000.000\n*(Laba bersih TIDAK terpengaruh, ekuitas OCI meningkat Rp 35 jt)*.'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan UAS Investasi Ekuitas',
          text: 'Untuk investasi saham (ekuitas) yang dipilih opsi FVOCI tanpa daur ulang, keuntungan/kerugian nilai wajar di OCI **DILARANG DIRECYCLE KE LABA RUGI** saat saham dijual di masa depan! Selisih keuntungan langsung dipindahkan ke Laba Ditahan.'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 14'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Klasifikasi Aset Keuangan PSAK 71', 'Kriteria Business Model Test dan SPPI Test untuk efek utang & ekuitas.', 'Mengelompokkan portofolio investasi ke 3 kategori utama.'],
        ['2', 'Akuntansi Amortized Cost & FVPL', 'Pencatatan pendapatan bunga efektif vs pengakuan keuntungan nilai wajar di laba rugi.', 'Menjurnal penyesuaian akhir tahun.'],
        ['3', 'Akuntansi FVOCI & Recycling', 'Mekanisme pencatatan OCI dan daur ulang saat instrumen utang dijual.', 'Menyusun rekonsiliasi cadangan OCI di ekuitas.'],
        ['4', 'Metode Ekuitas PSAK 15', 'Pengakuan bagian laba, perlakuan dividen pengurang kos, dan amortisasi diferensial.', 'Menyusun mutasi buku besar akun Investasi pada Asosiasi.'],
        ['5', 'Penurunan Nilai Investasi (ECL)', 'Model Kerugian Kredit Ekspektasian 12-bulan vs Lifetime ECL.', 'Menjurnal cadangan penurunan nilai piutang obligasi.']
      ],
      caption: 'Tabel 14.1: Matriks kompetensi komprehensif materi TM 14 AKM II.'
    },
    { kind: 'h2', text: '1. Penerapan Metode Ekuitas (Equity Method - PSAK 15)' },
    {
      kind: 'p',
      text: '==Metode ekuitas adalah metode akuntansi di mana investasi pada awalnya dicatat sebesar biaya perolehan dan selanjutnya disesuaikan untuk mengakui bagian investor atas laba atau rugi dan OCI entitas asosiasi setelah tanggal perolehan.=='
    },
    CASE_EQUITY_METHOD_INVESTMENT,
    { kind: 'h2', text: '2. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Amortized Cost**: Efek utang dengan intensi dikuasai hingga jatuh tempo, dinilai pada biaya perolehan diamortisasi.',
        '**FVPL**: Keuntungan/kerugian nilai wajar masuk Laba Rugi periode berjalan.',
        '**FVOCI**: Keuntungan/kerugian nilai wajar masuk OCI (Ekuitas).',
        `**Metode Ekuitas (20%-50%)**: Dividen yang diterima MENGURANGI nilai investasi di neraca, BUKAN diakui sebagai pendapatan dividen.`
      ]
    }
  ]
};