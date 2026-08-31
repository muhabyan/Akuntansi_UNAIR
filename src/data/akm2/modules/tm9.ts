import type { Reading } from '../../../types';
import { CASE_BONDS_AMORTIZATION } from '../akm2PracticeCases';

const SVG_BONDS_VALUATION = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">VALUASI &amp; PENERBITAN OBLIGASI (PSAK 71 / IFRS 9)</text>
  
  <rect x="30" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="122" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">Kupon = Suku Bunga Pasar</text>
  <text x="122" y="105" fill="#f8fafc" font-size="12" font-weight="700" text-anchor="middle">PAR (NILAI NOMINAL)</text>
  <text x="122" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">Harga Jual = 100%</text>
  <text x="122" y="150" fill="#94a3b8" font-size="10" text-anchor="middle">Kas = Nilai Nominal</text>
  <text x="122" y="170" fill="#94a3b8" font-size="10" text-anchor="middle">Tanpa amortisasi</text>

  <rect x="245" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="337" y="80" fill="#f43f5e" font-size="11.5" font-weight="700" text-anchor="middle">Kupon &lt; Suku Bunga Pasar</text>
  <text x="337" y="105" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="middle">DISKONTO (DISCOUNT)</text>
  <text x="337" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">Harga Jual &lt; 100%</text>
  <text x="337" y="150" fill="#94a3b8" font-size="10" text-anchor="middle">Beban Bunga &gt; Kas Bunga</text>
  <text x="337" y="170" fill="#7dd3fc" font-size="10" text-anchor="middle">Carrying Value NAIK tiap thn</text>

  <rect x="460" y="55" width="185" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="552" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">Kupon &gt; Suku Bunga Pasar</text>
  <text x="552" y="105" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">PREMIUM</text>
  <text x="552" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">Harga Jual &gt; 100%</text>
  <text x="552" y="150" fill="#94a3b8" font-size="10" text-anchor="middle">Beban Bunga &lt; Kas Bunga</text>
  <text x="552" y="170" fill="#7dd3fc" font-size="10" text-anchor="middle">Carrying Value TURUN tiap thn</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Liabilitas Jangka Panjang & Penerbitan Obligasi',
  ref: 'Kieso IFRS 5e Ch. 14 | PSAK 71',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 9: Menguasai penilaian obligasi (Bonds Valuation) berbasis Present Value, penerbitan pada Par, Diskonto, dan Premium, penyusunan Tabel Amortisasi Metode Suku Bunga Efektif, serta perlakuan Biaya Penerbitan Obligasi.',
  objectives: [
    'Memahami hakikat Liabilitas Jangka Panjang dan karakteristik instrumen Obligasi.',
    'Menghitung harga penerbitan obligasi sebagai penjumlahan Nilai Sekarang Pokok dan Nilai Sekarang Bunga Anuitas.',
    'Menyusun Tabel Amortisasi Bunga Efektif untuk obligasi diskonto maupun premium.',
    'Menjurnal pembayaran bunga tahunan/semesteran dan penyesuaian akhir tahun.',
    'Menerapkan perlakuan Biaya Penerbitan Obligasi (Bond Issue Costs) yang mengurangi nilai tercatat awal utang.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Hubungan Suku Bunga Kupon vs Pasar dan Harga Penerbitan Obligasi',
      svg: SVG_BONDS_VALUATION,
      caption: 'Gambar 9.1: Penentuan harga obligasi pada Par, Diskonto, atau Premium.'
    },

    { kind: 'h2', text: '1. Valuasi Obligasi (Bonds Valuation Principles)' },
    {
      kind: 'p',
      text: 'Harga penerbitan obligasi di pasar modal selalu sama dengan **Nilai Sekarang (Present Value)** dari seluruh arus kas kontraktual masa depan yang didiskontokan pada **Suku Bunga Efektif Pasar (Market Rate)** saat penerbitan:'
    },
    {
      kind: 'formula',
      text: '\\text{Harga Obligasi} = (\\text{Nilai Nominal} \\times PVIF_{i,n}) + (\\text{Pembayaran Bunga Berkala} \\times PVIFA_{i,n})',
      note: 'i = Suku bunga pasar per periode, n = Jumlah periode pembayaran bunga.'
    },

    { kind: 'h2', text: '2. Metode Suku Bunga Efektif (Effective-Interest Method)' },
    {
      kind: 'table',
      headers: ['Kolom Tabel Amortisasi', 'Rumus Perhitungan', 'Penjelasan Konseptual'],
      rows: [
        ['1. Kas Dibayar (Cash Interest)', 'Nilai Nominal Obligasi × Suku Bunga Kupon (Stated Rate)', 'Kas aktual berkala yang dikirim ke investor.'],
        ['2. Beban Bunga (Interest Expense)', 'Nilai Tercatat Awal Periode × Suku Bunga Efektif Pasar', 'Beban bunga riil yang diakui di Laba Rugi.'],
        ['3. Amortisasi Diskonto / Premium', '| Beban Bunga - Kas Dibayar |', 'Pengurangan diskonto / premium yang mendekatkan Nilai Tercatat ke Nilai Nominal.'],
        ['4. Nilai Tercatat Akhir (Carrying Amount)', 'Carrying Awal + Amortisasi Diskonto (atau - Amortisasi Premium)', 'Saldo liabilitas yang disajikan di Laporan Posisi Keuangan.']
      ],
      caption: 'Tabel 9.1: Format 4 kolom perhitungan amortisasi bunga efektif.'
    },

    CASE_BONDS_AMORTIZATION,

    { kind: 'h2', text: '3. Biaya Penerbitan Obligasi (Bond Issue Costs)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Perlakuan Sesuai PSAK 71 / IFRS 9',
      text: 'Biaya pencetakan sertifikat obligasi, honor akuntan, biaya legal, dan penjamin emisi (underwriting fees) **MENGURANGI KAS dan MENGURANGI NILAI AWAL TERCATAT OBLIGASI**. Biaya ini diamortisasi bersama diskonto/premium sepanjang umur obligasi menggunakan metode suku bunga efektif.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 9' },
    {
      kind: 'ul',
      items: [
        '**Harga Terbit**: PV Pokok + PV Bunga didiskontokan pada Market Interest Rate.',
        '**Beban Bunga**: Selalu dihitung dari Carrying Value awal dikali Market Rate.',
        '**Kas Bunga**: Selalu dihitung dari Face Value dikali Coupon Rate.',
        '**Amortisasi Diskonto**: Menambah Carrying Value hingga tepat mencapai nilai nominal saat jatuh tempo.'
      ]
    }
  ]
};