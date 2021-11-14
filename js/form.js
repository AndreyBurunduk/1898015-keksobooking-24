const MIN_TITLE = 30;
const MAX_TITLE = 100;
const MAX_PRICE = 1000000;

const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const form = document.querySelector('.ad-form');
const adTitle = form.querySelector('#title');
const adPrice = form.querySelector('#price');
const adRoomNum = form.querySelector('#room_number');
const adCapacity = form.querySelector('#capacity');
const adType = form.querySelector('#type');
const adTimeIn = form.querySelector('#timein');
const adTimeOut = form.querySelector('#timeout');
const onTitleInput = () => {
  //валидация заголовка
  const value = adTitle.value.length;
  if (value < MIN_TITLE) {
    adTitle.setCustomValidity(`Ещё ${MIN_TITLE - value} симв.`);
  } else if (value > MAX_TITLE) {
    adTitle.setCustomValidity(`Удалите лишние ${value - MAX_TITLE} симв.`);
  } else {
    adTitle.setCustomValidity('');
  }
  adTitle.reportValidity();
};

const changeMinPrice = () => {
  adPrice.min = MIN_PRICE[adType.value];
  adPrice.placeholder = MIN_PRICE[adType.value];
};

const onChangePrice = () => changeMinPrice();

const onPriceInput = (evt) => {
  const value = evt.target.value;
  const typeValue = MIN_PRICE[adType.value];

  if (value < typeValue) {
    adPrice.setCustomValidity(`Минимальная цена ${typeValue}`);
  } else if (value > MAX_PRICE) {
    adPrice.setCustomValidity(`Максимальная цена ${MAX_PRICE}`);
  } else {
    adPrice.setCustomValidity('');
  }
  adPrice.reportValidity();
};

const checkCapacity = () => {
  const rooms = Number(adRoomNum.value);
  const guests = Number(adCapacity.value);

  if (rooms < guests) {
    adCapacity.setCustomValidity('Выберите другой вариант');
  } else if (rooms === MAX_TITLE  && guests !== 0) {
    adCapacity.setCustomValidity('Выберите другой вариант');
  } else if (guests === 0 && rooms !== MAX_TITLE ) {
    adCapacity.setCustomValidity('Выберите другой вариант');
  } else {
    adCapacity.setCustomValidity('');
  }
  adCapacity.reportValidity();
};

const onChangeTimeIn = () => adTimeOut.value = adTimeIn.value;
const onChangeTimeOut = () => adTimeIn.value = adTimeOut.value;

const syncTime = () => {
  onChangeTimeIn();
  onChangeTimeOut();
};

const onChangeCapacity = () => checkCapacity();

const syncFields = () => {
  changeMinPrice();
  syncTime();
};

const validateForm = () => {
  syncFields();

  adTitle.addEventListener('input', onTitleInput);

  adType.addEventListener('change', onChangePrice);
  adPrice.addEventListener('change', onPriceInput);

  adRoomNum.addEventListener('change', onChangeCapacity);
  adCapacity.addEventListener('change', onChangeCapacity);

  adTimeIn.addEventListener('change', onChangeTimeIn);
  adTimeOut.addEventListener('change', onChangeTimeOut);
};

export {
  changeMinPrice,
  checkCapacity,
  validateForm
};
