import type { Reading } from '../../../types';
import { CASE_MOTIVATION_THEORIES_JCM } from '../manajemenPracticeCases';

const SVG_JCM_MODEL = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">MODEL KARAKTERISTIK PEKERJAAN (JOB CHARACTERISTICS MODEL - HACKMAN &amp; OLDHAM)</text>
  
  <rect x="25" y="55" width="185" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="117" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">5 DIMENSI INTI PEKERJAAN</text>
  <text x="117" y="98" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 1. Variasi Keterampilan (Skill)</text>
  <text x="117" y="118" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 2. Identitas Tugas (Identity)</text>
  <text x="117" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 3. Signifikansi Tugas (Significance)</text>
  <text x="117" y="158" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 4. Otonomi Mandiri (Autonomy)</text>
  <text x="117" y="178" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 5. Umpan Balik (Feedback)</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">KONDISI PSIKOLOGIS KRITIS</text>
  <text x="340" y="105" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Merasakan Kebermaknaan Kerja</text>
  <text x="340" y="122" fill="#94a3b8" font-size="8" text-anchor="middle">(Meaningfulness of the Work)</text>
  <text x="340" y="145" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Tanggung Jawab atas Hasil</text>
  <text x="340" y="162" fill="#94a3b8" font-size="8" text-anchor="middle">(Responsibility for Outcomes)</text>
  <text x="340" y="185" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Pengetahuan Hasil Nyata Kerja</text>

  <rect x="465" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="560" y="78" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">HASIL KERJA PERSONAL</text>
  <text x="560" y="108" fill="#fde047" font-size="9" font-weight="700" text-anchor="middle">Motivasi Kerja Intrinsik Tinggi</text>
  <text x="560" y="132" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Kualitas Kinerja Unggul</text>
  <text x="560" y="156" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Kepuasan Kerja Maksimal</text>
  <text x="560" y="180" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Turnover &amp; Absensi Rendah</text>
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
