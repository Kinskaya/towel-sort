
// You should implement your task here.

module.exports = function towelSort (arr) {
    if (arr === undefined) {
        return [];
    }
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        if (i % 2 !== 0) {
            a = arr[i].reverse()
        }
        sum = sum.concat(a);
    }
    return sum;
}
