// AKA201 practice items written for the old TM01–TM07 sequence. After the layered rebuild most of them are tagged
// with a TM whose topic has moved (ethics was TM2, now TM03; assertions TM3 → TM05; opinions TM4 → TM06; materiality
// TM5 → TM07) or that left the pre-UTS half (evidence TM6, analytical procedures TM7). They stay in the generated
// files and are filtered out here until the practice set aligned with the new TMs replaces them. TM08–TM14 items are
// untouched.

/** Old TM01–TM07 flashcards whose content still matches the new TM01. */
const KEPT_FLASHCARD_IDS = new Set(['aka201-tm01-01', 'aka201-tm01-02', 'aka201-tm01-03', 'aka201-tm01-04']);

/** The one old TM01 quiz item (demand for audit, information risk) matches the new TM01; TM2–TM7 items do not. */
export const isAka201QuizVisible = (item: { tm?: number }) => (item.tm ?? 0) === 1 || (item.tm ?? 0) >= 8;

export const isAka201FlashcardVisible = (card: { id: string; tm?: number }) =>
  (card.tm ?? 0) >= 8 || KEPT_FLASHCARD_IDS.has(card.id);

// The bank has one old pre-UTS case, scoped "TM 2–5" (independence plus materiality) for the old sequence; the bank
// registry leaves it out (src/data/banksoal/nonPte.ts).
