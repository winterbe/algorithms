module.exports = function selectionSort(a) {
    for (var j = 0; j < a.length - 1; j++) {
        let k = j;
        for (var i = j + 1; i < a.length; i++) {
            if (a[i] < a[k]) {
                k = i;
            }
        }
        let tmp = a[j];
        a[j] = a[k];
        a[k] = tmp;
    }
};
