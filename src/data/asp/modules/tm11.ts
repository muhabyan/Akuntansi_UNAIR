import type { Reading } from '../../../types';
import { CASE_PUBLIC_AUDIT_BPK_APIP } from '../aspPracticeCases';

const SVG_AUDIT_SPECTRUM = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">ARSITEKTUR PENGAWASAN SEKTOR PUBLIK: PENGAWAS INTERN (APIP) VS PEMERIKSA EKSTERN (BPK)</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">PENGAWAS INTERN (APIP)</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">BPKP, Inspektorat Jenderal, Inspektorat Daerah:</text>
  <text x="177" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kedudukan: Di bawah Presiden / Menteri / KDH</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Fungsi: Early Warning System &amp; Consulting</text>
  <text x="177" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Output: Reviu Laporan Keuangan &amp; Audit Kepatuhan</text>
  <text x="177" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Pengawasan Preventif Internal</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="497" y="78" fill="#fbbf24" font-size="11" font-weight="700" text-anchor="middle">PEMERIKSA EKSTERN (BPK RI)</text>
  <text x="497" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Badan Pemeriksa Keuangan Republik Indonesia:</text>
  <text x="497" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kedudukan: Lembaga Negara Independen (UUD 1945)</text>
  <text x="497" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Fungsi: Audit Keuangan, Kinerja, &amp; ADTT</text>
  <text x="497" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Output: Opini LKPD &amp; Laporan Hasil Pemeriksaan (LHP)</text>
  <text x="497" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Pertanggungjawaban ke DPR/DPRD</text>
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
