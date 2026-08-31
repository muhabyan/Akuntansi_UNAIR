import type { Reading } from '../../../types';
import { CASE_ORG_STRUCTURE } from '../manajemenPracticeCases';

const SVG_ORG_STRUCTURES = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">LIMA PENDEKATAN STRUKTUR ORGANISASI (DAFT &amp; MARCIC CH. 7)</text>
  
  <rect x="25" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="82" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. Fungsional</text>
  <text x="82" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Berdasarkan fungsi</text>
  <line x1="35" y1="108" x2="130" y2="108" stroke="#334155"/>
  <text x="82" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• SDM, Finance,</text>
  <text x="82" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  Marketing, R&amp;D</text>
  <text x="82" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Efisiensi skala</text>
  <text x="82" y="180" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">(Silo Fungsional)</text>

  <rect x="155" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="212" y="78" fill="#34d399" font-size="10" font-weight="700" text-anchor="middle">2. Divisional</text>
  <text x="212" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Produk/Wilayah</text>
  <line x1="165" y1="108" x2="260" y2="108" stroke="#334155"/>
  <text x="212" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Divisi Produk A, B</text>
  <text x="212" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Divisi Wilayah</text>
  <text x="212" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Responsif pasar</text>
  <text x="212" y="180" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">(Duplikasi Biaya)</text>

  <rect x="285" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="342" y="78" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">3. Matriks</text>
  <text x="342" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Dual Authority</text>
  <line x1="295" y1="108" x2="390" y2="108" stroke="#334155"/>
  <text x="342" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Dua atasan:</text>
  <text x="342" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">  Fungsi &amp; Proyek</text>
  <text x="342" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Fleksibel tinggi</text>
  <text x="342" y="180" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">(Konflik Wewenang)</text>

  <rect x="415" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="472" y="78" fill="#a855f7" font-size="10" font-weight="700" text-anchor="middle">4. Berbasis Tim</text>
  <text x="472" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Cross-Functional</text>
  <line x1="425" y1="108" x2="520" y2="108" stroke="#334155"/>
  <text x="472" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Tim lintas fungsi</text>
  <text x="472" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pemberdayaan staf</text>
  <text x="472" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Hapus sekat birokrasi</text>
  <text x="472" y="180" fill="#c084fc" font-size="8.5" font-weight="700" text-anchor="middle">(Cepat Beradaptasi)</text>

  <rect x="545" y="55" width="115" height="150" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="602" y="78" fill="#ec4899" font-size="10" font-weight="700" text-anchor="middle">5. Virtual Net</text>
  <text x="602" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Jaringan Modular</text>
  <line x1="555" y1="108" x2="650" y2="108" stroke="#334155"/>
  <text x="602" y="126" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Pusat kecil (hub)</text>
  <text x="602" y="142" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Alih daya fungsi lain</text>
  <text x="602" y="158" fill="#94a3b8" font-size="8.5" text-anchor="middle">• Fleksibilitas global</text>
  <text x="602" y="180" fill="#f472b6" font-size="8.5" font-weight="700" text-anchor="middle">(Kendali Lemah)</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Designing Adaptive Organization Structure: Rentang Kendali & Departementalisasi',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 7',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 7: Menguasai prinsip pengorganisasian vertikal (*Chain of Command, Unity of Command, Scalar Principle*), Wewenang (*Authority*), Tanggung Jawab (*Responsibility*), Delegasi, Rentang Manajemen (*Span of Management / Span of Control*), Sentralisasi vs Desentralisasi, 5 pendekatan Departementalisasi (Fungsional, Divisional, Matriks, Berbasis Tim, dan Jaringan Virtual / *Modular Network*), serta faktor kontinjensi pembentuk struktur (Strategi, Lingkungan, dan Teknologi).',
  objectives: [
    'Mendefinisikan Pengorganisasian (Organizing) sebagai penyebaran sumber daya organisasi untuk mencapai sasaran strategis.',
    'Menjelaskan prinsip Rantai Komando (Chain of Command), Kesatuan Komando (Unity of Command), dan Prinsip Skalar (Scalar Principle).',
    'Membandingkan Struktur Tinggi (*Tall Structure* - rentang kendali sempit) vs Struktur Datar (*Flat Structure* - rentang kendali luas).',
    'Membedakan Sentralisasi (wewenang keputusan di puncak) vs Desentralisasi (wewenang didorong ke tingkat bawah).',
    'Membandingkan 5 pendekatan Departementalisasi beserta kelebihan dan kelemahannya.',
    'Menjelaskan mekanisme koordinasi horisontal: Gugus Tugas (*Task Force*), Integrator Lintas Fungsi (*Project Manager*), dan Relational Coordination.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Lima Pendekatan Desain Struktur Organisasi',
      svg: SVG_ORG_STRUCTURES,
      caption: 'Gambar 7.1: Taksonomi struktur departementalisasi dari hierarki fungsional vertikal hingga jaringan virtual modular.'
    },

    { kind: 'h2', text: '1. Struktur Tinggi (Tall) vs Struktur Datar (Flat)' },
    {
      kind: 'table',
      headers: ['Dimensi Struktur', 'Struktur Tinggi (Tall Structure)', 'Struktur Datar (Flat Structure)'],
      rows: [
        ['Rentang Kendali (Span of Control)', '**Sempit (Narrow)**: Seorang manajer hanya membawahi 3-5 orang bawahan langsung.', '**Luas (Wide)**: Seorang manajer membawahi 15-30 orang bawahan langsung.'],
        ['Tingkatan Hierarki Manajemen', 'Banyak tingkatan hierarki dari direktur hingga staf terbawah.', 'Sedikit tingkatan hierarki (Piramida manajemen lebih ramping).'],
        ['Aliran Komunikasi & Keputusan', 'Lambat dan rentan distorsi pesan saat melewati banyak jenjang perantara.', 'Cepat, langsung, dan responsif terhadap perubahan operasional.'],
        ['Pemberdayaan Karyawan', 'Rendah (Pengawasan mikro / *micro-management* ketat).', '**Tinggi**: Mendorong otonomi, inisiatif, dan tanggung jawab mandiri.']
      ],
      caption: 'Tabel 7.1: Komparasi struktur organisasi tinggi vs datar.'
    },

    { kind: 'h2', text: '2. Lima Pendekatan Departementalisasi Organisasi' },
    {
      kind: 'table',
      headers: ['Pendekatan Departemen', 'Dasar Pengelompokan', 'Kelebihan Utama', 'Kelemahan Utama'],
      rows: [
        ['**1. Fungsional (Functional)**', 'Keahlian/sumber daya yang sama (Pemasaran, Akuntansi, SDM, R&D).', 'Skala ekonomis tinggi, spesialisasi mendalam.', 'Silo fungsional, koordinasi antardepartemen buruk.'],
        ['**2. Divisional (Divisional)**', 'Lini produk serupa, wilayah geografis, atau kelompok pelanggan.', 'Sangat responsif terhadap pasar lokal, fokus produk tinggi.', 'Duplikasi sumber daya antardivisi, persaingan internal.'],
        ['**3. Matriks (Matrix)**', 'Kombinasi simultan antara Fungsional dan Divisional (*Dual Chain of Command*).', 'Pemanfaatan sumber daya sangat efisien dan fleksibel.', 'Konflik perebutan wewenang antar dua atasan, stres peran.'],
        ['**4. Berbasis Tim (Team-Based)**', 'Tim lintas fungsi (*Cross-Functional Teams*) yang mengatur diri sendiri.', 'Hambatan birokrasi runtuh, moral karyawan tinggi.', 'Konflik antarpribadi dalam tim, waktu rapat panjang.'],
        ['**5. Jaringan Virtual (Modular Network)**', 'Perusahaan inti kecil mengalihdayakan (*outsource*) fungsi manufaktur, distribusi, dan IT ke vendor eksternal.', 'Sangat lincah beroperasi global dengan modal minimal.', 'Kendali operasional langsung sangat lemah, risiko vendor.']
      ],
      caption: 'Tabel 7.2: Matriks evaluasi 5 pendekatan departementalisasi.'
    },

    CASE_ORG_STRUCTURE,

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 7 (Pra-UTS)' },
    {
      kind: 'ul',
      items: [
        '**Unity of Command**: Prinsip manajemen klasik yang menyatakan setiap karyawan seharusnya hanya bertanggung jawab kepada satu atasan langsung (dilanggar dalam struktur Matriks).',
        '**Span of Control Optimal**: Dipengaruhi oleh kompetensi bawahan, kesamaan tugas, standardisasi prosedur, dan penggunaan sistem informasi digital.',
        '**Kesesuaian Strategi**: Strategi Diferensiasi membutuhkan struktur organik yang fleksibel dan terdesentralisasi; Strategi Cost Leadership membutuhkan struktur mekanistik yang terpusat dan efisien.'
      ]
    }
  ]
};