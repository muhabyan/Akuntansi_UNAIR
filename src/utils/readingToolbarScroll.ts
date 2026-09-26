export type MobileToolbarDirection = 'up' | 'down' | null;

export type MobileToolbarScrollState = {
  direction: MobileToolbarDirection;
  distance: number;
};

export const initialMobileToolbarScrollState: MobileToolbarScrollState = {
  direction: null,
  distance: 0,
};

export function advanceMobileToolbarScroll(
  state: MobileToolbarScrollState,
  deltaY: number,
  scrollY: number,
): { state: MobileToolbarScrollState; action: 'show' | 'hide' | null } {
  if (scrollY <= 80) return { state: initialMobileToolbarScrollState, action: 'show' };
  if (Math.abs(deltaY) < 2) return { state, action: null };

  const direction: Exclude<MobileToolbarDirection, null> = deltaY < 0 ? 'up' : 'down';
  const distance = (state.direction === direction ? state.distance : 0) + Math.abs(deltaY);
  const threshold = direction === 'up' ? 48 : 36;

  if (distance >= threshold) {
    return {
      state: { direction, distance: 0 },
      action: direction === 'up' ? 'show' : 'hide',
    };
  }

  return { state: { direction, distance }, action: null };
}
