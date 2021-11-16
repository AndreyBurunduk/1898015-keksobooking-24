
//функция генерирует случайные числа с указанием количество знаков после запятойс проверкой на вводимые значения
const getRandomInt = (min, max, decimals = 0) => {
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

const showErrorMsg = (message) => {
  const container = document.createElement('div');
  const SHOW_ERROR_TIME = 3000;

  container.style.zIndex = 999;
  container.style.position = 'fixed';
  container.style.left = 0;
  container.style.top = '10px';
  container.style.right = 0;
  container.style.margin = '0 auto';
  container.style.paddingTop = '20px';
  container.style.height = '80px';
  container.style.maxWidth = '600px';
  container.style.border = '4px solid red';
  container.style.borderRadius = '20px';
  container.style.fontSize = '30px';
  container.style.textAlign = 'center';
  container.style.backgroundColor = 'red';
  container.style.color = 'white';
  container.textContent = message;

  document.body.append(container);

  setTimeout(() => {
    container.remove();
  }, SHOW_ERROR_TIME);
};
// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}


function getRandomPositiveFloat(abc, bcd, digits = 0) {
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

export {
  getRandomInt,
  debounce, showErrorMsg,
  getRandomElement,
  randomNumber,
  debounce,
  getArray,
};
