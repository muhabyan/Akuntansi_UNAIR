// =============================================================
// Econ Diagrams — proper React components for economic illustrations
// These replace fragile inline SVGs with CSS-based layouts that
// are guaranteed to be responsive and clean on all devices.
// =============================================================
import React from 'react';

/* ─────────────────────── Circular Flow ─────────────────────── */

const arrowRight = '→';
const arrowDown = '↓';
const arrowUp = '↑';
const arrowLeft = '←';

export const CircularFlowDiagram: React.FC = () => (
  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e2e8f0', maxWidth: 640, margin: '0 auto' }}>
    {/* Row 1: Goods Market */}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
      <div style={{
        background: '#1e293b', border: '1.5px dashed #60a5fa', borderRadius: 32,
        padding: '12px 32px', textAlign: 'center', minWidth: 200
      }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: '#f1f5f9' }}>PASAR BARANG & JASA</div>
        <div style={{ fontSize: 11, color: '#94a3b8' }}>(Goods & Services Market)</div>
      </div>
    </div>

    {/* Row 2: Arrows between top market and boxes */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: 0, marginBottom: 4 }}>
      {/* Left arrows (up) */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, color: '#f59e0b', lineHeight: 1 }}>{arrowUp}</div>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#f59e0b', writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Revenue</div>
          <div style={{ fontSize: 20, color: '#f59e0b', lineHeight: 1 }}>{arrowUp}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, color: '#60a5fa', lineHeight: 1 }}>{arrowUp}</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#60a5fa', writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Barang dijual</div>
          <div style={{ fontSize: 20, color: '#60a5fa', lineHeight: 1 }}>{arrowUp}</div>
        </div>
      </div>

      {/* Center spacer */}
      <div />

      {/* Right arrows (up) */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, color: '#60a5fa', lineHeight: 1 }}>{arrowUp}</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#60a5fa', writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Barang dibeli</div>
          <div style={{ fontSize: 20, color: '#60a5fa', lineHeight: 1 }}>{arrowUp}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, color: '#f59e0b', lineHeight: 1 }}>{arrowUp}</div>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#f59e0b', writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Spending</div>
          <div style={{ fontSize: 20, color: '#f59e0b', lineHeight: 1 }}>{arrowUp}</div>
        </div>
      </div>
    </div>

    {/* Row 3: Main boxes */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: 0, marginBottom: 4 }}>
      <div style={{
        background: '#1e293b', border: '2px solid #60a5fa', borderRadius: 14,
        padding: '16px 12px', textAlign: 'center'
      }}>
        <div style={{ fontWeight: 700, fontSize: 16, color: '#f1f5f9' }}>PERUSAHAAN</div>
        <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>(Firms)</div>
        <div style={{ fontSize: 10, color: '#64748b', marginTop: 8, lineHeight: 1.5 }}>
          Memproduksi barang/jasa<br />Memakai faktor produksi
        </div>
      </div>

      {/* Center: equals sign */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontSize: 10, color: '#475569', textAlign: 'center', lineHeight: 1.3 }}>
          {arrowRight} Produksi<br />= Pendapatan<br />= Pengeluaran {arrowLeft}
        </div>
      </div>

      <div style={{
        background: '#1e293b', border: '2px solid #60a5fa', borderRadius: 14,
        padding: '16px 12px', textAlign: 'center'
      }}>
        <div style={{ fontWeight: 700, fontSize: 16, color: '#f1f5f9' }}>RUMAH TANGGA</div>
        <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>(Households)</div>
        <div style={{ fontSize: 10, color: '#64748b', marginTop: 8, lineHeight: 1.5 }}>
          Membeli barang/jasa<br />Memiliki faktor produksi
        </div>
      </div>
    </div>

    {/* Row 4: Arrows between boxes and bottom market */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: 0, marginBottom: 4 }}>
      {/* Left arrows (down) */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, color: '#f59e0b', lineHeight: 1 }}>{arrowDown}</div>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#f59e0b', writingMode: 'vertical-rl', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Upah, sewa, laba</div>
          <div style={{ fontSize: 20, color: '#f59e0b', lineHeight: 1 }}>{arrowDown}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, color: '#60a5fa', lineHeight: 1 }}>{arrowDown}</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#60a5fa', writingMode: 'vertical-rl', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Faktor dipakai</div>
          <div style={{ fontSize: 20, color: '#60a5fa', lineHeight: 1 }}>{arrowDown}</div>
        </div>
      </div>

      {/* Center spacer */}
      <div />

      {/* Right arrows (down) */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, color: '#60a5fa', lineHeight: 1 }}>{arrowDown}</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#60a5fa', writingMode: 'vertical-rl', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TK, tanah, modal</div>
          <div style={{ fontSize: 20, color: '#60a5fa', lineHeight: 1 }}>{arrowDown}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, color: '#f59e0b', lineHeight: 1 }}>{arrowDown}</div>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#f59e0b', writingMode: 'vertical-rl', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Income</div>
          <div style={{ fontSize: 20, color: '#f59e0b', lineHeight: 1 }}>{arrowDown}</div>
        </div>
      </div>
    </div>

    {/* Row 5: Factor Market */}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
      <div style={{
        background: '#1e293b', border: '1.5px dashed #60a5fa', borderRadius: 32,
        padding: '12px 32px', textAlign: 'center', minWidth: 200
      }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: '#f1f5f9' }}>PASAR FAKTOR PRODUKSI</div>
        <div style={{ fontSize: 11, color: '#94a3b8' }}>(Factors of Production Market)</div>
      </div>
    </div>

    {/* Legend */}
    <div style={{
      display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap',
      padding: '8px 16px', background: '#0f172a', borderRadius: 8, border: '1px solid #334155'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ color: '#f59e0b', fontWeight: 700, fontSize: 16 }}>{arrowDown}</span>
        <span style={{ fontSize: 11, color: '#cbd5e1' }}>Arus uang (Money flow)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: 16 }}>{arrowDown}</span>
        <span style={{ fontSize: 11, color: '#cbd5e1' }}>Arus barang/faktor (Real flow)</span>
      </div>
    </div>
  </div>
);


/* ─────────────────── GDP to DI Waterfall ─────────────────── */

interface WaterfallStep {
  label: string;
  sub: string;
  color: string;
}

const steps: WaterfallStep[] = [
  { label: 'GDP', sub: 'C + I + G + NX', color: '#3b82f6' },
  { label: 'GNP', sub: '+ Pendapatan faktor neto LN', color: '#3b82f6' },
  { label: 'NNP', sub: '− Depresiasi (penyusutan)', color: '#3b82f6' },
  { label: 'NI', sub: '− Pajak tidak langsung', color: '#8b5cf6' },
  { label: 'PI', sub: '− Laba ditahan − Pajak corp + Transfer', color: '#f59e0b' },
  { label: 'DI', sub: '− Pajak personal = C + S', color: '#22c55e' },
];

export const GDPWaterfallDiagram: React.FC = () => (
  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e2e8f0', maxWidth: 640, margin: '0 auto' }}>
    {/* Main waterfall */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {steps.map((step, i) => (
        <React.Fragment key={step.label}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 16px',
            background: '#1e293b',
            borderLeft: `4px solid ${step.color}`,
            borderRadius: i === 0 ? '12px 12px 0 0' : i === steps.length - 1 ? '0 0 12px 12px' : 0,
            borderBottom: i < steps.length - 1 ? '1px solid #334155' : 'none',
          }}>
            <div style={{
              minWidth: 48, height: 48, borderRadius: 10,
              background: step.color + '22', border: `1.5px solid ${step.color}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: 16, color: step.color,
              flexShrink: 0,
            }}>
              {step.label}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#f1f5f9' }}>{step.label === 'GDP' ? 'Gross Domestic Product' : step.label === 'GNP' ? 'Gross National Product' : step.label === 'NNP' ? 'Net National Product' : step.label === 'NI' ? 'National Income' : step.label === 'PI' ? 'Personal Income' : 'Disposable Income'}</div>
              <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{step.sub}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ fontSize: 18, color: '#475569', flexShrink: 0 }}>↓</div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>

    {/* Summary formula */}
    <div style={{
      marginTop: 12, padding: '10px 16px',
      background: '#0f172a', borderRadius: 10, border: '1px solid #334155',
    }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>Ringkasan Alur:</div>
      <div style={{ fontSize: 11, color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.8, overflowX: 'auto' }}>
        GDP →(+NFI)→ GNP →(−Depresiasi)→ NNP →(−Pajak TL)→ NI<br />
        NI →(−Laba ditahan −Pajak Corp +Transfer)→ PI →(−Pajak Personal)→ <strong style={{ color: '#22c55e' }}>DI = C + S</strong>
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
    return <div style={{ color: '#ef4444', padding: 12 }}>Diagram "{type}" not found</div>;
  }
  return <Component />;
};

export default EconDiagram;
