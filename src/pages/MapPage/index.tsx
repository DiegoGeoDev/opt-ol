import { Map, TileLayer } from '../../components/opt-ol';

import { OpenStreetMap } from '../../components/opt-ol/sources';

function MapPage() {
  return (
    <main className="flex flex-1 overflow-y-auto">
      <Map zoom={6} center={[-50.017637, -24.707493]}>
        <TileLayer source={OpenStreetMap} zIndex={0} />
      </Map>
    </main>
  );
}

export { MapPage };
