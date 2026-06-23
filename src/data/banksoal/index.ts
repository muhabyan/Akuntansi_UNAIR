import type { BankSoal } from '../../types';
import type { PteBankQuestion } from './ekt109Bank';

export type CanonicalBankSoalItem = BankSoal | PteBankQuestion;
export const BANK_SOAL_REGISTRY_MODE = 'async-lazy' as const;
export type BankSoalRegistryMode = typeof BANK_SOAL_REGISTRY_MODE;

export interface CanonicalBankSoalSet {
  id: string;
  label: string;
  items: CanonicalBankSoalItem[];
}

export interface BankSoalCatalogEntry {
  code: string;
  count: number;
  loader: 'pte' | 'non-pte';
}

const CATALOG: Record<string, BankSoalCatalogEntry> = {
  AKK201: { code: 'AKK201', count: 33, loader: 'non-pte' },
  AKM201: { code: 'AKM201', count: 51, loader: 'non-pte' },
  PJK201: { code: 'PJK201', count: 80, loader: 'non-pte' },
  MNU101: { code: 'MNU101', count: 11, loader: 'non-pte' },
  AKA103: { code: 'AKA103', count: 10, loader: 'non-pte' },
  MAS122: { code: 'MAS122', count: 5, loader: 'non-pte' },
  EKT109: { code: 'EKT109', count: 100, loader: 'pte' },
};

export function getBankSoalCatalogEntry(code: string): BankSoalCatalogEntry | null {
  return CATALOG[code] ?? null;
}

export function getBankSoalCount(code: string): number {
  return CATALOG[code]?.count ?? 0;
}

export function hasBankSoal(code: string): boolean {
  return getBankSoalCount(code) > 0;
}

/**
 * Kontrak registry kanonik: async-lazy. Consumer WAJIB memakai `await`.
 * Gunakan `getBankSoalCount`/`hasBankSoal` untuk metadata sinkron tanpa
 * memuat dataset EKT109 atau non-PTE.
 */
export async function getBankSoal(code: string): Promise<CanonicalBankSoalItem[]> {
  if (code === 'EKT109') {
    const { EKT109_BANK_QUESTIONS } = await import('./ekt109Bank');
    return EKT109_BANK_QUESTIONS;
  }
  const { getBankSoal: getNonPteBankSoal } = await import('./nonPte');
  return getNonPteBankSoal(code);
}

/** Kontrak async-lazy untuk set bank soal; consumer WAJIB memakai `await`. */
export async function getBankSoalSets(code: string): Promise<CanonicalBankSoalSet[]> {
  if (code === 'EKT109') {
    const items = await getBankSoal(code);
    const praUts = items.filter((item): item is PteBankQuestion => 'phase' in item && item.phase === 'pra-uts');
    const praUas = items.filter((item): item is PteBankQuestion => 'phase' in item && item.phase === 'pra-uas');
    return [
      { id: 'all', label: 'Bank Soal Pengantar Teori Ekonomi TM 1–14', items },
      { id: 'pra-uts', label: 'Bank Soal Pra-UTS TM 1–7', items: praUts },
      { id: 'pra-uas', label: 'Bank Soal Pra-UAS TM 8–14', items: praUas },
    ];
  }
  const { getBankSoalSets: getNonPteBankSoalSets } = await import('./nonPte');
  return getNonPteBankSoalSets(code);
}
