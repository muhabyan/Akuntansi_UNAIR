import type { Reading } from '../../../types';
import { CASE_CORPORATE_TAX_RETURN_1771 } from '../pjk2PracticeCases';

const SVG_SPT_1771_STRUCTURE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="flow1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="flow2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="flow3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="flow4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk11)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">STRUKTUR FORMULIR DAN ALUR REKONSILIASI FISKAL SPT TAHUNAN PPH BADAN (FORMULIR 1771)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">FORMULIR 1771</text>

  <!-- 4 Step Sequential Cascade -->
  <g transform="translate(35, 75)">
    <!-- Step 1: Lampiran I -->
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#flow1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="97" y="20" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">1. LAMPIRAN 1771-I</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="97" y="53" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle">Penghitungan Neto Fiskal</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Laba Bersih Komersial</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• (+) Koreksi Fiskal Positif (Beban non-deductible Pasal 9)</text>
    <text class="svg-text" x="10" y="112" fill="#cbd5e1" font-size="7.5">• (-) Koreksi Fiskal Negatif (Penghasilan PPh Final &amp; Bukan Objek)</text>
    <text class="svg-text" x="10" y="132" fill="#cbd5e1" font-size="7.5">• Hasil: Penghasilan Neto Fiskal</text>
    <rect class="svg-badge-blue" x="10" y="185" width="175" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Rekonsiliasi Komersial - Fiskal</text>
  </g>

  <polygon points="237,185 245,190 237,195" fill="#38bdf8"/>

  <g transform="translate(250, 75)">
    <!-- Step 2: Lampiran II, IV, V -->
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#flow2)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="97" y="20" fill="#fbbf24" font-size="9.5" font-weight="800" text-anchor="middle">2. LAMPIRAN PENDUKUNG</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="53" fill="#fbbf24" font-size="8" font-weight="800" text-anchor="middle">Lampiran 1771-II s.d. VI</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• 1771-II: Rincian HPP &amp; Biaya Usaha</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• 1771-IV: Penghasilan PPh Final &amp; Bukan Objek Pajak</text>
    <text class="svg-text" x="10" y="112" fill="#cbd5e1" font-size="7.5">• 1771-V: Daftar Pemegang Saham &amp; Susunan Pengurus/Direksi</text>
    <text class="svg-text" x="10" y="132" fill="#cbd5e1" font-size="7.5">• 1771-VI: Hubungan Istimewa</text>
    <rect class="svg-badge-amber" x="10" y="185" width="175" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Rincian Detail Transaksi</text>
  </g>

  <polygon points="452,185 460,190 452,195" fill="#fbbf24"/>

  <g transform="translate(465, 75)">
    <!-- Step 3: Lampiran III Kredit Pajak -->
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#flow3)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="97" y="20" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">3. LAMPIRAN 1771-III</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="97" y="53" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">Kredit Pajak Dalam Negeri</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Bukti Potong PPh 22 (Impor/BUMN)</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Bukti Potong PPh 23 (Jasa/Sewa)</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Bukti Potong PPh 24 (Luar Negeri)</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Bukti setor PPh Pasal 25 bulanan</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">• Surat Setoran Pajak (SSP)</text>
    <rect class="svg-badge-green" x="10" y="185" width="175" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Akumulasi Kredit Pengurang</text>
  </g>

  <polygon points="667,185 675,190 667,195" fill="#34d399"/>

  <g transform="translate(680, 75)">
    <!-- Step 4: Induk SPT 1771 -->
    <rect class="svg-card" x="0" y="0" width="185" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="185" height="30" rx="10" fill="url(#flow4)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="92" y="20" fill="#a78bfa" font-size="9.5" font-weight="800" text-anchor="middle">4. INDUK SPT 1771</text>
    <rect class="svg-subcard" x="10" y="38" width="165" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="92" y="53" fill="#a78bfa" font-size="8" font-weight="800" text-anchor="middle">Penentuan PPh Kurang/Lebih</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• PKP = Neto - Kompensasi Rugi</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• PPh Terutang = 22% (atau 31E)</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• (-) Total Kredit Pajak (Lamp III)</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Hasil: PPh Kurang Bayar (Ps 29)</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">• Menghitung Angsuran PPh 25 baru</text>
    <rect class="svg-badge-purple" x="10" y="185" width="165" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="92" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">SPT Induk Siap Lapor DJP</text>
  </g>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Rekonsiliasi Fiskal & Penyusunan SPT Tahunan PPh Wajib Pajak Badan (Formulir 1771)',
  ref: 'PER-19/PJ/2014 jo PER-30/PJ/2017 Format SPT 1771 | Lampiran I s/d VI | Kertas Kerja Beda Tetap & Beda Waktu',
  intro: 'TM 11 membahas teknik penyusunan Surat Pemberitahuan (SPT) Tahunan PPh Wajib Pajak Badan (Formulir 1771): konseptualisasi Beda Tetap (Permanent Differences) dan Beda Waktu (Timing Differences), penyusunan Kertas Kerja Rekonsiliasi Fiskal pada Lampiran I (1771-I), penataan elemen HPP pada Lampiran II, perincian kredit pajak pada Lampiran III, pemisahan pos PPh Final pada Lampiran IV, hingga penentuan status PPh Kurang Bayar (Pasal 29) di Induk SPT.',
  objectives: [
    'Menyusun kertas kerja rekonsiliasi fiskal komprehensif dari Laba Komersial ke Penghasilan Kena Pajak.',
    'Membedakan pengaruh Beda Tetap (tidak menimbulkan pajak tangguhan) vs Beda Waktu (PSAK 46).',
    'Mengisi Formulir Lampiran I, II, III, IV, V, VI, dan Induk SPT Tahunan 1771.',
    'Menghitung PPh Pasal 29 (Kurang Bayar) yang wajib disetor sebelum pelaporan SPT pada akhir April.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 11.1: Struktur Arsitektur Formulir SPT Tahunan PPh Badan (Formulir 1771).',
      svg: SVG_SPT_1771_STRUCTURE
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 6 ayat (2) UU PPh (Kompensasi Kerugian Fiskal)',
      text: '"Apabila penghasilan bruto setelah pengurangan biaya-biaya sebagaimana dimaksud pada ayat (1) didapat kerugian, kerugian tersebut dikompensasikan dengan penghasilan mulai tahun pajak berikutnya berturut-turut sampai dengan 5 (lima) tahun.\nContoh: Rugi fiskal tahun 2021 sebesar Rp 1 Miliar dapat dikompensasikan mengurangi laba fiskal tahun 2022, 2023, 2024, 2025, dan paling lambat tahun 2026. Sisa rugi yang belum habis dikompensasi setelah tahun 2026 dinyatakan hangus dan tidak dapat dikurangkan lagi."'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: '📜 Struktur Formulir SPT Tahunan PPh Badan (Formulir 1771)',
      text: '"Urutan Pengisian Lampiran SPT Tahunan PPh Badan 1771:\n• Lampiran 1771-I: Penghitungan Penghasilan Neto Fiskal (Rekonsiliasi Fiskal Positif & Negatif atas Laba Komersial);\n• Lampiran 1771-II: Rincian HPP, Biaya Usaha Lainnya, dan Biaya Luar Usaha secara komersial;\n• Lampiran 1771-III: Kredit Pajak Dalam Negeri (Bukti Potong/Pungut PPh 22 dan PPh 23);\n• Lampiran 1771-IV: Penghasilan yang Dikenai PPh Final (Pasal 4 ayat 2) dan Bukan Objek Pajak (Pasal 4 ayat 3);\n• Lampiran 1771-V: Daftar Pemegang Saham/Pemilik Modal dan Susunan Pengurus/Komisaris;\n• Lampiran 1771-VI: Daftar Penyertaan Modal pada Perusahaan Afiliasi dan Daftar Utang Piutang Pemegang Saham;\n• SPT 1771 Induk: Perhitungan PPh Terutang, Kredit Pajak (Pasal 22, 23, 24, 25), dan PPh Kurang/Lebih Bayar (Pasal 29/28A)."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 11'
    },
    {
      kind: 'table',
      headers: ['Bagian Formulir 1771', 'Nama Lampiran', 'Fungsi Pelaporan Utama', 'Hubungan Silang Antar-Lampiran'],
      rows: [
        ['Induk SPT 1771', 'Surat Pemberitahuan Tahunan PPh Badan', 'Menghitung total PPh terutang, total kredit pajak, dan PPh 29/28A.', 'Angka PKP diambil dari baris akhir Lampiran I (1771-I).'],
        ['Lampiran 1771-I', 'Penghitungan Penghasilan Neto Fiskal', 'Kertas kerja rekonsiliasi laba komersial, koreksi positif, dan negatif.', 'Sumber utama nilai PKP yang ditransfer ke Induk SPT.'],
        ['Lampiran 1771-II', 'Perincian Harga Pokok Penjualan (HPP)', 'Rincian biaya bahan baku, upah langsung, dan overhead pabrik.', 'Angka HPP komersial ditransfer ke Lampiran I baris 1b.'],
        ['Lampiran 1771-III', 'Kredit Pajak Dalam Negeri', 'Daftar rincian pemotongan PPh 22 dan PPh 23 oleh pihak ketiga.', 'Total kredit pajak ditransfer ke Induk SPT angka 10.'],
        ['Lampiran 1771-IV', 'Penghasilan Final & Bukan Objek Pajak', 'Rincian bunga deposito, sewa tanah, dividen, dan hibah.', 'Angka totalnya menjadi pengurang koreksi negatif di Lampiran I.'],
        ['Lampiran 1771-V & VI', 'Pemegang Saham & Hubungan Istimewa', 'Daftar susunan pengurus, pemegang saham, dividen, dan utang afiliasi.', 'Wajib dilampiri dokumen penentuan harga transfer (TP Doc).']
      ],
      caption: 'Tabel 11.0: Matriks struktur lampiran SPT Tahunan PPh Badan Formulir 1771.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Alur Rekonsiliasi Fiskal Lampiran I'
    },
    {
      kind: 'formula',
      text: `\\text{Penghasilan Neto Komersial Sebelum Pajak}
+ \\text{Koreksi Positif (Pasal 9 UU PPh: Beda Tetap Jamuan, Sanksi, Natura Pribadi)}
- \\text{Koreksi Negatif (Pasal 4(2) PPh Final & Pasal 4(3) Bukan Objek)}
\\pm \\text{Penyesuaian Beda Waktu (Selisih Penyusutan Fiskal vs Komersial)}
= \\mathbf{\\text{Penghasilan Neto Fiskal / Penghasilan Kena Pajak (PKP)}}
\\text{PPh Terutang} = 22\\% \\times PKP \\quad | \\quad \\text{PPh 29} = \\text{PPh Terutang} - \\text{Total Kredit Pajak (PPh 22, 23, 24, 25)}`,
      note: 'Batas akhir penyampaian SPT Tahunan PPh Badan adalah 4 bulan setelah akhir tahun pajak (30 April). Keterlambatan dikenai sanksi denda administrasi Rp 1.000.000 (Pasal 7 KUP).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Pengisian Lampiran I atas Kerugian Piutang Tak Tertagih',
      prompt: 'Perusahaan mencadangkan beban piutang ragu-ragu komersial sebesar Rp 100.000.000 pada tahun 2026. Dari jumlah tersebut, piutang yang benar-benar nyata-nyata tidak dapat ditagih dan telah diajukan daftar piutang tak tertagih ke kantor pajak (sesuai Pasal 6 ayat 1 huruf h UU PPh) adalah Rp 30.000.000. Berapa koreksi fiskal yang harus dicatat pada Lampiran 1771-I?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Aturan Fiskal Pembentukan Cadangan (Pasal 9 ayat 1 huruf c)**: Pembentukan dana cadangan secara umum **TIDAK BOLEH DIKURANGKAN** (kecuali cadangan bank, asuransi, dan lembaga pembiayaan tertentu).',
            '**Beban yang Diakui Fiskal**: HANYA piutang yang nyata-nyata tidak tertagih sebesar **Rp 30.000.000**.',
            '**Beban Komersial yang Dibatalkan**: Beban cadangan yang tidak memenuhi syarat = Rp 100 Jt - Rp 30 Jt = **Rp 70.000.000**.',
            '**Pengisian di Formulir 1771-I**: Dilakukan **Koreksi Fiskal Positif sebesar Rp 70.000.000** pada pos Penyesuaian Fiskal Positif huruf e (Pembentukan atau Pemupukan Dana Cadangan).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 11'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Beda Tetap vs Beda Waktu', 'Pemisahan konsekuensi pajak permanen vs pengakuan aset/liabilitas pajak tangguhan.', 'Mampu menggolongkan pos koreksi fiskal secara akuntansi.'],
        ['2', 'Pengisian Lampiran I (1771-I)', 'Pemetaan koreksi fiskal positif 11 butir dan koreksi negatif.', 'Mampu menyusun kertas kerja rekonsiliasi fiskal formulir 1771-I.'],
        ['3', 'Penentuan PPh Pasal 29 / 28A', 'Perhitungan PPh kurang bayar/lebih bayar dan rekonsiliasi kredit pajak.', 'Mampu mengkalkulasi saldo PPh 29 yang wajib disetor ke kas negara.']
      ],
      caption: 'Tabel 11.2: Peta penguasaan submateri TM 11 Perpajakan II.'
    },
    CASE_CORPORATE_TAX_RETURN_1771,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Laporan Keuangan Audit Wajib Dilampirkan**: Wajib Pajak yang laporan keuangannya diaudit oleh Akuntan Publik wajib melampirkan Laporan Auditor Independen pada SPT 1771.',
        '**Koreksi Fiskal Negatif Bukan Beban Baru**: Koreksi negatif terutama berasal dari penghasilan yang telah dikenai PPh Final (seperti bunga deposito) agar laba tersebut tidak dipajaki dua kali di SPT Badan.',
        '**Sanksi Keterlambatan SPT Badan**: Keterlambatan lapor SPT 1771 melewati 30 April memicu denda administrasi Rp 1.000.000 dan sanksi bunga per bulan atas keterlambatan penyetoran PPh 29.'
      ]
    }
  ]
};
