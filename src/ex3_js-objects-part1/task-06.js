function deepClone(theObject) {
    let clone = {};
    for (let prop in theObject) {
        if (typeof theObject[prop] === 'object') {
            clone[prop] = deepClone(theObject[prop]);
        } else {
            clone[prop] = theObject[prop];
        }
    }
    return clone;
}
module.exports = deepClone;