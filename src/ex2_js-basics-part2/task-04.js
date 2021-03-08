function IdenticalElements(arra) {

    let FirstElementArray = arra[0];
    for (let i = 0; i < arra.length; i++) {

        while (FirstElementArray !== arra[i]) {

            return false;
        }
    }
    return true;
}

module.exports = IdenticalElements;