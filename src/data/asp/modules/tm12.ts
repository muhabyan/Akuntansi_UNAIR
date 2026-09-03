import type { Reading } from '../../../types';
import { CASE_POLITICAL_PARTY_NGO_ACCOUNTING } from '../aspPracticeCases';

const SVG_SPECIAL_NONPROFIT = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp12" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="np1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="np2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
    <linearGradient id="np3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp12)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">AKUNTANSI ENTITAS NIRLABA KHUSUS: YAYASAN PENDIDIKAN, RUMAH SAKIT, &amp; LEMBAGA SOSIAL / ZAKAT</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">NONPROFIT SPECIAL</text>

  <!-- 3 Sector Pillars Grid -->
  <!-- 1. Yayasan Pendidikan / Universitas -->
  <g transform="translate(35, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#np1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="132" y="20" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">1. YAYASAN PENDIDIKAN (PTS)</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="132" y="55" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">Standar: ISAK 35 &amp; Standar Dikti</text>
    
    <text class="svg-text" x="14" y="78" fill="#cbd5e1" font-size="7.5">• Sumber Dana: Uang Kuliah Tunggal (UKT), sumbangan gedung, dana BOS, hibah riset</text>
    <text class="svg-text" x="14" y="104" fill="#cbd5e1" font-size="7.5">• Pengelolaan Endowment Fund (Dana Abadi Alumni untuk beasiswa)</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="7.5">• Beban: Gaji dosen, operasional laboratorium, akreditasi internasional</text>

    <rect class="svg-badge-blue" x="14" y="185" width="237" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="132" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Pendidikan Tinggi Non-Profit</text>
  </g>

  <!-- 2. Rumah Sakit Non-Profit -->
  <g transform="translate(318, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#np2)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="132" y="20" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">2. RUMAH SAKIT NONLABA</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="132" y="55" fill="#34d399" font-size="8" font-weight="700" text-anchor="middle">Standar: ISAK 35 &amp; Pedoman Kemenkes</text>
    
    <text class="svg-text" x="14" y="78" fill="#cbd5e1" font-size="7.5">• Pendapatan Layanan Medis: Klaim BPJS Kesehatan, pasien umum, subsidi obat</text>
    <text class="svg-text" x="14" y="104" fill="#cbd5e1" font-size="7.5">• Akuntansi Unit Cost: Biaya tindakan medis per INA-CBGs</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="7.5">• Dana Charity / Baksos pengobatan gratis bagi pasien dhuafa</text>

    <rect class="svg-badge-green" x="14" y="185" width="237" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="132" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Layanan Kesehatan Publik</text>
  </g>

  <!-- 3. Lembaga Zakat & Wakaf -->
  <g transform="translate(600, 75)">
    <rect class="svg-card" x="0" y="0" width="265" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="265" height="30" rx="10" fill="url(#np3)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="132" y="20" fill="#a78bfa" font-size="9.5" font-weight="800" text-anchor="middle">3. LEMBAGA ZAKAT &amp; WAKAF</text>
    <rect class="svg-subcard" x="14" y="40" width="237" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="132" y="55" fill="#a78bfa" font-size="8" font-weight="700" text-anchor="middle">Standar: PSAK 109 (ZIS) &amp; PSAK 112 (Wakaf)</text>
    
    <text class="svg-text" x="14" y="78" fill="#cbd5e1" font-size="7.5">• Pemisahan Dana: Dana Zakat (8 Asnaf), Dana Infak/Sedekah, &amp; Dana Amil</text>
    <text class="svg-text" x="14" y="104" fill="#cbd5e1" font-size="7.5">• Larangan mencampur dana zakat untuk biaya operasional di luar hak amil 1/8</text>
    <text class="svg-text" x="14" y="128" fill="#cbd5e1" font-size="7.5">• Akuntansi Wakaf Uang Produktif: Menjaga keutuhan pokok wakaf</text>

    <rect class="svg-badge-purple" x="14" y="185" width="237" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="132" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Filantropi &amp; Sosial Keagamaan</text>
  </g>
</svg>`;

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Akuntansi & Pelaporan Keuangan Organisasi Nirlaba Khusus (LSM, Parpol, & Yayasan)',
  ref: 'UU 16/2001 jo UU 28/2004 Yayasan | UU 2/2011 Partai Politik | Permendagri 78/2020 | ISAK 35',
  intro: 'TM 12 membahas penerapan akuntansi pada entitas nirlaba khusus yang memiliki regulasi spesifik di Indonesia: Yayasan Pendidikan dan Sosial (UU Yayasan, pembatasan remunerasi pengurus, dan audit publik), Lembaga Swadaya Masyarakat / NGO (manajemen dana hibah donor asing dan transparansi proyek), serta Akuntansi Partai Politik (bantuan keuangan negara APBN/APBD, proporsi 60% pendidikan politik, dan audit kepatuhan oleh BPK RI).',
  objectives: [
    'Menerapkan ISAK 35 pada yayasan pendidikan dan lembaga kemasyarakatan.',
    'Menjelaskan larangan pengalihan kekayaan yayasan kepada pembina, pengurus, dan pengawas.',
    'Menganalisis ketentuan alokasi 60% pendidikan politik dan 40% operasional pada bantuan dana parpol.',
    'Menjelaskan tata kelola Laporan Penerimaan dan Pengeluaran Dana Kampanye (LPPDK) yang diaudit KAP.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 12.1: Tiga Pilar Organisasi Nirlaba Khusus di Bawah Kerangka Hukum Indonesia.',
      svg: SVG_SPECIAL_NONPROFIT
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 12'
    },
    {
      kind: 'table',
      headers: ['Jenis Entitas Nirlaba', 'Landasan Regulasi Utama', 'Sumber Dana Pokok', 'Kewajiban Audit & Sanksi'],
      rows: [
        ['Yayasan', 'UU No. 16/2001 jo UU No. 28/2004', 'Sumbangan sukarela, wakaf, hibah, hasil usaha nirlaba.', 'Wajib diaudit KAP jika bantuan negara > Rp 500 Juta atau aset > Rp 20 Miliar.'],
        ['Lembaga Swadaya Masyarakat (LSM/NGO)', 'UU Ormas No. 17/2013 jo UU 16/2017', 'Hibah donor institusional internasional dan filantropi.', 'Audit donor tahunan atas kepatuhan penggunaan dana proyek (Grant Compliance).'],
        ['Partai Politik', 'UU No. 2 Tahun 2011 & Permendagri 78/2020', 'Iuran anggota, sumbangan sah, dan bantuan APBN/APBD.', 'Wajib diaudit BPK RI setiap tahun; sanksi penghentian bantuan dana negara jika mangkir.'],
        ['Dana Kampanye Pemilu', 'UU No. 7 Tahun 2017 (Pemilu) & Peraturan KPU', 'Sumbangan perseorangan dan badan usaha berbadan hukum.', 'LPPDK wajib diaudit KAP yang ditunjuk KPU; sanksi diskualifikasi calon jika melanggar.']
      ],
      caption: 'Tabel 12.0: Matriks regulasi dan audit organisasi nirlaba khusus di Indonesia.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Alokasi Wajib Bantuan Keuangan Parpol'
    },
    {
      kind: 'formula',
      text: `\\text{Alokasi Dana Bantuan Parpol (Permendagri 78/2020)}:
\\begin{cases}
\\text{Pendidikan Politik Kader} & \\ge 60\\% \\times \\text{Total Bantuan APBN / APBD} \\\\
\\text{Operasional Sekretariat} & \\le 40\\% \\times \\text{Total Bantuan APBN / APBD}
\\end{cases}
\\text{Batas Maksimum Sumbangan Kampanye (UU Pemilu 7/2017)}:
\\text{Perseorangan} \\le Rp 2,5 \\text{ Miliar} \\quad | \\quad \\text{Kelompok / Badan Usaha Swasta} \\le Rp 25 \\text{ Miliar}`,
      note: 'Pelanggaran terhadap batas proporsi 60% pendidikan politik menjadi temuan kepatuhan BPK RI yang dapat membatalkan pencairan bantuan tahun berikutnya.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Evaluasi Kepatuhan Belanja Bantuan Dana Parpol',
      prompt: 'Partai Politik Sejahtera menerima bantuan keuangan APBD Kabupaten sebesar Rp 1.000.000.000. Realisasi belanja: Rp 450 Juta untuk sewa kantor dan gaji staf, serta Rp 550 Juta untuk pelatihan kader pemuda. Apakah realisasi tersebut memenuhi ketentuan hukum?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Persentase Realisasi**:\n- Operasional Sekretariat = Rp 450 Juta / Rp 1.000 Juta = **45,0%** (Maksimal yang diperbolehkan adalah 40% = Rp 400 Juta).\n- Pendidikan Politik = Rp 550 Juta / Rp 1.000 Juta = **55,0%** (Minimal yang diwajibkan adalah 60% = Rp 600 Juta).',
            '**Kesimpulan Audit**: Realisasi belanja partai politik tersebut **TIDAK PATUH HUKUM (Melanggar Permendagri No. 78/2020)** karena alokasi operasional melebihi pagu maksimal 40% dan porsi pendidikan politik berada di bawah batas minimum 60%. BPK akan menerbitkan rekomendasi pengembalian atau perbaikan alokasi.'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 12'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Hukum & Tata Kelola Yayasan', 'Ketentuan larangan pembagian dividen dan kewajiban audit publik.', 'Mampu mengidentifikasi batasan legalitas tata kelola yayasan.'],
        ['2', 'Akuntansi Dana Parpol', 'Aturan proporsi 60/40 dan mekanisme pertanggungjawaban ke BPK.', 'Mampu menguji kepatuhan penggunaan dana bantuan negara partai politik.'],
        ['3', 'Audit Dana Kampanye Pemilu', 'Struktur LADK, LPSDK, LPPDK dan audit kepatuhan oleh KAP mitra KPU.', 'Mampu menganalisis kepatuhan pelaporan dana pemilu.']
      ],
      caption: 'Tabel 12.2: Peta penguasaan submateri TM 12 Akuntansi Sektor Publik.'
    },
    CASE_POLITICAL_PARTY_NGO_ACCOUNTING,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Larangan Pengalihan Aset Yayasan**: Kekayaan yayasan dilarang dialihkan atau dibagikan secara langsung maupun tidak langsung kepada Pembina, Pengurus, atau Pengawas (ancaman pidana UU Yayasan).',
        '**Audit Parpol Bukan Audit WTP**: Pemeriksaan BPK atas bantuan dana parpol adalah pemeriksaan kepatuhan (Compliance Audit) untuk memastikan apakah dana dipakai sesuai aturan perundang-undangan.',
        '**Sumbangan Anonim Kampanye Wajib Disetor**: Sumbangan dana kampanye dari penyumbang yang identitasnya tidak jelas dilarang digunakan dan wajib disetorkan 100% ke Kas Negara.'
      ]
    }
  ]
};
