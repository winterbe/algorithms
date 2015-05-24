function merge(a, p, q, r) {
    //console.log("p=%s; q=%s; r=%s", p, q, r);

    let n1 = q - p + 1;
    let n2 = r - q;
    let left = [];
    let right = [];

    for (let i = 0; i < n1; i++) {
        left[i] = a[p + i];
    }

    for (let j = 0; j < n2; j++) {
        right[j] = a[q + j + 1];
    }

    left.push(Number.MAX_VALUE);
    right.push(Number.MAX_VALUE);

    let i = 0;
    let j = 0;

    for (let k = p; k <= r; k++) {
        if (left[i] <= right[j]) {
            a[k] = left[i];
            i++;
        } else if (right[j]) {
            a[k] = right[j];
            j++;
        }
    }
}

function mergeSort(a, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSort(a, p, q);
        mergeSort(a, q + 1, r);
        merge(a, p, q, r);
    }
}

module.exports = function (a) {
    mergeSort(a, 0, a.length - 1);
};
