import { Fragment, useState } from 'react';
import type { ReactNode } from 'react';
import { Check, Eye, RotateCcw, Link2, FileText, Columns3, Table2, X, Info } from 'lucide-react';
import type {
  InteractiveMatchSpec,
  JournalBuilderSpec,
  TableFillSpec,
  TAccountBuilderSpec,
  TAccountSide,
} from '../types';

function parseAmount(raw: string): number | undefined {
  if (raw == null) return undefined;
  const rawText = String(raw).trim();
  let cleaned = rawText.replace(/[^0-9,.-]/g, '');

  if (!cleaned || cleaned === '-' || cleaned === '.' || cleaned === ',' || cleaned === '-.' || cleaned === '-,') return undefined;

  const negative = cleaned.startsWith('-') || (/^\(.*\)$/.test(rawText) && /\d/.test(rawText));
  cleaned = cleaned.replace(/-/g, '');

  const lastDot = cleaned.lastIndexOf('.');
  const lastComma = cleaned.lastIndexOf(',');

  if (lastDot >= 0 && lastComma >= 0) {
    // Support both 1.234,56 and 1,234.56. The right-most separator is treated as decimal.
    if (lastComma > lastDot) cleaned = cleaned.replace(/\./g, '').replace(',', '.');
    else cleaned = cleaned.replace(/,/g, '');
  } else if (lastComma >= 0) {
    const parts = cleaned.split(',');
    const isThousands = parts.length > 1 && parts.slice(1).every((part) => part.length === 3);
    cleaned = isThousands ? parts.join('') : cleaned.replace(',', '.');
  } else if (lastDot >= 0) {
    const parts = cleaned.split('.');
    const isThousands = parts.length > 1 && parts.slice(1).every((part) => part.length === 3);
    cleaned = isThousands ? parts.join('') : cleaned;
  }

  const parsed = Number(`${negative ? '-' : ''}${cleaned}`);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function formatAmount(value?: number | string, prefix = 'Rp'): string {
  if (value === undefined || value === '') return '';
  if (typeof value === 'string') return value;
  const formatted = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(value);
  return prefix ? `${prefix} ${formatted}` : formatted;
}

function isAmountCorrect(actualRaw: string | undefined, answer?: number, tolerance = 0): boolean {
  const actual = parseAmount(actualRaw ?? '');
  if (answer === undefined) return actual === undefined || actual === 0;
  if (actual === undefined) return false;
  return Math.abs(actual - answer) <= tolerance;
}

function normalizeText(value: string | undefined): string {
  return (value ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function parsePercent(raw: string | undefined): number | undefined {
  const value = parseAmount(raw ?? '');
  if (value === undefined) return undefined;
  const hasPercentSign = String(raw ?? '').includes('%');
  if (hasPercentSign) return value;
  if (Math.abs(value) <= 1) return value * 100;
  return value;
}

function isTextAnswerCorrect(actualRaw: string | undefined, answer?: string | number, answerType?: 'percent' | 'text' | 'number', tolerance = 0): boolean {
  if (answer === undefined) return normalizeText(actualRaw) === '';
  if (answerType === 'number' || typeof answer === 'number') return isAmountCorrect(actualRaw, Number(answer), tolerance);
  const expected = String(answer);
  const percentExpected = answerType === 'percent' || expected.includes('%');
  if (percentExpected) {
    const expectedPercent = parsePercent(expected);
    const actualPercent = parsePercent(actualRaw);
    if (expectedPercent === undefined || actualPercent === undefined) return false;
    return Math.abs(actualPercent - expectedPercent) <= (tolerance || 0.01);
  }
  return normalizeText(actualRaw) === normalizeText(expected);
}

function formatExpectedAnswer(answer: string | number | undefined, answerType?: 'percent' | 'text' | 'number', currency = 'Rp'): string {
  if (answer === undefined) return 'kosong';
  if (answerType === 'percent') {
    const pct = parsePercent(String(answer));
    if (pct === undefined) return String(answer);
    return `${new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(pct)}%`;
  }
  if (answerType === 'number' || typeof answer === 'number') return formatAmount(Number(answer), currency);
  return String(answer);
}

function fallbackCellFeedback(answerType?: 'percent' | 'text' | 'number'): string | undefined {
  if (answerType === 'percent') return 'Input persentase dapat ditulis sebagai 50%, 50, 0,5, atau 0.5. Jika masih salah, cek kembali pembilang dan penyebut tarif.';
  if (answerType === 'number') return 'Cek kembali angka dasar, satuan, dan pembulatan. Sistem menerima pemisah ribuan Indonesia maupun Inggris.';
  return undefined;
}

function DiagnosticMessage({ message, tone = 'info' }: { message?: string; tone?: 'info' | 'error' }) {
  if (!message) return null;
  const className = tone === 'error'
    ? 'border-red-500/35 bg-red-500/10 text-red-200'
    : 'border-sky-500/30 bg-sky-500/10 text-sky-100';
  return (
    <div className={`mt-2 flex gap-2 rounded-xl border px-3 py-2 text-xs leading-5 ${className}`}>
      <Info size={14} className="mt-0.5 shrink-0" />
      <span>{message}</span>
    </div>
  );
}

function cardClass(accent: 'gold' | 'emerald' | 'sky' | 'violet' = 'gold') {
  const map = {
    gold: 'border-gold/30 bg-gold/10 text-gold-700 dark:text-gold',
    emerald: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
    sky: 'border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300',
    violet: 'border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300',
  };
  return map[accent];
}

function BuilderShell({
  title,
  instruction,
  accent = 'gold',
  icon,
  children,
  footer,
}: {
  title: string;
  instruction?: string;
  accent?: 'gold' | 'emerald' | 'sky' | 'violet';
  icon: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className={`practice-builder-card mb-7 overflow-hidden rounded-[1.45rem] border shadow-sm ${cardClass(accent)}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-current/15 bg-white/[0.03] px-4 py-3 text-sm font-black md:px-5">
        <div className="flex items-center gap-2">{icon} {title}</div>
        <span className="rounded-full border border-current/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] opacity-80">Latihan aktif</span>
      </div>
      {instruction && <p className="mx-4 mt-4 rounded-2xl border border-navy-500/20 dark:border-navy-500/55 bg-slate-50 dark:bg-navy-900/40 px-4 py-3 text-sm leading-7 text-slate-700 dark:text-slate-300 md:mx-5">{instruction}</p>}
      <div className="p-4 md:p-5">{children}</div>
      {footer && <div className="border-t border-navy-500/20 dark:border-navy-500/50 bg-slate-50 dark:bg-navy-950/24 px-4 py-3 md:px-5">{footer}</div>}
    </div>
  );
}

function ActionBar({
  checked,
  correctCount,
  total,
  onCheck,
  onKey,
  onReset,
}: {
  checked: boolean;
  correctCount: number;
  total: number;
  onCheck: () => void;
  onKey: () => void;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button onClick={onCheck} className="flex items-center gap-2 rounded-xl bg-gold px-3.5 py-2 text-sm font-black text-navy-900 shadow-sm shadow-gold/15 hover:brightness-110">
        <Check size={15} /> Periksa
      </button>
      <button onClick={onKey} className="flex items-center gap-2 rounded-xl border border-navy-500/30 dark:border-navy-500 bg-white dark:bg-navy-800 px-3.5 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-gold-500 hover:text-gold-700 dark:hover:border-gold/50 dark:hover:text-gold">
        <Eye size={15} /> Lihat kunci
      </button>
      <button onClick={onReset} className="flex items-center gap-2 rounded-xl border border-navy-500/30 dark:border-navy-500 bg-white dark:bg-navy-800 px-3.5 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-gold-500 hover:text-gold-700 dark:hover:border-gold/50 dark:hover:text-gold">
        <RotateCcw size={15} /> Reset
      </button>
      {checked && (
        <span className={`ml-1 rounded-full border border-navy-500/30 dark:border-navy-500/70 bg-white dark:bg-navy-950/35 px-3 py-1 text-sm font-black ${correctCount === total ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
          {correctCount}/{total} benar{correctCount === total ? ' — tuntas.' : ''}
        </span>
      )}
    </div>
  );
}

export function InteractiveMatchBuilder({ spec }: { spec: InteractiveMatchSpec }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const total = spec.pairs.length;
  const correctCount = spec.pairs.filter((pair) => answers[pair.id] === pair.answer).length;

  const showKey = () => {
    const next: Record<string, string> = {};
    for (const pair of spec.pairs) next[pair.id] = pair.answer;
    setAnswers(next);
    setChecked(true);
  };

  return (
    <BuilderShell
      title={spec.title}
      instruction={spec.instruction}
      accent="sky"
      icon={<Link2 size={16} />}
      footer={<><ActionBar checked={checked} correctCount={correctCount} total={total} onCheck={() => setChecked(true)} onKey={showKey} onReset={() => { setAnswers({}); setChecked(false); }} />{checked && correctCount < total && <DiagnosticMessage message={spec.feedback} />}</>}
    >
      <div className="space-y-3">
        {spec.pairs.map((pair, index) => {
          const selected = answers[pair.id] ?? '';
          const correct = selected === pair.answer;
          return (
            <div key={pair.id} className="grid gap-3 rounded-2xl border border-navy-500/20 dark:border-navy-600 bg-white dark:bg-navy-900/55 p-3.5 md:grid-cols-[1fr_300px] md:items-center">
              <div className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                <span className="mr-2 font-bold text-gold">{index + 1}.</span>{pair.prompt}
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={selected}
                  onChange={(event) => { setAnswers((prev) => ({ ...prev, [pair.id]: event.target.value })); setChecked(false); }}
                  className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none ${checked ? (correct ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500/30 dark:border-navy-500 focus:border-gold-500 dark:focus:border-gold'}`}
                >
                  <option value="">Pilih jawaban</option>
                  {spec.choices.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
                </select>
                {checked && (correct ? <Check size={16} className="text-emerald-400" /> : <X size={16} className="text-red-400" />)}
              </div>
              {checked && !correct && <div className="text-xs text-red-600 dark:text-red-300 md:col-start-2">Kunci: {pair.answer}<DiagnosticMessage tone="error" message={pair.feedback} /></div>}
            </div>
          );
        })}
      </div>
    </BuilderShell>
  );
}

export function TableFillBuilder({ spec }: { spec: TableFillSpec }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const fillableCells = spec.rows.flatMap((row) => row.cells.filter((cell) => !cell.readonly && cell.answer !== undefined));
  const total = fillableCells.length;
  const correctCount = fillableCells.filter((cell) => isTextAnswerCorrect(answers[cell.id], cell.answer, cell.answerType, cell.tolerance ?? 0)).length;

  const showKey = () => {
    const next: Record<string, string> = {};
    for (const row of spec.rows) for (const cell of row.cells) {
      if (!cell.readonly && cell.answer !== undefined) next[cell.id] = String(cell.answer);
    }
    setAnswers(next);
    setChecked(true);
  };

  return (
    <BuilderShell
      title={spec.title}
      instruction={spec.instruction}
      accent="gold"
      icon={<Table2 size={16} />}
      footer={<><ActionBar checked={checked} correctCount={correctCount} total={total} onCheck={() => setChecked(true)} onKey={showKey} onReset={() => { setAnswers({}); setChecked(false); }} />{checked && correctCount < total && <DiagnosticMessage message={spec.feedback} />}</>}
    >
      <div className="akbi-table-scroll w-full overflow-x-auto rounded-2xl border border-navy-500/20 dark:border-navy-600 bg-white dark:bg-navy-950/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 dark:bg-navy-800/80 text-left text-[11px] uppercase tracking-wider text-gold-700 dark:text-gold">
              {spec.headers.map((header) => <th key={header} className="px-3 py-3">{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {spec.rows.map((row) => (
              <tr key={row.id} className="border-t border-navy-500/10 dark:border-navy-600/70">
                <td className="px-3 py-2 font-semibold text-slate-800 dark:text-slate-200">{row.label}</td>
                {row.cells.map((cell) => {
                  const correct = isTextAnswerCorrect(answers[cell.id], cell.answer, cell.answerType, cell.tolerance ?? 0);
                  return (
                    <td key={cell.id} className="px-3 py-2 align-top">
                      {cell.readonly ? (
                        <span className="font-mono text-slate-700 dark:text-slate-300">{cell.display ?? formatExpectedAnswer(cell.answer, cell.answerType, spec.currency ?? 'Rp')}</span>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <input
                            value={answers[cell.id] ?? ''}
                            onChange={(event) => { setAnswers((prev) => ({ ...prev, [cell.id]: event.target.value })); setChecked(false); }}
                            placeholder={cell.placeholder ?? 'isi'}
                            className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none ${checked ? (correct ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500/30 dark:border-navy-500 focus:border-gold-500 dark:focus:border-gold'}`}
                          />
                          {checked && !correct && cell.answer !== undefined && (
                            <span className="text-xs text-red-300">Kunci: {formatExpectedAnswer(cell.answer, cell.answerType, spec.currency ?? 'Rp')}<DiagnosticMessage tone="error" message={cell.feedback ?? fallbackCellFeedback(cell.answerType)} /></span>
                          )}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BuilderShell>
  );
}

export function JournalBuilder({ spec }: { spec: JournalBuilderSpec }) {
  const [rows, setRows] = useState<Record<string, { account?: string; debit?: string; credit?: string }>>({});
  const [checked, setChecked] = useState(false);
  const accountChoices = spec.accountChoices ?? Array.from(new Set(spec.lines.map((line) => line.account)));
  const total = spec.lines.length * 3;

  const correctCount = spec.lines.reduce((sum, line) => {
    const row = rows[line.id] ?? {};
    const accountOk = row.account === line.account;
    const debitOk = isAmountCorrect(row.debit, line.debit, line.tolerance ?? 0);
    const creditOk = isAmountCorrect(row.credit, line.credit, line.tolerance ?? 0);
    return sum + (accountOk ? 1 : 0) + (debitOk ? 1 : 0) + (creditOk ? 1 : 0);
  }, 0);

  const showKey = () => {
    const next: Record<string, { account?: string; debit?: string; credit?: string }> = {};
    for (const line of spec.lines) next[line.id] = { account: line.account, debit: line.debit !== undefined ? String(line.debit) : '', credit: line.credit !== undefined ? String(line.credit) : '' };
    setRows(next);
    setChecked(true);
  };

  const update = (id: string, key: 'account' | 'debit' | 'credit', value: string) => {
    setRows((prev) => ({ ...prev, [id]: { ...(prev[id] ?? {}), [key]: value } }));
    setChecked(false);
  };

  return (
    <BuilderShell
      title={spec.title}
      instruction={spec.instruction}
      accent="emerald"
      icon={<FileText size={16} />}
      footer={<><ActionBar checked={checked} correctCount={correctCount} total={total} onCheck={() => setChecked(true)} onKey={showKey} onReset={() => { setRows({}); setChecked(false); }} />{checked && correctCount < total && <DiagnosticMessage message={spec.feedback} />}</>}
    >
      <div className="akbi-table-scroll w-full overflow-x-auto rounded-2xl border border-emerald-500/20 bg-white dark:bg-navy-950/30">
        <table className="w-full min-w-[500px] text-sm md:min-w-full">
          <thead>
            <tr className="bg-slate-50 dark:bg-navy-800/80 text-left text-[11px] uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              <th className="px-3 py-3">No</th>
              <th className="px-3 py-3">Akun</th>
              <th className="px-3 py-3 text-right">Debit</th>
              <th className="px-3 py-3 text-right">Kredit</th>
            </tr>
          </thead>
          <tbody>
            {spec.lines.map((line, index) => {
              const row = rows[line.id] ?? {};
              const accountOk = row.account === line.account;
              const debitOk = isAmountCorrect(row.debit, line.debit, line.tolerance ?? 0);
              const creditOk = isAmountCorrect(row.credit, line.credit, line.tolerance ?? 0);
              const showGroupHeader = Boolean(line.group && line.group !== spec.lines[index - 1]?.group);
              return (
                <Fragment key={line.id}>
                  {showGroupHeader && (
                    <tr className="border-t border-emerald-500/10 dark:border-emerald-500/20 bg-emerald-500/5">
                      <td colSpan={4} className="px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">{line.group}</td>
                    </tr>
                  )}
                <tr className="border-t border-navy-500/10 dark:border-navy-600/70">
                  <td className="px-3 py-2 text-slate-800 dark:text-slate-400">{index + 1}</td>
                  <td className="px-3 py-2">
                    <select
                      value={row.account ?? ''}
                      onChange={(event) => update(line.id, 'account', event.target.value)}
                      className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none ${checked ? (accountOk ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500/30 dark:border-navy-500 focus:border-gold-500 dark:focus:border-gold'}`}
                    >
                      <option value="">Pilih akun</option>
                      {accountChoices.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
                    </select>
                    {checked && !accountOk && <div className="mt-1 text-xs text-red-600 dark:text-red-300">Kunci akun: {line.account}. Cek kembali posisi transaksi dan akun yang harus didebit/dikredit.</div>}
                  </td>
                  <td className="px-3 py-2">
                    <input
                      value={row.debit ?? ''}
                      onChange={(event) => update(line.id, 'debit', event.target.value)}
                      placeholder="0"
                      className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-3 py-2 text-right font-mono text-sm text-slate-900 dark:text-slate-100 outline-none ${checked ? (debitOk ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500/30 dark:border-navy-500 focus:border-gold-500 dark:focus:border-gold'}`}
                    />
                    {checked && !debitOk && <div className="mt-1 text-right text-xs text-red-600 dark:text-red-300">Debit seharusnya: {line.debit !== undefined ? formatAmount(line.debit, spec.currency ?? 'Rp') : 'kosong'}</div>}
                  </td>
                  <td className="px-3 py-2">
                    <input
                      value={row.credit ?? ''}
                      onChange={(event) => update(line.id, 'credit', event.target.value)}
                      placeholder="0"
                      className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-3 py-2 text-right font-mono text-sm text-slate-900 dark:text-slate-100 outline-none ${checked ? (creditOk ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500/30 dark:border-navy-500 focus:border-gold-500 dark:focus:border-gold'}`}
                    />
                    {checked && !creditOk && <div className="mt-1 text-right text-xs text-red-600 dark:text-red-300">Kredit seharusnya: {line.credit !== undefined ? formatAmount(line.credit, spec.currency ?? 'Rp') : 'kosong'}</div>}
                  </td>
                </tr>
                {checked && (!accountOk || !debitOk || !creditOk) && line.feedback && (
                  <tr className="border-t border-red-500/20">
                    <td colSpan={4} className="px-3 py-2"><DiagnosticMessage tone="error" message={line.feedback} /></td>
                  </tr>
                )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </BuilderShell>
  );
}

function sideLabel(side: TAccountSide): string {
  return side === 'debit' ? 'Debit' : 'Kredit';
}

export function TAccountBuilder({ spec }: { spec: TAccountBuilderSpec }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const entries = spec.accounts.flatMap((account) => account.rows.flatMap((row) => [
    { id: `${account.name}-${row.id}-debit`, answer: row.debitAmount },
    { id: `${account.name}-${row.id}-credit`, answer: row.creditAmount },
  ]).concat(account.endingBalance ? [{ id: `${account.name}-ending`, answer: account.endingBalance.amount }] : []));
  const total = entries.length;
  const correctCount = entries.filter((entry) => isAmountCorrect(answers[entry.id], entry.answer, spec.tolerance ?? 0)).length;

  const showKey = () => {
    const next: Record<string, string> = {};
    for (const entry of entries) next[entry.id] = entry.answer !== undefined ? String(entry.answer) : '';
    setAnswers(next);
    setChecked(true);
  };

  return (
    <BuilderShell
      title={spec.title}
      instruction={spec.instruction}
      accent="violet"
      icon={<Columns3 size={16} />}
      footer={<ActionBar checked={checked} correctCount={correctCount} total={total} onCheck={() => setChecked(true)} onKey={showKey} onReset={() => { setAnswers({}); setChecked(false); }} />}
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {spec.accounts.map((account) => (
          <div key={account.name} className="overflow-hidden rounded-2xl border border-violet-500/20 bg-white dark:bg-navy-950/30">
            <div className="border-b border-violet-500/20 bg-violet-50 dark:bg-violet-500/10 px-4 py-2 text-center text-sm font-black text-violet-700 dark:text-violet-300">{account.name}</div>
            <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-transparent">
              <div className="border-r border-navy-500/20 dark:border-navy-600 px-3 py-2">Debit</div>
              <div className="px-3 py-2">Kredit</div>
            </div>
            {account.rows.map((row) => {
              const debitId = `${account.name}-${row.id}-debit`;
              const creditId = `${account.name}-${row.id}-credit`;
              const debitOk = isAmountCorrect(answers[debitId], row.debitAmount, spec.tolerance ?? 0);
              const creditOk = isAmountCorrect(answers[creditId], row.creditAmount, spec.tolerance ?? 0);
              return (
                <div key={row.id} className="grid grid-cols-2 border-t border-navy-500/10 dark:border-navy-600/70 text-sm">
                  <div className="border-r border-navy-500/20 dark:border-navy-600 p-3">
                    <div className="mb-1 text-xs text-slate-600 dark:text-slate-400">{row.debitLabel ?? '—'}</div>
                    <input
                      value={answers[debitId] ?? ''}
                      onChange={(event) => { setAnswers((prev) => ({ ...prev, [debitId]: event.target.value })); setChecked(false); }}
                      placeholder="0"
                      className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-2 py-1.5 text-right font-mono text-slate-900 dark:text-slate-100 outline-none ${checked ? (debitOk ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500/30 dark:border-navy-500 focus:border-gold-500 dark:focus:border-gold'}`}
                    />
                    {checked && !debitOk && <div className="mt-1 text-xs text-red-600 dark:text-red-300">{row.debitAmount !== undefined ? formatAmount(row.debitAmount, spec.currency ?? 'Rp') : 'kosong'}</div>}
                  </div>
                  <div className="p-3">
                    <div className="mb-1 text-xs text-slate-600 dark:text-slate-400">{row.creditLabel ?? '—'}</div>
                    <input
                      value={answers[creditId] ?? ''}
                      onChange={(event) => { setAnswers((prev) => ({ ...prev, [creditId]: event.target.value })); setChecked(false); }}
                      placeholder="0"
                      className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-2 py-1.5 text-right font-mono text-slate-900 dark:text-slate-100 outline-none ${checked ? (creditOk ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500/30 dark:border-navy-500 focus:border-gold-500 dark:focus:border-gold'}`}
                    />
                    {checked && !creditOk && <div className="mt-1 text-xs text-red-600 dark:text-red-300">{row.creditAmount !== undefined ? formatAmount(row.creditAmount, spec.currency ?? 'Rp') : 'kosong'}</div>}
                  </div>
                </div>
              );
            })}
            {account.endingBalance && (
              <div className="border-t border-violet-500/20 bg-violet-50 dark:bg-violet-500/5 p-3 text-sm">
                <div className="mb-1 text-xs font-semibold text-violet-700 dark:text-violet-300">Saldo akhir ({sideLabel(account.endingBalance.side)})</div>
                <input
                  value={answers[`${account.name}-ending`] ?? ''}
                  onChange={(event) => { setAnswers((prev) => ({ ...prev, [`${account.name}-ending`]: event.target.value })); setChecked(false); }}
                  placeholder="0"
                  className={`w-full rounded-xl border bg-white dark:bg-navy-950 px-2 py-1.5 text-right font-mono text-slate-900 dark:text-slate-100 outline-none ${checked ? (isAmountCorrect(answers[`${account.name}-ending`], account.endingBalance.amount, spec.tolerance ?? 0) ? 'border-emerald-500' : 'border-red-500') : 'border-navy-500/30 dark:border-navy-500 focus:border-gold-500 dark:focus:border-gold'}`}
                />
                {checked && !isAmountCorrect(answers[`${account.name}-ending`], account.endingBalance.amount, spec.tolerance ?? 0) && <div className="mt-1 text-xs text-red-600 dark:text-red-300">Kunci: {formatAmount(account.endingBalance.amount, spec.currency ?? 'Rp')}</div>}
              </div>
            )}
          </div>
        ))}
      </div>
    </BuilderShell>
  );
}
