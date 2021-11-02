import { getRandomInt, getRandomCoordinate, getRandomElement, randomNumber, getArray } from './utils/util.js';
import { TITLES, TYPES, HOURS, FEATURES, PHOTOS, DESCRIPTION } from './loading.js';

//создание объекта
const createObject = () => ({
  author: {
    avatar: `img/avatars/user${randomNumber()}.png`,
  },
  offer: {
    title: getRandomElement(TITLES),
    price: getRandomInt(1000, 10000),
    address: `${location.lat}, ${location.lng}`,
    type: getRandomElement(TYPES),
    rooms: getRandomInt(1, 5),
    quests: getRandomInt(1, 5),
    checkin: getRandomElement(HOURS),
    checkout: getRandomElement(HOURS),
    features: getArray(FEATURES),
    description: getRandomElement(DESCRIPTION),
    photos: getArray(PHOTOS),
  },
  location: {
    lat: getRandomCoordinate(35.65, 35.7, 5),
    lng: getRandomCoordinate(139.7, 139.8, 5),
  },
});

export const getArrElement = (COUNT_ELEMENT = 1) =>
  Array.from({ length: COUNT_ELEMENT }, createObject);
