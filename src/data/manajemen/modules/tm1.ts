import type { Reading } from '../../../types';
import { CASE_POAC_MANAGERIAL_ROLES } from '../manajemenPracticeCases';

const SVG_POAC_SKILLS = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">FUNSI MANAJEMEN POAC &amp; KETERAMPILAN MANAJERIAL (ROBERT L. KATZ)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">TOP MANAGEMENT</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Direksi / C-Level):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dominan: Keahlian Konseptual</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Keahlian Manusiawi (Human)</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Teknis: Minimal</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Visi &amp; Sasaran Strategis</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">MIDDLE MANAGEMENT</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Kepala Divisi / Manajer):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Keahlian Konseptual: Sedang</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• <tspan fill="#86efac" font-weight="700">Keahlian Manusiawi: TERTINGGI</tspan></text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Keahlian Teknis: Sedang</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Penerjemah Rencana Taktis</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">FIRST-LINE MANAGEMENT</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Supervisor / Team Leader):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Konseptual: Minimal</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Keahlian Manusiawi (Human)</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• <tspan fill="#fde047" font-weight="700">Dominan: Keahlian Teknis</tspan></text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Eksekusi Operasional Harian</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Leading Edge Management: Konsep Dasar, Fungsi POAC, & Peran Manajerial',
  ref: 'Richard L. Daft (Management 13e/14e) Bab 1 | Stephen P. Robbins Bab 1 | Mintzberg Managerial Roles',
  intro: 'TM 1 membahas fondasi esensial ilmu manajemen modern: definisi manajemen sebagai pencapaian tujuan organisasi secara efektif dan efisien melalui integrasi empat fungsi utama POAC (Planning, Organizing, Leading/Actuating, dan Controlling), hierarki keterampilan manajerial menurut Robert L. Katz (Conceptual, Human, dan Technical Skills), serta 10 Peran Manajerial Henry Mintzberg yang terbagi dalam peran Interpersonal, Informasional, dan Pengambilan Keputusan (Decisional).',
  objectives: [
    'Menjelaskan perbedaan mendasar antara Efektivitas (Doing the right things) vs Efisiensi (Doing things right).',
    'Mengintegrasikan 4 fungsi manajemen POAC dalam siklus operasional organisasi modern.',
    'Menganalisis pergeseran proporsi 3 keterampilan manajerial Katz pada level Top, Middle, dan First-line Management.',
    'Mengklasifikasikan 10 peran manajerial Mintzberg ke dalam peran Interpersonal, Informasional, dan Decisional.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Proporsi Tiga Keterampilan Manajerial Katz pada Setiap Tingkatan Manajemen.',
      svg: SVG_POAC_SKILLS
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 1'
    },
    {
      kind: 'table',
      headers: ['Fungsi Manajemen (POAC)', 'Aktivitas Kunci Manajer', 'Output / Hasil yang Diharapkan', 'Kaitan dengan Kinerja'],
      rows: [
        ['Planning (Perencanaan)', 'Menetapkan sasaran masa depan dan menentukan tindakan untuk mencapainya.', 'Rencana strategis, sasaran MBO, dan anggaran operasional.', 'Menjamin arah dan tujuan organisasi jelas (Efektivitas).'],
        ['Organizing (Pengorganisasian)', 'Mengalokasikan sumber daya, mendesain struktur tugas, dan mendelegasikan wewenang.', 'Bagan struktur organisasi, job description, dan rantai komando.', 'Mencegah duplikasi peran dan mengoptimalkan aset (Efisiensi).'],
        ['Leading / Actuating (Kepemimpinan)', 'Memotivasi, berkomunikasi, mengarahkan, dan menginspirasi karyawan.', 'Tingkat keterikatan karyawan (employee engagement) dan budaya kerja positif.', 'Mendorong manusia bekerja melampaui standar minimal.'],
        ['Controlling (Pengendalian)', 'Memantau aktivitas, membandingkan kinerja riil dengan standar, dan koreksi deviasi.', 'Laporan evaluasi kinerja, dashboard analitik, dan tindakan korektif.', 'Memastikan realisasi tidak melenceng dari rencana awal.']
      ],
      caption: 'Tabel 1.0: Matriks integrasi 4 fungsi manajemen POAC.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: 10 Peran Manajerial Henry Mintzberg'
    },
    {
      kind: 'table',
      headers: ['Kategori Utama', 'Peran Spesifik', 'Perilaku Kunci Manajer di Lapangan'],
      rows: [
        ['Interpersonal Roles', 'Figurehead (Tokoh Simbolis)', 'Menghadiri seremoni pembukaan kantor, menandatangani dokumen legal resmi.'],
        ['Interpersonal Roles', 'Leader (Pemimpin)', 'Memotivasi, melatih, membimbing, dan memberi teladan kepada bawahan.'],
        ['Interpersonal Roles', 'Liaison (Penghubung)', 'Membangun jaringan kontak eksternal di luar rantai komando vertikal.'],
        ['Informational Roles', 'Monitor (Pemantau)', 'Mengamati tren pasar, membaca laporan intelijen industri, menerima rumor internal.'],
        ['Informational Roles', 'Disseminator (Penyebar)', 'Meneruskan informasi strategis kepada anggota tim yang membutuhkan.'],
        ['Informational Roles', 'Spokesperson (Juru Bicara)', 'Menyampaikan konferensi pers dan presentasi resmi kepada pihak luar.'],
        ['Decisional Roles', 'Entrepreneur (Wirausahawan)', 'Menginisiasi proyek inovasi produk baru dan adaptasi perubahan teknologi.'],
        ['Decisional Roles', 'Disturbance Handler (Peredam Krisis)', 'Menyelesaikan mogok kerja karyawan atau perselisihan antar-divisi.'],
        ['Decisional Roles', 'Resource Allocator (Pengalokasi)', 'Menentukan pembagian anggaran modal, peralatan mesin, dan waktu kerja.'],
        ['Decisional Roles', 'Negotiator (Perunding)', 'Bernegosiasi kontrak dengan serikat pekerja, pemasok, atau mitra merger.']
      ],
      caption: 'Tabel 1.1: Klasifikasi 10 peran manajerial Mintzberg.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Dilema Efektivitas vs Efisiensi Pabrik Otomotif',
      prompt: 'Sebuah pabrik perakitan berhasil memproduksi 10.000 unit mobil dengan biaya sangat murah dan tanpa limbah (efisiensi maksimal). Namun, tipe mobil yang diproduksi adalah sedan bensin manual yang sudah tidak diminati pasar karena konsumen beralih ke mobil listrik (tidak efektif). Apakah manajemen pabrik tersebut berkinerja baik?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Definisi Konseptual (Peter Drucker)**:\n- *Efisiensi*: Melakukan sesuatu dengan benar (*Doing things right*) $\\rightarrow$ Fokus pada input, biaya minimal, dan rasio output/input.\n- *Efektivitas*: Melakukan hal yang benar (*Doing the right things*) $\\rightarrow$ Fokus pada kesesuaian hasil akhir dengan kebutuhan pasar dan tujuan strategis.',
            '**Evaluasi Kasus**: Pabrik tersebut memiliki **Efisiensi Tinggi tetapi Efektivitas Nol**. Memproduksi barang yang salah secara murah dan cepat tetap menghasilkan kerugian finansial karena mobil tersebut menumpuk di gudang tanpa ada pembeli.',
            '**Kesimpulan**: Manajemen berkinerja buruk. Manajemen modern menuntut **Efektivitas terlebih dahulu**, baru kemudian dicapai dengan cara yang paling **Efisien**.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 1'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Konsep POAC', 'Definisi, keterkaitan sekuensial, dan implementasi 4 fungsi manajemen.', 'Mampu mengidentifikasi fungsi manajerial pada skenario kasus.'],
        ['2', 'Keterampilan Katz', 'Dinamika kebutuhan keterampilan konseptual, manusiawi, dan teknis pada 3 level.', 'Mampu mendiagnosa defisit keahlian manajerial seorang eksekutif.'],
        ['3', '10 Peran Mintzberg', 'Perbedaan 3 peran interpersonal, 3 informasional, dan 4 decisional.', 'Mampu memetakan tindakan manajer ke dalam peran Mintzberg yang tepat.']
      ],
      caption: 'Tabel 1.2: Peta penguasaan submateri TM 1 Pengantar Manajemen.'
    },
    CASE_POAC_MANAGERIAL_ROLES,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Keahlian Manusiawi Dibutuhkan di Semua Level**: Keterampilan interpersonal (Human Skills) memiliki bobot penting yang konstan dan tinggi di seluruh tingkatan manajemen, dari supervisor hingga CEO.',
        '**Manajer Bukan Individual Contributor**: Transisi tersulit dari staf ahli menjadi manajer pertama kali adalah pergeseran pola pikir: dari menyelesaikan pekerjaan sendiri (*doing*) menjadi mencapai hasil melalui kerja orang lain (*coaching and orchestrating*).',
        '**Sinergi Efektif & Efisien**: Keberhasilan organisasi mensyaratkan pencapaian target yang tepat sasaran (Efektif) dengan konsumsi sumber daya seminimal mungkin (Efisien).'
      ]
    }
  ]
};
