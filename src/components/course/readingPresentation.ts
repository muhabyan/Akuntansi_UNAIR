import type { Reading } from '../../types';

/** Capitalize the ASP card/header subtitle for display while keeping the 05 source intact. */
export function getReadingSubtitle(reading: Reading): string {
  if (reading.layout !== 'layered' || reading.ref !== 'Akuntansi Sektor Publik') return reading.intro;
  return reading.intro.replace(/\p{L}/u, (letter) => letter.toLocaleUpperCase('id-ID'));
}
