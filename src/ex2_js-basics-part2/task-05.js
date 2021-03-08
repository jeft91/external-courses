function MaxValue(arr) {
    let newArray = [];
    let max;
    for (i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            newArray.push(arr[i]);

        }

    }

    max = Math.max.apply(null, newArray);

    return alert(max);

}

module.exports = MaxValue;