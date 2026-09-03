import type { Reading } from '../../../types';
import { CASE_WITHHOLDING_PPH22_23_UMKM } from '../pjk2PracticeCases';

const SVG_WITHHOLDING_SYSTEM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="w1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="w2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="w3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="w4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk5)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">ARSITEKTUR SISTEM PEMOTONGAN &amp; PEMUNGUTAN PAJAK PENGHASILAN (WITHHOLDING TAX)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">WITHHOLDING TAX</text>

  <!-- 4 Columns Withholding Taxonomy -->
  <!-- 1. PPh 21/26 -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#w1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="97" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">PPH PASAL 21 / 26</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="97" y="53" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle">Objek: Gaji &amp; Imbalan Orang Pribadi</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Pemotong: Pemberi kerja / Badan</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Skema: TER bulanan &amp; Tarif Ps 17</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Pegawai tetap, honorarium dokter,</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  tenaga ahli, konsultan lepas</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Ps 26: WNA bukan subjek pajak DN (20%)</text>
    <rect class="svg-badge-blue" x="10" y="185" width="175" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Pemotongan atas Tenaga Kerja</text>
  </g>

  <!-- 2. PPh 22 -->
  <g transform="translate(245, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#w2)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="97" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">PPH PASAL 22</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="97" y="53" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">Objek: Perdagangan &amp; Impor Barang</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Pemungut: Bea Cukai, BUMN, Bendahara</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Impor (API: 2,5%, Non-API: 7,5%)</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Belanja instansi pemerintah: 1,5%</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Industri tertentu: Semen 0,25%,</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">  Kertas 0,1%, Otomotif 0,45%</text>
    <rect class="svg-badge-green" x="10" y="185" width="175" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Pemungutan Transaksi Komoditas</text>
  </g>

  <!-- 3. PPh 23 -->
  <g transform="translate(455, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#w3)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="97" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">PPH PASAL 23</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="53" fill="#fbbf24" font-size="8" font-weight="800" text-anchor="middle">Objek: Jasa, Modal, &amp; Royalti Badan</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Tarif 2%: Jasa teknik, manajemen,</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">  konsultan, IT, &amp; sewa harta gerak</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Tarif 15%: Bunga pinjaman non-bank,</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">  royalti paten, hadiah penghargaan</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">• Bukti Potong: e-Bupot Unifikasi</text>
    <rect class="svg-badge-amber" x="10" y="185" width="175" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Kredit Pajak PPh Badan (Pasal 28A)</text>
  </g>

  <!-- 4. PPh Final 4(2) -->
  <g transform="translate(665, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#w4)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="97" y="20" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">PPH FINAL PASAL 4 (2)</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="97" y="53" fill="#a78bfa" font-size="8" font-weight="800" text-anchor="middle">Kewajiban Pajak Selesai Seketika</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Sewa tanah &amp; bangunan: 10%</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Jasa konstruksi: 1,75% s.d. 4%</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Pengalihan hak tanah/bangunan: 2,5%</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Bunga deposito bank: 20%</text>
    <text class="svg-text" x="10" y="136" fill="#cbd5e1" font-size="7.5">• <tspan class="text-accent-red" fill="#f87171" font-weight="700">TIDAK BISA</tspan> dikreditkan di SPT 1771</text>
    <rect class="svg-badge-purple" x="10" y="185" width="175" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="97" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Pajak Bersifat Final &amp; Mutlak</text>
  </g>
</svg>`;

export const TM5_READING: Reading = {
  tm: 5,
  title: 'Pemungutan PPh Pasal 22, Pemotongan PPh Pasal 23/26, & PPh Final UMKM 0,5%',
  ref: 'UU PPh Pasal 22, 23, 26 | PMK 34/2017 jo PMK 41/2022 PPh 22 | PP 55/2022 PPh Final UMKM',
  intro: 'TM 5 membahas sistem pemotongan dan pemungutan pajak di Indonesia (Withholding Tax System): pemungutan PPh Pasal 22 atas impor barang dan transaksi belanja bendaharawan pemerintah serta industri tertentu, pemotongan PPh Pasal 23 atas dividen, bunga, royalti, sewa selain tanah/bangunan, dan 62 jenis jasa lain (tarif 2%), pemajakan Wajib Pajak Luar Negeri PPh Pasal 26 (tarif 20% atau Tax Treaty), serta skema PPh Final UMKM 0,5% menurut PP No. 55 Tahun 2022.',
  objectives: [
    'Menghitung PPh Pasal 22 Impor (ber-API vs non-API) dan PPh 22 Bendaharawan Pemerintah.',
    'Menerapkan pemotongan PPh Pasal 23 atas bunga, royalti, dan jasa manajemen/teknik (tarif 2%).',
    'Menjelaskan pemotongan PPh Pasal 26 atas penghasilan yang dibayarkan kepada subjek pajak luar negeri.',
    'Menerapkan skema PPh Final UMKM 0,5% PP 55/2022 dan pembebasan omzet s/d Rp 500 Juta bagi WP OP.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 5.1: Spektrum Pemotongan dan Pemungutan Pajak: PPh Pasal 22, PPh 23/26, dan PPh UMKM.',
      svg: SVG_WITHHOLDING_SYSTEM
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: Bunyi Asli Pasal 22 ayat (1) & Pasal 23 ayat (1) UU PPh (Withholding Tax)',
      text: '"Pasal 22 ayat (1): Menteri Keuangan dapat menetapkan bendahara pemerintah untuk memungut pajak sehubungan dengan pembayaran atas penyerahan barang, dan badan-badan tertentu untuk memungut pajak dari Wajib Pajak yang melakukan kegiatan di bidang impor atau kegiatan usaha di bidang lain.\n\nPasal 23 ayat (1): Atas penghasilan yang dibayarkan, disediakan untuk dibayarkan, atau telah jatuh tempo pembayarannya kepada Wajib Pajak dalam negeri atau BUT, dipotong pajak oleh pihak yang wajib membayarkan:\na. sebesar 15% dari jumlah bruto atas dividen, bunga, royalti, dan hadiah/penghargaan;\nb. sebesar 2% dari jumlah bruto atas sewa dan penghasilan lain sehubungan dengan penggunaan harta (selain tanah/bangunan), serta imbalan jasa teknik, jasa manajemen, jasa konstruksi, jasa konsultan, dan jasa lain selain yang telah dipotong PPh Pasal 21."'
    },
    {
      kind: 'callout',
      variant: 'warning',
      title: '📜 Ketentuan Tarif Resmi: PMK No. 34/2017 jo PMK 41/2022 (Tarif PPh 22 Impor)',
      text: '"Ketentuan Tarif Pemungutan PPh Pasal 22 atas Impor Barang:\n1. Menggunakan API (Angka Pengenal Impor): 2,5% dari Nilai Impor (Cost + Insurance + Freight + Bea Masuk);\n2. Menggunakan API untuk komoditas tertentu (kedelai, gandum, tepung terigu): 0,5% dari Nilai Impor;\n3. Tidak Menggunakan API (Non-API): 7,5% dari Nilai Impor;\n4. Barang Impor yang Tidak Dikuasai (Lelang Kepabeanan): 7,5% dari Harga Jual Lelang.\nCatatan Khusus: Wajib Pajak yang tidak memiliki NPWP dikenai tarif 100% lebih tinggi (dua kali lipat)."'
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Dasar Hukum Otentik: PP No. 55 Tahun 2022 Pasal 56 & 60 (PPh Final UMKM 0,5%)',
      text: '"Wajib Pajak yang memiliki peredaran bruto tidak melebihi Rp 4.800.000.000,00 dalam 1 Tahun Pajak dikenai Pajak Penghasilan yang bersifat final dengan tarif 0,5% dari peredaran bruto setiap bulan.\nBagi Wajib Pajak Orang Pribadi, bagian peredaran bruto dari usaha sampai dengan Rp 500.000.000,00 dalam 1 Tahun Pajak tidak dikenai Pajak Penghasilan (bebas pajak). Fasilitas pembebasan Rp 500 juta ini HANYA berlaku bagi Wajib Pajak Orang Pribadi dan TIDAK berlaku bagi Wajib Pajak Badan (PT, CV, Koperasi)."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 5'
    },
    {
      kind: 'table',
      headers: ['Jenis Pajak', 'Objek Transaksi Utama', 'Tarif Normal', 'Sanksi Tidak Punya NPWP'],
      rows: [
        ['PPh Pasal 22 Impor', 'Nilai Impor (CIF + Bea Masuk).', '2,5% (Memiliki API) | 7,5% (Tanpa API).', 'Tarif 100% lebih tinggi (dua kali lipat).'],
        ['PPh Pasal 22 Bendaharawan', 'Pembelian barang oleh instansi pemerintah (> Rp 2 Juta).', '1,5% dari Harga Pembelian tidak termasuk PPN.', 'Tarif 100% lebih tinggi (menjadi 3,0%).'],
        ['PPh Pasal 23 Pasif (Bunga/Royalti)', 'Pembayaran bunga pinjaman non-bank dan royalti hak cipta.', '15% dari Jumlah Bruto.', 'Tarif 100% lebih tinggi (menjadi 30%).'],
        ['PPh Pasal 23 Jasa & Sewa', 'Jasa teknik, manajemen, konsultan, dan sewa alat/kendaraan.', '2% dari Jumlah Bruto tidak termasuk PPN.', 'Tarif 100% lebih tinggi (menjadi 4,0%).'],
        ['PPh Pasal 26 Luar Negeri', 'Penghasilan bersumber dari RI dibayarkan ke Subjek Pajak Luar Negeri.', '20% dari Bruto (atau tarif Tax Treaty/P3B).', 'Wajib melampirkan Certificate of Domicile (Form DGT).'],
        ['PPh Final UMKM (PP 55/2022)', 'Peredaran bruto usaha s/d Rp 4,8 Miliar per tahun.', '0,5% dari Omzet Bruto Bulanan.', 'Bagi WP OP, omzet s/d Rp 500 Jt setahun tidak kena pajak.']
      ],
      caption: 'Tabel 5.0: Matriks tarif pemotongan dan pemungutan PPh 22, 23, 26, dan UMKM.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Nilai Impor & PPh UMKM'
    },
    {
      kind: 'formula',
      text: `\\text{Nilai Impor (DPP PPh 22)} = \\text{Cost} + \\text{Insurance} + \\text{Freight (CIF)} + \\text{Bea Masuk} + \\text{Pungutan Pabean Lainnya}
\\text{PPh 22 Impor (Memiliki API)} = 2,5\\% \\times \\text{Nilai Impor}
\\text{PPh Final UMKM WP Orang Pribadi} = 0,5\\% \\times \\max(0, \\text{Omzet Kumulatif} - Rp 500.000.000)
\\text{PPh Final UMKM WP Badan (PT/CV)} = 0,5\\% \\times \\text{Omzet Bruto Bulanan} \\quad \\text{(Tanpa Fasilitas Rp 500 Juta)}`,
      note: 'Fasilitas pembebasan omzet tidak kena pajak s/d Rp 500 Juta per tahun HANYA diberikan kepada Wajib Pajak Orang Pribadi, TIDAK berlaku bagi Wajib Pajak Badan (PT/CV/Koperasi).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: PPh Final UMKM Toko Kelontong Tuan Andi',
      prompt: 'Tuan Andi (WP OP UMKM) memiliki omzet penjualan toko kelontong tahun 2026: Januari Rp 200 Jt, Februari Rp 250 Jt, Maret Rp 300 Jt. Hitung PPh Final PP 55/2022 yang harus disetor Tuan Andi untuk masing-masing bulan Januari, Februari, dan Maret!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Januari (Omzet Kumulatif Rp 200 Jt)**: Omzet belum melebihi batas PTKP UMKM Rp 500 Juta $\\r→$ **PPh Terutang = Rp 0**.',
            '**Februari (Omzet Kumulatif Rp 450 Jt)**: Rp 200 Jt + Rp 250 Jt = Rp 450 Jt (masih di bawah Rp 500 Juta) $\\r→$ **PPh Terutang = Rp 0**.',
            '**Maret (Omzet Rp 300 Jt, Kumulatif Rp 750 Jt)**:\n- Bagian omzet yang bebas pajak = Sisa kuota PTKP = Rp 500 Jt - Rp 450 Jt = Rp 50.000.000.\n- Bagian omzet kena pajak bulan Maret = Rp 300 Jt - Rp 50 Jt = **Rp 250.000.000**.\n- **PPh Final Maret yang Wajib Disetor** = 0,5% × Rp 250.000.000 = **Rp 1.250.000**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 5'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kalkulasi PPh 22 Impor & Instansi', 'Penghitungan Nilai Impor dan pemotongan oleh bendaharawan APBN/APBD.', 'Mampu menghitung PPh 22 terutang dan batas pembebasan Rp 2 Jt.'],
        ['2', 'Pemotongan PPh 23 Jasa & Sewa', 'Kualifikasi 62 jenis jasa PMK 141/2015 dan sanksi 100% non-NPWP.', 'Mampu menerbitkan bukti potong PPh 23 Unifikasi.'],
        ['3', 'PPh Final UMKM PP 55/2022', 'Mekanisme pemotongan pihak lain menggunakan Suket dan batas waktu penggunaan PP 55.', 'Mampu mengkalkulasi PPh UMKM dengan batasan PTKP Rp 500 Jt.']
      ],
      caption: 'Tabel 5.2: Peta penguasaan submateri TM 5 Perpajakan II.'
    },
    CASE_WITHHOLDING_PPH22_23_UMKM,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Sanksi Non-NPWP 100% Lebih Tinggi**: Pemotongan PPh 22 dan PPh 23 bagi Wajib Pajak yang tidak memiliki NPWP dikenakan tarif 100% lebih tinggi dibanding tarif normal.',
        '**Surat Keterangan (Suket) PP 55**: Tanpa menyerahkan fotokopi Suket PP 55 yang tervalidasi di portal DJP, rekanan UMKM akan dipotong PPh 23 jasa (2%), bukan PPh Final 0,5%.',
        '**Batas Waktu Tarif UMKM**: Penggunaan tarif 0,5% dibatasi: WP OP maksimal 7 tahun, CV/Koperasi 4 tahun, dan PT maksimal 3 tahun, setelah itu wajib kembali ke tarif umum pembukuan.'
      ]
    }
  ]
};
