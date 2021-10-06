const getRandomInt = function(min, max) {
    if (min >= 0 && max > min) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return 'Ввели неверные значения';
};

getRandomInt(0, 0.1);

const getRandomCoordinate = function(min, max, decimals) {
    if (min >= 0 && max > min) {
        let coordinates = Math.random() * (max - min + 1) + min;
        return coordinates.toFixed(decimals);
    }
    return 'Ввели не верный значения';
}

getRandomCoordinate(0, 10, 1)
