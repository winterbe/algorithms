let insertionSort = require("./insertionSort.js");
let selectionSort = require("./selectionSort.js");
let mergeSort = require("./mergeSort.js");
let bubbleSort = require("./bubbleSort.js");


let numbers = [8, 4, 2, 3, 1, 7, 3];

//insertionSort(numbers);
//selectionSort(numbers);
//mergeSort(numbers);
bubbleSort(numbers);

console.log("Result: ", numbers);
