import type { Reading } from '../../../types';
import { CASE_APBD_BUDGETING_CYCLE } from '../aspPracticeCases';

const SVG_APBD_CYCLE = `<svg class="course-diagram-svg" viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <defs>
    <linearGradient id="bgAsp4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0b1329"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
    <linearGradient id="ap1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
    <linearGradient id="ap2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
    <linearGradient id="ap3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
    <linearGradient id="ap4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
  </defs>
  <rect class="svg-bg" x="10" y="10" width="880" height="340" rx="16" fill="url(#bgAsp4)" stroke="#1e293b" stroke-width="1.5"/>
  <rect class="svg-header" x="10" y="10" width="880" height="46" rx="16" fill="#1e293b" fill-opacity="0.6"/>
  <line class="svg-divider" x1="10" y1="56" x2="890" y2="56" stroke="#334155" stroke-width="1"/>
  <circle cx="32" cy="33" r="5" fill="#38bdf8"/>
  <text class="svg-title" x="46" y="38" fill="#f8fafc" font-size="13" font-weight="700">SIKLUS TAHAPAN PERENCANAAN DAN PENGANGGARAN APBD (PP 12/2019 &amp; PERMENDAGRI 77/2020)</text>
  <rect class="svg-badge-blue" x="735" y="21" width="140" height="24" rx="12" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
  <text class="text-accent-blue" x="805" y="37" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">APBD CYCLE</text>

  <!-- 4 Sequential Stages -->
  <g transform="translate(35, 75)">
    <!-- Stage 1 -->
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#ap1)" fill-opacity="0.25"/>
    <text class="text-accent-blue" x="97" y="20" fill="#38bdf8" font-size="9.5" font-weight="800" text-anchor="middle">1. MUSRENBANG &amp; RKPD</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-blue" x="97" y="53" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle">Januari s.d. Mei (Bappeda)</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Musrenbang Desa s.d. Provinsi</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Menjaring aspirasi dasar warga</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Penyusunan Renja SKPD</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Penetapan RKPD via Perkada</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Menjadi dasar kebijakan makro</text>
    <rect class="svg-badge-blue" x="10" y="185" width="175" height="24" rx="4" fill="#0284c7" fill-opacity="0.2"/>
    <text class="text-accent-blue" x="97" y="201" fill="#38bdf8" font-size="7.5" font-weight="700" text-anchor="middle">Perencanaan Partisipatif</text>
  </g>

  <polygon points="237,185 245,190 237,195" fill="#38bdf8"/>

  <g transform="translate(250, 75)">
    <!-- Stage 2 -->
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#a78bfa" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#ap2)" fill-opacity="0.25"/>
    <text class="text-accent-purple" x="97" y="20" fill="#a78bfa" font-size="9.5" font-weight="800" text-anchor="middle">2. KUA - PPAS</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-purple" x="97" y="53" fill="#a78bfa" font-size="8" font-weight="800" text-anchor="middle">Juni s.d. Agustus (TAPD &amp; DPRD)</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Kebijakan Umum APBD (KUA)</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Prioritas &amp; Plafon Anggaran (PPAS)</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Pembahasan bersama Badan Anggaran</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Penandatanganan Nota Kesepakatan</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Batas pagu anggaran per SKPD</text>
    <rect class="svg-badge-purple" x="10" y="185" width="175" height="24" rx="4" fill="#7c3aed" fill-opacity="0.2"/>
    <text class="text-accent-purple" x="97" y="201" fill="#a78bfa" font-size="7.5" font-weight="700" text-anchor="middle">Kesepakatan Pagu Eksekutif-Legislatif</text>
  </g>

  <polygon points="452,185 460,190 452,195" fill="#a78bfa"/>

  <g transform="translate(465, 75)">
    <!-- Stage 3 -->
    <rect class="svg-card" x="0" y="0" width="195" height="235" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
    <rect x="0" y="0" width="195" height="30" rx="10" fill="url(#ap3)" fill-opacity="0.25"/>
    <text class="text-accent-amber" x="97" y="20" fill="#fbbf24" font-size="9.5" font-weight="800" text-anchor="middle">3. RKA-SKPD &amp; RAPERDA</text>
    <rect class="svg-subcard" x="10" y="38" width="175" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-amber" x="97" y="53" fill="#fbbf24" font-size="8" font-weight="800" text-anchor="middle">September s.d. November</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Kepala SKPD menyusun RKA</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Standar Harga Satuan (SSH/ASB)</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Kompilasi menjadi Raperda APBD</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Rapat Paripurna Persetujuan DPRD</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Paling lambat 30 November</text>
    <rect class="svg-badge-amber" x="10" y="185" width="175" height="24" rx="4" fill="#d97706" fill-opacity="0.2"/>
    <text class="text-accent-amber" x="97" y="201" fill="#fbbf24" font-size="7.5" font-weight="700" text-anchor="middle">Persetujuan Bersama Raperda</text>
  </g>

  <polygon points="667,185 675,190 667,195" fill="#fbbf24"/>

  <g transform="translate(680, 75)">
    <!-- Stage 4 -->
    <rect class="svg-card" x="0" y="0" width="185" height="235" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
    <rect x="0" y="0" width="185" height="30" rx="10" fill="url(#ap4)" fill-opacity="0.25"/>
    <text class="text-accent-green" x="92" y="20" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle">4. EVALUASI &amp; DPA</text>
    <rect class="svg-subcard" x="10" y="38" width="165" height="22" rx="4" fill="#1e293b"/>
    <text class="text-accent-green" x="92" y="53" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle">Desember (Kemendagri / Prov)</text>
    <text class="svg-text" x="10" y="78" fill="#cbd5e1" font-size="7.5">• Evaluasi Mendagri / Gubernur</text>
    <text class="svg-text" x="10" y="92" fill="#cbd5e1" font-size="7.5">• Penetapan Perda APBD Resmi</text>
    <text class="svg-text" x="10" y="108" fill="#cbd5e1" font-size="7.5">• Pengesahan DPA-SKPD oleh PPKD</text>
    <text class="svg-text" x="10" y="122" fill="#cbd5e1" font-size="7.5">• Penerbitan Anggaran Kas</text>
    <text class="svg-text" x="10" y="138" fill="#cbd5e1" font-size="7.5">• Siap dieksekusi 1 Januari</text>
    <rect class="svg-badge-green" x="10" y="185" width="165" height="24" rx="4" fill="#059669" fill-opacity="0.2"/>
    <text class="text-accent-green" x="92" y="201" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle">Otorisasi Dokumen Pelaksanaan</text>
  </g>
</svg>`;

export const TM4_READING: Reading = {
  tm: 4,
  title: 'Perencanaan & Penganggaran Sektor Publik: Konsep, Siklus, & Struktur APBN / APBD',
  ref: 'Permendagri 77/2020 | UU 23/2014 Pemerintahan Daerah | Siklus Perencanaan RKPD s/d Perda APBD',
  intro: 'TM 4 membahas siklus penyusunan anggaran publik di Indonesia: penjabaran dokumen perencanaan jangka panjang/menengah (RPJPD, RPJMD) menjadi rencana tahunan (RKPD), mekanisme Musrenbang, formulasi KUA-PPAS, penyusunan RKA-SKPD, pembahasan politik anggaran dengan DPRD, evaluasi Kementerian Dalam Negeri, serta struktur pos APBD (Pendapatan Daerah, Belanja Daerah, dan Pembiayaan Daerah).',
  objectives: [
    'Menjelaskan keterkaitan hierarkis dokumen perencanaan: RPJMD -> RKPD -> KUA-PPAS -> RKA-SKPD -> APBD.',
    'Menguasai tahapan kronologis siklus APBD menurut regulasi Permendagri No. 77/2020.',
    'Menganalisis struktur 3 pos utama APBD (Pendapatan, Belanja Operasi/Modal, Pembiayaan Netto).',
    'Menjelaskan fungsi SiLPA (Sisa Lebih Perhitungan Anggaran) sebagai penutup defisit belanja.'
  ],
  blocks: [
    {
      kind: 'figure',
      caption: 'Gambar 4.1: Alur Kronologis Siklus Perencanaan dan Penganggaran APBD Daerah.',
      svg: SVG_APBD_CYCLE
    },
    {
      kind: 'h2',
      text: 'Alur Belajar Cepat (Learning Flow Matrix) TM 4'
    },
    {
      kind: 'table',
      headers: ['Tahapan Siklus', 'Dokumen yang Dihasilkan', 'Pihak yang Terlibat', 'Batas Waktu Regulasi'],
      rows: [
        ['Perencanaan Partisipatif', 'Rencana Kerja Pemerintah Daerah (RKPD)', 'Bappeda, SKPD, dan Warga Masyarakat (Musrenbang).', 'Paling lambat akhir Mei.'],
        ['Kebijakan & Plafon Anggaran', 'Nota Kesepakatan KUA dan PPAS', 'Kepala Daerah dan Pimpinan DPRD.', 'Paling lambat minggu ke-2 Agustus.'],
        ['Penyusunan Rencana Kerja SKPD', 'RKA-SKPD', 'Masing-masing Kepala SKPD/Dinas dan TAPD.', 'Agustus s/d September.'],
        ['Persetujuan Raperda APBD', 'Persetujuan Bersama Raperda APBD', 'Kepala Daerah dan DPRD.', 'Paling lambat 30 November.'],
        ['Evaluasi & Penetapan', 'Peraturan Daerah (Perda) APBD & DPA', 'Gubernur / Kemendagri dan Kepala Daerah.', 'Paling lambat 31 Desember.']
      ],
      caption: 'Tabel 4.0: Matriks jadwal dan dokumen siklus penyusunan APBD.'
    },
    {
      kind: 'h2',
      text: 'Formula Sheet Fondasi: Struktur Keseimbangan APBD'
    },
    {
      kind: 'formula',
      text: `\\text{Surplus / Defisit APBD} = \\text{Pendapatan Daerah} - \\text{Belanja Daerah}
\\text{Pembiayaan Netto} = \\text{Penerimaan Pembiayaan (SiLPA Lalu, Pinjaman)} - \\text{Pengeluaran Pembiayaan (Penyertaan Modal, Bayar Pokok Utang)}
\\text{Sisa Lebih Pembiayaan Anggaran (SiLPA Tahun Berkenaan)} = (\\text{Surplus/Defisit}) + \\text{Pembiayaan Netto} = 0 \\quad \\text{(APBD Berimbang)}`,
      note: 'Defisit belanja APBD (Belanja > Pendapatan) wajib ditutup dengan Pembiayaan Netto positif agar posisi SiLPA tahun berkenaan seimbang nol.'
    },
    {
      kind: 'h2',
      text: 'Latihan Aktif Interaktif'
    },
    {
      kind: 'solution-reveal',
      title: 'Latihan Mandiri: Struktur Anggaran Defisit & Pembiayaan APBD',
      prompt: 'Data Raperda APBD Kabupaten Jember: Target Pendapatan Daerah = Rp 3,8 Triliun; Rencana Belanja Daerah = Rp 4,2 Triliun; Pengeluaran Pembiayaan (Penyertaan Modal BUMD) = Rp 100 Miliar. Berapa Penerimaan Pembiayaan yang dibutuhkan agar anggaran berimbang?',
      blocks: [
        {
          kind: 'ul',
          items: [
            '**Defisit Anggaran**: Pendapatan Daerah - Belanja Daerah = Rp 3,8 Triliun - Rp 4,2 Triliun = **-Rp 400 Miliar (Defisit)**.',
            '**Kebutuhan Pembiayaan Netto**: Pembiayaan Netto harus bernilai **+Rp 400 Miliar** untuk menutup defisit belanja.',
            '**Penerimaan Pembiayaan yang Dibutuhkan**:\nPembiayaan Netto = Penerimaan Pembiayaan - Pengeluaran Pembiayaan\nRp 400 Miliar = Penerimaan Pembiayaan - Rp 100 Miliar\nPenerimaan Pembiayaan = 400 Miliar + 100 Miliar = **Rp 500 Miliar** (biasanya bersumber dari SiLPA tahun anggaran sebelumnya atau penarikan pinjaman daerah).'
          ]
        }
      ]
    },
    {
      kind: 'h2',
      text: 'Peta Submateri & Target Penguasaan Ujian TM 4'
    },
    {
      kind: 'table',
      headers: ['No', 'Submateri Pokok', 'Kedalaman Penguasaan yang Diuji', 'Standar Output Ujian'],
      rows: [
        ['1', 'Keterkaitan Dokumen Rencana & Anggaran', 'Hubungan RPJMD, RKPD, KUA-PPAS, RKA-SKPD, dan APBD.', 'Mampu menganalisis alur konsistensi perencanaan daerah.'],
        ['2', 'Timeline & Sanksi Keterlambatan', 'Ketentuan batas 30 November dan sanksi Perkada pengganti Perda.', 'Menguasai konsekuensi hukum kebuntuan politik anggaran.'],
        ['3', 'Struktur 3 Pos APBD', 'Perhitungan Surplus/Defisit, Pembiayaan Netto, dan SiLPA.', 'Mampu menyusun format tabel ringkasan APBD berimbang.']
      ],
      caption: 'Tabel 4.2: Peta penguasaan submateri TM 4 Akuntansi Sektor Publik.'
    },
    CASE_APBD_BUDGETING_CYCLE,
    {
      kind: 'h2',
      text: 'Rangkuman & Kunci Sukses Ujian (Key Takeaways)'
    },
    {
      kind: 'ul',
      items: [
        '**Pendekatan Top-Down & Bottom-Up**: Siklus APBD memadukan pendekatan partisipatif warga dari bawah (Musrenbang) dengan arahan plafon prioritas dari atas (KUA-PPAS).',
        '**DPA (Dokumen Pelaksanaan Anggaran)**: Setelah Perda APBD disahkan, TAPD menerbitkan DPA-SKPD yang menjadi otorisasi legal bagi bendahara dinas untuk mencairkan kas.',
        '**Batas Waktu Mutlak 30 November**: Persetujuan bersama KDH dan DPRD wajib tuntas paling lambat 1 bulan sebelum tahun anggaran dimulai agar tidak terkena sanksi administratif kementerian.'
      ]
    }
  ]
};
