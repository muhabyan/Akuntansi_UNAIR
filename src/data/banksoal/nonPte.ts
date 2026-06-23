// Registry bank soal non-PTE. Data EKT109 dimuat lewat lazy branch terpisah.
import type { BankSoal } from '../../types';
import { AKK201_BANK, AKK201_BANK_UTS, AKK201_BANK_UAS } from './akk201';
import { AKM201_BANK, AKM201_BANK_UTS, AKM201_BANK_UAS, AKM201_BANK_BATCH3_JOB_ORDER, AKM201_BANK_BATCH4_PROCESS_COSTING, AKM201_BANK_BATCH5_QUALITY_LOSS, AKM201_BANK_BATCH6_JOINT_COST, AKM201_BANK_BATCH7_MATERIALS, AKM201_BANK_BATCH8_LABOR, AKM201_BANK_BATCH9_OVERHEAD, AKM201_BANK_BATCH10_DEPARTMENTALIZATION, AKM201_BANK_BATCH11_ABC } from './akm201';
import { MNU101_BANK } from './mnu101';
import { AKA103_BANK } from './aka103';
import { MAS122_BANK } from './mas122';
import { PJK201_BANK, PJK201_BANK_UAS } from './pjk201';

const REGISTRY: Record<string, BankSoal[]> = {
  AKK201: AKK201_BANK, AKM201: AKM201_BANK,
  MNU101: MNU101_BANK, AKA103: AKA103_BANK, MAS122: MAS122_BANK, PJK201: PJK201_BANK,
};
export function getBankSoal(code: string): BankSoal[] { return REGISTRY[code] ?? []; }
export function hasBankSoal(code: string): boolean { return (REGISTRY[code]?.length ?? 0) > 0; }


export function getBankSoalSets(code: string): { id: string; label: string; items: BankSoal[] }[] {
  if (code === 'AKK201') {
    return [
      { id: 'uts', label: 'Bank Soal Praktik UTS AKM I (TM 1-7)', items: AKK201_BANK_UTS },
      { id: 'uas', label: 'Bank Soal Praktik UAS AKM I (TM 8-14)', items: AKK201_BANK_UAS },
    ];
  }
  if (code === 'AKM201') {
    return [
      { id: 'uts', label: 'Bank Soal Esai Praktik UTS (TM 1-7)', items: [...AKM201_BANK_BATCH5_QUALITY_LOSS, ...AKM201_BANK_BATCH4_PROCESS_COSTING, ...AKM201_BANK_BATCH3_JOB_ORDER, ...AKM201_BANK_UTS] },
      { id: 'uas', label: 'Bank Soal Esai Praktik UAS (TM 8-14)', items: [...AKM201_BANK_BATCH11_ABC, ...AKM201_BANK_BATCH10_DEPARTMENTALIZATION, ...AKM201_BANK_BATCH9_OVERHEAD, ...AKM201_BANK_BATCH8_LABOR, ...AKM201_BANK_BATCH7_MATERIALS, ...AKM201_BANK_BATCH6_JOINT_COST, ...AKM201_BANK_UAS] },
    ];
  }
  if (code === 'PJK201') {
    return [
      { id: 'uas-generated', label: 'Bank Soal UAS Perpajakan I (TM 8-14) — Generated from Source', items: PJK201_BANK_UAS },
    ];
  }
  const items = getBankSoal(code);
  return items.length ? [{ id: 'all', label: 'Bank Soal Esai & Kasus', items }] : [];
}
