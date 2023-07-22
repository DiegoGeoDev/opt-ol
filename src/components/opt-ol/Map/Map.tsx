import { useEffect, useState } from 'react';

import { Map as OlMap, View } from 'ol';
import { defaults as defaultControls } from 'ol/control';
import { fromLonLat } from 'ol/proj';

import { IMapContext, MapContext } from './MapContext';

import 'ol/ol.css';
import '../opt-ol.css';

interface IMapProps {
  children?: React.ReactNode;
  zoom: number;
  center: number[];
}

function Map({ children, zoom, center }: IMapProps) {
  const [map, setMap] = useState<OlMap | null>(null);
  const [view, setView] = useState<View | null>(null);

  // FIRST RENDER
  useEffect(() => {
    let viewObject = new View({
      zoom,
      center: fromLonLat(center),
      maxZoom: 20,
    });

    let options = {
      view: viewObject,
      layers: [],
      controls: defaultControls(),
      overlays: [],
    };

    let mapObject = new OlMap(options);
    mapObject.setTarget('map');

    setView(viewObject);
    setMap(mapObject);

    return () => mapObject.setTarget(undefined);
  }, []);

  // ZOOM CHANGE
  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]);

  // CENTER CHANGE
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(fromLonLat(center));
  }, [center]);

  return (
    <MapContext.Provider value={{ map, view } as IMapContext}>
      <div id="map" className="opt-ol-map">
        {children}
      </div>
    </MapContext.Provider>
  );
}

export { Map };
