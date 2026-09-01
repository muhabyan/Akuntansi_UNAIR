import type { Reading } from '../../../types';
import { CASE_WITHHOLDING_PPH22_23_UMKM } from '../pjk2PracticeCases';

const SVG_WITHHOLDING_SYSTEM = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SISTEM PEMUNGUTAN &amp; PEMOTONGAN PAJAK (WITHHOLDING TAX): PPH 22, 23, 26, &amp; UMKM</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">PPH PASAL 22</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Pemungutan Pembelian):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Impor API: 2,5% | Non-API: 7,5%</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bendaharawan Negara: 1,5%</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Industri Semen 0,25%, Baja 0,3%</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Dapat Dikreditkan</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">PPH PASAL 23 / 26</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Modal &amp; Jasa SPDN/SPLN):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dividen WP OP: Final 10%</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Royalti &amp; Bunga: 15%</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Jasa Teknik/Manajemen/Sewa: 2%</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">PPh 26 Luar Negeri 20%</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">PPH FINAL UMKM</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(PP 55/2022 - Omzet s/d 4,8 M):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tarif 0,5% dari Omzet Bruto</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• WP OP: Bebas pajak s/d 500 Juta</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Syarat: Surat Keterangan PP 55</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Sederhana &amp; Final</text>
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
            '**Januari (Omzet Kumulatif Rp 200 Jt)**: Omzet belum melebihi batas PTKP UMKM Rp 500 Juta $\\rightarrow$ **PPh Terutang = Rp 0**.',
            '**Februari (Omzet Kumulatif Rp 450 Jt)**: Rp 200 Jt + Rp 250 Jt = Rp 450 Jt (masih di bawah Rp 500 Juta) $\\rightarrow$ **PPh Terutang = Rp 0**.',
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
