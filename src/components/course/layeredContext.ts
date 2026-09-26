import { createContext, useContext } from 'react';

/**
 * True inside a 'section' block of a layered reading (Reading.layout 'layered'). Blocks rendered inside it switch
 * to the layered presentation: headerless callouts, source chips, stacked tables, narrower prose.
 */
export const LayeredContext = createContext(false);

export const useLayered = () => useContext(LayeredContext);
