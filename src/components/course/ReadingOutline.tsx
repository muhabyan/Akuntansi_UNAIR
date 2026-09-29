import { useEffect, useRef, useState } from 'react';
import { ListTree, X } from 'lucide-react';
import type { ContentBlock } from '../../types';

export const DESKTOP_OUTLINE_STORAGE_KEY = 'akuntansihub:reading-outline-collapsed';

export interface ReadingOutlineItem {
  id: string;
  /** What to show: the heading text, with its own leading number and any markdown escapes taken off. */
  label: string;
  /**
   * The marker in front of the label, for a section (level 2) only. It is the heading's own number when it has one
   * ("12\. Peta Konsep" -> "12"), so a reading that starts at 0 or skips a number keeps its own numbering; otherwise
   * it counts the sections. Both the panel and the toolbar pill show this, so they never disagree.
   */
  badge?: string;
  level: 2 | 3;
}

/**
 * Markdown escapes belong to the rendered heading, not to a plain-text label: a heading written "13\. Contoh
 * Penerapan" (escaped so markdown renders a heading instead of a one-item ordered list) reads "13. Contoh Penerapan".
 */
export function stripMarkdownEscapes(text: string): string {
  return text.replace(/\\([\\`*_{}[\]()#+\-.!])/g, '$1');
}

/** A heading's own number, e.g. "0", "12"; the dot may be backslash-escaped in the source. */
const HEADING_NUMBER = /^(\d{1,3})\\?[.)]\s+/;

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 72) || 'bagian-materi';
}

export function getReadingBlockId(block: ContentBlock, index: number) {
  if (block.kind === 'h2') return `${slugifyHeading(block.text)}-${index + 1}`;
  if (block.kind === 'h3') return `sub-${slugifyHeading(block.text)}-${index + 1}`;
  if (block.kind === 'section' && block.title) return `section-${slugifyHeading(block.title)}-${index + 1}`;
  if (block.kind === 'solution-reveal') return `case-${slugifyHeading(block.title)}-${index + 1}`;
  return undefined;
}

/** One section entry: its own number wins over the running count, and the number is dropped from the label. */
function sectionItem(id: string, text: string, sectionCount: number): ReadingOutlineItem {
  const ownNumber = text.match(HEADING_NUMBER)?.[1];
  return {
    id,
    label: stripMarkdownEscapes(ownNumber === undefined ? text : text.replace(HEADING_NUMBER, '')),
    badge: ownNumber ?? String(sectionCount),
    level: 2,
  };
}

export function buildReadingOutline(blocks: ContentBlock[]): ReadingOutlineItem[] {
  const result: ReadingOutlineItem[] = [];
  let sectionCount = 0;
  blocks.forEach((block, index) => {
    const id = getReadingBlockId(block, index);
    if (block.kind === 'h2' && id) {
      result.push(sectionItem(id, block.text, ++sectionCount));
    } else if (block.kind === 'section' && block.title && id) {
      result.push(sectionItem(id, block.title, ++sectionCount));
    } else if (block.kind === 'h3' && id) {
      result.push({ id, label: stripMarkdownEscapes(block.text), level: 3 });
    } else if (block.kind === 'solution-reveal' && id) {
      const title = stripMarkdownEscapes(block.title);
      result.push({ id, label: title.length > 55 ? title.slice(0, 52) + '…' : title, level: 3 });
    }
  });
  return result;
}

/** The one line that names a section: what the panel entry and the toolbar pill both read. */
export function readingOutlineLabel(item: ReadingOutlineItem): string {
  return item.badge ? `${outlineBadge(item.badge)} · ${item.label}` : item.label;
}

/** Two digits so the badges line up in the panel's monospace column; a longer number is left alone. */
function outlineBadge(badge: string): string {
  return badge.length < 2 ? badge.padStart(2, '0') : badge;
}

function OutlineLinks({ items, activeId, onNavigate }: { items: ReadingOutlineItem[]; activeId?: string; onNavigate?: () => void }) {
  return (
    <nav className="reading-outline-nav" aria-label="Daftar isi bacaan">
      <ol className="space-y-0.5">
        {items.map((item) => {
          const isH2 = item.level === 2;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onNavigate}
                aria-current={activeId === item.id ? 'location' : undefined}
                className={`group flex min-h-9 items-start gap-2 rounded-lg border-l-2 py-1.5 text-sm leading-snug transition-colors ${
                  isH2 ? 'px-2.5 font-medium' : 'pl-6 pr-2 text-[13px]'
                } ${
                  activeId === item.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 font-semibold'
                    : 'border-transparent text-gray-600 hover:bg-blue-50/70 hover:text-blue-700 dark:text-gray-400 dark:hover:bg-blue-950/30 dark:hover:text-blue-300'
                }`}
              >
                {isH2 && item.badge ? (
                  <span className="mt-0.5 shrink-0 font-mono text-[10px] font-bold text-blue-500 dark:text-blue-400" aria-hidden="true">
                    {outlineBadge(item.badge)}
                  </span>
                ) : (
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300 group-hover:bg-blue-400 dark:bg-gray-600 dark:group-hover:bg-blue-400" aria-hidden="true" />
                )}
                <span className="line-clamp-2 leading-tight">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function useReadingOutlineActive(items: ReadingOutlineItem[], enabled = true) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    setActiveId(items[0]?.id);
    if (!enabled || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      const visibleHeading = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visibleHeading?.target.id) setActiveId(visibleHeading.target.id);
    }, { rootMargin: '-96px 0px -65% 0px', threshold: [0, 1] });

    items.forEach((item) => {
      const heading = document.getElementById(item.id);
      if (heading) observer.observe(heading);
    });
    return () => observer.disconnect();
  }, [enabled, items]);

  return activeId;
}

interface ReadingOutlineProps {
  items: ReadingOutlineItem[];
  variant: 'mobile' | 'desktop';
  activeId?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function ReadingOutline({ items, variant, activeId: controlledActiveId, isOpen, onOpenChange }: ReadingOutlineProps) {
  const internalActiveId = useReadingOutlineActive(items, controlledActiveId === undefined);
  const activeId = controlledActiveId ?? internalActiveId;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (variant !== 'mobile' || !isOpen) return;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange?.(false);
        return;
      }
      if (event.key !== 'Tab') return;

      const dialog = closeButtonRef.current?.closest('[data-reading-outline-menu]');
      const focusable = Array.from(dialog?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onOpenChange, variant]);

  if (items.length === 0) return null;

  if (variant === 'mobile') {
    if (isOpen !== undefined) {
      if (!isOpen) return null;
      return (
        <div
          className="reading-outline-sheet fixed inset-0 z-[115] flex items-end justify-center bg-slate-950/30 px-2 pt-16 backdrop-blur-[1px] lg:hidden"
          role="presentation"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) onOpenChange?.(false);
          }}
        >
          <section
            id="reading-outline-mobile-dialog"
            data-reading-outline-menu
            aria-hidden={false}
            role="dialog"
            aria-modal="true"
            aria-labelledby="reading-outline-mobile-title"
            className="flex max-h-[min(72dvh,38rem)] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-b-0 border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="flex min-h-14 shrink-0 items-center justify-between gap-3 border-b border-gray-200 px-4 dark:border-gray-700">
              <div>
                <h2 id="reading-outline-mobile-title" className="text-sm font-bold text-gray-900 dark:text-white">Daftar Isi</h2>
                <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400">{items.length} bagian materi</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Tutup daftar isi"
                onClick={() => onOpenChange?.(false)}
                className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <X size={19} />
              </button>
            </div>
            <div className="min-h-0 overflow-y-auto overscroll-contain p-2 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
              <OutlineLinks items={items} activeId={activeId} onNavigate={() => onOpenChange?.(false)} />
            </div>
          </section>
        </div>
      );
    }

    return (
      <details className="reading-outline mb-6 rounded-xl border border-gray-200 bg-white/70 dark:border-gray-700 dark:bg-gray-900/55 lg:hidden">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-2.5 text-sm font-bold text-gray-800 dark:text-gray-200">
          <span className="flex items-center gap-2"><ListTree size={17} className="text-blue-500" /> Daftar isi</span>
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{items.length} bagian</span>
        </summary>
        <div className="border-t border-gray-200 p-2 dark:border-gray-700"><OutlineLinks items={items} activeId={activeId} /></div>
      </details>
    );
  }

  if (isOpen === false) return null;

  return (
    <aside
      id="reading-outline-desktop-panel"
      className="reading-outline reading-outline--desktop sticky top-[calc(var(--site-header-h)+1.625rem)] hidden max-h-[calc(100dvh-var(--site-header-h)-2.625rem)] self-start overflow-y-auto border-l border-gray-200 pl-4 pr-1 dark:border-gray-800 lg:block"
      aria-label="Daftar isi bacaan"
    >
      <div className="mb-3 flex min-h-11 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
        <ListTree size={15} className="text-blue-500" /> Daftar isi
      </div>
      <OutlineLinks items={items} activeId={activeId} />
    </aside>
  );
}
