import type { Reading } from '../../../types';

const SVG_LEADERSHIP_GRID = `
<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="210" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="34" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">THE LEADERSHIP GRID (BLAKE &amp; MOUTON / DAFT CH. 11)</text>
  
  <!-- Country Club (1,9) -->
  <rect x="30" y="55" width="280" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="170" y="78" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">Country Club Management (1,9)</text>
  <text x="170" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Perhatian Tinggi pada Orang / Rendah pada Produksi</text>
  <text x="170" y="112" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Suasana ramah nyaman tapi target terabaikan)</text>

  <!-- Team Management (9,9) -->
  <rect x="370" y="55" width="280" height="70" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
  <text x="510" y="78" fill="#34d399" font-size="11" font-weight="700" text-anchor="middle">Team Management (9,9) [IDEAL]</text>
  <text x="510" y="96" fill="#cbd5e1" font-size="9" text-anchor="middle">Perhatian Tinggi pada Orang &amp; Tinggi pada Produksi</text>
  <text x="510" y="112" fill="#34d399" font-size="8.5" font-weight="700" text-anchor="middle">(Komitmen bersama, kepercayaan, &amp; kinerja unggul)</text>

  <!-- Impoverished (1,1) -->
  <rect x="30" y="135" width="280" height="70" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="170" y="158" fill="#f43f5e" font-size="11" font-weight="700" text-anchor="middle">Impoverished Management (1,1)</text>
  <text x="170" y="176" fill="#cbd5e1" font-size="9" text-anchor="middle">Perhatian Rendah pada Orang &amp; Rendah pada Produksi</text>
  <text x="170" y="192" fill="#fca5a5" font-size="8.5" text-anchor="middle">(Usaha minimal sekadar mempertahankan pekerjaan)</text>

  <!-- Authority-Compliance (9,1) -->
  <rect x="370" y="135" width="280" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="510" y="158" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="middle">Authority-Compliance (9,1)</text>
  <text x="510" y="176" fill="#cbd5e1" font-size="9" text-anchor="middle">Perhatian Rendah pada Orang &amp; Tinggi pada Produksi</text>
  <text x="510" y="192" fill="#fbbf24" font-size="8.5" text-anchor="middle">(Efisiensi hasil kerja tinggi, manusia dianggap mesin)</text>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Leadership in Organizations: Teori Perilaku, Kontinjensi, & Kepemimpinan Transformasional',
  ref: 'Richard L. Daft & Dorothy Marcic Ch. 11',
  intro: 'Modul Pembelajaran Mendalam Pengantar Manajemen TM 12: Menguasai hakikat Kepemimpinan vs Manajemen (Mengarahkan perubahan inspiratif vs Menjaga keteraturan operasional), Teori Sifat (*Trait Theory*), Teori Perilaku (The Leadership Grid: *Team Management 9,9*), Teori Kontinjensi Situasional (Fiedler Contingency Model: *LPC Scale* & Kesesuaian Situasi; Teori Situasional Hersey-Blanchard: *Telling, Selling, Participating, Delegating* berdasarkan Kematangan Pengikut), Kepemimpinan Karismatik & Transformasional vs Transaksional, Kepemimpinan Pelayan (*Servant Leadership*), serta 5 Sumber Kekuasaan (*Power & Influence*).',
  objectives: [
    'Membedakan Hakikat Manajemen (menghasilkan keteraturan dan efisiensi melalui kontrol) vs Kepemimpinan (menghasilkan perubahan visi dan memotivasi pengikut).',
    'Menganalisis kisi-kisi kepemimpinan Blake & Mouton (The Leadership Grid) berdasarkan dimensi Kepedulian pada Orang vs Kepedulian pada Produksi.',
    'Menerapkan Teori Kepemimpinan Situasional Hersey & Blanchard berdasarkan tingkat Kesiapan / Kematangan Pengikut (R1 s.d R4).',
    'Menjelaskan Teori Kontinjensi Fred Fiedler (mencocokkan gaya pemimpin berorientasi tugas vs hubungan dengan kendali situasi: Hubungan Pemimpin-Anggota, Struktur Tugas, Kekuasaan Posisi).',
    'Membedakan Pemimpin Transformasional (menginspirasi bawahan melampaui kepentingan pribadi demi visi luhur) vs Pemimpin Transaksional (menjelaskan peran tugas dan memberikan imbalan kontraktual).',
    'Mengidentifikasi 5 Sumber Kekuasaan (Power): Kekuasaan Posisi (*Legitimate, Reward, Coercive*) vs Kekuasaan Personal (*Expert, Referent*).'
  ],
  blocks: [
    {
      kind: 'figure',
      title: 'Kisi-Kisi Gaya Kepemimpinan Manajerial (The Leadership Grid)',
      svg: SVG_LEADERSHIP_GRID,
      caption: 'Gambar 12.1: Empat kuadran ekstrem gaya kepemimpinan berdasarkan orientasi manusia vs orientasi tugas.'
    },

    { kind: 'h2', text: '1. Model Kepemimpinan Situasional Hersey-Blanchard' },
    {
      kind: 'table',
      headers: ['Tingkat Kesiapan Bawahan (Follower Readiness)', 'Karakteristik Kompetensi & Komitmen', 'Gaya Kepemimpinan yang Tepat'],
      rows: [
        ['**R1: Kesiapan Rendah (Low)**', 'Bawahan tidak mampu (*unable*) dan tidak mau/tidak percaya diri (*unwilling/insecure*).', '**Telling / Directing (Gaya Menginstruksikan)**: Memberikan arahan tugas rinci dan pengawasan ketat.'],
        ['**R2: Kesiapan Sedang (Moderate)**', 'Bawahan tidak mampu (*unable*) tetapi memiliki kemauan belajar tinggi (*willing/confident*).', '**Selling / Coaching (Gaya Membimbing)**: Memberikan arahan tugas sekaligus penjelasan dan dukungan emosional.'],
        ['**R3: Kesiapan Tinggi (High)**', 'Bawahan mampu (*able*) tetapi kurang percaya diri atau enggan mengambil inisiatif (*unwilling/insecure*).', '**Participating / Supporting (Gaya Berpartisipasi)**: Berbagi ide dalam pengambilan keputusan dan memfasilitasi.'],
        ['**R4: Kesiapan Sangat Tinggi (Very High)**', 'Bawahan sangat mampu (*able*) dan sangat berkomitmen mandiri (*willing/confident*).', '**Delegating (Gaya Mendelegasikan)**: Memberikan otonomi penuh atas pelaksanaan tugas dan keputusan.']
      ],
      caption: 'Tabel 12.1: Penyelarasan gaya kepemimpinan dengan kematangan bawahan.'
    },

    { kind: 'h2', text: '2. Lima Sumber Kekuasaan Pemimpin (French & Raven)' },
    {
      kind: 'table',
      headers: ['Sumber Kekuasaan (Power)', 'Basis Kekuasaan', 'Respon Khas Bawahan'],
      rows: [
        ['**1. Kekuasaan Sah (Legitimate Power)**', 'Wewenang formal yang melekat pada posisi jabatan struktural dalam organisasi.', 'Kepatuhan (*Compliance*)'],
        ['**2. Kekuasaan Imbalan (Reward Power)**', 'Kewenangan untuk memberikan imbalan (bonus, promosi kerja, pujian).', 'Kepatuhan (*Compliance*)'],
        ['**3. Kekuasaan Paksaan (Coercive Power)**', 'Kewenangan untuk menghukum atau merekomendasikan sanksi (teguran, pemecatan).', 'Resistensi / Perlawanan pasif'],
        ['**4. Kekuasaan Keahlian (Expert Power)**', 'Pengetahuan khusus, keterampilan teknis, dan keahlian mendalam yang diakui.', '**Komitmen Tulus (*Commitment*)**'],
        ['**5. Kekuasaan Rujukan (Referent Power)**', 'Karakteristik pribadi, integritas, dan karisma yang membuat orang lain kagum dan ingin meniru.', '**Komitmen Tulus (*Commitment*)**']
      ],
      caption: 'Tabel 12.2: Klasifikasi kekuasaan posisi vs kekuasaan personal.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 12' },
    {
      kind: 'ul',
      items: [
        '**Servant Leadership**: Gaya kepemimpinan yang melampaui kepentingan diri sendiri untuk melayani kebutuhan bawahan, pelanggan, dan masyarakat luas.',
        '**Authentic Leadership**: Pemimpin yang mengenal jati diri mereka, bertindak konsisten dengan nilai etika sejati, dan membangun hubungan kepercayaan terbuka.',
        '**Followership**: Gaya bawahan yang efektif (*Effective Follower*) bersikap kritis mandiri (*critical thinking*) sekaligus aktif terlibat memberikan kontribusi positif bagi organisasi.'
      ]
    }
  ]
};