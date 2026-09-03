import type { Reading } from '../../../types';
import { CASE_GOVERNMENT_ACCRUAL_STATEMENTS } from '../aspPracticeCases';

const SVG_7_STATEMENTS = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="lraGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="loGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="calkGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp7)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">STRUKTUR 7 KOMPONEN UTAMA LAPORAN KEUANGAN PEMERINTAH (PP NO. 71 TAHUN 2010)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">7 STATEMENTS</text>

  <!-- 3 Pillar Categories Grid -->
  <!-- 1. Laporan Pelaksanaan Anggaran (Basis Kas) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#lraGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">1. LAPORAN ANGGARAN (KAS)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="55" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Basis Kas (Cash Basis)</text>
    
    <text class="text-accent-blue" x="14" y="78" fill="#38bdf8" font-size="8" font-weight="700">A. Laporan Realisasi Anggaran (LRA):</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="7.5">Membandingkan anggaran vs realisasi pendapatan LRA, belanja daerah, transfer, &amp; pembiayaan.</text>

    <text class="text-accent-blue" x="14" y="118" fill="#38bdf8" font-size="8" font-weight="700">B. Laporan Perubahan SAL (LP-SAL):</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="7.5">Rincian akumulasi SiLPA/SiKPA tahun berjalan ditambah saldo awal SAL.</text>

    <rect class="svg-badge-blue" x="14" y="185" width="237" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">2 Komponen Laporan Anggaran</text>
  </g>

  <!-- 2. Laporan Finansial (Basis Akrual) -->
  <g transform="translate(318, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#loGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle">2. LAPORAN FINANSIAL (AKRUAL)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="55" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Basis Akrual (Accrual Basis)</text>
    
    <text class="text-accent-green" x="14" y="74" fill="#34d399" font-size="7.5" font-weight="700">C. Laporan Operasional (LO):</text>
    <text class="svg-text" x="14" y="86" fill="#cbd5e1" font-size="7">Pendapatan LO dikurangi Beban = Surplus/Defisit LO.</text>

    <text class="text-accent-green" x="14" y="102" fill="#34d399" font-size="7.5" font-weight="700">D. Laporan Perubahan Ekuitas (LPE):</text>
    <text class="svg-text" x="14" y="114" fill="#cbd5e1" font-size="7">Menghubungkan Surplus LO ke Ekuitas Akhir Neraca.</text>

    <text class="text-accent-green" x="14" y="130" fill="#34d399" font-size="7.5" font-weight="700">E. Neraca Pemerintah:</text>
    <text class="svg-text" x="14" y="142" fill="#cbd5e1" font-size="7">Posisi Aset, Kewajiban Utang, &amp; Ekuitas Dana.</text>

    <text class="text-accent-green" x="14" y="158" fill="#34d399" font-size="7.5" font-weight="700">F. Laporan Arus Kas (LAK):</text>
    <text class="svg-text" x="14" y="170" fill="#cbd5e1" font-size="7">Arus kas Operasi, Investasi, Pendanaan, &amp; Transitoris.</text>

    <rect class="svg-badge-green" x="14" y="185" width="237" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">4 Komponen Laporan Finansial</text>
  </g>

  <!-- 3. Catatan atas Laporan Keuangan (CaLK) -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#calkGrad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="132" y="20" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">3. CATATAN LAPORAN (CALK)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="132" y="55" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Pengungkapan Wajib (Disclosure)</text>
    
    <text class="text-accent-purple" x="14" y="78" fill="#a78bfa" font-size="8" font-weight="700">G. CaLK (Catatan atas Lapkeu):</text>
    <text class="svg-text" x="14" y="94" fill="#cbd5e1" font-size="7.5">• Penjelasan naratif rincian pos 6 laporan di samping</text>
    <text class="svg-text" x="14" y="110" fill="#cbd5e1" font-size="7.5">• Kebijakan akuntansi yang dianut (Dasar penilaian)</text>
    <text class="svg-text" x="14" y="126" fill="#cbd5e1" font-size="7.5">• Pencapaian target kinerja keuangan makro daerah</text>
    <text class="svg-text" x="14" y="142" fill="#cbd5e1" font-size="7.5">• Rekonsiliasi perbedaan angka LRA vs LO</text>
    <text class="svg-text" x="14" y="158" fill="#cbd5e1" font-size="7.5">• Informasi kontinjensi &amp; peristiwa setelah tanggal neraca</text>

    <rect class="svg-badge-purple" x="14" y="185" width="237" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="132" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">1 Komponen Pengungkapan Komprehensif</text>
  </g>
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
            '**Neraca**: Aset Tetap Gedung bertambah Rp 20 Miliar dan Akumulasi Penyusutan bertambah Rp 1 Miliar $\\r→$ Nilai Buku Bersih Gedung = **Rp 19 Miliar**; Kas berkurang Rp 20 Miliar.',
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
