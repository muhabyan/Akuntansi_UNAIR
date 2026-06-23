import { BrainCircuit, CheckCircle2, Keyboard, Layers3 } from 'lucide-react';
import type { StudyCard } from '../../types';
import FlashcardDeck from '../FlashcardDeck';

interface AkbiFlashcardWorkspaceProps {
  cards: StudyCard[];
}

export default function AkbiFlashcardWorkspace({ cards }: AkbiFlashcardWorkspaceProps) {
  return (
    <section className="akbi-flashcard-workspace" aria-labelledby="akbi-flashcard-title">
      <header className="akbi-flashcard-workspace__identity">
        <div>
          <p className="akbi-flashcard-workspace__kicker">AKBI · Studio Latihan Konsep</p>
          <h2 id="akbi-flashcard-title">Bangun penguasaan konsep secara bertahap</h2>
          <p>
            Baca pertanyaan, jawab dari ingatan, buka penjelasan, lalu tandai konsep yang sudah dikuasai.
            Status penguasaan hanya berlaku selama sesi ini dan tidak mengubah data akademik atau progres materi.
          </p>
        </div>
        <dl className="akbi-flashcard-workspace__metrics" aria-label="Ringkasan deck AKBI">
          <div>
            <dt>Total kartu</dt>
            <dd>{cards.length}</dd>
          </div>
          <div>
            <dt>Mode</dt>
            <dd>Sesi lokal</dd>
          </div>
          <div>
            <dt>Akses</dt>
            <dd>Keyboard</dd>
          </div>
        </dl>
      </header>

      <ol className="akbi-flashcard-workspace__steps" aria-label="Alur belajar flashcard">
        <li><BrainCircuit size={18} aria-hidden="true" /><span><strong>Ingat</strong> jawab sebelum membalik kartu.</span></li>
        <li><Layers3 size={18} aria-hidden="true" /><span><strong>Periksa</strong> bandingkan jawaban dengan penjelasan.</span></li>
        <li><CheckCircle2 size={18} aria-hidden="true" /><span><strong>Tandai</strong> konsep yang sudah benar-benar dikuasai.</span></li>
        <li><Keyboard size={18} aria-hidden="true" /><span><strong>Navigasi</strong> gunakan panah, Enter, atau Space.</span></li>
      </ol>

      <FlashcardDeck cards={cards} variant="akbi" />
    </section>
  );
}
