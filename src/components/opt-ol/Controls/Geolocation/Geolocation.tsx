import { useContext, useEffect } from 'react';

import { Geolocation } from 'ol';

import { IMapContext, MapContext } from '../../Map/MapContext';

// https://openlayers.org/en/latest/examples/geolocation.html

export const TileLayer = () => {
  const { map, view } = useContext(MapContext) as IMapContext;

  useEffect(() => {
    if (!map) return;

    let geolocationControl = new Geolocation({
      trackingOptions: {
        enableHighAccuracy: true,
      },
      projection: view.getProjection(),
    });

    // map.addControl(geolocationControl);

    return () => {
      if (map) {
        // map.removeControl(geolocationControl);
      }
    };
  }, [map]);

  return null;
};
