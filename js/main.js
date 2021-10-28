import { generatingObject } from './data.js';
//поиск места вставки объявления и поиск шаблонна для вставки
const placeToInsert = document.querySelector('.map__canvas');
const cardPattern = document.querySelector('#card').content.querySelector('.popup');

//Склонируем шаблон
//const clonCardPattern = cardPattern.cloneNode(true);
//добавим шаблон в разметку
//placeToInsert.appendChild(clonCardPattern);

//подгружаем данные(генерируем)
const loadingData = generatingObject();
//вставка клонов

loadingData.forEach((element) => {
  const clonCardPattern = cardPattern.cloneNode(true);

  clonCardPattern.querySelector('.popup__avatar').src = element.author.avatar;
  clonCardPattern.querySelector('.popup__title').textContent = element.offer.title;
  clonCardPattern.querySelector('.popup__text--address').textContent = element.offer.address;
  clonCardPattern.querySelector('.popup__text--price').textContent = element.offer.price;
  clonCardPattern.querySelector('.popup__type').textContent = element.offer.type;
  clonCardPattern.querySelector('.popup__text--capacity').textContent = element.offer.rooms;
  clonCardPattern.querySelector('.popup__text--time').textContent = element.offer.checkin;
  clonCardPattern.querySelector('.popup__text--time').textContent = element.offer.checkout;
  clonCardPattern.querySelector('.popup__features').textContent = element.offer.features;
  clonCardPattern.querySelector('.popup__description').textContent = element.offer.description;
  clonCardPattern.querySelector('.popup__photos').src = element.offer.photos;
  clonCardPattern.querySelector('.popup__avatar').src = element.author.avatar;
  placeToInsert.appendChild(clonCardPattern);
});

 /* <template id="card">
    <article class="popup">
      <img src="img/avatars/user01.png" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <h3 class="popup__title">Уютное гнездышко для молодоженов</h3>
      <p class="popup__text popup__text--address">102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3</p>
      <p class="popup__text popup__text--price">5200 <span>₽/ночь</span></p>
      <h4 class="popup__type">Квартира</h4>
      <p class="popup__text popup__text--capacity">2 комнаты для 3 гостей</p>
      <p class="popup__text popup__text--time">Заезд после 14:00, выезд до 10:00</p>
      <ul class="popup__features">
        <li class="popup__feature popup__feature--wifi"></li>
        <li class="popup__feature popup__feature--dishwasher"></li>
        <li class="popup__feature popup__feature--parking"></li>
        <li class="popup__feature popup__feature--washer"></li>
        <li class="popup__feature popup__feature--elevator"></li>
        <li class="popup__feature popup__feature--conditioner"></li>
      </ul>
      <p class="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
      <div class="popup__photos">
        <img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья">
      </div>
    </article>
  </template>*/
