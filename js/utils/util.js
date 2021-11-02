//функция генерирует случайные целые числа с проверкой на вводимые значения
const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Ввели не верный значения';
};
//функция генерирует случайные числа с указанием количество знаков после запятойс проверкой на вводимые значения
const getRandomCoordinate = (min, max, decimals) => {
  if (min >= 0 && max > min) {
    const num = Math.random() * (max - min + 1) + min;
    return num.toFixed(decimals);
  }
  return 'Ввели не верный значения';
};
//функция возращает рандомный элемент из массива
const getRandomElement = (elements) => {
  const arr = Math.floor(Math.random() * elements.length);
  return elements[arr];
};
//рандом число для картинки
const randomNumber = () => {
  const id = getRandomInt(1, 10);
  if (id <10)
  {return (`0${id}`);
  } else {
    (`${id}`);
  }
};
//рандом массив
function getArray(features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomInt(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomInt(0, maxLength - 1);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}
//////////////////////////////////////////////
// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger(abc, bcd) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(abc), Math.abs(bcd)));
  const upper = Math.floor(Math.max(Math.abs(abc), Math.abs(bcd)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}
getRandomPositiveInteger();

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat(abc, bcd, digits = 1) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max
  const lower = Math.min(Math.abs(abc), Math.abs(bcd));
  const upper = Math.max(Math.abs(abc), Math.abs(bcd));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower) + lower;

  // И в конце с помощью метода toFixed любого числа в JavaScript
  // указать требуемое количество знаков после точки
  return result.toFixed(digits);
}
getRandomPositiveFloat();

export { getRandomInt, getRandomCoordinate, getRandomElement, randomNumber, getArray };
