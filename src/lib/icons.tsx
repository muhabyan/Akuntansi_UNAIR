// =============================================================
// src/lib/icons.tsx — Pemetaan IconKey (string) -> komponen lucide
// Memisahkan JSX dari file data, sehingga courseData.ts tetap data murni.
// =============================================================
import {
  Calculator,
  BookOpen,
  LineChart,
  FileText,
  Award,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';
import type { IconKey } from '../types';

const ICONS: Record<IconKey, LucideIcon> = {
  calculator: Calculator,
  book: BookOpen,
  chart: LineChart,
  file: FileText,
  award: Award,
  briefcase: Briefcase,
};

interface CourseIconProps {
  iconKey: IconKey;
  size?: number;
  className?: string;
}

export function CourseIcon({ iconKey, size = 18, className }: CourseIconProps) {
  const Icon = ICONS[iconKey] ?? BookOpen;
  return <Icon size={size} className={className} />;
}
