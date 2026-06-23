export interface FlashcardTimerRegistry {
  add: (timeoutId: number) => void;
  clear: () => void;
  size: () => number;
}

export function createFlashcardTimerRegistry(
  clearTimeoutFn: (timeoutId: number) => void,
): FlashcardTimerRegistry {
  let timeoutIds: number[] = [];

  return {
    add(timeoutId) {
      timeoutIds.push(timeoutId);
    },
    clear() {
      timeoutIds.forEach((timeoutId) => clearTimeoutFn(timeoutId));
      timeoutIds = [];
    },
    size() {
      return timeoutIds.length;
    },
  };
}
