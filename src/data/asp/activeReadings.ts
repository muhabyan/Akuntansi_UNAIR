import type { ContentBlock, Reading } from '../../types';
import { AKS201_READINGS } from './aspData';
import { ASP_ELABORATED_READINGS } from './elaboratedReadings';

// Canonical source-audited meetings lead. Retain the earlier teaching examples as
// optional practice, so the old spread cannot silently replace TM8–14 or hide TM12.
const supplemental: Record<number, ContentBlock[]> = {};
function refreshLegacy(block: ContentBlock): ContentBlock {
  if (block.kind === 'p') return { ...block, text: block.text.replace('TM12 belum tersedia sebagai bacaan terpisah di website.', 'TM12 kini tersedia sebagai bacaan tersendiri pada materi utama.') };
  if ('blocks' in block && Array.isArray(block.blocks)) return { ...block, blocks: block.blocks.map(refreshLegacy) };
  return block;
}
for (const [tm, reading] of Object.entries(ASP_ELABORATED_READINGS)) {
  for (const block of reading.blocks) {
    const target = Number(tm) === 11 && block.kind === 'section' && block.title?.includes('jembatan TM12') ? 12 : Number(tm);
    (supplemental[target] ??= []).push(refreshLegacy(block));
  }
}
export const ASP_ACTIVE_READINGS: Record<number, Reading> = Object.fromEntries(
  Object.entries(AKS201_READINGS).map(([tm, reading]) => [tm, supplemental[Number(tm)]?.length ? {
    ...reading,
    blocks: [...reading.blocks, {
      kind: 'pendalaman', title: 'Latihan tambahan dari revisi sebelumnya',
      blocks: [
        { kind: 'p', text: 'Contoh berikut merupakan ilustrasi penulis dari revisi sebelumnya. Asumsi dan angka setiap kasus berdiri sendiri; gunakan rujukan serta batas sumber pada bacaan utama untuk memeriksa penerapannya.' },
        ...supplemental[Number(tm)],
      ],
    }],
  } satisfies Reading : reading]),
);
