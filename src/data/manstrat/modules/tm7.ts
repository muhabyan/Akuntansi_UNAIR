import type { Reading } from '../../../types';

const SVG_STRATEGIC_LEADERSHIP = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="30" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">TIGA AKTIVITAS KUNCI KEPEMIMPINAN STRATEGIS (DESS ET AL. CH. 11)</text>
  
  <rect x="30" y="50" width="190" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="75" fill="#38bdf8" font-size="11.5" font-weight="700" text-anchor="middle">1. Setting Direction</text>
  <text x="125" y="92" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Menetapkan Arah)</text>
  <line x1="45" y1="104" x2="205" y2="104" stroke="#334155"/>
  <text x="125" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Memindai lingkungan</text>
  <text x="125" y="142" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Merumuskan visi strategis</text>
  <text x="125" y="160" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Membangun kapabilitas</text>
  <text x="125" y="180" fill="#38bdf8" font-size="9.5" font-weight="700" text-anchor="middle">Visi Inspiratif</text>

  <rect x="245" y="50" width="190" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="340" y="75" fill="#34d399" font-size="11.5" font-weight="700" text-anchor="middle">2. Designing Org</text>
  <text x="340" y="92" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Merancang Organisasi)</text>
  <line x1="260" y1="104" x2="420" y2="104" stroke="#334155"/>
  <text x="340" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Menyelaraskan struktur</text>
  <text x="340" y="142" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Integrasi sistem IT</text>
  <text x="340" y="160" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Alokasi wewenang</text>
  <text x="340" y="180" fill="#34d399" font-size="9.5" font-weight="700" text-anchor="middle">Arsitektur Eksekusi</text>

  <rect x="460" y="50" width="190" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="555" y="75" fill="#f59e0b" font-size="11.5" font-weight="700" text-anchor="middle">3. Nurturing Culture</text>
  <text x="555" y="92" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(Memelihara Budaya &amp; Etika)</text>
  <line x1="475" y1="104" x2="635" y2="104" stroke="#334155"/>
  <text x="555" y="125" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Memberi teladan integritas</text>
  <text x="555" y="142" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Membangun learning org</text>
  <text x="555" y="160" fill="#cbd5e1" font-size="9.5" text-anchor="middle">• Mendorong inovasi</text>
  <text x="555" y="180" fill="#fbbf24" font-size="9.5" font-weight="700" text-anchor="middle">Budaya Unggul &amp; Etis</text>
</svg>`;

export const TM7_READING: Reading = {
  tm: 7,
  title: 'Organizational Design, Strategic Leadership, & Corporate Entrepreneurship',
  ref: 'Dess, McNamara, Eisner, & Lee (11th ed.) Ch. 10, 11, & 12',
  intro: 'Modul Pembelajaran Mendalam Manajemen Strategik TM 7: Menguasai desain organisasi tanpa batas (*Boundaryless Organizational Designs: Barrier-Free, Modular, & Virtual Organizations*), Tiga Aktivitas Kunci Kepemimpinan Strategis (Setting Direction, Designing the Organization, Nurturing an Excellent and Ethical Culture), Kecerdasan Emosional Pemimpin, Pembelajaran Organisasi (*Learning Organization*), serta Kewirausahaan Korporat (*Corporate Entrepreneurship / Intrapreneurship: Autonomous vs Induced Strategic Behavior, New-Venture Groups, Incubators, & Corporate Venture Capital*).',
  objectives: [
    'Menganalisis 3 bentuk desain organisasi tanpa batas (Boundaryless): Organisasi Bebas Hambatan (*Barrier-Free*), Modular, dan Virtual.',
    'Menjelaskan Tiga Aktivitas Utama Kepemimpinan Strategis menurut Dess et al.',
    'Menerapkan prinsip Organisasi Pembelajar (Learning Organization: berbagi pengetahuan, pemberdayaan bawahan, dan mempertanyakan status quo).',
    'Membangun budaya etika organisasi yang kokoh melalui teladan pemimpin dan kode etik formal.',
    'Membedakan Perilaku Strategis Terpancing (*Induced Strategic Behavior* - Top-Down) vs Otonom (*Autonomous Strategic Behavior* - Bottom-Up).',
    'Menjelaskan mekanisme Corporate Venture Capital (CVC) dan Inkubator Usaha Baru dalam memupuk inovasi internal.'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Tiga Aktivitas Fundamental Kepemimpinan Strategis',
      svg: SVG_STRATEGIC_LEADERSHIP,
      caption: 'Gambar 7.1: Peran interdependen pemimpin puncak dalam menetapkan arah visi, merancang struktur, dan memelihara budaya etis.'
    },

    { kind: 'h2', text: '1. Desain Organisasi Tanpa Batas (Boundaryless Organizations)' },
    {
      kind: 'table',
      headers: ['Desain Tanpa Batas', 'Karakteristik Struktural', 'Manfaat Strategis Utama'],
      rows: [
        ['**1. Barrier-Free Organization**', 'Menghilangkan sekat-sekat batas internal (antardepartemen) dan batas eksternal (dengan pelanggan/pemasok) melalui tim lintas fungsi mandiri.', 'Koordinasi sangat cepat, sinergi ide lintas disiplin ilmu meningkat tajam.'],
        ['**2. Modular Organization**', 'Perusahaan mempertahankan kompetensi inti strategis internal dan mengalihdayakan (*outsource*) modul-modul non-inti ke pemasok terbaik di dunia.', 'Penghematan biaya modal tetap, fokus penuh pada diferensiasi inti.'],
        ['**3. Virtual Organization**', 'Jaringan kemitraan dinamis yang selalu berubah antarbeberapa perusahaan independen yang saling berbagi keahlian untuk mengeksploitasi peluang pasar sesaat.', 'Sangat lincah memasuki pasar baru global tanpa investasi fisik permanen.']
      ],
      caption: 'Tabel 7.1: Tiga model struktur organisasi tanpa batas.'
    },

    { kind: 'h2', text: '2. Kewirausahaan Korporat (Corporate Entrepreneurship / Intrapreneurship)' },
    {
      kind: 'table',
      headers: ['Mekanisme Intrapreneurship', 'Definisi Konsep', 'Penerapan Praktis Korporasi'],
      rows: [
        ['**Autonomous Strategic Behavior**', 'Inisiatif inovasi akar rumput (*bottom-up*) yang digagas oleh karyawan lini depan di luar ruang lingkup strategi formal saat ini.', 'Karyawan 3M menciptakan Post-it Note dari eksperimen lem yang gagal.'],
        ['**Induced Strategic Behavior**', 'Inisiatif inovasi terarah (*top-down*) yang selaras langsung dengan strategi korporasi yang sedang berjalan.', 'Samsung mengembangkan lini smartphone lipat untuk mempertahankan kepemimpinan pasar.'],
        ['**Corporate Venture Capital (CVC)**', 'Dana investasi khusus korporasi untuk mendanai dan mengakuisisi startup teknologi eksternal berpotensi tinggi.', 'Google Ventures (GV) mendanai startup AI dan bioteknologi tahap awal.']
      ],
      caption: 'Tabel 7.2: Jalur pengembangan inovasi kewirausahaan di dalam korporasi besar.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 7 (Pra-UTS)' },
    {
      kind: 'ul',
      items: [
        '**Learning Organization**: Organisasi yang mampu menciptakan, memperoleh, dan mentransfer pengetahuan, serta memodifikasi perilakunya untuk mencerminkan pengetahuan dan wawasan baru.',
        '**Ambidextrous Leadership**: Pemimpin yang mampu secara seimbang memimpin divisi eksploitasi bisnis inti yang matang sekaligus divisi eksplorasi inovasi radikal masa depan.',
        '**Strategic Coherence**: Keselarasan total antara visi strategis, desain struktur organisasi, sistem insentif, dan budaya nilai perusahaan.'
      ]
    }
  ]
};