import type { Reading } from '../../../types';
import { CASE_VAT_REFUND_CARBON_TAX } from '../pjk2PracticeCases';

const SVG_RESTITUSI_CARBON = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk14" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="resGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="carbGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk14)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PROSEDUR RESTITUSI PPN &amp; PENGENALAN PAJAK KARBON (UU HPP NO. 7/2021)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">RESTITUSI &amp; CARBON</text>

  <!-- Left: Restitusi PPN -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#resGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="10.5" font-weight="800">1. JALUR RESTITUSI PPN (LEBIH BAYAR)</text>
    
    <text class="text-accent-blue" x="14" y="52" fill="#38bdf8" font-size="8.5" font-weight="700">A. Jalur Pemeriksaan Rutin (Pasal 17B UU KUP):</text>
    <text class="svg-text" x="14" y="66" fill="#cbd5e1" font-size="7.5">• Melalui audit pemeriksaan lengkap kantor pajak jangka waktu maks 12 bulan</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="7.5">• Berisiko terbit SKPKB jika ditemukan koreksi pembukuan</text>

    <text class="text-accent-green" x="14" y="104" fill="#34d399" font-size="8.5" font-weight="700">B. Pengembalian Pendahuluan (Pasal 17C &amp; 17D UU KUP):</text>
    <text class="svg-text" x="14" y="118" fill="#cbd5e1" font-size="7.5">• Jalur Cepat (Golden Taxpayer / PKP Berisiko Rendah)</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="7.5">• Restitusi cair dalam tempo <tspan class="text-accent-green" fill="#34d399" font-weight="700">1 BULAN</tspan> tanpa pemeriksaan awal</text>
    <text class="svg-text" x="14" y="146" fill="#cbd5e1" font-size="7.5">• Syarat: Eksportir, kepatuhan tepat waktu lapor SPT 3 tahun</text>

    <rect class="svg-badge-blue" x="14" y="175" width="367" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="191" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Pengembalian Kelebihan Saldo Kas dari Kas Negara</text>
  </g>

  <!-- Right: Pajak Karbon UU HPP -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#carbGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="16" y="20" fill="#34d399" font-size="10.5" font-weight="800">2. PAJAK KARBON (CARBON TAX - UU HPP BAB VI)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Tarif Minimum:</tspan> Rp 30 per kilogram CO2 ekuivalen (CO2e)</text>
    <text class="svg-text" x="14" y="70" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Subjek Pajak:</tspan> Orang Pribadi atau Badan yang membeli barang yang mengandung karbon atau melakukan aktivitas yang menghasilkan emisi karbon</text>
    <text class="svg-text" x="14" y="100" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-green" fill="#34d399" font-weight="700">Sektor Pilot Project:</tspan> Pembangkit Listrik Tenaga Uap (PLTU) Batubara</text>
    <text class="svg-text" x="14" y="118" fill="#cbd5e1" font-size="8">• Mekanisme Cap-and-Tax (Batas emisi &amp; sertifikat izin emisi)</text>
    <text class="svg-text" x="14" y="136" fill="#cbd5e1" font-size="8">• Mendorong transisi energi hijau &amp; penurunan emisi Gas Rumah Kaca</text>
    
    <rect class="svg-badge-green" x="14" y="175" width="367" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="197" y="191" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Instrumen Fiskal Pengendalian Perubahan Iklim</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Pajak Karbon selaras dengan komitmen Net Zero Emission Indonesia pada Nationally Determined Contribution (NDC) global.</text>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Restitusi PPN, Pemungut PPN (WAPU), Pajak Karbon, & Perdagangan Emisi',
  ref: 'UU KUP Pasal 17C/17D | PMK 209/2021 Restitusi Dipercepat | UU HPP Bab VI Pajak Karbon',
  intro: 'TM 14 membahas instrumen penutup hukum pajak pertambahan nilai dan pemajakan lingkungan: hak Pengembalian Kelebihan Pembayaran Pajak (Restitusi PPN) melalui mekanisme pemeriksaan reguler Pasal 17B (12 bulan) vs Pengembalian Pendahuluan Pasal 17C/17D (1 bulan untuk PKP Berisiko Rendah), mekanisme pemungutan PPN oleh Wajib Pungut (WAPU: Bendahara Pemerintah dan BUMN), serta tinjauan yuridis dan komputasi skema Pajak Karbon (Carbon Tax) menurut Bab VI UU HPP.',
  objectives: [
    'Membedakan prosedur Restitusi PPN Reguler (Pasal 17B KUP) vs Restitusi Dipercepat (Pasal 17C & 17D KUP).',
    'Menjelaskan mekanisme pemungutan PPN oleh WAPU Instansi Pemerintah dan BUMN (Kode Faktur 02 dan 03).',
    'Menjelaskan konsep pemajakan lingkungan: Prinsip Cap-and-Tax dan Cap-and-Trade pada Pajak Karbon.',
    'Menghitung estimasi Pajak Karbon terutang berdasarkan tarif minimum Rp 30 per kilogram CO2e (UU HPP).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 14.1: Mekanisme Restitusi PPN, Pemungut PPN (WAPU), dan Skema Pemajakan Karbon (UU HPP).',
      svg: SVG_RESTITUSI_CARBON
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 17B, 17C, 17D UU KUP s.t.d.t.d UU HPP (Mekanisme Restitusi Pajak)',
      text: '"1. Pasal 17B UU KUP (Restitusi Melalui Pemeriksaan Normal):\n   Direktur Jenderal Pajak setelah melakukan pemeriksaan atas permohonan pengembalian kelebihan pembayaran pajak menerbitkan surat ketetapan pajak paling lama 12 (dua belas) bulan sejak surat permohonan diterima secara lengkap.\n\n2. Pasal 17C UU KUP (Pengembalian Pendahuluan WP Kriteria Tertentu / Golden Taxpayer):\n   Diberikan kepada WP Patuh (tidak pernah terlambat SPT, tidak punya tunggakan pajak, LK diaudit WTP 3 tahun berturut-turut). SKPPKP terbit paling lama 1 bulan untuk PPN atau 3 bulan untuk PPh tanpa pemeriksaan awal.\n\n3. Pasal 17D UU KUP jo PMK 209/2021 (Pengembalian Pendahuluan WP Persyaratan Tertentu):\n   Diberikan untuk lebih bayar skala tertentu: WP Orang Pribadi non-usaha s/d Rp 100 Juta; WP OP pengusaha s/d Rp 100 Juta; WP Badan s/d Rp 1 Miliar; PKP PPN s/d Rp 5 Miliar. SKPPKP terbit dalam waktu 1 bulan tanpa pemeriksaan awal."'
    },
    {
      kind: 'callout',
      variant: 'info',
      title: '📜 Dasar Hukum Otentik: UU No. 7 Tahun 2021 (UU HPP) Bab VI Pasal 13 (Pajak Karbon)',
      text: '"Pasal 13 ayat (1) & (2): Pajak Karbon dikenakan atas emisi karbon yang memberikan dampak negatif bagi lingkungan hidup. Subjek pajak karbon adalah orang pribadi atau badan yang membeli barang yang mengandung karbon dan/atau melakukan aktivitas yang menghasilkan emisi karbon.\n\nPasal 13 ayat (8) & (9): Tarif pajak karbon ditetapkan paling rendah Rp 30,00 (tiga puluh rupiah) per kilogram karbon dioksida ekuivalen (CO2e) atau satuan yang setara. Prinsip pengenaan pajak karbon mengadopsi mekanisme Cap and Tax dan Cap and Trade yang diselaraskan dengan pasar karbon (carbon market)."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 14'
    },
    {
      kind: 'table',
      headers: ['Topik Perpajakan Lanjutan', 'Dasar Regulasi Pokok', 'Prosedur Administrasi', 'Kriteria Kelayakan / Tarif'],
      rows: [
        ['Restitusi PPN Reguler', 'Pasal 17B UU KUP', 'Melalui proses pemeriksaan lapangan mendalam (Pemeriksaan Lengkap).', 'Batas waktu SKPLB maksimal 12 bulan sejak permohonan lengkap.'],
        ['Restitusi Pengembalian Pendahuluan', 'Pasal 17C / 17D jo PMK 209/2021', 'Tanpa pemeriksaan di depan; penerbitan SKPPKP hanya melalui penelitian formal.', 'Batas waktu 1 bulan; diberikan bagi PKP Berisiko Rendah & WP Patuh.'],
        ['Pemungut PPN Bendaharawan', 'PMK 231/PMK.03/2019', 'PPN tidak dibayarkan ke rekanan tetapi disetor langsung ke Kas Negara.', 'Kode faktur 02; transaksi di atas Rp 2.000.000.'],
        ['Pemungut PPN BUMN Tertentu', 'PMK 8/PMK.03/2021', 'BUMN (Pertamina, PLN, Telkom, Bank Mandiri) memungut PPN rekanan.', 'Kode faktur 03; transaksi penyerahan BKP/JKP di atas Rp 10.000.000.'],
        ['Pajak Karbon (Carbon Tax)', 'UU No. 7 Tahun 2021 Bab VI', 'Dikenakan atas emisi karbon yang melebihi batas batas emisi (Cap).', 'Tarif minimum Rp 30 per kg CO2e (Rp 30.000 per ton CO2e).']
      ],
      caption: 'Tabel 14.0: Matriks restitusi PPN, pemungut WAPU, dan skema pajak karbon.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Pajak Karbon & Transaksi WAPU'
    },
    {
      kind: 'formula',
      text: `\\text{Pajak Karbon Terutang} = \\max(0, \\text{Emisi Riil} - \\text{Cap Emisi yang Ditetapkan}) \\times \\text{Tarif Pajak Karbon (Min Rp 30 / kg CO2e)}
\\text{Transaksi Rekanan ke Bendaharawan (WAPU Kode 02)}:
\\text{Kas yang Diterima Rekanan} = \\text{Harga Jual Tanpa PPN} - \\text{PPh 22 Terpotong (1,5\\%)} \\quad \\text{(PPN 11\\% Disetor Langsung oleh KPPN)}`,
      note: 'Penyerahan kepada Pemungut WAPU tidak menghasilkan kas penerimaan PPN bagi rekanan penjual; rekanan hanya menerima harga pokok barang dikurangi PPh 22.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Transaksi Penjualan Komputer ke Dinas Pendidikan (WAPU)',
      prompt: 'PT Komputer Nusantara (PKP) menjual 10 unit laptop seharga Rp 100.000.000 (tidak termasuk PPN) kepada Dinas Pendidikan Kabupaten yang didanai APBD. Berapa PPN yang dipungut bendahara dinas, berapa PPh 22 yang dipotong, dan berapa kas bersih yang diterima PT Komputer Nusantara?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**PPN Terutang (Kode Faktur 02 - WAPU)**: 11% × Rp 100.000.000 = **Rp 11.000.000** (PPN ini disetor langsung oleh Bendahara Dinas ke Kas Negara menggunakan NTPN; PT Komputer Nusantara TIDAK menerima uang PPN ini).',
            '**Pemotongan PPh Pasal 22 Bendaharawan**: 1,5% × Rp 100.000.000 = **Rp 1.500.000**.',
            '**Kas Bersih yang Diterima PT Komputer Nusantara**:\nHarga Jual (Rp 100.000.000) - PPh 22 (Rp 1.500.000) = **Rp 98.500.000**.',
            '**Catatan Faktur**: Faktur Pajak diterbitkan dengan kode transaksi **020.000-XX.XXXXXXXX**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 14'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Restitusi 17B vs 17C KUP', 'Pembedaan jangka waktu 12 bulan (pemeriksaan) vs 1 bulan (pendahuluan).', 'Mampu mengevaluasi syarat kelayakan restitusi dipercepat.'],
        ['2', 'Pemungut PPN WAPU', 'Mekanisme kas dan pembuatan kode faktur 02 (pemerintah) dan 03 (BUMN).', 'Mampu menghitung kas bersih transaksi penjualan ke instansi negara.'],
        ['3', 'Skema Pajak Karbon UU HPP', 'Prinsip Cap and Tax, batas ambang batas emisi, dan integrasi IDXCarbon.', 'Mampu mengkalkulasi kewajiban pajak karbon korporasi.']
      ],
      caption: 'Tabel 14.2: Peta penguasaan submateri TM 14 Perpajakan II.'
    },
    CASE_VAT_REFUND_CARBON_TAX,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Sanksi Kenaikan Jika Restitusi Dipercepat Salah**: Jika di kemudian hari dilakukan pemeriksaan dan diterbitkan SKPKB atas kelebihan restitusi Pasal 17C/17D, Wajib Pajak dikenai sanksi kenaikan bunga per bulan sesuai suku bunga acuan Menkeu.',
        '**Faktur WAPU Tidak Menghasilkan Utang PPN**: Bagi PKP penjual, penyerahan dengan kode 02 dan 03 tidak menimbulkan kewajiban setor PPN karena PPN-nya disetor langsung oleh pemungut kasda/kppn.',
        '**Pajak Karbon dan Sertifikat SPE**: Pembayar pajak karbon dapat mengurangi kewajiban pajaknya dengan membeli Sertifikat Pengurangan Emisi (SPE) dari bursa karbon resmi Indonesia.'
      ]
    }
  ]
};
