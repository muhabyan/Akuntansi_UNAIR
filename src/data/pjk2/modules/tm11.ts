import type { Reading } from '../../../types';
import { CASE_CORPORATE_TAX_RETURN_1771 } from '../pjk2PracticeCases';

const SVG_SPT_1771_STRUCTURE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">STRUKTUR FORMULIR SPT TAHUNAN PPH BADAN (FORM 1771)</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">INDUK SPT 1771</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Ringkasan Pajak):</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penghasilan Kena Pajak</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PPh Terutang (22%)</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PPh 29 Kurang Bayar</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Hasil Rekapitulasi</text>

  <rect x="185" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="257" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">LAMPIRAN I</text>
  <text x="257" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Rekonsiliasi Fiskal):</text>
  <text x="257" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Laba Komersial Neto</text>
  <text x="257" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Koreksi Positif 11 pos</text>
  <text x="257" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Koreksi Negatif PPh Final</text>
  <text x="257" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Kertas Kerja Fiskal</text>

  <rect x="345" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="417" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">LAMPIRAN II &amp; III</text>
  <text x="417" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(HPP &amp; Kredit Pajak):</text>
  <text x="417" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Rincian elemen HPP</text>
  <text x="417" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kredit PPh 22, 23, 24</text>
  <text x="417" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bukti Potong Unifikasi</text>
  <text x="417" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Pengurang Pajak</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">LAMPIRAN IV - VI</text>
  <text x="580" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Final, Afiliasi, Saham):</text>
  <text x="580" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penghasilan PPh Final</text>
  <text x="580" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Daftar pemegang saham</text>
  <text x="580" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Daftar hubungan istimewa</text>
  <text x="580" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Informasi Kepemilikan</text>
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
