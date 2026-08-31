import type { Reading } from '../../../types';

const SVG_PLANNING_PHASES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">DELAPAN TAHAP PERENCANAAN AUDIT (SA 300 &amp; SA 315)</text>
  
  <rect x="25" y="55" width="145" height="70" rx="6" fill="#1e293b" stroke="#38bdf8"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. Penerimaan Klien</text>
  <text x="97" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Integritas manajemen</text>
  <text x="97" y="110" fill="#94a3b8" font-size="8.5" text-anchor="middle">&amp; Surat Perikatan</text>

  <rect x="185" y="55" width="145" height="70" rx="6" fill="#1e293b" stroke="#38bdf8"/>
  <text x="257" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">2. Pahami Bisnis</text>
  <text x="257" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Industri, regulasi,</text>
  <text x="257" y="110" fill="#94a3b8" font-size="8.5" text-anchor="middle">&amp; lingkungan eksternal</text>

  <rect x="345" y="55" width="145" height="70" rx="6" fill="#1e293b" stroke="#38bdf8"/>
  <text x="417" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">3. Nilai Risiko Bisnis</text>
  <text x="417" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Risiko kegagalan</text>
  <text x="417" y="110" fill="#94a3b8" font-size="8.5" text-anchor="middle">mencapai sasaran klien</text>

  <rect x="505" y="55" width="145" height="70" rx="6" fill="#1e293b" stroke="#38bdf8"/>
  <text x="577" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">4. Prosedur Analitis</text>
  <text x="577" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Pendahuluan (tren</text>
  <text x="577" y="110" fill="#94a3b8" font-size="8.5" text-anchor="middle">&amp; rasio anomali)</text>

  <rect x="25" y="135" width="145" height="70" rx="6" fill="#1e293b" stroke="#34d399"/>
  <text x="97" y="158" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">5. Set Materialitas</text>
  <text x="97" y="176" fill="#cbd5e1" font-size="9" text-anchor="middle">Overall Materiality</text>
  <text x="97" y="190" fill="#94a3b8" font-size="8.5" text-anchor="middle">&amp; Performance Mat.</text>

  <rect x="185" y="135" width="145" height="70" rx="6" fill="#1e293b" stroke="#34d399"/>
  <text x="257" y="158" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">6. Pahami IC</text>
  <text x="257" y="176" fill="#cbd5e1" font-size="9" text-anchor="middle">Pengendalian Internal</text>
  <text x="257" y="190" fill="#94a3b8" font-size="8.5" text-anchor="middle">COSO &amp; Control Risk</text>

  <rect x="345" y="135" width="145" height="70" rx="6" fill="#1e293b" stroke="#34d399"/>
  <text x="417" y="158" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">7. Nilai Risiko Fraud</text>
  <text x="417" y="176" fill="#cbd5e1" font-size="9" text-anchor="middle">Segitiga kecurangan</text>
  <text x="417" y="190" fill="#94a3b8" font-size="8.5" text-anchor="middle">&amp; risiko salah saji</text>

  <rect x="505" y="135" width="145" height="70" rx="6" fill="#1e293b" stroke="#34d399"/>
  <text x="577" y="158" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">8. Susun Rencana</text>
  <text x="577" y="176" fill="#cbd5e1" font-size="9" text-anchor="middle">Overall Strategy</text>
  <text x="577" y="190" fill="#94a3b8" font-size="8.5" text-anchor="middle">&amp; Program Audit</text>
</svg>`;

export const TM9_READING: Reading = {
  tm: 9,
  title: 'Perencanaan Audit Menyeluruh & Pemahaman Bisnis Klien',
  ref: 'Arens Ch. 8 | SA 300, SA 315',
  intro: 'Modul Pembelajaran Mendalam PBR I TM 9: Menguasai 8 tahapan perencanaan audit, prosedur penerimaan dan keberlanjutan perikatan klien (Client Acceptance & Continuance), penyusunan Surat Perikatan Audit (Engagement Letter), pemahaman industri, strategi audit menyeluruh (Overall Audit Strategy), dan rencana audit terperinci (Audit Plan).',
  objectives: [
    'Memahami 8 langkah utama dalam perencanaan audit berbasis risiko.',
    'Menerapkan prosedur penerimaan klien baru dan komunikasi dengan auditor pendahulu (Predecessor Auditor).',
    'Menyusun Surat Perikatan Audit (Engagement Letter) sesuai SA 210.',
    'Memperoleh pemahaman mendalam mengenai industri, regulasi, dan lingkungan eksternal entitas klien.',
    'Menilai Risiko Bisnis Klien (Client Business Risk) yang berdampak pada salah saji laporan keuangan.',
    'Menyusun Strategi Audit Menyeluruh (Overall Audit Strategy) dan Rencana Audit (Audit Plan).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Delapan Tahap Perencanaan Audit Berbasis Risiko',
      svg: SVG_PLANNING_PHASES,
      caption: 'Gambar 9.1: Alur sistematis perencanaan audit dari penerimaan perikatan hingga penyusunan program audit.'
    },

    { kind: 'h2', text: '1. Penerimaan & Keberlanjutan Klien (SA 210 & SA 220)' },
    {
      kind: 'p',
      text: 'Sebelum menerima atau melanjutkan perikatan audit, KAP wajib melakukan evaluasi ketat atas:'
    },
    {
      kind: 'ul',
      items: [
        '**Integritas Manajemen**: Mengevaluasi reputasi pimpinan, ada/tidaknya pembatasan lingkup masa lalu, serta indikasi tindak pidana korupsi/pencucian uang.',
        '**Kompetensi & Sumber Daya KAP**: Memastikan ketersediaan waktu, personel yang kompeten, dan ahli spesialis industri yang memadai.',
        '**Kepatuhan Etika & Independensi**: Memastikan tidak ada benturan kepentingan atau ancaman independensi yang tak dapat dimitigasi.',
        '**Komunikasi dengan Auditor Pendahulu (Predecessor Auditor)**: Wajib meminta izin klien untuk berkomunikasi dengan auditor tahun lalu mengenai alasan pergantian auditor dan integritas manajemen.'
      ]
    },

    { kind: 'h2', text: '2. Surat Perikatan Audit (Audit Engagement Letter - SA 210)' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Klausul Wajib dalam Surat Perikatan',
      text: '1. Tujuan dan lingkup audit laporan keuangan.\n2. Tanggung jawab auditor.\n3. Tanggung jawab manajemen (penyusunan lapkeu & pengendalian internal).\n4. Identifikasi kerangka pelaporan keuangan yang berlaku (SAK/IFRS).\n5. Bentuk dan isi laporan yang diperkirakan akan diterbitkan oleh auditor.\n6. Dasar penetapan imbalan jasa (Audit Fee) dan termin penagihan.'
    },

    { kind: 'h2', text: '3. Pemahaman Bisnis & Industri Klien (SA 315)' },
    {
      kind: 'table',
      headers: ['Aspek Pemahaman', 'Sumber Informasi & Prosedur', 'Dampak pada Risiko Audit'],
      rows: [
        ['Industri & Regulasi', 'Laporan asosiasi industri, peraturan OJK/BI/Kemenkeu, tren pasar.', 'Mengidentifikasi risiko keusangan teknologi, penurunan pasar, atau risiko ketidakpatuhan hukum.'],
        ['Operasi & Proses Bisnis', 'Kunjungan pabrik (tour of facilities), bagan organisasi, wawancara direksi.', 'Mendeteksi transaksi dengan pihak berelasi (Related Parties) yang tidak wajar.'],
        ['Manajemen & Tata Kelola', 'Pedoman tata kelola, piagam Komite Audit, sistem kompensasi eksekutif.', 'Menilai apakah ada tekanan target bonus berlebihan yang memicu manipulasi laba.'],
        ['Tujuan & Strategi Klien', 'Rencana strategis 5 tahunan, proyeksi anggaran belanja modal.', 'Mengidentifikasi risiko bisnis baru yang dapat berujung pada penurunan nilai aset (impairment).']
      ],
      caption: 'Tabel 9.1: Dimensi pemahaman bisnis klien menurut Standar Audit 315.'
    },

    { kind: 'h2', text: '4. Rangkuman & Kunci Penguasaan Ujian TM 9' },
    {
      kind: 'ul',
      items: [
        '**Auditor Pendahulu**: Komunikasi sebelum menerima perikatan adalah wajib untuk menilai integritas klien.',
        '**Engagement Letter**: Kontrak hukum resmi tertulis antara KAP dan klien yang ditandatangani sebelum audit dimulai.',
        '**Tour of Facilities**: Penting untuk mengamati fisik aset, kondisi pabrik, dan persediaan yang bergerak lambat.'
      ]
    }
  ]
};