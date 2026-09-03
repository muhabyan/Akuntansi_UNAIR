import type { Reading } from '../../../types';
import { CASE_AUDIT_STRATEGY_PROGRAM } from '../pbriPracticeCases';

const SVG_AUDIT_PROGRAM_DESIGN = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgTm14" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="step1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="step2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="step3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="step4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgTm14)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PERANCANGAN PROGRAM AUDIT KOMPREHENSIF BERBASIS RISIKO (SA 330)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">4-STAGE DESIGN</text>

  <g transform="translate(30, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#step1)"/>
    <text class="text-accent-blue" x="14" y="28" fill="#38bdf8" font-size="10" font-weight="800">1. AUDIT OBJECTIVES</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">Penetapan Tujuan & Asersi</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Identifikasi Asersi Kunci</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• Keterjadian Penjualan (Occurrence)</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Kelengkapan Utang (Completeness)</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Hak & Kewajiban Piutang</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• Penilaian Persediaan (Valuation)</text>
    <text class="text-accent-blue" x="18" y="195" fill="#38bdf8" font-size="7.5" font-weight="700">Fokus: Asersi Relevan Kunci</text>
  </g>

  <g transform="translate(245, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#step2)"/>
    <text class="text-accent-green" x="14" y="28" fill="#34d399" font-size="10" font-weight="800">2. RISK-BASED MIX</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">Kombinasi 4 Pengujian</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• TOC (Pengendalian Internal)</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• STOT (Substantif Transaksi)</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• SAP (Prosedur Analitis)</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• TODB (Rincian Saldo Akhir)</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• Trade-off Biaya vs Efektivitas</text>
    <text class="text-accent-green" x="18" y="195" fill="#34d399" font-size="7.5" font-weight="700">Fokus: Audit Testing Mix</text>
  </g>

  <g transform="translate(460, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#step3)"/>
    <text class="text-accent-amber" x="14" y="28" fill="#fbbf24" font-size="10" font-weight="800">3. AUDIT PROCEDURES</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">Instruksi Kerja Rinci</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Perintah Prosedur (Vouching)</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• Penentuan Ukuran Sampel (n)</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Metode Sampling (MUS / Acak)</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Timing: Interim vs Final Audit</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• Dokumentasi Nomor Bukti & Tgl</text>
    <text class="text-accent-amber" x="18" y="195" fill="#fbbf24" font-size="7.5" font-weight="700">Fokus: Prosedur Standar</text>
  </g>

  <g transform="translate(675, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#step4)"/>
    <text class="text-accent-purple" x="14" y="28" fill="#a78bfa" font-size="10" font-weight="800">4. RESIDUAL RISK REVIEW</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">Evaluasi Kecukupan & KKP</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Evaluasi Risiko Deteksi (DR)</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• Review Deviasi Pengendalian</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Perluasan Sampel jika Perlu</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Sign-off Kertas Kerja Audit</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• Basis Opini Laporan Akhir</text>
    <text class="text-accent-purple" x="18" y="195" fill="#a78bfa" font-size="7.5" font-weight="700">Fokus: Kualitas Audit Optimal</text>
  </g>

  <text class="svg-muted" x="450" y="328" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Perancangan Program Audit Komprehensif (SA 330): Menghubungkan penilaian risiko bawaan dan pengendalian dengan pengujian substantif terarah.</text>
</svg>`;

export const TM14_READING: Reading = {
  tm: 14,
  title: 'Penyusunan Program Audit Komprehensif Berbasis Risiko & Rencana Pengujian Akhir (SA 330)',
  ref: 'Arens 16e Ch. 13 & 14 | SA 330 (Respons Auditor atas Risiko yang Dinilai) | Audit Program Design',
  intro: 'TM 14 membahas integrasi akhir seluruh tahapan pengauditan berbasis risiko: perancangan Program Audit Komprehensif (Audit Program Design) untuk siklus penjualan & penerimaan kas, siklus pembelian & pengeluaran kas, serta penentuan ukuran sampel, saat pelaksanaan, dan alokasi staf perikatan.',
  objectives: [
    'Merancang program audit 4 tahap berbasis risiko sesuai standar SA 330.',
    'Menyusun prosedur pengujian pengendalian (TOC) dan pengujian substantif (STOT & TODB).',
    'Menentukan ukuran sampel, metode pemilihan sampel audit, dan saat pelaksanaan pengujian.',
    'Mengevaluasi hasil temuan audit untuk merumuskan simpulan kertas kerja per siklus transaksi.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 14.1: Alur 4 Tahap Perancangan Program Audit Berbasis Risiko (SA 330).',
      svg: SVG_AUDIT_PROGRAM_DESIGN
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 14'
    },
    {
      kind: 'table',
      headers: ['Tahap Program Audit', 'Elemen Prosedur Kunci', 'Contoh Prosedur Siklus Penjualan', 'Standar Dokumentasi KKP'],
      rows: [
        ['1. Uji Pengendalian (TOC)', 'Pemeriksaan otorisasi kredit, pemisahan fungsi billing & kasir.', 'Periksa tanda tangan persetujuan kredit pada 50 faktur penjualan.', 'Tercatat persentase deviasi pengendalian internal.'],
        ['2. Substantif Transaksi (STOT)', 'Vouching pencatatan jurnal ke faktur & surat jalan barang.', 'Vouch jurnal penjualan ke dokumen pengiriman barang (DO).', 'Memastikan tidak ada penjualan fiktif (Occurrence).'],
        ['3. Prosedur Analitis (SAP)', 'Perbandingan rasio marjin laba kotor & perputaran piutang.', 'Bandingkan marjin kotor bulanan dengan tren 3 tahun lalu.', 'Investigasi fluktuasi signifikan di atas threshold.'],
        ['4. Rincian Saldo (TODB)', 'Konfirmasi saldo piutang dan pisah batas (cut-off).', 'Kirim konfirmasi positif ke 30 debitur saldo terbesar.', 'Rekonsiliasi perbedaan saldo konfirmasi.']
      ],
      caption: 'Tabel 14.0: Matriks rancangan program audit siklus pendapatan dan piutang usaha.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Penentuan Ukuran Sampel Audit Substantif'
    },
    {
      kind: 'formula',
      text: 'Ukuran Sampel Moneter (MUS) = (Nilai Buku Populasi x Faktor Keyakinan) / (Tolerable Misstatement - [Expected Misstatement x Expansion Factor])\nSampling Interval (SI) = Nilai Buku Populasi / Ukuran Sampel (n)\nKeputusan Audit: Jika Total Salah Saji Terproyeksi <= Tolerable Misstatement => Saldo Akun Diterima Wajar',
      note: 'Ketika hasil TOC menunjukkan pengendalian internal efektif, auditor dapat menaikkan tingkat risiko deteksi (DR) sehingga ukuran sampel TODB dapat diperkecil.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Perancangan Audit Program Pengujian Asersi Keberadaan Piutang Usaha',
      prompt: 'Auditor menetapkan risiko inheren tinggi atas asersi keberadaan (existence) piutang usaha PT Makmur (Total Piutang Rp 120 Miliar, OM Rp 3 Miliar). Rancang 3 prosedur audit kunci dalam audit program untuk menguji asersi keberadaan tersebut!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Prosedur 1 (Konfirmasi Positif)**: Kirimkan surat konfirmasi piutang positif kepada seluruh debitur dengan saldo > Rp 500 Juta dan sampel acak untuk saldo lainnya (SA 505).',
            '**Prosedur 2 (Penerimaan Kas Setelah Tanggal Neraca / Subsequent Cash Receipt)**: Untuk debitur yang tidak membalas konfirmasi, periksa bukti pelunasan kas di rekening koran bank pada periode Januari-Februari tahun berikutnya.',
            '**Prosedur 3 (Pemeriksaan Dokumen Pendukung Alternatif / Vouching)**: Periksa dokumen surat jalan (bill of lading), pesanan pelanggan (purchase order), dan faktur penjualan yang diotorisasi.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 14'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Hierarki Program Audit SA 330', 'Struktur 4 jenis pengujian audit dan perancangan respons atas risiko teridentifikasi.', 'Mampu merancang matriks program audit lengkap.'],
        ['2', 'Pengujian Siklus Pendapatan & Pembelian', 'Prosedur spesifik pengujian transaksi, konfirmasi, dan uji pisah batas (cut-off).', 'Mampu menuliskan langkah kerja audit per asersi.'],
        ['3', 'Penentuan Timing & Sampling', 'Pemilihan saat pengujian (interim vs year-end) dan penentuan ukuran sampel.', 'Mampu menghitung sampling interval dan sampel MUS.'],
        ['4', 'Evaluasi Temuan & Penyelesaian KKP', 'Proyeksi salah saji sampel ke populasi dan perumusan usulan jurnal penyesuaian.', 'Mampu menyusun kesimpulan hasil pengujian akun.']
      ],
      caption: 'Tabel 14.2: Peta penguasaan submateri TM 14 Pengauditan Berbasis Risiko I.'
    },
    CASE_AUDIT_STRATEGY_PROGRAM,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Program Audit Adalah Panduan Eksekusi**: Program audit bukan sekadar daftar periksa administratif, melainkan instruksi kerja terperinci yang menghubungkan risiko asersi manajemen dengan bukti audit otentik.',
        '**Pengujian Pisah Batas (Cut-off) Sangat Kritis**: Pengujian pisah batas penjualan 5 hari sebelum dan 5 hari sesudah akhir tahun buku wajib dilakukan untuk mencegah pergeseran pengakuan pendapatan (revenue shifting).',
        '**Subsequent Collection Adalah Bukti Alternatif Terkuat**: Jika konfirmasi piutang tidak dijawab oleh debitur, verifikasi penerimaan kas pelunasan setelah tanggal neraca adalah bukti alternatif paling meyakinkan atas keberadaan piutang.'
      ]
    }
  ]
};
