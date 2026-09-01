import type { Reading } from '../../../types';
import { CASE_AUDIT_OPINIONS } from '../pbriPracticeCases';

const SVG_AUDIT_OPINION_TREE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">POHON KEPUTUSAN PENENTUAN OPINI AUDIT (SA 700 &amp; SA 705)</text>
  
  <rect x="25" y="55" width="140" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="95" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">WTP (UNMODIFIED)</text>
  <text x="95" y="100" fill="#94a3b8" font-size="9" text-anchor="middle">Kondisi:</text>
  <text x="95" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Laporan Keuangan</text>
  <text x="95" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">bebas salah saji</text>
  <text x="95" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">material &amp; sesuai SAK.</text>
  <text x="95" y="175" fill="#4ade80" font-size="9.5" font-weight="700" text-anchor="middle">Opini Bersih</text>

  <rect x="180" y="55" width="145" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="252" y="78" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">WDP (QUALIFIED)</text>
  <text x="252" y="100" fill="#94a3b8" font-size="9" text-anchor="middle">Kondisi:</text>
  <text x="252" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Salah saji material</text>
  <text x="252" y="134" fill="#cbd5e1" font-size="8.5" text-anchor="middle">ATAU batasan lingkup,</text>
  <text x="252" y="150" fill="#fde68a" font-size="8.5" text-anchor="middle">TETAPI TIDAK PERVASIF.</text>
  <text x="252" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">"Kecuali untuk..."</text>

  <rect x="340" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="415" y="78" fill="#f87171" font-size="11" font-weight="700" text-anchor="middle">TIDAK WAJAR (ADVERSE)</text>
  <text x="415" y="100" fill="#94a3b8" font-size="9" text-anchor="middle">Kondisi:</text>
  <text x="415" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Salah saji material</text>
  <text x="415" y="134" fill="#fca5a5" font-size="8.5" text-anchor="middle">DAN SANGAT PERVASIF</text>
  <text x="415" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(Merusak laporan).</text>
  <text x="415" y="175" fill="#f87171" font-size="9" font-weight="700" text-anchor="middle">"Tidak menyajikan wajar"</text>

  <rect x="505" y="55" width="150" height="145" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a855f7" font-size="11" font-weight="700" text-anchor="middle">DISCLAIMER</text>
  <text x="580" y="100" fill="#94a3b8" font-size="9" text-anchor="middle">Kondisi:</text>
  <text x="580" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Pembatasan lingkup</text>
  <text x="580" y="134" fill="#e9d5ff" font-size="8.5" text-anchor="middle">material &amp; pervasif</text>
  <text x="580" y="150" fill="#cbd5e1" font-size="8.5" text-anchor="middle">ATAU auditor tdk independen.</text>
  <text x="580" y="175" fill="#a855f7" font-size="9" font-weight="700" text-anchor="middle">"Tidak menyatakan pendapat"</text>
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
1. \\text{Judul Resmi: \"Laporan Auditor Independen\"} \\rightarrow 2. \\text{Pihak yang Dituju (Pemegang Saham / Dewan Komisaris)}
\\rightarrow 3. \\mathbf{\\text{Paragraf OPINI (Di Urutan Pertama)}} \\rightarrow 4. \\mathbf{\\text{Paragraf BASIS OPINI}}
\\rightarrow 5. \\text{Kelangsungan Usaha (Going Concern, jika ada)} \\rightarrow 6. \\mathbf{\\text{Hal Audit Utama / KAM (SA 701)}}
\\rightarrow 7. \\text{Tanggung Jawab Manajemen & TCWG} \\rightarrow 8. \\text{Tanggung Jawab Auditor}
\\rightarrow 9. \\text{Tanda Tangan Partner, Nomor Registrasi AP/KAP, Tanggal LAI, & Alamat}`,
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
