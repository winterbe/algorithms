module.exports = function insertionSort(a) {
    for (var j = 1; j < a.length; j++) {
        let val = a[j];
        let i = j - 1;
        while (i >= 0 && a[i] > val) {
            a[i + 1] = a[i];
            i -= 1;
        }
        a[i + 1] = val;
    }
};
