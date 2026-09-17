import { useEffect, useRef, useState } from 'react';
import { ListTree, X } from 'lucide-react';
import type { ContentBlock } from '../../types';

export const DESKTOP_OUTLINE_STORAGE_KEY = 'akuntansihub:reading-outline-collapsed';

export interface ReadingOutlineItem {
  id: string;
  label: string;
}

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 72) || 'bagian-materi';
}

export function getReadingBlockId(block: ContentBlock, index: number) {
  return block.kind === 'h2' ? `${slugifyHeading(block.text)}-${index + 1}` : undefined;
}

export function buildReadingOutline(blocks: ContentBlock[]): ReadingOutlineItem[] {
  return blocks.flatMap((block, index) => {
    const id = getReadingBlockId(block, index);
    return block.kind === 'h2' && id ? [{ id, label: block.text }] : [];
  });
}

function OutlineLinks({ items, activeId, onNavigate }: { items: ReadingOutlineItem[]; activeId?: string; onNavigate?: () => void }) {
  return (
    <nav className="reading-outline-nav" aria-label="Daftar isi bacaan">
      <ol className="space-y-1">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={activeId === item.id ? 'location' : undefined}
              className={`group flex min-h-11 items-start gap-2.5 rounded-lg border-l-2 px-2.5 py-2 text-sm leading-5 transition-colors ${
                activeId === item.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/35 dark:text-blue-300'
                  : 'border-transparent text-gray-600 hover:bg-blue-50 hover:text-blue-700 dark:text-gray-400 dark:hover:bg-blue-950/35 dark:hover:text-blue-300'
              }`}
            >
              <span className="mt-0.5 shrink-0 font-mono text-[10px] font-bold text-blue-500/70" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
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
      className="reading-outline reading-outline--desktop sticky top-24 hidden max-h-[calc(100dvh-7rem)] self-start overflow-y-auto border-l border-gray-200 pl-4 pr-1 dark:border-gray-800 lg:block"
      aria-label="Daftar isi bacaan"
    >
      <div className="mb-3 flex min-h-11 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
        <ListTree size={15} className="text-blue-500" /> Daftar isi
      </div>
      <OutlineLinks items={items} activeId={activeId} />
    </aside>
  );
}
