import { Map, ScaleLine, TileLayer } from '../../components/opt-ol';

import { OpenStreetMap } from '../../components/opt-ol/sources';

function ScaleLinePage() {
  return (
    <main className="flex flex-1 overflow-y-auto">
      <Map zoom={6} center={[-50.017637, -24.707493]}>
        <ScaleLine
          canChangeOptions={true}
          className="left-2 top-32"
          bar={true}
          units="imperial"
        />
        <TileLayer source={OpenStreetMap} zIndex={0} />
      </Map>
    </main>
  );
}

export { ScaleLinePage };
