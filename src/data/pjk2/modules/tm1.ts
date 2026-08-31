import type { Reading } from '../../../types';

const SVG_TAX_EXPENSES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">BIAYA FISKAL: DEDUCTIBLE (PASAL 6) VS NON-DEDUCTIBLE (PASAL 9) UU PPH</text>
  
  <rect x="30" y="55" width="290" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="175" y="80" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">1. Deductible Expenses (Pasal 6)</text>
  <text x="175" y="98" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">BIAYA UNTUK 3M PENGHASILAN</text>
  <line x1="50" y1="110" x2="300" y2="110" stroke="#334155"/>
  <text x="175" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Biaya langsung (bahan, gaji, upah)</text>
  <text x="175" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Bunga, sewa, royalti, perjalanan dinas</text>
  <text x="175" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Penyusutan fiskal &amp; kerugian selisih kurs</text>
  <text x="175" y="186" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Mengurangi Penghasilan Kena Pajak</text>

  <rect x="360" y="55" width="290" height="150" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="505" y="80" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="middle">2. Non-Deductible Expenses (Pasal 9)</text>
  <text x="505" y="98" fill="#cbd5e1" font-size="10" font-weight="600" text-anchor="middle">BIAYA YANG DILARANG DIKURANGKAN</text>
  <line x1="380" y1="110" x2="630" y2="110" stroke="#334155"/>
  <text x="505" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Pembagian laba (Dividen / Prive)</text>
  <text x="505" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Kepentingan pribadi pemilik/pemegang saham</text>
  <text x="505" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Sanksi administrasi denda/bunga pajak</text>
  <text x="505" y="186" fill="#fca5a5" font-size="10" font-weight="700" text-anchor="middle">Wajib Dikoreksi Fiskal Positif (+)</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Konsep Dasar PPh, Subjek/Objek Pajak, & Biaya 3M (Deductible vs Non-Deductible)',
  ref: 'UU PPh jo. UU HPP (UU 7/2021) | PP 55/2022',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 1: Menguasai asas dasar Pajak Penghasilan (PPh), pembedaan Subjek Pajak Dalam Negeri (SPDN) vs Subjek Pajak Luar Negeri (SPLN), Objek Pajak Umum vs Final vs Bukan Objek Pajak (Pasal 4 ayat 1, 2, 3), prinsip biaya 3M (*Mendapatkan, Menagih, Memelihara Penghasilan* - Pasal 6), biaya yang tidak boleh dibiayakan (*Non-Deductible Expenses* - Pasal 9), serta kompensasi kerugian fiskal 5 tahun.',
  objectives: [
    'Mendefinisikan pengertian Penghasilan menurut konsep *Accretion Concept* (Schoanz-Haig-Simons) dalam UU PPh.',
    'Membedakan Subjek Pajak Dalam Negeri (SPDN) dan Subjek Pajak Luar Negeri (SPLN) berdasarkan kriteria *Time Test* (183 hari).',
    'Mengklasifikasikan penghasilan ke dalam Objek PPh Tarif Umum, PPh Final Pasal 4(2), dan Bukan Objek Pajak (Pasal 4 ayat 3).',
    'Menganalisis biaya-biaya yang boleh dikurangkan (*Deductible Expenses* - Pasal 6 UU PPh).',
    'Mengidentifikasi pos-pos pengeluaran yang dilarang dikurangkan (*Non-Deductible Expenses* - Pasal 9 UU PPh) yang memerlukan koreksi positif.',
    'Menerapkan kompensasi kerugian fiskal horizontal selama 5 tahun berturut-turut.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Klasifikasi Pengeluaran Biaya Fiskal menurut UU PPh',
      svg: SVG_TAX_EXPENSES,
      caption: 'Gambar 1.1: Pemilahan biaya yang dapat dibebankan secara fiskal (Pasal 6) vs biaya non-deductible (Pasal 9).'
    },

    { kind: 'h2', text: '1. Pengertian Penghasilan & Pengelompokan Objek Pajak' },
    {
      kind: 'table',
      headers: ['Kelompok Objek Pajak', 'Dasar Hukum UU PPh', 'Karakteristik Perlakuan Perpajakan', 'Contoh Pos Penghasilan'],
      rows: [
        ['1. Objek Pajak Umum (Tidak Final)', 'Pasal 4 ayat (1)', 'Digabungkan dalam SPT Tahunan, dihitung dengan tarif umum Pasal 17, dan kredit pajak dapat diperhitungkan.', 'Laba usaha dagang/jasa, gaji pegawai, royalti, keuntungan selisih kurs, sewa alat berat.'],
        ['2. Objek Pajak PPh Final', 'Pasal 4 ayat (2)', 'Pajak dipotong langsung saat transaksi, selesai seketika, dan tidak digabung dalam perhitungan PKP akhir tahun.', 'Bunga deposito/tabungan (20%), sewa tanah/bangunan (10%), jasa konstruksi, PPh UMKM 0,5%.'],
        ['3. Bukan Objek Pajak (Non-Taxable)', 'Pasal 4 ayat (3)', 'Dikecualikan dari pengenaan pajak penghasilan.', 'Bantuan/sumbangan, hibah keluarga sedarah, warisan, klaim asuransi kesehatan/jiwa, dividen diterima WP Badan dalam negeri (UU HPP).']
      ],
      caption: 'Tabel 1.1: Tiga kategori klasifikasi objek penghasilan.'
    },

    { kind: 'h2', text: '2. Biaya yang Boleh (Pasal 6) vs Tidak Boleh Dikurangkan (Pasal 9)' },
    {
      kind: 'table',
      headers: ['Pasal 6: Deductible Expenses (Boleh Dibiayakan)', 'Pasal 9: Non-Deductible Expenses (Dilarang Dibiayakan)'],
      rows: [
        ['Biaya pembelian bahan baku & upah operasional.', 'Pembagian laba seperti dividen, pembagian SHU koperasi, atau prive.'],
        ['Biaya bunga pinjaman modal kerja, sewa kantor, dan royalti.', 'Biaya yang dibebankan untuk kepentingan pribadi pemegang saham atau keluarganya.'],
        ['Beban penyusutan dan amortisasi fiskal harta berwujud/tak berwujud.', 'Pembentukan atau pemupukan dana cadangan (kecuali bank dan asuransi tertentu).'],
        ['Iuran pensiun ke dana pensiun yang disahkan Menkeu.', 'Premi asuransi kesehatan/jiwa untuk pemilik/pemegang saham yang dibayar perusahaan.'],
        ['Kerugian selisih kurs mata uang asing.', 'Pajak Penghasilan (PPh) itu sendiri dan sanksi administrasi denda/bunga/kenaikan pajak.'],
        ['Zakat atas penghasilan yang dibayarkan ke BAZNAS/LAZ resmi.', 'Biaya promosi/entertainment yang **tidak memiliki Daftar Nominatif** lengkap.']
      ],
      caption: 'Tabel 1.2: Komparasi pos biaya Pasal 6 vs Pasal 9 UU PPh.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 1' },
    {
      kind: 'ul',
      items: [
        '**Prinsip 3M**: Biaya hanya boleh dikurangkan jika berkaitan langsung dengan kegiatan untuk Mendapatkan, Menagih, dan Memelihara penghasilan yang merupakan objek pajak umum.',
        '**Dividen Badan DN**: Berdasarkan UU HPP, dividen yang diterima oleh Wajib Pajak Badan Dalam Negeri **BUKAN MERUPAKAN OBJEK PAJAK** (tanpa syarat kepemilikan saham minimum 25%).',
        '**Kompensasi Kerugian**: Kerugian fiskal dapat dikompensasikan dengan penghasilan neto mulai tahun pajak berikutnya berturut-turut hingga **5 tahun**.'
      ]
    }
  ]
};