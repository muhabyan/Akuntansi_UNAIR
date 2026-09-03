import type { Reading } from '../../../types';
import { CASE_PUBLIC_AUDIT_BPK_APIP } from '../aspPracticeCases';

const SVG_AUDIT_SPECTRUM = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="bpkGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="apipGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp11)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">ARSITEKTUR PENGAWASAN KEUANGAN NEGARA: AUDITOR EKSTERNAL (BPK RI) VS INTERNAL (APIP / BPKP)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">GOV AUDIT</text>

  <!-- Left: BPK RI (External) -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#bpkGrad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="16" y="20" fill="#a78bfa" font-size="10.5" font-weight="800">1. AUDITOR EKSTERNAL INDEPENDEN (BPK RI)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Kedudukan Yuridis:</tspan> Lembaga Tinggi Negara independen (UUD 1945 &amp; UU 15/2004)</text>
    <text class="svg-text" x="14" y="72" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Objek Audit:</tspan> Seluruh entitas pengelola keuangan negara (K/L, Pemda, BUMN, BLU)</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">3 Jenis Pemeriksaan:</tspan></text>
    <text class="text-accent-purple" x="14" y="106" fill="#a78bfa" font-size="7.5">  1. Audit Keuangan (Memberikan Opini WTP/WDP/TW/TMP atas LKPP/LKPD)</text>
    <text class="text-accent-purple" x="14" y="120" fill="#a78bfa" font-size="7.5">  2. Audit Kinerja (Menilai aspek Ekonomi, Efisiensi, &amp; Efektivitas VFM)</text>
    <text class="text-accent-purple" x="14" y="134" fill="#a78bfa" font-size="7.5">  3. Pemeriksaan Dengan Tujuan Tertentu (PDTT / Investigasi Fraud)</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Hasil Pemeriksaan diserahkan kepada DPR, DPD, &amp; DPRD</text>
    
    <rect class="svg-badge-purple" x="14" y="175" width="367" height="30" rx="6" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="197" y="194" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Satu-satunya Lembaga Berwenang Memberikan Opini Lapkeu</text>
  </g>

  <!-- Right: APIP / BPKP (Internal) -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#apipGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="10.5" font-weight="800">2. PENGAWAS INTERN PEMERINTAH (APIP / BPKP)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Komponen APIP:</tspan> BPKP (Nasional), Itjen K/L, &amp; Inspektorat Daerah Provinsi/Kab</text>
    <text class="svg-text" x="14" y="72" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Fungsi Utama:</tspan> Early warning system, consulting partner, &amp; pengawalan akuntabilitas</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="8">• Melakukan reviu atas Laporan Keuangan sebelum diserahkan ke BPK RI</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• Evaluasi Sistem Pengendalian Intern Pemerintah (SPIP Terintegrasi)</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="8">• Audit probity tender pengadaan barang/jasa bernilai strategis</text>
    <text class="svg-text" x="14" y="152" fill="#cbd5e1" font-size="8">• Bertanggung jawab langsung kepada Presiden / Menteri / Kepala Daerah</text>
    
    <rect class="svg-badge-blue" x="14" y="175" width="367" height="30" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="194" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Mitra Konsultasi Manajemen untuk Mencegah Kebocoran Anggaran</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Sinergi: Reviu APIP yang bermutu tinggi menjamin kualitas laporan keuangan pemerintah sebelum diaudit secara independen oleh BPK.</text>
</svg>`;

export const TM11_READING: Reading = {
  tm: 11,
  title: 'Audit Sektor Publik: Pengawasan Intern (APIP), Pemeriksaan Eksternal (BPK RI), & LHP',
  ref: 'UU 15/2004 | UU 15/2006 BPK RI | Standar Pemeriksaan Keuangan Negara (SPKN) | Jenis Opini Audit BPK',
  intro: 'TM 11 membahas ekosistem pemeriksaan dan pengawasan keuangan negara di Indonesia: peran aparat pengawasan intern pemerintah (APIP: BPKP dan Inspektorat) dalam reviu laporan keuangan, kewenangan konstitusional Badan Pemeriksa Keuangan (BPK RI), Standar Pemeriksaan Keuangan Negara (SPKN), 3 jenis pemeriksaan (Audit Keuangan, Audit Kinerja, dan Audit Dengan Tujuan Tertentu / ADTT), 4 opini audit keuangan BPK, serta batas waktu yuridis tindak lanjut temuan LHP.',
  objectives: [
    'Membedakan peran, fungsi, dan independensi APIP (Internal) vs BPK RI (Eksternal).',
    'Menguasai 3 jenis pemeriksaan BPK menurut UU No. 15 Tahun 2004.',
    'Menganalisis kriteria 4 jenis opini audit BPK atas LKPD (WTP, WDP, Tidak Wajar, Tidak Memberikan Pendapat).',
    'Menjelaskan mekanisme tindak lanjut rekomendasi LHP BPK dalam batas waktu 60 hari.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 11.1: Arsitektur Pengawasan Intern (APIP) dan Pemeriksaan Eksternal (BPK RI) di Indonesia.',
      svg: SVG_AUDIT_SPECTRUM
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 11'
    },
    {
      kind: 'table',
      headers: ['Jenis Pemeriksaan BPK', 'Tujuan Pemeriksaan', 'Standar Acuan', 'Bentuk Laporan Hasil'],
      rows: [
        ['Pemeriksaan Keuangan', 'Memberikan pernyataan opini atas kewajaran penyajian LKPP / LKPD.', 'Standar Akuntansi Pemerintahan (SAP PP 71/2010).', 'LHP memuat Pernyataan Opini Audit (WTP, WDP, TW, TMP).'],
        ['Pemeriksaan Kinerja', 'Menilai aspek ekonomi, efisiensi, dan efektivitas (3E) pengelolaan program.', 'Indikator Kinerja & Standar Pelayanan Minimal (SPM).', 'LHP memuat Temuan, Kesimpulan, dan Rekomendasi Perbaikan Manajemen.'],
        ['Pemeriksaan Dengan Tujuan Tertentu (ADTT)', 'Pemeriksaan investigatif, audit kepatuhan, atau pengadaan barang/jasa.', 'Peraturan Perundang-undangan Teknis & Hukum Pembuktian.', 'LHP memuat Temuan Penyimpangan / Kerugian Negara untuk APH.']
      ],
      caption: 'Tabel 11.0: Matriks 3 jenis pemeriksaan keuangan negara oleh BPK RI.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 4 Kriteria Pemberian Opini WTP oleh BPK RI'
    },
    {
      kind: 'formula',
      text: `\\text{Kriteria Opini WTP (Wajar Tanpa Pengecualian) BPK RI}:
\\begin{cases}
\\text{1. Kesesuaian dengan SAP} & \\text{(Kepatuhan penuh pada PP 71/2010 Basis Akrual)} \\\\
\\text{2. Kecukupan Pengungkapan} & \\text{(Full Disclosure memadai pada CaLK)} \\\\
\\text{3. Kepatuhan Peraturan} & \\text{(Bebas dari kerugian negara dan korupsi material)} \\\\
\\text{4. Efektivitas SPI} & \\text{(Sistem Pengendalian Intern pemerintah handal)}
\\end{cases}`,
      note: 'Opini WTP bukan jaminan 100% bebas korupsi; WTP menyatakan bahwa laporan keuangan disajikan wajar dalam semua hal yang material sesuai standar akuntansi.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penentuan Opini Audit Kasus Aset Tetap Tak Terdokumentasi',
      prompt: 'BPK memeriksa LKPD Kabupaten X dan menemukan aset tanah senilai Rp 800 Miliar (15% dari total aset Pemda) tidak memiliki bukti kepemilikan sertifikat, batas fisik tanah tidak jelas, dan tidak ada pencatatan mutasi yang memadai. Manajemen Pemda menolak melakukan koreksi pembukuan. Tentukan opini audit BPK yang paling tepat!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Analisis Materialitas dan Perpasifan**: Nilai Rp 800 Miliar (15% dari total aset) adalah sangat material dan berdampak signifikan terhadap akun Aset Tetap dan Ekuitas di Neraca.',
            '**Penentuan Opini BPK**:\n- Jika auditor menilai dampak pembatasan bukti ini bersifat **Material tetapi Tidak Pervasif** (hanya terlokalisasi pada pos aset tetap tanah): BPK akan memberikan opini **Wajar Dengan Pengecualian (WDP / Qualified Opinion)**.\n- Jika pembatasan bukti tersebut begitu fundamental sehingga auditor tidak dapat memperoleh bukti yang cukup untuk menilai kewajaran laporan keuangan secara keseluruhan: BPK dapat memberikan opini **Tidak Memberikan Pendapat (Disclaimer / TMP)**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 11'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Peran APIP vs BPK RI', 'Pembedaan fungsi reviu laporan keuangan oleh Inspektorat vs audit BPK.', 'Mampu menguraikan rantai pengawasan keuangan publik.'],
        ['2', '3 Jenis Pemeriksaan BPK', 'Audit Keuangan, Audit Kinerja, dan Audit Dengan Tujuan Tertentu (ADTT).', 'Mampu membedakan tujuan dan output masing-masing jenis pemeriksaan.'],
        ['3', 'Klasifikasi Opini Audit BPK', 'Kriteria WTP, WDP, Tidak Wajar (Adverse), dan Disclaimer (TMP).', 'Mampu menentukan jenis opini berdasarkan skenario kasus pemeriksaan.'],
        ['4', 'Tindak Lanjut Rekomendasi LHP', 'Kewajiban tindak lanjut 60 hari dan konsekuensi Tuntutan Ganti Rugi (TGR).', 'Menguasai prosedur penyelesaian kerugian negara/daerah.']
      ],
      caption: 'Tabel 11.2: Peta penguasaan submateri TM 11 Akuntansi Sektor Publik.'
    },
    CASE_PUBLIC_AUDIT_BPK_APIP,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Reviu APIP Sebelum Audit BPK**: Sebelum LKPD diserahkan kepada BPK RI pada akhir Maret, Inspektorat Daerah wajib melakukan Reviu Laporan Keuangan untuk memberikan keyakinan terbatas atas kepatuhan SAP.',
        '**Tenggat 60 Hari Mutlak**: Pejabat yang tidak menindaklanjuti rekomendasi BPK dalam waktu 60 hari dapat dikenai sanksi pidana kurungan paling lama 1 tahun 6 bulan atau denda (UU 15/2004).',
        '**Majelis Tuntutan Perbendaharaan / TGR**: BPK berwenang menetapkan Surat Keputusan Pembebanan Penggantian Kerugian Negara terhadap bendahara yang lalai atau melakukan wanprestasi kas.'
      ]
    }
  ]
};
