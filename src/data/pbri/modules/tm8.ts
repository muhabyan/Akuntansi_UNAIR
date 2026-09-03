import type { Reading } from '../../../types';
import { CASE_UTS_REVIEW_INTEGRATED } from '../pbriPracticeCases';

const SVG_UTS_PBRI_SUMMARY = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgUtsPbri" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="p1Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="p2Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="p3Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="p4Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgUtsPbri)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">PETA SINTESIS PRA-UTS PENGAUDITAN BERBASIS RISIKO I (TM 1 s.d. TM 7)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">MASTER ROADMAP</text>

  <g transform="translate(30, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#p1Grad)"/>
    <text class="text-accent-blue" x="14" y="28" fill="#38bdf8" font-size="10" font-weight="800">1. PRA-PERIKATAN & ETIKA</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 1 & TM 2 | SA 200 & SA 210</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Jasa Asurans vs Non-Asurans</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• 5 Prinsip Etika IESBA/IAPI</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Independensi In Fact & Mind</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Evaluasi Integritas Klien</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• Surat Perikatan (SA 210)</text>
    <text class="svg-text" x="18" y="165" fill="#cbd5e1" font-size="7.5">• Pengendalian Mutu KAP (ISQM)</text>
    <text class="text-accent-blue" x="18" y="195" fill="#38bdf8" font-size="7.5" font-weight="700">Output: Perikatan Sah & Etis</text>
  </g>

  <g transform="translate(245, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#p2Grad)"/>
    <text class="text-accent-green" x="14" y="28" fill="#34d399" font-size="10" font-weight="800">2. ASERSI & LAPORAN OPINI</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 3 & TM 4 | SA 700, 705, 706</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Asersi Transaksi & Saldo</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• 5 Format Opini Auditor (SA 700)</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• WTP / Unmodified Opinion</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• WDP, Tidak Wajar, & Disclaimer</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• Key Audit Matters (SA 701)</text>
    <text class="svg-text" x="18" y="165" fill="#cbd5e1" font-size="7.5">• Paragraf Penekanan (SA 706)</text>
    <text class="text-accent-green" x="18" y="195" fill="#34d399" font-size="7.5" font-weight="700">Output: Standar Laporan Final</text>
  </g>

  <g transform="translate(460, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#p3Grad)"/>
    <text class="text-accent-amber" x="14" y="28" fill="#fbbf24" font-size="10" font-weight="800">3. BUKTI AUDIT & KKP</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 5 | SA 230, SA 500, SA 505</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Kecukupan & Ketepatan Bukti</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• 8 Prosedur Bukti (Inspeksi dll)</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Konfirmasi Eksternal (SA 505)</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Dokumentasi Audit KKP (SA 230)</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• Berkas Permanen vs Berkas Kini</text>
    <text class="svg-text" x="18" y="165" fill="#cbd5e1" font-size="7.5">• Batas Retensi KKP 5 Tahun</text>
    <text class="text-accent-amber" x="18" y="195" fill="#fbbf24" font-size="7.5" font-weight="700">Output: Kertas Kerja Valid</text>
  </g>

  <g transform="translate(675, 75)">
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="6" rx="3" fill="url(#p4Grad)"/>
    <text class="text-accent-purple" x="14" y="28" fill="#a78bfa" font-size="10" font-weight="800">4. PERENCANAAN & ANALITIS</text>
    <text class="svg-muted" x="14" y="44" fill="#94a3b8" font-size="7.5">TM 6 & TM 7 | SA 315, 320, 520</text>
    <rect class="svg-subcard" x="10" y="55" width="175" height="165" rx="8" fill="#1e293b"/>
    <text class="svg-text" x="18" y="75" fill="#cbd5e1" font-size="7.5">• Materialitas 3 Tingkat (OM, PM)</text>
    <text class="svg-text" x="18" y="93" fill="#cbd5e1" font-size="7.5">• Benchmark Laba 5% (SA 320)</text>
    <text class="svg-text" x="18" y="111" fill="#cbd5e1" font-size="7.5">• Performance Materiality 50-75%</text>
    <text class="svg-text" x="18" y="129" fill="#cbd5e1" font-size="7.5">• Clearly Trivial Threshold 3-5%</text>
    <text class="svg-text" x="18" y="147" fill="#cbd5e1" font-size="7.5">• Prosedur Analitis Substantif</text>
    <text class="svg-text" x="18" y="165" fill="#cbd5e1" font-size="7.5">• Investigasi Fluktuasi Signifikan</text>
    <text class="text-accent-purple" x="18" y="195" fill="#a78bfa" font-size="7.5" font-weight="700">Output: Strategi Audit Terukur</text>
  </g>

  <text class="svg-muted" x="450" y="328" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Sintesis Terpadu Materi Ujian Tengah Semester: Penguasaan komprehensif konsep teoritis dan perancangan prosedur audit berbasis SA IAPI.</text>
</svg>`;

export const TM8_READING: Reading = {
  tm: 8,
  title: 'Pemantapan Materi & Strategi Sukses Ujian Tengah Semester (UTS) PBR I',
  ref: 'Kompilasi Standar Audit TM 1 s/d TM 7 | SA 200, 210, 220, 230, 240, 250, 300, 315, 320, 450, 500, 505, 520, 700, 705, 706',
  intro: 'TM 8 adalah sesi review komprehensif integrasi materi Pra-UTS Pengauditan Berbasis Risiko I: sintesis keterkaitan antara Kode Etik & Independensi, Tanggung Jawab & Asersi Manajemen, Laporan Auditor Independen, Bukti Audit & KKP, Penetapan Materialitas 3 Tingkat, serta Prosedur Analitis Substantif.',
  objectives: [
    'Mengintegrasikan siklus audit pra-perikatan hingga perumusan opini dalam satu kerangka utuh.',
    'Menganalisis keterkaitan asersi manajemen dengan prosedur pengumpulan bukti audit.',
    'Menentukan opini auditor yang tepat berdasarkan tingkat materialitas dan pervasivitas salah saji.',
    'Menghitung materialitas 3 tingkat dan mengevaluasi temuan prosedur analitis substantif.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 8.1: Peta Sintesis Alur Pengauditan Berbasis Risiko I (Pra-UTS TM 1 s.d. TM 7).',
      svg: SVG_UTS_PBRI_SUMMARY
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) Pra-UTS PBR I'
    },
    {
      kind: 'table',
      headers: ['Topik Pokok', 'Standar Audit (SA) Terkait', 'Fokus Pengujian di UTS', 'Output yang Dikuasai'],
      rows: [
        ['Etika & Independensi', 'SA 200, SA 220, Kode Etik IAPI', 'Ancaman independensi (Self-interest, Self-review, Familiarity, Advokasi, Intimidasi) & safeguards.', 'Mampu mengidentifikasi pelanggaran etika KAP.'],
        ['Asersi Manajemen', 'SA 315 (Asersi Transaksi & Saldo)', 'Pencocokan akun dengan asersi (Keterjadian, Kelengkapan, Keberadaan, Penilaian/Alokasi, Hak & Kewajiban).', 'Mampu merancang prosedur audit per asersi.'],
        ['Modifikasi Opini', 'SA 700, SA 705, SA 706', 'Pohon keputusan opini: Wajar Tanpa Pengecualian, Wajar Dengan Pengecualian, Tidak Wajar, Tidak Memberikan Pendapat.', 'Mampu merumuskan opini berdasarkan sifat salah saji.'],
        ['Bukti Audit & KKP', 'SA 230, SA 500, SA 505', 'Hierarki keandalan bukti (eksternal > internal) dan dokumentasi berkas permanen vs kini.', 'Mampu menyusun format kertas kerja audit.'],
        ['Materialitas 3 Tingkat', 'SA 320 & SA 450', 'Penetapan Overall Materiality (OM), Performance Materiality (PM), dan Summary of Unadjusted Differences (SUD).', 'Mampu menghitung threshold materialitas kuantitatif.']
      ],
      caption: 'Tabel 8.0: Matriks penguasaan materi Ujian Tengah Semester Pengauditan Berbasis Risiko I.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Penentuan Materialitas & Prosedur Analitis'
    },
    {
      kind: 'formula',
      text: 'Overall Materiality (OM) = 5% x Laba Sebelum Pajak Normal (atau 0,5% - 1% x Total Aset/Pendapatan)\nPerformance Materiality (PM) = 50% - 75% x OM\nSummary of Unadjusted Differences (SUD / Trivial) = 3% - 5% x OM\nEvaluasi Salah Saji:\n• Salah Saji Kumulatif < SUD => Diabaikan (Clearly Trivial)\n• SUD <= Salah Saji Kumulatif < OM => WTP (Unmodified)\n• Salah Saji >= OM (Material non-pervasif) => WDP (Qualified Opinion)\n• Salah Saji >= OM (Material & pervasif) => Tidak Wajar (Adverse) / TMP (Disclaimer)',
      note: 'Performance Materiality digunakan sebagai batas toleransi salah saji saat merancang luasnya sampel pengujian substantif akun per akun.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Penentuan Opini Auditor atas Pembatasan Ruang Lingkup dan Salah Saji Material',
      prompt: 'Auditor menemukan PT Sejahtera mencatat persediaan usang sebesar Rp 8 Miliar yang belum disisihkan (Laba sebelum pajak Rp 50 Miliar, OM ditetapkan Rp 2,5 Miliar). Manajemen menolak melakukan penyesuaian audit. Selain itu, manajemen menolak mengizinkan auditor melakukan konfirmasi piutang sebesar 60% dari total aset tanpa alasan valid. Tentukan opini auditor yang wajib diterbitkan!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Evaluasi Salah Saji Persediaan**: Salah saji persediaan sebesar Rp 8 Miliar melebihi OM (Rp 2,5 Miliar) sehingga bersifat **Material**.',
            '**Evaluasi Pembatasan Ruang Lingkup (Scope Limitation)**: Penolakan konfirmasi atas 60% total aset merupakan pembatasan ruang lingkup yang sangat masif, material, dan **Pervasif** terhadap keseluruhan laporan keuangan.',
            '**Penentuan Opini Sesuai SA 705**: Ketika terjadi pembatasan ruang lingkup yang material dan pervasif, auditor tidak dapat memperoleh bukti audit yang cukup dan tepat. Maka auditor **WAJIB menerbitkan Opini Tidak Memberikan Pendapat (Disclaimer of Opinion / Tidak Menyatakan Pendapat)**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 8'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Kerangka SA & Etika Profesi', 'Identifikasi 5 ancaman etika dan penerapan pengamanan.', 'Mampu menyelesaikan studi kasus etika KAP.'],
        ['2', 'Asersi & Prosedur Audit', 'Penentuan prosedur audit yang relevan untuk setiap asersi laporan keuangan.', 'Mampu menyusun matriks asersi dan bukti audit.'],
        ['3', 'Perumusan Laporan Opini', 'Logika pohon keputusan 4 jenis opini audit berdasarkan materialitas & pervasivitas.', 'Mampu menuliskan paragraf basis opini modifikasi.'],
        ['4', 'Kalkulasi Materialitas 3 Tingkat', 'Kalkulasi OM, PM, dan SUD serta evaluasi tabel salah saji tidak terkoreksi.', 'Mampu menghitung nilai threshold materialitas secara presisi.']
      ],
      caption: 'Tabel 8.2: Peta penguasaan submateri TM 8 Pengauditan Berbasis Risiko I.'
    },
    CASE_UTS_REVIEW_INTEGRATED,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Bukti Eksternal Selalu Lebih Andal**: Konfirmasi langsung dari pihak ketiga independen (bank, pelanggan) memiliki derajat keandalan lebih tinggi daripada dokumen internal perusahaan klien.',
        '**Bedakan Tidak Wajar vs Disclaimer**: Opini Tidak Wajar (Adverse) dipilih jika bukti audit LENGKAP dan membuktikan adanya salah saji material dan pervasif; sedangkan Disclaimer (TMP) dipilih jika auditor TIDAK DAPAT memperoleh bukti akibat pembatasan ruang lingkup yang pervasif.',
        '**Prosedur Analitis Wajib di 2 Tahap**: Prosedur analitis WAJIB dilakukan pada tahap perencanaan awal (risk assessment) dan tahap penyelesaian akhir (overall review), sedangkan pada tahap pengujian substantif sifatnya opsional/pertimbangan auditor.'
      ]
    }
  ]
};
