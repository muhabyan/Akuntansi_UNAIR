export interface ArsipFile {
  name: string;
  url: string;
  type: 'pdf' | 'docx' | 'pptx' | 'xlsx' | 'html' | 'other';
}

export const ARSIP_REGISTRY: Record<string, ArsipFile[]> = {
  'AKM201': [ // AKBI
    { name: 'JAWABAN KUIS PRA-UAS AKUNTANSI BIAYA.pdf', url: '/arsip-uas/AKBI/JAWABAN KUIS PRA-UAS AKUNTANSI BIAYA.pdf', type: 'pdf' },
    { name: 'PEMBAHASAN KUIS PRA UAS AKBI.pdf', url: '/arsip-uas/AKBI/PEMBAHASAN KUIS PRA UAS AKBI.pdf', type: 'pdf' },
    { name: 'SOAL KUIS PRA-UAS AKUNTANSI BIAYA .pdf', url: '/arsip-uas/AKBI/SOAL KUIS PRA-UAS AKUNTANSI BIAYA .pdf', type: 'pdf' },
    { name: 'UAS 2022.xlsx', url: '/arsip-uas/AKBI/UAS 2022.xlsx', type: 'xlsx' },
    { name: 'UAS AKBI 2021.pdf', url: '/arsip-uas/AKBI/UAS AKBI 2021.pdf', type: 'pdf' },
    { name: 'uas sem 3 akbi.pdf', url: '/arsip-uas/AKBI/uas sem 3 akbi.pdf', type: 'pdf' },
  ],
  'AKK201': [ // AKM1
    { name: 'Bahas Soal UAS AKM 1(coretan).pdf', url: '/arsip-uas/AKM1/Bahas Soal UAS AKM 1(coretan).pdf', type: 'pdf' },
    { name: 'ES x HMA UNAIR - AKM I (UAS).pptx', url: '/arsip-uas/AKM1/ES x HMA UNAIR - AKM I (UAS).pptx', type: 'pptx' },
    { name: 'KUIS PRA UAS AKM 1 2024.pdf', url: '/arsip-uas/AKM1/KUIS PRA UAS AKM 1 2024.pdf', type: 'pdf' },
    { name: 'KUIS PRA UAS AKM 1.pdf', url: '/arsip-uas/AKM1/KUIS PRA UAS AKM 1.pdf', type: 'pdf' },
    { name: 'SOAL KUIS PRA UAS AKM 1.pdf', url: '/arsip-uas/AKM1/SOAL KUIS PRA UAS AKM 1.pdf', type: 'pdf' },
  ],
  'AKA103': [ // ETIKA
    { name: 'Etika.pdf', url: '/arsip-uas/ETIKA/Etika.pdf', type: 'pdf' },
    { name: 'UAS ETIKA.pdf', url: '/arsip-uas/ETIKA/UAS ETIKA.pdf', type: 'pdf' },
  ],
  'PJK201': [ // PAJAK
    { name: 'PRE UAS KUIS PAJAK.pdf', url: '/arsip-uas/PAJAK/PRE UAS KUIS PAJAK.pdf', type: 'pdf' },
    { name: 'Latihan quiz uas pajak.docx', url: '/arsip-uas/PAJAK/Latihan quiz uas pajak.docx', type: 'docx' },
    { name: 'Latihan UAS PAJAK.docx', url: '/arsip-uas/PAJAK/Latihan UAS PAJAK.docx', type: 'docx' },
    { name: 'QUIZ UAS PAJAK.docx', url: '/arsip-uas/PAJAK/QUIZ UAS PAJAK.docx', type: 'docx' },
  ],
  'MNU101': [ // PENGBIS
    { name: 'pengbis uas.pdf', url: '/arsip-uas/PENGBIS/pengbis uas.pdf', type: 'pdf' },
    { name: '_UAS PENGBIS - Google Dokumen.docx.pdf', url: '/arsip-uas/PENGBIS/_UAS PENGBIS - Google Dokumen.docx.pdf', type: 'pdf' },
    { name: '5 Soal Perencanaan dan Strategi Pemasaran.pdf', url: '/arsip-uas/PENGBIS/pdf-p-classtruncatedtext-module-lineclamped-85ulhh-style-max-lines5kelompok-5-soal-perencanaan-dan-strategi-pemasaran-p_compress.pdf', type: 'pdf' },
    { name: 'UAS PENGBIS.docx', url: '/arsip-uas/PENGBIS/UAS PENGBIS.docx', type: 'docx' },
  ],
  'EKT109': [ // PTE
    { name: 'Modul Final UAS PTE Makro PJMK.pdf', url: '/arsip-uas/PTE/Modul_Final_UAS_PTE_Makro_PJMK.pdf', type: 'pdf' },
    { name: 'UAS_PTE_SAKURA-Copy.pdf', url: '/arsip-uas/PTE/UAS_PTE_SAKURA-Copy.pdf', type: 'pdf' },
    { name: 'UAS_PTE_SAKURA.pdf', url: '/arsip-uas/PTE/UAS_PTE_SAKURA.pdf', type: 'pdf' },
    { name: 'SOAL LATIHAN UTS.pdf', url: '/arsip-uas/PTE/SOAL LATIHAN UTS.pdf', type: 'pdf' },
    { name: 'LATIHAN SOAL UAS.pdf', url: '/arsip-uas/PTE/LATIHAN SOAL UAS.pdf', type: 'pdf' },
  ],
  'MAS122': [ // STATIS
    { name: 'UAS STATIS 2024.pdf', url: '/arsip-uas/STATIS/UAS STATIS 2024.pdf', type: 'pdf' },
  ]
};

export function getArsipFiles(courseCode: string): ArsipFile[] {
  return ARSIP_REGISTRY[courseCode] ?? [];
}
