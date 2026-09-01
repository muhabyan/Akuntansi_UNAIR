import type { Reading } from '../../../types';
import { CASE_UTS_PJK2_INTEGRATED } from '../pjk2PracticeCases';

const SVG_UTS_PJK2_SUMMARY = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PETA KONSEP SINTESIS MATERI PRA-UTS PERPAJAKAN II (TM 1 - TM 7)</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">TM 1 &amp; TM 2</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Fondasi &amp; Penilaian:</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Biaya 3M Pasal 6 vs 9</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Persediaan FIFO/Average</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Tarif PPh Badan 22%</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Koreksi Fiskal Awal</text>

  <rect x="185" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="257" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">TM 3 &amp; TM 4</text>
  <text x="257" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">TP &amp; Penyusutan:</text>
  <text x="257" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• ALP &amp; PMK 172/2023</text>
  <text x="257" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Thin Cap DER 4:1</text>
  <text x="257" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kelompok 1-4 &amp; Bangunan</text>
  <text x="257" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Beda Waktu Fiskal</text>

  <rect x="345" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="417" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">TM 5 &amp; TM 6</text>
  <text x="417" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Withholding Tax:</text>
  <text x="417" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PPh 22 Impor/Instansi</text>
  <text x="417" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PPh 23 Jasa (2%) &amp; UMKM</text>
  <text x="417" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PPh 4(2) Sewa &amp; Konstruksi</text>
  <text x="417" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Potput &amp; PPh Final</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">TM 7</text>
  <text x="580" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Kredit &amp; Fasilitas:</text>
  <text x="580" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• PPh 24 Ordinary Credit</text>
  <text x="580" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Fasilitas Tarif 31E</text>
  <text x="580" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Angsuran PPh 25 Bulanan</text>
  <text x="580" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Beban Pajak Akhir</text>
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
