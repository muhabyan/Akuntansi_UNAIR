import type { Reading } from '../../../types';
import { CASE_MOTIVATION_THEORIES_JCM } from '../manajemenPracticeCases';

const SVG_JCM_MODEL = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgGrad13" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="jcmCol1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="jcmCol2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="jcmCol3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgGrad13)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">MODEL KARAKTERISTIK PEKERJAAN (JOB CHARACTERISTICS MODEL - HACKMAN &amp; OLDHAM)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">JCM PIPELINE</text>

  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="255" height="215" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="255" height="30" rx="10" fill="url(#jcmCol1)" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="14" y="20" fill="#38bdf8" font-size="10.5" font-weight="800">5 DIMENSI INTI PEKERJAAN</text>
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8.5">• 1. Variasi Keterampilan (Skill Variety)</text>
    <text class="svg-text" x="14" y="74" fill="#cbd5e1" font-size="8.5">• 2. Identitas Tugas (Task Identity)</text>
    <text class="svg-text" x="14" y="96" fill="#cbd5e1" font-size="8.5">• 3. Signifikansi Tugas (Task Significance)</text>
    <line x1="14" y1="110" x2="240" y2="110" stroke="#1e293b"/>
    <text class="text-accent-green" x="14" y="130" fill="#34d399" font-size="8.5" font-weight="700">• 4. OTONOMI MANDIRI (Autonomy)</text>
    <line x1="14" y1="144" x2="240" y2="144" stroke="#1e293b"/>
    <text class="text-accent-amber" x="14" y="164" fill="#fbbf24" font-size="8.5" font-weight="700">• 5. UMPAN BALIK (Feedback)</text>
    <rect class="svg-subcard" x="14" y="180" width="227" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="127" y="194" fill="#38bdf8" font-size="7.5" font-weight="600" text-anchor="middle">Input Karakteristik Desain Tugas</text>
  </g>

  <polygon points="302,180 314,185 302,190" fill="#38bdf8"/>
  <polygon points="585,180 597,185 585,190" fill="#34d399"/>

  <g transform="translate(325, 75)">
    <rect class="svg-card" x="0" y="0" width="255" height="215" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="255" height="30" rx="10" fill="url(#jcmCol2)" fill-opacity="0.2"/>
    <text class="text-accent-green" x="14" y="20" fill="#34d399" font-size="10.5" font-weight="800">KONDISI PSIKOLOGIS KRITIS</text>
    <rect class="svg-subcard" x="14" y="44" width="227" height="42" rx="6" fill="#1e293b"/>
    <text class="svg-text" x="127" y="60" fill="#cbd5e1" font-size="8" font-weight="700" text-anchor="middle">Merasakan Kebermaknaan Kerja</text>
    <text class="svg-muted" x="127" y="74" fill="#94a3b8" font-size="7" text-anchor="middle">(Experienced Meaningfulness)</text>

    <rect class="svg-subcard" x="14" y="94" width="227" height="42" rx="6" fill="#1e293b"/>
    <text class="text-accent-green" x="127" y="110" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Tanggung Jawab atas Hasil</text>
    <text class="svg-muted" x="127" y="124" fill="#94a3b8" font-size="7" text-anchor="middle">(Experienced Responsibility)</text>

    <rect class="svg-subcard" x="14" y="144" width="227" height="42" rx="6" fill="#1e293b"/>
    <text class="text-accent-amber" x="127" y="160" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Pengetahuan Hasil Nyata Kerja</text>
    <text class="svg-muted" x="127" y="174" fill="#94a3b8" font-size="7" text-anchor="middle">(Knowledge of the Actual Results)</text>
  </g>

  <g transform="translate(610, 75)">
    <rect class="svg-card" x="0" y="0" width="255" height="215" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="255" height="30" rx="10" fill="url(#jcmCol3)" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="14" y="20" fill="#fbbf24" font-size="10.5" font-weight="800">HASIL KERJA PERSONAL</text>
    <text class="text-accent-amber" x="14" y="58" fill="#fbbf24" font-size="9" font-weight="700">★ Motivasi Intrinsik Tinggi</text>
    <text class="svg-text" x="14" y="82" fill="#cbd5e1" font-size="8.5">• Kualitas performa kerja unggul</text>
    <text class="svg-text" x="14" y="106" fill="#cbd5e1" font-size="8.5">• Kepuasan kerja maksimal</text>
    <text class="text-accent-green" x="14" y="130" fill="#34d399" font-size="8.5" font-weight="700">• Tingkat absensi sangat rendah</text>
    <text class="text-accent-green" x="14" y="154" fill="#34d399" font-size="8.5" font-weight="700">• Pergantian staf (turnover) minim</text>
    <rect class="svg-badge-amber" x="14" y="176" width="227" height="26" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="127" y="193" fill="#fbbf24" font-size="8" font-weight="700" text-anchor="middle">Tumbuh Optimal</text>
  </g>

  <g transform="translate(35, 302)">
    <rect class="svg-subcard" x="0" y="0" width="830" height="28" rx="8" fill="#1e293b" stroke="#334155"/>
    <text class="svg-text" x="415" y="18" fill="#cbd5e1" font-size="9" font-weight="700" text-anchor="middle">
      <tspan class="text-accent-blue" fill="#38bdf8">MPS (Motivating Potential Score)</tspan> = [ (Skill Variety + Task Identity + Task Significance) / 3 ] × <tspan class="text-accent-green" fill="#34d399">AUTONOMY</tspan> × <tspan class="text-accent-amber" fill="#fbbf24">FEEDBACK</tspan>
    </text>
  </g>
</svg>`;

export const TM13_READING: Reading = {
  tm: 13,
  title: 'Motivating Employees: Teori Kebutuhan, Proses, & Job Characteristics Model',
  ref: 'Richard L. Daft Bab 17 | Maslow, Herzberg, McClelland | Vroom Expectancy Theory & Hackman-Oldham JCM',
  intro: 'TM 13 membahas kekuatan psikologis yang mendorong arah, intensitas, dan ketekunan usaha kerja manusia: Teori Kebutuhan Konten (Hierarki Kebutuhan Maslow, Teori Dua Faktor Herzberg / Motivator-Hygiene, dan Teori Kebutuhan Dipelajari McClelland: Achievement, Affiliation, Power), Teori Proses Motivasi (Teori Harapan Vroom: Expectancy, Instrumentality, Valence; Teori Keadilan J. Stacy Adams; Teori Penetapan Sasaran Edwin Locke), serta rekayasa desain pekerjaan melalui Job Characteristics Model (JCM) untuk menghidupkan motivasi intrinsik.',
  objectives: [
    'Membedakan pemicu motivasi intrinsik (kepuasan internal tugas) vs motivasi ekstrinsik (imbalan kas/hukuman).',
    'Menganalisis Teori Dua Faktor Herzberg: Faktor Hygiene (pencegah ketidakpuasan) vs Motivator (pemicu kepuasan).',
    'Menghitung indeks motivasi menggunakan Teori Harapan Vroom (Motivation = Expectancy × Instrumentality × Valence).',
    'Mengevaluasi persepsi ketidakadilan karyawan menggunakan Teori Keadilan Adams (Equity Theory).',
    'Merancang pekerjaan bermakna menggunakan 5 dimensi inti Job Characteristics Model (Hackman & Oldham).'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 13.1: Model Karakteristik Pekerjaan (Job Characteristics Model) Hackman & Oldham.',
      svg: SVG_JCM_MODEL
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 13'
    },
    {
      kind: 'table',
      headers: ['Teori Motivasi', 'Kategori Teori', 'Mekanisme Utama Pendorong Kinerja', 'Kesalahan Umum Manajer'],
      rows: [
        ['Hierarki Maslow', 'Teori Konten (Kebutuhan)', 'Kebutuhan berjenjang dari fisiologis, rasa aman, sosial, penghargaan, hingga aktualisasi diri.', 'Mencoba memotivasi staf dengan aktualisasi diri padahal gaji pokok belum cukup untuk makan.'],
        ['Dua Faktor Herzberg', 'Teori Konten (Kebutuhan)', 'Hygiene (gaji, AC, hubungan rekan) mencegah ketidakpuasan; Motivator (prestasi, otonomi) memicu kepuasan sejati.', 'Mengira menaikkan gaji pokok otomatis membuat karyawan termotivasi bekerja lebih keras.'],
        ['Teori Harapan Vroom', 'Teori Proses (Kognitif)', 'Motivasi = Harapan (Usaha -> Performa) × Instrumentalitas (Performa -> Imbalan) × Valensi (Nilai Imbalan).', 'Menjanjikan bonus besar (Valensi tinggi) namun target mustahil dicapai (Harapan nol).'],
        ['Teori Keadilan Adams', 'Teori Proses (Kognitif)', 'Karyawan membandingkan rasio Hasil/Masukan (Outcomes/Inputs) dirinya dengan orang lain yang setara.', 'Memberikan gaji rahasia timpang yang memicu kecemburuan dan sabotase rekan kerja.'],
        ['Job Characteristics (JCM)', 'Desain Pekerjaan', '5 dimensi inti (Skill Variety, Identity, Significance, Autonomy, Feedback) menciptakan makna kerja.', 'Membuat pekerjaan sangat sempit dan monoton hingga staf bosan dan burnout.']
      ],
      caption: 'Tabel 13.0: Matriks sintesis teori-teori motivasi utama.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Formula Teori Harapan Vroom & MPS JCM'
    },
    {
      kind: 'formula',
      text: `\\mathbf{\\text{Teori Harapan Vroom}}: \\quad \\text{Motivasi} = E \\times I \\times V
\\begin{aligned}
E & = \\text{Expectancy (Keyakinan bahwa usaha keras akan menghasilkan kinerja yang diinginkan)} \\\\
I & = \\text{Instrumentality (Keyakinan bahwa pencapaian kinerja akan diganjar dengan imbalan nyata)} \\\\
V & = \\text{Valence (Nilai subjektif imbalan bagi karyawan)}
\\end{aligned}
\\mathbf{\\text{Motivating Potential Score (MPS) JCM}}:
\\text{MPS} = \\left(\\frac{\\text{Skill Variety} + \\text{Task Identity} + \\text{Task Significance}}{3}\\right) \\times \\mathbf{\\text{Autonomy}} \\times \\mathbf{\\text{Feedback}}`,
      note: 'Perhatikan bahwa Otonomi (Autonomy) dan Umpan Balik (Feedback) adalah faktor pengali matematis; jika otonomi atau feedback bernilai nol, maka skor motivasi potensial pekerjaan tersebut akan runtuh.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Resolusi Ketidakadilan Gaji Teori Adams',
      prompt: 'Seorang staf akuntansi senior berpendidikan S2 dan bekerja 5 tahun dengan gaji Rp 10 Juta/bulan menemukan bahwa seorang staf baru lulusan S1 tanpa pengalaman direkrut dengan gaji Rp 12 Juta/bulan. Berdasarkan Teori Keadilan Adams, reaksi perilaku apa yang kemungkinan besar akan diambil oleh staf senior tersebut?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Kondisi Ketidakadilan (Underpayment Inequity)**: Rasio Hasil/Masukan staf senior lebih rendah daripada staf baru:\n$\\frac{O_{Senior}}{I_{Senior}} < \\frac{O_{Baru}}{I_{Baru}}$.',
            '**Pilihan Tindakan Pemulihan Keadilan (Adams)**:\n1. *Mengurangi Input*: Mulai datang terlambat, memperlambat tempo kerja, dan menolak lembur.\n2. *Mencoba Mengubah Hasil*: Menghadap pimpinan menuntut kenaikan gaji menjadi minimal Rp 14 Juta.\n3. *Distorsi Kognitif*: Berpikir sinis "paling anak baru itu titipan orang dalam".\n4. *Keluar dari Organisasi*: Mengajukan surat pengunduran diri (*resignation*) untuk pindah ke perusahaan lain yang menghargai pengalamannya.',
            '**Pelajaran bagi Manajemen**: Struktur penggajian harus transparan, memiliki dasar evaluasi jabatan (Job Evaluation) yang adil, dan mematuhi prinsip keadilan internal.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 13'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Teori Kebutuhan (Maslow, Herzberg)', 'Pembedaan faktor hygiene vs motivator dan pemenuhan kebutuhan berjenjang.', 'Mampu mendiagnosa sumber ketidakpuasan kerja karyawan.'],
        ['2', 'Teori Proses (Vroom, Adams)', 'Kalkulasi motivasi E×I×V dan dinamika perbandingan keadilan rasio.', 'Mampu merancang skema bonus insentif yang efektif.'],
        ['3', 'Job Characteristics Model (JCM)', 'Rekayasa 5 dimensi inti dan perhitungan Motivating Potential Score (MPS).', 'Mampu mendesain ulang pekerjaan yang monoton menjadi bermakna.']
      ],
      caption: 'Tabel 13.2: Peta penguasaan submateri TM 13 Pengantar Manajemen.'
    },
    CASE_MOTIVATION_THEORIES_JCM,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Gaji Bukan Motivator Jangka Panjang**: Uang adalah faktor *Hygiene*; gaji yang adil wajib dipenuhi agar karyawan tidak marah, namun motivasi jangka panjang hanya lahir dari pekerjaan yang bermakna (*Motivator*).',
        '**Rantai Harapan Vroom Tidak Boleh Putus**: Sekalipun bonus bernilai miliaran rupiah, jika karyawan merasa mustahil mencapai targetnya (Expectancy = 0), maka karyawan tidak akan tergerak sama sekali.',
        '**Otonomi Membangun Tanggung Jawab**: Memberikan kebebasan staf untuk menentukan cara kerjanya sendiri (*Autonomy*) adalah bahan bakar terkuat untuk menumbuhkan rasa kepemilikan hasil kerja.'
      ]
    }
  ]
};
