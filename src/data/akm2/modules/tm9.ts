import type { Reading } from '../../../types';
import {
  CASE_BONDS_AMORTIZATION,
  CASE_BONDS_BETWEEN_DATES_ISSUE_COSTS } from '../akm2PracticeCases';

const SVG_BONDS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MEKANISME PENERBITAN OBLIGASI (PSAK 71 / IFRS 9)</text>

  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">PAR (AT PAR)</text>
  <text x="125" y="98" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">Kupon = Pasar</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Harga Terbit = 100% Par</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Kas = Nilai Nominal</text>
  <text x="125" y="168" fill="#94a3b8" font-size="9.5" text-anchor="middle">Tidak Ada Amortisasi</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="340" y="78" fill="#f43f5e" font-size="11.5" font-weight="700" text-anchor="middle">DISKONTO (DISCOUNT)</text>
  <text x="340" y="98" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">Kupon &lt; Pasar</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Harga Terbit &lt; 100% Par</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Kas &lt; Nilai Nominal</text>
  <text x="340" y="168" fill="#f59e0b" font-size="9.5" text-anchor="middle">Amortisasi Menambah Carrying</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="555" y="78" fill="#10b981" font-size="11.5" font-weight="700" text-anchor="middle">PREMI (PREMIUM)</text>
  <text x="555" y="98" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">Kupon &gt; Pasar</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Harga Terbit &gt; 100% Par</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Kas &gt; Nilai Nominal</text>
  <text x="555" y="168" fill="#38bdf8" font-size="9.5" text-anchor="middle">Amortisasi Mengurangi Carrying</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Liabilitas Jangka Panjang, Penentuan Harga Obligasi, dan Metode Suku Bunga Efektif',
  ref: 'Kieso IFRS 5e Ch. 14 | PSAK 71, PSAK 50',
  intro: 'TM 9 mengupas valuasi dan akuntansi Liabilitas Jangka Panjang: penentuan harga pasar penerbitan obligasi berbasis Nilai Sekarang (PV Pokok + PV Anuitas Kupon), penyusunan skedul amortisasi diskonto/premi metode suku bunga efektif, serta pencatatan biaya penerbitan obligasi.',
  objectives: [
    'Menghitung harga penerbitan obligasi (Present Value of Principal + PV of Ordinary Annuity of Interest).',
    'Menjelaskan hubungan Suku Bunga Kupon (Stated Rate) vs Suku Bunga Pasar (Effective/Yield Rate) terhadap pembentukan diskonto dan premi.',
    'Menyusun Skedul Amortisasi Obligasi menggunakan Metode Suku Bunga Efektif (Effective-Interest Method) sesuai PSAK 71.',
    'Menjurnal penerbitan obligasi pada tanggal pembayaran bunga maupun di antara tanggal bunga (Accrued Interest).',
    'Memperlakukan Biaya Penerbitan Obligasi (Bond Issue Costs) sebagai pengurang nilai tercatat awal liabilitas.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Kondisi Penerbitan Obligasi: Par, Diskonto, dan Premi',
      svg: SVG_BONDS,
      caption: 'Gambar 9.1: Hubungan suku bunga kupon dan suku bunga pasar terhadap harga penerbitan obligasi.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 9'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Hitung PV Penerbitan', 'Berapa PV Nominal (FV × PVF) + PV Kupon Bunga (Anuitas × PVFA)?', 'Menetapkan harga jual obligasi (kas yang diterima).'],
        ['2', 'Identifikasi Diskonto/Premi', 'Apakah suku bunga kupon lebih kecil atau lebih besar dari suku bunga efektif pasar?', 'Menentukan saldo diskonto atau premi obligasi awal.'],
        ['3', 'Skedul Bunga Efektif', 'Berapa Kas Kupon Dibayar vs Beban Bunga Riil (Carrying Amount × Suku Bunga Efektif)?', 'Menyusun tabel amortisasi dan memperbarui nilai tercatat obligasi.'],
        ['4', 'Penerbitan Antar-Tanggal', 'Apakah obligasi dijual di antara dua tanggal kupon resmi?', 'Menghitung dan menjurnal utang bunga berjalan (accrued interest) saat penerbitan.'],
        ['5', 'Biaya Penerbitan (PSAK 71)', 'Bagaimana perlakuan biaya penjamin emisi (underwriting fee) dan legal?', 'Mengurangkan biaya emisi dari kas penerbitan sehingga menaikkan suku bunga efektif.']
      ],
      caption: 'Tabel 9.0: Roadmap belajar penerbitan obligasi dan amortisasi suku bunga efektif.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 9'
    },
    {
      kind: 'formula',
      text: '\\text{Harga Obligasi (PV)} = \\left( \\text{Nominal} \\times \\frac{1}{(1+i)^n} \\right) + \\left( \\text{Kupon Bunga} \\times \\frac{1 - (1+i)^{-n}}{i} \\right)',
      note: 'i = Suku Bunga Efektif Pasar per periode, n = Total periode pembayaran kupon.'
    },
    {
      kind: 'formula',
      text: '\\text{Beban Bunga Riil} = \\text{Carrying Amount Awal Periode} \\times i_{\\text{efektif}}',
      note: 'Kas Kupon Dibayar = Nilai Nominal × Suku Bunga Kupon. Selisihnya adalah jumlah amortisasi diskonto/premi.'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Penerbitan Obligasi Diskonto PT Telkom Indonesia Tbk',
      blocks: [
        {
          kind: 'p',
          text: 'PT Telkom menerbitkan obligasi 5 tahun senilai nominal Rp 1.000.000.000 pada 1 Januari 2026 dengan kupon bunga 8% dibayar tahunan setiap 31 Desember. Suku bunga pasar saat penerbitan adalah 10%.'
        },
        {
          kind: `formula`,
          text: `PV Pokok = 1.000.000.000 × PVIF(10%, 5 thn: 0,62092) = Rp 620.920.000
PV Kupon (80 jt/thn) = 80.000.000 × PVIFA(10%, 5 thn: 3,79079) = Rp 303.263.200
Total Harga Jual Obligasi = 620.920.000 + 303.263.200 = Rp 924.183.200 (Diskonto Rp 75.816.800)

Amortisasi Tahun 1 (2026):
• Beban Bunga (924.183.200 × 10%) = Rp 92.418.320
• Kas Kupon Dibayar (1 M × 8%) = Rp 80.000.000
• Amortisasi Diskonto = 92.418.320 - 80.000.000 = Rp 12.418.320
• Carrying Amount per 31 Des 2026 = 924.183.200 + 12.418.320 = Rp 936.601.520`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: `Jurnal Transaksi PT Telkom`,
          text: `1 Jan 2026 (Penerbitan):
Debit: Kas Rp 924.183.200
Kredit: Utang Obligasi Rp 924.183.200 (Berdasarkan IFRS / Net Method)

31 Des 2026 (Bunga & Amortisasi):
Debit: Beban Bunga Rp 92.418.320
Kredit: Utang Obligasi (Amortisasi Diskonto) Rp 12.418.320
Kredit: Kas Rp 80.000.000`
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Aktif: Penerbitan Obligasi dengan Premi',
      prompt: 'Jika dalam kasus PT Telkom di atas suku bunga pasar adalah 6% (lebih rendah dari kupon 8%), hitung harga penerbitan obligasi dan tentukan apakah obligasi terbit pada diskonto atau premi!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**PV Pokok (6%, 5 thn: 0,74726)**: Rp 747.260.000.',
            '**PV Kupon (80 jt × PVIFA 6%, 5 thn: 4,21236)**: Rp 336.988.800.',
            '**Total Harga Jual**: 747.260.000 + 336.988.800 = **Rp 1.084.248.800**.',
            '**Status**: Terbit pada **PREMI** sebesar **Rp 84.248.800** (karena kupon 8% > pasar 6%).',
            '**Amortisasi Tahun 1**: Beban Bunga (1.084.248.800 × 6% = Rp 65.054.928), Kas Dibayar (Rp 80.000.000), Amortisasi Premi = **Rp 14.945.072** (mengurangi carrying amount obligasi).'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan UTS Amortisasi Premi',
          text: 'Amortisasi Premi **MENGURANGI** nilai tercatat obligasi setiap tahun hingga tepat mencapai nilai nominal Rp 1.000.000.000 pada saat jatuh tempo.'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 9'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Valuasi & Penentuan Harga Obligasi', 'Kalkulasi PV Pokok dan PV Anuitas Kupon pada suku bunga pasar.', 'Menghitung harga pasar penerbitan obligasi secara tepat.'],
        ['2', 'Metode Suku Bunga Efektif PSAK 71', 'Mekanisme penyusunan tabel amortisasi diskonto dan premi.', 'Menyusun tabel 5 kolom: Tanggal, Kas, Beban Bunga, Amortisasi, Carrying Amount.'],
        ['3', 'Jurnal Penerbitan & Penyesuaian', 'Pencatatan metode neto sesuai IFRS/PSAK 71.', 'Menjurnal penerbitan, penyesuaian bunga berjalan akhir tahun, dan pembayaran kupon.'],
        ['4', 'Biaya Penerbitan Obligasi', 'Perlakuan underwriting fee sebagai pengurang nilai carrying awal.', 'Menyesuaikan suku bunga efektif obligasi.'],
        ['5', 'Penerbitan Antar-Tanggal Kupon', 'Perhitungan piutang/utang bunga berjalan saat pembeli membayar bunga akrual.', 'Menjurnal penerbitan obligasi di tengah periode kupon.']
      ],
      caption: 'Tabel 9.1: Matriks kompetensi komprehensif materi TM 9 AKM II.'
    },
    { kind: 'h2', text: '1. Amortisasi Obligasi Suku Bunga Efektif' },
    {
      kind: 'p',
      text: '==PSAK 71 mewajibkan penggunaan metode suku bunga efektif untuk amortisasi diskonto dan premi obligasi, yang menghasilkan persentase beban bunga konstan terhadap nilai tercatat obligasi setiap periode.=='
    },
    CASE_BONDS_AMORTIZATION,
    { kind: 'h2', text: "2. Penerbitan Obligasi di Antara Tanggal Bunga & Biaya Emisi Bersih (PSAK 71)" },
    {
      kind: 'p',
      text: "==Ketika obligasi diterbitkan di antara tanggal pembayaran bunga kupon, pembeli membayar harga obligasi ditambah bunga berjalan sejak tanggal bunga terakhir. PSAK 71 mewajibkan biaya penerbitan obligasi mengurangi nilai tercatat awal liabilitas, sehingga meningkatkan suku bunga efektif yang diamortisasi.=="
    },
    CASE_BONDS_BETWEEN_DATES_ISSUE_COSTS,
    { kind: 'h2', text: '2. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Harga Terbit**: PV Nominal + PV Kupon Bunga pada suku bunga pasar.',
        '**Amortisasi Diskonto**: Menambah Carrying Amount hingga sama dengan Nominal saat jatuh tempo.',
        '**Amortisasi Premi**: Mengurangi Carrying Amount hingga sama dengan Nominal saat jatuh tempo.',
        `**Beban Bunga Tahunan**: Carrying Amount Awal × Suku Bunga Efektif Pasar.`
      ]
    }
  ]
};
