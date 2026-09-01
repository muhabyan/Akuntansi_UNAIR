import type { Reading } from '../../../types';
import { CASE_GOVERNMENT_ACCRUAL_STATEMENTS } from '../aspPracticeCases';

const SVG_7_STATEMENTS = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">ARSITEKTUR 7 LAPORAN KEUANGAN PEMERINTAH DAERAH (PP 71/2010)</text>
  
  <rect x="25" y="55" width="200" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">LAPORAN ANGGARAN</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Budgetary - Basis Kas):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">1. LRA (Realisasi Anggaran)</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">   → Pendapatan, Belanja, SiLPA</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">2. LP-SAL (Perubahan Saldo</text>
  <text x="125" y="170" fill="#cbd5e1" font-size="8.5" text-anchor="middle">   Anggaran Lebih Kasda)</text>
  <text x="125" y="188" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Ketaatan Anggaran Kas</text>

  <rect x="240" y="55" width="200" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">LAPORAN FINANSIAL</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Financial - Basis Akrual):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">3. LO (Laporan Operasional)</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">4. LPE (Perubahan Ekuitas)</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">5. NERACA (Aset, Kewajiban)</text>
  <text x="340" y="170" fill="#cbd5e1" font-size="8.5" text-anchor="middle">6. LAK (Arus Kas - BUD/BUN)</text>
  <text x="340" y="188" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Kinerja Operasi Nyata</text>

  <rect x="455" y="55" width="200" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">CATATAN PENGUNGKAPAN</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Disclosures):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">7. CaLK (Catatan atas</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">   Laporan Keuangan):</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penjelasan naratif pos</text>
  <text x="555" y="170" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Rekonsiliasi LRA vs LO</text>
  <text x="555" y="188" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Transparansi Penuh</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Laporan Keuangan Pemerintah Berbasis Akrual (PP 71/2010): Struktur & Rekonsiliasi 7 Laporan',
  ref: 'PP 71/2010 Lampiran I | PSAP 01 s/d PSAP 04 | Struktur 7 Komponen Laporan Keuangan Pemda',
  intro: 'TM 7 membahas struktur lengkap laporan keuangan pemerintah di Indonesia berdasarkan Standar Akuntansi Pemerintahan (SAP) Akrual PP 71/2010: kelompok Laporan Pelaksanaan Anggaran (LRA dan LP-SAL dengan basis kas), kelompok Laporan Finansial (Laporan Operasional, Laporan Perubahan Ekuitas, Neraca, dan Laporan Arus Kas dengan basis akrual), serta Catatan atas Laporan Keuangan (CaLK) termasuk rekonsiliasi keterkaitan pos antar-laporan.',
  objectives: [
    'Membedakan fungsi dan basis pengukuran 7 komponen laporan keuangan pemerintah daerah.',
    'Menganalisis perbedaan pos Pendapatan-LRA vs Pendapatan-LO, serta Belanja vs Beban.',
    'Melacak alur perpindahan Surplus/Defisit LO ke LPE hingga menjadi Ekuitas Akhir di Neraca.',
    'Menghitung saldo akhir Saldo Anggaran Lebih (SAL) pada LP-SAL dari SiLPA LRA.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 7.1: Struktur 7 Komponen Laporan Keuangan Pemerintah menurut PP No. 71 Tahun 2010.',
      svg: SVG_7_STATEMENTS
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 7'
    },
    {
      kind: 'table',
      headers: ['Laporan Keuangan', 'Basis Pengukuran', 'Level Penyusun', 'Output Utama yang Dihasilkan'],
      rows: [
        ['Laporan Realisasi Anggaran (LRA)', 'Basis Kas', 'SKPD & Pemda (Konsolidasian)', 'Realisasi Pendapatan, Belanja, Pembiayaan, dan SiLPA/SiKPA.'],
        ['Laporan Perubahan SAL (LP-SAL)', 'Basis Kas', 'Hanya Pemda (BUD)', 'Saldo Awal SAL, Penggunaan SAL, SiLPA Tahun Berjalan, Saldo Akhir SAL.'],
        ['Laporan Operasional (LO)', 'Basis Akrual', 'SKPD & Pemda', 'Pendapatan-LO, Beban Operasi, Surplus/Defisit Non-Operasional.'],
        ['Laporan Perubahan Ekuitas (LPE)', 'Basis Akrual', 'SKPD & Pemda', 'Ekuitas Awal, Surplus/Defisit LO, Dampak Kumulatif, Ekuitas Akhir.'],
        ['Neraca Daerah', 'Basis Akrual', 'SKPD & Pemda', 'Aset Lancar, Investasi Jangka Panjang, Aset Tetap, Kewajiban, Ekuitas.'],
        ['Laporan Arus Kas (LAK)', 'Basis Kas', 'Hanya BUD / BUN', 'Arus Kas Operasi, Investasi Non-Keuangan, Pembiayaan, Transitoris.'],
        ['Catatan atas Laporan Keuangan (CaLK)', 'Deskriptif & Kuantitatif', 'SKPD & Pemda', 'Rincian akun, kebijakan akuntansi, dan rekonsiliasi LRA vs LO.']
      ],
      caption: 'Tabel 7.0: Matriks 7 komponen laporan keuangan pemerintah daerah.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Rekonsiliasi Silang LRA, LO, & Neraca'
    },
    {
      kind: 'formula',
      text: `\\text{LRA (Basis Kas)}: \\quad \\text{SiLPA / SiKPA} = (\\text{Pendapatan-LRA} - \\text{Belanja}) + (\\text{Penerimaan Pembiayaan} - \\text{Pengeluaran Pembiayaan})
\\text{LO (Basis Akrual)}: \\quad \\text{Surplus / Defisit-LO} = \\text{Pendapatan-LO} - \\text{Beban} \\pm \\text{Pos Luar Biasa}
\\text{LPE}: \\quad \\text{Ekuitas Akhir} = \\text{Ekuitas Awal} + \\text{Surplus/Defisit-LO} \\pm \\text{Koreksi Ekuitas}
\\text{Neraca}: \\quad \\text{Total Aset} = \\text{Kewajiban} + \\text{Ekuitas Akhir}`,
      note: 'Belanja Modal di LRA tidak masuk Beban di LO, melainkan dikapitalisasi menjadi penambahan Aset Tetap di Neraca dan disusutkan menjadi Beban Penyusutan di LO.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Rekonsiliasi Belanja Modal ke LO dan Neraca',
      prompt: 'Pemda membayar kas Rp 20 Miliar untuk membangun gedung kantor baru (umur 20 tahun, tanpa nilai sisa). Depresiasi garis lurus diakui untuk tahun pertama penuh sebesar Rp 1 Miliar. Bagaimana pos-pos tersebut tercermin di LRA, LO, Neraca, dan LAK?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**LRA (Basis Kas)**: Dicatat sebagai **Belanja Modal Pengadaan Gedung** sebesar **Rp 20 Miliar** (mengurangi SiLPA kas).',
            '**LO (Basis Akrual)**: Pengeluaran Rp 20 Miliar BUKAN beban LO; yang masuk ke LO adalah **Beban Penyusutan Gedung** non-kas sebesar **Rp 1 Miliar** (mengurangi Surplus LO).',
            '**Neraca**: Aset Tetap Gedung bertambah Rp 20 Miliar dan Akumulasi Penyusutan bertambah Rp 1 Miliar $\\rightarrow$ Nilai Buku Bersih Gedung = **Rp 19 Miliar**; Kas berkurang Rp 20 Miliar.',
            '**LAK**: Dicatat sebagai **Arus Kas Keluar dari Aktivitas Investasi Aset Non-Keuangan** sebesar **Rp 20 Miliar**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 7'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Komparasi LRA vs LO', 'Perbedaan perlakuan Belanja Modal, Beban Penyusutan, dan Piutang Pajak.', 'Mampu memetakan perbedaan pendapatan/belanja kas vs akrual.'],
        ['2', 'Alur Ekuitas Tunggal di Neraca', 'Transisi dari 3 ekuitas (PP 24/2005) menjadi 1 akun Ekuitas tunggal (PP 71/2010).', 'Mampu menyusun Laporan Perubahan Ekuitas yang sinkron dengan Neraca.'],
        ['3', 'Laporan Tingkat SKPD vs BUD', 'Mengetahui laporan yang wajib disusun dinas (SKPD) vs Pemda (BUD).', 'Mampu mengidentifikasi bahwa SKPD tidak menyusun LP-SAL dan LAK.']
      ],
      caption: 'Tabel 7.2: Peta penguasaan submateri TM 7 Akuntansi Sektor Publik.'
    },
    CASE_GOVERNMENT_ACCRUAL_STATEMENTS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**SKPD Hanya Menyusun 5 Laporan**: SKPD menyusun LRA, LO, LPE, Neraca, dan CaLK. LP-SAL dan Laporan Arus Kas (LAK) HANYA disusun di tingkat entitas pelaporan Pemda (BUD).',
        '**Ekuitas Tunggal**: Di bawah SAP Akrual PP 71/2010, pos pasiva neraca tidak lagi membagi Ekuitas Dana Lancar, Investasi, dan Cadangan; kini hanya ada satu akun yaitu **Ekuitas**.',
        '**Peran Sentral CaLK**: Pembaca laporan keuangan tidak dapat memahami kesehatan fiskal daerah tanpa membaca CaLK karena di sanalah diungkapkan kewajiban kontinjensi dan rincian SILPA.'
      ]
    }
  ]
};
