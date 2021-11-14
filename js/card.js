//константа названий типов здаваемого помещения
const HOUSE = {
  flat: 'Квартира ',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const popupForm = document.querySelector('#card').content.querySelector('.popup');

//генерируем раздел
const getCloneFeatures = (features, cloneFeatures) => {
  features.forEach((element) => {
    const feature = document.createElement('li');

    feature.classList.add('popup__feature', `popup__feature--${element}`);
    cloneFeatures.append(feature);
  });
};
//генерируем раздел
const getClonePhotos = (photos, clonePhotos, clonePhoto) => {
  photos.forEach((element) => {
    const photo = clonePhoto.cloneNode(true);

    photo.src = element;
    clonePhotos.append(photo);
  });
};

const creatArrElement =({author, offer}) => {
  //генератор наполнения
  const {
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    description,
    features,
    photos,
  } = offer;
  const {avatar} = author;
  //клонируем шаблон
  const clone = popupForm.cloneNode(true);
  //наполняем шаблон данными
  clone.querySelector('.popup__avatar').src = avatar;
  clone.querySelector('.popup__title').textContent = title;
  clone.querySelector('.popup__text--address').textContent = address;
  clone.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  clone.querySelector('.popup__type').textContent = HOUSE[type];
  clone.querySelector('.popup__text--capacity').textContent = `${rooms} комнат(ы) для ${guests} гостей(я)`;
  clone.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  clone.querySelector('.popup__description').textContent = description;
  const cloneFeatures = clone.querySelector('.popup__features');
  const clonePhotos = clone.querySelector('.popup__photos');
  const clonePhoto = clone.querySelector('.popup__photo');
  //проверяем раздел features на наличие данных
  if (!features) {
    cloneFeatures.remove();
  } else {
    cloneFeatures.innerHTML = '';
    getCloneFeatures(features, cloneFeatures);
  }
  //проверяем раздел photos на наличие данных
  if (!photos) {
    cloneFeatures.remove();
  } else {
    clonePhotos.innerHTML = '';
    getClonePhotos(photos, clonePhotos, clonePhoto);
  }
  //вставляем шаблон с данными в разметку
  return clone;
};

export { creatArrElement };
