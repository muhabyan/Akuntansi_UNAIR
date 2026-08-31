import type { Reading } from '../../../types';

const SVG_MOTIVATION_THEORIES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TEORI-TEORI MOTIVASI KONTEMPORER (DAFT &amp; MARCIC CH. 12)</text>
  
  <rect x="25" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="97" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">1. Hierarki Maslow</text>
  <text x="97" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">5 Tingkat Kebutuhan</text>
  <line x1="35" y1="108" x2="160" y2="108" stroke="#334155"/>
  <text x="97" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Fisiologis &amp; Rasa Aman</text>
  <text x="97" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Sosial (Belonging)</text>
  <text x="97" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Penghargaan (Esteem)</text>
  <text x="97" y="180" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Aktualisasi Diri</text>

  <rect x="185" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="257" y="78" fill="#34d399" font-size="10.5" font-weight="700" text-anchor="middle">2. Dua Faktor Herzberg</text>
  <text x="257" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Hygiene vs Motivator</text>
  <line x1="195" y1="108" x2="320" y2="108" stroke="#334155"/>
  <text x="257" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Hygiene: Gaji, SOP,</text>
  <text x="257" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  Kondisi kerja fisik</text>
  <text x="257" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Motivator: Prestasi,</text>
  <text x="257" y="180" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">Tanggung Jawab</text>

  <rect x="345" y="55" width="145" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="417" y="78" fill="#f59e0b" font-size="10.5" font-weight="700" text-anchor="middle">3. Keadilan (Equity)</text>
  <text x="417" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">J. Stacy Adams</text>
  <line x1="355" y1="108" x2="480" y2="108" stroke="#334155"/>
  <text x="417" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Rasio Output / Input</text>
  <text x="417" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Dibandingkan rekan</text>
  <text x="417" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Ketidakadilan picu</text>
  <text x="417" y="180" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Penurunan Usaha</text>

  <rect x="505" y="55" width="150" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="580" y="78" fill="#a855f7" font-size="10.5" font-weight="700" text-anchor="middle">4. Ekspektansi Vroom</text>
  <text x="580" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">E &rarr; P &rarr; O Formula</text>
  <line x1="515" y1="108" x2="645" y2="108" stroke="#334155"/>
  <text x="580" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Expectancy (E &rarr; P)</text>
  <text x="580" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Instrumentality (P &rarr; O)</text>
  <text x="580" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Valence (Nilai Reward)</text>
  <text x="580" y="180" fill="#c084fc" font-size="9" font-weight="700" text-anchor="middle">Motivasi Maksimal</text>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Motivating Employees: Teori Kebutuhan, Proses, & Job Characteristics Model',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 12',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 13: Menguasai konsep dasar motivasi kerja, imbalan intrinsik (*Intrinsic Rewards*) vs ekstrinsik (*Extrinsic Rewards*), Teori Kebutuhan Konten (Hierarki Kebutuhan Abraham Maslow, Teori ERG Clayton Alderfer, Teori Dua Faktor Frederick Herzberg: *Hygiene Factors vs Motivators*, dan Tiga Kebutuhan David McClelland: *nAch, nAff, nPower*), Teori Proses Motivasi (Teori Keadilan / *Equity Theory* J. Stacy Adams dan Teori Ekspektansi Victor Vroom: $E \\rightarrow P$ dan $P \\rightarrow O$), Penguatan Perilaku (*Reinforcement Theory* B.F. Skinner), serta Desain Pekerjaan (*Job Characteristics Model* Hackman & Oldham).',
  objectives: [
    'Mendefinisikan Motivasi sebagai kekuatan pendorong internal atau eksternal yang membangkitkan antusiasme dan ketekunan untuk mengejar tindakan tertentu.',
    'Membedakan Imbalan Intrinsik (kepuasan batin menyelesaikan tugas menantang) vs Imbalan Ekstrinsik (gaji, bonus, pujian formal dari luar).',
    'Membandingkan Teori Kebutuhan Maslow, ERG Alderfer (*Existence, Relatedness, Growth*), dan McClelland.',
    'Menjelaskan Teori Dua Faktor Herzberg: Faktor Higienis (mencegah ketidakpuasan tetapi tidak memotivasi) vs Faktor Motivator (mendorong kepuasan dan kinerja tinggi).',
    'Menerapkan Teori Keadilan (Equity Theory) dan Teori Ekspektansi (Expectancy Theory: $M = E \\times I \\times V$).',
    'Merancang pekerjaan bermakna tinggi menggunakan 5 Dimensi Inti Job Characteristics Model (Skill Variety, Task Identity, Task Significance, Autonomy, Feedback).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Peta Empat Teori Motivasi Kerja Utama (Daft & Marcic)',
      svg: SVG_MOTIVATION_THEORIES,
      caption: 'Gambar 13.1: Landasan teori kebutuhan, perbandingan keadilan, dan ekspektasi hasil dalam memotivasi karyawan.'
    },

    { kind: 'h2', text: '1. Teori Dua Faktor Frederick Herzberg' },
    {
      kind: 'table',
      headers: ['Kelompok Faktor', 'Faktor-Faktor Spesifik di Tempat Kerja', 'Dampak Terhadap Sikap & Motivasi Karyawan'],
      rows: [
        ['**Faktor Higienis (Hygiene Factors)**', '• Gaji dasar & tunjangan\n• Kebijakan & administrasi perusahaan\n• Kondisi kerja fisik kantor\n• Hubungan dengan atasan & rekan kerja', 'Bila terpenuhi, hanya **menghilangkan ketidakpuasan (No Dissatisfaction)**, namun **TIDAK MAMPU MEMOTIVASI** karyawan untuk berprestasi lebih tinggi.'],
        ['**Faktor Motivator (Motivator Factors)**', '• Pengakuan atas prestasi (*Recognition*)\n• Pekerjaan itu sendiri yang bermakna\n• Tanggung jawab lebih besar\n• Kesempatan pertumbuhan pribadi & karir', 'Bila terpenuhi, secara langsung **membangun kepuasan kerja sejati (High Satisfaction)** dan memicu motivasi kinerja luar biasa.']
      ],
      caption: 'Tabel 13.1: Pembedaan esensial faktor pemeliharaan vs faktor pemacu motivasi.'
    },

    { kind: 'h2', text: '2. Model Karakteristik Pekerjaan (Job Characteristics Model)' },
    {
      kind: 'table',
      headers: ['5 Dimensi Inti Pekerjaan', 'Keadaan Psikologis Kritis', 'Hasil Kerja Personal & Organisasi'],
      rows: [
        ['1. Variasi Keterampilan (Skill Variety)\n2. Identitas Tugas (Task Identity)\n3. Signifikansi Tugas (Task Significance)', 'Karyawan merasakan bahwa pekerjaan yang mereka lakukan **Sangat Bermakna (Meaningfulness of Work)**.', '• Motivasi kerja internal tinggi\n• Kinerja pekerjaan berkualitas tinggi\n• Kepuasan kerja tinggi\n• Tingkat absensi & perputaran (*turnover*) rendah'],
        ['4. Otonomi (Autonomy)', 'Karyawan merasakan **Tanggung Jawab Penuh atas Hasil Kerja (Responsibility for Outcomes)**.', 'Idem di atas'],
        ['5. Umpan Balik (Feedback)', 'Karyawan memiliki **Pengetahuan Pasti atas Hasil Kinerja Nyata (Knowledge of Actual Results)**.', 'Idem di atas']
      ],
      caption: 'Tabel 13.2: Lima dimensi desain pekerjaan menurut Hackman & Oldham.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 13' },
    {
      kind: 'ul',
      items: [
        '**Formula Ekspektansi Vroom**: Motivasi = Expectancy ($E \\rightarrow P$: keyakinan usaha hasilkan kinerja) $\\times$ Instrumentality ($P \\rightarrow O$: keyakinan kinerja dapatkan imbalan) $\\times$ Valence (nilai penting imbalan bagi individu). Jika salah satu bernilai 0, motivasi total menjadi 0!',
        '**Frustration-Regression Principle (Alderfer)**: Jika kebutuhan tingkat lebih tinggi terhambat, individu akan kembali melipatgandakan pemenuhan kebutuhan tingkat lebih rendah.',
        '**Job Enrichment**: Menggabungkan tanggung jawab tingkat lebih tinggi ke dalam pekerjaan untuk memberikan rasa otonomi dan pencapaian yang lebih besar.'
      ]
    }
  ]
};