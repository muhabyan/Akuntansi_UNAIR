import type { Reading } from '../../../types';
import { CASE_UTS_ASP_INTEGRATED } from '../aspPracticeCases';

const SVG_UTS_ASP_SUMMARY = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">PETA KONSEP SINTESIS MATERI PRA-UTS AKUNTANSI SEKTOR PUBLIK (TM 1 - TM 7)</text>
  
  <rect x="25" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">TM 1 &amp; TM 2</text>
  <text x="97" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Karakteristik &amp; ISAK 35:</text>
  <text x="97" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Non-profit objective</text>
  <text x="97" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Akuntabilitas publik</text>
  <text x="97" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Aset neto terikat/bebas</text>
  <text x="97" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Entitas Nirlaba</text>

  <rect x="185" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="257" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">TM 3 &amp; TM 4</text>
  <text x="257" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Regulasi &amp; Siklus APBD:</text>
  <text x="257" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Paket UU Keu Negara</text>
  <text x="257" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Musrenbang → RKPD</text>
  <text x="257" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• KUA-PPAS → Perda APBD</text>
  <text x="257" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Siklus Anggaran</text>

  <rect x="345" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="417" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">TM 5 &amp; TM 6</text>
  <text x="417" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Pendekatan &amp; Teknik:</text>
  <text x="417" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• NPM: PBK vs ZBB</text>
  <text x="417" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Akuntansi Dana (Funds)</text>
  <text x="417" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Komitmen / Encumbrance</text>
  <text x="417" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Pengendalian Biaya</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a78bfa" font-size="10.5" font-weight="700" text-anchor="middle">TM 7</text>
  <text x="580" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Laporan Akrual PP 71:</text>
  <text x="580" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• LRA (Kas) vs LO (Akrual)</text>
  <text x="580" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• LP-SAL, LPE, Neraca</text>
  <text x="580" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• LAK BUD &amp; CaLK</text>
  <text x="580" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Pelaporan Resmi</text>
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
