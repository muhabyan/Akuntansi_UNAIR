import type { Reading } from '../../../types';
import { CASE_IMPAIRMENT_TEST } from '../akm2PracticeCases';

const SVG_IMPAIRMENT_FLOW = `
<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="230" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KERANGKA PENGUJIAN PENURUNAN NILAI (PSAK 48 / IAS 36)</text>
  
  <!-- Carrying Value -->
  <rect x="30" y="55" width="200" height="70" rx="8" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="130" y="80" fill="#f8fafc" font-size="11.5" font-weight="700" text-anchor="middle">Nilai Tercatat (Carrying Amount)</text>
  <text x="130" y="102" fill="#94a3b8" font-size="10" text-anchor="middle">Cost - Akumulasi Depresiasi</text>

  <!-- Recoverable Amount -->
  <rect x="370" y="55" width="280" height="170" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="510" y="80" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">Jumlah Terpulihkan (Recoverable Amount)</text>
  <text x="510" y="100" fill="#cbd5e1" font-size="10.5" font-weight="600" text-anchor="middle">Pilih Nilai yang LEBIH TINGGI (Higher of):</text>
  
  <!-- Sub box 1 -->
  <rect x="385" y="115" width="120" height="90" rx="6" fill="#0f172a" stroke="#38bdf8"/>
  <text x="445" y="135" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. FVLCD</text>
  <text x="445" y="155" fill="#94a3b8" font-size="9" text-anchor="middle">Nilai Wajar</text>
  <text x="445" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">Dikurangi Biaya</text>
  <text x="445" y="185" fill="#94a3b8" font-size="9" text-anchor="middle">Pelepasan</text>

  <!-- Sub box 2 -->
  <rect x="520" y="115" width="120" height="90" rx="6" fill="#0f172a" stroke="#34d399"/>
  <text x="580" y="135" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">2. Value in Use</text>
  <text x="580" y="155" fill="#94a3b8" font-size="9" text-anchor="middle">Present Value</text>
  <text x="580" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">Arus Kas Masa</text>
  <text x="580" y="185" fill="#94a3b8" font-size="9" text-anchor="middle">Depan Operasi</text>

  <!-- Impairment Loss Condition -->
  <rect x="30" y="145" width="200" height="80" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>
  <text x="130" y="170" fill="#fecaca" font-size="11" font-weight="700" text-anchor="middle">RUGI PENURUNAN NILAI</text>
  <text x="130" y="190" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Jika Carrying &gt; Recoverable</text>
  <text x="130" y="208" fill="#fca5a5" font-size="9" font-weight="600" text-anchor="middle">Loss = Carrying - Recoverable</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Penurunan Nilai Aset (Impairment), Hak Tanah & Penyajian',
  ref: 'Kieso IFRS 5e Ch. 11 | PSAK 48, ISAK 25',
  intro: 'Modul Pembelajaran Mendalam AKM II TM 4: Memahami logika pengujian penurunan nilai aset (PSAK 48), penentuan Recoverable Amount (Higher of FVLCD vs Value in Use), penjurnalan rugi penurunan nilai, batas pembalikan nilai (reversal), alokasi CGU, serta analisis rasio efisiensi aset tetap.',
  objectives: [
    'Mengidentifikasi indikasi internal dan eksternal penurunan nilai aset.',
    'Menentukan Jumlah Terpulihkan (Recoverable Amount) sebagai nilai tertinggi antara Fair Value Less Costs of Disposal vs Value in Use.',
    'Menghitung dan menjurnal Rugi Penurunan Nilai (Loss on Impairment).',
    'Menghitung beban depresiasi baru setelah penurunan nilai dan menguasai batas atas Pembalikan Penurunan Nilai (Reversal).',
    'Memahami alokasi penurunan nilai pada Unit Penghasil Kas (Cash-Generating Unit - CGU) dan kekhususan Goodwill.',
    'Menganalisis kinerja efisiensi aset tetap menggunakan Rasio Perputaran Aset (Asset Turnover Ratio) dan ROA.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Alur Logika Pengujian Penurunan Nilai Sesuai PSAK 48',
      svg: SVG_IMPAIRMENT_FLOW,
      caption: 'Gambar 4.1: Penentuan jumlah terpulihkan dan pengakuan rugi penurunan nilai.'
    },

    { kind: 'h2', text: '1. Indikasi & Kapan Uji Penurunan Nilai Dilakukan (PSAK 48)' },
    {
      kind: 'p',
      text: 'Pada setiap akhir periode pelaporan, entitas wajib menilai apakah terdapat **indikasi** bahwa aset tetap mengalami penurunan nilai. Jika terdapat indikasi, entitas harus mengestimasi **Jumlah Terpulihkan (Recoverable Amount)** dari aset tersebut.'
    },
    {
      kind: 'table',
      headers: ['Sumber Informasi', 'Indikasi Penurunan Nilai (Impairment Indicators)'],
      rows: [
        ['1. Sumber Eksternal', '• Penurunan nilai pasar aset yang signifikan melampaui efek berlalunya waktu.\n• Perubahan signifikan yang merugikan dalam lingkungan teknologi, pasar, ekonomi, atau hukum.\n• Kenaikan suku bunga pasar yang meningkatkan tingkat diskonto dalam perhitungan Nilai Pakai.'],
        ['2. Sumber Internal', '• Bukti keusangan (obsolescence) atau kerusakan fisik aset.\n• Perubahan signifikan dalam cara penggunaan aset (misal: aset menganggur atau rencana restrukturisasi/penghentian operasi).\n• Bukti dari laporan internal bahwa kinerja ekonomik aset lebih buruk dari yang diharapkan.']
      ],
      caption: 'Tabel 4.1: Indikator internal dan eksternal penurunan nilai aset menurut PSAK 48.'
    },

    { kind: 'h2', text: '2. Pengukuran Jumlah Terpulihkan (Recoverable Amount)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Aturan Emas PSAK 48 / IAS 36',
      text: 'Jumlah Terpulihkan (**Recoverable Amount**) adalah nilai yang **LEBIH TINGGI (HIGHER OF)** antara:\n1. **Nilai Wajar Dikurangi Biaya Pelepasan (Fair Value Less Costs of Disposal - FVLCD)**: Jumlah yang dapat dihasilkan dari penjualan aset dalam transaksi wajar antara pihak yang berkeinginan dikurangi biaya pelepasan langsung; DAN\n2. **Nilai Pakai (Value in Use - VIU)**: Nilai Sekarang (Present Value) dari estimasi arus kas masa depan yang diharapkan akan dihasilkan dari pemakaian aset dan dari pelepasannya pada akhir masa manfaat.'
    },
    {
      kind: 'formula',
      text: '\\text{Rugi Penurunan Nilai (Loss on Impairment)} = \\text{Nilai Tercatat (Carrying Amount)} - \\text{Jumlah Terpulihkan (Recoverable Amount)}',
      note: 'Rugi penurunan nilai diakui segera di Laba Rugi periode berjalan dan mengkredit Akumulasi Penurunan Nilai (kontra akun aset).'
    },

    CASE_IMPAIRMENT_TEST,

    { kind: 'h2', text: '3. Aturan Pembalikan Penurunan Nilai (Reversal of Impairment Loss)' },
    {
      kind: 'p',
      text: 'Jika pada periode-periode berikutnya kondisi ekonomi membaik dan terdapat pembalikan indikasi penurunan nilai, PSAK 48 mengizinkan pemulihan nilai dengan aturan ketat:'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: 'Batas Atas Pembalikan (Ceiling of Reversal)',
      text: 'Nilai tercatat aset setelah pemulihan **TIDAK BOLEH MELEBIHI** nilai tercatat yang seharusnya dihitung (setelah dikurangi depresiasi normal) jika pada tahun-tahun sebelumnya **TIDAK PERNAH TERJADI PENURUNAN NILAI**.\n\n*Pengecualian Mutlak:* Penurunan nilai atas **Goodwill TIDAK PERNAH BOLEH DIBALIK** dalam kondisi apa pun!'
    },

    { kind: 'h2', text: '4. Unit Penghasil Kas (Cash-Generating Unit - CGU)' },
    {
      kind: 'p',
      text: 'Jika suatu aset individual tidak menghasilkan arus kas masuk yang independen dari aset lain, uji penurunan nilai dilakukan pada tingkat **Unit Penghasil Kas (CGU)** — yaitu kelompok aset terkecil yang dapat menghasilkan arus kas independen.'
    },
    {
      kind: 'ul',
      items: [
        '**Prioritas 1**: Rugi penurunan nilai CGU dialokasikan pertama kali untuk mengeliminasi **Goodwill** yang dialokasikan pada CGU tersebut hingga bernilai nol.',
        '**Prioritas 2**: Sisa rugi penurunan nilai dialokasikan secara **proporsional (pro-rata)** ke seluruh aset lain dalam CGU berdasarkan nilai buku relatifnya.'
      ]
    },

    { kind: 'h2', text: '5. Analisis Rasio Efisiensi Aset Tetap' },
    {
      kind: 'table',
      headers: ['Rasio Finansial', 'Rumus Perhitungan', 'Interpretasi Manajerial'],
      rows: [
        ['Rasio Perputaran Aset Tetap (Fixed Asset Turnover)', 'Penjualan Bersih / Rata-rata Aset Tetap Bersih', 'Mengukur seberapa efisien perusahaan memanfaatkan kapasitas aset tetapnya untuk menghasilkan penjualan.'],
        ['Marjin Laba Bersih (Profit Margin)', 'Laba Bersih / Penjualan Bersih', 'Mengukur efisiensi laba dari setiap rupiah omzet penjualan.'],
        ['Imbal Hasil atas Aset (Return on Assets - ROA)', 'Laba Bersih / Rata-rata Total Aset', 'Mengukur efektivitas total aset dalam mencetak profitabilitas (ROA = Asset Turnover × Profit Margin).']
      ],
      caption: 'Tabel 4.2: Formula rasio analisis pemanfaatan aset tetap.'
    },

    { kind: 'h2', text: '6. Rangkuman & Kunci Penguasaan Ujian TM 4' },
    {
      kind: 'ul',
      items: [
        '**Recoverable Amount**: Selalu pilih yang **LEBIH TINGGI** antara FVLCD vs Value in Use.',
        '**Impairment Loss**: Terjadi jika Nilai Buku > Recoverable Amount; selisihnya diakui di Laba Rugi.',
        '**Depresiasi Pasca-Impairment**: Dihitung dari nilai buku baru (Recoverable Amount) dibagi sisa umur ekonomis.',
        '**Pembalikan Nilai**: Dibatasi maksimal sebesar nilai buku historis tanpa impairment.',
        '**Goodwill Impairment**: Bersifat permanen dan tidak boleh dibalik.'
      ]
    }
  ]
};