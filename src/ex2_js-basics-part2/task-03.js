function IteratingThroughAnArray(AnArbitraryArray) {
    let EvenNumbers = [];
    let OddNumbers = [];
    let zero = [];
    let number = [];
    let summ = [];

    for (i = 0; i < AnArbitraryArray.length; i++) {
        if ((typeof AnArbitraryArray[i]) == 'number' && AnArbitraryArray[i] !== 0) {
            number.push(AnArbitraryArray[i]);
        }

        else if (AnArbitraryArray[i] == 0) {
            zero.push(AnArbitraryArray[i]);
        }
    }

    for (i = 0; i < number.length; i++) {
        if (number[i] % 2 != 0) {
            OddNumbers.push(number[i]);
        }

        else if (number[i] % 2 == 0) {
            EvenNumbers.push(number[i]);
        }
    }
    summ = 'чётных:' + EvenNumbers.length + 'нечётных:' + OddNumbers.length + 'нулей:' + zero.length;
    return console.log(summ);
}

module.exports = IteratingThroughAnArray;
