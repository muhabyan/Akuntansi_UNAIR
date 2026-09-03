import type { Reading } from '../../../types';
import { CASE_PUBLIC_SECTOR_ACCOUNTABILITY } from '../aspPracticeCases';

const SVG_ASP_CHARACTERISTICS = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="pubGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="priGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp1)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">KOMPARASI FUNDAMENTAL: SEKTOR PUBLIK / PEMERINTAH VS SWASTA KOMERSIAL</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">SECTOR COMPARISON</text>

  <!-- Left: Public Sector -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#pubGrad)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="16" y="20" fill="#38bdf8" font-size="10.5" font-weight="800">SEKTOR PUBLIK (PEMERINTAH &amp; NIRLABA)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Tujuan Utama:</tspan> Pelayanan publik &amp; kesejahteraan masyarakat (Non-profit)</text>
    <text class="svg-text" x="14" y="72" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Sumber Pendanaan:</tspan> Pajak warga, retribusi, transfer DAU/DAK, PNBP, hibah</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Pertanggungjawaban:</tspan> Akuntabilitas publik kepada parlemen (DPR/DPRD) &amp; rakyat</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Peran Anggaran:</tspan> Dokumen hukum mengikat (Undang-Undang / Perda APBD)</text>
    <text class="svg-text" x="14" y="132" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-blue" fill="#38bdf8" font-weight="700">Standar Akuntansi:</tspan> Standar Akuntansi Pemerintahan (SAP PP 71/2010) &amp; ISAK 35</text>
    
    <rect class="svg-badge-blue" x="14" y="175" width="367" height="30" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="197" y="194" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Fokus: Kualitas Pelayanan &amp; Transparansi Nilai Uang (Value for Money)</text>
  </g>

  <!-- Right: Private Sector -->
  <g transform="translate(470, 75)">
    <rect class="svg-card" x="0" y="0" width="395" height="235" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="395" height="30" rx="12" fill="url(#priGrad)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="16" y="20" fill="#a78bfa" font-size="10.5" font-weight="800">SEKTOR SWASTA (PERUSAHAAN KOMERSIAL)</text>
    
    <text class="svg-text" x="14" y="52" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Tujuan Utama:</tspan> Memaksimalkan laba bersih &amp; kekayaan pemegang saham</text>
    <text class="svg-text" x="14" y="72" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Sumber Pendanaan:</tspan> Modal disetor pemilik, laba ditahan, penerbitan obligasi/utang bank</text>
    <text class="svg-text" x="14" y="92" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Pertanggungjawaban:</tspan> Akuntabilitas kepada investor via RUPS &amp; dewan komisaris</text>
    <text class="svg-text" x="14" y="112" fill="#cbd5e1" font-size="8">• <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Peran Anggaran:</tspan> Dokumen rencana kerja internal yang fleksibel dapat direvisi</text>
    <text class="text-accent-purple" x="14" y="132" fill="#a78bfa" font-size="8">• <tspan class="text-accent-purple" fill="#a78bfa" font-weight="700">Standar Akuntansi:</tspan> Standar Akuntansi Keuangan SAK berbasis IFRS</text>
    
    <rect class="svg-badge-purple" x="14" y="175" width="367" height="30" rx="6" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="197" y="194" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Fokus: Efisiensi Biaya &amp; Pertumbuhan Laba Bersih Per Lembar Saham</text>
  </g>

  <text class="svg-muted" x="450" y="325" fill="#94a3b8" font-size="8.5" font-style="italic" text-anchor="middle">Pada sektor publik, Anggaran adalah HUKUM dan BATASAN MAKSIMAL belanja yang tidak boleh dilanggar tanpa persetujuan parlemen.</text>
</svg>`;

export const TM1_READING: Reading = {
  tm: 1,
  title: 'Karakteristik Organisasi Sektor Publik & Peran Akuntansi Sektor Publik',
  ref: 'Mardiasmo (2018) | Deddi Nordiawan (2019) | PP 71/2010 | Konsep Akuntabilitas Publik',
  intro: 'TM 1 membahas karakteristik fundamental organisasi sektor publik: perbedaan sifat dan lingkungan akuntansi sektor publik vs sektor swasta komersial, struktur kepemilikan nirlaba tanpa hak bagi hasil residual, dimensi akuntabilitas publik (Vertikal vs Horisontal), peranan anggaran publik sebagai alat politik dan otorisasi hukum, serta fungsi akuntansi sebagai instrumen transparansi demokrasi.',
  objectives: [
    'Membedakan tujuan, sumber pendanaan, dan pola pertanggungjawaban sektor publik vs sektor swasta.',
    'Menganalisis konsep Akuntabilitas Publik (Akuntabilitas Vertikal dan Horisontal).',
    'Menjelaskan peranan krusial Anggaran Publik sebagai dokumen hukum dan kontrak sosial.',
    'Mengidentifikasi pihak-pihak berkepentingan (Stakeholders) dalam ekosistem sektor publik.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 1.1: Perbandingan Karakteristik Organisasi Sektor Publik vs Sektor Swasta Komersial.',
      svg: SVG_ASP_CHARACTERISTICS
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 1'
    },
    {
      kind: 'table',
      headers: ['Aspek Perbandingan', 'Sektor Publik (Pemerintah & Nirlaba)', 'Sektor Swasta (Bisnis Komersial)'],
      rows: [
        ['Tujuan Utama Organisasi', 'Pelayanan publik prima (Public Service Delivery) & Kesejahteraan sosial.', 'Maksimalisasi laba finansial & kekayaan pemegang saham.'],
        ['Sumber Pendanaan', 'Pajak warga, retribusi, pinjaman negara, dana perimbangan, dan hibah.', 'Modal saham investor, laba ditahan, pinjaman bank/obligasi.'],
        ['Pola Pertanggungjawaban', 'Pertanggungjawaban ganda: kepada masyarakat luas (DPRD/DPR) dan atasan birokrasi.', 'Pertanggungjawaban kepada pemilik modal dalam Rapat Umum Pemegang Saham (RUPS).'],
        ['Struktur Organisasi', 'Birokratis, kaku, hierarkis, dan terikat ketat regulasi perundang-undangan.', 'Fleksibel, adaptif terhadap pasar, dan desentralistis.'],
        ['Karakteristik Anggaran', 'Terbuka untuk publik dan disahkan menjadi undang-undang/perda formal.', 'Tertutup (rahasia perusahaan) dan bersifat pedoman manajerial internal.']
      ],
      caption: 'Tabel 1.0: Matriks perbedaan sektor publik vs sektor swasta.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Akuntabilitas Sektor Publik'
    },
    {
      kind: 'formula',
      text: `\\text{Akuntabilitas Publik (Stewart, 1984)} = \\begin{cases}
\\text{1. Probity & Legality} & \\text{(Ketaatan Hukum & Anti Korupsi)} \\\\
\\text{2. Process} & \\text{(Kecukupan SOP & Sistem Informasi Akuntansi)} \\\\
\\text{3. Performance} & \\text{(Efisiensi Anggaran & Capaian Output Target)} \\\\
\\text{4. Policy} & \\text{(Pertanggungjawaban Pilihan Arah Kebijakan Publik)}
\\end{cases}`,
      note: 'Akuntansi sektor publik berfungsi sebagai jembatan yang mentransformasikan data keuangan menjadi informasi pertanggungjawaban publik yang transparan.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Akuntabilitas Vertikal vs Horisontal',
      prompt: 'Sebutkan contoh nyata pelaksanaan Akuntabilitas Vertikal dan Akuntabilitas Horisontal pada Pemerintah Daerah di Indonesia!',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Contoh Akuntabilitas Vertikal**: Bupati/Walikota menyampaikan Laporan Penyelenggaraan Pemerintahan Daerah (LPPD) kepada Pemerintah Pusat melalui Gubernur sebagai wakil pemerintah pusat di daerah.',
            '**Contoh Akuntabilitas Horisontal**: Bupati/Walikota menyampaikan Laporan Keterangan Pertanggungjawaban (LKPJ) dan Laporan Keuangan Pemerintah Daerah (LKPD) yang telah diaudit BPK kepada Dewan Perwakilan Rakyat Daerah (DPRD) serta mempublikasikannya kepada masyarakat.'
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
        ['1', 'Karakteristik Sektor Publik', 'Perbedaan 5 dimensi kunci sektor publik vs swasta.', 'Mampu menganalisis lingkungan kelembagaan sektor publik.'],
        ['2', 'Dimensi Akuntabilitas Publik', 'Akuntabilitas vertikal, horisontal, legalitas, proses, kinerja.', 'Mampu mengidentifikasi jalur pertanggungjawaban keuangan negara.'],
        ['3', 'Peran Anggaran Publik', 'Anggaran sebagai alat politik, hukum, stabilisasi, dan redistribusi.', 'Mampu menjelaskan kedudukan anggaran publik sebagai undang-undang.']
      ],
      caption: 'Tabel 1.2: Peta penguasaan submateri TM 1 Akuntansi Sektor Publik.'
    },
    CASE_PUBLIC_SECTOR_ACCOUNTABILITY,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Non-Distribution Constraint**: Organisasi sektor publik dilarang membagikan kelebihan pendapatan (surplus) kepada pengurus/manajer, surplus wajib diputar kembali untuk peningkatan layanan masyarakat.',
        '**Anggaran adalah Otorisasi Hukum**: Di sektor publik, pengeluaran kas tanpa dasar mata anggaran resmi di DIPA/DPA merupakan pelanggaran hukum berat (Tindak Pidana Korupsi).',
        '**Akuntabilitas Multidimensional**: Keberhasilan pemerintah tidak hanya diukur dari realisasi serapan anggaran (anggaran habis), melainkan dari dampak riil program terhadap kesejahteraan masyarakat.'
      ]
    }
  ]
};
