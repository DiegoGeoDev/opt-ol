import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { Options as OlScaleLineOptions, Units } from 'ol/control/ScaleLine';

import { createScaleLineSlice } from './scaleLineSlice';

export interface scaleLineStoreType {
  options: OlScaleLineOptions;
  updateInitialOptions: (options: OlScaleLineOptions) => void;
  updateUnits: (unit: Units) => void;
  updateType: (bar: boolean) => void;
}

export const useScaleLineStore = create<scaleLineStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        ...createScaleLineSlice(set, get),
      }),
      {
        name: 'scale-line-storage',
        // getStorage: () => sessionStorage,
      }
    )
  )
);
