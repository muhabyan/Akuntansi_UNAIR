// In-page links (Daftar Isi, the skip link, "#" links in the materi) scroll to their target without a history entry.
// A fragment navigation fires popstate, which App and CourseLayout read as Back, so it closed the open reading.
// How far below the header the target lands is set in CSS: html scroll-padding-top plus the target's scroll-margin-top.
export function handleInPageAnchorClick(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
  if (!link || (link.target && link.target !== '_self')) return;

  let id: string;
  try {
    id = decodeURIComponent(link.getAttribute('href')!.slice(1));
  } catch {
    return;
  }
  const target = id ? link.ownerDocument.getElementById(id) : null;
  if (!target) return;

  event.preventDefault();
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
  // Like a fragment link, move keyboard focus only to a target that can take it (e.g. <main tabindex="-1">).
  if (target.hasAttribute('tabindex') || target.tabIndex >= 0) target.focus({ preventScroll: true });
}

export function installInPageAnchorHandler(doc: Document = document) {
  doc.addEventListener('click', handleInPageAnchorClick);
  return () => doc.removeEventListener('click', handleInPageAnchorClick);
}
