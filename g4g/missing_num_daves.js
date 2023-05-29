let N = 6;
let arr = [3, 6, 2, 1, 5];

let sum = arr.reduce((a,b) => (a+b));

console.log("arr " + arr + ", sum = " + sum);

console.log((N*(N+1)/2) - sum);
