// =============================================================
// src/components/StatementBuilder.tsx
// Render laporan penuh dan laporan isian interaktif.
// UI/UX Batch 8: format laporan dibuat seperti worksheet akuntansi,
// tanpa mengubah struktur akademik, angka, atau kunci jawaban.
// =============================================================
import { useMemo, useState, type CSSProperties } from 'react';
import { Check, RotateCcw, Eye, ClipboardCheck, FileSpreadsheet, PenLine, BadgeCheck } from 'lucide-react';
import type { StatementSpec, StatementLine } from '../types';

function fmt(n: number | undefined, bracket?: boolean): string {
  if (n === undefined || Number.isNaN(n)) return '';
  const abs = Math.abs(n).toLocaleString('id-ID', { maximumFractionDigits: 2 });
  if (bracket || n < 0) return `(${abs})`;
  return abs;
}

function parseNum(raw: string): number | undefined {
  if (raw == null) return undefined;
  const cleaned = raw.replace(/[^\d,.-]/g, '').replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.');
  if (cleaned === '' || cleaned === '-' || cleaned === '.' || cleaned === '-.') return undefined;
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function Header({ spec, compact = false }: { spec: StatementSpec; compact?: boolean }) {
  return (
    <div className={`report-document-header text-center ${compact ? 'mb-4' : 'mb-5'} leading-tight`}>
      <div className="text-sm font-black uppercase tracking-[0.14em] text-slate-100">{spec.entity}</div>
      <div className="mt-1 font-display text-lg font-black text-gold md:text-xl">
        {spec.title}{' '}
        {spec.partial && <span className="font-semibold text-slate-400">{spec.partial}</span>}
      </div>
      <div className="mt-1 text-xs font-semibold text-slate-500">{spec.period}</div>
      {spec.currency && <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">dalam {spec.currency}</div>}
    </div>
  );
}

function ruleClass(rule?: StatementLine['rule']): string {
  if (rule === 'top') return 'report-rule-top';
  if (rule === 'double') return 'report-rule-double';
  return '';
}

function pad(indent?: number): CSSProperties {
  return { paddingLeft: `${(indent ?? 0) * 18 + 6}px` };
}

function rowClass(line: StatementLine, isComputed = false): string {
  if (line.kind === 'header') return 'report-row report-row-header';
  if (line.bold || isComputed) return 'report-row report-row-strong';
  return 'report-row';
}

function inputStatusClass(ok: boolean | undefined, bad: boolean | undefined): string {
  if (ok) return 'is-correct';
  if (bad) return 'is-wrong';
  return '';
}

export function StatementFull({ spec }: { spec: StatementSpec }) {
  const dataRows = spec.lines.filter((line) => line.kind !== 'header').length;

  return (
    <div className="report-statement-card mb-8 overflow-hidden rounded-[1.8rem] border shadow-sm">
      <div className="report-card-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-5">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-gold">
          <FileSpreadsheet size={16} /> Format Laporan
        </div>
        <div className="rounded-full border border-navy-500/70 bg-navy-900/40 px-3 py-1 text-[11px] font-bold text-slate-500">
          {dataRows} baris laporan
        </div>
      </div>

      <div className="akbi-table-scroll overflow-x-auto p-4 md:p-6">
        <div className="report-paper mx-auto min-w-[680px] max-w-[920px] rounded-[1.45rem] border p-5 shadow-sm md:p-7">
          <Header spec={spec} />
          <table className="report-table w-full text-sm">
            <tbody>
              {spec.lines.map((line, index) => {
                const isHeader = line.kind === 'header';
                return (
                  <tr key={index} className={rowClass(line)}>
                    <td className="report-label py-2.5 pr-4" style={pad(line.indent)}>
                      {isHeader ? <span>{line.label}</span> : line.label}
                    </td>
                    <td className={`report-amount py-2.5 text-right font-mono tabular-nums ${ruleClass(line.rule)}`}>
                      {isHeader ? '' : fmt(line.amount, line.bracket)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function StatementBuilder({ spec, instructions }: { spec: StatementSpec; instructions?: string }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const resolved = useMemo(() => {
    const map: Record<string, number | undefined> = {};
    for (const line of spec.lines) {
      if (!line.id) continue;
      if (line.kind === 'input') {
        map[line.id] = parseNum(values[line.id] ?? '');
      } else if (line.kind === 'given') {
        map[line.id] = line.amount;
      } else if (line.kind === 'computed') {
        let sum = 0;
        let any = false;
        for (const ref of line.compute ?? []) {
          const value = map[ref.id];
          if (value !== undefined) {
            sum += (ref.sign ?? 1) * value;
            any = true;
          }
        }
        map[line.id] = any ? sum : undefined;
      }
    }
    return map;
  }, [spec.lines, values]);

  const inputLines = spec.lines.filter((line) => line.kind === 'input');
  const filledCount = inputLines.filter((line) => line.id && values[line.id] !== undefined && values[line.id] !== '').length;
  const correctCount = inputLines.filter((line) => line.id && line.amount !== undefined && resolved[line.id] !== undefined && Math.abs((resolved[line.id] ?? 0) - line.amount) <= 0.01).length;
  const complete = inputLines.length > 0 && correctCount === inputLines.length;

  const setVal = (id: string, value: string) => {
    setValues((previous) => ({ ...previous, [id]: value }));
    setChecked(false);
  };

  const showKey = () => {
    const next: Record<string, string> = {};
    for (const line of spec.lines) {
      if (line.kind === 'input' && line.id && line.amount !== undefined) next[line.id] = String(line.amount);
    }
    setValues(next);
    setChecked(true);
  };

  const reset = () => {
    setValues({});
    setChecked(false);
  };

  return (
    <div className="report-statement-card report-builder-card mb-8 overflow-hidden rounded-[1.8rem] border shadow-sm">
      <div className="report-card-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-5">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-gold">
          <ClipboardCheck size={16} /> Latihan Susun Laporan
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-navy-500/70 bg-navy-900/40 px-3 py-1 text-[11px] font-bold text-slate-500">
            {filledCount}/{inputLines.length} isian terisi
          </span>
          {checked && (
            <span className={`rounded-full border px-3 py-1 text-[11px] font-black ${complete ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' : 'border-amber-500/30 bg-amber-500/10 text-amber-300'}`}>
              {correctCount}/{inputLines.length} benar
            </span>
          )}
        </div>
      </div>

      {instructions && (
        <div className="mx-4 mt-4 rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-slate-300 md:mx-5">
          <div className="mb-1 flex items-center gap-2 font-black text-gold">
            <PenLine size={15} /> Instruksi
          </div>
          {instructions}
        </div>
      )}

      <div className="akbi-table-scroll overflow-x-auto p-4 md:p-6">
        <div className="report-paper mx-auto min-w-[720px] max-w-[960px] rounded-[1.45rem] border p-5 shadow-sm md:p-7">
          <Header spec={spec} compact />
          <table className="report-table report-builder-table w-full text-sm">
            <tbody>
              {spec.lines.map((line, index) => {
                const isHeader = line.kind === 'header';
                const isInput = line.kind === 'input';
                const isComputed = line.kind === 'computed';
                const value = line.id ? resolved[line.id] : undefined;
                const ok = checked && isInput && line.id && line.amount !== undefined && resolved[line.id] !== undefined && Math.abs((resolved[line.id] ?? 0) - line.amount) <= 0.01;
                const bad = checked && isInput && line.id && !ok;
                return (
                  <tr key={index} className={rowClass(line, isComputed)}>
                    <td className="report-label py-2.5 pr-4" style={pad(line.indent)}>
                      {isHeader ? <span>{line.label}</span> : line.label}
                    </td>
                    <td className={`report-amount py-2.5 text-right ${ruleClass(line.rule)}`}>
                      {isHeader ? '' : isInput ? (
                        <input
                          inputMode="numeric"
                          value={values[line.id ?? ''] ?? ''}
                          onChange={(event) => line.id && setVal(line.id, event.target.value)}
                          placeholder="0"
                          className={`report-input ${inputStatusClass(Boolean(ok), Boolean(bad))}`}
                        />
                      ) : (
                        <span className={`font-mono tabular-nums ${isComputed ? 'font-black' : 'font-semibold'}`}>
                          {fmt(isComputed ? value : line.amount, line.bracket)}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="report-action-bar flex flex-wrap items-center gap-2 border-t px-4 py-4 md:px-5">
        <button onClick={() => setChecked(true)} className="inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-black text-navy-950 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/50">
          <Check size={16} /> Periksa
        </button>
        <button onClick={showKey} className="inline-flex items-center gap-2 rounded-xl border border-navy-500 bg-navy-800/70 px-4 py-2.5 text-sm font-bold text-slate-300 transition hover:border-gold/50 hover:text-gold">
          <Eye size={16} /> Lihat kunci
        </button>
        <button onClick={reset} className="inline-flex items-center gap-2 rounded-xl border border-navy-500 bg-navy-800/70 px-4 py-2.5 text-sm font-bold text-slate-300 transition hover:border-gold/50 hover:text-gold">
          <RotateCcw size={16} /> Reset
        </button>
        {checked && (
          <span className={`ml-1 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-black ${complete ? 'bg-emerald-500/10 text-emerald-300' : 'bg-amber-500/10 text-amber-300'}`}>
            <BadgeCheck size={16} /> {complete ? 'Semua isian benar' : `${correctCount}/${inputLines.length} isian benar`}
          </span>
        )}
      </div>
    </div>
  );
}
