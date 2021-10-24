//import { createObject } from './data.js';

//const COUNT_ELEMENT = 10;

//Array.from({ length: COUNT_ELEMENT }, createObject);

//поиск места вставки объявления и поиск шаблонна для вставки
const placeToInsert = document.querySelector('.map__canvas');
const cardPattern = document.querySelector('#card').content.querySelector('.popup');
//Склонируем шаблон
const clonCardPattern = cardPattern.cloneNode(true);
//добавим шаблон в разметку
placeToInsert.appendChild(clonCardPattern);
