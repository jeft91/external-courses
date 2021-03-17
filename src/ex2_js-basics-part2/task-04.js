function identicalElements(arr) {
    let firstElementArray = arr[0];
    for (let i = 0; i < arr.length; i++) {
        while (firstElementArray !== arr[i]) {
            return false;
        }
    }
    return true;
}

module.exports = identicalElements;