import type { Reading } from '../../../types';

const SVG_DECISION_MODELS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TIGA MODEL PENGAMBILAN KEPUTUSAN MANAJERIAL (DAFT &amp; MARCIC CH. 6)</text>
  
  <rect x="30" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="80" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Model Klasik</text>
  <text x="125" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Rational / Classical)</text>
  <line x1="45" y1="110" x2="205" y2="110" stroke="#334155"/>
  <text x="125" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Informasi 100% sempurna</text>
  <text x="125" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Rasionalitas penuh</text>
  <text x="125" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Memaksimalkan nilai</text>
  <text x="125" y="186" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Kondisi Kepastian (Certainty)</text>

  <rect x="245" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="80" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Model Administratif</text>
  <text x="340" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Herbert Simon)</text>
  <line x1="260" y1="110" x2="420" y2="110" stroke="#334155"/>
  <text x="340" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Bounded Rationality</text>
  <text x="340" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Keterbatasan kognitif</text>
  <text x="340" y="166" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">Satisficing (Cukup Baik)</text>
  <text x="340" y="186" fill="#94a3b8" font-size="9" text-anchor="middle">(Kondisi Ketidakpastian)</text>

  <rect x="460" y="55" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="80" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Model Politik</text>
  <text x="555" y="98" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Political Model)</text>
  <line x1="475" y1="110" x2="635" y2="110" stroke="#334155"/>
  <text x="555" y="130" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Sasaran saling bersaing</text>
  <text x="555" y="148" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Membangun Koalisi</text>
  <text x="555" y="166" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Tawar-menawar / Kompromi</text>
  <text x="555" y="186" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">(Kondisi Ambiguitas Tinggi)</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Managerial Decision Making: Model, Proses, & Bias Kognitif',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 6',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 6: Menguasai jenis keputusan manajerial (Keputusan Terprogram / *Programmed* vs Tidak Terprogram / *Nonprogrammed*), 4 kondisi lingkungan pengambilan keputusan (*Certainty, Risk, Uncertainty, Ambiguity*), 3 model pengambilan keputusan (Model Klasik/Rasional, Model Administratif Herbert Simon: *Bounded Rationality & Satisficing*, dan Model Politik / *Coalition Building*), 6 langkah proses pengambilan keputusan, gaya pengambilan keputusan personal, serta mitigasi bias kognitif.',
  objectives: [
    'Membedakan Keputusan Terprogram (situasi rutin berulang dengan SOP baku) vs Keputusan Tidak Terprogram (situasi baru, unik, kompleks, dan berdampak besar).',
    'Menjelaskan kontinum kondisi keputusan dari Kepastian (*Certainty*) hingga Ambiguitas (*Ambiguity*).',
    'Membandingkan 3 model pengambilan keputusan: Model Klasik (Normatif), Model Administratif (Deskriptif), dan Model Politik.',
    'Menerapkan 6 langkah proses pengambilan keputusan manajerial secara sistematis.',
    'Mengidentifikasi 4 gaya pengambilan keputusan personal: Directive, Analytical, Conceptual, dan Behavioral.',
    'Mengatasi 6 bias kognitif umum (*Anchoring, Sunk Cost Trap, Confirmation Bias, Perpetuating Status Quo, Overconfidence, Framing Effect*).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Perbandingan Tiga Model Pengambilan Keputusan Manajerial',
      svg: SVG_DECISION_MODELS,
      caption: 'Gambar 6.1: Pendekatan rasional normatif vs keterbatasan kognitif administratif vs koalisi politik.'
    },

    { kind: 'h2', text: '1. Empat Kondisi Lingkungan Pengambilan Keputusan' },
    {
      kind: 'table',
      headers: ['Kondisi Lingkungan', 'Karakteristik Informasi Masalah', 'Peluang Kegagalan Keputusan'],
      rows: [
        ['**1. Kepastian (Certainty)**', 'Seluruh informasi tersedia lengkap, sasaran jelas, dan hasil dari setiap alternatif dapat diprediksi secara pasti.', 'Sangat Rendah'],
        ['**2. Risiko (Risk)**', 'Sasaran jelas dan informasi memadai, namun hasil di masa depan memiliki kemungkinan probabilitas sukses/gagal (dapat dihitung statistik).', 'Rendah - Sedang'],
        ['**3. Ketidakpastian (Uncertainty)**', 'Sasaran diketahui, tetapi informasi tentang alternatif dan peristiwa masa depan tidak lengkap sehingga probabilitas tidak dapat dihitung.', 'Sedang - Tinggi'],
        ['**4. Ambiguitas (Ambiguity)**', 'Sasaran tidak jelas, masalah tidak terdefinisi dengan baik, alternatif sulit dirumuskan, dan informasi tidak tersedia (*Wicked Problem*).', '**Paling Tinggi (Sangat Kritis)**']
      ],
      caption: 'Tabel 6.1: Spektrum ketidakpastian pengambilan keputusan.'
    },

    { kind: 'h2', text: '2. Enam Langkah Proses Pengambilan Keputusan' },
    {
      kind: 'ol',
      items: [
        '**Langkah 1: Pengakuan Kebutuhan Keputusan (Recognition of Decision Requirement)**: Mengidentifikasi masalah (*problem*) atau peluang (*opportunity*).',
        '**Langkah 2: Diagnosis dan Analisis Penyebab (Diagnosis and Analysis of Causes)**: Menggali akar penyebab yang mendasari situasi.',
        '**Langkah 3: Pengembangan Alternatif (Development of Alternatives)**: Merumuskan opsi-opsi solusi tindakan.',
        '**Langkah 4: Pemilihan Alternatif Terbaik (Selection of Desired Alternative)**: Memilih solusi dengan rasio manfaat-biaya paling optimal yang sesuai toleransi risiko.',
        '**Langkah 5: Penerapan Alternatif Terpilih (Implementation of Chosen Alternative)**: Mengomunikasikan keputusan dan memobilisasi sumber daya eksekusi.',
        '**Langkah 6: Evaluasi dan Umpan Balik (Evaluation and Feedback)**: Memantau hasil efektivitas keputusan dan melakukan tindakan koreksi bila diperlukan.'
      ]
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 6' },
    {
      kind: 'ul',
      items: [
        '**Satisficing**: Memilih alternatif pertama yang memenuhi kriteria minimum yang memuaskan (*good enough*), bukan mencari alternatif sempurna yang memakan waktu dan biaya tak terbatas.',
        '**Coalition Building**: Proses membangun aliansi informal antarbeberapa manajer yang sepakat mendukung tujuan bersama dalam model politik.',
        '**Brainstorming & Devil’s Advocate**: Teknik kelompok untuk mendorong kreativitas alternatif dan mencegah fenomena *Groupthink* (konformitas buta).'
      ]
    }
  ]
};