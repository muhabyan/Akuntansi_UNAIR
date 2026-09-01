import type { Reading } from '../../../types';
import { CASE_FINAL_TAX_CONSTRUCTION_RENT } from '../pjk2PracticeCases';

const SVG_FINAL_TAX_4_2 = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PEMOTONGAN PPH FINAL PASAL 4 AYAT (2) &amp; NORMA KHUSUS PASAL 15</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">PROPERTI &amp; PASAR MODAL</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Sewa &amp; Pengalihan Tanah):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Sewa Tanah/Bangunan: 10%</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pengalihan Hak Tanah: 2,5%</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penjualan Saham di BEI: 0,1%</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Final Tidak Dapat Dikreditkan</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">JASA KONSTRUKSI</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(PP No. 9 Tahun 2022):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pekerjaan Kualifikasi Kecil: 1,75%</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Menengah / Besar: 2,65%</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Konsultansi Konstruksi: 3,5% - 6%</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Berdasarkan Sertifikat SBU</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">NORMA KHUSUS PASAL 15</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Pelayaran &amp; Penerbangan):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pelayaran Dalam Negeri: 1,2%</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pelayaran/Penerbangan LN: 2,64%</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kantor Perwakilan Dagang (RO): 0,44%</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Deemed Profit Rate</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Pemotongan PPh Final Pasal 4 ayat (2) & Norma Penghitungan Khusus PPh Pasal 15',
  ref: 'UU PPh Pasal 4 ayat (2) & Pasal 15 | PP 9/2022 Jasa Konstruksi | PP 34/2016 Pengalihan Tanah',
  intro: 'TM 6 membahas pemajakan berkarakteristik final atas penghasilan tertentu: PPh Final Pasal 4 ayat (2) atas sewa tanah dan/atau bangunan (10%), pengalihan hak atas tanah/bangunan (2,5%), bunga deposito dan tabungan (20%), transaksi saham di bursa efek (0,1%), tarif terkini jasa konstruksi menurut PP No. 9 Tahun 2022, serta norma penghitungan khusus PPh Pasal 15 bagi perusahaan pelayaran dan penerbangan nasional/internasional.',
  objectives: [
    'Menghitung pemotongan PPh Final Pasal 4 ayat (2) atas persewaan tanah/bangunan dan dividen orang pribadi.',
    'Menerapkan klasifikasi tarif jasa konstruksi sesuai sertifikasi kualifikasi usaha (PP No. 9/2022).',
    'Menghitung PPh Pasal 15 atas peredaran bruto perusahaan pelayaran dalam negeri (1,2%).',
    'Menganalisis dampak perlakuan PPh Final terhadap koreksi fiskal negatif di Lampiran I SPT 1771.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 6.1: Rincian Objek dan Tarif Pemotongan PPh Final Pasal 4 ayat (2) dan Norma Khusus PPh Pasal 15.',
      svg: SVG_FINAL_TAX_4_2
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 6'
    },
    {
      kind: 'table',
      headers: ['Objek Pemotongan PPh Final', 'Dasar Pengenaan Pajak (DPP)', 'Tarif PPh Final', 'Regulasi Rujukan'],
      rows: [
        ['Sewa Tanah dan/atau Bangunan', 'Jumlah bruto nilai persewaan termasuk service charge.', '10%', 'PP No. 34 Tahun 2017.'],
        ['Pengalihan Hak atas Tanah/Bangunan', 'Nilai tertinggi antara Akta Jual Beli vs NJOP PBB.', '2,5% (Umum) | 1% (RS/RSS) | 0% (Pemerintah).', 'PP No. 34 Tahun 2016.'],
        ['Jasa Pelaksanaan Konstruksi (Kecil)', 'Jumlah pembayaran kontrak tidak termasuk PPN.', '1,75% (Memiliki sertifikat badan usaha kecil).', 'PP No. 9 Tahun 2022.'],
        ['Jasa Pelaksanaan Konstruksi (Menengah/Besar)', 'Jumlah pembayaran kontrak tidak termasuk PPN.', '2,65% (Kualifikasi menengah atau besar).', 'PP No. 9 Tahun 2022.'],
        ['Jasa Konsultansi Konstruksi', 'Jumlah pembayaran kontrak tidak termasuk PPN.', '3,5% (Memiliki SBU) | 6% (Tanpa SBU).', 'PP No. 9 Tahun 2022.'],
        ['Pelayaran Dalam Negeri (PPh 15)', 'Peredaran bruto carter kapal / tiket angkutan laut.', '1,2% efektif (30% deemed profit × 4% tarif).', 'KMK No. 416/KMK.04/1996.']
      ],
      caption: 'Tabel 6.0: Matriks tarif PPh Final Pasal 4 ayat (2) dan PPh Pasal 15.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Jasa Konstruksi PP 9/2022'
    },
    {
      kind: 'formula',
      text: `\\text{Tarif Pelaksanaan Konstruksi}: \\quad \\begin{cases}
1,75\\% & \\text{(Memiliki Sertifikat Standar Kualifikasi Kecil)} \\\\
2,65\\% & \\text{(Memiliki Sertifikat Kualifikasi Menengah / Besar)} \\\\
4,00\\% & \\text{(Tidak Memiliki Sertifikat / Kualifikasi Usaha)}
\\end{cases}
\\text{PPh 15 Perusahaan Pelayaran DN} = 1,2\\% \\times \\text{Peredaran Bruto Carter Kapal} \\quad \\text{(Sifat Pajak: Final)}`,
      note: 'Biaya-biaya operasional yang dikeluarkan untuk mendapatkan penghasilan yang telah dikenai PPh Final TIDAK BOLEH dikurangkan dari penghasilan bruto (Non-Deductible Expense).'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Kontrak Konsultansi Perencanaan Konstruksi',
      prompt: 'PT Arsitek Handal (memiliki Sertifikasi Kualifikasi Usaha Konsultansi Konstruksi) menerima kontrak jasa perencanaan gedung kantor senilai Rp 200.000.000 (tidak termasuk PPN). Berapa PPh Final Pasal 4 ayat (2) yang dipotong oleh pengguna jasa?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Ketentuan PP No. 9 Tahun 2022**: Jasa konsultansi konstruksi yang dikerjakan oleh penyedia jasa yang **memiliki sertifikat kualifikasi usaha** dikenai tarif **3,5%**.',
            '**Perhitungan Pajak**: PPh Final Pasal 4 ayat (2) = 3,5% × Rp 200.000.000 = **Rp 7.000.000**.',
            '**Kas Diterima Bersih**: Kas yang ditransfer pengguna jasa ke rekening PT Arsitek Handal = Rp 200.000.000 - Rp 7.000.000 = **Rp 193.000.000** (ditambah PPN 11% jika menerbitkan faktur pajak).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 6'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'PPh Final Properti (Sewa & Jual Tanah)', 'Kalkulasi tarif 10% sewa dan 2,5% pengalihan hak tanah/bangunan.', 'Mampu menghitung kewajiban PPh Final transaksi properti.'],
        ['2', 'Tarif Konstruksi PP No. 9/2022', 'Perubahan tarif konstruksi terbaru dan sanksi bagi yang tidak ber-SBU.', 'Mampu menggolongkan tarif konstruksi berdasarkan bukti sertifikat.'],
        ['3', 'Norma Khusus PPh Pasal 15', 'Kalkulasi deemed profit pelayaran dalam negeri dan penerbangan asing.', 'Mampu menghitung pemotongan PPh 15 atas jasa pengangkutan laut.']
      ],
      caption: 'Tabel 6.2: Peta penguasaan submateri TM 6 Perpajakan II.'
    },
    CASE_FINAL_TAX_CONSTRUCTION_RENT,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Service Charge Termasuk Objek PPh Sewa**: Service charge, sinking fund, dan biaya utilitas yang ditagihkan pemilik gedung kepada penyewa wajib digabung sebagai DPP PPh Final Sewa tarif 10%.',
        '**PP 9/2022 Menurunkan Sebagian Tarif Konstruksi**: Tarif pelaksanaan konstruksi kualifikasi kecil turun dari 2% menjadi 1,75%, dan kualifikasi menengah turun dari 3% menjadi 2,65%.',
        '**Dilarang Netting Off**: Penghasilan yang dikenai PPh Final dikeluarkan seluruhnya dari PKP, dan beban-beban terkait penghasilan final tersebut wajib dikoreksi positif 100%.'
      ]
    }
  ]
};
