import type { ReactNode } from 'react';
import { Table2 } from 'lucide-react';

/** The same title hierarchy for desktop tables, phone cards and nested tables. */
export default function TableHeading({ title, flat = false, hint }: { title: string; flat?: boolean; hint?: ReactNode }) {
  return (
    <div className={`course-table-heading${flat ? ' course-table-heading--flat' : ''}`}>
      <Table2 className="course-table-heading-icon" size={18} aria-hidden="true" />
      <div className="min-w-0">
        <div className="course-table-eyebrow">Tabel</div>
        <div className="course-table-title">{title}</div>
      </div>
      {hint && <div className="course-table-hint">{hint}</div>}
    </div>
  );
}
