const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Ввели не верный значения';
};

const getRandomCoordinate = (min, max, decimals) => {
  if (min >= 0 && max > min) {
    const num = Math.random() * (max - min + 1) + min;
    return num.toFixed(decimals);
  }
  return 'Ввели не верный значения';
};

const getAvatar = () => {
  const randomNumber = '0${getRandomInt(1, 10)}'.slice(-2);
  return 'img/avatars/user' + randomNumber + '.png';
}; //avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.

const TITLE = [
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

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel']; //type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

const CHECKIN = ['12:00', '13:00', '14:00']; //checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

const CHECKOUT = ['12:00', '13:00', '14:00']; //checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

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

const getRandomElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const COUNT_ELEMENT= 10;

const createWizard = () => {
  const location = {
    lat: getRandomCoordinate(35.65, 35.7, 5),
    lng: getRandomCoordinate(139.7, 139.8, 5),
  };
  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getRandomElement(TITLE),
      price: getRandomInt(1000, 10000),
      address: "${location.lat}, ${location.lng}",
      type: getRandomElement(TYPE),
      rooms: getRandomInt(1, 5),
      quests: getRandomInt(1, 5),
      checkin: getRandomElement(CHECKIN),
      checkout: getRandomElement(CHECKOUT),
      features: getRandomElement(FEATURES),
      description:
        "В художественном произведении интерьер не просто показывает условия жизни персонажей...",
      photos: getRandomElement(PHOTOS),
      location,
    },
  };
};

const similarWizards = Array.from({ length: COUNT_ELEMENT }, createWizard);
