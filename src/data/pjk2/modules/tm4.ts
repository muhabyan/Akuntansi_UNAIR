import type { Reading } from '../../../types';

const SVG_DEPR_GROUPS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">EMPAT KELOMPOK HARTA BERWUJUD BUKAN BANGUNAN (PMK NO. 72/2023)</text>
  
  <rect x="25" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">Kelompok 1</text>
  <text x="97" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Masa Manfaat: 4 Tahun</text>
  <line x1="35" y1="108" x2="160" y2="108" stroke="#334155"/>
  <text x="97" y="130" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Garis Lurus: 25%</text>
  <text x="97" y="150" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">Saldo Menurun: 50%</text>
  <text x="97" y="175" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Komputer, HP, Mebel kayu)</text>

  <rect x="185" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="257" y="78" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">Kelompok 2</text>
  <text x="257" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Masa Manfaat: 8 Tahun</text>
  <line x1="195" y1="108" x2="320" y2="108" stroke="#334155"/>
  <text x="257" y="130" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Garis Lurus: 12,5%</text>
  <text x="257" y="150" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">Saldo Menurun: 25%</text>
  <text x="257" y="175" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Mobil operasional, Truk)</text>

  <rect x="345" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="417" y="78" fill="#f59e0b" font-size="10.5" font-weight="700" text-anchor="middle">Kelompok 3</text>
  <text x="417" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Masa Manfaat: 16 Tahun</text>
  <line x1="355" y1="108" x2="480" y2="108" stroke="#334155"/>
  <text x="417" y="130" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Garis Lurus: 6,25%</text>
  <text x="417" y="150" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">Saldo Menurun: 12,5%</text>
  <text x="417" y="175" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Mesin pabrik berat, Kapal)</text>

  <rect x="505" y="55" width="150" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a855f7" font-size="10.5" font-weight="700" text-anchor="middle">Kelompok 4</text>
  <text x="580" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Masa Manfaat: 20 Tahun</text>
  <line x1="515" y1="108" x2="645" y2="108" stroke="#334155"/>
  <text x="580" y="130" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Garis Lurus: 5%</text>
  <text x="580" y="150" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">Saldo Menurun: 10%</text>
  <text x="580" y="175" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Alat berat tambang, Rel KA)</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Penyusutan & Amortisasi Fiskal, Penarikan Aset, & Revaluasi Aset Tetap',
  ref: 'UU PPh Pasal 11 & 11A jo. UU HPP | PP 55/2022 | PMK No. 72/2023',
  intro: 'Modul Pembelajaran Mendalam Perpajakan II TM 4: Menguasai tabel tarif dan masa manfaat penyusutan fiskal harta berwujud (Kelompok 1, 2, 3, 4, serta Bangunan Permanen 20 thn & Non-Permanen 10 thn), Metode Garis Lurus (*Straight-Line*) vs Saldo Menurun (*Declining Balance*), ketentuan khusus masa manfaat bangunan > 20 tahun (PMK 72/2023), amortisasi harta tidak berwujud (Pasal 11A), perlakuan penarikan harta/klaim asuransi, serta penilaian kembali (*Revaluasi*) aset tetap.',
  objectives: [
    'Mengklasifikasikan harta berwujud bukan bangunan ke dalam 4 kelompok masa manfaat fiskal.',
    'Menghitung beban penyusutan fiskal menggunakan Metode Garis Lurus dan Saldo Menurun.',
    'Menjelaskan ketentuan penyusutan harta berwujud kelompok bangunan (Wajib Garis Lurus; Bangunan Permanen 20 thn atau sesuai masa manfaat riil pembukuan WP menurut PMK 72/2023).',
    'Menghitung beban amortisasi fiskal harta tak berwujud (Hak paten, lisensi, goodwill) dan amortisasi bidang migas.',
    'Menghitung keuntungan/kerugian fiskal atas pengalihan atau penarikan harta tetap (Pasal 11 ayat 8).',
    'Menjelaskan ketentuan Revaluasi Aset Tetap untuk tujuan perpajakan (PMK 79/PMK.03/2008 jo. PMK 72/2023).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tabel Kelompok & Tarif Penyusutan Fiskal Harta Bukan Bangunan (PMK 72/2023)',
      svg: SVG_DEPR_GROUPS,
      caption: 'Gambar 4.1: Masa manfaat dan tarif penyusutan fiskal berdasarkan UU PPh.'
    },

    { kind: 'h2', text: '1. Tabel Tarif Penyusutan Fiskal (Pasal 11 UU PPh)' },
    {
      kind: 'table',
      headers: ['Kelompok Harta Berwujud', 'Masa Manfaat Fiskal', 'Tarif Garis Lurus (Straight-Line)', 'Tarif Saldo Menurun (Declining-Balance)'],
      rows: [
        ['I. Bukan Bangunan: Kelompok 1', '4 Tahun', '**25%**', '**50%**'],
        ['I. Bukan Bangunan: Kelompok 2', '8 Tahun', '**12,5%**', '**25%**'],
        ['I. Bukan Bangunan: Kelompok 3', '16 Tahun', '**6,25%**', '**12,5%**'],
        ['I. Bukan Bangunan: Kelompok 4', '20 Tahun', '**5%**', '**10%**'],
        ['II. Bangunan: Permanen', '20 Tahun (atau riil WP)', '**5%**', '*(Tidak Boleh Saldo Menurun)*'],
        ['II. Bangunan: Tidak Permanen', '10 Tahun', '**10%**', '*(Tidak Boleh Saldo Menurun)*']
      ],
      caption: 'Tabel 4.1: Daftar resmi masa manfaat dan tarif penyusutan fiskal.'
    },

    { kind: 'h2', text: '2. Ketentuan Khusus PMK 72/2023' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Fleksibilitas Masa Manfaat Bangunan & Amortisasi Aset Tak Berwujud > 20 Tahun',
      text: '• **Bangunan Permanen > 20 Tahun**: Wajib Pajak dapat memilih menyusutkan bangunan permanen sesuai dengan **masa manfaat riil pembukuannya** (misal 30 tahun atau 40 tahun) dengan menyampaikan pemberitahuan ke DJP.\n• **Amortisasi Aset Tak Berwujud > 20 Tahun**: Harta tak berwujud dengan masa manfaat lebih dari 20 tahun (misal hak konsesi tol 35 tahun) dapat diamortisasi sesuai masa manfaat sebenarnya menggunakan kelompok 4 atau metode satuan produksi.'
    },

    { kind: 'h2', text: '3. Penarikan Harta dari Penggunaan (Pasal 11 ayat 8)' },
    {
      kind: 'p',
      text: 'Apabila terjadi pengalihan harta atau penarikan harta karena terbakar/rusak berat:'
    },
    {
      kind: 'ul',
      items: [
        'Nilai sisa buku fiskal harta pada saat penarikan dibebankan sekaligus sebagai kerugian fiskal (*Loss on Disposal*).',
        'Jumlah harga jual atau penggantian asuransi yang diterima diakui sebagai penghasilan pada tahun terjadinya penarikan tersebut.'
      ]
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 4' },
    {
      kind: 'ul',
      items: [
        '**Aset Bangunan**: HANYA boleh disusutkan menggunakan **Metode Garis Lurus**.',
        '**Bulan Perolehan**: Penyusutan fiskal dimulai pada **bulan dilakukannya perolehan** atau bulan selesainya pengerjaan harta (dihitung proporsional jumlah bulan dalam tahun pertama).',
        '**Saldo Menurun Tahun Terakhir**: Pada akhir masa manfaat, seluruh nilai sisa buku disusutkan sekaligus menjadi Rp 0.'
      ]
    }
  ]
};