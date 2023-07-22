import { StoreApi } from 'zustand';

import { scaleLineStoreType } from './scaleLineStore';

export const createScaleLineSlice = (
  set: StoreApi<scaleLineStoreType>['setState'],
  get: StoreApi<scaleLineStoreType>['getState']
): scaleLineStoreType => ({
  options: {
    bar: undefined,
    units: undefined,
  },

  updateInitialOptions: (options) =>
    set((state) => ({ ...state, options: { ...options } })),

  updateUnits: (unit) =>
    set((state) => ({ ...state, options: { ...state.options, units: unit } })),

  updateType: (bar) =>
    set((state) => ({ ...state, options: { ...state.options, bar: bar } })),
});
