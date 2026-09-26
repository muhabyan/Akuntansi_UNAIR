import { createContext, useContext } from 'react';
import type { Reading } from '../../types';

/**
 * The shared reading frame: between 768 and 1375px the article keeps clear of the floating launchers (a left inset,
 * plus a right inset below 1024px where there is no outline column), and below 1024px tables use the stacked view,
 * since a desktop reading table needs 42rem. Layered readings always use it; the courses listed here opt in for
 * their other readings.
 */
export const SHARED_FRAME_COURSES: ReadonlySet<string> = new Set<string>();

export const usesSharedFrame = (reading: Pick<Reading, 'layout'>, courseCode: string) =>
  reading.layout === 'layered' || SHARED_FRAME_COURSES.has(courseCode);

/** Class on `.reading-layout` that switches the frame's CSS on (src/index.css). */
export const SHARED_FRAME_CLASS = 'reading-layout--shared-frame';

/** True inside a reading that uses the shared frame: its tables render the stacked view below 1024px. */
export const SharedFrameContext = createContext(false);

export const useSharedFrame = () => useContext(SharedFrameContext);
