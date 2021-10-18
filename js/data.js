import { getRandomInt, getRandomCoordinate } from './utils/util.js';

const TITLES = [
  'Световая симфония',
  'Карнавал текстур и красок',
  'Девичье гнездышко',
  'Приют всех муз',
  'Яркое отражение индивидуальности',
  'Романтика мегаполиса',
  'Дыхание природы',
  'Изящество классики, уют прованса',
  'Надежный приют',
]; //title, строка — заголовок предложения. Придумайте самостоятельно.

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel']; //type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

const HOURS = ['12:00', '13:00', '14:00']; //checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]; //features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.',
]; //photos, массив строк — массив случайной длины из значений:

const getAvatar = () => {
  const randomNumber = `0${getRandomInt(1, 10)}`.slice(-2);
  return `img/avatars/user${randomNumber}.png`;
};

const getRandomElement = (elements) => {
  const arr = Math.floor(Math.random() * elements.length);
  return elements[arr];
};

const COUNT_ELEMENT = 10;

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
