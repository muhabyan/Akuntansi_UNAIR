import type { ContentBlock, Reading } from '../../types';
import sourceDeltas from './supplements.json';

type Delta = { source: string; finding: string; blocks: ContentBlock[] };
const deltas = sourceDeltas as unknown as Record<string, Record<string, Delta>>;
const auditedByInput = new WeakMap<Record<number, Reading>, Record<string, Record<number, Reading>>>();

function reviseText(value: unknown): unknown {
  if (typeof value === 'string') return value
    .replace(/—/g, ':')
    .replace('**bukan** produk dari penelitian SPT, melainkan instrumen', 'merupakan instrumen')
    .replace('Objek gugatan **bukan** besarnya pajak, melainkan:', 'Objek gugatan meliputi:')
    .replace(/bukan ([^.!?\n]{1,120}),? melainkan ([^.!?\n]+)/gi, '$2')
    .replace(/tidak hanya ([^.!?\n]{1,120}),? tetapi juga ([^.!?\n]+)/gi, '$1 dan $2')
    .replace('Manajer akan menerima seluruh proyek selama menghasilkan RI positif.', 'RI positif mendukung penerimaan proyek jika asumsi kas, risiko, kapasitas dan keputusan lain tetap sesuai.')
    .replace('Maka harga transfer minimum = Biaya Variabel + CM Luar = Harga Pasar Luar.', 'Harga transfer minimum mencakup biaya tambahan dan kontribusi luar yang dikorbankan, dengan biaya penjualan luar yang dapat dihindari dikurangkan.')
    .replace('Investasi pada Biaya Pencegahan dan Penilaian (Biaya Kesesuaian / Conformance Costs) akan menekan secara drastis timbulnya Biaya Kegagalan Internal dan Eksternal (Non-conformance Costs) yang jauh lebih merusak reputasi perusahaan.', 'Biaya pencegahan dan penilaian ditujukan untuk mengurangi kegagalan internal dan eksternal. Besar dampak perlu dibuktikan; periksa biaya total dan mutu, bukan menganggap setiap tambahan pengeluaran pasti efektif.')
    .replace('UAS berfokus pada:', 'Perkiraan prioritas belajar berdasarkan materi terdaftar:');
  if (Array.isArray(value)) return value.map(reviseText);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k,v]) => [k, reviseText(v)]));
  return value;
}

/** Only the registered post-UTS delta keys are changed. Pre-UTS objects keep their original identity. */
export function applyCourseAudit(code: string, readings: Record<number, Reading>): Record<number, Reading> {
  const courseDeltas = deltas[code];
  if (!courseDeltas) return readings;
  const cached = auditedByInput.get(readings);
  if (cached?.[code]) return cached[code];
  const result = Object.fromEntries(Object.entries(readings).map(([tm, reading]) => {
    const delta = courseDeltas[tm];
    if (!delta) return [tm, reading];
    const revised = reviseText(reading) as Reading;
    return [tm, { ...revised, ref: `${revised.ref}; audit: ${delta.source}`, blocks: [...revised.blocks, ...delta.blocks] }];
  }));
  auditedByInput.set(readings, { ...cached, [code]: result });
  return result;
}
