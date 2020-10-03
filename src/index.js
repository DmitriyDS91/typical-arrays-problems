
exports.min = function min (array) {
    if (array === undefined || array == 0) return 0;
    function compareNumbers(a, b) {
        return a - b;
    }
    array.sort(compareNumbers);
    return array[0];
}

exports.max = function max (array) {
    if (array === undefined || array == 0) return 0;
    function compareNumbers(a, b) {
        return a - b;
    }
    array.sort(compareNumbers);
    return array[array.length - 1];
}

exports.avg = function avg (array) {
    if (array === undefined || array == 0) return 0;
    let sum = 0;
    for (let i = 0; i <= array.length - 1; i++) sum = sum + array[i];
    return sum / array.length;
}
