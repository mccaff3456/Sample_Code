let N = 6;
let arr = [3, 6, 2, 1, 5];

let missing = (N*(N+1)/2) - arr.reduce((a,b) => (a+b));

console.log("N: " + N + ", arr " + arr + ", missing = " + missing);