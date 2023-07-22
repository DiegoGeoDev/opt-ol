import { useContext, useEffect } from 'react';

import { Tile } from 'ol/layer';
import { OSM, XYZ } from 'ol/source';

import { IMapContext, MapContext } from '../Map/MapContext';

interface ITileLayerProps {
  source: OSM | XYZ;
  zIndex: number;
}

export const TileLayer = ({ source, zIndex = 0 }: ITileLayerProps) => {
  const { map } = useContext(MapContext) as IMapContext;

  useEffect(() => {
    if (!map) return;

    let tileLayer = new Tile({
      source,
      zIndex,
    });
    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);

    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);

  return null;
};
