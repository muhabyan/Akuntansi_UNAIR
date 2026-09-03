import type { Reading } from '../../../types';
import {
  CASE_INTANGIBLE_GOODWILL,
  CASE_RD_CAPITALIZATION } from '../akm2PracticeCases';

const SVG_INTANGIBLES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KLASIFIKASI ASET TAKBERWUJUD &amp; GOODWILL (PSAK 19 &amp; PSAK 22)</text>

  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. TERBATAS (FINITE LIFE)</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Contoh: Paten, Hak Cipta, Lisensi</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">DIAMORTISASI</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Sepanjang Umur Hukum/Ekonomis</text>
  <text x="125" y="168" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Uji Impairment jika ada indikasi</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="340" y="78" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">2. TAK TERBATAS (INDEFINITE)</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Contoh: Merek Dagang, Hak Siar</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">TIDAK DIAMORTISASI</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Wajib Uji Impairment Minimal</text>
  <text x="340" y="168" fill="#f59e0b" font-size="9.5" font-weight="600" text-anchor="middle">1 Kali Setiap Tahun</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="555" y="78" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">3. GOODWILL AKUISISI</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Pembelian Bisnis (Kombinasi Bisnis)</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#f87171" font-size="10.5" font-weight="700" text-anchor="middle">TIDAK DIAMORTISASI</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Uji Impairment pada tingkat CGU</text>
  <text x="555" y="168" fill="#f87171" font-size="9.5" font-weight="600" text-anchor="middle">Rugi Impairment NON-REVERSIBLE</text>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Aset Takberwujud (Intangible Assets), Riset & Pengembangan (R&D), dan Goodwill',
  ref: 'Kieso IFRS 5e Ch. 12 | PSAK 19, PSAK 22 (IFRS 3)',
  intro: 'TM 5 mengupas tuntas kriteria keteridentifikasian aset takberwujud, pemisahan biaya Riset (beban) vs Pengembangan (kapitalisasi), amortisasi paten dan hak cipta, serta kalkulasi Goodwill dalam kombinasi bisnis beserta perlakuan Bargain Purchase (Keuntungan Pembelian Diskon).',
  objectives: [
    'Menganalisis 3 kriteria pengakuan Aset Takberwujud sesuai PSAK 19 (Identifiability, Control, Future Economic Benefits).',
    'Membedakan perlakuan akuntansi Tahap Riset (Research Phase - Beban Langsung) vs Tahap Pengembangan (Development Phase - Kapitalisasi).',
    'Menghitung dan menjurnal amortisasi paten dengan mempertimbangkan umur hukum vs umur ekonomis.',
    'Menghitung Goodwill Akuisisi dan Keuntungan Pembelian dengan Diskon (Bargain Purchase / Negative Goodwill - PSAK 22).',
    'Memahami larangan kapitalisasi atas Goodwill yang Dihasilkan secara Internal (Internally Generated Goodwill).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Klasifikasi Aset Takberwujud & Goodwill',
      svg: SVG_INTANGIBLES,
      caption: 'Gambar 5.1: Matriks perlakuan amortisasi dan pengujian impairment aset takberwujud.'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat TM 5'
    },
    {
      kind: 'table',
      headers: ['Tahap', 'Fokus Analisis', 'Pertanyaan Kunci Mahasiswa', 'Output yang Dikuasai'],
      rows: [
        ['1', 'Keteridentifikasian (Identifiability)', 'Apakah aset dapat dipisahkan (separable) atau timbul dari hak kontraktual/hukum?', 'Memvalidasi apakah aset takberwujud boleh diakui di neraca.'],
        ['2', 'Riset vs Pengembangan (R&D)', 'Apakah pengeluaran terjadi pada tahap pencarian formula baru atau pembuatan prototipe siap komersial?', 'Membagi pengeluaran R&D ke beban periode vs kapitalisasi aset takberwujud.'],
        ['3', 'Amortisasi & Sisa Umur', 'Berapa umur terpendek antara hak hukum paten (20 thn) vs umur ekonomis riil?', 'Menghitung beban amortisasi tahunan ke akun Paten.'],
        ['4', 'Kalkulasi Goodwill', 'Berapa Imbalan Pembelian dikurangi Nilai Wajar Aset Neto yang Diakuisisi?', 'Menghitung Goodwill positif atau Bargain Purchase Gain (Laba Rugi).'],
        ['5', 'Uji Impairment Tahunan', 'Bagaimana menguji penurunan nilai aset takberwujud tanpa amortisasi?', 'Melakukan uji penurunan nilai tahunan wajib sesuai PSAK 48.']
      ],
      caption: 'Tabel 5.0: Alur berpikir sistematis akuntansi aset takberwujud dan goodwill.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi TM 5'
    },
    {
      kind: 'formula',
      text: 'Goodwill = \\text{Imbalan yang Dialihkan (Purchase Price)} - \\text{Nilai Wajar Aset Neto Teridentifikasi yang Diperoleh}',
      note: 'Nilai Wajar Aset Neto = Nilai Wajar Total Aset Teridentifikasi - Nilai Wajar Total Liabilitas yang Diambil Alih.'
    },
    {
      kind: 'formula',
      text: 'Bargain Purchase Gain = \\text{Nilai Wajar Aset Neto} - \\text{Purchase Price (Jika Positif)}',
      note: 'Jika entitas membeli bisnis di bawah nilai wajar aset netonya, selisih untung diakui SEKETIKA di Laba Rugi periode akuisisi.'
    },
    {
      kind: 'formula',
      text: 'Beban Amortisasi = \\frac{\\text{Biaya Perolehan Paten} - \\text{Nilai Sisa (Umumnya Rp 0)}}{\\min(\\text{Umur Hukum}, \\text{Umur Manfaat Ekonomis})}',
      note: 'Nilai sisa aset takberwujud diasumsikan NOL kecuali ada komitmen pihak ketiga untuk membeli di akhir masa manfaat.'
    },
    {
      kind: 'example',
      title: 'Contoh Mini Numerik: Akuisisi Startup Farmasi oleh PT Kalbe Farma Tbk',
      blocks: [
        {
          kind: `p`,
          text: `PT Kalbe Farma mengakuisisi 100% kepemilikan PT BioMed seharga Rp 500.000.000 tunai. Posisi neraca PT BioMed pada tanggal akuisisi:
• Kas & Piutang (Nilai Wajar = Nilai Buku): Rp 80.000.000
• Peralatan Lab (Nilai Buku Rp 120 jt, Nilai Wajar: Rp 180.000.000)
• Paten Vaksin (Nilai Buku Rp 0, Nilai Wajar: Rp 160.000.000)
• Total Liabilitas yang Diambil Alih (Nilai Wajar): Rp 70.000.000.`
        },
        {
          kind: `formula`,
          text: `Total Nilai Wajar Aset Teridentifikasi = 80 jt + 180 jt + 160 jt = Rp 420.000.000
Nilai Wajar Aset Neto = 420.000.000 - 70.000.000 = Rp 350.000.000
Goodwill Akuisisi = 500.000.000 - 350.000.000 = Rp 150.000.000`
        },
        {
          kind: 'callout',
          variant: 'key',
          title: `Jurnal Penggabungan Usaha oleh PT Kalbe Farma`,
          text: `Debit: Kas & Piutang Rp 80.000.000
Debit: Peralatan Lab Rp 180.000.000
Debit: Paten Vaksin Rp 160.000.000
Debit: Goodwill Rp 150.000.000
Kredit: Liabilitas Diambil Alih Rp 70.000.000
Kredit: Kas (Imbalan Beli) Rp 500.000.000`
        }
      ]
    },
    {
      kind: 'solution-reveal',
      title: `Latihan Aktif: Pemisahan Biaya Riset vs Pengembangan (R&D - PSAK 19)`,
      prompt: `PT Teknologi Maju mengeluarkan biaya pengembangan software kecerdasan buatan:
1. Riset pencarian algoritma baru: Rp 120 jt.
2. Evaluasi alternatif formula machine learning: Rp 60 jt.
3. Desain, konstruksi, dan pengujian prototipe setelah kelayakan teknis dan komersial terbukti (memenuhi 6 kriteria kapitalisasi): Rp 250 jt.
4. Biaya pemasaran sebelum peluncuran resmi: Rp 40 jt.
Tentukan jumlah yang dibebankan ke Laba Rugi vs Dikapitalisasi!`,
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Beban Riset Periode Berjalan (Expense)**: Rp 120 jt + Rp 60 jt = **Rp 180.000.000**.',
            '**Aset Takberwujud (Kapitalisasi Pengembangan)**: **Rp 250.000.000** (karena telah memenuhi kelayakan teknis & komersial).',
            '**Beban Pemasaran (Selling Expense)**: **Rp 40.000.000** (masuk beban operasional saat terjadi, tidak boleh dikapitalisasi).'
          ]
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Jebakan UTS R&D',
          text: 'Seluruh pengeluaran pada Tahap Riset (Research Phase) **WAJIB DIBEBANKAN LANGSUNG**. Pengeluaran baru boleh dikapitalisasi jika dan hanya jika entitas dapat membuktikan kelayakan teknis, niat menyelesaikan, kemampuan menjual, dan ketersediaan sumber daya.'
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan TM 5'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Karakteristik & Kriteria Pengakuan', 'Keteridentifikasian, pengendalian, dan manfaat masa depan aset takberwujud.', 'Mampu mengidentifikasi apakah lisensi/hak cipta masuk neraca.'],
        ['2', 'Akuntansi Biaya R&D (PSAK 19)', '6 kriteria kapitalisasi biaya pengembangan vs beban riset murni.', 'Membagi akun pengeluaran lab teknologi ke beban vs aset.'],
        ['3', 'Amortisasi Aset Terbatas', 'Menghitung amortisasi paten/waralaba berdasarkan umur terpendek hukum vs ekonomis.', 'Menyusun skedul amortisasi dan jurnal penyesuaian akhir tahun.'],
        ['4', 'Aset Takberwujud Umur Tak Terbatas', 'Merek dagang, lisensi tak terbatas, dan kewajiban uji impairment tahunan.', 'Menjelaskan mengapa aset tidak diamortisasi dan prosedur uji PSAK 48.'],
        ['5', 'Goodwill & Bargain Purchase', 'Kalkulasi Goodwill positif vs Keuntungan Pembelian Diskon pada akuisisi bisnis.', 'Menjurnal transaksi kombinasi bisnis pada nilai wajar aset neto.']
      ],
      caption: 'Tabel 5.1: Matriks kompetensi komprehensif materi TM 5 AKM II.'
    },
    { kind: 'h2', text: '1. Pengakuan Aset Takberwujud & Goodwill' },
    {
      kind: 'p',
      text: '==Aset takberwujud adalah aset non-moneter teridentifikasi tanpa wujud fisik. Entitas mengakui aset takberwujud hanya jika memenuhi kriteria keteridentifikasian, dapat dikendalikan, dan menghasilkan manfaat ekonomik masa depan.=='
    },
    CASE_INTANGIBLE_GOODWILL,
    { kind: 'h2', text: "2. Kriteria Kapitalisasi Riset & Pengembangan (R&D) PSAK 19" },
    {
      kind: 'p',
      text: "==Berdasarkan PSAK 19, seluruh pengeluaran selama Fase Riset WAJIB diakui sebagai beban saat terjadinya. Pengeluaran pada Fase Pengembangan HANYA boleh dikapitalisasi sebagai aset takberwujud setelah entitas membuktikan pemenuhan seluruh 6 Kriteria Kelayakan PIRATE.=="
    },
    CASE_RD_CAPITALIZATION,
    { kind: 'h2', text: '2. Rangkuman & Kunci Penguasaan Ujian (Key Takeaways)' },
    {
      kind: 'ul',
      items: [
        '**Riset vs Pengembangan**: Riset = Beban 100%. Pengembangan = Dikapitalisasi hanya jika memenuhi 6 kriteria kelayakan komersial.',
        '**Amortisasi Paten**: Gunakan umur terpendek antara masa berlaku hukum (20 tahun) vs umur ekonomis.',
        '**Goodwill Internal**: DILARANG DIKAPITALISASI. Goodwill hanya boleh muncul dari transaksi akuisisi bisnis eksternal.',
        '**Bargain Purchase**: Keuntungan pembelian diskon langsung diakui di Laba Rugi periode berjalan.',
        `**Goodwill Impairment**: Sekali diturunkan nilainya, rugi penurunan nilai Goodwill TIDAK BOLEH DIBALIKKAN.`
      ]
    }
  ]
};
