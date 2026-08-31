import type { Reading } from '../../../types';

export const TM12_READING: Reading = {
  tm: 12,
  title: 'Akuntansi & Pelaporan Keuangan Organisasi Nirlaba (LSM & Partai Politik)',
  ref: 'ISAK 35 | UU No. 2/2011 jo. UU No. 2/2008 tentang Partai Politik',
  intro: 'Modul Pembelajaran Mendalam Akuntansi Sektor Publik TM 12: Menguasai pelaporan keuangan khusus Lembaga Swadaya Masyarakat (LSM) dan Partai Politik di Indonesia, regulasi pendanaan partai politik (Iuran Anggota, Sumbangan Sah Berbadan Hukum, dan Bantuan Keuangan Negara APBN/APBD), serta penyusunan Laporan Dana Kampanye dan Laporan Pertanggungjawaban Bantuan Keuangan Partai Politik yang diaudit oleh BPK.',
  objectives: [
    'Menjelaskan regulasi pendanaan partai politik berdasarkan UU No. 2/2011 tentang Partai Politik.',
    'Membedakan sumber penerimaan partai politik: Internal (Iuran), Eksternal Privat (Sumbangan Perseorangan & Korporasi dengan batasan batas nominal), dan Bantuan Keuangan Negara (APBN/APBD).',
    'Menyusun Laporan Pertanggungjawaban Penerimaan dan Pengeluaran Dana Bantuan Keuangan Partai Politik.',
    'Menjelaskan mekanisme audit kepatuhan oleh BPK atas dana bantuan partai politik.',
    'Merancang laporan keuangan LSM berbasis ISAK 35 untuk donor internasional dan transparansi publik.'
  ],
  blocks: [
    { kind: 'h2', text: '1. Sumber Pendanaan Partai Politik di Indonesia (UU 2/2011)' },
    {
      kind: 'table',
      headers: ['Sumber Pendanaan Parpol', 'Karakteristik & Batasan Legalitas', 'Ketentuan Akuntabilitas & Pelaporan'],
      rows: [
        ['1. Iuran Anggota', 'Berasal dari kader partai dan anggota parlemen (fraksi DPR/DPRD).', 'Wajib dicatat dalam pembukuan resmi rekening khusus partai politik.'],
        ['2. Sumbangan Sah (Perseorangan & Badan Usaha)', 'Sumbangan sukarela tidak mengikat dari perorangan (maksimal Rp 1 Miliar/thn) atau korporasi/badan usaha (maksimal Rp 7,5 Miliar/thn).', 'Dilarang menerima dari pihak asing, BUMN/BUMD, atau hasil tindak pidana pencucian uang.'],
        ['3. Bantuan Keuangan Negara (APBN / APBD)', 'Diberikan secara proporsional berdasarkan perolehan suara sah pemilu legislatif.', '**Wajib diprioritaskan minimal 60% untuk Pendidikan Politik**, sisanya untuk operasional sekretariat. **Wajib diaudit BPK setiap tahun**!']
      ],
      caption: 'Tabel 12.1: Tiga pilar pendanaan legal partai politik di Indonesia.'
    },

    { kind: 'h2', text: '2. Laporan Dana Kampanye Pemilihan Umum' },
    {
      kind: 'callout',
      variant: 'key',
      title: 'Tiga Dokumen Laporan Dana Kampanye (KPU)',
      text: '1. **LADK (Laporan Awal Dana Kampanye)**: Memuat saldo awal rekening khusus dana kampanye (RKDK) saat masa kampanye dibuka.\n2. **LPSDK (Laporan Pemberi Sumbangan Dana Kampanye)**: Memuat identitas lengkap dan besaran rupiah setiap donatur.\n3. **LPPDK (Laporan Penerimaan dan Pengeluaran Dana Kampanye)**: Laporan komprehensif penutupan kampanye yang wajib diserahkan kepada Kantor Akuntan Publik (KAP) yang ditunjuk KPU untuk diaudit kepatuhannya.'
    },

    { kind: 'h2', text: '3. Rangkuman & Kunci Penguasaan Ujian TM 12' },
    {
      kind: 'ul',
      items: [
        '**Sanksi BPK atas Dana Bantuan Parpol**: Jika parpol tidak menyerahkan LPJ bantuan negara tepat waktu atau terdapat temuan penyalahgunaan, bantuan APBN/APBD dihentikan pada tahun berikutnya.',
        '**LSM / NGO**: Menghadapi tuntutan *Multi-Donor Reporting* (menyusun laporan keuangan berbasis ISAK 35 sekaligus laporan kepatuhan format khusus donor).'
      ]
    }
  ]
};