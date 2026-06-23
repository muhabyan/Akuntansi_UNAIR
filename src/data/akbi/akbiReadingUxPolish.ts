// =============================================================
// src/data/akbi/akbiReadingUxPolish.ts
// Batch 14: utility polish Reading UX AKBI.
// Fokus: menambah navigasi baca dan checkpoint akhir tanpa mengubah hitungan inti.
// =============================================================
import type { ContentBlock, Reading } from '../../types';

export type AkbiReadingUxConfig = {
  tm: number;
  phase: 'pra_uts' | 'pra_uas';
  focus: string;
  theory: string;
  formula: string;
  example: string;
  practice: string;
  trap: string;
  sourceAlignment: string;
  nextAction: string;
};

export type AkbiUxReadable = Reading & {
  blocks: ContentBlock[];
  manualCheckCount?: number;
};

const hasBlock = (blocks: ContentBlock[], kind: ContentBlock['kind'], text: string): boolean =>
  blocks.some((block) => {
    if ('text' in block && typeof block.text === 'string') return block.kind === kind && block.text === text;
    if ('title' in block && typeof block.title === 'string') return block.kind === kind && block.title === text;
    return false;
  });

export const applyAkbiReadingUxPolish = <T extends AkbiUxReadable>(reading: T, config: AkbiReadingUxConfig): T => {
  const navigationTitle = 'Peta Navigasi Baca';
  const checkpointTitle = 'Checkpoint Sebelum Pindah Materi';

  if (!hasBlock(reading.blocks, 'h2', navigationTitle)) {
    const navigationBlocks: ContentBlock[] = [
      {
        kind: 'h2',
        text: navigationTitle,
      },
      {
        kind: 'callout',
        variant: config.phase === 'pra_uts' ? 'tip' : 'key',
        title: `Cara membaca TM ${config.tm}`,
        text: `Mulai dari teori inti, lanjutkan ke formula, baca contoh angka, kerjakan latihan, lalu cek jebakan ujian. Fokus TM ini: ${config.focus}.`,
      },
      {
        kind: 'table',
        headers: ['Bagian', 'Fungsi', 'Yang harus selesai sebelum lanjut'],
        rows: [
          ['Teori', 'Memberi definisi dan alasan konsep dipakai', config.theory],
          ['Formula', 'Mengunci pola hitung yang sering keluar di ujian', config.formula],
          ['Contoh', 'Memperlihatkan urutan kerja dari data ke jawaban', config.example],
          ['Latihan', 'Menguji apakah konsep sudah bisa dipakai tanpa melihat jawaban', config.practice],
          ['Trap', 'Menandai kekeliruan yang paling sering membuat jawaban salah', config.trap],
          ['Source alignment', 'Menjaga materi tetap sesuai RPS dan tutor AKBI', config.sourceAlignment],
        ],
        caption: 'Navigasi ini ditambahkan pada Batch 14 agar setiap TM memiliki jeda baca yang konsisten seperti pola AKM final.',
      },
    ];

    reading.blocks = [...navigationBlocks, ...reading.blocks];
  }

  if (!hasBlock(reading.blocks, 'h2', checkpointTitle)) {
    const checkpointBlocks: ContentBlock[] = [
      {
        kind: 'h2',
        text: checkpointTitle,
      },
      {
        kind: 'table',
        headers: ['Cek cepat', 'Standar minimal sebelum lanjut'],
        rows: [
          ['Teori', config.theory],
          ['Formula', config.formula],
          ['Contoh', config.example],
          ['Latihan', config.practice],
          ['Trap', config.trap],
        ],
        caption: `Checkpoint TM ${config.tm}: gunakan tabel ini sebagai penanda bahwa materi sudah tidak dibaca secara loncat-loncat.`,
      },
      {
        kind: 'callout',
        variant: 'info',
        title: 'Arah belajar berikutnya',
        text: config.nextAction,
      },
    ];

    reading.blocks = [...reading.blocks, ...checkpointBlocks];
  }

  return reading;
};
