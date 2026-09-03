// Registry bank soal non-PTE. Data EKT109 dimuat lewat lazy branch terpisah.
import type { BankSoal } from '../../types';
import { AKK201_BANK, AKK201_BANK_UTS, AKK201_BANK_UAS } from './akk201';
import { AKM201_BANK, AKM201_BANK_UTS, AKM201_BANK_UAS, AKM201_BANK_BATCH3_JOB_ORDER, AKM201_BANK_BATCH4_PROCESS_COSTING, AKM201_BANK_BATCH5_QUALITY_LOSS, AKM201_BANK_BATCH6_JOINT_COST, AKM201_BANK_BATCH7_MATERIALS, AKM201_BANK_BATCH8_LABOR, AKM201_BANK_BATCH9_OVERHEAD, AKM201_BANK_BATCH10_DEPARTMENTALIZATION, AKM201_BANK_BATCH11_ABC } from './akm201';
import { MNU101_BANK } from './mnu101';
import { AKA103_BANK } from './aka103';
import { MAS122_BANK } from './mas122';
import { PJK201_BANK, PJK201_BANK_UAS } from './pjk201';

// Semester 3
import { MNM101_BANK, MNM101_BANK_UTS, MNM101_BANK_UAS } from './mnm101';
import { AKK202_BANK, AKK202_BANK_UTS, AKK202_BANK_UAS } from './akk202';
import { AKM202_BANK, AKM202_BANK_UTS, AKM202_BANK_UAS } from './akm202';
import { AKS201_BANK, AKS201_BANK_UTS, AKS201_BANK_UAS } from './aks201';
import { PJK202_BANK, PJK202_BANK_UTS, PJK202_BANK_UAS } from './pjk202';
import { MNK201_BANK, MNK201_BANK_UTS, MNK201_BANK_UAS } from './mnk201';
import { AKA201_BANK, AKA201_BANK_UTS, AKA201_BANK_UAS } from './aka201';
import { AKS301_BANK, AKS301_BANK_UTS, AKS301_BANK_UAS } from './aks301';

const REGISTRY: Record<string, BankSoal[]> = {
  AKK201: AKK201_BANK, AKM201: AKM201_BANK,
  MNU101: MNU101_BANK, AKA103: AKA103_BANK, MAS122: MAS122_BANK, PJK201: PJK201_BANK,
  // Semester 3
  MNM101: MNM101_BANK,
  MNM201: MNM101_BANK,
  AKK202: AKK202_BANK,
  AKM202: AKM202_BANK,
  AKS201: AKS201_BANK,
  PJK202: PJK202_BANK,
  MNK201: MNK201_BANK,
  AKA201: AKA201_BANK,
  AKS301: AKS301_BANK,
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
  // Semester 3 Sets
  if (code === 'MNM101' || code === 'MNM201') {
    return [
      { id: 'uts', label: 'Bank Soal Kasus Pra-UTS Pengantar Manajemen (TM 1–7)', items: MNM101_BANK_UTS },
      { id: 'uas', label: 'Bank Soal Kasus Pra-UAS Pengantar Manajemen (TM 8–14)', items: MNM101_BANK_UAS },
      { id: 'all', label: 'Kompilasi Seluruh Kasus Pengantar Manajemen (14 TM)', items: MNM101_BANK },
    ];
  }
  if (code === 'AKK202') {
    return [
      { id: 'uts', label: 'Bank Soal Kasus Pra-UTS AKM II (TM 1–7)', items: AKK202_BANK_UTS },
      { id: 'uas', label: 'Bank Soal Kasus Pra-UAS AKM II (TM 8–14)', items: AKK202_BANK_UAS },
      { id: 'all', label: 'Kompilasi Seluruh Kasus AKM II (14 TM)', items: AKK202_BANK },
    ];
  }
  if (code === 'AKM202') {
    return [
      { id: 'uts', label: 'Bank Soal Kasus Pra-UTS Akuntansi Manajemen (TM 1–7)', items: AKM202_BANK_UTS },
      { id: 'uas', label: 'Bank Soal Kasus Pra-UAS Akuntansi Manajemen (TM 8–14)', items: AKM202_BANK_UAS },
      { id: 'all', label: 'Kompilasi Seluruh Kasus Akuntansi Manajemen (14 TM)', items: AKM202_BANK },
    ];
  }
  if (code === 'AKS201') {
    return [
      { id: 'uts', label: 'Bank Soal Kasus Pra-UTS Akuntansi Sektor Publik (TM 1–7)', items: AKS201_BANK_UTS },
      { id: 'uas', label: 'Bank Soal Kasus Pra-UAS Akuntansi Sektor Publik (TM 8–14)', items: AKS201_BANK_UAS },
      { id: 'all', label: 'Kompilasi Seluruh Kasus Sektor Publik (14 TM)', items: AKS201_BANK },
    ];
  }
  if (code === 'PJK202') {
    return [
      { id: 'uts', label: 'Bank Soal Kasus Pra-UTS Perpajakan II (TM 1–7)', items: PJK202_BANK_UTS },
      { id: 'uas', label: 'Bank Soal Kasus Pra-UAS Perpajakan II (TM 8–14)', items: PJK202_BANK_UAS },
      { id: 'all', label: 'Kompilasi Seluruh Kasus Perpajakan II (14 TM)', items: PJK202_BANK },
    ];
  }
  if (code === 'MNK201') {
    return [
      { id: 'uts', label: 'Bank Soal Kasus Pra-UTS Manajemen Keuangan (TM 1–7)', items: MNK201_BANK_UTS },
      { id: 'uas', label: 'Bank Soal Kasus Pra-UAS Manajemen Keuangan (TM 8–14)', items: MNK201_BANK_UAS },
      { id: 'all', label: 'Kompilasi Seluruh Kasus Manajemen Keuangan (14 TM)', items: MNK201_BANK },
    ];
  }
  if (code === 'AKA201') {
    return [
      { id: 'uts', label: 'Bank Soal Kasus Pra-UTS Pengauditan Berbasis Risiko I (TM 1–7)', items: AKA201_BANK_UTS },
      { id: 'uas', label: 'Bank Soal Kasus Pra-UAS Pengauditan Berbasis Risiko I (TM 8–14)', items: AKA201_BANK_UAS },
      { id: 'all', label: 'Kompilasi Seluruh Kasus Pengauditan I (14 TM)', items: AKA201_BANK },
    ];
  }
  if (code === 'AKS301') {
    return [
      { id: 'uts', label: 'Bank Soal Kasus Pra-UTS Sistem Informasi Akuntansi (TM 1–7)', items: AKS301_BANK_UTS },
      { id: 'uas', label: 'Bank Soal Kasus Pra-UAS Sistem Informasi Akuntansi (TM 8–14)', items: AKS301_BANK_UAS },
      { id: 'all', label: 'Kompilasi Seluruh Kasus SIA (14 TM)', items: AKS301_BANK },
    ];
  }
  const items = getBankSoal(code);
  return items.length ? [{ id: 'all', label: 'Bank Soal Esai & Kasus', items }] : [];
}
