import type { Reading } from '../../../types';
import { CASE_AUDIT_TESTING_MIX } from '../pbriPracticeCases';

const SVG_AUDIT_TESTING_MIX = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb12" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="t1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="t2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="t3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="t4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <linearGradient id="t5" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb12)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">5 JENIS PENGUJIAN AUDIT &amp; KOMPOSISI STRATEGI AUDIT (AUDIT TESTING MIX)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">TESTING MIX</text>

  <!-- 5 Columns Cards Grid -->
  <g transform="translate(35, 75)">
    <!-- 1. Risk Assessment -->
    <rect class="svg-card" x="0" y="0" width="158" height="235" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="158" height="28" rx="8" fill="url(#t1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="79" y="19" fill="#38bdf8" font-size="8.5" font-weight="800" text-anchor="middle">1. RISK ASSESS</text>
    <text class="svg-text" x="8" y="44" fill="#cbd5e1" font-size="7">• Memahami bisnis klien &amp; industri</text>
    <text class="svg-text" x="8" y="60" fill="#cbd5e1" font-size="7">• Menilai desain SPI (Walkthrough)</text>
    <text class="svg-text" x="8" y="76" fill="#cbd5e1" font-size="7">• Identifikasi akun berisiko tinggi</text>
    <text class="svg-text" x="8" y="92" fill="#cbd5e1" font-size="7">• Dilakukan saat tahap perencanaan</text>
    <rect class="svg-badge-blue" x="8" y="185" width="142" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="79" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Perencanaan SA 315</text>
  </g>

  <g transform="translate(201, 75)">
    <!-- 2. Test of Controls -->
    <rect class="svg-card" x="0" y="0" width="158" height="235" rx="8" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="158" height="28" rx="8" fill="url(#t2)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="79" y="19" fill="#a78bfa" font-size="8.5" font-weight="800" text-anchor="middle">2. UJI KENDALI (TOC)</text>
    <text class="svg-text" x="8" y="44" fill="#cbd5e1" font-size="7">• Menguji efektivitas operasi SPI</text>
    <text class="svg-text" x="8" y="60" fill="#cbd5e1" font-size="7">• Memeriksa tanda tangan otorisasi</text>
    <text class="svg-text" x="8" y="76" fill="#cbd5e1" font-size="7">• Uji password &amp; hak akses TI</text>
    <text class="svg-text" x="8" y="92" fill="#cbd5e1" font-size="7">• Bila TOC efektif →Uji Substantif dapat dikurangi</text>
    <rect class="svg-badge-purple" x="8" y="185" width="142" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="79" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Uji Efektivitas SPI</text>
  </g>

  <g transform="translate(367, 75)">
    <!-- 3. Substantive Analytical -->
    <rect class="svg-card" x="0" y="0" width="158" height="235" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="158" height="28" rx="8" fill="url(#t3)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="79" y="19" fill="#fbbf24" font-size="8.5" font-weight="800" text-anchor="middle">3. PROSEDUR ANALITIS</text>
    <text class="svg-text" x="8" y="44" fill="#cbd5e1" font-size="7">• Perbandingan rasio &amp; tren akun</text>
    <text class="svg-text" x="8" y="60" fill="#cbd5e1" font-size="7">• Analisis regresi beban gaji vs headcount</text>
    <text class="svg-text" x="8" y="76" fill="#cbd5e1" font-size="7">• Uji kelayakan beban bunga utang</text>
    <text class="svg-text" x="8" y="92" fill="#cbd5e1" font-size="7">• Efisien untuk populasi besar</text>
    <rect class="svg-badge-amber" x="8" y="185" width="142" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="79" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Efisiensi Bukti Makro</text>
  </g>

  <g transform="translate(533, 75)">
    <!-- 4. TODT -->
    <rect class="svg-card" x="0" y="0" width="158" height="235" rx="8" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="158" height="28" rx="8" fill="url(#t4)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="79" y="19" fill="#f87171" font-size="8.5" font-weight="800" text-anchor="middle">4. RINCIAN TRANSAKSI</text>
    <text class="svg-text" x="8" y="44" fill="#cbd5e1" font-size="7">• Vouching faktur penjualan ke jurnal</text>
    <text class="svg-text" x="8" y="60" fill="#cbd5e1" font-size="7">• Tracing surat jalan ke faktur</text>
    <text class="svg-text" x="8" y="76" fill="#cbd5e1" font-size="7">• Uji pisah batas (Cut-off testing)</text>
    <text class="svg-text" x="8" y="92" fill="#cbd5e1" font-size="7">• Memverifikasi aliran debit/kredit akun</text>
    <rect class="svg-badge-red" x="8" y="185" width="142" height="24" rx="4" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="79" y="201" fill="#f87171" font-size="7.5" font-weight="700" text-anchor="middle">Uji Jurnal &amp; Pisah Batas</text>
  </g>

  <g transform="translate(699, 75)">
    <!-- 5. TODB -->
    <rect class="svg-card" x="0" y="0" width="165" height="235" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="165" height="28" rx="8" fill="url(#t5)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="82" y="19" fill="#34d399" font-size="8.5" font-weight="800" text-anchor="middle">5. RINCIAN SALDO (TODB)</text>
    <text class="svg-text" x="8" y="44" fill="#cbd5e1" font-size="7">• Konfirmasi saldo bank &amp; piutang</text>
    <text class="svg-text" x="8" y="60" fill="#cbd5e1" font-size="7">• Observasi fisik persediaan (Stock Opname)</text>
    <text class="svg-text" x="8" y="76" fill="#cbd5e1" font-size="7">• Rekalkulasi beban penyusutan</text>
    <text class="svg-text" x="8" y="92" fill="#cbd5e1" font-size="7">• Biaya pengujian paling mahal namun bukti paling kuat</text>
    <rect class="svg-badge-green" x="8" y="185" width="149" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="82" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Uji Saldo Akhir Neraca</text>
  </g>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Pengujian Pengendalian (TOC), Uji Substantif Transaksi (STOT), & Uji Rinci Saldo (TOD)',
  ref: 'Arens 16e Ch. 13 | SA 330, SA 500 | 5 Types of Audit Tests',
  intro: 'TM 12 membahas integrasi 5 jenis pengujian audit (Audit Testing Mix): Prosedur Penilaian Risiko, Pengujian Pengendalian (TOC), Pengujian Substantif Transaksi (STOT), Prosedur Analitis Substantif (SAP), dan Pengujian Rinci Saldo (TOD). Serta strategi efisiensi biaya audit melalui pengandalan kontrol internal yang efektif.',
  objectives: [
    'Membedakan tujuan, prosedur pelaksanaan, dan biaya relatif dari 5 jenis pengujian audit.',
    'Menjelaskan trade-off antara Pengujian Pengendalian (TOC) dan Pengujian Rinci Saldo (TOD).',
    'Menentukan saat yang tepat untuk melaksanakan pengujian interim (Interim Testing) vs akhir tahun (Year-End Testing).',
    'Merancang bauran pengujian audit optimal berbasis risiko dan tingkat efisiensi anggaran perikatan.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 12.1: Bauran 5 Jenis Pengujian Audit (SA 330 & SA 500).',
      svg: SVG_AUDIT_TESTING_MIX
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 12'
    },
    {
      kind: 'table',
      headers: ['Jenis Pengujian Audit', 'Fokus yang Diuji', 'Bukti yang Dihasilkan', 'Dampak Hasil Pengujian'],
      rows: [
        ['Test of Controls (TOC)', 'Efektivitas operasi kontrol (apakah prosedur otorisasi dijalankan konsisten).', 'Paraf otorisasi, log akses IT, hasil reperformance.', 'Jika TOC efektif -> Control Risk Dinilai Rendah -> Ukuran sampel TOD dapat ditekan signifikan!'],
        ['Substantive Test of Transactions (STOT)', 'Akurasi moneter pencatatan transaksi individual.', 'Faktur, voucher kas, dokumen pengiriman.', 'Menguji apakah rupiah transaksi laba rugi dicatat benar.'],
        ['Substantive Analytical Procedures (SAP)', 'Kewajaran menyeluruh saldo akun melalui hubungan logis data.', 'Hasil perhitungan Proof in Total dan rasio industri.', 'Jika SAP tidak menemukan anomali -> Keyakinan substantif meningkat tanpa uji dokumen manual banyak.'],
        ['Test of Details of Balances (TOD)', 'Kewajaran moneter saldo akhir akun neraca per 31 Desember.', 'Konfirmasi bank/piutang, hasil stock opname fisik, rekening koran subsequent.', 'Memberikan bukti paling meyakinkan (Direct Evidence), namun biayanya paling mahal.']
      ],
      caption: 'Tabel 12.0: Perbandingan 4 pengujian audit respon risiko.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Trade-Off Biaya & Bukti Audit'
    },
    {
      kind: 'formula',
      text: `\\text{Efisiensi Bauran Audit}:
\\text{TOC Efektif (Kontrol Kuat)} \\Longr→ \\text{Control Risk (CR) Rendah} \\Longr→ \\text{Planned Detection Risk (PDR) Tinggi}
\\Longr→ \\mathbf{\\text{Pengujian Rinci Saldo (TOD) Minimal (Hemat Waktu & Biaya!)}}`,
      note: 'Jika hasil TOC menunjukkan kontrol klien gagal/tidak efektif, auditor WAJIB membatalkan pengandalan kontrol dan memperluas sampel TOD hingga 100% populasi saldo akun material.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Strategi Pengujian Akun Piutang Usaha',
      prompt: 'Klien e-commerce memiliki 500.000 transaksi penjualan per bulan yang diproses otomatis oleh sistem ERP. Bagaimana auditor merancang bauran pengujian (TOC vs TOD) yang paling efektif dan efisien?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Fokus Utama pada Automated TOC**: Karena volume transaksi masif (500.000/bulan), memeriksa dokumen satu per satu (TOD manual) sangat tidak efisien. Auditor menguji efektivitas Automated Application Controls (validasi limit kredit dan matching otomatis faktur dengan gateway pembayaran).',
            '**Dampak terhadap TOD**: Jika Automated TOC terbukti beroperasi konsisten sepanjang tahun, auditor cukup mengirim sampel konfirmasi piutang dalam jumlah moderat dan melakukan prosedur analitis substantif atas penerimaan kas.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 12'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', '5 Jenis Pengujian Audit', 'Diferensiasi Risk Assessment, TOC, STOT, SAP, dan TOD.', 'Mampu mengelompokkan prosedur audit spesifik ke dalam 5 jenis pengujian.'],
        ['2', 'Trade-off TOC vs TOD', 'Analisis hubungan efisiensi biaya dan pengandalan kontrol.', 'Mampu merancang bauran pengujian berbasis kondisi kontrol internal klien.'],
        ['3', 'Interim vs Year-End Testing', 'Penentuan waktu pengujian pengendalian dan substantif.', 'Menguasai risiko roll-forward periode interim ke tanggal neraca.']
      ],
      caption: 'Tabel 12.2: Peta penguasaan submateri TM 12 PBR I.'
    },
    CASE_AUDIT_TESTING_MIX,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**TOC Tidak Menghasilkan Rupiah Salah Saji**: TOC hanya menguji apakah kontrol berjalan efektif, sedangkan salah saji moneter hanya diukur oleh STOT, SAP, dan TOD.',
        '**Pengujian Ganda (Dual-Purpose Test)**: Satu prosedur audit dapat berfungsi ganda sebagai TOC sekaligus STOT (contoh: memeriksa faktur penjualan untuk melihat paraf otorisasi sekaligus mencocokkan harga).',
        '**Roll-Forward Period**: Jika TOC dilakukan pada bulan Oktober (interim), auditor wajib melakukan pengujian tambahan atas sisa 2 bulan (November-Desember) untuk memastikan kontrol tidak berubah.'
      ]
    }
  ]
};
