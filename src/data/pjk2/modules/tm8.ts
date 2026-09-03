import type { Reading } from '../../../types';
import { CASE_UTS_PJK2_INTEGRATED } from '../pjk2PracticeCases';

const SVG_UTS_PJK2_SUMMARY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPjk8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="pk1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="pk2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="pk3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="pk4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPjk8)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PETA SINTESIS KURIKULUM PRA-UTS PERPAJAKAN II: PPH BADAN &amp; WITHHOLDING (TM 1 - TM 7)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ROADMAP UTS</text>

  <!-- 4 Pillars Roadmap -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#pk1)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="21" fill="#38bdf8" font-size="10.5" font-weight="800">REKONSILIASI BIAYA</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-blue" x="44" y="56" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">TM 1 - TM 2</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Beban 3M (Pasal 6)</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Non-Deductible (Pasal 9)</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Penilaian Stok FIFO/Avg</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• Natura UU HPP PMK 66</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Koreksi Fiskal Positif/Negatif</text>
    <rect class="svg-badge-blue" x="14" y="185" width="167" height="24" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Penyesuaian Laba Komersial</text>
  </g>

  <polygon points="237,185 247,190 237,195" fill="#38bdf8"/>

  <g transform="translate(250, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#pk2)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="21" fill="#34d399" font-size="10.5" font-weight="800">TRANSFER PRICING</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-green" x="44" y="56" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">TM 3 - TM 4</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Prinsip Kewajaran (ALP)</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• 5 Metode Penetapan TP</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• 4 Golongan Susut Fiskal</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• Amortisasi Harta Tak Berwujud</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Penarikan Aset Tetap</text>
    <rect class="svg-badge-green" x="14" y="185" width="167" height="24" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Kepatuhan Aset &amp; Afiliasi</text>
  </g>

  <polygon points="452,185 462,190 452,195" fill="#34d399"/>

  <g transform="translate(465, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#pk3)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="14" y="21" fill="#fbbf24" font-size="10.5" font-weight="800">WITHHOLDING TAX</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-amber" x="44" y="56" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">TM 5 - TM 6</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• PPh Pasal 22 Impor &amp; BUMN</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• PPh Pasal 23 Jasa &amp; Bunga</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• PPh Final 4(2) Sewa Gedung</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• PPh Final Jasa Konstruksi</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Bukti Potong e-Bupot</text>
    <rect class="svg-badge-amber" x="14" y="185" width="167" height="24" rx="6" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Pemotongan Pihak Ketiga</text>
  </g>

  <polygon points="667,185 677,190 667,195" fill="#fbbf24"/>

  <g transform="translate(680, 75)">
    <rect class="svg-card" x="0" y="0" width="185" height="225" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="185" height="32" rx="12" fill="url(#pk4)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="14" y="21" fill="#a78bfa" font-size="10.5" font-weight="800">PENGHITUNGAN SPT</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-purple" x="44" y="56" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">TM 7</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Fasilitas Diskon 31E (11%)</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Kredit Pajak PPh 24 LN</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Kompensasi Rugi 5 Tahun</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• Angsuran PPh Pasal 25</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Kurang Bayar PPh 29</text>
    <rect class="svg-badge-purple" x="14" y="185" width="157" height="24" rx="6" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="92" y="201" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Finalisasi SPT PPh Badan</text>
  </g>
</svg>`;

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan & Review Ujian Tengah Semester (UTS) Perpajakan II: Sintesis PPh Badan & Withholding Tax',
  ref: 'Sintesis TM 1 s/d TM 7 | Kumpulan Soal Komprehensif UTS Terpilih | 10 Jebakan Soal Ujian Pajak',
  intro: 'TM 8 adalah modul peninjauan komprehensif Pra-UTS Perpajakan II yang mensintesiskan materi PPh Wajib Pajak Badan dan Withholding Tax: koreksi fiskal biaya 3M, rekonsiliasi HPP persediaan FIFO/Average, transfer pricing dan pembatasan bunga DER 4:1, penyusutan fiskal pro-rata, kalkulasi withholding tax PPh 22, 23, 26, 4(2), kredit pajak luar negeri PPh 24, serta insentif Pasal 31E.',
  objectives: [
    'Mengintegrasikan rekonsiliasi laba komersial ke fiskal menggunakan kertas kerja koreksi positif/negatif.',
    'Menyelesaikan soal komputasi terpadu pemotongan withholding tax dan kredit pajak tahun berjalan.',
    'Mendeteksi dan menghindari 10 jebakan konseptual terpopuler pada Ujian Tengah Semester Perpajakan II.',
    'Menguasai format penulisan jawaban komputasi pajak beserta rujukan pasal undang-undang yang presisi.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 8.1: Peta Sintesis Integratif Materi Pra-UTS Perpajakan II.',
      svg: SVG_UTS_PJK2_SUMMARY
    },
    {
      kind: 'callout',
      variant: 'key',
      title: '📜 Sintesis Yuridis Komprehensif Pra-UTS: Rujukan Pasal Pokok PPh Badan',
      text: '"Matriks Pasal Kunci yang Diuji pada UTS Perpajakan II:\n1. Penentuan Objek & Beban Usaha: Pasal 4 (Objek), Pasal 6 ayat 1 (Biaya 3M Deductible), Pasal 9 ayat 1 (Non-Deductible Koreksi Positif);\n2. Penilaian Harta & Tarif Badan: Pasal 10 ayat 6 (FIFO/Average, LIFO dilarang), Pasal 17 ayat 1b (Tarif 22%);\n3. Hubungan Istimewa: Pasal 18 ayat 3 (Arm\'s Length Principle / PKKU PMK 172/2023) & Pasal 18 ayat 4 (Kriteria 25% Kepemilikan);\n4. Depresiasi: Pasal 11 ayat 6 (Kelompok 1: 25%, Kelompok 2: 12,5%, Kelompok 3: 6,25%, Kelompok 4: 5%, Bangunan: 5%);\n5. Withholding Tax: Pasal 22 (Impor 2,5%/7,5%), Pasal 23 (Dividen/Bunga 15%, Jasa/Sewa 2%), Pasal 4 ayat 2 (Sewa Gedung 10%, Konstruksi 1,75%-4%);\n6. Pengurang Pajak Akhir Tahun: Pasal 24 (Kredit Pajak LN), Pasal 25 (Angsuran Bulanan), Pasal 31E (Fasilitas Pengurangan Tarif 50% bagi Omzet s.d. Rp 50 M)."'
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 8: Top 5 Tipikal Soal Kasus UTS'
    },
    {
      kind: 'table',
      headers: ['Nomor Kasus UTS', 'Topik yang Diuji', 'Konsep / Regulasi Kunci', 'Kunci Jawaban Ujian'],
      rows: [
        ['Soal Kasus 1', 'Koreksi Fiskal Positif Biaya Jamuan', 'PMK 02/2010 tentang syarat Daftar Nominatif biaya promosi.', 'Jika tidak ada daftar nominatif, koreksi positif 100% menambah PKP.'],
        ['Soal Kasus 2', 'Batas Maksimum Kredit PPh 24', 'Ordinary Credit per Country Limitation di negara bertarif tinggi.', 'Kredit pajak dibatasi maksimum formula PPh 24; kelebihan pajak hangus.'],
        ['Soal Kasus 3', 'Penyusutan Aset Baru Dibeli Tengah Tahun', 'Pasal 11 ayat (3) UU PPh tentang penyusutan pro-rata bulan perolehan.', 'Penyusutan tahun pertama dihitung proporsional jumlah bulan pemakaian/12.'],
        ['Soal Kasus 4', 'Fasilitas Tarif Pasal 31E Omzet Menengah', 'Diskon tarif 50% untuk porsi omzet s/d 4,8 Miliar dari omzet 4,8-50 M.', 'PKP fasilitas = (4,8 M / Omzet) × PKP dikenai tarif 11%; sisanya 22%.'],
        ['Soal Kasus 5', 'Pemotongan PPh 23 Rekanan Non-NPWP', 'Sanksi kenaikan tarif 100% bagi wajib pajak tanpa NPWP.', 'Tarif PPh 23 jasa melonjak dari 2% menjadi 4% dari jumlah bruto.']
      ],
      caption: 'Tabel 8.0: Matriks 5 tipe soal kasus terpopuler UTS Perpajakan II.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 10 Jebakan Terpopuler UTS Perpajakan II'
    },
    {
      kind: 'ul',
      items: [
        '**Jebakan 1 (Dividen Antar-PT)**: Mengira dividen yang diterima perseroan terbatas dalam negeri masih dikenai PPh 23. Sesuai UU HPP, dividen antar-PT dalam negeri adalah **Bukan Objek Pajak** (Koreksi Negatif).',
        '**Jebakan 2 (Metode Persediaan LIFO)**: Mencoba mempertahankan metode LIFO di pembukuan fiskal. Fiskal HANYA membolehkan **FIFO dan Average**.',
        '**Jebakan 3 (Batas Omzet Pasal 31E)**: Menghitung diskon 50% langsung ke seluruh PKP pada omzet Rp 20 Miliar. Fasilitas 50% hanya berlaku untuk **porsi proporsional Rp 4,8 Miliar / Omzet**.',
        '**Jebakan 4 (PPh Final Pasal 4(2) Dikreditkan)**: Memasukkan PPh Final sewa gedung atau jasa konstruksi ke kredit pajak akhir tahun. Pajak Final **MUTLAK TIDAK BOLEH DIKREDITKAN**.',
        '**Jebakan 5 (Bulan Mulai Penyusutan)**: Menyusutkan aset tetap 1 tahun penuh padahal aset dibeli bulan Oktober. Penyusutan fiskal dimulai pada **bulan perolehan (Oktober-Desember = 3 bulan)**.',
        '**Jebakan 6 (Rugi Luar Negeri PPh 24)**: Mengurangkan rugi usaha cabang Singapura dari laba usaha Indonesia. Pasal 24 UU PPh **melarang penggabungan kerugian luar negeri**.',
        '**Jebakan 7 (Sanksi Bunga STP Pajak)**: Membebankan sanksi administrasi bunga/denda pajak. Pasal 9 ayat (1) huruf k menetapkan sanksi pajak adalah **Non-Deductible**.',
        '**Jebakan 8 (Pemberian Natura Karyawan)**: Menganggap seluruh natura non-deductible (aturan lama). Di bawah UU HPP dan PMK 66/2023, natura terkait 3M adalah **Deductible bagi pemberi kerja**.',
        '**Jebakan 9 (Ambang Batas Pengadaan PPh 22)**: Memungut PPh 22 bendaharawan atas transaksi senilai Rp 1.500.000. Belanja barang pemerintah **di bawah Rp 2.000.000 dibebaskan dari PPh 22**.',
        '**Jebakan 10 (DER Bunga Pinjaman)**: Mengakui seluruh bunga utang pemegang saham saat rasio utang 6:1. Batas maksimal DER fiskal adalah **4 : 1** (selisih bunga wajib dikoreksi positif).'
      ]
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Simulasi Komprehensif Soal Ujian Tengah Semester',
      prompt: 'PT Berdikari mencatat laba komersial sebelum pajak Rp 1.000.000.000 (Omzet Rp 10 Miliar). Akuntan menemukan: Beban sumbangan HUT RI Rp 10 Jt, Beban jamuan tanpa daftar nominatif Rp 40 Jt, Pendapatan dividen dari PT Anak (di Indonesia) Rp 150 Jt, dan Penyusutan fiskal Rp 120 Jt (komersial Rp 100 Jt). Hitung PKP dan PPh Badan terutang!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Koreksi Fiskal Positif**: Beban sumbangan RT (10 Jt) + Beban jamuan tanpa nominatif (40 Jt) = **+Rp 50.000.000**.',
            '**Koreksi Fiskal Negatif**: Dividen antar-PT non-objek (150 Jt) + Selisih penyusutan fiskal > komersial (20 Jt) = **-Rp 170.000.000**.',
            '**Penghasilan Kena Pajak (PKP)**: Rp 1.000.000.000 + 50.000.000 - 170.000.000 = **Rp 880.000.000**.',
            '**Perhitungan PPh Badan (Pasal 31E Omzet Rp 10 Miliar)**:\n- $PKP_{Fasilitas} = \\frac{Rp 4,8 \\text{ M}}{Rp 10 \\text{ M}} \\times Rp 880.000.000 = \\mathbf{Rp 422.400.000}$.\n- $PKP_{Non-Fasilitas} = Rp 880.000.000 - Rp 422.400.000 = \\mathbf{Rp 457.600.000}$.\n- PPh Fasilitas = $50\\% \\times 22\\% \\times 422.400.000 = 11\\% \\times 422.400.000 = \\mathbf{Rp 46.464.000}$.\n- PPh Non-Fasilitas = $22\\% \\times 457.600.000 = \\mathbf{Rp 100.672.000}$.\n- **Total PPh Badan Terutang** = 46.464.000 + 100.672.000 = **Rp 147.136.000**.'
          ]
        }
      ]
    },
    CASE_UTS_PJK2_INTEGRATED,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Format Kertas Kerja yang Rapi**: Mulai jawaban ujian rekonsiliasi dari Laba Bersih Komersial, kelompokkan seluruh Koreksi Positif, kelompokkan seluruh Koreksi Negatif, hingga menghasilkan PKP.',
        '**Sertakan Dasar Hukum**: Sebutkan rujukan pasal undang-undang (contoh: "Pasal 9 ayat 1 huruf g UU PPh" untuk sumbangan non-deductible) untuk memastikan nilai esai 100%.',
        '**Koreksi Fiskal Beda Waktu vs Beda Tetap**: Pahami bahwa selisih penyusutan adalah beda waktu (menimbulkan Pajak Tangguhan), sedangkan jamuan tanpa nominatif adalah beda tetap permanen.'
      ]
    }
  ]
};
