import { pageForm } from './page-State.js';
const MIN_TITLE = 30;
const MAX_TITLE = 100;
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
const typeValue = form.querySelector('#type');
const adTimeIn = form.querySelector('#timein');
const adTimeOut = form.querySelector('#timeout');

//валидация заголовка
adTitle.addEventListener('input', () => {
  const value = adTitle.value.length;
  if (value < MIN_TITLE) {
    adTitle.setCustomValidity(`Ещё ${MIN_TITLE - value} симв.`);
  } else if (value > MAX_TITLE) {
    adTitle.setCustomValidity(`Удалите лишние ${value - MAX_TITLE} симв.`);
  } else {
    adTitle.setCustomValidity('');
  }
  adTitle.reportValidity();
});
// соотношение комна с гостями
adRoomNum.addEventListener('change', (evt) => {
  const index = evt.target.value === '100' ? '0' : evt.target.value;
  for (let i = 0; i < adCapacity.length; i++) {
    adCapacity[i].disabled = true;
    if (adCapacity[i].value === index) {
      adCapacity[i].disabled = false;
    }
    if (adCapacity[i].value <= index && adCapacity[i].value > 0) {
      adCapacity[i].disabled = false;
    }
  }
});
// Валидация цены за ночь по типу жилья
typeValue.addEventListener('change', (evt) => {
  const minPrice = MIN_PRICE[evt.target.value];
  adPrice.min = minPrice;
  adPrice.placeholder = minPrice.toString();
});

// Синхронизация времени заезда и выезда
adTimeIn.addEventListener('change', (evt) => {
  adTimeOut.value = evt.target.value;
});
adTimeOut.addEventListener('change', (evt) => {
  adTimeIn.value = evt.target.value;
});

export const setFormSend = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    formData;
    pageForm(false);
  });
};
