const escape = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
// Declarative layouts for the case readings TM10 onward. Four shapes cover every figure:
// flow (vertical chain, optional dashed return), tree (one parent over a row), hub (parent left, children stacked right),
// split (columns of chains, optional top parent and bottom merge). Labels are the exact node labels used in the diagram.
import { LAYOUTS } from './mnu307-case-layouts.mjs';
export const svgIdsPR6 = Object.keys(LAYOUTS);

function scene(spec, cfg) {
  let width = 1600, height = 1000;
  const nodes = [], edges = [], notes = [];
  const node = (label, x, y, w = 400, h = 120) => {
    const lines = []; let line = ''; const max = Math.floor((w - 45) / 15);
    for (const word of label.split(/\s+/)) { if (line.length + word.length + 1 > max && line) { lines.push(line); line = word; } else line += (line ? ' ' : '') + word; }
    if (line) lines.push(line);
    h = Math.max(h, lines.length * 38 + 45); nodes.push({ label, x, y, w, h, lines }); return nodes.length - 1;
  };
  const edge = (a, b, route = '', dashed = false) => edges.push({ a, b, route, dashed });
  const note = (text, x, y, size = 24) => notes.push({ text, x, y, size });
  const drop = (a, b, mid) => { const p = nodes[a], c = nodes[b]; const px = p.x + p.w / 2, cx = c.x + c.w / 2, y = mid ?? (p.y + p.h + (c.y - p.y - p.h) / 2); edge(a, b, 'M' + px + ' ' + (p.y + p.h) + ' V' + y + ' H' + cx + ' V' + c.y); };
  const stack = (labels, x, y, w, gap, h = 120) => { const ids = []; let cy = y; for (const label of labels) { const n = node(label, x, cy, w, h); ids.push(n); cy = nodes[n].y + nodes[n].h + gap; } return ids; };
  const textWidth = (s, size) => s.length * size * 0.55;

  if (cfg.kind === 'flow') {
    width = cfg.width ?? 1600; const w = cfg.w ?? 760, x = cfg.x ?? 300;
    const ids = stack(cfg.labels, x, 60, w, cfg.gap ?? 90, 130);
    for (let i = 0; i < ids.length - 1; i++) edge(ids[i], ids[i + 1]);
    for (const [from, to, n1, n2] of cfg.back ?? []) {
      const a = nodes[ids[from]], b = nodes[ids[to]], rx = x + w, lane = rx + 110;
      edge(ids[from], ids[to], 'M' + rx + ' ' + (a.y + a.h / 2) + ' H' + lane + ' V' + (b.y + b.h / 2) + ' H' + rx, true);
      const cx = lane + 40 + Math.max(textWidth(n1, 22), textWidth(n2 ?? '', 22)) / 2, my = (a.y + a.h / 2 + b.y + b.h / 2) / 2;
      note(n1, cx, my - 6, 22); if (n2) note(n2, cx, my + 26, 22);
    }
    for (const [i, lines] of Object.entries(cfg.side ?? {})) {
      const n = nodes[ids[Number(i)]]; const cx = n.x + n.w + 50 + Math.max(...lines.map(l => textWidth(l, 22))) / 2;
      lines.forEach((l, k) => note(l, cx, n.y + n.h / 2 + 8 + k * 30 - (lines.length - 1) * 15, 22));
    }
  } else if (cfg.kind === 'tree') {
    const kids = cfg.kids, kw = cfg.kw ?? 380, gap = cfg.gap ?? 50, total = kids.length * kw + (kids.length - 1) * gap;
    width = Math.max(total + 120, 1100); const x0 = (width - total) / 2;
    const root = node(cfg.root, (width - (cfg.rw ?? 560)) / 2, 50, cfg.rw ?? 560, 120);
    const ks = kids.map((s, i) => node(s, x0 + i * (kw + gap), 340, kw, 120));
    ks.forEach(k => drop(root, k, 255));
    const bottom = Math.max(...ks.map(k => nodes[k].y + nodes[k].h));
    (cfg.notes ?? []).forEach((pair, i) => pair.forEach((line, k) => note(line, nodes[ks[i]].x + kw / 2, bottom + 50 + k * 36, 24)));
  } else if (cfg.kind === 'hub') {
    width = cfg.width ?? 1800; const rw = cfg.rw ?? 520, kw = cfg.kw ?? 900, kx = width - kw - 60, trunk = 60 + rw + (kx - 60 - rw) / 2;
    const kidIds = stack(cfg.kids, kx, 60, kw, cfg.gap ?? 36, 100);
    const top = nodes[kidIds[0]].y, bot = nodes[kidIds.at(-1)].y + nodes[kidIds.at(-1)].h;
    const root = node(cfg.root, 60, (top + bot) / 2 - 80, rw, 160);
    const r = nodes[root], ry = r.y + r.h / 2;
    kidIds.forEach(k => { const c = nodes[k], cy = c.y + c.h / 2; edge(root, k, 'M' + (r.x + r.w) + ' ' + ry + ' H' + trunk + ' V' + cy + ' H' + c.x); });
  } else if (cfg.kind === 'split') {
    const n = cfg.cols.length, cw = cfg.cw ?? 650, gap = cfg.gap ?? 300, x0 = 100;
    width = x0 * 2 + n * cw + (n - 1) * gap; let rowTop = 50;
    let rootId = null;
    if (cfg.top) { rootId = node(cfg.top, (width - (cfg.tw ?? 700)) / 2, 40, cfg.tw ?? 700, 110); rowTop = 330; }
    const colIds = cfg.cols.map((col, c) => {
      const x = x0 + c * (cw + gap), ids = [];
      const head = node(col.head, x, rowTop, cw, 110); ids.push(head);
      let y = nodes[head].y + nodes[head].h + (col.headEdge ? 90 : 80);
      for (const label of col.items) { const k = node(label, x, y, cw, 120); ids.push(k); y = nodes[k].y + nodes[k].h + 90; }
      if (!cfg.plain) {
        if (col.headEdge) edge(ids[0], ids[1]);
        for (let i = 1; i < ids.length - 1; i++) edge(ids[i], ids[i + 1]);
      }
      return ids;
    });
    if (rootId !== null) colIds.forEach(ids => drop(rootId, ids[0], (nodes[rootId].y + nodes[rootId].h + rowTop) / 2));
    if (cfg.merge && !cfg.plain) {
      const lastBottom = Math.max(...colIds.map(ids => { const q = nodes[ids.at(-1)]; return q.y + q.h; }));
      const mw = cfg.mw ?? Math.min(width - 200, 900), mx = (width - mw) / 2, my = lastBottom + 160;
      const m = node(cfg.merge, mx, my, mw, 120); const bus = lastBottom + 80;
      colIds.forEach((ids, k) => { const q = nodes[ids.at(-1)], cx = q.x + q.w / 2, ax = mx + mw * (k + 1) / (colIds.length + 1); edge(ids.at(-1), m, 'M' + cx + ' ' + (q.y + q.h) + ' V' + (bus + k * 0) + ' H' + ax + ' V' + my); });
    }
  } else throw Error('Unknown layout kind for ' + spec.id);

  height = Math.max(height, ...nodes.map(q => q.y + q.h + 60), ...notes.map(q => q.y + 40));
  if (cfg.kind === 'flow' || cfg.kind === 'hub') height = Math.max(...nodes.map(q => q.y + q.h + 60), ...notes.map(q => q.y + 40));
  if (cfg.kind === 'tree') height = Math.max(...nodes.map(q => q.y + q.h + 60), ...notes.map(q => q.y + 40));
  if (cfg.kind === 'split') height = Math.max(...nodes.map(q => q.y + q.h + 60));
  const arrow = spec.id + '-arrow';
  const paths = edges.map(e => {
    const a = nodes[e.a], b = nodes[e.b], ax = a.x + a.w / 2, ay = a.y + a.h / 2, bx = b.x + b.w / 2, by = b.y + b.h / 2;
    const d = e.route || (Math.abs(bx - ax) > Math.abs(by - ay) * 1.4 ? 'M' + (bx > ax ? a.x + a.w : a.x) + ' ' + ay + ' L' + (bx > ax ? b.x : b.x + b.w) + ' ' + by : 'M' + ax + ' ' + (by > ay ? a.y + a.h : a.y) + ' L' + bx + ' ' + (by > ay ? b.y : b.y + b.h));
    return '<path data-edge="' + escape(a.label + ' → ' + b.label) + '" d="' + d + '" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#' + arrow + ')" ' + (e.dashed ? 'stroke-dasharray="8 6"' : '') + '/>';
  }).join('');
  const shapes = nodes.map(q => '<rect class="svg-card" data-node="' + escape(q.label) + '" x="' + q.x + '" y="' + q.y + '" width="' + q.w + '" height="' + q.h + '" rx="12"/><text class="svg-text" x="' + (q.x + q.w / 2) + '" y="' + (q.y + (q.h - q.lines.length * 38) / 2 + 27) + '" text-anchor="middle" font-size="28">' + q.lines.map((s, i) => '<tspan x="' + (q.x + q.w / 2) + '" dy="' + (i ? 38 : 0) + '">' + escape(s) + '</tspan>').join('') + '</text>').join('');
  return '<svg class="course-diagram-svg mnu307-diagram" viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,sans-serif"><title>' + escape(spec.judul) + '</title><desc>' + escape(spec['alt text']) + '</desc><defs><marker id="' + arrow + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor"/></marker></defs><rect class="svg-bg" width="' + width + '" height="' + height + '" rx="16"/>' + paths + shapes + notes.map(q => '<text class="svg-muted" x="' + q.x + '" y="' + q.y + '" text-anchor="middle" font-size="' + q.size + '">' + escape(q.text) + '</text>').join('') + '</svg>';
}

export function figurePR6(spec) {
  const cards = spec.isi.split(';').map(s => s.trim()).filter(Boolean).map(text => ({ title: text, subtitle: '', items: [], takeaway: '' }));
  const cfg = LAYOUTS[spec.id];
  return { kind: 'figure', title: spec.judul, ...(cfg ? { svg: scene(spec, cfg) } : {}), overview: { heading: spec.judul, cards, footer: spec.hubungan.trim() }, caption: spec['pesan utama'] + ' ' + spec.sumber, altText: spec['alt text'] };
}
