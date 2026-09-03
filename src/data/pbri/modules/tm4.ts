import type { Reading } from '../../../types';
import { CASE_AUDIT_OPINIONS } from '../pbriPracticeCases';

const SVG_AUDIT_OPINION_TREE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgPb4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="wtpGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="wdpGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="advGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
    <linearGradient id="disGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgPb4)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">POHON KEPUTUSAN 4 JENIS OPINI AUDITOR INDEPENDEN (SA 700 &amp; SA 705 REVISI)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">OPINION TREE</text>

  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#wtpGrad)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="97" y="20" fill="#34d399" font-size="10" font-weight="900" text-anchor="middle">1. WAJAR TANPA PENGECUALIAN</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="97" y="54" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">WTP (UNMODIFIED)</text>
    <text class="svg-text" x="10" y="80" fill="#cbd5e1" font-size="7.5">• Bukti audit cukup &amp; tepat</text>
    <text class="svg-text" x="10" y="96" fill="#cbd5e1" font-size="7.5">• Bebas dari salah saji material</text>
    <text class="svg-text" x="10" y="112" fill="#cbd5e1" font-size="7.5">• Sesuai SAK / IFRS secara wajar</text>
    <text class="svg-text" x="10" y="128" fill="#cbd5e1" font-size="7.5">• Tidak ada pembatasan lingkup</text>
    <rect class="svg-badge-green" x="10" y="185" width="175" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="97" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Opini Terbaik (Clean Opinion)</text>
  </g>

  <g transform="translate(245, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#wdpGrad)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="97" y="20" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle">2. WAJAR DENGAN PENGECUALIAN</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="54" fill="#fbbf24" font-size="8" font-weight="800" text-anchor="middle">WDP (QUALIFIED - "KECUALI")</text>
    <text class="svg-text" x="10" y="80" fill="#cbd5e1" font-size="7.5">• Ada salah saji <tspan class="text-accent-amber" fill="#fbbf24" font-weight="700">Material</tspan></text>
    <text class="svg-text" x="10" y="96" fill="#cbd5e1" font-size="7.5">• Namun <tspan class="text-accent-green" fill="#34d399" font-weight="700">TIDAK Pervasif</tspan></text>
    <text class="svg-text" x="10" y="112" fill="#cbd5e1" font-size="7.5">• Hanya terlokalisir di 1 akun</text>
    <text class="svg-text" x="10" y="128" fill="#cbd5e1" font-size="7.5">• Lapkeu secara umum masih wajar</text>
    <rect class="svg-badge-amber" x="10" y="185" width="175" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Material Namun Terisolir</text>
  </g>

  <g transform="translate(455, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#f87171" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#advGrad)" fill-opacity="0.25"/>
    <text class="text-accent-red" x="97" y="20" fill="#f87171" font-size="10" font-weight="800" text-anchor="middle">3. TIDAK WAJAR</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-red" x="97" y="54" fill="#f87171" font-size="8" font-weight="800" text-anchor="middle">ADVERSE OPINION</text>
    <text class="svg-text" x="10" y="80" fill="#cbd5e1" font-size="7.5">• Bukti salah saji didapatkan</text>
    <text class="svg-text" x="10" y="96" fill="#cbd5e1" font-size="7.5">• Salah saji <tspan class="text-accent-red" fill="#f87171" font-weight="700">Material &amp; PERVASIF</tspan></text>
    <text class="svg-text" x="10" y="112" fill="#cbd5e1" font-size="7.5">• Merusak keandalan seluruh lapkeu</text>
    <text class="svg-text" x="10" y="128" fill="#cbd5e1" font-size="7.5">• Lapkeu menyesatkan pembaca</text>
    <rect class="svg-badge-red" x="10" y="185" width="175" height="24" rx="4" fill="#dc2626" fill-opacity="0.2"/>
    <text class="text-accent-red" x="97" y="201" fill="#f87171" font-size="7.5" font-weight="700" text-anchor="middle">Menyesatkan &amp; Rusak Pervasif</text>
  </g>

  <g transform="translate(665, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#disGrad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="97" y="20" fill="#a78bfa" font-size="10" font-weight="800" text-anchor="middle">4. TIDAK MENYATAKAN PENDAPAT</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="24" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="97" y="54" fill="#a78bfa" font-size="8" font-weight="800" text-anchor="middle">DISCLAIMER OF OPINION</text>
    <text class="svg-text" x="10" y="80" fill="#cbd5e1" font-size="7.5">• <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Gagal memperoleh bukti</tspan> audit</text>
    <text class="svg-text" x="10" y="96" fill="#cbd5e1" font-size="7.5">• Pembatasan lingkup <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Pervasif</tspan></text>
    <text class="svg-text" x="10" y="112" fill="#cbd5e1" font-size="7.5">• Keraguan kelangsungan usaha parah</text>
    <text class="svg-text" x="10" y="128" fill="#cbd5e1" font-size="7.5">• Auditor tidak independen</text>
    <rect class="svg-badge-purple" x="10" y="185" width="175" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="97" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Ruang Lingkup Dibatasi Total</text>
  </g>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Laporan Auditor Independen, Modifikasi Opini, & Key Audit Matters',
  ref: 'Arens 16e Ch. 3 | SA 700 (Revisi), SA 701, SA 705, SA 706',
  intro: 'TM 4 membedah struktur format standar Laporan Auditor Independen (LAI): susunan paragraf formal (Opini di awal, Basis Opini, Kelangsungan Usaha, Key Audit Matters/KAM untuk entitas publik, Tanggung Jawab Manajemen & Auditor), modifikasi opini (WDP, Tidak Wajar, Disclaimer), serta penambahan paragraf Penekanan Suatu Hal (EoM) dan Hal Lain (OM).',
  objectives: [
    'Menyusun urutan struktur baku Laporan Auditor Independen sesuai SA 700 (Revisi).',
    'Menentukan 4 jenis opini audit berdasarkan matriks Materialitas vs Sifat Pervasif salah saji (SA 705).',
    'Menganalisis kriteria pencantuman Hal Audit Utama (Key Audit Matters / KAM) sesuai SA 701 pada emiten publik.',
    'Membedakan penggunaan Paragraf Penekanan Suatu Hal (SA 706 EoM) vs Paragraf Hal Lain (SA 706 OM).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 4.1: Matriks Pohon Keputusan Penentuan Opini Auditor (SA 700 & SA 705).',
      svg: SVG_AUDIT_OPINION_TREE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 4'
    },
    {
      kind: 'table',
      headers: ['Sifat Kondisi Audit', 'Material tetapi TIDAK Pervasif', 'Material DAN SANGAT Pervasif'],
      rows: [
        ['Laporan Keuangan Mengandung Salah Saji Material (Penyimpangan SAK)', 'Wajar Dengan Pengecualian (WDP / Qualified Opinion).', 'Opini Tidak Wajar (Adverse Opinion).'],
        ['Ketidakmampuan Memperoleh Bukti Audit Cukup & Tepat (Pembatasan Lingkup)', 'Wajar Dengan Pengecualian (WDP / Qualified Opinion).', 'Menyatakan Tidak Memberikan Pendapat (Disclaimer of Opinion).'],
        ['Auditor Tidak Independen terhadap Klien', 'Disclaimer of Opinion Wajib Diterbitkan (Tanpa memandang materialitas).', 'Disclaimer of Opinion Wajib Diterbitkan.']
      ],
      caption: 'Tabel 4.0: Matriks keputusan opini modifikasian SA 705.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Struktur Baku LAI SA 700'
    },
    {
      kind: 'formula',
      text: `\\text{Struktur Baku LAI SA 700}:
1. \\text{Judul Resmi: \"Laporan Auditor Independen\"} \\r→ 2. \\text{Pihak yang Dituju (Pemegang Saham / Dewan Komisaris)}
\\r→ 3. \\mathbf{\\text{Paragraf OPINI (Di Urutan Pertama)}} \\r→ 4. \\mathbf{\\text{Paragraf BASIS OPINI}}
\\r→ 5. \\text{Kelangsungan Usaha (Going Concern, jika ada)} \\r→ 6. \\mathbf{\\text{Hal Audit Utama / KAM (SA 701)}}
\\r→ 7. \\text{Tanggung Jawab Manajemen & TCWG} \\r→ 8. \\text{Tanggung Jawab Auditor}
\\r→ 9. \\text{Tanda Tangan Partner, Nomor Registrasi AP/KAP, Tanggal LAI, & Alamat}`,
      note: 'Format SA 700 (Revisi) menempatkan paragraf OPINI di bagian paling atas agar pengguna langsung mengetahui kesimpulan audit.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penentuan Opini Kasus Persediaan Terbakar',
      prompt: 'Klien mengalami musnahnya gudang cabang yang menyimpan 15% dari total aset persediaan. Klien tidak memiliki catatan backup fisik dan asuransi menolak klaim. Total aset lain dan laporan laba rugi dapat diaudit tanpa kendala. Tentukan jenis opini auditor dan alasannya!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Jenis Opini**: Wajar Dengan Pengecualian (Qualified Opinion / WDP).',
            '**Justifikasi SA 705**: Terjadi pembatasan lingkup audit karena bukti fisik musnah. Nilai persediaan (15% dari aset) adalah MATERIAL, namun TIDAK PERVASIF karena sisa 85% aset dan operasional perusahaan lainnya dapat diverifikasi secara wajar tanpa merusak keseluruhan laporan keuangan.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 4'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Struktur Format Baku LAI', 'Penempatan paragraf Opini, Basis Opini, KAM, dan Tanggung Jawab.', 'Mampu mengidentifikasi kekeliruan urutan draft laporan audit.'],
        ['2', '4 Jenis Opini Audit', 'Penerapan WTP, WDP, Adverse, dan Disclaimer.', 'Mampu memutuskan opini yang tepat pada skenario salah saji/scope limitation.'],
        ['3', 'Key Audit Matters (SA 701)', 'Kriteria pemilihan hal yang paling signifikan dikomunikasikan ke TCWG.', 'Menguasai pelaporan KAM untuk perusahaan publik/Tbk.'],
        ['4', 'EoM vs OM Paragraphs', 'Perbedaan SA 706 Penekanan Suatu Hal vs Hal Lain.', 'Mampu membedakan isu yang telah diungkapkan di CALK vs isu non-CALK.']
      ],
      caption: 'Tabel 4.2: Peta penguasaan submateri TM 4 PBR I.'
    },
    CASE_AUDIT_OPINIONS,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Tanggal Laporan Audit**: Tidak boleh lebih awal dari tanggal ketika auditor telah memperoleh bukti audit yang cukup dan tepat untuk mendasari opini.',
        '**Emphasis of Matter (EoM)**: Digunakan untuk menarik perhatian pembaca pada hal yang TELAH DIUNGKAPKAN DENGAN TEPAT di laporan keuangan (contoh: litigasi luar biasa / bencana alam).',
        '**Other Matter (OM)**: Digunakan untuk menginformasikan hal yang TIDAK DISAJIKAN di laporan keuangan (contoh: laporan audit tahun lalu diaudit oleh auditor pendahulu).',
        '**KAM (Key Audit Matters)**: Bukan merupakan opini modifikasian terpisah, melainkan penjelasan area audit yang membutuhkan pertimbangan paling signifikan (SA 701).'
      ]
    }
  ]
};
