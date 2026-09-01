import type { Reading } from '../../../types';
import { CASE_POLITICAL_PARTY_NGO_ACCOUNTING } from '../aspPracticeCases';

const SVG_SPECIAL_NONPROFIT = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">AKUNTABILITAS ORGANISASI NIRLABA KHUSUS: YAYASAN, LSM, &amp; PARTAI POLITIK</text>
  
  <rect x="30" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="78" fill="#38bdf8" font-size="10.5" font-weight="700" text-anchor="middle">YAYASAN PENDIDIKAN</text>
  <text x="125" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(UU No. 16/2001 &amp; 28/2004):</text>
  <text x="125" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Dana SPP, Gedung, &amp; BOS</text>
  <text x="125" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Larangan pembagian dividen</text>
  <text x="125" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Wajib audit KAP jika aset > 20 M</text>
  <text x="125" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Nirlaba Pendidikan</text>

  <rect x="245" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="340" y="78" fill="#4ade80" font-size="10.5" font-weight="700" text-anchor="middle">LEMBAGA SWADAYA (LSM)</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Organisasi Advokasi / Amal):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Hibah Donor Domestik/Asing</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kepatuhan Project Grant Budget</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Time &amp; Purpose Restrictions</text>
  <text x="340" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Akuntabilitas Donor</text>

  <rect x="460" y="55" width="190" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="555" y="78" fill="#fbbf24" font-size="10.5" font-weight="700" text-anchor="middle">PARTAI POLITIK</text>
  <text x="555" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(UU No. 2/2011 &amp; KPU):</text>
  <text x="555" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Bantuan Keuangan APBN/APBD</text>
  <text x="555" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• 60% Pendidikan Politik Kader</text>
  <text x="555" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Wajib diaudit BPK setiap tahun</text>
  <text x="555" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">Dana Politik Terbuka</text>
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
