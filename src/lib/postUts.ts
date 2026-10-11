import type { Course } from '../types';

/**
 * Penomoran tatap muka setelah UTS mengikuti kontrak tiap mata kuliah (RPP, RPS, atau kontrak perkuliahan).
 * - Sebagian besar mata kuliah memakai TM 9–15 (TM 8 = UTS, TM 16 = UAS), jadi blok kedua tampil "TM 9–15".
 * - Sebagian lain (mis. ASP dan SIA) menomori TM 1–14 berurutan tanpa memberi nomor pada UTS dan UAS: "TM 8–14".
 * Rentang blok kedua diambil dari daftar materi di katalog (`materiTM8_14`); tanpa daftar itu dianggap 8–14.
 */
export interface PostUtsRange {
  start: number;
  end: number;
}

/** Kunci bacaan khusus: ulasan UTS memakai nomor 0, ulasan UAS memakai nomor 16 (nomor TM biasa maksimal 15). */
export const REVIEW_UTS_TM = 0;
export const REVIEW_UAS_TM = 16;

const DEFAULT_RANGE: PostUtsRange = { start: 8, end: 14 };

export function getPostUtsRange(course: Pick<Course, 'materiTM8_14'> | null | undefined): PostUtsRange {
  const list = course?.materiTM8_14;
  if (!list || list.length === 0) return DEFAULT_RANGE;
  const numbers = list.map((item) => item.tm);
  return { start: Math.min(...numbers), end: Math.max(...numbers) };
}

export function postUtsLabel(range: PostUtsRange): string {
  return `TM ${range.start}–${range.end}`;
}

export function inPostUtsRange(tm: number, range: PostUtsRange): boolean {
  return tm >= range.start && tm <= range.end;
}
