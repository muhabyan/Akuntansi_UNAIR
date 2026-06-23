import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, CheckCircle2, Eye, RotateCcw, XCircle } from 'lucide-react';
import {
  getPteOptionSemanticStatus,
  isPteMatchingCorrect,
  isPteNumericCorrect,
  isPteOrderingCorrect,
  orderedArraysEqual,
} from './pteBankBehavior';
import type {
  PteBankGraphQuestion,
  PteBankMatchingQuestion,
  PteBankNumericQuestion,
  PteBankOrderingQuestion,
  PteBankQuestion,
} from '../data/banksoal/ekt109Bank';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function kindLabel(question: PteBankQuestion): string {
  const labels: Record<PteBankQuestion['kind'], string> = {
    'single-choice': 'Pilihan tunggal',
    'true-false': 'Benar / Salah',
    'multi-select': 'Pilih banyak',
    matching: 'Pencocokan',
    ordering: 'Urutan proses',
    numeric: 'Isian angka',
    graph: 'Interpretasi grafik',
    'short-answer': 'Review terpandu',
  };
  return labels[question.kind];
}

export function GraphPanel({ question }: { question: PteBankGraphQuestion }) {
  return (
    <div data-testid="pte-graph-panel" className="rounded-2xl border border-sky-400/20 bg-slate-950/55 p-3 md:p-4">
      <div
        data-testid="pte-graph-svg-host"
        className="mx-auto max-w-2xl overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: question.svg }}
      />
    </div>
  );
}

function Feedback({ checked, correct, explanation }: { checked: boolean; correct: boolean; explanation: string }) {
  if (!checked) return null;
  return (
    <div
      className={`rounded-2xl border p-4 text-sm leading-7 ${correct ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-100' : 'border-rose-400/30 bg-rose-400/10 text-rose-100'}`}
      role="status"
      aria-live="polite"
    >
      <p className="mb-1 flex items-center gap-2 font-black">
        {correct ? <CheckCircle2 size={17} /> : <XCircle size={17} />}
        {correct ? 'Jawaban tepat' : 'Jawaban belum tepat'}
      </p>
      <p className="text-slate-300">{explanation}</p>
    </div>
  );
}

function MatchingWorkspace({ question, onResult }: { question: PteBankMatchingQuestion; onResult: (checked: boolean, correct: boolean) => void }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const correct = isPteMatchingCorrect(question, answers);
  const check = () => { setChecked(true); onResult(true, correct); };
  return (
    <div className="space-y-3">
      {question.pairs.map((pair) => (
        <label key={pair.prompt} className="grid gap-2 rounded-2xl border border-navy-600 bg-navy-950/35 p-3 text-sm md:grid-cols-[1fr_1fr] md:items-center">
          <span className="font-semibold text-slate-200">{pair.prompt}</span>
          <select
            value={answers[pair.prompt] ?? ''}
            onChange={(event) => { setAnswers((prev) => ({ ...prev, [pair.prompt]: event.target.value })); setChecked(false); onResult(false, false); }}
            className="rounded-xl border border-navy-500 bg-navy-900 px-3 py-2 text-slate-100 outline-none focus:border-gold"
          >
            <option value="">Pilih pasangan...</option>
            {question.choices.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
          </select>
        </label>
      ))}
      <button type="button" onClick={check} className="rounded-xl bg-gold px-4 py-2 text-sm font-black text-navy-950">Periksa pencocokan</button>
      <Feedback checked={checked} correct={correct} explanation={question.explanation} />
    </div>
  );
}

function OrderingWorkspace({ question, onResult }: { question: PteBankOrderingQuestion; onResult: (checked: boolean, correct: boolean) => void }) {
  const [order, setOrder] = useState(question.items);
  const [checked, setChecked] = useState(false);
  const correct = isPteOrderingCorrect(question, order);
  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= order.length) return;
    setOrder((current) => {
      const next = [...current];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
    setChecked(false);
    onResult(false, false);
  };
  return (
    <div className="space-y-3">
      <ol className="space-y-2">
        {order.map((item, index) => (
          <li key={item} className="flex items-center gap-3 rounded-2xl border border-navy-600 bg-navy-950/35 p-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-sm font-black text-gold">{index + 1}</span>
            <span className="min-w-0 flex-1 text-sm text-slate-200">{item}</span>
            <button type="button" onClick={() => move(index, -1)} disabled={index === 0} aria-label={`Naikkan ${item}`} className="rounded-lg border border-navy-500 p-2 text-slate-300 disabled:opacity-30"><ArrowUp size={15} /></button>
            <button type="button" onClick={() => move(index, 1)} disabled={index === order.length - 1} aria-label={`Turunkan ${item}`} className="rounded-lg border border-navy-500 p-2 text-slate-300 disabled:opacity-30"><ArrowDown size={15} /></button>
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => { setChecked(true); onResult(true, correct); }} className="rounded-xl bg-gold px-4 py-2 text-sm font-black text-navy-950">Periksa urutan</button>
        <button type="button" onClick={() => { setOrder(question.items); setChecked(false); onResult(false, false); }} className="inline-flex items-center gap-2 rounded-xl border border-navy-500 px-4 py-2 text-sm font-bold text-slate-300"><RotateCcw size={15} /> Reset</button>
      </div>
      <Feedback checked={checked} correct={correct} explanation={question.explanation} />
    </div>
  );
}

function NumericWorkspace({ question, onResult }: { question: PteBankNumericQuestion; onResult: (checked: boolean, correct: boolean) => void }) {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const correct = isPteNumericCorrect(question, value);
  return (
    <div className="space-y-3">
      <label className="grid max-w-md gap-2 text-sm font-bold text-slate-300">
        Jawaban angka
        <div className="flex items-center rounded-2xl border border-navy-500 bg-navy-950/55 focus-within:border-gold">
          {question.answerPrefix && <span className="pl-3 text-slate-500">{question.answerPrefix}</span>}
          <input
            inputMode="decimal"
            value={value}
            onChange={(event) => { setValue(event.target.value); setChecked(false); onResult(false, false); }}
            className="min-w-0 flex-1 bg-transparent px-3 py-3 text-slate-100 outline-none"
            placeholder="Masukkan angka"
          />
          {question.answerSuffix && <span className="pr-3 text-slate-500">{question.answerSuffix}</span>}
        </div>
      </label>
      <button type="button" onClick={() => { setChecked(true); onResult(true, correct); }} className="rounded-xl bg-gold px-4 py-2 text-sm font-black text-navy-950">Periksa angka</button>
      <Feedback checked={checked} correct={correct} explanation={question.explanation} />
    </div>
  );
}

export default function PteBankQuestionCard({ question, number }: { question: PteBankQuestion; number: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [multi, setMulti] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [guidedDraft, setGuidedDraft] = useState('');

  useEffect(() => {
    setSelected(null);
    setMulti([]);
    setChecked(false);
    setCorrect(false);
    setRevealed(false);
    setGuidedDraft('');
  }, [question.id]);

  const isChoice = question.kind === 'single-choice' || question.kind === 'true-false' || question.kind === 'graph';
  const choiceCorrect = useMemo(() => isChoice && selected === question.answerIndex, [isChoice, question, selected]);
  const multiCorrect = question.kind === 'multi-select'
    && orderedArraysEqual([...multi].sort((a, b) => a - b), [...question.answerIndexes].sort((a, b) => a - b));

  const handleChoiceCheck = () => {
    const result = question.kind === 'multi-select' ? multiCorrect : choiceCorrect;
    setCorrect(result);
    setChecked(true);
  };

  return (
    <article data-testid="pte-bank-question-card" data-question-id={question.id} data-question-number={number} className="overflow-hidden rounded-[1.5rem] border border-navy-500 bg-navy-800/78 shadow-sm" aria-labelledby={`${question.id}-title`}>
      <header className="border-b border-white/5 bg-gradient-to-r from-white/[0.04] to-transparent px-4 py-4 md:px-5">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-sm font-black text-gold">{number}</span>
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-[0.12em]">
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-sky-200">TM {question.tm}</span>
              <span className="rounded-full border border-navy-500 px-2.5 py-1 text-slate-400">{kindLabel(question)}</span>
              <span className="rounded-full border border-navy-500 px-2.5 py-1 text-slate-400">{question.competency}</span>
              <span className="rounded-full border border-navy-500 px-2.5 py-1 text-slate-400">{question.difficulty}</span>
            </div>
            <h4 id={`${question.id}-title`} className="text-[15px] font-semibold leading-7 text-slate-100 md:text-base">{question.prompt}</h4>
            <p className="mt-1 text-xs text-slate-500">{question.sourceRef}</p>
          </div>
        </div>
      </header>

      <div className="space-y-4 p-4 md:p-5">
        {question.kind === 'graph' && <GraphPanel question={question} />}

        {(isChoice || question.kind === 'multi-select') && (
          <fieldset className="grid gap-2.5">
            <legend className="sr-only">Pilihan jawaban</legend>
            {question.options.map((option, index) => {
              const active = question.kind === 'multi-select' ? multi.includes(index) : selected === index;
              const answerIsCorrect = question.kind === 'multi-select'
                ? question.answerIndexes.includes(index)
                : question.answerIndex === index;
              const semanticStatus = getPteOptionSemanticStatus(checked, active, answerIsCorrect);
              const correctOption = semanticStatus === 'correct';
              const wrongOption = semanticStatus === 'incorrect-selected';
              return (
                <label key={`${question.id}-${index}`} className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-3 text-sm leading-6 transition ${correctOption ? 'border-emerald-400/40 bg-emerald-400/10' : wrongOption ? 'border-rose-400/40 bg-rose-400/10' : active ? 'border-gold/50 bg-gold/10' : 'border-navy-600 bg-navy-950/35 hover:border-navy-400'}`}>
                  <input
                    type={question.kind === 'multi-select' ? 'checkbox' : 'radio'}
                    name={question.id}
                    checked={active}
                    onChange={() => {
                      if (question.kind === 'multi-select') {
                        setMulti((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
                      } else {
                        setSelected(index);
                      }
                      setChecked(false);
                    }}
                    aria-invalid={wrongOption || undefined}
                    className="mt-1 accent-amber-400"
                  />
                  <span className="font-black text-gold">{LETTERS[index]}.</span>
                  <span className="text-slate-200">{option}</span>
                  {semanticStatus === 'correct' && <span className="sr-only">Jawaban benar.</span>}
                  {semanticStatus === 'incorrect-selected' && <span className="sr-only">Pilihan ini salah.</span>}
                </label>
              );
            })}
          </fieldset>
        )}

        {(isChoice || question.kind === 'multi-select') && (
          <>
            <button type="button" onClick={handleChoiceCheck} disabled={question.kind === 'multi-select' ? multi.length === 0 : selected === null} className="rounded-xl bg-gold px-4 py-2 text-sm font-black text-navy-950 disabled:cursor-not-allowed disabled:opacity-40">Periksa jawaban</button>
            <Feedback checked={checked} correct={correct} explanation={question.explanation} />
          </>
        )}

        {question.kind === 'matching' && <MatchingWorkspace question={question} onResult={(nextChecked, nextCorrect) => { setChecked(nextChecked); setCorrect(nextCorrect); }} />}
        {question.kind === 'ordering' && <OrderingWorkspace question={question} onResult={(nextChecked, nextCorrect) => { setChecked(nextChecked); setCorrect(nextCorrect); }} />}
        {question.kind === 'numeric' && <NumericWorkspace question={question} onResult={(nextChecked, nextCorrect) => { setChecked(nextChecked); setCorrect(nextCorrect); }} />}

        {question.kind === 'short-answer' && (
          <div className="space-y-3">
            <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4 text-sm leading-7 text-slate-300">
              <p className="font-black text-sky-200">Review terpandu, tidak dinilai otomatis</p>
              <p className="mt-1">Tulis jawaban ringkas, lalu bandingkan dengan panduan. Soal ini tidak masuk perhitungan skor dan tidak boleh digunakan dalam simulator.</p>
            </div>
            <label className="grid gap-2 text-sm font-bold text-slate-300" htmlFor={`${question.id}-guided-draft`}>
              Jawaban latihan
              <textarea
                id={`${question.id}-guided-draft`}
                data-testid="pte-guided-review-draft"
                value={guidedDraft}
                onChange={(event) => { setGuidedDraft(event.target.value); setRevealed(false); }}
                rows={5}
                placeholder="Tuliskan mekanisme, rumus, atau argumen utama..."
                className="w-full resize-y rounded-2xl border border-navy-500 bg-navy-950/55 px-3 py-3 font-normal leading-7 text-slate-100 outline-none focus:border-gold"
              />
            </label>
            <button
              type="button"
              data-testid="pte-guided-review-toggle"
              onClick={() => setRevealed((current) => !current)}
              aria-expanded={revealed}
              disabled={!guidedDraft.trim()}
              className="inline-flex items-center gap-2 rounded-xl border border-gold/35 bg-gold/10 px-4 py-2 text-sm font-black text-gold disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Eye size={16} /> {revealed ? 'Tutup panduan' : 'Bandingkan dengan panduan'}
            </button>
            {revealed && (
              <div data-testid="pte-guided-review-guide" className="rounded-2xl border border-gold/25 bg-gold/10 p-4 text-sm leading-7 text-slate-300" role="status" aria-live="polite">
                <p className="mb-1 font-black text-gold">Panduan jawaban</p>
                <p>{question.answerGuide}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
