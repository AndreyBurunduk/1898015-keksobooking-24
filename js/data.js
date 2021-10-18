import { getRandomInt, getRandomCoordinate } from './utils/util.js';
import { TITLES, TYPES, HOURS, FEATURES, PHOTOS, COUNT_ELEMENT } from './loading.js';

const getAvatar = () => {
  const randomNumber = `0${getRandomInt(1, 10)}`.slice(-2);
  return `img/avatars/user${randomNumber}.png`;
};

const getRandomElement = (elements) => {
  const arr = Math.floor(Math.random() * elements.length);
  return elements[arr];
};

const createObject = () => ({
  author: {
    avatar: getAvatar(),
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
    features: getRandomElement(FEATURES),
    description:
      'В художественном произведении интерьер не просто показывает условия жизни персонажей...',
    photos: getRandomElement(PHOTOS),
  },
  location: {
    lat: getRandomCoordinate(35.65, 35.7, 5),
    lng: getRandomCoordinate(139.7, 139.8, 5),
  },
});

export { COUNT_ELEMENT, createObject };
