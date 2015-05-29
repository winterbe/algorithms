module.exports = function (v, a) {
    // assume a is sorted

    function binarySearch(v, a, i, j) {
        if (i === j) {
            return a[i] === v ? i : -1;
        }

        let k = Math.floor((j - i) / 2) + i;

        //console.log("binarySearch: i=%s; j=%s; k=%s; v=%s", i, j, k, v);

        if (a[k] === v) {
            return k;
        }

        if (a[k] < v) {
            return binarySearch(v, a, k + 1, j);
        }

        return binarySearch(v, a, i, k - 1);
    }

    return binarySearch(v, a, 0, a.length);
};
