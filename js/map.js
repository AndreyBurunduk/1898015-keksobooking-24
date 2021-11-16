import { makeActive} from './activation.js';
import { creatArrElement } from './card.js';
import { setFilterListener } from './filter.js';
import { getData } from './api.js';
import { showErrorMsg } from './utils/util.js';

const MAP_POSITION = {
  LAT: 35.682272.toFixed(5),
  LNG: 139.753137.toFixed(5),
  ZOOM: 13,
};
const MainIcon = {
  WIDTH: 52,
  HEIGHT: 52,
  URL: './img/main-pin.svg',
};

const Icon = {
  WIDTH: 40,
  HEIGHT: 40,
  URL: './img/pin.svg',
};

const AMOUNT = 10;
const ERROR_MESSAGE = 'Ошибка загрузки данных';
const TILE_LAYER = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const address = document.querySelector('#address');
const mapCanvas = document.querySelector('.map__canvas');
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const mainPinIcon = L.icon({
  iconUrl: MainIcon.URL,
  iconSize: [MainIcon.WIDTH, MainIcon.HEIGHT],
  iconAnchor: [MainIcon.WIDTH / 2, MainIcon.HEIGHT],
});

const mainPinMarker = L.marker(
  { lat: MAP_POSITION.LAT, lng: MAP_POSITION.LNG },
  { draggable: true, icon: mainPinIcon },
);

const map = L.map(mapCanvas).setView(
  { lat: MAP_POSITION.LAT, lng: MAP_POSITION.LNG},
  MAP_POSITION.ZOOM);

L.tileLayer(TILE_LAYER,{attribution: ATTRIBUTION}).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const setAddressValue = () => {
  address.value = `${MAP_POSITION.LAT}, ${MAP_POSITION.LNG}`;
};

const setDefault = () => {
  mainPinMarker.setLatLng({
    lat: MAP_POSITION.LAT,
    lng: MAP_POSITION.LNG,
  });
  map.setView({
    lat: MAP_POSITION.LAT,
    lng: MAP_POSITION.LNG,
  }, MAP_POSITION.ZOOM);
  map.closePopup();
  setAddressValue();
};

const onAddressChange = (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

const createMarker = (point) => {
  const { lat, lng } = point.location;

  const icon = L.icon({
    iconUrl: Icon.URL,
    iconSize: [Icon.WIDTH, Icon.HEIGHT],
    iconAnchor: [Icon.WIDTH / 2, Icon.HEIGHT],
  });

  L.marker({ lat, lng }, { icon }).addTo(markerGroup).bindPopup(creatArrElement(point));
};

const clearMarkers = () => markerGroup.clearLayers();

const renderMarkers = (points) => points.forEach(createMarker);

const onDataLoad = (ads) => {
  makeActive(mapFilters, 'map_filters');
  renderMarkers(ads.slice(0, AMOUNT));
  setFilterListener(ads);
};

const onDataFail = () => {
  showErrorMsg(ERROR_MESSAGE);
};

const initMap = () => {
  setDefault();
  map.whenReady(() => {
    makeActive(adForm, 'ad-form');
    getData(onDataLoad, onDataFail);
  });
  mainPinMarker.addTo(map);
  mainPinMarker.on('move', onAddressChange);
};
export { clearMarkers, renderMarkers, initMap, setDefault };
