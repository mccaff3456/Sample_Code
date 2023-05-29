let arr = [3, 6, 2, 1, 5]; // N = 6
let N = arr.length;
let sumA = N*(N+1)/2

let sum = arr.reduce((a,b) => (a+b));

let nMissing = sumA - sum

console.log("Missing # =" + nMissing);