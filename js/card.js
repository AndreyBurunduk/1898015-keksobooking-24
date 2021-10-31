//поиск места вставки объявления и поиск шаблонна для вставки
const placeToInsert = document.querySelector('#map__canvas');
const cardPattern = document.querySelector('#card').content.querySelector('.popup');
//константа названий типов здаваемого помещения
const HOUSE = {
  flat: 'Квартира ',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const generatPopupElement =({offer, author}) => {
  const newElement = cardPattern.cloneNode(true);

  newElement.querySelector('.popup__title').textContent = offer.title;
  newElement.querySelector('.popup__text--address').textContent = offer.address;
  newElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  newElement.querySelector('.popup__type').textContent = HOUSE[offer.type];
  newElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  newElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.HOURS}, выезд до ${offer.HOURS}`;
  newElement.querySelector('.popup__features').innerHTML = '';
  newElement.querySelector('.popup__features').innerHTML =offer.features.map((feature) => (
    `<li class="popup__feature popup__feature--${feature}"></li>`
  )).join('');
  newElement.querySelector('.popup__description').textContent = offer.description;
  newElement.querySelector('.popup__photos').innerHTML = '';
  newElement.querySelector('.popup__photos').innerHTML = offer.photos.map((photo) => (
    `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`
  )).join('');
  newElement.querySelector('.popup__avatar').src = author.avatar;

  return newElement;
};

export const drawNotices = (data) => {
  data.forEach((item) => {
    placeToInsert.appendChild(generatPopupElement(item));
  });
};
