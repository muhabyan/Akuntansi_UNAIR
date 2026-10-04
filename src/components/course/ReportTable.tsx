import type { ContentBlock } from '../../types';
import { renderText } from './MarkdownContent';

/** Keep financial columns and literal source amounts together in a local scroll area. */
export default function ReportTable({ block }: { block: Extract<ContentBlock, { kind: 'table' }> }) {
  const header = block.reportHeader;
  return (
    <section className="akk203-report-table my-5 min-w-0 max-w-full rounded-xl border border-line bg-surface p-3 text-ink">
      {header && <header className="mb-4 text-center leading-relaxed">
        <p className="font-bold">{header.entity}</p>
        <p className="font-bold">{header.title}</p>
        {header.period && <p>{header.period}</p>}
        {header.unit && <p className="text-sm">{header.unit}</p>}
        {header.note && <p className="text-sm">{header.note}</p>}
      </header>}
      <p className="mb-2 text-xs text-muted sm:hidden">Geser untuk membaca seluruh kolom →</p>
      <div className="akbi-table-scroll max-w-full overflow-x-auto" role="region" aria-label={header?.title ?? block.caption ?? 'Tabel dengan total akhir'} tabIndex={0}>
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <caption className="sr-only">{header?.title ?? block.caption ?? 'Tabel dengan total akhir'}</caption>
          <thead><tr>{block.headers.map((cell, column) => <th key={column} className="border-b border-line px-3 py-3 text-left" style={{ textAlign: block.align?.[column] ?? undefined }}>{renderText(cell)}</th>)}</tr></thead>
          <tbody>{block.rows.map((row, index) => <tr key={index}>{row.map((cell, column) => <td key={column} className="border-b border-line px-3 py-3 align-top" style={{ textAlign: block.align?.[column] ?? undefined, borderBottom: block.rowRules?.some((rule) => rule.row === index && rule.columns.includes(column)) ? '3px double currentColor' : undefined }}>{renderText(cell)}</td>)}</tr>)}</tbody>
        </table>
      </div>
      {block.caption && <div className="mt-3 text-sm text-muted">{renderText(block.caption)}</div>}
    </section>
  );
}
