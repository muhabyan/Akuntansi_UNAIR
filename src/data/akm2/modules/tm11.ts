import type { Reading } from '../../../types';
import {
  CASE_TREASURY_DIVIDENDS,
} from '../akm2PracticeCases';

const SVG_EQUITY_STRUCTURE = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRUKTUR EKUITAS PEMEGANG SAHAM (PSAK 1 &amp; PSAK 50)</text>

  <rect x="30" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="102" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. MODAL DISETOR</text>
  <line x1="40" y1="90" x2="165" y2="90" stroke="#334155"/>
  <text x="102" y="110" fill="#cbd5e1" font-size="9" text-anchor="middle">• Saham Biasa (Par)</text>
  <text x="102" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">• Saham Preferen (Par)</text>
  <text x="102" y="146" fill="#38bdf8" font-size="9" text-anchor="middle">• Agio Saham Biasa</text>
  <text x="102" y="164" fill="#38bdf8" font-size="9" text-anchor="middle">• Agio Saham Preferen</text>
  <text x="102" y="182" fill="#38bdf8" font-size="9" text-anchor="middle">• Agio Saham Treasuri</text>

  <rect x="190" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="262" y="78" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">2. LABA DITAHAN</text>
  <line x1="200" y1="90" x2="325" y2="90" stroke="#334155"/>
  <text x="262" y="110" fill="#cbd5e1" font-size="9" text-anchor="middle">• Akumulasi Laba Bersih</text>
  <text x="262" y="128" fill="#f87171" font-size="9" text-anchor="middle">(-) Akumulasi Rugi</text>
  <text x="262" y="146" fill="#f87171" font-size="9" text-anchor="middle">(-) Pembagian Dividen</text>
  <text x="262" y="164" fill="#f59e0b" font-size="9" text-anchor="middle">• Laba Ditahan Dibatasi</text>
  <text x="262" y="182" fill="#34d399" font-size="9" text-anchor="middle">• Laba Ditahan Bebas</text>

  <rect x="350" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="422" y="78" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">3. AKUMULASI OCI</text>
  <line x1="360" y1="90" x2="485" y2="90" stroke="#334155"/>
  <text x="422" y="110" fill="#cbd5e1" font-size="9" text-anchor="middle">• Surplus Revaluasi Aset</text>
  <text x="422" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">• Unrealized Gain FVOCI</text>
  <text x="422" y="146" fill="#cbd5e1" font-size="9" text-anchor="middle">• Keuntungan Aktuaria</text>
  <text x="422" y="164" fill="#cbd5e1" font-size="9" text-anchor="middle">• Selisih Kurs Translasi</text>
  <text x="422" y="182" fill="#a855f7" font-size="9" text-anchor="middle">(Pos OCI Komprehensif)</text>

  <rect x="510" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="582" y="78" fill="#f43f5e" font-size="11" font-weight="700" text-anchor="middle">4. SAHAM TREASURI</text>
  <line x1="520" y1="90" x2="645" y2="90" stroke="#334155"/>
  <text x="582" y="110" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">KONTRA-EKUITAS</text>
  <text x="582" y="130" fill="#cbd5e1" font-size="9" text-anchor="middle">Saham dibeli kembali</text>
  <text x="582" y="148" fill="#f87171" font-size="9" text-anchor="middle">MENGURANGI</text>
  <text x="582" y="166" fill="#f87171" font-size="9" text-anchor="middle">Total Nilai Ekuitas</text>
  <text x="582" y="184" fill="#64748b" font-size="8.5" text-anchor="middle">(Cost Method / Nilai Kos)</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: "Ekuitas Pemegang Saham (Stockholders' Equity), Saham Treasuri, dan Kebijakan Dividen",
  ref: `Kieso IFRS 5e Ch. 15 | PSAK 50, PSAK 55, UU PT`,
  intro: `TM 11 membedah komponen Ekuitas Pemegang Saham: penerbitan saham biasa & preferen (lump-sum & non-kas), akuntansi Saham Treasuri metode biaya (Cost Method), perlakuan penjualan kembali saham treasuri di atas/bawah harga perolehan, berbagai bentuk dividen (Tunai, Properti, Likuidasi, Saham), serta pemecahan saham (Stock Split).`,
  objectives: [
    `Mengidentifikasi komponen utama Ekuitas (Modal Saham, Agio Saham/Share Premium, Laba Ditahan, OCI, dan Saham Treasuri).`,
    `Menjurnal perolehan dan penjualan kembali Saham Treasuri menggunakan Metode Biaya (Cost Method).`,
    `Memahami larangan pengakuan Keuntungan atau Kerugian Laba Rugi dari transaksi saham sendiri (Saham Treasuri).`,
    `Menghitung dan menjurnal Dividen Tunai, Dividen Properti (penyesuaian nilai wajar), dan Dividen Likuidasi.`,
    `Membedakan Dividen Saham Kecil (< 20% nilai wajar) vs Dividen Saham Besar (> 20% nilai nominal) vs Pemecahan Saham (Stock Split).`
  ],
  blocks: [
    {
      kind: `figure`,
      title: `Struktur Komponen Ekuitas Pemegang Saham`,
      svg: SVG_EQUITY_STRUCTURE,
      caption: `Gambar 11.1: Pemisahan modal disetor, laba ditahan, akumulasi OCI, dan saham treasuri.`
    },
    {
      kind: `h2`,
      text: `Alur Belajar Cepat TM 11`
    },
    {
      kind: `table`,
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Penerbitan Saham', 'Berapa nilai nominal vs kelebihan kas yang diterima (Agio Saham/Share Premium)?', 'Menjurnal penerbitan saham biasa dan saham preferen.'],
        ['2', 'Pembelian Saham Treasuri', 'Bagaimana mencatat penarikan kembali saham sendiri menggunakan Cost Method?', 'Mendebit akun Saham Treasuri sebagai akun kontra-ekuitas.'],
        ['3', 'Penjualan Saham Treasuri', 'Apakah saham treasuri dijual di atas atau di bawah harga beli perolehannya?', 'Mencatat Agio Saham Treasuri atau mengurangkan Laba Ditahan jika agio habis.'],
        ['4', 'Deklarasi Dividen', 'Kapan kewajiban liabilitas dividen timbul (Declaration Date vs Payment Date)?', 'Menjurnal utang dividen pada tanggal pengumuman resmi direksi.'],
        ['5', 'Dividen Saham vs Stock Split', 'Apakah penerbitan saham bonus mengubah total nilai ekuitas perusahaan?', `Reklasifikasi internal laba ditahan ke modal saham vs perubahan nominal per lembar.`]
      ],
      caption: `Tabel 11.0: Roadmap belajar ekuitas, saham treasuri, dan dividen.`
    },
    {
      kind: `h2`,
      text: `Formula Sheet Fondasi TM 11`
    },
    {
      kind: `formula`,
      text: `\\text{Total Ekuitas} = \\text{Modal Saham} + \\text{Agio Saham} + \\text{Laba Ditahan} + \\text{Akumulasi OCI} - \\text{Saham Treasuri}`,
      note: `Saham Treasuri adalah akun kontra-ekuitas yang disajikan mengurangi total ekuitas di neraca.`
    },
    {
      kind: `formula`,
      text: `\\text{Dividen Saham Kecil (< 20%)} = \\text{Jumlah Lembar Saham Baru} \\times \\text{Nilai Wajar Pasar Saham}`,
      note: `Laba ditahan didebit sebesar NILAI WAJAR pasar saham pada tanggal pengumuman.`
    },
    {
      kind: `formula`,
      text: `\\text{Dividen Saham Besar (> 20%)} = \\text{Jumlah Lembar Saham Baru} \\times \\text{Nilai Nominal (Par Value)}`,
      note: `Laba ditahan didebit hanya sebesar NILAI NOMINAL saham yang diterbitkan.`
    },
    {
      kind: `example`,
      title: `Contoh Mini Numerik: Transaksi Saham Treasuri PT Unilever Indonesia Tbk`,
      blocks: [
        {
          kind: `p`,
          text: `PT Unilever membeli kembali 10.000 lembar saham biasa (nominal Rp 1.000) seharga Rp 4.500/lembar secara tunai (Cost Method). Beberapa bulan kemudian:
1. Menjual 4.000 lembar saham treasuri seharga Rp 5.000/lembar.
2. Menjual 6.000 lembar sisa saham treasuri seharga Rp 4.000/lembar.`
        },
        {
          kind: `formula`,
          text: `Beli Treasuri = 10.000 × Rp 4.500 = Rp 45.000.000

Penjualan 1 (Untung):
• Kas Diterima (4.000 × Rp 5.000) = Rp 20.000.000
• Kos Treasuri (4.000 × Rp 4.500) = Rp 18.000.000
• Agio Saham Treasuri = Rp 2.000.000

Penjualan 2 (Rugi):
• Kas Diterima (6.000 × Rp 4.000) = Rp 24.000.000
• Kos Treasuri (6.000 × Rp 4.500) = Rp 27.000.000
• Defisit Penjualan = Rp 3.000.000 (Tutup ke Agio Treasuri Rp 2 jt, sisanya Rp 1 jt ke Laba Ditahan!)`
        },
        {
          kind: `callout`,
          variant: `key`,
          title: `Jurnal Akuntansi PT Unilever`,
          text: `1. Pembelian Treasuri:
Debit: Saham Treasuri Rp 45.000.000 | Kredit: Kas Rp 45.000.000

2. Penjualan 1:
Debit: Kas Rp 20.000.000 | Kredit: Saham Treasuri Rp 18.000.000 | Kredit: Agio Saham Treasuri Rp 2.000.000

3. Penjualan 2:
Debit: Kas Rp 24.000.000
Debit: Agio Saham Treasuri Rp 2.000.000
Debit: Laba Ditahan Rp 1.000.000
Kredit: Saham Treasuri Rp 27.000.000`
        }
      ]
    },
    {
      kind: `solution-reveal`,
      title: `Latihan Aktif: Dividen Properti (Penyesuaian Nilai Wajar)`,
      prompt: `PT Sentosa mengumumkan dividen properti berupa investasi saham PT X (Nilai buku Rp 100 jt, Nilai wajar pada tanggal pengumuman Rp 140 jt). Buat jurnal pada tanggal pengumuman dan tanggal pembagian dividen!`,
      blocks: [
        {
          kind: `ul`,
          items: [
            `**Tahap 1: Sesuaikan Nilai Investasi ke Nilai Wajar (Tanggal Pengumuman)**:
Debit: Investasi Saham PT X Rp 40.000.000
Kredit: Keuntungan Kenaikan Nilai Wajar Investasi (Laba Rugi) Rp 40.000.000`,
            `**Tahap 2: Catat Kewajiban Dividen Properti (Tanggal Pengumuman)**:
Debit: Laba Ditahan Rp 140.000.000
Kredit: Utang Dividen Properti Rp 140.000.000`,
            `**Tahap 3: Pembagian Dividen Properti (Tanggal Pembayaran)**:
Debit: Utang Dividen Properti Rp 140.000.000
Kredit: Investasi Saham PT X Rp 140.000.000`
          ]
        },
        {
          kind: `callout`,
          variant: `warning`,
          title: `Jebakan UAS Dividen Properti`,
          text: `Sebelum membagikan dividen properti, aset non-kas yang akan dibagikan **WAJIB DIREVALUASI KE NILAI WAJAR TERKININYA** pada tanggal pengumuman, dan keuntungan/kerugian revaluasi diakui di Laba Rugi periode berjalan!`
        }
      ]
    },
    {
      kind: `h2`,
      text: `Peta Submateri & Target Penguasaan TM 11`
    },
    {
      kind: `table`,
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Penerbitan Saham & Agio', 'Penerbitan saham biasa/preferen secara tunai, lump-sum, dan non-kas.', 'Menjurnal akun modal saham dan agio saham terkait.'],
        ['2', 'Akuntansi Saham Treasuri', 'Metode Biaya (Cost Method) dan eliminasi saldo agio treasuri.', 'Menjurnal pembelian dan penjualan kembali saham treasuri.'],
        ['3', 'Dividen Tunai & Properti', 'Pencatatan 3 tanggal dividen dan penyesuaian nilai wajar dividen properti.', 'Menjurnal pengumuman dan pembagian dividen non-kas.'],
        ['4', 'Dividen Saham vs Stock Split', 'Diferensiasi dividen saham kecil (FV) vs besar (Par) vs pemecahan saham.', 'Mencatat kapitalisasi laba ditahan ke modal saham.'],
        ['5', 'Penyajian Laporan Perubahan Ekuitas', 'Penyusunan format resmi Statement of Changes in Equity sesuai PSAK 1.', `Menyajikan rekonsiliasi saldo awal ke saldo akhir ekuitas.`]
      ],
      caption: `Tabel 11.1: Matriks kompetensi komprehensif materi TM 11 AKM II.`
    },
    { kind: 'h2', text: `1. Transaksi Saham Treasuri & Kebijakan Dividen` },
    {
      kind: `p`,
      text: `==Saham treasuri adalah saham entitas yang telah diterbitkan dan dibeli kembali oleh entitas tetapi tidak dibatalkan. Transaksi pembelian dan penjualan saham treasuri tidak pernah menghasilkan laba atau rugi di laporan laba rugi.==`
    },
    CASE_TREASURY_DIVIDENDS,
    { kind: 'h2', text: `2. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)` },
    {
      kind: `ul`,
      items: [
        `**Saham Treasuri Cost Method**: Didebit sebesar kas yang dibayarkan, disajikan mengurangi total ekuitas.`,
        `**Defisit Jual Treasuri**: Menghabiskan saldo Agio Saham Treasuri terlebih dahulu, sisanya mengurangi Laba Ditahan.`,
        `**Dividen Saham Kecil (<20%)**: Laba ditahan didebit sebesar Nilai Wajar.`,
        `**Dividen Saham Besar (>20%)**: Laba ditahan didebit sebesar Nilai Nominal.`,
        `**Stock Split**: TIDAK ADA JURNAL, hanya memo perubahan jumlah lembar dan nilai nominal per lembar.`
      ]
    }
  ]
};
