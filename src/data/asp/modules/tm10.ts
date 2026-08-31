import type { Reading } from '../../../types';
import { CASE_VALUE_FOR_MONEY } from '../aspPracticeCases';

const SVG_VFM_DIAGRAM = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KERANGKA KERJA VALUE FOR MONEY: EKONOMI, EFISIENSI, &amp; EFEKTIVITAS</text>
  
  <!-- Boxes: Input, Output, Outcome -->
  <rect x="40" y="70" width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="105" y="100" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">INPUT</text>
  <text x="105" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Biaya &amp; Dana Rp)</text>

  <rect x="275" y="70" width="130" height="90" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="100" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">OUTPUT</text>
  <text x="340" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Barang / Jasa Fisik)</text>

  <rect x="510" y="70" width="130" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="575" y="100" fill="#f59e0b" font-size="12" font-weight="700" text-anchor="middle">OUTCOME</text>
  <text x="575" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Dampak Manfaat Publik)</text>

  <!-- Connectors with 3E -->
  <line x1="170" y1="115" x2="275" y2="115" stroke="#34d399" stroke-width="2"/>
  <text x="222" y="105" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">EFISIENSI</text>
  <text x="222" y="132" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Input / Output)</text>

  <line x1="405" y1="115" x2="510" y2="115" stroke="#f59e0b" stroke-width="2"/>
  <text x="457" y="105" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">EFEKTIVITAS</text>
  <text x="457" y="132" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Output &rarr; Outcome)</text>

  <!-- Bottom Arch for Ekonomi -->
  <path d="M 105 160 Q 340 215 575 160" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="340" y="195" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">EKONOMI: Memperoleh Input dengan Biaya Termurah pada Kualitas Standar</text>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Pengukuran Kinerja Organisasi Pemerintah & Paradigma Value for Money',
  ref: 'Mardiasmo Bab 8 | Deddi Nordiawan Bab 8 | PermenPAN-RB No. 88/2021 SAKIP',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 10: Menguasai sistem pengukuran kinerja sektor publik, konsep Value for Money (VFM: Ekonomi, Efisiensi, Efektivitas, Keadilan / Equity, dan Kesetaraan / Equality), Indikator Kinerja Utama (IKU), Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP), serta Laporan Kinerja Instansi Pemerintah (LAKIP).',
  objectives: [
    'Mendefinisikan Pengukuran Kinerja Sektor Publik dan urgensinya dalam mewujudkan akuntabilitas hasil.',
    'Membedakan dan menghitung Tiga Pilar Value for Money: Ekonomis (Input), Efisiensi (Input vs Output), dan Efektivitas (Output vs Outcome).',
    'Menjelaskan hierarki indikator kinerja: Input $\\rightarrow$ Output $\\rightarrow$ Outcome $\\rightarrow$ Benefit $\\rightarrow$ Impact.',
    'Menjelaskan kerangka SAKIP (Sistem Akuntabilitas Kinerja Instansi Pemerintah) dan penyusunan LAKIP.',
    'Mengintegrasikan pengukuran kinerja berbasis Balanced Scorecard Sektor Publik (Perspektif Pelanggan Publik di puncak hierarki).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Kerangka Konseptual Value for Money (3E Framework)',
      svg: SVG_VFM_DIAGRAM,
      caption: 'Gambar 10.1: Hubungan antara input, proses output, dan hasil outcome publik.'
    },

    { kind: 'h2', text: '1. Tiga Pilar Value for Money (3E)' },
    {
      kind: 'table',
      headers: ['Elemen 3E', 'Definisi Konseptual', 'Rumus Rasio Indikator', 'Kriteria Kinerja Baik'],
      rows: [
        ['1. Ekonomi (Kehematan)', 'Memperoleh sumber daya input (barang/jasa/SDM) dengan harga paling murah tanpa mengorbankan standar mutu kualitas yang disyaratkan.', '$\\frac{\\text{Realisasi Biaya Input}}{\\text{Anggaran Input}}$', 'Rasio $\\le 100\\%$ (Belanja di bawah pagu anggaran yang direncanakan).'],
        ['2. Efisiensi (Daya Guna)', 'Pencapaian output fisik maksimum dengan jumlah input tertentu, atau penggunaan input terendah untuk menghasilkan target output tertentu.', '$\\frac{\\text{Input Aktual (Rp)}}{\\text{Output Aktual (Unit)}}$', 'Biaya per unit output lebih rendah dari standar biaya masukan (SBM).'],
        ['3. Efektivitas (Hasil Guna)', 'Tingkat keberhasilan output yang dihasilkan dalam mencapai tujuan strategis dan dampak positif bagi masyarakat (*Outcome*).', '$\\frac{\\text{Outcome Realisasi}}{\\text{Target Outcome}}$', 'Rasio $\\ge 100\\%$ (Tercapainya dampak layanan publik secara nyata).']
      ],
      caption: 'Tabel 10.1: Matriks evaluasi tiga elemen Value for Money.'
    },

    CASE_VALUE_FOR_MONEY,

    { kind: 'h2', text: '2. Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)' },
    {
      kind: 'p',
      text: 'Berdasarkan Perpres No. 29/2014 dan PermenPAN-RB, SAKIP mengintegrasikan lima siklus manajemen kinerja instansi pemerintah:'
    },
    {
      kind: 'ol',
      items: [
        '**Perencanaan Kinerja**: Penyusunan Rencana Strategis (Renstra) dan Indikator Kinerja Utama (IKU).',
        '**Perjanjian Kinerja (PK)**: Komitmen target tahunan antara pimpinan satker dengan atasan langsung.',
        '**Pengukuran Kinerja**: Pemantauan capaian realisasi IKU triwulanan dan tahunan.',
        '**Pengelolaan Data Kinerja**: Pencatatan data kinerja terverifikasi dalam sistem informasi digital.',
        '**Pelaporan Kinerja (LAKIP)**: Publikasi laporan kinerja tahunan kepada KemenPAN-RB dan masyarakat.'
      ]
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 10' },
    {
      kind: 'ul',
      items: [
        '**Perbedaan Output vs Outcome**: Output adalah barang/jasa langsung yang dihasilkan (misal 10 km jalan diaspal); Outcome adalah dampak manfaat yang dirasakan masyarakat (misal waktu tempuh logistik turun 40% dan angka kecelakaan turun).',
        '**Balanced Scorecard Sektor Publik**: Menempatkan **Perspektif Kepuasan Pelanggan / Masyarakat (Customer / Stakeholders)** di posisi paling atas (berbeda dengan swasta yang menempatkan Perspektif Finansial di posisi atas).'
      ]
    }
  ]
};