let insertionSort = function (array) {
    for (var j = 1; j < array.length; j++) {
        let val = array[j];
        let i = j - 1;
        while (i >= 0 && array[i] > val) {
            array[i + 1] = array[i];
            i -= 1;
        }
        array[i + 1] = val;
    }
};

let selectionSort = function (array) {
    for (var j = 0; j < array.length - 1; j++) {
        let k = undefined;
        for (var i = j; i < array.length; i++) {
            if (k === undefined || array[i] < array[k]) {
                k = i;
            }
        }
        let tmp = array[j];
        array[j] = array[k];
        array[k] = tmp;
    }
}

let numbers = [4, 2, 3, 1, 7, 3];

// insertionSort(numbers);
selectionSort(numbers);

console.log(numbers);
