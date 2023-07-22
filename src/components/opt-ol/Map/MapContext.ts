import { createContext } from 'react';

import { Map, View } from 'ol';

export interface IMapContext {
  map: Map;
  view: View;
}

export const MapContext = createContext<IMapContext | null>(null);
