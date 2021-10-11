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
getRandomCoordinate(0, 10, 1);
//getRandomInt(0, 0.1);

  const TITLE = [
    "Световая симфония",
    "Карнавал текстур и красок",
    "Девичье гнездышко",
    "Приют всех муз",
    "Яркое отражение индивидуальности",
    "Романтика мегаполиса",
    "Дыхание природы",
    "Изящество классики, уют прованса",
    "Надежный приют",
  ];//title, строка — заголовок предложения. Придумайте самостоятельно.

  const ADDRESS = [

  ]; //address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

  const PRICE = getRandomInt(1000, 10000); //price, число — стоимость. Случайное целое положительное число.

  const TYPE = [
    "palace",
    "flat",
    "house",
    "bungalow",
    "hotel",
  ]; //type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

  const ROOMS = getRandomInt(1, 5);; //rooms, число — количество комнат. Случайное целое положительное число.

  const QUESTS = getRandomInt(1, 5);; //guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

  const CHECKIN = [
    "12:00",
    "13:00",
    "14:00",
  ]; //checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

  const CHECKOUT = [
    "12:00",
    "13:00",
    "14:00",
  ]; //checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

  const FEATURES = [
    "wifi",
    "dishwasher",
    "parking",
    "washer",
    "elevator",
    "conditioner",
  ]; //features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

  const DESCRIPTION = [
    "В художественном произведении интерьер не просто показывает условия жизни персонажей..."
  ]; //description, строка — описание помещения. Придумайте самостоятельно.

  const PHOTOS = [
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg."
  ]; //photos, массив строк — массив случайной длины из значений:
