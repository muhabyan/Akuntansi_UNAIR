import type { Reading } from '../../../types';
import {
  CASE_CURRENT_LIABILITIES,
} from '../akm2PracticeCases';

const SVG_LIABILITIES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SPEKTRUM KEWAJIBAN &amp; LIABILITAS JANGKA PENDEK (PSAK 1 &amp; PSAK 57)</text>

  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. LIABILITAS PASTI</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Jumlah &amp; Tanggal Pasti</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Utang Usaha (Trade AP)</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Wesel Bayar Jangka Pendek</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Bagian Lancar Utang JP</text>
  <text x="125" y="184" fill="#34d399" font-size="9.5" font-weight="600" text-anchor="middle">Dicatat di Neraca (Lancar)</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="78" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">2. PROVISI (PSAK 57)</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Waktu / Jumlah Tidak Pasti</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Garansi Produk (Warranty)</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Premi &amp; Kupon Hadiah</text>
  <text x="340" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Provisi Gugatan Hukum</text>
  <text x="340" y="184" fill="#34d399" font-size="9.5" font-weight="600" text-anchor="middle">Dicatat di Neraca (Estimasi)</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="555" y="78" fill="#f43f5e" font-size="11" font-weight="700" text-anchor="middle">3. KONTINJENSI</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Kewajiban Potensial</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Gugatan Belum Pasti (Possible)</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Jaminan Utang Pihak Lain</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Perkara Banding Pajak</text>
  <text x="555" y="184" fill="#f59e0b" font-size="9.5" font-weight="600" text-anchor="middle">HANYA Diungkap di CALK</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Liabilitas Jangka Pendek (Current Liabilities), Wesel Bayar, dan Pendapatan Diterima di Muka',
  ref: 'Kieso IFRS 5e Ch. 13 | PSAK 1, PSAK 71, PSAK 50',
  intro: 'TM 6 memfokuskan pada kewajiban kini entitas yang jatuh tempo dalam satu siklus operasi normal atau 12 bulan: utang usaha, wesel bayar berbunga vs tanpa bunga (diskonto suku bunga efektif), bagian lancar liabilitas jangka panjang, dan liabilitas imbalan kerja jangka pendek.',
  objectives: [
    'Mengidentifikasi kriteria klasifikasi Liabilitas Jangka Pendek sesuai PSAK 1.',
    'Menghitung dan menjurnal Wesel Bayar Berbunga (Interest-Bearing Notes) dan Wesel Bayar Tanpa Bunga (Zero-Interest-Bearing Notes).',
    'Menghitung dan menyajikan Bagian Lancar Utang Jangka Panjang (Current Maturities of Long-Term Debt).',
    'Menerapkan syarat ketat Pembiayaan Kembali (Refinancing) sebelum tanggal neraca agar utang tetap diklasifikasikan jangka panjang.',
    'Menjurnal liabilitas jangka pendek terkait gaji, bonus karyawan, PPN keluaran, dan PPh withholding.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Spektrum Liabilitas Jangka Pendek & Kontinjensi',
      svg: SVG_LIABILITIES,
      caption: 'Gambar 6.1: Pembagian tingkat kepastian kewajiban di laporan posisi keuangan.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 6'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Kriteria Jangka Pendek', 'Apakah liabilitas diselesaikan dalam 12 bulan atau siklus operasi entitas?', 'Mengelompokkan akun utang ke bagian lancar vs tidak lancar.'],
        ['2', 'Wesel Bayar Diskonto', 'Bagaimana menghitung nilai tunai PV wesel tanpa bunga dan beban bunga efektif?', 'Mencatat Diskonto Wesel Bayar sebagai akun kontra-liabilitas.'],
        ['3', 'Current Maturities of LTD', 'Berapa porsi pokok obligasi/kredit bank yang wajib dibayar tahun depan?', 'Mereklasifikasi bagian lancar utang jangka panjang ke liabilitas jangka pendek.'],
        ['4', 'Refinancing Agreement', 'Apakah perjanjian pembiayaan kembali telah ditandatangani SEBELUM akhir periode pelaporan?', 'Menentukan apakah utang boleh tetap disajikan jangka panjang.'],
        ['5', 'Liabilitas Karyawan & Pajak', 'Bagaimana menghitung utang PPh 21, BPJS Ketenagakerjaan, dan bonus?', 'Menjurnal beban gaji kotor dan potongan utang pungutan pihak ketiga.']
      ],
      caption: 'Tabel 6.0: Roadmap belajar liabilitas jangka pendek.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 6'
    },
    {
      kind: 'formula',
      text: 'PV Wesel Tanpa Bunga = \\frac{\\text{Nilai Nominal (Face Value)}}{(1 + i)^n}',
      note: 'Diskonto Wesel Bayar = Nilai Nominal - PV Tunai. Diamortisasi menjadi Beban Bunga sepanjang masa wesel.'
    },
    {
      kind: 'formula',
      text: 'Beban Bunga Efektif = \\text{Nilai Tercatat Bersih Wesel (Carrying Value)} \\times \\text{Suku Bunga Pasar Efektif (i)}',
      note: 'Nilai tercatat bersih wesel = Nilai Nominal dikurangi Saldo Diskonto Wesel Bayar.'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Penerbitan Wesel Bayar Tanpa Bunga PT Gudang Garam Tbk',
      blocks: [
        {
          kind: 'p',
          text: 'Pada 1 Oktober 2026, PT Gudang Garam menerbitkan wesel bayar tanpa bunga 6 bulan senilai nominal Rp 200.000.000 kepada Bank Mandiri untuk memperoleh kas tunai. Suku bunga pasar diskonto bank adalah 12% per tahun.'
        },
        {
          kind: `formula`,
          text: `Kas Diterima (PV 6 Bulan) = 200.000.000 - (200.000.000 × 12% × 6/12) = Rp 188.000.000
Diskonto Wesel Bayar = 200.000.000 - 188.000.000 = Rp 12.000.000
Amortisasi Bunga per 31 Des 2026 (3 Bulan) = 12.000.000 × 3/6 = Rp 6.000.000`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: `Jurnal Transaksi PT Gudang Garam`,
          text: `1 Okt 2026:
Debit: Kas Rp 188.000.000
Debit: Diskonto Wesel Bayar Rp 12.000.000
Kredit: Wesel Bayar Rp 200.000.000

31 Des 2026 (Penyesuaian):
Debit: Beban Bunga Rp 6.000.000
Kredit: Diskonto Wesel Bayar Rp 6.000.000`
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Syarat Refinancing Utang Jangka Pendek',
      prompt: 'PT Berkah memiliki utang wesel Rp 500 jt yang jatuh tempo 15 Februari 2027. Tanggal neraca 31 Desember 2026. Pada 10 Januari 2027 (sebelum laporan keuangan diterbitkan), PT Berkah menandatangani perjanjian pembiayaan kembali dengan bank untuk memperpanjang utang 3 tahun. Bagaimana klasifikasi utang di neraca 31 Des 2026?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Klasifikasi di Neraca 31 Des 2026**: Wajib disajikan sebagai **LIABILITAS JANGKA PENDEK (LANCAR)**.',
            '**Alasan PSAK 1**: Hak untuk membiayai kembali (refinancing) **BELUM EKSIS PADA TANGGAL NERACA (31 Des 2026)** karena kontrak baru ditandatangani tanggal 10 Januari 2027.',
            '**Pengungkapan**: Peristiwa ini diungkapkan di Catatan atas Laporan Keuangan (CALK) sebagai Peristiwa Non-Penyesuai Setelah Tanggal Pelaporan.'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan UTS Refinancing',
          text: 'Berdasarkan IFRS / PSAK 1, agar utang jangka pendek dapat diklasifikasikan sebagai jangka panjang, hak tanpa syarat untuk memperpanjang utang minimal 12 bulan **WAJIB SUDAH ADA PADA ATAU SEBELUM TANGGAL NERACA (31 Desember)**.'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 6'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Definisi & Klasifikasi Liabilitas Lancar', 'Kriteria siklus operasi 12 bulan dan tujuan penyelesaian liabilitas.', 'Menyajikan pos liabilitas lancar di laporan posisi keuangan.'],
        ['2', 'Wesel Bayar Berbunga vs Diskonto', 'Perhitungan PV dan amortisasi diskonto wesel jangka pendek.', 'Menjurnal penerbitan, penyesuaian bunga akhir tahun, dan pelunasan wesel.'],
        ['3', 'Bagian Lancar Utang Jangka Panjang', 'Pemisahan cicilan pokok tahun depan dari pokok jangka panjang.', 'Mereklasifikasi utang bank/obligasi ke bagian lancar.'],
        ['4', 'Refinancing Utang Jatuh Tempo', 'Aturan batas waktu kontrak perpanjangan utang sesuai PSAK 1.', 'Mengevaluasi apakah utang disajikan lancar vs tidak lancar.'],
        ['5', 'Kewajiban Imbalan Kerja & Pajak', 'Utang gaji, bonus manajer, pemotongan PPh 21, dan PPN kurang bayar.', 'Menghitung dan menjurnal liabilitas jangka pendek terkait operasional.']
      ],
      caption: 'Tabel 6.1: Matriks kompetensi komprehensif materi TM 6 AKM II.'
    },
    { kind: 'h2', text: '1. Akuntansi Liabilitas Jangka Pendek & Wesel Bayar' },
    {
      kind: 'p',
      text: '==Liabilitas adalah kewajiban kini entitas yang timbul dari peristiwa masa lalu, yang penyelesaiannya diperkirakan mengakibatkan arus keluar sumber daya yang mengandung manfaat ekonomik.=='
    },
    CASE_CURRENT_LIABILITIES,
    { kind: 'h2', text: '2. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Diskonto Wesel Bayar**: Akun kontra-liabilitas pengurang nominal wesel, diamortisasi ke beban bunga.',
        '**Syarat Refinancing**: Hak perpanjangan utang wajib sudah efektif pada atau sebelum tanggal neraca.',
        '**Pendapatan Diterima di Muka**: Dicatat sebagai liabilitas hingga kewajiban pelaksanaan (performance obligation) diselesaikan.',
        `**Bonus Karyawan**: Beban operasi pengurang laba yang diakui pada periode kinerja bersangkutan.`
      ]
    }
  ]
};
