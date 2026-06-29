// =============================================================
// Econ Diagrams — proper React components for economic illustrations
// Uses CSS Grid with horizontal text only — no rotated labels.
// =============================================================
import React from 'react';

/* ─────────────── Shared arrow component ─────────────── */
const FlowArrow: React.FC<{ dir: 'up' | 'down'; color: string }> = ({ dir, color }) => (
  <span style={{ color, fontSize: 14, lineHeight: 1 }}>{dir === 'up' ? '▲' : '▼'}</span>
);

/* ─────────────── Flow Label ─────────────── */
const FlowLabel: React.FC<{ dir: 'up' | 'down'; label: string; color: string; sub?: string }> = ({ dir, label, color, sub }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 0' }}>
    <FlowArrow dir={dir} color={color} />
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, color, lineHeight: 1.3 }}>{label}</div>
      {sub && <div style={{ fontSize: 10, color: '#94a3b8', lineHeight: 1.2 }}>{sub}</div>}
    </div>
  </div>
);

/* ─────────────── Market Pill ─────────────── */
const MarketPill: React.FC<{ title: string; sub: string }> = ({ title, sub }) => (
  <div style={{
    background: '#1e293b', border: '1.5px dashed #60a5fa', borderRadius: 24,
    padding: '10px 20px', textAlign: 'center',
  }}>
    <div style={{ fontWeight: 700, fontSize: 14, color: '#f1f5f9' }}>{title}</div>
    <div style={{ fontSize: 10, color: '#94a3b8' }}>{sub}</div>
  </div>
);

/* ─────────────── Entity Box ─────────────── */
const EntityBox: React.FC<{ title: string; sub: string; desc1: string; desc2: string }> = ({ title, sub, desc1, desc2 }) => (
  <div style={{
    background: '#1e293b', border: '2px solid #60a5fa', borderRadius: 14,
    padding: '14px 12px', textAlign: 'center', flex: 1, minWidth: 0,
  }}>
    <div style={{ fontWeight: 700, fontSize: 15, color: '#f1f5f9' }}>{title}</div>
    <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 2 }}>{sub}</div>
    <div style={{ fontSize: 10, color: '#64748b', marginTop: 6, lineHeight: 1.5 }}>
      {desc1}<br />{desc2}
    </div>
  </div>
);

/* ─────────────────────── Circular Flow ─────────────────────── */

export const CircularFlowDiagram: React.FC = () => (
  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e2e8f0', maxWidth: 580, margin: '0 auto' }}>

    {/* 1. Top Market */}
    <MarketPill title="PASAR BARANG & JASA" sub="(Goods & Services Market)" />

    {/* 2. Upper Flow Strip */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '8px 12px' }}>
      {/* Left side: Firms → Market */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderRight: '1px solid #334155', paddingRight: 8 }}>
        <FlowLabel dir="up" label="Revenue (Pendapatan)" color="#f59e0b" sub="Uang dari penjualan barang" />
        <FlowLabel dir="up" label="Barang dijual" color="#60a5fa" sub="Output ke pasar" />
      </div>
      {/* Right side: Market → Households */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 8, alignItems: 'flex-end' }}>
        <FlowLabel dir="up" label="Spending (Belanja)" color="#f59e0b" sub="Uang dari rumah tangga" />
        <FlowLabel dir="up" label="Barang dibeli" color="#60a5fa" sub="Dikonsumsi rumah tangga" />
      </div>
    </div>

    {/* 3. Entity Boxes */}
    <div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>
      <EntityBox title="PERUSAHAAN" sub="(Firms)" desc1="Memproduksi barang/jasa" desc2="Memakai faktor produksi" />
      <EntityBox title="RUMAH TANGGA" sub="(Households)" desc1="Membeli barang/jasa" desc2="Memiliki faktor produksi" />
    </div>

    {/* 4. Lower Flow Strip */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '8px 12px' }}>
      {/* Left side: Firms → Factor Market */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderRight: '1px solid #334155', paddingRight: 8 }}>
        <FlowLabel dir="down" label="Upah, sewa, bunga, laba" color="#f59e0b" sub="Bayar faktor produksi" />
        <FlowLabel dir="down" label="Faktor dipakai" color="#60a5fa" sub="Input untuk produksi" />
      </div>
      {/* Right side: Households → Factor Market */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 8, alignItems: 'flex-end' }}>
        <FlowLabel dir="down" label="Income (Pendapatan)" color="#f59e0b" sub="Diterima rumah tangga" />
        <FlowLabel dir="down" label="TK, tanah, modal" color="#60a5fa" sub="Dijual ke perusahaan" />
      </div>
    </div>

    {/* 5. Bottom Market */}
    <MarketPill title="PASAR FAKTOR PRODUKSI" sub="(Factors of Production Market)" />

    {/* 6. Legend */}
    <div style={{
      display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap',
      padding: '8px 16px', marginTop: 10, background: '#0f172a', borderRadius: 8, border: '1px solid #334155',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#cbd5e1' }}>
        <FlowArrow dir="down" color="#f59e0b" /> Arus uang (Money)
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#cbd5e1' }}>
        <FlowArrow dir="down" color="#60a5fa" /> Arus barang/faktor (Real)
      </div>
    </div>

    {/* 7. Key insight callout */}
    <div style={{
      marginTop: 10, padding: '10px 14px', background: '#0f172a', borderRadius: 10,
      border: '1px solid #334155', fontSize: 11, color: '#94a3b8', lineHeight: 1.6,
    }}>
      <strong style={{ color: '#f1f5f9' }}>💡 Identitas Inti:</strong> Produksi = Pendapatan = Pengeluaran.
      Setiap rupiah yang dibelanjakan menjadi pendapatan bagi orang lain. Itulah mengapa GDP bisa dihitung
      dari sisi produksi, pendapatan, maupun pengeluaran — hasilnya sama.
    </div>
  </div>
);


/* ─────────────────── GDP to DI Waterfall ─────────────────── */

interface WaterfallStep {
  abbr: string;
  full: string;
  formula: string;
  color: string;
}

const steps: WaterfallStep[] = [
  { abbr: 'GDP', full: 'Gross Domestic Product', formula: 'C + I + G + NX', color: '#3b82f6' },
  { abbr: 'GNP', full: 'Gross National Product', formula: '+ Pendapatan faktor neto dari LN', color: '#3b82f6' },
  { abbr: 'NNP', full: 'Net National Product', formula: '− Depresiasi (penyusutan)', color: '#3b82f6' },
  { abbr: 'NI', full: 'National Income', formula: '− Pajak tidak langsung', color: '#8b5cf6' },
  { abbr: 'PI', full: 'Personal Income', formula: '− Laba ditahan − Pajak corp + Transfer', color: '#f59e0b' },
  { abbr: 'DI', full: 'Disposable Income', formula: '− Pajak personal → DI = C + S', color: '#22c55e' },
];

export const GDPWaterfallDiagram: React.FC = () => (
  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e2e8f0', maxWidth: 580, margin: '0 auto' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {steps.map((step, i) => (
        <React.Fragment key={step.abbr}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 16px',
            background: '#1e293b',
            borderLeft: `4px solid ${step.color}`,
            borderRadius: i === 0 ? '12px 12px 0 0' : i === steps.length - 1 ? '0 0 12px 12px' : 0,
            borderBottom: i < steps.length - 1 ? '1px solid #334155' : 'none',
          }}>
            <div style={{
              minWidth: 44, height: 44, borderRadius: 10,
              background: step.color + '20', border: `1.5px solid ${step.color}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: 14, color: step.color,
              flexShrink: 0,
            }}>
              {step.abbr}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#f1f5f9' }}>{step.full}</div>
              <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{step.formula}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ fontSize: 16, color: '#475569', flexShrink: 0 }}>▼</div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>

    {/* Summary */}
    <div style={{
      marginTop: 10, padding: '10px 14px',
      background: '#0f172a', borderRadius: 10, border: '1px solid #334155',
    }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>Ringkasan Alur:</div>
      <div style={{ fontSize: 11, color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.8, overflowX: 'auto' }}>
        GDP →(+NFI)→ GNP →(−Depr.)→ NNP →(−Pjk TL)→ NI<br />
        NI →(−Laba dthn −Pjk Corp +Transfer)→ PI →(−Pjk Personal)→ <strong style={{ color: '#22c55e' }}>DI = C + S</strong>
      </div>
    </div>
  </div>
);


/* ──────────────────── Registry ──────────────────── */

const DIAGRAM_REGISTRY: Record<string, React.FC> = {
  'circular-flow': CircularFlowDiagram,
  'gdp-waterfall': GDPWaterfallDiagram,
};

interface Props {
  type: string;
}

const EconDiagram: React.FC<Props> = ({ type }) => {
  const Component = DIAGRAM_REGISTRY[type];
  if (!Component) {
    return <div style={{ color: '#ef4444', padding: 12 }}>Diagram &ldquo;{type}&rdquo; not found</div>;
  }
  return <Component />;
};

export default EconDiagram;
