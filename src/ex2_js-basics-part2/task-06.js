function IteratingThroughPrimes(num) {
    if (num > 1000) {
        return alert('данные неверны');

    }
    if (num == 0 || num == 1) {
        return alert('составное число');

    }
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return alert('составное число');

        }
    }
    return alert('простое число');
}

module.exports = IteratingThroughPrimes;