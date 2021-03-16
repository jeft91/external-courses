function iteratingThroughAnArray(AnArbitraryArray) {

    let totalNumberElements;
    totalNumberElements = AnArbitraryArray.length;

    for (let i = 0; i < AnArbitraryArray.length; ++i) {

        console.log(AnArbitraryArray[i] + '=' + 'Общее колличество элементов массива' + '=' + totalNumberElements);
    }
    return;
}


module.exports = iteratingThroughAnArray;