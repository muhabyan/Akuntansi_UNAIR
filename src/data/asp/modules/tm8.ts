import type { Reading } from '../../../types';
import { CASE_UTS_ASP_INTEGRATED } from '../aspPracticeCases';

const SVG_UTS_ASP_SUMMARY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="pk1a" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="pk2a" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="pk3a" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="pk4a" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp8)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PETA SINTESIS KURIKULUM PRA-UTS AKUNTANSI SEKTOR PUBLIK (TM 1 - TM 7)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">ROADMAP UTS</text>

  <!-- 4 Pillars Roadmap -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#pk1a)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="21" fill="#38bdf8" font-size="10.5" font-weight="800">FONDASI &amp; NIRLABA</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-blue" x="44" y="56" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">TM 1 - TM 2</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Sektor Publik vs Swasta</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• ISAK 35 Organisasi Nirlaba</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Aset Neto Terikat/Bebas</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• Akuntabilitas Dana Publik</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Karakteristik Organisasi Non-Profit</text>
    <rect class="svg-badge-blue" x="14" y="185" width="167" height="24" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Karakteristik &amp; Standar Nirlaba</text>
  </g>

  <polygon points="237,185 247,190 237,195" fill="#38bdf8"/>

  <g transform="translate(250, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#pk2a)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="21" fill="#34d399" font-size="10.5" font-weight="800">REGULASI KEUANGAN</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-green" x="44" y="56" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">TM 3</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• UU 17/2003 Keuangan Negara</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• UU 1/2004 Perbendaharaan</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• UU 15/2004 Pemeriksaan BPK</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• PP 71/2010 SAP Akrual</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Asas Pengelolaan Fiskal</text>
    <rect class="svg-badge-green" x="14" y="185" width="167" height="24" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Landasan Yuridis Sektor Publik</text>
  </g>

  <polygon points="452,185 462,190 452,195" fill="#34d399"/>

  <g transform="translate(465, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="225" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="32" rx="12" fill="url(#pk3a)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="14" y="21" fill="#fbbf24" font-size="10.5" font-weight="800">ANGGARAN DAERAH</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-amber" x="44" y="56" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">TM 4 - TM 5</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Siklus APBD (RKPD, KUA-PPAS)</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• RKA-SKPD &amp; Perda APBD</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Line-Item vs Performance NPM</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• Zero-Based Budgeting (ZBB)</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Analisis Standar Belanja (ASB)</text>
    <rect class="svg-badge-amber" x="14" y="185" width="167" height="24" rx="6" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Perencanaan &amp; Penganggaran</text>
  </g>

  <polygon points="667,185 677,190 667,195" fill="#fbbf24"/>

  <g transform="translate(680, 75)">
    <rect class="svg-card" x="0" y="0" width="185" height="225" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="185" height="32" rx="12" fill="url(#pk4a)" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="14" y="21" fill="#a78bfa" font-size="10.5" font-weight="800">STANDAR LAPKEU</text>
    <rect class="svg-subcard" x="14" y="44" width="60" height="18" rx="4" fill="#1e293b"/><text class="text-accent-purple" x="44" y="56" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">TM 6 - TM 7</text>
    <text class="svg-text" x="14" y="80" fill="#cbd5e1" font-size="8">• Basis Kas LRA &amp; LP-SAL</text>
    <text class="svg-text" x="14" y="98" fill="#cbd5e1" font-size="8">• Basis Akrual LO &amp; Neraca</text>
    <text class="svg-text" x="14" y="116" fill="#cbd5e1" font-size="8">• Struktur 7 Komponen SAP</text>
    <text class="svg-text" x="14" y="134" fill="#cbd5e1" font-size="8">• Rekonsiliasi LRA vs LO</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• CaLK Pengungkapan Wajib</text>
    <rect class="svg-badge-purple" x="14" y="185" width="157" height="24" rx="6" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="92" y="201" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Pelaporan Keuangan Pemerintah</text>
  </g>
</svg>`;

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan & Review Ujian Tengah Semester (UTS) Akuntansi Sektor Publik: Sintesis Komprehensif',
  ref: 'Sintesis TM 1 s/d TM 7 | Pembahasan Bank Soal UTS Terpilih | 10 Jebakan Konseptual Terpopuler',
  intro: 'TM 8 adalah sesi review komprehensif Pra-UTS Akuntansi Sektor Publik yang mengintegrasikan seluruh materi TM 1 hingga TM 7: matriks komparasi sektor publik vs swasta, standar pelaporan nirlaba ISAK 35, paket regulasi keuangan negara, tahapan kronologis APBD, pendekatan penganggaran PBK dan ZBB, siklus akuntansi komitmen, serta format rekonsiliasi 7 laporan keuangan pemerintah berbasis akrual.',
  objectives: [
    'Mengintegrasikan pemahaman konsep dasar organisasi publik, standar nirlaba, dan siklus keuangan daerah.',
    'Menyelesaikan soal komputasi dan jurnal anggaran (LRA) vs jurnal finansial (LO & Neraca) secara simultan.',
    'Mendeteksi dan menghindari 10 jebakan konseptual terpopuler pada Ujian Tengah Semester ASP.',
    'Menguasai format penulisan jawaban esai analitis berbasis dasar hukum perundang-undangan.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 8.1: Peta Sintesis Integratif Materi Pra-UTS Akuntansi Sektor Publik.',
      svg: SVG_UTS_ASP_SUMMARY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 8: Top 5 Tipikal Soal Kasus UTS'
    },
    {
      kind: 'table',
      headers: ['Nomor Kasus UTS', 'Topik yang Diuji', 'Konsep / Regulasi Kunci', 'Kunci Jawaban Ujian'],
      rows: [
        ['Soal Kasus 1', 'Reklasifikasi Aset Neto Nirlaba (ISAK 35)', 'Pemenuhan batasan penggunaan donasi program air bersih.', 'Debit Aset Neto Terikat, Kredit Aset Neto Tidak Terikat.'],
        ['Soal Kasus 2', 'Batas Ambang Fiskal (UU 17/2003)', 'Kalkulasi batas defisit APBD/APBN dan rasio kumulatif utang.', 'Defisit max 3% PDB, utang max 60% PDB.'],
        ['Soal Kasus 3', 'Jurnal Ganda Pembelian Aset Tetap', 'Diferensiasi Jurnal Finansial (Akrual) dan Jurnal Anggaran (Kas).', 'LRA: Debit Belanja Modal; LO/Neraca: Debit Aset Tetap, Kredit RK-PPKD.'],
        ['Soal Kasus 4', 'Sisa Pagu Anggaran Bebas (Encumbrance)', 'Kalkulasi sisa dana bebas setelah dikurangi realisasi dan SPK terikat.', 'Unencumbered Balance = Apropriasi - Realisasi - Encumbrance.'],
        ['Soal Kasus 5', 'Rekonsiliasi LRA ke LO', 'Penyesuaian belanja modal gedung, piutang pajak, dan beban depresiasi.', 'Belanja Modal LRA tidak masuk LO; yang masuk adalah Beban Depresiasi.']
      ],
      caption: 'Tabel 8.0: Matriks 5 tipe soal kasus terpopuler UTS Akuntansi Sektor Publik.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 10 Jebakan Terpopuler UTS Akuntansi Sektor Publik'
    },
    {
      kind: 'ul',
      items: [
        '**Jebakan 1 (Aset Neto ISAK 35)**: Mengira nirlaba memiliki akun Ekuitas Modal Saham. ISAK 35 HANYA mengakui Aset Neto (Dengan vs Tanpa Pembatasan).',
        '**Jebakan 2 (Beban Nirlaba)**: Mencatat beban langsung mengurangi Aset Neto Dengan Pembatasan. Seluruh beban operasional yayasan WAJIB mengurangi Aset Neto Tanpa Pembatasan.',
        '**Jebakan 3 (Batas Defisit)**: Menghitung ambang defisit 3% dari total APBD. Aturan UU 17/2003 adalah 3% dari Produk Domestik Bruto (PDB/PDRB), bukan dari APBD.',
        '**Jebakan 4 (Belanja vs Beban)**: Menyamakan istilah Belanja dan Beban. Belanja adalah aliran kas keluar di LRA (basis kas); Beban adalah penurunan manfaat ekonomi di LO (basis akrual).',
        '**Jebakan 5 (Belanja Modal di LO)**: Memasukkan Belanja Modal ke Laporan Operasional (LO). Belanja modal dikapitalisasi ke Neraca, dan yang masuk LO adalah Beban Penyusutan tahunannya.',
        '**Jebakan 6 (Pajak Pusat oleh Bendahara Pemda)**: Mengakui pungutan PPN/PPh oleh bendahara daerah sebagai Pendapatan Pemda. Itu adalah Utang PFK titipan kas negara.',
        '**Jebakan 7 (Laporan yang Disusun SKPD)**: Menyebutkan SKPD menyusun 7 laporan. SKPD TIDAK menyusun LP-SAL dan LAK; hanya BUD yang menyusun keduanya.',
        '**Jebakan 8 (Tenggat APBD)**: Menjawab pengesahan APBD adalah akhir Desember. Batas persetujuan bersama KDH dan DPRD adalah paling lambat **30 November**.',
        '**Jebakan 9 (Encumbrance)**: Menganggap komitmen SPK mengurangi kas di neraca. Komitmen HANYA mengunci sisa pagu di buku anggaran, kas belum berkurang sama sekali.',
        '**Jebakan 10 (Ekuitas Neraca PP 71)**: Membagi ekuitas neraca menjadi Ekuitas Dana Lancar dan Investasi (itu aturan lama PP 24/2005). Di PP 71/2010 ekuitas disajikan **Tunggal**.'
      ]
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Simulasi Komprehensif Kasus Ujian Tengah Semester',
      prompt: 'Dinas Perhubungan membeli bus sekolah seharga Rp 1.200.000.000 melalui mekanisme SP2D-LS diterbitkan BUD. Bus berumur ekonomis 5 tahun tanpa nilai sisa. Bagaimana jurnal lengkap yang harus dibuat oleh akuntan SKPD Dinas Perhubungan pada saat pembelian?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**1. Jurnal Finansial (LO & Neraca - Basis Akrual)**:\n- *Debit*: Aset Tetap - Peralatan dan Mesin (Bus Sekolah) = Rp 1.200.000.000\n- *Kredit*: RK-PPKD = Rp 1.200.000.000.',
            '**2. Jurnal Pelaksanaan Anggaran (LRA - Basis Kas)**:\n- *Debit*: Belanja Modal Pengadaan Alat Angkutan Darat = Rp 1.200.000.000\n- *Kredit*: Perubahan SAL = Rp 1.200.000.000.',
            '**Catatan Ujian**: Akun *RK-PPKD* di sisi kredit jurnal finansial berfungsi sebagai akun modal perantara pengganti kas karena pembayaran langsung ditransfer dari Kas Daerah BUD (mekanisme Langsung / LS).'
          ]
        }
      ]
    },
    CASE_UTS_ASP_INTEGRATED,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Kuasai Jurnal Berpasangan Ganda**: Setiap transaksi pengeluaran kas belanja daerah wajib menghasilkan DUA pasang jurnal secara simultan: Jurnal Finansial dan Jurnal Anggaran.',
        '**Pahami Filosofi Transisi Akrual**: Basis akrual diperkenalkan bukan untuk menghilangkan basis kas (LRA tetap ada), melainkan untuk melengkapi informasi aset tetap dan utang jangka panjang.',
        '**Ketelitian Nomor Regulasi**: Dalam ujian esai, selalu cantumkan referensi regulasi pokok (PP 71/2010, Permendagri 77/2020, UU 17/2003, ISAK 35) untuk memperoleh nilai maksimal.'
      ]
    }
  ]
};
