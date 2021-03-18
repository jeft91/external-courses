function numberStringCheck(numOrString) {
    if (Number.isNaN(numOrString)) {
        return undefined;
    }
    if ((typeof numOrString) === 'string' || (typeof numOrString) === 'number') {
        return (typeof numOrString);
    }
    return undefined;
}

module.exports = numberStringCheck;