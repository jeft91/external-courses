function maxValue(arr) {
    let max;
    max = Math.max.apply(null, arr);
    return console.log(max);
}

module.exports = maxValue;