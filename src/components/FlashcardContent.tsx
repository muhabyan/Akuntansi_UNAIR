// =============================================================
// src/components/FlashcardContent.tsx
// Flashcard interaktif 3D (flip saat hover di desktop / tap di mobile).
// =============================================================
import { useState } from 'react';
import { Lightbulb, LayoutDashboard } from 'lucide-react';
import type { Course, Flashcard } from '../types';

const FALLBACK: Flashcard[] = [
  { title: 'Definisi Aset', back: 'Sumber daya yang dikuasai entitas akibat peristiwa masa lalu, dengan manfaat ekonomi di masa depan.' },
  { title: 'Persamaan Akuntansi', back: 'Aset = Liabilitas + Ekuitas — dasar pencatatan berpasangan (double-entry).' },
];

export default function FlashcardContent({ course }: { course: Course }) {
  const cards = course.flashcards && course.flashcards.length > 0 ? course.flashcards : FALLBACK;
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => setFlipped((p) => ({ ...p, [i]: !p[i] }));

  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold text-slate-100 flex items-center gap-3">
          <Lightbulb className="text-gold" /> Rangkuman Flashcard
        </h3>
        <p className="text-slate-400 text-sm mt-2">Arahkan kursor (hover) atau ketuk kartu untuk melihat jawaban.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => toggle(idx)}
            className={`flip-card group h-48 perspective-1000 cursor-pointer ${flipped[idx] ? 'is-flipped' : ''}`}
          >
            <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
              {/* Depan */}
              <div className="absolute inset-0 w-full h-full bg-navy-800 border border-navy-500 rounded-2xl flex items-center justify-center p-6 text-center shadow-lg backface-hidden">
                <h4 className="text-xl font-bold text-gold">{card.title}</h4>
                <div className="absolute bottom-4 right-4 text-slate-600">
                  <LayoutDashboard size={20} />
                </div>
              </div>
              {/* Belakang */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center p-6 text-center shadow-lg backface-hidden rotate-y-180">
                <p className="text-navy-900 font-medium leading-relaxed">{card.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
