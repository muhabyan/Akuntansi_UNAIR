import type { Reading } from '../../../types';
import { CASE_GOVERNANCE_AGENCY_CONTROL } from '../manstratPracticeCases';

const SVG_STRATEGIC_CONTROL = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">SISTEM PENGENDALIAN STRATEGIK &amp; TATA KELOLA KORPORASI (DESS ET AL.)</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">INFORMATIONAL CONTROL</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">"Doing the right things":</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pemantauan lingkungan luar</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Evaluasi premis strategis</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Apakah asumsi masih valid?</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Kesesuaian Strategi</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">BEHAVIORAL CONTROL</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">"Doing things right":</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Budaya organisasi bersama</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Sistem reward berbasis kinerja</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Batasan aturan kepatuhan (SOP)</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Eksekusi Perilaku</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">CORPORATE GOVERNANCE</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Mengatasi Agency Problem):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dewan Komisaris Independen</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Komite Audit &amp; Remunerasi</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Ancaman Hostile Takeover</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Penyelarasan Kepentingan</text>
</svg>`;

export const TM6_READING: Reading = {
  tm: 6,
  title: 'Entrepreneurial Strategy, Strategic Control, & Corporate Governance',
  ref: 'Dess et al. Bab 8 & 9 | Agency Theory (Jensen & Meckling) | Informational vs Behavioral Control',
  intro: 'TM 6 membahas strategi kewirausahaan, sistem pengendalian strategik terpadu, dan tata kelola perusahaan (Corporate Governance): strategi masuk wirausaha baru (Pioneering, Imitative, Adaptive Entry), pergeseran dari pengendalian tradisional menuju Pengendalian Kontemporer (Informational Control vs Behavioral Control yang ditopang oleh Budaya, Penghargaan, dan Batasan), Teori Keagenan (Agency Theory), serta mekanisme tata kelola internal (Dewan Komisaris, Pemegang Saham Pengendali) dan eksternal (Market for Corporate Control, Auditor, Regulator).',
  objectives: [
    'Menjelaskan 3 strategi masuk wirausaha baru: Pioneering Entry, Imitative Entry, dan Adaptive Entry.',
    'Membedakan peran Pengendalian Informasi (Informational Control) vs Pengendalian Perilaku (Behavioral Control).',
    'Menganalisis 3 tuas Pengendalian Perilaku: Budaya Organisasi, Sistem Penghargaan (Rewards), dan Batasan Aturan (Boundaries).',
    'Menganalisis Teori Keagenan (Agency Problem) dan mekanisme tata kelola perusahaan internal vs eksternal.',
    'Mengevaluasi peran Dewan Komisaris Independen dalam memantau keputusan manajerial direksi.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 6.1: Sistem Pengendalian Kontemporer dan Mekanisme Tata Kelola Korporasi.',
      svg: SVG_STRATEGIC_CONTROL
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 6'
    },
    {
      kind: 'table',
      headers: ['Tuas Pengendalian Perilaku', 'Fungsi Strategis dalam Organisasi', 'Kondisi Paling Efektif Diterapkan', 'Kelemahan jika Berlebihan'],
      rows: [
        ['Budaya Perusahaan (Culture)', 'Menanamkan norma nilai bersama yang diinternalisasi ke dalam hati karyawan.', 'Pada organisasi berbasis inovasi, profesional otonom, dan startup.', 'Rentan menimbulkan kultus tertutup yang menolak pandangan luar.'],
        ['Sistem Penghargaan (Rewards)', 'Menyelaraskan insentif pribadi dengan pencapaian sasaran strategis korporasi.', 'Ketika hasil kerja dapat diukur secara kuantitatif dan objektif.', 'Bisa memicu kecurangan (gaming the system) demi mengejar bonus.'],
        ['Batasan & Aturan (Boundaries)', 'Menetapkan rambu-rambu SOP, kuota pengeluaran, dan aturan kepatuhan legal.', 'Pada industri berisiko tinggi (perbankan, penerbangan, farmasi).', 'Membunuh kreativitas staf dan menciptakan birokrasi lambat.']
      ],
      caption: 'Tabel 6.0: Matriks 3 pilar pengendalian perilaku organisasi.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Mekanisme Tata Kelola Perusahaan (Corporate Governance)'
    },
    {
      kind: 'table',
      headers: ['Mekanisme Tata Kelola', 'Komponen Mekanisme Kunci', 'Cara Kerja Menyelaraskan Kepentingan'],
      rows: [
        ['Mekanisme Internal', 'Dewan Komisaris Independen (Board of Directors)', 'Memiliki hak veto atas keputusan belanja modal besar direksi dan mengevaluasi kinerja CEO.'],
        ['Mekanisme Internal', 'Skema Remunerasi Saham (Stock Options / ESOP)', 'Mengikat kekayaan pribadi CEO dengan apresiasi harga saham jangka panjang perusahaan.'],
        ['Mekanisme Internal', 'Aktivisme Pemegang Saham (Shareholder Activism)', 'Investor institusional (Dana Pensiun, Reksadana) menggunakan hak suara RUPS untuk mengganti direksi yang buruk.'],
        ['Mekanisme Eksternal', 'Pasar Kendali Korporasi (Market for Corporate Control)', 'Ancaman pengambilalihan paksa (Hostile Takeover) oleh korporasi lain jika saham undervalued akibat salah urus.'],
        ['Mekanisme Eksternal', 'Auditor Eksternal & Lembaga Pemeringkat', 'Memastikan transparansi laporan keuangan dan mencegah manipulasi akuntansi.']
      ],
      caption: 'Tabel 6.1: Mekanisme tata kelola internal dan eksternal.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Masalah Keagenan pada Penggunaan Jet Pribadi Direksi',
      prompt: 'CEO sebuah perusahaan terbuka membeli jet pribadi mewah senilai Rp 500 Miliar menggunakan kas perusahaan dengan alasan "efisiensi mobilitas direksi", padahal 90% waktu terbangnya digunakan untuk liburan keluarga. Bagaimana Teori Keagenan menjelaskan fenomena ini dan mekanisme tata kelola apa yang gagal?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Penjelasan Teori Keagenan (Agency Problem)**: Terjadi *Perquisite Consumption* (konsumsi kenikmatan pribadi oleh agen dengan membebankan biaya kepada prinsipal/pemegang saham). CEO mengejar status dan kemewahan pribadi yang merusak laba investor.',
            '**Kegagalan Tata Kelola Internal**: Dewan Komisaris (Board of Commissioners) dan Komite Audit gagal menjalankan fungsi pengawasan independen (*monitoring failure*); kemungkinan besar karena Dewan Komisaris diisi oleh kroni CEO tanpa kompetensi independen.',
            '**Solusi Tata Kelola**: Pemegang saham institusional dalam RUPS harus menuntut pembatalan pembelian jet, mencopot dewan komisaris yang lalai, serta menetapkan batas wewenang belanja modal diskresioner CEO secara ketat.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 6'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Strategi Masuk Wirausaha Baru', 'Analisis pioneering, imitative, dan adaptive entry.', 'Mampu merekomendasikan strategi penetrasi pasar startup.'],
        ['2', 'Pengendalian Strategik Modern', 'Pembedaan informational control vs behavioral control (budaya, reward, boundary).', 'Mampu merancang sistem pengendalian strategis korporasi.'],
        ['3', 'Teori Keagenan & Tata Kelola', 'Masalah keagenan, peran dewan komisaris, dan hostile takeover.', 'Mampu mengevaluasi efektivitas tata kelola perusahaan publik.']
      ],
      caption: 'Tabel 6.2: Peta penguasaan submateri TM 6 Manajemen Strategik.'
    },
    CASE_GOVERNANCE_AGENCY_CONTROL,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Informational Control Mempertanyakan Asumsi**: Pengendalian informasi berfokus pada pertanyaan fundamental: "Apakah strategi kita masih tepat?"; bukan sekadar memeriksa kepatuhan anggaran.',
        '**Tiga Tuas Pengendalian Saling Melengkapi**: Budaya yang kuat memberikan arah moral, sistem penghargaan memicu motivasi kinerja, dan batasan aturan kepatuhan mencegah kejahatan penipuan.',
        '**Komisaris Independen Bukan Stempel**: Tanpa keberanian Dewan Komisaris Independen untuk menolak keputusan ekspansi sembrono direksi, tata kelola perusahaan hanya menjadi formalitas di atas kertas.'
      ]
    }
  ]
};
