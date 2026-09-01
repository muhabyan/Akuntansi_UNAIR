import type { Reading } from '../../../types';
import { CASE_APBD_BUDGETING_CYCLE } from '../aspPracticeCases';

const SVG_APBD_CYCLE = `
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif">
  <rect x="10" y="10" width="660" height="200" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="340" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">ALUR KRONOLOGIS SIKLUS PERENCANAAN &amp; PENGANGGARAN APBD (PERMENDAGRI 77/2020)</text>
  
  <rect x="25" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="84" y="78" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">1. MUSRENBANG</text>
  <text x="84" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Januari - Maret):</text>
  <text x="84" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Desa → Kecamatan</text>
  <text x="84" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Musrenbang Kab/Kota</text>
  <text x="84" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Aspirasi Warga</text>
  <text x="84" y="175" fill="#38bdf8" font-size="9" font-weight="700" text-anchor="middle">Bottom-Up Planning</text>

  <rect x="153" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
  <text x="212" y="78" fill="#4ade80" font-size="10" font-weight="700" text-anchor="middle">2. RKPD DAERAH</text>
  <text x="212" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(April - Mei):</text>
  <text x="212" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Rencana Kerja Tahunan</text>
  <text x="212" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Penjabaran RPJMD</text>
  <text x="212" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Ditetapkan Perkada</text>
  <text x="212" y="175" fill="#4ade80" font-size="9" font-weight="700" text-anchor="middle">Dokumen Rencana</text>

  <rect x="281" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="340" y="78" fill="#fbbf24" font-size="10" font-weight="700" text-anchor="middle">3. KUA - PPAS</text>
  <text x="340" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Juni - Agustus):</text>
  <text x="340" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kebijakan Umum Angg</text>
  <text x="340" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Prioritas Plafon SKPD</text>
  <text x="340" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Kesepakatan DPRD</text>
  <text x="340" y="175" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle">MoU KDH &amp; DPRD</text>

  <rect x="409" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="468" y="78" fill="#a78bfa" font-size="10" font-weight="700" text-anchor="middle">4. RKA - SKPD</text>
  <text x="468" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Agustus - Sept):</text>
  <text x="468" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Rencana Kerja Dinas</text>
  <text x="468" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Rincian Belanja SKPD</text>
  <text x="468" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Evaluasi TAPD</text>
  <text x="468" y="175" fill="#a78bfa" font-size="9" font-weight="700" text-anchor="middle">Input Penyusunan</text>

  <rect x="537" y="55" width="118" height="145" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
  <text x="596" y="78" fill="#f87171" font-size="10" font-weight="700" text-anchor="middle">5. PERDA APBD</text>
  <text x="596" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">(Okt - 30 Nov):</text>
  <text x="596" y="122" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Pembahasan DPRD</text>
  <text x="596" y="138" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Persetujuan Bersama</text>
  <text x="596" y="154" fill="#cbd5e1" font-size="8.5" text-anchor="middle">• Evaluasi Kemendagri</text>
  <text x="596" y="175" fill="#fca5a5" font-size="9" font-weight="700" text-anchor="middle">Perda APBD Sah</text>
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
