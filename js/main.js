import { generatingObject } from './data.js';
//поиск места вставки объявления и поиск шаблонна для вставки
const placeToInsert = document.querySelector('.map__canvas');
const cardPattern = document.querySelector('#card').content.querySelector('.popup');

//Склонируем шаблон
//const clonCardPattern = cardPattern.cloneNode(true);
//добавим шаблон в разметку
//placeToInsert.appendChild(clonCardPattern);

//подгружаем данные(генерируем)
const loadingData = generatingObject;
//вставка клонов

loadingData.forEach(() =>{
  const clonCardPattern = cardPattern.cloneNode(true);
  placeToInsert.appendChild(clonCardPattern);
});
