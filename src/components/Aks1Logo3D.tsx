import React from 'react';

export default function Aks1Logo3D() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.20] dark:opacity-[0.35]">
      <style>
        {`
          @keyframes logo-spin-y {
            from { transform: rotateY(0deg) rotateX(8deg); }
            to { transform: rotateY(360deg) rotateX(8deg); }
          }
          .animate-logo-3d {
            animation: logo-spin-y 20s linear infinite;
            transform-style: preserve-3d;
          }
        `}
      </style>
      
      <div 
        className="relative w-[600px] h-[600px] flex items-center justify-center animate-logo-3d"
        style={{ perspective: '1200px' }}
      >
        {/* Layer multiple SVGs slightly separated on the Z axis to create true 3D volume */}
        {[0, 1, 2, 3, 4].map((i) => (
          <svg 
            key={i}
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-full h-full"
            style={{ 
              transform: `translateZ(${i * 6}px)`,
              opacity: 1 - i * 0.15,
              filter: i === 0 ? 'drop-shadow(0 0 30px rgba(37, 99, 235, 0.6))' : 'none'
            }}
          >
            {/* 
              The flat top and flat flying arm tips are created by clipping the miter spikes.
              This exactly matches the HIMA logo where the stripes run exposed into the flat cut.
            */}
            <defs>
              <clipPath id="flat-top">
                <rect x="0" y="15" width="100" height="85" />
              </clipPath>
            </defs>

            {/* 
              Concentric Stroke Trick:
              By layering decreasing stroke widths on the exact same centerlines,
              we mathematically guarantee perfect nested stripes (3 blue, 2 yellow gaps, yellow borders)
              with flawless branching intersections where the flying arm meets the triangle.
            */}
            <g clipPath="url(#flat-top)" strokeLinejoin="miter" strokeLinecap="butt" fill="none">
              {/* Yellow Outer Border */}
              <g stroke="#FACC15" strokeWidth="28">
                <path d="M 65 45 L 80 5" />
                <path d="M 20 85 L 50 5 L 80 85 Z" />
              </g>
              {/* Blue Outer (Forms Stripe 1 and 3) */}
              <g stroke="#2563EB" strokeWidth="20">
                <path d="M 65 45 L 80 5" />
                <path d="M 20 85 L 50 5 L 80 85 Z" />
              </g>
              {/* Yellow Middle (Forms the two yellow gaps) */}
              <g stroke="#FACC15" strokeWidth="12">
                <path d="M 65 45 L 80 5" />
                <path d="M 20 85 L 50 5 L 80 85 Z" />
              </g>
              {/* Blue Inner (Forms Stripe 2 - the center stripe) */}
              <g stroke="#2563EB" strokeWidth="4">
                <path d="M 65 45 L 80 5" />
                <path d="M 20 85 L 50 5 L 80 85 Z" />
              </g>
            </g>
          </svg>
        ))}
      </div>
    </div>
  );
}
