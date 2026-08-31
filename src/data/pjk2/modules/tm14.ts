import type { Reading } from '../../../types';

const SVG_CARBON_TAX = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PAJAK KARBON &amp; SKEMA PASAR EMISI KARBON (UU HPP / UU NO. 7 TAHUN 2021)</text>
  
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Dasar Pajak Karbon</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">UU HPP Bab VI</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Subjek: OP &amp; Badan pembeli</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">  barang mengandung karbon /</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">  penghasil emisi karbon</text>
  <text x="125" y="186" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Prinsip Polluter-Pays</text>

  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Tarif &amp; Ambang Batas</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Cap-and-Tax System</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Tarif Min: Rp 30 / kg CO2e</text>
  <text x="340" y="148" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">(Rp 30.000 / ton CO2e)</text>
  <text x="340" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Dikenakan atas kelebihan</text>
  <text x="340" y="186" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">  di atas batas Cap emisi</text>

  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Perdagangan Karbon</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Carbon Offset &amp; Trading</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Bursa Karbon Indonesia (IDXCarbon)</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Sertifikat Penurunan Emisi (SPE)</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Pengurangan beban pajak</text>
  <text x="555" y="186" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Transisi Energi Hijau</text>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Restitusi PPN, Pemungut PPN (WAPU), Pajak Karbon, & Perdagangan Emisi',
  ref: 'UU PPN & UU HPP Bab VI Pajak Karbon | PMK 231/2019 jo. PMK 59/2022 WAPU Instansi',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 14: Menguasai mekanisme pengembalian kelebihan pembayaran PPN (*Restitusi PPN* - Pengembalian Pendahuluan Pasal 17C/17D KUP & PMK 209/2021 vs Pemeriksaan Rutin), penunjukan Pemungut PPN (*Wajib Pungut / WAPU*: Instansi Pemerintah, BUMN, Kontraktor Migas), serta rezim regulasi Pajak Karbon (*Carbon Tax*) menurut UU HPP dan keterkaitannya dengan Bursa Perdagangan Karbon (*Carbon Trading* / IDXCarbon).',
  objectives: [
    'Membedakan mekanisme Restitusi PPN melalui Pemeriksaan Lapangan vs Pengembalian Pendahuluan Kelebihan Pajak (Pasal 17C WP Kriteria Tertentu, Pasal 17D WP Persyaratan Tertentu, dan PKP Berisiko Rendah Pasal 9 ayat 4c).',
    'Menjelaskan kewajiban Pemungut PPN (WAPU): Instansi Pemerintah (PMK 59/2022), BUMN (PMK 8/2021), dan Pihak Lain yang Ditunjuk.',
    'Menjelaskan dasar hukum, subjek, objek, dan tarif Pajak Karbon menurut Bab VI UU Harmonisasi Peraturan Perpajakan (UU HPP).',
    'Menghitung Pajak Karbon berbasis sistem *Cap-and-Tax* (Tarif minimal Rp 30 per kilogram karbon dioksida ekuivalen / CO2e).',
    'Menganalisis perlakuan pajak atas perdagangan Sertifikat Pengurangan Emisi Gas Rumah Kaca (SPE-GRK) di Bursa Karbon Indonesia.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Mekanisme Pajak Karbon dan Integrasi Bursa Perdagangan Karbon',
      svg: SVG_CARBON_TAX,
      caption: 'Gambar 14.1: Penerapan instrumen nilai ekonomi karbon (NEK) untuk mencapai target net-zero emission.'
    },

    { kind: 'h2', text: '1. Mekanisme Restitusi PPN: Percepatan vs Pemeriksaan' },
    {
      kind: 'table',
      headers: ['Jalur Pengembalian Kelebihan PPN', 'Dasar Hukum KUP / PPN', 'Jangka Waktu Penyelesaian', 'Karakteristik & Syarat Utama'],
      rows: [
        ['1. Pengembalian Pendahuluan (Restitusi Cepat Tanpa Pemeriksaan)', 'Pasal 17C KUP (WP Kriteria Tertentu / Patuh)', '**Paling lama 1 Bulan** sejak permohonan diterima lengkap.', 'Diberikan melalui Surat Keputusan Pengembalian Pendahuluan Kelebihan Pajak (SKPPKP) tanpa pemeriksaan awal (dapat diuji di kemudian hari).'],
        ['2. Restitusi PKP Berisiko Rendah', 'Pasal 9 ayat (4c) UU PPN jo. PMK 209/2021', '**Paling lama 1 Bulan**', 'Berlaku bagi eksportir BKP/JKP, penyerahan ke WAPU, dan penyerahan tidak dipungut dengan batas lebih bayar hingga Rp 5 Miliar.'],
        ['3. Restitusi Jalur Pemeriksaan Reguler', 'Pasal 17B KUP', '**Paling lama 12 Bulan (1 Tahun)**', 'KPP menerbitkan Surat Perintah Pemeriksaan Pajak (SP2) untuk memeriksa seluruh buku, catatan, dan arus kas/barang sebelum menerbitkan SKPLB.']
      ],
      caption: 'Tabel 14.1: Perbandingan jalur restitusi kelebihan pembayaran PPN.'
    },

    { kind: 'h2', text: '2. Rezim Pemungut PPN (WAPU)' },
    {
      kind: 'table',
      headers: ['Kategori Pemungut PPN (WAPU)', 'Dasar Regulasi PMK', 'Ketentuan Batas Nilai Transaksi & Pengecualian'],
      rows: [
        ['1. Instansi Pemerintah (Kementerian / Lembaga / SKPD)', 'PMK No. 59/PMK.03/2022', 'Wajib memungut PPN atas belanja barang/jasa dengan Faktur Pajak **Kode 02**; **Dikecualikan jika pembayaran $\\le$ Rp 2.000.000** (tidak termasuk PPN).'],
        ['2. Badan Usaha Milik Negara (BUMN Tertentu)', 'PMK No. 8/PMK.03/2021', 'Wajib memungut PPN dengan Faktur Pajak **Kode 03**; **Dikecualikan jika pembayaran $\\le$ Rp 10.000.000** (tidak termasuk PPN).'],
        ['3. Pelaku Usaha Perdagangan Melalui Sistem Elektronik (PMSE)', 'PMK No. 60/PMK.03/2022', 'Penyedia platform digital luar negeri (Netflix, Spotify, Google, Steam) wajib memungut PPN 11% dari pembeli/konsumen di Indonesia.']
      ],
      caption: 'Tabel 14.2: Kewajiban WAPU PPN di Indonesia.'
    },

    { kind: 'h2', text: '3. Pajak Karbon menurut UU HPP (UU No. 7 Tahun 2021)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Ketentuan Pokok Pajak Karbon di Indonesia',
      text: '• **Subjek Pajak**: Orang pribadi atau badan yang membeli barang yang mengandung karbon dan/atau melakukan aktivitas yang menghasilkan emisi karbon.\n• **Tarif Pajak Karbon**: Ditetapkan lebih tinggi atau sama dengan harga karbon di pasar karbon, dengan **tarif minimal sebesar Rp 30,00 per kilogram karbon dioksida ekuivalen ($CO_2e$)** atau setara **Rp 30.000 per ton $CO_2e$**.\n• **Fase Pelaksanaan Pertama**: Diterapkan pada sektor Pembangkit Listrik Tenaga Uap (PLTU) batu bara dengan mekanisme *Cap-and-Tax*.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 14 (Pra-UAS)' },
    {
      kind: 'ul',
      items: [
        '**Restitusi 1 Bulan**: Hanya untuk PKP Berisiko Rendah (Eksportir) atau WP Patuh Pasal 17C.',
        '**Kode Faktur WAPU**: Kode 02 (Instansi Pemerintah) dan Kode 03 (BUMN).',
        '**Cap-and-Tax Karbon**: Wajib Pajak yang menghasilkan emisi di atas batas atas (*Cap*) dapat membeli Sertifikat Penurunan Emisi (SPE) di bursa karbon; sisa emisi yang belum tertutupi sertifikat dikenakan Pajak Karbon.'
      ]
    }
  ]
};