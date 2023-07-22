import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';

export const OpenStreetMap = new OSM();

export const EsriWorldDarkGray = new XYZ({
  url:
    'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}' +
    '',
});

export const EsriWorldImagery = new XYZ({
  url:
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' +
    '',
});

export const cartodbDark = new XYZ({
  url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png' + '',
});
