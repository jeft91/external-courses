function iteratingThroughAnArray(anArbitraryArray) {
    let evenNumbers = [];
    let oddNumbers = [];
    let zero = [];
    let number = [];
    let summ = [];
    for (i = 0; i < anArbitraryArray.length; i++) {
        if ((typeof anArbitraryArray[i]) === 'number' && anArbitraryArray[i] !== 0) {
            number.push(anArbitraryArray[i]);
        }
        else if (anArbitraryArray[i] === 0) {
            zero.push(anArbitraryArray[i]);
        }
    }
    for (i = 0; i < number.length; i++) {
        if (number[i] % 2 !== 0) {
            oddNumbers.push(number[i]);
        }
        else if (number[i] % 2 === 0) {
            evenNumbers.push(number[i]);
        }
    }
    summ = 'чётных:' + evenNumbers.length + 'нечётных:' + oddNumbers.length + 'нулей:' + zero.length;
    return console.log(summ);
}

module.exports = iteratingThroughAnArray;
