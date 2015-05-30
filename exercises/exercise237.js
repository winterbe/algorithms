// Exercise 2.3-7
// s is a set of positive integers (excluding zero).
// check if two numbers exist in s which sum is equal to x
function check(s, x) {
    let a = [];
    for (let i = 0; i < s.length; i++) {
        let v = s[i];
        if (v < x) {
            a[v] = 1;
        }
    }

    let q = Math.floor(x / 2) - 1;
    for (let i = x-1; i >= q; i--) {
        let j = x - i;
        //console.log("i=%s; j=%s; x=%s", i, j, x);
        if (i !== j && a[i] === 1 && a[j] === 1) {
            return true;
        }
    }
    return false;
}



let s = [1, 3, 4, 5];

let test = (x) => console.log(`${x}: ${check(s, x)}`);

for (let i = 1; i < 11; i++) {
    test(i);
}
