// Presentation of layered readings (Reading.layout 'layered'): Fondasi and section cards, the four callout tiers,
// closed "pendalaman" blocks, write-first self checks, stacked tables on phones, source chips and the reading-time
// estimate. Every text shown here comes from the data unchanged; only the button labels and hints are written here.
import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle, ArrowUp, ChevronDown, ChevronUp, Eye, Info, Layers, Lightbulb, PencilLine } from 'lucide-react';
import type { CalloutVariant, ContentBlock } from '../../types';
import { renderText } from './MarkdownContent';

/** A paragraph that is only a source reference: `(ARENS p.3)`, *Sumber: ...*, or one opening with a bold
 *  Sumber label (**Sumber:** ..., **Sumber utama:** ...). */
export function isSourceOnly(text: string): boolean {
  const trimmed = text.trim();
  return /^`\([^`]*\)`$/.test(trimmed) || /^\*Sumber: [^*]+\*$/.test(trimmed) || /^\*\*Sumber( utama)?:\*\*/.test(trimmed);
}

/** A source reference line: small and muted, its markdown (bold, italic) kept but not coloured. */
export function SourceLine({ text }: { text: string }) {
  return (
    <div className="layered-source my-2 text-xs leading-5 text-gray-500 dark:text-gray-400 [&_p]:m-0 [&_p]:leading-5 [&_p]:text-inherit dark:[&_p]:text-inherit [&_strong]:font-semibold [&_strong]:text-inherit dark:[&_strong]:text-inherit [&_em]:text-inherit dark:[&_em]:text-inherit">
      {renderText(text)}
    </div>
  );
}

/** One body size for all layered reading text. */
export const LAYERED_BODY = 'text-base leading-[1.7] md:text-[16.5px]';

const SECTION_SURFACE: Record<'fondasi' | 'main' | 'latihan', string> = {
  fondasi: 'border-gray-200 bg-gray-50/80 dark:border-gray-700/70 dark:bg-gray-900/50',
  main: 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/70',
  latihan: 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/70',
};

export function SectionCard({ title, layer, source, children }: { title?: string; layer: 'fondasi' | 'main' | 'latihan'; source?: string; children: ReactNode }) {
  if (!title) return <div className="layered-section-plain">{children}</div>;
  return (
    <section className={`layered-section rounded-2xl border px-4 py-5 shadow-sm shadow-gray-900/[0.03] sm:px-6 md:px-8 md:py-7 ${SECTION_SURFACE[layer]}`}>
      {layer !== 'main' && (
        <div className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          {layer === 'fondasi' ? 'Fondasi' : 'Latihan'}
        </div>
      )}
      <h2 className="font-display text-xl font-bold leading-snug text-gray-900 dark:text-gray-100 md:text-2xl">{title}</h2>
      {source && <SourceLine text={source} />}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

const CALLOUT_STYLE: Partial<Record<CalloutVariant, { box: string; Icon?: typeof Info; icon?: string }>> = {
  // The leading **Intinya:** becomes a small label line; Definisi/Aturannya stay a plain quote (no tint, no label).
  gist: { box: 'rounded-r-xl border-l-4 border-gray-500 bg-gray-500/[0.07] py-3 pl-4 pr-4 text-gray-900 dark:border-gray-400 dark:bg-white/[0.05] dark:text-gray-100 [&_p>strong:first-child]:mb-0.5 [&_p>strong:first-child]:block [&_p>strong:first-child]:text-[13px] [&_p>strong:first-child]:font-semibold [&_p>strong:first-child]:text-gray-500 dark:[&_p>strong:first-child]:text-gray-400' },
  warning: { box: 'rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 dark:bg-amber-500/10', Icon: AlertTriangle, icon: 'text-amber-600 dark:text-amber-300' },
  info: { box: 'rounded-xl border border-sky-500/35 bg-sky-500/10 px-4 py-3 dark:bg-sky-500/[0.07]', Icon: Lightbulb, icon: 'text-sky-600 dark:text-sky-300' },
  note: { box: 'rounded-xl bg-gray-100 px-4 py-3 text-gray-700 dark:bg-gray-800/60 dark:text-gray-300', Icon: Info, icon: 'text-gray-500 dark:text-gray-400' },
  quote: { box: 'ml-1 border-l-2 border-gray-300 pl-4 text-gray-800 dark:border-gray-600 dark:text-gray-200' },
};

/** Tier 1 gist, tier 2 warning (Jebakan ujian), tier 3 info (Interpretasi/Perbandingan), tier 4 note; plus the plain quote. */
export function LayeredCallout({ variant, title, text }: { variant: CalloutVariant; title?: string; text: string }) {
  const style = CALLOUT_STYLE[variant] ?? CALLOUT_STYLE.note!;
  const { Icon } = style;
  return (
    <div className={`layered-callout layered-callout--${variant} max-w-[70ch] ${LAYERED_BODY} ${style.box}`}>
      {title && (
        <span className="mb-1.5 inline-block rounded-md bg-sky-600/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-sky-800 dark:bg-sky-400/10 dark:text-sky-300">
          {title}
        </span>
      )}
      <div className={Icon ? 'flex gap-2.5' : undefined}>
        {Icon && <Icon size={17} aria-hidden="true" className={`mt-1 shrink-0 ${style.icon}`} />}
        <div className="min-w-0 flex-1 [&_p]:leading-[1.7]">{renderText(text)}</div>
      </div>
    </div>
  );
}

export function PendalamanBlock({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="layered-pendalaman rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-11 w-full items-center gap-2 rounded-xl px-4 py-2.5 text-left text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50"
      >
        <Layers size={16} aria-hidden="true" className="shrink-0 text-gray-400" />
        <span className="min-w-0 flex-1">{open ? 'Tutup pendalaman' : 'Buka pendalaman'}: {title}</span>
        {open ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
      </button>
      {open && <div className="space-y-4 border-t border-dashed border-gray-300 px-4 pb-4 pt-4 dark:border-gray-700">{children}</div>}
    </div>
  );
}

const MIN_WORDS = 5;

export function SelfCheckCard({ question, signal, children }: { question: string; signal?: string; children: ReactNode }) {
  const [draft, setDraft] = useState('');
  const [tried, setTried] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const words = draft.trim().split(/\s+/).filter(Boolean).length;
  const canReveal = tried || words >= MIN_WORDS;
  return (
    <div className="layered-self-check rounded-xl border border-gray-200 p-4 dark:border-gray-700 md:p-5">
      <div className={`max-w-[70ch] text-gray-900 dark:text-gray-100 ${LAYERED_BODY}`}>{renderText(question)}</div>
      <label className="mt-3 block text-xs font-bold text-gray-600 dark:text-gray-300">
        <span className="flex items-center gap-1.5"><PencilLine size={14} aria-hidden="true" /> Tulis jawabanmu dulu</span>
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          rows={3}
          placeholder="Jawab dengan kata-katamu sendiri. Tidak disimpan."
          className="mt-1.5 block w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-normal leading-6 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
        />
      </label>
      {!revealed ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            disabled={!canReveal}
            onClick={() => setRevealed(true)}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 dark:disabled:bg-gray-800 dark:disabled:text-gray-500"
          >
            <Eye size={15} aria-hidden="true" /> Lihat contoh jawaban
          </button>
          {!canReveal && (
            <button type="button" onClick={() => setTried(true)} className="min-h-11 rounded-lg px-3 text-sm font-semibold text-gray-600 underline-offset-4 hover:underline dark:text-gray-300">
              Saya sudah mencoba
            </button>
          )}
          {!canReveal && <p className="w-full text-xs text-gray-500 dark:text-gray-400">Tulis minimal {MIN_WORDS} kata, atau tekan "Saya sudah mencoba".</p>}
        </div>
      ) : (
        <div className="mt-4 space-y-3 border-t border-gray-200 pt-4 dark:border-gray-700">
          {children}
          {signal && <LayeredCallout variant="note" text={signal} />}
        </div>
      )}
    </div>
  );
}

/** Phone view of a table: one card per row, the first cell as its title, empty cells left out; the desktop table is
 *  rendered separately. */
export function StackedTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  const isSource = (header: string) => /^sumber$/i.test(header.trim());
  return (
    <div className="layered-stacked-table space-y-3 md:hidden">
      {rows.map((row, r) => (
        <div key={r} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900/80">
          <div className={`font-semibold text-gray-900 dark:text-gray-100 ${LAYERED_BODY}`}>{renderText(row[0] ?? '')}</div>
          <dl className="mt-2 space-y-2">
            {headers.slice(1).map((header, c) =>
              !(row[c + 1] ?? '').trim() ? null : isSource(header) ? (
                <dd key={c} className="text-xs text-gray-500 dark:text-gray-400">{header}: {row[c + 1]}</dd>
              ) : (
                <div key={c}>
                  <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">{header}</dt>
                  <dd className={`text-gray-800 dark:text-gray-200 ${LAYERED_BODY}`}>{renderText(row[c + 1] ?? '')}</dd>
                </div>
              ),
            )}
          </dl>
        </div>
      ))}
    </div>
  );
}

const plainWords = (text: string) =>
  text
    .replace(/`\([^`]*\)`/g, ' ')
    .replace(/[*`#>|]/g, ' ')
    .replace(/\[[ xX]\]/g, ' ')
    .split(/\s+/)
    .filter((word) => /[\p{L}\p{N}]/u.test(word)).length;

function countWords(block: ContentBlock): number {
  switch (block.kind) {
    case 'section':
      return (block.title ? plainWords(block.title) : 0) + block.blocks.reduce((sum, nested) => sum + countWords(nested), 0);
    case 'h2': case 'h3': case 'callout':
      return plainWords(block.text);
    case 'p':
      return isSourceOnly(block.text) ? 0 : plainWords(block.text);
    case 'ul': case 'ol':
      return block.items.reduce((sum, item) => sum + plainWords(item), 0);
    case 'table': {
      const keep = block.headers.map((header) => !/^sumber$/i.test(header.trim()));
      return [block.headers, ...block.rows].reduce((sum, row) => sum + row.reduce((s, cell, c) => s + (keep[c] ? plainWords(cell) : 0), 0), 0);
    }
    default:
      return 0; // pendalaman, self-check, solution-reveal: not part of layers 2 and 3
  }
}

/** Reading time from layers 2 (Fondasi) and 3 (main sections) only, at 180 words per minute. */
export function estimateLayeredReading(blocks: ContentBlock[]) {
  const words = blocks
    .filter((block) => block.kind === 'section' && block.layer !== 'latihan')
    .reduce((sum, block) => sum + countWords(block), 0);
  return { words, minutes: Math.max(1, Math.round(words / 180)) };
}

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Only after about two screens, so it never competes with the Pintu masuk.
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 2);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  // Portal: the reading article animates with a transform, which would pin a fixed button to the article.
  // On phones it sits above the right-most floating button (that row is 44px high, 0.5rem from the bottom).
  return createPortal(
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      className="layered-back-to-top fixed bottom-[calc(3.75rem+env(safe-area-inset-bottom))] right-2 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-lg shadow-gray-900/10 backdrop-blur dark:border-gray-700 dark:bg-gray-900/95 dark:text-gray-200 md:bottom-4 md:right-4 lg:hidden"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>,
    document.body,
  );
}
