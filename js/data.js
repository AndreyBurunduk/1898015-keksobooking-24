import { getRandomInt, getRandomCoordinate } from './utils/util.js';
import { TITLES, TYPES, HOURS, FEATURES, PHOTOS, DESCRIPTION } from './loading.js';

const getAuthor = () => {
  const randomNumber = `0${getRandomInt(1, 10)}`.slice(-2);
  return { avatar: `img/avatars/user${randomNumber}.png` };
};

const getRandomElement = (elements) => {
  const arr = Math.floor(Math.random() * elements.length);
  return elements[arr];
};

const getRandomLocation = () => ({
  lat: getRandomCoordinate(35.65, 35.7, 5),
  lng: getRandomCoordinate(139.7, 139.8, 5),
});

const  getOffer = () => ({
  title: getRandomElement(TITLES),
  price: getRandomInt(1000, 10000),
  address: `${location().lat} - ${location().lng}`,
  type: getRandomElement(TYPES),
  rooms: getRandomInt(1, 5),
  quests: getRandomInt(1, 5),
  checkin: getRandomElement(HOURS),
  checkout: getRandomElement(HOURS),
  features: [getRandomElement(FEATURES)],
  description:getRandomElement(DESCRIPTION),
  photos: getRandomElement(PHOTOS),
});

const createObj = () => ({
  author: getAuthor(),
  offer: getOffer(),
  location: getRandomLocation(),
});

//модуль генерации данных рандома
export const genObjAds = function (COUNT_ELEMENT) {
  return new Array(COUNT_ELEMENT).fill('').map(() => (createObj()));
};
