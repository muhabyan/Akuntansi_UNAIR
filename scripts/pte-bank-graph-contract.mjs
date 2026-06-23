export const PTE_GRAPH_CONTRACT_IDS = Object.freeze([
  'PTE-BANK-UTS-009',
  'PTE-BANK-UTS-012',
  'PTE-BANK-UTS-019',
  'PTE-BANK-UTS-023',
  'PTE-BANK-UTS-024',
  'PTE-BANK-UTS-027',
  'PTE-BANK-UTS-028',
  'PTE-BANK-UTS-032',
  'PTE-BANK-SRC-011',
  'PTE-BANK-SRC-014',
  'PTE-BANK-SRC-015',
  'PTE-BANK-SRC-017',
  'PTE-BANK-SRC-018',
  'PTE-BANK-SRC-022',
  'PTE-BANK-SRC-029',
  'PTE-BANK-SRC-034',
  'PTE-BANK-SRC-036',
  'PTE-BANK-SRC-040',
  'PTE-BANK-SRC-042',
  'PTE-BANK-SRC-051',
  'PTE-BANK-SRC-052',
  'PTE-BANK-SRC-053',
  'PTE-BANK-SRC-054',
  'PTE-BANK-SRC-055',
  'PTE-BANK-SRC-056',
]);

function attrs(tag) {
  const result = {};
  for (const match of tag.matchAll(/([\w:-]+)="([^"]*)"/g)) result[match[1]] = match[2];
  return result;
}
function num(value) { return Number(value); }
function fail(failures, id, message) { failures.push(`${id}: ${message}`); }
function assert(failures, id, condition, message) { if (!condition) fail(failures, id, message); }
function element(svg, tag, role, failures, id) {
  const pattern = new RegExp(`<${tag}\\b[^>]*data-role="${role}"[^>]*>`, 'gi');
  const matches = [...svg.matchAll(pattern)].map((match) => match[0]);
  assert(failures, id, matches.length === 1, `${role}: expected 1 <${tag}>, found ${matches.length}`);
  return matches[0] ? attrs(matches[0]) : {};
}
function line(svg, role, failures, id) {
  const a = element(svg, 'line', role, failures, id);
  return { x1: num(a.x1), y1: num(a.y1), x2: num(a.x2), y2: num(a.y2) };
}
function circle(svg, role, failures, id) {
  const a = element(svg, 'circle', role, failures, id);
  return { x: num(a.cx), y: num(a.cy) };
}
function rect(svg, role, failures, id) {
  const a = element(svg, 'rect', role, failures, id);
  return { x: num(a.x), y: num(a.y), width: num(a.width), height: num(a.height) };
}
function polygon(svg, role, failures, id) {
  const a = element(svg, 'polygon', role, failures, id);
  return String(a.points ?? '').trim().split(/\s+/).filter(Boolean).map((pair) => pair.split(',').map(Number));
}
function pathData(svg, role, failures, id) {
  const a = element(svg, 'path', role, failures, id);
  return String(a.d ?? '');
}
function slope(value) { return (value.y2 - value.y1) / (value.x2 - value.x1); }
function yAtX(value, x) { return value.y1 + (x - value.x1) * slope(value); }
function xAtY(value, y) { return value.x1 + (y - value.y1) / slope(value); }
function intersection(a, b) {
  const den = (a.x1 - a.x2) * (b.y1 - b.y2) - (a.y1 - a.y2) * (b.x1 - b.x2);
  return {
    x: ((a.x1 * a.y2 - a.y1 * a.x2) * (b.x1 - b.x2) - (a.x1 - a.x2) * (b.x1 * b.y2 - b.y1 * b.x2)) / den,
    y: ((a.x1 * a.y2 - a.y1 * a.x2) * (b.y1 - b.y2) - (a.y1 - a.y2) * (b.x1 * b.y2 - b.y1 * b.x2)) / den,
  };
}
function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
function near(a, b, tolerance = 1.2) { return distance(a, b) <= tolerance; }
function hasPoint(points, target, tolerance = 1.2) {
  return points.some(([x, y]) => Math.hypot(x - target.x, y - target.y) <= tolerance);
}
function pathEndpoints(d) {
  const values = [...d.matchAll(/-?\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
  if (values.length < 4) return { start: { x: NaN, y: NaN }, end: { x: NaN, y: NaN } };
  return {
    start: { x: values[0], y: values[1] },
    end: { x: values.at(-2), y: values.at(-1) },
  };
}
function validateAxes(svg, failures, id) {
  const xAxis = line(svg, 'x-axis', failures, id);
  const yAxis = line(svg, 'y-axis', failures, id);
  assert(failures, id, Math.abs(xAxis.y1 - xAxis.y2) < 0.01 && xAxis.x2 > xAxis.x1, 'x-axis harus horizontal dan mengarah ke kanan');
  assert(failures, id, Math.abs(yAxis.x1 - yAxis.x2) < 0.01 && yAxis.y2 < yAxis.y1, 'y-axis harus vertikal dan mengarah ke atas');
}
function validatePhillips(svg, failures, id) {
  validateAxes(svg, failures, id);
  const srpc = pathEndpoints(pathData(svg, 'srpc', failures, id));
  const lrpc = line(svg, 'lrpc', failures, id);
  assert(failures, id, srpc.end.x > srpc.start.x && srpc.end.y > srpc.start.y, 'SRPC harus menurun secara ekonomi');
  assert(failures, id, Math.abs(lrpc.x1 - lrpc.x2) < 0.01, 'LRPC harus vertikal');
}
function validateLoanableFunds(svg, failures, id) {
  validateAxes(svg, failures, id);
  const demand = line(svg, 'investment-demand', failures, id);
  const before = line(svg, 'saving-before', failures, id);
  const after = line(svg, 'saving-after', failures, id);
  assert(failures, id, slope(demand) > 0, 'permintaan investasi harus menurun secara ekonomi');
  assert(failures, id, slope(before) < 0 && slope(after) < 0, 'penawaran tabungan harus menanjak secara ekonomi');
  assert(failures, id, Math.abs(slope(before) - slope(after)) < 0.01, 'S1 dan S2 harus paralel');
  assert(failures, id, xAtY(after, 120) < xAtY(before, 120), 'S2 harus bergeser ke kiri dari S1');
  const first = intersection(demand, before);
  const second = intersection(demand, after);
  assert(failures, id, second.x < first.x && second.y < first.y, 'shift kiri harus menurunkan dana dan menaikkan suku bunga riil');
}
function validateFlow(svg, failures, id, prefix) {
  const nodes = [1, 2, 3, 4].map((index) => rect(svg, `${prefix}-node-${index}`, failures, id));
  const arrows = [1, 2, 3].map((index) => line(svg, `${prefix}-arrow-${index}`, failures, id));
  for (let index = 1; index < nodes.length; index += 1) {
    assert(failures, id, nodes[index].x > nodes[index - 1].x + nodes[index - 1].width, `node ${index + 1} harus berada di kanan node ${index}`);
  }
  arrows.forEach((arrow, index) => {
    assert(failures, id, Math.abs(arrow.y1 - arrow.y2) < 0.01 && arrow.x2 > arrow.x1, `arrow ${index + 1} harus horizontal ke kanan`);
    assert(failures, id, arrow.x1 >= nodes[index].x + nodes[index].width && arrow.x2 <= nodes[index + 1].x, `arrow ${index + 1} harus menghubungkan node berurutan`);
  });
}

const validators = {
  'PTE-BANK-UTS-009': (svg, failures, id) => {
    const market = circle(svg, 'market-point', failures, id);
    const mixed = circle(svg, 'mixed-point', failures, id);
    const command = circle(svg, 'command-point', failures, id);
    const continuum = line(svg, 'system-continuum', failures, id);
    assert(failures, id, Math.abs(continuum.y1 - continuum.y2) < 0.01, 'kontinuum sistem ekonomi harus horizontal');
    assert(failures, id, market.x < mixed.x && mixed.x < command.x, 'ekonomi campuran harus berada di antara pasar bebas dan komando');
    assert(failures, id, [market, mixed, command].every((point) => Math.abs(point.y - continuum.y1) < 0.1), 'titik sistem harus berada pada kontinuum yang sama');
  },
  'PTE-BANK-UTS-012': (svg, failures, id) => {
    validateAxes(svg, failures, id);
    const before = line(svg, 'demand-before', failures, id);
    const after = line(svg, 'demand-after', failures, id);
    assert(failures, id, slope(before) > 0 && slope(after) > 0, 'D1 dan D2 harus menurun secara ekonomi');
    assert(failures, id, Math.abs(slope(before) - slope(after)) < 0.01, 'D1 dan D2 harus paralel');
    assert(failures, id, xAtY(after, 120) > xAtY(before, 120), 'D2 harus berada di kanan D1');
  },
  'PTE-BANK-UTS-019': (svg, failures, id) => {
    const demand = line(svg, 'demand', failures, id); const supply = line(svg, 'supply', failures, id);
    const price = line(svg, 'market-price', failures, id); const eq = circle(svg, 'equilibrium', failures, id);
    const cross = intersection(demand, supply);
    assert(failures, id, slope(demand) > 0, 'demand harus menurun secara ekonomi');
    assert(failures, id, slope(supply) < 0, 'supply harus menanjak secara ekonomi');
    assert(failures, id, Math.abs(price.y1 - price.y2) < 0.01, 'market price harus horizontal');
    assert(failures, id, near(eq, cross), 'marker equilibrium tidak berada pada perpotongan D-S');
    assert(failures, id, Math.abs(price.y1 - eq.y) <= 1.2, 'garis harga tidak melewati equilibrium');
    const cs = polygon(svg, 'consumer-surplus', failures, id); const ps = polygon(svg, 'producer-surplus', failures, id);
    assert(failures, id, hasPoint(cs, eq) && hasPoint(ps, eq), 'polygon CS/PS harus berbagi titik equilibrium');
    assert(failures, id, cs.some(([, y]) => y < price.y1) && cs.filter(([, y]) => Math.abs(y - price.y1) <= 1.2).length >= 2, 'geometri CS invalid');
    assert(failures, id, ps.some(([, y]) => y > price.y1) && ps.filter(([, y]) => Math.abs(y - price.y1) <= 1.2).length >= 2, 'geometri PS invalid');
  },
  'PTE-BANK-UTS-023': (svg, failures, id) => {
    const elastic = line(svg, 'elastic-demand', failures, id); const inelastic = line(svg, 'inelastic-demand', failures, id);
    assert(failures, id, slope(elastic) > 0 && Math.abs(slope(elastic)) < 0.5, 'kurva elastis harus menurun dan relatif datar');
    assert(failures, id, slope(inelastic) > 1.5, 'kurva inelastis harus jauh lebih curam');
    assert(failures, id, Math.abs(slope(inelastic)) / Math.abs(slope(elastic)) > 5, 'perbedaan slope elastisitas tidak cukup jelas');
  },
  'PTE-BANK-UTS-024': (svg, failures, id) => {
    const demand = line(svg, 'inelastic-demand', failures, id); const supply = line(svg, 'supply', failures, id); const taxed = line(svg, 'taxed-supply', failures, id);
    const wedge = line(svg, 'tax-wedge', failures, id); const pre = circle(svg, 'pre-tax-equilibrium', failures, id);
    const buyer = circle(svg, 'buyer-price', failures, id); const seller = circle(svg, 'seller-price', failures, id);
    assert(failures, id, slope(demand) > 1.5, 'demand harus sangat inelastis/curam');
    assert(failures, id, slope(supply) < 0 && slope(taxed) < 0, 'supply harus menanjak secara ekonomi');
    assert(failures, id, Math.abs(slope(supply) - slope(taxed)) < 0.01, 'S dan S+pajak harus paralel');
    assert(failures, id, Math.abs(wedge.x1 - wedge.x2) < 0.01, 'tax wedge harus vertikal pada kuantitas yang sama');
    assert(failures, id, near(pre, intersection(demand, supply)), 'pre-tax equilibrium salah');
    assert(failures, id, Math.abs(buyer.x - wedge.x1) < 0.1 && Math.abs(seller.x - wedge.x1) < 0.1, 'buyer/seller price tidak pada Qt yang sama');
    assert(failures, id, Math.abs(buyer.y - yAtX(demand, buyer.x)) < 1.2, 'buyer price tidak berada pada demand');
    assert(failures, id, Math.abs(seller.y - yAtX(supply, seller.x)) < 1.2, 'seller price tidak berada pada supply');
    assert(failures, id, Math.abs(buyer.y - yAtX(taxed, buyer.x)) < 1.2, 'taxed supply tidak memotong demand di buyer price');
    assert(failures, id, (pre.y - buyer.y) > (seller.y - pre.y), 'beban konsumen harus lebih besar daripada produsen');
  },
  'PTE-BANK-UTS-027': (svg, failures, id) => {
    validateAxes(svg, failures, id);
    const demand = line(svg, 'demand', failures, id); const supply = line(svg, 'supply', failures, id); const floor = line(svg, 'price-floor', failures, id);
    const eq = intersection(demand, supply);
    assert(failures, id, slope(demand) > 0 && slope(supply) < 0, 'arah demand/supply invalid');
    assert(failures, id, Math.abs(floor.y1 - floor.y2) < 0.01, 'price floor harus horizontal');
    assert(failures, id, floor.y1 < eq.y, 'price floor harus berada di atas harga keseimbangan');
    assert(failures, id, xAtY(supply, floor.y1) > xAtY(demand, floor.y1), 'price floor mengikat harus menghasilkan surplus Qs > Qd');
  },
  'PTE-BANK-UTS-028': (svg, failures, id) => {
    const demand = line(svg, 'demand', failures, id); const supply = line(svg, 'supply', failures, id); const wedge = line(svg, 'tax-wedge', failures, id);
    const eq = circle(svg, 'equilibrium', failures, id); const dwl = polygon(svg, 'deadweight-loss', failures, id);
    assert(failures, id, slope(demand) > 0 && slope(supply) < 0, 'arah D/S invalid');
    assert(failures, id, near(eq, intersection(demand, supply)), 'equilibrium salah');
    assert(failures, id, Math.abs(wedge.x1 - wedge.x2) < 0.01 && wedge.x1 < eq.x, 'wedge harus vertikal pada Qt < Qe');
    const top = { x: wedge.x1, y: wedge.y1 }; const bottom = { x: wedge.x2, y: wedge.y2 };
    assert(failures, id, Math.abs(top.y - yAtX(demand, top.x)) < 1.2, 'puncak wedge tidak pada demand');
    assert(failures, id, Math.abs(bottom.y - yAtX(supply, bottom.x)) < 1.2, 'dasar wedge tidak pada supply');
    assert(failures, id, hasPoint(dwl, top) && hasPoint(dwl, bottom) && hasPoint(dwl, eq), 'segitiga DWL harus dibatasi wedge dan equilibrium');
  },
  'PTE-BANK-UTS-032': (svg, failures, id) => {
    validateAxes(svg, failures, id);
    const demand = line(svg, 'demand', failures, id); const supply = line(svg, 'supply', failures, id);
    const eq = circle(svg, 'equilibrium', failures, id); const qGuide = line(svg, 'equilibrium-quantity', failures, id); const pGuide = line(svg, 'equilibrium-price', failures, id);
    assert(failures, id, near(eq, intersection(demand, supply)), 'E* harus tepat pada perpotongan D-S');
    assert(failures, id, Math.abs(qGuide.x1 - qGuide.x2) < 0.01 && Math.abs(qGuide.x1 - eq.x) < 0.1 && Math.abs(qGuide.y1 - eq.y) < 0.1, 'proyeksi kuantitas equilibrium invalid');
    assert(failures, id, Math.abs(pGuide.y1 - pGuide.y2) < 0.01 && Math.abs(pGuide.y1 - eq.y) < 0.1 && Math.abs(pGuide.x2 - eq.x) < 0.1, 'proyeksi harga equilibrium invalid');
  },
  'PTE-BANK-SRC-011': (svg, failures, id) => validateFlow(svg, failures, id, 'policy'),
  'PTE-BANK-SRC-014': (svg, failures, id) => {
    validateAxes(svg, failures, id);
    const saving = rect(svg, 'saving-bar', failures, id); const investment = rect(svg, 'investment-bar', failures, id);
    assert(failures, id, Math.abs((saving.y + saving.height) - (investment.y + investment.height)) < 0.01, 'batang S dan I harus memakai baseline yang sama');
    assert(failures, id, investment.height > saving.height, 'I harus lebih besar daripada S');
    assert(failures, id, saving.x < investment.x, 'batang S harus berada sebelum I');
  },
  'PTE-BANK-SRC-015': (svg, failures, id) => {
    validateAxes(svg, failures, id);
    const imports = line(svg, 'import-curve', failures, id); const exports = line(svg, 'export-curve', failures, id);
    const path = pathEndpoints(pathData(svg, 'depreciation-path', failures, id));
    assert(failures, id, slope(imports) > 0 && slope(exports) < 0, 'kurva impor/ekspor harus memiliki arah berlawanan');
    assert(failures, id, path.end.x > path.start.x && path.end.y < path.start.y, 'jalur depresiasi harus bergerak ke kanan-atas pada diagram');
  },
  'PTE-BANK-SRC-017': (svg, failures, id) => {
    const sras = line(svg, 'sras', failures, id); const ad1 = line(svg, 'ad1', failures, id); const ad2 = line(svg, 'ad2', failures, id);
    assert(failures, id, slope(sras) < 0, 'SRAS harus menanjak secara ekonomi');
    assert(failures, id, slope(ad1) > 0 && slope(ad2) > 0, 'AD1/AD2 harus menurun secara ekonomi');
    assert(failures, id, Math.abs(slope(ad1) - slope(ad2)) < 0.01, 'AD1/AD2 harus paralel');
    assert(failures, id, xAtY(ad2, 130) > xAtY(ad1, 130), 'AD2 harus bergeser ke kanan dari AD1');
  },
  'PTE-BANK-SRC-018': (svg, failures, id) => {
    validateAxes(svg, failures, id);
    const before = line(svg, 'sras-before', failures, id); const after = line(svg, 'sras-after', failures, id); const ad = line(svg, 'ad', failures, id);
    assert(failures, id, slope(before) < 0 && slope(after) < 0 && slope(ad) > 0, 'arah SRAS/AD invalid');
    assert(failures, id, Math.abs(slope(before) - slope(after)) < 0.01, 'SRAS1/SRAS2 harus paralel');
    assert(failures, id, xAtY(after, 120) < xAtY(before, 120), 'SRAS2 harus bergeser ke kiri');
    const first = intersection(ad, before); const second = intersection(ad, after);
    assert(failures, id, second.x < first.x && second.y < first.y, 'cost-push harus menurunkan output dan menaikkan harga');
  },
  'PTE-BANK-SRC-022': (svg, failures, id) => validatePhillips(svg, failures, id),
  'PTE-BANK-SRC-029': (svg, failures, id) => validateLoanableFunds(svg, failures, id),
  'PTE-BANK-SRC-034': (svg, failures, id) => validateFlow(svg, failures, id, 'depreciation'),
  'PTE-BANK-SRC-036': (svg, failures, id) => validatePhillips(svg, failures, id),
  'PTE-BANK-SRC-040': (svg, failures, id) => {
    const lras = line(svg, 'lras', failures, id); const sras = line(svg, 'sras', failures, id); const ad = line(svg, 'ad', failures, id);
    const low = circle(svg, 'lras-price-point-low', failures, id); const high = circle(svg, 'lras-price-point-high', failures, id); const movement = line(svg, 'movement-along-lras', failures, id);
    assert(failures, id, Math.abs(lras.x1 - lras.x2) < 0.01, 'LRAS harus vertikal');
    assert(failures, id, slope(sras) < 0 && slope(ad) > 0, 'arah SRAS/AD invalid');
    assert(failures, id, Math.abs(low.x - lras.x1) < 0.1 && Math.abs(high.x - lras.x1) < 0.1, 'titik harga harus berada pada LRAS yang sama');
    assert(failures, id, Math.abs(movement.x1 - movement.x2) < 0.01 && Math.abs(movement.x1 - lras.x1) < 0.1, 'gerakan harus sepanjang LRAS');
  },
  'PTE-BANK-SRC-042': (svg, failures, id) => validateLoanableFunds(svg, failures, id),
  'PTE-BANK-SRC-051': (svg, failures, id) => {
    validateAxes(svg, failures, id);
    const before = line(svg, 'money-supply-before', failures, id); const after = line(svg, 'money-supply-after', failures, id); const demand = line(svg, 'money-demand', failures, id);
    assert(failures, id, Math.abs(before.x1 - before.x2) < 0.01 && Math.abs(after.x1 - after.x2) < 0.01, 'MS1/MS2 harus vertikal');
    assert(failures, id, after.x1 > before.x1, 'MS2 harus bergeser ke kanan dari MS1');
    assert(failures, id, slope(demand) > 0, 'MD harus menurun secara ekonomi');
    const first = { x: before.x1, y: yAtX(demand, before.x1) }; const second = { x: after.x1, y: yAtX(demand, after.x1) };
    assert(failures, id, second.y > first.y, 'kenaikan penawaran uang harus menurunkan suku bunga pada gambar');
  },
  'PTE-BANK-SRC-052': (svg, failures, id) => {
    validateAxes(svg, failures, id);
    const lras = line(svg, 'lras', failures, id); const sras = line(svg, 'sras', failures, id); const ad = line(svg, 'ad', failures, id);
    assert(failures, id, Math.abs(lras.x1 - lras.x2) < 0.01, 'LRAS harus vertikal');
    assert(failures, id, slope(sras) < 0 && slope(ad) > 0, 'SRAS harus menanjak dan AD menurun secara ekonomi');
  },
  'PTE-BANK-SRC-053': (svg, failures, id) => validatePhillips(svg, failures, id),
  'PTE-BANK-SRC-054': (svg, failures, id) => validateLoanableFunds(svg, failures, id),
  'PTE-BANK-SRC-055': (svg, failures, id) => {
    const fortyFive = line(svg, 'forty-five-line', failures, id); const ae = line(svg, 'aggregate-expenditure', failures, id); const eq = circle(svg, 'equilibrium', failures, id);
    const output = line(svg, 'equilibrium-output', failures, id);
    assert(failures, id, near(eq, intersection(fortyFive, ae)), 'marker equilibrium tidak tepat pada perpotongan AE dan 45°');
    assert(failures, id, Math.abs(output.x1 - output.x2) < 0.01 && Math.abs(output.x1 - eq.x) < 0.1 && Math.abs(output.y1 - eq.y) < 0.1, 'proyeksi Y* tidak berawal dari equilibrium');
  },
  'PTE-BANK-SRC-056': (svg, failures, id) => {
    validateAxes(svg, failures, id);
    const production = pathEndpoints(pathData(svg, 'production-function', failures, id));
    const early = line(svg, 'marginal-product-early', failures, id); const late = line(svg, 'marginal-product-late', failures, id);
    assert(failures, id, production.end.x > production.start.x && production.end.y < production.start.y, 'fungsi produksi harus meningkat terhadap modal');
    assert(failures, id, slope(early) < 0 && slope(late) < 0, 'tangen MPK harus menunjukkan output meningkat');
    assert(failures, id, Math.abs(slope(early)) > Math.abs(slope(late)), 'kemiringan harus makin landai saat modal bertambah');
  },
};

export function validatePteGraphSemantics(questions) {
  const failures = [];
  const graphs = questions.filter((question) => question.kind === 'graph');
  const actualIds = graphs.map((question) => question.id);
  const expected = new Set(PTE_GRAPH_CONTRACT_IDS);
  assert(failures, 'GRAPH-CONTRACT', graphs.length === PTE_GRAPH_CONTRACT_IDS.length, `graph count ${graphs.length}, expected ${PTE_GRAPH_CONTRACT_IDS.length}`);
  for (const id of actualIds) assert(failures, 'GRAPH-CONTRACT', expected.has(id), `${id} tidak memiliki semantic contract`);
  for (const id of PTE_GRAPH_CONTRACT_IDS) assert(failures, 'GRAPH-CONTRACT', actualIds.includes(id), `${id} contract tidak memiliki graph`);
  for (const question of graphs) validators[question.id]?.(question.svg, failures, question.id);
  return failures;
}

function setRoleAttr(svg, role, attr, value) {
  const pattern = new RegExp(`(<\\w+\\b[^>]*data-role="${role}"[^>]*\\b${attr}=")([^"]+)(")`);
  if (!pattern.test(svg)) throw new Error(`${role}.${attr} not found`);
  return svg.replace(pattern, `$1${value}$3`);
}

const mutations = {
  'PTE-BANK-UTS-009': (svg) => setRoleAttr(svg, 'mixed-point', 'cx', 370),
  'PTE-BANK-UTS-012': (svg) => setRoleAttr(setRoleAttr(svg, 'demand-after', 'x1', 10), 'demand-after', 'x2', 258),
  'PTE-BANK-UTS-019': (svg) => setRoleAttr(svg, 'equilibrium', 'cx', 260),
  'PTE-BANK-UTS-023': (svg) => setRoleAttr(svg, 'elastic-demand', 'y2', 250),
  'PTE-BANK-UTS-024': (svg) => setRoleAttr(svg, 'buyer-price', 'cy', 160),
  'PTE-BANK-UTS-027': (svg) => setRoleAttr(setRoleAttr(svg, 'price-floor', 'y1', 170), 'price-floor', 'y2', 170),
  'PTE-BANK-UTS-028': (svg) => setRoleAttr(setRoleAttr(svg, 'tax-wedge', 'x1', 260), 'tax-wedge', 'x2', 260),
  'PTE-BANK-UTS-032': (svg) => setRoleAttr(svg, 'equilibrium', 'cx', 260),
  'PTE-BANK-SRC-011': (svg) => setRoleAttr(svg, 'policy-arrow-2', 'x2', 190),
  'PTE-BANK-SRC-014': (svg) => setRoleAttr(svg, 'saving-bar', 'height', 170),
  'PTE-BANK-SRC-015': (svg) => setRoleAttr(svg, 'depreciation-path', 'd', 'M180 168 C170 180 150 190 120 200'),
  'PTE-BANK-SRC-017': (svg) => setRoleAttr(svg, 'ad2', 'x1', 20),
  'PTE-BANK-SRC-018': (svg) => setRoleAttr(setRoleAttr(svg, 'sras-after', 'x1', 220), 'sras-after', 'x2', 472),
  'PTE-BANK-SRC-022': (svg) => setRoleAttr(svg, 'lrpc', 'x2', 280),
  'PTE-BANK-SRC-029': (svg) => setRoleAttr(setRoleAttr(svg, 'saving-after', 'x1', 180), 'saving-after', 'x2', 422),
  'PTE-BANK-SRC-034': (svg) => setRoleAttr(svg, 'depreciation-arrow-2', 'x2', 190),
  'PTE-BANK-SRC-036': (svg) => setRoleAttr(svg, 'lrpc', 'x2', 280),
  'PTE-BANK-SRC-040': (svg) => setRoleAttr(svg, 'lras', 'x2', 280),
  'PTE-BANK-SRC-042': (svg) => setRoleAttr(setRoleAttr(svg, 'saving-after', 'x1', 180), 'saving-after', 'x2', 422),
  'PTE-BANK-SRC-051': (svg) => setRoleAttr(setRoleAttr(svg, 'money-supply-after', 'x1', 120), 'money-supply-after', 'x2', 120),
  'PTE-BANK-SRC-052': (svg) => setRoleAttr(svg, 'lras', 'x2', 280),
  'PTE-BANK-SRC-053': (svg) => setRoleAttr(svg, 'srpc', 'd', 'M88 192 C170 150 260 90 340 40'),
  'PTE-BANK-SRC-054': (svg) => setRoleAttr(setRoleAttr(svg, 'saving-after', 'x1', 180), 'saving-after', 'x2', 422),
  'PTE-BANK-SRC-055': (svg) => setRoleAttr(svg, 'equilibrium', 'cx', 260),
  'PTE-BANK-SRC-056': (svg) => setRoleAttr(svg, 'marginal-product-late', 'y2', 30),
};

export function mutatePteGraph(questions, id) {
  const mutated = structuredClone(questions);
  const question = mutated.find((item) => item.id === id);
  if (!question?.svg || !mutations[id]) throw new Error(`${id}: graph mutation unavailable`);
  question.svg = mutations[id](question.svg);
  return mutated;
}
