function iteratingThroughAnArray(anArbitraryArray) {
    let totalNumberElements;
    totalNumberElements = anArbitraryArray.length;
    for (let i = 0; i < anArbitraryArray.length; ++i) {
        console.log(anArbitraryArray[i] + '=' + 'Общее колличество элементов массива' + '=' + totalNumberElements);
    }
    return;
}


module.exports = iteratingThroughAnArray;