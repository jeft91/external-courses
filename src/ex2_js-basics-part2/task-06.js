function iteratingThroughPrimes(num) {
    if (num > 1000) {
        return console.log('данные неверны');

    }
    if (num === 0 || num === 1) {
        return console.log('составное число');

    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return console.log('составное число');

        }
    }
    return console.log('простое число');
}

module.exports = iteratingThroughPrimes;