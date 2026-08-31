import type { Reading } from '../../../types';

const SVG_TER_CATEGORIES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TIGA KATEGORI TARIF EFEKTIF RATA-RATA (TER BULANAN - PP NO. 58/2023)</text>
  
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="middle">1. TER Kategori A</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Status PTKP:</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">• TK/0 (PTKP Rp 54jt)</text>
  <text x="125" y="148" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">• TK/1 (PTKP Rp 58,5jt)</text>
  <text x="125" y="166" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">• K/0 (PTKP Rp 58,5jt)</text>
  <text x="125" y="186" fill="#7dd3fc" font-size="9.5" text-anchor="middle">Tarif: 0% s.d 34%</text>

  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">2. TER Kategori B</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Status PTKP:</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">• TK/2 &amp; K/1 (Rp 63jt)</text>
  <text x="340" y="148" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">• TK/3 &amp; K/2 (Rp 67,5jt)</text>
  <text x="340" y="166" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">Tanggungan Menengah</text>
  <text x="340" y="186" fill="#6ee7b7" font-size="9.5" text-anchor="middle">Tarif: 0% s.d 34%</text>

  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f59e0b" font-size="12" font-weight="700" text-anchor="middle">3. TER Kategori C</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Status PTKP:</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#fca5a5" font-size="10.5" font-weight="700" text-anchor="middle">• K/3 (PTKP Rp 72jt)</text>
  <text x="555" y="150" fill="#fca5a5" font-size="10" text-anchor="middle">Kawin + 3 Tanggungan</text>
  <text x="555" y="168" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Tanggungan Maksimal)</text>
  <text x="555" y="186" fill="#fde68a" font-size="9.5" text-anchor="middle">Tarif: 0% s.d 34%</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Konsep Pemotongan PPh 21/26 Terbaru (PP 58/2023 & PMK 168/2023) & Pajak Natura (PMK 66/2023)',
  ref: 'UU HPP | PP 58/2023 | PMK No. 168/2023 | PMK No. 66/2023 Natura',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 9: Menguasai reformasi fundamental pemotongan PPh Pasal 21 berdasarkan PP No. 58/2023 dan PMK No. 168/2023 (Penerapan Skema Tarif Efektif Rata-Rata / TER Bulanan Kategori A, B, C dan TER Harian), pemajakan imbalan dalam bentuk Natura dan/atau Kenikmatan (Fringe Benefits Tax - PMK 66/2023), serta hak dan kewajiban pemotong pajak.',
  objectives: [
    'Menjelaskan latar belakang penyederhanaan pemotongan PPh 21 melalui skema TER (Tarif Efektif Rata-Rata).',
    'Mengklasifikasikan status PTKP karyawan ke dalam 3 Kategori TER Bulanan (Kategori A, Kategori B, dan Kategori C).',
    'Menerapkan batas tarif TER Harian untuk pegawai tidak tetap.',
    'Menjelaskan konsep pemajakan Natura dan Kenikmatan menurut UU HPP dan PMK No. 66/2023.',
    'Mengidentifikasi daftar natura yang dikecualikan dari objek PPh (makanan/minuman bagi seluruh pegawai, natura di daerah tertentu, peralatan keselamatan kerja, fasilitas tempat tinggal/kendaraan dengan batasan tertentu).',
    'Menjelaskan tata cara pelaporan SPT Masa PPh 21/26 melalui aplikasi e-Bupot 21/26 DJP.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Kategori TER Bulanan PPh Pasal 21 berdasarkan Status PTKP',
      svg: SVG_TER_CATEGORIES,
      caption: 'Gambar 9.1: Pemetaan status perkawinan dan jumlah tanggungan terhadap tabel TER PP 58/2023.'
    },

    { kind: 'h2', text: '1. Skema Pemotongan PPh 21 Terbaru (PP 58/2023 & PMK 168/2023)' },
    {
      kind: 'table',
      headers: ['Masa Pajak', 'Metode Penghitungan PPh 21 Pegawai Tetap', 'Dasar Pengenaan Pajak (DPP)'],
      rows: [
        ['**Masa Januari s.d November** (Masa Selain Masa Pajak Terakhir)', 'Menggunakan **Tarif Efektif Bulanan (TER)** sesuai Kategori PTKP A/B/C.', '**Penghasilan Bruto Sebulan** (Gaji + Tunjangan + Premi BPJS dibayar kantor + Bonus bulan berjalan).'],
        ['**Masa Desember** (Masa Pajak Terakhir)', 'Menggunakan **Tarif Progresif Pasal 17 ayat (1) huruf a UU PPh** disetahunkan, kemudian dikurangi total PPh 21 yang sudah dipotong pada masa Jan-Nov.', '**Penghasilan Kena Pajak (PKP) Setahun** (Bruto Setahun - Biaya Jabatan maks Rp 6jt - Iuran Pensiun/JHT karyawan - PTKP).']
      ],
      caption: 'Tabel 9.1: Mekanisme dua tahap penghitungan PPh 21 pegawai tetap.'
    },

    { kind: 'h2', text: '2. Pemajakan Natura dan/atau Kenikmatan (PMK 66/2023)' },
    {
      kind: 'p',
      text: 'Sejak berlakunya UU HPP, natura (penggantian dalam bentuk barang) dan kenikmatan (fasilitas pelayanan) merupakan **Objek PPh bagi penerima dan Deductible Expense bagi pemberi kerja**, kecuali yang dikecualikan oleh peraturan perundang-undangan:'
    },
    {
      kind: 'table',
      headers: ['Jenis Fasilitas / Natura', 'Kriteria Pengecualian dari Objek PPh (Non-Taxable)'],
      rows: [
        ['1. Makanan & Minuman', 'Disediakan untuk **seluruh pegawai** di tempat kerja, atau kupon makan bagi pegawai dinas luar/lembur (maks Rp 2jt/bln).'],
        ['2. Natura di Daerah Tertentu', 'Tempat tinggal, pelayanan kesehatan, pendidikan, dan transportasi di daerah terpencil yang ditetapkan DJP.'],
        ['3. Keharusan Pelaksanaan Pekerjaan', 'Pakaian seragam satpam/pabrik, peralatan K3 keselamatan kerja, vaksinasi, dan akomodasi awak kapal.'],
        ['4. Fasilitas Tempat Tinggal Tertentu', 'Fasilitas mess/asrama/pondokan komunal non-apartemen mewah yang disewakan untuk pegawai.'],
        ['5. Fasilitas Kendaraan Dinas', 'Fasilitas mobil dinas bagi pegawai yang tidak memiliki saham dan peredaran bruto tertentu.']
      ],
      caption: 'Tabel 9.2: Batasan fasilitas natura yang bebas pajak menurut PMK 66/2023.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 9' },
    {
      kind: 'ul',
      items: [
        '**TER Hanya untuk Masa Jan-Nov**: TER dirancang untuk menyederhanakan perhitungan bulanan tanpa harus menghitung biaya jabatan dan PTKP setiap bulan.',
        '**Masa Desember Wajib Pasal 17**: Pelunasan di bulan Desember memastikan total pajak setahun tepat akurat sesuai ketentuan UU PPh.',
        '**Natura Deductible**: Bagi perusahaan, seluruh biaya natura yang berhubungan dengan 3M kini **boleh dibiayakan (Deductible)** di laporan SPT Badan!'
      ]
    }
  ]
};