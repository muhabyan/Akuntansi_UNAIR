export type SRSGrade = 1 | 2 | 3 | 4; // 1: Again, 2: Hard, 3: Good, 4: Easy

export interface SRSData {
  repetition: number;
  interval: number;
  easeFactor: number;
  nextReviewDate: number; // timestamp
}

export function calculateNextReview(grade: SRSGrade, currentData?: SRSData): SRSData {
  let { repetition = 0, interval = 0, easeFactor = 2.5 } = currentData || {};

  if (grade === 1) { // Lupa (Again)
    repetition = 0;
    interval = 1; // 1 minute in this custom impl, but SM2 normally means 1 day. We use timestamp minutes.
  } else if (grade === 2) { // Sulit (Hard)
    repetition = 0; // Reset or keep low
    interval = 10; // 10 minutes
  } else if (grade === 3) { // Baik (Good)
    if (repetition === 0) {
      interval = 1 * 24 * 60; // 1 day
    } else if (repetition === 1) {
      interval = 3 * 24 * 60; // 3 days
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetition++;
  } else if (grade === 4) { // Mudah (Easy)
    if (repetition === 0) {
      interval = 4 * 24 * 60; // 4 days
    } else if (repetition === 1) {
      interval = 7 * 24 * 60; // 7 days
    } else {
      interval = Math.round(interval * easeFactor * 1.3);
    }
    repetition++;
  }

  // Update Ease Factor for Good and Easy, decrease for Again and Hard
  if (grade === 1) easeFactor = Math.max(1.3, easeFactor - 0.2);
  if (grade === 2) easeFactor = Math.max(1.3, easeFactor - 0.15);
  if (grade === 3) easeFactor += 0.1;
  if (grade === 4) easeFactor += 0.15;

  const now = new Date().getTime();
  const nextReviewDate = now + interval * 60 * 1000;

  return {
    repetition,
    interval,
    easeFactor,
    nextReviewDate
  };
}
