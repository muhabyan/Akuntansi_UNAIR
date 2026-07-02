import React from 'react';

/**
 * AKS1 Logo 3D — HIMA Akuntansi S1 UNAIR
 *
 * The logo is a symmetric triangle (like letter A, no crossbar) whose LEFT leg
 * extends past the apex as a "flying arm" to the upper-right.
 *
 * Geometry (viewBox 0 0 100 100):
 *   Bottom-left  (12, 92)
 *   Bottom-right  (82, 92)
 *   Intersection  (47, 41)  — where right leg meets left leg line
 *   Tip           (72,  5)  — end of left leg extension
 *
 * Drawing order ensures the left leg visually passes OVER the right leg:
 *   1. Closed triangle path (behind)
 *   2. Full left-leg line   (in front, overlaying)
 *
 * Concentric strokes create the striped pattern:
 *   Yellow(24) → Blue(20) → Yellow(16) → Blue(12) → Yellow(8) → Blue(4)
 *   = yellow border, 3 blue stripes, 2 yellow gaps
 */
export default function Aks1Logo3D() {
  const stripes: [string, number][] = [
    ['#FACC15', 24],  // Yellow outer border
    ['#2563EB', 20],  // Blue stripe 1 (outermost)
    ['#FACC15', 16],  // Yellow gap 1
    ['#2563EB', 12],  // Blue stripe 2 (middle)
    ['#FACC15',  8],  // Yellow gap 2
    ['#2563EB',  4],  // Blue stripe 3 (innermost)
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.18] dark:opacity-[0.30]">
      <style>{`
        @keyframes logo-spin-y {
          from { transform: rotateY(0deg) rotateX(8deg); }
          to   { transform: rotateY(360deg) rotateX(8deg); }
        }
        .animate-logo-3d {
          animation: logo-spin-y 20s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      <div
        className="relative w-[600px] h-[600px] flex items-center justify-center animate-logo-3d"
        style={{ perspective: '1200px' }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <svg
            key={i}
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `translateZ(${i * 6}px)`,
              opacity: 1 - i * 0.15,
              filter: i === 0 ? 'drop-shadow(0 0 30px rgba(37,99,235,0.6))' : 'none',
            }}
          >
            {/*
              LAYER 1 — BEHIND
              Closed triangle: intersection → bottom-right → bottom-left → back to intersection
              Miter joins create sharp corners at both bottom vertices.
            */}
            {stripes.map(([color, width], j) => (
              <path
                key={`tri-${j}`}
                d="M 47 41 L 82 92 L 12 92 Z"
                stroke={color}
                strokeWidth={width}
                fill="none"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
              />
            ))}

            {/*
              LAYER 2 — IN FRONT
              Full left leg: bottom-left (12,92) → tip (72,5)
              This line is collinear with the triangle's left leg (12,92)→(47,41)
              but continues past the intersection to (72,5).
              Drawn AFTER the triangle, so its stripes overlay the right leg
              at the crossing point, creating the correct visual overlap.
              Butt linecap gives a clean perpendicular cut at the tip.
            */}
            {stripes.map(([color, width], j) => (
              <line
                key={`leg-${j}`}
                x1="12" y1="92"
                x2="72" y2="5"
                stroke={color}
                strokeWidth={width}
                strokeLinecap="butt"
              />
            ))}
          </svg>
        ))}
      </div>
    </div>
  );
}
