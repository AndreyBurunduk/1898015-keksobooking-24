const getRandomIntFromRange = function(min, max) {
    if (min >= 0 && max > min) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return 'Вdели неверные значения';
};

getRandomIntFromRange(0, 1);
