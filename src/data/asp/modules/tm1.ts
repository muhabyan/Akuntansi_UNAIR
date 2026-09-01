import type { Reading } from '../../../types';
import { CASE_PUBLIC_SECTOR_ACCOUNTABILITY } from '../aspPracticeCases';

const SVG_ASP_CHARACTERISTICS = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">KOMPARASI SEKTOR PUBLIK VS SEKTOR SWASTA KOMERSIAL</text>
  
  <rect x="35" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="177" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">ORGANISASI SEKTOR PUBLIK</text>
  <text x="177" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Pemerintah, RSUD, Yayasan, Kampus:</text>
  <text x="177" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">• Tujuan: Pelayanan Publik (Non-Profit)</text>
  <text x="177" y="138" fill="#cbd5e1" font-size="9" text-anchor="middle">• Sumber Dana: Pajak, Retribusi, Hibah</text>
  <text x="177" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">• Pertanggungjawaban: Rakyat &amp; Parlemen</text>
  <text x="177" y="180" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Akuntabilitas Publik Terbuka</text>

  <rect x="355" y="55" width="285" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="502" y="78" fill="#4ade80" font-size="11" font-weight="700" text-anchor="middle">ORGANISASI SEKTOR SWASTA</text>
  <text x="502" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Perseroan Terbatas Komersial:</text>
  <text x="502" y="120" fill="#cbd5e1" font-size="9" text-anchor="middle">• Tujuan: Maksimalkan Laba &amp; Dividen</text>
  <text x="502" y="138" fill="#cbd5e1" font-size="9" text-anchor="middle">• Sumber Dana: Modal Sendiri &amp; Utang Bank</text>
  <text x="502" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">• Pertanggungjawaban: Pemegang Saham (RUPS)</text>
  <text x="502" y="180" fill="#4ade80" font-size="9.5" font-weight="700" text-anchor="middle">Return on Investment (ROI)</text>
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
