import type { Reading } from '../../../types';
import { CASE_VAT_REFUND_CARBON_TAX } from '../pjk2PracticeCases';

const SVG_RESTITUSI_CARBON = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">RESTITUSI PPN, PEMUNGUT WAPU, &amp; SKEMA PAJAK KARBON (UU HPP NO. 7/2021)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">RESTITUSI PPN</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Kelebihan Bayar Pajak):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pasal 17C KUP: PKP Kriteria Tertentu</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pasal 17D KUP: Nilai Lebih Bayar Kecil</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pengembalian Pendahuluan 1 Bulan</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Restitusi Dipercepat</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">PEMUNGUT WAPU</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Wajib Pungut Khusus):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Instansi Pemerintah (KPPN / Kasda)</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• BUMN Tertentu (Pertamina, PLN)</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PPN Disetor Langsung ke Kas Negara</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Kode Faktur 02 &amp; 03</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">PAJAK KARBON</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Bab VI UU HPP No. 7/2021):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Prinsip Cap and Tax</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tarif Min: Rp 30 / kg CO2e</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Terhubung Bursa Karbon (IDXCarbon)</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Instrumen Iklim Masa Depan</text>
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
