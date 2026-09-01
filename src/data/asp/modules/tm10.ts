import type { Reading } from '../../../types';
import { CASE_VALUE_FOR_MONEY_EVAL } from '../aspPracticeCases';

const SVG_VFM_TRIANGLE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PARADIGMA VALUE FOR MONEY (3E): EKONOMI, EFISIENSI, &amp; EFEKTIVITAS</text>
  
  <rect x="35" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">1. EKONOMI (HEMAT)</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Realisasi Biaya vs Anggaran:</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pemerolehan input biaya</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">dengan harga paling wajar</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tanpa kompromi mutu</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Input Terhemat</text>

  <rect x="250" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">2. EFISIENSI (BERDAYAGUNA)</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Hubungan Input vs Output:</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Output maksimal per unit input</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Atau input minimal per output</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Produktivitas layanan</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Biaya per Unit Rendah</text>

  <rect x="465" y="55" width="180" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">3. EFEKTIVITAS (BERHASIL)</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Hubungan Output vs Outcome:</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Capaian sasaran tujuan akhir</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Manfaat riil bagi warga</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kepuasan publik terjamin</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Target Sasaran Tercapai</text>
</svg>`;

export const TM10_READING: Reading = {
  tm: 10,
  title: 'Pengukuran Kinerja Organisasi Pemerintah & Paradigma Value for Money (VFM)',
  ref: 'Mardiasmo Ch. 8 | Indikator Kinerja Sektor Publik | Audit Kinerja BPK: 3E (Ekonomi, Efisiensi, Efektivitas)',
  intro: 'TM 10 membahas sistem pengukuran kinerja sektor publik yang berfokus pada Paradigma Value for Money (VFM): prinsip 3E (Ekonomi, Efisiensi, dan Efektivitas) ditambah Equity dan Equality, penyusunan Indikator Kinerja Utama (IKU), pengukuran Indeks Kepuasan Masyarakat (IKM), serta penyusunan Laporan Kinerja Instansi Pemerintah (LKjIP) berbasis Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP).',
  objectives: [
    'Mendefinisikan dan menghitung rasio Ekonomi, rasio Efisiensi, dan rasio Efektivitas program publik.',
    'Menjelaskan perbedaan mendasar antara Efisiensi (Input vs Output) dan Efektivitas (Output vs Outcome).',
    'Menyusun kerangka pengukuran kinerja instansi pemerintah (SAKIP / LKjIP).',
    'Menganalisis penyebab program publik yang efisien tetapi tidak efektif (atau sebaliknya).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 10.1: Tiga Pilar Paradigma Value for Money (VFM) Pengukuran Kinerja Publik.',
      svg: SVG_VFM_TRIANGLE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 10'
    },
    {
      kind: 'table',
      headers: ['Pilar Value for Money', 'Formula Pengukuran', 'Kriteria Penilaian Kinerja', 'Fokus Pengendalian'],
      rows: [
        ['Ekonomi (Economy)', '$\\frac{\\text{Realisasi Biaya Input}}{\\text{Anggaran Biaya Input}} \\times 100\\%$', '$< 100\\%$ = Ekonomis / Berhemat; $> 100\\%$ = Boros.', 'Pengadaan bahan baku & harga satuan barang/jasa.'],
        ['Efisiensi (Efficiency)', '$\\frac{\\text{Output Riil yang Dihasilkan}}{\\text{Input Biaya yang Digunakan}}$', 'Meningkat jika output naik dengan biaya sama, atau biaya turun dengan output sama.', 'Proses operasional & rasio biaya per unit output.'],
        ['Efektivitas (Effectiveness)', '$\\frac{\\text{Realisasi Hasil (Outcome)}}{\\text{Target Hasil yang Ditetapkan}} \\times 100\\%$', '$\\ge 100\\%$ = Efektif; $< 100\\%$ = Kurang/Tidak Efektif.', 'Pencapaian tujuan strategis & kepuasan masyarakat.'],
        ['Keadilan (Equity & Equality)', 'Pemerataan alokasi belanja bagi kelompok rentan/marjinal.', 'Apakah seluruh warga memperoleh akses pelayanan publik yang setara?', 'Distribusi spasial dan kelompok penerima manfaat.']
      ],
      caption: 'Tabel 10.0: Matriks pilar pengukuran kinerja Value for Money.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Evaluasi Kinerja Program Publik'
    },
    {
      kind: 'formula',
      text: `\\text{Rasio Ekonomi} = \\frac{\\text{Realisasi Belanja}}{\\text{Anggaran Belanja}} \\times 100\\% \\quad \\text{(Nilai < 100% Menandakan Penghematan Kas)}
\\text{Biaya per Unit Output} = \\frac{\\text{Total Biaya Realisasi}}{\\text{Jumlah Unit Output Fisik}} \\quad \\text{(Semakin Rendah, Semakin Efisien)}
\\text{Rasio Efektivitas} = \\frac{\\text{Realisasi Outcome}}{\\text{Target Outcome}} \\times 100\\% \\quad \\text{(Nilai } \\ge 100\\% \\text{ Menandakan Target Tercapai)}`,
      note: 'Program publik yang paling ideal adalah program yang memenuhi ketiga syarat sekaligus: Ekonomis saat membeli input, Efisien dalam memproses output, dan Efektif dalam menghasilkan outcome bagi rakyat.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Analisis Kinerja Program Pelatihan Kerja Dinas Tenaga Kerja',
      prompt: 'Dinas Tenaga Kerja menganggarkan pelatihan montir Rp 200 Juta untuk melatih 100 pemuda dengan target 80 orang terserap kerja. Realisasi: biaya dihabiskan Rp 180 Juta, 100 pemuda lulus pelatihan, dan 85 orang langsung diterima kerja. Hitung rasio ekonomi, efisiensi biaya per orang, dan rasio efektivitas program!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Rasio Ekonomi**: $\\frac{180 \\text{ Juta}}{200 \\text{ Juta}} \\times 100\\% = \\mathbf{90,0\\%}$ $\\rightarrow$ **Ekonomis** (Hemat Rp 20 Juta).',
            '**2. Efisiensi Biaya per Unit**: $\\frac{Rp 180.000.000}{100 \\text{ Peserta}} = \\mathbf{Rp 1.800.000 \\text{ per peserta}}$ (Lebih efisien dibanding target awal Rp 2.000.000 per orang).',
            '**3. Rasio Efektivitas**: $\\frac{85 \\text{ Orang Terserap}}{80 \\text{ Orang Target}} \\times 100\\% = \\mathbf{106,25\\%}$ $\\rightarrow$ **Sangat Efektif** (Melampaui target penyerapan kerja).',
            '**Kesimpulan**: Program ini berkinerja unggul karena memenuhi kriteria Value for Money secara sempurna (Ekonomis, Efisien, dan Efektif).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 10'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Prinsip Value for Money (3E)', 'Pengukuran rasio ekonomi, efisiensi, dan efektivitas kuantitatif.', 'Mampu mengkalkulasi skor kinerja program sektor publik.'],
        ['2', 'Indikator Input, Output, Outcome', 'Diferensiasi indikator antara barang fisik vs dampak kesejahteraan sosial.', 'Mampu merancang indikator kinerja utama dinas pemerintah.'],
        ['3', 'Sistem Akuntabilitas Kinerja (SAKIP)', 'Penyusunan dokumen Perjanjian Kinerja (PK) dan laporan LKjIP.', 'Mampu mengevaluasi keterkaitan sasaran strategis kepala daerah.']
      ],
      caption: 'Tabel 10.2: Peta penguasaan submateri TM 10 Akuntansi Sektor Publik.'
    },
    CASE_VALUE_FOR_MONEY_EVAL,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Efisien Belum Tentu Efektif**: Sebuah puskesmas bisa sangat efisien mengobati 1.000 pasien dengan biaya murah, tetapi gagal secara efektivitas jika wabah penyakit menular tetap meluas di lingkungan warga.',
        '**SAKIP Mewajibkan Keterkaitan Kinerja**: SAKIP menuntut setiap rupiah belanja di DPA dapat dipertanggungjawabkan hasilnya terhadap Indikator Kinerja Utama (IKU) Kepala Daerah.',
        '**Audit Kinerja BPK RI**: Berbeda dengan audit keuangan yang memberikan opini wajar tanpa pengecualian (WTP), audit kinerja BPK RI menilai kehematan, efisiensi, dan efektivitas operasional program pemerintah.'
      ]
    }
  ]
};
