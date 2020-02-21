exports.min = function min(array) {
    if (typeof array === 'undefined' || array.length === 0) return 0;

    let res = array[0];

    for (let i = 1; i < array.length; i++) {
        if (res > array[i]) {
            res = array[i];
        }
    }
    return res;
}


exports.max = function max(array) {
    if (typeof array === 'undefined' || array.length === 0) return 0;
    let res = array[0];

    for (let i = 1; i < array.length; i++) {
        if (res < array[i]) {
            res = array[i];
        }
    }
    return res;
}

exports.avg = function avg(array) {
    return (typeof array === 'undefined' || array.length === 0) ? 0 : array.reduce((p, n) => (p + n), 0) / array.length;
}