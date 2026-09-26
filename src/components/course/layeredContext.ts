import { createContext, useContext } from 'react';

/**
 * True inside a 'section' block of a layered reading (Reading.layout 'layered'). Blocks rendered inside it switch
 * to the layered presentation: headerless callouts, source chips, stacked tables, narrower prose.
 */
export const LayeredContext = createContext(false);

export const useLayered = () => useContext(LayeredContext);

/**
 * True inside a boxed block of a layered reading (pendalaman, self-check, pembahasan). Layered pages allow one level
 * of boxing, so tables and callouts inside such a box render flat, without a border or background of their own.
 */
export const InsideBoxContext = createContext(false);

export const useInsideBox = () => useContext(InsideBoxContext);
