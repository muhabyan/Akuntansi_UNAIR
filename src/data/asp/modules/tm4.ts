import type { Reading } from '../../../types';

const SVG_BUDGET_FUNCTIONS = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">ENAM FUNGSI UTAMA ANGGARAN SEKTOR PUBLIK (APBN / APBD)</text>
  
  <rect x="25" y="55" width="95" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="72" y="78" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">1. Otorisasi</text>
  <text x="72" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Dasar hukum</text>
  <text x="72" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">pelaksanaan</text>
  <line x1="35" y1="120" x2="110" y2="120" stroke="#334155"/>
  <text x="72" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">Izin legalitas</text>
  <text x="72" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">belanja dari</text>
  <text x="72" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">DPR / DPRD</text>
  <text x="72" y="188" fill="#38bdf8" font-size="8.5" font-weight="700" text-anchor="middle">(Legalitas)</text>

  <rect x="130" y="55" width="95" height="150" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="177" y="78" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">2. Perencanaan</text>
  <text x="177" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Pedoman</text>
  <text x="177" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">manajemen</text>
  <line x1="140" y1="120" x2="215" y2="120" stroke="#334155"/>
  <text x="177" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">Panduan target</text>
  <text x="177" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">kegiatan tahun</text>
  <text x="177" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">berjalan</text>
  <text x="177" y="188" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">(Operasional)</text>

  <rect x="235" y="55" width="95" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="282" y="78" fill="#f59e0b" font-size="9.5" font-weight="700" text-anchor="middle">3. Pengawasan</text>
  <text x="282" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Tolok ukur</text>
  <text x="282" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">evaluasi</text>
  <line x1="245" y1="120" x2="320" y2="120" stroke="#334155"/>
  <text x="282" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">Menilai apakah</text>
  <text x="282" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">realisasi sesuai</text>
  <text x="282" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">ketentuan</text>
  <text x="282" y="188" fill="#fbbf24" font-size="8.5" font-weight="700" text-anchor="middle">(Kontrol)</text>

  <rect x="340" y="55" width="95" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="387" y="78" fill="#a855f7" font-size="9.5" font-weight="700" text-anchor="middle">4. Alokasi</text>
  <text x="387" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Membagi sumber</text>
  <text x="387" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">daya publik</text>
  <line x1="350" y1="120" x2="425" y2="120" stroke="#334155"/>
  <text x="387" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">Pendidikan,</text>
  <text x="387" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">kesehatan, &amp;</text>
  <text x="387" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">infrastruktur</text>
  <text x="387" y="188" fill="#c084fc" font-size="8.5" font-weight="700" text-anchor="middle">(Efisiensi)</text>

  <rect x="445" y="55" width="95" height="150" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
  <text x="492" y="78" fill="#ec4899" font-size="9.5" font-weight="700" text-anchor="middle">5. Distribusi</text>
  <text x="492" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Pemerataan &amp;</text>
  <text x="492" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">keadilan sosial</text>
  <line x1="455" y1="120" x2="530" y2="120" stroke="#334155"/>
  <text x="492" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">Bantuan sosial,</text>
  <text x="492" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">subsidi, &amp;</text>
  <text x="492" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">pajak progresif</text>
  <text x="492" y="188" fill="#f472b6" font-size="8.5" font-weight="700" text-anchor="middle">(Keadilan)</text>

  <rect x="550" y="55" width="105" height="150" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="602" y="78" fill="#06b6d4" font-size="9.5" font-weight="700" text-anchor="middle">6. Stabilisasi</text>
  <text x="602" y="96" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Keseimbangan</text>
  <text x="602" y="108" fill="#cbd5e1" font-size="8.5" text-anchor="middle">makroekonomi</text>
  <line x1="560" y1="120" x2="645" y2="120" stroke="#334155"/>
  <text x="602" y="138" fill="#94a3b8" font-size="8.5" text-anchor="middle">Menjaga inflasi,</text>
  <text x="602" y="154" fill="#94a3b8" font-size="8.5" text-anchor="middle">kesempatan kerja,</text>
  <text x="602" y="170" fill="#94a3b8" font-size="8.5" text-anchor="middle">&amp; pertumbuhan</text>
  <text x="602" y="188" fill="#67e8f9" font-size="8.5" font-weight="700" text-anchor="middle">(Fiskal Makro)</text>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Perencanaan & Anggaran Sektor Publik: Konsep, Fungsi, & Prinsip',
  ref: 'Mardiasmo Bab 4 | Deddi Nordiawan Bab 4 | UU 17/2003',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 4: Menguasai konsep dasar penganggaran sektor publik, 6 fungsi konstitusional anggaran (Otorisasi, Perencanaan, Pengawasan, Alokasi, Distribusi, dan Stabilisasi), siklus penyusunan anggaran negara/daerah (APBN/APBD), serta prinsip-prinsip disiplin fiskal dan transparansi publik.',
  objectives: [
    'Mendefinisikan Anggaran Sektor Publik sebagai dokumen politik dan instrumen akuntabilitas keuangan.',
    'Menganalisis 6 fungsi utama anggaran menurut Pasal 3 UU No. 17/2003.',
    'Menjelaskan tahapan Siklus Anggaran (Perencanaan, Pembahasan/Pengesahan, Pelaksanaan, Pengawasan, Pertanggungjawaban).',
    'Membedakan peran Rencana Pembangunan Jangka Menengah Daerah (RPJMD), Rencana Kerja Pemerintah Daerah (RKPD), dan Kebijakan Umum Anggaran (KUA-PPAS).',
    'Memahami prinsip anggaran: Kesatuan (*Unity*), Universalitas (*Universality*), Tahunan (*Periodicity*), dan Spesialisasi (*Specialization*).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Enam Fungsi Konstitusional Anggaran Publik (UU 17/2003)',
      svg: SVG_BUDGET_FUNCTIONS,
      caption: 'Gambar 4.1: Dimensi hukum, manajerial, dan makroekonomi dari anggaran pemerintah.'
    },

    { kind: 'h2', text: '1. Enam Fungsi Anggaran Sektor Publik' },
    {
      kind: 'table',
      headers: ['Fungsi Anggaran', 'Definisi Menurut UU 17/2003', 'Contoh Implementasi Praktis'],
      rows: [
        ['1. Otorisasi', 'Dasar hukum bagi pemerintah untuk melaksanakan pendapatan dan belanja pada tahun berkenaan.', 'Dinas tidak boleh membelanjakan uang sebelum Perda APBD disahkan DPRD.'],
        ['2. Perencanaan', 'Pedoman bagi manajemen dalam merencanakan kegiatan operasional dan kebutuhan sumber daya.', 'Penyusunan Rencana Kerja dan Anggaran (RKA-SKPD).'],
        ['3. Pengawasan', 'Pedoman untuk menilai apakah kegiatan penyelenggaraan pemerintahan negara sesuai dengan ketentuan.', 'Inspektorat memeriksa realisasi program terhadap plafon DPA.'],
        ['4. Alokasi', 'Anggaran diarahkan untuk mengurangi pengangguran dan pemborosan sumber daya serta meningkatkan efisiensi.', 'Mandatory spending minimal 20% APBN/D untuk fungsi pendidikan.'],
        ['5. Distribusi', 'Kebijakan anggaran harus memperhatikan rasa keadilan dan kepatutan sosial.', 'Pemberian bantuan sosial (Bansos), subsidi pupuk, dan transfer dana desa.'],
        ['6. Stabilisasi', 'Alat untuk memelihara dan mengupayakan keseimbangan fundamental perekonomian.', 'Stimulus fiskal pada saat krisis atau pengendalian inflasi daerah.']
      ],
      caption: 'Tabel 4.1: Enam fungsi formal APBN/APBD.'
    },

    { kind: 'h2', text: '2. Siklus dan Tahapan Penganggaran Daerah (APBD)' },
    {
      kind: 'ol',
      items: [
        '**Tahap 1: Perencanaan Strategis**: Penyusunan RKPD yang mengacu pada RPJMD melalui Musrenbang.',
        '**Tahap 2: Penyusunan KUA-PPAS**: Kepala Daerah menyusun Kebijakan Umum Anggaran dan Prioritas Plafon Anggaran Sementara bersama DPRD.',
        '**Tahap 3: Penyusunan RKA-SKPD**: Kepala dinas menyusun Rencana Kerja dan Anggaran berbasis plafon PPAS.',
        '**Tahap 4: Pembahasan & Pengesahan RAPBD**: DPRD dan Tim Anggaran Pemerintah Daerah (TAPD) membahas dan menetapkan Perda APBD.',
        '**Tahap 5: Pelaksanaan & Penatausahaan**: Penerbitan Dokumen Pelaksanaan Anggaran (DPA-SKPD) dan Surat Penyediaan Dana (SPD).'
      ]
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 4' },
    {
      kind: 'ul',
      items: [
        '**Fungsi Otorisasi**: Anggaran adalah hukum pembatas (plafon pengeluaran maksimal).',
        '**KUA-PPAS**: Jembatan krusial antara dokumen perencanaan (RKPD) dengan dokumen penganggaran teknis (RKA-SKPD).',
        '**Asas Bruto (Universalitas)**: Seluruh penerimaan disetor penuh ke kas negara/daerah tanpa boleh dipotong langsung untuk membiayai belanja (*no netting*).'
      ]
    }
  ]
};