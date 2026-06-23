export function pickRandomFlashcardTarget(
  totalCards: number,
  randomValue: number = Math.random(),
): number {
  if (!Number.isInteger(totalCards) || totalCards <= 0) return 0;

  const boundedRandom = Number.isFinite(randomValue)
    ? Math.min(Math.max(randomValue, 0), 1 - Number.EPSILON)
    : 0;

  return Math.floor(boundedRandom * totalCards);
}

export function buildFlashcardSpinSequence(
  activeIndex: number,
  targetIndex: number,
  totalCards: number,
  stepCount = 24,
): number[] {
  if (!Number.isInteger(totalCards) || totalCards <= 0) return [];
  if (totalCards === 1) return [0];

  const start = ((activeIndex % totalCards) + totalCards) % totalCards;
  const target = ((targetIndex % totalCards) + totalCards) % totalCards;
  const steps = Math.max(8, Math.floor(stepCount));
  const forwardDistance = (target - start + totalCards) % totalCards;
  const virtualDistance = (totalCards * 2) + forwardDistance;
  const sequence: number[] = [];

  for (let step = 1; step <= steps; step += 1) {
    const progress = step / steps;
    const easedProgress = 1 - ((1 - progress) ** 2.25);
    const virtualPosition = step === steps
      ? virtualDistance
      : Math.floor(virtualDistance * easedProgress);
    sequence.push((start + virtualPosition) % totalCards);
  }

  sequence[sequence.length - 1] = target;
  return sequence;
}
