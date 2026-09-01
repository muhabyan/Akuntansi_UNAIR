import type { Reading } from '../../../types';
import { CASE_EXPENSE_DEDUCTIBILITY } from '../pjk2PracticeCases';

const SVG_DEDUCTIBILITY = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SKEMA PENGURANGAN PENGHASILAN BRUTO PPH BADAN (UU HPP NO. 7/2021)</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="177" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">BIAYA 3M BOLEH DIKURANGKAN</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Deductible Expenses - Pasal 6 UU PPh):</text>
  <text x="177" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Biaya bahan baku, gaji, &amp; tunjangan</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penyusutan &amp; amortisasi fiskal</text>
  <text x="177" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Sumbangan bencana nasional &amp; litbang</text>
  <text x="177" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Mengurangi Laba Kena Pajak</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="497" y="78" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">BIAYA TIDAK BOLEH DIKURANGKAN</text>
  <text x="497" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Non-Deductible - Pasal 9 UU PPh):</text>
  <text x="497" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pembagian dividen &amp; prive pemilik</text>
  <text x="497" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Sanksi bunga / denda administrasi pajak</text>
  <text x="497" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Biaya keperluan pribadi pemegang saham</text>
  <text x="497" y="175" fill="#fca5a5" font-size="9" font-weight="700" text-anchor="middle">Wajib Koreksi Fiskal Positif</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Konsep Dasar PPh, Subjek/Objek Pajak, & Biaya 3M (Deductible vs Non-Deductible)',
  ref: 'UU No. 7/2021 (UU HPP) | Pasal 4, 6, & 9 UU PPh | PMK No. 02/PMK.03/2010 Daftar Nominatif',
  intro: 'TM 1 membahas fondasi pemajakan penghasilan di Indonesia: klasifikasi subjek pajak dalam negeri vs luar negeri, pemilahan objek pajak (Objek Pajak Reguler, Objek PPh Final, dan Bukan Objek Pajak), prinsip Biaya 3M (Mendapatkan, Menagih, dan Memelihara penghasilan), serta evaluasi komparatif Deductible Expense (Pasal 6) vs Non-Deductible Expense (Pasal 9) yang memicu koreksi fiskal positif.',
  objectives: [
    'Mengklasifikasikan penghasilan: Objek PPh Umum, Objek PPh Final, dan Bukan Objek Pajak.',
    'Menganalisis kriteria Biaya 3M yang berhak menjadi pengurang penghasilan bruto (Pasal 6 UU PPh).',
    'Menguasai daftar biaya yang dilarang dikurangkan secara fiskal menurut Pasal 9 UU PPh.',
    'Menghitung penyesuaian koreksi fiskal positif atas biaya jamuan, sanksi pajak, dan prive.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Klasifikasi Beban Fiskal: Deductible Expense (Pasal 6) vs Non-Deductible Expense (Pasal 9).',
      svg: SVG_DEDUCTIBILITY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 1'
    },
    {
      kind: 'table',
      headers: ['Kelompok Beban Komersial', 'Ketentuan Pasal UU PPh', 'Perlakuan Fiskal', 'Syarat Administratif Wajib'],
      rows: [
        ['Gaji, Tunjangan, & Bonus Pegawai', 'Pasal 6 ayat (1) huruf a', 'Deductible (Boleh Dikurangkan)', 'Telah dipotong PPh Pasal 21 dan dilaporkan di SPT Masa.'],
        ['Beban Entertainment / Jamuan Relasi', 'Pasal 6 jo PMK 02/2010', 'Deductible jika ada Daftar Nominatif; Non-Deductible jika tanpa daftar.', 'Wajib melampirkan Daftar Nominatif berisi nama relasi, posisi, dan jumlah.'],
        ['Sumbangan Bencana Alam / Litbang', 'Pasal 6 ayat (1) huruf i & j', 'Deductible (Boleh Dikurangkan)', 'Disalurkan melalui badan/lembaga yang ditunjuk pemerintah (BNPB/Kemensos).'],
        ['Pembagian Dividen / Laba', 'Pasal 9 ayat (1) huruf a', 'Non-Deductible (Koreksi Positif)', 'Dividen adalah distribusi laba neto, bukan biaya operasional.'],
        ['Sanksi Bunga & Denda STP Pajak', 'Pasal 9 ayat (1) huruf k', 'Non-Deductible (Koreksi Positif)', 'Sanksi hukum tidak boleh disubsidi melalui penghematan pajak.']
      ],
      caption: 'Tabel 1.0: Matriks evaluasi beban fiskal PPh Badan.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Penentuan Penghasilan Kena Pajak (PKP)'
    },
    {
      kind: 'formula',
      text: `\\text{Laba Komersial Bersih Sebelum Pajak} \\pm \\text{Koreksi Fiskal} = \\text{Penghasilan Kena Pajak (PKP)}
\\text{Koreksi Fiskal Positif} \\implies \\text{Menambah PKP (Beban Komersial } > \\text{ Beban Fiskal atau Pendapatan Kurang Catat)}
\\text{Koreksi Fiskal Negatif} \\implies \\text{Mengurangi PKP (Pendapatan PPh Final / Bukan Objek atau Beban Fiskal } > \\text{ Komersial)}`,
      note: 'Penghasilan yang dikenai PPh Final (Pasal 4 ayat 2) dan Bukan Objek Pajak (Pasal 4 ayat 3) wajib dikoreksi negatif dari laba komersial agar tidak dipajaki berganda.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Evaluasi Beban Premi Asuransi Pemegang Saham',
      prompt: 'Perusahaan membayar premi asuransi jiwa dan kesehatan untuk direktur utama yang juga merupakan pemegang saham pengendali sebesar Rp 50.000.000 per tahun. Premi tersebut tidak dimasukkan sebagai penghasilan di slip gaji direktur. Apakah beban tersebut deductible bagi perusahaan?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Ketentuan Pasal 9 ayat (1) huruf d UU PPh**: Premi asuransi kesehatan, kecelakaan, dan jiwa yang dibayar oleh Wajib Pajak untuk kepentingan pribadi pemegang saham atau keluarganya adalah **Non-Deductible Expense**.',
            '**Pengecualian**: Premi tersebut HANYA boleh dikurangkan oleh perusahaan jika premi tersebut digabungkan sebagai **tambahan penghasilan bruto** bagi pegawai yang dipotong PPh Pasal 21.',
            '**Kesimpulan**: Karena tidak dipotong PPh 21 pada slip gaji, perusahaan **WAJIB melakukan Koreksi Fiskal Positif sebesar Rp 50.000.000**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 1'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Subjek & Objek PPh', 'Kriteria SPDN vs SPLN dan pemisahan 3 kelompok objek pajak.', 'Mampu mengidentifikasi status pengenaan PPh.'],
        ['2', 'Prinsip Biaya 3M (Pasal 6)', 'Kriteria keterkaitan langsung beban dengan perolehan omzet.', 'Mampu menentukan pos beban yang berhak dikurangkan.'],
        ['3', 'Beban Non-Deductible (Pasal 9)', 'Daftar 11 larangan pengurang penghasilan bruto.', 'Mampu menghitung nilai koreksi fiskal positif di SPT 1771.']
      ],
      caption: 'Tabel 1.2: Peta penguasaan submateri TM 1 Perpajakan II.'
    },
    CASE_EXPENSE_DEDUCTIBILITY,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Daftar Nominatif adalah Nyawa Biaya Promosi**: Tanpa daftar nominatif resmi sesuai PMK 02/2010, pemeriksa pajak akan mendiskualifikasi 100% biaya entertainment dan promosi menjadi koreksi positif.',
        '**Dividen Antar-PT Bukan Objek Pajak**: Sejak berlakunya UU Cipta Kerja & UU HPP, dividen yang diterima oleh perseroan terbatas dalam negeri dari perseroan terbatas lain di Indonesia bukan lagi objek PPh (tanpa syarat kepemilikan 25%).',
        '**Sanksi Bunga STP Bukan Beban Usaha**: Sanksi administrasi pajak tidak pernah diakui sebagai biaya usaha karena negara tidak membiayai kelalaian kepatuhan Wajib Pajak.'
      ]
    }
  ]
};
