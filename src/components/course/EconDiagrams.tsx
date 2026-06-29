import React from 'react';

export const CircularFlowDiagram: React.FC = () => (
  <div className="w-full max-w-5xl mx-auto overflow-x-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-inner">
    <svg viewBox="0 0 1200 800" className="w-full h-auto drop-shadow-sm font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Markers for Arrows - fixed size using userSpaceOnUse */}
        <marker id="arrow-green" markerWidth="24" markerHeight="24" refX="20" refY="12" orient="auto-start-reverse" markerUnits="userSpaceOnUse">
          <path d="M 0 0 L 24 12 L 0 24 z" fill="#10b981" />
        </marker>
        <marker id="arrow-orange" markerWidth="24" markerHeight="24" refX="20" refY="12" orient="auto-start-reverse" markerUnits="userSpaceOnUse">
          <path d="M 0 0 L 24 12 L 0 24 z" fill="#f59e0b" />
        </marker>
        <marker id="arrow-green-legend" markerWidth="16" markerHeight="16" refX="14" refY="8" orient="auto-start-reverse" markerUnits="userSpaceOnUse">
          <path d="M 0 0 L 16 8 L 0 16 z" fill="#10b981" />
        </marker>
        <marker id="arrow-orange-legend" markerWidth="16" markerHeight="16" refX="14" refY="8" orient="auto-start-reverse" markerUnits="userSpaceOnUse">
          <path d="M 0 0 L 16 8 L 0 16 z" fill="#f59e0b" />
        </marker>
        {/* Gradients */}
        <linearGradient id="firm-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
        <linearGradient id="market-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
      </defs>

      {/* Outer Loop (Green) - Flow of Dollars */}
      <path d="M 380 120 H 120 Q 90 120 90 150 V 300" fill="none" stroke="#10b981" strokeWidth="6" markerEnd="url(#arrow-green)" />
      <text x="230" y="105" textAnchor="middle" fill="#047857" fontSize="18" fontWeight="bold">Revenue (Pendapatan)</text>

      <path d="M 120 500 V 650 Q 120 680 150 680 H 380" fill="none" stroke="#10b981" strokeWidth="6" markerEnd="url(#arrow-green)" />
      <text x="230" y="710" textAnchor="middle" fill="#047857" fontSize="18" fontWeight="bold">Wages, rent, and profit</text>

      <path d="M 820 680 H 1050 Q 1080 680 1080 650 V 500" fill="none" stroke="#10b981" strokeWidth="6" markerEnd="url(#arrow-green)" />
      <text x="970" y="710" textAnchor="middle" fill="#047857" fontSize="18" fontWeight="bold">Income (Pendapatan)</text>

      <path d="M 1080 300 V 150 Q 1080 120 1050 120 H 820" fill="none" stroke="#10b981" strokeWidth="6" markerEnd="url(#arrow-green)" />
      <text x="970" y="105" textAnchor="middle" fill="#047857" fontSize="18" fontWeight="bold">Spending (Belanja)</text>

      {/* Inner Loop (Orange) - Flow of Real Goods/Inputs */}
      <path d="M 200 300 V 210 Q 200 180 230 180 H 380" fill="none" stroke="#f59e0b" strokeWidth="6" markerEnd="url(#arrow-orange)" />
      <text x="290" y="170" textAnchor="middle" fill="#b45309" fontSize="16" fontWeight="bold">Goods sold</text>

      <path d="M 820 180 H 970 Q 1000 180 1000 210 V 300" fill="none" stroke="#f59e0b" strokeWidth="6" markerEnd="url(#arrow-orange)" />
      <text x="910" y="170" textAnchor="middle" fill="#b45309" fontSize="16" fontWeight="bold">Goods bought</text>

      <path d="M 1000 500 V 590 Q 1000 620 970 620 H 820" fill="none" stroke="#f59e0b" strokeWidth="6" markerEnd="url(#arrow-orange)" />
      <text x="910" y="645" textAnchor="middle" fill="#b45309" fontSize="16" fontWeight="bold">Labor, land, capital</text>

      <path d="M 380 620 H 230 Q 200 620 200 590 V 500" fill="none" stroke="#f59e0b" strokeWidth="6" markerEnd="url(#arrow-orange)" />
      <text x="290" y="645" textAnchor="middle" fill="#b45309" fontSize="16" fontWeight="bold">Factors of production</text>

      {/* Top Market */}
      <ellipse cx="600" cy="150" rx="220" ry="80" fill="url(#market-grad)" stroke="#ca8a04" strokeWidth="4" />
      <text x="600" y="135" textAnchor="middle" fill="#713f12" fontSize="24" fontWeight="bold">MARKETS FOR</text>
      <text x="600" y="165" textAnchor="middle" fill="#713f12" fontSize="24" fontWeight="bold">GOODS AND SERVICES</text>
      <text x="600" y="195" textAnchor="middle" fill="#854d0e" fontSize="16" fontWeight="600">• Firms sell  • Households buy</text>

      {/* Bottom Market */}
      <ellipse cx="600" cy="650" rx="220" ry="80" fill="url(#market-grad)" stroke="#ca8a04" strokeWidth="4" />
      <text x="600" y="635" textAnchor="middle" fill="#713f12" fontSize="24" fontWeight="bold">MARKETS FOR</text>
      <text x="600" y="665" textAnchor="middle" fill="#713f12" fontSize="24" fontWeight="bold">FACTORS OF PRODUCTION</text>
      <text x="600" y="695" textAnchor="middle" fill="#854d0e" fontSize="16" fontWeight="600">• Households sell  • Firms buy</text>

      {/* Firms Box */}
      <rect x="40" y="300" width="240" height="200" rx="16" fill="url(#firm-grad)" stroke="#3b82f6" strokeWidth="4" />
      <text x="160" y="345" textAnchor="middle" fill="#1e3a8a" fontSize="26" fontWeight="bold">FIRMS</text>
      <text x="160" y="380" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="600">• Produce and sell</text>
      <text x="160" y="400" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="600">goods and services</text>
      <text x="160" y="430" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="600">• Hire and use factors</text>
      <text x="160" y="450" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="600">of production</text>

      {/* Households Box */}
      <rect x="920" y="300" width="240" height="200" rx="16" fill="url(#firm-grad)" stroke="#3b82f6" strokeWidth="4" />
      <text x="1040" y="345" textAnchor="middle" fill="#1e3a8a" fontSize="26" fontWeight="bold">HOUSEHOLDS</text>
      <text x="1040" y="380" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="600">• Buy and consume</text>
      <text x="1040" y="400" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="600">goods and services</text>
      <text x="1040" y="430" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="600">• Own and sell factors</text>
      <text x="1040" y="450" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="600">of production</text>

      {/* Legend */}
      <rect x="450" y="350" width="300" height="100" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 480 385 L 520 385" fill="none" stroke="#10b981" strokeWidth="6" markerEnd="url(#arrow-green-legend)" />
      <text x="540" y="390" fill="#334155" fontSize="16" fontWeight="600">= Flow of dollars</text>

      <path d="M 480 425 L 520 425" fill="none" stroke="#f59e0b" strokeWidth="6" markerEnd="url(#arrow-orange-legend)" />
      <text x="540" y="430" fill="#334155" fontSize="16" fontWeight="600">= Flow of inputs/outputs</text>
    </svg>
  </div>
);

export const GDPWaterfallDiagram: React.FC = () => (
  <div className="w-full max-w-5xl mx-auto overflow-x-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-inner">
    <svg viewBox="0 0 1000 650" className="w-full h-auto drop-shadow-sm font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="waterfall-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
        </marker>
        <marker id="branch-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a" />
        </marker>
      </defs>

      {/* Grid lines */}
      <line x1="40" y1="100" x2="960" y2="100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="40" y1="200" x2="960" y2="200" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="40" y1="300" x2="960" y2="300" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="40" y1="400" x2="960" y2="400" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
      
      {/* Ground Line */}
      <line x1="40" y1="500" x2="960" y2="500" stroke="#475569" strokeWidth="4" strokeLinecap="round" />

      {/* Bar 1: GDP */}
      <rect x="60" y="100" width="80" height="400" rx="8" fill="#3b82f6" />
      <text x="100" y="480" fill="#ffffff" fontSize="20" fontWeight="bold" textAnchor="middle">GDP</text>
      
      {/* Arrow 1 */}
      <path d="M 140 100 Q 195 80 250 120" fill="none" stroke="#64748b" strokeWidth="3" markerEnd="url(#waterfall-arrow)" strokeDasharray="4,4" />
      <text x="195" y="70" fill="#475569" fontSize="14" fontWeight="600" textAnchor="middle">+/- Pendapatan Neto LN</text>

      {/* Bar 2: GNP */}
      <rect x="210" y="130" width="80" height="370" rx="8" fill="#6366f1" />
      <text x="250" y="480" fill="#ffffff" fontSize="20" fontWeight="bold" textAnchor="middle">GNP</text>

      {/* Arrow 2 */}
      <path d="M 290 130 Q 345 110 400 170" fill="none" stroke="#64748b" strokeWidth="3" markerEnd="url(#waterfall-arrow)" strokeDasharray="4,4" />
      <text x="345" y="100" fill="#475569" fontSize="14" fontWeight="600" textAnchor="middle">− Depresiasi</text>

      {/* Bar 3: NNP */}
      <rect x="360" y="180" width="80" height="320" rx="8" fill="#8b5cf6" />
      <text x="400" y="480" fill="#ffffff" fontSize="20" fontWeight="bold" textAnchor="middle">NNP</text>

      {/* Arrow 3 */}
      <path d="M 440 180 Q 495 160 550 220" fill="none" stroke="#64748b" strokeWidth="3" markerEnd="url(#waterfall-arrow)" strokeDasharray="4,4" />
      <text x="495" y="145" fill="#475569" fontSize="14" fontWeight="600" textAnchor="middle">− Pajak tak langsung</text>
      <text x="495" y="165" fill="#475569" fontSize="14" fontWeight="600" textAnchor="middle">+ Subsidi</text>

      {/* Bar 4: NNI */}
      <rect x="510" y="230" width="80" height="270" rx="8" fill="#d946ef" />
      <text x="550" y="480" fill="#ffffff" fontSize="20" fontWeight="bold" textAnchor="middle">NNI</text>

      {/* Arrow 4 */}
      <path d="M 590 230 Q 645 210 700 270" fill="none" stroke="#64748b" strokeWidth="3" markerEnd="url(#waterfall-arrow)" strokeDasharray="4,4" />
      <text x="645" y="185" fill="#475569" fontSize="14" fontWeight="600" textAnchor="middle">− Iuran</text>
      <text x="645" y="205" fill="#475569" fontSize="14" fontWeight="600" textAnchor="middle">+ Transfer payment</text>

      {/* Bar 5: PI */}
      <rect x="660" y="280" width="80" height="220" rx="8" fill="#f43f5e" />
      <text x="700" y="480" fill="#ffffff" fontSize="20" fontWeight="bold" textAnchor="middle">PI</text>

      {/* Arrow 5 */}
      <path d="M 740 280 Q 795 260 850 320" fill="none" stroke="#64748b" strokeWidth="3" markerEnd="url(#waterfall-arrow)" strokeDasharray="4,4" />
      <text x="795" y="250" fill="#475569" fontSize="14" fontWeight="600" textAnchor="middle">− Pajak langsung</text>

      {/* Bar 6: DI */}
      <rect x="810" y="330" width="80" height="170" rx="8" fill="#e11d48" />
      <text x="850" y="480" fill="#ffffff" fontSize="20" fontWeight="bold" textAnchor="middle">DI</text>

      {/* Branches from DI */}
      <path d="M 850 510 L 780 560" fill="none" stroke="#0f172a" strokeWidth="4" markerEnd="url(#branch-arrow)" />
      <rect x="690" y="560" width="130" height="50" rx="10" fill="#10b981" />
      <text x="755" y="590" fill="#ffffff" fontSize="18" fontWeight="bold" textAnchor="middle">KONSUMSI</text>

      <path d="M 850 510 L 920 560" fill="none" stroke="#0f172a" strokeWidth="4" markerEnd="url(#branch-arrow)" />
      <rect x="870" y="560" width="120" height="50" rx="10" fill="#f59e0b" />
      <text x="930" y="590" fill="#ffffff" fontSize="18" fontWeight="bold" textAnchor="middle">TABUNGAN</text>

    </svg>
  </div>
);

export default function EconDiagram({ type }: { type: string }) {
  switch (type) {
    case 'circular-flow':
      return <CircularFlowDiagram />;
    case 'gdp-waterfall':
      return <GDPWaterfallDiagram />;
    default:
      return <div className="p-4 border border-red-500 text-red-500 rounded-lg">Diagram type '{type}' not found.</div>;
  }
}
