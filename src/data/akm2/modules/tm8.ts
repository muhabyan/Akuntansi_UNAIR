import type { Reading } from '../../../types';
import { CASE_UTS_MASTER_SIMULATION } from '../akm2PracticeCases';

const SVG_UTS_INTEGRATION = `
<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="230" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="800" text-anchor="middle">PETA INTEGRASI MATERI UTS AKM II (TM 1 s.d. TM 7)</text>

  <!-- Box 1: Aset Tetap -->
  <rect x="30" y="55" width="145" height="155" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="102" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">TM 1 &amp; TM 2</text>
  <text x="102" y="98" fill="#f1f5f9" font-size="10" font-weight="600" text-anchor="middle">Aset Tetap &amp; Properti</text>
  <line x1="40" y1="108" x2="165" y2="108" stroke="#334155"/>
  <text x="102" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">• Kos Awal &amp; Lump-Sum</text>
  <text x="102" y="146" fill="#cbd5e1" font-size="9" text-anchor="middle">• Bunga PSAK 26 (WAAE)</text>
  <text x="102" y="164" fill="#cbd5e1" font-size="9" text-anchor="middle">• Pertukaran Non-Moneter</text>
  <text x="102" y="182" fill="#cbd5e1" font-size="9" text-anchor="middle">• Properti Investasi</text>

  <!-- Box 2: Depresiasi & Impairment -->
  <rect x="190" y="55" width="145" height="155" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="262" y="78" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">TM 3 &amp; TM 4</text>
  <text x="262" y="98" fill="#f1f5f9" font-size="10" font-weight="600" text-anchor="middle">Alokasi &amp; Impairment</text>
  <line x1="200" y1="108" x2="325" y2="108" stroke="#334155"/>
  <text x="262" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">• 4 Metode Depresiasi</text>
  <text x="262" y="146" fill="#cbd5e1" font-size="9" text-anchor="middle">• Deplesi Tambang</text>
  <text x="262" y="164" fill="#cbd5e1" font-size="9" text-anchor="middle">• Uji PSAK 48 (FV vs VIU)</text>
  <text x="262" y="182" fill="#cbd5e1" font-size="9" text-anchor="middle">• Alokasi CGU &amp; Reversal</text>

  <!-- Box 3: Aset Takberwujud -->
  <rect x="350" y="55" width="145" height="155" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="422" y="78" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">TM 5</text>
  <text x="422" y="98" fill="#f1f5f9" font-size="10" font-weight="600" text-anchor="middle">Aset Takberwujud</text>
  <line x1="360" y1="108" x2="485" y2="108" stroke="#334155"/>
  <text x="422" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">• Riset (Exp) vs Dev (Cap)</text>
  <text x="422" y="146" fill="#cbd5e1" font-size="9" text-anchor="middle">• Amortisasi Paten/Lisensi</text>
  <text x="422" y="164" fill="#cbd5e1" font-size="9" text-anchor="middle">• Goodwill Akuisisi</text>
  <text x="422" y="182" fill="#cbd5e1" font-size="9" text-anchor="middle">• Bargain Purchase</text>

  <!-- Box 4: Liabilitas & Provisi -->
  <rect x="510" y="55" width="145" height="155" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="582" y="78" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">TM 6 &amp; TM 7</text>
  <text x="582" y="98" fill="#f1f5f9" font-size="10" font-weight="600" text-anchor="middle">Liabilitas &amp; Provisi</text>
  <line x1="520" y1="108" x2="645" y2="108" stroke="#334155"/>
  <text x="582" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">• Wesel Bayar Diskonto</text>
  <text x="582" y="146" fill="#cbd5e1" font-size="9" text-anchor="middle">• Refinancing PSAK 1</text>
  <text x="582" y="164" fill="#cbd5e1" font-size="9" text-anchor="middle">• Provisi Garansi PSAK 57</text>
  <text x="582" y="182" fill="#cbd5e1" font-size="9" text-anchor="middle">• Kontinjensi vs Neraca</text>
</svg>`;

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan & Review Terpadu Ujian Tengah Semester (UTS)',
  ref: 'Kieso IFRS 5e Ch. 10 s.d 13 | PSAK 16, 13, 26, 48, 19, 57, 1',
  intro: 'TM 8 adalah modul penempaan komprehensif Pra-UTS: mengintegrasikan seluruh konsep Aset Tetap, Pertukaran Aset, Depresiasi, Penurunan Nilai (PSAK 48), Aset Takberwujud & Goodwill, Liabilitas Lancar, serta Provisi Garansi & Kontinjensi ke dalam format soal ujian bertingkat khas FEB UNAIR.',
  objectives: [
    'Menguasai integrasi kalkulasi kapitalisasi bunga (PSAK 26), perolehan gabungan, dan dekomisioning aset.',
    'Menyelesaikan soal komposit depresiasi, revisi estimasi, dan pengujian penurunan nilai (Impairment CGU).',
    'Menghitung Goodwill akuisisi dan pemisahan pengeluaran Riset vs Pengembangan.',
    'Menjurnal wesel bayar diskonto dan provisi garansi produk dengan akurasi jurnal 100%.',
    'Mengidentifikasi dan menghindari 10 jebakan soal UTS yang paling sering menjebak mahasiswa.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Integrasi Materi Ujian Tengah Semester (UTS) AKM II',
      svg: SVG_UTS_INTEGRATION,
      caption: 'Gambar 8.1: Struktur keterkaitan 7 topik utama yang diujikan dalam UTS.'
    },
    {
      kind: 'h2',
      text: 'Matriks Komparasi 4 Pilar Materi UTS'
    },
    {
      kind: 'table',
      headers: ['Pilar Topik', 'Fokus Standar SAK', 'Kunci Perhitungan Ujian', 'Titik Rawan Kekeliruan'],
      rows: [
        ['1. Aset Tetap & Bunga', 'PSAK 16, PSAK 13, PSAK 26', 'WAAE × Suku Bunga Pinjaman vs Total Bunga Aktual.', 'Memasukkan biaya pelatihan karyawan ke nilai aset (SALAH!).'],
        ['2. Depresiasi & Impairment', 'PSAK 16, PSAK 48', 'Recoverable Amount = Max(FV less cost to sell, Value in Use).', 'Menyusutkan DDB dengan mengurangi nilai sisa di awal tahun (SALAH!).'],
        ['3. Takberwujud & Goodwill', 'PSAK 19, PSAK 22', 'Goodwill = Purchase Price - Fair Value Aset Neto.', 'Mengkapitalisasi biaya riset atau mengamortisasi Goodwill (SALAH!).'],
        ['4. Liabilitas & Provisi', 'PSAK 1, PSAK 57', 'Provisi diakui jika Kewajiban Kini + Probable >50% + Estimasi Andal.', 'Menjurnal liabilitas kontinjensi yang berstatus "Possible" di neraca (SALAH!).']
      ],
      caption: 'Tabel 8.1: Matriks perbandingan esensial persiapan UTS.'
    },
    {
      kind: 'h2',
      text: 'Kompilasi Formula Sheet Super Cepat UTS'
    },
    {
      kind: 'formula',
      text: '\\text{Kapitalisasi Bunga} = \\min\\left( \\text{WAAE} \\times i_{\\text{konstruksi}}, \\text{Total Bunga Riil Aktual} \\right)',
      note: 'WAAE dihitung dari pengeluaran kas aktual dikalikan bobot bulan sisa periode per 12.'
    },
    {
      kind: 'formula',
      text: '\\text{Impairment Loss} = \\text{Carrying Amount} - \\max(\\text{FV less Cost to Sell}, \\text{Value in Use})',
      note: 'Rugi penurunan nilai dialokasikan ke Goodwill terlebih dahulu, sisanya prorata ke aset lain dalam CGU.'
    },
    {
      kind: 'formula',
      text: '\\text{Amortisasi Diskonto Wesel} = \\text{Carrying Value Wesel Bersih} \\times i_{\\text{efektif}}',
      note: 'Diskonto Wesel Bayar adalah akun kontra-liabilitas pengurang nominal wesel.'
    },
    {
      kind: 'example',
      title: 'Simulasi Kasus Komprehensif UTS: PT Maju Bersama Tbk',
      blocks: [
        {
          kind: `p`,
          text: `PT Maju Bersama membangun pabrik baru selama 2026. Pengeluaran kas:
• 1 Maret: Rp 400.000.000
• 1 Juli: Rp 600.000.000
• 1 November: Rp 300.000.000
Pinjaman khusus proyek: Bank BNI Rp 500.000.000 (bunga 12% p.a.). Pinjaman umum lain: Utang Obligasi Rp 1.000.000.000 (bunga 10% p.a.).
Hitung WAAE dan total bunga yang dikapitalisasi ke akun Gedung Pabrik!`
        },
        {
          kind: `formula`,
          text: `WAAE = (400 jt × 10/12) + (600 jt × 6/12) + (300 jt × 2/12)
WAAE = 333.333.333 + 300.000.000 + 50.000.000 = Rp 683.333.333

Avoidable Interest:
• Dari Pinjaman Khusus (Rp 500 jt × 12%) = Rp 60.000.000
• Dari Pinjaman Umum (683.333.333 - 500.000.000 = Rp 183.333.333 × 10%) = Rp 18.333.333
Total Avoidable Interest = 60 jt + 18,33 jt = Rp 78.333.333

Total Bunga Aktual = (500 jt × 12%) + (1 M × 10%) = 60 jt + 100 jt = Rp 160.000.000
Bunga yang Dikapitalisasi = Min(78.333.333, 160.000.000) = Rp 78.333.333`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: `Jurnal Kapitalisasi Bunga Akhir Tahun 2026`,
          text: `Debit: Gedung Pabrik dalam Konstruksi Rp 78.333.333
Debit: Beban Bunga (Laba Rugi) Rp 81.666.667
Kredit: Kas / Utang Bunga Rp 160.000.000`
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Ujian Mandiri: 5 Kasus Jurnal Cepat',
      prompt: 'Buat jurnal untuk: (1) Beli mesin tunai Rp 100 jt + bea impor Rp 10 jt, (2) Pertukaran truk ada commercial substance (untung Rp 15 jt), (3) Pengeluaran riset formula obat Rp 50 jt, (4) Provisi garansi 3% dari penjualan Rp 1 M, (5) Pembalikan impairment mesin Rp 20 jt.',
      blocks: [
        {
          kind: `ul`,
          items: [
            `**1. Perolehan Mesin**:
Debit: Mesin Rp 110.000.000 | Kredit: Kas Rp 110.000.000.`,
            `**2. Pertukaran Commercial Substance**:
Debit: Truk Baru (FV) | Debit: Akum. Depresiasi | Kredit: Truk Lama (Kos) | Kredit: Keuntungan Pertukaran Rp 15.000.000.`,
            `**3. Beban Riset**:
Debit: Beban Riset (Laba Rugi) Rp 50.000.000 | Kredit: Kas Rp 50.000.000.`,
            `**4. Provisi Garansi**:
Debit: Beban Garansi Rp 30.000.000 | Kredit: Provisi Garansi Rp 30.000.000.`,
            `**5. Pembalikan Impairment**:
Debit: Akumulasi Penurunan Nilai Mesin Rp 20.000.000 | Kredit: Keuntungan Pembalikan Impairment (Laba Rugi) Rp 20.000.000.`
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Checklist 10 Jebakan Utama UTS',
          text: '1. Jangan kapitalisasi biaya pelatihan karyawan.\n2. Biaya bongkar gedung lama masuk Tanah, bukan Gedung.\n3. DDB tahun 1: kalikan langsung ke harga perolehan (abaikan nilai sisa).\n4. Rugi pertukaran selalu diakui penuh.\n5. Seluruh biaya riset wajib dibebankan.\n6. Goodwill tidak diamortisasi.\n7. Reversal impairment Goodwill dilarang.\n8. Diskonto wesel adalah akun kontra-liabilitas.\n9. Refinancing utang harus sudah diteken sebelum tanggal neraca.\n10. Aset kontinjensi tidak boleh dijurnal di neraca.'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Penguasaan Nilai A UTS'
    },
    {
      kind: 'table',
      headers: ['Komponen Soal', 'Proporsi Nilai Estimasi', 'Tips & Strategi Pengerjaan'],
      rows: [
        ['Soal Kasus 1: Aset Tetap & Bunga Konstruksi', '30%', 'Tulis tabel WAAE lengkap dengan kolom Pengeluaran, Bobot Bulan, dan WAAE.'],
        ['Soal Kasus 2: Depresiasi & Uji Impairment', '25%', 'Sebutkan eksplisit angka Fair Value less cost to sell vs Value in Use sebelum menyimpulkan.'],
        ['Soal Kasus 3: Takberwujud & Goodwill', '20%', 'Hitung Nilai Wajar Aset Neto terlebih dahulu sebelum mengurangkan dari Purchase Price.'],
        ['Soal Kasus 4: Liabilitas, Wesel & Garansi', '25%', 'Pastikan jurnal penyesuaian akhir tahun (amortisasi bunga wesel & beban garansi) tidak terlewat.']
      ],
      caption: 'Tabel 8.2: Strategi alokasi waktu dan perolehan nilai maksimal UTS.'
    },
    {
      kind: 'h2',
      text: '2. Master Kasus Terpadu Simulasi Ujian Tengah Semester (UTS)'
    },
    {
      kind: 'p',
      text: '==Simulasi komprehensif berikut mengintegrasikan seluruh transaksi inti materi TM 1 s.d. TM 7: perolehan aset lump-sum, wesel bayar diskonto, kapitalisasi bunga pinjaman PSAK 26, dan provisi garansi produk.=='
    },
    CASE_UTS_MASTER_SIMULATION,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses UTS (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Akurasi Format Jurnal**: Pastikan nama akun resmi SAK, akun kredit menjorok ke dalam, dan debet-kredit seimbang.',
        '**Langkah Hitungan Rinci**: Dosen memberikan nilai parsial untuk setiap langkah aritmatika yang benar meskipun hasil akhir berbeda.',
        `**Kutipan Standar**: Menyebutkan "Sesuai PSAK 16/PSAK 26/PSAK 57" memberikan poin justifikasi teoritis maksimal.`
      ]
    }
  ]
};
